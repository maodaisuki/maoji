var moment = require('moment')
var AV = require('leancloud-storage')
var APP_ID = '_____'
var APP_KEY = '____'

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
})

/*=============================================
=            手机验证码注册/登录函数            =
=============================================*/

//获取验证码
/**
 *@params phoneNumber:string
 */
Parse.Cloud.define('requestSmsCode', function(req, res) {
  let phoneNumber = req.params.phoneNumber
  AV.Cloud.requestSmsCode({
    mobilePhoneNumber: phoneNumber
  }).then(function() {
    //调用成功
    res.success('发送成功')
  }, function(err) {
    //调用失败
    res.error('发送失败')
  });
})

//使用短息验证码注册或登录系统，用户不存在时自动注册。
/**
 *@params phoneNumber:string
 *@params code:string
 *return sessionToken
 */
Parse.Cloud.define('signUpOrlogInWithMobilePhone', function(req, res) {
  let phoneNumber = req.params.phoneNumber,
    code = req.params.code
  if (!phoneNumber || !code) {
    return res.error('手机号码或验证码不能为空')
  }
  AV.Cloud.verifySmsCode(code, phoneNumber).then(function() {
    let query = new Parse.Query(Parse.User)
    query.equalTo('phone', phoneNumber)
    query.limit(1)
    query.include(['smsCode'])
    return query.find({ useMasterKey: true })
  }).then(async function([user]) {
    if (user) {
      //登录
      return Parse.User.logIn(user.get('phone'), user.get('smsCode').get('code')).then(user => {
        return res.success(user.getSessionToken())
      })
    } else {
      //注册
      let user = new Parse.User()
      user.set('username', phoneNumber)
      // 使用验证码作为密码
      user.set('password', code)

      // 因password不可见，固保存到SmsCode，并禁止任何人读写，仅用作云代码登录用。
      // 若担心黑客使用监听网络拿到验证码登录，可以写相关触发器拒绝6位数密码登录
      let SmsCode = new Parse.Object('SmsCode')
      let codeACL = new Parse.ACL()
      codeACL.setPublicReadAccess(false)
      codeACL.setPublicWriteAccess(false)
      SmsCode.setACL(codeACL)
      SmsCode.set('code', code)
      SmsCode = await SmsCode.save()

      user.set('smsCode', SmsCode)
      user.set('phone', phoneNumber)
      user.set('phoneVerified', true)
      return user.signUp().then(user => {
        return res.success(user.getSessionToken())
      })
    }
  }).catch(res.error)
})
/*=====  手机验证码注册/登录函数 结束  ======*/

// 云函数测试
Parse.Cloud.define('hello', req => {
  console.log("云函数测试")
  return "云函数测试成功";
});
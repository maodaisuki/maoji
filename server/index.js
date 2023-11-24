// 基于官方例子的Parse后端服务脚手架

var express = require('express');
var ParseServer = require('parse-server').ParseServer;
var path = require('path');
var ParseDashboard = require('parse-dashboard');

var databaseUri = process.env.DATABASE_URI || process.env.MONGODB_URI;
var serverURL = process.env.SERVER_URL || 'http://localhost:1337/parse';

if (!databaseUri) {
    console.log('DATABASE_URI not specified, falling back to localhost.');
}

var api = new ParseServer({
    databaseURI: databaseUri || 'mongodb://localhost:27017/dev',
    cloud: process.env.CLOUD_CODE_MAIN || __dirname + '/cloud/main.js',
    appId: process.env.APP_ID || 'myAppId',
    javascriptKey: process.env.CLIENT_KEY || '',
    masterKey: process.env.MASTER_KEY || '', //master key ，打死也不要告诉别人！
    serverURL: serverURL, // 如果使用https不要忘了修改它
    customPages: 'parseFrameURL',
    liveQuery: {
        classNames: ["Posts", "Comments"] // 配置支持实时请求的class表
    },
    filesAdapter: {
        module: '@parse/fs-files-adapter',
        options: {
            'filesSubDirectory': ''
        }
    }, // 启用邮箱验证
    verifyUserEmails: true,

    // 如果 `verifyUserEmails` 为 `true` 并且
    // 如果 `emailVerifyTokenValidityDuration` 为 `undefined` 那么
    // email verify token 永不过期
    // 否则
    // email verify token 在`emailVerifyTokenValidityDuration`之后过期
    //
    // `emailVerifyTokenValidityDuration` 默认为 `undefined`
    //
    // 2小时候过期 (= 2 * 60 * 60 == 7200 seconds)
    emailVerifyTokenValidityDuration: 2 * 60 * 60, //单位秒 (2 hours = 7200 seconds)

    // 设置为false，允许用户未验证也能登录
    // 设置为true，则必须验证才能登录
    preventLoginWithUnverifiedEmail: false, // 默认 false

    // 你的应用的URL
    // 将会出现在验证邮箱和密码重置的链接中
    // 就像设置serverURL一样
    publicServerURL: serverURL,
    // 你的应用名，将作为邮件主题
    appName: 'Parse App',
    emailAdapter: {
        module: 'parse-zh-email-adapter',
        options: {
            service: 'QQ||163||Gmail||……',
            email: 'smtp账号@qq.com',
            password: 'smtp密码'
        }

    }
});

var app = express();

// 静态资源目录
app.use('/public', express.static(path.join(__dirname, '/public')));

//仪表盘可配置多应用以及访问权限，还可以作为单独的Node项目运行，参考https://github.com/parse-community/parse-dashboard
var dashboard = new ParseDashboard({
    "apps": [{
        "serverURL": serverURL,
        "appId": process.env.APP_ID || 'myAppId',
        "masterKey": process.env.MASTER_KEY || '',
        "appName": "MyApp"
    }],
    "users": [{
        "user": 'admin',
        "pass": '123456',
        // "readOnly": false,
        // "apps": [{ "appId": "MyApp" }]
    }],
});

app.use('/dashboard', dashboard);

// 设置Parse服务地址
var mountPath = process.env.PARSE_MOUNT || '/parse';
app.use(mountPath, api);

// Parse Server plays nicely with the rest of your web routes
app.get('/', function(req, res) {
    res.status(200).send('嗨，很高兴见到你~');
});

// 配置一个用来测试是否成功运行的路由
app.get('/test', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/test.html'));
});

var port = process.env.PORT || 1337;
var httpServer = require('http').createServer(app);
httpServer.listen(port, function() {
    console.log('parse-server-example running on port ' + port + '.');
});

// 启用实时请求
ParseServer.createLiveQueryServer(httpServer);

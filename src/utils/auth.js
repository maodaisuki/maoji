// Cookie 操作

import Cookies from 'js-cookie'

const userInfo = "userInfo"

//获取用户信息
export function getUserInfo() {
  const user = Cookies.get(userInfo)
  if(user){
    return JSON.parse(user)
  }
  return ''
}

//存储用户信息
export function setUserInfo(user) {
  return Cookies.set(userInfo, JSON.stringify(user))
}
//移除用户信息

export function removeUserInfo() {
  return Cookies.remove(userInfo)
}
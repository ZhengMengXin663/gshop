import ajax from './ajax'
// 根据经纬度获取地址
export const reqAddress = (geohash) => ajax('/api/position/' + geohash)
// 获取食品列表
export const reqFoodList = () => ajax('/index_category')
// 根据经纬度获取商铺列表
export const reqShopList = ({latitude, longitude}) => ajax('/shops', {latitude, longitude})
// 获取一次性验证码
export const reqCaptcha = () => ajax('/captcha')
// 用户名密码登陆
export const loginPwd = ({name, pwd, captcha}) => ajax('/login_pwd', {name, pwd, captcha}, 'POST')
// 发送短信验证码
export const sendCode = phone => ajax('/sendcode', {phone})
// 手机号验证码登陆
export const loginSms = ({phone, code}) => ajax('/login_sms', {phone, code}, 'POST')
// 根据会话获取用户信息
export const reqUserInfo = () => ajax('/userinfo')

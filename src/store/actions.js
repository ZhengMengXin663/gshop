import {RECEIVE_ADDRESS, RECEIVE_CATEGORYS, RECEIVE_SHOPS,RECEIVE_USER_INFO, RECEIVE_SHOP_GOODS, RECEIVE_SHOP_INFO, RECEIVE_SHOP_RATINGS, DECREMENT_FOOD_COUNT, INCREMENT_FOOD_COUNT, CLEAR_CART} from './mutations-type'
import {reqAddress, reqShopList, reqFoodList,reqUserInfo, reqShopGoods, reqShopRatings, reqShopInfo} from '../api'
export default {
  async getAddress ({commit, state}) {
    const {latitude, longitude} = state
    const addressaa = latitude + ',' + longitude
    const result = await reqAddress(addressaa)
    if (result.code === 0) {
      const address = result.data
      commit(RECEIVE_ADDRESS, {address})
    }
  },
  async getCategorys ({commit}) {
    const result = await reqFoodList()
    if (result.code === 0) {
      const categorys = result.data
      commit(RECEIVE_CATEGORYS, {categorys})
    }
  },
  async getShops ({commit, state}) {
    const {latitude, longitude} = state
    const result = await reqShopList({latitude, longitude})
    if (result.code === 0) {
      const shops = result.data
      commit(RECEIVE_SHOPS, {shops})
    }
  },
  saveUserInfo({commit}, userInfo) {
    commit(RECEIVE_USER_INFO, {userInfo})
  },
  async getUserInfo({commit}) {
    const result = await reqUserInfo()
    if (result.code === 0) {
      const userInfo = result.data
      commit(RECEIVE_USER_INFO, {userInfo})
    }
  },
  // 异步获取商家商品列表
  async getShopGoods({commit}, cb) {
    const result = await reqShopGoods()
    if (result.code === 0) {
      const shopGoods = result.data
      commit(RECEIVE_SHOP_GOODS, {shopGoods})
      // 通知组件更新了状态
      cb && cb()
    }
  },

  // 异步获取商家评论列表
  async getShopRatings({commit},cb) {
    const result = await reqShopRatings()
    if (result.code === 0) {
      const shopRatings = result.data
      commit(RECEIVE_SHOP_RATINGS, {shopRatings})
      cb && cb()
    }
  },

  // 异步获取商家信息
  async getShopInfo({commit}) {
    const result = await reqShopInfo()
    if (result.code === 0) {
      const shopInfo = result.data
      commit(RECEIVE_SHOP_INFO, {shopInfo})
    }
  },
  updateFoodCount({commit}, {food, isAdd}) {
    if(isAdd){
      commit(INCREMENT_FOOD_COUNT, {food})
    }else{
      commit(DECREMENT_FOOD_COUNT, {food})
    }
  },
  clearCart ({commit}) {
    commit(CLEAR_CART)
  }
}



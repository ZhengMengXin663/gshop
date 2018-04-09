import {RECEIVE_ADDRESS, RECEIVE_CATEGORYS, RECEIVE_SHOPS, RECEIVE_USER_INFO, RECEIVE_SHOP_GOODS, RECEIVE_SHOP_INFO, RECEIVE_SHOP_RATINGS, INCREMENT_FOOD_COUNT, DECREMENT_FOOD_COUNT, CLEAR_CART} from './mutations-type'
import Vue from 'vue'
export default {
  [RECEIVE_ADDRESS] (state, {address}) {
    state.address = address
  },
  [RECEIVE_CATEGORYS] (state, {categorys}) {
    state.categorys = categorys
  },
  [RECEIVE_SHOPS] (state, {shops}) {
    state.shops = shops
  },
  [RECEIVE_USER_INFO] (state, {userInfo}) {
    state.userInfo = userInfo
  },
  [RECEIVE_SHOP_GOODS] (state, {shopGoods}) {
    state.shopGoods = shopGoods
  },
  [RECEIVE_SHOP_RATINGS] (state, {shopRatings}) {
    state.shopRatings = shopRatings
  },
  [RECEIVE_SHOP_INFO] (state, {shopInfo}) {
    state.shopInfo = shopInfo
  },
  [INCREMENT_FOOD_COUNT] (state, {food}) {
    if(food.count){
      food.count++
    }else{
      Vue.set(food, 'count', 1)
      state.shopCart.push(food)
    }

  },
  [DECREMENT_FOOD_COUNT] (state, {food}) {
    if(food.count>0){
      food.count--
      if(food.count===0){
        state.shopCart.splice(state.shopCart.indexOf(food),1)
      }
    }
  },
  [CLEAR_CART] (state) {
    // 清除购物车所有food的count, 置为0
    state.shopCart.forEach(food => food.count = 0)
    //清空购物车
    state.shopCart = []
  },
}

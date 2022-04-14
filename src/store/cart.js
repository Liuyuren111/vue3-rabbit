import {defineStore} from "pinia";

export const useCartState = defineStore('cart', {
  state: () => ({
    // 购物车商品列表
    cartList: []
  }),

  actions: {
    // async registerUser(login, password) {
    //   try {
    //     this.userData = await api.post({ login, password })
    //     showTooltip(`Welcome back ${this.userData.name}!`)
    //   } catch (error) {
    //     showTooltip(error)
    //     // let the form component display the error
    //     return error
    //   }
    // },
  },
})
import {defineStore} from "pinia";

export const useCategoryState = defineStore('category', {
  state: () => ({
    // 分类信息集合
    categoryList: []
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
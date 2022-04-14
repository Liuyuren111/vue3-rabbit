import {defineStore} from "pinia";

export const useUserState = defineStore('user', {
  state: () => ({
    // 用户信息
    userObj: {
      id: '', // id
      avatar: '', // 头像
      nickName: '', // 昵称
      account: '', // 账号
      mobile: '', // 手机号
      token: '', // token
    }
  }),

  actions: {
    setUser(payload) {
      this.userObj = payload
    }
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'user', // key的值是  localstorage存储的 key
        storage: localStorage,
        path: [] //可以选择保存的字段  其余的不保存
      }
    ]
  }

})
<script setup>
import {useUserState} from "@/store/user";
import {storeToRefs} from "pinia";

const userStore = useUserState()

// 解构赋值会失去响应式，解决办法使用 storeToRefs()
const {userObj} = storeToRefs(userStore)

const logout = (a) => {
  console.log(a)
}
</script>

<template>
  <nav class="app-top">
    <div class="container">
      <ul>
        <template v-if="userObj.token">
          <li>
            <RouterLink to="/member/home">
              <i class="iconfont icon-user"></i>
              {{userObj.account}}
            </RouterLink>
          </li>
          <li><a href="javascript:" @click="logout(this)">退出登录</a></li>
        </template>
        <template v-else>
          <li><RouterLink to="/login">请先登录</RouterLink></li>
          <li><a href="javascript:">免费注册</a></li>
        </template>
        <li><a href="javascript:">我的订单</a></li>
        <li><a href="javascript:">会员中心</a></li>
        <li><a href="javascript:">帮助中心</a></li>
        <li><a href="javascript:">关于我们</a></li>
        <li>
          <a href="javascript:"><i class="iconfont icon-phone"></i>手机版</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.app-top {
  background: #333;
  ul {
    display: flex;
    height: 53px;
    justify-content: flex-end;
    align-items: center;
    li {
      a {
        padding: 0 15px;
        color: #cdcdcd;
        line-height: 1;
        display: inline-block;
        i {
          font-size: 14px;
          margin-right: 2px;
        }
        &:hover {
          color: $xtxColor;
        }
      }
      ~ li {
        a {
          border-left: 2px solid #666;
        }
      }
    }
  }
}
// ~ 选择器作用：选择当前选择器后面的所有元素
</style>

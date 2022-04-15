<script setup>
console.log('aaa')
</script>

<template>
  <div class="login-page">
    <div class="container">
      <h1 class="logo"><router-link to="/">小兔鲜</router-link></h1>
      <h3>欢迎登陆</h3>
      <a href="/">
        进入网站首页
        <i class="iconfont icon-angle-right"></i>
        <i class="iconfont icon-angle-right"></i>
      </a>

    </div>
  </div>
</template>

<style lang="scss" scoped>
.login-page{
  .logo{
    width: 200px;
    a{
      width: 100%;
      height: 132px;
      display: block;
      text-indent: -9999px;
      background: url("../assets/images/logo.png") no-repeat center 18px / contain;;
    }
  }
}
</style>
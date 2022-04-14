<script setup>

</script>

<template>
<div class="AppHeader">
  <div class="container">
    <h1 class="logo"><router-link to="/">小兔鲜</router-link></h1>
    <ul class="app-header-nav">
      <li><router-link to="/">首页</router-link></li>
      <li> <a href="#">居家</a> </li>
      <li><a href="#">美食</a></li>
      <li><a href="#">服饰</a></li>
      <li><a href="#">母婴</a></li>
      <li><a href="#">个护</a></li>
      <li><a href="#">严选</a></li>
      <li><a href="#">数码</a></li>
      <li><a href="#">运动</a></li>
      <li><a href="#">杂项</a></li>
    </ul>
    <div class="search">
      <i class="iconfont icon-search"></i>
      <input type="text" placeholder="搜一搜">
    </div>
    <div class="cart">
      <a class="curr" href="#">
        <i class="iconfont icon-cart"></i><em>73</em>
      </a>
    </div>
  </div>
</div>
</template>

<style lang="scss" scoped>
.AppHeader{
  background: #FFF;
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
  .container{
    display: flex;
    align-items: center;
    .app-header-nav{
      width: 820px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      padding-left: 40px;
      li{
        margin-right: 40px;
        width: 38px;
        text-align: center;
        a{
          font-size: 16px;
          line-height: 32px;
          height: 32px;
          display: inline-block;
        }
        &:hover{
          a{
            color: $xtxColor;
            border-bottom: 1px solid $xtxColor;
          }
        }
      }
    }
    .search{
      width: 170px;
      height: 32px;
      position: relative;
      border-bottom: 1px solid #e7e7e7;
      line-height: 32px;
      i{
        font-size: 18px;
        margin-left: 5px;
      }
      input{
        width: 140px;
        padding-left: 5px;
        color: #666;
      }

    }
    .cart{
      width: 50px;
      .curr{
        height: 32px;
        line-height: 32px;
        text-align: center;
        position: relative;
        display: block;
        .icon-cart{
          font-size: 22px;
        }
        em{
          font-style: normal;
          position: absolute;
          right: 0;
          top: 0;
          padding: 1px 6px;
          line-height: 1;
          background: $helpColor;
          color: #fff;
          font-size: 12px;
          border-radius: 10px;
          font-family: Arial;
        }
      }
    }
  }
}
</style>
<template>
<!-- 主页 组件容器 -->
  <AppTop></AppTop>
  <AppHeader></AppHeader>
  <main class="main">内容</main>
  <AppFooter></AppFooter>
  <button @click="handleBtn1">按钮1</button>
  <button @click="handleBtn2">按钮2</button>
</template>

<script setup>
import AppTop from '@/components/app/AppTop.vue'
import AppHeader from '@/components/app/AppHeader.vue'
import AppFooter from '@/components/app/AppFooter.vue'

import {useMessage} from "@/hooks/useMessage";
const {error,success} = useMessage()

const handleBtn1 = () =>{
  error('登陆失败')
}
const handleBtn2 = () =>{
  success('登陆成功')
}
</script>

<style lang="scss" scoped>
.main{
  min-height: 600px;
}
</style>

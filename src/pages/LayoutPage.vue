<template>
<!-- 主页 组件容器 -->
  <AppTop></AppTop>
  <AppHeader></AppHeader>
  <main class="main">内容</main>
  <AppFooter></AppFooter>
</template>

<script setup>
import AppTop from '@/components/AppTop.vue'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>

<style lang="scss" scoped>
.main{
  min-height: 600px;
}
</style>

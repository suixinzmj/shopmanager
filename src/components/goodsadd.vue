<template>
  <el-card class="box">
    <!-- 面包屑 -->
    <cus-bread level1="商品管理" level2="商品列表"></cus-bread>
    <!-- 添加商品信息提示信息 -->
    <el-alert title="添加商品信息" type="info" center show-icon class="aleart"></el-alert>
  </el-card>
</template>

<script>
export default {};
</script>

<style>
.box {
  height: 100%;
}
.aleart {
    margin-top: 20px;
}
</style>

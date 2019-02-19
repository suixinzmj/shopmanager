<template>
  <el-card class="box">
    <!-- 面包屑 -->
    <cus-bread level1="商品管理" level2="商品列表"></cus-bread>
    <!-- 添加商品信息提示信息 -->
    <el-alert title="添加商品信息" type="info" center show-icon class="aleart"></el-alert>
    <!-- 步骤条 -->
    <el-steps :active="active * 1" align-center>
      <el-step title="基本信息"></el-step>
      <el-step title="商品参数"></el-step>
      <el-step title="商品属性"></el-step>
      <el-step title="商品图片"></el-step>
      <el-step title="商品内容"></el-step>
    </el-steps>
  </el-card>
</template>

<script>
export default {
    data() {
        return {
            active: "1"
        }
    }
};
</script>

<style>
.box {
  height: 100%;
}
.aleart {
  margin: 20px 0;
}
</style>

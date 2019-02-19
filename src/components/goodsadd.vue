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
    <!-- tabs标签 -->
    <el-form :model="form" class="form" label-position="top" label-width="80px">
      <el-tabs tab-position="left" @tab-click="changeTab()" v-model="active">
        <el-tab-pane label="基本信息" name="1">基本信息</el-tab-pane>
        <el-tab-pane label="商品参数" name="2">商品参数</el-tab-pane>
        <el-tab-pane label="商品属性" name="3">商品属性</el-tab-pane>
        <el-tab-pane label="商品图片" name="4">商品图片</el-tab-pane>
        <el-tab-pane label="商品内容" name="5">商品内容</el-tab-pane>
      </el-tabs>
    </el-form>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      active: "1",
      form: {

      }
    };
  },
  methods: {
      changeTab(){}
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
.form {
  margin-top: 20px;
  height: 400px;
  overflow: auto;
}
</style>

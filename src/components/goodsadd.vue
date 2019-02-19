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
        <el-tab-pane label="基本信息" name="1">
          <el-form-item label="商品名称">
            <el-input v-model="form.goods_name"></el-input>
          </el-form-item>
          <el-form-item label="商品价格">
            <el-input v-model="form.goods_price"></el-input>
          </el-form-item>
          <el-form-item label="商品重量">
            <el-input v-model="form.goods_weight"></el-input>
          </el-form-item>
          <el-form-item label="商品数量">
            <el-input v-model="form.goods_number"></el-input>
          </el-form-item>
          <el-form-item label="商品分类">
            <el-cascader
              clearable
              expand-trigger="hover"
              :options="options"
              :props="defaultProp"
              v-model="selectedOptions2"
              @change="handleChange"
            ></el-cascader>
          </el-form-item>
        </el-tab-pane>
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
        goods_name: "",
        goods_cat: "",
        goods_price: "",
        goods_number: "",
        goods_weight: "",
        goods_introduce: "",
        pics: "",
        attrs: ""
      },
      options: [],
      selectedOptions2: [1, 3, 6],
      defaultProp: {
        label: "cat_name",
        value: "cat_id"
      }
    };
  },
  created() {
    this.getGoodsCate();
  },
  methods: {
    handleChange() {},
    changeTab() {},

    // 获取三级商品分类数据
    async getGoodsCate() {
      const res = await this.$http.get(`categories?type=3`);
      const {
        meta: { msg, status },
        data
      } = res.data;
      if (status === 200) {
        this.options = data;
      }
      console.log(this.options);
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
.form {
  margin-top: 20px;
  height: 400px;
  overflow: auto;
}
</style>

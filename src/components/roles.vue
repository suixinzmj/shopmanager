<template>
  <el-card class="box">
    <!-- 面包屑 -->
    <cus-bread level1="权限管理" level2="角色列表"></cus-bread>
    <!-- 添加角色按钮 -->
    <el-button type="success" @click="showDiaAddUser()" class="addRoles">添加角色</el-button>
  </el-card>
</template>

<script>
export default {};
</script>

<style>
.box {
  height: 100%;
}
.addRoles {
  margin-top: 20px;
}
</style>

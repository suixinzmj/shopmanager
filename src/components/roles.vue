<template>
  <el-card class="box">
    <!-- 面包屑 -->
    <cus-bread level1="权限管理" level2="角色列表"></cus-bread>
    <!-- 添加角色按钮 -->
    <el-button type="success" @click="showDiaAddUser()" class="addRoles">添加角色</el-button>
    <!-- 表格 -->
    <el-table :data="roles" style="width: 100%">
      <el-table-column type="expand" width="80">
          <template slot-scope="props"></template>
      </el-table-column>
      <el-table-column type="index" label="#" width="180"></el-table-column>
      <el-table-column prop="roleName" label="角色名称" width="200"></el-table-column>
      <el-table-column prop="roleDesc" label="角色描述" width="300"></el-table-column>
      <el-table-column label="操作" width="200">
        <template slot-scope="scope">
          <el-button type="primary" icon="el-icon-edit" circle size="mini" plain></el-button>
          <el-button
            @click="showDiaSetRights(scope.row)"
            type="success"
            icon="el-icon-check"
            circle
            size="mini"
            plain
          ></el-button>
          <el-button type="danger" icon="el-icon-delete" circle size="mini" plain></el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      roles: []
    };
  },
  created() {
    this.getRoles();
  },
  methods: {
    showDiaSetRights() {},
    async getRoles() {
      const res = await this.$http.get(`roles`);
      const {
        meta: { msg, status },
        data
      } = res.data;
      if (status === 200) {
        this.roles = data;
      }
    }
  }
};
</script>

<style>
.box {
  height: 100%;
}
.addRoles {
  margin-top: 20px;
}
</style>

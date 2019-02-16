<template>
  <el-card class="box">
    <!-- 面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 搜索框 -->
    <el-row class="seartBox">
      <el-col>
<<<<<<< HEAD
        <!-- 搜索框 -->
        <el-input
          @clear="getAllUsers()"
          placeholder="请输入内容"
          v-model="query"
          class="searchInput"
          clearable="true"
        >
          <el-button slot="append" icon="el-icon-search" @click="searchUser()"></el-button>
        </el-input>
        <!-- 添加按钮 -->
        <el-button type="success" @click="showDiaAddUser()">添加用户</el-button>
      </el-col>
    </el-row>
    <!-- 表格 -->
    <el-table :data="list" style="width: 100%">
=======
        <el-input placeholder="请输入内容" v-model="query" class="searchInput" clearable="true">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
        <!-- 添加按钮 -->
        <el-button type="success">添加用户</el-button>
      </el-col>
    </el-row>
    <!-- 表格 -->
    <el-table :data="list" stripe style="width: 100%">
>>>>>>> c191b7887f9f45acc7bf66d7560a53b1351a61f6
      <el-table-column prop="id" label="#" width="80"></el-table-column>
      <el-table-column prop="username" label="姓名" width="120"></el-table-column>
      <el-table-column prop="email" label="邮箱" width="140"></el-table-column>
      <el-table-column prop="moblie" label="电话" width="140"></el-table-column>
      <el-table-column label="创建日期" width="140">
        <template slot-scope="scope">{{ scope.row.create_time | fmtdate }}</template>
      </el-table-column>
      <el-table-column label="用户状态" width="140">
        <template slot-scope="scope">
          <el-switch v-model="scope.row.mg_state" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="200">
<<<<<<< HEAD
        <template slot-scope="scope">
          <el-button type="primary" icon="el-icon-edit" circle size="mini" plain></el-button>
          <el-button type="success" icon="el-icon-check" circle size="mini" plain></el-button>
          <el-button type="danger" icon="el-icon-delete" circle size="mini" plain></el-button>
=======
        <template>
          <el-button type="primary" icon="el-icon-edit" circle size="mini" plain></el-button>
          <el-button type="danger" icon="el-icon-delete" circle size="mini" plain></el-button>
          <el-button type="success" icon="el-icon-check" circle size="mini" plain></el-button>
>>>>>>> c191b7887f9f45acc7bf66d7560a53b1351a61f6
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
<<<<<<< HEAD
      class="page"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pagenum"
      :page-sizes="[2, 4,6,8]"
      :page-size="2"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    ></el-pagination>
    <!-- 对话框 -添加用户-->
    <el-dialog title="添加用户" :visible.sync="dialogFormVisibleAdd">
      <!-- 表单 -->
      <el-form label-position="left" label-width="80px" :model="formdata">
        <el-form-item label="用户名">
          <el-input v-model="formdata.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="formdata.password"></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="formdata.email"></el-input>
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model="formdata.mobile"></el-input>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisibleAdd = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisibleAdd = false">确 定</el-button>
      </div>
    </el-dialog>
=======
    class="page"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pagenum"
      :page-sizes="[1, 2, 3]"
      :page-size="1"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    ></el-pagination>
>>>>>>> c191b7887f9f45acc7bf66d7560a53b1351a61f6
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      query: "",
      pagenum: 1,
<<<<<<< HEAD
      pagesize: 2,
      total: -1,
      list: [],
      dialogFormVisibleAdd: false,
      formdata: {
        username: "",
        password: "",
        email: "",
        mobile: ""
      }
=======
      pagesize: 1,
      list: [],
      total: -1
>>>>>>> c191b7887f9f45acc7bf66d7560a53b1351a61f6
    };
  },
  created() {
    this.getTableData();
  },
  methods: {
<<<<<<< HEAD
    // 添加- 打开对话框
    showDiaAddUser() {
      this.dialogFormVisibleAdd = true;
    },

    // 清空显示所有用户
    getAllUsers() {
      this.getTableData();
    },

    // 搜索用户
    searchUser() {
      this.pagenum = 1;
      this.getTableData();
    },

    // 分页相关
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
=======
    // 分页相关
    handleSizeChange(val) {
>>>>>>> c191b7887f9f45acc7bf66d7560a53b1351a61f6
      this.pagenum = 1;
      this.pagesize = val;
      this.getTableData();
    },
    handleCurrentChange(val) {
<<<<<<< HEAD
      console.log(`当前页: ${val}`);
      this.pagenum = val;
      this.getTableData();
    },

=======
      this.pagenum = val;
      this.getTableData();
    },
>>>>>>> c191b7887f9f45acc7bf66d7560a53b1351a61f6
    // 请求数据
    async getTableData() {
      // 设置请求头 权限设置
      const AUTH_TOKEN = localStorage.getItem("token");
      this.$http.defaults.headers.common["Authorization"] = AUTH_TOKEN;
      // 请求数据
      const res = await this.$http.get(
        `users?query=${this.query}&pagenum=${this.pagenum}&pagesize=${
          this.pagesize
        }`
      );
      const {
        data,
        meta: { msg, status }
      } = res.data;
      if (status === 200) {
        this.list = data.users;
        this.total = data.total;
      }
    }
  }
};
</script>

<style>
.box {
  height: 100%;
}
.seartBox {
  margin-top: 20px;
}
.searchInput {
  width: 350px;
}
.page {
<<<<<<< HEAD
  margin-top: 20px;
=======
    margin-top: 20px;
>>>>>>> c191b7887f9f45acc7bf66d7560a53b1351a61f6
}
</style>

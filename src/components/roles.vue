<template>
  <el-card class="box">
    <!-- 面包屑 -->
    <cus-bread level1="权限管理" level2="角色列表"></cus-bread>
    <!-- 添加角色按钮 -->
    <el-button type="success" @click="showDiaAddUser()" class="addRoles">添加角色</el-button>
    <!-- 表格 -->
    <el-table :data="roles" style="width: 100%">
      <el-table-column type="expand" width="80">
        <template slot-scope="scope">
          <el-row v-for="(item1, i) in scope.row.children" :key="item1.id" class="level1">
            <el-col :span="4">
              <el-tag @close="deleRights(scope.row,item1)" closable>{{ item1.authName }}</el-tag>
              <i class="el-icon-arrow-right"></i>
            </el-col>
            <el-col :span="20">
              <el-row v-for="(item2, i) in item1.children" :key="item2.id" class="level2">
                <el-col :span="4">
                  <el-tag
                    @close="deleRights(scope.row,item2)"
                    closable
                    type="warning"
                  >{{ item2.authName }}</el-tag>
                  <i class="el-icon-arrow-right"></i>
                </el-col>
                <el-col :span="20">
                  <el-tag
                    @close="deleRights(scope.row,item3)"
                    closable
                    type="info"
                    v-for="(item3, i) in item2.children"
                    :key="item3.id"
                  >{{ item3.authName }}</el-tag>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
          <el-row v-if="scope.row.children.length===0">
            <el-col>
              <span>未分配权限</span>
            </el-col>
          </el-row>
        </template>
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
    <!-- 对话框 -->
    <el-dialog title="分配权限" :visible.sync="dialogFormVisible">
      <!--
        data数据源
        node-key每个节点唯一标识
        default-expanded-keys[] 默认展开
      default-checked-keys [] 默认选中
      props配置选项{label/children}
      -->
      <el-tree
        ref="treeDom"
        :data="treelist"
        show-checkbox
        node-key="id"
        default-expand-all
        :default-checked-keys="arrCheck"
        :props="defaultProps"
      ></el-tree>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="setRights()">确 定</el-button>
      </div>
    </el-dialog>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      roles: [],
      dialogFormVisible: false,
      treelist: [],
      arrCheck: [],
      defaultProps: {
        label: "authName",
        children: "children"
      },
      currRoleId: -1
    };
  },
  created() {
    this.getRoles();
  },
  methods: {
    async setRights() {
      const arr1 = this.$refs.treeDom.getCheckedKeys();
      const arr2 = this.$refs.treeDom.getHalfCheckedKeys();
      const arr = [...arr1, ...arr2];

      const res = await this.$http.post(`roles/${this.currRoleId}/rights`, {
        rids: arr.join(",")
      });

      const {
        meta: { msg, status },
        data
      } = res.data;
      if (status === 200) {
        this.dialogFormVisible = false;
        this.getRoles();
      }
    },
    // 分配权限 - 打开对话框
    async showDiaSetRights(role) {
      this.currRoleId = role.id;
      const res = await this.$http.get(`rights/tree`);
      const {
        meta: { msg, status },
        data
      } = res.data;
      if (status === 200) {
        this.treelist = data;
        const temp2 = [];
        role.children.forEach(item1 => {
          item1.children.forEach(item2 => {
            item2.children.forEach(item3 => {
              temp2.push(item3.id);
            });
          });
        });

        this.arrCheck = temp2;
      }
      this.dialogFormVisible = true;
    },
    async deleRights(role, rights) {
      const res = await this.$http.delete(
        `roles/${role.id}/rights/${rights.id}`
      );
      const {
        meta: { msg, status },
        data
      } = res.data;
      if (status === 200) {
        this.$message.success(msg);
        role.children = data;
      }
    },
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
.level1 {
  margin-top: 10px;
}
</style>

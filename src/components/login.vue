<template>
  <div class="login-wrap">
    <el-form class="login-form" label-position="top" label-width="80px" :model="formdata">
      <h2>用户登录</h2>
      <el-form-item label="用户名">
        <el-input v-model="formdata.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="formdata.password"></el-input>
      </el-form-item>
      <el-button @click.prevent="handleLogin()" class="login-btn" type="success">登录</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formdata: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    // 发送登录请求
    async handleLogin () {
      // 简化处理结果res
      const res = await this.$http.post(`login`, this.formdata)
      const {
        data:{
          data: { token },
          meta: { msg, status }
        }
      } = res

      if (status === 200) {
        // 存储token到本地存储localStotage
        localStorage.setItem('token', token)
        // 渲染home.vue组件 编程时导航
        this.$router.push({
          name: 'home'
        })
      } else {
        this.$message.error(msg)
      }
      
      // 处理异步操作结果res
      // this.$http.post(`login`, this.formdata)
      //   .then(res => {
      //     console.log(res)
      //     const {
      //       data: {
      //         data,
      //         meta: {msg, status}
      //       }
      //     } = res
      //     if (status === 200) {
      //       // 渲染home.vue组件 编程时导航
      //       this.$router.push({
      //         name: 'home'
      //       })
      //     } else {
      //       this.$message.error(msg)
      //     }
      //   })
    }
  }
}
</script>

<style>
  .login-wrap {
    background-color: #324152;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .login-form {
    background-color: #fff;
    width: 400px;
    padding: 30px;
    border-radius: 5px;
  }
  .login-btn {
    width: 100%;
  }
</style>

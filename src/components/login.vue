<template>
  <div class="login-wrap">
    <el-form class="login-form" label-position="top" label-width="80px" :model="formdate">
      <el-form-item label="用户名">
        <el-input v-model="formdate.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formdate.password"></el-input>
      </el-form-item>
      <el-button @click.prevent="handleLogin()" class="login-btn">登录</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formdate: {
        username: '',
        password: ''
      }
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
</style>

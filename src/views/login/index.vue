<template>
    <div class="login-container">
      <el-card class="login-card" shadow="hover">
        <h2 class="login-title">安舒健康体检中心&nbsp;&nbsp;用户登录</h2>
        <el-form class="login-form" :model="form" ref="formRef" :rules="rules" >
          <el-form-item prop="username" label="用户名：" label-width="80px">
            <el-input v-model.trim="form.username" placeholder="Username"></el-input>
          </el-form-item>
          <el-form-item prop="password" label="密码：" label-width="80px">
            <el-input v-model.trim="form.password" type="password" placeholder="Password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" class="login-button" @click="submitForm">登录</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </template>
  
  <script setup>
  import { ref, unref } from 'vue'
  import { useRouter } from 'vue-router'

  const router = useRouter()
  const form = ref({
    username: '',
    password: ''
  }),
  formRef = ref()
  
  const rules = {
    username: [
      { required: true, message: '请输入用户名', trigger: 'blur' }
    ],
    password: [
      { required: true, message: '请输入账户密码', trigger: 'blur' }
    ]
  }
  
  function submitForm() {
    unref(formRef).validate((valid) => {
      if (valid) {
        console.log('Form submitted:', form.value)
        router.push('/health')
      }
    })
  }
  </script>
  
  <style scoped lang="scss">
  .login-container {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f5f5f5;
  }
  
  .login-card {
    width: 450px;
    max-width: 90%;
    border-radius: 5px;
    padding: 40px 20px;
    box-sizing: border-box;
  }
  
  .login-title {
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
  }
  
  .login-form {
    width: 100%;
  }
  
.login-button {
  width: 80%;
  margin: 20px auto;
}

  
</style>
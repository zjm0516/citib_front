<template>
  <el-container  id="form">
    <el-main id="login">
      <h1>Title</h1>
      <p>用户名</p><el-input v-model="username" placeholder="请输入用户名" clearable prefix-icon="el-icon-user"></el-input>
      <p>密码</p><el-input v-model="password" placeholder="请输入密码" show-password clearable prefix-icon="el-icon-key"></el-input>
      <a href="/" id="signup">注册新账号</a>
      <el-footer style="padding-top: 20px; text-align: center">
        <el-button type="primary" round size="max" onclick="submit">登录</el-button>
      </el-footer>
    </el-main>
  </el-container>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {
        username: '',
        password: ''
      }
    },
    methods:{
      submit: function(){
        this.$message('111');
/*      if (this.username=="" || this.password==""){
          this.$message.error({
            message: '用户名和密码不能为空！',
            center:true
          });
        }
        else if(用户名不存在){
          this.$message.error({
            message:'用户不存在！',
            center:true
          })
        }
        else if(密码不匹配){
          this.$message.error({
            message:'用户名或密码错误！',
            center:true
          })
        else if(登录成功){

          }*/
      }
    }
}
</script>

<style>
#form{
  height: auto;
  width: auto;
  /*background-image:背景图*/
  float: right;
}
#login{
  height: auto;
  width: 350px;
  border: 1px solid lightblue;
  float: right;
  margin-top: 140px;
  margin-right: 150px;
}
#signup{
  font-size: 14px;
}
</style>

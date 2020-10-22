<template>
  <el-container  id="form">
    <el-main id="login">
      <h1>Title</h1>
      <p style="text-align:left">用户名</p><el-input v-model="username" placeholder="请输入用户名" clearable prefix-icon="el-icon-user"></el-input>
      <p style="text-align:left">密码</p><el-input v-model="password" placeholder="请输入密码" show-password clearable prefix-icon="el-icon-key"></el-input>

      <el-footer style="padding-top: 20px; text-align: center">
        <el-button type="primary" round size="max" @click="submit" style="margin-left: 110px;">登录</el-button>
        <a  id="signup" style=" margin-left: 50px;" @click="register">注册新账号</a>
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
      submit(){
        if (this.username=="" || this.password==""){
          this.$message.error({
            message: '用户名和密码不能为空！',
            center:true
          });}
        else {
          this.$axios.post("/login", {username: this.username, password: this.password})
            .then(res =>{
              if (res.result) {
                this.$message.success("登陆成功");
                this.$router.push({path: '/'});
              } else {
                this.$message.error({
                  message: res.message,
                  center: true
                })}
            })
            .catch(function (error) {
            console.log(error);
          });


        }


      },
      register(){
        this.$router.push("/Regist")
      },
    },
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
  width: 400px;
  border: 1px solid lightblue;
  float: right;
  margin-top: 140px;
  margin-right: 150px;
}
#signup{
  font-size: 14px;
}
</style>

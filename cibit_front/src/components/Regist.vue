<template>
  <el-container  id="form">
    <el-main id="regist">
      <h1>Title</h1>
      <p style="text-align:left">用户名</p><el-input v-model="username" placeholder="请输入用户名" clearable prefix-icon="el-icon-user"></el-input>
      <p style="text-align:left">密码</p><el-input v-model="password" placeholder="请输入密码" show-password clearable prefix-icon="el-icon-key"></el-input>
      <p style="text-align:left">确认密码</p><el-input v-model="passwordAgain" placeholder="请输入密码"  show-password></el-input>

      <el-footer style="padding-top: 20px; text-align: center">
        <el-button type="primary" round size="max" @click="regist">注册</el-button>
        <el-button type="primary" round size="max" @click="login">返回登陆</el-button>
      </el-footer>
    </el-main>
  </el-container>
</template>

<script>
    export default {
        name: "regist",
      data()
      {
        return{
          username: '',
          password: '',
          passwordAgain:'',

        }
      },
      watch:{

      },
      methods:{
        regist(){
          if(this.username==""||this.passwordAgain==""||this.password=="")
          {
            this.$message.error({
              message: '用户名和密码不能为空！',
              center:true
            });
          }
          else
          {
            if(this.password!=this.passwordAgain)
            {
              this.$message({
                showClose: true,
                message: '密码不一致,请重新输入',
                type: 'error'
              });
              this.passwordAgain="";

            }
            else
            {
              this.$axios.post("/regist",{username:this.username,password:this.password})
                .then(res=>{

                })
                .catch(function (error) {
                  console.log(error);
                });
            }
          }

        },
        login(){
          this.$router.push("/");
        },
      }
    }
</script>

<style scoped>
  #form{
    height: auto;
    width: auto;
    /*background-image:背景图*/
    float: right;
  }
  #regist{
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

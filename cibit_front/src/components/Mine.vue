<template>
  <el-container direction="vertical">
    <div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <!--        //为每个界面写跳转-->
      <el-menu-item index="1" @click="changeToHomePage">首页</el-menu-item>
      <el-menu-item index="2" @click="changeToKanpan">看盘</el-menu-item>
      <el-menu-item index="3" @click="changeTorealTimeInfo">资讯</el-menu-item>
      <el-menu-item index="4" @click="changeToService">服务</el-menu-item>
      <el-menu-item index="5" @click="changeToMine" style="position: absolute; left: 90%;">我的</el-menu-item>
      <!--        //原来我的的格式，带小人的。-->
      <!--        <div class="el-icon-user-solid" style="font-size: 40px"></div>-->
    </el-menu>
    </div>

    <el-container height="800px">

<!--      侧边菜单栏-->
    <el-aside width="200px">
      <el-menu default-active="1" unique-opened>
          <el-menu-item index="1" @click="changeItem('1')">
            <b style="text-align: center; font-size: medium;">账户设置</b>
          </el-menu-item>
          <el-menu-item index="2" @click="changeItem('2')">
            <b style="text-align: center; font-size: medium;">系统设置</b>
          </el-menu-item>
        <el-submenu index="3">
          <template slot="title">
            <b style="text-align: center; font-size: medium;">产品服务</b>
          </template>
          <el-menu-item index="3-1" @click="changeItem('3-1')">
            <p>产品介绍</p>
          </el-menu-item>
          <el-menu-item index="3-2" @click="changeItem('3-2')">
            <p>问题和建议</p>
          </el-menu-item>
          <el-menu-item index="3-3" @click="changeItem('3-3')">
            <p>免责条款</p>
        </el-menu-item>
          <el-menu-item index="3-4" @click="changeItem('3-4')">
            <p>隐私政策</p>
          </el-menu-item>
          <el-menu-item index="3-5" @click="changeItem('3-5')">
            <p>用户协议</p>
        </el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>

<!--      主要部分-->
      <el-main>
        <div v-show="AccSetting" class="left1">
          <h1 class="left2">账户设置</h1><br>
          <el-form label-width="12%">
            <h4 class="left3">绑定手机号</h4>
            <el-form-item label="电话号码">
              <el-col span="8">
              <el-input v-model="phone" placeholder="请输入电话号码" ></el-input>
              </el-col>
              <el-col span="1"><p> </p></el-col>
              <el-button  @click="sendCode" :disabled="ResendCode">{{SendCode}}</el-button>
            </el-form-item>
            <el-form-item label="验证码">
              <el-col span="8">
              <el-input v-model="veriCode" placeholder="请输入短信验证码" ></el-input>
              </el-col>
            </el-form-item>
            <el-form-item>
              <el-button @click="submitCode">提交</el-button>
            </el-form-item>
          </el-form>
          <h4 class="left3">绑定邮箱</h4>
          <el-form label-width="12%">
            <el-form-item label="邮箱账号">
              <el-col span="8">
                <el-input v-model="email" placeholder="请输入邮箱账号" ></el-input>
              </el-col>
              <el-col span="1"><p> </p></el-col>
              <el-button @click="sendEmail" :disabled="ResendEmail">{{SendEmail}}</el-button>
            </el-form-item>
          </el-form>
          <h4 class="left3">修改密码</h4>
          <el-form label-width="12%">
            <el-form-item label="原密码">
              <el-col span="8">
                <el-input v-model="oldpwd" show-password placeholder="请输入原密码" ></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="新密码">
              <el-col span="8">
                <el-input v-model="newpwd" show-password placeholder="请输入新密码" ></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="确认新密码">
              <el-col span="8">
                <el-input v-model="confirmpwd" show-password placeholder="请再次输入新密码" ></el-input>
              </el-col>
            </el-form-item>
            <el-form-item>
              <el-button @click="changePwd">确定修改</el-button>
            </el-form-item>
          </el-form>
          <h4 class="left3">切换账号</h4>
          <el-button @click="changeAcc" style="margin-left: 6%;width: 35%;background-color: #8cc5ff;color: #FFFFFF">切换账号</el-button><br><br>
          <el-button @click="closeAcc" style="margin-left: 6%;width: 35%;background-color: #DC143C;color: #FFFFFF">注销账号</el-button>
        </div>
        <div v-show="SysSetting" class="left1">
          <h1 class="left2">系统设置</h1><br>
          <el-form label-width="12%">
            <el-form-item label="自动锁定">
              <el-switch v-model="autoLock"></el-switch>
            </el-form-item>
            <el-form-item label="默认启动界面">
              <el-radio-group v-model="initPage" @change="setInitPage">
                <el-radio label="首页"></el-radio>
                <el-radio label="服务"></el-radio>
                <el-radio label="大盘"></el-radio>
                <el-radio label="资讯"></el-radio>
                <el-radio label="我的"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="皮肤设置">
              <el-radio-group v-model="skin">
                <el-radio label="日间模式"></el-radio>
                <el-radio label="夜间模式"></el-radio>
                <el-radio label="自动跟随系统"></el-radio>
              </el-radio-group>
            </el-form-item>
          </el-form>
        </div>
        <div v-show="ProdIntro">

        </div>
        <div v-show="ProdSuggestion" class="left1">
          <h1 class="left2">问题建议</h1><br>
          <el-form label-width="6%">
            <el-form-item>
          <el-col span="15">
          <el-input
            type="textarea"
            :autosize="{minRows: 8, maxRows: 15}"
            placeholder="请输入..."
            v-model="suggestion">
          </el-input>
          </el-col>
            </el-form-item>
            <el-form-item>
              <el-button>提交反馈</el-button>
            </el-form-item>
          </el-form>
        </div>
        <div v-show="ProdTreaty">

        </div>
        <div v-show="ProdPrivacy">

        </div>
        <div v-show="ProdUser">

        </div>

      </el-main>
    </el-container>
  </el-container>
</template>

<script>
    export default {
        name: "Mine" ,
        data(){
          return{
            activeIndex2: '5',
            AccSetting:true,
            SysSetting:false,
            ProdIntro:false,
            ProdSuggestion:false,
            ProdTreaty:false,
            ProdPrivacy:false,
            ProdUser:false,
            autoLock:false,
            SendCode:"获取验证码",
            SendEmail:"发送激活邮件",
            phone:'',
            veriCode:'',
            email:'',
            oldpwd:'',
            newpwd:'',
            confirmpwd:'',
            initPage:"首页",
            skin:"皮肤",
            suggestion:'',
            ResendCode:false,
            time1:0,
            ResendEmail:false,
            time2:0
          }

        },
      //mounted指的是在你加载界面的时候调用的函数，函数定义还是写在methods中
      mounted(){

      },
      // watch是指当界面有变化的时候，执行的函数

      //一般的方法写在这里
        methods:{

          changeItem(index){
            this.AccSetting=false;
            this.SysSetting=false
            this.ProdIntro=false;
            this.ProdSuggestion=false;
            this.ProdTreaty=false;
            this.ProdPrivacy=false;
            this.ProdUser=false;
            switch (index){
              case'1':this.AccSetting=true;break;
              case'2':this.SysSetting=true;break;
              case'3-1':this.ProdIntro=true;break;
              case'3-2':this.ProdSuggestion=true;break;
              case'3-3':this.ProdTreaty=true;break;
              case'3-4':this.ProdPrivacy=true;break;
              case'3-5':this.ProdUser=true;break;
            }
    },
          //发送验证码、激活邮件，60s内禁用按钮
          sendCode(){
            const reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/
            if (this.phone == '') {
              this.$message({
                message:'手机号不能为空',
                center: true
              })
              return
            }
            if (!reg.test(this.phone)) {
              this.$message({
                message:'请输入正确的手机号',
                center:true
              })
              return
            } else {
              /*
              向该手机号发送验证码
               */

              this.$message({
                message: '发送成功',
                type: 'success',
                center:true
              });
              this.time1 = 60;
              this.ResendCode = true;
              this.timer("code");
            }
          },
          sendEmail(){
            const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (this.email == '') {
              this.$message({
                message:'邮箱不能为空',
                center: true
              })
              return
            }
            if (!reg.test(this.email)) {
              this.$message({
                message:'请输入正确的邮箱格式',
                center:true
              })
              return
            } else {
              /*
               发送激活邮件
               */
              this.$message({
                message: '发送成功',
                type: 'success',
                center:true
              });
              this.time2 = 60;
              this.ResendEmail = true;
              this.timer("email");
            }
          },
          timer(type) {
            switch(type){
              case "code":
                if (this.time1 > 0) {
                  this.time1--;
                  this.SendCode = this.time1 + "s后重新获取";
                  setTimeout(function(){ this.timer("code") }, 1000);
                }else{
                  this.time1 = 0;
                  this.SendCode = "获取验证码";
                  this.ResendCode = false;
                }
              case "email":
            if (this.time2 > 0) {
              this.time2--;
              this.SendEmail = this.time2 + "s后重新发送";
              setTimeout(function(){ this.timer("email") }, 1000);
            }else{
              this.time2 = 0;
              this.SendEmail = "发送激活邮件";
              this.ResendEmail = false;
            }
            break;
            }

          },
          submitCode(){

          },

          changePwd(){
            if(this.oldpwd==''||this.newpwd==''){
              this.$message({
                message:'密码不能为空',
                center: true
              })
              return
            }
            if(this.newpwd!=this.confirmpwd){
              this.$message({
                message:'两次输入密码不一致',
                center: true
              })
              return
            }else {
              /*
              修改对应账户的密码
               */
              this.$message({
                message: '修改成功',
                type: 'success',
                center:true
              });
            }
          },
          changeAcc(){

          },
          closeAcc(){
            this.$confirm('确定要注销本账号吗？该操作将无法撤回。', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              /*
              删除账号信息
               */
              this.$message({
                type: 'success',
                message: '已成功注销账号！'
              });
            });
          },

          setInitPage(){

          },


          changeToHomePage(){
            this.$router.push({ path: '/' })
          },
          changeToKanpan(){
            this.$router.push({ path: '/Kanpan' })
          },
          changeTorealTimeInfo(){
            this.$router.push({ path: '/realTimeInfo' })
          },
          changeToService(){
            this.$router.push({ path: '/Service' })
          },
          changeToMine(){
            this.$router.push({ path: '/Mine' })
          },
        },
      watch:{

      },

    }
</script>

<style scoped>
.left1{
  text-align: left;
}
.left2{
  margin-left: 2%;
}
.left3{
  margin-left: 3%;
}


</style>

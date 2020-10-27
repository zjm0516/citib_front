<template>
<el-container direction="vertical">
<!--  导航-->
  <div class="topMenu" >
    <el-menu
      :default-active="1"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <!--        //为每个界面写跳转-->
      <el-menu-item index="1"@click="changeToHomePage">首页</el-menu-item>
      <el-menu-item index="2" @click="changeToKanpan">看盘</el-menu-item>
      <el-menu-item index="3" @click="changeTorealTimeInfo">资讯</el-menu-item>
      <el-menu-item index="4" @click="changeToService">服务</el-menu-item>
      <div style="display: inline;">
        <el-input v-model="SearchParam" placeholder="请输入查询字段" style="margin-top: 10px; width:300px"></el-input>
        <el-button type="primary">搜索</el-button>
      </div>

      <el-submenu index="5" @click="changeToMine"  style="float: right">
        <!--      <el-menu-item index="5"  @click="changeToMine"  class="el-icon-user-solid" style="position: absolute;left: 90%;"></el-menu-item>-->
        <template slot="title" >我的</template>
        <el-menu-item @click="changeToMine" >个人中心</el-menu-item>
        <el-menu-item @click="changeToRegister">退出登录</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
<!-- 搜索栏 -->
<!--  <el-header style="background-color: #99bfa5;padding: 10px">-->
<!--      <div>-->
<!--        <el-input v-model="SearchParam" placeholder="请输入查询字段" style=" width:300px"></el-input>-->
<!--        <el-button type="primary">搜索</el-button>-->
<!--      </div>-->
<!--  </el-header>-->
  <el-container>
<!--    左下角-->
    <el-aside style="background-color: #B3C0D1;">
    <el-header class="leftAside" style="background-color: rebeccapurple;font-size: 20px;padding: 15px"> 应用推荐</el-header>

    <el-main  class="leftAside" style="background-color: gray ">
<!--    <div id="aaaa">{{aaa()}}</div>-->
      <div style="  margin-left: 10%;">
        <el-tooltip class="item" effect="dark" content="应用1" placement="top">
      <el-button @click="changeToService" class="IconBtn" icon="el-icon-news">应用1</el-button>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" content="应用2" placement="top">
      <el-button @click="changeToService" class="IconBtn" icon="el-icon-user-solid">应用2</el-button>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" content="应用3" placement="top">
      <el-button @click="changeToService" class="IconBtn" icon="el-icon-info">应用3</el-button>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" content="应用4" placement="top">
      <el-button @click="changeToService" class="IconBtn" icon="el-icon-message-solid">应用4</el-button>
        </el-tooltip>
      </div>
    </el-main>
<!--      热点观察-->
      <el-header class="leftAside" style="background-color: darkseagreen ;font-size: 20px;padding: 15px">热点观察</el-header>
<!--      这里的footer(header)里面不能加东西了，不然宽度很小-->
<!--      新建一个main，他的父节点仍然是container，专门放热点的内容,但是仍然需要解决高度问题-->
        <el-main class="leftAside" style="background-color: darkred; ">
<!--          走马灯-->
          <div class="block" style="margin-bottom: 0;">
<!--          <span class="demonstration">默认 Hover 指示器触发</span>-->
          <el-carousel indicator-position="outside" height="150px">
            <el-carousel-item v-for="item in 4" :key="item">
              <h3 class="small">{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
          </div>
        </el-main>
    </el-aside>
<!--    右边-->

      <el-main style="background-color: goldenrod">
        <real-time-info-module style=""></real-time-info-module>

      </el-main>

  </el-container>
</el-container>
</template>

<script>
import realTimeInfoModule from "./realTimeInfoModule";

export default {
  name: "home",
  components:{realTimeInfoModule},
  data() {
    return {


    }
  },
  methods:{
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    aaa(){
      return screen.height;
    },
    changeToHomePage() {
      this.$router.push({path: '/HomePage'})
    },
    changeToKanpan() {
      this.$router.push({path: '/Kanpan'})
    },
    changeTorealTimeInfo() {
      this.$router.push({path: '/realTimeInfo'})
    },
    changeToService() {
      this.$router.push({path: '/Service'})
    },
    changeToMine() {
      this.$router.push({path: '/Mine'})
    },
    changeToRegister() {
      this.$router.push({path: '/Regist'})
    }
  }
}
</script>



<style scoped>
/*.leftAside{*/
/*  !*position: absolute;*!*/
/*}*/
.IconBtn{
  margin: 2px;
  float: left;
}
/*.IconCxt{*/
/*  !*display: inline-block;*!*/
/*  !*padding: 0 3px;*!*/
/*  !*height: 1em;*!*/
/*}*/
.topMenu{
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>

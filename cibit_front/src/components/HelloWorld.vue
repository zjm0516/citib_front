<template>
<!--  <div class="topMenu" >-->
<!--    <el-menu-->
<!--      :default-active="activeIndex2"-->
<!--      class="el-menu-demo"-->
<!--      mode="horizontal"-->
<!--      @select="handleSelect"-->
<!--      background-color="#545c64"-->
<!--      text-color="#fff"-->
<!--      active-text-color="#ffd04b">-->
<!--      <el-menu-item index="1">处理中心</el-menu-item>-->
<!--      <el-submenu index="2">-->
<!--        <template slot="title">我的工作台</template>-->
<!--        <el-menu-item index="2-1">选项1</el-menu-item>-->
<!--        <el-menu-item index="2-2">选项2</el-menu-item>-->
<!--        <el-menu-item index="2-3">选项3</el-menu-item>-->
<!--        <el-submenu index="2-4">-->
<!--          <template slot="title">选项4</template>-->
<!--          <el-menu-item index="2-4-1">选项1</el-menu-item>-->
<!--          <el-menu-item index="2-4-2">选项2</el-menu-item>-->
<!--          <el-menu-item index="2-4-3">选项3</el-menu-item>-->
<!--        </el-submenu>-->
<!--      </el-submenu>-->
<!--      <el-menu-item index="3" disabled>消息中心</el-menu-item>-->
<!--      <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>-->
<!--    </el-menu>-->
<!--  </div>-->

  <el-container>
    <!--  //最上面的一行表头-->
    <el-header class="topestheader" style="height: 120px;Float:left;">
      <el-image
        style="width: 100px; height: 100px;top: 10px;
    left: -40%"
        :src=url
        :fit=fit></el-image>
      <div class="floatput"  style="Float:left;height:60px;margin-top: -4%;">

        <el-input v-model="SearchParam" placeholder="请输入查询字段" style=" width:300px"></el-input>
        <el-button type="primary">搜索</el-button>


      </div>
      <div class="el-icon-user-solid" style="
    position: absolute;
    font-size: 40px;
    left: 90%;
    top: 40px;"></div>


    </el-header>

    <el-container>
      <!--      //左侧的部分-->
      <el-aside class="firstAside">
        <el-container>

          <el-header class="secendheader" style="font-size: 30px;">应用推荐</el-header>
          <el-main>Main</el-main>
          <el-footer>Footer</el-footer>
        </el-container>

      </el-aside>
      <!--      右下主要的部分-->
      <el-main>
        <el-container>
          <!--          //右下的小菜单的header-->
          <el-header style="    height: 120px;" >
            <div style="height: 60px">
              <el-button style="margin-right: 10%;" @click="changeToCarbonTrading" type="primary" >碳交易</el-button>
              <el-button style="margin-right: 10%;" @click="changeToCarbonfinance" type="primary" >碳金融</el-button>
              <el-button style="margin-right: 10%;" @click="changeToPoliciesandregulations" type="primary" >政策法规</el-button>
              <el-button style="margin-right: 10%;" @click="changeToWatchtoday" type="primary" >今日看点</el-button>
            </div>



          </el-header>
          <!--          //右下的主要不服-->
          <el-main class="secondmain" >
            <div v-show="CarbonTrading">
              <el-tag type="danger">标签1</el-tag>
            </div>
            <div v-show="Carbonfinance">
              <el-tag type="danger">标签2</el-tag>
            </div>
            <div v-show="Policiesandregulations">
              <el-tag type="danger">标签3</el-tag>
            </div>
            <div v-show="Watchtoday">
              <el-tag type="danger">标签4</el-tag>

            </div>
          </el-main>

        </el-container>

      </el-main>
    </el-container>
  </el-container>


</template>
<script>
  export default {
    name: "Home.vue",
    data() {
      return {
        fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        msg: "",
        SearchParam:"",
        activeIndex: '1',
        activeIndex2: '1',
        CarbonTrading:true,
        Carbonfinance:false,
        Policiesandregulations:false,
        Watchtoday:false

      }
    },
    methods: {
      searchIndb() {

      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      changeToCarbonTrading()
      {
        this.CarbonTrading=true;
        this.Carbonfinance=false;
        this.Policiesandregulations=false;
        this.Watchtoday=false;
      },
      changeToCarbonfinance()
      {
        this.CarbonTrading=false;
        this.Carbonfinance=true;
        this.Policiesandregulations=false;
        this.Watchtoday=false;
      },
      changeToPoliciesandregulations(){
        this.CarbonTrading=false;
        this.Carbonfinance=false;
        this.Policiesandregulations=true;
        this.Watchtoday=false;

      },
      changeToWatchtoday(){
        this.CarbonTrading=false;
        this.Carbonfinance=false;
        this.Policiesandregulations=false;
        this.Watchtoday=true
      },

    }
  }
</script>

<style scoped>
  .erjiMenu{

    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;


  }
  .floatput {



  }

  .el-header.topestheader{
    background-color: #B3C0D1;
    color: #333;


  }
  .el-header.thirdheader
  {
    background-color: #B3C0D1;
    color: #333;
    float: left;
  }
  .el-header{
    background-color: #B3C0D1;
    color: #333;
    float: left;
  }
  .el-footer.firstAside {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;

  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    height: 800px;
    width: 400px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  .el-main.secondmain{
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  .bg-purple-dark {
    background: #99bfa5;
  }

  .grid-content {
    top: 0px;
    border-radius: 4px;
    min-height: 80px;
  }

  .grid-content1 {

    border-radius: 4px;
    min-height: 80px;
  }

  .grid-content2 {

    border-radius: 4px;
    min-height: 80px;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }

  .bg-purple {
    background: #d3dce6;
  }

  .topSearch {

    top: 20px;
    left: 20px;

  }

  .topbutten {


    top: 20px;
    left: 20px;
  }
</style>

<template>


  <el-container>
<!--    //菜单导航栏-->
    <div class="topMenu" >
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item index="2">看盘</el-menu-item>

        <el-menu-item index="3" >资讯</el-menu-item>
        <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">服务</a></el-menu-item>
        <el-menu-item index="5" style="position: absolute;left: 90%;"><div class="el-icon-user-solid" style="font-size: 40px"></div>我的</el-menu-item>
      </el-menu>
    </div>
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

    </el-header>

    <el-container>
      <!--      //左侧的部分-->
      <el-aside style="background-color: red;height: 800px">
        <el-container style="background-color: chocolate;height: 800px">
          <el-header style="font-size: 20px; padding: 3%;height: 50px">应用推荐</el-header>

          <el-main class="lm" style="background-color: #E9EEF3;height: 100px">
<!--            <el-row style="height: 80px" >-->

                <el-button class="lbotton" round>现货分析</el-button>
                <el-button class="lbotton" round>智能决策</el-button>
                <el-button class="lbotton" round>aaaa</el-button>
                <el-button class="lbotton" round>bbbbb</el-button>


<!--            </el-row>-->
          </el-main>

          <el-footer style="background-color: #2c3e50;height: 250px;padding: 0">
            <el-container style="height: 250px">
              <el-header style="text-align: right;background-color: #99bfa5;height: 25px;width: 100%">热点观察</el-header>
              <el-main style="background-color: crimson;overflow: auto;">some text</el-main>
            </el-container>
          </el-footer>

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
              <el-button @click="sayhello" >
                hello
              </el-button>
              <a id="demo" value="test"></a>
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
        Watchtoday:false,
        test:0

      }
    },
    methods: {
      searchIndb() {

      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      sayhello(){
        this.$axios.get("/hello").then(res=>{
          document.getElementById("demo").innerHTML=res.hello;
          }



        )


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
  .lbotton{
    float: left;
    /*clear: both;*/
    padding: 0;
    width: 100%;
  }
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

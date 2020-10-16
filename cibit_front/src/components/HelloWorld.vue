  <template>

    <el-container style="height: 600px;background-color: aqua;">
      <!--  //最上面的一行表头-->
      <el-header class="topestheader" style="height: 100px;">
        <el-image
          style="width: 100px; height: 100px;top: 10px;
      right: 200px;"
          :src="url"
          :fit="fit"></el-image>
        <div class="floatput" style="Float:left;height:30px;left: 800px;">

          <el-input v-model="SearchParam" placeholder="请输入查询字段" style="width:300px"></el-input>
          <el-button type="primary">搜索</el-button>

        </div>
        <div class="el-icon-user-solid" style="position: fixed;
      font-size: 40px;
      top: 40px;
      left: 400px;}"></div>
      </el-header>

    <el-main style="background-color: brown;height: 500px;padding: 0">
      <el-container  style="background-color: antiquewhite;height: 500px">
        <!--      //左侧的部分-->
        <el-aside style="background-color: red;height: 500px">
          <el-container style="background-color: chocolate;height: 500px">
            <el-header style="font-size: 20px; padding: 3%;height: 50px">应用推荐</el-header>

            <el-main class="lm" style="background-color: #E9EEF3;height: 100px">
             <el-col >
               <el-button class="lbotton" round><div class=" grid-content bg-purple">现货分析</div></el-button>
               <el-button class="lbotton" round><div class=" grid-content bg-purple">智能决策</div></el-button>
               <el-button class="lbotton" round><div class=" grid-content bg-purple">aaaa</div></el-button>
               <el-button class="lbotton" round><div class=" grid-content bg-purple">bbbbb</div></el-button>
             </el-col>
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
        <el-main class="rmain" style="background-color: #333333" >
          <el-container>
            <!--          //右下的小菜单的header-->
            <el-header></el-header>
            <!--          //右下的主要部分-->
            <el-main></el-main>

          </el-container>

        </el-main>
      </el-container>
    </el-main>
    </el-container>


  </template>
  <script>
    export default {
      name: "Home.vue",
      data() {
        return {
          fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
          url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          msg: ""
        }
      },
      methods: {
        searchIndb() {

        },

      }
    }
  </script>

  <style scoped>

  .el-aside {
    background-color: #d3dce6;
    color: #333;

  }
  el-main.lm{

     }

  .lbotton{
    float: right;
    clear: both;
    padding: 0;
    width: 100%;
  }

  .grid-content {
    padding: 5%;
    text-align: center;
    border-radius: 20px;
    color: #B3C0D1;
  }



    .floatput {
      position: fixed;
      top: 40px;
      left: 600px;
    }

    .el-header.topestheader{
      background-color: #B3C0D1;
      color: #333;
      text-align: center;

    }


    .rmain {

      width: 60%;
      background-color: #E9EEF3 ;
      color: #333;
      text-align: center;
      line-height: 150px;
    }

    .bg-purple-dark {
      background: #99bfa5;
    }


    .bg-purple {
      background: #d3dce6;
    }

  </style>

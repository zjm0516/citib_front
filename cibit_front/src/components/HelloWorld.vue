<template>

  <el-container>
    <!--  //最上面的一行表头-->
    <el-header class="topestheader" style="height: 120px;">
      <el-image
        style="width: 100px; height: 100px;top: 10px;
    right: 800px;"
        :src="url"
        :fit="fit"></el-image>
      <div class="floatput" style="Float:left;height:30px;left: 800px;">

        <el-input v-model="SearchParam" placeholder="请输入查询字段" style="width:300px"></el-input>
        <el-button type="primary">搜索</el-button>

      </div>

      <div class="el-icon-user-solid" style="position: fixed;
    font-size: 40px;
    top: 40px;
    left: 1700px;}"></div>
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
          <el-header></el-header>
          <!--          //右下的主要不服-->
          <el-main></el-main>

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
  .el-header.
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

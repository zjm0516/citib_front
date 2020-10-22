<template>
<el-container>
<!--  导航-->
  <div class="topMenu" >
    <el-menu
      :default-active="activeIndex2"
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
      <el-menu-item index="5"  @click="changeToMine"  class="el-icon-user-solid" style="position: absolute;left: 90%;">我的</el-menu-item>
    </el-menu>
  </div>
<!-- 搜索栏 -->
  <el-header style="background-color: #99bfa5;padding: 10px">
    <div>
      <el-input v-model="SearchParam" placeholder="请输入查询字段" style=" width:300px"></el-input>
      <el-button type="primary">搜索</el-button>
    </div>
  </el-header>

  <el-container>
<!--    左下角-->
    <el-aside style="background-color: #B3C0D1">
    <el-header style="background-color: rebeccapurple;font-size: 20px;padding: 15px"> 应用推荐</el-header>

    <el-main style="background-color: gray ">
      
    </el-main>
      <el-footer style="background-color: darkseagreen ">

      </el-footer>
    </el-aside>
<!--    右边-->
    <el-container style="background-color: crimson">
      <el-header style="background-color: burlywood">

      </el-header>

      <el-main style="background-color: goldenrod">


      </el-main>
    </el-container>

  </el-container>
</el-container>
</template>

<script>
export default {
  name: "home"
}
</script>

<style scoped>

.topMenu{

}
</style>

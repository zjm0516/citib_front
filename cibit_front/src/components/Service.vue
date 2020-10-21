<template>
  <el-container>
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
        <el-menu-item index="5"  @click="changeToMine" style="position: absolute;left: 90%;">我的</el-menu-item>
        <!--        //原来我的的格式，带小人的。-->
        <!--        <div class="el-icon-user-solid" style="font-size: 40px"></div>-->
      </el-menu>
    </div>
    <el-header>Header</el-header>
    <el-main>Main</el-main>
  </el-container>
</template>

<script>
    export default {
        name: "Service",
      data(){
        return{}

      },
      //mounted指的是在你加载界面的时候调用的函数，函数定义还是写在methods中
      mounted(){

      },
      // watch是指当界面有变化的时候，执行的函数

      //一般的方法写在这里
      methods:{
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

</style>

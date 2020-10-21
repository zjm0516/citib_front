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
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item index="2">看盘</el-menu-item>
        <el-menu-item index="3" >资讯</el-menu-item>
        <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">服务</a></el-menu-item>
        <el-menu-item index="5" style="position: absolute;left: 90%;"><div class="el-icon-user-solid" style="font-size: 40px"></div>我的</el-menu-item>
      </el-menu>
    </div>
    <el-header>Header</el-header>
    <el-main>Main</el-main>
  </el-container>
</template>

<script>
    export default {
        name: "Consult",
      data(){


      },
      //mounted指的是在你加载界面的时候调用的函数，函数定义还是写在methods中
      mounted(){

      },
      // watch是指当界面有变化的时候，执行的函数

      //一般的方法写在这里
      methods:{

      },
      watch:{

      },

    }
</script>

<style scoped>

</style>

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
    <el-header style="background-color: black;height: 70px">
      <ul class="z_line"><li  style="color: #fff;background: #333333;width: 60px;border-top: 1px solid #5a5a5a;">行情</li></ul>

    </el-header>
    <el-container>
      <el-aside width="1200px">
            <div class="chart6Div">

                <span class="title-left"></span>
                <div class="title-mid">
                  <!-- <span @click="valveAlarmLimit">阀报警超限:{{valveAlarmCount}}</span> -->
                  <span>平均故障周期</span>
                </div>
                <span class="title-right"></span>
              </div>
              <div>
                <el-select
                  v-model="yearSelect"
                  placeholder="请选择"
                  class="YearMenu"
                  size="mini"
                >
                  <el-option v-for="item in yearMenuList" :key="item" :label="item" :value="item"></el-option>
                </el-select>

                <el-select
                  v-model="deviceTypeSelect"
                  placeholder="请选择"
                  class="deviceTypeMenu"
                  size="mini"
                >
                  <el-option v-for="item in deviceTypeMenuList" :key="item" :label="item" :value="item"></el-option>
                </el-select>
                <div id="totalKLineChart"></div>
              </div>




      </el-aside>

      <el-main style=" height:900px;background-color: aqua">


      </el-main>
    </el-container>

  </el-container>
</template>

<script>
    export default {
        name: "Kanpan",
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
      drawTotalKLineChart(){
        let that = this;
        let totalKLineChart = this.$echarts.init(
          document.getElementById("totalKLineChart")
        );
        totalKLineChart.resize();
        let option = {
          // title: {
          //   text: "ICM报警",
          //   top: "3%",
          //   left: "20"
          // },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "shadow"
            }
          },
          legend: {
            data: ["carbonFinance"],
            orient: "vertical",
            right: "3%",
            textStyle: {
              fontsize: 14,
              fontfamily: "Microsoft YaHei",
              fontweight: 400,
              color: "rgba(0, 250, 168, 1)"
            }
          },
          grid: {
            left: "2%",
            right: "2%",
            bottom: "8%",
            containLabel: true
          },
          xAxis: {
            //triggerEvent: true,
            type: "category",
            name: "月份",
            nameTextStyle: {
              padding: [70, 0, 0, -140], // 四个数字分别为上右下左与原位置距离
              color: "rgba(63,188,239)",
              fontWeight: 400,
              fontFamily: "Microsoft YaHei",
              fontSize: 14,
              lineHeight: 36
            },
            axisLine: {
              lineStyle: {
                color: "rgba(51,102,255,1)"
              }
            },
            axisLabel: {
              interval: 0,
              color: "#3FBCEF",
              fontWeight: 400,
              fontFamily: "Microsoft YaHei",
              fontSize: 14,
              lineHeight: 19
            },

            boundaryGap: [0, 0.01],
            data: this.averagefaultLine.groupList
          },
          yAxis: {
            type: "value",
            name: "价格",
            nameTextStyle: {
              color: "rgba(63,188,239)",
              fontWeight: 400,
              fontFamily: "Microsoft YaHei",
              fontSize: 14,
              lineHeight: 36
            },
            axisLine: {
              lineStyle: {
                color: "rgba(51,102,255,1)"
              }
            },
            axisLabel: {
              color: "#3FBCEF",
              fontWeight: 400,
              fontFamily: "Microsoft YaHei",
              fontSize: 14,
              lineHeight: 19
            },
            splitLine: {
              lineStyle: {
                color: "rgba(51,102,255,1)"
              }
            },
            boundaryGap: [0, 0.01]
          },
          color: ["#E6E415", "#F353C0"],

          series: [
            {
              name: "valve",
              type: "line",
              barGap: 0,
              barWidth: 30,
              label: {
                show: true, // 开启显示
                position: "top", // 在上方显示
                distance: 5, // 距离图形元素的距离。当 position 为字符描述值（如 'top'、'insideRight'）时候有效。
                verticalAlign: "middle",
                textStyle: {
                  // 数值样式
                  color: "#3FBCEF",
                  fontSize: 12
                }
              },
              data: this.averagefaultLine.valveAverageFaultData
            }
            // {
            //   name: "A类",
            //   type: "bar",
            //   barGap: 0,
            //   barWidth: 30,
            //   label: {
            //     show: true, // 开启显示
            //     position: "top", // 在上方显示
            //     distance: 5, // 距离图形元素的距离。当 position 为字符描述值（如 'top'、'insideRight'）时候有效。
            //     verticalAlign: "middle",
            //     textStyle: {
            //       // 数值样式
            //       color: "#3FBCEF",
            //       fontSize: 12
            //     }
            //   },
            //   data: this.pumpRunTimeBar.aData
            // }
          ]
        };
        averagefaultLineChart.setOption(option);

        this.echart6 = averagefaultLineChart;
        //不加下面一行，click会触发多次
        averagefaultLineChart.getZr().off("click");
        //点击事件
        averagefaultLineChart.getZr().on("click", function(params) {
          const pointInPixel = [params.offsetX, params.offsetY];
          //如果落入到柱子中
          if (averagefaultLineChart.containPixel("grid", pointInPixel)) {
            let xyPoint = averagefaultLineChart.convertFromPixel(
              { seriesIndex: 0 },
              [params.offsetX, params.offsetY]
            );

          }
        });
      },

    },
    watch:{

    },
    }
</script>

<style scoped>
.z_line{
  height: 70px;
  font-size: 24px;
  cursor: pointer;
}








</style>

<template>
  <el-container direction="vertical">
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
    <el-main>

        <el-tabs  type="card" @tab-click="handleClick">
          <el-tab-pane label="大盘预测" type="primary">

              <el-container>
                <el-aside style="width: 70%;height:1000px; ">
                  <el-container style="height: 30%;padding: 0px">

                        <div class="expectedRisingProbabilityLine" id="expectedRisingProbabilityLineChart" ></div>

                  </el-container>







                </el-aside>
                <el-main style="background-color: chocolate">

                </el-main>
              </el-container>

          </el-tab-pane>
          <el-tab-pane label="智能决策" type="primary">
            <el-main style="background-color: brown">

            </el-main>
          </el-tab-pane>


        </el-tabs>

    </el-main>

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
          this.drawexpectedRisingProbabilityLineChart();

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
        drawexpectedRisingProbabilityLineChart(){

          let expectedRisingProbabilityLineChart = this.$echarts.init(
            document.getElementById("expectedRisingProbabilityLineChart")
          );
          expectedRisingProbabilityLineChart.resize();
          let option = {

            tooltip: {
              trigger: "axis",
              axisPointer: {
                type: "shadow"
              }
            },
            //legend是图例，就是一个有几条线
            legend:[{
              orient:  "horizontal",
              data: ["湖北"],
              left:"5%",
              top: 'top',
              textStyle: {
                fontsize: 14,
                fontfamily: "Microsoft YaHei",
                fontweight: 400,
                color: "#a7a2a2"
              }
            },
              {
              orient:  "horizontal",
              data: ["上海"],
              gridIndex: 1,
                left:"10%",
              top: 'top',
              textStyle: {
                fontsize: 14,
                fontfamily: "Microsoft YaHei",
                fontweight: 400,
                color: "#a7a2a2"
              }
            },] ,
            dataZoom: [
              {
                type: "inside",
                xAxisIndex: 0
              },
              {
                type: "inside",
                xAxisIndex: 1
              }
            ],
            //grid就是有几个图
            grid:
              [
                {
                  left: "2%",
                  right: "2%",
                  bottom: "50%",
                  height:"40%",
                  width:"100%",
                  containLabel: true
                },
                {
                  left: "2%",
                  right: "2%",
                  bottom: "2%",
                  height: "40%",
                  width:"100%",
                  containLabel: true
                }
              ],
            xAxis:[
              {
                //triggerEvent: true,
                gridIndex: 0,
                type: "time",
                name: "时间",
                nameTextStyle: {
                  padding: [-20, 20, 0, -70],// 四个数字分别为上右下左与原位置距离
                  color: "#716d6d",
                  fontWeight: 400,
                  fontFamily: "Microsoft YaHei",
                  fontSize: 14,
                  lineHeight: 36
                },
                axisLine: {
                  lineStyle: {
                    color: "#373131",
                  }
                },
                axisLabel: {
                  interval: 0,
                  color: "#373131",
                  fontWeight: 400,
                  fontFamily: "Microsoft YaHei",
                  fontSize: 14,
                  lineHeight: 19
                },

                boundaryGap: [0, 0.01],

              },
              {
                //triggerEvent: true,
                gridIndex: 1,
                type: "time",
                name: "时间",
                nameTextStyle: {
                  padding: [-20, 20, 0, -70], // 四个数字分别为上右下左与原位置距离
                  color: "#716d6d",
                  fontWeight: 400,
                  fontFamily: "Microsoft YaHei",
                  fontSize: 14,
                  lineHeight: 36
                },
                axisLine: {
                  lineStyle: {
                    color:"#716d6d"
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

              },
            ],

            yAxis: [{
              gridIndex: 0,
              type: "value",
              name: "成交价（元）",
              nameTextStyle: {
                color: "#716d6d",
                padding: [0, 0, -20, 60],// 四个数字分别为上右下左与原位置距离
                fontWeight: 400,
                fontFamily: "Microsoft YaHei",
                fontSize: 14,
                lineHeight: 36,

              },
              axisLine: {
                lineStyle: {
                  color: "#373131"
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
              {
              gridIndex: 1,
              type: "value",
              name: "成交价",
              nameTextStyle: {
                color: "#716d6d",
                padding: [0, 0, -20, 60],// 四个数字分别为上右下左与原位置距离
                fontWeight: 400,
                fontFamily: "Microsoft YaHei",
                fontSize: 14,
                lineHeight: 36,

              },
              axisLine: {
                lineStyle: {
                  color: "#373131"
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
            ],


            series: [
              {

                name: "湖北",
                type: "line",
                label: {
                  show: false, // 开启显示
                  position: "top", // 在上方显示
                  distance: 5, // 距离图形元素的距离。当 position 为字符描述值（如 'top'、'insideRight'）时候有效。
                  verticalAlign: "middle",
                  textStyle: {
                    // 数值样式
                    color: "#3FBCEF",
                    fontSize: 12
                  }
                },
                data: [
                  [1522306819000, 2],
                  [1522306919000, 1],
                  [1522307019000, 3],
                  [1522307119000, 1],
                  [1522307120000, 1],
                  [1522307230000, 1],
                  [1522302230000, 1],
                  [1522307430000, 1],
                  [1522407230000, 1]
                ]

              },
              {

                name: "上海",
                type: "line",
                xAxisIndex: 1,
                yAxisIndex: 1,
                label: {
                  show: false, // 开启显示
                  position: "top", // 在上方显示
                  distance: 5, // 距离图形元素的距离。当 position 为字符描述值（如 'top'、'insideRight'）时候有效。
                  verticalAlign: "middle",
                  textStyle: {
                    // 数值样式
                    color: "#3FBCEF",
                    fontSize: 12
                  }
                },
                data: [
                  [1522306819000, 2],
                  [1522306919000, 1],
                  [1522307019000, 3],
                  [1522307119000, 1],
                  [1522307120000, 1],
                  [1522307230000, 1],
                  [1522302230000, 1],
                  [1522307430000, 1],
                  [1522407230000, 1]
                ]

              },

            ]
          };
          expectedRisingProbabilityLineChart.setOption(option);
        }

      },
      watch:{

      },
    }
</script>

<style scoped>
.expectedRisingProbabilityLine{
  padding-top: 0px;
  padding-right: 10px;
  width: 1200px;
  height: 600px;

}
.fangkuang{
  background-color: #2c3e50;
  height: 90%;
  ;
}
.totalKLine{
  margin-top:100px;
  margin-left: 150px;
  width: 1000px;
  height: 600px;
}
</style>

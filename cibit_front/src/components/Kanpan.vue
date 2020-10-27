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
      <el-aside width="70%" style="background-color: black">
<!--//下面的一个div就是图线-->
                <div v-loading="loading1"
                     element-loading-text="拼命加载中"
                     element-loading-spinner="el-icon-loading"
                     element-loading-background="rgba(0, 0, 0, 0.8)"
                     class="totalKLine" id="totalKLineChart" ></div>
      </el-aside>

      <el-main style=" height:900px;background-color: black">
<!--//下面画两个饼状图-->
        <div
          v-loading="loading2"
          element-loading-text="拼命加载中"
          element-loading-spinner="el-icon-loading"
          element-loading-background="rgba(0, 0, 0, 0.8)" class="carbonTradingeNum" id="carbonTradingeNumPieChart" ></div>
        <div
          v-loading="loading3"
          element-loading-text="拼命加载中"
          element-loading-spinner="el-icon-loading"
          element-loading-background="rgba(0, 0, 0, 0.8)" class="carbonTradingeMount" id="carbonTradingeMountChart" ></div>


      </el-main>
    </el-container>

  </el-container>
</template>

<script>
    export default {
        name: "Kanpan",
     data(){
    return{

      totalKLine:{
        shenzhenKLine:[],
        hubeiKLine:[],
        chongqingLine:[],
        fujianKLine:[],
        beijingKLine:[],
        shanghaiKLine:[],
        guangdongKLine:[],
        tianjinKLine:[]
      },
      totalKLineall:{
        shenzhenKLineall:[],
        hubeiKLineall:[],
        chongqingLineall:[],
        fujianKLineall:[],
        beijingKLineall:[],
        shanghaiKLineall:[],
        guangdongKLineall:[],
        tianjinKLineall:[]
      },


      carbonTradingNumberPiedata:[
        {value:2,name:"湖北"},
        {value:5,name:"上海"},
        {value:2,name:"北京"},
        {value:5,name:"重庆"},
        {value:2,name:"广东"},
        {value:5,name:"天津"},
        {value:2,name:"深圳"},
        {value:5,name:"福建"}

      ],
      carbonTradingAmountPiedata:[
        {value:2,name:"湖北"},
        {value:5,name:"上海"},
        {value:2,name:"北京"},
        {value:5,name:"重庆"},
        {value:2,name:"广东"},
        {value:5,name:"天津"},
        {value:2,name:"深圳"},
        {value:5,name:"福建"}
      ],

      activeIndex: '1',
      activeIndex2: '1',
      loading1:true,
      loading2:true,
      loading3:true,
    }

    },
    //mounted指的是在你加载界面的时候调用的函数，函数定义还是写在methods中
    mounted(){

      console.log("hhek");
      // this.drawTotalKLineChart();
      // this.drawcarbonTradingeNumPieChart();
      // this.drawcarbonTradingeMountChart();
      this.getTotalKLineChartData();
      this.getcarbonTradingeAmountChartData();
      this.getcarbonTradingeNumberChartData();
      console.log("dj");
    },
    // watch是指当界面有变化的时候，执行的函数

    //一般的方法写在这里
    methods:{
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
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

        let totalKLineChart = this.$echarts.init(
          document.getElementById("totalKLineChart")
        );
        totalKLineChart.resize();
        let option = {

          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "shadow"
            }
          },
          //legend是图例，就是一个有几条线



          legend: {
            data: ["湖北","上海","北京","重庆","广东","天津","深圳","福建"],
            orient: "horizontal",
            top: 'top',
            textStyle: {
              fontsize: 14,
              fontfamily: "Microsoft YaHei",
              fontweight: 400,
              color: "#a7a2a2"
            }
          },

          //grid就是有几个图
          grid: {
            left: "2%",
            right: "2%",
            bottom: "8%",
            containLabel: true
          },
          xAxis: {
            //triggerEvent: true,
            type: "time",
            name: "时间",
            nameTextStyle: {
              padding: [-20, 0, 0, -55], // 四个数字分别为上右下左与原位置距离
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
          dataZoom: [{
            type: "inside",
            show: true,
            xAxisIndex: [0],
            // left: '9%',
            bottom: -5,
            start: 10,
            end: 90
          }],//初始化滚动条
          yAxis: {
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
                color: "#716d6d"
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

          color:["#e51717","#f0ad4e","#d91192","#9511d9","#11bdd9","#26d911","#0ee5c7","#e2e50e"],
          series: [
            {
              name: "湖北",
              type: "line",
              symbol: "none",
              smooth:1,
              sampling:"average",
              lineStyle: {
                normal: {
                  color:"#e51717"
                }
              },
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
              data: this.totalKLine.hubeiKLine
            },
            {
              name: "上海",
              type: "line",
              symbol: "none",
              smooth:1,
              sampling:"average",
              lineStyle: {
                normal: {
                  color:"#f0ad4e"
                }
              },
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
              data:this.totalKLine.shanghaiKLine
            },
            {
              name: "北京",
              type: "line",
              symbol: "none",
              smooth:1,
              sampling:"average",
              lineStyle: {
                normal: {
                  color:"#d91192"
                }
              },
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
              data: this.totalKLine.beijingKLine
            },
            {
              name: "重庆",
              type: "line",
              symbol: "none",
              smooth:1,
              sampling:"average",
              lineStyle: {
                normal: {
                  color:"#9511d9"
                }
              },
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
              data: this.totalKLine.chongqingLine
            },
            {
              name: "广东",
              type: "line",
              symbol: "none",
              smooth:1,
              sampling:"average",
              lineStyle: {
                normal: {
                  color:"#11bdd9"
                }
              },
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
              data: this.totalKLine.guangdongKLine
            },
            {
              name: "天津",
              type: "line",
              symbol: "none",
              smooth:1,
              sampling:"average",
              lineStyle: {
                normal: {
                  color:"#26d911"
                }
              },
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
              data: this.totalKLine.tianjinKLine
            },
            {
              name: "深圳",
              type: "line",
              symbol: "none",
              smooth:1,
              sampling:"average",
              lineStyle: {
                normal: {
                  color:"#0ee5c7"
                }
              },
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
              data:this.totalKLine.shenzhenKLine
            },
            {
              name: "福建",
              type: "line",
              symbol: "none",
              smooth:1,
              sampling:"average",
              lineStyle: {
                normal: {
                  color:"#e2e50e"
                }
              },
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
              data:this.totalKLine.fujianKLine
            }
          ]
        };
        totalKLineChart.setOption(option);
      },
      drawcarbonTradingeNumPieChart(){
        let carbonTradingeNumPieChart = this.$echarts.init(
          document.getElementById("carbonTradingeNumPieChart")
        );
        carbonTradingeNumPieChart.resize();
        let option = {
          title: {
            text: '碳交易量',
            // subtext: '模拟数据',
            // x 设置水平安放位置，默认左对齐，可选值：'center' ¦ 'left' ¦ 'right' ¦ {number}（x坐标，单位px）
            x: 'center',
            // y 设置垂直安放位置，默认全图顶端，可选值：'top' ¦ 'bottom' ¦ 'center' ¦ {number}（y坐标，单位px）
            y: 'top',
            // itemGap设置主副标题纵向间隔，单位px，默认为10，
            // itemGap: 30,
            backgroundColor: '#EEE',
            // 主标题文本样式设置
            textStyle: {
              fontSize: 26,
              fontWeight: 'bolder',
              color: '#000080'
            },
            // 副标题文本样式设置
            // subtextStyle: {
            //   fontSize: 18,
            //   color: '#8B2323'
            // }
          },

          tooltip: {
            trigger: "item",
            formatter: "{b} <br/> 成交总量: {c}万吨  <br/> 市场占比：({d}%)"

          },
          //legend是图例，就是一个有几条线
          legend: [
            {
              data: ["湖北","上海","北京","重庆"],
              orient: "horizontal",


              bottom:'0%',
              textStyle: {
                fontsize: 14,
                fontfamily: "Microsoft YaHei",
                fontweight: 400,
                color: "#a7a2a2"
              }
            },
            {
              data: ["广东","天津","深圳","福建"],
              orient: "horizontal",


              bottom:'7%',
              textStyle: {
                fontsize: 14,
                fontfamily: "Microsoft YaHei",
                fontweight: 400,
                color: "#a7a2a2"
              }
            }
          ],

          series: [
            {
              name: "碳交易量",
              type: "pie",
              label: {
                show: false, // 开启显示
                position: "top", // 在上方显示
                distance: 5, // 距离图形元素的距离。当 position 为字符描述值（如 'top'、'insideRight'）时候有效。
                verticalAlign: "middle",
                textStyle: {
                  // 数值样式
                  color: "#3FBCEF",
                  fontSize: 12
                },
                radius : '40%',
                center: ['50%', '60%'],
                emphasis: {
                  show: true,
                  textStyle: {
                    fontSize: '30',
                    fontWeight: 'blod'
                  }
                }
              },
              data: this.carbonTradingNumberPiedata
            },

          ]
        };
        carbonTradingeNumPieChart.setOption(option);

      },
      drawcarbonTradingeMountChart(){
        let carbonTradingeMountChart = this.$echarts.init(
          document.getElementById("carbonTradingeMountChart")
        );
        carbonTradingeMountChart.resize();
        let option = {

          title: {
            text: '碳交易额',
            // subtext: '模拟数据',
            // x 设置水平安放位置，默认左对齐，可选值：'center' ¦ 'left' ¦ 'right' ¦ {number}（x坐标，单位px）
            x: 'center',
            // y 设置垂直安放位置，默认全图顶端，可选值：'top' ¦ 'bottom' ¦ 'center' ¦ {number}（y坐标，单位px）
            y: 'top',
            // itemGap设置主副标题纵向间隔，单位px，默认为10，
            // itemGap: 30,
            backgroundColor: '#EEE',
            // 主标题文本样式设置
            textStyle: {
              fontSize: 26,
              fontWeight: 'bolder',
              color: '#000080'
            },
            // 副标题文本样式设置
            // subtextStyle: {
            //   fontSize: 18,
            //   color: '#8B2323'
            // }
          },

          tooltip: {
            trigger: "item",
            formatter: "{b} <br/> 成交总额: {c}万元 <br/> 市场占比：({d}%)"
            // axisPointer: {
            //   type: "shadow"
            // }
          },
          //legend是图例，就是一个有几条线
          legend: [
            {
              data: ["湖北","上海","北京","重庆"],
              orient: "horizontal",


              bottom:'0%',
              textStyle: {
                fontsize: 14,
                fontfamily: "Microsoft YaHei",
                fontweight: 400,
                color: "#a7a2a2"
              }
            },
            {
              data: ["广东","天津","深圳","福建"],
              orient: "horizontal",


              bottom:'7%',
              textStyle: {
                fontsize: 14,
                fontfamily: "Microsoft YaHei",
                fontweight: 400,
                color: "#a7a2a2"
              }
            }
          ],

          series: [
            {
              name: "碳交易额",
              type: "pie",
              label: {
                show: false, // 开启显示
                position: "top", // 在上方显示

                distance: 5, // 距离图形元素的距离。当 position 为字符描述值（如 'top'、'insideRight'）时候有效。
                verticalAlign: "middle",
                textStyle: {
                  // 数值样式
                  color: "#3FBCEF",
                  fontSize: 12
                },
                emphasis: {
                  show: true,
                  textStyle: {
                    fontSize: '30',
                    fontWeight: 'blod'
                  }
                }
              },
              data: this.carbonTradingAmountPiedata
            },

          ]
        };
        carbonTradingeMountChart.setOption(option);

      },
      getTotalKLineChartData()
      {
        let that = this;
        this.$axios
          .post("/getLineChartData", {})
          .then(function(res) {
            that.totalKLineall.beijingKLineall=res.data.BeiJingLineChart;
            that.totalKLineall.chongqingLineall=res.data.ChongQingLineChart;
            that.totalKLineall.fujianKLineall=res.data.FuJianLineChart;
            that.totalKLineall.guangdongKLineall=res.data.GuangDongLineChart;
            that.totalKLineall.hubeiKLineall=res.data.HuBeiLineChart;
            that.totalKLineall.shanghaiKLineall=res.data.ShangHaiLineChart;
            that.totalKLineall.shenzhenKLineall=res.data.ShenZhenLineChart;
            that.totalKLineall.tianjinKLineall=res.data.TianJinLineChart;

            that.totalKLineall.beijingKLineall=JSON.parse(that.totalKLineall.beijingKLineall);
            that.totalKLineall.chongqingLineall=JSON.parse(that.totalKLineall.chongqingLineall);
            that.totalKLineall.fujianKLineall=JSON.parse(that.totalKLineall.fujianKLineall);
            that.totalKLineall.guangdongKLineall=JSON.parse(that.totalKLineall.guangdongKLineall);
            that.totalKLineall.hubeiKLineall=JSON.parse(that.totalKLineall.hubeiKLineall);
            that.totalKLineall.shanghaiKLineall=JSON.parse(that.totalKLineall.shanghaiKLineall);
            that.totalKLineall.shenzhenKLineall=JSON.parse(that.totalKLineall.shenzhenKLineall);
            that.totalKLineall.tianjinKLineall=JSON.parse(that.totalKLineall.tianjinKLineall);
            console.log(that.totalKLineall.shenzhenKLineall);



            for (var i=0;i<that.totalKLineall.beijingKLineall.length;i++)
            {
              var bj=[that.totalKLineall.beijingKLineall[i].indate,that.totalKLineall.beijingKLineall[i].deal];
              that.totalKLine.beijingKLine.push(bj);

            }
            for(var i=0;i<that.totalKLineall.chongqingLineall.length;i++)
            {
              var cq=[that.totalKLineall.chongqingLineall[i].indate,that.totalKLineall.chongqingLineall[i].deal];
              that.totalKLine.chongqingLine.push(cq);
            }
            for(var i=0;i<that.totalKLineall.fujianKLineall.length;i++)
            {
              var fj=[that.totalKLineall.fujianKLineall[i].indate,that.totalKLineall.fujianKLineall[i].deal];
              that.totalKLine.fujianKLine.push(fj);
            }
            for(var i=0;i<that.totalKLineall.guangdongKLineall.length;i++)
            {
              var gd=[that.totalKLineall.guangdongKLineall[i].indate,that.totalKLineall.guangdongKLineall[i].deal];
              that.totalKLine.guangdongKLine.push(gd);
            }
            for(var i=0;i<that.totalKLineall.hubeiKLineall.length;i++)
            {
              var hb=[that.totalKLineall.hubeiKLineall[i].indate,that.totalKLineall.hubeiKLineall[i].deal];
              that.totalKLine.hubeiKLine.push(hb);
            }
            for(var i=0;i<that.totalKLineall.shanghaiKLineall.length;i++)
            {

              var sh=[that.totalKLineall.shanghaiKLineall[i].indate,that.totalKLineall.shanghaiKLineall[i].deal];
              that.totalKLine.shanghaiKLine.push(sh);
            }
            for(var i=0;i<that.totalKLineall.shenzhenKLineall.length;i++)
            {
              var sz=[that.totalKLineall.shenzhenKLineall[i].indate,(that.totalKLineall.shenzhenKLineall[i].deal/1).toFixed(1)];
              if(that.totalKLineall.shenzhenKLineall[i].deal==0)
              {
                continue;
              }
              that.totalKLine.shenzhenKLine.push(sz);
            }
            for (var i=0;i<that.totalKLineall.tianjinKLineall.length;i++)
            {
              var tj=[that.totalKLineall.tianjinKLineall[i].indate,that.totalKLineall.tianjinKLineall[i].deal];
              that.totalKLine.tianjinKLine.push(tj);
            }

            // console.log(that.totalKLine.tianjinKLine);
           that.drawTotalKLineChart();
            that.loading1=false;

          })
          .catch(function(error) {
            console.log(error);
          });
      },
      getcarbonTradingeNumberChartData(){
        let that = this;
        this.$axios
          .post("/getcarbonTradingeNumberChartData", {value:"1"})
          .then(function(res) {
            for(var  i=0;i<res.data.length;i++)
            {
              that.carbonTradingNumberPiedata[i].value=(res.data[i].value/10000).toFixed(1);
              that.carbonTradingNumberPiedata[i].name=res.data[i].city;
            }

            that.drawcarbonTradingeNumPieChart();
            that.loading2=false;
          })
          .catch(function(error) {
            console.log(error);
          });
      },
      getcarbonTradingeAmountChartData(){
        let that = this;
        this.$axios
          .post("/getcarbonTradingeAmountChartData", {value:"1"})
          .then(function(res) {
            for(var  i=0;i<res.data.length;i++)
            {


              that.carbonTradingAmountPiedata[i].value=(res.data[i].value/10000).toFixed(1);
              that.carbonTradingAmountPiedata[i].name=res.data[i].city;
            }
            that.drawcarbonTradingeMountChart();
            that.loading3=false;
          })
          .catch(function(error) {
            console.log(error);
          });
      },
    },
    watch:{

    },
    }
</script>

<style scoped>
.carbonTradingeNum{

  padding-top: 0px;
  width: 450px;
  height: 450px;
  background-color: #5a5a5a;
}
.carbonTradingeMount{

  margin-right: 150px;
  width: 450px;
  height: 450px;
 background-color: #2c3e50;
}
  .totalKLine{
    margin-top:100px;
    margin-left: 150px;
    width: 1000px;
    height: 600px;
  }
 .z_line{
  height: 70px;
  font-size: 24px;
  cursor: pointer;
}








</style>

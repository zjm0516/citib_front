<!--直接先run dev ,然后开着来调试!-->
<!--排版和界面,使用element!-->
<template>
  <el-container
    direction="vertical">
    <div class="topMenu">
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <!--        //为每个界面写跳转-->
        <el-menu-item index="1" @click="changeToHomePage">首页</el-menu-item>
        <el-menu-item index="2" @click="changeToKanpan">看盘</el-menu-item>
        <el-menu-item index="3" @click="changeTorealTimeInfo">资讯</el-menu-item>
        <el-menu-item index="4" @click="changeToService">服务</el-menu-item>
        <el-menu-item index="5" @click="changeToMine" style="position: absolute;left: 90%;">我的</el-menu-item>
        <!--        //原来我的的格式，带小人的。-->
        <!--        <div class="el-icon-user-solid" style="font-size: 40px"></div>-->
      </el-menu>
    </div>
    <el-main>
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="碳交易" type="primary">
          <el-main>
            <el-collapse v-model="activeNames" @change="handleChange">
              <el-collapse-item  v-bind:title=title[3] name="4">
                <div style="font-size:12px" align="left">日期:{{ time[3] }}</div>
                <div style="font-size: 12px" align="left">{{ content[3] }}...</div>
                <div align="left">
                  <el-link type="primary" v-bind:href=href[3] target="_blank" >详情</el-link>
                </div>
              </el-collapse-item>
              <el-collapse-item v-bind:title=title[4] name="5">
                <div style="font-size:12px" align="left">日期:{{ time[4] }}</div>
                <div style="font-size:12px" align="left">{{ content[4] }}...</div>
                <div align="left">
                  <el-link type="primary" v-bind:href=href[4] target="_blank" align="left">详情</el-link>
                </div>
              </el-collapse-item>
              <el-collapse-item v-bind:title=title[5] name="6">
                <div style="font-size:12px" align="left">日期:{{ time[5] }}</div>
                <div style="font-size:12px" align="left">{{ content[5] }}...</div>
                <div align="left">
                  <el-link type="primary" v-bind:href=href[5] target="_blank" align="left">详情</el-link>
                </div>
              </el-collapse-item>
              <el-collapse-item v-bind:title=title[6] name="7">
                <div style="font-size:12px" align="left">日期:{{ time[6] }}</div>
                <div style="font-size:12px" align="left">{{ content[6] }}...</div>
                <div align="left">
                  <el-link type="primary" v-bind:href=href[6] target="_blank" align="left">详情</el-link>
                </div>
              </el-collapse-item>
              <el-collapse-item v-bind:title=title[7] name="8">
                <div style="font-size:12px" align="left">日期:{{ time[7] }}</div>
                <div style="font-size:12px" align="left">{{ content[7] }}...</div>
                <div align="left">
                  <el-link type="primary" v-bind:href=href[7] target="_blank" align="left">详情</el-link>
                </div>
              </el-collapse-item>
              <el-collapse-item v-bind:title=title[8] name="9">
                <div style="font-size:12px" align="left">日期:{{ time[8] }}</div>
                <div style="font-size:12px" align="left">{{ content[8] }}...</div>
                <div align="left">
                  <el-link type="primary" v-bind:href=href[8] target="_blank" align="left">详情</el-link>
                </div>
              </el-collapse-item>
              <el-collapse-item v-bind:title=title[9] name="10">
                <div style="font-size:12px" align="left">日期:{{ time[9] }}</div>
                <div style="font-size:12px" align="left">{{ content[9] }}...</div>
                <div align="left">
                  <el-link type="primary" v-bind:href=href[9] target="_blank" align="left">详情</el-link>
                </div>
              </el-collapse-item>
              <el-collapse-item v-bind:title=title[0] name="1">
                <div style="font-size:12px" align="left">日期:{{ time[0] }}</div>
                <div style="font-size:12px" align="left">{{ content[0] }}...</div>
                <div align="left">
                  <el-link type="primary" v-bind:href=href[0] target="_blank" align="left">详情</el-link>
                </div>
              </el-collapse-item>
              <el-collapse-item v-bind:title=title[1] name="2">
                <div style="font-size:12px" align="left">日期:{{ time[1] }}</div>
                <div style="font-size:12px" align="left">{{ content[1] }}...</div>
                <div align="left">
                  <el-link type="primary" v-bind:href=href[1] target="_blank" align="left">详情</el-link>
                </div>
              </el-collapse-item>
              <el-collapse-item v-bind:title=title[2] name="3">
                <div style="font-size:12px" align="left">日期:{{ time[2] }}</div>
                <div style="font-size:12px" align="left">{{ content[2] }}...</div>
                <div align="left">
                  <el-link type="primary" v-bind:href=href[2] target="_blank" align="left">详情</el-link>
                </div>
              </el-collapse-item>

            </el-collapse>
          </el-main>
        </el-tab-pane>
        <el-tab-pane label="碳金融" type="primary">
          <el-main>
            <el-collapse v-model="activeNames" @change="handleChange">
              <el-collapse-item v-bind:title=title[1] name="2">
                <div style="font-size:12px" align="left">日期:{{ time[1] }}</div>
                <div style="font-size:12px" align="left">{{ content[1] }}...</div>
                <div align="left">
                  <el-link type="primary" v-bind:href=href[1] target="_blank" align="left">详情</el-link>
                </div>
              </el-collapse-item>
              <el-collapse-item v-bind:title=title[3] name="4">
                <div style="font-size:12px" align="left">日期:{{ time[3] }}</div>
                <div style="font-size: 12px" align="left">{{ content[3] }}...</div>
                <div align="left">
                  <el-link type="primary" v-bind:href=href[3] target="_blank" align="left">详情</el-link>
                </div>
              </el-collapse-item>
              <el-collapse-item v-bind:title=title[4] name="5">
                <div style="font-size:12px" align="left">日期:{{ time[4] }}</div>
                <div style="font-size:12px" align="left">{{ content[4] }}...</div>
                <div align="left">
                  <el-link type="primary" v-bind:href=href[4] target="_blank" align="left">详情</el-link>
                </div>
              </el-collapse-item>
              <el-collapse-item v-bind:title=title[5] name="6">
                <div style="font-size:12px" align="left">日期:{{ time[5] }}</div>
                <div style="font-size:12px" align="left">{{ content[5] }}...</div>
                <div align="left">
                  <el-link type="primary" v-bind:href=href[5] target="_blank" align="left">详情</el-link>
                </div>
              </el-collapse-item>
              <el-collapse-item v-bind:title=title[6] name="7">
                <div style="font-size:12px" align="left">日期:{{ time[6] }}</div>
                <div style="font-size:12px" align="left">{{ content[6] }}...</div>
                <div align="left">
                  <el-link type="primary" v-bind:href=href[6] target="_blank" align="left">详情</el-link>
                </div>
              </el-collapse-item>
              <el-collapse-item v-bind:title=title[7] name="8">
                <div style="font-size:12px" align="left">日期:{{ time[7] }}</div>
                <div style="font-size:12px" align="left">{{ content[7] }}...</div>
                <div align="left">
                  <el-link type="primary" v-bind:href=href[7] target="_blank" align="left">详情</el-link>
                </div>
              </el-collapse-item>
              <el-collapse-item v-bind:title=title[8] name="9">
                <div style="font-size:12px" align="left">日期:{{ time[8] }}</div>
                <div style="font-size:12px" align="left">{{ content[8] }}...</div>
                <div align="left">
                  <el-link type="primary" v-bind:href=href[8] target="_blank" align="left">详情</el-link>
                </div>
              </el-collapse-item>
              <el-collapse-item v-bind:title=title[9] name="10">
                <div style="font-size:12px" align="left">日期:{{ time[9] }}</div>
                <div style="font-size:12px" align="left">{{ content[9] }}...</div>
                <div align="left">
                  <el-link type="primary" v-bind:href=href[9] target="_blank" align="left">详情</el-link>
                </div>
              </el-collapse-item>
              <el-collapse-item v-bind:title=title[0] name="1">
                <div style="font-size:12px" align="left">日期:{{ time[0] }}</div>
                <div style="font-size:12px" align="left">{{ content[0] }}...</div>
                <div align="left">
                  <el-link type="primary" v-bind:href=href[0] target="_blank" align="left">详情</el-link>
                </div>
              </el-collapse-item>
              <el-collapse-item v-bind:title=title[2] name="3">
                <div style="font-size:12px" align="left">日期:{{ time[2] }}</div>
                <div style="font-size:12px" align="left">{{ content[2] }}...</div>
                <div align="left">
                  <el-link type="primary" v-bind:href=href[2] target="_blank" align="left">详情</el-link>
                </div>
              </el-collapse-item>
            </el-collapse>
          </el-main>
        </el-tab-pane>
        <el-tab-pane label="政策法规" type="primary">
          <el-main>
            <el-collapse v-model="activeNames" @change="handleChange">
              <el-collapse-item v-bind:title=title[0] name="1">
                <div style="font-size:12px" align="left">日期:{{ time[0] }}</div>
                <div style="font-size:12px" align="left">{{ content[0] }}...</div>
                <div align="left">
                  <el-link type="primary" v-bind:href=href[0] target="_blank" align="left">详情</el-link>
                </div>
              </el-collapse-item>
              <el-collapse-item v-bind:title=title[2] name="3">
                <div style="font-size:12px" align="left">日期:{{ time[2] }}</div>
                <div style="font-size:12px" align="left">{{ content[2] }}...</div>
                <div align="left">
                  <el-link type="primary" v-bind:href=href[2] target="_blank" align="left">详情</el-link>
                </div>
              </el-collapse-item>
              <el-collapse-item v-bind:title=title[3] name="4">
                <div style="font-size:12px" align="left">日期:{{ time[3] }}</div>
                <div style="font-size: 12px" align="left">{{ content[3] }}...</div>
                <div align="left">
                  <el-link type="primary" v-bind:href=href[3] target="_blank" align="left">详情</el-link>
                </div>
              </el-collapse-item>
              <el-collapse-item v-bind:title=title[4] name="5">
                <div style="font-size:12px" align="left">日期:{{ time[4] }}</div>
                <div style="font-size:12px" align="left">{{ content[4] }}...</div>
                <div align="left">
                  <el-link type="primary" v-bind:href=href[4] target="_blank" align="left">详情</el-link>
                </div>
              </el-collapse-item>
              <el-collapse-item v-bind:title=title[5] name="6">
                <div style="font-size:12px" align="left">日期:{{ time[5] }}</div>
                <div style="font-size:12px" align="left">{{ content[5] }}...</div>
                <div align="left">
                  <el-link type="primary" v-bind:href=href[5] target="_blank" align="left">详情</el-link>
                </div>
              </el-collapse-item>
              <el-collapse-item v-bind:title=title[6] name="7">
                <div style="font-size:12px" align="left">日期:{{ time[6] }}</div>
                <div style="font-size:12px" align="left">{{ content[6] }}...</div>
                <div align="left">
                  <el-link type="primary" v-bind:href=href[6] target="_blank" align="left">详情</el-link>
                </div>
              </el-collapse-item>
              <el-collapse-item v-bind:title=title[7] name="8">
                <div style="font-size:12px" align="left">日期:{{ time[7] }}</div>
                <div style="font-size:12px" align="left">{{ content[7] }}...</div>
                <div align="left">
                  <el-link type="primary" v-bind:href=href[7] target="_blank" align="left">详情</el-link>
                </div>
              </el-collapse-item>
              <el-collapse-item v-bind:title=title[8] name="9">
                <div style="font-size:12px" align="left">日期:{{ time[8] }}</div>
                <div style="font-size:12px" align="left">{{ content[8] }}...</div>
                <div align="left">
                  <el-link type="primary" v-bind:href=href[8] target="_blank" align="left">详情</el-link>
                </div>
              </el-collapse-item>
              <el-collapse-item v-bind:title=title[9] name="10">
                <div style="font-size:12px" align="left">日期:{{ time[9] }}</div>
                <div style="font-size:12px" align="left">{{ content[9] }}...</div>
                <div align="left">
                  <el-link type="primary" v-bind:href=href[9] target="_blank" align="left">详情</el-link>
                </div>
              </el-collapse-item>
              <el-collapse-item v-bind:title=title[1] name="2">
                <div style="font-size:12px" align="left">日期:{{ time[1] }}</div>
                <div style="font-size:12px" align="left">{{ content[1] }}...</div>
                <div align="left">
                  <el-link type="primary" v-bind:href=href[1] target="_blank" align="left">详情</el-link>
                </div>
              </el-collapse-item>
            </el-collapse>
          </el-main>
        </el-tab-pane>
        <el-tab-pane label="今日看点" type="primary">
          <el-main>
            <el-collapse v-model="activeNames" @change="handleChange">
              <el-collapse-item v-bind:title=title[1] name="2">
                <div style="font-size:12px" align="left">{{ content[1] }}...</div>
                <div align="left">
                  <el-link type="primary" v-bind:href=href[1] target="_blank" align="left">详情</el-link>
                </div>
              </el-collapse-item>
              <el-collapse-item v-bind:title=title[2] name="3">
                <div style="font-size:12px" align="left">{{ content[2] }}...</div>
                <div align="left">
                  <el-link type="primary" v-bind:href=href[2] target="_blank" align="left">详情</el-link>
                </div>
              </el-collapse-item>
              <el-collapse-item v-bind:title=title[0] name="1">
                <div style="font-size:12px" align="left">{{ content[0] }}...</div>
                <div align="left">
                  <el-link type="primary" v-bind:href=href[0] target="_blank" align="left">详情</el-link>
                </div>
              </el-collapse-item>
              <el-collapse-item v-bind:title=title[3] name="4">
                <div style="font-size:12px" align="left">{{ content[3] }}...</div>
                <div align="left">
                  <el-link type="primary" v-bind:href=href[3] target="_blank" align="left">详情</el-link>
                </div>
              </el-collapse-item>
              <el-collapse-item v-bind:title=title[4] name="5">
                <div style="font-size:12px" align="left">{{ content[4] }}...</div>
                <div align="left">
                  <el-link type="primary" v-bind:href=href[4] target="_blank" align="left">详情</el-link>
                </div>
              </el-collapse-item>
              <el-collapse-item v-bind:title=title[5] name="6">
                <div style="font-size:12px" align="left">{{ content[5] }}...</div>
                <div align="left">
                  <el-link type="primary" v-bind:href=href[5] target="_blank" align="left">详情</el-link>
                </div>
              </el-collapse-item>
              <el-collapse-item v-bind:title=title[6] name="7">
                <div style="font-size:12px" align="left">{{ content[6] }}...</div>
                <div align="left">
                  <el-link type="primary" v-bind:href=href[6] target="_blank" align="left">详情</el-link>
                </div>
              </el-collapse-item>
              <el-collapse-item v-bind:title=title[7] name="8">
                <div style="font-size:12px" align="left">{{ content[7] }}...</div>
                <div align="left">
                  <el-link type="primary" v-bind:href=href[7] target="_blank" align="left">详情</el-link>
                </div>
              </el-collapse-item>
              <el-collapse-item v-bind:title=title[8] name="9">
                <div style="font-size:12px" align="left">{{ content[8] }}...</div>
                <div align="left">
                  <el-link type="primary" v-bind:href=href[8] target="_blank" align="left">详情</el-link>
                </div>
              </el-collapse-item>
              <el-collapse-item v-bind:title=title[9] name="10">
                <div style="font-size:12px" align="left">{{ content[9] }}...</div>
                <div align="left">
                  <el-link type="primary" v-bind:href=href[9] target="_blank" align="left">详情</el-link>
                </div>
              </el-collapse-item>
            </el-collapse>
          </el-main>
        </el-tab-pane>
      </el-tabs>
    </el-main>

  </el-container>

</template>

<script>
export default {
  name: "Consult",
  // 传数据
  data() {
    return {
      activeIndex2: '1',
      title: ["广东省碳排放权交易市场2019年度碳排放配额（GDEA）采购公告",
        "中共中央政治局常委、国务院副总理韩正：制定二氧化碳排放达峰行动计划，加",
        "生态环境部李高：对标“碳达峰”目标 提出更有力度的约束性指标等",
        "欧洲碳配额EUA周五收在近两个月低点至26欧元下方",
        "“十四五”电力行业仍是碳市场“主角”",
        "欧盟发布新版欧盟碳排放交易体系国家援助指南",
        "碳市场携手全球能源互联网，加速全球碳减排",
        "“十四五”电力行业仍是碳市场“主角” 欧盟碳市场经验可借鉴",
        "生态环境部召开部常务会议：加快推进全国碳市场建设，尽早实现上线交易",
        "环境部气候司：＂十四五＂期间将进一步扩大碳市场规模"],
      href: ["http://www.tanpaifang.com/tanjiaoyi/2020/1020/74704.html",
        "http://www.tanpaifang.com/tanjiaoyi/2020/1013/74550.html",
        "http://www.tanpaifang.com/tanjiaoyi/2020/1012/74518.html",
        "http://www.tanpaifang.com/tanjiaoyi/2020/1010/74456.html",
        "http://www.tanpaifang.com/tanjiaoyi/2020/1009/74439.html",
        "http://www.tanpaifang.com/tanjiaoyi/2020/1007/74396.html",
        "http://www.tanpaifang.com/tanjiaoyi/2020/1002/74364.html",
        "http://www.tanpaifang.com/tanjiaoyi/2020/1001/74347.html",
        "http://www.tanpaifang.com/tanjiaoyi/2020/0930/74321.html",
        "http://www.tanpaifang.com/tanjiaoyi/2020/0929/74301.html"],
      content: ["广东省碳排放权交易市场2019年度 碳排放配额（GDEA）采购公告 根据国家能源集团统一部署，受企业委托，龙源（北京）碳资产管理技术有限公司欲协助集团内广东区域控排企业采购一定数量的",
        "韩正强调，要科学确定十四五时期生态环境保护目标和重点任务，坚持方向不变、力度不减，延伸深度、拓展广度，继续深入打好污染防治攻坚战，在关键领域、关键指标上实现新突破。要围绕",
        "生态环境部应对气候变化司司长李高11日在参加中央财经大学绿色金融国际研究院2020年会时表示，2030年碳达峰与2060年碳中和的目标明确了我国绿色低碳发展的时间表和路线图，我国遏制温室气",
        "欧盟碳配额（EUA）上周五跌至7周低点，大量政府拍卖供应使市场继续承压，而对新冠状病毒疫情重燃的担忧也打击了欧洲的能源市场。",
        "十四五期间，全国碳市场的建立要以电力行业为突破口，并施以相应配套政策和金融措施。全国碳市场是基于市场机制的减排政策工具，碳价过低或者较高都不能实现成本效益最优的减排。 记",
        "为落实欧盟绿色新政及2050年碳中和目标，欧委会今日发布新版欧盟碳排放交易体系国家援助指南。新指南将取代2012年发布的旧版指南，并于2021年1月1日正式生效。 碳排放交易领域实施国家援",
        "中国国家主席习近平9月22日在第七十五届联合国大会一般性辩论上的讲话中宣布，中国将提高国家自主贡献力度，采取更加有力的政策和措施，二氧化碳排放力争于2030年前达到峰值，努力争取",
        "核心阅读：十四五期间，全国碳市场的建立要以电力行业为突破口，并施以相应配套政策和金融措施。全国碳市场是基于市场机制的减排政策工具，碳价过低或者较高都不能实现成本效益最优",
        "研究部署进一步推进应对气候变化工作，审议并原则通过第四批国家生态文明建设示范市县和绿水青山就是金山银山实践创新基地名单、《生态环境统计改革工作方案》《2020年第三季度生态环",
        "近日，生态环境部应对气候变化司司长李高在应对气候变化政策吹风会上表示，十四五期间中国的碳市场将加快建设，目前发电行业已经做好了相关准备，钢铁、水泥、化工、电解铝、造纸等"],
      time: ["2020-10-20 10:28:32",
        "2020-10-13 21:23:03",
        "2020-10-12 16:57:44",
        "2020-10-10 10:13:57",
        "2020-10-09 16:10:20",
        "2020-10-07 11:08:48",
        "2020-10-02 20:18:07",
        "2020-10-01 10:57:46",
        "2020-09-30 11:16:41",
        "2020-09-29 13:34:43"]
    }

  },
  //mounted指的是在你加载界面的时候调用的函数，函数定义还是写在methods中
  mounted() {

  },
  // watch是指当界面有变化的时候，执行的函数

  //一般的方法写在这里
  methods: {
    changeToHomePage() {
      this.$router.push({path: '/'})
    },
    changeToKanpan() {
      this.$router.push({path: '/Kanpan'})
    },
    changeTorealTimeInfo() {
      this.$router.push({path: '/realTimeInfo'})
    },
    changeToService() {
      this.$router.push({path: '/Service'})
    },
    changeToMine() {
      this.$router.push({path: '/Mine'})
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },

  },
  watch: {},

}
</script>

<style>
.el-collapse-item__header{
  font-size: 18px;
}
</style>

<template>
<el-container>
  <el-main>
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="碳交易" type="primary">
        <el-main>
          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item v-bind:title=title[0] name="1">
              <div style="font-size:12px">日期:{{ time[0] }}</div>
              <div>{{ content[0] }}...</div>
              <div>
                <el-link type="primary" v-bind:href=href[0] target="_blank">详情</el-link>
              </div>
            </el-collapse-item>
            <el-collapse-item v-bind:title=title[1] name="2">
              <div style="font-size:12px">日期:{{ time[1] }}</div>
              <div>{{ content[1] }}...</div>
              <div>
                <el-link type="primary" v-bind:href=href[1] target="_blank">详情</el-link>
              </div>
            </el-collapse-item>
            <el-collapse-item v-bind:title=title[2] name="3">
              <div style="font-size:12px">日期:{{ time[2] }}</div>
              <div>{{ content[2] }}...</div>
              <div>
                <el-link type="primary" v-bind:href=href[2] target="_blank">详情</el-link>
              </div>
            </el-collapse-item>
          </el-collapse>
        </el-main>
      </el-tab-pane>
      <el-tab-pane label="碳金融" type="primary">
        <el-main>
          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item v-bind:title=title[1] name="2">
              <div style="font-size:12px">日期:{{ time[1] }}</div>
              <div>{{ content[1] }}...</div>
              <div>
                <el-link type="primary" v-bind:href=href[1] target="_blank">详情</el-link>
              </div>
            </el-collapse-item>
            <el-collapse-item v-bind:title=title[0] name="1">
              <div style="font-size:12px">日期:{{ time[0] }}</div>
              <div>{{ content[0] }}...</div>
              <div>
                <el-link type="primary" v-bind:href=href[0] target="_blank">详情</el-link>
              </div>
            </el-collapse-item>
            <el-collapse-item v-bind:title=title[2] name="3">
              <div style="font-size:12px">日期:{{ time[2] }}</div>
              <div>{{ content[2] }}...</div>
              <div>
                <el-link type="primary" v-bind:href=href[2] target="_blank">详情</el-link>
              </div>
            </el-collapse-item>
          </el-collapse>
        </el-main>
      </el-tab-pane>
      <el-tab-pane label="政策法规" type="primary">
        <el-main>
          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item v-bind:title=title[0] name="1">
              <div style="font-size:12px">日期:{{ time[0] }}</div>
              <div>{{ content[0] }}...</div>
              <div>
                <el-link type="primary" v-bind:href=href[0] target="_blank">详情</el-link>
              </div>
            </el-collapse-item>
            <el-collapse-item v-bind:title=title[2] name="3">
              <div style="font-size:12px">日期:{{ time[2] }}</div>
              <div>{{ content[2] }}...</div>
              <div>
                <el-link type="primary" v-bind:href=href[2] target="_blank">详情</el-link>
              </div>
            </el-collapse-item>

            <el-collapse-item v-bind:title=title[1] name="2">
              <div style="font-size:12px">日期:{{ time[1] }}</div>
              <div>{{ content[1] }}...</div>
              <div>
                <el-link type="primary" v-bind:href=href[1] target="_blank">详情</el-link>
              </div>
            </el-collapse-item>
          </el-collapse>
        </el-main>
      </el-tab-pane>
      <el-tab-pane label="今日看点" type="primary">
        <el-main>
          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item v-bind:title=title[1] name="2">
              <div>{{ content[1] }}...</div>
              <div>
                <el-link type="primary" v-bind:href=href[1] target="_blank">详情</el-link>
              </div>
            </el-collapse-item>
            <el-collapse-item v-bind:title=title[2] name="3">
              <div>{{ content[2] }}...</div>
              <div>
                <el-link type="primary" v-bind:href=href[2] target="_blank">详情</el-link>
              </div>
            </el-collapse-item>
            <el-collapse-item v-bind:title=title[0] name="1">
              <div>{{ content[0] }}...</div>
              <div>
                <el-link type="primary" v-bind:href=href[0] target="_blank">详情</el-link>
              </div>
            </el-collapse-item>
          </el-collapse>
        </el-main>
      </el-tab-pane>
      <el-tab-pane label="热点观察" type="primary">
        <el-main>
          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item v-bind:title=title[1] name="2">
              <div>{{ content[1] }}...</div>
              <div>
                <el-link type="primary" v-bind:href=href[1] target="_blank">详情</el-link>
              </div>
            </el-collapse-item>
            <el-collapse-item v-bind:title=title[2] name="3">
              <div>{{ content[2] }}...</div>
              <div>
                <el-link type="primary" v-bind:href=href[2] target="_blank">详情</el-link>
              </div>
            </el-collapse-item>
            <el-collapse-item v-bind:title=title[0] name="1">
              <div>{{ content[0] }}...</div>
              <div>
                <el-link type="primary" v-bind:href=href[0] target="_blank">详情</el-link>
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
  name: "realTimeInfoModule",
  data(){
    return {
          activeIndex2: '1',
          title: ["广东省碳排放权交易市场2019年度碳排放配额（GDEA）采购公告",
            "中共中央政治局常委、国务院副总理韩正：制定二氧化碳排放达峰行动计划，加",
            "生态环境部李高：对标“碳达峰”目标 提出更有力度的约束性指标等"],
          href: ["http://www.tanpaifang.com/tanjiaoyi/2020/1020/74704.html",
            "http://www.tanpaifang.com/tanjiaoyi/2020/1013/74550.html",
            "http://www.tanpaifang.com/tanjiaoyi/2020/1012/74518.html"],
          content: ["广东省碳排放权交易市场2019年度 碳排放配额（GDEA）采购公告 根据国家能源集团统一部署，受企业委托，龙源（北京）碳资产管理技术有限公司欲协助集团内广东区域控排企业采购一定数量的",
            "韩正强调，要科学确定十四五时期生态环境保护目标和重点任务，坚持方向不变、力度不减，延伸深度、拓展广度，继续深入打好污染防治攻坚战，在关键领域、关键指标上实现新突破。要围绕",
            "生态环境部应对气候变化司司长李高11日在参加中央财经大学绿色金融国际研究院2020年会时表示，2030年碳达峰与2060年碳中和的目标明确了我国绿色低碳发展的时间表和路线图，我国遏制温室气"],
          time: ["2020-10-20 10:28:32",
            "2020-10-13 21:23:03",
            "2020-10-12 16:57:44"]
    }
  }
}
</script>

<style scoped>

</style>

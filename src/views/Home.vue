<template>
  <div class="home">
    <el-carousel
      class="swiper"
      height="500px"
      :interval="5000"
      arrow="never"
      indicator-position="none"
    >
      <el-carousel-item v-for="item in bannerList" :key="item.id">
        <el-image style="width: 100%; height: 500px" :src="require('@img/banner.png')" fit="cover"></el-image>
      </el-carousel-item>
    </el-carousel>
    <div class="home-content">
      <div class="box">
        <el-row class="minht249" :gutter="20">
          <el-col :span="spanNum" class="pdt18" v-for="(expert,key, index) in expertObj" :key="index">
            <hc-expert :expertClass="expertClass" class="w100" :title="key" :expert="expert"></hc-expert>
          </el-col>
        </el-row>

        <div class="lead mgt47 mgb26">
          <span class="fz20 c_gray">方案推荐</span>
          <!-- <span class="fz20 c_gray">方案推荐</span> -->
          <div class="line mgt14">
            <p class="lineb bg_blue"></p>
          </div>
        </div>

        <div class="container-water-fall">
          <waterfall
            :col="col"
            :width="400"
            :gutterWidth="20"
            :data="planList"
            @loadmore="loadmore"
            @scroll="scroll"
          >
            <template>
              <div class="cell-item mgb30" v-for="item in planList" :key="item.article_id">
                <hc-scheme :planItem="item"></hc-scheme>
              </div>
            </template>
          </waterfall>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HcExpert from "@/components/hc-expert";
import HcScheme from "@/components/hc-scheme";
import Axios from 'axios'
export default {
  name: "Home",
  components: {
    HcExpert,
    HcScheme,
  },
  data() {
    return {
      expertObj: {},
      planList: [],
      bannerList: [],
      spanNum: 8,
      col: 3,
      expertClass: [],
    };
  },
  mounted() {
    this.switchCol()
    Axios.all
      ([this.getExpert(), this.getPlanList() , this.getBanner()])
      .then(
        Axios.spread( (expert,plan,banner) => {
          this.expertClass = Object.keys(expert.data)
          let exl = expert.data
          for(let i in exl) {
            if(exl[i].length == 0) {
              delete exl[i]
            }
          }
          this.expertObj = exl
          if(Object.keys(exl).length == 1) {
            this.spanNum = 24
          }else {
            this.spanNum = 12
          }
          // this.spanNum = 24 / Object.keys(expert.data).length;
          this.planList = plan.data.list;
          this.bannerList = banner.data;
          this._nextHeight()
        })
      );
  },
  created() {},

  methods: {
     getBanner() {
      return this.$axios.get(this.$api.HC_ADLIST, {
        params: { display: "BANNER" },
      })

      // this.bannerList = data.data;
      
    },
    getExpert() {

      return this.$axios.get(this.$api.EXPERT_HOME)
      //   .then((res) => {
      //     this.spanNum = 24 / Object.keys(res.data).length;
      //     this.expertObj = res.data;
      // console.log(2)

      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
    },
    getPlanList() {

      return this.$axios
        .get(this.$api.ARTICLE_PLAN, {
          params: {
            page: 1,
            per_page: 10,
          },
        })
      //   .then((res) => {
      //     this.planList = res.data.list;
      // console.log(3)

      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
    },
    scroll(scrollData) {
      // console.log(scrollData)
    },
    switchCol(col) {
      let width =
        document.body.clientWidth || document.documentElement.clientWidth;
      if (width < 1260) {
        this.col = 2;
      }
    },
    loadmore(index) {
      // console.log('1111')
    },
  },
};
</script>
<style lang="scss" scoped>
.home {
  &-content {
    @include bgurl("~@img/bg_page.png");

    .box {
      max-width: 1240px;
      min-width: 880px;
      margin: 0 auto;
    }
    .lead {
      .line {
        height: 1px;
        background-color: #eceaea;
        .lineb {
          width: 127px;
          height: 100%;
        }
      }
    }
  }
}
</style>

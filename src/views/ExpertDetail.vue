<template>
  <div class="expert-detail">
    <div class="left txt_c bg_white pdl27 pdt44 pdr27">
      <img class="bdr50" :src="expertDetail.avatar" alt />
      <!-- <i class="share inb pointer"></i> -->
      <p class="fz24 mgt8">{{expertDetail.nickname}}</p>
      <p class="f16 c_light mgt8">{{expertDetail.slogan}}</p>
      <p class="c_light fz14 txt_l mgt34">
        <span class="fz16 mgb6">擅长：</span>
        <span
          v-for="(item,index) in expertDetail.good_at"
          :key="index"
          class="dot mgb6 mgr5"
        >{{item}}</span>
        <span class="dot mgb6 mgr5 pointer">详情 ></span>
      </p>
      <div class="desk fz14 txt_l c_light lh5 pdt13 pdb13 mgt10">
        {{expertDetail.desc}}
        <span class="c_black pointer">详情 >></span>
      </div>
      <p class="fz28 mgt16">{{expertDetail.thread_count}}</p>
      <p class="fz16 c_light mgt13 mgb13">方案</p>
      <el-row class="about">
        <el-col class="item pdt15 pdb15" :span="12">
          <span class="fz28 c_red">{{parseInt(expertDetail.hit_rate*100)}}%</span>
          <br />
          <span class="inb mgt5 c_light">
            <span class="v_midd">{{expertDetail.best_win}}</span>
            <i class="inb v_midd pointer"></i>
          </span>
        </el-col>
        <el-col class="pdb15 pdt15" :span="12">
          <span class="fz28 c_red">{{expertDetail.max_win}}</span>
          <br />
          <span class="inb mgt5 c_light">
            <span class="v_midd">最大连红数</span>
            <i class="inb v_midd pointer"></i>
          </span>
        </el-col>
      </el-row>
    </div>
    <div class="right">
      <!-- <div class="fater">
          <div  class="pdb30 chlien pdr30"   v-for="(item,index) in articleList" :key="index">
            <hc-plan  :article="item"></hc-plan>
          </div>
      </div>-->

      <div class="container-water-fall">
        <waterfall
          :col="2"
          :width="470"
          :gutterWidth="30"
          :data="articleList"
          @loadmore="loadmore"
          @scroll="scroll"
        >
          <template>
            <div class="cell-item mgb30" v-for="(item,index) in articleList" :key="index">
              <hc-plan :article="item"></hc-plan>
            </div>
          </template>
        </waterfall>
      </div>
    </div>
  </div>
</template>
<script>
import HcPlan from "@/components/hc-plan";
import Axios from 'axios'
export default {
  name: "ExpertDetail",
  components: {
    HcPlan,
  },
  data() {
    return {
      expertDetail: {},
      articleList: [],
    };
  },
  created() {
   
  },
  mounted() {
    Axios.all([this.getArticleList(), this.getExpertDetail()]).then(
      Axios.spread((articleList1, expertDetail1) => {
        this.articleList = articleList1.data.list || [];
        let dataObj = JSON.parse(JSON.stringify(expertDetail1.data));
        if (dataObj.good_at) {
          let good_at = dataObj.good_at.split(",");
          this.expertDetail = Object.assign(dataObj, {
            good_at,
          });
        }
        // this._nextHeight();
      })
    ).catch((err,a) => {
    });
  },

  methods: {
    scroll(scrollData) {
      // console.log(scrollData)
    },
    switchCol(col) {
      this.col = col;
      console.log(this.col);
    },
    loadmore(index) {
      // console.log('1111')
    },
    getArticleList() {
      console.log(111)
      return this.$axios.get(this.$api.HC_ARTICLE, {
        params: { alias: this.$route.query.alias, page: 1, per_page: 10 },
      });
      // this.articleList = data.data.list || [];
    },
    getExpertDetail() {
      return this.$axios.get(this.$api.EXPERT_INFO, {
        params: {
          alias: this.$route.query.alias,
          user_id: this.$route.query.user_id,
        },
      });

      // let data = res.data || {};
      // let dataObj = JSON.parse(JSON.stringify(data));
      // if (dataObj.good_at) {
      //   let good_at = dataObj.good_at.split(",");
      //   this.expertDetail = Object.assign(dataObj, {
      //     good_at,
      //   });
      // }
    },
  },
};
</script>
<style scoped lang="scss">
.expert-detail {
  .left {
    position: fixed;
    top: 0;
    bottom: 0;
    width: 360px;
    img {
      width: 121px;
      height: 121px;
    }
    .share {
      width: 34px;
      height: 34px;

      @include bgurl("~@img/icon_share.png");
      top: 24px;
      right: 21px;
      position: absolute;
    }
    .dot {
      display: inline-block;
      padding: 2px 10px;
      border: 1px solid #e0e0e0;
      border-radius: 18px;
    }

    .desk {
      border-top: 1px solid #e2e2e2;
      border-bottom: 1px solid #e2e2e2;
    }
    .about {
      border-top: 1px solid #e2e2e2;
      border-bottom: 1px solid #e2e2e2;
      .item {
        border-right: 1px solid #e2e2e2;
      }
      i {
        width: 17px;
        height: 17px;
        @include bgurl("~@img/icon_about.png");
      }
    }
  }
  .right {
    transition: all 0.3s;
    padding: 30px 0 0 115px;
    float: left;
    margin-left: 360px;
  }
}

@media (max-width: 1560px) {
  .right {
    padding-left: 30px !important;
  }
}
</style>
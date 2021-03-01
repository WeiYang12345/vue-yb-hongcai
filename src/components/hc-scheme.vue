<template>
  <div class="scheme bg_white">
    <el-row class="title pdt12">
      <el-col
        @click.native="_goLink('ExpertDetail',{alias:planItem.alias,user_id:planItem.user_id})"
        :span="16"
        class="pdl10 pointer"
      >
        <img class="v_midd bdr50" :src="planItem.expert.avatar" alt />
        <div class="inb v_midd mgl10">
          <span class="hover_cblue fz18">{{ planItem.expert.nickname }}</span>
          <div class="c_light">
            <span class="fz12">{{planItem.expert.slogan}}</span>
            <span class="got fz12 mgl5">{{planItem.expert.best_win}}</span>
          </div>
        </div>
      </el-col>
      <el-col :span="8" class="txt_r">
        <div class="probability txt_c bg_red fz14 c_white pdt10">
          {{parseInt(planItem.expert.hit_rate*100)}}%
          <br />命中率
        </div>
      </el-col>
    </el-row>
    <div class="content">
      <div
        @click="_goLink('ArticleDetail',{alias:planItem.alias,article_id:planItem.article_id,user_id:planItem.user_id})"
        class="hover_cblue bdt_gray pdt14 lh2 pointer"
      >{{planItem.title}}</div>
      <div class="list">
        <el-row
          v-for="(item,index) in planItem.match_list"
          :key="index"
          class="item c_gray fz12 mgt1"
        >
          <el-col
            :span="16"
          >[{{item.category_name}}]{{item.category_name}}：{{item.home_name}} VS {{item.guest_name}}</el-col>
          <el-col :span="8">{{item.match_time}}</el-col>
        </el-row>
      </div>
      <el-row class="foot">
        <el-col :span="16" class="pdt8 fz12">
          <span class="c_light">{{planItem.publish_time}} </span>
          <!-- <span class="c_blue">|&nbsp;88雷币 </span> -->
        </el-col>
        <el-col :span="8" class="txt_r">
          <!-- <i class="collect inb pointer"></i> -->
          <div class="shareBox pdb16 inb">
            <i class="share inb mgl8 pointer"></i>
            <div class="icon-box txt_c bg_white">
              <!-- <i class="wx v_midd"></i> -->
              <!-- <i @click="hanlerWb()" class="wb v_midd mgl2"></i>
              <i @click="hanlerQq()" class="kj v_midd mgl2"></i>-->
              <hc-share :title="planItem.title">
                <template>
                  <a href="#" class="social-share-icon icon-weibo"></a>
                  <a href="#" class="social-share-icon icon-qzone"></a>
                </template>
              </hc-share>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template> 
<script>

import HcShare from '@/components/hc-share'
export default {
  name: "HcScheme",
  props: {
    planItem: Object,
  },
  components: {
    HcShare,
  },
  data() {
    return {
      
    };
  },
  mounted() {
    
  },
  created() {},
  methods: {
    // hanlerWb() {
    //   let obj = {
    //     url: "http://baidu.com",
    //     title: this.planItem.title,
    //   };
    //   this.shareToSinaWB(obj);
    // },
    // hanlerQq() {
    //   let obj = {
    //     url: "http://baidu.com",
    //     title: `【网易红彩】来看看${this.planItem.expert.nickname}专家对这场比赛的预测推荐吧`,
    //     summary: this.planItem.title,
    //   };
    //   this.shareToQzone(obj);
    // },
  },
};
</script>
<style lang="scss" scoped>
.scheme {
  // width: 404px;
  // height: 266px;
  // padding-bottom: 16px;
  position: relative;
  box-shadow: 2px 2px 8px rgba(236, 236, 236, 0.8);

  .title {
    height: 74px;
    img {
      width: 48px;
      height: 48px;
    }
    .got {
      padding: 2px 5px;
      border-radius: 15px;
      border: 1px solid #e2e2e2;
    }
    .probability {
      display: inline-block;
      width: 64px;
      height: 48px;
      border-radius: 24px 0 0 24px;
    }
  }
  .content {
    padding: 0 12px;

    .list {
      padding: 13px 0;
      .item {
        background-color: #f8f8f8;
        padding: 12px;
        border-radius: 4px;
      }
    }
    .foot {
      .collect {
        width: 25px;
        height: 25px;
        @include bgurl("~@img/icon_collect.png");
      }
      .share:hover .icon-box {
        display: block !important;
      }
      .shareBox {
        &:hover {
          .icon-box {
            display: inline-block;
          }
        }
        .icon-box {
          display: none;
          border: 1px solid #dddddd;
          z-index: 10;
          position: absolute;
          right: -13px;
          bottom: -42px;
          // width: 137px;
          padding: 0 10px;
          font-size: 0;
          height: 45px;
          line-height: 45px;
          &::after {
            content: " ";
            display: inline-block;
            width: 0;
            height: 0;
            border-left: 8px solid transparent;
            border-right: 8px solid transparent;
            border-bottom: 12px solid #eee;
            position: absolute;
            right: 17px;
            top: -12px;
          }
          &::before {
            content: " ";
            display: inline-block;
            width: 0;
            height: 0;
            border-left: 6px solid transparent;
            border-right: 6px solid transparent;
            border-bottom: 9px solid white;
            z-index: 2;
            position: absolute;
            right: 19px;
            top: -9px;
          }
          i {
            width: 36px;
            height: 36px;
            display: inline-block;
          }
          .wx {
            @include bgurl("~@img/icon_wx.png");
          }
          .wb {
            @include bgurl("~@img/icon_wb.png");
          }
          .kj {
            @include bgurl("~@img/icon_kj.png");
          }
        }
      }
      .share {
        width: 25px;
        height: 25px;
        @include bgurl("~@img/icon_share.png");
      }
    }
  }
}
</style>

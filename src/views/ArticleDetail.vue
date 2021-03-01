<template>
  <div class="article-detail">
    <el-row class="pdt32">
      <el-col :span="5">
        <div class="left txt_c bg_white pdl20 pdt44 pdr20 pdb50 bdr4">
          <img class="bdr50" :src="expertDetail.avatar" alt />
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
          <div class="desk fz14 txt_l c_light lh5 pdt13 pdb13 mgt10">{{expertDetail.desc}}</div>
          <p class="fz28 mgt16">1435</p>
          <p class="fz16 c_light mgt13 mgb13">方案</p>
          <el-row class="about">
            <el-col class="item pdt15 pdb15" :span="12">
              <span class="fz28 c_red">{{parseInt(expertDetail.hit_rate)}}%</span>
              <br />
              <span class="inb mgt5 c_light">
                {{expertDetail.best_win}}
                <i class="inb v_midd pointer"></i>
              </span>
            </el-col>
            <el-col class="pdb15 pdt15" :span="12">
              <span class="fz28 c_red">{{expertDetail.max_win}}</span>
              <br />
              <span class="inb mgt5 c_light">
                最大连红数
                <i class="inb v_midd pointer"></i>
              </span>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="17" class="pdl30">
        <div class="center bg_white pdl50 pdr50 pdt59 bdr4 pdb26">
          <i
            v-if="articleDetail.hit_rate_value"
            :style="{backgroundImage: `url(${require('@img/'+getimg(articleDetail.hit_rate_value)+'.png')})`}"
            class="dot inb c_white txt_c"
          >{{articleDetail.hit_rate_value}}</i>
          <p class="fz36 fb lh4 mgt18">{{articleDetail.title}}</p>
          <p class="timer c_light f14 pdt32 pdb32 mgb29">{{articleDetail.publish_time}}</p>
          <div
            v-for="(match,matchIndex) in articleDetail.match_list"
            :key="matchIndex"
            class="box pdb30 bdr4 fz22 mgb20"
          >
            <el-row class="title pdl12 pdr12 pdt15 pdb15">
              <el-col :span="18" class="fz18">
                <span
                  :class="[{'bg_gray':match.match_status===1},{'bg_yellew':match.match_status==1}]"
                  class="sign c_white fz16"
                >{{match.match_status===1?'未开始':(match.match_status===2?'进行中':'已结束')}}</span>
                <span class="mgl17">{{match.category_name}}</span>
                <span class="c_light mgl10 mgr10">|</span>
                <span class="c_red">周一003</span>
                <span class="c_light mgl10 mgr10">|</span>
                <span>{{match.league_name}}</span>
                <span class="c_light mgl10 mgr10">|</span>
                <span>{{match.match_time}}</span>
              </el-col>
              <el-col :span="6" class="c_light txt_r fz16">本场比赛其他方案 ></el-col>
            </el-row>
            <el-row
              v-for="(play,playIndex) in match.play_vo_list&&match.play_vo_list"
              :key="playIndex"
              :gutter="10"
              class="branch pdt30 pdb23"
            >
              <el-col class="text txt_c" :span="4">{{play.play_name}}</el-col>
              <el-col v-show="playIndex===0" class="txt_c" :span="20">
                <span class="v_midd">{{match.home_name}}</span>
                <div class="match_iocn inb txt_c mgr15 mgl15 bdr50 v_midd pdt6">
                  <img class="wt24 ht24" :src="match.home_icon" alt />
                </div>
                <span class="v_midd fz32">
                  {{match.home_score}}
                  <span class="inb mgl30 mgr30">:</span>
                  {{match.guest_score}}
                </span>
                <div class="match_iocn txt_c inb mgr15 mgl15 bdr50 v_midd pdt6">
                  <img class="wt24 ht24" :src="match.guest_icon" alt />
                </div>
                <span class="v_midd">{{match.guest_name}}</span>
              </el-col>
              <el-col class="mgt20" :span="24">
                <el-row :gutter="10" class>
                  <el-col class="txt_c" :span="4">
                    <span class="num inb bdr2 txt_c bg_blue">{{play.concede}}</span>
                  </el-col>
                  <el-col class="txt_c" :span="20">
                    <i v-if="articleDetail.iswin == 1" class="sy"></i>
                    <i v-if="articleDetail.iswin == 0" class="sy1"></i>

                    <el-row :gutter="2" v-if="play.item_vo_list">
                      <el-col :span="8" class="petbox">
                        <div class="pet bdr2 lh2">
                          <span>{{play.item_vo_list[0].play_item_name}}</span>
                          <br />
                          <span>{{play.item_vo_list[0].odds}}</span>
                          <i
                            v-show="play.C===play.item_vo_list[0].play_item_code"
                            class="recom c_white"
                          >荐</i>
                          <i v-show="play.R===play.item_vo_list[0].play_item_code" class="sl"></i>
                        </div>
                      </el-col>
                      <el-col class="petbox" :span="8">
                        <div class="pet bg72 c_white bdr2 lh2">
                          <span>{{play.item_vo_list[1].play_item_name}}</span>
                          <br />
                          <span>{{play.item_vo_list[1].odds}}</span>
                          <i
                            v-show="play.C===play.item_vo_list[1].play_item_code"
                            class="recom c_white"
                          >荐</i>
                          <i v-show="play.R===play.item_vo_list[1].play_item_code" class="sl"></i>
                        </div>
                      </el-col>
                      <el-col v-if="play.item_vo_list[2]" class="petbox" :span="8">
                        <div class="pet bg72 c_white bdr2 lh2">
                          <span>{{play.item_vo_list[2].play_item_name}}</span>
                          <br />
                          <span>{{play.item_vo_list[2].odds}}</span>
                          <i
                            v-show="play.C===play.item_vo_list[2].play_item_code"
                            class="recom c_white"
                          >荐</i>
                          <i v-show="play.R===play.item_vo_list[2].play_item_code" class="sl"></i>
                        </div>
                      </el-col>
                    </el-row>

                    <div></div>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
          </div>
          <el-divider class="mgt60 mgb60">
            <span class="fz24 c_light">推荐理由</span>
          </el-divider>
          <div class="recommend" v-html="articleDetail.content"></div>
        </div>
      </el-col>
      <el-col :span="2">
        <div class="share inb txt_c pdl30">
          <!-- <i class="icon1 inb "></i>
          <br/>-->
          <i class="icon2 inb mgt14"></i>
          <br />
          <!-- <i class="icon3 inb mgt14"></i>
          <br/>-->
          <hc-share v-if="articleDetail.title" :title="articleDetail.title" class="social">
            <template>
              <a href="#" class="social-share-icon icon-weibo"></a>
              <br />
              <a href="#" class="social-share-icon icon-qzone"></a>
            </template>
          </hc-share>

          <!-- <i class="icon4 inb mgt14"></i>
          <br/>
          <i class="icon5 inb mgt14"></i>-->
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import HcShare from '@/components/hc-share'
import Axios from 'axios'
export default {
  name: "ArticleDetail",
  components: {
    HcShare
  },
  data() {
    return {
      articleDetail: {},
      expertDetail: {},
    };
  },
  created() {
    // this.getExpertDetail();
    // this.getArticleDetail();
    console.log(location.href)
  },
  mounted() {

    Axios.all([this.getExpertDetail(),this.getArticleDetail()]).then(
        Axios.spread( (expertDetail,articleDetail) => {
          let data = expertDetail.data || {};
          let dataObj = JSON.parse(JSON.stringify(data));
          if (dataObj.good_at) {
            let good_at = dataObj.good_at.split(",");
            this.expertDetail = Object.assign(dataObj, {
              good_at,
            });
          }

          this.articleDetail = articleDetail.data || {};
          this._nextHeight()
        })
      );

  },
  methods: {
    
     getExpertDetail() {
       return this.$axios.get(this.$api.EXPERT_INFO, {
        params: {
          alias: this.$route.query.alias,
          user_id: this.$route.query.user_id,
        },
      });

      
    },
     getArticleDetail() {
      return this.$axios.get(this.$api.ARTICLE_INFO, {
        params: { article_id: this.$route.query.article_id },
      });
      // this.articleDetail = data.data || {};
    },
    whetherTj(type) {
      switch (type) {
        case "W":
          return;
      }
    },
    getimg(type) {
      switch (type) {
        case "红":
          return "icon_dot_red";
          break;
        case "黑":
          return "icon_dot_black";
          break;
        default:
          return "icon_dot_yollow";
          break;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.article-detail {
  width: 1300px;
  margin: 0 auto;
  .left {
    width: 100%;
    box-shadow: 2px 2px 8px rgba(236, 236, 236, 0.8);
    img {
      width: 141px;
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
  .center {
    box-shadow: 2px 2px 8px rgba(236, 236, 236, 0.8);
    margin-bottom: 20px;
    .dot {
      width: 52px;
      height: 25px;
      line-height: 25px;
      background-size: cover;
      background-repeat: no-repeat;
    }
    .timer {
      border-bottom: 1px solid #eceaea;
    }
    .box {
      border: 1px solid #eceaea;
      .title {
        background-color: #f5f5f5;
        .sign {
          background: #bbbbbb;
          padding: 2px 8px;
          border-radius: 15px;
        }
      }

      .branch {
        padding-left: 90px;
        padding-right: 90px;
        .match_iocn {
          width: 38px;
          height: 38px;
          border: 1px solid #eeeeee;
        }
        .num {
          width: 100%;
          height: 69px;
          line-height: 69px;
          background-color: rgba(38, 158, 255, 0.3);
        }
        .text {
          line-height: 38px;
        }
        .sy {
            width: 41px;
            height: 42px;
            top: 0px;
            right: 6px;
            position: absolute;
            display: inline-block;
            @include bgurl("~@img/icon_sy1.png");
            z-index: 10;
        }
        .sy1 {
            width: 41px;
            height: 42px;
            top: 0px;
            right: 6px;
            position: absolute;
            display: inline-block;
            @include bgurl("~@img/icon_sy2.png");
            z-index: 10;
        }
        .petbox {
          display: table;
          .sl {
            border-radius: 50%;
            width: 18px;
            height: 18px;
            display: inline-block;
            @include bgurl("~@img/icon_sl.png");
            position: absolute;
            top: 26px;
            right: 41px;
          }
          
          .pet {
            position: relative;
            height: 69px;
            background-color: rgba(38, 158, 255, 0.3);
            display: table-cell;
            vertical-align: middle;
            .recom {
              width: 33px;
              height: 29px;
              line-height: 29px;
              text-align: center;
              position: absolute;
              top: 0px;
              left: 8px;
              @include bgurl("~@img/icon_recom.png");
              font-size: 18px;
            }
          }
          .bg72 {
            background-color: #7e7272;
          }
        }
      }
    }
  }
  .share {
    position: fixed;
    &:hover {
      .social {
        display: inline-block;
      }
    }
    .social {
      display: none;
    }
    .icon1 {
      width: 56px;
      height: 56px;
      @include bgurl("~@img/icon_collect.png");
    }
    .icon2 {
      width: 56px;
      height: 56px;
      @include bgurl("~@img/icon_share.png");
    }
    .icon3 {
      width: 38px;
      height: 38px;
      @include bgurl("~@img/icon_wx.png");
    }
    .icon4 {
      width: 38px;
      height: 38px;
      display: none;
      @include bgurl("~@img/icon_wb.png");
    }
    .icon5 {
      width: 38px;
      height: 38px;
      display: none;
      @include bgurl("~@img/icon_kj.png");
    }
  }
}
::v-deep.article-detail .recommend {
  line-height: 1.5;
  p {
    margin-bottom: 10px;
  }
  p:nth-child(1) {
    font-size: 20px;
  }
  p:nth-child(2) {
    font-size: 16px;
  }
}
</style>
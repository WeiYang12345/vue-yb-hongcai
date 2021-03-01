<template>
  <div
    @click="_goLink('ArticleDetail',{article_id:article.article_id,alias:article.alias,user_id:article.experts_id})"
    class="hc-plan pdl18 pdr18 bg_white pdb20 pdt15 pointer bdr4"
  >
    <div class="tit lh4 mgb13 hover_cblue">
      <span
        :style="{backgroundImage: `url(${require('@img/'+getimg(article.hit_rate_value)+'.png')})`}"
        class="dot inb fz14 v_midd txt_c mgr5 c_white"
      >{{article.hit_rate_value}}</span>
      <span class="fz20 v_midd">{{article.title}} {{index}}</span>
    </div>
    <el-row   class=" pdt11 pdb11 pdr14 pdl14 c_gray bg_gray bdr4 mgt1"  v-for="(item, index) in article.match_list" :key="index" >
      <el-col
        class="fz14"
        :span="16"
      >[{{item.category_name}}]{{item.league_name}}：{{item.home_name}} VS {{item.guest_name}}</el-col>
      <el-col class="txt_r fz12" :span="8">{{item.match_time}}</el-col>
    </el-row>
    

    <el-row class="mgt23">
      <el-col :span="16" class="fz14 c_light">{{article.publish_time}} | 查看 ></el-col>
      <el-col :span="8" class="txt_r">
        <!-- <i class="collect inb pointer"></i>
        <i class="share inb mgl8 pointer"></i> -->
          <hc-share :title="article.title">
                <template>
                  <a href="#" class="social-share-icon icon-weibo"></a>
                  <a href="#" class="social-share-icon icon-qzone"></a>
                </template>
              </hc-share>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import HcShare from '@/components/hc-share'
export default {
  name: "HcPlan",
  props: {
    article: {
      type: Object,
      required: true,
    },
    index: Number,
  },
  components: {
    HcShare
  },
  data() {
    return {};
  },
  created() {
  //  console.log(this.article)
  },
  
  methods: {
    getimg(type) {
      switch (type) {
        case "红":
          return "icon_dot_red";
        case "黑":
          return "icon_dot_black";
        case "2中1":
          return "icon_dot_yollow";

        default:
          return  "icon_dot_yollow"
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.hc-plan {
  width: 470px;
  box-shadow: 2px 2px 8px rgba(236,236,236,0.8);
  .tit {
    .dot {
      width: 46px;
      height: 22px;
      line-height: 22px;
      // @include bgurl("~@img/icon_dot_red.png");
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
  .collect {
    width: 25px;
    height: 25px;
    @include bgurl("~@img/icon_collect.png");
  }
  .share {
    width: 25px;
    height: 25px;
    @include bgurl("~@img/icon_share.png");
  }
}
</style>
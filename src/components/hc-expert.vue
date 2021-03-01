<template>
  <div class="expert bg_white">
    <el-row class="expert-tit">
      <el-col :span="12" class="left">
        <img  :src="require(`@img/${iconObj[title].img}.png`)" alt="">
        <span class="fz18">{{iconObj[title].name}}专家</span>
      </el-col>
      <el-col class="txt_r right" :span="12">
        <div @click="_goLink('Expert',{type:title})" class="c_light fz14 pointer">更多></div>
      </el-col>
    </el-row>
    <el-row class="expert-con pdt22">
      <el-col @click.native="_goLink('ExpertDetail',{alias:item.alias,user_id:item.user_id})" v-for="(item,index) in expert" :key="index" :span="8" class="txt_c pointer">
        <img class="bdr50" :src="item.avatar" alt />
        <div class="hover_cblue fz14 mgt8">{{item.nickname}}</div>
        <div class="c_light fz12 mgt5">{{item.slogan}}</div>
        <div class="c_gray fz12 mgt10">命中<span class="fz18 c_red">{{parseInt(item.hit_rate*100)}}%</span></div>
        <!-- <button class="mgt10 fz14">已关注</button> -->
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "HcExpert",
  props: {
    expert: {
      type: Array,
      
    },
    title: String,
  },
  mounted() {
    
  },
  data() {
    return {
      iconObj: {
        basketball: {
          name: '篮球',
          img: 'icon_basketball'
        },
        football: {
          name: '足球',
          img: 'icon_football'
        },
        csgo: {
          name: 'csgo',
          img: 'icon_cs'
        },
        lol: {
          name: '英雄联盟',
          img: 'icon_yxlm'
        },
        kog: {
          name: '王者荣耀',
          img: 'icon_wzry'
        },
        dota2: {
          name: 'dota2',
          img: 'icon_dota'
        }
      }
    }
  },
  methods: {
    getTitle() {
      let type = this.title
      switch(type) {
        case 'basketball':
          return '足球';
        break  
        case 'football':
          return '篮球'
        break    
          

      }
    }
  }
};
</script>
<style lang="scss" scoped>
.expert {
  width: 412px;
  height: 249px;
  box-shadow: 2px 2px 8px rgba(236,236,236,0.8);
  &-tit {
    padding: 0 16px;
    border-bottom: 1px solid #e2e2e2;
    .right, .left {
      height: 57px;
      line-height: 57px;
      
    }
    img {
      width: 30px;
      height: 30px;
      vertical-align: middle;
    }
    
    span {
      vertical-align: middle;
    }
    
  }
  &-con {
    img {
      width: 64px;
      height: 64px;
    }
    button {
      width: 88px;
      height: 30px;
      border: 1px solid #E5E5E5;
      border-radius: 15px;
      background-color: #FAFAFA;
      color: #999;
    }
    .btn {
      border: 1px solid #269EFF;
      background-color: #269EFF;
      color: #fff;
    }
  }
}
</style>
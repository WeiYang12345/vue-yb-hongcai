<template>
  <div class="expert">
    <div ref="left" class="expert-left bg_white">
      <div  class="box txt_c">
        <img src="@img/expert.png" class="v_midd" alt="">
        <span class="fz34 c_white">专家</span>
      </div>
      <ul class="fz20 c_gray">
        <!-- <li @click="changeExpert('follow')" :class="{'active':expertType === 'follow'}">
          <i v-show="expertType === 'follow'" class="icon icon1 inb mgr10"></i>
          <span>我关注的专家</span>
        </li> -->
        <li  @click="changeExpert(item)" v-for="item in navList" :key="item.code" :class="{'active':expertItem.code === item.code}">
          <i  class="icon icon2 inb mgr10"></i>
          <span>{{item.title}}</span>
        </li>
       
      </ul>
    </div>
    <div ref="right" class="expert-right pdl25 pdt25">
      <div class="fz20 fb pdb10">{{this.expertItem.title}}</div>  
      <div v-show="isLoading" class="loading txt_c  pdt20 pdb20">
        <i class="el-icon-loading c_blue fz40"></i>
      </div>
      <el-row :gutter="20">
        <el-col :md="8" :lg="6" :sm="12" class="pdb20" v-for="item in expertList" :key="item.userId">
          <hc-expert-item  :expert="item"></hc-expert-item>
        </el-col>
      </el-row>
      <div v-show="isNomore" class="nomore txt_c">
        <img src="@img/zwtp.png" alt="">
      </div>  
      
      
    </div>
  </div>
</template>
<script>
import HcExpertItem from '@/components/hc-expert-item'
import HcExpert from '../components/hc-expert.vue';
export default {
  name: 'Expert',
  components: {
    HcExpertItem,
    HcExpert,
   
  },
  data() {
    return {
      expertType: this.$route.query.type,
      expertItem: {code: ''},
      expertList: [],
      isLoading: false,
      navList: [],
      isNomore: false,
    }
    
  },
  created() {
    
  },
  mounted() {
    this.getExpertsType()
  },
  methods: {
    async getExpertsType() {
      let data = await this.$axios.get(this.$api.HC_EXPERTS_TYPE)
      this.navList = data.data
      this.expertItem = this.navList.find(item => item.code == this.expertType)
      this.getExpert()

    },
    changeExpert(item) {
      if(this.expertItem.code === item.code) return;
      this.expertItem = item
      this.getExpert()
    },
    async getExpert() {
      this.isNomore = false
      this.isLoading = true
      this.expertList = []
      let data = await this.$axios.get(this.$api.HC_EXPERTS, {
        params: { class_code: this.expertItem.code, page: 1, per_page: 20}
      })
      setTimeout(() => {
        this.isLoading = false
        this.expertList = data.data.list || []
        if(this.expertList.length == 0) {
          this.isNomore = true
        }else {
          this.isNomore = false
        }
        this._nextHeight()
      },300)

      
     
    },
  }
} 
</script>
<style lang="scss" scoped>
.expert {
  background-color: #F6F6F6;
   &:after {
        content: ' ';
        height: 0;
        line-height: 0;
        display: block;
        visibility: hidden;
        clear: both;
    }
  &-left {
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 320px;
    .box {
      position: relative;
      line-height: 260px;
      height: 260px;
      background-color: #15598F;
      span {
        line-height: 1;
        display: block;
        position: absolute;
        bottom: 25px;
        right: 25px;
      }
      img {
        width: 180px;
        height: 180px;
      }
    }
      ul {
        .active {
          color: #333; 
          font-weight: bold;
          background-color: #F6F6F6;
          .icon {
            opacity: 1;
          }
        }
        
        li {
          cursor: pointer;
          padding: 20px 25px;
         
          &:hover {
            background-color: #F6F6F6;
            color: #333;
            font-weight: bold;
            i {
              opacity: 1;
            }
          }
          i {
            transition: all .3s;
            opacity: 0;
            width: 11px;
            height: 15px;
            @include bgurl('../assets/img/icon_xz.png')
          }
        }
      }
  }
  &-right {
    max-width: 960px;
    min-width: 480px;
    min-height: 600px;
    float: left;
    margin-left: 320px;
    background-color: #F6F6F6;
    .loading {
      
    }
    .nomore {
      width: 800px;
      margin-top: 200px;
      
    }
    
  }
  // &-right {
  //   background-color: #eee;
  //   max-height: 100vh;
  //   overflow-y: scroll;
  //   float: right;
  //   width: calc( 100% - 360px ) ;
  // }
}
</style>

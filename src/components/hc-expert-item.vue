<template>
  <div class="hc-expert-item txt_c bg_white pdt20">
    <div  class="pointer"  @click="_goLink('ExpertDetail',{user_id:expert.user_id,alias:expert.alias})" >
      <img :src="expert.avatar" class="bdr50"  alt="">
      <div class="fz18 hover_cblue mgt7" >{{expert.nickname}}</div>
    </div>
    <div class="fz14 c_light mgt18">{{expert.slogan}}</div>
    <div class="fz14 c_light mgt8">命中<span class="fz30 c_red">{{parseInt(expert.hit_rate*100)}}%</span></div>
    <div class="line mgt11">
      <span class="btn1 c_red fz14">{{expert.max_win}}连红</span>
      <span class="btn2 c_blue fz14 mgl3">{{expert.best_win}}</span>
    </div>
    <div class="plan fz14 c_blue mgt20 bdt_gray pdt15">{{expert.thread_count}}个方案数  ></div>
  </div>
</template>
<script>
export default {
  name: 'HcExpertItem',
  props: {
    expert: Object
  },
  data() {
    return {

    }
  },

  methods: {

  }
}


</script>
<style lang="scss" scoped>
  .hc-expert-item {
    box-shadow: 2px 2px 8px rgba(236,236,236,0.8);
    padding: 0 5px;
    width: 210px;
    height: 280px;
    img {
      width: 68px;
      height: 68px;
    }
    .line {
      .btn1 {
        padding: 2px 5px;
        border: 1px solid #FF676A;
        border-radius: 13px;
      }
      .btn2 {
        padding: 2px 5px;
        border: 1px solid #269EFF;
        border-radius: 13px;
      }
    }
    
  }
</style>
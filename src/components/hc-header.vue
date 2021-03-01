<template>
  <div class="header">
    <img class="logo" src="@img/logo.png" alt="">
    <ul class="header-nav inb c_gray">
      <li>首页</li>
      <li>直播</li>
      <li>分类</li>
      <li>赛程</li>
      <li class="c_blue">红彩</li>
    </ul>
  </div>
</template>
<script>
// import {  }
export default {
  name: 'HcHeader',
  data() {
    return {

    }
  }
}
</script>
<style lang="scss" scoped>
.header {
  height: 68px;
  line-height: 68px;
  .logo {
    width: 100px;
    height: 30px;
    vertical-align: middle;
  }
  ul {
    width: 500px;
    li {
      text-align: center;
      width: 20%;
      display: inline-block;
    }
  }
}
</style>
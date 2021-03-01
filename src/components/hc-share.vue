<template>
  <div class="social-share">
    <slot></slot>
  </div>
</template>
<script>
import "social-share.js/dist/js/social-share.min.js";
import "social-share.js/dist/css/share.min.css";
export default {
  name: "HcShare",
  props: {
    title: String
  },
  data() {
    return {};
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      var $config = {
        initialized: true,
        url: location.href,
        sites: ['weibo','qzone'],
        title: this.title+'//雷霆红彩',
        // description: "123",
        wechatQrcodeTitle: "微信扫一扫：分享1", // 微信二维码提示文字
        wechatQrcodeHelper:
          "<p>微信里点，扫一下</p><p>二维码便可将本文分享至朋友圈。</p>",
      };
      socialShare(".social-share", $config);
    },
  },
};
</script>
<style lang="scss" scoped>
</style>
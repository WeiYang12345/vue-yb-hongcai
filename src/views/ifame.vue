<template>
  <div>
    
    <iframe
      frameborder="0"
      id="rightifra"
      name="rightifra"
      width="100%"
       src="http://localhost:8081"
    ></iframe>
    <div>232</div>
  </div>
</template>
<script>
export default {
  mounted() {},
  methods: {
    // setIframeHeight() {
    //   let  iframe =    document.getElementById('external-frame')

    //   if (iframe) {

    //     var iframeWin = iframe.contentWindow || iframe.contentDocument.parentWindow;
    //       console.log(iframeWin.document)
    //     if (iframeWin.document.body) {

    //       setTimeout(() => {
    //         iframe.height =
    //           iframeWin.document.documentElement.scrollHeight ||
    //           iframeWin.document.body.scrollHeight;
    //       }, 1000);
    //     }
    //   }
    // },
  },
};
</script>
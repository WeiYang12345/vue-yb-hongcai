export default {
  install(Vue) {
    Vue.mixin({
      methods: {
        /**
         *   url 路由名称 obj: 参数
         */
        _goLink(url, obj) {
          this.$router.push({
            name: url,
            query: obj
          })
        },
        _jsonp(url, callback) {
          let scriptTag = document.createElement('script')
          let src = url + '?' + 'callback=' + callback
          scriptTag.src = src
          document.querySelector('head').appendChild(scriptTag)
        },
        _nextHeight() {

          this.$nextTick(() => {
            try {
              var parentIframe = parent.document.getElementById("rightifra");
              if(!parentIframe) return
              if (window.attachEvent) {
                  parentIframe.height = document.documentElement.scrollHeight;

                
                return;
              } else {
                console.log(document.body.scrollHeight)
                setTimeout(() => {
                  parentIframe.height = document.body.scrollHeight;
                }, 500);
                return;
              }
            } catch (e) {
              throw new Error("setParentIframeHeight Error");
            }
          });
        },
        shareToSinaWB(pramasObj) {
          let url = encodeURIComponent(pramasObj.url)  //参数url设置分享的内容链接|默认当前页location，可选参数
          let path = 'http://v.t.sina.com.cn/share/share.php?url=' + url //真实的appkey，必选参数   
          pramasObj['title'] && (path += '&title=' + encodeURIComponent(pramasObj['title']))  //参数title设置分享的标题|默认当前页标题，可选参数
          pramasObj['source'] && (path += '&source=' + encodeURIComponent(pramasObj['source']))
          pramasObj['sourceUrl'] && (path += '&sourceUrl=' + encodeURIComponent(pramasObj['sourceUrl']))
          pramasObj['pic'] && (path += '&pic=' + encodeURIComponent(pramasObj['pic'])) // //参数pic设置图片链接|默认为空，可选参数
          window.open(path, '_blank');
        },
        shareToQzone(pramasObj) {
          let url = encodeURIComponent(pramasObj.url)     //参数url设置分享的内容链接|默认当前页location
          let path = 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=' + url
          pramasObj['desc'] && (path += '&desc=' + encodeURIComponent(pramasObj['desc']))   //参数desc设置分享的描述，可选参数
          pramasObj['summary'] && (path += '&summary=' + encodeURIComponent(pramasObj['summary'])) //参数summary设置分享摘要，可选参数
          pramasObj['title'] && (path += '&title=' + encodeURIComponent(pramasObj['title']))   //参数title设置分享标题，可选参数
          pramasObj['site'] && (path += '&site=' + encodeURIComponent(pramasObj['site']))    //参数site设置分享来源，可选参数
          pramasObj['pics'] && (path += '&pics=' + encodeURIComponent(pramasObj['pics']))     //参数pics设置分享图片的路径，多张图片以＂|＂隔开，可选参数
          pramasObj['showcount'] && (path += '&showcount=' + pramasObj['showcount'])  //参数showcount是否显示分享总数,显示：'1'，不显示：'0'，默认不显示
          window.open(path, '_blank');
        },
      }
    })
  }
}
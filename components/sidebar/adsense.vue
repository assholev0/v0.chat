<template>
  <div v-if="show">
    <!-- 自适应 -->
    <ins class="adsbygoogle"
         style="display:block"
         data-ad-client="ca-pub-5059418763237956"
         data-ad-slot="9518721243"
         data-ad-format="auto"
         data-full-width-responsive="true"
    />
  </div>
</template>

<script>
export default {
  name: 'Adsense',
  computed: {
    show() {
      return typeof window !== 'undefined' && window.innerWidth > 330;
    }
  },
  mounted() {
    if (window.adsbygoogle) {
      this.init();
    } else {
      const s = document.createElement('script');
      s.type = 'text/javascript';
      s.src = '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
      s.async = 'async';
      s.onload = this.init;
      document.getElementsByTagName('head')[0].appendChild(s);
    }
  },
  methods: {
    init() {
      if (this.show) {
        // eslint-disable-next-line no-undef
        (adsbygoogle = window.adsbygoogle || []).push({});
      }
      // eslint-disable-next-line no-undef
      (adsbygoogle = window.adsbygoogle || []).push({
        google_ad_client: 'ca-pub-5059418763237956',
        enable_page_level_ads: true
      });
    }
  }
};
</script>

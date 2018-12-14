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
    if (this.show) {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    }
  }
};
</script>

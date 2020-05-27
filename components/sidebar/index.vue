<template>
  <aside id="sidebar">
    <div class="table">
      <div class="table-cell">
        <div class="logo">
          <nuxt-link to="/">
            <img src="/avatar.png" class="avatar">
          </nuxt-link>
          <h1 v-show="false">
            <nuxt-link to="/">
              {{ info.title }}
            </nuxt-link>
          </h1>
          <h2>{{ info.description }}</h2>
        </div>

        <Stat :info="info" />

        <nav>
          <small>本订阅号已写下 {{ formatNumber(info.wordcount) }} 字。</small>
        </nav>
        <no-ssr>
          <Adsense />
          <!-- <Aplayer /> -->
        </no-ssr>
      </div>
    </div>
  </aside>
</template>


<script>
import Stat from './stat.vue';
import Adsense from './adsense.vue';
// import Aplayer from './player';

export default {
  name: 'Sidebar',
  components: {
    // Aplayer,
    Adsense,
    Stat
  },
  props: {
    info: {
      type: Object,
      required: true
    }
  },
  methods: {
    formatNumber(n) {
      if (n < 10000) {
        return n;
      }
      return `${Math.round((n * 100) / 10000) / 100}万`;
    }
  }
};
</script>

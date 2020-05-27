<template>
  <transition-group name="fade" mode="out-in" tag="article">
    <article v-for="post in posts" :key="post.slug" class="post">
      <h1>
        <nuxt-link :to="`/p/${post.slug}`">
          {{ post.title }}
        </nuxt-link>
      </h1>
      <div class="meta">
        <span>字数：{{ formatNumber(post.wordcount) }}字</span> |
        <span class="date" :data-date="post.date">发表于：{{ formatDate(post.date) }}</span>
      </div>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div class="content" v-html="post.excrept" />
    </article>
  </transition-group>
</template>

<script>
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';

dayjs.locale('zh-cn'); // 全局使用简体中文

export default {
  props: {
    posts: {
      required: true,
      type: Array
    }
  },
  methods: {
    formatDate(date) {
      return dayjs(date).format('YYYY年MM月DD日');
    },
    formatNumber(n) {
      if (n < 1000) {
        return n;
      }
      return `${Math.round((n * 10) / 1000) / 10}千`;
    }
  }
};
</script>

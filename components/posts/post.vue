<template>
  <transition name="fade" mode="out-in">
    <article class="post">
      <h1>
        {{ post.title }}
      </h1>
      <div class="meta">
        <span>字数：{{ formatNumber(post.wordcount) }}字</span> |
        <span class="date" :data-date="post.date">发表于：{{ formatDate(post.date) }}</span>
      </div>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div class="content" v-html="post.content" />
      <div class="qr">
        <p>扫码关注不迷路</p>
        <img src="/qr.png">
      </div>

      <div>
        <ul class="post-copyright">
          <li>
            <strong>本文作者： </strong>Willin Wang
          </li>
          <li>
            <strong>本文链接：</strong>
            <a :href="`https://v0.chat/p/${post.slug}`" :title="post.title">https://v0.chat/p/{{ post.slug }}</a>
          </li>
          <li>
            <strong>版权声明： </strong>本博客所有文章除特别声明外，均采用
            <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh" rel="external nofollow" target="_blank">CC BY-NC-SA 4.0</a>
            许可协议。转载请注明出处！
          </li>
        </ul>
      </div>
    </article>
  </transition>
</template>

<script>
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';

dayjs.locale('zh-cn'); // 全局使用简体中文

export default {
  props: {
    post: {
      required: true,
      type: Object
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

<style lang="stylus">
.qr
  color: #f60
  text-shadow: 1px 1px 0 rgba(0,0,0,0.2)
  text-align: center
.post-copyright
    margin: 2em 0 0
    padding: 0.5em 1em
    border-left: 3px solid #ff1700
    background-color: #f9f9f9
    list-style: none
</style>

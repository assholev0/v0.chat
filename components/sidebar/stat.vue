<template>
  <nav class="site-state">
    <div class="site-state-item site-state-posts">
      <nuxt-link to="/archives/">
        <span class="site-state-item-count">
          {{ info.posts }}
        </span>
        <span class="site-state-item-name">日志</span>
      </nuxt-link>
    </div>
    <div class="site-state-item site-state-categories">
      <nuxt-link to="/categories/">
        <span class="site-state-item-count">
          {{ info.categories }}
        </span>
        <span class="site-state-item-name">分类</span>
      </nuxt-link>
    </div>
    <div class="site-state-item site-state-tags">
      <nuxt-link to="/tags/">
        <span class="site-state-item-count">
          {{ info.tags }}
        </span>
        <span class="site-state-item-name">标签</span>
      </nuxt-link>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      required: true
    }
  }
};
</script>


<style lang="stylus">
#sidebar
  .site-state
    margin: 1rem 0

  .site-state-item
    display: inline-block
    padding: 0 15px
    border-left: 1px solid #eee

  .site-state-item:first-child
    border-left: none

  .site-state-item a
    border-bottom: none

  .site-state-item-count
    display: block
    text-align: center
    color: inherit
    font-weight: 600

  .site-state-item-name
    font-size: 0.8rem
    color: #999
</style>

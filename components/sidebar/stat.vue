<template>
  <nav class="site-state">
    <div class="site-state-item site-state-posts">
      <a href="/archives/">
        <span class="site-state-item-count">
          {{ info.posts }}
        </span>
        <span class="site-state-item-name">日志</span>
      </a>
    </div>
    <div class="site-state-item site-state-categories">
      <a href="/categories/">
        <span class="site-state-item-count">
          {{ info.categories }}
        </span>
        <span class="site-state-item-name">分类</span>
      </a>
    </div>
    <div class="site-state-item site-state-tags">
      <a href="/tags/">
        <span class="site-state-item-count">
          {{ info.tags }}
        </span>
        <span class="site-state-item-name">标签</span>
      </a>
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

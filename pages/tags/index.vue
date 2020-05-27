<template>
  <div>
    <Sidebar :info="info" />
    <main id="main">
      <Tags :tags="tags" />
      <Copyright />
    </main>
  </div>
</template>

<script>
import Sidebar from '~/components/sidebar/index.vue';
import Tags from '~/components/posts/tags.vue';
import Copyright from '~/components/sidebar/copyright.vue';

export default {
  components: {
    Copyright,
    Sidebar,
    Tags
  },
  async asyncData({ app }) {
    const info = await app.$np.info();
    const { tags } = await app.$np.tags();

    return {
      info,
      tags
    };
  },
  head() {
    return {
      title: '标签 - 初瘦'
    };
  },
  layout: 'default'
};
</script>

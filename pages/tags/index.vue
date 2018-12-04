<template>
  <div>
    <Sidebar :info="info" />
    <main id="main">
      <Tags :tags="tags" />
    </main>
  </div>
</template>

<script>
import Sidebar from '~/components/sidebar/index';
import Tags from '~/components/posts/tags';

export default {
  components: {
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
  layout: 'default'
};
</script>

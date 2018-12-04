<template>
  <div>
    <Sidebar :info="info" />
    <main id="main">
      <Tags :tags="tags" />
      <Posts :posts="posts" />
    </main>
  </div>
</template>

<script>
import Sidebar from '~/components/sidebar/index';
import Tags from '~/components/posts/tags';
import Posts from '~/components/posts/posts';

export default {
  components: {
    Sidebar,
    Posts,
    Tags
  },
  async asyncData({ app, params }) {
    const { name } = params;
    const info = await app.$np.info();
    const posts = await app.$np.tags(encodeURI(name));
    return {
      info,
      ...posts
    };
  },
  layout: 'default'
};
</script>

<template>
  <div>
    <Sidebar :info="info" />
    <main id="main">
      <Posts :posts="posts" />
    </main>
  </div>
</template>

<script>
import Sidebar from '~/components/sidebar/index';
import Posts from '~/components/posts/posts';

export default {
  components: {
    Sidebar,
    Posts
  },
  async asyncData({ app }) {
    const info = await app.$np.info();
    const posts = await app.$np.posts(1);
    return {
      info,
      ...posts
    };
  },
  layout: 'default'
};
</script>

<template>
  <div>
    <Sidebar :info="info" />
    <main id="main">
      <Posts :posts="posts" />
      <Copyright />
    </main>
  </div>
</template>

<script>
import Sidebar from '~/components/sidebar/index';
import Posts from '~/components/posts/posts';
import Copyright from '~/components/sidebar/copyright';

export default {
  components: {
    Copyright,
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

<template>
  <div>
    <Sidebar :info="info" />
    <main id="main">
      <PostItem :post.sync="post" />
      <Copyright />
    </main>
  </div>
</template>

<script>
import Sidebar from '~/components/sidebar/index.vue';
import PostItem from '~/components/posts/post.vue';
import Copyright from '~/components/sidebar/copyright.vue';

export default {
  components: {
    Copyright,
    Sidebar,
    PostItem
  },
  async asyncData({ app, params }) {
    const { slug } = params;
    const info = await app.$np.info();
    const { post } = await app.$np.post(slug);
    return {
      info,
      post
    };
  },

  head() {
    return {
      title: `${this.post.title} - 初瘦`
    };
  },
  layout: 'default'
};
</script>

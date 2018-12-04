<template>
  <div>
    <Sidebar :info="info" />
    <main id="main">
      <PostItem :post="post" />
    </main>
  </div>
</template>

<script>
import Sidebar from '~/components/sidebar/index';
import PostItem from '~/components/posts/post';

export default {
  components: {
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
  layout: 'default'
};
</script>

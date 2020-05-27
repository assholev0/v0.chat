<template>
  <div>
    <Sidebar :info="info" />
    <main id="main">
      <Tags :tags="tags" />
      <Posts :posts="posts" />
      <Copyright />
    </main>
  </div>
</template>

<script>
import Sidebar from '~/components/sidebar/index.vue';
import Tags from '~/components/posts/tags.vue';
import Posts from '~/components/posts/posts.vue';
import Copyright from '~/components/sidebar/copyright.vue';

export default {
  components: {
    Copyright,
    Sidebar,
    Posts,
    Tags
  },
  async asyncData({ app, params }) {
    const { name } = params;
    const info = await app.$np.info();
    const posts = await app.$np.tags(encodeURI(name));
    return {
      name,
      info,
      ...posts
    };
  },
  head() {
    return {
      title: `${this.name} - 标签 - 初瘦`
    };
  },
  layout: 'default'
};
</script>

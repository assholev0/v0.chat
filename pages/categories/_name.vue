<template>
  <div>
    <Sidebar :info="info" />
    <main id="main">
      <Categories :categories="categories" />
      <Posts :posts="posts" />
      <Copyright />
    </main>
  </div>
</template>

<script>
import Sidebar from '~/components/sidebar/index.vue';
import Categories from '~/components/posts/categories.vue';
import Posts from '~/components/posts/posts.vue';
import Copyright from '~/components/sidebar/copyright.vue';

export default {
  components: {
    Copyright,
    Sidebar,
    Posts,
    Categories
  },
  async asyncData({ app, params }) {
    const { name } = params;
    const info = await app.$np.info();
    const posts = await app.$np.categories(encodeURI(name));
    return {
      name,
      info,
      ...posts
    };
  },
  head() {
    return {
      title: `${this.name} - 分类 - 初瘦`
    };
  },
  layout: 'default'
};
</script>

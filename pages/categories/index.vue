<template>
  <div>
    <Sidebar :info="info" />
    <main id="main">
      <Categories :categories="categories" />
      <Copyright />
    </main>
  </div>
</template>

<script>
import Sidebar from '~/components/sidebar/index.vue';
import Categories from '~/components/posts/categories.vue';
import Copyright from '~/components/sidebar/copyright.vue';

export default {
  components: {
    Copyright,
    Sidebar,
    Categories
  },
  async asyncData({ app }) {
    const info = await app.$np.info();
    const { categories } = await app.$np.categories();

    return {
      info,
      categories
    };
  },
  head() {
    return {
      title: '分类 - 初瘦'
    };
  },
  layout: 'default'
};
</script>

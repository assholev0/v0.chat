<template>
  <div>
    Index Page
  </div>
</template>

<script>
export default {
  async asyncData({ app }) {
    return {
      posts: await app.$np('/').posts()
    };
  },
  layout: 'default'
};
</script>

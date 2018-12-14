<template>
  <article>
    <ul>
      <li v-for="tag in tags" :key="tag.name" class="tag">
        <nuxt-link :to="`/tags/${tag.name}`">{{ tag.name }}</nuxt-link> ({{ tag.count }})
      </li>
    </ul>
  </article>
</template>

<script>
export default {
  props: {
    tags: {
      required: true,
      type: Array
    }
  }
};
</script>

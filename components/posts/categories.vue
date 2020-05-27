<template>
  <article>
    <ul>
      <li v-for="tag in categories" :key="tag.name" class="tag">
        <nuxt-link :to="`/categories/${tag.name}`">
          {{ tag.name }}
        </nuxt-link> ({{ tag.count }})
      </li>
    </ul>
  </article>
</template>

<script>
export default {
  props: {
    categories: {
      required: true,
      type: Array
    }
  }
};
</script>

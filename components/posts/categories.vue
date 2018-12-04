<template>
  <ul>
    <li v-for="tag in categories" :key="tag.name" class="tag">
      <a :href="`/categories/${tag.name}`">{{ tag.name }}</a> ({{ tag.count }})
    </li>
  </ul>
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

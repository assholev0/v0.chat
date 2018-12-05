<template>
  <article>
    <ul>
      <li v-for="tag in tags" :key="tag.name" class="tag">
        <a :href="`/tags/${tag.name}`">{{ tag.name }}</a> ({{ tag.count }})
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

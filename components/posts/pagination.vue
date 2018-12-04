<template>
  <nav>
    test
  </nav>
</template>


<script>
export default {
  props: {
    pages: {
      required: true,
      type: Number
    },
    page: {
      type: Number,
      default: 1
    }
  }
};
</script>

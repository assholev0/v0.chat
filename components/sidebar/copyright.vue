<template>
  <footer>
    <p>
      Copyright 2018~{{ year }} &copy;
      <a href="https://willin.wang" target="_blank">Willin Wang</a>
    </p>
    <p>
      Github:
      <a href="https://github.com/willin" target="_blank">willin</a> |
      <a href="https://github.com/assholev0" target="_blank">assholev0</a>
    </p>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>

<style lang="stylus">
footer
  text-align: right
  font-size: 0.8em
  p
    margin: 0
    line-height: 1.5em
</style>

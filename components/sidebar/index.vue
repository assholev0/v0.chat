<template>
  <aside id="sidebar">
    <div class="table">
      <div class="table-cell">
        <div class="logo">
          <a href="/">
            <img src="/avatar.png" class="avatar">
          </a>
          <h1 v-show="false">
            <a href="/">
              {{ info.title }}
            </a>
          </h1>
          <h2>{{ info.description }}</h2>
        </div>

        <Stat :info="info" />
        <!-- <Aplayer /> -->
      </div>
    </div>
  </aside>
</template>


<script>
import Stat from './stat';
// import Aplayer from './player';

export default {
  name: 'Sidebar',
  components: {
    // Aplayer,
    Stat
  },
  props: {
    info: {
      type: Object,
      required: true
    }
  }
};
</script>

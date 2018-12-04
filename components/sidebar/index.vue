<template>
  <aside id="sidebar">
    <div class="table">
      <div class="table-cell">
        <div class="logo">
          <router-link to="/">
            <img src="/avatar.png" class="avatar">
          </router-link>
          <h1 v-show="false">
            <router-link to="/">
              {{ info.title }}
            </router-link>
          </h1>
          <h2>{{ info.description }}</h2>
        </div>

        <Stat :info="info" />
        <Aplayer />
      </div>
    </div>
  </aside>
</template>


<script>
import Stat from './stat';
import Aplayer from './player';

export default {
  name: 'Sidebar',
  components: {
    Aplayer,
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

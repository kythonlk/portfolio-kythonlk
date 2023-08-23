<template>
  <Menu />
  <div class="home">
    <Sidebar />
    <div class="main-content">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Menu from '@/components/Menu.vue';
import Sidebar from '@/components/Sidebar.vue';

export default defineComponent({
  name: 'Home',
  components: {
    Menu,
    Sidebar,
  },
});
</script>

<style>
.home {
  display: flex;
}

.main-content {
  flex: 1;
  padding: 20px;
}
</style>

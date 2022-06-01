<template>
  <div id="app"  class="bg-sky-500">
    <default/>
    <users-management class="mx-7"/>
  </div>
</template>

<script>
import Default from './layouts/Default.vue';
import UsersManagement from './views/UsersManagement.vue';
export default {
  components: { Default, UsersManagement },
  name: "App",
};
</script>

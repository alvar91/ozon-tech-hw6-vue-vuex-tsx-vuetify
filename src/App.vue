<template>
  <v-app>
    <v-main class="grey lighten-3">
      <notifications group="foo" />
      <router-view :key="$route.path" />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",

  data: () => ({}),
});
</script>

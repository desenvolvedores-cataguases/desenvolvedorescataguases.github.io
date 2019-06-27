<template>
  <v-app>
    <v-toolbar color="white" app flat>
      <v-toolbar-title class="display-1 text-uppercase">
        <span>GDC</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat to="/">
        <span class="mr-2">Home</span>
      </v-btn>
      <v-btn flat to="about">
        <span class="mr-2">Quem somos ?</span>
      </v-btn>
      <v-btn flat to="how">
        <span class="mr-2">Como participar ?</span>
      </v-btn>
        <v-btn flat to="supporters">
        <span class="mr-2">Apoiadores</span>
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-container>
        <v-layout>
          <router-view></router-view>
        </v-layout>
      </v-container>
    </v-content>
    <AppFooter></AppFooter>
  </v-app>
</template>

<script>
import AppFooter from '@/components/AppFooter.vue'

export default {
  name: "App",
  components: {AppFooter},
  data() {
    return {
      //
    };
  }
};
</script>

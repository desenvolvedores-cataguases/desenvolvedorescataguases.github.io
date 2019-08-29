<template>
  <v-footer color="grey darken-4 white--text">
    <v-layout pl-5 pr-5 align-center row fill-height>
      <v-flex md8>
        <a
          class="icone"
          href="https://github.com/gdgcataguases"
          title="Clique para ver nosso GitHub"
        >
          <v-icon color="white">fab fa-github-alt</v-icon>
        </a>
        <a
          class="icone"
          href="https://www.meetup.com/pt-BR/GDG-Cataguases/"
          title="Clique para ver nosso Meetup"
        >
          <v-icon color="white">fab fa-meetup</v-icon>
        </a>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class AppFooter extends Vue {}
</script>

<style scoped>
.icone {
  padding-right: 10px;
}

a {
  text-decoration: none;
}
</style>
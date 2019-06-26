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
      <v-btn flat to="events">
        <span class="mr-2">Eventos</span>
      </v-btn>
      <v-btn flat to="how">
        <span class="mr-2">Como participar ?</span>
      </v-btn>
      <v-btn flat to="about">
        <span class="mr-2">Quem somos ?</span>
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-container>
        <v-layout>
          <router-view></router-view>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer>
      <v-container>
        <v-layout>
          <a
            href="https://br.freepik.com/fotos-vetores-gratis/negocio"
          >Negócio vetor criado por rawpixel.com - br.freepik.com</a>
        </v-layout>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      //
    };
  }
};
</script>

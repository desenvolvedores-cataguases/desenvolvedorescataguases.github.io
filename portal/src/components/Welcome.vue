<template>
  <v-card flat>
    <v-img class="black--text text-md-center" src="./images/group.jpg" height="560">
      <v-container>
        <v-layout align-center justify-center column fill-height>
          <v-flex mb-4>
            <span
              class="display-1 font-weight-thin"
            >Bem-vindo(a) ao grupo de desenvolvedores em Cataguases</span>
          </v-flex>
          <v-flex>
            <span class="subheading font-weight-light">Participe, aprenda e compartilhe conhecimento!</span>
          </v-flex>
        </v-layout>
      </v-container>
    </v-img>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class Home extends Vue {}
</script>

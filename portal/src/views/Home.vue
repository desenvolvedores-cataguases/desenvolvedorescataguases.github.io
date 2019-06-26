<template>
  <v-flex md12>
    <Welcome></Welcome>
  </v-flex>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Welcome from "@/components/Welcome.vue";

@Component({
  components: { Welcome }
})
export default class Home extends Vue {}
</script>

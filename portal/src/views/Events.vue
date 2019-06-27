<template>
  <v-container>
    <v-layout align-center justify-center column fill-height>
      <span class="display-1 font-weight-thin">Eventos</span>
      <span class="subheading font-weight-light ma-4">Nosso grupo está utilizando o Meetup para comunicar novos eventos.</span>
      <span class="subheading font-weight-light">
        <LinkMeetup>Clique aqui</LinkMeetup> e junte-se ao grupo para ficar sabendo dos próximos eventos.
      </span>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import LinkMeetup from "@/components/LinkMeetup.vue";

@Component({  components: { LinkMeetup }})
export default class Events extends Vue {}
</script>

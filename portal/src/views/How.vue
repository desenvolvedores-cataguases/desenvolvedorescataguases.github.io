<template>
  <v-container>
    <v-layout align-center justify-center column fill-height>
      <span class="display-1 font-weight-thin">Como participar ?</span>
      <span class="subheading font-weight-light ma-4">
        Para participar é fácil basta se inscrever em nosso <LinkMeetup>Meetup</LinkMeetup> 
        e comparecer aos nossos eventos.  
      </span>
      <LinkMeetup> 
        <img alt="logo meetup" src="https://secure.meetup.com/s/img/0/logo/svg/logo--script.svg" style="height: 50px">
      </LinkMeetup>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import LinkMeetup from "@/components/LinkMeetup.vue";


@Component({  components: { LinkMeetup }})
export default class How extends Vue {}
</script>
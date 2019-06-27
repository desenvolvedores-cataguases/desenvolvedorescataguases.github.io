<template>
  <a href="https://www.meetup.com/pt-BR/Grupo-de-Desenvolvedores-em-Cataguases/" target="_blank">
    <slot></slot>
  </a>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class LinkMeetup extends Vue {}
</script>
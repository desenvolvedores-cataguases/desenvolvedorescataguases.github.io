<template>
  <div :id="name" class="subject-matter">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({})
export default class LinkMeetup extends Vue {
  @Prop({ type: String, required: true })
  name!: String;
}
</script>

<style scoped>
.subject-matter {
  padding: 10% 0;
  background: #ffffff !important;
  min-width: 100%;
}
</style>

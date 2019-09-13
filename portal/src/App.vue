<template>
  <v-app>
    <v-toolbar color="white" app flat>
      <v-img src="./images/logo.png" max-width="250"></v-img>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat to="#Home">
          <span class="mr-2">Home</span>
        </v-btn>
        <v-btn flat to="#About">
          <span class="mr-2">Quem somos ?</span>
        </v-btn>
        <v-btn flat to="#How">
          <span class="mr-2">Como participar ?</span>
        </v-btn>
        <v-btn flat to="#Supporters">
          <span class="mr-2">Apoiadores</span>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-container>
        <v-layout align-center justify-center column fill-height>
          <SubjectMatter name="Home">
            <Home></Home>
          </SubjectMatter>
          <SubjectMatter name="About">
            <About></About>
          </SubjectMatter>
          <SubjectMatter name="How">
            <How></How>
          </SubjectMatter>
          <SubjectMatter name="Supporters">
            <Supporters></Supporters>
          </SubjectMatter>
        </v-layout>
      </v-container>
    </v-content>
    <AppFooter></AppFooter>
  </v-app>
</template>

<script>
import AppFooter from "@/components/AppFooter.vue";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import How from "@/views/How.vue";
import Supporters from "@/views/Supporters";
import SubjectMatter from "@/components/SubjectMatter.vue";

export default {
  name: "App",
  components: { SubjectMatter, Home, About, How, Supporters, AppFooter }
};
</script>

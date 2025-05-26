<script setup></script>

<template>
  <v-app>
    <!--App barra superior-->
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-toolbar-title>Ramon 602</v-toolbar-title>
    </v-app-bar>

    <!--Contenido principal-->
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<style scoped></style>

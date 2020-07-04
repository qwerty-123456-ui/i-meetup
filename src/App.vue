<template>
  <v-app>
    <v-toolbar class="primary">
      <v-toolbar-side-icon @click="sideNav=!sideNav"  class="hidden-sm-and-up "><span class="mdi mdi-format-align-justify"></span></v-toolbar-side-icon>
      <span class="space"> </span>
      <v-toolbar-title>IMeetup</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <span class="mdi mdi-48px mdi-account-multiple"></span>
        <span class="space"> </span>
        <v-btn flat class="primary">View Meetups</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer v-model="sideNav">
      <v-list>
        <v-list-tile>
          <v-list-tile-action>
            <v-toolbar-side-icon @click="sideNav=!sideNav">
            <span class="mdi mdi-24px mdi-account-multiple"></span>
            </v-toolbar-side-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            View Meetups
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <main>

    </main>
    
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',

  components: {
    HelloWorld
  },

  data: () => ({
    sideNav: false
  }),
};
</script>

<style scoped>
.space{
  width: 20px;
}
</style>
<template>
  <v-app>
    <v-toolbar class="primary">
      <v-toolbar-side-icon @click="sideNav=!sideNav"  class="hidden-sm-and-up"><span class="mdi mdi-format-align-justify"></span></v-toolbar-side-icon>
      <span class="space"></span>
      <v-toolbar-title>IMeetup</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only" >
        <v-btn flat class="primary">
          <span class="mdi mdi-48px mdi-account-multiple"></span>
          <span class="space"> </span>
          VIEW MEETUPS
        </v-btn>
        <v-btn flat class="primary">
          <span class="mdi mdi-48px mdi-map-marker"></span>
          <span class="space"> </span>
          ORGANIZE MEETUPS
        </v-btn>
        <v-btn flat class="primary">
          <span class="mdi mdi-48px mdi-account"></span>
          <span class="space"> </span>
          PROFILE
        </v-btn>
        <v-btn flat class="primary">
          <span class="mdi mdi-48px mdi-account-circle"></span>
          <span class="space"> </span>
          SIGN UP
        </v-btn>
        <v-btn flat class="primary">
          <span class="mdi mdi-48px mdi-face"></span>
          <span class="space"> </span>
          SIGN IN
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer v-model="sideNav" >
      <v-list>
        <v-list-tile>
          <v-list-tile-action>
            <span class="mdi mdi-24px mdi-account-multiple"></span>
          </v-list-tile-action>
          <v-list-tile-content>
            VIEW MEETUPS
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-list>
        <v-list-tile>
          <v-list-tile-action>
            <span class="mdi mdi-24px mdi-map-marker"></span>
          </v-list-tile-action>
          <v-list-tile-content>
            ORGANIZE MEETUPS
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-list>
        <v-list-tile>
          <v-list-tile-action>
            <span class="mdi mdi-24px mdi-account"></span>
          </v-list-tile-action>
          <v-list-tile-content>
            PROFILE
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-list>
        <v-list-tile>
          <v-list-tile-action>
            <span class="mdi mdi-24px mdi-account-circle"></span>
          </v-list-tile-action>
          <v-list-tile-content>
            SIGN UP
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-list>
        <v-list-tile>
          <v-list-tile-action>
            <span class="mdi mdi-24px mdi-face"></span>
          </v-list-tile-action>
          <v-list-tile-content>
            SIGN IN
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <main>

    </main>
    
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
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
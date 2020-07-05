<template>
 <div id="app">
    <v-app>
      <v-toolbar class="primary">
        <v-toolbar-side-icon @click="sideNav=!sideNav"  class="hidden-sm-and-up"><span class="mdi mdi-format-align-justify"></span></v-toolbar-side-icon>
        <span class="space"></span>
        <v-toolbar-title>
          <router-link to="/" tag="span" style="cursor: pointer">IMeetup</router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-xs-only" >
          <v-btn flat class="primary">
            <span class="mdi mdi-48px mdi-account-multiple"></span>
            <span class="space"> </span>
              <router-link to="/meetups" tag="span" style="cursor: pointer">VIEW MEETUPS</router-link>
          </v-btn>
          <v-btn flat class="primary">
            <span class="mdi mdi-48px mdi-map-marker"></span>
            <span class="space"> </span>
            <router-link to="/meetup/new" tag="span" style="cursor: pointer">ORGANIZE MEETUPS</router-link>
          </v-btn>
          <v-btn flat class="primary">
            <span class="mdi mdi-48px mdi-account"></span>
            <span class="space"> </span>
            <router-link to="/profile" tag="span" style="cursor: pointer">PROFILE</router-link>
          </v-btn>
          <v-btn flat class="primary">
            <span class="mdi mdi-48px mdi-account-circle"></span>
            <span class="space"> </span>
            <router-link to="/signup" tag="span" style="cursor: pointer">SIGN UP</router-link>
          </v-btn>
          <v-btn flat class="primary">
            <span class="mdi mdi-48px mdi-face"></span>
            <span class="space"> </span>
            <router-link to="/signin" tag="span" style="cursor: pointer">SIGN IN</router-link>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-navigation-drawer temporary v-model="sideNav" >
        <v-list>
          <v-list-tile style="cursor : pointer">
            <v-list-tile-action>
              <span class="mdi mdi-24px mdi-account-multiple"></span>
            </v-list-tile-action>
            <v-list-tile-content>
              <router-link to="/meetups" tag="span" style="cursor: pointer">VIEW MEETUPS</router-link>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
        <v-list>
          <v-list-tile>
            <v-list-tile-action>
              <span class="mdi mdi-24px mdi-map-marker"></span>
            </v-list-tile-action>
            <v-list-tile-content>
              <router-link to="/meetup/new" tag="span" style="cursor: pointer">ORGANIZE MEETUPS</router-link>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
        <v-list>
          <v-list-tile>
            <v-list-tile-action>
              <span class="mdi mdi-24px mdi-account"></span>
            </v-list-tile-action>
            <v-list-tile-content>
              <router-link to="/profile" tag="span" style="cursor: pointer">PROFILE</router-link>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
        <v-list>
          <v-list-tile>
            <v-list-tile-action>
              <span class="mdi mdi-24px mdi-account-circle"></span>
            </v-list-tile-action>
            <v-list-tile-content>
              <router-link to="/signup" tag="span" style="cursor: pointer">SIGN UP</router-link>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
        <v-list>
          <v-list-tile>
            <v-list-tile-action>
              <span class="mdi mdi-24px mdi-face"></span>
            </v-list-tile-action>
            <v-list-tile-content>
              <router-link to="/signin" tag="span" style="cursor: pointer">SIGN IN</router-link>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <main>
        <router-view/>
      </main>

    </v-app>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
  },
  data: () => ({
    sideNav: false
  })
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

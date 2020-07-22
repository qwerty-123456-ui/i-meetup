<template>
  <v-app>
    <v-card color="grey lighten-4" flat height="75px" tile>
      <v-toolbar extended extension-height="10" class="primary">
        <v-toolbar-side-icon @click.stop="sideNav= !sideNav" class="hidden-sm-and-up">
          <span class="mdi mdi-format-align-justify"></span>
        </v-toolbar-side-icon>
        <span class="space"></span>
        <v-toolbar-title>
          <router-link to="/" tag="span" style="cursor: pointer">IMeetup</router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items  class="hidden-xs-only">
          <v-btn  text v-for="item in menuItems" :key="item.title" :to="item.link" class="primary">
            <span :class="item.icon"></span>
            <span class="space"></span>
            <router-link :to="item.link" tag="span" style="cursor: pointer">{{ item.title }}</router-link>
          </v-btn>
          <v-btn  text class="primary" v-if="userIsAuthenticated" @click="onLogout">
            <span class="mdi mdi-exit-to-app"></span>
            <span class="space"></span>
            <!-- <router-link :to="item.link" tag="span" style="cursor: pointer"> -->
               Logout
              <!-- </router-link> -->
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </v-card>
    <v-navigation-drawer absolute bottom temporary v-model="sideNav">
      <v-list>
        <v-list-tile v-for="item in menuItems" :key="item.title" :to="item.link">
          <v-list-tile-action>
            <span :class="item.icon"></span>
          </v-list-tile-action>
          <v-list-tile-content>
            <router-link :to="item.link" tag="span" style="cursor: pointer">
              {{ item.title }}
              </router-link>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-if="userIsAuthenticated" @click="onLogout">
          <v-list-tile-action>
            <span class="mdi mdi-exit-to-app"></span>
          </v-list-tile-action>
          <v-list-tile-content>
            <!-- <router-link :to="item.link" tag="span" style="cursor: pointer"> -->
              Logout
              <!-- </router-link> -->
          </v-list-tile-content>
        </v-list-tile>
      </v-list>     
    </v-navigation-drawer>
    <main>
      <router-view />
    </main>
  </v-app>
</template>

<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="/__/firebase/7.16.0/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="/__/firebase/7.16.0/firebase-analytics.js"></script>

<!-- Initialize Firebase -->
<script src="/__/firebase/init.js"></script>
<script>
export default {
  name: "App",
  components: {},
  data: () => ({
    sideNav: false
  }),
  computed: { 
    menuItems() {
      let menuItems=[ 
            
        {icon:'mdi mdi-36px mdi-account', title:'Sign Up', link:'/signup'},
        {icon:'mdi mdi-36px mdi-face', title:'Sign In', link:'/signin'}
      ]
      if (this.userIsAuthenticated) {
        menuItems = [
          {icon:'mdi mdi-36px mdi-account-multiple', title:'View Meetups', link:'/meetups'},
          {icon:'mdi mdi-36px mdi-map-marker', title:'Organize Meetup', link:'/meetup/new'},
          {icon:'mdi mdi-36px mdi-account', title:'Profile', link:'/profile'}
        ]
    }
    return menuItems
    },
    userIsAuthenticated () {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined
    }
   },
   methods: {
     onLogout() {
       this.$store.dispatch('logout')
    }
   }
};
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

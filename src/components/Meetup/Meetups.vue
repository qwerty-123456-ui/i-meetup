<template>
  <v-container>
    <v-layout row wrap  v-for="meetup in meetups" :key="meetup.id" class="mb-3">
      <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
        <v-card class="info">
          <!-- <div class="d-flex flex-no-wrap justify-space-between"> -->
            <v-container fluid>
              <v-layout xs5 sm4 md3>
                <v-avatar class="ma-2" size="250" tile>
                  <v-img
                    :src="meetup.imageUrl"
                  ></v-img>
                </v-avatar>
                <v-flex xs8 sm9 md10>
                    <v-card-title primary-title class="white--text"> <h2>{{ meetup.title }}</h2> </v-card-title>
                    <v-card-title primary-title class="white--text"><h4>{{ meetup.date }}</h4></v-card-title>
                    <v-card-actions>
                      <v-btn text :to="'/meetups/'+meetup.id">
                        <span class="mdi mdi-arrow-right"></span>
                        View Meetup
                      </v-btn>
                    </v-card-actions>
                </v-flex>
              </v-layout>
            </v-container>
          <!-- </div> -->
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    computed: {
      meetups() {
        return this.$store.getters.loadedMeetups
      }
    }
  }
</script>
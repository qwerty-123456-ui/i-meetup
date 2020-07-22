<template>
  <v-container>
    <v-layout row wrap class="mb-2">
      <v-flex xs12 sm6 class="mb-2">
        <v-btn large router to="/meetups" class="info">Explore Meetups</v-btn>
      </v-flex>
      <v-flex xs12 sm6>
        <v-btn large router to="/meetup/new" class="info">Organize Meetups</v-btn>
      </v-flex>
    </v-layout>
    <v-flex>
        <p class="space"></p>
    </v-flex>
    <v-layout row>
      <v-flex xs12 class="text-xs-center">
        <v-progress-circular
      :rotate="180"
      :size="100"
      :width="15"
      :value="value"
      color="pink"
      indeterminate
      v-if="loading"
    >
      {{ value }}
    </v-progress-circular>
      </v-flex>
    </v-layout>
    <v-layout row wrap v-if="!loading">
      <v-flex xs12>
        <v-carousel style="cursor: pointer">
          <v-carousel-item
            v-for="meetup in meetups"
            :key="meetup.id"
            :src="meetup.imageUrl"
            @click="onLoadMeetup(meetup.id)"
            reverse-transition="fade-transition"
            transition="fade-transition"
          >
           <div class="title">
              {{ meetup.title }}
          </div>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mt-4">
      <v-flex xs12>
        Join our awesome meetups!
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    computed: {
      meetups(){
        return this.$store.getters.featuredMeetups
      },
      loading() {
        return this.$store.getters.loading
    }
    },
    methods: { 
      onLoadMeetup(id){
        this.$router.push('/meetups/'+id)
       }
      }
  }
</script>

<style scoped>
.space{
    padding-top: 2px;
    padding-bottom :2px;
}
.title{
    position: absolute;
    bottom: 50px;
    background-color:rgba(0, 0,0, 0.5);
    color: fff;
    font-size: 15em;
    margin-left: 45%;
}
</style>

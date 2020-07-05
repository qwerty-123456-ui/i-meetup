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
    <v-layout row wrap>
      <v-flex xs12>
        <v-carousel>
          <v-carousel-item
            v-for="meetup in meetups"
            :key="meetup.id"
            :src="meetup.imageUrl"
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
    data () {
      return {
        meetups: [
            { imageUrl:'http://1.bp.blogspot.com/-HxaFxmB8kZg/T89-RJdUXGI/AAAAAAAADyo/bfD336mdNbQ/s1600/Manhattan+New+York+City+8.jpg',id:'wqasdfg6we0t67veq3wfy',title: 'Meetup in New York' },
            { imageUrl:'https://africana.arizona.edu/sites/africana.arizona.edu/files/Eiffel-Tower-Paris-France.jpg',id:'we67yfcw0migectadb',title: 'Meetup in Paris' }      
        ]
      }
    },
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

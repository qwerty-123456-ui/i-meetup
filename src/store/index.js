import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store(
  { 
      state: {
          loadedMeetups:[
            { imageUrl:'http://1.bp.blogspot.com/-HxaFxmB8kZg/T89-RJdUXGI/AAAAAAAADyo/bfD336mdNbQ/s1600/Manhattan+New+York+City+8.jpg',id:'wqasdfg6we0t67veq3wfy',title: 'Meetup in New York' ,date:'2020-07-17' },
            { imageUrl:'https://africana.arizona.edu/sites/africana.arizona.edu/files/Eiffel-Tower-Paris-France.jpg',id:'we67yfcw0migectadb',title: 'Meetup in Paris' ,date:'2020-07-19' }      
          ],
          user:{
              id:'fgvsjxhbc8iudbwb',
              registeredMeetups: ['we67yfcw0migectadb']
          }
      },
      mutations: {},
      actions: {},
      getters:{
          loadedMeetups(state){
              return state.loadedMeetups.sort((meetupA,meetupB)=>{
                  return meetupA.date > meetupB.date
              })
          }
      },
      loadedMeetup(state){
          return (meetupId) =>{
              return state.loadedMeetups.find((meetup) => {
                  return meetup.id == MeetupId
              })
          }
      }
   }
)
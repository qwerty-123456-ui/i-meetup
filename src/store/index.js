import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export const store = new Vuex.Store(
  { 
      state: {
          loadedMeetups:[
            { imageUrl:'http://1.bp.blogspot.com/-HxaFxmB8kZg/T89-RJdUXGI/AAAAAAAADyo/bfD336mdNbQ/s1600/Manhattan+New+York+City+8.jpg',id:'wqasdfg6we0t67veq3wfy',title: 'Meetup in New York' ,date:'2020-07-17' , location: 'New York', description:'Awesome meetup at New York'},
            { imageUrl:'https://africana.arizona.edu/sites/africana.arizona.edu/files/Eiffel-Tower-Paris-France.jpg',id:'we67yfcw0migectadb',title: 'Meetup in Paris' ,date:'2020-07-19' , location: 'Paris' , description:'Awesome meetup at Paris' }      
          ],
          user: null,
          loading: false,
          error: null
      },
      mutations: {
          setLoadedMeetups (state, payload){
              state.loadedMeetups = payload
          },
          createMeetup (state, payload){
              state.loadedMeetups.push(payload)
          },
          setUser (state,payload) {
              state.user = payload
          },
          setLoading(state, payload) {
              state.loading = payload
          },
          setError(state,payload) {
              state.error = payload
          },
          clearError(state) {
              state.error = null
          }
      },
      actions: {
          loadMeetups ({commit}) {
              commit('setLoading', true)
              firebase.database().ref('meetups').once('value')
              .then((data) => {
                  const meetups = []
                  const obj = data.val()
                  for (let key in obj) {
                      meetups.push({
                          id: key,
                          title: obj[key].title,
                          description: obj[key].description,
                          imageUrl: obj[key].imageUrl,
                          date: obj[key].date,
                          creatorId: obj[key].creatorId
                      })
                  }
                  commit('setLoadedMeetups', meetups)
                  commit('setLoading', false)
              })
              .catch(
                  (error) => {
                      console.log(error)
                      commit('setLoading', false)
                  }
              )
          },
          createMeetup ({commit, getters}, payload) {
              const meetup = {
                  title: payload.title,
                  location: payload.location,
                //   imageUrl: payload.imageUrl,
                  description: payload.description,
                  date: payload.date,
                  creatorId: getters.user.id
              }
            //   reach out firebase and store it
            firebase.database().ref('meetups').push(meetup)
            .then((data) => {
                console.log(data)
                const key = data.key
                commit('createMeetup',{
                    ...meetup,
                    id:key })
            })
            .catch((error) => {
                console.log(error)
            })
          },
          signUserUp ({commit}, payload) {
              commit('setLoading', true)
              commit('clearError')
              firebase.auth().createUserWithEmailAndPassword(payload.email,payload.password)
              .then(
                  user => {
                      commit('setLoading', false)
                      const newUser ={
                          id: user.uid,
                          registeredMeetups: []
                      }
                      commit('setUser', newUser)
                  }
              )
              .catch(
                  error => {
                      commit('setLoading', false)
                      commit('setError', error)
                      console.log(error)
                  }
              )
          },
          signUserIn({commit}, payload) {
              commit('setLoading', true)
              commit('clearError')
              firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
              .then(
          user => {
              commit('setLoading', false)
              const newUser ={
                  id: user.uid,
              registeredMeetups: []
              }
              commit('setUser', newUser)
          }
        )
        .catch(
            error => {
            commit('setLoading', false)
            commit('setError', error)
            console.log(error)
          }
        )
    },
    autoSignIn ({commit}, payload){
        commit('setUser', {id: payload.uid, registeredMeetups: []})
    },
    logout ({commit}) {
        firebase.auth().signOut()
        commit('setUser', null)
    },
    clearError ({commit}) {
        commit('clearError')
    }
},
      getters:{
          loadedMeetups(state){
              return state.loadedMeetups.sort((meetupA,meetupB)=>{
                  return meetupA.date > meetupB.date
              })
          },
      featuredMeetups(state, getters){
          return getters.loadedMeetups.slice(0,5)
      },
      loadedMeetup(state){
          return (meetupId) =>{
              return state.loadedMeetups.find((meetup) => {
                  return meetup.id === meetupId
              })
          }
      },
      user (state) {
          return state.user
      },
      loading(state) {
          return state.loading
      },
      error (state) {
          return state.error
      }
  }
})
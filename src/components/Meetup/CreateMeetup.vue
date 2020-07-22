<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <h1 class="primary--text"> Create a New Meetup</h1>
            </v-flex>
        </v-layout>
        <v-layout row>
            <v-flex>
                <form @submit.prevent = "onCreateMeetup">
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field name="title" label="Title" id="title" v-model="title" required></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field name="location" label="Location" id="location" v-model="location" required></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <!-- <v-text-field name="imageUrl" label="Image URL" id="image-url" v-model="imageUrl" required></v-text-field> -->
                            <v-btn raised class="primary" @click="onPickFile">Upload Image</v-btn>
                            <input type="file" style="display: none" ref="fileInput" accept="image/*" @change="onFilePicked">
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <img :src="imageUrl" height="200">
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field name="description" label="Description" id="description" v-model="description" full-width required></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <h4>Choose a Date & Time</h4>
                        </v-flex>
                    </v-layout>
                    <v-layout row class="mb-2">
                        <v-flex xs12 sm6 offset-sm3>
                            <v-date-picker v-model="date"></v-date-picker>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-time-picker v-model="time"></v-time-picker>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12>
                            <v-btn class="primary" :disabled="!formIsValid" type="submit"> Create Meetup</v-btn>
                            <!-- {{submittableDateTime}} -->
                        </v-flex>
                    </v-layout>
                </form>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default{
        data() {
            return {
                title: '',
                location: '',
                imageUrl: '',
                description: '',
                date: new Date().toISOString().substr(0, 10),
                time: null,
                image: null
            }
        },
        computed: {
            formIsValid(){
                return this.title != '' && this.location != '' && this.imageUrl != '' && this.description != ''
            },
        //     submittableDateTime(){
        //         const date = new Date(this.date)
        //         if (typeof this.time === 'string'){
        //             const hours = this.time.match(/^(\d+)/)[1]
        //             const minutes = this.time.match(/^:(\d+)/)[1]
        //             date.setHours(hours)
        //             date.setMinutes(minutes)
        //         } else{
        //                 date.setHours(this.time.getHours())
        //                 date.setMinutes(this.time.getMinutes())
        //         }
        //         // console.log(date)
        //         return date
        //     }
        },
        methods: {
            onCreateMeetup () {
                if (!this.formIsValid) {
                    return 
                }
                if (!this.image) {
                    return
                }
                const meetupData = {
                    title: this.title,
                    location: this.location,
                    image: this.image,
                    description: this.description,
                    date: this.date+" "+this.time,
                }
                this.$store.dispatch('createMeetup', meetupData)
                this.$router.push('/meetups')
            },
            onPickFile () {
                this.$refs.fileInput.click()
            },
            onFilePicked (event) {
                const files = event.target.files
                let filename = files[0].name
            if (filename.lastIndexOf('.') <= 0) {
                return alert('Please add a valid file!')
            }
            const fileReader = new FileReader()
            fileReader.addEventListener('load', () => {
                this.imageUrl = fileReader.result
            })
            fileReader.readAsDataURL(files[0])
            this.image = files[0]
        }
    }
}
</script>

<style scoped>

* {
    margin:2px auto;
}

</style>
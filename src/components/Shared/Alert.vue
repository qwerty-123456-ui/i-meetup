<template>
    <v-alert error dismissible @input="onClose" :value="true" class="primary">
        {{text}}
    </v-alert>
</template>

<script>
    export default {
        props: ['text'],
        methods: {
            onClose() {
                this.$emit('Dismissed')
            }
        }
    }
</script>
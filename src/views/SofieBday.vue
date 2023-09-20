<template>
    <v-card>
    <v-row class="align-center text-center">
<v-col cols="12" sm="12" class="ma-5 pt-15">
    <div>
<h1 class="text-h1 font-weight-black text-green" v-if="StartParty" >Happy Birthday Sofie!</h1>
<v-img
v-if="StartParty"
width="400"
class="mx-auto d-flex align-end"
  cover
  src="src/assets/ewf.gif"
><v-img
width="80"
class="mx-auto"
v-if="StartParty"
  src="src/assets/sofie.png"
></v-img></v-img>


<v-btn  v-if="!StartParty" @click="playAudio">Start Party!</v-btn>
    </div>
</v-col>
</v-row>
</v-card>
</template>

<script>
import audioFile from '../assets/ewf.mp3'
export default {
    data() {
        return {
            StartParty: false,
        }
    },

    methods: {
        playAudio() {
      const audio = new Audio(audioFile);
      audio.play()
      this.StartParty = !this.StartParty
    }
    },

}
</script>

<style scoped>

</style>
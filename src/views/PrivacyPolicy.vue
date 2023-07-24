<template>
    <v-card flat class="ma-10">
    <h1>Privacy Policy</h1>
    <p v-html="mainContent"></p>
</v-card>
</template>

<script>
import axios from 'axios';

export default {
    data(){
        return {
            mainContent: 'loading...',
        }
    },
mounted(){
    this.getLogo();
},
    methods: {
    async getLogo(){
try {
  const data = await axios.get('https://rightroaddigital.com/wp-json/wp/v2/pages/3')
  this.mainContent = data.data.content.rendered;
} catch(error) {
  alert(error)
}

    }
    }
}


</script>
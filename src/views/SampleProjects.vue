<template>
    <v-main>
      <v-container>
        <v-row>
          <v-col
            v-for="(item, index) in portfolioData"
            :key="index"
            cols="4"
          >
          <v-card class="mx-auto" max-width="344">
    <v-img
      :src="item.image_url"
      height="200px"
      cover
    ></v-img>

    <v-card-title>{{ item.title }}</v-card-title>

    <v-card-subtitle> <a :href="item.github_link" target="_blank"><v-icon icon="mdi-github"></v-icon> GitHub Repo Link</a></v-card-subtitle>

    <v-card-actions>
      <v-btn color="orange-lighten-2" variant="text" :href="item.live_link" target="_blank"> Live Link </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
        @click="show = !show"
      ></v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
{{ item.desc }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
          show: false,
          portfolioData: []
        }
    },
    mounted(){
        this.getPortItems()
    },
    methods: {

   async getPortItems(){

    try{
      const data = await axios.get(`https://rightroaddigital.com/wp-json/port/v1/portfolio`)
      this.portfolioData = data.data;
    }
    catch(error){
alert(error);
    }

      }


    }

}
</script>

<style scoped>

.v-main{
    background-color: rgb(239, 239, 239);
}

</style>
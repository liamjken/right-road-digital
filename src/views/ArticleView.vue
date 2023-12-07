<template>
    <v-main>
      <v-container>
        <v-row class="d-flex justify-center text-center">
            <v-col class="mb-auto">
                <h1 class="text-primary text-h2 font-weight-medium mb-3">Blog</h1>
                <v-divider class="mx-auto w-25"></v-divider>
            </v-col>
        </v-row>
        <v-row class="d-flex justify-center text-center mb-10">
            <v-col class="">
                <p class="bio mt-1 mx-auto ">
                  I want this page to be a platform for me to not only showcase my projects but, more importantly, to explain my coding process and the thought behind each project. This site goes beyond the typical WordPress setup, and I aim to provide insights into what goes into building it.

By sharing these pages online, my goal is to offer a detailed account of my coding journey, seeking advice on areas where improvement is possible and exploring alternative approaches that may not have crossed my mind.
                </p>
            </v-col>
        </v-row>
        <v-row>
          <v-col
            v-for="(article, index) in articleData"
            :key="index"
            cols="12"
            :sm="workOutCols(article.categories[0])"
          >
          <v-card class="mx-auto">
    <v-img
      :src="featuredImageURL(article.featured_media)"
      height="200px"
      cover
    >
</v-img>

    <v-card-title>{{ article.title.rendered }}</v-card-title>

    <v-card-actions>
      <v-btn color="orange-lighten-2" variant="text">
        <RouterLink :to="transformLink(article.link)">Read more... </RouterLink>
        </v-btn>

      <v-spacer></v-spacer>
      <v-btn
        :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
        @click="changeShowStatus(index)"
      ></v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show === index">
        <v-divider></v-divider>

        <v-card-text>
            <p v-html="article.excerpt.rendered"></p>
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
          show: null,
          articleData: [],
          articleImg: []
        }
    },
    mounted(){
        this.getArticles()
        
    },
    computed: {
        featuredImageURL(){
            return (imgId) => {
        const imgInfo = this.articleImg.find((img) => img.id === imgId);
        return imgInfo ? imgInfo.url : '';
      };
        },

        
    },
    methods: {
transformLink(link){
return link.replace("https://www.rightroaddigital.com", "");
},


        workOutCols(id){
            if(id === 23){
                return 12;
            }else{
                return 6;
            }
        },

   async getArticles(){

    try{
      const data = await axios.get(`https://rightroaddigital.com/wp-json/wp/v2/posts`)
      this.articleData = data.data.reverse();
      this.articleImg = await Promise.all(data.data.map(async (item) => ({
        url : await this.getFeaturedIng(item.featured_media),
        id : item.featured_media
      })))
      
    }
    catch(error){
alert(error);
    }

      },

      async getFeaturedIng(imgId){
     
        try{
            if (imgId !== 0){
            const img = await axios.get(`https://www.rightroaddigital.com/wp-json/wp/v2/media/${imgId}`)
      const imgLink = img.data.media_details.sizes.full.source_url;

        return imgLink;
      } else {
        return;
      }
        }catch(error){
            alert(error);
            return;
        }

      },

      changeShowStatus(key){
             this.show = this.show === key ? null : key;
        },


    }

}
</script>

<style scoped>

.v-main{
    background-color: rgb(239, 239, 239);
}

</style>
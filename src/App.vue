<template>
  <v-app>
      <div class="pt-2 bg-background">
        <v-row no-gutters>
      <v-col
        cols="12"
        sm="12"
      >
      <v-toolbar-title class="d-flex justify-center head-tool-bar">
        <img class="logo" :src="mainLogo"/>
      </v-toolbar-title>
    </v-col>

      <!-- Container for the v-btn -->
      <v-col
        cols="12"
        sm="12"
      >
      <div class="d-flex justify-center">
        
        <v-btn
          v-for="(link, index) in menuLinks"
          :key="index"
          variant="text"
        ><RouterLink :to="link.url">{{ link.title }}</RouterLink></v-btn>
      </div>
      <v-divider></v-divider>
    </v-col>
    </v-row>



  </div>


    <v-main>
<RouterView></RouterView>
    </v-main>
  </v-app>
</template>


<script>
import axios from 'axios'
import { RouterLink } from 'vue-router'

export default {
    data() {
        return {
            mainLogo: 'https://www.rightroaddigital.com/wp-content/uploads/2023/07/logo-inverted.webp',
            links: [
                'Dashboard',
                'Messages',
                'Profile',
                'Updates',
            ],
            menuLinks: []
        };
    },
    mounted() {
        this.getMenuItems();
    },
    methods: {
        async getMenuItems() {
            try {
                const data = await axios.get(`https://rightroaddigital.com/wp-json/vt/v1/menu/?menu_name=main-menu`);
                this.menuLinks = data.data.map(item => ({
                    title: item.title,
                    url: item.url.replace("https://www.rightroaddigital.com", "")
                }));
            }
            catch (error) {
                alert(error);
            }
        },
        handleScroll() {
            if (window.scrollY > 100) {
                if (this.topOfPage)
                    this.topOfPage = false;
            }
            else {
                if (!this.topOfPage)
                    this.topOfPage = true;
            }
            this.pagePosition = window.scrollY;
        },
        /*     async getLogo(){
        try {
          const data = await axios.get('http://rightroaddigital.com/wp-json/wp/v2/media')
          this.mainLogo = data.data[0].source_url;
          console.log(data.data[0].source_url)
        } catch(error) {
          alert(error)
        }
        
            } */
    },
    components: { RouterLink }
}

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Advent+Pro:wght@300&family=Lato&display=swap');

#app {
  font-family: 'Lato', sans-serif;
}

a {
  text-decoration: none;
  color: inherit;
}

body{
margin: 0;
background-color:#D4EEC3;
}

.custom-nav-icon .v-icon {
  color: white; 
}

/* nav{
  margin: 0;
  background-color: #48742C;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
  position:fixed; 
  left:0;
  top:0; 
  width:100vw;
} */

img.logo{
width: 100%;
max-width: 400px;
}

.head-tool-bar {
  margin-inline-start: 0!important;
}




</style>
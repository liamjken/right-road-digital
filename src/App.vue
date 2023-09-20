<template>
  <v-app>

    <v-app-bar v-if="!$route.meta.hideheader" color="basil" class="pa-3">
    <v-toolbar-title class="d-flex justify-center head-tool-bar"><img class="logo" :src="mainLogo"/></v-toolbar-title>
    </v-app-bar>
    <v-main>
<RouterView></RouterView>
    </v-main>
  </v-app>
</template>


<script>

export default {
  data(){
    return {
        mainLogo: 'https://www.rightroaddigital.com/wp-content/uploads/2023/07/logo-inverted.webp',
    }
  },
 
  methods: {
    handleScroll(){
      if(window.scrollY>100){
        if(this.topOfPage) this.topOfPage = false
      } else {
        if(!this.topOfPage) this.topOfPage = true
      }
this.pagePosition = window.scrollY
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
}

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Advent+Pro:wght@300&family=Lato&display=swap');

#app {
  font-family: 'Lato', sans-serif;
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
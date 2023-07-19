<template>
  <v-app>
    <v-navigation-drawer
    v-model="drawer"
    v-if="!topOfPage"
    temporary>
      <!--  -->
    </v-navigation-drawer>

    <v-app-bar color="basil" class="pa-3">
    <v-toolbar-title class="d-flex justify-center"><img class="logo" src="./assets/logo-inverted.png"/></v-toolbar-title>
    </v-app-bar>
    <!-- <v-app-bar color="basil" v-if="!topOfPage">
      <v-toolbar-title><img class="smallLogo" src="./assets/logo-small.png"/></v-toolbar-title>
      {{ pagePosition }}
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar> -->

    <v-main>
      <!-- <v-tabs
      v-model="tab"
      color="primary"
      align-tabs="center"
    >
      <v-tab :value="2">WP Site Development</v-tab>
      <v-tab :value="1">WP plugin Development</v-tab>
      <v-tab :value="3">Custom Web Applications</v-tab>
    </v-tabs> -->
<RouterView></RouterView>
    </v-main>
  </v-app>
</template>


<script>
export default {
  data(){
    return {
        topOfPage: true,
        pagePosition: null,
        drawer: null,
    }
  },

  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
 
  methods: {
    handleScroll(){
      if(window.scrollY>100){
        if(this.topOfPage) this.topOfPage = false
      } else {
        if(!this.topOfPage) this.topOfPage = true
      }
this.pagePosition = window.scrollY
    }
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
  width: 400px;
}
img.smallLogo{
float: left;
  width: 40px;
}





</style>
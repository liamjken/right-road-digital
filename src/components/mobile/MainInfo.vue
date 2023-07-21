<template>
    <v-card color="basil" flat class="ma-0">
<v-tabs v-model="tab" bg-color="transparent" color="basil" grow>
  <v-tab v-for="item in mySlides" :key="item" :value="item">
    {{ item.title }}
  </v-tab>
</v-tabs>

<v-window v-model="tab">
  <v-window-item v-for="item in mySlides" :key="item" :value="item">
    <v-card flat class="pt-10">
      <v-row>
        <v-col cols="12" sm="12">
          <v-card-title><h5>{{ item.subTitle }}</h5></v-card-title>
      <v-card-text><p class="sliderPara pt-5">{{ item.desc }}</p></v-card-text>
    </v-col>
    <v-col cols="12" sm="12">
      <v-img :src="item.img"></v-img>
    </v-col>
    </v-row>
    </v-card>
  </v-window-item>
</v-window>
</v-card>
</template>

<script>

export default {
    data() {
        return {
            tab: '',
            mySlides: [
      {
        title : 'WP Website',
        subTitle : 'Transforming Websites into Works of Art',
        desc: `Unlock the true potential of your business with our exceptional WordPress website designs. Whether you're a small startup or a large enterprise, our team is dedicated to crafting high-quality websites that captivate your audience. Simply share your requirements through the form below, and we'll swiftly provide you with a quote to bring your vision to life.`,
        img: 'https://www.rightroaddigital.com/wp-content/uploads/2023/07/wordpress.webp'
      },
      {
        title : 'WP Plugin',
        subTitle : 'Tailored Solutions with WP Development',
        desc: `Don't settle for ordinary when you can have extraordinary. While WordPress offers a vast array of plugins, we understand that sometimes you need a custom solution. Let us assist you in creating the perfect plugin tailored to your specific needs. Share your requirements with us, and we'll provide you with an estimate promptly. If we know of an existing plugin that suits your requirements, we'll suggest it to you before proposing a custom solution, ensuring efficiency and cost-effectiveness.`,
        img: 'https://www.rightroaddigital.com/wp-content/uploads/2023/07/plugins.webp',
      },
      {
        title : 'Web App',
        subTitle : 'Elevate Your Business with a Web App',
        desc: `When your business demands more than just a website, our expertise in building custom web applications powered by Vue.js comes into play. Whether you need a dynamic e-commerce platform or a complex business management system, we're here to deliver a high-performing solution that perfectly aligns with your company's requirements. Illuminate your needs by filling out the form below, and let's start a conversation to explore the possibilities.`,
        img: 'https://www.rightroaddigital.com/wp-content/uploads/2023/07/applications.webp',
      }
  ],
        }
    }
}

</script>

<style scoped>

.bg-basil {
background-color: #FFFF
}
.text-basil {
color: #356859 !important;
}

</style>
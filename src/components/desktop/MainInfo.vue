<template>
    <v-card color="basil" flat class="ma-10">
<v-tabs v-model="tab" bg-color="transparent" color="basil" grow>
  <v-tab v-for="item in mySlides" :key="item" :value="item">
    {{ item.title }}
  </v-tab>
</v-tabs>

<v-window v-model="tab">
  <v-window-item v-for="item in mySlides" :key="item" :value="item">
    <v-card flat class="pt-10">
      <v-row>
        <v-col cols="12" sm="6">
          <v-card-title><h3>{{ item.subTitle }}</h3></v-card-title>
      <v-card-text><p class="sliderPara pt-5">{{ item.desc }}</p></v-card-text>
    </v-col>
    <v-col cols="12" sm="6">
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
        title : 'WordPress Website Development',
        subTitle : 'Transforming Websites into Works of Art',
        desc: `Unlock the true potential of your business with our exceptional WordPress website designs. Whether you're a small startup or a large enterprise, our team is dedicated to crafting high-quality websites that captivate your audience. Simply share your requirements through the form below, and we'll swiftly provide you with a quote to bring your vision to life.`,
        img: 'src/assets/wordpress.png'
      },
      {
        title : 'WordPress Plugin Development',
        subTitle : 'Tailored Solutions with WordPress Plugin Development',
        desc: `Don't settle for ordinary when you can have extraordinary. While WordPress offers a vast array of plugins, we understand that sometimes you need a custom solution. Let us assist you in creating the perfect plugin tailored to your specific needs. Share your requirements with us, and we'll provide you with an estimate promptly. If we know of an existing plugin that suits your requirements, we'll suggest it to you before proposing a custom solution, ensuring efficiency and cost-effectiveness.`,
        img: 'src/assets/plugins.png',
      },
      {
        title : 'Custom Web Applications',
        subTitle : 'Elevate Your Business with Custom Web Applications',
        desc: `When your business demands more than just a website, our expertise in building custom web applications powered by Vue.js comes into play. Whether you need a dynamic e-commerce platform or a complex business management system, we're here to deliver a high-performing solution that perfectly aligns with your company's requirements. Illuminate your needs by filling out the form below, and let's start a conversation to explore the possibilities.`,
        img: 'src/assets/applications.png',
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
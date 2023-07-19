<template>
  <v-dialog 
  transition="dialog-bottom-transition"
  v-model="dialog"
  width="auto"
>
<v-card>
        <v-toolbar
          color="primary"
          title="Success"
        ></v-toolbar>
        <v-card-text>
          <div class="text-h4 px-12 ma-4 text-center">Request Successfully Sent</div>
          <div class="text-p px-12 text-center">Thanks {{ formData.name.val }} for taking the time to complete our contact form.</div>
          <div class="text-p px-12 text-center"> Someone will reach out to you via email within the next business day.</div>
        </v-card-text>
        <v-card-actions class="justify-end">
          <v-btn
            variant="text"
            @click="dialog = false"
          >Close</v-btn>
        </v-card-actions>
      </v-card>
</v-dialog>
  <div v-if="$vuetify.display.xs">Mobile view</div>
<div v-else-if="!$vuetify.display.xs">
<v-img
src="src/assets/hero.png"
>
<v-row>
<v-col cols="12" sm="4" class="ma-5 pt-15">
<v-img class="head-img pa-0 ml-6" src="src/assets/Heading.png"></v-img>
<p class="sub-head text-center pa-0 ma-0">Affordable WordPress Websites, Custom WP Plugins
& Custom Vuejs Web Applications</p>
</v-col>
<v-col cols="12" sm="3" class="pt-15">
<v-img class="pa-0 ml-4 sign" src="src/assets/sign.png"></v-img>
</v-col>
<v-col cols="12" sm="4" class="pt-15">
<v-img class="pa-0 ml-4 man" src="src/assets/man.png"></v-img>
</v-col>
</v-row>
</v-img>
</div>
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
<h1 class="d-flex justify-center pa-10">Get in Touch!</h1>
<v-container class="d-flex justify-center">

<v-card width="100%" class="px-4 py-4" flat>
  <v-form @submit.prevent>
    <v-text-field
  variant="outlined"
  v-model.trim="formData.name.val"
  label="Name"
  type="text"
  :error-messages="nameErrorMessages"
  class="mb-4"
  @blur="clearValidity('name')"
  requried></v-text-field>
  <v-text-field
  variant="outlined"
  v-model.trim="formData.phone.val"
  label="Phone"
  type="phone"
  :error-messages="phoneErrorMessages"
  class="mb-4"
  @blur="clearValidity('phone')"
  requried></v-text-field>
  <v-text-field
  variant="outlined"
  v-model.trim="formData.email.val"
  label="Email"
  type="email"
  :error-messages="emailErrorMessages"
  class="mb-4"
  @blur="clearValidity('email')"
  requried></v-text-field>
  <v-select
  v-model.trim="formData.ServiceReq.val"
  variant="outlined"
  :items="items"
  label="Services Required"
  :error-messages="ServiceReqErrorMessages"
  @blur="clearValidity('ServiceReq')"
  class="mb-4"
    required>
  </v-select>
  <v-textarea
  v-model.trim="formData.desc.val"
  variant="outlined"
  label="Description of what you need"
  :error-messages="descErrorMessages"
  class="mb-4"
  @blur="clearValidity('desc')"></v-textarea>
  <v-btn
  flat
  color="primary"
  size="large"
  block
  @click="sendInfo()"
  >Submit</v-btn>
  <template v-slot:activator="{ props }">
    <v-btn
      color="primary"
      v-bind="props"
    >
      Open Dialog
    </v-btn>
  </template>
  <div v-if="!formData.formIsValid" class="v-input__details"><div class="v-messages" role="alert" aria-live="polite" id="input-16-messages"><div class="v-messages__message main-errMsg" style="">Please correct the errors above and resubmit the form.</div></div><!----></div>
  </v-form>
</v-card>
</v-container>
</template>

<script>
import axios from 'axios';

export default {
mounted () {
},
data() {
  return {
    tab: '',
    dialog: false,
    formData: {
      name: {
        val: '',
        IsValid: true,
        errorMsg: 'Please enter your name here.'
      },
      phone: {
        val: '',
        IsValid: true,
        errorMsg: 'Please enter a valid phone number here.'
      },
      email: {
        val: '',
        IsValid: true,
        errorMsg: 'Please enter a valid email here'
      },
      ServiceReq: {
        val: '',
        IsValid: true,
        errorMsg: 'Please select one of the options'
      },
      desc: {
        val: '',
        IsValid: true,
        errorMsg: 'Please enter a brief description'
      },
      formIsValid: true,
      mainWrrorMsg: 'Please fix the above errors and submit again'
    },
    items: ['WordPress Website Development', 'WordPress Plugin Development', 'Custom Web Applications', 'a combination'],
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
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
},
computed: {
nameErrorMessages() {
if (!this.formData.name.IsValid && this.formData.name.errorMsg) {
  return [this.formData.name.errorMsg];
} else {
  return [];
}
},
phoneErrorMessages() {
if (!this.formData.phone.IsValid && this.formData.phone.errorMsg) {
  return [this.formData.phone.errorMsg];
} else {
  return [];
}
},
emailErrorMessages() {
if (!this.formData.email.IsValid && this.formData.email.errorMsg) {
  return [this.formData.email.errorMsg];
} else {
  return [];
}
},
ServiceReqErrorMessages() {
if (!this.formData.ServiceReq.IsValid && this.formData.ServiceReq.errorMsg) {
  return [this.formData.ServiceReq.errorMsg];
} else {
  return [];
}
},
descErrorMessages() {
if (!this.formData.desc.IsValid && this.formData.desc.errorMsg) {
  return [this.formData.desc.errorMsg];
} else {
  return [];
}
},


},
methods: {
  clearValidity(input) {
this.formData[input].IsValid = true;
},
  validateForm() {
    this.formData.formIsValid = true;
    if (this.formData.name.val === '') {
      this.formData.name.IsValid = false;
      this.formData.formIsValid = false;
    }
    const phoneRegex = /^\d{10}$/;
    if (this.formData.phone.val === '' || !this.formData.phone.val.match(phoneRegex)) {
      this.formData.phone.IsValid = false;
      this.formData.formIsValid = false;
    }
    if (this.formData.email.val === '' || !this.formData.email.val.includes('@')) {
      this.formData.email.IsValid = false;
      this.formData.formIsValid = false;
    }
    if (this.formData.ServiceReq.val === '') {
      this.formData.ServiceReq.IsValid = false;
      this.formData.formIsValid = false;
    }
    if (this.formData.desc.val === '') {
      this.formData.desc.IsValid = false;
      this.formData.formIsValid = false;
    }

  },
  async sendInfo(){
    this.validateForm();

    if(!this.formData.formIsValid) {
      return;
    }
    try {
    const data = await axios.post('http://rightroaddigital.local/wp-json/rrd/v1/formemail', {
        'name': this.formData.name.val,
      'phone': this.formData.phone.val,
      'email': this.formData.email.val,
      'ServiceReq': this.formData.ServiceReq.val,
      'desc': this.formData.desc.val
      })

      console.log(data);
      this.dialog = true;

    } catch(error) {
      alert(error)
    }
  }
}
}
</script>

<style>
/* Helper classes */
.bg-basil {
background-color: #FFFF
}
.text-basil {
color: #356859 !important;
}

.sub-head{
color: white;
font-size: 1.2em;
}

.man{
bottom: -3em;
position: relative;
}

.sliderPara{
font-size: 1.2em;
}
.main-errMsg{
color: #d52525;
border: solid 3px #b00000;
padding: 10px;
font-weight: bolder;
opacity: 100%;
}
</style>

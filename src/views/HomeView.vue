<template>

  <div v-if="$vuetify.display.mobile">
<HeroMobile/>
<MainInfoMobile/>
</div>
<div v-else-if="!$vuetify.display.mobile">
<HeroDesktop/>
<MainInfoDesktop/>
</div>
<h1 class="d-flex justify-center pa-10">Get in Touch!</h1>
<MainContact />
</template>

<script>
import axios from 'axios';

import HeroDesktop from '../components/desktop/HeroDesktop.vue';
import HeroMobile from '../components/mobile/HeroMobile.vue';
import MainInfoDesktop from '../components/desktop/MainInfo.vue';
import MainInfoMobile from '../components/mobile/MainInfo.vue';
import MainContact from '../components/forms/MainContact.vue';

export default {
components: {
  HeroDesktop,
  HeroMobile,
  MainInfoDesktop,
  MainInfoMobile,
  MainContact
},
data() {
  return {
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

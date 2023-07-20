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
          <div class="small mt-5 text-center"> This form will be disabled but if you need to resubmit a reqeust simply refresh the page</div>
        </v-card-text>
        <v-card-actions class="justify-end">
          <v-btn
            variant="text"
            @click="closeAndClear"
          >Close</v-btn>
        </v-card-actions>
      </v-card>
</v-dialog>
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
  :disabled="formSubmitted"
  requried></v-text-field>
  <v-text-field
  variant="outlined"
  v-model.trim="formData.phone.val"
  label="Phone"
  type="phone"
  :error-messages="phoneErrorMessages"
  class="mb-4"
  @blur="clearValidity('phone')"
  :disabled="formSubmitted"
  requried></v-text-field>
  <v-text-field
  variant="outlined"
  v-model.trim="formData.email.val"
  label="Email"
  type="email"
  :error-messages="emailErrorMessages"
  class="mb-4"
  @blur="clearValidity('email')"
  :disabled="formSubmitted"
  requried></v-text-field>
  <v-select
  v-model.trim="formData.ServiceReq.val"
  variant="outlined"
  :items="items"
  label="Services Required"
  :error-messages="ServiceReqErrorMessages"
  @blur="clearValidity('ServiceReq')"
  :disabled="formSubmitted"
  class="mb-4"
    required>
  </v-select>
  <v-textarea
  v-model.trim="formData.desc.val"
  variant="outlined"
  label="Description of what you need"
  :error-messages="descErrorMessages"
  class="mb-4"
  @blur="clearValidity('desc')"
  :disabled="formSubmitted"></v-textarea>
  <v-btn
  flat
  color="primary"
  size="large"
  block
  @click="sendInfo()"
  :disabled="formSubmitted"
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

export default{
    data(){
        return {
            dialog: false,
            formSubmitted: false,
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
    const data = await axios.post('https://rightroaddigital.com/wp-json/rrd/v1/formemail', {
        'name': this.formData.name.val,
      'phone': this.formData.phone.val,
      'email': this.formData.email.val,
      'ServiceReq': this.formData.ServiceReq.val,
      'desc': this.formData.desc.val
      })

      console.log(data);
      this.dialog = true;
      this.formSubmitted = true;

    } catch(error) {
      alert(error)
    }
  },
  closeAndClear() {
    this.dialog = false

        // Reset form fields to their initial state
        this.formData.name.val = '';
    this.formData.phone.val = '';
    this.formData.email.val = '';
    this.formData.ServiceReq.val = '';
    this.formData.desc.val = '';
  }
}
}

</script>

<style>

.small{font-size:smaller}

</style>
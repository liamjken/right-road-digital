<template>
        <v-main>
          <v-container>
        <v-row class="d-flex justify-space-between text-center">
            <v-col class="mb-auto">
                <h1 class="text-primary text-h3 font-weight-medium mb-3" v-html="title"></h1>
            </v-col>
        </v-row>
        <v-row>
            <v-divider></v-divider>
            <v-col>                
                <h4 class="text-left py-1">Created on {{ formatedDate }}</h4>
               </v-col>
               <v-col>                
                <h4 class="text-right py-1">Written by {{ author }}</h4>
               </v-col>
               <v-divider></v-divider>
        </v-row>
<v-row>
<v-col cols="12" sm="12" class="">
<div v-html="mainContent"></div>
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
            postId: this.$route.params.postid,
            postName: this.$route.params.postname,
            mainContent: 'loading...',
            title: '',
            date: '',
            author: ''
        }
    },
    mounted(){
        this.getPost()
    },
    computed: {
        formatedDate() {
            const date = new Date(this.date);
            const options = {
                weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'America/New_York',
            };
            return date.toLocaleString('en-US', options);
        }
    },

    methods: {
        async getPost(){
try {
  const data = await axios.get(`https://rightroaddigital.com/wp-json/wp/v2/posts/${this.postId}`)
  this.mainContent = data.data.content.rendered;
  this.title = data.data.title.rendered;
  this.date = data.data.date;
  if(data.data.author === 1){
    this.author = 'Liam Kennedy'
  } else {
    this.author = 'anonymous'
  }

    const parser = new DOMParser();
    const doc = parser.parseFromString(this.mainContent, 'text/html');
    const targetElement = doc.getElementsByClassName('wp-block-group');

    for (const el of targetElement) {
        const ClassNames = el.className
        if (ClassNames.includes('is-nowrap') && ClassNames.includes('is-layout-flex')) {
        const classNameArray = ClassNames.split(' ');
        const wpContainerClass = classNameArray.find(name => name.startsWith('wp-container-'))

        if (wpContainerClass) {
        const styleTag = document.createElement('style');
        styleTag.setAttribute('id', 'vue-block-support');
        styleTag.textContent = `.${wpContainerClass}.${wpContainerClass}{flex-wrap:nowrap;}`;
        document.body.appendChild(styleTag);
        }

        }
    }


    console.log('ClassName')
    console.log(targetElement)


} catch(error) {
  alert(error)
}

    }
    }
}

</script>

<style scoped>

.v-main{
    background-color: rgb(239, 239, 239);
}
.v-container{
    max-width: 1080px;
}

h1, h2, h3, h4{
color: rgb(var(--v-theme-primary)) !important;
}

a {
    color: rgb(var(--v-theme-primary)) !important;
    text-decoration: underline;
}

</style>
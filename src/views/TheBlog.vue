<template>
<v-row>
<v-col cols="12" sm="12" class="ma-5 pt-15">
<div v-html="mainContent"></div>
</v-col>
</v-row>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            postId: this.$route.params.postid,
            postName: this.$route.params.postname,
            mainContent: 'loading...'
        }
    },
    mounted(){
        this.getPost()
    },
    methods: {
        async getPost(){
try {
  const data = await axios.get(`https://rightroaddigital.com/wp-json/wp/v2/posts/${this.postId}`)
  this.mainContent = data.data.content.rendered;

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
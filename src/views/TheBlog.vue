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
} catch(error) {
  alert(error)
}

    }
    }
}

</script>
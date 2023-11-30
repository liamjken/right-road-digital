<template>
<v-main>
    <v-container>
        <v-row class="d-flex justify-center text-center">
            <v-col class="mb-auto">
                <h1 class="text-primary text-h2 font-weight-medium mb-3">About Me</h1>
                <v-divider class="mx-auto w-25"></v-divider>
            </v-col>
        </v-row>
        <v-row class="d-flex justify-center text-center mb-10">
            <v-col class="">
                <h1 class="text-primary text-h4 font-weight-medium text-left">Get to Know Me</h1>
                <p class="bio text-left mt-3">
                    As of the publication of this page, Right Road Digital is not an organization with multiple employees; it's just me, Liam Kennedy. Although my dream is to build Right Road Digital into a successful agency one day, for now, I'm handling operations on my own.
                </p>
                <p class="bio text-left mt-3">                     
Throughout my career, I've worn many hats, from social media marketing to web design, support management, product integration, and more. This diverse experience has given me insight into the intricacies of a growing business that I believe not many people have.
                </p>
            </v-col>
            <v-col>
                <v-avatar class="mt-5 my-avatar elevation-20" color="primary"  size="300">
                    <v-img
        src="https://www.rightroaddigital.com/wp-content/uploads/2023/11/Me.jpeg"
        alt="Image of Liam"
      ></v-img>
                </v-avatar>
            </v-col>
            <v-col class="">
                <h1 class="text-primary text-h4 font-weight-medium text-left">The Goal</h1>
                <p class="bio text-left mt-3">
                    I understand the importance of a strong web presence, and I'm eager to help companies or organizations create something we can all be proud of. Building a client base and growing Right Road Digital would be a dream come true. 
                </p>
                <p class="bio text-left mt-3">                     
                    If I can assist someone else in building and growing their business in the process, that would be awesome.
                </p>
            </v-col>
        </v-row>
        <v-divider class=""></v-divider>
        <v-row  class="d-flex justify-center text-center mt-5">
            <v-col>
                <h1 class="text-primary text-h4 font-weight-medium text-left">Learn More</h1>
                <p class="bio mt-3 text-left">
                    If you want to learn more about my professional journey, you can check out my resume, connect with me on LinkedIn, or explore my projects on GitHub. If you have questions, ideas, or just want to chat tech, feel free to reach out. I'm always up for a good conversation and exciting new projects.
                </p>
            </v-col>
            <v-col>
                <h1 class="text-primary text-h4 font-weight-medium text-left">Links</h1>
                <v-card class="px-5 pb-10 mt-3" color="primary">
                    <v-row>
                        <v-col>
                            <ul class="link-list bio mt-3">
                        <li>
                        <a href="https://github.com/liamjken" class="align-center d-flex" target="_blank"><v-icon icon="mdi-github" class="mr-3" size="50"></v-icon> GitHub Link</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/liamjken"  class="align-center d-flex" target="_blank"><v-icon icon="mdi-linkedin" class="mr-3" size="50"></v-icon> Linkedin Link</a>
                    </li>
                </ul>
                        </v-col>
                        <v-col>
                            <ul class="link-list bio mt-3">
                                <li>
                        <a href="https://www.rightroaddigital.com/wp-content/uploads/2023/09/Liam-Kennedy-Resume-2023.pdf"  class="align-center d-flex" target="_blank"><v-icon icon="mdi-file-account" class="mr-3" size="50"></v-icon> Resume</a>
                    </li>
                    <li>
                        <a href="mailto:hello@rightroaddigital.com"  class="align-center d-flex" target="_blank"><v-icon icon="mdi-card-account-mail" class="mr-3" size="50"></v-icon> Contact Me</a>
                    </li>
                </ul>
                        </v-col>
                    </v-row>
                

            </v-card>
            </v-col>
        </v-row>
    </v-container>
</v-main>



    <div>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

.my-avatar{
    border: 7px solid rgb(var(--v-theme-primary));
}
.link-list{
    list-style-type: none;
}

.link-list li{
padding-bottom: 15px;
}

</style>
<template>
    <v-card flat class="ma-10">
      <div class="credits-container">
        <div class="credits-scroll" ref="creditsScroll" @animationiteration="resetAnimation">
          <div class="credit-item" v-for="(credit, index) in sheetInfo" :key="index">
            {{ credit }}
          </div>
        </div>
      </div>
    </v-card>
  </template>
  
  <script>
import axios from 'axios';

  export default {
    data() {
      return {
        credits: [
          'Text 1',
          'Text 2',
          'Text 3',
          // Add more credit texts as needed
        ],
        sheetInfo: 'test',
      };
    },
    mounted(){
        this.getSheetData();
    },
    methods: {
      resetAnimation() {
        const scrollContainer = this.$refs.creditsScroll;
        const containerHeight = scrollContainer.offsetHeight;
        const contentHeight = scrollContainer.scrollHeight;
  
        // Check if the content is taller than the container, to avoid scrolling if not needed
        if (contentHeight > containerHeight) {
          scrollContainer.style.animation = 'none'; // Disable animation
          scrollContainer.scrollTop = 0; // Reset to the top
          scrollContainer.style.animation = null; // Re-enable animation
        }
      },
     async getSheetData() {
        try {
  const data = await axios.get('https://sheets.googleapis.com/v4/spreadsheets/1kg13BI9McArzA9fZSVYbtjAESytzzySsSXeve-sGD08/values/Job%20applications!B2%3AB?dateTimeRenderOption=FORMATTED_STRING&majorDimension=ROWS&valueRenderOption=FORMATTED_VALUE&key=AIzaSyCIv9NNmFsUsVwe3DY68-rYf-zpuRAxpB4')
  this.sheetInfo =  data.data.values.flatMap(item => item);
  console.log(JSON.stringify(data.data.values))
} catch(error) {
  alert(error)
}
        
     }
    },
  };
  </script>
  
  <style>
  .credits-container {
    overflow: hidden;
    height: 50px; /* Adjust the height based on your requirements */
  }
  
  .credits-scroll {
    animation: scrollCredits 10s linear infinite;
    display: flex;
    flex-direction: column;
  }
  
  @keyframes scrollCredits {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(calc(-100% - 10px)); /* Adjust the value based on the number of credits and spacing */
    }
  }
  
  .credit-item {
    margin-bottom: 10px; /* Add spacing between each credit item */
    /* Add your desired CSS styles for each credit item */
  }
  </style>
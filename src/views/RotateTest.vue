<template>
    <v-card class="ma-10">
        <v-img class="align-center text-center"
      src="https://www.rightroaddigital.com/wp-content/uploads/2023/07/full-image.png"
      height="250px"
      cover
    ><h1 class="heading">Celtic Fests - 500 Club</h1>
<h3>Thank you for all the generous donations!</h3>
</v-img>
      <div class="credits-container ma-10">
        <div class="credits-scroll align-center" ref="creditsScroll" @animationiteration="resetAnimation">
          <div class="credit-item" v-for="(credit, index) in sheetInfo" :key="index">
           <h2> {{ credit.name }} - {{ credit.amount }}</h2>
          </div>
        </div>
      </div>
      <v-card-title>
     Find your Name below!
      <v-spacer></v-spacer>
      <v-text-field
      class="pb-5 pt-5"
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
    v-model:items-per-page="itemsPerPage"
    :headers="headers"
    :items="sheetInfo"
    :search="search"
    item-value="name"
    class="elevation-1 pa-5"
  ></v-data-table>
    </v-card>
  </template>
  
  <script>
import axios from 'axios';
import { VDataTable } from 'vuetify/labs/VDataTable'


  export default {
    components: {
    VDataTable,
  },
    data() {
      return {
        search: '',
        itemsPerPage: 5,
        headers: [
          {
            title: 'Name',
            align: 'start',
            sortable: true,
            key: 'name',
          },
          { title: 'Amount', align: 'end', key: 'amount' },
        ],
        credits: [
          'Text 1',
          'Text 2',
          'Text 3',
          // Add more credit texts as needed
        ],
        sheetInfo: [],
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
  const data = await axios.get('https://sheets.googleapis.com/v4/spreadsheets/1pB0MFxWTrkM49JiMgpCcPba0iw2UowQIvJ1ko6QZF1A/values/details!A2%3AB?dateTimeRenderOption=FORMATTED_STRING&majorDimension=ROWS&valueRenderOption=FORMATTED_VALUE&key=AIzaSyCIv9NNmFsUsVwe3DY68-rYf-zpuRAxpB4')
  this.sheetInfo = data.data.values.map((row) => {
      return {
        name: row[0],
        amount: row[1],
      };
    });

 // this.sheetInfo = data.data.values
} catch(error) {
  alert(error)
}
        
     }
    },
  };
  </script>
  
  <style scoped>
  .credits-container {
    overflow: hidden;
    height: 50px; /* Adjust the height based on your requirements */
  }
  
  .credits-scroll {
    animation: scrollCredits 15s linear infinite;
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

 h1, h3 {
    color: white;
  }
  </style>
<template>
        <v-card flat class="ma-10">
            <div class="credits-container">
    <div class="credits-scroll">
      <div class="credit-item" v-for="(credit, index) in duplicatedCredits" :key="index">
        {{ credit }}
      </div>
    </div>
  </div>
</v-card>
  </template>
  
  <script>
  export default {
    data() {
      return {
        credits: [
          'Text 1',
          'Text 2',
          'Text 3',
          // Add more credit texts as needed
        ],
      };
    },
    computed: {
      duplicatedCredits() {
        // Duplicate the credits array to create a seamless loop
        return [...this.credits, ...this.credits];
      },
    },
  };
  </script>
  
  <style>
  .credits-container {
    overflow: hidden;
    height: 100px; /* Adjust the height based on your requirements */
  }
  
  .credits-scroll {
    animation: scrollCredits 5s linear infinite;
  }
  
  @keyframes scrollCredits {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(calc(-1 * (100% + 10px))); /* Adjust the value based on the number of credits */
    }
  }
  
  .credit-item {
    margin-bottom: 10px; /* Add spacing between each credit item */
    /* Add your desired CSS styles for each credit item */
  }
  </style>
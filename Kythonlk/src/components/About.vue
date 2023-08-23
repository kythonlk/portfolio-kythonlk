<template>
    <div class="about">
      <h2>About Me</h2>
      <p>
        Hello! My name is John Doe, and I'm a passionate WordPress developer with a strong interest in Vue.js.
        I love building creative and user-friendly websites that provide a seamless user experience.
      </p>
      <p>
        When I'm not coding, you can find me exploring new technologies, hiking, or enjoying a good book.
        I'm always looking for new opportunities to collaborate on exciting projects.
      </p>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'About',
  });
  </script>
  
  <style>
  .about {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
  }
  
  h2 {
    font-size: 28px;
    margin-bottom: 10px;
  }
  
  p {
    line-height: 1.6;
  }
  </style>
  
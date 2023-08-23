<template>
    <div class="contact">
      <h2>Contact</h2>
      <p>If you'd like to get in touch with me, feel free to reach out using the following details:</p>
      <ul>
        <li>Email: your.email@example.com</li>
        <li>Phone: +1 (123) 456-7890</li>
        <li>Website: www.yourwebsite.com</li>
      </ul>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'Contact',
  });
  </script>
  
  <style>
  .contact {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
  }
  
  h2 {
    font-size: 28px;
    margin-bottom: 10px;
  }
  
  p {
    margin-bottom: 15px;
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  li {
    margin-bottom: 10px;
  }
  </style>
  
<template>
    <nav class="menu">
      <router-link to="/about">About</router-link>
      <router-link to="/resume">Resume</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'Menu',
  });
  </script>
  
  <style>
  .menu {
    background-color: #f0f0f0;
    padding:5px 400px;
    display: flex;
    justify-content: space-evenly;
  }
  
  .menu router-link {
    margin-right: 15px;
    color: #333;
    text-decoration: none;
  }
  
  .menu router-link:hover {
    color: #007bff;
  }
  </style>
  
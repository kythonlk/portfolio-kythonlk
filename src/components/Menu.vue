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
    background-color: hsl(240, 2%, 12%);
    border: hsl(0, 0%, 22%);
    padding:5px 400px;
    display: flex;
    justify-content: space-evenly;
  }
  
  .menu router-link , .menu a{
    margin-right: 15px;
    color: #fff;
    text-decoration: none;
  }
  
  .menu router-link:hover {
    color: #fff;
  }
  </style>
  
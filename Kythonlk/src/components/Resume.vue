<template>
    <div class="resume">
      <h2>Resume</h2>
      <section class="work-experience">
        <h3>Work Experience</h3>
        <ul>
          <li>
            <strong>Company XYZ</strong> - Web Developer
            <span>June 2021 - Present</span>
            <ul>
              <li>Developed and maintained WordPress websites for clients.</li>
              <li>Implemented custom themes and plugins to meet client requirements.</li>
              <li>Collaborated with the design team to create user-friendly interfaces.</li>
            </ul>
          </li>
          <!-- Add more work experience items as needed -->
        </ul>
      </section>
  
      <section class="education">
        <h3>Education</h3>
        <ul>
          <li>
            <strong>University ABC</strong> - Bachelor's Degree in Computer Science
            <span>September 2017 - May 2021</span>
          </li>
          <!-- Add more education items as needed -->
        </ul>
      </section>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'Resume',
  });
  </script>
  
  <style>
  .resume {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
  }
  
  h2 {
    font-size: 28px;
    margin-bottom: 10px;
  }
  
  h3 {
    font-size: 24px;
    margin-bottom: 10px;
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  li {
    margin-bottom: 15px;
  }
  
  strong {
    font-weight: bold;
  }
  
  span {
    font-style: italic;
    margin-left: 10px;
  }
  </style>
  
<template>
  <article class="contact" data-page="contact">

    <header>
      <h2 class="h2 article-title">Contact</h2>
    </header>

    <section class="mapbox" data-mapbox>
      <figure>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.020828617308!2d79.91057481468954!3d6.888108295022627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25a0f40ce5ceb%3A0x918fdb17efc57757!2sBaptist%20Mawatha%203rd%20Ln%2C%20Sri%20Jayawardenepura%20Kotte%2010100!5e0!3m2!1sen!2slk!4v1659110201390!5m2!1sen!2slk"
                width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </figure>
    </section>

    <section class="contact-form">
      
      <h3 class="h3 form-title">Contact Form</h3>

      <form name="contact" netlify>
        <p>
          <label>Name <input type="text" name="name" /></label>
        </p>
        <p>
          <label>Email <input type="email" name="email" /></label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>

    </section>

    </article>

  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'Contact',
  });
  </script>
  
  <style>

  </style>
  
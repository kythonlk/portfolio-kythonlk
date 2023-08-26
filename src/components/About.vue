<template>
  <article class="about  active" data-page="about">

    <header>
      <h2 class="h2 article-title">About me</h2>
    </header>

    <section class="about-text">
      <p>
      
      I am a professional web developer and UI/UX designer.
            I have already contributed to more than 50+ website design projects.
            I use HTML, JAVASCRIPT, PHP, CSS languages to create websites and create WordPress, WIX, GOOGLE sites for low cost websites.
            I create UI/UX design using FIGMA. I can design and develop any type of website, templates, web page, blog and Portfolio.
            <br>I enjoy
            Turning complex problems into simple, elegant and intuitive designs.
      </p>

      <p>
        My job is to build your website so that it is functional and user-friendly but at the same time attractive.
        Moreover, I
        add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring
        across your
        message and identity in the most creative way. I created web design for many famous brand companies.
      </p>
    </section>


    <!--
      - service
    -->

    <section class="service">

      <h3 class="h3 service-title">What i'm doing</h3>

      <ul class="service-list">

        <li class="service-item">

          <div class="service-icon-box">
            <img src="./assets/images/icon-design.svg
            " alt="design icon" width="40">
          </div>

          <div class="service-content-box">
            <h4 class="h4 service-item-title">Web design</h4>

            <p class="service-item-text">
              The most modern and high-quality design made at a professional level.
            </p>
          </div>

        </li>

        <li class="service-item">

          <div class="service-icon-box">
            <img src="./assets/images/icon-dev.svg" alt="Web development icon" width="40">
          </div>

          <div class="service-content-box">
            <h4 class="h4 service-item-title">Web development</h4>

            <p class="service-item-text">
              High-quality development of sites at the professional level.
            </p>
          </div>

        </li>

        <li class="service-item">

          <div class="service-icon-box">
            <img src="./assets/images/icon-app.svg" alt="mobile app icon" width="40">
          </div>

          <div class="service-content-box">
            <h4 class="h4 service-item-title">Mobile apps</h4>

            <p class="service-item-text">
              Professional development of applications for iOS and Android.
            </p>
          </div>

        </li>

        <li class="service-item">

          <div class="service-icon-box">
            <img src="./assets/images/icon-photo.svg" alt="camera icon" width="40">
          </div>

          <div class="service-content-box">
            <h4 class="h4 service-item-title">Photography</h4>

            <p class="service-item-text">
              I make high-quality photos of any category at a professional level.
            </p>
          </div>

        </li>

      </ul>

    </section>


    <!--
      - testimonials
    -->

    <section class="testimonials">

      <h3 class="h3 testimonials-title">Testimonials</h3>

      <ul class="testimonials-list has-scrollbar">

        <li class="testimonials-item">
          <div class="content-card" data-testimonials-item>

            <figure class="testimonials-avatar-box">
              <img src="./assets/images/avatar-1.png" alt="Daniel lewis" width="60" data-testimonials-avatar>
            </figure>

            <h4 class="h4 testimonials-item-title" data-testimonials-title>floyydd</h4>

            <div class="testimonials-text" data-testimonials-text>
              <p>
                Very fast and eager to work I recommend him for web development.
              </p>
            </div>

          </div>
        </li>

        <li class="testimonials-item">
          <div class="content-card" data-testimonials-item>

            <figure class="testimonials-avatar-box">
              <img src="./assets/images/avatar-2.png" alt="Jessica miller" width="60" data-testimonials-avatar>
            </figure>

            <h4 class="h4 testimonials-item-title" data-testimonials-title>brune32</h4>

            <div class="testimonials-text" data-testimonials-text>
              <p>
                Kythonlk was excellent to work with, very pleased. He was efficient, responsive, generous and really took the time to understand what I was asking and communicating to him, 
                and therefore the designs and revisions were exactly what I had in mind.
                I will use Kythonlk whenever I have any further website needs.
                Thanks so much, Kythonlk!
              </p>
            </div>

          </div>
        </li>

        <li class="testimonials-item">
          <div class="content-card" data-testimonials-item>

            <figure class="testimonials-avatar-box">
              <img src="./assets/images/avatar-3.png" alt="Emily evans" width="60" data-testimonials-avatar>
            </figure>

            <h4 class="h4 testimonials-item-title" data-testimonials-title>chatterz</h4>

            <div class="testimonials-text" data-testimonials-text>
              <p>
                kavindu was hired to create a corporate identity. We were very pleased with the work done. he has a
                lot of experience
                and is very concerned about the needs of client. He has great web development skills, very fast and efficient!!
              </p>
            </div>

          </div>
        </li>

        <li class="testimonials-item">
          <div class="content-card" data-testimonials-item>

            <figure class="testimonials-avatar-box">
              <img src="./assets/images/avatar-4.png" alt="Henry william" width="60" data-testimonials-avatar>
            </figure>

            <h4 class="h4 testimonials-item-title" data-testimonials-title>Henry william</h4>

            <div class="testimonials-text" data-testimonials-text>
              <p>
                Richard was hired to create a corporate identity. We were very pleased with the work done. She has a
                lot of experience
                and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
                consectetur adipiscing
                elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
              </p>
            </div>

          </div>
        </li>

      </ul>

    </section>


    <!--
      - testimonials modal
    -->

    <div class="modal-container" data-modal-container>

      <div class="overlay" data-overlay></div>

      <section class="testimonials-modal">

        <button class="modal-close-btn" data-modal-close-btn>
          <ion-icon name="close-outline"></ion-icon>
        </button>

        <div class="modal-img-wrapper">
          <figure class="modal-avatar-box">
            <img src="./assets/images/avatar-1.png" alt="Daniel lewis" width="80" data-modal-img>
          </figure>

          <img src="./assets/images/icon-quote.svg" alt="quote icon">
        </div>

        <div class="modal-content">

          <h4 class="h3 modal-title" data-modal-title>Daniel lewis</h4>

          <time datetime="2021-06-14">14 June, 2022</time>

          <div data-modal-text>
            <p>
            Kythonlk was excellent to work with, very pleased. He was efficient, responsive, generous and really took the time to understand what I was asking and communicating to him, 
                and therefore the designs and revisions were exactly what I had in mind.
                I will use Kythonlk whenever I have any further website needs.
                Thanks so much, Kythonlk!
            </p>
          </div>

        </div>

      </section>

    </div>


    <!--
      - clients
    -->

    <section class="clients">

      <h3 class="h3 clients-title">Clients</h3>

      <ul class="clients-list has-scrollbar">

        <li class="clients-item">
          <a href="#">
            <img src="./assets/images/logo-1-color.png" alt="client logo">
          </a>
        </li>

        <li class="clients-item">
          <a href="#">
            <img src="./assets/images/logo-2-color.png" alt="client logo">
          </a>
        </li>

        <li class="clients-item">
          <a href="#">
            <img src="./assets/images/logo-3-color.png" alt="client logo">
          </a>
        </li>

        <li class="clients-item">
          <a href="#">
            <img src="./assets/images/logo-4-color.png" alt="client logo">
          </a>
        </li>

        <li class="clients-item">
          <a href="#">
            <img src="./assets/images/logo-5-color.png" alt="client logo">
          </a>
        </li>

        <li class="clients-item">
          <a href="#">
            <img src="./assets/images/logo-6-color.png" alt="client logo">
          </a>
        </li>

      </ul>

    </section>

    </article>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'About',
  });
  </script>
  
  <style>

  </style>
  
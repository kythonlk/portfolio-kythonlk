<template>
  <aside class="sidebar" :class="{ active: isSidebarActive }" data-sidebar>
    <div class="sidebar-info">
      <figure class="avatar-box">
        <img src="./assets/images/my-avatar.png" alt="Kavindu Harshana" width="80">
      </figure>
      <div class="info-content">
        <h1 class="name" title="Kavindu Harshana">Kavindu Harshana</h1>
        <p class="title">Web developer</p>
      </div>
      <button class="info_more-btn" @click="toggleSidebar">
        <span>Show Contacts</span>
        <ion-icon name="chevron-down"></ion-icon>
      </button>
    </div>
    <div class="sidebar-info_more">
      <div class="separator"></div>
      <ul class="contacts-list">
        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="mail-outline"></ion-icon>
          </div>
          <div class="contact-info">
            <p class="contact-title">Email</p>
            <a href="mailto:kythonlk@gmail.com" class="contact-link">kythonlk@gmail.com</a>
          </div>
        </li>
        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="phone-portrait-outline"></ion-icon>
          </div>
          <div class="contact-info">
            <p class="contact-title">Phone</p>
            <a href="tel:+947581954" class="contact-link">+971 566 727 648</a>
          </div>
        </li>
        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="calendar-outline"></ion-icon>
          </div>
          <div class="contact-info">
            <p class="contact-title">Birthday</p>
            <time datetime="22-07">July 22</time>
          </div>
        </li>
        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="location-outline"></ion-icon>
          </div>
          <div class="contact-info">
            <p class="contact-title">Location</p>
            <address>Abu Dhabi,UAE</address>
          </div>
        </li>
      </ul>
      <div class="separator"></div>
      <ul class="social-list">
        <li class="social-item">
          <a href="https://www.facebook.com/kythonlk" class="social-link">
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
        </li>
        <li class="social-item">
          <a href="https://twitter.com/kythonlk" class="social-link">
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
        </li>
        <li class="social-item">
          <a href="https://www.instagram.com/kythonlk/" class="social-link">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
        </li>
        <li class="social-item">
          <a href="https://www.linkedin.com/in/kythonlk/" class="social-link">
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      isSidebarActive: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarActive = !this.isSidebarActive;
    },
  },
};
</script>

<style>
/* Add your styles for the sidebar here */
</style>

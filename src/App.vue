<template>
  <div id="app">
    <div class="progress-container">
      <div class="progress-bar" id="myBar"></div>
    </div>
    <div id="navbar">
      <Header />
    </div>
    <router-view />
    <Footer />
    <!-- Go to top -->
    <button class="_top" id="scrollBtn" @click="goTop">
      <svg
        focusable="false"
        preserveAspectRatio="xMidYMid meet"
        style="will-change:transform"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 32 32"
        aria-hidden="true"
        fill="currentColor"
      >
        <path d="M16 13L6 23l1.41 1.41L16 15.83l8.59 8.58L26 23 16 13zM4 7h24v2H4z" />
      </svg>
    </button>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// When the user scrolls the page, execute myFunction
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  // ScrollBar
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
  // NavBar
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
};

export default {
  components: {
    Footer,
    Header
  },
  methods: {
    goTop() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
  },
  mounted() {
    var nua = navigator.userAgent;
    var isAndroid =
      nua.indexOf("Mozilla/5.0") > -1 &&
      nua.indexOf("Android ") > -1 &&
      nua.indexOf("AppleWebKit") > -1 &&
      nua.indexOf("Chrome") === -1;
    if (isAndroid) {
      $("select.form-control")
        .removeClass("form-control")
        .css("width", "100%");
    }
    //
    $('[data-toggle="tooltip"]').tooltip({ boundary: "window" });
    document.getElementById("scrollBtn").style.display = "none";
    //
    window.addEventListener("click", function(event) {
      if (!event.target.matches('[data-toggle="tooltip"]')) {
        $('[data-toggle="tooltip"]').tooltip("hide");
      }
    });
    //
    window.addEventListener("scroll", function(e) {
      if (
        document.body.scrollTop > 400 ||
        document.documentElement.scrollTop > 400
      ) {
        if (document.getElementById("scrollBtn")) {
          document.getElementById("scrollBtn").style.display = "block";
        }
      } else {
        if (document.getElementById("scrollBtn")) {
          document.getElementById("scrollBtn").style.display = "none";
        }
      }
    });
  }
};
</script>

<style lang="scss">
@import url("../static/fontawesome/css/all.css");
@font-face {
  font-family: "icons";
  src: url("../static/iconFont.woff2") format("woff2");
}
@font-face {
  font-family: "Aino Headline";
  src: url("../static/Aino-Headline.woff2") format("woff2");
}
@font-face {
  font-family: "Aino Regular";
  src: url("../static/Aino-Regular.woff2") format("woff2");
}
@font-face {
  font-family: "Aino Bold";
  src: url("../static/Aino-Bold.woff2") format("woff2");
}
@font-face {
  font-family: ShorelinesScriptBold;
  src: url("../static/ShorelinesScriptBold.otf") format("opentype");
}
@font-face {
  font-family: "Grand Sage";
  src: url("../static/gd-sage-bold.woff2") format("woff2");
}
@font-face {
  font-family: "Grand Sherpa";
  src: url("../static/gdsherpa-regular.woff2") format("woff2");
}
:root {
  --primary-color: #6C947A;
  --secondary-color: #FEF9F1;
  --thertiary-color: rgba(206, 225, 144, 1);
    --color-black-60: #000;
    --color-black-40: #1e1e1e;
    --color-black-20: #2b2b2b;
    --color-black-15: #848484;
    --color-black-10: rgba(30,30,30,0.15);
    --color-white-60: #e8e8e8;
    --color-white-40: #f6f6f6;
    --color-white-20: #fff;
    --color-white-10: rgba(246,246,246,0.15);
    --color-blue-60: #0e1ddd;
    --color-blue-40: #535ffd;
    --color-blue-20: #8088ff;
    --color-blue-10: rgba(83,95,253,0.15);
    --color-red-60: #e04706;
    --color-red-40: #ea6c35;
    --color-red-20: #f48e62;
    --color-red-10: rgba(234,108,53,0.15);
    --color-yellow-60: #f0d800;
    --color-yellow-40: #faee37;
    --color-yellow-20: #fcf692;
    --color-yellow-10: rgba(250,238,55,0.15);
    --color-green-60: #0cb;
    --color-green-40: #0ee8d6;
    --color-green-20: #84f1e8;
    --color-green-10: rgba(14,232,214,0.15);
    --color-wine-60: #3f0e14;
    --color-wine-40: #621d26;
    --color-wine-20: #964a54;
    --color-wine-10: rgba(98,29,38,0.15);
    --color-overlay: rgba(16,18,20,0.8);
    --color-brand-lowlight: var(--color-blue-60);
    --color-brand: var(--color-blue-40);
    --color-brand-highlight: var(--color-blue-20);
    --color-brand-transparent: var(--color-blue-10);
    --color-positive-lowlight: var(--color-green-60);
    --color-positive: var(--color-green-40);
    --color-positive-highlight: var(--color-green-20);
    --color-positive-transparent: var(--color-green-10);
    --color-negative-lowlight: var(--color-red-60);
    --color-negative: var(--color-red-40);
    --color-negative-highlight: var(--color-red-20);
    --color-negative-transparent: var(--color-red-10);
    --color-contrast: var(--color-yellow-60);
    --color-contrast-highlight: var(--color-yellow-40);
    --color-contrast-lowlight: var(--color-yellow-20);
    --color-contrast-transparent: var(--color-yellow-10);
    --color-background: var(--color-white-20);
    --color-background-dark: var(--color-black-40);
    --color-background-deep-dark: var(--color-black-60);
    --color-background-dual: var(--color-white-40);
    --color-background-overlay: var(--color-overlay);
    --color-border: var(--color-black-40);
    --color-border-brand: var(--color-blue-40);
    --color-idle: var(--color-white-10);
    --color-stroke: var(--color-white-10);
    --color-button-primary: var(--color-blue-40);
    --color-button-primary-hover: var(--color-blue-20);
    --color-button-primary-border: var(--color-blue-40);
    --color-button-secondary: var(--color-red-40);
    --color-button-secondary-hover: var(--color-red-20);
    --color-button-secondary-border: var(--color-red-40);
    --color-button-secondary-void: var(--color-red-40);
    --color-button-tertiary: #3f3f3f;
    --color-button-tertiary-hover: #797979;
    --color-input-background: transparent;
    --color-input-font: var(--color-black-40);
    --color-input-border: var(--color-black-10);
    --color-input-highlight: var(--color-blue-40);
    --color-input-placeholder: var(--color-black-10);
    --color-input-icon: var(--color-black-10);
    --color-input-error: var(--color-red-40);
    --color-input-options-hover: var(--color-blue-20);
    --color-font: var(--color-black-40);
    --color-font-light: var(--color-black-10);
    --color-font-contrast: var(--color-white-40);
    --color-font-contrast-light: rgba(246,246,246,0.59);
    --color-font-contrast-pure: var(--color-white-20);
    --color-font-legend: var(--color-black-15);
    --color-font-brand: var(--color-blue-40);
    --color-skill: var(--color-yellow-40);
    --color-skill-primary: var(--color-yellow-60);
}
#app {
  font-family: "Grand Sherpa", "Roboto", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #212121;
  overflow-x: hidden !important;
  position: relative;
  padding-top: 100px;
  font-weight: 300;
  min-height: 100vh;
  font-size:14px;
  background-color: rgba(245, 244, 247, .6);
}
img {
  transition: transform 2s cubic-bezier(0, 0, 0.18, 0.71) 0s, -webkit-transform 2s cubic-bezier(0, 0, 0.18, 0.71) 0s;
}
input:focus, textarea:focus, button:focus {
  outline:none;
  border:none;
}
@media screen and (max-width:899px) {
  h1 {
    font-size:28px!important;
  }
  h2 {
    font-size:20px!important;
  }
  h5 {
    font-size:16px!important;
  }
}
@media screen and (max-width:1024px) {
  h1 {
    font-size:32px!important;
  }
  h2 {
    font-size:24px!important;
  }
  h5 {
    font-size:19px!important;
  }
}
::selection {
  background-color: #b3d4fc;
  color: #000;
  text-shadow: none;
}
.aino-font {
  font-family: "Aino Headline", "Grand Sherpa", "Roboto", Helvetica, Arial,
    sans-serif !important;
}
.aino-bold {
  font-family: "Aino Bold", "Grand Sherpa", "Roboto", Helvetica, Arial,
    sans-serif !important;
}
.aino-regular {
  font-family: "Aino Regular", "Grand Sherpa", "Roboto", Helvetica, Arial,
    sans-serif !important;
}
.nav-link {
  border-radius:0!important;
  position:relative;
}
.activeLink {
  position:relative;
  &:after {
    content: "";
    height: 5px;
    width: 60%;
    background-color: var(--primary-color);
    position: absolute;
    bottom:-8px;
    left:0;right:0;margin-left:auto;margin-right:auto;
    // border-bottom: 4px solid yellow;
  }
}
._button_membership_link:hover {
  text-decoration: none!important;
}
._button_membership {
  transition: all .1s ease-in-out;
  &:hover {
    background-color:#1e1e1e;
    color:white;
  }
}
.__footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}

/*  */ 
.header__hamburger {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 28px;
  height: 20px;
  padding: 0;
  background: url("./assets/hamburger-menu--dark.svg") no-repeat;
  -webkit-transition: background-image .3s ease-in-out;
  transition: background-image .3s ease-in-out;
}

.hamburger__close {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 auto;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    width: 20px;
    height: 20px;
    border: 0;
    padding: 0;
    background: none;
    background-image: url("./assets/close--white.svg");
    background-position: 0 0;
    background-size: 20px 20px;
    background-repeat: no-repeat;
    cursor: pointer;
}

/* The side navigation menu */

.sidenav {
  height: 100%; /* 100% Full-height */
  width: 0; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  background-color: #111; /* Black*/
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 60px; /* Place content 60px from the top */
  transition: 0.1s; /* 0.5 second transition effect to slide in the sidenav */
}

/* The navigation menu links */
.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 16px;
  color: white;
  display: block;
  transition: 0.3s;
}

/* When you mouse over the navigation links, change their color */
.sidenav a:hover {
  color: #f1f1f1;
}

/* Position and style the close button (top right corner) */
.sidenav .closebtn {
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 36px;
  margin-left: 50px;
}

@media screen and (max-width: 1024px) {
  #app {
    padding-top: 65px;
  }
}
</style>

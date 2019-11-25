<template>
  <div>
    <!-- Header -->
    <div class="position-relative ___home">
      <div class="__header_foreground"></div>
      <div class="pb-5 pt-8 px-5 px-10-md px-10-lg px-15-xl">
        <div class="row no-gutters home__container">
          <div class="col-12 col-lg-7 order-2 __header p-8 p-10-md pt-15-lg text-white">
            <div class="__header_content">
              <h6 class="aino-font mb-1">M.DE.C</h6>
              <h1 class="font-weight-bold">Mouvement Debout Congolais</h1>
              <p
                class="pt-5 pt-10-md pb-3"
              >Créé en 2014 en République Démocratique du Congo, Mouvement Debout Congolais est un parti politique</p>
              <!-- <div class="">
                <button class="_button rounded-pill body-2 font-weight-medium px-5 py-2 _flex _center">
                  <a href="../assets/TBC_bankerslivret.pdf" download>
                    <i class="fas fa-file-pdf mr-1 title font-weight-bold"></i>
                    Télécharger notre livret
                  </a>
                  </button>
              </div> -->
              <div class="row mt-10 mt-20-md">
                <div class="col-4">
                  <h1 class="mb-0 font-weight-bold">{{year}}</h1>
                  <div class="body-1">Année de création</div>
                </div>
                <div class="col-4">
                  <h1 class="mb-0 font-weight-bold">500+</h1>
                  <div class="body-1">Membres attendus</div>
                </div>
                <div class="col-4">
                  <h1 class="mb-0 font-weight-bold">20+</h1>
                  <div class="body-1">Activités annuelles</div>
                </div>
              </div>
            </div>
            <div class="__header_overlay"></div>
          </div>
          <div class="col-12 col-lg-5 order-1 __header_container">
              <img
                src="../assets/mbole.png"
                class="__header_img mySlides"
              />
              <img
                src="../assets/mbole1.png"
                class="__header_img mySlides"
              />
              <img
                src="../assets/mbole2.png"
                class="__header_img mySlides"
              />
              <img
                src="../assets/mbole3.png"
                class="__header_img mySlides"
              />
              <img
                src="../assets/mbole4.png"
                class="__header_img mySlides"
              />
              <img
                src="../assets/mbole5.png"
                class="__header_img mySlides"
              />
          </div>
        </div>
      </div>
    </div>
    <!-- Explorer -->
    <div class="__explorer">
      <div class="px-10 px-20-lg py-20">
        <div class="d-flex flex-column justify-content-center align-items-center mb-10">
          <div class="__divider"></div>
          <div class="h1 font-weight-bold aino-font">
            Explorer
            <!-- <span class="__big_dot">.</span> -->
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-6 col-lg-3" v-for="(ex, i) in explorer" :key="i">
            <router-link
              tag="div"
              :to="ex.url"
              class="__card_explorer border w-100 p-5 text-center _flex _center mb-5"
            >
              <img :src="ex.image" alt class="__card-img" />
              <h5 class="font-weight-bold m-0 aino-regular __card-text">{{ex.name}}</h5>
              <div class="__card_overlay"></div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    myIndex: 0,
    counter: 0,
    year: 0,
    explorer: [
      {
        name: "Notre Parti Politique",
        url: "/parti-politique",
        image: require("../assets/services.jpg")
      },
      {
        name: "Actualités",
        url: "/actualites",
        image: require("../assets/_publications.jpg")
      },
      {
        name: "Activités",
        url: "/activites",
        image: require("../assets/events-bankers.jpeg")
      },
      { name: `Galeries`, url: "/equipe", image: require("../assets/museum_header_slider_4.jpg") }
    ]
  }),
  methods: {    
    onAutoCounter() {
      this.year = 0;
      var interval = setInterval(() => {
        if (this.year >= 2014) {
          clearInterval(interval);
          this.year = 2014;
        } else {
          this.year+=100;
        }
      }, 100);
    },
    carousel() {
      var i;
      var x = document.getElementsByClassName("mySlides");
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
      this.myIndex++;
      if (this.myIndex > x.length) {
        this.myIndex = 1;
      }
      x[this.myIndex - 1].style.display = "block";
      setTimeout(this.carousel, 4000);
    }
  },
  mounted() {
    this.onAutoCounter();
    this.carousel();
  }
};
</script>

<style lang="scss" scoped>
.___home {
  background-image: url(../assets/small-cross.svg),
    url(../assets/small-cross.svg), url(../assets/small-cross.svg),
    url(../assets/small-cross.svg);
  background-position: 0 48px, calc(100% - 190px) 48px, 0 calc(100% - 130px),
    calc(100% - 190px) calc(100% - 130px);
  background-repeat: no-repeat;
}

.__explorer {
  background-image: url("../assets/square-border.svg");
  background-repeat: repeat;
}

.__header_foreground {
  height: 400px;
  background: rgba(206, 225, 144, .1);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}
.__header_container {
    overflow:hidden;
}
.__header_img {
  background-color: white;
  // height: 100%;
  width: 100%;
  object-fit: cover;
  box-shadow: 0 15px 35px rgba(126, 87, 88, 0.048),
  0 5px 15px rgba(0, 0, 0, 0.07);
  overflow:hidden;
  transition-delay: all .2s;
  height: 240px;
  border-radius: none;
  object-fit: cover;
  // object-position:50% 10%;
}
.__header_img:hover {
  transform: scale(1.3);
  filter: grayscale(100%);
}
.__header {
  position:relative;
  height:600px;
  background-image:url(../assets/mbole.png);
  background-size:cover;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  box-shadow: 0 15px 35px rgba(126, 87, 88, 0.048),
    0 5px 15px rgba(0, 0, 0, 0.07);
}

.__header_overlay {
  top:0;
  left:0;
  position:absolute;
  height:100%;
  width:100%;
  background-color: rgba($color: #292929, $alpha: .95);
  z-index:1;
}
.__header_content {
  z-index:10!important;
  position:absolute;
  top:0;
  left:0;
  padding:40px;
}

.__card_overlay {
  background-image: linear-gradient(
    -180deg,
    rgba(0, 0, 0, 0) 3%,
    rgb(0, 0, 0) 100%
  ) !important;
  opacity: 0.6 !important;
  position: absolute !important;
  height: 100% !important;
  width: 100% !important;
  left: 0px !important;
  bottom: 0px !important;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
}

.__card_explorer {
  border-radius: 25px;
  height: 200px;
  position: relative;
  border: none !important;
  border-radius: 2px;
  box-shadow: 4px 4px 0 rgba(206, 225, 144, 1);
  // box-shadow: 4px 4px 0 var(--color-brand);
  transition: all 0.3s ease;
  &:hover {
    box-shadow: 0 15px 35px rgba(126, 87, 88, 0.048),
      0 5px 15px rgba(0, 0, 0, 0.07);
    cursor: pointer;
  }
}

.__card-img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 2px;
}

.__card-text {
  z-index: 2;
  color: white;
}

input.w-button {
  -webkit-appearance: button;
}

.__divider {
  width: 50%;
  width: 30%;
  height: 9px;
  max-width: 200px;
  margin-bottom: 12px;
  border-radius: 100px;
  background-color: var(--primary-color);
}
@media screen and (min-width:997px) {
  .__header_img {
    height: 100%;
  }
  .home__container {
    height:500px;
    overflow-y:hidden;
  }
  .__header {
    height: 520px;
  }
}
</style>
<template>
  <div>
    <!-- Header -->
    <div class="bg-white">
      <div class="_flex _between px-5 px-10-md pt-2" style="height:60px;">
        <div class="_flex py-2 py-md-0">
          <div class="d-block d-lg-none">
            <button name="menu" class="btn bg-transparent header__hamburger mr-3" @click="openNav"></button>
          </div>
          <div @click="$router.push('/')" class="font-weight-bold gd-sage _flex m-0 border-0 c-pointer">
            <img src="../assets/logo.png" alt class="__logo1" />
          </div>
        </div>
        <nav
          class="navbar navbar-expand-xl navbar-light navbar-nav bg-white _flex justify-content-end px-0 pb-0"
        >
        <div class="d-none d-md-flex">
          <router-link tag="a" to="/devenez-membre" class="_flex _button_membership_link">
            <button class="_button _button-outline _button_membership rounded-pill body-2 font-weight-medium _flex _center">
              <svg viewBox="64 64 896 896" data-icon="user" width="1.2em" height="1.2em" fill="currentColor" aria-hidden="true" focusable="false" class="mr-1"><path d="M858.5 763.6a374 374 0 0 0-80.6-119.5 375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"></path></svg>
              Devenir membre</button>
          </router-link>
        </div>
        </nav>
      </div>
      <nav
        class="navbar navbar-expand-md navbar-light navbar-nav bg-white px-8 d-none d-lg-flex flex-row flex-wrap justify-content-center"
        id="header-nav"
      >
        <ul class="navbar-nav">
          <li class="nav-item mr-7-md">
            <router-link class="nav-link" exact activeClass="activeLink" to="/">Accueil</router-link>
          </li>
          <li class="nav-item mr-7-md">
            <router-link class="nav-link" activeClass="activeLink" to="/parti-politique">Parti Politique</router-link>
          </li>
          <li class="nav-item mr-7-md">
            <router-link class="nav-link" activeClass="activeLink" to="/actualites">Actualités</router-link>
          </li>
          <li class="nav-item mr-7-md">
            <router-link class="nav-link" activeClass="activeLink" to="/activites">Activités</router-link>
          </li>
          <li class="nav-item mr-7-md">
            <router-link class="nav-link" activeClass="activeLink" to="/galeries">Galeries</router-link>
          </li>
          <li class="nav-item mr-7-md">
            <router-link class="nav-link" activeClass="activeLink" to="/membres">Membres</router-link>
          </li>
          <li class="nav-item mr-7-md">
            <router-link class="nav-link" activeClass="activeLink" to="/contact">Contact</router-link>
          </li>
        </ul>
      </nav>
    </div>
    <!-- Sidenav -->
    <div id="mySidenav" class="sidenav">
      <a class="closebtn c-pointer text-white" @click="closeNav">
        <div class="hamburger__close"></div>
      </a>
      <router-link tag="a" class="" to="/">Accueil</router-link>
      <router-link tag="a" class="" to="/devenir-membre">Devenir membre</router-link>
      <router-link tag="a" class="" to="/a-propos">Parti Politique</router-link>
      <router-link tag="a" class="" to="/actualites">Actualités</router-link>
      <router-link tag="a" class="" to="/activites">Activités</router-link>
      <router-link tag="a" class="" to="/galeries">Galeries</router-link>
      <router-link tag="a" class="" to="/membres">Membres</router-link>
      <router-link tag="a" class="" to="/contact">Contact</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    menuCategories: [
      { name: "Economie", slug: "economie" },
      { name: "Société", slug: "societe" },
      { name: "Internationales", slug: "internationales" },
      { name: "Sport", slug: "sport" },
      { name: "Culture", slug: "culture" },
      { name: "Environnement", slug: "environnement" },
      { name: "Musique", slug: "musique" }
    ]
  }),
  methods: {
    openNav() {
      document.getElementById("mySidenav").style.width = "300px";
    },
    closeNav() {
      document.getElementById("mySidenav").style.width = "0";
    }
  },
  mounted() {
    $(".dropdown-menu a.dropdown-toggle").on("click", function(e) {
      if (
        !$(this)
          .next()
          .hasClass("show")
      ) {
        $(this)
          .parents(".dropdown-menu")
          .first()
          .find(".show")
          .removeClass("show");
      }
      var $subMenu = $(this).next(".dropdown-menu");
      $subMenu.toggleClass("show");

      $(this)
        .parents("li.nav-item.dropdown.show")
        .on("hidden.bs.dropdown", function(e) {
          $(".dropdown-submenu .show").removeClass("show");
        });

      return false;
    });
  }
};
</script>

<style lang="scss" scoped>
.__logo1 {
  width: 90px;
}
.__logo2 {
  width:150px
}
@media screen and (max-width: 1024px) {
  .__logo1 {
    width: 70px;
  }
  .__logo2 {
    width: 120px;
  }
}
</style>
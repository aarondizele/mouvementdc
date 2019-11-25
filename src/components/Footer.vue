<template>
  <div>
    <!-- Contact -->
    <div class="__background position-relative">
      <div class="__boule"></div>
      <div class="px-5 px-10-md px-20-lg pt-10 pb-5 py-10-md">
        <h3 class="font-weight-bold _flex mb-10 aino-font">Nous contacter</h3>
        <div class="row">
          <!-- Info -->
          <div class="col-12 col-lg-5">
            <div class="mb-3">
              <div class="font-weight-bold aino-regular">Email</div>
              <div>contact@mouvementdeboutcongolais.com</div>
            </div>
            <div class="mb-3">
              <div class="font-weight-bold aino-regular">Téléphone</div>
              <div>(+243) 815517044</div>
            </div>
            <div class="mb-3">
              <div class="font-weight-bold aino-regular">Adresse</div>
              <div>162 Avenue Nguma, C/Ngaliema, Kinshasa</div>
            </div>
          </div>
          <!-- Form -->
          <div class="col-12 col-lg-7 mt-3 mt-lg-0">
            <div class="row">
              <div class="col-12 col-md-6">
                <div>
                  <input
                    type="text"
                    class="form-control rounded-0 mb-3 border-0"
                    placeholder="Nom et Prénom"
                  />
                  <input
                    type="email"
                    class="form-control rounded-0 mb-3 border-0"
                    maxlength="256"
                    placeholder="Email"
                  />
                  <div class="d-none d-md-block">
                    <button
                      class="btn btn-dark btn-block _flex rounded-0 _flex _center aino-regular"
                    >Envoyer</button>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <textarea
                  name
                  id
                  cols="8"
                  rows="5"
                  class="form-control rounded-0 border-0"
                  placeholder="Votre message"
                ></textarea>
                <div class="d-block d-md-none mt-3">
                  <button
                    class="btn btn-dark btn-block _flex rounded-0 _flex _center aino-font"
                  >Envoyer</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Newsletter -->
      <div class="px-3 px-10-md pt-5 pb-10 py-10-md px-20-lg">
        <div
          class="__newsletter d-flex flex-row flex-wrap flex-md-nowrap align-items-center justify-content-center justify-content-md-between"
        >
          <input
            type="text"
            class="border-0 w-100 __input mb-3 mb-0-md text-center text-md-left"
            placeholder="Entrer votre email"
          />
          <input
            type="submit"
            value="Abonnez-vous à notre newsletter"
            data-wait="Please wait..."
            class="__submit_newsletter aino-regular"
          />
        </div>
      </div>
    </div>
    <!-- Map -->
    <div id="googleMap" style="width: 100%; height: 400px; position: relative; overflow: hidden;">
      <img
        src="https://www.w3schools.com/w3images/map.jpg"
        alt
        style="width: 100%; height: 400px; position: relative; overflow: hidden;object-fit:cover;-webkit-object-fit:cover;"
      />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    initMap() {
      var myCenter = new google.maps.LatLng(-4.32865, 15.31331);
      var mapOptions = {
        center: myCenter,
        zoom: 12,
        scrollwheel: false,
        draggable: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      var map = new google.maps.Map(
        document.getElementById("googleMap"),
        mapOptions
      );

      var marker = new google.maps.Marker({
        position: myCenter
      });
      marker.setMap(map);
    }
  },
  mounted() {
    this.initMap();
  }
};
</script>

<style lang="scss" scoped>

.__boule {
    position: absolute;
    top: -40px;
    height: 80px;
    width: 80px;
    border-radius: 50%;
    background-color: var(--primary-color);
    right: 150px;
}
.__background {
    background-color: #151617;
    color: white;
}

.__newsletter {
    background-color: #2e3336;
    padding: 16px 22px;
    border-radius: 16px;
}

.__input {
    font-size: 22px;
    background-color: transparent;
    color: white;
}

.__submit_newsletter {
    font-size: 16px;
    // font-weight: bold;
    border: none;
    // border: 2px solid #33c588;
    border: 2px solid var(--primary-color);
    padding: 12px 22px;
    border-radius: 50px;
    color: white;
    background: var(--primary-color);
    &:hover {
        background: transparent;
        border: 2px solid var(--primary-color);
    }
}
@media screen and (max-width:767px) {
 .__boule {display:none;} 
}
</style>
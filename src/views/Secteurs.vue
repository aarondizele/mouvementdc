<template>
  <div>
    <div class="__publications">
      <div class="container __container py-10 py-15-md">
        <h1 class="font-weight-bold aino-font __publication_title">Secteurs ciblés</h1>

          <div class="row mt-10">
            <div
              class="col-12 col-md-6 col-lg-4 mb-7 mb-md-0"
              v-for="(sector, i) in [{name: 'Banque', image: 'https://media-exp1.licdn.com/media-proxy/ext?w=648&h=348&f=n&hash=BWCJxnd4Bwdo0JhZjikw2OJAG1E%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R64lhwXxxgo4eCCogGl7wgVFdOKTTGgRCSi5ZbEPzf0LZiCIOz-8R4LO2he0BpoP7g'}, {name: 'Assurance', image: 'https://media-exp1.licdn.com/media-proxy/ext?w=850&h=380&f=n&hash=n6cWF99CzwurLLpPhx9KZS4zZsM%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R69hAxU1hQk4aqXpFy19glESo-SA3W-Anj7rYDDfwm8PoSwOvb-5gRDOzNmxUd2P777L2y-Rcyiccq4'}, {name: 'Finance', image: 'https://media-exp1.licdn.com/media-proxy/ext?w=1000&h=562&f=n&hash=WnFBfvpV7sHJug5tpkATFZxRXiY%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R653QITzxtv46GM4lqlq0ZXTM3OB3O-Wjuo5bbcCSCyKp--I839oQdWGGZVz0FzLai1XX6TDcLIK4uRJ6V2393lbO2QRxApOjIitV1qu-gDGw4lgqX_ANPCaBcc2rlaP3vwfLH9c0IsUGo6-OiALMnCLFMXyhiPQtWuHMIIeZUt9o5VzxBWqIPQH4U9nN5okD4-zAm-_-_5M21f78TyWBm_U1UxWzbEPqQR6w'}]"
              :key="i"
            >
              <div class="card __card-sector __sweet_border position-relative" :style="`background-image:url('${sector.image}')`">
                <div class="__card-sector-feature font-weight-bold __z-10">{{sector.name}}</div>
                <div class="__sector_overlay"></div>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.__sector_overlay {
    background-image: linear-gradient(-180deg, rgba(0, 0, 0, 0) 3%, rgb(0, 0, 0) 100%) !important;
    opacity: 0.6 !important;
    position: absolute !important;
    height: 100% !important;
    width: 100% !important;
    left: 0px !important;
    bottom: 0px !important;
    // z-index: -1!important;
}
.__z-10 {
    z-index:10!important;
    border-top-right-radius: 10pc;
}
.__publication_title_ {
  position: relative;
  &:before {
    content: "";
    position: absolute;
    top: -10px;
    left: 0px;
    width: 80px;
    height: 2px;
    background-color: var(--color-black-20);
    pointer-events: none;
  }
}
.___card_divisor {
  height: 1.5px;
  width: 100%;
  margin-bottom: 12px;
  background-color: #ecf0f1;
}
.__image_article {
  width: 100%;
  height: 100%;
  object-fit: 100%;
  object-position: top;
}
.__sweet_border {
  box-shadow: 4px 4px 0 var(--color-yellow-40);
}
.__card-img {
  height: 260px;
  object-fit: cover;
  object-position: top;
}
.__container {
  background-image: url(../assets/small-cross.svg),
    url(../assets/small-cross.svg), url(../assets/small-cross.svg),
    url(../assets/small-cross.svg);
  background-position: 0 48px, calc(100% - 190px) 48px, 0 calc(100% - 130px),
    calc(100% - 190px) calc(100% - 130px);
  background-repeat: no-repeat;
}
.__publications {
  background-image: url("../assets/planet-segment.svg");
  position: relative;
  width: 100%;
  display: flex;
  padding: 0;
  margin: 0;
  overflow: hidden;
  background-color: var(--color-background-dual);
  background-position: 0 -110px;
  background-repeat: no-repeat;
}
.card-header-text {
  line-height: 5px;
  color: var(--color-font);
  margin-right: 8px;
}
.yellow-separator {
  flex: 1;
  height: 4px;
  background-color: var(--color-yellow-40);
  margin: auto;
}
.__card-header {
  height: 29px;
  display: flex;
  background-color: var(--color-background-dual);
}
.__card-footer {
  background-color: var(--color-background-dual);
}
</style>
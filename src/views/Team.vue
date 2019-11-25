<template>
  <div>
    <div class="__team">
      <div class="container __container py-10 py-15-md">
        <h1 class="font-weight-bold aino-font">Notre équipe</h1>
        <div class="row mt-8">
          <div class="col-12 col-md-6 col-lg-4 mb-8" v-for="(team, i) in teams" :key="i">
            <div class="___card card border-0 position-relative">
              <div class="card-header __card-header px-0">
                <div class="card-header-text body-2">
                  <div
                    class="font-weight-bold aino-font"
                  >
                    <p>{{team.role}}</p>
                  </div>
                </div>
                <div class="yellow-separator"></div>
              </div>
              <div class="__card-img">
                <img src="../assets/logo.png" alt="" class="__card-placeholder" v-if="!team.img">
                <img
                  :src="team.img"
                  alt
                  class="card-img-top" v-if="team.img"
                />
              </div>
              <div class="card-footer text-center __card-footer border rounded-0 py-5">
                <h6 class="font-weight-bold aino-font m-0">{{team.name}}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    teams: [
      {name: 'Jean-Pierre Nkanga', role: 'Présidente', img:''},
      {name: 'Jean-Pierre Nkanga', role: 'Vice-Président', img: ''},
      {name: 'Jean-Pierre Nkanga', role: 'Trésorier', img: ''},
      {name: 'Jean-Pierre Nkanga', role: 'Trésorier-Adjoint', img: ''},
      {name: 'Jean-Pierre Nkanga', role: 'Sécretaire', img: ''},
      {name: 'Jean-Pierre Nkanga', role: 'Responsable de la communication', img: ''},
      {name: 'Jean-Pierre Nkanga', role: 'Responsable de la communication - Adjoint', img: ''},
      {name: 'Jean-Pierre Nkanga', role: 'Responsable des actions sociales', img: ''},
    ]
  })
};
</script>

<style lang="scss" scoped>
.__card-img {background-color:white;width:100%;
      height: 340px;
    position:relative;overflow:hidden;
}
.__card-img img.card-img-top {
  width:100%;height:100%;object-fit: cover;
    object-position: top;
  transition-delay: all .2s;
}
.__card-img img.card-img-top:hover {
  transform: scale(1.3);
  filter: grayscale(100%);
}
.__card-placeholder {
  width:90px!important;position:absolute;top:0;left:0;right:0;bottom:0;margin:auto;filter: grayscale(100%);

}
.__container {
  background-image: url(../assets/small-cross.svg),
    url(../assets/small-cross.svg), url(../assets/small-cross.svg),
    url(../assets/small-cross.svg);
  background-position: 0 48px, calc(100% - 190px) 48px, 0 calc(100% - 130px),
    calc(100% - 190px) calc(100% - 130px);
  background-repeat: no-repeat;
}
.__team {
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
@media screen and (min-width:1024px) {
  .__card-img {
    height: 280px;
  }
}
</style>
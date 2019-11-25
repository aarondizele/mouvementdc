<template>
  <div>
    <div class="__publications">
      <div class="container __container py-10 py-15-md">
        <h1 class="font-weight-bold aino-font __publication_title">Publications</h1>
        <h6 class="aino-regular my-4">Suivez à travers nos différentes publications les actualités du club mais aussi des articles traitant des sujets propres aux secteurs de banques, assurances et finances</h6>
        <div class="row mt-10">
          <div class="col-12 mb-8" v-for="n in 10" :key="n" @click="$router.push(`/article/${n}`)">
            <div class="card w-100 border-0 __article">
              <div class="row no-gutters">
                <div class="col-12 col-md-5 col-lg-6">
                  <img src="../assets/image_1.jpeg" alt class="__image_article" />
                </div>
                <div class="col-12 col-md-7 col-lg-6 h-100 px-5 px-8-md pt-3">
                  <div class="card-body">
                    <div class="caption mb-4 _flex _between">
                        <div class="_flex">
                            <svg width="36" height="36" viewBox="0 0 1000 1000" class="_17YWs"><circle cx="500" cy="500" r="500" fill="#cccccc"></circle><path fill="#a0a09f" d="M830.8,874.927c-77.344-60.8-187.181-104.877-227.88-111.347-20.335-3.233-20.8-59.1-20.8-59.1s59.746-59.106,72.768-138.584c35.029,0,56.666-84.5,21.631-114.226C677.986,420.37,721.551,206,501,206S324.015,420.37,325.473,451.666c-35.033,29.729-13.4,114.226,21.632,114.226,13.021,79.478,72.77,138.584,72.77,138.584s-0.464,55.871-20.8,59.1c-40.883,6.5-151.537,50.943-228.934,112.176C65.84,784.12,0,649.751,0,500,0,223.858,223.858,0,500,0s500,223.858,500,500C1000,649.3,934.559,783.311,830.8,874.927ZM500,1000h0Z"></path></svg>
                            <div class="aino-font font-weight-bold ml-3">
                                <div class="_flex">
                                    <span class="mr-1">Grace Dizele</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="19"
                                        viewBox="0 0 19 19"
                                        style="fill-rule:evenodd"
                                        class="blog-icon-fill"
                                    >
                                        <path
                                        d="M15.3812,6.495914 L12.6789333,8.77258837 C12.6191333,8.84477644 12.5099333,8.85722265 12.4354,8.79997005 C12.4215333,8.79001308 12.4094,8.77756686 12.3998667,8.76429089 L9.78686667,6.14327115 C9.67766667,5.99225704 9.46186667,5.95491839 9.305,6.05863687 C9.26946667,6.08186981 9.23913333,6.11091099 9.21573333,6.14493065 L6.60013333,8.81075677 C6.5464,8.88626383 6.43893333,8.90534803 6.3592,8.85390366 C6.34446667,8.84394669 6.33146667,8.83233022 6.32106667,8.81905425 L3.61966667,6.50587098 C3.5018,6.36149485 3.28426667,6.33577266 3.13346667,6.44861837 C3.0494,6.51167921 3,6.60792997 3,6.70998895 L4,14 L15,14 L16,6.70169148 C16,6.51831719 15.8448667,6.36979232 15.6533333,6.36979232 C15.5476,6.36979232 15.4470667,6.41625821 15.3812,6.495914 Z"
                                        />
                                    </svg>
                                </div>
                                <div>mai 29 • 1 min</div>
                            </div>
                        </div>
                    </div>
                    <h4 class="mb-4 font-weight-bold">HR et Digital</h4>
                    <p
                      class="body-1"
                    >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, reiciendis molestias! Minus, itaque rem aliquid, quas unde nihil</p>
                  </div>
                  <div
                    class="card-footer border-0 bg-white caption text-muted aino-font font-weight-bold pt-0"
                  >
                    <div class="___card_divisor"></div>3 vues
                  </div>
                </div>
              </div>
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
.__publication_title_ {
    position:relative;
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
  object-fit:cover;
  width: 100%;
  height: 260px;
  object-fit: 100%;
  object-position: top;
}
.__article {
  background-color: white;
  width: 100%;
  // height: 300px;
  overflow: hidden;
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
@media screen and (min-width:767px) {
  .__article {
      height: 300px;
  }
  .__image_article {
    height:100%;
  }
}
</style>
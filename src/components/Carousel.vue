<template>
  <!-- Carousel -->
  <div align="center" class="q-mt-md q-mb-sm">
    <q-carousel :easing="overshoot" color="white" arrows height="200px">
      <!-- <q-carousel-slide img-src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_9MHI0uzEbYwv4zax2fRrvrg97-ARXFsleBJ26_nb7YajNUVq"> -->
      <q-carousel-slide>
        <div class="absolute-bottom custom-caption">
          <div class="q-display-1">First stop some some in some some but some some</div>
          <q-btn color="secondary" label="Btn Text" />
          <q-btn color="secondary" label="Btn Text" />
          <q-btn color="secondary" label="Btn Text" />
        </div>
      </q-carousel-slide>
      <q-carousel-slide img-src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_9MHI0uzEbYwv4zax2fRrvrg97-ARXFsleBJ26_nb7YajNUVq">
        <div class="absolute-bottom custom-caption">
          <div class="q-display-1">First stop some some in some some but some some</div>
          <q-btn color="secondary" label="Btn Text" />
          <q-btn color="secondary" label="Btn Text" />
          <q-btn color="secondary" label="Btn Text" />
        </div>
      </q-carousel-slide>
      <q-carousel-slide img-src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_9MHI0uzEbYwv4zax2fRrvrg97-ARXFsleBJ26_nb7YajNUVq">
        <div class="absolute-bottom custom-caption">
          <div class="q-display-1">First stop some some in some some but some some</div>
          <q-btn color="secondary" label="Btn Text" />
          <q-btn color="secondary" label="Btn Text" />
          <q-btn color="secondary" label="Btn Text" />
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script>
  import {
    easing
  } from 'quasar'
  export default {
    name: 'Carousel',
    data() {
      return {
        overshoot: easing.overshoot,
      }
    }
  }
</script>

<style>

</style>

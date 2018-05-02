<template>
  <q-page padding class="row justify-center">
    <!-- content -->
    <q-card inline style="width: 650px; max-width: 90vw;">
      <q-card-media>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_9MHI0uzEbYwv4zax2fRrvrg97-ARXFsleBJ26_nb7YajNUVq">
      </q-card-media>
      <q-card-title>
        Cafe Basilico
        <div slot="right" class="row items-center">
          <q-icon name="place" /> 250 ft
        </div>
      </q-card-title>
      <q-card-main>
        <p>$・Italian, Cafe</p>
        <p class="text-faded">Small plates, salads & sandwiches in an intimate setting.</p>
      </q-card-main>
      <q-card-separator />
      <q-card-actions>
        <q-btn flat round dense icon="event" />
        <q-btn flat label="5:30PM" />
        <q-btn flat label="7:30PM" />
        <q-btn flat label="9:00PM" />
        <q-btn flat color="primary" label="Reserve" />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script>
  export default {
    // name: 'PageName',
  }
</script>

<style>

</style>

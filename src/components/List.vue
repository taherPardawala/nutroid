<template>
  <!-- List Elements -->
  <div style="width: 650px; max-width: 90vw;" class="q-mt-md q-mb-md">
    <q-list inset-separator>
      <q-list-header>Products List</q-list-header>
      <q-item multiline>
        <q-item-side image="https://www.joann.com/on/demandware.static/-/Sites-joann-product-catalog/default/dw480d94e7/images/hi-res/master/zprd_10957884a.jpg" />
        <q-item-main label="Brunch this weekend? Brunch this weekend? Brunch this weekend?" label-lines="1" sublabel="John Doe John Doe John Doe John Doe John Doe John Doe" sublabel-lines="2" />
        <q-item-side right>
          <q-btn color="secondary" label="Remove" />
        </q-item-side>
      </q-item>
      <q-item multiline>
        <q-item-side image="https://www.joann.com/on/demandware.static/-/Sites-joann-product-catalog/default/dw480d94e7/images/hi-res/master/zprd_10957884a.jpg" />
        <q-item-main label="Brunch this weekend? Brunch this weekend? Brunch this weekend?" label-lines="2" sublabel="John Doe John Doe John Doe" />
        <q-item-side right>
          <q-btn color="secondary" label="Remove" />
        </q-item-side>
      </q-item>
    </q-list>
  </div>
</template>

<script>
  export default {
    name: 'List',
    data() {
      return {}
    }
  }
</script>

<style>

</style>

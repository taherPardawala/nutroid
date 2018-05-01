<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar color="primary" :glossy="$q.theme === 'mat'" :inverted="$q.theme === 'ios'">
        <q-btn flat dense round @click="leftDrawerOpen = !leftDrawerOpen" aria-label="Menu">
          <q-icon name="menu" />
        </q-btn>
        <q-toolbar-title>
          Nutroid
          <div slot="subtitle">Your nutrition specialist</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>
    <q-layout-drawer v-model="leftDrawerOpen" :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null">
      <q-list no-border link inset-delimiter>
        <q-list-header>Taher Pardawala</q-list-header>
        <q-item @click.native="updateRoute('/chat')">
          <q-item-side icon="school" />
          <q-item-main label="Chat with Nutroid" sublabel="Talk to Nutroid our suggestion specialist" />
        </q-item>
        <q-item @click.native="updateRoute('/products')">
          <q-item-side icon="school" />
          <q-item-main label="Our Products" sublabel="Select from a wide array of products" />
        </q-item>
      </q-list>
    </q-layout-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
  import router from '../router/index'
  export default {
    name: 'LayoutDefault',
    data() {
      return {
        leftDrawerOpen: this.$q.platform.is.desktop
      }
    },
    methods: {
      updateRoute(path) {
        router.replace(path);
      }
    }
  }
</script>

<style>

</style>

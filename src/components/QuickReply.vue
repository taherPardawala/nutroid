<template>
  <!-- Quick Replies -->
  <div id="quick-replies" style="overflow-x:auto;" class="q-mt-md q-mb-md row no-wrap">
    <q-chip @click="test" style="flex: 0 0 auto;" color="red" class="q-pa-md q-ml-sm">taher is the boss</q-chip>
    <q-chip @click="test" style="flex: 0 0 auto;" color="red" class="q-pa-md q-ml-sm">taher is the boss</q-chip>
    <q-chip @click="test" style="flex: 0 0 auto;" color="red" class="q-pa-md q-ml-sm">taher is the boss</q-chip>
    <q-chip @click="test" style="flex: 0 0 auto;" color="red" class="q-pa-md q-ml-sm">taher is the boss</q-chip>
    <q-chip @click="test" style="flex: 0 0 auto;" color="red" class="q-pa-md q-ml-sm">taher is the boss</q-chip>
    <q-chip @click="test" style="flex: 0 0 auto;" color="red" class="q-pa-md q-ml-sm">taher is the boss</q-chip>
    <q-chip @click="test" style="flex: 0 0 auto;" color="red" class="q-pa-md q-ml-sm">taher is the boss</q-chip>
    <q-chip @click="test" style="flex: 0 0 auto;" color="red" class="q-pa-md q-ml-sm">taher is the boss</q-chip>
    <q-chip @click="test" style="flex: 0 0 auto;" color="red" class="q-pa-md q-ml-sm">taher is the boss</q-chip>
    <q-chip @click="test" style="flex: 0 0 auto;" color="red" class="q-pa-md q-ml-sm">taher is the boss</q-chip>
  </div>
</template>

<script>
  export default {
    name: 'QuickReply',
    data() {
      return {}
    },
    methods: {
      test() {
        this.$emit('quickReplyValue');
      }
    }
  }
</script>

<style>

</style>

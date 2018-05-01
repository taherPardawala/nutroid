<template>
  <q-chat-message :send=message.sent :name=message.name :text=message.text>
    <q-icon name="face" size="4em" slot="avatar" />
  </q-chat-message>
</template>

<script>
  export default {
    name: 'ChatMessage',
    data() {
      return {}
    },
    props: [
      'message'
    ]
  }
</script>

<style>

</style>

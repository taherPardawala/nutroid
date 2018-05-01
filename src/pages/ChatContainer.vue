<template>
  <q-page class="row justify-center">
    <div id="chatContainer" class="q-mt-lg q-mb-xl" style="width: 650px; max-width: 90vw;">
      <q-chat-message name="Vladimir" :text="['Use your own spacing or class q-message-avatar']">
        <q-icon name="face" size="4em" slot="avatar" />
      </q-chat-message>
      <q-chat-message name="Vladimir" :text="['Use your own spacing or class q-message-avatar']">
        <q-icon name="face" size="4em" slot="avatar" />
      </q-chat-message>
      <q-chat-message name="Vladimir" :text="['Use your own spacing or class q-message-avatar']">
        <q-icon name="face" size="4em" slot="avatar" />
      </q-chat-message>
      <q-chat-message name="Vladimir" :text="['Use your own spacing or class q-message-avatar']">
        <q-icon name="face" size="4em" slot="avatar" />
      </q-chat-message>
      <q-chat-message name="Vladimir" :text="['Use your own spacing or class q-message-avatar']">
        <q-icon name="face" size="4em" slot="avatar" />
      </q-chat-message>
      <q-chat-message :sent=true name="Vladimir" :text="['Use your own spacing or class q-message-avatar']">
        <q-icon name="face" size="4em" slot="avatar" />
      </q-chat-message>
      <q-chat-message name="Vladimir" :text="['Use your own spacing or class q-message-avatar']">
        <q-icon name="face" size="4em" slot="avatar" />
      </q-chat-message>
      <q-chat-message name="Vladimir" :text="['Use your own spacing or class q-message-avatar']">
        <q-icon name="face" size="4em" slot="avatar" />
      </q-chat-message>
      <q-chat-message :sent=true name="Vladimir" :text="['Use your own spacing or class q-message-avatar']">
        <q-icon name="face" size="4em" slot="avatar" />
      </q-chat-message>
      <q-chat-message name="Vladimir" :text="['Use your own spacing or class q-message-avatar']">
        <q-icon name="face" size="4em" slot="avatar" />
      </q-chat-message>
      <q-chat-message name="Vladimir" :text="['Use your own spacing or class q-message-avatar']">
        <q-icon name="face" size="4em" slot="avatar" />
      </q-chat-message>
      <q-chat-message :sent=true name="me" :text="['This is just a test']">
        <q-icon name="face" size="4em" slot="avatar" />
      </q-chat-message>
    </div>
    <div class="round-borders	q-pl-xs q-pr-xs" style="position:fixed; bottom:4px; width: 650px; max-width: 90vw; background-color:#f4f4f4;">
      <q-input color="negative" @keyup="sendMessage" float-label="Type here...." placeholder="start typing" v-model.trim="inputMessageText" :after="[ { icon: 'arrow_forward', content: true, handler () {sendMessage({'key':'Enter'});} } ]" />
    </div>
  </q-page>
</template>

<script>
  import {
    easing
  } from 'quasar'
  export default {
    name: 'ChatContainer',
    created() {
    },
    methods: {
      sendMessage(key) {
        if (key.key === 'Enter' && this.inputMessageText !== '') {
          console.log(this.inputMessageText);
          this.clear();
        }
      },
      clear() {
        this.inputMessageText = "";
      },
      test() {
        console.log('test');
      }
    },
    data() {
      return {
        inputMessageText: '',
        overshoot: easing.overshoot,
      }
    }
  }
</script>
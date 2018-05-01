<template>
  <q-page class="row justify-center">
    <div id="chatContainer" class="q-mt-lg q-mb-xl" style="width: 650px; max-width: 90vw;">
    <chat-message v-for="(msg, key) in message" :key=key :message=msg />
    <carousel />
    <list />
    <quick-reply @quickReplyValue="test" />
    </div>
    <div class="round-borders	q-pl-xs q-pr-xs" style="position:fixed; bottom:4px; width: 650px; max-width: 90vw; background-color:#f4f4f4;">
      <q-input color="negative" @keyup="sendMessage" float-label="Type here...." placeholder="start typing" v-model.trim="inputMessageText" :after="[ { icon: 'arrow_forward', content: true, handler () {sendMessage({'key':'Enter'});} } ]" />
    </div>
  </q-page>
</template>

<script>
  
  import ChatMessage from '../components/ChatMessage.vue'
  import Carousel from '../components/Carousel.vue'
  import List from '../components/List.vue'
  import QuickReply from '../components/QuickReply.vue'
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
        message: [
          {
            sent: false,
            text: ['lorem ipsum dolor amet sit'],
            name: 'Huzefa'
          },
          {
            sent: true,
            text: ['lorem ipsum dolor amet sit'],
            name: 'Taher'
          },
          {
            sent: false,
            text: ['lorem ipsum dolor amet sit'],
            name: 'Huzefa'
          },
          {
            sent: true,
            text: ['lorem ipsum dolor amet sit'],
            name: 'Taher'
          },
          {
            sent: false,
            text: ['lorem ipsum dolor amet sit'],
            name: 'Huzefa'
          },
          {
            sent: true,
            text: ['lorem ipsum dolor amet sit'],
            name: 'Taher'
          },
        ]
      }
    },
    components: {
      'chat-message': ChatMessage,
      'carousel': Carousel,
      'quick-reply': QuickReply,
      'list': List
    }
  }
</script>
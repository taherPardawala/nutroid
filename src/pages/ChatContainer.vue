<template>
  <q-page class="row justify-center">
    <div v-scroll="scrolled" class="q-mt-lg q-mb-xl" style="width: 650px; max-width: 90vw;">
      <div v-show="loading" align="center" class="q-mt-sm q-mb-sm">
        <q-spinner-dots size="2rem" />
      </div>
      <chat-message v-for="(msg, key) in message" :key=key :message=msg />
      <carousel />
      <list />
      <quick-reply @quickReplyValue="test" />
      <!-- Used this element to scroll to the end of the chat every time -->
      <p id="scroll-here"></p>
    </div>
    <div class="q-pl-xs q-pr-xs" style="position:fixed; bottom:4px; width: 650px; max-width: 100vw; background-color:#f4f4f4;">
      <q-input color="negative" @keyup="sendMessage" float-label="Type here...." placeholder="start typing" v-model.trim="inputMessageText" :after="[ { icon: 'arrow_forward', content: true, handler () {sendMessage({'key':'Enter'});} } ]" :before="[ { icon: 'menu', content: false, handler () { showActionSheetWithIcons() } } ]"
      />
    </div>
  </q-page>
</template>

<script>
  import ChatMessage from '../components/ChatMessage.vue'
  import Carousel from '../components/Carousel.vue'
  import List from '../components/List.vue'
  import QuickReply from '../components/QuickReply.vue'
  import {
    scroll
  } from 'quasar'
  const {
    getScrollTarget,
    setScrollPosition
  } = scroll
  import {
    ActionSheet
  } from 'quasar'
  // Export default
  export default {
    name: 'ChatContainer',
    created() {
      console.log('created')
    },
    mounted() {
      this.scrollToBottom();
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
      scrollToBottom() {
        let p = document.getElementById('scroll-here');
        let target = getScrollTarget(p);
        let offset = p.offsetTop - p.scrollHeight;
        let duration = 100;
        setScrollPosition(target, offset, duration);
      },
      scrolled(position) {
        if (position === 0) {
          this.loading = true;
          var that = this
          setTimeout(function() {
            that.message.unshift({
              sent: false,
              text: ['lorem ipsum dolor amet sit'],
              name: 'ZOZO HUHU'
            }, {
              sent: true,
              text: ['lorem ipsum dolor amet sit'],
              name: 'ZOZO HUHU'
            });
            that.loading = false;
          }, 1000);
        }
      },
      showActionSheetWithIcons() {
        this.$q.actionSheet({
          title: 'Article Actions',
          grid: false,
          actions: [{
              label: 'Delete',
              icon: 'delete',
              color: 'negative',
              handler: () => {
                this.$q.notify('Deleted Article')
              }
            },
            {
              label: 'Share',
              icon: 'share',
              color: 'blue',
              handler: () => {
                this.$q.notify('Shared!')
              }
            },
            {
              label: 'Play',
              icon: 'gamepad',
              handler: () => {
                this.$q.notify('Launched Game')
              }
            },
            {}, // separator
            {
              label: 'Favorite',
              icon: 'favorite',
              color: 'secondary',
              handler: () => {
                this.$q.notify('Added to favorites')
              }
            }
          ],
          dismiss: {
            label: 'Cancel',
            handler: () => {
              this.$q.notify('Cancelled...')
            }
          }
        })
      },
      test() {
        console.log('test');
      }
    },
    data() {
      return {
        loading: false,
        inputMessageText: '',
        message: [{
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
        ],
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
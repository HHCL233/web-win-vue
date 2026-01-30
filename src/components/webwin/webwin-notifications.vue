<script setup>
import { ref } from 'vue'

const props = defineProps({ name: String, title: String, text: String, img: String })
let show = ref(false)
let logo = ref(props.img)
const showNotification = () => {
  show.value = !show.value
}
function hide() {
  if (show.value) {
    setTimeout(() => {
      show.value = false
    }, 250);
  }
}
defineExpose({ showNotification })
console.log(`%c✨Welcome to Web-Win-Vue-Notifications✨`, "\n  color: #0078d7;\n  text-shadow: 0 1px 0 #0078d7;");
</script>

<template>
  <Transition name="slide-fade">
    <div class="webwin-notification" v-if="show" @click="hide">
      <img :src="logo"
        style="object-fit:contain;margin-left: 16px;margin-right: 0px;display: inline-block;vertical-align:middle;width: 16px;height: 16px;" />
      <p class="webwin-n-name" style="display: inline-block;margin-left: 6px;">{{ name }}</p>
      <h4 class="webwin-n-text webwin-n-title">{{ title }}</h4>
      <p class="webwin-n-vulua">{{ text }}</p>
    </div>
  </Transition>
</template>


<style scoped>
.webwin-notification {
  border: rgba(163, 163, 163, 0) 4px solid;
  user-select: none;
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 400px;
  height: 150px;
  background-color: rgba(20, 20, 20, 0.95);
  transition: transform 0.35s cubic-bezier(0.00, 0.6, 0.00, 1.00);
  backdrop-filter: blur(8px);
}

.slide-fade-enter-active {
  transition: all 0.4s cubic-bezier(0.00, 0.6, 0.00, 1.00);
}

.slide-fade-leave-active {
  transition: all 0.55s cubic-bezier(0.6, 0, 0.00, 1.00);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(520px);
}

.webwin-n-text {
  color: #ffffff;
  margin-left: 16px;
}

.webwin-n-title {
  margin-top: -2.5px;
}

.webwin-n-vulua {
  margin-left: 16px;
  color: #a3a3a3;
  margin-top: -18px;
}

.webwin-notification:hover {
  outline: #464646 6px solid;
  outline-offset: -6px;
}

.webwin-notification:active {
  transform: scale(0.925);
}

.webwin-n-name {
  color: #ffffff;
}
</style>
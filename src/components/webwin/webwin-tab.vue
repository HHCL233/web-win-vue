<script setup>
import { watch, ref } from 'vue'
import winitem from './webwin-item.vue'
import wininputbox from './webwin-inputbox.vue'
console.log(`%c✨Welcome to Web-Win-Vue-Tab✨`, "\n  color: #0078d7;\n  text-shadow: 0 1px 0 #0078d7;");
const props = defineProps({ menu: Array, url: Array })
const activeIndex = ref(0)
const docState = ref(0)
const url = ref(props.url[0])

watch(activeIndex, (newIndex) => {
    console.log('activeIndex changed:', newIndex)
    console.log('new url:', props.url[newIndex])
    url.value = props.url[newIndex]
    docState.value = docState.value === 0 ? 1 : 0
    console.log('docState:', docState.value)
})
</script>

<template>
    <div class="container">
        <winitem v-model="activeIndex" :items="menu" class="item-1" />
        <Transition name="fade" mode="out-in">
            <div v-if="docState === 0" key="state0" class="iframe-container">
                <iframe :src="url" v-show="docState === 0" />
            </div>
            <div v-else-if="docState === 1" key="state1" class="iframe-container">
                <iframe :src="url" v-show="docState === 1" />
            </div>
        </Transition>
    </div>
</template>

<style lang="css">
.item-1 {
    display: inline-block;
    background-color: #e6e6e6;
}

iframe {
    border: none;
    display: inline-block;
    width: 100%;
    height: 100%;
    background-color: white;
}
.iframe-container {
    width: calc(100% - 380px);
    height: 100%;
    position: relative;
    display: inline-block;
}
.container {
    display: flex;
    height: calc(100% - 0.9px);
    background-color: white;
}

.fade-enter-active{
    transition: all 0.35s ease;
}

.fade-enter-from {
    opacity: 0;
    transform: translateY(150px);
}

iframe::-webkit-scrollbar {
  width: 4px;
  height: 16px;
  background-color: #e6e6e6;
}

iframe::-webkit-scrollbar-track {
  border-radius: 0px;
  background-color: #ffffff00;
}

iframe::-webkit-scrollbar-thumb {
  border-radius: 0px;
  background-color: #818181;
}

</style>
<script setup>
import { watch, ref } from 'vue'
import winitem from './webwin-item.vue'
const props = defineProps({ menu: Array, url: Array, titlebar: Boolean, titlebartext: String })
const activeIndex = ref(0)
const docState = ref(0)
const url = ref(props.url[0])
let bartitle = ref('')
let folded = ref('')
if (props.titlebar) {
    bartitle.value = props.titlebartext
} else {
    bartitle.value = ''
}

watch(activeIndex, (newIndex) => {
    console.log('activeIndex changed:', newIndex)
    console.log('new url:', props.url[newIndex])
    url.value = props.url[newIndex]
    docState.value = docState.value === 0 ? 1 : 0
    console.log('docState:', docState.value)
})

function update(val) {
    if (val) {
        folded.value = ''
    } else {
        folded.value = 'folded'
    }
}
</script>

<template>
    <div class="webwin-container">
        <winitem v-model="activeIndex" :items="menu" class="webwin-item-1" :bartitle="bartitle" @update="update" />
        <Transition name="fade" mode="out-in">
            <div v-if="docState === 0" key="state0" class="webwin-iframe-container" :class="folded">
                <slot>
                    <iframe :src="url" v-show="docState === 0" style="margin-top: 70px;" class="webwin-iframe" />
                </slot>
            </div>
            <div v-else-if="docState === 1" key="state1" class="webwin-iframe-container" :class="folded">
                <slot>
                    <iframe :src="url" v-show="docState === 1" style="margin-top: 70px;" class="webwin-iframe" />
                </slot>
            </div>
        </Transition>
    </div>
</template>

<style lang="css">
.webwin-item-1 {
    display: inline-block;
    background-color: #e6e6e6;
}

.webwin-iframe {
    border: none;
    display: inline-block;
    width: 100%;
    height: calc(100% - 73.9px);
    background-color: white;
}

.webwin-iframe-container {
    width: calc(100% - 380px);
    height: 100%;
    position: relative;
    display: inline-block;
    overflow: auto;
    margin-left: 24px;
}

.webwin-iframe-container.folded {
    width: calc(100% - 55px);
}

.webwin-container {
    display: flex;
    height: calc(100% - 0.9px);
    background-color: white;
}

.fade-enter-active {
    transition: all 0.35s ease;
}

.fade-enter-from {
    opacity: 0;
    transform: translateY(300px);
}

.webwin-iframe::-webkit-scrollbar {
    width: 4px;
    height: 16px;
    background-color: #e6e6e6;
}

.webwin-iframe::-webkit-scrollbar-track {
    border-radius: 0px;
    background-color: #ffffff00;
}

.webwin-iframe::-webkit-scrollbar-thumb {
    border-radius: 0px;
    background-color: #818181;
}
</style>
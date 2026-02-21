<script setup>
import winbutton from './webwin-button.vue'
import { ref } from 'vue'
let show1 = ref('')
const emit = defineEmits(['clickBotton'])
defineProps({
    items: { type: Array, required: true, default: [{ 'text': '11' }, { 'text': '11' }] },
    title: { type: String, default: 'Title' },
    content: { type: String, default: 'Content' }
})
const showDialog = () => {
    show1.value = true
}
function clickWindowsBotton(idx) {
    show1.value = false;
    emit('clickBotton', idx)
}
defineExpose({ showDialog })
</script>
<template>
    <transition>
        <div class="webwin-window-background" v-if="show1"></div>
    </transition>
    <transition>
        <div class="webwin-window" v-if="show1">
            <div style="margin-top: 24px; margin-bottom: 24px;">
                <h2 class="webwin-window-title">{{ title }}</h2>
                <div style="margin-left: 25px;margin-right: 24px;width: calc(100% - 48px);" v-html="content">
                </div>
                <div
                    style="margin-left: 24px;margin-right: 24px;width: calc(100% - 48px);display: Flex;gap: 6px;margin-top: 48px;">
                    <winbutton class="webwin-window-button" v-for="(item, idx) in items" :key="idx"
                        @click="clickWindowsBotton(idx)">{{ item.text }}
                    </winbutton>
                </div>
            </div>
        </div>
    </transition>
</template>
<style scoped>
.webwin-window-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.75);
    z-index: 998;
}

.webwin-window {
    background-color: #f2f2f2;
    margin: auto;
    min-width: 500px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: #006fd0 2px solid;
    z-index: 999;
}

.webwin-window-button {
    display: inline-block;
    width: 244px;
}

.webwin-window-title {
    font-weight: normal;
    margin-left: 24px;
    margin-right: 24px;
    width: calc(100% - 48px);
    white-space: pre-line;
    margin-bottom: 8px;
}

.v-enter-active,
.v-leave-active {
    transition: all 0.225s cubic-bezier(0, 0, 0.00, 1.00);
}

.webwin-window.v-enter-from,
.webwin-window.v-leave-to {
    opacity: 0;
    transform: scale(0.75) translate(-50%, -40%);
}

.webwin-window-background.v-enter-from,
.webwin-window-background.v-leave-to {
    opacity: 0;
}
</style>
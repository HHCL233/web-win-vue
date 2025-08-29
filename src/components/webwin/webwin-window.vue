<script setup>
import winbutton from './webwin-button.vue'
import { ref } from 'vue'
let show1 = ref('')
defineProps({
    items: { type: Array, required: true, default: [{ 'text': '11' }, { 'text': '11' }] },
    title: { type: String, default: 'Title' }
})
const showDialog = () => {
  show1.value = true
}
defineExpose({ showDialog })
</script>
<template>
    <transition>
        <div class="window-background" v-if="show1"></div>
    </transition>
    <transition>
        <div class="window" v-if="show1">
            <div style="margin-top: 24px; margin-bottom: 24px;">
                <h2 class="window-title">{{ title }}</h2>
                <div style="margin-left: 25px;margin-right: 24px;width: calc(100% - 48px);">
                    <slot></slot>
                </div>
                <div
                    style="margin-left: 24px;margin-right: 24px;width: calc(100% - 48px);display: Flex;gap: 6px;margin-top: 48px;">
                    <winbutton class="window-button" v-for="(item, idx) in items" :key="idx"
                        @click="show1= false">{{ item.text }}
                    </winbutton>
                </div>
            </div>
        </div>
    </transition>
</template>
<style scoped>
.window-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.75);
    z-index: 998;
}

.window {
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

.window-button {
    display: inline-block;
    width: 244px;
}

.window-title {
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

.window.v-enter-from,
.window.v-leave-to {
    opacity: 0;
    transform: scale(0.75) translate(-50%, -40%);
}

.window-background.v-enter-from,
.window-background.v-leave-to {
    opacity: 0;
}
</style>
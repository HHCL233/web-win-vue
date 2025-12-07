<template>
    <div style="position: relative;">
        <div class="webwin-list-box-button" @click="showbox" :class="boxactive">{{ title }}</div>
        <Transition>
            <ul class="webwin-list-box" v-if="show">
                <div style="height: 6px;"></div>
                <div style="overflow: auto;height: calc( 100% - 240px );">
                    <li v-for="(item, idx) in items" :key="idx" :class="{ active: idx === modelValue1 }"
                        @click="updateModelValue(idx)">
                        <span class="webwin-label">{{ item.name }}</span>
                    </li>
                </div>
                <div style="height: 6px;"></div>
            </ul>
        </Transition>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({
    items: { type: Array, required: true },
    modelValue: { type: Number, default: 0 },
    title: { type: String, default: 'itembox' }
})
const emit = defineEmits(['update'])

let boxactive = ref('');
let show = ref(false)
let modelValue1 = ref(props.modelValue);
let title = ref(props.title);
let top = ref(-6);
let top1 = ref(6);

function updateModelValue(idx) {
    show.value = false;
    boxactive.value = ''
    modelValue1.value = idx;
    title.value = props.items[idx].name;
    emit('update', idx);
    setTimeout(() => {
        top.value = idx * -35 - 6
        top1.value = idx * 35 + 6
    }, 100);
}

function showbox() {
    show.value = !show.value
    boxactive.value = show.value ? 'active' : '';
}
</script>

<style scoped>
.webwin-list-box-button {
    z-index: 10;
    height: 15px;
    position: relative;
    display: flex;
    align-items: center;
    padding: var(--sb-pad, 10px 15px);
    box-shadow: 0px 0px 0px 2px #999999 inset;
    width: 300px;
    background-color: white;
}

.webwin-list-box {
    z-index: 1;
    transform-origin: 0 v-bind(top1+'px');
    user-select: none;
    list-style: none;
    margin: 0;
    padding: 0;
    width: var(--sb-width, 330px);
    font-size: var(--sb-fs, 14px);
    background-color: #ebebebf3;
    position: absolute;
    backdrop-filter: blur(12.5px);

    box-shadow: 0 0 30px rgba(125, 125, 125, 0.75);
    top: v-bind(top+'px')
}

.webwin-list-box li {
    height: 15px;
    position: relative;
    display: flex;
    align-items: center;
    padding: var(--sb-pad, 10px 15px);
    transition: all 0.15s cubic-bezier(0.05, -0.01, 0.00, 1.00);
}

.webwin-list-box li:active {
    transform: scale(0.975);
}

.webwin-list-box li.active {
    background: var(--sb-hover-bg, #6db9f3);
    opacity: 0;
}

.webwin-list-box-button.active {
    background: var(--sb-hover-bg, #6db9f3);
    box-shadow: 0px 0px 0px 2px #6db9f3 inset;
}

.webwin-list-box li:hover {
    background: var(--sb-hover-bg, #cecece);
}

.webwin-list-box li.active:hover {
    background: var(--sb-hover-bg, #6db9f3);
}

.webwin-label {
    color: var(--sb-label-color, #333);
    white-space: nowrap;
    font-size: 16px;
}


.v-enter-active {
    box-shadow: 0 0 30px rgba(125, 125, 125, 0.75);
    transition: all 0.15s cubic-bezier(0.05, -0.01, 0.00, 1.00);
}

.v-leave-active {
    box-shadow: 0 0 30px rgba(125, 125, 125, 0);
    transition: all 0.075s cubic-bezier(0.05, -0.01, 0.00, 1.00);
}

.v-enter-from,
.v-leave-to {
    transform: scaleY(0)
}
</style>
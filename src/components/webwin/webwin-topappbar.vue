<template>
    <ul class="tabbar">
    <li v-for="(item, idx) in items" :key="idx" :class="{ active: idx === modelValue1 }" @click="updateModelValue(idx)" class="tabbar-item">
            <span class="label">{{ item.name }}</span>
            <span class="indicator" v-if="idx === modelValue1"></span>
    </li>
    <li style="float: right;">
        <slot></slot>
    </li>
    </ul>
</template>
<script setup>
import { ref } from 'vue'
defineEmits(['update',])
const props = defineProps({ menu: Array, activeIndex: Number })
let modelValue1 = ref(props.activeIndex || 0);
let items = ref(props.menu)

function updateModelValue(idx) {
    modelValue1.value = idx;
    emit('update', idx);
}
</script>
<style>
.tabbar {
    position: sticky;
    top:0;
    user-select: none;
    list-style: none;
    margin: 0;
    padding: 0;
    width: var(--sb-width, 330px);
    font-size: var(--sb-fs, 14px);
    background-color: #ebebebf3;
    backdrop-filter: blur(12.5px);
    width: 100%;
}

.tabbar li {
    transform-origin: center;
    height: 18px;
    position: relative;
    display: inline-block;
    align-items: center;
    padding: var(--sb-pad, 10px 15px);
}

.tabbar .tabbar-item:hover {
    background: var(--sb-hover-bg, #cecece);
}

.label {
    color: var(--sb-label-color, #333);
    white-space: nowrap;
    font-size: 16px;
    height: 18px;
}

.indicator {
    height: 2.5px;
    background-color: #006fd0;
    width: 26px;
    margin: 0 auto;
    display: block;
    margin-top: 6px;
}
</style>
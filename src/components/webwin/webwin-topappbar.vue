<template>
    <ul class="topappbar">
        <li v-for="(item, idx) in items" :key="idx" :class="{ active: idx === modelValue1 }" @click="updateLeft(idx)"
            class="topappbar-item">
            <span class="topappbar-label">{{ item.name }}</span>
            <span class="topappbar-indicator" v-if="idx === modelValue1"></span>
        </li>
        <li v-for="(rightMenu, idx) in rightMenus" :key="idx" @click="updateRight(idx)" class="topappbar-item" style="float: right;">
            <span class="topappbar-label">{{ rightMenu.name }}</span>
        </li>
    </ul>
</template>
<script setup>
import { ref, defineEmits } from 'vue'
const emit = defineEmits(['update'])
const props = defineProps({ items: Array, activeIndex: Number, rightMenu: { type: Array, default: [] } })
let modelValue1 = ref(props.activeIndex || 0);
let items = ref(props.items)
let rightMenus = ref(props.rightMenu)

function updateLeft(idx) {
    modelValue1.value = idx;
    emit('update', [idx, 'left']);
}

function updateRight(idx) {
    modelValue1.value = idx;
    emit('update', [idx, 'right']);
}
</script>
<style>
.topappbar {
    position: sticky;
    top: 0;
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

.topappbar li {
    transform-origin: center;
    height: 22px;
    position: relative;
    display: inline-block;
    align-items: center;
    padding: var(--sb-pad, 10px 15px);
}

.topappbar .topappbar-item:hover {
    background: var(--sb-hover-bg, #cecece);
}

.topappbar-label {
    color: var(--sb-topappbar-label-color, #333);
    white-space: nowrap;
    font-size: 16px;
}

.topappbar-indicator {
    height: 2.5px;
    background-color: #006fd0;
    width: 26px;
    margin: 0 auto;
    display: block;
    margin-top: 8px;
}
</style>
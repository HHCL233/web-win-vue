<template>
    <ul class="webwin-topappbar">
        <KeepAlive>
            <li :is="activeComponent" v-for="(item, idx) in items" :key="idx" :class="{ active: idx === modelValue1 }"
                @click="updateLeft(idx)" class="webwin-topappbar-item">
                <span class="webwin-topappbar-label">{{ item.name }}</span>
                <span class="webwin-topappbar-indicator" v-if="idx === modelValue1"></span>
                <span class="webwin-topappbar-indicator-not" v-if="idx != modelValue1"></span>
            </li>
        </KeepAlive>
        <li v-for="(rightMenu, idx) in rightMenus" :key="idx" @click="updateRight(idx)" class="webwin-topappbar-item"
            style="float: right;">
            <span class="webwin-topappbar-label">{{ rightMenu.name }}</span>
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
    emit('update', [idx, 'right']);
}
</script>
<style scoped>
.webwin-topappbar {
    position: sticky;
    top: 0;
    user-select: none;
    list-style: none;
    margin: 0;
    padding: 0;
    width: 330px;
    font-size: 14px;
    background-color: #ebebebf3;
    backdrop-filter: blur(12.5px);
    width: 100%;
}

.webwin-topappbar li {
    transform-origin: center;
    position: relative;
    display: inline-block;
    align-items: center;
    padding: 10px 15px 0 15px;
}

.webwin-topappbar .webwin-topappbar-item:hover {
    background: #cecece;
}

.webwin-topappbar-label {
    color: #333;
    white-space: nowrap;
    font-size: 16px;
}

.webwin-topappbar-indicator {
    height: 2.5px;
    background-color: #006fd0;
    width: 26px;
    margin: 0 auto;
    display: block;
    margin-top: 8px;
}

.webwin-topappbar-indicator-not {
    height: 2.5px;
    background-color: #006fd000;
    width: 26px;
    margin: 0 auto;
    display: block;
    margin-top: 8px;
}

@media (prefers-color-scheme: dark) {
    .webwin-topappbar {
        background-color: #363636;
        color: #ffffff;
    }

    .webwin-topappbar .webwin-topappbar-item:hover {
        background: #252525;
        color: #ffffff;
    }

    .webwin-topappbar-label {
        color: #ffffff;
    }

    .webwin-topappbar-indicator {
        background-color: #4b99da;
    }
}
</style>
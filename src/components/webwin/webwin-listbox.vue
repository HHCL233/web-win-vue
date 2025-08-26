<template>
    <div style="position: relative;">
    <div class="list-box-button" @click="show = !show">{{ title }}</div>
    <Transition>
        <ul class="list-box" v-if="show">
            <div style="overflow: auto;height: calc( 100% - 240px );">
                <li v-for="(item, idx) in items" :key="idx" :class="{ active: idx === modelValue1 }"
                    @click="updateModelValue(idx)">
                    <span class="label">{{ item.name }}</span>
                </li>
            </div>
        </ul>
    </Transition>
    </div>
</template>

<script setup>
import { ref } from 'vue'
console.log(`%c✨Welcome to Web-Win-Vue-Item✨`, "\n  color: #0078d7;\n  text-shadow: 0 1px 0 #0078d7;");
const props = defineProps({
    items: { type: Array, required: true },
    modelValue: { type: Number, default: 0 },
    title: { type: String, default: 'itembox' }
})
defineEmits(['update:modelValue'])

let show = ref(false)
let modelValue1 = ref(props.modelValue);
let title = ref(props.title);
let top = ref(0);
let top1 = ref(0);

function updateModelValue(idx) {
    show.value = false;
    modelValue1.value = idx;
    title.value = props.items[idx].name;
    //emit('update:modelValue', idx);
    setTimeout(() => {
    top.value = idx * -40
top1.value = idx * 40 + 17.5
    }, 200);
}
</script>

<style scoped>
.list-box-button {
    user-select: none;
    resize: none;
    vertical-align: middle;
    display: inline-block;
    min-width: 300px;
    outline: 2.75px solid #999999;
    outline-offset: -2.75px;
    height: 17px;
    font-size: 18px;
    cursor: default;
    padding: 9px 15px;
    background: var(--primary-color, rgb(255, 255, 255));
    color: rgb(0, 0, 0);
    border: none;
    font-size: 16px;
    vertical-align: top;
    white-space: pre-wrap;
    position: relative;
}

.list-box {
    z-index: 999;
    transform-origin: 0 v-bind(top1+'px');
    user-select: none;
    list-style: none;
    margin: 0;
    padding: 0;
    width: var(--sb-width, 330px);
    font-size: var(--sb-fs, 14px);
    background-color: #ebebeb;
    position: absolute;
    top:v-bind(top+'px')
}

.list-box li {
    position: relative;
    display: flex;
    align-items: center;
    padding: var(--sb-pad, 10px 16px);
}

.list-box li.active {
    background: var(--sb-hover-bg, #6db9f3);
}

.list-box li:hover {
    background: var(--sb-hover-bg, #cecece);
}

.list-box li.active:hover {
    background: var(--sb-hover-bg, #6db9f3);
}

.icon {
    width: var(--sb-icon-size, 20px);
    height: var(--sb-icon-size, 38px);
    margin-right: var(--sb-icon-mr, 12px);
    color: var(--sb-icon-color, #333);
    flex-shrink: 0;
}

.label {
    color: var(--sb-label-color, #333);
    white-space: nowrap;
    font-size: 16px;
}

@media (prefers-color-scheme: dark) {
    .list-box {
        user-select: none;
        list-style: none;
        margin: 0;
        padding: 0;
        width: var(--sb-width, 380px);
        font-size: var(--sb-fs, 14px);
        background: var(--sb-hover-bg, #1b1b1b);
    }

    .list-box li {
        position: relative;
        display: flex;
        align-items: center;
        padding: var(--sb-pad, 10px 16px);
        transition: background 0.2s;

    }

    .list-box li:hover {
        background: var(--sb-hover-bg, #252525);
    }

    .icon {
        width: var(--sb-icon-size, 20px);
        height: var(--sb-icon-size, 38px);
        margin-right: var(--sb-icon-mr, 12px);
        color: var(--sb-icon-color, #ffffff);
        flex-shrink: 0;
    }

    .label {
        color: var(--sb-label-color, #ffffff);
        white-space: nowrap;
        font-size: 16px;
    }

    .title {
        color: #ffffff;
    }
}

.v-enter-active,
.v-leave-active {
    transition: all 0.15s cubic-bezier(0.05, -0.01, 0.00, 1.00);
}

.v-enter-from,
.v-leave-to {
    transform: scaleY(0)
}
</style>
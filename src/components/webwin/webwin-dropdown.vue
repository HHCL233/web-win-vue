<template>
    <div>
        <!-- 将背景移出ul，放在同级 -->
        <Transition>
            <div v-if="show" class="webwin-dropdown-container">
                <div class="webwin-dropdown_backgroud" @click="show = false"></div>
                <ul class="webwin-dropdown">
                    <div style="height: 6px;"></div>
                    <div style="overflow: auto;height: calc( 100% - 240px );">
                        <li v-for="(item, idx) in items" :key="idx" :class="{ active: idx === modelValue1 }"
                            @click="updateModelValue(idx)">
                            <span class="webwin-label">{{ item.name }}</span>
                        </li>
                    </div>
                    <div style="height: 6px;"></div>
                </ul>
            </div>
        </Transition>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({
    items: { type: Array, required: true },
})
const emit = defineEmits(['update'])


let x = ref(0)
let y = ref(0)
let boxactive = ref('');
let show = ref(false)
let modelValue1 = ref(0);
let title = ref(props.title || '');

function updateModelValue(idx) {
    show.value = false;
    boxactive.value = ''
    modelValue1.value = idx;
    title.value = props.items[idx].name;
    emit('update', idx);
}

const showbox = (x1, y1) => {
    show.value = !show.value
    boxactive.value = show.value ? 'active' : '';
    x.value = x1
    y.value = y1
}

defineExpose({ showbox })
</script>

<style scoped>
.webwin-dropdown-container {
    transform-origin: center;
}

.webwin-dropdown {
    z-index: 101;
    user-select: none;
    list-style: none;
    margin: 0;
    padding: 0;
    width: var(--sb-width, 330px);
    font-size: var(--sb-fs, 14px);
    background-color: #ebebebf3;
    position: fixed;
    backdrop-filter: blur(12.5px);
    left: v-bind(x + 'px');
    top: v-bind(y + 'px');
    border: 2px solid #cdcdcd;
}

.webwin-dropdown_backgroud {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0);
    z-index: 100;
}

.webwin-dropdown li {
    height: 18px;
    position: relative;
    display: flex;
    align-items: center;
    padding: var(--sb-pad, 10px 15px);
    transition: transform 0.15s cubic-bezier(0.05, -0.01, 0.00, 1.00);
}

.webwin-dropdown li:active {
    transform: scale(0.975);
}

.webwin-dropdown li:hover {
    background: var(--sb-hover-bg, #cecece);
}

.webwin-label {
    color: var(--sb-label-color, #333);
    white-space: nowrap;
    font-size: 16px;
}

.v-enter-active {
    transition: all 0.15s cubic-bezier(0.05, -0.01, 0.00, 1.00);
    position: fixed;
}

.v-leave-active {
    box-shadow: 0 0 30px rgba(125, 125, 125, 0);
    transition: all 0.15s cubic-bezier(0.05, -0.01, 0.00, 1.00);
    position: fixed;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
    position: fixed;
}
</style>
<template>
    <div v-for="(item, idx) in items" :key="idx" v-bind:class="{ active: activeItem.indexOf(idx) != -1 }"
        class="webwin-listview" @click="itemClick(idx)">
        <div class="webwin-listview-context">
            {{ item[context] }}
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

interface ListItem {
    context: string;
}

const emit = defineEmits(['update'])
const props = defineProps({
    items: {
        type: Array as () => ListItem[],
        required: false,
        default: () => []
    },
    activeIndex: Array<number>,
    isMultiple: Boolean
})

const context = ref<keyof ListItem>('context');

let items = ref(props.items || []);
const activeItem = ref<number[]>(props.activeIndex ?? [0])

function itemClick(idx: number) {
    console.log(1)
    if (props.isMultiple) {
        const currentIndex = activeItem.value.indexOf(idx)
        if (currentIndex !== -1) {
            activeItem.value = activeItem.value.filter(item => item !== idx)
        } else {
            activeItem.value.push(idx)
        }
    } else {
        activeItem.value = [idx]
    }
    emit('update', activeItem.value);
}
</script>

<style>
.webwin-listview {
    height: 64px;
    width: 100%;
    background-color: white;
    user-select: none;
    transition: 0.25s transform cubic-bezier(0.075, 0.82, 0.165, 1);
}

.webwin-listview:hover {
    background-color: #e7e7ea;
}

.webwin-listview.active {
    background-color: #96c5ee;
}

.webwin-listview.active:hover {
    background-color: #66aceb;
}

.webwin-listview-context {
    transition: 0.25s transform cubic-bezier(0.075, 0.82, 0.165, 1);
}

.webwin-listview:active {
    * {
        transform: scale(0.99);
    }
}
</style>
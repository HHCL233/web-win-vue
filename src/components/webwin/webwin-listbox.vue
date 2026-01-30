<template>
    <div v-for="(item, idx) in items" :key="idx" v-bind:class="{ active: activeItem.indexOf(idx) != -1 }"
        class="webwin-listbox" @click="itemClick(idx)">
        <div class="webwin-listbox-context">
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
.webwin-listbox {
    height: 64px;
    width: 100%;
    background-color: #e7e7e7;
    user-select: none;
}

.webwin-listbox:hover {
    background-color: #e7e7ea;
}

.webwin-listbox.active {
    background-color: #96c5ee;
}

.webwin-listbox.active:hover {
    background-color: #66aceb;
}
</style>
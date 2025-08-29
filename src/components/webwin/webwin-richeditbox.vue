<style>
.uwprichrditbox {
    resize: none;
    vertical-align: middle;
    display: inline-block;
    min-width: 300px;
    outline: 2.75px solid #999999;
    outline-offset: -2.75px;
    line-height: 18px;
    font-size: 18px;
    height: auto;
    cursor: text;
    padding: 9.5px 14px;
    background: var(--primary-color, rgb(255, 255, 255));
    color: rgb(0, 0, 0);
    border: none;
    font-size: 16px;
    vertical-align: top;
    white-space: pre-wrap;
    
}

.uwprichrditbox:focus {
    outline: 2.75px solid #0078D4;
    outline-offset: -2.75px;
}

.uwprichrditbox:disabled {
    background-color: #CCCCCC;
    outline: 2.75px solid #CCCCCC;
    cursor: not-allowed;
    color: #7A7A7A
}

.uwprichrditbox[data-placeholder]:empty:before {
    content: attr(data-placeholder);
    color: rgb(102, 102, 102);
}
@media (prefers-color-scheme: dark) {
    .uwprichrditbox {
        color: rgb(145, 145, 145);
        background: var(--primary-color, rgb(0, 0, 0));
    }
}
</style>

<template>
    <div
        ref="editableDiv"
        class="uwprichrditbox"
        contenteditable="plaintext-only"
        :data-placeholder="placeholder1"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
    ></div>
</template>

<script setup lang="ts">
import { ref, watch, nextTick, onMounted } from 'vue'

const props = defineProps({ 
    value: { type: String, default: '' }, 
    placeholder: { type: String, default: '' }
})

const emit = defineEmits(['update:value', 'change'])

const editableDiv = ref<HTMLElement | null>(null)
const placeholder1 = ref(props.placeholder)
const lastValue = ref(props.value)

onMounted(() => {
    if (editableDiv.value) {
        editableDiv.value.textContent = props.value || ''
        lastValue.value = props.value || ''
    }
})

const handleInput = (e: Event) => {
    if (!editableDiv.value) return
    
    const text = editableDiv.value.textContent || ''
    emit('update:value', text)
    
    nextTick(() => {
        if (editableDiv.value) {
            const range = document.createRange()
            const selection = window.getSelection()
            range.selectNodeContents(editableDiv.value)
            range.collapse(false)
            selection?.removeAllRanges()
            selection?.addRange(range)
        }
    })
}

const handleFocus = (e: Event) => {
    const target = e.target as HTMLElement
    if (target.textContent === props.placeholder) {
        target.textContent = ''
    }
}

const handleBlur = (e: Event) => {
    const target = e.target as HTMLElement
    const currentValue = target.textContent || ''
    
    if (currentValue !== lastValue.value) {
        emit('change', {
            target: {
                value: currentValue
            }
        })
        lastValue.value = currentValue
    }
    
    if (currentValue.trim() === '') {
        target.textContent = ''
    }
}

</script>
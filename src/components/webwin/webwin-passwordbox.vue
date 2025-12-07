<style scoped>
.webwin-uwppassword {
    vertical-align: middle;
    display: inline-block;
    min-width: 300px;
    outline: 2.75px solid #999999;
    outline-offset: -2.75px;
    line-height: 18px;
    height: 18px;
    padding: 10px 14px;
    background: var(--primary-color, rgb(255, 255, 255));
    color: rgb(0, 0, 0);
    border: none;
    font-size: 16px;
}

.webwin-uwppassword:focus {
    outline: 2.75px solid #0078D4;
    outline-offset: -2.75px;
}

.webwin-uwppassword:disabled {
    background-color: #CCCCCC;
    outline: 2.75px solid #CCCCCC;
    cursor: not-allowed;
    color: #7A7A7A
}

@media (prefers-color-scheme: dark) {
    .webwin-uwppassword {
        color: rgb(145, 145, 145);
        background: var(--primary-color, rgb(0, 0, 0));
    }
}
</style>

<template>
    <input type="password" name="fname" class="webwin-uwppassword" :value="value1" :placeholder="placeholder1"
        @change="$emit('@change', $event)">
</template>

<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps({ value: String, placeholder: String })
const value1 = ref(props.value)
const placeholder1 = ref(props.placeholder)
</script>
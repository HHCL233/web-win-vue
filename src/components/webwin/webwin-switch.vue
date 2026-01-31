<template>
    <label class="webwin-switch">
        <input type="checkbox" class="webwin-switch-checkbox">
        <span class="webwin-switch-slider"></span>
    </label>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps(
    {
        'isOn': Boolean
    }
)
</script>
<style>
.webwin-switch {
    position: relative;
    display: inline-block;
    width: 58px;
    height: 26px;
}

.webwin-switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

.webwin-switch-slider {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgb(255, 255, 255);
    transition: 0.25s all cubic-bezier(1, 0, 0, 1);
    border-radius: 34px;
    outline: 4px solid black;
    outline-offset: -4px;
}

.webwin-switch-slider:before {
    position: absolute;
    content: "";
    height: 14px;
    width: 14px;
    left: 8px;
    bottom: 6px;
    background-color: rgb(0, 0, 0);
    transition: 0.25s all cubic-bezier(1, 0, 0, 1);
    border-radius: 50%;
}

.webwin-switch-checkbox:checked+.webwin-switch-slider {
    background-color: #0077d6;
    outline: 4px solid #0077d6;
}

.webwin-switch-checkbox:checked+.webwin-switch-slider:before {
    background-color: white;
}

.webwin-switch-checkbox:checked+.webwin-switch-slider:before {
    transform: translateX(30px);
}
</style>
<template>
    <div class="progress-bar">
        <div class="progress" :style="{ width: progress + '%' }"></div>
    </div>
</template>
<script setup>
console.log(`%c✨Welcome to Web-Win-Vue-ProgressBar✨`, "\n  color: #0078d7;\n  text-shadow: 0 1px 0 #0078d7;");
import { ref } from 'vue'
defineProps({
  progress: { type: Number, default: 0 },
})
</script>
<style scoped>
.progress-bar {
  width: 100%;
  height: 5px;
  background-color: #e0e0e0;
}
.progress {
    background-color: #006fd0;
    height: 5px;
    transition: width 0.3s ease;
}
</style>
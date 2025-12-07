<template>
  <div class="webwin-progress-bar">
    <div class="webwin-progress" :style="{ width: progress + '%' }"></div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
defineProps({
  progress: { type: Number, default: 0 },
})
</script>
<style scoped>
.webwin-progress-bar {
  width: 100%;
  height: 5px;
  background-color: #e0e0e0;
}

.webwin-progress {
  background-color: #006fd0;
  height: 5px;
  transition: width 0.25s cubic-bezier(0, 0, 0.00, 1.00);
}
</style>
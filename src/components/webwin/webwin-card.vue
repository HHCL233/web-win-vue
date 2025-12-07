<template>
  <div class="webwin-card">
    <slot></slot>
  </div>
</template>
<style scoped>
.webwin-card {
  height: 300px;
  width: 300px;
  background: #e4e4e4;
}

@media (prefers-color-scheme: dark) {
  .webwin-card {
    background-color: #1a1a1a;
    color: #ffffff;
  }
}
</style>
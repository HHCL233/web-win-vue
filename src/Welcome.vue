<template>
    <div class="start"></div>
    <h1 class="good">Welcome to Web-Win-Vue!</h1>
    <div class="middle">
    </div>
</template>
<script setup lang="ts">
import type { wintile } from './components/webwin';
</script>
<style scoped>
.good {
    margin: 0 auto;
    text-align: center;
}

.start {
    height: 50px;
}

h1 {
    font-weight: normal;
}

.middle {
    margin: auto;
    width: 1000px;
    margin-top: 75px;
}

.middle .webwin-tile {
    margin: 6px;
    display: inline-block;
}
</style>
<template>
    <div class="webwin-tile" :class="size" :style="tileStyle" @mousemove="handleMouseMove"
        @mouseenter="isHovered = true" @mouseleave="handleMouseLeave">
        <div class="webwin-tile-content">
            <div class="webwin-tile-icon">
                <slot name="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path fill="white" :d="icon" />
                    </svg>
                </slot>
            </div>
            <div class="webwin-tile-title">{{ title }}</div>
        </div>

        <div class="webwin-glow-border" :style="glowStyle"></div>

        <div class="webwin-pointer-glow" :style="pointerGlowStyle"></div>
    </div>
</template>

<script setup lang="ts">
console.log(`%c✨Welcome to Web-Win-Vue-Tile✨`, "\n  color: #0078d7;\n  text-shadow: 0 1px 0 #0078d7;");
import { ref, computed } from 'vue';

interface Props {
    size?: string;
    color?: string;
    title?: string;
    icon?: string;
    glowColor?: string;
    glowRadius?: number;
}

const props = withDefaults(defineProps<Props>(), {
    size: 'medium',
    color: '#0078d7',
    title: 'App',
    icon: '',
    glowColor: 'rgba(255,255,255,0.5)',
    glowRadius: 60
});

const isHovered = ref(false);
const mouseX = ref(0);
const mouseY = ref(0);
const glowOpacity = ref(0);

const tileStyle = computed(() => {
    return {
        '--tile-color': props.color,
        '--glow-color': props.glowColor,
        '--glow-radius': `${props.glowRadius}px`
    };
});

const glowStyle = computed(() => {
    return {
        '--x': `${mouseX.value}px`,
        '--y': `${mouseY.value}px`,
        opacity: glowOpacity.value
    };
});

const pointerGlowStyle = computed(() => {
    return {
        '--x': `${mouseX.value}px`,
        '--y': `${mouseY.value}px`,
        opacity: isHovered.value ? 1 : 0
    };
});

const handleMouseMove = (e: MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    mouseX.value = e.clientX - rect.left;
    mouseY.value = e.clientY - rect.top;

    const minDistance = Math.min(
        mouseX.value,
        rect.width - mouseX.value,
        mouseY.value,
        rect.height - mouseY.value
    );

    const maxDistance = props.glowRadius;
    glowOpacity.value = Math.max(0, (maxDistance - minDistance) / maxDistance);
};

const handleMouseLeave = () => {
    isHovered.value = false;
    glowOpacity.value = 0;
};
</script>

<style scoped>
.webwin-tile {
    --tile-color: #0078d7;
    --glow-color: rgb(0, 0, 0);
    --glow-radius: 20px;

    position: relative;
    background-color: var(--tile-color);
    color: rgb(255, 255, 255);
    overflow: hidden;
    transition: all 0.15s cubic-bezier(0.78, 0.12, 0.00, 1);
}

.webwin-tile.small {
    width: 70px;
    height: 70px;
}

.webwin-tile.medium {
    width: 150px;
    height: 150px;
}

.webwin-tile.wide {
    width: 310px;
    height: 150px;
}

.webwin-tile.large {
    width: 310px;
    height: 310px;
}

.webwin-tile-content {
    position: relative;
    z-index: 2;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
}

.webwin-tile-icon {
    font-size: 24px;
    margin-bottom: 8px;
}

.webwin-tile-title {
    user-select: none;
    font-size: 12px;
    font-weight: bold;
    position: absolute;
    bottom: 26px;
    left: 8px;
}

.webwin-glow-border {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    z-index: 1;

    background: radial-gradient(circle at var(--x) var(--y),
            var(--glow-color) 0%,
            transparent var(--glow-radius));

    -webkit-mask:
        linear-gradient(#fff, #fff) content-box,
        linear-gradient(#fff, #fff);
    mask:
        linear-gradient(#fff, #fff) content-box,
        linear-gradient(#fff, #fff);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    padding: 4px;
    transition: opacity 0.2s ease;
}

.webwin-pointer-glow {
    position: absolute;
    top: calc(var(--y) - 50px);
    left: calc(var(--x) - 50px);
    width: 150px;
    height: 150px;
    border-radius: 60%;
    background: radial-gradient(circle,
            var(--glow-color) 0%,
            transparent 70%);
    pointer-events: none;
    z-index: 1;
    transition: opacity 0.25s ease;
}

.webwin-tile:active {
    transform: scale(0.9);
}
</style>
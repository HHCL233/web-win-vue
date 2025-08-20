<template>
    <div class="tile" :class="size" :style="tileStyle" @mousemove="handleMouseMove" @mouseenter="isHovered = true"
        @mouseleave="handleMouseLeave">
        <div class="tile-content">
            <div class="tile-icon">
                <slot name="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="white" :d="icon"/></svg>
                </slot>
            </div>
            <div class="tile-title">{{ title }}</div>
        </div>

        <div class="glow-border" :style="glowStyle"></div>

        <div class="pointer-glow" :style="pointerGlowStyle"></div>
    </div>
</template>

<script>
console.log(`%c✨Welcome to Web-Win-Vue-Tile✨`, "\n  color: #0078d7;\n  text-shadow: 0 1px 0 #0078d7;");
export default {
    props: {
        size: { default: 'medium' },
        color: { default: '#0078d7' },
        title: { default: 'App' },
        icon: { default: '' },
        glowColor: { default: 'rgba(255,255,255,0.5)' },
        glowRadius: { default: 60 }
    },
    data() {
        return {
            isHovered: false,
            mouseX: 0,
            mouseY: 0,
            glowOpacity: 0
        }
    },
    computed: {
        tileStyle() {
            return {
                '--tile-color': this.color,
                '--glow-color': this.glowColor,
                '--glow-radius': `${this.glowRadius}px`
            }
        },
        glowStyle() {
            return {
                '--x': `${this.mouseX}px`,
                '--y': `${this.mouseY}px`,
                opacity: this.glowOpacity
            }
        },
        pointerGlowStyle() {
            return {
                '--x': `${this.mouseX}px`,
                '--y': `${this.mouseY}px`,
                opacity: this.isHovered ? 1 : 0
            }
        }
    },
    methods: {
        handleMouseMove(e) {
            const rect = e.currentTarget.getBoundingClientRect()
            this.mouseX = e.clientX - rect.left
            this.mouseY = e.clientY - rect.top

            const minDistance = Math.min(
                this.mouseX,
                rect.width - this.mouseX,
                this.mouseY,
                rect.height - this.mouseY
            )

            const maxDistance = this.glowRadius
            this.glowOpacity = Math.max(0, (maxDistance - minDistance) / maxDistance)
        },
        handleMouseLeave() {
            this.isHovered = false
            this.glowOpacity = 0
        }
    }
}
</script>

<style scoped>
.tile {
    --tile-color: #0078d7;
    --glow-color: rgba(255, 255, 255, 0.459);
    --glow-radius: 20px;

    position: relative;
    background-color: var(--tile-color);
    color: rgb(255, 255, 255);
    overflow: hidden;
    transition: all 0.25s cubic-bezier(0.78, 0.12, 0.00, 1.01);
}

.tile.small {
    width: 70px;
    height: 70px;
}

.tile.medium {
    width: 150px;
    height: 150px;
}

.tile.wide {
    width: 310px;
    height: 150px;
}

.tile.large {
    width: 310px;
    height: 310px;
}

.tile-content {
    position: relative;
    z-index: 2;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
}

.tile-icon {
    font-size: 24px;
    margin-bottom: 8px;
}

.tile-title {
    user-select: none;
    font-size: 12px;
    font-weight: bold;
    position: absolute;
    bottom: 26px;
    left: 8px;
}

.glow-border {
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

.pointer-glow {
    position: absolute;
    top: calc(var(--y) - 50px);
    left: calc(var(--x) - 50px);
    width: 100px;
    height: 100px;
    border-radius: 60%;
    background: radial-gradient(circle,
            var(--glow-color) 0%,
            transparent 70%);
    pointer-events: none;
    z-index: 1;
    transition: opacity 0.3s ease;
}
.tile:active {
    transform: scale(0.9);
}
</style>
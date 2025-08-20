<template>

  <ul class="side-bar">
    <div>
      <li style="margin-top: 24px;">

        <svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path xmlns="http://www.w3.org/2000/svg"
            style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;"
            d="M 0.863281 14.628906 L 2.898438 14.628906 L 2.898438 22.773438 C 2.898438 23.253906 3.292969 23.648438 3.773438 23.648438 L 9.734375 23.648438 C 10.214844 23.648438 10.609375 23.253906 10.609375 22.773438 L 10.609375 16.8125 L 14.246094 16.8125 L 14.246094 22.773438 C 14.246094 23.253906 14.636719 23.648438 15.117188 23.648438 L 20.789062 23.648438 C 21.269531 23.648438 21.664062 23.253906 21.664062 22.773438 L 21.664062 14.628906 L 24.136719 14.628906 C 24.484375 14.628906 24.804688 14.410156 24.9375 14.089844 C 25.066406 13.769531 24.992188 13.394531 24.746094 13.144531 L 13.371094 1.609375 C 13.039062 1.277344 12.484375 1.261719 12.152344 1.597656 L 0.265625 13.132812 C 0.00390625 13.378906 -0.0664062 13.757812 0.0625 14.089844 C 0.195312 14.425781 0.515625 14.628906 0.863281 14.628906 Z M 12.734375 3.457031 L 22.042969 12.882812 L 20.789062 12.882812 C 20.308594 12.882812 19.917969 13.277344 19.917969 13.757812 L 19.917969 21.902344 L 15.992188 21.902344 L 15.992188 15.9375 C 15.992188 15.457031 15.597656 15.066406 15.117188 15.066406 L 9.734375 15.066406 C 9.257812 15.066406 8.863281 15.457031 8.863281 15.9375 L 8.863281 21.902344 L 4.644531 21.902344 L 4.644531 13.757812 C 4.644531 13.277344 4.253906 12.882812 3.773438 12.882812 L 3.015625 12.882812 Z M 12.734375 3.457031 " />
        </svg>
        <span class="label">主页</span>
      </li>
      <div style="width: var(--sb-width, 350px);margin: auto;">
        <wininputbox placeholder="查找" style="margin-top: 6px;width: 320px;" />
      </div>
      <h3 style="margin-top: 26px;margin-bottom: 26px;margin-left: 18px;" class="title">{{ title }}</h3>
    </div>
    <div style="overflow: auto;height: calc( 100% - 240px );">
      <li v-for="(item, idx) in items" :key="idx" :class="{ active: idx === modelValue }"
        @click="$emit('update:modelValue', idx)">
        <span class="indicator" />

        <svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path :d="item.icon" />
        </svg>

        <span class="label">{{ item.name }}</span>
      </li>
    </div>
  </ul>
</template>

<script setup>
import wininputbox from './webwin-inputbox.vue'
console.log(`%c✨Welcome to Web-Win-Vue-Item✨`, "\n  color: #0078d7;\n  text-shadow: 0 1px 0 #0078d7;");
defineProps({
  items: { type: Array, required: true },
  modelValue: { type: Number, default: 0 },
  title: { type: String, default: 'Menu' }
})
defineEmits(['update:modelValue'])
</script>

<style scoped>
.side-bar {
  user-select: none;
  list-style: none;
  margin: 0;
  padding: 0;
  width: var(--sb-width, 380px);
  font-size: var(--sb-fs, 14px);
}

.side-bar li {
  position: relative;
  display: flex;
  align-items: center;
  padding: var(--sb-pad, 10px 16px);
  transition: background 0.2s;

}

.side-bar li:hover {
  background: var(--sb-hover-bg, #cecece);
}

.indicator {
  position: absolute;
  left: 0;
  top: 50%;
  margin-top: -12.5px;
  bottom: 0;
  width: var(--sb-indicator-width, 3px);
  background: var(--sb-indicator-color, #006fd0);
  transform: scaleY(0);
  height: 26px;
  line-height: 100px;
  width: 4px;
}

.side-bar li.active .indicator {
  transform: scaleY(1);
}

.icon {
  width: var(--sb-icon-size, 20px);
  height: var(--sb-icon-size, 38px);
  margin-right: var(--sb-icon-mr, 12px);
  color: var(--sb-icon-color, #333);
  flex-shrink: 0;
}

.label {
  color: var(--sb-label-color, #333);
  white-space: nowrap;
  font-size: 16px;
}

@media (prefers-color-scheme: dark) {
  .side-bar {
    user-select: none;
    list-style: none;
    margin: 0;
    padding: 0;
    width: var(--sb-width, 380px);
    font-size: var(--sb-fs, 14px);
    background: var(--sb-hover-bg, #1b1b1b);
  }

  .side-bar li {
    position: relative;
    display: flex;
    align-items: center;
    padding: var(--sb-pad, 10px 16px);
    transition: background 0.2s;

  }

  .side-bar li:hover {
    background: var(--sb-hover-bg, #252525);
  }

  .indicator {
    position: absolute;
    left: 0;
    top: 50%;
    margin-top: -12.5px;
    bottom: 0;
    width: var(--sb-indicator-width, 3px);
    background: var(--sb-indicator-color, #006fd0);
    transform: scaleY(0);
    height: 26px;
    line-height: 100px;
    width: 4px;
  }

  .side-bar li.active .indicator {
    transform: scaleY(1);
  }

  .icon {
    width: var(--sb-icon-size, 20px);
    height: var(--sb-icon-size, 38px);
    margin-right: var(--sb-icon-mr, 12px);
    color: var(--sb-icon-color, #ffffff);
    flex-shrink: 0;
  }

  .label {
    color: var(--sb-label-color, #ffffff);
    white-space: nowrap;
    font-size: 16px;
  }

  .title {
    color: #ffffff;
  }
}
</style>
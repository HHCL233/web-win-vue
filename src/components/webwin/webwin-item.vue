<template>

  <ul class="webwin-side-bar" :class="fold">
    <div class="webwin-sidebar" :class="fold">
      <p class="webwin-sidebar-text">{{ bartitle }}</p>
    </div>
    <div>
      <li style="margin-top: 24px;width: 24px;" @click="toggleFold">

        <svg class="webwin-icon" viewBox="0 0 1024 1024" fill="currentColor" aria-hidden="true">
          <path xmlns="http://www.w3.org/2000/svg"
            style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;"
            d="M63.7 191.4h895.2v64H63.7zM63.7 480.2h895.2v64H63.7zM63.7 767.2h895.2v64H63.7z" />
        </svg>
        <span class="webwin-label" :class="fold"></span>
      </li>
      <li @click="toggleFold" class="webwin-search-fold" :class="fold">

        <svg class="webwin-icon" viewBox="0 0 1024 1024" fill="currentColor" aria-hidden="true">
          <path xmlns="http://www.w3.org/2000/svg"
            style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;"
            d="M916.374282 878.7028 661.417543 604.016717c1.402953-1.616824 2.784416-3.254114 4.155646-4.90266 0.367367-0.459464 0.747014-0.909719 1.115404-1.37123 1.308809-1.585101 2.600221-3.181459 3.879354-4.798283 0.337691-0.429789 0.675382-0.86981 1.011027-1.299599 1.209548-1.555425 2.416026-3.122107 3.603061-4.696975 0.347924-0.471744 0.695848-0.931209 1.043772-1.402953 1.176802-1.585101 2.354628-3.181459 3.499707-4.798283 0.318248-0.449231 0.633427-0.889253 0.951675-1.331321 1.197268-1.686409 2.37407-3.39533 3.541663-5.104251 0.285502-0.419556 0.561795-0.829901 0.849344-1.249457 1.257643-1.87265 2.495844-3.755534 3.723811-5.65786 0.23536-0.360204 0.461511-0.727571 0.695848-1.085728 1.127683-1.77032 2.232854-3.551896 3.325745-5.342682 0.268106-0.440022 0.533143-0.87902 0.799202-1.319042 1.052982-1.750877 2.096754-3.50994 3.120061-5.28026 0.255827-0.440022 0.511653-0.87902 0.76748-1.331321 1.035586-1.801019 2.046612-3.611248 3.040243-5.432733 0.226151-0.409322 0.449231-0.819668 0.675382-1.228991 1.052982-1.944282 2.076288-3.90903 3.099594-5.873778l0.533143-1.052982c1.043772-2.046612 2.067079-4.103458 3.069919-6.181793 0.184195-0.358157 0.347924-0.715291 0.521886-1.083681 0.941442-1.954515 1.851161-3.90903 2.75167-5.884011 0.184195-0.400113 0.358157-0.809435 0.541329-1.207501 0.881067-1.954515 1.740644-3.931542 2.579755-5.9055 0.173962-0.398066 0.347924-0.797156 0.511653-1.197268 0.859577-2.036379 1.698688-4.082992 2.506077-6.139837 0.134053-0.316202 0.26606-0.64366 0.38988-0.971118 0.87902-2.240017 1.738597-4.493338 2.568499-6.753821l0.255827-0.707105c0.807389-2.220574 1.595334-4.451382 2.362814-6.691399 0.113587-0.327458 0.215918-0.655939 0.318248-0.973164 0.727571-2.148943 1.432629-4.296863 2.109034-6.465249l0.327458-1.055029c0.663102-2.169409 1.308809-4.349051 1.942235-6.538927l0.277316-0.971118c0.64366-2.272763 1.257643-4.563946 1.851161-6.856152 0.062422-0.225127 0.12382-0.450255 0.186242-0.674359 0.623193-2.455935 1.226944-4.923126 1.801019-7.398504l0.121773-0.542352c0.543376-2.373047 1.065262-4.748141 1.555425-7.141654l0.173962-0.880043c0.471744-2.302439 0.920976-4.626367 1.341554-6.948249l0.163729-0.920976c0.419556-2.353604 0.809435-4.716418 1.167592-7.081279 0.039909-0.26606 0.092098-0.532119 0.121773-0.797156 0.38988-2.518357 0.747014-5.045923 1.065262-7.582699l0.029676-0.23536c0.337691-2.620687 0.633427-5.238304 0.901533-7.868201l0.060375-0.563842c0.245593-2.486634 0.471744-4.982478 0.665149-7.480368l0.052189-0.788969c0.184195-2.445702 0.337691-4.900613 0.469698-7.356548l0.041956-0.849344c0.121773-2.5071 0.224104-5.024433 0.285502-7.541767l0.020466-0.582261c0.062422-2.711761 0.104377-5.424546 0.104377-8.146541 0-178.843224-145.034211-323.876412-323.876412-323.876412-178.844248 0-323.886645 145.033187-323.886645 323.876412 0 178.844248 145.043421 323.876412 323.886645 323.876412 2.701528 0 5.392824-0.029676 8.073886-0.102331l0.490164-0.010233c2.620687-0.062422 5.219885-0.163729 7.819083-0.295735l0.603751-0.031722c2.620687-0.132006 5.239328-0.295735 7.838525-0.50142l0.245593-0.010233c2.578732-0.203638 5.136997-0.429789 7.68503-0.685615l0.583285-0.060375c2.51631-0.255827 5.034666-0.543376 7.53051-0.861624l0.76748-0.092098c2.476401-0.325411 4.952802-0.663102 7.408737-1.043772l0.715291-0.11154c2.364861-0.358157 4.718465-0.747014 7.071046-1.167592l0.777713-0.144286c2.37407-0.417509 4.728698-0.87902 7.083326-1.348718l1.115404-0.23536c2.292206-0.471744 4.583388-0.960885 6.855128-1.484817 0.38988-0.092098 0.777713-0.184195 1.157359-0.276293 2.13871-0.491187 4.256954-1.013073 6.374174-1.555425 0.451278-0.11154 0.900509-0.226151 1.350764-0.347924 2.109034-0.541329 4.195555-1.115404 6.293333-1.698688 0.50142-0.144286 1.00284-0.285502 1.505283-0.429789 2.096754-0.603751 4.185322-1.216711 6.261611-1.862417 0.543376-0.163729 1.075495-0.337691 1.616824-0.50142 1.882883-0.593518 3.755534-1.207501 5.628184-1.830695 0.685615-0.226151 1.360997-0.461511 2.046612-0.685615 1.790786-0.62524 3.581572-1.249457 5.362124-1.895163 0.633427-0.234337 1.2689-0.459464 1.902326-0.695848 1.882883-0.695848 3.755534-1.411139 5.617951-2.13871 0.705058-0.276293 1.402953-0.551562 2.109034-0.827855 1.616824-0.645706 3.233648-1.310855 4.840238-1.986237 0.899486-0.367367 1.790786-0.757247 2.680039-1.134847 1.505283-0.645706 2.998287-1.289366 4.483104-1.954515 0.941442-0.419556 1.87265-0.839111 2.814092-1.2689 1.503237-0.695848 3.007497-1.390673 4.500501-2.109034 0.819668-0.387833 1.629103-0.777713 2.436492-1.174756 1.390673-0.675382 2.774183-1.360997 4.145413-2.058892 1.063215-0.541329 2.128477-1.083681 3.191692-1.63729 1.2689-0.653893 2.52859-1.319042 3.78521-1.994424 1.127683-0.603751 2.242064-1.216711 3.367701-1.832741 1.226944-0.685615 2.455935-1.37123 3.683902-2.067079 1.023306-0.574075 2.046612-1.167592 3.059686-1.759063 1.043772-0.61603 2.098801-1.228991 3.14155-1.853208 1.176802-0.717338 2.364861-1.423419 3.529383-2.148943 1.085728-0.665149 2.160199-1.341554 3.233648-2.016937 1.216711-0.76748 2.426259-1.545192 3.63376-2.332115 1.052982-0.685615 2.086521-1.360997 3.13234-2.058892l0.020466-0.010233 255.611655 275.361465c18.399045 19.822464 46.170552 23.64042 62.59564 9.56996l6.723122-5.752004C937.106466 927.146115 934.764118 898.512984 916.374282 878.7028zM416.63349 630.643144c-131.760906 0-238.604306-106.853633-238.604306-238.603283 0-131.750673 106.8434-238.604306 238.604306-238.604306 131.74965 0 238.594073 106.853633 238.594073 238.604306C655.227564 523.789511 548.38314 630.643144 416.63349 630.643144z" />
        </svg>
        <span class="webwin-label" :class="fold"></span>
      </li>
      <div style="width: var(--sb-width, 350px);margin: auto;">
        <wininputbox placeholder="查找" class="webwin-inputbox"
          style="margin-top: 6px;width: 320px;transition: all 0s ease;" :class="fold" />
      </div>
      <h3 style="margin-top: 26px;margin-bottom: 26px;margin-left: 18px;" class="webwin-title" :class="fold">{{ title }}
      </h3>
    </div>
    <div style="overflow: auto;height: calc( 100% - 240px );overflow-x: hidden;">
      <li v-for="(item, idx) in items" :key="idx" :class="{ active: idx === modelValue }"
        @click="$emit('update:modelValue', idx)">
        <span class="webwin-indicator" />

        <svg class="webwin-icon" viewBox="0 0 1024 1024" fill="currentColor" aria-hidden="true" height="16">
          <path :d="item.icon" />
        </svg>

        <span class="webwin-label" :class="fold">{{ item.name }}</span>
      </li>
    </div>
  </ul>
</template>

<script setup>
import wininputbox from './webwin-inputbox.vue'
import { ref } from 'vue'
defineProps({
  items: { type: Array, required: true },
  modelValue: { type: Number, default: 0 },
  title: { type: String, default: 'Menu' },
  bartitle: { type: String, default: 'Window' }
})
const emit = defineEmits(['update'])
let fold = ref('');

function toggleFold() {
  if (fold.value === '') {
    fold.value = 'folded';
    emit('update', false);
  } else {
    fold.value = '';
    emit('update', true);
  }
}
</script>

<style scoped>
.webwin-sidebar {
  width: 380px;
  height: 36px;
  display: inline-flex;
  align-items: center;
  background-color: #e6e6e6;
}

.webwin-sidebar.folded {
  opacity: 0;
}

.webwin-sidebar-text {
  user-select: none;
  margin-left: 16px;
  font-size: 16px;
  margin-top: 0;
  margin-bottom: 0;
  background-color: #e6e6e6;
}

.webwin-side-bar {
  user-select: none;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 380px;
  font-size: var(--sb-fs, 14px);
  transition: width 0s cubic-bezier(0, 0.5, 0.00, 1.00);
  overflow: hidden
}

.webwin-side-bar.folded {
  width: 55px;
  overflow-x: hidden;
}

.webwin-search-fold {
  display: none !important
}

.webwin-search-fold.folded {
  display: flex !important;
  width: 24px;
  margin-bottom: 58px;
}

.webwin-title.folded {
  display: none;
}

.webwin-title {
  transition: all 0s ease;
}

.webwin-side-bar li {
  position: relative;
  display: flex;
  align-items: center;
  padding: var(--sb-pad, 10px 16px);

}

.webwin-inputbox.folded {
  display: none
}

.webwin-side-bar li:hover {
  background: var(--sb-hover-bg, #cecece);
}

.webwin-label.folded {
  opacity: 0;
}

.webwin-indicator {
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

.webwin-side-bar li.active .webwin-indicator {
  transform: scaleY(1);
}

.webwin-icon {
  width: var(--sb-icon-size, 20px);
  height: var(--sb-icon-size, 38px);
  margin-right: var(--sb-icon-mr, 12px);
  color: var(--sb-icon-color, #333);
  flex-shrink: 0;
}

.webwin-label {
  color: var(--sb-label-color, #333);
  white-space: nowrap;
  font-size: 16px;
}

@media (prefers-color-scheme: dark) {
  .webwin-side-bar {
    user-select: none;
    list-style: none;
    margin: 0;
    padding: 0;
    width: var(--sb-width, 380px);
    font-size: var(--sb-fs, 14px);
    background: var(--sb-hover-bg, #1b1b1b);
  }

  .webwin-side-bar li {
    position: relative;
    display: flex;
    align-items: center;
    padding: var(--sb-pad, 10px 16px);
    transition: background 0.2s;

  }

  .webwin-side-bar li:hover {
    background: var(--sb-hover-bg, #252525);
  }

  .webwin-indicator {
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

  .webwin-side-bar li.active .webwin-indicator {
    transform: scaleY(1);
  }

  .webwin-icon {
    width: var(--sb-icon-size, 20px);
    height: var(--sb-icon-size, 38px);
    margin-right: var(--sb-icon-mr, 12px);
    color: var(--sb-icon-color, #ffffff);
    flex-shrink: 0;
  }

  .webwin-label {
    color: var(--sb-label-color, #ffffff);
    white-space: nowrap;
    font-size: 16px;
  }

  .webwin-title {
    color: #ffffff;
  }
}
</style>
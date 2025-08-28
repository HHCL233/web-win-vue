import { createElementBlock as u, openBlock as r, renderSlot as W, defineComponent as x, ref as c, normalizeClass as v, unref as d, createElementVNode as a, toDisplayString as g, createVNode as $, Fragment as C, renderList as H, normalizeStyle as y, watch as P, Transition as M, withCtx as B, createCommentVNode as I, withDirectives as k, vShow as R, onMounted as j, nextTick as J, createBlock as K, vModelCheckbox as Q, vModelRadio as Z, useCssVars as A } from "vue";
const b = (e, o) => {
  const l = e.__vccOpts || e;
  for (const [t, i] of o)
    l[t] = i;
  return l;
}, ee = {
  __name: "webwin-button",
  setup(e) {
    return console.log("%c✨Welcome to Web-Win-Vue-Button✨", `
  color: #0078d7;
  text-shadow: 0 1px 0 #0078d7;`), (o, l) => (r(), u("button", null, [
      W(o.$slots, "default", {}, void 0, !0)
    ]));
  }
}, T = /* @__PURE__ */ b(ee, [["__scopeId", "data-v-85a8a3fa"]]), te = ["value", "placeholder"], z = /* @__PURE__ */ x({
  __name: "webwin-inputbox",
  props: { value: String, placeholder: String },
  setup(e) {
    console.log("%c✨Welcome to Web-Win-Vue-InputBox✨", `
  color: #0078d7;
  text-shadow: 0 1px 0 #0078d7;`);
    const o = e, l = c(o.value), t = c(o.placeholder);
    return (i, n) => (r(), u("input", {
      type: "text",
      name: "fname",
      class: "uwpinput",
      value: l.value,
      placeholder: t.value,
      onChange: n[0] || (n[0] = (s) => i.$emit("@change", s))
    }, null, 40, te));
  }
}), oe = { class: "sidebar-text" }, le = { style: { width: "var(--sb-width, 350px)", margin: "auto" } }, ne = { style: { overflow: "auto", height: "calc( 100% - 240px )", "overflow-x": "hidden" } }, se = ["onClick"], ae = {
  class: "icon",
  viewBox: "0 0 1024 1024",
  fill: "currentColor",
  "aria-hidden": "true",
  height: "16"
}, ie = ["d"], ce = {
  __name: "webwin-item",
  props: {
    items: { type: Array, required: !0 },
    modelValue: { type: Number, default: 0 },
    title: { type: String, default: "Menu" },
    bartitle: { type: String, default: "Window" }
  },
  emits: ["update"],
  setup(e, { emit: o }) {
    console.log("%c✨Welcome to Web-Win-Vue-Item✨", `
  color: #0078d7;
  text-shadow: 0 1px 0 #0078d7;`);
    const l = o;
    let t = c("");
    function i() {
      t.value === "" ? (t.value = "folded", l("update", !1)) : (t.value = "", l("update", !0));
    }
    return (n, s) => (r(), u("ul", {
      class: v(["side-bar", d(t)])
    }, [
      a("div", {
        class: v(["sidebar", d(t)])
      }, [
        a("p", oe, g(e.bartitle), 1)
      ], 2),
      a("div", null, [
        a("li", {
          style: { "margin-top": "24px", width: "24px" },
          onClick: i
        }, [
          s[0] || (s[0] = a("svg", {
            class: "icon",
            viewBox: "0 0 1024 1024",
            fill: "currentColor",
            "aria-hidden": "true"
          }, [
            a("path", {
              xmlns: "http://www.w3.org/2000/svg",
              style: { stroke: "none", "fill-rule": "nonzero", fill: "rgb(0%,0%,0%)", "fill-opacity": "1" },
              d: "M63.7 191.4h895.2v64H63.7zM63.7 480.2h895.2v64H63.7zM63.7 767.2h895.2v64H63.7z"
            })
          ], -1)),
          a("span", {
            class: v(["label", d(t)])
          }, null, 2)
        ]),
        a("li", {
          onClick: i,
          class: v(["search-fold", d(t)])
        }, [
          s[1] || (s[1] = a("svg", {
            class: "icon",
            viewBox: "0 0 1024 1024",
            fill: "currentColor",
            "aria-hidden": "true"
          }, [
            a("path", {
              xmlns: "http://www.w3.org/2000/svg",
              style: { stroke: "none", "fill-rule": "nonzero", fill: "rgb(0%,0%,0%)", "fill-opacity": "1" },
              d: "M916.374282 878.7028 661.417543 604.016717c1.402953-1.616824 2.784416-3.254114 4.155646-4.90266 0.367367-0.459464 0.747014-0.909719 1.115404-1.37123 1.308809-1.585101 2.600221-3.181459 3.879354-4.798283 0.337691-0.429789 0.675382-0.86981 1.011027-1.299599 1.209548-1.555425 2.416026-3.122107 3.603061-4.696975 0.347924-0.471744 0.695848-0.931209 1.043772-1.402953 1.176802-1.585101 2.354628-3.181459 3.499707-4.798283 0.318248-0.449231 0.633427-0.889253 0.951675-1.331321 1.197268-1.686409 2.37407-3.39533 3.541663-5.104251 0.285502-0.419556 0.561795-0.829901 0.849344-1.249457 1.257643-1.87265 2.495844-3.755534 3.723811-5.65786 0.23536-0.360204 0.461511-0.727571 0.695848-1.085728 1.127683-1.77032 2.232854-3.551896 3.325745-5.342682 0.268106-0.440022 0.533143-0.87902 0.799202-1.319042 1.052982-1.750877 2.096754-3.50994 3.120061-5.28026 0.255827-0.440022 0.511653-0.87902 0.76748-1.331321 1.035586-1.801019 2.046612-3.611248 3.040243-5.432733 0.226151-0.409322 0.449231-0.819668 0.675382-1.228991 1.052982-1.944282 2.076288-3.90903 3.099594-5.873778l0.533143-1.052982c1.043772-2.046612 2.067079-4.103458 3.069919-6.181793 0.184195-0.358157 0.347924-0.715291 0.521886-1.083681 0.941442-1.954515 1.851161-3.90903 2.75167-5.884011 0.184195-0.400113 0.358157-0.809435 0.541329-1.207501 0.881067-1.954515 1.740644-3.931542 2.579755-5.9055 0.173962-0.398066 0.347924-0.797156 0.511653-1.197268 0.859577-2.036379 1.698688-4.082992 2.506077-6.139837 0.134053-0.316202 0.26606-0.64366 0.38988-0.971118 0.87902-2.240017 1.738597-4.493338 2.568499-6.753821l0.255827-0.707105c0.807389-2.220574 1.595334-4.451382 2.362814-6.691399 0.113587-0.327458 0.215918-0.655939 0.318248-0.973164 0.727571-2.148943 1.432629-4.296863 2.109034-6.465249l0.327458-1.055029c0.663102-2.169409 1.308809-4.349051 1.942235-6.538927l0.277316-0.971118c0.64366-2.272763 1.257643-4.563946 1.851161-6.856152 0.062422-0.225127 0.12382-0.450255 0.186242-0.674359 0.623193-2.455935 1.226944-4.923126 1.801019-7.398504l0.121773-0.542352c0.543376-2.373047 1.065262-4.748141 1.555425-7.141654l0.173962-0.880043c0.471744-2.302439 0.920976-4.626367 1.341554-6.948249l0.163729-0.920976c0.419556-2.353604 0.809435-4.716418 1.167592-7.081279 0.039909-0.26606 0.092098-0.532119 0.121773-0.797156 0.38988-2.518357 0.747014-5.045923 1.065262-7.582699l0.029676-0.23536c0.337691-2.620687 0.633427-5.238304 0.901533-7.868201l0.060375-0.563842c0.245593-2.486634 0.471744-4.982478 0.665149-7.480368l0.052189-0.788969c0.184195-2.445702 0.337691-4.900613 0.469698-7.356548l0.041956-0.849344c0.121773-2.5071 0.224104-5.024433 0.285502-7.541767l0.020466-0.582261c0.062422-2.711761 0.104377-5.424546 0.104377-8.146541 0-178.843224-145.034211-323.876412-323.876412-323.876412-178.844248 0-323.886645 145.033187-323.886645 323.876412 0 178.844248 145.043421 323.876412 323.886645 323.876412 2.701528 0 5.392824-0.029676 8.073886-0.102331l0.490164-0.010233c2.620687-0.062422 5.219885-0.163729 7.819083-0.295735l0.603751-0.031722c2.620687-0.132006 5.239328-0.295735 7.838525-0.50142l0.245593-0.010233c2.578732-0.203638 5.136997-0.429789 7.68503-0.685615l0.583285-0.060375c2.51631-0.255827 5.034666-0.543376 7.53051-0.861624l0.76748-0.092098c2.476401-0.325411 4.952802-0.663102 7.408737-1.043772l0.715291-0.11154c2.364861-0.358157 4.718465-0.747014 7.071046-1.167592l0.777713-0.144286c2.37407-0.417509 4.728698-0.87902 7.083326-1.348718l1.115404-0.23536c2.292206-0.471744 4.583388-0.960885 6.855128-1.484817 0.38988-0.092098 0.777713-0.184195 1.157359-0.276293 2.13871-0.491187 4.256954-1.013073 6.374174-1.555425 0.451278-0.11154 0.900509-0.226151 1.350764-0.347924 2.109034-0.541329 4.195555-1.115404 6.293333-1.698688 0.50142-0.144286 1.00284-0.285502 1.505283-0.429789 2.096754-0.603751 4.185322-1.216711 6.261611-1.862417 0.543376-0.163729 1.075495-0.337691 1.616824-0.50142 1.882883-0.593518 3.755534-1.207501 5.628184-1.830695 0.685615-0.226151 1.360997-0.461511 2.046612-0.685615 1.790786-0.62524 3.581572-1.249457 5.362124-1.895163 0.633427-0.234337 1.2689-0.459464 1.902326-0.695848 1.882883-0.695848 3.755534-1.411139 5.617951-2.13871 0.705058-0.276293 1.402953-0.551562 2.109034-0.827855 1.616824-0.645706 3.233648-1.310855 4.840238-1.986237 0.899486-0.367367 1.790786-0.757247 2.680039-1.134847 1.505283-0.645706 2.998287-1.289366 4.483104-1.954515 0.941442-0.419556 1.87265-0.839111 2.814092-1.2689 1.503237-0.695848 3.007497-1.390673 4.500501-2.109034 0.819668-0.387833 1.629103-0.777713 2.436492-1.174756 1.390673-0.675382 2.774183-1.360997 4.145413-2.058892 1.063215-0.541329 2.128477-1.083681 3.191692-1.63729 1.2689-0.653893 2.52859-1.319042 3.78521-1.994424 1.127683-0.603751 2.242064-1.216711 3.367701-1.832741 1.226944-0.685615 2.455935-1.37123 3.683902-2.067079 1.023306-0.574075 2.046612-1.167592 3.059686-1.759063 1.043772-0.61603 2.098801-1.228991 3.14155-1.853208 1.176802-0.717338 2.364861-1.423419 3.529383-2.148943 1.085728-0.665149 2.160199-1.341554 3.233648-2.016937 1.216711-0.76748 2.426259-1.545192 3.63376-2.332115 1.052982-0.685615 2.086521-1.360997 3.13234-2.058892l0.020466-0.010233 255.611655 275.361465c18.399045 19.822464 46.170552 23.64042 62.59564 9.56996l6.723122-5.752004C937.106466 927.146115 934.764118 898.512984 916.374282 878.7028zM416.63349 630.643144c-131.760906 0-238.604306-106.853633-238.604306-238.603283 0-131.750673 106.8434-238.604306 238.604306-238.604306 131.74965 0 238.594073 106.853633 238.594073 238.604306C655.227564 523.789511 548.38314 630.643144 416.63349 630.643144z"
            })
          ], -1)),
          a("span", {
            class: v(["label", d(t)])
          }, null, 2)
        ], 2),
        a("div", le, [
          $(z, {
            placeholder: "查找",
            class: v(["inputbox", d(t)]),
            style: { "margin-top": "6px", width: "320px", transition: "all 0s ease" }
          }, null, 8, ["class"])
        ]),
        a("h3", {
          style: { "margin-top": "26px", "margin-bottom": "26px", "margin-left": "18px" },
          class: v(["title", d(t)])
        }, g(e.title), 3)
      ]),
      a("div", ne, [
        (r(!0), u(C, null, H(e.items, (h, p) => (r(), u("li", {
          key: p,
          class: v({ active: p === e.modelValue }),
          onClick: (_) => n.$emit("update:modelValue", p)
        }, [
          s[2] || (s[2] = a("span", { class: "indicator" }, null, -1)),
          (r(), u("svg", ae, [
            a("path", {
              d: h.icon
            }, null, 8, ie)
          ])),
          a("span", {
            class: v(["label", d(t)])
          }, g(h.name), 3)
        ], 10, se))), 128))
      ])
    ], 2));
  }
}, N = /* @__PURE__ */ b(ce, [["__scopeId", "data-v-30fc2437"]]);
console.log("%c✨Welcome to Web-Win-Vue-Tile✨", `
  color: #0078d7;
  text-shadow: 0 1px 0 #0078d7;`);
const re = {
  props: {
    size: { default: "medium" },
    color: { default: "#0078d7" },
    title: { default: "App" },
    icon: { default: "" },
    glowColor: { default: "rgba(255,255,255,0.5)" },
    glowRadius: { default: 60 }
  },
  data() {
    return {
      isHovered: !1,
      mouseX: 0,
      mouseY: 0,
      glowOpacity: 0
    };
  },
  computed: {
    tileStyle() {
      return {
        "--tile-color": this.color,
        "--glow-color": this.glowColor,
        "--glow-radius": `${this.glowRadius}px`
      };
    },
    glowStyle() {
      return {
        "--x": `${this.mouseX}px`,
        "--y": `${this.mouseY}px`,
        opacity: this.glowOpacity
      };
    },
    pointerGlowStyle() {
      return {
        "--x": `${this.mouseX}px`,
        "--y": `${this.mouseY}px`,
        opacity: this.isHovered ? 1 : 0
      };
    }
  },
  methods: {
    handleMouseMove(e) {
      const o = e.currentTarget.getBoundingClientRect();
      this.mouseX = e.clientX - o.left, this.mouseY = e.clientY - o.top;
      const l = Math.min(
        this.mouseX,
        o.width - this.mouseX,
        this.mouseY,
        o.height - this.mouseY
      ), t = this.glowRadius;
      this.glowOpacity = Math.max(0, (t - l) / t);
    },
    handleMouseLeave() {
      this.isHovered = !1, this.glowOpacity = 0;
    }
  }
}, ue = { class: "tile-content" }, de = { class: "tile-icon" }, pe = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  width: "24",
  height: "24"
}, me = ["d"], ve = { class: "tile-title" };
function he(e, o, l, t, i, n) {
  return r(), u("div", {
    class: v(["tile", l.size]),
    style: y(n.tileStyle),
    onMousemove: o[0] || (o[0] = (...s) => n.handleMouseMove && n.handleMouseMove(...s)),
    onMouseenter: o[1] || (o[1] = (s) => i.isHovered = !0),
    onMouseleave: o[2] || (o[2] = (...s) => n.handleMouseLeave && n.handleMouseLeave(...s))
  }, [
    a("div", ue, [
      a("div", de, [
        W(e.$slots, "icon", {}, () => [
          (r(), u("svg", pe, [
            a("path", {
              fill: "white",
              d: l.icon
            }, null, 8, me)
          ]))
        ], !0)
      ]),
      a("div", ve, g(l.title), 1)
    ]),
    a("div", {
      class: "glow-border",
      style: y(n.glowStyle)
    }, null, 4),
    a("div", {
      class: "pointer-glow",
      style: y(n.pointerGlowStyle)
    }, null, 4)
  ], 38);
}
const X = /* @__PURE__ */ b(re, [["render", he], ["__scopeId", "data-v-9ae9ef89"]]), we = { class: "container" }, fe = ["src"], ge = ["src"], Y = {
  __name: "webwin-tab",
  props: { menu: Array, url: Array, titlebar: Boolean, titlebartext: String },
  setup(e) {
    console.log("%c✨Welcome to Web-Win-Vue-Tab✨", `
  color: #0078d7;
  text-shadow: 0 1px 0 #0078d7;`);
    const o = e, l = c(0), t = c(0), i = c(o.url[0]);
    let n = c(""), s = c("");
    o.titlebar ? n.value = o.titlebartext : n.value = "", P(l, (p) => {
      console.log("activeIndex changed:", p), console.log("new url:", o.url[p]), i.value = o.url[p], t.value = t.value === 0 ? 1 : 0, console.log("docState:", t.value);
    });
    function h(p) {
      p ? s.value = "" : s.value = "folded";
    }
    return (p, _) => (r(), u("div", we, [
      $(N, {
        modelValue: l.value,
        "onUpdate:modelValue": _[0] || (_[0] = (f) => l.value = f),
        items: e.menu,
        class: "item-1",
        bartitle: d(n),
        onUpdate: h
      }, null, 8, ["modelValue", "items", "bartitle"]),
      $(M, {
        name: "fade",
        mode: "out-in"
      }, {
        default: B(() => [
          t.value === 0 ? (r(), u("div", {
            key: "state0",
            class: v(["iframe-container", d(s)])
          }, [
            k(a("iframe", { src: i.value }, null, 8, fe), [
              [R, t.value === 0]
            ])
          ], 2)) : t.value === 1 ? (r(), u("div", {
            key: "state1",
            class: v(["iframe-container", d(s)])
          }, [
            k(a("iframe", { src: i.value }, null, 8, ge), [
              [R, t.value === 1]
            ])
          ], 2)) : I("", !0)
        ]),
        _: 1
      })
    ]));
  }
}, _e = ["value", "placeholder"], D = /* @__PURE__ */ x({
  __name: "webwin-passwordbox",
  props: { value: String, placeholder: String },
  setup(e) {
    console.log("%c✨Welcome to Web-Win-Vue-PasswordBox✨", `
  color: #0078d7;
  text-shadow: 0 1px 0 #0078d7;`);
    const o = e, l = c(o.value), t = c(o.placeholder);
    return (i, n) => (r(), u("input", {
      type: "password",
      name: "fname",
      class: "uwppassword",
      value: l.value,
      placeholder: t.value,
      onChange: n[0] || (n[0] = (s) => i.$emit("@change", s))
    }, null, 40, _e));
  }
}), be = ["data-placeholder"], O = /* @__PURE__ */ x({
  __name: "webwin-richeditbox",
  props: {
    value: { type: String, default: "" },
    placeholder: { type: String, default: "" }
  },
  emits: ["update:value", "change"],
  setup(e, { emit: o }) {
    const l = e, t = o, i = c(null), n = c(l.placeholder), s = c(l.value);
    j(() => {
      i.value && (i.value.textContent = l.value || "", s.value = l.value || "");
    });
    const h = (f) => {
      if (!i.value) return;
      const w = i.value.textContent || "";
      t("update:value", w), J(() => {
        if (i.value) {
          const m = document.createRange(), S = window.getSelection();
          m.selectNodeContents(i.value), m.collapse(!1), S?.removeAllRanges(), S?.addRange(m);
        }
      });
    }, p = (f) => {
      const w = f.target;
      w.textContent === l.placeholder && (w.textContent = "");
    }, _ = (f) => {
      const w = f.target, m = w.textContent || "";
      m !== s.value && (t("change", {
        target: {
          value: m
        }
      }), s.value = m), m.trim() === "" && (w.textContent = "");
    };
    return (f, w) => (r(), u("div", {
      ref_key: "editableDiv",
      ref: i,
      class: "uwprichrditbox",
      contenteditable: "plaintext-only",
      "data-placeholder": n.value,
      onInput: h,
      onFocus: p,
      onBlur: _
    }, null, 40, be));
  }
}), xe = ["src"], ye = {
  class: "n-name",
  style: { display: "inline-block", "margin-left": "6px" }
}, $e = { class: "n-text n-title" }, ke = { class: "n-vulua" }, F = {
  __name: "webwin-notifications",
  props: { name: String, title: String, text: String, img: String },
  setup(e, { expose: o }) {
    const l = e;
    let t = c(!1), i = c(l.img);
    const n = () => {
      t.value = !t.value;
    };
    function s() {
      t.value && setTimeout(() => {
        t.value = !1;
      }, 250);
    }
    return o({ showNotification: n }), console.log("%c✨Welcome to Web-Win-Vue-Notifications✨", `
  color: #0078d7;
  text-shadow: 0 1px 0 #0078d7;`), (h, p) => (r(), K(M, { name: "slide-fade" }, {
      default: B(() => [
        d(t) ? (r(), u("div", {
          key: 0,
          class: "Notification",
          onClick: s
        }, [
          a("img", {
            src: d(i),
            style: { "object-fit": "contain", "margin-left": "16px", "margin-right": "0px", display: "inline-block", "vertical-align": "middle", width: "16px", height: "16px" }
          }, null, 8, xe),
          a("p", ye, g(e.name), 1),
          a("h4", $e, g(e.title), 1),
          a("p", ke, g(e.text), 1)
        ])) : I("", !0)
      ]),
      _: 1
    }));
  }
}, We = ["name", "id"], Ce = ["for"], Se = /* @__PURE__ */ x({
  __name: "webwin-checkbox",
  props: { name: String, checked: Array },
  setup(e) {
    const o = e, l = c(o.name), t = c(o.checked);
    return console.log("%c✨Welcome to Web-Win-Vue-Checkbox✨", `
  color: #0078d7;
  text-shadow: 0 1px 0 #0078d7;`), (i, n) => (r(), u(C, null, [
      k(a("input", {
        type: "checkbox",
        class: "ww-checkbox",
        name: l.value,
        id: l.value,
        "onUpdate:modelValue": n[0] || (n[0] = (s) => t.value = s),
        onClick: n[1] || (n[1] = (s) => i.$emit("click", s))
      }, null, 8, We), [
        [Q, t.value]
      ]),
      a("label", {
        for: l.value,
        class: "ww-checkbox-label"
      }, [
        W(i.$slots, "default", {}, void 0, !0)
      ], 8, Ce)
    ], 64));
  }
}), L = /* @__PURE__ */ b(Se, [["__scopeId", "data-v-c289ea76"]]), Ve = ["name", "id"], Me = ["for"], Be = /* @__PURE__ */ x({
  __name: "webwin-radio",
  props: { name: String, checked: Array },
  setup(e) {
    const o = e, l = c(o.name), t = c(o.checked);
    return console.log("%c✨Welcome to Web-Win-Vue-radio✨", `
  color: #0078d7;
  text-shadow: 0 1px 0 #0078d7;`), (i, n) => (r(), u(C, null, [
      k(a("input", {
        type: "radio",
        class: "ww-radio",
        name: l.value,
        id: l.value,
        "onUpdate:modelValue": n[0] || (n[0] = (s) => t.value = s),
        onClick: n[1] || (n[1] = (s) => i.$emit("click", s))
      }, null, 8, Ve), [
        [Z, t.value]
      ]),
      a("label", {
        for: l.value,
        class: "ww-radio-label"
      }, [
        W(i.$slots, "default", {}, void 0, !0)
      ], 8, Me)
    ], 64));
  }
}), U = /* @__PURE__ */ b(Be, [["__scopeId", "data-v-78978c8c"]]), Ie = { style: { position: "relative" } }, ze = {
  key: 0,
  class: "list-box"
}, Ne = { style: { overflow: "auto", height: "calc( 100% - 240px )" } }, Re = ["onClick"], He = { class: "label" }, Te = {
  __name: "webwin-listbox",
  props: {
    items: { type: Array, required: !0 },
    modelValue: { type: Number, default: 0 },
    title: { type: String, default: "itembox" }
  },
  emits: ["update"],
  setup(e, { emit: o }) {
    A((m) => ({
      "4c8120fa": d(_) + "px",
      "1ae8acfb": d(p) + "px"
    })), console.log("%c✨Welcome to Web-Win-Vue-Item✨", `
  color: #0078d7;
  text-shadow: 0 1px 0 #0078d7;`);
    const l = e, t = o;
    let i = c(""), n = c(!1), s = c(l.modelValue), h = c(l.title), p = c(0), _ = c(0);
    function f(m) {
      n.value = !1, i.value = "", s.value = m, h.value = l.items[m].name, t("update", m), setTimeout(() => {
        p.value = m * -35, _.value = m * 35 + 17.5;
      }, 100);
    }
    function w() {
      n.value = !n.value, i.value = n.value ? "active" : "";
    }
    return (m, S) => (r(), u("div", Ie, [
      a("div", {
        class: v(["list-box-button", d(i)]),
        onClick: w
      }, g(d(h)), 3),
      $(M, null, {
        default: B(() => [
          d(n) ? (r(), u("ul", ze, [
            a("div", Ne, [
              (r(!0), u(C, null, H(e.items, (G, V) => (r(), u("li", {
                key: V,
                class: v({ active: V === d(s) }),
                onClick: (Oe) => f(V)
              }, [
                a("span", He, g(G.name), 1)
              ], 10, Re))), 128))
            ])
          ])) : I("", !0)
        ]),
        _: 1
      })
    ]));
  }
}, E = /* @__PURE__ */ b(Te, [["__scopeId", "data-v-5fe19256"]]), Xe = { class: "progress-bar" }, Ye = {
  __name: "webwin-progressbar",
  props: {
    progress: { type: Number, default: 0 }
  },
  setup(e) {
    return console.log("%c✨Welcome to Web-Win-Vue-ProgressBar✨", `
  color: #0078d7;
  text-shadow: 0 1px 0 #0078d7;`), (o, l) => (r(), u("div", Xe, [
      a("div", {
        class: "progress",
        style: y({ width: e.progress + "%" })
      }, null, 4)
    ]));
  }
}, q = /* @__PURE__ */ b(Ye, [["__scopeId", "data-v-18bec619"]]), De = [q, E, U, L, T, N, X, Y, z, D, O, F], Le = {
  install(e) {
    De.forEach((o) => {
      e.component("winbutton", T), e.component("winitem", N), e.component("wintile", X), e.component("wintab", Y), e.component("wininputbox", z), e.component("winpasswordbox", D), e.component("winricheditbox", O), e.component("winnotifications", F), e.component("wincheckbox", L), e.component("winradio", U), e.component("winlistbox", E), e.component("winprogressbar", q);
    });
  }
};
export {
  Le as default,
  T as winbutton,
  L as wincheckbox,
  z as wininputbox,
  N as winitem,
  E as winlistbox,
  F as winnotifications,
  D as winpasswordbox,
  q as winprogressbar,
  U as winradio,
  O as winricheditbox,
  Y as wintab,
  X as wintile
};

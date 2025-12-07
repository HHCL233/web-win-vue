import { createElementBlock as r, openBlock as c, renderSlot as k, defineComponent as N, ref as u, normalizeClass as _, unref as d, createElementVNode as l, toDisplayString as x, createVNode as S, Fragment as $, renderList as I, normalizeStyle as W, watch as ne, Transition as B, withCtx as M, createCommentVNode as C, withDirectives as z, vShow as F, onMounted as le, nextTick as oe, createBlock as T, vModelCheckbox as ie, vModelRadio as se, useCssVars as D, createTextVNode as ae, isRef as L, KeepAlive as ce, mergeModels as re, useModel as ue, vModelText as de } from "vue";
const f = (e, n) => {
  const o = e.__vccOpts || e;
  for (const [t, i] of n)
    o[t] = i;
  return o;
}, we = {}, pe = { class: "webwin-button" };
function me(e, n) {
  return c(), r("button", pe, [
    k(e.$slots, "default", {}, void 0, !0)
  ]);
}
const H = /* @__PURE__ */ f(we, [["render", me], ["__scopeId", "data-v-a059307c"]]), ve = ["value", "placeholder"], be = /* @__PURE__ */ N({
  __name: "webwin-inputbox",
  props: { value: String, placeholder: String },
  setup(e) {
    const o = u(e.placeholder);
    return (t, i) => (c(), r("input", {
      type: "text",
      name: "fname",
      class: "webwin-uwpinput",
      value: e.value,
      placeholder: o.value,
      onChange: i[0] || (i[0] = (s) => t.$emit("@change", s))
    }, null, 40, ve));
  }
}), X = /* @__PURE__ */ f(be, [["__scopeId", "data-v-7641a566"]]), he = { class: "webwin-sidebar-text" }, _e = { style: { width: "var(--sb-width, 350px)", margin: "auto" } }, fe = { style: { overflow: "auto", height: "calc( 100% - 240px )", "overflow-x": "hidden" } }, ge = ["onClick"], xe = {
  class: "webwin-icon",
  viewBox: "0 0 1024 1024",
  fill: "currentColor",
  "aria-hidden": "true",
  height: "16"
}, ye = ["d"], $e = {
  __name: "webwin-item",
  props: {
    items: { type: Array, required: !0 },
    modelValue: { type: Number, default: 0 },
    title: { type: String, default: "Menu" },
    bartitle: { type: String, default: "Window" }
  },
  emits: ["update"],
  setup(e, { emit: n }) {
    const o = n;
    let t = u("");
    function i() {
      t.value === "" ? (t.value = "folded", o("update", !1)) : (t.value = "", o("update", !0));
    }
    return (s, a) => (c(), r("ul", {
      class: _(["webwin-side-bar", d(t)])
    }, [
      l("div", {
        class: _(["webwin-sidebar", d(t)])
      }, [
        l("p", he, x(e.bartitle), 1)
      ], 2),
      l("div", null, [
        l("li", {
          style: { "margin-top": "24px", width: "24px" },
          onClick: i
        }, [
          a[0] || (a[0] = l("svg", {
            class: "webwin-icon",
            viewBox: "0 0 1024 1024",
            fill: "currentColor",
            "aria-hidden": "true"
          }, [
            l("path", {
              xmlns: "http://www.w3.org/2000/svg",
              style: { stroke: "none", "fill-rule": "nonzero", fill: "rgb(0%,0%,0%)", "fill-opacity": "1" },
              d: "M63.7 191.4h895.2v64H63.7zM63.7 480.2h895.2v64H63.7zM63.7 767.2h895.2v64H63.7z"
            })
          ], -1)),
          l("span", {
            class: _(["webwin-label", d(t)])
          }, null, 2)
        ]),
        l("li", {
          onClick: i,
          class: _(["webwin-search-fold", d(t)])
        }, [
          a[1] || (a[1] = l("svg", {
            class: "webwin-icon",
            viewBox: "0 0 1024 1024",
            fill: "currentColor",
            "aria-hidden": "true"
          }, [
            l("path", {
              xmlns: "http://www.w3.org/2000/svg",
              style: { stroke: "none", "fill-rule": "nonzero", fill: "rgb(0%,0%,0%)", "fill-opacity": "1" },
              d: "M916.374282 878.7028 661.417543 604.016717c1.402953-1.616824 2.784416-3.254114 4.155646-4.90266 0.367367-0.459464 0.747014-0.909719 1.115404-1.37123 1.308809-1.585101 2.600221-3.181459 3.879354-4.798283 0.337691-0.429789 0.675382-0.86981 1.011027-1.299599 1.209548-1.555425 2.416026-3.122107 3.603061-4.696975 0.347924-0.471744 0.695848-0.931209 1.043772-1.402953 1.176802-1.585101 2.354628-3.181459 3.499707-4.798283 0.318248-0.449231 0.633427-0.889253 0.951675-1.331321 1.197268-1.686409 2.37407-3.39533 3.541663-5.104251 0.285502-0.419556 0.561795-0.829901 0.849344-1.249457 1.257643-1.87265 2.495844-3.755534 3.723811-5.65786 0.23536-0.360204 0.461511-0.727571 0.695848-1.085728 1.127683-1.77032 2.232854-3.551896 3.325745-5.342682 0.268106-0.440022 0.533143-0.87902 0.799202-1.319042 1.052982-1.750877 2.096754-3.50994 3.120061-5.28026 0.255827-0.440022 0.511653-0.87902 0.76748-1.331321 1.035586-1.801019 2.046612-3.611248 3.040243-5.432733 0.226151-0.409322 0.449231-0.819668 0.675382-1.228991 1.052982-1.944282 2.076288-3.90903 3.099594-5.873778l0.533143-1.052982c1.043772-2.046612 2.067079-4.103458 3.069919-6.181793 0.184195-0.358157 0.347924-0.715291 0.521886-1.083681 0.941442-1.954515 1.851161-3.90903 2.75167-5.884011 0.184195-0.400113 0.358157-0.809435 0.541329-1.207501 0.881067-1.954515 1.740644-3.931542 2.579755-5.9055 0.173962-0.398066 0.347924-0.797156 0.511653-1.197268 0.859577-2.036379 1.698688-4.082992 2.506077-6.139837 0.134053-0.316202 0.26606-0.64366 0.38988-0.971118 0.87902-2.240017 1.738597-4.493338 2.568499-6.753821l0.255827-0.707105c0.807389-2.220574 1.595334-4.451382 2.362814-6.691399 0.113587-0.327458 0.215918-0.655939 0.318248-0.973164 0.727571-2.148943 1.432629-4.296863 2.109034-6.465249l0.327458-1.055029c0.663102-2.169409 1.308809-4.349051 1.942235-6.538927l0.277316-0.971118c0.64366-2.272763 1.257643-4.563946 1.851161-6.856152 0.062422-0.225127 0.12382-0.450255 0.186242-0.674359 0.623193-2.455935 1.226944-4.923126 1.801019-7.398504l0.121773-0.542352c0.543376-2.373047 1.065262-4.748141 1.555425-7.141654l0.173962-0.880043c0.471744-2.302439 0.920976-4.626367 1.341554-6.948249l0.163729-0.920976c0.419556-2.353604 0.809435-4.716418 1.167592-7.081279 0.039909-0.26606 0.092098-0.532119 0.121773-0.797156 0.38988-2.518357 0.747014-5.045923 1.065262-7.582699l0.029676-0.23536c0.337691-2.620687 0.633427-5.238304 0.901533-7.868201l0.060375-0.563842c0.245593-2.486634 0.471744-4.982478 0.665149-7.480368l0.052189-0.788969c0.184195-2.445702 0.337691-4.900613 0.469698-7.356548l0.041956-0.849344c0.121773-2.5071 0.224104-5.024433 0.285502-7.541767l0.020466-0.582261c0.062422-2.711761 0.104377-5.424546 0.104377-8.146541 0-178.843224-145.034211-323.876412-323.876412-323.876412-178.844248 0-323.886645 145.033187-323.886645 323.876412 0 178.844248 145.043421 323.876412 323.886645 323.876412 2.701528 0 5.392824-0.029676 8.073886-0.102331l0.490164-0.010233c2.620687-0.062422 5.219885-0.163729 7.819083-0.295735l0.603751-0.031722c2.620687-0.132006 5.239328-0.295735 7.838525-0.50142l0.245593-0.010233c2.578732-0.203638 5.136997-0.429789 7.68503-0.685615l0.583285-0.060375c2.51631-0.255827 5.034666-0.543376 7.53051-0.861624l0.76748-0.092098c2.476401-0.325411 4.952802-0.663102 7.408737-1.043772l0.715291-0.11154c2.364861-0.358157 4.718465-0.747014 7.071046-1.167592l0.777713-0.144286c2.37407-0.417509 4.728698-0.87902 7.083326-1.348718l1.115404-0.23536c2.292206-0.471744 4.583388-0.960885 6.855128-1.484817 0.38988-0.092098 0.777713-0.184195 1.157359-0.276293 2.13871-0.491187 4.256954-1.013073 6.374174-1.555425 0.451278-0.11154 0.900509-0.226151 1.350764-0.347924 2.109034-0.541329 4.195555-1.115404 6.293333-1.698688 0.50142-0.144286 1.00284-0.285502 1.505283-0.429789 2.096754-0.603751 4.185322-1.216711 6.261611-1.862417 0.543376-0.163729 1.075495-0.337691 1.616824-0.50142 1.882883-0.593518 3.755534-1.207501 5.628184-1.830695 0.685615-0.226151 1.360997-0.461511 2.046612-0.685615 1.790786-0.62524 3.581572-1.249457 5.362124-1.895163 0.633427-0.234337 1.2689-0.459464 1.902326-0.695848 1.882883-0.695848 3.755534-1.411139 5.617951-2.13871 0.705058-0.276293 1.402953-0.551562 2.109034-0.827855 1.616824-0.645706 3.233648-1.310855 4.840238-1.986237 0.899486-0.367367 1.790786-0.757247 2.680039-1.134847 1.505283-0.645706 2.998287-1.289366 4.483104-1.954515 0.941442-0.419556 1.87265-0.839111 2.814092-1.2689 1.503237-0.695848 3.007497-1.390673 4.500501-2.109034 0.819668-0.387833 1.629103-0.777713 2.436492-1.174756 1.390673-0.675382 2.774183-1.360997 4.145413-2.058892 1.063215-0.541329 2.128477-1.083681 3.191692-1.63729 1.2689-0.653893 2.52859-1.319042 3.78521-1.994424 1.127683-0.603751 2.242064-1.216711 3.367701-1.832741 1.226944-0.685615 2.455935-1.37123 3.683902-2.067079 1.023306-0.574075 2.046612-1.167592 3.059686-1.759063 1.043772-0.61603 2.098801-1.228991 3.14155-1.853208 1.176802-0.717338 2.364861-1.423419 3.529383-2.148943 1.085728-0.665149 2.160199-1.341554 3.233648-2.016937 1.216711-0.76748 2.426259-1.545192 3.63376-2.332115 1.052982-0.685615 2.086521-1.360997 3.13234-2.058892l0.020466-0.010233 255.611655 275.361465c18.399045 19.822464 46.170552 23.64042 62.59564 9.56996l6.723122-5.752004C937.106466 927.146115 934.764118 898.512984 916.374282 878.7028zM416.63349 630.643144c-131.760906 0-238.604306-106.853633-238.604306-238.603283 0-131.750673 106.8434-238.604306 238.604306-238.604306 131.74965 0 238.594073 106.853633 238.594073 238.604306C655.227564 523.789511 548.38314 630.643144 416.63349 630.643144z"
            })
          ], -1)),
          l("span", {
            class: _(["webwin-label", d(t)])
          }, null, 2)
        ], 2),
        l("div", _e, [
          S(X, {
            placeholder: "查找",
            class: _(["webwin-inputbox", d(t)]),
            style: { "margin-top": "6px", width: "320px", transition: "all 0s ease" }
          }, null, 8, ["class"])
        ]),
        l("h3", {
          style: { "margin-top": "26px", "margin-bottom": "26px", "margin-left": "18px" },
          class: _(["webwin-title", d(t)])
        }, x(e.title), 3)
      ]),
      l("div", fe, [
        (c(!0), r($, null, I(e.items, (v, w) => (c(), r("li", {
          key: w,
          class: _({ active: w === e.modelValue }),
          onClick: (m) => s.$emit("update:modelValue", w)
        }, [
          a[2] || (a[2] = l("span", { class: "webwin-indicator" }, null, -1)),
          (c(), r("svg", xe, [
            l("path", {
              d: v.icon
            }, null, 8, ye)
          ])),
          l("span", {
            class: _(["webwin-label", d(t)])
          }, x(v.name), 3)
        ], 10, ge))), 128))
      ])
    ], 2));
  }
}, Y = /* @__PURE__ */ f($e, [["__scopeId", "data-v-9741fc8d"]]);
console.log("%c✨Welcome to Web-Win-Vue-Tile✨", `
  color: #0078d7;
  text-shadow: 0 1px 0 #0078d7;`);
const ke = {
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
      const n = e.currentTarget.getBoundingClientRect();
      this.mouseX = e.clientX - n.left, this.mouseY = e.clientY - n.top;
      const o = Math.min(
        this.mouseX,
        n.width - this.mouseX,
        this.mouseY,
        n.height - this.mouseY
      ), t = this.glowRadius;
      this.glowOpacity = Math.max(0, (t - o) / t);
    },
    handleMouseLeave() {
      this.isHovered = !1, this.glowOpacity = 0;
    }
  }
}, Ce = { class: "webwin-tile-content" }, Me = { class: "webwin-tile-icon" }, Se = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  width: "24",
  height: "24"
}, Ve = ["d"], Ie = { class: "webwin-tile-title" };
function Be(e, n, o, t, i, s) {
  return c(), r("div", {
    class: _(["webwin-tile", o.size]),
    style: W(s.tileStyle),
    onMousemove: n[0] || (n[0] = (...a) => s.handleMouseMove && s.handleMouseMove(...a)),
    onMouseenter: n[1] || (n[1] = (a) => i.isHovered = !0),
    onMouseleave: n[2] || (n[2] = (...a) => s.handleMouseLeave && s.handleMouseLeave(...a))
  }, [
    l("div", Ce, [
      l("div", Me, [
        k(e.$slots, "icon", {}, () => [
          (c(), r("svg", Se, [
            l("path", {
              fill: "white",
              d: o.icon
            }, null, 8, Ve)
          ]))
        ], !0)
      ]),
      l("div", Ie, x(o.title), 1)
    ]),
    l("div", {
      class: "webwin-glow-border",
      style: W(s.glowStyle)
    }, null, 4),
    l("div", {
      class: "webwin-pointer-glow",
      style: W(s.pointerGlowStyle)
    }, null, 4)
  ], 38);
}
const O = /* @__PURE__ */ f(ke, [["render", Be], ["__scopeId", "data-v-dca3ebff"]]), ze = { class: "webwin-container" }, Ne = ["src"], Re = ["src"], U = {
  __name: "webwin-tab",
  props: { menu: Array, url: Array, titlebar: Boolean, titlebartext: String },
  setup(e) {
    const n = e, o = u(0), t = u(0), i = u(n.url[0]);
    let s = u(""), a = u("");
    n.titlebar ? s.value = n.titlebartext : s.value = "", ne(o, (w) => {
      console.log("activeIndex changed:", w), console.log("new url:", n.url[w]), i.value = n.url[w], t.value = t.value === 0 ? 1 : 0, console.log("docState:", t.value);
    });
    function v(w) {
      w ? a.value = "" : a.value = "folded";
    }
    return (w, m) => (c(), r("div", ze, [
      S(Y, {
        modelValue: o.value,
        "onUpdate:modelValue": m[0] || (m[0] = (g) => o.value = g),
        items: e.menu,
        class: "webwin-item-1",
        bartitle: d(s),
        onUpdate: v
      }, null, 8, ["modelValue", "items", "bartitle"]),
      S(B, {
        name: "fade",
        mode: "out-in"
      }, {
        default: M(() => [
          t.value === 0 ? (c(), r("div", {
            key: "state0",
            class: _(["webwin-iframe-container", d(a)])
          }, [
            k(w.$slots, "default", {}, () => [
              z(l("iframe", {
                src: i.value,
                style: { "margin-top": "70px" },
                class: "webwin-iframe"
              }, null, 8, Ne), [
                [F, t.value === 0]
              ])
            ])
          ], 2)) : t.value === 1 ? (c(), r("div", {
            key: "state1",
            class: _(["webwin-iframe-container", d(a)])
          }, [
            k(w.$slots, "default", {}, () => [
              z(l("iframe", {
                src: i.value,
                style: { "margin-top": "70px" },
                class: "webwin-iframe"
              }, null, 8, Re), [
                [F, t.value === 1]
              ])
            ])
          ], 2)) : C("", !0)
        ]),
        _: 3
      })
    ]));
  }
}, We = ["value", "placeholder"], Te = /* @__PURE__ */ N({
  __name: "webwin-passwordbox",
  props: { value: String, placeholder: String },
  setup(e) {
    const n = e, o = u(n.value), t = u(n.placeholder);
    return (i, s) => (c(), r("input", {
      type: "password",
      name: "fname",
      class: "webwin-uwppassword",
      value: o.value,
      placeholder: t.value,
      onChange: s[0] || (s[0] = (a) => i.$emit("@change", a))
    }, null, 40, We));
  }
}), q = /* @__PURE__ */ f(Te, [["__scopeId", "data-v-dd8b91fe"]]), De = ["data-placeholder"], He = /* @__PURE__ */ N({
  __name: "webwin-richeditbox",
  props: {
    value: { type: String, default: "" },
    placeholder: { type: String, default: "" }
  },
  emits: ["update", "change"],
  setup(e, { emit: n }) {
    const o = e, t = n, i = u(null), s = u(o.placeholder), a = u(o.value);
    le(() => {
      i.value && (i.value.textContent = o.value || "", a.value = o.value || "");
    });
    const v = (g) => {
      if (!i.value) return;
      const b = i.value.textContent || "";
      t("update", b), oe(() => {
        if (i.value) {
          const p = document.createRange(), h = window.getSelection();
          p.selectNodeContents(i.value), p.collapse(!1), h?.removeAllRanges(), h?.addRange(p);
        }
      });
    }, w = (g) => {
      const b = g.target;
      b.textContent === o.placeholder && (b.textContent = "");
    }, m = (g) => {
      const b = g.target, p = b.textContent || "";
      p !== a.value && (t("change", {
        target: {
          value: p
        }
      }), a.value = p), p.trim() === "" && (b.textContent = "");
    };
    return (g, b) => (c(), r("div", {
      ref_key: "editableDiv",
      ref: i,
      class: "webwin-uwprichrditbox",
      contenteditable: "plaintext-only",
      "data-placeholder": s.value,
      onInput: v,
      onFocus: w,
      onBlur: m
    }, null, 40, De));
  }
}), E = /* @__PURE__ */ f(He, [["__scopeId", "data-v-f7a96b3a"]]), Xe = ["src"], Ye = {
  class: "webwin-n-name",
  style: { display: "inline-block", "margin-left": "6px" }
}, Fe = { class: "webwin-n-text webwin-n-title" }, Le = { class: "webwin-n-vulua" }, Oe = {
  __name: "webwin-notifications",
  props: { name: String, title: String, text: String, img: String },
  setup(e, { expose: n }) {
    const o = e;
    let t = u(!1), i = u(o.img);
    const s = () => {
      t.value = !t.value;
    };
    function a() {
      t.value && setTimeout(() => {
        t.value = !1;
      }, 250);
    }
    return n({ showNotification: s }), console.log("%c✨Welcome to Web-Win-Vue-Notifications✨", `
  color: #0078d7;
  text-shadow: 0 1px 0 #0078d7;`), (v, w) => (c(), T(B, { name: "slide-fade" }, {
      default: M(() => [
        d(t) ? (c(), r("div", {
          key: 0,
          class: "webwin-notification",
          onClick: a
        }, [
          l("img", {
            src: d(i),
            style: { "object-fit": "contain", "margin-left": "16px", "margin-right": "0px", display: "inline-block", "vertical-align": "middle", width: "16px", height: "16px" }
          }, null, 8, Xe),
          l("p", Ye, x(e.name), 1),
          l("h4", Fe, x(e.title), 1),
          l("p", Le, x(e.text), 1)
        ])) : C("", !0)
      ]),
      _: 1
    }));
  }
}, G = /* @__PURE__ */ f(Oe, [["__scopeId", "data-v-c29ecbbb"]]), Ue = ["name", "id"], qe = ["for"], Ee = /* @__PURE__ */ N({
  __name: "webwin-checkbox",
  props: { name: String, checked: Array },
  setup(e) {
    const n = e, o = u(n.name), t = u(n.checked);
    return (i, s) => (c(), r($, null, [
      z(l("input", {
        type: "checkbox",
        class: "webwin-checkbox",
        name: o.value,
        id: o.value,
        "onUpdate:modelValue": s[0] || (s[0] = (a) => t.value = a),
        onClick: s[1] || (s[1] = (a) => i.$emit("click", a))
      }, null, 8, Ue), [
        [ie, t.value]
      ]),
      l("label", {
        for: o.value,
        class: "webwin-checkbox-label"
      }, [
        k(i.$slots, "default", {}, void 0, !0)
      ], 8, qe)
    ], 64));
  }
}), j = /* @__PURE__ */ f(Ee, [["__scopeId", "data-v-3b234b99"]]), Ge = ["name", "id"], je = ["for"], Ke = /* @__PURE__ */ N({
  __name: "webwin-radio",
  props: { name: String, checked: Array },
  setup(e) {
    const n = e, o = u(n.name), t = u(n.checked);
    return (i, s) => (c(), r($, null, [
      z(l("input", {
        type: "radio",
        class: "webwin-radio",
        name: o.value,
        id: o.value,
        "onUpdate:modelValue": s[0] || (s[0] = (a) => t.value = a),
        onClick: s[1] || (s[1] = (a) => i.$emit("click", a))
      }, null, 8, Ge), [
        [se, t.value]
      ]),
      l("label", {
        for: o.value,
        class: "webwin-radio-label"
      }, [
        k(i.$slots, "default", {}, void 0, !0)
      ], 8, je)
    ], 64));
  }
}), K = /* @__PURE__ */ f(Ke, [["__scopeId", "data-v-04fe95c4"]]), Je = { style: { position: "relative" } }, Pe = {
  key: 0,
  class: "webwin-list-box"
}, Qe = { style: { overflow: "auto", height: "calc( 100% - 240px )" } }, Ze = ["onClick"], Ae = { class: "webwin-label" }, et = {
  __name: "webwin-combobox",
  props: {
    items: { type: Array, required: !0 },
    modelValue: { type: Number, default: 0 },
    title: { type: String, default: "itembox" }
  },
  emits: ["update"],
  setup(e, { emit: n }) {
    D((p) => ({
      v1be24303: d(m) + "px",
      v5172b45c: d(w) + "px"
    }));
    const o = e, t = n;
    let i = u(""), s = u(!1), a = u(o.modelValue), v = u(o.title), w = u(-6), m = u(6);
    function g(p) {
      s.value = !1, i.value = "", a.value = p, v.value = o.items[p].name, t("update", p), setTimeout(() => {
        w.value = p * -35 - 6, m.value = p * 35 + 6;
      }, 100);
    }
    function b() {
      s.value = !s.value, i.value = s.value ? "active" : "";
    }
    return (p, h) => (c(), r("div", Je, [
      l("div", {
        class: _(["webwin-list-box-button", d(i)]),
        onClick: b
      }, x(d(v)), 3),
      S(B, null, {
        default: M(() => [
          d(s) ? (c(), r("ul", Pe, [
            h[0] || (h[0] = l("div", { style: { height: "6px" } }, null, -1)),
            l("div", Qe, [
              (c(!0), r($, null, I(e.items, (y, V) => (c(), r("li", {
                key: V,
                class: _({ active: V === d(a) }),
                onClick: (R) => g(V)
              }, [
                l("span", Ae, x(y.name), 1)
              ], 10, Ze))), 128))
            ]),
            h[1] || (h[1] = l("div", { style: { height: "6px" } }, null, -1))
          ])) : C("", !0)
        ]),
        _: 1
      })
    ]));
  }
}, J = /* @__PURE__ */ f(et, [["__scopeId", "data-v-ac4b4002"]]), tt = { class: "webwin-progress-bar" }, nt = {
  __name: "webwin-progressbar",
  props: {
    progress: { type: Number, default: 0 }
  },
  setup(e) {
    return (n, o) => (c(), r("div", tt, [
      l("div", {
        class: "webwin-progress",
        style: W({ width: e.progress + "%" })
      }, null, 4)
    ]));
  }
}, P = /* @__PURE__ */ f(nt, [["__scopeId", "data-v-9ef8a457"]]), lt = {
  key: 0,
  class: "webwin-window-background"
}, ot = {
  key: 0,
  class: "webwin-window"
}, it = { style: { "margin-top": "24px", "margin-bottom": "24px" } }, st = { class: "webwin-window-title" }, at = { style: { "margin-left": "25px", "margin-right": "24px", width: "calc(100% - 48px)" } }, ct = { style: { "margin-left": "24px", "margin-right": "24px", width: "calc(100% - 48px)", display: "Flex", gap: "6px", "margin-top": "48px" } }, rt = {
  __name: "webwin-window",
  props: {
    items: { type: Array, required: !0, default: [{ text: "11" }, { text: "11" }] },
    title: { type: String, default: "Title" }
  },
  emits: ["clickBotton"],
  setup(e, { expose: n, emit: o }) {
    let t = u("");
    const i = o, s = () => {
      t.value = !0;
    };
    function a(v) {
      t.value = !1, i("clickBotton", v);
    }
    return n({ showDialog: s }), (v, w) => (c(), r($, null, [
      S(B, null, {
        default: M(() => [
          d(t) ? (c(), r("div", lt)) : C("", !0)
        ]),
        _: 1
      }),
      S(B, null, {
        default: M(() => [
          d(t) ? (c(), r("div", ot, [
            l("div", it, [
              l("h2", st, x(e.title), 1),
              l("div", at, [
                k(v.$slots, "default", {}, void 0, !0)
              ]),
              l("div", ct, [
                (c(!0), r($, null, I(e.items, (m, g) => (c(), T(H, {
                  class: "webwin-window-button",
                  key: g,
                  onClick: (b) => a(g)
                }, {
                  default: M(() => [
                    ae(x(m.text), 1)
                  ]),
                  _: 2
                }, 1032, ["onClick"]))), 128))
              ])
            ])
          ])) : C("", !0)
        ]),
        _: 3
      })
    ], 64));
  }
}, Q = /* @__PURE__ */ f(rt, [["__scopeId", "data-v-ed2b82b4"]]), ut = {}, dt = { class: "webwin-card" };
function wt(e, n) {
  return c(), r("div", dt, [
    k(e.$slots, "default", {}, void 0, !0)
  ]);
}
const Z = /* @__PURE__ */ f(ut, [["render", wt], ["__scopeId", "data-v-26a8c2e0"]]), pt = {
  key: 0,
  class: "webwin-dropdown-container"
}, mt = { class: "webwin-dropdown" }, vt = { style: { overflow: "auto", height: "calc( 100% - 240px )" } }, bt = ["onClick"], ht = { class: "webwin-label" }, _t = {
  __name: "webwin-dropdown",
  props: {
    items: { type: Array, required: !0 }
  },
  emits: ["update"],
  setup(e, { expose: n, emit: o }) {
    D((h) => ({
      v08042082: d(s) + "px",
      v6fe54d61: d(a) + "px"
    }));
    const t = e, i = o;
    let s = u(0), a = u(0), v = u(""), w = u(!1), m = u(0), g = u(t.title || "");
    function b(h) {
      w.value = !1, v.value = "", m.value = h, g.value = t.items[h].name, i("update", h);
    }
    return n({ showbox: (h, y) => {
      w.value = !w.value, v.value = w.value ? "active" : "", s.value = h, a.value = y;
    } }), (h, y) => (c(), r("div", null, [
      S(B, null, {
        default: M(() => [
          d(w) ? (c(), r("div", pt, [
            l("div", {
              class: "webwin-dropdown_backgroud",
              onClick: y[0] || (y[0] = (V) => L(w) ? w.value = !1 : w = !1)
            }),
            l("ul", mt, [
              y[1] || (y[1] = l("div", { style: { height: "6px" } }, null, -1)),
              l("div", vt, [
                (c(!0), r($, null, I(e.items, (V, R) => (c(), r("li", {
                  key: R,
                  class: _({ active: R === d(m) }),
                  onClick: (It) => b(R)
                }, [
                  l("span", ht, x(V.name), 1)
                ], 10, bt))), 128))
              ]),
              y[2] || (y[2] = l("div", { style: { height: "6px" } }, null, -1))
            ])
          ])) : C("", !0)
        ]),
        _: 1
      })
    ]));
  }
}, A = /* @__PURE__ */ f(_t, [["__scopeId", "data-v-2d220786"]]), ft = { class: "webwin-topappbar" }, gt = ["is", "onClick"], xt = { class: "webwin-topappbar-label" }, yt = {
  key: 0,
  class: "webwin-topappbar-indicator"
}, $t = {
  key: 1,
  class: "webwin-topappbar-indicator-not"
}, kt = ["onClick"], Ct = { class: "webwin-topappbar-label" }, Mt = {
  __name: "webwin-topappbar",
  props: { items: Array, activeIndex: Number, rightMenu: { type: Array, default: [] } },
  emits: ["update"],
  setup(e, { emit: n }) {
    const o = n, t = e;
    let i = u(t.activeIndex || 0), s = u(t.items), a = u(t.rightMenu);
    function v(m) {
      i.value = m, o("update", [m, "left"]);
    }
    function w(m) {
      o("update", [m, "right"]);
    }
    return (m, g) => (c(), r("ul", ft, [
      (c(), T(ce, null, [
        (c(!0), r($, null, I(d(s), (b, p) => (c(), r("li", {
          is: m.activeComponent,
          key: p,
          class: _([{ active: p === d(i) }, "webwin-topappbar-item"]),
          onClick: (h) => v(p)
        }, [
          l("span", xt, x(b.name), 1),
          p === d(i) ? (c(), r("span", yt)) : C("", !0),
          p != d(i) ? (c(), r("span", $t)) : C("", !0)
        ], 10, gt))), 128))
      ], 1024)),
      (c(!0), r($, null, I(d(a), (b, p) => (c(), r("li", {
        key: p,
        onClick: (h) => w(p),
        class: "webwin-topappbar-item",
        style: { float: "right" }
      }, [
        l("span", Ct, x(b.name), 1)
      ], 8, kt))), 128))
    ]));
  }
}, ee = /* @__PURE__ */ f(Mt, [["__scopeId", "data-v-ef60c98a"]]), St = {
  __name: "webwin-range",
  props: /* @__PURE__ */ re({
    color: { type: String, default: "#006fd0" }
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    D((o) => ({
      v23dfb612: e.color
    }));
    let n = ue(e, "modelValue");
    return (o, t) => z((c(), r("input", {
      type: "range",
      "onUpdate:modelValue": t[0] || (t[0] = (i) => L(n) ? n.value = i : n = i),
      class: "webwin-slider",
      min: "1",
      max: "100"
    }, null, 512)), [
      [de, d(n)]
    ]);
  }
}, te = /* @__PURE__ */ f(St, [["__scopeId", "data-v-480ca2b0"]]), Vt = [te, ee, A, Z, Q, P, J, K, j, H, Y, O, U, X, q, E, G], zt = {
  install(e) {
    Vt.forEach((n) => {
      e.component("winbutton", H), e.component("winitem", Y), e.component("wintile", O), e.component("wintab", U), e.component("wininputbox", X), e.component("winpasswordbox", q), e.component("winricheditbox", E), e.component("winnotifications", G), e.component("wincheckbox", j), e.component("winradio", K), e.component("wincombobox", J), e.component("winprogressbar", P), e.component("winwindow", Q), e.component("wincard", Z), e.component("windropdown", A), e.component("wintopappbar", ee), e.component("winrange", te);
    });
  }
};
export {
  zt as default,
  H as winbutton,
  Z as wincard,
  j as wincheckbox,
  J as wincombobox,
  A as windropdown,
  X as wininputbox,
  Y as winitem,
  G as winnotifications,
  q as winpasswordbox,
  P as winprogressbar,
  K as winradio,
  te as winrange,
  E as winricheditbox,
  U as wintab,
  O as wintile,
  ee as wintopappbar,
  Q as winwindow
};

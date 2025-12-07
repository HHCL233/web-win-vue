import { createElementBlock as r, openBlock as c, renderSlot as k, defineComponent as z, ref as u, normalizeClass as _, unref as d, createElementVNode as n, toDisplayString as x, createVNode as S, Fragment as $, renderList as I, normalizeStyle as R, watch as X, Transition as B, withCtx as M, createCommentVNode as C, withDirectives as A, vShow as D, onMounted as Y, nextTick as F, createBlock as T, vModelCheckbox as L, vModelRadio as O, useCssVars as W, createTextVNode as U, isRef as H, KeepAlive as q, mergeModels as E, useModel as G, vModelText as j } from "vue";
const f = (t, l) => {
  const o = t.__vccOpts || t;
  for (const [e, s] of l)
    o[e] = s;
  return o;
}, K = {}, J = { class: "webwin-button" };
function P(t, l) {
  return c(), r("button", J, [
    k(t.$slots, "default", {}, void 0, !0)
  ]);
}
const Q = /* @__PURE__ */ f(K, [["render", P], ["__scopeId", "data-v-a059307c"]]), Z = ["value", "placeholder"], ee = /* @__PURE__ */ z({
  __name: "webwin-inputbox",
  props: { value: String, placeholder: String },
  setup(t) {
    const o = u(t.placeholder);
    return (e, s) => (c(), r("input", {
      type: "text",
      name: "fname",
      class: "webwin-uwpinput",
      value: t.value,
      placeholder: o.value,
      onChange: s[0] || (s[0] = (i) => e.$emit("@change", i))
    }, null, 40, Z));
  }
}), te = /* @__PURE__ */ f(ee, [["__scopeId", "data-v-7641a566"]]), le = { class: "webwin-sidebar-text" }, ne = { style: { width: "var(--sb-width, 350px)", margin: "auto" } }, oe = { style: { overflow: "auto", height: "calc( 100% - 240px )", "overflow-x": "hidden" } }, se = ["onClick"], ie = {
  class: "webwin-icon",
  viewBox: "0 0 1024 1024",
  fill: "currentColor",
  "aria-hidden": "true",
  height: "16"
}, ae = ["d"], ce = {
  __name: "webwin-item",
  props: {
    items: { type: Array, required: !0 },
    modelValue: { type: Number, default: 0 },
    title: { type: String, default: "Menu" },
    bartitle: { type: String, default: "Window" }
  },
  emits: ["update"],
  setup(t, { emit: l }) {
    const o = l;
    let e = u("");
    function s() {
      e.value === "" ? (e.value = "folded", o("update", !1)) : (e.value = "", o("update", !0));
    }
    return (i, a) => (c(), r("ul", {
      class: _(["webwin-side-bar", d(e)])
    }, [
      n("div", {
        class: _(["webwin-sidebar", d(e)])
      }, [
        n("p", le, x(t.bartitle), 1)
      ], 2),
      n("div", null, [
        n("li", {
          style: { "margin-top": "24px", width: "24px" },
          onClick: s
        }, [
          a[0] || (a[0] = n("svg", {
            class: "webwin-icon",
            viewBox: "0 0 1024 1024",
            fill: "currentColor",
            "aria-hidden": "true"
          }, [
            n("path", {
              xmlns: "http://www.w3.org/2000/svg",
              style: { stroke: "none", "fill-rule": "nonzero", fill: "rgb(0%,0%,0%)", "fill-opacity": "1" },
              d: "M63.7 191.4h895.2v64H63.7zM63.7 480.2h895.2v64H63.7zM63.7 767.2h895.2v64H63.7z"
            })
          ], -1)),
          n("span", {
            class: _(["webwin-label", d(e)])
          }, null, 2)
        ]),
        n("li", {
          onClick: s,
          class: _(["webwin-search-fold", d(e)])
        }, [
          a[1] || (a[1] = n("svg", {
            class: "webwin-icon",
            viewBox: "0 0 1024 1024",
            fill: "currentColor",
            "aria-hidden": "true"
          }, [
            n("path", {
              xmlns: "http://www.w3.org/2000/svg",
              style: { stroke: "none", "fill-rule": "nonzero", fill: "rgb(0%,0%,0%)", "fill-opacity": "1" },
              d: "M916.374282 878.7028 661.417543 604.016717c1.402953-1.616824 2.784416-3.254114 4.155646-4.90266 0.367367-0.459464 0.747014-0.909719 1.115404-1.37123 1.308809-1.585101 2.600221-3.181459 3.879354-4.798283 0.337691-0.429789 0.675382-0.86981 1.011027-1.299599 1.209548-1.555425 2.416026-3.122107 3.603061-4.696975 0.347924-0.471744 0.695848-0.931209 1.043772-1.402953 1.176802-1.585101 2.354628-3.181459 3.499707-4.798283 0.318248-0.449231 0.633427-0.889253 0.951675-1.331321 1.197268-1.686409 2.37407-3.39533 3.541663-5.104251 0.285502-0.419556 0.561795-0.829901 0.849344-1.249457 1.257643-1.87265 2.495844-3.755534 3.723811-5.65786 0.23536-0.360204 0.461511-0.727571 0.695848-1.085728 1.127683-1.77032 2.232854-3.551896 3.325745-5.342682 0.268106-0.440022 0.533143-0.87902 0.799202-1.319042 1.052982-1.750877 2.096754-3.50994 3.120061-5.28026 0.255827-0.440022 0.511653-0.87902 0.76748-1.331321 1.035586-1.801019 2.046612-3.611248 3.040243-5.432733 0.226151-0.409322 0.449231-0.819668 0.675382-1.228991 1.052982-1.944282 2.076288-3.90903 3.099594-5.873778l0.533143-1.052982c1.043772-2.046612 2.067079-4.103458 3.069919-6.181793 0.184195-0.358157 0.347924-0.715291 0.521886-1.083681 0.941442-1.954515 1.851161-3.90903 2.75167-5.884011 0.184195-0.400113 0.358157-0.809435 0.541329-1.207501 0.881067-1.954515 1.740644-3.931542 2.579755-5.9055 0.173962-0.398066 0.347924-0.797156 0.511653-1.197268 0.859577-2.036379 1.698688-4.082992 2.506077-6.139837 0.134053-0.316202 0.26606-0.64366 0.38988-0.971118 0.87902-2.240017 1.738597-4.493338 2.568499-6.753821l0.255827-0.707105c0.807389-2.220574 1.595334-4.451382 2.362814-6.691399 0.113587-0.327458 0.215918-0.655939 0.318248-0.973164 0.727571-2.148943 1.432629-4.296863 2.109034-6.465249l0.327458-1.055029c0.663102-2.169409 1.308809-4.349051 1.942235-6.538927l0.277316-0.971118c0.64366-2.272763 1.257643-4.563946 1.851161-6.856152 0.062422-0.225127 0.12382-0.450255 0.186242-0.674359 0.623193-2.455935 1.226944-4.923126 1.801019-7.398504l0.121773-0.542352c0.543376-2.373047 1.065262-4.748141 1.555425-7.141654l0.173962-0.880043c0.471744-2.302439 0.920976-4.626367 1.341554-6.948249l0.163729-0.920976c0.419556-2.353604 0.809435-4.716418 1.167592-7.081279 0.039909-0.26606 0.092098-0.532119 0.121773-0.797156 0.38988-2.518357 0.747014-5.045923 1.065262-7.582699l0.029676-0.23536c0.337691-2.620687 0.633427-5.238304 0.901533-7.868201l0.060375-0.563842c0.245593-2.486634 0.471744-4.982478 0.665149-7.480368l0.052189-0.788969c0.184195-2.445702 0.337691-4.900613 0.469698-7.356548l0.041956-0.849344c0.121773-2.5071 0.224104-5.024433 0.285502-7.541767l0.020466-0.582261c0.062422-2.711761 0.104377-5.424546 0.104377-8.146541 0-178.843224-145.034211-323.876412-323.876412-323.876412-178.844248 0-323.886645 145.033187-323.886645 323.876412 0 178.844248 145.043421 323.876412 323.886645 323.876412 2.701528 0 5.392824-0.029676 8.073886-0.102331l0.490164-0.010233c2.620687-0.062422 5.219885-0.163729 7.819083-0.295735l0.603751-0.031722c2.620687-0.132006 5.239328-0.295735 7.838525-0.50142l0.245593-0.010233c2.578732-0.203638 5.136997-0.429789 7.68503-0.685615l0.583285-0.060375c2.51631-0.255827 5.034666-0.543376 7.53051-0.861624l0.76748-0.092098c2.476401-0.325411 4.952802-0.663102 7.408737-1.043772l0.715291-0.11154c2.364861-0.358157 4.718465-0.747014 7.071046-1.167592l0.777713-0.144286c2.37407-0.417509 4.728698-0.87902 7.083326-1.348718l1.115404-0.23536c2.292206-0.471744 4.583388-0.960885 6.855128-1.484817 0.38988-0.092098 0.777713-0.184195 1.157359-0.276293 2.13871-0.491187 4.256954-1.013073 6.374174-1.555425 0.451278-0.11154 0.900509-0.226151 1.350764-0.347924 2.109034-0.541329 4.195555-1.115404 6.293333-1.698688 0.50142-0.144286 1.00284-0.285502 1.505283-0.429789 2.096754-0.603751 4.185322-1.216711 6.261611-1.862417 0.543376-0.163729 1.075495-0.337691 1.616824-0.50142 1.882883-0.593518 3.755534-1.207501 5.628184-1.830695 0.685615-0.226151 1.360997-0.461511 2.046612-0.685615 1.790786-0.62524 3.581572-1.249457 5.362124-1.895163 0.633427-0.234337 1.2689-0.459464 1.902326-0.695848 1.882883-0.695848 3.755534-1.411139 5.617951-2.13871 0.705058-0.276293 1.402953-0.551562 2.109034-0.827855 1.616824-0.645706 3.233648-1.310855 4.840238-1.986237 0.899486-0.367367 1.790786-0.757247 2.680039-1.134847 1.505283-0.645706 2.998287-1.289366 4.483104-1.954515 0.941442-0.419556 1.87265-0.839111 2.814092-1.2689 1.503237-0.695848 3.007497-1.390673 4.500501-2.109034 0.819668-0.387833 1.629103-0.777713 2.436492-1.174756 1.390673-0.675382 2.774183-1.360997 4.145413-2.058892 1.063215-0.541329 2.128477-1.083681 3.191692-1.63729 1.2689-0.653893 2.52859-1.319042 3.78521-1.994424 1.127683-0.603751 2.242064-1.216711 3.367701-1.832741 1.226944-0.685615 2.455935-1.37123 3.683902-2.067079 1.023306-0.574075 2.046612-1.167592 3.059686-1.759063 1.043772-0.61603 2.098801-1.228991 3.14155-1.853208 1.176802-0.717338 2.364861-1.423419 3.529383-2.148943 1.085728-0.665149 2.160199-1.341554 3.233648-2.016937 1.216711-0.76748 2.426259-1.545192 3.63376-2.332115 1.052982-0.685615 2.086521-1.360997 3.13234-2.058892l0.020466-0.010233 255.611655 275.361465c18.399045 19.822464 46.170552 23.64042 62.59564 9.56996l6.723122-5.752004C937.106466 927.146115 934.764118 898.512984 916.374282 878.7028zM416.63349 630.643144c-131.760906 0-238.604306-106.853633-238.604306-238.603283 0-131.750673 106.8434-238.604306 238.604306-238.604306 131.74965 0 238.594073 106.853633 238.594073 238.604306C655.227564 523.789511 548.38314 630.643144 416.63349 630.643144z"
            })
          ], -1)),
          n("span", {
            class: _(["webwin-label", d(e)])
          }, null, 2)
        ], 2),
        n("div", ne, [
          S(te, {
            placeholder: "查找",
            class: _(["webwin-inputbox", d(e)]),
            style: { "margin-top": "6px", width: "320px", transition: "all 0s ease" }
          }, null, 8, ["class"])
        ]),
        n("h3", {
          style: { "margin-top": "26px", "margin-bottom": "26px", "margin-left": "18px" },
          class: _(["webwin-title", d(e)])
        }, x(t.title), 3)
      ]),
      n("div", oe, [
        (c(!0), r($, null, I(t.items, (m, p) => (c(), r("li", {
          key: p,
          class: _({ active: p === t.modelValue }),
          onClick: (v) => i.$emit("update:modelValue", p)
        }, [
          a[2] || (a[2] = n("span", { class: "webwin-indicator" }, null, -1)),
          (c(), r("svg", ie, [
            n("path", {
              d: m.icon
            }, null, 8, ae)
          ])),
          n("span", {
            class: _(["webwin-label", d(e)])
          }, x(m.name), 3)
        ], 10, se))), 128))
      ])
    ], 2));
  }
}, re = /* @__PURE__ */ f(ce, [["__scopeId", "data-v-9741fc8d"]]);
console.log("%c✨Welcome to Web-Win-Vue-Tile✨", `
  color: #0078d7;
  text-shadow: 0 1px 0 #0078d7;`);
const ue = {
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
    handleMouseMove(t) {
      const l = t.currentTarget.getBoundingClientRect();
      this.mouseX = t.clientX - l.left, this.mouseY = t.clientY - l.top;
      const o = Math.min(
        this.mouseX,
        l.width - this.mouseX,
        this.mouseY,
        l.height - this.mouseY
      ), e = this.glowRadius;
      this.glowOpacity = Math.max(0, (e - o) / e);
    },
    handleMouseLeave() {
      this.isHovered = !1, this.glowOpacity = 0;
    }
  }
}, de = { class: "webwin-tile-content" }, pe = { class: "webwin-tile-icon" }, we = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  width: "24",
  height: "24"
}, ve = ["d"], me = { class: "webwin-tile-title" };
function be(t, l, o, e, s, i) {
  return c(), r("div", {
    class: _(["webwin-tile", o.size]),
    style: R(i.tileStyle),
    onMousemove: l[0] || (l[0] = (...a) => i.handleMouseMove && i.handleMouseMove(...a)),
    onMouseenter: l[1] || (l[1] = (a) => s.isHovered = !0),
    onMouseleave: l[2] || (l[2] = (...a) => i.handleMouseLeave && i.handleMouseLeave(...a))
  }, [
    n("div", de, [
      n("div", pe, [
        k(t.$slots, "icon", {}, () => [
          (c(), r("svg", we, [
            n("path", {
              fill: "white",
              d: o.icon
            }, null, 8, ve)
          ]))
        ], !0)
      ]),
      n("div", me, x(o.title), 1)
    ]),
    n("div", {
      class: "webwin-glow-border",
      style: R(i.glowStyle)
    }, null, 4),
    n("div", {
      class: "webwin-pointer-glow",
      style: R(i.pointerGlowStyle)
    }, null, 4)
  ], 38);
}
const bt = /* @__PURE__ */ f(ue, [["render", be], ["__scopeId", "data-v-dca3ebff"]]), he = { class: "webwin-container" }, _e = ["src"], fe = ["src"], ht = {
  __name: "webwin-tab",
  props: { menu: Array, url: Array, titlebar: Boolean, titlebartext: String },
  setup(t) {
    const l = t, o = u(0), e = u(0), s = u(l.url[0]);
    let i = u(""), a = u("");
    l.titlebar ? i.value = l.titlebartext : i.value = "", X(o, (p) => {
      console.log("activeIndex changed:", p), console.log("new url:", l.url[p]), s.value = l.url[p], e.value = e.value === 0 ? 1 : 0, console.log("docState:", e.value);
    });
    function m(p) {
      p ? a.value = "" : a.value = "folded";
    }
    return (p, v) => (c(), r("div", he, [
      S(re, {
        modelValue: o.value,
        "onUpdate:modelValue": v[0] || (v[0] = (g) => o.value = g),
        items: t.menu,
        class: "webwin-item-1",
        bartitle: d(i),
        onUpdate: m
      }, null, 8, ["modelValue", "items", "bartitle"]),
      S(B, {
        name: "fade",
        mode: "out-in"
      }, {
        default: M(() => [
          e.value === 0 ? (c(), r("div", {
            key: "state0",
            class: _(["webwin-iframe-container", d(a)])
          }, [
            k(p.$slots, "default", {}, () => [
              A(n("iframe", {
                src: s.value,
                style: { "margin-top": "70px" },
                class: "webwin-iframe"
              }, null, 8, _e), [
                [D, e.value === 0]
              ])
            ])
          ], 2)) : e.value === 1 ? (c(), r("div", {
            key: "state1",
            class: _(["webwin-iframe-container", d(a)])
          }, [
            k(p.$slots, "default", {}, () => [
              A(n("iframe", {
                src: s.value,
                style: { "margin-top": "70px" },
                class: "webwin-iframe"
              }, null, 8, fe), [
                [D, e.value === 1]
              ])
            ])
          ], 2)) : C("", !0)
        ]),
        _: 3
      })
    ]));
  }
}, ge = ["value", "placeholder"], xe = /* @__PURE__ */ z({
  __name: "webwin-passwordbox",
  props: { value: String, placeholder: String },
  setup(t) {
    const l = t, o = u(l.value), e = u(l.placeholder);
    return (s, i) => (c(), r("input", {
      type: "password",
      name: "fname",
      class: "webwin-uwppassword",
      value: o.value,
      placeholder: e.value,
      onChange: i[0] || (i[0] = (a) => s.$emit("@change", a))
    }, null, 40, ge));
  }
}), _t = /* @__PURE__ */ f(xe, [["__scopeId", "data-v-dd8b91fe"]]), ye = ["data-placeholder"], $e = /* @__PURE__ */ z({
  __name: "webwin-richeditbox",
  props: {
    value: { type: String, default: "" },
    placeholder: { type: String, default: "" }
  },
  emits: ["update", "change"],
  setup(t, { emit: l }) {
    const o = t, e = l, s = u(null), i = u(o.placeholder), a = u(o.value);
    Y(() => {
      s.value && (s.value.textContent = o.value || "", a.value = o.value || "");
    });
    const m = (g) => {
      if (!s.value) return;
      const b = s.value.textContent || "";
      e("update", b), F(() => {
        if (s.value) {
          const w = document.createRange(), h = window.getSelection();
          w.selectNodeContents(s.value), w.collapse(!1), h?.removeAllRanges(), h?.addRange(w);
        }
      });
    }, p = (g) => {
      const b = g.target;
      b.textContent === o.placeholder && (b.textContent = "");
    }, v = (g) => {
      const b = g.target, w = b.textContent || "";
      w !== a.value && (e("change", {
        target: {
          value: w
        }
      }), a.value = w), w.trim() === "" && (b.textContent = "");
    };
    return (g, b) => (c(), r("div", {
      ref_key: "editableDiv",
      ref: s,
      class: "webwin-uwprichrditbox",
      contenteditable: "plaintext-only",
      "data-placeholder": i.value,
      onInput: m,
      onFocus: p,
      onBlur: v
    }, null, 40, ye));
  }
}), ft = /* @__PURE__ */ f($e, [["__scopeId", "data-v-f7a96b3a"]]), ke = ["src"], Ce = {
  class: "webwin-n-name",
  style: { display: "inline-block", "margin-left": "6px" }
}, Me = { class: "webwin-n-text webwin-n-title" }, Se = { class: "webwin-n-vulua" }, Ve = {
  __name: "webwin-notifications",
  props: { name: String, title: String, text: String, img: String },
  setup(t, { expose: l }) {
    const o = t;
    let e = u(!1), s = u(o.img);
    const i = () => {
      e.value = !e.value;
    };
    function a() {
      e.value && setTimeout(() => {
        e.value = !1;
      }, 250);
    }
    return l({ showNotification: i }), console.log("%c✨Welcome to Web-Win-Vue-Notifications✨", `
  color: #0078d7;
  text-shadow: 0 1px 0 #0078d7;`), (m, p) => (c(), T(B, { name: "slide-fade" }, {
      default: M(() => [
        d(e) ? (c(), r("div", {
          key: 0,
          class: "webwin-notification",
          onClick: a
        }, [
          n("img", {
            src: d(s),
            style: { "object-fit": "contain", "margin-left": "16px", "margin-right": "0px", display: "inline-block", "vertical-align": "middle", width: "16px", height: "16px" }
          }, null, 8, ke),
          n("p", Ce, x(t.name), 1),
          n("h4", Me, x(t.title), 1),
          n("p", Se, x(t.text), 1)
        ])) : C("", !0)
      ]),
      _: 1
    }));
  }
}, gt = /* @__PURE__ */ f(Ve, [["__scopeId", "data-v-c29ecbbb"]]), Ie = ["name", "id"], Be = ["for"], Ae = /* @__PURE__ */ z({
  __name: "webwin-checkbox",
  props: { name: String, checked: Array },
  setup(t) {
    const l = t, o = u(l.name), e = u(l.checked);
    return (s, i) => (c(), r($, null, [
      A(n("input", {
        type: "checkbox",
        class: "webwin-checkbox",
        name: o.value,
        id: o.value,
        "onUpdate:modelValue": i[0] || (i[0] = (a) => e.value = a),
        onClick: i[1] || (i[1] = (a) => s.$emit("click", a))
      }, null, 8, Ie), [
        [L, e.value]
      ]),
      n("label", {
        for: o.value,
        class: "webwin-checkbox-label"
      }, [
        k(s.$slots, "default", {}, void 0, !0)
      ], 8, Be)
    ], 64));
  }
}), xt = /* @__PURE__ */ f(Ae, [["__scopeId", "data-v-3b234b99"]]), ze = ["name", "id"], Ne = ["for"], Re = /* @__PURE__ */ z({
  __name: "webwin-radio",
  props: { name: String, checked: Array },
  setup(t) {
    const l = t, o = u(l.name), e = u(l.checked);
    return (s, i) => (c(), r($, null, [
      A(n("input", {
        type: "radio",
        class: "webwin-radio",
        name: o.value,
        id: o.value,
        "onUpdate:modelValue": i[0] || (i[0] = (a) => e.value = a),
        onClick: i[1] || (i[1] = (a) => s.$emit("click", a))
      }, null, 8, ze), [
        [O, e.value]
      ]),
      n("label", {
        for: o.value,
        class: "webwin-radio-label"
      }, [
        k(s.$slots, "default", {}, void 0, !0)
      ], 8, Ne)
    ], 64));
  }
}), yt = /* @__PURE__ */ f(Re, [["__scopeId", "data-v-04fe95c4"]]), Te = { style: { position: "relative" } }, We = {
  key: 0,
  class: "webwin-list-box"
}, De = { style: { overflow: "auto", height: "calc( 100% - 240px )" } }, He = ["onClick"], Xe = { class: "webwin-label" }, Ye = {
  __name: "webwin-combobox",
  props: {
    items: { type: Array, required: !0 },
    modelValue: { type: Number, default: 0 },
    title: { type: String, default: "itembox" }
  },
  emits: ["update"],
  setup(t, { emit: l }) {
    W((w) => ({
      v1be24303: d(v) + "px",
      v5172b45c: d(p) + "px"
    }));
    const o = t, e = l;
    let s = u(""), i = u(!1), a = u(o.modelValue), m = u(o.title), p = u(-6), v = u(6);
    function g(w) {
      i.value = !1, s.value = "", a.value = w, m.value = o.items[w].name, e("update", w), setTimeout(() => {
        p.value = w * -35 - 6, v.value = w * 35 + 6;
      }, 100);
    }
    function b() {
      i.value = !i.value, s.value = i.value ? "active" : "";
    }
    return (w, h) => (c(), r("div", Te, [
      n("div", {
        class: _(["webwin-list-box-button", d(s)]),
        onClick: b
      }, x(d(m)), 3),
      S(B, null, {
        default: M(() => [
          d(i) ? (c(), r("ul", We, [
            h[0] || (h[0] = n("div", { style: { height: "6px" } }, null, -1)),
            n("div", De, [
              (c(!0), r($, null, I(t.items, (y, V) => (c(), r("li", {
                key: V,
                class: _({ active: V === d(a) }),
                onClick: (N) => g(V)
              }, [
                n("span", Xe, x(y.name), 1)
              ], 10, He))), 128))
            ]),
            h[1] || (h[1] = n("div", { style: { height: "6px" } }, null, -1))
          ])) : C("", !0)
        ]),
        _: 1
      })
    ]));
  }
}, $t = /* @__PURE__ */ f(Ye, [["__scopeId", "data-v-ac4b4002"]]), Fe = { class: "webwin-progress-bar" }, Le = {
  __name: "webwin-progressbar",
  props: {
    progress: { type: Number, default: 0 }
  },
  setup(t) {
    return (l, o) => (c(), r("div", Fe, [
      n("div", {
        class: "webwin-progress",
        style: R({ width: t.progress + "%" })
      }, null, 4)
    ]));
  }
}, kt = /* @__PURE__ */ f(Le, [["__scopeId", "data-v-9ef8a457"]]), Oe = {
  key: 0,
  class: "webwin-window-background"
}, Ue = {
  key: 0,
  class: "webwin-window"
}, qe = { style: { "margin-top": "24px", "margin-bottom": "24px" } }, Ee = { class: "webwin-window-title" }, Ge = { style: { "margin-left": "25px", "margin-right": "24px", width: "calc(100% - 48px)" } }, je = { style: { "margin-left": "24px", "margin-right": "24px", width: "calc(100% - 48px)", display: "Flex", gap: "6px", "margin-top": "48px" } }, Ke = {
  __name: "webwin-window",
  props: {
    items: { type: Array, required: !0, default: [{ text: "11" }, { text: "11" }] },
    title: { type: String, default: "Title" }
  },
  emits: ["clickBotton"],
  setup(t, { expose: l, emit: o }) {
    let e = u("");
    const s = o, i = () => {
      e.value = !0;
    };
    function a(m) {
      e.value = !1, s("clickBotton", m);
    }
    return l({ showDialog: i }), (m, p) => (c(), r($, null, [
      S(B, null, {
        default: M(() => [
          d(e) ? (c(), r("div", Oe)) : C("", !0)
        ]),
        _: 1
      }),
      S(B, null, {
        default: M(() => [
          d(e) ? (c(), r("div", Ue, [
            n("div", qe, [
              n("h2", Ee, x(t.title), 1),
              n("div", Ge, [
                k(m.$slots, "default", {}, void 0, !0)
              ]),
              n("div", je, [
                (c(!0), r($, null, I(t.items, (v, g) => (c(), T(Q, {
                  class: "webwin-window-button",
                  key: g,
                  onClick: (b) => a(g)
                }, {
                  default: M(() => [
                    U(x(v.text), 1)
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
}, Ct = /* @__PURE__ */ f(Ke, [["__scopeId", "data-v-ed2b82b4"]]), Je = {}, Pe = { class: "webwin-card" };
function Qe(t, l) {
  return c(), r("div", Pe, [
    k(t.$slots, "default", {}, void 0, !0)
  ]);
}
const Mt = /* @__PURE__ */ f(Je, [["render", Qe], ["__scopeId", "data-v-26a8c2e0"]]), Ze = {
  key: 0,
  class: "webwin-dropdown-container"
}, et = { class: "webwin-dropdown" }, tt = { style: { overflow: "auto", height: "calc( 100% - 240px )" } }, lt = ["onClick"], nt = { class: "webwin-label" }, ot = {
  __name: "webwin-dropdown",
  props: {
    items: { type: Array, required: !0 }
  },
  emits: ["update"],
  setup(t, { expose: l, emit: o }) {
    W((h) => ({
      v08042082: d(i) + "px",
      v6fe54d61: d(a) + "px"
    }));
    const e = t, s = o;
    let i = u(0), a = u(0), m = u(""), p = u(!1), v = u(0), g = u(e.title || "");
    function b(h) {
      p.value = !1, m.value = "", v.value = h, g.value = e.items[h].name, s("update", h);
    }
    return l({ showbox: (h, y) => {
      p.value = !p.value, m.value = p.value ? "active" : "", i.value = h, a.value = y;
    } }), (h, y) => (c(), r("div", null, [
      S(B, null, {
        default: M(() => [
          d(p) ? (c(), r("div", Ze, [
            n("div", {
              class: "webwin-dropdown_backgroud",
              onClick: y[0] || (y[0] = (V) => H(p) ? p.value = !1 : p = !1)
            }),
            n("ul", et, [
              y[1] || (y[1] = n("div", { style: { height: "6px" } }, null, -1)),
              n("div", tt, [
                (c(!0), r($, null, I(t.items, (V, N) => (c(), r("li", {
                  key: N,
                  class: _({ active: N === d(v) }),
                  onClick: (vt) => b(N)
                }, [
                  n("span", nt, x(V.name), 1)
                ], 10, lt))), 128))
              ]),
              y[2] || (y[2] = n("div", { style: { height: "6px" } }, null, -1))
            ])
          ])) : C("", !0)
        ]),
        _: 1
      })
    ]));
  }
}, St = /* @__PURE__ */ f(ot, [["__scopeId", "data-v-2d220786"]]), st = { class: "webwin-topappbar" }, it = ["is", "onClick"], at = { class: "webwin-topappbar-label" }, ct = {
  key: 0,
  class: "webwin-topappbar-indicator"
}, rt = {
  key: 1,
  class: "webwin-topappbar-indicator-not"
}, ut = ["onClick"], dt = { class: "webwin-topappbar-label" }, pt = {
  __name: "webwin-topappbar",
  props: { items: Array, activeIndex: Number, rightMenu: { type: Array, default: [] } },
  emits: ["update"],
  setup(t, { emit: l }) {
    const o = l, e = t;
    let s = u(e.activeIndex || 0), i = u(e.items), a = u(e.rightMenu);
    function m(v) {
      s.value = v, o("update", [v, "left"]);
    }
    function p(v) {
      o("update", [v, "right"]);
    }
    return (v, g) => (c(), r("ul", st, [
      (c(), T(q, null, [
        (c(!0), r($, null, I(d(i), (b, w) => (c(), r("li", {
          is: v.activeComponent,
          key: w,
          class: _([{ active: w === d(s) }, "webwin-topappbar-item"]),
          onClick: (h) => m(w)
        }, [
          n("span", at, x(b.name), 1),
          w === d(s) ? (c(), r("span", ct)) : C("", !0),
          w != d(s) ? (c(), r("span", rt)) : C("", !0)
        ], 10, it))), 128))
      ], 1024)),
      (c(!0), r($, null, I(d(a), (b, w) => (c(), r("li", {
        key: w,
        onClick: (h) => p(w),
        class: "webwin-topappbar-item",
        style: { float: "right" }
      }, [
        n("span", dt, x(b.name), 1)
      ], 8, ut))), 128))
    ]));
  }
}, Vt = /* @__PURE__ */ f(pt, [["__scopeId", "data-v-ef60c98a"]]), wt = {
  __name: "webwin-range",
  props: /* @__PURE__ */ E({
    color: { type: String, default: "#006fd0" }
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(t) {
    W((o) => ({
      v23dfb612: t.color
    }));
    let l = G(t, "modelValue");
    return (o, e) => A((c(), r("input", {
      type: "range",
      "onUpdate:modelValue": e[0] || (e[0] = (s) => H(l) ? l.value = s : l = s),
      class: "webwin-slider",
      min: "1",
      max: "100"
    }, null, 512)), [
      [j, d(l)]
    ]);
  }
}, It = /* @__PURE__ */ f(wt, [["__scopeId", "data-v-480ca2b0"]]);
export {
  Q as winbutton,
  Mt as wincard,
  xt as wincheckbox,
  $t as wincombobox,
  St as windropdown,
  te as wininputbox,
  re as winitem,
  gt as winnotifications,
  _t as winpasswordbox,
  kt as winprogressbar,
  yt as winradio,
  It as winrange,
  ft as winricheditbox,
  ht as wintab,
  bt as wintile,
  Vt as wintopappbar,
  Ct as winwindow
};

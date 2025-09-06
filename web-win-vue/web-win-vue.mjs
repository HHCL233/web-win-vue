import { createElementBlock as r, openBlock as c, renderSlot as b, defineComponent as V, ref as u, normalizeClass as h, unref as d, createElementVNode as n, toDisplayString as w, createVNode as k, Fragment as W, renderList as z, normalizeStyle as M, watch as K, Transition as C, withCtx as $, createCommentVNode as S, withDirectives as B, vShow as D, onMounted as Q, nextTick as Z, createBlock as H, vModelCheckbox as A, vModelRadio as ee, useCssVars as te, isRef as oe, createTextVNode as le } from "vue";
const _ = (e, l) => {
  const t = e.__vccOpts || e;
  for (const [o, a] of l)
    t[o] = a;
  return t;
}, ne = {
  __name: "webwin-button",
  setup(e) {
    return console.log("%c✨Welcome to Web-Win-Vue-Button✨", `
  color: #0078d7;
  text-shadow: 0 1px 0 #0078d7;`), (l, t) => (c(), r("button", null, [
      b(l.$slots, "default", {}, void 0, !0)
    ]));
  }
}, N = /* @__PURE__ */ _(ne, [["__scopeId", "data-v-85a8a3fa"]]), se = ["value", "placeholder"], R = /* @__PURE__ */ V({
  __name: "webwin-inputbox",
  props: { value: String, placeholder: String },
  setup(e) {
    console.log("%c✨Welcome to Web-Win-Vue-InputBox✨", `
  color: #0078d7;
  text-shadow: 0 1px 0 #0078d7;`);
    const t = u(e.placeholder);
    return (o, a) => (c(), r("input", {
      type: "text",
      name: "fname",
      class: "uwpinput",
      value: e.value,
      placeholder: t.value,
      onChange: a[0] || (a[0] = (s) => o.$emit("@change", s))
    }, null, 40, se));
  }
}), ae = { class: "sidebar-text" }, ie = { style: { width: "var(--sb-width, 350px)", margin: "auto" } }, ce = { style: { overflow: "auto", height: "calc( 100% - 240px )", "overflow-x": "hidden" } }, re = ["onClick"], ue = {
  class: "icon",
  viewBox: "0 0 1024 1024",
  fill: "currentColor",
  "aria-hidden": "true",
  height: "16"
}, de = ["d"], pe = {
  __name: "webwin-item",
  props: {
    items: { type: Array, required: !0 },
    modelValue: { type: Number, default: 0 },
    title: { type: String, default: "Menu" },
    bartitle: { type: String, default: "Window" }
  },
  emits: ["update"],
  setup(e, { emit: l }) {
    console.log("%c✨Welcome to Web-Win-Vue-Item✨", `
  color: #0078d7;
  text-shadow: 0 1px 0 #0078d7;`);
    const t = l;
    let o = u("");
    function a() {
      o.value === "" ? (o.value = "folded", t("update", !1)) : (o.value = "", t("update", !0));
    }
    return (s, i) => (c(), r("ul", {
      class: h(["side-bar", d(o)])
    }, [
      n("div", {
        class: h(["sidebar", d(o)])
      }, [
        n("p", ae, w(e.bartitle), 1)
      ], 2),
      n("div", null, [
        n("li", {
          style: { "margin-top": "24px", width: "24px" },
          onClick: a
        }, [
          i[0] || (i[0] = n("svg", {
            class: "icon",
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
            class: h(["label", d(o)])
          }, null, 2)
        ]),
        n("li", {
          onClick: a,
          class: h(["search-fold", d(o)])
        }, [
          i[1] || (i[1] = n("svg", {
            class: "icon",
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
            class: h(["label", d(o)])
          }, null, 2)
        ], 2),
        n("div", ie, [
          k(R, {
            placeholder: "查找",
            class: h(["inputbox", d(o)]),
            style: { "margin-top": "6px", width: "320px", transition: "all 0s ease" }
          }, null, 8, ["class"])
        ]),
        n("h3", {
          style: { "margin-top": "26px", "margin-bottom": "26px", "margin-left": "18px" },
          class: h(["title", d(o)])
        }, w(e.title), 3)
      ]),
      n("div", ce, [
        (c(!0), r(W, null, z(e.items, (v, p) => (c(), r("li", {
          key: p,
          class: h({ active: p === e.modelValue }),
          onClick: (x) => s.$emit("update:modelValue", p)
        }, [
          i[2] || (i[2] = n("span", { class: "indicator" }, null, -1)),
          (c(), r("svg", ue, [
            n("path", {
              d: v.icon
            }, null, 8, de)
          ])),
          n("span", {
            class: h(["label", d(o)])
          }, w(v.name), 3)
        ], 10, re))), 128))
      ])
    ], 2));
  }
}, T = /* @__PURE__ */ _(pe, [["__scopeId", "data-v-30fc2437"]]);
console.log("%c✨Welcome to Web-Win-Vue-Tile✨", `
  color: #0078d7;
  text-shadow: 0 1px 0 #0078d7;`);
const me = {
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
      const l = e.currentTarget.getBoundingClientRect();
      this.mouseX = e.clientX - l.left, this.mouseY = e.clientY - l.top;
      const t = Math.min(
        this.mouseX,
        l.width - this.mouseX,
        this.mouseY,
        l.height - this.mouseY
      ), o = this.glowRadius;
      this.glowOpacity = Math.max(0, (o - t) / o);
    },
    handleMouseLeave() {
      this.isHovered = !1, this.glowOpacity = 0;
    }
  }
}, he = { class: "tile-content" }, ve = { class: "tile-icon" }, we = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  width: "24",
  height: "24"
}, fe = ["d"], ge = { class: "tile-title" };
function _e(e, l, t, o, a, s) {
  return c(), r("div", {
    class: h(["tile", t.size]),
    style: M(s.tileStyle),
    onMousemove: l[0] || (l[0] = (...i) => s.handleMouseMove && s.handleMouseMove(...i)),
    onMouseenter: l[1] || (l[1] = (i) => a.isHovered = !0),
    onMouseleave: l[2] || (l[2] = (...i) => s.handleMouseLeave && s.handleMouseLeave(...i))
  }, [
    n("div", he, [
      n("div", ve, [
        b(e.$slots, "icon", {}, () => [
          (c(), r("svg", we, [
            n("path", {
              fill: "white",
              d: t.icon
            }, null, 8, fe)
          ]))
        ], !0)
      ]),
      n("div", ge, w(t.title), 1)
    ]),
    n("div", {
      class: "glow-border",
      style: M(s.glowStyle)
    }, null, 4),
    n("div", {
      class: "pointer-glow",
      style: M(s.pointerGlowStyle)
    }, null, 4)
  ], 38);
}
const X = /* @__PURE__ */ _(me, [["render", _e], ["__scopeId", "data-v-9ae9ef89"]]), xe = { class: "container" }, be = ["src"], ye = ["src"], Y = {
  __name: "webwin-tab",
  props: { menu: Array, url: Array, titlebar: Boolean, titlebartext: String },
  setup(e) {
    console.log("%c✨Welcome to Web-Win-Vue-Tab✨", `
  color: #0078d7;
  text-shadow: 0 1px 0 #0078d7;`);
    const l = e, t = u(0), o = u(0), a = u(l.url[0]);
    let s = u(""), i = u("");
    l.titlebar ? s.value = l.titlebartext : s.value = "", K(t, (p) => {
      console.log("activeIndex changed:", p), console.log("new url:", l.url[p]), a.value = l.url[p], o.value = o.value === 0 ? 1 : 0, console.log("docState:", o.value);
    });
    function v(p) {
      p ? i.value = "" : i.value = "folded";
    }
    return (p, x) => (c(), r("div", xe, [
      k(T, {
        modelValue: t.value,
        "onUpdate:modelValue": x[0] || (x[0] = (g) => t.value = g),
        items: e.menu,
        class: "item-1",
        bartitle: d(s),
        onUpdate: v
      }, null, 8, ["modelValue", "items", "bartitle"]),
      k(C, {
        name: "fade",
        mode: "out-in"
      }, {
        default: $(() => [
          o.value === 0 ? (c(), r("div", {
            key: "state0",
            class: h(["iframe-container", d(i)])
          }, [
            b(p.$slots, "default", {}, () => [
              B(n("iframe", {
                src: a.value,
                style: { "margin-top": "70px" }
              }, null, 8, be), [
                [D, o.value === 0]
              ])
            ])
          ], 2)) : o.value === 1 ? (c(), r("div", {
            key: "state1",
            class: h(["iframe-container", d(i)])
          }, [
            b(p.$slots, "default", {}, () => [
              B(n("iframe", {
                src: a.value,
                style: { "margin-top": "70px" }
              }, null, 8, ye), [
                [D, o.value === 1]
              ])
            ])
          ], 2)) : S("", !0)
        ]),
        _: 3
      })
    ]));
  }
}, $e = ["value", "placeholder"], F = /* @__PURE__ */ V({
  __name: "webwin-passwordbox",
  props: { value: String, placeholder: String },
  setup(e) {
    console.log("%c✨Welcome to Web-Win-Vue-PasswordBox✨", `
  color: #0078d7;
  text-shadow: 0 1px 0 #0078d7;`);
    const l = e, t = u(l.value), o = u(l.placeholder);
    return (a, s) => (c(), r("input", {
      type: "password",
      name: "fname",
      class: "uwppassword",
      value: t.value,
      placeholder: o.value,
      onChange: s[0] || (s[0] = (i) => a.$emit("@change", i))
    }, null, 40, $e));
  }
}), ke = ["data-placeholder"], O = /* @__PURE__ */ V({
  __name: "webwin-richeditbox",
  props: {
    value: { type: String, default: "" },
    placeholder: { type: String, default: "" }
  },
  emits: ["update", "change"],
  setup(e, { emit: l }) {
    const t = e, o = l, a = u(null), s = u(t.placeholder), i = u(t.value);
    Q(() => {
      a.value && (a.value.textContent = t.value || "", i.value = t.value || "");
    });
    const v = (g) => {
      if (!a.value) return;
      const f = a.value.textContent || "";
      o("update", f), Z(() => {
        if (a.value) {
          const m = document.createRange(), y = window.getSelection();
          m.selectNodeContents(a.value), m.collapse(!1), y?.removeAllRanges(), y?.addRange(m);
        }
      });
    }, p = (g) => {
      const f = g.target;
      f.textContent === t.placeholder && (f.textContent = "");
    }, x = (g) => {
      const f = g.target, m = f.textContent || "";
      m !== i.value && (o("change", {
        target: {
          value: m
        }
      }), i.value = m), m.trim() === "" && (f.textContent = "");
    };
    return (g, f) => (c(), r("div", {
      ref_key: "editableDiv",
      ref: a,
      class: "uwprichrditbox",
      contenteditable: "plaintext-only",
      "data-placeholder": s.value,
      onInput: v,
      onFocus: p,
      onBlur: x
    }, null, 40, ke));
  }
}), We = ["src"], Ce = {
  class: "n-name",
  style: { display: "inline-block", "margin-left": "6px" }
}, Se = { class: "n-text n-title" }, Ve = { class: "n-vulua" }, L = {
  __name: "webwin-notifications",
  props: { name: String, title: String, text: String, img: String },
  setup(e, { expose: l }) {
    const t = e;
    let o = u(!1), a = u(t.img);
    const s = () => {
      o.value = !o.value;
    };
    function i() {
      o.value && setTimeout(() => {
        o.value = !1;
      }, 250);
    }
    return l({ showNotification: s }), console.log("%c✨Welcome to Web-Win-Vue-Notifications✨", `
  color: #0078d7;
  text-shadow: 0 1px 0 #0078d7;`), (v, p) => (c(), H(C, { name: "slide-fade" }, {
      default: $(() => [
        d(o) ? (c(), r("div", {
          key: 0,
          class: "Notification",
          onClick: i
        }, [
          n("img", {
            src: d(a),
            style: { "object-fit": "contain", "margin-left": "16px", "margin-right": "0px", display: "inline-block", "vertical-align": "middle", width: "16px", height: "16px" }
          }, null, 8, We),
          n("p", Ce, w(e.name), 1),
          n("h4", Se, w(e.title), 1),
          n("p", Ve, w(e.text), 1)
        ])) : S("", !0)
      ]),
      _: 1
    }));
  }
}, Me = ["name", "id"], Be = ["for"], Ie = /* @__PURE__ */ V({
  __name: "webwin-checkbox",
  props: { name: String, checked: Array },
  setup(e) {
    const l = e, t = u(l.name), o = u(l.checked);
    return console.log("%c✨Welcome to Web-Win-Vue-Checkbox✨", `
  color: #0078d7;
  text-shadow: 0 1px 0 #0078d7;`), (a, s) => (c(), r(W, null, [
      B(n("input", {
        type: "checkbox",
        class: "ww-checkbox",
        name: t.value,
        id: t.value,
        "onUpdate:modelValue": s[0] || (s[0] = (i) => o.value = i),
        onClick: s[1] || (s[1] = (i) => a.$emit("click", i))
      }, null, 8, Me), [
        [A, o.value]
      ]),
      n("label", {
        for: t.value,
        class: "ww-checkbox-label"
      }, [
        b(a.$slots, "default", {}, void 0, !0)
      ], 8, Be)
    ], 64));
  }
}), U = /* @__PURE__ */ _(Ie, [["__scopeId", "data-v-c289ea76"]]), ze = ["name", "id"], Ne = ["for"], Re = /* @__PURE__ */ V({
  __name: "webwin-radio",
  props: { name: String, checked: Array },
  setup(e) {
    const l = e, t = u(l.name), o = u(l.checked);
    return console.log("%c✨Welcome to Web-Win-Vue-radio✨", `
  color: #0078d7;
  text-shadow: 0 1px 0 #0078d7;`), (a, s) => (c(), r(W, null, [
      B(n("input", {
        type: "radio",
        class: "ww-radio",
        name: t.value,
        id: t.value,
        "onUpdate:modelValue": s[0] || (s[0] = (i) => o.value = i),
        onClick: s[1] || (s[1] = (i) => a.$emit("click", i))
      }, null, 8, ze), [
        [ee, o.value]
      ]),
      n("label", {
        for: t.value,
        class: "ww-radio-label"
      }, [
        b(a.$slots, "default", {}, void 0, !0)
      ], 8, Ne)
    ], 64));
  }
}), q = /* @__PURE__ */ _(Re, [["__scopeId", "data-v-78978c8c"]]), Te = { style: { position: "relative" } }, De = {
  key: 0,
  class: "list-box"
}, He = { style: { overflow: "auto", height: "calc( 100% - 240px )" } }, Xe = ["onClick"], Ye = { class: "label" }, Fe = {
  __name: "webwin-combobox",
  props: {
    items: { type: Array, required: !0 },
    modelValue: { type: Number, default: 0 },
    title: { type: String, default: "itembox" }
  },
  emits: ["update"],
  setup(e, { emit: l }) {
    te((m) => ({
      "7bc6bd91": d(x) + "px",
      "66c1a184": d(p) + "px"
    })), console.log("%c✨Welcome to Web-Win-Vue-Item✨", `
  color: #0078d7;
  text-shadow: 0 1px 0 #0078d7;`);
    const t = e, o = l;
    let a = u(""), s = u(!1), i = u(t.modelValue), v = u(t.title), p = u(-6), x = u(6);
    function g(m) {
      s.value = !1, a.value = "", i.value = m, v.value = t.items[m].name, o("update", m), setTimeout(() => {
        p.value = m * -35 - 6, x.value = m * 35 + 6;
      }, 100);
    }
    function f() {
      s.value = !s.value, a.value = s.value ? "active" : "";
    }
    return (m, y) => (c(), r("div", Te, [
      n("div", {
        class: h(["list-box-button", d(a)]),
        onClick: f
      }, w(d(v)), 3),
      k(C, null, {
        default: $(() => [
          d(s) ? (c(), r("ul", De, [
            y[0] || (y[0] = n("div", { style: { height: "6px" } }, null, -1)),
            n("div", He, [
              (c(!0), r(W, null, z(e.items, (J, I) => (c(), r("li", {
                key: I,
                class: h({ active: I === d(i) }),
                onClick: (et) => g(I)
              }, [
                n("span", Ye, w(J.name), 1)
              ], 10, Xe))), 128))
            ]),
            y[1] || (y[1] = n("div", { style: { height: "6px" } }, null, -1))
          ])) : S("", !0)
        ]),
        _: 1
      })
    ]));
  }
}, E = /* @__PURE__ */ _(Fe, [["__scopeId", "data-v-cc406956"]]), Oe = { class: "progress-bar" }, Le = {
  __name: "webwin-progressbar",
  props: {
    progress: { type: Number, default: 0 }
  },
  setup(e) {
    return console.log("%c✨Welcome to Web-Win-Vue-ProgressBar✨", `
  color: #0078d7;
  text-shadow: 0 1px 0 #0078d7;`), (l, t) => (c(), r("div", Oe, [
      n("div", {
        class: "progress",
        style: M({ width: e.progress + "%" })
      }, null, 4)
    ]));
  }
}, G = /* @__PURE__ */ _(Le, [["__scopeId", "data-v-18bec619"]]), Ue = {
  key: 0,
  class: "window-background"
}, qe = {
  key: 0,
  class: "window"
}, Ee = { style: { "margin-top": "24px", "margin-bottom": "24px" } }, Ge = { class: "window-title" }, Pe = { style: { "margin-left": "25px", "margin-right": "24px", width: "calc(100% - 48px)" } }, je = { style: { "margin-left": "24px", "margin-right": "24px", width: "calc(100% - 48px)", display: "Flex", gap: "6px", "margin-top": "48px" } }, Je = {
  __name: "webwin-window",
  props: {
    items: { type: Array, required: !0, default: [{ text: "11" }, { text: "11" }] },
    title: { type: String, default: "Title" }
  },
  setup(e, { expose: l }) {
    let t = u("");
    return l({ showDialog: () => {
      t.value = !0;
    } }), (a, s) => (c(), r(W, null, [
      k(C, null, {
        default: $(() => [
          d(t) ? (c(), r("div", Ue)) : S("", !0)
        ]),
        _: 1
      }),
      k(C, null, {
        default: $(() => [
          d(t) ? (c(), r("div", qe, [
            n("div", Ee, [
              n("h2", Ge, w(e.title), 1),
              n("div", Pe, [
                b(a.$slots, "default", {}, void 0, !0)
              ]),
              n("div", je, [
                (c(!0), r(W, null, z(e.items, (i, v) => (c(), H(N, {
                  class: "window-button",
                  key: v,
                  onClick: s[0] || (s[0] = (p) => oe(t) ? t.value = !1 : t = !1)
                }, {
                  default: $(() => [
                    le(w(i.text), 1)
                  ]),
                  _: 2
                }, 1024))), 128))
              ])
            ])
          ])) : S("", !0)
        ]),
        _: 3
      })
    ], 64));
  }
}, P = /* @__PURE__ */ _(Je, [["__scopeId", "data-v-925d7c12"]]), Ke = {}, Qe = { class: "card" };
function Ze(e, l) {
  return c(), r("div", Qe, [
    b(e.$slots, "default", {}, void 0, !0)
  ]);
}
const j = /* @__PURE__ */ _(Ke, [["render", Ze], ["__scopeId", "data-v-f3f865b5"]]), Ae = [j, P, G, E, q, U, N, T, X, Y, R, F, O, L], ot = {
  install(e) {
    Ae.forEach((l) => {
      e.component("winbutton", N), e.component("winitem", T), e.component("wintile", X), e.component("wintab", Y), e.component("wininputbox", R), e.component("winpasswordbox", F), e.component("winricheditbox", O), e.component("winnotifications", L), e.component("wincheckbox", U), e.component("winradio", q), e.component("wincombobox", E), e.component("winprogressbar", G), e.component("winwindow", P), e.component("wincard", j);
    });
  }
};
export {
  ot as default,
  N as winbutton,
  j as wincard,
  U as wincheckbox,
  E as wincombobox,
  R as wininputbox,
  T as winitem,
  L as winnotifications,
  F as winpasswordbox,
  G as winprogressbar,
  q as winradio,
  O as winricheditbox,
  Y as wintab,
  X as wintile,
  P as winwindow
};

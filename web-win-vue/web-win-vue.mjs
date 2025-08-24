import { createElementBlock as r, openBlock as c, renderSlot as L, defineComponent as g, ref as u, createElementVNode as a, createVNode as _, toDisplayString as p, Fragment as T, renderList as z, normalizeClass as S, normalizeStyle as w, watch as O, Transition as W, withCtx as M, createCommentVNode as V, withDirectives as C, vShow as $, onMounted as H, nextTick as E, createBlock as F, unref as G } from "vue";
const f = (e, o) => {
  const t = e.__vccOpts || e;
  for (const [n, l] of o)
    t[n] = l;
  return t;
}, Z = {
  __name: "webwin-button",
  setup(e) {
    return console.log("%c✨Welcome to Web-Win-Vue-Button✨", `
  color: #0078d7;
  text-shadow: 0 1px 0 #0078d7;`), (o, t) => (c(), r("button", null, [
      L(o.$slots, "default", {}, void 0, !0)
    ]));
  }
}, k = /* @__PURE__ */ f(Z, [["__scopeId", "data-v-85a8a3fa"]]), q = ["value", "placeholder"], x = /* @__PURE__ */ g({
  __name: "webwin-inputbox",
  props: { value: String, placeholder: String },
  setup(e) {
    console.log("%c✨Welcome to Web-Win-Vue-InputBox✨", `
  color: #0078d7;
  text-shadow: 0 1px 0 #0078d7;`);
    const o = e, t = u(o.value), n = u(o.placeholder);
    return (l, s) => (c(), r("input", {
      type: "text",
      name: "fname",
      class: "uwpinput",
      value: t.value,
      placeholder: n.value,
      onChange: s[0] || (s[0] = (i) => l.$emit("@change", i))
    }, null, 40, q));
  }
}), P = { class: "side-bar" }, U = { style: { width: "var(--sb-width, 350px)", margin: "auto" } }, j = {
  style: { "margin-top": "26px", "margin-bottom": "26px", "margin-left": "18px" },
  class: "title"
}, J = { style: { overflow: "auto", height: "calc( 100% - 240px )" } }, K = ["onClick"], Q = {
  class: "icon",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  "aria-hidden": "true"
}, A = ["d"], ee = { class: "label" }, te = {
  __name: "webwin-item",
  props: {
    items: { type: Array, required: !0 },
    modelValue: { type: Number, default: 0 },
    title: { type: String, default: "Menu" }
  },
  emits: ["update:modelValue"],
  setup(e) {
    return console.log("%c✨Welcome to Web-Win-Vue-Item✨", `
  color: #0078d7;
  text-shadow: 0 1px 0 #0078d7;`), (o, t) => (c(), r("ul", P, [
      a("div", null, [
        t[0] || (t[0] = a("li", { style: { "margin-top": "24px" } }, [
          a("svg", {
            class: "icon",
            viewBox: "0 0 24 24",
            fill: "currentColor",
            "aria-hidden": "true"
          }, [
            a("path", {
              xmlns: "http://www.w3.org/2000/svg",
              style: { stroke: "none", "fill-rule": "nonzero", fill: "rgb(0%,0%,0%)", "fill-opacity": "1" },
              d: "M 0.863281 14.628906 L 2.898438 14.628906 L 2.898438 22.773438 C 2.898438 23.253906 3.292969 23.648438 3.773438 23.648438 L 9.734375 23.648438 C 10.214844 23.648438 10.609375 23.253906 10.609375 22.773438 L 10.609375 16.8125 L 14.246094 16.8125 L 14.246094 22.773438 C 14.246094 23.253906 14.636719 23.648438 15.117188 23.648438 L 20.789062 23.648438 C 21.269531 23.648438 21.664062 23.253906 21.664062 22.773438 L 21.664062 14.628906 L 24.136719 14.628906 C 24.484375 14.628906 24.804688 14.410156 24.9375 14.089844 C 25.066406 13.769531 24.992188 13.394531 24.746094 13.144531 L 13.371094 1.609375 C 13.039062 1.277344 12.484375 1.261719 12.152344 1.597656 L 0.265625 13.132812 C 0.00390625 13.378906 -0.0664062 13.757812 0.0625 14.089844 C 0.195312 14.425781 0.515625 14.628906 0.863281 14.628906 Z M 12.734375 3.457031 L 22.042969 12.882812 L 20.789062 12.882812 C 20.308594 12.882812 19.917969 13.277344 19.917969 13.757812 L 19.917969 21.902344 L 15.992188 21.902344 L 15.992188 15.9375 C 15.992188 15.457031 15.597656 15.066406 15.117188 15.066406 L 9.734375 15.066406 C 9.257812 15.066406 8.863281 15.457031 8.863281 15.9375 L 8.863281 21.902344 L 4.644531 21.902344 L 4.644531 13.757812 C 4.644531 13.277344 4.253906 12.882812 3.773438 12.882812 L 3.015625 12.882812 Z M 12.734375 3.457031 "
            })
          ]),
          a("span", { class: "label" }, "主页")
        ], -1)),
        a("div", U, [
          _(x, {
            placeholder: "查找",
            style: { "margin-top": "6px", width: "320px" }
          })
        ]),
        a("h3", j, p(e.title), 1)
      ]),
      a("div", J, [
        (c(!0), r(T, null, z(e.items, (n, l) => (c(), r("li", {
          key: l,
          class: S({ active: l === e.modelValue }),
          onClick: (s) => o.$emit("update:modelValue", l)
        }, [
          t[1] || (t[1] = a("span", { class: "indicator" }, null, -1)),
          (c(), r("svg", Q, [
            a("path", {
              d: n.icon
            }, null, 8, A)
          ])),
          a("span", ee, p(n.name), 1)
        ], 10, K))), 128))
      ])
    ]));
  }
}, b = /* @__PURE__ */ f(te, [["__scopeId", "data-v-cbab5da9"]]);
console.log("%c✨Welcome to Web-Win-Vue-Tile✨", `
  color: #0078d7;
  text-shadow: 0 1px 0 #0078d7;`);
const oe = {
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
      const t = Math.min(
        this.mouseX,
        o.width - this.mouseX,
        this.mouseY,
        o.height - this.mouseY
      ), n = this.glowRadius;
      this.glowOpacity = Math.max(0, (n - t) / n);
    },
    handleMouseLeave() {
      this.isHovered = !1, this.glowOpacity = 0;
    }
  }
}, ne = { class: "tile-content" }, le = { class: "tile-icon" }, se = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  width: "24",
  height: "24"
}, ae = ["d"], ie = { class: "tile-title" };
function ce(e, o, t, n, l, s) {
  return c(), r("div", {
    class: S(["tile", t.size]),
    style: w(s.tileStyle),
    onMousemove: o[0] || (o[0] = (...i) => s.handleMouseMove && s.handleMouseMove(...i)),
    onMouseenter: o[1] || (o[1] = (i) => l.isHovered = !0),
    onMouseleave: o[2] || (o[2] = (...i) => s.handleMouseLeave && s.handleMouseLeave(...i))
  }, [
    a("div", ne, [
      a("div", le, [
        L(e.$slots, "icon", {}, () => [
          (c(), r("svg", se, [
            a("path", {
              fill: "white",
              d: t.icon
            }, null, 8, ae)
          ]))
        ], !0)
      ]),
      a("div", ie, p(t.title), 1)
    ]),
    a("div", {
      class: "glow-border",
      style: w(s.glowStyle)
    }, null, 4),
    a("div", {
      class: "pointer-glow",
      style: w(s.pointerGlowStyle)
    }, null, 4)
  ], 38);
}
const B = /* @__PURE__ */ f(oe, [["render", ce], ["__scopeId", "data-v-9ae9ef89"]]), re = { class: "container" }, ue = {
  key: "state0",
  class: "iframe-container"
}, de = ["src"], me = {
  key: "state1",
  class: "iframe-container"
}, pe = ["src"], N = {
  __name: "webwin-tab",
  props: { menu: Array, url: Array },
  setup(e) {
    console.log("%c✨Welcome to Web-Win-Vue-Tab✨", `
  color: #0078d7;
  text-shadow: 0 1px 0 #0078d7;`);
    const o = e, t = u(0), n = u(0), l = u(o.url[0]);
    return O(t, (s) => {
      console.log("activeIndex changed:", s), console.log("new url:", o.url[s]), l.value = o.url[s], n.value = n.value === 0 ? 1 : 0, console.log("docState:", n.value);
    }), (s, i) => (c(), r("div", re, [
      _(b, {
        modelValue: t.value,
        "onUpdate:modelValue": i[0] || (i[0] = (v) => t.value = v),
        items: e.menu,
        class: "item-1"
      }, null, 8, ["modelValue", "items"]),
      _(W, {
        name: "fade",
        mode: "out-in"
      }, {
        default: M(() => [
          n.value === 0 ? (c(), r("div", ue, [
            C(a("iframe", { src: l.value }, null, 8, de), [
              [$, n.value === 0]
            ])
          ])) : n.value === 1 ? (c(), r("div", me, [
            C(a("iframe", { src: l.value }, null, 8, pe), [
              [$, n.value === 1]
            ])
          ])) : V("", !0)
        ]),
        _: 1
      })
    ]));
  }
}, he = ["value", "placeholder"], I = /* @__PURE__ */ g({
  __name: "webwin-passwordbox",
  props: { value: String, placeholder: String },
  setup(e) {
    console.log("%c✨Welcome to Web-Win-Vue-PasswordBox✨", `
  color: #0078d7;
  text-shadow: 0 1px 0 #0078d7;`);
    const o = e, t = u(o.value), n = u(o.placeholder);
    return (l, s) => (c(), r("input", {
      type: "password",
      name: "fname",
      class: "uwppassword",
      value: t.value,
      placeholder: n.value,
      onChange: s[0] || (s[0] = (i) => l.$emit("@change", i))
    }, null, 40, he));
  }
}), ve = ["data-placeholder"], R = /* @__PURE__ */ g({
  __name: "webwin-richeditbox",
  props: {
    value: { type: String, default: "" },
    placeholder: { type: String, default: "" }
  },
  emits: ["update:value", "change"],
  setup(e, { emit: o }) {
    const t = e, n = o, l = u(null), s = u(t.placeholder), i = u(t.value);
    H(() => {
      l.value && (l.value.textContent = t.value || "", i.value = t.value || "");
    });
    const v = (h) => {
      if (!l.value) return;
      const d = l.value.textContent || "";
      n("update:value", d), E(() => {
        if (l.value) {
          const m = document.createRange(), y = window.getSelection();
          m.selectNodeContents(l.value), m.collapse(!1), y?.removeAllRanges(), y?.addRange(m);
        }
      });
    }, Y = (h) => {
      const d = h.target;
      d.textContent === t.placeholder && (d.textContent = "");
    }, D = (h) => {
      const d = h.target, m = d.textContent || "";
      m !== i.value && (n("change", {
        target: {
          value: m
        }
      }), i.value = m), m.trim() === "" && (d.textContent = "");
    };
    return (h, d) => (c(), r("div", {
      ref_key: "editableDiv",
      ref: l,
      class: "uwprichrditbox",
      contenteditable: "plaintext-only",
      "data-placeholder": s.value,
      onInput: v,
      onFocus: Y,
      onBlur: D
    }, null, 40, ve));
  }
}), we = { class: "n-text n-name" }, _e = { class: "n-text n-title" }, ge = { class: "n-vulua" }, X = {
  __name: "webwin-notifications",
  props: { name: String, title: String, text: String },
  setup(e, { expose: o }) {
    let t = u(!1);
    const n = () => {
      t.value = !t.value;
    };
    function l() {
      t.value && setTimeout(() => {
        t.value = !1;
      }, 250);
    }
    return o({ showNotification: n }), console.log("%c✨Welcome to Web-Win-Vue-Notifications✨", `
  color: #0078d7;
  text-shadow: 0 1px 0 #0078d7;`), (s, i) => (c(), F(W, { name: "slide-fade" }, {
      default: M(() => [
        G(t) ? (c(), r("div", {
          key: 0,
          class: "Notification",
          onClick: l
        }, [
          a("p", we, p(e.name), 1),
          a("h4", _e, p(e.title), 1),
          a("p", ge, p(e.text), 1)
        ])) : V("", !0)
      ]),
      _: 1
    }));
  }
}, fe = [k, b, B, N, x, I, R, X], be = {
  install(e) {
    fe.forEach((o) => {
      e.component("winbutton", k), e.component("winitem", b), e.component("wintile", B), e.component("wintab", N), e.component("wininputbox", x), e.component("winpasswordbox", I), e.component("winricheditbox", R), e.component("winnotifications", X);
    });
  }
};
export {
  be as default,
  k as winbutton,
  x as wininputbox,
  b as winitem,
  X as winnotifications,
  I as winpasswordbox,
  R as winricheditbox,
  N as wintab,
  B as wintile
};

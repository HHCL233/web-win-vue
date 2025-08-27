import { createElementBlock as r, openBlock as u, renderSlot as C, defineComponent as f, ref as c, createElementVNode as a, createVNode as b, toDisplayString as h, Fragment as k, renderList as T, normalizeClass as y, normalizeStyle as S, watch as G, Transition as L, withCtx as M, createCommentVNode as B, withDirectives as $, vShow as R, onMounted as Z, nextTick as j, createBlock as P, unref as p, vModelCheckbox as J, vModelRadio as K, useCssVars as Q } from "vue";
const _ = (e, o) => {
  const t = e.__vccOpts || e;
  for (const [l, s] of o)
    t[l] = s;
  return t;
}, A = {
  __name: "webwin-button",
  setup(e) {
    return console.log("%c✨Welcome to Web-Win-Vue-Button✨", `
  color: #0078d7;
  text-shadow: 0 1px 0 #0078d7;`), (o, t) => (u(), r("button", null, [
      C(o.$slots, "default", {}, void 0, !0)
    ]));
  }
}, X = /* @__PURE__ */ _(A, [["__scopeId", "data-v-85a8a3fa"]]), ee = ["value", "placeholder"], I = /* @__PURE__ */ f({
  __name: "webwin-inputbox",
  props: { value: String, placeholder: String },
  setup(e) {
    console.log("%c✨Welcome to Web-Win-Vue-InputBox✨", `
  color: #0078d7;
  text-shadow: 0 1px 0 #0078d7;`);
    const o = e, t = c(o.value), l = c(o.placeholder);
    return (s, n) => (u(), r("input", {
      type: "text",
      name: "fname",
      class: "uwpinput",
      value: t.value,
      placeholder: l.value,
      onChange: n[0] || (n[0] = (i) => s.$emit("@change", i))
    }, null, 40, ee));
  }
}), te = { class: "side-bar" }, oe = { style: { width: "var(--sb-width, 350px)", margin: "auto" } }, ne = {
  style: { "margin-top": "26px", "margin-bottom": "26px", "margin-left": "18px" },
  class: "title"
}, le = { style: { overflow: "auto", height: "calc( 100% - 240px )" } }, se = ["onClick"], ae = {
  class: "icon",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  "aria-hidden": "true"
}, ie = ["d"], ce = { class: "label" }, ue = {
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
  text-shadow: 0 1px 0 #0078d7;`), (o, t) => (u(), r("ul", te, [
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
        a("div", oe, [
          b(I, {
            placeholder: "查找",
            style: { "margin-top": "6px", width: "320px" }
          })
        ]),
        a("h3", ne, h(e.title), 1)
      ]),
      a("div", le, [
        (u(!0), r(k, null, T(e.items, (l, s) => (u(), r("li", {
          key: s,
          class: y({ active: s === e.modelValue }),
          onClick: (n) => o.$emit("update:modelValue", s)
        }, [
          t[1] || (t[1] = a("span", { class: "indicator" }, null, -1)),
          (u(), r("svg", ae, [
            a("path", {
              d: l.icon
            }, null, 8, ie)
          ])),
          a("span", ce, h(l.name), 1)
        ], 10, se))), 128))
      ])
    ]));
  }
}, N = /* @__PURE__ */ _(ue, [["__scopeId", "data-v-cbab5da9"]]);
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
      const t = Math.min(
        this.mouseX,
        o.width - this.mouseX,
        this.mouseY,
        o.height - this.mouseY
      ), l = this.glowRadius;
      this.glowOpacity = Math.max(0, (l - t) / l);
    },
    handleMouseLeave() {
      this.isHovered = !1, this.glowOpacity = 0;
    }
  }
}, de = { class: "tile-content" }, me = { class: "tile-icon" }, pe = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  width: "24",
  height: "24"
}, he = ["d"], ve = { class: "tile-title" };
function we(e, o, t, l, s, n) {
  return u(), r("div", {
    class: y(["tile", t.size]),
    style: S(n.tileStyle),
    onMousemove: o[0] || (o[0] = (...i) => n.handleMouseMove && n.handleMouseMove(...i)),
    onMouseenter: o[1] || (o[1] = (i) => s.isHovered = !0),
    onMouseleave: o[2] || (o[2] = (...i) => n.handleMouseLeave && n.handleMouseLeave(...i))
  }, [
    a("div", de, [
      a("div", me, [
        C(e.$slots, "icon", {}, () => [
          (u(), r("svg", pe, [
            a("path", {
              fill: "white",
              d: t.icon
            }, null, 8, he)
          ]))
        ], !0)
      ]),
      a("div", ve, h(t.title), 1)
    ]),
    a("div", {
      class: "glow-border",
      style: S(n.glowStyle)
    }, null, 4),
    a("div", {
      class: "pointer-glow",
      style: S(n.pointerGlowStyle)
    }, null, 4)
  ], 38);
}
const Y = /* @__PURE__ */ _(re, [["render", we], ["__scopeId", "data-v-9ae9ef89"]]), _e = { class: "container" }, ge = {
  key: "state0",
  class: "iframe-container"
}, fe = ["src"], xe = {
  key: "state1",
  class: "iframe-container"
}, be = ["src"], D = {
  __name: "webwin-tab",
  props: { menu: Array, url: Array },
  setup(e) {
    console.log("%c✨Welcome to Web-Win-Vue-Tab✨", `
  color: #0078d7;
  text-shadow: 0 1px 0 #0078d7;`);
    const o = e, t = c(0), l = c(0), s = c(o.url[0]);
    return G(t, (n) => {
      console.log("activeIndex changed:", n), console.log("new url:", o.url[n]), s.value = o.url[n], l.value = l.value === 0 ? 1 : 0, console.log("docState:", l.value);
    }), (n, i) => (u(), r("div", _e, [
      b(N, {
        modelValue: t.value,
        "onUpdate:modelValue": i[0] || (i[0] = (v) => t.value = v),
        items: e.menu,
        class: "item-1"
      }, null, 8, ["modelValue", "items"]),
      b(L, {
        name: "fade",
        mode: "out-in"
      }, {
        default: M(() => [
          l.value === 0 ? (u(), r("div", ge, [
            $(a("iframe", { src: s.value }, null, 8, fe), [
              [R, l.value === 0]
            ])
          ])) : l.value === 1 ? (u(), r("div", xe, [
            $(a("iframe", { src: s.value }, null, 8, be), [
              [R, l.value === 1]
            ])
          ])) : B("", !0)
        ]),
        _: 1
      })
    ]));
  }
}, ye = ["value", "placeholder"], z = /* @__PURE__ */ f({
  __name: "webwin-passwordbox",
  props: { value: String, placeholder: String },
  setup(e) {
    console.log("%c✨Welcome to Web-Win-Vue-PasswordBox✨", `
  color: #0078d7;
  text-shadow: 0 1px 0 #0078d7;`);
    const o = e, t = c(o.value), l = c(o.placeholder);
    return (s, n) => (u(), r("input", {
      type: "password",
      name: "fname",
      class: "uwppassword",
      value: t.value,
      placeholder: l.value,
      onChange: n[0] || (n[0] = (i) => s.$emit("@change", i))
    }, null, 40, ye));
  }
}), $e = ["data-placeholder"], O = /* @__PURE__ */ f({
  __name: "webwin-richeditbox",
  props: {
    value: { type: String, default: "" },
    placeholder: { type: String, default: "" }
  },
  emits: ["update:value", "change"],
  setup(e, { emit: o }) {
    const t = e, l = o, s = c(null), n = c(t.placeholder), i = c(t.value);
    Z(() => {
      s.value && (s.value.textContent = t.value || "", i.value = t.value || "");
    });
    const v = (w) => {
      if (!s.value) return;
      const m = s.value.textContent || "";
      l("update:value", m), j(() => {
        if (s.value) {
          const d = document.createRange(), W = window.getSelection();
          d.selectNodeContents(s.value), d.collapse(!1), W?.removeAllRanges(), W?.addRange(d);
        }
      });
    }, g = (w) => {
      const m = w.target;
      m.textContent === t.placeholder && (m.textContent = "");
    }, x = (w) => {
      const m = w.target, d = m.textContent || "";
      d !== i.value && (l("change", {
        target: {
          value: d
        }
      }), i.value = d), d.trim() === "" && (m.textContent = "");
    };
    return (w, m) => (u(), r("div", {
      ref_key: "editableDiv",
      ref: s,
      class: "uwprichrditbox",
      contenteditable: "plaintext-only",
      "data-placeholder": n.value,
      onInput: v,
      onFocus: g,
      onBlur: x
    }, null, 40, $e));
  }
}), Ce = ["src"], ke = {
  class: "n-name",
  style: { display: "inline-block", "margin-left": "6px" }
}, We = { class: "n-text n-title" }, Ve = { class: "n-vulua" }, H = {
  __name: "webwin-notifications",
  props: { name: String, title: String, text: String, img: String },
  setup(e, { expose: o }) {
    const t = e;
    let l = c(!1), s = c(t.img);
    const n = () => {
      l.value = !l.value;
    };
    function i() {
      l.value && setTimeout(() => {
        l.value = !1;
      }, 250);
    }
    return o({ showNotification: n }), console.log("%c✨Welcome to Web-Win-Vue-Notifications✨", `
  color: #0078d7;
  text-shadow: 0 1px 0 #0078d7;`), (v, g) => (u(), P(L, { name: "slide-fade" }, {
      default: M(() => [
        p(l) ? (u(), r("div", {
          key: 0,
          class: "Notification",
          onClick: i
        }, [
          a("img", {
            src: p(s),
            style: { "object-fit": "contain", "margin-left": "16px", "margin-right": "0px", display: "inline-block", "vertical-align": "middle", width: "16px", height: "16px" }
          }, null, 8, Ce),
          a("p", ke, h(e.name), 1),
          a("h4", We, h(e.title), 1),
          a("p", Ve, h(e.text), 1)
        ])) : B("", !0)
      ]),
      _: 1
    }));
  }
}, Se = ["name", "id"], Le = ["for"], Me = /* @__PURE__ */ f({
  __name: "webwin-checkbox",
  props: { name: String, checked: Array },
  setup(e) {
    const o = e, t = c(o.name), l = c(o.checked);
    return console.log("%c✨Welcome to Web-Win-Vue-Checkbox✨", `
  color: #0078d7;
  text-shadow: 0 1px 0 #0078d7;`), (s, n) => (u(), r(k, null, [
      $(a("input", {
        type: "checkbox",
        class: "ww-checkbox",
        name: t.value,
        id: t.value,
        "onUpdate:modelValue": n[0] || (n[0] = (i) => l.value = i),
        onClick: n[1] || (n[1] = (i) => s.$emit("click", i))
      }, null, 8, Se), [
        [J, l.value]
      ]),
      a("label", {
        for: t.value,
        class: "ww-checkbox-label"
      }, [
        C(s.$slots, "default", {}, void 0, !0)
      ], 8, Le)
    ], 64));
  }
}), E = /* @__PURE__ */ _(Me, [["__scopeId", "data-v-c289ea76"]]), Be = ["name", "id"], Ie = ["for"], Ne = /* @__PURE__ */ f({
  __name: "webwin-radio",
  props: { name: String, checked: Array },
  setup(e) {
    const o = e, t = c(o.name), l = c(o.checked);
    return console.log("%c✨Welcome to Web-Win-Vue-radio✨", `
  color: #0078d7;
  text-shadow: 0 1px 0 #0078d7;`), (s, n) => (u(), r(k, null, [
      $(a("input", {
        type: "radio",
        class: "ww-radio",
        name: t.value,
        id: t.value,
        "onUpdate:modelValue": n[0] || (n[0] = (i) => l.value = i),
        onClick: n[1] || (n[1] = (i) => s.$emit("click", i))
      }, null, 8, Be), [
        [K, l.value]
      ]),
      a("label", {
        for: t.value,
        class: "ww-radio-label"
      }, [
        C(s.$slots, "default", {}, void 0, !0)
      ], 8, Ie)
    ], 64));
  }
}), F = /* @__PURE__ */ _(Ne, [["__scopeId", "data-v-78978c8c"]]), Re = { style: { position: "relative" } }, Te = {
  key: 0,
  class: "list-box"
}, Xe = { style: { overflow: "auto", height: "calc( 100% - 240px )" } }, Ye = ["onClick"], De = { class: "label" }, ze = {
  __name: "webwin-listbox",
  props: {
    items: { type: Array, required: !0 },
    modelValue: { type: Number, default: 0 },
    title: { type: String, default: "itembox" }
  },
  emits: ["update"],
  setup(e, { emit: o }) {
    Q((d) => ({
      "57668b30": p(x) + "px",
      "4d9bb7f6": p(g) + "px"
    })), console.log("%c✨Welcome to Web-Win-Vue-Item✨", `
  color: #0078d7;
  text-shadow: 0 1px 0 #0078d7;`);
    const t = e, l = o;
    let s = c(""), n = c(!1), i = c(t.modelValue), v = c(t.title), g = c(0), x = c(0);
    function w(d) {
      n.value = !1, s.value = "", i.value = d, v.value = t.items[d].name, l("update", d), setTimeout(() => {
        g.value = d * -35, x.value = d * 35 + 17.5;
      }, 100);
    }
    function m() {
      n.value = !n.value, s.value = n.value ? "active" : "";
    }
    return (d, W) => (u(), r("div", Re, [
      a("div", {
        class: y(["list-box-button", p(s)]),
        onClick: m
      }, h(p(v)), 3),
      b(L, null, {
        default: M(() => [
          p(n) ? (u(), r("ul", Te, [
            a("div", Xe, [
              (u(!0), r(k, null, T(e.items, (q, V) => (u(), r("li", {
                key: V,
                class: y({ active: V === p(i) }),
                onClick: (He) => w(V)
              }, [
                a("span", De, h(q.name), 1)
              ], 10, Ye))), 128))
            ])
          ])) : B("", !0)
        ]),
        _: 1
      })
    ]));
  }
}, U = /* @__PURE__ */ _(ze, [["__scopeId", "data-v-e0bba711"]]), Oe = [U, F, E, X, N, Y, D, I, z, O, H], Fe = {
  install(e) {
    Oe.forEach((o) => {
      e.component("winbutton", X), e.component("winitem", N), e.component("wintile", Y), e.component("wintab", D), e.component("wininputbox", I), e.component("winpasswordbox", z), e.component("winricheditbox", O), e.component("winnotifications", H), e.component("wincheckbox", E), e.component("winradio", F), e.component("winlistbox", U);
    });
  }
};
export {
  Fe as default,
  X as winbutton,
  E as wincheckbox,
  I as wininputbox,
  N as winitem,
  U as winlistbox,
  H as winnotifications,
  z as winpasswordbox,
  F as winradio,
  O as winricheditbox,
  D as wintab,
  Y as wintile
};

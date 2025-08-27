import { createElementBlock as u, openBlock as r, renderSlot as $, defineComponent as x, ref as c, createElementVNode as a, createVNode as b, toDisplayString as v, Fragment as C, renderList as R, normalizeClass as V, normalizeStyle as W, watch as U, Transition as S, withCtx as L, createCommentVNode as M, withDirectives as y, vShow as N, onMounted as q, nextTick as G, createBlock as Z, unref as h, vModelCheckbox as j, vModelRadio as P, useCssVars as J, isRef as K } from "vue";
const g = (e, o) => {
  const t = e.__vccOpts || e;
  for (const [l, n] of o)
    t[l] = n;
  return t;
}, Q = {
  __name: "webwin-button",
  setup(e) {
    return console.log("%c✨Welcome to Web-Win-Vue-Button✨", `
  color: #0078d7;
  text-shadow: 0 1px 0 #0078d7;`), (o, t) => (r(), u("button", null, [
      $(o.$slots, "default", {}, void 0, !0)
    ]));
  }
}, T = /* @__PURE__ */ g(Q, [["__scopeId", "data-v-85a8a3fa"]]), A = ["value", "placeholder"], B = /* @__PURE__ */ x({
  __name: "webwin-inputbox",
  props: { value: String, placeholder: String },
  setup(e) {
    console.log("%c✨Welcome to Web-Win-Vue-InputBox✨", `
  color: #0078d7;
  text-shadow: 0 1px 0 #0078d7;`);
    const o = e, t = c(o.value), l = c(o.placeholder);
    return (n, s) => (r(), u("input", {
      type: "text",
      name: "fname",
      class: "uwpinput",
      value: t.value,
      placeholder: l.value,
      onChange: s[0] || (s[0] = (i) => n.$emit("@change", i))
    }, null, 40, A));
  }
}), ee = { class: "side-bar" }, te = { style: { width: "var(--sb-width, 350px)", margin: "auto" } }, oe = {
  style: { "margin-top": "26px", "margin-bottom": "26px", "margin-left": "18px" },
  class: "title"
}, ne = { style: { overflow: "auto", height: "calc( 100% - 240px )" } }, le = ["onClick"], se = {
  class: "icon",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  "aria-hidden": "true"
}, ae = ["d"], ie = { class: "label" }, ce = {
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
  text-shadow: 0 1px 0 #0078d7;`), (o, t) => (r(), u("ul", ee, [
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
        a("div", te, [
          b(B, {
            placeholder: "查找",
            style: { "margin-top": "6px", width: "320px" }
          })
        ]),
        a("h3", oe, v(e.title), 1)
      ]),
      a("div", ne, [
        (r(!0), u(C, null, R(e.items, (l, n) => (r(), u("li", {
          key: n,
          class: V({ active: n === e.modelValue }),
          onClick: (s) => o.$emit("update:modelValue", n)
        }, [
          t[1] || (t[1] = a("span", { class: "indicator" }, null, -1)),
          (r(), u("svg", se, [
            a("path", {
              d: l.icon
            }, null, 8, ae)
          ])),
          a("span", ie, v(l.name), 1)
        ], 10, le))), 128))
      ])
    ]));
  }
}, I = /* @__PURE__ */ g(ce, [["__scopeId", "data-v-cbab5da9"]]);
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
}, ue = { class: "tile-content" }, de = { class: "tile-icon" }, me = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  width: "24",
  height: "24"
}, pe = ["d"], he = { class: "tile-title" };
function ve(e, o, t, l, n, s) {
  return r(), u("div", {
    class: V(["tile", t.size]),
    style: W(s.tileStyle),
    onMousemove: o[0] || (o[0] = (...i) => s.handleMouseMove && s.handleMouseMove(...i)),
    onMouseenter: o[1] || (o[1] = (i) => n.isHovered = !0),
    onMouseleave: o[2] || (o[2] = (...i) => s.handleMouseLeave && s.handleMouseLeave(...i))
  }, [
    a("div", ue, [
      a("div", de, [
        $(e.$slots, "icon", {}, () => [
          (r(), u("svg", me, [
            a("path", {
              fill: "white",
              d: t.icon
            }, null, 8, pe)
          ]))
        ], !0)
      ]),
      a("div", he, v(t.title), 1)
    ]),
    a("div", {
      class: "glow-border",
      style: W(s.glowStyle)
    }, null, 4),
    a("div", {
      class: "pointer-glow",
      style: W(s.pointerGlowStyle)
    }, null, 4)
  ], 38);
}
const X = /* @__PURE__ */ g(re, [["render", ve], ["__scopeId", "data-v-9ae9ef89"]]), we = { class: "container" }, _e = {
  key: "state0",
  class: "iframe-container"
}, ge = ["src"], fe = {
  key: "state1",
  class: "iframe-container"
}, xe = ["src"], Y = {
  __name: "webwin-tab",
  props: { menu: Array, url: Array },
  setup(e) {
    console.log("%c✨Welcome to Web-Win-Vue-Tab✨", `
  color: #0078d7;
  text-shadow: 0 1px 0 #0078d7;`);
    const o = e, t = c(0), l = c(0), n = c(o.url[0]);
    return U(t, (s) => {
      console.log("activeIndex changed:", s), console.log("new url:", o.url[s]), n.value = o.url[s], l.value = l.value === 0 ? 1 : 0, console.log("docState:", l.value);
    }), (s, i) => (r(), u("div", we, [
      b(I, {
        modelValue: t.value,
        "onUpdate:modelValue": i[0] || (i[0] = (w) => t.value = w),
        items: e.menu,
        class: "item-1"
      }, null, 8, ["modelValue", "items"]),
      b(S, {
        name: "fade",
        mode: "out-in"
      }, {
        default: L(() => [
          l.value === 0 ? (r(), u("div", _e, [
            y(a("iframe", { src: n.value }, null, 8, ge), [
              [N, l.value === 0]
            ])
          ])) : l.value === 1 ? (r(), u("div", fe, [
            y(a("iframe", { src: n.value }, null, 8, xe), [
              [N, l.value === 1]
            ])
          ])) : M("", !0)
        ]),
        _: 1
      })
    ]));
  }
}, be = ["value", "placeholder"], D = /* @__PURE__ */ x({
  __name: "webwin-passwordbox",
  props: { value: String, placeholder: String },
  setup(e) {
    console.log("%c✨Welcome to Web-Win-Vue-PasswordBox✨", `
  color: #0078d7;
  text-shadow: 0 1px 0 #0078d7;`);
    const o = e, t = c(o.value), l = c(o.placeholder);
    return (n, s) => (r(), u("input", {
      type: "password",
      name: "fname",
      class: "uwppassword",
      value: t.value,
      placeholder: l.value,
      onChange: s[0] || (s[0] = (i) => n.$emit("@change", i))
    }, null, 40, be));
  }
}), ye = ["data-placeholder"], z = /* @__PURE__ */ x({
  __name: "webwin-richeditbox",
  props: {
    value: { type: String, default: "" },
    placeholder: { type: String, default: "" }
  },
  emits: ["update:value", "change"],
  setup(e, { emit: o }) {
    const t = e, l = o, n = c(null), s = c(t.placeholder), i = c(t.value);
    q(() => {
      n.value && (n.value.textContent = t.value || "", i.value = t.value || "");
    });
    const w = (d) => {
      if (!n.value) return;
      const m = n.value.textContent || "";
      l("update:value", m), G(() => {
        if (n.value) {
          const p = document.createRange(), _ = window.getSelection();
          p.selectNodeContents(n.value), p.collapse(!1), _?.removeAllRanges(), _?.addRange(p);
        }
      });
    }, f = (d) => {
      const m = d.target;
      m.textContent === t.placeholder && (m.textContent = "");
    }, k = (d) => {
      const m = d.target, p = m.textContent || "";
      p !== i.value && (l("change", {
        target: {
          value: p
        }
      }), i.value = p), p.trim() === "" && (m.textContent = "");
    };
    return (d, m) => (r(), u("div", {
      ref_key: "editableDiv",
      ref: n,
      class: "uwprichrditbox",
      contenteditable: "plaintext-only",
      "data-placeholder": s.value,
      onInput: w,
      onFocus: f,
      onBlur: k
    }, null, 40, ye));
  }
}), $e = ["src"], Ce = {
  class: "n-name",
  style: { display: "inline-block", "margin-left": "6px" }
}, ke = { class: "n-text n-title" }, We = { class: "n-vulua" }, O = {
  __name: "webwin-notifications",
  props: { name: String, title: String, text: String, img: String },
  setup(e, { expose: o }) {
    const t = e;
    let l = c(!1), n = c(t.img);
    const s = () => {
      l.value = !l.value;
    };
    function i() {
      l.value && setTimeout(() => {
        l.value = !1;
      }, 250);
    }
    return o({ showNotification: s }), console.log("%c✨Welcome to Web-Win-Vue-Notifications✨", `
  color: #0078d7;
  text-shadow: 0 1px 0 #0078d7;`), (w, f) => (r(), Z(S, { name: "slide-fade" }, {
      default: L(() => [
        h(l) ? (r(), u("div", {
          key: 0,
          class: "Notification",
          onClick: i
        }, [
          a("img", {
            src: h(n),
            style: { "object-fit": "contain", "margin-left": "16px", "margin-right": "0px", display: "inline-block", "vertical-align": "middle", width: "16px", height: "16px" }
          }, null, 8, $e),
          a("p", Ce, v(e.name), 1),
          a("h4", ke, v(e.title), 1),
          a("p", We, v(e.text), 1)
        ])) : M("", !0)
      ]),
      _: 1
    }));
  }
}, Ve = ["name", "id"], Se = ["for"], Le = /* @__PURE__ */ x({
  __name: "webwin-checkbox",
  props: { name: String, checked: Array },
  setup(e) {
    const o = e, t = c(o.name), l = c(o.checked);
    return console.log("%c✨Welcome to Web-Win-Vue-Checkbox✨", `
  color: #0078d7;
  text-shadow: 0 1px 0 #0078d7;`), (n, s) => (r(), u(C, null, [
      y(a("input", {
        type: "checkbox",
        class: "ww-checkbox",
        name: t.value,
        id: t.value,
        "onUpdate:modelValue": s[0] || (s[0] = (i) => l.value = i),
        onClick: s[1] || (s[1] = (i) => n.$emit("click", i))
      }, null, 8, Ve), [
        [j, l.value]
      ]),
      a("label", {
        for: t.value,
        class: "ww-checkbox-label"
      }, [
        $(n.$slots, "default", {}, void 0, !0)
      ], 8, Se)
    ], 64));
  }
}), H = /* @__PURE__ */ g(Le, [["__scopeId", "data-v-c289ea76"]]), Me = ["name", "id"], Be = ["for"], Ie = /* @__PURE__ */ x({
  __name: "webwin-radio",
  props: { name: String, checked: Array },
  setup(e) {
    const o = e, t = c(o.name), l = c(o.checked);
    return console.log("%c✨Welcome to Web-Win-Vue-radio✨", `
  color: #0078d7;
  text-shadow: 0 1px 0 #0078d7;`), (n, s) => (r(), u(C, null, [
      y(a("input", {
        type: "radio",
        class: "ww-radio",
        name: t.value,
        id: t.value,
        "onUpdate:modelValue": s[0] || (s[0] = (i) => l.value = i),
        onClick: s[1] || (s[1] = (i) => n.$emit("click", i))
      }, null, 8, Me), [
        [P, l.value]
      ]),
      a("label", {
        for: t.value,
        class: "ww-radio-label"
      }, [
        $(n.$slots, "default", {}, void 0, !0)
      ], 8, Be)
    ], 64));
  }
}), E = /* @__PURE__ */ g(Ie, [["__scopeId", "data-v-78978c8c"]]), Ne = { style: { position: "relative" } }, Re = {
  key: 0,
  class: "list-box"
}, Te = { style: { overflow: "auto", height: "calc( 100% - 240px )" } }, Xe = ["onClick"], Ye = { class: "label" }, De = {
  __name: "webwin-listbox",
  props: {
    items: { type: Array, required: !0 },
    modelValue: { type: Number, default: 0 },
    title: { type: String, default: "itembox" }
  },
  emits: ["update"],
  setup(e, { emit: o }) {
    J((d) => ({
      "33346aea": h(f) + "px",
      "6cac650b": h(w) + "px"
    })), console.log("%c✨Welcome to Web-Win-Vue-Item✨", `
  color: #0078d7;
  text-shadow: 0 1px 0 #0078d7;`);
    const t = e, l = o;
    let n = c(!1), s = c(t.modelValue), i = c(t.title), w = c(0), f = c(0);
    function k(d) {
      n.value = !1, s.value = d, i.value = t.items[d].name, l("update", d), setTimeout(() => {
        w.value = d * -40, f.value = d * 40 + 17.5;
      }, 200);
    }
    return (d, m) => (r(), u("div", Ne, [
      a("div", {
        class: "list-box-button",
        onClick: m[0] || (m[0] = (p) => K(n) ? n.value = !h(n) : n = !h(n))
      }, v(h(i)), 1),
      b(S, null, {
        default: L(() => [
          h(n) ? (r(), u("ul", Re, [
            a("div", Te, [
              (r(!0), u(C, null, R(e.items, (p, _) => (r(), u("li", {
                key: _,
                class: V({ active: _ === h(s) }),
                onClick: (Oe) => k(_)
              }, [
                a("span", Ye, v(p.name), 1)
              ], 10, Xe))), 128))
            ])
          ])) : M("", !0)
        ]),
        _: 1
      })
    ]));
  }
}, F = /* @__PURE__ */ g(De, [["__scopeId", "data-v-9fb805ed"]]), ze = [F, E, H, T, I, X, Y, B, D, z, O], Ee = {
  install(e) {
    ze.forEach((o) => {
      e.component("winbutton", T), e.component("winitem", I), e.component("wintile", X), e.component("wintab", Y), e.component("wininputbox", B), e.component("winpasswordbox", D), e.component("winricheditbox", z), e.component("winnotifications", O), e.component("wincheckbox", H), e.component("winradio", E), e.component("winlistbox", F);
    });
  }
};
export {
  Ee as default,
  T as winbutton,
  H as wincheckbox,
  B as wininputbox,
  I as winitem,
  F as winlistbox,
  O as winnotifications,
  D as winpasswordbox,
  E as winradio,
  z as winricheditbox,
  Y as wintab,
  X as wintile
};

import { createElementBlock as u, openBlock as r, renderSlot as C, defineComponent as x, ref as c, normalizeClass as h, unref as m, createElementVNode as i, toDisplayString as w, Fragment as k, renderList as R, normalizeStyle as y, watch as P, createVNode as S, Transition as L, withCtx as M, createCommentVNode as B, withDirectives as $, vShow as N, onMounted as Z, nextTick as j, createBlock as J, vModelCheckbox as K, vModelRadio as Q, useCssVars as A } from "vue";
const g = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, l] of t)
    n[s] = l;
  return n;
}, ee = {
  __name: "webwin-button",
  setup(e) {
    return console.log("%c✨Welcome to Web-Win-Vue-Button✨", `
  color: #0078d7;
  text-shadow: 0 1px 0 #0078d7;`), (t, n) => (r(), u("button", null, [
      C(t.$slots, "default", {}, void 0, !0)
    ]));
  }
}, T = /* @__PURE__ */ g(ee, [["__scopeId", "data-v-85a8a3fa"]]), te = ["value", "placeholder"], X = /* @__PURE__ */ x({
  __name: "webwin-inputbox",
  props: { value: String, placeholder: String },
  setup(e) {
    console.log("%c✨Welcome to Web-Win-Vue-InputBox✨", `
  color: #0078d7;
  text-shadow: 0 1px 0 #0078d7;`);
    const t = e, n = c(t.value), s = c(t.placeholder);
    return (l, o) => (r(), u("input", {
      type: "text",
      name: "fname",
      class: "uwpinput",
      value: n.value,
      placeholder: s.value,
      onChange: o[0] || (o[0] = (a) => l.$emit("@change", a))
    }, null, 40, te));
  }
}), oe = { style: { overflow: "auto", height: "calc( 100% - 240px )", "overflow-x": "hidden" } }, ne = ["onClick"], le = {
  class: "icon",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  "aria-hidden": "true"
}, se = ["d"], ae = {
  __name: "webwin-item",
  props: {
    items: { type: Array, required: !0 },
    modelValue: { type: Number, default: 0 },
    title: { type: String, default: "Menu" }
  },
  emits: ["update:modelValue"],
  setup(e) {
    console.log("%c✨Welcome to Web-Win-Vue-Item✨", `
  color: #0078d7;
  text-shadow: 0 1px 0 #0078d7;`);
    let t = c("");
    function n() {
      t.value === "" ? t.value = "folded" : t.value = "";
    }
    return (s, l) => (r(), u("ul", {
      class: h(["side-bar", m(t)])
    }, [
      i("div", null, [
        i("li", {
          style: { "margin-top": "24px" },
          onClick: n
        }, [
          l[0] || (l[0] = i("svg", {
            class: "icon",
            viewBox: "0 0 24 24",
            fill: "currentColor",
            "aria-hidden": "true"
          }, [
            i("path", {
              xmlns: "http://www.w3.org/2000/svg",
              style: { stroke: "none", "fill-rule": "nonzero", fill: "rgb(0%,0%,0%)", "fill-opacity": "1" },
              d: "M 0.863281 14.628906 L 2.898438 14.628906 L 2.898438 22.773438 C 2.898438 23.253906 3.292969 23.648438 3.773438 23.648438 L 9.734375 23.648438 C 10.214844 23.648438 10.609375 23.253906 10.609375 22.773438 L 10.609375 16.8125 L 14.246094 16.8125 L 14.246094 22.773438 C 14.246094 23.253906 14.636719 23.648438 15.117188 23.648438 L 20.789062 23.648438 C 21.269531 23.648438 21.664062 23.253906 21.664062 22.773438 L 21.664062 14.628906 L 24.136719 14.628906 C 24.484375 14.628906 24.804688 14.410156 24.9375 14.089844 C 25.066406 13.769531 24.992188 13.394531 24.746094 13.144531 L 13.371094 1.609375 C 13.039062 1.277344 12.484375 1.261719 12.152344 1.597656 L 0.265625 13.132812 C 0.00390625 13.378906 -0.0664062 13.757812 0.0625 14.089844 C 0.195312 14.425781 0.515625 14.628906 0.863281 14.628906 Z M 12.734375 3.457031 L 22.042969 12.882812 L 20.789062 12.882812 C 20.308594 12.882812 19.917969 13.277344 19.917969 13.757812 L 19.917969 21.902344 L 15.992188 21.902344 L 15.992188 15.9375 C 15.992188 15.457031 15.597656 15.066406 15.117188 15.066406 L 9.734375 15.066406 C 9.257812 15.066406 8.863281 15.457031 8.863281 15.9375 L 8.863281 21.902344 L 4.644531 21.902344 L 4.644531 13.757812 C 4.644531 13.277344 4.253906 12.882812 3.773438 12.882812 L 3.015625 12.882812 Z M 12.734375 3.457031 "
            })
          ], -1)),
          i("span", {
            class: h(["label", m(t)])
          }, "折叠", 2)
        ]),
        l[1] || (l[1] = i("div", { style: { width: "var(--sb-width, 350px)", margin: "auto" } }, null, -1)),
        i("h3", {
          style: { "margin-top": "26px", "margin-bottom": "26px", "margin-left": "18px" },
          class: h(["title", m(t)])
        }, w(e.title), 3)
      ]),
      i("div", oe, [
        (r(!0), u(k, null, R(e.items, (o, a) => (r(), u("li", {
          key: a,
          class: h({ active: a === e.modelValue }),
          onClick: (v) => s.$emit("update:modelValue", a)
        }, [
          l[2] || (l[2] = i("span", { class: "indicator" }, null, -1)),
          (r(), u("svg", le, [
            i("path", {
              d: o.icon
            }, null, 8, se)
          ])),
          i("span", {
            class: h(["label", m(t)])
          }, w(o.name), 3)
        ], 10, ne))), 128))
      ])
    ], 2));
  }
}, I = /* @__PURE__ */ g(ae, [["__scopeId", "data-v-d26944f3"]]);
console.log("%c✨Welcome to Web-Win-Vue-Tile✨", `
  color: #0078d7;
  text-shadow: 0 1px 0 #0078d7;`);
const ie = {
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
      const t = e.currentTarget.getBoundingClientRect();
      this.mouseX = e.clientX - t.left, this.mouseY = e.clientY - t.top;
      const n = Math.min(
        this.mouseX,
        t.width - this.mouseX,
        this.mouseY,
        t.height - this.mouseY
      ), s = this.glowRadius;
      this.glowOpacity = Math.max(0, (s - n) / s);
    },
    handleMouseLeave() {
      this.isHovered = !1, this.glowOpacity = 0;
    }
  }
}, ce = { class: "tile-content" }, re = { class: "tile-icon" }, ue = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  width: "24",
  height: "24"
}, de = ["d"], me = { class: "tile-title" };
function pe(e, t, n, s, l, o) {
  return r(), u("div", {
    class: h(["tile", n.size]),
    style: y(o.tileStyle),
    onMousemove: t[0] || (t[0] = (...a) => o.handleMouseMove && o.handleMouseMove(...a)),
    onMouseenter: t[1] || (t[1] = (a) => l.isHovered = !0),
    onMouseleave: t[2] || (t[2] = (...a) => o.handleMouseLeave && o.handleMouseLeave(...a))
  }, [
    i("div", ce, [
      i("div", re, [
        C(e.$slots, "icon", {}, () => [
          (r(), u("svg", ue, [
            i("path", {
              fill: "white",
              d: n.icon
            }, null, 8, de)
          ]))
        ], !0)
      ]),
      i("div", me, w(n.title), 1)
    ]),
    i("div", {
      class: "glow-border",
      style: y(o.glowStyle)
    }, null, 4),
    i("div", {
      class: "pointer-glow",
      style: y(o.pointerGlowStyle)
    }, null, 4)
  ], 38);
}
const Y = /* @__PURE__ */ g(ie, [["render", pe], ["__scopeId", "data-v-9ae9ef89"]]), ve = { class: "container" }, he = {
  key: "state0",
  class: "iframe-container"
}, we = ["src"], _e = {
  key: "state1",
  class: "iframe-container"
}, ge = ["src"], D = {
  __name: "webwin-tab",
  props: { menu: Array, url: Array },
  setup(e) {
    console.log("%c✨Welcome to Web-Win-Vue-Tab✨", `
  color: #0078d7;
  text-shadow: 0 1px 0 #0078d7;`);
    const t = e, n = c(0), s = c(0), l = c(t.url[0]);
    return P(n, (o) => {
      console.log("activeIndex changed:", o), console.log("new url:", t.url[o]), l.value = t.url[o], s.value = s.value === 0 ? 1 : 0, console.log("docState:", s.value);
    }), (o, a) => (r(), u("div", ve, [
      S(I, {
        modelValue: n.value,
        "onUpdate:modelValue": a[0] || (a[0] = (v) => n.value = v),
        items: e.menu,
        class: "item-1"
      }, null, 8, ["modelValue", "items"]),
      S(L, {
        name: "fade",
        mode: "out-in"
      }, {
        default: M(() => [
          s.value === 0 ? (r(), u("div", he, [
            $(i("iframe", { src: l.value }, null, 8, we), [
              [N, s.value === 0]
            ])
          ])) : s.value === 1 ? (r(), u("div", _e, [
            $(i("iframe", { src: l.value }, null, 8, ge), [
              [N, s.value === 1]
            ])
          ])) : B("", !0)
        ]),
        _: 1
      })
    ]));
  }
}, fe = ["value", "placeholder"], z = /* @__PURE__ */ x({
  __name: "webwin-passwordbox",
  props: { value: String, placeholder: String },
  setup(e) {
    console.log("%c✨Welcome to Web-Win-Vue-PasswordBox✨", `
  color: #0078d7;
  text-shadow: 0 1px 0 #0078d7;`);
    const t = e, n = c(t.value), s = c(t.placeholder);
    return (l, o) => (r(), u("input", {
      type: "password",
      name: "fname",
      class: "uwppassword",
      value: n.value,
      placeholder: s.value,
      onChange: o[0] || (o[0] = (a) => l.$emit("@change", a))
    }, null, 40, fe));
  }
}), xe = ["data-placeholder"], O = /* @__PURE__ */ x({
  __name: "webwin-richeditbox",
  props: {
    value: { type: String, default: "" },
    placeholder: { type: String, default: "" }
  },
  emits: ["update:value", "change"],
  setup(e, { emit: t }) {
    const n = e, s = t, l = c(null), o = c(n.placeholder), a = c(n.value);
    Z(() => {
      l.value && (l.value.textContent = n.value || "", a.value = n.value || "");
    });
    const v = (_) => {
      if (!l.value) return;
      const p = l.value.textContent || "";
      s("update:value", p), j(() => {
        if (l.value) {
          const d = document.createRange(), W = window.getSelection();
          d.selectNodeContents(l.value), d.collapse(!1), W?.removeAllRanges(), W?.addRange(d);
        }
      });
    }, f = (_) => {
      const p = _.target;
      p.textContent === n.placeholder && (p.textContent = "");
    }, b = (_) => {
      const p = _.target, d = p.textContent || "";
      d !== a.value && (s("change", {
        target: {
          value: d
        }
      }), a.value = d), d.trim() === "" && (p.textContent = "");
    };
    return (_, p) => (r(), u("div", {
      ref_key: "editableDiv",
      ref: l,
      class: "uwprichrditbox",
      contenteditable: "plaintext-only",
      "data-placeholder": o.value,
      onInput: v,
      onFocus: f,
      onBlur: b
    }, null, 40, xe));
  }
}), be = ["src"], ye = {
  class: "n-name",
  style: { display: "inline-block", "margin-left": "6px" }
}, $e = { class: "n-text n-title" }, Ce = { class: "n-vulua" }, F = {
  __name: "webwin-notifications",
  props: { name: String, title: String, text: String, img: String },
  setup(e, { expose: t }) {
    const n = e;
    let s = c(!1), l = c(n.img);
    const o = () => {
      s.value = !s.value;
    };
    function a() {
      s.value && setTimeout(() => {
        s.value = !1;
      }, 250);
    }
    return t({ showNotification: o }), console.log("%c✨Welcome to Web-Win-Vue-Notifications✨", `
  color: #0078d7;
  text-shadow: 0 1px 0 #0078d7;`), (v, f) => (r(), J(L, { name: "slide-fade" }, {
      default: M(() => [
        m(s) ? (r(), u("div", {
          key: 0,
          class: "Notification",
          onClick: a
        }, [
          i("img", {
            src: m(l),
            style: { "object-fit": "contain", "margin-left": "16px", "margin-right": "0px", display: "inline-block", "vertical-align": "middle", width: "16px", height: "16px" }
          }, null, 8, be),
          i("p", ye, w(e.name), 1),
          i("h4", $e, w(e.title), 1),
          i("p", Ce, w(e.text), 1)
        ])) : B("", !0)
      ]),
      _: 1
    }));
  }
}, ke = ["name", "id"], We = ["for"], Ve = /* @__PURE__ */ x({
  __name: "webwin-checkbox",
  props: { name: String, checked: Array },
  setup(e) {
    const t = e, n = c(t.name), s = c(t.checked);
    return console.log("%c✨Welcome to Web-Win-Vue-Checkbox✨", `
  color: #0078d7;
  text-shadow: 0 1px 0 #0078d7;`), (l, o) => (r(), u(k, null, [
      $(i("input", {
        type: "checkbox",
        class: "ww-checkbox",
        name: n.value,
        id: n.value,
        "onUpdate:modelValue": o[0] || (o[0] = (a) => s.value = a),
        onClick: o[1] || (o[1] = (a) => l.$emit("click", a))
      }, null, 8, ke), [
        [K, s.value]
      ]),
      i("label", {
        for: n.value,
        class: "ww-checkbox-label"
      }, [
        C(l.$slots, "default", {}, void 0, !0)
      ], 8, We)
    ], 64));
  }
}), H = /* @__PURE__ */ g(Ve, [["__scopeId", "data-v-c289ea76"]]), Se = ["name", "id"], Le = ["for"], Me = /* @__PURE__ */ x({
  __name: "webwin-radio",
  props: { name: String, checked: Array },
  setup(e) {
    const t = e, n = c(t.name), s = c(t.checked);
    return console.log("%c✨Welcome to Web-Win-Vue-radio✨", `
  color: #0078d7;
  text-shadow: 0 1px 0 #0078d7;`), (l, o) => (r(), u(k, null, [
      $(i("input", {
        type: "radio",
        class: "ww-radio",
        name: n.value,
        id: n.value,
        "onUpdate:modelValue": o[0] || (o[0] = (a) => s.value = a),
        onClick: o[1] || (o[1] = (a) => l.$emit("click", a))
      }, null, 8, Se), [
        [Q, s.value]
      ]),
      i("label", {
        for: n.value,
        class: "ww-radio-label"
      }, [
        C(l.$slots, "default", {}, void 0, !0)
      ], 8, Le)
    ], 64));
  }
}), E = /* @__PURE__ */ g(Me, [["__scopeId", "data-v-78978c8c"]]), Be = { style: { position: "relative" } }, Ie = {
  key: 0,
  class: "list-box"
}, Ne = { style: { overflow: "auto", height: "calc( 100% - 240px )" } }, Re = ["onClick"], Te = { class: "label" }, Xe = {
  __name: "webwin-listbox",
  props: {
    items: { type: Array, required: !0 },
    modelValue: { type: Number, default: 0 },
    title: { type: String, default: "itembox" }
  },
  emits: ["update"],
  setup(e, { emit: t }) {
    A((d) => ({
      "4c8120fa": m(b) + "px",
      "1ae8acfb": m(f) + "px"
    })), console.log("%c✨Welcome to Web-Win-Vue-Item✨", `
  color: #0078d7;
  text-shadow: 0 1px 0 #0078d7;`);
    const n = e, s = t;
    let l = c(""), o = c(!1), a = c(n.modelValue), v = c(n.title), f = c(0), b = c(0);
    function _(d) {
      o.value = !1, l.value = "", a.value = d, v.value = n.items[d].name, s("update", d), setTimeout(() => {
        f.value = d * -35, b.value = d * 35 + 17.5;
      }, 100);
    }
    function p() {
      o.value = !o.value, l.value = o.value ? "active" : "";
    }
    return (d, W) => (r(), u("div", Be, [
      i("div", {
        class: h(["list-box-button", m(l)]),
        onClick: p
      }, w(m(v)), 3),
      S(L, null, {
        default: M(() => [
          m(o) ? (r(), u("ul", Ie, [
            i("div", Ne, [
              (r(!0), u(k, null, R(e.items, (G, V) => (r(), u("li", {
                key: V,
                class: h({ active: V === m(a) }),
                onClick: (Oe) => _(V)
              }, [
                i("span", Te, w(G.name), 1)
              ], 10, Re))), 128))
            ])
          ])) : B("", !0)
        ]),
        _: 1
      })
    ]));
  }
}, U = /* @__PURE__ */ g(Xe, [["__scopeId", "data-v-5fe19256"]]), Ye = { class: "progress-bar" }, De = {
  __name: "webwin-progressbar",
  props: {
    progress: { type: Number, default: 0 }
  },
  setup(e) {
    return console.log("%c✨Welcome to Web-Win-Vue-ProgressBar✨", `
  color: #0078d7;
  text-shadow: 0 1px 0 #0078d7;`), (t, n) => (r(), u("div", Ye, [
      i("div", {
        class: "progress",
        style: y({ width: e.progress + "%" })
      }, null, 4)
    ]));
  }
}, q = /* @__PURE__ */ g(De, [["__scopeId", "data-v-d1bcd074"]]), ze = [q, U, E, H, T, I, Y, D, X, z, O, F], He = {
  install(e) {
    ze.forEach((t) => {
      e.component("winbutton", T), e.component("winitem", I), e.component("wintile", Y), e.component("wintab", D), e.component("wininputbox", X), e.component("winpasswordbox", z), e.component("winricheditbox", O), e.component("winnotifications", F), e.component("wincheckbox", H), e.component("winradio", E), e.component("winlistbox", U), e.component("winprogressbar", q);
    });
  }
};
export {
  He as default,
  T as winbutton,
  H as wincheckbox,
  X as wininputbox,
  I as winitem,
  U as winlistbox,
  F as winnotifications,
  z as winpasswordbox,
  q as winprogressbar,
  E as winradio,
  O as winricheditbox,
  D as wintab,
  Y as wintile
};

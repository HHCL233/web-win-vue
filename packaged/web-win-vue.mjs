import { createElementBlock as r, openBlock as c, renderSlot as k, defineComponent as N, ref as u, normalizeClass as f, unref as p, createElementVNode as n, toDisplayString as b, createVNode as V, Fragment as $, renderList as S, normalizeStyle as R, watch as oe, Transition as I, withCtx as W, createCommentVNode as C, withDirectives as B, vShow as Y, onMounted as le, nextTick as ne, createBlock as F, vModelCheckbox as se, vModelRadio as ae, useCssVars as T, isRef as L, createTextVNode as ie, mergeModels as ce, useModel as re, vModelText as ue } from "vue";
const g = (e, l) => {
  const o = e.__vccOpts || e;
  for (const [t, s] of l)
    o[t] = s;
  return o;
}, de = {
  __name: "webwin-button",
  setup(e) {
    return console.log("%c✨Welcome to Web-Win-Vue-Button✨", `
  color: #0078d7;
  text-shadow: 0 1px 0 #0078d7;`), (l, o) => (c(), r("button", null, [
      k(l.$slots, "default", {}, void 0, !0)
    ]));
  }
}, D = /* @__PURE__ */ g(de, [["__scopeId", "data-v-85a8a3fa"]]), pe = ["value", "placeholder"], me = /* @__PURE__ */ N({
  __name: "webwin-inputbox",
  props: { value: String, placeholder: String },
  setup(e) {
    console.log("%c✨Welcome to Web-Win-Vue-InputBox✨", `
  color: #0078d7;
  text-shadow: 0 1px 0 #0078d7;`);
    const o = u(e.placeholder);
    return (t, s) => (c(), r("input", {
      type: "text",
      name: "fname",
      class: "uwpinput",
      value: e.value,
      placeholder: o.value,
      onChange: s[0] || (s[0] = (a) => t.$emit("@change", a))
    }, null, 40, pe));
  }
}), H = /* @__PURE__ */ g(me, [["__scopeId", "data-v-227ff99f"]]), ve = { class: "sidebar-text" }, he = { style: { width: "var(--sb-width, 350px)", margin: "auto" } }, we = { style: { overflow: "auto", height: "calc( 100% - 240px )", "overflow-x": "hidden" } }, _e = ["onClick"], fe = {
  class: "icon",
  viewBox: "0 0 1024 1024",
  fill: "currentColor",
  "aria-hidden": "true",
  height: "16"
}, ge = ["d"], be = {
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
    const o = l;
    let t = u("");
    function s() {
      t.value === "" ? (t.value = "folded", o("update", !1)) : (t.value = "", o("update", !0));
    }
    return (a, i) => (c(), r("ul", {
      class: f(["side-bar", p(t)])
    }, [
      n("div", {
        class: f(["sidebar", p(t)])
      }, [
        n("p", ve, b(e.bartitle), 1)
      ], 2),
      n("div", null, [
        n("li", {
          style: { "margin-top": "24px", width: "24px" },
          onClick: s
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
            class: f(["label", p(t)])
          }, null, 2)
        ]),
        n("li", {
          onClick: s,
          class: f(["search-fold", p(t)])
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
            class: f(["label", p(t)])
          }, null, 2)
        ], 2),
        n("div", he, [
          V(H, {
            placeholder: "查找",
            class: f(["inputbox", p(t)]),
            style: { "margin-top": "6px", width: "320px", transition: "all 0s ease" }
          }, null, 8, ["class"])
        ]),
        n("h3", {
          style: { "margin-top": "26px", "margin-bottom": "26px", "margin-left": "18px" },
          class: f(["title", p(t)])
        }, b(e.title), 3)
      ]),
      n("div", we, [
        (c(!0), r($, null, S(e.items, (h, d) => (c(), r("li", {
          key: d,
          class: f({ active: d === e.modelValue }),
          onClick: (v) => a.$emit("update:modelValue", d)
        }, [
          i[2] || (i[2] = n("span", { class: "indicator" }, null, -1)),
          (c(), r("svg", fe, [
            n("path", {
              d: h.icon
            }, null, 8, ge)
          ])),
          n("span", {
            class: f(["label", p(t)])
          }, b(h.name), 3)
        ], 10, _e))), 128))
      ])
    ], 2));
  }
}, X = /* @__PURE__ */ g(be, [["__scopeId", "data-v-30fc2437"]]);
console.log("%c✨Welcome to Web-Win-Vue-Tile✨", `
  color: #0078d7;
  text-shadow: 0 1px 0 #0078d7;`);
const xe = {
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
      const o = Math.min(
        this.mouseX,
        l.width - this.mouseX,
        this.mouseY,
        l.height - this.mouseY
      ), t = this.glowRadius;
      this.glowOpacity = Math.max(0, (t - o) / t);
    },
    handleMouseLeave() {
      this.isHovered = !1, this.glowOpacity = 0;
    }
  }
}, ye = { class: "tile-content" }, $e = { class: "tile-icon" }, ke = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  width: "24",
  height: "24"
}, Ce = ["d"], We = { class: "tile-title" };
function Ve(e, l, o, t, s, a) {
  return c(), r("div", {
    class: f(["tile", o.size]),
    style: R(a.tileStyle),
    onMousemove: l[0] || (l[0] = (...i) => a.handleMouseMove && a.handleMouseMove(...i)),
    onMouseenter: l[1] || (l[1] = (i) => s.isHovered = !0),
    onMouseleave: l[2] || (l[2] = (...i) => a.handleMouseLeave && a.handleMouseLeave(...i))
  }, [
    n("div", ye, [
      n("div", $e, [
        k(e.$slots, "icon", {}, () => [
          (c(), r("svg", ke, [
            n("path", {
              fill: "white",
              d: o.icon
            }, null, 8, Ce)
          ]))
        ], !0)
      ]),
      n("div", We, b(o.title), 1)
    ]),
    n("div", {
      class: "glow-border",
      style: R(a.glowStyle)
    }, null, 4),
    n("div", {
      class: "pointer-glow",
      style: R(a.pointerGlowStyle)
    }, null, 4)
  ], 38);
}
const O = /* @__PURE__ */ g(xe, [["render", Ve], ["__scopeId", "data-v-9ae9ef89"]]), Me = { class: "container" }, Se = ["src"], Ie = ["src"], U = {
  __name: "webwin-tab",
  props: { menu: Array, url: Array, titlebar: Boolean, titlebartext: String },
  setup(e) {
    console.log("%c✨Welcome to Web-Win-Vue-Tab✨", `
  color: #0078d7;
  text-shadow: 0 1px 0 #0078d7;`);
    const l = e, o = u(0), t = u(0), s = u(l.url[0]);
    let a = u(""), i = u("");
    l.titlebar ? a.value = l.titlebartext : a.value = "", oe(o, (d) => {
      console.log("activeIndex changed:", d), console.log("new url:", l.url[d]), s.value = l.url[d], t.value = t.value === 0 ? 1 : 0, console.log("docState:", t.value);
    });
    function h(d) {
      d ? i.value = "" : i.value = "folded";
    }
    return (d, v) => (c(), r("div", Me, [
      V(X, {
        modelValue: o.value,
        "onUpdate:modelValue": v[0] || (v[0] = (x) => o.value = x),
        items: e.menu,
        class: "item-1",
        bartitle: p(a),
        onUpdate: h
      }, null, 8, ["modelValue", "items", "bartitle"]),
      V(I, {
        name: "fade",
        mode: "out-in"
      }, {
        default: W(() => [
          t.value === 0 ? (c(), r("div", {
            key: "state0",
            class: f(["iframe-container", p(i)])
          }, [
            k(d.$slots, "default", {}, () => [
              B(n("iframe", {
                src: s.value,
                style: { "margin-top": "70px" }
              }, null, 8, Se), [
                [Y, t.value === 0]
              ])
            ])
          ], 2)) : t.value === 1 ? (c(), r("div", {
            key: "state1",
            class: f(["iframe-container", p(i)])
          }, [
            k(d.$slots, "default", {}, () => [
              B(n("iframe", {
                src: s.value,
                style: { "margin-top": "70px" }
              }, null, 8, Ie), [
                [Y, t.value === 1]
              ])
            ])
          ], 2)) : C("", !0)
        ]),
        _: 3
      })
    ]));
  }
}, Be = ["value", "placeholder"], Ne = /* @__PURE__ */ N({
  __name: "webwin-passwordbox",
  props: { value: String, placeholder: String },
  setup(e) {
    console.log("%c✨Welcome to Web-Win-Vue-PasswordBox✨", `
  color: #0078d7;
  text-shadow: 0 1px 0 #0078d7;`);
    const l = e, o = u(l.value), t = u(l.placeholder);
    return (s, a) => (c(), r("input", {
      type: "password",
      name: "fname",
      class: "uwppassword",
      value: o.value,
      placeholder: t.value,
      onChange: a[0] || (a[0] = (i) => s.$emit("@change", i))
    }, null, 40, Be));
  }
}), q = /* @__PURE__ */ g(Ne, [["__scopeId", "data-v-5ce652ab"]]), ze = ["data-placeholder"], Re = /* @__PURE__ */ N({
  __name: "webwin-richeditbox",
  props: {
    value: { type: String, default: "" },
    placeholder: { type: String, default: "" }
  },
  emits: ["update", "change"],
  setup(e, { emit: l }) {
    const o = e, t = l, s = u(null), a = u(o.placeholder), i = u(o.value);
    le(() => {
      s.value && (s.value.textContent = o.value || "", i.value = o.value || "");
    });
    const h = (x) => {
      if (!s.value) return;
      const _ = s.value.textContent || "";
      t("update", _), ne(() => {
        if (s.value) {
          const m = document.createRange(), w = window.getSelection();
          m.selectNodeContents(s.value), m.collapse(!1), w?.removeAllRanges(), w?.addRange(m);
        }
      });
    }, d = (x) => {
      const _ = x.target;
      _.textContent === o.placeholder && (_.textContent = "");
    }, v = (x) => {
      const _ = x.target, m = _.textContent || "";
      m !== i.value && (t("change", {
        target: {
          value: m
        }
      }), i.value = m), m.trim() === "" && (_.textContent = "");
    };
    return (x, _) => (c(), r("div", {
      ref_key: "editableDiv",
      ref: s,
      class: "uwprichrditbox",
      contenteditable: "plaintext-only",
      "data-placeholder": a.value,
      onInput: h,
      onFocus: d,
      onBlur: v
    }, null, 40, ze));
  }
}), E = /* @__PURE__ */ g(Re, [["__scopeId", "data-v-062c85b9"]]), Te = ["src"], De = {
  class: "n-name",
  style: { display: "inline-block", "margin-left": "6px" }
}, He = { class: "n-text n-title" }, Xe = { class: "n-vulua" }, Ye = {
  __name: "webwin-notifications",
  props: { name: String, title: String, text: String, img: String },
  setup(e, { expose: l }) {
    const o = e;
    let t = u(!1), s = u(o.img);
    const a = () => {
      t.value = !t.value;
    };
    function i() {
      t.value && setTimeout(() => {
        t.value = !1;
      }, 250);
    }
    return l({ showNotification: a }), console.log("%c✨Welcome to Web-Win-Vue-Notifications✨", `
  color: #0078d7;
  text-shadow: 0 1px 0 #0078d7;`), (h, d) => (c(), F(I, { name: "slide-fade" }, {
      default: W(() => [
        p(t) ? (c(), r("div", {
          key: 0,
          class: "Notification",
          onClick: i
        }, [
          n("img", {
            src: p(s),
            style: { "object-fit": "contain", "margin-left": "16px", "margin-right": "0px", display: "inline-block", "vertical-align": "middle", width: "16px", height: "16px" }
          }, null, 8, Te),
          n("p", De, b(e.name), 1),
          n("h4", He, b(e.title), 1),
          n("p", Xe, b(e.text), 1)
        ])) : C("", !0)
      ]),
      _: 1
    }));
  }
}, G = /* @__PURE__ */ g(Ye, [["__scopeId", "data-v-55ec523b"]]), Fe = ["name", "id"], Le = ["for"], Oe = /* @__PURE__ */ N({
  __name: "webwin-checkbox",
  props: { name: String, checked: Array },
  setup(e) {
    const l = e, o = u(l.name), t = u(l.checked);
    return console.log("%c✨Welcome to Web-Win-Vue-Checkbox✨", `
  color: #0078d7;
  text-shadow: 0 1px 0 #0078d7;`), (s, a) => (c(), r($, null, [
      B(n("input", {
        type: "checkbox",
        class: "ww-checkbox",
        name: o.value,
        id: o.value,
        "onUpdate:modelValue": a[0] || (a[0] = (i) => t.value = i),
        onClick: a[1] || (a[1] = (i) => s.$emit("click", i))
      }, null, 8, Fe), [
        [se, t.value]
      ]),
      n("label", {
        for: o.value,
        class: "ww-checkbox-label"
      }, [
        k(s.$slots, "default", {}, void 0, !0)
      ], 8, Le)
    ], 64));
  }
}), P = /* @__PURE__ */ g(Oe, [["__scopeId", "data-v-c289ea76"]]), Ue = ["name", "id"], qe = ["for"], Ee = /* @__PURE__ */ N({
  __name: "webwin-radio",
  props: { name: String, checked: Array },
  setup(e) {
    const l = e, o = u(l.name), t = u(l.checked);
    return console.log("%c✨Welcome to Web-Win-Vue-radio✨", `
  color: #0078d7;
  text-shadow: 0 1px 0 #0078d7;`), (s, a) => (c(), r($, null, [
      B(n("input", {
        type: "radio",
        class: "ww-radio",
        name: o.value,
        id: o.value,
        "onUpdate:modelValue": a[0] || (a[0] = (i) => t.value = i),
        onClick: a[1] || (a[1] = (i) => s.$emit("click", i))
      }, null, 8, Ue), [
        [ae, t.value]
      ]),
      n("label", {
        for: o.value,
        class: "ww-radio-label"
      }, [
        k(s.$slots, "default", {}, void 0, !0)
      ], 8, qe)
    ], 64));
  }
}), j = /* @__PURE__ */ g(Ee, [["__scopeId", "data-v-78978c8c"]]), Ge = { style: { position: "relative" } }, Pe = {
  key: 0,
  class: "list-box"
}, je = { style: { overflow: "auto", height: "calc( 100% - 240px )" } }, Je = ["onClick"], Ke = { class: "label" }, Qe = {
  __name: "webwin-combobox",
  props: {
    items: { type: Array, required: !0 },
    modelValue: { type: Number, default: 0 },
    title: { type: String, default: "itembox" }
  },
  emits: ["update"],
  setup(e, { emit: l }) {
    T((m) => ({
      v61ff2edc: p(v) + "px",
      v34605ad9: p(d) + "px"
    })), console.log("%c✨Welcome to Web-Win-Vue-Item✨", `
  color: #0078d7;
  text-shadow: 0 1px 0 #0078d7;`);
    const o = e, t = l;
    let s = u(""), a = u(!1), i = u(o.modelValue), h = u(o.title), d = u(-6), v = u(6);
    function x(m) {
      a.value = !1, s.value = "", i.value = m, h.value = o.items[m].name, t("update", m), setTimeout(() => {
        d.value = m * -35 - 6, v.value = m * 35 + 6;
      }, 100);
    }
    function _() {
      a.value = !a.value, s.value = a.value ? "active" : "";
    }
    return (m, w) => (c(), r("div", Ge, [
      n("div", {
        class: f(["list-box-button", p(s)]),
        onClick: _
      }, b(p(h)), 3),
      V(I, null, {
        default: W(() => [
          p(a) ? (c(), r("ul", Pe, [
            w[0] || (w[0] = n("div", { style: { height: "6px" } }, null, -1)),
            n("div", je, [
              (c(!0), r($, null, S(e.items, (y, M) => (c(), r("li", {
                key: M,
                class: f({ active: M === p(i) }),
                onClick: (z) => x(M)
              }, [
                n("span", Ke, b(y.name), 1)
              ], 10, Je))), 128))
            ]),
            w[1] || (w[1] = n("div", { style: { height: "6px" } }, null, -1))
          ])) : C("", !0)
        ]),
        _: 1
      })
    ]));
  }
}, J = /* @__PURE__ */ g(Qe, [["__scopeId", "data-v-81f2552b"]]), Ze = { class: "progress-bar" }, Ae = {
  __name: "webwin-progressbar",
  props: {
    progress: { type: Number, default: 0 }
  },
  setup(e) {
    return console.log("%c✨Welcome to Web-Win-Vue-ProgressBar✨", `
  color: #0078d7;
  text-shadow: 0 1px 0 #0078d7;`), (l, o) => (c(), r("div", Ze, [
      n("div", {
        class: "progress",
        style: R({ width: e.progress + "%" })
      }, null, 4)
    ]));
  }
}, K = /* @__PURE__ */ g(Ae, [["__scopeId", "data-v-18bec619"]]), et = {
  key: 0,
  class: "window-background"
}, tt = {
  key: 0,
  class: "window"
}, ot = { style: { "margin-top": "24px", "margin-bottom": "24px" } }, lt = { class: "window-title" }, nt = { style: { "margin-left": "25px", "margin-right": "24px", width: "calc(100% - 48px)" } }, st = { style: { "margin-left": "24px", "margin-right": "24px", width: "calc(100% - 48px)", display: "Flex", gap: "6px", "margin-top": "48px" } }, at = {
  __name: "webwin-window",
  props: {
    items: { type: Array, required: !0, default: [{ text: "11" }, { text: "11" }] },
    title: { type: String, default: "Title" }
  },
  setup(e, { expose: l }) {
    let o = u("");
    return l({ showDialog: () => {
      o.value = !0;
    } }), (s, a) => (c(), r($, null, [
      V(I, null, {
        default: W(() => [
          p(o) ? (c(), r("div", et)) : C("", !0)
        ]),
        _: 1
      }),
      V(I, null, {
        default: W(() => [
          p(o) ? (c(), r("div", tt, [
            n("div", ot, [
              n("h2", lt, b(e.title), 1),
              n("div", nt, [
                k(s.$slots, "default", {}, void 0, !0)
              ]),
              n("div", st, [
                (c(!0), r($, null, S(e.items, (i, h) => (c(), F(D, {
                  class: "window-button",
                  key: h,
                  onClick: a[0] || (a[0] = (d) => L(o) ? o.value = !1 : o = !1)
                }, {
                  default: W(() => [
                    ie(b(i.text), 1)
                  ]),
                  _: 2
                }, 1024))), 128))
              ])
            ])
          ])) : C("", !0)
        ]),
        _: 3
      })
    ], 64));
  }
}, Q = /* @__PURE__ */ g(at, [["__scopeId", "data-v-925d7c12"]]), it = {}, ct = { class: "card" };
function rt(e, l) {
  return c(), r("div", ct, [
    k(e.$slots, "default", {}, void 0, !0)
  ]);
}
const Z = /* @__PURE__ */ g(it, [["render", rt], ["__scopeId", "data-v-f3f865b5"]]), ut = {
  key: 0,
  class: "dropdown-container"
}, dt = { class: "dropdown" }, pt = { style: { overflow: "auto", height: "calc( 100% - 240px )" } }, mt = ["onClick"], vt = { class: "label" }, ht = {
  __name: "webwin-dropdown",
  props: {
    items: { type: Array, required: !0 }
  },
  emits: ["update"],
  setup(e, { expose: l, emit: o }) {
    T((w) => ({
      v1b68a8ea: p(a) + "px",
      v5a2cd86a: p(i) + "px"
    })), console.log("%c✨Welcome to Web-Win-Vue-Item✨", `
  color: #0078d7;
  text-shadow: 0 1px 0 #0078d7;`);
    const t = e, s = o;
    let a = u(0), i = u(0), h = u(""), d = u(!1), v = u(0), x = u(t.title || "");
    function _(w) {
      d.value = !1, h.value = "", v.value = w, x.value = t.items[w].name, s("update", w);
    }
    return l({ showbox: (w, y) => {
      d.value = !d.value, h.value = d.value ? "active" : "", a.value = w, i.value = y;
    } }), (w, y) => (c(), r("div", null, [
      V(I, null, {
        default: W(() => [
          p(d) ? (c(), r("div", ut, [
            n("div", {
              class: "dropdown_backgroud",
              onClick: y[0] || (y[0] = (M) => L(d) ? d.value = !1 : d = !1)
            }),
            n("ul", dt, [
              y[1] || (y[1] = n("div", { style: { height: "6px" } }, null, -1)),
              n("div", pt, [
                (c(!0), r($, null, S(e.items, (M, z) => (c(), r("li", {
                  key: z,
                  class: f({ active: z === p(v) }),
                  onClick: (Wt) => _(z)
                }, [
                  n("span", vt, b(M.name), 1)
                ], 10, mt))), 128))
              ]),
              y[2] || (y[2] = n("div", { style: { height: "6px" } }, null, -1))
            ])
          ])) : C("", !0)
        ]),
        _: 1
      })
    ]));
  }
}, A = /* @__PURE__ */ g(ht, [["__scopeId", "data-v-75185cc0"]]), wt = { class: "topappbar" }, _t = ["onClick"], ft = { class: "topappbar-label" }, gt = {
  key: 0,
  class: "topappbar-indicator"
}, bt = {
  key: 1,
  class: "topappbar-indicator-not"
}, xt = ["onClick"], yt = { class: "topappbar-label" }, $t = {
  __name: "webwin-topappbar",
  props: { items: Array, activeIndex: Number, rightMenu: { type: Array, default: [] } },
  emits: ["update"],
  setup(e, { emit: l }) {
    const o = l, t = e;
    let s = u(t.activeIndex || 0), a = u(t.items), i = u(t.rightMenu);
    function h(v) {
      s.value = v, o("update", [v, "left"]);
    }
    function d(v) {
      s.value = v, o("update", [v, "right"]);
    }
    return (v, x) => (c(), r("ul", wt, [
      (c(!0), r($, null, S(p(a), (_, m) => (c(), r("li", {
        key: m,
        class: f([{ active: m === p(s) }, "topappbar-item"]),
        onClick: (w) => h(m)
      }, [
        n("span", ft, b(_.name), 1),
        m === p(s) ? (c(), r("span", gt)) : C("", !0),
        m != p(s) ? (c(), r("span", bt)) : C("", !0)
      ], 10, _t))), 128)),
      (c(!0), r($, null, S(p(i), (_, m) => (c(), r("li", {
        key: m,
        onClick: (w) => d(m),
        class: "topappbar-item",
        style: { float: "right" }
      }, [
        n("span", yt, b(_.name), 1)
      ], 8, xt))), 128))
    ]));
  }
}, ee = /* @__PURE__ */ g($t, [["__scopeId", "data-v-c8bdff66"]]), kt = {
  __name: "webwin-range",
  props: /* @__PURE__ */ ce({
    color: { type: String, default: "#006fd0" }
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    T((o) => ({
      e858eac8: e.color
    }));
    const l = re(e, "modelValue");
    return (o, t) => B((c(), r("input", {
      type: "range",
      "onUpdate:modelValue": t[0] || (t[0] = (s) => l.value = s),
      class: "webwin-slider",
      min: "1",
      max: "100",
      value: "50"
    }, null, 512)), [
      [ue, l.value]
    ]);
  }
}, te = /* @__PURE__ */ g(kt, [["__scopeId", "data-v-33fb48f7"]]), Ct = [te, ee, A, Z, Q, K, J, j, P, D, X, O, U, H, q, E, G], Mt = {
  install(e) {
    Ct.forEach((l) => {
      e.component("winbutton", D), e.component("winitem", X), e.component("wintile", O), e.component("wintab", U), e.component("wininputbox", H), e.component("winpasswordbox", q), e.component("winricheditbox", E), e.component("winnotifications", G), e.component("wincheckbox", P), e.component("winradio", j), e.component("wincombobox", J), e.component("winprogressbar", K), e.component("winwindow", Q), e.component("wincard", Z), e.component("windropdown", A), e.component("wintopappbar", ee), e.component("winrange", te);
    });
  }
};
export {
  Mt as default,
  D as winbutton,
  Z as wincard,
  P as wincheckbox,
  J as wincombobox,
  A as windropdown,
  H as wininputbox,
  X as winitem,
  G as winnotifications,
  q as winpasswordbox,
  K as winprogressbar,
  j as winradio,
  te as winrange,
  E as winricheditbox,
  U as wintab,
  O as wintile,
  ee as wintopappbar,
  Q as winwindow
};

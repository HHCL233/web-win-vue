import { createElementBlock as r, openBlock as s, renderSlot as k, defineComponent as z, ref as u, normalizeClass as h, unref as w, createElementVNode as l, toDisplayString as x, createVNode as V, Fragment as $, renderList as I, computed as T, normalizeStyle as W, watch as le, Transition as B, withCtx as S, createCommentVNode as C, withDirectives as N, vShow as E, onMounted as oe, nextTick as ae, createBlock as D, vModelCheckbox as ie, vModelRadio as se, useCssVars as F, createTextVNode as ce, isRef as L, KeepAlive as re, mergeModels as ue, useModel as de, vModelText as pe } from "vue";
const g = (e, a) => {
  const o = e.__vccOpts || e;
  for (const [t, n] of a)
    o[t] = n;
  return o;
}, we = {}, ve = { class: "webwin-button" };
function me(e, a) {
  return s(), r("button", ve, [
    k(e.$slots, "default", {}, void 0, !0)
  ]);
}
const U = /* @__PURE__ */ g(we, [["render", me], ["__scopeId", "data-v-a059307c"]]), be = ["value", "placeholder"], _e = /* @__PURE__ */ z({
  __name: "webwin-inputbox",
  props: { value: String, placeholder: String },
  setup(e) {
    const o = u(e.placeholder);
    return (t, n) => (s(), r("input", {
      type: "text",
      name: "fname",
      class: "webwin-uwpinput",
      value: e.value,
      placeholder: o.value,
      onChange: n[0] || (n[0] = (i) => t.$emit("@change", i))
    }, null, 40, be));
  }
}), q = /* @__PURE__ */ g(_e, [["__scopeId", "data-v-7641a566"]]), fe = { class: "webwin-sidebar-text" }, he = { style: { width: "350px", margin: "auto" } }, ge = { style: { overflow: "auto", height: "calc( 100% - 240px )", "overflow-x": "hidden" } }, xe = ["onClick"], ye = {
  class: "webwin-icon",
  viewBox: "0 0 1024 1024",
  fill: "currentColor",
  "aria-hidden": "true",
  height: "16"
}, $e = ["d"], ke = {
  __name: "webwin-sidebar",
  props: {
    items: { type: Array, required: !0 },
    modelValue: { type: Number, default: 0 },
    title: { type: String, default: "Menu" },
    bartitle: { type: String, default: "Window" }
  },
  emits: ["update"],
  setup(e, { emit: a }) {
    const o = a;
    let t = u("");
    function n() {
      t.value === "" ? (t.value = "folded", o("update", !1)) : (t.value = "", o("update", !0));
    }
    return (i, c) => (s(), r("ul", {
      class: h(["webwin-side-bar", w(t)])
    }, [
      l("div", {
        class: h(["webwin-sidebar", w(t)])
      }, [
        l("p", fe, x(e.bartitle), 1)
      ], 2),
      l("div", null, [
        l("li", {
          style: { "margin-top": "24px", width: "24px" },
          onClick: n
        }, [
          c[0] || (c[0] = l("svg", {
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
            class: h(["webwin-label", w(t)])
          }, null, 2)
        ]),
        l("li", {
          onClick: n,
          class: h(["webwin-search-fold", w(t)])
        }, [
          c[1] || (c[1] = l("svg", {
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
            class: h(["webwin-label", w(t)])
          }, null, 2)
        ], 2),
        l("div", he, [
          V(q, {
            placeholder: "查找",
            class: h(["webwin-inputbox", w(t)]),
            style: { "margin-top": "6px", width: "320px" }
          }, null, 8, ["class"])
        ]),
        l("h3", {
          style: { "margin-top": "26px", "margin-bottom": "26px", "margin-left": "18px" },
          class: h(["webwin-title", w(t)])
        }, x(e.title), 3)
      ]),
      l("div", ge, [
        (s(!0), r($, null, I(e.items, (b, p) => (s(), r("li", {
          key: p,
          class: h({ active: p === e.modelValue }),
          onClick: (m) => i.$emit("update:modelValue", p)
        }, [
          c[2] || (c[2] = l("span", { class: "webwin-indicator" }, null, -1)),
          (s(), r("svg", ye, [
            l("path", {
              d: b.icon
            }, null, 8, $e)
          ])),
          l("span", {
            class: h(["webwin-label", w(t)])
          }, x(b.name), 3)
        ], 10, xe))), 128))
      ])
    ], 2));
  }
}, H = /* @__PURE__ */ g(ke, [["__scopeId", "data-v-d1920b87"]]), Ce = { class: "webwin-tile-content" }, Se = { class: "webwin-tile-icon" }, Ve = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  width: "24",
  height: "24"
}, Me = ["d"], Ie = { class: "webwin-tile-title" }, Be = /* @__PURE__ */ z({
  __name: "webwin-tile",
  props: {
    size: { default: "medium" },
    color: { default: "#0078d7" },
    title: { default: "App" },
    icon: { default: "" },
    glowColor: { default: "rgba(255,255,255,0.5)" },
    glowRadius: { default: 60 }
  },
  setup(e) {
    console.log("%c✨Welcome to Web-Win-Vue-Tile✨", `
  color: #0078d7;
  text-shadow: 0 1px 0 #0078d7;`);
    const a = e, o = u(!1), t = u(0), n = u(0), i = u(0), c = T(() => ({
      "--tile-color": a.color,
      "--glow-color": a.glowColor,
      "--glow-radius": `${a.glowRadius}px`
    })), b = T(() => ({
      "--x": `${t.value}px`,
      "--y": `${n.value}px`,
      opacity: i.value
    })), p = T(() => ({
      "--x": `${t.value}px`,
      "--y": `${n.value}px`,
      opacity: o.value ? 1 : 0
    })), m = (v) => {
      const d = v.currentTarget.getBoundingClientRect();
      t.value = v.clientX - d.left, n.value = v.clientY - d.top;
      const _ = Math.min(
        t.value,
        d.width - t.value,
        n.value,
        d.height - n.value
      ), y = a.glowRadius;
      i.value = Math.max(0, (y - _) / y);
    }, f = () => {
      o.value = !1, i.value = 0;
    };
    return (v, d) => (s(), r("div", {
      class: h(["webwin-tile", e.size]),
      style: W(c.value),
      onMousemove: m,
      onMouseenter: d[0] || (d[0] = (_) => o.value = !0),
      onMouseleave: f
    }, [
      l("div", Ce, [
        l("div", Se, [
          k(v.$slots, "icon", {}, () => [
            (s(), r("svg", Ve, [
              l("path", {
                fill: "white",
                d: e.icon
              }, null, 8, Me)
            ]))
          ], !0)
        ]),
        l("div", Ie, x(e.title), 1)
      ]),
      l("div", {
        class: "webwin-glow-border",
        style: W(b.value)
      }, null, 4),
      l("div", {
        class: "webwin-pointer-glow",
        style: W(p.value)
      }, null, 4)
    ], 38));
  }
}), O = /* @__PURE__ */ g(Be, [["__scopeId", "data-v-51adc759"]]), ze = { class: "webwin-container" }, Ne = ["src"], Re = ["src"], X = {
  __name: "webwin-tab",
  props: { menu: Array, url: Array, titlebar: Boolean, titlebartext: String },
  setup(e) {
    const a = e, o = u(0), t = u(0), n = u(a.url[0]);
    let i = u(""), c = u("");
    a.titlebar ? i.value = a.titlebartext : i.value = "", le(o, (p) => {
      console.log("activeIndex changed:", p), console.log("new url:", a.url[p]), n.value = a.url[p], t.value = t.value === 0 ? 1 : 0, console.log("docState:", t.value);
    });
    function b(p) {
      p ? c.value = "" : c.value = "folded";
    }
    return (p, m) => (s(), r("div", ze, [
      V(H, {
        modelValue: o.value,
        "onUpdate:modelValue": m[0] || (m[0] = (f) => o.value = f),
        items: e.menu,
        class: "webwin-item-1",
        bartitle: w(i),
        onUpdate: b
      }, null, 8, ["modelValue", "items", "bartitle"]),
      V(B, {
        name: "fade",
        mode: "out-in"
      }, {
        default: S(() => [
          t.value === 0 ? (s(), r("div", {
            key: "state0",
            class: h(["webwin-iframe-container", w(c)])
          }, [
            k(p.$slots, "default", {}, () => [
              N(l("iframe", {
                src: n.value,
                style: { "margin-top": "70px" },
                class: "webwin-iframe"
              }, null, 8, Ne), [
                [E, t.value === 0]
              ])
            ])
          ], 2)) : t.value === 1 ? (s(), r("div", {
            key: "state1",
            class: h(["webwin-iframe-container", w(c)])
          }, [
            k(p.$slots, "default", {}, () => [
              N(l("iframe", {
                src: n.value,
                style: { "margin-top": "70px" },
                class: "webwin-iframe"
              }, null, 8, Re), [
                [E, t.value === 1]
              ])
            ])
          ], 2)) : C("", !0)
        ]),
        _: 3
      })
    ]));
  }
}, We = ["value", "placeholder"], Te = /* @__PURE__ */ z({
  __name: "webwin-passwordbox",
  props: { value: String, placeholder: String },
  setup(e) {
    const a = e, o = u(a.value), t = u(a.placeholder);
    return (n, i) => (s(), r("input", {
      type: "password",
      name: "fname",
      class: "webwin-uwppassword",
      value: o.value,
      placeholder: t.value,
      onChange: i[0] || (i[0] = (c) => n.$emit("@change", c))
    }, null, 40, We));
  }
}), Y = /* @__PURE__ */ g(Te, [["__scopeId", "data-v-dd8b91fe"]]), De = ["data-placeholder"], Fe = /* @__PURE__ */ z({
  __name: "webwin-richeditbox",
  props: {
    value: { type: String, default: "" },
    placeholder: { type: String, default: "" }
  },
  emits: ["update", "change"],
  setup(e, { emit: a }) {
    const o = e, t = a, n = u(null), i = u(o.placeholder), c = u(o.value);
    oe(() => {
      n.value && (n.value.textContent = o.value || "", c.value = o.value || "");
    });
    const b = (f) => {
      if (!n.value) return;
      const v = n.value.textContent || "";
      t("update", v), ae(() => {
        if (n.value) {
          const d = document.createRange(), _ = window.getSelection();
          d.selectNodeContents(n.value), d.collapse(!1), _?.removeAllRanges(), _?.addRange(d);
        }
      });
    }, p = (f) => {
      const v = f.target;
      v.textContent === o.placeholder && (v.textContent = "");
    }, m = (f) => {
      const v = f.target, d = v.textContent || "";
      d !== c.value && (t("change", {
        target: {
          value: d
        }
      }), c.value = d), d.trim() === "" && (v.textContent = "");
    };
    return (f, v) => (s(), r("div", {
      ref_key: "editableDiv",
      ref: n,
      class: "webwin-uwprichrditbox",
      contenteditable: "plaintext-only",
      "data-placeholder": i.value,
      onInput: b,
      onFocus: p,
      onBlur: m
    }, null, 40, De));
  }
}), j = /* @__PURE__ */ g(Fe, [["__scopeId", "data-v-f7a96b3a"]]), Ue = ["src"], qe = {
  class: "webwin-n-name",
  style: { display: "inline-block", "margin-left": "6px" }
}, He = { class: "webwin-n-text webwin-n-title" }, Ee = { class: "webwin-n-vulua" }, Le = {
  __name: "webwin-notifications",
  props: { name: String, title: String, text: String, img: String },
  setup(e, { expose: a }) {
    const o = e;
    let t = u(!1), n = u(o.img);
    const i = () => {
      t.value = !t.value;
    };
    function c() {
      t.value && setTimeout(() => {
        t.value = !1;
      }, 250);
    }
    return a({ showNotification: i }), console.log("%c✨Welcome to Web-Win-Vue-Notifications✨", `
  color: #0078d7;
  text-shadow: 0 1px 0 #0078d7;`), (b, p) => (s(), D(B, { name: "slide-fade" }, {
      default: S(() => [
        w(t) ? (s(), r("div", {
          key: 0,
          class: "webwin-notification",
          onClick: c
        }, [
          l("img", {
            src: w(n),
            style: { "object-fit": "contain", "margin-left": "16px", "margin-right": "0px", display: "inline-block", "vertical-align": "middle", width: "16px", height: "16px" }
          }, null, 8, Ue),
          l("p", qe, x(e.name), 1),
          l("h4", He, x(e.title), 1),
          l("p", Ee, x(e.text), 1)
        ])) : C("", !0)
      ]),
      _: 1
    }));
  }
}, G = /* @__PURE__ */ g(Le, [["__scopeId", "data-v-445b06e9"]]), Oe = ["name", "id"], Xe = ["for"], Ye = /* @__PURE__ */ z({
  __name: "webwin-checkbox",
  props: { name: String, checked: Array },
  setup(e) {
    const a = e, o = u(a.name), t = u(a.checked);
    return (n, i) => (s(), r($, null, [
      N(l("input", {
        type: "checkbox",
        class: "webwin-checkbox",
        name: o.value,
        id: o.value,
        "onUpdate:modelValue": i[0] || (i[0] = (c) => t.value = c),
        onClick: i[1] || (i[1] = (c) => n.$emit("click", c))
      }, null, 8, Oe), [
        [ie, t.value]
      ]),
      l("label", {
        for: o.value,
        class: "webwin-checkbox-label"
      }, [
        k(n.$slots, "default", {}, void 0, !0)
      ], 8, Xe)
    ], 64));
  }
}), K = /* @__PURE__ */ g(Ye, [["__scopeId", "data-v-3b234b99"]]), je = ["name", "id"], Ge = ["for"], Ke = /* @__PURE__ */ z({
  __name: "webwin-radio",
  props: { name: String, checked: Array },
  setup(e) {
    const a = e, o = u(a.name), t = u(a.checked);
    return (n, i) => (s(), r($, null, [
      N(l("input", {
        type: "radio",
        class: "webwin-radio",
        name: o.value,
        id: o.value,
        "onUpdate:modelValue": i[0] || (i[0] = (c) => t.value = c),
        onClick: i[1] || (i[1] = (c) => n.$emit("click", c))
      }, null, 8, je), [
        [se, t.value]
      ]),
      l("label", {
        for: o.value,
        class: "webwin-radio-label"
      }, [
        k(n.$slots, "default", {}, void 0, !0)
      ], 8, Ge)
    ], 64));
  }
}), J = /* @__PURE__ */ g(Ke, [["__scopeId", "data-v-04fe95c4"]]), Je = { style: { position: "relative" } }, Pe = {
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
  setup(e, { emit: a }) {
    F((d) => ({
      v1be24303: w(m) + "px",
      v5172b45c: w(p) + "px"
    }));
    const o = e, t = a;
    let n = u(""), i = u(!1), c = u(o.modelValue), b = u(o.title), p = u(-6), m = u(6);
    function f(d) {
      i.value = !1, n.value = "", c.value = d, b.value = o.items[d].name, t("update", d), setTimeout(() => {
        p.value = d * -35 - 6, m.value = d * 35 + 6;
      }, 100);
    }
    function v() {
      i.value = !i.value, n.value = i.value ? "active" : "";
    }
    return (d, _) => (s(), r("div", Je, [
      l("div", {
        class: h(["webwin-list-box-button", w(n)]),
        onClick: v
      }, x(w(b)), 3),
      V(B, null, {
        default: S(() => [
          w(i) ? (s(), r("ul", Pe, [
            _[0] || (_[0] = l("div", { style: { height: "6px" } }, null, -1)),
            l("div", Qe, [
              (s(!0), r($, null, I(e.items, (y, M) => (s(), r("li", {
                key: M,
                class: h({ active: M === w(c) }),
                onClick: (R) => f(M)
              }, [
                l("span", Ae, x(y.name), 1)
              ], 10, Ze))), 128))
            ]),
            _[1] || (_[1] = l("div", { style: { height: "6px" } }, null, -1))
          ])) : C("", !0)
        ]),
        _: 1
      })
    ]));
  }
}, P = /* @__PURE__ */ g(et, [["__scopeId", "data-v-ac4b4002"]]), tt = { class: "webwin-progress-bar" }, nt = {
  __name: "webwin-progressbar",
  props: {
    progress: { type: Number, default: 0 }
  },
  setup(e) {
    return (a, o) => (s(), r("div", tt, [
      l("div", {
        class: "webwin-progress",
        style: W({ width: e.progress + "%" })
      }, null, 4)
    ]));
  }
}, Q = /* @__PURE__ */ g(nt, [["__scopeId", "data-v-9ef8a457"]]), lt = {
  key: 0,
  class: "webwin-window-background"
}, ot = {
  key: 0,
  class: "webwin-window"
}, at = { style: { "margin-top": "24px", "margin-bottom": "24px" } }, it = { class: "webwin-window-title" }, st = { style: { "margin-left": "25px", "margin-right": "24px", width: "calc(100% - 48px)" } }, ct = { style: { "margin-left": "24px", "margin-right": "24px", width: "calc(100% - 48px)", display: "Flex", gap: "6px", "margin-top": "48px" } }, rt = {
  __name: "webwin-contentdialog",
  props: {
    items: { type: Array, required: !0, default: [{ text: "11" }, { text: "11" }] },
    title: { type: String, default: "Title" }
  },
  emits: ["clickBotton"],
  setup(e, { expose: a, emit: o }) {
    let t = u("");
    const n = o, i = () => {
      t.value = !0;
    };
    function c(b) {
      t.value = !1, n("clickBotton", b);
    }
    return a({ showDialog: i }), (b, p) => (s(), r($, null, [
      V(B, null, {
        default: S(() => [
          w(t) ? (s(), r("div", lt)) : C("", !0)
        ]),
        _: 1
      }),
      V(B, null, {
        default: S(() => [
          w(t) ? (s(), r("div", ot, [
            l("div", at, [
              l("h2", it, x(e.title), 1),
              l("div", st, [
                k(b.$slots, "default", {}, void 0, !0)
              ]),
              l("div", ct, [
                (s(!0), r($, null, I(e.items, (m, f) => (s(), D(U, {
                  class: "webwin-window-button",
                  key: f,
                  onClick: (v) => c(f)
                }, {
                  default: S(() => [
                    ce(x(m.text), 1)
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
}, Z = /* @__PURE__ */ g(rt, [["__scopeId", "data-v-e4bb637e"]]), ut = {}, dt = { class: "webwin-card" };
function pt(e, a) {
  return s(), r("div", dt, [
    k(e.$slots, "default", {}, void 0, !0)
  ]);
}
const A = /* @__PURE__ */ g(ut, [["render", pt], ["__scopeId", "data-v-26a8c2e0"]]), wt = {
  key: 0,
  class: "webwin-dropdown-container"
}, vt = { class: "webwin-dropdown" }, mt = { style: { overflow: "auto", height: "calc( 100% - 240px )" } }, bt = ["onClick"], _t = { class: "webwin-label" }, ft = {
  __name: "webwin-dropdown",
  props: {
    items: { type: Array, required: !0 }
  },
  emits: ["update"],
  setup(e, { expose: a, emit: o }) {
    F((_) => ({
      v08042082: w(i) + "px",
      v6fe54d61: w(c) + "px"
    }));
    const t = e, n = o;
    let i = u(0), c = u(0), b = u(""), p = u(!1), m = u(0), f = u(t.title || "");
    function v(_) {
      p.value = !1, b.value = "", m.value = _, f.value = t.items[_].name, n("update", _);
    }
    return a({ showbox: (_, y) => {
      p.value = !p.value, b.value = p.value ? "active" : "", i.value = _, c.value = y;
    } }), (_, y) => (s(), r("div", null, [
      V(B, null, {
        default: S(() => [
          w(p) ? (s(), r("div", wt, [
            l("div", {
              class: "webwin-dropdown_backgroud",
              onClick: y[0] || (y[0] = (M) => L(p) ? p.value = !1 : p = !1)
            }),
            l("ul", vt, [
              y[1] || (y[1] = l("div", { style: { height: "6px" } }, null, -1)),
              l("div", mt, [
                (s(!0), r($, null, I(e.items, (M, R) => (s(), r("li", {
                  key: R,
                  class: h({ active: R === w(m) }),
                  onClick: (It) => v(R)
                }, [
                  l("span", _t, x(M.name), 1)
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
}, ee = /* @__PURE__ */ g(ft, [["__scopeId", "data-v-2d220786"]]), ht = { class: "webwin-topappbar" }, gt = ["is", "onClick"], xt = { class: "webwin-topappbar-label" }, yt = {
  key: 0,
  class: "webwin-topappbar-indicator"
}, $t = {
  key: 1,
  class: "webwin-topappbar-indicator-not"
}, kt = ["onClick"], Ct = { class: "webwin-topappbar-label" }, St = {
  __name: "webwin-topappbar",
  props: { items: Array, activeIndex: Number, rightMenu: { type: Array, default: [] } },
  emits: ["update"],
  setup(e, { emit: a }) {
    const o = a, t = e;
    let n = u(t.activeIndex || 0), i = u(t.items), c = u(t.rightMenu);
    function b(m) {
      n.value = m, o("update", [m, "left"]);
    }
    function p(m) {
      o("update", [m, "right"]);
    }
    return (m, f) => (s(), r("ul", ht, [
      (s(), D(re, null, [
        (s(!0), r($, null, I(w(i), (v, d) => (s(), r("li", {
          is: m.activeComponent,
          key: d,
          class: h([{ active: d === w(n) }, "webwin-topappbar-item"]),
          onClick: (_) => b(d)
        }, [
          l("span", xt, x(v.name), 1),
          d === w(n) ? (s(), r("span", yt)) : C("", !0),
          d != w(n) ? (s(), r("span", $t)) : C("", !0)
        ], 10, gt))), 128))
      ], 1024)),
      (s(!0), r($, null, I(w(c), (v, d) => (s(), r("li", {
        key: d,
        onClick: (_) => p(d),
        class: "webwin-topappbar-item",
        style: { float: "right" }
      }, [
        l("span", Ct, x(v.name), 1)
      ], 8, kt))), 128))
    ]));
  }
}, te = /* @__PURE__ */ g(St, [["__scopeId", "data-v-ef60c98a"]]), Vt = {
  __name: "webwin-range",
  props: /* @__PURE__ */ ue({
    color: { type: String, default: "#006fd0" }
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    F((o) => ({
      v23dfb612: e.color
    }));
    let a = de(e, "modelValue");
    return (o, t) => N((s(), r("input", {
      type: "range",
      "onUpdate:modelValue": t[0] || (t[0] = (n) => L(a) ? a.value = n : a = n),
      class: "webwin-slider",
      min: "1",
      max: "100"
    }, null, 512)), [
      [pe, w(a)]
    ]);
  }
}, ne = /* @__PURE__ */ g(Vt, [["__scopeId", "data-v-480ca2b0"]]), Mt = [ne, te, ee, A, Z, Q, P, J, K, U, H, O, X, q, Y, j, G], zt = {
  install(e) {
    Mt.forEach((a) => {
      e.component("winbutton", U), e.component("winsidebar", H), e.component("wintile", O), e.component("wintab", X), e.component("wininputbox", q), e.component("winpasswordbox", Y), e.component("winricheditbox", j), e.component("winnotifications", G), e.component("wincheckbox", K), e.component("winradio", J), e.component("wincombobox", P), e.component("winprogressbar", Q), e.component("wincontentdialog", Z), e.component("wincard", A), e.component("windropdown", ee), e.component("wintopappbar", te), e.component("winrange", ne);
    });
  }
};
export {
  zt as default,
  U as winbutton,
  A as wincard,
  K as wincheckbox,
  P as wincombobox,
  Z as wincontentdialog,
  ee as windropdown,
  q as wininputbox,
  G as winnotifications,
  Y as winpasswordbox,
  Q as winprogressbar,
  J as winradio,
  ne as winrange,
  j as winricheditbox,
  H as winsidebar,
  X as wintab,
  O as wintile,
  te as wintopappbar
};

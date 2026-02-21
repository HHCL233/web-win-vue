import { createElementBlock as d, openBlock as a, renderSlot as S, defineComponent as k, ref as u, normalizeClass as h, unref as p, createElementVNode as o, toDisplayString as g, createVNode as V, Fragment as $, renderList as C, computed as W, normalizeStyle as R, watch as se, Transition as z, withCtx as I, createCommentVNode as M, withDirectives as N, vShow as L, onMounted as ae, nextTick as ce, createBlock as D, vModelCheckbox as re, vModelRadio as ue, useCssVars as O, createTextVNode as de, isRef as U, KeepAlive as we, mergeModels as pe, useModel as ve, vModelText as me } from "vue";
const x = (e, s) => {
  const i = e.__vccOpts || e;
  for (const [t, n] of s)
    i[t] = n;
  return i;
}, be = {}, _e = { class: "webwin-button" };
function fe(e, s) {
  return a(), d("button", _e, [
    S(e.$slots, "default", {}, void 0, !0)
  ]);
}
const q = /* @__PURE__ */ x(be, [["render", fe], ["__scopeId", "data-v-a059307c"]]), he = ["value", "placeholder"], ge = /* @__PURE__ */ k({
  __name: "webwin-inputbox",
  props: { value: String, placeholder: String },
  setup(e) {
    const i = u(e.placeholder);
    return (t, n) => (a(), d("input", {
      type: "text",
      name: "fname",
      class: "webwin-uwpinput",
      value: e.value,
      placeholder: i.value,
      onChange: n[0] || (n[0] = (c) => t.$emit("@change", c))
    }, null, 40, he));
  }
}), H = /* @__PURE__ */ x(ge, [["__scopeId", "data-v-7641a566"]]), xe = { class: "webwin-sidebar-text" }, ye = { style: { width: "350px", margin: "auto" } }, $e = { style: { overflow: "auto", height: "calc( 100% - 240px )", "overflow-x": "hidden" } }, ke = ["onClick"], Ce = {
  class: "webwin-icon",
  viewBox: "0 0 1024 1024",
  fill: "currentColor",
  "aria-hidden": "true",
  height: "16"
}, Me = ["d"], Ie = {
  __name: "webwin-sidebar",
  props: {
    items: { type: Array, required: !0 },
    modelValue: { type: Number, default: 0 },
    title: { type: String, default: "Menu" },
    bartitle: { type: String, default: "Window" }
  },
  emits: ["update"],
  setup(e, { emit: s }) {
    const i = s;
    let t = u("");
    function n() {
      t.value === "" ? (t.value = "folded", i("update", !1)) : (t.value = "", i("update", !0));
    }
    return (c, l) => (a(), d("ul", {
      class: h(["webwin-side-bar", p(t)])
    }, [
      o("div", {
        class: h(["webwin-sidebar", p(t)])
      }, [
        o("p", xe, g(e.bartitle), 1)
      ], 2),
      o("div", null, [
        o("li", {
          style: { "margin-top": "24px", width: "24px" },
          onClick: n
        }, [
          l[0] || (l[0] = o("svg", {
            class: "webwin-icon",
            viewBox: "0 0 1024 1024",
            fill: "currentColor",
            "aria-hidden": "true"
          }, [
            o("path", {
              xmlns: "http://www.w3.org/2000/svg",
              style: { stroke: "none", "fill-rule": "nonzero", fill: "rgb(0%,0%,0%)", "fill-opacity": "1" },
              d: "M63.7 191.4h895.2v64H63.7zM63.7 480.2h895.2v64H63.7zM63.7 767.2h895.2v64H63.7z"
            })
          ], -1)),
          o("span", {
            class: h(["webwin-label", p(t)])
          }, null, 2)
        ]),
        o("li", {
          onClick: n,
          class: h(["webwin-search-fold", p(t)])
        }, [
          l[1] || (l[1] = o("svg", {
            class: "webwin-icon",
            viewBox: "0 0 1024 1024",
            fill: "currentColor",
            "aria-hidden": "true"
          }, [
            o("path", {
              xmlns: "http://www.w3.org/2000/svg",
              style: { stroke: "none", "fill-rule": "nonzero", fill: "rgb(0%,0%,0%)", "fill-opacity": "1" },
              d: "M916.374282 878.7028 661.417543 604.016717c1.402953-1.616824 2.784416-3.254114 4.155646-4.90266 0.367367-0.459464 0.747014-0.909719 1.115404-1.37123 1.308809-1.585101 2.600221-3.181459 3.879354-4.798283 0.337691-0.429789 0.675382-0.86981 1.011027-1.299599 1.209548-1.555425 2.416026-3.122107 3.603061-4.696975 0.347924-0.471744 0.695848-0.931209 1.043772-1.402953 1.176802-1.585101 2.354628-3.181459 3.499707-4.798283 0.318248-0.449231 0.633427-0.889253 0.951675-1.331321 1.197268-1.686409 2.37407-3.39533 3.541663-5.104251 0.285502-0.419556 0.561795-0.829901 0.849344-1.249457 1.257643-1.87265 2.495844-3.755534 3.723811-5.65786 0.23536-0.360204 0.461511-0.727571 0.695848-1.085728 1.127683-1.77032 2.232854-3.551896 3.325745-5.342682 0.268106-0.440022 0.533143-0.87902 0.799202-1.319042 1.052982-1.750877 2.096754-3.50994 3.120061-5.28026 0.255827-0.440022 0.511653-0.87902 0.76748-1.331321 1.035586-1.801019 2.046612-3.611248 3.040243-5.432733 0.226151-0.409322 0.449231-0.819668 0.675382-1.228991 1.052982-1.944282 2.076288-3.90903 3.099594-5.873778l0.533143-1.052982c1.043772-2.046612 2.067079-4.103458 3.069919-6.181793 0.184195-0.358157 0.347924-0.715291 0.521886-1.083681 0.941442-1.954515 1.851161-3.90903 2.75167-5.884011 0.184195-0.400113 0.358157-0.809435 0.541329-1.207501 0.881067-1.954515 1.740644-3.931542 2.579755-5.9055 0.173962-0.398066 0.347924-0.797156 0.511653-1.197268 0.859577-2.036379 1.698688-4.082992 2.506077-6.139837 0.134053-0.316202 0.26606-0.64366 0.38988-0.971118 0.87902-2.240017 1.738597-4.493338 2.568499-6.753821l0.255827-0.707105c0.807389-2.220574 1.595334-4.451382 2.362814-6.691399 0.113587-0.327458 0.215918-0.655939 0.318248-0.973164 0.727571-2.148943 1.432629-4.296863 2.109034-6.465249l0.327458-1.055029c0.663102-2.169409 1.308809-4.349051 1.942235-6.538927l0.277316-0.971118c0.64366-2.272763 1.257643-4.563946 1.851161-6.856152 0.062422-0.225127 0.12382-0.450255 0.186242-0.674359 0.623193-2.455935 1.226944-4.923126 1.801019-7.398504l0.121773-0.542352c0.543376-2.373047 1.065262-4.748141 1.555425-7.141654l0.173962-0.880043c0.471744-2.302439 0.920976-4.626367 1.341554-6.948249l0.163729-0.920976c0.419556-2.353604 0.809435-4.716418 1.167592-7.081279 0.039909-0.26606 0.092098-0.532119 0.121773-0.797156 0.38988-2.518357 0.747014-5.045923 1.065262-7.582699l0.029676-0.23536c0.337691-2.620687 0.633427-5.238304 0.901533-7.868201l0.060375-0.563842c0.245593-2.486634 0.471744-4.982478 0.665149-7.480368l0.052189-0.788969c0.184195-2.445702 0.337691-4.900613 0.469698-7.356548l0.041956-0.849344c0.121773-2.5071 0.224104-5.024433 0.285502-7.541767l0.020466-0.582261c0.062422-2.711761 0.104377-5.424546 0.104377-8.146541 0-178.843224-145.034211-323.876412-323.876412-323.876412-178.844248 0-323.886645 145.033187-323.886645 323.876412 0 178.844248 145.043421 323.876412 323.886645 323.876412 2.701528 0 5.392824-0.029676 8.073886-0.102331l0.490164-0.010233c2.620687-0.062422 5.219885-0.163729 7.819083-0.295735l0.603751-0.031722c2.620687-0.132006 5.239328-0.295735 7.838525-0.50142l0.245593-0.010233c2.578732-0.203638 5.136997-0.429789 7.68503-0.685615l0.583285-0.060375c2.51631-0.255827 5.034666-0.543376 7.53051-0.861624l0.76748-0.092098c2.476401-0.325411 4.952802-0.663102 7.408737-1.043772l0.715291-0.11154c2.364861-0.358157 4.718465-0.747014 7.071046-1.167592l0.777713-0.144286c2.37407-0.417509 4.728698-0.87902 7.083326-1.348718l1.115404-0.23536c2.292206-0.471744 4.583388-0.960885 6.855128-1.484817 0.38988-0.092098 0.777713-0.184195 1.157359-0.276293 2.13871-0.491187 4.256954-1.013073 6.374174-1.555425 0.451278-0.11154 0.900509-0.226151 1.350764-0.347924 2.109034-0.541329 4.195555-1.115404 6.293333-1.698688 0.50142-0.144286 1.00284-0.285502 1.505283-0.429789 2.096754-0.603751 4.185322-1.216711 6.261611-1.862417 0.543376-0.163729 1.075495-0.337691 1.616824-0.50142 1.882883-0.593518 3.755534-1.207501 5.628184-1.830695 0.685615-0.226151 1.360997-0.461511 2.046612-0.685615 1.790786-0.62524 3.581572-1.249457 5.362124-1.895163 0.633427-0.234337 1.2689-0.459464 1.902326-0.695848 1.882883-0.695848 3.755534-1.411139 5.617951-2.13871 0.705058-0.276293 1.402953-0.551562 2.109034-0.827855 1.616824-0.645706 3.233648-1.310855 4.840238-1.986237 0.899486-0.367367 1.790786-0.757247 2.680039-1.134847 1.505283-0.645706 2.998287-1.289366 4.483104-1.954515 0.941442-0.419556 1.87265-0.839111 2.814092-1.2689 1.503237-0.695848 3.007497-1.390673 4.500501-2.109034 0.819668-0.387833 1.629103-0.777713 2.436492-1.174756 1.390673-0.675382 2.774183-1.360997 4.145413-2.058892 1.063215-0.541329 2.128477-1.083681 3.191692-1.63729 1.2689-0.653893 2.52859-1.319042 3.78521-1.994424 1.127683-0.603751 2.242064-1.216711 3.367701-1.832741 1.226944-0.685615 2.455935-1.37123 3.683902-2.067079 1.023306-0.574075 2.046612-1.167592 3.059686-1.759063 1.043772-0.61603 2.098801-1.228991 3.14155-1.853208 1.176802-0.717338 2.364861-1.423419 3.529383-2.148943 1.085728-0.665149 2.160199-1.341554 3.233648-2.016937 1.216711-0.76748 2.426259-1.545192 3.63376-2.332115 1.052982-0.685615 2.086521-1.360997 3.13234-2.058892l0.020466-0.010233 255.611655 275.361465c18.399045 19.822464 46.170552 23.64042 62.59564 9.56996l6.723122-5.752004C937.106466 927.146115 934.764118 898.512984 916.374282 878.7028zM416.63349 630.643144c-131.760906 0-238.604306-106.853633-238.604306-238.603283 0-131.750673 106.8434-238.604306 238.604306-238.604306 131.74965 0 238.594073 106.853633 238.594073 238.604306C655.227564 523.789511 548.38314 630.643144 416.63349 630.643144z"
            })
          ], -1)),
          o("span", {
            class: h(["webwin-label", p(t)])
          }, null, 2)
        ], 2),
        o("div", ye, [
          V(H, {
            placeholder: "查找",
            class: h(["webwin-inputbox", p(t)]),
            style: { "margin-top": "6px", width: "320px" }
          }, null, 8, ["class"])
        ]),
        o("h3", {
          style: { "margin-top": "26px", "margin-bottom": "26px", "margin-left": "18px" },
          class: h(["webwin-title", p(t)])
        }, g(e.title), 3)
      ]),
      o("div", $e, [
        (a(!0), d($, null, C(e.items, (_, r) => (a(), d("li", {
          key: r,
          class: h({ active: r === e.modelValue }),
          onClick: (m) => c.$emit("update:modelValue", r)
        }, [
          l[2] || (l[2] = o("span", { class: "webwin-indicator" }, null, -1)),
          (a(), d("svg", Ce, [
            o("path", {
              d: _.icon
            }, null, 8, Me)
          ])),
          o("span", {
            class: h(["webwin-label", p(t)])
          }, g(_.name), 3)
        ], 10, ke))), 128))
      ])
    ], 2));
  }
}, F = /* @__PURE__ */ x(Ie, [["__scopeId", "data-v-d1920b87"]]), Se = { class: "webwin-tile-content" }, Ve = { class: "webwin-tile-icon" }, Be = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  width: "24",
  height: "24"
}, ze = ["d"], Ne = { class: "webwin-tile-title" }, Te = /* @__PURE__ */ k({
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
    const s = e, i = u(!1), t = u(0), n = u(0), c = u(0), l = W(() => ({
      "--tile-color": s.color,
      "--glow-color": s.glowColor,
      "--glow-radius": `${s.glowRadius}px`
    })), _ = W(() => ({
      "--x": `${t.value}px`,
      "--y": `${n.value}px`,
      opacity: c.value
    })), r = W(() => ({
      "--x": `${t.value}px`,
      "--y": `${n.value}px`,
      opacity: i.value ? 1 : 0
    })), m = (v) => {
      const w = v.currentTarget.getBoundingClientRect();
      t.value = v.clientX - w.left, n.value = v.clientY - w.top;
      const f = Math.min(
        t.value,
        w.width - t.value,
        n.value,
        w.height - n.value
      ), y = s.glowRadius;
      c.value = Math.max(0, (y - f) / y);
    }, b = () => {
      i.value = !1, c.value = 0;
    };
    return (v, w) => (a(), d("div", {
      class: h(["webwin-tile", e.size]),
      style: R(l.value),
      onMousemove: m,
      onMouseenter: w[0] || (w[0] = (f) => i.value = !0),
      onMouseleave: b
    }, [
      o("div", Se, [
        o("div", Ve, [
          S(v.$slots, "icon", {}, () => [
            (a(), d("svg", Be, [
              o("path", {
                fill: "white",
                d: e.icon
              }, null, 8, ze)
            ]))
          ], !0)
        ]),
        o("div", Ne, g(e.title), 1)
      ]),
      o("div", {
        class: "webwin-glow-border",
        style: R(_.value)
      }, null, 4),
      o("div", {
        class: "webwin-pointer-glow",
        style: R(r.value)
      }, null, 4)
    ], 38));
  }
}), E = /* @__PURE__ */ x(Te, [["__scopeId", "data-v-51adc759"]]), Re = { class: "webwin-container" }, We = ["src"], De = ["src"], j = {
  __name: "webwin-tab",
  props: { menu: Array, url: Array, titlebar: Boolean, titlebartext: String },
  setup(e) {
    const s = e, i = u(0), t = u(0), n = u(s.url[0]);
    let c = u(""), l = u("");
    s.titlebar ? c.value = s.titlebartext : c.value = "", se(i, (r) => {
      console.log("activeIndex changed:", r), console.log("new url:", s.url[r]), n.value = s.url[r], t.value = t.value === 0 ? 1 : 0, console.log("docState:", t.value);
    });
    function _(r) {
      r ? l.value = "" : l.value = "folded";
    }
    return (r, m) => (a(), d("div", Re, [
      V(F, {
        modelValue: i.value,
        "onUpdate:modelValue": m[0] || (m[0] = (b) => i.value = b),
        items: e.menu,
        class: "webwin-item-1",
        bartitle: p(c),
        onUpdate: _
      }, null, 8, ["modelValue", "items", "bartitle"]),
      V(z, {
        name: "fade",
        mode: "out-in"
      }, {
        default: I(() => [
          t.value === 0 ? (a(), d("div", {
            key: "state0",
            class: h(["webwin-iframe-container", p(l)])
          }, [
            S(r.$slots, "default", {}, () => [
              N(o("iframe", {
                src: n.value,
                style: { "margin-top": "70px" },
                class: "webwin-iframe"
              }, null, 8, We), [
                [L, t.value === 0]
              ])
            ])
          ], 2)) : t.value === 1 ? (a(), d("div", {
            key: "state1",
            class: h(["webwin-iframe-container", p(l)])
          }, [
            S(r.$slots, "default", {}, () => [
              N(o("iframe", {
                src: n.value,
                style: { "margin-top": "70px" },
                class: "webwin-iframe"
              }, null, 8, De), [
                [L, t.value === 1]
              ])
            ])
          ], 2)) : M("", !0)
        ]),
        _: 3
      })
    ]));
  }
}, Oe = ["value", "placeholder"], qe = /* @__PURE__ */ k({
  __name: "webwin-passwordbox",
  props: { value: String, placeholder: String },
  setup(e) {
    const s = e, i = u(s.value), t = u(s.placeholder);
    return (n, c) => (a(), d("input", {
      type: "password",
      name: "fname",
      class: "webwin-uwppassword",
      value: i.value,
      placeholder: t.value,
      onChange: c[0] || (c[0] = (l) => n.$emit("@change", l))
    }, null, 40, Oe));
  }
}), X = /* @__PURE__ */ x(qe, [["__scopeId", "data-v-dd8b91fe"]]), He = ["data-placeholder"], Fe = /* @__PURE__ */ k({
  __name: "webwin-richeditbox",
  props: {
    value: { type: String, default: "" },
    placeholder: { type: String, default: "" }
  },
  emits: ["update", "change"],
  setup(e, { emit: s }) {
    const i = e, t = s, n = u(null), c = u(i.placeholder), l = u(i.value);
    ae(() => {
      n.value && (n.value.textContent = i.value || "", l.value = i.value || "");
    });
    const _ = (b) => {
      if (!n.value) return;
      const v = n.value.textContent || "";
      t("update", v), ce(() => {
        if (n.value) {
          const w = document.createRange(), f = window.getSelection();
          w.selectNodeContents(n.value), w.collapse(!1), f?.removeAllRanges(), f?.addRange(w);
        }
      });
    }, r = (b) => {
      const v = b.target;
      v.textContent === i.placeholder && (v.textContent = "");
    }, m = (b) => {
      const v = b.target, w = v.textContent || "";
      w !== l.value && (t("change", {
        target: {
          value: w
        }
      }), l.value = w), w.trim() === "" && (v.textContent = "");
    };
    return (b, v) => (a(), d("div", {
      ref_key: "editableDiv",
      ref: n,
      class: "webwin-uwprichrditbox",
      contenteditable: "plaintext-only",
      "data-placeholder": c.value,
      onInput: _,
      onFocus: r,
      onBlur: m
    }, null, 40, He));
  }
}), Y = /* @__PURE__ */ x(Fe, [["__scopeId", "data-v-f7a96b3a"]]), Le = ["src"], Ue = {
  class: "webwin-n-name",
  style: { display: "inline-block", "margin-left": "6px" }
}, Ee = { class: "webwin-n-text webwin-n-title" }, je = { class: "webwin-n-vulua" }, Xe = {
  __name: "webwin-notifications",
  props: { name: String, title: String, text: String, img: String },
  setup(e, { expose: s }) {
    const i = e;
    let t = u(!1), n = u(i.img);
    const c = () => {
      t.value = !t.value;
    };
    function l() {
      t.value && setTimeout(() => {
        t.value = !1;
      }, 250);
    }
    return s({ showNotification: c }), console.log("%c✨Welcome to Web-Win-Vue-Notifications✨", `
  color: #0078d7;
  text-shadow: 0 1px 0 #0078d7;`), (_, r) => (a(), D(z, { name: "slide-fade" }, {
      default: I(() => [
        p(t) ? (a(), d("div", {
          key: 0,
          class: "webwin-notification",
          onClick: l
        }, [
          o("img", {
            src: p(n),
            style: { "object-fit": "contain", "margin-left": "16px", "margin-right": "0px", display: "inline-block", "vertical-align": "middle", width: "16px", height: "16px" }
          }, null, 8, Le),
          o("p", Ue, g(e.name), 1),
          o("h4", Ee, g(e.title), 1),
          o("p", je, g(e.text), 1)
        ])) : M("", !0)
      ]),
      _: 1
    }));
  }
}, G = /* @__PURE__ */ x(Xe, [["__scopeId", "data-v-445b06e9"]]), Ye = ["name", "id"], Ge = ["for"], Ke = /* @__PURE__ */ k({
  __name: "webwin-checkbox",
  props: { name: String, checked: Array },
  setup(e) {
    const s = e, i = u(s.name), t = u(s.checked);
    return (n, c) => (a(), d($, null, [
      N(o("input", {
        type: "checkbox",
        class: "webwin-checkbox",
        name: i.value,
        id: i.value,
        "onUpdate:modelValue": c[0] || (c[0] = (l) => t.value = l),
        onClick: c[1] || (c[1] = (l) => n.$emit("click", l))
      }, null, 8, Ye), [
        [re, t.value]
      ]),
      o("label", {
        for: i.value,
        class: "webwin-checkbox-label"
      }, [
        S(n.$slots, "default", {}, void 0, !0)
      ], 8, Ge)
    ], 64));
  }
}), K = /* @__PURE__ */ x(Ke, [["__scopeId", "data-v-3b234b99"]]), Je = ["name", "id"], Pe = ["for"], Qe = /* @__PURE__ */ k({
  __name: "webwin-radio",
  props: { name: String, checked: Array },
  setup(e) {
    const s = e, i = u(s.name), t = u(s.checked);
    return (n, c) => (a(), d($, null, [
      N(o("input", {
        type: "radio",
        class: "webwin-radio",
        name: i.value,
        id: i.value,
        "onUpdate:modelValue": c[0] || (c[0] = (l) => t.value = l),
        onClick: c[1] || (c[1] = (l) => n.$emit("click", l))
      }, null, 8, Je), [
        [ue, t.value]
      ]),
      o("label", {
        for: i.value,
        class: "webwin-radio-label"
      }, [
        S(n.$slots, "default", {}, void 0, !0)
      ], 8, Pe)
    ], 64));
  }
}), J = /* @__PURE__ */ x(Qe, [["__scopeId", "data-v-04fe95c4"]]), Ze = { style: { position: "relative" } }, Ae = {
  key: 0,
  class: "webwin-list-box"
}, et = { style: { overflow: "auto", height: "calc( 100% - 240px )" } }, tt = ["onClick"], nt = { class: "webwin-label" }, lt = {
  __name: "webwin-combobox",
  props: {
    items: { type: Array, required: !0 },
    modelValue: { type: Number, default: 0 },
    title: { type: String, default: "itembox" }
  },
  emits: ["update"],
  setup(e, { emit: s }) {
    O((w) => ({
      v1be24303: p(m) + "px",
      v5172b45c: p(r) + "px"
    }));
    const i = e, t = s;
    let n = u(""), c = u(!1), l = u(i.modelValue), _ = u(i.title), r = u(-6), m = u(6);
    function b(w) {
      c.value = !1, n.value = "", l.value = w, _.value = i.items[w].name, t("update", w), setTimeout(() => {
        r.value = w * -35 - 6, m.value = w * 35 + 6;
      }, 100);
    }
    function v() {
      c.value = !c.value, n.value = c.value ? "active" : "";
    }
    return (w, f) => (a(), d("div", Ze, [
      o("div", {
        class: h(["webwin-list-box-button", p(n)]),
        onClick: v
      }, g(p(_)), 3),
      V(z, null, {
        default: I(() => [
          p(c) ? (a(), d("ul", Ae, [
            f[0] || (f[0] = o("div", { style: { height: "6px" } }, null, -1)),
            o("div", et, [
              (a(!0), d($, null, C(e.items, (y, B) => (a(), d("li", {
                key: B,
                class: h({ active: B === p(l) }),
                onClick: (T) => b(B)
              }, [
                o("span", nt, g(y.name), 1)
              ], 10, tt))), 128))
            ]),
            f[1] || (f[1] = o("div", { style: { height: "6px" } }, null, -1))
          ])) : M("", !0)
        ]),
        _: 1
      })
    ]));
  }
}, P = /* @__PURE__ */ x(lt, [["__scopeId", "data-v-ac4b4002"]]), ot = { class: "webwin-progress-bar" }, it = {
  __name: "webwin-progressbar",
  props: {
    progress: { type: Number, default: 0 }
  },
  setup(e) {
    return (s, i) => (a(), d("div", ot, [
      o("div", {
        class: "webwin-progress",
        style: R({ width: e.progress + "%" })
      }, null, 4)
    ]));
  }
}, Q = /* @__PURE__ */ x(it, [["__scopeId", "data-v-9ef8a457"]]), st = {
  key: 0,
  class: "webwin-window-background"
}, at = {
  key: 0,
  class: "webwin-window"
}, ct = { style: { "margin-top": "24px", "margin-bottom": "24px" } }, rt = { class: "webwin-window-title" }, ut = ["innerHTML"], dt = { style: { "margin-left": "24px", "margin-right": "24px", width: "calc(100% - 48px)", display: "Flex", gap: "6px", "margin-top": "48px" } }, wt = {
  __name: "webwin-contentdialog",
  props: {
    items: { type: Array, required: !0, default: [{ text: "11" }, { text: "11" }] },
    title: { type: String, default: "Title" },
    content: { type: String, default: "Content" }
  },
  emits: ["clickBotton"],
  setup(e, { expose: s, emit: i }) {
    let t = u("");
    const n = i, c = () => {
      t.value = !0;
    };
    function l(_) {
      t.value = !1, n("clickBotton", _);
    }
    return s({ showDialog: c }), (_, r) => (a(), d($, null, [
      V(z, null, {
        default: I(() => [
          p(t) ? (a(), d("div", st)) : M("", !0)
        ]),
        _: 1
      }),
      V(z, null, {
        default: I(() => [
          p(t) ? (a(), d("div", at, [
            o("div", ct, [
              o("h2", rt, g(e.title), 1),
              o("div", {
                style: { "margin-left": "25px", "margin-right": "24px", width: "calc(100% - 48px)" },
                innerHTML: e.content
              }, null, 8, ut),
              o("div", dt, [
                (a(!0), d($, null, C(e.items, (m, b) => (a(), D(q, {
                  class: "webwin-window-button",
                  key: b,
                  onClick: (v) => l(b)
                }, {
                  default: I(() => [
                    de(g(m.text), 1)
                  ]),
                  _: 2
                }, 1032, ["onClick"]))), 128))
              ])
            ])
          ])) : M("", !0)
        ]),
        _: 1
      })
    ], 64));
  }
}, Z = /* @__PURE__ */ x(wt, [["__scopeId", "data-v-afae8037"]]), pt = {}, vt = { class: "webwin-card" };
function mt(e, s) {
  return a(), d("div", vt, [
    S(e.$slots, "default", {}, void 0, !0)
  ]);
}
const A = /* @__PURE__ */ x(pt, [["render", mt], ["__scopeId", "data-v-26a8c2e0"]]), bt = {
  key: 0,
  class: "webwin-dropdown-container"
}, _t = { class: "webwin-dropdown" }, ft = { style: { overflow: "auto", height: "calc( 100% - 240px )" } }, ht = ["onClick"], gt = { class: "webwin-label" }, xt = {
  __name: "webwin-dropdown",
  props: {
    items: { type: Array, required: !0 }
  },
  emits: ["update"],
  setup(e, { expose: s, emit: i }) {
    O((f) => ({
      v08042082: p(c) + "px",
      v6fe54d61: p(l) + "px"
    }));
    const t = e, n = i;
    let c = u(0), l = u(0), _ = u(""), r = u(!1), m = u(0), b = u(t.title || "");
    function v(f) {
      r.value = !1, _.value = "", m.value = f, b.value = t.items[f].name, n("update", f);
    }
    return s({ showbox: (f, y) => {
      r.value = !r.value, _.value = r.value ? "active" : "", c.value = f, l.value = y;
    } }), (f, y) => (a(), d("div", null, [
      V(z, null, {
        default: I(() => [
          p(r) ? (a(), d("div", bt, [
            o("div", {
              class: "webwin-dropdown_backgroud",
              onClick: y[0] || (y[0] = (B) => U(r) ? r.value = !1 : r = !1)
            }),
            o("ul", _t, [
              y[1] || (y[1] = o("div", { style: { height: "6px" } }, null, -1)),
              o("div", ft, [
                (a(!0), d($, null, C(e.items, (B, T) => (a(), d("li", {
                  key: T,
                  class: h({ active: T === p(m) }),
                  onClick: (Ot) => v(T)
                }, [
                  o("span", gt, g(B.name), 1)
                ], 10, ht))), 128))
              ]),
              y[2] || (y[2] = o("div", { style: { height: "6px" } }, null, -1))
            ])
          ])) : M("", !0)
        ]),
        _: 1
      })
    ]));
  }
}, ee = /* @__PURE__ */ x(xt, [["__scopeId", "data-v-2d220786"]]), yt = { class: "webwin-topappbar" }, $t = ["is", "onClick"], kt = { class: "webwin-topappbar-label" }, Ct = {
  key: 0,
  class: "webwin-topappbar-indicator"
}, Mt = {
  key: 1,
  class: "webwin-topappbar-indicator-not"
}, It = ["onClick"], St = { class: "webwin-topappbar-label" }, Vt = {
  __name: "webwin-topappbar",
  props: { items: Array, activeIndex: Number, rightMenu: { type: Array, default: [] } },
  emits: ["update"],
  setup(e, { emit: s }) {
    const i = s, t = e;
    let n = u(t.activeIndex || 0), c = u(t.items), l = u(t.rightMenu);
    function _(m) {
      n.value = m, i("update", [m, "left"]);
    }
    function r(m) {
      i("update", [m, "right"]);
    }
    return (m, b) => (a(), d("ul", yt, [
      (a(), D(we, null, [
        (a(!0), d($, null, C(p(c), (v, w) => (a(), d("li", {
          is: m.activeComponent,
          key: w,
          class: h([{ active: w === p(n) }, "webwin-topappbar-item"]),
          onClick: (f) => _(w)
        }, [
          o("span", kt, g(v.name), 1),
          w === p(n) ? (a(), d("span", Ct)) : M("", !0),
          w != p(n) ? (a(), d("span", Mt)) : M("", !0)
        ], 10, $t))), 128))
      ], 1024)),
      (a(!0), d($, null, C(p(l), (v, w) => (a(), d("li", {
        key: w,
        onClick: (f) => r(w),
        class: "webwin-topappbar-item",
        style: { float: "right" }
      }, [
        o("span", St, g(v.name), 1)
      ], 8, It))), 128))
    ]));
  }
}, te = /* @__PURE__ */ x(Vt, [["__scopeId", "data-v-ef60c98a"]]), Bt = {
  __name: "webwin-range",
  props: /* @__PURE__ */ pe({
    color: { type: String, default: "#006fd0" }
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    O((i) => ({
      v23dfb612: e.color
    }));
    let s = ve(e, "modelValue");
    return (i, t) => N((a(), d("input", {
      type: "range",
      "onUpdate:modelValue": t[0] || (t[0] = (n) => U(s) ? s.value = n : s = n),
      class: "webwin-slider",
      min: "1",
      max: "100"
    }, null, 512)), [
      [me, p(s)]
    ]);
  }
}, ne = /* @__PURE__ */ x(Bt, [["__scopeId", "data-v-480ca2b0"]]), zt = ["onClick"], Nt = { class: "webwin-listview-context" }, le = /* @__PURE__ */ k({
  __name: "webwin-listview",
  props: {
    items: {
      type: Array,
      required: !1,
      default: () => []
    },
    activeIndex: Array,
    isMultiple: Boolean
  },
  emits: ["update"],
  setup(e, { emit: s }) {
    const i = s, t = e, n = u("context");
    let c = u(t.items || []);
    const l = u(t.activeIndex ?? [0]);
    function _(r) {
      console.log(1), t.isMultiple ? l.value.indexOf(r) !== -1 ? l.value = l.value.filter((b) => b !== r) : l.value.push(r) : l.value = [r], i("update", l.value);
    }
    return (r, m) => (a(!0), d($, null, C(p(c), (b, v) => (a(), d("div", {
      key: v,
      class: h([{ active: l.value.indexOf(v) != -1 }, "webwin-listview"]),
      onClick: (w) => _(v)
    }, [
      o("div", Nt, g(b[n.value]), 1)
    ], 10, zt))), 128));
  }
}), Tt = ["onClick"], Rt = { class: "webwin-listbox-context" }, oe = /* @__PURE__ */ k({
  __name: "webwin-listbox",
  props: {
    items: {
      type: Array,
      required: !1,
      default: () => []
    },
    activeIndex: Array,
    isMultiple: Boolean
  },
  emits: ["update"],
  setup(e, { emit: s }) {
    const i = s, t = e, n = u("context");
    let c = u(t.items || []);
    const l = u(t.activeIndex ?? [0]);
    function _(r) {
      console.log(1), t.isMultiple ? l.value.indexOf(r) !== -1 ? l.value = l.value.filter((b) => b !== r) : l.value.push(r) : l.value = [r], i("update", l.value);
    }
    return (r, m) => (a(!0), d($, null, C(p(c), (b, v) => (a(), d("div", {
      key: v,
      class: h([{ active: l.value.indexOf(v) != -1 }, "webwin-listbox"]),
      onClick: (w) => _(v)
    }, [
      o("div", Rt, g(b[n.value]), 1)
    ], 10, Tt))), 128));
  }
}), Wt = { class: "webwin-switch" }, ie = /* @__PURE__ */ k({
  __name: "webwin-switch",
  props: {
    isOn: Boolean
  },
  setup(e) {
    return (s, i) => (a(), d("label", Wt, [...i[0] || (i[0] = [
      o("input", {
        type: "checkbox",
        class: "webwin-switch-checkbox"
      }, null, -1),
      o("span", { class: "webwin-switch-slider" }, null, -1)
    ])]));
  }
}), Dt = [ne, te, ee, A, Z, Q, P, J, K, q, F, E, j, H, X, Y, G, le, oe, ie], Ht = {
  install(e) {
    Dt.forEach((s) => {
      e.component("winbutton", q), e.component("winsidebar", F), e.component("wintile", E), e.component("wintab", j), e.component("wininputbox", H), e.component("winpasswordbox", X), e.component("winricheditbox", Y), e.component("winnotifications", G), e.component("wincheckbox", K), e.component("winradio", J), e.component("wincombobox", P), e.component("winprogressbar", Q), e.component("wincontentdialog", Z), e.component("wincard", A), e.component("windropdown", ee), e.component("wintopappbar", te), e.component("winrange", ne), e.component("winlistview", le), e.component("winlistbox", oe), e.component("winswitch", ie);
    });
  }
};
export {
  Ht as default,
  q as winbutton,
  A as wincard,
  K as wincheckbox,
  P as wincombobox,
  Z as wincontentdialog,
  ee as windropdown,
  H as wininputbox,
  oe as winlistbox,
  le as winlistview,
  G as winnotifications,
  X as winpasswordbox,
  Q as winprogressbar,
  J as winradio,
  ne as winrange,
  Y as winricheditbox,
  F as winsidebar,
  ie as winswitch,
  j as wintab,
  E as wintile,
  te as wintopappbar
};

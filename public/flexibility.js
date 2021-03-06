/*! flexibility v1.0.0 | MIT Licensed | github.com/10up/flexibility */
flexibility = {}, Array.prototype.forEach || (Array.prototype.forEach = function(t) { if (void 0 === this || null === this) throw new TypeError(this + "is not an object"); if (!(t instanceof Function)) throw new TypeError(t + " is not a function"); for (var e = Object(this), i = arguments[1], n = e instanceof String ? e.split("") : e, r = Math.max(Math.min(n.length, 9007199254740991), 0) || 0, o = -1; ++o < r;) o in n && t.call(i, n[o], o, e) }),
    function(t, e) { "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? module.exports = e() : t.computeLayout = e() }(flexibility, function() {
        /**
         * Copyright (c) 2014, Facebook, Inc.
         * All rights reserved.
         *
         * This source code is licensed under the BSD-style license found in the
         * LICENSE file in the root directory of this source tree. An additional grant
         * of patent rights can be found in the PATENTS file in the same directory.
         */
        var t = function() {
            function t(e) { if ((!e.layout || e.isDirty) && (e.layout = { width: void 0, height: void 0, top: 0, left: 0, right: 0, bottom: 0 }), e.style || (e.style = {}), e.children || (e.children = []), e.style.measure && e.children && e.children.length) throw new Error("Using custom measure function is supported only for leaf nodes."); return e.children.forEach(t), e }

            function e(t) { return void 0 === t }

            function i(t) { return t === P || t === z }

            function n(t) { return t === j || t === X }

            function r(t, e) { if (void 0 !== t.style.marginStart && i(e)) return t.style.marginStart; var n = null; switch (e) {
                    case "row":
                        n = t.style.marginLeft; break;
                    case "row-reverse":
                        n = t.style.marginRight; break;
                    case "column":
                        n = t.style.marginTop; break;
                    case "column-reverse":
                        n = t.style.marginBottom } return void 0 !== n ? n : void 0 !== t.style.margin ? t.style.margin : 0 }

            function o(t, e) { if (void 0 !== t.style.marginEnd && i(e)) return t.style.marginEnd; var n = null; switch (e) {
                    case "row":
                        n = t.style.marginRight; break;
                    case "row-reverse":
                        n = t.style.marginLeft; break;
                    case "column":
                        n = t.style.marginBottom; break;
                    case "column-reverse":
                        n = t.style.marginTop } return null != n ? n : void 0 !== t.style.margin ? t.style.margin : 0 }

            function l(t, e) { if (void 0 !== t.style.paddingStart && t.style.paddingStart >= 0 && i(e)) return t.style.paddingStart; var n = null; switch (e) {
                    case "row":
                        n = t.style.paddingLeft; break;
                    case "row-reverse":
                        n = t.style.paddingRight; break;
                    case "column":
                        n = t.style.paddingTop; break;
                    case "column-reverse":
                        n = t.style.paddingBottom } return null != n && n >= 0 ? n : void 0 !== t.style.padding && t.style.padding >= 0 ? t.style.padding : 0 }

            function a(t, e) { if (void 0 !== t.style.paddingEnd && t.style.paddingEnd >= 0 && i(e)) return t.style.paddingEnd; var n = null; switch (e) {
                    case "row":
                        n = t.style.paddingRight; break;
                    case "row-reverse":
                        n = t.style.paddingLeft; break;
                    case "column":
                        n = t.style.paddingBottom; break;
                    case "column-reverse":
                        n = t.style.paddingTop } return null != n && n >= 0 ? n : void 0 !== t.style.padding && t.style.padding >= 0 ? t.style.padding : 0 }

            function d(t, e) { if (void 0 !== t.style.borderStartWidth && t.style.borderStartWidth >= 0 && i(e)) return t.style.borderStartWidth; var n = null; switch (e) {
                    case "row":
                        n = t.style.borderLeftWidth; break;
                    case "row-reverse":
                        n = t.style.borderRightWidth; break;
                    case "column":
                        n = t.style.borderTopWidth; break;
                    case "column-reverse":
                        n = t.style.borderBottomWidth } return null != n && n >= 0 ? n : void 0 !== t.style.borderWidth && t.style.borderWidth >= 0 ? t.style.borderWidth : 0 }

            function u(t, e) { if (void 0 !== t.style.borderEndWidth && t.style.borderEndWidth >= 0 && i(e)) return t.style.borderEndWidth; var n = null; switch (e) {
                    case "row":
                        n = t.style.borderRightWidth; break;
                    case "row-reverse":
                        n = t.style.borderLeftWidth; break;
                    case "column":
                        n = t.style.borderBottomWidth; break;
                    case "column-reverse":
                        n = t.style.borderTopWidth } return null != n && n >= 0 ? n : void 0 !== t.style.borderWidth && t.style.borderWidth >= 0 ? t.style.borderWidth : 0 }

            function s(t, e) { return l(t, e) + d(t, e) }

            function y(t, e) { return a(t, e) + u(t, e) }

            function c(t, e) { return d(t, e) + u(t, e) }

            function h(t, e) { return r(t, e) + o(t, e) }

            function f(t, e) { return s(t, e) + y(t, e) }

            function m(t) { return t.style.justifyContent ? t.style.justifyContent : "flex-start" }

            function v(t) { return t.style.alignContent ? t.style.alignContent : "flex-start" }

            function p(t, e) { return e.style.alignSelf ? e.style.alignSelf : t.style.alignItems ? t.style.alignItems : "stretch" }

            function g(t, e) { if (e === A) { if (t === P) return z; if (t === z) return P } return t }

            function x(t, e) { var i; return i = t.style.direction ? t.style.direction : $, i === $ && (i = void 0 === e ? M : e), i }

            function b(t) { return t.style.flexDirection ? t.style.flexDirection : j }

            function w(t, e) { return n(t) ? g(P, e) : j }

            function E(t) { return t.style.position ? t.style.position : "relative" }

            function S(t) { return E(t) === tt && t.style.flex > 0 }

            function L(t) { return "wrap" === t.style.flexWrap }

            function W(t, e) { return t.layout[ot[e]] + h(t, e) }

            function C(t, e) { return void 0 !== t.style[ot[e]] && t.style[ot[e]] >= 0 }

            function T(t, e) { return void 0 !== t.style[e] }

            function R(t) { return void 0 !== t.style.measure }

            function _(t, e) { return void 0 !== t.style[e] ? t.style[e] : 0 }

            function k(t, e, i) { var n = { row: t.style.minWidth, "row-reverse": t.style.minWidth, column: t.style.minHeight, "column-reverse": t.style.minHeight }[e],
                    r = { row: t.style.maxWidth, "row-reverse": t.style.maxWidth, column: t.style.maxHeight, "column-reverse": t.style.maxHeight }[e],
                    o = i; return void 0 !== r && r >= 0 && o > r && (o = r), void 0 !== n && n >= 0 && n > o && (o = n), o }

            function I(t, e) { return t > e ? t : e }

            function F(t, e) { void 0 === t.layout[ot[e]] && C(t, e) && (t.layout[ot[e]] = I(k(t, e, t.style[ot[e]]), f(t, e))) }

            function H(t, e, i) { e.layout[nt[i]] = t.layout[ot[i]] - e.layout[ot[i]] - e.layout[rt[i]] }

            function D(t, e) { return void 0 !== t.style[it[e]] ? _(t, it[e]) : -_(t, nt[e]) }

            function O(t, n, l, a) {
                var u = x(t, a),
                    /*(c)!css_flex_direction_t*/ O = g(b(t), u),
                    /*(c)!css_flex_direction_t*/ $ = w(O, u),
                    /*(c)!css_flex_direction_t*/ M = g(P, u);
                F(t, O), F(t, $), t.layout.direction = u, t.layout[it[O]] += r(t, O) + D(t, O), t.layout[nt[O]] += o(t, O) + D(t, O), t.layout[it[$]] += r(t, $) + D(t, $), t.layout[nt[$]] += o(t, $) + D(t, $);
                var A = t.children.length,
                    lt = f(t, M),
                    at = f(t, j);
                if (R(t)) {
                    var dt = !e(t.layout[ot[M]]),
                        ut = N;
                    ut = C(t, M) ? t.style.width : dt ? t.layout[ot[M]] : n - h(t, M), ut -= lt;
                    var st = N;
                    st = C(t, j) ? t.style.height : e(t.layout[ot[j]]) ? l - h(t, M) : t.layout[ot[j]], st -= f(t, j);
                    var yt = !C(t, M) && !dt,
                        ct = !C(t, j) && e(t.layout[ot[j]]);
                    if (yt || ct) {
                        var ht = t.style.measure( /*(c)!node->context,*/
                            /*(java)!layoutContext.measureOutput,*/
                            ut, st);
                        yt && (t.layout.width = ht.width + lt), ct && (t.layout.height = ht.height + at)
                    }
                    if (0 === A) return
                }
                var ft, mt, vt, /*(c)!css_flex_direction_t*/ pt, gt = L(t),
                    xt = m(t),
                    bt = s(t, O),
                    wt = s(t, $),
                    Et = f(t, O),
                    St = f(t, $),
                    Lt = !e(t.layout[ot[O]]),
                    Wt = !e(t.layout[ot[$]]),
                    Ct = i(O),
                    Tt = null,
                    Rt = null,
                    _t = N;
                Lt && (_t = t.layout[ot[O]] - Et);
                for (var kt = 0, It = 0, Ft = 0, Ht = 0, Dt = 0, Ot = 0; A > It;) { var Bt, Nt, $t = 0,
                        Mt = 0,
                        At = 0,
                        Pt = 0,
                        zt = Lt && xt === U || !Lt && xt !== q,
                        jt = zt ? A : kt,
                        Xt = !0,
                        Ut = A,
                        qt = null,
                        Gt = null,
                        Vt = bt,
                        Zt = 0; for (ft = kt; A > ft; ++ft) { vt = t.children[ft], vt.lineIndex = Ot, vt.nextAbsoluteChild = null, vt.nextFlexChild = null; var Jt = p(t, vt); if (Jt === Y && E(vt) === tt && Wt && !C(vt, $)) vt.layout[ot[$]] = I(k(vt, $, t.layout[ot[$]] - St - h(vt, $)), f(vt, $));
                        else if (E(vt) === et)
                            for (null === Tt && (Tt = vt), null !== Rt && (Rt.nextAbsoluteChild = vt), Rt = vt, mt = 0; 2 > mt; mt++) pt = 0 !== mt ? P : j, !e(t.layout[ot[pt]]) && !C(vt, pt) && T(vt, it[pt]) && T(vt, nt[pt]) && (vt.layout[ot[pt]] = I(k(vt, pt, t.layout[ot[pt]] - f(t, pt) - h(vt, pt) - _(vt, it[pt]) - _(vt, nt[pt])), f(vt, pt))); var Kt = 0; if (Lt && S(vt) ? (Mt++, At += vt.style.flex, null === qt && (qt = vt), null !== Gt && (Gt.nextFlexChild = vt), Gt = vt, Kt = f(vt, O) + h(vt, O)) : (Bt = N, Nt = N, Ct ? Nt = C(t, j) ? t.layout[ot[j]] - at : l - h(t, j) - at : Bt = C(t, M) ? t.layout[ot[M]] - lt : n - h(t, M) - lt, 0 === Ft && B(vt, Bt, Nt, u), E(vt) === tt && (Pt++, Kt = W(vt, O))), gt && Lt && $t + Kt > _t && ft !== kt) { Pt--, Ft = 1; break }
                        zt && (E(vt) !== tt || S(vt)) && (zt = !1, jt = ft), Xt && (E(vt) !== tt || Jt !== Y && Jt !== J || e(vt.layout[ot[$]])) && (Xt = !1, Ut = ft), zt && (vt.layout[rt[O]] += Vt, Lt && H(t, vt, O), Vt += W(vt, O), Zt = I(Zt, k(vt, $, W(vt, $)))), Xt && (vt.layout[rt[$]] += Ht + wt, Wt && H(t, vt, $)), Ft = 0, $t += Kt, It = ft + 1 } var Qt = 0,
                        Yt = 0,
                        te = 0; if (te = Lt ? _t - $t : I($t, 0) - $t, 0 !== Mt) { var ee, ie, ne = te / At; for (Gt = qt; null !== Gt;) ee = ne * Gt.style.flex + f(Gt, O), ie = k(Gt, O, ee), ee !== ie && (te -= ie, At -= Gt.style.flex), Gt = Gt.nextFlexChild; for (ne = te / At, 0 > ne && (ne = 0), Gt = qt; null !== Gt;) Gt.layout[ot[O]] = k(Gt, O, ne * Gt.style.flex + f(Gt, O)), Bt = N, C(t, M) ? Bt = t.layout[ot[M]] - lt : Ct || (Bt = n - h(t, M) - lt), Nt = N, C(t, j) ? Nt = t.layout[ot[j]] - at : Ct && (Nt = l - h(t, j) - at), B(Gt, Bt, Nt, u), vt = Gt, Gt = Gt.nextFlexChild, vt.nextFlexChild = null } else xt !== U && (xt === q ? Qt = te / 2 : xt === G ? Qt = te : xt === V ? (te = I(te, 0), Yt = Mt + Pt - 1 !== 0 ? te / (Mt + Pt - 1) : 0) : xt === Z && (Yt = te / (Mt + Pt), Qt = Yt / 2)); for (Vt += Qt, ft = jt; It > ft; ++ft) vt = t.children[ft], E(vt) === et && T(vt, it[O]) ? vt.layout[rt[O]] = _(vt, it[O]) + d(t, O) + r(vt, O) : (vt.layout[rt[O]] += Vt, Lt && H(t, vt, O), E(vt) === tt && (Vt += Yt + W(vt, O), Zt = I(Zt, k(vt, $, W(vt, $))))); var re = t.layout[ot[$]]; for (Wt || (re = I(k(t, $, Zt + St), St)), ft = Ut; It > ft; ++ft)
                        if (vt = t.children[ft], E(vt) === et && T(vt, it[$])) vt.layout[rt[$]] = _(vt, it[$]) + d(t, $) + r(vt, $);
                        else { var oe = wt; if (E(vt) === tt) { var Jt = p(t, vt); if (Jt === Y) e(vt.layout[ot[$]]) && (vt.layout[ot[$]] = I(k(vt, $, re - St - h(vt, $)), f(vt, $)));
                                else if (Jt !== J) { var le = re - St - W(vt, $);
                                    oe += Jt === K ? le / 2 : le } }
                            vt.layout[rt[$]] += Ht + oe, Wt && H(t, vt, $) }
                    Ht += Zt, Dt = I(Dt, Vt), Ot += 1, kt = It }
                if (Ot > 1 && Wt) { var ae = t.layout[ot[$]] - St,
                        de = ae - Ht,
                        ue = 0,
                        se = wt,
                        ye = v(t);
                    ye === Q ? se += de : ye === K ? se += de / 2 : ye === Y && ae > Ht && (ue = de / Ot); var ce = 0; for (ft = 0; Ot > ft; ++ft) { var he = ce,
                            fe = 0; for (mt = he; A > mt; ++mt)
                            if (vt = t.children[mt], E(vt) === tt) { if (vt.lineIndex !== ft) break;
                                e(vt.layout[ot[$]]) || (fe = I(fe, vt.layout[ot[$]] + h(vt, $))) }
                        for (ce = mt, fe += ue, mt = he; ce > mt; ++mt)
                            if (vt = t.children[mt], E(vt) === tt) { var me = p(t, vt); if (me === J) vt.layout[rt[$]] = se + r(vt, $);
                                else if (me === Q) vt.layout[rt[$]] = se + fe - o(vt, $) - vt.layout[ot[$]];
                                else if (me === K) { var ve = vt.layout[ot[$]];
                                    vt.layout[rt[$]] = se + (fe - ve) / 2 } else me === Y && (vt.layout[rt[$]] = se + r(vt, $)) }
                        se += fe } }
                var pe = !1,
                    ge = !1;
                if (Lt || (t.layout[ot[O]] = I(k(t, O, Dt + y(t, O)), Et), (O === z || O === X) && (pe = !0)), Wt || (t.layout[ot[$]] = I(k(t, $, Ht + St), St), ($ === z || $ === X) && (ge = !0)), pe || ge)
                    for (ft = 0; A > ft; ++ft) vt = t.children[ft], pe && H(t, vt, O), ge && H(t, vt, $);
                for (Rt = Tt; null !== Rt;) { for (mt = 0; 2 > mt; mt++) pt = 0 !== mt ? P : j, !e(t.layout[ot[pt]]) && !C(Rt, pt) && T(Rt, it[pt]) && T(Rt, nt[pt]) && (Rt.layout[ot[pt]] = I(k(Rt, pt, t.layout[ot[pt]] - c(t, pt) - h(Rt, pt) - _(Rt, it[pt]) - _(Rt, nt[pt])), f(Rt, pt))), T(Rt, nt[pt]) && !T(Rt, it[pt]) && (Rt.layout[it[pt]] = t.layout[ot[pt]] - Rt.layout[ot[pt]] - _(Rt, nt[pt]));
                    vt = Rt, Rt = Rt.nextAbsoluteChild, vt.nextAbsoluteChild = null }
            }

            function B(t, e, i, n) { t.shouldUpdate = !0; var r = t.style.direction || M,
                    o = !t.isDirty && t.lastLayout && t.lastLayout.requestedHeight === t.layout.height && t.lastLayout.requestedWidth === t.layout.width && t.lastLayout.parentMaxWidth === e && t.lastLayout.parentMaxHeight === i && t.lastLayout.direction === r;
                o ? (t.layout.width = t.lastLayout.width, t.layout.height = t.lastLayout.height, t.layout.top = t.lastLayout.top, t.layout.left = t.lastLayout.left) : (t.lastLayout || (t.lastLayout = {}), t.lastLayout.requestedWidth = t.layout.width, t.lastLayout.requestedHeight = t.layout.height, t.lastLayout.parentMaxWidth = e, t.lastLayout.parentMaxHeight = i, t.lastLayout.direction = r, t.children.forEach(function(t) { t.layout.width = void 0, t.layout.height = void 0, t.layout.top = 0, t.layout.left = 0 }), O(t, e, i, n), t.lastLayout.width = t.layout.width, t.lastLayout.height = t.layout.height, t.lastLayout.top = t.layout.top, t.lastLayout.left = t.layout.left) }
            var N, $ = "inherit",
                M = "ltr",
                A = "rtl",
                P = "row",
                z = "row-reverse",
                j = "column",
                X = "column-reverse",
                U = "flex-start",
                q = "center",
                G = "flex-end",
                V = "space-between",
                Z = "space-around",
                J = "flex-start",
                K = "center",
                Q = "flex-end",
                Y = "stretch",
                tt = "relative",
                et = "absolute",
                it = { row: "left", "row-reverse": "right", column: "top", "column-reverse": "bottom" },
                nt = { row: "right", "row-reverse": "left", column: "bottom", "column-reverse": "top" },
                rt = { row: "left", "row-reverse": "right", column: "top", "column-reverse": "bottom" },
                ot = { row: "width", "row-reverse": "width", column: "height", "column-reverse": "height" };
            return { layoutNodeImpl: O, computeLayout: B, fillNodes: t }
        }();
        return "object" == typeof exports && (module.exports = t),
            function(e) { t.fillNodes(e), t.computeLayout(e) }
    }), !window.addEventListener && window.attachEvent && function() { Window.prototype.addEventListener = HTMLDocument.prototype.addEventListener = Element.prototype.addEventListener = function(t, e) { this.attachEvent("on" + t, e) }, Window.prototype.removeEventListener = HTMLDocument.prototype.removeEventListener = Element.prototype.removeEventListener = function(t, e) { this.detachEvent("on" + t, e) } }(), flexibility.detect = function() { var t = document.createElement("p"); try { return t.style.display = "flex", "flex" === t.style.display } catch (e) { return !1 } }, !flexibility.detect() && document.attachEvent && document.documentElement.currentStyle && document.attachEvent("onreadystatechange", function() { flexibility.onresize({ target: document.documentElement }) }), flexibility.init = function(t) { var e = t.onlayoutcomplete; return e || (e = t.onlayoutcomplete = { node: t, style: {}, children: [] }), e.style.display = t.currentStyle["-js-display"] || t.currentStyle.display, e };
var SECOND = 1e3,
    FRAMES_PER_SECOND = 15;
flexibility.onresize = function(t) { window.removeEventListener("resize", flexibility.onresize); var e = t.target && 1 === t.target.nodeType ? t.target : document.documentElement;
    flexibility.walk(e), e.offsetWidth, setTimeout(function() { window.addEventListener("resize", flexibility.onresize) }, SECOND / FRAMES_PER_SECOND) };
var CSS_FLEX_CONTAINER_PROPERTIES = { alignContent: { initial: "stretch", valid: /^(flex-start|flex-end|center|space-between|space-around|stretch)/ }, alignItems: { initial: "stretch", valid: /^(flex-start|flex-end|center|baseline|stretch)$/ }, boxSizing: { initial: "content-box", valid: /^(border-box|content-box)$/ }, flexDirection: { initial: "row", valid: /^(row|row-reverse|column|column-reverse)$/ }, flexWrap: { initial: "nowrap", valid: /^(nowrap|wrap|wrap-reverse)$/ }, justifyContent: { initial: "flex-start", valid: /^(flex-start|flex-end|center|space-between|space-around)$/ } };
flexibility.updateFlexContainerCache = function(t) { var e = t.style,
        i = t.node.currentStyle; for (var n in CSS_FLEX_CONTAINER_PROPERTIES) { var r = n.replace(/[A-Z]/g, "-$&").toLowerCase(),
            o = CSS_FLEX_CONTAINER_PROPERTIES[n],
            l = i[r];
        e[n] = o.valid.test(l) ? l : o.initial } };
var CSS_FLEX_ITEM_PROPERTIES = { alignSelf: { initial: "auto", valid: /^(auto|flex-start|flex-end|center|baseline|stretch)$/ }, boxSizing: { initial: "content-box", valid: /^(border-box|content-box)$/ }, flexBasis: { initial: "auto", valid: /^((?:[-+]?0|[-+]?[0-9]*\.?[0-9]+(?:%|ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmax|vmin|vw))|auto|fill|max-content|min-content|fit-content|content)$/ }, flexGrow: { initial: 0, valid: /^\+?(0|[1-9][0-9]*)$/ }, flexShrink: { initial: 0, valid: /^\+?(0|[1-9][0-9]*)$/ }, order: { initial: 0, valid: /^([-+]?[0-9]+)$/ } };
flexibility.updateFlexItemCache = function(t) { var e = t.style,
        i = t.node.currentStyle; for (var n in CSS_FLEX_ITEM_PROPERTIES) { var r = n.replace(/[A-Z]/g, "-$&").toLowerCase(),
            o = CSS_FLEX_ITEM_PROPERTIES[n],
            l = i[r];
        e[n] = o.valid.test(l) ? l : o.initial } };
var CSS_RESET_TEXT = "border:0 solid;clip:rect(0 0 0 0);display:inline-block;font:0/0 serif;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;overflow:hidden;padding:0;position:absolute;width:1em;",
    CSS_BORDER_WIDTHS = { medium: 4, none: 0, thick: 6, thin: 2 },
    CSS_LENGTHS = { borderBottomWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, borderTopWidth: 0, height: 0, paddingBottom: 0, paddingLeft: 0, paddingRight: 0, paddingTop: 0, marginBottom: 0, marginLeft: 0, marginRight: 0, marginTop: 0, maxHeight: 0, maxWidth: 0, minHeight: 0, minWidth: 0, width: 0 };
flexibility.updateLengthCache = function(t) { var e = t.node,
        i = t.style,
        n = e.parentNode,
        r = document.createElement("_"),
        o = r.runtimeStyle,
        l = e.currentStyle;
    o.cssText = CSS_RESET_TEXT + "font-size:" + l.fontSize, n.insertBefore(r, e.nextSibling), i.fontSize = o.width; for (var a in CSS_LENGTHS) { var d = l[a]; /^\d/.test(d) ? (o.width = d, i[a] = r.offsetWidth) : i[a] = /^border/.test(a) && d in CSS_BORDER_WIDTHS ? CSS_BORDER_WIDTHS[d] : d }
    n.removeChild(r), "none" === l.borderTopStyle && (i.borderTopWidth = 0), "none" === l.borderRightStyle && (i.borderRightWidth = 0), "none" === l.borderBottomStyle && (i.borderBottomWidth = 0), "none" === l.borderLeftStyle && (i.borderLeftWidth = 0), "none" === i.maxHeight && delete i.maxHeight, "none" === i.maxWidth && delete i.maxWidth, "auto" === i.minHeight && delete i.minHeight, "auto" === i.minWidth && delete i.minWidth, i.originalWidth = i.width, i.originalHeight = i.height, i.width = /^\d/.test(i.width) ? i.width : e.offsetWidth, i.height = /^\d/.test(i.height) ? i.height : e.offsetHeight, "flex" === i.display && "auto" === i.originalHeight && delete i.height };
var CSS_OVERFLOW_BUFFER = 0;
flexibility.walk = function(t) { var e = flexibility.init(t),
        i = e.style,
        n = i.display; if ("none" === n) return {}; var r = n.match(/^(inline)?flex$/); if (r && (flexibility.updateFlexContainerCache(e), t.runtimeStyle.cssText = "display:" + (r[1] ? "inline-block" : "block"), e.children = []), Array.prototype.forEach.call(t.childNodes, function(t, n) { if (1 === t.nodeType) { var o = flexibility.walk(t),
                    l = o.style;
                o.index = n, r && (flexibility.updateFlexItemCache(o), "auto" === l.alignSelf && (l.alignSelf = i.alignItems), t.runtimeStyle.cssText = "display:" + ("stretch" === l.alignSelf && /^column/.test(i.flexDirection) ? "block" : "inline-block"), e.children.push(o)) } }), r) { e.children.forEach(function(t) { flexibility.updateLengthCache(t) }), e.children.sort(function(t, e) { return t.style.order - e.style.order || t.index - e.index }), /-reverse$/.test(i.flexDirection) && (e.children.reverse(), i.flexDirection = i.flexDirection.replace(/-reverse$/, ""), "flex-start" === i.justifyContent ? i.justifyContent = "flex-end" : "flex-end" === i.justifyContent && (i.justifyContent = "flex-start")), flexibility.updateLengthCache(e), delete e.lastLayout, delete e.layout; var o = i.borderTopWidth,
            l = i.borderBottomWidth;
        i.borderTopWidth = 0, i.borderBottomWidth = 0, i.borderLeftWidth = 0, "column" === i.flexDirection && (i.width -= i.borderRightWidth), flexibility.computeLayout(e), t.runtimeStyle.cssText = "box-sizing:border-box;display:block;position:relative;width:" + (e.layout.width + i.borderRightWidth + CSS_OVERFLOW_BUFFER) + "px;height:" + (e.layout.height + o + l) + "px"; var a = [],
            d = 1,
            u = "column" === i.flexDirection ? "width" : "height";
        e.children.forEach(function(t) { a[t.lineIndex] = Math.max(a[t.lineIndex] || 0, t.layout[u]), d = Math.max(d, t.lineIndex + 1) }), e.children.forEach(function(t) { var e = t.layout; "stretch" === t.style.alignSelf && (e[u] = a[t.lineIndex]), t.node.runtimeStyle.cssText = "box-sizing:border-box;display:block;position:absolute;margin:0;width:" + (e.width + CSS_OVERFLOW_BUFFER) + "px;height:" + e.height + "px;top:" + e.top + "px;left:" + e.left + "px" }) } return e };
//# sourceMappingURL=flexibility.js.map

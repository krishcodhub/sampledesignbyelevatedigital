(self.webpackChunk = self.webpackChunk || []).push([
    ["119"], {
        5487: function() {
            "use strict";
            window.tram = function(e) {
                function t(e, t) {
                    return (new P.Bare).init(e, t)
                }

                function a(e) {
                    var t = parseInt(e.slice(1), 16);
                    return [t >> 16 & 255, t >> 8 & 255, 255 & t]
                }

                function n(e, t, a) {
                    return "#" + (0x1000000 | e << 16 | t << 8 | a).toString(16).slice(1)
                }

                function i() {}

                function d(e, t, a) {
                    if (void 0 !== t && (a = t), void 0 === e) return a;
                    var n = a;
                    return $.test(e) || !q.test(e) ? n = parseInt(e, 10) : q.test(e) && (n = 1e3 * parseFloat(e)), 0 > n && (n = 0), n == n ? n : a
                }

                function o(e) {
                    Y.debug && window && window.console.warn(e)
                }
                var c, l, r, s = function(e, t, a) {
                        function n(e) {
                            return "object" == typeof e
                        }

                        function i(e) {
                            return "function" == typeof e
                        }

                        function d() {}
                        return function o(c, l) {
                            function r() {
                                var e = new s;
                                return i(e.init) && e.init.apply(e, arguments), e
                            }

                            function s() {}
                            l === a && (l = c, c = Object), r.Bare = s;
                            var u, f = d[e] = c[e],
                                p = s[e] = r[e] = new d;
                            return p.constructor = r, r.mixin = function(t) {
                                return s[e] = r[e] = o(r, t)[e], r
                            }, r.open = function(e) {
                                if (u = {}, i(e) ? u = e.call(r, p, f, r, c) : n(e) && (u = e), n(u))
                                    for (var a in u) t.call(u, a) && (p[a] = u[a]);
                                return i(p.init) || (p.init = c), r
                            }, r.open(l)
                        }
                    }("prototype", {}.hasOwnProperty),
                    u = {
                        ease: ["ease", function(e, t, a, n) {
                            var i = (e /= n) * e,
                                d = i * e;
                            return t + a * (-2.75 * d * i + 11 * i * i + -15.5 * d + 8 * i + .25 * e)
                        }],
                        "ease-in": ["ease-in", function(e, t, a, n) {
                            var i = (e /= n) * e,
                                d = i * e;
                            return t + a * (-1 * d * i + 3 * i * i + -3 * d + 2 * i)
                        }],
                        "ease-out": ["ease-out", function(e, t, a, n) {
                            var i = (e /= n) * e,
                                d = i * e;
                            return t + a * (.3 * d * i + -1.6 * i * i + 2.2 * d + -1.8 * i + 1.9 * e)
                        }],
                        "ease-in-out": ["ease-in-out", function(e, t, a, n) {
                            var i = (e /= n) * e,
                                d = i * e;
                            return t + a * (2 * d * i + -5 * i * i + 2 * d + 2 * i)
                        }],
                        linear: ["linear", function(e, t, a, n) {
                            return a * e / n + t
                        }],
                        "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(e, t, a, n) {
                            return a * (e /= n) * e + t
                        }],
                        "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(e, t, a, n) {
                            return -a * (e /= n) * (e - 2) + t
                        }],
                        "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(e, t, a, n) {
                            return (e /= n / 2) < 1 ? a / 2 * e * e + t : -a / 2 * (--e * (e - 2) - 1) + t
                        }],
                        "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(e, t, a, n) {
                            return a * (e /= n) * e * e + t
                        }],
                        "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(e, t, a, n) {
                            return a * ((e = e / n - 1) * e * e + 1) + t
                        }],
                        "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(e, t, a, n) {
                            return (e /= n / 2) < 1 ? a / 2 * e * e * e + t : a / 2 * ((e -= 2) * e * e + 2) + t
                        }],
                        "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(e, t, a, n) {
                            return a * (e /= n) * e * e * e + t
                        }],
                        "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(e, t, a, n) {
                            return -a * ((e = e / n - 1) * e * e * e - 1) + t
                        }],
                        "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(e, t, a, n) {
                            return (e /= n / 2) < 1 ? a / 2 * e * e * e * e + t : -a / 2 * ((e -= 2) * e * e * e - 2) + t
                        }],
                        "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(e, t, a, n) {
                            return a * (e /= n) * e * e * e * e + t
                        }],
                        "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(e, t, a, n) {
                            return a * ((e = e / n - 1) * e * e * e * e + 1) + t
                        }],
                        "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(e, t, a, n) {
                            return (e /= n / 2) < 1 ? a / 2 * e * e * e * e * e + t : a / 2 * ((e -= 2) * e * e * e * e + 2) + t
                        }],
                        "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(e, t, a, n) {
                            return -a * Math.cos(e / n * (Math.PI / 2)) + a + t
                        }],
                        "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(e, t, a, n) {
                            return a * Math.sin(e / n * (Math.PI / 2)) + t
                        }],
                        "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(e, t, a, n) {
                            return -a / 2 * (Math.cos(Math.PI * e / n) - 1) + t
                        }],
                        "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(e, t, a, n) {
                            return 0 === e ? t : a * Math.pow(2, 10 * (e / n - 1)) + t
                        }],
                        "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(e, t, a, n) {
                            return e === n ? t + a : a * (-Math.pow(2, -10 * e / n) + 1) + t
                        }],
                        "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(e, t, a, n) {
                            return 0 === e ? t : e === n ? t + a : (e /= n / 2) < 1 ? a / 2 * Math.pow(2, 10 * (e - 1)) + t : a / 2 * (-Math.pow(2, -10 * --e) + 2) + t
                        }],
                        "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(e, t, a, n) {
                            return -a * (Math.sqrt(1 - (e /= n) * e) - 1) + t
                        }],
                        "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(e, t, a, n) {
                            return a * Math.sqrt(1 - (e = e / n - 1) * e) + t
                        }],
                        "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(e, t, a, n) {
                            return (e /= n / 2) < 1 ? -a / 2 * (Math.sqrt(1 - e * e) - 1) + t : a / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + t
                        }],
                        "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(e, t, a, n, i) {
                            return void 0 === i && (i = 1.70158), a * (e /= n) * e * ((i + 1) * e - i) + t
                        }],
                        "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(e, t, a, n, i) {
                            return void 0 === i && (i = 1.70158), a * ((e = e / n - 1) * e * ((i + 1) * e + i) + 1) + t
                        }],
                        "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(e, t, a, n, i) {
                            return void 0 === i && (i = 1.70158), (e /= n / 2) < 1 ? a / 2 * e * e * (((i *= 1.525) + 1) * e - i) + t : a / 2 * ((e -= 2) * e * (((i *= 1.525) + 1) * e + i) + 2) + t
                        }]
                    },
                    f = {
                        "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
                        "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
                        "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
                    },
                    p = window,
                    E = "bkwld-tram",
                    I = /[\-\.0-9]/g,
                    T = /[A-Z]/,
                    g = "number",
                    y = /^(rgb|#)/,
                    b = /(em|cm|mm|in|pt|pc|px)$/,
                    m = /(em|cm|mm|in|pt|pc|px|%)$/,
                    O = /(deg|rad|turn)$/,
                    _ = "unitless",
                    R = /(all|none) 0s ease 0s/,
                    v = /^(width|height)$/,
                    L = document.createElement("a"),
                    N = ["Webkit", "Moz", "O", "ms"],
                    A = ["-webkit-", "-moz-", "-o-", "-ms-"],
                    S = function(e) {
                        if (e in L.style) return {
                            dom: e,
                            css: e
                        };
                        var t, a, n = "",
                            i = e.split("-");
                        for (t = 0; t < i.length; t++) n += i[t].charAt(0).toUpperCase() + i[t].slice(1);
                        for (t = 0; t < N.length; t++)
                            if ((a = N[t] + n) in L.style) return {
                                dom: a,
                                css: A[t] + e
                            }
                    },
                    h = t.support = {
                        bind: Function.prototype.bind,
                        transform: S("transform"),
                        transition: S("transition"),
                        backface: S("backface-visibility"),
                        timing: S("transition-timing-function")
                    };
                if (h.transition) {
                    var C = h.timing.dom;
                    if (L.style[C] = u["ease-in-back"][0], !L.style[C])
                        for (var M in f) u[M][0] = f[M]
                }
                var U = t.frame = (c = p.requestAnimationFrame || p.webkitRequestAnimationFrame || p.mozRequestAnimationFrame || p.oRequestAnimationFrame || p.msRequestAnimationFrame) && h.bind ? c.bind(p) : function(e) {
                        p.setTimeout(e, 16)
                    },
                    V = t.now = (r = (l = p.performance) && (l.now || l.webkitNow || l.msNow || l.mozNow)) && h.bind ? r.bind(l) : Date.now || function() {
                        return +new Date
                    },
                    G = s(function(t) {
                        function a(e, t) {
                            var a = function(e) {
                                    for (var t = -1, a = e ? e.length : 0, n = []; ++t < a;) {
                                        var i = e[t];
                                        i && n.push(i)
                                    }
                                    return n
                                }(("" + e).split(" ")),
                                n = a[0];
                            t = t || {};
                            var i = Q[n];
                            if (!i) return o("Unsupported property: " + n);
                            if (!t.weak || !this.props[n]) {
                                var d = i[0],
                                    c = this.props[n];
                                return c || (c = this.props[n] = new d.Bare), c.init(this.$el, a, i, t), c
                            }
                        }

                        function n(e, t, n) {
                            if (e) {
                                var o = typeof e;
                                if (t || (this.timer && this.timer.destroy(), this.queue = [], this.active = !1), "number" == o && t) return this.timer = new B({
                                    duration: e,
                                    context: this,
                                    complete: i
                                }), void(this.active = !0);
                                if ("string" == o && t) {
                                    switch (e) {
                                        case "hide":
                                            l.call(this);
                                            break;
                                        case "stop":
                                            c.call(this);
                                            break;
                                        case "redraw":
                                            r.call(this);
                                            break;
                                        default:
                                            a.call(this, e, n && n[1])
                                    }
                                    return i.call(this)
                                }
                                if ("function" == o) return void e.call(this, this);
                                if ("object" == o) {
                                    var f = 0;
                                    u.call(this, e, function(e, t) {
                                        e.span > f && (f = e.span), e.stop(), e.animate(t)
                                    }, function(e) {
                                        "wait" in e && (f = d(e.wait, 0))
                                    }), s.call(this), f > 0 && (this.timer = new B({
                                        duration: f,
                                        context: this
                                    }), this.active = !0, t && (this.timer.complete = i));
                                    var p = this,
                                        E = !1,
                                        I = {};
                                    U(function() {
                                        u.call(p, e, function(e) {
                                            e.active && (E = !0, I[e.name] = e.nextStyle)
                                        }), E && p.$el.css(I)
                                    })
                                }
                            }
                        }

                        function i() {
                            if (this.timer && this.timer.destroy(), this.active = !1, this.queue.length) {
                                var e = this.queue.shift();
                                n.call(this, e.options, !0, e.args)
                            }
                        }

                        function c(e) {
                            var t;
                            this.timer && this.timer.destroy(), this.queue = [], this.active = !1, "string" == typeof e ? (t = {})[e] = 1 : t = "object" == typeof e && null != e ? e : this.props, u.call(this, t, f), s.call(this)
                        }

                        function l() {
                            c.call(this), this.el.style.display = "none"
                        }

                        function r() {
                            this.el.offsetHeight
                        }

                        function s() {
                            var e, t, a = [];
                            for (e in this.upstream && a.push(this.upstream), this.props)(t = this.props[e]).active && a.push(t.string);
                            a = a.join(","), this.style !== a && (this.style = a, this.el.style[h.transition.dom] = a)
                        }

                        function u(e, t, n) {
                            var i, d, o, c, l = t !== f,
                                r = {};
                            for (i in e) o = e[i], i in j ? (r.transform || (r.transform = {}), r.transform[i] = o) : (T.test(i) && (i = i.replace(/[A-Z]/g, function(e) {
                                return "-" + e.toLowerCase()
                            })), i in Q ? r[i] = o : (c || (c = {}), c[i] = o));
                            for (i in r) {
                                if (o = r[i], !(d = this.props[i])) {
                                    if (!l) continue;
                                    d = a.call(this, i)
                                }
                                t.call(this, d, o)
                            }
                            n && c && n.call(this, c)
                        }

                        function f(e) {
                            e.stop()
                        }

                        function p(e, t) {
                            e.set(t)
                        }

                        function I(e) {
                            this.$el.css(e)
                        }

                        function g(e, a) {
                            t[e] = function() {
                                return this.children ? y.call(this, a, arguments) : (this.el && a.apply(this, arguments), this)
                            }
                        }

                        function y(e, t) {
                            var a, n = this.children.length;
                            for (a = 0; n > a; a++) e.apply(this.children[a], t);
                            return this
                        }
                        t.init = function(t) {
                            if (this.$el = e(t), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = !1, Y.keepInherited && !Y.fallback) {
                                var a = W(this.el, "transition");
                                a && !R.test(a) && (this.upstream = a)
                            }
                            h.backface && Y.hideBackface && H(this.el, h.backface.css, "hidden")
                        }, g("add", a), g("start", n), g("wait", function(e) {
                            e = d(e, 0), this.active ? this.queue.push({
                                options: e
                            }) : (this.timer = new B({
                                duration: e,
                                context: this,
                                complete: i
                            }), this.active = !0)
                        }), g("then", function(e) {
                            return this.active ? (this.queue.push({
                                options: e,
                                args: arguments
                            }), void(this.timer.complete = i)) : o("No active transition timer. Use start() or wait() before then().")
                        }), g("next", i), g("stop", c), g("set", function(e) {
                            c.call(this, e), u.call(this, e, p, I)
                        }), g("show", function(e) {
                            "string" != typeof e && (e = "block"), this.el.style.display = e
                        }), g("hide", l), g("redraw", r), g("destroy", function() {
                            c.call(this), e.removeData(this.el, E), this.$el = this.el = null
                        })
                    }),
                    P = s(G, function(t) {
                        function a(t, a) {
                            var n = e.data(t, E) || e.data(t, E, new G.Bare);
                            return n.el || n.init(t), a ? n.start(a) : n
                        }
                        t.init = function(t, n) {
                            var i = e(t);
                            if (!i.length) return this;
                            if (1 === i.length) return a(i[0], n);
                            var d = [];
                            return i.each(function(e, t) {
                                d.push(a(t, n))
                            }), this.children = d, this
                        }
                    }),
                    k = s(function(e) {
                        function t() {
                            var e = this.get();
                            this.update("auto");
                            var t = this.get();
                            return this.update(e), t
                        }
                        e.init = function(e, t, a, n) {
                            this.$el = e, this.el = e[0];
                            var i, o, c, l = t[0];
                            a[2] && (l = a[2]), z[l] && (l = z[l]), this.name = l, this.type = a[1], this.duration = d(t[1], this.duration, 500), this.ease = (i = t[2], o = this.ease, c = "ease", void 0 !== o && (c = o), i in u ? i : c), this.delay = d(t[3], this.delay, 0), this.span = this.duration + this.delay, this.active = !1, this.nextStyle = null, this.auto = v.test(this.name), this.unit = n.unit || this.unit || Y.defaultUnit, this.angle = n.angle || this.angle || Y.defaultAngle, Y.fallback || n.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + " " + this.duration + "ms" + ("ease" != this.ease ? " " + u[this.ease][0] : "") + (this.delay ? " " + this.delay + "ms" : ""))
                        }, e.set = function(e) {
                            e = this.convert(e, this.type), this.update(e), this.redraw()
                        }, e.transition = function(e) {
                            this.active = !0, e = this.convert(e, this.type), this.auto && ("auto" == this.el.style[this.name] && (this.update(this.get()), this.redraw()), "auto" == e && (e = t.call(this))), this.nextStyle = e
                        }, e.fallback = function(e) {
                            var a = this.el.style[this.name] || this.convert(this.get(), this.type);
                            e = this.convert(e, this.type), this.auto && ("auto" == a && (a = this.convert(this.get(), this.type)), "auto" == e && (e = t.call(this))), this.tween = new D({
                                from: a,
                                to: e,
                                duration: this.duration,
                                delay: this.delay,
                                ease: this.ease,
                                update: this.update,
                                context: this
                            })
                        }, e.get = function() {
                            return W(this.el, this.name)
                        }, e.update = function(e) {
                            H(this.el, this.name, e)
                        }, e.stop = function() {
                            (this.active || this.nextStyle) && (this.active = !1, this.nextStyle = null, H(this.el, this.name, this.get()));
                            var e = this.tween;
                            e && e.context && e.destroy()
                        }, e.convert = function(e, t) {
                            if ("auto" == e && this.auto) return e;
                            var a, i, d = "number" == typeof e,
                                c = "string" == typeof e;
                            switch (t) {
                                case g:
                                    if (d) return e;
                                    if (c && "" === e.replace(I, "")) return +e;
                                    i = "number(unitless)";
                                    break;
                                case y:
                                    if (c) {
                                        if ("" === e && this.original) return this.original;
                                        if (t.test(e)) return "#" == e.charAt(0) && 7 == e.length ? e : ((a = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(e)) ? n(a[1], a[2], a[3]) : e).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
                                    }
                                    i = "hex or rgb string";
                                    break;
                                case b:
                                    if (d) return e + this.unit;
                                    if (c && t.test(e)) return e;
                                    i = "number(px) or string(unit)";
                                    break;
                                case m:
                                    if (d) return e + this.unit;
                                    if (c && t.test(e)) return e;
                                    i = "number(px) or string(unit or %)";
                                    break;
                                case O:
                                    if (d) return e + this.angle;
                                    if (c && t.test(e)) return e;
                                    i = "number(deg) or string(angle)";
                                    break;
                                case _:
                                    if (d || c && m.test(e)) return e;
                                    i = "number(unitless) or string(unit or %)"
                            }
                            return o("Type warning: Expected: [" + i + "] Got: [" + typeof e + "] " + e), e
                        }, e.redraw = function() {
                            this.el.offsetHeight
                        }
                    }),
                    x = s(k, function(e, t) {
                        e.init = function() {
                            t.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), y))
                        }
                    }),
                    w = s(k, function(e, t) {
                        e.init = function() {
                            t.init.apply(this, arguments), this.animate = this.fallback
                        }, e.get = function() {
                            return this.$el[this.name]()
                        }, e.update = function(e) {
                            this.$el[this.name](e)
                        }
                    }),
                    F = s(k, function(e, t) {
                        function a(e, t) {
                            var a, n, i, d, o;
                            for (a in e) i = (d = j[a])[0], n = d[1] || a, o = this.convert(e[a], i), t.call(this, n, o, i)
                        }
                        e.init = function() {
                            t.init.apply(this, arguments), this.current || (this.current = {}, j.perspective && Y.perspective && (this.current.perspective = Y.perspective, H(this.el, this.name, this.style(this.current)), this.redraw()))
                        }, e.set = function(e) {
                            a.call(this, e, function(e, t) {
                                this.current[e] = t
                            }), H(this.el, this.name, this.style(this.current)), this.redraw()
                        }, e.transition = function(e) {
                            var t = this.values(e);
                            this.tween = new X({
                                current: this.current,
                                values: t,
                                duration: this.duration,
                                delay: this.delay,
                                ease: this.ease
                            });
                            var a, n = {};
                            for (a in this.current) n[a] = a in t ? t[a] : this.current[a];
                            this.active = !0, this.nextStyle = this.style(n)
                        }, e.fallback = function(e) {
                            var t = this.values(e);
                            this.tween = new X({
                                current: this.current,
                                values: t,
                                duration: this.duration,
                                delay: this.delay,
                                ease: this.ease,
                                update: this.update,
                                context: this
                            })
                        }, e.update = function() {
                            H(this.el, this.name, this.style(this.current))
                        }, e.style = function(e) {
                            var t, a = "";
                            for (t in e) a += t + "(" + e[t] + ") ";
                            return a
                        }, e.values = function(e) {
                            var t, n = {};
                            return a.call(this, e, function(e, a, i) {
                                n[e] = a, void 0 === this.current[e] && (t = 0, ~e.indexOf("scale") && (t = 1), this.current[e] = this.convert(t, i))
                            }), n
                        }
                    }),
                    D = s(function(t) {
                        function d() {
                            var e, t, a, n = l.length;
                            if (n)
                                for (U(d), t = V(), e = n; e--;)(a = l[e]) && a.render(t)
                        }
                        var c = {
                            ease: u.ease[1],
                            from: 0,
                            to: 1
                        };
                        t.init = function(e) {
                            this.duration = e.duration || 0, this.delay = e.delay || 0;
                            var t = e.ease || c.ease;
                            u[t] && (t = u[t][1]), "function" != typeof t && (t = c.ease), this.ease = t, this.update = e.update || i, this.complete = e.complete || i, this.context = e.context || this, this.name = e.name;
                            var a = e.from,
                                n = e.to;
                            void 0 === a && (a = c.from), void 0 === n && (n = c.to), this.unit = e.unit || "", "number" == typeof a && "number" == typeof n ? (this.begin = a, this.change = n - a) : this.format(n, a), this.value = this.begin + this.unit, this.start = V(), !1 !== e.autoplay && this.play()
                        }, t.play = function() {
                            this.active || (this.start || (this.start = V()), this.active = !0, 1 === l.push(this) && U(d))
                        }, t.stop = function() {
                            var t, a;
                            this.active && (this.active = !1, (a = e.inArray(this, l)) >= 0 && (t = l.slice(a + 1), l.length = a, t.length && (l = l.concat(t))))
                        }, t.render = function(e) {
                            var t, a = e - this.start;
                            if (this.delay) {
                                if (a <= this.delay) return;
                                a -= this.delay
                            }
                            if (a < this.duration) {
                                var i, d, o = this.ease(a, 0, 1, this.duration);
                                return t = this.startRGB ? (i = this.startRGB, d = this.endRGB, n(i[0] + o * (d[0] - i[0]), i[1] + o * (d[1] - i[1]), i[2] + o * (d[2] - i[2]))) : Math.round((this.begin + o * this.change) * r) / r, this.value = t + this.unit, void this.update.call(this.context, this.value)
                            }
                            t = this.endHex || this.begin + this.change, this.value = t + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy()
                        }, t.format = function(e, t) {
                            if (t += "", "#" == (e += "").charAt(0)) return this.startRGB = a(t), this.endRGB = a(e), this.endHex = e, this.begin = 0, void(this.change = 1);
                            if (!this.unit) {
                                var n = t.replace(I, "");
                                n !== e.replace(I, "") && o("Units do not match [tween]: " + t + ", " + e), this.unit = n
                            }
                            t = parseFloat(t), e = parseFloat(e), this.begin = this.value = t, this.change = e - t
                        }, t.destroy = function() {
                            this.stop(), this.context = null, this.ease = this.update = this.complete = i
                        };
                        var l = [],
                            r = 1e3
                    }),
                    B = s(D, function(e) {
                        e.init = function(e) {
                            this.duration = e.duration || 0, this.complete = e.complete || i, this.context = e.context, this.play()
                        }, e.render = function(e) {
                            e - this.start < this.duration || (this.complete.call(this.context), this.destroy())
                        }
                    }),
                    X = s(D, function(e, t) {
                        e.init = function(e) {
                            var t, a;
                            for (t in this.context = e.context, this.update = e.update, this.tweens = [], this.current = e.current, e.values) a = e.values[t], this.current[t] !== a && this.tweens.push(new D({
                                name: t,
                                from: this.current[t],
                                to: a,
                                duration: e.duration,
                                delay: e.delay,
                                ease: e.ease,
                                autoplay: !1
                            }));
                            this.play()
                        }, e.render = function(e) {
                            var t, a, n = this.tweens.length,
                                i = !1;
                            for (t = n; t--;)(a = this.tweens[t]).context && (a.render(e), this.current[a.name] = a.value, i = !0);
                            return i ? void(this.update && this.update.call(this.context)) : this.destroy()
                        }, e.destroy = function() {
                            if (t.destroy.call(this), this.tweens) {
                                var e;
                                for (e = this.tweens.length; e--;) this.tweens[e].destroy();
                                this.tweens = null, this.current = null
                            }
                        }
                    }),
                    Y = t.config = {
                        debug: !1,
                        defaultUnit: "px",
                        defaultAngle: "deg",
                        keepInherited: !1,
                        hideBackface: !1,
                        perspective: "",
                        fallback: !h.transition,
                        agentTests: []
                    };
                t.fallback = function(e) {
                    if (!h.transition) return Y.fallback = !0;
                    Y.agentTests.push("(" + e + ")");
                    var t = RegExp(Y.agentTests.join("|"), "i");
                    Y.fallback = t.test(navigator.userAgent)
                }, t.fallback("6.0.[2-5] Safari"), t.tween = function(e) {
                    return new D(e)
                }, t.delay = function(e, t, a) {
                    return new B({
                        complete: t,
                        duration: e,
                        context: a
                    })
                }, e.fn.tram = function(e) {
                    return t.call(null, this, e)
                };
                var H = e.style,
                    W = e.css,
                    z = {
                        transform: h.transform && h.transform.css
                    },
                    Q = {
                        color: [x, y],
                        background: [x, y, "background-color"],
                        "outline-color": [x, y],
                        "border-color": [x, y],
                        "border-top-color": [x, y],
                        "border-right-color": [x, y],
                        "border-bottom-color": [x, y],
                        "border-left-color": [x, y],
                        "border-width": [k, b],
                        "border-top-width": [k, b],
                        "border-right-width": [k, b],
                        "border-bottom-width": [k, b],
                        "border-left-width": [k, b],
                        "border-spacing": [k, b],
                        "letter-spacing": [k, b],
                        margin: [k, b],
                        "margin-top": [k, b],
                        "margin-right": [k, b],
                        "margin-bottom": [k, b],
                        "margin-left": [k, b],
                        padding: [k, b],
                        "padding-top": [k, b],
                        "padding-right": [k, b],
                        "padding-bottom": [k, b],
                        "padding-left": [k, b],
                        "outline-width": [k, b],
                        opacity: [k, g],
                        top: [k, m],
                        right: [k, m],
                        bottom: [k, m],
                        left: [k, m],
                        "font-size": [k, m],
                        "text-indent": [k, m],
                        "word-spacing": [k, m],
                        width: [k, m],
                        "min-width": [k, m],
                        "max-width": [k, m],
                        height: [k, m],
                        "min-height": [k, m],
                        "max-height": [k, m],
                        "line-height": [k, _],
                        "scroll-top": [w, g, "scrollTop"],
                        "scroll-left": [w, g, "scrollLeft"]
                    },
                    j = {};
                h.transform && (Q.transform = [F], j = {
                    x: [m, "translateX"],
                    y: [m, "translateY"],
                    rotate: [O],
                    rotateX: [O],
                    rotateY: [O],
                    scale: [g],
                    scaleX: [g],
                    scaleY: [g],
                    skew: [O],
                    skewX: [O],
                    skewY: [O]
                }), h.transform && h.backface && (j.z = [m, "translateZ"], j.rotateZ = [O], j.scaleZ = [g], j.perspective = [b]);
                var $ = /ms/,
                    q = /s|\./;
                return e.tram = t
            }(window.jQuery)
        },
        5756: function(e, t, a) {
            "use strict";
            var n, i, d, o, c, l, r, s, u, f, p, E, I, T, g, y, b, m, O, _, R = window.$,
                v = a(5487) && R.tram;
            (n = {}).VERSION = "1.6.0-Webflow", i = {}, d = Array.prototype, o = Object.prototype, c = Function.prototype, d.push, l = d.slice, d.concat, o.toString, r = o.hasOwnProperty, s = d.forEach, u = d.map, d.reduce, d.reduceRight, f = d.filter, d.every, p = d.some, E = d.indexOf, d.lastIndexOf, I = Object.keys, c.bind, T = n.each = n.forEach = function(e, t, a) {
                if (null == e) return e;
                if (s && e.forEach === s) e.forEach(t, a);
                else if (e.length === +e.length) {
                    for (var d = 0, o = e.length; d < o; d++)
                        if (t.call(a, e[d], d, e) === i) return
                } else
                    for (var c = n.keys(e), d = 0, o = c.length; d < o; d++)
                        if (t.call(a, e[c[d]], c[d], e) === i) return;
                return e
            }, n.map = n.collect = function(e, t, a) {
                var n = [];
                return null == e ? n : u && e.map === u ? e.map(t, a) : (T(e, function(e, i, d) {
                    n.push(t.call(a, e, i, d))
                }), n)
            }, n.find = n.detect = function(e, t, a) {
                var n;
                return g(e, function(e, i, d) {
                    if (t.call(a, e, i, d)) return n = e, !0
                }), n
            }, n.filter = n.select = function(e, t, a) {
                var n = [];
                return null == e ? n : f && e.filter === f ? e.filter(t, a) : (T(e, function(e, i, d) {
                    t.call(a, e, i, d) && n.push(e)
                }), n)
            }, g = n.some = n.any = function(e, t, a) {
                t || (t = n.identity);
                var d = !1;
                return null == e ? d : p && e.some === p ? e.some(t, a) : (T(e, function(e, n, o) {
                    if (d || (d = t.call(a, e, n, o))) return i
                }), !!d)
            }, n.contains = n.include = function(e, t) {
                return null != e && (E && e.indexOf === E ? -1 != e.indexOf(t) : g(e, function(e) {
                    return e === t
                }))
            }, n.delay = function(e, t) {
                var a = l.call(arguments, 2);
                return setTimeout(function() {
                    return e.apply(null, a)
                }, t)
            }, n.defer = function(e) {
                return n.delay.apply(n, [e, 1].concat(l.call(arguments, 1)))
            }, n.throttle = function(e) {
                var t, a, n;
                return function() {
                    t || (t = !0, a = arguments, n = this, v.frame(function() {
                        t = !1, e.apply(n, a)
                    }))
                }
            }, n.debounce = function(e, t, a) {
                var i, d, o, c, l, r = function() {
                    var s = n.now() - c;
                    s < t ? i = setTimeout(r, t - s) : (i = null, a || (l = e.apply(o, d), o = d = null))
                };
                return function() {
                    o = this, d = arguments, c = n.now();
                    var s = a && !i;
                    return i || (i = setTimeout(r, t)), s && (l = e.apply(o, d), o = d = null), l
                }
            }, n.defaults = function(e) {
                if (!n.isObject(e)) return e;
                for (var t = 1, a = arguments.length; t < a; t++) {
                    var i = arguments[t];
                    for (var d in i) void 0 === e[d] && (e[d] = i[d])
                }
                return e
            }, n.keys = function(e) {
                if (!n.isObject(e)) return [];
                if (I) return I(e);
                var t = [];
                for (var a in e) n.has(e, a) && t.push(a);
                return t
            }, n.has = function(e, t) {
                return r.call(e, t)
            }, n.isObject = function(e) {
                return e === Object(e)
            }, n.now = Date.now || function() {
                return new Date().getTime()
            }, n.templateSettings = {
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: /<%=([\s\S]+?)%>/g,
                escape: /<%-([\s\S]+?)%>/g
            }, y = /(.)^/, b = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "\u2028": "u2028",
                "\u2029": "u2029"
            }, m = /\\|'|\r|\n|\u2028|\u2029/g, O = function(e) {
                return "\\" + b[e]
            }, _ = /^\s*(\w|\$)+\s*$/, n.template = function(e, t, a) {
                !t && a && (t = a);
                var i, d = RegExp([((t = n.defaults({}, t, n.templateSettings)).escape || y).source, (t.interpolate || y).source, (t.evaluate || y).source].join("|") + "|$", "g"),
                    o = 0,
                    c = "__p+='";
                e.replace(d, function(t, a, n, i, d) {
                    return c += e.slice(o, d).replace(m, O), o = d + t.length, a ? c += "'+\n((__t=(" + a + "))==null?'':_.escape(__t))+\n'" : n ? c += "'+\n((__t=(" + n + "))==null?'':__t)+\n'" : i && (c += "';\n" + i + "\n__p+='"), t
                }), c += "';\n";
                var l = t.variable;
                if (l) {
                    if (!_.test(l)) throw Error("variable is not a bare identifier: " + l)
                } else c = "with(obj||{}){\n" + c + "}\n", l = "obj";
                c = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + c + "return __p;\n";
                try {
                    i = Function(t.variable || "obj", "_", c)
                } catch (e) {
                    throw e.source = c, e
                }
                var r = function(e) {
                    return i.call(this, e, n)
                };
                return r.source = "function(" + l + "){\n" + c + "}", r
            }, e.exports = n
        },
      
        322: function(e, t, a) {
            "use strict";
            var n = a(3949);
            n.define("edit", e.exports = function(e, t, a) {
                if (a = a || {}, (n.env("test") || n.env("frame")) && !a.fixture && ! function() {
                        try {
                            return !!(window.top.__Cypress__ || window.PLAYWRIGHT_TEST)
                        } catch (e) {
                            return !1
                        }
                    }()) return {
                    exit: 1
                };
                var i, d = e(window),
                    o = e(document.documentElement),
                    c = document.location,
                    l = "hashchange",
                    r = a.load || function() {
                        var t, a, n;
                        i = !0, window.WebflowEditor = !0, d.off(l, u), t = function(t) {
                            var a;
                            e.ajax({
                                url: p("https://editor-api.webflow.com/api/editor/view"),
                                data: {
                                    siteId: o.attr("data-wf-site")
                                },
                                xhrFields: {
                                    withCredentials: !0
                                },
                                dataType: "json",
                                crossDomain: !0,
                                success: (a = t, function(t) {
                                    var n, i, d;
                                    if (!t) return void console.error("Could not load editor data");
                                    t.thirdPartyCookiesSupported = a, i = (n = t.scriptPath).indexOf("//") >= 0 ? n : p("https://editor-api.webflow.com" + n), d = function() {
                                        window.WebflowEditor(t)
                                    }, e.ajax({
                                        type: "GET",
                                        url: i,
                                        dataType: "script",
                                        cache: !0
                                    }).then(d, f)
                                })
                            })
                        }, (a = window.document.createElement("iframe")).src = "https://webflow.com/site/third-party-cookie-check.html", a.style.display = "none", a.sandbox = "allow-scripts allow-same-origin", n = function(e) {
                            "WF_third_party_cookies_unsupported" === e.data ? (E(a, n), t(!1)) : "WF_third_party_cookies_supported" === e.data && (E(a, n), t(!0))
                        }, a.onerror = function() {
                            E(a, n), t(!1)
                        }, window.addEventListener("message", n, !1), window.document.body.appendChild(a)
                    },
                    s = !1;
                try {
                    s = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor")
                } catch (e) {}

                function u() {
                    !i && /\?edit/.test(c.hash) && r()
                }

                function f(e, t, a) {
                    throw console.error("Could not load editor script: " + t), a
                }

                function p(e) {
                    return e.replace(/([^:])\/\//g, "$1/")
                }

                function E(e, t) {
                    window.removeEventListener("message", t, !1), e.remove()
                }
                return s ? r() : c.search ? (/[?&](edit)(?:[=&?]|$)/.test(c.search) || /\?edit$/.test(c.href)) && r() : d.on(l, u).triggerHandler(l), {}
            })
        },
        2338: function(e, t, a) {
            "use strict";
            a(3949).define("focus-visible", e.exports = function() {
                return {
                    ready: function() {
                        if ("undefined" != typeof document) try {
                            document.querySelector(":focus-visible")
                        } catch (e) {
                            ! function(e) {
                                var t = !0,
                                    a = !1,
                                    n = null,
                                    i = {
                                        text: !0,
                                        search: !0,
                                        url: !0,
                                        tel: !0,
                                        email: !0,
                                        password: !0,
                                        number: !0,
                                        date: !0,
                                        month: !0,
                                        week: !0,
                                        time: !0,
                                        datetime: !0,
                                        "datetime-local": !0
                                    };

                                function d(e) {
                                    return !!e && e !== document && "HTML" !== e.nodeName && "BODY" !== e.nodeName && "classList" in e && "contains" in e.classList
                                }

                                function o(e) {
                                    e.getAttribute("data-wf-focus-visible") || e.setAttribute("data-wf-focus-visible", "true")
                                }

                                function c() {
                                    t = !1
                                }

                                function l() {
                                    document.addEventListener("mousemove", r), document.addEventListener("mousedown", r), document.addEventListener("mouseup", r), document.addEventListener("pointermove", r), document.addEventListener("pointerdown", r), document.addEventListener("pointerup", r), document.addEventListener("touchmove", r), document.addEventListener("touchstart", r), document.addEventListener("touchend", r)
                                }

                                function r(e) {
                                    e.target.nodeName && "html" === e.target.nodeName.toLowerCase() || (t = !1, document.removeEventListener("mousemove", r), document.removeEventListener("mousedown", r), document.removeEventListener("mouseup", r), document.removeEventListener("pointermove", r), document.removeEventListener("pointerdown", r), document.removeEventListener("pointerup", r), document.removeEventListener("touchmove", r), document.removeEventListener("touchstart", r), document.removeEventListener("touchend", r))
                                }
                                document.addEventListener("keydown", function(a) {
                                    a.metaKey || a.altKey || a.ctrlKey || (d(e.activeElement) && o(e.activeElement), t = !0)
                                }, !0), document.addEventListener("mousedown", c, !0), document.addEventListener("pointerdown", c, !0), document.addEventListener("touchstart", c, !0), document.addEventListener("visibilitychange", function() {
                                    "hidden" === document.visibilityState && (a && (t = !0), l())
                                }, !0), l(), e.addEventListener("focus", function(e) {
                                    if (d(e.target)) {
                                        var a, n, c;
                                        (t || (n = (a = e.target).type, "INPUT" === (c = a.tagName) && i[n] && !a.readOnly || "TEXTAREA" === c && !a.readOnly || a.isContentEditable || 0)) && o(e.target)
                                    }
                                }, !0), e.addEventListener("blur", function(e) {
                                    if (d(e.target) && e.target.hasAttribute("data-wf-focus-visible")) {
                                        var t;
                                        a = !0, window.clearTimeout(n), n = window.setTimeout(function() {
                                            a = !1
                                        }, 100), (t = e.target).getAttribute("data-wf-focus-visible") && t.removeAttribute("data-wf-focus-visible")
                                    }
                                }, !0)
                            }(document)
                        }
                    }
                }
            })
        },
        8334: function(e, t, a) {
            "use strict";
            var n = a(3949);
            n.define("focus", e.exports = function() {
                var e = [],
                    t = !1;

                function a(a) {
                    t && (a.preventDefault(), a.stopPropagation(), a.stopImmediatePropagation(), e.unshift(a))
                }

                function i(a) {
                    var n, i;
                    i = (n = a.target).tagName, (/^a$/i.test(i) && null != n.href || /^(button|textarea)$/i.test(i) && !0 !== n.disabled || /^input$/i.test(i) && /^(button|reset|submit|radio|checkbox)$/i.test(n.type) && !n.disabled || !/^(button|input|textarea|select|a)$/i.test(i) && !Number.isNaN(Number.parseFloat(n.tabIndex)) || /^audio$/i.test(i) || /^video$/i.test(i) && !0 === n.controls) && (t = !0, setTimeout(() => {
                        for (t = !1, a.target.focus(); e.length > 0;) {
                            var n = e.pop();
                            n.target.dispatchEvent(new MouseEvent(n.type, n))
                        }
                    }, 0))
                }
                return {
                    ready: function() {
                        "undefined" != typeof document && document.body.hasAttribute("data-wf-focus-within") && n.env.safari && (document.addEventListener("mousedown", i, !0), document.addEventListener("mouseup", a, !0), document.addEventListener("click", a, !0))
                    }
                }
            })
        },
        7199: function(e) {
            "use strict";
            var t = window.jQuery,
                a = {},
                n = [],
                i = ".w-ix",
                d = {
                    reset: function(e, t) {
                        t.__wf_intro = null
                    },
                    intro: function(e, n) {
                        n.__wf_intro || (n.__wf_intro = !0, t(n).triggerHandler(a.types.INTRO))
                    },
                    outro: function(e, n) {
                        n.__wf_intro && (n.__wf_intro = null, t(n).triggerHandler(a.types.OUTRO))
                    }
                };
            a.triggers = {}, a.types = {
                INTRO: "w-ix-intro" + i,
                OUTRO: "w-ix-outro" + i
            }, a.init = function() {
                for (var e = n.length, i = 0; i < e; i++) {
                    var o = n[i];
                    o[0](0, o[1])
                }
                n = [], t.extend(a.triggers, d)
            }, a.async = function() {
                for (var e in d) {
                    var t = d[e];
                    d.hasOwnProperty(e) && (a.triggers[e] = function(e, a) {
                        n.push([t, a])
                    })
                }
            }, a.async(), e.exports = a
        },
        5134: function(e, t, a) {
            "use strict";
            var n = a(7199);

            function i(e, t) {
                var a = document.createEvent("CustomEvent");
                a.initCustomEvent(t, !0, !0, null), e.dispatchEvent(a)
            }
            var d = window.jQuery,
                o = {},
                c = ".w-ix";
            o.triggers = {}, o.types = {
                INTRO: "w-ix-intro" + c,
                OUTRO: "w-ix-outro" + c
            }, d.extend(o.triggers, {
                reset: function(e, t) {
                    n.triggers.reset(e, t)
                },
                intro: function(e, t) {
                    n.triggers.intro(e, t), i(t, "COMPONENT_ACTIVE")
                },
                outro: function(e, t) {
                    n.triggers.outro(e, t), i(t, "COMPONENT_INACTIVE")
                }
            }), e.exports = o
        },
        941: function(e, t, a) {
            "use strict";
            var n = a(3949),
                i = a(6011);
            i.setEnv(n.env), n.define("ix2", e.exports = function() {
                return i
            })
        },
        3949: function(e, t, a) {
            "use strict";
            var n, i, d = {},
                o = {},
                c = [],
                l = window.Webflow || [],
                r = window.jQuery,
                s = r(window),
                u = r(document),
                f = r.isFunction,
                p = d._ = a(5756),
                E = d.tram = a(5487) && r.tram,
                I = !1,
                T = !1;

            function g(e) {
                d.env() && (f(e.design) && s.on("__wf_design", e.design), f(e.preview) && s.on("__wf_preview", e.preview)), f(e.destroy) && s.on("__wf_destroy", e.destroy), e.ready && f(e.ready) && function(e) {
                    if (I) return e.ready();
                    p.contains(c, e.ready) || c.push(e.ready)
                }(e)
            }

            function y(e) {
                var t;
                f(e.design) && s.off("__wf_design", e.design), f(e.preview) && s.off("__wf_preview", e.preview), f(e.destroy) && s.off("__wf_destroy", e.destroy), e.ready && f(e.ready) && (t = e, c = p.filter(c, function(e) {
                    return e !== t.ready
                }))
            }
            E.config.hideBackface = !1, E.config.keepInherited = !0, d.define = function(e, t, a) {
                o[e] && y(o[e]);
                var n = o[e] = t(r, p, a) || {};
                return g(n), n
            }, d.require = function(e) {
                return o[e]
            }, d.push = function(e) {
                if (I) {
                    f(e) && e();
                    return
                }
                l.push(e)
            }, d.env = function(e) {
                var t = window.__wf_design,
                    a = void 0 !== t;
                return e ? "design" === e ? a && t : "preview" === e ? a && !t : "slug" === e ? a && window.__wf_slug : "editor" === e ? window.WebflowEditor : "test" === e ? window.__wf_test : "frame" === e ? window !== window.top : void 0 : a
            };
            var b = navigator.userAgent.toLowerCase(),
                m = d.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
                O = d.env.chrome = /chrome/.test(b) && /Google/.test(navigator.vendor) && parseInt(b.match(/chrome\/(\d+)\./)[1], 10),
                _ = d.env.ios = /(ipod|iphone|ipad)/.test(b);
            d.env.safari = /safari/.test(b) && !O && !_, m && u.on("touchstart mousedown", function(e) {
                n = e.target
            }), d.validClick = m ? function(e) {
                return e === n || r.contains(e, n)
            } : function() {
                return !0
            };
            var R = "resize.webflow orientationchange.webflow load.webflow",
                v = "scroll.webflow " + R;

            function L(e, t) {
                var a = [],
                    n = {};
                return n.up = p.throttle(function(e) {
                    p.each(a, function(t) {
                        t(e)
                    })
                }), e && t && e.on(t, n.up), n.on = function(e) {
                    "function" == typeof e && (p.contains(a, e) || a.push(e))
                }, n.off = function(e) {
                    if (!arguments.length) {
                        a = [];
                        return
                    }
                    a = p.filter(a, function(t) {
                        return t !== e
                    })
                }, n
            }

            function N(e) {
                f(e) && e()
            }

            function A() {
                i && (i.reject(), s.off("load", i.resolve)), i = new r.Deferred, s.on("load", i.resolve)
            }
            d.resize = L(s, R), d.scroll = L(s, v), d.redraw = L(), d.location = function(e) {
                window.location = e
            }, d.env() && (d.location = function() {}), d.ready = function() {
                I = !0, T ? (T = !1, p.each(o, g)) : p.each(c, N), p.each(l, N), d.resize.up()
            }, d.load = function(e) {
                i.then(e)
            }, d.destroy = function(e) {
                e = e || {}, T = !0, s.triggerHandler("__wf_destroy"), null != e.domready && (I = e.domready), p.each(o, y), d.resize.off(), d.scroll.off(), d.redraw.off(), c = [], l = [], "pending" === i.state() && A()
            }, r(d.ready), A(), e.exports = window.Webflow = d
        },
        7624: function(e, t, a) {
            "use strict";
            var n = a(3949);
            n.define("links", e.exports = function(e, t) {
                var a, i, d, o = {},
                    c = e(window),
                    l = n.env(),
                    r = window.location,
                    s = document.createElement("a"),
                    u = "w--current",
                    f = /index\.(html|php)$/,
                    p = /\/$/;

                function E() {
                    var e = c.scrollTop(),
                        a = c.height();
                    t.each(i, function(t) {
                        if (!t.link.attr("hreflang")) {
                            var n = t.link,
                                i = t.sec,
                                d = i.offset().top,
                                o = i.outerHeight(),
                                c = .5 * a,
                                l = i.is(":visible") && d + o - c >= e && d + c <= e + a;
                            t.active !== l && (t.active = l, I(n, u, l))
                        }
                    })
                }

                function I(e, t, a) {
                    var n = e.hasClass(t);
                    (!a || !n) && (a || n) && (a ? e.addClass(t) : e.removeClass(t))
                }
                return o.ready = o.design = o.preview = function() {
                    a = l && n.env("design"), d = n.env("slug") || r.pathname || "", n.scroll.off(E), i = [];
                    for (var t = document.links, o = 0; o < t.length; ++o) ! function(t) {
                        if (!t.getAttribute("hreflang")) {
                            var n = a && t.getAttribute("href-disabled") || t.getAttribute("href");
                            if (s.href = n, !(n.indexOf(":") >= 0)) {
                                var o = e(t);
                                if (s.hash.length > 1 && s.host + s.pathname === r.host + r.pathname) {
                                    if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
                                    var c = e(s.hash);
                                    c.length && i.push({
                                        link: o,
                                        sec: c,
                                        active: !1
                                    });
                                    return
                                }
                                "#" !== n && "" !== n && I(o, u, s.href === r.href || n === d || f.test(n) && p.test(d))
                            }
                        }
                    }(t[o]);
                    i.length && (n.scroll.on(E), E())
                }, o
            })
        },
        286: function(e, t, a) {
            "use strict";
            var n = a(3949);
            n.define("scroll", e.exports = function(e) {
                var t = {
                        WF_CLICK_EMPTY: "click.wf-empty-link",
                        WF_CLICK_SCROLL: "click.wf-scroll"
                    },
                    a = window.location,
                    i = ! function() {
                        try {
                            return !!window.frameElement
                        } catch (e) {
                            return !0
                        }
                    }() ? window.history : null,
                    d = e(window),
                    o = e(document),
                    c = e(document.body),
                    l = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(e) {
                        window.setTimeout(e, 15)
                    },
                    r = n.env("editor") ? ".w-editor-body" : "body",
                    s = "header, " + r + " > .header, " + r + " > .w-nav:not([data-no-scroll])",
                    u = 'a[href="#"]',
                    f = 'a[href*="#"]:not(.w-tab-link):not(' + u + ")",
                    p = document.createElement("style");
                p.appendChild(document.createTextNode('.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}'));
                var E = /^#[a-zA-Z0-9][\w:.-]*$/;
                let I = "function" == typeof window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)");

                function T(e, t) {
                    var a;
                    switch (t) {
                        case "add":
                            (a = e.attr("tabindex")) ? e.attr("data-wf-tabindex-swap", a): e.attr("tabindex", "-1");
                            break;
                        case "remove":
                            (a = e.attr("data-wf-tabindex-swap")) ? (e.attr("tabindex", a), e.removeAttr("data-wf-tabindex-swap")) : e.removeAttr("tabindex")
                    }
                    e.toggleClass("wf-force-outline-none", "add" === t)
                }

                function g(t) {
                    var o = t.currentTarget;
                    if (!(n.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(o.className))) {
                        var r = E.test(o.hash) && o.host + o.pathname === a.host + a.pathname ? o.hash : "";
                        if ("" !== r) {
                            var u, f = e(r);
                            f.length && (t && (t.preventDefault(), t.stopPropagation()), u = r, a.hash !== u && i && i.pushState && !(n.env.chrome && "file:" === a.protocol) && (i.state && i.state.hash) !== u && i.pushState({
                                hash: u
                            }, "", u), window.setTimeout(function() {
                                ! function(t, a) {
                                    var n = d.scrollTop(),
                                        i = function(t) {
                                            var a = e(s),
                                                n = "fixed" === a.css("position") ? a.outerHeight() : 0,
                                                i = t.offset().top - n;
                                            if ("mid" === t.data("scroll")) {
                                                var o = d.height() - n,
                                                    c = t.outerHeight();
                                                c < o && (i -= Math.round((o - c) / 2))
                                            }
                                            return i
                                        }(t);
                                    if (n !== i) {
                                        var o = function(e, t, a) {
                                                if ("none" === document.body.getAttribute("data-wf-scroll-motion") || I.matches) return 0;
                                                var n = 1;
                                                return c.add(e).each(function(e, t) {
                                                    var a = parseFloat(t.getAttribute("data-scroll-time"));
                                                    !isNaN(a) && a >= 0 && (n = a)
                                                }), (472.143 * Math.log(Math.abs(t - a) + 125) - 2e3) * n
                                            }(t, n, i),
                                            r = Date.now(),
                                            u = function() {
                                                var e, t, d, c, s, f = Date.now() - r;
                                                window.scroll(0, (e = n, t = i, (d = f) > (c = o) ? t : e + (t - e) * ((s = d / c) < .5 ? 4 * s * s * s : (s - 1) * (2 * s - 2) * (2 * s - 2) + 1))), f <= o ? l(u) : "function" == typeof a && a()
                                            };
                                        l(u)
                                    }
                                }(f, function() {
                                    T(f, "add"), f.get(0).focus({
                                        preventScroll: !0
                                    }), T(f, "remove")
                                })
                            }, 300 * !t))
                        }
                    }
                }
                return {
                    ready: function() {
                        var {
                            WF_CLICK_EMPTY: e,
                            WF_CLICK_SCROLL: a
                        } = t;
                        o.on(a, f, g), o.on(e, u, function(e) {
                            e.preventDefault()
                        }), document.head.insertBefore(p, document.head.firstChild)
                    }
                }
            })
        },
        3695: function(e, t, a) {
            "use strict";
            a(3949).define("touch", e.exports = function(e) {
                var t = {},
                    a = window.getSelection;

                function n(t) {
                    var n, i, d = !1,
                        o = !1,
                        c = Math.min(Math.round(.04 * window.innerWidth), 40);

                    function l(e) {
                        var t = e.touches;
                        t && t.length > 1 || (d = !0, t ? (o = !0, n = t[0].clientX) : n = e.clientX, i = n)
                    }

                    function r(t) {
                        if (d) {
                            if (o && "mousemove" === t.type) {
                                t.preventDefault(), t.stopPropagation();
                                return
                            }
                            var n, l, r, s, f = t.touches,
                                p = f ? f[0].clientX : t.clientX,
                                E = p - i;
                            i = p, Math.abs(E) > c && a && "" === String(a()) && (n = "swipe", l = t, r = {
                                direction: E > 0 ? "right" : "left"
                            }, s = e.Event(n, {
                                originalEvent: l
                            }), e(l.target).trigger(s, r), u())
                        }
                    }

                    function s(e) {
                        if (d && (d = !1, o && "mouseup" === e.type)) {
                            e.preventDefault(), e.stopPropagation(), o = !1;
                            return
                        }
                    }

                    function u() {
                        d = !1
                    }
                    t.addEventListener("touchstart", l, !1), t.addEventListener("touchmove", r, !1), t.addEventListener("touchend", s, !1), t.addEventListener("touchcancel", u, !1), t.addEventListener("mousedown", l, !1), t.addEventListener("mousemove", r, !1), t.addEventListener("mouseup", s, !1), t.addEventListener("mouseout", u, !1), this.destroy = function() {
                        t.removeEventListener("touchstart", l, !1), t.removeEventListener("touchmove", r, !1), t.removeEventListener("touchend", s, !1), t.removeEventListener("touchcancel", u, !1), t.removeEventListener("mousedown", l, !1), t.removeEventListener("mousemove", r, !1), t.removeEventListener("mouseup", s, !1), t.removeEventListener("mouseout", u, !1), t = null
                    }
                }
                return e.event.special.tap = {
                    bindType: "click",
                    delegateType: "click"
                }, t.init = function(t) {
                    return (t = "string" == typeof t ? e(t).get(0) : t) ? new n(t) : null
                }, t.instance = t.init(document), t
            })
        },
        6524: function(e, t) {
            "use strict";

            function a(e, t, a, n, i, d, o, c, l, r, s, u, f) {
                return function(p) {
                    e(p);
                    var E = p.form,
                        I = {
                            name: E.attr("data-name") || E.attr("name") || "Untitled Form",
                            pageId: E.attr("data-wf-page-id") || "",
                            elementId: E.attr("data-wf-element-id") || "",
                            domain: u("html").attr("data-wf-domain") || null,
                            source: t.href,
                            test: a.env(),
                            fields: {},
                            fileUploads: {},
                            dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(E.html()),
                            trackingCookies: n()
                        };
                    let T = E.attr("data-wf-flow");
                    T && (I.wfFlow = T);
                    let g = E.attr("data-wf-locale-id");
                    g && (I.localeId = g), i(p);
                    var y = d(E, I.fields);
                    return y ? o(y) : (I.fileUploads = c(E), l(p), r) ? void u.ajax({
                        url: f,
                        type: "POST",
                        data: I,
                        dataType: "json",
                        crossDomain: !0
                    }).done(function(e) {
                        e && 200 === e.code && (p.success = !0), s(p)
                    }).fail(function() {
                        s(p)
                    }) : void s(p)
                }
            }
            Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return a
                }
            })
        },
        7527: function(e, t, a) {
            "use strict";
            var n = a(3949);
            let i = (e, t, a, n) => {
                let i = document.createElement("div");
                t.appendChild(i), turnstile.render(i, {
                    sitekey: e,
                    callback: function(e) {
                        a(e)
                    },
                    "error-callback": function() {
                        n()
                    }
                })
            };
            n.define("forms", e.exports = function(e, t) {
                let d, o = "TURNSTILE_LOADED";
                var c, l, r, s, u, f = {},
                    p = e(document),
                    E = window.location,
                    I = window.XDomainRequest && !window.atob,
                    T = ".w-form",
                    g = /e(-)?mail/i,
                    y = /^\S+@\S+$/,
                    b = window.alert,
                    m = n.env();
                let O = p.find("[data-turnstile-sitekey]").data("turnstile-sitekey");
                var _ = /list-manage[1-9]?.com/i,
                    R = t.debounce(function() {
                        console.warn("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.")
                    }, 100);

                function v(t, d) {
                    var c = e(d),
                        r = e.data(d, T);
                    r || (r = e.data(d, T, {
                        form: c
                    })), L(r);
                    var f = c.closest("div.w-form");
                    r.done = f.find("> .w-form-done"), r.fail = f.find("> .w-form-fail"), r.fileUploads = f.find(".w-file-upload"), r.fileUploads.each(function(t) {
                        ! function(t, a) {
                            if (a.fileUploads && a.fileUploads[t]) {
                                var n, i = e(a.fileUploads[t]),
                                    d = i.find("> .w-file-upload-default"),
                                    o = i.find("> .w-file-upload-uploading"),
                                    c = i.find("> .w-file-upload-success"),
                                    l = i.find("> .w-file-upload-error"),
                                    r = d.find(".w-file-upload-input"),
                                    s = d.find(".w-file-upload-label"),
                                    f = s.children(),
                                    p = l.find(".w-file-upload-error-msg"),
                                    E = c.find(".w-file-upload-file"),
                                    I = c.find(".w-file-remove-link"),
                                    T = E.find(".w-file-upload-file-name"),
                                    g = p.attr("data-w-size-error"),
                                    y = p.attr("data-w-type-error"),
                                    b = p.attr("data-w-generic-error");
                                if (m || s.on("click keydown", function(e) {
                                        ("keydown" !== e.type || 13 === e.which || 32 === e.which) && (e.preventDefault(), r.click())
                                    }), s.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"), I.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"), m) r.on("click", function(e) {
                                    e.preventDefault()
                                }), s.on("click", function(e) {
                                    e.preventDefault()
                                }), f.on("click", function(e) {
                                    e.preventDefault()
                                });
                                else {
                                    I.on("click keydown", function(e) {
                                        if ("keydown" === e.type) {
                                            if (13 !== e.which && 32 !== e.which) return;
                                            e.preventDefault()
                                        }
                                        r.removeAttr("data-value"), r.val(""), T.html(""), d.toggle(!0), c.toggle(!1), s.focus()
                                    }), r.on("change", function(i) {
                                        var c, r, s;
                                        (n = i.target && i.target.files && i.target.files[0]) && (d.toggle(!1), l.toggle(!1), o.toggle(!0), o.focus(), T.text(n.name), A() || N(a), a.fileUploads[t].uploading = !0, c = n, r = R, s = new URLSearchParams({
                                            name: c.name,
                                            size: c.size
                                        }), e.ajax({
                                            type: "GET",
                                            url: `${u}?${s}`,
                                            crossDomain: !0
                                        }).done(function(e) {
                                            r(null, e)
                                        }).fail(function(e) {
                                            r(e)
                                        }))
                                    });
                                    var O = s.outerHeight();
                                    r.height(O), r.width(1)
                                }
                            }

                            function _(e) {
                                var n = e.responseJSON && e.responseJSON.msg,
                                    i = b;
                                "string" == typeof n && 0 === n.indexOf("InvalidFileTypeError") ? i = y : "string" == typeof n && 0 === n.indexOf("MaxFileSizeError") && (i = g), p.text(i), r.removeAttr("data-value"), r.val(""), o.toggle(!1), d.toggle(!0), l.toggle(!0), l.focus(), a.fileUploads[t].uploading = !1, A() || L(a)
                            }

                            function R(t, a) {
                                if (t) return _(t);
                                var i = a.fileName,
                                    d = a.postData,
                                    o = a.fileId,
                                    c = a.s3Url;
                                r.attr("data-value", o),
                                    function(t, a, n, i, d) {
                                        var o = new FormData;
                                        for (var c in a) o.append(c, a[c]);
                                        o.append("file", n, i), e.ajax({
                                            type: "POST",
                                            url: t,
                                            data: o,
                                            processData: !1,
                                            contentType: !1
                                        }).done(function() {
                                            d(null)
                                        }).fail(function(e) {
                                            d(e)
                                        })
                                    }(c, d, n, i, v)
                            }

                            function v(e) {
                                if (e) return _(e);
                                o.toggle(!1), c.css("display", "inline-block"), c.focus(), a.fileUploads[t].uploading = !1, A() || L(a)
                            }

                            function A() {
                                return (a.fileUploads && a.fileUploads.toArray() || []).some(function(e) {
                                    return e.uploading
                                })
                            }
                        }(t, r)
                    }), O && (function(e) {
                        let t = e.btn || e.form.find(':input[type="submit"]');
                        e.btn || (e.btn = t), t.prop("disabled", !0), t.addClass("w-form-loading")
                    }(r), A(c, !0), p.on("undefined" != typeof turnstile ? "ready" : o, function() {
                        i(O, d, e => {
                            r.turnstileToken = e, L(r), A(c, !1)
                        }, () => {
                            L(r), r.btn && r.btn.prop("disabled", !0), A(c, !1)
                        })
                    }));
                    var I = r.form.attr("aria-label") || r.form.attr("data-name") || "Form";
                    r.done.attr("aria-label") || r.form.attr("aria-label", I), r.done.attr("tabindex", "-1"), r.done.attr("role", "region"), r.done.attr("aria-label") || r.done.attr("aria-label", I + " success"), r.fail.attr("tabindex", "-1"), r.fail.attr("role", "region"), r.fail.attr("aria-label") || r.fail.attr("aria-label", I + " failure");
                    var g = r.action = c.attr("action");
                    if (r.handler = null, r.redirect = c.attr("data-redirect"), _.test(g)) {
                        r.handler = U;
                        return
                    }
                    if (!g) {
                        if (l) {
                            r.handler = (0, a(6524).default)(L, E, n, M, G, S, b, h, N, l, V, e, s);
                            return
                        }
                        R()
                    }
                }

                function L(e) {
                    var t = e.btn = e.form.find(':input[type="submit"]');
                    e.wait = e.btn.attr("data-wait") || null, e.success = !1;
                    let a = !!(O && !e.turnstileToken);
                    t.prop("disabled", a), t.removeClass("w-form-loading"), e.label && t.val(e.label)
                }

                function N(e) {
                    var t = e.btn,
                        a = e.wait;
                    t.prop("disabled", !0), a && (e.label = t.val(), t.val(a))
                }

                function A(e, t) {
                    let a = e.closest(".w-form");
                    t ? a.addClass("w-form-loading") : a.removeClass("w-form-loading")
                }

                function S(t, a) {
                    var n = null;
                    return a = a || {}, t.find(':input:not([type="submit"]):not([type="file"]):not([type="button"])').each(function(i, d) {
                        var o, c, l, r, s, u = e(d),
                            f = u.attr("type"),
                            p = u.attr("data-name") || u.attr("name") || "Field " + (i + 1);
                        p = encodeURIComponent(p);
                        var E = u.val();
                        if ("checkbox" === f) E = u.is(":checked");
                        else if ("radio" === f) {
                            if (null === a[p] || "string" == typeof a[p]) return;
                            E = t.find('input[name="' + u.attr("name") + '"]:checked').val() || null
                        }
                        "string" == typeof E && (E = e.trim(E)), a[p] = E, n = n || (o = u, c = f, l = p, r = E, s = null, "password" === c ? s = "Passwords cannot be submitted." : o.attr("required") ? r ? g.test(o.attr("type")) && !y.test(r) && (s = "Please enter a valid email address for: " + l) : s = "Please fill out the required field: " + l : "g-recaptcha-response" !== l || r || (s = "Please confirm you're not a robot."), s)
                    }), n
                }

                function h(t) {
                    var a = {};
                    return t.find(':input[type="file"]').each(function(t, n) {
                        var i = e(n),
                            d = i.attr("data-name") || i.attr("name") || "File " + (t + 1),
                            o = i.attr("data-value");
                        "string" == typeof o && (o = e.trim(o)), a[d] = o
                    }), a
                }
                f.ready = f.design = f.preview = function() {
                    O && ((d = document.createElement("script")).src = "https://challenges.cloudflare.com/turnstile/v0/api.js", document.head.appendChild(d), d.onload = () => {
                        p.trigger(o)
                    }), s = "https://webflow.com/api/v1/form/" + (l = e("html").attr("data-wf-site")), I && s.indexOf("https://webflow.com") >= 0 && (s = s.replace("https://webflow.com", "https://formdata.webflow.com")), u = `${s}/signFile`, (c = e(T + " form")).length && c.each(v), (!m || n.env("preview")) && !r && function() {
                        r = !0, p.on("submit", T + " form", function(t) {
                            var a = e.data(this, T);
                            a.handler && (a.evt = t, a.handler(a))
                        });
                        let t = ".w-checkbox-input",
                            a = ".w-radio-input",
                            n = "w--redirected-checked",
                            i = "w--redirected-focus",
                            d = "w--redirected-focus-visible",
                            o = [
                                ["checkbox", t],
                                ["radio", a]
                            ];
                        p.on("change", T + ' form input[type="checkbox"]:not(' + t + ")", a => {
                            e(a.target).siblings(t).toggleClass(n)
                        }), p.on("change", T + ' form input[type="radio"]', i => {
                            e(`input[name="${i.target.name}"]:not(${t})`).map((t, i) => e(i).siblings(a).removeClass(n));
                            let d = e(i.target);
                            d.hasClass("w-radio-input") || d.siblings(a).addClass(n)
                        }), o.forEach(([t, a]) => {
                            p.on("focus", T + ` form input[type="${t}"]:not(` + a + ")", t => {
                                e(t.target).siblings(a).addClass(i), e(t.target).filter(":focus-visible, [data-wf-focus-visible]").siblings(a).addClass(d)
                            }), p.on("blur", T + ` form input[type="${t}"]:not(` + a + ")", t => {
                                e(t.target).siblings(a).removeClass(`${i} ${d}`)
                            })
                        })
                    }()
                };
                let C = {
                    _mkto_trk: "marketo"
                };

                function M() {
                    return document.cookie.split("; ").reduce(function(e, t) {
                        let a = t.split("="),
                            n = a[0];
                        if (n in C) {
                            let t = C[n],
                                i = a.slice(1).join("=");
                            e[t] = i
                        }
                        return e
                    }, {})
                }

                function U(a) {
                    L(a);
                    var n, i = a.form,
                        d = {};
                    if (/^https/.test(E.href) && !/^https/.test(a.action)) return void i.attr("method", "post");
                    G(a);
                    var o = S(i, d);
                    if (o) return b(o);
                    N(a), t.each(d, function(e, t) {
                        g.test(t) && (d.EMAIL = e), /^((full[ _-]?)?name)$/i.test(t) && (n = e), /^(first[ _-]?name)$/i.test(t) && (d.FNAME = e), /^(last[ _-]?name)$/i.test(t) && (d.LNAME = e)
                    }), n && !d.FNAME && (d.FNAME = (n = n.split(" "))[0], d.LNAME = d.LNAME || n[1]);
                    var c = a.action.replace("/post?", "/post-json?") + "&c=?",
                        l = c.indexOf("u=") + 2;
                    l = c.substring(l, c.indexOf("&", l));
                    var r = c.indexOf("id=") + 3;
                    d["b_" + l + "_" + (r = c.substring(r, c.indexOf("&", r)))] = "", e.ajax({
                        url: c,
                        data: d,
                        dataType: "jsonp"
                    }).done(function(e) {
                        a.success = "success" === e.result || /already/.test(e.msg), a.success || console.info("MailChimp error: " + e.msg), V(a)
                    }).fail(function() {
                        V(a)
                    })
                }

                function V(e) {
                    var t = e.form,
                        a = e.redirect,
                        i = e.success;
                    if (i && a) return void n.location(a);
                    e.done.toggle(i), e.fail.toggle(!i), i ? e.done.focus() : e.fail.focus(), t.toggle(!i), L(e)
                }

                function G(e) {
                    e.evt && e.evt.preventDefault(), e.evt = null
                }
                return f
            })
        },
        3946: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = {
                actionListPlaybackChanged: function() {
                    return W
                },
                animationFrameChanged: function() {
                    return F
                },
                clearRequested: function() {
                    return P
                },
                elementStateChanged: function() {
                    return H
                },
                eventListenerAdded: function() {
                    return k
                },
                eventStateChanged: function() {
                    return w
                },
                instanceAdded: function() {
                    return B
                },
                instanceRemoved: function() {
                    return Y
                },
                instanceStarted: function() {
                    return X
                },
                mediaQueriesDefined: function() {
                    return Q
                },
                parameterChanged: function() {
                    return D
                },
                playbackRequested: function() {
                    return V
                },
                previewRequested: function() {
                    return U
                },
                rawDataImported: function() {
                    return S
                },
                sessionInitialized: function() {
                    return h
                },
                sessionStarted: function() {
                    return C
                },
                sessionStopped: function() {
                    return M
                },
                stopRequested: function() {
                    return G
                },
                testFrameRendered: function() {
                    return x
                },
                viewportWidthChanged: function() {
                    return z
                }
            };
            for (var i in n) Object.defineProperty(t, i, {
                enumerable: !0,
                get: n[i]
            });
            let d = a(7087),
                o = a(9468),
                {
                    IX2_RAW_DATA_IMPORTED: c,
                    IX2_SESSION_INITIALIZED: l,
                    IX2_SESSION_STARTED: r,
                    IX2_SESSION_STOPPED: s,
                    IX2_PREVIEW_REQUESTED: u,
                    IX2_PLAYBACK_REQUESTED: f,
                    IX2_STOP_REQUESTED: p,
                    IX2_CLEAR_REQUESTED: E,
                    IX2_EVENT_LISTENER_ADDED: I,
                    IX2_TEST_FRAME_RENDERED: T,
                    IX2_EVENT_STATE_CHANGED: g,
                    IX2_ANIMATION_FRAME_CHANGED: y,
                    IX2_PARAMETER_CHANGED: b,
                    IX2_INSTANCE_ADDED: m,
                    IX2_INSTANCE_STARTED: O,
                    IX2_INSTANCE_REMOVED: _,
                    IX2_ELEMENT_STATE_CHANGED: R,
                    IX2_ACTION_LIST_PLAYBACK_CHANGED: v,
                    IX2_VIEWPORT_WIDTH_CHANGED: L,
                    IX2_MEDIA_QUERIES_DEFINED: N
                } = d.IX2EngineActionTypes,
                {
                    reifyState: A
                } = o.IX2VanillaUtils,
                S = e => ({
                    type: c,
                    payload: {
                        ...A(e)
                    }
                }),
                h = ({
                    hasBoundaryNodes: e,
                    reducedMotion: t
                }) => ({
                    type: l,
                    payload: {
                        hasBoundaryNodes: e,
                        reducedMotion: t
                    }
                }),
                C = () => ({
                    type: r
                }),
                M = () => ({
                    type: s
                }),
                U = ({
                    rawData: e,
                    defer: t
                }) => ({
                    type: u,
                    payload: {
                        defer: t,
                        rawData: e
                    }
                }),
                V = ({
                    actionTypeId: e = d.ActionTypeConsts.GENERAL_START_ACTION,
                    actionListId: t,
                    actionItemId: a,
                    eventId: n,
                    allowEvents: i,
                    immediate: o,
                    testManual: c,
                    verbose: l,
                    rawData: r
                }) => ({
                    type: f,
                    payload: {
                        actionTypeId: e,
                        actionListId: t,
                        actionItemId: a,
                        testManual: c,
                        eventId: n,
                        allowEvents: i,
                        immediate: o,
                        verbose: l,
                        rawData: r
                    }
                }),
                G = e => ({
                    type: p,
                    payload: {
                        actionListId: e
                    }
                }),
                P = () => ({
                    type: E
                }),
                k = (e, t) => ({
                    type: I,
                    payload: {
                        target: e,
                        listenerParams: t
                    }
                }),
                x = (e = 1) => ({
                    type: T,
                    payload: {
                        step: e
                    }
                }),
                w = (e, t) => ({
                    type: g,
                    payload: {
                        stateKey: e,
                        newState: t
                    }
                }),
                F = (e, t) => ({
                    type: y,
                    payload: {
                        now: e,
                        parameters: t
                    }
                }),
                D = (e, t) => ({
                    type: b,
                    payload: {
                        key: e,
                        value: t
                    }
                }),
                B = e => ({
                    type: m,
                    payload: {
                        ...e
                    }
                }),
                X = (e, t) => ({
                    type: O,
                    payload: {
                        instanceId: e,
                        time: t
                    }
                }),
                Y = e => ({
                    type: _,
                    payload: {
                        instanceId: e
                    }
                }),
                H = (e, t, a, n) => ({
                    type: R,
                    payload: {
                        elementId: e,
                        actionTypeId: t,
                        current: a,
                        actionItem: n
                    }
                }),
                W = ({
                    actionListId: e,
                    isPlaying: t
                }) => ({
                    type: v,
                    payload: {
                        actionListId: e,
                        isPlaying: t
                    }
                }),
                z = ({
                    width: e,
                    mediaQueries: t
                }) => ({
                    type: L,
                    payload: {
                        width: e,
                        mediaQueries: t
                    }
                }),
                Q = () => ({
                    type: N
                })
        },
        6011: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n, i = {
                actions: function() {
                    return r
                },
                destroy: function() {
                    return E
                },
                init: function() {
                    return p
                },
                setEnv: function() {
                    return f
                },
                store: function() {
                    return u
                }
            };
            for (var d in i) Object.defineProperty(t, d, {
                enumerable: !0,
                get: i[d]
            });
            let o = a(9516),
                c = (n = a(7243)) && n.__esModule ? n : {
                    default: n
                },
                l = a(1970),
                r = function(e, t) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var a = s(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = {
                            __proto__: null
                        },
                        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var d in e)
                        if ("default" !== d && Object.prototype.hasOwnProperty.call(e, d)) {
                            var o = i ? Object.getOwnPropertyDescriptor(e, d) : null;
                            o && (o.get || o.set) ? Object.defineProperty(n, d, o) : n[d] = e[d]
                        } return n.default = e, a && a.set(e, n), n
                }(a(3946));

            function s(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    a = new WeakMap;
                return (s = function(e) {
                    return e ? a : t
                })(e)
            }
            let u = (0, o.createStore)(c.default);

            function f(e) {
                e() && (0, l.observeRequests)(u)
            }

            function p(e) {
                E(), (0, l.startEngine)({
                    store: u,
                    rawData: e,
                    allowEvents: !0
                })
            }

            function E() {
                (0, l.stopEngine)(u)
            }
        },
        5012: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = {
                elementContains: function() {
                    return b
                },
                getChildElements: function() {
                    return O
                },
                getClosestElement: function() {
                    return R
                },
                getProperty: function() {
                    return E
                },
                getQuerySelector: function() {
                    return T
                },
                getRefType: function() {
                    return v
                },
                getSiblingElements: function() {
                    return _
                },
                getStyle: function() {
                    return p
                },
                getValidDocument: function() {
                    return g
                },
                isSiblingNode: function() {
                    return m
                },
                matchSelector: function() {
                    return I
                },
                queryDocument: function() {
                    return y
                },
                setStyle: function() {
                    return f
                }
            };
            for (var i in n) Object.defineProperty(t, i, {
                enumerable: !0,
                get: n[i]
            });
            let d = a(9468),
                o = a(7087),
                {
                    ELEMENT_MATCHES: c
                } = d.IX2BrowserSupport,
                {
                    IX2_ID_DELIMITER: l,
                    HTML_ELEMENT: r,
                    PLAIN_OBJECT: s,
                    WF_PAGE: u
                } = o.IX2EngineConstants;

            function f(e, t, a) {
                e.style[t] = a
            }

            function p(e, t) {
                return t.startsWith("--") ? window.getComputedStyle(document.documentElement).getPropertyValue(t) : e.style instanceof CSSStyleDeclaration ? e.style[t] : void 0
            }

            function E(e, t) {
                return e[t]
            }

            function I(e) {
                return t => t[c](e)
            }

            function T({
                id: e,
                selector: t
            }) {
                if (e) {
                    let t = e;
                    if (-1 !== e.indexOf(l)) {
                        let a = e.split(l),
                            n = a[0];
                        if (t = a[1], n !== document.documentElement.getAttribute(u)) return null
                    }
                    return `[data-w-id="${t}"], [data-w-id^="${t}_instance"]`
                }
                return t
            }

            function g(e) {
                return null == e || e === document.documentElement.getAttribute(u) ? document : null
            }

            function y(e, t) {
                return Array.prototype.slice.call(document.querySelectorAll(t ? e + " " + t : e))
            }

            function b(e, t) {
                return e.contains(t)
            }

            function m(e, t) {
                return e !== t && e.parentNode === t.parentNode
            }

            function O(e) {
                let t = [];
                for (let a = 0, {
                        length: n
                    } = e || []; a < n; a++) {
                    let {
                        children: n
                    } = e[a], {
                        length: i
                    } = n;
                    if (i)
                        for (let e = 0; e < i; e++) t.push(n[e])
                }
                return t
            }

            function _(e = []) {
                let t = [],
                    a = [];
                for (let n = 0, {
                        length: i
                    } = e; n < i; n++) {
                    let {
                        parentNode: i
                    } = e[n];
                    if (!i || !i.children || !i.children.length || -1 !== a.indexOf(i)) continue;
                    a.push(i);
                    let d = i.firstElementChild;
                    for (; null != d;) - 1 === e.indexOf(d) && t.push(d), d = d.nextElementSibling
                }
                return t
            }
            let R = Element.prototype.closest ? (e, t) => document.documentElement.contains(e) ? e.closest(t) : null : (e, t) => {
                if (!document.documentElement.contains(e)) return null;
                let a = e;
                do {
                    if (a[c] && a[c](t)) return a;
                    a = a.parentNode
                } while (null != a);
                return null
            };

            function v(e) {
                return null != e && "object" == typeof e ? e instanceof Element ? r : s : null
            }
        },
        1970: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = {
                observeRequests: function() {
                    return Z
                },
                startActionGroup: function() {
                    return eE
                },
                startEngine: function() {
                    return en
                },
                stopActionGroup: function() {
                    return ep
                },
                stopAllActionGroups: function() {
                    return ef
                },
                stopEngine: function() {
                    return ei
                }
            };
            for (var i in n) Object.defineProperty(t, i, {
                enumerable: !0,
                get: n[i]
            });
            let d = y(a(9777)),
                o = y(a(4738)),
                c = y(a(4659)),
                l = y(a(3452)),
                r = y(a(6633)),
                s = y(a(3729)),
                u = y(a(2397)),
                f = y(a(5082)),
                p = a(7087),
                E = a(9468),
                I = a(3946),
                T = function(e, t) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var a = b(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = {
                            __proto__: null
                        },
                        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var d in e)
                        if ("default" !== d && Object.prototype.hasOwnProperty.call(e, d)) {
                            var o = i ? Object.getOwnPropertyDescriptor(e, d) : null;
                            o && (o.get || o.set) ? Object.defineProperty(n, d, o) : n[d] = e[d]
                        } return n.default = e, a && a.set(e, n), n
                }(a(5012)),
                g = y(a(8955));

            function y(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function b(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    a = new WeakMap;
                return (b = function(e) {
                    return e ? a : t
                })(e)
            }
            let m = Object.keys(p.QuickEffectIds),
                O = e => m.includes(e),
                {
                    COLON_DELIMITER: _,
                    BOUNDARY_SELECTOR: R,
                    HTML_ELEMENT: v,
                    RENDER_GENERAL: L,
                    W_MOD_IX: N
                } = p.IX2EngineConstants,
                {
                    getAffectedElements: A,
                    getElementId: S,
                    getDestinationValues: h,
                    observeStore: C,
                    getInstanceId: M,
                    renderHTMLElement: U,
                    clearAllStyles: V,
                    getMaxDurationItemIndex: G,
                    getComputedStyle: P,
                    getInstanceOrigin: k,
                    reduceListToGroup: x,
                    shouldNamespaceEventParameter: w,
                    getNamespacedParameterId: F,
                    shouldAllowMediaQuery: D,
                    cleanupHTMLElement: B,
                    clearObjectCache: X,
                    stringifyTarget: Y,
                    mediaQueriesEqual: H,
                    shallowEqual: W
                } = E.IX2VanillaUtils,
                {
                    isPluginType: z,
                    createPluginInstance: Q,
                    getPluginDuration: j
                } = E.IX2VanillaPlugins,
                $ = navigator.userAgent,
                q = $.match(/iPad/i) || $.match(/iPhone/);

            function Z(e) {
                C({
                    store: e,
                    select: ({
                        ixRequest: e
                    }) => e.preview,
                    onChange: K
                }), C({
                    store: e,
                    select: ({
                        ixRequest: e
                    }) => e.playback,
                    onChange: ee
                }), C({
                    store: e,
                    select: ({
                        ixRequest: e
                    }) => e.stop,
                    onChange: et
                }), C({
                    store: e,
                    select: ({
                        ixRequest: e
                    }) => e.clear,
                    onChange: ea
                })
            }

            function K({
                rawData: e,
                defer: t
            }, a) {
                let n = () => {
                    en({
                        store: a,
                        rawData: e,
                        allowEvents: !0
                    }), J()
                };
                t ? setTimeout(n, 0) : n()
            }

            function J() {
                document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"))
            }

            function ee(e, t) {
                let {
                    actionTypeId: a,
                    actionListId: n,
                    actionItemId: i,
                    eventId: d,
                    allowEvents: o,
                    immediate: c,
                    testManual: l,
                    verbose: r = !0
                } = e, {
                    rawData: s
                } = e;
                if (n && i && s && c) {
                    let e = s.actionLists[n];
                    e && (s = x({
                        actionList: e,
                        actionItemId: i,
                        rawData: s
                    }))
                }
                if (en({
                        store: t,
                        rawData: s,
                        allowEvents: o,
                        testManual: l
                    }), n && a === p.ActionTypeConsts.GENERAL_START_ACTION || O(a)) {
                    ep({
                        store: t,
                        actionListId: n
                    }), eu({
                        store: t,
                        actionListId: n,
                        eventId: d
                    });
                    let e = eE({
                        store: t,
                        eventId: d,
                        actionListId: n,
                        immediate: c,
                        verbose: r
                    });
                    r && e && t.dispatch((0, I.actionListPlaybackChanged)({
                        actionListId: n,
                        isPlaying: !c
                    }))
                }
            }

            function et({
                actionListId: e
            }, t) {
                e ? ep({
                    store: t,
                    actionListId: e
                }) : ef({
                    store: t
                }), ei(t)
            }

            function ea(e, t) {
                ei(t), V({
                    store: t,
                    elementApi: T
                })
            }

            function en({
                store: e,
                rawData: t,
                allowEvents: a,
                testManual: n
            }) {
                let {
                    ixSession: i
                } = e.getState();
                if (t && e.dispatch((0, I.rawDataImported)(t)), !i.active) {
                    (e.dispatch((0, I.sessionInitialized)({
                        hasBoundaryNodes: !!document.querySelector(R),
                        reducedMotion: document.body.hasAttribute("data-wf-ix-vacation") && window.matchMedia("(prefers-reduced-motion)").matches
                    })), a) && (function(e) {
                        let {
                            ixData: t
                        } = e.getState(), {
                            eventTypeMap: a
                        } = t;
                        ec(e), (0, u.default)(a, (t, a) => {
                            let n = g.default[a];
                            if (!n) return void console.warn(`IX2 event type not configured: ${a}`);
                            ! function({
                                logic: e,
                                store: t,
                                events: a
                            }) {
                                ! function(e) {
                                    if (!q) return;
                                    let t = {},
                                        a = "";
                                    for (let n in e) {
                                        let {
                                            eventTypeId: i,
                                            target: d
                                        } = e[n], o = T.getQuerySelector(d);
                                        t[o] || (i === p.EventTypeConsts.MOUSE_CLICK || i === p.EventTypeConsts.MOUSE_SECOND_CLICK) && (t[o] = !0, a += o + "{cursor: pointer;touch-action: manipulation;}")
                                    }
                                    if (a) {
                                        let e = document.createElement("style");
                                        e.textContent = a, document.body.appendChild(e)
                                    }
                                }(a);
                                let {
                                    types: n,
                                    handler: i
                                } = e, {
                                    ixData: l
                                } = t.getState(), {
                                    actionLists: r
                                } = l, s = el(a, es);
                                if (!(0, c.default)(s)) return;
                                (0, u.default)(s, (e, n) => {
                                    let i = a[n],
                                        {
                                            action: c,
                                            id: s,
                                            mediaQueries: u = l.mediaQueryKeys
                                        } = i,
                                        {
                                            actionListId: f
                                        } = c.config;
                                    H(u, l.mediaQueryKeys) || t.dispatch((0, I.mediaQueriesDefined)()), c.actionTypeId === p.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION && (Array.isArray(i.config) ? i.config : [i.config]).forEach(a => {
                                        let {
                                            continuousParameterGroupId: n
                                        } = a, i = (0, o.default)(r, `${f}.continuousParameterGroups`, []), c = (0, d.default)(i, ({
                                            id: e
                                        }) => e === n), l = (a.smoothing || 0) / 100, u = (a.restingState || 0) / 100;
                                        c && e.forEach((e, n) => {
                                            ! function({
                                                store: e,
                                                eventStateKey: t,
                                                eventTarget: a,
                                                eventId: n,
                                                eventConfig: i,
                                                actionListId: d,
                                                parameterGroup: c,
                                                smoothing: l,
                                                restingValue: r
                                            }) {
                                                let {
                                                    ixData: s,
                                                    ixSession: u
                                                } = e.getState(), {
                                                    events: f
                                                } = s, E = f[n], {
                                                    eventTypeId: I
                                                } = E, g = {}, y = {}, b = [], {
                                                    continuousActionGroups: m
                                                } = c, {
                                                    id: O
                                                } = c;
                                                w(I, i) && (O = F(t, O));
                                                let v = u.hasBoundaryNodes && a ? T.getClosestElement(a, R) : null;
                                                m.forEach(e => {
                                                    let {
                                                        keyframe: t,
                                                        actionItems: n
                                                    } = e;
                                                    n.forEach(e => {
                                                        let {
                                                            actionTypeId: n
                                                        } = e, {
                                                            target: i
                                                        } = e.config;
                                                        if (!i) return;
                                                        let d = i.boundaryMode ? v : null,
                                                            o = Y(i) + _ + n;
                                                        if (y[o] = function(e = [], t, a) {
                                                                let n, i = [...e];
                                                                return i.some((e, a) => e.keyframe === t && (n = a, !0)), null == n && (n = i.length, i.push({
                                                                    keyframe: t,
                                                                    actionItems: []
                                                                })), i[n].actionItems.push(a), i
                                                            }(y[o], t, e), !g[o]) {
                                                            g[o] = !0;
                                                            let {
                                                                config: t
                                                            } = e;
                                                            A({
                                                                config: t,
                                                                event: E,
                                                                eventTarget: a,
                                                                elementRoot: d,
                                                                elementApi: T
                                                            }).forEach(e => {
                                                                b.push({
                                                                    element: e,
                                                                    key: o
                                                                })
                                                            })
                                                        }
                                                    })
                                                }), b.forEach(({
                                                    element: t,
                                                    key: a
                                                }) => {
                                                    let i = y[a],
                                                        c = (0, o.default)(i, "[0].actionItems[0]", {}),
                                                        {
                                                            actionTypeId: s
                                                        } = c,
                                                        u = (s === p.ActionTypeConsts.PLUGIN_RIVE ? 0 === (c.config?.target?.selectorGuids || []).length : z(s)) ? Q(s)?.(t, c) : null,
                                                        f = h({
                                                            element: t,
                                                            actionItem: c,
                                                            elementApi: T
                                                        }, u);
                                                    eI({
                                                        store: e,
                                                        element: t,
                                                        eventId: n,
                                                        actionListId: d,
                                                        actionItem: c,
                                                        destination: f,
                                                        continuous: !0,
                                                        parameterId: O,
                                                        actionGroups: i,
                                                        smoothing: l,
                                                        restingValue: r,
                                                        pluginInstance: u
                                                    })
                                                })
                                            }({
                                                store: t,
                                                eventStateKey: s + _ + n,
                                                eventTarget: e,
                                                eventId: s,
                                                eventConfig: a,
                                                actionListId: f,
                                                parameterGroup: c,
                                                smoothing: l,
                                                restingValue: u
                                            })
                                        })
                                    }), (c.actionTypeId === p.ActionTypeConsts.GENERAL_START_ACTION || O(c.actionTypeId)) && eu({
                                        store: t,
                                        actionListId: f,
                                        eventId: s
                                    })
                                });
                                let E = e => {
                                        let {
                                            ixSession: n
                                        } = t.getState();
                                        er(s, (d, o, c) => {
                                            let r = a[o],
                                                s = n.eventState[c],
                                                {
                                                    action: u,
                                                    mediaQueries: f = l.mediaQueryKeys
                                                } = r;
                                            if (!D(f, n.mediaQueryKey)) return;
                                            let E = (a = {}) => {
                                                let n = i({
                                                    store: t,
                                                    element: d,
                                                    event: r,
                                                    eventConfig: a,
                                                    nativeEvent: e,
                                                    eventStateKey: c
                                                }, s);
                                                W(n, s) || t.dispatch((0, I.eventStateChanged)(c, n))
                                            };
                                            u.actionTypeId === p.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION ? (Array.isArray(r.config) ? r.config : [r.config]).forEach(E) : E()
                                        })
                                    },
                                    g = (0, f.default)(E, 12),
                                    y = ({
                                        target: e = document,
                                        types: a,
                                        throttle: n
                                    }) => {
                                        a.split(" ").filter(Boolean).forEach(a => {
                                            let i = n ? g : E;
                                            e.addEventListener(a, i), t.dispatch((0, I.eventListenerAdded)(e, [a, i]))
                                        })
                                    };
                                Array.isArray(n) ? n.forEach(y) : "string" == typeof n && y(e)
                            }({
                                logic: n,
                                store: e,
                                events: t
                            })
                        });
                        let {
                            ixSession: n
                        } = e.getState();
                        n.eventListeners.length && function(e) {
                            let t = () => {
                                ec(e)
                            };
                            eo.forEach(a => {
                                window.addEventListener(a, t), e.dispatch((0, I.eventListenerAdded)(window, [a, t]))
                            }), t()
                        }(e)
                    }(e), function() {
                        let {
                            documentElement: e
                        } = document; - 1 === e.className.indexOf(N) && (e.className += ` ${N}`)
                    }(), e.getState().ixSession.hasDefinedMediaQueries && C({
                        store: e,
                        select: ({
                            ixSession: e
                        }) => e.mediaQueryKey,
                        onChange: () => {
                            ei(e), V({
                                store: e,
                                elementApi: T
                            }), en({
                                store: e,
                                allowEvents: !0
                            }), J()
                        }
                    }));
                    e.dispatch((0, I.sessionStarted)()),
                        function(e, t) {
                            let a = n => {
                                let {
                                    ixSession: i,
                                    ixParameters: d
                                } = e.getState();
                                if (i.active)
                                    if (e.dispatch((0, I.animationFrameChanged)(n, d)), t) {
                                        let t = C({
                                            store: e,
                                            select: ({
                                                ixSession: e
                                            }) => e.tick,
                                            onChange: e => {
                                                a(e), t()
                                            }
                                        })
                                    } else requestAnimationFrame(a)
                            };
                            a(window.performance.now())
                        }(e, n)
                }
            }

            function ei(e) {
                let {
                    ixSession: t
                } = e.getState();
                if (t.active) {
                    let {
                        eventListeners: a
                    } = t;
                    a.forEach(ed), X(), e.dispatch((0, I.sessionStopped)())
                }
            }

            function ed({
                target: e,
                listenerParams: t
            }) {
                e.removeEventListener.apply(e, t)
            }
            let eo = ["resize", "orientationchange"];

            function ec(e) {
                let {
                    ixSession: t,
                    ixData: a
                } = e.getState(), n = window.innerWidth;
                if (n !== t.viewportWidth) {
                    let {
                        mediaQueries: t
                    } = a;
                    e.dispatch((0, I.viewportWidthChanged)({
                        width: n,
                        mediaQueries: t
                    }))
                }
            }
            let el = (e, t) => (0, l.default)((0, s.default)(e, t), r.default),
                er = (e, t) => {
                    (0, u.default)(e, (e, a) => {
                        e.forEach((e, n) => {
                            t(e, a, a + _ + n)
                        })
                    })
                },
                es = e => A({
                    config: {
                        target: e.target,
                        targets: e.targets
                    },
                    elementApi: T
                });

            function eu({
                store: e,
                actionListId: t,
                eventId: a
            }) {
                let {
                    ixData: n,
                    ixSession: i
                } = e.getState(), {
                    actionLists: d,
                    events: c
                } = n, l = c[a], r = d[t];
                if (r && r.useFirstGroupAsInitialState) {
                    let d = (0, o.default)(r, "actionItemGroups[0].actionItems", []);
                    if (!D((0, o.default)(l, "mediaQueries", n.mediaQueryKeys), i.mediaQueryKey)) return;
                    d.forEach(n => {
                        let {
                            config: i,
                            actionTypeId: d
                        } = n, o = A({
                            config: i?.target?.useEventTarget === !0 && i?.target?.objectId == null ? {
                                target: l.target,
                                targets: l.targets
                            } : i,
                            event: l,
                            elementApi: T
                        }), c = z(d);
                        o.forEach(i => {
                            let o = c ? Q(d)?.(i, n) : null;
                            eI({
                                destination: h({
                                    element: i,
                                    actionItem: n,
                                    elementApi: T
                                }, o),
                                immediate: !0,
                                store: e,
                                element: i,
                                eventId: a,
                                actionItem: n,
                                actionListId: t,
                                pluginInstance: o
                            })
                        })
                    })
                }
            }

            function ef({
                store: e
            }) {
                let {
                    ixInstances: t
                } = e.getState();
                (0, u.default)(t, t => {
                    if (!t.continuous) {
                        let {
                            actionListId: a,
                            verbose: n
                        } = t;
                        eT(t, e), n && e.dispatch((0, I.actionListPlaybackChanged)({
                            actionListId: a,
                            isPlaying: !1
                        }))
                    }
                })
            }

            function ep({
                store: e,
                eventId: t,
                eventTarget: a,
                eventStateKey: n,
                actionListId: i
            }) {
                let {
                    ixInstances: d,
                    ixSession: c
                } = e.getState(), l = c.hasBoundaryNodes && a ? T.getClosestElement(a, R) : null;
                (0, u.default)(d, a => {
                    let d = (0, o.default)(a, "actionItem.config.target.boundaryMode"),
                        c = !n || a.eventStateKey === n;
                    if (a.actionListId === i && a.eventId === t && c) {
                        if (l && d && !T.elementContains(l, a.element)) return;
                        eT(a, e), a.verbose && e.dispatch((0, I.actionListPlaybackChanged)({
                            actionListId: i,
                            isPlaying: !1
                        }))
                    }
                })
            }

            function eE({
                store: e,
                eventId: t,
                eventTarget: a,
                eventStateKey: n,
                actionListId: i,
                groupIndex: d = 0,
                immediate: c,
                verbose: l
            }) {
                let {
                    ixData: r,
                    ixSession: s
                } = e.getState(), {
                    events: u
                } = r, f = u[t] || {}, {
                    mediaQueries: p = r.mediaQueryKeys
                } = f, {
                    actionItemGroups: E,
                    useFirstGroupAsInitialState: I
                } = (0, o.default)(r, `actionLists.${i}`, {});
                if (!E || !E.length) return !1;
                d >= E.length && (0, o.default)(f, "config.loop") && (d = 0), 0 === d && I && d++;
                let g = (0 === d || 1 === d && I) && O(f.action?.actionTypeId) ? f.config.delay : void 0,
                    y = (0, o.default)(E, [d, "actionItems"], []);
                if (!y.length || !D(p, s.mediaQueryKey)) return !1;
                let b = s.hasBoundaryNodes && a ? T.getClosestElement(a, R) : null,
                    m = G(y),
                    _ = !1;
                return y.forEach((o, r) => {
                    let {
                        config: s,
                        actionTypeId: u
                    } = o, p = z(u), {
                        target: E
                    } = s;
                    E && A({
                        config: s,
                        event: f,
                        eventTarget: a,
                        elementRoot: E.boundaryMode ? b : null,
                        elementApi: T
                    }).forEach((s, f) => {
                        let E = p ? Q(u)?.(s, o) : null,
                            I = p ? j(u)(s, o) : null;
                        _ = !0;
                        let y = P({
                                element: s,
                                actionItem: o
                            }),
                            b = h({
                                element: s,
                                actionItem: o,
                                elementApi: T
                            }, E);
                        eI({
                            store: e,
                            element: s,
                            actionItem: o,
                            eventId: t,
                            eventTarget: a,
                            eventStateKey: n,
                            actionListId: i,
                            groupIndex: d,
                            isCarrier: m === r && 0 === f,
                            computedStyle: y,
                            destination: b,
                            immediate: c,
                            verbose: l,
                            pluginInstance: E,
                            pluginDuration: I,
                            instanceDelay: g
                        })
                    })
                }), _
            }

            function eI(e) {
                let t, {
                        store: a,
                        computedStyle: n,
                        ...i
                    } = e,
                    {
                        element: d,
                        actionItem: o,
                        immediate: c,
                        pluginInstance: l,
                        continuous: r,
                        restingValue: s,
                        eventId: u
                    } = i,
                    f = M(),
                    {
                        ixElements: E,
                        ixSession: g,
                        ixData: y
                    } = a.getState(),
                    b = S(E, d),
                    {
                        refState: m
                    } = E[b] || {},
                    O = T.getRefType(d),
                    _ = g.reducedMotion && p.ReducedMotionTypes[o.actionTypeId];
                if (_ && r) switch (y.events[u]?.eventTypeId) {
                    case p.EventTypeConsts.MOUSE_MOVE:
                    case p.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
                        t = s;
                        break;
                    default:
                        t = .5
                }
                let R = k(d, m, n, o, T, l);
                if (a.dispatch((0, I.instanceAdded)({
                        instanceId: f,
                        elementId: b,
                        origin: R,
                        refType: O,
                        skipMotion: _,
                        skipToValue: t,
                        ...i
                    })), eg(document.body, "ix2-animation-started", f), c) return void

                function(e, t) {
                    let {
                        ixParameters: a
                    } = e.getState();
                    e.dispatch((0, I.instanceStarted)(t, 0)), e.dispatch((0, I.animationFrameChanged)(performance.now(), a));
                    let {
                        ixInstances: n
                    } = e.getState();
                    ey(n[t], e)
                }(a, f);
                C({
                    store: a,
                    select: ({
                        ixInstances: e
                    }) => e[f],
                    onChange: ey
                }), r || a.dispatch((0, I.instanceStarted)(f, g.tick))
            }

            function eT(e, t) {
                eg(document.body, "ix2-animation-stopping", {
                    instanceId: e.id,
                    state: t.getState()
                });
                let {
                    elementId: a,
                    actionItem: n
                } = e, {
                    ixElements: i
                } = t.getState(), {
                    ref: d,
                    refType: o
                } = i[a] || {};
                o === v && B(d, n, T), t.dispatch((0, I.instanceRemoved)(e.id))
            }

            function eg(e, t, a) {
                let n = document.createEvent("CustomEvent");
                n.initCustomEvent(t, !0, !0, a), e.dispatchEvent(n)
            }

            function ey(e, t) {
                let {
                    active: a,
                    continuous: n,
                    complete: i,
                    elementId: d,
                    actionItem: o,
                    actionTypeId: c,
                    renderType: l,
                    current: r,
                    groupIndex: s,
                    eventId: u,
                    eventTarget: f,
                    eventStateKey: p,
                    actionListId: E,
                    isCarrier: g,
                    styleProp: y,
                    verbose: b,
                    pluginInstance: m
                } = e, {
                    ixData: O,
                    ixSession: _
                } = t.getState(), {
                    events: R
                } = O, {
                    mediaQueries: N = O.mediaQueryKeys
                } = R && R[u] ? R[u] : {};
                if (D(N, _.mediaQueryKey) && (n || a || i)) {
                    if (r || l === L && i) {
                        t.dispatch((0, I.elementStateChanged)(d, c, r, o));
                        let {
                            ixElements: e
                        } = t.getState(), {
                            ref: a,
                            refType: n,
                            refState: i
                        } = e[d] || {}, s = i && i[c];
                        (n === v || z(c)) && U(a, i, s, u, o, y, T, l, m)
                    }
                    if (i) {
                        if (g) {
                            let e = eE({
                                store: t,
                                eventId: u,
                                eventTarget: f,
                                eventStateKey: p,
                                actionListId: E,
                                groupIndex: s + 1,
                                verbose: b
                            });
                            b && !e && t.dispatch((0, I.actionListPlaybackChanged)({
                                actionListId: E,
                                isPlaying: !1
                            }))
                        }
                        eT(e, t)
                    }
                }
            }
        },
        8955: function(e, t, a) {
            "use strict";
            let n;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return ep
                }
            });
            let i = u(a(5801)),
                d = u(a(4738)),
                o = u(a(3789)),
                c = a(7087),
                l = a(1970),
                r = a(3946),
                s = a(9468);

            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            let {
                MOUSE_CLICK: f,
                MOUSE_SECOND_CLICK: p,
                MOUSE_DOWN: E,
                MOUSE_UP: I,
                MOUSE_OVER: T,
                MOUSE_OUT: g,
                DROPDOWN_CLOSE: y,
                DROPDOWN_OPEN: b,
                SLIDER_ACTIVE: m,
                SLIDER_INACTIVE: O,
                TAB_ACTIVE: _,
                TAB_INACTIVE: R,
                NAVBAR_CLOSE: v,
                NAVBAR_OPEN: L,
                MOUSE_MOVE: N,
                PAGE_SCROLL_DOWN: A,
                SCROLL_INTO_VIEW: S,
                SCROLL_OUT_OF_VIEW: h,
                PAGE_SCROLL_UP: C,
                SCROLLING_IN_VIEW: M,
                PAGE_FINISH: U,
                ECOMMERCE_CART_CLOSE: V,
                ECOMMERCE_CART_OPEN: G,
                PAGE_START: P,
                PAGE_SCROLL: k
            } = c.EventTypeConsts, x = "COMPONENT_ACTIVE", w = "COMPONENT_INACTIVE", {
                COLON_DELIMITER: F
            } = c.IX2EngineConstants, {
                getNamespacedParameterId: D
            } = s.IX2VanillaUtils, B = e => t => !!("object" == typeof t && e(t)) || t, X = B(({
                element: e,
                nativeEvent: t
            }) => e === t.target), Y = B(({
                element: e,
                nativeEvent: t
            }) => e.contains(t.target)), H = (0, i.default)([X, Y]), W = (e, t) => {
                if (t) {
                    let {
                        ixData: a
                    } = e.getState(), {
                        events: n
                    } = a, i = n[t];
                    if (i && !ee[i.eventTypeId]) return i
                }
                return null
            }, z = ({
                store: e,
                event: t
            }) => {
                let {
                    action: a
                } = t, {
                    autoStopEventId: n
                } = a.config;
                return !!W(e, n)
            }, Q = ({
                store: e,
                event: t,
                element: a,
                eventStateKey: n
            }, i) => {
                let {
                    action: o,
                    id: c
                } = t, {
                    actionListId: r,
                    autoStopEventId: s
                } = o.config, u = W(e, s);
                return u && (0, l.stopActionGroup)({
                    store: e,
                    eventId: s,
                    eventTarget: a,
                    eventStateKey: s + F + n.split(F)[1],
                    actionListId: (0, d.default)(u, "action.config.actionListId")
                }), (0, l.stopActionGroup)({
                    store: e,
                    eventId: c,
                    eventTarget: a,
                    eventStateKey: n,
                    actionListId: r
                }), (0, l.startActionGroup)({
                    store: e,
                    eventId: c,
                    eventTarget: a,
                    eventStateKey: n,
                    actionListId: r
                }), i
            }, j = (e, t) => (a, n) => !0 === e(a, n) ? t(a, n) : n, $ = {
                handler: j(H, Q)
            }, q = {
                ...$,
                types: [x, w].join(" ")
            }, Z = [{
                target: window,
                types: "resize orientationchange",
                throttle: !0
            }, {
                target: document,
                types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
                throttle: !0
            }], K = "mouseover mouseout", J = {
                types: Z
            }, ee = {
                PAGE_START: P,
                PAGE_FINISH: U
            }, et = (() => {
                let e = void 0 !== window.pageXOffset,
                    t = "CSS1Compat" === document.compatMode ? document.documentElement : document.body;
                return () => ({
                    scrollLeft: e ? window.pageXOffset : t.scrollLeft,
                    scrollTop: e ? window.pageYOffset : t.scrollTop,
                    stiffScrollTop: (0, o.default)(e ? window.pageYOffset : t.scrollTop, 0, t.scrollHeight - window.innerHeight),
                    scrollWidth: t.scrollWidth,
                    scrollHeight: t.scrollHeight,
                    clientWidth: t.clientWidth,
                    clientHeight: t.clientHeight,
                    innerWidth: window.innerWidth,
                    innerHeight: window.innerHeight
                })
            })(), ea = (e, t) => !(e.left > t.right || e.right < t.left || e.top > t.bottom || e.bottom < t.top), en = ({
                element: e,
                nativeEvent: t
            }) => {
                let {
                    type: a,
                    target: n,
                    relatedTarget: i
                } = t, d = e.contains(n);
                if ("mouseover" === a && d) return !0;
                let o = e.contains(i);
                return "mouseout" === a && !!d && !!o
            }, ei = e => {
                let {
                    element: t,
                    event: {
                        config: a
                    }
                } = e, {
                    clientWidth: n,
                    clientHeight: i
                } = et(), d = a.scrollOffsetValue, o = "PX" === a.scrollOffsetUnit ? d : i * (d || 0) / 100;
                return ea(t.getBoundingClientRect(), {
                    left: 0,
                    top: o,
                    right: n,
                    bottom: i - o
                })
            }, ed = e => (t, a) => {
                let {
                    type: n
                } = t.nativeEvent, i = -1 !== [x, w].indexOf(n) ? n === x : a.isActive, d = {
                    ...a,
                    isActive: i
                };
                return (!a || d.isActive !== a.isActive) && e(t, d) || d
            }, eo = e => (t, a) => {
                let n = {
                    elementHovered: en(t)
                };
                return (a ? n.elementHovered !== a.elementHovered : n.elementHovered) && e(t, n) || n
            }, ec = e => (t, a = {}) => {
                let n, i, {
                        stiffScrollTop: d,
                        scrollHeight: o,
                        innerHeight: c
                    } = et(),
                    {
                        event: {
                            config: l,
                            eventTypeId: r
                        }
                    } = t,
                    {
                        scrollOffsetValue: s,
                        scrollOffsetUnit: u
                    } = l,
                    f = o - c,
                    p = Number((d / f).toFixed(2));
                if (a && a.percentTop === p) return a;
                let E = ("PX" === u ? s : c * (s || 0) / 100) / f,
                    I = 0;
                a && (n = p > a.percentTop, I = (i = a.scrollingDown !== n) ? p : a.anchorTop);
                let T = r === A ? p >= I + E : p <= I - E,
                    g = {
                        ...a,
                        percentTop: p,
                        inBounds: T,
                        anchorTop: I,
                        scrollingDown: n
                    };
                return a && T && (i || g.inBounds !== a.inBounds) && e(t, g) || g
            }, el = (e, t) => e.left > t.left && e.left < t.right && e.top > t.top && e.top < t.bottom, er = e => (t, a = {
                clickCount: 0
            }) => {
                let n = {
                    clickCount: a.clickCount % 2 + 1
                };
                return n.clickCount !== a.clickCount && e(t, n) || n
            }, es = (e = !0) => ({
                ...q,
                handler: j(e ? H : X, ed((e, t) => t.isActive ? $.handler(e, t) : t))
            }), eu = (e = !0) => ({
                ...q,
                handler: j(e ? H : X, ed((e, t) => t.isActive ? t : $.handler(e, t)))
            }), ef = {
                ...J,
                handler: (n = (e, t) => {
                    let {
                        elementVisible: a
                    } = t, {
                        event: n,
                        store: i
                    } = e, {
                        ixData: d
                    } = i.getState(), {
                        events: o
                    } = d;
                    return !o[n.action.config.autoStopEventId] && t.triggered ? t : n.eventTypeId === S === a ? (Q(e), {
                        ...t,
                        triggered: !0
                    }) : t
                }, (e, t) => {
                    let a = {
                        ...t,
                        elementVisible: ei(e)
                    };
                    return (t ? a.elementVisible !== t.elementVisible : a.elementVisible) && n(e, a) || a
                })
            }, ep = {
                [m]: es(),
                [O]: eu(),
                [b]: es(),
                [y]: eu(),
                [L]: es(!1),
                [v]: eu(!1),
                [_]: es(),
                [R]: eu(),
                [G]: {
                    types: "ecommerce-cart-open",
                    handler: j(H, Q)
                },
                [V]: {
                    types: "ecommerce-cart-close",
                    handler: j(H, Q)
                },
                [f]: {
                    types: "click",
                    handler: j(H, er((e, {
                        clickCount: t
                    }) => {
                        z(e) ? 1 === t && Q(e) : Q(e)
                    }))
                },
                [p]: {
                    types: "click",
                    handler: j(H, er((e, {
                        clickCount: t
                    }) => {
                        2 === t && Q(e)
                    }))
                },
                [E]: {
                    ...$,
                    types: "mousedown"
                },
                [I]: {
                    ...$,
                    types: "mouseup"
                },
                [T]: {
                    types: K,
                    handler: j(H, eo((e, t) => {
                        t.elementHovered && Q(e)
                    }))
                },
                [g]: {
                    types: K,
                    handler: j(H, eo((e, t) => {
                        t.elementHovered || Q(e)
                    }))
                },
                [N]: {
                    types: "mousemove mouseout scroll",
                    handler: ({
                        store: e,
                        element: t,
                        eventConfig: a,
                        nativeEvent: n,
                        eventStateKey: i
                    }, d = {
                        clientX: 0,
                        clientY: 0,
                        pageX: 0,
                        pageY: 0
                    }) => {
                        let {
                            basedOn: o,
                            selectedAxis: l,
                            continuousParameterGroupId: s,
                            reverse: u,
                            restingState: f = 0
                        } = a, {
                            clientX: p = d.clientX,
                            clientY: E = d.clientY,
                            pageX: I = d.pageX,
                            pageY: T = d.pageY
                        } = n, g = "X_AXIS" === l, y = "mouseout" === n.type, b = f / 100, m = s, O = !1;
                        switch (o) {
                            case c.EventBasedOn.VIEWPORT:
                                b = g ? Math.min(p, window.innerWidth) / window.innerWidth : Math.min(E, window.innerHeight) / window.innerHeight;
                                break;
                            case c.EventBasedOn.PAGE: {
                                let {
                                    scrollLeft: e,
                                    scrollTop: t,
                                    scrollWidth: a,
                                    scrollHeight: n
                                } = et();
                                b = g ? Math.min(e + I, a) / a : Math.min(t + T, n) / n;
                                break
                            }
                            case c.EventBasedOn.ELEMENT:
                            default: {
                                m = D(i, s);
                                let e = 0 === n.type.indexOf("mouse");
                                if (e && !0 !== H({
                                        element: t,
                                        nativeEvent: n
                                    })) break;
                                let a = t.getBoundingClientRect(),
                                    {
                                        left: d,
                                        top: o,
                                        width: c,
                                        height: l
                                    } = a;
                                if (!e && !el({
                                        left: p,
                                        top: E
                                    }, a)) break;
                                O = !0, b = g ? (p - d) / c : (E - o) / l
                            }
                        }
                        return y && (b > .95 || b < .05) && (b = Math.round(b)), (o !== c.EventBasedOn.ELEMENT || O || O !== d.elementHovered) && (b = u ? 1 - b : b, e.dispatch((0, r.parameterChanged)(m, b))), {
                            elementHovered: O,
                            clientX: p,
                            clientY: E,
                            pageX: I,
                            pageY: T
                        }
                    }
                },
                [k]: {
                    types: Z,
                    handler: ({
                        store: e,
                        eventConfig: t
                    }) => {
                        let {
                            continuousParameterGroupId: a,
                            reverse: n
                        } = t, {
                            scrollTop: i,
                            scrollHeight: d,
                            clientHeight: o
                        } = et(), c = i / (d - o);
                        c = n ? 1 - c : c, e.dispatch((0, r.parameterChanged)(a, c))
                    }
                },
                [M]: {
                    types: Z,
                    handler: ({
                        element: e,
                        store: t,
                        eventConfig: a,
                        eventStateKey: n
                    }, i = {
                        scrollPercent: 0
                    }) => {
                        let {
                            scrollLeft: d,
                            scrollTop: o,
                            scrollWidth: l,
                            scrollHeight: s,
                            clientHeight: u
                        } = et(), {
                            basedOn: f,
                            selectedAxis: p,
                            continuousParameterGroupId: E,
                            startsEntering: I,
                            startsExiting: T,
                            addEndOffset: g,
                            addStartOffset: y,
                            addOffsetValue: b = 0,
                            endOffsetValue: m = 0
                        } = a;
                        if (f === c.EventBasedOn.VIEWPORT) {
                            let e = "X_AXIS" === p ? d / l : o / s;
                            return e !== i.scrollPercent && t.dispatch((0, r.parameterChanged)(E, e)), {
                                scrollPercent: e
                            }
                        } {
                            let a = D(n, E),
                                d = e.getBoundingClientRect(),
                                o = (y ? b : 0) / 100,
                                c = (g ? m : 0) / 100;
                            o = I ? o : 1 - o, c = T ? c : 1 - c;
                            let l = d.top + Math.min(d.height * o, u),
                                f = Math.min(u + (d.top + d.height * c - l), s),
                                p = Math.min(Math.max(0, u - l), f) / f;
                            return p !== i.scrollPercent && t.dispatch((0, r.parameterChanged)(a, p)), {
                                scrollPercent: p
                            }
                        }
                    }
                },
                [S]: ef,
                [h]: ef,
                [A]: {
                    ...J,
                    handler: ec((e, t) => {
                        t.scrollingDown && Q(e)
                    })
                },
                [C]: {
                    ...J,
                    handler: ec((e, t) => {
                        t.scrollingDown || Q(e)
                    })
                },
                [U]: {
                    types: "readystatechange IX2_PAGE_UPDATE",
                    handler: j(X, (e, t) => {
                        let a = {
                            finished: "complete" === document.readyState
                        };
                        return a.finished && !(t && t.finshed) && Q(e), a
                    })
                },
                [P]: {
                    types: "readystatechange IX2_PAGE_UPDATE",
                    handler: j(X, (e, t) => (t || Q(e), {
                        started: !0
                    }))
                }
            }
        },
        4609: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "ixData", {
                enumerable: !0,
                get: function() {
                    return i
                }
            });
            let {
                IX2_RAW_DATA_IMPORTED: n
            } = a(7087).IX2EngineActionTypes, i = (e = Object.freeze({}), t) => t.type === n ? t.payload.ixData || Object.freeze({}) : e
        },
        7718: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "ixInstances", {
                enumerable: !0,
                get: function() {
                    return O
                }
            });
            let n = a(7087),
                i = a(9468),
                d = a(1185),
                {
                    IX2_RAW_DATA_IMPORTED: o,
                    IX2_SESSION_STOPPED: c,
                    IX2_INSTANCE_ADDED: l,
                    IX2_INSTANCE_STARTED: r,
                    IX2_INSTANCE_REMOVED: s,
                    IX2_ANIMATION_FRAME_CHANGED: u
                } = n.IX2EngineActionTypes,
                {
                    optimizeFloat: f,
                    applyEasing: p,
                    createBezierEasing: E
                } = i.IX2EasingUtils,
                {
                    RENDER_GENERAL: I
                } = n.IX2EngineConstants,
                {
                    getItemConfigByKey: T,
                    getRenderType: g,
                    getStyleProp: y
                } = i.IX2VanillaUtils,
                b = (e, t) => {
                    let a, n, i, o, {
                            position: c,
                            parameterId: l,
                            actionGroups: r,
                            destinationKeys: s,
                            smoothing: u,
                            restingValue: E,
                            actionTypeId: I,
                            customEasingFn: g,
                            skipMotion: y,
                            skipToValue: b
                        } = e,
                        {
                            parameters: m
                        } = t.payload,
                        O = Math.max(1 - u, .01),
                        _ = m[l];
                    null == _ && (O = 1, _ = E);
                    let R = f((Math.max(_, 0) || 0) - c),
                        v = y ? b : f(c + R * O),
                        L = 100 * v;
                    if (v === c && e.current) return e;
                    for (let e = 0, {
                            length: t
                        } = r; e < t; e++) {
                        let {
                            keyframe: t,
                            actionItems: d
                        } = r[e];
                        if (0 === e && (a = d[0]), L >= t) {
                            a = d[0];
                            let c = r[e + 1],
                                l = c && L !== t;
                            n = l ? c.actionItems[0] : null, l && (i = t / 100, o = (c.keyframe - t) / 100)
                        }
                    }
                    let N = {};
                    if (a && !n)
                        for (let e = 0, {
                                length: t
                            } = s; e < t; e++) {
                            let t = s[e];
                            N[t] = T(I, t, a.config)
                        } else if (a && n && void 0 !== i && void 0 !== o) {
                            let e = (v - i) / o,
                                t = p(a.config.easing, e, g);
                            for (let e = 0, {
                                    length: i
                                } = s; e < i; e++) {
                                let i = s[e],
                                    d = T(I, i, a.config),
                                    o = (T(I, i, n.config) - d) * t + d;
                                N[i] = o
                            }
                        } return (0, d.merge)(e, {
                        position: v,
                        current: N
                    })
                },
                m = (e, t) => {
                    let {
                        active: a,
                        origin: n,
                        start: i,
                        immediate: o,
                        renderType: c,
                        verbose: l,
                        actionItem: r,
                        destination: s,
                        destinationKeys: u,
                        pluginDuration: E,
                        instanceDelay: T,
                        customEasingFn: g,
                        skipMotion: y
                    } = e, b = r.config.easing, {
                        duration: m,
                        delay: O
                    } = r.config;
                    null != E && (m = E), O = null != T ? T : O, c === I ? m = 0 : (o || y) && (m = O = 0);
                    let {
                        now: _
                    } = t.payload;
                    if (a && n) {
                        let t = _ - (i + O);
                        if (l) {
                            let t = m + O,
                                a = f(Math.min(Math.max(0, (_ - i) / t), 1));
                            e = (0, d.set)(e, "verboseTimeElapsed", t * a)
                        }
                        if (t < 0) return e;
                        let a = f(Math.min(Math.max(0, t / m), 1)),
                            o = p(b, a, g),
                            c = {},
                            r = null;
                        return u.length && (r = u.reduce((e, t) => {
                            let a = s[t],
                                i = parseFloat(n[t]) || 0,
                                d = parseFloat(a) - i;
                            return e[t] = d * o + i, e
                        }, {})), c.current = r, c.position = a, 1 === a && (c.active = !1, c.complete = !0), (0, d.merge)(e, c)
                    }
                    return e
                },
                O = (e = Object.freeze({}), t) => {
                    switch (t.type) {
                        case o:
                            return t.payload.ixInstances || Object.freeze({});
                        case c:
                            return Object.freeze({});
                        case l: {
                            let {
                                instanceId: a,
                                elementId: n,
                                actionItem: i,
                                eventId: o,
                                eventTarget: c,
                                eventStateKey: l,
                                actionListId: r,
                                groupIndex: s,
                                isCarrier: u,
                                origin: f,
                                destination: p,
                                immediate: I,
                                verbose: T,
                                continuous: b,
                                parameterId: m,
                                actionGroups: O,
                                smoothing: _,
                                restingValue: R,
                                pluginInstance: v,
                                pluginDuration: L,
                                instanceDelay: N,
                                skipMotion: A,
                                skipToValue: S
                            } = t.payload, {
                                actionTypeId: h
                            } = i, C = g(h), M = y(C, h), U = Object.keys(p).filter(e => null != p[e] && "string" != typeof p[e]), {
                                easing: V
                            } = i.config;
                            return (0, d.set)(e, a, {
                                id: a,
                                elementId: n,
                                active: !1,
                                position: 0,
                                start: 0,
                                origin: f,
                                destination: p,
                                destinationKeys: U,
                                immediate: I,
                                verbose: T,
                                current: null,
                                actionItem: i,
                                actionTypeId: h,
                                eventId: o,
                                eventTarget: c,
                                eventStateKey: l,
                                actionListId: r,
                                groupIndex: s,
                                renderType: C,
                                isCarrier: u,
                                styleProp: M,
                                continuous: b,
                                parameterId: m,
                                actionGroups: O,
                                smoothing: _,
                                restingValue: R,
                                pluginInstance: v,
                                pluginDuration: L,
                                instanceDelay: N,
                                skipMotion: A,
                                skipToValue: S,
                                customEasingFn: Array.isArray(V) && 4 === V.length ? E(V) : void 0
                            })
                        }
                        case r: {
                            let {
                                instanceId: a,
                                time: n
                            } = t.payload;
                            return (0, d.mergeIn)(e, [a], {
                                active: !0,
                                complete: !1,
                                start: n
                            })
                        }
                        case s: {
                            let {
                                instanceId: a
                            } = t.payload;
                            if (!e[a]) return e;
                            let n = {},
                                i = Object.keys(e),
                                {
                                    length: d
                                } = i;
                            for (let t = 0; t < d; t++) {
                                let d = i[t];
                                d !== a && (n[d] = e[d])
                            }
                            return n
                        }
                        case u: {
                            let a = e,
                                n = Object.keys(e),
                                {
                                    length: i
                                } = n;
                            for (let o = 0; o < i; o++) {
                                let i = n[o],
                                    c = e[i],
                                    l = c.continuous ? b : m;
                                a = (0, d.set)(a, i, l(c, t))
                            }
                            return a
                        }
                        default:
                            return e
                    }
                }
        },
        1540: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "ixParameters", {
                enumerable: !0,
                get: function() {
                    return o
                }
            });
            let {
                IX2_RAW_DATA_IMPORTED: n,
                IX2_SESSION_STOPPED: i,
                IX2_PARAMETER_CHANGED: d
            } = a(7087).IX2EngineActionTypes, o = (e = {}, t) => {
                switch (t.type) {
                    case n:
                        return t.payload.ixParameters || {};
                    case i:
                        return {};
                    case d: {
                        let {
                            key: a,
                            value: n
                        } = t.payload;
                        return e[a] = n, e
                    }
                    default:
                        return e
                }
            }
        },
        7243: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return u
                }
            });
            let n = a(9516),
                i = a(4609),
                d = a(628),
                o = a(5862),
                c = a(9468),
                l = a(7718),
                r = a(1540),
                {
                    ixElements: s
                } = c.IX2ElementsReducer,
                u = (0, n.combineReducers)({
                    ixData: i.ixData,
                    ixRequest: d.ixRequest,
                    ixSession: o.ixSession,
                    ixElements: s,
                    ixInstances: l.ixInstances,
                    ixParameters: r.ixParameters
                })
        },
        628: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "ixRequest", {
                enumerable: !0,
                get: function() {
                    return u
                }
            });
            let n = a(7087),
                i = a(1185),
                {
                    IX2_PREVIEW_REQUESTED: d,
                    IX2_PLAYBACK_REQUESTED: o,
                    IX2_STOP_REQUESTED: c,
                    IX2_CLEAR_REQUESTED: l
                } = n.IX2EngineActionTypes,
                r = {
                    preview: {},
                    playback: {},
                    stop: {},
                    clear: {}
                },
                s = Object.create(null, {
                    [d]: {
                        value: "preview"
                    },
                    [o]: {
                        value: "playback"
                    },
                    [c]: {
                        value: "stop"
                    },
                    [l]: {
                        value: "clear"
                    }
                }),
                u = (e = r, t) => {
                    if (t.type in s) {
                        let a = [s[t.type]];
                        return (0, i.setIn)(e, [a], {
                            ...t.payload
                        })
                    }
                    return e
                }
        },
        5862: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "ixSession", {
                enumerable: !0,
                get: function() {
                    return T
                }
            });
            let n = a(7087),
                i = a(1185),
                {
                    IX2_SESSION_INITIALIZED: d,
                    IX2_SESSION_STARTED: o,
                    IX2_TEST_FRAME_RENDERED: c,
                    IX2_SESSION_STOPPED: l,
                    IX2_EVENT_LISTENER_ADDED: r,
                    IX2_EVENT_STATE_CHANGED: s,
                    IX2_ANIMATION_FRAME_CHANGED: u,
                    IX2_ACTION_LIST_PLAYBACK_CHANGED: f,
                    IX2_VIEWPORT_WIDTH_CHANGED: p,
                    IX2_MEDIA_QUERIES_DEFINED: E
                } = n.IX2EngineActionTypes,
                I = {
                    active: !1,
                    tick: 0,
                    eventListeners: [],
                    eventState: {},
                    playbackState: {},
                    viewportWidth: 0,
                    mediaQueryKey: null,
                    hasBoundaryNodes: !1,
                    hasDefinedMediaQueries: !1,
                    reducedMotion: !1
                },
                T = (e = I, t) => {
                    switch (t.type) {
                        case d: {
                            let {
                                hasBoundaryNodes: a,
                                reducedMotion: n
                            } = t.payload;
                            return (0, i.merge)(e, {
                                hasBoundaryNodes: a,
                                reducedMotion: n
                            })
                        }
                        case o:
                            return (0, i.set)(e, "active", !0);
                        case c: {
                            let {
                                payload: {
                                    step: a = 20
                                }
                            } = t;
                            return (0, i.set)(e, "tick", e.tick + a)
                        }
                        case l:
                            return I;
                        case u: {
                            let {
                                payload: {
                                    now: a
                                }
                            } = t;
                            return (0, i.set)(e, "tick", a)
                        }
                        case r: {
                            let a = (0, i.addLast)(e.eventListeners, t.payload);
                            return (0, i.set)(e, "eventListeners", a)
                        }
                        case s: {
                            let {
                                stateKey: a,
                                newState: n
                            } = t.payload;
                            return (0, i.setIn)(e, ["eventState", a], n)
                        }
                        case f: {
                            let {
                                actionListId: a,
                                isPlaying: n
                            } = t.payload;
                            return (0, i.setIn)(e, ["playbackState", a], n)
                        }
                        case p: {
                            let {
                                width: a,
                                mediaQueries: n
                            } = t.payload, d = n.length, o = null;
                            for (let e = 0; e < d; e++) {
                                let {
                                    key: t,
                                    min: i,
                                    max: d
                                } = n[e];
                                if (a >= i && a <= d) {
                                    o = t;
                                    break
                                }
                            }
                            return (0, i.merge)(e, {
                                viewportWidth: a,
                                mediaQueryKey: o
                            })
                        }
                        case E:
                            return (0, i.set)(e, "hasDefinedMediaQueries", !0);
                        default:
                            return e
                    }
                }
        },
        7377: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = {
                clearPlugin: function() {
                    return s
                },
                createPluginInstance: function() {
                    return l
                },
                getPluginConfig: function() {
                    return i
                },
                getPluginDestination: function() {
                    return c
                },
                getPluginDuration: function() {
                    return d
                },
                getPluginOrigin: function() {
                    return o
                },
                renderPlugin: function() {
                    return r
                }
            };
            for (var n in a) Object.defineProperty(t, n, {
                enumerable: !0,
                get: a[n]
            });
            let i = e => e.value,
                d = (e, t) => {
                    if ("auto" !== t.config.duration) return null;
                    let a = parseFloat(e.getAttribute("data-duration"));
                    return a > 0 ? 1e3 * a : 1e3 * parseFloat(e.getAttribute("data-default-duration"))
                },
                o = e => e || {
                    value: 0
                },
                c = e => ({
                    value: e.value
                }),
                l = e => {
                    let t = window.Webflow.require("lottie");
                    if (!t) return null;
                    let a = t.createInstance(e);
                    return a.stop(), a.setSubframe(!0), a
                },
                r = (e, t, a) => {
                    if (!e) return;
                    let n = t[a.actionTypeId].value / 100;
                    e.goToFrame(e.frames * n)
                },
                s = e => {
                    let t = window.Webflow.require("lottie");
                    t && t.createInstance(e).stop()
                }
        },
        2570: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = {
                clearPlugin: function() {
                    return E
                },
                createPluginInstance: function() {
                    return f
                },
                getPluginConfig: function() {
                    return l
                },
                getPluginDestination: function() {
                    return u
                },
                getPluginDuration: function() {
                    return r
                },
                getPluginOrigin: function() {
                    return s
                },
                renderPlugin: function() {
                    return p
                }
            };
            for (var n in a) Object.defineProperty(t, n, {
                enumerable: !0,
                get: a[n]
            });
            let i = "--wf-rive-fit",
                d = "--wf-rive-alignment",
                o = e => document.querySelector(`[data-w-id="${e}"]`),
                c = () => window.Webflow.require("rive"),
                l = (e, t) => e.value.inputs[t],
                r = () => null,
                s = (e, t) => {
                    if (e) return e;
                    let a = {},
                        {
                            inputs: n = {}
                        } = t.config.value;
                    for (let e in n) null == n[e] && (a[e] = 0);
                    return a
                },
                u = e => e.value.inputs ?? {},
                f = (e, t) => {
                    if ((t.config?.target?.selectorGuids || []).length > 0) return e;
                    let a = t?.config?.target?.pluginElement;
                    return a ? o(a) : null
                },
                p = (e, {
                    PLUGIN_RIVE: t
                }, a) => {
                    let n = c();
                    if (!n) return;
                    let o = n.getInstance(e),
                        l = n.rive.StateMachineInputType,
                        {
                            name: r,
                            inputs: s = {}
                        } = a.config.value || {};

                    function u(e) {
                        if (e.loaded) a();
                        else {
                            let t = () => {
                                a(), e?.off("load", t)
                            };
                            e?.on("load", t)
                        }

                        function a() {
                            let a = e.stateMachineInputs(r);
                            if (null != a) {
                                if (e.isPlaying || e.play(r, !1), i in s || d in s) {
                                    let t = e.layout,
                                        a = s[i] ?? t.fit,
                                        n = s[d] ?? t.alignment;
                                    (a !== t.fit || n !== t.alignment) && (e.layout = t.copyWith({
                                        fit: a,
                                        alignment: n
                                    }))
                                }
                                for (let e in s) {
                                    if (e === i || e === d) continue;
                                    let n = a.find(t => t.name === e);
                                    if (null != n) switch (n.type) {
                                        case l.Boolean:
                                            null != s[e] && (n.value = !!s[e]);
                                            break;
                                        case l.Number: {
                                            let a = t[e];
                                            null != a && (n.value = a);
                                            break
                                        }
                                        case l.Trigger:
                                            s[e] && n.fire()
                                    }
                                }
                            }
                        }
                    }
                    o?.rive ? u(o.rive) : n.setLoadHandler(e, u)
                },
                E = (e, t) => null
        },
        2866: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = {
                clearPlugin: function() {
                    return E
                },
                createPluginInstance: function() {
                    return f
                },
                getPluginConfig: function() {
                    return c
                },
                getPluginDestination: function() {
                    return u
                },
                getPluginDuration: function() {
                    return l
                },
                getPluginOrigin: function() {
                    return s
                },
                renderPlugin: function() {
                    return p
                }
            };
            for (var n in a) Object.defineProperty(t, n, {
                enumerable: !0,
                get: a[n]
            });
            let i = e => document.querySelector(`[data-w-id="${e}"]`),
                d = () => window.Webflow.require("spline"),
                o = (e, t) => e.filter(e => !t.includes(e)),
                c = (e, t) => e.value[t],
                l = () => null,
                r = Object.freeze({
                    positionX: 0,
                    positionY: 0,
                    positionZ: 0,
                    rotationX: 0,
                    rotationY: 0,
                    rotationZ: 0,
                    scaleX: 1,
                    scaleY: 1,
                    scaleZ: 1
                }),
                s = (e, t) => {
                    let a = Object.keys(t.config.value);
                    if (e) {
                        let t = o(a, Object.keys(e));
                        return t.length ? t.reduce((e, t) => (e[t] = r[t], e), e) : e
                    }
                    return a.reduce((e, t) => (e[t] = r[t], e), {})
                },
                u = e => e.value,
                f = (e, t) => {
                    let a = t?.config?.target?.pluginElement;
                    return a ? i(a) : null
                },
                p = (e, t, a) => {
                    let n = d();
                    if (!n) return;
                    let i = n.getInstance(e),
                        o = a.config.target.objectId,
                        c = e => {
                            if (!e) throw Error("Invalid spline app passed to renderSpline");
                            let a = o && e.findObjectById(o);
                            if (!a) return;
                            let {
                                PLUGIN_SPLINE: n
                            } = t;
                            null != n.positionX && (a.position.x = n.positionX), null != n.positionY && (a.position.y = n.positionY), null != n.positionZ && (a.position.z = n.positionZ), null != n.rotationX && (a.rotation.x = n.rotationX), null != n.rotationY && (a.rotation.y = n.rotationY), null != n.rotationZ && (a.rotation.z = n.rotationZ), null != n.scaleX && (a.scale.x = n.scaleX), null != n.scaleY && (a.scale.y = n.scaleY), null != n.scaleZ && (a.scale.z = n.scaleZ)
                        };
                    i ? c(i.spline) : n.setLoadHandler(e, c)
                },
                E = () => null
        },
        1407: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = {
                clearPlugin: function() {
                    return p
                },
                createPluginInstance: function() {
                    return s
                },
                getPluginConfig: function() {
                    return o
                },
                getPluginDestination: function() {
                    return r
                },
                getPluginDuration: function() {
                    return c
                },
                getPluginOrigin: function() {
                    return l
                },
                renderPlugin: function() {
                    return f
                }
            };
            for (var i in n) Object.defineProperty(t, i, {
                enumerable: !0,
                get: n[i]
            });
            let d = a(380),
                o = (e, t) => e.value[t],
                c = () => null,
                l = (e, t) => {
                    if (e) return e;
                    let a = t.config.value,
                        n = t.config.target.objectId,
                        i = getComputedStyle(document.documentElement).getPropertyValue(n);
                    return null != a.size ? {
                        size: parseInt(i, 10)
                    } : "%" === a.unit || "-" === a.unit ? {
                        size: parseFloat(i)
                    } : null != a.red && null != a.green && null != a.blue ? (0, d.normalizeColor)(i) : void 0
                },
                r = e => e.value,
                s = () => null,
                u = {
                    color: {
                        match: ({
                            red: e,
                            green: t,
                            blue: a,
                            alpha: n
                        }) => [e, t, a, n].every(e => null != e),
                        getValue: ({
                            red: e,
                            green: t,
                            blue: a,
                            alpha: n
                        }) => `rgba(${e}, ${t}, ${a}, ${n})`
                    },
                    size: {
                        match: ({
                            size: e
                        }) => null != e,
                        getValue: ({
                            size: e
                        }, t) => "-" === t ? e : `${e}${t}`
                    }
                },
                f = (e, t, a) => {
                    let {
                        target: {
                            objectId: n
                        },
                        value: {
                            unit: i
                        }
                    } = a.config, d = t.PLUGIN_VARIABLE, o = Object.values(u).find(e => e.match(d, i));
                    o && document.documentElement.style.setProperty(n, o.getValue(d, i))
                },
                p = (e, t) => {
                    let a = t.config.target.objectId;
                    document.documentElement.style.removeProperty(a)
                }
        },
        3690: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "pluginMethodMap", {
                enumerable: !0,
                get: function() {
                    return s
                }
            });
            let n = a(7087),
                i = r(a(7377)),
                d = r(a(2866)),
                o = r(a(2570)),
                c = r(a(1407));

            function l(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    a = new WeakMap;
                return (l = function(e) {
                    return e ? a : t
                })(e)
            }

            function r(e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var a = l(t);
                if (a && a.has(e)) return a.get(e);
                var n = {
                        __proto__: null
                    },
                    i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var d in e)
                    if ("default" !== d && Object.prototype.hasOwnProperty.call(e, d)) {
                        var o = i ? Object.getOwnPropertyDescriptor(e, d) : null;
                        o && (o.get || o.set) ? Object.defineProperty(n, d, o) : n[d] = e[d]
                    } return n.default = e, a && a.set(e, n), n
            }
            let s = new Map([
                [n.ActionTypeConsts.PLUGIN_LOTTIE, {
                    ...i
                }],
                [n.ActionTypeConsts.PLUGIN_SPLINE, {
                    ...d
                }],
                [n.ActionTypeConsts.PLUGIN_RIVE, {
                    ...o
                }],
                [n.ActionTypeConsts.PLUGIN_VARIABLE, {
                    ...c
                }]
            ])
        },
        8023: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = {
                IX2_ACTION_LIST_PLAYBACK_CHANGED: function() {
                    return m
                },
                IX2_ANIMATION_FRAME_CHANGED: function() {
                    return E
                },
                IX2_CLEAR_REQUESTED: function() {
                    return u
                },
                IX2_ELEMENT_STATE_CHANGED: function() {
                    return b
                },
                IX2_EVENT_LISTENER_ADDED: function() {
                    return f
                },
                IX2_EVENT_STATE_CHANGED: function() {
                    return p
                },
                IX2_INSTANCE_ADDED: function() {
                    return T
                },
                IX2_INSTANCE_REMOVED: function() {
                    return y
                },
                IX2_INSTANCE_STARTED: function() {
                    return g
                },
                IX2_MEDIA_QUERIES_DEFINED: function() {
                    return _
                },
                IX2_PARAMETER_CHANGED: function() {
                    return I
                },
                IX2_PLAYBACK_REQUESTED: function() {
                    return r
                },
                IX2_PREVIEW_REQUESTED: function() {
                    return l
                },
                IX2_RAW_DATA_IMPORTED: function() {
                    return i
                },
                IX2_SESSION_INITIALIZED: function() {
                    return d
                },
                IX2_SESSION_STARTED: function() {
                    return o
                },
                IX2_SESSION_STOPPED: function() {
                    return c
                },
                IX2_STOP_REQUESTED: function() {
                    return s
                },
                IX2_TEST_FRAME_RENDERED: function() {
                    return R
                },
                IX2_VIEWPORT_WIDTH_CHANGED: function() {
                    return O
                }
            };
            for (var n in a) Object.defineProperty(t, n, {
                enumerable: !0,
                get: a[n]
            });
            let i = "IX2_RAW_DATA_IMPORTED",
                d = "IX2_SESSION_INITIALIZED",
                o = "IX2_SESSION_STARTED",
                c = "IX2_SESSION_STOPPED",
                l = "IX2_PREVIEW_REQUESTED",
                r = "IX2_PLAYBACK_REQUESTED",
                s = "IX2_STOP_REQUESTED",
                u = "IX2_CLEAR_REQUESTED",
                f = "IX2_EVENT_LISTENER_ADDED",
                p = "IX2_EVENT_STATE_CHANGED",
                E = "IX2_ANIMATION_FRAME_CHANGED",
                I = "IX2_PARAMETER_CHANGED",
                T = "IX2_INSTANCE_ADDED",
                g = "IX2_INSTANCE_STARTED",
                y = "IX2_INSTANCE_REMOVED",
                b = "IX2_ELEMENT_STATE_CHANGED",
                m = "IX2_ACTION_LIST_PLAYBACK_CHANGED",
                O = "IX2_VIEWPORT_WIDTH_CHANGED",
                _ = "IX2_MEDIA_QUERIES_DEFINED",
                R = "IX2_TEST_FRAME_RENDERED"
        },
        2686: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = {
                ABSTRACT_NODE: function() {
                    return et
                },
                AUTO: function() {
                    return H
                },
                BACKGROUND: function() {
                    return w
                },
                BACKGROUND_COLOR: function() {
                    return x
                },
                BAR_DELIMITER: function() {
                    return Q
                },
                BORDER_COLOR: function() {
                    return F
                },
                BOUNDARY_SELECTOR: function() {
                    return l
                },
                CHILDREN: function() {
                    return j
                },
                COLON_DELIMITER: function() {
                    return z
                },
                COLOR: function() {
                    return D
                },
                COMMA_DELIMITER: function() {
                    return W
                },
                CONFIG_UNIT: function() {
                    return T
                },
                CONFIG_VALUE: function() {
                    return f
                },
                CONFIG_X_UNIT: function() {
                    return p
                },
                CONFIG_X_VALUE: function() {
                    return r
                },
                CONFIG_Y_UNIT: function() {
                    return E
                },
                CONFIG_Y_VALUE: function() {
                    return s
                },
                CONFIG_Z_UNIT: function() {
                    return I
                },
                CONFIG_Z_VALUE: function() {
                    return u
                },
                DISPLAY: function() {
                    return B
                },
                FILTER: function() {
                    return V
                },
                FLEX: function() {
                    return X
                },
                FONT_VARIATION_SETTINGS: function() {
                    return G
                },
                HEIGHT: function() {
                    return k
                },
                HTML_ELEMENT: function() {
                    return J
                },
                IMMEDIATE_CHILDREN: function() {
                    return $
                },
                IX2_ID_DELIMITER: function() {
                    return i
                },
                OPACITY: function() {
                    return U
                },
                PARENT: function() {
                    return Z
                },
                PLAIN_OBJECT: function() {
                    return ee
                },
                PRESERVE_3D: function() {
                    return K
                },
                RENDER_GENERAL: function() {
                    return en
                },
                RENDER_PLUGIN: function() {
                    return ed
                },
                RENDER_STYLE: function() {
                    return ei
                },
                RENDER_TRANSFORM: function() {
                    return ea
                },
                ROTATE_X: function() {
                    return N
                },
                ROTATE_Y: function() {
                    return A
                },
                ROTATE_Z: function() {
                    return S
                },
                SCALE_3D: function() {
                    return L
                },
                SCALE_X: function() {
                    return _
                },
                SCALE_Y: function() {
                    return R
                },
                SCALE_Z: function() {
                    return v
                },
                SIBLINGS: function() {
                    return q
                },
                SKEW: function() {
                    return h
                },
                SKEW_X: function() {
                    return C
                },
                SKEW_Y: function() {
                    return M
                },
                TRANSFORM: function() {
                    return g
                },
                TRANSLATE_3D: function() {
                    return O
                },
                TRANSLATE_X: function() {
                    return y
                },
                TRANSLATE_Y: function() {
                    return b
                },
                TRANSLATE_Z: function() {
                    return m
                },
                WF_PAGE: function() {
                    return d
                },
                WIDTH: function() {
                    return P
                },
                WILL_CHANGE: function() {
                    return Y
                },
                W_MOD_IX: function() {
                    return c
                },
                W_MOD_JS: function() {
                    return o
                }
            };
            for (var n in a) Object.defineProperty(t, n, {
                enumerable: !0,
                get: a[n]
            });
            let i = "|",
                d = "data-wf-page",
                o = "w-mod-js",
                c = "w-mod-ix",
                l = ".w-dyn-item",
                r = "xValue",
                s = "yValue",
                u = "zValue",
                f = "value",
                p = "xUnit",
                E = "yUnit",
                I = "zUnit",
                T = "unit",
                g = "transform",
                y = "translateX",
                b = "translateY",
                m = "translateZ",
                O = "translate3d",
                _ = "scaleX",
                R = "scaleY",
                v = "scaleZ",
                L = "scale3d",
                N = "rotateX",
                A = "rotateY",
                S = "rotateZ",
                h = "skew",
                C = "skewX",
                M = "skewY",
                U = "opacity",
                V = "filter",
                G = "font-variation-settings",
                P = "width",
                k = "height",
                x = "backgroundColor",
                w = "background",
                F = "borderColor",
                D = "color",
                B = "display",
                X = "flex",
                Y = "willChange",
                H = "AUTO",
                W = ",",
                z = ":",
                Q = "|",
                j = "CHILDREN",
                $ = "IMMEDIATE_CHILDREN",
                q = "SIBLINGS",
                Z = "PARENT",
                K = "preserve-3d",
                J = "HTML_ELEMENT",
                ee = "PLAIN_OBJECT",
                et = "ABSTRACT_NODE",
                ea = "RENDER_TRANSFORM",
                en = "RENDER_GENERAL",
                ei = "RENDER_STYLE",
                ed = "RENDER_PLUGIN"
        },
        262: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = {
                ActionAppliesTo: function() {
                    return d
                },
                ActionTypeConsts: function() {
                    return i
                }
            };
            for (var n in a) Object.defineProperty(t, n, {
                enumerable: !0,
                get: a[n]
            });
            let i = {
                    TRANSFORM_MOVE: "TRANSFORM_MOVE",
                    TRANSFORM_SCALE: "TRANSFORM_SCALE",
                    TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
                    TRANSFORM_SKEW: "TRANSFORM_SKEW",
                    STYLE_OPACITY: "STYLE_OPACITY",
                    STYLE_SIZE: "STYLE_SIZE",
                    STYLE_FILTER: "STYLE_FILTER",
                    STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
                    STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
                    STYLE_BORDER: "STYLE_BORDER",
                    STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
                    OBJECT_VALUE: "OBJECT_VALUE",
                    PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
                    PLUGIN_SPLINE: "PLUGIN_SPLINE",
                    PLUGIN_RIVE: "PLUGIN_RIVE",
                    PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
                    GENERAL_DISPLAY: "GENERAL_DISPLAY",
                    GENERAL_START_ACTION: "GENERAL_START_ACTION",
                    GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
                    GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
                    GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
                    GENERAL_LOOP: "GENERAL_LOOP",
                    STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW"
                },
                d = {
                    ELEMENT: "ELEMENT",
                    ELEMENT_CLASS: "ELEMENT_CLASS",
                    TRIGGER_ELEMENT: "TRIGGER_ELEMENT"
                }
        },
        7087: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = {
                ActionTypeConsts: function() {
                    return o.ActionTypeConsts
                },
                IX2EngineActionTypes: function() {
                    return c
                },
                IX2EngineConstants: function() {
                    return l
                },
                QuickEffectIds: function() {
                    return d.QuickEffectIds
                }
            };
            for (var i in n) Object.defineProperty(t, i, {
                enumerable: !0,
                get: n[i]
            });
            let d = r(a(1833), t),
                o = r(a(262), t);
            r(a(8704), t), r(a(3213), t);
            let c = u(a(8023)),
                l = u(a(2686));

            function r(e, t) {
                return Object.keys(e).forEach(function(a) {
                    "default" === a || Object.prototype.hasOwnProperty.call(t, a) || Object.defineProperty(t, a, {
                        enumerable: !0,
                        get: function() {
                            return e[a]
                        }
                    })
                }), e
            }

            function s(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    a = new WeakMap;
                return (s = function(e) {
                    return e ? a : t
                })(e)
            }

            function u(e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var a = s(t);
                if (a && a.has(e)) return a.get(e);
                var n = {
                        __proto__: null
                    },
                    i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var d in e)
                    if ("default" !== d && Object.prototype.hasOwnProperty.call(e, d)) {
                        var o = i ? Object.getOwnPropertyDescriptor(e, d) : null;
                        o && (o.get || o.set) ? Object.defineProperty(n, d, o) : n[d] = e[d]
                    } return n.default = e, a && a.set(e, n), n
            }
        },
        3213: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "ReducedMotionTypes", {
                enumerable: !0,
                get: function() {
                    return s
                }
            });
            let {
                TRANSFORM_MOVE: n,
                TRANSFORM_SCALE: i,
                TRANSFORM_ROTATE: d,
                TRANSFORM_SKEW: o,
                STYLE_SIZE: c,
                STYLE_FILTER: l,
                STYLE_FONT_VARIATION: r
            } = a(262).ActionTypeConsts, s = {
                [n]: !0,
                [i]: !0,
                [d]: !0,
                [o]: !0,
                [c]: !0,
                [l]: !0,
                [r]: !0
            }
        },
        1833: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = {
                EventAppliesTo: function() {
                    return d
                },
                EventBasedOn: function() {
                    return o
                },
                EventContinuousMouseAxes: function() {
                    return c
                },
                EventLimitAffectedElements: function() {
                    return l
                },
                EventTypeConsts: function() {
                    return i
                },
                QuickEffectDirectionConsts: function() {
                    return s
                },
                QuickEffectIds: function() {
                    return r
                }
            };
            for (var n in a) Object.defineProperty(t, n, {
                enumerable: !0,
                get: a[n]
            });
            let i = {
                    NAVBAR_OPEN: "NAVBAR_OPEN",
                    NAVBAR_CLOSE: "NAVBAR_CLOSE",
                    TAB_ACTIVE: "TAB_ACTIVE",
                    TAB_INACTIVE: "TAB_INACTIVE",
                    SLIDER_ACTIVE: "SLIDER_ACTIVE",
                    SLIDER_INACTIVE: "SLIDER_INACTIVE",
                    DROPDOWN_OPEN: "DROPDOWN_OPEN",
                    DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
                    MOUSE_CLICK: "MOUSE_CLICK",
                    MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
                    MOUSE_DOWN: "MOUSE_DOWN",
                    MOUSE_UP: "MOUSE_UP",
                    MOUSE_OVER: "MOUSE_OVER",
                    MOUSE_OUT: "MOUSE_OUT",
                    MOUSE_MOVE: "MOUSE_MOVE",
                    MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
                    SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
                    SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
                    SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
                    ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
                    ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
                    PAGE_START: "PAGE_START",
                    PAGE_FINISH: "PAGE_FINISH",
                    PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
                    PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
                    PAGE_SCROLL: "PAGE_SCROLL"
                },
                d = {
                    ELEMENT: "ELEMENT",
                    CLASS: "CLASS",
                    PAGE: "PAGE"
                },
                o = {
                    ELEMENT: "ELEMENT",
                    VIEWPORT: "VIEWPORT"
                },
                c = {
                    X_AXIS: "X_AXIS",
                    Y_AXIS: "Y_AXIS"
                },
                l = {
                    CHILDREN: "CHILDREN",
                    SIBLINGS: "SIBLINGS",
                    IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN"
                },
                r = {
                    FADE_EFFECT: "FADE_EFFECT",
                    SLIDE_EFFECT: "SLIDE_EFFECT",
                    GROW_EFFECT: "GROW_EFFECT",
                    SHRINK_EFFECT: "SHRINK_EFFECT",
                    SPIN_EFFECT: "SPIN_EFFECT",
                    FLY_EFFECT: "FLY_EFFECT",
                    POP_EFFECT: "POP_EFFECT",
                    FLIP_EFFECT: "FLIP_EFFECT",
                    JIGGLE_EFFECT: "JIGGLE_EFFECT",
                    PULSE_EFFECT: "PULSE_EFFECT",
                    DROP_EFFECT: "DROP_EFFECT",
                    BLINK_EFFECT: "BLINK_EFFECT",
                    BOUNCE_EFFECT: "BOUNCE_EFFECT",
                    FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
                    FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
                    RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
                    JELLO_EFFECT: "JELLO_EFFECT",
                    GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
                    SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
                    PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT"
                },
                s = {
                    LEFT: "LEFT",
                    RIGHT: "RIGHT",
                    BOTTOM: "BOTTOM",
                    TOP: "TOP",
                    BOTTOM_LEFT: "BOTTOM_LEFT",
                    BOTTOM_RIGHT: "BOTTOM_RIGHT",
                    TOP_RIGHT: "TOP_RIGHT",
                    TOP_LEFT: "TOP_LEFT",
                    CLOCKWISE: "CLOCKWISE",
                    COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
                }
        },
        8704: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "InteractionTypeConsts", {
                enumerable: !0,
                get: function() {
                    return a
                }
            });
            let a = {
                MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
                MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
                MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
                SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
                SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
                MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
                PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
                PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
                PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
                NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
                DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
                ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
                TAB_INTERACTION: "TAB_INTERACTION",
                SLIDER_INTERACTION: "SLIDER_INTERACTION"
            }
        },
        380: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "normalizeColor", {
                enumerable: !0,
                get: function() {
                    return n
                }
            });
            let a = {
                aliceblue: "#F0F8FF",
                antiquewhite: "#FAEBD7",
                aqua: "#00FFFF",
                aquamarine: "#7FFFD4",
                azure: "#F0FFFF",
                beige: "#F5F5DC",
                bisque: "#FFE4C4",
                black: "#000000",
                blanchedalmond: "#FFEBCD",
                blue: "#0000FF",
                blueviolet: "#8A2BE2",
                brown: "#A52A2A",
                burlywood: "#DEB887",
                cadetblue: "#5F9EA0",
                chartreuse: "#7FFF00",
                chocolate: "#D2691E",
                coral: "#FF7F50",
                cornflowerblue: "#6495ED",
                cornsilk: "#FFF8DC",
                crimson: "#DC143C",
                cyan: "#00FFFF",
                darkblue: "#00008B",
                darkcyan: "#008B8B",
                darkgoldenrod: "#B8860B",
                darkgray: "#A9A9A9",
                darkgreen: "#006400",
                darkgrey: "#A9A9A9",
                darkkhaki: "#BDB76B",
                darkmagenta: "#8B008B",
                darkolivegreen: "#556B2F",
                darkorange: "#FF8C00",
                darkorchid: "#9932CC",
                darkred: "#8B0000",
                darksalmon: "#E9967A",
                darkseagreen: "#8FBC8F",
                darkslateblue: "#483D8B",
                darkslategray: "#2F4F4F",
                darkslategrey: "#2F4F4F",
                darkturquoise: "#00CED1",
                darkviolet: "#9400D3",
                deeppink: "#FF1493",
                deepskyblue: "#00BFFF",
                dimgray: "#696969",
                dimgrey: "#696969",
                dodgerblue: "#1E90FF",
                firebrick: "#B22222",
                floralwhite: "#FFFAF0",
                forestgreen: "#228B22",
                fuchsia: "#FF00FF",
                gainsboro: "#DCDCDC",
                ghostwhite: "#F8F8FF",
                gold: "#FFD700",
                goldenrod: "#DAA520",
                gray: "#808080",
                green: "#008000",
                greenyellow: "#ADFF2F",
                grey: "#808080",
                honeydew: "#F0FFF0",
                hotpink: "#FF69B4",
                indianred: "#CD5C5C",
                indigo: "#4B0082",
                ivory: "#FFFFF0",
                khaki: "#F0E68C",
                lavender: "#E6E6FA",
                lavenderblush: "#FFF0F5",
                lawngreen: "#7CFC00",
                lemonchiffon: "#FFFACD",
                lightblue: "#ADD8E6",
                lightcoral: "#F08080",
                lightcyan: "#E0FFFF",
                lightgoldenrodyellow: "#FAFAD2",
                lightgray: "#D3D3D3",
                lightgreen: "#90EE90",
                lightgrey: "#D3D3D3",
                lightpink: "#FFB6C1",
                lightsalmon: "#FFA07A",
                lightseagreen: "#20B2AA",
                lightskyblue: "#87CEFA",
                lightslategray: "#778899",
                lightslategrey: "#778899",
                lightsteelblue: "#B0C4DE",
                lightyellow: "#FFFFE0",
                lime: "#00FF00",
                limegreen: "#32CD32",
                linen: "#FAF0E6",
                magenta: "#FF00FF",
                maroon: "#800000",
                mediumaquamarine: "#66CDAA",
                mediumblue: "#0000CD",
                mediumorchid: "#BA55D3",
                mediumpurple: "#9370DB",
                mediumseagreen: "#3CB371",
                mediumslateblue: "#7B68EE",
                mediumspringgreen: "#00FA9A",
                mediumturquoise: "#48D1CC",
                mediumvioletred: "#C71585",
                midnightblue: "#191970",
                mintcream: "#F5FFFA",
                mistyrose: "#FFE4E1",
                moccasin: "#FFE4B5",
                navajowhite: "#FFDEAD",
                navy: "#000080",
                oldlace: "#FDF5E6",
                olive: "#808000",
                olivedrab: "#6B8E23",
                orange: "#FFA500",
                orangered: "#FF4500",
                orchid: "#DA70D6",
                palegoldenrod: "#EEE8AA",
                palegreen: "#98FB98",
                paleturquoise: "#AFEEEE",
                palevioletred: "#DB7093",
                papayawhip: "#FFEFD5",
                peachpuff: "#FFDAB9",
                peru: "#CD853F",
                pink: "#FFC0CB",
                plum: "#DDA0DD",
                powderblue: "#B0E0E6",
                purple: "#800080",
                rebeccapurple: "#663399",
                red: "#FF0000",
                rosybrown: "#BC8F8F",
                royalblue: "#4169E1",
                saddlebrown: "#8B4513",
                salmon: "#FA8072",
                sandybrown: "#F4A460",
                seagreen: "#2E8B57",
                seashell: "#FFF5EE",
                sienna: "#A0522D",
                silver: "#C0C0C0",
                skyblue: "#87CEEB",
                slateblue: "#6A5ACD",
                slategray: "#708090",
                slategrey: "#708090",
                snow: "#FFFAFA",
                springgreen: "#00FF7F",
                steelblue: "#4682B4",
                tan: "#D2B48C",
                teal: "#008080",
                thistle: "#D8BFD8",
                tomato: "#FF6347",
                turquoise: "#40E0D0",
                violet: "#EE82EE",
                wheat: "#F5DEB3",
                white: "#FFFFFF",
                whitesmoke: "#F5F5F5",
                yellow: "#FFFF00",
                yellowgreen: "#9ACD32"
            };

            function n(e) {
                let t, n, i, d = 1,
                    o = e.replace(/\s/g, "").toLowerCase(),
                    c = ("string" == typeof a[o] ? a[o].toLowerCase() : null) || o;
                if (c.startsWith("#")) {
                    let e = c.substring(1);
                    3 === e.length || 4 === e.length ? (t = parseInt(e[0] + e[0], 16), n = parseInt(e[1] + e[1], 16), i = parseInt(e[2] + e[2], 16), 4 === e.length && (d = parseInt(e[3] + e[3], 16) / 255)) : (6 === e.length || 8 === e.length) && (t = parseInt(e.substring(0, 2), 16), n = parseInt(e.substring(2, 4), 16), i = parseInt(e.substring(4, 6), 16), 8 === e.length && (d = parseInt(e.substring(6, 8), 16) / 255))
                } else if (c.startsWith("rgba")) {
                    let e = c.match(/rgba\(([^)]+)\)/)[1].split(",");
                    t = parseInt(e[0], 10), n = parseInt(e[1], 10), i = parseInt(e[2], 10), d = parseFloat(e[3])
                } else if (c.startsWith("rgb")) {
                    let e = c.match(/rgb\(([^)]+)\)/)[1].split(",");
                    t = parseInt(e[0], 10), n = parseInt(e[1], 10), i = parseInt(e[2], 10)
                } else if (c.startsWith("hsla")) {
                    let e, a, o, l = c.match(/hsla\(([^)]+)\)/)[1].split(","),
                        r = parseFloat(l[0]),
                        s = parseFloat(l[1].replace("%", "")) / 100,
                        u = parseFloat(l[2].replace("%", "")) / 100;
                    d = parseFloat(l[3]);
                    let f = (1 - Math.abs(2 * u - 1)) * s,
                        p = f * (1 - Math.abs(r / 60 % 2 - 1)),
                        E = u - f / 2;
                    r >= 0 && r < 60 ? (e = f, a = p, o = 0) : r >= 60 && r < 120 ? (e = p, a = f, o = 0) : r >= 120 && r < 180 ? (e = 0, a = f, o = p) : r >= 180 && r < 240 ? (e = 0, a = p, o = f) : r >= 240 && r < 300 ? (e = p, a = 0, o = f) : (e = f, a = 0, o = p), t = Math.round((e + E) * 255), n = Math.round((a + E) * 255), i = Math.round((o + E) * 255)
                } else if (c.startsWith("hsl")) {
                    let e, a, d, o = c.match(/hsl\(([^)]+)\)/)[1].split(","),
                        l = parseFloat(o[0]),
                        r = parseFloat(o[1].replace("%", "")) / 100,
                        s = parseFloat(o[2].replace("%", "")) / 100,
                        u = (1 - Math.abs(2 * s - 1)) * r,
                        f = u * (1 - Math.abs(l / 60 % 2 - 1)),
                        p = s - u / 2;
                    l >= 0 && l < 60 ? (e = u, a = f, d = 0) : l >= 60 && l < 120 ? (e = f, a = u, d = 0) : l >= 120 && l < 180 ? (e = 0, a = u, d = f) : l >= 180 && l < 240 ? (e = 0, a = f, d = u) : l >= 240 && l < 300 ? (e = f, a = 0, d = u) : (e = u, a = 0, d = f), t = Math.round((e + p) * 255), n = Math.round((a + p) * 255), i = Math.round((d + p) * 255)
                }
                if (Number.isNaN(t) || Number.isNaN(n) || Number.isNaN(i)) throw Error(`Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`);
                return {
                    red: t,
                    green: n,
                    blue: i,
                    alpha: d
                }
            }
        },
        9468: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = {
                IX2BrowserSupport: function() {
                    return d
                },
                IX2EasingUtils: function() {
                    return c
                },
                IX2Easings: function() {
                    return o
                },
                IX2ElementsReducer: function() {
                    return l
                },
                IX2VanillaPlugins: function() {
                    return r
                },
                IX2VanillaUtils: function() {
                    return s
                }
            };
            for (var i in n) Object.defineProperty(t, i, {
                enumerable: !0,
                get: n[i]
            });
            let d = f(a(2662)),
                o = f(a(8686)),
                c = f(a(3767)),
                l = f(a(5861)),
                r = f(a(1799)),
                s = f(a(4124));

            function u(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    a = new WeakMap;
                return (u = function(e) {
                    return e ? a : t
                })(e)
            }

            function f(e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var a = u(t);
                if (a && a.has(e)) return a.get(e);
                var n = {
                        __proto__: null
                    },
                    i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var d in e)
                    if ("default" !== d && Object.prototype.hasOwnProperty.call(e, d)) {
                        var o = i ? Object.getOwnPropertyDescriptor(e, d) : null;
                        o && (o.get || o.set) ? Object.defineProperty(n, d, o) : n[d] = e[d]
                    } return n.default = e, a && a.set(e, n), n
            }
        },
        2662: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n, i = {
                ELEMENT_MATCHES: function() {
                    return r
                },
                FLEX_PREFIXED: function() {
                    return s
                },
                IS_BROWSER_ENV: function() {
                    return c
                },
                TRANSFORM_PREFIXED: function() {
                    return u
                },
                TRANSFORM_STYLE_PREFIXED: function() {
                    return p
                },
                withBrowser: function() {
                    return l
                }
            };
            for (var d in i) Object.defineProperty(t, d, {
                enumerable: !0,
                get: i[d]
            });
            let o = (n = a(9777)) && n.__esModule ? n : {
                    default: n
                },
                c = "undefined" != typeof window,
                l = (e, t) => c ? e() : t,
                r = l(() => (0, o.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], e => e in Element.prototype)),
                s = l(() => {
                    let e = document.createElement("i"),
                        t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"];
                    try {
                        let {
                            length: a
                        } = t;
                        for (let n = 0; n < a; n++) {
                            let a = t[n];
                            if (e.style.display = a, e.style.display === a) return a
                        }
                        return ""
                    } catch (e) {
                        return ""
                    }
                }, "flex"),
                u = l(() => {
                    let e = document.createElement("i");
                    if (null == e.style.transform) {
                        let t = ["Webkit", "Moz", "ms"],
                            {
                                length: a
                            } = t;
                        for (let n = 0; n < a; n++) {
                            let a = t[n] + "Transform";
                            if (void 0 !== e.style[a]) return a
                        }
                    }
                    return "transform"
                }, "transform"),
                f = u.split("transform")[0],
                p = f ? f + "TransformStyle" : "transformStyle"
        },
        3767: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n, i = {
                applyEasing: function() {
                    return u
                },
                createBezierEasing: function() {
                    return s
                },
                optimizeFloat: function() {
                    return r
                }
            };
            for (var d in i) Object.defineProperty(t, d, {
                enumerable: !0,
                get: i[d]
            });
            let o = function(e, t) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var a = l(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = {
                            __proto__: null
                        },
                        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var d in e)
                        if ("default" !== d && Object.prototype.hasOwnProperty.call(e, d)) {
                            var o = i ? Object.getOwnPropertyDescriptor(e, d) : null;
                            o && (o.get || o.set) ? Object.defineProperty(n, d, o) : n[d] = e[d]
                        } return n.default = e, a && a.set(e, n), n
                }(a(8686)),
                c = (n = a(1361)) && n.__esModule ? n : {
                    default: n
                };

            function l(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    a = new WeakMap;
                return (l = function(e) {
                    return e ? a : t
                })(e)
            }

            function r(e, t = 5, a = 10) {
                let n = Math.pow(a, t),
                    i = Number(Math.round(e * n) / n);
                return Math.abs(i) > 1e-4 ? i : 0
            }

            function s(e) {
                return (0, c.default)(...e)
            }

            function u(e, t, a) {
                return 0 === t ? 0 : 1 === t ? 1 : a ? r(t > 0 ? a(t) : t) : r(t > 0 && e && o[e] ? o[e](t) : t)
            }
        },
        8686: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n, i = {
                bounce: function() {
                    return X
                },
                bouncePast: function() {
                    return Y
                },
                ease: function() {
                    return c
                },
                easeIn: function() {
                    return l
                },
                easeInOut: function() {
                    return s
                },
                easeOut: function() {
                    return r
                },
                inBack: function() {
                    return V
                },
                inCirc: function() {
                    return h
                },
                inCubic: function() {
                    return E
                },
                inElastic: function() {
                    return k
                },
                inExpo: function() {
                    return N
                },
                inOutBack: function() {
                    return P
                },
                inOutCirc: function() {
                    return M
                },
                inOutCubic: function() {
                    return T
                },
                inOutElastic: function() {
                    return w
                },
                inOutExpo: function() {
                    return S
                },
                inOutQuad: function() {
                    return p
                },
                inOutQuart: function() {
                    return b
                },
                inOutQuint: function() {
                    return _
                },
                inOutSine: function() {
                    return L
                },
                inQuad: function() {
                    return u
                },
                inQuart: function() {
                    return g
                },
                inQuint: function() {
                    return m
                },
                inSine: function() {
                    return R
                },
                outBack: function() {
                    return G
                },
                outBounce: function() {
                    return U
                },
                outCirc: function() {
                    return C
                },
                outCubic: function() {
                    return I
                },
                outElastic: function() {
                    return x
                },
                outExpo: function() {
                    return A
                },
                outQuad: function() {
                    return f
                },
                outQuart: function() {
                    return y
                },
                outQuint: function() {
                    return O
                },
                outSine: function() {
                    return v
                },
                swingFrom: function() {
                    return D
                },
                swingFromTo: function() {
                    return F
                },
                swingTo: function() {
                    return B
                }
            };
            for (var d in i) Object.defineProperty(t, d, {
                enumerable: !0,
                get: i[d]
            });
            let o = (n = a(1361)) && n.__esModule ? n : {
                    default: n
                },
                c = (0, o.default)(.25, .1, .25, 1),
                l = (0, o.default)(.42, 0, 1, 1),
                r = (0, o.default)(0, 0, .58, 1),
                s = (0, o.default)(.42, 0, .58, 1);

            function u(e) {
                return Math.pow(e, 2)
            }

            function f(e) {
                return -(Math.pow(e - 1, 2) - 1)
            }

            function p(e) {
                return (e /= .5) < 1 ? .5 * Math.pow(e, 2) : -.5 * ((e -= 2) * e - 2)
            }

            function E(e) {
                return Math.pow(e, 3)
            }

            function I(e) {
                return Math.pow(e - 1, 3) + 1
            }

            function T(e) {
                return (e /= .5) < 1 ? .5 * Math.pow(e, 3) : .5 * (Math.pow(e - 2, 3) + 2)
            }

            function g(e) {
                return Math.pow(e, 4)
            }

            function y(e) {
                return -(Math.pow(e - 1, 4) - 1)
            }

            function b(e) {
                return (e /= .5) < 1 ? .5 * Math.pow(e, 4) : -.5 * ((e -= 2) * Math.pow(e, 3) - 2)
            }

            function m(e) {
                return Math.pow(e, 5)
            }

            function O(e) {
                return Math.pow(e - 1, 5) + 1
            }

            function _(e) {
                return (e /= .5) < 1 ? .5 * Math.pow(e, 5) : .5 * (Math.pow(e - 2, 5) + 2)
            }

            function R(e) {
                return -Math.cos(Math.PI / 2 * e) + 1
            }

            function v(e) {
                return Math.sin(Math.PI / 2 * e)
            }

            function L(e) {
                return -.5 * (Math.cos(Math.PI * e) - 1)
            }

            function N(e) {
                return 0 === e ? 0 : Math.pow(2, 10 * (e - 1))
            }

            function A(e) {
                return 1 === e ? 1 : -Math.pow(2, -10 * e) + 1
            }

            function S(e) {
                return 0 === e ? 0 : 1 === e ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (-Math.pow(2, -10 * --e) + 2)
            }

            function h(e) {
                return -(Math.sqrt(1 - e * e) - 1)
            }

            function C(e) {
                return Math.sqrt(1 - Math.pow(e - 1, 2))
            }

            function M(e) {
                return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
            }

            function U(e) {
                return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
            }

            function V(e) {
                return e * e * (2.70158 * e - 1.70158)
            }

            function G(e) {
                return (e -= 1) * e * (2.70158 * e + 1.70158) + 1
            }

            function P(e) {
                let t = 1.70158;
                return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
            }

            function k(e) {
                let t = 1.70158,
                    a = 0,
                    n = 1;
                return 0 === e ? 0 : 1 === e ? 1 : (a || (a = .3), n < 1 ? (n = 1, t = a / 4) : t = a / (2 * Math.PI) * Math.asin(1 / n), -(n * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * Math.PI * (e - t) / a)))
            }

            function x(e) {
                let t = 1.70158,
                    a = 0,
                    n = 1;
                return 0 === e ? 0 : 1 === e ? 1 : (a || (a = .3), n < 1 ? (n = 1, t = a / 4) : t = a / (2 * Math.PI) * Math.asin(1 / n), n * Math.pow(2, -10 * e) * Math.sin(2 * Math.PI * (e - t) / a) + 1)
            }

            function w(e) {
                let t = 1.70158,
                    a = 0,
                    n = 1;
                return 0 === e ? 0 : 2 == (e /= .5) ? 1 : (a || (a = .3 * 1.5), n < 1 ? (n = 1, t = a / 4) : t = a / (2 * Math.PI) * Math.asin(1 / n), e < 1) ? -.5 * (n * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * Math.PI * (e - t) / a)) : n * Math.pow(2, -10 * (e -= 1)) * Math.sin(2 * Math.PI * (e - t) / a) * .5 + 1
            }

            function F(e) {
                let t = 1.70158;
                return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
            }

            function D(e) {
                return e * e * (2.70158 * e - 1.70158)
            }

            function B(e) {
                return (e -= 1) * e * (2.70158 * e + 1.70158) + 1
            }

            function X(e) {
                return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
            }

            function Y(e) {
                return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
            }
        },
        1799: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = {
                clearPlugin: function() {
                    return I
                },
                createPluginInstance: function() {
                    return p
                },
                getPluginConfig: function() {
                    return r
                },
                getPluginDestination: function() {
                    return f
                },
                getPluginDuration: function() {
                    return u
                },
                getPluginOrigin: function() {
                    return s
                },
                isPluginType: function() {
                    return c
                },
                renderPlugin: function() {
                    return E
                }
            };
            for (var i in n) Object.defineProperty(t, i, {
                enumerable: !0,
                get: n[i]
            });
            let d = a(2662),
                o = a(3690);

            function c(e) {
                return o.pluginMethodMap.has(e)
            }
            let l = e => t => {
                    if (!d.IS_BROWSER_ENV) return () => null;
                    let a = o.pluginMethodMap.get(t);
                    if (!a) throw Error(`IX2 no plugin configured for: ${t}`);
                    let n = a[e];
                    if (!n) throw Error(`IX2 invalid plugin method: ${e}`);
                    return n
                },
                r = l("getPluginConfig"),
                s = l("getPluginOrigin"),
                u = l("getPluginDuration"),
                f = l("getPluginDestination"),
                p = l("createPluginInstance"),
                E = l("renderPlugin"),
                I = l("clearPlugin")
        },
        4124: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = {
                cleanupHTMLElement: function() {
                    return eW
                },
                clearAllStyles: function() {
                    return eX
                },
                clearObjectCache: function() {
                    return eu
                },
                getActionListProgress: function() {
                    return e$
                },
                getAffectedElements: function() {
                    return em
                },
                getComputedStyle: function() {
                    return eO
                },
                getDestinationValues: function() {
                    return eh
                },
                getElementId: function() {
                    return eI
                },
                getInstanceId: function() {
                    return ep
                },
                getInstanceOrigin: function() {
                    return eL
                },
                getItemConfigByKey: function() {
                    return eS
                },
                getMaxDurationItemIndex: function() {
                    return ej
                },
                getNamespacedParameterId: function() {
                    return eK
                },
                getRenderType: function() {
                    return eC
                },
                getStyleProp: function() {
                    return eM
                },
                mediaQueriesEqual: function() {
                    return e0
                },
                observeStore: function() {
                    return ey
                },
                reduceListToGroup: function() {
                    return eq
                },
                reifyState: function() {
                    return eT
                },
                renderHTMLElement: function() {
                    return eU
                },
                shallowEqual: function() {
                    return s.default
                },
                shouldAllowMediaQuery: function() {
                    return eJ
                },
                shouldNamespaceEventParameter: function() {
                    return eZ
                },
                stringifyTarget: function() {
                    return e1
                }
            };
            for (var i in n) Object.defineProperty(t, i, {
                enumerable: !0,
                get: n[i]
            });
            let d = I(a(4075)),
                o = I(a(1455)),
                c = I(a(5720)),
                l = a(1185),
                r = a(7087),
                s = I(a(7164)),
                u = a(3767),
                f = a(380),
                p = a(1799),
                E = a(2662);

            function I(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            let {
                BACKGROUND: T,
                TRANSFORM: g,
                TRANSLATE_3D: y,
                SCALE_3D: b,
                ROTATE_X: m,
                ROTATE_Y: O,
                ROTATE_Z: _,
                SKEW: R,
                PRESERVE_3D: v,
                FLEX: L,
                OPACITY: N,
                FILTER: A,
                FONT_VARIATION_SETTINGS: S,
                WIDTH: h,
                HEIGHT: C,
                BACKGROUND_COLOR: M,
                BORDER_COLOR: U,
                COLOR: V,
                CHILDREN: G,
                IMMEDIATE_CHILDREN: P,
                SIBLINGS: k,
                PARENT: x,
                DISPLAY: w,
                WILL_CHANGE: F,
                AUTO: D,
                COMMA_DELIMITER: B,
                COLON_DELIMITER: X,
                BAR_DELIMITER: Y,
                RENDER_TRANSFORM: H,
                RENDER_GENERAL: W,
                RENDER_STYLE: z,
                RENDER_PLUGIN: Q
            } = r.IX2EngineConstants, {
                TRANSFORM_MOVE: j,
                TRANSFORM_SCALE: $,
                TRANSFORM_ROTATE: q,
                TRANSFORM_SKEW: Z,
                STYLE_OPACITY: K,
                STYLE_FILTER: J,
                STYLE_FONT_VARIATION: ee,
                STYLE_SIZE: et,
                STYLE_BACKGROUND_COLOR: ea,
                STYLE_BORDER: en,
                STYLE_TEXT_COLOR: ei,
                GENERAL_DISPLAY: ed,
                OBJECT_VALUE: eo
            } = r.ActionTypeConsts, ec = e => e.trim(), el = Object.freeze({
                [ea]: M,
                [en]: U,
                [ei]: V
            }), er = Object.freeze({
                [E.TRANSFORM_PREFIXED]: g,
                [M]: T,
                [N]: N,
                [A]: A,
                [h]: h,
                [C]: C,
                [S]: S
            }), es = new Map;

            function eu() {
                es.clear()
            }
            let ef = 1;

            function ep() {
                return "i" + ef++
            }
            let eE = 1;

            function eI(e, t) {
                for (let a in e) {
                    let n = e[a];
                    if (n && n.ref === t) return n.id
                }
                return "e" + eE++
            }

            function eT({
                events: e,
                actionLists: t,
                site: a
            } = {}) {
                let n = (0, o.default)(e, (e, t) => {
                        let {
                            eventTypeId: a
                        } = t;
                        return e[a] || (e[a] = {}), e[a][t.id] = t, e
                    }, {}),
                    i = a && a.mediaQueries,
                    d = [];
                return i ? d = i.map(e => e.key) : (i = [], console.warn("IX2 missing mediaQueries in site data")), {
                    ixData: {
                        events: e,
                        actionLists: t,
                        eventTypeMap: n,
                        mediaQueries: i,
                        mediaQueryKeys: d
                    }
                }
            }
            let eg = (e, t) => e === t;

            function ey({
                store: e,
                select: t,
                onChange: a,
                comparator: n = eg
            }) {
                let {
                    getState: i,
                    subscribe: d
                } = e, o = d(function() {
                    let d = t(i());
                    if (null == d) return void o();
                    n(d, c) || a(c = d, e)
                }), c = t(i());
                return o
            }

            function eb(e) {
                let t = typeof e;
                if ("string" === t) return {
                    id: e
                };
                if (null != e && "object" === t) {
                    let {
                        id: t,
                        objectId: a,
                        selector: n,
                        selectorGuids: i,
                        appliesTo: d,
                        useEventTarget: o
                    } = e;
                    return {
                        id: t,
                        objectId: a,
                        selector: n,
                        selectorGuids: i,
                        appliesTo: d,
                        useEventTarget: o
                    }
                }
                return {}
            }

            function em({
                config: e,
                event: t,
                eventTarget: a,
                elementRoot: n,
                elementApi: i
            }) {
                let d, o, c;
                if (!i) throw Error("IX2 missing elementApi");
                let {
                    targets: l
                } = e;
                if (Array.isArray(l) && l.length > 0) return l.reduce((e, d) => e.concat(em({
                    config: {
                        target: d
                    },
                    event: t,
                    eventTarget: a,
                    elementRoot: n,
                    elementApi: i
                })), []);
                let {
                    getValidDocument: s,
                    getQuerySelector: u,
                    queryDocument: f,
                    getChildElements: p,
                    getSiblingElements: I,
                    matchSelector: T,
                    elementContains: g,
                    isSiblingNode: y
                } = i, {
                    target: b
                } = e;
                if (!b) return [];
                let {
                    id: m,
                    objectId: O,
                    selector: _,
                    selectorGuids: R,
                    appliesTo: v,
                    useEventTarget: L
                } = eb(b);
                if (O) return [es.has(O) ? es.get(O) : es.set(O, {}).get(O)];
                if (v === r.EventAppliesTo.PAGE) {
                    let e = s(m);
                    return e ? [e] : []
                }
                let N = (t?.action?.config?.affectedElements ?? {})[m || _] || {},
                    A = !!(N.id || N.selector),
                    S = t && u(eb(t.target));
                if (A ? (d = N.limitAffectedElements, o = S, c = u(N)) : o = c = u({
                        id: m,
                        selector: _,
                        selectorGuids: R
                    }), t && L) {
                    let e = a && (c || !0 === L) ? [a] : f(S);
                    if (c) {
                        if (L === x) return f(c).filter(t => e.some(e => g(t, e)));
                        if (L === G) return f(c).filter(t => e.some(e => g(e, t)));
                        if (L === k) return f(c).filter(t => e.some(e => y(e, t)))
                    }
                    return e
                }
                return null == o || null == c ? [] : E.IS_BROWSER_ENV && n ? f(c).filter(e => n.contains(e)) : d === G ? f(o, c) : d === P ? p(f(o)).filter(T(c)) : d === k ? I(f(o)).filter(T(c)) : f(c)
            }

            function eO({
                element: e,
                actionItem: t
            }) {
                if (!E.IS_BROWSER_ENV) return {};
                let {
                    actionTypeId: a
                } = t;
                switch (a) {
                    case et:
                    case ea:
                    case en:
                    case ei:
                    case ed:
                        return window.getComputedStyle(e);
                    default:
                        return {}
                }
            }
            let e_ = /px/,
                eR = (e, t) => t.reduce((e, t) => (null == e[t.type] && (e[t.type] = eG[t.type]), e), e || {}),
                ev = (e, t) => t.reduce((e, t) => (null == e[t.type] && (e[t.type] = eP[t.type] || t.defaultValue || 0), e), e || {});

            function eL(e, t = {}, a = {}, n, i) {
                let {
                    getStyle: o
                } = i, {
                    actionTypeId: c
                } = n;
                if ((0, p.isPluginType)(c)) return (0, p.getPluginOrigin)(c)(t[c], n);
                switch (n.actionTypeId) {
                    case j:
                    case $:
                    case q:
                    case Z:
                        return t[n.actionTypeId] || eV[n.actionTypeId];
                    case J:
                        return eR(t[n.actionTypeId], n.config.filters);
                    case ee:
                        return ev(t[n.actionTypeId], n.config.fontVariations);
                    case K:
                        return {
                            value: (0, d.default)(parseFloat(o(e, N)), 1)
                        };
                    case et: {
                        let t, i = o(e, h),
                            c = o(e, C);
                        return {
                            widthValue: n.config.widthUnit === D ? e_.test(i) ? parseFloat(i) : parseFloat(a.width) : (0, d.default)(parseFloat(i), parseFloat(a.width)),
                            heightValue: n.config.heightUnit === D ? e_.test(c) ? parseFloat(c) : parseFloat(a.height) : (0, d.default)(parseFloat(c), parseFloat(a.height))
                        }
                    }
                    case ea:
                    case en:
                    case ei:
                        return function({
                            element: e,
                            actionTypeId: t,
                            computedStyle: a,
                            getStyle: n
                        }) {
                            let i = el[t],
                                o = n(e, i),
                                c = (function(e, t) {
                                    let a = e.exec(t);
                                    return a ? a[1] : ""
                                })(eF, ew.test(o) ? o : a[i]).split(B);
                            return {
                                rValue: (0, d.default)(parseInt(c[0], 10), 255),
                                gValue: (0, d.default)(parseInt(c[1], 10), 255),
                                bValue: (0, d.default)(parseInt(c[2], 10), 255),
                                aValue: (0, d.default)(parseFloat(c[3]), 1)
                            }
                        }({
                            element: e,
                            actionTypeId: n.actionTypeId,
                            computedStyle: a,
                            getStyle: o
                        });
                    case ed:
                        return {
                            value: (0, d.default)(o(e, w), a.display)
                        };
                    case eo:
                        return t[n.actionTypeId] || {
                            value: 0
                        };
                    default:
                        return
                }
            }
            let eN = (e, t) => (t && (e[t.type] = t.value || 0), e),
                eA = (e, t) => (t && (e[t.type] = t.value || 0), e),
                eS = (e, t, a) => {
                    if ((0, p.isPluginType)(e)) return (0, p.getPluginConfig)(e)(a, t);
                    switch (e) {
                        case J: {
                            let e = (0, c.default)(a.filters, ({
                                type: e
                            }) => e === t);
                            return e ? e.value : 0
                        }
                        case ee: {
                            let e = (0, c.default)(a.fontVariations, ({
                                type: e
                            }) => e === t);
                            return e ? e.value : 0
                        }
                        default:
                            return a[t]
                    }
                };

            function eh({
                element: e,
                actionItem: t,
                elementApi: a
            }) {
                if ((0, p.isPluginType)(t.actionTypeId)) return (0, p.getPluginDestination)(t.actionTypeId)(t.config);
                switch (t.actionTypeId) {
                    case j:
                    case $:
                    case q:
                    case Z: {
                        let {
                            xValue: e,
                            yValue: a,
                            zValue: n
                        } = t.config;
                        return {
                            xValue: e,
                            yValue: a,
                            zValue: n
                        }
                    }
                    case et: {
                        let {
                            getStyle: n,
                            setStyle: i,
                            getProperty: d
                        } = a, {
                            widthUnit: o,
                            heightUnit: c
                        } = t.config, {
                            widthValue: l,
                            heightValue: r
                        } = t.config;
                        if (!E.IS_BROWSER_ENV) return {
                            widthValue: l,
                            heightValue: r
                        };
                        if (o === D) {
                            let t = n(e, h);
                            i(e, h, ""), l = d(e, "offsetWidth"), i(e, h, t)
                        }
                        if (c === D) {
                            let t = n(e, C);
                            i(e, C, ""), r = d(e, "offsetHeight"), i(e, C, t)
                        }
                        return {
                            widthValue: l,
                            heightValue: r
                        }
                    }
                    case ea:
                    case en:
                    case ei: {
                        let {
                            rValue: n,
                            gValue: i,
                            bValue: d,
                            aValue: o,
                            globalSwatchId: c
                        } = t.config;
                        if (c && c.startsWith("--")) {
                            let {
                                getStyle: t
                            } = a, n = t(e, c), i = (0, f.normalizeColor)(n);
                            return {
                                rValue: i.red,
                                gValue: i.green,
                                bValue: i.blue,
                                aValue: i.alpha
                            }
                        }
                        return {
                            rValue: n,
                            gValue: i,
                            bValue: d,
                            aValue: o
                        }
                    }
                    case J:
                        return t.config.filters.reduce(eN, {});
                    case ee:
                        return t.config.fontVariations.reduce(eA, {});
                    default: {
                        let {
                            value: e
                        } = t.config;
                        return {
                            value: e
                        }
                    }
                }
            }

            function eC(e) {
                return /^TRANSFORM_/.test(e) ? H : /^STYLE_/.test(e) ? z : /^GENERAL_/.test(e) ? W : /^PLUGIN_/.test(e) ? Q : void 0
            }

            function eM(e, t) {
                return e === z ? t.replace("STYLE_", "").toLowerCase() : null
            }

            function eU(e, t, a, n, i, d, c, l, r) {
                switch (l) {
                    case H:
                        var s = e,
                            u = t,
                            f = a,
                            I = i,
                            T = c;
                        let g = ex.map(e => {
                                let t = eV[e],
                                    {
                                        xValue: a = t.xValue,
                                        yValue: n = t.yValue,
                                        zValue: i = t.zValue,
                                        xUnit: d = "",
                                        yUnit: o = "",
                                        zUnit: c = ""
                                    } = u[e] || {};
                                switch (e) {
                                    case j:
                                        return `${y}(${a}${d}, ${n}${o}, ${i}${c})`;
                                    case $:
                                        return `${b}(${a}${d}, ${n}${o}, ${i}${c})`;
                                    case q:
                                        return `${m}(${a}${d}) ${O}(${n}${o}) ${_}(${i}${c})`;
                                    case Z:
                                        return `${R}(${a}${d}, ${n}${o})`;
                                    default:
                                        return ""
                                }
                            }).join(" "),
                            {
                                setStyle: N
                            } = T;
                        eD(s, E.TRANSFORM_PREFIXED, T), N(s, E.TRANSFORM_PREFIXED, g),
                            function({
                                actionTypeId: e
                            }, {
                                xValue: t,
                                yValue: a,
                                zValue: n
                            }) {
                                return e === j && void 0 !== n || e === $ && void 0 !== n || e === q && (void 0 !== t || void 0 !== a)
                            }(I, f) && N(s, E.TRANSFORM_STYLE_PREFIXED, v);
                        return;
                    case z:
                        return function(e, t, a, n, i, d) {
                            let {
                                setStyle: c
                            } = d;
                            switch (n.actionTypeId) {
                                case et: {
                                    let {
                                        widthUnit: t = "",
                                        heightUnit: i = ""
                                    } = n.config, {
                                        widthValue: o,
                                        heightValue: l
                                    } = a;
                                    void 0 !== o && (t === D && (t = "px"), eD(e, h, d), c(e, h, o + t)), void 0 !== l && (i === D && (i = "px"), eD(e, C, d), c(e, C, l + i));
                                    break
                                }
                                case J:
                                    var l = n.config;
                                    let r = (0, o.default)(a, (e, t, a) => `${e} ${a}(${t}${ek(a,l)})`, ""),
                                        {
                                            setStyle: s
                                        } = d;
                                    eD(e, A, d), s(e, A, r);
                                    break;
                                case ee:
                                    n.config;
                                    let u = (0, o.default)(a, (e, t, a) => (e.push(`"${a}" ${t}`), e), []).join(", "),
                                        {
                                            setStyle: f
                                        } = d;
                                    eD(e, S, d), f(e, S, u);
                                    break;
                                case ea:
                                case en:
                                case ei: {
                                    let t = el[n.actionTypeId],
                                        i = Math.round(a.rValue),
                                        o = Math.round(a.gValue),
                                        l = Math.round(a.bValue),
                                        r = a.aValue;
                                    eD(e, t, d), c(e, t, r >= 1 ? `rgb(${i},${o},${l})` : `rgba(${i},${o},${l},${r})`);
                                    break
                                }
                                default: {
                                    let {
                                        unit: t = ""
                                    } = n.config;
                                    eD(e, i, d), c(e, i, a.value + t)
                                }
                            }
                        }(e, 0, a, i, d, c);
                    case W:
                        var M = e,
                            U = i,
                            V = c;
                        let {
                            setStyle: G
                        } = V;
                        if (U.actionTypeId === ed) {
                            let {
                                value: e
                            } = U.config;
                            G(M, w, e === L && E.IS_BROWSER_ENV ? E.FLEX_PREFIXED : e);
                        }
                        return;
                    case Q: {
                        let {
                            actionTypeId: e
                        } = i;
                        if ((0, p.isPluginType)(e)) return (0, p.renderPlugin)(e)(r, t, i)
                    }
                }
            }
            let eV = {
                    [j]: Object.freeze({
                        xValue: 0,
                        yValue: 0,
                        zValue: 0
                    }),
                    [$]: Object.freeze({
                        xValue: 1,
                        yValue: 1,
                        zValue: 1
                    }),
                    [q]: Object.freeze({
                        xValue: 0,
                        yValue: 0,
                        zValue: 0
                    }),
                    [Z]: Object.freeze({
                        xValue: 0,
                        yValue: 0
                    })
                },
                eG = Object.freeze({
                    blur: 0,
                    "hue-rotate": 0,
                    invert: 0,
                    grayscale: 0,
                    saturate: 100,
                    sepia: 0,
                    contrast: 100,
                    brightness: 100
                }),
                eP = Object.freeze({
                    wght: 0,
                    opsz: 0,
                    wdth: 0,
                    slnt: 0
                }),
                ek = (e, t) => {
                    let a = (0, c.default)(t.filters, ({
                        type: t
                    }) => t === e);
                    if (a && a.unit) return a.unit;
                    switch (e) {
                        case "blur":
                            return "px";
                        case "hue-rotate":
                            return "deg";
                        default:
                            return "%"
                    }
                },
                ex = Object.keys(eV),
                ew = /^rgb/,
                eF = RegExp("rgba?\\(([^)]+)\\)");

            function eD(e, t, a) {
                if (!E.IS_BROWSER_ENV) return;
                let n = er[t];
                if (!n) return;
                let {
                    getStyle: i,
                    setStyle: d
                } = a, o = i(e, F);
                if (!o) return void d(e, F, n);
                let c = o.split(B).map(ec); - 1 === c.indexOf(n) && d(e, F, c.concat(n).join(B))
            }

            function eB(e, t, a) {
                if (!E.IS_BROWSER_ENV) return;
                let n = er[t];
                if (!n) return;
                let {
                    getStyle: i,
                    setStyle: d
                } = a, o = i(e, F);
                o && -1 !== o.indexOf(n) && d(e, F, o.split(B).map(ec).filter(e => e !== n).join(B))
            }

            function eX({
                store: e,
                elementApi: t
            }) {
                let {
                    ixData: a
                } = e.getState(), {
                    events: n = {},
                    actionLists: i = {}
                } = a;
                Object.keys(n).forEach(e => {
                    let a = n[e],
                        {
                            config: d
                        } = a.action,
                        {
                            actionListId: o
                        } = d,
                        c = i[o];
                    c && eY({
                        actionList: c,
                        event: a,
                        elementApi: t
                    })
                }), Object.keys(i).forEach(e => {
                    eY({
                        actionList: i[e],
                        elementApi: t
                    })
                })
            }

            function eY({
                actionList: e = {},
                event: t,
                elementApi: a
            }) {
                let {
                    actionItemGroups: n,
                    continuousParameterGroups: i
                } = e;
                n && n.forEach(e => {
                    eH({
                        actionGroup: e,
                        event: t,
                        elementApi: a
                    })
                }), i && i.forEach(e => {
                    let {
                        continuousActionGroups: n
                    } = e;
                    n.forEach(e => {
                        eH({
                            actionGroup: e,
                            event: t,
                            elementApi: a
                        })
                    })
                })
            }

            function eH({
                actionGroup: e,
                event: t,
                elementApi: a
            }) {
                let {
                    actionItems: n
                } = e;
                n.forEach(e => {
                    let n, {
                        actionTypeId: i,
                        config: d
                    } = e;
                    n = (0, p.isPluginType)(i) ? t => (0, p.clearPlugin)(i)(t, e) : ez({
                        effect: eQ,
                        actionTypeId: i,
                        elementApi: a
                    }), em({
                        config: d,
                        event: t,
                        elementApi: a
                    }).forEach(n)
                })
            }

            function eW(e, t, a) {
                let {
                    setStyle: n,
                    getStyle: i
                } = a, {
                    actionTypeId: d
                } = t;
                if (d === et) {
                    let {
                        config: a
                    } = t;
                    a.widthUnit === D && n(e, h, ""), a.heightUnit === D && n(e, C, "")
                }
                i(e, F) && ez({
                    effect: eB,
                    actionTypeId: d,
                    elementApi: a
                })(e)
            }
            let ez = ({
                effect: e,
                actionTypeId: t,
                elementApi: a
            }) => n => {
                switch (t) {
                    case j:
                    case $:
                    case q:
                    case Z:
                        e(n, E.TRANSFORM_PREFIXED, a);
                        break;
                    case J:
                        e(n, A, a);
                        break;
                    case ee:
                        e(n, S, a);
                        break;
                    case K:
                        e(n, N, a);
                        break;
                    case et:
                        e(n, h, a), e(n, C, a);
                        break;
                    case ea:
                    case en:
                    case ei:
                        e(n, el[t], a);
                        break;
                    case ed:
                        e(n, w, a)
                }
            };

            function eQ(e, t, a) {
                let {
                    setStyle: n
                } = a;
                eB(e, t, a), n(e, t, ""), t === E.TRANSFORM_PREFIXED && n(e, E.TRANSFORM_STYLE_PREFIXED, "")
            }

            function ej(e) {
                let t = 0,
                    a = 0;
                return e.forEach((e, n) => {
                    let {
                        config: i
                    } = e, d = i.delay + i.duration;
                    d >= t && (t = d, a = n)
                }), a
            }

            function e$(e, t) {
                let {
                    actionItemGroups: a,
                    useFirstGroupAsInitialState: n
                } = e, {
                    actionItem: i,
                    verboseTimeElapsed: d = 0
                } = t, o = 0, c = 0;
                return a.forEach((e, t) => {
                    if (n && 0 === t) return;
                    let {
                        actionItems: a
                    } = e, l = a[ej(a)], {
                        config: r,
                        actionTypeId: s
                    } = l;
                    i.id === l.id && (c = o + d);
                    let u = eC(s) === W ? 0 : r.duration;
                    o += r.delay + u
                }), o > 0 ? (0, u.optimizeFloat)(c / o) : 0
            }

            function eq({
                actionList: e,
                actionItemId: t,
                rawData: a
            }) {
                let {
                    actionItemGroups: n,
                    continuousParameterGroups: i
                } = e, d = [], o = e => (d.push((0, l.mergeIn)(e, ["config"], {
                    delay: 0,
                    duration: 0
                })), e.id === t);
                return n && n.some(({
                    actionItems: e
                }) => e.some(o)), i && i.some(e => {
                    let {
                        continuousActionGroups: t
                    } = e;
                    return t.some(({
                        actionItems: e
                    }) => e.some(o))
                }), (0, l.setIn)(a, ["actionLists"], {
                    [e.id]: {
                        id: e.id,
                        actionItemGroups: [{
                            actionItems: d
                        }]
                    }
                })
            }

            function eZ(e, {
                basedOn: t
            }) {
                return e === r.EventTypeConsts.SCROLLING_IN_VIEW && (t === r.EventBasedOn.ELEMENT || null == t) || e === r.EventTypeConsts.MOUSE_MOVE && t === r.EventBasedOn.ELEMENT
            }

            function eK(e, t) {
                return e + X + t
            }

            function eJ(e, t) {
                return null == t || -1 !== e.indexOf(t)
            }

            function e0(e, t) {
                return (0, s.default)(e && e.sort(), t && t.sort())
            }

            function e1(e) {
                if ("string" == typeof e) return e;
                if (e.pluginElement && e.objectId) return e.pluginElement + Y + e.objectId;
                if (e.objectId) return e.objectId;
                let {
                    id: t = "",
                    selector: a = "",
                    useEventTarget: n = ""
                } = e;
                return t + Y + a + Y + n
            }
        },
        7164: function(e, t) {
            "use strict";

            function a(e, t) {
                return e === t ? 0 !== e || 0 !== t || 1 / e == 1 / t : e != e && t != t
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return n
                }
            });
            let n = function(e, t) {
                if (a(e, t)) return !0;
                if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
                let n = Object.keys(e),
                    i = Object.keys(t);
                if (n.length !== i.length) return !1;
                for (let i = 0; i < n.length; i++)
                    if (!Object.hasOwn(t, n[i]) || !a(e[n[i]], t[n[i]])) return !1;
                return !0
            }
        },
        5861: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = {
                createElementState: function() {
                    return R
                },
                ixElements: function() {
                    return _
                },
                mergeActionState: function() {
                    return v
                }
            };
            for (var i in n) Object.defineProperty(t, i, {
                enumerable: !0,
                get: n[i]
            });
            let d = a(1185),
                o = a(7087),
                {
                    HTML_ELEMENT: c,
                    PLAIN_OBJECT: l,
                    ABSTRACT_NODE: r,
                    CONFIG_X_VALUE: s,
                    CONFIG_Y_VALUE: u,
                    CONFIG_Z_VALUE: f,
                    CONFIG_VALUE: p,
                    CONFIG_X_UNIT: E,
                    CONFIG_Y_UNIT: I,
                    CONFIG_Z_UNIT: T,
                    CONFIG_UNIT: g
                } = o.IX2EngineConstants,
                {
                    IX2_SESSION_STOPPED: y,
                    IX2_INSTANCE_ADDED: b,
                    IX2_ELEMENT_STATE_CHANGED: m
                } = o.IX2EngineActionTypes,
                O = {},
                _ = (e = O, t = {}) => {
                    switch (t.type) {
                        case y:
                            return O;
                        case b: {
                            let {
                                elementId: a,
                                element: n,
                                origin: i,
                                actionItem: o,
                                refType: c
                            } = t.payload, {
                                actionTypeId: l
                            } = o, r = e;
                            return (0, d.getIn)(r, [a, n]) !== n && (r = R(r, n, c, a, o)), v(r, a, l, i, o)
                        }
                        case m: {
                            let {
                                elementId: a,
                                actionTypeId: n,
                                current: i,
                                actionItem: d
                            } = t.payload;
                            return v(e, a, n, i, d)
                        }
                        default:
                            return e
                    }
                };

            function R(e, t, a, n, i) {
                let o = a === l ? (0, d.getIn)(i, ["config", "target", "objectId"]) : null;
                return (0, d.mergeIn)(e, [n], {
                    id: n,
                    ref: t,
                    refId: o,
                    refType: a
                })
            }

            function v(e, t, a, n, i) {
                let o = function(e) {
                    let {
                        config: t
                    } = e;
                    return L.reduce((e, a) => {
                        let n = a[0],
                            i = a[1],
                            d = t[n],
                            o = t[i];
                        return null != d && null != o && (e[i] = o), e
                    }, {})
                }(i);
                return (0, d.mergeIn)(e, [t, "refState", a], n, o)
            }
            let L = [
                [s, E],
                [u, I],
                [f, T],
                [p, g]
            ]
        },
        7911: function() {
            Webflow.require("ix2").init({
                events: {
                    e: {
                        id: "e",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-2"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            selector: ".nav_button",
                            originalId: "676dcee42076f49e6df57071|7087b586-62fc-ad59-6d7f-ef90dde52ad7",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".nav_button",
                            originalId: "676dcee42076f49e6df57071|7087b586-62fc-ad59-6d7f-ef90dde52ad7",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1940597001e
                    },
                    "e-2": {
                        id: "e-2",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-2",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            selector: ".nav_button",
                            originalId: "676dcee42076f49e6df57071|7087b586-62fc-ad59-6d7f-ef90dde52ad7",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".nav_button",
                            originalId: "676dcee42076f49e6df57071|7087b586-62fc-ad59-6d7f-ef90dde52ad7",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19405970020
                    },
                    "e-3": {
                        id: "e-3",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-2",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-4"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "e9c6ec8d-760f-6f76-f692-4091b53afd26",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "e9c6ec8d-760f-6f76-f692-4091b53afd26",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19405c9d4a8
                    },
                    "e-5": {
                        id: "e-5",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-3",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-6"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "e9c6ec8d-760f-6f76-f692-4091b53afd77",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "e9c6ec8d-760f-6f76-f692-4091b53afd77",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x194053e1479
                    },
                    "e-9": {
                        id: "e-9",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_START",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-6",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-10"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "6840876d4d1ed0e8e2a330fc",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6840876d4d1ed0e8e2a330fc",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !0,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19755b510bd
                    },
                    "e-11": {
                        id: "e-11",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_START",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-7",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-203"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "6840876d4d1ed0e8e2a330fc",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6840876d4d1ed0e8e2a330fc",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !0,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19755e36523
                    },
                    "e-17": {
                        id: "e-17",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-12",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-205"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "34ea61be-4150-c0ab-66d0-326592b2e049",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "34ea61be-4150-c0ab-66d0-326592b2e049",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197565d6472
                    },
                    "e-18": {
                        id: "e-18",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-13",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-371"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "34ea61be-4150-c0ab-66d0-326592b2e049",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "34ea61be-4150-c0ab-66d0-326592b2e049",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197565d6472
                    },
                    "e-19": {
                        id: "e-19",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-14",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-45"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "059e00b0-f64e-1901-eae8-f1971aea4566",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "059e00b0-f64e-1901-eae8-f1971aea4566",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197567ad3a8
                    },
                    "e-20": {
                        id: "e-20",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-15",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-44"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "059e00b0-f64e-1901-eae8-f1971aea4566",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "059e00b0-f64e-1901-eae8-f1971aea4566",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197567ad3a9
                    },
                    "e-21": {
                        id: "e-21",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-16",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-22"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "08715bc4-c4b7-73ba-45ba-b2d079cf51c2",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "08715bc4-c4b7-73ba-45ba-b2d079cf51c2",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197567f3803
                    },
                    "e-22": {
                        id: "e-22",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-17",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-355"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "08715bc4-c4b7-73ba-45ba-b2d079cf51c2",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "08715bc4-c4b7-73ba-45ba-b2d079cf51c2",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197567f3803
                    },
                    "e-23": {
                        id: "e-23",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-18",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-24"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "5fdd110c-b4dc-4c3b-f311-33bd343dda97",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "5fdd110c-b4dc-4c3b-f311-33bd343dda97",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19756918226
                    },
                    "e-24": {
                        id: "e-24",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-19",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-23"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "5fdd110c-b4dc-4c3b-f311-33bd343dda97",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "5fdd110c-b4dc-4c3b-f311-33bd343dda97",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19756918227
                    },
                    "e-25": {
                        id: "e-25",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-8",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-26"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "5fdd110c-b4dc-4c3b-f311-33bd343dda78",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "5fdd110c-b4dc-4c3b-f311-33bd343dda78",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19756951f6b
                    },
                    "e-27": {
                        id: "e-27",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-20",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-28"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "5fdd110c-b4dc-4c3b-f311-33bd343ddaa2",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "5fdd110c-b4dc-4c3b-f311-33bd343ddaa2",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19756a1a03f
                    },
                    "e-29": {
                        id: "e-29",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_START",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-21",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-30"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "6840876d4d1ed0e8e2a330fc",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6840876d4d1ed0e8e2a330fc",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !0,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19756f108ac
                    },
                    "e-31": {
                        id: "e-31",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-22",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-32"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "6840876d4d1ed0e8e2a330fc|0f5847d2-ac79-9a3a-7fe2-aaf5133a6391",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6840876d4d1ed0e8e2a330fc|0f5847d2-ac79-9a3a-7fe2-aaf5133a6391",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19756fad378
                    },
                    "e-32": {
                        id: "e-32",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-23",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-31"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "6840876d4d1ed0e8e2a330fc|0f5847d2-ac79-9a3a-7fe2-aaf5133a6391",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6840876d4d1ed0e8e2a330fc|0f5847d2-ac79-9a3a-7fe2-aaf5133a6391",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19756fad378
                    },
                    "e-33": {
                        id: "e-33",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-24",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-34"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "df70bfa9-fec6-06b6-1b9f-9402e5712ace",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "df70bfa9-fec6-06b6-1b9f-9402e5712ace",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19757040ea8
                    },
                    "e-34": {
                        id: "e-34",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-25",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-33"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "df70bfa9-fec6-06b6-1b9f-9402e5712ace",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "df70bfa9-fec6-06b6-1b9f-9402e5712ace",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19757040ea8
                    },
                    "e-35": {
                        id: "e-35",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-26",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-103"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "6840876d4d1ed0e8e2a330fc|0f16d970-3858-501c-35ad-50ff5a2db9ca",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6840876d4d1ed0e8e2a330fc|0f16d970-3858-501c-35ad-50ff5a2db9ca",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !0,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1975a2e5d11
                    },
                    "e-46": {
                        id: "e-46",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-31",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "6840876d4d1ed0e8e2a330fc|488e7777-71b2-7e36-4789-2206a7bd01df",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6840876d4d1ed0e8e2a330fc|488e7777-71b2-7e36-4789-2206a7bd01df",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-31-p",
                            smoothing: 90,
                            startsEntering: !0,
                            addStartOffset: !0,
                            addOffsetValue: 30,
                            startsExiting: !1,
                            addEndOffset: !0,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x1975a5af8fc
                    },
                    "e-47": {
                        id: "e-47",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-32",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-48"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "6840876d4d1ed0e8e2a330fc|488e7777-71b2-7e36-4789-2206a7bd01e0",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6840876d4d1ed0e8e2a330fc|488e7777-71b2-7e36-4789-2206a7bd01e0",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1975a5af8fc
                    },
                    "e-48": {
                        id: "e-48",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-33",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-47"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "6840876d4d1ed0e8e2a330fc|488e7777-71b2-7e36-4789-2206a7bd01e0",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6840876d4d1ed0e8e2a330fc|488e7777-71b2-7e36-4789-2206a7bd01e0",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1975a5af8fc
                    },
                    "e-49": {
                        id: "e-49",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_MOVE",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-34",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "6840876d4d1ed0e8e2a330fc",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6840876d4d1ed0e8e2a330fc",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-34-p",
                            selectedAxis: "X_AXIS",
                            basedOn: "VIEWPORT",
                            reverse: !1,
                            smoothing: 80,
                            restingState: 50
                        }, {
                            continuousParameterGroupId: "a-34-p-2",
                            selectedAxis: "Y_AXIS",
                            basedOn: "VIEWPORT",
                            reverse: !1,
                            smoothing: 80,
                            restingState: 50
                        }],
                        createdOn: 0x1975a5bd853
                    },
                    "e-50": {
                        id: "e-50",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_START",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-35",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-51"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "6840876d4d1ed0e8e2a330fc",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6840876d4d1ed0e8e2a330fc",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !0,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1975b02d5e2
                    },
                    "e-52": {
                        id: "e-52",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_START",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-36",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-53"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "6840876d4d1ed0e8e2a330fc",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6840876d4d1ed0e8e2a330fc",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !0,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1975b078d1b
                    },
                    "e-54": {
                        id: "e-54",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-37",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-55"
                            }
                        },
                        mediaQueries: ["main", "medium", "small"],
                        target: {
                            id: "6840876d4d1ed0e8e2a330fc|1a241269-bfb8-9220-a73e-cf86b1f65921",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6840876d4d1ed0e8e2a330fc|1a241269-bfb8-9220-a73e-cf86b1f65921",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !0,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1975b83eeb6
                    },
                    "e-63": {
                        id: "e-63",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-39",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-69"
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "6840876d4d1ed0e8e2a330fc|e9a97131-8855-95c0-d8dd-d2a7a42d1ec5",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6840876d4d1ed0e8e2a330fc|e9a97131-8855-95c0-d8dd-d2a7a42d1ec5",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 30,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x196f3c7bb37
                    },
                    "e-67": {
                        id: "e-67",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-39",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-372"
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "6840876d4d1ed0e8e2a330fc|e9a97131-8855-95c0-d8dd-d2a7a42d1eb6",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6840876d4d1ed0e8e2a330fc|e9a97131-8855-95c0-d8dd-d2a7a42d1eb6",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 30,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x196f3c70c9a
                    },
                    "e-68": {
                        id: "e-68",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-39",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-57"
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "6840876d4d1ed0e8e2a330fc|e9a97131-8855-95c0-d8dd-d2a7a42d1ee3",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6840876d4d1ed0e8e2a330fc|e9a97131-8855-95c0-d8dd-d2a7a42d1ee3",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 30,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x196f3c94bb6
                    },
                    "e-71": {
                        id: "e-71",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-39",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-70"
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "6840876d4d1ed0e8e2a330fc|e9a97131-8855-95c0-d8dd-d2a7a42d1ed4",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6840876d4d1ed0e8e2a330fc|e9a97131-8855-95c0-d8dd-d2a7a42d1ed4",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 30,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x196f3c92248
                    },
                    "e-72": {
                        id: "e-72",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-41",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-73"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "6840876d4d1ed0e8e2a330fc|e6ee1a6c-2902-b24b-361f-5ba830cbef85",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6840876d4d1ed0e8e2a330fc|e6ee1a6c-2902-b24b-361f-5ba830cbef85",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !0,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1975bdfe155
                    },
                    "e-74": {
                        id: "e-74",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-45",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            selector: ".home-services_img",
                            originalId: "6840876d4d1ed0e8e2a330fc|e9a97131-8855-95c0-d8dd-d2a7a42d1ec0",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".home-services_img",
                            originalId: "6840876d4d1ed0e8e2a330fc|e9a97131-8855-95c0-d8dd-d2a7a42d1ec0",
                            appliesTo: "CLASS"
                        }],
                        config: [{
                            continuousParameterGroupId: "a-45-p",
                            smoothing: 94,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x1975bf047ed
                    },
                    "e-76": {
                        id: "e-76",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-44",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-77"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            selector: ".button-underline",
                            originalId: "c06f7217-3dd7-7d19-ce29-12267af5b517",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".button-underline",
                            originalId: "c06f7217-3dd7-7d19-ce29-12267af5b517",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x193300cd990
                    },
                    "e-78": {
                        id: "e-78",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-45",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "6840876d4d1ed0e8e2a330fc|eafc4a11-c04e-02a7-5f67-f8039b492950",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6840876d4d1ed0e8e2a330fc|eafc4a11-c04e-02a7-5f67-f8039b492950",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-45-p",
                            smoothing: 95,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x194fadc23c4
                    },
                    "e-79": {
                        id: "e-79",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-46",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "6840876d4d1ed0e8e2a330fc|54958a20-ac41-e719-19b6-10b9a9315b9a",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6840876d4d1ed0e8e2a330fc|54958a20-ac41-e719-19b6-10b9a9315b9a",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-46-p",
                            smoothing: 90,
                            startsEntering: !0,
                            addStartOffset: !0,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !0,
                            endOffsetValue: 14
                        }],
                        createdOn: 0x197753531fe
                    },
                    "e-80": {
                        id: "e-80",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-45",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "6840876d4d1ed0e8e2a330fc|11ea6b98-e56d-e393-9cc3-73cad26ea748",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6840876d4d1ed0e8e2a330fc|11ea6b98-e56d-e393-9cc3-73cad26ea748",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-45-p",
                            smoothing: 90,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x197ade9613c
                    },
                    "e-81": {
                        id: "e-81",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-47",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-82"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "6840876d4d1ed0e8e2a330fc|f47586ce-ea30-5c4f-ed5b-579217ab53c9",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6840876d4d1ed0e8e2a330fc|f47586ce-ea30-5c4f-ed5b-579217ab53c9",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 15,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197ae0b387f
                    },
                    "e-85": {
                        id: "e-85",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-52",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-86"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            selector: ".button-gradient",
                            originalId: "6840876d4d1ed0e8e2a330fc|32138e7e-ecb1-045a-b917-9c0c3c72ca1f",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".button-gradient",
                            originalId: "6840876d4d1ed0e8e2a330fc|32138e7e-ecb1-045a-b917-9c0c3c72ca1f",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x18085fa6459
                    },
                    "e-86": {
                        id: "e-86",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-53",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-85"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            selector: ".button-gradient",
                            originalId: "6840876d4d1ed0e8e2a330fc|32138e7e-ecb1-045a-b917-9c0c3c72ca1f",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".button-gradient",
                            originalId: "6840876d4d1ed0e8e2a330fc|32138e7e-ecb1-045a-b917-9c0c3c72ca1f",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x18085fa6459
                    },
                    "e-87": {
                        id: "e-87",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-54",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-88"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "6840876d4d1ed0e8e2a330fc|32138e7e-ecb1-045a-b917-9c0c3c72ca1f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6840876d4d1ed0e8e2a330fc|32138e7e-ecb1-045a-b917-9c0c3c72ca1f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !0,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197b327d3da
                    },
                    "e-89": {
                        id: "e-89",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-55",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-90"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "6840876d4d1ed0e8e2a330fc|32138e7e-ecb1-045a-b917-9c0c3c72ca1f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6840876d4d1ed0e8e2a330fc|32138e7e-ecb1-045a-b917-9c0c3c72ca1f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !0,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197b327ef0f
                    },
                    "e-91": {
                        id: "e-91",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-55",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-92"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "6840876d4d1ed0e8e2a330fc|27810c9c-835c-aab2-e3db-9d8077ec191b",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6840876d4d1ed0e8e2a330fc|27810c9c-835c-aab2-e3db-9d8077ec191b",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !0,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197b332757a
                    },
                    "e-93": {
                        id: "e-93",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-54",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-94"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "6840876d4d1ed0e8e2a330fc|27810c9c-835c-aab2-e3db-9d8077ec191b",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6840876d4d1ed0e8e2a330fc|27810c9c-835c-aab2-e3db-9d8077ec191b",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !0,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197b332757a
                    },
                    "e-95": {
                        id: "e-95",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-56",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-96"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "63e973d5-4c8d-8c2a-0a95-49ce987532d1",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63e973d5-4c8d-8c2a-0a95-49ce987532d1",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197c219f023
                    },
                    "e-96": {
                        id: "e-96",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_SECOND_CLICK",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-57",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-95"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "63e973d5-4c8d-8c2a-0a95-49ce987532d1",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "63e973d5-4c8d-8c2a-0a95-49ce987532d1",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197c219f024
                    },
                    "e-97": {
                        id: "e-97",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-45",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "6840876d4d1ed0e8e2a330fc|64501514-6f78-3b0f-895e-d02403cc556b",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6840876d4d1ed0e8e2a330fc|64501514-6f78-3b0f-895e-d02403cc556b",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-45-p",
                            smoothing: 90,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x197c69dae63
                    },
                    "e-98": {
                        id: "e-98",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-58",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-99"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "6840876d4d1ed0e8e2a330fc|e54ed1fa-e78d-d77e-f756-db263144049f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6840876d4d1ed0e8e2a330fc|e54ed1fa-e78d-d77e-f756-db263144049f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197c6d3f200
                    },
                    "e-99": {
                        id: "e-99",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-59",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-98"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "6840876d4d1ed0e8e2a330fc|e54ed1fa-e78d-d77e-f756-db263144049f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6840876d4d1ed0e8e2a330fc|e54ed1fa-e78d-d77e-f756-db263144049f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197c6d3f200
                    },
                    "e-100": {
                        id: "e-100",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_START",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-60",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-101"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "6840876d4d1ed0e8e2a330fc",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6840876d4d1ed0e8e2a330fc",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197c7ed2bc8
                    },
                    "e-102": {
                        id: "e-102",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-66",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-103"
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "6840876d4d1ed0e8e2a330fc|815e1567-e8d8-3887-7b4f-e61b59defca3",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6840876d4d1ed0e8e2a330fc|815e1567-e8d8-3887-7b4f-e61b59defca3",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197c81be6f4
                    },
                    "e-108": {
                        id: "e-108",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-68",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-109"
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "6840876d4d1ed0e8e2a330fc|0f16d970-3858-501c-35ad-50ff5a2db9d4",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6840876d4d1ed0e8e2a330fc|0f16d970-3858-501c-35ad-50ff5a2db9d4",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197c81e0f96
                    },
                    "e-112": {
                        id: "e-112",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-39",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-113"
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "6840876d4d1ed0e8e2a330fc|f8cd9a3a-3e01-4e7f-30db-ecd0dcc6e07a",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6840876d4d1ed0e8e2a330fc|f8cd9a3a-3e01-4e7f-30db-ecd0dcc6e07a",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197c82cd69d
                    },
                    "e-116": {
                        id: "e-116",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-67",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-117"
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "6840876d4d1ed0e8e2a330fc|86b9f3af-cb4f-5a69-3de4-8d0df7f0b23e",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6840876d4d1ed0e8e2a330fc|86b9f3af-cb4f-5a69-3de4-8d0df7f0b23e",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 20,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197c8335ab5
                    },
                    "e-122": {
                        id: "e-122",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-67",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-123"
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "6840876d4d1ed0e8e2a330fc|f0195ee1-c983-a8a6-c1ae-057fcb149399",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6840876d4d1ed0e8e2a330fc|f0195ee1-c983-a8a6-c1ae-057fcb149399",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197c8443967
                    },
                    "e-124": {
                        id: "e-124",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-68",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-125"
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "6840876d4d1ed0e8e2a330fc|eafc4a11-c04e-02a7-5f67-f8039b492966",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6840876d4d1ed0e8e2a330fc|eafc4a11-c04e-02a7-5f67-f8039b492966",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197c8445759
                    },
                    "e-126": {
                        id: "e-126",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-69",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-127"
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "6840876d4d1ed0e8e2a330fc|6fd397a1-e8a4-fff3-aabb-decb46ecf7fe",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6840876d4d1ed0e8e2a330fc|6fd397a1-e8a4-fff3-aabb-decb46ecf7fe",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197c8448c61
                    },
                    "e-128": {
                        id: "e-128",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-39",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-129"
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "6840876d4d1ed0e8e2a330fc|e952acc8-9e73-4313-aab0-82f6889542df",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6840876d4d1ed0e8e2a330fc|e952acc8-9e73-4313-aab0-82f6889542df",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197c87f4a2d
                    },
                    "e-130": {
                        id: "e-130",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-39",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-131"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "6840876d4d1ed0e8e2a330fc|67a1b9b9-adae-bae0-1f89-3d2a565093fc",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6840876d4d1ed0e8e2a330fc|67a1b9b9-adae-bae0-1f89-3d2a565093fc",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197c88702b9
                    },
                    "e-132": {
                        id: "e-132",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-70",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-133"
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "6840876d4d1ed0e8e2a330fc|8fc829b0-3e81-4d30-2a87-eeaff1507aa1",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6840876d4d1ed0e8e2a330fc|8fc829b0-3e81-4d30-2a87-eeaff1507aa1",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197c89f2af6
                    },
                    "e-134": {
                        id: "e-134",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-67",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-135"
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "6840876d4d1ed0e8e2a330fc|cb3ed43d-4fec-c076-6ad9-ca979cbce945",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6840876d4d1ed0e8e2a330fc|cb3ed43d-4fec-c076-6ad9-ca979cbce945",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197c8a30009
                    },
                    "e-136": {
                        id: "e-136",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-68",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-137"
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "6840876d4d1ed0e8e2a330fc|cb3ed43d-4fec-c076-6ad9-ca979cbce94b",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6840876d4d1ed0e8e2a330fc|cb3ed43d-4fec-c076-6ad9-ca979cbce94b",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197c8a35307
                    },
                    "e-138": {
                        id: "e-138",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-69",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-139"
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "6840876d4d1ed0e8e2a330fc|0f16d970-3858-501c-35ad-50ff5a2db9d9",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6840876d4d1ed0e8e2a330fc|0f16d970-3858-501c-35ad-50ff5a2db9d9",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197c8a46c3e
                    },
                    "e-140": {
                        id: "e-140",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-68",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-141"
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "6840876d4d1ed0e8e2a330fc|3cde3e8e-9cf9-f0b1-0571-18bb109027d6",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6840876d4d1ed0e8e2a330fc|3cde3e8e-9cf9-f0b1-0571-18bb109027d6",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197c8a52b0f
                    },
                    "e-142": {
                        id: "e-142",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-69",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-143"
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "6840876d4d1ed0e8e2a330fc|2d1acec6-4c9c-26ee-8926-bff6869d7e09",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6840876d4d1ed0e8e2a330fc|2d1acec6-4c9c-26ee-8926-bff6869d7e09",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197c8a57049
                    },
                    "e-144": {
                        id: "e-144",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-70",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-145"
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "6840876d4d1ed0e8e2a330fc|fd189f4e-bb1d-3d0d-a032-00be0c82ab01",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6840876d4d1ed0e8e2a330fc|fd189f4e-bb1d-3d0d-a032-00be0c82ab01",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197c8a5a762
                    },
                    "e-146": {
                        id: "e-146",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-67",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-147"
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "6840876d4d1ed0e8e2a330fc|0d0c621e-8f16-a9c8-4eae-928122e0dce9",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6840876d4d1ed0e8e2a330fc|0d0c621e-8f16-a9c8-4eae-928122e0dce9",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197c8a706f7
                    },
                    "e-148": {
                        id: "e-148",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-68",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-149"
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "6840876d4d1ed0e8e2a330fc|5b5acb40-3dd8-2606-340d-9826a9ee5559",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6840876d4d1ed0e8e2a330fc|5b5acb40-3dd8-2606-340d-9826a9ee5559",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197c8a738b6
                    },
                    "e-150": {
                        id: "e-150",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-69",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-443"
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "6840876d4d1ed0e8e2a330fc|e350f601-f47b-bc74-3ba9-1a4e5d11a3e3",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6840876d4d1ed0e8e2a330fc|e350f601-f47b-bc74-3ba9-1a4e5d11a3e3",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197c8a76d30
                    },
                    "e-152": {
                        id: "e-152",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-70",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-377"
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "6840876d4d1ed0e8e2a330fc|1a241269-bfb8-9220-a73e-cf86b1f65921",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6840876d4d1ed0e8e2a330fc|1a241269-bfb8-9220-a73e-cf86b1f65921",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197c8a79813
                    },
                    "e-154": {
                        id: "e-154",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-71",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-379"
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "6840876d4d1ed0e8e2a330fc|a253bb0d-a960-4ae0-b308-eda497a5f24c",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6840876d4d1ed0e8e2a330fc|a253bb0d-a960-4ae0-b308-eda497a5f24c",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197c8a7b81f
                    },
                    "e-156": {
                        id: "e-156",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-66",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-405"
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "6840876d4d1ed0e8e2a330fc|eafc4a11-c04e-02a7-5f67-f8039b49294f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6840876d4d1ed0e8e2a330fc|eafc4a11-c04e-02a7-5f67-f8039b49294f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197c8a8b26d
                    },
                    "e-158": {
                        id: "e-158",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-66",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-390"
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "6840876d4d1ed0e8e2a330fc|f4458d7a-bf4b-0312-92ab-343c3e6e0471",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6840876d4d1ed0e8e2a330fc|f4458d7a-bf4b-0312-92ab-343c3e6e0471",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197c8aa2d27
                    },
                    "e-160": {
                        id: "e-160",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-67",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-406"
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "6840876d4d1ed0e8e2a330fc|00e07311-24cb-f0bb-f4cd-36919691889a",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6840876d4d1ed0e8e2a330fc|00e07311-24cb-f0bb-f4cd-36919691889a",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197c8aa4d33
                    },
                    "e-162": {
                        id: "e-162",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-68",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-396"
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "6840876d4d1ed0e8e2a330fc|d7f2e80d-58c0-9304-80ac-8f9f71925b91",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6840876d4d1ed0e8e2a330fc|d7f2e80d-58c0-9304-80ac-8f9f71925b91",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197c8aae521
                    },
                    "e-164": {
                        id: "e-164",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-69",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-403"
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "6840876d4d1ed0e8e2a330fc|527d699e-9019-9e28-e295-ff2a629887e1",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6840876d4d1ed0e8e2a330fc|527d699e-9019-9e28-e295-ff2a629887e1",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197c8ab140c
                    },
                    "e-166": {
                        id: "e-166",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-70",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-389"
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "6840876d4d1ed0e8e2a330fc|16b60ede-379a-36de-ec0d-aac9ef3b7e2d",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6840876d4d1ed0e8e2a330fc|16b60ede-379a-36de-ec0d-aac9ef3b7e2d",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197c8ab37c6
                    },
                    "e-168": {
                        id: "e-168",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-71",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-391"
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "6840876d4d1ed0e8e2a330fc|3b76bfc8-47d1-5a9d-3020-d07cabcad899",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6840876d4d1ed0e8e2a330fc|3b76bfc8-47d1-5a9d-3020-d07cabcad899",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197c8ab5797
                    },
                    "e-170": {
                        id: "e-170",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-66",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-394"
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "6840876d4d1ed0e8e2a330fc|b027a77e-2608-4127-faa5-419568875632",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6840876d4d1ed0e8e2a330fc|b027a77e-2608-4127-faa5-419568875632",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197c8abe979
                    },
                    "e-172": {
                        id: "e-172",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-67",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-432"
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "6840876d4d1ed0e8e2a330fc|7bddbbc7-19d8-4f7e-8774-349841e43c3b",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6840876d4d1ed0e8e2a330fc|7bddbbc7-19d8-4f7e-8774-349841e43c3b",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197c8ac2efb
                    },
                    "e-174": {
                        id: "e-174",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-69",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-439"
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "6840876d4d1ed0e8e2a330fc|d3743e10-20e5-56f2-c437-41115e695d60",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6840876d4d1ed0e8e2a330fc|d3743e10-20e5-56f2-c437-41115e695d60",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197c8ac5b9d
                    },
                    "e-176": {
                        id: "e-176",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-71",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-434"
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "6840876d4d1ed0e8e2a330fc|27810c9c-835c-aab2-e3db-9d8077ec18f0",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6840876d4d1ed0e8e2a330fc|27810c9c-835c-aab2-e3db-9d8077ec18f0",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197c8ac7bbd
                    },
                    "e-178": {
                        id: "e-178",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-70",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-444"
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "6840876d4d1ed0e8e2a330fc|143ac4b0-1ccd-4e11-ae17-1bb64b333cb4",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6840876d4d1ed0e8e2a330fc|143ac4b0-1ccd-4e11-ae17-1bb64b333cb4",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197c8ac9e3a
                    },
                    "e-180": {
                        id: "e-180",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-66",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-433"
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "6840876d4d1ed0e8e2a330fc|4708b3ce-ae65-ba58-b3f1-19e45a7ee33e",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6840876d4d1ed0e8e2a330fc|4708b3ce-ae65-ba58-b3f1-19e45a7ee33e",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197c8adfd9e
                    },
                    "e-182": {
                        id: "e-182",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-67",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-440"
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "6840876d4d1ed0e8e2a330fc|7bc40618-b6ba-98b9-a2bc-da7fe08bff33",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6840876d4d1ed0e8e2a330fc|7bc40618-b6ba-98b9-a2bc-da7fe08bff33",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197c8ae1a11
                    },
                    "e-184": {
                        id: "e-184",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-68",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-442"
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "6840876d4d1ed0e8e2a330fc|53874d37-36d2-cd21-17e3-7e0580dcecc5",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6840876d4d1ed0e8e2a330fc|53874d37-36d2-cd21-17e3-7e0580dcecc5",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197c8ae3f33
                    },
                    "e-186": {
                        id: "e-186",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-70",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-430"
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "6840876d4d1ed0e8e2a330fc|dffc65a0-0242-c78c-234e-f06f14483ed7",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6840876d4d1ed0e8e2a330fc|dffc65a0-0242-c78c-234e-f06f14483ed7",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197c8ae6464
                    },
                    "e-188": {
                        id: "e-188",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-71",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-189"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "6840876d4d1ed0e8e2a330fc|c881d2cc-2d4f-5e04-6a2e-7ca65e084c8a",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6840876d4d1ed0e8e2a330fc|c881d2cc-2d4f-5e04-6a2e-7ca65e084c8a",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197c8ae90d7
                    },
                    "e-190": {
                        id: "e-190",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-66",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-191"
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "6840876d4d1ed0e8e2a330fc|0a04d93d-e633-f402-f428-1bcdaf00f73b",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6840876d4d1ed0e8e2a330fc|0a04d93d-e633-f402-f428-1bcdaf00f73b",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197c8aeddbc
                    },
                    "e-192": {
                        id: "e-192",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-67",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-193"
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "6840876d4d1ed0e8e2a330fc|cc361453-0939-c765-6030-1b11e1149ca4",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6840876d4d1ed0e8e2a330fc|cc361453-0939-c765-6030-1b11e1149ca4",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197c8af56a7
                    },
                    "e-194": {
                        id: "e-194",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-69",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-195"
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "6840876d4d1ed0e8e2a330fc|da7739c7-892d-bf18-ed05-3a2a205f319d",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "6840876d4d1ed0e8e2a330fc|da7739c7-892d-bf18-ed05-3a2a205f319d",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197c8af7858
                    },
                    "e-196": {
                        id: "e-196",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-66",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-197"
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "a96576e7-0ca7-fa5e-89ee-4643797a680f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "a96576e7-0ca7-fa5e-89ee-4643797a680f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197c8b67a14
                    },
                    "e-198": {
                        id: "e-198",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-67",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-199"
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "a96576e7-0ca7-fa5e-89ee-4643797a6814",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "a96576e7-0ca7-fa5e-89ee-4643797a6814",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197c8b6ab35
                    },
                    "e-200": {
                        id: "e-200",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_START",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-72",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-201"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68648328e74f16fb90b5d1b0",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68648328e74f16fb90b5d1b0",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !0,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197d5a4c85b
                    },
                    "e-207": {
                        id: "e-207",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-67",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-210"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            selector: ".fade-in",
                            originalId: "68648328e74f16fb90b5d1b0|8f6fc826-7dba-6c6b-1c22-840d6d0e0b6d",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".fade-in",
                            originalId: "68648328e74f16fb90b5d1b0|8f6fc826-7dba-6c6b-1c22-840d6d0e0b6d",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 15,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x18f342cd81b
                    },
                    "e-208": {
                        id: "e-208",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-73",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            selector: ".section_team.background-color-dark",
                            originalId: "68648328e74f16fb90b5d1b0|8f6fc826-7dba-6c6b-1c22-840d6d0e0b4d",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".section_team.background-color-dark",
                            originalId: "68648328e74f16fb90b5d1b0|8f6fc826-7dba-6c6b-1c22-840d6d0e0b4d",
                            appliesTo: "CLASS"
                        }],
                        config: [{
                            continuousParameterGroupId: "a-73-p",
                            smoothing: 80,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 30,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x18f30d7a985
                    },
                    "e-211": {
                        id: "e-211",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-74",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["medium"],
                        target: {
                            selector: ".section_team.background-color-dark",
                            originalId: "68648328e74f16fb90b5d1b0|8f6fc826-7dba-6c6b-1c22-840d6d0e0b4d",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".section_team.background-color-dark",
                            originalId: "68648328e74f16fb90b5d1b0|8f6fc826-7dba-6c6b-1c22-840d6d0e0b4d",
                            appliesTo: "CLASS"
                        }],
                        config: [{
                            continuousParameterGroupId: "a-74-p",
                            smoothing: 50,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x18f6e225378
                    },
                    "e-212": {
                        id: "e-212",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-67",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-213"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "68648328e74f16fb90b5d1b0|74571cec-403e-f318-916b-45a4e276335f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68648328e74f16fb90b5d1b0|74571cec-403e-f318-916b-45a4e276335f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197d7285bd9
                    },
                    "e-214": {
                        id: "e-214",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-45",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68648328e74f16fb90b5d1b0|d00a027c-6fa9-93a8-3ea9-c54117259f0a",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68648328e74f16fb90b5d1b0|d00a027c-6fa9-93a8-3ea9-c54117259f0a",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-45-p",
                            smoothing: 94,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x197e604473e
                    },
                    "e-215": {
                        id: "e-215",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-66",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-216"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68648328e74f16fb90b5d1b0|8f6fc826-7dba-6c6b-1c22-840d6d0e0b6e",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68648328e74f16fb90b5d1b0|8f6fc826-7dba-6c6b-1c22-840d6d0e0b6e",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197e6071f7e
                    },
                    "e-217": {
                        id: "e-217",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-68",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-218"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68648328e74f16fb90b5d1b0|8f6fc826-7dba-6c6b-1c22-840d6d0e0b78",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68648328e74f16fb90b5d1b0|8f6fc826-7dba-6c6b-1c22-840d6d0e0b78",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197e6074daa
                    },
                    "e-219": {
                        id: "e-219",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-70",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-220"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68648328e74f16fb90b5d1b0|8f6fc826-7dba-6c6b-1c22-840d6d0e0b82",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68648328e74f16fb90b5d1b0|8f6fc826-7dba-6c6b-1c22-840d6d0e0b82",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197e607799a
                    },
                    "e-221": {
                        id: "e-221",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-66",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-222"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "68648328e74f16fb90b5d1b0|c513716e-35c9-0b31-dc1d-98c8f025949c",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68648328e74f16fb90b5d1b0|c513716e-35c9-0b31-dc1d-98c8f025949c",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197e61554ea
                    },
                    "e-223": {
                        id: "e-223",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-67",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-224"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "68648328e74f16fb90b5d1b0|28e297ce-462f-2047-c235-1cc0a3a191ae",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68648328e74f16fb90b5d1b0|28e297ce-462f-2047-c235-1cc0a3a191ae",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197e615905c
                    },
                    "e-225": {
                        id: "e-225",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-68",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-226"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "68648328e74f16fb90b5d1b0|eff5d831-f96a-14d0-11cb-4fd5fd5f07aa",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68648328e74f16fb90b5d1b0|eff5d831-f96a-14d0-11cb-4fd5fd5f07aa",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197e615a783
                    },
                    "e-227": {
                        id: "e-227",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-69",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-228"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "68648328e74f16fb90b5d1b0|0547d5bf-a88a-c8bd-4c09-d20c65b5d4e5",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68648328e74f16fb90b5d1b0|0547d5bf-a88a-c8bd-4c09-d20c65b5d4e5",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197e615d617
                    },
                    "e-229": {
                        id: "e-229",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-70",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-230"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "68648328e74f16fb90b5d1b0|40342b64-e090-ff0e-475e-12d93bd1978e",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68648328e74f16fb90b5d1b0|40342b64-e090-ff0e-475e-12d93bd1978e",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197e615f4a1
                    },
                    "e-231": {
                        id: "e-231",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-71",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-232"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "68648328e74f16fb90b5d1b0|bb79696d-f70d-2b0f-75d1-8f7cb28971c1",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68648328e74f16fb90b5d1b0|bb79696d-f70d-2b0f-75d1-8f7cb28971c1",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197e6160cf7
                    },
                    "e-233": {
                        id: "e-233",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-78",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-234"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "68648328e74f16fb90b5d1b0|99a0492c-2515-7609-9757-7c702f76ccde",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68648328e74f16fb90b5d1b0|99a0492c-2515-7609-9757-7c702f76ccde",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197e616279d
                    },
                    "e-235": {
                        id: "e-235",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-67",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-236"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68648328e74f16fb90b5d1b0|8f6fc826-7dba-6c6b-1c22-840d6d0e0b64",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68648328e74f16fb90b5d1b0|8f6fc826-7dba-6c6b-1c22-840d6d0e0b64",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197e616d673
                    },
                    "e-237": {
                        id: "e-237",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-66",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-238"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68648328e74f16fb90b5d1b0|b8ffa5e4-baf2-50a0-cb86-12cd8a3726a5",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68648328e74f16fb90b5d1b0|b8ffa5e4-baf2-50a0-cb86-12cd8a3726a5",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197e6170322
                    },
                    "e-239": {
                        id: "e-239",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-68",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-240"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "d1975e58-978e-e9d6-dbf9-e3a9622ee323",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "d1975e58-978e-e9d6-dbf9-e3a9622ee323",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197e6173ff3
                    },
                    "e-241": {
                        id: "e-241",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-39",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-242"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "68648328e74f16fb90b5d1b0|677f1413-69c1-98bc-d89f-f5eddbc2a11f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68648328e74f16fb90b5d1b0|677f1413-69c1-98bc-d89f-f5eddbc2a11f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197e6176c77
                    },
                    "e-243": {
                        id: "e-243",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-67",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-244"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "68648328e74f16fb90b5d1b0|677f1413-69c1-98bc-d89f-f5eddbc2a132",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68648328e74f16fb90b5d1b0|677f1413-69c1-98bc-d89f-f5eddbc2a132",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197e6179573
                    },
                    "e-245": {
                        id: "e-245",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-68",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-246"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "68648328e74f16fb90b5d1b0|677f1413-69c1-98bc-d89f-f5eddbc2a12a",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68648328e74f16fb90b5d1b0|677f1413-69c1-98bc-d89f-f5eddbc2a12a",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197e617b262
                    },
                    "e-247": {
                        id: "e-247",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-69",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-248"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "68648328e74f16fb90b5d1b0|677f1413-69c1-98bc-d89f-f5eddbc2a13a",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68648328e74f16fb90b5d1b0|677f1413-69c1-98bc-d89f-f5eddbc2a13a",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197e617ca9e
                    },
                    "e-249": {
                        id: "e-249",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-68",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-250"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "68648328e74f16fb90b5d1b0|dc3b3267-abbb-f0b0-2408-892f66a39948",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68648328e74f16fb90b5d1b0|dc3b3267-abbb-f0b0-2408-892f66a39948",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197e6181adb
                    },
                    "e-251": {
                        id: "e-251",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-69",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-252"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "68648328e74f16fb90b5d1b0|45e31f8a-72ef-dd1e-a269-711b5a05363f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68648328e74f16fb90b5d1b0|45e31f8a-72ef-dd1e-a269-711b5a05363f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197e6183bd2
                    },
                    "e-253": {
                        id: "e-253",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-70",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-254"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "7ca53bb2-d620-e0d6-d70d-d74c39d2778d",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "7ca53bb2-d620-e0d6-d70d-d74c39d2778d",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197e6187939
                    },
                    "e-255": {
                        id: "e-255",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-66",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-256"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "68648328e74f16fb90b5d1b0|8b1186b0-5179-201d-d928-276910a411d0",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68648328e74f16fb90b5d1b0|8b1186b0-5179-201d-d928-276910a411d0",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197e6235aa8
                    },
                    "e-267": {
                        id: "e-267",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-31",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "686c16596d60e9ebf686e288|488e7777-71b2-7e36-4789-2206a7bd01df",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "686c16596d60e9ebf686e288|488e7777-71b2-7e36-4789-2206a7bd01df",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-31-p",
                            smoothing: 90,
                            startsEntering: !0,
                            addStartOffset: !0,
                            addOffsetValue: 30,
                            startsExiting: !1,
                            addEndOffset: !0,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x197e637517a
                    },
                    "e-268": {
                        id: "e-268",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-32",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-269"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "686c16596d60e9ebf686e288|488e7777-71b2-7e36-4789-2206a7bd01e0",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "686c16596d60e9ebf686e288|488e7777-71b2-7e36-4789-2206a7bd01e0",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197e637517a
                    },
                    "e-269": {
                        id: "e-269",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-33",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-268"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "686c16596d60e9ebf686e288|488e7777-71b2-7e36-4789-2206a7bd01e0",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "686c16596d60e9ebf686e288|488e7777-71b2-7e36-4789-2206a7bd01e0",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197e637517a
                    },
                    "e-270": {
                        id: "e-270",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_MOVE",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-34",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "686c16596d60e9ebf686e288",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "686c16596d60e9ebf686e288",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-34-p",
                            selectedAxis: "X_AXIS",
                            basedOn: "VIEWPORT",
                            reverse: !1,
                            smoothing: 80,
                            restingState: 50
                        }, {
                            continuousParameterGroupId: "a-34-p-2",
                            selectedAxis: "Y_AXIS",
                            basedOn: "VIEWPORT",
                            reverse: !1,
                            smoothing: 80,
                            restingState: 50
                        }],
                        createdOn: 0x197e637517a
                    },
                    "e-309": {
                        id: "e-309",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-39",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-310"
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "686c16596d60e9ebf686e288|f8cd9a3a-3e01-4e7f-30db-ecd0dcc6e07a",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "686c16596d60e9ebf686e288|f8cd9a3a-3e01-4e7f-30db-ecd0dcc6e07a",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197e637517a
                    },
                    "e-325": {
                        id: "e-325",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-67",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-326"
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "686c16596d60e9ebf686e288|cb3ed43d-4fec-c076-6ad9-ca979cbce945",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "686c16596d60e9ebf686e288|cb3ed43d-4fec-c076-6ad9-ca979cbce945",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197e637517a
                    },
                    "e-327": {
                        id: "e-327",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-68",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-328"
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "686c16596d60e9ebf686e288|cb3ed43d-4fec-c076-6ad9-ca979cbce94b",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "686c16596d60e9ebf686e288|cb3ed43d-4fec-c076-6ad9-ca979cbce94b",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197e637517a
                    },
                    "e-331": {
                        id: "e-331",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-68",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-332"
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "686c16596d60e9ebf686e288|3cde3e8e-9cf9-f0b1-0571-18bb109027d6",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "686c16596d60e9ebf686e288|3cde3e8e-9cf9-f0b1-0571-18bb109027d6",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197e637517a
                    },
                    "e-333": {
                        id: "e-333",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-69",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-334"
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "686c16596d60e9ebf686e288|2d1acec6-4c9c-26ee-8926-bff6869d7e09",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "686c16596d60e9ebf686e288|2d1acec6-4c9c-26ee-8926-bff6869d7e09",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197e637517a
                    },
                    "e-335": {
                        id: "e-335",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-70",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-336"
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "686c16596d60e9ebf686e288|fd189f4e-bb1d-3d0d-a032-00be0c82ab01",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "686c16596d60e9ebf686e288|fd189f4e-bb1d-3d0d-a032-00be0c82ab01",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197e637517a
                    },
                    "e-337": {
                        id: "e-337",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-58",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-338"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "686c17c3e3cb6c4fdc820f91|558bfc30-d68a-d6c9-cff8-70858be5d84c",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "686c17c3e3cb6c4fdc820f91|558bfc30-d68a-d6c9-cff8-70858be5d84c",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197e63fa3e4
                    },
                    "e-338": {
                        id: "e-338",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-59",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-337"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "686c17c3e3cb6c4fdc820f91|558bfc30-d68a-d6c9-cff8-70858be5d84c",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "686c17c3e3cb6c4fdc820f91|558bfc30-d68a-d6c9-cff8-70858be5d84c",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197e63fa3e4
                    },
                    "e-339": {
                        id: "e-339",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-58",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-340"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "686c194b1bfd8deef61870b4|558bfc30-d68a-d6c9-cff8-70858be5d84c",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "686c194b1bfd8deef61870b4|558bfc30-d68a-d6c9-cff8-70858be5d84c",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197e642d0c8
                    },
                    "e-340": {
                        id: "e-340",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-59",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-339"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "686c194b1bfd8deef61870b4|558bfc30-d68a-d6c9-cff8-70858be5d84c",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "686c194b1bfd8deef61870b4|558bfc30-d68a-d6c9-cff8-70858be5d84c",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197e642d0c8
                    },
                    "e-346": {
                        id: "e-346",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_MOVE",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-34",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "686c3b9e4e68bde7004e8255",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "686c3b9e4e68bde7004e8255",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-34-p",
                            selectedAxis: "X_AXIS",
                            basedOn: "VIEWPORT",
                            reverse: !1,
                            smoothing: 80,
                            restingState: 50
                        }, {
                            continuousParameterGroupId: "a-34-p-2",
                            selectedAxis: "Y_AXIS",
                            basedOn: "VIEWPORT",
                            reverse: !1,
                            smoothing: 80,
                            restingState: 50
                        }],
                        createdOn: 0x197e6c8e449
                    },
                    "e-347": {
                        id: "e-347",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-39",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-348"
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "686c3b9e4e68bde7004e8255|f8cd9a3a-3e01-4e7f-30db-ecd0dcc6e07a",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "686c3b9e4e68bde7004e8255|f8cd9a3a-3e01-4e7f-30db-ecd0dcc6e07a",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197e6c8e449
                    },
                    "e-351": {
                        id: "e-351",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-67",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-352"
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "686c3b9e4e68bde7004e8255|cb3ed43d-4fec-c076-6ad9-ca979cbce945",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "686c3b9e4e68bde7004e8255|cb3ed43d-4fec-c076-6ad9-ca979cbce945",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197e6c8e449
                    },
                    "e-353": {
                        id: "e-353",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-68",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-354"
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "686c3b9e4e68bde7004e8255|cb3ed43d-4fec-c076-6ad9-ca979cbce94b",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "686c3b9e4e68bde7004e8255|cb3ed43d-4fec-c076-6ad9-ca979cbce94b",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197e6c8e449
                    },
                    "e-355": {
                        id: "e-355",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-79",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "686c3b9e4e68bde7004e8255|b2d324aa-2914-fc53-9aab-02cf33571f4a",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "686c3b9e4e68bde7004e8255|b2d324aa-2914-fc53-9aab-02cf33571f4a",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-79-p",
                            smoothing: 90,
                            startsEntering: !0,
                            addStartOffset: !0,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !0,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x196c6089931
                    },
                    "e-356": {
                        id: "e-356",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-32",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-357"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "686c3b9e4e68bde7004e8255|b2d324aa-2914-fc53-9aab-02cf33571f4c",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "686c3b9e4e68bde7004e8255|b2d324aa-2914-fc53-9aab-02cf33571f4c",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197e6d3dba8
                    },
                    "e-357": {
                        id: "e-357",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-33",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-356"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "686c3b9e4e68bde7004e8255|b2d324aa-2914-fc53-9aab-02cf33571f4c",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "686c3b9e4e68bde7004e8255|b2d324aa-2914-fc53-9aab-02cf33571f4c",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197e6d3dba9
                    },
                    "e-363": {
                        id: "e-363",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-67",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-364"
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "686c3f27c11c186f070e56d4|cb3ed43d-4fec-c076-6ad9-ca979cbce945",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "686c3f27c11c186f070e56d4|cb3ed43d-4fec-c076-6ad9-ca979cbce945",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197e6d6b207
                    },
                    "e-365": {
                        id: "e-365",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-68",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-366"
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "686c3f27c11c186f070e56d4|cb3ed43d-4fec-c076-6ad9-ca979cbce94b",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "686c3f27c11c186f070e56d4|cb3ed43d-4fec-c076-6ad9-ca979cbce94b",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197e6d6b207
                    },
                    "e-370": {
                        id: "e-370",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-80",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-371"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            selector: ".work-list_image-wrap-v2",
                            originalId: "67aa74c30f286268ae1aba0d|53f8259b-56c5-f381-2838-0a760348c8c7",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".work-list_image-wrap-v2",
                            originalId: "67aa74c30f286268ae1aba0d|53f8259b-56c5-f381-2838-0a760348c8c7",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x194fc47087f
                    },
                    "e-371": {
                        id: "e-371",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-81",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-370"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            selector: ".work-list_image-wrap-v2",
                            originalId: "67aa74c30f286268ae1aba0d|53f8259b-56c5-f381-2838-0a760348c8c7",
                            appliesTo: "CLASS"
                        },
                        targets: [{
                            selector: ".work-list_image-wrap-v2",
                            originalId: "67aa74c30f286268ae1aba0d|53f8259b-56c5-f381-2838-0a760348c8c7",
                            appliesTo: "CLASS"
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x194fc47087f
                    },
                    "e-372": {
                        id: "e-372",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-45",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "686c3f27c11c186f070e56d4|5d6c5d68-b294-8b49-09d2-c32b46d36271",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "686c3f27c11c186f070e56d4|5d6c5d68-b294-8b49-09d2-c32b46d36271",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-45-p",
                            smoothing: 90,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x197e6e4c857
                    },
                    "e-373": {
                        id: "e-373",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-7",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-374"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "a96576e7-0ca7-fa5e-89ee-4643797a6828",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "a96576e7-0ca7-fa5e-89ee-4643797a6828",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !0,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197e6e54911
                    },
                    "e-377": {
                        id: "e-377",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-66",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-378"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "686c4321d9d7fbda040d44d1|628ca689-b58b-9fd4-62cb-193d1a062fc3",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "686c4321d9d7fbda040d44d1|628ca689-b58b-9fd4-62cb-193d1a062fc3",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x196f47f919b
                    },
                    "e-379": {
                        id: "e-379",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-69",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-380"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "686c4321d9d7fbda040d44d1|fe4f6338-889a-d7b2-04b5-17e56d36b920",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "686c4321d9d7fbda040d44d1|fe4f6338-889a-d7b2-04b5-17e56d36b920",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x196f47fbb88
                    },
                    "e-381": {
                        id: "e-381",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_START",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-82",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-382"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "686c4321d9d7fbda040d44d1",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "686c4321d9d7fbda040d44d1",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !0,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197e6e79de7
                    },
                    "e-389": {
                        id: "e-389",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-71",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-393"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "686c4440cda8c5f6b5604293|2c989960-fc9f-d592-9931-d5f35ca1efd4",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "686c4440cda8c5f6b5604293|2c989960-fc9f-d592-9931-d5f35ca1efd4",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x196f4807ffc
                    },
                    "e-390": {
                        id: "e-390",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-68",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-398"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "686c4440cda8c5f6b5604293|2c989960-fc9f-d592-9931-d5f35ca1efb7",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "686c4440cda8c5f6b5604293|2c989960-fc9f-d592-9931-d5f35ca1efb7",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x196f48015c3
                    },
                    "e-391": {
                        id: "e-391",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-78",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-395"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "686c4440cda8c5f6b5604293|2c989960-fc9f-d592-9931-d5f35ca1efca",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "686c4440cda8c5f6b5604293|2c989960-fc9f-d592-9931-d5f35ca1efca",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x196f480d2e5
                    },
                    "e-394": {
                        id: "e-394",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-92",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-397"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "686c4440cda8c5f6b5604293|2c989960-fc9f-d592-9931-d5f35ca1efcf",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "686c4440cda8c5f6b5604293|2c989960-fc9f-d592-9931-d5f35ca1efcf",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x196f48115f9
                    },
                    "e-396": {
                        id: "e-396",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-70",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-392"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "686c4440cda8c5f6b5604293|2c989960-fc9f-d592-9931-d5f35ca1efbf",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "686c4440cda8c5f6b5604293|2c989960-fc9f-d592-9931-d5f35ca1efbf",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x196f4804e28
                    },
                    "e-403": {
                        id: "e-403",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-71",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-401"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "686c4440cda8c5f6b5604293|2c989960-fc9f-d592-9931-d5f35ca1efc5",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "686c4440cda8c5f6b5604293|2c989960-fc9f-d592-9931-d5f35ca1efc5",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x196f4806922
                    },
                    "e-405": {
                        id: "e-405",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-67",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-402"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "686c4440cda8c5f6b5604293|2c989960-fc9f-d592-9931-d5f35ca1efb5",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "686c4440cda8c5f6b5604293|2c989960-fc9f-d592-9931-d5f35ca1efb5",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x196f47ffff6
                    },
                    "e-406": {
                        id: "e-406",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-69",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-404"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "686c4440cda8c5f6b5604293|2c989960-fc9f-d592-9931-d5f35ca1efba",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "686c4440cda8c5f6b5604293|2c989960-fc9f-d592-9931-d5f35ca1efba",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x196f48036e3
                    },
                    "e-407": {
                        id: "e-407",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_START",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-91",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-408"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "686c4440cda8c5f6b5604293",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "686c4440cda8c5f6b5604293",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !0,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197e6eb3720
                    },
                    "e-425": {
                        id: "e-425",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "PAGE_START",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-91",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-426"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "686c45d3ecf487d5cfc98b9c",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "686c45d3ecf487d5cfc98b9c",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !0,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197e6f0c436
                    },
                    "e-430": {
                        id: "e-430",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-99",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-428"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "686c45d3ecf487d5cfc98b9c|a3edbec5-3ea6-44e5-8240-580abc1a16ed",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "686c45d3ecf487d5cfc98b9c|a3edbec5-3ea6-44e5-8240-580abc1a16ed",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x196f4823d21
                    },
                    "e-432": {
                        id: "e-432",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-67",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-436"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "686c45d3ecf487d5cfc98b9c|a3edbec5-3ea6-44e5-8240-580abc1a16ca",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "686c45d3ecf487d5cfc98b9c|a3edbec5-3ea6-44e5-8240-580abc1a16ca",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x196f48185b0
                    },
                    "e-433": {
                        id: "e-433",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-71",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-438"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "686c45d3ecf487d5cfc98b9c|a3edbec5-3ea6-44e5-8240-580abc1a16dd",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "686c45d3ecf487d5cfc98b9c|a3edbec5-3ea6-44e5-8240-580abc1a16dd",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x196f481eae8
                    },
                    "e-434": {
                        id: "e-434",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-69",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-431"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "686c45d3ecf487d5cfc98b9c|a3edbec5-3ea6-44e5-8240-580abc1a16d5",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "686c45d3ecf487d5cfc98b9c|a3edbec5-3ea6-44e5-8240-580abc1a16d5",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x196f481b9e8
                    },
                    "e-439": {
                        id: "e-439",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-68",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-437"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "686c45d3ecf487d5cfc98b9c|a3edbec5-3ea6-44e5-8240-580abc1a16ce",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "686c45d3ecf487d5cfc98b9c|a3edbec5-3ea6-44e5-8240-580abc1a16ce",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x196f4819b6d
                    },
                    "e-440": {
                        id: "e-440",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-78",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-441"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "686c45d3ecf487d5cfc98b9c|a3edbec5-3ea6-44e5-8240-580abc1a16e1",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "686c45d3ecf487d5cfc98b9c|a3edbec5-3ea6-44e5-8240-580abc1a16e1",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x196f48202da
                    },
                    "e-442": {
                        id: "e-442",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-92",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-429"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "686c45d3ecf487d5cfc98b9c|a3edbec5-3ea6-44e5-8240-580abc1a16e5",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "686c45d3ecf487d5cfc98b9c|a3edbec5-3ea6-44e5-8240-580abc1a16e5",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x196f48218da
                    },
                    "e-444": {
                        id: "e-444",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-70",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-427"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "686c45d3ecf487d5cfc98b9c|a3edbec5-3ea6-44e5-8240-580abc1a16d9",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "686c45d3ecf487d5cfc98b9c|a3edbec5-3ea6-44e5-8240-580abc1a16d9",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x196f481d220
                    },
                    "e-445": {
                        id: "e-445",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-70",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-446"
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "686c45d3ecf487d5cfc98b9c|80b850e4-3f3f-3eb6-01c6-b48cc5e43604",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "686c45d3ecf487d5cfc98b9c|80b850e4-3f3f-3eb6-01c6-b48cc5e43604",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197e6f206a9
                    },
                    "e-447": {
                        id: "e-447",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-73",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "68648328e74f16fb90b5d1b0|8f6fc826-7dba-6c6b-1c22-840d6d0e0b4d",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "68648328e74f16fb90b5d1b0|8f6fc826-7dba-6c6b-1c22-840d6d0e0b4d",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-73-p",
                            smoothing: 90,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x197e6f65674
                    },
                    "e-448": {
                        id: "e-448",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-67",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-449"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "686c17c3e3cb6c4fdc820f91|9c0f2e68-8374-6fe2-669d-030d1163ffc2",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "686c17c3e3cb6c4fdc820f91|9c0f2e68-8374-6fe2-669d-030d1163ffc2",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197e6fafb6d
                    },
                    "e-450": {
                        id: "e-450",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-68",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-451"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "686c17c3e3cb6c4fdc820f91|558bfc30-d68a-d6c9-cff8-70858be5d849",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "686c17c3e3cb6c4fdc820f91|558bfc30-d68a-d6c9-cff8-70858be5d849",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197e6fb19cd
                    },
                    "e-452": {
                        id: "e-452",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-66",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-453"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "686c194b1bfd8deef61870b4|8836311a-475d-d195-6fc5-a18b162f2a6b",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "686c194b1bfd8deef61870b4|8836311a-475d-d195-6fc5-a18b162f2a6b",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197e6fb54c9
                    },
                    "e-454": {
                        id: "e-454",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-68",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-455"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "686c194b1bfd8deef61870b4|c8b5f97c-e6af-837a-c901-26f1835543d7",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "686c194b1bfd8deef61870b4|c8b5f97c-e6af-837a-c901-26f1835543d7",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197e6fb6e3d
                    },
                    "e-456": {
                        id: "e-456",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-69",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-457"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "686c194b1bfd8deef61870b4|558bfc30-d68a-d6c9-cff8-70858be5d849",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "686c194b1bfd8deef61870b4|558bfc30-d68a-d6c9-cff8-70858be5d849",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197e6fb9a32
                    },
                    "e-458": {
                        id: "e-458",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-66",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-459"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "686c39a6fe51467aea53d714|8836311a-475d-d195-6fc5-a18b162f2a6b",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "686c39a6fe51467aea53d714|8836311a-475d-d195-6fc5-a18b162f2a6b",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197e6fbce67
                    },
                    "e-460": {
                        id: "e-460",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-67",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-461"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "686c39a6fe51467aea53d714|c8b5f97c-e6af-837a-c901-26f1835543d7",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "686c39a6fe51467aea53d714|c8b5f97c-e6af-837a-c901-26f1835543d7",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197e6fbe1e9
                    },
                    "e-462": {
                        id: "e-462",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-68",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-463"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "686c39a6fe51467aea53d714|558bfc30-d68a-d6c9-cff8-70858be5d849",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "686c39a6fe51467aea53d714|558bfc30-d68a-d6c9-cff8-70858be5d849",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197e6fbfd08
                    },
                    "e-464": {
                        id: "e-464",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-68",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-465"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "686407ca6564190126f756ac|1ddb986b-a7ae-4831-fd68-24dd03449a3c",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "686407ca6564190126f756ac|1ddb986b-a7ae-4831-fd68-24dd03449a3c",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197f045a40c
                    },
                    "e-466": {
                        id: "e-466",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-58",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-467"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "686407ca6564190126f756ac|1ddb986b-a7ae-4831-fd68-24dd03449a3f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "686407ca6564190126f756ac|1ddb986b-a7ae-4831-fd68-24dd03449a3f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197f045a40c
                    },
                    "e-467": {
                        id: "e-467",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-59",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-466"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "686407ca6564190126f756ac|1ddb986b-a7ae-4831-fd68-24dd03449a3f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "686407ca6564190126f756ac|1ddb986b-a7ae-4831-fd68-24dd03449a3f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197f045a40c
                    },
                    "e-468": {
                        id: "e-468",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-66",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-469"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "686407ca6564190126f756ac|be237efa-4d8e-4561-1966-b984bd55a195",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "686407ca6564190126f756ac|be237efa-4d8e-4561-1966-b984bd55a195",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197f04a67f2
                    },
                    "e-470": {
                        id: "e-470",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-68",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-471"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "686407ca6564190126f756ac|be237efa-4d8e-4561-1966-b984bd55a198",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "686407ca6564190126f756ac|be237efa-4d8e-4561-1966-b984bd55a198",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197f04a8cf4
                    },
                    "e-472": {
                        id: "e-472",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-68",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-473"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "686407ca6564190126f756ac|be237efa-4d8e-4561-1966-b984bd55a19b",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "686407ca6564190126f756ac|be237efa-4d8e-4561-1966-b984bd55a19b",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197f04aa3b1
                    },
                    "e-474": {
                        id: "e-474",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-69",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-475"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "686407ca6564190126f756ac|be237efa-4d8e-4561-1966-b984bd55a19e",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "686407ca6564190126f756ac|be237efa-4d8e-4561-1966-b984bd55a19e",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197f04ac119
                    },
                    "e-476": {
                        id: "e-476",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-70",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-477"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "686407ca6564190126f756ac|be237efa-4d8e-4561-1966-b984bd55a1a1",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "686407ca6564190126f756ac|be237efa-4d8e-4561-1966-b984bd55a1a1",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197f04addf4
                    },
                    "e-478": {
                        id: "e-478",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-71",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-479"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "686407ca6564190126f756ac|1a79f159-9b8f-d001-6e26-fde326e44c57",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "686407ca6564190126f756ac|1a79f159-9b8f-d001-6e26-fde326e44c57",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197f04b01c7
                    },
                    "e-480": {
                        id: "e-480",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-39",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-481"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "686407ca6564190126f756ac|f330f8d5-76d6-e91a-e481-b672d73ba5c0",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "686407ca6564190126f756ac|f330f8d5-76d6-e91a-e481-b672d73ba5c0",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197f04b2955
                    },
                    "e-482": {
                        id: "e-482",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-66",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-483"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "686407ca6564190126f756ac|8850a88a-b69f-c074-d714-ac5ca462c517",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "686407ca6564190126f756ac|8850a88a-b69f-c074-d714-ac5ca462c517",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x197f04b4b68
                    }
                },
                actionLists: {
                    a: {
                        id: "a",
                        title: "Template tooltip in",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-n",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {},
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {},
                                    yValue: -.25,
                                    xUnit: "PX",
                                    yUnit: "rem",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-n-3",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {},
                                    value: "none"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-n-4",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {},
                                    value: "block"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-n-5",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 150,
                                    target: {},
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-n-6",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: [.006, .65, .355, 1],
                                    duration: 300,
                                    target: {},
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "rem",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x19405338cc1
                    },
                    "a-2": {
                        id: "a-2",
                        title: "Template tooltip out",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-2-n",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 150,
                                    target: {},
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-2-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "inCubic",
                                    duration: 300,
                                    target: {},
                                    yValue: -.5,
                                    xUnit: "PX",
                                    yUnit: "rem",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-2-n-3",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {},
                                    value: "block"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x19405338cc1
                    },
                    "a-3": {
                        id: "a-3",
                        title: "Template bar close",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-3-n",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {},
                                    value: "flex"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-3-n-2",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {},
                                    value: "none"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x194053e35cd
                    },
                    "a-6": {
                        id: "a-6",
                        title: "HOME - Header words swap",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-6-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".home-header_words",
                                        selectorGuids: ["8d1cb1b6-a0b4-6d4c-3343-026ff7a89ff7"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-6-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 1500,
                                    easing: "swingFromTo",
                                    duration: 1e3,
                                    target: {
                                        selector: ".home-header_words",
                                        selectorGuids: ["8d1cb1b6-a0b4-6d4c-3343-026ff7a89ff7"]
                                    },
                                    yValue: -100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-6-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 1500,
                                    easing: "swingFromTo",
                                    duration: 1e3,
                                    target: {
                                        selector: ".home-header_words",
                                        selectorGuids: ["8d1cb1b6-a0b4-6d4c-3343-026ff7a89ff7"]
                                    },
                                    yValue: -200,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-6-n-4",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 1500,
                                    easing: "swingFromTo",
                                    duration: 1e3,
                                    target: {
                                        selector: ".home-header_words",
                                        selectorGuids: ["8d1cb1b6-a0b4-6d4c-3343-026ff7a89ff7"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x191d3d7bbaf
                    },
                    "a-7": {
                        id: "a-7",
                        title: "Note marquee",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-7-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".note-marquee_text",
                                        selectorGuids: ["44e3824e-004d-ac4a-3bcb-12a51f36c3ce"]
                                    },
                                    xValue: 0,
                                    xUnit: "%",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-7-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".note-marquee_text",
                                        selectorGuids: ["44e3824e-004d-ac4a-3bcb-12a51f36c3ce"]
                                    },
                                    xValue: 0,
                                    xUnit: "%",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-7-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 6e3,
                                    target: {
                                        selector: ".note-marquee_text",
                                        selectorGuids: ["44e3824e-004d-ac4a-3bcb-12a51f36c3ce"]
                                    },
                                    xValue: -100,
                                    xUnit: "%",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x196ef9e8461
                    },
                    "a-12": {
                        id: "a-12",
                        title: "Menu link hover in",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-12-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".menu_link-text._1",
                                        selectorGuids: ["55d86ded-19e1-c5cf-9b84-198b4acac607", "55d86ded-19e1-c5cf-9b84-198b4acac608"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-12-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".menu_link-text._2",
                                        selectorGuids: ["55d86ded-19e1-c5cf-9b84-198b4acac607", "55d86ded-19e1-c5cf-9b84-198b4acac609"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-12-n-6",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".menu_link-dot",
                                        selectorGuids: ["4b7d0a0e-b98e-9dfa-62cd-5feb63fedea7"]
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    locked: !0
                                }
                            }, {
                                id: "a-12-n-7",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".menu_link-dot",
                                        selectorGuids: ["4b7d0a0e-b98e-9dfa-62cd-5feb63fedea7"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-12-n-5",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outCubic",
                                    duration: 350,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".menu_link-text._1",
                                        selectorGuids: ["55d86ded-19e1-c5cf-9b84-198b4acac607", "55d86ded-19e1-c5cf-9b84-198b4acac608"]
                                    },
                                    yValue: -100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-12-n-8",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "outCubic",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".menu_link-dot",
                                        selectorGuids: ["4b7d0a0e-b98e-9dfa-62cd-5feb63fedea7"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }, {
                                id: "a-12-n-9",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".menu_link-dot",
                                        selectorGuids: ["4b7d0a0e-b98e-9dfa-62cd-5feb63fedea7"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-12-n-10",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 50,
                                    easing: "outCubic",
                                    duration: 350,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".menu_link-text._2",
                                        selectorGuids: ["55d86ded-19e1-c5cf-9b84-198b4acac607", "55d86ded-19e1-c5cf-9b84-198b4acac609"]
                                    },
                                    yValue: -100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x1948f63f1bd
                    },
                    "a-13": {
                        id: "a-13",
                        title: "Menu link hover out",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-13-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outCubic",
                                    duration: 350,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".menu_link-text._1",
                                        selectorGuids: ["55d86ded-19e1-c5cf-9b84-198b4acac607", "55d86ded-19e1-c5cf-9b84-198b4acac608"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-13-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outCubic",
                                    duration: 350,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".menu_link-text._2",
                                        selectorGuids: ["55d86ded-19e1-c5cf-9b84-198b4acac607", "55d86ded-19e1-c5cf-9b84-198b4acac609"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-13-n-4",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 200,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".menu_link-dot",
                                        selectorGuids: ["4b7d0a0e-b98e-9dfa-62cd-5feb63fedea7"]
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    locked: !0
                                }
                            }, {
                                id: "a-13-n-5",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 200,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".menu_link-dot",
                                        selectorGuids: ["4b7d0a0e-b98e-9dfa-62cd-5feb63fedea7"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x1948f63f1bd
                    },
                    "a-14": {
                        id: "a-14",
                        title: "Button hover in",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-14-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".button_text._1",
                                        selectorGuids: ["631ab744-5329-8796-79d5-f26a19c026b1", "631ab744-5329-8796-79d5-f26a19c026b9"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-14-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".button_text._2",
                                        selectorGuids: ["631ab744-5329-8796-79d5-f26a19c026b1", "631ab744-5329-8796-79d5-f26a19c026bb"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-14-n-3",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".button_dot-scale",
                                        selectorGuids: ["631ab744-5329-8796-79d5-f26a19c026ae"]
                                    },
                                    value: "block"
                                }
                            }, {
                                id: "a-14-n-4",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".button_dot-scale",
                                        selectorGuids: ["631ab744-5329-8796-79d5-f26a19c026ae"]
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    locked: !0
                                }
                            }, {
                                id: "a-14-n-5",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".button_dot-scale",
                                        selectorGuids: ["631ab744-5329-8796-79d5-f26a19c026ae"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-14-n-6",
                                actionTypeId: "STYLE_FILTER",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".button_text._2",
                                        selectorGuids: ["631ab744-5329-8796-79d5-f26a19c026b1", "631ab744-5329-8796-79d5-f26a19c026bb"]
                                    },
                                    filters: [{
                                        type: "blur",
                                        filterId: "9b03",
                                        value: 5,
                                        unit: "px"
                                    }]
                                }
                            }, {
                                id: "a-14-n-7",
                                actionTypeId: "STYLE_FILTER",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".button_text._1",
                                        selectorGuids: ["631ab744-5329-8796-79d5-f26a19c026b1", "631ab744-5329-8796-79d5-f26a19c026b9"]
                                    },
                                    filters: [{
                                        type: "blur",
                                        filterId: "3766",
                                        value: 0,
                                        unit: "px"
                                    }]
                                }
                            }, {
                                id: "a-14-n-8",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".button_text._1",
                                        selectorGuids: ["631ab744-5329-8796-79d5-f26a19c026b1", "631ab744-5329-8796-79d5-f26a19c026b9"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-14-n-9",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outCubic",
                                    duration: 200,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".button_text._1",
                                        selectorGuids: ["631ab744-5329-8796-79d5-f26a19c026b1", "631ab744-5329-8796-79d5-f26a19c026b9"]
                                    },
                                    yValue: -100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-14-n-10",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outCubic",
                                    duration: 200,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".button_text._2",
                                        selectorGuids: ["631ab744-5329-8796-79d5-f26a19c026b1", "631ab744-5329-8796-79d5-f26a19c026bb"]
                                    },
                                    yValue: -100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-14-n-11",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "outCubic",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".button_dot-scale",
                                        selectorGuids: ["631ab744-5329-8796-79d5-f26a19c026ae"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }, {
                                id: "a-14-n-12",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "outCubic",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".button_dot-scale",
                                        selectorGuids: ["631ab744-5329-8796-79d5-f26a19c026ae"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-14-n-13",
                                actionTypeId: "STYLE_FILTER",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 200,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".button_text._2",
                                        selectorGuids: ["631ab744-5329-8796-79d5-f26a19c026b1", "631ab744-5329-8796-79d5-f26a19c026bb"]
                                    },
                                    filters: [{
                                        type: "blur",
                                        filterId: "9b03",
                                        value: 0,
                                        unit: "px"
                                    }]
                                }
                            }, {
                                id: "a-14-n-14",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 200,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".button_text._2",
                                        selectorGuids: ["631ab744-5329-8796-79d5-f26a19c026b1", "631ab744-5329-8796-79d5-f26a19c026bb"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-14-n-15",
                                actionTypeId: "STYLE_FILTER",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 200,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".button_text._1",
                                        selectorGuids: ["631ab744-5329-8796-79d5-f26a19c026b1", "631ab744-5329-8796-79d5-f26a19c026b9"]
                                    },
                                    filters: [{
                                        type: "blur",
                                        filterId: "3766",
                                        value: 5,
                                        unit: "px"
                                    }]
                                }
                            }, {
                                id: "a-14-n-16",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 200,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".button_text._1",
                                        selectorGuids: ["631ab744-5329-8796-79d5-f26a19c026b1", "631ab744-5329-8796-79d5-f26a19c026b9"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x195fbb9873b
                    },
                    "a-15": {
                        id: "a-15",
                        title: "Button hover out",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-15-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outCubic",
                                    duration: 200,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".button_text._1",
                                        selectorGuids: ["631ab744-5329-8796-79d5-f26a19c026b1", "631ab744-5329-8796-79d5-f26a19c026b9"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-15-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outCubic",
                                    duration: 200,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".button_text._2",
                                        selectorGuids: ["631ab744-5329-8796-79d5-f26a19c026b1", "631ab744-5329-8796-79d5-f26a19c026bb"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-15-n-3",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 200,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".button_text._1",
                                        selectorGuids: ["631ab744-5329-8796-79d5-f26a19c026b1", "631ab744-5329-8796-79d5-f26a19c026b9"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-15-n-4",
                                actionTypeId: "STYLE_FILTER",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 200,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".button_text._1",
                                        selectorGuids: ["631ab744-5329-8796-79d5-f26a19c026b1", "631ab744-5329-8796-79d5-f26a19c026b9"]
                                    },
                                    filters: [{
                                        type: "blur",
                                        filterId: "be1c",
                                        value: 0,
                                        unit: "px"
                                    }]
                                }
                            }, {
                                id: "a-15-n-5",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 200,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".button_text._2",
                                        selectorGuids: ["631ab744-5329-8796-79d5-f26a19c026b1", "631ab744-5329-8796-79d5-f26a19c026bb"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-15-n-6",
                                actionTypeId: "STYLE_FILTER",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 200,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".button_text._2",
                                        selectorGuids: ["631ab744-5329-8796-79d5-f26a19c026b1", "631ab744-5329-8796-79d5-f26a19c026bb"]
                                    },
                                    filters: [{
                                        type: "blur",
                                        filterId: "650e",
                                        value: 5,
                                        unit: "px"
                                    }]
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-15-n-7",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".button_dot-scale",
                                        selectorGuids: ["631ab744-5329-8796-79d5-f26a19c026ae"]
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    locked: !0
                                }
                            }, {
                                id: "a-15-n-8",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".button_dot-scale",
                                        selectorGuids: ["631ab744-5329-8796-79d5-f26a19c026ae"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x195fbb9873b
                    },
                    "a-16": {
                        id: "a-16",
                        title: "Menu legal link hover in",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-16-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: [.62, .05, .01, .99],
                                    duration: 750,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".menu_legal-line",
                                        selectorGuids: ["2fa95c7e-2b3a-14cd-308f-ba35573bd83d"]
                                    },
                                    xValue: -2,
                                    xUnit: "%",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-16-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: [.62, .05, .01, .99],
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".menu_legal-line",
                                        selectorGuids: ["2fa95c7e-2b3a-14cd-308f-ba35573bd83d"]
                                    },
                                    xValue: 101,
                                    xUnit: "%",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x193300cf07b
                    },
                    "a-17": {
                        id: "a-17",
                        title: "Menu legal link hover out",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-17-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: [.62, .05, .01, .99],
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".menu_legal-line",
                                        selectorGuids: ["2fa95c7e-2b3a-14cd-308f-ba35573bd83d"]
                                    },
                                    xValue: 201,
                                    xUnit: "%",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-17-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: [.62, .05, .01, .99],
                                    duration: 0,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".menu_legal-line",
                                        selectorGuids: ["2fa95c7e-2b3a-14cd-308f-ba35573bd83d"]
                                    },
                                    xValue: -2,
                                    xUnit: "%",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x193300cf07b
                    },
                    "a-18": {
                        id: "a-18",
                        title: "Menu contact hover in",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-18-n",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".menu_contact-img",
                                        selectorGuids: ["06f55c9d-3908-3f5c-9ceb-c1ce6f4cea48"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-18-n-2",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "outCubic",
                                    duration: 350,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".menu_contact-img",
                                        selectorGuids: ["06f55c9d-3908-3f5c-9ceb-c1ce6f4cea48"]
                                    },
                                    xValue: 1.1,
                                    yValue: 1.1,
                                    locked: !0
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x1975691c6b0
                    },
                    "a-19": {
                        id: "a-19",
                        title: "Menu contact hover out",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-19-n-2",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "outCubic",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".menu_contact-img",
                                        selectorGuids: ["06f55c9d-3908-3f5c-9ceb-c1ce6f4cea48"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x1975691c6b0
                    },
                    "a-8": {
                        id: "a-8",
                        title: "Navbar - Open menu",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-8-n",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        useEventTarget: "SIBLINGS",
                                        selector: ".menu",
                                        selectorGuids: ["84b99882-9a9a-b949-7134-ed7f998d5568"]
                                    },
                                    value: "none"
                                }
                            }, {
                                id: "a-8-n-5",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        useEventTarget: "SIBLINGS",
                                        selector: ".menu_bg-blur",
                                        selectorGuids: ["f2a9bf32-c8ce-87f4-6647-5339de9a9090"]
                                    },
                                    value: "none"
                                }
                            }, {
                                id: "a-8-n-7",
                                actionTypeId: "STYLE_FILTER",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "SIBLINGS",
                                        selector: ".menu_bg-blur",
                                        selectorGuids: ["f2a9bf32-c8ce-87f4-6647-5339de9a9090"]
                                    },
                                    filters: [{
                                        type: "blur",
                                        filterId: "6f61",
                                        value: 0,
                                        unit: "px"
                                    }]
                                }
                            }, {
                                id: "a-8-n-13",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".menu_in",
                                        selectorGuids: ["b4dc0b97-fae5-608e-814a-52a9c8e87e44"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-8-n-9",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".menu_in",
                                        selectorGuids: ["b4dc0b97-fae5-608e-814a-52a9c8e87e44"]
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    locked: !0
                                }
                            }, {
                                id: "a-8-n-18",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".menu_close",
                                        selectorGuids: ["5616c434-c402-2ea7-e1d8-de08a18c526f"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-8-n-11",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".menu_links",
                                        selectorGuids: ["511df262-0109-546b-8791-6bd89a434892"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-8-n-23",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".menu_links",
                                        selectorGuids: ["511df262-0109-546b-8791-6bd89a434892"]
                                    },
                                    yValue: -2,
                                    xUnit: "PX",
                                    yUnit: "rem",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-8-n-15",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".menu_social-wrap",
                                        selectorGuids: ["74f4530e-3713-3aa8-3de6-ba9bef15003f"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-8-n-25",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".menu_social-wrap",
                                        selectorGuids: ["74f4530e-3713-3aa8-3de6-ba9bef15003f"]
                                    },
                                    yValue: -2,
                                    xUnit: "PX",
                                    yUnit: "rem",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-8-n-16",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".menu_contact",
                                        selectorGuids: ["4f6ea97f-47fd-7bb8-9495-b7e945a7a807"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-8-n-27",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".menu_contact",
                                        selectorGuids: ["4f6ea97f-47fd-7bb8-9495-b7e945a7a807"]
                                    },
                                    yValue: -2,
                                    xUnit: "PX",
                                    yUnit: "rem",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-8-n-17",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".menu_legal",
                                        selectorGuids: ["5717102d-7271-7c57-dc61-d1e3106a8412"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-8-n-29",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".menu_legal",
                                        selectorGuids: ["5717102d-7271-7c57-dc61-d1e3106a8412"]
                                    },
                                    yValue: -2,
                                    xUnit: "PX",
                                    yUnit: "rem",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-8-n-4",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        useEventTarget: "SIBLINGS",
                                        selector: ".menu",
                                        selectorGuids: ["84b99882-9a9a-b949-7134-ed7f998d5568"]
                                    },
                                    value: "block"
                                }
                            }, {
                                id: "a-8-n-6",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        useEventTarget: "SIBLINGS",
                                        selector: ".menu_bg-blur",
                                        selectorGuids: ["f2a9bf32-c8ce-87f4-6647-5339de9a9090"]
                                    },
                                    value: "block"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-8-n-8",
                                actionTypeId: "STYLE_FILTER",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 250,
                                    target: {
                                        useEventTarget: "SIBLINGS",
                                        selector: ".menu_bg-blur",
                                        selectorGuids: ["f2a9bf32-c8ce-87f4-6647-5339de9a9090"]
                                    },
                                    filters: [{
                                        type: "blur",
                                        filterId: "6f61",
                                        value: 20,
                                        unit: "px"
                                    }]
                                }
                            }, {
                                id: "a-8-n-10",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "outCubic",
                                    duration: 500,
                                    target: {
                                        selector: ".menu_in",
                                        selectorGuids: ["b4dc0b97-fae5-608e-814a-52a9c8e87e44"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }, {
                                id: "a-8-n-14",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 200,
                                    target: {
                                        selector: ".menu_in",
                                        selectorGuids: ["b4dc0b97-fae5-608e-814a-52a9c8e87e44"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-8-n-12",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 300,
                                    easing: "ease",
                                    duration: 350,
                                    target: {
                                        selector: ".menu_links",
                                        selectorGuids: ["511df262-0109-546b-8791-6bd89a434892"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-8-n-24",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 300,
                                    easing: "outCubic",
                                    duration: 700,
                                    target: {
                                        selector: ".menu_links",
                                        selectorGuids: ["511df262-0109-546b-8791-6bd89a434892"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "rem",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-8-n-19",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 400,
                                    easing: "ease",
                                    duration: 350,
                                    target: {
                                        selector: ".menu_social-wrap",
                                        selectorGuids: ["74f4530e-3713-3aa8-3de6-ba9bef15003f"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-8-n-26",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 400,
                                    easing: "outCubic",
                                    duration: 700,
                                    target: {
                                        selector: ".menu_social-wrap",
                                        selectorGuids: ["74f4530e-3713-3aa8-3de6-ba9bef15003f"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "rem",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-8-n-20",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 500,
                                    easing: "ease",
                                    duration: 350,
                                    target: {
                                        selector: ".menu_contact",
                                        selectorGuids: ["4f6ea97f-47fd-7bb8-9495-b7e945a7a807"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-8-n-28",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 500,
                                    easing: "outCubic",
                                    duration: 700,
                                    target: {
                                        selector: ".menu_contact",
                                        selectorGuids: ["4f6ea97f-47fd-7bb8-9495-b7e945a7a807"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "rem",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-8-n-21",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 600,
                                    easing: "ease",
                                    duration: 350,
                                    target: {
                                        selector: ".menu_legal",
                                        selectorGuids: ["5717102d-7271-7c57-dc61-d1e3106a8412"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-8-n-30",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 600,
                                    easing: "outCubic",
                                    duration: 700,
                                    target: {
                                        selector: ".menu_legal",
                                        selectorGuids: ["5717102d-7271-7c57-dc61-d1e3106a8412"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "rem",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-8-n-22",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 700,
                                    easing: "ease",
                                    duration: 350,
                                    target: {
                                        selector: ".menu_close",
                                        selectorGuids: ["5616c434-c402-2ea7-e1d8-de08a18c526f"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x190e5417b09
                    },
                    "a-20": {
                        id: "a-20",
                        title: "Navbar - Close menu",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-20-n-20",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 350,
                                    target: {
                                        selector: ".menu_links",
                                        selectorGuids: ["511df262-0109-546b-8791-6bd89a434892"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-20-n-22",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 350,
                                    target: {
                                        selector: ".menu_social-wrap",
                                        selectorGuids: ["74f4530e-3713-3aa8-3de6-ba9bef15003f"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-20-n-24",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 350,
                                    target: {
                                        selector: ".menu_contact",
                                        selectorGuids: ["4f6ea97f-47fd-7bb8-9495-b7e945a7a807"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-20-n-26",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 350,
                                    target: {
                                        selector: ".menu_legal",
                                        selectorGuids: ["5717102d-7271-7c57-dc61-d1e3106a8412"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-20-n-28",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 350,
                                    target: {
                                        selector: ".menu_close",
                                        selectorGuids: ["5616c434-c402-2ea7-e1d8-de08a18c526f"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-20-n-18",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "inQuad",
                                    duration: 500,
                                    target: {
                                        selector: ".menu_in",
                                        selectorGuids: ["b4dc0b97-fae5-608e-814a-52a9c8e87e44"]
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    locked: !0
                                }
                            }, {
                                id: "a-20-n-19",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 300,
                                    easing: "ease",
                                    duration: 300,
                                    target: {
                                        selector: ".menu_in",
                                        selectorGuids: ["b4dc0b97-fae5-608e-814a-52a9c8e87e44"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-20-n-29",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 300,
                                    easing: "ease",
                                    duration: 200,
                                    target: {
                                        selector: ".menu_bg-blur",
                                        selectorGuids: ["f2a9bf32-c8ce-87f4-6647-5339de9a9090"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-20-n-15",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".menu",
                                        selectorGuids: ["84b99882-9a9a-b949-7134-ed7f998d5568"]
                                    },
                                    value: "none"
                                }
                            }, {
                                id: "a-20-n-16",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".menu_bg-blur",
                                        selectorGuids: ["f2a9bf32-c8ce-87f4-6647-5339de9a9090"]
                                    },
                                    value: "none"
                                }
                            }, {
                                id: "a-20-n-17",
                                actionTypeId: "STYLE_FILTER",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 0,
                                    target: {
                                        selector: ".menu_bg-blur",
                                        selectorGuids: ["f2a9bf32-c8ce-87f4-6647-5339de9a9090"]
                                    },
                                    filters: [{
                                        type: "blur",
                                        filterId: "6f61",
                                        value: 0,
                                        unit: "px"
                                    }]
                                }
                            }, {
                                id: "a-20-n-30",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 0,
                                    target: {
                                        selector: ".menu_bg-blur",
                                        selectorGuids: ["f2a9bf32-c8ce-87f4-6647-5339de9a9090"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-20-n-21",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outCubic",
                                    duration: 0,
                                    target: {
                                        selector: ".menu_links",
                                        selectorGuids: ["511df262-0109-546b-8791-6bd89a434892"]
                                    },
                                    yValue: -2,
                                    xUnit: "PX",
                                    yUnit: "rem",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-20-n-23",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outCubic",
                                    duration: 0,
                                    target: {
                                        selector: ".menu_social-wrap",
                                        selectorGuids: ["74f4530e-3713-3aa8-3de6-ba9bef15003f"]
                                    },
                                    yValue: -2,
                                    xUnit: "PX",
                                    yUnit: "rem",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-20-n-25",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outCubic",
                                    duration: 0,
                                    target: {
                                        selector: ".menu_contact",
                                        selectorGuids: ["4f6ea97f-47fd-7bb8-9495-b7e945a7a807"]
                                    },
                                    yValue: -2,
                                    xUnit: "PX",
                                    yUnit: "rem",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-20-n-27",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outCubic",
                                    duration: 0,
                                    target: {
                                        selector: ".menu_legal",
                                        selectorGuids: ["5717102d-7271-7c57-dc61-d1e3106a8412"]
                                    },
                                    yValue: -2,
                                    xUnit: "PX",
                                    yUnit: "rem",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x190e5417b09
                    },
                    "a-21": {
                        id: "a-21",
                        title: "HOME - Contact Mark dot",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-21-n",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".home-header_contact-dot-scale",
                                        selectorGuids: ["30d18561-21a0-174b-ef3a-91553be2f769"]
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    locked: !0
                                }
                            }, {
                                id: "a-21-n-5",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".home-header_contact-dot-scale",
                                        selectorGuids: ["30d18561-21a0-174b-ef3a-91553be2f769"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-21-n-3",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".home-header_contact-dot-scale",
                                        selectorGuids: ["30d18561-21a0-174b-ef3a-91553be2f769"]
                                    },
                                    value: "block"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-21-n-2",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 750,
                                    easing: "outCubic",
                                    duration: 1e3,
                                    target: {
                                        selector: ".home-header_contact-dot-scale",
                                        selectorGuids: ["30d18561-21a0-174b-ef3a-91553be2f769"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }, {
                                id: "a-21-n-6",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 750,
                                    easing: "outCubic",
                                    duration: 1e3,
                                    target: {
                                        selector: ".home-header_contact-dot-scale",
                                        selectorGuids: ["30d18561-21a0-174b-ef3a-91553be2f769"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-21-n-4",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".home-header_contact-dot-scale",
                                        selectorGuids: ["30d18561-21a0-174b-ef3a-91553be2f769"]
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    locked: !0
                                }
                            }, {
                                id: "a-21-n-7",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".home-header_contact-dot-scale",
                                        selectorGuids: ["30d18561-21a0-174b-ef3a-91553be2f769"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x19756f720a4
                    },
                    "a-22": {
                        id: "a-22",
                        title: "HOME - Contact Mark hover in",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-22-n",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".home-header_contact-texts",
                                        selectorGuids: ["2677d5e8-2051-88fd-4db6-ab266d09f9df"]
                                    },
                                    widthValue: 100,
                                    widthUnit: "%",
                                    heightUnit: "AUTO",
                                    locked: !1
                                }
                            }, {
                                id: "a-22-n-3",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".home-header_contact-texts",
                                        selectorGuids: ["2677d5e8-2051-88fd-4db6-ab266d09f9df"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-22-n-5",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".home-header_infos",
                                        selectorGuids: ["012e8d05-2cc0-4a75-2abc-4094cb071fe2"]
                                    },
                                    widthValue: 100,
                                    heightValue: 0,
                                    widthUnit: "%",
                                    heightUnit: "px",
                                    locked: !1
                                }
                            }, {
                                id: "a-22-n-7",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".home-header_infos",
                                        selectorGuids: ["012e8d05-2cc0-4a75-2abc-4094cb071fe2"]
                                    },
                                    value: "none"
                                }
                            }, {
                                id: "a-22-n-9",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".home-header_infos",
                                        selectorGuids: ["012e8d05-2cc0-4a75-2abc-4094cb071fe2"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-22-n-8",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".home-header_infos",
                                        selectorGuids: ["012e8d05-2cc0-4a75-2abc-4094cb071fe2"]
                                    },
                                    value: "block"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-22-n-2",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "outCubic",
                                    duration: 380,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".home-header_contact-texts",
                                        selectorGuids: ["2677d5e8-2051-88fd-4db6-ab266d09f9df"]
                                    },
                                    widthValue: 100,
                                    heightValue: 0,
                                    widthUnit: "%",
                                    heightUnit: "px",
                                    locked: !1
                                }
                            }, {
                                id: "a-22-n-4",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "outCubic",
                                    duration: 380,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".home-header_contact-texts",
                                        selectorGuids: ["2677d5e8-2051-88fd-4db6-ab266d09f9df"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-22-n-6",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "outCubic",
                                    duration: 380,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".home-header_infos",
                                        selectorGuids: ["012e8d05-2cc0-4a75-2abc-4094cb071fe2"]
                                    },
                                    widthValue: 100,
                                    widthUnit: "%",
                                    heightUnit: "AUTO",
                                    locked: !1
                                }
                            }, {
                                id: "a-22-n-10",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "outCubic",
                                    duration: 380,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".home-header_infos",
                                        selectorGuids: ["012e8d05-2cc0-4a75-2abc-4094cb071fe2"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x19756fae02d
                    },
                    "a-23": {
                        id: "a-23",
                        title: "HOME - Contact Mark hover out",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-23-n-7",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "outCubic",
                                    duration: 280,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".home-header_contact-texts",
                                        selectorGuids: ["2677d5e8-2051-88fd-4db6-ab266d09f9df"]
                                    },
                                    widthValue: 100,
                                    widthUnit: "%",
                                    heightUnit: "AUTO",
                                    locked: !1
                                }
                            }, {
                                id: "a-23-n-8",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "outCubic",
                                    duration: 280,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".home-header_contact-texts",
                                        selectorGuids: ["2677d5e8-2051-88fd-4db6-ab266d09f9df"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-23-n-9",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "outCubic",
                                    duration: 280,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".home-header_infos",
                                        selectorGuids: ["012e8d05-2cc0-4a75-2abc-4094cb071fe2"]
                                    },
                                    widthValue: 100,
                                    heightValue: 0,
                                    widthUnit: "%",
                                    heightUnit: "px",
                                    locked: !1
                                }
                            }, {
                                id: "a-23-n-10",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "outCubic",
                                    duration: 280,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".home-header_infos",
                                        selectorGuids: ["012e8d05-2cc0-4a75-2abc-4094cb071fe2"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-23-n-6",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".home-header_infos",
                                        selectorGuids: ["012e8d05-2cc0-4a75-2abc-4094cb071fe2"]
                                    },
                                    value: "none"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x19756fae02d
                    },
                    "a-24": {
                        id: "a-24",
                        title: "Navbar link hover in",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-24-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".navbar_link-text._1",
                                        selectorGuids: ["198b96f2-8155-223c-e7a8-a05d8da965e1", "91983819-92c7-8102-29e9-ab9654bc2425"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-24-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".navbar_link-text._2",
                                        selectorGuids: ["198b96f2-8155-223c-e7a8-a05d8da965e1", "7d58d73b-d3e4-e35e-f0d4-83c2da849663"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-24-n-3",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".navbar_link-dot",
                                        selectorGuids: ["154cff7f-e51a-63bc-8139-9a246fd39128"]
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    locked: !0
                                }
                            }, {
                                id: "a-24-n-4",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".navbar_link-dot",
                                        selectorGuids: ["154cff7f-e51a-63bc-8139-9a246fd39128"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-24-n-5",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outCubic",
                                    duration: 350,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".navbar_link-text._1",
                                        selectorGuids: ["198b96f2-8155-223c-e7a8-a05d8da965e1", "91983819-92c7-8102-29e9-ab9654bc2425"]
                                    },
                                    yValue: -100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-24-n-6",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "outCubic",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".navbar_link-dot",
                                        selectorGuids: ["154cff7f-e51a-63bc-8139-9a246fd39128"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }, {
                                id: "a-24-n-7",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".navbar_link-dot",
                                        selectorGuids: ["154cff7f-e51a-63bc-8139-9a246fd39128"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-24-n-8",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 50,
                                    easing: "outCubic",
                                    duration: 350,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".navbar_link-text._2",
                                        selectorGuids: ["198b96f2-8155-223c-e7a8-a05d8da965e1", "7d58d73b-d3e4-e35e-f0d4-83c2da849663"]
                                    },
                                    yValue: -100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x1948f63f1bd
                    },
                    "a-25": {
                        id: "a-25",
                        title: "Navbar link hover out",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-25-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outCubic",
                                    duration: 350,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".navbar_link-text._1",
                                        selectorGuids: ["198b96f2-8155-223c-e7a8-a05d8da965e1", "91983819-92c7-8102-29e9-ab9654bc2425"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-25-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outCubic",
                                    duration: 350,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".navbar_link-text._2",
                                        selectorGuids: ["198b96f2-8155-223c-e7a8-a05d8da965e1", "7d58d73b-d3e4-e35e-f0d4-83c2da849663"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-25-n-3",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 200,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".navbar_link-dot",
                                        selectorGuids: ["154cff7f-e51a-63bc-8139-9a246fd39128"]
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    locked: !0
                                }
                            }, {
                                id: "a-25-n-4",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 200,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".navbar_link-dot",
                                        selectorGuids: ["154cff7f-e51a-63bc-8139-9a246fd39128"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x1948f63f1bd
                    },
                    "a-26": {
                        id: "a-26",
                        title: "Brands marquee",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-26-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".brands_list",
                                        selectorGuids: ["fc74299b-d1e7-86c0-0488-280550a4dadc"]
                                    },
                                    xValue: 0,
                                    xUnit: "%",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-26-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 5e4,
                                    target: {
                                        selector: ".brands_list",
                                        selectorGuids: ["fc74299b-d1e7-86c0-0488-280550a4dadc"]
                                    },
                                    xValue: -100,
                                    xUnit: "%",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-26-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".brands_list",
                                        selectorGuids: ["fc74299b-d1e7-86c0-0488-280550a4dadc"]
                                    },
                                    xValue: 0,
                                    xUnit: "%",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x19668a15e80
                    },
                    "a-31": {
                        id: "a-31",
                        title: "Work list - Item scroll",
                        continuousParameterGroups: [{
                            id: "a-31-p",
                            type: "SCROLL_PROGRESS",
                            parameterLabel: "Scroll",
                            continuousActionGroups: [{
                                keyframe: 0,
                                actionItems: [{
                                    id: "a-31-n",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "outCubic",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".work-list_link",
                                            selectorGuids: ["dc3ae6ee-7b1b-8a20-b5f1-d20adf702f8d"]
                                        },
                                        yValue: 100,
                                        xUnit: "PX",
                                        yUnit: "vh",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-31-n-2",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".work-list_link",
                                            selectorGuids: ["dc3ae6ee-7b1b-8a20-b5f1-d20adf702f8d"]
                                        },
                                        xValue: 100,
                                        xUnit: "deg",
                                        yUnit: "DEG",
                                        zUnit: "DEG"
                                    }
                                }, {
                                    id: "a-31-n-3",
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".work-list_link",
                                            selectorGuids: ["dc3ae6ee-7b1b-8a20-b5f1-d20adf702f8d"]
                                        },
                                        xValue: 1.1,
                                        yValue: 1.1,
                                        locked: !0
                                    }
                                }]
                            }, {
                                keyframe: 50,
                                actionItems: [{
                                    id: "a-31-n-4",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".work-list_link",
                                            selectorGuids: ["dc3ae6ee-7b1b-8a20-b5f1-d20adf702f8d"]
                                        },
                                        yValue: 0,
                                        xUnit: "PX",
                                        yUnit: "vh",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-31-n-5",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".work-list_link",
                                            selectorGuids: ["dc3ae6ee-7b1b-8a20-b5f1-d20adf702f8d"]
                                        },
                                        xValue: 0,
                                        xUnit: "deg",
                                        yUnit: "DEG",
                                        zUnit: "DEG"
                                    }
                                }, {
                                    id: "a-31-n-6",
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".work-list_link",
                                            selectorGuids: ["dc3ae6ee-7b1b-8a20-b5f1-d20adf702f8d"]
                                        },
                                        xValue: 1,
                                        yValue: 1,
                                        locked: !0
                                    }
                                }]
                            }, {
                                keyframe: 100,
                                actionItems: [{
                                    id: "a-31-n-7",
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".work-list_link",
                                            selectorGuids: ["dc3ae6ee-7b1b-8a20-b5f1-d20adf702f8d"]
                                        },
                                        xValue: .9,
                                        yValue: .9,
                                        locked: !0
                                    }
                                }]
                            }]
                        }],
                        createdOn: 0x196ef690828
                    },
                    "a-32": {
                        id: "a-32",
                        title: "Pill hover in",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-32-n",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".hover_wrap",
                                        selectorGuids: ["ccb7d46e-e1e8-da16-9e8d-7a62a61a3d00"]
                                    },
                                    value: "flex"
                                }
                            }, {
                                id: "a-32-n-2",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".hover_text-wrap",
                                        selectorGuids: ["ccb7d46e-e1e8-da16-9e8d-7a62a61a3d02"]
                                    },
                                    widthValue: 0,
                                    widthUnit: "px",
                                    heightUnit: "PX",
                                    locked: !1
                                }
                            }, {
                                id: "a-32-n-3",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".hover_pill",
                                        selectorGuids: ["ccb7d46e-e1e8-da16-9e8d-7a62a61a3d01"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-32-n-4",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".hover_text",
                                        selectorGuids: ["ccb7d46e-e1e8-da16-9e8d-7a62a61a3d03"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-32-n-5",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "outCubic",
                                    duration: 500,
                                    target: {
                                        selector: ".hover_text-wrap",
                                        selectorGuids: ["ccb7d46e-e1e8-da16-9e8d-7a62a61a3d02"]
                                    },
                                    widthUnit: "AUTO",
                                    heightUnit: "PX",
                                    locked: !1
                                }
                            }, {
                                id: "a-32-n-6",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 200,
                                    target: {
                                        selector: ".hover_pill",
                                        selectorGuids: ["ccb7d46e-e1e8-da16-9e8d-7a62a61a3d01"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-32-n-7",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 500,
                                    target: {
                                        selector: ".hover_text",
                                        selectorGuids: ["ccb7d46e-e1e8-da16-9e8d-7a62a61a3d03"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x194f5d3279e
                    },
                    "a-33": {
                        id: "a-33",
                        title: "Pill hover out",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-33-n",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "outCubic",
                                    duration: 500,
                                    target: {
                                        selector: ".hover_text-wrap",
                                        selectorGuids: ["ccb7d46e-e1e8-da16-9e8d-7a62a61a3d02"]
                                    },
                                    widthValue: 0,
                                    widthUnit: "px",
                                    heightUnit: "PX",
                                    locked: !1
                                }
                            }, {
                                id: "a-33-n-2",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 500,
                                    target: {
                                        selector: ".hover_text",
                                        selectorGuids: ["ccb7d46e-e1e8-da16-9e8d-7a62a61a3d03"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-33-n-3",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 200,
                                    target: {
                                        selector: ".hover_pill",
                                        selectorGuids: ["ccb7d46e-e1e8-da16-9e8d-7a62a61a3d01"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x194f5d3279e
                    },
                    "a-34": {
                        id: "a-34",
                        title: "Pill follow mouse",
                        continuousParameterGroups: [{
                            id: "a-34-p",
                            type: "MOUSE_X",
                            parameterLabel: "Mouse X",
                            continuousActionGroups: [{
                                keyframe: 0,
                                actionItems: [{
                                    id: "a-34-n",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".hover_pill",
                                            selectorGuids: ["ccb7d46e-e1e8-da16-9e8d-7a62a61a3d01"]
                                        },
                                        xValue: 0,
                                        xUnit: "vw",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }]
                            }, {
                                keyframe: 100,
                                actionItems: [{
                                    id: "a-34-n-2",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".hover_pill",
                                            selectorGuids: ["ccb7d46e-e1e8-da16-9e8d-7a62a61a3d01"]
                                        },
                                        xValue: 100,
                                        xUnit: "vw",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }]
                            }]
                        }, {
                            id: "a-34-p-2",
                            type: "MOUSE_Y",
                            parameterLabel: "Mouse Y",
                            continuousActionGroups: [{
                                keyframe: 0,
                                actionItems: [{
                                    id: "a-34-n-3",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".hover_pill",
                                            selectorGuids: ["ccb7d46e-e1e8-da16-9e8d-7a62a61a3d01"]
                                        },
                                        xValue: null,
                                        yValue: 0,
                                        xUnit: "vw",
                                        yUnit: "vh",
                                        zUnit: "PX"
                                    }
                                }]
                            }, {
                                keyframe: 100,
                                actionItems: [{
                                    id: "a-34-n-4",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".hover_pill",
                                            selectorGuids: ["ccb7d46e-e1e8-da16-9e8d-7a62a61a3d01"]
                                        },
                                        xValue: null,
                                        yValue: 100,
                                        xUnit: "vw",
                                        yUnit: "vh",
                                        zUnit: "PX"
                                    }
                                }]
                            }]
                        }],
                        createdOn: 0x18fe92bbab5
                    },
                    "a-35": {
                        id: "a-35",
                        title: "HOME - Team rotate 1",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-35-n",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".home-grid_circle-2",
                                        selectorGuids: ["e2c6d071-6ad7-65f6-762f-ee64acd4124b"]
                                    },
                                    zValue: 0,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }, {
                                id: "a-35-n-4",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".home-grid_member-in",
                                        selectorGuids: ["cab3c627-b698-14e3-921e-e0938dde898c"]
                                    },
                                    zValue: 0,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-35-n-3",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".home-grid_circle-2",
                                        selectorGuids: ["e2c6d071-6ad7-65f6-762f-ee64acd4124b"]
                                    },
                                    zValue: 0,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }, {
                                id: "a-35-n-5",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".home-grid_member-in",
                                        selectorGuids: ["cab3c627-b698-14e3-921e-e0938dde898c"]
                                    },
                                    zValue: 0,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-35-n-2",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 4e4,
                                    target: {
                                        selector: ".home-grid_circle-2",
                                        selectorGuids: ["e2c6d071-6ad7-65f6-762f-ee64acd4124b"]
                                    },
                                    zValue: -360,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }, {
                                id: "a-35-n-6",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 4e4,
                                    target: {
                                        selector: ".home-grid_member-in",
                                        selectorGuids: ["cab3c627-b698-14e3-921e-e0938dde898c"]
                                    },
                                    zValue: 360,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x1975b02e4b1
                    },
                    "a-36": {
                        id: "a-36",
                        title: "HOME - Team rotate 2",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-36-n",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".home-grid_circle-1",
                                        selectorGuids: ["8b86218f-ec52-34ff-ad92-935db14c3e68"]
                                    },
                                    zValue: 0,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }, {
                                id: "a-36-n-2",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".home-grid_member",
                                        selectorGuids: ["640a0169-14fe-7e01-a1fa-98b0b53d86d1"]
                                    },
                                    zValue: 0,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-36-n-3",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".home-grid_circle-1",
                                        selectorGuids: ["8b86218f-ec52-34ff-ad92-935db14c3e68"]
                                    },
                                    zValue: 0,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }, {
                                id: "a-36-n-4",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".home-grid_member",
                                        selectorGuids: ["640a0169-14fe-7e01-a1fa-98b0b53d86d1"]
                                    },
                                    zValue: 0,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-36-n-5",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 1e5,
                                    target: {
                                        selector: ".home-grid_circle-1",
                                        selectorGuids: ["8b86218f-ec52-34ff-ad92-935db14c3e68"]
                                    },
                                    zValue: 360,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }, {
                                id: "a-36-n-6",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 1e5,
                                    target: {
                                        selector: ".home-grid_member",
                                        selectorGuids: ["640a0169-14fe-7e01-a1fa-98b0b53d86d1"]
                                    },
                                    zValue: -360,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x1975b02e4b1
                    },
                    "a-37": {
                        id: "a-37",
                        title: "HOME - Chat animation",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-37-n",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".chat_message._2",
                                        selectorGuids: ["46102801-a633-3c33-b132-4bd6adcc42b3", "a4138a92-371b-fa66-60a5-4c0ab3d9eedd"]
                                    },
                                    widthValue: 0,
                                    heightValue: 0,
                                    widthUnit: "px",
                                    heightUnit: "px",
                                    locked: !1
                                }
                            }, {
                                id: "a-37-n-2",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".chat_spacing._1",
                                        selectorGuids: ["9d74a10d-6175-b6b2-f0db-c41e5a2f322d", "46f7bf44-f6e1-2429-8521-f639330ec3fa"]
                                    },
                                    widthValue: 100,
                                    heightValue: 0,
                                    widthUnit: "%",
                                    heightUnit: "px",
                                    locked: !1
                                }
                            }, {
                                id: "a-37-n-3",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".chat_message._3",
                                        selectorGuids: ["46102801-a633-3c33-b132-4bd6adcc42b3", "e60c24fb-9ccb-6f6a-b6ff-854e0db8f621"]
                                    },
                                    widthValue: 0,
                                    heightValue: 0,
                                    widthUnit: "px",
                                    heightUnit: "px",
                                    locked: !1
                                }
                            }, {
                                id: "a-37-n-4",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".chat_message._4",
                                        selectorGuids: ["46102801-a633-3c33-b132-4bd6adcc42b3", "91afb429-dd59-bacc-f770-8efa5a17e19e"]
                                    },
                                    widthValue: 0,
                                    heightValue: 0,
                                    widthUnit: "px",
                                    heightUnit: "px",
                                    locked: !1
                                }
                            }, {
                                id: "a-37-n-5",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".chat_spacing._3",
                                        selectorGuids: ["9d74a10d-6175-b6b2-f0db-c41e5a2f322d", "2acfd195-34ce-b049-54bd-575fd15a66cd"]
                                    },
                                    widthValue: 100,
                                    heightValue: 0,
                                    widthUnit: "%",
                                    heightUnit: "px",
                                    locked: !1
                                }
                            }, {
                                id: "a-37-n-6",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".chat_message._5",
                                        selectorGuids: ["46102801-a633-3c33-b132-4bd6adcc42b3", "5710c628-250d-805a-2de6-5f968968c037"]
                                    },
                                    widthValue: 0,
                                    heightValue: 0,
                                    widthUnit: "px",
                                    heightUnit: "px",
                                    locked: !1
                                }
                            }, {
                                id: "a-37-n-7",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".home-grid_chat-group._2",
                                        selectorGuids: ["ac2d8651-0b0d-3fe5-37ea-20fb687b097c", "36ce1a83-b118-2899-ee56-9a1b34fe89ac"]
                                    },
                                    heightValue: 0,
                                    widthUnit: "PX",
                                    heightUnit: "px",
                                    locked: !1
                                }
                            }, {
                                id: "a-37-n-8",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".chat_pic._2",
                                        selectorGuids: ["7b28baf4-b28d-969a-1153-5e8a928311a2", "f47ba4cc-b31c-84b7-d50d-e41e3bb3fc28"]
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    locked: !0
                                }
                            }, {
                                id: "a-37-n-9",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".chat_spacing._2",
                                        selectorGuids: ["9d74a10d-6175-b6b2-f0db-c41e5a2f322d", "5aa069bd-d88c-02c0-b114-158fcc273ea3"]
                                    },
                                    widthValue: 100,
                                    heightValue: 0,
                                    widthUnit: "%",
                                    heightUnit: "px",
                                    locked: !1
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-37-n-12",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 1e3,
                                    easing: "outCubic",
                                    duration: 250,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".chat_message._2",
                                        selectorGuids: ["46102801-a633-3c33-b132-4bd6adcc42b3", "a4138a92-371b-fa66-60a5-4c0ab3d9eedd"]
                                    },
                                    widthUnit: "AUTO",
                                    heightUnit: "AUTO",
                                    locked: !1
                                }
                            }, {
                                id: "a-37-n-13",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 1e3,
                                    easing: "ease",
                                    duration: 150,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".chat_spacing._1",
                                        selectorGuids: ["9d74a10d-6175-b6b2-f0db-c41e5a2f322d", "46f7bf44-f6e1-2429-8521-f639330ec3fa"]
                                    },
                                    widthValue: 100,
                                    widthUnit: "%",
                                    heightUnit: "AUTO",
                                    locked: !1
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-37-n-14",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 1e3,
                                    easing: "outCubic",
                                    duration: 250,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".chat_message._3",
                                        selectorGuids: ["46102801-a633-3c33-b132-4bd6adcc42b3", "e60c24fb-9ccb-6f6a-b6ff-854e0db8f621"]
                                    },
                                    widthUnit: "AUTO",
                                    heightUnit: "AUTO",
                                    locked: !1
                                }
                            }, {
                                id: "a-37-n-15",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 1e3,
                                    easing: "ease",
                                    duration: 150,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".chat_spacing._2",
                                        selectorGuids: ["9d74a10d-6175-b6b2-f0db-c41e5a2f322d", "5aa069bd-d88c-02c0-b114-158fcc273ea3"]
                                    },
                                    widthValue: 100,
                                    widthUnit: "%",
                                    heightUnit: "AUTO",
                                    locked: !1
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-37-n-16",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 1500,
                                    easing: "outCubic",
                                    duration: 250,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".home-grid_chat-group._2",
                                        selectorGuids: ["ac2d8651-0b0d-3fe5-37ea-20fb687b097c", "36ce1a83-b118-2899-ee56-9a1b34fe89ac"]
                                    },
                                    widthUnit: "AUTO",
                                    heightUnit: "AUTO",
                                    locked: !1
                                }
                            }, {
                                id: "a-37-n-17",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 1500,
                                    easing: "outCubic",
                                    duration: 250,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".chat_pic._2",
                                        selectorGuids: ["7b28baf4-b28d-969a-1153-5e8a928311a2", "f47ba4cc-b31c-84b7-d50d-e41e3bb3fc28"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }, {
                                id: "a-37-n-18",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 1500,
                                    easing: "outCubic",
                                    duration: 250,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".chat_message._4",
                                        selectorGuids: ["46102801-a633-3c33-b132-4bd6adcc42b3", "91afb429-dd59-bacc-f770-8efa5a17e19e"]
                                    },
                                    widthUnit: "AUTO",
                                    heightUnit: "AUTO",
                                    locked: !1
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-37-n-19",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 1e3,
                                    easing: "outCubic",
                                    duration: 250,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".chat_message._5",
                                        selectorGuids: ["46102801-a633-3c33-b132-4bd6adcc42b3", "5710c628-250d-805a-2de6-5f968968c037"]
                                    },
                                    widthUnit: "AUTO",
                                    heightUnit: "AUTO",
                                    locked: !1
                                }
                            }, {
                                id: "a-37-n-20",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 1e3,
                                    easing: "ease",
                                    duration: 150,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".chat_spacing._3",
                                        selectorGuids: ["9d74a10d-6175-b6b2-f0db-c41e5a2f322d", "2acfd195-34ce-b049-54bd-575fd15a66cd"]
                                    },
                                    widthValue: 100,
                                    widthUnit: "%",
                                    heightUnit: "AUTO",
                                    locked: !1
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-37-n-21",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 3e3,
                                    easing: "outCubic",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".chat_message._2",
                                        selectorGuids: ["46102801-a633-3c33-b132-4bd6adcc42b3", "a4138a92-371b-fa66-60a5-4c0ab3d9eedd"]
                                    },
                                    widthValue: 0,
                                    heightValue: 0,
                                    widthUnit: "px",
                                    heightUnit: "px",
                                    locked: !1
                                }
                            }, {
                                id: "a-37-n-29",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 3e3,
                                    easing: "outCubic",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".chat_spacing._2",
                                        selectorGuids: ["9d74a10d-6175-b6b2-f0db-c41e5a2f322d", "5aa069bd-d88c-02c0-b114-158fcc273ea3"]
                                    },
                                    widthValue: 100,
                                    heightValue: 0,
                                    widthUnit: "%",
                                    heightUnit: "px",
                                    locked: !1
                                }
                            }, {
                                id: "a-37-n-28",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 3e3,
                                    easing: "outCubic",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".chat_pic._2",
                                        selectorGuids: ["7b28baf4-b28d-969a-1153-5e8a928311a2", "f47ba4cc-b31c-84b7-d50d-e41e3bb3fc28"]
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    locked: !0
                                }
                            }, {
                                id: "a-37-n-27",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 3e3,
                                    easing: "outCubic",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".home-grid_chat-group._2",
                                        selectorGuids: ["ac2d8651-0b0d-3fe5-37ea-20fb687b097c", "36ce1a83-b118-2899-ee56-9a1b34fe89ac"]
                                    },
                                    heightValue: 0,
                                    widthUnit: "PX",
                                    heightUnit: "px",
                                    locked: !1
                                }
                            }, {
                                id: "a-37-n-26",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 3e3,
                                    easing: "outCubic",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".chat_message._5",
                                        selectorGuids: ["46102801-a633-3c33-b132-4bd6adcc42b3", "5710c628-250d-805a-2de6-5f968968c037"]
                                    },
                                    widthValue: 0,
                                    heightValue: 0,
                                    widthUnit: "px",
                                    heightUnit: "px",
                                    locked: !1
                                }
                            }, {
                                id: "a-37-n-25",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 3e3,
                                    easing: "outCubic",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".chat_spacing._3",
                                        selectorGuids: ["9d74a10d-6175-b6b2-f0db-c41e5a2f322d", "2acfd195-34ce-b049-54bd-575fd15a66cd"]
                                    },
                                    widthValue: 100,
                                    heightValue: 0,
                                    widthUnit: "%",
                                    heightUnit: "px",
                                    locked: !1
                                }
                            }, {
                                id: "a-37-n-24",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 3e3,
                                    easing: "outCubic",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".chat_message._4",
                                        selectorGuids: ["46102801-a633-3c33-b132-4bd6adcc42b3", "91afb429-dd59-bacc-f770-8efa5a17e19e"]
                                    },
                                    widthValue: 0,
                                    heightValue: 0,
                                    widthUnit: "px",
                                    heightUnit: "px",
                                    locked: !1
                                }
                            }, {
                                id: "a-37-n-23",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 3e3,
                                    easing: "outCubic",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".chat_message._3",
                                        selectorGuids: ["46102801-a633-3c33-b132-4bd6adcc42b3", "e60c24fb-9ccb-6f6a-b6ff-854e0db8f621"]
                                    },
                                    widthValue: 0,
                                    heightValue: 0,
                                    widthUnit: "px",
                                    heightUnit: "px",
                                    locked: !1
                                }
                            }, {
                                id: "a-37-n-22",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 3e3,
                                    easing: "outCubic",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".chat_spacing._1",
                                        selectorGuids: ["9d74a10d-6175-b6b2-f0db-c41e5a2f322d", "46f7bf44-f6e1-2429-8521-f639330ec3fa"]
                                    },
                                    widthValue: 100,
                                    heightValue: 0,
                                    widthUnit: "%",
                                    heightUnit: "px",
                                    locked: !1
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x1975b83fa8e
                    },
                    "a-39": {
                        id: "a-39",
                        title: "Line entering",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-39-n",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "682dd0e70b05db56823e3e33|011d5a31-a376-1edc-168e-1ec54175d52e"
                                    },
                                    widthValue: 0,
                                    widthUnit: "%",
                                    heightUnit: "PX",
                                    locked: !1
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-39-n-2",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "outCubic",
                                    duration: 1500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "682dd0e70b05db56823e3e33|011d5a31-a376-1edc-168e-1ec54175d52e"
                                    },
                                    widthValue: 100,
                                    widthUnit: "%",
                                    heightUnit: "PX",
                                    locked: !1
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x196ceddde26
                    },
                    "a-41": {
                        id: "a-41",
                        title: "HOME - Rotate plus",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-41-n",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".home-services_icon",
                                        selectorGuids: ["95ea58ea-7883-d7f0-06bf-86e88dc4cc61"]
                                    },
                                    zValue: 0,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-41-n-2",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 6e3,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".home-services_icon",
                                        selectorGuids: ["95ea58ea-7883-d7f0-06bf-86e88dc4cc61"]
                                    },
                                    zValue: 360,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x1975bde69ad
                    },
                    "a-45": {
                        id: "a-45",
                        title: "Image scale",
                        continuousParameterGroups: [{
                            id: "a-45-p",
                            type: "SCROLL_PROGRESS",
                            parameterLabel: "Scroll",
                            continuousActionGroups: [{
                                keyframe: 0,
                                actionItems: [{
                                    id: "a-45-n",
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: !0,
                                            id: "67aa66013f0745da082d0472|6805dbcb-052e-4a02-b448-3fe4f31614a8"
                                        },
                                        xValue: 1,
                                        yValue: 1,
                                        locked: !0
                                    }
                                }]
                            }, {
                                keyframe: 100,
                                actionItems: [{
                                    id: "a-45-n-2",
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: !0,
                                            id: "67aa66013f0745da082d0472|6805dbcb-052e-4a02-b448-3fe4f31614a8"
                                        },
                                        xValue: 1.2,
                                        yValue: 1.2,
                                        locked: !0
                                    }
                                }]
                            }]
                        }],
                        createdOn: 0x18f6247af47
                    },
                    "a-44": {
                        id: "a-44",
                        title: "[Button Underline] - Hover in",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-44-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: [.62, .05, .01, .99],
                                    duration: 750,
                                    target: {},
                                    xValue: 100,
                                    xUnit: "%",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-44-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: [.62, .05, .01, .99],
                                    duration: 0,
                                    target: {},
                                    xValue: -100,
                                    xUnit: "%",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-44-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: [.62, .05, .01, .99],
                                    duration: 750,
                                    target: {},
                                    xValue: 0,
                                    xUnit: "%",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x193300cf07b
                    },
                    "a-46": {
                        id: "a-46",
                        title: "HOME - Showreel scroll",
                        continuousParameterGroups: [{
                            id: "a-46-p",
                            type: "SCROLL_PROGRESS",
                            parameterLabel: "Scroll",
                            continuousActionGroups: [{
                                keyframe: 0,
                                actionItems: [{
                                    id: "a-46-n",
                                    actionTypeId: "STYLE_SIZE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".showreel_lightbox",
                                            selectorGuids: ["aa27e34b-da8a-af07-39cb-5ef69416da1f"]
                                        },
                                        widthValue: 12,
                                        heightValue: 10,
                                        widthUnit: "vw",
                                        heightUnit: "vh",
                                        locked: !1
                                    }
                                }, {
                                    id: "a-46-n-2",
                                    actionTypeId: "PLUGIN_VARIABLE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        value: {
                                            value: 0,
                                            unit: "rem",
                                            size: 1
                                        },
                                        target: {
                                            objectId: "--_animations---animation-border-radius",
                                            useEventTarget: "CHILDREN",
                                            selector: ".showreel_lightbox",
                                            selectorGuids: ["aa27e34b-da8a-af07-39cb-5ef69416da1f"]
                                        }
                                    }
                                }, {
                                    id: "a-46-n-3",
                                    actionTypeId: "PLUGIN_VARIABLE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        value: {
                                            value: 0,
                                            unit: "rem",
                                            size: 1
                                        },
                                        target: {
                                            objectId: "--_animations---animation-padding",
                                            useEventTarget: "CHILDREN",
                                            selector: ".showreel_lightbox",
                                            selectorGuids: ["aa27e34b-da8a-af07-39cb-5ef69416da1f"]
                                        }
                                    }
                                }, {
                                    id: "a-46-n-4",
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".showreel_img",
                                            selectorGuids: ["aa27e34b-da8a-af07-39cb-5ef69416da21"]
                                        },
                                        xValue: 1.4,
                                        yValue: 1.4,
                                        locked: !0
                                    }
                                }]
                            }, {
                                keyframe: 35,
                                actionItems: [{
                                    id: "a-46-n-5",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".showreel_play-wrapper",
                                            selectorGuids: ["493e7e2d-e377-1ac1-2f79-f05dac6fea21"]
                                        },
                                        value: 0,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-46-n-6",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".showreel_play-wrapper",
                                            selectorGuids: ["493e7e2d-e377-1ac1-2f79-f05dac6fea21"]
                                        },
                                        yValue: 1.5,
                                        xUnit: "PX",
                                        yUnit: "rem",
                                        zUnit: "PX"
                                    }
                                }]
                            }, {
                                keyframe: 45,
                                actionItems: [{
                                    id: "a-46-n-7",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".showreel_play-wrapper",
                                            selectorGuids: ["493e7e2d-e377-1ac1-2f79-f05dac6fea21"]
                                        },
                                        value: 1,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-46-n-8",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "outCubic",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".showreel_play-wrapper",
                                            selectorGuids: ["493e7e2d-e377-1ac1-2f79-f05dac6fea21"]
                                        },
                                        yValue: 0,
                                        xUnit: "PX",
                                        yUnit: "rem",
                                        zUnit: "PX"
                                    }
                                }]
                            }, {
                                keyframe: 71,
                                actionItems: [{
                                    id: "a-46-n-9",
                                    actionTypeId: "STYLE_SIZE",
                                    config: {
                                        delay: 0,
                                        easing: "outCubic",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".showreel_lightbox",
                                            selectorGuids: ["aa27e34b-da8a-af07-39cb-5ef69416da1f"]
                                        },
                                        widthValue: 100,
                                        heightValue: 100,
                                        widthUnit: "vw",
                                        heightUnit: "vh",
                                        locked: !1
                                    }
                                }, {
                                    id: "a-46-n-10",
                                    actionTypeId: "PLUGIN_VARIABLE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        value: {
                                            value: 0,
                                            unit: "rem",
                                            size: 2
                                        },
                                        target: {
                                            objectId: "--_animations---animation-border-radius",
                                            useEventTarget: "CHILDREN",
                                            selector: ".showreel_lightbox",
                                            selectorGuids: ["aa27e34b-da8a-af07-39cb-5ef69416da1f"]
                                        }
                                    }
                                }, {
                                    id: "a-46-n-11",
                                    actionTypeId: "PLUGIN_VARIABLE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        value: {
                                            value: 0,
                                            unit: "rem",
                                            size: 1.5
                                        },
                                        target: {
                                            objectId: "--_animations---animation-padding",
                                            useEventTarget: "CHILDREN",
                                            selector: ".showreel_lightbox",
                                            selectorGuids: ["aa27e34b-da8a-af07-39cb-5ef69416da1f"]
                                        }
                                    }
                                }, {
                                    id: "a-46-n-12",
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".showreel_img",
                                            selectorGuids: ["aa27e34b-da8a-af07-39cb-5ef69416da21"]
                                        },
                                        xValue: 1,
                                        yValue: 1,
                                        locked: !0
                                    }
                                }]
                            }]
                        }],
                        createdOn: 0x197753a1794
                    },
                    "a-47": {
                        id: "a-47",
                        title: "HOME - Numbers counter up",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-47-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".number_others._1",
                                        selectorGuids: ["cc81827c-11c7-5245-21ca-b94700681d17", "71ca40d6-e738-2b35-7bf2-f2b4a57a34d0"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-47-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".number_others._2",
                                        selectorGuids: ["cc81827c-11c7-5245-21ca-b94700681d17", "dc6ccbb5-cfa0-966e-dd7a-2c02298c4dec"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-47-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".number_others._3",
                                        selectorGuids: ["cc81827c-11c7-5245-21ca-b94700681d17", "bb37f728-ce6b-6545-9cf9-91b409b06133"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-47-n-4",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".number_others._4",
                                        selectorGuids: ["cc81827c-11c7-5245-21ca-b94700681d17", "b1e92d34-2d1d-6b1c-c64b-8c9c7aadd021"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-47-n-5",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".number_others._5",
                                        selectorGuids: ["cc81827c-11c7-5245-21ca-b94700681d17", "2243f566-3c1f-d8e0-43df-49092b778362"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-47-n-6",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".number_others._6",
                                        selectorGuids: ["cc81827c-11c7-5245-21ca-b94700681d17", "079840b4-fe22-ef53-3439-6b1c96829f4b"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-47-n-7",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".number_others._7",
                                        selectorGuids: ["cc81827c-11c7-5245-21ca-b94700681d17", "1e9568c6-9fbf-9875-8001-528874152cbe"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-47-n-18",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outCubic",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".number_others._1",
                                        selectorGuids: ["cc81827c-11c7-5245-21ca-b94700681d17", "71ca40d6-e738-2b35-7bf2-f2b4a57a34d0"]
                                    },
                                    yValue: 10,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-47-n-9",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 50,
                                    easing: "outCubic",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".number_others._2",
                                        selectorGuids: ["cc81827c-11c7-5245-21ca-b94700681d17", "dc6ccbb5-cfa0-966e-dd7a-2c02298c4dec"]
                                    },
                                    yValue: 5,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-47-n-10",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 100,
                                    easing: "outCubic",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".number_others._3",
                                        selectorGuids: ["cc81827c-11c7-5245-21ca-b94700681d17", "bb37f728-ce6b-6545-9cf9-91b409b06133"]
                                    },
                                    yValue: 2,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-47-n-19",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: [.42, 0, .339, 1.001],
                                    duration: 1500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".number_others._1",
                                        selectorGuids: ["cc81827c-11c7-5245-21ca-b94700681d17", "71ca40d6-e738-2b35-7bf2-f2b4a57a34d0"]
                                    },
                                    yValue: -100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-47-n-12",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 150,
                                    easing: [.42, 0, .339, 1.001],
                                    duration: 1500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".number_others._2",
                                        selectorGuids: ["cc81827c-11c7-5245-21ca-b94700681d17", "dc6ccbb5-cfa0-966e-dd7a-2c02298c4dec"]
                                    },
                                    yValue: -100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-47-n-13",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 300,
                                    easing: [.42, 0, .339, 1.001],
                                    duration: 1800,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".number_others._3",
                                        selectorGuids: ["cc81827c-11c7-5245-21ca-b94700681d17", "bb37f728-ce6b-6545-9cf9-91b409b06133"]
                                    },
                                    yValue: -100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-47-n-14",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 450,
                                    easing: [.42, 0, .339, 1.001],
                                    duration: 1700,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".number_others._4",
                                        selectorGuids: ["cc81827c-11c7-5245-21ca-b94700681d17", "b1e92d34-2d1d-6b1c-c64b-8c9c7aadd021"]
                                    },
                                    yValue: -100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-47-n-15",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 600,
                                    easing: [.42, 0, .339, 1.001],
                                    duration: 1900,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".number_others._5",
                                        selectorGuids: ["cc81827c-11c7-5245-21ca-b94700681d17", "2243f566-3c1f-d8e0-43df-49092b778362"]
                                    },
                                    yValue: -100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-47-n-16",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 750,
                                    easing: [.42, 0, .339, 1.001],
                                    duration: 2100,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".number_others._6",
                                        selectorGuids: ["cc81827c-11c7-5245-21ca-b94700681d17", "079840b4-fe22-ef53-3439-6b1c96829f4b"]
                                    },
                                    yValue: -100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-47-n-17",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 900,
                                    easing: [.42, 0, .339, 1.001],
                                    duration: 2300,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".number_others._7",
                                        selectorGuids: ["cc81827c-11c7-5245-21ca-b94700681d17", "1e9568c6-9fbf-9875-8001-528874152cbe"]
                                    },
                                    yValue: -100,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x18844a77d47
                    },
                    "a-52": {
                        id: "a-52",
                        title: "hover on button",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-52-n",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".button-grad_gradient",
                                        selectorGuids: ["9257ffe6-ed63-ac03-9a6e-ebbc756b144d"]
                                    },
                                    value: .1,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-52-n-2",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "outQuint",
                                    duration: 800,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".button-grad_gradient",
                                        selectorGuids: ["9257ffe6-ed63-ac03-9a6e-ebbc756b144d"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x18085fa7756
                    },
                    "a-53": {
                        id: "a-53",
                        title: "hover off button",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-53-n",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "outQuint",
                                    duration: 800,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".button-grad_gradient",
                                        selectorGuids: ["9257ffe6-ed63-ac03-9a6e-ebbc756b144d"]
                                    },
                                    value: .1,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x18085fa7756
                    },
                    "a-54": {
                        id: "a-54",
                        title: "button ball move 1",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-54-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".button-grad_ball.ball-1",
                                        selectorGuids: ["9257ffe6-ed63-ac03-9a6e-ebbc756b144e", "9257ffe6-ed63-ac03-9a6e-ebbc756b1451"]
                                    },
                                    xValue: 0,
                                    xUnit: "%",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-54-n-2",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".button-grad_ball.ball-1",
                                        selectorGuids: ["9257ffe6-ed63-ac03-9a6e-ebbc756b144e", "9257ffe6-ed63-ac03-9a6e-ebbc756b1451"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-54-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 5e3,
                                    target: {
                                        selector: ".button-grad_ball.ball-1",
                                        selectorGuids: ["9257ffe6-ed63-ac03-9a6e-ebbc756b144e", "9257ffe6-ed63-ac03-9a6e-ebbc756b1451"]
                                    },
                                    xValue: 100,
                                    xUnit: "%",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-54-n-4",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 5e3,
                                    target: {
                                        selector: ".button-grad_ball.ball-1",
                                        selectorGuids: ["9257ffe6-ed63-ac03-9a6e-ebbc756b144e", "9257ffe6-ed63-ac03-9a6e-ebbc756b1451"]
                                    },
                                    xValue: 100,
                                    yValue: -100,
                                    xUnit: "%",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-54-n-5",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 5e3,
                                    target: {
                                        selector: ".button-grad_ball.ball-1",
                                        selectorGuids: ["9257ffe6-ed63-ac03-9a6e-ebbc756b144e", "9257ffe6-ed63-ac03-9a6e-ebbc756b1451"]
                                    },
                                    xValue: 1.5,
                                    yValue: 1.5,
                                    locked: !0
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-54-n-6",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 5e3,
                                    target: {
                                        selector: ".button-grad_ball.ball-1",
                                        selectorGuids: ["9257ffe6-ed63-ac03-9a6e-ebbc756b144e", "9257ffe6-ed63-ac03-9a6e-ebbc756b1451"]
                                    },
                                    xValue: 0,
                                    yValue: -100,
                                    xUnit: "%",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-54-n-7",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 5e3,
                                    target: {
                                        selector: ".button-grad_ball.ball-1",
                                        selectorGuids: ["9257ffe6-ed63-ac03-9a6e-ebbc756b144e", "9257ffe6-ed63-ac03-9a6e-ebbc756b1451"]
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    xUnit: "%",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-54-n-8",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 5e3,
                                    target: {
                                        selector: ".button-grad_ball.ball-1",
                                        selectorGuids: ["9257ffe6-ed63-ac03-9a6e-ebbc756b144e", "9257ffe6-ed63-ac03-9a6e-ebbc756b1451"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x18085ca5d2a
                    },
                    "a-55": {
                        id: "a-55",
                        title: "button ball move 2",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-55-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".button-grad_ball.gradient__ball--2",
                                        selectorGuids: ["9257ffe6-ed63-ac03-9a6e-ebbc756b144e", "9257ffe6-ed63-ac03-9a6e-ebbc756b1452"]
                                    },
                                    xValue: 0,
                                    xUnit: "%",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-55-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 6e3,
                                    target: {
                                        selector: ".button-grad_ball.gradient__ball--2",
                                        selectorGuids: ["9257ffe6-ed63-ac03-9a6e-ebbc756b144e", "9257ffe6-ed63-ac03-9a6e-ebbc756b1452"]
                                    },
                                    xValue: 0,
                                    yValue: -100,
                                    xUnit: "%",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-55-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 6e3,
                                    target: {
                                        selector: ".button-grad_ball.gradient__ball--2",
                                        selectorGuids: ["9257ffe6-ed63-ac03-9a6e-ebbc756b144e", "9257ffe6-ed63-ac03-9a6e-ebbc756b1452"]
                                    },
                                    xValue: -100,
                                    yValue: -100,
                                    xUnit: "%",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-55-n-4",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 6e3,
                                    target: {
                                        selector: ".button-grad_ball.gradient__ball--2",
                                        selectorGuids: ["9257ffe6-ed63-ac03-9a6e-ebbc756b144e", "9257ffe6-ed63-ac03-9a6e-ebbc756b1452"]
                                    },
                                    xValue: -100,
                                    yValue: 0,
                                    xUnit: "%",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-55-n-5",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 6e3,
                                    target: {
                                        selector: ".button-grad_ball.gradient__ball--2",
                                        selectorGuids: ["9257ffe6-ed63-ac03-9a6e-ebbc756b144e", "9257ffe6-ed63-ac03-9a6e-ebbc756b1452"]
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    xUnit: "%",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x18085ca5d2a
                    },
                    "a-56": {
                        id: "a-56",
                        title: "FAQ / Open",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-56-n",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".faq_answer-wrap",
                                        selectorGuids: ["c667b34c-9385-0a9e-6de5-39fb80ca9347"]
                                    },
                                    widthValue: 100,
                                    heightValue: 0,
                                    widthUnit: "%",
                                    heightUnit: "px",
                                    locked: !1
                                }
                            }, {
                                id: "a-56-n-2",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".faq_button-line.is-second",
                                        selectorGuids: ["c667b34c-9385-0a9e-6de5-39fb80ca934e", "c667b34c-9385-0a9e-6de5-39fb80ca934f"]
                                    },
                                    zValue: 90,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-56-n-3",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "outCubic",
                                    duration: 350,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".faq_answer-wrap",
                                        selectorGuids: ["c667b34c-9385-0a9e-6de5-39fb80ca9347"]
                                    },
                                    widthValue: 100,
                                    widthUnit: "%",
                                    heightUnit: "AUTO",
                                    locked: !1
                                }
                            }, {
                                id: "a-56-n-4",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "outCubic",
                                    duration: 350,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".faq_button-line.is-second",
                                        selectorGuids: ["c667b34c-9385-0a9e-6de5-39fb80ca934e", "c667b34c-9385-0a9e-6de5-39fb80ca934f"]
                                    },
                                    zValue: 0,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x19585f17b20
                    },
                    "a-57": {
                        id: "a-57",
                        title: "FAQ / Close",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-57-n",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "outCubic",
                                    duration: 250,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".faq_answer-wrap",
                                        selectorGuids: ["c667b34c-9385-0a9e-6de5-39fb80ca9347"]
                                    },
                                    widthValue: 100,
                                    heightValue: 0,
                                    widthUnit: "%",
                                    heightUnit: "px",
                                    locked: !1
                                }
                            }, {
                                id: "a-57-n-2",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "outCubic",
                                    duration: 350,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".faq_button-line.is-second",
                                        selectorGuids: ["c667b34c-9385-0a9e-6de5-39fb80ca934e", "c667b34c-9385-0a9e-6de5-39fb80ca934f"]
                                    },
                                    zValue: 90,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x19585f17b20
                    },
                    "a-58": {
                        id: "a-58",
                        title: "Blog item hover in",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-58-n",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".blog-list_img",
                                        selectorGuids: ["520a0bb5-6536-dedf-6961-514007e040bd"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-58-n-2",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "outCubic",
                                    duration: 750,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".blog-list_img",
                                        selectorGuids: ["520a0bb5-6536-dedf-6961-514007e040bd"]
                                    },
                                    xValue: 1.05,
                                    yValue: 1.05,
                                    locked: !0
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x197c6d40c55
                    },
                    "a-59": {
                        id: "a-59",
                        title: "Blog item hover out",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-59-n-2",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 750,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".blog-list_img",
                                        selectorGuids: ["520a0bb5-6536-dedf-6961-514007e040bd"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x197c6d40c55
                    },
                    "a-60": {
                        id: "a-60",
                        title: "Brand fade",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-60-n",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".brand_wrap",
                                        selectorGuids: ["aff5e2bb-ecb0-0741-9340-b185bed3bd76"]
                                    },
                                    value: "flex"
                                }
                            }, {
                                id: "a-60-n-8",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".brand_wrap",
                                        selectorGuids: ["aff5e2bb-ecb0-0741-9340-b185bed3bd76"]
                                    },
                                    widthValue: 100,
                                    heightValue: 100,
                                    widthUnit: "%",
                                    heightUnit: "vh",
                                    locked: !1
                                }
                            }, {
                                id: "a-60-n-13",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".brand_wrap",
                                        selectorGuids: ["aff5e2bb-ecb0-0741-9340-b185bed3bd76"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "vh",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-60-n-6",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".brand_logo",
                                        selectorGuids: ["49e73bd4-e3b0-3f94-33c7-a40b8d8582f3"]
                                    },
                                    xValue: .8,
                                    yValue: .8,
                                    locked: !0
                                }
                            }, {
                                id: "a-60-n-4",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".brand_logo",
                                        selectorGuids: ["49e73bd4-e3b0-3f94-33c7-a40b8d8582f3"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-60-n-5",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 750,
                                    target: {
                                        selector: ".brand_logo",
                                        selectorGuids: ["49e73bd4-e3b0-3f94-33c7-a40b8d8582f3"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-60-n-7",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "outCubic",
                                    duration: 750,
                                    target: {
                                        selector: ".brand_logo",
                                        selectorGuids: ["49e73bd4-e3b0-3f94-33c7-a40b8d8582f3"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }, {
                                id: "a-60-n-9",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 600,
                                    easing: "inOutCubic",
                                    duration: 750,
                                    target: {
                                        selector: ".brand_wrap",
                                        selectorGuids: ["aff5e2bb-ecb0-0741-9340-b185bed3bd76"]
                                    },
                                    widthValue: 100,
                                    heightValue: 0,
                                    widthUnit: "%",
                                    heightUnit: "vh",
                                    locked: !1
                                }
                            }, {
                                id: "a-60-n-14",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 600,
                                    easing: "inOutCubic",
                                    duration: 750,
                                    target: {
                                        selector: ".brand_wrap",
                                        selectorGuids: ["aff5e2bb-ecb0-0741-9340-b185bed3bd76"]
                                    },
                                    yValue: -20,
                                    xUnit: "PX",
                                    yUnit: "vh",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-60-n-15",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".brand_wrap",
                                        selectorGuids: ["aff5e2bb-ecb0-0741-9340-b185bed3bd76"]
                                    },
                                    value: "none"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x197c7ed34ea
                    },
                    "a-66": {
                        id: "a-66",
                        title: "Fade in 0s",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-66-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "68648328e74f16fb90b5d1b0|b394e38e-4b0d-fb72-bed8-b08c89b00e6b"
                                    },
                                    yValue: .5,
                                    xUnit: "PX",
                                    yUnit: "rem",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-66-n-2",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "68648328e74f16fb90b5d1b0|b394e38e-4b0d-fb72-bed8-b08c89b00e6b"
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-66-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outCubic",
                                    duration: 800,
                                    target: {
                                        useEventTarget: !0,
                                        id: "68648328e74f16fb90b5d1b0|b394e38e-4b0d-fb72-bed8-b08c89b00e6b"
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "rem",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-66-n-4",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "68648328e74f16fb90b5d1b0|b394e38e-4b0d-fb72-bed8-b08c89b00e6b"
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x197c8a1e10b
                    },
                    "a-68": {
                        id: "a-68",
                        title: "Fade in 0.2s",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-68-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "68648328e74f16fb90b5d1b0|b394e38e-4b0d-fb72-bed8-b08c89b00e6b"
                                    },
                                    yValue: .5,
                                    xUnit: "PX",
                                    yUnit: "rem",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-68-n-2",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "68648328e74f16fb90b5d1b0|b394e38e-4b0d-fb72-bed8-b08c89b00e6b"
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-68-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 200,
                                    easing: "outCubic",
                                    duration: 800,
                                    target: {
                                        useEventTarget: !0,
                                        id: "68648328e74f16fb90b5d1b0|b394e38e-4b0d-fb72-bed8-b08c89b00e6b"
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "rem",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-68-n-4",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 200,
                                    easing: "ease",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "68648328e74f16fb90b5d1b0|b394e38e-4b0d-fb72-bed8-b08c89b00e6b"
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x197c8a1e10b
                    },
                    "a-67": {
                        id: "a-67",
                        title: "Fade in 0.1s",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-67-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "68648328e74f16fb90b5d1b0|b394e38e-4b0d-fb72-bed8-b08c89b00e6b"
                                    },
                                    yValue: .5,
                                    xUnit: "PX",
                                    yUnit: "rem",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-67-n-2",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "68648328e74f16fb90b5d1b0|b394e38e-4b0d-fb72-bed8-b08c89b00e6b"
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-67-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 100,
                                    easing: "outCubic",
                                    duration: 800,
                                    target: {
                                        useEventTarget: !0,
                                        id: "68648328e74f16fb90b5d1b0|b394e38e-4b0d-fb72-bed8-b08c89b00e6b"
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "rem",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-67-n-4",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 100,
                                    easing: "ease",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "68648328e74f16fb90b5d1b0|b394e38e-4b0d-fb72-bed8-b08c89b00e6b"
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x197c8a1e10b
                    },
                    "a-69": {
                        id: "a-69",
                        title: "Fade in 0.3s",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-69-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "68648328e74f16fb90b5d1b0|b394e38e-4b0d-fb72-bed8-b08c89b00e6b"
                                    },
                                    yValue: .5,
                                    xUnit: "PX",
                                    yUnit: "rem",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-69-n-2",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "68648328e74f16fb90b5d1b0|b394e38e-4b0d-fb72-bed8-b08c89b00e6b"
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-69-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 300,
                                    easing: "outCubic",
                                    duration: 800,
                                    target: {
                                        useEventTarget: !0,
                                        id: "68648328e74f16fb90b5d1b0|b394e38e-4b0d-fb72-bed8-b08c89b00e6b"
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "rem",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-69-n-4",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 300,
                                    easing: "ease",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "68648328e74f16fb90b5d1b0|b394e38e-4b0d-fb72-bed8-b08c89b00e6b"
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x197c8a1e10b
                    },
                    "a-70": {
                        id: "a-70",
                        title: "Fade in 0.4s",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-70-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "68648328e74f16fb90b5d1b0|b394e38e-4b0d-fb72-bed8-b08c89b00e6b"
                                    },
                                    yValue: .5,
                                    xUnit: "PX",
                                    yUnit: "rem",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-70-n-2",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "68648328e74f16fb90b5d1b0|b394e38e-4b0d-fb72-bed8-b08c89b00e6b"
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-70-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 400,
                                    easing: "outCubic",
                                    duration: 800,
                                    target: {
                                        useEventTarget: !0,
                                        id: "68648328e74f16fb90b5d1b0|b394e38e-4b0d-fb72-bed8-b08c89b00e6b"
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "rem",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-70-n-4",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 400,
                                    easing: "ease",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "68648328e74f16fb90b5d1b0|b394e38e-4b0d-fb72-bed8-b08c89b00e6b"
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x197c8a1e10b
                    },
                    "a-71": {
                        id: "a-71",
                        title: "Fade in 0.5s",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-71-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "68648328e74f16fb90b5d1b0|b394e38e-4b0d-fb72-bed8-b08c89b00e6b"
                                    },
                                    yValue: .5,
                                    xUnit: "PX",
                                    yUnit: "rem",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-71-n-2",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "68648328e74f16fb90b5d1b0|b394e38e-4b0d-fb72-bed8-b08c89b00e6b"
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-71-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 500,
                                    easing: "outCubic",
                                    duration: 800,
                                    target: {
                                        useEventTarget: !0,
                                        id: "68648328e74f16fb90b5d1b0|b394e38e-4b0d-fb72-bed8-b08c89b00e6b"
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "rem",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-71-n-4",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 500,
                                    easing: "ease",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "68648328e74f16fb90b5d1b0|b394e38e-4b0d-fb72-bed8-b08c89b00e6b"
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x197c8a1e10b
                    },
                    "a-72": {
                        id: "a-72",
                        title: "ABOUT - Header images swap",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-72-n",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        selector: ".about-header_imgs",
                                        selectorGuids: ["ca3c93ad-26ca-0faa-4cf8-015639524fa9"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }, {
                                id: "a-72-n-3",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".about-header_img._1",
                                        selectorGuids: ["e4392146-e43c-5115-2301-d2f8872bd519", "a99553bb-32ec-7890-b64d-7b2791342698"]
                                    },
                                    value: "block"
                                }
                            }, {
                                id: "a-72-n-4",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".about-header_img._2",
                                        selectorGuids: ["e4392146-e43c-5115-2301-d2f8872bd519", "e79176ec-0df6-82f1-bffa-cf521f947949"]
                                    },
                                    value: "none"
                                }
                            }, {
                                id: "a-72-n-5",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".about-header_img._3",
                                        selectorGuids: ["e4392146-e43c-5115-2301-d2f8872bd519", "0a2e4695-0f89-67ae-96ab-e6c65504f980"]
                                    },
                                    value: "none"
                                }
                            }, {
                                id: "a-72-n-6",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".about-header_img._4",
                                        selectorGuids: ["e4392146-e43c-5115-2301-d2f8872bd519", "86107980-780f-b6ba-4010-626278db1c71"]
                                    },
                                    value: "none"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-72-n-2",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 750,
                                    easing: "inCubic",
                                    duration: 200,
                                    target: {
                                        selector: ".about-header_imgs",
                                        selectorGuids: ["ca3c93ad-26ca-0faa-4cf8-015639524fa9"]
                                    },
                                    xValue: .95,
                                    yValue: .95,
                                    locked: !0
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-72-n-7",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".about-header_img._1",
                                        selectorGuids: ["e4392146-e43c-5115-2301-d2f8872bd519", "a99553bb-32ec-7890-b64d-7b2791342698"]
                                    },
                                    value: "none"
                                }
                            }, {
                                id: "a-72-n-8",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".about-header_img._2",
                                        selectorGuids: ["e4392146-e43c-5115-2301-d2f8872bd519", "e79176ec-0df6-82f1-bffa-cf521f947949"]
                                    },
                                    value: "block"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-72-n-9",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "outCubic",
                                    duration: 200,
                                    target: {
                                        selector: ".about-header_imgs",
                                        selectorGuids: ["ca3c93ad-26ca-0faa-4cf8-015639524fa9"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-72-n-10",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 750,
                                    easing: "inCubic",
                                    duration: 200,
                                    target: {
                                        selector: ".about-header_imgs",
                                        selectorGuids: ["ca3c93ad-26ca-0faa-4cf8-015639524fa9"]
                                    },
                                    xValue: .95,
                                    yValue: .95,
                                    locked: !0
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-72-n-11",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".about-header_img._2",
                                        selectorGuids: ["e4392146-e43c-5115-2301-d2f8872bd519", "e79176ec-0df6-82f1-bffa-cf521f947949"]
                                    },
                                    value: "none"
                                }
                            }, {
                                id: "a-72-n-12",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".about-header_img._3",
                                        selectorGuids: ["e4392146-e43c-5115-2301-d2f8872bd519", "0a2e4695-0f89-67ae-96ab-e6c65504f980"]
                                    },
                                    value: "block"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-72-n-13",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "outCubic",
                                    duration: 200,
                                    target: {
                                        selector: ".about-header_imgs",
                                        selectorGuids: ["ca3c93ad-26ca-0faa-4cf8-015639524fa9"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-72-n-14",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 750,
                                    easing: "inCubic",
                                    duration: 200,
                                    target: {
                                        selector: ".about-header_imgs",
                                        selectorGuids: ["ca3c93ad-26ca-0faa-4cf8-015639524fa9"]
                                    },
                                    xValue: .95,
                                    yValue: .95,
                                    locked: !0
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-72-n-15",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".about-header_img._3",
                                        selectorGuids: ["e4392146-e43c-5115-2301-d2f8872bd519", "0a2e4695-0f89-67ae-96ab-e6c65504f980"]
                                    },
                                    value: "none"
                                }
                            }, {
                                id: "a-72-n-16",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".about-header_img._4",
                                        selectorGuids: ["e4392146-e43c-5115-2301-d2f8872bd519", "86107980-780f-b6ba-4010-626278db1c71"]
                                    },
                                    value: "block"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-72-n-17",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "outCubic",
                                    duration: 200,
                                    target: {
                                        selector: ".about-header_imgs",
                                        selectorGuids: ["ca3c93ad-26ca-0faa-4cf8-015639524fa9"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-72-n-18",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 750,
                                    easing: "outCubic",
                                    duration: 200,
                                    target: {
                                        selector: ".about-header_imgs",
                                        selectorGuids: ["ca3c93ad-26ca-0faa-4cf8-015639524fa9"]
                                    },
                                    xValue: .95,
                                    yValue: .95,
                                    locked: !0
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-72-n-19",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".about-header_img._4",
                                        selectorGuids: ["e4392146-e43c-5115-2301-d2f8872bd519", "86107980-780f-b6ba-4010-626278db1c71"]
                                    },
                                    value: "none"
                                }
                            }, {
                                id: "a-72-n-20",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".about-header_img._1",
                                        selectorGuids: ["e4392146-e43c-5115-2301-d2f8872bd519", "a99553bb-32ec-7890-b64d-7b2791342698"]
                                    },
                                    value: "block"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-72-n-21",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "outCubic",
                                    duration: 200,
                                    target: {
                                        selector: ".about-header_imgs",
                                        selectorGuids: ["ca3c93ad-26ca-0faa-4cf8-015639524fa9"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x197d5a542ee
                    },
                    "a-73": {
                        id: "a-73",
                        title: "ABOUT - Sticky experts",
                        continuousParameterGroups: [{
                            id: "a-73-p",
                            type: "SCROLL_PROGRESS",
                            parameterLabel: "Scroll",
                            continuousActionGroups: [{
                                keyframe: 20,
                                actionItems: [{
                                    id: "a-73-n",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".team_img-wrap.is-first",
                                            selectorGuids: ["26ce2cc6-f019-4896-0a6b-c6ee6aaa0d93", "26ce2cc6-f019-4896-0a6b-c6ee6aaa0d9b"]
                                        },
                                        yValue: 0,
                                        xUnit: "PX",
                                        yUnit: "vh",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-73-n-2",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".team_img-wrap.is-second",
                                            selectorGuids: ["26ce2cc6-f019-4896-0a6b-c6ee6aaa0d93", "26ce2cc6-f019-4896-0a6b-c6ee6aaa0d9c"]
                                        },
                                        yValue: 0,
                                        xUnit: "PX",
                                        yUnit: "vh",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-73-n-3",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".team_img-wrap.is-third",
                                            selectorGuids: ["26ce2cc6-f019-4896-0a6b-c6ee6aaa0d93", "26ce2cc6-f019-4896-0a6b-c6ee6aaa0d9a"]
                                        },
                                        yValue: 0,
                                        xUnit: "PX",
                                        yUnit: "vh",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-73-n-4",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".team_img-wrap.is-third",
                                            selectorGuids: ["26ce2cc6-f019-4896-0a6b-c6ee6aaa0d93", "26ce2cc6-f019-4896-0a6b-c6ee6aaa0d9a"]
                                        },
                                        yValue: 0,
                                        xUnit: "PX",
                                        yUnit: "vh",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-73-n-5",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".team_img-wrap.is-fourth",
                                            selectorGuids: ["26ce2cc6-f019-4896-0a6b-c6ee6aaa0d93", "26ce2cc6-f019-4896-0a6b-c6ee6aaa0d9f"]
                                        },
                                        yValue: 0,
                                        xUnit: "PX",
                                        yUnit: "vh",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-73-n-6",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".team_img-wrap.is-fifth",
                                            selectorGuids: ["26ce2cc6-f019-4896-0a6b-c6ee6aaa0d93", "26ce2cc6-f019-4896-0a6b-c6ee6aaa0d9d"]
                                        },
                                        yValue: 0,
                                        xUnit: "PX",
                                        yUnit: "vh",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-73-n-7",
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".team_img-wrap.is-first",
                                            selectorGuids: ["26ce2cc6-f019-4896-0a6b-c6ee6aaa0d93", "26ce2cc6-f019-4896-0a6b-c6ee6aaa0d9b"]
                                        },
                                        xValue: 1,
                                        yValue: 1,
                                        locked: !0
                                    }
                                }]
                            }, {
                                keyframe: 68,
                                actionItems: [{
                                    id: "a-73-n-8",
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".team_img-wrap.is-first",
                                            selectorGuids: ["26ce2cc6-f019-4896-0a6b-c6ee6aaa0d93", "26ce2cc6-f019-4896-0a6b-c6ee6aaa0d9b"]
                                        },
                                        xValue: 2.21,
                                        yValue: 2.21,
                                        locked: !0
                                    }
                                }]
                            }, {
                                keyframe: 72,
                                actionItems: [{
                                    id: "a-73-n-9",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".team_img-wrap.is-first",
                                            selectorGuids: ["26ce2cc6-f019-4896-0a6b-c6ee6aaa0d93", "26ce2cc6-f019-4896-0a6b-c6ee6aaa0d9b"]
                                        },
                                        yValue: 0,
                                        xUnit: "PX",
                                        yUnit: "vh",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-73-n-10",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".team_img-wrap.is-second",
                                            selectorGuids: ["26ce2cc6-f019-4896-0a6b-c6ee6aaa0d93", "26ce2cc6-f019-4896-0a6b-c6ee6aaa0d9c"]
                                        },
                                        yValue: -40,
                                        xUnit: "PX",
                                        yUnit: "vh",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-73-n-11",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".team_img-wrap.is-third",
                                            selectorGuids: ["26ce2cc6-f019-4896-0a6b-c6ee6aaa0d93", "26ce2cc6-f019-4896-0a6b-c6ee6aaa0d9a"]
                                        },
                                        yValue: -30,
                                        xUnit: "PX",
                                        yUnit: "vh",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-73-n-12",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".team_img-wrap.is-fourth",
                                            selectorGuids: ["26ce2cc6-f019-4896-0a6b-c6ee6aaa0d93", "26ce2cc6-f019-4896-0a6b-c6ee6aaa0d9f"]
                                        },
                                        yValue: -15,
                                        xUnit: "PX",
                                        yUnit: "vh",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-73-n-13",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".team_img-wrap.is-fifth",
                                            selectorGuids: ["26ce2cc6-f019-4896-0a6b-c6ee6aaa0d93", "26ce2cc6-f019-4896-0a6b-c6ee6aaa0d9d"]
                                        },
                                        yValue: -25,
                                        xUnit: "PX",
                                        yUnit: "vh",
                                        zUnit: "PX"
                                    }
                                }]
                            }]
                        }],
                        createdOn: 0x18f30ce2386
                    },
                    "a-74": {
                        id: "a-74",
                        title: "ABOUT - Sticky experts (Tablet)",
                        continuousParameterGroups: [{
                            id: "a-74-p",
                            type: "SCROLL_PROGRESS",
                            parameterLabel: "Scroll",
                            continuousActionGroups: [{
                                keyframe: 20,
                                actionItems: [{
                                    id: "a-74-n",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".team_img-wrap.is-first",
                                            selectorGuids: ["26ce2cc6-f019-4896-0a6b-c6ee6aaa0d93", "26ce2cc6-f019-4896-0a6b-c6ee6aaa0d9b"]
                                        },
                                        yValue: 0,
                                        xUnit: "PX",
                                        yUnit: "vh",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-74-n-2",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".team_img-wrap.is-second",
                                            selectorGuids: ["26ce2cc6-f019-4896-0a6b-c6ee6aaa0d93", "26ce2cc6-f019-4896-0a6b-c6ee6aaa0d9c"]
                                        },
                                        yValue: 0,
                                        xUnit: "PX",
                                        yUnit: "vh",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-74-n-3",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".team_img-wrap.is-third",
                                            selectorGuids: ["26ce2cc6-f019-4896-0a6b-c6ee6aaa0d93", "26ce2cc6-f019-4896-0a6b-c6ee6aaa0d9a"]
                                        },
                                        yValue: 0,
                                        xUnit: "PX",
                                        yUnit: "vh",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-74-n-4",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".team_img-wrap.is-third",
                                            selectorGuids: ["26ce2cc6-f019-4896-0a6b-c6ee6aaa0d93", "26ce2cc6-f019-4896-0a6b-c6ee6aaa0d9a"]
                                        },
                                        yValue: 0,
                                        xUnit: "PX",
                                        yUnit: "vh",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-74-n-5",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".team_img-wrap.is-fourth",
                                            selectorGuids: ["26ce2cc6-f019-4896-0a6b-c6ee6aaa0d93", "26ce2cc6-f019-4896-0a6b-c6ee6aaa0d9f"]
                                        },
                                        yValue: 0,
                                        xUnit: "PX",
                                        yUnit: "vh",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-74-n-6",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".team_img-wrap.is-fifth",
                                            selectorGuids: ["26ce2cc6-f019-4896-0a6b-c6ee6aaa0d93", "26ce2cc6-f019-4896-0a6b-c6ee6aaa0d9d"]
                                        },
                                        yValue: 0,
                                        xUnit: "PX",
                                        yUnit: "vh",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-74-n-7",
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".team_img-wrap.is-first",
                                            selectorGuids: ["26ce2cc6-f019-4896-0a6b-c6ee6aaa0d93", "26ce2cc6-f019-4896-0a6b-c6ee6aaa0d9b"]
                                        },
                                        xValue: 1,
                                        yValue: 1,
                                        locked: !0
                                    }
                                }]
                            }, {
                                keyframe: 68,
                                actionItems: [{
                                    id: "a-74-n-8",
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".team_img-wrap.is-first",
                                            selectorGuids: ["26ce2cc6-f019-4896-0a6b-c6ee6aaa0d93", "26ce2cc6-f019-4896-0a6b-c6ee6aaa0d9b"]
                                        },
                                        xValue: 1.4,
                                        yValue: 1.4,
                                        locked: !0
                                    }
                                }]
                            }, {
                                keyframe: 72,
                                actionItems: [{
                                    id: "a-74-n-9",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".team_img-wrap.is-first",
                                            selectorGuids: ["26ce2cc6-f019-4896-0a6b-c6ee6aaa0d93", "26ce2cc6-f019-4896-0a6b-c6ee6aaa0d9b"]
                                        },
                                        yValue: 0,
                                        xUnit: "PX",
                                        yUnit: "vh",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-74-n-10",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".team_img-wrap.is-second",
                                            selectorGuids: ["26ce2cc6-f019-4896-0a6b-c6ee6aaa0d93", "26ce2cc6-f019-4896-0a6b-c6ee6aaa0d9c"]
                                        },
                                        yValue: -30,
                                        xUnit: "PX",
                                        yUnit: "vh",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-74-n-11",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".team_img-wrap.is-third",
                                            selectorGuids: ["26ce2cc6-f019-4896-0a6b-c6ee6aaa0d93", "26ce2cc6-f019-4896-0a6b-c6ee6aaa0d9a"]
                                        },
                                        yValue: -50,
                                        xUnit: "PX",
                                        yUnit: "vh",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-74-n-12",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".team_img-wrap.is-fourth",
                                            selectorGuids: ["26ce2cc6-f019-4896-0a6b-c6ee6aaa0d93", "26ce2cc6-f019-4896-0a6b-c6ee6aaa0d9f"]
                                        },
                                        yValue: -3,
                                        xUnit: "PX",
                                        yUnit: "vh",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-74-n-13",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".team_img-wrap.is-fifth",
                                            selectorGuids: ["26ce2cc6-f019-4896-0a6b-c6ee6aaa0d93", "26ce2cc6-f019-4896-0a6b-c6ee6aaa0d9d"]
                                        },
                                        yValue: -20,
                                        xUnit: "PX",
                                        yUnit: "vh",
                                        zUnit: "PX"
                                    }
                                }]
                            }]
                        }],
                        createdOn: 0x18f30ce2386
                    },
                    "a-78": {
                        id: "a-78",
                        title: "Fade in 0.6s",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-78-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "68648328e74f16fb90b5d1b0|b394e38e-4b0d-fb72-bed8-b08c89b00e6b"
                                    },
                                    yValue: .5,
                                    xUnit: "PX",
                                    yUnit: "rem",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-78-n-2",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "68648328e74f16fb90b5d1b0|b394e38e-4b0d-fb72-bed8-b08c89b00e6b"
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-78-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 600,
                                    easing: "outCubic",
                                    duration: 800,
                                    target: {
                                        useEventTarget: !0,
                                        id: "68648328e74f16fb90b5d1b0|b394e38e-4b0d-fb72-bed8-b08c89b00e6b"
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "rem",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-78-n-4",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 600,
                                    easing: "ease",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "68648328e74f16fb90b5d1b0|b394e38e-4b0d-fb72-bed8-b08c89b00e6b"
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x197c8a1e10b
                    },
                    "a-79": {
                        id: "a-79",
                        title: "Work list - Item scroll v2",
                        continuousParameterGroups: [{
                            id: "a-79-p",
                            type: "SCROLL_PROGRESS",
                            parameterLabel: "Scroll",
                            continuousActionGroups: [{
                                keyframe: 0,
                                actionItems: [{
                                    id: "a-79-n",
                                    actionTypeId: "STYLE_SIZE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".projects-list_block-wrap",
                                            selectorGuids: ["4a3aed6e-915b-0374-cd60-583b0a4eb03d"]
                                        },
                                        widthValue: 20,
                                        heightValue: 20,
                                        widthUnit: "%",
                                        heightUnit: "%",
                                        locked: !1
                                    }
                                }]
                            }, {
                                keyframe: 100,
                                actionItems: [{
                                    id: "a-79-n-2",
                                    actionTypeId: "STYLE_SIZE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".projects-list_block-wrap",
                                            selectorGuids: ["4a3aed6e-915b-0374-cd60-583b0a4eb03d"]
                                        },
                                        widthValue: 100,
                                        heightValue: 100,
                                        widthUnit: "%",
                                        heightUnit: "%",
                                        locked: !1
                                    }
                                }]
                            }]
                        }],
                        createdOn: 0x18f0762760c
                    },
                    "a-80": {
                        id: "a-80",
                        title: "Follow mouse pill hover in",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-80-n",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {},
                                    value: "flex"
                                }
                            }, {
                                id: "a-80-n-2",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {},
                                    xValue: 0,
                                    yValue: 0,
                                    locked: !0
                                }
                            }, {
                                id: "a-80-n-3",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {},
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-80-n-4",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {},
                                    value: "flex"
                                }
                            }, {
                                id: "a-80-n-5",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {},
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-80-n-6",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "swingTo",
                                    duration: 200,
                                    target: {},
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x194f5d3279e
                    },
                    "a-81": {
                        id: "a-81",
                        title: "Follow mouse pill hover out",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-81-n",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 400,
                                    target: {},
                                    xValue: 0,
                                    yValue: 0,
                                    locked: !0
                                }
                            }, {
                                id: "a-81-n-2",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 200,
                                    target: {},
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-81-n-3",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {},
                                    value: "none"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x194f5d3279e
                    },
                    "a-82": {
                        id: "a-82",
                        title: "CONTACT 1 -  Headline move",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-82-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 5e4,
                                    target: {
                                        selector: ".contact-header_text-wrap",
                                        selectorGuids: ["e50847e1-b8af-9a6a-bea5-904b0a5f104b"]
                                    },
                                    xValue: -100,
                                    xUnit: "%",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-82-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".contact-header_text-wrap",
                                        selectorGuids: ["e50847e1-b8af-9a6a-bea5-904b0a5f104b"]
                                    },
                                    xValue: 0,
                                    xUnit: "%",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x188afc721bf
                    },
                    "a-92": {
                        id: "a-92",
                        title: "Fade in 0.7s",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-92-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "68648328e74f16fb90b5d1b0|b394e38e-4b0d-fb72-bed8-b08c89b00e6b"
                                    },
                                    yValue: .5,
                                    xUnit: "PX",
                                    yUnit: "rem",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-92-n-2",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "68648328e74f16fb90b5d1b0|b394e38e-4b0d-fb72-bed8-b08c89b00e6b"
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-92-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 700,
                                    easing: "outCubic",
                                    duration: 800,
                                    target: {
                                        useEventTarget: !0,
                                        id: "68648328e74f16fb90b5d1b0|b394e38e-4b0d-fb72-bed8-b08c89b00e6b"
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "rem",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-92-n-4",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 700,
                                    easing: "ease",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "68648328e74f16fb90b5d1b0|b394e38e-4b0d-fb72-bed8-b08c89b00e6b"
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x197c8a1e10b
                    },
                    "a-91": {
                        id: "a-91",
                        title: "CONTACT 2 - Image loop",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-91-n",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".contact_image._2",
                                        selectorGuids: ["062ced00-eabf-8e03-4ef0-b7cc537397c6", "062ced00-eabf-8e03-4ef0-b7cc537397ce"]
                                    },
                                    value: "none"
                                }
                            }, {
                                id: "a-91-n-2",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".contact_image._3",
                                        selectorGuids: ["062ced00-eabf-8e03-4ef0-b7cc537397c6", "062ced00-eabf-8e03-4ef0-b7cc537397cd"]
                                    },
                                    value: "none"
                                }
                            }, {
                                id: "a-91-n-3",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".contact_image._4",
                                        selectorGuids: ["062ced00-eabf-8e03-4ef0-b7cc537397c6", "062ced00-eabf-8e03-4ef0-b7cc537397d0"]
                                    },
                                    value: "none"
                                }
                            }, {
                                id: "a-91-n-4",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".contact_image._1",
                                        selectorGuids: ["062ced00-eabf-8e03-4ef0-b7cc537397c6", "062ced00-eabf-8e03-4ef0-b7cc537397cc"]
                                    },
                                    value: "flex"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-91-n-5",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 1e3,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".contact_image._2",
                                        selectorGuids: ["062ced00-eabf-8e03-4ef0-b7cc537397c6", "062ced00-eabf-8e03-4ef0-b7cc537397ce"]
                                    },
                                    value: "block"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-91-n-6",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 1e3,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".contact_image._3",
                                        selectorGuids: ["062ced00-eabf-8e03-4ef0-b7cc537397c6", "062ced00-eabf-8e03-4ef0-b7cc537397cd"]
                                    },
                                    value: "block"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-91-n-7",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 1e3,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".contact_image._4",
                                        selectorGuids: ["062ced00-eabf-8e03-4ef0-b7cc537397c6", "062ced00-eabf-8e03-4ef0-b7cc537397d0"]
                                    },
                                    value: "block"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-91-n-8",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 1e3,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".contact_image._2",
                                        selectorGuids: ["062ced00-eabf-8e03-4ef0-b7cc537397c6", "062ced00-eabf-8e03-4ef0-b7cc537397ce"]
                                    },
                                    value: "none"
                                }
                            }, {
                                id: "a-91-n-9",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 1e3,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".contact_image._3",
                                        selectorGuids: ["062ced00-eabf-8e03-4ef0-b7cc537397c6", "062ced00-eabf-8e03-4ef0-b7cc537397cd"]
                                    },
                                    value: "none"
                                }
                            }, {
                                id: "a-91-n-10",
                                actionTypeId: "GENERAL_DISPLAY",
                                config: {
                                    delay: 1e3,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        selector: ".contact_image._4",
                                        selectorGuids: ["062ced00-eabf-8e03-4ef0-b7cc537397c6", "062ced00-eabf-8e03-4ef0-b7cc537397d0"]
                                    },
                                    value: "none"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x18e06c4d78d
                    },
                    "a-99": {
                        id: "a-99",
                        title: "Fade in 0.8s",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-99-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "68648328e74f16fb90b5d1b0|b394e38e-4b0d-fb72-bed8-b08c89b00e6b"
                                    },
                                    yValue: .5,
                                    xUnit: "PX",
                                    yUnit: "rem",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-99-n-2",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "68648328e74f16fb90b5d1b0|b394e38e-4b0d-fb72-bed8-b08c89b00e6b"
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-99-n-4",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 800,
                                    easing: "ease",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "68648328e74f16fb90b5d1b0|b394e38e-4b0d-fb72-bed8-b08c89b00e6b"
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-99-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 800,
                                    easing: "outCubic",
                                    duration: 800,
                                    target: {
                                        useEventTarget: !0,
                                        id: "68648328e74f16fb90b5d1b0|b394e38e-4b0d-fb72-bed8-b08c89b00e6b"
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "rem",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x197c8a1e10b
                    }
                },
                site: {
                    mediaQueries: [{
                        key: "main",
                        min: 992,
                        max: 1e4
                    }, {
                        key: "medium",
                        min: 768,
                        max: 991
                    }, {
                        key: "small",
                        min: 480,
                        max: 767
                    }, {
                        key: "tiny",
                        min: 0,
                        max: 479
                    }]
                }
            })
        }
    }
]);
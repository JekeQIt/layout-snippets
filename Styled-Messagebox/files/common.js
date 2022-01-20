/*!
 * jQuery JavaScript Library v1.7.2
 * http://jquery.com/
 *
 * Copyright 2011, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2011, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Wed Mar 21 12:46:34 2012 -0700
 */
function SetWidthOfProgressBar() {
    // var n = $(".processbar-box .holder ul > li:visible").length;
    // n > 0 && (n > 1 ? $(".processbar").attr("style", "width:190px") : $(".processbar").attr("style", "width:21px"))
}

function clearFormFields(n) {
    function f(n, t) {
        n && (n.style.display = "none");
        t && (t.style.display = "inline")
    }
    var i, u, r, t;
    if (n.clearInputs == null && (n.clearInputs = !0), n.clearTextareas == null && (n.clearTextareas = !0), n.passwordFieldText == null && (n.passwordFieldText = !1), n.addClassFocus == null && (n.addClassFocus = !1), n.filterClass || (n.filterClass = "default"), n.clearInputs)
        for (i = document.getElementsByTagName("input"), t = 0; t < i.length; t++)(i[t].type == "text" || i[t].type == "password") && i[t].className.indexOf(n.filterClass) == -1 && (i[t].valueHtml = i[t].value, i[t].onfocus = function () {
            this.valueHtml == this.value && (this.value = "");
            this.fake && (f(this, this.previousSibling), this.previousSibling.focus());
            n.addClassFocus && !this.fake && (this.className += " " + n.addClassFocus, this.parentNode.className += " parent-" + n.addClassFocus)
        }, i[t].onblur = function () {
            this.value == "" && (this.value = this.valueHtml, n.passwordFieldText && this.type == "password" && f(this, this.nextSibling));
            n.addClassFocus && (this.className = this.className.replace(n.addClassFocus, ""), this.parentNode.className = this.parentNode.className.replace("parent-" + n.addClassFocus, ""))
        }, n.passwordFieldText && i[t].type == "password" && (u = document.createElement("input"), u.type = "text", u.value = i[t].value, u.className = i[t].className, u.fake = !0, i[t].parentNode.insertBefore(u, i[t].nextSibling), f(i[t], null)));
    if (n.clearTextareas)
        for (r = document.getElementsByTagName("textarea"), t = 0; t < r.length; t++) r[t].className.indexOf(n.filterClass) == -1 && (r[t].valueHtml = r[t].value, r[t].onfocus = function () {
            this.value == this.valueHtml && (this.value = "");
            n.addClassFocus && (this.className += " " + n.addClassFocus, this.parentNode.className += " parent-" + n.addClassFocus)
        }, r[t].onblur = function () {
            this.value == "" && (this.value = this.valueHtml);
            n.addClassFocus && (this.className = this.className.replace(n.addClassFocus, ""), this.parentNode.className = this.parentNode.className.replace("parent-" + n.addClassFocus, ""))
        })
}

function progressBar(n, t) {
    var f = n + "%",
        i = t.data("progress"),
        r, u;
    (i || (i = 0), i >= n) || (r = t.data("timeoutRef"), r && window.clearTimeout(r), t.data("progress", n), t.find(".progress").animate({
        width: f
    }, 2e3).addClass("updated"), u = setTimeout(function () {
        t.data("timeoutRef", null);
        t.find(".progress").removeClass("updated")
    }, 7e3), t.data("timeoutRef", u))
}

function getClientInfo() {
    var s, h, v, y, b, o, f, l, k, a, u;
    try {
        s = "Unknown";
        h = "";
        screen.width && (v = screen.width ? screen.width : "", y = screen.height ? screen.height : "", h += "" + v + " x " + y);
        var p = navigator.appVersion,
            n = navigator.userAgent,
            r = navigator.appName,
            t = "" + parseFloat(navigator.appVersion),
            c = parseInt(navigator.appVersion, 10),
            w, i, e;
        (i = n.indexOf("Opera")) != -1 ? (r = "Opera", t = n.substring(i + 6), (i = n.indexOf("Version")) != -1 && (t = n.substring(i + 8))) : (i = n.indexOf("MSIE")) != -1 ? (r = "Microsoft Internet Explorer", t = n.substring(i + 5)) : r == "Netscape" && n.indexOf("Trident/") != -1 ? (r = "Microsoft Internet Explorer", t = n.substring(i + 5), (i = n.indexOf("rv:")) != -1 && (t = n.substring(i + 3))) : (i = n.indexOf("Chrome")) != -1 ? (r = "Chrome", t = n.substring(i + 7)) : (i = n.indexOf("Safari")) != -1 ? (r = "Safari", t = n.substring(i + 7), (i = n.indexOf("Version")) != -1 && (t = n.substring(i + 8)), n.indexOf("CriOS") != -1 && (r = "Chrome")) : (i = n.indexOf("Firefox")) != -1 ? (r = "Firefox", t = n.substring(i + 8)) : (w = n.lastIndexOf(" ") + 1) < (i = n.lastIndexOf("/")) && (r = n.substring(w, i), t = n.substring(i + 1), r.toLowerCase() == r.toUpperCase() && (r = navigator.appName));
        (e = t.indexOf(";")) != -1 && (t = t.substring(0, e));
        (e = t.indexOf(" ")) != -1 && (t = t.substring(0, e));
        (e = t.indexOf(")")) != -1 && (t = t.substring(0, e));
        c = parseInt("" + t, 10);
        isNaN(c) && (t = "" + parseFloat(navigator.appVersion), c = parseInt(navigator.appVersion, 10));
        b = /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(p);
        o = navigator.cookieEnabled ? !0 : !1;
        typeof navigator.cookieEnabled != "undefined" || o || (document.cookie = "testcookie", o = document.cookie.indexOf("testcookie") != -1 ? !0 : !1);
        f = s;
        l = [{
            s: "Windows 3.11",
            r: /Win16/
        }, {
            s: "Windows 95",
            r: /(Windows 95|Win95|Windows_95)/
        }, {
            s: "Windows ME",
            r: /(Win 9x 4.90|Windows ME)/
        }, {
            s: "Windows 98",
            r: /(Windows 98|Win98)/
        }, {
            s: "Windows CE",
            r: /Windows CE/
        }, {
            s: "Windows 2000",
            r: /(Windows NT 5.0|Windows 2000)/
        }, {
            s: "Windows XP",
            r: /(Windows NT 5.1|Windows XP)/
        }, {
            s: "Windows Server 2003",
            r: /Windows NT 5.2/
        }, {
            s: "Windows Vista",
            r: /Windows NT 6.0/
        }, {
            s: "Windows 7",
            r: /(Windows 7|Windows NT 6.1)/
        }, {
            s: "Windows 8.1",
            r: /(Windows 8.1|Windows NT 6.3)/
        }, {
            s: "Windows 8",
            r: /(Windows 8|Windows NT 6.2)/
        }, {
            s: "Windows NT 4.0",
            r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/
        }, {
            s: "Windows ME",
            r: /Windows ME/
        }, {
            s: "Android",
            r: /Android/
        }, {
            s: "Open BSD",
            r: /OpenBSD/
        }, {
            s: "Sun OS",
            r: /SunOS/
        }, {
            s: "Linux",
            r: /(Linux|X11)/
        }, {
            s: "iOS",
            r: /(iPhone|iPad|iPod)/
        }, {
            s: "Mac OS X",
            r: /Mac OS X/
        }, {
            s: "Mac OS",
            r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/
        }, {
            s: "QNX",
            r: /QNX/
        }, {
            s: "UNIX",
            r: /UNIX/
        }, {
            s: "BeOS",
            r: /BeOS/
        }, {
            s: "OS/2",
            r: /OS\/2/
        }, {
            s: "Search Bot",
            r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/
        }];
        for (k in l)
            if (a = l[k], a.r.test(n)) {
                f = a.s;
                break
            }
        u = s;
        /Windows/.test(f) && (u = /Windows (.*)/.exec(f)[1], f = "Windows");
        switch (f) {
            case "Mac OS X":
                u = /Mac OS X (10[\.\_\d]+)/.exec(n)[1];
                break;
            case "Android":
                u = /Android ([\.\_\d]+)/.exec(n)[1];
                break;
            case "iOS":
                u = /OS (\d+)_(\d+)_?(\d+)?/.exec(p);
                u = u[1] + "." + u[2] + "." + (u[3] | 0)
        }
        return {
            screen: h,
            browser: r,
            browserVersion: t,
            mobile: b,
            os: f,
            osVersion: u,
            cookies: o
        }
    } catch (d) {
        return null
    }
}
var Parse, JSON;
(function (n, t) {
    function nu(n) {
        var i = yt[n] = {},
            t, r;
        for (n = n.split(/\s+/), t = 0, r = n.length; t < r; t++) i[n[t]] = !0;
        return i
    }

    function bt(n, r, u) {
        if (u === t && n.nodeType === 1) {
            var f = "data-" + r.replace(wt, "-$1").toLowerCase();
            if (u = n.getAttribute(f), typeof u == "string") {
                try {
                    u = u === "true" ? !0 : u === "false" ? !1 : u === "null" ? null : i.isNumeric(u) ? +u : pt.test(u) ? i.parseJSON(u) : u
                } catch (e) { }
                i.data(n, r, u)
            } else u = t
        }
        return u
    }

    function ut(n) {
        for (var t in n)
            if ((t !== "data" || !i.isEmptyObject(n[t])) && t !== "toJSON") return !1;
        return !0
    }

    function kt(n, t, r) {
        var u = t + "defer",
            f = t + "queue",
            e = t + "mark",
            o = i._data(n, u);
        !o || r !== "queue" && i._data(n, f) || r !== "mark" && i._data(n, e) || setTimeout(function () {
            i._data(n, f) || i._data(n, e) || (i.removeData(n, u, !0), o.fire())
        }, 0)
    }

    function c() {
        return !1
    }

    function k() {
        return !0
    }

    function oi(n) {
        return !n || !n.parentNode || n.parentNode.nodeType === 11
    }

    function si(n, t, r) {
        if (t = t || 0, i.isFunction(t)) return i.grep(n, function (n, i) {
            var u = !!t.call(n, i, n);
            return u === r
        });
        if (t.nodeType) return i.grep(n, function (n) {
            return n === t === r
        });
        if (typeof t == "string") {
            var u = i.grep(n, function (n) {
                return n.nodeType === 1
            });
            if (yu.test(t)) return i.filter(t, u, !r);
            t = i.filter(t, u)
        }
        return i.grep(n, function (n) {
            return i.inArray(n, t) >= 0 === r
        })
    }

    function hi(n) {
        var i = ci.split("|"),
            t = n.createDocumentFragment();
        if (t.createElement)
            while (i.length) t.createElement(i.pop());
        return t
    }

    function rf(n) {
        return i.nodeName(n, "table") ? n.getElementsByTagName("tbody")[0] || n.appendChild(n.ownerDocument.createElement("tbody")) : n
    }

    function wi(n, t) {
        if (t.nodeType === 1 && i.hasData(n)) {
            var u, f, o, s = i._data(n),
                r = i._data(t, s),
                e = s.events;
            if (e) {
                delete r.handle;
                r.events = {};
                for (u in e)
                    for (f = 0, o = e[u].length; f < o; f++) i.event.add(t, u, e[u][f])
            }
            r.data && (r.data = i.extend({}, r.data))
        }
    }

    function bi(n, t) {
        var r;
        t.nodeType === 1 && (t.clearAttributes && t.clearAttributes(), t.mergeAttributes && t.mergeAttributes(n), r = t.nodeName.toLowerCase(), r === "object" ? t.outerHTML = n.outerHTML : r === "input" && (n.type === "checkbox" || n.type === "radio") ? (n.checked && (t.defaultChecked = t.checked = n.checked), t.value !== n.value && (t.value = n.value)) : r === "option" ? t.selected = n.defaultSelected : r === "input" || r === "textarea" ? t.defaultValue = n.defaultValue : r === "script" && t.text !== n.text && (t.text = n.text), t.removeAttribute(i.expando), t.removeAttribute("_submit_attached"), t.removeAttribute("_change_attached"))
    }

    function d(n) {
        return typeof n.getElementsByTagName != "undefined" ? n.getElementsByTagName("*") : typeof n.querySelectorAll != "undefined" ? n.querySelectorAll("*") : []
    }

    function ki(n) {
        (n.type === "checkbox" || n.type === "radio") && (n.defaultChecked = n.checked)
    }

    function di(n) {
        var t = (n.nodeName || "").toLowerCase();
        t === "input" ? ki(n) : t !== "script" && typeof n.getElementsByTagName != "undefined" && i.grep(n.getElementsByTagName("input"), ki)
    }

    function uf(n) {
        var t = r.createElement("div");
        return ot.appendChild(t), t.innerHTML = n.outerHTML, t.firstChild
    }

    function tr(n, t, r) {
        var u = t === "width" ? n.offsetWidth : n.offsetHeight,
            f = t === "width" ? 1 : 0,
            e = 4;
        if (u > 0) {
            if (r !== "border")
                for (; f < e; f += 2) r || (u -= parseFloat(i.css(n, "padding" + o[f])) || 0), r === "margin" ? u += parseFloat(i.css(n, r + o[f])) || 0 : u -= parseFloat(i.css(n, "border" + o[f] + "Width")) || 0;
            return u + "px"
        }
        if (u = l(n, t), (u < 0 || u == null) && (u = n.style[t]), ht.test(u)) return u;
        if (u = parseFloat(u) || 0, r)
            for (; f < e; f += 2) u += parseFloat(i.css(n, "padding" + o[f])) || 0, r !== "padding" && (u += parseFloat(i.css(n, "border" + o[f] + "Width")) || 0), r === "margin" && (u += parseFloat(i.css(n, r + o[f])) || 0);
        return u + "px"
    }

    function hr(n) {
        return function (t, r) {
            if (typeof t != "string" && (r = t, t = "*"), i.isFunction(r))
                for (var o = t.toLowerCase().split(ur), f = 0, h = o.length, u, s, e; f < h; f++) u = o[f], e = /^\+/.test(u), e && (u = u.substr(1) || "*"), s = n[u] = n[u] || [], s[e ? "unshift" : "push"](r)
        }
    }

    function g(n, i, r, u, f, e) {
        f = f || i.dataTypes[0];
        e = e || {};
        e[f] = !0;
        for (var s = n[f], h = 0, l = s ? s.length : 0, c = n === ct, o; h < l && (c || !o); h++) o = s[h](i, r, u), typeof o == "string" && (!c || e[o] ? o = t : (i.dataTypes.unshift(o), o = g(n, i, r, u, o, e)));
        return !c && o || e["*"] || (o = g(n, i, r, u, "*", e)), o
    }

    function cr(n, r) {
        var u, f, e = i.ajaxSettings.flatOptions || {};
        for (u in r) r[u] !== t && ((e[u] ? n : f || (f = {}))[u] = r[u]);
        f && i.extend(!0, n, f)
    }

    function lt(n, t, r, u) {
        if (i.isArray(t)) i.each(t, function (t, i) {
            r || af.test(n) ? u(n, i) : lt(n + "[" + (typeof i == "object" ? t : "") + "]", i, r, u)
        });
        else if (r || i.type(t) !== "object") u(n, t);
        else
            for (var f in t) lt(n + "[" + f + "]", t[f], r, u)
    }

    function ne(n, i, r) {
        var s = n.contents,
            f = n.dataTypes,
            c = n.responseFields,
            o, u, e, h;
        for (u in c) u in r && (i[c[u]] = r[u]);
        while (f[0] === "*") f.shift(), o === t && (o = n.mimeType || i.getResponseHeader("content-type"));
        if (o)
            for (u in s)
                if (s[u] && s[u].test(o)) {
                    f.unshift(u);
                    break
                }
        if (f[0] in r) e = f[0];
        else {
            for (u in r) {
                if (!f[0] || n.converters[u + " " + f[0]]) {
                    e = u;
                    break
                }
                h || (h = u)
            }
            e = e || h
        }
        if (e) return e !== f[0] && f.unshift(e), r[e]
    }

    function te(n, r) {
        n.dataFilter && (r = n.dataFilter(r, n.dataType));
        for (var v = n.dataTypes, s = {}, l, p = v.length, a, u = v[0], h, y, f, e, o, c = 1; c < p; c++) {
            if (c === 1)
                for (l in n.converters) typeof l == "string" && (s[l.toLowerCase()] = n.converters[l]);
            if (h = u, u = v[c], u === "*") u = h;
            else if (h !== "*" && h !== u) {
                if (y = h + " " + u, f = s[y] || s["* " + u], !f) {
                    o = t;
                    for (e in s)
                        if (a = e.split(" "), (a[0] === h || a[0] === "*") && (o = s[a[1] + " " + u], o)) {
                            e = s[e];
                            e === !0 ? f = o : o === !0 && (f = e);
                            break
                        }
                }
                f || o || i.error("No conversion from " + y.replace(" ", " to "));
                f !== !0 && (r = f ? f(r) : o(e(r)))
            }
        }
        return r
    }

    function vr() {
        try {
            return new n.XMLHttpRequest
        } catch (t) { }
    }

    function ie() {
        try {
            return new n.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) { }
    }

    function yr() {
        return setTimeout(fe, 0), rt = i.now()
    }

    function fe() {
        rt = t
    }

    function y(n, t) {
        var r = {};
        return i.each(it.concat.apply([], it.slice(0, t)), function () {
            r[this] = n
        }), r
    }

    function pr(n) {
        if (!at[n]) {
            var e = r.body,
                t = i("<" + n + ">").appendTo(e),
                u = t.css("display");
            t.remove();
            (u === "none" || u === "") && (f || (f = r.createElement("iframe"), f.frameBorder = f.width = f.height = 0), e.appendChild(f), v && f.createElement || (v = (f.contentWindow || f.contentDocument).document, v.write((i.support.boxModel ? "<!doctype html>" : "") + "<html><body>"), v.close()), t = v.createElement(n), v.body.appendChild(t), u = i.css(t, "display"), e.removeChild(f));
            at[n] = u
        }
        return at[n]
    }

    function kr(n) {
        return i.isWindow(n) ? n : n.nodeType === 9 ? n.defaultView || n.parentWindow : !1
    }
    var r = n.document,
        dr = n.navigator,
        gr = n.location,
        i = function () {
            function b() {
                if (!i.isReady) {
                    try {
                        r.documentElement.doScroll("left")
                    } catch (n) {
                        setTimeout(b, 1);
                        return
                    }
                    i.ready()
                }
            }
            var i = function (n, t) {
                return new i.fn.init(n, t, c)
            },
                k = n.jQuery,
                d = n.$,
                c, g = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
                l = /\S/,
                a = /^\s+/,
                v = /\s+$/,
                nt = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
                tt = /^[\],:{}\s]*$/,
                it = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                rt = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                ut = /(?:^|:|,)(?:\s*\[)+/g,
                ft = /(webkit)[ \/]([\w.]+)/,
                et = /(opera)(?:.*version)?[ \/]([\w.]+)/,
                ot = /(msie) ([\w.]+)/,
                st = /(mozilla)(?:.*? rv:([\w.]+))?/,
                ht = /-([a-z]|[0-9])/ig,
                ct = /^-ms-/,
                lt = function (n, t) {
                    return (t + "").toUpperCase()
                },
                at = dr.userAgent,
                e, o, u, vt = Object.prototype.toString,
                s = Object.prototype.hasOwnProperty,
                h = Array.prototype.push,
                f = Array.prototype.slice,
                y = String.prototype.trim,
                p = Array.prototype.indexOf,
                w = {};
            return i.fn = i.prototype = {
                constructor: i,
                init: function (n, u, f) {
                    var o, s, e, h;
                    if (!n) return this;
                    if (n.nodeType) return this.context = this[0] = n, this.length = 1, this;
                    if (n === "body" && !u && r.body) return this.context = r, this[0] = r.body, this.selector = n, this.length = 1, this;
                    if (typeof n == "string") {
                        if (o = n.charAt(0) === "<" && n.charAt(n.length - 1) === ">" && n.length >= 3 ? [null, n, null] : g.exec(n), o && (o[1] || !u)) {
                            if (o[1]) return u = u instanceof i ? u[0] : u, h = u ? u.ownerDocument || u : r, e = nt.exec(n), e ? i.isPlainObject(u) ? (n = [r.createElement(e[1])], i.fn.attr.call(n, u, !0)) : n = [h.createElement(e[1])] : (e = i.buildFragment([o[1]], [h]), n = (e.cacheable ? i.clone(e.fragment) : e.fragment).childNodes), i.merge(this, n);
                            if (s = r.getElementById(o[2]), s && s.parentNode) {
                                if (s.id !== o[2]) return f.find(n);
                                this.length = 1;
                                this[0] = s
                            }
                            return this.context = r, this.selector = n, this
                        }
                        return !u || u.jquery ? (u || f).find(n) : this.constructor(u).find(n)
                    }
                    return i.isFunction(n) ? f.ready(n) : (n.selector !== t && (this.selector = n.selector, this.context = n.context), i.makeArray(n, this))
                },
                selector: "",
                jquery: "1.7.2",
                length: 0,
                size: function () {
                    return this.length
                },
                toArray: function () {
                    return f.call(this, 0)
                },
                get: function (n) {
                    return n == null ? this.toArray() : n < 0 ? this[this.length + n] : this[n]
                },
                pushStack: function (n, t, r) {
                    var u = this.constructor();
                    return i.isArray(n) ? h.apply(u, n) : i.merge(u, n), u.prevObject = this, u.context = this.context, t === "find" ? u.selector = this.selector + (this.selector ? " " : "") + r : t && (u.selector = this.selector + "." + t + "(" + r + ")"), u
                },
                each: function (n, t) {
                    return i.each(this, n, t)
                },
                ready: function (n) {
                    return i.bindReady(), o.add(n), this
                },
                eq: function (n) {
                    return n = +n, n === -1 ? this.slice(n) : this.slice(n, n + 1)
                },
                first: function () {
                    return this.eq(0)
                },
                last: function () {
                    return this.eq(-1)
                },
                slice: function () {
                    return this.pushStack(f.apply(this, arguments), "slice", f.call(arguments).join(","))
                },
                map: function (n) {
                    return this.pushStack(i.map(this, function (t, i) {
                        return n.call(t, i, t)
                    }))
                },
                end: function () {
                    return this.prevObject || this.constructor(null)
                },
                push: h,
                sort: [].sort,
                splice: [].splice
            }, i.fn.init.prototype = i.fn, i.extend = i.fn.extend = function () {
                var o, e, u, r, s, h, n = arguments[0] || {},
                    f = 1,
                    l = arguments.length,
                    c = !1;
                for (typeof n == "boolean" && (c = n, n = arguments[1] || {}, f = 2), typeof n == "object" || i.isFunction(n) || (n = {}), l === f && (n = this, --f); f < l; f++)
                    if ((o = arguments[f]) != null)
                        for (e in o) (u = n[e], r = o[e], n !== r) && (c && r && (i.isPlainObject(r) || (s = i.isArray(r))) ? (s ? (s = !1, h = u && i.isArray(u) ? u : []) : h = u && i.isPlainObject(u) ? u : {}, n[e] = i.extend(c, h, r)) : r !== t && (n[e] = r));
                return n
            }, i.extend({
                noConflict: function (t) {
                    return n.$ === i && (n.$ = d), t && n.jQuery === i && (n.jQuery = k), i
                },
                isReady: !1,
                readyWait: 1,
                holdReady: function (n) {
                    n ? i.readyWait++ : i.ready(!0)
                },
                ready: function (n) {
                    if (n === !0 && !--i.readyWait || n !== !0 && !i.isReady) {
                        if (!r.body) return setTimeout(i.ready, 1);
                        if (i.isReady = !0, n !== !0 && --i.readyWait > 0) return;
                        o.fireWith(r, [i]);
                        i.fn.trigger && i(r).trigger("ready").off("ready")
                    }
                },
                bindReady: function () {
                    if (!o) {
                        if (o = i.Callbacks("once memory"), r.readyState === "complete") return setTimeout(i.ready, 1);
                        if (r.addEventListener) r.addEventListener("DOMContentLoaded", u, !1), n.addEventListener("load", i.ready, !1);
                        else if (r.attachEvent) {
                            r.attachEvent("onreadystatechange", u);
                            n.attachEvent("onload", i.ready);
                            var t = !1;
                            try {
                                t = n.frameElement == null
                            } catch (f) { }
                            r.documentElement.doScroll && t && b()
                        }
                    }
                },
                isFunction: function (n) {
                    return i.type(n) === "function"
                },
                isArray: Array.isArray || function (n) {
                    return i.type(n) === "array"
                },
                isWindow: function (n) {
                    return n != null && n == n.window
                },
                isNumeric: function (n) {
                    return !isNaN(parseFloat(n)) && isFinite(n)
                },
                type: function (n) {
                    return n == null ? String(n) : w[vt.call(n)] || "object"
                },
                isPlainObject: function (n) {
                    if (!n || i.type(n) !== "object" || n.nodeType || i.isWindow(n)) return !1;
                    try {
                        if (n.constructor && !s.call(n, "constructor") && !s.call(n.constructor.prototype, "isPrototypeOf")) return !1
                    } catch (u) {
                        return !1
                    }
                    for (var r in n);
                    return r === t || s.call(n, r)
                },
                isEmptyObject: function (n) {
                    for (var t in n) return !1;
                    return !0
                },
                error: function (n) {
                    throw new Error(n);
                },
                parseJSON: function (t) {
                    if (typeof t != "string" || !t) return null;
                    if (t = i.trim(t), n.JSON && n.JSON.parse) return n.JSON.parse(t);
                    if (tt.test(t.replace(it, "@").replace(rt, "]").replace(ut, ""))) return new Function("return " + t)();
                    i.error("Invalid JSON: " + t)
                },
                parseXML: function (r) {
                    if (typeof r != "string" || !r) return null;
                    var u, f;
                    try {
                        n.DOMParser ? (f = new DOMParser, u = f.parseFromString(r, "text/xml")) : (u = new ActiveXObject("Microsoft.XMLDOM"), u.async = "false", u.loadXML(r))
                    } catch (e) {
                        u = t
                    }
                    return u && u.documentElement && !u.getElementsByTagName("parsererror").length || i.error("Invalid XML: " + r), u
                },
                noop: function () { },
                globalEval: function (t) {
                    t && l.test(t) && (n.execScript || function (t) {
                        n.eval.call(n, t)
                    })(t)
                },
                camelCase: function (n) {
                    return n.replace(ct, "ms-").replace(ht, lt)
                },
                nodeName: function (n, t) {
                    return n.nodeName && n.nodeName.toUpperCase() === t.toUpperCase()
                },
                each: function (n, r, u) {
                    var f, e = 0,
                        o = n.length,
                        s = o === t || i.isFunction(n);
                    if (u) {
                        if (s) {
                            for (f in n)
                                if (r.apply(n[f], u) === !1) break
                        } else
                            for (; e < o;)
                                if (r.apply(n[e++], u) === !1) break
                    } else if (s) {
                        for (f in n)
                            if (r.call(n[f], f, n[f]) === !1) break
                    } else
                        for (; e < o;)
                            if (r.call(n[e], e, n[e++]) === !1) break;
                    return n
                },
                trim: y ? function (n) {
                    return n == null ? "" : y.call(n)
                } : function (n) {
                    return n == null ? "" : n.toString().replace(a, "").replace(v, "")
                },
                makeArray: function (n, t) {
                    var u = t || [],
                        r;
                    return n != null && (r = i.type(n), n.length == null || r === "string" || r === "function" || r === "regexp" || i.isWindow(n) ? h.call(u, n) : i.merge(u, n)), u
                },
                inArray: function (n, t, i) {
                    var r;
                    if (t) {
                        if (p) return p.call(t, n, i);
                        for (r = t.length, i = i ? i < 0 ? Math.max(0, r + i) : i : 0; i < r; i++)
                            if (i in t && t[i] === n) return i
                    }
                    return -1
                },
                merge: function (n, i) {
                    var u = n.length,
                        r = 0,
                        f;
                    if (typeof i.length == "number")
                        for (f = i.length; r < f; r++) n[u++] = i[r];
                    else
                        while (i[r] !== t) n[u++] = i[r++];
                    return n.length = u, n
                },
                grep: function (n, t, i) {
                    var u = [],
                        f, r, e;
                    for (i = !!i, r = 0, e = n.length; r < e; r++) f = !!t(n[r], r), i !== f && u.push(n[r]);
                    return u
                },
                map: function (n, r, u) {
                    var f, h, e = [],
                        s = 0,
                        o = n.length,
                        c = n instanceof i || o !== t && typeof o == "number" && (o > 0 && n[0] && n[o - 1] || o === 0 || i.isArray(n));
                    if (c)
                        for (; s < o; s++) f = r(n[s], s, u), f != null && (e[e.length] = f);
                    else
                        for (h in n) f = r(n[h], h, u), f != null && (e[e.length] = f);
                    return e.concat.apply([], e)
                },
                guid: 1,
                proxy: function (n, r) {
                    var e, o, u;
                    return (typeof r == "string" && (e = n[r], r = n, n = e), !i.isFunction(n)) ? t : (o = f.call(arguments, 2), u = function () {
                        return n.apply(r, o.concat(f.call(arguments)))
                    }, u.guid = n.guid = n.guid || u.guid || i.guid++ , u)
                },
                access: function (n, r, u, f, e, o, s) {
                    var c, l = u == null,
                        h = 0,
                        a = n.length;
                    if (u && typeof u == "object") {
                        for (h in u) i.access(n, r, h, u[h], 1, o, f);
                        e = 1
                    } else if (f !== t) {
                        if (c = s === t && i.isFunction(f), l && (c ? (c = r, r = function (n, t, r) {
                            return c.call(i(n), r)
                        }) : (r.call(n, f), r = null)), r)
                            for (; h < a; h++) r(n[h], u, c ? f.call(n[h], h, r(n[h], u)) : f, s);
                        e = 1
                    }
                    return e ? n : l ? r.call(n) : a ? r(n[0], u) : o
                },
                now: function () {
                    return (new Date).getTime()
                },
                uaMatch: function (n) {
                    n = n.toLowerCase();
                    var t = ft.exec(n) || et.exec(n) || ot.exec(n) || n.indexOf("compatible") < 0 && st.exec(n) || [];
                    return {
                        browser: t[1] || "",
                        version: t[2] || "0"
                    }
                },
                sub: function () {
                    function n(t, i) {
                        return new n.fn.init(t, i)
                    }
                    i.extend(!0, n, this);
                    n.superclass = this;
                    n.fn = n.prototype = this();
                    n.fn.constructor = n;
                    n.sub = this.sub;
                    n.fn.init = function (r, u) {
                        return u && u instanceof i && !(u instanceof n) && (u = n(u)), i.fn.init.call(this, r, u, t)
                    };
                    n.fn.init.prototype = n.fn;
                    var t = n(r);
                    return n
                },
                browser: {}
            }), i.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (n, t) {
                w["[object " + t + "]"] = t.toLowerCase()
            }), e = i.uaMatch(at), e.browser && (i.browser[e.browser] = !0, i.browser.version = e.version), i.browser.webkit && (i.browser.safari = !0), l.test(" ") && (a = /^[\s\xA0]+/, v = /[\s\xA0]+$/), c = i(r), r.addEventListener ? u = function () {
                r.removeEventListener("DOMContentLoaded", u, !1);
                i.ready()
            } : r.attachEvent && (u = function () {
                r.readyState === "complete" && (r.detachEvent("onreadystatechange", u), i.ready())
            }), i
        }(),
        yt = {},
        w, pt, wt, lr, p, nt, ar, a, wr, br, vt;
    i.Callbacks = function (n) {
        n = n ? yt[n] || nu(n) : {};
        var r = [],
            f = [],
            u, l, s, c, h, e, a = function (t) {
                for (var u, e, f = 0, s = t.length; f < s; f++) u = t[f], e = i.type(u), e === "array" ? a(u) : e === "function" && (n.unique && o.has(u) || r.push(u))
            },
            v = function (t, i) {
                for (i = i || [], u = !n.memory || [t, i], l = !0, s = !0, e = c || 0, c = 0, h = r.length; r && e < h; e++)
                    if (r[e].apply(t, i) === !1 && n.stopOnFalse) {
                        u = !0;
                        break
                    }
                s = !1;
                r && (n.once ? u === !0 ? o.disable() : r = [] : f && f.length && (u = f.shift(), o.fireWith(u[0], u[1])))
            },
            o = {
                add: function () {
                    if (r) {
                        var n = r.length;
                        a(arguments);
                        s ? h = r.length : u && u !== !0 && (c = n, v(u[0], u[1]))
                    }
                    return this
                },
                remove: function () {
                    var t;
                    if (r)
                        for (var u = arguments, i = 0, f = u.length; i < f; i++)
                            for (t = 0; t < r.length; t++)
                                if (u[i] === r[t] && (s && t <= h && (h-- , t <= e && e--), r.splice(t--, 1), n.unique)) break;
                    return this
                },
                has: function (n) {
                    if (r)
                        for (var t = 0, i = r.length; t < i; t++)
                            if (n === r[t]) return !0;
                    return !1
                },
                empty: function () {
                    return r = [], this
                },
                disable: function () {
                    return r = f = u = t, this
                },
                disabled: function () {
                    return !r
                },
                lock: function () {
                    return f = t, u && u !== !0 || o.disable(), this
                },
                locked: function () {
                    return !f
                },
                fireWith: function (t, i) {
                    return f && (s ? n.once || f.push([t, i]) : n.once && u || v(t, i)), this
                },
                fire: function () {
                    return o.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!l
                }
            };
        return o
    };
    w = [].slice;
    i.extend({
        Deferred: function (n) {
            var r = i.Callbacks("once memory"),
                u = i.Callbacks("once memory"),
                f = i.Callbacks("memory"),
                s = "pending",
                h = {
                    resolve: r,
                    reject: u,
                    notify: f
                },
                e = {
                    done: r.add,
                    fail: u.add,
                    progress: f.add,
                    state: function () {
                        return s
                    },
                    isResolved: r.fired,
                    isRejected: u.fired,
                    then: function (n, i, r) {
                        return t.done(n).fail(i).progress(r), this
                    },
                    always: function () {
                        return t.done.apply(t, arguments).fail.apply(t, arguments), this
                    },
                    pipe: function (n, r, u) {
                        return i.Deferred(function (f) {
                            i.each({
                                done: [n, "resolve"],
                                fail: [r, "reject"],
                                progress: [u, "notify"]
                            }, function (n, r) {
                                var e = r[0],
                                    o = r[1],
                                    u;
                                i.isFunction(e) ? t[n](function () {
                                    u = e.apply(this, arguments);
                                    u && i.isFunction(u.promise) ? u.promise().then(f.resolve, f.reject, f.notify) : f[o + "With"](this === t ? f : this, [u])
                                }) : t[n](f[o])
                            })
                        }).promise()
                    },
                    promise: function (n) {
                        if (n == null) n = e;
                        else
                            for (var t in e) n[t] = e[t];
                        return n
                    }
                },
                t = e.promise({});
            for (var o in h) t[o] = h[o].fire, t[o + "With"] = h[o].fireWith;
            return t.done(function () {
                s = "resolved"
            }, u.disable, f.lock).fail(function () {
                s = "rejected"
            }, r.disable, f.lock), n && n.call(t, t), t
        },
        when: function (n) {
            function h(n) {
                return function (i) {
                    r[n] = arguments.length > 1 ? w.call(arguments, 0) : i;
                    --e || t.resolveWith(t, r)
                }
            }

            function c(n) {
                return function (i) {
                    o[n] = arguments.length > 1 ? w.call(arguments, 0) : i;
                    t.notifyWith(s, o)
                }
            }
            var r = w.call(arguments, 0),
                u = 0,
                f = r.length,
                o = new Array(f),
                e = f,
                l = f,
                t = f <= 1 && n && i.isFunction(n.promise) ? n : i.Deferred(),
                s = t.promise();
            if (f > 1) {
                for (; u < f; u++) r[u] && r[u].promise && i.isFunction(r[u].promise) ? r[u].promise().then(h(u), t.reject, c(u)) : --e;
                e || t.resolveWith(t, r)
            } else t !== n && t.resolveWith(t, f ? [n] : []);
            return s
        }
    });
    i.support = function () {
        var u, v, o, c, l, f, e, h, a, y, s, t = r.createElement("div"),
            p = r.documentElement;
        if (t.setAttribute("className", "t"), t.innerHTML = "   <link/><table><\/table><a href='/a' style='top:1px;float:left;opacity:.55;'>a<\/a><input type='checkbox'/>", v = t.getElementsByTagName("*"), o = t.getElementsByTagName("a")[0], !v || !v.length || !o) return {};
        c = r.createElement("select");
        l = c.appendChild(r.createElement("option"));
        f = t.getElementsByTagName("input")[0];
        u = {
            leadingWhitespace: t.firstChild.nodeType === 3,
            tbody: !t.getElementsByTagName("tbody").length,
            htmlSerialize: !!t.getElementsByTagName("link").length,
            style: /top/.test(o.getAttribute("style")),
            hrefNormalized: o.getAttribute("href") === "/a",
            opacity: /^0.55/.test(o.style.opacity),
            cssFloat: !!o.style.cssFloat,
            checkOn: f.value === "on",
            optSelected: l.selected,
            getSetAttribute: t.className !== "t",
            enctype: !!r.createElement("form").enctype,
            html5Clone: r.createElement("nav").cloneNode(!0).outerHTML !== "<:nav><\/:nav>",
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            pixelMargin: !0
        };
        i.boxModel = u.boxModel = r.compatMode === "CSS1Compat";
        f.checked = !0;
        u.noCloneChecked = f.cloneNode(!0).checked;
        c.disabled = !0;
        u.optDisabled = !l.disabled;
        try {
            delete t.test
        } catch (w) {
            u.deleteExpando = !1
        }
        if (!t.addEventListener && t.attachEvent && t.fireEvent && (t.attachEvent("onclick", function () {
            u.noCloneEvent = !1
        }), t.cloneNode(!0).fireEvent("onclick")), f = r.createElement("input"), f.value = "t", f.setAttribute("type", "radio"), u.radioValue = f.value === "t", f.setAttribute("checked", "checked"), f.setAttribute("name", "t"), t.appendChild(f), e = r.createDocumentFragment(), e.appendChild(t.lastChild), u.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, u.appendChecked = f.checked, e.removeChild(f), e.appendChild(t), t.attachEvent)
            for (y in {
                submit: 1,
                change: 1,
                focusin: 1
            }) a = "on" + y, s = a in t, s || (t.setAttribute(a, "return;"), s = typeof t[a] == "function"), u[y + "Bubbles"] = s;
        return e.removeChild(t), e = c = l = t = f = null, i(function () {
            var e, c, f, k, l, o, y, p, d, w, b, a, v = r.getElementsByTagName("body")[0];
            v && (y = 1, a = "padding:0;margin:0;border:", w = "position:absolute;top:0;left:0;width:1px;height:1px;", b = a + "0;visibility:hidden;", p = "style='" + w + a + "5px solid #000;", d = "<div " + p + "display:block;'><div style='" + a + "0;display:block;overflow:hidden;'><\/div><\/div><table " + p + "' cellpadding='0' cellspacing='0'><tr><td><\/td><\/tr><\/table>", e = r.createElement("div"), e.style.cssText = b + "width:0;height:0;position:static;top:0;margin-top:" + y + "px", v.insertBefore(e, v.firstChild), t = r.createElement("div"), e.appendChild(t), t.innerHTML = "<table><tr><td style='" + a + "0;display:none'><\/td><td>t<\/td><\/tr><\/table>", h = t.getElementsByTagName("td"), s = h[0].offsetHeight === 0, h[0].style.display = "", h[1].style.display = "none", u.reliableHiddenOffsets = s && h[0].offsetHeight === 0, n.getComputedStyle && (t.innerHTML = "", o = r.createElement("div"), o.style.width = "0", o.style.marginRight = "0", t.style.width = "2px", t.appendChild(o), u.reliableMarginRight = (parseInt((n.getComputedStyle(o, null) || {
                marginRight: 0
            }).marginRight, 10) || 0) === 0), typeof t.style.zoom != "undefined" && (t.innerHTML = "", t.style.width = t.style.padding = "1px", t.style.border = 0, t.style.overflow = "hidden", t.style.display = "inline", t.style.zoom = 1, u.inlineBlockNeedsLayout = t.offsetWidth === 3, t.style.display = "block", t.style.overflow = "visible", t.innerHTML = "<div style='width:5px;'><\/div>", u.shrinkWrapBlocks = t.offsetWidth !== 3), t.style.cssText = w + b, t.innerHTML = d, c = t.firstChild, f = c.firstChild, k = c.nextSibling.firstChild.firstChild, l = {
                doesNotAddBorder: f.offsetTop !== 5,
                doesAddBorderForTableAndCells: k.offsetTop === 5
            }, f.style.position = "fixed", f.style.top = "20px", l.fixedPosition = f.offsetTop === 20 || f.offsetTop === 15, f.style.position = f.style.top = "", c.style.overflow = "hidden", c.style.position = "relative", l.subtractsBorderForOverflowNotVisible = f.offsetTop === -5, l.doesNotIncludeMarginInBodyOffset = v.offsetTop !== y, n.getComputedStyle && (t.style.marginTop = "1%", u.pixelMargin = (n.getComputedStyle(t, null) || {
                marginTop: 0
            }).marginTop !== "1%"), typeof e.style.zoom != "undefined" && (e.style.zoom = 1), v.removeChild(e), o = t = e = null, i.extend(u, l))
        }), u
    }();
    pt = /^(?:\{.*\}|\[.*\])$/;
    wt = /([A-Z])/g;
    i.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + (i.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function (n) {
            return n = n.nodeType ? i.cache[n[i.expando]] : n[i.expando], !!n && !ut(n)
        },
        data: function (n, r, u, f) {
            if (i.acceptData(n)) {
                var a, o, h, c = i.expando,
                    v = typeof r == "string",
                    l = n.nodeType,
                    s = l ? i.cache : n,
                    e = l ? n[c] : n[c] && c,
                    y = r === "events";
                if (e && s[e] && (y || f || s[e].data) || !v || u !== t) return (e || (l ? n[c] = e = ++i.uuid : e = c), s[e] || (s[e] = {}, l || (s[e].toJSON = i.noop)), (typeof r == "object" || typeof r == "function") && (f ? s[e] = i.extend(s[e], r) : s[e].data = i.extend(s[e].data, r)), a = o = s[e], f || (o.data || (o.data = {}), o = o.data), u !== t && (o[i.camelCase(r)] = u), y && !o[r]) ? a.events : (v ? (h = o[r], h == null && (h = o[i.camelCase(r)])) : h = o, h)
            }
        },
        removeData: function (n, t, r) {
            if (i.acceptData(n)) {
                var e, s, c, o = i.expando,
                    h = n.nodeType,
                    u = h ? i.cache : n,
                    f = h ? n[o] : o;
                if (u[f]) {
                    if (t && (e = r ? u[f] : u[f].data, e)) {
                        for (i.isArray(t) || (t in e ? t = [t] : (t = i.camelCase(t), t = t in e ? [t] : t.split(" "))), s = 0, c = t.length; s < c; s++) delete e[t[s]];
                        if (!(r ? ut : i.isEmptyObject)(e)) return
                    } (r || (delete u[f].data, ut(u[f]))) && (i.support.deleteExpando || !u.setInterval ? delete u[f] : u[f] = null, h && (i.support.deleteExpando ? delete n[o] : n.removeAttribute ? n.removeAttribute(o) : n[o] = null))
                }
            }
        },
        _data: function (n, t, r) {
            return i.data(n, t, r, !0)
        },
        acceptData: function (n) {
            if (n.nodeName) {
                var t = i.noData[n.nodeName.toLowerCase()];
                if (t) return !(t === !0 || n.getAttribute("classid") !== t)
            }
            return !0
        }
    });
    i.fn.extend({
        data: function (n, r) {
            var u, s, h, o, l, e = this[0],
                c = 0,
                f = null;
            if (n === t) {
                if (this.length && (f = i.data(e), e.nodeType === 1 && !i._data(e, "parsedAttrs"))) {
                    for (h = e.attributes, l = h.length; c < l; c++) o = h[c].name, o.indexOf("data-") === 0 && (o = i.camelCase(o.substring(5)), bt(e, o, f[o]));
                    i._data(e, "parsedAttrs", !0)
                }
                return f
            }
            return typeof n == "object" ? this.each(function () {
                i.data(this, n)
            }) : (u = n.split(".", 2), u[1] = u[1] ? "." + u[1] : "", s = u[1] + "!", i.access(this, function (r) {
                if (r === t) return f = this.triggerHandler("getData" + s, [u[0]]), f === t && e && (f = i.data(e, n), f = bt(e, n, f)), f === t && u[1] ? this.data(u[0]) : f;
                u[1] = r;
                this.each(function () {
                    var t = i(this);
                    t.triggerHandler("setData" + s, u);
                    i.data(this, n, r);
                    t.triggerHandler("changeData" + s, u)
                })
            }, null, r, arguments.length > 1, null, !1))
        },
        removeData: function (n) {
            return this.each(function () {
                i.removeData(this, n)
            })
        }
    });
    i.extend({
        _mark: function (n, t) {
            n && (t = (t || "fx") + "mark", i._data(n, t, (i._data(n, t) || 0) + 1))
        },
        _unmark: function (n, t, r) {
            if (n !== !0 && (r = t, t = n, n = !1), t) {
                r = r || "fx";
                var u = r + "mark",
                    f = n ? 0 : (i._data(t, u) || 1) - 1;
                f ? i._data(t, u, f) : (i.removeData(t, u, !0), kt(t, r, "mark"))
            }
        },
        queue: function (n, t, r) {
            var u;
            if (n) return t = (t || "fx") + "queue", u = i._data(n, t), r && (!u || i.isArray(r) ? u = i._data(n, t, i.makeArray(r)) : u.push(r)), u || []
        },
        dequeue: function (n, t) {
            t = t || "fx";
            var r = i.queue(n, t),
                u = r.shift(),
                f = {};
            u === "inprogress" && (u = r.shift());
            u && (t === "fx" && r.unshift("inprogress"), i._data(n, t + ".run", f), u.call(n, function () {
                i.dequeue(n, t)
            }, f));
            r.length || (i.removeData(n, t + "queue " + t + ".run", !0), kt(n, t, "queue"))
        }
    });
    i.fn.extend({
        queue: function (n, r) {
            var u = 2;
            return (typeof n != "string" && (r = n, n = "fx", u--), arguments.length < u) ? i.queue(this[0], n) : r === t ? this : this.each(function () {
                var t = i.queue(this, n, r);
                n === "fx" && t[0] !== "inprogress" && i.dequeue(this, n)
            })
        },
        dequeue: function (n) {
            return this.each(function () {
                i.dequeue(this, n)
            })
        },
        delay: function (n, t) {
            return n = i.fx ? i.fx.speeds[n] || n : n, t = t || "fx", this.queue(t, function (t, i) {
                var r = setTimeout(t, n);
                i.stop = function () {
                    clearTimeout(r)
                }
            })
        },
        clearQueue: function (n) {
            return this.queue(n || "fx", [])
        },
        promise: function (n, r) {
            function c() {
                --o || e.resolveWith(u, [u])
            }
            typeof n != "string" && (r = n, n = t);
            n = n || "fx";
            for (var e = i.Deferred(), u = this, f = u.length, o = 1, s = n + "defer", l = n + "queue", a = n + "mark", h; f--;)(h = i.data(u[f], s, t, !0) || (i.data(u[f], l, t, !0) || i.data(u[f], a, t, !0)) && i.data(u[f], s, i.Callbacks("once memory"), !0)) && (o++ , h.add(c));
            return c(), e.promise(r)
        }
    });
    var dt = /[\n\t\r]/g,
        b = /\s+/,
        tu = /\r/g,
        iu = /^(?:button|input)$/i,
        ru = /^(?:button|input|object|select|textarea)$/i,
        uu = /^a(?:rea)?$/i,
        gt = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        ni = i.support.getSetAttribute,
        e, ti, ii;
    i.fn.extend({
        attr: function (n, t) {
            return i.access(this, i.attr, n, t, arguments.length > 1)
        },
        removeAttr: function (n) {
            return this.each(function () {
                i.removeAttr(this, n)
            })
        },
        prop: function (n, t) {
            return i.access(this, i.prop, n, t, arguments.length > 1)
        },
        removeProp: function (n) {
            return n = i.propFix[n] || n, this.each(function () {
                try {
                    this[n] = t;
                    delete this[n]
                } catch (i) { }
            })
        },
        addClass: function (n) {
            var r, f, o, t, e, u, s;
            if (i.isFunction(n)) return this.each(function (t) {
                i(this).addClass(n.call(this, t, this.className))
            });
            if (n && typeof n == "string")
                for (r = n.split(b), f = 0, o = this.length; f < o; f++)
                    if (t = this[f], t.nodeType === 1)
                        if (t.className || r.length !== 1) {
                            for (e = " " + t.className + " ", u = 0, s = r.length; u < s; u++) ~e.indexOf(" " + r[u] + " ") || (e += r[u] + " ");
                            t.className = i.trim(e)
                        } else t.className = n;
            return this
        },
        removeClass: function (n) {
            var o, u, s, r, f, e, h;
            if (i.isFunction(n)) return this.each(function (t) {
                i(this).removeClass(n.call(this, t, this.className))
            });
            if (n && typeof n == "string" || n === t)
                for (o = (n || "").split(b), u = 0, s = this.length; u < s; u++)
                    if (r = this[u], r.nodeType === 1 && r.className)
                        if (n) {
                            for (f = (" " + r.className + " ").replace(dt, " "), e = 0, h = o.length; e < h; e++) f = f.replace(" " + o[e] + " ", " ");
                            r.className = i.trim(f)
                        } else r.className = "";
            return this
        },
        toggleClass: function (n, t) {
            var r = typeof n,
                u = typeof t == "boolean";
            return i.isFunction(n) ? this.each(function (r) {
                i(this).toggleClass(n.call(this, r, this.className, t), t)
            }) : this.each(function () {
                if (r === "string")
                    for (var f, s = 0, o = i(this), e = t, h = n.split(b); f = h[s++];) e = u ? e : !o.hasClass(f), o[e ? "addClass" : "removeClass"](f);
                else (r === "undefined" || r === "boolean") && (this.className && i._data(this, "__className__", this.className), this.className = this.className || n === !1 ? "" : i._data(this, "__className__") || "")
            })
        },
        hasClass: function (n) {
            for (var i = " " + n + " ", t = 0, r = this.length; t < r; t++)
                if (this[t].nodeType === 1 && (" " + this[t].className + " ").replace(dt, " ").indexOf(i) > -1) return !0;
            return !1
        },
        val: function (n) {
            var r, u, e, f = this[0];
            return arguments.length ? (e = i.isFunction(n), this.each(function (u) {
                var o = i(this),
                    f;
                this.nodeType === 1 && (f = e ? n.call(this, u, o.val()) : n, f == null ? f = "" : typeof f == "number" ? f += "" : i.isArray(f) && (f = i.map(f, function (n) {
                    return n == null ? "" : n + ""
                })), r = i.valHooks[this.type] || i.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, f, "value") !== t || (this.value = f))
            })) : f ? (r = i.valHooks[f.type] || i.valHooks[f.nodeName.toLowerCase()], r && "get" in r && (u = r.get(f, "value")) !== t) ? u : (u = f.value, typeof u == "string" ? u.replace(tu, "") : u == null ? "" : u) : void 0
        }
    });
    i.extend({
        valHooks: {
            option: {
                get: function (n) {
                    var t = n.attributes.value;
                    return !t || t.specified ? n.value : n.text
                }
            },
            select: {
                get: function (n) {
                    var o, r, h, t, u = n.selectedIndex,
                        s = [],
                        f = n.options,
                        e = n.type === "select-one";
                    if (u < 0) return null;
                    for (r = e ? u : 0, h = e ? u + 1 : f.length; r < h; r++)
                        if (t = f[r], t.selected && (i.support.optDisabled ? !t.disabled : t.getAttribute("disabled") === null) && (!t.parentNode.disabled || !i.nodeName(t.parentNode, "optgroup"))) {
                            if (o = i(t).val(), e) return o;
                            s.push(o)
                        }
                    return e && !s.length && f.length ? i(f[u]).val() : s
                },
                set: function (n, t) {
                    var r = i.makeArray(t);
                    return i(n).find("option").each(function () {
                        this.selected = i.inArray(i(this).val(), r) >= 0
                    }), r.length || (n.selectedIndex = -1), r
                }
            }
        },
        attrFn: {
            val: !0,
            css: !0,
            html: !0,
            text: !0,
            data: !0,
            width: !0,
            height: !0,
            offset: !0
        },
        attr: function (n, r, u, f) {
            var o, s, h, c = n.nodeType;
            if (n && c !== 3 && c !== 8 && c !== 2) {
                if (f && r in i.attrFn) return i(n)[r](u);
                if (typeof n.getAttribute == "undefined") return i.prop(n, r, u);
                if (h = c !== 1 || !i.isXMLDoc(n), h && (r = r.toLowerCase(), s = i.attrHooks[r] || (gt.test(r) ? ti : e)), u !== t) {
                    if (u === null) {
                        i.removeAttr(n, r);
                        return
                    }
                    return s && "set" in s && h && (o = s.set(n, u, r)) !== t ? o : (n.setAttribute(r, "" + u), u)
                }
                return s && "get" in s && h && (o = s.get(n, r)) !== null ? o : (o = n.getAttribute(r), o === null ? t : o)
            }
        },
        removeAttr: function (n, t) {
            var u, f, r, s, e, o = 0;
            if (t && n.nodeType === 1)
                for (f = t.toLowerCase().split(b), s = f.length; o < s; o++) r = f[o], r && (u = i.propFix[r] || r, e = gt.test(r), e || i.attr(n, r, ""), n.removeAttribute(ni ? r : u), e && u in n && (n[u] = !1))
        },
        attrHooks: {
            type: {
                set: function (n, t) {
                    if (iu.test(n.nodeName) && n.parentNode) i.error("type property can't be changed");
                    else if (!i.support.radioValue && t === "radio" && i.nodeName(n, "input")) {
                        var r = n.value;
                        return n.setAttribute("type", t), r && (n.value = r), t
                    }
                }
            },
            value: {
                get: function (n, t) {
                    return e && i.nodeName(n, "button") ? e.get(n, t) : t in n ? n.value : null
                },
                set: function (n, t, r) {
                    if (e && i.nodeName(n, "button")) return e.set(n, t, r);
                    n.value = t
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function (n, r, u) {
            var e, f, s, o = n.nodeType;
            if (n && o !== 3 && o !== 8 && o !== 2) return s = o !== 1 || !i.isXMLDoc(n), s && (r = i.propFix[r] || r, f = i.propHooks[r]), u !== t ? f && "set" in f && (e = f.set(n, u, r)) !== t ? e : n[r] = u : f && "get" in f && (e = f.get(n, r)) !== null ? e : n[r]
        },
        propHooks: {
            tabIndex: {
                get: function (n) {
                    var i = n.getAttributeNode("tabindex");
                    return i && i.specified ? parseInt(i.value, 10) : ru.test(n.nodeName) || uu.test(n.nodeName) && n.href ? 0 : t
                }
            }
        }
    });
    i.attrHooks.tabindex = i.propHooks.tabIndex;
    ti = {
        get: function (n, r) {
            var u, f = i.prop(n, r);
            return f === !0 || typeof f != "boolean" && (u = n.getAttributeNode(r)) && u.nodeValue !== !1 ? r.toLowerCase() : t
        },
        set: function (n, t, r) {
            var u;
            return t === !1 ? i.removeAttr(n, r) : (u = i.propFix[r] || r, u in n && (n[u] = !0), n.setAttribute(r, r.toLowerCase())), r
        }
    };
    ni || (ii = {
        name: !0,
        id: !0,
        coords: !0
    }, e = i.valHooks.button = {
        get: function (n, i) {
            var r;
            return r = n.getAttributeNode(i), r && (ii[i] ? r.nodeValue !== "" : r.specified) ? r.nodeValue : t
        },
        set: function (n, t, i) {
            var u = n.getAttributeNode(i);
            return u || (u = r.createAttribute(i), n.setAttributeNode(u)), u.nodeValue = t + ""
        }
    }, i.attrHooks.tabindex.set = e.set, i.each(["width", "height"], function (n, t) {
        i.attrHooks[t] = i.extend(i.attrHooks[t], {
            set: function (n, i) {
                if (i === "") return n.setAttribute(t, "auto"), i
            }
        })
    }), i.attrHooks.contenteditable = {
        get: e.get,
        set: function (n, t, i) {
            t === "" && (t = "false");
            e.set(n, t, i)
        }
    });
    i.support.hrefNormalized || i.each(["href", "src", "width", "height"], function (n, r) {
        i.attrHooks[r] = i.extend(i.attrHooks[r], {
            get: function (n) {
                var i = n.getAttribute(r, 2);
                return i === null ? t : i
            }
        })
    });
    i.support.style || (i.attrHooks.style = {
        get: function (n) {
            return n.style.cssText.toLowerCase() || t
        },
        set: function (n, t) {
            return n.style.cssText = "" + t
        }
    });
    i.support.optSelected || (i.propHooks.selected = i.extend(i.propHooks.selected, {
        get: function (n) {
            var t = n.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }));
    i.support.enctype || (i.propFix.enctype = "encoding");
    i.support.checkOn || i.each(["radio", "checkbox"], function () {
        i.valHooks[this] = {
            get: function (n) {
                return n.getAttribute("value") === null ? "on" : n.value
            }
        }
    });
    i.each(["radio", "checkbox"], function () {
        i.valHooks[this] = i.extend(i.valHooks[this], {
            set: function (n, t) {
                if (i.isArray(t)) return n.checked = i.inArray(i(n).val(), t) >= 0
            }
        })
    });
    var ft = /^(?:textarea|input|select)$/i,
        ri = /^([^\.]*)?(?:\.(.+))?$/,
        fu = /(?:^|\s)hover(\.\S+)?\b/,
        eu = /^key/,
        ou = /^(?:mouse|contextmenu)|click/,
        ui = /^(?:focusinfocus|focusoutblur)$/,
        su = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,
        hu = function (n) {
            var t = su.exec(n);
            return t && (t[1] = (t[1] || "").toLowerCase(), t[3] = t[3] && new RegExp("(?:^|\\s)" + t[3] + "(?:\\s|$)")), t
        },
        cu = function (n, t) {
            var i = n.attributes || {};
            return (!t[1] || n.nodeName.toLowerCase() === t[1]) && (!t[2] || (i.id || {}).value === t[2]) && (!t[3] || t[3].test((i["class"] || {}).value))
        },
        fi = function (n) {
            return i.event.special.hover ? n : n.replace(fu, "mouseenter$1 mouseleave$1")
        };
    i.event = {
        add: function (n, r, u, f, e) {
            var a, s, v, y, p, o, b, l, w, c, h;
            if (n.nodeType !== 3 && n.nodeType !== 8 && r && u && (a = i._data(n))) {
                for (u.handler && (w = u, u = w.handler, e = w.selector), u.guid || (u.guid = i.guid++), v = a.events, v || (a.events = v = {}), s = a.handle, s || (a.handle = s = function (n) {
                    return typeof i != "undefined" && (!n || i.event.triggered !== n.type) ? i.event.dispatch.apply(s.elem, arguments) : t
                }, s.elem = n), r = i.trim(fi(r)).split(" "), y = 0; y < r.length; y++) p = ri.exec(r[y]) || [], o = p[1], b = (p[2] || "").split(".").sort(), h = i.event.special[o] || {}, o = (e ? h.delegateType : h.bindType) || o, h = i.event.special[o] || {}, l = i.extend({
                    type: o,
                    origType: p[1],
                    data: f,
                    handler: u,
                    guid: u.guid,
                    selector: e,
                    quick: e && hu(e),
                    namespace: b.join(".")
                }, w), c = v[o], c || (c = v[o] = [], c.delegateCount = 0, h.setup && h.setup.call(n, f, b, s) !== !1 || (n.addEventListener ? n.addEventListener(o, s, !1) : n.attachEvent && n.attachEvent("on" + o, s))), h.add && (h.add.call(n, l), l.handler.guid || (l.handler.guid = u.guid)), e ? c.splice(c.delegateCount++, 0, l) : c.push(l), i.event.global[o] = !0;
                n = null
            }
        },
        global: {},
        remove: function (n, t, r, u, f) {
            var y = i.hasData(n) && i._data(n),
                l, p, e, b, h, k, a, v, c, w, o, s;
            if (y && (v = y.events)) {
                for (t = i.trim(fi(t || "")).split(" "), l = 0; l < t.length; l++) {
                    if (p = ri.exec(t[l]) || [], e = b = p[1], h = p[2], !e) {
                        for (e in v) i.event.remove(n, e + t[l], r, u, !0);
                        continue
                    }
                    for (c = i.event.special[e] || {}, e = (u ? c.delegateType : c.bindType) || e, o = v[e] || [], k = o.length, h = h ? new RegExp("(^|\\.)" + h.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null, a = 0; a < o.length; a++) s = o[a], (f || b === s.origType) && (!r || r.guid === s.guid) && (!h || h.test(s.namespace)) && (!u || u === s.selector || u === "**" && s.selector) && (o.splice(a--, 1), s.selector && o.delegateCount-- , c.remove && c.remove.call(n, s));
                    o.length === 0 && k !== o.length && (c.teardown && c.teardown.call(n, h) !== !1 || i.removeEvent(n, e, y.handle), delete v[e])
                }
                i.isEmptyObject(v) && (w = y.handle, w && (w.elem = null), i.removeData(n, ["events", "handle"], !0))
            }
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function (r, u, f, e) {
            if (!f || f.nodeType !== 3 && f.nodeType !== 8) {
                var o = r.type || r,
                    p = [],
                    w, k, c, s, h, a, l, v, y, b;
                if (!ui.test(o + i.event.triggered) && (o.indexOf("!") >= 0 && (o = o.slice(0, -1), k = !0), o.indexOf(".") >= 0 && (p = o.split("."), o = p.shift(), p.sort()), f && !i.event.customEvent[o] || i.event.global[o])) {
                    if (r = typeof r == "object" ? r[i.expando] ? r : new i.Event(o, r) : new i.Event(o), r.type = o, r.isTrigger = !0, r.exclusive = k, r.namespace = p.join("."), r.namespace_re = r.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.)?") + "(\\.|$)") : null, a = o.indexOf(":") < 0 ? "on" + o : "", !f) {
                        w = i.cache;
                        for (c in w) w[c].events && w[c].events[o] && i.event.trigger(r, u, w[c].handle.elem, !0);
                        return
                    }
                    if (r.result = t, r.target || (r.target = f), u = u != null ? i.makeArray(u) : [], u.unshift(r), l = i.event.special[o] || {}, !l.trigger || l.trigger.apply(f, u) !== !1) {
                        if (y = [
                            [f, l.bindType || o]
                        ], !e && !l.noBubble && !i.isWindow(f)) {
                            for (b = l.delegateType || o, s = ui.test(b + o) ? f : f.parentNode, h = null; s; s = s.parentNode) y.push([s, b]), h = s;
                            h && h === f.ownerDocument && y.push([h.defaultView || h.parentWindow || n, b])
                        }
                        for (c = 0; c < y.length && !r.isPropagationStopped(); c++) s = y[c][0], r.type = y[c][1], v = (i._data(s, "events") || {})[r.type] && i._data(s, "handle"), v && v.apply(s, u), v = a && s[a], v && i.acceptData(s) && v.apply(s, u) === !1 && r.preventDefault();
                        return r.type = o, e || r.isDefaultPrevented() || l._default && l._default.apply(f.ownerDocument, u) !== !1 || o === "click" && i.nodeName(f, "a") || !i.acceptData(f) || a && f[o] && (o !== "focus" && o !== "blur" || r.target.offsetWidth !== 0) && !i.isWindow(f) && (h = f[a], h && (f[a] = null), i.event.triggered = o, f[o](), i.event.triggered = t, h && (f[a] = h)), r.result
                    }
                }
            }
        },
        dispatch: function (r) {
            r = i.event.fix(r || n.event);
            var h = (i._data(this, "events") || {})[r.type] || [],
                c = h.delegateCount,
                k = [].slice.call(arguments, 0),
                d = !r.exclusive && !r.namespace,
                l = i.event.special[r.type] || {},
                a = [],
                f, v, e, y, p, w, o, b, u, s;
            if (k[0] = r, r.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, r) !== !1) {
                if (c && !(r.button && r.type === "click"))
                    for (y = i(this), y.context = this.ownerDocument || this, e = r.target; e != this; e = e.parentNode || this)
                        if (e.disabled !== !0) {
                            for (w = {}, b = [], y[0] = e, f = 0; f < c; f++) u = h[f], s = u.selector, w[s] === t && (w[s] = u.quick ? cu(e, u.quick) : y.is(s)), w[s] && b.push(u);
                            b.length && a.push({
                                elem: e,
                                matches: b
                            })
                        }
                for (h.length > c && a.push({
                    elem: this,
                    matches: h.slice(c)
                }), f = 0; f < a.length && !r.isPropagationStopped(); f++)
                    for (o = a[f], r.currentTarget = o.elem, v = 0; v < o.matches.length && !r.isImmediatePropagationStopped(); v++) u = o.matches[v], (d || !r.namespace && !u.namespace || r.namespace_re && r.namespace_re.test(u.namespace)) && (r.data = u.data, r.handleObj = u, p = ((i.event.special[u.origType] || {}).handle || u.handler).apply(o.elem, k), p !== t && (r.result = p, p === !1 && (r.preventDefault(), r.stopPropagation())));
                return l.postDispatch && l.postDispatch.call(this, r), r.result
            }
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (n, t) {
                return n.which == null && (n.which = t.charCode != null ? t.charCode : t.keyCode), n
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (n, i) {
                var o, u, f, e = i.button,
                    s = i.fromElement;
                return n.pageX == null && i.clientX != null && (o = n.target.ownerDocument || r, u = o.documentElement, f = o.body, n.pageX = i.clientX + (u && u.scrollLeft || f && f.scrollLeft || 0) - (u && u.clientLeft || f && f.clientLeft || 0), n.pageY = i.clientY + (u && u.scrollTop || f && f.scrollTop || 0) - (u && u.clientTop || f && f.clientTop || 0)), !n.relatedTarget && s && (n.relatedTarget = s === n.target ? i.toElement : s), n.which || e === t || (n.which = e & 1 ? 1 : e & 2 ? 3 : e & 4 ? 2 : 0), n
            }
        },
        fix: function (n) {
            if (n[i.expando]) return n;
            var e, o, u = n,
                f = i.event.fixHooks[n.type] || {},
                s = f.props ? this.props.concat(f.props) : this.props;
            for (n = i.Event(u), e = s.length; e;) o = s[--e], n[o] = u[o];
            return n.target || (n.target = u.srcElement || r), n.target.nodeType === 3 && (n.target = n.target.parentNode), n.metaKey === t && (n.metaKey = n.ctrlKey), f.filter ? f.filter(n, u) : n
        },
        special: {
            ready: {
                setup: i.bindReady
            },
            load: {
                noBubble: !0
            },
            focus: {
                delegateType: "focusin"
            },
            blur: {
                delegateType: "focusout"
            },
            beforeunload: {
                setup: function (n, t, r) {
                    i.isWindow(this) && (this.onbeforeunload = r)
                },
                teardown: function (n, t) {
                    this.onbeforeunload === t && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function (n, t, r, u) {
            var f = i.extend(new i.Event, r, {
                type: n,
                isSimulated: !0,
                originalEvent: {}
            });
            u ? i.event.trigger(f, null, t) : i.event.dispatch.call(t, f);
            f.isDefaultPrevented() && r.preventDefault()
        }
    };
    i.event.handle = i.event.dispatch;
    i.removeEvent = r.removeEventListener ? function (n, t, i) {
        n.removeEventListener && n.removeEventListener(t, i, !1)
    } : function (n, t, i) {
        n.detachEvent && n.detachEvent("on" + t, i)
    };
    i.Event = function (n, t) {
        if (!(this instanceof i.Event)) return new i.Event(n, t);
        n && n.type ? (this.originalEvent = n, this.type = n.type, this.isDefaultPrevented = n.defaultPrevented || n.returnValue === !1 || n.getPreventDefault && n.getPreventDefault() ? k : c) : this.type = n;
        t && i.extend(this, t);
        this.timeStamp = n && n.timeStamp || i.now();
        this[i.expando] = !0
    };
    i.Event.prototype = {
        preventDefault: function () {
            this.isDefaultPrevented = k;
            var n = this.originalEvent;
            n && (n.preventDefault ? n.preventDefault() : n.returnValue = !1)
        },
        stopPropagation: function () {
            this.isPropagationStopped = k;
            var n = this.originalEvent;
            n && (n.stopPropagation && n.stopPropagation(), n.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = k;
            this.stopPropagation()
        },
        isDefaultPrevented: c,
        isPropagationStopped: c,
        isImmediatePropagationStopped: c
    };
    i.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function (n, t) {
        i.event.special[n] = {
            delegateType: t,
            bindType: t,
            handle: function (n) {
                var f = this,
                    r = n.relatedTarget,
                    u = n.handleObj,
                    o = u.selector,
                    e;
                return r && (r === f || i.contains(f, r)) || (n.type = u.origType, e = u.handler.apply(this, arguments), n.type = t), e
            }
        }
    });
    i.support.submitBubbles || (i.event.special.submit = {
        setup: function () {
            if (i.nodeName(this, "form")) return !1;
            i.event.add(this, "click._submit keypress._submit", function (n) {
                var u = n.target,
                    r = i.nodeName(u, "input") || i.nodeName(u, "button") ? u.form : t;
                r && !r._submit_attached && (i.event.add(r, "submit._submit", function (n) {
                    n._submit_bubble = !0
                }), r._submit_attached = !0)
            })
        },
        postDispatch: function (n) {
            n._submit_bubble && (delete n._submit_bubble, this.parentNode && !n.isTrigger && i.event.simulate("submit", this.parentNode, n, !0))
        },
        teardown: function () {
            if (i.nodeName(this, "form")) return !1;
            i.event.remove(this, "._submit")
        }
    });
    i.support.changeBubbles || (i.event.special.change = {
        setup: function () {
            if (ft.test(this.nodeName)) return (this.type === "checkbox" || this.type === "radio") && (i.event.add(this, "propertychange._change", function (n) {
                n.originalEvent.propertyName === "checked" && (this._just_changed = !0)
            }), i.event.add(this, "click._change", function (n) {
                this._just_changed && !n.isTrigger && (this._just_changed = !1, i.event.simulate("change", this, n, !0))
            })), !1;
            i.event.add(this, "beforeactivate._change", function (n) {
                var t = n.target;
                ft.test(t.nodeName) && !t._change_attached && (i.event.add(t, "change._change", function (n) {
                    !this.parentNode || n.isSimulated || n.isTrigger || i.event.simulate("change", this.parentNode, n, !0)
                }), t._change_attached = !0)
            })
        },
        handle: function (n) {
            var t = n.target;
            if (this !== t || n.isSimulated || n.isTrigger || t.type !== "radio" && t.type !== "checkbox") return n.handleObj.handler.apply(this, arguments)
        },
        teardown: function () {
            return i.event.remove(this, "._change"), ft.test(this.nodeName)
        }
    });
    i.support.focusinBubbles || i.each({
        focus: "focusin",
        blur: "focusout"
    }, function (n, t) {
        var u = 0,
            f = function (n) {
                i.event.simulate(t, n.target, i.event.fix(n), !0)
            };
        i.event.special[t] = {
            setup: function () {
                u++ == 0 && r.addEventListener(n, f, !0)
            },
            teardown: function () {
                --u == 0 && r.removeEventListener(n, f, !0)
            }
        }
    });
    i.fn.extend({
        on: function (n, r, u, f, e) {
            var o, s;
            if (typeof n == "object") {
                typeof r != "string" && (u = u || r, r = t);
                for (s in n) this.on(s, r, u, n[s], e);
                return this
            }
            if (u == null && f == null ? (f = r, u = r = t) : f == null && (typeof r == "string" ? (f = u, u = t) : (f = u, u = r, r = t)), f === !1) f = c;
            else if (!f) return this;
            return e === 1 && (o = f, f = function (n) {
                return i().off(n), o.apply(this, arguments)
            }, f.guid = o.guid || (o.guid = i.guid++)), this.each(function () {
                i.event.add(this, n, f, u, r)
            })
        },
        one: function (n, t, i, r) {
            return this.on(n, t, i, r, 1)
        },
        off: function (n, r, u) {
            var f, e;
            if (n && n.preventDefault && n.handleObj) return f = n.handleObj, i(n.delegateTarget).off(f.namespace ? f.origType + "." + f.namespace : f.origType, f.selector, f.handler), this;
            if (typeof n == "object") {
                for (e in n) this.off(e, r, n[e]);
                return this
            }
            return (r === !1 || typeof r == "function") && (u = r, r = t), u === !1 && (u = c), this.each(function () {
                i.event.remove(this, n, u, r)
            })
        },
        bind: function (n, t, i) {
            return this.on(n, null, t, i)
        },
        unbind: function (n, t) {
            return this.off(n, null, t)
        },
        live: function (n, t, r) {
            i(this.context).on(n, this.selector, t, r);
            return this
        },
        die: function (n, t) {
            return i(this.context).off(n, this.selector || "**", t), this
        },
        delegate: function (n, t, i, r) {
            return this.on(t, n, i, r)
        },
        undelegate: function (n, t, i) {
            return arguments.length == 1 ? this.off(n, "**") : this.off(t, n, i)
        },
        trigger: function (n, t) {
            return this.each(function () {
                i.event.trigger(n, t, this)
            })
        },
        triggerHandler: function (n, t) {
            if (this[0]) return i.event.trigger(n, t, this[0], !0)
        },
        toggle: function (n) {
            var t = arguments,
                u = n.guid || i.guid++,
                r = 0,
                f = function (u) {
                    var f = (i._data(this, "lastToggle" + n.guid) || 0) % r;
                    return i._data(this, "lastToggle" + n.guid, f + 1), u.preventDefault(), t[f].apply(this, arguments) || !1
                };
            for (f.guid = u; r < t.length;) t[r++].guid = u;
            return this.click(f)
        },
        hover: function (n, t) {
            return this.mouseenter(n).mouseleave(t || n)
        }
    });
    i.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (n, t) {
        i.fn[t] = function (n, i) {
            return i == null && (i = n, n = null), arguments.length > 0 ? this.on(t, null, n, i) : this.trigger(t)
        };
        i.attrFn && (i.attrFn[t] = !0);
        eu.test(t) && (i.event.fixHooks[t] = i.event.keyHooks);
        ou.test(t) && (i.event.fixHooks[t] = i.event.mouseHooks)
    });
    /*!
     * Sizzle CSS Selector Engine
     *  Copyright 2011, The Dojo Foundation
     *  Released under the MIT, BSD, and GPL Licenses.
     *  More information: http://sizzlejs.com/
     */
    (function () {
        function g(n, t, i, r, u, f) {
            for (var o, h, s = 0, c = r.length; s < c; s++)
                if (o = r[s], o) {
                    for (h = !1, o = o[n]; o;) {
                        if (o[e] === i) {
                            h = r[o.sizset];
                            break
                        }
                        if (o.nodeType !== 1 || f || (o[e] = i, o.sizset = s), o.nodeName.toLowerCase() === t) {
                            h = o;
                            break
                        }
                        o = o[n]
                    }
                    r[s] = h
                }
        }

        function nt(t, i, r, u, f, o) {
            for (var s, c, h = 0, l = u.length; h < l; h++)
                if (s = u[h], s) {
                    for (c = !1, s = s[t]; s;) {
                        if (s[e] === r) {
                            c = u[s.sizset];
                            break
                        }
                        if (s.nodeType === 1)
                            if (o || (s[e] = r, s.sizset = h), typeof i != "string") {
                                if (s === i) {
                                    c = !0;
                                    break
                                }
                            } else if (n.filter(i, [s]).length > 0) {
                                c = s;
                                break
                            }
                        s = s[t]
                    }
                    u[h] = c
                }
        }
        var v = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
            e = "sizcache" + (Math.random() + "").replace(".", ""),
            y = 0,
            b = Object.prototype.toString,
            c = !1,
            k = !0,
            o = /\\/g,
            tt = /\r\n/g,
            l = /\W/,
            n, s, f, a, h, w;
        [0, 0].sort(function () {
            return k = !1, 0
        });
        n = function (t, i, e, o) {
            var tt;
            if (e = e || [], i = i || r, tt = i, i.nodeType !== 1 && i.nodeType !== 9) return [];
            if (!t || typeof t != "string") return e;
            var y, a, h, nt, l, p, k, c, it = !0,
                g = n.isXML(i),
                s = [],
                rt = t;
            do
                if (v.exec(""), y = v.exec(rt), y && (rt = y[3], s.push(y[1]), y[2])) {
                    nt = y[3];
                    break
                }
            while (y);
            if (s.length > 1 && d.exec(t))
                if (s.length === 2 && u.relative[s[0]]) a = w(s[0] + s[1], i, o);
                else
                    for (a = u.relative[s[0]] ? [i] : n(s.shift(), i); s.length;) t = s.shift(), u.relative[t] && (t += s.shift()), a = w(t, a, o);
            else if (!o && s.length > 1 && i.nodeType === 9 && !g && u.match.ID.test(s[0]) && !u.match.ID.test(s[s.length - 1]) && (l = n.find(s.shift(), i, g), i = l.expr ? n.filter(l.expr, l.set)[0] : l.set[0]), i)
                for (l = o ? {
                    expr: s.pop(),
                    set: f(o)
                } : n.find(s.pop(), s.length === 1 && (s[0] === "~" || s[0] === "+") && i.parentNode ? i.parentNode : i, g), a = l.expr ? n.filter(l.expr, l.set) : l.set, s.length > 0 ? h = f(a) : it = !1; s.length;) p = s.pop(), k = p, u.relative[p] ? k = s.pop() : p = "", k == null && (k = i), u.relative[p](h, k, g);
            else h = s = [];
            if (h || (h = a), h || n.error(p || t), b.call(h) === "[object Array]")
                if (it)
                    if (i && i.nodeType === 1)
                        for (c = 0; h[c] != null; c++) h[c] && (h[c] === !0 || h[c].nodeType === 1 && n.contains(i, h[c])) && e.push(a[c]);
                    else
                        for (c = 0; h[c] != null; c++) h[c] && h[c].nodeType === 1 && e.push(a[c]);
                else e.push.apply(e, h);
            else f(h, e);
            return nt && (n(nt, tt, e, o), n.uniqueSort(e)), e
        };
        n.uniqueSort = function (n) {
            if (a && (c = k, n.sort(a), c))
                for (var t = 1; t < n.length; t++) n[t] === n[t - 1] && n.splice(t--, 1);
            return n
        };
        n.matches = function (t, i) {
            return n(t, null, null, i)
        };
        n.matchesSelector = function (t, i) {
            return n(i, null, null, [t]).length > 0
        };
        n.find = function (n, t, i) {
            var f, e, c, r, s, h;
            if (!n) return [];
            for (e = 0, c = u.order.length; e < c; e++)
                if (s = u.order[e], (r = u.leftMatch[s].exec(n)) && (h = r[1], r.splice(1, 1), h.substr(h.length - 1) !== "\\" && (r[1] = (r[1] || "").replace(o, ""), f = u.find[s](r, t, i), f != null))) {
                    n = n.replace(u.match[s], "");
                    break
                }
            return f || (f = typeof t.getElementsByTagName != "undefined" ? t.getElementsByTagName("*") : []), {
                set: f,
                expr: n
            }
        };
        n.filter = function (i, r, f, e) {
            for (var o, h, c, l, y, b, p, a, w, k = i, v = [], s = r, d = r && r[0] && n.isXML(r[0]); i && r.length;) {
                for (c in u.filter)
                    if ((o = u.leftMatch[c].exec(i)) != null && o[2]) {
                        if (b = u.filter[c], p = o[1], h = !1, o.splice(1, 1), p.substr(p.length - 1) === "\\") continue;
                        if (s === v && (v = []), u.preFilter[c])
                            if (o = u.preFilter[c](o, s, f, v, e, d), o) {
                                if (o === !0) continue
                            } else h = l = !0;
                        if (o)
                            for (a = 0;
                                (y = s[a]) != null; a++) y && (l = b(y, o, a, s), w = e ^ l, f && l != null ? w ? h = !0 : s[a] = !1 : w && (v.push(y), h = !0));
                        if (l !== t) {
                            if (f || (s = v), i = i.replace(u.match[c], ""), !h) return [];
                            break
                        }
                    }
                if (i === k)
                    if (h == null) n.error(i);
                    else break;
                k = i
            }
            return s
        };
        n.error = function (n) {
            throw new Error("Syntax error, unrecognized expression: " + n);
        };
        var p = n.getText = function (n) {
            var i, r, t = n.nodeType,
                u = "";
            if (t) {
                if (t === 1 || t === 9 || t === 11) {
                    if (typeof n.textContent == "string") return n.textContent;
                    if (typeof n.innerText == "string") return n.innerText.replace(tt, "");
                    for (n = n.firstChild; n; n = n.nextSibling) u += p(n)
                } else if (t === 3 || t === 4) return n.nodeValue
            } else
                for (i = 0; r = n[i]; i++) r.nodeType !== 8 && (u += p(r));
            return u
        },
            u = n.selectors = {
                order: ["ID", "NAME", "TAG"],
                match: {
                    ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                    CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                    NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                    ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                    TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                    CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                    POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                    PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
                },
                leftMatch: {},
                attrMap: {
                    "class": "className",
                    "for": "htmlFor"
                },
                attrHandle: {
                    href: function (n) {
                        return n.getAttribute("href")
                    },
                    type: function (n) {
                        return n.getAttribute("type")
                    }
                },
                relative: {
                    "+": function (t, i) {
                        var f = typeof i == "string",
                            e = f && !l.test(i),
                            o = f && !e,
                            u, s, r;
                        for (e && (i = i.toLowerCase()), u = 0, s = t.length; u < s; u++)
                            if (r = t[u]) {
                                while ((r = r.previousSibling) && r.nodeType !== 1);
                                t[u] = o || r && r.nodeName.toLowerCase() === i ? r || !1 : r === i
                            }
                        o && n.filter(i, t, !0)
                    },
                    ">": function (t, i) {
                        var u, f = typeof i == "string",
                            r = 0,
                            o = t.length,
                            e;
                        if (f && !l.test(i))
                            for (i = i.toLowerCase(); r < o; r++) u = t[r], u && (e = u.parentNode, t[r] = e.nodeName.toLowerCase() === i ? e : !1);
                        else {
                            for (; r < o; r++) u = t[r], u && (t[r] = f ? u.parentNode : u.parentNode === i);
                            f && n.filter(i, t, !0)
                        }
                    },
                    "": function (n, t, i) {
                        var r, f = y++,
                            u = nt;
                        typeof t != "string" || l.test(t) || (t = t.toLowerCase(), r = t, u = g);
                        u("parentNode", t, f, n, r, i)
                    },
                    "~": function (n, t, i) {
                        var r, f = y++,
                            u = nt;
                        typeof t != "string" || l.test(t) || (t = t.toLowerCase(), r = t, u = g);
                        u("previousSibling", t, f, n, r, i)
                    }
                },
                find: {
                    ID: function (n, t, i) {
                        if (typeof t.getElementById != "undefined" && !i) {
                            var r = t.getElementById(n[1]);
                            return r && r.parentNode ? [r] : []
                        }
                    },
                    NAME: function (n, t) {
                        var r, u, i, f;
                        if (typeof t.getElementsByName != "undefined") {
                            for (r = [], u = t.getElementsByName(n[1]), i = 0, f = u.length; i < f; i++) u[i].getAttribute("name") === n[1] && r.push(u[i]);
                            return r.length === 0 ? null : r
                        }
                    },
                    TAG: function (n, t) {
                        if (typeof t.getElementsByTagName != "undefined") return t.getElementsByTagName(n[1])
                    }
                },
                preFilter: {
                    CLASS: function (n, t, i, r, u, f) {
                        if (n = " " + n[1].replace(o, "") + " ", f) return n;
                        for (var s = 0, e;
                            (e = t[s]) != null; s++) e && (u ^ (e.className && (" " + e.className + " ").replace(/[\t\n\r]/g, " ").indexOf(n) >= 0) ? i || r.push(e) : i && (t[s] = !1));
                        return !1
                    },
                    ID: function (n) {
                        return n[1].replace(o, "")
                    },
                    TAG: function (n) {
                        return n[1].replace(o, "").toLowerCase()
                    },
                    CHILD: function (t) {
                        if (t[1] === "nth") {
                            t[2] || n.error(t[0]);
                            t[2] = t[2].replace(/^\+|\s*/g, "");
                            var i = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(t[2] === "even" && "2n" || t[2] === "odd" && "2n+1" || !/\D/.test(t[2]) && "0n+" + t[2] || t[2]);
                            t[2] = i[1] + (i[2] || 1) - 0;
                            t[3] = i[3] - 0
                        } else t[2] && n.error(t[0]);
                        return t[0] = y++ , t
                    },
                    ATTR: function (n, t, i, r, f, e) {
                        var s = n[1] = n[1].replace(o, "");
                        return !e && u.attrMap[s] && (n[1] = u.attrMap[s]), n[4] = (n[4] || n[5] || "").replace(o, ""), n[2] === "~=" && (n[4] = " " + n[4] + " "), n
                    },
                    PSEUDO: function (t, i, r, f, e) {
                        if (t[1] === "not")
                            if ((v.exec(t[3]) || "").length > 1 || /^\w/.test(t[3])) t[3] = n(t[3], null, null, i);
                            else {
                                var o = n.filter(t[3], i, r, !0 ^ e);
                                return r || f.push.apply(f, o), !1
                            }
                        else if (u.match.POS.test(t[0]) || u.match.CHILD.test(t[0])) return !0;
                        return t
                    },
                    POS: function (n) {
                        return n.unshift(!0), n
                    }
                },
                filters: {
                    enabled: function (n) {
                        return n.disabled === !1 && n.type !== "hidden"
                    },
                    disabled: function (n) {
                        return n.disabled === !0
                    },
                    checked: function (n) {
                        return n.checked === !0
                    },
                    selected: function (n) {
                        return n.parentNode && n.parentNode.selectedIndex, n.selected === !0
                    },
                    parent: function (n) {
                        return !!n.firstChild
                    },
                    empty: function (n) {
                        return !n.firstChild
                    },
                    has: function (t, i, r) {
                        return !!n(r[3], t).length
                    },
                    header: function (n) {
                        return /h\d/i.test(n.nodeName)
                    },
                    text: function (n) {
                        var t = n.getAttribute("type"),
                            i = n.type;
                        return n.nodeName.toLowerCase() === "input" && "text" === i && (t === i || t === null)
                    },
                    radio: function (n) {
                        return n.nodeName.toLowerCase() === "input" && "radio" === n.type
                    },
                    checkbox: function (n) {
                        return n.nodeName.toLowerCase() === "input" && "checkbox" === n.type
                    },
                    file: function (n) {
                        return n.nodeName.toLowerCase() === "input" && "file" === n.type
                    },
                    password: function (n) {
                        return n.nodeName.toLowerCase() === "input" && "password" === n.type
                    },
                    submit: function (n) {
                        var t = n.nodeName.toLowerCase();
                        return (t === "input" || t === "button") && "submit" === n.type
                    },
                    image: function (n) {
                        return n.nodeName.toLowerCase() === "input" && "image" === n.type
                    },
                    reset: function (n) {
                        var t = n.nodeName.toLowerCase();
                        return (t === "input" || t === "button") && "reset" === n.type
                    },
                    button: function (n) {
                        var t = n.nodeName.toLowerCase();
                        return t === "input" && "button" === n.type || t === "button"
                    },
                    input: function (n) {
                        return /input|select|textarea|button/i.test(n.nodeName)
                    },
                    focus: function (n) {
                        return n === n.ownerDocument.activeElement
                    }
                },
                setFilters: {
                    first: function (n, t) {
                        return t === 0
                    },
                    last: function (n, t, i, r) {
                        return t === r.length - 1
                    },
                    even: function (n, t) {
                        return t % 2 == 0
                    },
                    odd: function (n, t) {
                        return t % 2 == 1
                    },
                    lt: function (n, t, i) {
                        return t < i[3] - 0
                    },
                    gt: function (n, t, i) {
                        return t > i[3] - 0
                    },
                    nth: function (n, t, i) {
                        return i[3] - 0 === t
                    },
                    eq: function (n, t, i) {
                        return i[3] - 0 === t
                    }
                },
                filter: {
                    PSEUDO: function (t, i, r, f) {
                        var e = i[1],
                            h = u.filters[e],
                            s, o, c;
                        if (h) return h(t, r, i, f);
                        if (e === "contains") return (t.textContent || t.innerText || p([t]) || "").indexOf(i[3]) >= 0;
                        if (e === "not") {
                            for (s = i[3], o = 0, c = s.length; o < c; o++)
                                if (s[o] === t) return !1;
                            return !0
                        }
                        n.error(e)
                    },
                    CHILD: function (n, t) {
                        var r, o, s, u, h, f, c = t[1],
                            i = n;
                        switch (c) {
                            case "only":
                            case "first":
                                while (i = i.previousSibling)
                                    if (i.nodeType === 1) return !1;
                                if (c === "first") return !0;
                                i = n;
                            case "last":
                                while (i = i.nextSibling)
                                    if (i.nodeType === 1) return !1;
                                return !0;
                            case "nth":
                                if (r = t[2], o = t[3], r === 1 && o === 0) return !0;
                                if (s = t[0], u = n.parentNode, u && (u[e] !== s || !n.nodeIndex)) {
                                    for (h = 0, i = u.firstChild; i; i = i.nextSibling) i.nodeType === 1 && (i.nodeIndex = ++h);
                                    u[e] = s
                                }
                                return f = n.nodeIndex - o, r === 0 ? f === 0 : f % r == 0 && f / r >= 0
                        }
                    },
                    ID: function (n, t) {
                        return n.nodeType === 1 && n.getAttribute("id") === t
                    },
                    TAG: function (n, t) {
                        return t === "*" && n.nodeType === 1 || !!n.nodeName && n.nodeName.toLowerCase() === t
                    },
                    CLASS: function (n, t) {
                        return (" " + (n.className || n.getAttribute("class")) + " ").indexOf(t) > -1
                    },
                    ATTR: function (t, i) {
                        var o = i[1],
                            s = n.attr ? n.attr(t, o) : u.attrHandle[o] ? u.attrHandle[o](t) : t[o] != null ? t[o] : t.getAttribute(o),
                            f = s + "",
                            e = i[2],
                            r = i[4];
                        return s == null ? e === "!=" : !e && n.attr ? s != null : e === "=" ? f === r : e === "*=" ? f.indexOf(r) >= 0 : e === "~=" ? (" " + f + " ").indexOf(r) >= 0 : r ? e === "!=" ? f !== r : e === "^=" ? f.indexOf(r) === 0 : e === "$=" ? f.substr(f.length - r.length) === r : e === "|=" ? f === r || f.substr(0, r.length + 1) === r + "-" : !1 : f && s !== !1
                    },
                    POS: function (n, t, i, r) {
                        var e = t[2],
                            f = u.setFilters[e];
                        if (f) return f(n, i, t, r)
                    }
                }
            },
            d = u.match.POS,
            it = function (n, t) {
                return "\\" + (+t + 1)
            };
        for (s in u.match) u.match[s] = new RegExp(u.match[s].source + /(?![^\[]*\])(?![^\(]*\))/.source), u.leftMatch[s] = new RegExp(/(^(?:.|\r|\n)*?)/.source + u.match[s].source.replace(/\\(\d+)/g, it));
        u.match.globalPOS = d;
        f = function (n, t) {
            return (n = Array.prototype.slice.call(n, 0), t) ? (t.push.apply(t, n), t) : n
        };
        try {
            Array.prototype.slice.call(r.documentElement.childNodes, 0)[0].nodeType
        } catch (rt) {
            f = function (n, t) {
                var i = 0,
                    r = t || [],
                    u;
                if (b.call(n) === "[object Array]") Array.prototype.push.apply(r, n);
                else if (typeof n.length == "number")
                    for (u = n.length; i < u; i++) r.push(n[i]);
                else
                    for (; n[i]; i++) r.push(n[i]);
                return r
            }
        }
        r.documentElement.compareDocumentPosition ? a = function (n, t) {
            return n === t ? (c = !0, 0) : !n.compareDocumentPosition || !t.compareDocumentPosition ? n.compareDocumentPosition ? -1 : 1 : n.compareDocumentPosition(t) & 4 ? -1 : 1
        } : (a = function (n, t) {
            var i;
            if (n === t) return c = !0, 0;
            if (n.sourceIndex && t.sourceIndex) return n.sourceIndex - t.sourceIndex;
            var e, l, u = [],
                f = [],
                o = n.parentNode,
                s = t.parentNode,
                r = o;
            if (o === s) return h(n, t);
            if (o) {
                if (!s) return 1
            } else return -1;
            while (r) u.unshift(r), r = r.parentNode;
            for (r = s; r;) f.unshift(r), r = r.parentNode;
            for (e = u.length, l = f.length, i = 0; i < e && i < l; i++)
                if (u[i] !== f[i]) return h(u[i], f[i]);
            return i === e ? h(n, f[i], -1) : h(u[i], t, 1)
        }, h = function (n, t, i) {
            if (n === t) return i;
            for (var r = n.nextSibling; r;) {
                if (r === t) return -1;
                r = r.nextSibling
            }
            return 1
        }),
            function () {
                var n = r.createElement("div"),
                    f = "script" + (new Date).getTime(),
                    i = r.documentElement;
                n.innerHTML = "<a name='" + f + "'/>";
                i.insertBefore(n, i.firstChild);
                r.getElementById(f) && (u.find.ID = function (n, i, r) {
                    if (typeof i.getElementById != "undefined" && !r) {
                        var u = i.getElementById(n[1]);
                        return u ? u.id === n[1] || typeof u.getAttributeNode != "undefined" && u.getAttributeNode("id").nodeValue === n[1] ? [u] : t : []
                    }
                }, u.filter.ID = function (n, t) {
                    var i = typeof n.getAttributeNode != "undefined" && n.getAttributeNode("id");
                    return n.nodeType === 1 && i && i.nodeValue === t
                });
                i.removeChild(n);
                i = n = null
            }(),
            function () {
                var n = r.createElement("div");
                n.appendChild(r.createComment(""));
                n.getElementsByTagName("*").length > 0 && (u.find.TAG = function (n, t) {
                    var i = t.getElementsByTagName(n[1]),
                        u, r;
                    if (n[1] === "*") {
                        for (u = [], r = 0; i[r]; r++) i[r].nodeType === 1 && u.push(i[r]);
                        i = u
                    }
                    return i
                });
                n.innerHTML = "<a href='#'><\/a>";
                n.firstChild && typeof n.firstChild.getAttribute != "undefined" && n.firstChild.getAttribute("href") !== "#" && (u.attrHandle.href = function (n) {
                    return n.getAttribute("href", 2)
                });
                n = null
            }();
        r.querySelectorAll && function () {
            var i = n,
                t = r.createElement("div"),
                o = "__sizzle__",
                e;
            if (t.innerHTML = "<p class='TEST'><\/p>", !t.querySelectorAll || t.querySelectorAll(".TEST").length !== 0) {
                n = function (t, e, s, h) {
                    var c, l;
                    if (e = e || r, !h && !n.isXML(e)) {
                        if (c = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(t), c && (e.nodeType === 1 || e.nodeType === 9)) {
                            if (c[1]) return f(e.getElementsByTagName(t), s);
                            if (c[2] && u.find.CLASS && e.getElementsByClassName) return f(e.getElementsByClassName(c[2]), s)
                        }
                        if (e.nodeType === 9) {
                            if (t === "body" && e.body) return f([e.body], s);
                            if (c && c[3])
                                if (l = e.getElementById(c[3]), l && l.parentNode) {
                                    if (l.id === c[3]) return f([l], s)
                                } else return f([], s);
                            try {
                                return f(e.querySelectorAll(t), s)
                            } catch (b) { }
                        } else if (e.nodeType === 1 && e.nodeName.toLowerCase() !== "object") {
                            var w = e,
                                v = e.getAttribute("id"),
                                a = v || o,
                                y = e.parentNode,
                                p = /^\s*[+~]/.test(t);
                            v ? a = a.replace(/'/g, "\\$&") : e.setAttribute("id", a);
                            p && y && (e = e.parentNode);
                            try {
                                if (!p || y) return f(e.querySelectorAll("[id='" + a + "'] " + t), s)
                            } catch (k) { } finally {
                                v || w.removeAttribute("id")
                            }
                        }
                    }
                    return i(t, e, s, h)
                };
                for (e in i) n[e] = i[e];
                t = null
            }
        }(),
            function () {
                var t = r.documentElement,
                    i = t.matchesSelector || t.mozMatchesSelector || t.webkitMatchesSelector || t.msMatchesSelector,
                    e, f;
                if (i) {
                    e = !i.call(r.createElement("div"), "div");
                    f = !1;
                    try {
                        i.call(r.documentElement, "[test!='']:sizzle")
                    } catch (o) {
                        f = !0
                    }
                    n.matchesSelector = function (t, r) {
                        if (r = r.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']"), !n.isXML(t)) try {
                            if (f || !u.match.PSEUDO.test(r) && !/!=/.test(r)) {
                                var o = i.call(t, r);
                                if (o || !e || t.document && t.document.nodeType !== 11) return o
                            }
                        } catch (s) { }
                        return n(r, null, null, [t]).length > 0
                    }
                }
            }(),
            function () {
                var n = r.createElement("div");
                (n.innerHTML = "<div class='test e'><\/div><div class='test'><\/div>", n.getElementsByClassName && n.getElementsByClassName("e").length !== 0) && (n.lastChild.className = "e", n.getElementsByClassName("e").length !== 1) && (u.order.splice(1, 0, "CLASS"), u.find.CLASS = function (n, t, i) {
                    if (typeof t.getElementsByClassName != "undefined" && !i) return t.getElementsByClassName(n[1])
                }, n = null)
            }();
        n.contains = r.documentElement.contains ? function (n, t) {
            return n !== t && (n.contains ? n.contains(t) : !0)
        } : r.documentElement.compareDocumentPosition ? function (n, t) {
            return !!(n.compareDocumentPosition(t) & 16)
        } : function () {
            return !1
        };
        n.isXML = function (n) {
            var t = (n ? n.ownerDocument || n : 0).documentElement;
            return t ? t.nodeName !== "HTML" : !1
        };
        w = function (t, i, r) {
            for (var e, o = [], s = "", h = i.nodeType ? [i] : i, f, c; e = u.match.PSEUDO.exec(t);) s += e[0], t = t.replace(u.match.PSEUDO, "");
            for (t = u.relative[t] ? t + "*" : t, f = 0, c = h.length; f < c; f++) n(t, h[f], o, r);
            return n.filter(s, o)
        };
        n.attr = i.attr;
        n.selectors.attrMap = {};
        i.find = n;
        i.expr = n.selectors;
        i.expr[":"] = i.expr.filters;
        i.unique = n.uniqueSort;
        i.text = n.getText;
        i.isXMLDoc = n.isXML;
        i.contains = n.contains
    })();
    var lu = /Until$/,
        au = /^(?:parents|prevUntil|prevAll)/,
        vu = /,/,
        yu = /^.[^:#\[\.,]*$/,
        pu = Array.prototype.slice,
        ei = i.expr.match.globalPOS,
        wu = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    i.fn.extend({
        find: function (n) {
            var s = this,
                t, f, r, o, u, e;
            if (typeof n != "string") return i(n).filter(function () {
                for (t = 0, f = s.length; t < f; t++)
                    if (i.contains(s[t], this)) return !0
            });
            for (r = this.pushStack("", "find", n), t = 0, f = this.length; t < f; t++)
                if (o = r.length, i.find(n, this[t], r), t > 0)
                    for (u = o; u < r.length; u++)
                        for (e = 0; e < o; e++)
                            if (r[e] === r[u]) {
                                r.splice(u--, 1);
                                break
                            }
            return r
        },
        has: function (n) {
            var t = i(n);
            return this.filter(function () {
                for (var n = 0, r = t.length; n < r; n++)
                    if (i.contains(this, t[n])) return !0
            })
        },
        not: function (n) {
            return this.pushStack(si(this, n, !1), "not", n)
        },
        filter: function (n) {
            return this.pushStack(si(this, n, !0), "filter", n)
        },
        is: function (n) {
            return !!n && (typeof n == "string" ? ei.test(n) ? i(n, this.context).index(this[0]) >= 0 : i.filter(n, this).length > 0 : this.filter(n).length > 0)
        },
        closest: function (n, t) {
            var f = [],
                u, s, r = this[0],
                e, o;
            if (i.isArray(n)) {
                for (e = 1; r && r.ownerDocument && r !== t;) {
                    for (u = 0; u < n.length; u++) i(r).is(n[u]) && f.push({
                        selector: n[u],
                        elem: r,
                        level: e
                    });
                    r = r.parentNode;
                    e++
                }
                return f
            }
            for (o = ei.test(n) || typeof n != "string" ? i(n, t || this.context) : 0, u = 0, s = this.length; u < s; u++)
                for (r = this[u]; r;)
                    if (o ? o.index(r) > -1 : i.find.matchesSelector(r, n)) {
                        f.push(r);
                        break
                    } else if (r = r.parentNode, !r || !r.ownerDocument || r === t || r.nodeType === 11) break;
            return f = f.length > 1 ? i.unique(f) : f, this.pushStack(f, "closest", n)
        },
        index: function (n) {
            return n ? typeof n == "string" ? i.inArray(this[0], i(n)) : i.inArray(n.jquery ? n[0] : n, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        },
        add: function (n, t) {
            var u = typeof n == "string" ? i(n, t) : i.makeArray(n && n.nodeType ? [n] : n),
                r = i.merge(this.get(), u);
            return this.pushStack(oi(u[0]) || oi(r[0]) ? r : i.unique(r))
        },
        andSelf: function () {
            return this.add(this.prevObject)
        }
    });
    i.each({
        parent: function (n) {
            var t = n.parentNode;
            return t && t.nodeType !== 11 ? t : null
        },
        parents: function (n) {
            return i.dir(n, "parentNode")
        },
        parentsUntil: function (n, t, r) {
            return i.dir(n, "parentNode", r)
        },
        next: function (n) {
            return i.nth(n, 2, "nextSibling")
        },
        prev: function (n) {
            return i.nth(n, 2, "previousSibling")
        },
        nextAll: function (n) {
            return i.dir(n, "nextSibling")
        },
        prevAll: function (n) {
            return i.dir(n, "previousSibling")
        },
        nextUntil: function (n, t, r) {
            return i.dir(n, "nextSibling", r)
        },
        prevUntil: function (n, t, r) {
            return i.dir(n, "previousSibling", r)
        },
        siblings: function (n) {
            return i.sibling((n.parentNode || {}).firstChild, n)
        },
        children: function (n) {
            return i.sibling(n.firstChild)
        },
        contents: function (n) {
            return i.nodeName(n, "iframe") ? n.contentDocument || n.contentWindow.document : i.makeArray(n.childNodes)
        }
    }, function (n, t) {
        i.fn[n] = function (r, u) {
            var f = i.map(this, t, r);
            return lu.test(n) || (u = r), u && typeof u == "string" && (f = i.filter(u, f)), f = this.length > 1 && !wu[n] ? i.unique(f) : f, (this.length > 1 || vu.test(u)) && au.test(n) && (f = f.reverse()), this.pushStack(f, n, pu.call(arguments).join(","))
        }
    });
    i.extend({
        filter: function (n, t, r) {
            return r && (n = ":not(" + n + ")"), t.length === 1 ? i.find.matchesSelector(t[0], n) ? [t[0]] : [] : i.find.matches(n, t)
        },
        dir: function (n, r, u) {
            for (var e = [], f = n[r]; f && f.nodeType !== 9 && (u === t || f.nodeType !== 1 || !i(f).is(u));) f.nodeType === 1 && e.push(f), f = f[r];
            return e
        },
        nth: function (n, t, i) {
            t = t || 1;
            for (var r = 0; n; n = n[i])
                if (n.nodeType === 1 && ++r === t) break;
            return n
        },
        sibling: function (n, t) {
            for (var i = []; n; n = n.nextSibling) n.nodeType === 1 && n !== t && i.push(n);
            return i
        }
    });
    var ci = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        bu = / jQuery\d+="(?:\d+|null)"/g,
        et = /^\s+/,
        li = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
        ai = /<([\w:]+)/,
        ku = /<tbody/i,
        du = /<|&#?\w+;/,
        gu = /<(?:script|style)/i,
        nf = /<(?:script|object|embed|option|style)/i,
        vi = new RegExp("<(?:" + ci + ")[\\s/>]", "i"),
        yi = /checked\s*(?:[^=]|=\s*.checked.)/i,
        pi = /\/(java|ecma)script/i,
        tf = /^\s*<!(?:\[CDATA\[|\-\-)/,
        u = {
            option: [1, "<select multiple='multiple'>", "<\/select>"],
            legend: [1, "<fieldset>", "<\/fieldset>"],
            thead: [1, "<table>", "<\/table>"],
            tr: [2, "<table><tbody>", "<\/tbody><\/table>"],
            td: [3, "<table><tbody><tr>", "<\/tr><\/tbody><\/table>"],
            col: [2, "<table><tbody><\/tbody><colgroup>", "<\/colgroup><\/table>"],
            area: [1, "<map>", "<\/map>"],
            _default: [0, "", ""]
        },
        ot = hi(r);
    u.optgroup = u.option;
    u.tbody = u.tfoot = u.colgroup = u.caption = u.thead;
    u.th = u.td;
    i.support.htmlSerialize || (u._default = [1, "div<div>", "<\/div>"]);
    i.fn.extend({
        text: function (n) {
            return i.access(this, function (n) {
                return n === t ? i.text(this) : this.empty().append((this[0] && this[0].ownerDocument || r).createTextNode(n))
            }, null, n, arguments.length)
        },
        wrapAll: function (n) {
            if (i.isFunction(n)) return this.each(function (t) {
                i(this).wrapAll(n.call(this, t))
            });
            if (this[0]) {
                var t = i(n, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]);
                t.map(function () {
                    for (var n = this; n.firstChild && n.firstChild.nodeType === 1;) n = n.firstChild;
                    return n
                }).append(this)
            }
            return this
        },
        wrapInner: function (n) {
            return i.isFunction(n) ? this.each(function (t) {
                i(this).wrapInner(n.call(this, t))
            }) : this.each(function () {
                var t = i(this),
                    r = t.contents();
                r.length ? r.wrapAll(n) : t.append(n)
            })
        },
        wrap: function (n) {
            var t = i.isFunction(n);
            return this.each(function (r) {
                i(this).wrapAll(t ? n.call(this, r) : n)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                i.nodeName(this, "body") || i(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function () {
            return this.domManip(arguments, !0, function (n) {
                this.nodeType === 1 && this.appendChild(n)
            })
        },
        prepend: function () {
            return this.domManip(arguments, !0, function (n) {
                this.nodeType === 1 && this.insertBefore(n, this.firstChild)
            })
        },
        before: function () {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function (n) {
                this.parentNode.insertBefore(n, this)
            });
            if (arguments.length) {
                var n = i.clean(arguments);
                return n.push.apply(n, this.toArray()), this.pushStack(n, "before", arguments)
            }
        },
        after: function () {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function (n) {
                this.parentNode.insertBefore(n, this.nextSibling)
            });
            if (arguments.length) {
                var n = this.pushStack(this, "after", arguments);
                return n.push.apply(n, i.clean(arguments)), n
            }
        },
        remove: function (n, t) {
            for (var u = 0, r;
                (r = this[u]) != null; u++)(!n || i.filter(n, [r]).length) && (t || r.nodeType !== 1 || (i.cleanData(r.getElementsByTagName("*")), i.cleanData([r])), r.parentNode && r.parentNode.removeChild(r));
            return this
        },
        empty: function () {
            for (var t = 0, n;
                (n = this[t]) != null; t++)
                for (n.nodeType === 1 && i.cleanData(n.getElementsByTagName("*")); n.firstChild;) n.removeChild(n.firstChild);
            return this
        },
        clone: function (n, t) {
            return n = n == null ? !1 : n, t = t == null ? n : t, this.map(function () {
                return i.clone(this, n, t)
            })
        },
        html: function (n) {
            return i.access(this, function (n) {
                var r = this[0] || {},
                    f = 0,
                    e = this.length;
                if (n === t) return r.nodeType === 1 ? r.innerHTML.replace(bu, "") : null;
                if (typeof n == "string" && !gu.test(n) && (i.support.leadingWhitespace || !et.test(n)) && !u[(ai.exec(n) || ["", ""])[1].toLowerCase()]) {
                    n = n.replace(li, "<$1><\/$2>");
                    try {
                        for (; f < e; f++) r = this[f] || {}, r.nodeType === 1 && (i.cleanData(r.getElementsByTagName("*")), r.innerHTML = n);
                        r = 0
                    } catch (o) { }
                }
                r && this.empty().append(n)
            }, null, n, arguments.length)
        },
        replaceWith: function (n) {
            return this[0] && this[0].parentNode ? i.isFunction(n) ? this.each(function (t) {
                var r = i(this),
                    u = r.html();
                r.replaceWith(n.call(this, t, u))
            }) : (typeof n != "string" && (n = i(n).detach()), this.each(function () {
                var t = this.nextSibling,
                    r = this.parentNode;
                i(this).remove();
                t ? i(t).before(n) : i(r).append(n)
            })) : this.length ? this.pushStack(i(i.isFunction(n) ? n() : n), "replaceWith", n) : this
        },
        detach: function (n) {
            return this.remove(n, !0)
        },
        domManip: function (n, r, u) {
            var c, h, f, o, e = n[0],
                l = [];
            if (!i.support.checkClone && arguments.length === 3 && typeof e == "string" && yi.test(e)) return this.each(function () {
                i(this).domManip(n, r, u, !0)
            });
            if (i.isFunction(e)) return this.each(function (f) {
                var o = i(this);
                n[0] = e.call(this, f, r ? o.html() : t);
                o.domManip(n, r, u)
            });
            if (this[0]) {
                if (o = e && e.parentNode, c = i.support.parentNode && o && o.nodeType === 11 && o.childNodes.length === this.length ? {
                    fragment: o
                } : i.buildFragment(n, this, l), f = c.fragment, h = f.childNodes.length === 1 ? f = f.firstChild : f.firstChild, h) {
                    r = r && i.nodeName(h, "tr");
                    for (var s = 0, a = this.length, v = a - 1; s < a; s++) u.call(r ? rf(this[s], h) : this[s], c.cacheable || a > 1 && s < v ? i.clone(f, !0, !0) : f)
                }
                l.length && i.each(l, function (n, t) {
                    t.src ? i.ajax({
                        type: "GET",
                        global: !1,
                        url: t.src,
                        async: !1,
                        dataType: "script"
                    }) : i.globalEval((t.text || t.textContent || t.innerHTML || "").replace(tf, "/*$0*/"));
                    t.parentNode && t.parentNode.removeChild(t)
                })
            }
            return this
        }
    });
    i.buildFragment = function (n, t, u) {
        var e, h, s, o, f = n[0];
        return t && t[0] && (o = t[0].ownerDocument || t[0]), o.createDocumentFragment || (o = r), n.length === 1 && typeof f == "string" && f.length < 512 && o === r && f.charAt(0) === "<" && !nf.test(f) && (i.support.checkClone || !yi.test(f)) && (i.support.html5Clone || !vi.test(f)) && (h = !0, s = i.fragments[f], s && s !== 1 && (e = s)), e || (e = o.createDocumentFragment(), i.clean(n, o, e, u)), h && (i.fragments[f] = s ? e : 1), {
            fragment: e,
            cacheable: h
        }
    };
    i.fragments = {};
    i.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (n, t) {
        i.fn[n] = function (r) {
            var e = [],
                u = i(r),
                o = this.length === 1 && this[0].parentNode,
                f, h, s;
            if (o && o.nodeType === 11 && o.childNodes.length === 1 && u.length === 1) return u[t](this[0]), this;
            for (f = 0, h = u.length; f < h; f++) s = (f > 0 ? this.clone(!0) : this).get(), i(u[f])[t](s), e = e.concat(s);
            return this.pushStack(e, n, u.selector)
        }
    });
    i.extend({
        clone: function (n, t, r) {
            var f, e, u, o = i.support.html5Clone || i.isXMLDoc(n) || !vi.test("<" + n.nodeName + ">") ? n.cloneNode(!0) : uf(n);
            if ((!i.support.noCloneEvent || !i.support.noCloneChecked) && (n.nodeType === 1 || n.nodeType === 11) && !i.isXMLDoc(n))
                for (bi(n, o), f = d(n), e = d(o), u = 0; f[u]; ++u) e[u] && bi(f[u], e[u]);
            if (t && (wi(n, o), r))
                for (f = d(n), e = d(o), u = 0; f[u]; ++u) wi(f[u], e[u]);
            return f = e = null, o
        },
        clean: function (n, t, f, e) {
            var k, h, c, l = [],
                a, o, b, v, g, nt;
            for (t = t || r, typeof t.createElement == "undefined" && (t = t.ownerDocument || t[0] && t[0].ownerDocument || r), a = 0;
                (o = n[a]) != null; a++)
                if (typeof o == "number" && (o += ""), o) {
                    if (typeof o == "string")
                        if (du.test(o)) {
                            o = o.replace(li, "<$1><\/$2>");
                            var d = (ai.exec(o) || ["", ""])[1].toLowerCase(),
                                p = u[d] || u._default,
                                tt = p[0],
                                s = t.createElement("div"),
                                w = ot.childNodes,
                                y;
                            for (t === r ? ot.appendChild(s) : hi(t).appendChild(s), s.innerHTML = p[1] + o + p[2]; tt--;) s = s.lastChild;
                            if (!i.support.tbody)
                                for (b = ku.test(o), v = d === "table" && !b ? s.firstChild && s.firstChild.childNodes : p[1] === "<table>" && !b ? s.childNodes : [], c = v.length - 1; c >= 0; --c) i.nodeName(v[c], "tbody") && !v[c].childNodes.length && v[c].parentNode.removeChild(v[c]);
                            !i.support.leadingWhitespace && et.test(o) && s.insertBefore(t.createTextNode(et.exec(o)[0]), s.firstChild);
                            o = s.childNodes;
                            s && (s.parentNode.removeChild(s), w.length > 0 && (y = w[w.length - 1], y && y.parentNode && y.parentNode.removeChild(y)))
                        } else o = t.createTextNode(o);
                    if (!i.support.appendChecked)
                        if (o[0] && typeof (g = o.length) == "number")
                            for (c = 0; c < g; c++) di(o[c]);
                        else di(o);
                    o.nodeType ? l.push(o) : l = i.merge(l, o)
                }
            if (f)
                for (k = function (n) {
                    return !n.type || pi.test(n.type)
                }, a = 0; l[a]; a++) h = l[a], e && i.nodeName(h, "script") && (!h.type || pi.test(h.type)) ? e.push(h.parentNode ? h.parentNode.removeChild(h) : h) : (h.nodeType === 1 && (nt = i.grep(h.getElementsByTagName("script"), k), l.splice.apply(l, [a + 1, 0].concat(nt))), f.appendChild(h));
            return l
        },
        cleanData: function (n) {
            for (var f, r, u, e = i.cache, s = i.event.special, h = i.support.deleteExpando, o = 0, t;
                (t = n[o]) != null; o++)
                if ((!t.nodeName || !i.noData[t.nodeName.toLowerCase()]) && (u = t[i.expando], u)) {
                    if (r = e[u], r && r.events) {
                        for (f in r.events) s[f] ? i.event.remove(t, f) : i.removeEvent(t, f, r.handle);
                        r.handle && (r.handle.elem = null)
                    }
                    h ? delete t[i.expando] : t.removeAttribute && t.removeAttribute(i.expando);
                    delete e[u]
                }
        }
    });
    var st = /alpha\([^)]*\)/i,
        ff = /opacity=([^)]*)/,
        ef = /([A-Z]|^ms)/g,
        of = /^[\-+]?(?:\d*\.)?\d+$/i,
        ht = /^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,
        sf = /^([\-+])=([\-+.\de]+)/,
        hf = /^margin/,
        cf = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        o = ["Top", "Right", "Bottom", "Left"],
        l, gi, nr;
    i.fn.css = function (n, r) {
        return i.access(this, function (n, r, u) {
            return u !== t ? i.style(n, r, u) : i.css(n, r)
        }, n, r, arguments.length > 1)
    };
    i.extend({
        cssHooks: {
            opacity: {
                get: function (n, t) {
                    if (t) {
                        var i = l(n, "opacity");
                        return i === "" ? "1" : i
                    }
                    return n.style.opacity
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: i.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (n, r, u, f) {
            if (n && n.nodeType !== 3 && n.nodeType !== 8 && n.style) {
                var o, s, h = i.camelCase(r),
                    c = n.style,
                    e = i.cssHooks[h];
                if (r = i.cssProps[h] || h, u !== t) {
                    if (s = typeof u, s === "string" && (o = sf.exec(u)) && (u = +(o[1] + 1) * +o[2] + parseFloat(i.css(n, r)), s = "number"), u == null || s === "number" && isNaN(u)) return;
                    if (s !== "number" || i.cssNumber[h] || (u += "px"), !e || !("set" in e) || (u = e.set(n, u)) !== t) try {
                        c[r] = u
                    } catch (l) { }
                } else return e && "get" in e && (o = e.get(n, !1, f)) !== t ? o : c[r]
            }
        },
        css: function (n, r, u) {
            var e, f;
            return (r = i.camelCase(r), f = i.cssHooks[r], r = i.cssProps[r] || r, r === "cssFloat" && (r = "float"), f && "get" in f && (e = f.get(n, !0, u)) !== t) ? e : l ? l(n, r) : void 0
        },
        swap: function (n, t, i) {
            var u = {},
                f;
            for (var r in t) u[r] = n.style[r], n.style[r] = t[r];
            f = i.call(n);
            for (r in t) n.style[r] = u[r];
            return f
        }
    });
    i.curCSS = i.css;
    r.defaultView && r.defaultView.getComputedStyle && (gi = function (n, t) {
        var r, e, u, o, f = n.style;
        return t = t.replace(ef, "-$1").toLowerCase(), (e = n.ownerDocument.defaultView) && (u = e.getComputedStyle(n, null)) && (r = u.getPropertyValue(t), r !== "" || i.contains(n.ownerDocument.documentElement, n) || (r = i.style(n, t))), !i.support.pixelMargin && u && hf.test(t) && ht.test(r) && (o = f.width, f.width = r, r = u.width, f.width = o), r
    });
    r.documentElement.currentStyle && (nr = function (n, t) {
        var f, u, e, i = n.currentStyle && n.currentStyle[t],
            r = n.style;
        return i == null && r && (e = r[t]) && (i = e), ht.test(i) && (f = r.left, u = n.runtimeStyle && n.runtimeStyle.left, u && (n.runtimeStyle.left = n.currentStyle.left), r.left = t === "fontSize" ? "1em" : i, i = r.pixelLeft + "px", r.left = f, u && (n.runtimeStyle.left = u)), i === "" ? "auto" : i
    });
    l = gi || nr;
    i.each(["height", "width"], function (n, t) {
        i.cssHooks[t] = {
            get: function (n, r, u) {
                if (r) return n.offsetWidth !== 0 ? tr(n, t, u) : i.swap(n, cf, function () {
                    return tr(n, t, u)
                })
            },
            set: function (n, t) {
                return of.test(t) ? t + "px" : t
            }
        }
    });
    i.support.opacity || (i.cssHooks.opacity = {
        get: function (n, t) {
            return ff.test((t && n.currentStyle ? n.currentStyle.filter : n.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : t ? "1" : ""
        },
        set: function (n, t) {
            var r = n.style,
                u = n.currentStyle,
                e = i.isNumeric(t) ? "alpha(opacity=" + t * 100 + ")" : "",
                f = u && u.filter || r.filter || "";
            (r.zoom = 1, t >= 1 && i.trim(f.replace(st, "")) === "" && (r.removeAttribute("filter"), u && !u.filter)) || (r.filter = st.test(f) ? f.replace(st, e) : f + " " + e)
        }
    });
    i(function () {
        i.support.reliableMarginRight || (i.cssHooks.marginRight = {
            get: function (n, t) {
                return i.swap(n, {
                    display: "inline-block"
                }, function () {
                    return t ? l(n, "margin-right") : n.style.marginRight
                })
            }
        })
    });
    i.expr && i.expr.filters && (i.expr.filters.hidden = function (n) {
        var t = n.offsetWidth,
            r = n.offsetHeight;
        return t === 0 && r === 0 || !i.support.reliableHiddenOffsets && (n.style && n.style.display || i.css(n, "display")) === "none"
    }, i.expr.filters.visible = function (n) {
        return !i.expr.filters.hidden(n)
    });
    i.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (n, t) {
        i.cssHooks[n + t] = {
            expand: function (i) {
                for (var u = typeof i == "string" ? i.split(" ") : [i], f = {}, r = 0; r < 4; r++) f[n + o[r] + t] = u[r] || u[r - 2] || u[0];
                return f
            }
        }
    });
    var lf = /%20/g,
        af = /\[\]$/,
        ir = /\r?\n/g,
        vf = /#.*$/,
        yf = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        pf = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        wf = /^(?:GET|HEAD)$/,
        bf = /^\/\//,
        rr = /\?/,
        kf = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        df = /^(?:select|textarea)/i,
        ur = /\s+/,
        gf = /([?&])_=[^&]*/,
        fr = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
        er = i.fn.load,
        ct = {},
        or = {},
        s, h, sr = ["*/"] + ["*"];
    try {
        s = gr.href
    } catch (ee) {
        s = r.createElement("a");
        s.href = "";
        s = s.href
    }
    h = fr.exec(s.toLowerCase()) || [];
    i.fn.extend({
        load: function (n, r, u) {
            var f, e, o, s;
            return typeof n != "string" && er ? er.apply(this, arguments) : this.length ? (f = n.indexOf(" "), f >= 0 && (e = n.slice(f, n.length), n = n.slice(0, f)), o = "GET", r && (i.isFunction(r) ? (u = r, r = t) : typeof r == "object" && (r = i.param(r, i.ajaxSettings.traditional), o = "POST")), s = this, i.ajax({
                url: n,
                type: o,
                dataType: "html",
                data: r,
                complete: function (n, t, r) {
                    r = n.responseText;
                    n.isResolved() && (n.done(function (n) {
                        r = n
                    }), s.html(e ? i("<div>").append(r.replace(kf, "")).find(e) : r));
                    u && s.each(u, [r, t, n])
                }
            }), this) : this
        },
        serialize: function () {
            return i.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                return this.elements ? i.makeArray(this.elements) : this
            }).filter(function () {
                return this.name && !this.disabled && (this.checked || df.test(this.nodeName) || pf.test(this.type))
            }).map(function (n, t) {
                var r = i(this).val();
                return r == null ? null : i.isArray(r) ? i.map(r, function (n) {
                    return {
                        name: t.name,
                        value: n.replace(ir, "\r\n")
                    }
                }) : {
                        name: t.name,
                        value: r.replace(ir, "\r\n")
                    }
            }).get()
        }
    });
    i.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (n, t) {
        i.fn[t] = function (n) {
            return this.on(t, n)
        }
    });
    i.each(["get", "post"], function (n, r) {
        i[r] = function (n, u, f, e) {
            return i.isFunction(u) && (e = e || f, f = u, u = t), i.ajax({
                type: r,
                url: n,
                data: u,
                success: f,
                dataType: e
            })
        }
    });
    i.extend({
        getScript: function (n, r) {
            return i.get(n, t, r, "script")
        },
        getJSON: function (n, t, r) {
            return i.get(n, t, r, "json")
        },
        ajaxSetup: function (n, t) {
            return t ? cr(n, i.ajaxSettings) : (t = n, n = i.ajaxSettings), cr(n, t), n
        },
        ajaxSettings: {
            url: s,
            isLocal: /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/.test(h[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": sr
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": n.String,
                "text html": !0,
                "text json": i.parseJSON,
                "text xml": i.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: hr(ct),
        ajaxTransport: hr(or),
        ajax: function (n, r) {
            function w(n, r, h, l) {
                if (e !== 2) {
                    e = 2;
                    nt && clearTimeout(nt);
                    c = t;
                    d = l || "";
                    f.readyState = n > 0 ? 4 : 0;
                    var p, g, w, a = r,
                        ut = h ? ne(u, f, h) : t,
                        tt, it;
                    if (n >= 200 && n < 300 || n === 304)
                        if (u.ifModified && ((tt = f.getResponseHeader("Last-Modified")) && (i.lastModified[o] = tt), (it = f.getResponseHeader("Etag")) && (i.etag[o] = it)), n === 304) a = "notmodified", p = !0;
                        else try {
                            g = te(u, ut);
                            a = "success";
                            p = !0
                        } catch (ft) {
                            a = "parsererror";
                            w = ft
                        } else w = a, (!a || n) && (a = "error", n < 0 && (n = 0));
                    f.status = n;
                    f.statusText = "" + (r || a);
                    p ? k.resolveWith(s, [g, a, f]) : k.rejectWith(s, [f, a, w]);
                    f.statusCode(y);
                    y = t;
                    v && b.trigger("ajax" + (p ? "Success" : "Error"), [f, u, p ? g : w]);
                    rt.fireWith(s, [f, a]);
                    v && (b.trigger("ajaxComplete", [f, u]), --i.active || i.event.trigger("ajaxStop"))
                }
            }
            var tt, it;
            typeof n == "object" && (r = n, n = t);
            r = r || {};
            var u = i.ajaxSetup({}, r),
                s = u.context || u,
                b = s !== u && (s.nodeType || s instanceof i) ? i(s) : i.event,
                k = i.Deferred(),
                rt = i.Callbacks("once memory"),
                y = u.statusCode || {},
                o, ut = {},
                ft = {},
                d, p, c, nt, l, e = 0,
                v, a, f = {
                    readyState: 0,
                    setRequestHeader: function (n, t) {
                        if (!e) {
                            var i = n.toLowerCase();
                            n = ft[i] = ft[i] || n;
                            ut[n] = t
                        }
                        return this
                    },
                    getAllResponseHeaders: function () {
                        return e === 2 ? d : null
                    },
                    getResponseHeader: function (n) {
                        var i;
                        if (e === 2) {
                            if (!p)
                                for (p = {}; i = yf.exec(d);) p[i[1].toLowerCase()] = i[2];
                            i = p[n.toLowerCase()]
                        }
                        return i === t ? null : i
                    },
                    overrideMimeType: function (n) {
                        return e || (u.mimeType = n), this
                    },
                    abort: function (n) {
                        return n = n || "abort", c && c.abort(n), w(0, n), this
                    }
                };
            if (k.promise(f), f.success = f.done, f.error = f.fail, f.complete = rt.add, f.statusCode = function (n) {
                if (n) {
                    var t;
                    if (e < 2)
                        for (t in n) y[t] = [y[t], n[t]];
                    else t = n[f.status], f.then(t, t)
                }
                return this
            }, u.url = ((n || u.url) + "").replace(vf, "").replace(bf, h[1] + "//"), u.dataTypes = i.trim(u.dataType || "*").toLowerCase().split(ur), u.crossDomain == null && (l = fr.exec(u.url.toLowerCase()), u.crossDomain = !!(l && (l[1] != h[1] || l[2] != h[2] || (l[3] || (l[1] === "http:" ? 80 : 443)) != (h[3] || (h[1] === "http:" ? 80 : 443))))), u.data && u.processData && typeof u.data != "string" && (u.data = i.param(u.data, u.traditional)), g(ct, u, r, f), e === 2) return !1;
            v = u.global;
            u.type = u.type.toUpperCase();
            u.hasContent = !wf.test(u.type);
            v && i.active++ == 0 && i.event.trigger("ajaxStart");
            u.hasContent || (u.data && (u.url += (rr.test(u.url) ? "&" : "?") + u.data, delete u.data), o = u.url, u.cache === !1 && (tt = i.now(), it = u.url.replace(gf, "$1_=" + tt), u.url = it + (it === u.url ? (rr.test(u.url) ? "&" : "?") + "_=" + tt : "")));
            (u.data && u.hasContent && u.contentType !== !1 || r.contentType) && f.setRequestHeader("Content-Type", u.contentType);
            u.ifModified && (o = o || u.url, i.lastModified[o] && f.setRequestHeader("If-Modified-Since", i.lastModified[o]), i.etag[o] && f.setRequestHeader("If-None-Match", i.etag[o]));
            f.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + (u.dataTypes[0] !== "*" ? ", " + sr + "; q=0.01" : "") : u.accepts["*"]);
            for (a in u.headers) f.setRequestHeader(a, u.headers[a]);
            if (u.beforeSend && (u.beforeSend.call(s, f, u) === !1 || e === 2)) return f.abort(), !1;
            for (a in {
                success: 1,
                error: 1,
                complete: 1
            }) f[a](u[a]);
            if (c = g(or, u, r, f), c) {
                f.readyState = 1;
                v && b.trigger("ajaxSend", [f, u]);
                u.async && u.timeout > 0 && (nt = setTimeout(function () {
                    f.abort("timeout")
                }, u.timeout));
                try {
                    e = 1;
                    c.send(ut, w)
                } catch (et) {
                    if (e < 2) w(-1, et);
                    else throw et;
                }
            } else w(-1, "No Transport");
            return f
        },
        param: function (n, r) {
            var u = [],
                e = function (n, t) {
                    t = i.isFunction(t) ? t() : t;
                    u[u.length] = encodeURIComponent(n) + "=" + encodeURIComponent(t)
                },
                f;
            if (r === t && (r = i.ajaxSettings.traditional), i.isArray(n) || n.jquery && !i.isPlainObject(n)) i.each(n, function () {
                e(this.name, this.value)
            });
            else
                for (f in n) lt(f, n[f], r, e);
            return u.join("&").replace(lf, "+")
        }
    });
    i.extend({
        active: 0,
        lastModified: {},
        etag: {}
    });
    lr = i.now();
    p = /(\=)\?(&|$)|\?\?/i;
    i.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            return i.expando + "_" + lr++
        }
    });
    i.ajaxPrefilter("json jsonp", function (t, r, u) {
        var h = typeof t.data == "string" && /^application\/x\-www\-form\-urlencoded/.test(t.contentType);
        if (t.dataTypes[0] === "jsonp" || t.jsonp !== !1 && (p.test(t.url) || h && p.test(t.data))) {
            var o, f = t.jsonpCallback = i.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
                c = n[f],
                e = t.url,
                s = t.data,
                l = "$1" + f + "$2";
            return t.jsonp !== !1 && (e = e.replace(p, l), t.url === e && (h && (s = s.replace(p, l)), t.data === s && (e += (/\?/.test(e) ? "&" : "?") + t.jsonp + "=" + f))), t.url = e, t.data = s, n[f] = function (n) {
                o = [n]
            }, u.always(function () {
                n[f] = c;
                o && i.isFunction(c) && n[f](o[0])
            }), t.converters["script json"] = function () {
                return o || i.error(f + " was not called"), o[0]
            }, t.dataTypes[0] = "json", "script"
        }
    });
    i.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function (n) {
                return i.globalEval(n), n
            }
        }
    });
    i.ajaxPrefilter("script", function (n) {
        n.cache === t && (n.cache = !1);
        n.crossDomain && (n.type = "GET", n.global = !1)
    });
    i.ajaxTransport("script", function (n) {
        if (n.crossDomain) {
            var i, u = r.head || r.getElementsByTagName("head")[0] || r.documentElement;
            return {
                send: function (f, e) {
                    i = r.createElement("script");
                    i.async = "async";
                    n.scriptCharset && (i.charset = n.scriptCharset);
                    i.src = n.url;
                    i.onload = i.onreadystatechange = function (n, r) {
                        (r || !i.readyState || /loaded|complete/.test(i.readyState)) && (i.onload = i.onreadystatechange = null, u && i.parentNode && u.removeChild(i), i = t, r || e(200, "success"))
                    };
                    u.insertBefore(i, u.firstChild)
                },
                abort: function () {
                    if (i) i.onload(0, 1)
                }
            }
        }
    });
    nt = n.ActiveXObject ? function () {
        for (var n in a) a[n](0, 1)
    } : !1;
    ar = 0;
    i.ajaxSettings.xhr = n.ActiveXObject ? function () {
        return !this.isLocal && vr() || ie()
    } : vr,
        function (n) {
            i.extend(i.support, {
                ajax: !!n,
                cors: !!n && "withCredentials" in n
            })
        }(i.ajaxSettings.xhr());
    i.support.ajax && i.ajaxTransport(function (r) {
        if (!r.crossDomain || i.support.cors) {
            var u;
            return {
                send: function (f, e) {
                    var o = r.xhr(),
                        h, s;
                    if (r.username ? o.open(r.type, r.url, r.async, r.username, r.password) : o.open(r.type, r.url, r.async), r.xhrFields)
                        for (s in r.xhrFields) o[s] = r.xhrFields[s];
                    r.mimeType && o.overrideMimeType && o.overrideMimeType(r.mimeType);
                    r.crossDomain || f["X-Requested-With"] || (f["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (s in f) o.setRequestHeader(s, f[s])
                    } catch (c) { }
                    o.send(r.hasContent && r.data || null);
                    u = function (n, f) {
                        var s, v, y, c, l;
                        try {
                            if (u && (f || o.readyState === 4))
                                if (u = t, h && (o.onreadystatechange = i.noop, nt && delete a[h]), f) o.readyState !== 4 && o.abort();
                                else {
                                    s = o.status;
                                    y = o.getAllResponseHeaders();
                                    c = {};
                                    l = o.responseXML;
                                    l && l.documentElement && (c.xml = l);
                                    try {
                                        c.text = o.responseText
                                    } catch (n) { }
                                    try {
                                        v = o.statusText
                                    } catch (w) {
                                        v = ""
                                    }
                                    s || !r.isLocal || r.crossDomain ? s === 1223 && (s = 204) : s = c.text ? 200 : 404
                                }
                        } catch (p) {
                            f || e(-1, p)
                        }
                        c && e(s, v, c, y)
                    };
                    r.async && o.readyState !== 4 ? (h = ++ar, nt && (a || (a = {}, i(n).unload(nt)), a[h] = u), o.onreadystatechange = u) : u()
                },
                abort: function () {
                    u && u(0, 1)
                }
            }
        }
    });
    var at = {},
        f, v, re = /^(?:toggle|show|hide)$/,
        ue = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
        tt, it = [
            ["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
            ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
            ["opacity"]
        ],
        rt;
    i.fn.extend({
        show: function (n, t, r) {
            var u, e, f, o;
            if (n || n === 0) return this.animate(y("show", 3), n, t, r);
            for (f = 0, o = this.length; f < o; f++) u = this[f], u.style && (e = u.style.display, i._data(u, "olddisplay") || e !== "none" || (e = u.style.display = ""), (e !== "" || i.css(u, "display") !== "none") && i.contains(u.ownerDocument.documentElement, u) || i._data(u, "olddisplay", pr(u.nodeName)));
            for (f = 0; f < o; f++) u = this[f], u.style && (e = u.style.display, (e === "" || e === "none") && (u.style.display = i._data(u, "olddisplay") || ""));
            return this
        },
        hide: function (n, t, r) {
            if (n || n === 0) return this.animate(y("hide", 3), n, t, r);
            for (var f, e, u = 0, o = this.length; u < o; u++) f = this[u], f.style && (e = i.css(f, "display"), e === "none" || i._data(f, "olddisplay") || i._data(f, "olddisplay", e));
            for (u = 0; u < o; u++) this[u].style && (this[u].style.display = "none");
            return this
        },
        _toggle: i.fn.toggle,
        toggle: function (n, t, r) {
            var u = typeof n == "boolean";
            return i.isFunction(n) && i.isFunction(t) ? this._toggle.apply(this, arguments) : n == null || u ? this.each(function () {
                var t = u ? n : i(this).is(":hidden");
                i(this)[t ? "show" : "hide"]()
            }) : this.animate(y("toggle", 3), n, t, r), this
        },
        fadeTo: function (n, t, i, r) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({
                opacity: t
            }, n, i, r)
        },
        animate: function (n, t, r, u) {
            function e() {
                f.queue === !1 && i._mark(this);
                var e = i.extend({}, f),
                    w = this.nodeType === 1,
                    v = w && i(this).is(":hidden"),
                    r, u, t, o, y, p, h, s, c, l, a;
                e.animatedProperties = {};
                for (t in n)
                    if (r = i.camelCase(t), t !== r && (n[r] = n[t], delete n[t]), (y = i.cssHooks[r]) && "expand" in y) {
                        p = y.expand(n[r]);
                        delete n[r];
                        for (t in p) t in n || (n[t] = p[t])
                    }
                for (r in n) {
                    if (u = n[r], i.isArray(u) ? (e.animatedProperties[r] = u[1], u = n[r] = u[0]) : e.animatedProperties[r] = e.specialEasing && e.specialEasing[r] || e.easing || "swing", u === "hide" && v || u === "show" && !v) return e.complete.call(this);
                    w && (r === "height" || r === "width") && (e.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], i.css(this, "display") === "inline" && i.css(this, "float") === "none" && (i.support.inlineBlockNeedsLayout && pr(this.nodeName) !== "inline" ? this.style.zoom = 1 : this.style.display = "inline-block"))
                }
                e.overflow != null && (this.style.overflow = "hidden");
                for (t in n) o = new i.fx(this, e, t), u = n[t], re.test(u) ? (a = i._data(this, "toggle" + t) || (u === "toggle" ? v ? "show" : "hide" : 0), a ? (i._data(this, "toggle" + t, a === "show" ? "hide" : "show"), o[a]()) : o[u]()) : (h = ue.exec(u), s = o.cur(), h ? (c = parseFloat(h[2]), l = h[3] || (i.cssNumber[t] ? "" : "px"), l !== "px" && (i.style(this, t, (c || 1) + l), s = (c || 1) / o.cur() * s, i.style(this, t, s + l)), h[1] && (c = (h[1] === "-=" ? -1 : 1) * c + s), o.custom(s, c, l)) : o.custom(s, u, ""));
                return !0
            }
            var f = i.speed(t, r, u);
            return i.isEmptyObject(n) ? this.each(f.complete, [!1]) : (n = i.extend({}, n), f.queue === !1 ? this.each(e) : this.queue(f.queue, e))
        },
        stop: function (n, r, u) {
            return typeof n != "string" && (u = r, r = n, n = t), r && n !== !1 && this.queue(n || "fx", []), this.each(function () {
                function o(n, t, r) {
                    var f = t[r];
                    i.removeData(n, r, !0);
                    f.stop(u)
                }
                var t, e = !1,
                    f = i.timers,
                    r = i._data(this);
                if (u || i._unmark(!0, this), n == null)
                    for (t in r) r[t] && r[t].stop && t.indexOf(".run") === t.length - 4 && o(this, r, t);
                else r[t = n + ".run"] && r[t].stop && o(this, r, t);
                for (t = f.length; t--;) f[t].elem === this && (n == null || f[t].queue === n) && (u ? f[t](!0) : f[t].saveState(), e = !0, f.splice(t, 1));
                u && e || i.dequeue(this, n)
            })
        }
    });
    i.each({
        slideDown: y("show", 1),
        slideUp: y("hide", 1),
        slideToggle: y("toggle", 1),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (n, t) {
        i.fn[n] = function (n, i, r) {
            return this.animate(t, n, i, r)
        }
    });
    i.extend({
        speed: function (n, t, r) {
            var u = n && typeof n == "object" ? i.extend({}, n) : {
                complete: r || !r && t || i.isFunction(n) && n,
                duration: n,
                easing: r && t || t && !i.isFunction(t) && t
            };
            return u.duration = i.fx.off ? 0 : typeof u.duration == "number" ? u.duration : u.duration in i.fx.speeds ? i.fx.speeds[u.duration] : i.fx.speeds._default, (u.queue == null || u.queue === !0) && (u.queue = "fx"), u.old = u.complete, u.complete = function (n) {
                i.isFunction(u.old) && u.old.call(this);
                u.queue ? i.dequeue(this, u.queue) : n !== !1 && i._unmark(this)
            }, u
        },
        easing: {
            linear: function (n) {
                return n
            },
            swing: function (n) {
                return -Math.cos(n * Math.PI) / 2 + .5
            }
        },
        timers: [],
        fx: function (n, t, i) {
            this.options = t;
            this.elem = n;
            this.prop = i;
            t.orig = t.orig || {}
        }
    });
    i.fx.prototype = {
        update: function () {
            this.options.step && this.options.step.call(this.elem, this.now, this);
            (i.fx.step[this.prop] || i.fx.step._default)(this)
        },
        cur: function () {
            if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null)) return this.elem[this.prop];
            var t, n = i.css(this.elem, this.prop);
            return isNaN(t = parseFloat(n)) ? !n || n === "auto" ? 0 : n : t
        },
        custom: function (n, r, u) {
            function e(n) {
                return f.step(n)
            }
            var f = this,
                o = i.fx;
            this.startTime = rt || yr();
            this.end = r;
            this.now = this.start = n;
            this.pos = this.state = 0;
            this.unit = u || this.unit || (i.cssNumber[this.prop] ? "" : "px");
            e.queue = this.options.queue;
            e.elem = this.elem;
            e.saveState = function () {
                i._data(f.elem, "fxshow" + f.prop) === t && (f.options.hide ? i._data(f.elem, "fxshow" + f.prop, f.start) : f.options.show && i._data(f.elem, "fxshow" + f.prop, f.end))
            };
            e() && i.timers.push(e) && !tt && (tt = setInterval(o.tick, o.interval))
        },
        show: function () {
            var n = i._data(this.elem, "fxshow" + this.prop);
            this.options.orig[this.prop] = n || i.style(this.elem, this.prop);
            this.options.show = !0;
            n !== t ? this.custom(this.cur(), n) : this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur());
            i(this.elem).show()
        },
        hide: function () {
            this.options.orig[this.prop] = i._data(this.elem, "fxshow" + this.prop) || i.style(this.elem, this.prop);
            this.options.hide = !0;
            this.custom(this.cur(), 0)
        },
        step: function (n) {
            var r, f, e, o = rt || yr(),
                s = !0,
                u = this.elem,
                t = this.options;
            if (n || o >= t.duration + this.startTime) {
                this.now = this.end;
                this.pos = this.state = 1;
                this.update();
                t.animatedProperties[this.prop] = !0;
                for (r in t.animatedProperties) t.animatedProperties[r] !== !0 && (s = !1);
                if (s) {
                    if (t.overflow == null || i.support.shrinkWrapBlocks || i.each(["", "X", "Y"], function (n, i) {
                        u.style["overflow" + i] = t.overflow[n]
                    }), t.hide && i(u).hide(), t.hide || t.show)
                        for (r in t.animatedProperties) i.style(u, r, t.orig[r]), i.removeData(u, "fxshow" + r, !0), i.removeData(u, "toggle" + r, !0);
                    e = t.complete;
                    e && (t.complete = !1, e.call(u))
                }
                return !1
            }
            return t.duration == Infinity ? this.now = o : (f = o - this.startTime, this.state = f / t.duration, this.pos = i.easing[t.animatedProperties[this.prop]](this.state, f, 0, 1, t.duration), this.now = this.start + (this.end - this.start) * this.pos), this.update(), !0
        }
    };
    i.extend(i.fx, {
        tick: function () {
            for (var r, n = i.timers, t = 0; t < n.length; t++) r = n[t], r() || n[t] !== r || n.splice(t--, 1);
            n.length || i.fx.stop()
        },
        interval: 13,
        stop: function () {
            clearInterval(tt);
            tt = null
        },
        speeds: {
            slow: 600,
            fast: 200,
            _default: 400
        },
        step: {
            opacity: function (n) {
                i.style(n.elem, "opacity", n.now)
            },
            _default: function (n) {
                n.elem.style && n.elem.style[n.prop] != null ? n.elem.style[n.prop] = n.now + n.unit : n.elem[n.prop] = n.now
            }
        }
    });
    i.each(it.concat.apply([], it), function (n, t) {
        t.indexOf("margin") && (i.fx.step[t] = function (n) {
            i.style(n.elem, t, Math.max(0, n.now) + n.unit)
        })
    });
    i.expr && i.expr.filters && (i.expr.filters.animated = function (n) {
        return i.grep(i.timers, function (t) {
            return n === t.elem
        }).length
    });
    br = /^t(?:able|d|h)$/i;
    vt = /^(?:body|html)$/i;
    wr = "getBoundingClientRect" in r.documentElement ? function (n, t, r, u) {
        try {
            u = n.getBoundingClientRect()
        } catch (v) { }
        if (!u || !i.contains(r, n)) return u ? {
            top: u.top,
            left: u.left
        } : {
                top: 0,
                left: 0
            };
        var f = t.body,
            e = kr(t),
            o = r.clientTop || f.clientTop || 0,
            s = r.clientLeft || f.clientLeft || 0,
            h = e.pageYOffset || i.support.boxModel && r.scrollTop || f.scrollTop,
            c = e.pageXOffset || i.support.boxModel && r.scrollLeft || f.scrollLeft,
            l = u.top + h - o,
            a = u.left + c - s;
        return {
            top: l,
            left: a
        }
    } : function (n, t, r) {
        for (var u, c = n.offsetParent, l = n, o = t.body, h = t.defaultView, s = h ? h.getComputedStyle(n, null) : n.currentStyle, f = n.offsetTop, e = n.offsetLeft;
            (n = n.parentNode) && n !== o && n !== r;) {
            if (i.support.fixedPosition && s.position === "fixed") break;
            u = h ? h.getComputedStyle(n, null) : n.currentStyle;
            f -= n.scrollTop;
            e -= n.scrollLeft;
            n === c && (f += n.offsetTop, e += n.offsetLeft, !i.support.doesNotAddBorder || i.support.doesAddBorderForTableAndCells && br.test(n.nodeName) || (f += parseFloat(u.borderTopWidth) || 0, e += parseFloat(u.borderLeftWidth) || 0), l = c, c = n.offsetParent);
            i.support.subtractsBorderForOverflowNotVisible && u.overflow !== "visible" && (f += parseFloat(u.borderTopWidth) || 0, e += parseFloat(u.borderLeftWidth) || 0);
            s = u
        }
        return (s.position === "relative" || s.position === "static") && (f += o.offsetTop, e += o.offsetLeft), i.support.fixedPosition && s.position === "fixed" && (f += Math.max(r.scrollTop, o.scrollTop), e += Math.max(r.scrollLeft, o.scrollLeft)), {
            top: f,
            left: e
        }
    };
    i.fn.offset = function (n) {
        if (arguments.length) return n === t ? this : this.each(function (t) {
            i.offset.setOffset(this, n, t)
        });
        var r = this[0],
            u = r && r.ownerDocument;
        return u ? r === u.body ? i.offset.bodyOffset(r) : wr(r, u, u.documentElement) : null
    };
    i.offset = {
        bodyOffset: function (n) {
            var t = n.offsetTop,
                r = n.offsetLeft;
            return i.support.doesNotIncludeMarginInBodyOffset && (t += parseFloat(i.css(n, "marginTop")) || 0, r += parseFloat(i.css(n, "marginLeft")) || 0), {
                top: t,
                left: r
            }
        },
        setOffset: function (n, t, r) {
            var f = i.css(n, "position");
            f === "static" && (n.style.position = "relative");
            var e = i(n),
                o = e.offset(),
                l = i.css(n, "top"),
                a = i.css(n, "left"),
                v = (f === "absolute" || f === "fixed") && i.inArray("auto", [l, a]) > -1,
                u = {},
                s = {},
                h, c;
            v ? (s = e.position(), h = s.top, c = s.left) : (h = parseFloat(l) || 0, c = parseFloat(a) || 0);
            i.isFunction(t) && (t = t.call(n, r, o));
            t.top != null && (u.top = t.top - o.top + h);
            t.left != null && (u.left = t.left - o.left + c);
            "using" in t ? t.using.call(n, u) : e.css(u)
        }
    };
    i.fn.extend({
        position: function () {
            if (!this[0]) return null;
            var u = this[0],
                n = this.offsetParent(),
                t = this.offset(),
                r = vt.test(n[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : n.offset();
            return t.top -= parseFloat(i.css(u, "marginTop")) || 0, t.left -= parseFloat(i.css(u, "marginLeft")) || 0, r.top += parseFloat(i.css(n[0], "borderTopWidth")) || 0, r.left += parseFloat(i.css(n[0], "borderLeftWidth")) || 0, {
                top: t.top - r.top,
                left: t.left - r.left
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var n = this.offsetParent || r.body; n && !vt.test(n.nodeName) && i.css(n, "position") === "static";) n = n.offsetParent;
                return n
            })
        }
    });
    i.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (n, r) {
        var u = /Y/.test(r);
        i.fn[n] = function (f) {
            return i.access(this, function (n, f, e) {
                var o = kr(n);
                if (e === t) return o ? r in o ? o[r] : i.support.boxModel && o.document.documentElement[f] || o.document.body[f] : n[f];
                o ? o.scrollTo(u ? i(o).scrollLeft() : e, u ? e : i(o).scrollTop()) : n[f] = e
            }, n, f, arguments.length, null)
        }
    });
    i.each({
        Height: "height",
        Width: "width"
    }, function (n, r) {
        var u = "client" + n,
            f = "scroll" + n,
            e = "offset" + n;
        i.fn["inner" + n] = function () {
            var n = this[0];
            return n ? n.style ? parseFloat(i.css(n, r, "padding")) : this[r]() : null
        };
        i.fn["outer" + n] = function (n) {
            var t = this[0];
            return t ? t.style ? parseFloat(i.css(t, r, n ? "margin" : "border")) : this[r]() : null
        };
        i.fn[r] = function (n) {
            return i.access(this, function (n, r, o) {
                var s, h, c, l;
                if (i.isWindow(n)) return s = n.document, h = s.documentElement[u], i.support.boxModel && h || s.body && s.body[u] || h;
                if (n.nodeType === 9) return (s = n.documentElement, s[u] >= s[f]) ? s[u] : Math.max(n.body[f], s[f], n.body[e], s[e]);
                if (o === t) return c = i.css(n, r), l = parseFloat(c), i.isNumeric(l) ? l : c;
                i(n).css(r, o)
            }, r, n, arguments.length, null)
        }
    });
    n.jQuery = n.$ = i;
    typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function () {
        return i
    })
})(window),
    function (n, t, i) {
        function o(n) {
            throw n;
        }

        function s(n) {
            return function () {
                return n
            }
        }

        function h(h) {
            function v(n, t, i) {
                i && t !== c.k.r(n) && c.k.S(n, t);
                t !== c.k.r(n) && c.a.va(n, "change")
            }
            var c = "undefined" != typeof h ? h : {},
                y, l, a;
            c.b = function (n, t) {
                for (var i = n.split("."), r = c, u = 0; u < i.length - 1; u++) r = r[i[u]];
                r[i[i.length - 1]] = t
            };
            c.B = function (n, t, i) {
                n[t] = i
            };
            c.version = "2.1.0";
            c.b("version", c.version);
            c.a = new function () {
                function v(n, t) {
                    if ("input" !== c.a.o(n) || !n.type || "click" != t.toLowerCase()) return f;
                    var i = n.type;
                    return "checkbox" == i || "radio" == i
                }
                var k = /^(\s|\u00A0)+|(\s|\u00A0)+$/g,
                    h = {},
                    p = {},
                    y, l, a, w, b, s;
                h[/Firefox\/2/i.test(i.userAgent) ? "KeyboardEvent" : "UIEvents"] = ["keyup", "keydown", "keypress"];
                h.MouseEvents = "click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave".split(" ");
                for (y in h)
                    if (l = h[y], l.length)
                        for (a = 0, w = l.length; a < w; a++) p[l[a]] = y;
                return b = {
                    propertychange: r
                }, s = function () {
                    for (var n = 3, i = t.createElement("div"), r = i.getElementsByTagName("i"); i.innerHTML = "<!--[if gt IE " + ++n + "]><i><\/i><![endif]-->", r[0];);
                    return 4 < n ? n : e
                }(), {
                        Ca: ["authenticity_token", /^__RequestVerificationToken(_.*)?$/],
                        v: function (n, t) {
                            for (var i = 0, r = n.length; i < r; i++) t(n[i])
                        },
                        j: function (n, t) {
                            if ("function" == typeof Array.prototype.indexOf) return Array.prototype.indexOf.call(n, t);
                            for (var i = 0, r = n.length; i < r; i++)
                                if (n[i] === t) return i;
                            return -1
                        },
                        ab: function (n, t, i) {
                            for (var r = 0, f = n.length; r < f; r++)
                                if (t.call(i, n[r])) return n[r];
                            return u
                        },
                        ba: function (n, t) {
                            var i = c.a.j(n, t);
                            0 <= i && n.splice(i, 1)
                        },
                        za: function (n) {
                            for (var n = n || [], i = [], t = 0, r = n.length; t < r; t++) 0 > c.a.j(i, n[t]) && i.push(n[t]);
                            return i
                        },
                        T: function (n, t) {
                            for (var n = n || [], r = [], i = 0, u = n.length; i < u; i++) r.push(t(n[i]));
                            return r
                        },
                        aa: function (n, t) {
                            for (var n = n || [], r = [], i = 0, u = n.length; i < u; i++) t(n[i]) && r.push(n[i]);
                            return r
                        },
                        N: function (n, t) {
                            if (t instanceof Array) n.push.apply(n, t);
                            else
                                for (var i = 0, r = t.length; i < r; i++) n.push(t[i]);
                            return n
                        },
                        extend: function (n, t) {
                            if (t)
                                for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]);
                            return n
                        },
                        ga: function (n) {
                            for (; n.firstChild;) c.removeNode(n.firstChild)
                        },
                        Ab: function (n) {
                            for (var n = c.a.L(n), r = t.createElement("div"), i = 0, u = n.length; i < u; i++) c.F(n[i]), r.appendChild(n[i]);
                            return r
                        },
                        X: function (n, t) {
                            if (c.a.ga(n), t)
                                for (var i = 0, r = t.length; i < r; i++) n.appendChild(t[i])
                        },
                        Na: function (n, t) {
                            var r = n.nodeType ? [n] : n;
                            if (0 < r.length) {
                                for (var f = r[0], e = f.parentNode, i = 0, u = t.length; i < u; i++) e.insertBefore(t[i], f);
                                for (i = 0, u = r.length; i < u; i++) c.removeNode(r[i])
                            }
                        },
                        Pa: function (n, t) {
                            0 <= i.userAgent.indexOf("MSIE 6") ? n.setAttribute("selected", t) : n.selected = t
                        },
                        w: function (n) {
                            return (n || "").replace(k, "")
                        },
                        Ib: function (n, t) {
                            for (var r, u = [], f = (n || "").split(t), i = 0, e = f.length; i < e; i++) r = c.a.w(f[i]), "" !== r && u.push(r);
                            return u
                        },
                        Hb: function (n, t) {
                            return n = n || "", t.length > n.length ? f : n.substring(0, t.length) === t
                        },
                        eb: function (n, t) {
                            for (var i = "return (" + n + ")", r = 0; r < t; r++) i = "with(sc[" + r + "]) { " + i + " } ";
                            return new Function("sc", i)
                        },
                        kb: function (n, t) {
                            if (t.compareDocumentPosition) return 16 == (t.compareDocumentPosition(n) & 16);
                            for (; n != u;) {
                                if (n == t) return r;
                                n = n.parentNode
                            }
                            return f
                        },
                        fa: function (n) {
                            return c.a.kb(n, n.ownerDocument)
                        },
                        o: function (n) {
                            return n && n.tagName && n.tagName.toLowerCase()
                        },
                        n: function (n, t, i) {
                            var u = s && b[t],
                                e, i;
                            u || "undefined" == typeof jQuery ? !u && "function" == typeof n.addEventListener ? n.addEventListener(t, i, f) : "undefined" != typeof n.attachEvent ? n.attachEvent("on" + t, function (t) {
                                i.call(n, t)
                            }) : o(Error("Browser doesn't support addEventListener or attachEvent")) : (v(n, t) && (e = i, i = function (n, t) {
                                var i = this.checked;
                                t && (this.checked = t.fb !== r);
                                e.call(this, n);
                                this.checked = i
                            }), jQuery(n).bind(t, i))
                        },
                        va: function (i, u) {
                            if (i && i.nodeType || o(Error("element must be a DOM node when calling triggerEvent")), "undefined" != typeof jQuery) {
                                var e = [];
                                v(i, u) && e.push({
                                    fb: i.checked
                                });
                                jQuery(i).trigger(u, e)
                            } else "function" == typeof t.createEvent ? "function" == typeof i.dispatchEvent ? (e = t.createEvent(p[u] || "HTMLEvents"), e.initEvent(u, r, r, n, 0, 0, 0, 0, 0, f, f, f, f, 0, i), i.dispatchEvent(e)) : o(Error("The supplied element doesn't support dispatchEvent")) : "undefined" != typeof i.fireEvent ? (v(i, u) && (i.checked = i.checked !== r), i.fireEvent("on" + u)) : o(Error("Browser doesn't support triggering events"))
                        },
                        d: function (n) {
                            return c.la(n) ? n() : n
                        },
                        Ua: function (n, t, i) {
                            var u = (n.className || "").split(/\s+/),
                                r = 0 <= c.a.j(u, t);
                            if (i && !r) n.className += (u[0] ? " " : "") + t;
                            else if (r && !i) {
                                for (i = "", r = 0; r < u.length; r++) u[r] != t && (i += u[r] + " ");
                                n.className = c.a.w(i)
                            }
                        },
                        Qa: function (n, t) {
                            var i = c.a.d(t);
                            (i === u || i === e) && (i = "");
                            "innerText" in n ? n.innerText = i : n.textContent = i;
                            9 <= s && (n.style.display = n.style.display)
                        },
                        lb: function (n) {
                            if (9 <= s) {
                                var t = n.style.width;
                                n.style.width = 0;
                                n.style.width = t
                            }
                        },
                        Eb: function (n, t) {
                            for (var n = c.a.d(n), t = c.a.d(t), r = [], i = n; i <= t; i++) r.push(i);
                            return r
                        },
                        L: function (n) {
                            for (var i = [], t = 0, r = n.length; t < r; t++) i.push(n[t]);
                            return i
                        },
                        tb: 6 === s,
                        ub: 7 === s,
                        ja: s,
                        Da: function (n, t) {
                            for (var r = c.a.L(n.getElementsByTagName("input")).concat(c.a.L(n.getElementsByTagName("textarea"))), f = "string" == typeof t ? function (n) {
                                return n.name === t
                            } : function (n) {
                                return t.test(n.name)
                            }, u = [], i = r.length - 1; 0 <= i; i--) f(r[i]) && u.push(r[i]);
                            return u
                        },
                        Bb: function (t) {
                            return "string" == typeof t && (t = c.a.w(t)) ? n.JSON && n.JSON.parse ? n.JSON.parse(t) : new Function("return " + t)() : u
                        },
                        sa: function (n, t, i) {
                            return ("undefined" == typeof JSON || "undefined" == typeof JSON.stringify) && o(Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js")), JSON.stringify(c.a.d(n), t, i)
                        },
                        Cb: function (n, i, r) {
                            var r = r || {},
                                h = r.params || {},
                                l = r.includeFields || this.Ca,
                                a = n,
                                o, s, e, i, u, f;
                            if ("object" == typeof n && "form" === c.a.o(n))
                                for (a = n.action, o = l.length - 1; 0 <= o; o--)
                                    for (s = c.a.Da(n, l[o]), e = s.length - 1; 0 <= e; e--) h[s[e].name] = s[e].value;
                            i = c.a.d(i);
                            u = t.createElement("form");
                            u.style.display = "none";
                            u.action = a;
                            u.method = "post";
                            for (f in i) n = t.createElement("input"), n.name = f, n.value = c.a.sa(c.a.d(i[f])), u.appendChild(n);
                            for (f in h) n = t.createElement("input"), n.name = f, n.value = h[f], u.appendChild(n);
                            t.body.appendChild(u);
                            r.submitter ? r.submitter(u) : u.submit();
                            setTimeout(function () {
                                u.parentNode.removeChild(u)
                            }, 0)
                        }
                    }
            };
            c.b("utils", c.a);
            c.b("utils.arrayForEach", c.a.v);
            c.b("utils.arrayFirst", c.a.ab);
            c.b("utils.arrayFilter", c.a.aa);
            c.b("utils.arrayGetDistinctValues", c.a.za);
            c.b("utils.arrayIndexOf", c.a.j);
            c.b("utils.arrayMap", c.a.T);
            c.b("utils.arrayPushAll", c.a.N);
            c.b("utils.arrayRemoveItem", c.a.ba);
            c.b("utils.extend", c.a.extend);
            c.b("utils.fieldsIncludedWithJsonPost", c.a.Ca);
            c.b("utils.getFormFields", c.a.Da);
            c.b("utils.postJson", c.a.Cb);
            c.b("utils.parseJson", c.a.Bb);
            c.b("utils.registerEventHandler", c.a.n);
            c.b("utils.stringifyJson", c.a.sa);
            c.b("utils.range", c.a.Eb);
            c.b("utils.toggleDomNodeCssClass", c.a.Ua);
            c.b("utils.triggerEvent", c.a.va);
            c.b("utils.unwrapObservable", c.a.d);
            Function.prototype.bind || (Function.prototype.bind = function (n) {
                var i = this,
                    t = Array.prototype.slice.call(arguments),
                    n = t.shift();
                return function () {
                    return i.apply(n, t.concat(Array.prototype.slice.call(arguments)))
                }
            });
            c.a.f = new function () {
                var i = 0,
                    n = "__ko__" + (new Date).getTime(),
                    t = {};
                return {
                    get: function (n, t) {
                        var i = c.a.f.getAll(n, f);
                        return i === e ? e : i[t]
                    },
                    set: function (n, t, i) {
                        i === e && c.a.f.getAll(n, f) === e || (c.a.f.getAll(n, r)[t] = i)
                    },
                    getAll: function (r, u) {
                        var f = r[n];
                        if (!(f && "null" !== f)) {
                            if (!u) return;
                            f = r[n] = "ko" + i++;
                            t[f] = {}
                        }
                        return t[f]
                    },
                    clear: function (i) {
                        var r = i[n];
                        r && (delete t[r], i[n] = u)
                    }
                }
            };
            c.b("utils.domData", c.a.f);
            c.b("utils.domData.clear", c.a.f.clear);
            c.a.G = new function () {
                function n(n, t) {
                    var r = c.a.f.get(n, i);
                    return r === e && t && (r = [], c.a.f.set(n, i, r)), r
                }

                function t(i) {
                    var r = n(i, f),
                        e;
                    if (r)
                        for (r = r.slice(0), e = 0; e < r.length; e++) r[e](i);
                    if (c.a.f.clear(i), "function" == typeof jQuery && "function" == typeof jQuery.cleanData && jQuery.cleanData([i]), u[i.nodeType])
                        for (r = i.firstChild; i = r;) r = i.nextSibling, 8 === i.nodeType && t(i)
                }
                var i = "__ko_domNodeDisposal__" + (new Date).getTime(),
                    s = {
                        1: r,
                        8: r,
                        9: r
                    },
                    u = {
                        1: r,
                        9: r
                    };
                return {
                    wa: function (t, i) {
                        "function" != typeof i && o(Error("Callback must be a function"));
                        n(t, r).push(i)
                    },
                    Ma: function (t, r) {
                        var u = n(t, f);
                        u && (c.a.ba(u, r), 0 == u.length && c.a.f.set(t, i, e))
                    },
                    F: function (n) {
                        var i, n, r;
                        if (s[n.nodeType] && (t(n), u[n.nodeType]))
                            for (i = [], c.a.N(i, n.getElementsByTagName("*")), n = 0, r = i.length; n < r; n++) t(i[n])
                    },
                    removeNode: function (n) {
                        c.F(n);
                        n.parentNode && n.parentNode.removeChild(n)
                    }
                }
            };
            c.F = c.a.G.F;
            c.removeNode = c.a.G.removeNode;
            c.b("cleanNode", c.F);
            c.b("removeNode", c.removeNode);
            c.b("utils.domNodeDisposal", c.a.G);
            c.b("utils.domNodeDisposal.addDisposeCallback", c.a.G.wa);
            c.b("utils.domNodeDisposal.removeDisposeCallback", c.a.G.Ma),
                function () {
                    c.a.pa = function (i) {
                        var r, u;
                        if ("undefined" != typeof jQuery) {
                            if ((r = jQuery.clean([i])) && r[0]) {
                                for (i = r[0]; i.parentNode && 11 !== i.parentNode.nodeType;) i = i.parentNode;
                                i.parentNode && i.parentNode.removeChild(i)
                            }
                        } else {
                            for (u = c.a.w(i).toLowerCase(), r = t.createElement("div"), u = u.match(/^<(thead|tbody|tfoot)/) && [1, "<table>", "<\/table>"] || !u.indexOf("<tr") && [2, "<table><tbody>", "<\/tbody><\/table>"] || (!u.indexOf("<td") || !u.indexOf("<th")) && [3, "<table><tbody><tr>", "<\/tr><\/tbody><\/table>"] || [0, "", ""], i = "ignored<div>" + u[1] + i + u[2] + "<\/div>", "function" == typeof n.innerShiv ? r.appendChild(n.innerShiv(i)) : r.innerHTML = i; u[0]--;) r = r.lastChild;
                            r = c.a.L(r.lastChild.childNodes)
                        }
                        return r
                    };
                    c.a.Y = function (n, t) {
                        if (c.a.ga(n), t !== u && t !== e)
                            if ("string" != typeof t && (t = t.toString()), "undefined" != typeof jQuery) jQuery(n).html(t);
                            else
                                for (var r = c.a.pa(t), i = 0; i < r.length; i++) n.appendChild(r[i])
                    }
                }();
            c.b("utils.parseHtmlFragment", c.a.pa);
            c.b("utils.setHtml", c.a.Y);
            c.s = function () {
                function t() {
                    return (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1)
                }

                function i(n, t) {
                    var r;
                    if (n)
                        if (8 == n.nodeType) r = c.s.Ja(n.nodeValue), r != u && t.push({
                            jb: n,
                            yb: r
                        });
                        else if (1 == n.nodeType)
                            for (var r = 0, f = n.childNodes, e = f.length; r < e; r++) i(f[r], t)
                }
                var n = {};
                return {
                    na: function (i) {
                        "function" != typeof i && o(Error("You can only pass a function to ko.memoization.memoize()"));
                        var r = t() + t();
                        return n[r] = i, "<!--[ko_memo:" + r + "]-->"
                    },
                    Va: function (t, i) {
                        var f = n[t];
                        f === e && o(Error("Couldn't find any memo with ID " + t + ". Perhaps it's already been unmemoized."));
                        try {
                            return f.apply(u, i || []), r
                        } finally {
                            delete n[t]
                        }
                    },
                    Wa: function (n, t) {
                        var f = [],
                            u, o, r, e;
                        for (i(n, f), u = 0, o = f.length; u < o; u++) r = f[u].jb, e = [r], t && c.a.N(e, t), c.s.Va(f[u].yb, e), r.nodeValue = "", r.parentNode && r.parentNode.removeChild(r)
                    },
                    Ja: function (n) {
                        return (n = n.match(/^\[ko_memo\:(.*?)\]$/)) ? n[1] : u
                    }
                }
            }();
            c.b("memoization", c.s);
            c.b("memoization.memoize", c.s.na);
            c.b("memoization.unmemoize", c.s.Va);
            c.b("memoization.parseMemoText", c.s.Ja);
            c.b("memoization.unmemoizeDomNodeAndDescendants", c.s.Wa);
            c.Ba = {
                throttle: function (n, t) {
                    n.throttleEvaluation = t;
                    var i = u;
                    return c.h({
                        read: n,
                        write: function (r) {
                            clearTimeout(i);
                            i = setTimeout(function () {
                                n(r)
                            }, t)
                        }
                    })
                },
                notify: function (n, t) {
                    return n.equalityComparer = "always" == t ? s(f) : c.m.fn.equalityComparer, n
                }
            };
            c.b("extenders", c.Ba);
            c.Sa = function (n, t, i) {
                this.target = n;
                this.ca = t;
                this.ib = i;
                c.B(this, "dispose", this.A)
            };
            c.Sa.prototype.A = function () {
                this.sb = r;
                this.ib()
            };
            c.R = function () {
                this.u = {};
                c.a.extend(this, c.R.fn);
                c.B(this, "subscribe", this.ta);
                c.B(this, "extend", this.extend);
                c.B(this, "getSubscriptionsCount", this.ob)
            };
            c.R.fn = {
                ta: function (n, t, i) {
                    var i = i || "change",
                        n = t ? n.bind(t) : n,
                        r = new c.Sa(this, n, function () {
                            c.a.ba(this.u[i], r)
                        }.bind(this));
                    return this.u[i] || (this.u[i] = []), this.u[i].push(r), r
                },
                notifySubscribers: function (n, t) {
                    t = t || "change";
                    this.u[t] && c.a.v(this.u[t].slice(0), function (t) {
                        t && t.sb !== r && t.ca(n)
                    })
                },
                ob: function () {
                    var n = 0;
                    for (var t in this.u) this.u.hasOwnProperty(t) && (n += this.u[t].length);
                    return n
                },
                extend: function (n) {
                    var t = this,
                        i, r;
                    if (n)
                        for (i in n) r = c.Ba[i], "function" == typeof r && (t = r(t, n[i]));
                    return t
                }
            };
            c.Ga = function (n) {
                return "function" == typeof n.ta && "function" == typeof n.notifySubscribers
            };
            c.b("subscribable", c.R);
            c.b("isSubscribable", c.Ga);
            c.U = function () {
                var n = [];
                return {
                    bb: function (t) {
                        n.push({
                            ca: t,
                            Aa: []
                        })
                    },
                    end: function () {
                        n.pop()
                    },
                    La: function (t) {
                        if (c.Ga(t) || o(Error("Only subscribable things can act as dependencies")), 0 < n.length) {
                            var i = n[n.length - 1];
                            0 <= c.a.j(i.Aa, t) || (i.Aa.push(t), i.ca(t))
                        }
                    }
                }
            }();
            y = {
                undefined: r,
                boolean: r,
                number: r,
                string: r
            };
            c.m = function (n) {
                function t() {
                    return 0 < arguments.length ? (t.equalityComparer && t.equalityComparer(i, arguments[0]) || (t.I(), i = arguments[0], t.H()), this) : (c.U.La(t), i)
                }
                var i = n;
                return c.R.call(t), t.H = function () {
                    t.notifySubscribers(i)
                }, t.I = function () {
                    t.notifySubscribers(i, "beforeChange")
                }, c.a.extend(t, c.m.fn), c.B(t, "valueHasMutated", t.H), c.B(t, "valueWillMutate", t.I), t
            };
            c.m.fn = {
                equalityComparer: function (n, t) {
                    return n === u || typeof n in y ? n === t : f
                }
            };
            l = c.m.Db = "__ko_proto__";
            c.m.fn[l] = c.m;
            c.ia = function (n, t) {
                return n === u || n === e || n[l] === e ? f : n[l] === t ? r : c.ia(n[l], t)
            };
            c.la = function (n) {
                return c.ia(n, c.m)
            };
            c.Ha = function (n) {
                return "function" == typeof n && n[l] === c.m || "function" == typeof n && n[l] === c.h && n.pb ? r : f
            };
            c.b("observable", c.m);
            c.b("isObservable", c.la);
            c.b("isWriteableObservable", c.Ha);
            c.Q = function (n) {
                0 == arguments.length && (n = []);
                n === u || n === e || "length" in n || o(Error("The argument passed when initializing an observable array must be an array, or null, or undefined."));
                var t = c.m(n);
                return c.a.extend(t, c.Q.fn), t
            };
            c.Q.fn = {
                remove: function (n) {
                    for (var u, r = this(), i = [], f = "function" == typeof n ? n : function (t) {
                        return t === n
                    }, t = 0; t < r.length; t++) u = r[t], f(u) && (0 === i.length && this.I(), i.push(u), r.splice(t, 1), t--);
                    return i.length && this.H(), i
                },
                removeAll: function (n) {
                    if (n === e) {
                        var t = this(),
                            i = t.slice(0);
                        return this.I(), t.splice(0, t.length), this.H(), i
                    }
                    return n ? this.remove(function (t) {
                        return 0 <= c.a.j(n, t)
                    }) : []
                },
                destroy: function (n) {
                    var i = this(),
                        u = "function" == typeof n ? n : function (t) {
                            return t === n
                        },
                        t;
                    for (this.I(), t = i.length - 1; 0 <= t; t--) u(i[t]) && (i[t]._destroy = r);
                    this.H()
                },
                destroyAll: function (n) {
                    return n === e ? this.destroy(s(r)) : n ? this.destroy(function (t) {
                        return 0 <= c.a.j(n, t)
                    }) : []
                },
                indexOf: function (n) {
                    var t = this();
                    return c.a.j(t, n)
                },
                replace: function (n, t) {
                    var i = this.indexOf(n);
                    0 <= i && (this.I(), this()[i] = t, this.H())
                }
            };
            c.a.v("pop push reverse shift sort splice unshift".split(" "), function (n) {
                c.Q.fn[n] = function () {
                    var t = this();
                    return this.I(), t = t[n].apply(t, arguments), this.H(), t
                }
            });
            c.a.v(["slice"], function (n) {
                c.Q.fn[n] = function () {
                    var t = this();
                    return t[n].apply(t, arguments)
                }
            });
            c.b("observableArray", c.Q);
            c.h = function (n, t, i) {
                function tt() {
                    c.a.v(a, function (n) {
                        n.A()
                    });
                    a = []
                }

                function rt() {
                    var n = h.throttleEvaluation;
                    n && 0 <= n ? (clearTimeout(nt), nt = setTimeout(v, n)) : v()
                }

                function v() {
                    var n, u, i;
                    if (!k)
                        if (b && g()) p();
                        else {
                            k = r;
                            try {
                                for (n = c.a.T(a, function (n) {
                                    return n.target
                                }), c.U.bb(function (t) {
                                    var i;
                                    0 <= (i = c.a.j(n, t)) ? n[i] = e : a.push(t.ta(rt))
                                }), u = l.call(t), i = n.length - 1; 0 <= i; i--) n[i] && a.splice(i, 1)[0].A();
                                b = r;
                                h.notifySubscribers(y, "beforeChange");
                                y = u
                            } finally {
                                c.U.end()
                            }
                            h.notifySubscribers(y);
                            k = f
                        }
                }

                function h() {
                    if (0 < arguments.length) ut.apply(h, arguments);
                    else return b || v(), c.U.La(h), y
                }

                function ut() {
                    "function" == typeof d ? d.apply(t, arguments) : o(Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters."))
                }
                var y, b = f,
                    k = f,
                    l = n,
                    d, it, g, nt;
                l && "object" == typeof l ? (i = l, l = i.read) : (i = i || {}, l || (l = i.read));
                "function" != typeof l && o(Error("Pass a function that returns the value of the ko.computed"));
                d = i.write;
                t || (t = i.owner);
                var a = [],
                    p = tt,
                    w = "object" == typeof i.disposeWhenNodeIsRemoved ? i.disposeWhenNodeIsRemoved : u,
                    g = i.disposeWhen || s(f);
                return w && (p = function () {
                    c.a.G.Ma(w, arguments.callee);
                    tt()
                }, c.a.G.wa(w, p), it = g, g = function () {
                    return !c.a.fa(w) || it()
                }), nt = u, h.nb = function () {
                    return a.length
                }, h.pb = "function" == typeof i.write, h.A = function () {
                    p()
                }, c.R.call(h), c.a.extend(h, c.h.fn), i.deferEvaluation !== r && v(), c.B(h, "dispose", h.A), c.B(h, "getDependenciesCount", h.nb), h
            };
            c.rb = function (n) {
                return c.ia(n, c.h)
            };
            h = c.m.Db;
            c.h[h] = c.m;
            c.h.fn = {};
            c.h.fn[h] = c.h;
            c.b("dependentObservable", c.h);
            c.b("computed", c.h);
            c.b("isComputed", c.rb),
                function () {
                    function n(r, f, o) {
                        if (o = o || new i, r = f(r), !("object" == typeof r && r !== u && r !== e && !(r instanceof Date))) return r;
                        var s = r instanceof Array ? [] : {};
                        return o.save(r, s), t(r, function (t) {
                            var i = f(r[t]),
                                u;
                            switch (typeof i) {
                                case "boolean":
                                case "number":
                                case "string":
                                case "function":
                                    s[t] = i;
                                    break;
                                case "object":
                                case "undefined":
                                    u = o.get(i);
                                    s[t] = u !== e ? u : n(i, f, o)
                            }
                        }), s
                    }

                    function t(n, t) {
                        if (n instanceof Array) {
                            for (var i = 0; i < n.length; i++) t(i);
                            "function" == typeof n.toJSON && t("toJSON")
                        } else
                            for (i in n) t(i)
                    }

                    function i() {
                        var n = [],
                            t = [];
                        this.save = function (i, r) {
                            var u = c.a.j(n, i);
                            0 <= u ? t[u] = r : (n.push(i), t.push(r))
                        };
                        this.get = function (i) {
                            return i = c.a.j(n, i), 0 <= i ? t[i] : e
                        }
                    }
                    c.Ta = function (t) {
                        return 0 == arguments.length && o(Error("When calling ko.toJS, pass the object you want to convert.")), n(t, function (n) {
                            for (var t = 0; c.la(n) && 10 > t; t++) n = n();
                            return n
                        })
                    };
                    c.toJSON = function (n, t, i) {
                        return n = c.Ta(n), c.a.sa(n, t, i)
                    }
                }();
            c.b("toJS", c.Ta);
            c.b("toJSON", c.toJSON),
                function () {
                    c.k = {
                        r: function (n) {
                            switch (c.a.o(n)) {
                                case "option":
                                    return n.__ko__hasDomDataOptionValue__ === r ? c.a.f.get(n, c.c.options.oa) : n.getAttribute("value");
                                case "select":
                                    return 0 <= n.selectedIndex ? c.k.r(n.options[n.selectedIndex]) : e;
                                default:
                                    return n.value
                            }
                        },
                        S: function (n, t) {
                            switch (c.a.o(n)) {
                                case "option":
                                    switch (typeof t) {
                                        case "string":
                                            c.a.f.set(n, c.c.options.oa, e);
                                            "__ko__hasDomDataOptionValue__" in n && delete n.__ko__hasDomDataOptionValue__;
                                            n.value = t;
                                            break;
                                        default:
                                            c.a.f.set(n, c.c.options.oa, t);
                                            n.__ko__hasDomDataOptionValue__ = r;
                                            n.value = "number" == typeof t ? t : ""
                                    }
                                    break;
                                case "select":
                                    for (var i = n.options.length - 1; 0 <= i; i--)
                                        if (c.k.r(n.options[i]) == t) {
                                            n.selectedIndex = i;
                                            break
                                        }
                                    break;
                                default:
                                    (t === u || t === e) && (t = "");
                                    n.value = t
                            }
                        }
                    }
                }();
            c.b("selectExtensions", c.k);
            c.b("selectExtensions.readValue", c.k.r);
            c.b("selectExtensions.writeValue", c.k.S);
            c.g = function () {
                function n(n, i) {
                    for (var r = u; n != r;) r = n, n = n.replace(t, function (n, t) {
                        return i[t]
                    });
                    return n
                }
                var t = /\@ko_token_(\d+)\@/g,
                    i = /^[\_$a-z][\_$a-z0-9]*(\[.*?\])*(\.[\_$a-z][\_$a-z0-9]*(\[.*?\])*)*$/i,
                    e = ["true", "false"];
                return {
                    D: [],
                    W: function (t) {
                        var i = c.a.w(t),
                            f;
                        if (3 > i.length) return [];
                        "{" === i.charAt(0) && (i = i.substring(1, i.length - 1));
                        for (var t = [], e = u, o, r = 0; r < i.length; r++)
                            if (f = i.charAt(r), e === u) switch (f) {
                                case '"':
                                case "'":
                                case "/":
                                    e = r;
                                    o = f
                            } else if (f == o && "\\" !== i.charAt(r - 1)) {
                                f = i.substring(e, r + 1);
                                t.push(f);
                                var l = "@ko_token_" + (t.length - 1) + "@",
                                    i = i.substring(0, e) + l + i.substring(r + 1),
                                    r = r - (f.length - l.length),
                                    e = u
                            }
                        o = e = u;
                        for (var s = 0, h = u, r = 0; r < i.length; r++) {
                            if (f = i.charAt(r), e === u) switch (f) {
                                case "{":
                                    e = r;
                                    h = f;
                                    o = "}";
                                    break;
                                case "(":
                                    e = r;
                                    h = f;
                                    o = ")";
                                    break;
                                case "[":
                                    e = r;
                                    h = f;
                                    o = "]"
                            }
                            f === h ? s++ : f === o && (s-- , 0 === s && (f = i.substring(e, r + 1), t.push(f), l = "@ko_token_" + (t.length - 1) + "@", i = i.substring(0, e) + l + i.substring(r + 1), r -= f.length - l.length, e = u))
                        }
                        for (o = [], i = i.split(","), e = 0, r = i.length; e < r; e++) s = i[e], h = s.indexOf(":"), 0 < h && h < s.length - 1 ? (f = s.substring(h + 1), o.push({
                            key: n(s.substring(0, h), t),
                            value: n(f, t)
                        })) : o.push({
                            unknown: n(s, t)
                        });
                        return o
                    },
                    ka: function (n) {
                        for (var s, f, o = "string" == typeof n ? c.g.W(n) : n, r = [], n = [], t, h = 0; t = o[h]; h++)
                            if (0 < r.length && r.push(","), t.key) {
                                n: {
                                    s = t.key; f = c.a.w(s);
                                    switch (f.length && f.charAt(0)) {
                                        case "'":
                                        case '"':
                                            break n;
                                        default:
                                            s = "'" + f + "'"
                                    }
                                }
                                t = t.value; r.push(s); r.push(":"); r.push(t); f = c.a.w(t);
                                (0 <= c.a.j(e, c.a.w(f).toLowerCase()) ? 0 : f.match(i) !== u) && (0 < n.length && n.push(", "), n.push(s + " : function(__ko_value) { " + t + " = __ko_value; }"))
                            }
                            else t.unknown && r.push(t.unknown);
                        return o = r.join(""), 0 < n.length && (o = o + ", '_ko_property_writers' : { " + n.join("") + " } "), o
                    },
                    wb: function (n, t) {
                        for (var i = 0; i < n.length; i++)
                            if (c.a.w(n[i].key) == t) return r;
                        return f
                    },
                    $: function (n, t, i, r, u) {
                        n && c.Ha(n) ? u && n() === r || n(r) : (n = t()._ko_property_writers) && n[i] && n[i](r)
                    }
                }
            }();
            c.b("jsonExpressionRewriting", c.g);
            c.b("jsonExpressionRewriting.bindingRewriteValidators", c.g.D);
            c.b("jsonExpressionRewriting.parseObjectLiteral", c.g.W);
            c.b("jsonExpressionRewriting.insertPropertyAccessorsIntoJson", c.g.ka),
                function () {
                    function n(n) {
                        return 8 == n.nodeType && (f ? n.text : n.nodeValue).match(h)
                    }

                    function i(n) {
                        return 8 == n.nodeType && (f ? n.text : n.nodeValue).match(l)
                    }

                    function e(t, r) {
                        for (var f = t, e = 1, s = []; f = f.nextSibling;) {
                            if (i(f) && (e-- , 0 === e)) return s;
                            s.push(f);
                            n(f) && e++
                        }
                        return r || o(Error("Cannot find closing comment tag to match: " + t.nodeValue)), u
                    }

                    function s(n, t) {
                        var i = e(n, t);
                        return i ? 0 < i.length ? i[i.length - 1].nextSibling : n.nextSibling : u
                    }
                    var f = "<!--test-->" === t.createComment("test").text,
                        h = f ? /^<\!--\s*ko\s+(.*\:.*)\s*--\>$/ : /^\s*ko\s+(.*\:.*)\s*$/,
                        l = f ? /^<\!--\s*\/ko\s*--\>$/ : /^\s*\/ko\s*$/,
                        a = {
                            ul: r,
                            ol: r
                        };
                    c.e = {
                        C: {},
                        childNodes: function (t) {
                            return n(t) ? e(t) : t.childNodes
                        },
                        ha: function (t) {
                            if (n(t))
                                for (var t = c.e.childNodes(t), i = 0, r = t.length; i < r; i++) c.removeNode(t[i]);
                            else c.a.ga(t)
                        },
                        X: function (t, i) {
                            if (n(t)) {
                                c.e.ha(t);
                                for (var u = t.nextSibling, r = 0, f = i.length; r < f; r++) u.parentNode.insertBefore(i[r], u)
                            } else c.a.X(t, i)
                        },
                        Ka: function (t, i) {
                            n(t) ? t.parentNode.insertBefore(i, t.nextSibling) : t.firstChild ? t.insertBefore(i, t.firstChild) : t.appendChild(i)
                        },
                        Fa: function (t, i, r) {
                            n(t) ? t.parentNode.insertBefore(i, r.nextSibling) : r.nextSibling ? t.insertBefore(i, r.nextSibling) : t.appendChild(i)
                        },
                        firstChild: function (t) {
                            return n(t) ? !t.nextSibling || i(t.nextSibling) ? u : t.nextSibling : t.firstChild
                        },
                        nextSibling: function (t) {
                            return n(t) && (t = s(t)), t.nextSibling && i(t.nextSibling) ? u : t.nextSibling
                        },
                        Xa: function (t) {
                            return (t = n(t)) ? t[1] : u
                        },
                        Ia: function (t) {
                            var h, f, e, o;
                            if (a[c.a.o(t)] && (h = t.firstChild, h))
                                do
                                    if (1 === h.nodeType) {
                                        if (f = h.firstChild, e = u, f)
                                            do e ? e.push(f) : n(f) ? (o = s(f, r), o ? f = o : e = [f]) : i(f) && (e = [f]); while (f = f.nextSibling);
                                        if (f = e)
                                            for (e = h.nextSibling, o = 0; o < f.length; o++) e ? t.insertBefore(f[o], e) : t.appendChild(f[o])
                                    }
                                while (h = h.nextSibling)
                        }
                    }
                }();
            c.b("virtualElements", c.e);
            c.b("virtualElements.allowedBindings", c.e.C);
            c.b("virtualElements.emptyNode", c.e.ha);
            c.b("virtualElements.insertAfter", c.e.Fa);
            c.b("virtualElements.prepend", c.e.Ka);
            c.b("virtualElements.setDomNodeChildren", c.e.X),
                function () {
                    c.J = function () {
                        this.cb = {}
                    };
                    c.a.extend(c.J.prototype, {
                        nodeHasBindings: function (n) {
                            switch (n.nodeType) {
                                case 1:
                                    return n.getAttribute("data-bind") != u;
                                case 8:
                                    return c.e.Xa(n) != u;
                                default:
                                    return f
                            }
                        },
                        getBindings: function (n, t) {
                            var i = this.getBindingsString(n, t);
                            return i ? this.parseBindingsString(i, t) : u
                        },
                        getBindingsString: function (n) {
                            switch (n.nodeType) {
                                case 1:
                                    return n.getAttribute("data-bind");
                                case 8:
                                    return c.e.Xa(n);
                                default:
                                    return u
                            }
                        },
                        parseBindingsString: function (n, t) {
                            var h;
                            try {
                                var i = t.$data,
                                    i = "object" == typeof i && i != u ? [i, t] : [t],
                                    f = i.length,
                                    e = this.cb,
                                    s = f + "_" + n,
                                    r;
                                return (r = e[s]) || (h = " { " + c.g.ka(n) + " } ", r = e[s] = c.a.eb(h, f)), r(i)
                            } catch (l) {
                                o(Error("Unable to parse bindings.\nMessage: " + l + ";\nBindings value: " + n))
                            }
                        }
                    });
                    c.J.instance = new c.J
                }();
            c.b("bindingProvider", c.J),
                function () {
                    function t(n, t, r) {
                        for (var u = c.e.firstChild(t); t = u;) u = c.e.nextSibling(t), i(n, t, r)
                    }

                    function i(n, i, e) {
                        var s = r,
                            o = 1 === i.nodeType;
                        o && c.e.Ia(i);
                        (o && e || c.J.instance.nodeHasBindings(i)) && (s = f(i, u, n, e).Gb);
                        s && t(n, i, !o)
                    }

                    function f(n, t, i, r) {
                        function l(n) {
                            return function () {
                                return f[n]
                            }
                        }

                        function a() {
                            return f
                        }
                        var s = 0,
                            f, h;
                        return c.h(function () {
                            var y = i && i instanceof c.z ? i : new c.z(c.a.d(i)),
                                p = y.$data,
                                u, v;
                            if (r && c.Ra(n, y), f = ("function" == typeof t ? t() : t) || c.J.instance.getBindings(n, y)) {
                                if (0 === s) {
                                    s = 1;
                                    for (u in f) v = c.c[u], v && 8 === n.nodeType && !c.e.C[u] && o(Error("The binding '" + u + "' cannot be used with virtual elements")), v && "function" == typeof v.init && (v = v.init(n, l(u), a, p, y)) && v.controlsDescendantBindings && (h !== e && o(Error("Multiple bindings (" + h + " and " + u + ") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.")), h = u);
                                    s = 2
                                }
                                if (2 === s)
                                    for (u in f) (v = c.c[u]) && "function" == typeof v.update && v.update(n, l(u), a, p, y)
                            }
                        }, u, {
                                disposeWhenNodeIsRemoved: n
                            }), {
                                Gb: h === e
                            }
                    }
                    c.c = {};
                    c.z = function (n, t) {
                        t ? (c.a.extend(this, t), this.$parentContext = t, this.$parent = t.$data, this.$parents = (t.$parents || []).slice(0), this.$parents.unshift(this.$parent)) : (this.$parents = [], this.$root = n);
                        this.$data = n
                    };
                    c.z.prototype.createChildContext = function (n) {
                        return new c.z(n, this)
                    };
                    c.z.prototype.extend = function (n) {
                        var t = c.a.extend(new c.z, this);
                        return c.a.extend(t, n)
                    };
                    c.Ra = function (n, t) {
                        if (2 == arguments.length) c.a.f.set(n, "__ko_bindingContext__", t);
                        else return c.a.f.get(n, "__ko_bindingContext__")
                    };
                    c.ya = function (n, t, i) {
                        return 1 === n.nodeType && c.e.Ia(n), f(n, t, i, r)
                    };
                    c.Ya = function (n, i) {
                        (1 === i.nodeType || 8 === i.nodeType) && t(n, i, r)
                    };
                    c.xa = function (t, u) {
                        u && 1 !== u.nodeType && 8 !== u.nodeType && o(Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node"));
                        u = u || n.document.body;
                        i(t, u, r)
                    };
                    c.ea = function (n) {
                        switch (n.nodeType) {
                            case 1:
                            case 8:
                                var t = c.Ra(n);
                                if (t) return t;
                                if (n.parentNode) return c.ea(n.parentNode)
                        }
                    };
                    c.hb = function (n) {
                        return (n = c.ea(n)) ? n.$data : e
                    };
                    c.b("bindingHandlers", c.c);
                    c.b("applyBindings", c.xa);
                    c.b("applyBindingsToDescendants", c.Ya);
                    c.b("applyBindingsToNode", c.ya);
                    c.b("contextFor", c.ea);
                    c.b("dataFor", c.hb)
                }();
            c.a.v(["click"], function (n) {
                c.c[n] = {
                    init: function (t, i, r, u) {
                        return c.c.event.init.call(this, t, function () {
                            var t = {};
                            return t[n] = i(), t
                        }, r, u)
                    }
                }
            });
            c.c.event = {
                init: function (n, t, i, u) {
                    var e = t() || {};
                    for (var o in e) (function () {
                        var e = o;
                        "string" == typeof e && c.a.n(n, e, function (n) {
                            var s, h = t()[e],
                                l, o;
                            if (h) {
                                l = i();
                                try {
                                    o = c.a.L(arguments);
                                    o.unshift(u);
                                    s = h.apply(u, o)
                                } finally {
                                    s !== r && (n.preventDefault ? n.preventDefault() : n.returnValue = f)
                                }
                                l[e + "Bubble"] === f && (n.cancelBubble = r, n.stopPropagation && n.stopPropagation())
                            }
                        })
                    })()
                }
            };
            c.c.submit = {
                init: function (n, t, i, u) {
                    "function" != typeof t() && o(Error("The value for a submit binding must be a function"));
                    c.a.n(n, "submit", function (i) {
                        var e, o = t();
                        try {
                            e = o.call(u, n)
                        } finally {
                            e !== r && (i.preventDefault ? i.preventDefault() : i.returnValue = f)
                        }
                    })
                }
            };
            c.c.visible = {
                update: function (n, t) {
                    var i = c.a.d(t()),
                        r = "none" != n.style.display;
                    i && !r ? n.style.display = "" : !i && r && (n.style.display = "none")
                }
            };
            c.c.enable = {
                update: function (n, t) {
                    var i = c.a.d(t());
                    i && n.disabled ? n.removeAttribute("disabled") : !i && !n.disabled && (n.disabled = r)
                }
            };
            c.c.disable = {
                update: function (n, t) {
                    c.c.enable.update(n, function () {
                        return !c.a.d(t())
                    })
                }
            };
            c.c.value = {
                init: function (n, t, i) {
                    function s() {
                        var u = t(),
                            f = c.k.r(n);
                        c.g.$(u, i, "value", f, r)
                    }
                    var u = ["change"],
                        e = i().valueUpdate,
                        o;
                    e && ("string" == typeof e && (e = [e]), c.a.N(u, e), u = c.a.za(u));
                    c.a.ja && "input" == n.tagName.toLowerCase() && "text" == n.type && "off" != n.autocomplete && (!n.form || "off" != n.form.autocomplete) && -1 == c.a.j(u, "propertychange") && (o = f, c.a.n(n, "propertychange", function () {
                        o = r
                    }), c.a.n(n, "blur", function () {
                        o && (o = f, s())
                    }));
                    c.a.v(u, function (t) {
                        var i = s;
                        c.a.Hb(t, "after") && (i = function () {
                            setTimeout(s, 0)
                        }, t = t.substring(5));
                        c.a.n(n, t, i)
                    })
                },
                update: function (n, t) {
                    var e = "select" === c.a.o(n),
                        u = c.a.d(t()),
                        i = c.k.r(n),
                        o = u != i;
                    0 === u && 0 !== i && "0" !== i && (o = r);
                    o && (i = function () {
                        c.k.S(n, u)
                    }, i(), e && setTimeout(i, 0));
                    e && 0 < n.length && v(n, u, f)
                }
            };
            c.c.options = {
                update: function (n, i, f) {
                    var h, i, y, a, l;
                    "select" !== c.a.o(n) && o(Error("options binding applies only to SELECT elements"));
                    for (var p = 0 == n.length, w = c.a.T(c.a.aa(n.childNodes, function (n) {
                        return n.tagName && "option" === c.a.o(n) && n.selected
                    }), function (n) {
                        return c.k.r(n) || n.innerText || n.textContent
                    }), b = n.scrollTop, s = c.a.d(i()); 0 < n.length;) c.F(n.options[0]), n.remove(0);
                    if (s) {
                        for (f = f(), "number" != typeof s.length && (s = [s]), f.optionsCaption && (h = t.createElement("option"), c.a.Y(h, f.optionsCaption), c.k.S(h, e), n.appendChild(h)), i = 0, y = s.length; i < y; i++) {
                            var h = t.createElement("option"),
                                l = "string" == typeof f.optionsValue ? s[i][f.optionsValue] : s[i],
                                l = c.a.d(l);
                            c.k.S(h, l);
                            a = f.optionsText;
                            l = "function" == typeof a ? a(s[i]) : "string" == typeof a ? s[i][a] : l;
                            (l === u || l === e) && (l = "");
                            c.a.Qa(h, l);
                            n.appendChild(h)
                        }
                        for (s = n.getElementsByTagName("option"), i = h = 0, y = s.length; i < y; i++) 0 <= c.a.j(w, c.k.r(s[i])) && (c.a.Pa(s[i], r), h++);
                        n.scrollTop = b;
                        p && "value" in f && v(n, c.a.d(f.value), r);
                        c.a.lb(n)
                    }
                }
            };
            c.c.options.oa = "__ko.optionValueDomData__";
            c.c.selectedOptions = {
                Ea: function (n) {
                    for (var t, u, i = [], n = n.childNodes, r = 0, f = n.length; r < f; r++) t = n[r], u = c.a.o(t), "option" == u && t.selected ? i.push(c.k.r(t)) : "optgroup" == u && (t = c.c.selectedOptions.Ea(t), Array.prototype.splice.apply(i, [i.length, 0].concat(t)));
                    return i
                },
                init: function (n, t, i) {
                    c.a.n(n, "change", function () {
                        var n = t(),
                            r = c.c.selectedOptions.Ea(this);
                        c.g.$(n, i, "value", r)
                    })
                },
                update: function (n, t) {
                    var i, r;
                    if ("select" != c.a.o(n) && o(Error("values binding applies only to SELECT elements")), i = c.a.d(t()), i && "number" == typeof i.length)
                        for (var f = n.childNodes, u = 0, e = f.length; u < e; u++) r = f[u], "option" === c.a.o(r) && c.a.Pa(r, 0 <= c.a.j(i, c.k.r(r)))
                }
            };
            c.c.text = {
                update: function (n, t) {
                    c.a.Qa(n, t())
                }
            };
            c.c.html = {
                init: function () {
                    return {
                        controlsDescendantBindings: r
                    }
                },
                update: function (n, t) {
                    var i = c.a.d(t());
                    c.a.Y(n, i)
                }
            };
            c.c.css = {
                update: function (n, t) {
                    var r = c.a.d(t() || {}),
                        i, u;
                    for (i in r) "string" == typeof i && (u = c.a.d(r[i]), c.a.Ua(n, i, u))
                }
            };
            c.c.style = {
                update: function (n, t) {
                    var r = c.a.d(t() || {}),
                        i, u;
                    for (i in r) "string" == typeof i && (u = c.a.d(r[i]), n.style[i] = u || "")
                }
            };
            c.c.uniqueName = {
                init: function (n, i) {
                    i() && (n.name = "ko_unique_" + ++c.c.uniqueName.gb, (c.a.tb || c.a.ub) && n.mergeAttributes(t.createElement("<input name='" + n.name + "'/>"), f))
                }
            };
            c.c.uniqueName.gb = 0;
            c.c.checked = {
                init: function (n, t, i) {
                    c.a.n(n, "click", function () {
                        var u, f;
                        if ("checkbox" == n.type) u = n.checked;
                        else if ("radio" == n.type && n.checked) u = n.value;
                        else return;
                        f = t();
                        "checkbox" == n.type && c.a.d(f) instanceof Array ? (u = c.a.j(c.a.d(f), n.value), n.checked && 0 > u ? f.push(n.value) : !n.checked && 0 <= u && f.splice(u, 1)) : c.g.$(f, i, "checked", u, r)
                    });
                    "radio" != n.type || n.name || c.c.uniqueName.init(n, s(r))
                },
                update: function (n, t) {
                    var i = c.a.d(t());
                    "checkbox" == n.type ? n.checked = i instanceof Array ? 0 <= c.a.j(i, n.value) : i : "radio" == n.type && (n.checked = n.value == i)
                }
            };
            a = {
                "class": "className",
                "for": "htmlFor"
            };
            c.c.attr = {
                update: function (n, t) {
                    var s = c.a.d(t()) || {},
                        i, r, o;
                    for (i in s) "string" == typeof i && (r = c.a.d(s[i]), o = r === f || r === u || r === e, o && n.removeAttribute(i), 8 >= c.a.ja && i in a ? (i = a[i], o ? n.removeAttribute(i) : n[i] = r) : o || n.setAttribute(i, r.toString()))
                }
            };
            c.c.hasfocus = {
                init: function (n, t, i) {
                    function u(n) {
                        var u = t();
                        c.g.$(u, i, "hasfocus", n, r)
                    }
                    c.a.n(n, "focus", function () {
                        u(r)
                    });
                    c.a.n(n, "focusin", function () {
                        u(r)
                    });
                    c.a.n(n, "blur", function () {
                        u(f)
                    });
                    c.a.n(n, "focusout", function () {
                        u(f)
                    })
                },
                update: function (n, t) {
                    var i = c.a.d(t());
                    i ? n.focus() : n.blur();
                    c.a.va(n, i ? "focusin" : "focusout")
                }
            };
            c.c["with"] = {
                p: function (n) {
                    return function () {
                        var t = n();
                        return {
                            "if": t,
                            data: t,
                            templateEngine: c.q.K
                        }
                    }
                },
                init: function (n, t) {
                    return c.c.template.init(n, c.c["with"].p(t))
                },
                update: function (n, t, i, r, u) {
                    return c.c.template.update(n, c.c["with"].p(t), i, r, u)
                }
            };
            c.g.D["with"] = f;
            c.e.C["with"] = r;
            c.c["if"] = {
                p: function (n) {
                    return function () {
                        return {
                            "if": n(),
                            templateEngine: c.q.K
                        }
                    }
                },
                init: function (n, t) {
                    return c.c.template.init(n, c.c["if"].p(t))
                },
                update: function (n, t, i, r, u) {
                    return c.c.template.update(n, c.c["if"].p(t), i, r, u)
                }
            };
            c.g.D["if"] = f;
            c.e.C["if"] = r;
            c.c.ifnot = {
                p: function (n) {
                    return function () {
                        return {
                            ifnot: n(),
                            templateEngine: c.q.K
                        }
                    }
                },
                init: function (n, t) {
                    return c.c.template.init(n, c.c.ifnot.p(t))
                },
                update: function (n, t, i, r, u) {
                    return c.c.template.update(n, c.c.ifnot.p(t), i, r, u)
                }
            };
            c.g.D.ifnot = f;
            c.e.C.ifnot = r;
            c.c.foreach = {
                p: function (n) {
                    return function () {
                        var t = c.a.d(n());
                        return !t || "number" == typeof t.length ? {
                            foreach: t,
                            templateEngine: c.q.K
                        } : {
                                foreach: t.data,
                                includeDestroyed: t.includeDestroyed,
                                afterAdd: t.afterAdd,
                                beforeRemove: t.beforeRemove,
                                afterRender: t.afterRender,
                                templateEngine: c.q.K
                            }
                    }
                },
                init: function (n, t) {
                    return c.c.template.init(n, c.c.foreach.p(t))
                },
                update: function (n, t, i, r, u) {
                    return c.c.template.update(n, c.c.foreach.p(t), i, r, u)
                }
            };
            c.g.D.foreach = f;
            c.e.C.foreach = r;
            c.t = function () { };
            c.t.prototype.renderTemplateSource = function () {
                o(Error("Override renderTemplateSource"))
            };
            c.t.prototype.createJavaScriptEvaluatorBlock = function () {
                o(Error("Override createJavaScriptEvaluatorBlock"))
            };
            c.t.prototype.makeTemplateSource = function (n, i) {
                if ("string" == typeof n) {
                    var i = i || t,
                        r = i.getElementById(n);
                    return r || o(Error("Cannot find template with ID " + n)), new c.l.i(r)
                }
                if (1 == n.nodeType || 8 == n.nodeType) return new c.l.M(n);
                o(Error("Unknown template type: " + n))
            };
            c.t.prototype.renderTemplate = function (n, t, i, r) {
                return this.renderTemplateSource(this.makeTemplateSource(n, r), t, i)
            };
            c.t.prototype.isTemplateRewritten = function (n, i) {
                return this.allowTemplateRewriting === f || !(i && i != t) && this.V && this.V[n] ? r : this.makeTemplateSource(n, i).data("isRewritten")
            };
            c.t.prototype.rewriteTemplate = function (n, i, u) {
                var f = this.makeTemplateSource(n, u),
                    i = i(f.text());
                f.text(i);
                f.data("isRewritten", r);
                u && u != t || "string" != typeof n || (this.V = this.V || {}, this.V[n] = r)
            };
            c.b("templateEngine", c.t);
            c.Z = function () {
                function n(n, t, i) {
                    for (var r, f, n = c.g.W(n), e = c.g.D, u = 0; u < n.length; u++) r = n[u].key, e.hasOwnProperty(r) && (f = e[r], "function" == typeof f ? (r = f(n[u].value)) && o(Error(r)) : f || o(Error("This template engine does not support the '" + r + "' binding within its templates")));
                    return n = "ko.templateRewriting.applyMemoizedBindingsToNextSibling(function() {             return (function() { return { " + c.g.ka(n) + " } })()         })", i.createJavaScriptEvaluatorBlock(n) + t
                }
                var t = /(<[a-z]+\d*(\s+(?!data-bind=)[a-z0-9\-]+(=(\"[^\"]*\"|\'[^\']*\'))?)*\s+)data-bind=(["'])([\s\S]*?)\5/gi,
                    i = /<\!--\s*ko\b\s*([\s\S]*?)\s*--\>/g;
                return {
                    mb: function (n, t, i) {
                        t.isTemplateRewritten(n, i) || t.rewriteTemplate(n, function (n) {
                            return c.Z.zb(n, t)
                        }, i)
                    },
                    zb: function (r, u) {
                        return r.replace(t, function (t, i, r, f, e, o, s) {
                            return n(s, i, u)
                        }).replace(i, function (t, i) {
                            return n(i, "<!-- ko -->", u)
                        })
                    },
                    Za: function (n) {
                        return c.s.na(function (t, i) {
                            t.nextSibling && c.ya(t.nextSibling, n, i)
                        })
                    }
                }
            }();
            c.b("templateRewriting", c.Z);
            c.b("templateRewriting.applyMemoizedBindingsToNextSibling", c.Z.Za),
                function () {
                    c.l = {};
                    c.l.i = function (n) {
                        this.i = n
                    };
                    c.l.i.prototype.text = function () {
                        var n = c.a.o(this.i),
                            n = "script" === n ? "text" : "textarea" === n ? "value" : "innerHTML",
                            t;
                        if (0 == arguments.length) return this.i[n];
                        t = arguments[0];
                        "innerHTML" === n ? c.a.Y(this.i, t) : this.i[n] = t
                    };
                    c.l.i.prototype.data = function (n) {
                        if (1 === arguments.length) return c.a.f.get(this.i, "templateSourceData_" + n);
                        c.a.f.set(this.i, "templateSourceData_" + n, arguments[1])
                    };
                    c.l.M = function (n) {
                        this.i = n
                    };
                    c.l.M.prototype = new c.l.i;
                    c.l.M.prototype.text = function () {
                        if (0 == arguments.length) {
                            var n = c.a.f.get(this.i, "__ko_anon_template__") || {};
                            return n.ua === e && n.da && (n.ua = n.da.innerHTML), n.ua
                        }
                        c.a.f.set(this.i, "__ko_anon_template__", {
                            ua: arguments[0]
                        })
                    };
                    c.l.i.prototype.nodes = function () {
                        if (0 == arguments.length) return (c.a.f.get(this.i, "__ko_anon_template__") || {}).da;
                        c.a.f.set(this.i, "__ko_anon_template__", {
                            da: arguments[0]
                        })
                    };
                    c.b("templateSources", c.l);
                    c.b("templateSources.domElement", c.l.i);
                    c.b("templateSources.anonymousTemplate", c.l.M)
                }(),
                function () {
                    function i(n, t, i) {
                        for (var r, t = c.e.nextSibling(t); n && (r = n) !== t;) n = c.e.nextSibling(r), (1 === r.nodeType || 8 === r.nodeType) && i(r)
                    }

                    function s(n, t) {
                        if (n.length) {
                            var r = n[0],
                                u = n[n.length - 1];
                            i(r, u, function (n) {
                                c.xa(t, n)
                            });
                            i(r, u, function (n) {
                                c.s.Wa(n, [t])
                            })
                        }
                    }

                    function n(n) {
                        return n.nodeType ? n : 0 < n.length ? n[0] : u
                    }

                    function h(i, u, e, h, l) {
                        var l = l || {},
                            a = i && n(i),
                            a = a && a.ownerDocument,
                            v = l.templateEngine || t;
                        c.Z.mb(e, v, a);
                        e = v.renderTemplate(e, h, l, a);
                        ("number" != typeof e.length || 0 < e.length && "number" != typeof e[0].nodeType) && o(Error("Template engine must return an array of DOM nodes"));
                        a = f;
                        switch (u) {
                            case "replaceChildren":
                                c.e.X(i, e);
                                a = r;
                                break;
                            case "replaceNode":
                                c.a.Na(i, e);
                                a = r;
                                break;
                            case "ignoreTargetNode":
                                break;
                            default:
                                o(Error("Unknown renderMode: " + u))
                        }
                        return a && (s(e, h), l.afterRender && l.afterRender(e, h.$data)), e
                    }
                    var t;
                    c.ra = function (n) {
                        n == e || n instanceof c.t || o(Error("templateEngine must inherit from ko.templateEngine"));
                        t = n
                    };
                    c.qa = function (i, r, f, s, l) {
                        if (f = f || {}, (f.templateEngine || t) == e && o(Error("Set a template engine before calling renderTemplate")), l = l || "replaceChildren", s) {
                            var a = n(s);
                            return c.h(function () {
                                var t = r && r instanceof c.z ? r : new c.z(c.a.d(r)),
                                    u = "function" == typeof i ? i(t.$data) : i,
                                    t = h(s, l, u, t, f);
                                "replaceNode" == l && (s = t, a = n(s))
                            }, u, {
                                    disposeWhen: function () {
                                        return !a || !c.a.fa(a)
                                    },
                                    disposeWhenNodeIsRemoved: a && "replaceNode" == l ? a.parentNode : a
                                })
                        }
                        return c.s.na(function (n) {
                            c.qa(i, r, f, n, "replaceNode")
                        })
                    };
                    c.Fb = function (n, t, i, r, f) {
                        function l(n, t) {
                            s(t, o);
                            i.afterRender && i.afterRender(t, n)
                        }

                        function a(t, r) {
                            var e = "function" == typeof n ? n(t) : n;
                            return o = f.createChildContext(c.a.d(t)), o.$index = r, h(u, "ignoreTargetNode", e, o, i)
                        }
                        var o;
                        return c.h(function () {
                            var n = c.a.d(t) || [];
                            "undefined" == typeof n.length && (n = [n]);
                            n = c.a.aa(n, function (n) {
                                return i.includeDestroyed || n === e || n === u || !c.a.d(n._destroy)
                            });
                            c.a.Oa(r, n, a, i, l)
                        }, u, {
                                disposeWhenNodeIsRemoved: r
                            })
                    };
                    c.c.template = {
                        init: function (n, t) {
                            var i = c.a.d(t());
                            return "string" == typeof i || i.name || 1 != n.nodeType && 8 != n.nodeType || (i = 1 == n.nodeType ? n.childNodes : c.e.childNodes(n), i = c.a.Ab(i), new c.l.M(n).nodes(i)), {
                                controlsDescendantBindings: r
                            }
                        },
                        update: function (n, t, i, f, e) {
                            t = c.a.d(t());
                            f = r;
                            "string" == typeof t ? i = t : (i = t.name, "if" in t && (f = f && c.a.d(t["if"])), "ifnot" in t && (f = f && !c.a.d(t.ifnot)));
                            var o = u;
                            "object" == typeof t && "foreach" in t ? o = c.Fb(i || n, f && t.foreach || [], t, n, e) : f ? (e = "object" == typeof t && "data" in t ? e.createChildContext(c.a.d(t.data)) : e, o = c.qa(i || n, e, t, n)) : c.e.ha(n);
                            e = o;
                            (t = c.a.f.get(n, "__ko__templateSubscriptionDomDataKey__")) && "function" == typeof t.A && t.A();
                            c.a.f.set(n, "__ko__templateSubscriptionDomDataKey__", e)
                        }
                    };
                    c.g.D.template = function (n) {
                        return n = c.g.W(n), 1 == n.length && n[0].unknown || c.g.wb(n, "name") ? u : "This template engine does not support anonymous templates nested within its templates"
                    };
                    c.e.C.template = r
                }();
            c.b("setTemplateEngine", c.ra);
            c.b("renderTemplate", c.qa),
                function () {
                    c.a.O = function (n, t, i) {
                        var r, l, a;
                        if (i === e) return c.a.O(n, t, 1) || c.a.O(n, t, 10) || c.a.O(n, t, Number.MAX_VALUE);
                        for (var n = n || [], t = t || [], o = n, h = t, f = [], r = 0; r <= h.length; r++) f[r] = [];
                        for (r = 0, l = Math.min(o.length, i); r <= l; r++) f[0][r] = r;
                        for (r = 1, l = Math.min(h.length, i); r <= l; r++) f[r][0] = r;
                        for (var l = o.length, s, v = h.length, r = 1; r <= l; r++)
                            for (s = Math.max(1, r - i), a = Math.min(v, r + i); s <= a; s++) f[s][r] = o[r - 1] === h[s - 1] ? f[s - 1][r - 1] : Math.min(f[s - 1][r] === e ? Number.MAX_VALUE : f[s - 1][r] + 1, f[s][r - 1] === e ? Number.MAX_VALUE : f[s][r - 1] + 1);
                        if (i = n.length, o = t.length, h = [], r = f[o][i], r === e) f = u;
                        else {
                            for (; 0 < i || 0 < o;) l = f[o][i], v = 0 < o ? f[o - 1][i] : r + 1, a = 0 < i ? f[o][i - 1] : r + 1, s = 0 < o && 0 < i ? f[o - 1][i - 1] : r + 1, (v === e || v < l - 1) && (v = r + 1), (a === e || a < l - 1) && (a = r + 1), s < l - 1 && (s = r + 1), v <= a && v < s ? (h.push({
                                status: "added",
                                value: t[o - 1]
                            }), o--) : (a < v && a < s ? h.push({
                                status: "deleted",
                                value: n[i - 1]
                            }) : (h.push({
                                status: "retained",
                                value: n[i - 1]
                            }), o--), i--);
                            f = h.reverse()
                        }
                        return f
                    }
                }();
            c.b("utils.compareArrays", c.a.O),
                function () {
                    function n(n) {
                        if (2 < n.length) {
                            for (var t = n[0], r = n[n.length - 1], i = [t]; t !== r;) {
                                if (t = t.nextSibling, !t) return;
                                i.push(t)
                            }
                            Array.prototype.splice.apply(n, [0, n.length].concat(i))
                        }
                    }

                    function t(t, i, r, f, e) {
                        var o = [],
                            t = c.h(function () {
                                var t = i(r, e) || [];
                                0 < o.length && (n(o), c.a.Na(o, t), f && f(r, t));
                                o.splice(0, o.length);
                                c.a.N(o, t)
                            }, u, {
                                    disposeWhenNodeIsRemoved: t,
                                    disposeWhen: function () {
                                        return 0 == o.length || !c.a.fa(o[0])
                                    }
                                });
                        return {
                            xb: o,
                            h: t
                        }
                    }
                    c.a.Oa = function (i, o, s, h, l) {
                        for (var y, nt, o = o || [], h = h || {}, ut = c.a.f.get(i, "setDomNodeChildrenFromArrayMapping_lastMappingResult") === e, k = c.a.f.get(i, "setDomNodeChildrenFromArrayMapping_lastMappingResult") || [], p = c.a.T(k, function (n) {
                            return n.$a
                        }), w = c.a.O(p, o), o = [], b = 0, v = [], d = 0, p = [], g = u, a = 0, ft = w.length; a < ft; a++) switch (w[a].status) {
                            case "retained":
                                y = k[b];
                                y.qb(d);
                                d = o.push(y);
                                0 < y.P.length && (g = y.P[y.P.length - 1]);
                                b++;
                                break;
                            case "deleted":
                                k[b].h.A();
                                n(k[b].P);
                                c.a.v(k[b].P, function (n) {
                                    v.push({
                                        element: n,
                                        index: a,
                                        value: w[a].value
                                    });
                                    g = n
                                });
                                b++;
                                break;
                            case "added":
                                for (var y = w[a].value, it = c.m(d), d = t(i, s, y, l, it), tt = d.xb, d = o.push({
                                    $a: w[a].value,
                                    P: tt,
                                    h: d.h,
                                    qb: it
                                }), rt = 0, et = tt.length; rt < et; rt++) nt = tt[rt], p.push({
                                    element: nt,
                                    index: a,
                                    value: w[a].value
                                }), g == u ? c.e.Ka(i, nt) : c.e.Fa(i, nt, g), g = nt;
                                l && l(y, tt, it)
                        }
                        if (c.a.v(v, function (n) {
                            c.F(n.element)
                        }), s = f, !ut) {
                            if (h.afterAdd)
                                for (a = 0; a < p.length; a++) h.afterAdd(p[a].element, p[a].index, p[a].value);
                            if (h.beforeRemove) {
                                for (a = 0; a < v.length; a++) h.beforeRemove(v[a].element, v[a].index, v[a].value);
                                s = r
                            }
                        }
                        if (!s && v.length)
                            for (a = 0; a < v.length; a++) h = v[a].element, h.parentNode && h.parentNode.removeChild(h);
                        c.a.f.set(i, "setDomNodeChildrenFromArrayMapping_lastMappingResult", o)
                    }
                }();
            c.b("utils.setDomNodeChildrenFromArrayMapping", c.a.Oa);
            c.q = function () {
                this.allowTemplateRewriting = f
            };
            c.q.prototype = new c.t;
            c.q.prototype.renderTemplateSource = function (n) {
                var t = !(9 > c.a.ja) && n.nodes ? n.nodes() : u;
                return t ? c.a.L(t.cloneNode(r).childNodes) : (n = n.text(), c.a.pa(n))
            };
            c.q.K = new c.q;
            c.ra(c.q.K);
            c.b("nativeTemplateEngine", c.q),
                function () {
                    c.ma = function () {
                        var n = this.vb = function () {
                            if ("undefined" == typeof jQuery || !jQuery.tmpl) return 0;
                            try {
                                if (0 <= jQuery.tmpl.tag.tmpl.open.toString().indexOf("__")) return 2
                            } catch (n) { }
                            return 1
                        }();
                        this.renderTemplateSource = function (i, r, f) {
                            f = f || {};
                            2 > n && o(Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later."));
                            var e = i.data("precompiled");
                            return e || (e = i.text() || "", e = jQuery.template(u, "{{ko_with $item.koBindingContext}}" + e + "{{/ko_with}}"), i.data("precompiled", e)), i = [r.$data], r = jQuery.extend({
                                koBindingContext: r
                            }, f.templateOptions), r = jQuery.tmpl(e, i, r), r.appendTo(t.createElement("div")), jQuery.fragments = {}, r
                        };
                        this.createJavaScriptEvaluatorBlock = function (n) {
                            return "{{ko_code ((function() { return " + n + " })()) }}"
                        };
                        this.addTemplate = function (n, i) {
                            t.write("<script type='text/html' id='" + n + "'>" + i + "<\/script>")
                        };
                        0 < n && (jQuery.tmpl.tag.ko_code = {
                            open: "__.push($1 || '');"
                        }, jQuery.tmpl.tag.ko_with = {
                            open: "with($1) {",
                            close: "} "
                        })
                    };
                    c.ma.prototype = new c.t;
                    var n = new c.ma;
                    0 < n.vb && c.ra(n);
                    c.b("jqueryTmplTemplateEngine", c.ma)
                }()
        }
        var e = void 0,
            r = !0,
            u = null,
            f = !1;
        "function" == typeof require && "object" == typeof exports && "object" == typeof module ? h(module.exports || exports) : "function" == typeof define && define.amd ? define(["exports"], h) : h(n.ko = {});
        r
    }(window, document, navigator);
ko.bindingHandlers.mouseOverBackground = {
    init: function (n, t) {
        var i = t();
        $(n).bind("mouseover", function () {
            $(this).addClass(i.className)
        });
        $(n).bind("mouseout", function () {
            $(this).removeClass(i.className)
        })
    }
};
ko.bindingHandlers.creoleText = {
    update: function (n, t, i, r) {
        var u = t();
        $(n).empty();
        r.getCreole().parse(n, u);
        $(n).find("a").attr("target", "_blank").attr("rel", "noreferrer")
    }
};
ko.bindingHandlers["iframe-src-attr"] = {
    update: function (n, t) {
        var f = ko.utils.unwrapObservable(t()),
            i = ko.utils.unwrapObservable(f.src),
            r = $(n),
            u = r.attr("src");
        if (!i && u) {
            r.removeAttr("src");
            return
        }
        if (i && u !== i) {
            r.attr("src", i);
            return
        }
    }
};
Parse || (Parse = {});
Parse.Simple || (Parse.Simple = {});
Parse.Simple.Base = function (n, t) {
    arguments.length && (this.grammar = n, this.grammar.root = new this.ruleConstructor(this.grammar.root), this.options = t)
};
Parse.Simple.Base.prototype = {
    ruleConstructor: null,
    grammar: null,
    options: null,
    parse: function (n, t, r) {
        if (r)
            for (i in this.options) typeof r[i] == "undefined" && (r[i] = this.options[i]);
        else r = this.options;
        t = t.replace(/\r\n?/g, "\n");
        this.grammar.root.apply(n, t, r);
        r && r.forIE && $(n).html($(n).html().replace(/\r?\n/g, "\r\n"))
    }
};
Parse.Simple.Base.prototype.constructor = Parse.Simple.Base;
Parse.Simple.Base.Rule = function (n) {
    if (arguments.length) {
        for (var t in n) this[t] = n[t];
        this.children || (this.children = [])
    }
};
Parse.Simple.Base.prototype.ruleConstructor = Parse.Simple.Base.Rule;
Parse.Simple.Base.Rule.prototype = {
    regex: null,
    capture: null,
    replaceRegex: null,
    replaceString: null,
    tag: null,
    attrs: null,
    children: null,
    match: function (n) {
        return n.match(this.regex)
    },
    build: function (n, t, i) {
        var u, r, f;
        if (this.capture !== null && (u = t[this.capture]), this.tag ? (r = document.createElement(this.tag), n.appendChild(r)) : r = n, u && (this.replaceRegex && (u = u.replace(this.replaceRegex, this.replaceString)), this.apply(r, u, i)), this.attrs)
            for (f in this.attrs) r.setAttribute(f, this.attrs[f]), i && i.forIE && f == "class" && (r.className = this.attrs[f]);
        return this
    },
    apply: function (n, t, i) {
        var o = "" + t,
            f = [],
            u, e, h, s, r;
        for (this.fallback.apply || (this.fallback = new this.constructor(this.fallback)); ;) {
            for (u = !1, e = !1, r = 0; r < this.children.length; r++)
                if (typeof f[r] == "undefined" && (this.children[r].match || (this.children[r] = new this.constructor(this.children[r])), f[r] = this.children[r].match(o, i)), f[r] && (!u || u.index > f[r].index) && (u = f[r], e = this.children[r], u.index == 0)) break;
            if (h = u ? u.index : o.length, h > 0 && this.fallback.apply(n, o.substring(0, h), i), !u) break;
            for (e.build || (e = new this.constructor(e)), e.build(n, u, i), s = u.index + u[0].length, o = o.substring(s), r = 0; r < this.children.length; r++) f[r] && (f[r].index >= s ? f[r].index -= s : f[r] = void 0)
        }
        return this
    },
    fallback: {
        apply: function (n, t, i) {
            i && i.forIE && (t = t.replace(/\n/g, " \r"));
            n.appendChild(document.createTextNode(t))
        }
    }
};
Parse.Simple.Base.Rule.prototype.constructor = Parse.Simple.Base.Rule;
Parse.Simple.Creole = function (n) {
    var i = {},
        u, t, r;
    for (i.link = "[^\\]|~\\n]*(?:(?:\\](?!\\])|~.)[^\\]|~\\n]*)*", i.linkText = "[^\\]~\\n]*(?:(?:\\](?!\\])|~.)[^\\]~\\n]*)*", i.uriPrefix = "\\b(?:(?:https?|ftp)://|mailto:)", i.uri = i.uriPrefix + i.link, i.rawUri = i.uriPrefix + "\\S*[^\\s!\"',.:;?]", i.interwikiPrefix = "[\\w.]+:", i.interwikiLink = i.interwikiPrefix + i.link, i.img = "\\{\\{((?!\\{)[^|}\\n]*(?:}(?!})[^|}\\n]*)*)" + (n && n.strict ? "" : "(?:") + "\\|([^}~\\n]*((}(?!})|~.)[^}~\\n]*)*)" + (n && n.strict ? "" : ")?") + "}}", u = function (n, t) {
        return t instanceof Function ? t(n) : (t = t instanceof Array ? t : [t], typeof t[1] == "undefined" && (t[1] = ""), t[0] + n + t[1])
    }, t = {
        hr: {
            tag: "hr",
            regex: /(^|\n)\s*----\s*(\n|$)/
        },
        br: {
            tag: "br",
            regex: /\\\\/
        },
        preBlock: {
            tag: "pre",
            capture: 2,
            regex: /(^|\n)\{\{\{\n((.*\n)*?)\}\}\}(\n|$)/,
            replaceRegex: /^ ([ \t]*\}\}\})/gm,
            replaceString: "$1"
        },
        tt: {
            tag: "tt",
            regex: /\{\{\{(.*?\}\}\}+)/,
            capture: 1,
            replaceRegex: /\}\}\}$/,
            replaceString: ""
        },
        ulist: {
            tag: "ul",
            capture: 0,
            regex: /(^|\n)([ \t]*\*[^*#].*(\n|$)([ \t]*[^\s*#].*(\n|$))*([ \t]*[*#]{2}.*(\n|$))*)+/
        },
        olist: {
            tag: "ol",
            capture: 0,
            regex: /(^|\n)([ \t]*#[^*#].*(\n|$)([ \t]*[^\s*#].*(\n|$))*([ \t]*[*#]{2}.*(\n|$))*)+/
        },
        li: {
            tag: "li",
            capture: 0,
            regex: /[ \t]*([*#]).+(\n[ \t]*[^*#\s].*)*(\n[ \t]*\1[*#].+)*/,
            replaceRegex: /(^|\n)[ \t]*[*#]/g,
            replaceString: "$1"
        },
        table: {
            tag: "table",
            capture: 0,
            regex: /(^|\n)(\|.*?[ \t]*(\n|$))+/
        },
        tr: {
            tag: "tr",
            capture: 2,
            regex: /(^|\n)(\|.*?)\|?[ \t]*(\n|$)/
        },
        th: {
            tag: "th",
            regex: /\|+=([^|]*)/,
            capture: 1
        },
        td: {
            tag: "td",
            capture: 1,
            regex: "\\|+([^|~\\[{]*((~(.|(?=\\n)|$)|\\[\\[" + i.link + "(\\|" + i.linkText + ")?\\]\\]" + (n && n.strict ? "" : "|" + i.img) + "|[\\[{])[^|~]*)*)"
        },
        singleLine: {
            regex: /.+/,
            capture: 0
        },
        paragraph: {
            tag: "p",
            capture: 0,
            regex: /(^|\n)([ \t]*\S.*(\n|$))+/
        },
        text: {
            capture: 0,
            regex: /(^|\n)([ \t]*[^\s].*(\n|$))+/
        },
        strong: {
            tag: "strong",
            capture: 1,
            regex: /\*\*([^*~]*((\*(?!\*)|~(.|(?=\n)|$))[^*~]*)*)(\*\*|\n|$)/
        },
        em: {
            tag: "em",
            capture: 1,
            regex: "\\/\\/(((?!" + i.uriPrefix + ")[^\\/~])*((" + i.rawUri + "|\\/(?!\\/)|~(.|(?=\\n)|$))((?!" + i.uriPrefix + ")[^\\/~])*)*)(\\/\\/|\\n|$)"
        },
        img: {
            regex: i.img,
            build: function (n, t, i) {
                var r = document.createElement("img");
                r.src = t[1];
                r.alt = t[2] === undefined ? i && i.defaultImageText ? i.defaultImageText : "" : t[2].replace(/~(.)/g, "$1");
                n.appendChild(r)
            }
        },
        namedUri: {
            regex: "\\[\\[(" + i.uri + ")\\|(" + i.linkText + ")\\]\\]",
            build: function (n, t, i) {
                var r = document.createElement("a");
                r.href = t[1];
                i && i.isPlainUri ? r.appendChild(document.createTextNode(t[2])) : this.apply(r, t[2], i);
                n.appendChild(r)
            }
        },
        namedLink: {
            regex: "\\[\\[(" + i.link + ")\\|(" + i.linkText + ")\\]\\]",
            build: function (n, t, i) {
                var r = document.createElement("a");
                r.href = i && i.linkFormat ? u(t[1].replace(/~(.)/g, "$1"), i.linkFormat) : t[1].replace(/~(.)/g, "$1");
                this.apply(r, t[2], i);
                n.appendChild(r)
            }
        },
        unnamedUri: {
            regex: "\\[\\[(" + i.uri + ")\\]\\]",
            build: "dummy"
        },
        unnamedLink: {
            regex: "\\[\\[(" + i.link + ")\\]\\]",
            build: "dummy"
        },
        unnamedInterwikiLink: {
            regex: "\\[\\[(" + i.interwikiLink + ")\\]\\]",
            build: "dummy"
        },
        rawUri: {
            regex: "(" + i.rawUri + ")",
            build: "dummy"
        },
        escapedSequence: {
            regex: "~(" + i.rawUri + "|.)",
            capture: 1,
            tag: "span",
            attrs: {
                "class": "escaped"
            }
        },
        escapedSymbol: {
            regex: /~(.)/,
            capture: 1,
            tag: "span",
            attrs: {
                "class": "escaped"
            }
        }
    }, t.unnamedUri.build = t.rawUri.build = function (n, i, r) {
        r || (r = {});
        r.isPlainUri = !0;
        t.namedUri.build.call(this, n, Array(i[0], i[1], i[1]), r)
    }, t.unnamedLink.build = function (n, i, r) {
        t.namedLink.build.call(this, n, Array(i[0], i[1], i[1]), r)
    }, t.namedInterwikiLink = {
        regex: "\\[\\[(" + i.interwikiLink + ")\\|(" + i.linkText + ")\\]\\]",
        build: function (n, i, r) {
            var f = document.createElement("a"),
                e, o;
            if (r && r.interwiki && (e = i[1].match(/(.*?):(.*)/), o = r.interwiki[e[1]]), typeof o == "undefined") return t.namedLink.apply || (t.namedLink = new this.constructor(t.namedLink)), t.namedLink.build.call(t.namedLink, n, i, r);
            f.href = u(e[2].replace(/~(.)/g, "$1"), o);
            this.apply(f, i[2], r);
            n.appendChild(f)
        }
    }, t.unnamedInterwikiLink.build = function (n, i, r) {
        t.namedInterwikiLink.build.call(this, n, Array(i[0], i[1], i[1]), r)
    }, t.namedUri.children = t.unnamedUri.children = t.rawUri.children = t.namedLink.children = t.unnamedLink.children = t.namedInterwikiLink.children = t.unnamedInterwikiLink.children = [t.escapedSymbol, t.img], r = 1; r <= 6; r++) t["h" + r] = {
        tag: "h" + r,
        capture: 2,
        regex: "(^|\\n)[ \\t]*={" + r + "}[ \\t]([^~]*?(~(.|(?=\\n)|$))*)[ \\t]*=*\\s*(\\n|$)"
    };
    t.ulist.children = t.olist.children = [t.li];
    t.li.children = [t.ulist, t.olist];
    t.li.fallback = t.text;
    t.table.children = [t.tr];
    t.tr.children = [t.th, t.td];
    t.td.children = [t.singleLine];
    t.th.children = [t.singleLine];
    t.h1.children = t.h2.children = t.h3.children = t.h4.children = t.h5.children = t.h6.children = t.singleLine.children = t.paragraph.children = t.text.children = t.strong.children = t.em.children = [t.escapedSequence, t.strong, t.em, t.br, t.rawUri, t.namedUri, t.namedInterwikiLink, t.namedLink, t.unnamedUri, t.unnamedInterwikiLink, t.unnamedLink, t.tt, t.img];
    t.root = {
        children: [t.h1, t.h2, t.h3, t.h4, t.h5, t.h6, t.hr, t.ulist, t.olist, t.preBlock, t.table],
        fallback: {
            children: [t.paragraph]
        }
    };
    Parse.Simple.Base.call(this, t, n)
};
Parse.Simple.Creole.prototype = new Parse.Simple.Base;
Parse.Simple.Creole.prototype.constructor = Parse.Simple.Creole,
    function (n) {
        function h() {
            function e(n) {
                var o = n < 1e12 ? f ? performance.now() + performance.timing.navigationStart : t() : n || t();
                o - r >= 1e3 && (u._updateTargets(), r = o);
                i(e)
            }
            var t, f, i, r;
            this.regional = [];
            this.regional[""] = {
                labels: ["Years", "Months", "Weeks", "Days", "Hours", "Minutes", "Seconds"],
                labels1: ["Year", "Month", "Week", "Day", "Hour", "Minute", "Second"],
                compactLabels: ["y", "m", "w", "d"],
                whichLabels: null,
                digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
                timeSeparator: ":",
                isRTL: !1
            };
            this._defaults = {
                until: null,
                since: null,
                timezone: null,
                serverSync: null,
                format: "dHMS",
                layout: "",
                compact: !1,
                significant: 0,
                description: "",
                expiryUrl: "",
                expiryText: "",
                alwaysExpire: !1,
                onExpiry: null,
                onTick: null,
                tickInterval: 1
            };
            n.extend(this._defaults, this.regional[""]);
            this._serverSyncs = [];
            t = typeof Date.now == "function" ? Date.now : function () {
                return (new Date).getTime()
            };
            f = window.performance && typeof window.performance.now == "function";
            i = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || null;
            r = 0;
            !i || n.noRequestAnimationFrame ? (n.noRequestAnimationFrame = null, setInterval(function () {
                u._updateTargets()
            }, 980)) : (r = window.animationStartTime || window.webkitAnimationStartTime || window.mozAnimationStartTime || window.oAnimationStartTime || window.msAnimationStartTime || t(), i(e))
        }

        function l(t, i) {
            return t == "option" && (i.length == 0 || i.length == 1 && typeof i[0] == "string") ? !0 : n.inArray(t, c) > -1
        }
        var t = 0,
            r = 1,
            o = 2,
            s = 3,
            f = 4,
            e = 5,
            i = 6,
            c, u;
        n.extend(h.prototype, {
            markerClassName: "hasCountdown",
            propertyName: "countdown",
            _rtlClass: "countdown_rtl",
            _sectionClass: "countdown_section",
            _amountClass: "countdown_amount",
            _rowClass: "countdown_row",
            _holdingClass: "countdown_holding",
            _showClass: "countdown_show",
            _descrClass: "countdown_descr",
            _timerTargets: [],
            setDefaults: function (t) {
                this._resetExtraLabels(this._defaults, t);
                n.extend(this._defaults, t || {})
            },
            UTCDate: function (n, t, i, r, u, f, e, o) {
                typeof t == "object" && t.constructor == Date && (o = t.getMilliseconds(), e = t.getSeconds(), f = t.getMinutes(), u = t.getHours(), r = t.getDate(), i = t.getMonth(), t = t.getFullYear());
                var s = new Date;
                return s.setUTCFullYear(t), s.setUTCDate(1), s.setUTCMonth(i || 0), s.setUTCDate(r || 1), s.setUTCHours(u || 0), s.setUTCMinutes((f || 0) - (Math.abs(n) < 30 ? n * 60 : n)), s.setUTCSeconds(e || 0), s.setUTCMilliseconds(o || 0), s
            },
            periodsToSeconds: function (n) {
                return n[0] * 31557600 + n[1] * 2629800 + n[2] * 604800 + n[3] * 86400 + n[4] * 3600 + n[5] * 60 + n[6]
            },
            _attachPlugin: function (t, i) {
                if (t = n(t), !t.hasClass(this.markerClassName)) {
                    var r = {
                        options: n.extend({}, this._defaults),
                        _periods: [0, 0, 0, 0, 0, 0, 0]
                    };
                    t.addClass(this.markerClassName).data(this.propertyName, r);
                    this._optionPlugin(t, i)
                }
            },
            _addTarget: function (n) {
                this._hasTarget(n) || this._timerTargets.push(n)
            },
            _hasTarget: function (t) {
                return n.inArray(t, this._timerTargets) > -1
            },
            _removeTarget: function (t) {
                this._timerTargets = n.map(this._timerTargets, function (n) {
                    return n == t ? null : n
                })
            },
            _updateTargets: function () {
                for (var n = this._timerTargets.length - 1; n >= 0; n--) this._updateCountdown(this._timerTargets[n])
            },
            _optionPlugin: function (t, i, r) {
                var u, f, o, e;
                if (t = n(t), u = t.data(this.propertyName), !i || typeof i == "string" && r == null) return f = i, i = (u || {}).options, i && f ? i[f] : i;
                t.hasClass(this.markerClassName) && (i = i || {}, typeof i == "string" && (f = i, i = {}, i[f] = r), i.layout && (i.layout = i.layout.replace(/&lt;/g, "<").replace(/&gt;/g, ">")), this._resetExtraLabels(u.options, i), o = u.options.timezone != i.timezone, n.extend(u.options, i), this._adjustSettings(t, u, i.until != null || i.since != null || o), e = new Date, (u._since && u._since < e || u._until && u._until > e) && this._addTarget(t[0]), this._updateCountdown(t, u))
            },
            _updateCountdown: function (t, i) {
                var r = n(t),
                    u, f, e;
                (i = i || r.data(this.propertyName), i) && (r.html(this._generateHTML(i)).toggleClass(this._rtlClass, i.options.isRTL), n.isFunction(i.options.onTick) && (u = i._hold != "lap" ? i._periods : this._calculatePeriods(i, i._show, i.options.significant, new Date), (i.options.tickInterval == 1 || this.periodsToSeconds(u) % i.options.tickInterval == 0) && i.options.onTick.apply(t, [u])), f = i._hold != "pause" && (i._since ? i._now.getTime() < i._since.getTime() : i._now.getTime() >= i._until.getTime()), f && !i._expiring ? (i._expiring = !0, (this._hasTarget(t) || i.options.alwaysExpire) && (this._removeTarget(t), n.isFunction(i.options.onExpiry) && i.options.onExpiry.apply(t, []), i.options.expiryText && (e = i.options.layout, i.options.layout = i.options.expiryText, this._updateCountdown(t, i), i.options.layout = e), i.options.expiryUrl && (window.location = i.options.expiryUrl)), i._expiring = !1) : i._hold == "pause" && this._removeTarget(t), r.data(this.propertyName, i))
            },
            _resetExtraLabels: function (n, t) {
                var r = !1;
                for (var i in t)
                    if (i != "whichLabels" && i.match(/[Ll]abels/)) {
                        r = !0;
                        break
                    }
                if (r)
                    for (i in n) i.match(/[Ll]abels[02-9]|compactLabels1/) && (n[i] = null)
            },
            _adjustSettings: function (t, i, r) {
                for (var h, f, e, u = 0, s = null, o = 0; o < this._serverSyncs.length; o++)
                    if (this._serverSyncs[o][0] == i.options.serverSync) {
                        s = this._serverSyncs[o][1];
                        break
                    }
                s != null ? (u = i.options.serverSync ? s : 0, e = new Date) : (h = n.isFunction(i.options.serverSync) ? i.options.serverSync.apply(t, []) : null, e = new Date, u = h ? e.getTime() - h.getTime() : 0, this._serverSyncs.push([i.options.serverSync, u]));
                f = i.options.timezone;
                f = f == null ? -e.getTimezoneOffset() : f;
                (r || !r && i._until == null && i._since == null) && (i._since = i.options.since, i._since != null && (i._since = this.UTCDate(f, this._determineTime(i._since, null)), i._since && u && i._since.setMilliseconds(i._since.getMilliseconds() + u)), i._until = this.UTCDate(f, this._determineTime(i.options.until, e)), u && i._until.setMilliseconds(i._until.getMilliseconds() + u));
                i._show = this._determineShow(i)
            },
            _destroyPlugin: function (t) {
                (t = n(t), t.hasClass(this.markerClassName)) && (this._removeTarget(t[0]), t.removeClass(this.markerClassName).empty().removeData(this.propertyName))
            },
            _pausePlugin: function (n) {
                this._hold(n, "pause")
            },
            _lapPlugin: function (n) {
                this._hold(n, "lap")
            },
            _resumePlugin: function (n) {
                this._hold(n, null)
            },
            _hold: function (t, i) {
                var r = n.data(t, this.propertyName),
                    u;
                r && (r._hold != "pause" || i || (r._periods = r._savePeriods, u = r._since ? "-" : "+", r[r._since ? "_since" : "_until"] = this._determineTime(u + r._periods[0] + "y" + u + r._periods[1] + "o" + u + r._periods[2] + "w" + u + r._periods[3] + "d" + u + r._periods[4] + "h" + u + r._periods[5] + "m" + u + r._periods[6] + "s"), this._addTarget(t)), r._hold = i, r._savePeriods = i == "pause" ? r._periods : null, n.data(t, this.propertyName, r), this._updateCountdown(t, r))
            },
            _getTimesPlugin: function (t) {
                var i = n.data(t, this.propertyName);
                return i ? i._hold == "pause" ? i._savePeriods : i._hold ? this._calculatePeriods(i, i._show, i.options.significant, new Date) : i._periods : null
            },
            _determineTime: function (n, t) {
                var r = function (n) {
                    var t = new Date;
                    return t.setTime(t.getTime() + n * 1e3), t
                },
                    f = function (n) {
                        n = n.toLowerCase();
                        for (var r = new Date, f = r.getFullYear(), e = r.getMonth(), i = r.getDate(), o = r.getHours(), s = r.getMinutes(), h = r.getSeconds(), c = /([+-]?[0-9]+)\s*(s|m|h|d|w|o|y)?/g, t = c.exec(n); t;) {
                            switch (t[2] || "s") {
                                case "s":
                                    h += parseInt(t[1], 10);
                                    break;
                                case "m":
                                    s += parseInt(t[1], 10);
                                    break;
                                case "h":
                                    o += parseInt(t[1], 10);
                                    break;
                                case "d":
                                    i += parseInt(t[1], 10);
                                    break;
                                case "w":
                                    i += parseInt(t[1], 10) * 7;
                                    break;
                                case "o":
                                    e += parseInt(t[1], 10);
                                    i = Math.min(i, u._getDaysInMonth(f, e));
                                    break;
                                case "y":
                                    f += parseInt(t[1], 10);
                                    i = Math.min(i, u._getDaysInMonth(f, e))
                            }
                            t = c.exec(n)
                        }
                        return new Date(f, e, i, o, s, h, 0)
                    },
                    i = n == null ? t : typeof n == "string" ? f(n) : typeof n == "number" ? r(n) : n;
                return i && i.setMilliseconds(0), i
            },
            _getDaysInMonth: function (n, t) {
                return 32 - new Date(n, t, 32).getDate()
            },
            _normalLabels: function (n) {
                return n
            },
            _generateHTML: function (h) {
                var w = this,
                    v, c;
                h._periods = h._hold ? h._periods : this._calculatePeriods(h, h._show, h.options.significant, new Date);
                var b = !1,
                    k = 0,
                    p = h.options.significant,
                    l = n.extend({}, h._show);
                for (c = t; c <= i; c++) b |= h._show[c] == "?" && h._periods[c] > 0, l[c] = h._show[c] == "?" && !b ? null : h._show[c], k += l[c] ? 1 : 0, p -= h._periods[c] > 0 ? 1 : 0;
                for (v = [!1, !1, !1, !1, !1, !1, !1], c = i; c >= t; c--) h._show[c] && (h._periods[c] ? v[c] = !0 : (v[c] = p > 0, p--));
                var d = h.options.compact ? h.options.compactLabels : h.options.labels,
                    g = h.options.whichLabels || this._normalLabels,
                    y = function (n) {
                        var t = h.options["compactLabels" + g(h._periods[n])];
                        return l[n] ? w._translateDigits(h, h._periods[n]) + (t ? t[n] : d[n]) + " " : ""
                    },
                    a = function (n) {
                        var t = h.options["labels" + g(h._periods[n])];
                        return !h.options.significant && l[n] || h.options.significant && v[n] ? '<span class="' + u._sectionClass + '"><span class="' + u._amountClass + '">' + w._translateDigits(h, h._periods[n]) + "<\/span><br/>" + (t ? t[n] : d[n]) + "<\/span>" : ""
                    };
                return h.options.layout ? this._buildLayout(h, l, h.options.layout, h.options.compact, h.options.significant, v) : (h.options.compact ? '<span class="' + this._rowClass + " " + this._amountClass + (h._hold ? " " + this._holdingClass : "") + '">' + y(t) + y(r) + y(o) + y(s) + (l[f] ? this._minDigits(h, h._periods[f], 2) : "") + (l[e] ? (l[f] ? h.options.timeSeparator : "") + this._minDigits(h, h._periods[e], 2) : "") + (l[i] ? (l[f] || l[e] ? h.options.timeSeparator : "") + this._minDigits(h, h._periods[i], 2) : "") : '<span class="' + this._rowClass + " " + this._showClass + (h.options.significant || k) + (h._hold ? " " + this._holdingClass : "") + '">' + a(t) + a(r) + a(o) + a(s) + a(f) + a(e) + a(i)) + "<\/span>" + (h.options.description ? '<span class="' + this._rowClass + " " + this._descrClass + '">' + h.options.description + "<\/span>" : "")
            },
            _buildLayout: function (u, h, c, l, a, v) {
                for (var k, d, g = u.options[l ? "compactLabels" : "labels"], nt = u.options.whichLabels || this._normalLabels, p = function (n) {
                    return (u.options[(l ? "compactLabels" : "labels") + nt(u._periods[n])] || g)[n]
                }, y = function (n, t) {
                    return u.options.digits[Math.floor(n / t) % 10]
                }, tt = {
                    desc: u.options.description,
                    sep: u.options.timeSeparator,
                    yl: p(t),
                    yn: this._minDigits(u, u._periods[t], 1),
                    ynn: this._minDigits(u, u._periods[t], 2),
                    ynnn: this._minDigits(u, u._periods[t], 3),
                    y1: y(u._periods[t], 1),
                    y10: y(u._periods[t], 10),
                    y100: y(u._periods[t], 100),
                    y1000: y(u._periods[t], 1e3),
                    ol: p(r),
                    on: this._minDigits(u, u._periods[r], 1),
                    onn: this._minDigits(u, u._periods[r], 2),
                    onnn: this._minDigits(u, u._periods[r], 3),
                    o1: y(u._periods[r], 1),
                    o10: y(u._periods[r], 10),
                    o100: y(u._periods[r], 100),
                    o1000: y(u._periods[r], 1e3),
                    wl: p(o),
                    wn: this._minDigits(u, u._periods[o], 1),
                    wnn: this._minDigits(u, u._periods[o], 2),
                    wnnn: this._minDigits(u, u._periods[o], 3),
                    w1: y(u._periods[o], 1),
                    w10: y(u._periods[o], 10),
                    w100: y(u._periods[o], 100),
                    w1000: y(u._periods[o], 1e3),
                    dl: p(s),
                    dn: this._minDigits(u, u._periods[s], 1),
                    dnn: this._minDigits(u, u._periods[s], 2),
                    dnnn: this._minDigits(u, u._periods[s], 3),
                    d1: y(u._periods[s], 1),
                    d10: y(u._periods[s], 10),
                    d100: y(u._periods[s], 100),
                    d1000: y(u._periods[s], 1e3),
                    hl: p(f),
                    hn: this._minDigits(u, u._periods[f], 1),
                    hnn: this._minDigits(u, u._periods[f], 2),
                    hnnn: this._minDigits(u, u._periods[f], 3),
                    h1: y(u._periods[f], 1),
                    h10: y(u._periods[f], 10),
                    h100: y(u._periods[f], 100),
                    h1000: y(u._periods[f], 1e3),
                    ml: p(e),
                    mn: this._minDigits(u, u._periods[e], 1),
                    mnn: this._minDigits(u, u._periods[e], 2),
                    mnnn: this._minDigits(u, u._periods[e], 3),
                    m1: y(u._periods[e], 1),
                    m10: y(u._periods[e], 10),
                    m100: y(u._periods[e], 100),
                    m1000: y(u._periods[e], 1e3),
                    sl: p(i),
                    sn: this._minDigits(u, u._periods[i], 1),
                    snn: this._minDigits(u, u._periods[i], 2),
                    snnn: this._minDigits(u, u._periods[i], 3),
                    s1: y(u._periods[i], 1),
                    s10: y(u._periods[i], 10),
                    s100: y(u._periods[i], 100),
                    s1000: y(u._periods[i], 1e3)
                }, w = c, b = t; b <= i; b++) k = "yowdhms".charAt(b), d = new RegExp("\\{" + k + "<\\}([\\s\\S]*)\\{" + k + ">\\}", "g"), w = w.replace(d, !a && h[b] || a && v[b] ? "$1" : "");
                return n.each(tt, function (n, t) {
                    var i = new RegExp("\\{" + n + "\\}", "g");
                    w = w.replace(i, t)
                }), w
            },
            _minDigits: function (n, t, i) {
                return (t = "" + t, t.length >= i) ? this._translateDigits(n, t) : (t = "0000000000" + t, this._translateDigits(n, t.substr(t.length - i)))
            },
            _translateDigits: function (n, t) {
                return ("" + t).replace(/[0-9]/g, function (t) {
                    return n.options.digits[t]
                })
            },
            _determineShow: function (n) {
                var u = n.options.format,
                    h = [];
                return h[t] = u.match("y") ? "?" : u.match("Y") ? "!" : null, h[r] = u.match("o") ? "?" : u.match("O") ? "!" : null, h[o] = u.match("w") ? "?" : u.match("W") ? "!" : null, h[s] = u.match("d") ? "?" : u.match("D") ? "!" : null, h[f] = u.match("h") ? "?" : u.match("H") ? "!" : null, h[e] = u.match("m") ? "?" : u.match("M") ? "!" : null, h[i] = u.match("s") ? "?" : u.match("S") ? "!" : null, h
            },
            _calculatePeriods: function (n, h, c, l) {
                var v, a, ut, b, p, w, y;
                if (n._now = l, n._now.setMilliseconds(0), v = new Date(n._now.getTime()), n._since ? l.getTime() < n._since.getTime() ? n._now = l = v : l = n._since : (v.setTime(n._until.getTime()), l.getTime() > n._until.getTime() && (n._now = l = v)), a = [0, 0, 0, 0, 0, 0, 0], h[t] || h[r]) {
                    var k = u._getDaysInMonth(l.getFullYear(), l.getMonth()),
                        nt = u._getDaysInMonth(v.getFullYear(), v.getMonth()),
                        tt = v.getDate() == l.getDate() || v.getDate() >= Math.min(k, nt) && l.getDate() >= Math.min(k, nt),
                        it = function (n) {
                            return (n.getHours() * 60 + n.getMinutes()) * 60 + n.getSeconds()
                        },
                        rt = Math.max(0, (v.getFullYear() - l.getFullYear()) * 12 + v.getMonth() - l.getMonth() + (v.getDate() < l.getDate() && !tt || tt && it(v) < it(l) ? -1 : 0));
                    a[t] = h[t] ? Math.floor(rt / 12) : 0;
                    a[r] = h[r] ? rt - a[t] * 12 : 0;
                    l = new Date(l.getTime());
                    ut = l.getDate() == k;
                    b = u._getDaysInMonth(l.getFullYear() + a[t], l.getMonth() + a[r]);
                    l.getDate() > b && l.setDate(b);
                    l.setFullYear(l.getFullYear() + a[t]);
                    l.setMonth(l.getMonth() + a[r]);
                    ut && l.setDate(b)
                }
                if (p = Math.floor((v.getTime() - l.getTime()) / 1e3), w = function (n, t) {
                    a[n] = h[n] ? Math.floor(p / t) : 0;
                    p -= a[n] * t
                }, w(o, 604800), w(s, 86400), w(f, 3600), w(e, 60), w(i, 1), p > 0 && !n._since) {
                    var ft = [1, 12, 4.3482, 7, 24, 60, 60],
                        d = i,
                        g = 1;
                    for (y = i; y >= t; y--) h[y] && (a[d] >= g && (a[d] = 0, p = 1), p > 0 && (a[y]++ , p = 0, d = y, g = 1)), g *= ft[y]
                }
                if (c)
                    for (y = t; y <= i; y++) c && a[y] ? c-- : c || (a[y] = 0);
                return a
            }
        });
        c = ["getTimes"];
        n.fn.countdown = function (n) {
            var t = Array.prototype.slice.call(arguments, 1);
            return l(n, t) ? u["_" + n + "Plugin"].apply(u, [this[0]].concat(t)) : this.each(function () {
                if (typeof n == "string") {
                    if (!u["_" + n + "Plugin"]) throw "Unknown command: " + n;
                    u["_" + n + "Plugin"].apply(u, [this].concat(t))
                } else u._attachPlugin(this, n || {})
            })
        };
        u = n.countdown = new h
    }(jQuery),
    function (n) {
        n.countdown.regional["da-DK"] = {
            labels: ["År", "Måneder", "Uger", "Dage", "Timer", "Minutter", "Sekunder"],
            labels1: ["År", "Månad", "Uge", "Dag", "Time", "Minut", "Sekund"],
            compactLabels: ["Å", "M", "U", "D"],
            whichLabels: null,
            digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
            timeSeparator: ":",
            isRTL: !1
        };
        n.countdown.regional["nl-NL"] = {
            labels: ["Jaren", "Maanden", "Weken", "Dagen", "Uren", "Minuten", "Seconden"],
            labels1: ["Jaar", "Maand", "Week", "Dag", "Uur", "Minuut", "Seconde"],
            compactLabels: ["j", "m", "w", "d"],
            whichLabels: null,
            digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
            timeSeparator: ":",
            isRTL: !1
        };
        n.countdown.regional["de-DE"] = {
            labels: ["Jahre", "Monate", "Wochen", "Tage", "Stunden", "Minuten", "Sekunden"],
            labels1: ["Jahr", "Monat", "Woche", "Tag", "Stunde", "Minute", "Sekunde"],
            compactLabels: ["J", "M", "W", "T"],
            whichLabels: null,
            digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
            timeSeparator: ":",
            isRTL: !1
        };
        n.countdown.regional["en-GB"] = {
            labels: ["Years", "Months", "Weeks", "Days", "Hours", "Minutes", "Seconds"],
            labels1: ["Year", "Month", "Week", "Day", "Hour", "Minute", "Second"],
            compactLabels: ["Y", "M", "W", "D"],
            whichLabels: null,
            digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
            timeSeparator: ":",
            isRTL: !1
        };
        n.countdown.regional["fr-FR"] = {
            labels: ["Années", "Mois", "Semaines", "Jours", "Heures", "Minutes", "Secondes"],
            labels1: ["Année", "Mois", "Semaine", "Jour", "Heure", "Minute", "Seconde"],
            compactLabels: ["a", "m", "s", "j"],
            whichLabels: function (n) {
                return n > 1 ? 0 : 1
            },
            digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
            timeSeparator: ":",
            isRTL: !1
        };
        n.countdown.regional["fr-CA"] = {
            labels: ["Années", "Mois", "Semaines", "Jours", "Heures", "Minutes", "Secondes"],
            labels1: ["Année", "Mois", "Semaine", "Jour", "Heure", "Minute", "Seconde"],
            compactLabels: ["a", "m", "s", "j"],
            whichLabels: function (n) {
                return n > 1 ? 0 : 1
            },
            digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
            timeSeparator: ":",
            isRTL: !1
        };
        n.countdown.regional["es-CL"] = {
            labels: ["Años", "Meses", "Semanas", "Días", "Horas", "Minutos", "Segundos"],
            labels1: ["Año", "Mes", "Semana", "Día", "Hora", "Minuto", "Segundo"],
            compactLabels: ["a", "m", "s", "g"],
            whichLabels: null,
            digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
            timeSeparator: ":",
            isRTL: !1
        };
        n.countdown.regional["es-ES"] = {
            labels: ["Años", "Meses", "Semanas", "Días", "Horas", "Minutos", "Segundos"],
            labels1: ["Año", "Mes", "Semana", "Día", "Hora", "Minuto", "Segundo"],
            compactLabels: ["a", "m", "s", "g"],
            whichLabels: null,
            digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
            timeSeparator: ":",
            isRTL: !1
        };
        n.countdown.regional["nb-NO"] = {
            labels: ["År", "Måneder", "Uker", "Dager", "Timer", "Minutter", "Sekunder"],
            labels1: ["År", "Måned", "Uke", "Dag", "Time", "Minutt", "Sekund"],
            compactLabels: ["Å", "M", "U", "D"],
            whichLabels: null,
            digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
            timeSeparator: ":",
            isRTL: !1
        };
        n.countdown.regional["sv-SE"] = {
            labels: ["År", "Månader", "Veckor", "Dagar", "Timmar", "Minuter", "Sekunder"],
            labels1: ["År", "Månad", "Vecka", "Dag", "Timme", "Minut", "Sekund"],
            compactLabels: ["Å", "M", "V", "D"],
            whichLabels: null,
            digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
            timeSeparator: ":",
            isRTL: !1
        };
        n.countdown.regional["ca-ES"] = {
            labels: ["Anys", "Mesos", "Setmanes", "Dies", "Hores", "Minuts", "Segons"],
            labels1: ["Any", "Mes", "Setmana", "Dia", "Hora", "Minut", "Segon"],
            compactLabels: ["a", "m", "s", "d"],
            whichLabels: null,
            digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
            timeSeparator: ":",
            isRTL: !1
        };
        n.countdown.regional["zh-CN"] = {
            labels: ["年", "月", "周", "天", "时", "分", "秒"],
            labels1: ["年", "月", "周", "天", "时", "分", "秒"],
            compactLabels: ["年", "月", "周", "天"],
            compactLabels1: ["年", "月", "周", "天"],
            whichLabels: null,
            digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
            timeSeparator: ":",
            isRTL: !1
        };
        n.countdown.regional["zh-TW"] = {
            labels: ["年", "月", "周", "天", "時", "分", "秒"],
            labels1: ["年", "月", "周", "天", "時", "分", "秒"],
            compactLabels: ["年", "月", "周", "天"],
            compactLabels1: ["年", "月", "周", "天"],
            whichLabels: null,
            digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
            timeSeparator: ":",
            isRTL: !1
        };
        n.countdown.regional["pt-BR"] = {
            labels: ["Anos", "Meses", "Semanas", "Dias", "Horas", "Minutos", "Segundos"],
            labels1: ["Ano", "Mes", "Semana", "Dia", "Hora", "Minuto", "Segundo"],
            compactLabels: ["a", "m", "s", "d"],
            whichLabels: null,
            digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
            timeSeparator: ":",
            isRTL: !1
        };
        n.countdown.regional["pt-PT"] = {
            labels: ["Anos", "Meses", "Semanas", "Dias", "Horas", "Minutos", "Segundos"],
            labels1: ["Ano", "Mes", "Semana", "Dia", "Hora", "Minuto", "Segundo"],
            compactLabels: ["a", "m", "s", "d"],
            whichLabels: null,
            digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
            timeSeparator: ":",
            isRTL: !1
        };
        n.countdown.regional["th-TH"] = {
            labels: ["ปี", "เดือน", "สัปดาห์", "วัน", "ชั่วโมง", "นาที", "วินาที"],
            labels1: ["ปี", "เดือน", "สัปดาห์", "วัน", "ชั่วโมง", "นาที", "วินาที"],
            compactLabels: ["ป", "ด", "อ", "ว"],
            whichLabels: null,
            digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
            timeSeparator: ":",
            isRTL: !1
        };
        n.countdown.regional["tr-TR"] = {
            labels: ["Yıl", "Ay", "Haftalar", "Günler", "Saat", "Dakika", "Saniye"],
            labels1: ["Yıl", "Ay", "Hafta", "Gün", "Saat", "Dakika", "Saniye"],
            compactLabels: ["Y", "A", "H", "G"],
            whichLabels: null,
            digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
            timeSeparator: ":",
            isRTL: !1
        };
        n.countdown.regional["el-GR"] = {
            labels: ["Χρόνια", "Μήνες", "Εβδομάδες", "Μέρες", "Ώρες", "Λεπτά", "Δευτερόλεπτα"],
            labels1: ["Χρόνος", "Μήνας", "Εβδομάδα", "Ημέρα", "Ώρα", "Λεπτό", "Δευτερόλεπτο"],
            compactLabels: ["Χρ.", "Μην.", "Εβδ.", "Ημ."],
            whichLabels: null,
            digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
            timeSeparator: ":",
            isRTL: !1
        };
        n.countdown.regional["he-IL"] = {
            labels: ["שנים", "חודשים", "שבועות", "ימים", "שעות", "דקות", "שניות"],
            labels1: ["שנה", "חודש", "שבוע", "יום", "שעה", "דקה", "שנייה"],
            compactLabels: ["שנ", "ח", "שב", "י"],
            whichLabels: null,
            digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
            timeSeparator: ":",
            isRTL: !0
        };
        n.countdown.regional["ru-RU"] = {
            labels: ["Лет", "Месяцев", "Недель", "Дней", "Часов", "Минут", "Секунд"],
            labels1: ["Год", "Месяц", "Неделя", "День", "Час", "Минута", "Секунда"],
            compactLabels: ["л", "м", "н", "д"],
            whichLabels: null,
            digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
            timeSeparator: ":",
            isRTL: !0
        };
        n.countdown.regional["nl-NL"] = {
            labels: ["Jaren", "Maanden", "Weken", "Dagen", "Uren", "Minuten", "Seconden"],
            labels1: ["Jaar", "Maand", "Week", "Dag", "Uur", "Minuut", "Seconde"],
            compactLabels: ["j", "m", "w", "d"],
            whichLabels: null,
            digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
            timeSeparator: ":",
            isRTL: !0
        };
        n.countdown.regional["is-IS"] = {
            labels: ["Ár", "Mánuðir", "Vikur", "Dagar", "Klukkustundir", "Mínútur", "Sekúndur"],
            labels1: ["Ár", "Mánuður", "Vika", "Dagur", "Klukkustund", "Mínúta", "Sekúnda"],
            compactLabels: ["ár.", "mán.", "vik.", "dag.", "klst.", "mín.", "sek."],
            whichLabels: null,
            digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
            timeSeparator: ":",
            isRTL: !0
        };
        n.countdown.regional["it-IT"] = {
            labels: ["Anni", "Mesi", "Settimane", "Giorni", "Ore", "Minuti", "Secondi"],
            labels1: ["Anno", "Mese", "Settimana", "Giorno", "Ora", "Minuto", "Secondo"],
            compactLabels: ["a", "m", "s", "g"],
            whichLabels: null,
            digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
            timeSeparator: ":",
            isRTL: !0
        };
        n.countdown.regional["ka-GE"] = {
            labels: ["წელი", "თვე", "კვირა", "დღე", "საათი", "წუთი", "წამი"],
            labels1: ["წელი", "თვე", "კვირა", "დღე", "საათი", "წუთი", "წამი"],
            compactLabels: ["Y", "M", "W", "D"],
            whichLabels: null,
            digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
            timeSeparator: ":",
            isRTL: !1
        };
        n.countdown.regional["fo-FO"] = {
            labels: ["Ár", "Mánaðir", "Vikur", "Dagar", "Tímar", "Minuttir", "Sekund"],
            labels1: ["Ár", "Mánaður", "Vika", "Dagur", "Tími", "Minuttur", "Sekund"],
            compactLabels: ["Á", "M", "V", "D"],
            whichLabels: null,
            digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
            timeSeparator: ":",
            isRTL: !1
        };
        n.countdown.regional["fi-FI"] = {
            labels: ["vuotta", "kuukautta", "viikkoa", "päivää", "tuntia", "minuuttia", "sekuntia"],
            labels1: ["vuosi", "kuukausi", "viikko", "päivä", "tunti", "minuutti", "sekunti"],
            compactLabels: ["v", "kk", "vk", "pv"],
            whichLabels: null,
            digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
            timeSeparator: ":",
            isRTL: !1
        };
        n.countdown.regional["pl-PL"] = {
            labels: ["lat", "miesięcy", "tygodni", "dni", "godzin", "minut", "sekund"],
            labels1: ["rok", "miesiąc", "tydzień", "dzień", "godzina", "minuta", "sekunda"],
            compactLabels: ["l", "m", "t", "d"],
            whichLabels: null,
            digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
            timeSeparator: ":",
            isRTL: !1
        };
        n.countdown.regional["ja-JP"] = {
            labels: ["年", "月", "週", "日", "時", "分", "秒"],
            labels1: ["年", "月", "週", "日", "時", "分", "秒"],
            compactLabels: ["年", "月", "週", "日"],
            whichLabels: null,
            digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
            timeSeparator: ":",
            isRTL: !1
        };
        n.countdown.regional["ro-RO"] = {
            labels: ["Ani", "Luni", "Saptamani", "Zile", "Ore", "Minute", "Secunde"],
            labels1: ["An", "Luna", "Saptamana", "Ziua", "Ora", "Minutul", "Secunda"],
            compactLabels: ["A", "L", "S", "Z"],
            whichLabels: null,
            digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
            timeSeparator: ":",
            isRTL: !1
        };
        n.countdown.regional["cy-GB"] = {
            labels: ["Blynyddoedd", "Mis", "Wythnosau", "Diwrnodau", "Oriau", "Munudau", "Eiliadau"],
            labels1: ["Blwyddyn", "Mis", "Wythnos", "Diwrnod", "Awr", "Munud", "Eiliad"],
            compactLabels: ["b", "m", "w", "d"],
            whichLabels: null,
            digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
            timeSeparator: ":",
            isRTL: !1
        };
        n.countdown.regional["ar-QA"] = {
            labels: ["سنوات", "أشهر", "أسابيع", "أيام", "ساعات", "دقيقة", "ثانية"],
            labels1: ["السنة", "الشهر", "الأسبوع", "اليوم", "ساعة", "دقيقة", "الثانية"],
            compactLabels: ["Y", "M", "W", "D"],
            whichLabels: null,
            digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
            timeSeparator: ":",
            isRTL: !1
        }
    }(jQuery);
jQuery(function () {
    SetWidthOfProgressBar();
    clearFormFields({
        clearInputs: !0,
        clearTextareas: !0,
        passwordFieldText: !0,
        addClassFocus: "focus",
        filterClass: "default"
    })
});
JSON || (JSON = {}),
    function () {
        "use strict";

        function i(n) {
            return n < 10 ? "0" + n : n
        }

        function o(n) {
            return e.lastIndex = 0, e.test(n) ? '"' + n.replace(e, function (n) {
                var t = s[n];
                return typeof t == "string" ? t : "\\u" + ("0000" + n.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + n + '"'
        }

        function u(i, f) {
            var s, l, h, a, v = n,
                c, e = f[i];
            e && typeof e == "object" && typeof e.toJSON == "function" && (e = e.toJSON(i));
            typeof t == "function" && (e = t.call(f, i, e));
            switch (typeof e) {
                case "string":
                    return o(e);
                case "number":
                    return isFinite(e) ? String(e) : "null";
                case "boolean":
                case "null":
                    return String(e);
                case "object":
                    if (!e) return "null";
                    if (n += r, c = [], Object.prototype.toString.apply(e) === "[object Array]") {
                        for (a = e.length, s = 0; s < a; s += 1) c[s] = u(s, e) || "null";
                        return h = c.length === 0 ? "[]" : n ? "[\n" + n + c.join(",\n" + n) + "\n" + v + "]" : "[" + c.join(",") + "]", n = v, h
                    }
                    if (t && typeof t == "object")
                        for (a = t.length, s = 0; s < a; s += 1) typeof t[s] == "string" && (l = t[s], h = u(l, e), h && c.push(o(l) + (n ? ": " : ":") + h));
                    else
                        for (l in e) Object.prototype.hasOwnProperty.call(e, l) && (h = u(l, e), h && c.push(o(l) + (n ? ": " : ":") + h));
                    return h = c.length === 0 ? "{}" : n ? "{\n" + n + c.join(",\n" + n) + "\n" + v + "}" : "{" + c.join(",") + "}", n = v, h
            }
        }
        typeof Date.prototype.toJSON != "function" && (Date.prototype.toJSON = function () {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + i(this.getUTCMonth() + 1) + "-" + i(this.getUTCDate()) + "T" + i(this.getUTCHours()) + ":" + i(this.getUTCMinutes()) + ":" + i(this.getUTCSeconds()) + "Z" : null
        }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function () {
            return this.valueOf()
        });
        var f = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            e = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            n, r, s = {
                "\b": "\\b",
                "\t": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            },
            t;
        typeof JSON.stringify != "function" && (JSON.stringify = function (i, f, e) {
            var o;
            if (n = "", r = "", typeof e == "number")
                for (o = 0; o < e; o += 1) r += " ";
            else typeof e == "string" && (r = e);
            if (t = f, f && typeof f != "function" && (typeof f != "object" || typeof f.length != "number")) throw new Error("JSON.stringify");
            return u("", {
                "": i
            })
        });
        typeof JSON.parse != "function" && (JSON.parse = function (n, t) {
            function r(n, i) {
                var f, e, u = n[i];
                if (u && typeof u == "object")
                    for (f in u) Object.prototype.hasOwnProperty.call(u, f) && (e = r(u, f), e !== undefined ? u[f] = e : delete u[f]);
                return t.call(n, i, u)
            }
            var i;
            if (n = String(n), f.lastIndex = 0, f.test(n) && (n = n.replace(f, function (n) {
                return "\\u" + ("0000" + n.charCodeAt(0).toString(16)).slice(-4)
            })), /^[\],:{}\s]*$/.test(n.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return i = eval("(" + n + ")"), typeof t == "function" ? r({
                "": i
            }, "") : i;
            throw new SyntaxError("JSON.parse");
        })
    }();
/** @license
 *
 * SoundManager 2: JavaScript Sound for the Web
 * ----------------------------------------------
 * http://schillmania.com/projects/soundmanager2/
 *
 * Copyright (c) 2007, Scott Schiller. All rights reserved.
 * Code provided under the BSD License:
 * http://schillmania.com/projects/soundmanager2/license.txt
 *
 * V2.97a.20150601
 */
(function (n, t) {
    "use strict";

    function i(i, r) {
        function tr(n) {
            return u.preferFlash && et && !u.ignoreFlash && u.flash[n] !== t && u.flash[n]
        }

        function y(n) {
            return function (t) {
                var i = this._s,
                    r;
                return i && i._a ? r = n.call(this, t) : (i && i.id ? u._wD(i.id + ": Ignoring " + t.type) : u._wD(lf + "Ignoring " + t.type), r = null), r
            }
        }
        this.setupOptions = {
            url: i || null,
            flashVersion: 8,
            debugMode: !0,
            debugFlash: !1,
            useConsole: !0,
            consoleOnly: !0,
            waitForWindowLoad: !1,
            bgColor: "#ffffff",
            useHighPerformance: !1,
            flashPollingInterval: null,
            html5PollingInterval: null,
            flashLoadTimeout: 1e3,
            wmode: null,
            allowScriptAccess: "always",
            useFlashBlock: !1,
            useHTML5Audio: !0,
            forceUseGlobalHTML5Audio: !1,
            ignoreMobileRestrictions: !1,
            html5Test: /^(probably|maybe)$/i,
            preferFlash: !1,
            noSWFCache: !1,
            idPrefix: "sound"
        };
        this.defaultOptions = {
            autoLoad: !1,
            autoPlay: !1,
            from: null,
            loops: 1,
            onid3: null,
            onload: null,
            whileloading: null,
            onplay: null,
            onpause: null,
            onresume: null,
            whileplaying: null,
            onposition: null,
            onstop: null,
            onfailure: null,
            onfinish: null,
            multiShot: !0,
            multiShotEvents: !1,
            position: null,
            pan: 0,
            stream: !0,
            to: null,
            type: null,
            usePolicyFile: !1,
            volume: 100
        };
        this.flash9Options = {
            isMovieStar: null,
            usePeakData: !1,
            useWaveformData: !1,
            useEQData: !1,
            onbufferchange: null,
            ondataerror: null
        };
        this.movieStarOptions = {
            bufferTime: 3,
            serverURL: null,
            onconnect: null,
            duration: null
        };
        this.audioFormats = {
            mp3: {
                type: ['audio/mpeg; codecs="mp3"', "audio/mpeg", "audio/mp3", "audio/MPA", "audio/mpa-robust"],
                required: !0
            },
            mp4: {
                related: ["aac", "m4a", "m4b"],
                type: ['audio/mp4; codecs="mp4a.40.2"', "audio/aac", "audio/x-m4a", "audio/MP4A-LATM", "audio/mpeg4-generic"],
                required: !1
            },
            ogg: {
                type: ["audio/ogg; codecs=vorbis"],
                required: !1
            },
            opus: {
                type: ["audio/ogg; codecs=opus", "audio/opus"],
                required: !1
            },
            wav: {
                type: ['audio/wav; codecs="1"', "audio/wav", "audio/wave", "audio/x-wav"],
                required: !1
            }
        };
        this.movieID = "sm2-container";
        this.id = r || "sm2movie";
        this.debugID = "soundmanager-debug";
        this.debugURLParam = /([#?&])debug=1/i;
        this.versionNumber = "V2.97a.20150601";
        this.version = null;
        this.movieURL = null;
        this.altURL = null;
        this.swfLoaded = !1;
        this.enabled = !1;
        this.oMC = null;
        this.sounds = {};
        this.soundIDs = [];
        this.muted = !1;
        this.didFlashBlock = !1;
        this.filePattern = null;
        this.filePatterns = {
            flash8: /\.mp3(\?.*)?$/i,
            flash9: /\.mp3(\?.*)?$/i
        };
        this.features = {
            buffering: !1,
            peakData: !1,
            waveformData: !1,
            eqData: !1,
            movieStar: !1
        };
        this.sandbox = {
            type: null,
            types: {
                remote: "remote (domain-based) rules",
                localWithFile: "local with file access (no internet access)",
                localWithNetwork: "local with network (internet access only, no local access)",
                localTrusted: "local, trusted (local+internet access)"
            },
            description: null,
            noRemote: null,
            noLocal: null
        };
        this.html5 = {
            usingFlash: null
        };
        this.flash = {};
        this.html5Only = !1;
        this.ignoreFlash = !1;
        var ou, u = this,
            su = null,
            f = null,
            s = "soundManager",
            l = s + ": ",
            lf = "HTML5::",
            ut, w = navigator.userAgent,
            oi = n.location.href.toString(),
            e = document,
            ir, hu, rr, o, ft = [],
            ur = !0,
            it, kt = !1,
            dt = !1,
            v = !1,
            d = !1,
            si = !1,
            h, af = 0,
            gt, b, fr, cu, er, at, yt, pt, lu, or, sr, hr, rt, hi, vt, cr, ni, ci, li, wt, au, lr, vu = ["log", "info", "warn", "error"],
            yu = 8,
            pu, ar, wu, ti = null,
            vr = null,
            c, yr, bt, tt, bu, ai, vi, st, a, ii = !1,
            pr = !1,
            ku, du, gu, yi = 0,
            ri = null,
            pi, ht = [],
            ui, g = null,
            nf, wi, fi, ct, bi, wr, tf, p, rf = Array.prototype.slice,
            nt = !1,
            br, et, kr, uf, ot, ff, dr, ki, ef = 0,
            gr, k = 1e3,
            nu = w.match(/(ipad|iphone|ipod)/i),
            tu = w.match(/android/i),
            lt = w.match(/msie/i),
            vf = w.match(/webkit/i),
            di = w.match(/safari/i) && !w.match(/chrome/i),
            iu = w.match(/opera/i),
            gi = w.match(/(mobile|pre\/|xoom)/i) || nu || tu,
            ru = !oi.match(/usehtml5audio/i) && !oi.match(/sm2\-ignorebadua/i) && di && !w.match(/silk/i) && w.match(/OS X 10_6_([3-7])/i),
            uu = n.console !== t && console.log !== t,
            fu = e.hasFocus !== t ? e.hasFocus() : null,
            nr = di && (e.hasFocus === t || !e.hasFocus()),
            of = !nr,
            sf = /(mp3|mp4|mpa|m4a|m4b)/i,
            eu = "about:blank",
            yf = "data:audio/wave;base64,/UklGRiYAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQIAAAD//w==",
            ei = e.location ? e.location.protocol.match(/http/i) : null,
            pf = ei ? "" : "http://",
            hf = /^\s*audio\/(?:x-)?(?:mpeg4|aac|flv|mov|mp4||m4v|m4a|m4b|mp4v|3gp|3g2)\s*(?:$|;)/i,
            cf = ["mpeg4", "aac", "flv", "mov", "mp4", "m4v", "f4v", "m4a", "m4b", "mp4v", "3gp", "3g2"],
            wf = new RegExp("\\.(" + cf.join("|") + ")(\\?.*)?$", "i");
        this.mimePattern = /^\s*audio\/(?:x-)?(?:mp(?:eg|3))\s*(?:$|;)/i;
        this.useAltURL = !ei;
        tt = {
            swfBox: "sm2-object-box",
            swfDefault: "movieContainer",
            swfError: "swf_error",
            swfTimedout: "swf_timedout",
            swfLoaded: "swf_loaded",
            swfUnblocked: "swf_unblocked",
            sm2Debug: "sm2_debug",
            highPerf: "high_performance",
            flashDebug: "flash_debug"
        };
        this.hasHTML5 = function () {
            try {
                return Audio !== t && (iu && opera !== t && opera.version() < 10 ? new Audio(null) : new Audio).canPlayType !== t
            } catch (n) {
                return !1
            }
        }();
        this.setup = function (n) {
            var i = !u.url;
            return n !== t && v && g && u.ok() && (n.flashVersion !== t || n.url !== t || n.html5Test !== t) && st(c("setupLate")), fr(n), nt || (gi ? (!u.setupOptions.ignoreMobileRestrictions || u.setupOptions.forceUseGlobalHTML5Audio) && (ht.push(rt.globalHTML5), nt = !0) : u.setupOptions.forceUseGlobalHTML5Audio && (ht.push(rt.globalHTML5), nt = !0)), !gr && gi && (u.setupOptions.ignoreMobileRestrictions ? ht.push(rt.ignoreMobile) : ((!u.setupOptions.useHTML5Audio || u.setupOptions.preferFlash) && u._wD(rt.mobileUA), u.setupOptions.useHTML5Audio = !0, u.setupOptions.preferFlash = !1, nu ? u.ignoreFlash = !0 : (!tu || w.match(/android\s2\.3/i)) && tu || (u._wD(rt.globalHTML5), nt = !0))), n && (i && ni && n.url !== t && u.beginDelayedInit(), ni || n.url === t || e.readyState !== "complete" || setTimeout(vt, 1)), gr = !0, u
        };
        this.ok = function () {
            return g ? v && !d : u.useHTML5Audio && u.hasHTML5
        };
        this.supported = this.ok;
        this.getMovie = function (t) {
            return ut(t) || e[t] || n[t]
        };
        this.createSound = function (n, i) {
            function y() {
                return r = ai(r), u.sounds[r.id] = new ou(r), u.soundIDs.push(r.id), u.sounds[r.id]
            }
            var l, p, r, e = null;
            if (l = s + ".createSound(): ", p = l + c(v ? "notOK" : "notReady"), !v || !u.ok()) return st(p), !1;
            if (i !== t && (n = {
                id: n,
                url: i
            }), r = b(n), r.url = pi(r.url), r.id === t && (r.id = u.setupOptions.idPrefix + ef++), r.id.toString().charAt(0).match(/^[0-9]$/) && u._wD(l + c("badID", r.id), 2), u._wD(l + r.id + (r.url ? " (" + r.url + ")" : ""), 1), a(r.id, !0)) return u._wD(l + r.id + " exists", 1), u.sounds[r.id];
            if (wi(r)) e = y(), u.html5Only || u._wD(r.id + ": Using HTML5"), e._setup_html5(r);
            else {
                if (u.html5Only) return u._wD(r.id + ": No HTML5 support for this sound, and no Flash. Exiting."), y();
                if (u.html5.usingFlash && r.url && r.url.match(/data\:/i)) return u._wD(r.id + ": data: URIs not supported via Flash. Exiting."), y();
                o > 8 && (r.isMovieStar === null && (r.isMovieStar = !!(r.serverURL || (r.type ? r.type.match(hf) : !1) || r.url && r.url.match(wf))), r.isMovieStar && (u._wD(l + "using MovieStar handling"), r.loops > 1 && h("noNSLoop")));
                r = vi(r, l);
                e = y();
                o === 8 ? f._createSound(r.id, r.loops || 1, r.usePolicyFile) : (f._createSound(r.id, r.url, r.usePeakData, r.useWaveformData, r.useEQData, r.isMovieStar, r.isMovieStar ? r.bufferTime : !1, r.loops || 1, r.serverURL, r.duration || null, r.autoPlay, !0, r.autoLoad, r.usePolicyFile), r.serverURL || (e.connected = !0, r.onconnect && r.onconnect.apply(e)));
                !r.serverURL && (r.autoLoad || r.autoPlay) && e.load(r)
            }
            return !r.serverURL && r.autoPlay && e.play(), e
        };
        this.destroySound = function (n, t) {
            if (!a(n)) return !1;
            var i = u.sounds[n],
                r;
            for (i.stop(), i._iO = {}, i.unload(), r = 0; r < u.soundIDs.length; r++)
                if (u.soundIDs[r] === n) {
                    u.soundIDs.splice(r, 1);
                    break
                }
            return t || i.destruct(!0), i = null, delete u.sounds[n], !0
        };
        this.load = function (n, t) {
            return a(n) ? u.sounds[n].load(t) : !1
        };
        this.unload = function (n) {
            return a(n) ? u.sounds[n].unload() : !1
        };
        this.onPosition = function (n, t, i, r) {
            return a(n) ? u.sounds[n].onposition(t, i, r) : !1
        };
        this.onposition = this.onPosition;
        this.clearOnPosition = function (n, t, i) {
            return a(n) ? u.sounds[n].clearOnPosition(t, i) : !1
        };
        this.play = function (n, t) {
            var i = null,
                r = t && !(t instanceof Object);
            if (!v || !u.ok()) return st(s + ".play(): " + c(v ? "notOK" : "notReady")), !1;
            if (a(n, r)) r && (t = {
                url: t
            });
            else {
                if (!r) return !1;
                r && (t = {
                    url: t
                });
                t && t.url && (u._wD(s + '.play(): Attempting to create "' + n + '"', 1), t.id = n, i = u.createSound(t).play())
            }
            return i === null && (i = u.sounds[n].play(t)), i
        };
        this.start = this.play;
        this.setPosition = function (n, t) {
            return a(n) ? u.sounds[n].setPosition(t) : !1
        };
        this.stop = function (n) {
            return a(n) ? (u._wD(s + ".stop(" + n + ")", 1), u.sounds[n].stop()) : !1
        };
        this.stopAll = function () {
            var n;
            u._wD(s + ".stopAll()", 1);
            for (n in u.sounds) u.sounds.hasOwnProperty(n) && u.sounds[n].stop()
        };
        this.pause = function (n) {
            return a(n) ? u.sounds[n].pause() : !1
        };
        this.pauseAll = function () {
            for (var n = u.soundIDs.length - 1; n >= 0; n--) u.sounds[u.soundIDs[n]].pause()
        };
        this.resume = function (n) {
            return a(n) ? u.sounds[n].resume() : !1
        };
        this.resumeAll = function () {
            for (var n = u.soundIDs.length - 1; n >= 0; n--) u.sounds[u.soundIDs[n]].resume()
        };
        this.togglePause = function (n) {
            return a(n) ? u.sounds[n].togglePause() : !1
        };
        this.setPan = function (n, t) {
            return a(n) ? u.sounds[n].setPan(t) : !1
        };
        this.setVolume = function (n, i) {
            var r, f;
            if (n !== t && !isNaN(n) && i === t) {
                for (r = 0, f = u.soundIDs.length; r < f; r++) u.sounds[u.soundIDs[r]].setVolume(n);
                return
            }
            return a(n) ? u.sounds[n].setVolume(i) : !1
        };
        this.mute = function (n) {
            var t = 0;
            if (n instanceof String && (n = null), n) return a(n) ? (u._wD(s + '.mute(): Muting "' + n + '"'), u.sounds[n].mute()) : !1;
            for (u._wD(s + ".mute(): Muting all sounds"), t = u.soundIDs.length - 1; t >= 0; t--) u.sounds[u.soundIDs[t]].mute();
            return u.muted = !0, !0
        };
        this.muteAll = function () {
            u.mute()
        };
        this.unmute = function (n) {
            var t;
            if (n instanceof String && (n = null), n) return a(n) ? (u._wD(s + '.unmute(): Unmuting "' + n + '"'), u.sounds[n].unmute()) : !1;
            for (u._wD(s + ".unmute(): Unmuting all sounds"), t = u.soundIDs.length - 1; t >= 0; t--) u.sounds[u.soundIDs[t]].unmute();
            return u.muted = !1, !0
        };
        this.unmuteAll = function () {
            u.unmute()
        };
        this.toggleMute = function (n) {
            return a(n) ? u.sounds[n].toggleMute() : !1
        };
        this.getMemoryUse = function () {
            var n = 0;
            return f && o !== 8 && (n = parseInt(f._getMemoryUse(), 10)), n
        };
        this.disable = function (i) {
            var r;
            if (i === t && (i = !1), d) return !1;
            for (d = !0, h("shutdown", 1), r = u.soundIDs.length - 1; r >= 0; r--) pu(u.sounds[u.soundIDs[r]]);
            return gt(i), p.remove(n, "load", yt), !0
        };
        this.canPlayMIME = function (n) {
            var t;
            return u.hasHTML5 && (t = fi({
                type: n
            })), !t && g && (t = n && u.ok() ? !!((o > 8 ? n.match(hf) : null) || n.match(u.mimePattern)) : null), t
        };
        this.canPlayURL = function (n) {
            var t;
            return u.hasHTML5 && (t = fi({
                url: n
            })), !t && g && (t = n && u.ok() ? !!n.match(u.filePattern) : null), t
        };
        this.canPlayLink = function (n) {
            return n.type !== t && n.type && u.canPlayMIME(n.type) ? !0 : u.canPlayURL(n.href)
        };
        this.getSoundById = function (n, t) {
            if (!n) return null;
            var i = u.sounds[n];
            return i || t || u._wD(s + '.getSoundById(): Sound "' + n + '" not found.', 2), i
        };
        this.onready = function (t, i) {
            var r = "onready",
                f = !1;
            if (typeof t == "function") v && u._wD(c("queue", r)), i || (i = n), er(r, t, i), at(), f = !0;
            else throw c("needFunction", r);
            return f
        };
        this.ontimeout = function (t, i) {
            var r = "ontimeout",
                f = !1;
            if (typeof t == "function") v && u._wD(c("queue", r)), i || (i = n), er(r, t, i), at({
                type: r
            }), f = !0;
            else throw c("needFunction", r);
            return f
        };
        this._writeDebug = function (n, i) {
            var f, r;
            return u.setupOptions.debugMode ? uu && u.useConsole && (i && typeof i == "object" ? console.log(n, i) : vu[i] !== t ? console[vu[i]](n) : console.log(n), u.consoleOnly) ? !0 : (f = ut("soundmanager-debug"), !f) ? !1 : (r = e.createElement("div"), ++af % 2 == 0 && (r.className = "sm2-alt"), i = i === t ? 0 : parseInt(i, 10), r.appendChild(e.createTextNode(n)), i && (i >= 2 && (r.style.fontWeight = "bold"), i === 3 && (r.style.color = "#ff3333")), f.insertBefore(r, f.firstChild), f = null, !0) : !1
        };
        oi.indexOf("sm2-debug=alert") !== -1 && (this._writeDebug = function (t) {
            n.alert(t)
        });
        this._wD = this._writeDebug;
        this._debug = function () {
            var n, t;
            for (h("currentObj", 1), n = 0, t = u.soundIDs.length; n < t; n++) u.sounds[u.soundIDs[n]]._debug()
        };
        this.reboot = function (t, i) {
            u.soundIDs.length && u._wD("Destroying " + u.soundIDs.length + " SMSound object" + (u.soundIDs.length !== 1 ? "s" : "") + "...");
            for (var e, o, r = u.soundIDs.length - 1; r >= 0; r--) u.sounds[u.soundIDs[r]].destruct();
            if (f) try {
                lt && (vr = f.innerHTML);
                ti = f.parentNode.removeChild(f)
            } catch (c) {
                h("badRemove", 2)
            }
            if (vr = ti = g = f = null, u.enabled = ni = v = ii = pr = kt = dt = d = nt = u.swfLoaded = !1, u.soundIDs = [], u.sounds = {}, ef = 0, gr = !1, t) ft = [];
            else
                for (r in ft)
                    if (ft.hasOwnProperty(r))
                        for (e = 0, o = ft[r].length; e < o; e++) ft[r][e].fired = !1;
            return i || u._wD(s + ": Rebooting..."), u.html5 = {
                usingFlash: null
            }, u.flash = {}, u.html5Only = !1, u.ignoreFlash = !1, n.setTimeout(function () {
                i || u.beginDelayedInit()
            }, 20), u
        };
        this.reset = function () {
            return h("reset"), u.reboot(!0, !0)
        };
        this.getMoviePercent = function () {
            return f && "PercentLoaded" in f ? f.PercentLoaded() : null
        };
        this.beginDelayedInit = function () {
            si = !0;
            vt();
            setTimeout(function () {
                return pr ? !1 : (li(), hi(), pr = !0, !0)
            }, 20);
            pt()
        };
        this.destruct = function () {
            u._wD(s + ".destruct()");
            u.disable(!0)
        };
        ou = function (n) {
            var i = this,
                y, rt, ut, s, w, ft, d = !1,
                r = [],
                l = 0,
                g, et, e = null,
                v, tt;
            v = {
                duration: null,
                time: null
            };
            this.id = n.id;
            this.sID = this.id;
            this.url = n.url;
            this.options = b(n);
            this.instanceOptions = this.options;
            this._iO = this.instanceOptions;
            this.pan = this.options.pan;
            this.volume = this.options.volume;
            this.isHTML5 = !1;
            this._a = null;
            tt = this.url ? !1 : !0;
            this.id3 = {};
            this._debug = function () {
                u._wD(i.id + ": Merged options:", i.options)
            };
            this.load = function (n) {
                var s = null,
                    r;
                if (n !== t ? i._iO = b(n, i.options) : (n = i.options, i._iO = n, e && e !== i.url && (h("manURL"), i._iO.url = i.url, i.url = null)), i._iO.url || (i._iO.url = i.url), i._iO.url = pi(i._iO.url), i.instanceOptions = i._iO, r = i._iO, u._wD(i.id + ": load (" + r.url + ")"), !r.url && !i.url) return u._wD(i.id + ": load(): url is unassigned. Exiting.", 2), i;
                if (i.isHTML5 || o !== 8 || i.url || r.autoPlay || u._wD(i.id + ": Flash 8 load() limitation: Wait for onload() before calling play().", 1), r.url === i.url && i.readyState !== 0 && i.readyState !== 2) return h("onURL", 1), i.readyState === 3 && r.onload && ki(i, function () {
                    r.onload.apply(i, [!!i.duration])
                }), i;
                if (i.loaded = !1, i.readyState = 1, i.playState = 0, i.id3 = {}, wi(r)) s = i._setup_html5(r), s._called_load ? u._wD(i.id + ": Ignoring request to load again") : (i._html5_canplay = !1, i.url !== r.url && (u._wD(h("manURL") + ": " + r.url), i._a.src = r.url, i.setPosition(0)), i._a.autobuffer = "auto", i._a.preload = "auto", i._a._called_load = !0);
                else {
                    if (u.html5Only) return u._wD(i.id + ": No flash support. Exiting."), i;
                    if (i._iO.url && i._iO.url.match(/data\:/i)) return u._wD(i.id + ": data: URIs not supported via Flash. Exiting."), i;
                    try {
                        i.isHTML5 = !1;
                        i._iO = vi(ai(r));
                        i._iO.autoPlay && (i._iO.position || i._iO.from) && (u._wD(i.id + ": Disabling autoPlay because of non-zero offset case"), i._iO.autoPlay = !1);
                        r = i._iO;
                        o === 8 ? f._load(i.id, r.url, r.stream, r.autoPlay, r.usePolicyFile) : f._load(i.id, r.url, !!r.stream, !!r.autoPlay, r.loops || 1, !!r.autoLoad, r.usePolicyFile)
                    } catch (c) {
                        h("smError", 2);
                        it("onload", !1);
                        wt({
                            type: "SMSOUND_LOAD_JS_EXCEPTION",
                            fatal: !0
                        })
                    }
                }
                return i.url = r.url, i
            };
            this.unload = function () {
                return i.readyState !== 0 && (u._wD(i.id + ": unload()"), i.isHTML5 ? (s(), i._a && (i._a.pause(), e = bi(i._a))) : o === 8 ? f._unload(i.id, eu) : f._unload(i.id), y()), i
            };
            this.destruct = function (n) {
                u._wD(i.id + ": Destruct");
                i.isHTML5 ? (s(), i._a && (i._a.pause(), bi(i._a), nt || ut(), i._a._s = null, i._a = null)) : (i._iO.onfailure = null, f._destroySound(i.id));
                n || u.destroySound(i.id, !0)
            };
            this.play = function (n, r) {
                var e, v, y, c, s, l, a, g = !0,
                    h = null;
                if (e = i.id + ": play(): ", r = r === t ? !0 : r, n || (n = {}), i.url && (i._iO.url = i.url), i._iO = b(i._iO, i.options), i._iO = b(n, i._iO), i._iO.url = pi(i._iO.url), i.instanceOptions = i._iO, !i.isHTML5 && i._iO.serverURL && !i.connected) return i.getAutoPlay() || (u._wD(e + " Netstream not connected yet - setting autoPlay"), i.setAutoPlay(!0)), i;
                if ((wi(i._iO) && (i._setup_html5(i._iO), w()), i.playState !== 1 || i.paused || (v = i._iO.multiShot, v ? u._wD(e + "Already playing (multi-shot)", 1) : (u._wD(e + "Already playing (one-shot)", 1), i.isHTML5 && i.setPosition(i._iO.position), h = i)), h !== null) || (n.url && n.url !== i.url && (i.readyState || i.isHTML5 || o !== 8 || !tt ? i.load(i._iO) : tt = !1), i.loaded ? u._wD(e.substr(0, e.lastIndexOf(":"))) : i.readyState === 0 ? (u._wD(e + "Attempting to load"), i.isHTML5 || u.html5Only ? i.isHTML5 ? i.load(i._iO) : (u._wD(e + "Unsupported type. Exiting."), h = i) : (i._iO.autoPlay = !0, i.load(i._iO)), i.instanceOptions = i._iO) : i.readyState === 2 ? (u._wD(e + "Could not load - exiting", 2), h = i) : u._wD(e + "Loading - attempting to play..."), h !== null)) return h;
                if (!i.isHTML5 && o === 9 && i.position > 0 && i.position === i.duration && (u._wD(e + "Sound at end, resetting to position: 0"), n.position = 0), i.paused && i.position >= 0 && (!i._iO.serverURL || i.position > 0)) u._wD(e + "Resuming from paused state", 1), i.resume();
                else {
                    if (i._iO = b(n, i._iO), (!i.isHTML5 && i._iO.position !== null && i._iO.position > 0 || i._iO.from !== null && i._iO.from > 0 || i._iO.to !== null) && i.instanceCount === 0 && i.playState === 0 && !i._iO.serverURL) {
                        if (c = function () {
                            i._iO = b(n, i._iO);
                            i.play(i._iO)
                        }, i.isHTML5 && !i._html5_canplay ? (u._wD(e + "Beginning load for non-zero offset case"), i.load({
                            _oncanplay: c
                        }), h = !1) : i.isHTML5 || i.loaded || i.readyState && i.readyState === 2 || (u._wD(e + "Preloading for non-zero offset case"), i.load({
                            onload: c
                        }), h = !1), h !== null) return h;
                        i._iO = et()
                    } (!i.instanceCount || i._iO.multiShotEvents || i.isHTML5 && i._iO.multiShot && !nt || !i.isHTML5 && o > 8 && !i.getAutoPlay()) && i.instanceCount++;
                    i._iO.onposition && i.playState === 0 && ft(i);
                    i.playState = 1;
                    i.paused = !1;
                    i.position = i._iO.position !== t && !isNaN(i._iO.position) ? i._iO.position : 0;
                    i.isHTML5 || (i._iO = vi(ai(i._iO)));
                    i._iO.onplay && r && (i._iO.onplay.apply(i), d = !0);
                    i.setVolume(i._iO.volume, !0);
                    i.setPan(i._iO.pan, !0);
                    i.isHTML5 ? i.instanceCount < 2 ? (w(), y = i._setup_html5(), i.setPosition(i._iO.position), y.play()) : (u._wD(i.id + ": Cloning Audio() for instance #" + i.instanceCount + "..."), s = new Audio(i._iO.url), l = function () {
                        p.remove(s, "ended", l);
                        i._onfinish(i);
                        bi(s);
                        s = null
                    }, a = function () {
                        p.remove(s, "canplay", a);
                        try {
                            s.currentTime = i._iO.position / k
                        } catch (n) {
                            st(i.id + ": multiShot play() failed to apply position of " + i._iO.position / k)
                        }
                        s.play()
                    }, p.add(s, "ended", l), i._iO.volume !== t && (s.volume = Math.max(0, Math.min(1, i._iO.volume / 100))), i.muted && (s.muted = !0), i._iO.position ? p.add(s, "canplay", a) : s.play()) : (g = f._start(i.id, i._iO.loops || 1, o === 9 ? i.position : i.position / k, i._iO.multiShot || !1), o !== 9 || g || (u._wD(e + "No sound hardware, or 32-sound ceiling hit", 2), i._iO.onplayerror && i._iO.onplayerror.apply(i)))
                }
                return i
            };
            this.start = this.play;
            this.stop = function (n) {
                var t = i._iO,
                    r;
                return i.playState === 1 && (u._wD(i.id + ": stop()"), i._onbufferchange(0), i._resetOnPosition(0), i.paused = !1, i.isHTML5 || (i.playState = 0), g(), t.to && i.clearOnPosition(t.to), i.isHTML5 ? i._a && (r = i.position, i.setPosition(0), i.position = r, i._a.pause(), i.playState = 0, i._onTimer(), s()) : (f._stop(i.id, n), t.serverURL && i.unload()), i.instanceCount = 0, i._iO = {}, t.onstop && t.onstop.apply(i)), i
            };
            this.setAutoPlay = function (n) {
                u._wD(i.id + ": Autoplay turned " + (n ? "on" : "off"));
                i._iO.autoPlay = n;
                i.isHTML5 || (f._setAutoPlay(i.id, n), n && (i.instanceCount || i.readyState !== 1 || (i.instanceCount++ , u._wD(i.id + ": Incremented instance count to " + i.instanceCount))))
            };
            this.getAutoPlay = function () {
                return i._iO.autoPlay
            };
            this.setPosition = function (n) {
                n === t && (n = 0);
                var e, r, s = i.isHTML5 ? Math.max(n, 0) : Math.min(i.duration || i._iO.duration, Math.max(n, 0));
                if (i.position = s, r = i.position / k, i._resetOnPosition(i.position), i._iO.position = s, i.isHTML5) {
                    if (i._a) {
                        if (i._html5_canplay) {
                            if (i._a.currentTime !== r) {
                                u._wD(i.id + ": setPosition(" + r + ")");
                                try {
                                    i._a.currentTime = r;
                                    (i.playState === 0 || i.paused) && i._a.pause()
                                } catch (h) {
                                    u._wD(i.id + ": setPosition(" + r + ") failed: " + h.message, 2)
                                }
                            }
                        } else if (r) return u._wD(i.id + ": setPosition(" + r + "): Cannot seek yet, sound not ready", 2), i;
                        i.paused && i._onTimer(!0)
                    }
                } else e = o === 9 ? i.position : r, i.readyState && i.readyState !== 2 && f._setPosition(i.id, e, i.paused || !i.playState, i._iO.multiShot);
                return i
            };
            this.pause = function (n) {
                return i.paused || i.playState === 0 && i.readyState !== 1 ? i : (u._wD(i.id + ": pause()"), i.paused = !0, i.isHTML5 ? (i._setup_html5().pause(), s()) : (n || n === t) && f._pause(i.id, i._iO.multiShot), i._iO.onpause && i._iO.onpause.apply(i), i)
            };
            this.resume = function () {
                var n = i._iO;
                return i.paused ? (u._wD(i.id + ": resume()"), i.paused = !1, i.playState = 1, i.isHTML5 ? (i._setup_html5().play(), w()) : (n.isMovieStar && !n.serverURL && i.setPosition(i.position), f._pause(i.id, n.multiShot)), !d && n.onplay ? (n.onplay.apply(i), d = !0) : n.onresume && n.onresume.apply(i), i) : i
            };
            this.togglePause = function () {
                return (u._wD(i.id + ": togglePause()"), i.playState === 0) ? (i.play({
                    position: o === 9 && !i.isHTML5 ? i.position : i.position / k
                }), i) : (i.paused ? i.resume() : i.pause(), i)
            };
            this.setPan = function (n, r) {
                return n === t && (n = 0), r === t && (r = !1), i.isHTML5 || f._setPan(i.id, n), i._iO.pan = n, r || (i.pan = n, i.options.pan = n), i
            };
            this.setVolume = function (n, r) {
                return n === t && (n = 100), r === t && (r = !1), i.isHTML5 ? i._a && (u.muted && !i.muted && (i.muted = !0, i._a.muted = !0), i._a.volume = Math.max(0, Math.min(1, n / 100))) : f._setVolume(i.id, u.muted && !i.muted || i.muted ? 0 : n), i._iO.volume = n, r || (i.volume = n, i.options.volume = n), i
            };
            this.mute = function () {
                return i.muted = !0, i.isHTML5 ? i._a && (i._a.muted = !0) : f._setVolume(i.id, 0), i
            };
            this.unmute = function () {
                i.muted = !1;
                var n = i._iO.volume !== t;
                return i.isHTML5 ? i._a && (i._a.muted = !1) : f._setVolume(i.id, n ? i._iO.volume : i.options.volume), i
            };
            this.toggleMute = function () {
                return i.muted ? i.unmute() : i.mute()
            };
            this.onPosition = function (n, u, f) {
                return r.push({
                    position: parseInt(n, 10),
                    method: u,
                    scope: f !== t ? f : i,
                    fired: !1
                }), i
            };
            this.onposition = this.onPosition;
            this.clearOnPosition = function (n, t) {
                var i;
                if (n = parseInt(n, 10), isNaN(n)) return !1;
                for (i = 0; i < r.length; i++) n === r[i].position && (t && t !== r[i].method || (r[i].fired && l-- , r.splice(i, 1)))
            };
            this._processOnPosition = function () {
                var t, n, u = r.length;
                if (!u || !i.playState || l >= u) return !1;
                for (t = u - 1; t >= 0; t--) n = r[t], !n.fired && i.position >= n.position && (n.fired = !0, l++ , n.method.apply(n.scope, [n.position]), u = r.length);
                return !0
            };
            this._resetOnPosition = function (n) {
                var t, i, u = r.length;
                if (!u) return !1;
                for (t = u - 1; t >= 0; t--) i = r[t], i.fired && n <= i.position && (i.fired = !1, l--);
                return !0
            };
            et = function () {
                var n = i._iO,
                    r = n.from,
                    t = n.to,
                    e, f;
                return f = function () {
                    u._wD(i.id + ': "To" time of ' + t + " reached.");
                    i.clearOnPosition(t, f);
                    i.stop()
                }, e = function () {
                    if (u._wD(i.id + ': Playing "from" ' + r), t !== null && !isNaN(t)) i.onPosition(t, f)
                }, r === null || isNaN(r) || (n.position = r, n.multiShot = !1, e()), n
            };
            ft = function () {
                var n, t = i._iO.onposition;
                if (t)
                    for (n in t)
                        if (t.hasOwnProperty(n)) i.onPosition(parseInt(n, 10), t[n])
            };
            g = function () {
                var n, t = i._iO.onposition;
                if (t)
                    for (n in t) t.hasOwnProperty(n) && i.clearOnPosition(parseInt(n, 10))
            };
            w = function () {
                i.isHTML5 && ku(i)
            };
            s = function () {
                i.isHTML5 && du(i)
            };
            y = function (n) {
                n || (r = [], l = 0);
                d = !1;
                i._hasTimer = null;
                i._a = null;
                i._html5_canplay = !1;
                i.bytesLoaded = null;
                i.bytesTotal = null;
                i.duration = i._iO && i._iO.duration ? i._iO.duration : null;
                i.durationEstimate = null;
                i.buffered = [];
                i.eqData = [];
                i.eqData.left = [];
                i.eqData.right = [];
                i.failures = 0;
                i.isBuffering = !1;
                i.instanceOptions = {};
                i.instanceCount = 0;
                i.loaded = !1;
                i.metadata = {};
                i.readyState = 0;
                i.muted = !1;
                i.paused = !1;
                i.peakData = {
                    left: 0,
                    right: 0
                };
                i.waveformData = {
                    left: [],
                    right: []
                };
                i.playState = 0;
                i.position = null;
                i.id3 = {}
            };
            y();
            this._onTimer = function (n) {
                var t, r = !1,
                    u, f = {};
                if (i._hasTimer || n) return i._a && (n || (i.playState > 0 || i.readyState === 1) && !i.paused) && (t = i._get_html5_duration(), t !== v.duration && (v.duration = t, i.duration = t, r = !0), i.durationEstimate = i.duration, u = i._a.currentTime * k || 0, u !== v.time && (v.time = u, r = !0), (r || n) && i._whileplaying(u, f, f, f, f)), r
            };
            this._get_html5_duration = function () {
                var t = i._iO,
                    n = i._a && i._a.duration ? i._a.duration * k : t && t.duration ? t.duration : null;
                return n && !isNaN(n) && n !== Infinity ? n : null
            };
            this._apply_loop = function (n, t) {
                !n.loop && t > 1 && u._wD("Note: Native HTML5 looping is infinite.", 1);
                n.loop = t > 1 ? "loop" : ""
            };
            this._setup_html5 = function (n) {
                var r = b(i._iO, n),
                    t = nt ? su : i._a,
                    f = decodeURI(r.url),
                    u;
                if (nt ? f === decodeURI(br) && (u = !0) : f === decodeURI(e) && (u = !0), t) {
                    if (t._s)
                        if (nt) t._s && t._s.playState && !u && t._s.stop();
                        else if (!nt && f === decodeURI(e)) return i._apply_loop(t, r.loops), t;
                    u || (e && y(!1), t.src = r.url, i.url = r.url, e = r.url, br = r.url, t._called_load = !1)
                } else r.autoLoad || r.autoPlay ? (i._a = new Audio(r.url), i._a.load()) : i._a = iu && opera.version() < 10 ? new Audio(null) : new Audio, t = i._a, t._called_load = !1, nt && (su = t);
                return i.isHTML5 = !0, i._a = t, t._s = i, rt(), i._apply_loop(t, r.loops), r.autoLoad || r.autoPlay ? i.load() : (t.autobuffer = !1, t.preload = "auto"), t
            };
            rt = function () {
                function t(n, t, r) {
                    return i._a ? i._a.addEventListener(n, t, r || !1) : null
                }
                if (i._a._added_events) return !1;
                var n;
                i._a._added_events = !0;
                for (n in ot) ot.hasOwnProperty(n) && t(n, ot[n]);
                return !0
            };
            ut = function () {
                function t(n, t, r) {
                    return i._a ? i._a.removeEventListener(n, t, r || !1) : null
                }
                var n;
                u._wD(i.id + ": Removing event listeners");
                i._a._added_events = !1;
                for (n in ot) ot.hasOwnProperty(n) && t(n, ot[n])
            };
            this._onload = function (n) {
                var r, t = !!n || !i.isHTML5 && o === 8 && i.duration;
                return r = i.id + ": ", u._wD(r + (t ? "onload()" : "Failed to load / invalid sound?" + (i.duration ? " -" : " Zero-length duration reported.") + " (" + i.url + ")"), t ? 1 : 2), t || i.isHTML5 || (u.sandbox.noRemote === !0 && u._wD(r + c("noNet"), 1), u.sandbox.noLocal === !0 && u._wD(r + c("noLocal"), 1)), i.loaded = t, i.readyState = t ? 3 : 2, i._onbufferchange(0), i._iO.onload && ki(i, function () {
                    i._iO.onload.apply(i, [t])
                }), !0
            };
            this._onbufferchange = function (n) {
                return i.playState === 0 ? !1 : n && i.isBuffering || !n && !i.isBuffering ? !1 : (i.isBuffering = n === 1, i._iO.onbufferchange && (u._wD(i.id + ": Buffer state change: " + n), i._iO.onbufferchange.apply(i, [n])), !0)
            };
            this._onsuspend = function () {
                return i._iO.onsuspend && (u._wD(i.id + ": Playback suspended"), i._iO.onsuspend.apply(i)), !0
            };
            this._onfailure = function (n, t, r) {
                if (i.failures++ , u._wD(i.id + ": Failure (" + i.failures + "): " + n), i._iO.onfailure && i.failures === 1) i._iO.onfailure(n, t, r);
                else u._wD(i.id + ": Ignoring failure")
            };
            this._onwarning = function (n, t, r) {
                if (i._iO.onwarning) i._iO.onwarning(n, t, r)
            };
            this._onfinish = function () {
                var n = i._iO.onfinish;
                i._onbufferchange(0);
                i._resetOnPosition(0);
                i.instanceCount && (i.instanceCount-- , i.instanceCount || (g(), i.playState = 0, i.paused = !1, i.instanceCount = 0, i.instanceOptions = {}, i._iO = {}, s(), i.isHTML5 && (i.position = 0)), (!i.instanceCount || i._iO.multiShotEvents) && n && (u._wD(i.id + ": onfinish()"), ki(i, function () {
                    n.apply(i)
                })))
            };
            this._whileloading = function (n, t, r, u) {
                var f = i._iO;
                i.bytesLoaded = n;
                i.bytesTotal = t;
                i.duration = Math.floor(r);
                i.bufferLength = u;
                i.durationEstimate = i.isHTML5 || f.isMovieStar ? i.duration : f.duration ? i.duration > f.duration ? i.duration : f.duration : parseInt(i.bytesTotal / i.bytesLoaded * i.duration, 10);
                i.isHTML5 || (i.buffered = [{
                    start: 0,
                    end: i.duration
                }]);
                (i.readyState !== 3 || i.isHTML5) && f.whileloading && f.whileloading.apply(i)
            };
            this._whileplaying = function (n, r, u, f, e) {
                var s = i._iO,
                    h;
                return isNaN(n) || n === null ? !1 : (i.position = Math.max(0, n), i._processOnPosition(), !i.isHTML5 && o > 8 && (s.usePeakData && r !== t && r && (i.peakData = {
                    left: r.leftPeak,
                    right: r.rightPeak
                }), s.useWaveformData && u !== t && u && (i.waveformData = {
                    left: u.split(","),
                    right: f.split(",")
                }), s.useEQData && e !== t && e && e.leftEQ && (h = e.leftEQ.split(","), i.eqData = h, i.eqData.left = h, e.rightEQ !== t && e.rightEQ && (i.eqData.right = e.rightEQ.split(",")))), i.playState === 1 && (i.isHTML5 || o !== 8 || i.position || !i.isBuffering || i._onbufferchange(0), s.whileplaying && s.whileplaying.apply(i)), !0)
            };
            this._oncaptiondata = function (n) {
                u._wD(i.id + ": Caption data received.");
                i.captiondata = n;
                i._iO.oncaptiondata && i._iO.oncaptiondata.apply(i, [n])
            };
            this._onmetadata = function (n, t) {
                u._wD(i.id + ": Metadata received.");
                for (var f = {}, r = 0, e = n.length; r < e; r++) f[n[r]] = t[r];
                i.metadata = f;
                i._iO.onmetadata && i._iO.onmetadata.call(i, i.metadata)
            };
            this._onid3 = function (n, t) {
                u._wD(i.id + ": ID3 data received.");
                for (var f = [], r = 0, e = n.length; r < e; r++) f[n[r]] = t[r];
                i.id3 = b(i.id3, f);
                i._iO.onid3 && i._iO.onid3.apply(i)
            };
            this._onconnect = function (n) {
                n = n === 1;
                u._wD(i.id + ": " + (n ? "Connected." : "Failed to connect? - " + i.url), n ? 1 : 2);
                i.connected = n;
                n && (i.failures = 0, a(i.id) && (i.getAutoPlay() ? i.play(t, i.getAutoPlay()) : i._iO.autoLoad && i.load()), i._iO.onconnect && i._iO.onconnect.apply(i, [n]))
            };
            this._ondataerror = function (n) {
                i.playState > 0 && (u._wD(i.id + ": Data error: " + n), i._iO.ondataerror && i._iO.ondataerror.apply(i))
            };
            this._debug()
        };
        ci = function () {
            return e.body || e.getElementsByTagName("div")[0]
        };
        ut = function (n) {
            return e.getElementById(n)
        };
        b = function (n, i) {
            var e = n || {},
                f, r;
            f = i === t ? u.defaultOptions : i;
            for (r in f) f.hasOwnProperty(r) && e[r] === t && (e[r] = typeof f[r] != "object" || f[r] === null ? f[r] : b(e[r], f[r]));
            return e
        };
        ki = function (t, i) {
            t.isHTML5 || o !== 8 ? i() : n.setTimeout(i, 0)
        };
        cu = {
            onready: 1,
            ontimeout: 1,
            defaultOptions: 1,
            flash9Options: 1,
            movieStarOptions: 1
        };
        fr = function (n, i) {
            var r, f = !0,
                s = i !== t,
                o = u.setupOptions,
                e = cu;
            if (n === t) {
                f = [];
                for (r in o) o.hasOwnProperty(r) && f.push(r);
                for (r in e) e.hasOwnProperty(r) && (typeof u[r] == "object" ? f.push(r + ": {...}") : u[r] instanceof Function ? f.push(r + ": function() {...}") : f.push(r));
                return u._wD(c("setup", f.join(", "))), !1
            }
            for (r in n)
                if (n.hasOwnProperty(r))
                    if (typeof n[r] != "object" || n[r] === null || n[r] instanceof Array || n[r] instanceof RegExp) s && e[i] !== t ? u[i][r] = n[r] : o[r] !== t ? (u.setupOptions[r] = n[r], u[r] = n[r]) : e[r] === t ? (st(c(u[r] === t ? "setupUndef" : "setupError", r), 2), f = !1) : u[r] instanceof Function ? u[r].apply(u, n[r] instanceof Array ? n[r] : [n[r]]) : u[r] = n[r];
                    else if (e[r] === t) st(c(u[r] === t ? "setupUndef" : "setupError", r), 2), f = !1;
                    else return fr(n[r], r);
            return f
        };
        p = function () {
            function i(n) {
                var i = rf.call(n),
                    r = i.length;
                return t ? (i[1] = "on" + i[1], r > 3 && i.pop()) : r === 3 && i.push(!1), i
            }

            function r(n, i) {
                var r = n.shift(),
                    f = [u[i]];
                t ? r[f](n[0], n[1]) : r[f].apply(r, n)
            }

            function f() {
                r(i(arguments), "add")
            }

            function e() {
                r(i(arguments), "remove")
            }
            var t = n.attachEvent,
                u = {
                    add: t ? "attachEvent" : "addEventListener",
                    remove: t ? "detachEvent" : "removeEventListener"
                };
            return {
                add: f,
                remove: e
            }
        }();
        ot = {
            abort: y(function () {
                u._wD(this._s.id + ": abort")
            }),
            canplay: y(function () {
                var n = this._s,
                    i;
                if (n._html5_canplay) return !0;
                if (n._html5_canplay = !0, u._wD(n.id + ": canplay"), n._onbufferchange(0), i = n._iO.position !== t && !isNaN(n._iO.position) ? n._iO.position / k : null, this.currentTime !== i) {
                    u._wD(n.id + ": canplay: Setting position to " + i);
                    try {
                        this.currentTime = i
                    } catch (r) {
                        u._wD(n.id + ": canplay: Setting position of " + i + " failed: " + r.message, 2)
                    }
                }
                n._iO._oncanplay && n._iO._oncanplay()
            }),
            canplaythrough: y(function () {
                var n = this._s;
                n.loaded || (n._onbufferchange(0), n._whileloading(n.bytesLoaded, n.bytesTotal, n._get_html5_duration()), n._onload(!0))
            }),
            durationchange: y(function () {
                var n = this._s,
                    t;
                t = n._get_html5_duration();
                isNaN(t) || t === n.duration || (u._wD(this._s.id + ": durationchange (" + t + ")" + (n.duration ? ", previously " + n.duration : "")), n.durationEstimate = n.duration = t)
            }),
            ended: y(function () {
                var n = this._s;
                u._wD(n.id + ": ended");
                n._onfinish()
            }),
            error: y(function () {
                u._wD(this._s.id + ": HTML5 error, code " + this.error.code);
                this._s._onload(!1)
            }),
            loadeddata: y(function () {
                var n = this._s;
                u._wD(n.id + ": loadeddata");
                n._loaded || di || (n.duration = n._get_html5_duration())
            }),
            loadedmetadata: y(function () {
                u._wD(this._s.id + ": loadedmetadata")
            }),
            loadstart: y(function () {
                u._wD(this._s.id + ": loadstart");
                this._s._onbufferchange(1)
            }),
            play: y(function () {
                this._s._onbufferchange(0)
            }),
            playing: y(function () {
                u._wD(this._s.id + ": playing " + String.fromCharCode(9835));
                this._s._onbufferchange(0)
            }),
            progress: y(function (n) {
                var f = this._s,
                    t, e, o, h = 0,
                    c = n.type === "progress",
                    i = n.target.buffered,
                    r = n.loaded || 0,
                    s = n.total || 1;
                if (f.buffered = [], i && i.length) {
                    for (t = 0, e = i.length; t < e; t++) f.buffered.push({
                        start: i.start(t) * k,
                        end: i.end(t) * k
                    });
                    if (h = (i.end(0) - i.start(0)) * k, r = Math.min(1, h / (n.target.duration * k)), c && i.length > 1) {
                        for (o = [], e = i.length, t = 0; t < e; t++) o.push(n.target.buffered.start(t) * k + "-" + n.target.buffered.end(t) * k);
                        u._wD(this._s.id + ": progress, timeRanges: " + o.join(", "))
                    }
                    c && !isNaN(r) && u._wD(this._s.id + ": progress, " + Math.floor(r * 100) + "% loaded")
                }
                isNaN(r) || (f._whileloading(r, s, f._get_html5_duration()), r && s && r === s && ot.canplaythrough.call(this, n))
            }),
            ratechange: y(function () {
                u._wD(this._s.id + ": ratechange")
            }),
            suspend: y(function (n) {
                var t = this._s;
                u._wD(this._s.id + ": suspend");
                ot.progress.call(this, n);
                t._onsuspend()
            }),
            stalled: y(function () {
                u._wD(this._s.id + ": stalled")
            }),
            timeupdate: y(function () {
                this._s._onTimer()
            }),
            waiting: y(function () {
                var n = this._s;
                u._wD(this._s.id + ": waiting");
                n._onbufferchange(1)
            })
        };
        wi = function (n) {
            return n && (n.type || n.url || n.serverURL) ? n.serverURL || n.type && tr(n.type) ? !1 : n.type ? fi({
                type: n.type
            }) : fi({
                url: n.url
            }) || u.html5Only || n.url.match(/data\:/i) : !1
        };
        bi = function (n) {
            var i;
            return n && (i = di ? eu : u.html5.canPlayType("audio/wav") ? yf : eu, n.src = i, n._called_unload !== t && (n._called_load = !1)), nt && (br = null), i
        };
        fi = function (n) {
            if (!u.useHTML5Audio || !u.hasHTML5) return !1;
            var h = n.url || null,
                i = n.type || null,
                o = u.audioFormats,
                f, s, r, e;
            if (i && u.html5[i] !== t) return u.html5[i] && !tr(i);
            if (!ct) {
                ct = [];
                for (e in o) o.hasOwnProperty(e) && (ct.push(e), o[e].related && (ct = ct.concat(o[e].related)));
                ct = new RegExp("\\.(" + ct.join("|") + ")(\\?.*)?$", "i")
            }
            return r = h ? h.toLowerCase().match(ct) : null, r && r.length ? r = r[1] : i ? (s = i.indexOf(";"), r = (s !== -1 ? i.substr(0, s) : i).substr(6)) : f = !1, r && u.html5[r] !== t ? f = u.html5[r] && !tr(r) : (i = "audio/" + r, f = u.html5.canPlayType({
                type: i
            }), u.html5[r] = f, f = f && u.html5[i] && !tr(i)), f
        };
        tf = function () {
            function s(n) {
                var r, f, t = !1,
                    o = !1;
                if (!e || typeof e.canPlayType != "function") return t;
                if (n instanceof Array) {
                    for (i = 0, f = n.length; i < f; i++)(u.html5[n[i]] || e.canPlayType(n[i]).match(u.html5Test)) && (o = !0, u.html5[n[i]] = !0, u.flash[n[i]] = !!n[i].match(sf));
                    t = o
                } else r = e && typeof e.canPlayType == "function" ? e.canPlayType(n) : !1, t = !!(r && r.match(u.html5Test));
                return t
            }
            if (!u.useHTML5Audio || !u.hasHTML5) return u.html5.usingFlash = !0, g = !0, !1;
            var e = Audio !== t ? iu && opera.version() < 10 ? new Audio(null) : new Audio : null,
                n, o, f = {},
                r, i;
            r = u.audioFormats;
            for (n in r)
                if (r.hasOwnProperty(n) && (o = "audio/" + n, f[n] = s(r[n].type), f[o] = f[n], n.match(sf) ? (u.flash[n] = !0, u.flash[o] = !0) : (u.flash[n] = !1, u.flash[o] = !1), r[n] && r[n].related))
                    for (i = r[n].related.length - 1; i >= 0; i--) f["audio/" + r[n].related[i]] = f[n], u.html5[r[n].related[i]] = f[n], u.flash[r[n].related[i]] = f[n];
            return f.canPlayType = e ? s : null, u.html5 = b(u.html5, f), u.html5.usingFlash = nf(), g = u.html5.usingFlash, !0
        };
        rt = {
            notReady: "Unavailable - wait until onready() has fired.",
            notOK: "Audio support is not available.",
            domError: s + "exception caught while appending SWF to DOM.",
            spcWmode: "Removing wmode, preventing known SWF loading issue(s)",
            swf404: l + "Verify that %s is a valid path.",
            tryDebug: "Try " + s + ".debugFlash = true for more security details (output goes to SWF.)",
            checkSWF: "See SWF output for more debug info.",
            localFail: l + "Non-HTTP page (" + e.location.protocol + " URL?) Review Flash player security settings for this special case:\nhttp://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager04.html\nMay need to add/allow path, eg. c:/sm2/ or /users/me/sm2/",
            waitFocus: l + "Special case: Waiting for SWF to load with window focus...",
            waitForever: l + "Waiting indefinitely for Flash (will recover if unblocked)...",
            waitSWF: l + "Waiting for 100% SWF load...",
            needFunction: l + "Function object expected for %s",
            badID: 'Sound ID "%s" should be a string, starting with a non-numeric character',
            currentObj: l + "_debug(): Current sound objects",
            waitOnload: l + "Waiting for window.onload()",
            docLoaded: l + "Document already loaded",
            onload: l + "initComplete(): calling soundManager.onload()",
            onloadOK: s + ".onload() complete",
            didInit: l + "init(): Already called?",
            secNote: "Flash security note: Network/internet URLs will not load due to security restrictions. Access can be configured via Flash Player Global Security Settings Page: http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager04.html",
            badRemove: l + "Failed to remove Flash node.",
            shutdown: s + ".disable(): Shutting down",
            queue: l + "Queueing %s handler",
            smError: "SMSound.load(): Exception: JS-Flash communication failed, or JS error.",
            fbTimeout: "No flash response, applying ." + tt.swfTimedout + " CSS...",
            fbLoaded: "Flash loaded",
            fbHandler: l + "flashBlockHandler()",
            manURL: "SMSound.load(): Using manually-assigned URL",
            onURL: s + ".load(): current URL already assigned.",
            badFV: s + '.flashVersion must be 8 or 9. "%s" is invalid. Reverting to %s.',
            as2loop: "Note: Setting stream:false so looping can work (flash 8 limitation)",
            noNSLoop: "Note: Looping not implemented for MovieStar formats",
            needfl9: "Note: Switching to flash 9, required for MP4 formats.",
            mfTimeout: "Setting flashLoadTimeout = 0 (infinite) for off-screen, mobile flash case",
            needFlash: l + "Fatal error: Flash is needed to play some required formats, but is not available.",
            gotFocus: l + "Got window focus.",
            policy: "Enabling usePolicyFile for data access",
            setup: s + ".setup(): allowed parameters: %s",
            setupError: s + '.setup(): "%s" cannot be assigned with this method.',
            setupUndef: s + '.setup(): Could not find option "%s"',
            setupLate: s + ".setup(): url, flashVersion and html5Test property changes will not take effect until reboot().",
            noURL: l + "Flash URL required. Call soundManager.setup({url:...}) to get started.",
            sm2Loaded: "SoundManager 2: Ready. " + String.fromCharCode(10003),
            reset: s + ".reset(): Removing event callbacks",
            mobileUA: "Mobile UA detected, preferring HTML5 by default.",
            globalHTML5: "Using singleton HTML5 Audio() pattern for this device.",
            ignoreMobile: "Ignoring mobile restrictions for this device."
        };
        c = function () {
            var n, i, u, r, t;
            if (n = rf.call(arguments), r = n.shift(), t = rt && rt[r] ? rt[r] : "", t && n && n.length)
                for (i = 0, u = n.length; i < u; i++) t = t.replace("%s", n[i]);
            return t
        };
        ai = function (n) {
            return o === 8 && n.loops > 1 && n.stream && (h("as2loop"), n.stream = !1), n
        };
        vi = function (n, t) {
            return n && !n.usePolicyFile && (n.onid3 || n.usePeakData || n.useWaveformData || n.useEQData) && (u._wD((t || "") + c("policy")), n.usePolicyFile = !0), n
        };
        st = function (n) {
            uu && console.warn !== t ? console.warn(n) : u._wD(n)
        };
        ir = function () {
            return !1
        };
        pu = function (n) {
            for (var t in n) n.hasOwnProperty(t) && typeof n[t] == "function" && (n[t] = ir);
            t = null
        };
        ar = function (n) {
            n === t && (n = !1);
            (d || n) && u.disable(n)
        };
        wu = function (n) {
            var i = null,
                t;
            if (n)
                if (n.match(/\.swf(\?.*)?$/i)) {
                    if (i = n.substr(n.toLowerCase().lastIndexOf(".swf?") + 4), i) return n
                } else n.lastIndexOf("/") !== n.length - 1 && (n += "/");
            return t = (n && n.lastIndexOf("/") !== -1 ? n.substr(0, n.lastIndexOf("/") + 1) : "./") + u.movieURL, u.noSWFCache && (t += "?ts=" + (new Date).getTime()), t
        };
        sr = function () {
            o = parseInt(u.flashVersion, 10);
            o !== 8 && o !== 9 && (u._wD(c("badFV", o, yu)), u.flashVersion = o = yu);
            var n = u.debugMode || u.debugFlash ? "_debug.swf" : ".swf";
            u.useHTML5Audio && !u.html5Only && u.audioFormats.mp4.required && o < 9 && (u._wD(c("needfl9")), u.flashVersion = o = 9);
            u.version = u.versionNumber + (u.html5Only ? " (HTML5-only mode)" : o === 9 ? " (AS3/Flash 9)" : " (AS2/Flash 8)");
            o > 8 ? (u.defaultOptions = b(u.defaultOptions, u.flash9Options), u.features.buffering = !0, u.defaultOptions = b(u.defaultOptions, u.movieStarOptions), u.filePatterns.flash9 = new RegExp("\\.(mp3|" + cf.join("|") + ")(\\?.*)?$", "i"), u.features.movieStar = !0) : u.features.movieStar = !1;
            u.filePattern = u.filePatterns[o !== 8 ? "flash9" : "flash8"];
            u.movieURL = (o === 8 ? "soundmanager2.swf" : "soundmanager2_flash9.swf").replace(".swf", n);
            u.features.peakData = u.features.waveformData = u.features.eqData = o > 8
        };
        au = function (n, t) {
            if (!f) return !1;
            f._setPolling(n, t)
        };
        lr = function () {
            if (u.debugURLParam.test(oi) && (u.setupOptions.debugMode = u.debugMode = !0), ut(u.debugID)) return !1;
            var n, t, i, r, f;
            if (u.debugMode && !ut(u.debugID) && (!uu || !u.useConsole || !u.consoleOnly)) {
                n = e.createElement("div");
                n.id = u.debugID + "-toggle";
                r = {
                    position: "fixed",
                    bottom: "0px",
                    right: "0px",
                    width: "1.2em",
                    height: "1.2em",
                    lineHeight: "1.2em",
                    margin: "2px",
                    textAlign: "center",
                    border: "1px solid #999",
                    cursor: "pointer",
                    background: "#fff",
                    color: "#333",
                    zIndex: 10001
                };
                n.appendChild(e.createTextNode("-"));
                n.onclick = bu;
                n.title = "Toggle SM2 debug console";
                w.match(/msie 6/i) && (n.style.position = "absolute", n.style.cursor = "hand");
                for (f in r) r.hasOwnProperty(f) && (n.style[f] = r[f]);
                if (t = e.createElement("div"), t.id = u.debugID, t.style.display = u.debugMode ? "block" : "none", u.debugMode && !ut(n.id)) {
                    try {
                        i = ci();
                        i.appendChild(n)
                    } catch (o) {
                        throw new Error(c("domError") + " \n" + o.toString());
                    }
                    i.appendChild(t)
                }
            }
            i = null
        };
        a = this.getSoundById;
        h = function (n, t) {
            return n ? u._wD(c(n), t) : ""
        };
        bu = function () {
            var n = ut(u.debugID),
                t = ut(u.debugID + "-toggle");
            if (!n) return !1;
            ur ? (t.innerHTML = "+", n.style.display = "none") : (t.innerHTML = "-", n.style.display = "block");
            ur = !ur
        };
        it = function (i, r, u) {
            if (n.sm2Debugger !== t) try {
                sm2Debugger.handleEvent(i, r, u)
            } catch (f) {
                return !1
            }
            return !0
        };
        bt = function () {
            var n = [];
            return u.debugMode && n.push(tt.sm2Debug), u.debugFlash && n.push(tt.flashDebug), u.useHighPerformance && n.push(tt.highPerf), n.join(" ")
        };
        yr = function () {
            var t = c("fbHandler"),
                i = u.getMoviePercent(),
                n = tt,
                r = {
                    type: "FLASHBLOCK"
                };
            if (u.html5Only) return !1;
            u.ok() ? (u.didFlashBlock && u._wD(t + ": Unblocked"), u.oMC && (u.oMC.className = [bt(), n.swfDefault, n.swfLoaded + (u.didFlashBlock ? " " + n.swfUnblocked : "")].join(" "))) : (g && (u.oMC.className = bt() + " " + n.swfDefault + " " + (i === null ? n.swfTimedout : n.swfError), u._wD(t + ": " + c("fbTimeout") + (i ? " (" + c("fbLoaded") + ")" : ""))), u.didFlashBlock = !0, at({
                type: "ontimeout",
                ignoreInit: !0,
                error: r
            }), wt(r))
        };
        er = function (n, i, r) {
            ft[n] === t && (ft[n] = []);
            ft[n].push({
                method: i,
                scope: r || null,
                fired: !1
            })
        };
        at = function (n) {
            if ((n || (n = {
                type: u.ok() ? "onready" : "ontimeout"
            }), !v && n && !n.ignoreInit) || n.type === "ontimeout" && (u.ok() || d && !n.ignoreInit)) return !1;
            var o = {
                success: n && n.ignoreInit ? u.ok() : !d
            },
                f = n && n.type ? ft[n.type] || [] : [],
                i = [],
                t, r, e = [o],
                s = g && !u.ok();
            for (n.error && (e[0].error = n.error), t = 0, r = f.length; t < r; t++) f[t].fired !== !0 && i.push(f[t]);
            if (i.length)
                for (t = 0, r = i.length; t < r; t++) i[t].scope ? i[t].method.apply(i[t].scope, e) : i[t].method.apply(this, e), s || (i[t].fired = !0);
            return !0
        };
        yt = function () {
            n.setTimeout(function () {
                u.useFlashBlock && yr();
                at();
                typeof u.onload == "function" && (h("onload", 1), u.onload.apply(n), h("onloadOK", 1));
                u.waitForWindowLoad && p.add(n, "load", yt)
            }, 1)
        };
        kr = function () {
            if (et !== t) return et;
            var r = !1,
                e = navigator,
                o = e.plugins,
                u, f, i, s = n.ActiveXObject;
            if (o && o.length) f = "application/x-shockwave-flash", i = e.mimeTypes, i && i[f] && i[f].enabledPlugin && i[f].enabledPlugin.description && (r = !0);
            else if (s !== t && !w.match(/MSAppHost/i)) {
                try {
                    u = new s("ShockwaveFlash.ShockwaveFlash")
                } catch (h) {
                    u = null
                }
                r = !!u;
                u = null
            }
            return et = r, r
        };
        nf = function () {
            var i, n, t = u.audioFormats,
                r = nu && !!w.match(/os (1|2|3_0|3_1)\s/i);
            if (r ? (u.hasHTML5 = !1, u.html5Only = !0, u.oMC && (u.oMC.style.display = "none")) : u.useHTML5Audio && (u.html5 && u.html5.canPlayType || (u._wD("SoundManager: No HTML5 Audio() support detected."), u.hasHTML5 = !1), ru && u._wD(l + "Note: Buggy HTML5 Audio in Safari on this OS X release, see https://bugs.webkit.org/show_bug.cgi?id=32159 - " + (et ? "will use flash fallback for MP3/MP4, if available" : " would use flash fallback for MP3/MP4, but none detected."), 1)), u.useHTML5Audio && u.hasHTML5) {
                ui = !0;
                for (n in t) t.hasOwnProperty(n) && t[n].required && (u.html5.canPlayType(t[n].type) ? u.preferFlash && (u.flash[n] || u.flash[t[n].type]) && (i = !0) : (ui = !1, i = !0))
            }
            return u.ignoreFlash && (i = !1, ui = !0), u.html5Only = u.hasHTML5 && u.useHTML5Audio && !i, !u.html5Only
        };
        pi = function (n) {
            var t, f, i = 0,
                r;
            if (n instanceof Array) {
                for (t = 0, f = n.length; t < f; t++)
                    if (n[t] instanceof Object) {
                        if (u.canPlayMIME(n[t].type)) {
                            i = t;
                            break
                        }
                    } else if (u.canPlayURL(n[t])) {
                        i = t;
                        break
                    }
                n[i].url && (n[i] = n[i].url);
                r = n[i]
            } else r = n;
            return r
        };
        ku = function (n) {
            n._hasTimer || (n._hasTimer = !0, !gi && u.html5PollingInterval && (ri === null && yi === 0 && (ri = setInterval(gu, u.html5PollingInterval)), yi++))
        };
        du = function (n) {
            n._hasTimer && (n._hasTimer = !1, !gi && u.html5PollingInterval && yi--)
        };
        gu = function () {
            var n;
            if (ri !== null && !yi) return clearInterval(ri), ri = null, !1;
            for (n = u.soundIDs.length - 1; n >= 0; n--) u.sounds[u.soundIDs[n]].isHTML5 && u.sounds[u.soundIDs[n]]._hasTimer && u.sounds[u.soundIDs[n]]._onTimer()
        };
        wt = function (i) {
            i = i !== t ? i : {};
            typeof u.onerror == "function" && u.onerror.apply(n, [{
                type: i.type !== t ? i.type : null
            }]);
            i.fatal !== t && i.fatal && u.disable()
        };
        uf = function () {
            if (!ru || !kr()) return !1;
            var t = u.audioFormats,
                i;
            for (var n in t)
                if (t.hasOwnProperty(n) && (n === "mp3" || n === "mp4") && (u._wD(s + ": Using flash fallback for " + n + " format"), u.html5[n] = !1, t[n] && t[n].related))
                    for (i = t[n].related.length - 1; i >= 0; i--) u.html5[t[n].related[i]] = !1
        };
        this._setSandboxType = function (n) {
            var i = u.sandbox;
            i.type = n;
            i.description = i.types[i.types[n] !== t ? n : "unknown"];
            i.type === "localWithFile" ? (i.noRemote = !0, i.noLocal = !1, h("secNote", 2)) : i.type === "localWithNetwork" ? (i.noRemote = !1, i.noLocal = !0) : i.type === "localTrusted" && (i.noRemote = !1, i.noLocal = !1)
        };
        this._externalInterfaceOK = function (n) {
            if (u.swfLoaded) return !1;
            var t;
            if (it("swf", !0), it("flashtojs", !0), u.swfLoaded = !0, nr = !1, ru && uf(), !n || n.replace(/\+dev/i, "") !== u.versionNumber.replace(/\+dev/i, "")) return t = s + ': Fatal: JavaScript file build "' + u.versionNumber + '" does not match Flash SWF build "' + n + '" at ' + u.url + ". Ensure both are up-to-date.", setTimeout(function () {
                throw new Error(t);
            }, 0), !1;
            setTimeout(rr, lt ? 100 : 1)
        };
        li = function (n, i) {
            function d() {
                var n = [],
                    i, t = [],
                    r = " + ";
                i = "SoundManager " + u.version + (!u.html5Only && u.useHTML5Audio ? u.hasHTML5 ? " + HTML5 audio" : ", no HTML5 audio support" : "");
                u.html5Only ? u.html5PollingInterval && n.push("html5PollingInterval (" + u.html5PollingInterval + "ms)") : (u.preferFlash && n.push("preferFlash"), u.useHighPerformance && n.push("useHighPerformance"), u.flashPollingInterval && n.push("flashPollingInterval (" + u.flashPollingInterval + "ms)"), u.html5PollingInterval && n.push("html5PollingInterval (" + u.html5PollingInterval + "ms)"), u.wmode && n.push("wmode (" + u.wmode + ")"), u.debugFlash && n.push("debugFlash"), u.useFlashBlock && n.push("flashBlock"));
                n.length && (t = t.concat([n.join(r)]));
                u._wD(i + (t.length ? r + t.join(", ") : ""), 1);
                ff()
            }

            function s(n, t) {
                return '<param name="' + n + '" value="' + t + '" />'
            }
            if (kt && dt) return !1;
            if (u.html5Only) return sr(), d(), u.oMC = ut(u.movieID), rr(), kt = !0, dt = !0, !1;
            var g = i || u.url,
                it = u.altURL || g,
                y = ci(),
                l = bt(),
                nt = null,
                p = e.getElementsByTagName("html")[0],
                r, h, a, b, o, f, v, k;
            if (nt = p && p.dir && p.dir.match(/rtl/i), n = n === t ? u.id : n, sr(), u.url = wu(ei ? g : it), i = u.url, u.wmode = !u.wmode && u.useHighPerformance ? "transparent" : u.wmode, u.wmode !== null && (w.match(/msie 8/i) || !lt && !u.useHighPerformance) && navigator.platform.match(/win32|win64/i) && (ht.push(rt.spcWmode), u.wmode = null), r = {
                name: n,
                id: n,
                src: i,
                quality: "high",
                allowScriptAccess: u.allowScriptAccess,
                bgcolor: u.bgColor,
                pluginspage: pf + "www.macromedia.com/go/getflashplayer",
                title: "JS/Flash audio component (SoundManager 2)",
                type: "application/x-shockwave-flash",
                wmode: u.wmode,
                hasPriority: "true"
            }, u.debugFlash && (r.FlashVars = "debug=1"), u.wmode || delete r.wmode, lt) h = e.createElement("div"), b = ['<object id="' + n + '" data="' + i + '" type="' + r.type + '" title="' + r.title + '" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0">', s("movie", i), s("AllowScriptAccess", u.allowScriptAccess), s("quality", r.quality), u.wmode ? s("wmode", u.wmode) : "", s("bgcolor", u.bgColor), s("hasPriority", "true"), u.debugFlash ? s("FlashVars", r.FlashVars) : "", "<\/object>"].join("");
            else {
                h = e.createElement("embed");
                for (a in r) r.hasOwnProperty(a) && h.setAttribute(a, r[a])
            }
            if (lr(), l = bt(), y = ci(), y)
                if (u.oMC = ut(u.movieID) || e.createElement("div"), u.oMC.id) k = u.oMC.className, u.oMC.className = (k ? k + " " : tt.swfDefault) + (l ? " " + l : ""), u.oMC.appendChild(h), lt && (o = u.oMC.appendChild(e.createElement("div")), o.className = tt.swfBox, o.innerHTML = b), dt = !0;
                else {
                    if (u.oMC.id = u.movieID, u.oMC.className = tt.swfDefault + " " + l, f = null, o = null, u.useFlashBlock || (u.useHighPerformance ? f = {
                        position: "fixed",
                        width: "8px",
                        height: "8px",
                        bottom: "0px",
                        left: "0px",
                        overflow: "hidden"
                    } : (f = {
                        position: "absolute",
                        width: "6px",
                        height: "6px",
                        top: "-9999px",
                        left: "-9999px"
                    }, nt && (f.left = Math.abs(parseInt(f.left, 10)) + "px"))), vf && (u.oMC.style.zIndex = 1e4), !u.debugFlash)
                        for (v in f) f.hasOwnProperty(v) && (u.oMC.style[v] = f[v]);
                    try {
                        lt || u.oMC.appendChild(h);
                        y.appendChild(u.oMC);
                        lt && (o = u.oMC.appendChild(e.createElement("div")), o.className = tt.swfBox, o.innerHTML = b);
                        dt = !0
                    } catch (ft) {
                        throw new Error(c("domError") + " \n" + ft.toString());
                    }
                }
            return kt = !0, d(), !0
        };
        hi = function () {
            return u.html5Only ? (li(), !1) : f ? !1 : u.url ? (f = u.getMovie(u.id), f || (ti ? (lt ? u.oMC.innerHTML = vr : u.oMC.appendChild(ti), ti = null, kt = !0) : li(u.id, u.url), f = u.getMovie(u.id)), typeof u.oninitmovie == "function" && setTimeout(u.oninitmovie, 1), dr(), !0) : (h("noURL"), !1)
        };
        pt = function () {
            setTimeout(lu, 1e3)
        };
        or = function () {
            n.setTimeout(function () {
                st(l + "useFlashBlock is false, 100% HTML5 mode is possible. Rebooting with preferFlash: false...");
                u.setup({
                    preferFlash: !1
                }).reboot();
                u.didFlashBlock = !0;
                u.beginDelayedInit()
            }, 1)
        };
        lu = function () {
            var t, i = !1;
            if (!u.url || ii) return !1;
            if (ii = !0, p.remove(n, "load", pt), et && nr && !fu) return h("waitFocus"), !1;
            v || (t = u.getMoviePercent(), t > 0 && t < 100 && (i = !0));
            setTimeout(function () {
                if (t = u.getMoviePercent(), i) return ii = !1, u._wD(c("waitSWF")), n.setTimeout(pt, 1), !1;
                v || (u._wD(s + ": No Flash response within expected time. Likely causes: " + (t === 0 ? "SWF load failed, " : "") + "Flash blocked or JS-Flash security error." + (u.debugFlash ? " " + c("checkSWF") : ""), 2), !ei && t && (h("localFail", 2), u.debugFlash || h("tryDebug", 2)), t === 0 && u._wD(c("swf404", u.url), 1), it("flashtojs", !1, ": Timed out" + (ei ? " (Check flash security or flash blockers)" : " (No plugin/missing SWF?)")));
                !v && of && (t === null ? u.useFlashBlock || u.flashLoadTimeout === 0 ? (u.useFlashBlock && yr(), h("waitForever")) : !u.useFlashBlock && ui ? or() : (h("waitForever"), at({
                    type: "ontimeout",
                    ignoreInit: !0,
                    error: {
                        type: "INIT_FLASHBLOCK"
                    }
                })) : u.flashLoadTimeout === 0 ? h("waitForever") : !u.useFlashBlock && ui ? or() : ar(!0))
            }, u.flashLoadTimeout)
        };
        hr = function () {
            function t() {
                p.remove(n, "focus", hr)
            }
            return fu || !nr ? (t(), !0) : (of = !0, fu = !0, h("gotFocus"), ii = !1, pt(), t(), !0)
        };
        dr = function () {
            ht.length && (u._wD("SoundManager 2: " + ht.join(" "), 1), ht = [])
        };
        ff = function () {
            dr();
            var n, t = [];
            if (u.useHTML5Audio && u.hasHTML5) {
                for (n in u.audioFormats) u.audioFormats.hasOwnProperty(n) && t.push(n + " = " + u.html5[n] + (!u.html5[n] && g && u.flash[n] ? " (using flash)" : u.preferFlash && u.flash[n] && g ? " (preferring flash)" : u.html5[n] ? "" : " (" + (u.audioFormats[n].required ? "required, " : "") + "and no flash support)"));
                u._wD("SoundManager 2 HTML5 support: " + t.join(", "), 1)
            }
        };
        gt = function (t) {
            if (v) return !1;
            if (u.html5Only) return h("sm2Loaded", 1), v = !0, yt(), it("onload", !0), !0;
            var f = u.useFlashBlock && u.flashLoadTimeout && !u.getMoviePercent(),
                r = !0,
                i;
            return f || (v = !0), i = {
                type: !et && g ? "NO_FLASH" : "INIT_TIMEOUT"
            }, u._wD("SoundManager 2 " + (d ? "failed to load" : "loaded") + " (" + (d ? "Flash security/load error" : "OK") + ") " + String.fromCharCode(d ? 10006 : 10003), d ? 2 : 1), d || t ? (u.useFlashBlock && u.oMC && (u.oMC.className = bt() + " " + (u.getMoviePercent() === null ? tt.swfTimedout : tt.swfError)), at({
                type: "ontimeout",
                error: i,
                ignoreInit: !0
            }), it("onload", !1), wt(i), r = !1) : it("onload", !0), d || (u.waitForWindowLoad && !si ? (h("waitOnload"), p.add(n, "load", yt)) : (u.waitForWindowLoad && si && h("docLoaded"), yt())), r
        };
        hu = function () {
            var n, i = u.setupOptions;
            for (n in i) i.hasOwnProperty(n) && (u[n] === t ? u[n] = i[n] : u[n] !== i[n] && (u.setupOptions[n] = u[n]))
        };
        rr = function () {
            function t() {
                p.remove(n, "load", u.beginDelayedInit)
            }
            if (v) return h("didInit"), !1;
            if (u.html5Only) return v || (t(), u.enabled = !0, gt()), !0;
            hi();
            try {
                f._externalInterfaceTest(!1);
                au(!0, u.flashPollingInterval || (u.useHighPerformance ? 10 : 50));
                u.debugMode || f._disableDebug();
                u.enabled = !0;
                it("jstoflash", !0);
                u.html5Only || p.add(n, "unload", ir)
            } catch (i) {
                return u._wD("js/flash exception: " + i.toString()), it("jstoflash", !1), wt({
                    type: "JS_TO_FLASH_EXCEPTION",
                    fatal: !0
                }), ar(!0), gt(), !1
            }
            return gt(), t(), !0
        };
        vt = function () {
            return ni ? !1 : (ni = !0, hu(), lr(), !et && u.hasHTML5 && (u._wD("SoundManager 2: No Flash detected" + (u.useHTML5Audio ? ". Trying HTML5-only mode." : ", enabling HTML5."), 1), u.setup({
                useHTML5Audio: !0,
                preferFlash: !1
            })), tf(), !et && g && (ht.push(rt.needFlash), u.setup({
                flashLoadTimeout: 1
            })), e.removeEventListener && e.removeEventListener("DOMContentLoaded", vt, !1), hi(), !0)
        };
        wr = function () {
            return e.readyState === "complete" && (vt(), e.detachEvent("onreadystatechange", wr)), !0
        };
        cr = function () {
            si = !0;
            vt();
            p.remove(n, "load", cr)
        };
        kr();
        p.add(n, "focus", hr);
        p.add(n, "load", pt);
        p.add(n, "load", cr);
        e.addEventListener ? e.addEventListener("DOMContentLoaded", vt, !1) : e.attachEvent ? e.attachEvent("onreadystatechange", wr) : (it("onload", !1), wt({
            type: "NO_DOM2_EVENTS",
            fatal: !0
        }))
    }
    if (!n || !n.document) throw new Error("SoundManager requires a browser with window and document objects.");
    var r = null;
    n.SM2_DEFER !== t && SM2_DEFER || (r = new i);
    typeof module == "object" && module && typeof module.exports == "object" ? (module.exports.SoundManager = i, module.exports.soundManager = r) : typeof define == "function" && define.amd && define(function () {
        function t(t) {
            if (!n.soundManager && t instanceof Function) {
                var r = t(i);
                r instanceof i && (n.soundManager = r)
            }
            return n.soundManager
        }
        return {
            constructor: i,
            getInstance: t
        }
    });
    n.SoundManager = i;
    n.soundManager = r
})(window);
Date.prototype.toISOString || function () {
    function n(n) {
        return n < 10 ? "0" + n : n
    }
    Date.prototype.toISOString = function () {
        return this.getUTCFullYear() + "-" + n(this.getUTCMonth() + 1) + "-" + n(this.getUTCDate()) + "T" + n(this.getUTCHours()) + ":" + n(this.getUTCMinutes()) + ":" + n(this.getUTCSeconds()) + "." + (this.getUTCMilliseconds() / 1e3).toFixed(3).slice(2, 5) + "Z"
    }
}();

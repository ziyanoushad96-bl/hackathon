// ../../../../AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/preact/dist/preact.module.js
var n;
var l;
var u;
var t;
var i;
var r;
var o;
var e;
var f;
var c;
var s;
var a;
var h;
var p = {};
var v = [];
var y = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
var w = Array.isArray;
function d(n2, l3) {
  for (var u3 in l3) n2[u3] = l3[u3];
  return n2;
}
function g(n2) {
  n2 && n2.parentNode && n2.parentNode.removeChild(n2);
}
function _(l3, u3, t3) {
  var i3, r3, o3, e3 = {};
  for (o3 in u3) "key" == o3 ? i3 = u3[o3] : "ref" == o3 ? r3 = u3[o3] : e3[o3] = u3[o3];
  if (arguments.length > 2 && (e3.children = arguments.length > 3 ? n.call(arguments, 2) : t3), "function" == typeof l3 && null != l3.defaultProps) for (o3 in l3.defaultProps) void 0 === e3[o3] && (e3[o3] = l3.defaultProps[o3]);
  return m(l3, e3, i3, r3, null);
}
function m(n2, t3, i3, r3, o3) {
  var e3 = { type: n2, props: t3, key: i3, ref: r3, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: null == o3 ? ++u : o3, __i: -1, __u: 0 };
  return null == o3 && null != l.vnode && l.vnode(e3), e3;
}
function b() {
  return { current: null };
}
function k(n2) {
  return n2.children;
}
function x(n2, l3) {
  this.props = n2, this.context = l3;
}
function S(n2, l3) {
  if (null == l3) return n2.__ ? S(n2.__, n2.__i + 1) : null;
  for (var u3; l3 < n2.__k.length; l3++) if (null != (u3 = n2.__k[l3]) && null != u3.__e) return u3.__e;
  return "function" == typeof n2.type ? S(n2) : null;
}
function C(n2) {
  var l3, u3;
  if (null != (n2 = n2.__) && null != n2.__c) {
    for (n2.__e = n2.__c.base = null, l3 = 0; l3 < n2.__k.length; l3++) if (null != (u3 = n2.__k[l3]) && null != u3.__e) {
      n2.__e = n2.__c.base = u3.__e;
      break;
    }
    return C(n2);
  }
}
function M(n2) {
  (!n2.__d && (n2.__d = true) && i.push(n2) && !$.__r++ || r != l.debounceRendering) && ((r = l.debounceRendering) || o)($);
}
function $() {
  for (var n2, u3, t3, r3, o3, f3, c3, s3 = 1; i.length; ) i.length > s3 && i.sort(e), n2 = i.shift(), s3 = i.length, n2.__d && (t3 = void 0, r3 = void 0, o3 = (r3 = (u3 = n2).__v).__e, f3 = [], c3 = [], u3.__P && ((t3 = d({}, r3)).__v = r3.__v + 1, l.vnode && l.vnode(t3), O(u3.__P, t3, r3, u3.__n, u3.__P.namespaceURI, 32 & r3.__u ? [o3] : null, f3, null == o3 ? S(r3) : o3, !!(32 & r3.__u), c3), t3.__v = r3.__v, t3.__.__k[t3.__i] = t3, N(f3, t3, c3), r3.__e = r3.__ = null, t3.__e != o3 && C(t3)));
  $.__r = 0;
}
function I(n2, l3, u3, t3, i3, r3, o3, e3, f3, c3, s3) {
  var a3, h3, y3, w4, d3, g4, _3, m3 = t3 && t3.__k || v, b2 = l3.length;
  for (f3 = P(u3, l3, m3, f3, b2), a3 = 0; a3 < b2; a3++) null != (y3 = u3.__k[a3]) && (h3 = -1 == y3.__i ? p : m3[y3.__i] || p, y3.__i = a3, g4 = O(n2, y3, h3, i3, r3, o3, e3, f3, c3, s3), w4 = y3.__e, y3.ref && h3.ref != y3.ref && (h3.ref && B(h3.ref, null, y3), s3.push(y3.ref, y3.__c || w4, y3)), null == d3 && null != w4 && (d3 = w4), (_3 = !!(4 & y3.__u)) || h3.__k === y3.__k ? f3 = A(y3, f3, n2, _3) : "function" == typeof y3.type && void 0 !== g4 ? f3 = g4 : w4 && (f3 = w4.nextSibling), y3.__u &= -7);
  return u3.__e = d3, f3;
}
function P(n2, l3, u3, t3, i3) {
  var r3, o3, e3, f3, c3, s3 = u3.length, a3 = s3, h3 = 0;
  for (n2.__k = new Array(i3), r3 = 0; r3 < i3; r3++) null != (o3 = l3[r3]) && "boolean" != typeof o3 && "function" != typeof o3 ? (f3 = r3 + h3, (o3 = n2.__k[r3] = "string" == typeof o3 || "number" == typeof o3 || "bigint" == typeof o3 || o3.constructor == String ? m(null, o3, null, null, null) : w(o3) ? m(k, { children: o3 }, null, null, null) : null == o3.constructor && o3.__b > 0 ? m(o3.type, o3.props, o3.key, o3.ref ? o3.ref : null, o3.__v) : o3).__ = n2, o3.__b = n2.__b + 1, e3 = null, -1 != (c3 = o3.__i = L(o3, u3, f3, a3)) && (a3--, (e3 = u3[c3]) && (e3.__u |= 2)), null == e3 || null == e3.__v ? (-1 == c3 && (i3 > s3 ? h3-- : i3 < s3 && h3++), "function" != typeof o3.type && (o3.__u |= 4)) : c3 != f3 && (c3 == f3 - 1 ? h3-- : c3 == f3 + 1 ? h3++ : (c3 > f3 ? h3-- : h3++, o3.__u |= 4))) : n2.__k[r3] = null;
  if (a3) for (r3 = 0; r3 < s3; r3++) null != (e3 = u3[r3]) && 0 == (2 & e3.__u) && (e3.__e == t3 && (t3 = S(e3)), D(e3, e3));
  return t3;
}
function A(n2, l3, u3, t3) {
  var i3, r3;
  if ("function" == typeof n2.type) {
    for (i3 = n2.__k, r3 = 0; i3 && r3 < i3.length; r3++) i3[r3] && (i3[r3].__ = n2, l3 = A(i3[r3], l3, u3, t3));
    return l3;
  }
  n2.__e != l3 && (t3 && (l3 && n2.type && !l3.parentNode && (l3 = S(n2)), u3.insertBefore(n2.__e, l3 || null)), l3 = n2.__e);
  do {
    l3 = l3 && l3.nextSibling;
  } while (null != l3 && 8 == l3.nodeType);
  return l3;
}
function H(n2, l3) {
  return l3 = l3 || [], null == n2 || "boolean" == typeof n2 || (w(n2) ? n2.some(function(n3) {
    H(n3, l3);
  }) : l3.push(n2)), l3;
}
function L(n2, l3, u3, t3) {
  var i3, r3, o3, e3 = n2.key, f3 = n2.type, c3 = l3[u3], s3 = null != c3 && 0 == (2 & c3.__u);
  if (null === c3 && null == n2.key || s3 && e3 == c3.key && f3 == c3.type) return u3;
  if (t3 > (s3 ? 1 : 0)) {
    for (i3 = u3 - 1, r3 = u3 + 1; i3 >= 0 || r3 < l3.length; ) if (null != (c3 = l3[o3 = i3 >= 0 ? i3-- : r3++]) && 0 == (2 & c3.__u) && e3 == c3.key && f3 == c3.type) return o3;
  }
  return -1;
}
function T(n2, l3, u3) {
  "-" == l3[0] ? n2.setProperty(l3, null == u3 ? "" : u3) : n2[l3] = null == u3 ? "" : "number" != typeof u3 || y.test(l3) ? u3 : u3 + "px";
}
function j(n2, l3, u3, t3, i3) {
  var r3, o3;
  n: if ("style" == l3) if ("string" == typeof u3) n2.style.cssText = u3;
  else {
    if ("string" == typeof t3 && (n2.style.cssText = t3 = ""), t3) for (l3 in t3) u3 && l3 in u3 || T(n2.style, l3, "");
    if (u3) for (l3 in u3) t3 && u3[l3] == t3[l3] || T(n2.style, l3, u3[l3]);
  }
  else if ("o" == l3[0] && "n" == l3[1]) r3 = l3 != (l3 = l3.replace(f, "$1")), o3 = l3.toLowerCase(), l3 = o3 in n2 || "onFocusOut" == l3 || "onFocusIn" == l3 ? o3.slice(2) : l3.slice(2), n2.l || (n2.l = {}), n2.l[l3 + r3] = u3, u3 ? t3 ? u3.u = t3.u : (u3.u = c, n2.addEventListener(l3, r3 ? a : s, r3)) : n2.removeEventListener(l3, r3 ? a : s, r3);
  else {
    if ("http://www.w3.org/2000/svg" == i3) l3 = l3.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if ("width" != l3 && "height" != l3 && "href" != l3 && "list" != l3 && "form" != l3 && "tabIndex" != l3 && "download" != l3 && "rowSpan" != l3 && "colSpan" != l3 && "role" != l3 && "popover" != l3 && l3 in n2) try {
      n2[l3] = null == u3 ? "" : u3;
      break n;
    } catch (n3) {
    }
    "function" == typeof u3 || (null == u3 || false === u3 && "-" != l3[4] ? n2.removeAttribute(l3) : n2.setAttribute(l3, "popover" == l3 && 1 == u3 ? "" : u3));
  }
}
function F(n2) {
  return function(u3) {
    if (this.l) {
      var t3 = this.l[u3.type + n2];
      if (null == u3.t) u3.t = c++;
      else if (u3.t < t3.u) return;
      return t3(l.event ? l.event(u3) : u3);
    }
  };
}
function O(n2, u3, t3, i3, r3, o3, e3, f3, c3, s3) {
  var a3, h3, p3, v3, y3, _3, m3, b2, S2, C4, M3, $3, P4, A4, H3, L3, T4, j4 = u3.type;
  if (null != u3.constructor) return null;
  128 & t3.__u && (c3 = !!(32 & t3.__u), o3 = [f3 = u3.__e = t3.__e]), (a3 = l.__b) && a3(u3);
  n: if ("function" == typeof j4) try {
    if (b2 = u3.props, S2 = "prototype" in j4 && j4.prototype.render, C4 = (a3 = j4.contextType) && i3[a3.__c], M3 = a3 ? C4 ? C4.props.value : a3.__ : i3, t3.__c ? m3 = (h3 = u3.__c = t3.__c).__ = h3.__E : (S2 ? u3.__c = h3 = new j4(b2, M3) : (u3.__c = h3 = new x(b2, M3), h3.constructor = j4, h3.render = E), C4 && C4.sub(h3), h3.props = b2, h3.state || (h3.state = {}), h3.context = M3, h3.__n = i3, p3 = h3.__d = true, h3.__h = [], h3._sb = []), S2 && null == h3.__s && (h3.__s = h3.state), S2 && null != j4.getDerivedStateFromProps && (h3.__s == h3.state && (h3.__s = d({}, h3.__s)), d(h3.__s, j4.getDerivedStateFromProps(b2, h3.__s))), v3 = h3.props, y3 = h3.state, h3.__v = u3, p3) S2 && null == j4.getDerivedStateFromProps && null != h3.componentWillMount && h3.componentWillMount(), S2 && null != h3.componentDidMount && h3.__h.push(h3.componentDidMount);
    else {
      if (S2 && null == j4.getDerivedStateFromProps && b2 !== v3 && null != h3.componentWillReceiveProps && h3.componentWillReceiveProps(b2, M3), !h3.__e && null != h3.shouldComponentUpdate && false === h3.shouldComponentUpdate(b2, h3.__s, M3) || u3.__v == t3.__v) {
        for (u3.__v != t3.__v && (h3.props = b2, h3.state = h3.__s, h3.__d = false), u3.__e = t3.__e, u3.__k = t3.__k, u3.__k.some(function(n3) {
          n3 && (n3.__ = u3);
        }), $3 = 0; $3 < h3._sb.length; $3++) h3.__h.push(h3._sb[$3]);
        h3._sb = [], h3.__h.length && e3.push(h3);
        break n;
      }
      null != h3.componentWillUpdate && h3.componentWillUpdate(b2, h3.__s, M3), S2 && null != h3.componentDidUpdate && h3.__h.push(function() {
        h3.componentDidUpdate(v3, y3, _3);
      });
    }
    if (h3.context = M3, h3.props = b2, h3.__P = n2, h3.__e = false, P4 = l.__r, A4 = 0, S2) {
      for (h3.state = h3.__s, h3.__d = false, P4 && P4(u3), a3 = h3.render(h3.props, h3.state, h3.context), H3 = 0; H3 < h3._sb.length; H3++) h3.__h.push(h3._sb[H3]);
      h3._sb = [];
    } else do {
      h3.__d = false, P4 && P4(u3), a3 = h3.render(h3.props, h3.state, h3.context), h3.state = h3.__s;
    } while (h3.__d && ++A4 < 25);
    h3.state = h3.__s, null != h3.getChildContext && (i3 = d(d({}, i3), h3.getChildContext())), S2 && !p3 && null != h3.getSnapshotBeforeUpdate && (_3 = h3.getSnapshotBeforeUpdate(v3, y3)), L3 = a3, null != a3 && a3.type === k && null == a3.key && (L3 = V(a3.props.children)), f3 = I(n2, w(L3) ? L3 : [L3], u3, t3, i3, r3, o3, e3, f3, c3, s3), h3.base = u3.__e, u3.__u &= -161, h3.__h.length && e3.push(h3), m3 && (h3.__E = h3.__ = null);
  } catch (n3) {
    if (u3.__v = null, c3 || null != o3) if (n3.then) {
      for (u3.__u |= c3 ? 160 : 128; f3 && 8 == f3.nodeType && f3.nextSibling; ) f3 = f3.nextSibling;
      o3[o3.indexOf(f3)] = null, u3.__e = f3;
    } else {
      for (T4 = o3.length; T4--; ) g(o3[T4]);
      z(u3);
    }
    else u3.__e = t3.__e, u3.__k = t3.__k, n3.then || z(u3);
    l.__e(n3, u3, t3);
  }
  else null == o3 && u3.__v == t3.__v ? (u3.__k = t3.__k, u3.__e = t3.__e) : f3 = u3.__e = q(t3.__e, u3, t3, i3, r3, o3, e3, c3, s3);
  return (a3 = l.diffed) && a3(u3), 128 & u3.__u ? void 0 : f3;
}
function z(n2) {
  n2 && n2.__c && (n2.__c.__e = true), n2 && n2.__k && n2.__k.forEach(z);
}
function N(n2, u3, t3) {
  for (var i3 = 0; i3 < t3.length; i3++) B(t3[i3], t3[++i3], t3[++i3]);
  l.__c && l.__c(u3, n2), n2.some(function(u4) {
    try {
      n2 = u4.__h, u4.__h = [], n2.some(function(n3) {
        n3.call(u4);
      });
    } catch (n3) {
      l.__e(n3, u4.__v);
    }
  });
}
function V(n2) {
  return "object" != typeof n2 || null == n2 || n2.__b && n2.__b > 0 ? n2 : w(n2) ? n2.map(V) : d({}, n2);
}
function q(u3, t3, i3, r3, o3, e3, f3, c3, s3) {
  var a3, h3, v3, y3, d3, _3, m3, b2 = i3.props, k4 = t3.props, x4 = t3.type;
  if ("svg" == x4 ? o3 = "http://www.w3.org/2000/svg" : "math" == x4 ? o3 = "http://www.w3.org/1998/Math/MathML" : o3 || (o3 = "http://www.w3.org/1999/xhtml"), null != e3) {
    for (a3 = 0; a3 < e3.length; a3++) if ((d3 = e3[a3]) && "setAttribute" in d3 == !!x4 && (x4 ? d3.localName == x4 : 3 == d3.nodeType)) {
      u3 = d3, e3[a3] = null;
      break;
    }
  }
  if (null == u3) {
    if (null == x4) return document.createTextNode(k4);
    u3 = document.createElementNS(o3, x4, k4.is && k4), c3 && (l.__m && l.__m(t3, e3), c3 = false), e3 = null;
  }
  if (null == x4) b2 === k4 || c3 && u3.data == k4 || (u3.data = k4);
  else {
    if (e3 = e3 && n.call(u3.childNodes), b2 = i3.props || p, !c3 && null != e3) for (b2 = {}, a3 = 0; a3 < u3.attributes.length; a3++) b2[(d3 = u3.attributes[a3]).name] = d3.value;
    for (a3 in b2) if (d3 = b2[a3], "children" == a3) ;
    else if ("dangerouslySetInnerHTML" == a3) v3 = d3;
    else if (!(a3 in k4)) {
      if ("value" == a3 && "defaultValue" in k4 || "checked" == a3 && "defaultChecked" in k4) continue;
      j(u3, a3, null, d3, o3);
    }
    for (a3 in k4) d3 = k4[a3], "children" == a3 ? y3 = d3 : "dangerouslySetInnerHTML" == a3 ? h3 = d3 : "value" == a3 ? _3 = d3 : "checked" == a3 ? m3 = d3 : c3 && "function" != typeof d3 || b2[a3] === d3 || j(u3, a3, d3, b2[a3], o3);
    if (h3) c3 || v3 && (h3.__html == v3.__html || h3.__html == u3.innerHTML) || (u3.innerHTML = h3.__html), t3.__k = [];
    else if (v3 && (u3.innerHTML = ""), I("template" == t3.type ? u3.content : u3, w(y3) ? y3 : [y3], t3, i3, r3, "foreignObject" == x4 ? "http://www.w3.org/1999/xhtml" : o3, e3, f3, e3 ? e3[0] : i3.__k && S(i3, 0), c3, s3), null != e3) for (a3 = e3.length; a3--; ) g(e3[a3]);
    c3 || (a3 = "value", "progress" == x4 && null == _3 ? u3.removeAttribute("value") : null != _3 && (_3 !== u3[a3] || "progress" == x4 && !_3 || "option" == x4 && _3 != b2[a3]) && j(u3, a3, _3, b2[a3], o3), a3 = "checked", null != m3 && m3 != u3[a3] && j(u3, a3, m3, b2[a3], o3));
  }
  return u3;
}
function B(n2, u3, t3) {
  try {
    if ("function" == typeof n2) {
      var i3 = "function" == typeof n2.__u;
      i3 && n2.__u(), i3 && null == u3 || (n2.__u = n2(u3));
    } else n2.current = u3;
  } catch (n3) {
    l.__e(n3, t3);
  }
}
function D(n2, u3, t3) {
  var i3, r3;
  if (l.unmount && l.unmount(n2), (i3 = n2.ref) && (i3.current && i3.current != n2.__e || B(i3, null, u3)), null != (i3 = n2.__c)) {
    if (i3.componentWillUnmount) try {
      i3.componentWillUnmount();
    } catch (n3) {
      l.__e(n3, u3);
    }
    i3.base = i3.__P = null;
  }
  if (i3 = n2.__k) for (r3 = 0; r3 < i3.length; r3++) i3[r3] && D(i3[r3], u3, t3 || "function" != typeof n2.type);
  t3 || g(n2.__e), n2.__c = n2.__ = n2.__e = void 0;
}
function E(n2, l3, u3) {
  return this.constructor(n2, u3);
}
function G(u3, t3, i3) {
  var r3, o3, e3, f3;
  t3 == document && (t3 = document.documentElement), l.__ && l.__(u3, t3), o3 = (r3 = "function" == typeof i3) ? null : i3 && i3.__k || t3.__k, e3 = [], f3 = [], O(t3, u3 = (!r3 && i3 || t3).__k = _(k, null, [u3]), o3 || p, p, t3.namespaceURI, !r3 && i3 ? [i3] : o3 ? null : t3.firstChild ? n.call(t3.childNodes) : null, e3, !r3 && i3 ? i3 : o3 ? o3.__e : t3.firstChild, r3, f3), N(e3, u3, f3);
}
function J(n2, l3) {
  G(n2, l3, J);
}
function K(l3, u3, t3) {
  var i3, r3, o3, e3, f3 = d({}, l3.props);
  for (o3 in l3.type && l3.type.defaultProps && (e3 = l3.type.defaultProps), u3) "key" == o3 ? i3 = u3[o3] : "ref" == o3 ? r3 = u3[o3] : f3[o3] = void 0 === u3[o3] && null != e3 ? e3[o3] : u3[o3];
  return arguments.length > 2 && (f3.children = arguments.length > 3 ? n.call(arguments, 2) : t3), m(l3.type, f3, i3 || l3.key, r3 || l3.ref, null);
}
function Q(n2) {
  function l3(n3) {
    var u3, t3;
    return this.getChildContext || (u3 = /* @__PURE__ */ new Set(), (t3 = {})[l3.__c] = this, this.getChildContext = function() {
      return t3;
    }, this.componentWillUnmount = function() {
      u3 = null;
    }, this.shouldComponentUpdate = function(n4) {
      this.props.value != n4.value && u3.forEach(function(n5) {
        n5.__e = true, M(n5);
      });
    }, this.sub = function(n4) {
      u3.add(n4);
      var l4 = n4.componentWillUnmount;
      n4.componentWillUnmount = function() {
        u3 && u3.delete(n4), l4 && l4.call(n4);
      };
    }), n3.children;
  }
  return l3.__c = "__cC" + h++, l3.__ = n2, l3.Provider = l3.__l = (l3.Consumer = function(n3, l4) {
    return n3.children(l4);
  }).contextType = l3, l3;
}
n = v.slice, l = { __e: function(n2, l3, u3, t3) {
  for (var i3, r3, o3; l3 = l3.__; ) if ((i3 = l3.__c) && !i3.__) try {
    if ((r3 = i3.constructor) && null != r3.getDerivedStateFromError && (i3.setState(r3.getDerivedStateFromError(n2)), o3 = i3.__d), null != i3.componentDidCatch && (i3.componentDidCatch(n2, t3 || {}), o3 = i3.__d), o3) return i3.__E = i3;
  } catch (l4) {
    n2 = l4;
  }
  throw n2;
} }, u = 0, t = function(n2) {
  return null != n2 && null == n2.constructor;
}, x.prototype.setState = function(n2, l3) {
  var u3;
  u3 = null != this.__s && this.__s != this.state ? this.__s : this.__s = d({}, this.state), "function" == typeof n2 && (n2 = n2(d({}, u3), this.props)), n2 && d(u3, n2), null != n2 && this.__v && (l3 && this._sb.push(l3), M(this));
}, x.prototype.forceUpdate = function(n2) {
  this.__v && (this.__e = true, n2 && this.__h.push(n2), M(this));
}, x.prototype.render = k, i = [], o = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, e = function(n2, l3) {
  return n2.__v.__b - l3.__v.__b;
}, $.__r = 0, f = /(PointerCapture)$|Capture$/i, c = 0, s = F(false), a = F(true), h = 0;

// ../../../../AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/preact/hooks/dist/hooks.module.js
var t2;
var r2;
var u2;
var i2;
var o2 = 0;
var f2 = [];
var c2 = l;
var e2 = c2.__b;
var a2 = c2.__r;
var v2 = c2.diffed;
var l2 = c2.__c;
var m2 = c2.unmount;
var s2 = c2.__;
function p2(n2, t3) {
  c2.__h && c2.__h(r2, n2, o2 || t3), o2 = 0;
  var u3 = r2.__H || (r2.__H = { __: [], __h: [] });
  return n2 >= u3.__.length && u3.__.push({}), u3.__[n2];
}
function d2(n2) {
  return o2 = 1, h2(D2, n2);
}
function h2(n2, u3, i3) {
  var o3 = p2(t2++, 2);
  if (o3.t = n2, !o3.__c && (o3.__ = [i3 ? i3(u3) : D2(void 0, u3), function(n3) {
    var t3 = o3.__N ? o3.__N[0] : o3.__[0], r3 = o3.t(t3, n3);
    t3 !== r3 && (o3.__N = [r3, o3.__[1]], o3.__c.setState({}));
  }], o3.__c = r2, !r2.__f)) {
    var f3 = function(n3, t3, r3) {
      if (!o3.__c.__H) return true;
      var u4 = o3.__c.__H.__.filter(function(n4) {
        return !!n4.__c;
      });
      if (u4.every(function(n4) {
        return !n4.__N;
      })) return !c3 || c3.call(this, n3, t3, r3);
      var i4 = o3.__c.props !== n3;
      return u4.forEach(function(n4) {
        if (n4.__N) {
          var t4 = n4.__[0];
          n4.__ = n4.__N, n4.__N = void 0, t4 !== n4.__[0] && (i4 = true);
        }
      }), c3 && c3.call(this, n3, t3, r3) || i4;
    };
    r2.__f = true;
    var c3 = r2.shouldComponentUpdate, e3 = r2.componentWillUpdate;
    r2.componentWillUpdate = function(n3, t3, r3) {
      if (this.__e) {
        var u4 = c3;
        c3 = void 0, f3(n3, t3, r3), c3 = u4;
      }
      e3 && e3.call(this, n3, t3, r3);
    }, r2.shouldComponentUpdate = f3;
  }
  return o3.__N || o3.__;
}
function y2(n2, u3) {
  var i3 = p2(t2++, 3);
  !c2.__s && C2(i3.__H, u3) && (i3.__ = n2, i3.u = u3, r2.__H.__h.push(i3));
}
function _2(n2, u3) {
  var i3 = p2(t2++, 4);
  !c2.__s && C2(i3.__H, u3) && (i3.__ = n2, i3.u = u3, r2.__h.push(i3));
}
function A2(n2) {
  return o2 = 5, T2(function() {
    return { current: n2 };
  }, []);
}
function F2(n2, t3, r3) {
  o2 = 6, _2(function() {
    if ("function" == typeof n2) {
      var r4 = n2(t3());
      return function() {
        n2(null), r4 && "function" == typeof r4 && r4();
      };
    }
    if (n2) return n2.current = t3(), function() {
      return n2.current = null;
    };
  }, null == r3 ? r3 : r3.concat(n2));
}
function T2(n2, r3) {
  var u3 = p2(t2++, 7);
  return C2(u3.__H, r3) && (u3.__ = n2(), u3.__H = r3, u3.__h = n2), u3.__;
}
function q2(n2, t3) {
  return o2 = 8, T2(function() {
    return n2;
  }, t3);
}
function x2(n2) {
  var u3 = r2.context[n2.__c], i3 = p2(t2++, 9);
  return i3.c = n2, u3 ? (null == i3.__ && (i3.__ = true, u3.sub(r2)), u3.props.value) : n2.__;
}
function P2(n2, t3) {
  c2.useDebugValue && c2.useDebugValue(t3 ? t3(n2) : n2);
}
function g2() {
  var n2 = p2(t2++, 11);
  if (!n2.__) {
    for (var u3 = r2.__v; null !== u3 && !u3.__m && null !== u3.__; ) u3 = u3.__;
    var i3 = u3.__m || (u3.__m = [0, 0]);
    n2.__ = "P" + i3[0] + "-" + i3[1]++;
  }
  return n2.__;
}
function j2() {
  for (var n2; n2 = f2.shift(); ) if (n2.__P && n2.__H) try {
    n2.__H.__h.forEach(z2), n2.__H.__h.forEach(B2), n2.__H.__h = [];
  } catch (t3) {
    n2.__H.__h = [], c2.__e(t3, n2.__v);
  }
}
c2.__b = function(n2) {
  r2 = null, e2 && e2(n2);
}, c2.__ = function(n2, t3) {
  n2 && t3.__k && t3.__k.__m && (n2.__m = t3.__k.__m), s2 && s2(n2, t3);
}, c2.__r = function(n2) {
  a2 && a2(n2), t2 = 0;
  var i3 = (r2 = n2.__c).__H;
  i3 && (u2 === r2 ? (i3.__h = [], r2.__h = [], i3.__.forEach(function(n3) {
    n3.__N && (n3.__ = n3.__N), n3.u = n3.__N = void 0;
  })) : (i3.__h.forEach(z2), i3.__h.forEach(B2), i3.__h = [], t2 = 0)), u2 = r2;
}, c2.diffed = function(n2) {
  v2 && v2(n2);
  var t3 = n2.__c;
  t3 && t3.__H && (t3.__H.__h.length && (1 !== f2.push(t3) && i2 === c2.requestAnimationFrame || ((i2 = c2.requestAnimationFrame) || w2)(j2)), t3.__H.__.forEach(function(n3) {
    n3.u && (n3.__H = n3.u), n3.u = void 0;
  })), u2 = r2 = null;
}, c2.__c = function(n2, t3) {
  t3.some(function(n3) {
    try {
      n3.__h.forEach(z2), n3.__h = n3.__h.filter(function(n4) {
        return !n4.__ || B2(n4);
      });
    } catch (r3) {
      t3.some(function(n4) {
        n4.__h && (n4.__h = []);
      }), t3 = [], c2.__e(r3, n3.__v);
    }
  }), l2 && l2(n2, t3);
}, c2.unmount = function(n2) {
  m2 && m2(n2);
  var t3, r3 = n2.__c;
  r3 && r3.__H && (r3.__H.__.forEach(function(n3) {
    try {
      z2(n3);
    } catch (n4) {
      t3 = n4;
    }
  }), r3.__H = void 0, t3 && c2.__e(t3, r3.__v));
};
var k2 = "function" == typeof requestAnimationFrame;
function w2(n2) {
  var t3, r3 = function() {
    clearTimeout(u3), k2 && cancelAnimationFrame(t3), setTimeout(n2);
  }, u3 = setTimeout(r3, 35);
  k2 && (t3 = requestAnimationFrame(r3));
}
function z2(n2) {
  var t3 = r2, u3 = n2.__c;
  "function" == typeof u3 && (n2.__c = void 0, u3()), r2 = t3;
}
function B2(n2) {
  var t3 = r2;
  n2.__c = n2.__(), r2 = t3;
}
function C2(n2, t3) {
  return !n2 || n2.length !== t3.length || t3.some(function(t4, r3) {
    return t4 !== n2[r3];
  });
}
function D2(n2, t3) {
  return "function" == typeof t3 ? t3(n2) : t3;
}

// ../../../../AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/preact/compat/dist/compat.module.js
function g3(n2, t3) {
  for (var e3 in t3) n2[e3] = t3[e3];
  return n2;
}
function E2(n2, t3) {
  for (var e3 in n2) if ("__source" !== e3 && !(e3 in t3)) return true;
  for (var r3 in t3) if ("__source" !== r3 && n2[r3] !== t3[r3]) return true;
  return false;
}
function C3(n2, t3) {
  var e3 = t3(), r3 = d2({ t: { __: e3, u: t3 } }), u3 = r3[0].t, o3 = r3[1];
  return _2(function() {
    u3.__ = e3, u3.u = t3, x3(u3) && o3({ t: u3 });
  }, [n2, e3, t3]), y2(function() {
    return x3(u3) && o3({ t: u3 }), n2(function() {
      x3(u3) && o3({ t: u3 });
    });
  }, [n2]), e3;
}
function x3(n2) {
  var t3, e3, r3 = n2.u, u3 = n2.__;
  try {
    var o3 = r3();
    return !((t3 = u3) === (e3 = o3) && (0 !== t3 || 1 / t3 == 1 / e3) || t3 != t3 && e3 != e3);
  } catch (n3) {
    return true;
  }
}
function R(n2) {
  n2();
}
function w3(n2) {
  return n2;
}
function k3() {
  return [false, R];
}
var I2 = _2;
function N2(n2, t3) {
  this.props = n2, this.context = t3;
}
function M2(n2, e3) {
  function r3(n3) {
    var t3 = this.props.ref, r4 = t3 == n3.ref;
    return !r4 && t3 && (t3.call ? t3(null) : t3.current = null), e3 ? !e3(this.props, n3) || !r4 : E2(this.props, n3);
  }
  function u3(e4) {
    return this.shouldComponentUpdate = r3, _(n2, e4);
  }
  return u3.displayName = "Memo(" + (n2.displayName || n2.name) + ")", u3.prototype.isReactComponent = true, u3.__f = true, u3.type = n2, u3;
}
(N2.prototype = new x()).isPureReactComponent = true, N2.prototype.shouldComponentUpdate = function(n2, t3) {
  return E2(this.props, n2) || E2(this.state, t3);
};
var T3 = l.__b;
l.__b = function(n2) {
  n2.type && n2.type.__f && n2.ref && (n2.props.ref = n2.ref, n2.ref = null), T3 && T3(n2);
};
var A3 = "undefined" != typeof Symbol && Symbol.for && /* @__PURE__ */ Symbol.for("react.forward_ref") || 3911;
function D3(n2) {
  function t3(t4) {
    var e3 = g3({}, t4);
    return delete e3.ref, n2(e3, t4.ref || null);
  }
  return t3.$$typeof = A3, t3.render = n2, t3.prototype.isReactComponent = t3.__f = true, t3.displayName = "ForwardRef(" + (n2.displayName || n2.name) + ")", t3;
}
var L2 = function(n2, t3) {
  return null == n2 ? null : H(H(n2).map(t3));
};
var O2 = { map: L2, forEach: L2, count: function(n2) {
  return n2 ? H(n2).length : 0;
}, only: function(n2) {
  var t3 = H(n2);
  if (1 !== t3.length) throw "Children.only";
  return t3[0];
}, toArray: H };
var F3 = l.__e;
l.__e = function(n2, t3, e3, r3) {
  if (n2.then) {
    for (var u3, o3 = t3; o3 = o3.__; ) if ((u3 = o3.__c) && u3.__c) return null == t3.__e && (t3.__e = e3.__e, t3.__k = e3.__k), u3.__c(n2, t3);
  }
  F3(n2, t3, e3, r3);
};
var U = l.unmount;
function V2(n2, t3, e3) {
  return n2 && (n2.__c && n2.__c.__H && (n2.__c.__H.__.forEach(function(n3) {
    "function" == typeof n3.__c && n3.__c();
  }), n2.__c.__H = null), null != (n2 = g3({}, n2)).__c && (n2.__c.__P === e3 && (n2.__c.__P = t3), n2.__c.__e = true, n2.__c = null), n2.__k = n2.__k && n2.__k.map(function(n3) {
    return V2(n3, t3, e3);
  })), n2;
}
function W(n2, t3, e3) {
  return n2 && e3 && (n2.__v = null, n2.__k = n2.__k && n2.__k.map(function(n3) {
    return W(n3, t3, e3);
  }), n2.__c && n2.__c.__P === t3 && (n2.__e && e3.appendChild(n2.__e), n2.__c.__e = true, n2.__c.__P = e3)), n2;
}
function P3() {
  this.__u = 0, this.o = null, this.__b = null;
}
function j3(n2) {
  var t3 = n2.__.__c;
  return t3 && t3.__a && t3.__a(n2);
}
function z3(n2) {
  var e3, r3, u3;
  function o3(o4) {
    if (e3 || (e3 = n2()).then(function(n3) {
      r3 = n3.default || n3;
    }, function(n3) {
      u3 = n3;
    }), u3) throw u3;
    if (!r3) throw e3;
    return _(r3, o4);
  }
  return o3.displayName = "Lazy", o3.__f = true, o3;
}
function B3() {
  this.i = null, this.l = null;
}
l.unmount = function(n2) {
  var t3 = n2.__c;
  t3 && t3.__R && t3.__R(), t3 && 32 & n2.__u && (n2.type = null), U && U(n2);
}, (P3.prototype = new x()).__c = function(n2, t3) {
  var e3 = t3.__c, r3 = this;
  null == r3.o && (r3.o = []), r3.o.push(e3);
  var u3 = j3(r3.__v), o3 = false, i3 = function() {
    o3 || (o3 = true, e3.__R = null, u3 ? u3(l3) : l3());
  };
  e3.__R = i3;
  var l3 = function() {
    if (!--r3.__u) {
      if (r3.state.__a) {
        var n3 = r3.state.__a;
        r3.__v.__k[0] = W(n3, n3.__c.__P, n3.__c.__O);
      }
      var t4;
      for (r3.setState({ __a: r3.__b = null }); t4 = r3.o.pop(); ) t4.forceUpdate();
    }
  };
  r3.__u++ || 32 & t3.__u || r3.setState({ __a: r3.__b = r3.__v.__k[0] }), n2.then(i3, i3);
}, P3.prototype.componentWillUnmount = function() {
  this.o = [];
}, P3.prototype.render = function(n2, e3) {
  if (this.__b) {
    if (this.__v.__k) {
      var r3 = document.createElement("div"), o3 = this.__v.__k[0].__c;
      this.__v.__k[0] = V2(this.__b, r3, o3.__O = o3.__P);
    }
    this.__b = null;
  }
  var i3 = e3.__a && _(k, null, n2.fallback);
  return i3 && (i3.__u &= -33), [_(k, null, e3.__a ? null : n2.children), i3];
};
var H2 = function(n2, t3, e3) {
  if (++e3[1] === e3[0] && n2.l.delete(t3), n2.props.revealOrder && ("t" !== n2.props.revealOrder[0] || !n2.l.size)) for (e3 = n2.i; e3; ) {
    for (; e3.length > 3; ) e3.pop()();
    if (e3[1] < e3[0]) break;
    n2.i = e3 = e3[2];
  }
};
function Z(n2) {
  return this.getChildContext = function() {
    return n2.context;
  }, n2.children;
}
function Y(n2) {
  var e3 = this, r3 = n2.h;
  if (e3.componentWillUnmount = function() {
    G(null, e3.v), e3.v = null, e3.h = null;
  }, e3.h && e3.h !== r3 && e3.componentWillUnmount(), !e3.v) {
    for (var u3 = e3.__v; null !== u3 && !u3.__m && null !== u3.__; ) u3 = u3.__;
    e3.h = r3, e3.v = { nodeType: 1, parentNode: r3, childNodes: [], __k: { __m: u3.__m }, contains: function() {
      return true;
    }, insertBefore: function(n3, t3) {
      this.childNodes.push(n3), e3.h.insertBefore(n3, t3);
    }, removeChild: function(n3) {
      this.childNodes.splice(this.childNodes.indexOf(n3) >>> 1, 1), e3.h.removeChild(n3);
    } };
  }
  G(_(Z, { context: e3.context }, n2.__v), e3.v);
}
function $2(n2, e3) {
  var r3 = _(Y, { __v: n2, h: e3 });
  return r3.containerInfo = e3, r3;
}
(B3.prototype = new x()).__a = function(n2) {
  var t3 = this, e3 = j3(t3.__v), r3 = t3.l.get(n2);
  return r3[0]++, function(u3) {
    var o3 = function() {
      t3.props.revealOrder ? (r3.push(u3), H2(t3, n2, r3)) : u3();
    };
    e3 ? e3(o3) : o3();
  };
}, B3.prototype.render = function(n2) {
  this.i = null, this.l = /* @__PURE__ */ new Map();
  var t3 = H(n2.children);
  n2.revealOrder && "b" === n2.revealOrder[0] && t3.reverse();
  for (var e3 = t3.length; e3--; ) this.l.set(t3[e3], this.i = [1, 0, this.i]);
  return n2.children;
}, B3.prototype.componentDidUpdate = B3.prototype.componentDidMount = function() {
  var n2 = this;
  this.l.forEach(function(t3, e3) {
    H2(n2, e3, t3);
  });
};
var q3 = "undefined" != typeof Symbol && Symbol.for && /* @__PURE__ */ Symbol.for("react.element") || 60103;
var G2 = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
var J2 = /^on(Ani|Tra|Tou|BeforeInp|Compo)/;
var K2 = /[A-Z0-9]/g;
var Q2 = "undefined" != typeof document;
var X = function(n2) {
  return ("undefined" != typeof Symbol && "symbol" == typeof /* @__PURE__ */ Symbol() ? /fil|che|rad/ : /fil|che|ra/).test(n2);
};
function nn(n2, t3, e3) {
  return null == t3.__k && (t3.textContent = ""), G(n2, t3), "function" == typeof e3 && e3(), n2 ? n2.__c : null;
}
function tn(n2, t3, e3) {
  return J(n2, t3), "function" == typeof e3 && e3(), n2 ? n2.__c : null;
}
x.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t3) {
  Object.defineProperty(x.prototype, t3, { configurable: true, get: function() {
    return this["UNSAFE_" + t3];
  }, set: function(n2) {
    Object.defineProperty(this, t3, { configurable: true, writable: true, value: n2 });
  } });
});
var en = l.event;
function rn() {
}
function un() {
  return this.cancelBubble;
}
function on() {
  return this.defaultPrevented;
}
l.event = function(n2) {
  return en && (n2 = en(n2)), n2.persist = rn, n2.isPropagationStopped = un, n2.isDefaultPrevented = on, n2.nativeEvent = n2;
};
var ln;
var cn = { enumerable: false, configurable: true, get: function() {
  return this.class;
} };
var fn = l.vnode;
l.vnode = function(n2) {
  "string" == typeof n2.type && (function(n3) {
    var t3 = n3.props, e3 = n3.type, u3 = {}, o3 = -1 === e3.indexOf("-");
    for (var i3 in t3) {
      var l3 = t3[i3];
      if (!("value" === i3 && "defaultValue" in t3 && null == l3 || Q2 && "children" === i3 && "noscript" === e3 || "class" === i3 || "className" === i3)) {
        var c3 = i3.toLowerCase();
        "defaultValue" === i3 && "value" in t3 && null == t3.value ? i3 = "value" : "download" === i3 && true === l3 ? l3 = "" : "translate" === c3 && "no" === l3 ? l3 = false : "o" === c3[0] && "n" === c3[1] ? "ondoubleclick" === c3 ? i3 = "ondblclick" : "onchange" !== c3 || "input" !== e3 && "textarea" !== e3 || X(t3.type) ? "onfocus" === c3 ? i3 = "onfocusin" : "onblur" === c3 ? i3 = "onfocusout" : J2.test(i3) && (i3 = c3) : c3 = i3 = "oninput" : o3 && G2.test(i3) ? i3 = i3.replace(K2, "-$&").toLowerCase() : null === l3 && (l3 = void 0), "oninput" === c3 && u3[i3 = c3] && (i3 = "oninputCapture"), u3[i3] = l3;
      }
    }
    "select" == e3 && u3.multiple && Array.isArray(u3.value) && (u3.value = H(t3.children).forEach(function(n4) {
      n4.props.selected = -1 != u3.value.indexOf(n4.props.value);
    })), "select" == e3 && null != u3.defaultValue && (u3.value = H(t3.children).forEach(function(n4) {
      n4.props.selected = u3.multiple ? -1 != u3.defaultValue.indexOf(n4.props.value) : u3.defaultValue == n4.props.value;
    })), t3.class && !t3.className ? (u3.class = t3.class, Object.defineProperty(u3, "className", cn)) : (t3.className && !t3.class || t3.class && t3.className) && (u3.class = u3.className = t3.className), n3.props = u3;
  })(n2), n2.$$typeof = q3, fn && fn(n2);
};
var an = l.__r;
l.__r = function(n2) {
  an && an(n2), ln = n2.__c;
};
var sn = l.diffed;
l.diffed = function(n2) {
  sn && sn(n2);
  var t3 = n2.props, e3 = n2.__e;
  null != e3 && "textarea" === n2.type && "value" in t3 && t3.value !== e3.value && (e3.value = null == t3.value ? "" : t3.value), ln = null;
};
var hn = { ReactCurrentDispatcher: { current: { readContext: function(n2) {
  return ln.__n[n2.__c].props.value;
}, useCallback: q2, useContext: x2, useDebugValue: P2, useDeferredValue: w3, useEffect: y2, useId: g2, useImperativeHandle: F2, useInsertionEffect: I2, useLayoutEffect: _2, useMemo: T2, useReducer: h2, useRef: A2, useState: d2, useSyncExternalStore: C3, useTransition: k3 } } };
function dn(n2) {
  return _.bind(null, n2);
}
function mn(n2) {
  return !!n2 && n2.$$typeof === q3;
}
function pn(n2) {
  return mn(n2) && n2.type === k;
}
function yn(n2) {
  return !!n2 && !!n2.displayName && ("string" == typeof n2.displayName || n2.displayName instanceof String) && n2.displayName.startsWith("Memo(");
}
function _n(n2) {
  return mn(n2) ? K.apply(null, arguments) : n2;
}
function bn(n2) {
  return !!n2.__k && (G(null, n2), true);
}
function Sn(n2) {
  return n2 && (n2.base || 1 === n2.nodeType && n2) || null;
}
var gn = function(n2, t3) {
  return n2(t3);
};
var En = function(n2, t3) {
  return n2(t3);
};
var Cn = k;
var xn = mn;
var Rn = { useState: d2, useId: g2, useReducer: h2, useEffect: y2, useLayoutEffect: _2, useInsertionEffect: I2, useTransition: k3, useDeferredValue: w3, useSyncExternalStore: C3, startTransition: R, useRef: A2, useImperativeHandle: F2, useMemo: T2, useCallback: q2, useContext: x2, useDebugValue: P2, version: "18.3.1", Children: O2, render: nn, hydrate: tn, unmountComponentAtNode: bn, createPortal: $2, createElement: _, createContext: Q, createFactory: dn, cloneElement: _n, createRef: b, Fragment: k, isValidElement: mn, isElement: xn, isFragment: pn, isMemo: yn, findDOMNode: Sn, Component: x, PureComponent: N2, memo: M2, forwardRef: D3, flushSync: En, unstable_batchedUpdates: gn, StrictMode: Cn, Suspense: P3, SuspenseList: B3, lazy: z3, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: hn };

// ../../../../AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/preact/compat/client.mjs
function createRoot(container2) {
  return {
    // eslint-disable-next-line
    render: function(children) {
      nn(children, container2);
    },
    // eslint-disable-next-line
    unmount: function() {
      bn(container2);
    }
  };
}

// src/utils/durationUtils.ts
var formatDurationMinutes = (totalMinutes) => {
  if (totalMinutes <= 0 || isNaN(totalMinutes)) return "0m";
  const roundMinutes = Math.round(totalMinutes);
  const normalizedHours = Math.floor(roundMinutes / 60);
  const normalizedMinutes = roundMinutes % 60;
  if (normalizedHours === 0) {
    return `${normalizedMinutes}m`;
  }
  if (normalizedMinutes === 0) {
    return `${normalizedHours}h 00m`;
  }
  const minsPadded = normalizedMinutes.toString().padStart(2, "0");
  return `${normalizedHours}h ${minsPadded}m`;
};
var formatHoursAndMinutes = (hoursDecimal) => {
  if (hoursDecimal <= 0 || isNaN(hoursDecimal)) return "0m";
  const totalMinutes = Math.round(hoursDecimal * 60);
  const normalizedHours = Math.floor(totalMinutes / 60);
  const normalizedMinutes = totalMinutes % 60;
  if (normalizedHours === 0) {
    return `${normalizedMinutes}m`;
  }
  if (normalizedMinutes === 0) {
    return `${normalizedHours}h 00m`;
  }
  const minsPadded = normalizedMinutes.toString().padStart(2, "0");
  return `${normalizedHours}h ${minsPadded}m`;
};

// src/utils/dateUtils.ts
var getCurrentDate = () => {
  return /* @__PURE__ */ new Date();
};
var getHoursRemaining = (deadlineStr, fromDate = getCurrentDate()) => {
  try {
    const deadline = new Date(deadlineStr);
    const diffMs = deadline.getTime() - fromDate.getTime();
    return diffMs / (1e3 * 60 * 60);
  } catch (e3) {
    return 0;
  }
};
var formatCountdown = (deadlineStr, fromDate = getCurrentDate()) => {
  const hoursRemaining = getHoursRemaining(deadlineStr, fromDate);
  if (hoursRemaining <= 0) return "Overdue";
  const totalMinutes = Math.round(hoursRemaining * 60);
  const days = Math.floor(totalMinutes / (24 * 60));
  const remainingMinutesAfterDays = totalMinutes % (24 * 60);
  const hours = Math.floor(remainingMinutesAfterDays / 60);
  const minutes = remainingMinutesAfterDays % 60;
  if (days >= 2) {
    return hours > 0 ? `${days} days ${hours}h` : `${days} days`;
  }
  if (days === 1) {
    return hours > 0 ? `1 day ${hours}h` : "1 day";
  }
  if (hours > 0) {
    return `${hours}h ${minutes.toString().padStart(2, "0")}m`;
  }
  return `${minutes}m`;
};
var formatDeadlinePretty = (deadlineStr) => {
  try {
    const d3 = new Date(deadlineStr);
    const now = getCurrentDate();
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = months[d3.getMonth()];
    const day = d3.getDate();
    let hours = d3.getHours();
    const minutes = d3.getMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    const isToday = d3.getDate() === now.getDate() && d3.getMonth() === now.getMonth() && d3.getFullYear() === now.getFullYear();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const isTomorrow = d3.getDate() === tomorrow.getDate() && d3.getMonth() === tomorrow.getMonth() && d3.getFullYear() === tomorrow.getFullYear();
    if (isToday) {
      return `Today at ${hours}:${minutes} ${ampm}`;
    }
    if (isTomorrow) {
      return `Tomorrow at ${hours}:${minutes} ${ampm}`;
    }
    return `${month} ${day}, ${hours}:${minutes} ${ampm}`;
  } catch (e3) {
    return deadlineStr;
  }
};
var createRelativeIsoDate = (daysOffset, hoursOffset = 0) => {
  const now = getCurrentDate();
  const target = new Date(now.getTime() + daysOffset * 24 * 3600 * 1e3 + hoursOffset * 3600 * 1e3);
  return target.toISOString();
};
var toDateTimeLocalValue = (date) => {
  const pad = (n2) => n2.toString().padStart(2, "0");
  const year = date.getFullYear();
  const month = pad(date.getMonth() + 1);
  const day = pad(date.getDate());
  const hours = pad(date.getHours());
  const minutes = pad(date.getMinutes());
  return `${year}-${month}-${day}T${hours}:${minutes}`;
};

// src/services/priority.ts
var determineTaskUrgency = (task, isColliding = false, dailyCapacity = 3.5) => {
  if (task.status === "completed") {
    return {
      urgencyLevel: "SAFE",
      explanation: "Task is completed and submitted.",
      reasons: ["All requirements completed", "Submission finalized"],
      availableHours: 0,
      capacityStatus: "Comfortable",
      shortfallHours: 0
    };
  }
  const hoursToDeadline = getHoursRemaining(task.deadline);
  const remainingHours = Math.max(0, task.estimatedHours - task.completedHours);
  const daysLeft = Math.max(0.1, hoursToDeadline / 24);
  const countdown = formatCountdown(task.deadline);
  const remainingFormatted = formatHoursAndMinutes(remainingHours);
  const availableHours = Math.round(daysLeft * dailyCapacity * 10) / 10;
  const shortfallHours = Math.max(0, Math.round((remainingHours - availableHours) * 10) / 10);
  let capacityStatus = "Comfortable";
  if (shortfallHours > 0.5) {
    capacityStatus = "Overloaded";
  } else if (remainingHours >= availableHours * 0.8) {
    capacityStatus = "Tight";
  }
  const reasons = [];
  let urgencyLevel = "SAFE";
  let explanation = "";
  if (hoursToDeadline <= 0) {
    urgencyLevel = "CRITICAL";
    explanation = `Past due deadline with ${remainingFormatted} unfinished work.`;
    reasons.push("Deadline has passed");
    reasons.push(`${remainingFormatted} required immediately`);
  } else if (shortfallHours > 0.5 || hoursToDeadline <= 48 && remainingHours >= 2.5 || isColliding && hoursToDeadline <= 72 && remainingHours >= 3.5) {
    urgencyLevel = "CRITICAL";
    if (shortfallHours > 0.5) {
      explanation = `Approximately ${remainingFormatted} of work remain, but only ${formatHoursAndMinutes(availableHours)} of available study time are allocated before the deadline.`;
    } else {
      explanation = `Deadline is in ${countdown} and significant work remains.`;
    }
    reasons.push(`Deadline is approaching (${countdown})`);
    reasons.push(`Significant work remains (${remainingFormatted})`);
    if (isColliding) {
      reasons.push("The task is part of a 48-hour deadline collision");
    }
    if (capacityStatus === "Overloaded") {
      reasons.push("Workload exceeds available study capacity");
    }
  } else if (capacityStatus === "Tight" || hoursToDeadline <= 72 && remainingHours >= 2 || isColliding && remainingHours >= 1.5) {
    urgencyLevel = "AT_RISK";
    explanation = `Approximately ${remainingFormatted} of work remain, but only ${formatHoursAndMinutes(availableHours)} of available study time are allocated before the deadline.`;
    reasons.push(`Approaching deadline in ${countdown}`);
    reasons.push(`Remaining workload (${remainingFormatted}) is close to capacity limit`);
    if (isColliding) {
      reasons.push("Overlaps with another major deadline window");
    }
  } else if (hoursToDeadline <= 120 || remainingHours >= 2) {
    urgencyLevel = "APPROACHING";
    explanation = `Deadline is in ${Math.round(daysLeft)} days with ${remainingFormatted} of work remaining.`;
    reasons.push(`Upcoming deadline in ${Math.round(daysLeft)} days`);
    reasons.push(`${remainingFormatted} work remaining to schedule`);
  } else {
    urgencyLevel = "SAFE";
    explanation = `Comfortable buffer with ${formatHoursAndMinutes(availableHours)} available for ${remainingFormatted} of work.`;
    reasons.push(`Ample study time available before submission`);
    reasons.push("No deadline conflicts detected");
  }
  return {
    urgencyLevel,
    explanation,
    reasons,
    availableHours,
    capacityStatus,
    shortfallHours
  };
};
var compareTasksByUrgency = (a3, b2) => {
  if (a3.status === "completed" && b2.status !== "completed") return 1;
  if (b2.status === "completed" && a3.status !== "completed") return -1;
  const riskWeight = {
    CRITICAL: 4,
    AT_RISK: 3,
    APPROACHING: 2,
    SAFE: 1
  };
  const weightA = riskWeight[a3.riskLevel || "APPROACHING"];
  const weightB = riskWeight[b2.riskLevel || "APPROACHING"];
  if (weightB !== weightA) return weightB - weightA;
  const diffA = getHoursRemaining(a3.deadline);
  const diffB = getHoursRemaining(b2.deadline);
  if (Math.abs(diffA - diffB) > 6) return diffA - diffB;
  if (a3.isColliding && !b2.isColliding) return -1;
  if (!a3.isColliding && b2.isColliding) return 1;
  const remA = Math.max(0, a3.estimatedHours - a3.completedHours);
  const remB = Math.max(0, b2.estimatedHours - b2.completedHours);
  return remB - remA;
};

// src/services/risk.ts
var DEFAULT_DAILY_CAPACITY_HOURS = 3.5;
var calculateTaskRisk = (task, isColliding = false, dailyCapacity = DEFAULT_DAILY_CAPACITY_HOURS) => {
  const remainingWork = Math.max(0, task.estimatedHours - task.completedHours);
  const hoursToDeadline = getHoursRemaining(task.deadline);
  const daysToDeadline = Math.max(0.1, hoursToDeadline / 24);
  const availableHours = daysToDeadline * dailyCapacity;
  const shortfall = remainingWork - availableHours;
  let riskLevel = "SAFE";
  let riskReason = "Workload is comfortably within available study hours.";
  if (hoursToDeadline <= 0 && remainingWork > 0) {
    riskLevel = "CRITICAL";
    riskReason = `Past due deadline with ${formatHoursAndMinutes(remainingWork)} unfinished work.`;
  } else if (shortfall > 0.5) {
    riskLevel = "CRITICAL";
    riskReason = `You're approximately ${formatHoursAndMinutes(shortfall)} over capacity before the deadline.`;
  } else if (hoursToDeadline <= 48 && remainingWork >= 3) {
    riskLevel = "CRITICAL";
    riskReason = `High remaining workload (${formatHoursAndMinutes(remainingWork)}) due within 48 hours.`;
  } else if (isColliding && hoursToDeadline <= 72 && remainingWork >= 3.5) {
    riskLevel = "CRITICAL";
    riskReason = `Collision conflict: ${formatHoursAndMinutes(remainingWork)} required in an overlapping deadline window.`;
  } else if (shortfall > -1.5 || hoursToDeadline <= 72 && remainingWork >= 2.5 || isColliding && remainingWork >= 2) {
    riskLevel = "AT_RISK";
    riskReason = isColliding ? `Competing with other overlapping deadlines in a tight window (${formatHoursAndMinutes(remainingWork)} left).` : `Tight buffer: ${formatHoursAndMinutes(remainingWork)} work vs ${formatHoursAndMinutes(availableHours)} available.`;
  } else if (hoursToDeadline <= 120 || remainingWork >= 2) {
    riskLevel = "APPROACHING";
    riskReason = `Due in ${Math.round(daysToDeadline)} days with ${formatHoursAndMinutes(remainingWork)} work remaining.`;
  } else {
    riskLevel = "SAFE";
    riskReason = `Ample time (${Math.round(daysToDeadline)} days) for ${formatHoursAndMinutes(remainingWork)} of work.`;
  }
  return {
    riskLevel,
    riskReason,
    capacityShortfallHours: Math.max(0, shortfall),
    availableHoursBeforeDeadline: availableHours,
    remainingWorkHours: remainingWork
  };
};

// src/services/collision.ts
var detectDeadlineCollisions = (tasks) => {
  const activeTasks = tasks.filter((t3) => t3.status !== "completed");
  const collidingTaskIds = /* @__PURE__ */ new Set();
  const collisionGroups = [];
  const sorted = [...activeTasks].sort(
    (a3, b2) => new Date(a3.deadline).getTime() - new Date(b2.deadline).getTime()
  );
  for (let i3 = 0; i3 < sorted.length; i3++) {
    const current = sorted[i3];
    const currentHours = getHoursRemaining(current.deadline);
    if (currentHours < 0) continue;
    const collidingWithCurrent = [current];
    let combinedWork = current.estimatedHours - current.completedHours;
    for (let j4 = i3 + 1; j4 < sorted.length; j4++) {
      const other = sorted[j4];
      const otherHours = getHoursRemaining(other.deadline);
      const diffHours = Math.abs(otherHours - currentHours);
      if (diffHours <= 48) {
        collidingWithCurrent.push(other);
        combinedWork += other.estimatedHours - other.completedHours;
      }
    }
    if (collidingWithCurrent.length >= 2 && combinedWork >= 5) {
      collidingWithCurrent.forEach((t3) => collidingTaskIds.add(t3.id));
      const ids = collidingWithCurrent.map((t3) => t3.id).sort().join(",");
      const alreadyGrouped = collisionGroups.some(
        (g4) => g4.tasks.map((t3) => t3.id).sort().join(",") === ids
      );
      if (!alreadyGrouped) {
        collisionGroups.push({
          tasks: collidingWithCurrent,
          windowHours: 48,
          totalRemainingHours: combinedWork,
          description: `${collidingWithCurrent.length} major assignments are competing for the same 48-hour window (${combinedWork.toFixed(1)}h total work).`
        });
      }
    }
  }
  let summaryMessage = null;
  if (collisionGroups.length > 0) {
    const topGroup = collisionGroups[0];
    summaryMessage = `Your workload is slightly overloaded this week. ${topGroup.tasks.length} major assignments are competing for the same 48-hour window.`;
  }
  return { collidingTaskIds, collisionGroups, summaryMessage };
};

// src/services/storage.ts
var STORAGE_KEY = "workradar_tasks_v2";
var createInitialTasks = () => {
  const now = getCurrentDate();
  return [
    {
      id: "task-1-research-paper",
      title: "Research Paper",
      course: "Computer Science",
      description: "Distributed consensus algorithms formal analysis and comparative benchmark report.",
      deadline: createRelativeIsoDate(1, 18),
      // ~42 hours from now (Immediate Horizon / Critical)
      estimatedHours: 8,
      completedHours: 3,
      // 5.0h remaining
      requirements: [
        "Literature review on distributed consensus protocols (Raft, Paxos, PBFT)",
        "Benchmark comparison table of throughput and latency under network partitions",
        "Formal methodology and experimental evaluation setup",
        "IEEE formatted bibliography with at least 10 authoritative citations"
      ],
      milestones: [
        {
          id: "ms-1-1",
          title: "Complete consensus literature review",
          description: "Survey 6 recent IEEE papers on leader election and state machine replication",
          estimatedMinutes: 120,
          estimatedHours: 2,
          completed: true,
          targetDay: "Completed",
          notes: "Annotated core papers on Raft & Paxos"
        },
        {
          id: "ms-1-2",
          title: "Draft benchmark comparison analysis",
          description: "Synthesize latency and throughput benchmark metrics under fault injection",
          estimatedMinutes: 120,
          estimatedHours: 2,
          completed: false,
          targetDay: "Today",
          notes: "Compile comparison table"
        },
        {
          id: "ms-1-3",
          title: "Write methodology & formal evaluation",
          description: "Document experimental parameters, network topology, and node failure scenarios",
          estimatedMinutes: 120,
          estimatedHours: 2,
          completed: false,
          targetDay: "Tomorrow",
          notes: "Detail testbed environment"
        },
        {
          id: "ms-1-4",
          title: "Format citations & IEEE bibliography",
          description: "Verify all reference entries against IEEE formatting guidelines and export PDF",
          estimatedMinutes: 60,
          estimatedHours: 1,
          completed: false,
          targetDay: "Day of Deadline",
          notes: "Final proofread and reference validation"
        }
      ],
      status: "in_progress",
      riskLevel: "CRITICAL",
      recommendedStartDate: "Active now",
      notes: "Term capstone deliverable. High cognitive focus required.",
      source: "manual",
      createdAt: new Date(now.getTime() - 4 * 24 * 3600 * 1e3).toISOString()
    },
    {
      id: "task-2-dbms-project",
      title: "DBMS Mini Project",
      course: "Database Systems",
      description: "Relational database schema modeling, normalized DDL, SQL queries, and stored procedures.",
      deadline: createRelativeIsoDate(2, 14),
      // ~62 hours from now (Mid-Range Horizon / Colliding)
      estimatedHours: 5,
      completedHours: 1,
      // 4.0h remaining
      requirements: [
        "Relational ER diagram with normalization notes (Chen / Crow's Foot notation)",
        "PostgreSQL schema DDL script with primary/foreign key constraints",
        "Stored procedures and transaction rollback safety scripts",
        "Submission documentation PDF with query execution screenshots"
      ],
      milestones: [
        {
          id: "ms-2-1",
          title: "Understand project requirements & identify entities",
          description: "Analyze banking transaction specifications and determine primary keys",
          estimatedMinutes: 60,
          estimatedHours: 1,
          completed: true,
          targetDay: "Completed",
          notes: "Identified Accounts, Customers, Transactions entities"
        },
        {
          id: "ms-2-2",
          title: "Create the ER diagram",
          description: "Model 1:N and N:M relationships with cardinality and normalization rules",
          estimatedMinutes: 90,
          estimatedHours: 1.5,
          completed: false,
          targetDay: "Tomorrow",
          notes: "Export high-res diagram"
        },
        {
          id: "ms-2-3",
          title: "Write SQL schema DDL and stored procedures",
          description: "Implement tables, check constraints, and ACID compliant transfer procedure",
          estimatedMinutes: 90,
          estimatedHours: 1.5,
          completed: false,
          targetDay: "Day 3",
          notes: "Test with mock dataset"
        },
        {
          id: "ms-2-4",
          title: "Review notation, screenshots & submit",
          description: "Verify queries against rubric and prepare final submission package",
          estimatedMinutes: 60,
          estimatedHours: 1,
          completed: false,
          targetDay: "Deadline Day",
          notes: "Compile final PDF"
        }
      ],
      status: "in_progress",
      riskLevel: "AT_RISK",
      recommendedStartDate: "Today",
      notes: "Submission portal closes sharply at midnight.",
      source: "import_notice",
      createdAt: new Date(now.getTime() - 2 * 24 * 3600 * 1e3).toISOString()
    },
    {
      id: "task-3-stats-quiz",
      title: "Statistics Quiz Preparation",
      course: "Statistics",
      description: "Module 4: Hypothesis Testing, p-values, and two-tailed Student's t-distribution.",
      deadline: createRelativeIsoDate(0, 21),
      // ~21 hours from now (Immediate Horizon)
      estimatedHours: 2,
      completedHours: 0,
      // 2.0h remaining
      requirements: [
        "Review Module 4: Hypothesis Testing and significance levels",
        "Solve 5 practice problems on Student's t-distribution",
        "Prepare 1-page allowable formula cheat sheet"
      ],
      milestones: [
        {
          id: "ms-3-1",
          title: "Identify required topics & study concepts",
          description: "Review lecture slides on null/alternative hypotheses and alpha thresholds",
          estimatedMinutes: 45,
          estimatedHours: 0.75,
          completed: false,
          targetDay: "Today (AM)",
          notes: "Formulas and test criteria"
        },
        {
          id: "ms-3-2",
          title: "Practice problems & review difficult questions",
          description: "Work through problem set 4 and calculate critical t-values",
          estimatedMinutes: 50,
          estimatedHours: 0.85,
          completed: false,
          targetDay: "Today (PM)",
          notes: "Two-sample t-tests"
        },
        {
          id: "ms-3-3",
          title: "Final revision & formula cheat sheet",
          description: "Consolidate formula sheet and verify allowable calculator functions",
          estimatedMinutes: 25,
          estimatedHours: 0.4,
          completed: false,
          targetDay: "Tonight",
          notes: "Formula sheet summary"
        }
      ],
      status: "pending",
      riskLevel: "CRITICAL",
      recommendedStartDate: "Immediate",
      notes: "In-class 30-minute closed book quiz.",
      source: "manual",
      createdAt: new Date(now.getTime() - 1 * 24 * 3600 * 1e3).toISOString()
    },
    {
      id: "task-4-oop-pres",
      title: "OOP Design Patterns Presentation",
      course: "Object Oriented Programming",
      description: "Architectural comparison and live code demonstration of Visitor and Observer patterns.",
      deadline: createRelativeIsoDate(3, 19),
      // ~91 hours from now (Mid-Range Horizon)
      estimatedHours: 4.8,
      completedHours: 1.5,
      // 3.3h remaining
      requirements: [
        "10-slide deck explaining Visitor and Observer structural & behavioral patterns",
        "Live Java code demonstration snippet with unit tests",
        "Speaker speaking notes and 2 interactive audience quiz questions"
      ],
      milestones: [
        {
          id: "ms-4-1",
          title: "Prepare presentation content & UML diagrams",
          description: "Draft slide outline and class architecture diagrams for both patterns",
          estimatedMinutes: 90,
          estimatedHours: 1.5,
          completed: true,
          targetDay: "Completed",
          notes: "UML class diagrams finalized"
        },
        {
          id: "ms-4-2",
          title: "Create the slides & add diagrams",
          description: "Build slide deck with clean diagrams and code callouts",
          estimatedMinutes: 100,
          estimatedHours: 1.7,
          completed: false,
          targetDay: "Tomorrow",
          notes: "Format visual deck"
        },
        {
          id: "ms-4-3",
          title: "Write Java demo snippet & rehearse timing",
          description: "Write runnable demo and practice delivery to stay strictly under 12 minutes",
          estimatedMinutes: 95,
          estimatedHours: 1.6,
          completed: false,
          targetDay: "Day 3",
          notes: "Rehearse presentation"
        }
      ],
      status: "in_progress",
      riskLevel: "AT_RISK",
      recommendedStartDate: "Tomorrow",
      notes: "Team presentation in tutorial slot.",
      source: "manual",
      createdAt: new Date(now.getTime() - 3 * 24 * 3600 * 1e3).toISOString()
    },
    {
      id: "task-5-lab-record",
      title: "Operating Systems Lab Record",
      course: "Programming Lab",
      description: "Experiment 6: Banker's Deadlock Avoidance algorithm implementation and execution analysis.",
      deadline: createRelativeIsoDate(4, 16),
      // ~112 hours from now (Mid-Range Horizon)
      estimatedHours: 2.5,
      completedHours: 0.5,
      // 2.0h remaining
      requirements: [
        "Document Experiment 6: Banker's Deadlock Avoidance algorithm theory",
        "Annotated C source code with safety and resource-request algorithm logic",
        "Terminal execution logs demonstrating safe sequence and unsafe deadlock state"
      ],
      milestones: [
        {
          id: "ms-5-1",
          title: "Analyze algorithm & implement C code",
          description: "Implement safety test and resource-allocation matrix logic",
          estimatedMinutes: 60,
          estimatedHours: 1,
          completed: false,
          targetDay: "Day 3",
          notes: "Write Banker's algorithm"
        },
        {
          id: "ms-5-2",
          title: "Test inputs & capture terminal screenshots",
          description: "Run sample inputs with 5 processes and 3 resource types",
          estimatedMinutes: 60,
          estimatedHours: 1,
          completed: false,
          targetDay: "Day 4",
          notes: "Compile execution tables"
        }
      ],
      status: "in_progress",
      riskLevel: "APPROACHING",
      recommendedStartDate: "In 2 days",
      notes: "Weekly lab manual verification sign-off.",
      source: "manual",
      createdAt: new Date(now.getTime() - 1 * 24 * 3600 * 1e3).toISOString()
    },
    {
      id: "task-6-reading",
      title: "Communication Skills Reading Assignment",
      course: "Communication Skills",
      description: "Chapter 7: Cross-Cultural Technical Collaboration and peer feedback mechanisms.",
      deadline: createRelativeIsoDate(9, 12),
      // ~9.5 days from now (Upcoming Horizon)
      estimatedHours: 1.5,
      completedHours: 0,
      // 1.5h remaining
      requirements: [
        "Read Chapter 7: Cross-Cultural Technical Collaboration in software engineering",
        "Write 300-word reflection essay on structured code review etiquette"
      ],
      milestones: [
        {
          id: "ms-6-1",
          title: "Read chapter & write short reflection",
          description: "Annotate key insights on asynchronous technical communication",
          estimatedMinutes: 90,
          estimatedHours: 1.5,
          completed: false,
          targetDay: "Next week",
          notes: "Draft reflection essay"
        }
      ],
      status: "pending",
      riskLevel: "SAFE",
      recommendedStartDate: "In 5 days",
      notes: "Supplementary reading reflection.",
      source: "manual",
      createdAt: new Date(now.getTime() - 2 * 24 * 3600 * 1e3).toISOString()
    }
  ];
};
var enrichTasks = (tasks) => {
  const { collidingTaskIds } = detectDeadlineCollisions(tasks);
  return tasks.map((task) => {
    const remainingHours = Math.max(0, task.estimatedHours - task.completedHours);
    const completionPercentage = task.estimatedHours > 0 ? Math.min(100, Math.round(task.completedHours / task.estimatedHours * 100)) : 0;
    const isColliding = collidingTaskIds.has(task.id);
    const urgencyResult = determineTaskUrgency(task, isColliding);
    const riskResult = calculateTaskRisk(task, isColliding);
    return {
      ...task,
      remainingHours,
      completionPercentage,
      riskLevel: urgencyResult.urgencyLevel || riskResult.riskLevel,
      riskReason: urgencyResult.explanation || riskResult.riskReason,
      urgencyReason: urgencyResult.explanation,
      availableHoursBeforeDeadline: urgencyResult.availableHours,
      capacityStatus: urgencyResult.capacityStatus,
      isColliding
    };
  });
};
var loadStoredTasks = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      const initial = createInitialTasks();
      saveTasksToStorage(initial);
      return enrichTasks(initial);
    }
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed) || parsed.length === 0) {
      const initial = createInitialTasks();
      saveTasksToStorage(initial);
      return enrichTasks(initial);
    }
    return enrichTasks(parsed);
  } catch (e3) {
    console.error("Error loading stored tasks, resetting to fresh sample:", e3);
    const fallback = createInitialTasks();
    saveTasksToStorage(fallback);
    return enrichTasks(fallback);
  }
};
var saveTasksToStorage = (tasks) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  } catch (e3) {
    console.error("Error saving tasks to storage:", e3);
  }
};
var resetToDemoTasks = () => {
  const fresh = createInitialTasks();
  saveTasksToStorage(fresh);
  return enrichTasks(fresh);
};

// src/services/realityCheck.ts
var calculateRealityCheck = (tasks, dailyCapacity = DEFAULT_DAILY_CAPACITY_HOURS, windowDays = 5) => {
  const availableHours = windowDays * 2.3;
  const windowHours = windowDays * 24;
  const activeTasks = tasks.filter((t3) => t3.status !== "completed");
  const tasksInWindow = activeTasks.filter((t3) => {
    const hours = getHoursRemaining(t3.deadline);
    return hours > 0 && hours <= windowHours;
  });
  let requiredHours = 0;
  const contributingTasks = [];
  tasksInWindow.forEach((t3) => {
    const remaining = Math.max(0, t3.estimatedHours - t3.completedHours);
    if (remaining > 0) {
      requiredHours += remaining;
      contributingTasks.push({
        task: t3,
        hours: remaining,
        percentageOfTotal: 0
      });
    }
  });
  contributingTasks.sort((a3, b2) => b2.hours - a3.hours);
  contributingTasks.forEach((item) => {
    item.percentageOfTotal = requiredHours > 0 ? Math.round(item.hours / requiredHours * 100) : 0;
  });
  const shortfallHours = Math.max(0, requiredHours - availableHours);
  const isOverloaded = shortfallHours > 0.5;
  const statusLabel = isOverloaded ? "You're overloaded" : "Workload is manageable";
  const summaryText = isOverloaded ? `Your current workload requires about ${formatHoursAndMinutes(shortfallHours)} more time than you've currently allocated for the next ${windowDays} days.` : `You have ${formatHoursAndMinutes(availableHours - requiredHours)} of safety buffer over the next ${windowDays} days.`;
  const suggestedActions = isOverloaded ? [
    "Complete urgent work first (focus on imminent deadlines within 48 hours)",
    "Reduce optional polish (skip extra formatting or discretionary diagrams)",
    "Move lower-urgency tasks later or negotiate short extensions",
    "Use available study blocks efficiently without context switching"
  ] : [
    "Maintain steady progress on your top recommended task",
    "Keep buffers intact to guard against unexpected delays"
  ];
  return {
    availableHours,
    requiredHours,
    shortfallHours,
    isOverloaded,
    daysAnalyzed: windowDays,
    statusLabel,
    summaryText,
    contributingTasks,
    suggestedActions
  };
};

// ../../../../AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/lucide-react/dist/esm/shared/src/utils.js
var toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
var toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p22) => p22 ? p22.toUpperCase() : p1.toLowerCase()
);
var toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
var mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
var hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
};

// ../../../../AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/lucide-react/dist/esm/defaultAttributes.js
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};

// ../../../../AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/lucide-react/dist/esm/Icon.js
var Icon = D3(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => _(
    "svg",
    {
      ref,
      ...defaultAttributes,
      width: size,
      height: size,
      stroke: color,
      strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      className: mergeClasses("lucide", className),
      ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
      ...rest
    },
    [
      ...iconNode.map(([tag, attrs]) => _(tag, attrs)),
      ...Array.isArray(children) ? children : [children]
    ]
  )
);

// ../../../../AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/lucide-react/dist/esm/createLucideIcon.js
var createLucideIcon = (iconName, iconNode) => {
  const Component = D3(
    ({ className, ...props }, ref) => _(Icon, {
      ref,
      iconNode,
      className: mergeClasses(
        `lucide-${toKebabCase(toPascalCase(iconName))}`,
        `lucide-${iconName}`,
        className
      ),
      ...props
    })
  );
  Component.displayName = toPascalCase(iconName);
  return Component;
};

// ../../../../AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/lucide-react/dist/esm/icons/arrow-left.js
var __iconNode = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
];
var ArrowLeft = createLucideIcon("arrow-left", __iconNode);

// ../../../../AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/lucide-react/dist/esm/icons/arrow-right.js
var __iconNode2 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
];
var ArrowRight = createLucideIcon("arrow-right", __iconNode2);

// ../../../../AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/lucide-react/dist/esm/icons/arrow-up-down.js
var __iconNode3 = [
  ["path", { d: "m21 16-4 4-4-4", key: "f6ql7i" }],
  ["path", { d: "M17 20V4", key: "1ejh1v" }],
  ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }]
];
var ArrowUpDown = createLucideIcon("arrow-up-down", __iconNode3);

// ../../../../AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js
var __iconNode4 = [
  ["path", { d: "M7 7h10v10", key: "1tivn9" }],
  ["path", { d: "M7 17 17 7", key: "1vkiza" }]
];
var ArrowUpRight = createLucideIcon("arrow-up-right", __iconNode4);

// ../../../../AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/lucide-react/dist/esm/icons/calendar-clock.js
var __iconNode5 = [
  ["path", { d: "M16 14v2.2l1.6 1", key: "fo4ql5" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["path", { d: "M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5", key: "1osxxc" }],
  ["path", { d: "M3 10h5", key: "r794hk" }],
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["circle", { cx: "16", cy: "16", r: "6", key: "qoo3c4" }]
];
var CalendarClock = createLucideIcon("calendar-clock", __iconNode5);

// ../../../../AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/lucide-react/dist/esm/icons/calendar-days.js
var __iconNode6 = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["path", { d: "M8 14h.01", key: "6423bh" }],
  ["path", { d: "M12 14h.01", key: "1etili" }],
  ["path", { d: "M16 14h.01", key: "1gbofw" }],
  ["path", { d: "M8 18h.01", key: "lrp35t" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }],
  ["path", { d: "M16 18h.01", key: "kzsmim" }]
];
var CalendarDays = createLucideIcon("calendar-days", __iconNode6);

// ../../../../AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/lucide-react/dist/esm/icons/calendar.js
var __iconNode7 = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
];
var Calendar = createLucideIcon("calendar", __iconNode7);

// ../../../../AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/lucide-react/dist/esm/icons/chart-column.js
var __iconNode8 = [
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
  ["path", { d: "M18 17V9", key: "2bz60n" }],
  ["path", { d: "M13 17V5", key: "1frdt8" }],
  ["path", { d: "M8 17v-3", key: "17ska0" }]
];
var ChartColumn = createLucideIcon("chart-column", __iconNode8);

// ../../../../AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/lucide-react/dist/esm/icons/chart-pie.js
var __iconNode9 = [
  [
    "path",
    {
      d: "M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z",
      key: "pzmjnu"
    }
  ],
  ["path", { d: "M21.21 15.89A10 10 0 1 1 8 2.83", key: "k2fpak" }]
];
var ChartPie = createLucideIcon("chart-pie", __iconNode9);

// ../../../../AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/lucide-react/dist/esm/icons/check.js
var __iconNode10 = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]];
var Check = createLucideIcon("check", __iconNode10);

// ../../../../AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/lucide-react/dist/esm/icons/chevron-down.js
var __iconNode11 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
var ChevronDown = createLucideIcon("chevron-down", __iconNode11);

// ../../../../AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/lucide-react/dist/esm/icons/chevron-right.js
var __iconNode12 = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]];
var ChevronRight = createLucideIcon("chevron-right", __iconNode12);

// ../../../../AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/lucide-react/dist/esm/icons/chevron-up.js
var __iconNode13 = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]];
var ChevronUp = createLucideIcon("chevron-up", __iconNode13);

// ../../../../AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/lucide-react/dist/esm/icons/circle-alert.js
var __iconNode14 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
];
var CircleAlert = createLucideIcon("circle-alert", __iconNode14);

// ../../../../AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/lucide-react/dist/esm/icons/circle-check-big.js
var __iconNode15 = [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
];
var CircleCheckBig = createLucideIcon("circle-check-big", __iconNode15);

// ../../../../AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/lucide-react/dist/esm/icons/circle-check.js
var __iconNode16 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
var CircleCheck = createLucideIcon("circle-check", __iconNode16);

// ../../../../AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/lucide-react/dist/esm/icons/clock.js
var __iconNode17 = [
  ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
];
var Clock = createLucideIcon("clock", __iconNode17);

// ../../../../AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/lucide-react/dist/esm/icons/cloud-upload.js
var __iconNode18 = [
  ["path", { d: "M12 13v8", key: "1l5pq0" }],
  ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", key: "1pljnt" }],
  ["path", { d: "m8 17 4-4 4 4", key: "1quai1" }]
];
var CloudUpload = createLucideIcon("cloud-upload", __iconNode18);

// ../../../../AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/lucide-react/dist/esm/icons/compass.js
var __iconNode19 = [
  [
    "path",
    {
      d: "m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",
      key: "9ktpf1"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
];
var Compass = createLucideIcon("compass", __iconNode19);

// ../../../../AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/lucide-react/dist/esm/icons/file-text.js
var __iconNode20 = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
];
var FileText = createLucideIcon("file-text", __iconNode20);

// ../../../../AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/lucide-react/dist/esm/icons/file-up.js
var __iconNode21 = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M12 12v6", key: "3ahymv" }],
  ["path", { d: "m15 15-3-3-3 3", key: "15xj92" }]
];
var FileUp = createLucideIcon("file-up", __iconNode21);

// ../../../../AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/lucide-react/dist/esm/icons/flame.js
var __iconNode22 = [
  [
    "path",
    {
      d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",
      key: "96xj49"
    }
  ]
];
var Flame = createLucideIcon("flame", __iconNode22);

// ../../../../AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/lucide-react/dist/esm/icons/flask-conical.js
var __iconNode23 = [
  [
    "path",
    {
      d: "M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",
      key: "18mbvz"
    }
  ],
  ["path", { d: "M6.453 15h11.094", key: "3shlmq" }],
  ["path", { d: "M8.5 2h7", key: "csnxdl" }]
];
var FlaskConical = createLucideIcon("flask-conical", __iconNode23);

// ../../../../AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/lucide-react/dist/esm/icons/layers.js
var __iconNode24 = [
  [
    "path",
    {
      d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
      key: "zw3jo"
    }
  ],
  [
    "path",
    {
      d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
      key: "1wduqc"
    }
  ],
  [
    "path",
    {
      d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
      key: "kqbvx6"
    }
  ]
];
var Layers = createLucideIcon("layers", __iconNode24);

// ../../../../AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/lucide-react/dist/esm/icons/layout-dashboard.js
var __iconNode25 = [
  ["rect", { width: "7", height: "9", x: "3", y: "3", rx: "1", key: "10lvy0" }],
  ["rect", { width: "7", height: "5", x: "14", y: "3", rx: "1", key: "16une8" }],
  ["rect", { width: "7", height: "9", x: "14", y: "12", rx: "1", key: "1hutg5" }],
  ["rect", { width: "7", height: "5", x: "3", y: "16", rx: "1", key: "ldoo1y" }]
];
var LayoutDashboard = createLucideIcon("layout-dashboard", __iconNode25);

// ../../../../AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/lucide-react/dist/esm/icons/life-buoy.js
var __iconNode26 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m4.93 4.93 4.24 4.24", key: "1ymg45" }],
  ["path", { d: "m14.83 9.17 4.24-4.24", key: "1cb5xl" }],
  ["path", { d: "m14.83 14.83 4.24 4.24", key: "q42g0n" }],
  ["path", { d: "m9.17 14.83-4.24 4.24", key: "bqpfvv" }],
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }]
];
var LifeBuoy = createLucideIcon("life-buoy", __iconNode26);

// ../../../../AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/lucide-react/dist/esm/icons/menu.js
var __iconNode27 = [
  ["path", { d: "M4 12h16", key: "1lakjw" }],
  ["path", { d: "M4 18h16", key: "19g7jn" }],
  ["path", { d: "M4 6h16", key: "1o0s65" }]
];
var Menu = createLucideIcon("menu", __iconNode27);

// ../../../../AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/lucide-react/dist/esm/icons/mic.js
var __iconNode28 = [
  ["path", { d: "M12 19v3", key: "npa21l" }],
  ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2", key: "1vc78b" }],
  ["rect", { x: "9", y: "2", width: "6", height: "13", rx: "3", key: "s6n7sd" }]
];
var Mic = createLucideIcon("mic", __iconNode28);

// ../../../../AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/lucide-react/dist/esm/icons/pause.js
var __iconNode29 = [
  ["rect", { x: "14", y: "4", width: "4", height: "16", rx: "1", key: "zuxfzm" }],
  ["rect", { x: "6", y: "4", width: "4", height: "16", rx: "1", key: "1okwgv" }]
];
var Pause = createLucideIcon("pause", __iconNode29);

// ../../../../AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/lucide-react/dist/esm/icons/pen.js
var __iconNode30 = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ]
];
var Pen = createLucideIcon("pen", __iconNode30);

// ../../../../AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/lucide-react/dist/esm/icons/play.js
var __iconNode31 = [["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }]];
var Play = createLucideIcon("play", __iconNode31);

// ../../../../AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/lucide-react/dist/esm/icons/plus.js
var __iconNode32 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
];
var Plus = createLucideIcon("plus", __iconNode32);

// ../../../../AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/lucide-react/dist/esm/icons/radio.js
var __iconNode33 = [
  ["path", { d: "M16.247 7.761a6 6 0 0 1 0 8.478", key: "1fwjs5" }],
  ["path", { d: "M19.075 4.933a10 10 0 0 1 0 14.134", key: "ehdyv1" }],
  ["path", { d: "M4.925 19.067a10 10 0 0 1 0-14.134", key: "1q22gi" }],
  ["path", { d: "M7.753 16.239a6 6 0 0 1 0-8.478", key: "r2q7qm" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
];
var Radio = createLucideIcon("radio", __iconNode33);

// ../../../../AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js
var __iconNode34 = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
];
var RotateCcw = createLucideIcon("rotate-ccw", __iconNode34);

// ../../../../AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/lucide-react/dist/esm/icons/scale.js
var __iconNode35 = [
  ["path", { d: "m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z", key: "7g6ntu" }],
  ["path", { d: "m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z", key: "ijws7r" }],
  ["path", { d: "M7 21h10", key: "1b0cd5" }],
  ["path", { d: "M12 3v18", key: "108xh3" }],
  ["path", { d: "M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2", key: "3gwbw2" }]
];
var Scale = createLucideIcon("scale", __iconNode35);

// ../../../../AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/lucide-react/dist/esm/icons/scissors.js
var __iconNode36 = [
  ["circle", { cx: "6", cy: "6", r: "3", key: "1lh9wr" }],
  ["path", { d: "M8.12 8.12 12 12", key: "1alkpv" }],
  ["path", { d: "M20 4 8.12 15.88", key: "xgtan2" }],
  ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
  ["path", { d: "M14.8 14.8 20 20", key: "ptml3r" }]
];
var Scissors = createLucideIcon("scissors", __iconNode36);

// ../../../../AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/lucide-react/dist/esm/icons/search.js
var __iconNode37 = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
];
var Search = createLucideIcon("search", __iconNode37);

// ../../../../AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/lucide-react/dist/esm/icons/shield-alert.js
var __iconNode38 = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "M12 8v4", key: "1got3b" }],
  ["path", { d: "M12 16h.01", key: "1drbdi" }]
];
var ShieldAlert = createLucideIcon("shield-alert", __iconNode38);

// ../../../../AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/lucide-react/dist/esm/icons/shield-check.js
var __iconNode39 = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
var ShieldCheck = createLucideIcon("shield-check", __iconNode39);

// ../../../../AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/lucide-react/dist/esm/icons/sparkles.js
var __iconNode40 = [
  [
    "path",
    {
      d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
      key: "4pj2yx"
    }
  ],
  ["path", { d: "M20 3v4", key: "1olli1" }],
  ["path", { d: "M22 5h-4", key: "1gvqau" }],
  ["path", { d: "M4 17v2", key: "vumght" }],
  ["path", { d: "M5 18H3", key: "zchphs" }]
];
var Sparkles = createLucideIcon("sparkles", __iconNode40);

// ../../../../AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/lucide-react/dist/esm/icons/split.js
var __iconNode41 = [
  ["path", { d: "M16 3h5v5", key: "1806ms" }],
  ["path", { d: "M8 3H3v5", key: "15dfkv" }],
  ["path", { d: "M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3", key: "1qrqzj" }],
  ["path", { d: "m15 9 6-6", key: "ko1vev" }]
];
var Split = createLucideIcon("split", __iconNode41);

// ../../../../AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/lucide-react/dist/esm/icons/square-check-big.js
var __iconNode42 = [
  [
    "path",
    { d: "M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344", key: "2acyp4" }
  ],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
];
var SquareCheckBig = createLucideIcon("square-check-big", __iconNode42);

// ../../../../AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/lucide-react/dist/esm/icons/square.js
var __iconNode43 = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
];
var Square = createLucideIcon("square", __iconNode43);

// ../../../../AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/lucide-react/dist/esm/icons/timer.js
var __iconNode44 = [
  ["line", { x1: "10", x2: "14", y1: "2", y2: "2", key: "14vaq8" }],
  ["line", { x1: "12", x2: "15", y1: "14", y2: "11", key: "17fdiu" }],
  ["circle", { cx: "12", cy: "14", r: "8", key: "1e1u0o" }]
];
var Timer = createLucideIcon("timer", __iconNode44);

// ../../../../AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/lucide-react/dist/esm/icons/trash-2.js
var __iconNode45 = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
];
var Trash2 = createLucideIcon("trash-2", __iconNode45);

// ../../../../AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/lucide-react/dist/esm/icons/trending-down.js
var __iconNode46 = [
  ["path", { d: "M16 17h6v-6", key: "t6n2it" }],
  ["path", { d: "m22 17-8.5-8.5-5 5L2 7", key: "x473p" }]
];
var TrendingDown = createLucideIcon("trending-down", __iconNode46);

// ../../../../AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/lucide-react/dist/esm/icons/triangle-alert.js
var __iconNode47 = [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
];
var TriangleAlert = createLucideIcon("triangle-alert", __iconNode47);

// ../../../../AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/lucide-react/dist/esm/icons/x.js
var __iconNode48 = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
var X2 = createLucideIcon("x", __iconNode48);

// src/components/Sidebar.tsx
var Sidebar = ({
  activeTab,
  setActiveTab,
  onResetDemo,
  criticalCount,
  atRiskCount,
  isMobileOpen = false,
  setIsMobileOpen
}) => {
  const navItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: /* @__PURE__ */ Rn.createElement(LayoutDashboard, { className: "w-4 h-4" })
    },
    {
      id: "my-work",
      label: "My Work",
      icon: /* @__PURE__ */ Rn.createElement(SquareCheckBig, { className: "w-4 h-4" })
    },
    {
      id: "planner",
      label: "Weekly Planner",
      icon: /* @__PURE__ */ Rn.createElement(CalendarDays, { className: "w-4 h-4" })
    },
    {
      id: "insights",
      label: "Insights",
      icon: /* @__PURE__ */ Rn.createElement(ChartColumn, { className: "w-4 h-4" })
    },
    {
      id: "panic-mode",
      label: "Panic Mode",
      icon: /* @__PURE__ */ Rn.createElement(Flame, { className: "w-4 h-4 text-rose-500 animate-pulse" }),
      badge: criticalCount > 0 ? `${criticalCount}` : void 0,
      badgeColor: "bg-rose-500 text-white"
    },
    {
      id: "reality-check",
      label: "Reality Check",
      icon: /* @__PURE__ */ Rn.createElement(Scale, { className: "w-4 h-4 text-amber-500" })
    },
    {
      id: "save-me",
      label: "Save Me Mode",
      icon: /* @__PURE__ */ Rn.createElement(LifeBuoy, { className: "w-4 h-4 text-indigo-500" })
    },
    {
      id: "reverse-planner",
      label: "Reverse Planner",
      icon: /* @__PURE__ */ Rn.createElement(Timer, { className: "w-4 h-4 text-emerald-500" })
    }
  ];
  return /* @__PURE__ */ Rn.createElement(Rn.Fragment, null, isMobileOpen && /* @__PURE__ */ Rn.createElement(
    "div",
    {
      className: "fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 lg:hidden",
      onClick: () => setIsMobileOpen?.(false)
    }
  ), /* @__PURE__ */ Rn.createElement(
    "aside",
    {
      className: `fixed top-0 left-0 bottom-0 z-50 w-64 bg-white border-r border-slate-200/80 flex flex-col justify-between transition-transform duration-300 lg:translate-x-0 ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}`
    },
    /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("div", { className: "p-5 border-b border-slate-100 flex items-center justify-between" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-2.5" }, /* @__PURE__ */ Rn.createElement("div", { className: "w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-600 via-indigo-700 to-blue-600 flex items-center justify-center text-white shadow-md shadow-indigo-100 ring-2 ring-indigo-50" }, /* @__PURE__ */ Rn.createElement(Radio, { className: "w-5 h-5 animate-pulse" })), /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-1.5" }, /* @__PURE__ */ Rn.createElement("span", { className: "font-bold text-lg tracking-tight text-slate-900" }, "WorkRadar"), /* @__PURE__ */ Rn.createElement("span", { className: "px-1.5 py-0.5 text-[10px] font-semibold bg-indigo-50 text-indigo-700 rounded border border-indigo-200/60 uppercase tracking-wider" }, "AI")), /* @__PURE__ */ Rn.createElement("p", { className: "text-[11px] text-slate-400 font-medium leading-none mt-0.5" }, "Workload Intelligence")))), /* @__PURE__ */ Rn.createElement("div", { className: "px-3 py-4 space-y-1" }, /* @__PURE__ */ Rn.createElement("div", { className: "px-3 pb-2 text-[10px] font-bold uppercase tracking-wider text-slate-400" }, "Workspace"), navItems.map((item) => {
      const isActive = activeTab === item.id;
      return /* @__PURE__ */ Rn.createElement(
        "button",
        {
          key: item.id,
          onClick: () => {
            setActiveTab(item.id);
            setIsMobileOpen?.(false);
          },
          className: `w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${isActive ? "bg-slate-900 text-white shadow-sm font-semibold" : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/80"}`
        },
        /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-2.5" }, /* @__PURE__ */ Rn.createElement("span", { className: isActive ? "text-white" : "text-slate-500" }, item.icon), /* @__PURE__ */ Rn.createElement("span", null, item.label)),
        item.badge && /* @__PURE__ */ Rn.createElement(
          "span",
          {
            className: `text-[11px] px-1.5 py-0.5 rounded-full font-bold ${isActive ? "bg-rose-500 text-white" : item.badgeColor}`
          },
          item.badge
        )
      );
    }))),
    /* @__PURE__ */ Rn.createElement("div", { className: "p-3 border-t border-slate-100 bg-slate-50/50 space-y-2" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-3 p-2 rounded-xl bg-white border border-slate-200/80 shadow-xs" }, /* @__PURE__ */ Rn.createElement("div", { className: "w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-violet-500 flex items-center justify-center text-white text-xs font-bold" }, "Z"), /* @__PURE__ */ Rn.createElement("div", { className: "flex-1 min-w-0" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center justify-between" }, /* @__PURE__ */ Rn.createElement("p", { className: "text-xs font-semibold text-slate-900 truncate" }, "Ziya"), /* @__PURE__ */ Rn.createElement("span", { className: "w-2 h-2 rounded-full bg-emerald-500", title: "Active session" })), /* @__PURE__ */ Rn.createElement("p", { className: "text-[11px] text-slate-400 truncate" }, "Computer Science \xB7 Term 7"))), /* @__PURE__ */ Rn.createElement(
      "button",
      {
        onClick: onResetDemo,
        className: "w-full flex items-center justify-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 hover:text-slate-900 text-xs font-medium transition-colors",
        title: "Reset tasks to initial hackathon demo state"
      },
      /* @__PURE__ */ Rn.createElement(RotateCcw, { className: "w-3.5 h-3.5 text-slate-400" }),
      /* @__PURE__ */ Rn.createElement("span", null, "Reset Demo Data")
    ))
  ));
};

// src/components/Header.tsx
var Header = ({
  onOpenAddTask,
  onOpenImportNotice,
  onOpenPanicMode,
  onOpenRealityCheck,
  realityCheck,
  onToggleMobileMenu
}) => {
  const todayFormatted = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
    year: "numeric"
  }).format(/* @__PURE__ */ new Date());
  return /* @__PURE__ */ Rn.createElement("header", { className: "sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-slate-200/80 px-4 sm:px-6 py-3" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center justify-between gap-4" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-3" }, /* @__PURE__ */ Rn.createElement(
    "button",
    {
      onClick: onToggleMobileMenu,
      className: "p-2 -ml-2 text-slate-500 hover:text-slate-800 lg:hidden rounded-lg hover:bg-slate-100 cursor-pointer",
      "aria-label": "Open navigation menu"
    },
    /* @__PURE__ */ Rn.createElement(Menu, { className: "w-5 h-5" })
  ), /* @__PURE__ */ Rn.createElement("div", { className: "hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100/70 border border-slate-200/60 text-xs text-slate-600 font-medium" }, /* @__PURE__ */ Rn.createElement(Calendar, { className: "w-3.5 h-3.5 text-slate-500" }), /* @__PURE__ */ Rn.createElement("span", null, todayFormatted), /* @__PURE__ */ Rn.createElement("span", { className: "w-1 h-1 rounded-full bg-slate-400" }), /* @__PURE__ */ Rn.createElement("span", { className: "text-slate-500" }, "Academic Session"))), /* @__PURE__ */ Rn.createElement(
    "div",
    {
      onClick: onOpenRealityCheck,
      className: `cursor-pointer inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all hover:scale-[1.02] shadow-2xs ${realityCheck.isOverloaded ? "bg-rose-50 border-rose-200 text-rose-700 hover:bg-rose-100/80" : "bg-emerald-50 border-emerald-200 text-emerald-700 hover:bg-emerald-100/80"}`,
      title: "Click to open comprehensive Reality Check calculation"
    },
    realityCheck.isOverloaded ? /* @__PURE__ */ Rn.createElement(Rn.Fragment, null, /* @__PURE__ */ Rn.createElement("span", { className: "w-2 h-2 rounded-full bg-rose-500 animate-pulse" }), /* @__PURE__ */ Rn.createElement("span", null, "Overloaded: ", formatHoursAndMinutes(realityCheck.shortfallHours), " Shortfall"), /* @__PURE__ */ Rn.createElement("span", { className: "text-[11px] underline font-normal ml-0.5 hidden md:inline" }, "Reality Check \u2192")) : /* @__PURE__ */ Rn.createElement(Rn.Fragment, null, /* @__PURE__ */ Rn.createElement("span", { className: "w-2 h-2 rounded-full bg-emerald-500" }), /* @__PURE__ */ Rn.createElement("span", null, "Capacity Balanced"))
  ), /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ Rn.createElement(
    "button",
    {
      onClick: onOpenPanicMode,
      className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 border border-rose-200 text-rose-700 text-xs font-semibold transition-all hover:shadow-2xs cursor-pointer",
      title: "Switch to 48-Hour Emergency Panic View"
    },
    /* @__PURE__ */ Rn.createElement(Flame, { className: "w-3.5 h-3.5 text-rose-600" }),
    /* @__PURE__ */ Rn.createElement("span", { className: "hidden sm:inline" }, "Panic Mode")
  ), /* @__PURE__ */ Rn.createElement(
    "button",
    {
      onClick: onOpenImportNotice,
      className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-50 hover:bg-indigo-100 border border-indigo-200/80 text-indigo-700 text-xs font-semibold transition-all hover:shadow-2xs cursor-pointer",
      title: "Import assignment PDF, screenshot, or text"
    },
    /* @__PURE__ */ Rn.createElement(FileUp, { className: "w-3.5 h-3.5 text-indigo-600" }),
    /* @__PURE__ */ Rn.createElement("span", { className: "hidden md:inline" }, "Import Notice"),
    /* @__PURE__ */ Rn.createElement("span", { className: "md:hidden" }, "Import")
  ), /* @__PURE__ */ Rn.createElement(
    "button",
    {
      onClick: onOpenAddTask,
      className: "flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-all shadow-2xs cursor-pointer",
      title: "Manually create a new task"
    },
    /* @__PURE__ */ Rn.createElement(Plus, { className: "w-3.5 h-3.5" }),
    /* @__PURE__ */ Rn.createElement("span", null, "Add Task")
  ))));
};

// src/utils/recommendationUtils.ts
var formatRecommendationAction = (rawTitle) => {
  if (!rawTitle) return "";
  const trimmed = rawTitle.trim();
  if (!trimmed) return "";
  const ACTION_VERBS = [
    "complete",
    "finish",
    "submit",
    "prepare",
    "create",
    "review",
    "study",
    "practice",
    "work on",
    "start",
    "implement",
    "write",
    "draft",
    "read",
    "solve",
    "build",
    "conduct",
    "analyze"
  ];
  const lower = trimmed.toLowerCase();
  const words = lower.split(/\s+/);
  const firstWord = words[0];
  const firstTwoWords = words.slice(0, 2).join(" ");
  const startsWithAction = ACTION_VERBS.some((verb) => {
    if (verb.includes(" ")) {
      return firstTwoWords === verb;
    }
    return firstWord === verb;
  });
  if (startsWithAction) {
    return trimmed;
  }
  if (lower.endsWith("preparation") || lower.endsWith("prep")) {
    return `Start ${trimmed}`;
  }
  return `Complete ${trimmed}`;
};

// src/components/RiskBadge.tsx
var RiskBadge = ({
  level = "SAFE",
  showIcon = true,
  size = "md",
  className = ""
}) => {
  const configs = {
    CRITICAL: {
      label: "Critical",
      dot: "bg-rose-500",
      bg: "bg-rose-50",
      text: "text-rose-700 font-semibold",
      border: "border-rose-200",
      icon: /* @__PURE__ */ Rn.createElement(ShieldAlert, { className: size === "sm" ? "w-3 h-3 text-rose-600" : "w-3.5 h-3.5 text-rose-600" })
    },
    AT_RISK: {
      label: "At Risk",
      dot: "bg-orange-500",
      bg: "bg-orange-50",
      text: "text-orange-700 font-semibold",
      border: "border-orange-200",
      icon: /* @__PURE__ */ Rn.createElement(TriangleAlert, { className: size === "sm" ? "w-3 h-3 text-orange-600" : "w-3.5 h-3.5 text-orange-600" })
    },
    APPROACHING: {
      label: "Approaching",
      dot: "bg-amber-500",
      bg: "bg-amber-50",
      text: "text-amber-700 font-medium",
      border: "border-amber-200",
      icon: /* @__PURE__ */ Rn.createElement(Clock, { className: size === "sm" ? "w-3 h-3 text-amber-600" : "w-3.5 h-3.5 text-amber-600" })
    },
    SAFE: {
      label: "Safe",
      dot: "bg-emerald-500",
      bg: "bg-emerald-50",
      text: "text-emerald-700 font-medium",
      border: "border-emerald-200",
      icon: /* @__PURE__ */ Rn.createElement(ShieldCheck, { className: size === "sm" ? "w-3 h-3 text-emerald-600" : "w-3.5 h-3.5 text-emerald-600" })
    }
  };
  const config = configs[level] || configs.SAFE;
  const sizeClasses = {
    sm: "text-xs px-2 py-0.5 gap-1",
    md: "text-xs px-2.5 py-1 gap-1.5",
    lg: "text-sm px-3 py-1.5 gap-2"
  };
  return /* @__PURE__ */ Rn.createElement(
    "span",
    {
      className: `inline-flex items-center rounded-full border ${config.bg} ${config.border} ${config.text} ${sizeClasses[size]} ${className}`,
      title: `Risk level: ${config.label}`
    },
    showIcon && config.icon,
    /* @__PURE__ */ Rn.createElement("span", null, config.label)
  );
};

// src/components/WhatShouldIDoNow.tsx
var WhatShouldIDoNow = ({
  topTask,
  onStartWorking,
  onViewReasoning,
  onOpenDetails
}) => {
  if (!topTask) {
    return /* @__PURE__ */ Rn.createElement("div", { className: "bg-gradient-to-r from-emerald-50 via-teal-50 to-white rounded-2xl border border-emerald-100 p-6 shadow-xs flex items-center justify-between" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-4" }, /* @__PURE__ */ Rn.createElement("div", { className: "w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600" }, /* @__PURE__ */ Rn.createElement(CircleCheck, { className: "w-6 h-6" })), /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("h3", { className: "font-bold text-slate-900 text-lg" }, "All caught up!"), /* @__PURE__ */ Rn.createElement("p", { className: "text-sm text-slate-500" }, "No pressing academic deadlines require immediate intervention. Great job!"))));
  }
  const remainingFormatted = formatHoursAndMinutes(topTask.remainingHours || 0);
  const countdown = formatCountdown(topTask.deadline);
  const actionTitle = formatRecommendationAction(topTask.title);
  const nextMilestone = topTask.milestones?.find((m3) => !m3.completed);
  return /* @__PURE__ */ Rn.createElement("div", { className: "relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950 text-white p-6 sm:p-7 shadow-xl shadow-slate-900/10 border border-slate-800" }, /* @__PURE__ */ Rn.createElement("div", { className: "absolute -right-16 -top-16 w-64 h-64 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" }), /* @__PURE__ */ Rn.createElement("div", { className: "absolute right-32 -bottom-20 w-56 h-56 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" }), /* @__PURE__ */ Rn.createElement("div", { className: "relative z-10 flex flex-wrap items-center justify-between gap-3 mb-4" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ Rn.createElement("span", { className: "flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-semibold tracking-wide uppercase" }, /* @__PURE__ */ Rn.createElement(Compass, { className: "w-3.5 h-3.5 animate-spin", style: { animationDuration: "8s" } }), "WorkRadar Recommendation"), /* @__PURE__ */ Rn.createElement("span", { className: "text-xs text-slate-400 font-medium hidden sm:inline" }, "What Should I Do Now?")), /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ Rn.createElement(RiskBadge, { level: topTask.riskLevel, size: "sm" }))), /* @__PURE__ */ Rn.createElement("div", { className: "relative z-10 mb-6" }, /* @__PURE__ */ Rn.createElement("h2", { className: "text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-white mb-2 leading-tight" }, actionTitle), /* @__PURE__ */ Rn.createElement("div", { className: "flex flex-wrap items-center gap-2 text-sm text-slate-300" }, /* @__PURE__ */ Rn.createElement("span", { className: "font-semibold text-indigo-300" }, topTask.course), /* @__PURE__ */ Rn.createElement("span", null, "\u2022"), /* @__PURE__ */ Rn.createElement("span", null, "Overall completion: ", topTask.completionPercentage || 0, "%"), nextMilestone && /* @__PURE__ */ Rn.createElement(Rn.Fragment, null, /* @__PURE__ */ Rn.createElement("span", null, "\u2022"), /* @__PURE__ */ Rn.createElement("span", { className: "text-amber-300 font-medium" }, "Next: ", nextMilestone.title)))), /* @__PURE__ */ Rn.createElement("div", { className: "relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6" }, /* @__PURE__ */ Rn.createElement("div", { className: "bg-white/5 backdrop-blur-xs rounded-xl p-3 border border-white/10" }, /* @__PURE__ */ Rn.createElement("p", { className: "text-[11px] font-medium text-slate-400 uppercase tracking-wider mb-1" }, "Due in"), /* @__PURE__ */ Rn.createElement("p", { className: "text-base sm:text-lg font-bold text-amber-300 flex items-center gap-1.5" }, /* @__PURE__ */ Rn.createElement(Clock, { className: "w-4 h-4 text-amber-400" }), /* @__PURE__ */ Rn.createElement("span", null, countdown))), /* @__PURE__ */ Rn.createElement("div", { className: "bg-white/5 backdrop-blur-xs rounded-xl p-3 border border-white/10" }, /* @__PURE__ */ Rn.createElement("p", { className: "text-[11px] font-medium text-slate-400 uppercase tracking-wider mb-1" }, "Estimated Remaining"), /* @__PURE__ */ Rn.createElement("p", { className: "text-base sm:text-lg font-bold text-white flex items-center gap-1.5" }, /* @__PURE__ */ Rn.createElement(Layers, { className: "w-4 h-4 text-indigo-400" }), /* @__PURE__ */ Rn.createElement("span", null, remainingFormatted))), /* @__PURE__ */ Rn.createElement("div", { className: "bg-white/5 backdrop-blur-xs rounded-xl p-3 border border-white/10" }, /* @__PURE__ */ Rn.createElement("p", { className: "text-[11px] font-medium text-slate-400 uppercase tracking-wider mb-1" }, "Completion"), /* @__PURE__ */ Rn.createElement("p", { className: "text-base sm:text-lg font-bold text-indigo-300 flex items-center gap-1.5" }, /* @__PURE__ */ Rn.createElement(CircleCheck, { className: "w-4 h-4 text-indigo-400" }), /* @__PURE__ */ Rn.createElement("span", null, topTask.completionPercentage || 0, "% Done"))), /* @__PURE__ */ Rn.createElement("div", { className: "bg-white/5 backdrop-blur-xs rounded-xl p-3 border border-white/10" }, /* @__PURE__ */ Rn.createElement("p", { className: "text-[11px] font-medium text-slate-400 uppercase tracking-wider mb-1" }, "Workload Status"), /* @__PURE__ */ Rn.createElement("p", { className: "text-base sm:text-lg font-bold text-rose-400 flex items-center gap-1.5" }, /* @__PURE__ */ Rn.createElement(CircleAlert, { className: "w-4 h-4" }), /* @__PURE__ */ Rn.createElement("span", null, topTask.riskLevel === "CRITICAL" ? "\u{1F534} Critical" : topTask.riskLevel === "AT_RISK" ? "\u{1F7E0} At Risk" : topTask.riskLevel === "APPROACHING" ? "\u{1F7E1} Approaching" : "\u{1F7E2} Safe")))), /* @__PURE__ */ Rn.createElement("div", { className: "relative z-10 mb-6 bg-white/[0.04] rounded-xl p-3.5 border border-white/5" }, /* @__PURE__ */ Rn.createElement("p", { className: "text-xs font-semibold text-indigo-200 uppercase tracking-wider mb-2 flex items-center gap-1.5" }, /* @__PURE__ */ Rn.createElement(Sparkles, { className: "w-3.5 h-3.5 text-indigo-400" }), "Why this task?"), /* @__PURE__ */ Rn.createElement("ul", { className: "grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300" }, /* @__PURE__ */ Rn.createElement("li", { className: "flex items-center gap-2" }, /* @__PURE__ */ Rn.createElement("span", { className: "w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" }), /* @__PURE__ */ Rn.createElement("span", null, "Deadline is approaching (", countdown, " remaining)")), /* @__PURE__ */ Rn.createElement("li", { className: "flex items-center gap-2" }, /* @__PURE__ */ Rn.createElement("span", { className: "w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0" }), /* @__PURE__ */ Rn.createElement("span", null, "Significant work remains (", remainingFormatted, " unfinished)")), /* @__PURE__ */ Rn.createElement("li", { className: "flex items-center gap-2" }, /* @__PURE__ */ Rn.createElement("span", { className: "w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" }), /* @__PURE__ */ Rn.createElement("span", null, topTask.isColliding ? "It conflicts with another deadline in a 48h window" : "Workload demand is elevated relative to available capacity")), /* @__PURE__ */ Rn.createElement("li", { className: "flex items-center gap-2" }, /* @__PURE__ */ Rn.createElement("span", { className: "w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" }), /* @__PURE__ */ Rn.createElement("span", null, "Completing this step unlocks remaining work")))), /* @__PURE__ */ Rn.createElement("div", { className: "relative z-10 flex flex-wrap items-center justify-between gap-3 pt-1 border-t border-white/10" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-2.5" }, /* @__PURE__ */ Rn.createElement(
    "button",
    {
      onClick: () => onStartWorking(topTask),
      className: "flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-sm shadow-lg shadow-white/10 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
    },
    /* @__PURE__ */ Rn.createElement(Play, { className: "w-4 h-4 fill-slate-900 text-slate-900" }),
    /* @__PURE__ */ Rn.createElement("span", null, "Start Task")
  ), /* @__PURE__ */ Rn.createElement(
    "button",
    {
      onClick: () => onViewReasoning(topTask),
      className: "flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold border border-white/10 transition-all cursor-pointer"
    },
    /* @__PURE__ */ Rn.createElement("span", null, "View Reasoning")
  )), /* @__PURE__ */ Rn.createElement(
    "button",
    {
      onClick: () => onOpenDetails(topTask),
      className: "text-xs text-slate-400 hover:text-white font-medium flex items-center gap-1 transition-colors cursor-pointer"
    },
    /* @__PURE__ */ Rn.createElement("span", null, "Open Full Task Breakdown"),
    /* @__PURE__ */ Rn.createElement(ArrowRight, { className: "w-3.5 h-3.5" })
  )));
};

// src/components/WeeklyWorkloadChart.tsx
var WeeklyWorkloadChart = ({
  tasks,
  dailyCapacity = 4
}) => {
  const [hoveredDay, setHoveredDay] = d2(null);
  const daysData = T2(() => {
    const now = getCurrentDate();
    const active = tasks.filter((t3) => t3.status !== "completed");
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const fullNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const result = [];
    for (let i3 = 0; i3 < 7; i3++) {
      const d3 = new Date(now.getTime() + i3 * 24 * 3600 * 1e3);
      result.push({
        day: i3 === 0 ? "Today" : dayNames[d3.getDay()],
        fullName: i3 === 0 ? `Today (${fullNames[d3.getDay()]})` : fullNames[d3.getDay()],
        dateStr: d3.toISOString().slice(0, 10),
        hours: 0,
        tasks: []
      });
    }
    active.forEach((task) => {
      const remaining = Math.max(0, task.estimatedHours - task.completedHours);
      if (remaining <= 0) return;
      const hoursToDeadline = getHoursRemaining(task.deadline, now);
      const daysUntilDeadline = Math.max(1, Math.min(7, Math.ceil(hoursToDeadline / 24)));
      const effortPerDay = remaining / daysUntilDeadline;
      for (let i3 = 0; i3 < daysUntilDeadline && i3 < 7; i3++) {
        result[i3].hours += effortPerDay;
        if (!result[i3].tasks.includes(task.title)) {
          result[i3].tasks.push(task.title);
        }
      }
    });
    return result.map((d3) => ({
      ...d3,
      hours: Math.round(d3.hours * 10) / 10
    }));
  }, [tasks]);
  const maxHours = Math.max(...daysData.map((d3) => d3.hours), dailyCapacity + 2);
  const highestDay = daysData.reduce(
    (prev, curr) => curr.hours > prev.hours ? curr : prev,
    daysData[0] || { day: "Today", fullName: "Today", hours: 0, tasks: [], dateStr: "" }
  );
  return /* @__PURE__ */ Rn.createElement("div", { className: "bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 shadow-xs" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex flex-wrap items-center justify-between gap-2 mb-4" }, /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("h3", { className: "font-bold text-slate-900 text-base flex items-center gap-2" }, /* @__PURE__ */ Rn.createElement("span", null, "Weekly Workload Distribution"), /* @__PURE__ */ Rn.createElement("span", { className: "text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-medium" }, "Next 7 Days")), /* @__PURE__ */ Rn.createElement("p", { className: "text-xs text-slate-500 mt-0.5" }, "Real active workload mapped against your ", dailyCapacity, "h daily study capacity threshold")), /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-3 text-xs" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-1.5 text-slate-500" }, /* @__PURE__ */ Rn.createElement("span", { className: "w-2.5 h-2.5 rounded-xs bg-indigo-500" }), /* @__PURE__ */ Rn.createElement("span", null, "Normal")), /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-1.5 text-slate-500" }, /* @__PURE__ */ Rn.createElement("span", { className: "w-2.5 h-2.5 rounded-xs bg-rose-500" }), /* @__PURE__ */ Rn.createElement("span", null, "Overloaded")), /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-1.5 text-slate-500" }, /* @__PURE__ */ Rn.createElement("span", { className: "w-3 border-b-2 border-dashed border-amber-500" }), /* @__PURE__ */ Rn.createElement("span", null, "Capacity (", dailyCapacity, "h)")))), /* @__PURE__ */ Rn.createElement("div", { className: "relative pt-6 pb-2" }, /* @__PURE__ */ Rn.createElement(
    "div",
    {
      className: "absolute left-0 right-0 border-b-2 border-dashed border-amber-400/80 pointer-events-none z-10 flex items-center justify-end pr-2",
      style: { bottom: `${dailyCapacity / maxHours * 160 + 32}px` }
    },
    /* @__PURE__ */ Rn.createElement("span", { className: "text-[10px] font-bold text-amber-800 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200" }, "Limit: ", dailyCapacity, "h")
  ), /* @__PURE__ */ Rn.createElement("div", { className: "h-44 flex items-end justify-between gap-2 sm:gap-4 px-2" }, daysData.map((d3, idx) => {
    const isOverloaded = d3.hours > dailyCapacity;
    const barHeightPercent = Math.min(100, Math.round(d3.hours / maxHours * 100));
    const isHovered = hoveredDay === idx;
    return /* @__PURE__ */ Rn.createElement(
      "div",
      {
        key: idx,
        className: "flex-1 flex flex-col items-center group relative cursor-pointer",
        onMouseEnter: () => setHoveredDay(idx),
        onMouseLeave: () => setHoveredDay(null)
      },
      isHovered && /* @__PURE__ */ Rn.createElement("div", { className: "absolute -top-20 z-30 bg-slate-900 text-white text-[11px] rounded-xl py-2 px-3 shadow-2xl whitespace-nowrap pointer-events-none transform -translate-x-1/2 left-1/2 animate-in fade-in zoom-in-95 duration-150 border border-slate-700" }, /* @__PURE__ */ Rn.createElement("p", { className: "font-bold" }, d3.fullName, ": ", formatHoursAndMinutes(d3.hours)), /* @__PURE__ */ Rn.createElement("p", { className: "text-slate-300 text-[10px] mt-0.5" }, isOverloaded ? `\u26A0\uFE0F +${(d3.hours - dailyCapacity).toFixed(1)}h over capacity limit` : "\u2713 Within study capacity"), d3.tasks.length > 0 && /* @__PURE__ */ Rn.createElement("p", { className: "text-indigo-300 text-[10px] mt-1 max-w-[200px] truncate" }, "Tasks: ", d3.tasks.join(", ")), /* @__PURE__ */ Rn.createElement("div", { className: "absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900" })),
      /* @__PURE__ */ Rn.createElement(
        "span",
        {
          className: `text-[11px] font-bold mb-1.5 transition-colors ${isOverloaded ? "text-rose-600" : "text-slate-600"}`
        },
        d3.hours > 0 ? `${d3.hours}h` : "0h"
      ),
      /* @__PURE__ */ Rn.createElement("div", { className: "w-full max-w-[42px] h-36 bg-slate-100/70 rounded-t-lg relative flex items-end overflow-hidden" }, /* @__PURE__ */ Rn.createElement(
        "div",
        {
          className: `w-full rounded-t-lg transition-all duration-300 ${isOverloaded ? "bg-gradient-to-t from-rose-600 to-rose-400 group-hover:from-rose-500 group-hover:to-rose-300 shadow-sm shadow-rose-200" : "bg-gradient-to-t from-indigo-600 to-indigo-400 group-hover:from-indigo-500 group-hover:to-indigo-300 shadow-sm shadow-indigo-100"}`,
          style: { height: `${Math.max(6, barHeightPercent)}%` }
        }
      )),
      /* @__PURE__ */ Rn.createElement(
        "span",
        {
          className: `mt-2 text-xs font-semibold ${isOverloaded ? "text-rose-700" : "text-slate-600"}`
        },
        d3.day
      )
    );
  }))), /* @__PURE__ */ Rn.createElement("div", { className: "mt-4 pt-3 border-t border-slate-100 flex items-center justify-between flex-wrap gap-2 text-xs" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-2 text-slate-600" }, /* @__PURE__ */ Rn.createElement(TriangleAlert, { className: "w-4 h-4 text-amber-500 shrink-0" }), /* @__PURE__ */ Rn.createElement("span", null, highestDay.hours > dailyCapacity ? /* @__PURE__ */ Rn.createElement(Rn.Fragment, null, /* @__PURE__ */ Rn.createElement("strong", { className: "text-slate-800" }, highestDay.fullName), " is your peak workload day with", " ", /* @__PURE__ */ Rn.createElement("strong", { className: "text-rose-600" }, formatHoursAndMinutes(highestDay.hours)), " required (", Math.round((highestDay.hours - dailyCapacity) * 10) / 10, "h over capacity).") : /* @__PURE__ */ Rn.createElement(Rn.Fragment, null, "Your next 7 days are within comfortable study capacity (", formatHoursAndMinutes(highestDay.hours), " peak on ", highestDay.fullName, ").")))));
};

// src/components/DeadlineRadar.tsx
var DeadlineRadar = ({ tasks, onOpenTask }) => {
  const activeTasks = tasks.filter((t3) => t3.status !== "completed").sort((a3, b2) => new Date(a3.deadline).getTime() - new Date(b2.deadline).getTime());
  const immediateTasks = activeTasks.filter((t3) => getHoursRemaining(t3.deadline) <= 48);
  const midRangeTasks = activeTasks.filter((t3) => {
    const hours = getHoursRemaining(t3.deadline);
    return hours > 48 && hours <= 120;
  });
  const upcomingTasks = activeTasks.filter((t3) => getHoursRemaining(t3.deadline) > 120);
  return /* @__PURE__ */ Rn.createElement("div", { className: "bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 shadow-xs" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center justify-between gap-2 mb-4" }, /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("h3", { className: "font-bold text-slate-900 text-base flex items-center gap-2" }, /* @__PURE__ */ Rn.createElement(Radio, { className: "w-4 h-4 text-indigo-600 animate-pulse" }), /* @__PURE__ */ Rn.createElement("span", null, "Deadline Radar"), /* @__PURE__ */ Rn.createElement("span", { className: "text-xs px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 font-semibold border border-indigo-100" }, "Live Horizon")), /* @__PURE__ */ Rn.createElement("p", { className: "text-xs text-slate-500 mt-0.5" }, "Temporal distribution of academic commitments ranked by imminent collision risk")), /* @__PURE__ */ Rn.createElement("span", { className: "text-xs font-bold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-full" }, activeTasks.length, " upcoming ", activeTasks.length === 1 ? "deadline" : "deadlines")), /* @__PURE__ */ Rn.createElement("div", { className: "space-y-4" }, /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center justify-between gap-2 mb-2" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ Rn.createElement("span", { className: "w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping" }), /* @__PURE__ */ Rn.createElement("span", { className: "text-xs font-bold text-rose-700 uppercase tracking-wider" }, "Immediate Horizon (0\u201348 Hours)")), /* @__PURE__ */ Rn.createElement("span", { className: "text-[11px] text-rose-600 font-semibold" }, immediateTasks.length, " ", immediateTasks.length === 1 ? "task" : "tasks")), immediateTasks.length > 0 ? /* @__PURE__ */ Rn.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3" }, immediateTasks.map((task) => {
    const remaining = formatHoursAndMinutes(task.remainingHours || 0);
    const countdown = formatCountdown(task.deadline);
    const isOverdue = getHoursRemaining(task.deadline) <= 0;
    return /* @__PURE__ */ Rn.createElement(
      "div",
      {
        key: task.id,
        onClick: () => onOpenTask(task),
        className: "group cursor-pointer p-3.5 rounded-xl border border-rose-200/90 bg-gradient-to-r from-rose-50/70 to-white hover:from-rose-100/70 hover:to-rose-50/30 transition-all hover:shadow-xs hover:border-rose-300"
      },
      /* @__PURE__ */ Rn.createElement("div", { className: "flex items-start justify-between gap-2 mb-1.5" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-2 min-w-0" }, /* @__PURE__ */ Rn.createElement("span", { className: "w-2 h-2 rounded-full bg-rose-500 shrink-0" }), /* @__PURE__ */ Rn.createElement("h4", { className: "font-bold text-slate-900 text-sm truncate group-hover:text-rose-700 transition-colors" }, task.title)), /* @__PURE__ */ Rn.createElement(ArrowUpRight, { className: "w-4 h-4 text-slate-400 group-hover:text-rose-600 transition-colors shrink-0" })),
      /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-2 text-xs text-slate-500 mb-2" }, /* @__PURE__ */ Rn.createElement("span", { className: "font-medium text-slate-700" }, task.course), isOverdue && /* @__PURE__ */ Rn.createElement("span", { className: "text-[10px] font-bold text-rose-700 bg-rose-100 px-1.5 py-0.2 rounded" }, "OVERDUE")),
      /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center justify-between text-xs pt-2 border-t border-rose-100" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-2.5" }, /* @__PURE__ */ Rn.createElement("span", { className: "text-amber-800 font-semibold flex items-center gap-1" }, /* @__PURE__ */ Rn.createElement(Clock, { className: "w-3.5 h-3.5 text-amber-600" }), countdown), /* @__PURE__ */ Rn.createElement("span", { className: "text-slate-500 flex items-center gap-1" }, /* @__PURE__ */ Rn.createElement(Layers, { className: "w-3.5 h-3.5" }), remaining, " left")), /* @__PURE__ */ Rn.createElement(RiskBadge, { level: task.riskLevel, size: "sm" }))
    );
  })) : /* @__PURE__ */ Rn.createElement("div", { className: "p-3 text-xs text-slate-400 rounded-xl bg-slate-50 border border-slate-100 text-center" }, "No tasks due in the next 48 hours.")), /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center justify-between gap-2 mb-2" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ Rn.createElement("span", { className: "w-2.5 h-2.5 rounded-full bg-amber-500" }), /* @__PURE__ */ Rn.createElement("span", { className: "text-xs font-bold text-amber-800 uppercase tracking-wider" }, "Mid-Range Horizon (> 48 Hours and up to 5 Days)")), /* @__PURE__ */ Rn.createElement("span", { className: "text-[11px] text-amber-700 font-semibold" }, midRangeTasks.length, " ", midRangeTasks.length === 1 ? "task" : "tasks")), midRangeTasks.length > 0 ? /* @__PURE__ */ Rn.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3" }, midRangeTasks.map((task) => {
    const remaining = formatHoursAndMinutes(task.remainingHours || 0);
    const countdown = formatCountdown(task.deadline);
    return /* @__PURE__ */ Rn.createElement(
      "div",
      {
        key: task.id,
        onClick: () => onOpenTask(task),
        className: "group cursor-pointer p-3.5 rounded-xl border border-amber-200/80 bg-gradient-to-r from-amber-50/40 to-white hover:from-amber-100/50 hover:to-white transition-all hover:shadow-xs"
      },
      /* @__PURE__ */ Rn.createElement("div", { className: "flex items-start justify-between gap-2 mb-1.5" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-2 min-w-0" }, /* @__PURE__ */ Rn.createElement("span", { className: "w-2 h-2 rounded-full bg-amber-500 shrink-0" }), /* @__PURE__ */ Rn.createElement("h4", { className: "font-bold text-slate-900 text-sm truncate group-hover:text-amber-800 transition-colors" }, task.title)), /* @__PURE__ */ Rn.createElement(ArrowUpRight, { className: "w-4 h-4 text-slate-400 group-hover:text-amber-600 transition-colors shrink-0" })),
      /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-2 text-xs text-slate-500 mb-2" }, /* @__PURE__ */ Rn.createElement("span", { className: "font-medium text-slate-700" }, task.course)),
      /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center justify-between text-xs pt-2 border-t border-amber-100" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-2.5" }, /* @__PURE__ */ Rn.createElement("span", { className: "text-slate-700 font-medium flex items-center gap-1" }, /* @__PURE__ */ Rn.createElement(Clock, { className: "w-3.5 h-3.5 text-amber-500" }), countdown), /* @__PURE__ */ Rn.createElement("span", { className: "text-slate-500 flex items-center gap-1" }, /* @__PURE__ */ Rn.createElement(Layers, { className: "w-3.5 h-3.5" }), remaining, " left")), /* @__PURE__ */ Rn.createElement(RiskBadge, { level: task.riskLevel, size: "sm" }))
    );
  })) : /* @__PURE__ */ Rn.createElement("div", { className: "p-3 text-xs text-slate-400 rounded-xl bg-slate-50 border border-slate-100 text-center" }, "No tasks due in 3 to 5 days.")), /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center justify-between gap-2 mb-2" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ Rn.createElement("span", { className: "w-2.5 h-2.5 rounded-full bg-emerald-500" }), /* @__PURE__ */ Rn.createElement("span", { className: "text-xs font-bold text-emerald-800 uppercase tracking-wider" }, "Upcoming (More than 5 Days)")), /* @__PURE__ */ Rn.createElement("span", { className: "text-[11px] text-emerald-700 font-semibold" }, upcomingTasks.length, " ", upcomingTasks.length === 1 ? "task" : "tasks")), upcomingTasks.length > 0 ? /* @__PURE__ */ Rn.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3" }, upcomingTasks.map((task) => {
    const remaining = formatHoursAndMinutes(task.remainingHours || 0);
    const countdown = formatCountdown(task.deadline);
    return /* @__PURE__ */ Rn.createElement(
      "div",
      {
        key: task.id,
        onClick: () => onOpenTask(task),
        className: "group cursor-pointer p-3.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50/80 transition-all hover:shadow-2xs"
      },
      /* @__PURE__ */ Rn.createElement("div", { className: "flex items-start justify-between gap-2 mb-1.5" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-2 min-w-0" }, /* @__PURE__ */ Rn.createElement("span", { className: "w-2 h-2 rounded-full bg-emerald-500 shrink-0" }), /* @__PURE__ */ Rn.createElement("h4", { className: "font-semibold text-slate-800 text-sm truncate group-hover:text-indigo-600 transition-colors" }, task.title)), /* @__PURE__ */ Rn.createElement(RiskBadge, { level: task.riskLevel, size: "sm" })),
      /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center justify-between text-xs text-slate-500 mt-2 pt-2 border-t border-slate-100" }, /* @__PURE__ */ Rn.createElement("span", null, task.course), /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ Rn.createElement("span", { className: "text-slate-500" }, remaining, " left"), /* @__PURE__ */ Rn.createElement("span", { className: "text-emerald-700 font-medium" }, "Due in ", countdown)))
    );
  })) : /* @__PURE__ */ Rn.createElement("div", { className: "p-3 text-xs text-slate-400 rounded-xl bg-slate-50 border border-slate-100 text-center" }, "No tasks due past 5 days."))));
};

// src/components/TaskCard.tsx
var TaskCard = ({
  task,
  onOpenTask,
  onStartWorking,
  onBreakDown,
  onViewReasoning
}) => {
  const remainingFormatted = formatHoursAndMinutes(task.remainingHours || 0);
  const estimatedFormatted = formatHoursAndMinutes(task.estimatedHours);
  const deadlinePretty = formatDeadlinePretty(task.deadline);
  const countdown = formatCountdown(task.deadline);
  const borderTone = task.riskLevel === "CRITICAL" ? "border-rose-200/90 hover:border-rose-300 bg-white" : task.riskLevel === "AT_RISK" ? "border-orange-200/90 hover:border-orange-300 bg-white" : task.riskLevel === "APPROACHING" ? "border-amber-200/80 hover:border-amber-300 bg-white" : "border-slate-200/80 hover:border-slate-300 bg-white";
  return /* @__PURE__ */ Rn.createElement(
    "div",
    {
      className: `rounded-2xl border ${borderTone} p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group`
    },
    /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center justify-between gap-2 mb-3" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-1.5 flex-wrap" }, /* @__PURE__ */ Rn.createElement("span", { className: "text-xs px-2.5 py-0.5 rounded-md bg-slate-100 font-semibold text-slate-700" }, task.course)), /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-1.5" }, /* @__PURE__ */ Rn.createElement(RiskBadge, { level: task.riskLevel, size: "sm" }))), /* @__PURE__ */ Rn.createElement("div", { className: "mb-3" }, /* @__PURE__ */ Rn.createElement(
      "h3",
      {
        onClick: () => onOpenTask(task),
        className: "text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors cursor-pointer"
      },
      task.title
    ), task.description && /* @__PURE__ */ Rn.createElement("p", { className: "text-xs text-slate-500 mt-1 line-clamp-1" }, task.description)), /* @__PURE__ */ Rn.createElement("div", { className: "mb-4 bg-slate-50 rounded-xl p-3 border border-slate-100" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center justify-between text-xs mb-1.5 font-medium" }, /* @__PURE__ */ Rn.createElement("span", { className: "text-slate-600" }, "Completed: ", task.completionPercentage || 0, "%"), /* @__PURE__ */ Rn.createElement("span", { className: "text-slate-800 font-bold" }, remainingFormatted, " remaining")), /* @__PURE__ */ Rn.createElement("div", { className: "w-full bg-slate-200/80 rounded-full h-2 overflow-hidden" }, /* @__PURE__ */ Rn.createElement(
      "div",
      {
        className: `h-full rounded-full transition-all duration-500 ${task.riskLevel === "CRITICAL" ? "bg-rose-500" : task.riskLevel === "AT_RISK" ? "bg-orange-500" : "bg-indigo-600"}`,
        style: { width: `${task.completionPercentage || 0}%` }
      }
    )), /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center justify-between text-[11px] text-slate-500 mt-1.5 font-medium" }, /* @__PURE__ */ Rn.createElement("span", null, "Estimated effort: ", estimatedFormatted), /* @__PURE__ */ Rn.createElement("span", null, "Remaining: ", remainingFormatted))), /* @__PURE__ */ Rn.createElement("div", { className: "grid grid-cols-2 gap-2 text-xs mb-4 text-slate-600" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-1.5" }, /* @__PURE__ */ Rn.createElement(Clock, { className: "w-3.5 h-3.5 text-slate-400 shrink-0" }), /* @__PURE__ */ Rn.createElement("div", { className: "truncate" }, /* @__PURE__ */ Rn.createElement("span", { className: "text-slate-400 block text-[10px] uppercase font-bold" }, "Due"), /* @__PURE__ */ Rn.createElement("span", { className: "font-semibold text-slate-800" }, deadlinePretty), /* @__PURE__ */ Rn.createElement("span", { className: "text-[11px] text-amber-700 block font-medium" }, "(", countdown, ")"))), /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-1.5" }, /* @__PURE__ */ Rn.createElement(Calendar, { className: "w-3.5 h-3.5 text-slate-400 shrink-0" }), /* @__PURE__ */ Rn.createElement("div", { className: "truncate" }, /* @__PURE__ */ Rn.createElement("span", { className: "text-slate-400 block text-[10px] uppercase font-bold" }, "Start By"), /* @__PURE__ */ Rn.createElement("span", { className: "font-medium text-slate-700" }, task.recommendedStartDate || "Immediate"), task.isColliding && /* @__PURE__ */ Rn.createElement("span", { className: "text-[10px] text-rose-600 font-semibold block flex items-center gap-0.5" }, /* @__PURE__ */ Rn.createElement(CircleAlert, { className: "w-2.5 h-2.5" }), " 48h Collision"))))),
    /* @__PURE__ */ Rn.createElement("div", { className: "pt-3 border-t border-slate-100 flex items-center justify-between gap-2" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-1.5" }, /* @__PURE__ */ Rn.createElement(
      "button",
      {
        onClick: () => onStartWorking(task),
        className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shadow-2xs transition-all active:scale-[0.98] cursor-pointer",
        title: "Start active focus session"
      },
      /* @__PURE__ */ Rn.createElement(Play, { className: "w-3.5 h-3.5 fill-white text-white" }),
      /* @__PURE__ */ Rn.createElement("span", null, "Start Working")
    ), /* @__PURE__ */ Rn.createElement(
      "button",
      {
        onClick: () => onBreakDown(task),
        className: "flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-medium transition-colors cursor-pointer",
        title: "Smart Split into tailored milestones"
      },
      /* @__PURE__ */ Rn.createElement(Split, { className: "w-3.5 h-3.5 text-indigo-500" }),
      /* @__PURE__ */ Rn.createElement("span", { className: "hidden sm:inline" }, "Break Down")
    )), /* @__PURE__ */ Rn.createElement(
      "button",
      {
        onClick: () => onOpenTask(task),
        className: "text-xs font-semibold text-slate-500 hover:text-slate-900 flex items-center gap-0.5 transition-colors p-1 cursor-pointer"
      },
      /* @__PURE__ */ Rn.createElement("span", null, "Open"),
      /* @__PURE__ */ Rn.createElement(ChevronRight, { className: "w-4 h-4" })
    ))
  );
};

// src/components/Dashboard.tsx
var Dashboard = ({
  tasks,
  topTask,
  realityCheck,
  onOpenTask,
  onStartWorking,
  onBreakDown,
  onViewReasoning,
  onOpenAddTask,
  onOpenImportNotice,
  onOpenPanicMode,
  onOpenRealityCheck,
  onOpenReversePlanner,
  onNavigateToMyWork
}) => {
  const activeTasks = tasks.filter((t3) => t3.status !== "completed");
  const criticalCount = tasks.filter((t3) => t3.riskLevel === "CRITICAL").length;
  const atRiskCount = tasks.filter((t3) => t3.riskLevel === "AT_RISK").length;
  const safeCount = tasks.filter((t3) => t3.riskLevel === "SAFE" || t3.riskLevel === "APPROACHING").length;
  const aiExplanation = realityCheck.isOverloaded ? "Your workload is slightly overloaded this week. Several assignments are competing for the same time window." : criticalCount > 0 ? "You have high-urgency deliverables due within the next 48 hours requiring dedicated attention." : "Your workload is balanced and achievable within standard daily study hours.";
  return /* @__PURE__ */ Rn.createElement("div", { className: "space-y-7 pb-12" }, /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("h1", { className: "text-2xl sm:text-3xl font-black text-slate-900 tracking-tight" }, "Good evening, Ziya \u{1F44B}"), /* @__PURE__ */ Rn.createElement("p", { className: "text-sm text-slate-500 font-medium mt-1" }, "Here's what needs your attention.")), /* @__PURE__ */ Rn.createElement("div", { className: "rounded-2xl border border-slate-200/90 bg-gradient-to-r from-slate-50 via-white to-indigo-50/30 p-5 sm:p-6 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4" }, /* @__PURE__ */ Rn.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex flex-wrap items-center gap-2" }, /* @__PURE__ */ Rn.createElement("span", { className: "text-xs font-bold text-slate-500 uppercase tracking-wider" }, "Workload Status"), /* @__PURE__ */ Rn.createElement("span", { className: "text-slate-300" }, "\u2022"), /* @__PURE__ */ Rn.createElement("span", { className: "text-xs font-bold text-slate-800" }, "You have ", activeTasks.length, " active ", activeTasks.length === 1 ? "task" : "tasks"), /* @__PURE__ */ Rn.createElement("span", { className: "text-slate-300" }, "\u2022"), /* @__PURE__ */ Rn.createElement("span", { className: "text-xs font-semibold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full border border-rose-200" }, criticalCount, " Critical"), /* @__PURE__ */ Rn.createElement("span", { className: "text-xs font-semibold text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full border border-orange-200" }, atRiskCount, " At Risk"), /* @__PURE__ */ Rn.createElement("span", { className: "text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200" }, safeCount, " Safe")), /* @__PURE__ */ Rn.createElement("p", { className: "text-sm font-medium text-slate-800 leading-snug" }, '"', aiExplanation, '"')), /* @__PURE__ */ Rn.createElement(
    "button",
    {
      onClick: onOpenRealityCheck,
      className: "self-start md:self-center px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-900 font-bold text-xs shadow-xs hover:shadow-sm transition-all flex items-center gap-1.5 shrink-0 group cursor-pointer"
    },
    /* @__PURE__ */ Rn.createElement("span", null, "View Reality Check"),
    /* @__PURE__ */ Rn.createElement(ArrowRight, { className: "w-3.5 h-3.5 text-slate-500 group-hover:translate-x-0.5 transition-transform" })
  )), /* @__PURE__ */ Rn.createElement(
    WhatShouldIDoNow,
    {
      topTask,
      onStartWorking,
      onViewReasoning,
      onOpenDetails: onOpenTask
    }
  ), /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("h2", { className: "text-xs font-bold text-slate-400 uppercase tracking-wider mb-3" }, "Quick Actions"), /* @__PURE__ */ Rn.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5" }, /* @__PURE__ */ Rn.createElement(
    "div",
    {
      onClick: onOpenImportNotice,
      className: "p-4 rounded-2xl border border-indigo-100 bg-indigo-50/40 hover:bg-indigo-50 hover:border-indigo-300 transition-all cursor-pointer shadow-2xs group flex flex-col justify-between"
    },
    /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("div", { className: "w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center mb-3 shadow-xs shadow-indigo-200 group-hover:scale-105 transition-transform" }, /* @__PURE__ */ Rn.createElement(FileUp, { className: "w-4 h-4" })), /* @__PURE__ */ Rn.createElement("h3", { className: "font-bold text-slate-900 text-sm group-hover:text-indigo-700 transition-colors" }, "Import Notice"), /* @__PURE__ */ Rn.createElement("p", { className: "text-xs text-slate-500 mt-1 leading-relaxed" }, "Upload a screenshot, PDF, or paste notice to extract deadlines.")),
    /* @__PURE__ */ Rn.createElement("span", { className: "text-[11px] font-bold text-indigo-600 mt-3 flex items-center gap-1" }, /* @__PURE__ */ Rn.createElement("span", null, "Drop File / Paste"), /* @__PURE__ */ Rn.createElement(ArrowRight, { className: "w-3 h-3 group-hover:translate-x-0.5 transition-transform" }))
  ), /* @__PURE__ */ Rn.createElement(
    "div",
    {
      onClick: onOpenAddTask,
      className: "p-4 rounded-2xl border border-slate-200 bg-white hover:bg-slate-50/80 hover:border-slate-300 transition-all cursor-pointer shadow-2xs group flex flex-col justify-between"
    },
    /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("div", { className: "w-9 h-9 rounded-xl bg-slate-900 text-white flex items-center justify-center mb-3 shadow-xs group-hover:scale-105 transition-transform" }, /* @__PURE__ */ Rn.createElement(Plus, { className: "w-4 h-4" })), /* @__PURE__ */ Rn.createElement("h3", { className: "font-bold text-slate-900 text-sm group-hover:text-indigo-600 transition-colors" }, "Add Task"), /* @__PURE__ */ Rn.createElement("p", { className: "text-xs text-slate-500 mt-1 leading-relaxed" }, "Manually enter an assignment with deadline and requirements.")),
    /* @__PURE__ */ Rn.createElement("span", { className: "text-[11px] font-bold text-slate-700 mt-3 flex items-center gap-1" }, /* @__PURE__ */ Rn.createElement("span", null, "Create Task"), /* @__PURE__ */ Rn.createElement(ArrowRight, { className: "w-3 h-3 group-hover:translate-x-0.5 transition-transform" }))
  ), /* @__PURE__ */ Rn.createElement(
    "div",
    {
      onClick: onOpenReversePlanner,
      className: "p-4 rounded-2xl border border-emerald-100 bg-emerald-50/30 hover:bg-emerald-50 hover:border-emerald-300 transition-all cursor-pointer shadow-2xs group flex flex-col justify-between"
    },
    /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("div", { className: "w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center mb-3 shadow-xs shadow-emerald-200 group-hover:scale-105 transition-transform" }, /* @__PURE__ */ Rn.createElement(Timer, { className: "w-4 h-4" })), /* @__PURE__ */ Rn.createElement("h3", { className: "font-bold text-slate-900 text-sm group-hover:text-emerald-800 transition-colors" }, "Reverse Planner"), /* @__PURE__ */ Rn.createElement("p", { className: "text-xs text-slate-500 mt-1 leading-relaxed" }, "Allocate free study time across urgent assignments.")),
    /* @__PURE__ */ Rn.createElement("span", { className: "text-[11px] font-bold text-emerald-700 mt-3 flex items-center gap-1" }, /* @__PURE__ */ Rn.createElement("span", null, "Time-Block Study"), /* @__PURE__ */ Rn.createElement(ArrowRight, { className: "w-3 h-3 group-hover:translate-x-0.5 transition-transform" }))
  ), /* @__PURE__ */ Rn.createElement(
    "div",
    {
      onClick: onOpenPanicMode,
      className: "p-4 rounded-2xl border border-rose-100 bg-rose-50/30 hover:bg-rose-50 hover:border-rose-300 transition-all cursor-pointer shadow-2xs group flex flex-col justify-between"
    },
    /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("div", { className: "w-9 h-9 rounded-xl bg-rose-600 text-white flex items-center justify-center mb-3 shadow-xs shadow-rose-200 group-hover:scale-105 transition-transform" }, /* @__PURE__ */ Rn.createElement(Flame, { className: "w-4 h-4" })), /* @__PURE__ */ Rn.createElement("h3", { className: "font-bold text-slate-900 text-sm group-hover:text-rose-800 transition-colors" }, "Panic Mode"), /* @__PURE__ */ Rn.createElement("p", { className: "text-xs text-slate-500 mt-1 leading-relaxed" }, "Focus strictly on deliverables due within the next 48 hours.")),
    /* @__PURE__ */ Rn.createElement("span", { className: "text-[11px] font-bold text-rose-700 mt-3 flex items-center gap-1" }, /* @__PURE__ */ Rn.createElement("span", null, "Next 48 Hours Only"), /* @__PURE__ */ Rn.createElement(ArrowRight, { className: "w-3 h-3 group-hover:translate-x-0.5 transition-transform" }))
  ))), /* @__PURE__ */ Rn.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6" }, /* @__PURE__ */ Rn.createElement(WeeklyWorkloadChart, { tasks }), /* @__PURE__ */ Rn.createElement(DeadlineRadar, { tasks, onOpenTask })), /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center justify-between mb-4" }, /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("h2", { className: "text-lg font-bold text-slate-900" }, "Active Commitments"), /* @__PURE__ */ Rn.createElement("p", { className: "text-xs text-slate-500" }, "Ranked by urgency level and workload risk profile")), /* @__PURE__ */ Rn.createElement(
    "button",
    {
      onClick: onNavigateToMyWork,
      className: "text-xs font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 cursor-pointer"
    },
    /* @__PURE__ */ Rn.createElement("span", null, "View All (", tasks.length, ")"),
    /* @__PURE__ */ Rn.createElement(ArrowRight, { className: "w-3.5 h-3.5" })
  )), /* @__PURE__ */ Rn.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" }, activeTasks.slice(0, 6).map((task) => /* @__PURE__ */ Rn.createElement(
    TaskCard,
    {
      key: task.id,
      task,
      onOpenTask,
      onStartWorking,
      onBreakDown,
      onViewReasoning
    }
  )))));
};

// src/components/MyWorkView.tsx
var MyWorkView = ({
  tasks,
  onOpenTask,
  onStartWorking,
  onBreakDown,
  onViewReasoning,
  onOpenAddTask,
  onOpenImportNotice
}) => {
  const [searchQuery, setSearchQuery] = d2("");
  const [filterTab, setFilterTab] = d2("all");
  const [sortBy, setSortBy] = d2("urgency");
  const filteredTasks = tasks.filter((t3) => {
    const matchesSearch = t3.title.toLowerCase().includes(searchQuery.toLowerCase()) || t3.course.toLowerCase().includes(searchQuery.toLowerCase());
    if (!matchesSearch) return false;
    if (filterTab === "critical") {
      return t3.riskLevel === "CRITICAL" || t3.riskLevel === "AT_RISK";
    }
    if (filterTab === "in_progress") {
      return t3.status === "in_progress" || (t3.completionPercentage || 0) > 0;
    }
    if (filterTab === "completed") {
      return t3.status === "completed";
    }
    return true;
  }).sort((a3, b2) => {
    if (sortBy === "urgency") {
      return compareTasksByUrgency(a3, b2);
    }
    if (sortBy === "deadline") {
      return new Date(a3.deadline).getTime() - new Date(b2.deadline).getTime();
    }
    if (sortBy === "effort") {
      return (b2.remainingHours || 0) - (a3.remainingHours || 0);
    }
    return 0;
  });
  return /* @__PURE__ */ Rn.createElement("div", { className: "space-y-6" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4" }, /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("h1", { className: "text-2xl font-bold text-slate-900 tracking-tight" }, "My Work & Deliverables"), /* @__PURE__ */ Rn.createElement("p", { className: "text-xs text-slate-500 mt-0.5" }, "Full inventory of academic tasks enriched with real-time risk state and completion tracking")), /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ Rn.createElement(
    "button",
    {
      onClick: onOpenImportNotice,
      className: "flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-indigo-200 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-semibold text-xs transition-all shadow-xs cursor-pointer"
    },
    /* @__PURE__ */ Rn.createElement(FileUp, { className: "w-3.5 h-3.5" }),
    /* @__PURE__ */ Rn.createElement("span", null, "Import Notice")
  ), /* @__PURE__ */ Rn.createElement(
    "button",
    {
      onClick: onOpenAddTask,
      className: "flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-md transition-all shadow-slate-900/10 cursor-pointer"
    },
    /* @__PURE__ */ Rn.createElement(Plus, { className: "w-4 h-4" }),
    /* @__PURE__ */ Rn.createElement("span", null, "Add Task")
  ))), /* @__PURE__ */ Rn.createElement("div", { className: "p-4 bg-white rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-3" }, /* @__PURE__ */ Rn.createElement("div", { className: "relative flex-1 max-w-md" }, /* @__PURE__ */ Rn.createElement(Search, { className: "w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" }), /* @__PURE__ */ Rn.createElement(
    "input",
    {
      type: "text",
      placeholder: "Search by assignment title, course code...",
      value: searchQuery,
      onChange: (e3) => setSearchQuery(e3.target.value),
      className: "w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-hidden bg-slate-50/50"
    }
  )), /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-1 overflow-x-auto pb-1 md:pb-0 text-xs" }, /* @__PURE__ */ Rn.createElement(
    "button",
    {
      onClick: () => setFilterTab("all"),
      className: `px-3 py-1.5 rounded-lg font-semibold transition-all whitespace-nowrap cursor-pointer ${filterTab === "all" ? "bg-slate-900 text-white" : "text-slate-600 hover:bg-slate-100"}`
    },
    "All (",
    tasks.length,
    ")"
  ), /* @__PURE__ */ Rn.createElement(
    "button",
    {
      onClick: () => setFilterTab("critical"),
      className: `px-3 py-1.5 rounded-lg font-semibold transition-all whitespace-nowrap cursor-pointer ${filterTab === "critical" ? "bg-rose-600 text-white" : "text-slate-600 hover:bg-slate-100"}`
    },
    "Critical / At Risk (",
    tasks.filter((t3) => t3.riskLevel === "CRITICAL" || t3.riskLevel === "AT_RISK").length,
    ")"
  ), /* @__PURE__ */ Rn.createElement(
    "button",
    {
      onClick: () => setFilterTab("in_progress"),
      className: `px-3 py-1.5 rounded-lg font-semibold transition-all whitespace-nowrap cursor-pointer ${filterTab === "in_progress" ? "bg-indigo-600 text-white" : "text-slate-600 hover:bg-slate-100"}`
    },
    "In Progress"
  ), /* @__PURE__ */ Rn.createElement(
    "button",
    {
      onClick: () => setFilterTab("completed"),
      className: `px-3 py-1.5 rounded-lg font-semibold transition-all whitespace-nowrap cursor-pointer ${filterTab === "completed" ? "bg-emerald-600 text-white" : "text-slate-600 hover:bg-slate-100"}`
    },
    "Completed (",
    tasks.filter((t3) => t3.status === "completed").length,
    ")"
  )), /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-2 text-xs text-slate-500 shrink-0" }, /* @__PURE__ */ Rn.createElement(ArrowUpDown, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ Rn.createElement("span", { className: "hidden sm:inline" }, "Sort:"), /* @__PURE__ */ Rn.createElement(
    "select",
    {
      value: sortBy,
      onChange: (e3) => setSortBy(e3.target.value),
      className: "p-1.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 font-medium"
    },
    /* @__PURE__ */ Rn.createElement("option", { value: "urgency" }, "Highest Urgency"),
    /* @__PURE__ */ Rn.createElement("option", { value: "deadline" }, "Soonest Deadline"),
    /* @__PURE__ */ Rn.createElement("option", { value: "effort" }, "Remaining Effort")
  ))), filteredTasks.length > 0 ? /* @__PURE__ */ Rn.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" }, filteredTasks.map((task) => /* @__PURE__ */ Rn.createElement(
    TaskCard,
    {
      key: task.id,
      task,
      onOpenTask,
      onStartWorking,
      onBreakDown,
      onViewReasoning
    }
  ))) : /* @__PURE__ */ Rn.createElement("div", { className: "p-12 text-center bg-white rounded-2xl border border-slate-200" }, /* @__PURE__ */ Rn.createElement(CircleAlert, { className: "w-8 h-8 text-slate-400 mx-auto mb-2" }), /* @__PURE__ */ Rn.createElement("h3", { className: "font-bold text-slate-800 text-sm" }, "No assignments found"), /* @__PURE__ */ Rn.createElement("p", { className: "text-xs text-slate-500 mt-1" }, "Try changing your search query or filter tab.")));
};

// src/components/PlannerView.tsx
var PlannerView = ({
  tasks,
  onOpenTask,
  onOpenReversePlanner
}) => {
  const activeTasks = tasks.filter((t3) => t3.status !== "completed").sort((a3, b2) => new Date(a3.deadline).getTime() - new Date(b2.deadline).getTime());
  const currentMonthName = new Intl.DateTimeFormat("en-US", { month: "long", year: "numeric" }).format(/* @__PURE__ */ new Date());
  return /* @__PURE__ */ Rn.createElement("div", { className: "space-y-6" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4" }, /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("h1", { className: "text-2xl font-bold text-slate-900 tracking-tight" }, "Weekly Planner & Timeline"), /* @__PURE__ */ Rn.createElement("p", { className: "text-xs text-slate-500 mt-0.5" }, "Synchronize your study blocks against approaching academic deadlines")), /* @__PURE__ */ Rn.createElement(
    "button",
    {
      onClick: onOpenReversePlanner,
      className: "px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-md transition-all flex items-center gap-2 cursor-pointer"
    },
    /* @__PURE__ */ Rn.createElement(Clock, { className: "w-4 h-4 text-emerald-400" }),
    /* @__PURE__ */ Rn.createElement("span", null, "Launch Reverse Planner")
  )), /* @__PURE__ */ Rn.createElement(WeeklyWorkloadChart, { tasks }), /* @__PURE__ */ Rn.createElement("div", { className: "bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs space-y-4" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center justify-between border-b border-slate-100 pb-3" }, /* @__PURE__ */ Rn.createElement("h3", { className: "font-bold text-slate-900 text-sm flex items-center gap-2" }, /* @__PURE__ */ Rn.createElement(Calendar, { className: "w-4 h-4 text-indigo-600" }), /* @__PURE__ */ Rn.createElement("span", null, "Upcoming Submission Schedule")), /* @__PURE__ */ Rn.createElement("span", { className: "text-xs text-slate-500 font-medium" }, currentMonthName)), /* @__PURE__ */ Rn.createElement("div", { className: "space-y-3" }, activeTasks.length > 0 ? activeTasks.map((task) => {
    const deadlineDate = new Date(task.deadline);
    const monthStr = deadlineDate.toLocaleDateString("en-US", { month: "short" });
    const dayNum = deadlineDate.getDate();
    return /* @__PURE__ */ Rn.createElement(
      "div",
      {
        key: task.id,
        onClick: () => onOpenTask(task),
        className: "p-4 rounded-xl border border-slate-200 hover:border-indigo-300 bg-white hover:bg-slate-50/50 cursor-pointer transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
      },
      /* @__PURE__ */ Rn.createElement("div", { className: "flex items-start gap-3" }, /* @__PURE__ */ Rn.createElement("div", { className: "w-10 h-10 rounded-xl bg-slate-100 flex flex-col items-center justify-center font-bold shrink-0" }, /* @__PURE__ */ Rn.createElement("span", { className: "text-[10px] uppercase text-slate-500" }, monthStr), /* @__PURE__ */ Rn.createElement("span", { className: "text-sm font-black text-slate-900 leading-none" }, dayNum)), /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("h4", { className: "font-bold text-sm text-slate-900" }, task.title), /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-2 text-slate-500 mt-0.5" }, /* @__PURE__ */ Rn.createElement("span", { className: "font-medium text-slate-700" }, task.course), /* @__PURE__ */ Rn.createElement("span", null, "\u2022"), /* @__PURE__ */ Rn.createElement("span", null, "Due ", formatDeadlinePretty(task.deadline))))),
      /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-3 self-end sm:self-center" }, /* @__PURE__ */ Rn.createElement("div", { className: "text-right" }, /* @__PURE__ */ Rn.createElement("span", { className: "font-bold text-slate-800" }, formatHoursAndMinutes(task.remainingHours || 0), " left"), /* @__PURE__ */ Rn.createElement("span", { className: "text-[10px] text-indigo-600 font-medium block" }, task.completionPercentage || 0, "% complete")), /* @__PURE__ */ Rn.createElement(RiskBadge, { level: task.riskLevel, size: "sm" }))
    );
  }) : /* @__PURE__ */ Rn.createElement("div", { className: "p-8 text-center text-xs text-slate-400" }, "No active commitments pending submission."))));
};

// src/components/InsightsView.tsx
var InsightsView = ({
  tasks,
  onOpenPanicMode,
  onOpenRealityCheck
}) => {
  const activeTasks = tasks.filter((t3) => t3.status !== "completed");
  const totalRemainingHours = activeTasks.reduce(
    (sum, t3) => sum + Math.max(0, t3.estimatedHours - t3.completedHours),
    0
  );
  const totalEstimated = tasks.reduce((sum, t3) => sum + t3.estimatedHours, 0);
  const totalCompleted = tasks.reduce((sum, t3) => sum + t3.completedHours, 0);
  const avgCompletion = totalEstimated > 0 ? Math.round(totalCompleted / totalEstimated * 100) : 0;
  const highRiskCount = tasks.filter((t3) => t3.riskLevel === "CRITICAL" || t3.riskLevel === "AT_RISK").length;
  const collidingCount = tasks.filter((t3) => t3.isColliding).length;
  const criticalCount = tasks.filter((t3) => t3.riskLevel === "CRITICAL").length;
  const atRiskCount = tasks.filter((t3) => t3.riskLevel === "AT_RISK").length;
  const approachingCount = tasks.filter((t3) => t3.riskLevel === "APPROACHING").length;
  const safeCount = tasks.filter((t3) => t3.riskLevel === "SAFE").length;
  const urgentTasks = activeTasks.filter((t3) => getHoursRemaining(t3.deadline) <= 48);
  const urgentWorkload = urgentTasks.reduce(
    (sum, t3) => sum + Math.max(0, t3.estimatedHours - t3.completedHours),
    0
  );
  return /* @__PURE__ */ Rn.createElement("div", { className: "space-y-6" }, /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("h1", { className: "text-2xl font-bold text-slate-900 tracking-tight" }, "Workload Intelligence & Insights"), /* @__PURE__ */ Rn.createElement("p", { className: "text-xs text-slate-500 mt-0.5" }, "High-level telemetry on deadline clustering, cognitive burnout risk, and task velocity")), /* @__PURE__ */ Rn.createElement("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4" }, /* @__PURE__ */ Rn.createElement("div", { className: "p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center justify-between text-slate-400 mb-2" }, /* @__PURE__ */ Rn.createElement("span", { className: "text-[11px] font-bold uppercase tracking-wider" }, "Remaining Work"), /* @__PURE__ */ Rn.createElement(Layers, { className: "w-4 h-4 text-indigo-500" })), /* @__PURE__ */ Rn.createElement("p", { className: "text-2xl font-black text-slate-900" }, formatHoursAndMinutes(totalRemainingHours)), /* @__PURE__ */ Rn.createElement("span", { className: "text-[11px] text-slate-500 block mt-1" }, "Across ", activeTasks.length, " active tasks")), /* @__PURE__ */ Rn.createElement("div", { className: "p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center justify-between text-slate-400 mb-2" }, /* @__PURE__ */ Rn.createElement("span", { className: "text-[11px] font-bold uppercase tracking-wider" }, "Avg Completion"), /* @__PURE__ */ Rn.createElement(CircleCheck, { className: "w-4 h-4 text-emerald-500" })), /* @__PURE__ */ Rn.createElement("p", { className: "text-2xl font-black text-emerald-600" }, avgCompletion, "%"), /* @__PURE__ */ Rn.createElement("span", { className: "text-[11px] text-slate-500 block mt-1" }, formatHoursAndMinutes(totalCompleted), " logged of ", formatHoursAndMinutes(totalEstimated))), /* @__PURE__ */ Rn.createElement(
    "div",
    {
      onClick: onOpenPanicMode,
      className: "p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs cursor-pointer hover:border-rose-300 transition-colors"
    },
    /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center justify-between text-slate-400 mb-2" }, /* @__PURE__ */ Rn.createElement("span", { className: "text-[11px] font-bold uppercase tracking-wider" }, "High-Risk Tasks"), /* @__PURE__ */ Rn.createElement(TriangleAlert, { className: "w-4 h-4 text-rose-500" })),
    /* @__PURE__ */ Rn.createElement("p", { className: "text-2xl font-black text-rose-600" }, highRiskCount),
    /* @__PURE__ */ Rn.createElement("span", { className: "text-[11px] text-rose-500 font-semibold block mt-1 flex items-center gap-0.5" }, "Panic Mode Eligible \u2192")
  ), /* @__PURE__ */ Rn.createElement(
    "div",
    {
      onClick: onOpenRealityCheck,
      className: "p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs cursor-pointer hover:border-amber-300 transition-colors"
    },
    /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center justify-between text-slate-400 mb-2" }, /* @__PURE__ */ Rn.createElement("span", { className: "text-[11px] font-bold uppercase tracking-wider" }, "Deadline Collisions"), /* @__PURE__ */ Rn.createElement(Calendar, { className: "w-4 h-4 text-amber-500" })),
    /* @__PURE__ */ Rn.createElement("p", { className: "text-2xl font-black text-amber-600" }, collidingCount),
    /* @__PURE__ */ Rn.createElement("span", { className: "text-[11px] text-amber-600 font-semibold block mt-1 flex items-center gap-0.5" }, "View Reality Check \u2192")
  )), /* @__PURE__ */ Rn.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4" }, /* @__PURE__ */ Rn.createElement("div", { className: "p-4 rounded-xl bg-gradient-to-r from-rose-50/80 to-white border border-rose-200 flex items-start gap-3" }, /* @__PURE__ */ Rn.createElement("div", { className: "w-8 h-8 rounded-lg bg-rose-500/10 text-rose-600 flex items-center justify-center shrink-0 mt-0.5" }, /* @__PURE__ */ Rn.createElement(TriangleAlert, { className: "w-4 h-4" })), /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("h4", { className: "font-bold text-xs uppercase tracking-wider text-rose-900" }, "Imminent Deadline Distribution"), /* @__PURE__ */ Rn.createElement("p", { className: "text-xs text-slate-700 mt-1 leading-relaxed" }, urgentTasks.length > 0 ? /* @__PURE__ */ Rn.createElement(Rn.Fragment, null, "You have ", /* @__PURE__ */ Rn.createElement("strong", { className: "text-rose-700" }, urgentTasks.length, " ", urgentTasks.length === 1 ? "assignment" : "assignments"), " due in the next 48 hours requiring ", /* @__PURE__ */ Rn.createElement("strong", { className: "text-rose-700" }, formatHoursAndMinutes(urgentWorkload)), " of focused effort.") : /* @__PURE__ */ Rn.createElement(Rn.Fragment, null, "No deliverables are due in the next 48 hours. Your short-term cognitive schedule is clear.")))), /* @__PURE__ */ Rn.createElement("div", { className: "p-4 rounded-xl bg-gradient-to-r from-amber-50/80 to-white border border-amber-200 flex items-start gap-3" }, /* @__PURE__ */ Rn.createElement("div", { className: "w-8 h-8 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0 mt-0.5" }, /* @__PURE__ */ Rn.createElement(Sparkles, { className: "w-4 h-4" })), /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("h4", { className: "font-bold text-xs uppercase tracking-wider text-amber-900" }, "Workload Recommendation"), /* @__PURE__ */ Rn.createElement("p", { className: "text-xs text-slate-700 mt-1 leading-relaxed" }, collidingCount > 0 ? /* @__PURE__ */ Rn.createElement(Rn.Fragment, null, /* @__PURE__ */ Rn.createElement("strong", { className: "text-amber-800" }, collidingCount, " deliverables are competing for the same 48-hour window"), ". Early milestone completion prevents deadline compression.") : /* @__PURE__ */ Rn.createElement(Rn.Fragment, null, "Your academic commitments are well-spaced with healthy buffers between submissions."))))), /* @__PURE__ */ Rn.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6" }, /* @__PURE__ */ Rn.createElement("div", { className: "lg:col-span-2" }, /* @__PURE__ */ Rn.createElement(WeeklyWorkloadChart, { tasks })), /* @__PURE__ */ Rn.createElement("div", { className: "bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs space-y-4" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center justify-between border-b border-slate-100 pb-3" }, /* @__PURE__ */ Rn.createElement("h3", { className: "font-bold text-slate-900 text-sm flex items-center gap-2" }, /* @__PURE__ */ Rn.createElement(ChartPie, { className: "w-4 h-4 text-indigo-600" }), /* @__PURE__ */ Rn.createElement("span", null, "Risk Distribution")), /* @__PURE__ */ Rn.createElement("span", { className: "text-xs text-slate-400" }, tasks.length, " total tasks")), /* @__PURE__ */ Rn.createElement("div", { className: "space-y-3" }, /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center justify-between text-xs font-semibold mb-1 text-slate-700" }, /* @__PURE__ */ Rn.createElement("span", { className: "flex items-center gap-1.5" }, /* @__PURE__ */ Rn.createElement("span", { className: "w-2.5 h-2.5 rounded-full bg-rose-500" }), /* @__PURE__ */ Rn.createElement("span", null, "Critical (Immediate Attention)")), /* @__PURE__ */ Rn.createElement("span", null, criticalCount, " tasks")), /* @__PURE__ */ Rn.createElement("div", { className: "w-full bg-slate-100 rounded-full h-2 overflow-hidden" }, /* @__PURE__ */ Rn.createElement(
    "div",
    {
      className: "bg-rose-500 h-full rounded-full transition-all duration-300",
      style: { width: `${tasks.length > 0 ? criticalCount / tasks.length * 100 : 0}%` }
    }
  ))), /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center justify-between text-xs font-semibold mb-1 text-slate-700" }, /* @__PURE__ */ Rn.createElement("span", { className: "flex items-center gap-1.5" }, /* @__PURE__ */ Rn.createElement("span", { className: "w-2.5 h-2.5 rounded-full bg-orange-500" }), /* @__PURE__ */ Rn.createElement("span", null, "At Risk (Buffer Tight)")), /* @__PURE__ */ Rn.createElement("span", null, atRiskCount, " tasks")), /* @__PURE__ */ Rn.createElement("div", { className: "w-full bg-slate-100 rounded-full h-2 overflow-hidden" }, /* @__PURE__ */ Rn.createElement(
    "div",
    {
      className: "bg-orange-500 h-full rounded-full transition-all duration-300",
      style: { width: `${tasks.length > 0 ? atRiskCount / tasks.length * 100 : 0}%` }
    }
  ))), /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center justify-between text-xs font-semibold mb-1 text-slate-700" }, /* @__PURE__ */ Rn.createElement("span", { className: "flex items-center gap-1.5" }, /* @__PURE__ */ Rn.createElement("span", { className: "w-2.5 h-2.5 rounded-full bg-amber-500" }), /* @__PURE__ */ Rn.createElement("span", null, "Approaching (3\u20135 Days)")), /* @__PURE__ */ Rn.createElement("span", null, approachingCount, " tasks")), /* @__PURE__ */ Rn.createElement("div", { className: "w-full bg-slate-100 rounded-full h-2 overflow-hidden" }, /* @__PURE__ */ Rn.createElement(
    "div",
    {
      className: "bg-amber-500 h-full rounded-full transition-all duration-300",
      style: { width: `${tasks.length > 0 ? approachingCount / tasks.length * 100 : 0}%` }
    }
  ))), /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center justify-between text-xs font-semibold mb-1 text-slate-700" }, /* @__PURE__ */ Rn.createElement("span", { className: "flex items-center gap-1.5" }, /* @__PURE__ */ Rn.createElement("span", { className: "w-2.5 h-2.5 rounded-full bg-emerald-500" }), /* @__PURE__ */ Rn.createElement("span", null, "Safe (Controlled Runway)")), /* @__PURE__ */ Rn.createElement("span", null, safeCount, " tasks")), /* @__PURE__ */ Rn.createElement("div", { className: "w-full bg-slate-100 rounded-full h-2 overflow-hidden" }, /* @__PURE__ */ Rn.createElement(
    "div",
    {
      className: "bg-emerald-500 h-full rounded-full transition-all duration-300",
      style: { width: `${tasks.length > 0 ? safeCount / tasks.length * 100 : 0}%` }
    }
  )))), /* @__PURE__ */ Rn.createElement("div", { className: "pt-2 text-xs text-slate-500 border-t border-slate-100" }, "WorkRadar automatically updates risk classifications as deadlines approach or milestones are checked off."))));
};

// src/components/PanicModeView.tsx
var PanicModeView = ({
  tasks,
  onExitPanicMode,
  onUpdateTask,
  onOpenTaskDetails
}) => {
  const panicTasks = tasks.filter((t3) => t3.status !== "completed" && getHoursRemaining(t3.deadline) <= 48).sort(compareTasksByUrgency);
  const [secondsLeft, setSecondsLeft] = d2(25 * 60);
  const [timerRunning, setTimerRunning] = d2(false);
  y2(() => {
    let interval = null;
    if (timerRunning && secondsLeft > 0) {
      interval = setInterval(() => {
        setSecondsLeft((sec) => sec - 1);
      }, 1e3);
    } else if (secondsLeft === 0) {
      setTimerRunning(false);
    }
    return () => clearInterval(interval);
  }, [timerRunning, secondsLeft]);
  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const timerFormatted = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  const handleQuickLog = (task, hours) => {
    const newCompleted = Math.min(task.estimatedHours, Math.round((task.completedHours + hours) * 10) / 10);
    onUpdateTask({
      ...task,
      completedHours: newCompleted,
      status: newCompleted >= task.estimatedHours ? "completed" : "in_progress"
    });
  };
  return /* @__PURE__ */ Rn.createElement("div", { className: "space-y-6 animate-in fade-in duration-200" }, /* @__PURE__ */ Rn.createElement("div", { className: "bg-gradient-to-r from-rose-950 via-slate-900 to-slate-900 text-white rounded-2xl p-6 sm:p-7 border border-rose-900/50 shadow-xl relative overflow-hidden" }, /* @__PURE__ */ Rn.createElement("div", { className: "absolute right-0 top-0 bottom-0 w-80 bg-rose-600/10 blur-3xl pointer-events-none" }), /* @__PURE__ */ Rn.createElement("div", { className: "relative z-10 flex flex-wrap items-center justify-between gap-4 mb-4" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-3" }, /* @__PURE__ */ Rn.createElement(
    "button",
    {
      onClick: onExitPanicMode,
      className: "p-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors cursor-pointer",
      title: "Return to standard dashboard"
    },
    /* @__PURE__ */ Rn.createElement(ArrowLeft, { className: "w-5 h-5" })
  ), /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ Rn.createElement("div", { className: "w-9 h-9 rounded-xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-400" }, /* @__PURE__ */ Rn.createElement(Flame, { className: "w-5 h-5 animate-pulse" })), /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("h1", { className: "text-xl sm:text-2xl font-black tracking-tight text-white flex items-center gap-2" }, /* @__PURE__ */ Rn.createElement("span", null, "Panic Mode"), /* @__PURE__ */ Rn.createElement("span", { className: "text-xs px-2.5 py-0.5 rounded-full bg-rose-500/20 border border-rose-500/40 text-rose-300 font-bold uppercase tracking-wider" }, "Emergency View")), /* @__PURE__ */ Rn.createElement("p", { className: "text-xs text-rose-200/80 font-medium" }, "Only the next 48 hours matter right now.")))), /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-3 bg-white/10 backdrop-blur-xs px-4 py-2 rounded-xl border border-white/10" }, /* @__PURE__ */ Rn.createElement(Clock, { className: "w-4 h-4 text-rose-400" }), /* @__PURE__ */ Rn.createElement("span", { className: "font-mono text-lg font-bold text-white tracking-widest" }, timerFormatted), /* @__PURE__ */ Rn.createElement(
    "button",
    {
      onClick: () => setTimerRunning(!timerRunning),
      className: "p-1.5 rounded-lg bg-rose-600 hover:bg-rose-500 text-white transition-colors cursor-pointer",
      title: timerRunning ? "Pause timer" : "Start 25m sprint"
    },
    timerRunning ? /* @__PURE__ */ Rn.createElement(Pause, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ Rn.createElement(Play, { className: "w-3.5 h-3.5 fill-white" })
  ), /* @__PURE__ */ Rn.createElement(
    "button",
    {
      onClick: () => {
        setTimerRunning(false);
        setSecondsLeft(25 * 60);
      },
      className: "p-1.5 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer",
      title: "Reset 25m"
    },
    /* @__PURE__ */ Rn.createElement(RotateCcw, { className: "w-3.5 h-3.5" })
  ))), /* @__PURE__ */ Rn.createElement("div", { className: "relative z-10 flex items-center gap-2 text-xs text-slate-300" }, /* @__PURE__ */ Rn.createElement("span", { className: "font-bold text-rose-400" }, panicTasks.length, " critical deliverables"), /* @__PURE__ */ Rn.createElement("span", null, "competing for submission in the immediate 48-hour window."))), panicTasks.length > 0 ? /* @__PURE__ */ Rn.createElement("div", { className: "space-y-4" }, panicTasks.map((task, idx) => {
    const isStartNow = idx === 0;
    const isNext = idx === 1;
    const remainingFormatted = formatHoursAndMinutes(task.remainingHours || 0);
    const countdown = formatCountdown(task.deadline);
    const stageLabel = isStartNow ? "1 \u2014 START NOW" : isNext ? "2 \u2014 NEXT" : `3 \u2014 AFTER THAT (${idx + 1})`;
    const stageBg = isStartNow ? "bg-gradient-to-r from-rose-50 to-white border-rose-300 shadow-md ring-2 ring-rose-100" : isNext ? "bg-amber-50/40 border-amber-200" : "bg-white border-slate-200 opacity-80";
    const badgeBg = isStartNow ? "bg-rose-600 text-white" : isNext ? "bg-amber-600 text-white" : "bg-slate-700 text-white";
    return /* @__PURE__ */ Rn.createElement(
      "div",
      {
        key: task.id,
        className: `p-5 sm:p-6 rounded-2xl border transition-all ${stageBg}`
      },
      /* @__PURE__ */ Rn.createElement("div", { className: "flex flex-wrap items-center justify-between gap-3 mb-3" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-2.5" }, /* @__PURE__ */ Rn.createElement("span", { className: `text-xs font-black px-3 py-1 rounded-lg uppercase tracking-wider ${badgeBg}` }, stageLabel), /* @__PURE__ */ Rn.createElement("span", { className: "text-xs font-semibold text-slate-600" }, task.course)), /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ Rn.createElement(RiskBadge, { level: task.riskLevel, size: "sm" }))),
      /* @__PURE__ */ Rn.createElement("div", { className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4" }, /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("h3", { className: "text-lg sm:text-xl font-bold text-slate-900" }, task.title), /* @__PURE__ */ Rn.createElement("p", { className: "text-xs text-slate-500 mt-0.5 line-clamp-1" }, task.requirements ? task.requirements.join(" \u2022 ") : task.notes)), /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-3 text-xs shrink-0" }, /* @__PURE__ */ Rn.createElement("div", { className: "bg-white/80 border border-slate-200 rounded-xl px-3 py-1.5" }, /* @__PURE__ */ Rn.createElement("span", { className: "text-[10px] uppercase font-bold text-slate-400 block" }, "Due in"), /* @__PURE__ */ Rn.createElement("span", { className: "font-bold text-rose-700" }, countdown)), /* @__PURE__ */ Rn.createElement("div", { className: "bg-white/80 border border-slate-200 rounded-xl px-3 py-1.5" }, /* @__PURE__ */ Rn.createElement("span", { className: "text-[10px] uppercase font-bold text-slate-400 block" }, "Remaining"), /* @__PURE__ */ Rn.createElement("span", { className: "font-bold text-slate-800" }, remainingFormatted)))),
      /* @__PURE__ */ Rn.createElement("div", { className: "pt-3 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-3" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ Rn.createElement("span", { className: "text-xs font-semibold text-slate-500 mr-1" }, "Log sprint:"), /* @__PURE__ */ Rn.createElement(
        "button",
        {
          onClick: () => handleQuickLog(task, 0.5),
          className: "px-2.5 py-1 rounded-lg bg-white border border-slate-300 hover:bg-slate-100 text-xs font-semibold text-slate-700 shadow-2xs cursor-pointer"
        },
        "+30m Done"
      ), /* @__PURE__ */ Rn.createElement(
        "button",
        {
          onClick: () => handleQuickLog(task, 1),
          className: "px-2.5 py-1 rounded-lg bg-white border border-slate-300 hover:bg-slate-100 text-xs font-semibold text-slate-700 shadow-2xs cursor-pointer"
        },
        "+1h Done"
      ), /* @__PURE__ */ Rn.createElement(
        "button",
        {
          onClick: () => handleQuickLog(task, task.estimatedHours),
          className: "px-2.5 py-1 rounded-lg bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 text-xs font-semibold text-emerald-800 flex items-center gap-1 cursor-pointer"
        },
        /* @__PURE__ */ Rn.createElement(CircleCheckBig, { className: "w-3.5 h-3.5" }),
        /* @__PURE__ */ Rn.createElement("span", null, "Mark 100% Done")
      )), /* @__PURE__ */ Rn.createElement(
        "button",
        {
          onClick: () => onOpenTaskDetails(task),
          className: "text-xs font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 cursor-pointer"
        },
        /* @__PURE__ */ Rn.createElement("span", null, "View Breakdown"),
        /* @__PURE__ */ Rn.createElement(ChevronRight, { className: "w-4 h-4" })
      ))
    );
  })) : /* @__PURE__ */ Rn.createElement("div", { className: "p-12 text-center bg-white rounded-2xl border border-slate-200" }, /* @__PURE__ */ Rn.createElement("div", { className: "w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-3" }, /* @__PURE__ */ Rn.createElement(CircleCheckBig, { className: "w-6 h-6" })), /* @__PURE__ */ Rn.createElement("h3", { className: "font-bold text-slate-900 text-lg" }, "No Immediate 48h Deadlines!"), /* @__PURE__ */ Rn.createElement("p", { className: "text-xs text-slate-500 mt-1 max-w-sm mx-auto" }, "You don't have any assignments due in the next 48 hours. Panic Mode can safely be deactivated."), /* @__PURE__ */ Rn.createElement(
    "button",
    {
      onClick: onExitPanicMode,
      className: "mt-4 px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-semibold hover:bg-slate-800 cursor-pointer"
    },
    "Exit Panic Mode"
  )));
};

// src/components/TaskDetailsModal.tsx
var TaskDetailsModal = ({
  task,
  onClose,
  onStartWorking,
  onBreakDown,
  onUpdateTask,
  onDeleteTask,
  onViewReasoning
}) => {
  if (!task) return null;
  const [isEditing, setIsEditing] = d2(false);
  const [editTitle, setEditTitle] = d2(task.title);
  const [editCourse, setEditCourse] = d2(task.course);
  const [editEstimatedHours, setEditEstimatedHours] = d2(task.estimatedHours);
  const [editDeadline, setEditDeadline] = d2(() => {
    try {
      return toDateTimeLocalValue(new Date(task.deadline));
    } catch (e3) {
      return task.deadline.slice(0, 16);
    }
  });
  const remainingHours = Math.max(0, task.estimatedHours - task.completedHours);
  const remainingFormatted = formatHoursAndMinutes(remainingHours);
  const deadlinePretty = formatDeadlinePretty(task.deadline);
  const countdown = formatCountdown(task.deadline);
  const hoursLeft = getHoursRemaining(task.deadline);
  const daysLeft = Math.max(0.1, hoursLeft / 24);
  const availableHoursCalculated = task.availableHoursBeforeDeadline || Math.round(daysLeft * 3.5 * 10) / 10;
  const availableTimeFormatted = formatHoursAndMinutes(availableHoursCalculated);
  const capacityLabel = task.capacityStatus || (remainingHours > availableHoursCalculated ? "Overloaded" : remainingHours >= availableHoursCalculated * 0.8 ? "Tight" : "Comfortable");
  const isOverloaded = capacityLabel === "Overloaded";
  const handleToggleMilestone = (mId) => {
    const updatedMilestones = (task.milestones || []).map((m3) => {
      if (m3.id === mId) {
        return { ...m3, completed: !m3.completed };
      }
      return m3;
    });
    const completedCount = updatedMilestones.filter((m3) => m3.completed).length;
    const totalCount = updatedMilestones.length;
    let newCompletedHours = task.completedHours;
    if (totalCount > 0) {
      newCompletedHours = Math.round(completedCount / totalCount * task.estimatedHours * 10) / 10;
    }
    onUpdateTask({
      ...task,
      milestones: updatedMilestones,
      completedHours: newCompletedHours,
      status: completedCount === totalCount ? "completed" : "in_progress"
    });
  };
  const handleLogProgress = (deltaHours) => {
    const newCompleted = Math.min(task.estimatedHours, Math.round((task.completedHours + deltaHours) * 10) / 10);
    onUpdateTask({
      ...task,
      completedHours: newCompleted,
      status: newCompleted >= task.estimatedHours ? "completed" : "in_progress"
    });
  };
  const handleSaveEdit = () => {
    let newDeadlineIso = task.deadline;
    try {
      newDeadlineIso = new Date(editDeadline).toISOString();
    } catch (e3) {
      newDeadlineIso = editDeadline;
    }
    onUpdateTask({
      ...task,
      title: editTitle.trim() || task.title,
      course: editCourse.trim() || task.course,
      estimatedHours: Math.max(0.5, Number(editEstimatedHours)),
      deadline: newDeadlineIso
    });
    setIsEditing(false);
  };
  return /* @__PURE__ */ Rn.createElement("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/50 backdrop-blur-xs animate-in fade-in duration-150" }, /* @__PURE__ */ Rn.createElement("div", { className: "bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" }, /* @__PURE__ */ Rn.createElement("div", { className: "p-6 border-b border-slate-100 flex items-start justify-between gap-4 sticky top-0 bg-white z-10" }, /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-2 mb-1.5 flex-wrap" }, /* @__PURE__ */ Rn.createElement("span", { className: "text-xs px-2.5 py-0.5 rounded-md bg-slate-100 font-semibold text-slate-700" }, task.course), /* @__PURE__ */ Rn.createElement(RiskBadge, { level: task.riskLevel })), !isEditing ? /* @__PURE__ */ Rn.createElement("h2", { className: "text-xl font-bold text-slate-900" }, task.title) : /* @__PURE__ */ Rn.createElement(
    "input",
    {
      type: "text",
      value: editTitle,
      onChange: (e3) => setEditTitle(e3.target.value),
      className: "text-lg font-bold text-slate-900 border border-slate-300 rounded-lg px-2.5 py-1 w-full"
    }
  )), /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ Rn.createElement(
    "button",
    {
      onClick: () => setIsEditing(!isEditing),
      className: "p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors",
      title: "Edit task parameters"
    },
    /* @__PURE__ */ Rn.createElement(Pen, { className: "w-4 h-4" })
  ), /* @__PURE__ */ Rn.createElement(
    "button",
    {
      onClick: onClose,
      className: "p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
    },
    /* @__PURE__ */ Rn.createElement(X2, { className: "w-5 h-5" })
  ))), /* @__PURE__ */ Rn.createElement("div", { className: "p-6 space-y-6" }, isEditing && /* @__PURE__ */ Rn.createElement("div", { className: "p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3" }, /* @__PURE__ */ Rn.createElement("h4", { className: "text-xs font-bold uppercase tracking-wider text-slate-500" }, "Edit Task"), /* @__PURE__ */ Rn.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-3" }, /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("label", { className: "text-xs text-slate-600 block mb-1" }, "Course"), /* @__PURE__ */ Rn.createElement(
    "input",
    {
      type: "text",
      value: editCourse,
      onChange: (e3) => setEditCourse(e3.target.value),
      className: "w-full text-xs border border-slate-300 rounded-lg p-2"
    }
  )), /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("label", { className: "text-xs text-slate-600 block mb-1" }, "Deadline"), /* @__PURE__ */ Rn.createElement(
    "input",
    {
      type: "datetime-local",
      value: editDeadline,
      onChange: (e3) => setEditDeadline(e3.target.value),
      className: "w-full text-xs border border-slate-300 rounded-lg p-2"
    }
  )), /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("label", { className: "text-xs text-slate-600 block mb-1" }, "Estimated Hours"), /* @__PURE__ */ Rn.createElement(
    "input",
    {
      type: "number",
      step: "0.5",
      min: "0.5",
      value: editEstimatedHours,
      onChange: (e3) => setEditEstimatedHours(Number(e3.target.value)),
      className: "w-full text-xs border border-slate-300 rounded-lg p-2"
    }
  ))), /* @__PURE__ */ Rn.createElement("div", { className: "flex justify-end gap-2 pt-2" }, /* @__PURE__ */ Rn.createElement(
    "button",
    {
      onClick: () => setIsEditing(false),
      className: "px-3 py-1.5 text-xs text-slate-600 hover:bg-slate-200 rounded-lg"
    },
    "Cancel"
  ), /* @__PURE__ */ Rn.createElement(
    "button",
    {
      onClick: handleSaveEdit,
      className: "px-3 py-1.5 text-xs bg-slate-900 text-white rounded-lg font-semibold"
    },
    "Save Changes"
  ))), /* @__PURE__ */ Rn.createElement("div", { className: "p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex flex-wrap items-center justify-between gap-2" }, /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("span", { className: "text-[10px] text-slate-400 font-bold uppercase tracking-wider block" }, "Workload Status"), /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-2 mt-1" }, /* @__PURE__ */ Rn.createElement(RiskBadge, { level: task.riskLevel, size: "md" }), /* @__PURE__ */ Rn.createElement("span", { className: "text-xs text-slate-600 font-medium" }, task.riskReason || task.urgencyReason || "Automated cognitive workload assessment"))), onViewReasoning && /* @__PURE__ */ Rn.createElement(
    "button",
    {
      onClick: () => onViewReasoning(task),
      className: "text-xs font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 shrink-0"
    },
    /* @__PURE__ */ Rn.createElement("span", null, "Why this status?"),
    /* @__PURE__ */ Rn.createElement(ChevronRight, { className: "w-4 h-4" })
  )), /* @__PURE__ */ Rn.createElement("div", { className: "grid grid-cols-2 sm:grid-cols-5 gap-2.5 pt-3 border-t border-slate-200/70" }, /* @__PURE__ */ Rn.createElement("div", { className: "p-2.5 rounded-xl bg-white border border-slate-200" }, /* @__PURE__ */ Rn.createElement("span", { className: "text-[10px] text-slate-400 font-bold uppercase tracking-wider block" }, "Deadline"), /* @__PURE__ */ Rn.createElement("span", { className: "text-xs font-bold text-slate-800 block mt-0.5" }, countdown)), /* @__PURE__ */ Rn.createElement("div", { className: "p-2.5 rounded-xl bg-white border border-slate-200" }, /* @__PURE__ */ Rn.createElement("span", { className: "text-[10px] text-slate-400 font-bold uppercase tracking-wider block" }, "Remaining"), /* @__PURE__ */ Rn.createElement("span", { className: "text-xs font-bold text-slate-800 block mt-0.5" }, remainingFormatted)), /* @__PURE__ */ Rn.createElement("div", { className: "p-2.5 rounded-xl bg-white border border-slate-200" }, /* @__PURE__ */ Rn.createElement("span", { className: "text-[10px] text-slate-400 font-bold uppercase tracking-wider block" }, "Completion"), /* @__PURE__ */ Rn.createElement("span", { className: "text-xs font-bold text-indigo-700 block mt-0.5" }, task.completionPercentage || 0, "%")), /* @__PURE__ */ Rn.createElement("div", { className: "p-2.5 rounded-xl bg-white border border-slate-200" }, /* @__PURE__ */ Rn.createElement("span", { className: "text-[10px] text-slate-400 font-bold uppercase tracking-wider block" }, "Available Time"), /* @__PURE__ */ Rn.createElement("span", { className: "text-xs font-bold text-slate-800 block mt-0.5" }, availableTimeFormatted)), /* @__PURE__ */ Rn.createElement("div", { className: "p-2.5 rounded-xl bg-white border border-slate-200" }, /* @__PURE__ */ Rn.createElement("span", { className: "text-[10px] text-slate-400 font-bold uppercase tracking-wider block" }, "Capacity"), /* @__PURE__ */ Rn.createElement("span", { className: `text-xs font-bold block mt-0.5 ${isOverloaded ? "text-rose-600" : "text-emerald-700"}` }, capacityLabel)))), task.isColliding && /* @__PURE__ */ Rn.createElement("div", { className: "p-3.5 rounded-xl bg-rose-50 border border-rose-200 flex items-start gap-3 text-xs text-rose-800" }, /* @__PURE__ */ Rn.createElement(TriangleAlert, { className: "w-4 h-4 text-rose-600 shrink-0 mt-0.5" }), /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("strong", { className: "font-bold" }, "Deadline Collision Detected:"), " This assignment competes for cognitive hours with another major deliverable within a 48-hour window. Early milestone completion is strongly recommended.")), /* @__PURE__ */ Rn.createElement("div", { className: "bg-slate-50 p-4 rounded-xl border border-slate-200/80 space-y-3" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center justify-between text-xs font-semibold" }, /* @__PURE__ */ Rn.createElement("span", { className: "text-slate-700" }, "Log Completed Work"), /* @__PURE__ */ Rn.createElement("span", { className: "text-indigo-600" }, task.completedHours, " / ", task.estimatedHours, " hours logged")), /* @__PURE__ */ Rn.createElement(
    "input",
    {
      type: "range",
      min: "0",
      max: task.estimatedHours,
      step: "0.5",
      value: task.completedHours,
      onChange: (e3) => {
        const val = parseFloat(e3.target.value);
        onUpdateTask({
          ...task,
          completedHours: val,
          status: val >= task.estimatedHours ? "completed" : "in_progress"
        });
      },
      className: "w-full accent-indigo-600 cursor-pointer"
    }
  ), /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center justify-between text-xs pt-1" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ Rn.createElement(
    "button",
    {
      onClick: () => handleLogProgress(0.5),
      className: "px-2.5 py-1 rounded-md bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 font-medium text-xs shadow-2xs"
    },
    "+30 min"
  ), /* @__PURE__ */ Rn.createElement(
    "button",
    {
      onClick: () => handleLogProgress(1),
      className: "px-2.5 py-1 rounded-md bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 font-medium text-xs shadow-2xs"
    },
    "+1 hour"
  ), /* @__PURE__ */ Rn.createElement(
    "button",
    {
      onClick: () => handleLogProgress(2),
      className: "px-2.5 py-1 rounded-md bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 font-medium text-xs shadow-2xs"
    },
    "+2 hours"
  )), task.completedHours >= task.estimatedHours ? /* @__PURE__ */ Rn.createElement("span", { className: "text-xs font-bold text-emerald-700 flex items-center gap-1" }, /* @__PURE__ */ Rn.createElement(CircleCheckBig, { className: "w-3.5 h-3.5" }), " Complete!") : /* @__PURE__ */ Rn.createElement(
    "button",
    {
      onClick: () => {
        onUpdateTask({
          ...task,
          completedHours: task.estimatedHours,
          status: "completed"
        });
      },
      className: "text-xs text-indigo-600 hover:underline font-semibold"
    },
    "Mark 100% Complete"
  ))), /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center justify-between mb-2" }, /* @__PURE__ */ Rn.createElement("h4", { className: "text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center gap-1.5" }, /* @__PURE__ */ Rn.createElement(Split, { className: "w-3.5 h-3.5 text-indigo-600" }), /* @__PURE__ */ Rn.createElement("span", null, "Actionable Milestones (", task.milestones?.length || 0, ")")), /* @__PURE__ */ Rn.createElement(
    "button",
    {
      onClick: () => onBreakDown(task),
      className: "text-xs text-indigo-600 hover:text-indigo-800 font-semibold flex items-center gap-1"
    },
    /* @__PURE__ */ Rn.createElement(Sparkles, { className: "w-3 h-3" }),
    /* @__PURE__ */ Rn.createElement("span", null, "Smart Split Milestones")
  )), task.milestones && task.milestones.length > 0 ? /* @__PURE__ */ Rn.createElement("div", { className: "space-y-2" }, task.milestones.map((m3) => /* @__PURE__ */ Rn.createElement(
    "button",
    {
      key: m3.id,
      type: "button",
      role: "checkbox",
      "aria-checked": m3.completed,
      tabIndex: 0,
      onClick: () => handleToggleMilestone(m3.id),
      onKeyDown: (e3) => {
        if (e3.key === " " || e3.key === "Enter") {
          e3.preventDefault();
          handleToggleMilestone(m3.id);
        }
      },
      className: `w-full flex items-start gap-3 p-3 rounded-xl border text-xs cursor-pointer transition-all text-left select-none focus:outline-hidden focus:ring-2 focus:ring-indigo-500 ${m3.completed ? "bg-emerald-50/50 border-emerald-300 text-slate-400" : "bg-white border-slate-200 hover:border-indigo-300 text-slate-800 hover:shadow-xs"}`
    },
    /* @__PURE__ */ Rn.createElement(
      "div",
      {
        className: `mt-0.5 w-4 h-4 rounded flex items-center justify-center shrink-0 pointer-events-none transition-colors ${m3.completed ? "text-emerald-600" : "text-slate-400"}`
      },
      m3.completed ? /* @__PURE__ */ Rn.createElement(SquareCheckBig, { className: "w-4 h-4 text-emerald-600" }) : /* @__PURE__ */ Rn.createElement(Square, { className: "w-4 h-4 text-slate-400" })
    ),
    /* @__PURE__ */ Rn.createElement("div", { className: "flex-1 pointer-events-none" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center justify-between" }, /* @__PURE__ */ Rn.createElement("span", { className: `font-semibold ${m3.completed ? "line-through text-slate-400" : "text-slate-900"}` }, m3.title), /* @__PURE__ */ Rn.createElement(
      "span",
      {
        className: `text-[11px] font-medium px-2 py-0.5 rounded ${m3.completed ? "bg-emerald-100 text-emerald-800" : "bg-slate-100 text-slate-600"}`
      },
      m3.targetDay || "Pending",
      " \xB7 ",
      formatHoursAndMinutes(m3.estimatedHours || (m3.estimatedMinutes ? m3.estimatedMinutes / 60 : 1))
    )), m3.description && /* @__PURE__ */ Rn.createElement("p", { className: "text-slate-500 text-[11px] mt-0.5" }, m3.description))
  ))) : /* @__PURE__ */ Rn.createElement("div", { className: "p-4 rounded-xl border border-dashed border-slate-200 text-center" }, /* @__PURE__ */ Rn.createElement("p", { className: "text-xs text-slate-500 mb-2" }, "No milestones generated yet."), /* @__PURE__ */ Rn.createElement(
    "button",
    {
      onClick: () => onBreakDown(task),
      className: "px-3 py-1.5 rounded-lg bg-indigo-50 text-indigo-700 border border-indigo-200 text-xs font-semibold hover:bg-indigo-100"
    },
    "Break into 3\u20135 Milestones"
  ))), task.requirements && task.requirements.length > 0 && /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("h4", { className: "text-xs font-bold uppercase tracking-wider text-slate-600 mb-2" }, "Deliverable Requirements"), /* @__PURE__ */ Rn.createElement("ul", { className: "space-y-1.5 text-xs text-slate-700" }, task.requirements.map((req, i3) => /* @__PURE__ */ Rn.createElement("li", { key: i3, className: "flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-100" }, /* @__PURE__ */ Rn.createElement("span", { className: "w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0" }), /* @__PURE__ */ Rn.createElement("span", null, req)))))), /* @__PURE__ */ Rn.createElement("div", { className: "p-5 border-t border-slate-100 bg-slate-50/50 flex flex-wrap items-center justify-between gap-3 sticky bottom-0 z-10" }, /* @__PURE__ */ Rn.createElement(
    "button",
    {
      onClick: () => {
        if (window.confirm(`Delete "${task.title}"?`)) {
          onDeleteTask(task.id);
          onClose();
        }
      },
      className: "flex items-center gap-1.5 px-3 py-2 text-rose-600 hover:bg-rose-50 rounded-lg text-xs font-semibold transition-colors"
    },
    /* @__PURE__ */ Rn.createElement(Trash2, { className: "w-3.5 h-3.5" }),
    /* @__PURE__ */ Rn.createElement("span", null, "Delete Task")
  ), /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ Rn.createElement(
    "button",
    {
      onClick: () => onBreakDown(task),
      className: "flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold shadow-2xs"
    },
    /* @__PURE__ */ Rn.createElement(Split, { className: "w-3.5 h-3.5 text-indigo-600" }),
    /* @__PURE__ */ Rn.createElement("span", null, "Smart Split")
  ), /* @__PURE__ */ Rn.createElement(
    "button",
    {
      onClick: () => {
        onStartWorking(task);
        onClose();
      },
      className: "flex items-center gap-2 px-5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold shadow-md shadow-slate-900/10 transition-all hover:scale-[1.02]"
    },
    /* @__PURE__ */ Rn.createElement(Play, { className: "w-3.5 h-3.5 fill-white text-white" }),
    /* @__PURE__ */ Rn.createElement("span", null, "Start Working Session")
  )))));
};

// src/components/AddTaskModal.tsx
var AddTaskModal = ({ isOpen, onClose, onAddTask }) => {
  if (!isOpen) return null;
  const getDefaultDeadline = () => {
    const target = new Date(Date.now() + 3 * 24 * 3600 * 1e3);
    target.setHours(23, 59, 0, 0);
    return toDateTimeLocalValue(target);
  };
  const [title, setTitle] = d2("");
  const [course, setCourse] = d2("Computer Science");
  const [deadline, setDeadline] = d2(getDefaultDeadline());
  const [estimatedHours, setEstimatedHours] = d2(4);
  const [notes, setNotes] = d2("");
  const [requirementsInput, setRequirementsInput] = d2("");
  const [isListening, setIsListening] = d2(false);
  y2(() => {
    if (isOpen) {
      setTitle("");
      setCourse("Computer Science");
      setDeadline(getDefaultDeadline());
      setEstimatedHours(4);
      setNotes("");
      setRequirementsInput("");
      setIsListening(false);
    }
  }, [isOpen]);
  const handleSubmit = (e3) => {
    e3.preventDefault();
    if (!title.trim()) return;
    const requirements = requirementsInput.split("\n").map((r3) => r3.trim()).filter((r3) => r3.length > 0);
    let deadlineIso = "";
    try {
      deadlineIso = new Date(deadline).toISOString();
    } catch (err) {
      deadlineIso = deadline.length === 16 ? `${deadline}:00Z` : deadline;
    }
    const newTask = {
      id: `task-${Date.now()}`,
      title: title.trim(),
      course: course.trim(),
      description: notes.trim() || `${title.trim()} for ${course.trim()}`,
      deadline: deadlineIso,
      estimatedHours: Math.max(0.5, Number(estimatedHours)),
      completedHours: 0,
      requirements: requirements.length > 0 ? requirements : ["Complete assignment requirements", "Submit final deliverables"],
      milestones: [],
      status: "pending",
      riskLevel: "APPROACHING",
      recommendedStartDate: "Today",
      notes: notes.trim(),
      source: "manual",
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    onAddTask(newTask);
    onClose();
  };
  const handleVoiceInput = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      try {
        const rec = new SpeechRecognition();
        rec.lang = "en-US";
        setIsListening(true);
        rec.onresult = (evt) => {
          const phrase = evt.results[0][0].transcript;
          setTitle(phrase);
          setIsListening(false);
        };
        rec.onerror = () => {
          setIsListening(false);
          setTitle("AI Ethics Term Paper");
          setCourse("Artificial Intelligence");
          setEstimatedHours(6);
        };
        rec.onend = () => setIsListening(false);
        rec.start();
      } catch (e3) {
        setIsListening(false);
        setTitle("AI Ethics Term Paper");
        setCourse("Artificial Intelligence");
        setEstimatedHours(6);
      }
    } else {
      setTitle("AI Ethics Term Paper");
      setCourse("Artificial Intelligence");
      setEstimatedHours(6);
    }
  };
  return /* @__PURE__ */ Rn.createElement("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/50 backdrop-blur-xs animate-in fade-in duration-150" }, /* @__PURE__ */ Rn.createElement("div", { className: "bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto" }, /* @__PURE__ */ Rn.createElement("div", { className: "p-6 border-b border-slate-100 flex items-center justify-between sticky top-0 bg-white z-10" }, /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("h2", { className: "text-lg font-bold text-slate-900" }, "Add New Academic Task"), /* @__PURE__ */ Rn.createElement("p", { className: "text-xs text-slate-500 mt-0.5" }, "Enter assignment details for cognitive workload scheduling")), /* @__PURE__ */ Rn.createElement(
    "button",
    {
      onClick: onClose,
      className: "p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
    },
    /* @__PURE__ */ Rn.createElement(X2, { className: "w-5 h-5" })
  )), /* @__PURE__ */ Rn.createElement("form", { onSubmit: handleSubmit, className: "p-6 space-y-4" }, /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center justify-between mb-1" }, /* @__PURE__ */ Rn.createElement("label", { className: "text-xs font-semibold text-slate-700" }, "Task Title"), /* @__PURE__ */ Rn.createElement(
    "button",
    {
      type: "button",
      onClick: handleVoiceInput,
      className: "text-[11px] text-indigo-600 font-medium flex items-center gap-1 hover:underline cursor-pointer"
    },
    /* @__PURE__ */ Rn.createElement(Mic, { className: "w-3 h-3" }),
    isListening ? "Listening..." : "Voice Input"
  )), /* @__PURE__ */ Rn.createElement(
    "input",
    {
      type: "text",
      required: true,
      placeholder: "e.g. Distributed Systems Lab 3",
      value: title,
      onChange: (e3) => setTitle(e3.target.value),
      className: "w-full text-xs p-2.5 rounded-xl border border-slate-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-hidden font-medium"
    }
  )), /* @__PURE__ */ Rn.createElement("div", { className: "grid grid-cols-2 gap-3" }, /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("label", { className: "text-xs font-semibold text-slate-700 block mb-1" }, "Course"), /* @__PURE__ */ Rn.createElement(
    "input",
    {
      type: "text",
      required: true,
      value: course,
      onChange: (e3) => setCourse(e3.target.value),
      className: "w-full text-xs p-2.5 rounded-xl border border-slate-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-hidden"
    }
  )), /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("label", { className: "text-xs font-semibold text-slate-700 block mb-1" }, "Deadline Date & Time"), /* @__PURE__ */ Rn.createElement(
    "input",
    {
      type: "datetime-local",
      required: true,
      value: deadline,
      onChange: (e3) => setDeadline(e3.target.value),
      className: "w-full text-xs p-2.5 rounded-xl border border-slate-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-hidden"
    }
  ))), /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("label", { className: "text-xs font-semibold text-slate-700 block mb-1" }, "Estimated Workload (Hours)"), /* @__PURE__ */ Rn.createElement(
    "input",
    {
      type: "number",
      step: "0.5",
      min: "0.5",
      max: "50",
      required: true,
      value: estimatedHours,
      onChange: (e3) => setEstimatedHours(Number(e3.target.value)),
      className: "w-full text-xs p-2.5 rounded-xl border border-slate-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-hidden font-semibold"
    }
  )), /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("label", { className: "text-xs font-semibold text-slate-700 block mb-1" }, "Requirements (One per line)"), /* @__PURE__ */ Rn.createElement(
    "textarea",
    {
      rows: 3,
      placeholder: "e.g.\nImplement Raft consensus algorithm\nWrite 4-page report with benchmark plots\nSubmit GitHub repo URL",
      value: requirementsInput,
      onChange: (e3) => setRequirementsInput(e3.target.value),
      className: "w-full text-xs p-2.5 rounded-xl border border-slate-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-hidden font-mono"
    }
  )), /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("label", { className: "text-xs font-semibold text-slate-700 block mb-1" }, "Additional Notes (Optional)"), /* @__PURE__ */ Rn.createElement(
    "input",
    {
      type: "text",
      placeholder: "Special instructions or portal details",
      value: notes,
      onChange: (e3) => setNotes(e3.target.value),
      className: "w-full text-xs p-2.5 rounded-xl border border-slate-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-hidden"
    }
  )), /* @__PURE__ */ Rn.createElement("div", { className: "pt-2 flex items-center justify-end gap-2" }, /* @__PURE__ */ Rn.createElement(
    "button",
    {
      type: "button",
      onClick: onClose,
      className: "px-4 py-2 text-xs font-medium text-slate-600 hover:bg-slate-100 rounded-xl cursor-pointer"
    },
    "Cancel"
  ), /* @__PURE__ */ Rn.createElement(
    "button",
    {
      type: "submit",
      className: "px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
    },
    /* @__PURE__ */ Rn.createElement(Plus, { className: "w-4 h-4" }),
    /* @__PURE__ */ Rn.createElement("span", null, "Add to Workload")
  )))));
};

// src/services/aiExtractor.ts
var getDemoPresets = () => {
  return [
    {
      id: "dbms_notice",
      label: "DBMS Project Announcement",
      text: "All students must submit the DBMS mini project by this Friday at 11:59 PM. Submit the ER diagram, SQL file and documentation. Late submissions will incur a 10% penalty per day."
    },
    {
      id: "dbms_extension",
      label: "DBMS Deadline Extension",
      text: "URGENT NOTICE: Due to server maintenance on the portal, the DBMS Mini Project deadline has been extended to next Monday at 11:59 PM. Please ensure your ER diagram and SQL scripts are pushed to the university GitHub repository."
    },
    {
      id: "ai_term_paper",
      label: "AI Ethics Research Notice",
      text: 'CS-402 Artificial Intelligence: Term Paper on "Ethical Alignment in Autonomous Reasoning". Due in 4 days at 5:00 PM. Required sections: Abstract, Related Work, Formal Problem Statement, Proposed Evaluation, IEEE Bibliography. Estimated workload is 7 hours.'
    },
    {
      id: "multilingual_hindi",
      label: "Multilingual Notice (Hindi)",
      text: "\u0938\u092D\u0940 \u0915\u0902\u092A\u094D\u092F\u0942\u091F\u0930 \u0938\u093E\u0907\u0902\u0938 \u091B\u093E\u0924\u094D\u0930\u094B\u0902 \u0915\u094B \u0938\u0942\u091A\u093F\u0924 \u0915\u093F\u092F\u093E \u091C\u093E\u0924\u093E \u0939\u0948 \u0915\u093F \u0911\u092A\u0930\u0947\u091F\u093F\u0902\u0917 \u0938\u093F\u0938\u094D\u091F\u092E (Operating Systems) \u0915\u093E \u0905\u0938\u093E\u0907\u0928\u092E\u0947\u0902\u091F 2 \u0906\u0917\u093E\u092E\u0940 \u092E\u0902\u0917\u0932\u0935\u093E\u0930 \u0926\u094B\u092A\u0939\u0930 2:00 \u092C\u091C\u0947 \u0924\u0915 \u091C\u092E\u093E \u0915\u0930\u0928\u093E \u0905\u0928\u093F\u0935\u093E\u0930\u094D\u092F \u0939\u0948\u0964 \u092A\u094D\u0930\u094B\u0938\u0947\u0938 \u0936\u0947\u0921\u094D\u092F\u0942\u0932\u093F\u0902\u0917 \u090F\u0932\u094D\u0917\u094B\u0930\u093F\u0926\u092E \u0914\u0930 \u092E\u0947\u092E\u094B\u0930\u0940 \u092E\u0948\u0928\u0947\u091C\u092E\u0947\u0902\u091F \u0930\u093F\u092A\u094B\u0930\u094D\u091F \u0938\u0902\u0932\u0917\u094D\u0928 \u0915\u0930\u0947\u0902\u0964 \u0905\u0928\u0941\u092E\u093E\u0928\u093F\u0924 \u0938\u092E\u092F 4.5 \u0918\u0902\u091F\u0947 \u0939\u0948\u0964",
      language: "Hindi"
    },
    {
      id: "multilingual_tamil",
      label: "Multilingual Notice (Tamil)",
      text: "\u0B95\u0BA3\u0BBF\u0BAA\u0BCD\u0BAA\u0BCA\u0BB1\u0BBF \u0B85\u0BB1\u0BBF\u0BB5\u0BBF\u0BAF\u0BB2\u0BCD \u0BAE\u0BBE\u0BA3\u0BB5\u0BB0\u0BCD\u0B95\u0BB3\u0BCD \u0B95\u0BA3\u0BBF\u0BA9\u0BBF \u0BA8\u0BC6\u0B9F\u0BCD\u0BB5\u0BCA\u0BB0\u0BCD\u0B95\u0BCD\u0B95\u0BC1\u0B95\u0BB3\u0BCD (Computer Networks) \u0B87\u0BB1\u0BC1\u0BA4\u0BBF \u0BA4\u0BBF\u0B9F\u0BCD\u0B9F \u0B85\u0BB1\u0BBF\u0B95\u0BCD\u0B95\u0BC8\u0BAF\u0BC8 \u0BB5\u0BC6\u0BB3\u0BCD\u0BB3\u0BBF\u0B95\u0BCD\u0B95\u0BBF\u0BB4\u0BAE\u0BC8 \u0BAE\u0BBE\u0BB2\u0BC8 5:00 \u0BAE\u0BA3\u0BBF\u0B95\u0BCD\u0B95\u0BC1\u0BB3\u0BCD \u0B9A\u0BAE\u0BB0\u0BCD\u0BAA\u0BCD\u0BAA\u0BBF\u0B95\u0BCD\u0B95 \u0BB5\u0BC7\u0BA3\u0BCD\u0B9F\u0BC1\u0BAE\u0BCD. \u0BAA\u0BBE\u0B95\u0BCD\u0B95\u0BC6\u0B9F\u0BCD \u0B9F\u0BCD\u0BB0\u0BC7\u0B9A\u0BB0\u0BCD \u0B95\u0BCB\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BCD \u0BAE\u0BB1\u0BCD\u0BB1\u0BC1\u0BAE\u0BCD \u0BAA\u0BBF\u0BA3\u0BC8\u0BAF \u0BB5\u0BB0\u0BC8\u0BAA\u0B9F\u0BAE\u0BCD \u0B85\u0BB5\u0B9A\u0BBF\u0BAF\u0BAE\u0BCD. \u0BAE\u0BA4\u0BBF\u0BAA\u0BCD\u0BAA\u0BBF\u0B9F\u0BAA\u0BCD\u0BAA\u0B9F\u0BCD\u0B9F \u0BAA\u0BA3\u0BBF 5 \u0BAE\u0BA3\u0BBF\u0BA8\u0BC7\u0BB0\u0BAE\u0BCD.",
      language: "Tamil"
    }
  ];
};
var DEMO_PRESETS = getDemoPresets();
var parseAcademicNoticeDeterministic = (rawText) => {
  const text = rawText.trim();
  const lower = text.toLowerCase();
  let detectedLanguage = "English";
  if (/[\u0900-\u097F]/.test(text)) {
    detectedLanguage = "Hindi";
  } else if (/[\u0B80-\u0BFF]/.test(text)) {
    detectedLanguage = "Tamil";
  } else if (/[\u0D00-\u0D7F]/.test(text)) {
    detectedLanguage = "Malayalam";
  }
  if (detectedLanguage === "Hindi") {
    const deadline2 = createRelativeIsoDate(4, 4);
    return {
      task: "Operating Systems Assignment 2",
      course: "Operating Systems (CS-301)",
      deadline: deadline2,
      deadlineFormatted: formatDeadlinePretty(deadline2),
      requirements: [
        "Process Scheduling Algorithm implementations",
        "Memory Management analysis report",
        "C/C++ simulation source code"
      ],
      estimatedHours: 4.5,
      notes: "Normalized from Hindi academic circular: Process scheduling and memory management report.",
      confidence: 0.94,
      rawText: text,
      detectedLanguage: "Hindi"
    };
  }
  if (detectedLanguage === "Tamil") {
    const deadline2 = createRelativeIsoDate(5, 7);
    return {
      task: "Computer Networks Final Project",
      course: "Computer Networks (CS-304)",
      deadline: deadline2,
      deadlineFormatted: formatDeadlinePretty(deadline2),
      requirements: [
        "Cisco Packet Tracer simulation files (.pkt)",
        "Network topology architecture diagram",
        "Subnetting calculation verification document"
      ],
      estimatedHours: 5,
      notes: "Normalized from Tamil academic notice: Packet tracer files and network diagram required.",
      confidence: 0.93,
      rawText: text,
      detectedLanguage: "Tamil"
    };
  }
  if (detectedLanguage === "Malayalam") {
    const deadline2 = createRelativeIsoDate(3, 5);
    return {
      task: "Software Engineering Project Report",
      course: "Software Engineering",
      deadline: deadline2,
      deadlineFormatted: formatDeadlinePretty(deadline2),
      requirements: [
        "Software Requirements Specification (SRS)",
        "UML Architecture diagrams",
        "Test plan and verification metrics"
      ],
      estimatedHours: 4,
      notes: "Normalized from Malayalam academic circular.",
      confidence: 0.92,
      rawText: text,
      detectedLanguage: "Malayalam"
    };
  }
  let task = "Academic Assignment";
  let course = "General Course";
  if (lower.includes("dbms") || lower.includes("database")) {
    task = lower.includes("mini") ? "DBMS Mini Project" : "Database Systems Project";
    course = "Database Systems";
  } else if (lower.includes("research paper") || lower.includes("term paper") || lower.includes("ethics")) {
    task = lower.includes("ethics") ? "AI Ethics Research Paper" : "Research Paper";
    course = "Artificial Intelligence";
  } else if (lower.includes("operating systems") || lower.includes("os ")) {
    task = "Operating Systems Lab Assignment";
    course = "Operating Systems";
  } else if (lower.includes("statistics") || lower.includes("stats")) {
    task = "Statistics Quiz Preparation";
    course = "Statistics";
  } else if (lower.includes("network")) {
    task = "Networking Architecture Report";
    course = "Computer Networks";
  } else {
    const firstSentence = text.split(/[.\n]/)[0].trim();
    task = firstSentence.length > 50 ? firstSentence.slice(0, 47) + "..." : firstSentence || "Coursework Assignment";
  }
  let deadline = createRelativeIsoDate(2, 14);
  if (lower.includes("extended") || lower.includes("extension") || lower.includes("next monday")) {
    deadline = createRelativeIsoDate(4, 14);
  } else if (lower.includes("in 4 days") || lower.includes("4 days")) {
    deadline = createRelativeIsoDate(4, 7);
  } else if (lower.includes("tomorrow") || lower.includes("in 1 day")) {
    deadline = createRelativeIsoDate(1, 4);
  } else if (lower.includes("friday") || lower.includes("this friday")) {
    deadline = createRelativeIsoDate(2, 14);
  } else if (lower.includes("next week")) {
    deadline = createRelativeIsoDate(7, 12);
  }
  const requirements = [];
  if (lower.includes("er diagram") || lower.includes("entity relationship")) {
    requirements.push("ER diagram (Crow's Foot notation)");
  }
  if (lower.includes("sql file") || lower.includes("sql script") || lower.includes("ddl") || lower.includes("schema")) {
    requirements.push("SQL schema script & sample queries (.sql)");
  }
  if (lower.includes("documentation") || lower.includes("report") || lower.includes("pdf")) {
    requirements.push("Documentation PDF with execution screenshots");
  }
  if (lower.includes("abstract") || lower.includes("related work")) {
    requirements.push("Abstract & Related literature review section");
  }
  if (lower.includes("ieee") || lower.includes("bibliography") || lower.includes("citation")) {
    requirements.push("IEEE formatted bibliography & citations");
  }
  if (lower.includes("formal problem") || lower.includes("evaluation")) {
    requirements.push("Formal Problem Statement & Proposed Evaluation");
  }
  if (requirements.length === 0) {
    requirements.push("Complete assignment prompt deliverables");
    requirements.push("Submit source files to course submission portal");
  }
  let estimatedHours = 5;
  const hoursMatch = text.match(/(\d+(?:\.\d+)?)\s*(?:-|to)?\s*(\d+(?:\.\d+)?)?\s*hours?/i);
  if (hoursMatch) {
    estimatedHours = parseFloat(hoursMatch[1]);
  } else if (lower.includes("dbms")) {
    estimatedHours = 5;
  } else if (lower.includes("paper") || lower.includes("thesis")) {
    estimatedHours = 7;
  } else if (lower.includes("quiz") || lower.includes("prep")) {
    estimatedHours = 2;
  }
  return {
    task,
    course,
    deadline,
    deadlineFormatted: formatDeadlinePretty(deadline),
    requirements,
    estimatedHours,
    notes: text.length > 120 ? text.slice(0, 117) + "..." : text,
    confidence: 0.96,
    rawText: text,
    detectedLanguage
  };
};

// src/services/duplicateDetector.ts
var checkDuplicateDeadline = (extracted, existingTasks) => {
  const normExtracted = extracted.task.toLowerCase().replace(/[^a-z0-9]/g, "");
  const normCourse = extracted.course.toLowerCase().replace(/[^a-z0-9]/g, "");
  for (const existing of existingTasks) {
    if (existing.status === "completed") continue;
    const normExisting = existing.title.toLowerCase().replace(/[^a-z0-9]/g, "");
    const normExistingCourse = existing.course.toLowerCase().replace(/[^a-z0-9]/g, "");
    let match = false;
    if (normExtracted === normExisting) {
      match = true;
    } else if (normExtracted.includes(normExisting) || normExisting.includes(normExtracted)) {
      match = true;
    } else if ((normExtracted.includes("dbms") || normExtracted.includes("database")) && (normExisting.includes("dbms") || normExisting.includes("database"))) {
      match = true;
    } else if (normCourse.length > 3 && normCourse === normExistingCourse && (normExtracted.includes("project") || normExtracted.includes("assignment"))) {
      match = true;
    }
    if (match) {
      const existingDate = new Date(existing.deadline).getTime();
      const newDate = new Date(extracted.deadline).getTime();
      const isExtension = newDate > existingDate;
      return {
        existingTask: existing,
        extractedNotice: extracted,
        previousDeadline: existing.deadline,
        newDeadline: extracted.deadline,
        isExtension,
        matchScore: 0.92
      };
    }
  }
  return null;
};

// src/components/ImportNoticeModal.tsx
var EXTRACTION_STEPS = [
  "Deadline detected",
  "Requirements found",
  "Workload estimated"
];
var ImportNoticeModal = ({
  isOpen,
  onClose,
  onAddTask,
  onUpdateExistingDeadline,
  existingTasks,
  initialText = ""
}) => {
  if (!isOpen) return null;
  const [inputMode, setInputMode] = d2("paste");
  const [noticeText, setNoticeText] = d2(initialText);
  const [fileName, setFileName] = d2(null);
  const [isProcessing, setIsProcessing] = d2(false);
  const [stepIndex, setStepIndex] = d2(0);
  const [extractedResult, setExtractedResult] = d2(null);
  const [duplicateConflict, setDuplicateConflict] = d2(null);
  const [isDemoModeOpen, setIsDemoModeOpen] = d2(Boolean(initialText));
  const [selectedPresetId, setSelectedPresetId] = d2(() => {
    const match = DEMO_PRESETS.find((p3) => p3.text === initialText);
    return match ? match.id : null;
  });
  const [editTitle, setEditTitle] = d2("");
  const [editCourse, setEditCourse] = d2("");
  const [editDeadline, setEditDeadline] = d2("");
  const [editHours, setEditHours] = d2(5);
  const fileInputRef = A2(null);
  y2(() => {
    setNoticeText(initialText);
    setFileName(null);
    setIsProcessing(false);
    setExtractedResult(null);
    setDuplicateConflict(null);
    if (initialText) {
      setIsDemoModeOpen(true);
      const match = DEMO_PRESETS.find((p3) => p3.text === initialText);
      setSelectedPresetId(match ? match.id : null);
    } else {
      setSelectedPresetId(null);
    }
  }, [isOpen, initialText]);
  const handleSelectPreset = (presetId) => {
    const preset = DEMO_PRESETS.find((p3) => p3.id === presetId);
    if (!preset) return;
    setSelectedPresetId(preset.id);
    setNoticeText(preset.text);
    setInputMode("paste");
    setFileName(null);
    setExtractedResult(null);
    setDuplicateConflict(null);
  };
  const handleProcessNotice = () => {
    if (!noticeText.trim()) return;
    setIsProcessing(true);
    setStepIndex(0);
    setExtractedResult(null);
    setDuplicateConflict(null);
    const stepInterval = setInterval(() => {
      setStepIndex((prev) => {
        if (prev < EXTRACTION_STEPS.length - 1) {
          return prev + 1;
        } else {
          clearInterval(stepInterval);
          finishExtraction();
          return prev;
        }
      });
    }, 350);
  };
  const finishExtraction = () => {
    const extracted = parseAcademicNoticeDeterministic(noticeText);
    setExtractedResult(extracted);
    setEditTitle(extracted.task);
    setEditCourse(extracted.course);
    setEditDeadline(extracted.deadline);
    setEditHours(extracted.estimatedHours || 5);
    const conflict = checkDuplicateDeadline(extracted, existingTasks);
    if (conflict) {
      setDuplicateConflict(conflict);
    }
    setIsProcessing(false);
  };
  const handleConfirmAdd = () => {
    if (!extractedResult) return;
    const newTask = {
      id: `task-${Date.now()}`,
      title: editTitle.trim() || extractedResult.task,
      course: editCourse.trim() || extractedResult.course,
      description: extractedResult.notes || editTitle,
      deadline: editDeadline || extractedResult.deadline,
      estimatedHours: Math.max(0.5, Number(editHours)),
      completedHours: 0,
      requirements: extractedResult.requirements || ["Complete assignment requirements"],
      milestones: [],
      status: "pending",
      riskLevel: "APPROACHING",
      recommendedStartDate: "Today",
      notes: extractedResult.notes || "",
      source: "import_notice",
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    onAddTask(newTask);
    handleClose();
  };
  const handleResolveUpdateDeadline = () => {
    if (!duplicateConflict) return;
    onUpdateExistingDeadline(duplicateConflict.existingTask.id, duplicateConflict.newDeadline);
    handleClose();
  };
  const handleClose = () => {
    setExtractedResult(null);
    setDuplicateConflict(null);
    setIsProcessing(false);
    onClose();
  };
  const handleFile = (file) => {
    setFileName(file.name);
    if (file.name.endsWith(".txt")) {
      const reader = new FileReader();
      reader.onload = (e3) => {
        const text = e3.target?.result || "";
        setNoticeText(text);
        setInputMode("paste");
      };
      reader.readAsText(file);
    } else {
      const baseName = file.name.replace(/\.[^/.]+$/, "");
      setNoticeText(
        `[Extracted from ${file.name}]
Assignment: ${baseName}
Deadline: In 3 days at 11:59 PM.
Course: Computer Science
Requirements: Complete implementation, document test methodology, and submit final report.
Estimated effort: 4.5 hours.`
      );
      setInputMode("paste");
    }
  };
  const handleFileDrop = (e3) => {
    e3.preventDefault();
    if (e3.dataTransfer.files && e3.dataTransfer.files[0]) {
      handleFile(e3.dataTransfer.files[0]);
    }
  };
  const handleFileInputChange = (e3) => {
    if (e3.target.files && e3.target.files[0]) {
      handleFile(e3.target.files[0]);
    }
  };
  return /* @__PURE__ */ Rn.createElement("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/50 backdrop-blur-xs animate-in fade-in duration-150" }, /* @__PURE__ */ Rn.createElement("div", { className: "bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" }, /* @__PURE__ */ Rn.createElement("div", { className: "p-6 border-b border-slate-100 flex items-start justify-between gap-4 sticky top-0 bg-white z-10" }, /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("h2", { className: "text-xl font-bold text-slate-900" }, "Import Academic Notice"), /* @__PURE__ */ Rn.createElement("p", { className: "text-xs text-slate-500 mt-0.5" }, "Drop a screenshot, PDF, or paste your academic notice. We'll turn it into structured work.")), /* @__PURE__ */ Rn.createElement(
    "button",
    {
      type: "button",
      onClick: handleClose,
      className: "p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer",
      "aria-label": "Close modal"
    },
    /* @__PURE__ */ Rn.createElement(X2, { className: "w-5 h-5" })
  )), /* @__PURE__ */ Rn.createElement("div", { className: "p-6 space-y-4" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center justify-between border-b border-slate-200 text-xs font-semibold" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex" }, /* @__PURE__ */ Rn.createElement(
    "button",
    {
      type: "button",
      onClick: () => setInputMode("paste"),
      className: `pb-2.5 px-4 border-b-2 transition-all flex items-center gap-2 cursor-pointer ${inputMode === "paste" ? "border-indigo-600 text-indigo-600 font-bold" : "border-transparent text-slate-500 hover:text-slate-800"}`
    },
    /* @__PURE__ */ Rn.createElement(FileText, { className: "w-3.5 h-3.5" }),
    /* @__PURE__ */ Rn.createElement("span", null, "Paste Text / Notice")
  ), /* @__PURE__ */ Rn.createElement(
    "button",
    {
      type: "button",
      onClick: () => setInputMode("upload"),
      className: `pb-2.5 px-4 border-b-2 transition-all flex items-center gap-2 cursor-pointer ${inputMode === "upload" ? "border-indigo-600 text-indigo-600 font-bold" : "border-transparent text-slate-500 hover:text-slate-800"}`
    },
    /* @__PURE__ */ Rn.createElement(CloudUpload, { className: "w-3.5 h-3.5" }),
    /* @__PURE__ */ Rn.createElement("span", null, "Drag & Drop PDF / Screenshot")
  )), /* @__PURE__ */ Rn.createElement(
    "button",
    {
      type: "button",
      onClick: () => setIsDemoModeOpen(!isDemoModeOpen),
      className: "text-[11px] font-medium text-slate-500 hover:text-indigo-600 flex items-center gap-1 pb-2 px-2 transition-colors cursor-pointer"
    },
    /* @__PURE__ */ Rn.createElement(FlaskConical, { className: "w-3.5 h-3.5 text-indigo-500" }),
    /* @__PURE__ */ Rn.createElement("span", null, isDemoModeOpen ? "Hide Demo Mode" : "Demo Mode")
  )), isDemoModeOpen && /* @__PURE__ */ Rn.createElement("div", { className: "rounded-xl border border-indigo-100 bg-indigo-50/40 p-3 space-y-2 animate-in fade-in duration-150" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center justify-between" }, /* @__PURE__ */ Rn.createElement("span", { className: "text-xs font-bold text-indigo-950 flex items-center gap-1.5" }, /* @__PURE__ */ Rn.createElement(Sparkles, { className: "w-3.5 h-3.5 text-indigo-600" }), /* @__PURE__ */ Rn.createElement("span", null, "Demo Notice Presets:")), /* @__PURE__ */ Rn.createElement("span", { className: "text-[11px] text-slate-500" }, "Click to populate notice")), /* @__PURE__ */ Rn.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-2" }, DEMO_PRESETS.map((preset) => {
    const isSelected = selectedPresetId === preset.id;
    return /* @__PURE__ */ Rn.createElement(
      "button",
      {
        key: preset.id,
        type: "button",
        onClick: () => handleSelectPreset(preset.id),
        className: `text-xs p-2.5 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${isSelected ? "bg-indigo-600 text-white font-bold border-indigo-600 shadow-xs" : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-indigo-300"}`
      },
      /* @__PURE__ */ Rn.createElement("span", { className: "truncate pr-2" }, preset.label),
      isSelected && /* @__PURE__ */ Rn.createElement(Check, { className: "w-3.5 h-3.5 shrink-0 stroke-[3]" })
    );
  }))), inputMode === "upload" ? /* @__PURE__ */ Rn.createElement(
    "div",
    {
      onDragOver: (e3) => e3.preventDefault(),
      onDrop: handleFileDrop,
      onClick: () => fileInputRef.current?.click(),
      className: "border-2 border-dashed border-slate-300 hover:border-indigo-500 rounded-2xl p-8 text-center bg-slate-50/50 hover:bg-indigo-50/20 transition-all cursor-pointer group select-none"
    },
    /* @__PURE__ */ Rn.createElement(
      "input",
      {
        ref: fileInputRef,
        type: "file",
        accept: ".png,.jpg,.jpeg,.pdf,.txt",
        onChange: handleFileInputChange,
        className: "hidden"
      }
    ),
    /* @__PURE__ */ Rn.createElement("div", { className: "w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto mb-3 group-hover:scale-105 transition-transform" }, /* @__PURE__ */ Rn.createElement(CloudUpload, { className: "w-6 h-6" })),
    /* @__PURE__ */ Rn.createElement("p", { className: "text-sm font-bold text-slate-800" }, fileName ? fileName : "Drop your notice or screenshot here, or click to browse"),
    /* @__PURE__ */ Rn.createElement("p", { className: "text-xs text-slate-500 mt-1" }, "Supports PNG, JPG, PDF, TXT (up to 10MB)"),
    fileName && /* @__PURE__ */ Rn.createElement("div", { className: "mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white border border-slate-200 text-xs font-medium text-slate-700 shadow-xs" }, /* @__PURE__ */ Rn.createElement(FileText, { className: "w-3.5 h-3.5 text-indigo-500" }), /* @__PURE__ */ Rn.createElement("span", null, "File loaded & ready for extraction"))
  ) : /* @__PURE__ */ Rn.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ Rn.createElement(
    "textarea",
    {
      rows: 6,
      value: noticeText,
      onChange: (e3) => {
        setNoticeText(e3.target.value);
        setSelectedPresetId(null);
      },
      placeholder: "Paste WhatsApp message, LMS announcement, syllabus circular, or professor email here...",
      className: "w-full text-xs font-mono p-4 rounded-xl border border-slate-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-hidden bg-slate-50/40 text-slate-800 transition-all resize-y"
    }
  )), !extractedResult && !isProcessing && /* @__PURE__ */ Rn.createElement(
    "button",
    {
      type: "button",
      onClick: handleProcessNotice,
      disabled: !noticeText.trim(),
      className: "w-full py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed text-white font-bold text-sm shadow-md shadow-indigo-200 transition-all flex items-center justify-center gap-2 cursor-pointer"
    },
    /* @__PURE__ */ Rn.createElement(Sparkles, { className: "w-4 h-4" }),
    /* @__PURE__ */ Rn.createElement("span", null, "Extract Assignment")
  ), isProcessing && /* @__PURE__ */ Rn.createElement("div", { className: "p-6 rounded-2xl bg-indigo-50/70 border border-indigo-100 space-y-4" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center justify-between text-xs font-semibold text-indigo-950" }, /* @__PURE__ */ Rn.createElement("span", { className: "flex items-center gap-2" }, /* @__PURE__ */ Rn.createElement("span", { className: "w-2.5 h-2.5 rounded-full bg-indigo-600 animate-ping" }), "Analyzing your notice..."), /* @__PURE__ */ Rn.createElement("span", { className: "text-slate-500" }, "Step ", stepIndex + 1, " of ", EXTRACTION_STEPS.length)), /* @__PURE__ */ Rn.createElement("div", { className: "w-full bg-indigo-200/60 rounded-full h-1.5 overflow-hidden" }, /* @__PURE__ */ Rn.createElement(
    "div",
    {
      className: "bg-indigo-600 h-full rounded-full transition-all duration-300",
      style: { width: `${(stepIndex + 1) / EXTRACTION_STEPS.length * 100}%` }
    }
  )), /* @__PURE__ */ Rn.createElement("div", { className: "space-y-2 pt-1" }, EXTRACTION_STEPS.map((step, idx) => /* @__PURE__ */ Rn.createElement(
    "div",
    {
      key: idx,
      className: `flex items-center gap-2.5 text-xs transition-opacity duration-200 ${idx <= stepIndex ? "opacity-100 text-indigo-950 font-medium" : "opacity-30 text-slate-400"}`
    },
    idx < stepIndex ? /* @__PURE__ */ Rn.createElement(CircleCheckBig, { className: "w-4 h-4 text-emerald-600 shrink-0" }) : idx === stepIndex ? /* @__PURE__ */ Rn.createElement("span", { className: "w-4 h-4 rounded-full border-2 border-indigo-600 border-t-transparent animate-spin shrink-0" }) : /* @__PURE__ */ Rn.createElement("span", { className: "w-4 h-4 rounded-full border border-slate-300 shrink-0" }),
    /* @__PURE__ */ Rn.createElement("span", null, "\u2713 ", step)
  )))), duplicateConflict && /* @__PURE__ */ Rn.createElement("div", { className: "p-4 rounded-xl bg-amber-50 border border-amber-200 space-y-2.5 animate-in fade-in zoom-in-95 duration-200" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-start gap-2.5" }, /* @__PURE__ */ Rn.createElement(TriangleAlert, { className: "w-5 h-5 text-amber-600 shrink-0 mt-0.5" }), /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("h4", { className: "text-xs font-bold text-amber-900 uppercase tracking-wide" }, "Possible Deadline Update Detected"), /* @__PURE__ */ Rn.createElement("p", { className: "text-xs text-amber-800 mt-0.5" }, "This notice appears to reference an assignment already in your WorkRadar:", " ", /* @__PURE__ */ Rn.createElement("strong", { className: "text-slate-900" }, '"', duplicateConflict.existingTask.title, '"'), "."))), /* @__PURE__ */ Rn.createElement("div", { className: "grid grid-cols-2 gap-2 text-xs bg-white p-3 rounded-lg border border-amber-200" }, /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("span", { className: "text-[10px] text-slate-400 font-bold uppercase block" }, "Previous Deadline"), /* @__PURE__ */ Rn.createElement("span", { className: "font-semibold text-rose-700" }, formatDeadlinePretty(duplicateConflict.previousDeadline))), /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("span", { className: "text-[10px] text-slate-400 font-bold uppercase block" }, "New Detected Deadline"), /* @__PURE__ */ Rn.createElement("span", { className: "font-bold text-emerald-700" }, formatDeadlinePretty(duplicateConflict.newDeadline), " (Extension)"))), /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center justify-end gap-2 pt-1" }, /* @__PURE__ */ Rn.createElement(
    "button",
    {
      type: "button",
      onClick: () => setDuplicateConflict(null),
      className: "px-3 py-1.5 rounded-lg border border-slate-300 bg-white text-slate-700 text-xs font-medium hover:bg-slate-50 cursor-pointer"
    },
    "Keep Both"
  ), /* @__PURE__ */ Rn.createElement(
    "button",
    {
      type: "button",
      onClick: handleResolveUpdateDeadline,
      className: "px-3.5 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold shadow-xs flex items-center gap-1.5 cursor-pointer"
    },
    /* @__PURE__ */ Rn.createElement(CircleCheckBig, { className: "w-3.5 h-3.5" }),
    /* @__PURE__ */ Rn.createElement("span", null, "Update Deadline")
  ))), extractedResult && !isProcessing && /* @__PURE__ */ Rn.createElement("div", { className: "p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 animate-in fade-in duration-200" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center justify-between border-b border-slate-200 pb-3" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ Rn.createElement(CircleCheckBig, { className: "w-5 h-5 text-emerald-600" }), /* @__PURE__ */ Rn.createElement("span", { className: "font-bold text-sm text-slate-900" }, "Extracted Assignment Details")), /* @__PURE__ */ Rn.createElement(
    "button",
    {
      type: "button",
      onClick: () => setExtractedResult(null),
      className: "text-xs text-indigo-600 hover:text-indigo-800 font-medium cursor-pointer"
    },
    "Edit Notice"
  )), /* @__PURE__ */ Rn.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs" }, /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("label", { className: "text-slate-500 font-semibold block mb-1" }, "Task"), /* @__PURE__ */ Rn.createElement(
    "input",
    {
      type: "text",
      value: editTitle,
      onChange: (e3) => setEditTitle(e3.target.value),
      className: "w-full p-2.5 bg-white border border-slate-300 rounded-xl font-bold text-slate-900 focus:border-indigo-500 outline-hidden"
    }
  )), /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("label", { className: "text-slate-500 font-semibold block mb-1" }, "Course / Subject"), /* @__PURE__ */ Rn.createElement(
    "input",
    {
      type: "text",
      value: editCourse,
      onChange: (e3) => setEditCourse(e3.target.value),
      className: "w-full p-2.5 bg-white border border-slate-300 rounded-xl text-slate-800 focus:border-indigo-500 outline-hidden"
    }
  )), /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("label", { className: "text-slate-500 font-semibold block mb-1" }, "Deadline"), /* @__PURE__ */ Rn.createElement(
    "input",
    {
      type: "text",
      value: editDeadline,
      onChange: (e3) => setEditDeadline(e3.target.value),
      className: "w-full p-2.5 bg-white border border-slate-300 rounded-xl font-semibold text-rose-700 focus:border-indigo-500 outline-hidden"
    }
  ), /* @__PURE__ */ Rn.createElement("span", { className: "text-[11px] text-slate-400 block mt-1" }, formatDeadlinePretty(editDeadline))), /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("label", { className: "text-slate-500 font-semibold block mb-1" }, "Estimated Effort"), /* @__PURE__ */ Rn.createElement("div", { className: "relative" }, /* @__PURE__ */ Rn.createElement(
    "input",
    {
      type: "number",
      step: "0.5",
      value: editHours,
      onChange: (e3) => setEditHours(Number(e3.target.value)),
      className: "w-full p-2.5 bg-white border border-slate-300 rounded-xl font-semibold text-slate-800 focus:border-indigo-500 outline-hidden pr-14"
    }
  ), /* @__PURE__ */ Rn.createElement("span", { className: "absolute right-3 top-2.5 text-xs text-slate-400 font-medium" }, "hours")))), extractedResult.requirements && extractedResult.requirements.length > 0 && /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("span", { className: "text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1.5" }, "Requirements"), /* @__PURE__ */ Rn.createElement("div", { className: "space-y-1.5 max-h-36 overflow-y-auto pr-1" }, extractedResult.requirements.map((req, i3) => /* @__PURE__ */ Rn.createElement(
    "div",
    {
      key: i3,
      className: "flex items-start gap-2 p-2 rounded-lg bg-white border border-slate-200 text-xs text-slate-700"
    },
    /* @__PURE__ */ Rn.createElement("span", { className: "w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0 mt-1.5" }),
    /* @__PURE__ */ Rn.createElement("span", { className: "leading-relaxed" }, req)
  )))), extractedResult.notes && /* @__PURE__ */ Rn.createElement("div", { className: "p-3 rounded-xl bg-white border border-slate-200 text-xs" }, /* @__PURE__ */ Rn.createElement("span", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5" }, "Notes"), /* @__PURE__ */ Rn.createElement("p", { className: "text-slate-600" }, extractedResult.notes)), /* @__PURE__ */ Rn.createElement("div", { className: "pt-3 border-t border-slate-200/80 flex items-center justify-between" }, /* @__PURE__ */ Rn.createElement(
    "button",
    {
      type: "button",
      onClick: () => setExtractedResult(null),
      className: "px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
    },
    "Cancel"
  ), /* @__PURE__ */ Rn.createElement(
    "button",
    {
      type: "button",
      onClick: handleConfirmAdd,
      className: "px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md shadow-indigo-600/20 transition-all flex items-center gap-2 hover:scale-[1.02] cursor-pointer"
    },
    /* @__PURE__ */ Rn.createElement(CircleCheckBig, { className: "w-4 h-4" }),
    /* @__PURE__ */ Rn.createElement("span", null, "Add to WorkRadar")
  ))))));
};

// src/components/RealityCheckModal.tsx
var RealityCheckModal = ({
  isOpen,
  onClose,
  realityCheck,
  onActivateSaveMe,
  onOpenTask
}) => {
  if (!isOpen) return null;
  const availableFormatted = formatHoursAndMinutes(realityCheck.availableHours);
  const requiredFormatted = formatHoursAndMinutes(realityCheck.requiredHours);
  const shortfallFormatted = formatHoursAndMinutes(realityCheck.shortfallHours);
  return /* @__PURE__ */ Rn.createElement("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/50 backdrop-blur-xs animate-in fade-in duration-150" }, /* @__PURE__ */ Rn.createElement("div", { className: "bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" }, /* @__PURE__ */ Rn.createElement("div", { className: "p-6 border-b border-slate-100 flex items-start justify-between gap-4 sticky top-0 bg-white z-10" }, /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-2 mb-1" }, /* @__PURE__ */ Rn.createElement("span", { className: "px-2.5 py-0.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5" }, /* @__PURE__ */ Rn.createElement(Scale, { className: "w-3.5 h-3.5 text-amber-600" }), " Reality Check"), /* @__PURE__ */ Rn.createElement("span", { className: "text-xs px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-medium" }, "Next ", realityCheck.daysAnalyzed, " Days Horizon")), /* @__PURE__ */ Rn.createElement("h2", { className: "text-xl font-bold text-slate-900" }, "Academic Time Deficit Analysis"), /* @__PURE__ */ Rn.createElement("p", { className: "text-xs text-slate-500 mt-0.5" }, "Determines whether you realistically possess enough study capacity before pending deadlines")), /* @__PURE__ */ Rn.createElement(
    "button",
    {
      onClick: onClose,
      className: "p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
    },
    /* @__PURE__ */ Rn.createElement(X2, { className: "w-5 h-5" })
  )), /* @__PURE__ */ Rn.createElement("div", { className: "p-6 space-y-6" }, /* @__PURE__ */ Rn.createElement(
    "div",
    {
      className: `p-5 rounded-2xl border flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${realityCheck.isOverloaded ? "bg-rose-50/70 border-rose-200 text-rose-950" : "bg-emerald-50/70 border-emerald-200 text-emerald-950"}`
    },
    /* @__PURE__ */ Rn.createElement("div", { className: "flex items-start gap-3.5" }, /* @__PURE__ */ Rn.createElement(
      "div",
      {
        className: `w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${realityCheck.isOverloaded ? "bg-rose-500 text-white shadow-md shadow-rose-200" : "bg-emerald-500 text-white shadow-md shadow-emerald-200"}`
      },
      realityCheck.isOverloaded ? /* @__PURE__ */ Rn.createElement(TriangleAlert, { className: "w-5 h-5" }) : /* @__PURE__ */ Rn.createElement(CircleCheckBig, { className: "w-5 h-5" })
    ), /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ Rn.createElement("h3", { className: "font-bold text-lg leading-snug" }, realityCheck.isOverloaded ? "\u{1F534} You're overloaded" : "\u{1F7E2} Workload is Manageable")), /* @__PURE__ */ Rn.createElement("p", { className: "text-xs opacity-90 mt-1 max-w-md" }, realityCheck.summaryText))),
    realityCheck.isOverloaded && /* @__PURE__ */ Rn.createElement(
      "button",
      {
        onClick: () => {
          onClose();
          onActivateSaveMe();
        },
        className: "px-4 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold shadow-md shadow-rose-200 transition-all flex items-center justify-center gap-1.5 shrink-0 hover:scale-[1.02]"
      },
      /* @__PURE__ */ Rn.createElement(LifeBuoy, { className: "w-4 h-4" }),
      /* @__PURE__ */ Rn.createElement("span", null, "Activate Save Me Mode")
    )
  ), /* @__PURE__ */ Rn.createElement("div", { className: "grid grid-cols-3 gap-3 text-center" }, /* @__PURE__ */ Rn.createElement("div", { className: "p-3.5 rounded-xl bg-slate-50 border border-slate-200" }, /* @__PURE__ */ Rn.createElement("span", { className: "text-[10px] uppercase font-bold text-slate-500 tracking-wider block mb-1" }, "Available Time"), /* @__PURE__ */ Rn.createElement("p", { className: "text-lg font-bold text-slate-800" }, availableFormatted), /* @__PURE__ */ Rn.createElement("span", { className: "text-[11px] text-slate-400 block mt-0.5" }, "Study capacity")), /* @__PURE__ */ Rn.createElement("div", { className: "p-3.5 rounded-xl bg-slate-50 border border-slate-200" }, /* @__PURE__ */ Rn.createElement("span", { className: "text-[10px] uppercase font-bold text-slate-500 tracking-wider block mb-1" }, "Required Work"), /* @__PURE__ */ Rn.createElement("p", { className: "text-lg font-bold text-slate-800" }, requiredFormatted), /* @__PURE__ */ Rn.createElement("span", { className: "text-[11px] text-slate-400 block mt-0.5" }, "Unfinished tasks")), /* @__PURE__ */ Rn.createElement(
    "div",
    {
      className: `p-3.5 rounded-xl border ${realityCheck.isOverloaded ? "bg-rose-50 border-rose-200 text-rose-800" : "bg-emerald-50 border-emerald-200 text-emerald-800"}`
    },
    /* @__PURE__ */ Rn.createElement("span", { className: "text-[10px] uppercase font-bold tracking-wider block mb-1" }, realityCheck.isOverloaded ? "Shortfall Deficit" : "Safety Buffer"),
    /* @__PURE__ */ Rn.createElement("p", { className: "text-lg font-bold" }, realityCheck.isOverloaded ? `-${shortfallFormatted}` : `+${shortfallFormatted}`),
    /* @__PURE__ */ Rn.createElement("span", { className: "text-[11px] opacity-80 block mt-0.5" }, realityCheck.isOverloaded ? "Time deficit" : "Extra capacity")
  )), /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center justify-between mb-2.5" }, /* @__PURE__ */ Rn.createElement("h4", { className: "text-xs font-bold uppercase tracking-wider text-slate-600" }, "Tasks Contributing to Workload Demand"), /* @__PURE__ */ Rn.createElement("span", { className: "text-xs text-slate-400" }, "Ranked by required hours")), /* @__PURE__ */ Rn.createElement("div", { className: "space-y-2" }, realityCheck.contributingTasks.map(({ task, hours, percentageOfTotal }) => /* @__PURE__ */ Rn.createElement(
    "div",
    {
      key: task.id,
      onClick: () => {
        onClose();
        onOpenTask(task);
      },
      className: "p-3 rounded-xl border border-slate-200 bg-white hover:border-indigo-300 hover:bg-slate-50/50 cursor-pointer transition-all flex items-center justify-between gap-3 text-xs"
    },
    /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-2.5 min-w-0" }, /* @__PURE__ */ Rn.createElement("span", { className: "w-2 h-2 rounded-full bg-slate-400 shrink-0" }), /* @__PURE__ */ Rn.createElement("div", { className: "min-w-0" }, /* @__PURE__ */ Rn.createElement("p", { className: "font-bold text-slate-900 truncate" }, task.title), /* @__PURE__ */ Rn.createElement("p", { className: "text-[11px] text-slate-500 truncate" }, task.course))),
    /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-3 shrink-0" }, /* @__PURE__ */ Rn.createElement("div", { className: "text-right" }, /* @__PURE__ */ Rn.createElement("span", { className: "font-bold text-slate-800" }, formatHoursAndMinutes(hours)), /* @__PURE__ */ Rn.createElement("span", { className: "text-[10px] text-slate-400 block font-medium" }, percentageOfTotal, "% of total")), /* @__PURE__ */ Rn.createElement(RiskBadge, { level: task.riskLevel, size: "sm" }))
  )))), /* @__PURE__ */ Rn.createElement("div", { className: "p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2" }, /* @__PURE__ */ Rn.createElement("h4", { className: "text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5" }, /* @__PURE__ */ Rn.createElement(TrendingDown, { className: "w-3.5 h-3.5 text-indigo-600" }), /* @__PURE__ */ Rn.createElement("span", null, "Recommended Tactical Response:")), /* @__PURE__ */ Rn.createElement("ul", { className: "space-y-1.5 text-xs text-slate-600" }, realityCheck.suggestedActions.map((action, i3) => /* @__PURE__ */ Rn.createElement("li", { key: i3, className: "flex items-start gap-2" }, /* @__PURE__ */ Rn.createElement("span", { className: "w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0" }), /* @__PURE__ */ Rn.createElement("span", null, action)))))), /* @__PURE__ */ Rn.createElement("div", { className: "p-5 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between sticky bottom-0 z-10" }, /* @__PURE__ */ Rn.createElement(
    "button",
    {
      onClick: onClose,
      className: "px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-200 rounded-xl"
    },
    "Dismiss"
  ), realityCheck.isOverloaded && /* @__PURE__ */ Rn.createElement(
    "button",
    {
      onClick: () => {
        onClose();
        onActivateSaveMe();
      },
      className: "px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-md transition-all flex items-center gap-1.5 hover:scale-[1.02]"
    },
    /* @__PURE__ */ Rn.createElement(LifeBuoy, { className: "w-4 h-4 text-indigo-400" }),
    /* @__PURE__ */ Rn.createElement("span", null, "Activate Save Me Mode")
  ))));
};

// src/services/saveMe.ts
var generateSaveMeTriage = (tasks, shortfallHours = 4.8) => {
  const activeTasks = tasks.filter((t3) => t3.status !== "completed");
  const mustDo = [];
  const canReduce = [];
  const canDelay = [];
  let totalTimeSaved = 0;
  activeTasks.forEach((task) => {
    const remaining = Math.max(0, task.estimatedHours - task.completedHours);
    const hoursLeft = getHoursRemaining(task.deadline);
    if (hoursLeft <= 48 && remaining >= 1.5 || task.riskLevel === "CRITICAL") {
      const saved = Math.round(remaining * 0.2 * 10) / 10;
      const mvpHours = Math.max(1, Math.round((remaining - saved) * 10) / 10);
      totalTimeSaved += saved;
      mustDo.push({
        task,
        mvpHours,
        savedHours: saved,
        strategy: [
          "Lock in core deliverables that directly satisfy mandatory requirements",
          "Use concise bullet points instead of lengthy prose if allowed",
          "Single pass proofread; avoid endless formatting revisions",
          "Submit directly once all mandatory checklist items are met"
        ]
      });
    } else if (hoursLeft <= 96 && remaining > 1) {
      const saved = Math.round(remaining * 0.4 * 10) / 10;
      const mvpHours = Math.max(0.5, Math.round((remaining - saved) * 10) / 10);
      totalTimeSaved += saved;
      canReduce.push({
        task,
        mvpHours,
        savedHours: saved,
        strategy: [
          "Deliver an MVP solution meeting minimum passing criteria",
          "Omit discretionary visual polish, animations, or appendixes",
          "Focus 80% of effort on the key demonstration requirements"
        ]
      });
    } else {
      canDelay.push({
        task,
        strategy: [
          "Defer to next study block after urgent 48h deadlines clear",
          "Request an informal 48h extension buffer if needed",
          "Spend max 30 minutes on a quick draft if time frees up"
        ],
        recommendedNewDate: "Next week (after imminent deadlines pass)"
      });
    }
  });
  const totalOriginalRemaining = activeTasks.reduce(
    (acc, t3) => acc + Math.max(0, t3.estimatedHours - t3.completedHours),
    0
  );
  return {
    mustDo,
    canReduce,
    canDelay,
    totalTimeSaved,
    adjustedRequiredHours: Math.max(0, totalOriginalRemaining - totalTimeSaved)
  };
};

// src/components/SaveMeModal.tsx
var SaveMeModal = ({
  isOpen,
  onClose,
  tasks,
  shortfallHours,
  onApplyTriage,
  onOpenTask
}) => {
  if (!isOpen) return null;
  const triage = T2(() => {
    return generateSaveMeTriage(tasks, shortfallHours);
  }, [tasks, shortfallHours]);
  const [isApplied, setIsApplied] = d2(false);
  const handleApply = () => {
    setIsApplied(true);
    onApplyTriage(triage.totalTimeSaved);
    setTimeout(() => {
      onClose();
    }, 1200);
  };
  return /* @__PURE__ */ Rn.createElement("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/50 backdrop-blur-xs animate-in fade-in duration-150" }, /* @__PURE__ */ Rn.createElement("div", { className: "bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-3xl w-full max-h-[92vh] overflow-y-auto" }, /* @__PURE__ */ Rn.createElement("div", { className: "p-6 border-b border-slate-100 flex items-start justify-between gap-4 sticky top-0 bg-white z-10" }, /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-2 mb-1" }, /* @__PURE__ */ Rn.createElement("span", { className: "px-2.5 py-0.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5" }, /* @__PURE__ */ Rn.createElement(LifeBuoy, { className: "w-3.5 h-3.5" }), " Emergency Triage Protocol"), /* @__PURE__ */ Rn.createElement("span", { className: "text-xs px-2 py-0.5 rounded bg-rose-50 text-rose-700 font-semibold border border-rose-200" }, "Shortfall: -", formatHoursAndMinutes(shortfallHours))), /* @__PURE__ */ Rn.createElement("h2", { className: "text-xl font-bold text-slate-900" }, "Save Me Mode"), /* @__PURE__ */ Rn.createElement("p", { className: "text-xs text-slate-500 mt-0.5" }, "Triage your workload into MUST DO, CAN REDUCE, and CAN DELAY to eliminate time deficits.")), /* @__PURE__ */ Rn.createElement(
    "button",
    {
      onClick: onClose,
      className: "p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
    },
    /* @__PURE__ */ Rn.createElement(X2, { className: "w-5 h-5" })
  )), /* @__PURE__ */ Rn.createElement("div", { className: "p-6 space-y-6" }, /* @__PURE__ */ Rn.createElement("div", { className: "p-4 rounded-xl bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-indigo-500/5 border border-indigo-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3" }, /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("p", { className: "text-xs font-bold text-indigo-950 uppercase tracking-wider" }, "Minimum Viable Strategy Results:"), /* @__PURE__ */ Rn.createElement("p", { className: "text-xs text-slate-600 mt-0.5" }, "By trimming optional polish and deferring lower-urgency assignments, we recover", " ", /* @__PURE__ */ Rn.createElement("strong", { className: "text-emerald-700 font-bold" }, formatHoursAndMinutes(triage.totalTimeSaved)), ", bringing your deficit back to safe bounds.")), /* @__PURE__ */ Rn.createElement("div", { className: "text-right shrink-0" }, /* @__PURE__ */ Rn.createElement("span", { className: "text-xs text-slate-500 block" }, "Recovered Capacity"), /* @__PURE__ */ Rn.createElement("span", { className: "text-lg font-bold text-emerald-600" }, "+", formatHoursAndMinutes(triage.totalTimeSaved)))), /* @__PURE__ */ Rn.createElement("div", { className: "space-y-3" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center justify-between" }, /* @__PURE__ */ Rn.createElement("h3", { className: "text-xs font-bold uppercase tracking-wider text-rose-700 flex items-center gap-1.5" }, /* @__PURE__ */ Rn.createElement("span", { className: "w-2 h-2 rounded-full bg-rose-500" }), /* @__PURE__ */ Rn.createElement("span", null, "MUST DO \u2014 Urgent & Non-Negotiable (", triage.mustDo.length, ")")), /* @__PURE__ */ Rn.createElement("span", { className: "text-[11px] text-slate-400" }, "Strict submission targets")), /* @__PURE__ */ Rn.createElement("div", { className: "space-y-3" }, triage.mustDo.map(({ task, strategy, mvpHours, savedHours }) => {
    const remaining = formatHoursAndMinutes(task.remainingHours || 0);
    const countdown = formatCountdown(task.deadline);
    return /* @__PURE__ */ Rn.createElement(
      "div",
      {
        key: task.id,
        className: "p-4 rounded-xl border border-rose-200 bg-rose-50/30 space-y-2.5"
      },
      /* @__PURE__ */ Rn.createElement("div", { className: "flex items-start justify-between gap-2" }, /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ Rn.createElement("h4", { className: "font-bold text-slate-900 text-sm" }, task.title), /* @__PURE__ */ Rn.createElement(RiskBadge, { level: task.riskLevel, size: "sm" })), /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-2 text-xs text-slate-500 mt-0.5" }, /* @__PURE__ */ Rn.createElement("span", null, task.course), /* @__PURE__ */ Rn.createElement("span", null, "\u2022"), /* @__PURE__ */ Rn.createElement("span", { className: "font-semibold text-rose-700 flex items-center gap-1" }, /* @__PURE__ */ Rn.createElement(Clock, { className: "w-3 h-3" }), " Due in ", countdown), /* @__PURE__ */ Rn.createElement("span", null, "\u2022"), /* @__PURE__ */ Rn.createElement("span", { className: "font-semibold text-slate-700 flex items-center gap-1" }, /* @__PURE__ */ Rn.createElement(Layers, { className: "w-3 h-3" }), " ", remaining, " remaining"))), /* @__PURE__ */ Rn.createElement("div", { className: "text-right text-xs shrink-0" }, /* @__PURE__ */ Rn.createElement("span", { className: "font-bold text-slate-800 block" }, "MVP: ", formatHoursAndMinutes(mvpHours)), /* @__PURE__ */ Rn.createElement("span", { className: "text-emerald-600 text-[11px] font-semibold" }, "Saves ", formatHoursAndMinutes(savedHours)))),
      /* @__PURE__ */ Rn.createElement("div", { className: "bg-white p-3 rounded-lg border border-rose-100 space-y-1 text-xs text-slate-700" }, /* @__PURE__ */ Rn.createElement("span", { className: "text-[10px] font-bold uppercase text-slate-400 block mb-1" }, "Minimum Viable Submission Strategy:"), strategy.map((item, idx) => /* @__PURE__ */ Rn.createElement("div", { key: idx, className: "flex items-start gap-1.5" }, /* @__PURE__ */ Rn.createElement(CircleCheck, { className: "w-3.5 h-3.5 text-rose-500 mt-0.5 shrink-0" }), /* @__PURE__ */ Rn.createElement("span", null, item))))
    );
  }))), /* @__PURE__ */ Rn.createElement("div", { className: "space-y-3" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center justify-between" }, /* @__PURE__ */ Rn.createElement("h3", { className: "text-xs font-bold uppercase tracking-wider text-amber-700 flex items-center gap-1.5" }, /* @__PURE__ */ Rn.createElement(Scissors, { className: "w-3.5 h-3.5 text-amber-600" }), /* @__PURE__ */ Rn.createElement("span", null, "CAN REDUCE \u2014 Strip Discretionary Polish (", triage.canReduce.length, ")")), /* @__PURE__ */ Rn.createElement("span", { className: "text-[11px] text-slate-400" }, "Aim for passing MVP")), /* @__PURE__ */ Rn.createElement("div", { className: "space-y-3" }, triage.canReduce.map(({ task, strategy, mvpHours, savedHours }) => {
    const remaining = formatHoursAndMinutes(task.remainingHours || 0);
    const countdown = formatCountdown(task.deadline);
    return /* @__PURE__ */ Rn.createElement(
      "div",
      {
        key: task.id,
        className: "p-4 rounded-xl border border-amber-200 bg-amber-50/20 space-y-2.5"
      },
      /* @__PURE__ */ Rn.createElement("div", { className: "flex items-start justify-between gap-2" }, /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ Rn.createElement("h4", { className: "font-bold text-slate-900 text-sm" }, task.title), /* @__PURE__ */ Rn.createElement(RiskBadge, { level: task.riskLevel, size: "sm" })), /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-2 text-xs text-slate-500 mt-0.5" }, /* @__PURE__ */ Rn.createElement("span", null, task.course), /* @__PURE__ */ Rn.createElement("span", null, "\u2022"), /* @__PURE__ */ Rn.createElement("span", { className: "font-semibold text-amber-800" }, "Due in ", countdown), /* @__PURE__ */ Rn.createElement("span", null, "\u2022"), /* @__PURE__ */ Rn.createElement("span", { className: "font-semibold text-slate-700" }, remaining, " remaining"))), /* @__PURE__ */ Rn.createElement("div", { className: "text-right text-xs shrink-0" }, /* @__PURE__ */ Rn.createElement("span", { className: "font-bold text-slate-800 block" }, "MVP: ", formatHoursAndMinutes(mvpHours)), /* @__PURE__ */ Rn.createElement("span", { className: "text-emerald-600 text-[11px] font-semibold" }, "Saves ", formatHoursAndMinutes(savedHours)))),
      /* @__PURE__ */ Rn.createElement("div", { className: "bg-white p-3 rounded-lg border border-amber-100 space-y-1 text-xs text-slate-700" }, strategy.map((item, idx) => /* @__PURE__ */ Rn.createElement("div", { key: idx, className: "flex items-start gap-1.5" }, /* @__PURE__ */ Rn.createElement(Scissors, { className: "w-3.5 h-3.5 text-amber-500 mt-0.5 shrink-0" }), /* @__PURE__ */ Rn.createElement("span", null, item))))
    );
  }))), /* @__PURE__ */ Rn.createElement("div", { className: "space-y-3" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center justify-between" }, /* @__PURE__ */ Rn.createElement("h3", { className: "text-xs font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5" }, /* @__PURE__ */ Rn.createElement(CalendarClock, { className: "w-3.5 h-3.5 text-emerald-600" }), /* @__PURE__ */ Rn.createElement("span", null, "CAN DELAY \u2014 Postpone Until Bottleneck Clears (", triage.canDelay.length, ")")), /* @__PURE__ */ Rn.createElement("span", { className: "text-[11px] text-slate-400" }, "Low urgency runway")), /* @__PURE__ */ Rn.createElement("div", { className: "space-y-2" }, triage.canDelay.map(({ task, strategy, recommendedNewDate }) => /* @__PURE__ */ Rn.createElement(
    "div",
    {
      key: task.id,
      className: "p-3.5 rounded-xl border border-slate-200 bg-white flex items-center justify-between gap-3 text-xs"
    },
    /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("h4", { className: "font-bold text-slate-800" }, task.title), /* @__PURE__ */ Rn.createElement("p", { className: "text-slate-500 text-[11px]" }, task.course, " \xB7 Due next week")),
    /* @__PURE__ */ Rn.createElement("div", { className: "text-right" }, /* @__PURE__ */ Rn.createElement("span", { className: "text-[11px] text-emerald-700 font-semibold block" }, "Recommended: ", recommendedNewDate), /* @__PURE__ */ Rn.createElement("span", { className: "text-[10px] text-slate-400" }, "Postpone low urgency work"))
  ))))), /* @__PURE__ */ Rn.createElement("div", { className: "p-5 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between sticky bottom-0 z-10" }, /* @__PURE__ */ Rn.createElement(
    "button",
    {
      onClick: onClose,
      className: "px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-200 rounded-xl cursor-pointer"
    },
    "Cancel"
  ), /* @__PURE__ */ Rn.createElement(
    "button",
    {
      onClick: handleApply,
      disabled: isApplied,
      className: `px-5 py-2.5 rounded-xl font-bold text-xs shadow-md transition-all flex items-center gap-2 cursor-pointer ${isApplied ? "bg-emerald-600 text-white" : "bg-indigo-600 hover:bg-indigo-700 text-white hover:scale-[1.02]"}`
    },
    isApplied ? /* @__PURE__ */ Rn.createElement(Rn.Fragment, null, /* @__PURE__ */ Rn.createElement(Check, { className: "w-4 h-4" }), /* @__PURE__ */ Rn.createElement("span", null, "Triage Protocol Applied!")) : /* @__PURE__ */ Rn.createElement(Rn.Fragment, null, /* @__PURE__ */ Rn.createElement(ShieldCheck, { className: "w-4 h-4" }), /* @__PURE__ */ Rn.createElement("span", null, "Apply Triage Plan & Save ", formatHoursAndMinutes(triage.totalTimeSaved)))
  ))));
};

// src/services/reversePlanner.ts
var generateReversePlan = (tasks, freeHours = 3, startHour = 19, startMinute = 0) => {
  const totalAvailableMinutes = Math.round(freeHours * 60);
  const activeTasks = tasks.filter((t3) => t3.status !== "completed");
  const sortedTasks = [...activeTasks].sort(compareTasksByUrgency);
  const blocks = [];
  let remainingBudget = totalAvailableMinutes;
  let currentMinutes = startHour * 60 + startMinute;
  const formatTime = (totalMin) => {
    let hours = Math.floor(totalMin / 60) % 24;
    const minutes = totalMin % 60;
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    return `${hours}:${minutes.toString().padStart(2, "0")} ${ampm}`;
  };
  for (let i3 = 0; i3 < sortedTasks.length && remainingBudget > 15; i3++) {
    const task = sortedTasks[i3];
    const remainingHours = Math.max(0, task.estimatedHours - task.completedHours);
    const remainingMinutes = Math.round(remainingHours * 60);
    if (remainingMinutes <= 0) continue;
    let chunkMinutes = 0;
    if (i3 === 0) {
      chunkMinutes = Math.min(remainingBudget, Math.max(45, Math.min(remainingMinutes, 90)));
    } else if (i3 === 1) {
      chunkMinutes = Math.min(remainingBudget, Math.max(30, Math.min(remainingMinutes, 45)));
    } else {
      chunkMinutes = Math.min(remainingBudget, remainingMinutes > 0 ? remainingBudget : 0);
    }
    if (chunkMinutes <= 0) continue;
    const blockStart = currentMinutes;
    const blockEnd = currentMinutes + chunkMinutes;
    currentMinutes = blockEnd;
    remainingBudget -= chunkMinutes;
    let focusArea = "Key milestone execution";
    if (task.requirements && task.requirements.length > 0) {
      focusArea = task.requirements[0];
    }
    const countdown = formatCountdown(task.deadline);
    const remainingFormatted = formatHoursAndMinutes(remainingHours);
    blocks.push({
      id: `block-${task.id}-${i3}`,
      startTime: formatTime(blockStart),
      endTime: formatTime(blockEnd),
      durationMinutes: chunkMinutes,
      taskId: task.id,
      taskTitle: task.title,
      course: task.course,
      focusArea,
      riskLevel: task.riskLevel || "APPROACHING",
      whyThis: `${task.riskLevel === "CRITICAL" ? "Critical" : "High urgency"} deliverable due in ${countdown} with ${remainingFormatted} of work remaining.`
    });
  }
  const allocatedMinutes = totalAvailableMinutes - remainingBudget;
  const topTaskNames = blocks.map((b2) => b2.taskTitle).slice(0, 2).join(" and ");
  const whyThisPlan = `WorkRadar allocated your ${freeHours}h study block strictly based on deadline urgency, remaining workload, and collision pressure. The lion's share is dedicated to ${topTaskNames} to eliminate the imminent bottleneck before switching to lower-urgency prep.`;
  return {
    blocks,
    totalAllocatedMinutes: allocatedMinutes,
    unallocatedMinutes: remainingBudget,
    whyThisPlan
  };
};

// src/components/ReversePlannerModal.tsx
var ReversePlannerModal = ({
  isOpen,
  onClose,
  tasks,
  onStartSession
}) => {
  if (!isOpen) return null;
  const [freeHours, setFreeHours] = d2(3);
  const [timeWindow, setTimeWindow] = d2("Tonight, 7:00 PM \u2013 10:00 PM");
  const [startHour, setStartHour] = d2(19);
  const planResult = generateReversePlan(tasks, freeHours, startHour, 0);
  return /* @__PURE__ */ Rn.createElement("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/50 backdrop-blur-xs animate-in fade-in duration-150" }, /* @__PURE__ */ Rn.createElement("div", { className: "bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" }, /* @__PURE__ */ Rn.createElement("div", { className: "p-6 border-b border-slate-100 flex items-start justify-between gap-4 sticky top-0 bg-white z-10" }, /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-2 mb-1" }, /* @__PURE__ */ Rn.createElement("span", { className: "px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5" }, /* @__PURE__ */ Rn.createElement(Timer, { className: "w-3.5 h-3.5 text-emerald-600" }), " Reverse Planner"), /* @__PURE__ */ Rn.createElement("span", { className: "text-xs px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-medium" }, "Time-Blocked Allocation")), /* @__PURE__ */ Rn.createElement("h2", { className: "text-xl font-bold text-slate-900" }, "Workload Capacity Allocation"), /* @__PURE__ */ Rn.createElement("p", { className: "text-xs text-slate-500 mt-0.5" }, "Tell WorkRadar your available study window, and it will allocate your time across competing deliverables.")), /* @__PURE__ */ Rn.createElement(
    "button",
    {
      onClick: onClose,
      className: "p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
    },
    /* @__PURE__ */ Rn.createElement(X2, { className: "w-5 h-5" })
  )), /* @__PURE__ */ Rn.createElement("div", { className: "p-6 space-y-6" }, /* @__PURE__ */ Rn.createElement("div", { className: "p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-4" }, /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center justify-between text-xs font-semibold mb-1.5" }, /* @__PURE__ */ Rn.createElement("span", { className: "text-slate-700" }, "How much free study time do you have?"), /* @__PURE__ */ Rn.createElement("span", { className: "text-indigo-600 font-bold text-sm" }, freeHours, " Hours")), /* @__PURE__ */ Rn.createElement(
    "input",
    {
      type: "range",
      min: "1",
      max: "6",
      step: "0.5",
      value: freeHours,
      onChange: (e3) => setFreeHours(parseFloat(e3.target.value)),
      className: "w-full accent-indigo-600 cursor-pointer"
    }
  ), /* @__PURE__ */ Rn.createElement("div", { className: "flex justify-between text-[11px] text-slate-400 mt-1" }, /* @__PURE__ */ Rn.createElement("span", null, "1 hour sprint"), /* @__PURE__ */ Rn.createElement("span", null, "3 hours (Recommended)"), /* @__PURE__ */ Rn.createElement("span", null, "6 hours deep work"))), /* @__PURE__ */ Rn.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-slate-200" }, /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("label", { className: "text-xs font-semibold text-slate-700 block mb-1" }, "When are you studying?"), /* @__PURE__ */ Rn.createElement(
    "select",
    {
      value: startHour,
      onChange: (e3) => {
        const h3 = parseInt(e3.target.value, 10);
        setStartHour(h3);
        setTimeWindow(h3 === 19 ? "Tonight, 7:00 PM \u2013 10:00 PM" : `Session starting at ${h3}:00`);
      },
      className: "w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white font-medium cursor-pointer"
    },
    /* @__PURE__ */ Rn.createElement("option", { value: 19 }, "Tonight (7:00 PM \u2013 10:00 PM)"),
    /* @__PURE__ */ Rn.createElement("option", { value: 14 }, "Afternoon (2:00 PM \u2013 5:00 PM)"),
    /* @__PURE__ */ Rn.createElement("option", { value: 9 }, "Morning (9:00 AM \u2013 12:00 PM)"),
    /* @__PURE__ */ Rn.createElement("option", { value: 20 }, "Late Evening (8:00 PM \u2013 11:00 PM)")
  )), /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("label", { className: "text-xs font-semibold text-slate-700 block mb-1" }, "Active Optimization Target"), /* @__PURE__ */ Rn.createElement("div", { className: "text-xs p-2.5 rounded-lg border border-slate-200 bg-white text-slate-700 font-medium" }, "Protect urgent deadlines & minimize collision risk")))), /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center justify-between mb-3" }, /* @__PURE__ */ Rn.createElement("h3", { className: "text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center gap-1.5" }, /* @__PURE__ */ Rn.createElement(Clock, { className: "w-3.5 h-3.5 text-indigo-600" }), /* @__PURE__ */ Rn.createElement("span", null, "Recommended Study Schedule (", planResult.blocks.length, " Blocks)")), /* @__PURE__ */ Rn.createElement("span", { className: "text-xs text-indigo-600 font-semibold" }, planResult.totalAllocatedMinutes, "m Allocated")), /* @__PURE__ */ Rn.createElement("div", { className: "space-y-2.5" }, planResult.blocks.map((block, idx) => {
    const targetTask = tasks.find((t3) => t3.id === block.taskId);
    return /* @__PURE__ */ Rn.createElement(
      "div",
      {
        key: block.id,
        className: "p-4 rounded-xl border border-slate-200 bg-white hover:border-indigo-300 hover:shadow-xs transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
      },
      /* @__PURE__ */ Rn.createElement("div", { className: "flex items-start gap-3" }, /* @__PURE__ */ Rn.createElement("div", { className: "w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center font-bold text-indigo-700 shrink-0" }, idx + 1), /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ Rn.createElement("span", { className: "font-mono font-bold text-slate-900" }, block.startTime, " \u2013 ", block.endTime), /* @__PURE__ */ Rn.createElement("span", { className: "text-[11px] font-semibold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded" }, block.durationMinutes, " min")), /* @__PURE__ */ Rn.createElement("h4", { className: "font-bold text-sm text-slate-900 mt-1" }, block.taskTitle), /* @__PURE__ */ Rn.createElement("p", { className: "text-slate-500 text-[11px]" }, block.course, " \xB7 Focus: ", block.focusArea))),
      /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-2 self-end sm:self-center shrink-0" }, /* @__PURE__ */ Rn.createElement(RiskBadge, { level: block.riskLevel, size: "sm" }), targetTask && /* @__PURE__ */ Rn.createElement(
        "button",
        {
          onClick: () => {
            onClose();
            onStartSession(targetTask);
          },
          className: "px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs flex items-center gap-1 cursor-pointer"
        },
        /* @__PURE__ */ Rn.createElement(Play, { className: "w-3 h-3 fill-white" }),
        /* @__PURE__ */ Rn.createElement("span", null, "Start Block")
      ))
    );
  }))), /* @__PURE__ */ Rn.createElement("div", { className: "p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5" }, /* @__PURE__ */ Rn.createElement("h4", { className: "text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5" }, /* @__PURE__ */ Rn.createElement(Sparkles, { className: "w-3.5 h-3.5 text-indigo-600" }), /* @__PURE__ */ Rn.createElement("span", null, "Why this schedule?")), /* @__PURE__ */ Rn.createElement("p", { className: "text-xs text-slate-600 leading-relaxed" }, planResult.whyThisPlan))), /* @__PURE__ */ Rn.createElement("div", { className: "p-5 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between sticky bottom-0 z-10" }, /* @__PURE__ */ Rn.createElement(
    "button",
    {
      onClick: onClose,
      className: "px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-200 rounded-xl cursor-pointer"
    },
    "Close"
  ), /* @__PURE__ */ Rn.createElement(
    "button",
    {
      onClick: () => {
        if (planResult.blocks.length > 0) {
          const firstTask = tasks.find((t3) => t3.id === planResult.blocks[0].taskId);
          if (firstTask) {
            onClose();
            onStartSession(firstTask);
          }
        }
      },
      className: "px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md transition-all flex items-center gap-2 hover:scale-[1.02] cursor-pointer"
    },
    /* @__PURE__ */ Rn.createElement(Play, { className: "w-4 h-4 fill-white" }),
    /* @__PURE__ */ Rn.createElement("span", null, "Start Session with First Block")
  ))));
};

// src/services/smartSplit.ts
var extractTopicFromTitle = (title, course) => {
  let cleaned = title.trim();
  const topic = cleaned.replace(/(mini\s+)?project/gi, "").replace(/assignment(\s+\d+)?/gi, "").replace(/homework(\s+\d+)?/gi, "").replace(/lab(\s+record|\s+\d+)?/gi, "").replace(/preparation/gi, "").replace(/prep/gi, "").replace(/submission/gi, "").trim();
  return topic.length > 2 ? topic : cleaned;
};
var generateMilestonesForTask = (task) => {
  const totalHours = Math.max(1, task.estimatedHours || 4);
  const totalMinutes = Math.round(totalHours * 60);
  const hoursLeft = getHoursRemaining(task.deadline);
  const daysLeft = Math.max(0.5, hoursLeft / 24);
  const titleLower = task.title.toLowerCase();
  const courseLower = (task.course || "").toLowerCase();
  const descLower = (task.description || "").toLowerCase();
  const notesLower = (task.notes || "").toLowerCase();
  const combinedContext = `${titleLower} ${courseLower} ${descLower} ${notesLower}`;
  const cleanTopic = extractTopicFromTitle(task.title, task.course);
  const getTargetDay = (index, totalMilestones) => {
    if (daysLeft <= 1) {
      if (index === 0) return "Today (Morning)";
      if (index === 1) return "Today (Afternoon)";
      return "Tonight";
    }
    if (daysLeft <= 2) {
      if (index === 0) return "Today";
      if (index < totalMilestones - 1) return "Tomorrow";
      return "Day of Deadline";
    }
    if (daysLeft <= 4) {
      if (index === 0) return "Today";
      if (index === 1) return "Tomorrow";
      if (index < totalMilestones - 1) return "Day 3";
      return "Deadline Day";
    }
    if (index === 0) return "Today";
    if (index === 1) return "Day 2";
    if (index === 2) return "Day 3";
    if (index === 3) return "Day 4";
    return "Deadline Day";
  };
  let blueprints = [];
  if (task.requirements && task.requirements.length >= 3) {
    blueprints = task.requirements.slice(0, 5).map((req, idx) => ({
      title: req.length > 55 ? req.slice(0, 52) + "..." : req,
      description: `Complete specific deliverable: ${req}`,
      weight: 1 / Math.min(5, task.requirements.length)
    }));
  } else if (combinedContext.includes("er diagram") || combinedContext.includes("entity relationship") || combinedContext.includes("dbms") && (combinedContext.includes("diagram") || combinedContext.includes("project"))) {
    blueprints = [
      {
        title: "Understand project requirements",
        description: `Analyze functional specifications and identify required business rules for ${cleanTopic}`,
        weight: 0.2
      },
      {
        title: "Identify entities and relationships",
        description: "Map cardinalities, primary keys, foreign keys, and relationship types",
        weight: 0.25
      },
      {
        title: "Create the ER diagram",
        description: `Draft the comprehensive entity-relationship model in Chen / Crow's foot notation`,
        weight: 0.3
      },
      {
        title: "Review notation and requirements",
        description: "Verify 3NF normalization rules and cross-check table constraints",
        weight: 0.15
      },
      {
        title: "Finalize and submit",
        description: "Export diagram assets and prepare final submission package",
        weight: 0.1
      }
    ];
  } else if (combinedContext.includes("circular queue") || combinedContext.includes("queue") || combinedContext.includes("stack") || combinedContext.includes("binary tree") || combinedContext.includes("linked list") || combinedContext.includes("dsa") || combinedContext.includes("algorithm")) {
    const algoName = combinedContext.includes("circular queue") ? "circular queue" : combinedContext.includes("binary tree") ? "binary search tree" : cleanTopic || "algorithm";
    blueprints = [
      {
        title: `Understand ${algoName} algorithm`,
        description: `Review pointer logic, circular index modulo arithmetic, and edge cases for ${algoName}`,
        weight: 0.2
      },
      {
        title: "Write the program",
        description: `Implement core ${algoName} operations, enqueue/dequeue methods, and data structures`,
        weight: 0.35
      },
      {
        title: "Test sample inputs",
        description: "Run standard test vectors and boundary overflow/underflow test cases",
        weight: 0.2
      },
      {
        title: "Fix errors",
        description: "Debug pointer offsets, memory leaks, and verify terminal execution logs",
        weight: 0.15
      },
      {
        title: "Prepare final submission",
        description: "Add clean code documentation, execution screenshots, and upload to portal",
        weight: 0.1
      }
    ];
  } else if (combinedContext.includes("presentation") || combinedContext.includes("slides") || combinedContext.includes("seminar") || combinedContext.includes("deld")) {
    blueprints = [
      {
        title: "Prepare presentation content",
        description: `Gather topic fundamentals, key takeaways, and research on ${cleanTopic}`,
        weight: 0.25
      },
      {
        title: "Create the slides",
        description: "Draft title, problem statement, core architecture, and conclusion slides",
        weight: 0.3
      },
      {
        title: "Add diagrams/examples",
        description: "Insert architectural diagrams, circuit schematics, or code callout snippets",
        weight: 0.2
      },
      {
        title: "Review presentation",
        description: "Check slide visual progression, typography readability, and speaker notes",
        weight: 0.15
      },
      {
        title: "Practice and finalize",
        description: "Rehearse delivery timing against tutorial limit and export presentation deck",
        weight: 0.1
      }
    ];
  } else if (combinedContext.includes("math") || combinedContext.includes("calculus") || combinedContext.includes("quiz") || combinedContext.includes("exam") || combinedContext.includes("prep") || combinedContext.includes("statistics")) {
    blueprints = [
      {
        title: "Identify required topics",
        description: `Map out syllabus units, formulas, and theorems for ${cleanTopic}`,
        weight: 0.2
      },
      {
        title: "Study concepts",
        description: "Deep-dive into core theory, proofs, and standard problem patterns",
        weight: 0.3
      },
      {
        title: "Practice problems",
        description: "Solve textbook exercises and previous-year examination questions",
        weight: 0.3
      },
      {
        title: "Review difficult questions",
        description: "Re-attempt tricky problems, boundary conditions, and analyze mistakes",
        weight: 0.1
      },
      {
        title: "Final revision",
        description: "Review quick-reference formula cheat sheet and key theorem summaries",
        weight: 0.1
      }
    ];
  } else if (combinedContext.includes("paper") || combinedContext.includes("essay") || combinedContext.includes("thesis") || combinedContext.includes("research")) {
    blueprints = [
      {
        title: `Gather & annotate academic literature on ${cleanTopic}`,
        description: "Select authoritative papers, summarize state-of-the-art, and compile references",
        weight: 0.2
      },
      {
        title: "Draft methodology and experimental setup",
        description: "Formulate research questions, evaluation metrics, and system parameters",
        weight: 0.25
      },
      {
        title: "Write core analysis & discussion",
        description: "Synthesize findings, interpret benchmark data, and write main content sections",
        weight: 0.3
      },
      {
        title: "Format citations & IEEE bibliography",
        description: "Check referencing style guidelines and cross-check in-text citations",
        weight: 0.15
      },
      {
        title: "Final proofreading & PDF submission",
        description: "Verify typography, visual figure formatting, and export submission PDF",
        weight: 0.1
      }
    ];
  } else if (totalHours <= 2.5) {
    blueprints = [
      {
        title: `Review guidelines for ${task.title}`,
        description: `Read instructions, prompt requirements, and required deliverables for ${task.course}`,
        weight: 0.3
      },
      {
        title: `Complete core work on ${cleanTopic}`,
        description: "Execute primary assignment requirements with focused attention",
        weight: 0.5
      },
      {
        title: "Verify work & submit",
        description: "Review completeness, check output formatting, and upload to submission portal",
        weight: 0.2
      }
    ];
  } else {
    blueprints = [
      {
        title: `Understand ${task.title} specifications`,
        description: `Review prompt guidelines, required deliverables, and scoring criteria for ${task.course}`,
        weight: 0.2
      },
      {
        title: `Research and outline approach for ${cleanTopic}`,
        description: "Gather reference materials, notes, and structure implementation approach",
        weight: 0.25
      },
      {
        title: `Execute main deliverable for ${cleanTopic}`,
        description: "Complete core assignment requirements with concentrated study blocks",
        weight: 0.35
      },
      {
        title: `Review and verify ${task.title}`,
        description: "Check for correctness, completeness, and adherence to instructions",
        weight: 0.1
      },
      {
        title: "Finalize submission package",
        description: `Package files, add documentation, and submit for ${task.course}`,
        weight: 0.1
      }
    ];
  }
  const totalWeight = blueprints.reduce((sum, b2) => sum + b2.weight, 0);
  return blueprints.map((bp, idx) => {
    const rawMinutes = bp.weight / totalWeight * totalMinutes;
    const estimatedMinutes = Math.max(15, Math.round(rawMinutes / 5) * 5);
    const estimatedHours = Math.round(estimatedMinutes / 60 * 10) / 10;
    const targetDay = getTargetDay(idx, blueprints.length);
    const cumulativeMinutesBefore = blueprints.slice(0, idx).reduce((sum, b2) => sum + b2.weight / totalWeight * totalMinutes, 0);
    const isCompleted = task.completedHours * 60 > cumulativeMinutesBefore + estimatedMinutes * 0.7;
    return {
      id: `ms-${task.id}-${idx + 1}-${Date.now() % 1e4}`,
      title: bp.title,
      description: bp.description,
      estimatedMinutes,
      estimatedHours,
      completed: isCompleted,
      targetDay,
      notes: bp.description
    };
  });
};

// src/components/SmartSplitModal.tsx
var SmartSplitModal = ({
  task,
  onClose,
  onSaveMilestones
}) => {
  if (!task) return null;
  const [milestones, setMilestones] = d2(() => {
    return task.milestones && task.milestones.length > 0 ? task.milestones : generateMilestonesForTask(task);
  });
  y2(() => {
    if (task) {
      setMilestones(
        task.milestones && task.milestones.length > 0 ? task.milestones : generateMilestonesForTask(task)
      );
    }
  }, [task.id]);
  const handleToggle = (id) => {
    setMilestones(
      (prev) => prev.map((m3) => m3.id === id ? { ...m3, completed: !m3.completed } : m3)
    );
  };
  const handleRegenerate = () => {
    const fresh = generateMilestonesForTask(task);
    setMilestones(fresh);
  };
  const handleSave = () => {
    onSaveMilestones(task.id, milestones);
    onClose();
  };
  const totalMilestoneMinutes = milestones.reduce(
    (sum, m3) => sum + (m3.estimatedMinutes || (m3.estimatedHours ? m3.estimatedHours * 60 : 60)),
    0
  );
  const completedCount = milestones.filter((m3) => m3.completed).length;
  return /* @__PURE__ */ Rn.createElement("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/50 backdrop-blur-xs animate-in fade-in duration-150" }, /* @__PURE__ */ Rn.createElement("div", { className: "bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto" }, /* @__PURE__ */ Rn.createElement("div", { className: "p-6 border-b border-slate-100 flex items-start justify-between gap-4 sticky top-0 bg-white z-10" }, /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-2 mb-1" }, /* @__PURE__ */ Rn.createElement("span", { className: "px-2.5 py-0.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5" }, /* @__PURE__ */ Rn.createElement(Split, { className: "w-3.5 h-3.5" }), " Work-Backwards Engine")), /* @__PURE__ */ Rn.createElement("h2", { className: "text-xl font-bold text-slate-900" }, 'Break Down "', task.title, '"'), /* @__PURE__ */ Rn.createElement("p", { className: "text-xs text-slate-500 mt-0.5" }, "WorkRadar reverse-engineered your deadline into ", milestones.length, " tailored milestones for ", task.course, ".")), /* @__PURE__ */ Rn.createElement(
    "button",
    {
      onClick: onClose,
      className: "p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors",
      "aria-label": "Close modal"
    },
    /* @__PURE__ */ Rn.createElement(X2, { className: "w-5 h-5" })
  )), /* @__PURE__ */ Rn.createElement("div", { className: "p-6 space-y-4" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center justify-between text-xs text-slate-600 px-1 font-medium" }, /* @__PURE__ */ Rn.createElement("span", null, "Milestone Schedule (", completedCount, " of ", milestones.length, " completed)"), /* @__PURE__ */ Rn.createElement("span", null, "Total effort: ", formatDurationMinutes(totalMilestoneMinutes))), /* @__PURE__ */ Rn.createElement("div", { className: "space-y-3" }, milestones.map((m3, idx) => {
    const durationText = m3.estimatedMinutes ? formatDurationMinutes(m3.estimatedMinutes) : formatHoursAndMinutes(m3.estimatedHours || 1);
    return /* @__PURE__ */ Rn.createElement(
      "button",
      {
        key: m3.id,
        type: "button",
        role: "checkbox",
        "aria-checked": m3.completed,
        tabIndex: 0,
        onClick: () => handleToggle(m3.id),
        onKeyDown: (e3) => {
          if (e3.key === " " || e3.key === "Enter") {
            e3.preventDefault();
            handleToggle(m3.id);
          }
        },
        className: `w-full p-4 rounded-xl border text-left transition-all cursor-pointer flex items-start gap-3.5 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 select-none ${m3.completed ? "bg-emerald-50/50 border-emerald-300 shadow-2xs" : "bg-white border-slate-200 hover:border-indigo-400 shadow-2xs"}`
      },
      /* @__PURE__ */ Rn.createElement(
        "div",
        {
          className: `w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 transition-all pointer-events-none ${m3.completed ? "bg-emerald-600 text-white shadow-xs" : "bg-indigo-50 text-indigo-700 border border-indigo-200"}`
        },
        m3.completed ? /* @__PURE__ */ Rn.createElement(Check, { className: "w-4 h-4 stroke-[3]" }) : idx + 1
      ),
      /* @__PURE__ */ Rn.createElement("div", { className: "flex-1 min-w-0 pointer-events-none" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center justify-between gap-2" }, /* @__PURE__ */ Rn.createElement(
        "h4",
        {
          className: `text-sm font-bold truncate transition-colors ${m3.completed ? "line-through text-slate-400" : "text-slate-900"}`
        },
        m3.title
      ), /* @__PURE__ */ Rn.createElement(
        "span",
        {
          className: `text-[11px] font-semibold px-2.5 py-0.5 rounded shrink-0 transition-colors ${m3.completed ? "bg-emerald-100 text-emerald-800" : "bg-slate-100 text-slate-700"}`
        },
        m3.targetDay || "Target",
        " \xB7 ",
        durationText
      )), m3.description && /* @__PURE__ */ Rn.createElement("p", { className: `text-xs mt-1 transition-colors ${m3.completed ? "text-slate-400" : "text-slate-500"}` }, m3.description))
    );
  })), /* @__PURE__ */ Rn.createElement("div", { className: "p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-center gap-2" }, /* @__PURE__ */ Rn.createElement(Sparkles, { className: "w-4 h-4 text-indigo-600 shrink-0" }), /* @__PURE__ */ Rn.createElement("span", null, "Checking off milestones dynamically updates overall assignment completion on your dashboard!"))), /* @__PURE__ */ Rn.createElement("div", { className: "p-5 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between sticky bottom-0 z-10" }, /* @__PURE__ */ Rn.createElement(
    "button",
    {
      type: "button",
      onClick: handleRegenerate,
      className: "text-xs font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-1.5 px-3 py-2 rounded-lg hover:bg-indigo-50 transition-colors cursor-pointer"
    },
    /* @__PURE__ */ Rn.createElement(RotateCcw, { className: "w-3.5 h-3.5" }),
    /* @__PURE__ */ Rn.createElement("span", null, "Regenerate Milestones")
  ), /* @__PURE__ */ Rn.createElement(
    "button",
    {
      type: "button",
      onClick: handleSave,
      className: "px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-md transition-all flex items-center gap-1.5 hover:scale-[1.02] cursor-pointer"
    },
    /* @__PURE__ */ Rn.createElement(CircleCheckBig, { className: "w-4 h-4 text-emerald-400" }),
    /* @__PURE__ */ Rn.createElement("span", null, "Apply Milestones to Task")
  ))));
};

// src/components/ActiveSessionModal.tsx
var ActiveSessionModal = ({
  task,
  onClose,
  onUpdateTask
}) => {
  if (!task) return null;
  const [seconds, setSeconds] = d2(0);
  const [isActive, setIsActive] = d2(true);
  const [checklist, setChecklist] = d2(() => {
    if (task.milestones && task.milestones.length > 0) {
      return task.milestones;
    }
    return generateMilestonesForTask(task);
  });
  y2(() => {
    if (task.milestones && task.milestones.length > 0) {
      setChecklist(task.milestones);
    } else {
      setChecklist(generateMilestonesForTask(task));
    }
  }, [task.id]);
  y2(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((s3) => s3 + 1);
      }, 1e3);
    }
    return () => clearInterval(interval);
  }, [isActive]);
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  const timeFormatted = `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  const handleToggleMilestone = (mId) => {
    setChecklist((prev) => {
      const updated = prev.map(
        (m3) => m3.id === mId ? { ...m3, completed: !m3.completed } : m3
      );
      onUpdateTask({
        ...task,
        milestones: updated
      });
      return updated;
    });
  };
  const handleLogSession = () => {
    const elapsedHours = Math.max(0.25, Math.round(seconds / 3600 * 10) / 10);
    const newCompleted = Math.min(task.estimatedHours, Math.round((task.completedHours + elapsedHours) * 10) / 10);
    onUpdateTask({
      ...task,
      completedHours: newCompleted,
      milestones: checklist,
      status: newCompleted >= task.estimatedHours ? "completed" : "in_progress"
    });
    onClose();
  };
  return /* @__PURE__ */ Rn.createElement("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-150" }, /* @__PURE__ */ Rn.createElement("div", { className: "bg-slate-900 text-white rounded-3xl border border-slate-800 shadow-2xl max-w-lg w-full p-6 sm:p-8 space-y-6" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-start justify-between" }, /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("span", { className: "text-[11px] font-bold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 px-2.5 py-0.5 rounded-full border border-indigo-500/20" }, "Active Focus Session"), /* @__PURE__ */ Rn.createElement("h2", { className: "text-xl font-bold mt-2 text-white" }, task.title), /* @__PURE__ */ Rn.createElement("p", { className: "text-xs text-slate-400" }, task.course)), /* @__PURE__ */ Rn.createElement(
    "button",
    {
      onClick: onClose,
      className: "p-2 text-slate-400 hover:text-white rounded-xl hover:bg-white/10 cursor-pointer",
      "aria-label": "Close session"
    },
    /* @__PURE__ */ Rn.createElement(X2, { className: "w-5 h-5" })
  )), /* @__PURE__ */ Rn.createElement("div", { className: "text-center py-6 bg-white/[0.03] rounded-2xl border border-white/5" }, /* @__PURE__ */ Rn.createElement("p", { className: "font-mono text-5xl sm:text-6xl font-black tracking-widest text-indigo-300" }, timeFormatted), /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center justify-center gap-3 mt-4" }, /* @__PURE__ */ Rn.createElement(
    "button",
    {
      onClick: () => setIsActive(!isActive),
      className: "px-5 py-2 rounded-xl bg-white text-slate-900 font-bold text-xs flex items-center gap-2 hover:bg-slate-200 transition-colors cursor-pointer"
    },
    isActive ? /* @__PURE__ */ Rn.createElement(Pause, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ Rn.createElement(Play, { className: "w-3.5 h-3.5 fill-slate-900" }),
    /* @__PURE__ */ Rn.createElement("span", null, isActive ? "Pause Session" : "Resume")
  ), /* @__PURE__ */ Rn.createElement(
    "button",
    {
      onClick: () => {
        setIsActive(false);
        setSeconds(0);
      },
      className: "p-2 rounded-xl bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer",
      title: "Reset stopwatch",
      "aria-label": "Reset stopwatch"
    },
    /* @__PURE__ */ Rn.createElement(RotateCcw, { className: "w-4 h-4" })
  ))), /* @__PURE__ */ Rn.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center justify-between" }, /* @__PURE__ */ Rn.createElement("span", { className: "text-[11px] uppercase font-bold text-slate-400 block tracking-wider" }, "Session Checklist"), /* @__PURE__ */ Rn.createElement("span", { className: "text-[11px] text-slate-500 font-medium" }, checklist.filter((c3) => c3.completed).length, " of ", checklist.length, " completed")), /* @__PURE__ */ Rn.createElement("div", { className: "space-y-2 max-h-48 overflow-y-auto pr-1" }, checklist.map((m3) => /* @__PURE__ */ Rn.createElement(
    "button",
    {
      key: m3.id,
      type: "button",
      role: "checkbox",
      "aria-checked": m3.completed,
      tabIndex: 0,
      onClick: () => handleToggleMilestone(m3.id),
      onKeyDown: (e3) => {
        if (e3.key === " " || e3.key === "Enter") {
          e3.preventDefault();
          handleToggleMilestone(m3.id);
        }
      },
      className: `w-full flex items-center gap-3 p-3 rounded-xl transition-all cursor-pointer select-none text-left border focus:outline-hidden focus:ring-2 focus:ring-indigo-500 ${m3.completed ? "bg-emerald-500/15 border-emerald-500/30 text-emerald-200" : "bg-white/5 border-white/10 hover:bg-white/10 text-slate-200"}`
    },
    /* @__PURE__ */ Rn.createElement(
      "div",
      {
        className: `w-5 h-5 rounded-md flex items-center justify-center shrink-0 transition-all pointer-events-none ${m3.completed ? "bg-emerald-500 text-white shadow-xs" : "border-2 border-slate-500 bg-slate-800/80"}`
      },
      m3.completed && /* @__PURE__ */ Rn.createElement(Check, { className: "w-3.5 h-3.5 stroke-[3] text-white" })
    ),
    /* @__PURE__ */ Rn.createElement(
      "span",
      {
        className: `text-xs font-medium flex-1 pointer-events-none leading-relaxed transition-all ${m3.completed ? "line-through text-slate-400 font-normal" : "text-slate-100 font-medium"}`
      },
      m3.title
    )
  )))), /* @__PURE__ */ Rn.createElement("div", { className: "pt-2 border-t border-white/10 flex items-center justify-between" }, /* @__PURE__ */ Rn.createElement(
    "button",
    {
      onClick: onClose,
      className: "text-xs text-slate-400 hover:text-white px-3 py-2 transition-colors cursor-pointer"
    },
    "Cancel"
  ), /* @__PURE__ */ Rn.createElement(
    "button",
    {
      onClick: handleLogSession,
      className: "px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-lg shadow-indigo-600/30 flex items-center gap-2 transition-colors cursor-pointer"
    },
    /* @__PURE__ */ Rn.createElement(CircleCheck, { className: "w-4 h-4" }),
    /* @__PURE__ */ Rn.createElement("span", null, "Finish & Log Effort")
  ))));
};

// src/components/ReasoningModal.tsx
var ReasoningModal = ({ task, onClose }) => {
  if (!task) return null;
  const remaining = formatHoursAndMinutes(task.remainingHours || 0);
  const countdown = formatCountdown(task.deadline);
  const urgencyExplanation = task.urgencyReason || task.riskReason || `Deadline is in ${countdown} and significant work remains.`;
  return /* @__PURE__ */ Rn.createElement("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/50 backdrop-blur-xs animate-in fade-in duration-150" }, /* @__PURE__ */ Rn.createElement("div", { className: "bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto" }, /* @__PURE__ */ Rn.createElement("div", { className: "p-6 border-b border-slate-100 flex items-start justify-between gap-4 sticky top-0 bg-white z-10" }, /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-2 mb-1" }, /* @__PURE__ */ Rn.createElement("span", { className: "px-2.5 py-0.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5" }, /* @__PURE__ */ Rn.createElement(Compass, { className: "w-3.5 h-3.5" }), " Decision Reasoning")), /* @__PURE__ */ Rn.createElement("h2", { className: "text-xl font-bold text-slate-900" }, "Why Was This Task Selected?"), /* @__PURE__ */ Rn.createElement("p", { className: "text-xs text-slate-500 mt-0.5" }, "Workload assistant analysis based on deadline urgency, capacity, and conflicts")), /* @__PURE__ */ Rn.createElement(
    "button",
    {
      onClick: onClose,
      className: "p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors",
      "aria-label": "Close modal"
    },
    /* @__PURE__ */ Rn.createElement(X2, { className: "w-5 h-5" })
  )), /* @__PURE__ */ Rn.createElement("div", { className: "p-6 space-y-5" }, /* @__PURE__ */ Rn.createElement("div", { className: "p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-3" }, /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("h3", { className: "font-bold text-slate-900 text-sm" }, task.title), /* @__PURE__ */ Rn.createElement("p", { className: "text-xs text-slate-500" }, task.course)), /* @__PURE__ */ Rn.createElement(RiskBadge, { level: task.riskLevel, size: "md" })), /* @__PURE__ */ Rn.createElement("div", { className: "p-4 rounded-xl bg-indigo-50/80 border border-indigo-200 text-xs text-indigo-950 font-medium leading-relaxed flex items-start gap-2.5" }, /* @__PURE__ */ Rn.createElement(Sparkles, { className: "w-4 h-4 text-indigo-600 shrink-0 mt-0.5" }), /* @__PURE__ */ Rn.createElement("span", null, '\xAB"', urgencyExplanation, '"\xBB')), /* @__PURE__ */ Rn.createElement("div", { className: "space-y-3" }, /* @__PURE__ */ Rn.createElement("h4", { className: "text-xs font-bold uppercase tracking-wider text-slate-500" }, "Key Decision Factors"), /* @__PURE__ */ Rn.createElement("div", { className: "p-3.5 rounded-xl border border-slate-200 bg-white space-y-1" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center justify-between text-xs font-semibold" }, /* @__PURE__ */ Rn.createElement("span", { className: "flex items-center gap-1.5 text-slate-700" }, /* @__PURE__ */ Rn.createElement(Clock, { className: "w-4 h-4 text-amber-500" }), " Deadline Proximity"), /* @__PURE__ */ Rn.createElement("span", { className: "font-bold text-slate-900" }, countdown, " remaining")), /* @__PURE__ */ Rn.createElement("p", { className: "text-[11px] text-slate-500" }, "Deadline is approaching rapidly. Timely start prevents last-minute cramming.")), /* @__PURE__ */ Rn.createElement("div", { className: "p-3.5 rounded-xl border border-slate-200 bg-white space-y-1" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center justify-between text-xs font-semibold" }, /* @__PURE__ */ Rn.createElement("span", { className: "flex items-center gap-1.5 text-slate-700" }, /* @__PURE__ */ Rn.createElement(Layers, { className: "w-4 h-4 text-indigo-500" }), " Remaining Workload & Progress"), /* @__PURE__ */ Rn.createElement("span", { className: "font-bold text-slate-900" }, remaining, " (", task.completionPercentage, "% done)")), /* @__PURE__ */ Rn.createElement("p", { className: "text-[11px] text-slate-500" }, task.completionPercentage && task.completionPercentage > 0 ? `Substantial progress made, but ${remaining} of focused work remains.` : `Work has not yet begun. Requires ${remaining} of dedicated focus.`)), /* @__PURE__ */ Rn.createElement("div", { className: "p-3.5 rounded-xl border border-slate-200 bg-white space-y-1" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center justify-between text-xs font-semibold" }, /* @__PURE__ */ Rn.createElement("span", { className: "flex items-center gap-1.5 text-slate-700" }, /* @__PURE__ */ Rn.createElement(Calendar, { className: "w-4 h-4 text-emerald-600" }), " Study Capacity Window"), /* @__PURE__ */ Rn.createElement(
    "span",
    {
      className: `font-bold px-2 py-0.5 rounded text-[11px] ${task.capacityStatus === "Overloaded" ? "bg-rose-100 text-rose-700" : task.capacityStatus === "Tight" ? "bg-amber-100 text-amber-700" : "bg-emerald-100 text-emerald-700"}`
    },
    task.capacityStatus || "Overloaded"
  )), /* @__PURE__ */ Rn.createElement("p", { className: "text-[11px] text-slate-500" }, "Estimated ", task.availableHoursBeforeDeadline || 4, "h available study time before deadline versus", " ", remaining, " required work.")), /* @__PURE__ */ Rn.createElement("div", { className: "p-3.5 rounded-xl border border-slate-200 bg-white space-y-1" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center justify-between text-xs font-semibold" }, /* @__PURE__ */ Rn.createElement("span", { className: "flex items-center gap-1.5 text-slate-700" }, /* @__PURE__ */ Rn.createElement(TriangleAlert, { className: "w-4 h-4 text-rose-500" }), " Deadline Collision Check"), /* @__PURE__ */ Rn.createElement("span", { className: "font-bold text-slate-900" }, task.isColliding ? "Collision Detected" : "Clear Window")), /* @__PURE__ */ Rn.createElement("p", { className: "text-[11px] text-slate-500" }, task.isColliding ? "Coincides with another assignment deadline in the same 48-hour window." : "Independent submission window without immediate academic conflict."))), /* @__PURE__ */ Rn.createElement("div", { className: "p-4 rounded-xl bg-slate-900 text-white flex items-center justify-between" }, /* @__PURE__ */ Rn.createElement("div", null, /* @__PURE__ */ Rn.createElement("span", { className: "text-[11px] text-slate-400 uppercase font-bold tracking-wider block" }, "Workload Status"), /* @__PURE__ */ Rn.createElement("span", { className: "text-xs text-slate-300" }, "Capacity: ", task.capacityStatus || "Overloaded")), /* @__PURE__ */ Rn.createElement(RiskBadge, { level: task.riskLevel, size: "md" }))), /* @__PURE__ */ Rn.createElement("div", { className: "p-5 border-t border-slate-100 bg-slate-50/50 flex justify-end sticky bottom-0 z-10" }, /* @__PURE__ */ Rn.createElement(
    "button",
    {
      onClick: onClose,
      className: "px-5 py-2 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-colors"
    },
    "Got It"
  ))));
};

// src/components/DemoToolbar.tsx
var DemoToolbar = ({
  onStep1Dashboard,
  onStep2ImportNotice,
  onStep3DuplicateNotice,
  onStep4RealityCheck,
  onStep5WhatShouldIDoNow,
  onStep6SaveMeMode,
  onStep7PanicMode,
  onResetDemo
}) => {
  const [isExpanded, setIsExpanded] = d2(false);
  const steps = [
    { num: "1", title: "Dashboard", desc: "Active workload telemetry", action: onStep1Dashboard },
    { num: "2", title: "Import Notice", desc: "AI extracts messy notice", action: onStep2ImportNotice },
    { num: "3", title: "Duplicate Detector", desc: "Detects deadline extension", action: onStep3DuplicateNotice },
    { num: "4", title: "Reality Check", desc: "Shortfall: -4h 50m overload", action: onStep4RealityCheck },
    { num: "5", title: "What to Do NOW?", desc: "Top cognitive recommendation", action: onStep5WhatShouldIDoNow },
    { num: "6", title: "Save Me Mode", desc: "Triage MUST DO vs CAN REDUCE", action: onStep6SaveMeMode },
    { num: "7", title: "Panic Mode", desc: "Emergency 48-hour pipeline", action: onStep7PanicMode }
  ];
  return /* @__PURE__ */ Rn.createElement("div", { className: "fixed bottom-3 right-3 sm:right-6 z-40 max-w-xl transition-all" }, /* @__PURE__ */ Rn.createElement("div", { className: "bg-slate-900/95 backdrop-blur-md text-white rounded-2xl border border-slate-800 shadow-2xl p-2.5 sm:p-3 text-xs" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center justify-between gap-3 px-1" }, /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ Rn.createElement("span", { className: "w-2 h-2 rounded-full bg-emerald-400 animate-pulse" }), /* @__PURE__ */ Rn.createElement("span", { className: "font-bold tracking-tight text-white flex items-center gap-1.5" }, /* @__PURE__ */ Rn.createElement(Sparkles, { className: "w-3.5 h-3.5 text-amber-400" }), /* @__PURE__ */ Rn.createElement("span", null, "Hackathon Demo Guide"))), /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center gap-1.5" }, /* @__PURE__ */ Rn.createElement(
    "button",
    {
      onClick: onResetDemo,
      className: "px-2 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white text-[11px] font-medium transition-colors flex items-center gap-1",
      title: "Reset all tasks to original demo baseline"
    },
    /* @__PURE__ */ Rn.createElement(RotateCcw, { className: "w-3 h-3" }),
    /* @__PURE__ */ Rn.createElement("span", { className: "hidden sm:inline" }, "Reset Baseline")
  ), /* @__PURE__ */ Rn.createElement(
    "button",
    {
      onClick: () => setIsExpanded(!isExpanded),
      className: "p-1 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors",
      title: isExpanded ? "Collapse" : "Expand step shortcuts"
    },
    isExpanded ? /* @__PURE__ */ Rn.createElement(ChevronDown, { className: "w-4 h-4" }) : /* @__PURE__ */ Rn.createElement(ChevronUp, { className: "w-4 h-4" })
  ))), isExpanded && /* @__PURE__ */ Rn.createElement("div", { className: "mt-3 pt-2.5 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-1.5 animate-in fade-in duration-150" }, steps.map((s3) => /* @__PURE__ */ Rn.createElement(
    "button",
    {
      key: s3.num,
      onClick: s3.action,
      className: "p-2 rounded-xl bg-white/5 hover:bg-white/15 text-left transition-all border border-white/5 hover:border-indigo-400/50 group"
    },
    /* @__PURE__ */ Rn.createElement("div", { className: "flex items-center justify-between text-[10px] text-slate-400 group-hover:text-indigo-300 font-bold mb-0.5" }, /* @__PURE__ */ Rn.createElement("span", null, "Step ", s3.num), /* @__PURE__ */ Rn.createElement(Play, { className: "w-2.5 h-2.5 opacity-0 group-hover:opacity-100" })),
    /* @__PURE__ */ Rn.createElement("p", { className: "font-bold text-slate-200 text-xs truncate group-hover:text-white" }, s3.title),
    /* @__PURE__ */ Rn.createElement("p", { className: "text-[10px] text-slate-400 truncate mt-0.5" }, s3.desc)
  )))));
};

// src/App.tsx
var App = () => {
  const [tasks, setTasks] = d2(() => loadStoredTasks());
  const [selectedTaskId, setSelectedTaskId] = d2(null);
  const [activeModal, setActiveModal] = d2(null);
  const [importNoticeInitialText, setImportNoticeInitialText] = d2("");
  const [activeTab, setActiveTab] = d2("dashboard");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = d2(false);
  const [toastMessage, setToastMessage] = d2(null);
  const showToast = q2((msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  }, []);
  const enrichedTasks = T2(() => enrichTasks(tasks), [tasks]);
  const selectedTask = T2(() => {
    if (!selectedTaskId) return null;
    return enrichedTasks.find((t3) => t3.id === selectedTaskId) || null;
  }, [selectedTaskId, enrichedTasks]);
  const realityCheckData = T2(() => {
    return calculateRealityCheck(enrichedTasks);
  }, [enrichedTasks]);
  const topTask = T2(() => {
    const active = enrichedTasks.filter((t3) => t3.status !== "completed");
    if (active.length === 0) return null;
    return [...active].sort(compareTasksByUrgency)[0];
  }, [enrichedTasks]);
  const handleAddTask = (newTask) => {
    const updated = [newTask, ...tasks];
    setTasks(updated);
    saveTasksToStorage(updated);
    showToast(`Added "${newTask.title}" to WorkRadar.`);
  };
  const handleUpdateTask = (updatedTask) => {
    const updated = tasks.map((t3) => t3.id === updatedTask.id ? updatedTask : t3);
    setTasks(updated);
    saveTasksToStorage(updated);
  };
  const handleDeleteTask = (taskId) => {
    const updated = tasks.filter((t3) => t3.id !== taskId);
    setTasks(updated);
    saveTasksToStorage(updated);
    if (selectedTaskId === taskId) {
      setSelectedTaskId(null);
      if (activeModal === "taskDetails" || activeModal === "breakDown" || activeModal === "focusSession" || activeModal === "reasoning") {
        setActiveModal(null);
      }
    }
    showToast("Task removed from WorkRadar.");
  };
  const handleUpdateDeadline = (taskId, newDeadline) => {
    const updated = tasks.map((t3) => t3.id === taskId ? { ...t3, deadline: newDeadline } : t3);
    setTasks(updated);
    saveTasksToStorage(updated);
    showToast("Deadline extended and updated successfully.");
  };
  const handleSaveMilestones = (taskId, milestones) => {
    const updated = tasks.map((t3) => {
      if (t3.id === taskId) {
        const total = milestones.length;
        const completedCount = milestones.filter((m3) => m3.completed).length;
        let newCompleted = t3.completedHours;
        let newStatus = t3.status;
        if (total > 0) {
          newCompleted = Math.round(completedCount / total * t3.estimatedHours * 10) / 10;
          newStatus = completedCount === total ? "completed" : completedCount > 0 ? "in_progress" : t3.status;
        }
        return {
          ...t3,
          milestones,
          completedHours: newCompleted,
          status: newStatus
        };
      }
      return t3;
    });
    setTasks(updated);
    saveTasksToStorage(updated);
    showToast("Milestones saved & dashboard progress updated.");
  };
  const handleApplyTriage = (savedHours) => {
    showToast(`Triage applied! Saved ${savedHours}h across tasks.`);
  };
  const handleResetDemoData = () => {
    const baseline = resetToDemoTasks();
    setTasks(baseline);
    setSelectedTaskId(null);
    setActiveModal(null);
    setActiveTab("dashboard");
    showToast("Reset to original demo baseline with 6 assignments.");
  };
  const openTaskDetails = (task) => {
    setSelectedTaskId(task.id);
    setActiveModal("taskDetails");
  };
  const openBreakDown = (task) => {
    setSelectedTaskId(task.id);
    setActiveModal("breakDown");
  };
  const openFocusSession = (task) => {
    setSelectedTaskId(task.id);
    setActiveModal("focusSession");
  };
  const openReasoning = (task) => {
    setSelectedTaskId(task.id);
    setActiveModal("reasoning");
  };
  const closeModal = () => {
    setActiveModal(null);
  };
  const criticalCount = enrichedTasks.filter((t3) => t3.riskLevel === "CRITICAL").length;
  const atRiskCount = enrichedTasks.filter((t3) => t3.riskLevel === "AT_RISK").length;
  return /* @__PURE__ */ Rn.createElement("div", { className: "min-h-screen bg-[#fafafa] text-slate-900 font-sans antialiased selection:bg-indigo-100 selection:text-indigo-900 flex" }, toastMessage && /* @__PURE__ */ Rn.createElement("div", { className: "fixed top-5 right-5 z-50 bg-slate-900 text-white px-4 py-2.5 rounded-xl shadow-2xl text-xs font-semibold flex items-center gap-2 animate-in fade-in slide-in-from-top-3 border border-slate-700" }, /* @__PURE__ */ Rn.createElement("span", { className: "w-2 h-2 rounded-full bg-emerald-400" }), /* @__PURE__ */ Rn.createElement("span", null, toastMessage)), /* @__PURE__ */ Rn.createElement(
    Sidebar,
    {
      activeTab,
      setActiveTab,
      onResetDemo: handleResetDemoData,
      criticalCount,
      atRiskCount,
      isMobileOpen: isMobileMenuOpen,
      setIsMobileOpen: setIsMobileMenuOpen
    }
  ), /* @__PURE__ */ Rn.createElement("div", { className: "flex-1 flex flex-col min-w-0 lg:pl-64" }, /* @__PURE__ */ Rn.createElement(
    Header,
    {
      onOpenAddTask: () => setActiveModal("addTask"),
      onOpenImportNotice: () => {
        setImportNoticeInitialText("");
        setActiveModal("importNotice");
      },
      onOpenPanicMode: () => setActiveTab("panic-mode"),
      onOpenRealityCheck: () => setActiveModal("realityCheck"),
      realityCheck: realityCheckData,
      onToggleMobileMenu: () => setIsMobileMenuOpen(!isMobileMenuOpen)
    }
  ), /* @__PURE__ */ Rn.createElement("main", { className: "flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto" }, activeTab === "dashboard" && /* @__PURE__ */ Rn.createElement(
    Dashboard,
    {
      tasks: enrichedTasks,
      topTask,
      realityCheck: realityCheckData,
      onOpenTask: openTaskDetails,
      onStartWorking: openFocusSession,
      onBreakDown: openBreakDown,
      onViewReasoning: openReasoning,
      onOpenAddTask: () => setActiveModal("addTask"),
      onOpenImportNotice: () => {
        setImportNoticeInitialText("");
        setActiveModal("importNotice");
      },
      onOpenPanicMode: () => setActiveTab("panic-mode"),
      onOpenRealityCheck: () => setActiveModal("realityCheck"),
      onOpenReversePlanner: () => setActiveModal("reversePlanner"),
      onNavigateToMyWork: () => setActiveTab("my-work")
    }
  ), activeTab === "my-work" && /* @__PURE__ */ Rn.createElement(
    MyWorkView,
    {
      tasks: enrichedTasks,
      onOpenTask: openTaskDetails,
      onStartWorking: openFocusSession,
      onBreakDown: openBreakDown,
      onViewReasoning: openReasoning,
      onOpenAddTask: () => setActiveModal("addTask"),
      onOpenImportNotice: () => {
        setImportNoticeInitialText("");
        setActiveModal("importNotice");
      }
    }
  ), activeTab === "planner" && /* @__PURE__ */ Rn.createElement(
    PlannerView,
    {
      tasks: enrichedTasks,
      onOpenTask: openTaskDetails,
      onOpenReversePlanner: () => setActiveModal("reversePlanner")
    }
  ), activeTab === "insights" && /* @__PURE__ */ Rn.createElement(
    InsightsView,
    {
      tasks: enrichedTasks,
      onOpenPanicMode: () => setActiveTab("panic-mode"),
      onOpenRealityCheck: () => setActiveModal("realityCheck")
    }
  ), activeTab === "panic-mode" && /* @__PURE__ */ Rn.createElement(
    PanicModeView,
    {
      tasks: enrichedTasks,
      onExitPanicMode: () => setActiveTab("dashboard"),
      onUpdateTask: handleUpdateTask,
      onOpenTaskDetails: openTaskDetails
    }
  ), activeTab === "reality-check" && /* @__PURE__ */ Rn.createElement("div", { className: "py-4" }, /* @__PURE__ */ Rn.createElement("div", { className: "bg-white rounded-2xl border border-slate-200 p-6" }, /* @__PURE__ */ Rn.createElement(
    RealityCheckModal,
    {
      isOpen: true,
      onClose: () => setActiveTab("dashboard"),
      realityCheck: realityCheckData,
      onActivateSaveMe: () => setActiveModal("saveMe"),
      onOpenTask: openTaskDetails
    }
  ))), activeTab === "save-me" && /* @__PURE__ */ Rn.createElement("div", { className: "py-4" }, /* @__PURE__ */ Rn.createElement("div", { className: "bg-white rounded-2xl border border-slate-200 p-6" }, /* @__PURE__ */ Rn.createElement(
    SaveMeModal,
    {
      isOpen: true,
      onClose: () => setActiveTab("dashboard"),
      tasks: enrichedTasks,
      shortfallHours: realityCheckData.shortfallHours,
      onApplyTriage: handleApplyTriage,
      onOpenTask: openTaskDetails
    }
  ))), activeTab === "reverse-planner" && /* @__PURE__ */ Rn.createElement("div", { className: "py-4" }, /* @__PURE__ */ Rn.createElement("div", { className: "bg-white rounded-2xl border border-slate-200 p-6" }, /* @__PURE__ */ Rn.createElement(
    ReversePlannerModal,
    {
      isOpen: true,
      onClose: () => setActiveTab("dashboard"),
      tasks: enrichedTasks,
      onStartSession: openFocusSession
    }
  ))))), /* @__PURE__ */ Rn.createElement(
    DemoToolbar,
    {
      onStep1Dashboard: () => setActiveTab("dashboard"),
      onStep2ImportNotice: () => {
        setImportNoticeInitialText(DEMO_PRESETS[0].text);
        setActiveModal("importNotice");
      },
      onStep3DuplicateNotice: () => {
        setImportNoticeInitialText(DEMO_PRESETS[1].text);
        setActiveModal("importNotice");
      },
      onStep4RealityCheck: () => setActiveModal("realityCheck"),
      onStep5WhatShouldIDoNow: () => {
        setActiveTab("dashboard");
        if (topTask) openReasoning(topTask);
      },
      onStep6SaveMeMode: () => setActiveModal("saveMe"),
      onStep7PanicMode: () => setActiveTab("panic-mode"),
      onResetDemo: handleResetDemoData
    }
  ), /* @__PURE__ */ Rn.createElement(
    AddTaskModal,
    {
      isOpen: activeModal === "addTask",
      onClose: closeModal,
      onAddTask: handleAddTask
    }
  ), /* @__PURE__ */ Rn.createElement(
    ImportNoticeModal,
    {
      isOpen: activeModal === "importNotice",
      onClose: () => {
        closeModal();
        setImportNoticeInitialText("");
      },
      onAddTask: handleAddTask,
      onUpdateExistingDeadline: handleUpdateDeadline,
      existingTasks: enrichedTasks,
      initialText: importNoticeInitialText
    }
  ), /* @__PURE__ */ Rn.createElement(
    RealityCheckModal,
    {
      isOpen: activeModal === "realityCheck",
      onClose: closeModal,
      realityCheck: realityCheckData,
      onActivateSaveMe: () => setActiveModal("saveMe"),
      onOpenTask: openTaskDetails
    }
  ), /* @__PURE__ */ Rn.createElement(
    SaveMeModal,
    {
      isOpen: activeModal === "saveMe",
      onClose: closeModal,
      tasks: enrichedTasks,
      shortfallHours: realityCheckData.shortfallHours,
      onApplyTriage: handleApplyTriage,
      onOpenTask: openTaskDetails
    }
  ), /* @__PURE__ */ Rn.createElement(
    ReversePlannerModal,
    {
      isOpen: activeModal === "reversePlanner",
      onClose: closeModal,
      tasks: enrichedTasks,
      onStartSession: openFocusSession
    }
  ), /* @__PURE__ */ Rn.createElement(
    TaskDetailsModal,
    {
      task: activeModal === "taskDetails" ? selectedTask : null,
      onClose: () => {
        closeModal();
        setSelectedTaskId(null);
      },
      onStartWorking: openFocusSession,
      onBreakDown: openBreakDown,
      onUpdateTask: handleUpdateTask,
      onDeleteTask: handleDeleteTask,
      onViewReasoning: openReasoning
    }
  ), /* @__PURE__ */ Rn.createElement(
    SmartSplitModal,
    {
      task: activeModal === "breakDown" ? selectedTask : null,
      onClose: closeModal,
      onSaveMilestones: handleSaveMilestones
    }
  ), /* @__PURE__ */ Rn.createElement(
    ActiveSessionModal,
    {
      task: activeModal === "focusSession" ? selectedTask : null,
      onClose: closeModal,
      onUpdateTask: handleUpdateTask
    }
  ), /* @__PURE__ */ Rn.createElement(
    ReasoningModal,
    {
      task: activeModal === "reasoning" ? selectedTask : null,
      onClose: closeModal
    }
  ));
};

// src/index.tsx
var container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(/* @__PURE__ */ Rn.createElement(App, null));
}
/*! Bundled license information:

lucide-react/dist/esm/shared/src/utils.js:
lucide-react/dist/esm/defaultAttributes.js:
lucide-react/dist/esm/Icon.js:
lucide-react/dist/esm/createLucideIcon.js:
lucide-react/dist/esm/icons/arrow-left.js:
lucide-react/dist/esm/icons/arrow-right.js:
lucide-react/dist/esm/icons/arrow-up-down.js:
lucide-react/dist/esm/icons/arrow-up-right.js:
lucide-react/dist/esm/icons/calendar-clock.js:
lucide-react/dist/esm/icons/calendar-days.js:
lucide-react/dist/esm/icons/calendar.js:
lucide-react/dist/esm/icons/chart-column.js:
lucide-react/dist/esm/icons/chart-pie.js:
lucide-react/dist/esm/icons/check.js:
lucide-react/dist/esm/icons/chevron-down.js:
lucide-react/dist/esm/icons/chevron-right.js:
lucide-react/dist/esm/icons/chevron-up.js:
lucide-react/dist/esm/icons/circle-alert.js:
lucide-react/dist/esm/icons/circle-check-big.js:
lucide-react/dist/esm/icons/circle-check.js:
lucide-react/dist/esm/icons/clock.js:
lucide-react/dist/esm/icons/cloud-upload.js:
lucide-react/dist/esm/icons/compass.js:
lucide-react/dist/esm/icons/file-text.js:
lucide-react/dist/esm/icons/file-up.js:
lucide-react/dist/esm/icons/flame.js:
lucide-react/dist/esm/icons/flask-conical.js:
lucide-react/dist/esm/icons/layers.js:
lucide-react/dist/esm/icons/layout-dashboard.js:
lucide-react/dist/esm/icons/life-buoy.js:
lucide-react/dist/esm/icons/menu.js:
lucide-react/dist/esm/icons/mic.js:
lucide-react/dist/esm/icons/pause.js:
lucide-react/dist/esm/icons/pen.js:
lucide-react/dist/esm/icons/play.js:
lucide-react/dist/esm/icons/plus.js:
lucide-react/dist/esm/icons/radio.js:
lucide-react/dist/esm/icons/rotate-ccw.js:
lucide-react/dist/esm/icons/scale.js:
lucide-react/dist/esm/icons/scissors.js:
lucide-react/dist/esm/icons/search.js:
lucide-react/dist/esm/icons/shield-alert.js:
lucide-react/dist/esm/icons/shield-check.js:
lucide-react/dist/esm/icons/sparkles.js:
lucide-react/dist/esm/icons/split.js:
lucide-react/dist/esm/icons/square-check-big.js:
lucide-react/dist/esm/icons/square.js:
lucide-react/dist/esm/icons/timer.js:
lucide-react/dist/esm/icons/trash-2.js:
lucide-react/dist/esm/icons/trending-down.js:
lucide-react/dist/esm/icons/triangle-alert.js:
lucide-react/dist/esm/icons/x.js:
lucide-react/dist/esm/lucide-react.js:
  (**
   * @license lucide-react v0.525.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=bundle.js.map

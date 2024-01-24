(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));

  // ../jodit_html_editor/jodit_html_editor/public/js/jodit.min.js
  var require_jodit_min = __commonJS({
    "../jodit_html_editor/jodit_html_editor/public/js/jodit.min.js"(exports, module) {
      !function(e, t) {
        if (typeof exports == "object" && typeof module == "object")
          module.exports = t();
        else if (typeof define == "function" && define.amd)
          define([], t);
        else {
          var o = t();
          for (var n in o)
            (typeof exports == "object" ? exports : e)[n] = o[n];
        }
      }(window, function() {
        return function(o) {
          var n = {};
          function i(e) {
            if (n[e])
              return n[e].exports;
            var t = n[e] = { i: e, l: false, exports: {} };
            return o[e].call(t.exports, t, t.exports, i), t.l = true, t.exports;
          }
          return i.m = o, i.c = n, i.d = function(e, t, o2) {
            i.o(e, t) || Object.defineProperty(e, t, { enumerable: true, get: o2 });
          }, i.r = function(e) {
            typeof Symbol != "undefined" && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: true });
          }, i.t = function(t, e) {
            if (1 & e && (t = i(t)), 8 & e)
              return t;
            if (4 & e && typeof t == "object" && t && t.__esModule)
              return t;
            var o2 = /* @__PURE__ */ Object.create(null);
            if (i.r(o2), Object.defineProperty(o2, "default", { enumerable: true, value: t }), 2 & e && typeof t != "string")
              for (var n2 in t)
                i.d(o2, n2, function(e2) {
                  return t[e2];
                }.bind(null, n2));
            return o2;
          }, i.n = function(e) {
            var t = e && e.__esModule ? function() {
              return e.default;
            } : function() {
              return e;
            };
            return i.d(t, "a", t), t;
          }, i.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
          }, i.p = "/build/", i(i.s = 65);
        }([function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true });
          var i = o(1), n = o(3), r = o(11), a = function() {
            function d() {
            }
            return d.detach = function(e2) {
              for (; e2.firstChild; )
                e2.removeChild(e2.firstChild);
            }, d.unwrap = function(e2) {
              var t2 = e2.parentNode, o2 = e2;
              if (t2) {
                for (; o2.firstChild; )
                  t2.insertBefore(o2.firstChild, o2);
                d.safeRemove(o2);
              }
            }, d.each = function(e2, t2) {
              var o2 = e2.firstChild;
              if (o2)
                for (; o2; ) {
                  if (t2.call(o2, o2) === false || !d.each(o2, t2))
                    return false;
                  o2 = d.next(o2, function(e3) {
                    return !!e3;
                  }, e2);
                }
              return true;
            }, d.replace = function(e2, t2, o2, n2, i2) {
              o2 === void 0 && (o2 = false), n2 === void 0 && (n2 = false);
              var r2 = typeof t2 == "string" ? i2.createElement(t2) : t2;
              if (!n2)
                for (; e2.firstChild; )
                  r2.appendChild(e2.firstChild);
              return o2 && Array.from(e2.attributes).forEach(function(e3) {
                r2.setAttribute(e3.name, e3.value);
              }), e2.parentNode && e2.parentNode.replaceChild(r2, e2), r2;
            }, d.isEmptyTextNode = function(e2) {
              return e2 && e2.nodeType === Node.TEXT_NODE && (!e2.nodeValue || e2.nodeValue.replace(i.INVISIBLE_SPACE_REG_EXP, "").length === 0);
            }, d.isEmpty = function(e2, t2) {
              return t2 === void 0 && (t2 = /^(img|svg|canvas|input|textarea|form)$/), !e2 || (e2.nodeType === Node.TEXT_NODE ? e2.nodeValue === null || r.trim(e2.nodeValue).length === 0 : !e2.nodeName.toLowerCase().match(t2) && d.each(e2, function(e3) {
                if (e3 && e3.nodeType === Node.TEXT_NODE && e3.nodeValue !== null && r.trim(e3.nodeValue).length !== 0 || e3 && e3.nodeType === Node.ELEMENT_NODE && t2.test(e3.nodeName.toLowerCase()))
                  return false;
              }));
            }, d.isNode = function(e2, t2) {
              return !(typeof t2 != "object" || !t2 || typeof t2.Node != "function") && e2 instanceof t2.Node;
            }, d.isCell = function(e2, t2) {
              return d.isNode(e2, t2) && /^(td|th)$/i.test(e2.nodeName);
            }, d.isImage = function(e2, t2) {
              return d.isNode(e2, t2) && /^(img|svg|picture|canvas)$/i.test(e2.nodeName);
            }, d.isBlock = function(e2, t2) {
              return e2 && typeof e2 == "object" && d.isNode(e2, t2) && i.IS_BLOCK.test(e2.nodeName);
            }, d.isInlineBlock = function(e2) {
              return !!e2 && e2.nodeType === Node.ELEMENT_NODE && ["inline", "inline-block"].indexOf("" + n.css(e2, "display")) != -1;
            }, d.canSplitBlock = function(e2, t2) {
              return e2 && e2 instanceof t2.HTMLElement && this.isBlock(e2, t2) && !/^(TD|TH|CAPTION|FORM)$/.test(e2.nodeName) && e2.style !== void 0 && !/^(fixed|absolute)/i.test(e2.style.position);
            }, d.prev = function(e2, t2, o2, n2) {
              return n2 === void 0 && (n2 = true), d.find(e2, t2, o2, false, "previousSibling", !!n2 && "lastChild");
            }, d.next = function(e2, t2, o2, n2) {
              return n2 === void 0 && (n2 = true), d.find(e2, t2, o2, void 0, void 0, n2 ? "firstChild" : "");
            }, d.find = function(e2, t2, o2, n2, i2, r2) {
              if (n2 === void 0 && (n2 = false), i2 === void 0 && (i2 = "nextSibling"), r2 === void 0 && (r2 = "firstChild"), n2 && t2(e2))
                return e2;
              var a2, s = e2;
              do {
                if (t2(a2 = s[i2]))
                  return a2 || false;
                if (r2 && a2 && a2[r2]) {
                  var l = d.find(a2[r2], t2, a2, true, i2, r2);
                  if (l)
                    return l;
                }
                a2 || (a2 = s.parentNode), s = a2;
              } while (s && s !== o2);
              return false;
            }, d.findWithCurrent = function(e2, t2, o2, n2, i2) {
              n2 === void 0 && (n2 = "nextSibling"), i2 === void 0 && (i2 = "firstChild");
              var r2 = e2;
              do {
                if (t2(r2))
                  return r2 || false;
                if (i2 && r2 && r2[i2]) {
                  var a2 = d.findWithCurrent(r2[i2], t2, r2, n2, i2);
                  if (a2)
                    return a2;
                }
                for (; r2 && !r2[n2] && r2 !== o2; )
                  r2 = r2.parentNode;
                r2 && r2[n2] && r2 !== o2 && (r2 = r2[n2]);
              } while (r2 && r2 !== o2);
              return false;
            }, d.up = function(e2, t2, o2) {
              var n2 = e2;
              if (!e2)
                return false;
              do {
                if (t2(n2))
                  return n2;
                if (n2 === o2 || !n2.parentNode)
                  break;
                n2 = n2.parentNode;
              } while (n2 && n2 !== o2);
              return false;
            }, d.closest = function(e2, t2, o2) {
              return d.up(e2, typeof t2 == "function" ? t2 : t2 instanceof RegExp ? function(e3) {
                return e3 && t2.test(e3.nodeName);
              } : function(e3) {
                return e3 && RegExp("^(" + t2 + ")$", "i").test(e3.nodeName);
              }, o2);
            }, d.after = function(e2, t2) {
              var o2 = e2.parentNode;
              o2 && (o2.lastChild === e2 ? o2.appendChild(t2) : o2.insertBefore(t2, e2.nextSibling));
            }, d.moveContent = function(e2, t2, o2) {
              o2 === void 0 && (o2 = false);
              var n2 = (e2.ownerDocument || document).createDocumentFragment();
              [].slice.call(e2.childNodes).forEach(function(e3) {
                e3.nodeType === Node.TEXT_NODE && e3.nodeValue === i.INVISIBLE_SPACE || n2.appendChild(e3);
              }), o2 && t2.firstChild ? t2.insertBefore(n2, t2.firstChild) : t2.appendChild(n2);
            }, d.all = function(e2, t2, o2) {
              o2 === void 0 && (o2 = false);
              var n2 = e2.childNodes ? Array.prototype.slice.call(e2.childNodes) : [];
              if (t2(e2))
                return e2;
              o2 && (n2 = n2.reverse()), n2.forEach(function(e3) {
                d.all(e3, t2, o2);
              });
            }, d.safeRemove = function(e2) {
              e2 && e2.parentNode && e2.parentNode.removeChild(e2);
            }, d.wrapInline = function(e2, t2, o2) {
              for (var n2, i2 = e2, r2 = e2, a2 = o2.selection.save(), s = false; s = false, (n2 = i2.previousSibling) && !d.isBlock(n2, o2.editorWindow) && (s = true, i2 = n2), s; )
                ;
              for (; s = false, (n2 = r2.nextSibling) && !d.isBlock(n2, o2.editorWindow) && (s = true, r2 = n2), s; )
                ;
              var l = typeof t2 == "string" ? o2.create.inside.element(t2) : t2;
              i2.parentNode && i2.parentNode.insertBefore(l, i2);
              for (var c = i2; c && (c = i2.nextSibling, l.appendChild(i2), i2 !== r2 && c); )
                i2 = c;
              return o2.selection.restore(a2), l;
            }, d.wrap = function(e2, t2, o2) {
              var n2 = o2.selection.save(), i2 = typeof t2 == "string" ? o2.editorDocument.createElement(t2) : t2;
              return e2.parentNode ? (e2.parentNode.insertBefore(i2, e2), i2.appendChild(e2), o2.selection.restore(n2), i2) : null;
            }, d.findInline = function(e2, t2, o2) {
              var n2 = e2, i2 = null;
              do {
                if (!n2)
                  break;
                if ((i2 = t2 ? n2.previousSibling : n2.nextSibling) || !n2.parentNode || n2.parentNode === o2 || !d.isInlineBlock(n2.parentNode))
                  break;
                n2 = n2.parentNode;
              } while (!i2);
              for (; i2 && d.isInlineBlock(i2) && (t2 ? i2.lastChild : i2.firstChild); )
                i2 = t2 ? i2.lastChild : i2.firstChild;
              return i2;
            }, d.contains = function(e2, t2) {
              for (; t2.parentNode; ) {
                if (t2.parentNode === e2)
                  return true;
                t2 = t2.parentNode;
              }
              return false;
            }, d.isOrContains = function(e2, t2, o2) {
              return o2 === void 0 && (o2 = false), t2 && e2 && (e2 === t2 && !o2 || d.contains(e2, t2));
            }, d;
          }();
          t.Dom = a;
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.INVISIBLE_SPACE = "\uFEFF", t.INVISIBLE_SPACE_REG_EXP = /[\uFEFF]/g, t.INVISIBLE_SPACE_REG_EXP_END = /[\uFEFF]+$/g, t.INVISIBLE_SPACE_REG_EXP_START = /^[\uFEFF]+/g, t.SPACE_REG_EXP = /[\s\n\t\r\uFEFF\u200b]+/g, t.SPACE_REG_EXP_START = /^[\s\n\t\r\uFEFF\u200b]+/g, t.SPACE_REG_EXP_END = /[\s\n\t\r\uFEFF\u200b]+$/g, t.IS_BLOCK = /^(PRE|DIV|P|LI|H[1-6]|BLOCKQUOTE|TD|TH|TABLE|BODY|HTML|FIGCAPTION|FIGURE)$/i, t.IS_INLINE = /^(STRONG|SPAN|I|EM|B|SUP|SUB)$/, t.MAY_BE_REMOVED_WITH_KEY = /^(IMG|BR|IFRAME|SCRIPT|INPUT|TEXTAREA|HR|JODIT|JODIT-MEDIA)$/, t.KEY_BACKSPACE = 8, t.KEY_TAB = 9, t.KEY_ENTER = 13, t.KEY_ESC = 27, t.KEY_LEFT = 37, t.KEY_UP = 38, t.KEY_RIGHT = 39, t.KEY_DOWN = 40, t.KEY_DELETE = 46, t.KEY_F = 70, t.KEY_R = 82, t.KEY_H = 72, t.KEY_Y = 89, t.KEY_V = 86, t.KEY_Z = 90, t.KEY_F3 = 114, t.NEARBY = 5, t.ACCURACY = 10, t.COMMAND_KEYS = [t.KEY_BACKSPACE, t.KEY_DELETE, t.KEY_UP, t.KEY_DOWN, t.KEY_RIGHT, t.KEY_LEFT, t.KEY_ENTER, t.KEY_ESC, t.KEY_F3, t.KEY_TAB], t.BR = "br", t.PARAGRAPH = "p", t.MODE_WYSIWYG = 1, t.MODE_SOURCE = 2, t.MODE_SPLIT = 3, t.IS_IE = typeof navigator != "undefined" && (navigator.userAgent.indexOf("MSIE") != -1 || /rv:11.0/i.test(navigator.userAgent)), t.URL_LIST = t.IS_IE ? "url" : "text/uri-list", t.TEXT_PLAIN = t.IS_IE ? "text" : "text/plain", t.TEXT_HTML = t.IS_IE ? "text" : "text/html", t.MARKER_CLASS = "jodit_selection_marker", t.EMULATE_DBLCLICK_TIMEOUT = 300, t.JODIT_SELECTED_CELL_MARKER = "data-jodit-selected-cell", t.INSERT_AS_HTML = "insert_as_html", t.INSERT_CLEAR_HTML = "insert_clear_html", t.INSERT_AS_TEXT = "insert_as_text", t.INSERT_ONLY_TEXT = "insert_only_text", t.IS_MAC = typeof window != "undefined" && /Mac|iPod|iPhone|iPad/.test(window.navigator.platform), t.KEY_ALIASES = { add: "+", break: "pause", cmd: "meta", command: "meta", ctl: "control", ctrl: "control", del: "delete", down: "arrowdown", esc: "escape", ins: "insert", left: "arrowleft", mod: t.IS_MAC ? "meta" : "control", opt: "alt", option: "alt", return: "enter", right: "arrowright", space: " ", spacebar: " ", up: "arrowup", win: "meta", windows: "meta" };
        }, function(e, t, o) {
          "use strict";
          var s = this && this.__awaiter || function(r, a2, s2, l2) {
            return new (s2 || (s2 = Promise))(function(e2, t2) {
              function o2(e3) {
                try {
                  i2(l2.next(e3));
                } catch (e4) {
                  t2(e4);
                }
              }
              function n2(e3) {
                try {
                  i2(l2.throw(e3));
                } catch (e4) {
                  t2(e4);
                }
              }
              function i2(t3) {
                t3.done ? e2(t3.value) : new s2(function(e3) {
                  e3(t3.value);
                }).then(o2, n2);
              }
              i2((l2 = l2.apply(r, a2 || [])).next());
            });
          }, l = this && this.__generator || function(o2, n2) {
            var i2, r, a2, e2, s2 = { label: 0, sent: function() {
              if (1 & a2[0])
                throw a2[1];
              return a2[1];
            }, trys: [], ops: [] };
            return e2 = { next: t2(0), throw: t2(1), return: t2(2) }, typeof Symbol == "function" && (e2[Symbol.iterator] = function() {
              return this;
            }), e2;
            function t2(t3) {
              return function(e3) {
                return function(t4) {
                  if (i2)
                    throw new TypeError("Generator is already executing.");
                  for (; s2; )
                    try {
                      if (i2 = 1, r && (a2 = 2 & t4[0] ? r.return : t4[0] ? r.throw || ((a2 = r.return) && a2.call(r), 0) : r.next) && !(a2 = a2.call(r, t4[1])).done)
                        return a2;
                      switch (r = 0, a2 && (t4 = [2 & t4[0], a2.value]), t4[0]) {
                        case 0:
                        case 1:
                          a2 = t4;
                          break;
                        case 4:
                          return s2.label++, { value: t4[1], done: false };
                        case 5:
                          s2.label++, r = t4[1], t4 = [0];
                          continue;
                        case 7:
                          t4 = s2.ops.pop(), s2.trys.pop();
                          continue;
                        default:
                          if (!(a2 = 0 < (a2 = s2.trys).length && a2[a2.length - 1]) && (t4[0] === 6 || t4[0] === 2)) {
                            s2 = 0;
                            continue;
                          }
                          if (t4[0] === 3 && (!a2 || a2[0] < t4[1] && t4[1] < a2[3])) {
                            s2.label = t4[1];
                            break;
                          }
                          if (t4[0] === 6 && s2.label < a2[1]) {
                            s2.label = a2[1], a2 = t4;
                            break;
                          }
                          if (a2 && s2.label < a2[2]) {
                            s2.label = a2[2], s2.ops.push(t4);
                            break;
                          }
                          a2[2] && s2.ops.pop(), s2.trys.pop();
                          continue;
                      }
                      t4 = n2.call(o2, s2);
                    } catch (e4) {
                      t4 = [6, e4], r = 0;
                    } finally {
                      i2 = a2 = 0;
                    }
                  if (5 & t4[0])
                    throw t4[1];
                  return { value: t4[0] ? t4[1] : void 0, done: true };
                }([t3, e3]);
              };
            }
          }, c = this;
          Object.defineProperty(t, "__esModule", { value: true });
          var n = o(1), i = o(14), d = i.Widget.TabsWidget, u = i.Widget.FileSelectorWidget, a = o(0), f = o(3), p = o(5), h = o(16), v = function() {
            function e2() {
              this.iframe = false, this.license = "", this.preset = "custom", this.presets = { inline: { inline: true, toolbar: false, toolbarInline: true, popup: { selection: ["bold", "underline", "italic", "ul", "ol", "outdent", "indent", "\n", "fontsize", "brush", "paragraph", "link", "align", "cut", "dots"] }, showXPathInStatusbar: false, showCharsCounter: false, showWordsCounter: false, showPlaceholder: false } }, this.ownerDocument = typeof document != "undefined" ? document : null, this.ownerWindow = typeof window != "undefined" ? window : null, this.zIndex = 0, this.readonly = false, this.disabled = false, this.activeButtonsInReadOnly = ["source", "fullsize", "print", "about", "dots", "selectall"], this.toolbarButtonSize = "middle", this.inline = false, this.theme = "default", this.saveModeInStorage = false, this.saveHeightInStorage = false, this.spellcheck = true, this.editorCssClass = false, this.triggerChangeEvent = true, this.width = "auto", this.minWidth = "200px", this.maxWidth = "100%", this.height = "auto", this.minHeight = 200, this.direction = "", this.language = "auto", this.debugLanguage = false, this.i18n = "en", this.tabIndex = -1, this.toolbar = true, this.showTooltip = true, this.showTooltipDelay = 500, this.useNativeTooltip = false, this.enter = n.PARAGRAPH, this.enterBlock = n.PARAGRAPH, this.defaultMode = n.MODE_WYSIWYG, this.useSplitMode = false, this.colors = { greyscale: ["#000000", "#434343", "#666666", "#999999", "#B7B7B7", "#CCCCCC", "#D9D9D9", "#EFEFEF", "#F3F3F3", "#FFFFFF"], palette: ["#980000", "#FF0000", "#FF9900", "#FFFF00", "#00F0F0", "#00FFFF", "#4A86E8", "#0000FF", "#9900FF", "#FF00FF"], full: ["#E6B8AF", "#F4CCCC", "#FCE5CD", "#FFF2CC", "#D9EAD3", "#D0E0E3", "#C9DAF8", "#CFE2F3", "#D9D2E9", "#EAD1DC", "#DD7E6B", "#EA9999", "#F9CB9C", "#FFE599", "#B6D7A8", "#A2C4C9", "#A4C2F4", "#9FC5E8", "#B4A7D6", "#D5A6BD", "#CC4125", "#E06666", "#F6B26B", "#FFD966", "#93C47D", "#76A5AF", "#6D9EEB", "#6FA8DC", "#8E7CC3", "#C27BA0", "#A61C00", "#CC0000", "#E69138", "#F1C232", "#6AA84F", "#45818E", "#3C78D8", "#3D85C6", "#674EA7", "#A64D79", "#85200C", "#990000", "#B45F06", "#BF9000", "#38761D", "#134F5C", "#1155CC", "#0B5394", "#351C75", "#733554", "#5B0F00", "#660000", "#783F04", "#7F6000", "#274E13", "#0C343D", "#1C4587", "#073763", "#20124D", "#4C1130"] }, this.colorPickerDefaultTab = "background", this.imageDefaultWidth = 300, this.removeButtons = [], this.disablePlugins = [], this.extraButtons = [], this.sizeLG = 900, this.sizeMD = 700, this.sizeSM = 400, this.buttons = ["source", "|", "bold", "strikethrough", "underline", "italic", "|", "superscript", "subscript", "|", "ul", "ol", "|", "outdent", "indent", "|", "font", "fontsize", "brush", "paragraph", "|", "image", "file", "video", "table", "link", "|", "align", "undo", "redo", "\n", "cut", "hr", "eraser", "copyformat", "|", "symbol", "fullsize", "selectall", "print", "about"], this.buttonsMD = ["source", "|", "bold", "italic", "|", "ul", "ol", "|", "font", "fontsize", "brush", "paragraph", "|", "image", "table", "link", "|", "align", "|", "undo", "redo", "|", "hr", "eraser", "copyformat", "fullsize", "dots"], this.buttonsSM = ["source", "|", "bold", "italic", "|", "ul", "ol", "|", "fontsize", "brush", "paragraph", "|", "image", "table", "link", "|", "align", "|", "undo", "redo", "|", "eraser", "copyformat", "fullsize", "dots"], this.buttonsXS = ["bold", "image", "|", "brush", "paragraph", "|", "align", "|", "undo", "redo", "|", "eraser", "dots"], this.events = {}, this.textIcons = false;
            }
            return Object.defineProperty(e2, "defaultOptions", { get: function() {
              return e2.__defaultOptions || (e2.__defaultOptions = new e2()), e2.__defaultOptions;
            }, enumerable: true, configurable: true }), e2;
          }();
          t.Config = v, t.OptionsDefault = function(e2) {
            var n2 = this, i2 = this;
            if ((i2.plainOptions = e2) !== void 0 && typeof e2 == "object") {
              var r = function(e3, t2) {
                if (t2 === "preset" && v.defaultOptions.presets[e3.preset] !== void 0) {
                  var o2 = v.defaultOptions.presets[e3.preset];
                  Object.keys(o2).forEach(r.bind(n2, o2));
                }
                i2[t2] = typeof v.defaultOptions[t2] != "object" || Array.isArray(v.defaultOptions[t2]) ? e3[t2] : h.extend(true, {}, v.defaultOptions[t2], e3[t2]);
              };
              Object.keys(e2).forEach(r.bind(this, e2));
            }
          }, v.prototype.controls = { print: { exec: function(e2) {
            var t2 = window.open("", "PRINT");
            t2 && (e2.options.iframe ? (e2.events.fire("generateDocumentStructure.iframe", t2.document, e2), t2.document.body.innerHTML = e2.value) : (t2.document.write('<!doctype html><html lang="' + f.defaultLanguage(e2.options.language) + '"><head><title></title></head><body>' + e2.value + "</body></html>"), t2.document.close()), t2.focus(), t2.print(), t2.close());
          }, mode: n.MODE_SOURCE + n.MODE_WYSIWYG }, about: { exec: function(e2) {
            var t2 = e2.getInstance("Dialog");
            t2.setTitle(e2.i18n("About Jodit")), t2.setContent('<div class="jodit_about">                    <div>' + e2.i18n("Jodit Editor") + " v." + e2.getVersion() + " </div><div>" + e2.i18n("License: %s", f.isLicense(e2.options.license) ? f.normalizeLicense(e2.options.license) : e2.i18n("GNU General Public License, version 2 or later")) + '</div><div><a href="https://xdsoft.net/jodit/" target="_blank">http://xdsoft.net/jodit/</a></div><div><a href="https://xdsoft.net/jodit/doc/" target="_blank">' + e2.i18n("Jodit User's Guide") + "</a> " + e2.i18n("contains detailed help for using") + "</div><div>" + e2.i18n("Copyright \xA9 XDSoft.net - Chupurnov Valeriy. All rights reserved.") + "</div></div>"), t2.open();
          }, tooltip: "About Jodit", mode: n.MODE_SOURCE + n.MODE_WYSIWYG }, hr: { command: "insertHorizontalRule", tags: ["hr"], tooltip: "Insert Horizontal Line" }, image: { popup: function(i2, e2, t2, r) {
            var a2 = null;
            return e2 && e2.nodeType !== Node.TEXT_NODE && (e2.tagName === "IMG" || f.$$("img", e2).length) && (a2 = e2.tagName === "IMG" ? e2 : f.$$("img", e2)[0]), u(i2, { filebrowser: function(o2) {
              return s(c, void 0, void 0, function() {
                var t3;
                return l(this, function(e3) {
                  switch (e3.label) {
                    case 0:
                      if (!o2.files || !o2.files.length)
                        return [3, 4];
                      t3 = 0, e3.label = 1;
                    case 1:
                      return t3 < o2.files.length ? [4, i2.selection.insertImage(o2.baseurl + o2.files[t3], null, i2.options.imageDefaultWidth)] : [3, 4];
                    case 2:
                      e3.sent(), e3.label = 3;
                    case 3:
                      return t3 += 1, [3, 1];
                    case 4:
                      return r(), [2];
                  }
                });
              });
            }, upload: function(o2) {
              return s(c, void 0, void 0, function() {
                var t3;
                return l(this, function(e3) {
                  switch (e3.label) {
                    case 0:
                      if (!o2.files || !o2.files.length)
                        return [3, 4];
                      t3 = 0, e3.label = 1;
                    case 1:
                      return t3 < o2.files.length ? [4, i2.selection.insertImage(o2.baseurl + o2.files[t3], null, i2.options.imageDefaultWidth)] : [3, 4];
                    case 2:
                      e3.sent(), e3.label = 3;
                    case 3:
                      return t3 += 1, [3, 1];
                    case 4:
                      return r(), [2];
                  }
                });
              });
            }, url: function(o2, n2) {
              return s(c, void 0, void 0, function() {
                var t3;
                return l(this, function(e3) {
                  switch (e3.label) {
                    case 0:
                      return (t3 = a2 || i2.create.inside.element("img")).setAttribute("src", o2), t3.setAttribute("alt", n2), a2 ? [3, 2] : [4, i2.selection.insertImage(t3, null, i2.options.imageDefaultWidth)];
                    case 1:
                      e3.sent(), e3.label = 2;
                    case 2:
                      return r(), [2];
                  }
                });
              });
            } }, a2, r);
          }, tags: ["img"], tooltip: "Insert Image" }, file: { popup: function(o2, e2, t2, n2) {
            var i2 = function(e3, t3) {
              t3 === void 0 && (t3 = ""), o2.selection.insertNode(o2.create.inside.fromHTML('<a href="' + e3 + '" title="' + t3 + '">' + (t3 || e3) + "</a>"));
            }, r = null;
            return e2 && (e2.nodeName === "A" || a.Dom.closest(e2, "A", o2.editor)) && (r = e2.nodeName === "A" ? e2 : a.Dom.closest(e2, "A", o2.editor)), u(o2, { filebrowser: function(e3) {
              if (e3.files && e3.files.length) {
                var t3 = void 0;
                for (t3 = 0; t3 < e3.files.length; t3 += 1)
                  i2(e3.baseurl + e3.files[t3]);
              }
              n2();
            }, upload: function(e3) {
              var t3;
              if (e3.files && e3.files.length)
                for (t3 = 0; t3 < e3.files.length; t3 += 1)
                  i2(e3.baseurl + e3.files[t3]);
              n2();
            }, url: function(e3, t3) {
              r ? (r.setAttribute("href", e3), r.setAttribute("title", t3)) : i2(e3, t3), n2();
            } }, r, n2, false);
          }, tags: ["a"], tooltip: "Insert file" }, video: { popup: function(t2, e2, o2, n2) {
            var i2 = t2.create.fromHTML('<form class="jodit_form">\n                        <input required name="code" placeholder="http://" type="url"/>\n                        <button type="submit">' + t2.i18n("Insert") + "</button>\n                        </form>"), r = t2.create.fromHTML('<form class="jodit_form">\n                        <textarea required name="code" placeholder="' + t2.i18n("Embed code") + '"></textarea>\n                        <button type="submit">' + t2.i18n("Insert") + "</button>\n                        </form>"), a2 = {}, s2 = t2.selection.save(), l2 = function(e3) {
              t2.selection.restore(s2), t2.selection.insertHTML(e3), n2();
            };
            return t2.options.textIcons ? (a2[t2.i18n("Link")] = i2, a2[t2.i18n("Code")] = r) : (a2[p.ToolbarIcon.getIcon("link") + "&nbsp;" + t2.i18n("Link")] = i2, a2[p.ToolbarIcon.getIcon("source") + "&nbsp;" + t2.i18n("Code")] = r), r.addEventListener("submit", function(e3) {
              return e3.preventDefault(), f.trim(f.val(r, "textarea[name=code]")) ? l2(f.val(r, "textarea[name=code]")) : (r.querySelector("textarea[name=code]").focus(), r.querySelector("textarea[name=code]").classList.add("jodit_error")), false;
            }), i2.addEventListener("submit", function(e3) {
              return e3.preventDefault(), f.isURL(f.val(i2, "input[name=code]")) ? l2(f.convertMediaURLToVideoEmbed(f.val(i2, "input[name=code]"))) : (i2.querySelector("input[name=code]").focus(), i2.querySelector("input[name=code]").classList.add("jodit_error")), false;
            }), d(t2, a2);
          }, tags: ["iframe"], tooltip: "Insert youtube/vimeo video" } };
        }, function(e, o, t) {
          "use strict";
          function n(e2) {
            for (var t2 in e2)
              o.hasOwnProperty(t2) || (o[t2] = e2[t2]);
          }
          Object.defineProperty(o, "__esModule", { value: true }), n(t(19)), n(t(4)), n(t(16)), n(t(40)), n(t(80)), n(t(43)), n(t(22)), n(t(23)), n(t(11)), n(t(48)), n(t(98)), n(t(99)), n(t(8)), n(t(51)), n(t(100)), n(t(52)), n(t(24)), n(t(49)), n(t(101)), n(t(30)), n(t(29)), n(t(50)), n(t(102)), n(t(9)), n(t(31)), n(t(103));
        }, function(e, o, t) {
          "use strict";
          function n(e2) {
            for (var t2 in e2)
              o.hasOwnProperty(t2) || (o[t2] = e2[t2]);
          }
          Object.defineProperty(o, "__esModule", { value: true }), n(t(38)), n(t(15)), n(t(75));
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true });
          var n = function() {
            function o2() {
            }
            return o2.exists = function(e2) {
              return o2.icons[e2] !== void 0;
            }, o2.getIcon = function(e2, t2) {
              return t2 === void 0 && (t2 = "<span></span>"), o2.icons[e2] !== void 0 ? o2.icons[e2] : t2;
            }, o2.icons = {}, o2;
          }();
          t.ToolbarIcon = n;
        }, function(e, t, o) {
          "use strict";
          var n, i = this && this.__extends || (n = function(e2, t2) {
            return (n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e3, t3) {
              e3.__proto__ = t3;
            } || function(e3, t3) {
              for (var o2 in t3)
                t3.hasOwnProperty(o2) && (e3[o2] = t3[o2]);
            })(e2, t2);
          }, function(e2, t2) {
            function o2() {
              this.constructor = e2;
            }
            n(e2, t2), e2.prototype = t2 === null ? Object.create(t2) : (o2.prototype = t2.prototype, new o2());
          });
          Object.defineProperty(t, "__esModule", { value: true });
          var r = function(o2) {
            function e2(e3) {
              var t2 = o2.call(this, e3) || this;
              return t2.destruct = function() {
                t2.isDestructed || (t2.jodit.events && t2.jodit.events.off("beforeDestruct", t2.destruct), t2.beforeDestruct(t2.jodit), t2.isDestructed = true);
              }, e3.events.on("afterInit", t2.afterInit.bind(t2, e3)).on("beforeDestruct", t2.destruct), t2;
            }
            return i(e2, o2), e2;
          }(o(7).Component);
          t.Plugin = r;
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true });
          var n = o(12);
          t.Component = function e2(t2) {
            this.isDestructed = false, t2 && t2 instanceof e2 && n.isJoditObject(this.jodit = t2) && t2.components.push(this);
          };
        }, function(e, p, t) {
          "use strict";
          Object.defineProperty(p, "__esModule", { value: true });
          var h = t(20), v = t(21), m = t(47), g = t(44), b = t(45);
          p.css = function(e2, t2, o, n) {
            n === void 0 && (n = false);
            var i = /^left|top|bottom|right|width|min|max|height|margin|padding|font-size/i;
            if (h.isPlainObject(t2) || o !== void 0) {
              var r = function(e3, t3, o2) {
                o2 != null && i.test(t3) && v.isNumeric("" + o2) && (o2 = parseInt("" + o2, 10) + "px"), o2 !== void 0 && p.css(e3, t3, void 0, true) !== m.normilizeCSSValue(t3, o2) && (e3.style[t3] = o2);
              };
              if (h.isPlainObject(t2))
                for (var a = Object.keys(t2), s = 0; s < a.length; s += 1)
                  r(e2, g.camelCase(a[s]), t2[a[s]]);
              else
                r(e2, g.camelCase(t2), o);
              return "";
            }
            var l = b.fromCamelCase(t2), c = e2.ownerDocument || document, d = !!c && (c.defaultView || c.parentWindow), u = e2.style[t2], f = u !== void 0 && u !== "" ? u : d && !n ? d.getComputedStyle(e2).getPropertyValue(l) : "";
            return i.test(t2) && /^[\-+]?[0-9.]+px$/.test("" + f) && (f = parseInt("" + f, 10)), m.normilizeCSSValue(t2, f);
          };
        }, function(e, n, t) {
          "use strict";
          Object.defineProperty(n, "__esModule", { value: true });
          var r = t(1), a = 1;
          n.$$ = function(e2, t2) {
            var o;
            if (!/:scope/.test(e2) || !r.IS_IE || typeof HTMLDocument != "undefined" && t2 instanceof HTMLDocument)
              o = t2.querySelectorAll(e2);
            else {
              var n2 = t2.id, i = n2 || "_selector_id_" + ("" + Math.random()).slice(2) + a++;
              e2 = e2.replace(/:scope/g, "#" + i), !n2 && t2.setAttribute("id", i), o = t2.parentNode.querySelectorAll(e2), n2 || t2.removeAttribute("id");
            }
            return [].slice.call(o);
          }, n.getXPathByElement = function(t2, e2) {
            if (!t2 || t2.nodeType !== 1)
              return "";
            if (!t2.parentNode || e2 === t2)
              return "";
            if (t2.id)
              return "//*[@id='" + t2.id + "']";
            var o = [].filter.call(t2.parentNode.childNodes, function(e3) {
              return e3.nodeName === t2.nodeName;
            });
            return n.getXPathByElement(t2.parentNode, e2) + "/" + t2.nodeName.toLowerCase() + (1 < o.length ? "[" + (1 + Array.from(o).indexOf(t2)) + "]" : "");
          };
        }, function(e, t, o) {
          "use strict";
          var n, i = this && this.__extends || (n = function(e2, t2) {
            return (n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e3, t3) {
              e3.__proto__ = t3;
            } || function(e3, t3) {
              for (var o2 in t3)
                t3.hasOwnProperty(o2) && (e3[o2] = t3[o2]);
            })(e2, t2);
          }, function(e2, t2) {
            function o2() {
              this.constructor = e2;
            }
            n(e2, t2), e2.prototype = t2 === null ? Object.create(t2) : (o2.prototype = t2.prototype, new o2());
          }), r = this && this.__awaiter || function(r2, a2, s2, l2) {
            return new (s2 || (s2 = Promise))(function(e2, t2) {
              function o2(e3) {
                try {
                  i2(l2.next(e3));
                } catch (e4) {
                  t2(e4);
                }
              }
              function n2(e3) {
                try {
                  i2(l2.throw(e3));
                } catch (e4) {
                  t2(e4);
                }
              }
              function i2(t3) {
                t3.done ? e2(t3.value) : new s2(function(e3) {
                  e3(t3.value);
                }).then(o2, n2);
              }
              i2((l2 = l2.apply(r2, a2 || [])).next());
            });
          }, a = this && this.__generator || function(o2, n2) {
            var i2, r2, a2, e2, s2 = { label: 0, sent: function() {
              if (1 & a2[0])
                throw a2[1];
              return a2[1];
            }, trys: [], ops: [] };
            return e2 = { next: t2(0), throw: t2(1), return: t2(2) }, typeof Symbol == "function" && (e2[Symbol.iterator] = function() {
              return this;
            }), e2;
            function t2(t3) {
              return function(e3) {
                return function(t4) {
                  if (i2)
                    throw new TypeError("Generator is already executing.");
                  for (; s2; )
                    try {
                      if (i2 = 1, r2 && (a2 = 2 & t4[0] ? r2.return : t4[0] ? r2.throw || ((a2 = r2.return) && a2.call(r2), 0) : r2.next) && !(a2 = a2.call(r2, t4[1])).done)
                        return a2;
                      switch (r2 = 0, a2 && (t4 = [2 & t4[0], a2.value]), t4[0]) {
                        case 0:
                        case 1:
                          a2 = t4;
                          break;
                        case 4:
                          return s2.label++, { value: t4[1], done: false };
                        case 5:
                          s2.label++, r2 = t4[1], t4 = [0];
                          continue;
                        case 7:
                          t4 = s2.ops.pop(), s2.trys.pop();
                          continue;
                        default:
                          if (!(a2 = 0 < (a2 = s2.trys).length && a2[a2.length - 1]) && (t4[0] === 6 || t4[0] === 2)) {
                            s2 = 0;
                            continue;
                          }
                          if (t4[0] === 3 && (!a2 || a2[0] < t4[1] && t4[1] < a2[3])) {
                            s2.label = t4[1];
                            break;
                          }
                          if (t4[0] === 6 && s2.label < a2[1]) {
                            s2.label = a2[1], a2 = t4;
                            break;
                          }
                          if (a2 && s2.label < a2[2]) {
                            s2.label = a2[2], s2.ops.push(t4);
                            break;
                          }
                          a2[2] && s2.ops.pop(), s2.trys.pop();
                          continue;
                      }
                      t4 = n2.call(o2, s2);
                    } catch (e4) {
                      t4 = [6, e4], r2 = 0;
                    } finally {
                      i2 = a2 = 0;
                    }
                  if (5 & t4[0])
                    throw t4[1];
                  return { value: t4[0] ? t4[1] : void 0, done: true };
                }([t3, e3]);
              };
            }
          };
          Object.defineProperty(t, "__esModule", { value: true });
          var c = o(2), s = o(1), l = o(0), d = o(3), u = o(30), f = o(29), p = o(53), h = o(56), v = o(105), m = o(57), g = o(33), Jodit = function(o2) {
            function Jodit2(t2, n2) {
              var i2 = o2.call(this) || this;
              if (i2.__defaultStyleDisplayKey = "data-jodit-default-style-display", i2.__defaultClassesKey = "data-jodit-default-classes", i2.commands = {}, i2.__selectionLocked = null, i2.__wasReadOnly = false, i2.storage = new g.Storage(new m.LocalStorageProvider()), i2.editor = i2.create.div(), i2.iframe = null, i2.__plugins = {}, i2.mode = s.MODE_WYSIWYG, i2.isInited = false, i2.options = new c.OptionsDefault(n2), i2.editorDocument = i2.options.ownerDocument, i2.editorWindow = i2.options.ownerWindow, i2.ownerDocument = i2.options.ownerDocument, i2.ownerWindow = i2.options.ownerWindow, typeof t2 == "string")
                try {
                  i2.element = i2.ownerDocument.querySelector(t2);
                } catch (e3) {
                  throw Error('String "' + t2 + '" should be valid HTML selector');
                }
              else
                i2.element = t2;
              if (!i2.element || typeof i2.element != "object" || i2.element.nodeType !== Node.ELEMENT_NODE || !i2.element.cloneNode)
                throw Error('Element "' + t2 + '" should be string or HTMLElement instance');
              i2.element.attributes && Array.from(i2.element.attributes).forEach(function(e3) {
                var t3 = e3.name, o3 = e3.value;
                Jodit2.defaultOptions[t3] === void 0 || n2 && n2[t3] !== void 0 || (["readonly", "disabled"].indexOf(t3) != -1 && (o3 = o3 === "" || o3 === "true"), /^[0-9]+(\.)?([0-9]+)?$/.test("" + o3) && (o3 = +o3), i2.options[t3] = o3);
              }), i2.options.events && Object.keys(i2.options.events).forEach(function(e3) {
                i2.events.on(e3, i2.options.events[e3]);
              }), i2.container.classList.add("jodit_container"), i2.container.setAttribute("contenteditable", "false"), i2.selection = new h.Select(i2), i2.events.on("removeMarkers", function() {
                i2.selection && i2.selection.removeMarkers();
              }), i2.observer = new p.Observer(i2);
              var e2 = null;
              return i2.options.inline && (["TEXTAREA", "INPUT"].indexOf(i2.element.nodeName) == -1 && (i2.container = i2.element, i2.element.setAttribute(i2.__defaultClassesKey, "" + i2.element.className), e2 = i2.container.innerHTML, i2.container.innerHTML = ""), i2.container.classList.add("jodit_inline"), i2.container.classList.add("jodit_container")), i2.element !== i2.container && (i2.element.style.display && i2.element.setAttribute(i2.__defaultStyleDisplayKey, i2.element.style.display), i2.element.style.display = "none"), i2.container.classList.add("jodit_" + (i2.options.theme || "default") + "_theme"), i2.options.zIndex && (i2.container.style.zIndex = "" + parseInt("" + i2.options.zIndex, 10)), i2.workplace = i2.create.div("jodit_workplace", { contenteditable: false }), i2.options.toolbar && i2.toolbar.build(d.splitArray(i2.options.buttons).concat(i2.options.extraButtons), i2.container), i2.container.classList.add("jodit_toolbar_size-" + (["middle", "large", "small"].indexOf(i2.options.toolbarButtonSize.toLowerCase()) != -1 ? i2.options.toolbarButtonSize.toLowerCase() : "middle")), i2.options.textIcons && i2.container.classList.add("jodit_text_icons"), i2.events.on(i2.ownerWindow, "resize", function() {
                i2.events && i2.events.fire("resize");
              }), i2.container.appendChild(i2.workplace), i2.statusbar = new v.StatusBar(i2, i2.container), i2.workplace.appendChild(i2.progress_bar), i2.element.parentNode && i2.element !== i2.container && i2.element.parentNode.insertBefore(i2.container, i2.element), i2.id = i2.element.getAttribute("id") || "" + new Date().getTime(), i2.editor = i2.create.div("jodit_wysiwyg", { contenteditable: true, "aria-disabled": false, tabindex: i2.options.tabIndex }), i2.workplace.appendChild(i2.editor), i2.__initPlugines(), i2.options.enableDragAndDropFileToEditor && i2.options.uploader && (i2.options.uploader.url || i2.options.uploader.insertImageAsBase64URI) && i2.uploader.bind(i2.editor), i2.__initEditor(e2).then(function() {
                return r(i2, void 0, void 0, function() {
                  return a(this, function(e3) {
                    switch (e3.label) {
                      case 0:
                        return this.isInited = true, [4, this.events.fire("afterInit", this)];
                      case 1:
                        return e3.sent(), this.events.fire("afterConstructor", this), [2];
                    }
                  });
                });
              }), i2;
            }
            return i(Jodit2, o2), Object.defineProperty(Jodit2.prototype, "value", { get: function() {
              return this.getEditorValue();
            }, set: function(e2) {
              this.setEditorValue(e2);
            }, enumerable: true, configurable: true }), Object.defineProperty(Jodit2.prototype, "defaultTimeout", { get: function() {
              return this.options && this.options.observer ? this.options.observer.timeout : Jodit2.defaultOptions.observer.timeout;
            }, enumerable: true, configurable: true }), Jodit2.Array = function(e2) {
              return new u.JoditArray(e2);
            }, Jodit2.Object = function(e2) {
              return new f.JoditObject(e2);
            }, Jodit2.fireEach = function(n2) {
              for (var i2 = [], e2 = 1; e2 < arguments.length; e2++)
                i2[e2 - 1] = arguments[e2];
              Object.keys(Jodit2.instances).forEach(function(e3) {
                var t2, o3 = Jodit2.instances[e3];
                !o3.isDestructed && o3.events && (t2 = o3.events).fire.apply(t2, [n2].concat(i2));
              });
            }, Object.defineProperty(Jodit2.prototype, "uploader", { get: function() {
              return this.getInstance("Uploader");
            }, enumerable: true, configurable: true }), Object.defineProperty(Jodit2.prototype, "filebrowser", { get: function() {
              return this.getInstance("FileBrowser");
            }, enumerable: true, configurable: true }), Jodit2.prototype.getElementValue = function() {
              return this.element.value !== void 0 ? this.element.value : this.element.innerHTML;
            }, Jodit2.prototype.getNativeEditorValue = function() {
              return this.editor ? this.editor.innerHTML : this.getElementValue();
            }, Jodit2.prototype.getEditorValue = function(e2) {
              var t2;
              if (e2 === void 0 && (e2 = true), (t2 = this.events.fire("beforeGetValueFromEditor")) !== void 0)
                return t2;
              t2 = this.getNativeEditorValue().replace(s.INVISIBLE_SPACE_REG_EXP, ""), e2 && (t2 = t2.replace(/<span[^>]+id="jodit_selection_marker_[^>]+><\/span>/g, "")), t2 === "<br>" && (t2 = "");
              var o3 = { value: t2 };
              return this.events.fire("afterGetValueFromEditor", o3), o3.value;
            }, Jodit2.prototype.getEditorText = function() {
              if (this.editor)
                return this.editor.innerText;
              var e2 = this.create.inside.div();
              return e2.innerHTML = this.getElementValue(), e2.innerText;
            }, Jodit2.prototype.setElementValue = function(e2) {
              if (typeof e2 != "string" && e2 !== void 0)
                throw Error("value must be string");
              e2 !== void 0 ? this.element !== this.container && (this.element.value !== void 0 ? this.element.value = e2 : this.element.innerHTML = e2) : e2 = this.getElementValue(), e2 !== this.getEditorValue() && this.setEditorValue(e2);
            }, Jodit2.prototype.setEditorValue = function(e2) {
              var t2 = this.events.fire("beforeSetValueToEditor", e2);
              if (t2 !== false)
                if (typeof t2 == "string" && (e2 = t2), this.editor) {
                  if (typeof e2 != "string" && e2 !== void 0)
                    throw Error("value must be string");
                  e2 !== void 0 && this.editor.innerHTML !== e2 && (this.editor.innerHTML = e2);
                  var o3 = this.getElementValue(), n2 = this.getEditorValue();
                  o3 !== n2 && (this.setElementValue(n2), this.events.fire("change", n2, o3));
                } else
                  e2 !== void 0 && this.setElementValue(e2);
            }, Jodit2.prototype.registerCommand = function(e2, t2) {
              var o3 = e2.toLowerCase();
              if (this.commands[o3] === void 0 && (this.commands[o3] = []), this.commands[o3].push(t2), typeof t2 != "function") {
                var n2 = this.options.commandToHotkeys[o3] || this.options.commandToHotkeys[e2] || t2.hotkeys;
                n2 && this.registerHotkeyToCommand(n2, o3);
              }
              return this;
            }, Jodit2.prototype.registerHotkeyToCommand = function(e2, t2) {
              var o3 = this, n2 = d.asArray(e2).map(d.normalizeKeyAliases).map(function(e3) {
                return e3 + ".hotkey";
              }).join(" ");
              this.events.off(n2).on(n2, function() {
                return o3.execCommand(t2);
              });
            }, Jodit2.prototype.execCommand = function(e2, t2, o3) {
              if (t2 === void 0 && (t2 = false), o3 === void 0 && (o3 = null), !this.options.readonly || e2 === "selectall") {
                var n2;
                if (e2 = e2.toLowerCase(), (n2 = this.events.fire("beforeCommand", e2, t2, o3)) !== false && (n2 = this.execCustomCommands(e2, t2, o3)), n2 !== false)
                  switch (this.selection.focus(), e2) {
                    case "selectall":
                      this.selection.select(this.editor, true);
                      break;
                    default:
                      try {
                        n2 = this.editorDocument.execCommand(e2, t2, o3);
                      } catch (e3) {
                      }
                  }
                return this.events.fire("afterCommand", e2, t2, o3), this.setEditorValue(), n2;
              }
            }, Jodit2.prototype.execCustomCommands = function(e2, t2, o3) {
              var n2, i2;
              if (t2 === void 0 && (t2 = false), o3 === void 0 && (o3 = null), e2 = e2.toLowerCase(), this.commands[e2] !== void 0) {
                for (var r2 = void 0, a2 = 0; a2 < this.commands[e2].length; a2 += 1)
                  (i2 = (typeof (n2 = this.commands[e2][a2]) == "function" ? n2 : n2.exec).call(this, e2, t2, o3)) !== void 0 && (r2 = i2);
                return r2;
              }
            }, Jodit2.prototype.lock = function(e2) {
              return e2 === void 0 && (e2 = "any"), !!o2.prototype.lock.call(this, e2) && (this.__selectionLocked = this.selection.save(), this.editor.classList.add("jodit_disabled"), true);
            }, Jodit2.prototype.unlock = function() {
              return !!o2.prototype.unlock.call(this) && (this.editor.classList.remove("jodit_disabled"), this.__selectionLocked && this.selection.restore(this.__selectionLocked), true);
            }, Jodit2.prototype.getMode = function() {
              return this.mode;
            }, Jodit2.prototype.isEditorMode = function() {
              return this.getRealMode() === s.MODE_WYSIWYG;
            }, Jodit2.prototype.getRealMode = function() {
              if (this.getMode() !== s.MODE_SPLIT)
                return this.getMode();
              var e2 = this.ownerDocument.activeElement;
              return e2 && (l.Dom.isOrContains(this.editor, e2) || l.Dom.isOrContains(this.toolbar.container, e2)) ? s.MODE_WYSIWYG : s.MODE_SOURCE;
            }, Jodit2.prototype.setMode = function(e2) {
              var t2 = this, o3 = this.getMode(), n2 = { mode: parseInt("" + e2, 10) }, i2 = ["jodit_wysiwyg_mode", "jodit_source_mode", "jodit_split_mode"];
              this.events.fire("beforeSetMode", n2) !== false && (this.mode = d.inArray(n2.mode, [s.MODE_SOURCE, s.MODE_WYSIWYG, s.MODE_SPLIT]) ? n2.mode : s.MODE_WYSIWYG, this.options.saveModeInStorage && this.storage.set("jodit_default_mode", this.mode), i2.forEach(function(e3) {
                t2.container.classList.remove(e3);
              }), this.container.classList.add(i2[this.mode - 1]), o3 !== this.getMode() && this.events.fire("afterSetMode"));
            }, Jodit2.prototype.toggleMode = function() {
              var e2 = this.getMode();
              d.inArray(e2 + 1, [s.MODE_SOURCE, s.MODE_WYSIWYG, this.options.useSplitMode ? s.MODE_SPLIT : 9]) ? e2 += 1 : e2 = s.MODE_WYSIWYG, this.setMode(e2);
            }, Jodit2.prototype.i18n = function(e2) {
              for (var t2 = this, o3 = [], n2 = 1; n2 < arguments.length; n2++)
                o3[n2 - 1] = arguments[n2];
              var i2, r2 = this.options !== void 0 && this.options.debugLanguage, a2 = function(e3) {
                return o3.length ? d.sprintf.apply(t2, [e3].concat(o3)) : e3;
              }, s2 = c.Config.defaultOptions.language === "auto" ? d.defaultLanguage(c.Config.defaultOptions.language) : c.Config.defaultOptions.language, l2 = d.defaultLanguage(this.options ? this.options.language : s2);
              return i2 = this.options !== void 0 && Jodit2.lang[l2] !== void 0 ? Jodit2.lang[l2] : Jodit2.lang[s2] !== void 0 ? Jodit2.lang[s2] : Jodit2.lang.en, this.options !== void 0 && this.options.i18n[l2] !== void 0 && this.options.i18n[l2][e2] ? a2(this.options.i18n[l2][e2]) : typeof i2[e2] == "string" && i2[e2] ? a2(i2[e2]) : r2 ? "{" + e2 + "}" : a2(typeof Jodit2.lang.en[e2] == "string" && Jodit2.lang.en[e2] ? Jodit2.lang.en[e2] : e2);
            }, Jodit2.prototype.setDisabled = function(e2) {
              this.options.disabled = e2;
              var t2 = this.__wasReadOnly;
              this.setReadOnly(e2 || t2), this.__wasReadOnly = t2, this.editor && (this.editor.setAttribute("aria-disabled", "" + e2), this.container.classList.toggle("jodit_disabled", e2), this.events.fire("disabled", e2));
            }, Jodit2.prototype.getDisabled = function() {
              return this.options.disabled;
            }, Jodit2.prototype.setReadOnly = function(e2) {
              this.__wasReadOnly !== e2 && (this.__wasReadOnly = e2, (this.options.readonly = e2) ? this.editor && this.editor.removeAttribute("contenteditable") : this.editor && this.editor.setAttribute("contenteditable", "true"), this.events && this.events.fire("readonly", e2));
            }, Jodit2.prototype.getReadOnly = function() {
              return this.options.readonly;
            }, Jodit2.prototype.__initPlugines = function() {
              var t2 = this, o3 = Array.isArray(this.options.disablePlugins) ? this.options.disablePlugins.map(function(e2) {
                return e2.toLowerCase();
              }) : this.options.disablePlugins.toLowerCase().split(/[\s,]+/);
              Object.keys(Jodit2.plugins).forEach(function(e2) {
                o3.indexOf(e2.toLowerCase()) == -1 && (t2.__plugins[e2] = new Jodit2.plugins[e2](t2));
              });
            }, Jodit2.prototype.__initEditor = function(n2) {
              return r(this, void 0, void 0, function() {
                var t2, o3;
                return a(this, function(e2) {
                  switch (e2.label) {
                    case 0:
                      return [4, this.__createEditor()];
                    case 1:
                      e2.sent(), this.element !== this.container ? this.setElementValue() : n2 !== null && this.setEditorValue(n2), t2 = (Jodit2.instances[this.id] = this).options.defaultMode, this.options.saveModeInStorage && (o3 = this.storage.get("jodit_default_mode")) !== null && (t2 = parseInt(o3, 10)), this.setMode(t2), this.options.readonly && this.setReadOnly(true), this.options.disabled && this.setDisabled(true);
                      try {
                        this.editorDocument.execCommand("defaultParagraphSeparator", false, this.options.enter.toLowerCase());
                      } catch (e3) {
                      }
                      try {
                        this.editorDocument.execCommand("enableObjectResizing", false, "false");
                      } catch (e3) {
                      }
                      try {
                        this.editorDocument.execCommand("enableInlineTableEditing", false, "false");
                      } catch (e3) {
                      }
                      return [2];
                  }
                });
              });
            }, Jodit2.prototype.__createEditor = function() {
              return r(this, void 0, void 0, function() {
                var t2, o3 = this;
                return a(this, function(e2) {
                  switch (e2.label) {
                    case 0:
                      return t2 = this.editor, [4, this.events.fire("createEditor", this)];
                    case 1:
                      return e2.sent() === false && l.Dom.safeRemove(t2), this.options.editorCssClass && this.editor.classList.add(this.options.editorCssClass), this.events.on("synchro", function() {
                        o3.setEditorValue();
                      }).on(this.editor, "selectionchange selectionstart keydown keyup keypress mousedown mouseup mousepress click copy cut dragstart drop dragover paste resize touchstart touchend focus blur", function(e3) {
                        if (!o3.options.readonly && o3.events && o3.events.fire) {
                          if (o3.events.fire(e3.type, e3) === false)
                            return false;
                          o3.setEditorValue();
                        }
                      }), this.options.spellcheck && this.editor.setAttribute("spellcheck", "true"), this.options.direction && (this.editor.style.direction = this.options.direction.toLowerCase() === "rtl" ? "rtl" : "ltr"), this.options.triggerChangeEvent && this.events.on("change", d.debounce(function() {
                        o3.events && o3.events.fire(o3.element, "change");
                      }, this.defaultTimeout)), [2];
                  }
                });
              });
            }, Jodit2.prototype.destruct = function() {
              var t2 = this;
              if (!this.isDestructed && !(this.isDestructed = true) !== this.events.fire("beforeDestruct") && this.editor) {
                var e2 = this.getEditorValue();
                this.element !== this.container ? this.element.hasAttribute(this.__defaultStyleDisplayKey) ? (this.element.style.display = this.element.getAttribute(this.__defaultStyleDisplayKey), this.element.removeAttribute(this.__defaultStyleDisplayKey)) : this.element.style.display = "" : this.element.hasAttribute(this.__defaultClassesKey) && (this.element.className = this.element.getAttribute(this.__defaultClassesKey) || "", this.element.removeAttribute(this.__defaultClassesKey)), this.element.hasAttribute("style") && !this.element.getAttribute("style") && this.element.removeAttribute("style"), Object.keys(this.__plugins).forEach(function(e3) {
                  t2.__plugins !== void 0 && t2.__plugins[e3] !== void 0 && t2.__plugins[e3].destruct !== void 0 && typeof t2.__plugins[e3].destruct == "function" && t2.__plugins[e3].destruct(), delete t2.__plugins[e3];
                }), this.components.forEach(function(e3) {
                  e3.destruct !== void 0 && typeof e3.destruct == "function" && e3.destruct();
                }), delete this.selection, this.events.off(this.ownerWindow), this.events.off(this.ownerDocument), this.events.off(this.ownerDocument.body), this.events.off(this.element), this.events.off(this.editor), this.events.destruct(), delete this.events, l.Dom.safeRemove(this.workplace), l.Dom.safeRemove(this.editor), l.Dom.safeRemove(this.iframe), this.container !== this.element && l.Dom.safeRemove(this.container), delete this.editor, delete this.workplace, this.container === this.element && (this.element.innerHTML = e2), delete Jodit2.instances[this.id], delete this.container;
              }
            }, Jodit2.plugins = {}, Jodit2.modules = {}, Jodit2.instances = {}, Jodit2.lang = {}, Jodit2;
          }(o(58).ViewWithToolbar);
          t.Jodit = Jodit;
        }, function(e, o, t) {
          "use strict";
          function n(e2) {
            for (var t2 in e2)
              o.hasOwnProperty(t2) || (o[t2] = e2[t2]);
          }
          Object.defineProperty(o, "__esModule", { value: true }), n(t(44)), n(t(45)), n(t(88)), n(t(32));
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.isJoditObject = function(e2) {
            return !!(e2 && e2 instanceof Object && typeof e2.constructor == "function" && e2.constructor.name === "Jodit");
          };
        }, function(e, t, o) {
          "use strict";
          var n, i = this && this.__extends || (n = function(e2, t2) {
            return (n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e3, t3) {
              e3.__proto__ = t3;
            } || function(e3, t3) {
              for (var o2 in t3)
                t3.hasOwnProperty(o2) && (e3[o2] = t3[o2]);
            })(e2, t2);
          }, function(e2, t2) {
            function o2() {
              this.constructor = e2;
            }
            n(e2, t2), e2.prototype = t2 === null ? Object.create(t2) : (o2.prototype = t2.prototype, new o2());
          }), a = this && this.__assign || function() {
            return (a = Object.assign || function(e2) {
              for (var t2, o2 = 1, n2 = arguments.length; o2 < n2; o2++)
                for (var i2 in t2 = arguments[o2])
                  Object.prototype.hasOwnProperty.call(t2, i2) && (e2[i2] = t2[i2]);
              return e2;
            }).apply(this, arguments);
          };
          Object.defineProperty(t, "__esModule", { value: true });
          var s = o(2), l = o(1), c = o(3), r = o(59), d = o(0), u = o(12);
          s.Config.prototype.dialog = { resizable: true, draggable: true, buttons: ["dialog.close"], removeButtons: [] }, s.Config.prototype.controls.dialog = { close: { icon: "cancel", exec: function(e2) {
            e2.close();
          } }, fullsize: { icon: "fullsize", getLabel: function(e2, t2, o2) {
            if (s.Config.prototype.controls.fullsize && s.Config.prototype.controls.fullsize.getLabel && typeof s.Config.prototype.controls.fullsize.getLabel == "function")
              return s.Config.prototype.controls.fullsize.getLabel(e2, t2, o2);
          }, exec: function(e2) {
            e2.toggleFullSize();
          } } };
          var f = function(r2) {
            function e2(e3, t2) {
              t2 === void 0 && (t2 = s.Config.prototype.dialog);
              var o2 = r2.call(this, e3, t2) || this;
              o2.destinition = document.body, o2.destroyAfterClose = false, o2.moved = false, o2.iSetMaximization = false, o2.resizeble = false, o2.draggable = false, o2.startX = 0, o2.startY = 0, o2.startPoint = { x: 0, y: 0, w: 0, h: 0 }, o2.__isDestructed = false, o2.lockSelect = function() {
                o2.container.classList.add("jodit_dialog_box-moved");
              }, o2.unlockSelect = function() {
                o2.container.classList.remove("jodit_dialog_box-moved");
              }, o2.document = document, o2.window = window, o2.close = function(e4) {
                o2.__isDestructed || (e4 && (e4.stopImmediatePropagation(), e4.preventDefault()), o2.jodit && o2.jodit.events && o2.jodit.events.fire("beforeClose", o2), o2.container.classList && o2.container.classList.remove("active"), o2.iSetMaximization && o2.maximization(false), o2.destroyAfterClose && o2.destruct(), o2.jodit && o2.jodit.events && o2.jodit.events.fire(o2, "afterClose"));
              }, u.isJoditObject(e3) && (o2.window = e3.ownerWindow, o2.document = e3.ownerDocument, e3.events.on("beforeDestruct", function() {
                o2.destruct();
              }));
              var n2 = o2;
              n2.options = a({}, e3 && e3.options ? e3.options.dialog : s.Config.prototype.dialog, n2.options), n2.container = o2.create.fromHTML('<div style="z-index:' + n2.options.zIndex + '" class="jodit jodit_dialog_box"><div class="jodit_dialog_overlay"></div><div class="jodit_dialog"><div class="jodit_dialog_header non-selected"><div class="jodit_dialog_header-title"></div><div class="jodit_dialog_header-toolbar"></div></div><div class="jodit_dialog_content"></div><div class="jodit_dialog_footer"></div>' + (n2.options.resizable ? '<div class="jodit_dialog_resizer"></div>' : "") + "</div></div>"), e3 && e3.id && n2.container.setAttribute("data-editor_id", e3.id), Object.defineProperty(n2.container, "__jodit_dialog", { value: n2 }), n2.dialog = n2.container.querySelector(".jodit_dialog"), n2.resizer = n2.container.querySelector(".jodit_dialog_resizer"), n2.jodit && n2.jodit.options && n2.jodit.options.textIcons && n2.container.classList.add("jodit_text_icons"), n2.dialogbox_header = n2.container.querySelector(".jodit_dialog_header>.jodit_dialog_header-title"), n2.dialogbox_content = n2.container.querySelector(".jodit_dialog_content"), n2.dialogbox_footer = n2.container.querySelector(".jodit_dialog_footer"), n2.dialogbox_toolbar = n2.container.querySelector(".jodit_dialog_header>.jodit_dialog_header-toolbar"), n2.destinition.appendChild(n2.container), n2.container.addEventListener("close_dialog", n2.close), n2.events.on(o2.window, "mousemove", n2.onMouseMove.bind(n2)).on(o2.window, "mouseup", n2.onMouseUp.bind(n2)).on(o2.window, "keydown", n2.onKeyDown.bind(n2)).on(o2.window, "resize", n2.onResize.bind(n2));
              var i2 = n2.container.querySelector(".jodit_dialog_header");
              return i2 && i2.addEventListener("mousedown", n2.onHeaderMouseDown.bind(n2)), n2.options.resizable && n2.resizer.addEventListener("mousedown", n2.onResizerMouseDown.bind(n2)), p.Jodit.plugins.fullsize(n2), o2;
            }
            return i(e2, r2), e2.prototype.setElements = function(o2, e3) {
              var n2 = this, i2 = [];
              c.asArray(e3).forEach(function(e4) {
                var t2 = typeof e4 == "string" ? n2.create.fromHTML(e4) : e4;
                i2.push(t2), t2.parentNode !== o2 && o2.appendChild(t2);
              }), Array.from(o2.childNodes).forEach(function(e4) {
                i2.indexOf(e4) == -1 && o2.removeChild(e4);
              });
            }, e2.prototype.onMouseUp = function() {
              (this.draggable || this.resizeble) && (this.draggable = false, this.resizeble = false, this.unlockSelect(), this.jodit && this.jodit.events && this.jodit.events.fire(this, "endResize endMove"));
            }, e2.prototype.onHeaderMouseDown = function(e3) {
              var t2 = e3.target;
              !this.options.draggable || t2 && t2.nodeName.match(/^(INPUT|SELECT)$/) || (this.draggable = true, this.startX = e3.clientX, this.startY = e3.clientY, this.startPoint.x = c.css(this.dialog, "left"), this.startPoint.y = c.css(this.dialog, "top"), this.setMaxZIndex(), e3.preventDefault(), this.lockSelect(), this.jodit && this.jodit.events && this.jodit.events.fire(this, "startMove"));
            }, e2.prototype.onMouseMove = function(e3) {
              this.draggable && this.options.draggable && (this.setPosition(this.startPoint.x + e3.clientX - this.startX, this.startPoint.y + e3.clientY - this.startY), this.jodit && this.jodit.events && this.jodit.events.fire(this, "move", e3.clientX - this.startX, e3.clientY - this.startY), e3.stopImmediatePropagation(), e3.preventDefault()), this.resizeble && this.options.resizable && (this.setSize(this.startPoint.w + e3.clientX - this.startX, this.startPoint.h + e3.clientY - this.startY), this.jodit && this.jodit.events && this.jodit.events.fire(this, "resizeDialog", e3.clientX - this.startX, e3.clientY - this.startY), e3.stopImmediatePropagation(), e3.preventDefault());
            }, e2.prototype.onKeyDown = function(e3) {
              if (this.isOpened() && e3.which === l.KEY_ESC) {
                var t2 = this.getMaxZIndexDialog();
                t2 ? t2.close() : this.close(), e3.stopImmediatePropagation();
              }
            }, e2.prototype.onResize = function() {
              !this.options.resizable || this.moved || !this.isOpened() || this.offsetX || this.offsetY || this.setPosition();
            }, e2.prototype.onResizerMouseDown = function(e3) {
              this.resizeble = true, this.startX = e3.clientX, this.startY = e3.clientY, this.startPoint.w = this.dialog.offsetWidth, this.startPoint.h = this.dialog.offsetHeight, this.lockSelect(), this.jodit.events && this.jodit.events.fire(this, "startResize");
            }, e2.prototype.setSize = function(e3, t2) {
              e3 && c.css(this.dialog, "width", e3), t2 && c.css(this.dialog, "height", t2);
            }, e2.prototype.setPosition = function(e3, t2) {
              var o2 = this.window.innerWidth / 2 - this.dialog.offsetWidth / 2, n2 = this.window.innerHeight / 2 - this.dialog.offsetHeight / 2;
              e3 !== void 0 && t2 !== void 0 && (this.offsetX = e3, this.offsetY = t2, this.moved = 100 < Math.abs(e3 - o2) || 100 < Math.abs(t2 - n2)), this.dialog.style.left = (e3 || o2) + "px", this.dialog.style.top = (t2 || n2) + "px";
            }, e2.prototype.setTitle = function(e3) {
              this.setElements(this.dialogbox_header, e3);
            }, e2.prototype.setContent = function(e3) {
              this.setElements(this.dialogbox_content, e3);
            }, e2.prototype.setFooter = function(e3) {
              this.setElements(this.dialogbox_footer, e3), this.dialog.classList.toggle("with_footer", !!e3);
            }, e2.prototype.getZIndex = function() {
              return parseInt(this.container.style.zIndex || "0", 10);
            }, e2.prototype.getMaxZIndexDialog = function() {
              var t2, o2, n2 = 0, i2 = this;
              return c.$$(".jodit_dialog_box", this.destinition).forEach(function(e3) {
                t2 = e3.__jodit_dialog, o2 = parseInt(c.css(e3, "zIndex"), 10), t2.isOpened() && !isNaN(o2) && n2 < o2 && (i2 = t2, n2 = o2);
              }), i2;
            }, e2.prototype.setMaxZIndex = function() {
              var t2 = 0, o2 = 0;
              c.$$(".jodit_dialog_box", this.destinition).forEach(function(e3) {
                o2 = parseInt(c.css(e3, "zIndex"), 10), t2 = Math.max(isNaN(o2) ? 0 : o2, t2);
              }), this.container.style.zIndex = "" + (t2 + 1);
            }, e2.prototype.maximization = function(t2) {
              return typeof t2 != "boolean" && (t2 = !this.container.classList.contains("jodit_dialog_box-fullsize")), this.container.classList.toggle("jodit_dialog_box-fullsize", t2), [this.destinition, this.destinition.parentNode].forEach(function(e3) {
                e3 && e3.classList && e3.classList.toggle("jodit_fullsize_box", t2);
              }), this.iSetMaximization = t2;
            }, e2.prototype.open = function(e3, t2, o2, n2) {
              this.jodit && this.jodit.events && this.jodit.events.fire(this, "beforeOpen") === false || (this.destroyAfterClose = o2 === true, t2 !== void 0 && this.setTitle(t2), e3 && this.setContent(e3), this.container.classList.add("active"), n2 && this.container.classList.add("jodit_modal"), this.setPosition(this.offsetX, this.offsetY), this.setMaxZIndex(), this.options.fullsize && this.maximization(true), this.jodit && this.jodit.events && this.jodit.events.fire("afterOpen", this));
            }, e2.prototype.isOpened = function() {
              return !this.__isDestructed && this.container.classList.contains("active");
            }, e2.prototype.destruct = function() {
              this.__isDestructed || (this.container && d.Dom.safeRemove(this.container), delete this.container, this.jodit && this.jodit.events || this.events.destruct(), this.__isDestructed = true);
            }, e2;
          }(r.View);
          t.Dialog = f;
          var p = o(10);
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true });
          var u, c = o(0), f = o(3), p = o(5);
          (u = t.Widget || (t.Widget = {})).ColorPickerWidget = function(r, a, e2) {
            var n = f.normalizeColor(e2), s = r.create.div("jodit_colorpicker"), i = r.options.textIcons ? "" : p.ToolbarIcon.getIcon("eye"), t2 = r.options.textIcons ? "<span>" + r.i18n("eraser") + "</span>" : p.ToolbarIcon.getIcon("eraser"), l = function(t3) {
              var o2 = [];
              return f.isPlainObject(t3) ? Object.keys(t3).forEach(function(e3) {
                o2.push('<div class="jodit_colorpicker_group jodit_colorpicker_group-' + e3 + '">'), o2.push(l(t3[e3])), o2.push("</div>");
              }) : Array.isArray(t3) && t3.forEach(function(e3) {
                o2.push("<a " + (n === e3 ? ' class="active" ' : "") + ' title="' + e3 + '" style="background-color:' + e3 + '" data-color="' + e3 + '" href="javascript:void(0)">' + (n === e3 ? i : "") + "</a>");
              }), o2.join("");
            };
            return s.appendChild(r.create.fromHTML("<div>" + l(r.options.colors) + "</div>")), s.appendChild(r.create.fromHTML("<a " + (r.options.textIcons ? 'class="jodit_text_icon"' : "") + ' data-color="" href="javascript:void(0)">' + t2 + "</a>")), r.events.on(s, "mousedown touchend", function(e3) {
              e3.stopPropagation();
              var t3 = e3.target;
              if (t3.tagName.toUpperCase() !== "SVG" && t3.tagName.toUpperCase() !== "PATH" || !t3.parentNode || (t3 = c.Dom.closest(t3.parentNode, "A", r.editor)), t3.tagName.toUpperCase() === "A") {
                var o2 = s.querySelector("a.active");
                o2 && (o2.classList.remove("active"), o2.innerHTML = "");
                var n2 = t3.getAttribute("data-color") || "";
                if (n2) {
                  t3.innerHTML = p.ToolbarIcon.getIcon("eye"), t3.classList.add("active");
                  var i2 = f.hexToRgb(n2);
                  i2 && (t3.firstChild.style.fill = "rgb(" + (255 - i2.r) + "," + (255 - i2.g) + "," + (255 - i2.b) + ")");
                }
                a && typeof a == "function" && a(n2), e3.preventDefault();
              }
            }), s;
          }, u.TabsWidget = function(r, e2, a) {
            var t2 = r.create.div("jodit_tabs"), s = r.create.div("jodit_tabs_wrapper"), l = r.create.div("jodit_tabs_buttons"), c2 = {}, d = "", u2 = 0;
            return t2.appendChild(l), t2.appendChild(s), f.each(e2, function(t3, o2) {
              var n = r.create.div("jodit_tab"), i = r.create.element("a", { href: "javascript:void(0);" });
              d || (d = "" + t3), i.innerHTML = r.i18n("" + t3), l.appendChild(i), n.appendChild(typeof o2 != "function" ? o2 : r.create.div("jodit_tab_empty")), s.appendChild(n), r.events.on(i, "mousedown touchend", function(e3) {
                return f.$$("a", l).forEach(function(e4) {
                  e4.classList.remove("active");
                }), f.$$(".jodit_tab", s).forEach(function(e4) {
                  e4.classList.remove("active");
                }), i.classList.add("active"), n.classList.add("active"), typeof o2 == "function" && o2.call(r), e3.stopPropagation(), a && (a.__activeTab = "" + t3), false;
              }), c2[t3] = { button: i, tab: n }, u2 += 1;
            }), u2 && (f.$$("a", l).forEach(function(e3) {
              e3.style.width = (100 / u2).toFixed(10) + "%";
            }), a && a.__activeTab && c2[a.__activeTab] ? (c2[a.__activeTab].button.classList.add("active"), c2[a.__activeTab].tab.classList.add("active")) : (c2[d].button.classList.add("active"), c2[d].tab.classList.add("active"))), t2;
          }, u.FileSelectorWidget = function(t2, o2, e2, n, i) {
            var r;
            i === void 0 && (i = true);
            var a = {};
            if (o2.upload && t2.options.uploader && (t2.options.uploader.url || t2.options.uploader.insertImageAsBase64URI)) {
              var s = t2.create.fromHTML('<div class="jodit_draganddrop_file_box"><strong>' + t2.i18n(i ? "Drop image" : "Drop file") + "</strong><span><br> " + t2.i18n("or click") + '</span><input type="file" accept="' + (i ? "image/*" : "*") + 'image/*" tabindex="-1" dir="auto" multiple=""/></div>');
              t2.getInstance("Uploader").bind(s, function(e3) {
                typeof o2.upload == "function" && o2.upload.call(t2, { baseurl: e3.baseurl, files: e3.files });
              }, function(e3) {
                t2.events.fire("errorMessage", e3.message);
              }), a[(t2.options.textIcons ? "" : p.ToolbarIcon.getIcon("upload")) + t2.i18n("Upload")] = s;
            }
            if (o2.filebrowser && (t2.options.filebrowser.ajax.url || t2.options.filebrowser.items.url) && (a[(t2.options.textIcons ? "" : p.ToolbarIcon.getIcon("folder")) + t2.i18n("Browse")] = function() {
              n && n(), o2.filebrowser && t2.getInstance("FileBrowser").open(o2.filebrowser, i);
            }), o2.url) {
              var l = t2.create.fromHTML('<form onsubmit="return false;" class="jodit_form"><input type="text" required name="url" placeholder="http://"/><input type="text" name="text" placeholder="' + t2.i18n("Alternative text") + '"/><div style="text-align: right"><button>' + t2.i18n("Insert") + "</button></div></form>"), c2 = l.querySelector("button"), d = l.querySelector("input[name=url]");
              r = null, e2 && e2.nodeType !== Node.TEXT_NODE && (e2.tagName === "IMG" || f.$$("img", e2).length) && (r = e2.tagName === "IMG" ? e2 : f.$$("img", e2)[0], f.val(l, "input[name=url]", r.getAttribute("src")), f.val(l, "input[name=text]", r.getAttribute("alt")), c2.innerText = t2.i18n("Update")), e2 && e2.nodeType !== Node.TEXT_NODE && e2.nodeName === "A" && (f.val(l, "input[name=url]", e2.getAttribute("href") || ""), f.val(l, "input[name=text]", e2.getAttribute("title") || ""), c2.innerText = t2.i18n("Update")), l.addEventListener("submit", function(e3) {
                return e3.preventDefault(), e3.stopPropagation(), f.val(l, "input[name=url]") ? typeof o2.url == "function" && o2.url.call(t2, f.val(l, "input[name=url]"), f.val(l, "input[name=text]")) : (d.focus(), d.classList.add("jodit_error")), false;
              }, false), a[(t2.options.textIcons ? "" : p.ToolbarIcon.getIcon("link")) + " URL"] = l;
            }
            return u.TabsWidget(t2, a);
          };
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.setTimeout = function(e2, t2, o2, n, i) {
            return t2 ? window.setTimeout.call(window, e2, t2, o2, n, i) : (e2.call(null, o2, n, i), 0);
          };
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true });
          var h = o(29), v = o(30), m = o(31), g = o(20);
          t.extend = function e2() {
            for (var t2 = [], o2 = 0; o2 < arguments.length; o2++)
              t2[o2] = arguments[o2];
            var n, i, r, a, s, l, c, d = t2.length, u = t2[0] || {}, f = 1, p = false;
            for (typeof u == "boolean" && (p = u, u = t2[f] || {}, f += 1), typeof u != "object" && m.type(u) === "function" && (u = {}), f === d && (u = this, f += 1); f < d; f += 1)
              if ((n = t2[f]) != null)
                for (c = Object.keys(n), l = 0; l < c.length; l += 1)
                  r = u[i = c[l]], u !== (a = n[i]) && (p && a && (g.isPlainObject(a) && !(a instanceof h.JoditObject) || Array.isArray(a) && !(a instanceof v.JoditArray)) ? (s = Array.isArray(a) ? r && Array.isArray(r) ? r : [] : r && g.isPlainObject(r) ? r : {}, u[i] = e2(p, s, a)) : a !== void 0 && (u[i] = a));
            return u;
          };
        }, function(e, t, o) {
          "use strict";
          var n, i = this && this.__extends || (n = function(e2, t2) {
            return (n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e3, t3) {
              e3.__proto__ = t3;
            } || function(e3, t3) {
              for (var o2 in t3)
                t3.hasOwnProperty(o2) && (e3[o2] = t3[o2]);
            })(e2, t2);
          }, function(e2, t2) {
            function o2() {
              this.constructor = e2;
            }
            n(e2, t2), e2.prototype = t2 === null ? Object.create(t2) : (o2.prototype = t2.prototype, new o2());
          });
          Object.defineProperty(t, "__esModule", { value: true });
          var r = o(34), a = o(0), l = o(8), c = o(1), d = o(12), s = function(s2) {
            function t2() {
              var a2 = s2 !== null && s2.apply(this, arguments) || this;
              return a2.checkActiveStatus = function(o2, n2) {
                var i2 = 0, r2 = 0;
                return Object.keys(o2).forEach(function(e2) {
                  var t3 = o2[e2];
                  typeof t3 == "function" ? t3(a2.jodit, "" + l.css(n2, e2)) && (i2 += 1) : t3.indexOf("" + l.css(n2, e2)) != -1 && (i2 += 1), r2 += 1;
                }), r2 === i2;
              }, a2;
            }
            return i(t2, s2), t2.prototype.buttonIsActive = function(e2) {
              var t3 = this, o2 = s2.prototype.buttonIsActive.call(this, e2);
              if (o2 !== void 0)
                return o2;
              var n2, i2, r2 = !!this.jodit.selection && this.jodit.selection.current();
              return !!(r2 && ((e2.control.tags || e2.control.options && e2.control.options.tags) && (n2 = e2.control.tags || e2.control.options && e2.control.options.tags, a.Dom.up(r2, function(e3) {
                if (e3 && n2.indexOf(e3.nodeName.toLowerCase()) != -1)
                  return true;
              }, this.jodit.editor)) || (e2.control.css || e2.control.options && e2.control.options.css) && (i2 = e2.control.css || e2.control.options && e2.control.options.css, a.Dom.up(r2, function(e3) {
                if (e3 && e3.nodeType !== Node.TEXT_NODE)
                  return t3.checkActiveStatus(i2, e3);
              }, this.jodit.editor))));
            }, t2.prototype.buttonIsDisabled = function(e2) {
              var t3 = s2.prototype.buttonIsDisabled.call(this, e2);
              if (t3 !== void 0)
                return t3;
              var o2 = e2.control === void 0 || e2.control.mode === void 0 ? c.MODE_WYSIWYG : e2.control.mode;
              return !(o2 === c.MODE_SPLIT || o2 === this.jodit.getRealMode());
            }, t2.prototype.getTarget = function(e2) {
              return e2.target || this.jodit.selection.current() || void 0;
            }, t2.makeCollection = function(e2) {
              return d.isJoditObject(e2) ? new t2(e2) : new r.ToolbarCollection(e2);
            }, t2;
          }(r.ToolbarCollection);
          t.JoditToolbarCollection = s;
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true });
          var n = o(13);
          t.Dialog = n.Dialog;
          var i = o(62);
          t.Alert = i.Alert;
          var r = o(63);
          t.Promt = r.Promt;
          var a = o(64);
          t.Confirm = a.Confirm;
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true });
          var n = o(37);
          t.asArray = n.asArray;
          var i = o(73);
          t.inArray = i.inArray;
          var r = o(74);
          t.splitArray = r.splitArray;
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true });
          var n = o(39), i = o(31);
          t.isPlainObject = function(e2) {
            return !(typeof e2 != "object" || e2.nodeType || n.isWindow(e2) || e2.constructor && !i.hasOwn.call(e2.constructor.prototype, "isPrototypeOf"));
          };
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.isNumeric = function(e2) {
            if (typeof e2 == "string") {
              if (!e2.match(/^([+\-])?[0-9]+(\.?)([0-9]+)?(e[0-9]+)?$/))
                return false;
              e2 = parseFloat(e2);
            }
            return !isNaN(e2) && isFinite(e2);
          };
        }, function(e, o, t) {
          "use strict";
          function n(e2) {
            for (var t2 in e2)
              o.hasOwnProperty(t2) || (o[t2] = e2[t2]);
          }
          Object.defineProperty(o, "__esModule", { value: true }), n(t(87)), n(t(89)), n(t(90)), n(t(91)), n(t(92)), n(t(93)), n(t(46)), n(t(47)), n(t(94));
        }, function(e, o, t) {
          "use strict";
          function n(e2) {
            for (var t2 in e2)
              o.hasOwnProperty(t2) || (o[t2] = e2[t2]);
          }
          Object.defineProperty(o, "__esModule", { value: true }), n(t(95)), n(t(96)), n(t(97));
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.each = function(e2, t2) {
            var o2, n, i;
            if (Array.isArray(e2)) {
              for (o2 = e2.length, i = 0; i < o2; i += 1)
                if (t2.call(e2[i], i, e2[i]) === false)
                  return false;
            } else
              for (n = Object.keys(e2), i = 0; i < n.length; i += 1)
                if (t2.call(e2[n[i]], n[i], e2[n[i]]) === false)
                  return false;
            return true;
          };
        }, function(e, t, o) {
          "use strict";
          var n, r = this && this.__extends || (n = function(e2, t2) {
            return (n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e3, t3) {
              e3.__proto__ = t3;
            } || function(e3, t3) {
              for (var o2 in t3)
                t3.hasOwnProperty(o2) && (e3[o2] = t3[o2]);
            })(e2, t2);
          }, function(e2, t2) {
            function o2() {
              this.constructor = e2;
            }
            n(e2, t2), e2.prototype = t2 === null ? Object.create(t2) : (o2.prototype = t2.prototype, new o2());
          });
          Object.defineProperty(t, "__esModule", { value: true });
          var i = o(7), a = o(34), s = o(5), l = o(0), c = o(11), d = function(i2) {
            function e2(e3, t2, o2) {
              t2 === void 0 && (t2 = "li"), o2 === void 0 && (o2 = "jodit_toolbar_btn");
              var n2 = this;
              return e3 instanceof a.ToolbarCollection ? (n2 = i2.call(this, e3.jodit) || this).parentToolbar = e3 : n2 = i2.call(this, e3) || this, n2.container = n2.jodit.create.element(t2), n2.container.classList.add(o2), n2;
            }
            return r(e2, i2), e2.prototype.destruct = function() {
              l.Dom.safeRemove(this.container);
            }, e2.prototype.createIcon = function(e3, t2) {
              var o2 = t2 ? t2.icon || t2.name : e3;
              if (this.jodit.options.textIcons)
                return this.jodit.create.fromHTML('<span class="jodit_icon">' + this.jodit.i18n(t2 ? t2.name : e3) + "</span>");
              var n2 = this.jodit.events.fire("getIcon", o2, t2, e3), i3 = void 0;
              return t2 && t2.iconURL && n2 === void 0 ? (i3 = this.jodit.create.element("i")).style.backgroundImage = "url(" + t2.iconURL + ")" : (n2 === void 0 && (n2 = s.ToolbarIcon.exists(o2) ? s.ToolbarIcon.getIcon(o2) : s.ToolbarIcon.getIcon("empty")), i3 = typeof n2 == "string" ? this.jodit.create.fromHTML(c.trim(n2)) : n2), i3.classList.add("jodit_icon", "jodit_icon_" + e3), i3;
            }, e2;
          }(i.Component);
          t.ToolbarElement = d;
        }, function(e, t, o) {
          "use strict";
          var n, i = this && this.__extends || (n = function(e2, t2) {
            return (n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e3, t3) {
              e3.__proto__ = t3;
            } || function(e3, t3) {
              for (var o2 in t3)
                t3.hasOwnProperty(o2) && (e3[o2] = t3[o2]);
            })(e2, t2);
          }, function(e2, t2) {
            function o2() {
              this.constructor = e2;
            }
            n(e2, t2), e2.prototype = t2 === null ? Object.create(t2) : (o2.prototype = t2.prototype, new o2());
          });
          Object.defineProperty(t, "__esModule", { value: true });
          var l = o(0), c = o(3), r = o(25), d = o(109), u = o(27), f = o(110), p = o(12), a = function(s) {
            function e2(e3, t2, o2) {
              var r2 = s.call(this, e3) || this;
              r2.__disabled = false, r2.__actived = false, r2.onMouseDown = function(e4) {
                if (e4.stopImmediatePropagation(), e4.preventDefault(), r2.disable)
                  return false;
                var t3 = r2.control, o3 = function() {
                  return r2.parentToolbar && r2.parentToolbar.getTarget(r2) || r2.target || false;
                };
                if (t3.list) {
                  var n3 = new d.PopupList(r2.jodit, r2.container, r2.target);
                  n3.open(t3), r2.jodit.events.fire("closeAllPopups", n3.container);
                } else if (t3.exec !== void 0 && typeof t3.exec == "function")
                  t3.exec(r2.jodit, o3(), t3, e4, r2.container), r2.jodit.events.fire("synchro"), r2.parentToolbar && r2.parentToolbar.immedateCheckActiveButtons(), r2.jodit.events.fire("closeAllPopups afterExec");
                else if (t3.popup !== void 0 && typeof t3.popup == "function") {
                  var i3 = new u.Popup(r2.jodit, r2.container, r2.target);
                  r2.jodit.events.fire(c.camelCase("before-" + t3.name + "-OpenPopup"), o3(), t3, i3) !== false && i3.open(t3.popup(r2.jodit, o3(), t3, i3.close, r2)), r2.jodit.events.fire(c.camelCase("after-" + t3.name + "-OpenPopup") + " closeAllPopups", i3.container);
                } else
                  (t3.command || t3.name) && (p.isJoditObject(r2.jodit) ? r2.jodit.execCommand(t3.command || t3.name, t3.args && t3.args[0] || false, t3.args && t3.args[1] || null) : r2.jodit.ownerDocument.execCommand(t3.command || t3.name, t3.args && t3.args[0] || false, t3.args && t3.args[1] || null), r2.jodit.events.fire("closeAllPopups"));
              }, r2.control = t2, r2.target = o2, r2.anchor = r2.jodit.create.element("a"), r2.container.appendChild(r2.anchor), r2.jodit.options.showTooltip && t2.tooltip && (r2.jodit.options.useNativeTooltip ? r2.anchor.setAttribute("title", r2.jodit.i18n(t2.tooltip) + (t2.hotkeys ? "<br>" + c.asArray(t2.hotkeys).join(" ") : "")) : r2.tooltip = new f.ToolbarTooltip(r2)), r2.textBox = r2.jodit.create.span(), r2.anchor.appendChild(r2.textBox);
              var n2 = t2.name.replace(/[^a-zA-Z0-9]/g, "_");
              if (t2.getContent && typeof t2.getContent == "function") {
                l.Dom.detach(r2.container);
                var i2 = t2.getContent(r2.jodit, t2, r2);
                r2.container.appendChild(typeof i2 == "string" ? r2.jodit.create.fromHTML(i2) : i2);
              } else {
                if (t2.list && r2.anchor) {
                  var a2 = r2.jodit.ownerDocument.createElement("span");
                  a2.classList.add("jodit_with_dropdownlist-trigger"), r2.container.classList.add("jodit_with_dropdownlist"), r2.anchor.appendChild(a2);
                }
                r2.textBox.appendChild(r2.createIcon(n2, t2));
              }
              return r2.container.classList.add("jodit_toolbar_btn-" + n2), t2.isInput ? r2.container.classList.add("jodit_toolbar-input") : r2.jodit.events.on(r2.container, "mousedown touchend", r2.onMouseDown).on("click-" + n2 + "-btn", r2.onMouseDown), r2;
            }
            return i(e2, s), Object.defineProperty(e2.prototype, "disable", { get: function() {
              return this.__disabled;
            }, set: function(e3) {
              this.__disabled = e3, this.container.classList.toggle("jodit_disabled", e3), e3 ? this.container.hasAttribute("disabled") || this.container.setAttribute("disabled", "disabled") : this.container.hasAttribute("disabled") && this.container.removeAttribute("disabled");
            }, enumerable: true, configurable: true }), Object.defineProperty(e2.prototype, "active", { get: function() {
              return this.__actived;
            }, set: function(e3) {
              this.__actived = e3, this.container.classList.toggle("jodit_active", e3);
            }, enumerable: true, configurable: true }), e2.prototype.isDisable = function() {
              return !(!this.parentToolbar || !this.parentToolbar.buttonIsDisabled(this));
            }, e2.prototype.isActive = function() {
              return !(!this.parentToolbar || !this.parentToolbar.buttonIsActive(this));
            }, e2.prototype.destruct = function() {
              s.prototype.destruct.call(this), this.tooltip && this.tooltip.destruct(), this.jodit.events.off(this.container);
            }, e2;
          }(r.ToolbarElement);
          t.ToolbarButton = a;
        }, function(e, t, o) {
          "use strict";
          var n, i = this && this.__extends || (n = function(e2, t2) {
            return (n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e3, t3) {
              e3.__proto__ = t3;
            } || function(e3, t3) {
              for (var o2 in t3)
                t3.hasOwnProperty(o2) && (e3[o2] = t3[o2]);
            })(e2, t2);
          }, function(e2, t2) {
            function o2() {
              this.constructor = e2;
            }
            n(e2, t2), e2.prototype = t2 === null ? Object.create(t2) : (o2.prototype = t2.prototype, new o2());
          });
          Object.defineProperty(t, "__esModule", { value: true });
          var s = o(0), l = o(3), r = function(r2) {
            function a(e2, t2, o2, n2) {
              n2 === void 0 && (n2 = "jodit_toolbar_popup");
              var i2 = r2.call(this, e2) || this;
              return i2.target = t2, i2.current = o2, i2.className = n2, i2.throttleCalcPosition = l.throttle(i2.calcPosition, i2.jodit.defaultTimeout), i2.isOpened = false, i2.close = function(e3) {
                (i2.isOpened || i2.isDestructed) && (e3 && s.Dom.isOrContains(i2.container, e3 instanceof a ? e3.target : e3) || (i2.isOpened = false, i2.jodit.events.off("closeAllPopups", i2.close), i2.doClose(), s.Dom.safeRemove(i2.container), i2.jodit.events.fire("removeMarkers")));
              }, i2.container = i2.jodit.create.div(n2, { "data-editor_id": e2.id }), i2.jodit.events.on(i2.container, "mousedown touchstart touchend", function(e3) {
                e3.stopPropagation();
              }).on([i2.jodit.ownerWindow, i2.jodit.events], "resize", i2.throttleCalcPosition), i2;
            }
            return i(a, r2), a.prototype.calcPosition = function() {
              if (this.isOpened && !this.isDestructed) {
                var t2 = this.container, e2 = l.offset(this.jodit.container, this.jodit, this.jodit.ownerDocument, true), o2 = l.offset(t2, this.jodit, this.jodit.ownerDocument, true), n2 = l.css(t2, "marginLeft") || 0;
                o2.left -= n2;
                var i2 = n2, r3 = "auto";
                if (i2 = o2.left < e2.left ? e2.left - o2.left : o2.left + o2.width < e2.left + e2.width ? 0 : -(o2.left + o2.width - (e2.left + e2.width)), o2.width < e2.width || (i2 = e2.left - o2.left, r3 = e2.width), i2 !== n2)
                  try {
                    t2.style.setProperty("margin-left", i2 + "px", "important");
                  } catch (e3) {
                    t2.style.marginLeft = i2 + "px";
                  }
                var a2 = t2.querySelector(".jodit_popup_triangle");
                a2 && (a2.style.marginLeft = -i2 + "px"), l.css(t2, "width", r3);
              }
            }, a.prototype.doOpen = function(e2) {
              e2 && (s.Dom.detach(this.container), this.container.innerHTML = '<span class="jodit_popup_triangle"></span>', this.container.appendChild(s.Dom.isNode(e2, this.jodit.ownerWindow) ? e2 : this.jodit.create.fromHTML("" + e2)), this.container.style.display = "block", this.container.style.marginLeft = null);
            }, a.prototype.doClose = function() {
            }, a.prototype.open = function(e2, t2, o2) {
              o2 === void 0 && (o2 = false), c.Jodit.fireEach("beforeOpenPopup closeAllPopups", this, e2), o2 || this.jodit.events.on("closeAllPopups", this.close), this.container.classList.add(this.className + "-open"), this.doOpen(e2), this.target.appendChild(this.container), t2 !== void 0 && this.container.classList.toggle("jodit_right", t2), !o2 && this.container.parentNode && this.jodit.events.fire(this.container.parentNode, "afterOpenPopup", this.container), this.isOpened = true, !o2 && this.calcPosition();
            }, a.prototype.destruct = function() {
              this.jodit.events.off([this.jodit.ownerWindow, this.jodit.events], "resize", this.throttleCalcPosition), s.Dom.safeRemove(this.container);
            }, a;
          }(o(7).Component);
          t.Popup = r;
          var c = o(10);
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true });
          var v = o(1), m = o(0), g = o(3), n = function() {
            function h() {
            }
            return h.addSelected = function(e2) {
              e2.setAttribute(v.JODIT_SELECTED_CELL_MARKER, "1");
            }, h.restoreSelection = function(e2) {
              e2.removeAttribute(v.JODIT_SELECTED_CELL_MARKER);
            }, h.getAllSelectedCells = function(e2) {
              return e2 ? g.$$("td[" + v.JODIT_SELECTED_CELL_MARKER + "],th[" + v.JODIT_SELECTED_CELL_MARKER + "]", e2) : [];
            }, h.getRowsCount = function(e2) {
              return e2.rows.length;
            }, h.getColumnsCount = function(e2) {
              return h.formalMatrix(e2).reduce(function(e3, t2) {
                return Math.max(e3, t2.length);
              }, 0);
            }, h.formalMatrix = function(e2, s) {
              for (var l = [[]], t2 = Array.prototype.slice.call(e2.rows), o2 = function(e3, t3) {
                l[t3] === void 0 && (l[t3] = []);
                for (var o3, n3, i2 = e3.colSpan, r2 = e3.rowSpan, a = 0; l[t3][a]; )
                  a += 1;
                for (n3 = 0; n3 < r2; n3 += 1)
                  for (o3 = 0; o3 < i2; o3 += 1) {
                    if (l[t3 + n3] === void 0 && (l[t3 + n3] = []), s && s(e3, t3 + n3, a + o3, i2, r2) === false)
                      return false;
                    l[t3 + n3][a + o3] = e3;
                  }
              }, n2 = 0, i = void 0; n2 < t2.length; n2 += 1) {
                var r = Array.prototype.slice.call(t2[n2].cells);
                for (i = 0; i < r.length; i += 1)
                  if (o2(r[i], n2) === false)
                    return l;
              }
              return l;
            }, h.formalCoordinate = function(e2, r, a) {
              a === void 0 && (a = false);
              var s = 0, l = 0, c = 1, d = 1;
              return h.formalMatrix(e2, function(e3, t2, o2, n2, i) {
                if (r === e3)
                  return s = t2, l = o2, c = n2 || 1, d = i || 1, a && (l += (n2 || 1) - 1, s += (i || 1) - 1), false;
              }), [s, l, c, d];
            }, h.appendRow = function(e2, t2, o2) {
              t2 === void 0 && (t2 = false), o2 === void 0 && (o2 = true);
              for (var n2 = e2.ownerDocument || document, i = h.getColumnsCount(e2), r = n2.createElement("tr"), a = 0; a < i; a += 1)
                r.appendChild(n2.createElement("td"));
              o2 && t2 && t2.nextSibling ? t2.parentNode && t2.parentNode.insertBefore(r, t2.nextSibling) : !o2 && t2 ? t2.parentNode && t2.parentNode.insertBefore(r, t2) : (g.$$(":scope>tbody", e2)[0] || e2).appendChild(r);
            }, h.removeRow = function(r, a) {
              var s, l = h.formalMatrix(r), c = r.rows[a];
              g.each(l[a], function(e2, t2) {
                if (s = false, a - 1 < 0 || l[a - 1][e2] !== t2)
                  if (l[a + 1] && l[a + 1][e2] === t2) {
                    if (t2.parentNode === c && t2.parentNode.nextSibling) {
                      s = true;
                      for (var o2 = e2 + 1; l[a + 1][o2] === t2; )
                        o2 += 1;
                      var n2 = m.Dom.next(t2.parentNode, function(e3) {
                        return e3 && e3.nodeType === Node.ELEMENT_NODE && e3.nodeName === "TR";
                      }, r);
                      l[a + 1][o2] ? n2.insertBefore(t2, l[a + 1][o2]) : n2.appendChild(t2);
                    }
                  } else
                    m.Dom.safeRemove(t2);
                else
                  s = true;
                if (s && (t2.parentNode === c || t2 !== l[a][e2 - 1])) {
                  var i = t2.rowSpan;
                  1 < i - 1 ? t2.setAttribute("rowspan", "" + (i - 1)) : t2.removeAttribute("rowspan");
                }
              }), m.Dom.safeRemove(c);
            }, h.appendColumn = function(e2, t2, o2) {
              o2 === void 0 && (o2 = true);
              var n2, i = h.formalMatrix(e2);
              for (t2 === void 0 && (t2 = h.getColumnsCount(e2) - 1), n2 = 0; n2 < i.length; n2 += 1) {
                var r = (e2.ownerDocument || document).createElement("td"), a = i[n2][t2], s = false;
                o2 ? (i[n2] && a && i[n2].length <= t2 + 1 || a !== i[n2][t2 + 1]) && (a.nextSibling ? a.parentNode && a.parentNode.insertBefore(r, a.nextSibling) : a.parentNode && a.parentNode.appendChild(r), s = true) : (t2 - 1 < 0 || i[n2][t2] !== i[n2][t2 - 1] && i[n2][t2].parentNode) && (a.parentNode && a.parentNode.insertBefore(r, i[n2][t2]), s = true), s || i[n2][t2].setAttribute("colspan", "" + (parseInt(i[n2][t2].getAttribute("colspan") || "1", 10) + 1));
              }
            }, h.removeColumn = function(e2, i) {
              var r, a = h.formalMatrix(e2);
              g.each(a, function(e3, t2) {
                var o2 = t2[i];
                if (r = false, i - 1 < 0 || a[e3][i - 1] !== o2 ? i + 1 < t2.length && a[e3][i + 1] === o2 ? r = true : m.Dom.safeRemove(o2) : r = true, r && (e3 - 1 < 0 || o2 !== a[e3 - 1][i])) {
                  var n2 = o2.colSpan;
                  1 < n2 - 1 ? o2.setAttribute("colspan", "" + (n2 - 1)) : o2.removeAttribute("colspan");
                }
              });
            }, h.getSelectedBound = function(e2, t2) {
              var o2, n2, i, r = [[1 / 0, 1 / 0], [0, 0]], a = h.formalMatrix(e2);
              for (o2 = 0; o2 < a.length; o2 += 1)
                for (n2 = 0; n2 < a[o2].length; n2 += 1)
                  t2.indexOf(a[o2][n2]) != -1 && (r[0][0] = Math.min(o2, r[0][0]), r[0][1] = Math.min(n2, r[0][1]), r[1][0] = Math.max(o2, r[1][0]), r[1][1] = Math.max(n2, r[1][1]));
              for (o2 = r[0][0]; o2 <= r[1][0]; o2 += 1)
                for (n2 = r[0][i = 1]; n2 <= r[1][1]; n2 += 1) {
                  for (; a[o2][n2 - i] && a[o2][n2] === a[o2][n2 - i]; )
                    r[0][1] = Math.min(n2 - i, r[0][1]), r[1][1] = Math.max(n2 - i, r[1][1]), i += 1;
                  for (i = 1; a[o2][n2 + i] && a[o2][n2] === a[o2][n2 + i]; )
                    r[0][1] = Math.min(n2 + i, r[0][1]), r[1][1] = Math.max(n2 + i, r[1][1]), i += 1;
                  for (i = 1; a[o2 - i] && a[o2][n2] === a[o2 - i][n2]; )
                    r[0][0] = Math.min(o2 - i, r[0][0]), r[1][0] = Math.max(o2 - i, r[1][0]), i += 1;
                  for (i = 1; a[o2 + i] && a[o2][n2] === a[o2 + i][n2]; )
                    r[0][0] = Math.min(o2 + i, r[0][0]), r[1][0] = Math.max(o2 + i, r[1][0]), i += 1;
                }
              return r;
            }, h.normalizeTable = function(e2) {
              var t2, o2, n2, i, r = [], a = h.formalMatrix(e2);
              for (o2 = 0; o2 < a[0].length; o2 += 1) {
                for (i = !(n2 = 1e6), t2 = 0; t2 < a.length; t2 += 1)
                  if (a[t2][o2] !== void 0) {
                    if (a[t2][o2].colSpan < 2) {
                      i = true;
                      break;
                    }
                    n2 = Math.min(n2, a[t2][o2].colSpan);
                  }
                if (!i)
                  for (t2 = 0; t2 < a.length; t2 += 1)
                    a[t2][o2] !== void 0 && h.__mark(a[t2][o2], "colspan", a[t2][o2].colSpan - n2 + 1, r);
              }
              for (t2 = 0; t2 < a.length; t2 += 1) {
                for (i = !(n2 = 1e6), o2 = 0; o2 < a[t2].length; o2 += 1)
                  if (a[t2][o2] !== void 0) {
                    if (a[t2][o2].rowSpan < 2) {
                      i = true;
                      break;
                    }
                    n2 = Math.min(n2, a[t2][o2].rowSpan);
                  }
                if (!i)
                  for (o2 = 0; o2 < a[t2].length; o2 += 1)
                    a[t2][o2] !== void 0 && h.__mark(a[t2][o2], "rowspan", a[t2][o2].rowSpan - n2 + 1, r);
              }
              for (t2 = 0; t2 < a.length; t2 += 1)
                for (o2 = 0; o2 < a[t2].length; o2 += 1)
                  a[t2][o2] !== void 0 && (a[t2][o2].hasAttribute("rowspan") && a[t2][o2].rowSpan === 1 && a[t2][o2].removeAttribute("rowspan"), a[t2][o2].hasAttribute("colspan") && a[t2][o2].colSpan === 1 && a[t2][o2].removeAttribute("colspan"), a[t2][o2].hasAttribute("class") && !a[t2][o2].getAttribute("class") && a[t2][o2].removeAttribute("class"));
              h.__unmark(r);
            }, h.mergeSelected = function(e2) {
              var r, a = [], s = h.getSelectedBound(e2, h.getAllSelectedCells(e2)), l = 0, c = null, d = 0, u = 0, f = 0, p = [];
              s && (s[0][0] - s[1][0] || s[0][1] - s[1][1]) && (h.formalMatrix(e2, function(e3, t2, o2, n2, i) {
                if (!(t2 < s[0][0] || s[1][0] < t2 || o2 < s[0][1] || s[1][1] < o2)) {
                  if ((r = e3).__i_am_already_was)
                    return;
                  r.__i_am_already_was = true, t2 === s[0][0] && r.style.width && (l += r.offsetWidth), g.trim(e3.innerHTML.replace(/<br(\/)?>/g, "")) !== "" && a.push(e3.innerHTML), 1 < n2 && (u += n2 - 1), 1 < i && (f += i - 1), c ? h.__mark(r, "remove", 1, p) : (c = e3, d = o2);
                }
              }), u = s[1][1] - s[0][1] + 1, f = s[1][0] - s[0][0] + 1, c && (1 < u && h.__mark(c, "colspan", u, p), 1 < f && h.__mark(c, "rowspan", f, p), l && (h.__mark(c, "width", (l / e2.offsetWidth * 100).toFixed(v.ACCURACY) + "%", p), d && h.setColumnWidthByDelta(e2, d, 0, true, p)), c.innerHTML = a.join("<br/>"), delete c.__i_am_already_was, h.__unmark(p), h.normalizeTable(e2), g.each(Array.from(e2.rows), function(e3, t2) {
                t2.cells.length || m.Dom.safeRemove(t2);
              })));
            }, h.splitHorizontal = function(i) {
              var r, e2, t2, a, s, l = [], o2 = i.ownerDocument || document;
              h.getAllSelectedCells(i).forEach(function(n2) {
                (e2 = o2.createElement("td")).appendChild(o2.createElement("br")), t2 = o2.createElement("tr"), r = h.formalCoordinate(i, n2), n2.rowSpan < 2 ? (h.formalMatrix(i, function(e3, t3, o3) {
                  r[0] === t3 && r[1] !== o3 && e3 !== n2 && h.__mark(e3, "rowspan", e3.rowSpan + 1, l);
                }), m.Dom.after(m.Dom.closest(n2, "tr", i), t2), t2.appendChild(e2)) : (h.__mark(n2, "rowspan", n2.rowSpan - 1, l), h.formalMatrix(i, function(e3, t3, o3) {
                  r[0] < t3 && t3 < r[0] + n2.rowSpan && o3 < r[1] && e3.parentNode.rowIndex === t3 && (s = e3), r[0] < t3 && e3 === n2 && (a = i.rows[t3]);
                }), s ? m.Dom.after(s, e2) : a.insertBefore(e2, a.firstChild)), 1 < n2.colSpan && h.__mark(e2, "colspan", n2.colSpan, l), h.__unmark(l), h.restoreSelection(n2);
              }), this.normalizeTable(i);
            }, h.splitVertical = function(t2) {
              var i, o2, r, a = [], s = t2.ownerDocument || document;
              h.getAllSelectedCells(t2).forEach(function(n2) {
                i = h.formalCoordinate(t2, n2), n2.colSpan < 2 ? h.formalMatrix(t2, function(e3, t3, o3) {
                  i[1] === o3 && i[0] !== t3 && e3 !== n2 && h.__mark(e3, "colspan", e3.colSpan + 1, a);
                }) : h.__mark(n2, "colspan", n2.colSpan - 1, a), (o2 = s.createElement("td")).appendChild(s.createElement("br")), 1 < n2.rowSpan && h.__mark(o2, "rowspan", n2.rowSpan, a);
                var e2 = n2.offsetWidth;
                m.Dom.after(n2, o2), h.__mark(n2, "width", (100 * (r = e2 / t2.offsetWidth / 2)).toFixed(v.ACCURACY) + "%", a), h.__mark(o2, "width", (100 * r).toFixed(v.ACCURACY) + "%", a), h.__unmark(a), h.restoreSelection(n2);
              }), h.normalizeTable(t2);
            }, h.setColumnWidthByDelta = function(e2, t2, o2, n2, i) {
              var r, a = h.formalMatrix(e2);
              for (r = 0; r < a.length; r += 1)
                h.__mark(a[r][t2], "width", ((a[r][t2].offsetWidth + o2) / e2.offsetWidth * 100).toFixed(v.ACCURACY) + "%", i);
              n2 || h.__unmark(i);
            }, h.__mark = function(e2, t2, o2, n2) {
              n2.push(e2), e2.__marked_value || (e2.__marked_value = {}), e2.__marked_value[t2] = o2 === void 0 ? 1 : o2;
            }, h.__unmark = function(e2) {
              e2.forEach(function(o2) {
                o2.__marked_value && (g.each(o2.__marked_value, function(e3, t2) {
                  switch (e3) {
                    case "remove":
                      m.Dom.safeRemove(o2);
                      break;
                    case "rowspan":
                      1 < t2 ? o2.setAttribute("rowspan", "" + t2) : o2.removeAttribute("rowspan");
                      break;
                    case "colspan":
                      1 < t2 ? o2.setAttribute("colspan", "" + t2) : o2.removeAttribute("colspan");
                      break;
                    case "width":
                      o2.style.width = "" + t2;
                  }
                  delete o2.__marked_value[e3];
                }), delete o2.__marked_value);
              });
            }, h;
          }();
          t.Table = n;
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true });
          var n = o(16);
          t.JoditObject = function(e2) {
            n.extend(true, this, e2);
          };
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true });
          var n = o(16), i = function() {
            function e2(e3) {
              var t2 = this;
              n.extend(!(this.length = 0), this, e3), this.length = e3.length;
              var o2 = Array.prototype;
              ["map", "forEach", "reduce", "push", "pop", "shift", "unshift", "slice", "splice"].forEach(function(e4) {
                t2[e4] = o2[e4];
              });
            }
            return e2.prototype.toString = function() {
              for (var e3 = [], t2 = 0; t2 < this.length; t2 += 1)
                e3[t2] = this[t2];
              return "" + e3;
            }, e2;
          }();
          t.JoditArray = i;
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true });
          var n = {}, i = n.toString;
          t.hasOwn = n.hasOwnProperty, ["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Object", "Error", "Symbol", "HTMLDocument", "Window", "HTMLElement", "HTMLBodyElement", "Text", "DocumentFragment", "DOMStringList", "HTMLCollection"].forEach(function(e2) {
            n["[object " + e2 + "]"] = e2.toLowerCase();
          }), t.type = function(e2) {
            return e2 === null ? "null" : typeof e2 == "object" || typeof e2 == "function" ? n[i.call(e2)] || "object" : typeof e2;
          };
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true });
          var n = o(1);
          t.trim = function(e2) {
            return e2.replace(n.SPACE_REG_EXP_START, "").replace(n.SPACE_REG_EXP_END, "");
          };
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true });
          var n = o(11), i = function() {
            function e2(e3) {
              this.provider = e3, this.prefix = "Jodit_";
            }
            return e2.prototype.set = function(e3, t2) {
              this.provider.set(n.camelCase(this.prefix + e3), t2);
            }, e2.prototype.get = function(e3) {
              return this.provider.get(n.camelCase(this.prefix + e3));
            }, e2;
          }();
          t.Storage = i;
        }, function(e, t, o) {
          "use strict";
          var n, i = this && this.__extends || (n = function(e2, t2) {
            return (n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e3, t3) {
              e3.__proto__ = t3;
            } || function(e3, t3) {
              for (var o2 in t3)
                t3.hasOwnProperty(o2) && (e3[o2] = t3[o2]);
            })(e2, t2);
          }, function(e2, t2) {
            function o2() {
              this.constructor = e2;
            }
            n(e2, t2), e2.prototype = t2 === null ? Object.create(t2) : (o2.prototype = t2.prototype, new o2());
          }), a = this && this.__assign || function() {
            return (a = Object.assign || function(e2) {
              for (var t2, o2 = 1, n2 = arguments.length; o2 < n2; o2++)
                for (var i2 in t2 = arguments[o2])
                  Object.prototype.hasOwnProperty.call(t2, i2) && (e2[i2] = t2[i2]);
              return e2;
            }).apply(this, arguments);
          };
          Object.defineProperty(t, "__esModule", { value: true });
          var s = o(4), r = o(108), l = o(26), c = o(111), d = o(0), u = o(7), f = o(2), p = function(t2) {
            function e2(e3) {
              var r2 = t2.call(this, e3) || this;
              return r2.__buttons = [], r2.__getControlType = function(e4) {
                var t3, o2 = r2.jodit.options.controls || f.Config.defaultOptions.controls;
                if (typeof e4 != "string")
                  o2[(t3 = a({ name: "empty" }, e4)).name] !== void 0 && (t3 = a({}, o2[t3.name], t3));
                else {
                  var n2 = e4.split(/\./), i2 = o2;
                  1 < n2.length && o2[n2[0]] !== void 0 && (i2 = o2[n2[0]], e4 = n2[1]), t3 = i2[e4] !== void 0 ? a({ name: e4 }, i2[e4]) : { name: e4, command: e4, tooltip: e4 };
                }
                return t3;
              }, r2.closeAll = function() {
                r2.jodit && r2.jodit.events && r2.jodit.events.fire("closeAllPopups");
              }, r2.initEvents = function() {
                r2.jodit.events.on(r2.jodit.ownerWindow, "mousedown touchend", r2.closeAll).on(r2.listenEvents, r2.checkActiveButtons).on("afterSetMode focus", r2.immedateCheckActiveButtons);
              }, r2.listenEvents = "changeStack mousedown mouseup keydown change afterInit readonly afterResize selectionchange changeSelection focus afterSetMode touchstart", r2.immedateCheckActiveButtons = function() {
                r2.jodit.isLocked() || (r2.__buttons.filter(function(e4) {
                  return e4 instanceof l.ToolbarButton;
                }).forEach(function(e4) {
                  e4.disable = e4.isDisable(), e4.disable || (e4.active = e4.isActive()), typeof e4.control.getLabel == "function" && e4.control.getLabel(r2.jodit, e4.control, e4);
                }), r2.jodit.events && r2.jodit.events.fire("updateToolbar"));
              }, r2.checkActiveButtons = s.debounce(r2.immedateCheckActiveButtons, r2.jodit.defaultTimeout), r2.container = r2.jodit.create.element("ul"), r2.container.classList.add("jodit_toolbar"), r2.initEvents(), r2;
            }
            return i(e2, t2), e2.prototype.getButtonsList = function() {
              return this.__buttons.map(function(e3) {
                return e3 instanceof l.ToolbarButton ? e3.control.name : "";
              }).filter(function(e3) {
                return e3 !== "";
              });
            }, e2.prototype.appendChild = function(e3) {
              this.__buttons.push(e3), this.container.appendChild(e3.container);
            }, e2.prototype.removeChild = function(e3) {
              var t3 = this.__buttons.indexOf(e3);
              t3 !== -1 && (this.__buttons.splice(t3, 1), e3.container.parentNode === this.container && d.Dom.safeRemove(e3.container));
            }, e2.prototype.build = function(e3, t3, o2) {
              var n2 = this, i2 = false;
              this.clear(), (typeof e3 == "string" ? e3.split(/[,\s]+/) : e3).map(this.__getControlType).forEach(function(e4) {
                var t4 = null;
                if (n2.jodit.options.removeButtons.indexOf(e4.name) == -1) {
                  switch (e4.name) {
                    case "\n":
                      t4 = new r.ToolbarBreak(n2.jodit);
                      break;
                    case "|":
                      i2 || (i2 = true, t4 = new c.ToolbarSeparator(n2.jodit));
                      break;
                    default:
                      i2 = false, t4 = new l.ToolbarButton(n2, e4, o2);
                  }
                  t4 && n2.appendChild(t4);
                }
              }), this.container.parentNode !== t3 && t3.appendChild(this.container), this.immedateCheckActiveButtons();
            }, e2.prototype.clear = function() {
              var t3 = this;
              this.__buttons.slice().forEach(function(e3) {
                t3.removeChild(e3), e3.destruct();
              }), this.__buttons.length = 0;
            }, e2.prototype.buttonIsActive = function(e3) {
              if (typeof e3.control.isActive == "function")
                return e3.control.isActive(this.jodit, e3.control, e3);
            }, e2.prototype.buttonIsDisabled = function(e3) {
              return !!this.jodit.options.disabled || !(!this.jodit.options.readonly || this.jodit.options.activeButtonsInReadOnly && this.jodit.options.activeButtonsInReadOnly.indexOf(e3.control.name) != -1) || (typeof e3.control.isDisable == "function" && (t3 = e3.control.isDisable(this.jodit, e3.control, e3)), t3);
              var t3;
            }, e2.prototype.getTarget = function(e3) {
              return e3.target;
            }, e2.prototype.destruct = function() {
              this.jodit.events.off(this.jodit.ownerWindow, "mousedown touchstart", this.closeAll).off(this.listenEvents, this.checkActiveButtons).off("afterSetMode focus", this.immedateCheckActiveButtons), this.clear(), d.Dom.safeRemove(this.container);
            }, e2;
          }(u.Component);
          t.ToolbarCollection = p;
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true });
          var n = o(2), r = o(3);
          n.Config.prototype.defaultAjaxOptions = { dataType: "json", method: "GET", url: "", data: null, contentType: "application/x-www-form-urlencoded; charset=UTF-8", headers: { "X-REQUESTED-WITH": "XMLHttpRequest" }, withCredentials: true, xhr: function() {
            return new (typeof XDomainRequest == "undefined" ? XMLHttpRequest : XDomainRequest)();
          } };
          var i = function() {
            function e2(e3, t2) {
              var o2 = this;
              this.success_response_codes = [200, 201, 202], this.jodit = e3, this.options = r.extend(true, {}, n.Config.prototype.defaultAjaxOptions, t2), this.options.xhr && (this.xhr = this.options.xhr()), e3 && e3.events && e3.events.on("beforeDestruct", function() {
                o2.abort();
              });
            }
            return e2.prototype.__buildParams = function(e3, t2) {
              if (this.options.queryBuild && typeof this.options.queryBuild == "function")
                return this.options.queryBuild.call(this, e3, t2);
              if (typeof e3 == "string" || this.jodit.ownerWindow.FormData && e3 instanceof this.jodit.ownerWindow.FormData)
                return e3;
              var o2, n2, i2, r2 = [];
              for (o2 in e3)
                e3.hasOwnProperty(o2) && (n2 = t2 ? t2 + "[" + o2 + "]" : o2, r2.push(typeof (i2 = e3[o2]) == "object" ? this.__buildParams(i2, n2) : encodeURIComponent(n2) + "=" + encodeURIComponent(i2)));
              return r2.join("&");
            }, e2.prototype.abort = function() {
              return this.xhr.abort(), this;
            }, e2.prototype.send = function() {
              var i2 = this;
              return new Promise(function(t2, o2) {
                var n2 = function(e3) {
                  var t3 = null;
                  switch (i2.options.dataType) {
                    case "json":
                      t3 = JSON.parse(e3);
                  }
                  if (!t3)
                    throw Error("No JSON format");
                  return t3;
                };
                if (i2.xhr.onabort = function() {
                  o2(Error(i2.xhr.statusText));
                }, i2.xhr.onerror = function() {
                  o2(Error(i2.xhr.statusText));
                }, i2.xhr.ontimeout = function() {
                  o2(Error(i2.xhr.statusText));
                }, i2.xhr.onload = function() {
                  i2.response = i2.xhr.responseText, i2.status = i2.xhr.status, t2.call(i2.xhr, n2(i2.response) || {});
                }, i2.xhr.onreadystatechange = function() {
                  if (i2.xhr.readyState === XMLHttpRequest.DONE) {
                    var e3 = i2.xhr.responseText;
                    i2.response = e3, i2.status = i2.xhr.status, -1 < i2.success_response_codes.indexOf(i2.xhr.status) ? t2.call(i2.xhr, n2(e3)) : o2.call(i2.xhr, Error(i2.xhr.statusText || i2.jodit.i18n("Connection error!")));
                  }
                }, i2.xhr.withCredentials = i2.options.withCredentials || false, !i2.options.url)
                  throw Error("Need URL for AJAX request");
                i2.xhr.open(i2.options.method || "get", i2.options.url, true), i2.options.contentType && i2.xhr.setRequestHeader && i2.xhr.setRequestHeader("Content-type", i2.options.contentType), i2.options.headers && i2.xhr.setRequestHeader && r.each(i2.options.headers, function(e3, t3) {
                  i2.xhr.setRequestHeader(e3, t3);
                }), setTimeout(function() {
                  i2.xhr.send(i2.options.data ? i2.__buildParams(i2.options.data) : void 0);
                }, 0);
              });
            }, e2;
          }();
          t.Ajax = i;
        }, function(e, t, o) {
          "use strict";
          var n, i = this && this.__extends || (n = function(e2, t2) {
            return (n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e3, t3) {
              e3.__proto__ = t3;
            } || function(e3, t3) {
              for (var o2 in t3)
                t3.hasOwnProperty(o2) && (e3[o2] = t3[o2]);
            })(e2, t2);
          }, function(e2, t2) {
            function o2() {
              this.constructor = e2;
            }
            n(e2, t2), e2.prototype = t2 === null ? Object.create(t2) : (o2.prototype = t2.prototype, new o2());
          });
          Object.defineProperty(t, "__esModule", { value: true });
          var r = o(7), a = o(8), s = o(5), l = o(0), c = function(o2) {
            function e2(e3) {
              var t2 = o2.call(this, e3) || this;
              return t2.hide = function() {
                t2.context.classList.remove("jodit_context_menu-show"), t2.jodit.ownerWindow.removeEventListener("mouseup", t2.hide);
              }, t2.context = e3.create.div("jodit_context_menu", { "data-editor_id": t2.jodit.id }), e3.ownerDocument.body.appendChild(t2.context), t2;
            }
            return i(e2, o2), e2.prototype.show = function(e3, t2, o3, n2) {
              var i2 = this, r2 = this;
              Array.isArray(o3) && (n2 && (this.context.style.zIndex = "" + n2), this.context.innerHTML = "", o3.forEach(function(t3) {
                if (t3) {
                  var e4 = i2.jodit.create.fromHTML('<a href="javascript:void(0)">' + (t3.icon ? s.ToolbarIcon.getIcon(t3.icon) : "") + "<span></span></a>"), o4 = e4.querySelector("span");
                  e4.addEventListener("click", function(e5) {
                    return t3.exec && t3.exec.call(r2, e5), r2.hide(), false;
                  }), o4.innerText = r2.jodit.i18n(t3.title || ""), r2.context.appendChild(e4);
                }
              }), a.css(r2.context, { left: e3, top: t2 }), this.jodit.events.on(this.jodit.ownerWindow, "mouseup", r2.hide), this.context.classList.add("jodit_context_menu-show"));
            }, e2.prototype.destruct = function() {
              l.Dom.safeRemove(this.context), this.jodit.events.off(this.jodit.ownerWindow, "mouseup", this.hide);
            }, e2;
          }(r.Component);
          t.ContextMenu = c;
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.asArray = function(e2) {
            return Array.isArray(e2) ? e2 : [e2];
          };
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true });
          var s = o(15);
          t.debounce = function(o2, n, i, r) {
            arguments.length === 3 && typeof i != "boolean" && (r = i, i = false);
            var a = 0;
            return function() {
              var e2 = arguments, t2 = r || this;
              (i && !a || !n) && o2.apply(t2, e2), n && (clearTimeout(a), a = s.setTimeout(function() {
                i || o2.apply(t2, e2), a = 0;
              }, n));
            };
          };
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.isWindow = function(e2) {
            return e2 !== null && e2 === e2.window;
          };
        }, function(e, o, t) {
          "use strict";
          function n(e2) {
            for (var t2 in e2)
              o.hasOwnProperty(t2) || (o[t2] = e2[t2]);
          }
          Object.defineProperty(o, "__esModule", { value: true }), n(t(76)), n(t(77)), n(t(78)), n(t(79)), n(t(21)), n(t(20)), n(t(41)), n(t(39));
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.isURL = function(e2) {
            return /^(https?:\/\/)((([a-z\d]([a-z\d-]*[a-z\d])*)\.?)+[a-z]{2,}|((\d{1,3}\.){3}\d{1,3}))(\:\d+)?(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(\#[-a-z\d_]*)?$/i.test(e2);
          };
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.colorToHex = function(e2) {
            if (e2 === "rgba(0, 0, 0, 0)" || e2 === "")
              return false;
            if (!e2)
              return "#000000";
            if (e2.substr(0, 1) === "#")
              return e2;
            var t2, o2, n, i = /([\s\n\t\r]*?)rgb\((\d+), (\d+), (\d+)\)/.exec(e2) || /([\s\n\t\r]*?)rgba\((\d+), (\d+), (\d+), ([\d.]+)\)/.exec(e2);
            if (!i)
              return "#000000";
            for (o2 = parseInt(i[2], 10), n = parseInt(i[3], 10), t2 = (parseInt(i[4], 10) | n << 8 | o2 << 16).toString(16).toUpperCase(); t2.length < 6; )
              t2 = "0" + t2;
            return i[1] + "#" + t2;
          };
        }, function(e, o, t) {
          "use strict";
          function n(e2) {
            for (var t2 in e2)
              o.hasOwnProperty(t2) || (o[t2] = e2[t2]);
          }
          Object.defineProperty(o, "__esModule", { value: true }), n(t(82)), n(t(83)), n(t(84)), n(t(85)), n(t(86));
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.camelCase = function(e2) {
            return e2.replace(/([-_])(.)/g, function(e3, t2, o2) {
              return o2.toUpperCase();
            });
          };
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.fromCamelCase = function(e2) {
            return e2.replace(/([A-Z]+)/g, function(e3, t2) {
              return "-" + t2.toLowerCase();
            });
          };
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.normalizeURL = function(e2) {
            return e2.replace(/([^:])[\\\/]+/g, "$1/");
          };
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true });
          var n = o(21);
          t.normilizeCSSValue = function(e2, t2) {
            switch (e2.toLowerCase()) {
              case "font-weight":
                switch (("" + t2).toLowerCase()) {
                  case "bold":
                    return 700;
                  case "normal":
                    return 400;
                  case "heavy":
                    return 900;
                }
                return n.isNumeric(t2) ? +t2 : t2;
            }
            return t2;
          };
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true });
          var r = o(49);
          t.appendScript = function(e2, t2, o2, n) {
            o2 === void 0 && (o2 = "");
            var i = n.createElement("script");
            i.className = o2, i.type = "text/javascript", t2 !== void 0 && i.addEventListener("load", t2, false), i.src = r.completeUrl(e2), n.body.appendChild(i);
          };
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.completeUrl = function(e2) {
            return window.location.protocol === "file:" && /^\/\//.test(e2) && (e2 = "https:" + e2), e2;
          };
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.parseQuery = function(e2) {
            for (var t2, o2 = {}, n = e2.substr(1).split("&"), i = 0; i < n.length; i += 1)
              t2 = n[i].split("="), o2[decodeURIComponent(t2[0])] = decodeURIComponent(t2[1] || "");
            return o2;
          };
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.ctrlKey = function(e2) {
            if (typeof navigator != "undefined" && navigator.userAgent.indexOf("Mac OS X") != -1) {
              if (e2.metaKey && !e2.altKey)
                return true;
            } else if (e2.ctrlKey && !e2.altKey)
              return true;
            return false;
          };
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.defaultLanguage = function(e2) {
            return e2 === "auto" || e2 === void 0 ? document.documentElement && document.documentElement.lang || navigator.language && navigator.language.substr(0, 2) || !!navigator.browserLanguage && navigator.browserLanguage.substr(0, 2) || "en" : e2;
          };
        }, function(e, t, o) {
          "use strict";
          var n, i = this && this.__extends || (n = function(e2, t2) {
            return (n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e3, t3) {
              e3.__proto__ = t3;
            } || function(e3, t3) {
              for (var o2 in t3)
                t3.hasOwnProperty(o2) && (e3[o2] = t3[o2]);
            })(e2, t2);
          }, function(e2, t2) {
            function o2() {
              this.constructor = e2;
            }
            n(e2, t2), e2.prototype = t2 === null ? Object.create(t2) : (o2.prototype = t2.prototype, new o2());
          });
          Object.defineProperty(t, "__esModule", { value: true });
          var r = o(2), a = o(7), s = o(4), l = o(54), c = o(55), d = o(104);
          r.Config.prototype.observer = { timeout: 100 };
          var u = function(n2) {
            function e2(e3) {
              var t2 = n2.call(this, e3) || this;
              t2.onChangeStack = function() {
                t2.__newValue = t2.snapshot.make(), l.Snapshot.equal(t2.__newValue, t2.__startValue) || (t2.stack.push(new d.Command(t2.__startValue, t2.__newValue, t2)), t2.__startValue = t2.__newValue, t2.changeStack());
              }, t2.stack = new c.Stack(), t2.snapshot = new l.Snapshot(e3);
              var o2 = s.debounce(t2.onChangeStack, e3.defaultTimeout);
              return e3.events.on("afterInit.observer", function() {
                t2.__startValue = t2.snapshot.make(), e3.events.on("changeSelection.observer selectionstart.observer selectionchange.observer mousedown.observer mouseup.observer keydown.observer keyup.observer", function() {
                  t2.__startValue.html === t2.jodit.getNativeEditorValue() && (t2.__startValue = t2.snapshot.make());
                }).on("change.observer", function() {
                  t2.snapshot.isBlocked || o2();
                });
              }), t2;
            }
            return i(e2, n2), e2.prototype.redo = function() {
              this.stack.redo() && (this.__startValue = this.snapshot.make(), this.changeStack());
            }, e2.prototype.undo = function() {
              this.stack.undo() && (this.__startValue = this.snapshot.make(), this.changeStack());
            }, e2.prototype.clear = function() {
              this.__startValue = this.snapshot.make(), this.stack.clear(), this.changeStack();
            }, e2.prototype.changeStack = function() {
              this.jodit && !this.jodit.isDestructed && this.jodit.events && this.jodit.events.fire("changeStack");
            }, e2.prototype.destruct = function() {
              this.jodit.events && this.jodit.events.off(".observer");
            }, e2;
          }(a.Component);
          t.Observer = u;
        }, function(e, t, o) {
          "use strict";
          var n, i = this && this.__extends || (n = function(e2, t2) {
            return (n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e3, t3) {
              e3.__proto__ = t3;
            } || function(e3, t3) {
              for (var o2 in t3)
                t3.hasOwnProperty(o2) && (e3[o2] = t3[o2]);
            })(e2, t2);
          }, function(e2, t2) {
            function o2() {
              this.constructor = e2;
            }
            n(e2, t2), e2.prototype = t2 === null ? Object.create(t2) : (o2.prototype = t2.prototype, new o2());
          });
          Object.defineProperty(t, "__esModule", { value: true });
          var r = o(7), a = o(0), s = function(t2) {
            function s2() {
              var e2 = t2 !== null && t2.apply(this, arguments) || this;
              return e2.isBlocked = false, e2;
            }
            return i(s2, t2), s2.equal = function(e2, t3) {
              return e2.html === t3.html && JSON.stringify(e2.range) === JSON.stringify(t3.range);
            }, s2.countNodesBeforeInParent = function(e2) {
              if (!e2.parentNode)
                return 0;
              var t3, o2 = e2.parentNode.childNodes, n2 = 0, i2 = null;
              for (t3 = 0; t3 < o2.length; t3 += 1) {
                if (!i2 || o2[t3].nodeType === Node.TEXT_NODE && o2[t3].textContent === "" || i2.nodeType === Node.TEXT_NODE && o2[t3].nodeType === Node.TEXT_NODE || (n2 += 1), o2[t3] === e2)
                  return n2;
                i2 = o2[t3];
              }
              return 0;
            }, s2.strokeOffset = function(e2, t3) {
              for (; e2 && e2.nodeType === Node.TEXT_NODE; )
                (e2 = e2.previousSibling) && e2.nodeType === Node.TEXT_NODE && e2.textContent !== null && (t3 += e2.textContent.length);
              return t3;
            }, s2.prototype.calcHierarchyLadder = function(e2) {
              var t3 = [];
              if (!e2 || !e2.parentNode || !a.Dom.isOrContains(this.jodit.editor, e2))
                return [];
              for (; e2 && e2 !== this.jodit.editor; )
                e2 && t3.push(s2.countNodesBeforeInParent(e2)), e2 = e2.parentNode;
              return t3.reverse();
            }, s2.prototype.getElementByLadder = function(e2) {
              var t3, o2 = this.jodit.editor;
              for (t3 = 0; o2 && t3 < e2.length; t3 += 1)
                o2 = o2.childNodes[e2[t3]];
              return o2;
            }, s2.prototype.make = function() {
              var e2 = { html: "", range: { startContainer: [], startOffset: 0, endContainer: [], endOffset: 0 } };
              e2.html = this.jodit.getNativeEditorValue();
              var t3 = this.jodit.editorWindow.getSelection();
              if (t3 && t3.rangeCount) {
                var o2 = t3.getRangeAt(0), n2 = this.calcHierarchyLadder(o2.startContainer), i2 = this.calcHierarchyLadder(o2.endContainer), r2 = s2.strokeOffset(o2.startContainer, o2.startOffset), a2 = s2.strokeOffset(o2.endContainer, o2.endOffset);
                n2.length || o2.startContainer === this.jodit.editor || (r2 = 0), i2.length || o2.endContainer === this.jodit.editor || (a2 = 0), e2.range = { startContainer: n2, startOffset: r2, endContainer: i2, endOffset: a2 };
              }
              return e2;
            }, s2.prototype.restore = function(e2) {
              this.isBlocked = true, this.jodit.setEditorValue(e2.html);
              try {
                if (e2.range) {
                  var t3 = this.jodit.editorDocument.createRange();
                  t3.setStart(this.getElementByLadder(e2.range.startContainer), e2.range.startOffset), t3.setEnd(this.getElementByLadder(e2.range.endContainer), e2.range.endOffset), this.jodit.selection.selectRange(t3);
                }
              } catch (e3) {
              }
              this.isBlocked = false;
            }, s2.prototype.destruct = function() {
              this.isBlocked = false;
            }, s2;
          }(r.Component);
          t.Snapshot = s;
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true });
          var n = function() {
            function e2() {
              this.commands = [], this.stackPosition = -1;
            }
            return e2.prototype.clearRedo = function() {
              this.commands.length = this.stackPosition + 1;
            }, e2.prototype.clear = function() {
              this.commands.length = 0, this.stackPosition = -1;
            }, e2.prototype.push = function(e3) {
              this.clearRedo(), this.commands.push(e3), this.stackPosition += 1;
            }, e2.prototype.undo = function() {
              return !!this.canUndo() && (this.commands[this.stackPosition] && this.commands[this.stackPosition].undo(), this.stackPosition -= 1, true);
            }, e2.prototype.redo = function() {
              return !!this.canRedo() && (this.stackPosition += 1, this.commands[this.stackPosition] && this.commands[this.stackPosition].redo(), true);
            }, e2.prototype.canUndo = function() {
              return 0 <= this.stackPosition;
            }, e2.prototype.canRedo = function() {
              return this.stackPosition < this.commands.length - 1;
            }, e2;
          }();
          t.Stack = n;
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true });
          var v = o(1), d = o(1), m = o(0), g = o(8), r = o(22), a = o(9), b = o(40), _ = o(24), y = o(11), n = function() {
            function e2(e3) {
              var c = this;
              this.jodit = e3, this.isMarker = function(e4) {
                return m.Dom.isNode(e4, c.win) && e4.nodeType === Node.ELEMENT_NODE && e4.nodeName === "SPAN" && e4.hasAttribute("data-" + v.MARKER_CLASS);
              }, this.focus = function() {
                if (c.isFocused())
                  return false;
                c.jodit.iframe && c.doc.readyState == "complete" && c.jodit.iframe.focus(), c.win.focus(), c.area.focus();
                var e4 = c.sel, t2 = c.createRange();
                return e4.rangeCount && c.current() || (t2.setStart(c.area, 0), t2.collapse(true), e4.removeAllRanges(), e4.addRange(t2)), true;
              }, this.eachSelection = function(o2) {
                var e4 = c.sel;
                if (e4.rangeCount) {
                  var t2 = e4.getRangeAt(0), n2 = [], i = t2.startOffset, r2 = c.area.childNodes.length, a2 = t2.startContainer === c.area ? c.area.childNodes[i < r2 ? i : r2 - 1] : t2.startContainer, s = t2.endContainer === c.area ? c.area.childNodes[t2.endOffset - 1] : t2.endContainer;
                  m.Dom.find(a2, function(e5) {
                    return !e5 || e5 === c.area || m.Dom.isEmptyTextNode(e5) || c.isMarker(e5) || n2.push(e5), e5 === s;
                  }, c.area, true, "nextSibling", false);
                  var l = function(e5) {
                    if (e5.nodeName.match(/^(UL|OL)$/))
                      return [].slice.call(e5.childNodes).forEach(l);
                    if (e5.nodeName === "LI")
                      if (e5.firstChild)
                        e5 = e5.firstChild;
                      else {
                        var t3 = c.jodit.create.inside.text(d.INVISIBLE_SPACE);
                        e5.appendChild(t3), e5 = t3;
                      }
                    o2(e5);
                  };
                  n2.length === 0 && m.Dom.isEmptyTextNode(a2) && n2.push(a2), n2.forEach(l);
                }
              };
            }
            return Object.defineProperty(e2.prototype, "area", { get: function() {
              return this.jodit.editor;
            }, enumerable: true, configurable: true }), Object.defineProperty(e2.prototype, "win", { get: function() {
              return this.jodit.editorWindow;
            }, enumerable: true, configurable: true }), Object.defineProperty(e2.prototype, "doc", { get: function() {
              return this.jodit.editorDocument;
            }, enumerable: true, configurable: true }), Object.defineProperty(e2.prototype, "sel", { get: function() {
              return this.win.getSelection();
            }, enumerable: true, configurable: true }), e2.prototype.createRange = function() {
              return this.doc.createRange();
            }, e2.prototype.remove = function() {
              var e3 = this.sel;
              if (this.current())
                for (var t2 = 0; t2 < e3.rangeCount; t2 += 1)
                  e3.getRangeAt(t2).deleteContents(), e3.getRangeAt(t2).collapse(true);
            }, e2.prototype.insertCursorAtPoint = function(e3, t2) {
              this.removeMarkers();
              try {
                var o2 = this.createRange();
                if (this.doc.caretPositionFromPoint) {
                  var n2 = this.doc.caretPositionFromPoint(e3, t2);
                  o2.setStart(n2.offsetNode, n2.offset);
                } else
                  this.doc.caretRangeFromPoint && (n2 = this.doc.caretRangeFromPoint(e3, t2), o2.setStart(n2.startContainer, n2.startOffset));
                if (o2) {
                  o2.collapse(true);
                  var i = this.sel;
                  i.removeAllRanges(), i.addRange(o2);
                } else if (this.doc.body.createTextRange !== void 0) {
                  var r2 = this.doc.body.createTextRange();
                  r2.moveToPoint(e3, t2);
                  var a2 = r2.duplicate();
                  a2.moveToPoint(e3, t2), r2.setEndPoint("EndToEnd", a2), r2.select();
                }
                return true;
              } catch (e4) {
              }
              return false;
            }, e2.prototype.removeMarkers = function() {
              a.$$("span[data-" + v.MARKER_CLASS + "]", this.area).forEach(m.Dom.safeRemove);
            }, e2.prototype.marker = function(e3, t2) {
              e3 === void 0 && (e3 = false);
              var o2 = null;
              t2 && (o2 = t2.cloneRange()).collapse(e3);
              var n2 = this.jodit.create.inside.span();
              return n2.id = v.MARKER_CLASS + "_" + +new Date() + "_" + ("" + Math.random()).slice(2), n2.style.lineHeight = "0", n2.style.display = "none", n2.setAttribute("data-" + v.MARKER_CLASS, e3 ? "start" : "end"), n2.appendChild(this.jodit.create.inside.text(v.INVISIBLE_SPACE)), o2 && m.Dom.isOrContains(this.area, e3 ? o2.startContainer : o2.endContainer) && o2.insertNode(n2), n2;
            }, e2.prototype.restore = function(e3) {
              var r2 = this;
              if (e3 === void 0 && (e3 = []), Array.isArray(e3)) {
                var a2 = this.sel;
                a2.removeAllRanges(), e3.forEach(function(e4) {
                  var t2 = r2.createRange(), o2 = r2.area.querySelector("#" + e4.endId), n2 = r2.area.querySelector("#" + e4.startId);
                  if (n2) {
                    if (e4.collapsed || !o2) {
                      var i = n2.previousSibling;
                      i && i.nodeType === Node.TEXT_NODE ? t2.setStart(i, i.nodeValue ? i.nodeValue.length : 0) : t2.setStartBefore(n2), m.Dom.safeRemove(n2), t2.collapse(true);
                    } else
                      t2.setStartAfter(n2), m.Dom.safeRemove(n2), t2.setEndBefore(o2), m.Dom.safeRemove(o2);
                    a2.addRange(t2);
                  }
                });
              }
            }, e2.prototype.save = function() {
              var e3 = this.sel;
              if (!e3.rangeCount)
                return [];
              var t2, o2, n2, i = [], r2 = e3.rangeCount, a2 = [];
              for (t2 = 0; t2 < r2; t2 += 1)
                a2[t2] = e3.getRangeAt(t2), i[t2] = a2[t2].collapsed ? { startId: (o2 = this.marker(true, a2[t2])).id, collapsed: true, startMarker: o2.outerHTML } : (o2 = this.marker(true, a2[t2]), n2 = this.marker(false, a2[t2]), { startId: o2.id, endId: n2.id, collapsed: false, startMarker: o2.outerHTML, endMarker: n2.outerHTML });
              for (e3.removeAllRanges(), t2 = r2 - 1; 0 <= t2; --t2) {
                var s = this.doc.getElementById(i[t2].startId);
                if (s) {
                  if (i[t2].collapsed)
                    a2[t2].setStartAfter(s), a2[t2].collapse(true);
                  else if (a2[t2].setStartBefore(s), i[t2].endId) {
                    var l = this.doc.getElementById(i[t2].endId);
                    l && a2[t2].setEndAfter(l);
                  }
                }
                try {
                  e3.addRange(a2[t2].cloneRange());
                } catch (e4) {
                }
              }
              return i;
            }, e2.prototype.isCollapsed = function() {
              for (var e3 = this.sel, t2 = 0; t2 < e3.rangeCount; t2 += 1)
                if (!e3.getRangeAt(t2).collapsed)
                  return false;
              return true;
            }, e2.prototype.isFocused = function() {
              return this.doc.hasFocus && this.doc.hasFocus() && this.area === this.doc.activeElement;
            }, e2.prototype.current = function(e3) {
              if (e3 === void 0 && (e3 = true), this.jodit.getRealMode() === v.MODE_WYSIWYG) {
                var t2 = this.sel;
                if (t2 && 0 < t2.rangeCount) {
                  var o2 = t2.getRangeAt(0), n2 = o2.startContainer, i = false, r2 = function(e4) {
                    return i ? e4.lastChild : e4.firstChild;
                  };
                  if (n2.nodeType !== Node.TEXT_NODE) {
                    if ((n2 = o2.startContainer.childNodes[o2.startOffset]) || (n2 = o2.startContainer.childNodes[o2.startOffset - 1], i = true), n2 && t2.isCollapsed && n2.nodeType !== Node.TEXT_NODE) {
                      if (!i && n2.previousSibling && n2.previousSibling.nodeType === Node.TEXT_NODE)
                        n2 = n2.previousSibling;
                      else if (e3)
                        for (var a2 = r2(n2); a2; ) {
                          if (a2 && a2.nodeType === Node.TEXT_NODE) {
                            n2 = a2;
                            break;
                          }
                          a2 = r2(a2);
                        }
                    }
                    if (n2 && !t2.isCollapsed && n2.nodeType !== Node.TEXT_NODE) {
                      for (var s = n2, l = n2; l = l.lastChild, (s = s.firstChild) && l && s.nodeType !== Node.TEXT_NODE; )
                        ;
                      s === l && s && s.nodeType === Node.TEXT_NODE && (n2 = s);
                    }
                  }
                  if (n2 && m.Dom.isOrContains(this.area, n2))
                    return n2;
                }
              }
              return false;
            }, e2.prototype.insertNode = function(e3, t2, o2) {
              if (t2 === void 0 && (t2 = true), o2 === void 0 && (o2 = true), !m.Dom.isNode(e3, this.win))
                throw Error("Parameter node most be instance of Node");
              this.focus();
              var n2 = this.sel;
              if (this.isCollapsed() || this.jodit.execCommand("Delete"), n2.rangeCount) {
                var i = n2.getRangeAt(0);
                m.Dom.isOrContains(this.area, i.commonAncestorContainer) ? (i.deleteContents(), i.insertNode(e3)) : this.area.appendChild(e3);
              } else
                this.area.appendChild(e3);
              t2 && this.setCursorAfter(e3), o2 && this.jodit.events && this.jodit.events.fire("synchro"), this.jodit.events && this.jodit.events.fire("afterInsertNode", e3);
            }, e2.prototype.insertHTML = function(e3) {
              if (e3 !== "") {
                var t2, o2, n2 = this.jodit.create.inside.div(), i = this.jodit.create.inside.fragment();
                if (!this.isFocused() && this.jodit.isEditorMode() && this.focus(), e3 instanceof this.win.Node ? m.Dom.isNode(e3, this.win) && n2.appendChild(e3) : n2.innerHTML = "" + e3, this.jodit.isEditorMode() || this.jodit.events.fire("insertHTML", n2.innerHTML) !== false) {
                  for (t2 = n2.lastChild; n2.firstChild; )
                    i.appendChild(t2 = n2.firstChild);
                  for (this.insertNode(i, false), t2 ? this.setCursorAfter(t2) : this.setCursorIn(i), o2 = this.area.lastChild; o2 && o2.nodeType === Node.TEXT_NODE && o2.previousSibling && o2.nodeValue && /^\s*$/.test(o2.nodeValue); )
                    o2 = o2.previousSibling;
                  t2 && (o2 && t2 === o2 && t2.nodeType === Node.ELEMENT_NODE && this.area.appendChild(this.jodit.create.inside.element("br")), this.setCursorAfter(t2));
                }
              }
            }, e2.prototype.insertImage = function(e3, t2, o2) {
              var n2 = typeof e3 == "string" ? this.jodit.create.inside.element("img") : e3;
              if (typeof e3 == "string" && n2.setAttribute("src", e3), o2 !== null) {
                var i = "" + o2;
                i && i !== "auto" && (i + "").indexOf("px") < 0 && (i + "").indexOf("%") < 0 && (i += "px"), g.css(n2, "width", i);
              }
              t2 && typeof t2 == "object" && g.css(n2, t2);
              var r2 = function() {
                (n2.naturalHeight < n2.offsetHeight || n2.naturalWidth < n2.offsetWidth) && (n2.style.width = "", n2.style.height = ""), n2.removeEventListener("load", r2);
              };
              n2.addEventListener("load", r2), n2.complete && r2();
              var a2 = this.insertNode(n2);
              return this.jodit.events.fire("afterInsertImage", n2), a2;
            }, e2.prototype.setCursorAfter = function(e3) {
              var t2 = this;
              if (!(e3 instanceof this.win.Node))
                throw Error("Parameter node most be instance of Node");
              if (!m.Dom.up(e3, function(e4) {
                return e4 === t2.area || e4 && e4.parentNode === t2.area;
              }, this.area))
                throw Error("Node element must be in editor");
              var o2 = this.createRange(), n2 = false;
              return e3.nodeType !== Node.TEXT_NODE ? (n2 = this.doc.createTextNode(v.INVISIBLE_SPACE), o2.setStartAfter(e3), o2.insertNode(n2), o2.selectNode(n2)) : o2.setEnd(e3, e3.nodeValue !== null ? e3.nodeValue.length : 0), o2.collapse(false), this.selectRange(o2), n2;
            }, e2.prototype.cursorInTheEdge = function(o2, n2) {
              var e3 = this.sel, t2 = e3.rangeCount ? e3.getRangeAt(0) : null;
              if (!t2)
                return null;
              var i = o2 ? t2.startContainer : t2.endContainer, r2 = function(e4) {
                for (; e4; )
                  if (t3 = e4, (e4 = o2 ? m.Dom.prev(t3, function(e5) {
                    return !!e5;
                  }, n2) : m.Dom.next(t3, function(e5) {
                    return !!e5;
                  }, n2)) && !m.Dom.isEmptyTextNode(e4) && e4.nodeName !== "BR")
                    return false;
                var t3;
              };
              if (i.nodeType === Node.TEXT_NODE) {
                var a2 = i.nodeValue || "";
                if (o2 && t2.startOffset > a2.length - a2.replace(d.INVISIBLE_SPACE_REG_EXP_START, "").length)
                  return false;
                if (!o2 && t2.startOffset < a2.replace(d.INVISIBLE_SPACE_REG_EXP_END, "").length)
                  return false;
                if (r2(i) === false)
                  return false;
              }
              var s = this.current(false);
              return s && m.Dom.isOrContains(n2, s, true) ? !(!o2 && t2.startContainer.childNodes[t2.startOffset] && s && !m.Dom.isEmptyTextNode(s)) && r2(s) !== false : null;
            }, e2.prototype.setCursorBefore = function(e3) {
              var t2 = this;
              if (!(e3 instanceof this.win.Node))
                throw Error("Parameter node most be instance of Node");
              if (!m.Dom.up(e3, function(e4) {
                return e4 === t2.area || e4 && e4.parentNode === t2.area;
              }, this.area))
                throw Error("Node element must be in editor");
              var o2 = this.createRange(), n2 = false;
              return e3.nodeType !== Node.TEXT_NODE ? (n2 = this.doc.createTextNode(v.INVISIBLE_SPACE), o2.setStartBefore(e3), o2.collapse(true), o2.insertNode(n2), o2.selectNode(n2)) : o2.setStart(e3, e3.nodeValue !== null ? e3.nodeValue.length : 0), o2.collapse(true), this.selectRange(o2), n2;
            }, e2.prototype.setCursorIn = function(e3, t2) {
              var o2 = this;
              if (t2 === void 0 && (t2 = false), !(e3 instanceof this.win.Node))
                throw Error("Parameter node most be instance of Node");
              if (!m.Dom.up(e3, function(e4) {
                return e4 === o2.area || e4 && e4.parentNode === o2.area;
              }, this.area))
                throw Error("Node element must be in editor");
              var n2 = this.createRange(), i = e3, r2 = e3;
              do {
                if (i.nodeType === Node.TEXT_NODE)
                  break;
                r2 = i, i = t2 ? i.firstChild : i.lastChild;
              } while (i);
              if (!i) {
                var a2 = this.doc.createTextNode(v.INVISIBLE_SPACE);
                /^(img|br|input)$/i.test(r2.nodeName) ? i = r2 : (r2.appendChild(a2), r2 = a2);
              }
              return n2.selectNodeContents(i || r2), n2.collapse(t2), this.selectRange(n2), r2;
            }, e2.prototype.selectRange = function(e3) {
              var t2 = this.sel;
              t2.removeAllRanges(), t2.addRange(e3), this.jodit.events.fire("changeSelection");
            }, e2.prototype.select = function(e3, t2) {
              var o2 = this;
              if (t2 === void 0 && (t2 = false), !m.Dom.isNode(e3, this.win))
                throw Error("Parameter node most be instance of Node");
              if (!m.Dom.up(e3, function(e4) {
                return e4 === o2.area || e4 && e4.parentNode === o2.area;
              }, this.area))
                throw Error("Node element must be in editor");
              var n2 = this.createRange();
              n2[t2 ? "selectNodeContents" : "selectNode"](e3), this.selectRange(n2);
            }, e2.prototype.getHTML = function() {
              var e3 = this.sel;
              if (0 < e3.rangeCount) {
                var t2 = e3.getRangeAt(0).cloneContents(), o2 = this.jodit.create.inside.div();
                return o2.appendChild(t2), o2.innerHTML;
              }
              return "";
            }, e2.prototype.applyCSS = function(s, l, t2) {
              var c = this;
              l === void 0 && (l = "span");
              var d2, u = "SPAN", f = function(e4) {
                return e4 !== null && !m.Dom.isEmptyTextNode(e4) && !c.isMarker(e4);
              }, p = function(e4) {
                return !!e4 && (RegExp("^" + e4.nodeName + "$", "i").test(l) || !(!t2 || (n3 = e4).nodeName === "FONT" || n3.nodeType !== Node.ELEMENT_NODE || !(b.isPlainObject(t2) && _.each(t2, function(e5, t3) {
                  var o3 = g.css(n3, e5, void 0, true);
                  return o3 !== null && o3 !== "" && t3.indexOf(("" + o3).toLowerCase()) != -1;
                }) || typeof t2 == "function" && t2(c.jodit, n3)))) && f(e4);
                var n3;
              }, h = function(t3) {
                p(t3) && (t3.nodeName === u && s && Object.keys(s).forEach(function(e4) {
                  d2 === 0 || g.css(t3, e4) === r.normilizeCSSValue(e4, s[e4]) ? (g.css(t3, e4, ""), d2 === void 0 && (d2 = 0)) : (g.css(t3, e4, s[e4]), d2 === void 0 && (d2 = 1));
                }), m.Dom.isBlock(t3, c.win) || t3.getAttribute("style") && t3.nodeName === u || (m.Dom.unwrap(t3), d2 === void 0 && (d2 = 0)));
              };
              if (this.isCollapsed()) {
                var e3 = false;
                if (this.current() && m.Dom.closest(this.current(), l, this.area)) {
                  e3 = true;
                  var o2 = m.Dom.closest(this.current(), l, this.area);
                  o2 && this.setCursorAfter(o2);
                }
                if (l.toUpperCase() === u || !e3) {
                  var n2 = this.jodit.create.inside.element(l);
                  n2.appendChild(this.jodit.create.inside.text(v.INVISIBLE_SPACE)), this.insertNode(n2, false, false), l.toUpperCase() === u && s && g.css(n2, s), this.setCursorIn(n2);
                }
              } else {
                var i = this.save();
                r.normalizeNode(this.area.firstChild), a.$$("*[style*=font-size]", this.area).forEach(function(e4) {
                  e4.style && e4.style.fontSize && e4.setAttribute("data-font-size", "" + e4.style.fontSize);
                }), this.doc.execCommand("fontsize", false, "7"), a.$$("*[data-font-size]", this.area).forEach(function(e4) {
                  e4.style && e4.getAttribute("data-font-size") && (e4.style.fontSize = e4.getAttribute("data-font-size"), e4.removeAttribute("data-font-size"));
                }), a.$$('font[size="7"]', this.area).forEach(function(e4) {
                  if (m.Dom.next(e4, f, e4.parentNode) || m.Dom.prev(e4, f, e4.parentNode) || !p(e4.parentNode) || e4.parentNode === c.area || m.Dom.isBlock(e4.parentNode, c.win) && !v.IS_BLOCK.test(l))
                    if (e4.firstChild && !m.Dom.next(e4.firstChild, f, e4) && !m.Dom.prev(e4.firstChild, f, e4) && p(e4.firstChild))
                      h(e4.firstChild);
                    else if (m.Dom.closest(e4, p, c.area)) {
                      var t3 = c.createRange(), o3 = m.Dom.closest(e4, p, c.area);
                      t3.setStartBefore(o3), t3.setEndBefore(e4);
                      var n3 = t3.extractContents();
                      n3.textContent && y.trim(n3.textContent).length || !n3.firstChild || m.Dom.unwrap(n3.firstChild), o3.parentNode && o3.parentNode.insertBefore(n3, o3), t3.setStartAfter(e4), t3.setEndAfter(o3);
                      var i2 = t3.extractContents();
                      i2.textContent && y.trim(i2.textContent).length || !i2.firstChild || m.Dom.unwrap(i2.firstChild), m.Dom.after(o3, i2), h(o3);
                    } else {
                      var r2, a2 = [];
                      e4.firstChild && m.Dom.find(e4.firstChild, function(e5) {
                        return e5 && p(e5) ? (r2 === void 0 && (r2 = true), a2.push(e5)) : r2 === void 0 && (r2 = false), false;
                      }, e4, true), a2.forEach(m.Dom.unwrap), r2 || (d2 === void 0 && (d2 = 1), d2 === 1 && g.css(m.Dom.replace(e4, l, false, false, c.doc), s && l.toUpperCase() === u ? s : {}));
                    }
                  else
                    h(e4.parentNode);
                  e4.parentNode && m.Dom.unwrap(e4);
                }), this.restore(i);
              }
            }, e2;
          }();
          t.Select = n;
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true });
          var n = function() {
            function e2() {
            }
            return e2.prototype.set = function(e3, t2) {
              localStorage.setItem(e3, "" + t2);
            }, e2.prototype.get = function(e3) {
              return localStorage.getItem(e3);
            }, e2;
          }();
          t.LocalStorageProvider = n;
        }, function(e, t, o) {
          "use strict";
          var n, i = this && this.__extends || (n = function(e2, t2) {
            return (n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e3, t3) {
              e3.__proto__ = t3;
            } || function(e3, t3) {
              for (var o2 in t3)
                t3.hasOwnProperty(o2) && (e3[o2] = t3[o2]);
            })(e2, t2);
          }, function(e2, t2) {
            function o2() {
              this.constructor = e2;
            }
            n(e2, t2), e2.prototype = t2 === null ? Object.create(t2) : (o2.prototype = t2.prototype, new o2());
          });
          Object.defineProperty(t, "__esModule", { value: true });
          var r = function(t2) {
            function e2() {
              var e3 = t2 !== null && t2.apply(this, arguments) || this;
              return e3.toolbar = a.JoditToolbarCollection.makeCollection(e3), e3;
            }
            return i(e2, t2), e2.prototype.destruct = function() {
              this.toolbar.destruct(), t2.prototype.destruct.call(this);
            }, e2;
          }(o(59).View);
          t.ViewWithToolbar = r;
          var a = o(17);
        }, function(e, t, o) {
          "use strict";
          var n, i = this && this.__extends || (n = function(e2, t2) {
            return (n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e3, t3) {
              e3.__proto__ = t3;
            } || function(e3, t3) {
              for (var o2 in t3)
                t3.hasOwnProperty(o2) && (e3[o2] = t3[o2]);
            })(e2, t2);
          }, function(e2, t2) {
            function o2() {
              this.constructor = e2;
            }
            n(e2, t2), e2.prototype = t2 === null ? Object.create(t2) : (o2.prototype = t2.prototype, new o2());
          }), r = this && this.__assign || function() {
            return (r = Object.assign || function(e2) {
              for (var t2, o2 = 1, n2 = arguments.length; o2 < n2; o2++)
                for (var i2 in t2 = arguments[o2])
                  Object.prototype.hasOwnProperty.call(t2, i2) && (e2[i2] = t2[i2]);
              return e2;
            }).apply(this, arguments);
          };
          Object.defineProperty(t, "__esModule", { value: true });
          var a = o(60), s = function(n2) {
            function e2(e3, t2) {
              var o2 = n2.call(this, e3) || this;
              return o2.version = "3.2.34", o2.__modulesInstances = {}, o2.progress_bar = o2.create.div("jodit_progress_bar", o2.create.div()), o2.options = { removeButtons: [], zIndex: 100002, fullsize: false, showTooltip: true, useNativeTooltip: false, buttons: [], globalFullsize: true }, o2.components = [], o2.getVersion = function() {
                return o2.version;
              }, o2.id = e3 && e3.id ? e3.id : "" + new Date().getTime(), o2.jodit = e3 || o2, o2.events = e3 && e3.events ? e3.events : new a.EventsNative(o2.ownerDocument), o2.buffer = e3 && e3.buffer ? e3.buffer : {}, o2.options = r({}, o2.options, t2), o2;
            }
            return i(e2, n2), Object.defineProperty(e2.prototype, "defaultTimeout", { get: function() {
              return 100;
            }, enumerable: true, configurable: true }), e2.prototype.i18n = function(e3) {
              return this.jodit && this.jodit !== this ? this.jodit.i18n(e3) : l.Jodit.prototype.i18n(e3);
            }, e2.prototype.toggleFullSize = function(e3) {
              n2.prototype.toggleFullSize.call(this, e3), this.events && this.events.fire("toggleFullSize", e3);
            }, e2.prototype.getInstance = function(e3, t2) {
              if (typeof l.Jodit.modules[e3] != "function")
                throw Error("Need real module name");
              return this.__modulesInstances[e3] === void 0 && (this.__modulesInstances[e3] = new l.Jodit.modules[e3](this.jodit || this, t2)), this.__modulesInstances[e3];
            }, e2.prototype.destruct = function() {
              this.events.destruct(), delete this.options, n2.prototype.destruct.call(this);
            }, e2;
          }(o(107).Panel);
          t.View = s;
          var l = o(10);
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true });
          var f = o(106), n = function() {
            function e2(e3) {
              var o2 = this;
              this.__key = "__JoditEventsNativeNamespaces", this.doc = document, this.__stopped = [], this.prepareEvent = function(t2) {
                t2.cancelBubble || (t2.type.match(/^touch/) && t2.changedTouches && t2.changedTouches.length && ["clientX", "clientY", "pageX", "pageY"].forEach(function(e4) {
                  Object.defineProperty(t2, e4, { value: t2.changedTouches[0][e4], configurable: true, enumerable: true });
                }), t2.originalEvent || (t2.originalEvent = t2), t2.type === "paste" && t2.clipboardData === void 0 && o2.doc.defaultView.clipboardData && Object.defineProperty(t2, "clipboardData", { get: function() {
                  return o2.doc.defaultView.clipboardData;
                }, configurable: true, enumerable: true }));
              }, this.current = [], e3 && (this.doc = e3), this.__key += new Date().getTime();
            }
            return e2.prototype.eachEvent = function(e3, o2) {
              var n2 = this;
              e3.split(/[\s,]+/).forEach(function(e4) {
                var t2 = e4.split(".");
                o2.call(n2, t2[0], t2[1] || f.defaultNameSpace);
              });
            }, e2.prototype.getStore = function(e3) {
              if (e3[this.__key] === void 0) {
                var t2 = new f.EventHandlersStore();
                Object.defineProperty(e3, this.__key, { enumerable: false, configurable: true, value: t2 });
              }
              return e3[this.__key];
            }, e2.prototype.clearStore = function(e3) {
              e3[this.__key] !== void 0 && delete e3[this.__key];
            }, e2.prototype.triggerNativeEvent = function(e3, t2) {
              var o2 = this.doc.createEvent("HTMLEvents");
              typeof t2 == "string" ? o2.initEvent(t2, true, true) : (o2.initEvent(t2.type, t2.bubbles, t2.cancelable), ["screenX", "screenY", "clientX", "clientY", "target", "srcElement", "currentTarget", "timeStamp", "which", "keyCode"].forEach(function(e4) {
                Object.defineProperty(o2, e4, { value: t2[e4], enumerable: true });
              }), Object.defineProperty(o2, "originalEvent", { value: t2, enumerable: true })), e3.dispatchEvent(o2);
            }, e2.prototype.removeStop = function(e3) {
              if (e3) {
                var t2 = this.__stopped.indexOf(e3);
                t2 !== -1 && this.__stopped.splice(t2, 1);
              }
            }, e2.prototype.isStopped = function(e3) {
              return e3 !== void 0 && this.__stopped.indexOf(e3) != -1;
            }, e2.prototype.on = function(e3, t2, o2, n2, i) {
              var r = this;
              i === void 0 && (i = false);
              var a = typeof e3 == "string" ? this : e3, s = typeof t2 == "string" ? t2 : e3, l = o2;
              l === void 0 && typeof t2 == "function" && (l = t2);
              var c = this.getStore(a);
              if (typeof s != "string" || s === "")
                throw Error("Need events names");
              if (typeof l != "function")
                throw Error("Need event handler");
              if (Array.isArray(a))
                return a.forEach(function(e4) {
                  r.on(e4, s, l, n2);
                }), this;
              var d = typeof a.addEventListener == "function", u = this, f2 = function(e4) {
                return l && l.apply(this, arguments);
              };
              return d && (f2 = function(e4) {
                if (u.prepareEvent(e4), l && l.call(this, e4) === false)
                  return e4.preventDefault(), e4.stopImmediatePropagation(), false;
              }, n2 && (f2 = function(e4) {
                u.prepareEvent(e4);
                for (var t3 = e4.target; t3 && t3 !== this; ) {
                  if (t3.matches(n2))
                    return Object.defineProperty(e4, "target", { value: t3, configurable: true, enumerable: true }), l && l.call(t3, e4) === false ? (e4.preventDefault(), false) : void 0;
                  t3 = t3.parentNode;
                }
              })), this.eachEvent(s, function(e4, t3) {
                if (e4 === "")
                  throw Error("Need event name");
                c.indexOf(e4, t3, l) === false && (c.set(e4, t3, { event: e4, originalCallback: l, syntheticCallback: f2 }, i), d && a.addEventListener(e4, f2, false));
              }), this;
            }, e2.prototype.off = function(e3, t2, o2) {
              var n2 = this, i = typeof e3 == "string" ? this : e3, r = typeof t2 == "string" ? t2 : e3, a = this.getStore(i), s = o2;
              if (typeof r != "string" || !r)
                return a.namespaces().forEach(function(e4) {
                  n2.off(i, "." + e4);
                }), this.clearStore(i), this;
              s === void 0 && typeof t2 == "function" && (s = t2);
              var l = typeof i.removeEventListener == "function", c = function(e4) {
                l && i.removeEventListener(e4.event, e4.syntheticCallback, false);
              }, d = function(e4, t3) {
                if (e4 !== "") {
                  var o3 = a.get(e4, t3);
                  if (o3 && o3.length)
                    if (typeof s != "function")
                      o3.forEach(c), o3.length = 0;
                    else {
                      var n3 = a.indexOf(e4, t3, s);
                      n3 !== false && (c(o3[n3]), o3.splice(n3, 1));
                    }
                } else
                  a.events(t3).forEach(function(e5) {
                    e5 !== "" && d(e5, t3);
                  });
              };
              return this.eachEvent(r, function(t3, e4) {
                e4 === f.defaultNameSpace ? a.namespaces().forEach(function(e5) {
                  d(t3, e5);
                }) : d(t3, e4);
              }), this;
            }, e2.prototype.stopPropagation = function(e3, t2) {
              var n2 = this, i = typeof e3 == "string" ? this : e3, o2 = typeof e3 == "string" ? e3 : t2;
              if (typeof o2 != "string")
                throw Error("Need event names");
              var r = this.getStore(i);
              this.eachEvent(o2, function(t3, e4) {
                var o3 = r.get(t3, e4);
                o3 && n2.__stopped.push(o3), e4 === f.defaultNameSpace && r.namespaces(true).forEach(function(e5) {
                  return n2.stopPropagation(i, t3 + "." + e5);
                });
              });
            }, e2.prototype.fire = function(e3, t2) {
              for (var i = this, o2 = [], n2 = 2; n2 < arguments.length; n2++)
                o2[n2 - 2] = arguments[n2];
              var r, a = void 0, s = typeof e3 == "string" ? this : e3, l = typeof e3 == "string" ? e3 : t2, c = typeof e3 == "string" ? [t2].concat(o2) : o2, d = typeof s.dispatchEvent == "function";
              if (!d && typeof l != "string")
                throw Error("Need events names");
              var u = this.getStore(s);
              return typeof l != "string" && d ? this.triggerNativeEvent(s, t2) : this.eachEvent(l, function(o3, t3) {
                if (d)
                  i.triggerNativeEvent(s, o3);
                else {
                  var n3 = u.get(o3, t3);
                  if (n3)
                    try {
                      n3.every(function(e4) {
                        return !i.isStopped(n3) && (i.current.push(o3), r = e4.syntheticCallback.apply(s, c), i.current.pop(), r !== void 0 && (a = r), true);
                      });
                    } finally {
                      i.removeStop(n3);
                    }
                  t3 !== f.defaultNameSpace || d || u.namespaces().filter(function(e4) {
                    return e4 !== t3;
                  }).forEach(function(e4) {
                    var t4 = i.fire.apply(i, [s, o3 + "." + e4].concat(c));
                    t4 !== void 0 && (a = t4);
                  });
                }
              }), a;
            }, e2.prototype.destruct = function() {
              this.off(this);
            }, e2;
          }();
          t.EventsNative = n;
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true });
          var r = o(20), a = o(24), s = o(37), n = o(0), l = o(3), i = function() {
            function o2(e2, t2) {
              this.doc = e2, this.inside = t2 ? new o2(t2) : this;
            }
            return o2.prototype.element = function(e2, t2, o3) {
              var n2 = this, i2 = this.doc.createElement(e2.toLowerCase());
              return t2 && (r.isPlainObject(t2) ? a.each(t2, function(e3, t3) {
                r.isPlainObject(t3) && e3 === "style" ? l.css(i2, t3) : i2.setAttribute(e3, "" + t3);
              }) : o3 = t2), o3 && s.asArray(o3).forEach(function(e3) {
                return i2.appendChild(typeof e3 == "string" ? n2.fromHTML(e3) : e3);
              }), i2;
            }, o2.prototype.div = function(e2, t2, o3) {
              var n2 = this.element("div", t2, o3);
              return e2 && (n2.className = e2), n2;
            }, o2.prototype.span = function(e2, t2, o3) {
              var n2 = this.element("span", t2, o3);
              return e2 && (n2.className = e2), n2;
            }, o2.prototype.text = function(e2) {
              return this.doc.createTextNode(e2);
            }, o2.prototype.fragment = function() {
              return this.doc.createDocumentFragment();
            }, o2.prototype.fromHTML = function(e2) {
              var t2 = this.div();
              t2.innerHTML = e2;
              var o3 = t2.firstChild === t2.lastChild && t2.firstChild ? t2.firstChild : t2;
              return n.Dom.safeRemove(o3), o3;
            }, o2;
          }();
          t.Create = i;
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true });
          var s = o(13), l = o(5);
          t.Alert = function(e2, t2, o2, n) {
            n === void 0 && (n = "jodit_alert"), typeof t2 == "function" && (o2 = t2, t2 = void 0);
            var i = new s.Dialog(), r = i.create.div(n), a = i.create.fromHTML('<a href="javascript:void(0)" style="float:right;" class="jodit_button">' + l.ToolbarIcon.getIcon("cancel") + "<span>" + c.Jodit.prototype.i18n("Ok") + "</span></a>");
            return d.asArray(e2).forEach(function(e3) {
              r.appendChild(typeof e3 == "string" ? i.create.fromHTML(e3) : e3);
            }), a.addEventListener("click", function() {
              o2 && typeof o2 == "function" && o2(i) === false || i.close();
            }), i.setFooter([a]), i.open(r, t2 || "&nbsp;", true, true), a.focus(), i;
          };
          var c = o(10), d = o(19);
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true });
          var u = o(13), f = o(5);
          t.Promt = function(e2, t2, o2, n) {
            var i = new u.Dialog(), r = i.create.fromHTML('<a href="javascript:void(0)" style="float:right;" class="jodit_button">' + f.ToolbarIcon.getIcon("cancel") + "<span>" + p.Jodit.prototype.i18n("Cancel") + "</span></a>"), a = i.create.fromHTML('<a href="javascript:void(0)" style="float:left;" class="jodit_button">' + f.ToolbarIcon.getIcon("check") + "<span>" + p.Jodit.prototype.i18n("Ok") + "</span></a>"), s = i.create.element("form", { class: "jodit_promt" }), l = i.create.element("input", { autofocus: true }), c = i.create.element("label");
            typeof t2 == "function" && (o2 = t2, t2 = void 0), n && l.setAttribute("placeholder", n), c.appendChild(i.create.text(e2)), s.appendChild(c), s.appendChild(l), r.addEventListener("click", i.close, false);
            var d = function() {
              o2 && typeof o2 == "function" && o2(l.value) === false || i.close();
            };
            return a.addEventListener("click", d), s.addEventListener("submit", function() {
              return d(), false;
            }), i.setFooter([a, r]), i.open(s, t2 || "&nbsp;", true, true), l.focus(), i;
          };
          var p = o(10);
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true });
          var c = o(13), d = o(5);
          t.Confirm = function(e2, t2, o2) {
            var n = new c.Dialog(), i = n.create.fromHTML('<form class="jodit_promt"></form>'), r = n.create.element("label");
            typeof t2 == "function" && (o2 = t2, t2 = void 0), r.appendChild(n.create.fromHTML(e2)), i.appendChild(r);
            var a = n.create.fromHTML('<a href="javascript:void(0)" style="float:right;" class="jodit_button">' + d.ToolbarIcon.getIcon("cancel") + "<span>" + u.Jodit.prototype.i18n("Cancel") + "</span></a>");
            a.addEventListener("click", function() {
              o2 && o2(false), n.close();
            });
            var s = function() {
              o2 && o2(true), n.close();
            }, l = n.create.fromHTML('<a href="javascript:void(0)" style="float:left;" class="jodit_button">' + d.ToolbarIcon.getIcon("check") + "<span>" + u.Jodit.prototype.i18n("Yes") + "</span></a>");
            return l.addEventListener("click", s), i.addEventListener("submit", function() {
              return s(), false;
            }), n.setFooter([l, a]), n.open(i, t2 || "&nbsp;", true, true), l.focus(), n;
          };
          var u = o(10);
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), o(66), typeof window != "undefined" && o(67);
          var n = o(10), i = o(1), r = o(112), a = o(123), s = o(128), l = o(169), c = o(2), d = o(5);
          Object.keys(i).forEach(function(e2) {
            n.Jodit[e2] = i[e2];
          });
          var u = function(e2) {
            return e2 !== "__esModule";
          };
          Object.keys(l).filter(u).forEach(function(e2) {
            d.ToolbarIcon.icons[e2.replace("_", "-")] = l[e2];
          }), Object.keys(a).filter(u).forEach(function(e2) {
            n.Jodit.modules[e2] = a[e2];
          }), ["Confirm", "Alert", "Promt"].forEach(function(e2) {
            n.Jodit[e2] = a[e2];
          }), Object.keys(s).filter(u).forEach(function(e2) {
            n.Jodit.plugins[e2] = s[e2];
          }), Object.keys(r).filter(u).forEach(function(e2) {
            n.Jodit.lang[e2] = r[e2];
          }), n.Jodit.defaultOptions = c.Config.defaultOptions, c.OptionsDefault.prototype = n.Jodit.defaultOptions, t.Jodit = n.Jodit;
        }, function(e, t, o) {
        }, function(e, t, o) {
          "use strict";
          var n;
          Object.defineProperty(t, "__esModule", { value: true }), o(68), o(69), (n = Element.prototype).matches || (n.matches = n.matchesSelector !== void 0 ? n.matchesSelector : function(e2) {
            if (!this.ownerDocument)
              return [];
            var t2 = this.ownerDocument.querySelectorAll(e2), o2 = this;
            return Array.prototype.some.call(t2, function(e3) {
              return e3 === o2;
            });
          }), Array.from || (Array.from = function(e2) {
            return [].slice.call(e2);
          });
        }, function(e, t) {
          "document" in window.self && ("classList" in document.createElement("_") && (!document.createElementNS || "classList" in document.createElementNS("http://www.w3.org/2000/svg", "g")) || function(e2) {
            "use strict";
            if ("Element" in e2) {
              var t2 = "classList", o = "prototype", n = e2.Element[o], i = Object, r = String[o].trim || function() {
                return this.replace(/^\s+|\s+$/g, "");
              }, a = Array[o].indexOf || function(e3) {
                for (var t3 = 0, o2 = this.length; t3 < o2; t3++)
                  if (t3 in this && this[t3] === e3)
                    return t3;
                return -1;
              }, s = function(e3, t3) {
                this.name = e3, this.code = DOMException[e3], this.message = t3;
              }, l = function(e3, t3) {
                if (t3 === "")
                  throw new s("SYNTAX_ERR", "An invalid or illegal string was specified");
                if (/\s/.test(t3))
                  throw new s("INVALID_CHARACTER_ERR", "String contains an invalid character");
                return a.call(e3, t3);
              }, c = function(e3) {
                for (var t3 = r.call(e3.getAttribute("class") || ""), o2 = t3 ? t3.split(/\s+/) : [], n2 = 0, i2 = o2.length; n2 < i2; n2++)
                  this.push(o2[n2]);
                this._updateClassName = function() {
                  e3.setAttribute("class", "" + this);
                };
              }, d = c[o] = [], u = function() {
                return new c(this);
              };
              if (s[o] = Error[o], d.item = function(e3) {
                return this[e3] || null;
              }, d.contains = function(e3) {
                return l(this, e3 += "") !== -1;
              }, d.add = function() {
                for (var e3, t3 = arguments, o2 = 0, n2 = t3.length, i2 = false; l(this, e3 = t3[o2] + "") === -1 && (this.push(e3), i2 = true), ++o2 < n2; )
                  ;
                i2 && this._updateClassName();
              }, d.remove = function() {
                var e3, t3, o2 = arguments, n2 = 0, i2 = o2.length, r2 = false;
                do {
                  for (t3 = l(this, e3 = o2[n2] + ""); t3 !== -1; )
                    this.splice(t3, 1), r2 = true, t3 = l(this, e3);
                } while (++n2 < i2);
                r2 && this._updateClassName();
              }, d.toggle = function(e3, t3) {
                var o2 = this.contains(e3 += ""), n2 = o2 ? t3 !== true && "remove" : t3 !== false && "add";
                return n2 && this[n2](e3), t3 === true || t3 === false ? t3 : !o2;
              }, d.toString = function() {
                return this.join(" ");
              }, i.defineProperty) {
                var f = { get: u, enumerable: true, configurable: true };
                try {
                  i.defineProperty(n, t2, f);
                } catch (e3) {
                  e3.number !== void 0 && e3.number !== -2146823252 || (f.enumerable = false, i.defineProperty(n, t2, f));
                }
              } else
                i[o].__defineGetter__ && n.__defineGetter__(t2, u);
            }
          }(window.self), function() {
            "use strict";
            var e2 = document.createElement("_");
            if (e2.classList.add("c1", "c2"), !e2.classList.contains("c2")) {
              var t2 = function(e3) {
                var n = DOMTokenList.prototype[e3];
                DOMTokenList.prototype[e3] = function(e4) {
                  var t3, o2 = arguments.length;
                  for (t3 = 0; t3 < o2; t3++)
                    n.call(this, e4 = arguments[t3]);
                };
              };
              t2("add"), t2("remove");
            }
            if (e2.classList.toggle("c3", false), e2.classList.contains("c3")) {
              var o = DOMTokenList.prototype.toggle;
              DOMTokenList.prototype.toggle = function(e3, t3) {
                return 1 in arguments && !this.contains(e3) == !t3 ? t3 : o.call(this, e3);
              };
            }
            e2 = null;
          }());
        }, function(e, t, o) {
          "use strict";
          e.exports = o(70).polyfill();
        }, function(e, t, o) {
          var B, H;
          B = o(71), H = o(72), e.exports = function() {
            "use strict";
            function c(e3) {
              return typeof e3 == "function";
            }
            var o2 = Array.isArray ? Array.isArray : function(e3) {
              return Object.prototype.toString.call(e3) === "[object Array]";
            }, n = 0, t2 = void 0, i = void 0, s = function(e3, t3) {
              f[n] = e3, f[n + 1] = t3, (n += 2) === 2 && (i ? i(p) : b());
            }, e2 = typeof window != "undefined" ? window : void 0, r = e2 || {}, a = r.MutationObserver || r.WebKitMutationObserver, l = typeof self == "undefined" && B !== void 0 && {}.toString.call(B) === "[object process]", d = typeof Uint8ClampedArray != "undefined" && typeof importScripts != "undefined" && typeof MessageChannel != "undefined";
            function u() {
              var e3 = setTimeout;
              return function() {
                return e3(p, 1);
              };
            }
            var f = Array(1e3);
            function p() {
              for (var e3 = 0; e3 < n; e3 += 2) {
                (0, f[e3])(f[e3 + 1]), f[e3] = void 0, f[e3 + 1] = void 0;
              }
              n = 0;
            }
            var h, v, m, g, b = void 0;
            function _(e3, t3) {
              var o3 = this, n2 = new this.constructor(C);
              n2[w] === void 0 && P(n2);
              var i2 = o3._state;
              if (i2) {
                var r2 = arguments[i2 - 1];
                s(function() {
                  return O(i2, n2, r2, o3._result);
                });
              } else
                M(o3, n2, e3, t3);
              return n2;
            }
            function y(e3) {
              if (e3 && typeof e3 == "object" && e3.constructor === this)
                return e3;
              var t3 = new this(C);
              return D(t3, e3), t3;
            }
            b = l ? function() {
              return B.nextTick(p);
            } : a ? (v = 0, m = new a(p), g = document.createTextNode(""), m.observe(g, { characterData: true }), function() {
              g.data = v = ++v % 2;
            }) : d ? ((h = new MessageChannel()).port1.onmessage = p, function() {
              return h.port2.postMessage(0);
            }) : e2 === void 0 ? function() {
              try {
                var e3 = Function("return this")().require("vertx");
                return (t2 = e3.runOnLoop || e3.runOnContext) === void 0 ? u() : function() {
                  t2(p);
                };
              } catch (e4) {
                return u();
              }
            }() : u();
            var w = Math.random().toString(36).substring(2);
            function C() {
            }
            var j = void 0, E = 1, T = 2, S = { error: null };
            function x(e3) {
              try {
                return e3.then;
              } catch (e4) {
                return S.error = e4, S;
              }
            }
            function I(e3, t3, o3) {
              var n2, i2, r2, a2;
              t3.constructor === e3.constructor && o3 === _ && t3.constructor.resolve === y ? (r2 = e3, (a2 = t3)._state === E ? L(r2, a2._result) : a2._state === T ? A(r2, a2._result) : M(a2, void 0, function(e4) {
                return D(r2, e4);
              }, function(e4) {
                return A(r2, e4);
              })) : o3 === S ? (A(e3, S.error), S.error = null) : o3 === void 0 ? L(e3, t3) : c(o3) ? (n2 = t3, i2 = o3, s(function(t4) {
                var o4 = false, e4 = function(e5, t5, o5, n3) {
                  try {
                    e5.call(t5, o5, n3);
                  } catch (e6) {
                    return e6;
                  }
                }(i2, n2, function(e5) {
                  o4 || (o4 = true, n2 !== e5 ? D(t4, e5) : L(t4, e5));
                }, function(e5) {
                  o4 || (o4 = true, A(t4, e5));
                });
                !o4 && e4 && (o4 = true, A(t4, e4));
              }, e3)) : L(e3, t3);
            }
            function D(e3, t3) {
              var o3, n2;
              e3 === t3 ? A(e3, new TypeError("You cannot resolve a promise with itself")) : (n2 = typeof (o3 = t3), o3 === null || n2 !== "object" && n2 !== "function" ? L(e3, t3) : I(e3, t3, x(t3)));
            }
            function k(e3) {
              e3._onerror && e3._onerror(e3._result), q(e3);
            }
            function L(e3, t3) {
              e3._state === j && (e3._result = t3, e3._state = E, e3._subscribers.length !== 0 && s(q, e3));
            }
            function A(e3, t3) {
              e3._state === j && (e3._state = T, e3._result = t3, s(k, e3));
            }
            function M(e3, t3, o3, n2) {
              var i2 = e3._subscribers, r2 = i2.length;
              e3._onerror = null, i2[r2] = t3, i2[r2 + E] = o3, i2[r2 + T] = n2, r2 === 0 && e3._state && s(q, e3);
            }
            function q(e3) {
              var t3 = e3._subscribers, o3 = e3._state;
              if (t3.length !== 0) {
                for (var n2 = void 0, i2 = void 0, r2 = e3._result, a2 = 0; a2 < t3.length; a2 += 3)
                  i2 = t3[a2 + o3], (n2 = t3[a2]) ? O(o3, n2, i2, r2) : i2(r2);
                e3._subscribers.length = 0;
              }
            }
            function O(e3, t3, o3, n2) {
              var i2 = c(o3), r2 = void 0, a2 = void 0, s2 = void 0, l2 = void 0;
              if (i2) {
                if ((r2 = function(e4, t4) {
                  try {
                    return e4(t4);
                  } catch (e5) {
                    return S.error = e5, S;
                  }
                }(o3, n2)) === S ? (l2 = true, a2 = r2.error, r2.error = null) : s2 = true, t3 === r2)
                  return void A(t3, new TypeError("A promises callback cannot return that same promise."));
              } else
                r2 = n2, s2 = true;
              t3._state !== j || (i2 && s2 ? D(t3, r2) : l2 ? A(t3, a2) : e3 === E ? L(t3, r2) : e3 === T && A(t3, r2));
            }
            var z = 0;
            function P(e3) {
              e3[w] = z++, e3._state = void 0, e3._result = void 0, e3._subscribers = [];
            }
            var N = function() {
              function e3(e4, t3) {
                this._instanceConstructor = e4, this.promise = new e4(C), this.promise[w] || P(this.promise), o2(t3) ? (this.length = t3.length, this._remaining = t3.length, this._result = Array(this.length), this.length === 0 ? L(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(t3), this._remaining === 0 && L(this.promise, this._result))) : A(this.promise, Error("Array Methods must be provided an Array"));
              }
              return e3.prototype._enumerate = function(e4) {
                for (var t3 = 0; this._state === j && t3 < e4.length; t3++)
                  this._eachEntry(e4[t3], t3);
              }, e3.prototype._eachEntry = function(t3, e4) {
                var o3 = this._instanceConstructor, n2 = o3.resolve;
                if (n2 === y) {
                  var i2 = x(t3);
                  if (i2 === _ && t3._state !== j)
                    this._settledAt(t3._state, e4, t3._result);
                  else if (typeof i2 != "function")
                    this._remaining--, this._result[e4] = t3;
                  else if (o3 === R) {
                    var r2 = new o3(C);
                    I(r2, t3, i2), this._willSettleAt(r2, e4);
                  } else
                    this._willSettleAt(new o3(function(e5) {
                      return e5(t3);
                    }), e4);
                } else
                  this._willSettleAt(n2(t3), e4);
              }, e3.prototype._settledAt = function(e4, t3, o3) {
                var n2 = this.promise;
                n2._state === j && (this._remaining--, e4 === T ? A(n2, o3) : this._result[t3] = o3), this._remaining === 0 && L(n2, this._result);
              }, e3.prototype._willSettleAt = function(e4, t3) {
                var o3 = this;
                M(e4, void 0, function(e5) {
                  return o3._settledAt(E, t3, e5);
                }, function(e5) {
                  return o3._settledAt(T, t3, e5);
                });
              }, e3;
            }(), R = function() {
              function t3(e3) {
                this[w] = z++, this._result = this._state = void 0, this._subscribers = [], C !== e3 && (typeof e3 != "function" && function() {
                  throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
                }(), this instanceof t3 ? function(t4, e4) {
                  try {
                    e4(function(e5) {
                      D(t4, e5);
                    }, function(e5) {
                      A(t4, e5);
                    });
                  } catch (e5) {
                    A(t4, e5);
                  }
                }(this, e3) : function() {
                  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
                }());
              }
              return t3.prototype.catch = function(e3) {
                return this.then(null, e3);
              }, t3.prototype.finally = function(t4) {
                var o3 = this.constructor;
                return c(t4) ? this.then(function(e3) {
                  return o3.resolve(t4()).then(function() {
                    return e3;
                  });
                }, function(e3) {
                  return o3.resolve(t4()).then(function() {
                    throw e3;
                  });
                }) : this.then(t4, t4);
              }, t3;
            }();
            return R.prototype.then = _, R.all = function(e3) {
              return new N(this, e3).promise;
            }, R.race = function(i2) {
              var r2 = this;
              return o2(i2) ? new r2(function(e3, t3) {
                for (var o3 = i2.length, n2 = 0; n2 < o3; n2++)
                  r2.resolve(i2[n2]).then(e3, t3);
              }) : new r2(function(e3, t3) {
                return t3(new TypeError("You must pass an array to race."));
              });
            }, R.resolve = y, R.reject = function(e3) {
              var t3 = new this(C);
              return A(t3, e3), t3;
            }, R._setScheduler = function(e3) {
              i = e3;
            }, R._setAsap = function(e3) {
              s = e3;
            }, R._asap = s, R.polyfill = function() {
              var e3 = void 0;
              if (H !== void 0)
                e3 = H;
              else if (typeof self != "undefined")
                e3 = self;
              else
                try {
                  e3 = Function("return this")();
                } catch (e4) {
                  throw Error("polyfill failed because global object is unavailable in this environment");
                }
              var t3 = e3.Promise;
              if (t3) {
                var o3 = null;
                try {
                  o3 = Object.prototype.toString.call(t3.resolve());
                } catch (e4) {
                }
                if (o3 === "[object Promise]" && !t3.cast)
                  return;
              }
              e3.Promise = R;
            }, R.Promise = R;
          }();
        }, function(e, t) {
          var o, n, i = e.exports = {};
          function r() {
            throw Error("setTimeout has not been defined");
          }
          function a() {
            throw Error("clearTimeout has not been defined");
          }
          function s(t2) {
            if (o === setTimeout)
              return setTimeout(t2, 0);
            if ((o === r || !o) && setTimeout)
              return (o = setTimeout)(t2, 0);
            try {
              return o(t2, 0);
            } catch (e2) {
              try {
                return o.call(null, t2, 0);
              } catch (e3) {
                return o.call(this, t2, 0);
              }
            }
          }
          !function() {
            try {
              o = typeof setTimeout == "function" ? setTimeout : r;
            } catch (e2) {
              o = r;
            }
            try {
              n = typeof clearTimeout == "function" ? clearTimeout : a;
            } catch (e2) {
              n = a;
            }
          }();
          var l, c = [], d = false, u = -1;
          function f() {
            d && l && (d = false, l.length ? c = l.concat(c) : u = -1, c.length && p());
          }
          function p() {
            if (!d) {
              var e2 = s(f);
              d = true;
              for (var t2 = c.length; t2; ) {
                for (l = c, c = []; ++u < t2; )
                  l && l[u].run();
                u = -1, t2 = c.length;
              }
              l = null, d = false, function(t3) {
                if (n === clearTimeout)
                  return clearTimeout(t3);
                if ((n === a || !n) && clearTimeout)
                  return (n = clearTimeout)(t3);
                try {
                  n(t3);
                } catch (e3) {
                  try {
                    return n.call(null, t3);
                  } catch (e4) {
                    return n.call(this, t3);
                  }
                }
              }(e2);
            }
          }
          function h(e2, t2) {
            this.fun = e2, this.array = t2;
          }
          function v() {
          }
          i.nextTick = function(e2) {
            var t2 = Array(arguments.length - 1);
            if (1 < arguments.length)
              for (var o2 = 1; o2 < arguments.length; o2++)
                t2[o2 - 1] = arguments[o2];
            c.push(new h(e2, t2)), c.length !== 1 || d || s(p);
          }, h.prototype.run = function() {
            this.fun.apply(null, this.array);
          }, i.title = "browser", i.browser = true, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = v, i.addListener = v, i.once = v, i.off = v, i.removeListener = v, i.removeAllListeners = v, i.emit = v, i.prependListener = v, i.prependOnceListener = v, i.listeners = function(e2) {
            return [];
          }, i.binding = function(e2) {
            throw Error("process.binding is not supported");
          }, i.cwd = function() {
            return "/";
          }, i.chdir = function(e2) {
            throw Error("process.chdir is not supported");
          }, i.umask = function() {
            return 0;
          };
        }, function(e, t) {
          var o;
          o = function() {
            return this;
          }();
          try {
            o = o || Function("return this")();
          } catch (e2) {
            typeof window == "object" && (o = window);
          }
          e.exports = o;
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.inArray = function(e2, t2) {
            return t2.indexOf(e2) != -1;
          };
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.splitArray = function(e2) {
            return typeof e2 == "string" ? e2.split(/[,\s]+/) : e2;
          };
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true });
          var l = o(15);
          t.throttle = function(t2, o2, n) {
            var i, r, a, s = null;
            return function() {
              i = arguments, r = true;
              var e2 = n || this;
              o2 ? s || (a = function() {
                s = r ? (t2.apply(e2, i), r = false, l.setTimeout(a, o2)) : null;
              })() : t2.apply(e2, i);
            };
          };
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.isHTML = function(e2) {
            return /<([A-Za-z][A-Za-z0-9]*)\b[^>]*>(.*?)<\/\1>/m.test(e2);
          };
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.isHTMLFromWord = function(e2) {
            return e2.search(/<meta.*?Microsoft Excel\s[\d].*?>/) != -1 || e2.search(/<meta.*?Microsoft Word\s[\d].*?>/) != -1 || e2.search(/style="[^"]*mso-/) != -1 && e2.search(/<font/) != -1;
          };
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true });
          var n = o(21);
          t.isInt = function(e2) {
            return typeof e2 == "string" && n.isNumeric(e2) && (e2 = parseFloat(e2)), typeof e2 == "number" && Number.isFinite(e2) && !(e2 % 1);
          };
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.isLicense = function(e2) {
            return typeof e2 == "string" && e2.length === 32 && /^[a-z0-9]+$/.test(e2);
          };
        }, function(e, o, t) {
          "use strict";
          function n(e2) {
            for (var t2 in e2)
              o.hasOwnProperty(t2) || (o[t2] = e2[t2]);
          }
          Object.defineProperty(o, "__esModule", { value: true }), n(t(81)), n(t(42));
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.hexToRgb = function(e2) {
            e2 = e2.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(e3, t3, o2, n) {
              return t3 + t3 + o2 + o2 + n + n;
            });
            var t2 = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e2);
            return t2 ? { r: parseInt(t2[1], 16), g: parseInt(t2[2], 16), b: parseInt(t2[3], 16) } : null;
          };
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true });
          var s = o(0), l = o(9);
          t.applyStyles = function(e2) {
            if (e2.indexOf("<html ") == -1)
              return e2;
            e2 = (e2 = e2.substring(e2.indexOf("<html "), e2.length)).substring(0, 7 + e2.lastIndexOf("</html>"));
            var t2 = document.createElement("iframe");
            t2.style.display = "none", document.body.appendChild(t2);
            var o2 = "", n = [];
            try {
              var i = t2.contentDocument || (t2.contentWindow ? t2.contentWindow.document : null);
              if (i) {
                i.open(), i.write(e2), i.close(), i.styleSheets.length && (n = i.styleSheets[i.styleSheets.length - 1].cssRules);
                for (var r = function(t3) {
                  if (n[t3].selectorText === "")
                    return "continue";
                  l.$$(n[t3].selectorText, i.body).forEach(function(e3) {
                    e3.style.cssText += n[t3].style.cssText.replace(/mso-[a-z\-]+:[\s]*[^;]+;/g, "").replace(/border[a-z\-]*:[\s]*[^;]+;/g, "");
                  });
                }, a = 0; a < n.length; a += 1)
                  r(a);
                o2 = i.firstChild ? i.body.innerHTML : "";
              }
            } catch (e3) {
            } finally {
              s.Dom.safeRemove(t2);
            }
            return o2 && (e2 = o2), e2.replace(/<(\/)?(html|colgroup|col|o:p)[^>]*>/g, "").replace(/<!--[^>]*>/g, "");
          };
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true });
          var i = o(0);
          t.cleanFromWord = function(e2) {
            e2.indexOf("<html ") != -1 && (e2 = (e2 = e2.substring(e2.indexOf("<html "), e2.length)).substring(0, 7 + e2.lastIndexOf("</html>")));
            var t2 = "";
            try {
              var o2 = document.createElement("div");
              o2.innerHTML = e2;
              var n = [];
              o2.firstChild && i.Dom.all(o2, function(t3) {
                if (t3)
                  switch (t3.nodeType) {
                    case Node.ELEMENT_NODE:
                      t3.nodeName === "FONT" ? i.Dom.unwrap(t3) : [].slice.call(t3.attributes).forEach(function(e3) {
                        ["src", "href", "rel", "content"].indexOf(e3.name.toLowerCase()) == -1 && t3.removeAttribute(e3.name);
                      });
                      break;
                    case Node.TEXT_NODE:
                      break;
                    default:
                      n.push(t3);
                  }
              }), n.forEach(i.Dom.safeRemove), t2 = o2.innerHTML;
            } catch (e3) {
            }
            return t2 && (e2 = t2), e2.replace(/<(\/)?(html|colgroup|col|o:p)[^>]*>/g, "").replace(/<!--[^>]*>/g, "");
          };
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true });
          var n = o(32), i = o(1);
          t.clear = function(e2, t2) {
            return t2 === void 0 && (t2 = false), e2 = n.trim(e2).replace(i.INVISIBLE_SPACE_REG_EXP, "").replace(/[\s]*class=""/g, ""), t2 && (e2 = e2.replace(/<p[^>]*>[\s\n\r\t]*(&nbsp;|<br>|<br\/>)?[\s\n\r\t]*<\/p>[\n\r]*/g, "")), e2;
          };
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.htmlspecialchars = function(e2) {
            var t2 = document.createElement("div");
            return t2.innerText = e2, t2.innerHTML;
          };
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.stripTags = function(e2) {
            var t2 = document.createElement("div");
            return t2.innerHTML = e2, t2.textContent || "";
          };
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true });
          var n = o(11), i = o(1);
          t.normalizeKeyAliases = function(e2) {
            var t2 = {};
            return e2.replace(/\+\+/g, "+add").split(/[\s]*\+[\s]*/).map(function(e3) {
              return n.trim(e3.toLowerCase());
            }).map(function(e3) {
              return i.KEY_ALIASES[e3] || e3;
            }).sort().filter(function(e3) {
              return !t2[e3] && e3 !== "" && (t2[e3] = true);
            }).join("+");
          };
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.sprintf = function() {
            for (var e2 = [], t2 = 0; t2 < arguments.length; t2++)
              e2[t2] = arguments[t2];
            var g = 0, b = e2, o2 = b[g++], _ = function(e3, t3, o3, n) {
              var i = e3.length < t3 ? Array(1 + t3 - e3.length >>> 0).join(o3) : "";
              return n ? e3 + i : i + e3;
            }, y = function(e3, t3, o3, n, i) {
              var r = n - e3.length;
              return 0 < r && (e3 = o3 || !i ? _(e3, n, " ", o3) : e3.slice(0, t3.length) + _("", r, "0", true) + e3.slice(t3.length)), e3;
            }, w = function(e3, t3, o3, n, i, r, a) {
              var s = e3 >>> 0, l = (o3 = o3 && s && { 2: "0b", 8: "0", 16: "0x" }[t3] || "") + _(s.toString(t3), r || 0, "0", false);
              return y(l, o3, n, i, a);
            }, C = function(e3, t3, o3, n, i) {
              return n != null && (e3 = e3.slice(0, n)), y(e3, "", t3, o3, i);
            };
            return o2.replace(/%%|%(\d+\$)?([-+#0 ]*)(\*\d+\$|\*|\d+)?(\.(\*\d+\$|\*|\d+))?([scboxXuidfegEG])/g, function(e3, t3, o3, n, i, r, a) {
              if (e3 === "%%")
                return "%";
              for (var s = false, l = "", c = false, d = false, u = 0; o3 && u < o3.length; u++)
                switch (o3.charAt(u)) {
                  case " ":
                    l = " ";
                    break;
                  case "+":
                    l = "+";
                    break;
                  case "-":
                    s = true;
                    break;
                  case "0":
                    c = true;
                    break;
                  case "#":
                    d = true;
                }
              if ((n = n ? n === "*" ? +b[g++] : ("" + n)[0] === "*" ? +b[("" + n).slice(1, -1)] : +n : 0) < 0 && (n = -n, s = true), !isFinite(n))
                throw Error("sprintf: (minimum-)width must be finite");
              r = r ? r === "*" ? +b[g++] : r[0] === "*" ? +b[r.slice(1, -1)] : +r : -1 < "fFeE".indexOf(a) ? 6 : a === "d" ? 0 : void 0;
              var f = t3 ? b[t3.slice(0, -1)] : b[g++];
              switch (a) {
                case "s":
                  return C(f + "", s, n, r, c);
                case "c":
                  return C(String.fromCharCode(+f), s, n, r, c);
                case "b":
                  return w(f, 2, d, s, n, r, c);
                case "o":
                  return w(f, 8, d, s, n, r, c);
                case "x":
                  return w(f, 16, d, s, n, r, c);
                case "X":
                  return w(f, 16, d, s, n, r, c).toUpperCase();
                case "u":
                  return w(f, 10, d, s, n, r, c);
                case "i":
                case "d":
                  return f = (h = (p = parseInt("" + f, 10)) < 0 ? "-" : l) + _(Math.abs(p) + "", r, "0", false), y(f, h, s, n, c);
                case "e":
                case "E":
                case "f":
                case "F":
                case "g":
                case "G":
                  var p, h = (p = +f) < 0 ? "-" : l, v = ["toExponential", "toFixed", "toPrecision"]["efg".indexOf(a.toLowerCase())], m = ["toString", "toUpperCase"]["eEfFgG".indexOf(a) % 2];
                  return f = h + Math.abs(p)[v](r), y(f, h, s, n, c)[m]();
                default:
                  return e3;
              }
            });
          };
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.normalizeLicense = function(e2, t2) {
            t2 === void 0 && (t2 = 8);
            for (var o2 = []; e2.length; )
              o2.push(e2.substr(0, t2)), e2 = e2.substr(t2);
            return o2[1] = o2[1].replace(/./g, "*"), o2[2] = o2[2].replace(/./g, "*"), o2.join("-");
          };
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true });
          var n = o(1), i = o(0);
          t.normalizeNode = function(e2) {
            if (e2) {
              if (e2.nodeType === Node.TEXT_NODE && e2.nodeValue !== null && e2.parentNode)
                for (; e2.nextSibling && e2.nextSibling.nodeType === Node.TEXT_NODE; )
                  e2.nextSibling.nodeValue !== null && (e2.nodeValue += e2.nextSibling.nodeValue), e2.nodeValue = e2.nodeValue.replace(n.INVISIBLE_SPACE_REG_EXP, ""), i.Dom.safeRemove(e2.nextSibling);
              else
                t.normalizeNode(e2.firstChild);
              t.normalizeNode(e2.nextSibling);
            }
          };
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.normalizePath = function(e2) {
            return e2.replace(/([^:])[\\\/]+/g, "$1/");
          };
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.normalizeRelativePath = function(e2) {
            return e2.split("/").reduce(function(e3, t2) {
              switch (t2) {
                case "":
                case ".":
                  break;
                case "..":
                  e3.pop();
                  break;
                default:
                  e3.push(t2);
              }
              return e3;
            }, []).join("/") + (e2.endsWith("/") ? "/" : "");
          };
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.normalizeSize = function(e2) {
            return /^[0-9]+$/.test("" + e2) ? e2 + "px" : "" + e2;
          };
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true });
          var i = o(42), r = o(32);
          t.normalizeColor = function(e2) {
            var t2 = ["#"], o2 = i.colorToHex(e2);
            if (!o2)
              return false;
            if ((o2 = (o2 = r.trim(o2.toUpperCase())).substr(1)).length !== 3)
              return 6 < o2.length && (o2 = o2.substr(0, 6)), "#" + o2;
            for (var n = 0; n < 3; n += 1)
              t2.push(o2[n]), t2.push(o2[n]);
            return t2.join("");
          };
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.getContentWidth = function(e2, t2) {
            var o2 = function(e3) {
              return parseInt(e3, 10);
            }, n = t2.getComputedStyle(e2);
            return e2.offsetWidth - o2(n.getPropertyValue("padding-left") || "0") - o2(n.getPropertyValue("padding-right") || "0");
          };
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.innerWidth = function(e2, t2) {
            var o2 = t2.getComputedStyle(e2);
            return e2.clientWidth - (parseFloat(o2.paddingLeft || "0") + parseFloat(o2.paddingRight || "0"));
          };
        }, function(e, v, t) {
          "use strict";
          Object.defineProperty(v, "__esModule", { value: true }), v.offset = function(e2, t2, o, n) {
            n === void 0 && (n = false);
            var i, r, a = e2.getBoundingClientRect(), s = o.body, l = o.documentElement || { clientTop: 0, clientLeft: 0, scrollTop: 0, scrollLeft: 0 }, c = o.defaultView || o.parentWindow, d = c.pageYOffset || l.scrollTop || s.scrollTop, u = c.pageXOffset || l.scrollLeft || s.scrollLeft, f = l.clientTop || s.clientTop || 0, p = l.clientLeft || s.clientLeft || 0;
            if (!n && t2 && t2.options && t2.options.iframe && t2.iframe) {
              var h = v.offset(t2.iframe, t2, t2.ownerDocument, true);
              i = a.top + h.top, r = a.left + h.left;
            } else
              i = a.top + d - f, r = a.left + u - p;
            return { top: Math.round(i), left: Math.round(r), width: a.width, height: a.height };
          };
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.browser = function(e2) {
            var t2 = navigator.userAgent.toLowerCase(), o2 = /(firefox)[\s\/]([\w.]+)/.exec(t2) || /(chrome)[\s\/]([\w.]+)/.exec(t2) || /(webkit)[\s\/]([\w.]+)/.exec(t2) || /(opera)(?:.*version)[\s\/]([\w.]+)/.exec(t2) || /(msie)[\s]([\w.]+)/.exec(t2) || /(trident)\/([\w.]+)/.exec(t2) || t2.indexOf("compatible") < 0 || [];
            return e2 === "version" ? o2[2] : e2 === "webkit" ? o2[1] === "chrome" || o2[1] === "webkit" : e2 === "ff" ? o2[1] === "firefox" : e2 === "msie" ? o2[1] === "trident" || o2[1] === "msie" : o2[1] === e2;
          };
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true });
          var s = o(41), l = o(50);
          t.convertMediaURLToVideoEmbed = function(e2, t2, o2) {
            if (t2 === void 0 && (t2 = 400), o2 === void 0 && (o2 = 345), !s.isURL(e2))
              return e2;
            var n = document.createElement("a"), i = /(?:http?s?:\/\/)?(?:www\.)?(?:vimeo\.com)\/?(.+)/g;
            n.href = e2, t2 || (t2 = 400), o2 || (o2 = 345);
            var r = n.protocol || "";
            switch (n.hostname) {
              case "www.vimeo.com":
              case "vimeo.com":
                return i.test(e2) ? e2.replace(i, '<iframe width="' + t2 + '" height="' + o2 + '" src="' + r + '//player.vimeo.com/video/$1" frameborder="0" allowfullscreen></iframe>') : e2;
              case "youtube.com":
              case "www.youtube.com":
              case "youtu.be":
              case "www.youtu.be":
                var a = n.search ? l.parseQuery(n.search) : { v: n.pathname.substr(1) };
                return a.v ? '<iframe width="' + t2 + '" height="' + o2 + '" src="' + r + "//www.youtube.com/embed/" + a.v + '" frameborder="0" allowfullscreen></iframe>' : e2;
            }
            return e2;
          };
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true });
          var i = "JoditDataBindKey";
          t.dataBind = function(e2, t2, o2) {
            var n = e2[i];
            if (n || Object.defineProperty(e2, i, { enumerable: (n = {}, false), configurable: true, value: n }), o2 === void 0)
              return n[t2];
            n[t2] = o2;
          };
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.humanSizeToBytes = function(e2) {
            if (/^[0-9.]+$/.test("" + e2))
              return parseFloat(e2);
            var t2 = e2.substr(-2, 2).toUpperCase(), o2 = ["KB", "MB", "GB", "TB"], n = parseFloat(e2.substr(0, e2.length - 2));
            return o2.indexOf(t2) != -1 ? n * Math.pow(1024, 1 + o2.indexOf(t2)) : parseInt(e2, 10);
          };
        }, function(e, n, t) {
          "use strict";
          Object.defineProperty(n, "__esModule", { value: true }), n.inView = function(e2, t2, o) {
            var n2 = e2.getBoundingClientRect(), i = e2, r = n2.top, a = n2.height;
            do {
              if (i && i.parentNode) {
                if (r > (n2 = (i = i.parentNode).getBoundingClientRect()).bottom)
                  return false;
                if (r + a <= n2.top)
                  return false;
              }
            } while (i && i !== t2 && i.parentNode);
            return r <= (o.documentElement && o.documentElement.clientHeight || 0);
          }, n.scrollIntoView = function(e2, t2, o) {
            n.inView(e2, t2, o) || (t2.clientHeight !== t2.scrollHeight && (t2.scrollTop = e2.offsetTop), n.inView(e2, t2, o) || e2.scrollIntoView());
          };
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.val = function(e2, t2, o2) {
            var n = e2.querySelector(t2);
            return n ? (o2 && (n.value = o2), n.value) : "";
          };
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true });
          var n = function() {
            function e2(e3, t2, o2) {
              this.observer = o2, this.oldValue = e3, this.newValue = t2;
            }
            return e2.prototype.undo = function() {
              this.observer.snapshot.restore(this.oldValue);
            }, e2.prototype.redo = function() {
              this.observer.snapshot.restore(this.newValue);
            }, e2;
          }();
          t.Command = n;
        }, function(e, t, o) {
          "use strict";
          var n, i = this && this.__extends || (n = function(e2, t2) {
            return (n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e3, t3) {
              e3.__proto__ = t3;
            } || function(e3, t3) {
              for (var o2 in t3)
                t3.hasOwnProperty(o2) && (e3[o2] = t3[o2]);
            })(e2, t2);
          }, function(e2, t2) {
            function o2() {
              this.constructor = e2;
            }
            n(e2, t2), e2.prototype = t2 === null ? Object.create(t2) : (o2.prototype = t2.prototype, new o2());
          });
          Object.defineProperty(t, "__esModule", { value: true });
          var r = o(7), a = o(0), s = function(n2) {
            function e2(e3, t2) {
              var o2 = n2.call(this, e3) || this;
              return o2.target = t2, o2.container = e3.create.div("jodit_statusbar"), t2.appendChild(o2.container), o2.hide(), o2;
            }
            return i(e2, n2), e2.prototype.hide = function() {
              this.container && (this.container.style.display = "none");
            }, e2.prototype.show = function() {
              this.container && (this.container.style.display = "block");
            }, e2.prototype.append = function(e3, t2) {
              t2 === void 0 && (t2 = false);
              var o2 = this.jodit.create.div("jodit_statusbar_item");
              t2 && o2.classList.add("jodit_statusbar_item-right"), o2.appendChild(e3), this.container.appendChild(o2), this.show(), this.jodit.events.fire("resize");
            }, e2.prototype.destruct = function() {
              a.Dom.safeRemove(this.container);
            }, e2;
          }(r.Component);
          t.StatusBar = s;
        }, function(e, o, t) {
          "use strict";
          Object.defineProperty(o, "__esModule", { value: true }), o.defaultNameSpace = "JoditEventDefaultNamespace";
          var n = function() {
            function e2() {
              this.__store = {};
            }
            return e2.prototype.get = function(e3, t2) {
              if (this.__store[t2] !== void 0)
                return this.__store[t2][e3];
            }, e2.prototype.indexOf = function(e3, t2, o2) {
              var n2 = this.get(e3, t2);
              if (n2) {
                for (var i = 0; i < n2.length; i += 1)
                  if (n2[i].originalCallback === o2)
                    return i;
              }
              return false;
            }, e2.prototype.namespaces = function(e3) {
              e3 === void 0 && (e3 = false);
              var t2 = Object.keys(this.__store);
              return e3 ? t2.filter(function(e4) {
                return e4 !== o.defaultNameSpace;
              }) : t2;
            }, e2.prototype.events = function(e3) {
              return this.__store[e3] ? Object.keys(this.__store[e3]) : [];
            }, e2.prototype.set = function(e3, t2, o2, n2) {
              n2 === void 0 && (n2 = false), this.__store[t2] === void 0 && (this.__store[t2] = {}), this.__store[t2][e3] === void 0 && (this.__store[t2][e3] = []), n2 ? this.__store[t2][e3].unshift(o2) : this.__store[t2][e3].push(o2);
            }, e2;
          }();
          o.EventHandlersStore = n;
        }, function(e, t, o) {
          "use strict";
          var n, i = this && this.__extends || (n = function(e2, t2) {
            return (n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e3, t3) {
              e3.__proto__ = t3;
            } || function(e3, t3) {
              for (var o2 in t3)
                t3.hasOwnProperty(o2) && (e3[o2] = t3[o2]);
            })(e2, t2);
          }, function(e2, t2) {
            function o2() {
              this.constructor = e2;
            }
            n(e2, t2), e2.prototype = t2 === null ? Object.create(t2) : (o2.prototype = t2.prototype, new o2());
          });
          Object.defineProperty(t, "__esModule", { value: true });
          var r = o(7), a = o(0), s = o(61), l = o(12), c = function(o2) {
            function e2(e3) {
              var t2 = o2.call(this, e3) || this;
              return t2.__whoLocked = "", t2.__isFullSize = false, t2.ownerDocument = document, t2.ownerWindow = window, t2.isLocked = function() {
                return t2.__whoLocked !== "";
              }, t2.isLockedNotBy = function(e4) {
                return t2.isLocked() && t2.__whoLocked !== e4;
              }, t2.isFullSize = function() {
                return t2.__isFullSize;
              }, e3 && e3.ownerDocument && (t2.ownerDocument = e3.ownerDocument, t2.ownerWindow = e3.ownerWindow), t2.create = new s.Create(t2.ownerDocument, l.isJoditObject(e3) ? e3.editorDocument : void 0), t2.container = t2.create.div(), t2;
            }
            return i(e2, o2), e2.prototype.destruct = function() {
              a.Dom.safeRemove(this.container);
            }, e2.prototype.lock = function(e3) {
              return e3 === void 0 && (e3 = "any"), !this.isLocked() && (this.__whoLocked = e3, true);
            }, e2.prototype.unlock = function() {
              return !!this.isLocked() && !(this.__whoLocked = "");
            }, e2.prototype.toggleFullSize = function(e3) {
              e3 === void 0 && (e3 = !this.__isFullSize), e3 !== this.__isFullSize && (this.__isFullSize = e3);
            }, e2;
          }(r.Component);
          t.Panel = c;
        }, function(e, t, o) {
          "use strict";
          var n, i = this && this.__extends || (n = function(e2, t2) {
            return (n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e3, t3) {
              e3.__proto__ = t3;
            } || function(e3, t3) {
              for (var o2 in t3)
                t3.hasOwnProperty(o2) && (e3[o2] = t3[o2]);
            })(e2, t2);
          }, function(e2, t2) {
            function o2() {
              this.constructor = e2;
            }
            n(e2, t2), e2.prototype = t2 === null ? Object.create(t2) : (o2.prototype = t2.prototype, new o2());
          });
          Object.defineProperty(t, "__esModule", { value: true });
          var r = function(o2) {
            function e2(e3) {
              var t2 = o2.call(this, e3) || this;
              return t2.container.classList.add("jodit_toolbar_btn-break"), t2;
            }
            return i(e2, o2), e2;
          }(o(25).ToolbarElement);
          t.ToolbarBreak = r;
        }, function(e, t, o) {
          "use strict";
          var n, i = this && this.__extends || (n = function(e2, t2) {
            return (n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e3, t3) {
              e3.__proto__ = t3;
            } || function(e3, t3) {
              for (var o2 in t3)
                t3.hasOwnProperty(o2) && (e3[o2] = t3[o2]);
            })(e2, t2);
          }, function(e2, t2) {
            function o2() {
              this.constructor = e2;
            }
            n(e2, t2), e2.prototype = t2 === null ? Object.create(t2) : (o2.prototype = t2.prototype, new o2());
          }), s = this && this.__assign || function() {
            return (s = Object.assign || function(e2) {
              for (var t2, o2 = 1, n2 = arguments.length; o2 < n2; o2++)
                for (var i2 in t2 = arguments[o2])
                  Object.prototype.hasOwnProperty.call(t2, i2) && (e2[i2] = t2[i2]);
              return e2;
            }).apply(this, arguments);
          };
          Object.defineProperty(t, "__esModule", { value: true });
          var l = o(3), c = o(26), r = o(27), d = o(17), a = function(r2) {
            function e2(e3, t2, o2, n2) {
              n2 === void 0 && (n2 = "jodit_toolbar_list");
              var i2 = r2.call(this, e3, t2, o2, n2) || this;
              return i2.target = t2, i2.current = o2, i2.className = n2, i2.defaultControl = { template: function(e4, t3, o3) {
                return i2.jodit.i18n(o3);
              } }, i2;
            }
            return i(e2, r2), e2.prototype.doClose = function() {
              this.toolbar && this.toolbar.destruct();
            }, e2.prototype.doOpen = function(r3) {
              var a2 = this;
              this.toolbar = d.JoditToolbarCollection.makeCollection(this.jodit);
              var e3 = typeof r3.list == "string" ? r3.list.split(/[\s,]+/) : r3.list;
              l.each(e3, function(e4, t2) {
                var o2, n2 = a2.jodit.options.controls, i2 = function(e5) {
                  return n2 && n2[e5];
                };
                typeof t2 == "string" && i2(t2) ? o2 = new c.ToolbarButton(a2.toolbar, s({ name: "" + t2 }, i2(t2)), a2.current) : typeof e4 == "string" && i2(e4) && typeof t2 == "object" ? o2 = new c.ToolbarButton(a2.toolbar, s({ name: "" + e4 }, i2(e4), t2), a2.current) : (o2 = new c.ToolbarButton(a2.toolbar, { name: "" + e4, exec: r3.exec, command: r3.command, isActive: r3.isActiveChild, isDisable: r3.isDisableChild, mode: r3.mode, args: [r3.args && r3.args[0] || e4, r3.args && r3.args[1] || t2] }, a2.current)).textBox.innerHTML = (r3.template || a2.defaultControl.template)(a2.jodit, "" + e4, "" + t2), a2.toolbar.appendChild(o2);
              }), this.container.appendChild(this.toolbar.container), this.container.style.marginLeft = null, this.toolbar.checkActiveButtons();
            }, e2.prototype.destruct = function() {
              this.toolbar.destruct(), r2.prototype.destruct.call(this);
            }, e2;
          }(r.Popup);
          t.PopupList = a;
        }, function(e, t, o) {
          "use strict";
          var n, i = this && this.__extends || (n = function(e2, t2) {
            return (n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e3, t3) {
              e3.__proto__ = t3;
            } || function(e3, t3) {
              for (var o2 in t3)
                t3.hasOwnProperty(o2) && (e3[o2] = t3[o2]);
            })(e2, t2);
          }, function(e2, t2) {
            function o2() {
              this.constructor = e2;
            }
            n(e2, t2), e2.prototype = t2 === null ? Object.create(t2) : (o2.prototype = t2.prototype, new o2());
          });
          Object.defineProperty(t, "__esModule", { value: true });
          var r = o(19), a = o(0), s = o(4), l = function(o2) {
            function e2(e3) {
              var t2 = o2.call(this, e3.parentToolbar || e3.jodit, "div", "jodit_tooltip") || this;
              return t2.button = e3, t2.timeout = 0, t2.show = function() {
                var e4 = t2.button.jodit.options.showTooltipDelay || 10 * t2.button.jodit.defaultTimeout;
                t2.button.jodit.events.fire("hideTooltip"), t2.timeout = s.setTimeout(function() {
                  t2.button.container.appendChild(t2.container), t2.container.style.marginLeft = -(t2.container.offsetWidth - t2.button.container.offsetWidth) / 2 + "px";
                }, e4);
              }, t2.hide = function() {
                window.clearTimeout(t2.timeout), a.Dom.safeRemove(t2.container);
              }, e3.control.tooltip && (t2.container.innerHTML = e3.jodit.i18n(e3.control.tooltip) + (e3.control.hotkeys ? "<br>" + r.asArray(e3.control.hotkeys).join(" ") : ""), e3.jodit.events.on(e3.anchor, "mouseenter", t2.show).on(e3.anchor, "mouseleave", t2.hide).on("change updateToolbar scroll hidePopup closeAllPopups hideTooltip", t2.hide)), t2;
            }
            return i(e2, o2), e2.prototype.destruct = function() {
              return this.hide(), this.jodit.events && this.jodit.events.off("change updateToolbar scroll hidePopup closeAllPopups hideTooltip", this.hide), o2.prototype.destruct.call(this);
            }, e2;
          }(o(25).ToolbarElement);
          t.ToolbarTooltip = l;
        }, function(e, t, o) {
          "use strict";
          var n, i = this && this.__extends || (n = function(e2, t2) {
            return (n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e3, t3) {
              e3.__proto__ = t3;
            } || function(e3, t3) {
              for (var o2 in t3)
                t3.hasOwnProperty(o2) && (e3[o2] = t3[o2]);
            })(e2, t2);
          }, function(e2, t2) {
            function o2() {
              this.constructor = e2;
            }
            n(e2, t2), e2.prototype = t2 === null ? Object.create(t2) : (o2.prototype = t2.prototype, new o2());
          });
          Object.defineProperty(t, "__esModule", { value: true });
          var r = function(o2) {
            function e2(e3) {
              var t2 = o2.call(this, e3) || this;
              return t2.container.classList.add("jodit_toolbar_btn-separator"), t2;
            }
            return i(e2, o2), e2;
          }(o(25).ToolbarElement);
          t.ToolbarSeparator = r;
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true });
          var n = o(113);
          t.de = n.default;
          var i = o(114);
          t.en = i.default;
          var r = o(115);
          t.fr = r.default;
          var a = o(116);
          t.ru = a.default;
          var s = o(117);
          t.ar = s.default;
          var l = o(118);
          t.zh_cn = l.default;
          var c = o(119);
          t.es = c.default;
          var d = o(120);
          t.nl = d.default;
          var u = o(121);
          t.hu = u.default;
          var f = o(122);
          t.pt_br = f.default;
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.default = { "Type something": "Bitte geben Sie einen Text ein", Advanced: "Fortgeschritten", "About Jodit": "\xDCber Jodit", "Jodit Editor": "Jodit Editor", "Free Non-commercial Version": "Freie Nicht-kommerzielle Version", "GNU General Public License, version 2 or later": "GNU General Public License, Version 2 oder h\xF6her", "Jodit User's Guide": "Das Jodit Benutzerhandbuch", "contains detailed help for using": "beinhaltet ausf\xFChrliche Informationen wie Sie den Editor verwenden k\xF6nnen.", "For information about the license, please go to our website:": "F\xFCr Lizenz-Informationen, besuchen Sie bitte unsere Webseite:", "Buy full version": "Vollversion kaufen", "Copyright \xA9 XDSoft.net - Chupurnov Valeriy. All rights reserved.": "Copyright \xA9 XDSoft.net - Chupurnov Valeriy. Alle Rechte vorbehalten.", Anchor: "Anker", "Open in new tab": "In neuer Registerkarte \xF6ffnen", "Open editor in fullsize": "Editor in voller Gr\xF6\xDFe \xF6ffnen", "Clear Formatting": "Formatierung l\xF6schen", "Fill color or set the text color": "F\xFCllfarbe oder Textfarbe \xE4ndern", Redo: "Wiederholen", Undo: "R\xFCckg\xE4ngig machen", Bold: "Fett", Italic: "Kursiv", "Insert Unordered List": "Ungeordnete Liste einf\xFCgen", "Insert Ordered List": "Sortierte Liste einf\xFCgen", "Align Center": "Mittig ausrichten", "Align Justify": "Blocksatz", "Align Left": "Links ausrichten", "Align Right": "Rechts ausrichten", "Insert Horizontal Line": "Horizontale Linie einf\xFCgen", "Insert Image": "Bild einf\xFCgen", "Insert file": "Datei einf\xFCgen", "Insert youtube/vimeo video": "Youtube/vimeo Video einf\xFCgen", "Insert link": "Link einf\xFCgen", "Font size": "Schriftgr\xF6\xDFe", "Font family": "Schriftfamilie", "Insert format block": "Formatblock einf\xFCgen", Normal: "Normal", "Heading 1": "\xDCberschrift 1", "Heading 2": "\xDCberschrift 2", "Heading 3": "\xDCberschrift 3", "Heading 4": "\xDCberschrift 4", Quote: "Zitat", Code: "Code", Insert: "Einf\xFCgen", "Insert table": "Tabelle einf\xFCgen", "Decrease Indent": "Einzug verkleinern", "Increase Indent": "Einzug vergr\xF6\xDFern", "Select Special Character": "Sonderzeichen ausw\xE4hlen", "Insert Special Character": "Sonderzeichen einf\xFCgen", "Paint format": "Format kopieren", "Change mode": "\xC4nderungsmodus", Margins: "R\xE4nder", top: "Oben", right: "Rechts", bottom: "Unten", left: "Links", Styles: "CSS Stiel", Classes: "CSS Klassen", Align: "Ausrichten", Right: "Rechts", Center: "Zentriert", Left: "Links", "--Not Set--": "Keine", Src: "Pfad", Title: "Titel", Alternative: "Alternativer Text", Link: "Link", "Open link in new tab": "Link in neuem Tab \xF6ffnen", Image: "Bild", file: "Datei", Advansed: "Erweitert", "Image properties": "Bildeigenschaften", Cancel: "Abbrechen", Ok: "OK", "Your code is similar to HTML. Keep as HTML?": "Es scheint als dass Sie HTML-Text einf\xFCgen m\xF6chten", "Paste as HTML": "Als HTML einf\xFCgen?", Keep: "Original speichern", Clean: "S\xE4ubern", "Insert as Text": "Als Text einf\xFCgen", "Word Paste Detected": "InWord formatierter Text erkannt", "The pasted content is coming from a Microsoft Word/Excel document. Do you want to keep the format or clean it up?": "Der Inhalt, den Sie einf\xFCgen, stammt aus einem Microsoft Word / Excel-Dokument. M\xF6chten Sie das Format erhalten oder l\xF6schen?", "Insert only Text": "Nur Text einf\xFCgen", "File Browser": "Dateibrowser", "Error on load list": "Fehler beim Laden der Liste", "Error on load folders": "Fehler beim Laden der Ordner", "Are you sure?": "Sind Sie sicher?", "Enter Directory name": "Geben Sie den Verzeichnisnamen ein", "Create directory": "Verzeichnis erstellen", "type name": "Typname", "Drop image": "Bild hier hinziehen", "Drop file": "Datei l\xF6schen", "or click": "oder hier klicken", "Alternative text": "Alternativtext", Browse: "Ausw\xE4hlen", Upload: "Hochladen", Background: "Hintergrund", Text: "Text", Top: "Oben", Middle: "Mittig", Bottom: "Unten", "Insert column before": "Spalte einf\xFCgen vor", "Insert column after": "Spalte einf\xFCgen nach", "Insert row above": "Zeile einf\xFCgen oberhalb", "Insert row below": "Zeile unterhalb einf\xFCgen", "Delete table": "Tabelle l\xF6schen", "Delete row": "Zeile l\xF6schen", "Delete column": "Spalte l\xF6schen", "Empty cell": "Leere Zelle", Delete: "L\xF6schen", "Strike through": "Durchschlagen", Underline: "Unterstreichen", Break: "Pause", "Search for": "Suche nach", "Replace with": "Ersetzen durch", Replace: "Ersetzen", Edit: "Bearbeiten", "Vertical align": "Vertikale Ausrichtung", "Horizontal align": "Horizontale Ausrichtung", Filter: "filter", "Sort by changed": "Sortieren nach ge\xE4ndert", "Sort by name": "Nach Name sortieren", "Sort by size": "Nach Gr\xF6\xDFe sortiert", "Add folder": "Ordner hinzuf\xFCgen", "Split vertical": "Split vertikal", "Split horizontal": "Split horizontally", Merge: "Verschmelzen", "Add column": "Spalte hinzuf\xFCgen", "Add row": "Zeile hinzuf\xFCgen", Border: "Rand", "Embed code": "Code einbetten", Update: "Aktualisieren", superscript: "hochgestellt", subscript: "Index", "Cut selection": "Auswahl ausschneid", Paste: "Einf\xFCgen", "Choose Content to Paste": "W\xE4hlen Sie Inhalt zum Einf\xFCgen", "Chars: %d": "Zeichen: %d", "Words: %d": "W\xF6rter: %d", All: "W\xE4hlen Sie Alle aus", "Select %s": "Markieren: %s", "Select all": "W\xE4hlen Sie Alle aus", source: "HTML", bold: "Fett gedruckt", italic: "kursiv", brush: "B\xFCrste", link: "Verkn\xFCpfung", undo: "r\xFCckg\xE4ngig machen", redo: "wiederholen", table: "Tabelle", image: "Bild", eraser: "Radiergummi", paragraph: "Absatz", fontsize: "Schriftgr\xF6\xDFe", video: "Video", font: "Schriftart", about: "\xDCber", print: "drucken", symbol: "Symbol", underline: "unterstreichen", strikethrough: "durchgestrichen", indent: "Einzug", outdent: "Aussenseiter", fullsize: "Vollgr\xF6\xDFe", shrink: "schrumpfen", copyformat: "Format kopieren\u0442", hr: "die Linie", ul: "Liste von", ol: "Nummerierte Liste", cut: "Schnitt", selectall: "W\xE4hlen Sie Alle aus", "Open link": "Link \xF6ffnen", "Edit link": "Link bearbeiten", "No follow": "Nofollow-Attribut", Unlink: "Link entfernen", " URL": "URL", Reset: "Wiederherstellen", Save: "Speichern", "Save as ...": "Speichern als", Resize: "\xC4ndern Sie die Gr\xF6\xDFe", Crop: "Gr\xF6\xDFe anpassen", Width: "Breite", Height: "H\xF6he", "Keep Aspect Ratio": "Halten Sie Proportionen", Yes: "Ja", No: "Nein", Remove: "Entfernen", Select: "Markieren", "You can only edit your own images. Download this image on the host?": "Sie k\xF6nnen nur Ihre eigenen Bilder bearbeiten. Laden Sie dieses Bild auf dem Host herunter?", "The image has been successfully uploaded to the host!": "Das Bild wurde erfolgreich auf den Server hochgeladen!null" };
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.default = { "Type something": "Start writing..." };
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.default = { "Type something": "Ecrivez ici", "About Jodit": "A propos de Jodit", "Jodit Editor": "Editeur Jodit", "Free Non-commercial Version": "Version gratuite, non commerciale", "GNU General Public License, version 2 or later": "GNU General Public License, version 2 ou ult\xE9rieure", "Jodit User's Guide": "Guide de l'utilisateur", "contains detailed help for using": "Aide d\xE9taill\xE9e \xE0 l'utilisation", "For information about the license, please go to our website:": "Consulter la licence sur notre site web:", "Buy full version": "Acheter la version compl\xE8te", "Copyright \xA9 XDSoft.net - Chupurnov Valeriy. All rights reserved.": "Copyright \xA9 XDSoft.net - Chupurnov Valeriy. Tous droits r\xE9serv\xE9s.", Anchor: "Ancre", "Open in new tab": "Ouvrir dans un nouvel onglet", "Open editor in fullsize": "Ouvrir l'\xE9diteur en pleine page", "Clear Formatting": "Supprimer le formattage", "Fill color or set the text color": "Modifier la couleur du fond ou du texte", Redo: "Refaire", Undo: "D\xE9faire", Bold: "Gras", Italic: "Italique", "Insert Unordered List": "Liste non ordonn\xE9e", "Insert Ordered List": "Liste ordonn\xE9e", "Align Center": "Centrer", "Align Justify": "Justifier", "Align Left": "Aligner \xE0 gauche ", "Align Right": "Aligner \xE0 droite", "Insert Horizontal Line": "Ins\xE9rer une ligne horizontale", "Insert Image": "Ins\xE9rer une image", "Insert file": "Ins\xE9rer un fichier", "Insert youtube/vimeo video": "Ins\xE9rer une vid\xE9o", "Insert link": "Ins\xE9rer un lien", "Font size": "Taille des caract\xE8res", "Font family": "Famille des caract\xE8res", "Insert format block": "Bloc formatt\xE9", Normal: "Normal", "Heading 1": "Titre 1", "Heading 2": "Titre 2", "Heading 3": "Titre 3", "Heading 4": "Titre 4", Quote: "Citation", Code: "Code", Insert: "Ins\xE9rer", "Insert table": "Ins\xE9rer un tableau", "Decrease Indent": "Diminuer le retrait", "Increase Indent": "Retrait plus", "Select Special Character": "S\xE9lectionnez un caract\xE8re sp\xE9cial", "Insert Special Character": "Ins\xE9rer un caract\xE8re sp\xE9cial", "Paint format": "Cloner le format", "Change mode": "Mode wysiwyg <-> code html", Margins: "Marges", top: "haut", right: "droite", bottom: "Bas", left: "gauche", Styles: "Styles", Classes: "Classes", Align: "Alignement", Right: "Droite", Center: "Centre", Left: "Gauche", "--Not Set--": "--Non disponible--", Src: "Source", Title: "Titre", Alternative: "Alternative", Filter: "Filtre", Link: "Lien", "Open link in new tab": "Ouvrir le lien dans un nouvel onglet", Image: "Image", file: "fichier", Advanced: "Avanc\xE9", "Image properties": "Propri\xE9t\xE9s de l'image", Cancel: "Effacer", Ok: "OK", "Your code is similar to HTML. Keep as HTML?": "Votre texte que vous essayez de coller est similaire au HTML. Collez-le en HTML?", "Paste as HTML": "Coller en HTML?", Keep: "Sauvegarder l'original", Clean: "Nettoyer", "Insert as Text": "Coller en tant que texte", "Word Paste Detected": "C'est peut-\xEAtre un fragment de Word ou Excel", "The pasted content is coming from a Microsoft Word/Excel document. Do you want to keep the format or clean it up?": "Le contenu que vous ins\xE9rez provient d'un document Microsoft Word / Excel. Voulez-vous enregistrer le format ou l'effacer?", "Insert only Text": "Coller le texte seulement", "File Browser": "Explorateur de fichiers", "Error on load list": "Erreur de liste de chargement", "Error on load folders": "Erreur de dossier de chargement", "Are you sure?": "Etes-vous s\xFBrs ?", "Enter Directory name": "Entrer le non de dossier", "Create directory": "Cr\xE9er un dossier", "type name": "type de fichier", "Drop image": "Coller une image", "Drop file": "D\xE9poser un fichier", "or click": "ou cliquer", "Alternative text": "Texte de remplacemement", Browse: "Chercher", Upload: "Charger", Background: "Arri\xE8re-plan", Text: "Texte", Top: "Haut", Middle: "Milieu", Bottom: "Bas", "Insert column before": "Ins\xE9rer une colonne avant", "Insert column after": "Ins\xE9rer une colonne apr\xE8s", "Insert row above": "Ins\xE9rer une ligne en dessus", "Insert row below": "Ins\xE9rer une ligne en dessous", "Delete table": "Supprimer le tableau", "Delete row": "Supprimer la ligne", "Delete column": "Supprimer la colonne", "Empty cell": "Vider la cellule", "Chars: %d": "Symboles: %d", "Words: %d": "Mots: %d", "Strike through": "Frapper \xE0 travers", Underline: "Souligner", superscript: "exposant", subscript: "indice", "Cut selection": "Couper la s\xE9lection", "Select all": "Tout s\xE9lectionner", Break: "Pause", "Search for": "Rechercher", "Replace with": "Remplacer par", Replace: "Remplacer", Paste: "Coller", "Choose Content to Paste": "Choisissez le contenu \xE0 coller", source: "la source", bold: "graisseux", italic: "italique", brush: "verser", link: "lien", undo: "abolir", redo: "pr\xEAt", table: "graphique", image: "Image", eraser: "la gommen", paragraph: "clause", fontsize: "taille de police", video: "Video", font: "police", about: "\xE0 propos de l'\xE9diteur", print: "impression", symbol: "caract\xE8re", underline: "soulign\xE9", strikethrough: "barr\xE9", indent: "indentation", outdent: "indiff\xE9rent", fullsize: "taille r\xE9elle", shrink: "taille conventionnelle", copyformat: "Format de copie", hr: "la ligne", ul: "Liste des", ol: "Liste num\xE9rot\xE9e", cut: "Couper", selectall: "S\xE9lectionner tout", "Open link": "Ouvrir le lien", "Edit link": "Modifier le lien", "No follow": "Attribut Nofollow", Unlink: "Supprimer le lien", " URL": "URL", Reset: "Restaurer", Save: "Sauvegarder", "Save as ...": "Enregistrer sous", Resize: "Changer la taille", Crop: "Taille de garniture", Width: "Largeur", Height: "Hauteur", "Keep Aspect Ratio": "Garder les proportions", Yes: "Oui", No: "Non", Remove: "Supprimer", Select: "Mettre en \xE9vidence", "Select %s": "Mettre en \xE9vidence: %s", Update: "Mettre \xE0 jour", "Vertical align": "Alignement vertical", Merge: "aller", "Add column": "Ajouter une colonne", "Add row": "Ajouter une rang\xE9e", Delete: "Effacer", "Horizontal align": "Alignement horizontal", "Sort by changed": "Trier par modifi\xE9", "Sort by name": "Trier par nom", "Sort by size": "Classer par taille", "Add folder": "Ajouter le dossier", "You can only edit your own images. Download this image on the host?": "Vous ne pouvez \xE9diter que vos propres images. T\xE9l\xE9chargez cette image sur l'h\xF4te?", "The image has been successfully uploaded to the host!": "L'image a \xE9t\xE9 t\xE9l\xE9charg\xE9e avec succ\xE8s sur le serveur!null" };
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.default = { "Type something": "\u041D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u0447\u0442\u043E-\u043B\u0438\u0431\u043E", "About Jodit": "\u041E Jodit", "Jodit Editor": "\u0420\u0435\u0434\u0430\u043A\u0442\u043E\u0440 Jodit", "Free Non-commercial Version": "\u0412\u0435\u0440\u0441\u0438\u044F \u0434\u043B\u044F \u043D\u0435 \u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F", "GNU General Public License, version 2 or later": "\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F \u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u0430\u044F \u043B\u0438\u0446\u0435\u043D\u0437\u0438\u044F GNU (GPL), \u0432\u0435\u0440\u0441\u0438\u044F 2 \u0438\u043B\u0438 \u0432\u044B\u0448\u0435", "Jodit User's Guide": "Jodit \u0420\u0443\u043A\u043E\u0432\u043E\u0434\u0441\u0442\u0432\u043E \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F", "contains detailed help for using": "\u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442 \u0434\u0435\u0442\u0430\u043B\u044C\u043D\u0443\u044E \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u043F\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044E", "For information about the license, please go to our website:": "\u0414\u043B\u044F \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0441\u0432\u0435\u0434\u0435\u043D\u0438\u0439 \u043E \u043B\u0438\u0446\u0435\u043D\u0437\u0438\u0438 , \u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043F\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u043D\u0430 \u043D\u0430\u0448 \u0441\u0430\u0439\u0442:", "Buy full version": "\u041A\u0443\u043F\u0438\u0442\u044C \u043F\u043E\u043B\u043D\u0443\u044E \u0432\u0435\u0440\u0441\u0438\u044E", "Copyright \xA9 XDSoft.net - Chupurnov Valeriy. All rights reserved.": "\u0410\u0432\u0442\u043E\u0440\u0441\u043A\u0438\u0435 \u043F\u0440\u0430\u0432\u0430 \xA9 XDSoft.net - \u0427\u0443\u043F\u0443\u0440\u043D\u043E\u0432 \u0412\u0430\u043B\u0435\u0440\u0438\u0439. \u0412\u0441\u0435 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u044B.", Anchor: "\u0410\u043D\u043A\u043E\u0440", "Open in new tab": "\u041E\u0442\u043A\u0440\u044B\u0432\u0430\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443 \u0432 \u043D\u043E\u0432\u043E\u0439 \u0432\u043A\u043B\u0430\u0434\u043A\u0435", "Open editor in fullsize": "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0440\u0435\u0434\u0430\u043A\u0442\u043E\u0440 \u0432 \u043F\u043E\u043B\u043D\u043E\u043C \u0440\u0430\u0437\u043C\u0435\u0440\u0435", "Clear Formatting": "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u0444\u043E\u0440\u043C\u0430\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435", "Fill color or set the text color": "\u0426\u0432\u0435\u0442 \u0437\u0430\u043B\u0438\u0432\u043A\u0438 \u0438\u043B\u0438 \u0446\u0432\u0435\u0442 \u0442\u0435\u043A\u0441\u0442\u0430", Redo: "\u041F\u043E\u0432\u0442\u043E\u0440", Undo: "\u041E\u0442\u043C\u0435\u043D\u0430", Bold: "\u0416\u0438\u0440\u043D\u044B\u0439", Italic: "\u041D\u0430\u043A\u043B\u043E\u043D\u043D\u044B\u0439", "Insert Unordered List": "\u0412\u0441\u0442\u0430\u0432\u043A\u0430 \u043C\u0430\u0440\u043A\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0433\u043E \u0441\u043F\u0438\u0441\u043A\u0430", "Insert Ordered List": "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043D\u0443\u043C\u0435\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0441\u043F\u0438\u0441\u043E\u043A", "Align Center": "\u0412\u044B\u0440\u043E\u0432\u043D\u044F\u0442\u044C \u043F\u043E \u0446\u0435\u043D\u0442\u0440\u0443", "Align Justify": "\u0412\u044B\u0440\u043E\u0432\u043D\u044F\u0442\u044C \u043F\u043E \u0448\u0438\u0440\u0438\u043D\u0435", "Align Left": "\u0412\u044B\u0440\u043E\u0432\u043D\u044F\u0442\u044C \u043F\u043E \u043B\u0435\u0432\u043E\u043C\u0443 \u043A\u0440\u0430\u044E", "Align Right": "\u0412\u044B\u0440\u043E\u0432\u043D\u044F\u0442\u044C \u043F\u043E \u043F\u0440\u0430\u0432\u043E\u043C\u0443 \u043A\u0440\u0430\u044E", "Insert Horizontal Line": "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0433\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u0443\u044E \u043B\u0438\u043D\u0438\u044E", "Insert Image": "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435", "Insert file": "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0444\u0430\u0439\u043B", "Insert youtube/vimeo video": "\u0412\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0432\u0438\u0434\u0435\u043E", "Insert link": "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443", "Font size": "\u0420\u0430\u0437\u043C\u0435\u0440 \u0448\u0440\u0438\u0444\u0442\u0430", "Font family": "\u0428\u0440\u0438\u0444\u0442", "Insert format block": "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0431\u043B\u043E\u0447\u043D\u044B\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442", Normal: "\u041D\u043E\u0440\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u0442\u0435\u043A\u0441\u0442", "Heading 1": "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A 1", "Heading 2": "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A 2", "Heading 3": "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A 3", "Heading 4": "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A 4", Quote: "\u0426\u0438\u0442\u0430\u0442\u0430", Code: "\u041A\u043E\u0434", Insert: "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044C", "Insert table": "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0442\u0430\u0431\u043B\u0438\u0446\u0443", "Decrease Indent": "\u0423\u043C\u0435\u043D\u044C\u0448\u0438\u0442\u044C \u043E\u0442\u0441\u0442\u0443\u043F", "Increase Indent": "\u0423\u0432\u0435\u043B\u0438\u0447\u0438\u0442\u044C \u043E\u0442\u0441\u0442\u0443\u043F", "Select Special Character": "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0439 \u0441\u0438\u043C\u0432\u043E\u043B", "Insert Special Character": "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0439 \u0441\u0438\u043C\u0432\u043E\u043B", "Paint format": "\u0424\u043E\u0440\u043C\u0430\u0442 \u043A\u0440\u0430\u0441\u043A\u0438", "Change mode": "\u0418\u0441\u0442\u043E\u0447\u043D\u0438\u043A", Margins: "\u041E\u0442\u0441\u0442\u0443\u043F\u044B", top: "\u0441\u0432\u0435\u0440\u0445\u0443", right: "\u0441\u043F\u0440\u0430\u0432\u0430", bottom: "\u0441\u043D\u0438\u0437\u0443", left: "\u0441\u043B\u0435\u0432\u0430", Styles: "\u0421\u0442\u0438\u043B\u0438", Classes: "\u041A\u043B\u0430\u0441\u0441\u044B", Align: "\u0412\u044B\u0440\u0430\u0432\u043D\u0438\u0432\u0430\u043D\u0438\u0435", Right: "\u041F\u043E \u043F\u0440\u0430\u0432\u043E\u043C\u0443 \u043A\u0440\u0430\u044E", Center: "\u041F\u043E \u0446\u0435\u043D\u0442\u0440\u0443", Left: "\u041F\u043E \u043B\u0435\u0432\u043E\u043C\u0443 \u043A\u0440\u0430\u044E", "--Not Set--": "--\u043D\u0435 \u0443\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u0442\u044C--", Src: "src", Title: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A", Alternative: "\u0410\u043B\u044C\u0442\u0435\u0440\u043D\u0430\u0442\u0438\u0432\u043D\u044B\u0439 \u0442\u0435\u043A\u0441\u0442 (alt)", Link: "\u0421\u0441\u044B\u043B\u043A\u0430", "Open link in new tab": "\u041E\u0442\u043A\u0440\u044B\u0432\u0430\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443 \u0432 \u043D\u043E\u0432\u043E\u043C \u043E\u043A\u043D\u0435", Image: "\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435", file: "\u0424\u0430\u0439\u043B", Advanced: "\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u043D\u044B\u0435", "Image properties": "\u0421\u0432\u043E\u0439\u0441\u0442\u0432\u0430 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F", Cancel: "\u041E\u0442\u043C\u0435\u043D\u0430", Ok: "\u041E\u043A", "Your code is similar to HTML. Keep as HTML?": "\u0412\u0430\u0448 \u0442\u0435\u043A\u0441\u0442, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0432\u044B \u043F\u044B\u0442\u0430\u0435\u0442\u0435\u0441\u044C \u0432\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043F\u043E\u0445\u043E\u0436 \u043D\u0430 HTML. \u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0435\u0433\u043E \u043A\u0430\u043A HTML?", "Paste as HTML": "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043A\u0430\u043A HTML?", Keep: "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u043E\u0440\u0438\u0433\u0438\u043D\u0430\u043B", Clean: "\u041F\u043E\u0447\u0438\u0441\u0442\u0438\u0442\u044C", "Insert as Text": "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043A\u0430\u043A \u0442\u0435\u043A\u0441\u0442", "Insert only Text": "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0442\u043E\u043B\u044C\u043A\u043E \u0442\u0435\u043A\u0441\u0442", "Word Paste Detected": "\u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u044D\u0442\u043E \u0444\u0440\u0430\u0433\u043C\u0435\u043D\u0442 Word \u0438\u043B\u0438 Excel", "The pasted content is coming from a Microsoft Word/Excel document. Do you want to keep the format or clean it up?": "\u041A\u043E\u043D\u0442\u0435\u043D\u0442 \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0432\u044B \u0432\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442\u0435 \u043F\u043E\u0441\u0442\u0443\u043F\u0430\u0435\u0442 \u0438\u0437 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430 Microsoft Word / Excel. \u0412\u044B \u0445\u043E\u0442\u0438\u0442\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0444\u043E\u0440\u043C\u0430\u0442 \u0438\u043B\u0438 \u043E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u0435\u0433\u043E?", "File Browser": "\u0411\u0440\u0430\u0443\u0437\u0435\u0440 \u0444\u0430\u0439\u043B\u043E\u0432", "Error on load list": "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0435 \u0441\u043F\u0438\u0441\u043A\u0430 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0439", "Error on load folders": "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0435 \u0441\u043F\u0438\u0441\u043A\u0430 \u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440\u0438\u0439", "Are you sure?": "\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B?", "Enter Directory name": "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440\u0438\u0438", "Create directory": "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440\u0438\u044E", "type name": "\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435", "Drop image": "\u041F\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u0441\u044E\u0434\u0430 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435", "Drop file": "\u041F\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u0441\u044E\u0434\u0430 \u0444\u0430\u0439\u043B", "or click": "\u0438\u043B\u0438 \u043D\u0430\u0436\u043C\u0438\u0442\u0435", "Alternative text": "\u0410\u043B\u044C\u0442\u0435\u0440\u043D\u0430\u0442\u0438\u0432\u043D\u044B\u0439 \u0442\u0435\u043A\u0441\u0442", Browse: "\u0421\u0435\u0440\u0432\u0435\u0440", Upload: "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430", Background: "\u0424\u043E\u043D", Text: "\u0422\u0435\u043A\u0441\u0442", Top: " \u041A \u0432\u0435\u0440\u0445\u0443", Middle: "\u041F\u043E \u0441\u0435\u0440\u0435\u0434\u0438\u043D\u0435", Bottom: "\u041A \u043D\u0438\u0437\u0443", "Insert column before": "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0441\u0442\u043E\u043B\u0431\u0435\u0446 \u0434\u043E", "Insert column after": "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0441\u0442\u043E\u043B\u0431\u0435\u0446 \u043F\u043E\u0441\u043B\u0435", "Insert row above": "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0440\u044F\u0434 \u0432\u044B\u0448\u0435", "Insert row below": "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0440\u044F\u0434 \u043D\u0438\u0436\u0435", "Delete table": "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0442\u0430\u0431\u043B\u0438\u0446\u0443", "Delete row": "\u0423\u0434\u0430\u043B\u044F\u0442\u044C \u0440\u044F\u0434", "Delete column": "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0441\u0442\u043E\u043B\u0431\u0435\u0446", "Empty cell": "\u041E\u0442\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u044F\u0447\u0435\u0439\u043A\u0443", source: "HTML", bold: "\u0436\u0438\u0440\u043D\u044B\u0439", italic: "\u043A\u0443\u0440\u0441\u0438\u0432", brush: "\u0437\u0430\u043B\u0438\u0432\u043A\u0430", link: "\u0441\u0441\u044B\u043B\u043A\u0430", undo: "\u043E\u0442\u043C\u0435\u043D\u0438\u0442\u044C", redo: "\u043F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u044C", table: "\u0442\u0430\u0431\u043B\u0438\u0446\u0430", image: "\u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435", eraser: "\u043E\u0447\u0438\u0441\u0442\u0438\u0442\u044C", paragraph: "\u043F\u0430\u0440\u0430\u0433\u0440\u0430\u0444", fontsize: "\u0440\u0430\u0437\u043C\u0435\u0440 \u0448\u0440\u0438\u0444\u0442\u0430", video: "\u0432\u0438\u0434\u0435\u043E", font: "\u0448\u0440\u0438\u0444\u0442", about: "\u043E \u0440\u0435\u0434\u0430\u043A\u0442\u043E\u0440\u0435", print: "\u043F\u0435\u0447\u0430\u0442\u044C", symbol: "\u0441\u0438\u043C\u0432\u043E\u043B", underline: "\u043F\u043E\u0434\u0447\u0435\u0440\u043A\u043D\u0443\u0442\u044B\u0439", strikethrough: "\u043F\u0435\u0440\u0435\u0447\u0435\u0440\u043A\u043D\u0443\u0442\u044B\u0439", indent: "\u043E\u0442\u0441\u0442\u0443\u043F", outdent: "\u0432\u044B\u0441\u0442\u0443\u043F", fullsize: "\u0432\u043E \u0432\u0435\u0441\u044C \u044D\u043A\u0440\u0430\u043D", shrink: "\u043E\u0431\u044B\u0447\u043D\u044B\u0439 \u0440\u0430\u0437\u043C\u0435\u0440", copyformat: "\u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0444\u043E\u0440\u043C\u0430\u0442", hr: "\u043B\u0438\u043D\u0438\u044F", ul: "\u0421\u043F\u0438\u0441\u043E\u043A", ol: "\u041D\u0443\u043C\u0435\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0441\u043F\u0438\u0441\u043E\u043A", cut: "\u0412\u044B\u0440\u0435\u0437\u0430\u0442\u044C", selectall: "\u0412\u044B\u0434\u0435\u043B\u0438\u0442\u044C \u0432\u0441\u0435", "Embed code": "\u041A\u043E\u0434", "Open link": "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443", "Edit link": "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443", "No follow": "\u0410\u0442\u0440\u0438\u0431\u0443\u0442 nofollow", Unlink: "\u0423\u0431\u0440\u0430\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443", Update: "\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C", " URL": "URL", Edit: "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C", "Horizontal align": "\u0413\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u043E\u0435 \u0432\u044B\u0440\u0430\u0432\u043D\u0438\u0432\u0430\u043D\u0438\u0435", Filter: "\u0424\u0438\u043B\u044C\u0442\u0440", "Sort by changed": "\u041F\u043E \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044E", "Sort by name": "\u041F\u043E \u0438\u043C\u0435\u043D\u0438", "Sort by size": "\u041F\u043E \u0440\u0430\u0437\u043C\u0435\u0440\u0443", "Add folder": "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u0430\u043F\u043A\u0443", Reset: "\u0412\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C", Save: "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C", "Save as ...": "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u043A\u0430\u043A", Resize: "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0440\u0430\u0437\u043C\u0435\u0440", Crop: "\u041E\u0431\u0440\u0435\u0437\u0430\u0442\u044C \u0440\u0430\u0437\u043C\u0435\u0440", Width: "\u0428\u0438\u0440\u0438\u043D\u0430", Height: "\u0412\u044B\u0441\u043E\u0442\u0430", "Keep Aspect Ratio": "\u0421\u043E\u0445\u0440\u0430\u043D\u044F\u0442\u044C \u043F\u0440\u043E\u043F\u043E\u0440\u0446\u0438\u0438", Yes: "\u0414\u0430", No: "\u041D\u0435\u0442", Remove: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C", Select: "\u0412\u044B\u0434\u0435\u043B\u0438\u0442\u044C", "Chars: %d": "\u0421\u0438\u043C\u0432\u043E\u043B\u043E\u0432: %d", "Words: %d": "\u0421\u043B\u043E\u0432: %d", All: "\u0412\u044B\u0434\u0435\u043B\u0438\u0442\u044C \u0432\u0441\u0435", "Select %s": "\u0412\u044B\u0434\u0435\u043B\u0438\u0442\u044C: %s", "Select all": "\u0412\u044B\u0434\u0435\u043B\u0438\u0442\u044C \u0432\u0441\u0435", "Vertical align": "\u0412\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u043E\u0435 \u0432\u044B\u0440\u0430\u0432\u043D\u0438\u0432\u0430\u043D\u0438\u0435", Split: "\u0420\u0430\u0437\u0434\u0435\u043B\u0438\u0442\u044C", "Split vertical": "\u0420\u0430\u0437\u0434\u0435\u043B\u0438\u0442\u044C \u043F\u043E \u0432\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u0438", "Split horizontal": "\u0420\u0430\u0437\u0434\u0435\u043B\u0438\u0442\u044C \u043F\u043E \u0433\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u0438", Merge: "\u041E\u0431\u044A\u0435\u0434\u0435\u043D\u0438\u0442\u044C \u0432 \u043E\u0434\u043D\u0443", "Add column": "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u0442\u043E\u043B\u0431\u0435\u0446", "Add row": "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u0442\u0440\u043E\u043A\u0443", Delete: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C", Border: "\u0420\u0430\u043C\u043A\u0430", "License: %s": "\u041B\u0438\u0446\u0435\u043D\u0437\u0438\u044F: %s", "Strike through": "\u041F\u0435\u0440\u0435\u0447\u0435\u0440\u043A\u043D\u0443\u0442\u044C", Underline: "\u041F\u043E\u0434\u0447\u0435\u0440\u043A\u0438\u0432\u0430\u043D\u0438\u0435", superscript: "\u0432\u0435\u0440\u0445\u043D\u0438\u0439 \u0438\u043D\u0434\u0435\u043A\u0441", subscript: "\u0438\u043D\u0434\u0435\u043A\u0441", "Cut selection": "\u0412\u044B\u0440\u0435\u0437\u0430\u0442\u044C", Break: "\u0420\u0430\u0437\u0434\u0435\u043B\u0438\u0442\u0435\u043B\u044C", "Search for": "\u041D\u0430\u0439\u0442\u0438", "Replace with": "\u0417\u0430\u043C\u0435\u043D\u0438\u0442\u044C \u043D\u0430", Replace: "\u0417\u0430\u043C\u0435\u043D\u0438\u0442\u044C", Paste: "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044C", "Choose Content to Paste": "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u043A\u043E\u043D\u0442\u0435\u043D\u0442 \u0434\u043B\u044F \u0432\u0441\u0442\u0430\u0432\u043A\u0438", "You can only edit your own images. Download this image on the host?": "\u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0442\u043E\u043B\u044C\u043A\u043E \u0441\u0432\u043E\u0438 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F. \u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u044D\u0442\u043E \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u043D\u0430 \u0432\u0430\u0448 \u0441\u0435\u0440\u0432\u0435\u0440?", "The image has been successfully uploaded to the host!": "\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u043E \u043D\u0430 \u0441\u0435\u0440\u0432\u0435\u0440!" };
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.default = { "Type something": "\u0625\u0628\u062F\u0623 \u0641\u064A \u0627\u0644\u0643\u062A\u0627\u0628\u0629...", "About Jodit": "\u062D\u0648\u0644 \u062C\u0648\u062F\u064A\u062A", "Jodit Editor": "\u0645\u062D\u0631\u0631 \u062C\u0648\u062F\u064A\u062A", "Free Non-commercial Version": "\u0627\u0644\u0625\u0635\u062F\u0627\u0631 \u0627\u0644\u063A\u064A\u0631 \u062A\u062C\u0627\u0631\u064A \u0645\u062C\u0627\u0646\u064A", "GNU General Public License, version 2 or later": "\u0631\u062E\u0635\u0629 \u062C\u0646\u0648 \u0627\u0644\u0639\u0645\u0648\u0645\u064A\u0629 \u0627\u0644\u0639\u0627\u0645\u0629 \u060C \u0627\u0644\u0625\u0635\u062F\u0627\u0631 \u0627\u0644\u062B\u0627\u0646\u064A \u0623\u0648 \u0627\u0644\u0623\u062D\u062F\u062B", "Jodit User's Guide": "\u062F\u0644\u064A\u0644 \u0645\u0633\u062A\u062E\u062F\u0645 \u062C\u0648\u062F\u064A\u062A", "contains detailed help for using": "\u064A\u062D\u062A\u0648\u064A \u0639\u0644\u0649 \u0645\u0633\u0627\u0639\u062F\u0629 \u0645\u0641\u0635\u0644\u0629 \u0644\u0644\u0627\u0633\u062A\u062E\u062F\u0627\u0645", "For information about the license, please go to our website:": "\u0644\u0644\u062D\u0635\u0648\u0644 \u0639\u0644\u0649 \u0645\u0639\u0644\u0648\u0645\u0627\u062A \u062D\u0648\u0644 \u0627\u0644\u062A\u0631\u062E\u064A\u0635\u060C \u064A\u0631\u062C\u0649 \u0627\u0644\u0630\u0647\u0627\u0628 \u0644\u0645\u0648\u0642\u0639\u0646\u0627:", "Buy full version": "\u0634\u0631\u0627\u0621 \u0627\u0644\u0646\u0633\u062E\u0629 \u0627\u0644\u0643\u0627\u0645\u0644\u0629", "Copyright \xA9 XDSoft.net - Chupurnov Valeriy. All rights reserved.": "\u062D\u0642\u0648\u0642 \u0627\u0644\u0637\u0628\u0639 \u0648\u0627\u0644\u0646\u0634\u0631 \xA9 XDSoft.net - Chupurnov Valeriy. \u0643\u0644 \u0627\u0644\u062D\u0642\u0648\u0642 \u0645\u062D\u0641\u0648\u0638\u0629.", Anchor: "\u0645\u0650\u0631\u0652\u0633\u0627\u0629", "Open in new tab": "\u0641\u062A\u062D \u0641\u064A \u0646\u0627\u0641\u0630\u0629 \u062C\u062F\u064A\u062F\u0629", "Open editor in fullsize": "\u0641\u062A\u062D \u0627\u0644\u0645\u062D\u0631\u0631 \u0641\u064A \u0627\u0644\u062D\u062C\u0645 \u0627\u0644\u0643\u0627\u0645\u0644", "Clear Formatting": "\u0645\u0633\u062D \u0627\u0644\u062A\u0646\u0633\u064A\u0642", "Fill color or set the text color": "\u0645\u0644\u0621 \u0627\u0644\u0644\u0648\u0646 \u0623\u0648 \u062A\u0639\u064A\u064A\u0646 \u0644\u0648\u0646 \u0627\u0644\u0646\u0635", Redo: "\u0625\u0639\u0627\u062F\u0629", Undo: "\u062A\u0631\u0627\u062C\u0639", Bold: "\u0639\u0631\u064A\u0636", Italic: "\u0645\u0627\u0626\u0644", "Insert Unordered List": "\u0625\u062F\u0631\u0627\u062C \u0642\u0627\u0626\u0645\u0629 \u063A\u064A\u0631 \u0645\u0631\u062A\u0628\u0629", "Insert Ordered List": "\u0625\u062F\u0631\u0627\u062C \u0642\u0627\u0626\u0645\u0629 \u0645\u0631\u062A\u0628\u0629", "Align Center": "\u0645\u062D\u0627\u0630\u0627\u0629 \u0644\u0644\u0648\u0633\u0637", "Align Justify": "\u0645\u062D\u0627\u0630\u0627\u0629 \u0645\u062B\u0628\u062A\u0629", "Align Left": "\u0645\u062D\u0627\u0630\u0627\u0629 \u0644\u0644\u064A\u0633\u0627\u0631", "Align Right": "\u0645\u062D\u0627\u0630\u0627\u0629 \u0644\u0644\u064A\u0645\u064A\u0646", "Insert Horizontal Line": "\u0625\u062F\u0631\u0627\u062C \u062E\u0637 \u0623\u0641\u0642\u064A", "Insert Image": "\u0625\u062F\u0631\u0627\u062C \u0635\u0648\u0631\u0629", "Insert file": "\u0627\u062F\u062E\u0627\u0644 \u0627\u0644\u0645\u0644\u0641", "Insert youtube/vimeo video": "\u0625\u062F\u0631\u0627\u062C \u0641\u064A\u062F\u064A\u0648 \u064A\u0648\u062A\u064A\u0648\u0628/\u0641\u064A\u0645\u064A\u0648 ", "Insert link": "\u0625\u062F\u0631\u0627\u062C \u0631\u0627\u0628\u0637", "Font size": "\u062D\u062C\u0645 \u0627\u0644\u062E\u0637", "Font family": "\u0646\u0648\u0639 \u0627\u0644\u062E\u0637", "Insert format block": "\u0625\u062F\u0631\u0627\u062C \u0643\u062A\u0644\u0629 \u062A\u0646\u0633\u064A\u0642", Normal: "\u0639\u0627\u062F\u064A", "Heading 1": "\u0639\u0646\u0648\u0627\u0646 1", "Heading 2": "\u0639\u0646\u0648\u0627\u0646 2", "Heading 3": "\u0639\u0646\u0648\u0627\u0646 3", "Heading 4": "\u0639\u0646\u0648\u0627\u0646 4", Quote: "\u0625\u0642\u062A\u0628\u0627\u0633", Code: "\u0643\u0648\u062F", Insert: "\u0625\u062F\u0631\u0627\u062C", "Insert table": "\u0625\u062F\u0631\u0627\u062C \u062C\u062F\u0648\u0644", "Decrease Indent": "\u062A\u0642\u0644\u064A\u0644 \u0627\u0644\u0645\u0633\u0627\u0641\u0629 \u0627\u0644\u0628\u0627\u062F\u0626\u0629", "Increase Indent": "\u0632\u064A\u0627\u062F\u0629 \u0627\u0644\u0645\u0633\u0627\u0641\u0629 \u0627\u0644\u0628\u0627\u062F\u0626\u0629", "Select Special Character": "\u062A\u062D\u062F\u064A\u062F \u0623\u062D\u0631\u0641 \u062E\u0627\u0635\u0629", "Insert Special Character": "\u0625\u062F\u0631\u0627\u062C \u062D\u0631\u0641 \u062E\u0627\u0635", "Paint format": "\u062A\u0646\u0633\u064A\u0642 \u0627\u0644\u0631\u0633\u0645", "Change mode": "\u062A\u063A\u064A\u064A\u0631 \u0627\u0644\u0648\u0636\u0639", Margins: "\u0647\u0648\u0627\u0645\u0634", top: "\u0623\u0639\u0644\u0649", right: "\u064A\u0645\u064A\u0646", bottom: "\u0623\u0633\u0641\u0644", left: "\u064A\u0633\u0627\u0631", Styles: "\u0627\u0644\u0623\u0646\u0645\u0627\u0637", Classes: "\u0627\u0644\u0637\u0628\u0642\u0627\u062A", Align: "\u0645\u062D\u0627\u0630\u0627\u0629", Right: "\u0627\u0644\u064A\u0645\u064A\u0646", Center: "\u0627\u0644\u0648\u0633\u0637", Left: "\u0627\u0644\u064A\u0633\u0627\u0631", "--Not Set--": "--\u063A\u064A\u0631 \u0645\u0636\u0628\u0648\u0637--", Src: "Src", Title: "\u0627\u0644\u0639\u0646\u0648\u0627\u0646", Alternative: "\u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0628\u062F\u064A\u0644", Link: "\u0627\u0644\u0631\u0627\u0628\u0637", "Open link in new tab": "\u0627\u0641\u062A\u062D \u0627\u0644\u0631\u0627\u0628\u0637 \u0641\u064A \u0646\u0627\u0641\u0630\u0629 \u062C\u062F\u064A\u062F\u0629", Image: "\u0627\u0644\u0635\u0648\u0631\u0629", file: "\u0645\u0644\u0641", Advanced: "\u0645\u062A\u0642\u062F\u0645", "Image properties": "\u062E\u0635\u0627\u0626\u0635 \u0627\u0644\u0635\u0648\u0631\u0629", Cancel: "\u0625\u0644\u063A\u0627\u0621", Ok: "\u062D\u0633\u0646\u0627", "File Browser": "\u0645\u062A\u0635\u0641\u062D \u0627\u0644\u0645\u0644\u0641\u0627\u062A", "Error on load list": "\u062D\u062F\u062B \u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0642\u0627\u0626\u0645\u0629 ", "Error on load folders": "\u062D\u062F\u062B \u062E\u0637\u0623 \u0641\u064A \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0645\u062C\u0644\u062F\u0627\u062A", "Are you sure?": "\u0647\u0644 \u0623\u0646\u062A \u0648\u0627\u062B\u0642\u061F", "Enter Directory name": "\u0623\u062F\u062E\u0644 \u0627\u0633\u0645 \u0627\u0644\u0645\u062C\u0644\u062F", "Create directory": "\u0625\u0646\u0634\u0627\u0621 \u0645\u062C\u0644\u062F", "type name": "\u0623\u0643\u062A\u0628 \u0625\u0633\u0645", "Drop image": "\u0625\u0633\u0642\u0627\u0637 \u0635\u0648\u0631\u0629", "Drop file": "\u0625\u0633\u0642\u0627\u0637 \u0627\u0644\u0645\u0644\u0641", "or click": "\u0623\u0648 \u0623\u0646\u0642\u0631", "Alternative text": "\u0627\u0644\u0646\u0635 \u0627\u0644\u0628\u062F\u064A\u0644", Upload: "\u0631\u0641\u0639", Browse: "\u062A\u0635\u0641\u062D", Background: "\u0627\u0644\u062E\u0644\u0641\u064A\u0629", Text: "\u0646\u0635", Top: "\u0623\u0639\u0644\u0649", Middle: "\u0627\u0644\u0648\u0633\u0637", Bottom: "\u0627\u0644\u0623\u0633\u0641\u0644", "Insert column before": "\u0625\u062F\u0631\u0627\u062C \u0639\u0645\u0648\u062F \u0642\u0628\u0644", "Insert column after": "\u0625\u062F\u0631\u0627\u062C \u0639\u0645\u0648\u062F \u0628\u0639\u062F", "Insert row above": "\u0625\u062F\u0631\u0627\u062C \u0635\u0641 \u0623\u0639\u0644\u0649", "Insert row below": "\u0625\u062F\u0631\u0627\u062C \u0635\u0641 \u0623\u0633\u0641\u0644", "Delete table": "\u062D\u0630\u0641 \u0627\u0644\u062C\u062F\u0648\u0644", "Delete row": "\u062D\u0630\u0641 \u0627\u0644\u0635\u0641", "Delete column": "\u062D\u0630\u0641 \u0627\u0644\u0639\u0645\u0648\u062F", "Empty cell": "\u062E\u0644\u064A\u0629 \u0641\u0627\u0631\u063A\u0629", "Chars: %d": "%d \u062D\u0631\u0641", "Words: %d": "%d \u0643\u0644\u0627\u0645", "Strike through": "\u0627\u0636\u0631\u0628 \u0645\u0646 \u062E\u0644\u0627\u0644", Underline: "\u0623\u0643\u062F", superscript: "\u062D\u0631\u0641 \u0641\u0648\u0642\u064A", subscript: "\u0645\u062E\u0637\u0648\u0637\u0629", "Cut selection": "\u0642\u0637\u0639 \u0627\u0644\u0627\u062E\u062A\u064A\u0627\u0631", "Select all": "\u0627\u062E\u062A\u0631 \u0627\u0644\u0643\u0644", Break: "\u0627\u0633\u062A\u0631\u0627\u062D\u0629", "Search for": "\u0627\u0644\u0628\u062D\u062B \u0639\u0646", "Replace with": "\u0627\u0633\u062A\u0628\u062F\u0644 \u0628", Replace: "\u064A\u062D\u0644 \u0645\u062D\u0644", Paste: "\u0645\u0639\u062C\u0648\u0646", "Choose Content to Paste": "\u0627\u062E\u062A\u0631 \u0645\u062D\u062A\u0648\u0649 \u0644\u0644\u0635\u0642", source: "\u0645\u0635\u062F\u0631", bold: "\u0628\u0627\u0644\u062E\u0637 \u0627\u0644\u0639\u0631\u064A\u0636", italic: "\u0645\u0627\u0626\u0644", brush: "\u0634\u063A\u0644", link: "\u0635\u0644\u0629", undo: "\u0625\u0644\u063A\u0627\u0621", redo: "\u0643\u0631\u0631", table: "\u0637\u0627\u0648\u0644\u0629", image: "\u0635\u0648\u0631\u0629", eraser: "\u0646\u0638\u064A\u0641", paragraph: "\u0641\u0642\u0631\u0629", fontsize: "\u062D\u062C\u0645 \u0627\u0644\u062E\u0637", video: "\u0641\u064A\u062F\u064A\u0648", font: "\u0627\u0644\u062E\u0637", about: "\u062D\u0648\u0644 \u0627\u0644\u0645\u062D\u0631\u0631", print: "\u0637\u0628\u0627\u0639\u0629", symbol: "\u0631\u0645\u0632", underline: "\u0623\u0643\u062F", strikethrough: "\u0634\u0637\u0628", indent: "\u0627\u0644\u0645\u0633\u0627\u0641\u0629 \u0627\u0644\u0628\u0627\u062F\u0626\u0629", outdent: "\u0646\u062A\u0648\u0621", fullsize: "\u0645\u0644\u0621 \u0627\u0644\u0634\u0627\u0634\u0629", shrink: "\u0627\u0644\u062D\u062C\u0645 \u0627\u0644\u062A\u0642\u0644\u064A\u062F\u064A", copyformat: "\u0646\u0633\u062E \u0627\u0644\u062A\u0646\u0633\u064A\u0642", hr: "\u0627\u0644\u062E\u0637", ul: "\u0642\u0627\u0626\u0645\u0629", ol: "\u0642\u0627\u0626\u0645\u0629 \u0645\u0631\u0642\u0645\u0629", cut: "\u0642\u0637\u0639", selectall: "\u0627\u062E\u062A\u0631 \u0627\u0644\u0643\u0644", "Embed code": "\u0642\u0627\u0646\u0648\u0646", "Open link": "\u0641\u062A\u062D \u0627\u0644\u0631\u0627\u0628\u0637", "Edit link": "\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0631\u0627\u0628\u0637", "No follow": "\u0633\u0645\u0629 Nofollow", Unlink: "\u0625\u0632\u0627\u0644\u0629 \u0627\u0644\u0631\u0627\u0628\u0637", Update: "\u062A\u062D\u062F\u064A\u062B", " URL": "URL", Edit: "\u062A\u062D\u0631\u064A\u0631", "Horizontal align": "\u0645\u062D\u0627\u0630\u0627\u0629 \u0623\u0641\u0642\u064A\u0629", Filter: "\u0641\u0644\u062A\u0631", "Sort by changed": "\u0639\u0646 \u0637\u0631\u064A\u0642 \u0627\u0644\u062A\u063A\u064A\u064A\u0631", "Sort by name": "\u0628\u0627\u0644\u0627\u0633\u0645", "Sort by size": "\u062D\u0633\u0628 \u0627\u0644\u062D\u062C\u0645", "Add folder": "\u0625\u0636\u0627\u0641\u0629 \u0645\u062C\u0644\u062F", Reset: "\u0625\u0639\u0627\u062F\u0629", Save: "\u0627\u062D\u062A\u0641\u0638", "Save as ...": "\u062D\u0641\u0638 \u0628\u0627\u0633\u0645", Resize: "\u062A\u063A\u064A\u064A\u0631 \u0627\u0644\u062D\u062C\u0645", Crop: "\u062D\u062C\u0645 \u0627\u0644\u0642\u0637\u0639", Width: "\u0639\u0631\u0636", Height: "\u0627\u0631\u062A\u0641\u0627\u0639", "Keep Aspect Ratio": "\u062D\u0627\u0641\u0638 \u0639\u0644\u0649 \u0627\u0644\u0646\u0633\u0628", Yes: "\u0623\u0646", No: "\u0644\u0627", Remove: "\u062D\u0630\u0641", Select: "\u062A\u0645\u064A\u0632", "Select %s": "\u062A\u0645\u064A\u0632 %s", "Vertical align": "\u0645\u062D\u0627\u0630\u0627\u0629 \u0639\u0645\u0648\u062F\u064A\u0629", Split: "\u0627\u0646\u0634\u0642\u060C \u0645\u0632\u0642", Merge: "\u0627\u0630\u0647\u0628", "Add column": "\u0623\u0636\u0641 \u0627\u0644\u0639\u0645\u0648\u062F", "Add row": "\u0627\u0636\u0641 \u0633\u0637\u0631", "License: %s": "\u0631\u062E\u0635\u0629 %s", Delete: "\u062D\u0630\u0641", "Split vertical": "\u0627\u0646\u0642\u0633\u0627\u0645 \u0639\u0645\u0648\u062F\u064A", "Split horizontal": "\u062A\u0642\u0633\u064A\u0645 \u0623\u0641\u0642\u064A", Border: "\u0627\u0644\u062D\u062F\u0648\u062F", "Your code is similar to HTML. Keep as HTML?": "\u064A\u0634\u0628\u0647 \u0627\u0644\u0643\u0648\u062F \u0627\u0644\u062E\u0627\u0635 \u0628\u0643 HTML. \u062A\u0628\u0642\u064A \u0643\u0645\u0627 HTML\u061F", "Paste as HTML": "\u0627\u0644\u0635\u0642 \u0643 HTML", Keep: "\u0627\u062D\u062A\u0641\u0638", "Insert as Text": "\u0625\u062F\u0631\u0627\u062C \u0643\u0646\u0635", "Insert only Text": "\u0625\u062F\u0631\u0627\u062C \u0627\u0644\u0646\u0635 \u0641\u0642\u0637", "You can only edit your own images. Download this image on the host?": "\u064A\u0645\u0643\u0646\u0643 \u0641\u0642\u0637 \u062A\u062D\u0631\u064A\u0631 \u0635\u0648\u0631\u0643 \u0627\u0644\u062E\u0627\u0635\u0629. \u062A\u062D\u0645\u064A\u0644 \u0647\u0630\u0647 \u0627\u0644\u0635\u0648\u0631\u0629 \u0639\u0644\u0649 \u0627\u0644\u0645\u0636\u064A\u0641\u061F", "The image has been successfully uploaded to the host!": "\u062A\u0645 \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0635\u0648\u0631\u0629 \u0628\u0646\u062C\u0627\u062D \u0639\u0644\u0649 \u0627\u0644\u062E\u0627\u062F\u0645!" };
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.default = { "Type something": "\u8F93\u5165\u4E00\u4E9B\u5185\u5BB9", Advanced: "\u9AD8\u7EA7", "About Jodit": "\u5173\u4E8EJodit", "Jodit Editor": "Jodit Editor", "Free Non-commercial Version": "Free Non-commercial Version", "GNU General Public License, version 2 or later": "GNU General Public License, version 2 or later", "Jodit User's Guide": "\u5F00\u53D1\u8005\u6307\u5357", "contains detailed help for using": "\u4F7F\u7528\u5E2E\u52A9", "For information about the license, please go to our website:": "\u6709\u5173\u8BB8\u53EF\u8BC1\u7684\u4FE1\u606F\uFF0C\u8BF7\u8BBF\u95EE\u6211\u4EEC\u7684\u7F51\u7AD9\uFF1A", "Buy full version": "\u8D2D\u4E70\u5B8C\u6574\u7248\u672C", "Copyright \xA9 XDSoft.net - Chupurnov Valeriy. All rights reserved.": "Copyright \xA9 XDSoft.net - Chupurnov Valeriy. All rights reserved.", Anchor: "Anchor", "Open in new tab": "\u5728\u65B0\u7A97\u53E3\u6253\u5F00", "Open editor in fullsize": "\u5168\u5C4F\u7F16\u8F91", "Clear Formatting": "\u6E05\u9664\u6837\u5F0F", "Fill color or set the text color": "\u989C\u8272", Redo: "\u91CD\u505A", Undo: "\u64A4\u9500", Bold: "\u7C97\u4F53", Italic: "\u659C\u4F53", "Insert Unordered List": "\u7B26\u53F7\u5217\u8868", "Insert Ordered List": "\u7F16\u53F7", "Align Center": "\u5C45\u4E2D", "Align Justify": "\u5BF9\u9F50\u6587\u672C", "Align Left": "\u5DE6\u5BF9\u9F50", "Align Right": "\u53F3\u5BF9\u9F50", "Insert Horizontal Line": "\u5206\u5272\u7EBF", "Insert Image": "\u56FE\u7247", "Insert file": "\u6587\u4EF6", "Insert youtube/vimeo video": "youtube/vimeo \u89C6\u9891", "Insert link": "\u94FE\u63A5", "Font size": "\u5B57\u53F7", "Font family": "\u5B57\u4F53", "Insert format block": "\u683C\u5F0F\u5757", Normal: "\u6587\u672C", "Heading 1": "\u6807\u98981", "Heading 2": "\u6807\u98982", "Heading 3": "\u6807\u98983", "Heading 4": "\u6807\u98984", Quote: "\u5F15\u7528", Code: "\u4EE3\u7801", Insert: "\u63D2\u5165", "Insert table": "\u8868\u683C", "Decrease Indent": "\u51CF\u5C11\u7F29\u8FDB", "Increase Indent": "\u589E\u52A0\u7F29\u8FDB", "Select Special Character": "\u9009\u62E9\u7279\u6B8A\u7B26\u53F7", "Insert Special Character": "\u7279\u6B8A\u7B26\u53F7", "Paint format": "\u683C\u5F0F\u590D\u5236", "Change mode": "\u6539\u53D8\u6A21\u5F0F", Margins: "\u5916\u8FB9\u8DDD\uFF08Margins\uFF09", top: "top", right: "right", bottom: "bottom", left: "left", Styles: "\u6837\u5F0F", Classes: "Classes", Align: "\u5BF9\u9F50\u65B9\u5F0F", Right: "\u5C45\u53F3", Center: "\u5C45\u4E2D", Left: "\u5C45\u5DE6", "--Not Set--": "\u65E0", Src: "Src", Title: "Title", Alternative: "Alternative", Link: "Link", "Open link in new tab": "\u5728\u65B0\u7A97\u53E3\u6253\u5F00\u94FE\u63A5", Image: "\u56FE\u7247", file: "file", Advansed: "\u9AD8\u7EA7", "Image properties": "\u56FE\u7247\u5C5E\u6027", Cancel: "\u53D6\u6D88", Ok: "\u786E\u5B9A", "Your code is similar to HTML. Keep as HTML?": "\u4F60\u7C98\u8D34\u7684\u6587\u672C\u662F\u4E00\u6BB5html\u4EE3\u7801\uFF0C\u662F\u5426\u4FDD\u7559\u6E90\u683C\u5F0F", "Paste as HTML": "html\u7C98\u8D34", Keep: "\u4FDD\u7559\u6E90\u683C\u5F0F", Clean: "\u5339\u914D\u76EE\u6807\u683C\u5F0F", "Insert as Text": "\u628Ahtml\u4EE3\u7801\u89C6\u4E3A\u666E\u901A\u6587\u672C", "Word Paste Detected": "\u6587\u672C\u7C98\u8D34", "The pasted content is coming from a Microsoft Word/Excel document. Do you want to keep the format or clean it up?": "\u6B63\u5728\u7C98\u8D34 Word/Excel \u7684\u6587\u672C\uFF0C\u662F\u5426\u4FDD\u7559\u6E90\u683C\u5F0F\uFF1F", "Insert only Text": "\u53EA\u4FDD\u7559\u6587\u672C", "File Browser": "\u6587\u4EF6\u7BA1\u7406", "Error on load list": "\u52A0\u8F7Dlist\u9519\u8BEF", "Error on load folders": "\u52A0\u8F7Dfolders\u9519\u8BEF", "Are you sure?": "\u4F60\u786E\u5B9A\u5417\uFF1F", "Enter Directory name": "\u8F93\u5165\u8DEF\u5F84", "Create directory": "\u521B\u5EFA\u8DEF\u5F84", "type name": "type name", "Drop image": "\u62D6\u52A8\u56FE\u7247\u5230\u6B64", "Drop file": "\u62D6\u52A8\u6587\u4EF6\u5230\u6B64", "or click": "\u6216\u70B9\u51FB", "Alternative text": "Alternative text", Browse: "\u6D4F\u89C8", Upload: "\u4E0A\u4F20", Background: "\u80CC\u666F\u8272", Text: "\u5B57\u4F53\u989C\u8272", Top: "\u9876\u90E8", Middle: "\u4E2D\u95F4", Bottom: "\u5E95\u90E8", "Insert column before": "\u5728\u4E4B\u524D\u63D2\u5165\u5217", "Insert column after": "\u5728\u4E4B\u540E\u63D2\u5165\u5217", "Insert row above": "\u5728\u4E4B\u524D\u63D2\u5165\u884C", "Insert row below": "\u5728\u4E4B\u540E\u63D2\u5165\u884C", "Delete table": "\u5220\u9664\u8868\u683C", "Delete row": "\u5220\u9664\u884C", "Delete column": "\u5220\u9664\u5217", "Empty cell": "\u6E05\u9664\u5185\u5BB9", "Chars: %d": "\u5B57\u7B26\u6570: %d", "Words: %d": "\u5355\u8BCD\u6570: %d", "Strike through": "\u5220\u9664\u7EBF", Underline: "\u4E0B\u5212\u7EBF", superscript: "\u4E0A\u6807", subscript: "\u4E0B\u6807", "Cut selection": "\u526A\u5207", "Select all": "\u5168\u9009", Break: "Pause", "Search for": "\u67E5\u627E", "Replace with": "\u66FF\u6362\u4E3A", Replace: "\u66FF\u6362", Paste: "\u7C98\u8D34", "Choose Content to Paste": "\u9009\u62E9\u5185\u5BB9\u5E76\u7C98\u8D34", source: "\u6E90\u7801", bold: "\u7C97\u4F53", italic: "\u659C\u4F53", brush: "\u989C\u8272", link: "\u94FE\u63A5", undo: "\u64A4\u9500", redo: "\u91CD\u505A", table: "\u8868\u683C", image: "\u56FE\u7247", eraser: "\u6A61\u76AE\u64E6", paragraph: "\u6BB5\u843D", fontsize: "\u5B57\u53F7", video: "\u89C6\u9891", font: "\u5B57\u4F53", about: "\u5173\u4E8E", print: "\u6253\u5370", symbol: "\u7B26\u53F7", underline: "\u4E0B\u5212\u7EBF", strikethrough: "\u4E0A\u51FA\u73B0", indent: "\u589E\u52A0\u7F29\u8FDB", outdent: "\u51CF\u5C11\u7F29\u8FDB", fullsize: "\u5168\u5C4F", shrink: "\u6536\u7F29", copyformat: "\u590D\u5236\u683C\u5F0F", hr: "\u5206\u5272\u7EBF", ul: "\u65E0\u5E8F\u5217\u8868", ol: "\u987A\u5E8F\u5217\u8868", cut: "\u526A\u5207", selectall: "\u5168\u9009", "Open link": "\u6253\u5F00\u94FE\u63A5", "Edit link": "\u7F16\u8F91\u94FE\u63A5", "No follow": "No follow", Unlink: "Unlink", " URL": "URL", Reset: "\u91CD\u7F6E", Save: "\u4FDD\u5B58", "Save as ...": "\u4FDD\u5B58\u4E3A", Resize: "\u8C03\u6574\u5927\u5C0F", Crop: "Crop", Width: "\u5BBD", Height: "\u9AD8", "Keep Aspect Ratio": "\u4FDD\u5B58\u957F\u5BBD\u6BD4", Yes: "\u662F", No: "\u4E0D", Remove: "\u79FB\u9664", Select: "\u9009\u62E9", "Select %s": "\u9009\u62E9: %s", Update: "\u66F4\u65B0", "Vertical align": "\u5782\u76F4\u5BF9\u9F50", Merge: "\u5408\u5E76", "Add column": "\u6DFB\u52A0\u5217", "Add row": "\u6DFB\u52A0\u884C", Delete: "\u5220\u9664", "Horizontal align": "\u6C34\u5E73\u5BF9\u9F50", Filter: "\u7B5B\u9009", "Sort by changed": "\u4FEE\u6539\u65F6\u95F4\u6392\u5E8F", "Sort by name": "\u540D\u79F0\u6392\u5E8F", "Sort by size": "\u5927\u5C0F\u6392\u5E8F", "Add folder": "\u65B0\u5EFA\u6587\u4EF6\u5939", "You can only edit your own images. Download this image on the host?": "\u4F60\u53EA\u80FD\u7F16\u8F91\u4F60\u81EA\u5DF1\u7684\u56FE\u7247\u3002Download this image on the host?", "The image has been successfully uploaded to the host!": "\u56FE\u7247\u4E0A\u4F20\u6210\u529F" };
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.default = { "Type something": "Escriba algo...", Advanced: "Avanzado", "About Jodit": "Acerca de Jodit", "Jodit Editor": "Jodit Editor", "Free Non-commercial Version": "Versi\xF3n gratis no comercial", "GNU General Public License, version 2 or later": "GNU General Public License, Versi\xF3n 2 o posterior", "Jodit User's Guide": "Gu\xEDa de usuario Jodit", "contains detailed help for using": "contiene ayuda detallada para el uso.", "For information about the license, please go to our website:": "Para informaci\xF3n sobre la licencia, por favor visite nuestro sitio:", "Buy full version": "Compre la versi\xF3n completa", "Copyright \xA9 XDSoft.net - Chupurnov Valeriy. All rights reserved.": "Copyright \xA9 XDSoft.net - Chupurnov Valeriy. Todos los derechos reservados.", Anchor: "Anclar", "Open in new tab": "Abrir en nueva pesta\xF1a", "Open editor in fullsize": "Abrir editor en pantalla completa", "Clear Formatting": "Limpiar formato", "Fill color or set the text color": "Color de relleno o de letra", Redo: "Rehacer", Undo: "Deshacer", Bold: "Negrita", Italic: "Cursiva", "Insert Unordered List": "Insertar lista no ordenada", "Insert Ordered List": "Insertar lista ordenada", "Align Center": "Alinear Centrado", "Align Justify": "Alinear Justificado", "Align Left": "Alinear Izquierda", "Align Right": "Alinear Derecha", "Insert Horizontal Line": "Insertar l\xEDnea horizontal", "Insert Image": "Insertar imagen", "Insert file": "Insertar archivo", "Insert youtube/vimeo video": "Insertar video de Youtube/vimeo", "Insert link": "Insertar v\xEDnculo", "Font size": "Tama\xF1o de letra", "Font family": "Familia de letra", "Insert format block": "Insertar bloque", Normal: "Normal", "Heading 1": "Encabezado 1", "Heading 2": "Encabezado 2", "Heading 3": "Encabezado 3", "Heading 4": "Encabezado 4", Quote: "Cita", Code: "C\xF3digo", Insert: "Insertar", "Insert table": "Insertar tabla", "Decrease Indent": "Disminuir sangr\xEDa", "Increase Indent": "Aumentar sangr\xEDa", "Select Special Character": "Seleccionar caracter especial", "Insert Special Character": "Insertar caracter especial", "Paint format": "Copiar formato", "Change mode": "Cambiar modo", Margins: "M\xE1rgenes", top: "arriba", right: "derecha", bottom: "abajo", left: "izquierda", Styles: "Estilos CSS", Classes: "Clases CSS", Align: "Alinear", Right: "Derecha", Center: "Centrado", Left: "Izquierda", "--Not Set--": "--No Establecido--", Src: "Fuente", Title: "T\xEDtulo", Alternative: "Texto Alternativo", Link: "V\xEDnculo", "Open link in new tab": "Abrir v\xEDnculo en nueva pesta\xF1a", Image: "Imagen", file: "Archivo", Advansed: "Avanzado", "Image properties": "Propiedades de imagen", Cancel: "Cancelar", Ok: "Aceptar", "Your code is similar to HTML. Keep as HTML?": "El c\xF3digo es similar a HTML. \xBFMantener como HTML?", "Paste as HTML": "Pegar como HTML?", Keep: "Mantener", Clean: "Limpiar", "Insert as Text": "Insertar como texto", "Word Paste Detected": "Pegado desde Word detectado", "The pasted content is coming from a Microsoft Word/Excel document. Do you want to keep the format or clean it up?": "El contenido pegado proviene de un documento de Microsoft Word/Excel. \xBFDesea mantener el formato o limpiarlo?", "Insert only Text": "Insertar solo texto", "File Browser": "Buscar archivo", "Error on load list": "Error al cargar la lista", "Error on load folders": "Error al cargar las carpetas", "Are you sure?": "\xBFEst\xE1 seguro?", "Enter Directory name": "Entre nombre de carpeta", "Create directory": "Crear carpeta", "type name": "Entre el nombre", "Drop image": "Soltar imagen", "Drop file": "Soltar archivo", "or click": "o click", "Alternative text": "Texto alternativo", Browse: "Buscar", Upload: "Subir", Background: "Fondo", Text: "Texto", Top: "Arriba", Middle: "Centro", Bottom: "Abajo", "Insert column before": "Insertar columna antes", "Insert column after": "Interar columna despu\xE9s", "Insert row above": "Insertar fila arriba", "Insert row below": "Insertar fila debajo", "Delete table": "Borrar tabla", "Delete row": "Borrar fila", "Delete column": "Borrar columna", "Empty cell": "Vaciar celda", Delete: "Borrar", "Strike through": "Tachado", Underline: "Subrayado", Break: "Pausa", "Search for": "Buscar", "Replace with": "Reemplazar con", Replace: "Reemplazar", Edit: "Editar", "Vertical align": "Alineaci\xF3n vertical", "Horizontal align": "Alineaci\xF3n horizontal", Filter: "filtrar", "Sort by changed": "Ordenar por fecha modificaci\xF3n", "Sort by name": "Ordenar por nombre", "Sort by size": "Ordenar por tama\xF1o", "Add folder": "Agregar carpeta", "Split vertical": "Dividir vertical", "Split horizontal": "Dividir horizontal", Merge: "Mezclar", "Add column": "Agregar columna", "Add row": "Agregar fila", Border: "Borde", "Embed code": "Incluir c\xF3digo", Update: "Actualizar", superscript: "super\xEDndice", subscript: "sub\xEDndice", "Cut selection": "Cortar selecci\xF3n", Paste: "Pegar", "Choose Content to Paste": "Seleccionar contenido para pegar", "Chars: %d": "Caracteres: %d", "Words: %d": "Palabaras: %d", All: "Todo", "Select %s": "Seleccionar: %s", "Select all": "Seleccionar todo", source: "HTML", bold: "negrita", italic: "cursiva", brush: "Brocha", link: "V\xEDnculo", undo: "deshacer", redo: "rehacer", table: "Tabla", image: "Imagen", eraser: "Borrar", paragraph: "P\xE1rrafo", fontsize: "Tama\xF1o de letra", video: "Video", font: "Letra", about: "Acerca de", print: "Imprimir", symbol: "S\xEDmbolo", underline: "subrayar", strikethrough: "tachar", indent: "sangr\xEDa", outdent: "quitar sangr\xEDa", fullsize: "Tama\xF1o completo", shrink: "encoger", copyformat: "Copiar formato", hr: "l\xEDnea horizontal", ul: "lista sin ordenar", ol: "lista ordenada", cut: "Cortar", selectall: "Seleccionar todo", "Open link": "Abrir v\xEDnculo", "Edit link": "Editar v\xEDnculo", "No follow": "No seguir", Unlink: "Desvincular", " URL": "URL", Reset: "Resetear", Save: "Guardar", "Save as ...": "Guardar como...", Resize: "Redimensionar", Crop: "Recortar", Width: "Ancho", Height: "Alto", "Keep Aspect Ratio": "Mantener relaci\xF3n de aspecto", Yes: "Si", No: "No", Remove: "Quitar", Select: "Seleccionar", "You can only edit your own images. Download this image on the host?": "Solo puedes editar tus propias im\xE1genes. \xBFDescargar esta imagen en el servidor?", "The image has been successfully uploaded to the host!": "\xA1La imagen se ha subido correctamente al servidor!" };
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.default = { "Type something": "Begin met typen..", Advanced: "Geavanceerd", "About Jodit": "Over Jodit", "Jodit Editor": "Jodit Editor", "Free Non-commercial Version": "Gratis niet-commerci\xEBle versie", "GNU General Public License, version 2 or later": "GNU General Public License, versie 2 of hoger", "Jodit User's Guide": "Jodit gebruikershandleiding", "contains detailed help for using": "bevat gedetailleerde informatie voor gebruik.", "For information about the license, please go to our website:": "Voor informatie over de licentie, ga naar onze website:", "Buy full version": "Volledige versie kopen", "Copyright \xA9 XDSoft.net - Chupurnov Valeriy. All rights reserved.": "Copyright \xA9 XDSoft.net - Chupurnov Valeriy. Alle rechten voorbehouden.", Anchor: "Anker", "Open in new tab": "Open in nieuwe tab", "Open editor in fullsize": "Editor in volledig scherm openen", "Clear Formatting": "Opmaak verwijderen", "Fill color or set the text color": "Vulkleur of tekstkleur aanpassen", Redo: "Opnieuw", Undo: "Ongedaan maken", Bold: "Vet", Italic: "Cursief", "Insert Unordered List": "Geordende list invoegen", "Insert Ordered List": "Ongeordende lijst invoegen", "Align Center": "Centreren", "Align Justify": "Uitlijnen op volledige breedte", "Align Left": "Links uitlijnen", "Align Right": "Rechts uitlijnen", "Insert Horizontal Line": "Horizontale lijn invoegen", "Insert Image": "Afbeelding invoegen", "Insert file": "Bestand invoegen", "Insert youtube/vimeo video": "Youtube/Vimeo video invoegen", "Insert link": "Link toevoegen", "Font size": "Tekstgrootte", "Font family": "Lettertype", "Insert format block": "Format blok invoegen", Normal: "Normaal", "Heading 1": "Koptekst 1", "Heading 2": "Koptekst 2", "Heading 3": "Koptekst 3", "Heading 4": "Koptekst 4", Quote: "Citaat", Code: "Code", Insert: "Invoegen", "Insert table": "Tabel invoegen", "Decrease Indent": "Inspringing verkleinen", "Increase Indent": "Inspringing vergroten", "Select Special Character": "Symbool selecteren", "Insert Special Character": "Symbool invoegen", "Paint format": "Opmaak kopieren", "Change mode": "Modus veranderen", Margins: "Marges", top: "Boven", right: "Rechts", bottom: "Onder", left: "Links", Styles: "CSS styles", Classes: "CSS classes", Align: "Uitlijning", Right: "Rechts", Center: "Gecentreerd", Left: "Links", "--Not Set--": "--Leeg--", Src: "Src", Title: "Titel", Alternative: "Alternatieve tekst", Link: "Link", "Open link in new tab": "Link in nieuwe tab openen", Image: "Afbeelding", file: "Bestand", Advansed: "Geavanceerd", "Image properties": "Afbeeldingseigenschappen", Cancel: "Annuleren", Ok: "OK", "Your code is similar to HTML. Keep as HTML?": "Deze code lijkt op HTML. Als HTML behouden?", "Paste as HTML": "Invoegen als HTML", Keep: "Origineel behouden", Clean: "Opschonen", "Insert as Text": "Als tekst invoegen", "Word Paste Detected": "Word-tekst gedetecteerd", "The pasted content is coming from a Microsoft Word/Excel document. Do you want to keep the format or clean it up?": "De geplakte tekst is afkomstig van een Microsoft Word/Excel document. Wil je de opmaak behouden of opschonen?", "Insert only Text": "Als onopgemaakte tekst invoegen", "File Browser": "Bestandsbrowser", "Error on load list": "Fout bij het laden van de lijst", "Error on load folders": "Fout bij het laden van de mappenlijst", "Are you sure?": "Weet je het zeker?", "Enter Directory name": "Geef de map een naam", "Create directory": "Map aanmaken", "type name": "Type naam", "Drop image": "Sleep hier een afbeelding naartoe", "Drop file": "Sleep hier een bestand naartoe", "or click": "of klik", "Alternative text": "Alternatieve tekst", Browse: "Bladeren", Upload: "Uploaden", Background: "Achtergrond", Text: "Tekst", Top: "Boven", Middle: "Midden", Bottom: "Onder", "Insert column before": "Kolom invoegen (voor)", "Insert column after": "Kolom invoegen (na)", "Insert row above": "Rij invoegen (boven)", "Insert row below": "Rij invoegen (onder)", "Delete table": "Tabel verwijderen", "Delete row": "Rij verwijderen", "Delete column": "Kolom verwijderen", "Empty cell": "Cel leegmaken", Delete: "Verwijderen", "Strike through": "Doorstrepen", Underline: "Onderstrepen", Break: "Enter", "Search for": "Zoek naar", "Replace with": "Vervangen door", Replace: "Vervangen", Edit: "Bewerken", "Vertical align": "Verticaal uitlijnen", "Horizontal align": "Horizontaal uitlijnen", Filter: "Filteren", "Sort by changed": "Sorteren op wijzigingsdatum", "Sort by name": "Sorteren op naam", "Sort by size": "Sorteren op grootte", "Add folder": "Map toevoegen", "Split vertical": "Verticaal splitsen", "Split horizontal": "Horizontaal splitsen", Merge: "Samenvoegen", "Add column": "Kolom toevoegen", "Add row": "Rij toevoegen", Border: "Rand", "Embed code": "Embed code", Update: "Updaten", superscript: "Superscript", subscript: "Subscript", "Cut selection": "Selectie knippen", Paste: "Plakken", "Choose Content to Paste": "Kies content om te plakken", "Chars: %d": "Tekens: %d", "Words: %d": "Woorden: %d", All: "Alles", "Select %s": "Selecteer: %s", "Select all": "Selecteer alles", source: "Broncode", bold: "vet", italic: "cursief", brush: "kwast", link: "link", undo: "ongedaan maken", redo: "opnieuw", table: "tabel", image: "afbeelding", eraser: "gum", paragraph: "paragraaf", fontsize: "lettergrootte", video: "video", font: "lettertype", about: "over", print: "afdrukken", symbol: "symbool", underline: "onderstreept", strikethrough: "doorgestreept", indent: "inspringen", outdent: "minder inspringen", fullsize: "volledige grootte", shrink: "kleiner maken", copyformat: "opmaak kopi\xEBren", hr: "horizontale lijn", ul: "lijst", ol: "genummerde lijst", cut: "knip", selectall: "alles selecteren", "Open link": "link openen", "Edit link": "link aanpassen", "No follow": "niet volgen", Unlink: "link verwijderen", " URL": " URL", Reset: "Herstellen", Save: "Opslaan", "Save as ...": "Opslaan als ...", Resize: "Grootte aanpassen", Crop: "Bijknippen", Width: "Breedte", Height: "Hoogte", "Keep Aspect Ratio": "Verhouding behouden", Yes: "Ja", No: "Nee", Remove: "Verwijderen", Select: "Selecteren", "You can only edit your own images. Download this image on the host?": "Je kunt alleen je eigen afbeeldingen aanpassen. Deze afbeelding downloaden?", "The image has been successfully uploaded to the host!": "De afbeelding is succesvol ge\xFCploadet!" };
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.default = { "Type something": "\xCDrjon be valamit", Advanced: "Halad\xF3", "About Jodit": "Joditr\xF3l", "Jodit Editor": "Jodit Editor", "Free Non-commercial Version": "Ingyenes v\xE1ltozat", "GNU General Public License, version 2 or later": "GNU General Public License, Verzi\xF3 2 vagy k\xE9s\u0151bbi", "Jodit User's Guide": "Jodit \xFAtmutat\xF3", "contains detailed help for using": "tov\xE1bbi seg\xEDts\xE9get tartalmaz", "For information about the license, please go to our website:": "Tov\xE1bbi licence inform\xE1ci\xF3k\xE9rt l\xE1togassa meg a weboldalunkat:", "Buy full version": "Teljes verzi\xF3 megv\xE1s\xE1rl\xE1sa", "Copyright \xA9 XDSoft.net - Chupurnov Valeriy. All rights reserved.": "Copyright \xA9 XDSoft.net - Chupurnov Valeriy. Minden jog fenntartva.", Anchor: "Horgony", "Open in new tab": "Megnyit\xE1s \xFAj lapon", "Open editor in fullsize": "Megnyit\xE1s teljes m\xE9retben", "Clear Formatting": "Form\xE1z\xE1s t\xF6rl\xE9se", "Fill color or set the text color": "H\xE1tt\xE9r/sz\xF6veg sz\xEDn", Redo: "\xDAjra", Undo: "Visszavon", Bold: "F\xE9lk\xF6v\xE9r", Italic: "D\u0151lt", "Insert Unordered List": "Pontozott lista", "Insert Ordered List": "Sz\xE1mozott lista", "Align Center": "K\xF6z\xE9pre z\xE1rt", "Align Justify": "Sorkiz\xE1rt", "Align Left": "Balra z\xE1rt", "Align Right": "Jobbra z\xE1rt", "Insert Horizontal Line": "V\xEDzszintes vonal besz\xFAr\xE1sa", "Insert Image": "K\xE9p besz\xFAr\xE1s", "Insert file": "F\xE1jl besz\xFAr\xE1s", "Insert youtube/vimeo video": "Youtube vide\xF3 besz\xFAr\xE1sa", "Insert link": "Link besz\xFAr\xE1s", "Font size": "Bet\u0171m\xE9ret", "Font family": "Bet\u0171t\xEDpus", "Insert format block": "Form\xE1zott blokk besz\xFAr\xE1sa", Normal: "Norm\xE1l", "Heading 1": "Fejl\xE9c 1", "Heading 2": "Fejl\xE9c 2", "Heading 3": "Fejl\xE9c 3", "Heading 4": "Fejl\xE9c 4", Quote: "Id\xE9zet", Code: "K\xF3d", Insert: "Besz\xFAr", "Insert table": "T\xE1bl\xE1zat besz\xFAr\xE1sa", "Decrease Indent": "Beh\xFAz\xE1s cs\xF6kkent\xE9se", "Increase Indent": "Beh\xFAz\xE1s n\xF6vel\xE9se", "Select Special Character": "Speci\xE1lis karakter kiv\xE1laszt\xE1sa", "Insert Special Character": "Speci\xE1lis karakter besz\xFAr\xE1sa", "Paint format": "K\xE9p form\xE1z\xE1sa", "Change mode": "N\xE9zet v\xE1lt\xE1sa", Print: "Nyomtat\xE1s", Margins: "Szeg\xE9lyek", top: "fels\u0151", right: "jobb", bottom: "als\xF3", left: "bal", Styles: "CSS st\xEDlusok", Classes: "CSS oszt\xE1lyok", Align: "Igaz\xEDt\xE1s", Right: "Jobbra", Center: "K\xF6z\xE9pre", Left: "Balra", "--Not Set--": "Nincs", Src: "Forr\xE1s", Title: "C\xEDm", Alternative: "Helyettes\xEDt\u0151 sz\xF6veg", Link: "Link", "Open link in new tab": "Link megnyit\xE1sa \xFAj lapon", Image: "K\xE9p", file: "F\xE1jl", Advansed: "Tov\xE1bbi be\xE1ll\xEDt\xE1s", "Image properties": "K\xE9p tulajdons\xE1gai", Cancel: "M\xE9gsem", Ok: "OK", "Your code is similar to HTML. Keep as HTML?": "A beillesztett sz\xF6veg HTML-nek t\u0171nik. Megtartsuk HTML-k\xE9nt?", "Paste as HTML": "Besz\xFAr\xE1s HTML-k\xE9nt", Keep: "Megtart\xE1s", Clean: "Elvet\xE9s", "Insert as Text": "Besz\xFAr\xE1s sz\xF6vegk\xE9nt", "Word Paste Detected": "Word-b\u0151l m\xE1solt sz\xF6veg", "The pasted content is coming from a Microsoft Word/Excel document. Do you want to keep the format or clean it up?": "A beillesztett tartalom Microsoft Word/Excel dokumentumb\xF3l sz\xE1rmazik. Meg szeretn\xE9 tartani a form\xE1tum\xE1t?", "Insert only Text": "Csak sz\xF6veg beilleszt\xE9se", "File Browser": "F\xE1jl tall\xF3z\xF3", "Error on load list": "Hiba a lista bet\xF6lt\xE9se k\xF6zben", "Error on load folders": "Hiba a mapp\xE1k bet\xF6lt\xE9se k\xF6zben", "Are you sure?": "Biztosan ezt szeretn\xE9?", "Enter Directory name": "\xCDrjon be egy mappanevet", "Create directory": "Mappa l\xE9trehoz\xE1sa", "type name": "\xEDrjon be bevet", "Drop image": "H\xFAzza ide a k\xE9pet", "Drop file": "H\xFAzza ide a f\xE1jlt", "or click": "vagy kattintson", "Alternative text": "Helyettes\xEDt\u0151 sz\xF6veg", Browse: "Tall\xF3z", Upload: "Felt\xF6lt", Background: "H\xE1tt\xE9r", Text: "Sz\xF6veg", Top: "Fent", Middle: "K\xF6z\xE9pen", Bottom: "Lent", "Insert column before": "Oszlop besz\xFAr\xE1s el\xE9", "Insert column after": "Oszlop besz\xFAr\xE1s ut\xE1na", "Insert row above": "Sor besz\xFAr\xE1s f\xF6l\xE9", "Insert row below": "Sor besz\xFAr\xE1s al\xE1", "Delete table": "T\xE1bl\xE1zat t\xF6rl\xE9se", "Delete row": "Sor t\xF6rl\xE9se", "Delete column": "Oszlop t\xF6rl\xE9se", "Empty cell": "Cella tartalm\xE1nak t\xF6rl\xE9se", Delete: "T\xF6rl\xE9s", "Strike through": "\xC1th\xFAzott", Underline: "Al\xE1h\xFAzott", Break: "Sz\xFCnet", "Search for": "Keres\xE9s", "Replace with": "Csere erre", Replace: "Csere", Edit: "Szerkeszt", "Vertical align": "F\xFCgg\u0151leges igaz\xEDt\xE1s", "Horizontal align": "V\xEDzszintes igaz\xEDt\xE1s", Filter: "Sz\u0171r\u0151", "Sort by changed": "Rendez\xE9s m\xF3dos\xEDt\xE1s szerint", "Sort by name": "Rendez\xE9s n\xE9v szerint", "Sort by size": "Rendez\xE9s m\xE9ret szerint", "Add folder": "Mappa hozz\xE1ad\xE1s", "Split vertical": "F\xFCgg\u0151leges feloszt\xE1s", "Split horizontal": "V\xEDzszintes feloszt\xE1s", Merge: "\xD6sszevon\xE1s", "Add column": "Oszlop hozz\xE1ad\xE1s", "Add row": "Sor hozz\xE1ad\xE1s", Border: "Szeg\xE9ly", "Embed code": "Be\xE1gyazott k\xF3d", Update: "Friss\xEDt", superscript: "Fels\u0151 index", subscript: "Als\xF3 index", "Cut selection": "Kiv\xE1g\xE1s", Paste: "Beilleszt\xE9s", "Choose Content to Paste": "V\xE1lasszon tartalmat a beilleszt\xE9shez", Split: "Feloszt\xE1s", "Chars: %d": "Karakterek sz\xE1ma: %d", "Words: %d": "Szavak sz\xE1ma: %d", All: "\xD6sszes", "Select %s": "Kijel\xF6l: %s", "Select all": "\xD6sszes kijel\xF6l\xE9se", source: "HTML", bold: "F\xE9lk\xF6v\xE9r", italic: "D\u0151lt", brush: "Ecset", link: "Link", undo: "Visszavon", redo: "\xDAjra", table: "T\xE1bl\xE1zat", image: "K\xE9p", eraser: "T\xF6rl\xE9s", paragraph: "Paragr\xE1fus", fontsize: "Bet\u0171m\xE9ret", video: "Vide\xF3", font: "Bet\u0171", about: "R\xF3lunk", print: "Nyomtat", symbol: "Szimb\xF3lum", underline: "Al\xE1h\xFAzott", strikethrough: "\xC1th\xFAzott", indent: "Beh\xFAz\xE1s", outdent: "Aussenseiter", fullsize: "Teljes m\xE9ret", shrink: "\xD6sszenyom", copyformat: "Form\xE1tum m\xE1sol\xE1s", hr: "Egyenes vonal", ul: "Lista", ol: "Sz\xE1mozott lista", cut: "Kiv\xE1g", selectall: "\xD6sszes kijel\xF6l\xE9se", "Open link": "Link megnyit\xE1sa", "Edit link": "Link szerkeszt\xE9se", "No follow": "Nincs k\xF6vet\xE9s", Unlink: "Link lev\xE1laszt\xE1sa", " URL": "URL", Reset: "Vissza\xE1ll\xEDt", Save: "Ment\xE9s", "Save as ...": "Ment\xE9s m\xE1sk\xE9nt...", Resize: "\xC1tm\xE9retez\xE9s", Crop: "Kiv\xE1g", Width: "Sz\xE9less\xE9g", Height: "Magass\xE1g", "Keep Aspect Ratio": "K\xE9par\xE1ny megtart\xE1sa", Yes: "Igen", No: "Nem", Remove: "Elt\xE1vol\xEDt", Select: "Kijel\xF6l", "You can only edit your own images. Download this image on the host?": "Csak a saj\xE1t k\xE9peit tudja szerkeszteni. Let\xF6lti ezt a k\xE9pet?", "The image has been successfully uploaded to the host!": "K\xE9p sikeresen felt\xF6ltve!" };
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true }), t.default = { "Type something": "Escreva algo...", Advanced: "Avan\xE7ado", "About Jodit": "Sobre o Jodit", "Jodit Editor": "Editor Jodit", "Free Non-commercial Version": "Vers\xE3o Gratuita n\xE3o-comercial", "GNU General Public License, version 2 or later": "Licen\xE7a P\xFAblica GNU General, Vers\xE3o 2 ou posterior", "Jodit User's Guide": "Guia de usu\xE1rio Jodit", "contains detailed help for using": "cont\xE9m ajuda detalhada para o uso.", "For information about the license, please go to our website:": "Para informa\xE7\xE3o sobre a licen\xE7a, por favor visite nosso site:", "Buy full version": "Compre a vers\xE3o completa", "Copyright \xA9 XDSoft.net - Chupurnov Valeriy. All rights reserved.": "Copyright \xA9 XDSoft.net - Chupurnov Valeriy. Todos os direitos reservados.", Anchor: "Link", "Open in new tab": "Abrir em nova aba", "Open editor in fullsize": "Abrir editor em tela cheia", "Clear Formatting": "Limpar formata\xE7\xE3o", "Fill color or set the text color": "Cor de preenchimento ou cor do texto", Redo: "Refazer", Undo: "Desfazer", Bold: "Negrito", Italic: "It\xE1lico", "Insert Unordered List": "Inserir lista n\xE3o ordenada", "Insert Ordered List": "Inserir lista ordenada", "Align Center": "Centralizar", "Align Justify": "Justificar", "Align Left": "Alinhar \xE0 Esquerda", "Align Right": "Alinhar \xE0 Direita", "Insert Horizontal Line": "Inserir linha horizontal", "Insert Image": "Inserir imagem", "Insert file": "Inserir arquivo", "Insert youtube/vimeo video": "Inserir v\xEDdeo do Youtube/vimeo", "Insert link": "Inserir link", "Font size": "Tamanho da letra", "Font family": "Fonte", "Insert format block": "Inserir bloco", Normal: "Normal", "Heading 1": "Cabe\xE7alho 1", "Heading 2": "Cabe\xE7alho 2", "Heading 3": "Cabe\xE7alho 3", "Heading 4": "Cabe\xE7alho 4", Quote: "Cita\xE7\xE3o", Code: "C\xF3digo", Insert: "Inserir", "Insert table": "Inserir tabela", "Decrease Indent": "Diminuir recuo", "Increase Indent": "Aumentar recuo", "Select Special Character": "Selecionar caractere especial", "Insert Special Character": "Inserir caractere especial", "Paint format": "Copiar formato", "Change mode": "Mudar modo", Margins: "Margens", top: "cima", right: "direta", bottom: "baixo", left: "esquerda", Styles: "Estilos CSS", Classes: "Classes CSS", Align: "Alinhamento", Right: "Direita", Center: "Centro", Left: "Esquerda", "--Not Set--": "--N\xE3o Estabelecido--", Src: "Fonte", Title: "T\xEDtulo", Alternative: "Texto Alternativo", Link: "Link", "Open link in new tab": "Abrir link em nova aba", Image: "Imagem", file: "Arquivo", Advansed: "Avan\xE7ado", "Image properties": "Propriedades da imagem", Cancel: "Cancelar", Ok: "Ok", "Your code is similar to HTML. Keep as HTML?": "Seu c\xF3digo \xE9 simular ao HTML. Manter como HTML?", "Paste as HTML": "Colar como HTML?", Keep: "Manter", Clean: "Limpar", "Insert as Text": "Inserir como Texto", "Word Paste Detected": "Colado do Word Detectado", "The pasted content is coming from a Microsoft Word/Excel document. Do you want to keep the format or clean it up?": "O conte\xFAdo colado veio de um documento Microsoft Word/Excel. Voc\xEA deseja manter o formato ou limpa-lo?", "Insert only Text": "Inserir somente o Texto", "File Browser": "Procurar arquivo", "Error on load list": "Erro ao carregar a lista", "Error on load folders": "Erro ao carregar as pastas", "Are you sure?": "Voc\xEA tem certeza?", "Enter Directory name": "Escreva o nome da pasta", "Create directory": "Criar pasta", "type name": "Escreva seu nome", "Drop image": "Soltar imagem", "Drop file": "Soltar arquivo", "or click": "ou clique", "Alternative text": "Texto alternativo", Browse: "Explorar", Upload: "Upload", Background: "Fundo", Text: "Texto", Top: "Cima", Middle: "Meio", Bottom: "Baixo", "Insert column before": "Inserir coluna antes", "Insert column after": "Inserir coluna depois", "Insert row above": "Inserir linha acima", "Insert row below": "Inserir linha abaixo", "Delete table": "Excluir tabela", "Delete row": "Excluir linha", "Delete column": "Excluir coluna", "Empty cell": "Limpar c\xE9lula", Delete: "Excluir", "Strike through": "Tachado", Underline: "Sublinhar", Break: "Pausa", "Search for": "Procurar por", "Replace with": "Substituir com", Replace: "Substituir", Edit: "Editar", "Vertical align": "Alinhamento vertical", "Horizontal align": "Alinhamento horizontal", Filter: "filtrar", "Sort by changed": "Ordenar por modifica\xE7\xE3o", "Sort by name": "Ordenar por nome", "Sort by size": "Ordenar por tamanho", "Add folder": "Adicionar pasta", "Split vertical": "Dividir vertical", "Split horizontal": "Dividir horizontal", Merge: "Mesclar", "Add column": "Adicionar coluna", "Add row": "Adicionar linha", Border: "Borda", "Embed code": "Incluir c\xF3digo", Update: "Atualizar", superscript: "sobrescrito", subscript: "subscrito", "Cut selection": "Cortar sele\xE7\xE3o", Paste: "Colar", "Choose Content to Paste": "Escolher conte\xFAdo para colar", "Chars: %d": "Caracteres: %d", "Words: %d": "Palavras: %d", All: "Tudo", "Select %s": "Selecionar: %s", "Select all": "Selecionar tudo", source: "HTML", bold: "negrito", italic: "it\xE1lico", brush: "pincel", link: "link", undo: "desfazer", redo: "refazer", table: "tabela", image: "imagem", eraser: "apagar", paragraph: "par\xE1grafo", fontsize: "tamanho da letra", video: "v\xEDdeo", font: "fonte", about: "Sobre de", print: "Imprimir", symbol: "S\xEDmbolo", underline: "sublinhar", strikethrough: "tachado", indent: "recuar", outdent: "diminuir recuo", fullsize: "Tamanho completo", shrink: "diminuir", copyformat: "Copiar formato", hr: "linha horizontal", ul: "lista n\xE3o ordenada", ol: "lista ordenada", cut: "Cortar", selectall: "Selecionar tudo", "Open link": "Abrir link", "Edit link": "Editar link", "No follow": "N\xE3o siga", Unlink: "Remover link", " URL": "URL", Reset: "Resetar", Save: "Salvar", "Save as ...": "Salvar como...", Resize: "Redimensionar", Crop: "Recortar", Width: "Largura", Height: "Altura", "Keep Aspect Ratio": "Manter a propor\xE7\xE3o", Yes: "Sim", No: "N\xE3o", Remove: "Remover", Select: "Selecionar", "You can only edit your own images. Download this image on the host?": "Voc\xEA s\xF3 pode editar suas pr\xF3prias imagens. Baixar essa imagem pro servidor?", "The image has been successfully uploaded to the host!": "A imagem foi enviada com sucesso para o servidor!" };
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true });
          var n = o(35);
          t.Ajax = n.Ajax;
          var i = o(60);
          t.EventsNative = i.EventsNative;
          var r = o(7);
          t.Component = r.Component;
          var a = o(36);
          t.ContextMenu = a.ContextMenu;
          var s = o(124);
          t.Cookie = s.Cookie;
          var l = o(18);
          t.Alert = l.Alert, t.Confirm = l.Confirm, t.Promt = l.Promt, t.Dialog = l.Dialog;
          var c = o(0);
          t.Dom = c.Dom;
          var d = o(6);
          t.Plugin = d.Plugin;
          var u = o(61);
          t.Create = u.Create;
          var f = o(125);
          t.FileBrowser = f.FileBrowser;
          var p = o(3);
          t.Helpers = p;
          var h = o(126);
          t.ImageEditor = h.ImageEditor;
          var v = o(53);
          t.Observer = v.Observer;
          var m = o(56);
          t.Select = m.Select;
          var g = o(33);
          t.Storage = g.Storage;
          var b = o(54);
          t.Snapshot = b.Snapshot;
          var _ = o(28);
          t.Table = _.Table;
          var y = o(5);
          t.ToolbarIcon = y.ToolbarIcon;
          var w = o(17);
          t.JoditToolbarCollection = w.JoditToolbarCollection;
          var C = o(34);
          t.ToolbarCollection = C.ToolbarCollection;
          var j = o(26);
          t.ToolbarButton = j.ToolbarButton;
          var E = o(55);
          t.Stack = E.Stack;
          var T = o(14);
          t.Widget = T.Widget;
          var S = o(127);
          t.Uploader = S.Uploader;
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true });
          var n = function() {
            function e2() {
            }
            return e2.prototype.set = function(e3, t2, o2) {
              var n2, i;
              n2 = o2 ? ((i = new Date()).setTime(i.getTime() + 24 * o2 * 60 * 60 * 1e3), "; expires=" + i.toUTCString()) : "", document.cookie = e3 + "=" + t2 + n2 + "; path=/";
            }, e2.prototype.get = function(e3) {
              var t2, o2, n2 = e3 + "=", i = document.cookie.split(";");
              for (t2 = 0; t2 < i.length; t2 += 1) {
                for (o2 = i[t2]; o2.charAt(0) === " "; )
                  o2 = o2.substring(1, o2.length);
                if (o2.indexOf(n2) == 0)
                  return o2.substring(n2.length, o2.length);
              }
              return null;
            }, e2.prototype.remove = function(e3) {
              this.set(e3, "", -1);
            }, e2;
          }();
          t.Cookie = n;
        }, function(e, t, o) {
          "use strict";
          var n, i = this && this.__extends || (n = function(e2, t2) {
            return (n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e3, t3) {
              e3.__proto__ = t3;
            } || function(e3, t3) {
              for (var o2 in t3)
                t3.hasOwnProperty(o2) && (e3[o2] = t3[o2]);
            })(e2, t2);
          }, function(e2, t2) {
            function o2() {
              this.constructor = e2;
            }
            n(e2, t2), e2.prototype = t2 === null ? Object.create(t2) : (o2.prototype = t2.prototype, new o2());
          }), s = this && this.__assign || function() {
            return (s = Object.assign || function(e2) {
              for (var t2, o2 = 1, n2 = arguments.length; o2 < n2; o2++)
                for (var i2 in t2 = arguments[o2])
                  Object.prototype.hasOwnProperty.call(t2, i2) && (e2[i2] = t2[i2]);
              return e2;
            }).apply(this, arguments);
          };
          Object.defineProperty(t, "__esModule", { value: true });
          var l = o(2), u = o(1), r = o(35), f = o(36), p = o(13), h = o(62), v = o(64), m = o(63), g = o(5), b = o(57), _ = o(33), c = o(24), d = o(22), y = o(9), w = o(46), C = o(51), j = o(16), a = o(38), E = o(15), T = o(3), S = o(58), x = "default", I = "jodit_filebrowser_files_item";
          l.Config.prototype.filebrowser = { filter: function(e2, t2) {
            return t2 = t2.toLowerCase(), typeof e2 == "string" ? e2.toLowerCase().indexOf(t2) != -1 : typeof e2.name == "string" ? e2.name.toLowerCase().indexOf(t2) != -1 : typeof e2.file != "string" || e2.file.toLowerCase().indexOf(t2) != -1;
          }, sortBy: "changed", sort: function(e2, t2, o2) {
            var n2, i2 = function(e3, t3) {
              return e3 < t3 ? -1 : t3 < e3 ? 1 : 0;
            };
            if (typeof e2 == "string")
              return i2(e2.toLowerCase(), t2.toLowerCase());
            if (e2[o2] === void 0 || o2 === "name")
              return typeof e2.name == "string" ? i2(e2.name.toLowerCase(), t2.name.toLowerCase()) : typeof e2.file == "string" ? i2(e2.file.toLowerCase(), t2.file.toLowerCase()) : 0;
            switch (o2) {
              case "changed":
                return n2 = new Date(e2.changed), new Date(t2.changed).getTime() - n2.getTime();
              case "size":
                return T.humanSizeToBytes(e2.size) - T.humanSizeToBytes(t2.size);
            }
            return 0;
          }, editImage: true, preview: true, showPreviewNavigation: true, showSelectButtonInPreview: true, contextMenu: true, howLongShowMsg: 3e3, createNewFolder: true, deleteFolder: true, moveFolder: true, moveFile: true, showFoldersPanel: true, width: 763, height: 400, buttons: ["filebrowser.upload", "filebrowser.remove", "filebrowser.update", "filebrowser.select", "filebrowser.edit", "|", "filebrowser.tiles", "filebrowser.list", "|", "filebrowser.filter", "|", "filebrowser.sort"], removeButtons: [], fullsize: false, showTooltip: true, view: null, isSuccess: function(e2) {
            return e2.success;
          }, getMessage: function(e2) {
            return e2.data.messages !== void 0 && Array.isArray(e2.data.messages) ? e2.data.messages.join(" ") : "";
          }, showFileName: true, showFileSize: true, showFileChangeTime: true, getThumbTemplate: function(e2, t2, o2) {
            var n2, i2 = "", r2 = "", a2 = !!e2.thumbIsAbsolute, s2 = !!e2.fileIsAbsolute, l2 = "" + new Date().getTime();
            e2.file !== void 0 && (r2 = i2 = e2.file), e2.thumb && (r2 = e2.thumb), n2 = '<div class="' + I + '-info">' + (this.options.showFileName ? '<span class="' + I + '-info-filename">' + i2 + "</span>" : "") + (this.options.showFileSize && e2.size ? '<span class="' + I + '-info-filesize">' + e2.size + "</span>" : "") + (this.options.showFileChangeTime && e2.changed ? '<span class="' + I + '-info-filechanged">' + (typeof e2.changed == "number" ? new Date(e2.changed).toLocaleString() : e2.changed) + "</span>" : "") + "</div>";
            var c2 = s2 ? i2 : w.normalizeURL(t2.baseurl + t2.path + i2);
            return '<a data-is-file="' + (e2.isImage ? 0 : 1) + '" draggable="true" class="' + I + '" href="' + c2 + '" data-source="' + o2 + '" data-path="' + d.normalizePath(t2.path ? t2.path + "/" : "/") + '" data-name="' + i2 + '" title="' + i2 + '" data-url="' + c2 + '"><img data-is-file="' + (e2.isImage ? 0 : 1) + '" data-src="' + c2 + '" src="' + (a2 ? r2 : w.normalizeURL(t2.baseurl + t2.path + r2) + "?_tmst=" + l2) + '" alt="' + i2 + '"/>' + (this.options.showFileName || this.options.showFileSize && e2.size || this.options.showFileChangeTime && e2.changed ? n2 : "") + "</a>";
          }, ajax: { url: "", async: true, data: {}, cache: true, contentType: "application/x-www-form-urlencoded; charset=UTF-8", method: "POST", processData: true, dataType: "json", headers: {}, prepareData: function(e2) {
            return e2;
          }, process: function(e2) {
            return e2;
          } }, create: { data: { action: "folderCreate" } }, getLocalFileByUrl: { data: { action: "getLocalFileByUrl" } }, resize: { data: { action: "imageResize" } }, crop: { data: { action: "imageCrop" } }, move: { data: { action: "fileMove" } }, fileRemove: { data: { action: "fileRemove" } }, folderRemove: { data: { action: "folderRemove" } }, items: { data: { action: "files" } }, folder: { data: { action: "folders" } }, permissions: { data: { action: "permissions" } }, uploader: null }, l.Config.prototype.controls.filebrowser = { upload: { icon: "plus", isInput: true, exec: function() {
          }, isDisable: function(e2) {
            return !e2.canI("FileUpload");
          }, getContent: function(e2, t2) {
            var o2 = e2.create.fromHTML('<span class="jodit_upload_button">' + g.ToolbarIcon.getIcon("plus") + '<input type="file" accept="' + (e2.buffer.fileBrowserOnlyImages ? "image/*" : "*") + '" tabindex="-1" dir="auto" multiple=""/></span>'), n2 = o2.querySelector("input");
            return e2.events.on("updateToolbar", function() {
              t2 && t2.isDisable && (t2.isDisable(e2, t2) ? n2.setAttribute("disabled", "disabled") : n2.removeAttribute("disabled"));
            }).fire("bindUploader.filebrowser", o2), o2;
          } }, remove: { icon: "bin", isDisable: function(e2) {
            return e2.getActiveElements().length === 0 || !e2.canI("FileRemove");
          }, exec: function(e2) {
            e2.events.fire("fileRemove.filebrowser");
          } }, update: { exec: function(e2) {
            e2.events.fire("update.filebrowser");
          } }, select: { icon: "check", isDisable: function(e2) {
            return e2.getActiveElements().length === 0;
          }, exec: function(e2) {
            e2.events.fire("select.filebrowser");
          } }, edit: { icon: "pencil", isDisable: function(e2) {
            var t2 = e2.getActiveElements();
            return t2.length !== 1 || t2[0].getAttribute("data-is-file") === "1" || !(e2.canI("ImageCrop") || e2.canI("ImageResize"));
          }, exec: function(e2) {
            e2.events.fire("edit.filebrowser");
          } }, tiles: { icon: "th", isActive: function(e2) {
            return e2.buffer.fileBrowserView === "tiles";
          }, exec: function(e2) {
            e2.events.fire("view.filebrowser", "tiles");
          } }, list: { icon: "th-list", isActive: function(e2) {
            return e2.buffer.fileBrowserView === "list";
          }, exec: function(e2) {
            e2.events.fire("view.filebrowser", "list");
          } }, filter: { isInput: true, getContent: function(e2) {
            var t2 = e2.create.element("input", { class: "jodit_input", placeholder: e2.i18n("Filter") });
            return e2.events.on(t2, "keydown mousedown", a.debounce(function() {
              e2.events.fire("filter.filebrowser", t2.value);
            }, e2.defaultTimeout)), t2;
          } }, sort: { isInput: true, getContent: function(e2) {
            var t2 = e2.create.fromHTML('<select class="jodit_input"><option value="changed">' + e2.i18n("Sort by changed") + '</option><option value="name">' + e2.i18n("Sort by name") + '</option><option value="size">' + e2.i18n("Sort by size") + "</option></select>");
            return e2.events.on("sort.filebrowser", function(e3) {
              t2.value !== e3 && (t2.value = e3);
            }).on(t2, "change", function() {
              e2.events.fire("sort.filebrowser", t2.value);
            }), t2;
          } } };
          var D = function(a2) {
            function e2(e3, t2) {
              var c2 = a2.call(this, e3, t2) || this;
              c2.__currentPermissions = null, c2.view = "tiles", c2.sortBy = "changed", c2.dragger = false, c2.filterWord = "", c2.onlyImages = false, c2.loadItems = function(e4, t3) {
                var n3 = c2;
                return n3.options.items ? (n3.options.items.data.path = e4, n3.options.items.data.source = t3, n3.files.classList.add("active"), n3.files.appendChild(n3.loader.cloneNode(true)), n3.send("items", function(e5) {
                  var t4 = n3.options.items.process;
                  if (t4 || (t4 = c2.options.ajax.process), t4) {
                    var o3 = t4.call(n3, e5);
                    n3.generateItemsBox(o3.data.sources), n3.someSelectedWasChanged();
                  }
                }, function(e5) {
                  h.Alert(e5.message), n3.errorHandler(e5);
                })) : Promise.reject("Set Items api options");
              }, c2.errorHandler = function(e4) {
                c2.status(e4 instanceof Error ? c2.i18n(e4.message) : c2.options.getMessage(e4));
              }, c2.uploadHandler = function() {
                c2.loadItems(c2.currentPath, c2.currentSource);
              }, c2.currentPath = "", c2.currentSource = x, c2.currentBaseUrl = "", c2.storage = new _.Storage(new b.LocalStorageProvider()), c2.getPathByUrl = function(e4, t3, o3) {
                var n3 = "getLocalFileByUrl", i3 = c2;
                return c2.options[n3].data.url = e4, c2.send(n3, function(e5) {
                  i3.options.isSuccess(e5) ? t3(e5.data.path, e5.data.name, e5.data.source) : o3(Error(c2.options.getMessage(e5)));
                }, function(e5) {
                  o3(e5);
                });
              }, c2.createFolder = function(e4, t3, o3) {
                return c2.options.create ? (c2.options.create.data.source = o3, c2.options.create.data.path = t3, c2.options.create.data.name = e4, c2.send("create", function(e5) {
                  c2.options.isSuccess(e5) ? (c2.currentPath = t3, c2.currentSource = o3, c2.loadTree(t3, o3)) : c2.status(c2.options.getMessage(e5));
                }, function(e5) {
                  c2.status(e5.message);
                })) : Promise.reject("Set Create api options");
              }, c2.move = function(e4, t3, o3) {
                return c2.options.move ? (c2.options.move.data.from = e4, c2.options.move.data.path = t3, c2.options.move.data.source = o3, c2.send("move", function(e5) {
                  c2.options.isSuccess(e5) ? c2.loadTree(t3, o3) : c2.status(c2.options.getMessage(e5));
                }, function(e5) {
                  c2.status(e5.message);
                })) : Promise.reject("Set Move api options");
              }, c2.close = function() {
                c2.dialog.close();
              }, c2.open = function(n3, e4) {
                return e4 === void 0 && (e4 = false), c2.onlyImages = e4, c2.buffer.fileBrowserOnlyImages = e4, new Promise(function(e5) {
                  if (!c2.options.items || !c2.options.items.url)
                    throw Error("Need set options.filebrowser.ajax.url");
                  var t3 = 0;
                  c2.events.off(c2.files, "dblclick").on(c2.files, "dblclick", c2.onSelect(n3), "a").on(c2.files, "touchstart", function() {
                    var e6 = new Date().getTime();
                    e6 - t3 < u.EMULATE_DBLCLICK_TIMEOUT && c2.onSelect(n3)(), t3 = e6;
                  }, "a").off("select.filebrowser").on("select.filebrowser", c2.onSelect(n3));
                  var o3 = c2.create.div();
                  c2.toolbar.build(c2.options.buttons, o3), c2.dialog.dialogbox_header.classList.add("jodit_filebrowser_title_box"), c2.dialog.open(c2.browser, o3), c2.events.fire("sort.filebrowser", c2.sortBy), c2.loadTree(c2.currentPath, c2.currentSource).then(e5);
                });
              }, c2.openImageEditor = function(e4, i3, r3, a3, s2, l2) {
                return c2.getInstance("ImageEditor").open(e4, function(e5, t3, o3, n3) {
                  c2.options[t3.action] === void 0 && (c2.options[t3.action] = {}), c2.options[t3.action].data === void 0 && (c2.options[t3.action].data = { action: t3.action }), c2.options[t3.action].data.newname = e5 || i3, c2.options[t3.action].data.box = t3.box, c2.options[t3.action].data.path = r3, c2.options[t3.action].data.name = i3, c2.options[t3.action].data.source = a3, c2.send(t3.action, function(e6) {
                    c2.options.isSuccess(e6) ? c2.loadTree(c2.currentPath, c2.currentSource).then(function() {
                      o3(), s2 && s2();
                    }) : (n3(Error(c2.options.getMessage(e6))), l2 && l2(Error(c2.options.getMessage(e6))));
                  }, function(e6) {
                    n3(e6), l2 && l2(e6);
                  });
                });
              };
              var d2 = c2, o2 = e3 ? e3.ownerDocument : document, n2 = e3 ? e3.editorDocument : o2;
              e3 && (c2.id = e3.id), d2.options = new l.OptionsDefault(j.extend(true, {}, d2.options, l.Config.defaultOptions.filebrowser, t2, e3 ? e3.options.filebrowser : void 0)), d2.dialog = new p.Dialog(e3 || d2, { fullsize: d2.options.fullsize, buttons: ["dialog.fullsize", "dialog.close"] }), d2.loader = d2.create.div("jodit_filebrowser_loader", '<i class="jodit_icon-loader"></i>'), d2.browser = d2.create.fromHTML('<div class="jodit_filebrowser non-selected">' + (d2.options.showFoldersPanel ? '<div class="jodit_filebrowser_tree"></div>' : "") + '<div class="jodit_filebrowser_files"></div><div class="jodit_filebrowser_status"></div></div>'), d2.status_line = d2.browser.querySelector(".jodit_filebrowser_status"), d2.tree = d2.browser.querySelector(".jodit_filebrowser_tree"), d2.files = d2.browser.querySelector(".jodit_filebrowser_files"), d2.events.on("view.filebrowser", function(e4) {
                e4 !== d2.view && (d2.view = e4, d2.buffer.fileBrowserView = e4, d2.files.classList.remove("jodit_filebrowser_files_view-tiles"), d2.files.classList.remove("jodit_filebrowser_files_view-list"), d2.files.classList.add("jodit_filebrowser_files_view-" + d2.view), d2.storage.set("jodit_filebrowser_view", d2.view));
              }).on("sort.filebrowser", function(e4) {
                e4 !== d2.sortBy && (d2.sortBy = e4, c2.storage.set("jodit_filebrowser_sortby", d2.sortBy), d2.loadItems(d2.currentPath, d2.currentSource));
              }).on("filter.filebrowser", function(e4) {
                e4 !== d2.filterWord && (d2.filterWord = e4, d2.loadItems(d2.currentPath, d2.currentSource));
              }).on("fileRemove.filebrowser", function() {
                c2.getActiveElements().length && v.Confirm(d2.i18n("Are you sure?"), "", function(e4) {
                  if (e4) {
                    var t3 = [];
                    d2.getActiveElements().forEach(function(e5) {
                      t3.push(d2.fileRemove(d2.currentPath, e5.getAttribute("data-name") || "", e5.getAttribute("data-source") || ""));
                    }), Promise.all(t3).then(function() {
                      d2.someSelectedWasChanged(), d2.loadTree(d2.currentPath, d2.currentSource);
                    });
                  }
                });
              }).on("edit.filebrowser", function() {
                var e4 = c2.getActiveElements();
                e4.length === 1 && d2.openImageEditor(e4[0].getAttribute("href") || "", e4[0].getAttribute("data-name") || "", e4[0].getAttribute("data-path") || "", e4[0].getAttribute("data-source") || "");
              }).on("update.filebrowser", function() {
                d2.loadTree(c2.currentPath, c2.currentSource);
              }).on(d2.tree, "click", function(e4) {
                var t3 = this.parentNode, o3 = t3.getAttribute("data-path") || "";
                return v.Confirm(d2.i18n("Are you sure?"), "", function(e5) {
                  e5 && d2.folderRemove(o3, t3.getAttribute("data-name") || "", t3.getAttribute("data-source") || "").then(function() {
                    d2.loadTree(d2.currentPath, d2.currentSource);
                  });
                }), e4.stopImmediatePropagation(), false;
              }, "a>i.remove").on(d2.tree, "click", function() {
                var t3 = this;
                this.classList.contains("addfolder") ? m.Promt(d2.i18n("Enter Directory name"), d2.i18n("Create directory"), function(e4) {
                  d2.createFolder(e4, t3.getAttribute("data-path") || "", t3.getAttribute("data-source") || "");
                }, d2.i18n("type name")) : (d2.currentPath = this.getAttribute("data-path") || "", d2.currentSource = this.getAttribute("data-source") || "", d2.loadTree(d2.currentPath, d2.currentSource));
              }, "a").on(c2.tree, "dragstart", function() {
                d2.dragger = this;
              }, "a").on(c2.tree, "drop", function() {
                if (d2.options.moveFolder && d2.dragger) {
                  var e4 = d2.dragger.getAttribute("data-path") || "";
                  if (!d2.options.moveFolder && d2.dragger.classList.contains("jodit_filebrowser_tree_item"))
                    return false;
                  if (d2.dragger.classList.contains(I) && (e4 += d2.dragger.getAttribute("data-name"), !d2.options.moveFile))
                    return false;
                  d2.move(e4, this.getAttribute("data-path") || "", this.getAttribute("data-source") || "");
                }
              }, "a");
              var i2 = new f.ContextMenu(c2.jodit || c2);
              d2.events.on(d2.files, "contextmenu", function(e4) {
                var l2 = this;
                if (d2.options.contextMenu) {
                  var c3 = this;
                  return E.setTimeout(function() {
                    i2.show(e4.pageX, e4.pageY, [!(c3.getAttribute("data-is-file") === "1" || !d2.options.editImage || !d2.canI("ImageResize") && !d2.canI("ImageCrop")) && { icon: "pencil", title: "Edit", exec: function() {
                      d2.openImageEditor(c3.getAttribute("href") || "", c3.getAttribute("data-name") || "", c3.getAttribute("data-path") || "", c3.getAttribute("data-source") || "");
                    } }, !!d2.canI("FileRemove") && { icon: "bin", title: "Delete", exec: function() {
                      d2.fileRemove(d2.currentPath, c3.getAttribute("data-name") || "", c3.getAttribute("data-source") || ""), d2.someSelectedWasChanged(), d2.loadTree(d2.currentPath, d2.currentSource);
                    } }, !!d2.options.preview && { icon: "eye", title: "Preview", exec: function() {
                      var n3 = c3.getAttribute("href") || "", i3 = new p.Dialog(d2), r3 = d2.create.fromHTML('<div class="jodit_filebrowser_preview"><i class="jodit_icon-loader"></i></div>'), a3 = o2.createElement("img"), s2 = function() {
                        var o3 = function() {
                          if (l2.removeEventListener("load", o3), r3.innerHTML = "", d2.options.showPreviewNavigation) {
                            var e5 = d2.create.fromHTML('<a href="javascript:void(0)" class="jodit_filebrowser_preview_navigation jodit_filebrowser_preview_navigation-next">' + g.ToolbarIcon.getIcon("angle-right") + "</a>"), t3 = d2.create.fromHTML('<a href="javascript:void(0)" class="jodit_filebrowser_preview_navigation jodit_filebrowser_preview_navigation-prev">' + g.ToolbarIcon.getIcon("angle-left") + "</a>");
                            c3.previousSibling && c3.previousSibling.classList && c3.previousSibling.classList.contains(I) && r3.appendChild(t3), c3.nextSibling && c3.nextSibling.classList && c3.nextSibling.classList.contains(I) && r3.appendChild(e5), d2.events.on([e5, t3], "click", function() {
                              c3 = this.classList.contains("jodit_filebrowser_preview_navigation-next") ? c3.nextSibling : c3.previousSibling, r3.innerHTML = '<i class="jodit_icon-loader"></i>', n3 = c3.getAttribute("href") || "", a3.setAttribute("src", n3), s2();
                            });
                          }
                          r3.appendChild(a3), i3.setPosition();
                        };
                        a3.addEventListener("load", o3), a3.complete && o3();
                      };
                      s2(), a3.setAttribute("src", n3), i3.setContent(r3), i3.open();
                    } }, { icon: "upload", title: "Download", exec: function() {
                      var e5 = c3.getAttribute("href");
                      e5 && d2.ownerWindow.open(e5);
                    } }], d2.dialog.getZIndex() + 1);
                  }, d2.defaultTimeout), e4.stopPropagation(), e4.preventDefault(), false;
                }
              }, "a").on(d2.files, "click", function(e4) {
                C.ctrlKey(e4) || (c2.getActiveElements().forEach(function(e5) {
                  e5.classList.remove("active");
                }), d2.someSelectedWasChanged());
              }).on(d2.files, "click", function(e4) {
                return C.ctrlKey(e4) || d2.getActiveElements().forEach(function(e5) {
                  e5.classList.remove("active");
                }), this.classList.toggle("active"), d2.someSelectedWasChanged(), e4.stopPropagation(), false;
              }, "a").on(d2.dialog.container, "drop", function(e4) {
                return e4.preventDefault();
              }), c2.dialog.setSize(c2.options.width, c2.options.height), ["getLocalFileByUrl", "crop", "resize", "create", "move", "fileRemove", "folderRemove", "folder", "items", "permissions"].forEach(function(e4) {
                c2.options[e4] !== null && (c2.options[e4] = j.extend(true, {}, c2.options.ajax, c2.options[e4]));
              }), c2.view = c2.storage.get("jodit_filebrowser_view") && c2.options.view === null ? c2.storage.get("jodit_filebrowser_view") === "list" ? "list" : "tiles" : c2.options.view === "list" ? "list" : "tiles", c2.files.classList.add("jodit_filebrowser_files_view-" + c2.view), d2.buffer.fileBrowserView = c2.view, c2.sortBy = ["changed", "name", "size"].indexOf(c2.options.sortBy) != -1 ? c2.options.sortBy : "changed", c2.storage.get("jodit_filebrowser_sortby") && (c2.sortBy = ["changed", "name", "size"].indexOf(c2.storage.get("jodit_filebrowser_sortby") || "") != -1 ? c2.storage.get("jodit_filebrowser_sortby") || "" : "changed"), c2.currentBaseUrl = y.$$("base", n2).length ? y.$$("base", n2)[0].getAttribute("href") || "" : location.protocol + "//" + location.host;
              var r2 = j.extend(true, {}, l.Config.defaultOptions.uploader, d2.options.uploader, e3 && e3.options && e3.options.uploader !== null ? s({}, e3.options.uploader) : {});
              return c2.uploader = c2.getInstance("Uploader", r2), c2.uploader.setPath(c2.currentPath), c2.uploader.setSource(c2.currentSource), c2.uploader.bind(c2.browser, c2.uploadHandler, c2.errorHandler), c2.events.on("bindUploader.filebrowser", function(e4) {
                c2.uploader.bind(e4, c2.uploadHandler, c2.errorHandler);
              }), c2;
            }
            return i(e2, a2), Object.defineProperty(e2.prototype, "defaultTimeout", { get: function() {
              return this.jodit && this.jodit !== this ? this.jodit.defaultTimeout : l.Config.defaultOptions.observer.timeout;
            }, enumerable: true, configurable: true }), e2.prototype.generateFolderTree = function(e3) {
              var i2 = this, r2 = [];
              c.each(e3, function(o2, n2) {
                o2 && o2 !== x && r2.push('<div class="jodit_filebrowser_source_title">' + o2 + "</div>"), n2.folders.forEach(function(e4) {
                  var t2 = '<a draggable="draggable" class="jodit_filebrowser_tree_item" href="javascript:void(0)" data-path="' + d.normalizePath(n2.path + e4) + '/" data-source="' + o2 + '"><span>' + e4 + "</span>";
                  i2.options.deleteFolder && e4 !== ".." && e4 !== "." && (t2 += '<i class="remove" data-path="' + d.normalizePath(n2.path + e4 + "/") + '">&times;</i>'), r2.push(t2 += "</a>");
                }), i2.options.createNewFolder && i2.canI("FolderCreate") && r2.push('<a class="jodit_button addfolder" href="javascript:void(0)" data-path="' + d.normalizePath(n2.path + name) + '/" data-source="' + o2 + '">' + g.ToolbarIcon.getIcon("plus") + " " + i2.i18n("Add folder") + "</a>");
              }), this.tree.innerHTML = r2.join("");
            }, e2.prototype.generateItemsBox = function(e3) {
              var n2 = this, i2 = [];
              c.each(e3, function(t2, o2) {
                t2 && t2 !== x && i2.push('<div class="jodit_filebrowser_source_title">' + t2 + (o2.path ? " - " + o2.path : "") + "</div>"), o2.files && o2.files.length ? (typeof n2.options.sort == "function" && o2.files.sort(function(e4, t3) {
                  return n2.options.sort(e4, t3, n2.sortBy);
                }), o2.files.forEach(function(e4) {
                  (n2.options.filter === void 0 || n2.options.filter(e4, n2.filterWord)) && (n2.onlyImages && e4.isImage !== void 0 && !e4.isImage || i2.push(n2.options.getThumbTemplate.call(n2, e4, o2, "" + t2)));
                })) : i2.push("<div>" + n2.i18n("There are no files") + "</div>");
              }), this.files.innerHTML = i2.join("");
            }, e2.prototype.someSelectedWasChanged = function() {
              this.events.fire("changeSelection");
            }, e2.prototype.send = function(e3, t2, o2) {
              var n2 = j.extend(true, {}, this.options.ajax, this.options[e3] !== void 0 ? this.options[e3] : this.options.ajax);
              return n2.prepareData && (n2.data = n2.prepareData.call(this, n2.data)), new r.Ajax(this.jodit || this, n2).send().then(t2).catch(o2);
            }, e2.prototype.loadPermissions = function(e3, t2) {
              var n2 = this, i2 = this;
              return i2.options.permissions ? (i2.options.permissions.data.path = e3, i2.options.permissions.data.source = t2, i2.options.permissions.url ? i2.send("permissions", function(e4) {
                var t3 = i2.options.permissions.process;
                if (t3 || (t3 = n2.options.ajax.process), t3) {
                  var o2 = t3.call(i2, e4);
                  o2.data.permissions && (n2.__currentPermissions = o2.data.permissions);
                }
              }, function(e4) {
                h.Alert(e4.message), i2.errorHandler(e4);
              }) : Promise.resolve()) : Promise.resolve();
            }, e2.prototype.loadTree = function(t2, o2) {
              var i2 = this;
              return t2 = d.normalizeRelativePath(t2), this.loadPermissions(t2, o2).then(function() {
                var n2 = i2;
                if (!n2.options.folder)
                  return Promise.reject("Set Folder Api options");
                n2.options.folder.data.path = t2, n2.options.folder.data.source = o2, n2.uploader && (n2.uploader.setPath(t2), n2.uploader.setSource(o2));
                var e3 = [];
                return n2.options.showFoldersPanel && (n2.options.folder.url ? (n2.tree.classList.add("active"), n2.tree.innerHTML = "", n2.tree.appendChild(n2.loader.cloneNode(true)), e3.push(i2.send("folder", function(e4) {
                  var t3 = n2.options.folder.process;
                  if (t3 || (t3 = i2.options.ajax.process), t3) {
                    var o3 = t3.call(n2, e4);
                    n2.generateFolderTree(o3.data.sources);
                  }
                }, function() {
                  n2.errorHandler(Error(n2.jodit.i18n("Error on load folders")));
                }))) : n2.tree.classList.remove("active")), e3.push(i2.loadItems(t2, o2)), Promise.all(e3);
              });
            }, e2.prototype.onSelect = function(t2) {
              var n2 = this;
              return function() {
                var e3 = n2.getActiveElements();
                if (e3.length) {
                  var o2 = [];
                  e3.forEach(function(e4) {
                    var t3 = e4.getAttribute("data-url");
                    t3 && o2.push(t3);
                  }), n2.close(), typeof t2 == "function" && t2({ baseurl: "", files: o2 });
                }
                return false;
              };
            }, e2.prototype.canI = function(e3) {
              return this.__currentPermissions === null || this.__currentPermissions["allow" + e3] === void 0 || this.__currentPermissions["allow" + e3];
            }, e2.prototype.isOpened = function() {
              return this.dialog.isOpened() && this.browser.style.display !== "none";
            }, e2.prototype.status = function(e3, t2) {
              var o2 = this;
              clearTimeout(this.statustimer), this.status_line.classList.remove("success"), this.status_line.classList.add("active"), this.status_line.innerHTML = e3, t2 && this.status_line.classList.add("success"), this.statustimer = E.setTimeout(function() {
                o2.status_line.classList.remove("active");
              }, this.options.howLongShowMsg);
            }, e2.prototype.getActiveElements = function() {
              return y.$$(":scope>a.active", this.files);
            }, e2.prototype.fileRemove = function(e3, t2, o2) {
              var n2 = this;
              return this.options.fileRemove ? (this.options.fileRemove.data.path = e3, this.options.fileRemove.data.name = t2, this.options.fileRemove.data.source = o2, this.send("fileRemove", function(e4) {
                n2.options.remove && n2.options.remove.process && (e4 = n2.options.remove.process.call(n2, e4)), n2.options.isSuccess(e4) ? (n2.someSelectedWasChanged(), n2.status(n2.options.getMessage(e4), true)) : n2.status(n2.options.getMessage(e4));
              }, function(e4) {
                n2.status(e4.message);
              })) : Promise.reject("Set fileRemove api options");
            }, e2.prototype.folderRemove = function(e3, t2, o2) {
              var n2 = this;
              return this.options.folderRemove ? (this.options.folderRemove.data.path = e3, this.options.folderRemove.data.name = t2, this.options.folderRemove.data.source = o2, this.send("folderRemove", function(e4) {
                n2.options.remove && n2.options.remove.process && (e4 = n2.options.remove.process.call(n2, e4)), n2.options.isSuccess(e4) ? (n2.someSelectedWasChanged(), n2.status(n2.options.getMessage(e4), true)) : n2.status(n2.options.getMessage(e4));
              }, function(e4) {
                n2.status(e4.message);
              })) : Promise.reject("Set folderRemove api options");
            }, e2;
          }(S.ViewWithToolbar);
          t.FileBrowser = D;
        }, function(e, t, o) {
          "use strict";
          var n, i = this && this.__extends || (n = function(e2, t2) {
            return (n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e3, t3) {
              e3.__proto__ = t3;
            } || function(e3, t3) {
              for (var o2 in t3)
                t3.hasOwnProperty(o2) && (e3[o2] = t3[o2]);
            })(e2, t2);
          }, function(e2, t2) {
            function o2() {
              this.constructor = e2;
            }
            n(e2, t2), e2.prototype = t2 === null ? Object.create(t2) : (o2.prototype = t2.prototype, new o2());
          });
          Object.defineProperty(t, "__esModule", { value: true });
          var a = o(2), r = o(7), s = o(18), l = o(3), c = o(5), d = o(0);
          a.Config.prototype.imageeditor = { min_width: 20, min_height: 20, closeAfterSave: false, width: "85%", height: "85%", crop: true, resize: true, resizeUseRatio: true, resizeMinWidth: 20, resizeMinHeight: 20, cropUseRatio: true, cropDefaultWidth: "70%", cropDefaultHeight: "70%" };
          var u = function(t2) {
            function e2(e3) {
              var r2 = t2.call(this, e3) || this;
              return r2.resizeUseRatio = true, r2.cropUseRatio = true, r2.clicked = false, r2.activeTab = "resize", r2.cropBox = { x: 0, y: 0, w: 0, h: 0 }, r2.resizeBox = { w: 0, h: 0 }, r2.calcValueByPercent = function(e4, t3) {
                var o2, n2 = "" + t3, i2 = parseFloat("" + e4);
                return (o2 = /^[\-+]?[0-9]+(px)?$/.exec(n2)) ? parseInt(n2, 10) : (o2 = /^([\-+]?[0-9.]+)%$/.exec(n2)) ? Math.round(i2 * (parseFloat(o2[1]) / 100)) : i2 || 0;
              }, r2.calcCropBox = function() {
                var e4, t3 = 0.8 * r2.crop_box.parentNode.offsetWidth, o2 = 0.8 * r2.crop_box.parentNode.offsetHeight, n2 = t3;
                e4 = r2.naturalWidth < t3 && r2.naturalHeight < o2 ? (n2 = r2.naturalWidth, r2.naturalHeight) : t3 / o2 < r2.ratio ? r2.naturalHeight * ((n2 = t3) / r2.naturalWidth) : (n2 = r2.naturalWidth * (o2 / r2.naturalHeight), o2), l.css(r2.crop_box, { width: n2, height: e4 });
              }, r2.showCrop = function() {
                r2.cropImage && (r2.calcCropBox(), r2.new_w = r2.calcValueByPercent(r2.cropImage.offsetWidth || r2.image.offsetWidth, r2.options.cropDefaultWidth), r2.new_h = r2.cropUseRatio ? r2.new_w / r2.ratio : r2.calcValueByPercent(r2.cropImage.offsetHeight || r2.image.offsetHeight, r2.options.cropDefaultHeight), l.css(r2.cropHandler, { backgroundImage: "url(" + r2.cropImage.getAttribute("src") + ")", width: r2.new_w, height: r2.new_h, left: (r2.cropImage.offsetWidth || r2.image.offsetWidth) / 2 - r2.new_w / 2, top: (r2.cropImage.offsetHeight || r2.image.offsetHeight) / 2 - r2.new_h / 2 }), r2.jodit.events.fire(r2.cropHandler, "updatesize"));
              }, r2.updateCropBox = function() {
                if (r2.cropImage) {
                  var e4 = r2.cropImage.offsetWidth / r2.naturalWidth, t3 = r2.cropImage.offsetHeight / r2.naturalHeight;
                  r2.cropBox.x = l.css(r2.cropHandler, "left") / e4, r2.cropBox.y = l.css(r2.cropHandler, "top") / t3, r2.cropBox.w = r2.cropHandler.offsetWidth / e4, r2.cropBox.h = r2.cropHandler.offsetHeight / t3, r2.sizes.innerText = r2.cropBox.w.toFixed(0) + "x" + r2.cropBox.h.toFixed(0);
                }
              }, r2.updateResizeBox = function() {
                r2.resizeBox.w = r2.image.offsetWidth || r2.naturalWidth, r2.resizeBox.h = r2.image.offsetHeight || r2.naturalHeight;
              }, r2.setHandlers = function() {
                var i2 = r2;
                i2.jodit.events.on([i2.editor.querySelector(".jodit_bottomright"), i2.cropHandler], "mousedown.jodit_image_editor", function(e5) {
                  i2.target = e5.target || e5.srcElement, e5.preventDefault(), e5.stopImmediatePropagation(), i2.clicked = true, i2.start_x = e5.clientX, i2.start_y = e5.clientY, i2.height = i2.activeTab === "crop" ? (i2.top_x = l.css(i2.cropHandler, "left"), i2.top_y = l.css(i2.cropHandler, "top"), i2.width = i2.cropHandler.offsetWidth, i2.cropHandler.offsetHeight) : (i2.width = i2.image.offsetWidth, i2.image.offsetHeight);
                }).off(r2.jodit.ownerWindow, ".jodit_image_editor" + i2.jodit.id).on(r2.jodit.ownerWindow, "mousemove.jodit_image_editor" + i2.jodit.id, l.throttle(function(e5) {
                  i2.clicked && (i2.diff_x = e5.clientX - i2.start_x, i2.diff_y = e5.clientY - i2.start_y, i2.activeTab === "resize" && i2.resizeUseRatio || i2.activeTab === "crop" && i2.cropUseRatio ? i2.diff_x ? (i2.new_w = i2.width + i2.diff_x, i2.new_h = Math.round(i2.new_w / i2.ratio)) : (i2.new_h = i2.height + i2.diff_y, i2.new_w = Math.round(i2.new_h * i2.ratio)) : (i2.new_w = i2.width + i2.diff_x, i2.new_h = i2.height + i2.diff_y), i2.activeTab === "resize" ? (i2.options.resizeMinWidth < i2.new_w && (l.css(i2.image, "width", i2.new_w + "px"), i2.widthInput.value = "" + i2.new_w), i2.options.resizeMinHeight < i2.new_h && (l.css(i2.image, "height", i2.new_h + "px"), i2.heightInput.value = "" + i2.new_h), r2.jodit.events.fire(i2.resizeHandler, "updatesize")) : (i2.target !== i2.cropHandler ? (i2.cropImage.offsetWidth < i2.top_x + i2.new_w && (i2.new_w = i2.cropImage.offsetWidth - i2.top_x), i2.cropImage.offsetHeight < i2.top_y + i2.new_h && (i2.new_h = i2.cropImage.offsetHeight - i2.top_y), l.css(i2.cropHandler, { width: i2.new_w, height: i2.new_h })) : (i2.cropImage.offsetWidth < i2.top_x + i2.diff_x + i2.cropHandler.offsetWidth && (i2.diff_x = i2.cropImage.offsetWidth - i2.top_x - i2.cropHandler.offsetWidth), l.css(i2.cropHandler, "left", i2.top_x + i2.diff_x), i2.cropImage.offsetHeight < i2.top_y + i2.diff_y + i2.cropHandler.offsetHeight && (i2.diff_y = i2.cropImage.offsetHeight - i2.top_y - i2.cropHandler.offsetHeight), l.css(i2.cropHandler, "top", i2.top_y + i2.diff_y)), r2.jodit.events.fire(i2.cropHandler, "updatesize")), e5.stopImmediatePropagation());
                }, 5)).on(r2.jodit.ownerWindow, "resize.jodit_image_editor" + i2.jodit.id, function() {
                  r2.jodit.events.fire(i2.resizeHandler, "updatesize"), i2.showCrop(), r2.jodit.events.fire(i2.cropHandler, "updatesize");
                }).on(r2.jodit.ownerWindow, "mouseup.jodit_image_editor" + i2.jodit.id + " keydown.jodit_image_editor" + i2.jodit.id, function(e5) {
                  i2.clicked && (i2.clicked = false, e5.stopImmediatePropagation());
                }), l.$$(".jodit_btn_group", i2.editor).forEach(function(e5) {
                  var t4 = e5.querySelector("input");
                  i2.jodit.events.on(e5, "click change", function() {
                    l.$$("button", e5).forEach(function(e6) {
                      return e6.classList.remove("active");
                    }), this.classList.add("active"), t4.checked = !!this.getAttribute("data-yes"), i2.jodit.events.fire(t4, "change");
                  }, "button");
                }), i2.jodit.events.on(r2.editor, "click.jodit_image_editor", function() {
                  l.$$(".jodit_image_editor_slider,.jodit_image_editor_area", i2.editor).forEach(function(e6) {
                    return e6.classList.remove("active");
                  });
                  var e5 = this.parentNode;
                  e5.classList.add("active"), i2.activeTab = e5.getAttribute("data-area") || "";
                  var t4 = i2.editor.querySelector(".jodit_image_editor_area.jodit_image_editor_area_" + i2.activeTab);
                  t4 && t4.classList.add("active"), i2.activeTab === "crop" && i2.showCrop();
                }, ".jodit_image_editor_slider-title").on(i2.widthInput, "change.jodit_image_editor mousedown.jodit_image_editor keydown.jodit_image_editor", l.debounce(function() {
                  var e5, t4 = parseInt(i2.widthInput.value, 10);
                  i2.options.min_width < t4 && (l.css(i2.image, "width", t4 + "px"), i2.resizeUseRatio && i2.options.min_height < (e5 = Math.round(t4 / i2.ratio)) && (l.css(i2.image, "height", e5 + "px"), i2.heightInput.value = "" + e5)), r2.jodit.events.fire(i2.resizeHandler, "updatesize");
                }, 200)).on(i2.heightInput, "change.jodit_image_editor mousedown.jodit_image_editor keydown.jodit_image_editor", l.debounce(function() {
                  if (!r2.isDestructed) {
                    var e5, t4 = parseInt(i2.heightInput.value, 10);
                    i2.options.min_height < t4 && (l.css(i2.image, "height", t4 + "px"), i2.resizeUseRatio && i2.options.min_width < (e5 = Math.round(t4 * i2.ratio)) && (l.css(i2.image, "width", e5 + "px"), i2.widthInput.value = "" + e5)), r2.jodit.events.fire(i2.resizeHandler, "updatesize");
                  }
                }, 200));
                var e4 = i2.editor.querySelector(".jodit_image_editor_keep_spect_ratio");
                e4 && e4.addEventListener("change", function() {
                  i2.resizeUseRatio = e4.checked;
                });
                var t3 = i2.editor.querySelector(".jodit_image_editor_keep_spect_ratio_crop");
                t3 && t3.addEventListener("change", function() {
                  i2.cropUseRatio = t3.checked;
                }), i2.jodit.events.on(i2.resizeHandler, "updatesize", function() {
                  l.css(i2.resizeHandler, { top: 0, left: 0, width: (i2.image.offsetWidth || i2.naturalWidth) + "px", height: (i2.image.offsetHeight || i2.naturalHeight) + "px" }), r2.updateResizeBox();
                }).on(i2.cropHandler, "updatesize", function() {
                  if (i2.cropImage) {
                    var e5 = l.css(i2.cropHandler, "left"), t4 = l.css(i2.cropHandler, "top"), o2 = i2.cropHandler.offsetWidth, n2 = i2.cropHandler.offsetHeight;
                    e5 < 0 && (e5 = 0), t4 < 0 && (t4 = 0), i2.cropImage.offsetWidth < e5 + o2 && (o2 = i2.cropImage.offsetWidth - e5, i2.cropUseRatio && (n2 = o2 / i2.ratio)), i2.cropImage.offsetHeight < t4 + n2 && (n2 = i2.cropImage.offsetHeight - t4, i2.cropUseRatio && (o2 = n2 * i2.ratio)), l.css(i2.cropHandler, { width: o2, height: n2, left: e5, top: t4, backgroundPosition: -e5 - 1 + "px " + (-t4 - 1) + "px", backgroundSize: i2.cropImage.offsetWidth + "px " + i2.cropImage.offsetHeight + "px" }), i2.updateCropBox();
                  }
                }), i2.buttons.forEach(function(e5) {
                  e5.addEventListener("mousedown", function(e6) {
                    e6.stopImmediatePropagation();
                  }), e5.addEventListener("click", function() {
                    var t4 = { action: i2.activeTab, box: i2.activeTab === "resize" ? i2.resizeBox : i2.cropBox };
                    switch (e5.getAttribute("data-action")) {
                      case "saveas":
                        s.Promt(i2.jodit.i18n("Enter new name"), i2.jodit.i18n("Save in new file"), function(e6) {
                          if (!l.trim(e6))
                            return s.Alert(i2.jodit.i18n("The name should not be empty")), false;
                          i2.onSave(e6, t4, i2.hide, function(e7) {
                            s.Alert(e7.message);
                          });
                        });
                        break;
                      case "save":
                        i2.onSave(void 0, t4, i2.hide, function(e6) {
                          s.Alert(e6.message);
                        });
                        break;
                      case "reset":
                        i2.activeTab === "resize" ? (l.css(i2.image, { width: null, height: null }), i2.widthInput.value = "" + i2.naturalWidth, i2.heightInput.value = "" + i2.naturalHeight, i2.jodit.events.fire(i2.resizeHandler, "updatesize")) : i2.showCrop();
                    }
                  });
                });
              }, r2.hide = function() {
                r2.dialog.close();
              }, r2.open = function(n2, i2) {
                return new Promise(function(e4) {
                  var t3 = new Date().getTime();
                  r2.image = r2.jodit.create.element("img"), l.$$("img,.jodit_icon-loader", r2.resize_box).forEach(d.Dom.safeRemove), l.$$("img,.jodit_icon-loader", r2.crop_box).forEach(d.Dom.safeRemove), l.css(r2.cropHandler, "background", "transparent"), r2.onSave = i2, r2.resize_box.appendChild(r2.jodit.create.element("i", { class: "jodit_icon-loader" })), r2.crop_box.appendChild(r2.jodit.create.element("i", { class: "jodit_icon-loader" })), r2.image.setAttribute("src", n2 += /\?/.test(n2) ? "&_tst=" + t3 : "?_tst=" + t3), r2.dialog.open();
                  var o2 = function() {
                    r2.isDestructed || (r2.image.removeEventListener("load", o2), r2.naturalWidth = r2.image.naturalWidth, r2.naturalHeight = r2.image.naturalHeight, r2.widthInput.value = "" + r2.naturalWidth, r2.heightInput.value = "" + r2.naturalHeight, r2.ratio = r2.naturalWidth / r2.naturalHeight, r2.resize_box.appendChild(r2.image), r2.cropImage = r2.image.cloneNode(), r2.crop_box.appendChild(r2.cropImage), l.$$(".jodit_icon-loader", r2.editor).forEach(d.Dom.safeRemove), r2.activeTab === "crop" && r2.showCrop(), r2.jodit.events.fire(r2.resizeHandler, "updatesize"), r2.jodit.events.fire(r2.cropHandler, "updatesize"), r2.dialog.setPosition(), r2.jodit.events.fire("afterImageEditor"), e4(r2.dialog));
                  };
                  r2.image.addEventListener("load", o2), r2.image.complete && o2();
                });
              }, r2.options = e3 && e3.options ? e3.options.imageeditor : a.Config.defaultOptions.imageeditor, r2.resizeUseRatio = r2.options.resizeUseRatio, r2.cropUseRatio = r2.options.cropUseRatio, r2.buttons = [r2.jodit.create.fromHTML('<button data-action="reset" type="button" class="jodit_btn">' + c.ToolbarIcon.getIcon("update") + " " + e3.i18n("Reset") + "</button>"), r2.jodit.create.fromHTML('<button data-action="save" type="button" class="jodit_btn jodit_btn_success">' + c.ToolbarIcon.getIcon("save") + " " + e3.i18n("Save") + "</button>"), r2.jodit.create.fromHTML('<button data-action="saveas" type="button" class="jodit_btn jodit_btn_success">' + c.ToolbarIcon.getIcon("save") + " " + e3.i18n("Save as ...") + "</button>")], r2.activeTab = r2.options.resize ? "resize" : "crop", r2.editor = r2.jodit.create.fromHTML('<form class="jodit_image_editor jodit_properties"><div class="jodit_grid"><div class="jodit_col-lg-3-4">' + (r2.options.resize ? '<div class="jodit_image_editor_area jodit_image_editor_area_resize active">                                <div class="jodit_image_editor_box"></div>                                <div class="jodit_image_editor_resizer">                                    <i class="jodit_bottomright"></i>                                </div>                            </div>' : "") + (r2.options.crop ? '<div class="jodit_image_editor_area jodit_image_editor_area_crop' + (r2.options.resize ? "" : " active") + '">                                <div class="jodit_image_editor_box">                                    <div class="jodit_image_editor_croper">                                        <i class="jodit_bottomright"></i>                                        <i class="jodit_sizes"></i>                                    </div>                                </div>                            </div>' : "") + '</div><div class="jodit_col-lg-1-4">' + (r2.options.resize ? '<div data-area="resize" class="jodit_image_editor_slider active">                                <div class="jodit_image_editor_slider-title">' + c.ToolbarIcon.getIcon("resize") + e3.i18n("Resize") + '</div>                                <div class="jodit_image_editor_slider-content">                                    <div class="jodit_form_group">                                        <label for="jodit_image_editor_width">' + e3.i18n("Width") + '</label>                                        <input type="number" class="jodit_image_editor_width"/>                                    </div>                                    <div class="jodit_form_group">                                        <label for="jodit_image_editor_height">' + e3.i18n("Height") + '</label>                                        <input type="number" class="jodit_image_editor_height"/>                                    </div>                                    <div class="jodit_form_group">                                        <label>' + e3.i18n("Keep Aspect Ratio") + '</label>                                        <div class="jodit_btn_group jodit_btn_radio_group">                                            <input ' + (r2.resizeUseRatio ? "checked" : "") + ' type="checkbox" class="jodit_image_editor_keep_spect_ratio"/>                                            <button type="button"  data-yes="1"                                                 class="jodit_col6 jodit_btn jodit_btn_success ' + (r2.resizeUseRatio ? "active" : "") + '">' + e3.i18n("Yes") + '</button>                                            <button type="button" class="jodit_col6 jodit_btn' + (r2.resizeUseRatio ? "" : "active") + '">' + e3.i18n("No") + "</button>                                        </div>                                    </div>                                </div>                            </div>" : "") + (r2.options.crop ? '<div data-area="crop" class="jodit_image_editor_slider' + (r2.options.resize ? "" : " active") + '">                                <div class="jodit_image_editor_slider-title">' + c.ToolbarIcon.getIcon("crop") + e3.i18n("Crop") + '</div>                                <div class="jodit_image_editor_slider-content">                                    <div class="jodit_form_group">                                        <label>' + e3.i18n("Keep Aspect Ratio") + '</label>                                        <div class="jodit_btn_group jodit_btn_radio_group">                                            <input ' + (r2.cropUseRatio ? "checked" : "") + ' type="checkbox" class="jodit_image_editor_keep_spect_ratio_crop"/>                                            <button type="button" data-yes="1"                                                 class="jodit_col6 jodit_btn jodit_btn_success ' + (r2.cropUseRatio ? "active" : "") + '">' + e3.i18n("Yes") + '</button>                                            <button type="button" class="jodit_col6 jodit_btn ' + (r2.cropUseRatio ? "" : "active") + '">' + e3.i18n("No") + "</button>                                        </div>                                    </div>                                </div>                            </div>" : "") + "</div></div></form>"), r2.widthInput = r2.editor.querySelector(".jodit_image_editor_width"), r2.heightInput = r2.editor.querySelector(".jodit_image_editor_height"), r2.resize_box = r2.editor.querySelector(".jodit_image_editor_area.jodit_image_editor_area_resize .jodit_image_editor_box"), r2.crop_box = r2.editor.querySelector(".jodit_image_editor_area.jodit_image_editor_area_crop .jodit_image_editor_box"), r2.sizes = r2.editor.querySelector(".jodit_image_editor_area.jodit_image_editor_area_crop .jodit_sizes"), r2.resizeHandler = r2.editor.querySelector(".jodit_image_editor_resizer"), r2.cropHandler = r2.editor.querySelector(".jodit_image_editor_croper"), r2.dialog = new s.Dialog(e3), r2.dialog.setContent(r2.editor), r2.dialog.setSize(r2.options.width, r2.options.height), r2.dialog.setTitle(r2.buttons), r2.setHandlers(), r2;
            }
            return i(e2, t2), e2.prototype.destruct = function() {
              this.dialog && this.dialog.destruct(), d.Dom.safeRemove(this.editor), this.jodit.events && this.jodit.events.off(".jodit_image_editor");
            }, e2;
          }(r.Component);
          t.ImageEditor = u;
        }, function(e, t, o) {
          "use strict";
          var n, i = this && this.__extends || (n = function(e2, t2) {
            return (n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e3, t3) {
              e3.__proto__ = t3;
            } || function(e3, t3) {
              for (var o2 in t3)
                t3.hasOwnProperty(o2) && (e3[o2] = t3[o2]);
            })(e2, t2);
          }, function(e2, t2) {
            function o2() {
              this.constructor = e2;
            }
            n(e2, t2), e2.prototype = t2 === null ? Object.create(t2) : (o2.prototype = t2.prototype, new o2());
          });
          Object.defineProperty(t, "__esModule", { value: true });
          var r = o(2), p = o(1), a = o(35), m = o(3), h = o(0), v = o(12), s = o(7);
          r.Config.prototype.enableDragAndDropFileToEditor = true, r.Config.prototype.uploader = { url: "", insertImageAsBase64URI: false, imagesExtensions: ["jpg", "png", "jpeg", "gif"], headers: null, data: null, format: "json", prepareData: function(e2) {
            return e2;
          }, isSuccess: function(e2) {
            return e2.success;
          }, getMessage: function(e2) {
            return e2.data.messages !== void 0 && Array.isArray(e2.data.messages) ? e2.data.messages.join(" ") : "";
          }, process: function(e2) {
            return e2.data;
          }, error: function(e2) {
            this.jodit.events.fire("errorMessage", e2.message, "error", 4e3);
          }, defaultHandlerSuccess: function(a2) {
            var s2 = this;
            a2.files && a2.files.length && a2.files.forEach(function(e2, t2) {
              var o2 = a2.isImages && a2.isImages[t2] ? ["img", "src"] : ["a", "href"], n2 = o2[0], i2 = o2[1], r2 = s2.jodit.create.inside.element(n2);
              r2.setAttribute(i2, a2.baseurl + e2), n2 === "a" && (r2.innerText = a2.baseurl + e2), v.isJoditObject(s2.jodit) && (n2 === "img" ? s2.jodit.selection.insertImage(r2, null, s2.jodit.options.imageDefaultWidth) : s2.jodit.selection.insertNode(r2));
            });
          }, defaultHandlerError: function(e2) {
            this.jodit.events.fire("errorMessage", e2.message);
          }, contentType: function(e2) {
            return (this.jodit.ownerWindow.FormData === void 0 || typeof e2 == "string") && "application/x-www-form-urlencoded; charset=UTF-8";
          } };
          var l = function(n2) {
            function f(e2, t2) {
              var o2 = n2.call(this, e2) || this;
              return o2.path = "", o2.source = "default", o2.ajaxInstances = [], o2.options = m.extend(true, {}, r.Config.defaultOptions.uploader, v.isJoditObject(e2) ? e2.options.uploader : null, t2), o2;
            }
            return i(f, n2), f.dataURItoBlob = function(e2) {
              for (var t2 = atob(e2.split(",")[1]), o2 = e2.split(",")[0].split(":")[1].split(";")[0], n3 = new ArrayBuffer(t2.length), i2 = new Uint8Array(n3), r2 = 0; r2 < t2.length; r2 += 1)
                i2[r2] = t2.charCodeAt(r2);
              return new Blob([i2], { type: o2 });
            }, f.prototype.buildData = function(t2) {
              if (this.options.buildData && typeof this.options.buildData == "function")
                return this.options.buildData.call(this, t2);
              if (this.jodit.ownerWindow.FormData === void 0)
                return t2;
              if (t2 instanceof FormData)
                return t2;
              if (typeof t2 == "string")
                return t2;
              var o2 = new FormData();
              return Object.keys(t2).forEach(function(e2) {
                o2.append(e2, t2[e2]);
              }), o2;
            }, f.prototype.send = function(e2, n3) {
              var i2 = this, t2 = this.buildData(e2), o2 = function(e3) {
                var t3 = new a.Ajax(i2.jodit || i2, { xhr: function() {
                  var e4 = new XMLHttpRequest();
                  return i2.jodit.ownerWindow.FormData !== void 0 && e4.upload ? e4.upload.addEventListener("progress", function(e5) {
                    if (e5.lengthComputable) {
                      var t4 = e5.loaded / e5.total;
                      t4 *= 100, i2.jodit.progress_bar.style.display = "block", i2.jodit.progress_bar.style.width = t4 + "%", t4 === 100 && (i2.jodit.progress_bar.style.display = "none");
                    }
                  }, false) : i2.jodit.progress_bar.style.display = "none", e4;
                }, method: "POST", data: e3, url: i2.options.url, headers: i2.options.headers, queryBuild: i2.options.queryBuild, contentType: i2.options.contentType.call(i2, e3), dataType: i2.options.format || "json" });
                i2.ajaxInstances.push(t3);
                var o3 = function() {
                  var e4 = i2.ajaxInstances.indexOf(t3);
                  e4 !== -1 && i2.ajaxInstances.splice(e4, 1);
                };
                return t3.send().then(function(e4) {
                  o3(), n3.call(i2, e4);
                }).catch(function(e4) {
                  o3(), i2.options.error.call(i2, e4);
                });
              };
              return t2 instanceof Promise ? t2.then(o2).catch(function(e3) {
                i2.options.error.call(i2, e3);
              }) : o2(t2);
            }, f.prototype.sendFiles = function(e2, n3, t2, o2) {
              var i2 = this;
              if (!e2)
                return Promise.reject(Error("Need files"));
              var r2 = this, a2 = Array.from(e2);
              if (!a2.length)
                return Promise.reject(Error("Need files"));
              var s2 = [];
              if (this.options.insertImageAsBase64URI) {
                var l2, c = void 0, d = function() {
                  if ((l2 = a2[c]) && l2.type) {
                    var e3 = l2.type.match(/\/([a-z0-9]+)/i), t3 = e3[1] ? e3[1].toLowerCase() : "";
                    if (u.options.imagesExtensions.indexOf(t3) != -1) {
                      var o3 = new FileReader();
                      s2.push(new Promise(function(t4, e4) {
                        o3.onerror = e4, o3.onloadend = function() {
                          var e5 = { baseurl: "", files: [o3.result], isImages: [true] };
                          typeof (n3 || r2.options.defaultHandlerSuccess) == "function" && (n3 || r2.options.defaultHandlerSuccess).call(r2, e5), t4(e5);
                        }, o3.readAsDataURL(l2);
                      })), a2[c] = null;
                    }
                  }
                }, u = this;
                for (c = 0; c < a2.length; c += 1)
                  d();
              }
              if ((a2 = a2.filter(function(e3) {
                return e3;
              })).length) {
                var f2 = new FormData();
                f2.append("path", r2.path), f2.append("source", r2.source);
                var p2 = void 0;
                for (c = 0; c < a2.length; c += 1)
                  if (p2 = a2[c]) {
                    var h2 = p2.type.match(/\/([a-z0-9]+)/i), v2 = h2 && h2[1] ? h2[1].toLowerCase() : "";
                    f2.append("files[" + c + "]", a2[c], (a2[c].name || ("" + Math.random()).replace(".", "")) + (v2 ? "." + v2 : ""));
                  }
                o2 && o2(f2), r2.options.data && m.isPlainObject(r2.options.data) && Object.keys(r2.options.data).forEach(function(e3) {
                  f2.append(e3, r2.options.data[e3]);
                }), r2.options.prepareData.call(this, f2), s2.push(r2.send(f2, function(e3) {
                  i2.options.isSuccess.call(r2, e3) ? typeof (n3 || r2.options.defaultHandlerSuccess) == "function" && (n3 || r2.options.defaultHandlerSuccess).call(r2, r2.options.process.call(r2, e3)) : (t2 || r2.options.defaultHandlerError).call(r2, Error(r2.options.getMessage.call(r2, e3)));
                }).then(function() {
                  i2.jodit.events && i2.jodit.events.fire("filesWereUploaded");
                }));
              }
              return Promise.all(s2);
            }, f.prototype.setPath = function(e2) {
              this.path = e2;
            }, f.prototype.setSource = function(e2) {
              this.source = e2;
            }, f.prototype.bind = function(t2, l2, c) {
              var d = this, u = this, e2 = function(e3) {
                var t3, o3, n4, i2 = function(e4) {
                  o3 && (e4.append("extension", n4), e4.append("mimetype", o3.type));
                };
                if (e3.clipboardData && e3.clipboardData.files && e3.clipboardData.files.length)
                  return d.sendFiles(e3.clipboardData.files, l2, c), false;
                if (m.browser("ff") || p.IS_IE) {
                  if (e3.clipboardData && !e3.clipboardData.types.length && e3.clipboardData.types[0] !== p.TEXT_PLAIN) {
                    var r2 = d.jodit.create.fromHTML('<div tabindex="-1" style="left: -9999px; top: 0; width: 0; height: 100%; line-height: 140%; overflow: hidden; position: fixed; z-index: 2147483647; word-break: break-all;" contenteditable="true"></div>');
                    d.jodit.ownerDocument.body.appendChild(r2);
                    var a2 = d.jodit && v.isJoditObject(d.jodit) ? d.jodit.selection.save() : null;
                    r2.focus(), setTimeout(function() {
                      var e4 = r2.firstChild;
                      if (h.Dom.safeRemove(r2), e4 && e4.hasAttribute("src")) {
                        var t4 = e4.getAttribute("src") || "";
                        a2 && d.jodit && v.isJoditObject(d.jodit) && d.jodit.selection.restore(a2), u.sendFiles([f.dataURItoBlob(t4)], l2, c);
                      }
                    }, 200);
                  }
                } else if (e3.clipboardData && e3.clipboardData.items && e3.clipboardData.items.length) {
                  for (t3 = 0; t3 < e3.clipboardData.items.length; t3 += 1)
                    if (e3.clipboardData.items[t3].kind === "file" && e3.clipboardData.items[t3].type === "image/png") {
                      if (o3 = e3.clipboardData.items[t3].getAsFile()) {
                        var s2 = o3.type.match(/\/([a-z0-9]+)/i);
                        n4 = s2[1] ? s2[1].toLowerCase() : "", d.sendFiles([o3], l2, c, i2);
                      }
                      e3.preventDefault();
                      break;
                    }
                }
              };
              this.jodit && this.jodit.editor !== t2 ? u.jodit.events.on(t2, "paste", e2) : u.jodit.events.on("beforePaste", e2);
              var o2 = function(e3) {
                return !(!e3.dataTransfer || !e3.dataTransfer.files || e3.dataTransfer.files.length === 0);
              };
              u.jodit.events.on(t2, "dragend dragover dragenter dragleave drop", function(e3) {
                e3.preventDefault();
              }).on(t2, "dragover", function(e3) {
                o2(e3) && (t2.classList.contains("jodit_draghover") || t2.classList.add("jodit_draghover"), e3.preventDefault());
              }).on(t2, "dragend", function(e3) {
                o2(e3) && (t2.classList.contains("jodit_draghover") && t2.classList.remove("jodit_draghover"), e3.preventDefault());
              }).on(t2, "drop", function(e3) {
                t2.classList.remove("jodit_draghover"), o2(e3) && e3.dataTransfer && e3.dataTransfer.files && (e3.preventDefault(), e3.stopImmediatePropagation(), d.sendFiles(e3.dataTransfer.files, l2, c));
              });
              var n3 = t2.querySelector("input[type=file]");
              n3 && u.jodit.events.on(n3, "change", function() {
                u.sendFiles(this.files, l2, c).then(function() {
                  n3.value = "", /safari/i.test(navigator.userAgent) || (n3.type = "", n3.type = "file");
                });
              });
            }, f.prototype.uploadRemoteImage = function(e2, t2, o2) {
              var n3 = this, i2 = this;
              i2.send({ action: "fileUploadRemote", url: e2 }, function(e3) {
                if (i2.options.isSuccess.call(i2, e3))
                  typeof t2 == "function" ? t2.call(i2, n3.options.process.call(n3, e3)) : n3.options.defaultHandlerSuccess.call(i2, n3.options.process.call(n3, e3));
                else if (typeof (o2 || i2.options.defaultHandlerError) == "function")
                  return void (o2 || n3.options.defaultHandlerError).call(i2, Error(i2.options.getMessage.call(n3, e3)));
              });
            }, f.prototype.destruct = function() {
              this.ajaxInstances.forEach(function(e2) {
                try {
                  e2.abort();
                } catch (e3) {
                }
              });
            }, f;
          }(s.Component);
          t.Uploader = l;
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true });
          var n = o(129);
          t.addNewLine = n.addNewLine;
          var i = o(130);
          t.autofocus = i.autofocus;
          var r = o(131);
          t.backspace = r.backspace;
          var a = o(132);
          t.bold = a.bold;
          var s = o(133);
          t.cleanHtml = s.cleanHtml;
          var l = o(134);
          t.color = l.color, o(135);
          var c = o(136);
          t.enter = c.enter;
          var d = o(137);
          t.errorMessages = d.errorMessages;
          var u = o(138);
          t.font = u.font;
          var f = o(139);
          t.formatBlock = f.formatBlock;
          var p = o(140);
          t.fullsize = p.fullsize;
          var h = o(141);
          t.iframe = h.iframe;
          var v = o(142);
          t.indent = v.indent;
          var m = o(143);
          t.imageProcessor = m.imageProcessor;
          var g = o(144);
          t.imageProperties = g.imageProperties;
          var b = o(145);
          t.inlinePopup = b.inlinePopup;
          var _ = o(146);
          t.justify = _.justify;
          var y = o(147);
          t.link = y.link;
          var w = o(148);
          t.limit = w.limit;
          var C = o(149);
          t.media = C.media;
          var j = o(150);
          t.mobile = j.mobile;
          var E = o(151);
          t.orderedlist = E.orderedlist;
          var T = o(152);
          t.paste = T.paste;
          var S = o(153);
          t.placeholder = S.placeholder;
          var x = o(154);
          t.redoundo = x.redoundo;
          var I = o(155);
          t.resizer = I.resizer;
          var D = o(156);
          t.size = D.size;
          var k = o(157);
          t.source = k.source;
          var L = o(158);
          t.symbols = L.symbols;
          var A = o(159);
          t.hotkeys = A.hotkeys;
          var M = o(160);
          t.table = M.TableProcessor;
          var q = o(161);
          t.tableKeyboardNavigation = q.tableKeyboardNavigation;
          var O = o(162);
          t.search = O.search;
          var z = o(163);
          t.sticky = z.sticky;
          var P = o(164);
          t.stat = P.stat;
          var N = o(165);
          t.xpath = N.xpath;
          var R = o(166);
          t.DragAndDropElement = R.DragAndDropElement;
          var B = o(167);
          t.DragAndDrop = B.DragAndDrop;
          var H = o(168);
          t.pasteStorage = H.pasteStorage;
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true });
          var n = o(2), v = o(0), r = o(4), m = o(23), g = o(5);
          n.Config.prototype.addNewLine = true, n.Config.prototype.addNewLineOnDBLClick = true, n.Config.prototype.addNewLineTagsTriggers = ["table", "iframe", "img", "hr", "jodit"], t.addNewLine = function(a) {
            if (a.options.addNewLine) {
              var s, l, c = a.create.fromHTML('<div role="button" tabIndex="-1" title="' + a.i18n("Break") + '" class="jodit-add-new-line"><span>' + g.ToolbarIcon.getIcon("enter") + "</span></div>"), d = RegExp("^(" + a.options.addNewLineTagsTriggers.join("|") + ")$", "i"), u = false, f = false, e2 = false, i = function() {
                clearTimeout(s), e2 = false, c.style.display = "none", u = true;
              }, p = function(e3) {
                return e3 !== null && v.Dom.isBlock(e3, a.editorWindow) && !/^(img|table|iframe|hr)$/i.test(e3.nodeName);
              }, h = function() {
                u || e2 || (clearTimeout(s), s = r.setTimeout(i, 500));
              };
              a.events.on("beforeDestruct", function() {
                v.Dom.safeRemove(c);
              }).on("afterInit", function() {
                a.container.appendChild(c), a.events.on(c, "mousemove", function(e3) {
                  e3.stopPropagation();
                }).on(c, "mousedown touchstart", function(e3) {
                  var t2 = a.editorDocument.createElement(a.options.enter);
                  f && l && l.parentNode ? l.parentNode.insertBefore(t2, l) : a.editor.appendChild(t2), a.selection.setCursorIn(t2), a.events.fire("synchro"), i(), e3.preventDefault();
                });
              }).on("afterInit", function() {
                a.events.on(a.editor, "scroll", function() {
                  i();
                }).on(a.container, "mouseleave", h).on(c, "mouseenter", function() {
                  clearTimeout(s), e2 = true;
                }).on(c, "mouseleave", function() {
                  e2 = false;
                }).on(a.editor, "dblclick", function(e3) {
                  if (!a.options.readonly && a.options.addNewLineOnDBLClick && e3.target === a.editor && a.selection.isCollapsed()) {
                    var t2 = m.offset(a.editor, a, a.editorDocument), o2 = e3.pageY - a.editorWindow.pageYOffset, n2 = a.editorDocument.createElement(a.options.enter);
                    Math.abs(o2 - t2.top) < Math.abs(o2 - (t2.height + t2.top)) && a.editor.firstChild ? a.editor.insertBefore(n2, a.editor.firstChild) : a.editor.appendChild(n2), a.selection.setCursorIn(n2), a.setEditorValue(), i(), e3.preventDefault();
                  }
                }).on(a.editor, "mousemove", r.debounce(function(e3) {
                  var t2 = a.editorDocument.elementFromPoint(e3.pageX - a.editorWindow.pageXOffset, e3.pageY - a.editorWindow.pageYOffset);
                  if ((!t2 || !v.Dom.isOrContains(c, t2)) && t2 && v.Dom.isOrContains(a.editor, t2))
                    if (t2 && t2.nodeName.match(d) && v.Dom.isOrContains(a.editor, t2) || (t2 = v.Dom.closest(t2, d, a.editor))) {
                      if (d.test(t2.nodeName)) {
                        var o2 = v.Dom.up(t2, function(e4) {
                          return v.Dom.isBlock(e4, a.editorWindow);
                        }, a.editor);
                        o2 && o2 !== a.editor && (t2 = o2);
                      }
                      var n2 = m.offset(a.editor, a, a.editorDocument), i2 = m.offset(t2, a, a.editorDocument), r2 = false;
                      Math.abs(e3.pageY - i2.top) < 10 && ((r2 = i2.top) - n2.top < 20 || (r2 -= 15), f = true), Math.abs(e3.pageY - (i2.top + i2.height)) < 10 && (n2.top + n2.height - (r2 = i2.top + i2.height) < 25 || (r2 += 15), f = false), r2 !== false && (f && !v.Dom.prev(t2, p, a.editor) || !f && !v.Dom.next(t2, p, a.editor)) ? (c.style.top = r2 + "px", l = t2, a.options.readonly || a.isLocked() || a.container.classList.contains("jodit_popup_active") || (clearTimeout(s), c.classList.toggle("jodit-add-new-line_after", !f), c.style.display = "block", c.style.width = a.editor.clientWidth + "px", u = false)) : (l = false, h());
                    } else
                      h();
                }, a.defaultTimeout));
              });
            }
          };
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true });
          var n = o(2), i = o(0), r = o(4);
          n.Config.prototype.autofocus = false, t.autofocus = function(t2) {
            var e2;
            t2.events.on("afterInit", function() {
              t2.options.autofocus && (t2.defaultTimeout ? e2 = r.setTimeout(t2.selection.focus, 300) : t2.selection.focus());
            }).on("mousedown", function(e3) {
              t2.isEditorMode() && e3.target && i.Dom.isBlock(e3.target, t2.editorWindow) && !e3.target.childNodes.length && (t2.editor === e3.target ? t2.selection.focus() : t2.selection.setCursorIn(e3.target));
            }).on("beforeDestruct", function() {
              clearTimeout(e2);
            });
          };
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true });
          var y = o(1), n = o(1), w = o(0), C = o(3);
          t.backspace = function(m) {
            var g = function(e2) {
              var t3, o2 = e2;
              C.normalizeNode(e2);
              do {
                var n2 = o2.innerHTML.replace(y.INVISIBLE_SPACE_REG_EXP, "");
                if (n2.length && n2 !== "<br>" || w.Dom.isCell(o2, m.editorWindow) || !o2.parentNode || e2 === m.editor)
                  break;
                t3 = o2.parentNode, w.Dom.safeRemove(o2), o2 = t3;
              } while (o2 && o2 !== m.editor);
            }, c = function(e2, t3, o2) {
              if (e2.node && e2.node.nodeType === Node.TEXT_NODE && typeof e2.node.nodeValue == "string") {
                for (var n2 = e2.node.nodeValue, i = t3 ? n2.length : 0, r2 = t3 ? -1 : 1, a = i; 0 <= i && i <= n2.length && n2[i + (t3 ? -1 : 0)] === y.INVISIBLE_SPACE; )
                  i += r2;
                i !== a && (t3 ? n2 = n2.substr(0, i) + n2.substr(a) : (n2 = n2.substr(0, a) + n2.substr(i), i = a), e2.node.nodeValue = n2), o2.setStart(e2.node, i), o2.collapse(true), m.selection.selectRange(o2);
                var s = w.Dom.findInline(e2.node, t3, m.editor);
                if (n2.length) {
                  var l = false;
                  if (t3 ? i && (l = true) : i < n2.length && (l = true), l)
                    return true;
                } else
                  o2.setStartBefore(e2.node), o2.collapse(true), m.selection.selectRange(o2), w.Dom.safeRemove(e2.node), e2.node = s;
                if (s && (w.Dom.isInlineBlock(s) && (s = t3 ? s.lastChild : s.firstChild), s && s.nodeType === Node.TEXT_NODE))
                  return e2.node = s, c(e2, t3, o2);
              }
            }, t2 = n.MAY_BE_REMOVED_WITH_KEY, r = function(e2) {
              if (e2 && t2.test(e2.nodeName))
                return w.Dom.safeRemove(e2), false;
            }, b = function(e2, t3, o2) {
              if (e2.node) {
                var n2 = e2.node;
                if (c(e2, t3, o2) !== void 0)
                  return true;
                if (e2.node || (e2.node = n2.parentNode), e2.node === m.editor)
                  return false;
                var i = e2.node;
                if (r(i) === false)
                  return false;
                for (i && (i = t3 ? i.previousSibling : i.nextSibling); i && i.nodeType === Node.TEXT_NODE && i.nodeValue && i.nodeValue.match(/^[\n\r]+$/); )
                  i = t3 ? i.previousSibling : i.nextSibling;
                return r(i);
              }
            }, _ = function(e2) {
              return !(e2.nodeName.match(/^(TD|TH|TR|TABLE|LI)$/) !== null || !w.Dom.isEmpty(e2) && e2.nodeName.match(t2) === null && (e2.nodeType === Node.TEXT_NODE && !w.Dom.isEmptyTextNode(e2) || e2.childNodes.length && !Array.from(e2.childNodes).every(_)));
            };
            m.events.on("afterCommand", function(e2) {
              if (e2 === "delete") {
                var t3 = m.selection.current();
                if (t3 && t3.firstChild && t3.firstChild.nodeName === "BR" && w.Dom.safeRemove(t3.firstChild), !(C.trim(m.editor.innerText) || m.editor.querySelector("img") || t3 && w.Dom.closest(t3, "table", m.editor))) {
                  m.editor.innerHTML = "";
                  var o2 = m.selection.setCursorIn(m.editor);
                  w.Dom.safeRemove(o2);
                }
              }
            }).on("keydown", function(e2) {
              if (e2.which === y.KEY_BACKSPACE || e2.which === y.KEY_DELETE) {
                var t3 = e2.which === y.KEY_BACKSPACE;
                if (m.selection.isFocused() || m.selection.focus(), !m.selection.isCollapsed())
                  return m.execCommand("Delete"), false;
                var o2 = m.editorWindow.getSelection(), n2 = !!o2.rangeCount && o2.getRangeAt(0);
                if (!n2)
                  return false;
                var i = m.ownerDocument.createTextNode(y.INVISIBLE_SPACE), r2 = m.editorDocument.createElement("span");
                try {
                  if (n2.insertNode(i), !w.Dom.isOrContains(m.editor, i))
                    return false;
                  var a = w.Dom.up(i, function(e3) {
                    return w.Dom.isBlock(e3, m.editorWindow);
                  }, m.editor), s = w.Dom.findInline(i, t3, m.editor), l = { node: s }, c2 = void 0;
                  if (s ? c2 = b(l, t3, n2) : i.parentNode && (c2 = b({ node: t3 ? i.parentNode.previousSibling : i.parentNode.nextSibling }, t3, n2)), c2 !== void 0)
                    return !!c2 && void 0;
                  if (a && a.nodeName.match(/^(TD)$/))
                    return false;
                  var d = t3 ? w.Dom.prev(l.node || i, function(e3) {
                    return w.Dom.isBlock(e3, m.editorWindow);
                  }, m.editor) : w.Dom.next(l.node || i, function(e3) {
                    return w.Dom.isBlock(e3, m.editorWindow);
                  }, m.editor);
                  if (!d && a && a.parentNode) {
                    d = m.create.inside.element(m.options.enter);
                    for (var u = a; u && u.parentNode && u.parentNode !== m.editor; )
                      u = u.parentNode;
                    u.parentNode && u.parentNode.insertBefore(d, u);
                  } else if (d && _(d))
                    return w.Dom.safeRemove(d), false;
                  if (d) {
                    var f = m.selection.setCursorIn(d, !t3);
                    m.selection.insertNode(r2, false, false), f.nodeType === Node.TEXT_NODE && f.nodeValue === y.INVISIBLE_SPACE && w.Dom.safeRemove(f);
                  }
                  if (a) {
                    if (g(a), d && a.parentNode && (a.nodeName === d.nodeName && a.parentNode && d.parentNode && a.parentNode !== m.editor && d.parentNode !== m.editor && a.parentNode !== d.parentNode && a.parentNode.nodeName === d.parentNode.nodeName && (a = a.parentNode, d = d.parentNode), w.Dom.moveContent(a, d, !t3), C.normalizeNode(d)), d && d.nodeName === "LI") {
                      var p = w.Dom.closest(d, "Ul|OL", m.editor);
                      if (p) {
                        var h = p.nextSibling;
                        h && h.nodeName === p.nodeName && p !== h && (w.Dom.moveContent(h, p, !t3), w.Dom.safeRemove(h));
                      }
                    }
                    return g(a), false;
                  }
                } finally {
                  if (i.parentNode && i.nodeValue === y.INVISIBLE_SPACE) {
                    var v = i.parentNode;
                    w.Dom.safeRemove(i), !v.firstChild && v.parentNode && v !== m.editor && w.Dom.safeRemove(v);
                  }
                  r2 && w.Dom.isOrContains(m.editor, r2, true) && (f = m.selection.setCursorBefore(r2), w.Dom.safeRemove(r2), f && f.parentNode && (w.Dom.findInline(f, true, f.parentNode) || w.Dom.findInline(f, true, f.parentNode)) && w.Dom.safeRemove(f)), m.setEditorValue();
                }
                return false;
              }
            });
          };
        }, function(e, t, o) {
          "use strict";
          var r = this && this.__assign || function() {
            return (r = Object.assign || function(e2) {
              for (var t2, o2 = 1, n = arguments.length; o2 < n; o2++)
                for (var i in t2 = arguments[o2])
                  Object.prototype.hasOwnProperty.call(t2, i) && (e2[i] = t2[i]);
              return e2;
            }).apply(this, arguments);
          };
          Object.defineProperty(t, "__esModule", { value: true });
          var a = o(2);
          a.Config.prototype.controls.subscript = { tags: ["sub"], tooltip: "subscript" }, a.Config.prototype.controls.superscript = { tags: ["sup"], tooltip: "superscript" }, a.Config.prototype.controls.bold = { tagRegExp: /^(strong|b)$/i, tags: ["strong", "b"], css: { "font-weight": ["bold", "700"] }, tooltip: "Bold" }, a.Config.prototype.controls.italic = { tagRegExp: /^(em|i)$/i, tags: ["em", "i"], css: { "font-style": "italic" }, tooltip: "Italic" }, a.Config.prototype.controls.underline = { tagRegExp: /^(u)$/i, tags: ["u"], css: { "text-decoration": "underline" }, tooltip: "Underline" }, a.Config.prototype.controls.strikethrough = { tagRegExp: /^(s)$/i, tags: ["s"], css: { "text-decoration": "line-through" }, tooltip: "Strike through" }, t.bold = function(i) {
            var e2 = function(e3) {
              var t2 = a.Config.defaultOptions.controls[e3], o2 = r({}, t2.css), n = {};
              return Object.keys(o2).forEach(function(e4) {
                n[e4] = Array.isArray(o2[e4]) ? o2[e4][0] : o2[e4];
              }), i.selection.applyCSS(n, t2.tags ? t2.tags[0] : void 0, t2.css), i.events.fire("synchro"), false;
            };
            i.registerCommand("bold", { exec: e2, hotkeys: ["ctrl+b", "cmd+b"] }).registerCommand("italic", { exec: e2, hotkeys: ["ctrl+i", "cmd+i"] }).registerCommand("underline", { exec: e2, hotkeys: ["ctrl+u", "cmd+u"] }).registerCommand("strikethrough", { exec: e2 });
          };
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true });
          var n = o(2), l = o(1), v = o(1), m = o(0), g = o(3);
          n.Config.prototype.cleanHTML = { timeout: 300, removeEmptyElements: true, fillEmptyParagraph: true, replaceNBSP: true, cleanOnPaste: true, replaceOldTags: { i: "em", b: "strong" }, allowTags: false, denyTags: false }, n.Config.prototype.controls.eraser = { command: "removeFormat", tooltip: "Clear Formatting" }, t.cleanHtml = function(d) {
            d.options.cleanHTML.cleanOnPaste && d.events.on("processPaste", function(e3, t2) {
              return g.cleanFromWord(t2);
            });
            var u, r = /([^\[]*)\[([^\]]+)]/, a = /[\s]*,[\s]*/, s = /^(.*)[\s]*=[\s]*(.*)$/, e2 = function(t2) {
              var i = {};
              return typeof t2 == "string" ? (t2.split(a).map(function(e3) {
                e3 = g.trim(e3);
                var t3 = r.exec(e3), o2 = {};
                if (t3) {
                  var n2 = t3[2].split(a);
                  t3[1] && (n2.forEach(function(e4) {
                    e4 = g.trim(e4);
                    var t4 = s.exec(e4);
                    t4 ? o2[t4[1]] = t4[2] : o2[e4] = true;
                  }), i[t3[1].toUpperCase()] = o2);
                } else
                  i[e3.toUpperCase()] = true;
              }), i) : !!t2 && (Object.keys(t2).forEach(function(e3) {
                i[e3.toUpperCase()] = t2[e3];
              }), i);
            }, f = e2(d.options.cleanHTML.allowTags), p = e2(d.options.cleanHTML.denyTags), h = function(e3, t2) {
              t2 === void 0 && (t2 = false);
              for (var o2 = t2 ? e3.nextSibling : e3.previousSibling; o2; ) {
                if (o2.nodeType === Node.ELEMENT_NODE || !m.Dom.isEmptyTextNode(o2))
                  return true;
                o2 = t2 ? o2.nextSibling : o2.previousSibling;
              }
              return false;
            };
            d.events.on("change afterSetMode afterInit mousedown keydown", g.debounce(function() {
              if (!d.isDestructed && d.isEditorMode()) {
                u = d.selection.current();
                var e3 = null, r2 = false, a2 = 0, s2 = [], t2 = d.options.cleanHTML.replaceOldTags;
                if (t2 && u) {
                  var o2 = Object.keys(t2).join("|");
                  if (d.selection.isCollapsed()) {
                    var n2 = m.Dom.closest(u, o2, d.editor);
                    if (n2) {
                      var i = d.selection.save(), l2 = t2[n2.nodeName.toLowerCase()] || t2[n2.nodeName];
                      m.Dom.replace(n2, l2, true, false, d.editorDocument), d.selection.restore(i);
                    }
                  }
                }
                var c = function(t3) {
                  if (t3) {
                    if ((i2 = t3).nodeType !== Node.TEXT_NODE && (f && !f[i2.nodeName] || p && p[i2.nodeName]) || u && i2.nodeName === "BR" && h(i2) && !h(i2, true) && m.Dom.up(i2, function(e5) {
                      return m.Dom.isBlock(e5, d.editorWindow);
                    }, d.editor) !== m.Dom.up(u, function(e5) {
                      return m.Dom.isBlock(e5, d.editorWindow);
                    }, d.editor) || d.options.cleanHTML.removeEmptyElements && u !== false && i2.nodeType === Node.ELEMENT_NODE && i2.nodeName.match(v.IS_INLINE) !== null && !d.selection.isMarker(i2) && g.trim(i2.innerHTML).length === 0 && !m.Dom.isOrContains(i2, u))
                      return s2.push(t3), c(t3.nextSibling);
                    if (d.options.cleanHTML.fillEmptyParagraph && m.Dom.isBlock(t3, d.editorWindow) && m.Dom.isEmpty(t3, /^(img|svg|canvas|input|textarea|form|br)$/)) {
                      var e4 = d.create.inside.element("br");
                      t3.appendChild(e4);
                    }
                    if (f && f[t3.nodeName] !== true) {
                      var o3 = t3.attributes;
                      if (o3 && o3.length) {
                        var n3 = [];
                        for (a2 = 0; a2 < o3.length; a2 += 1)
                          (!f[t3.nodeName][o3[a2].name] || f[t3.nodeName][o3[a2].name] !== true && f[t3.nodeName][o3[a2].name] !== o3[a2].value) && n3.push(o3[a2].name);
                        n3.length && (r2 = true), n3.forEach(function(e5) {
                          t3.removeAttribute(e5);
                        });
                      }
                    }
                    c(t3.firstChild), c(t3.nextSibling);
                  }
                  var i2;
                };
                d.editor.firstChild && (e3 = d.editor.firstChild), c(e3), s2.forEach(m.Dom.safeRemove), (s2.length || r2) && d.events && d.events.fire("syncho");
              }
            }, d.options.cleanHTML.timeout)).on("keyup", function() {
              if (!d.options.readonly) {
                var t2 = d.selection.current();
                if (t2) {
                  var e3 = m.Dom.up(t2, function(e4) {
                    return m.Dom.isBlock(e4, d.editorWindow);
                  }, d.editor);
                  e3 && m.Dom.all(e3, function(e4) {
                    e4 && e4.nodeType === Node.TEXT_NODE && e4.nodeValue !== null && l.INVISIBLE_SPACE_REG_EXP.test(e4.nodeValue) && e4.nodeValue.replace(l.INVISIBLE_SPACE_REG_EXP, "").length !== 0 && (e4.nodeValue = e4.nodeValue.replace(l.INVISIBLE_SPACE_REG_EXP, ""), e4 === t2 && d.selection.isCollapsed() && d.selection.setCursorAfter(e4));
                  });
                }
              }
            }).on("afterCommand", function(e3) {
              var t2, o2, n2 = d.selection;
              switch (e3.toLowerCase()) {
                case "inserthorizontalrule":
                  (t2 = d.editor.querySelector("hr[id=null]")) && ((o2 = m.Dom.next(t2, function(e4) {
                    return m.Dom.isBlock(e4, d.editorWindow);
                  }, d.editor, false)) || (o2 = d.create.inside.element(d.options.enter)) && m.Dom.after(t2, o2), n2.setCursorIn(o2));
                  break;
                case "removeformat":
                  o2 = n2.current();
                  var i = function(t3) {
                    switch (t3.nodeType) {
                      case Node.ELEMENT_NODE:
                        m.Dom.each(t3, i), t3.nodeName === "FONT" ? m.Dom.unwrap(t3) : ([].slice.call(t3.attributes).forEach(function(e4) {
                          ["src", "href", "rel", "content"].indexOf(e4.name.toLowerCase()) == -1 && t3.removeAttribute(e4.name);
                        }), g.normalizeNode(t3));
                        break;
                      case Node.TEXT_NODE:
                        d.options.cleanHTML.replaceNBSP && t3.nodeType === Node.TEXT_NODE && t3.nodeValue !== null && t3.nodeValue.match(l.SPACE_REG_EXP) && (t3.nodeValue = t3.nodeValue.replace(l.SPACE_REG_EXP, " "));
                        break;
                      default:
                        m.Dom.safeRemove(t3);
                    }
                  };
                  if (n2.isCollapsed())
                    for (; o2 && o2.nodeType !== Node.ELEMENT_NODE && o2 !== d.editor; )
                      i(o2), o2 && (o2 = o2.parentNode);
                  else
                    d.selection.eachSelection(function(e4) {
                      i(e4);
                    });
              }
            });
          };
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true });
          var n = o(2), i = o(14), c = i.Widget.TabsWidget, d = i.Widget.ColorPickerWidget, u = o(0), f = o(3);
          n.Config.prototype.controls.brush = { isActive: function(t2, e2, o2) {
            if (!o2)
              return true;
            var n2 = t2.selection.current(), i2 = o2.container.querySelector("svg");
            if (n2) {
              var r = u.Dom.closest(n2, function(e3) {
                return u.Dom.isBlock(e3, t2.editorWindow) || e3 && u.Dom.isNode(e3, t2.editorWindow) && e3.nodeType === Node.ELEMENT_NODE;
              }, t2.editor) || t2.editor, a = "" + f.css(r, "color"), s = "" + f.css(r, "background-color");
              if (a !== "" + f.css(t2.editor, "color"))
                return i2 && (i2.style.fill = a), true;
              if (s !== "" + f.css(t2.editor, "background-color"))
                return i2 && (i2.style.fill = s), true;
            }
            return i2 && i2.style.fill && (i2.style.fill = null), false;
          }, popup: function(t2, e2, o2, n2) {
            var i2 = "", r = "", a = null;
            e2 && e2 !== t2.editor && u.Dom.isNode(e2, t2.editorWindow) && e2.nodeType === Node.ELEMENT_NODE && (i2 = "" + f.css(e2, "color"), r = "" + f.css(e2, "background-color"), a = e2);
            var s = d(t2, function(e3) {
              a ? a.style.backgroundColor = e3 : t2.execCommand("background", false, e3), n2();
            }, r), l = d(t2, function(e3) {
              a ? a.style.color = e3 : t2.execCommand("forecolor", false, e3), n2();
            }, i2);
            return c(t2, t2.options.colorPickerDefaultTab === "background" ? { Background: s, Text: l } : { Text: l, Background: s }, a);
          }, tooltip: "Fill color or set the text color" }, t.color = function(i2) {
            var e2 = function(e3, t2, o2) {
              var n2 = f.normalizeColor(o2);
              switch (e3) {
                case "background":
                  i2.selection.applyCSS({ backgroundColor: n2 || "" });
                  break;
                case "forecolor":
                  i2.selection.applyCSS({ color: n2 || "" });
              }
              return i2.setEditorValue(), false;
            };
            i2.registerCommand("forecolor", e2).registerCommand("background", e2);
          };
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true });
          var n = o(2), d = o(0), u = o(3), f = "copyformat", p = ["fontWeight", "fontStyle", "fontSize", "color", "margin", "padding", "borderWidth", "borderStyle", "borderColor", "borderRadius", "backgroundColor", "textDecorationLine", "fontFamily"], h = function(e2, t2, o2, n2) {
            var i = u.css(o2, t2);
            return i === n2[t2] && (i = o2.parentNode && o2 !== e2.editor && o2.parentNode !== e2.editor ? h(e2, t2, o2.parentNode, n2) : void 0), i;
          };
          n.Config.prototype.controls.copyformat = { exec: function(t2, e2) {
            if (e2)
              if (t2.buffer[f])
                t2.buffer[f] = false, t2.events.off(t2.editor, "mouseup." + f);
              else {
                var o2 = {}, n2 = d.Dom.up(e2, function(e3) {
                  return e3 && e3.nodeType !== Node.TEXT_NODE;
                }, t2.editor) || t2.editor, i = t2.create.inside.span();
                t2.editor.appendChild(i), p.forEach(function(e3) {
                  o2[e3] = u.css(i, e3);
                }), i !== t2.editor && d.Dom.safeRemove(i);
                var r = (a = t2, l = o2, c = {}, (s = n2) && p.forEach(function(e3) {
                  c[e3] = h(a, e3, s, l), e3.match(/border(Style|Color)/) && !c.borderWidth && (c[e3] = void 0);
                }), c);
                t2.events.on(t2.editor, "mouseup." + f, function() {
                  t2.buffer[f] = false;
                  var e3 = t2.selection.current();
                  e3 && (e3.nodeName === "IMG" ? u.css(e3, r) : t2.selection.applyCSS(r)), t2.events.off(t2.editor, "mouseup." + f);
                }), t2.buffer[f] = true;
              }
            var a, s, l, c;
          }, isActive: function(e2) {
            return !!e2.buffer[f];
          }, tooltip: "Paint format" };
        }, function(e, g, t) {
          "use strict";
          Object.defineProperty(g, "__esModule", { value: true });
          var b = t(1), _ = t(0), y = t(3);
          g.insertParagraph = function(e2, t2, o, n) {
            var i = e2.create.inside.element(o), r = e2.create.inside.element("br");
            i.appendChild(r), n && n.cssText && i.setAttribute("style", n.cssText), e2.selection.insertNode(i, false, false), e2.selection.setCursorBefore(r);
            var a = e2.editorDocument.createRange();
            return a.setStartBefore(o.toLowerCase() !== "br" ? r : i), a.collapse(true), e2.selection.selectRange(a), _.Dom.safeRemove(t2), y.scrollIntoView(i, e2.editor, e2.editorDocument), e2.events && e2.events.fire("synchro"), i;
          }, g.enter = function(m) {
            m.options.enterBlock || (m.options.enterBlock = m.options.enter.toLowerCase() === "br" ? b.PARAGRAPH : m.options.enter.toLowerCase()), m.events.on("keydown", function(e2) {
              if (e2.which === b.KEY_ENTER) {
                var t2 = m.events.fire("beforeEnter", e2);
                if (t2 !== void 0)
                  return t2;
                m.selection.isCollapsed() || m.execCommand("Delete"), m.selection.focus();
                var o = m.selection.current(false), n = m.editorWindow.getSelection(), i = n.rangeCount ? n.getRangeAt(0) : m.editorDocument.createRange();
                o && o !== m.editor || (m.selection.current(), o = m.create.inside.text(b.INVISIBLE_SPACE), n.rangeCount ? i.insertNode(o) : m.editor.appendChild(o), i.selectNode(o), i.collapse(false), n.removeAllRanges(), n.addRange(i));
                var r = !!o && _.Dom.up(o, function(e3) {
                  return _.Dom.isBlock(e3, m.editorWindow);
                }, m.editor), a = r && r.nodeName === "LI";
                if (!a && (m.options.enter.toLowerCase() === b.BR.toLowerCase() || e2.shiftKey || _.Dom.closest(o, "PRE|BLOCKQUOTE", m.editor))) {
                  var s = m.create.inside.element("br");
                  return m.selection.insertNode(s, true), y.scrollIntoView(s, m.editor, m.editorDocument), false;
                }
                if (!r && o && !_.Dom.prev(o, function(e3) {
                  return _.Dom.isBlock(e3, m.editorWindow) || !!e3 && _.Dom.isImage(e3, m.editorWindow);
                }, m.editor)) {
                  var l = o;
                  if (_.Dom.up(l, function(e3) {
                    e3 && e3.hasChildNodes() && e3 !== m.editor && (l = e3);
                  }, m.editor), r = _.Dom.wrapInline(l, m.options.enter, m), _.Dom.isEmpty(r)) {
                    var c = m.editorDocument.createElement("br");
                    r.appendChild(c), m.selection.setCursorBefore(c);
                  }
                  i = n.rangeCount ? n.getRangeAt(0) : m.editorDocument.createRange();
                }
                var d = false, u = false;
                if (r) {
                  if (!_.Dom.canSplitBlock(r, m.editorWindow))
                    return s = m.create.inside.element("br"), m.selection.insertNode(s, false), m.selection.setCursorAfter(s), false;
                  if (a && _.Dom.isEmpty(r)) {
                    var f = false, p = _.Dom.closest(r, "ol|ul", m.editor);
                    if (_.Dom.prev(r, function(e3) {
                      return e3 && e3.nodeName === "LI";
                    }, p))
                      if (_.Dom.next(r, function(e3) {
                        return e3 && e3.nodeName === "LI";
                      }, p)) {
                        (v = m.editorDocument.createRange()).setStartBefore(p), v.setEndAfter(r);
                        var h = v.extractContents();
                        p.parentNode && p.parentNode.insertBefore(h, p), f = m.selection.setCursorBefore(p);
                      } else
                        f = m.selection.setCursorAfter(p);
                    else
                      f = m.selection.setCursorBefore(p);
                    return _.Dom.safeRemove(r), g.insertParagraph(m, f, m.options.enter), y.$$("li", p).length || _.Dom.safeRemove(p), false;
                  }
                  if (m.selection.cursorInTheEdge(true, r))
                    return d = m.selection.setCursorBefore(r), g.insertParagraph(m, d, a ? "li" : m.options.enter, r.style), r && m.selection.setCursorIn(r, true), false;
                  var v;
                  m.selection.cursorInTheEdge(false, r) === false ? ((v = m.editorDocument.createRange()).setStartBefore(r), v.setEnd(i.startContainer, i.startOffset), h = v.extractContents(), r.parentNode && r.parentNode.insertBefore(h, r), m.selection.setCursorIn(r, true)) : d = m.selection.setCursorAfter(r);
                } else
                  u = true;
                return (u || d) && g.insertParagraph(m, d, a ? "li" : m.options.enter, r ? r.style : void 0), false;
              }
            });
          };
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true });
          var n = o(2), s = o(0), l = o(4), c = o(3);
          n.Config.prototype.showMessageErrors = true, n.Config.prototype.showMessageErrorTime = 3e3, n.Config.prototype.showMessageErrorOffsetPx = 3, t.errorMessages = function(i) {
            if (i.options.showMessageErrors) {
              var t2, r = i.create.div("jodit_error_box_for_messages"), a = function() {
                t2 = 5, Array.from(r.childNodes).forEach(function(e2) {
                  c.css(r, "bottom", t2 + "px"), t2 += e2.offsetWidth + i.options.showMessageErrorOffsetPx;
                });
              };
              i.workplace.appendChild(r), i.events.on("beforeDestruct", function() {
                s.Dom.safeRemove(r);
              }).on("errorMessage", function(e2, t3, o2) {
                var n2 = i.create.div("active " + (t3 || ""), e2);
                r.appendChild(n2), a(), l.setTimeout(function() {
                  n2.classList.remove("active"), l.setTimeout(function() {
                    s.Dom.safeRemove(n2), a();
                  }, 300);
                }, o2 || i.options.showMessageErrorTime);
              });
            }
          };
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true });
          var n = o(2), a = o(0), s = o(3);
          n.Config.prototype.controls.fontsize = { command: "fontSize", list: ["8", "9", "10", "11", "12", "14", "16", "18", "24", "30", "36", "48", "60", "72", "96"], template: function(e2, t2, o2) {
            return o2;
          }, tooltip: "Font size", isActiveChild: function(t2, e2) {
            var o2 = t2.selection.current();
            if (o2) {
              var n2 = a.Dom.closest(o2, function(e3) {
                return a.Dom.isBlock(e3, t2.editorWindow) || e3 && a.Dom.isNode(e3, t2.editorWindow) && e3.nodeType === Node.ELEMENT_NODE;
              }, t2.editor) || t2.editor, i = s.css(n2, "font-size");
              return !(!i || !e2.args || "" + e2.args[1] != "" + i);
            }
            return false;
          }, isActive: function(t2) {
            var e2 = t2.selection.current();
            if (e2) {
              var o2 = a.Dom.closest(e2, function(e3) {
                return a.Dom.isBlock(e3, t2.editorWindow) || e3 && a.Dom.isNode(e3, t2.editorWindow) && e3.nodeType === Node.ELEMENT_NODE;
              }, t2.editor) || t2.editor;
              return "" + s.css(o2, "font-size") != "" + s.css(t2.editor, "font-size");
            }
            return false;
          } }, n.Config.prototype.controls.font = { command: "fontname", exec: function(e2, t2, o2) {
            e2.execCommand(o2.command, false, o2.args ? o2.args[0] : void 0);
          }, list: { "Helvetica,sans-serif": "Helvetica", "Arial,Helvetica,sans-serif": "Arial", "Georgia,serif": "Georgia", "Impact,Charcoal,sans-serif": "Impact", "Tahoma,Geneva,sans-serif": "Tahoma", "'Times New Roman',Times,serif": "Times New Roman", "Verdana,Geneva,sans-serif": "Verdana" }, template: function(e2, t2, o2) {
            return '<span style="font-family: ' + t2 + '">' + o2 + "</span>";
          }, isActiveChild: function(t2, e2) {
            var o2 = t2.selection.current(), n2 = function(e3) {
              return e3.toLowerCase().replace(/['"]+/g, "").replace(/[^a-z0-9]+/g, ",");
            };
            if (o2) {
              var i = a.Dom.closest(o2, function(e3) {
                return a.Dom.isBlock(e3, t2.editorWindow) || e3 && a.Dom.isNode(e3, t2.editorWindow) && e3.nodeType === Node.ELEMENT_NODE;
              }, t2.editor) || t2.editor, r = "" + s.css(i, "font-family");
              return !(!r || !e2.args || n2("" + e2.args[0]) !== n2(r));
            }
            return false;
          }, isActive: function(t2) {
            var e2 = t2.selection.current();
            if (e2) {
              var o2 = a.Dom.closest(e2, function(e3) {
                return a.Dom.isBlock(e3, t2.editorWindow) || a.Dom.isNode(e3, t2.editorWindow) && e3 && e3.nodeType === Node.ELEMENT_NODE;
              }, t2.editor) || t2.editor;
              return "" + s.css(o2, "font-family") != "" + s.css(t2.editor, "font-family");
            }
            return false;
          }, tooltip: "Font family" }, t.font = function(n2) {
            var e2 = function(e3, t2, o2) {
              switch (e3) {
                case "fontsize":
                  n2.selection.applyCSS({ fontSize: s.normalizeSize(o2) });
                  break;
                case "fontname":
                  n2.selection.applyCSS({ fontFamily: o2 });
              }
              return n2.events.fire("synchro"), false;
            };
            n2.registerCommand("fontsize", e2).registerCommand("fontname", e2);
          };
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true });
          var n = o(2), a = o(1), s = o(0);
          n.Config.prototype.controls.paragraph = { command: "formatBlock", getLabel: function(t2, e2, o2) {
            var n2 = t2.selection.current();
            if (n2 && t2.options.textIcons) {
              var i = (s.Dom.closest(n2, function(e3) {
                return s.Dom.isBlock(e3, t2.editorWindow);
              }, t2.editor) || t2.editor).nodeName.toLowerCase();
              o2 && e2.data && e2.data.currentValue !== i && e2.list && e2.list[i] && (o2.textBox.innerHTML = "<span>" + e2.list[i] + "</span>", o2.textBox.firstChild.classList.add("jodit_icon"), e2.data.currentValue = i);
            }
            return false;
          }, exec: function(e2, t2, o2) {
            e2.execCommand(o2.command, false, o2.args ? o2.args[0] : void 0);
          }, data: { currentValue: "left" }, list: { p: "Normal", h1: "Heading 1", h2: "Heading 2", h3: "Heading 3", h4: "Heading 4", blockquote: "Quote" }, isActiveChild: function(t2, e2) {
            var o2 = t2.selection.current();
            if (o2) {
              var n2 = s.Dom.closest(o2, function(e3) {
                return s.Dom.isBlock(e3, t2.editorWindow);
              }, t2.editor);
              return n2 && n2 !== t2.editor && e2.args !== void 0 && n2.nodeName.toLowerCase() === e2.args[0];
            }
            return false;
          }, isActive: function(t2, e2) {
            var o2 = t2.selection.current();
            if (o2) {
              var n2 = s.Dom.closest(o2, function(e3) {
                return s.Dom.isBlock(e3, t2.editorWindow);
              }, t2.editor);
              return n2 && n2 !== t2.editor && e2.list !== void 0 && n2.nodeName.toLowerCase() !== "p" && e2.list[n2.nodeName.toLowerCase()] !== void 0;
            }
            return false;
          }, template: function(e2, t2, o2) {
            return "<" + t2 + ' class="jodit_list_element"><span>' + e2.i18n(o2) + "</span></" + t2 + "></li>";
          }, tooltip: "Insert format block" }, t.formatBlock = function(r) {
            r.registerCommand("formatblock", function(e2, t2, n2) {
              r.selection.focus();
              var i = false;
              if (r.selection.eachSelection(function(e3) {
                var t3 = r.selection.save(), o3 = !!e3 && s.Dom.up(e3, function(e4) {
                  return s.Dom.isBlock(e4, r.editorWindow);
                }, r.editor);
                o3 && o3.nodeName !== "LI" || !e3 || (o3 = s.Dom.wrapInline(e3, r.options.enter, r)), o3 && (o3.tagName.match(/TD|TH|TBODY|TABLE|THEAD/i) ? r.selection.isCollapsed() ? s.Dom.wrapInline(e3, n2, r) : r.selection.applyCSS({}, n2) : n2 === r.options.enterBlock.toLowerCase() && o3.parentNode && o3.parentNode.nodeName === "LI" ? s.Dom.unwrap(o3) : s.Dom.replace(o3, n2, true, false, r.editorDocument), i = true), r.selection.restore(t3);
              }), !i) {
                var o2 = r.editorDocument.createElement(n2);
                o2.innerHTML = a.INVISIBLE_SPACE, r.selection.insertNode(o2, false), r.selection.setCursorIn(o2);
              }
              return r.setEditorValue(), false;
            });
          };
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true });
          var n = o(2), i = o(1), s = o(3), r = o(5);
          n.Config.prototype.fullsize = false, n.Config.prototype.globalFullsize = true, n.Config.prototype.controls.fullsize = { exec: function(e2) {
            e2.toggleFullSize();
          }, isActive: function(e2) {
            return e2.isFullSize();
          }, getLabel: function(e2, t2, o2) {
            var n2 = e2.isFullSize() ? "shrink" : "fullsize";
            o2 && (o2.textBox.innerHTML = e2.options.textIcons ? "<span>" + e2.i18n(n2) + "</span>" : r.ToolbarIcon.getIcon(n2), o2.textBox.firstChild.classList.add("jodit_icon"));
          }, tooltip: "Open editor in fullsize", mode: i.MODE_SOURCE + i.MODE_WYSIWYG }, t.fullsize = function(o2) {
            var n2 = false, e2 = 0, t2 = 0, i2 = false, r2 = function() {
              o2.events && (n2 ? (e2 = s.css(o2.container, "height"), t2 = s.css(o2.container, "width"), s.css(o2.container, { height: o2.ownerWindow.innerHeight, width: o2.ownerWindow.innerWidth }), i2 = true) : i2 && s.css(o2.container, { height: e2 || "auto", width: t2 || "auto" }));
            }, a = function(e3) {
              if (o2.container) {
                if (e3 === void 0 && (e3 = !o2.container.classList.contains("jodit_fullsize")), o2.options.fullsize = !!e3, o2.container.classList.toggle("jodit_fullsize", n2 = e3), o2.toolbar && s.css(o2.toolbar.container, "width", "auto"), o2.options.globalFullsize) {
                  for (var t3 = o2.container.parentNode; t3 && !(t3 instanceof Document); )
                    t3.classList.toggle("jodit_fullsize_box", e3), t3 = t3.parentNode;
                  r2();
                }
                o2.events.fire("afterResize");
              }
            };
            o2.options.globalFullsize && o2.events.on(o2.ownerWindow, "resize", r2), o2.events.on("afterInit afterOpen", function() {
              o2.toggleFullSize(o2.options.fullsize);
            }).on("toggleFullSize", a).on("beforeDestruct beforeClose", function() {
              a(false);
            });
          };
        }, function(e, t, o) {
          "use strict";
          var n = this && this.__awaiter || function(r2, a2, s2, l2) {
            return new (s2 || (s2 = Promise))(function(e2, t2) {
              function o2(e3) {
                try {
                  i2(l2.next(e3));
                } catch (e4) {
                  t2(e4);
                }
              }
              function n2(e3) {
                try {
                  i2(l2.throw(e3));
                } catch (e4) {
                  t2(e4);
                }
              }
              function i2(t3) {
                t3.done ? e2(t3.value) : new s2(function(e3) {
                  e3(t3.value);
                }).then(o2, n2);
              }
              i2((l2 = l2.apply(r2, a2 || [])).next());
            });
          }, r = this && this.__generator || function(o2, n2) {
            var i2, r2, a2, e2, s2 = { label: 0, sent: function() {
              if (1 & a2[0])
                throw a2[1];
              return a2[1];
            }, trys: [], ops: [] };
            return e2 = { next: t2(0), throw: t2(1), return: t2(2) }, typeof Symbol == "function" && (e2[Symbol.iterator] = function() {
              return this;
            }), e2;
            function t2(t3) {
              return function(e3) {
                return function(t4) {
                  if (i2)
                    throw new TypeError("Generator is already executing.");
                  for (; s2; )
                    try {
                      if (i2 = 1, r2 && (a2 = 2 & t4[0] ? r2.return : t4[0] ? r2.throw || ((a2 = r2.return) && a2.call(r2), 0) : r2.next) && !(a2 = a2.call(r2, t4[1])).done)
                        return a2;
                      switch (r2 = 0, a2 && (t4 = [2 & t4[0], a2.value]), t4[0]) {
                        case 0:
                        case 1:
                          a2 = t4;
                          break;
                        case 4:
                          return s2.label++, { value: t4[1], done: false };
                        case 5:
                          s2.label++, r2 = t4[1], t4 = [0];
                          continue;
                        case 7:
                          t4 = s2.ops.pop(), s2.trys.pop();
                          continue;
                        default:
                          if (!(a2 = 0 < (a2 = s2.trys).length && a2[a2.length - 1]) && (t4[0] === 6 || t4[0] === 2)) {
                            s2 = 0;
                            continue;
                          }
                          if (t4[0] === 3 && (!a2 || a2[0] < t4[1] && t4[1] < a2[3])) {
                            s2.label = t4[1];
                            break;
                          }
                          if (t4[0] === 6 && s2.label < a2[1]) {
                            s2.label = a2[1], a2 = t4;
                            break;
                          }
                          if (a2 && s2.label < a2[2]) {
                            s2.label = a2[2], s2.ops.push(t4);
                            break;
                          }
                          a2[2] && s2.ops.pop(), s2.trys.pop();
                          continue;
                      }
                      t4 = n2.call(o2, s2);
                    } catch (e4) {
                      t4 = [6, e4], r2 = 0;
                    } finally {
                      i2 = a2 = 0;
                    }
                  if (5 & t4[0])
                    throw t4[1];
                  return { value: t4[0] ? t4[1] : void 0, done: true };
                }([t3, e3]);
              };
            }
          };
          Object.defineProperty(t, "__esModule", { value: true });
          var i = o(2), a = o(52), s = o(4), l = o(8);
          i.Config.prototype.iframeBaseUrl = "", i.Config.prototype.iframeDefaultSrc = "about:blank", i.Config.prototype.iframeStyle = 'html{margin: 0px;min-height: 100%;}body{box-sizing: border-box;font-size: 13px;    line-height: 1.6;padding:10px;background:transparent;color:#000;position:relative;z-index: 2;user-select:auto;margin:0px;overflow:auto;}table{width:100%;border: none;border-collapse:collapse;empty-cells: show;max-width: 100%;}th,td{padding: 2px 5px;border:1px solid #ccc;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}td[data-jodit-selected-cell],th[data-jodit-selected-cell]{border: 1px double #1e88e5}p{margin-top:0;}.jodit_editor .jodit_iframe_wrapper{display: block;clear: both;user-select: none;position: relative;}.jodit_editor .jodit_iframe_wrapper:after {position:absolute;content:"";z-index:1;top:0;left:0;right: 0;bottom: 0;cursor: pointer;display: block;background: rgba(0, 0, 0, 0);} .jodit_disabled{user-select: none;-o-user-select: none;-moz-user-select: none;-khtml-user-select: none;-webkit-user-select: none;-ms-user-select: none}', i.Config.prototype.iframeCSSLinks = [], t.iframe = function(i2) {
            var e2 = this;
            i2.events.on("afterSetMode", function() {
              i2.isEditorMode() && i2.selection.focus();
            }).on("generateDocumentStructure.iframe", function(e3, t2) {
              var o2 = e3 || t2.iframe.contentWindow.document;
              if (o2.open(), o2.write('<!DOCTYPE html><html dir="' + t2.options.direction + '" class="jodit" lang="' + a.defaultLanguage(t2.options.language) + '"><head><title>Jodit Editor</title>' + (t2.options.iframeBaseUrl ? '<base href="' + t2.options.iframeBaseUrl + '"/>' : "") + '</head><body class="jodit_wysiwyg" style="outline:none" contenteditable="true"></body></html>'), o2.close(), t2.options.iframeCSSLinks && t2.options.iframeCSSLinks.forEach(function(e4) {
                var t3 = o2.createElement("link");
                t3.setAttribute("rel", "stylesheet"), t3.setAttribute("href", e4), o2.head && o2.head.appendChild(t3);
              }), t2.options.iframeStyle) {
                var n2 = o2.createElement("style");
                n2.innerHTML = t2.options.iframeStyle, o2.head && o2.head.appendChild(n2);
              }
            }).on("createEditor", function() {
              return n(e2, void 0, void 0, function() {
                var o2, n2;
                return r(this, function(e3) {
                  switch (e3.label) {
                    case 0:
                      return i2.options.iframe ? (delete i2.editor, i2.iframe = i2.ownerDocument.createElement("iframe"), i2.iframe.style.display = "block", i2.iframe.src = "about:blank", i2.iframe.className = "jodit_wysiwyg_iframe", i2.iframe.setAttribute("allowtransparency", "true"), i2.iframe.setAttribute("tabindex", "0"), i2.iframe.setAttribute("frameborder", "0"), i2.workplace.appendChild(i2.iframe), [4, i2.events.fire("generateDocumentStructure.iframe", null, i2)]) : [2];
                    case 1:
                      return e3.sent(), i2.editorDocument = o2 = i2.iframe.contentWindow.document, i2.editorWindow = i2.iframe.contentWindow, i2.editor = o2.body, i2.options.height === "auto" && (o2.documentElement && (o2.documentElement.style.overflowY = "hidden"), n2 = s.throttle(function() {
                        i2.editor && i2.iframe && i2.options.height === "auto" && l.css(i2.iframe, "height", i2.editor.offsetHeight);
                      }, i2.defaultTimeout / 2), i2.events.on("change afterInit afterSetMode resize", n2).on([i2.iframe, i2.editorWindow, o2.documentElement], "load", n2).on(o2, "readystatechange DOMContentLoaded", n2)), (t2 = i2.editorWindow.Element.prototype).matches || (t2.matches = Element.prototype.matches), i2.editorDocument.documentElement && i2.events.on(i2.editorDocument.documentElement, "mousedown touchend", function() {
                        i2.selection.isFocused() || (i2.selection.focus(), i2.selection.setCursorIn(i2.editor));
                      }).on(i2.editorWindow, "mousedown touchstart keydown keyup touchend click mouseup mousemove scroll", function(e4) {
                        i2.events && i2.events.fire && i2.events.fire(i2.ownerWindow, e4);
                      }), [2, false];
                  }
                  var t2;
                });
              });
            });
          };
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true });
          var n = o(2), s = o(1), l = o(0);
          n.Config.prototype.controls.indent = { tooltip: "Increase Indent" }, n.Config.prototype.controls.outdent = { isDisable: function(t2) {
            var e2 = t2.selection.current();
            if (e2) {
              var o2 = l.Dom.closest(e2, function(e3) {
                return l.Dom.isBlock(e3, t2.editorWindow);
              }, t2.editor);
              if (o2 && o2.style && o2.style.marginLeft)
                return parseInt(o2.style.marginLeft, 10) <= 0;
            }
            return true;
          }, tooltip: "Decrease Indent" }, n.Config.prototype.indentMargin = 10, t.indent = function(a) {
            var e2 = function(r) {
              return a.selection.eachSelection(function(e3) {
                var t2 = a.selection.save(), o2 = !!e3 && l.Dom.up(e3, function(e4) {
                  return l.Dom.isBlock(e4, a.editorWindow);
                }, a.editor), n2 = a.options.enter;
                if (!o2 && e3 && (o2 = l.Dom.wrapInline(e3, n2 !== s.BR ? n2 : s.PARAGRAPH, a)), !o2)
                  return a.selection.restore(t2), false;
                if (o2 && o2.style) {
                  var i = o2.style.marginLeft ? parseInt(o2.style.marginLeft, 10) : 0;
                  o2.style.marginLeft = 0 < (i += a.options.indentMargin * (r === "outdent" ? -1 : 1)) ? i + "px" : "", o2.getAttribute("style") || o2.removeAttribute("style");
                }
                a.selection.restore(t2);
              }), a.setEditorValue(), false;
            };
            a.registerCommand("indent", { exec: e2, hotkeys: ["ctrl+]", "cmd+]"] }), a.registerCommand("outdent", { exec: e2, hotkeys: ["ctrl+[", "cmd+["] });
          };
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true });
          var n = o(3), i = "__jodit_imageprocessor_binded";
          t.imageProcessor = function(o2) {
            o2.events.on("change afterInit", n.debounce(function() {
              o2.editor && n.$$("img", o2.editor).forEach(function(t2) {
                t2[i] || (t2[i] = true, t2.complete || t2.addEventListener("load", function e2() {
                  o2.events && o2.events.fire && o2.events.fire("resize"), t2.removeEventListener("load", e2);
                }), o2.events.on(t2, "mousedown touchstart", function() {
                  o2.selection.select(t2);
                }));
              });
            }, o2.defaultTimeout));
          };
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true });
          var n = o(2), T = o(18), S = o(0), x = o(3), I = o(5), i = o(14), D = i.Widget.TabsWidget, k = i.Widget.FileSelectorWidget, L = o(27);
          n.Config.prototype.image = { openOnDblClick: true, editSrc: true, useImageEditor: true, editTitle: true, editAlt: true, editLink: true, editSize: true, editBorderRadius: true, editMargins: true, editClass: true, editStyle: true, editId: true, editAlign: true, showPreview: true, selectImageAfterClose: true }, t.imageProperties = function(E) {
            var t2 = function(e2) {
              var t3 = this;
              if (!E.options.readonly) {
                e2 && e2.stopImmediatePropagation();
                var o2, n2 = E.create.fromHTML.bind(E.create), r = this, i2 = new T.Dialog(E), a = n2('<a href="javascript:void(0)" style="float:right;" class="jodit_button">' + I.ToolbarIcon.getIcon("cancel") + "<span>" + E.i18n("Cancel") + "</span></a>"), s = n2('<a href="javascript:void(0)" style="float:left;" class="jodit_button">' + I.ToolbarIcon.getIcon("check") + "<span>" + E.i18n("Ok") + "</span></a>"), l = { remove: n2('<a href="javascript:void(0)" class="jodit_button">' + I.ToolbarIcon.getIcon("bin") + " " + E.i18n("Delete") + "</a>") }, c = n2('<form class="jodit_properties"><div class="jodit_grid"><div class="jodit_col-lg-2-5"><div class="jodit_properties_view_box"><div style="' + (E.options.image.showPreview ? "" : "display:none") + '" class="jodit_properties_image_view"><img class="imageViewSrc" src="" alt=""/></div><div style="' + (E.options.image.editSize ? "" : "display:none") + '" class="jodit_form_group jodit_properties_image_sizes"><input type="number" class="imageWidth"/><a class="jodit_lock_helper jodit_lock_size" href="javascript:void(0)">' + I.ToolbarIcon.getIcon("lock") + '</a><input type="number" class="imageHeight"/></div></div></div><div class="jodit_col-lg-3-5 tabsbox"></div></div></form>'), d = n2('<div style="' + (E.options.image.editMargins ? "" : "display:none") + '" class="jodit_form_group"><label>' + E.i18n("Margins") + '</label><div class="jodit_grid"><input class="jodit_col-lg-1-5 margins marginTop" data-id="marginTop" type="text" placeholder="' + E.i18n("top") + '"/><a style="text-align: center;" class="jodit_lock_helper jodit_lock_margin jodit_col-lg-1-5" href="javascript:void(0)">' + I.ToolbarIcon.getIcon("lock") + '</a><input disabled="true" class="jodit_col-lg-1-5 margins marginRight" data-id="marginRight" type="text" placeholder="' + E.i18n("right") + '"/><input disabled="true" class="jodit_col-lg-1-5 margins marginBottom" data-id="marginBottom" type="text" placeholder="' + E.i18n("bottom") + '"/><input disabled="true" class="jodit_col-lg-1-5 margins marginLeft" data-id="marginLeft" type="text" placeholder="' + E.i18n("left") + '"/></div></div><div style="' + (E.options.image.editStyle ? "" : "display:none") + '" class="jodit_form_group"><label>' + E.i18n("Styles") + '</label><input type="text" class="style"/></div><div style="' + (E.options.image.editClass ? "" : "display:none") + '" class="jodit_form_group"><label for="classes">' + E.i18n("Classes") + '</label><input type="text" class="classes"/></div><div style="' + (E.options.image.editId ? "" : "display:none") + '" class="jodit_form_group"><label for="id">Id</label><input type="text" class="id"/></div><div style="' + (E.options.image.editBorderRadius ? "" : "display:none") + '" class="jodit_form_group"><label for="border_radius">Border radius</label><input type="number" class="border_radius"/></div><div style="' + (E.options.image.editAlign ? "" : "display:none") + '" class="jodit_form_group"><label for="align">' + E.i18n("Align") + '</label><select class="select align"><option value="">' + E.i18n("--Not Set--") + '</option><option value="left">' + E.i18n("Left") + '</option><option value="center">' + E.i18n("Center") + '</option><option value="right">' + E.i18n("Right") + "</option></optgroup></select></div>"), u = n2('<div style="' + (E.options.image.editSrc ? "" : "display:none") + '" class="jodit_form_group"><label>' + E.i18n("Src") + '</label><div class="jodit_input_group"><input type="text" class="imageSrc"/>' + (E.options.filebrowser.ajax.url || E.options.uploader.url ? '<div class="jodit_input_group-buttons">' + (E.options.filebrowser.ajax.url || E.options.uploader.url ? '<a class="jodit_button jodit_rechange" href="javascript:void(0)">' + I.ToolbarIcon.getIcon("image") + "</a>" : "") + (E.options.image.useImageEditor && E.options.filebrowser.ajax.url ? '<a class="jodit_button jodit_use_image_editor" href="javascript:void(0)">' + I.ToolbarIcon.getIcon("crop") + "</a>" : "") + "</div>" : "") + '</div></div><div style="' + (E.options.image.editTitle ? "" : "display:none") + '" class="jodit_form_group"><label for="imageTitle">' + E.i18n("Title") + '</label><input type="text" class="imageTitle"/></div><div style="' + (E.options.image.editAlt ? "" : "display:none") + '" class="jodit_form_group"><label for="imageAlt">' + E.i18n("Alternative") + '</label><input type="text" class="imageAlt"/></div><div style="' + (E.options.image.editLink ? "" : "display:none") + '" class="jodit_form_group"><label for="imageLink">' + E.i18n("Link") + '</label><input type="text" class="imageLink"/></div><div style="' + (E.options.image.editLink ? "" : "display:none") + '" class="jodit_form_group"><input type="checkbox" class="imageLinkOpenInNewTab"/> ' + E.i18n("Open link in new tab") + "</div>"), f = r.naturalWidth / r.naturalHeight || 1, p = c.querySelector(".imageWidth"), h = c.querySelector(".imageHeight"), v = function() {
                  x.val(c, ".imageSrc", r.getAttribute("src") || "");
                  var e3 = c.querySelector(".imageViewSrc");
                  e3 && e3.setAttribute("src", r.getAttribute("src") || "");
                }, m = function() {
                  v(), function() {
                    r.hasAttribute("title") && x.val(c, ".imageTitle", r.getAttribute("title") || ""), r.hasAttribute("alt") && x.val(c, ".imageAlt", r.getAttribute("alt") || "");
                    var e3 = S.Dom.closest(r, "a", E.editor);
                    e3 && (x.val(c, ".imageLink", e3.getAttribute("href") || ""), c.querySelector(".imageLinkOpenInNewTab").checked = e3.getAttribute("target") === "_blank");
                  }(), p.value = "" + r.offsetWidth, h.value = "" + r.offsetHeight, function() {
                    if (E.options.image.editMargins) {
                      var n3 = false;
                      x.$$(".margins", c).forEach(function(e4) {
                        var t4 = e4.getAttribute("data-id") || "", o3 = r.style[t4];
                        o3 && (/^[0-9]+(px)?$/.test(o3) && (o3 = parseInt(o3, 10)), e4.value = "" + o3 || "", n3 || t4 === "marginTop" || e4.value === x.val(c, ".marginTop") || (n3 = true));
                      }), b = !n3;
                      var e3 = c.querySelector(".jodit_lock_margin");
                      e3 && (e3.innerHTML = I.ToolbarIcon.getIcon(b ? "lock" : "unlock")), x.$$(".margins:not(.marginTop)", c).forEach(function(e4) {
                        return b ? e4.setAttribute("disabled", "true") : e4.removeAttribute("disabled");
                      });
                    }
                  }(), x.val(c, ".classes", (r.getAttribute("class") || "").replace(/jodit_focused_image[\s]*/, "")), x.val(c, ".id", r.getAttribute("id") || ""), x.val(c, ".border_radius", "" + (parseInt(r.style.borderRadius || "0", 10) || "0")), r.style.cssFloat && ["left", "right"].indexOf(r.style.cssFloat.toLowerCase()) != -1 ? x.val(c, ".align", x.css(r, "float")) : x.css(r, "display") === "block" && r.style.marginLeft === "auto" && r.style.marginRight === "auto" && x.val(c, ".align", "center"), x.val(c, ".style", r.getAttribute("style") || "");
                }, g = true, b = true, _ = {}, y = c.querySelector(".tabsbox");
                _[E.i18n("Image")] = u, _[E.i18n("Advanced")] = d, y && y.appendChild(D(E, _)), m(), E.events.on(i2, "afterClose", function() {
                  i2.destruct(), r.parentNode && E.options.image.selectImageAfterClose && E.selection.select(r);
                }), l.remove.addEventListener("click", function() {
                  S.Dom.safeRemove(r), i2.close();
                }), E.options.image.useImageEditor && x.$$(".jodit_use_image_editor", u).forEach(function(e3) {
                  E.events.on(e3, "mousedown touchstart", function() {
                    var n3 = r.getAttribute("src") || "", i3 = E.create.element("a"), t4 = function() {
                      i3.host === location.host || T.Confirm(E.i18n("You can only edit your own images. Download this image on the host?"), function(e4) {
                        e4 && E.uploader && E.uploader.uploadRemoteImage("" + i3.href, function(e5) {
                          T.Alert(E.i18n("The image has been successfully uploaded to the host!"), function() {
                            typeof e5.newfilename == "string" && (r.setAttribute("src", e5.baseurl + e5.newfilename), v());
                          });
                        }, function(e5) {
                          T.Alert(E.i18n("There was an error loading %s", e5.message));
                        });
                      });
                    };
                    i3.href = n3, E.getInstance("FileBrowser").getPathByUrl("" + i3.href, function(e4, t5, o3) {
                      E.getInstance("FileBrowser").openImageEditor(i3.href, t5, e4, o3, function() {
                        var e5 = new Date().getTime();
                        r.setAttribute("src", n3 + (n3.indexOf("?") != -1 ? "" : "?") + "&_tmp=" + e5), v();
                      }, function(e5) {
                        T.Alert(e5.message);
                      });
                    }, function(e4) {
                      T.Alert(e4.message, t4);
                    });
                  });
                }), x.$$(".jodit_rechange", u).forEach(function(o3) {
                  o3.addEventListener("mousedown", function(e3) {
                    o3.classList.toggle("active");
                    var t4 = new L.Popup(E, o3);
                    t4.open(k(E, { upload: function(e4) {
                      e4.files && e4.files.length && r.setAttribute("src", e4.baseurl + e4.files[0]), m(), t4.close();
                    }, filebrowser: function(e4) {
                      e4 && e4.files && Array.isArray(e4.files) && e4.files.length && (r.setAttribute("src", e4.files[0]), t4.close(), m());
                    } }, r, t4.close), true), e3.stopPropagation();
                  });
                });
                var w = c.querySelector(".jodit_lock_helper.jodit_lock_size"), C = c.querySelector(".jodit_lock_helper.jodit_lock_margin");
                w && w.addEventListener("click", function() {
                  this.innerHTML = I.ToolbarIcon.getIcon((g = !g) ? "lock" : "unlock"), E.events.fire(p, "change");
                }), C && C.addEventListener("click", function() {
                  this.innerHTML = I.ToolbarIcon.getIcon((b = !b) ? "lock" : "unlock"), b ? x.$$(".margins", c).forEach(function(e3) {
                    e3.matches(".marginTop") || e3.setAttribute("disabled", "true");
                  }) : x.$$(".margins", c).forEach(function(e3) {
                    e3.matches(".marginTop") || e3.removeAttribute("disabled");
                  });
                });
                var j = function(e3) {
                  var t4 = parseInt(p.value, 10), o3 = parseInt(h.value, 10);
                  e3.target === p ? h.value = "" + Math.round(t4 / f) : p.value = "" + Math.round(o3 * f);
                };
                return E.events.on([p, h], "change keydown mousedown paste", function(e3) {
                  g && (E.defaultTimeout ? (clearTimeout(o2), o2 = x.setTimeout(j.bind(t3, e3), E.defaultTimeout)) : j(e3));
                }), i2.setTitle([E.i18n("Image properties"), l.remove]), i2.setContent(c), a.addEventListener("click", function() {
                  i2.close();
                }), s.addEventListener("click", function() {
                  if (E.options.image.editStyle && (x.val(c, ".style") ? r.setAttribute("style", x.val(c, ".style")) : r.removeAttribute("style")), !x.val(c, ".imageSrc"))
                    return S.Dom.safeRemove(r), void i2.close();
                  r.setAttribute("src", x.val(c, ".imageSrc")), r.style.borderRadius = x.val(c, ".border_radius") !== "0" && /^[0-9]+$/.test(x.val(c, ".border_radius")) ? x.val(c, ".border_radius") + "px" : "", x.val(c, ".imageTitle") ? r.setAttribute("title", x.val(c, ".imageTitle")) : r.removeAttribute("title"), x.val(c, ".imageAlt") ? r.setAttribute("alt", x.val(c, ".imageAlt")) : r.removeAttribute("alt");
                  var e3 = S.Dom.closest(r, "a", E.editor);
                  x.val(c, ".imageLink") ? (e3 || (e3 = S.Dom.wrap(r, "a", E)), e3.setAttribute("href", x.val(c, ".imageLink")), c.querySelector(".imageLinkOpenInNewTab").checked ? e3.setAttribute("target", "_blank") : e3.removeAttribute("target")) : e3 && e3.parentNode && e3.parentNode.replaceChild(r, e3);
                  var o3 = function(e4) {
                    return e4 = x.trim(e4), /^[0-9]+$/.test(e4) ? e4 + "px" : e4;
                  };
                  p.value === "" + r.offsetWidth && h.value === "" + r.offsetHeight || x.css(r, { width: x.trim(p.value) ? o3(p.value) : null, height: x.trim(h.value) ? o3(h.value) : null }), E.options.image.editMargins && (b ? x.css(r, "margin", o3(x.val(c, ".marginTop"))) : x.$$(".margins", c).forEach(function(e4) {
                    var t5 = e4.getAttribute("data-id") || "";
                    x.css(r, t5, o3(e4.value));
                  })), E.options.image.editClass && (x.val(c, ".classes") ? r.setAttribute("class", x.val(c, ".classes")) : r.removeAttribute("class")), E.options.image.editId && (x.val(c, ".id") ? r.setAttribute("id", x.val(c, ".id")) : r.removeAttribute("id"));
                  var t4 = function() {
                    x.css(r, "display") === "block" && x.css(r, "display", ""), r.style.marginLeft === "auto" && r.style.marginRight === "auto" && (r.style.marginLeft = "", r.style.marginRight = "");
                  };
                  E.options.image.editAlign && (x.val(c, ".align") ? ["right", "left"].indexOf(x.val(c, ".align").toLowerCase()) != -1 ? (x.css(r, "float", x.val(c, ".align")), t4()) : (x.css(r, "float", ""), x.css(r, { display: "block", "margin-left": "auto", "margin-right": "auto" })) : (x.css(r, "float") && ["right", "left"].indexOf(("" + x.css(r, "float")).toLowerCase()) != -1 && x.css(r, "float", ""), t4())), r.getAttribute("style") || r.removeAttribute("style"), E.setEditorValue(), i2.close();
                }), i2.setFooter([s, a]), i2.setSize(500), i2.open(), e2 && e2.preventDefault(), false;
              }
            };
            E.events.on("afterInit", function() {
              E.events.on(E.editor, "dblclick", E.options.image.openOnDblClick ? t2 : function(e2) {
                e2.stopImmediatePropagation(), E.selection.select(this);
              }, "img");
            }).on("openImageProperties", function(e2) {
              t2.call(e2);
            });
          };
        }, function(e, t, o) {
          "use strict";
          var n, i = this && this.__extends || (n = function(e2, t2) {
            return (n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e3, t3) {
              e3.__proto__ = t3;
            } || function(e3, t3) {
              for (var o2 in t3)
                t3.hasOwnProperty(o2) && (e3[o2] = t3[o2]);
            })(e2, t2);
          }, function(e2, t2) {
            function o2() {
              this.constructor = e2;
            }
            n(e2, t2), e2.prototype = t2 === null ? Object.create(t2) : (o2.prototype = t2.prototype, new o2());
          });
          Object.defineProperty(t, "__esModule", { value: true });
          var r = o(2), a = o(14), c = a.Widget.ColorPickerWidget, d = a.Widget.TabsWidget, l = o(0), u = o(3), s = o(6), f = o(28), p = o(27), h = o(17);
          r.Config.prototype.toolbarInline = true, r.Config.prototype.toolbarInlineDisableFor = [], r.Config.prototype.popup = { a: [{ name: "eye", tooltip: "Open link", exec: function(e2, t2) {
            var o2 = t2.getAttribute("href");
            t2 && o2 && e2.ownerWindow.open(o2);
          } }, { name: "link", tooltip: "Edit link", icon: "pencil" }, "unlink", "brush", "file"], jodit: [{ name: "bin", tooltip: "Delete", exec: function(e2, t2) {
            t2.parentNode && (l.Dom.safeRemove(t2), e2.events.fire("hidePopup"));
          } }], "jodit-media": [{ name: "bin", tooltip: "Delete", exec: function(e2, t2) {
            t2.parentNode && (l.Dom.safeRemove(t2), e2.events.fire("hidePopup"));
          } }], img: [{ name: "bin", tooltip: "Delete", exec: function(e2, t2) {
            t2.parentNode && (l.Dom.safeRemove(t2), e2.events.fire("hidePopup"));
          } }, { name: "pencil", exec: function(e2, t2) {
            t2.tagName.toLowerCase() === "img" && e2.events.fire("openImageProperties", t2);
          }, tooltip: "Edit" }, { name: "valign", list: ["Top", "Middle", "Bottom"], tooltip: "Vertical align", exec: function(e2, t2, o2) {
            if (t2.tagName.toLowerCase() === "img") {
              var n2 = o2.args && typeof o2.args[1] == "string" ? o2.args[1].toLowerCase() : "";
              u.css(t2, "vertical-align", n2), e2.events.fire("recalcPositionPopup");
            }
          } }, { name: "left", list: ["Left", "Right", "Center", "Normal"], exec: function(e2, t2, o2) {
            if (t2.tagName.toLowerCase() === "img") {
              var n2 = function() {
                u.css(t2, "display") === "block" && u.css(t2, "display", ""), t2.style.marginLeft === "auto" && t2.style.marginRight === "auto" && (t2.style.marginLeft = "", t2.style.marginRight = "");
              }, i2 = o2.args && typeof o2.args[1] == "string" ? o2.args[1].toLowerCase() : "";
              i2 !== "normal" ? ["right", "left"].indexOf(i2) != -1 ? (u.css(t2, "float", i2), n2()) : (u.css(t2, "float", ""), u.css(t2, { display: "block", "margin-left": "auto", "margin-right": "auto" })) : (u.css(t2, "float") && ["right", "left"].indexOf(u.css(t2, "float").toLowerCase()) != -1 && u.css(t2, "float", ""), n2()), e2.events.fire("recalcPositionPopup");
            }
          }, tooltip: "Horizontal align" }], table: [{ name: "brush", popup: function(e2, t2) {
            var o2, n2, i2, r2, a2, s2, l2 = f.Table.getAllSelectedCells(t2);
            return !!l2.length && (r2 = u.css(l2[0], "color"), s2 = u.css(l2[0], "background-color"), a2 = u.css(l2[0], "border-color"), o2 = c(e2, function(t3) {
              l2.forEach(function(e3) {
                u.css(e3, "background-color", t3);
              }), e2.setEditorValue();
            }, s2), n2 = c(e2, function(t3) {
              l2.forEach(function(e3) {
                u.css(e3, "color", t3);
              }), e2.setEditorValue();
            }, r2), i2 = c(e2, function(t3) {
              l2.forEach(function(e3) {
                u.css(e3, "border-color", t3);
              }), e2.setEditorValue();
            }, a2), d(e2, { Background: o2, Text: n2, Border: i2 }));
          }, tooltip: "Background" }, { name: "valign", list: ["Top", "Middle", "Bottom"], exec: function(e2, t2, o2) {
            var n2 = o2.args && typeof o2.args[1] == "string" ? o2.args[1].toLowerCase() : "";
            f.Table.getAllSelectedCells(t2).forEach(function(e3) {
              u.css(e3, "vertical-align", n2);
            });
          }, tooltip: "Vertical align" }, { name: "splitv", list: { tablesplitv: "Split vertical", tablesplitg: "Split horizontal" }, tooltip: "Split" }, { name: "align", icon: "left" }, "\n", { name: "merge", command: "tablemerge", tooltip: "Merge" }, { name: "addcolumn", list: { tableaddcolumnbefore: "Insert column before", tableaddcolumnafter: "Insert column after" }, exec: function(e2, t2, o2) {
            var n2 = o2.args && typeof o2.args[0] == "string" ? o2.args[0].toLowerCase() : "";
            e2.execCommand(n2, false, t2);
          }, tooltip: "Add column" }, { name: "addrow", list: { tableaddrowbefore: "Insert row above", tableaddrowafter: "Insert row below" }, exec: function(e2, t2, o2) {
            var n2 = o2.args && typeof o2.args[0] == "string" ? o2.args[0].toLowerCase() : "";
            e2.execCommand(n2, false, t2);
          }, tooltip: "Add row" }, { name: "bin", list: { tablebin: "Delete table", tablebinrow: "Delete row", tablebincolumn: "Delete column", tableempty: "Empty cell" }, exec: function(e2, t2, o2) {
            var n2 = o2.args && typeof o2.args[0] == "string" ? o2.args[0].toLowerCase() : "";
            e2.execCommand(n2, false, t2);
          }, tooltip: "Delete" }] };
          var v = function(e2) {
            function t2() {
              var s2 = e2 !== null && e2.apply(this, arguments) || this;
              return s2._hiddenClass = "jodit_toolbar_popup-inline-target-hidden", s2.isSelectionStarted = false, s2.onSelectionEnd = u.debounce(function() {
                s2.jodit.isEditorMode() && !s2.isDestructed && (s2.isSelectionStarted && (s2.isTargetAction || s2.onChangeSelection()), s2.isSelectionStarted = false, s2.isTargetAction = false);
              }, s2.jodit.defaultTimeout), s2.isTargetAction = false, s2.isSelectionPopup = false, s2.calcWindSizes = function() {
                var e3 = s2.jodit.ownerWindow, t3 = s2.jodit.ownerDocument.documentElement;
                if (!t3)
                  return { left: 0, top: 0, width: 0, height: 0 };
                var o2 = s2.jodit.ownerDocument.body, n2 = t3.clientTop || o2.clientTop || 0, i2 = t3.clientLeft || o2.clientLeft || 0;
                return { left: i2, top: n2, width: t3.clientWidth + (e3.pageXOffset || t3.scrollLeft || o2.scrollLeft) - i2, height: t3.clientHeight + (e3.pageYOffset || t3.scrollTop || o2.scrollTop) - n2 };
              }, s2.calcPosition = function(e3, t3) {
                if (!s2.isDestructed) {
                  s2.popup.target.classList.remove(s2._hiddenClass);
                  var o2 = e3.left + e3.width / 2, n2 = u.offset(s2.jodit.workplace, s2.jodit, s2.jodit.ownerDocument, true), i2 = e3.top + e3.height + 10;
                  s2.target.style.left = o2 + "px", s2.target.style.top = i2 + "px", s2.jodit.isFullSize() && (s2.target.style.zIndex = "" + u.css(s2.jodit.container, "zIndex"));
                  var r2 = s2.container.offsetWidth / 2, a2 = -r2;
                  s2.popup.container.classList.remove("jodit_toolbar_popup-inline-top"), t3.height < i2 + s2.container.offsetHeight && (s2.target.style.top = (i2 = e3.top - s2.container.offsetHeight - 10) + "px", s2.popup.container.classList.add("jodit_toolbar_popup-inline-top")), o2 - r2 < 0 && (a2 = -(e3.width / 2 + e3.left)), t3.width < o2 + r2 && (a2 = -(s2.container.offsetWidth - (t3.width - o2))), s2.container.style.marginLeft = a2 + "px", (50 < n2.top - i2 || 50 < i2 - (n2.top + n2.height)) && s2.popup.target.classList.add(s2._hiddenClass);
                }
              }, s2.reCalcPosition = function() {
                s2.__getRect && s2.calcPosition(s2.__getRect(), s2.calcWindSizes());
              }, s2.showPopup = function(e3, t3, o2) {
                if (!s2.jodit.options.toolbarInline || !s2.jodit.options.popup[t3.toLowerCase()])
                  return false;
                if (s2.isExcludedTarget(t3))
                  return true;
                s2.isShown = true, s2.isTargetAction = true;
                var n2 = s2.calcWindSizes();
                return s2.target.parentNode || s2.jodit.ownerDocument.body.appendChild(s2.target), s2.toolbar.build(s2.jodit.options.popup[t3.toLowerCase()], s2.container, o2), s2.popup.open(s2.container, false, true), s2.__getRect = e3, s2.calcPosition(e3(), n2), true;
              }, s2.hidePopup = function(e3) {
                s2.isDestructed || e3 && (l.Dom.isNode(e3, s2.jodit.editorWindow || window) || e3 instanceof p.Popup) && l.Dom.isOrContains(s2.target, e3 instanceof p.Popup ? e3.target : e3) || (s2.isTargetAction = false, s2.isShown = false, s2.popup.close(), l.Dom.safeRemove(s2.target));
              }, s2.onSelectionStart = function(e3) {
                if (s2.jodit.isEditorMode() && (s2.isTargetAction = false, s2.isSelectionPopup = false, !s2.isSelectionStarted)) {
                  var t3 = Object.keys(s2.jodit.options.popup).join("|"), o2 = e3.target.nodeName === "IMG" ? e3.target : l.Dom.closest(e3.target, t3, s2.jodit.editor);
                  o2 && s2.showPopup(function() {
                    return u.offset(o2, s2.jodit, s2.jodit.editorDocument);
                  }, o2.nodeName, o2) || (s2.isSelectionStarted = true);
                }
              }, s2.checkIsTargetEvent = function() {
                s2.isTargetAction ? s2.isTargetAction = false : s2.hidePopup();
              }, s2.isShown = false, s2.onChangeSelection = function() {
                if (s2.jodit.options.toolbarInline && s2.jodit.isEditorMode() && !s2.hideIfCollapsed() && s2.jodit.options.popup.selection !== void 0) {
                  var e3 = s2.jodit.selection.sel;
                  if (e3.rangeCount) {
                    s2.isSelectionPopup = true;
                    var t3 = e3.getRangeAt(0);
                    s2.showPopup(function() {
                      return u.offset(t3, s2.jodit, s2.jodit.editorDocument);
                    }, "selection");
                  }
                }
              }, s2;
            }
            return i(t2, e2), t2.prototype.isExcludedTarget = function(e3) {
              return u.splitArray(this.jodit.options.toolbarInlineDisableFor).map(function(e4) {
                return e4.toLowerCase();
              }).indexOf(e3.toLowerCase()) != -1;
            }, t2.prototype.hideIfCollapsed = function() {
              return !!this.jodit.selection.isCollapsed() && (this.hidePopup(), true);
            }, t2.prototype.afterInit = function(t3) {
              var n2 = this;
              this.toolbar = h.JoditToolbarCollection.makeCollection(t3), this.target = t3.create.div("jodit_toolbar_popup-inline-target"), this.container = t3.create.div(), this.popup = new p.Popup(t3, this.target, void 0, "jodit_toolbar_popup-inline"), t3.events.on(this.target, "mousedown keydown touchstart", function(e3) {
                e3.stopPropagation();
              }).on("beforeOpenPopup hidePopup afterSetMode", this.hidePopup).on("recalcPositionPopup", this.reCalcPosition).on("getDiffButtons.mobile", function(e3) {
                if (n2.toolbar === e3)
                  return u.splitArray(t3.options.buttons).filter(function(e4) {
                    return e4 !== "|" && e4 !== "\n";
                  }).filter(function(e4) {
                    return n2.toolbar.getButtonsList().indexOf(e4) < 0;
                  });
              }).on("selectionchange", this.onChangeSelection).on("afterCommand afterExec", function() {
                n2.isShown && n2.isSelectionPopup && n2.onChangeSelection();
              }).on("showPopup", function(e3, t4) {
                var o2 = (typeof e3 == "string" ? e3 : e3.nodeName).toLowerCase();
                n2.isSelectionPopup = false, n2.showPopup(t4, o2, typeof e3 == "string" ? void 0 : e3);
              }).on("mousedown keydown touchstart", this.onSelectionStart).on([t3.ownerWindow, t3.editor], "scroll resize", this.reCalcPosition).on([t3.ownerWindow], "mouseup keyup touchend", this.onSelectionEnd).on([t3.ownerWindow], "mousedown keydown touchstart", this.checkIsTargetEvent);
            }, t2.prototype.beforeDestruct = function(e3) {
              this.popup && this.popup.destruct(), this.toolbar && this.toolbar.destruct(), l.Dom.safeRemove(this.target), l.Dom.safeRemove(this.container), e3.events && e3.events.off([e3.ownerWindow], "scroll resize", this.reCalcPosition).off([e3.ownerWindow], "mouseup keyup touchend", this.onSelectionEnd).off([e3.ownerWindow], "mousedown keydown touchstart", this.checkIsTargetEvent);
            }, t2;
          }(s.Plugin);
          t.inlinePopup = v;
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true });
          var n = o(2), a = o(0), s = o(3), l = o(5);
          n.Config.prototype.controls.align = { name: "left", tooltip: "Align", getLabel: function(t2, e2, o2) {
            var n2 = t2.selection.current();
            if (n2) {
              var i = a.Dom.closest(n2, function(e3) {
                return a.Dom.isBlock(e3, t2.editorWindow);
              }, t2.editor) || t2.editor, r = "" + s.css(i, "text-align");
              e2.defaultValue && e2.defaultValue.indexOf(r) != -1 && (r = "left"), o2 && e2.data && e2.data.currentValue !== r && e2.list && e2.list.indexOf(r) != -1 && (o2.textBox.innerHTML = t2.options.textIcons ? "<span>" + r + "</span>" : l.ToolbarIcon.getIcon(r, ""), o2.textBox.firstChild.classList.add("jodit_icon"), e2.data.currentValue = r);
            }
            return false;
          }, isActive: function(t2, e2) {
            var o2 = t2.selection.current();
            if (o2 && e2.defaultValue) {
              var n2 = a.Dom.closest(o2, function(e3) {
                return a.Dom.isBlock(e3, t2.editorWindow);
              }, t2.editor) || t2.editor;
              return e2.defaultValue.indexOf("" + s.css(n2, "text-align")) == -1;
            }
            return false;
          }, defaultValue: ["left", "start", "inherit"], data: { currentValue: "left" }, list: ["center", "left", "right", "justify"] }, n.Config.prototype.controls.center = { command: "justifyCenter", css: { "text-align": "center" }, tooltip: "Align Center" }, n.Config.prototype.controls.justify = { command: "justifyFull", css: { "text-align": "justify" }, tooltip: "Align Justify" }, n.Config.prototype.controls.left = { command: "justifyLeft", css: { "text-align": "left" }, tooltip: "Align Left" }, n.Config.prototype.controls.right = { command: "justifyRight", css: { "text-align": "right" }, tooltip: "Align Right" }, t.justify = function(n2) {
            var e2 = function(t2) {
              var o2 = function(e3) {
                if (e3 instanceof n2.editorWindow.HTMLElement)
                  switch (t2.toLowerCase()) {
                    case "justifyfull":
                      e3.style.textAlign = "justify";
                      break;
                    case "justifyright":
                      e3.style.textAlign = "right";
                      break;
                    case "justifyleft":
                      e3.style.textAlign = "left";
                      break;
                    case "justifycenter":
                      e3.style.textAlign = "center";
                  }
              };
              return n2.selection.focus(), n2.selection.eachSelection(function(e3) {
                if (!e3 && n2.editor.querySelector(".jodit_selected_cell"))
                  return s.$$(".jodit_selected_cell", n2.editor).forEach(o2), false;
                if (e3 instanceof n2.editorWindow.Node) {
                  var t3 = !!e3 && a.Dom.up(e3, function(e4) {
                    return a.Dom.isBlock(e4, n2.editorWindow);
                  }, n2.editor);
                  !t3 && e3 && (t3 = a.Dom.wrapInline(e3, n2.options.enterBlock, n2)), o2(t3);
                }
              }), false;
            };
            n2.registerCommand("justifyfull", e2), n2.registerCommand("justifyright", e2), n2.registerCommand("justifyleft", e2), n2.registerCommand("justifycenter", e2);
          };
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true });
          var n = o(2), c = o(0), d = o(3);
          n.Config.prototype.link = { followOnDblClick: true, processVideoLink: true, processPastedLink: true, openLinkDialogAfterPost: true, removeLinkAfterFormat: true, noFollowCheckbox: true, openInNewTabCheckbox: true }, n.Config.prototype.controls.unlink = { exec: function(e2, t2) {
            var o2 = c.Dom.closest(t2, "A", e2.editor);
            o2 && c.Dom.unwrap(o2), e2.events.fire("hidePopup");
          } }, n.Config.prototype.controls.link = { isActive: function(e2) {
            var t2 = e2.selection.current();
            return t2 && c.Dom.closest(t2, "a", e2.editor) !== false;
          }, popup: function(o2, n2, e2, i) {
            var t2 = o2.editorWindow.getSelection(), r = o2.create.fromHTML('<form class="jodit_form"><input required type="text" name="url" placeholder="http://" type="text"/><input name="text" placeholder="' + o2.i18n("Text") + '" type="text"/>' + (o2.options.link.openInNewTabCheckbox ? '<label><input name="target" type="checkbox"/> ' + o2.i18n("Open in new tab") + "</label>" : "") + (o2.options.link.noFollowCheckbox ? '<label><input name="nofollow" type="checkbox"/> ' + o2.i18n("No follow") + "</label>" : "") + '<div style="text-align: right"><button class="jodit_unlink_button" type="button">' + o2.i18n("Unlink") + '</button> &nbsp;&nbsp;<button class="jodit_link_insert_button" type="submit"></button></div><form/>');
            n2 = !(!n2 || !c.Dom.closest(n2, "A", o2.editor)) && c.Dom.closest(n2, "A", o2.editor);
            var a = r.querySelector(".jodit_link_insert_button"), s = r.querySelector(".jodit_unlink_button");
            n2 ? (d.val(r, "input[name=url]", n2.getAttribute("href") || ""), d.val(r, "input[name=text]", n2.innerText), o2.options.link.openInNewTabCheckbox && (r.querySelector("input[name=target]").checked = n2.getAttribute("target") === "_blank"), o2.options.link.noFollowCheckbox && (r.querySelector("input[name=nofollow]").checked = n2.getAttribute("rel") === "nofollow"), a && (a.innerHTML = o2.i18n("Update"))) : (s && (s.style.display = "none"), d.val(r, "input[name=text]", "" + t2), a && (a.innerHTML = o2.i18n("Insert")));
            var l = o2.selection.save();
            return s && s.addEventListener("mousedown", function(e3) {
              n2 && c.Dom.unwrap(n2), o2.selection.restore(l), i(), e3.preventDefault();
            }), r.addEventListener("submit", function(e3) {
              e3.preventDefault(), o2.selection.restore(l);
              var t3 = n2 || o2.editorDocument.createElement("a");
              return d.val(r, "input[name=url]") ? (t3.setAttribute("href", d.val(r, "input[name=url]")), t3.innerText = d.val(r, "input[name=text]"), o2.options.link.openInNewTabCheckbox && (r.querySelector("input[name=target]").checked ? t3.setAttribute("target", "_blank") : t3.removeAttribute("target")), o2.options.link.noFollowCheckbox && (r.querySelector("input[name=nofollow]").checked ? t3.setAttribute("rel", "nofollow") : t3.removeAttribute("rel")), n2 || o2.selection.insertNode(t3), i()) : (r.querySelector("input[name=url]").focus(), r.querySelector("input[name=url]").classList.add("jodit_error")), false;
            }), r;
          }, tags: ["a"], tooltip: "Insert link" }, t.link = function(i) {
            i.options.link.followOnDblClick && i.events.on("afterInit", function() {
              i.events.on(i.editor, "dblclick", function(e2) {
                var t2 = this.getAttribute("href");
                t2 && (location.href = t2, e2.preventDefault());
              }, "a");
            }), i.options.link.processPastedLink && i.events.on("processPaste", function(e2, t2) {
              if (d.isURL(t2)) {
                var o2 = d.convertMediaURLToVideoEmbed(t2);
                if (o2 !== t2)
                  return i.create.inside.fromHTML(o2);
                var n2 = i.create.inside.element("a");
                return n2.setAttribute("href", t2), n2.innerText = t2, n2;
              }
            }), i.options.link.removeLinkAfterFormat && i.events.on("afterCommand", function(e2) {
              var t2, o2;
              e2 === "removeFormat" && ((o2 = i.selection.current()) && o2.nodeName !== "A" && (o2 = c.Dom.closest(o2, "A", i.editor)), o2 && o2.nodeName === "A" && (o2.innerHTML === o2.innerText ? t2 = i.editorDocument.createTextNode(o2.innerHTML) : (t2 = i.editorDocument.createElement("span")).innerHTML = o2.innerHTML, o2.parentNode && (o2.parentNode.replaceChild(t2, o2), i.selection.setCursorIn(t2, true))));
            });
          };
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true });
          var n = o(2), i = o(1), r = o(4), a = o(43);
          n.Config.prototype.limitWords = false, n.Config.prototype.limitChars = false, n.Config.prototype.limitHTML = false, t.limit = function(n2) {
            if (n2 && (n2.options.limitWords || n2.options.limitChars)) {
              var o2 = function(e3, t2) {
                t2 === void 0 && (t2 = "");
                var o3 = (t2 || (n2.options.limitHTML ? n2.value : n2.getEditorText())).replace(i.INVISIBLE_SPACE_REG_EXP, "").split(i.SPACE_REG_EXP).filter(function(e4) {
                  return e4.length;
                });
                if (!e3 || i.COMMAND_KEYS.indexOf(e3.which) == -1)
                  return n2.options.limitWords && n2.options.limitWords <= o3.length ? n2.options.limitWords === o3.length : n2.options.limitChars && n2.options.limitChars <= o3.join("").length ? n2.options.limitChars === o3.join("").length : void 0;
              }, e2 = null;
              n2.events.on("beforePaste", function() {
                e2 = n2.observer.snapshot.make();
              }).on("keydown keyup beforeEnter beforePaste", function(e3) {
                if (o2(e3) !== void 0)
                  return false;
              }).on("change", r.debounce(function(e3, t2) {
                o2(null, n2.options.limitHTML ? e3 : a.stripTags(e3)) === false && (n2.value = t2);
              }, n2.defaultTimeout)).on("afterPaste", function() {
                if (o2(null) === false && e2)
                  return n2.observer.snapshot.restore(e2), false;
              });
            }
          };
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true });
          var n = o(2), r = o(1), a = o(4), s = o(9);
          n.Config.prototype.mediaFakeTag = "jodit-media", n.Config.prototype.mediaInFakeBlock = true, n.Config.prototype.mediaBlocks = ["video", "audio"], t.media = function(o2) {
            var n2 = "jodit_fake_wrapper", e2 = o2.options, i = e2.mediaFakeTag, t2 = e2.mediaBlocks;
            e2.mediaInFakeBlock && o2.events.on("afterGetValueFromEditor", function(e3) {
              e3.value = e3.value.replace(RegExp("<" + i + "[^>]+data-" + n2 + "[^>]+>(.+?)</" + i + ">", "ig"), "$1");
            }).on("change afterInit afterSetMode", a.debounce(function() {
              o2.isDestructed || o2.getMode() === r.MODE_SOURCE || s.$$(t2.join(","), o2.editor).forEach(function(e3) {
                e3["__" + n2] || (e3["__" + n2] = true, function(e4) {
                  if (e4.parentNode && e4.parentNode.getAttribute("data-jodit_iframe_wrapper"))
                    e4 = e4.parentNode;
                  else {
                    var t3 = void 0;
                    (t3 = o2.create.inside.fromHTML("<" + i + ' data-jodit-temp="1" contenteditable="false" draggable="true" data-' + n2 + '="1"></' + i + ">")).style.display = e4.style.display === "inline-block" ? "inline-block" : "block", t3.style.width = e4.offsetWidth + "px", t3.style.height = e4.offsetHeight + "px", e4.parentNode && e4.parentNode.insertBefore(t3, e4), t3.appendChild(e4), e4 = t3;
                  }
                  o2.events.off(e4, "mousedown.select touchstart.select").on(e4, "mousedown.select touchstart.select", function() {
                    o2.selection.setCursorAfter(e4);
                  });
                }(e3));
              });
            }, o2.defaultTimeout));
          };
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true });
          var n = o(2), i = o(1), a = o(19), s = o(17);
          n.Config.prototype.mobileTapTimeout = 300, n.Config.prototype.toolbarAdaptive = true, n.Config.prototype.controls.dots = { mode: i.MODE_SOURCE + i.MODE_WYSIWYG, popup: function(t2, e2, o2, n2, i2) {
            var r = o2.data;
            return r === void 0 && ((r = { container: t2.create.div(), toolbar: s.JoditToolbarCollection.makeCollection(t2), rebuild: function() {
              if (i2) {
                var e3 = t2.events.fire("getDiffButtons.mobile", i2.parentToolbar);
                e3 && r && r.toolbar.build(a.splitArray(e3), r.container);
              }
            } }).container.style.width = "100px", o2.data = r), r.rebuild(), r.container;
          } }, t.mobile = function(o2) {
            var t2, n2 = 0, i2 = a.splitArray(o2.options.buttons);
            o2.events.on("touchend", function(e2) {
              e2.changedTouches && e2.changedTouches.length && (t2 = new Date().getTime(), o2.options.mobileTapTimeout < t2 - n2 && (n2 = t2, o2.selection.insertCursorAtPoint(e2.changedTouches[0].clientX, e2.changedTouches[0].clientY)));
            }).on("getDiffButtons.mobile", function(e2) {
              if (e2 === o2.toolbar)
                return a.splitArray(o2.options.buttons).filter(function(e3) {
                  return i2.indexOf(e3) < 0;
                });
            }), o2.options.toolbarAdaptive && o2.events.on("resize afterInit", function() {
              if (o2.options.toolbar) {
                var e2, t3 = o2.container.offsetWidth;
                "" + (e2 = a.splitArray(t3 < o2.options.sizeLG ? t3 < o2.options.sizeMD ? t3 < o2.options.sizeSM ? o2.options.buttonsXS : o2.options.buttonsSM : o2.options.buttonsMD : o2.options.buttons)) != "" + i2 && o2.toolbar.build((i2 = e2).concat(o2.options.extraButtons), o2.container);
              }
            });
          };
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true });
          var n = o(2), i = o(0);
          n.Config.prototype.controls.ul = { command: "insertUnorderedList", controlName: "ul", tags: ["ul"], tooltip: "Insert Unordered List" }, n.Config.prototype.controls.ol = { command: "insertOrderedList", controlName: "ol", tags: ["ol"], tooltip: "Insert Ordered List" }, t.orderedlist = function(n2) {
            n2.events.on("afterCommand", function(e2) {
              if (/insert(un)?orderedlist/i.test(e2)) {
                var t2 = i.Dom.up(n2.selection.current(), function(e3) {
                  return e3 && /^UL|OL$/i.test(e3.nodeName);
                }, n2.editor);
                if (t2 && t2.parentNode && t2.parentNode.nodeName === "P") {
                  var o2 = n2.selection.save();
                  i.Dom.unwrap(t2.parentNode), Array.from(t2.childNodes).forEach(function(e3) {
                    e3.lastChild && e3.lastChild.nodeType === Node.ELEMENT_NODE && e3.lastChild.nodeName === "BR" && i.Dom.safeRemove(e3.lastChild);
                  }), n2.selection.restore(o2);
                }
                n2.setEditorValue();
              }
            });
          };
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true });
          var n = o(2), h = o(1), v = o(18), m = o(3), g = o(0);
          n.Config.prototype.askBeforePasteHTML = true, n.Config.prototype.askBeforePasteFromWord = true, n.Config.prototype.defaultActionOnPaste = h.INSERT_AS_HTML, n.Config.prototype.controls.cut = { command: "cut", isDisable: function(e2) {
            var t2 = e2.selection.sel;
            return !t2 || t2.isCollapsed;
          }, tooltip: "Cut selection" }, t.paste = function(d) {
            var l = "", c = function(e2, t2, o2, n2, i) {
              if (n2 === void 0 && (n2 = "Clean"), i === void 0 && (i = "Insert only Text"), !d.events || d.events.fire("beforeOpenPasteDialog", e2, t2, o2, n2, i) !== false) {
                var r2 = v.Confirm('<div style="word-break: normal; white-space: normal">' + e2 + "</div>", t2, o2);
                r2.container.setAttribute("data-editor_id", d.id);
                var a = r2.create.fromHTML('<a href="javascript:void(0)" style="float:left;" class="jodit_button"><span>' + d.i18n("Keep") + "</span></a>"), s = r2.create.fromHTML('<a href="javascript:void(0)" style="float:left;" class="jodit_button"><span>' + d.i18n(n2) + "</span></a>"), l2 = r2.create.fromHTML('<a href="javascript:void(0)" style="float:left;" class="jodit_button"><span>' + d.i18n(i) + "</span></a>"), c2 = r2.create.fromHTML('<a href="javascript:void(0)" style="float:right;" class="jodit_button"><span>' + d.i18n("Cancel") + "</span></a>");
                return d.events.on(a, "click", function() {
                  r2.close(), o2 && o2(true);
                }), d.events.on(s, "click", function() {
                  r2.close(), o2 && o2(false);
                }), d.events.on(l2, "click", function() {
                  r2.close(), o2 && o2(0);
                }), d.events.on(c2, "click", function() {
                  r2.close();
                }), r2.setFooter([a, s, i ? l2 : "", c2]), d.events && d.events.fire("afterOpenPasteDialog", r2, e2, t2, o2, n2, i), r2;
              }
            }, r = function(e2, t2) {
              switch (t2) {
                case h.INSERT_CLEAR_HTML:
                  e2 = m.cleanFromWord(e2);
                  break;
                case h.INSERT_ONLY_TEXT:
                  e2 = m.stripTags(e2);
                  break;
                case h.INSERT_AS_TEXT:
                  e2 = m.htmlspecialchars(e2);
              }
              d.selection.insertHTML(e2);
            }, u = function(o2, n2) {
              if (m.isHTML(o2) && l !== f(o2))
                return d.events.stopPropagation("beforePaste"), o2 = f(o2), c(d.i18n("Your code is similar to HTML. Keep as HTML?"), d.i18n("Paste as HTML"), function(e2) {
                  var t2 = h.INSERT_AS_HTML;
                  e2 === false && (t2 = h.INSERT_AS_TEXT), e2 === 0 && (t2 = h.INSERT_ONLY_TEXT), n2.type === "drop" && d.selection.insertCursorAtPoint(n2.clientX, n2.clientY), r(o2, t2), d.setEditorValue();
                }, "Insert as Text"), false;
            }, f = function(e2) {
              var t2 = e2.search(/<!--StartFragment-->/i);
              t2 !== -1 && (e2 = e2.substr(t2 + 20));
              var o2 = e2.search(/<!--EndFragment-->/i);
              return o2 !== -1 && (e2 = e2.substr(0, o2)), e2;
            }, p = function(e2) {
              return e2.clipboardData ? e2.clipboardData : e2.dataTransfer || new DataTransfer();
            };
            d.events.on("copy cut", function(e2) {
              var t2 = d.selection.getHTML(), o2 = p(e2) || p(d.editorWindow) || p(e2.originalEvent);
              o2.setData(h.TEXT_PLAIN, m.stripTags(t2)), o2.setData(h.TEXT_HTML, t2), l = t2, e2.type === "cut" && (d.selection.remove(), d.selection.focus()), e2.preventDefault(), d.events.fire("afterCopy", t2);
            }).on("paste", function(e2) {
              if (d.events.fire("beforePaste", e2) === false)
                return e2.preventDefault(), false;
              if (e2 && p(e2)) {
                var t2 = p(e2).types, o2 = void 0, n2 = "", i = "";
                if (Array.isArray(t2) || m.type(t2) === "domstringlist")
                  for (o2 = 0; o2 < t2.length; o2 += 1)
                    n2 += t2[o2] + ";";
                else
                  n2 = "" + t2;
                /text\/html/i.test(n2) ? i = p(e2).getData("text/html") : /text\/rtf/i.test(n2) && m.browser("safari") ? i = p(e2).getData("text/rtf") : /text\/plain/i.test(n2) && !m.browser("mozilla") ? i = p(e2).getData(h.TEXT_PLAIN) : /text/i.test(n2) && h.IS_IE && (i = p(e2).getData(h.TEXT_PLAIN)), (i instanceof d.editorWindow.Node || m.trim(i) !== "") && (i = f(i), l !== i && (i = d.events.fire("processPaste", e2, i)), (typeof i == "string" || i instanceof d.editorWindow.Node) && (e2.type === "drop" && d.selection.insertCursorAtPoint(e2.clientX, e2.clientY), r(i, d.options.defaultActionOnPaste)), e2.preventDefault(), e2.stopPropagation());
              }
              return d.events.fire("afterPaste", e2) !== false && void 0;
            }), d.options.askBeforePasteHTML && d.events.on("beforePaste", function(e2) {
              if (e2 && p(e2).getData(h.TEXT_PLAIN)) {
                var t2 = p(e2).getData(h.TEXT_PLAIN);
                return u(t2, e2);
              }
            }), d.options.askBeforePasteFromWord && d.events.on("beforePaste", function(e2) {
              if (e2 && p(e2).getData && p(e2).getData(h.TEXT_HTML)) {
                var t2 = function(t3) {
                  if (m.isHTML(t3) && l !== f(t3))
                    return m.isHTMLFromWord(t3) ? c(d.i18n("The pasted content is coming from a Microsoft Word/Excel document. Do you want to keep the format or clean it up?"), d.i18n("Word Paste Detected"), function(e3) {
                      e3 === true && (t3 = m.applyStyles(t3), d.options.beautifyHTML && d.ownerWindow.html_beautify && (t3 = d.ownerWindow.html_beautify(t3))), e3 === false && (t3 = m.cleanFromWord(t3)), e3 === 0 && (t3 = m.stripTags(m.cleanFromWord(t3))), d.selection.insertHTML(t3), d.setEditorValue();
                    }) : u(t3, e2), false;
                };
                if (p(e2).types && Array.from(p(e2).types).indexOf("text/html") != -1) {
                  var o2 = p(e2).getData(h.TEXT_HTML);
                  return t2(o2);
                }
                if (e2.type !== "drop") {
                  var n2 = d.create.div(void 0, { tabindex: -1, contenteditable: true, style: { left: -9999, top: 0, width: 0, height: "100%", lineHeight: "140%", overflow: "hidden", position: "fixed", zIndex: 2147483647, wordBreak: "break-all" } });
                  d.container.appendChild(n2);
                  var i = d.selection.save();
                  n2.focus();
                  var r2 = 0, a = function() {
                    g.Dom.safeRemove(n2), d.selection.restore(i);
                  }, s = function() {
                    if (r2 += 1, n2.childNodes && 0 < n2.childNodes.length) {
                      var e3 = n2.innerHTML;
                      a(), t2(e3) !== false && d.selection.insertHTML(e3);
                    } else
                      r2 < 5 ? m.setTimeout(s, 20) : a();
                  };
                  s();
                }
              }
            });
          };
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true });
          var n = o(2), a = o(1), s = o(8), l = o(4), c = o(0);
          n.Config.prototype.showPlaceholder = true, n.Config.prototype.useInputsPlaceholder = true, n.Config.prototype.placeholder = "Type something", t.placeholder = function(i) {
            if (i.options.showPlaceholder) {
              this.destruct = function() {
                c.Dom.safeRemove(r);
              };
              var t2 = function() {
                r.parentNode && (r.style.display = "none");
              }, o2 = l.debounce(function() {
                if (r.parentNode !== null && i.editor) {
                  if (i.getRealMode() !== a.MODE_WYSIWYG)
                    return t2();
                  var e2 = i.getEditorValue();
                  e2 && !/^<(p|div|h[1-6])><\/\1>$/.test(e2) ? t2() : function() {
                    if (r.parentNode && !i.options.readonly) {
                      var e3 = 0, t3 = 0, o3 = i.editorWindow.getComputedStyle(i.editor);
                      if (i.editor.firstChild && i.editor.firstChild.nodeType === Node.ELEMENT_NODE) {
                        var n2 = i.editorWindow.getComputedStyle(i.editor.firstChild);
                        e3 = parseInt(n2.getPropertyValue("margin-top"), 10), t3 = parseInt(n2.getPropertyValue("margin-left"), 10), r.style.fontSize = parseInt(n2.getPropertyValue("font-size"), 10) + "px", r.style.lineHeight = n2.getPropertyValue("line-height");
                      } else
                        r.style.fontSize = parseInt(o3.getPropertyValue("font-size"), 10) + "px", r.style.lineHeight = o3.getPropertyValue("line-height");
                      s.css(r, { display: "block", marginTop: Math.max(parseInt(o3.getPropertyValue("margin-top"), 10), e3), marginLeft: Math.max(parseInt(o3.getPropertyValue("margin-left"), 10), t3) });
                    }
                  }();
                }
              }, i.defaultTimeout / 10), r = i.create.fromHTML('<span style="display: none;" class="jodit_placeholder">' + i.i18n(i.options.placeholder) + "</span>");
              i.options.direction === "rtl" && (r.style.right = "0px", r.style.direction = "rtl"), i.options.useInputsPlaceholder && i.element.hasAttribute("placeholder") && (r.innerHTML = i.element.getAttribute("placeholder") || ""), i.events.on("readonly", function(e2) {
                e2 ? t2() : o2();
              }).on("afterInit", function() {
                i.workplace.appendChild(r), o2(), i.events.fire("placeholder", r.innerHTML), i.events.on("change keyup mouseup keydown mousedown afterSetMode", o2).on(window, "load", o2);
              });
            }
          };
        }, function(e, t, o) {
          "use strict";
          var n, i = this && this.__extends || (n = function(e2, t2) {
            return (n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e3, t3) {
              e3.__proto__ = t3;
            } || function(e3, t3) {
              for (var o2 in t3)
                t3.hasOwnProperty(o2) && (e3[o2] = t3[o2]);
            })(e2, t2);
          }, function(e2, t2) {
            function o2() {
              this.constructor = e2;
            }
            n(e2, t2), e2.prototype = t2 === null ? Object.create(t2) : (o2.prototype = t2.prototype, new o2());
          });
          Object.defineProperty(t, "__esModule", { value: true });
          var r = o(2), a = o(1), s = o(6);
          r.Config.prototype.controls.redo = { mode: a.MODE_SPLIT, isDisable: function(e2) {
            return !e2.observer.stack.canRedo();
          }, tooltip: "Redo" }, r.Config.prototype.controls.undo = { mode: a.MODE_SPLIT, isDisable: function(e2) {
            return !e2.observer.stack.canUndo();
          }, tooltip: "Undo" };
          var l = function(e2) {
            function t2() {
              return e2 !== null && e2.apply(this, arguments) || this;
            }
            return i(t2, e2), t2.prototype.beforeDestruct = function() {
            }, t2.prototype.afterInit = function(t3) {
              var e3 = function(e4) {
                return t3.getRealMode() === a.MODE_WYSIWYG && t3.observer[e4](), false;
              };
              t3.registerCommand("redo", { exec: e3, hotkeys: ["ctrl+y", "ctrl+shift+z", "cmd+y", "cmd+shift+z"] }), t3.registerCommand("undo", { exec: e3, hotkeys: ["ctrl+z", "cmd+z"] });
            }, t2;
          }(s.Plugin);
          t.redoundo = l;
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true });
          var n = o(2), T = o(1), S = o(1), x = o(0), I = o(9), D = o(4), k = o(23), L = o(3);
          n.Config.prototype.useIframeResizer = true, n.Config.prototype.useTableResizer = true, n.Config.prototype.useImageResizer = true, n.Config.prototype.resizer = { showSize: true, hideSizeTimeout: 1e3, min_width: 10, min_height: 10 }, t.resizer = function(r) {
            var i, a, s, l, c, d, u, f, p, h, v, m = false, g = false, b = false, _ = 0, y = r.create.fromHTML('<div data-editor_id="' + r.id + '" style="display:none" class="jodit_resizer"><i class="jodit_resizer-topleft"></i><i class="jodit_resizer-topright"></i><i class="jodit_resizer-bottomright"></i><i class="jodit_resizer-bottomleft"></i><span>100x100</span></div>'), w = y.getElementsByTagName("span")[0], C = function() {
              b = g = false, a = null, y.style.display = "none";
            }, j = function() {
              w.style.opacity = "0";
            }, E = function() {
              if (b && a && y) {
                var e2 = k.offset(y.parentNode || r.ownerDocument.documentElement, r, r.ownerDocument, true), t2 = k.offset(a, r, r.editorDocument), o2 = parseInt(y.style.left || "0", 10), n2 = t2.top - 1 - e2.top, i2 = t2.left - 1 - e2.left;
                parseInt(y.style.top || "0", 10) === n2 && o2 === i2 && y.offsetWidth === a.offsetWidth && y.offsetHeight === a.offsetHeight || (y.style.top = n2 + "px", y.style.left = i2 + "px", y.style.width = a.offsetWidth + "px", y.style.height = a.offsetHeight + "px", r.events && (r.events.fire(a, "changesize"), isNaN(o2) || r.events.fire("resize")));
              }
            };
            I.$$("i", y).forEach(function(t2) {
              r.events.on(t2, "mousedown touchstart", function(e2) {
                if (!a || !a.parentNode)
                  return C(), false;
                i = t2, e2.preventDefault(), e2.stopImmediatePropagation(), u = (c = a.offsetWidth) / (d = a.offsetHeight), g = true, s = e2.clientX, l = e2.clientY, r.events.fire("hidePopup"), r.lock("resizer");
              });
            }), r.events.on("readonly", function(e2) {
              e2 && C();
            }).on("beforeDestruct", function() {
              x.Dom.safeRemove(y);
            }).on("afterInit", function() {
              r.events.on(r.editor, "keydown", function(e2) {
                b && e2.which === T.KEY_DELETE && a && a.tagName.toLowerCase() !== "table" && (a.tagName !== "JODIT" ? r.selection.select(a) : (x.Dom.safeRemove(a), C(), e2.preventDefault()));
              }).on(r.ownerWindow, "mousemove touchmove", function(e2) {
                if (g) {
                  if (h = e2.clientX - s, v = e2.clientY - l, !a)
                    return;
                  var t2 = i.className;
                  a.tagName === "IMG" ? (h ? (p = c + (t2.match(/left/) ? -1 : 1) * h, f = Math.round(p / u)) : (f = d + (t2.match(/top/) ? -1 : 1) * v, p = Math.round(f * u)), p > k.innerWidth(r.editor, r.ownerWindow) && (p = k.innerWidth(r.editor, r.ownerWindow), f = Math.round(p / u))) : (p = c + (t2.match(/left/) ? -1 : 1) * h, f = d + (t2.match(/top/) ? -1 : 1) * v), r.options.resizer.min_width < p && (a.style.width = p < y.parentNode.offsetWidth ? p + "px" : "100%"), r.options.resizer.min_height < f && (a.style.height = f + "px"), E(), o2 = a.offsetWidth, n2 = a.offsetHeight, r.options.resizer.showSize && (o2 < w.offsetWidth || n2 < w.offsetHeight ? j() : (w.style.opacity = "1", w.innerHTML = o2 + " x " + n2, clearTimeout(_), _ = D.setTimeout(j, r.options.resizer.hideSizeTimeout))), e2.stopImmediatePropagation();
                }
                var o2, n2;
              }).on(r.ownerWindow, "resize", function() {
                b && E();
              }).on(r.ownerWindow, "mouseup keydown touchend", function(e2) {
                b && !m && (g ? (r.unlock(), g = false, r.setEditorValue(), e2.stopImmediatePropagation()) : C());
              }).on([r.ownerWindow, r.editor], "scroll", function() {
                b && !g && C();
              });
            }).on("afterGetValueFromEditor", function(e2) {
              e2.value = e2.value.replace(/<jodit[^>]+data-jodit_iframe_wrapper[^>]+>(.*?<iframe[^>]+>[\s\n\r]*<\/iframe>.*?)<\/jodit>/gi, "$1");
            }).on("hideResizer", C).on("change afterInit afterSetMode", D.debounce(function() {
              b && (a && a.parentNode ? E() : C()), r.isDestructed || I.$$("img, table, iframe", r.editor).forEach(function(e2) {
                r.getMode() !== T.MODE_SOURCE && !e2.__jodit_resizer_binded && (e2.tagName === "IFRAME" && r.options.useIframeResizer || e2.tagName === "IMG" && r.options.useImageResizer || e2.tagName === "TABLE" && r.options.useTableResizer) && (e2.__jodit_resizer_binded = true, function(t2) {
                  var e3, o2;
                  if (t2.tagName === "IFRAME") {
                    var n2 = t2;
                    t2 = t2.parentNode && t2.parentNode.getAttribute("data-jodit_iframe_wrapper") ? t2.parentNode : ((e3 = r.create.inside.fromHTML('<jodit data-jodit-temp="1" contenteditable="false" draggable="true" data-jodit_iframe_wrapper="1"></jodit>')).style.display = t2.style.display === "inline-block" ? "inline-block" : "block", e3.style.width = t2.offsetWidth + "px", e3.style.height = t2.offsetHeight + "px", t2.parentNode && t2.parentNode.insertBefore(e3, t2), e3.appendChild(t2), e3), r.events.off(t2, "mousedown.select touchstart.select").on(t2, "mousedown.select touchstart.select", function() {
                      r.selection.select(t2);
                    }), r.events.off(t2, "changesize").on(t2, "changesize", function() {
                      n2.setAttribute("width", t2.offsetWidth + "px"), n2.setAttribute("height", t2.offsetHeight + "px");
                    });
                  }
                  r.events.on(t2, "dragstart", C).on(t2, "mousedown", function(e4) {
                    S.IS_IE && t2.nodeName === "IMG" && e4.preventDefault();
                  }).on(t2, "mousedown touchstart", function() {
                    m || (m = true, a = t2, r.options.readonly || (y.parentNode || r.workplace.appendChild(y), b = true, y.style.display = "block", r.isFullSize() && (y.style.zIndex = "" + L.css(r.container, "zIndex")), E()), a.tagName !== "IMG" || a.complete || a.addEventListener("load", function e4() {
                      E(), a && a.removeEventListener("load", e4);
                    }), clearTimeout(o2)), o2 = D.setTimeout(function() {
                      m = false;
                    }, 400);
                  });
                }(e2));
              });
            }, r.defaultTimeout));
          };
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true });
          var n = o(2), u = o(4), f = o(8);
          n.Config.prototype.allowResizeX = false, n.Config.prototype.allowResizeY = true, t.size = function(n2) {
            var o2 = function(e3) {
              f.css(n2.container, "height", e3), n2.options.saveHeightInStorage && n2.storage.set("height", e3);
            }, i = function(e3) {
              return f.css(n2.container, "width", e3);
            }, t2 = function(e3) {
              return f.css(n2.workplace, "height", e3);
            };
            if (n2.options.height !== "auto" && (n2.options.allowResizeX || n2.options.allowResizeY)) {
              var r = n2.create.div("jodit_editor_resize", '<a href="javascript:void(0)"></a>'), a = { x: 0, y: 0, w: 0, h: 0 }, s = false;
              n2.events.on(r, "mousedown touchstart", function(e3) {
                s = true, a.x = e3.clientX, a.y = e3.clientY, a.w = n2.container.offsetWidth, a.h = n2.container.offsetHeight, n2.lock(), e3.preventDefault();
              }).on(n2.ownerWindow, "mousemove touchmove", u.throttle(function(e3) {
                s && (o2(n2.options.allowResizeY ? a.h + e3.clientY - a.y : a.h), i(n2.options.allowResizeX ? a.w + e3.clientX - a.x : a.w), c(), n2.events.fire("resize"));
              }, n2.defaultTimeout / 10)).on(n2.ownerWindow, "mouseup touchsend", function() {
                s && (s = false, n2.unlock());
              }).on("afterInit", function() {
                n2.container.appendChild(r);
              }).on("toggleFullSize", function(e3) {
                r.style.display = e3 ? "none" : "block";
              });
            }
            var e2 = function() {
              return (n2.options.toolbar ? n2.toolbar.container.offsetHeight : 0) + (n2.statusbar ? n2.statusbar.container.offsetHeight : 0);
            }, l = function() {
              if (n2.container && n2.container.parentNode) {
                var o3 = f.css(n2.container, "minHeight") - e2();
                [n2.workplace, n2.iframe, n2.editor].map(function(e3) {
                  var t3 = e3 === n2.editor ? o3 - 2 : o3;
                  e3 && f.css(e3, "minHeight", t3), n2.events.fire("setMinHeight", t3);
                });
              }
            }, c = function() {
              n2.options.inline || (l(), n2.container && (n2.options.height !== "auto" || n2.isFullSize()) && t2(n2.container.offsetHeight - e2()));
            }, d = u.debounce(c, n2.defaultTimeout);
            n2.events.on("toggleFullSize", function(e3) {
              e3 || n2.options.height !== "auto" || (t2("auto"), l());
            }).on("afterInit", function() {
              n2.options.inline || (f.css(n2.editor, { minHeight: "100%" }), f.css(n2.container, { minHeight: n2.options.minHeight, minWidth: n2.options.minWidth, maxWidth: n2.options.maxWidth }));
              var e3 = n2.options.height;
              if (n2.options.saveHeightInStorage && e3 !== "auto") {
                var t3 = n2.storage.get("height");
                t3 && (e3 = t3);
              }
              n2.options.inline || (o2(e3), i(n2.options.width)), c();
            }, void 0, void 0, true).on(window, "load", d).on("afterInit resize updateToolbar scroll afterResize", d);
          };
        }, function(e, t, o) {
          "use strict";
          var n, i = this && this.__extends || (n = function(e2, t2) {
            return (n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e3, t3) {
              e3.__proto__ = t3;
            } || function(e3, t3) {
              for (var o2 in t3)
                t3.hasOwnProperty(o2) && (e3[o2] = t3[o2]);
            })(e2, t2);
          }, function(e2, t2) {
            function o2() {
              this.constructor = e2;
            }
            n(e2, t2), e2.prototype = t2 === null ? Object.create(t2) : (o2.prototype = t2.prototype, new o2());
          });
          Object.defineProperty(t, "__esModule", { value: true });
          var r = o(2), d = o(1), s = o(1), a = o(6), l = o(48), c = o(4), u = o(9), f = o(8), p = o(0);
          r.Config.prototype.beautifyHTML = true, r.Config.prototype.useAceEditor = true, r.Config.prototype.sourceEditorNativeOptions = { showGutter: true, theme: "ace/theme/idle_fingers", mode: "ace/mode/html", wrap: true, highlightActiveLine: true }, r.Config.prototype.sourceEditorCDNUrlsJS = ["https://cdnjs.cloudflare.com/ajax/libs/ace/1.3.3/ace.js"], r.Config.prototype.beautifyHTMLCDNUrlsJS = ["https://cdnjs.cloudflare.com/ajax/libs/js-beautify/1.7.5/beautify.min.js", "https://cdnjs.cloudflare.com/ajax/libs/js-beautify/1.7.5/beautify-html.min.js"], r.Config.prototype.controls.source = { mode: d.MODE_SPLIT, exec: function(e2) {
            e2.toggleMode();
          }, isActive: function(e2) {
            return e2.getRealMode() === d.MODE_SOURCE;
          }, tooltip: "Change mode" };
          var h = function(e2) {
            function t2() {
              var a2 = e2 !== null && e2.apply(this, arguments) || this;
              return a2.className = "jodit_ace_editor", a2.__lock = false, a2.__oldMirrorValue = "", a2.autosize = c.debounce(function() {
                a2.mirror.style.height = "auto", a2.mirror.style.height = a2.mirror.scrollHeight + "px";
              }, a2.jodit.defaultTimeout), a2.tempMarkerStart = "{start-jodit-selection}", a2.tempMarkerStartReg = /{start-jodit-selection}/g, a2.tempMarkerEnd = "{end-jodit-selection}", a2.tempMarkerEndReg = /{end-jodit-selection}/g, a2.selInfo = [], a2.loadNext = function(e3, t3, o2, n2) {
                if (o2 === void 0 && (o2 = "aceReady"), n2 === void 0 && (n2 = a2.className), o2 && t3[e3] === void 0 && a2.jodit && a2.jodit.events)
                  return a2.jodit.events && a2.jodit.events.fire(o2), void (a2.jodit.events && a2.jodit.events.fire(a2.jodit.ownerWindow, o2));
                t3[e3] !== void 0 && l.appendScript(t3[e3], function() {
                  a2.loadNext(e3 + 1, t3, o2, n2);
                }, n2, a2.jodit.ownerDocument);
              }, a2.insertHTML = function(e3) {
                if (a2.mirror.selectionStart || a2.mirror.selectionStart === 0) {
                  var t3 = a2.mirror.selectionEnd;
                  a2.mirror.value = a2.mirror.value.substring(0, a2.mirror.selectionStart) + e3 + a2.mirror.value.substring(t3, a2.mirror.value.length);
                } else
                  a2.mirror.value += a2.mirror;
                a2.toWYSIWYG();
              }, a2.fromWYSIWYG = function(e3) {
                if (e3 === void 0 && (e3 = false), !a2.__lock || e3 === true) {
                  a2.__lock = true;
                  var t3 = a2.jodit.getEditorValue(false);
                  t3 !== a2.getMirrorValue() && a2.setMirrorValue(t3), a2.__lock = false;
                }
              }, a2.toWYSIWYG = function() {
                if (!a2.__lock) {
                  var e3 = a2.getMirrorValue();
                  e3 !== a2.__oldMirrorValue && (a2.__lock = true, a2.jodit.setEditorValue(e3), a2.__lock = false, a2.__oldMirrorValue = e3);
                }
              }, a2.getNormalPosition = function(e3, t3) {
                for (var o2 = e3; 0 < o2; ) {
                  if (t3[--o2] === "<" && t3[o2 + 1] !== void 0 && t3[o2 + 1].match(/[\w\/]+/i))
                    return o2;
                  if (t3[o2] === ">")
                    return e3;
                }
                return e3;
              }, a2.__clear = function(e3) {
                return e3.replace(d.INVISIBLE_SPACE_REG_EXP, "");
              }, a2.selectAll = function() {
                a2.mirror.select();
              }, a2.onSelectAll = function(e3) {
                if (e3.toLowerCase() === "selectall" && a2.jodit.getRealMode() === s.MODE_SOURCE)
                  return a2.selectAll(), false;
              }, a2.getSelectionStart = function() {
                return a2.mirror.selectionStart;
              }, a2.getSelectionEnd = function() {
                return a2.mirror.selectionEnd;
              }, a2.saveSelection = function() {
                if (a2.jodit.getRealMode() === d.MODE_WYSIWYG)
                  a2.selInfo = a2.jodit.selection.save() || [], a2.jodit.setEditorValue(), a2.fromWYSIWYG(true);
                else {
                  a2.selInfo.length = 0;
                  var e3 = a2.getMirrorValue();
                  if (a2.getSelectionStart() === a2.getSelectionEnd()) {
                    var t3 = a2.jodit.selection.marker(true);
                    a2.selInfo[0] = { startId: t3.id, collapsed: true, startMarker: t3.outerHTML };
                    var o2 = a2.getNormalPosition(a2.getSelectionStart(), a2.getMirrorValue());
                    a2.setMirrorValue(e3.substr(0, o2) + a2.__clear(a2.selInfo[0].startMarker) + e3.substr(o2));
                  } else {
                    var n2 = a2.jodit.selection.marker(true), i2 = a2.jodit.selection.marker(false);
                    a2.selInfo[0] = { startId: n2.id, endId: i2.id, collapsed: false, startMarker: a2.__clear(n2.outerHTML), endMarker: a2.__clear(i2.outerHTML) }, o2 = a2.getNormalPosition(a2.getSelectionStart(), e3);
                    var r2 = a2.getNormalPosition(a2.getSelectionEnd(), e3);
                    a2.setMirrorValue(e3.substr(0, o2) + a2.selInfo[0].startMarker + e3.substr(o2, r2 - o2) + a2.selInfo[0].endMarker + e3.substr(r2));
                  }
                  a2.toWYSIWYG();
                }
              }, a2.restoreSelection = function() {
                if (a2.selInfo.length) {
                  if (a2.jodit.getRealMode() === d.MODE_WYSIWYG)
                    return a2.__lock = true, a2.jodit.selection.restore(a2.selInfo), void (a2.__lock = false);
                  var e3 = a2.getMirrorValue(), t3 = 0, o2 = 0;
                  try {
                    a2.selInfo[0].startMarker && (e3 = e3.replace(/<span[^>]+data-jodit_selection_marker="start"[^>]*>[<>]*?<\/span>/gim, a2.tempMarkerStart)), a2.selInfo[0].endMarker && (e3 = e3.replace(/<span[^>]+data-jodit_selection_marker="end"[^>]*>[<>]*?<\/span>/gim, a2.tempMarkerEnd)), a2.jodit.ownerWindow.html_beautify && a2.jodit.options.beautifyHTML && (e3 = a2.jodit.ownerWindow.html_beautify(e3)), o2 = t3 = e3.indexOf(a2.tempMarkerStart), e3 = e3.replace(a2.tempMarkerStartReg, ""), a2.selInfo[0].collapsed && t3 !== -1 || (o2 = e3.indexOf(a2.tempMarkerEnd), t3 === -1 && (t3 = o2)), e3 = e3.replace(a2.tempMarkerEndReg, "");
                  } finally {
                    e3 = e3.replace(a2.tempMarkerEndReg, "").replace(a2.tempMarkerStartReg, "");
                  }
                  a2.setMirrorValue(e3), a2.setMirrorSelectionRange(t3, o2), a2.toWYSIWYG(), a2.setFocusToMirror();
                }
              }, a2.setMirrorSelectionRange = function(e3, t3) {
                a2.mirror.setSelectionRange(e3, t3);
              }, a2.onReadonlyReact = function() {
                var e3 = a2.jodit.options.readonly;
                e3 ? a2.mirror.setAttribute("readonly", "true") : a2.mirror.removeAttribute("readonly"), a2.aceEditor && a2.aceEditor.setReadOnly(e3);
              }, a2;
            }
            return i(t2, e2), t2.prototype.getMirrorValue = function() {
              return this.mirror.value;
            }, t2.prototype.setMirrorValue = function(e3) {
              this.mirror.value = e3;
            }, t2.prototype.setFocusToMirror = function() {
              this.mirror.focus();
            }, t2.prototype.replaceMirrorToACE = function() {
              var r2, t3, o2 = this, n2 = this.jodit, i2 = function() {
                t3 && n2.getRealMode() === d.MODE_SOURCE && (n2.events.fire("canRedo", t3.hasRedo()), n2.events.fire("canUndo", t3.hasUndo()));
              }, a2 = function(e4) {
                return r2.session.getLine(e4).length;
              }, s2 = function() {
                for (var e4 = r2.session.getLength(), t4 = [], o3 = 0, n3 = 0; n3 < e4; n3++)
                  o3 += a2(n3), 0 < n3 && (o3 += 1), t4[n3] = o3;
                return t4;
              }, l2 = function(e4) {
                var t4 = s2();
                if (e4 <= t4[0])
                  return { row: 0, column: e4 };
                for (var o3 = 1, n3 = 1; n3 < t4.length; n3++)
                  t4[n3] < e4 && (o3 = n3 + 1);
                return { row: o3, column: e4 - t4[o3 - 1] - 1 };
              }, c2 = function(e4, t4) {
                return s2()[e4] - a2(e4) + t4;
              }, e3 = function() {
                if (r2 === void 0 && o2.jodit.ownerWindow.ace !== void 0) {
                  var e4 = o2.jodit.create.div("jodit_source_mirror-fake");
                  o2.mirrorContainer.insertBefore(e4, o2.mirrorContainer.firstChild), o2.aceEditor = r2 = o2.jodit.ownerWindow.ace.edit(e4), r2.setTheme(n2.options.sourceEditorNativeOptions.theme), r2.renderer.setShowGutter(n2.options.sourceEditorNativeOptions.showGutter), r2.getSession().setMode(n2.options.sourceEditorNativeOptions.mode), r2.setHighlightActiveLine(n2.options.sourceEditorNativeOptions.highlightActiveLine), r2.getSession().setUseWrapMode(true), r2.setOption("indentedSoftWrap", false), r2.setOption("wrap", n2.options.sourceEditorNativeOptions.wrap), r2.getSession().setUseWorker(false), r2.$blockScrolling = 1 / 0, r2.setOptions({ maxLines: 1 / 0 }), r2.on("change", o2.toWYSIWYG), r2.on("focus", function(e5) {
                    n2.events.fire("focus", e5);
                  }), r2.on("mousedown", function(e5) {
                    n2.events.fire("mousedown", e5);
                  }), o2.mirror.style.display = "none", t3 = r2.getSession().getUndoManager(), o2.setMirrorValue = function(e5) {
                    r2.setValue(n2.options.beautifyHTML && n2.ownerWindow.html_beautify ? n2.ownerWindow.html_beautify(e5) : e5), r2.clearSelection(), i2();
                  }, o2.jodit.getRealMode() !== d.MODE_WYSIWYG && o2.setMirrorValue(o2.getMirrorValue()), o2.getMirrorValue = function() {
                    return r2.getValue();
                  }, o2.setFocusToMirror = function() {
                    r2.focus();
                  }, o2.getSelectionStart = function() {
                    var e5 = r2.selection.getRange();
                    return c2(e5.start.row, e5.start.column);
                  }, o2.getSelectionEnd = function() {
                    var e5 = r2.selection.getRange();
                    return c2(e5.end.row, e5.end.column);
                  }, o2.selectAll = function() {
                    r2.selection.selectAll();
                  }, o2.insertHTML = function(e5) {
                    var t4 = r2.selection.getCursor(), o3 = r2.session.insert(t4, e5);
                    r2.selection.setRange({ start: t4, end: o3 }, false);
                  }, o2.setMirrorSelectionRange = function(e5, t4) {
                    var o3, n3, i3;
                    o3 = t4, n3 = l2(e5), i3 = l2(o3), r2.getSelection().setSelectionRange({ start: n3, end: i3 });
                  }, n2.events.on("afterResize", function() {
                    r2.resize();
                  }).fire("aceInited", n2);
                }
              };
              n2.events.on(this.jodit.ownerWindow, "aceReady", e3).on("aceReady", e3).on("afterSetMode", function() {
                n2.getRealMode() !== d.MODE_SOURCE && n2.getMode() !== d.MODE_SPLIT || (o2.fromWYSIWYG(), e3());
              }).on("beforeCommand", function(e4) {
                if (n2.getRealMode() !== d.MODE_WYSIWYG && (e4 === "redo" || e4 === "undo") && t3)
                  return t3["has" + e4.substr(0, 1).toUpperCase() + e4.substr(1)] && r2[e4](), i2(), false;
              }), e3(), this.jodit.ownerWindow.ace !== void 0 || u.$$("script." + this.className, this.jodit.ownerDocument.body).length || this.loadNext(0, n2.options.sourceEditorCDNUrlsJS, "aceReady", this.className);
            }, t2.prototype.afterInit = function(t3) {
              var o2 = this;
              this.mirrorContainer = t3.create.div("jodit_source"), this.mirror = t3.create.fromHTML('<textarea class="jodit_source_mirror"/>');
              var e3 = function() {
                t3.events.off("beforeSetMode.source afterSetMode.source").on("beforeSetMode.source", o2.saveSelection).on("afterSetMode.source", o2.restoreSelection);
              };
              e3(), this.onReadonlyReact(), t3.events.on(this.mirror, "mousedown keydown touchstart input", c.debounce(this.toWYSIWYG, t3.defaultTimeout)).on(this.mirror, "change keydown mousedown touchstart input", this.autosize).on("afterSetMode.source", this.autosize).on(this.mirror, "mousedown focus", function(e4) {
                t3.events.fire(e4.type, e4);
              }), t3.events.on("setMinHeight.source", function(e4) {
                o2.mirror && f.css(o2.mirror, "minHeight", e4);
              }).on("insertHTML.source", function(e4) {
                if (!t3.options.readonly && !o2.jodit.isEditorMode())
                  return o2.insertHTML(e4), false;
              }).on("aceInited", function() {
                o2.onReadonlyReact(), e3();
              }, void 0, void 0, true).on("readonly.source", this.onReadonlyReact).on("placeholder.source", function(e4) {
                o2.mirror.setAttribute("placeholder", e4);
              }).on("beforeCommand.source", this.onSelectAll).on("change.source", this.fromWYSIWYG), this.mirrorContainer.appendChild(this.mirror), t3.workplace.appendChild(this.mirrorContainer), this.autosize();
              var n2 = "beutyfy_html_jodit_helper";
              t3.options.beautifyHTML && t3.ownerWindow.html_beautify === void 0 && !u.$$("script." + n2, t3.ownerDocument.body).length && this.loadNext(0, t3.options.beautifyHTMLCDNUrlsJS, false, n2), t3.options.useAceEditor && this.replaceMirrorToACE(), this.fromWYSIWYG();
            }, t2.prototype.beforeDestruct = function(e3) {
              p.Dom.safeRemove(this.mirrorContainer), p.Dom.safeRemove(this.mirror), e3 && e3.events && e3.events.off("aceInited .source");
            }, t2;
          }(a.Plugin);
          t.source = h;
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true });
          var n = o(2), f = o(1), l = o(18);
          n.Config.prototype.usePopupForSpecialCharacters = false, n.Config.prototype.specialCharacters = ["!", "&quot;", "#", "$", "%", "&amp;", "'", "(", ")", "*", "+", "-", ".", "/", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ":", ";", "&lt;", "=", "&gt;", "?", "@", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "[", "]", "^", "_", "`", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "{", "|", "}", "~", "&euro;", "&lsquo;", "&rsquo;", "&ldquo;", "&rdquo;", "&ndash;", "&mdash;", "&iexcl;", "&cent;", "&pound;", "&curren;", "&yen;", "&brvbar;", "&sect;", "&uml;", "&copy;", "&ordf;", "&laquo;", "&raquo;", "&not;", "&reg;", "&macr;", "&deg;", "&sup2;", "&sup3;", "&acute;", "&micro;", "&para;", "&middot;", "&cedil;", "&sup1;", "&ordm;", "&frac14;", "&frac12;", "&frac34;", "&iquest;", "&Agrave;", "&Aacute;", "&Acirc;", "&Atilde;", "&Auml;", "&Aring;", "&AElig;", "&Ccedil;", "&Egrave;", "&Eacute;", "&Ecirc;", "&Euml;", "&Igrave;", "&Iacute;", "&Icirc;", "&Iuml;", "&ETH;", "&Ntilde;", "&Ograve;", "&Oacute;", "&Ocirc;", "&Otilde;", "&Ouml;", "&times;", "&Oslash;", "&Ugrave;", "&Uacute;", "&Ucirc;", "&Uuml;", "&Yacute;", "&THORN;", "&szlig;", "&agrave;", "&aacute;", "&acirc;", "&atilde;", "&auml;", "&aring;", "&aelig;", "&ccedil;", "&egrave;", "&eacute;", "&ecirc;", "&euml;", "&igrave;", "&iacute;", "&icirc;", "&iuml;", "&eth;", "&ntilde;", "&ograve;", "&oacute;", "&ocirc;", "&otilde;", "&ouml;", "&divide;", "&oslash;", "&ugrave;", "&uacute;", "&ucirc;", "&uuml;", "&yacute;", "&thorn;", "&yuml;", "&OElig;", "&oelig;", "&#372;", "&#374", "&#373", "&#375;", "&sbquo;", "&#8219;", "&bdquo;", "&hellip;", "&trade;", "&#9658;", "&bull;", "&rarr;", "&rArr;", "&hArr;", "&diams;", "&asymp;"], n.Config.prototype.controls.symbol = { icon: "omega", hotkeys: ["ctrl+shift+i", "cmd+shift+i"], tooltip: "Insert Special Character", popup: function(e2, t2, o2, n2) {
            var i = e2.events.fire("generateSpecialCharactersTable.symbols");
            if (i) {
              if (e2.options.usePopupForSpecialCharacters) {
                var r = e2.ownerDocument.createElement("div");
                return r.classList.add("jodit_symbols"), r.appendChild(i), e2.events.on(i, "close_dialog", n2), r;
              }
              var a = l.Alert(i, e2.i18n("Select Special Character"), void 0, "jodit_symbols"), s = i.querySelector("a");
              s && s.focus(), e2.events.on("beforeDestruct", function() {
                a && a.close();
              });
            }
          } }, t.symbols = function(d) {
            var u = this;
            this.countInRow = 17, d.events.on("generateSpecialCharactersTable.symbols", function() {
              for (var e2 = d.create.fromHTML('<div class="jodit_symbols-container"><div class="jodit_symbols-container_table"><table><tbody></tbody></table></div><div class="jodit_symbols-container_preview"><div class="jodit_symbols-preview"></div></div></div>'), t2 = e2.querySelector(".jodit_symbols-preview"), o2 = e2.querySelector("table").tBodies[0], r = [], n2 = 0; n2 < d.options.specialCharacters.length; ) {
                for (var i = d.create.element("tr"), a = 0; a < u.countInRow && n2 < d.options.specialCharacters.length; a += 1, n2 += 1) {
                  var s = d.create.element("td"), l2 = d.create.fromHTML('<a\n                                    data-index="' + n2 + '"\n                                    data-index-j="' + a + '"\n                                    href="javascript:void(0)"\n                                    role="option"\n                                    tabindex="-1"\n                                >' + d.options.specialCharacters[n2] + "</a>");
                  r.push(l2), s.appendChild(l2), i.appendChild(s);
                }
                o2.appendChild(i);
              }
              var c = u;
              return d.events.on(r, "focus", function() {
                t2.innerHTML = this.innerHTML;
              }).on(r, "mousedown", function(e3) {
                this && this.nodeName === "A" && (d.selection.focus(), d.selection.insertHTML(this.innerHTML), d.events.fire(this, "close_dialog"), e3 && e3.preventDefault(), e3 && e3.stopImmediatePropagation());
              }).on(r, "mouseenter", function() {
                this && this.nodeName === "A" && this.focus();
              }).on(r, "keydown", function(e3) {
                var t3 = e3.target;
                if (t3 && t3.nodeName === "A") {
                  var o3 = parseInt(t3.getAttribute("data-index") || "0", 10), n3 = parseInt(t3.getAttribute("data-index-j") || "0", 10), i2 = void 0;
                  switch (e3.which) {
                    case f.KEY_UP:
                    case f.KEY_DOWN:
                      r[i2 = e3.which === f.KEY_UP ? o3 - c.countInRow : o3 + c.countInRow] === void 0 && r.length - 1 < (i2 = e3.which === f.KEY_UP ? Math.floor(r.length / c.countInRow) * c.countInRow + n3 : n3) && (i2 -= c.countInRow), r[i2] && r[i2].focus();
                      break;
                    case f.KEY_RIGHT:
                    case f.KEY_LEFT:
                      r[i2 = e3.which === f.KEY_LEFT ? o3 - 1 : o3 + 1] === void 0 && (i2 = e3.which === f.KEY_LEFT ? r.length - 1 : 0), r[i2] && r[i2].focus();
                      break;
                    case f.KEY_ENTER:
                      d.events.fire(t3, "mousedown"), e3.stopImmediatePropagation(), e3.preventDefault();
                  }
                }
              }), e2;
            });
          };
        }, function(e, t, o) {
          "use strict";
          var n, i = this && this.__extends || (n = function(e2, t2) {
            return (n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e3, t3) {
              e3.__proto__ = t3;
            } || function(e3, t3) {
              for (var o2 in t3)
                t3.hasOwnProperty(o2) && (e3[o2] = t3[o2]);
            })(e2, t2);
          }, function(e2, t2) {
            function o2() {
              this.constructor = e2;
            }
            n(e2, t2), e2.prototype = t2 === null ? Object.create(t2) : (o2.prototype = t2.prototype, new o2());
          });
          Object.defineProperty(t, "__esModule", { value: true });
          var r = o(2), a = o(6), s = o(22);
          r.Config.prototype.commandToHotkeys = { removeFormat: ["ctrl+shift+m", "cmd+shift+m"], insertOrderedList: ["ctrl+shift+7", "cmd+shift+7"], insertUnorderedList: ["ctrl+shift+8, cmd+shift+8"], selectall: ["ctrl+a", "cmd+a"] };
          var l = function(e2) {
            function t2() {
              var i2 = e2 !== null && e2.apply(this, arguments) || this;
              return i2.onKeyPress = function(t3) {
                var o2 = i2.specialKeys[t3.which], e3 = (t3.key || String.fromCharCode(t3.which)).toLowerCase(), n2 = [o2 || e3];
                return ["alt", "ctrl", "shift", "meta"].forEach(function(e4) {
                  t3[e4 + "Key"] && o2 !== e4 && n2.push(e4);
                }), s.normalizeKeyAliases(n2.join("+"));
              }, i2.specialKeys = { 8: "backspace", 9: "tab", 10: "return", 13: "return", 16: "shift", 17: "ctrl", 18: "alt", 19: "pause", 20: "capslock", 27: "esc", 32: "space", 33: "pageup", 34: "pagedown", 35: "end", 36: "home", 37: "left", 38: "up", 39: "right", 40: "down", 45: "insert", 46: "del", 59: ";", 61: "=", 91: "meta", 96: "0", 97: "1", 98: "2", 99: "3", 100: "4", 101: "5", 102: "6", 103: "7", 104: "8", 105: "9", 106: "*", 107: "+", 109: "-", 110: ".", 111: "/", 112: "f1", 113: "f2", 114: "f3", 115: "f4", 116: "f5", 117: "f6", 118: "f7", 119: "f8", 120: "f9", 121: "f10", 122: "f11", 123: "f12", 144: "numlock", 145: "scroll", 173: "-", 186: ";", 187: "=", 188: ",", 189: "-", 190: ".", 191: "/", 192: "`", 219: "[", 220: "\\", 221: "]", 222: "'" }, i2;
            }
            return i(t2, e2), t2.prototype.afterInit = function(o2) {
              var n2 = this;
              Object.keys(o2.options.commandToHotkeys).forEach(function(e3) {
                var t3 = o2.options.commandToHotkeys[e3];
                t3 && o2.registerHotkeyToCommand(t3, e3);
              });
              var i2 = false;
              o2.events.on("keydown.hotkeys", function(e3) {
                var t3 = n2.onKeyPress(e3);
                if (n2.jodit.events.fire(t3 + ".hotkey", e3.type) === false)
                  return i2 = true, o2.events.stopPropagation("keydown"), false;
              }, void 0, void 0, true).on("keyup.hotkeys", function() {
                if (i2)
                  return i2 = false, o2.events.stopPropagation("keyup"), false;
              }, void 0, void 0, true);
            }, t2.prototype.beforeDestruct = function(e3) {
              e3.events && e3.events.off(".hotkeys");
            }, t2;
          }(a.Plugin);
          t.hotkeys = l;
        }, function(e, t, o) {
          "use strict";
          var n, i = this && this.__extends || (n = function(e2, t2) {
            return (n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e3, t3) {
              e3.__proto__ = t3;
            } || function(e3, t3) {
              for (var o2 in t3)
                t3.hasOwnProperty(o2) && (e3[o2] = t3[o2]);
            })(e2, t2);
          }, function(e2, t2) {
            function o2() {
              this.constructor = e2;
            }
            n(e2, t2), e2.prototype = t2 === null ? Object.create(t2) : (o2.prototype = t2.prototype, new o2());
          });
          Object.defineProperty(t, "__esModule", { value: true });
          var r = o(2), l = o(1), a = o(6), y = o(0), f = o(28), w = o(3);
          r.Config.prototype.useTableProcessor = true, r.Config.prototype.useExtraClassesOptions = true, r.Config.prototype.controls.table = { data: { cols: 10, rows: 10, classList: { "table table-bordered": "Bootstrap Bordered", "table table-striped": "Bootstrap Striped", "table table-dark": "Bootstrap Dark" } }, popup: function(d, e2, n2, u, t2) {
            var f2, p, h, i2, v = 1, m = 1, r2 = n2.data && n2.data.rows ? n2.data.rows : 10, g = n2.data && n2.data.cols ? n2.data.cols : 10, o2 = d.create.fromHTML('<form class="jodit_form jodit_form_inserter"><label><span>1</span> &times; <span>1</span></label><div class="jodit_form-table-creator-box"><div class="jodit_form-container"></div><div class="jodit_form-options">' + function() {
              if (!d.options.useExtraClassesOptions)
                return "";
              var t3 = [];
              if (n2.data) {
                var o3 = n2.data.classList;
                Object.keys(o3).forEach(function(e3) {
                  t3.push('<label><input value="' + e3 + '" type="checkbox"/>' + o3[e3] + "</label>");
                });
              }
              return t3.join("");
            }() + "</div></div></form>"), a2 = o2.querySelectorAll("span")[0], s2 = o2.querySelectorAll("span")[1], l2 = o2.querySelector(".jodit_form-container"), c = o2.querySelector(".jodit_form-table-creator-box"), b = o2.querySelector(".jodit_form-options"), _ = [];
            return l2.addEventListener("mousemove", function(e3, t3) {
              var o3 = e3.target;
              if (o3 && o3.tagName === "DIV") {
                for (h = t3 === void 0 || isNaN(t3) ? parseInt(o3.getAttribute("data-index") || "0", 10) : t3 || 0, v = Math.ceil((h + 1) / g), m = h % g + 1, f2 = 0; f2 < _.length; f2 += 1)
                  _[f2].className = m < f2 % g + 1 || v < Math.ceil((f2 + 1) / g) ? "" : "hovered";
                s2.innerText = "" + m, a2.innerText = "" + v;
              }
            }), d.events.on(l2, "touchstart mousedown", function(e3) {
              var t3 = e3.target, o3 = d.editorDocument;
              if (e3.preventDefault(), e3.stopImmediatePropagation(), t3.tagName === "DIV") {
                h = parseInt(t3.getAttribute("data-index") || "0", 10), v = Math.ceil((h + 1) / g), m = h % g + 1;
                var n3 = o3.createElement("table");
                n3.style.width = "100%";
                var i3, r3, a3, s3 = null;
                for (f2 = 1; f2 <= v; f2 += 1) {
                  for (i3 = o3.createElement("tr"), p = 1; p <= m; p += 1)
                    r3 = o3.createElement("td"), s3 || (s3 = r3), a3 = o3.createElement("br"), r3.appendChild(a3), i3.appendChild(o3.createTextNode("\n")), i3.appendChild(o3.createTextNode("	")), i3.appendChild(r3);
                  n3.appendChild(o3.createTextNode("\n")), n3.appendChild(i3);
                }
                var l3 = d.selection.current();
                if (l3 && d.selection.isCollapsed()) {
                  var c2 = y.Dom.closest(l3, function(e4) {
                    return y.Dom.isBlock(e4, d.editorWindow);
                  }, d.editor);
                  c2 && c2 !== d.editor && !c2.nodeName.match(/^TD|TH|TBODY|TABLE|THEADER|TFOOTER$/) && d.selection.setCursorAfter(c2);
                }
                w.$$("input[type=checkbox]:checked", b).forEach(function(e4) {
                  e4.value.split(/[\s]+/).forEach(function(e5) {
                    n3.classList.add(e5);
                  });
                }), d.selection.insertNode(o3.createTextNode("\n")), d.selection.insertNode(n3, false), s3 && (d.selection.setCursorIn(s3), w.scrollIntoView(s3, d.editor, d.editorDocument)), u();
              }
            }), t2 && t2.parentToolbar && d.events.off(t2.parentToolbar.container, "afterOpenPopup.tableGenerator").on(t2.parentToolbar.container, "afterOpenPopup.tableGenerator", function() {
              !function(e3) {
                var t3 = r2 * g;
                if (t3 < _.length) {
                  for (f2 = t3; f2 < _.length; f2 += 1)
                    y.Dom.safeRemove(_[f2]), delete _[f2];
                  _.length = t3;
                }
                for (f2 = 0; f2 < t3; f2 += 1)
                  _[f2] || ((i2 = d.ownerDocument.createElement("div")).setAttribute("data-index", "" + f2), _.push(i2));
                _.forEach(function(e4) {
                  l2.appendChild(e4);
                });
                var o3 = (_[0].offsetWidth || 18) * g;
                l2.style.width = o3 + "px", c.style.width = o3 + b.offsetWidth + 1 + "px";
              }(), _[0] && (_[0].className = "hovered");
            }, "", true), o2;
          }, tooltip: "Insert table" };
          var s = function(e2) {
            function u() {
              var r2 = e2 !== null && e2.apply(this, arguments) || this;
              return r2.__key = "table_processor_observer", r2.__selectMode = false, r2.__resizerDelta = 0, r2.__drag = false, r2.__addResizer = function() {
                if (!r2.__resizerHandler && (r2.__resizerHandler = r2.jodit.container.querySelector(".jodit_table_resizer"), !r2.__resizerHandler)) {
                  r2.__resizerHandler = r2.jodit.create.div("jodit_table_resizer");
                  var o2 = 0;
                  r2.jodit.events.on(r2.__resizerHandler, "mousedown touchstart", function(e3) {
                    r2.__drag = true, o2 = e3.clientX, r2.jodit.lock(r2.__key), r2.__resizerHandler.classList.add("jodit_table_resizer-moved");
                    var n2, t2 = r2.__workTable.getBoundingClientRect();
                    if (r2.__minX = 0, r2.__maxX = 1e6, r2.__wholeTable !== null)
                      t2 = r2.__workTable.parentNode.getBoundingClientRect(), r2.__minX = t2.left, r2.__maxX = t2.left + t2.width;
                    else {
                      var i2 = f.Table.formalCoordinate(r2.__workTable, r2.__workCell, true);
                      f.Table.formalMatrix(r2.__workTable, function(e4, t3, o3) {
                        i2[1] === o3 && (n2 = e4.getBoundingClientRect(), r2.__minX = Math.max(n2.left + l.NEARBY / 2, r2.__minX)), i2[1] + 1 === o3 && (n2 = e4.getBoundingClientRect(), r2.__maxX = Math.min(n2.left + n2.width - l.NEARBY / 2, r2.__maxX));
                      });
                    }
                    return false;
                  }).on(r2.jodit.ownerWindow, "mousemove touchmoove", function(e3) {
                    if (r2.__drag) {
                      var t2 = e3.clientX;
                      t2 < r2.__minX && (t2 = r2.__minX), r2.__maxX < t2 && (t2 = r2.__maxX), r2.__resizerDelta = t2 - o2, r2.__resizerHandler.style.left = t2 + "px", r2.jodit.editorWindow.getSelection().removeAllRanges(), e3.preventDefault && e3.preventDefault();
                    }
                  }), r2.jodit.container.appendChild(r2.__resizerHandler);
                }
              }, r2.onExecCommand = function(e3) {
                if (/table(splitv|splitg|merge|empty|bin|binrow|bincolumn|addcolumn|addrow)/.test(e3)) {
                  e3 = e3.replace("table", "");
                  var t2 = f.Table.getAllSelectedCells(r2.jodit.editor);
                  if (t2.length) {
                    var o2 = t2.shift();
                    if (!o2)
                      return;
                    var n2 = y.Dom.closest(o2, "table", r2.jodit.editor);
                    switch (e3) {
                      case "splitv":
                        f.Table.splitVertical(n2);
                        break;
                      case "splitg":
                        f.Table.splitHorizontal(n2);
                        break;
                      case "merge":
                        f.Table.mergeSelected(n2);
                        break;
                      case "empty":
                        f.Table.getAllSelectedCells(r2.jodit.editor).forEach(function(e4) {
                          return e4.innerHTML = "";
                        });
                        break;
                      case "bin":
                        y.Dom.safeRemove(n2);
                        break;
                      case "binrow":
                        f.Table.removeRow(n2, o2.parentNode.rowIndex);
                        break;
                      case "bincolumn":
                        f.Table.removeColumn(n2, o2.cellIndex);
                        break;
                      case "addcolumnafter":
                      case "addcolumnbefore":
                        f.Table.appendColumn(n2, o2.cellIndex, e3 === "addcolumnafter");
                        break;
                      case "addrowafter":
                      case "addrowbefore":
                        f.Table.appendRow(n2, o2.parentNode, e3 === "addrowafter");
                    }
                  }
                  return false;
                }
              }, r2;
            }
            return i(u, e2), u.isCell = function(e3) {
              return !!e3 && /^TD|TH$/i.test(e3.nodeName);
            }, u.prototype.__deSelectAll = function(e3, t2) {
              var o2 = f.Table.getAllSelectedCells(e3 || this.jodit.editor);
              o2.length && o2.forEach(function(e4) {
                t2 && t2 === e4 || f.Table.restoreSelection(e4);
              });
            }, u.prototype.__setWorkCell = function(e3, t2) {
              t2 === void 0 && (t2 = null), this.__wholeTable = t2, this.__workCell = e3, this.__workTable = y.Dom.up(e3, function(e4) {
                return e4 && e4.nodeName === "TABLE";
              }, this.jodit.editor);
            }, u.prototype.__calcResizerPosition = function(e3, t2, o2, n2) {
              o2 === void 0 && (o2 = 0), n2 === void 0 && (n2 = 0);
              var i2 = w.offset(t2, this.jodit, this.jodit.editorDocument);
              if (l.NEARBY < o2 && l.NEARBY < i2.width - o2)
                this.__resizerHandler.style.display = "none";
              else {
                var r2 = w.offset(e3, this.jodit, this.jodit.editorDocument);
                if (this.__resizerHandler.style.left = (l.NEARBY < o2 ? i2.left + i2.width : i2.left) + n2 + "px", this.__resizerHandler.style.height = r2.height + "px", this.__resizerHandler.style.top = r2.top + "px", this.__resizerHandler.style.display = "block", l.NEARBY < o2) {
                  var a2 = y.Dom.next(t2, u.isCell, t2.parentNode);
                  this.__setWorkCell(t2, !!a2 && null);
                } else {
                  var s2 = y.Dom.prev(t2, u.isCell, t2.parentNode);
                  s2 ? this.__setWorkCell(s2) : this.__setWorkCell(t2, true);
                }
              }
            }, u.prototype.observe = function(l2) {
              var c, d = this;
              l2[this.__key] = true, this.jodit.events.on(l2, "mousedown touchstart", function(e3) {
                if (!d.jodit.options.readonly) {
                  var t2 = y.Dom.up(e3.target, u.isCell, l2);
                  t2 && t2 instanceof d.jodit.editorWindow.HTMLElement && (t2.firstChild || t2.appendChild(d.jodit.editorDocument.createElement("br")), f.Table.addSelected(c = t2), d.__selectMode = true);
                }
              }).on(l2, "mouseleave", function(e3) {
                d.__resizerHandler && d.__resizerHandler !== e3.relatedTarget && (d.__resizerHandler.style.display = "none");
              }).on(l2, "mousemove touchmove", function(e3) {
                if (!d.jodit.options.readonly && !d.__drag && !d.jodit.isLockedNotBy(d.__key)) {
                  var t2 = y.Dom.up(e3.target, u.isCell, l2);
                  if (t2)
                    if (d.__selectMode) {
                      t2 !== c && (d.jodit.lock(d.__key), d.jodit.editorWindow.getSelection().removeAllRanges(), e3.preventDefault && e3.preventDefault()), d.__deSelectAll(l2);
                      for (var o2 = f.Table.getSelectedBound(l2, [t2, c]), n2 = f.Table.formalMatrix(l2), i2 = o2[0][0]; i2 <= o2[1][0]; i2 += 1)
                        for (var r2 = o2[0][1]; r2 <= o2[1][1]; r2 += 1)
                          f.Table.addSelected(n2[i2][r2]);
                      var a2 = n2[o2[1][0]][o2[1][1]], s2 = n2[o2[0][0]][o2[0][1]];
                      d.jodit.events.fire("showPopup", l2, function() {
                        var e4 = w.offset(s2, d.jodit, d.jodit.editorDocument), t3 = w.offset(a2, d.jodit, d.jodit.editorDocument);
                        return { left: e4.left, top: e4.top, width: t3.left - e4.left + t3.width, height: t3.top - e4.top + t3.height };
                      }), e3.stopPropagation();
                    } else
                      d.__calcResizerPosition(l2, t2, e3.offsetX);
                }
              }), this.__addResizer();
            }, u.prototype.afterInit = function(r2) {
              var a2 = this;
              r2.options.useTableProcessor && r2.events.on(this.jodit.ownerWindow, "mouseup.table touchend.table", function() {
                if ((a2.__selectMode || a2.__drag) && (a2.__selectMode = false, a2.jodit.unlock()), a2.__resizerHandler && a2.__drag) {
                  if (a2.__drag = false, a2.__resizerHandler.classList.remove("jodit_table_resizer-moved"), a2.__wholeTable === null) {
                    var e3 = [];
                    f.Table.setColumnWidthByDelta(a2.__workTable, f.Table.formalCoordinate(a2.__workTable, a2.__workCell, true)[1], a2.__resizerDelta, true, e3);
                    var t2 = y.Dom.next(a2.__workCell, u.isCell, a2.__workCell.parentNode);
                    f.Table.setColumnWidthByDelta(a2.__workTable, f.Table.formalCoordinate(a2.__workTable, t2)[1], -a2.__resizerDelta, false, e3);
                  } else {
                    var o2 = a2.__workTable.offsetWidth, n2 = w.getContentWidth(a2.__workTable.parentNode, a2.jodit.editorWindow);
                    if (a2.__wholeTable) {
                      var i2 = parseInt(a2.jodit.editorWindow.getComputedStyle(a2.__workTable).marginLeft || "0", 10);
                      a2.__workTable.style.width = (o2 - a2.__resizerDelta) / n2 * 100 + "%", a2.__workTable.style.marginLeft = (i2 + a2.__resizerDelta) / n2 * 100 + "%";
                    } else
                      a2.__workTable.style.width = (o2 + a2.__resizerDelta) / n2 * 100 + "%";
                  }
                  r2.setEditorValue(), r2.selection.focus();
                }
              }).on(this.jodit.ownerWindow, "scroll.table", function() {
                if (a2.__drag) {
                  var e3 = y.Dom.up(a2.__workCell, function(e4) {
                    return e4 && e4.nodeName === "TABLE";
                  }, r2.editor);
                  if (e3) {
                    var t2 = e3.getBoundingClientRect();
                    a2.__resizerHandler.style.top = t2.top + "px";
                  }
                }
              }).on(this.jodit.ownerWindow, "mousedown.table touchend.table", function(e3) {
                var t2 = y.Dom.closest(e3.originalEvent.target, "TD|TH", a2.jodit.editor), o2 = null;
                t2 instanceof a2.jodit.editorWindow.HTMLTableCellElement && (o2 = y.Dom.closest(t2, "table", a2.jodit.editor)), o2 ? a2.__deSelectAll(o2, t2 instanceof a2.jodit.editorWindow.HTMLTableCellElement && t2) : a2.__deSelectAll();
              }).on("afterGetValueFromEditor.table", function(e3) {
                e3.value = e3.value.replace(RegExp("([s]*)" + l.JODIT_SELECTED_CELL_MARKER + '="1"', "g"), "");
              }).on("change.table afterCommand.table afterSetMode.table", function() {
                w.$$("table", r2.editor).forEach(function(e3) {
                  e3[a2.__key] || a2.observe(e3);
                });
              }).on("beforeSetMode.table", function() {
                f.Table.getAllSelectedCells(r2.editor).forEach(function(e3) {
                  f.Table.restoreSelection(e3), f.Table.normalizeTable(y.Dom.closest(e3, "table", r2.editor));
                });
              }).on("keydown.table", function(e3) {
                e3.which === l.KEY_TAB && w.$$("table", r2.editor).forEach(function(e4) {
                  a2.__deSelectAll(e4);
                });
              }).on("beforeCommand.table", this.onExecCommand.bind(this));
            }, u.prototype.beforeDestruct = function(e3) {
              e3.events && (e3.events.off(this.jodit.ownerWindow, ".table"), e3.events.off(".table"));
            }, u;
          }(a.Plugin);
          t.TableProcessor = s;
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true });
          var p = o(1), h = o(0), v = o(28);
          t.tableKeyboardNavigation = function(f) {
            f.events.on("keydown", function(t2) {
              var e2, n;
              if ((t2.which === p.KEY_TAB || t2.which === p.KEY_LEFT || t2.which === p.KEY_RIGHT || t2.which === p.KEY_UP || t2.which === p.KEY_DOWN) && (e2 = f.selection.current(), n = h.Dom.up(e2, function(e3) {
                return e3 && e3.nodeName && /^td|th$/i.test(e3.nodeName);
              }, f.editor))) {
                var o2 = f.editorWindow.getSelection(), i = o2.rangeCount ? o2.getRangeAt(0) : f.editorDocument.createRange();
                if (t2.which === p.KEY_TAB || e2 === n || (t2.which !== p.KEY_LEFT && t2.which !== p.KEY_UP || !(h.Dom.prev(e2, function(e3) {
                  return t2.which === p.KEY_UP ? e3 && e3.nodeName === "BR" : !!e3;
                }, n) || t2.which !== p.KEY_UP && e2.nodeType === Node.TEXT_NODE && i.startOffset !== 0)) && (t2.which !== p.KEY_RIGHT && t2.which !== p.KEY_DOWN || !(h.Dom.next(e2, function(e3) {
                  return t2.which === p.KEY_DOWN ? e3 && e3.nodeName === "BR" : !!e3;
                }, n) || t2.which !== p.KEY_DOWN && e2.nodeType === Node.TEXT_NODE && e2.nodeValue && i.startOffset !== e2.nodeValue.length))) {
                  var r = h.Dom.up(n, function(e3) {
                    return e3 && /^table$/i.test(e3.nodeName);
                  }, f.editor), a = null;
                  switch (t2.which) {
                    case p.KEY_TAB:
                    case p.KEY_LEFT:
                      var s = t2.which === p.KEY_LEFT || t2.shiftKey ? "prev" : "next";
                      (a = h.Dom[s](n, function(e3) {
                        return e3 && /^td|th$/i.test(e3.tagName);
                      }, r)) || (v.Table.appendRow(r, s !== "next" && r.querySelector("tr"), s === "next"), a = h.Dom[s](n, function(e3) {
                        return e3 && h.Dom.isCell(e3, f.editorWindow);
                      }, r));
                      break;
                    case p.KEY_UP:
                    case p.KEY_DOWN:
                      var l = 0, c = 0, d = v.Table.formalMatrix(r, function(e3, t3, o3) {
                        e3 === n && (l = t3, c = o3);
                      });
                      t2.which === p.KEY_UP ? d[l - 1] !== void 0 && (a = d[l - 1][c]) : d[l + 1] !== void 0 && (a = d[l + 1][c]);
                  }
                  if (a) {
                    if (a.firstChild)
                      t2.which === p.KEY_TAB ? f.selection.select(a, true) : f.selection.setCursorIn(a, t2.which === p.KEY_RIGHT || t2.which === p.KEY_DOWN);
                    else {
                      var u = f.editorDocument.createElement("br");
                      a.appendChild(u), f.selection.setCursorBefore(u);
                    }
                    return false;
                  }
                }
              }
            });
          };
        }, function(e, t, o) {
          "use strict";
          var n, i = this && this.__extends || (n = function(e2, t2) {
            return (n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e3, t3) {
              e3.__proto__ = t3;
            } || function(e3, t3) {
              for (var o2 in t3)
                t3.hasOwnProperty(o2) && (e3[o2] = t3[o2]);
            })(e2, t2);
          }, function(e2, t2) {
            function o2() {
              this.constructor = e2;
            }
            n(e2, t2), e2.prototype = t2 === null ? Object.create(t2) : (o2.prototype = t2.prototype, new o2());
          });
          Object.defineProperty(t, "__esModule", { value: true });
          var r = o(2), u = o(1), a = o(1), h = o(0), s = o(5), l = o(6), c = o(4), v = o(11);
          r.Config.prototype.useSearch = true;
          var d = function(e2) {
            function p() {
              var f = e2 !== null && e2.apply(this, arguments) || this;
              return f.template = '<div class="jodit_search"><div class="jodit_search_box"><div class="jodit_search_inputs"><input tabindex="0" class="jodit_search-query" placeholder="' + f.jodit.i18n("Search for") + '" type="text"/><input tabindex="0" class="jodit_search-replace" placeholder="' + f.jodit.i18n("Replace with") + '" type="text"/></div><div class="jodit_search_counts"><span>0/0</span></div><div class="jodit_search_buttons"><button tabindex="0" type="button" class="jodit_search_buttons-next">' + s.ToolbarIcon.getIcon("angle-down") + '</button><button tabindex="0" type="button" class="jodit_search_buttons-prev">' + s.ToolbarIcon.getIcon("angle-up") + '</button><button tabindex="0" type="button" class="jodit_search_buttons-cancel">' + s.ToolbarIcon.getIcon("cancel") + '</button><button tabindex="0" type="button" class="jodit_search_buttons-replace">' + f.jodit.i18n("Replace") + "</button></div></div></div>", f.isOpened = false, f.selInfo = null, f.current = false, f.eachMap = function(e3, t2, o2) {
                h.Dom.findWithCurrent(e3, function(e4) {
                  return !!e4 && t2(e4);
                }, f.jodit.editor, o2 ? "nextSibling" : "previousSibling", o2 ? "firstChild" : "lastChild");
              }, f.updateCounters = function() {
                if (f.isOpened) {
                  f.counterBox.style.display = f.queryInput.value.length ? "inline-block" : "none";
                  var e3 = f.jodit.editorWindow.getSelection(), t2 = e3.rangeCount ? e3.getRangeAt(0) : f.jodit.editorDocument.createRange(), o2 = f.calcCounts(f.queryInput.value, t2);
                  f.counterBox.innerText = o2.join("/");
                }
              }, f.calcCounts = function(e3, t2) {
                t2 === void 0 && (t2 = false);
                for (var o2 = [], n2 = 0, i2 = 0, r2 = false, a2 = f.jodit.editor.firstChild; a2 && e3.length; )
                  if (r2 = f.find(a2, e3, true, 0, r2 || f.jodit.editorDocument.createRange())) {
                    if (f.boundAlreadyWas(r2, o2))
                      break;
                    o2.push(r2), a2 = r2.startContainer, i2 += 1, t2 && f.boundAlreadyWas(t2, [r2]) && (n2 = i2);
                  } else
                    a2 = null;
                return [n2, i2];
              }, f.findAndReplace = function(e3, t2) {
                var o2 = f.jodit.editorWindow.getSelection(), n2 = o2.rangeCount ? o2.getRangeAt(0) : f.jodit.editorDocument.createRange(), i2 = f.find(e3, t2, true, 0, n2);
                if (i2 && i2.startContainer && i2.endContainer) {
                  var r2 = f.jodit.editorDocument.createRange();
                  try {
                    if (i2 && i2.startContainer && i2.endContainer) {
                      r2.setStart(i2.startContainer, i2.startOffset), r2.setEnd(i2.endContainer, i2.endOffset), r2.deleteContents();
                      var a2 = f.jodit.editorDocument.createTextNode(f.replaceInput.value);
                      r2.insertNode(a2), f.jodit.selection.select(a2), f.tryScrollToElement(a2);
                    }
                  } catch (e4) {
                  }
                  return true;
                }
                return false;
              }, f.findAndSelect = function(e3, t2, o2) {
                var n2 = f.jodit.selection.sel, i2 = n2.rangeCount ? n2.getRangeAt(0) : f.jodit.selection.createRange(), r2 = f.find(e3, t2, o2, 0, i2);
                if (r2 && r2.startContainer && r2.endContainer) {
                  var a2 = f.jodit.editorDocument.createRange();
                  try {
                    a2.setStart(r2.startContainer, r2.startOffset), a2.setEnd(r2.endContainer, r2.endOffset), f.jodit.selection.selectRange(a2);
                  } catch (e4) {
                  }
                  return f.tryScrollToElement(r2.startContainer), f.current = r2.startContainer, f.updateCounters(), true;
                }
                return false;
              }, f.find = function(e3, a2, s2, l2, c2) {
                if (e3 && a2.length) {
                  var d2 = "", u2 = { startContainer: null, startOffset: null, endContainer: null, endOffset: null };
                  if (f.eachMap(e3, function(e4) {
                    if (e4.nodeType === Node.TEXT_NODE && e4.nodeValue !== null && e4.nodeValue.length) {
                      var t2 = e4.nodeValue;
                      s2 || e4 !== c2.startContainer ? s2 && e4 === c2.endContainer && (t2 = l2 ? t2.substr(0, c2.startOffset) : t2.substr(c2.endOffset)) : t2 = l2 ? t2.substr(c2.endOffset) : t2.substr(0, c2.startOffset);
                      var o2 = s2 ? d2 + t2 : t2 + d2, n2 = p.findSomePartOfString(a2, o2, s2);
                      if (n2 !== false) {
                        var i2 = p.findSomePartOfString(a2, t2, s2);
                        i2 === true ? i2 = v.trim(a2) : i2 === false && (i2 = p.findSomePartOfString(t2, a2, s2)) === true && (i2 = v.trim(t2));
                        var r2 = p.getSomePartOfStringIndex(a2, t2, s2) || 0;
                        if ((s2 && !l2 || !s2 && l2) && 0 < e4.nodeValue.length - t2.length && (r2 += e4.nodeValue.length - t2.length), u2.startContainer === null && (u2.startContainer = e4, u2.startOffset = r2), n2 === true)
                          return u2.endContainer = e4, u2.endOffset = r2, u2.endOffset += i2.length, true;
                        d2 = o2;
                      } else
                        d2 = "", u2 = { startContainer: null, startOffset: null, endContainer: null, endOffset: null };
                    } else
                      h.Dom.isBlock(e4, f.jodit.editorWindow) && d2 !== "" && (d2 = s2 ? d2 + " " : " " + d2);
                    return false;
                  }, s2), u2.startContainer && u2.endContainer)
                    return u2;
                  if (!l2)
                    return f.current = s2 ? f.jodit.editor.firstChild : f.jodit.editor.lastChild, f.find(f.current, a2, s2, l2 + 1, c2);
                }
                return false;
              }, f.open = function(e3) {
                e3 === void 0 && (e3 = false), f.isOpened || (f.searchBox.classList.add("jodit_search-active"), f.isOpened = true), f.jodit.events.fire("hidePopup"), f.searchBox.classList.toggle("jodit_search-and-replace", e3), f.current = f.jodit.selection.current(), f.selInfo = f.jodit.selection.save();
                var t2 = "" + f.jodit.selection.sel;
                t2 && (f.queryInput.value = t2), f.updateCounters(), t2 ? f.queryInput.select() : f.queryInput.focus();
              }, f.close = function() {
                f.isOpened && (f.selInfo && (f.jodit.selection.restore(f.selInfo), f.selInfo = null), f.searchBox.classList.remove("jodit_search-active"), f.isOpened = false);
              }, f;
            }
            return i(p, e2), p.getSomePartOfStringIndex = function(e3, t2, o2) {
              return o2 === void 0 && (o2 = true), this.findSomePartOfString(e3, t2, o2, true);
            }, p.findSomePartOfString = function(e3, t2, o2, n2) {
              o2 === void 0 && (o2 = true), n2 === void 0 && (n2 = false), e3 = v.trim(e3.toLowerCase().replace(u.SPACE_REG_EXP, " ")), t2 = t2.toLowerCase();
              for (var i2 = o2 ? 0 : t2.length - 1, r2 = o2 ? 0 : e3.length - 1, a2 = 0, s2 = null, l2 = o2 ? 1 : -1, c2 = []; t2[i2] !== void 0; i2 += l2) {
                var d2 = e3[r2] === t2[i2];
                if (d2 || s2 !== null && u.SPACE_REG_EXP.test(t2[i2]) ? (s2 !== null && o2 || (s2 = i2), c2.push(t2[i2]), d2 && (a2 += 1, r2 += l2)) : (s2 = null, a2 = c2.length = 0, r2 = o2 ? 0 : e3.length - 1), a2 === e3.length)
                  return !n2 || s2;
              }
              return n2 ? s2 !== null && s2 : !!c2.length && (o2 ? c2.join("") : c2.reverse().join(""));
            }, p.prototype.boundAlreadyWas = function(t2, e3) {
              return e3.some(function(e4) {
                return e4.startContainer === t2.startContainer && e4.endContainer === t2.endContainer && e4.startOffset === t2.startOffset && e4.endOffset === t2.endOffset;
              }, false);
            }, p.prototype.tryScrollToElement = function(e3) {
              var t2 = h.Dom.closest(e3, function(e4) {
                return e4 && e4.nodeType === Node.ELEMENT_NODE;
              }, this.jodit.editor);
              t2 || (t2 = h.Dom.prev(e3, function(e4) {
                return e4 && e4.nodeType === Node.ELEMENT_NODE;
              }, this.jodit.editor)), t2 && t2 !== this.jodit.editor && t2.scrollIntoView();
            }, p.prototype.afterInit = function(n2) {
              var t2 = this;
              if (n2.options.useSearch) {
                var i2 = this;
                i2.searchBox = n2.create.fromHTML(i2.template), i2.queryInput = i2.searchBox.querySelector("input.jodit_search-query"), i2.replaceInput = i2.searchBox.querySelector("input.jodit_search-replace"), i2.closeButton = i2.searchBox.querySelector(".jodit_search_buttons-cancel"), i2.nextButton = i2.searchBox.querySelector(".jodit_search_buttons-next"), i2.prevButton = i2.searchBox.querySelector(".jodit_search_buttons-prev"), i2.replaceButton = i2.searchBox.querySelector(".jodit_search_buttons-replace"), i2.counterBox = i2.searchBox.querySelector(".jodit_search_counts span"), n2.workplace.appendChild(this.searchBox), n2.events.on(i2.closeButton, "click", this.close).on(i2.queryInput, "mousedown", function() {
                  n2.selection.isFocused() && (n2.selection.removeMarkers(), i2.selInfo = n2.selection.save());
                }).on(i2.replaceButton, "click", function(e3) {
                  i2.findAndReplace(n2.selection.current() || n2.editor.firstChild, i2.queryInput.value), t2.updateCounters(), e3.preventDefault(), e3.stopImmediatePropagation();
                }).on([i2.nextButton, i2.prevButton], "click", function(e3) {
                  n2.events.fire(i2.nextButton === this ? "searchNext" : "searchPrevious"), e3.preventDefault(), e3.stopImmediatePropagation();
                }).on(this.queryInput, "keydown", c.debounce(function(e3) {
                  switch (e3.which) {
                    case u.KEY_ENTER:
                      e3.preventDefault(), e3.stopImmediatePropagation(), n2.events.fire("searchNext") && t2.close();
                      break;
                    default:
                      t2.updateCounters();
                  }
                }, this.jodit.defaultTimeout)).on(this.jodit.container, "keydown.search", function(e3) {
                  if (n2.getRealMode() === a.MODE_WYSIWYG)
                    switch (e3.which) {
                      case u.KEY_ESC:
                        t2.close();
                        break;
                      case u.KEY_F3:
                        i2.queryInput.value && (n2.events.fire(e3.shiftKey ? "searchPrevious" : "searchNext"), e3.preventDefault());
                    }
                }).on("beforeSetMode.search", function() {
                  t2.close();
                }).on("keydown.search mousedown.search", function() {
                  t2.selInfo && (n2.selection.removeMarkers(), t2.selInfo = null), t2.isOpened && (t2.current = t2.jodit.selection.current(), t2.updateCounters());
                }).on("searchNext.search searchPrevious.search", function() {
                  return i2.findAndSelect(n2.selection.current() || n2.editor.firstChild, i2.queryInput.value, n2.events.current[n2.events.current.length - 1] === "searchNext");
                }).on("search.search", function(e3, t3) {
                  t3 === void 0 && (t3 = true), n2.execCommand("search", e3, t3);
                }), n2.registerCommand("search", { exec: function(e3, t3, o2) {
                  return o2 === void 0 && (o2 = true), i2.findAndSelect(n2.selection.current() || n2.editor.firstChild, t3 || "", o2), false;
                } }), n2.registerCommand("openSearchDialog", { exec: function() {
                  return i2.open(), false;
                }, hotkeys: ["ctrl+f", "cmd+f"] }), n2.registerCommand("openReplaceDialog", { exec: function() {
                  return n2.options.readonly || i2.open(true), false;
                }, hotkeys: ["ctrl+h", "cmd+h"] });
              }
            }, p.prototype.beforeDestruct = function(e3) {
              h.Dom.safeRemove(this.searchBox), e3.events && e3.events.off(".search"), e3.events && e3.events.off(e3.container, ".search");
            }, p;
          }(l.Plugin);
          t.search = d;
        }, function(e, t, o) {
          "use strict";
          var n, i = this && this.__extends || (n = function(e2, t2) {
            return (n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e3, t3) {
              e3.__proto__ = t3;
            } || function(e3, t3) {
              for (var o2 in t3)
                t3.hasOwnProperty(o2) && (e3[o2] = t3[o2]);
            })(e2, t2);
          }, function(e2, t2) {
            function o2() {
              this.constructor = e2;
            }
            n(e2, t2), e2.prototype = t2 === null ? Object.create(t2) : (o2.prototype = t2.prototype, new o2());
          });
          Object.defineProperty(t, "__esModule", { value: true });
          var r = o(2), a = o(1), s = o(6), l = o(8), c = o(23), d = o(0);
          r.Config.prototype.toolbarSticky = true, r.Config.prototype.toolbarDisableStickyForMobile = true, r.Config.prototype.toolbarStickyOffset = 0;
          var u = function(e2) {
            function t2() {
              var t3 = e2 !== null && e2.apply(this, arguments) || this;
              return t3.isToolbarSticked = false, t3.createDummy = function(e3) {
                t3.dummyBox || (t3.dummyBox = t3.jodit.create.div(), t3.dummyBox.classList.add("jodit_sticky-dummy_toolbar"), t3.jodit.container.insertBefore(t3.dummyBox, e3));
              }, t3.addSticky = function(e3) {
                t3.isToolbarSticked || (t3.createDummy(e3), t3.jodit.container.classList.add("jodit_sticky"), t3.isToolbarSticked = true), l.css(e3, { top: t3.jodit.options.toolbarStickyOffset, width: t3.jodit.container.offsetWidth }), l.css(t3.dummyBox, { height: e3.offsetHeight });
              }, t3.removeSticky = function(e3) {
                t3.isToolbarSticked && (l.css(e3, { width: "", top: "" }), t3.jodit.container.classList.remove("jodit_sticky"), t3.isToolbarSticked = false);
              }, t3;
            }
            return i(t2, e2), t2.prototype.isMobile = function() {
              return this.jodit && this.jodit.options && this.jodit.container && this.jodit.container.offsetWidth <= this.jodit.options.sizeSM;
            }, t2.prototype.afterInit = function(n2) {
              var i2 = this;
              n2.events.on(n2.ownerWindow, "scroll wheel mousewheel resize", function() {
                var e3 = n2.ownerWindow.pageYOffset || n2.ownerDocument.documentElement && n2.ownerDocument.documentElement.scrollTop || 0, t3 = c.offset(n2.container, n2, n2.ownerDocument, true), o2 = n2.getMode() === a.MODE_WYSIWYG && t3.top < e3 + n2.options.toolbarStickyOffset && e3 + n2.options.toolbarStickyOffset < t3.top + t3.height && !(n2.options.toolbarDisableStickyForMobile && i2.isMobile());
                n2.options.toolbarSticky && n2.options.toolbar && (o2 ? i2.addSticky(n2.toolbar.container) : i2.removeSticky(n2.toolbar.container)), n2.events.fire("toggleSticky", o2);
              });
            }, t2.prototype.beforeDestruct = function(e3) {
              d.Dom.safeRemove(this.dummyBox);
            }, t2;
          }(s.Plugin);
          t.sticky = u;
        }, function(e, t, o) {
          "use strict";
          var n, i = this && this.__extends || (n = function(e2, t2) {
            return (n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e3, t3) {
              e3.__proto__ = t3;
            } || function(e3, t3) {
              for (var o2 in t3)
                t3.hasOwnProperty(o2) && (e3[o2] = t3[o2]);
            })(e2, t2);
          }, function(e2, t2) {
            function o2() {
              this.constructor = e2;
            }
            n(e2, t2), e2.prototype = t2 === null ? Object.create(t2) : (o2.prototype = t2.prototype, new o2());
          });
          Object.defineProperty(t, "__esModule", { value: true });
          var r = o(2), a = o(1), s = o(4), l = o(6), c = o(0);
          r.Config.prototype.showCharsCounter = true, r.Config.prototype.showWordsCounter = true;
          var d = function(e2) {
            function t2() {
              var t3 = e2 !== null && e2.apply(this, arguments) || this;
              return t3.calc = s.throttle(function() {
                var e3 = t3.jodit.getEditorText();
                t3.jodit.options.showCharsCounter && t3.charCounter && (t3.charCounter.innerText = t3.jodit.i18n("Chars: %d", e3.replace(a.SPACE_REG_EXP, "").length)), t3.jodit.options.showWordsCounter && t3.wordCounter && (t3.wordCounter.innerText = t3.jodit.i18n("Words: %d", e3.replace(a.INVISIBLE_SPACE_REG_EXP, "").split(a.SPACE_REG_EXP).filter(function(e4) {
                  return e4.length;
                }).length));
              }, t3.jodit.defaultTimeout), t3;
            }
            return i(t2, e2), t2.prototype.afterInit = function() {
              this.jodit.options.showCharsCounter && (this.charCounter = this.jodit.create.span(), this.jodit.statusbar.append(this.charCounter, true)), this.jodit.options.showWordsCounter && (this.wordCounter = this.jodit.create.span(), this.jodit.statusbar.append(this.wordCounter, true)), this.jodit.events.on("change", this.calc), this.calc();
            }, t2.prototype.beforeDestruct = function() {
              c.Dom.safeRemove(this.charCounter), c.Dom.safeRemove(this.wordCounter), this.charCounter = null, this.wordCounter = null;
            }, t2;
          }(l.Plugin);
          t.stat = d;
        }, function(e, t, o) {
          "use strict";
          var n, i = this && this.__extends || (n = function(e2, t2) {
            return (n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e3, t3) {
              e3.__proto__ = t3;
            } || function(e3, t3) {
              for (var o2 in t3)
                t3.hasOwnProperty(o2) && (e3[o2] = t3[o2]);
            })(e2, t2);
          }, function(e2, t2) {
            function o2() {
              this.constructor = e2;
            }
            n(e2, t2), e2.prototype = t2 === null ? Object.create(t2) : (o2.prototype = t2.prototype, new o2());
          }), r = this && this.__assign || function() {
            return (r = Object.assign || function(e2) {
              for (var t2, o2 = 1, n2 = arguments.length; o2 < n2; o2++)
                for (var i2 in t2 = arguments[o2])
                  Object.prototype.hasOwnProperty.call(t2, i2) && (e2[i2] = t2[i2]);
              return e2;
            }).apply(this, arguments);
          };
          Object.defineProperty(t, "__esModule", { value: true });
          var a = o(2), s = o(1), l = o(36), c = o(0), d = o(4), u = o(9), f = o(6), p = o(26);
          a.Config.prototype.controls.selectall = { icon: "select-all", command: "selectall", tooltip: "Select all" }, a.Config.prototype.showXPathInStatusbar = true;
          var h = function(e2) {
            function t2() {
              var a2 = e2 !== null && e2.apply(this, arguments) || this;
              return a2.onContext = function(e3, t3) {
                return a2.menu || (a2.menu = new l.ContextMenu(a2.jodit)), a2.menu.show(t3.clientX, t3.clientY, [{ icon: "bin", title: e3 === a2.jodit.editor ? "Clear" : "Remove", exec: function() {
                  e3 !== a2.jodit.editor ? c.Dom.safeRemove(e3) : a2.jodit.value = "", a2.jodit.setEditorValue();
                } }, { icon: "select-all", title: "Select", exec: function() {
                  a2.jodit.selection.select(e3);
                } }]), false;
              }, a2.onSelectPath = function(e3, t3) {
                a2.jodit.selection.focus();
                var o2 = t3.target.getAttribute("data-path") || "/";
                if (o2 === "/")
                  return a2.jodit.execCommand("selectall"), false;
                try {
                  var n2 = a2.jodit.editorDocument.evaluate(o2, a2.jodit.editor, null, XPathResult.ANY_TYPE, null).iterateNext();
                  if (n2)
                    return a2.jodit.selection.select(n2), false;
                } catch (e4) {
                }
                return a2.jodit.selection.select(e3), false;
              }, a2.tpl = function(e3, t3, o2, n2) {
                var i2 = a2.jodit.create.fromHTML('<li><a role="button" data-path="' + t3 + '" href="javascript:void(0)" title="' + n2 + '" tabindex="-1">' + o2 + "</a></li>"), r2 = i2.firstChild;
                return a2.jodit.events.on(r2, "click", a2.onSelectPath.bind(a2, e3)).on(r2, "contextmenu", a2.onContext.bind(a2, e3)), i2;
              }, a2.appendSelectAll = function() {
                var e3 = new p.ToolbarButton(a2.jodit, r({ name: "selectall" }, a2.jodit.options.controls.selectall));
                a2.container && a2.container.insertBefore(e3.container, a2.container.firstChild);
              }, a2.calcPathImd = function() {
                var t3, o2, n2, e3 = a2.jodit.selection.current();
                a2.container && (a2.container.innerHTML = s.INVISIBLE_SPACE), e3 && c.Dom.up(e3, function(e4) {
                  e4 && a2.jodit.editor !== e4 && e4.nodeType !== Node.TEXT_NODE && (t3 = e4.nodeName.toLowerCase(), o2 = u.getXPathByElement(e4, a2.jodit.editor).replace(/^\//, ""), n2 = a2.tpl(e4, o2, t3, a2.jodit.i18n("Select %s", t3)), a2.container && a2.container.insertBefore(n2, a2.container.firstChild));
                }, a2.jodit.editor), a2.appendSelectAll();
              }, a2.calcPath = d.debounce(a2.calcPathImd, 2 * a2.jodit.defaultTimeout), a2.container = null, a2.menu = null, a2;
            }
            return i(t2, e2), t2.prototype.afterInit = function() {
              var e3 = this;
              this.jodit.options.showXPathInStatusbar && (this.container = this.jodit.create.element("ul"), this.container.classList.add("jodit_xpath"), this.jodit.statusbar.append(this.container), this.jodit.events.on("mouseup.xpath change.xpath keydown.xpath changeSelection.xpath", this.calcPath).on("afterSetMode.xpath afterInit.xpath", function() {
                e3.jodit.getRealMode() === s.MODE_WYSIWYG ? e3.calcPath() : (e3.container && (e3.container.innerHTML = s.INVISIBLE_SPACE), e3.appendSelectAll());
              }), this.calcPath());
            }, t2.prototype.beforeDestruct = function() {
              this.jodit && this.jodit.events && this.jodit.events.off(".xpath"), this.menu && this.menu.destruct(), c.Dom.safeRemove(this.container), this.menu = null, this.container = null;
            }, t2;
          }(f.Plugin);
          t.xpath = h;
        }, function(e, t, o) {
          "use strict";
          var n, i = this && this.__extends || (n = function(e2, t2) {
            return (n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e3, t3) {
              e3.__proto__ = t3;
            } || function(e3, t3) {
              for (var o2 in t3)
                t3.hasOwnProperty(o2) && (e3[o2] = t3[o2]);
            })(e2, t2);
          }, function(e2, t2) {
            function o2() {
              this.constructor = e2;
            }
            n(e2, t2), e2.prototype = t2 === null ? Object.create(t2) : (o2.prototype = t2.prototype, new o2());
          });
          Object.defineProperty(t, "__esModule", { value: true });
          var r = o(2), a = o(3), s = o(6), l = o(0);
          r.Config.prototype.draggableTags = ["img", "a", "jodit-media", "jodit"];
          var c = function(e2) {
            function t2() {
              var n2 = e2 !== null && e2.apply(this, arguments) || this;
              return n2.dragList = [], n2.isCopyMode = false, n2.draggable = null, n2.wasMoved = false, n2.timeout = 0, n2.onDrag = a.throttle(function(e3) {
                n2.draggable && (n2.wasMoved = true, n2.jodit.events.fire("hidePopup hideResizer"), n2.draggable.parentNode || n2.jodit.ownerDocument.body.appendChild(n2.draggable), a.css(n2.draggable, { left: e3.clientX + 20, top: e3.clientY + 20 }), n2.jodit.selection.insertCursorAtPoint(e3.clientX, e3.clientY));
              }, n2.jodit.defaultTimeout), n2.onDragStart = function(t3) {
                var e3 = t3.target, o2 = null;
                if (n2.dragList.length) {
                  for (; n2.dragList.indexOf(e3.nodeName.toLowerCase()) != -1 && (!o2 || e3.firstChild === o2 && e3.lastChild === o2) && (o2 = e3), (e3 = e3.parentNode) && e3 !== n2.jodit.editor; )
                    ;
                  o2 && (n2.isCopyMode = a.ctrlKey(t3), n2.onDragEnd(), n2.timeout = a.setTimeout(function(e4) {
                    e4 && (n2.draggable = e4.cloneNode(true), a.dataBind(n2.draggable, "target", e4), a.css(n2.draggable, { "z-index": 1e14, "pointer-events": "none", position: "fixed", display: "inlin-block", left: t3.clientX, top: t3.clientY, width: e4.offsetWidth, height: e4.offsetHeight }));
                  }, n2.jodit.defaultTimeout, o2), t3.preventDefault());
                }
              }, n2.onDragEnd = function() {
                window.clearTimeout(n2.timeout), n2.draggable && (l.Dom.safeRemove(n2.draggable), n2.draggable = null, n2.wasMoved = false);
              }, n2.onDrop = function() {
                if (n2.draggable && n2.wasMoved) {
                  var e3 = a.dataBind(n2.draggable, "target");
                  n2.onDragEnd(), n2.isCopyMode && (e3 = e3.cloneNode(true)), n2.jodit.selection.insertNode(e3, true, false), e3.nodeName === "IMG" && n2.jodit.events && n2.jodit.events.fire("afterInsertImage", e3), n2.jodit.events.fire("synchro");
                } else
                  n2.onDragEnd();
              }, n2;
            }
            return i(t2, e2), t2.prototype.afterInit = function() {
              this.dragList = this.jodit.options.draggableTags ? a.splitArray(this.jodit.options.draggableTags).filter(function(e3) {
                return e3;
              }).map(function(e3) {
                return e3.toLowerCase();
              }) : [], this.dragList.length && this.jodit.events.on(this.jodit.editor, "mousemove touchmove", this.onDrag).on(this.jodit.editor, "mousedown touchstart dragstart", this.onDragStart).on("mouseup touchend", this.onDrop).on(window, "mouseup touchend", this.onDragEnd);
            }, t2.prototype.beforeDestruct = function() {
              this.onDragEnd();
            }, t2;
          }(s.Plugin);
          t.DragAndDropElement = c;
        }, function(e, t, o) {
          "use strict";
          var n, i = this && this.__extends || (n = function(e2, t2) {
            return (n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e3, t3) {
              e3.__proto__ = t3;
            } || function(e3, t3) {
              for (var o2 in t3)
                t3.hasOwnProperty(o2) && (e3[o2] = t3[o2]);
            })(e2, t2);
          }, function(e2, t2) {
            function o2() {
              this.constructor = e2;
            }
            n(e2, t2), e2.prototype = t2 === null ? Object.create(t2) : (o2.prototype = t2.prototype, new o2());
          });
          Object.defineProperty(t, "__esModule", { value: true });
          var r = o(1), a = o(0), l = o(3), s = function(e2) {
            function t2() {
              var s2 = e2 !== null && e2.apply(this, arguments) || this;
              return s2.isFragmentFromEditor = false, s2.isCopyMode = false, s2.startDragPoint = { x: 0, y: 0 }, s2.draggable = null, s2.bufferRange = null, s2.onDragEnd = function() {
                s2.draggable && (a.Dom.safeRemove(s2.draggable), s2.draggable = null), s2.isCopyMode = false;
              }, s2.onDrag = function(e3) {
                s2.draggable && (s2.draggable.parentNode || s2.jodit.ownerDocument.body.appendChild(s2.draggable), s2.jodit.events.fire("hidePopup"), l.css(s2.draggable, { left: e3.clientX + 20, top: e3.clientY + 20 }), s2.jodit.selection.insertCursorAtPoint(e3.clientX, e3.clientY), e3.preventDefault(), e3.stopPropagation());
              }, s2.onDrop = function(e3) {
                if (!e3.dataTransfer || !e3.dataTransfer.files || !e3.dataTransfer.files.length) {
                  if (!s2.isFragmentFromEditor && !s2.draggable)
                    return s2.jodit.events.fire("paste", e3), e3.preventDefault(), e3.stopPropagation(), false;
                  var t3 = s2.jodit.editorWindow.getSelection(), o2 = s2.bufferRange || (t3.rangeCount ? t3.getRangeAt(0) : null), n2 = null;
                  if (!s2.draggable && o2)
                    n2 = s2.isCopyMode ? o2.cloneContents() : o2.extractContents();
                  else if (s2.draggable)
                    if (s2.isCopyMode) {
                      var i2 = s2.draggable.getAttribute("data-is-file") === "1" ? ["a", "href"] : ["img", "src"], r2 = i2[0], a2 = i2[1];
                      (n2 = s2.jodit.editorDocument.createElement(r2)).setAttribute(a2, s2.draggable.getAttribute("data-src") || s2.draggable.getAttribute("src") || ""), r2 === "a" && (n2.innerText = n2.getAttribute(a2) || "");
                    } else
                      n2 = l.dataBind(s2.draggable, "target");
                  else
                    s2.getText(e3) && (n2 = s2.jodit.create.inside.fromHTML(s2.getText(e3)));
                  t3.removeAllRanges(), s2.jodit.selection.insertCursorAtPoint(e3.clientX, e3.clientY), n2 && (s2.jodit.selection.insertNode(n2, false, false), o2 && n2.firstChild && n2.lastChild && (o2.setStartBefore(n2.firstChild), o2.setEndAfter(n2.lastChild), s2.jodit.selection.selectRange(o2), s2.jodit.events.fire("synchro")), n2.nodeName === "IMG" && s2.jodit.events && s2.jodit.events.fire("afterInsertImage", n2)), e3.preventDefault(), e3.stopPropagation();
                }
                s2.isFragmentFromEditor = false;
              }, s2.onDragStart = function(e3) {
                var t3 = e3.target;
                if (s2.onDragEnd(), s2.isFragmentFromEditor = a.Dom.isOrContains(s2.jodit.editor, t3, true), s2.isCopyMode = !s2.isFragmentFromEditor || l.ctrlKey(e3), s2.isFragmentFromEditor) {
                  var o2 = s2.jodit.editorWindow.getSelection(), n2 = o2.rangeCount ? o2.getRangeAt(0) : null;
                  n2 && (s2.bufferRange = n2.cloneRange());
                } else
                  s2.bufferRange = null;
                s2.startDragPoint.x = e3.clientX, s2.startDragPoint.y = e3.clientY, t3.nodeType === Node.ELEMENT_NODE && t3.matches(".jodit_filebrowser_files_item") && (t3 = t3.querySelector("img")), t3.nodeName === "IMG" && (s2.draggable = t3.cloneNode(true), l.dataBind(s2.draggable, "target", t3), l.css(s2.draggable, { "z-index": 1e14, "pointer-events": "none", position: "fixed", display: "inlin-block", left: s2.startDragPoint.x, top: s2.startDragPoint.y, width: t3.offsetWidth, height: t3.offsetHeight }));
              }, s2.getDataTransfer = function(e3) {
                return e3.dataTransfer || new DataTransfer();
              }, s2.getText = function(e3) {
                var t3 = s2.getDataTransfer(e3);
                return t3.getData(r.TEXT_HTML) || t3.getData(r.TEXT_PLAIN);
              }, s2;
            }
            return i(t2, e2), t2.prototype.afterInit = function() {
              this.jodit.events.on(window, "dragover", this.onDrag).on([window, this.jodit.editorDocument, this.jodit.editor], "dragstart", this.onDragStart).on("drop", this.onDrop).on(window, "dragend drop mouseup", this.onDragEnd);
            }, t2.prototype.beforeDestruct = function() {
              this.onDragEnd();
            }, t2;
          }(o(6).Plugin);
          t.DragAndDrop = s;
        }, function(e, t, o) {
          "use strict";
          var n, i = this && this.__extends || (n = function(e2, t2) {
            return (n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e3, t3) {
              e3.__proto__ = t3;
            } || function(e3, t3) {
              for (var o2 in t3)
                t3.hasOwnProperty(o2) && (e3[o2] = t3[o2]);
            })(e2, t2);
          }, function(e2, t2) {
            function o2() {
              this.constructor = e2;
            }
            n(e2, t2), e2.prototype = t2 === null ? Object.create(t2) : (o2.prototype = t2.prototype, new o2());
          });
          Object.defineProperty(t, "__esModule", { value: true });
          var r = o(1), a = o(13), s = o(6), l = o(0), c = o(15), d = function(e2) {
            function t2() {
              var n2 = e2 !== null && e2.apply(this, arguments) || this;
              return n2.currentIndex = 0, n2.list = [], n2.container = null, n2.listBox = null, n2.previewBox = null, n2.dialog = null, n2.paste = function() {
                if (n2.jodit.selection.focus(), n2.jodit.selection.insertHTML(n2.list[n2.currentIndex]), n2.currentIndex !== 0) {
                  var e3 = n2.list[0];
                  n2.list[0] = n2.list[n2.currentIndex], n2.list[n2.currentIndex] = e3;
                }
                n2.dialog && n2.dialog.close(), n2.jodit.setEditorValue();
              }, n2.onKeyDown = function(e3) {
                var t3 = n2.currentIndex;
                [r.KEY_UP, r.KEY_DOWN, r.KEY_ENTER].indexOf(e3.which) != -1 && (e3.which === r.KEY_UP && (t3 === 0 ? t3 = n2.list.length - 1 : t3 -= 1), e3.which === r.KEY_DOWN && (t3 === n2.list.length - 1 ? t3 = 0 : t3 += 1), e3.which !== r.KEY_ENTER ? (t3 !== n2.currentIndex && n2.selectIndex(t3), e3.stopImmediatePropagation(), e3.preventDefault()) : n2.paste());
              }, n2.selectIndex = function(o2) {
                n2.listBox && Array.from(n2.listBox.childNodes).forEach(function(e3, t3) {
                  e3.classList.remove("jodit_active"), o2 === t3 && n2.previewBox && (e3.classList.add("jodit_active"), n2.previewBox.innerHTML = n2.list[o2], e3.focus());
                }), n2.currentIndex = o2;
              }, n2.showDialog = function() {
                n2.list.length < 2 || (n2.dialog || n2.createDialog(), n2.listBox && (n2.listBox.innerHTML = ""), n2.previewBox && (n2.previewBox.innerHTML = ""), n2.list.forEach(function(e3, t3) {
                  var o2 = n2.jodit.ownerDocument.createElement("a");
                  o2.innerText = t3 + 1 + ". " + e3.replace(r.SPACE_REG_EXP, ""), o2.addEventListener("keydown", n2.onKeyDown), o2.setAttribute("href", "javascript:void(0)"), o2.setAttribute("data-index", "" + t3), o2.setAttribute("tab-index", "-1"), n2.listBox && n2.listBox.appendChild(o2);
                }), n2.dialog && n2.dialog.open(), c.setTimeout(function() {
                  n2.selectIndex(0);
                }, 100));
              }, n2;
            }
            return i(t2, e2), t2.prototype.createDialog = function() {
              var o2 = this;
              this.dialog = new a.Dialog(this.jodit);
              var e3 = this.jodit.create.fromHTML('<a href="javascript:void(0)" style="float:right;" class="jodit_button"><span>' + this.jodit.i18n("Paste") + "</span></a>");
              e3.addEventListener("click", this.paste);
              var t3 = this.jodit.create.fromHTML('<a href="javascript:void(0)" style="float:right; margin-right: 10px;" class="jodit_button"><span>' + this.jodit.i18n("Cancel") + "</span></a>");
              t3.addEventListener("click", this.dialog.close), this.container = this.jodit.ownerDocument.createElement("div"), this.container.classList.add("jodit_paste_storage"), this.listBox = this.jodit.ownerDocument.createElement("div"), this.previewBox = this.jodit.ownerDocument.createElement("div"), this.container.appendChild(this.listBox), this.container.appendChild(this.previewBox), this.dialog.setTitle(this.jodit.i18n("Choose Content to Paste")), this.dialog.setContent(this.container), this.dialog.setFooter([e3, t3]), this.jodit.events.on(this.listBox, "click dblclick", function(e4) {
                var t4 = e4.target;
                return t4 && t4.nodeName === "A" && t4.hasAttribute("data-index") && o2.selectIndex(parseInt(t4.getAttribute("data-index") || "0", 10)), e4.type === "dblclick" && o2.paste(), false;
              }, "a");
            }, t2.prototype.afterInit = function() {
              var t3 = this;
              this.jodit.events.on("afterCopy", function(e3) {
                t3.list.indexOf(e3) != -1 && t3.list.splice(t3.list.indexOf(e3), 1), t3.list.unshift(e3), 5 < t3.list.length && (t3.list.length = 5);
              }), this.jodit.registerCommand("showPasteStorage", { exec: this.showDialog, hotkeys: ["ctrl+shift+v", "cmd+shift+v"] });
            }, t2.prototype.beforeDestruct = function() {
              this.dialog && this.dialog.destruct(), l.Dom.safeRemove(this.previewBox), l.Dom.safeRemove(this.listBox), l.Dom.safeRemove(this.container), this.container = null, this.listBox = null, this.previewBox = null, this.dialog = null, this.list = [];
            }, t2;
          }(s.Plugin);
          t.pasteStorage = d;
        }, function(e, t, o) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: true });
          var n = o(170);
          t.about = n;
          var i = o(171);
          t.addcolumn = i;
          var r = o(172);
          t.addrow = r;
          var a = o(173);
          t.angle_down = a;
          var s = o(174);
          t.angle_left = s;
          var l = o(175);
          t.angle_right = l;
          var c = o(176);
          t.angle_up = c;
          var d = o(177);
          t.arrows_alt = d;
          var u = o(178);
          t.arrows_h = u;
          var f = o(179);
          t.attachment = f;
          var p = o(180);
          t.bin = p;
          var h = o(181);
          t.bold = h;
          var v = o(182);
          t.brush = v;
          var m = o(183);
          t.cancel = m;
          var g = o(184);
          t.center = g;
          var b = o(185);
          t.chain_broken = b;
          var _ = o(186);
          t.check_square = _;
          var y = o(187);
          t.check = y;
          var w = o(188);
          t.copyformat = w;
          var C = o(189);
          t.crop = C;
          var j = o(190);
          t.cut = j;
          var E = o(191);
          t.dedent = E;
          var T = o(192);
          t.dots = T;
          var S = o(193);
          t.enter = S;
          var x = o(194);
          t.eraser = x;
          var I = o(195);
          t.eye = I;
          var D = o(196);
          t.file = D;
          var k = o(197);
          t.folder = k;
          var L = o(198);
          t.font = L;
          var A = o(199);
          t.fontsize = A;
          var M = o(200);
          t.fullsize = M;
          var q = o(201);
          t.hr = q;
          var O = o(202);
          t.image = O;
          var z = o(203);
          t.indent = z;
          var P = o(204);
          t.info_circle = P;
          var N = o(205);
          t.italic = N;
          var R = o(206);
          t.justify = R;
          var B = o(207);
          t.left = B;
          var H = o(208);
          t.link = H;
          var W = o(209);
          t.lock = W;
          var F = o(210);
          t.menu = F;
          var V = o(211);
          t.merge = V;
          var U = o(212);
          t.ol = U;
          var Y = o(213);
          t.omega = Y;
          var K = o(214);
          t.outdent = K;
          var X = o(215);
          t.paragraph = X;
          var G = o(216);
          t.pencil = G;
          var $ = o(217);
          t.plus = $;
          var J = o(218);
          t.print = J;
          var Z = o(219);
          t.redo = Z;
          var Q = o(220);
          t.resize = Q;
          var ee = o(221);
          t.resizer = ee;
          var te = o(222);
          t.right = te;
          var oe = o(223);
          t.save = oe;
          var ne = o(224);
          t.select_all = ne;
          var ie = o(225);
          t.shrink = ie;
          var re = o(226);
          t.source = re;
          var ae = o(227);
          t.splitg = ae;
          var se = o(228);
          t.splitv = se;
          var le = o(229);
          t.strikethrough = le;
          var ce = o(230);
          t.subscript = ce;
          var de = o(231);
          t.superscript = de;
          var ue = o(232);
          t.table = ue;
          var fe = o(233);
          t.th_list = fe;
          var pe = o(234);
          t.th = pe;
          var he = o(235);
          t.ul = he;
          var ve = o(236);
          t.underline = ve;
          var me = o(237);
          t.undo = me;
          var ge = o(238);
          t.unlink = ge;
          var be = o(239);
          t.unlock = be;
          var _e = o(240);
          t.update = _e;
          var ye = o(241);
          t.upload = ye;
          var we = o(242);
          t.valign = we;
          var Ce = o(243);
          t.video = Ce;
        }, function(e, t) {
          e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1088 1256v240q0 16-12 28t-28 12h-240q-16 0-28-12t-12-28v-240q0-16 12-28t28-12h240q16 0 28 12t12 28zm316-600q0 54-15.5 101t-35 76.5-55 59.5-57.5 43.5-61 35.5q-41 23-68.5 65t-27.5 67q0 17-12 32.5t-28 15.5h-240q-15 0-25.5-18.5t-10.5-37.5v-45q0-83 65-156.5t143-108.5q59-27 84-56t25-76q0-42-46.5-74t-107.5-32q-65 0-108 29-35 25-107 115-13 16-31 16-12 0-25-8l-164-125q-13-10-15.5-25t5.5-28q160-266 464-266 80 0 161 31t146 83 106 127.5 41 158.5z"/></svg>';
        }, function(e, t) {
          e.exports = '<svg viewBox="0 0 18.151 18.151">\n<g>\n	<g>\n		<path d="M6.237,16.546H3.649V1.604h5.916v5.728c0.474-0.122,0.968-0.194,1.479-0.194\n			c0.042,0,0.083,0.006,0.125,0.006V0H2.044v18.15h5.934C7.295,17.736,6.704,17.19,6.237,16.546z"/>\n		<path d="M11.169,8.275c-2.723,0-4.938,2.215-4.938,4.938s2.215,4.938,4.938,4.938s4.938-2.215,4.938-4.938\n			S13.892,8.275,11.169,8.275z M11.169,16.81c-1.983,0-3.598-1.612-3.598-3.598c0-1.983,1.614-3.597,3.598-3.597\n			s3.597,1.613,3.597,3.597C14.766,15.198,13.153,16.81,11.169,16.81z"/>\n		<polygon  points="11.792,11.073 10.502,11.073 10.502,12.578 9.03,12.578 9.03,13.868 10.502,13.868\n			10.502,15.352 11.792,15.352 11.792,13.868 13.309,13.868 13.309,12.578 11.792,12.578 		"/>\n	</g>\n</g>\n</svg>\n';
        }, function(e, t) {
          e.exports = '<svg viewBox="0 0 432 432">\n<g>\n	<g>\n		<polygon points="203.688,96 0,96 0,144 155.688,144 		"/>\n		<polygon points="155.719,288 0,288 0,336 203.719,336 		"/>\n		<rect x="252" y="96"/>\n		<rect/>\n		<rect x="252" y="288"/>\n		<rect y="384"/>\n		<path d="M97.844,230.125c-3.701-3.703-5.856-8.906-5.856-14.141s2.154-10.438,5.856-14.141l9.844-9.844H0v48h107.719\n			L97.844,230.125z"/>\n		<polygon points="232,176 232,96 112,216 232,336 232,256 432,256 432,176 		"/>\n	</g>\n</g>\n</svg>\n';
        }, function(e, t) {
          e.exports = '<svg  viewBox="0 0 1792 1792">\n    <path d="M1395 736q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z"/>\n</svg>';
        }, function(e, t) {
          e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1203 544q0 13-10 23l-393 393 393 393q10 10 10 23t-10 23l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23z"/></svg>';
        }, function(e, t) {
          e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1171 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z"/></svg>';
        }, function(e, t) {
          e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1395 1184q0 13-10 23l-50 50q-10 10-23 10t-23-10l-393-393-393 393q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l466 466q10 10 10 23z"/></svg>';
        }, function(e, t) {
          e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1411 541l-355 355 355 355 144-144q29-31 70-14 39 17 39 59v448q0 26-19 45t-45 19h-448q-42 0-59-40-17-39 14-69l144-144-355-355-355 355 144 144q31 30 14 69-17 40-59 40h-448q-26 0-45-19t-19-45v-448q0-42 40-59 39-17 69 14l144 144 355-355-355-355-144 144q-19 19-45 19-12 0-24-5-40-17-40-59v-448q0-26 19-45t45-19h448q42 0 59 40 17 39-14 69l-144 144 355 355 355-355-144-144q-31-30-14-69 17-40 59-40h448q26 0 45 19t19 45v448q0 42-39 59-13 5-25 5-26 0-45-19z"/></svg>';
        }, function(e, t) {
          e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1792 896q0 26-19 45l-256 256q-19 19-45 19t-45-19-19-45v-128h-1024v128q0 26-19 45t-45 19-45-19l-256-256q-19-19-19-45t19-45l256-256q19-19 45-19t45 19 19 45v128h1024v-128q0-26 19-45t45-19 45 19l256 256q19 19 19 45z"/></svg>';
        }, function(e, t) {
          e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1596 1385q0 117-79 196t-196 79q-135 0-235-100l-777-776q-113-115-113-271 0-159 110-270t269-111q158 0 273 113l605 606q10 10 10 22 0 16-30.5 46.5t-46.5 30.5q-13 0-23-10l-606-607q-79-77-181-77-106 0-179 75t-73 181q0 105 76 181l776 777q63 63 145 63 64 0 106-42t42-106q0-82-63-145l-581-581q-26-24-60-24-29 0-48 19t-19 48q0 32 25 59l410 410q10 10 10 22 0 16-31 47t-47 31q-12 0-22-10l-410-410q-63-61-63-149 0-82 57-139t139-57q88 0 149 63l581 581q100 98 100 235z"/></svg>';
        }, function(e, t) {
          e.exports = '<svg viewBox="0 0 1792 1792"><path d="M704 1376v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm-544-992h448l-48-117q-7-9-17-11h-317q-10 2-17 11zm928 32v64q0 14-9 23t-23 9h-96v948q0 83-47 143.5t-113 60.5h-832q-66 0-113-58.5t-47-141.5v-952h-96q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h309l70-167q15-37 54-63t79-26h320q40 0 79 26t54 63l70 167h309q14 0 23 9t9 23z"/></svg>';
        }, function(e, t) {
          e.exports = '<svg viewBox="0 0 1792 1792"><path d="M747 1521q74 32 140 32 376 0 376-335 0-114-41-180-27-44-61.5-74t-67.5-46.5-80.5-25-84-10.5-94.5-2q-73 0-101 10 0 53-.5 159t-.5 158q0 8-1 67.5t-.5 96.5 4.5 83.5 12 66.5zm-14-746q42 7 109 7 82 0 143-13t110-44.5 74.5-89.5 25.5-142q0-70-29-122.5t-79-82-108-43.5-124-14q-50 0-130 13 0 50 4 151t4 152q0 27-.5 80t-.5 79q0 46 1 69zm-541 889l2-94q15-4 85-16t106-27q7-12 12.5-27t8.5-33.5 5.5-32.5 3-37.5.5-34v-65.5q0-982-22-1025-4-8-22-14.5t-44.5-11-49.5-7-48.5-4.5-30.5-3l-4-83q98-2 340-11.5t373-9.5q23 0 68.5.5t67.5.5q70 0 136.5 13t128.5 42 108 71 74 104.5 28 137.5q0 52-16.5 95.5t-39 72-64.5 57.5-73 45-84 40q154 35 256.5 134t102.5 248q0 100-35 179.5t-93.5 130.5-138 85.5-163.5 48.5-176 14q-44 0-132-3t-132-3q-106 0-307 11t-231 12z"/></svg>';
        }, function(e, t) {
          e.exports = '<svg viewBox="0 0 1792 1792"><path d="M896 1152q0-36-20-69-1-1-15.5-22.5t-25.5-38-25-44-21-50.5q-4-16-21-16t-21 16q-7 23-21 50.5t-25 44-25.5 38-15.5 22.5q-20 33-20 69 0 53 37.5 90.5t90.5 37.5 90.5-37.5 37.5-90.5zm512-128q0 212-150 362t-362 150-362-150-150-362q0-145 81-275 6-9 62.5-90.5t101-151 99.5-178 83-201.5q9-30 34-47t51-17 51.5 17 33.5 47q28 93 83 201.5t99.5 178 101 151 62.5 90.5q81 127 81 275z"/></svg>';
        }, function(e, t) {
          e.exports = '<svg viewBox="0 0 16 16">\n    <g transform="translate(0,-1036.3622)">\n        <path d="m 2,1050.3622 12,-12"\n              style="fill:none;stroke:#000000;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none"/>\n        <path d="m 2,1038.3622 12,12"\n              style="fill:none;stroke:#000000;stroke-width:2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none"/>\n    </g>\n</svg>';
        }, function(e, t) {
          e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1792 1344v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm-384-384v128q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h896q26 0 45 19t19 45zm256-384v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm-384-384v128q0 26-19 45t-45 19h-640q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h640q26 0 45 19t19 45z"/></svg>';
        }, function(e, t) {
          e.exports = '<svg viewBox="0 0 1792 1792"><path d="M503 1271l-256 256q-10 9-23 9-12 0-23-9-9-10-9-23t9-23l256-256q10-9 23-9t23 9q9 10 9 23t-9 23zm169 41v320q0 14-9 23t-23 9-23-9-9-23v-320q0-14 9-23t23-9 23 9 9 23zm-224-224q0 14-9 23t-23 9h-320q-14 0-23-9t-9-23 9-23 23-9h320q14 0 23 9t9 23zm1264 128q0 120-85 203l-147 146q-83 83-203 83-121 0-204-85l-334-335q-21-21-42-56l239-18 273 274q27 27 68 27.5t68-26.5l147-146q28-28 28-67 0-40-28-68l-274-275 18-239q35 21 56 42l336 336q84 86 84 204zm-617-724l-239 18-273-274q-28-28-68-28-39 0-68 27l-147 146q-28 28-28 67 0 40 28 68l274 274-18 240q-35-21-56-42l-336-336q-84-86-84-204 0-120 85-203l147-146q83-83 203-83 121 0 204 85l334 335q21 21 42 56zm633 84q0 14-9 23t-23 9h-320q-14 0-23-9t-9-23 9-23 23-9h320q14 0 23 9t9 23zm-544-544v320q0 14-9 23t-23 9-23-9-9-23v-320q0-14 9-23t23-9 23 9 9 23zm407 151l-256 256q-11 9-23 9t-23-9q-9-10-9-23t9-23l256-256q10-9 23-9t23 9q9 10 9 23t-9 23z"/></svg>';
        }, function(e, t) {
          e.exports = '<svg viewBox="0 0 1792 1792"><path d="M813 1299l614-614q19-19 19-45t-19-45l-102-102q-19-19-45-19t-45 19l-467 467-211-211q-19-19-45-19t-45 19l-102 102q-19 19-19 45t19 45l358 358q19 19 45 19t45-19zm851-883v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z"/></svg>';
        }, function(e, t) {
          e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1472 930v318q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 84.5-203.5t203.5-84.5h832q63 0 117 25 15 7 18 23 3 17-9 29l-49 49q-10 10-23 10-3 0-9-2-23-6-45-6h-832q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113v-254q0-13 9-22l64-64q10-10 23-10 6 0 12 3 20 8 20 29zm231-489l-814 814q-24 24-57 24t-57-24l-430-430q-24-24-24-57t24-57l110-110q24-24 57-24t57 24l263 263 647-647q24-24 57-24t57 24l110 110q24 24 24 57t-24 57z"/></svg>';
        }, function(e, t) {
          e.exports = '<svg viewBox="0 0 16 16"><path d="M16 9v-6h-3v-1c0-0.55-0.45-1-1-1h-11c-0.55 0-1 0.45-1 1v3c0 0.55 0.45 1 1 1h11c0.55 0 1-0.45 1-1v-1h2v4h-9v2h-0.5c-0.276 0-0.5 0.224-0.5 0.5v5c0 0.276 0.224 0.5 0.5 0.5h2c0.276 0 0.5-0.224 0.5-0.5v-5c0-0.276-0.224-0.5-0.5-0.5h-0.5v-1h9zM12 3h-11v-1h11v1z"/></svg>\n';
        }, function(e, t) {
          e.exports = '<svg viewBox="0 0 1792 1792">\n    <path d="M621 1280h595v-595zm-45-45l595-595h-595v595zm1152 77v192q0 14-9 23t-23 9h-224v224q0 14-9 23t-23 9h-192q-14 0-23-9t-9-23v-224h-864q-14 0-23-9t-9-23v-864h-224q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h224v-224q0-14 9-23t23-9h192q14 0 23 9t9 23v224h851l246-247q10-9 23-9t23 9q9 10 9 23t-9 23l-247 246v851h224q14 0 23 9t9 23z"/>\n</svg>';
        }, function(e, t) {
          e.exports = '<svg viewBox="0 0 1792 1792">\n    <path d="M960 896q26 0 45 19t19 45-19 45-45 19-45-19-19-45 19-45 45-19zm300 64l507 398q28 20 25 56-5 35-35 51l-128 64q-13 7-29 7-17 0-31-8l-690-387-110 66q-8 4-12 5 14 49 10 97-7 77-56 147.5t-132 123.5q-132 84-277 84-136 0-222-78-90-84-79-207 7-76 56-147t131-124q132-84 278-84 83 0 151 31 9-13 22-22l122-73-122-73q-13-9-22-22-68 31-151 31-146 0-278-84-82-53-131-124t-56-147q-5-59 15.5-113t63.5-93q85-79 222-79 145 0 277 84 83 52 132 123t56 148q4 48-10 97 4 1 12 5l110 66 690-387q14-8 31-8 16 0 29 7l128 64q30 16 35 51 3 36-25 56zm-681-260q46-42 21-108t-106-117q-92-59-192-59-74 0-113 36-46 42-21 108t106 117q92 59 192 59 74 0 113-36zm-85 745q81-51 106-117t-21-108q-39-36-113-36-100 0-192 59-81 51-106 117t21 108q39 36 113 36 100 0 192-59zm178-613l96 58v-11q0-36 33-56l14-8-79-47-26 26q-3 3-10 11t-12 12q-2 2-4 3.5t-3 2.5zm224 224l96 32 736-576-128-64-768 431v113l-160 96 9 8q2 2 7 6 4 4 11 12t11 12l26 26zm704 416l128-64-520-408-177 138q-2 3-13 7z"/>\n</svg>';
        }, function(e, t) {
          e.exports = '<svg viewBox="0 0 1792 1792"><path d="M384 544v576q0 13-9.5 22.5t-22.5 9.5q-14 0-23-9l-288-288q-9-9-9-23t9-23l288-288q9-9 23-9 13 0 22.5 9.5t9.5 22.5zm1408 768v192q0 13-9.5 22.5t-22.5 9.5h-1728q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1728q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1088q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1088q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1088q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1088q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1728q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1728q13 0 22.5 9.5t9.5 22.5z"/></svg>';
        }, function(e, t) {
          e.exports = '<svg\n        enable-background="new 0 0 24 24"\n        viewBox="0 0 24 24"\n        xml:space="preserve"\n\n       >\n    <circle cx="12" cy="12" r="2.2"/>\n    <circle cx="12" cy="5" r="2.2"/>\n    <circle cx="12" cy="19" r="2.2"/>\n</svg>';
        }, function(e, t) {
          e.exports = '<svg viewBox="0 0 128 128" xml:space="preserve">\n    <g>\n        <polygon points="112.4560547,23.3203125 112.4560547,75.8154297 31.4853516,75.8154297 31.4853516,61.953125     16.0131836,72.6357422 0.5410156,83.3164063 16.0131836,93.9990234 31.4853516,104.6796875 31.4853516,90.8183594     112.4560547,90.8183594 112.4560547,90.8339844 127.4589844,90.8339844 127.4589844,23.3203125   "/>\n    </g>\n</svg>';
        }, function(e, t) {
          e.exports = '<svg viewBox="0 0 1792 1792"><path d="M832 1408l336-384h-768l-336 384h768zm1013-1077q15 34 9.5 71.5t-30.5 65.5l-896 1024q-38 44-96 44h-768q-38 0-69.5-20.5t-47.5-54.5q-15-34-9.5-71.5t30.5-65.5l896-1024q38-44 96-44h768q38 0 69.5 20.5t47.5 54.5z"/></svg>';
        }, function(e, t) {
          e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1664 960q-152-236-381-353 61 104 61 225 0 185-131.5 316.5t-316.5 131.5-316.5-131.5-131.5-316.5q0-121 61-225-229 117-381 353 133 205 333.5 326.5t434.5 121.5 434.5-121.5 333.5-326.5zm-720-384q0-20-14-34t-34-14q-125 0-214.5 89.5t-89.5 214.5q0 20 14 34t34 14 34-14 14-34q0-86 61-147t147-61q20 0 34-14t14-34zm848 384q0 34-20 69-140 230-376.5 368.5t-499.5 138.5-499.5-139-376.5-368q-20-35-20-69t20-69q140-229 376.5-368t499.5-139 499.5 139 376.5 368q20 35 20 69z"/></svg>';
        }, function(e, t) {
          e.exports = '<svg viewBox="0 0 1792 1792">\n    <path d="M1152 512v-472q22 14 36 28l408 408q14 14 28 36h-472zm-128 32q0 40 28 68t68 28h544v1056q0 40-28 68t-68 28h-1344q-40 0-68-28t-28-68v-1600q0-40 28-68t68-28h800v544z"/>\n</svg>';
        }, function(e, t) {
          e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1728 608v704q0 92-66 158t-158 66h-1216q-92 0-158-66t-66-158v-960q0-92 66-158t158-66h320q92 0 158 66t66 158v32h672q92 0 158 66t66 158z"/></svg>';
        }, function(e, t) {
          e.exports = '<svg viewBox="0 0 1792 1792"><path d="M789 559l-170 450q33 0 136.5 2t160.5 2q19 0 57-2-87-253-184-452zm-725 1105l2-79q23-7 56-12.5t57-10.5 49.5-14.5 44.5-29 31-50.5l237-616 280-724h128q8 14 11 21l205 480q33 78 106 257.5t114 274.5q15 34 58 144.5t72 168.5q20 45 35 57 19 15 88 29.5t84 20.5q6 38 6 57 0 4-.5 13t-.5 13q-63 0-190-8t-191-8q-76 0-215 7t-178 8q0-43 4-78l131-28q1 0 12.5-2.5t15.5-3.5 14.5-4.5 15-6.5 11-8 9-11 2.5-14q0-16-31-96.5t-72-177.5-42-100l-450-2q-26 58-76.5 195.5t-50.5 162.5q0 22 14 37.5t43.5 24.5 48.5 13.5 57 8.5 41 4q1 19 1 58 0 9-2 27-58 0-174.5-10t-174.5-10q-8 0-26.5 4t-21.5 4q-80 14-188 14z"/></svg>';
        }, function(e, t) {
          e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1744 1408q33 0 42 18.5t-11 44.5l-126 162q-20 26-49 26t-49-26l-126-162q-20-26-11-44.5t42-18.5h80v-1024h-80q-33 0-42-18.5t11-44.5l126-162q20-26 49-26t49 26l126 162q20 26 11 44.5t-42 18.5h-80v1024h80zm-1663-1279l54 27q12 5 211 5 44 0 132-2t132-2q36 0 107.5.5t107.5.5h293q6 0 21 .5t20.5 0 16-3 17.5-9 15-17.5l42-1q4 0 14 .5t14 .5q2 112 2 336 0 80-5 109-39 14-68 18-25-44-54-128-3-9-11-48t-14.5-73.5-7.5-35.5q-6-8-12-12.5t-15.5-6-13-2.5-18-.5-16.5.5q-17 0-66.5-.5t-74.5-.5-64 2-71 6q-9 81-8 136 0 94 2 388t2 455q0 16-2.5 71.5t0 91.5 12.5 69q40 21 124 42.5t120 37.5q5 40 5 50 0 14-3 29l-34 1q-76 2-218-8t-207-10q-50 0-151 9t-152 9q-3-51-3-52v-9q17-27 61.5-43t98.5-29 78-27q19-42 19-383 0-101-3-303t-3-303v-117q0-2 .5-15.5t.5-25-1-25.5-3-24-5-14q-11-12-162-12-33 0-93 12t-80 26q-19 13-34 72.5t-31.5 111-42.5 53.5q-42-26-56-44v-383z"/></svg>';
        }, function(e, t) {
          e.exports = '<svg viewBox="0 0 24 24" >\n	<path d="M22,20.6L3.4,2H8V0H0v8h2V3.4L20.6,22H16v2h8v-8h-2V20.6z M16,0v2h4.7l-6.3,6.3l1.4,1.4L22,3.5V8h2V0H16z   M8.3,14.3L2,20.6V16H0v8h8v-2H3.5l6.3-6.3L8.3,14.3z"/>\n</svg>';
        }, function(e, t) {
          e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1600 736v192q0 40-28 68t-68 28h-1216q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h1216q40 0 68 28t28 68z"/></svg>';
        }, function(e, t) {
          e.exports = '<svg viewBox="0 0 1792 1792"><path d="M576 576q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm1024 384v448h-1408v-192l320-320 160 160 512-512zm96-704h-1600q-13 0-22.5 9.5t-9.5 22.5v1216q0 13 9.5 22.5t22.5 9.5h1600q13 0 22.5-9.5t9.5-22.5v-1216q0-13-9.5-22.5t-22.5-9.5zm160 32v1216q0 66-47 113t-113 47h-1600q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1600q66 0 113 47t47 113z"/></svg>';
        }, function(e, t) {
          e.exports = '<svg viewBox="0 0 1792 1792">\n    <path d="M352 832q0 14-9 23l-288 288q-9 9-23 9-13 0-22.5-9.5t-9.5-22.5v-576q0-13 9.5-22.5t22.5-9.5q14 0 23 9l288 288q9 9 9 23zm1440 480v192q0 13-9.5 22.5t-22.5 9.5h-1728q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1728q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1088q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1088q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1088q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1088q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1728q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1728q13 0 22.5 9.5t9.5 22.5z"/>\n</svg>';
        }, function(e, t) {
          e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1152 1376v-160q0-14-9-23t-23-9h-96v-512q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v160q0 14 9 23t23 9h96v320h-96q-14 0-23 9t-9 23v160q0 14 9 23t23 9h448q14 0 23-9t9-23zm-128-896v-160q0-14-9-23t-23-9h-192q-14 0-23 9t-9 23v160q0 14 9 23t23 9h192q14 0 23-9t9-23zm640 416q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"/></svg>';
        }, function(e, t) {
          e.exports = '<svg viewBox="0 0 1792 1792"><path d="M384 1662l17-85q6-2 81.5-21.5t111.5-37.5q28-35 41-101 1-7 62-289t114-543.5 52-296.5v-25q-24-13-54.5-18.5t-69.5-8-58-5.5l19-103q33 2 120 6.5t149.5 7 120.5 2.5q48 0 98.5-2.5t121-7 98.5-6.5q-5 39-19 89-30 10-101.5 28.5t-108.5 33.5q-8 19-14 42.5t-9 40-7.5 45.5-6.5 42q-27 148-87.5 419.5t-77.5 355.5q-2 9-13 58t-20 90-16 83.5-6 57.5l1 18q17 4 185 31-3 44-16 99-11 0-32.5 1.5t-32.5 1.5q-29 0-87-10t-86-10q-138-2-206-2-51 0-143 9t-121 11z"/></svg>';
        }, function(e, t) {
          e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1792 1344v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm0-384v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm0-384v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm0-384v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45z"/></svg>';
        }, function(e, t) {
          e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1792 1344v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm-384-384v128q0 26-19 45t-45 19h-1280q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1280q26 0 45 19t19 45zm256-384v128q0 26-19 45t-45 19h-1536q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1536q26 0 45 19t19 45zm-384-384v128q0 26-19 45t-45 19h-1152q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1152q26 0 45 19t19 45z"/></svg>';
        }, function(e, t) {
          e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1520 1216q0-40-28-68l-208-208q-28-28-68-28-42 0-72 32 3 3 19 18.5t21.5 21.5 15 19 13 25.5 3.5 27.5q0 40-28 68t-68 28q-15 0-27.5-3.5t-25.5-13-19-15-21.5-21.5-18.5-19q-33 31-33 73 0 40 28 68l206 207q27 27 68 27 40 0 68-26l147-146q28-28 28-67zm-703-705q0-40-28-68l-206-207q-28-28-68-28-39 0-68 27l-147 146q-28 28-28 67 0 40 28 68l208 208q27 27 68 27 42 0 72-31-3-3-19-18.5t-21.5-21.5-15-19-13-25.5-3.5-27.5q0-40 28-68t68-28q15 0 27.5 3.5t25.5 13 19 15 21.5 21.5 18.5 19q33-31 33-73zm895 705q0 120-85 203l-147 146q-83 83-203 83-121 0-204-85l-206-207q-83-83-83-203 0-123 88-209l-88-88q-86 88-208 88-120 0-204-84l-208-208q-84-84-84-204t85-203l147-146q83-83 203-83 121 0 204 85l206 207q83 83 83 203 0 123-88 209l88 88q86-88 208-88 120 0 204 84l208 208q84 84 84 204z"/></svg>';
        }, function(e, t) {
          e.exports = '<svg viewBox="0 0 1792 1792"><path d="M640 768h512v-192q0-106-75-181t-181-75-181 75-75 181v192zm832 96v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-192q0-184 132-316t316-132 316 132 132 316v192h32q40 0 68 28t28 68z"/></svg>';
        }, function(e, t) {
          e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"/></svg>';
        }, function(e, t) {
          e.exports = '<svg\n     viewBox="0 0 312 312">\n    <g transform="translate(0.000000,312.000000) scale(0.100000,-0.100000)" stroke="none">\n        <path d="M50 3109 c0 -7 -11 -22 -25 -35 l-25 -23 0 -961 0 -961 32 -29 32\n-30 501 -2 500 -3 3 -502 2 -502 31 -30 31 -31 958 0 958 0 23 25 c13 13 30\n25 37 25 9 0 12 199 12 960 0 686 -3 960 -11 960 -6 0 -24 12 -40 28 l-29 27\n-503 5 -502 5 -5 502 -5 503 -28 29 c-15 16 -27 34 -27 40 0 8 -274 11 -960\n11 -710 0 -960 -3 -960 -11z m1738 -698 l2 -453 -40 -40 c-22 -22 -40 -43 -40\n-47 0 -4 36 -42 79 -85 88 -87 82 -87 141 -23 l26 27 455 -2 454 -3 0 -775 0\n-775 -775 0 -775 0 -3 450 -2 449 47 48 47 48 -82 80 c-44 44 -84 80 -87 80\n-3 0 -25 -18 -48 -40 l-41 -40 -456 2 -455 3 -3 765 c-1 421 0 771 3 778 3 10\n164 12 777 10 l773 -3 3 -454z"/>\n        <path d="M607 2492 c-42 -42 -77 -82 -77 -87 0 -6 86 -96 190 -200 105 -104\n190 -197 190 -205 0 -8 -41 -56 -92 -107 -65 -65 -87 -94 -77 -98 8 -3 138 -4\n289 -3 l275 3 3 275 c1 151 0 281 -3 289 -4 10 -35 -14 -103 -82 -54 -53 -103\n-97 -109 -97 -7 0 -99 88 -206 195 -107 107 -196 195 -198 195 -3 0 -39 -35\n-82 -78z"/>\n        <path d="M1470 1639 c-47 -49 -87 -91 -89 -94 -5 -6 149 -165 160 -165 9 0\n189 179 189 188 0 12 -154 162 -165 161 -6 0 -48 -41 -95 -90z"/>\n        <path d="M1797 1303 c-9 -8 -9 -568 0 -576 4 -4 50 36 103 88 54 52 101 95\n106 95 5 0 95 -85 199 -190 104 -104 194 -190 200 -190 6 0 46 36 90 80 l79\n79 -197 196 c-108 108 -197 199 -197 203 0 4 45 52 99 106 55 55 98 103 95\n108 -6 10 -568 11 -577 1z"/>\n    </g>\n</svg>\n';
        }, function(e, t) {
          e.exports = '<svg role="img" viewBox="0 0 1792 1792">\n    <path d="M381 1620q0 80-54.5 126t-135.5 46q-106 0-172-66l57-88q49 45 106 45 29 0 50.5-14.5t21.5-42.5q0-64-105-56l-26-56q8-10 32.5-43.5t42.5-54 37-38.5v-1q-16 0-48.5 1t-48.5 1v53h-106v-152h333v88l-95 115q51 12 81 49t30 88zm2-627v159h-362q-6-36-6-54 0-51 23.5-93t56.5-68 66-47.5 56.5-43.5 23.5-45q0-25-14.5-38.5t-39.5-13.5q-46 0-81 58l-85-59q24-51 71.5-79.5t105.5-28.5q73 0 123 41.5t50 112.5q0 50-34 91.5t-75 64.5-75.5 50.5-35.5 52.5h127v-60h105zm1409 319v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-14 9-23t23-9h1216q13 0 22.5 9.5t9.5 22.5zm-1408-899v99h-335v-99h107q0-41 .5-122t.5-121v-12h-2q-8 17-50 54l-71-76 136-127h106v404h108zm1408 387v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-14 9-23t23-9h1216q13 0 22.5 9.5t9.5 22.5zm0-512v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1216q13 0 22.5 9.5t9.5 22.5z"/>\n</svg>';
        }, function(e, t) {
          e.exports = '<svg viewBox="0 0 270 270">\n	<path d="m240.443652,220.45085l-47.410809,0l0,-10.342138c13.89973,-8.43655 25.752896,-19.844464 34.686646,-33.469923c11.445525,-17.455846 17.496072,-37.709239 17.496072,-58.570077c0,-59.589197 -49.208516,-108.068714 -109.693558,-108.068714s-109.69263,48.479517 -109.69263,108.069628c0,20.860839 6.050547,41.113316 17.497001,58.570077c8.93375,13.625459 20.787845,25.032458 34.686646,33.469008l0,10.342138l-47.412666,0c-10.256959,0 -18.571354,8.191376 -18.571354,18.296574c0,10.105198 8.314395,18.296574 18.571354,18.296574l65.98402,0c10.256959,0 18.571354,-8.191376 18.571354,-18.296574l0,-39.496814c0,-7.073455 -4.137698,-13.51202 -10.626529,-16.537358c-25.24497,-11.772016 -41.557118,-37.145704 -41.557118,-64.643625c0,-39.411735 32.545369,-71.476481 72.549922,-71.476481c40.004553,0 72.550851,32.064746 72.550851,71.476481c0,27.497006 -16.312149,52.87161 -41.557118,64.643625c-6.487902,3.026253 -10.6256,9.464818 -10.6256,16.537358l0,39.496814c0,10.105198 8.314395,18.296574 18.571354,18.296574l65.982163,0c10.256959,0 18.571354,-8.191376 18.571354,-18.296574c0,-10.105198 -8.314395,-18.296574 -18.571354,-18.296574z"/>\n</svg>';
        }, function(e, t) {
          e.exports = '<svg viewBox="0 0 1792 1792">\n    <path d="M384 544v576q0 13-9.5 22.5t-22.5 9.5q-14 0-23-9l-288-288q-9-9-9-23t9-23l288-288q9-9 23-9 13 0 22.5 9.5t9.5 22.5zm1408 768v192q0 13-9.5 22.5t-22.5 9.5h-1728q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1728q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1088q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1088q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1088q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1088q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1728q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1728q13 0 22.5 9.5t9.5 22.5z"/>\n</svg>';
        }, function(e, t) {
          e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1534 189v73q0 29-18.5 61t-42.5 32q-50 0-54 1-26 6-32 31-3 11-3 64v1152q0 25-18 43t-43 18h-108q-25 0-43-18t-18-43v-1218h-143v1218q0 25-17.5 43t-43.5 18h-108q-26 0-43.5-18t-17.5-43v-496q-147-12-245-59-126-58-192-179-64-117-64-259 0-166 88-286 88-118 209-159 111-37 417-37h479q25 0 43 18t18 43z"/></svg>';
        }, function(e, t) {
          e.exports = '<svg viewBox="0 0 1792 1792"><path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"/></svg>';
        }, function(e, t) {
          e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z"/></svg>';
        }, function(e, t) {
          e.exports = '<svg viewBox="0 0 1792 1792">\n    <path d="M448 1536h896v-256h-896v256zm0-640h896v-384h-160q-40 0-68-28t-28-68v-160h-640v640zm1152 64q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm128 0v416q0 13-9.5 22.5t-22.5 9.5h-224v160q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-160h-224q-13 0-22.5-9.5t-9.5-22.5v-416q0-79 56.5-135.5t135.5-56.5h64v-544q0-40 28-68t68-28h672q40 0 88 20t76 48l152 152q28 28 48 76t20 88v256h64q79 0 135.5 56.5t56.5 135.5z"/>\n</svg>';
        }, function(e, t) {
          e.exports = '<svg viewBox="0 0 1792 1792">\n    <path d="M1664 256v448q0 26-19 45t-45 19h-448q-42 0-59-40-17-39 14-69l138-138q-148-137-349-137-104 0-198.5 40.5t-163.5 109.5-109.5 163.5-40.5 198.5 40.5 198.5 109.5 163.5 163.5 109.5 198.5 40.5q119 0 225-52t179-147q7-10 23-12 14 0 25 9l137 138q9 8 9.5 20.5t-7.5 22.5q-109 132-264 204.5t-327 72.5q-156 0-298-61t-245-164-164-245-61-298 61-298 164-245 245-164 298-61q147 0 284.5 55.5t244.5 156.5l130-129q29-31 70-14 39 17 39 59z"/>\n</svg>';
        }, function(e, t) {
          e.exports = '<svg viewBox="0 0 24 24"\n    >\n    <g>\n        <g transform="translate(-251.000000, -443.000000)">\n            <g transform="translate(215.000000, 119.000000)"/>\n            <path d="M252,448 L256,448 L256,444 L252,444 L252,448 Z M257,448 L269,448 L269,446 L257,446 L257,448 Z M257,464 L269,464 L269,462 L257,462 L257,464 Z M270,444 L270,448 L274,448 L274,444 L270,444 Z M252,462 L252,466 L256,466 L256,462 L252,462 Z M270,462 L270,466 L274,466 L274,462 L270,462 Z M254,461 L256,461 L256,449 L254,449 L254,461 Z M270,461 L272,461 L272,449 L270,449 L270,461 Z"/>\n        </g>\n    </g>\n</svg>';
        }, function(e, t) {
          e.exports = '<svg viewBox="0 0 1792 1792">\n    <path d="M844 472q0 60-19 113.5t-63 92.5-105 39q-76 0-138-57.5t-92-135.5-30-151q0-60 19-113.5t63-92.5 105-39q77 0 138.5 57.5t91.5 135 30 151.5zm-342 483q0 80-42 139t-119 59q-76 0-141.5-55.5t-100.5-133.5-35-152q0-80 42-139.5t119-59.5q76 0 141.5 55.5t100.5 134 35 152.5zm394-27q118 0 255 97.5t229 237 92 254.5q0 46-17 76.5t-48.5 45-64.5 20-76 5.5q-68 0-187.5-45t-182.5-45q-66 0-192.5 44.5t-200.5 44.5q-183 0-183-146 0-86 56-191.5t139.5-192.5 187.5-146 193-59zm239-211q-61 0-105-39t-63-92.5-19-113.5q0-74 30-151.5t91.5-135 138.5-57.5q61 0 105 39t63 92.5 19 113.5q0 73-30 151t-92 135.5-138 57.5zm432-104q77 0 119 59.5t42 139.5q0 74-35 152t-100.5 133.5-141.5 55.5q-77 0-119-59t-42-139q0-74 35-152.5t100.5-134 141.5-55.5z"/>\n</svg>';
        }, function(e, t) {
          e.exports = '<svg viewBox="0 0 1792 1792">\n    <path d="M1792 1344v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm0-384v128q0 26-19 45t-45 19h-1280q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1280q26 0 45 19t19 45zm0-384v128q0 26-19 45t-45 19h-1536q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1536q26 0 45 19t19 45zm0-384v128q0 26-19 45t-45 19h-1152q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1152q26 0 45 19t19 45z"/>\n</svg>';
        }, function(e, t) {
          e.exports = '<svg viewBox="0 0 1792 1792">\n    <path d="M512 1536h768v-384h-768v384zm896 0h128v-896q0-14-10-38.5t-20-34.5l-281-281q-10-10-34-20t-39-10v416q0 40-28 68t-68 28h-576q-40 0-68-28t-28-68v-416h-128v1280h128v-416q0-40 28-68t68-28h832q40 0 68 28t28 68v416zm-384-928v-320q0-13-9.5-22.5t-22.5-9.5h-192q-13 0-22.5 9.5t-9.5 22.5v320q0 13 9.5 22.5t22.5 9.5h192q13 0 22.5-9.5t9.5-22.5zm640 32v928q0 40-28 68t-68 28h-1344q-40 0-68-28t-28-68v-1344q0-40 28-68t68-28h928q40 0 88 20t76 48l280 280q28 28 48 76t20 88z"/>\n</svg>';
        }, function(e, t) {
          e.exports = '<svg viewBox="0 0 18 18">\n    <g fill-rule="evenodd" stroke="none" stroke-width="1">\n        <g transform="translate(-381.000000, -381.000000)">\n            <g transform="translate(381.000000, 381.000000)">\n                <path d="M0,2 L2,2 L2,0 C0.9,0 0,0.9 0,2 L0,2 Z M0,10 L2,10 L2,8 L0,8 L0,10 L0,10 Z M4,18 L6,18 L6,16 L4,16 L4,18 L4,18 Z M0,6 L2,6 L2,4 L0,4 L0,6 L0,6 Z M10,0 L8,0 L8,2 L10,2 L10,0 L10,0 Z M16,0 L16,2 L18,2 C18,0.9 17.1,0 16,0 L16,0 Z M2,18 L2,16 L0,16 C0,17.1 0.9,18 2,18 L2,18 Z M0,14 L2,14 L2,12 L0,12 L0,14 L0,14 Z M6,0 L4,0 L4,2 L6,2 L6,0 L6,0 Z M8,18 L10,18 L10,16 L8,16 L8,18 L8,18 Z M16,10 L18,10 L18,8 L16,8 L16,10 L16,10 Z M16,18 C17.1,18 18,17.1 18,16 L16,16 L16,18 L16,18 Z M16,6 L18,6 L18,4 L16,4 L16,6 L16,6 Z M16,14 L18,14 L18,12 L16,12 L16,14 L16,14 Z M12,18 L14,18 L14,16 L12,16 L12,18 L12,18 Z M12,2 L14,2 L14,0 L12,0 L12,2 L12,2 Z M4,14 L14,14 L14,4 L4,4 L4,14 L4,14 Z M6,6 L12,6 L12,12 L6,12 L6,6 L6,6 Z"/>\n            </g>\n        </g>\n    </g>\n</svg>';
        }, function(e, t) {
          e.exports = '<svg viewBox="0 0 1792 1792">\n    <path d="M896 960v448q0 26-19 45t-45 19-45-19l-144-144-332 332q-10 10-23 10t-23-10l-114-114q-10-10-10-23t10-23l332-332-144-144q-19-19-19-45t19-45 45-19h448q26 0 45 19t19 45zm755-672q0 13-10 23l-332 332 144 144q19 19 19 45t-19 45-45 19h-448q-26 0-45-19t-19-45v-448q0-26 19-45t45-19 45 19l144 144 332-332q10-10 23-10t23 10l114 114q10 10 10 23z"/>\n</svg>';
        }, function(e, t) {
          e.exports = '<svg viewBox="0 0 1792 1792">\n    <path d="M553 1399l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23t-10 23l-393 393 393 393q10 10 10 23t-10 23zm591-1067l-373 1291q-4 13-15.5 19.5t-23.5 2.5l-62-17q-13-4-19.5-15.5t-2.5-24.5l373-1291q4-13 15.5-19.5t23.5-2.5l62 17q13 4 19.5 15.5t2.5 24.5zm657 651l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23t-10 23z"/>\n</svg>';
        }, function(e, t) {
          e.exports = '<svg viewBox="0 0 48 48">\n    <path d="M6 42h4v-4h-4v4zm4-28h-4v4h4v-4zm-4 20h4v-4h-4v4zm8 8h4v-4h-4v4zm-4-36h-4v4h4v-4zm8 0h-4v4h4v-4zm16 0h-4v4h4v-4zm-8 8h-4v4h4v-4zm0-8h-4v4h4v-4zm12 28h4v-4h-4v4zm-16 8h4v-4h-4v4zm-16-16h36v-4h-36v4zm32-20v4h4v-4h-4zm0 12h4v-4h-4v4zm-16 16h4v-4h-4v4zm8 8h4v-4h-4v4zm8 0h4v-4h-4v4z"/><path d="M0 0h48v48h-48z" fill="none"/>\n</svg>';
        }, function(e, t) {
          e.exports = '<svg viewBox="0 0 48 48">\n    <path d="M6 18h4v-4h-4v4zm0-8h4v-4h-4v4zm8 32h4v-4h-4v4zm0-16h4v-4h-4v4zm-8 0h4v-4h-4v4zm0 16h4v-4h-4v4zm0-8h4v-4h-4v4zm8-24h4v-4h-4v4zm24 24h4v-4h-4v4zm-16 8h4v-36h-4v36zm16 0h4v-4h-4v4zm0-16h4v-4h-4v4zm0-20v4h4v-4h-4zm0 12h4v-4h-4v4zm-8-8h4v-4h-4v4zm0 32h4v-4h-4v4zm0-16h4v-4h-4v4z"/>\n    <path d="M0 0h48v48h-48z" fill="none"/>\n</svg>';
        }, function(e, t) {
          e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1760 896q14 0 23 9t9 23v64q0 14-9 23t-23 9h-1728q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h1728zm-1277-64q-28-35-51-80-48-97-48-188 0-181 134-309 133-127 393-127 50 0 167 19 66 12 177 48 10 38 21 118 14 123 14 183 0 18-5 45l-12 3-84-6-14-2q-50-149-103-205-88-91-210-91-114 0-182 59-67 58-67 146 0 73 66 140t279 129q69 20 173 66 58 28 95 52h-743zm507 256h411q7 39 7 92 0 111-41 212-23 55-71 104-37 35-109 81-80 48-153 66-80 21-203 21-114 0-195-23l-140-40q-57-16-72-28-8-8-8-22v-13q0-108-2-156-1-30 0-68l2-37v-44l102-2q15 34 30 71t22.5 56 12.5 27q35 57 80 94 43 36 105 57 59 22 132 22 64 0 139-27 77-26 122-86 47-61 47-129 0-84-81-157-34-29-137-71z"/></svg>';
        }, function(e, t) {
          e.exports = '<svg viewBox="0 0 1792 1792">\n    <path d="M1025 1369v167h-248l-159-252-24-42q-8-9-11-21h-3l-9 21q-10 20-25 44l-155 250h-258v-167h128l197-291-185-272h-137v-168h276l139 228q2 4 23 42 8 9 11 21h3q3-9 11-21l25-42 140-228h257v168h-125l-184 267 204 296h109zm639 217v206h-514l-4-27q-3-45-3-46 0-64 26-117t65-86.5 84-65 84-54.5 65-54 26-64q0-38-29.5-62.5t-70.5-24.5q-51 0-97 39-14 11-36 38l-105-92q26-37 63-66 80-65 188-65 110 0 178 59.5t68 158.5q0 66-34.5 118.5t-84 86-99.5 62.5-87 63-41 73h232v-80h126z"/>\n</svg>';
        }, function(e, t) {
          e.exports = '<svg viewBox="0 0 1792 1792">\n    <path d="M1025 1369v167h-248l-159-252-24-42q-8-9-11-21h-3l-9 21q-10 20-25 44l-155 250h-258v-167h128l197-291-185-272h-137v-168h276l139 228q2 4 23 42 8 9 11 21h3q3-9 11-21l25-42 140-228h257v168h-125l-184 267 204 296h109zm637-679v206h-514l-3-27q-4-28-4-46 0-64 26-117t65-86.5 84-65 84-54.5 65-54 26-64q0-38-29.5-62.5t-70.5-24.5q-51 0-97 39-14 11-36 38l-105-92q26-37 63-66 83-65 188-65 110 0 178 59.5t68 158.5q0 56-24.5 103t-62 76.5-81.5 58.5-82 50.5-65.5 51.5-30.5 63h232v-80h126z"/>\n</svg>';
        }, function(e, t) {
          e.exports = '<svg viewBox="0 0 1792 1792"><path d="M576 1376v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm0-384v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm512 384v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm-512-768v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm512 384v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm512 384v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm-512-768v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm512 384v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm0-384v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm128-320v1088q0 66-47 113t-113 47h-1344q-66 0-113-47t-47-113v-1088q0-66 47-113t113-47h1344q66 0 113 47t47 113z"/></svg>';
        }, function(e, t) {
          e.exports = '<svg viewBox="0 0 1792 1792"><path d="M512 1248v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm1280 512v192q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h960q40 0 68 28t28 68zm-1280-1024v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm1280 512v192q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h960q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h960q40 0 68 28t28 68z"/></svg>';
        }, function(e, t) {
          e.exports = '<svg viewBox="0 0 1792 1792"><path d="M512 1248v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm640 512v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm-640-1024v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm640 512v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm640 512v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm-640-1024v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm640 512v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68z"/></svg>';
        }, function(e, t) {
          e.exports = '<svg viewBox="0 0 1792 1792"><path d="M384 1408q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm0-512q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm1408 416v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1216q13 0 22.5 9.5t9.5 22.5zm-1408-928q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm1408 416v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1216q13 0 22.5 9.5t9.5 22.5zm0-512v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1216q13 0 22.5 9.5t9.5 22.5z"/></svg>';
        }, function(e, t) {
          e.exports = '<svg viewBox="0 0 1792 1792"><path d="M176 223q-37-2-45-4l-3-88q13-1 40-1 60 0 112 4 132 7 166 7 86 0 168-3 116-4 146-5 56 0 86-2l-1 14 2 64v9q-60 9-124 9-60 0-79 25-13 14-13 132 0 13 .5 32.5t.5 25.5l1 229 14 280q6 124 51 202 35 59 96 92 88 47 177 47 104 0 191-28 56-18 99-51 48-36 65-64 36-56 53-114 21-73 21-229 0-79-3.5-128t-11-122.5-13.5-159.5l-4-59q-5-67-24-88-34-35-77-34l-100 2-14-3 2-86h84l205 10q76 3 196-10l18 2q6 38 6 51 0 7-4 31-45 12-84 13-73 11-79 17-15 15-15 41 0 7 1.5 27t1.5 31q8 19 22 396 6 195-15 304-15 76-41 122-38 65-112 123-75 57-182 89-109 33-255 33-167 0-284-46-119-47-179-122-61-76-83-195-16-80-16-237v-333q0-188-17-213-25-36-147-39zm1488 1409v-64q0-14-9-23t-23-9h-1472q-14 0-23 9t-9 23v64q0 14 9 23t23 9h1472q14 0 23-9t9-23z"/></svg>';
        }, function(e, t) {
          e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1664 896q0 156-61 298t-164 245-245 164-298 61q-172 0-327-72.5t-264-204.5q-7-10-6.5-22.5t8.5-20.5l137-138q10-9 25-9 16 2 23 12 73 95 179 147t225 52q104 0 198.5-40.5t163.5-109.5 109.5-163.5 40.5-198.5-40.5-198.5-109.5-163.5-163.5-109.5-198.5-40.5q-98 0-188 35.5t-160 101.5l137 138q31 30 14 69-17 40-59 40h-448q-26 0-45-19t-19-45v-448q0-42 40-59 39-17 69 14l130 129q107-101 244.5-156.5t284.5-55.5q156 0 298 61t245 164 164 245 61 298z"/></svg>';
        }, function(e, t) {
          e.exports = '<svg viewBox="0 0 1792 1792"><path d="M503 1271l-256 256q-10 9-23 9-12 0-23-9-9-10-9-23t9-23l256-256q10-9 23-9t23 9q9 10 9 23t-9 23zm169 41v320q0 14-9 23t-23 9-23-9-9-23v-320q0-14 9-23t23-9 23 9 9 23zm-224-224q0 14-9 23t-23 9h-320q-14 0-23-9t-9-23 9-23 23-9h320q14 0 23 9t9 23zm1264 128q0 120-85 203l-147 146q-83 83-203 83-121 0-204-85l-334-335q-21-21-42-56l239-18 273 274q27 27 68 27.5t68-26.5l147-146q28-28 28-67 0-40-28-68l-274-275 18-239q35 21 56 42l336 336q84 86 84 204zm-617-724l-239 18-273-274q-28-28-68-28-39 0-68 27l-147 146q-28 28-28 67 0 40 28 68l274 274-18 240q-35-21-56-42l-336-336q-84-86-84-204 0-120 85-203l147-146q83-83 203-83 121 0 204 85l334 335q21 21 42 56zm633 84q0 14-9 23t-23 9h-320q-14 0-23-9t-9-23 9-23 23-9h320q14 0 23 9t9 23zm-544-544v320q0 14-9 23t-23 9-23-9-9-23v-320q0-14 9-23t23-9 23 9 9 23zm407 151l-256 256q-11 9-23 9t-23-9q-9-10-9-23t9-23l256-256q10-9 23-9t23 9q9 10 9 23t-9 23z"/></svg>';
        }, function(e, t) {
          e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1728 576v256q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45v-256q0-106-75-181t-181-75-181 75-75 181v192h96q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h672v-192q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5z"/></svg>';
        }, function(e, t) {
          e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1639 1056q0 5-1 7-64 268-268 434.5t-478 166.5q-146 0-282.5-55t-243.5-157l-129 129q-19 19-45 19t-45-19-19-45v-448q0-26 19-45t45-19h448q26 0 45 19t19 45-19 45l-137 137q71 66 161 102t187 36q134 0 250-65t186-179q11-17 53-117 8-23 30-23h192q13 0 22.5 9.5t9.5 22.5zm25-800v448q0 26-19 45t-45 19h-448q-26 0-45-19t-19-45 19-45l138-138q-148-137-349-137-134 0-250 65t-186 179q-11 17-53 117-8 23-30 23h-199q-13 0-22.5-9.5t-9.5-22.5v-7q65-268 270-434.5t480-166.5q146 0 284 55.5t245 156.5l130-129q19-19 45-19t45 19 19 45z"/></svg>';
        }, function(e, t) {
          e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1344 1472q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm256 0q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm128-224v320q0 40-28 68t-68 28h-1472q-40 0-68-28t-28-68v-320q0-40 28-68t68-28h427q21 56 70.5 92t110.5 36h256q61 0 110.5-36t70.5-92h427q40 0 68 28t28 68zm-325-648q-17 40-59 40h-256v448q0 26-19 45t-45 19h-256q-26 0-45-19t-19-45v-448h-256q-42 0-59-40-17-39 14-69l448-448q18-19 45-19t45 19l448 448q31 30 14 69z"/></svg>';
        }, function(e, t) {
          e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1216 320q0 26-19 45t-45 19h-128v1024h128q26 0 45 19t19 45-19 45l-256 256q-19 19-45 19t-45-19l-256-256q-19-19-19-45t19-45 45-19h128v-1024h-128q-26 0-45-19t-19-45 19-45l256-256q19-19 45-19t45 19l256 256q19 19 19 45z"/></svg>';
        }, function(e, t) {
          e.exports = '<svg viewBox="0 0 1792 1792"><path d="M1792 352v1088q0 42-39 59-13 5-25 5-27 0-45-19l-403-403v166q0 119-84.5 203.5t-203.5 84.5h-704q-119 0-203.5-84.5t-84.5-203.5v-704q0-119 84.5-203.5t203.5-84.5h704q119 0 203.5 84.5t84.5 203.5v165l403-402q18-19 45-19 12 0 25 5 39 17 39 59z"/></svg>';
        }]);
      });
    }
  });

  // ../jodit_html_editor/jodit_html_editor/public/js/jodit_html_editor.bundle.js
  var import_jodit = __toESM(require_jodit_min());
})();
/*!
 jodit - Jodit is awesome and usefully wysiwyg editor with filebrowser
 Author: Chupurnov <chupurnov@gmail.com> (https://xdsoft.net/)
 Version: v3.2.34
 Url: https://xdsoft.net/jodit/
 License(s): GPL-2.0-or-later
*/
//# sourceMappingURL=jodit_html_editor.bundle.6QLCDOYJ.js.map

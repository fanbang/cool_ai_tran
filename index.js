(() => {
	"use strict";
	var t = {
			338: (t, e, a) => {
				var n = a(795);
				e.createRoot = n.createRoot, e.hydrateRoot = n.hydrateRoot
			},
			795: t => {
				t.exports = window.ReactDOM
			}
		},
		e = {};

	function a(n) {
		var r = e[n];
		if (void 0 !== r) return r.exports;
		var o = e[n] = {
			exports: {}
		};
		return t[n](o, o.exports, a), o.exports
	}
	a.d = (t, e) => {
		for (var n in e) a.o(e, n) && !a.o(t, n) && Object.defineProperty(t, n, {
			enumerable: !0,
			get: e[n]
		})
	}, a.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), a.r = t => {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(t, "__esModule", {
			value: !0
		})
	};
	var n = {};
	a.r(n), a.d(n, {
		allowedMetaFields: () => ot,
		contentSaveSource: () => G,
		contentSaveTranslate: () => tt,
		excerptSaveSource: () => K,
		excerptSaveTranslate: () => X,
		metaFieldsSaveSource: () => et,
		metaFieldsSaveTranslate: () => at,
		setBlockRules: () => nt,
		titleSaveSource: () => Z,
		titleSaveTranslate: () => J,
		translationInfo: () => rt
	});
	var r = {};
	a.r(r), a.d(r, {
		getAllowedMetaFields: () => dt,
		getBlockRules: () => lt,
		getTranslatedString: () => it,
		getTranslationEntry: () => st,
		getTranslationInfo: () => ct
	});
	var o = a(338);
	const s = window.wp.element,
		l = window.wp.data,
		i = window.wp.i18n,
		c = t => React.createElement("div", {
			className: "modal-header",
			key: t.modalRender
		}, React.createElement("span", {
			className: "close",
			onClick: () => {
				t.setPopupVisibility(!1)
			}
		}, "×"), React.createElement("h2", {
			className: "notranslate"
		}, (0, i.__)("Step 2 - Start Automatic Translation Process", "automatic-translations-for-polylang")), React.createElement("div", {
			className: "save_btn_cont"
		}, React.createElement("button", {
			className: "notranslate save_it button button-primary",
			disabled: t.translatePendingStatus,
			onClick: t.updatePostData
		}, (0, i.__)("Update Content", "automatic-translations-for-polylang")))),
		d = window.React,
		p = t => {
			const e = t => {
					const a = document.createElement("div");
					a.innerHTML = t;
					const n = a.firstElementChild;
					if (!n) return t; 
					let r = n.children;
					const o = r.length;
					if (o > 0)
						for (let t = 0; t < o; t++) {
							let a = r[t],
								n = e(a.outerHTML);
							a.outerHTML = n
						}
					const s = n.outerHTML.match(/^<[^>]+>/)[0],
						l = n.tagName.toLowerCase(),
						i = new RegExp(`</${l}>`, "i"),
						c = n.outerHTML.match(i);
					if ("<style>" === s) return `#atfp_open_translate_span#${n.outerHTML}#atfp_close_translate_span#`;
					let d = n.innerHTML;
					d = d.replace(/^\s+|\s+$/g, (t => `#atfp_open_translate_span#${t}#atfp_close_translate_span#`)), n.innerHTML = "";
					let p = `#atfp_open_translate_span#${s}#atfp_close_translate_span#`,
						u = "",
						g = "";
					return c && (u = `#atfp_open_translate_span#</${l}>#atfp_close_translate_span#`), "" !== d ? ("" !== p && (g = p + d), "" !== u && (g += u)) : g = p + u, n.outerHTML = g, a.innerHTML
				},
				a = "yandex" === t.service || "localAiTranslator" === t.service ? (a => {
					const n = document.createElement("div");
					n.innerHTML = a,
						function(t) {
							let a = t.childNodes;
							const n = t => {
								if (a.length > t) {
									let r = a[t],
										o = null;
									if (3 === r.nodeType) {
										const t = r.textContent.replace(/^\s+|\s+$/g, (t => `#atfp_open_translate_span#${t}#atfp_close_translate_span#`));
										o = document.createTextNode(t)
									} else {
										let t = e(r.outerHTML);
										o = document.createTextNode(t)
									}
									r.replaceWith(o), t++, n(t)
								}
							};
							n(0)
						}(n);
					let r = n.innerText;
					/^(_yoast_wpseo_|rank_math_|_seopress_)/.test(t.contentKey.trim()) && (r = (t => t.replace(/(%{1,2}[a-zA-Z0-9_]+%{0,2})/g, (t => `#atfp_open_translate_span#${t}#atfp_close_translate_span#`)))(r));
					const o = /\[(.*?)\]/g;
					return r.match(o) && (r = r.replace(o, (t => `#atfp_open_translate_span#${t}#atfp_close_translate_span#`))), (t => t.split(/(#atfp_open_translate_span#.*?#atfp_close_translate_span#)|'/).filter(Boolean).filter((t => "" !== t.trim())))(r)
				})(t.content) : t.content,
				n = /#atfp_open_translate_span#[\s\S]*?#atfp_close_translate_span#/,
				r = /#atfp_open_translate_span#|#atfp_close_translate_span#/g;
			return React.createElement(React.Fragment, null, "yandex" === t.service || "localAiTranslator" === t.service ? a.map(((t, e) => n.test(t) ? React.createElement("span", {
				key: e,
				className: "notranslate atfp-notraslate-tag",
				translate: "no"
			}, (t => t.replace(r, ""))(t)) : t)) : a)
		},
		u = ({
			type: t,
			key: e,
			translateContent: a,
			source: n,
			provider: r,
			AllowedMetaFields: o
		}) => {
			if (["title", "excerpt"].includes(t)) {
				const e = `${t}SaveTranslate`;
				(0, l.dispatch)("block-atfp/translate")[e](a, r)
			} else ["metaFields"].includes(t) ? Object.keys(o).includes(e) && (0, l.dispatch)("block-atfp/translate").metaFieldsSaveTranslate(e, a, n, r) : (0, l.dispatch)("block-atfp/translate").contentSaveTranslate(e, a, n, r)
		},
		g = ({
			prefix: t = !1,
			start: e = !1,
			end: a = !1,
			translateStatus: n = !1
		}) => {
			const r = (a - e) / 1e3,
				o = {};
			if (t) {
				if (o.provider = t, e && a) {
					const e = (0, l.select)("block-atfp/translate").getTranslationInfo().translateData[t]?.timeTaken || 0;
					o.timeTaken = r + e
				}
				n && (o.translateStatus = !0), (0, l.dispatch)("block-atfp/translate").translationInfo(o)
			}
		},
		m = ({
			number: t
		}) => t >= 1e6 ? (t / 1e6).toFixed(1) + "M" : t >= 1e3 ? (t / 1e3).toFixed(1) + "K" : t,
		h = ({
			container: t,
			provider: e,
			startTime: a,
			endTime: n,
			translateStatus: r,
			modalRenderId: o
		}) => {
			if (!document.querySelector(`#atfp-${e}-strings-modal.modal-container[data-render-id="${o}"]`)) return;
			t.querySelector(".atfp_translate_progress").style.display = "none", t.querySelector(".atfp_string_container").style.animation = "none", document.body.style.top = "0";
			const s = t.querySelector("button.save_it");
			s.removeAttribute("disabled"), s.classList.add("translated"), s.classList.remove("notranslate"), (({
				provider: t,
				startTime: e,
				endTime: a
			}) => {
				const n = document.getElementById("atfp_strings_model").querySelector(".atfp_string_container").querySelectorAll('td.translate[data-string-type]:not([data-translate-status="translated"])'),
					r = n.length,
					o = (0, l.select)("block-atfp/translate").getAllowedMetaFields();
				n.forEach(((n, s) => {
					const i = n.innerText,
						c = n.dataset.key,
						d = n.dataset.stringType,
						p = n.closest("tr").querySelector('td[data-source="source_text"]').innerText;
					u({
						type: d,
						key: c,
						translateContent: i,
						source: p,
						provider: t,
						AllowedMetaFields: o
					});
					const m = (0, l.select)("block-atfp/translate").getTranslationInfo().translateData[t],
						h = m && m.targetWordCount ? m.targetWordCount : 0,
						f = m && m.targetCharacterCount ? m.targetCharacterCount : 0;
					"" !== i.trim() && i.trim().length > 0 && (0, l.dispatch)("block-atfp/translate").translationInfo({
						targetWordCount: h + p.trim().split(/\s+/).filter((t => /[^\p{L}\p{N}]/.test(t))).length,
						targetCharacterCount: f + p.trim().length,
						provider: t
					}), s === r - 1 && (jQuery(`.${t}-translator_progress`).css("width", "100%"), jQuery(`.${t}-translator-strings-count`).show(), g({
						prefix: t,
						start: e,
						end: a,
						translateStatus: !0
					}))
				}))
			})({
				provider: e,
				startTime: a,
				endTime: n
			}), r()
		},
		f = (t, e, a) => {
			const n = (new Date).getTime();
			let r = !1;
			(t => {
				const e = (0, l.select)("block-atfp/translate").getTranslationInfo().sourceCharacterCount;
				if (document.querySelector(`#atfp-${t}-strings-modal .${t}-translator_progress_bar`)) jQuery(`.${t}-translator_progress`).css("width", "0%"), jQuery(`.${t}-translator-strings-count`).hide();
				else {
					const a = jQuery(`\n            <div class="${t}-translator_progress_bar" style="background-color: #f3f3f3;border-radius: 10px;overflow: hidden;margin: 1.5rem auto; width: 50%;">\n            <div class="${t}-translator_progress" style="overflow: hidden;transition: width .2s ease-in-out; border-radius: 10px;text-align: center;width: 0%;height: 20px;box-sizing: border-box;background-color: #4caf50; color: #fff; font-weight: 600;"></div>\n            </div>\n            <div style="display:none; color: white;" class="${t}-translator-strings-count hidden">\n                Wahooo! You have saved your valuable time via auto translating \n                <strong class="totalChars">${m({number:e})}</strong> characters using \n                <strong>\n                    ${t} Translator\n                </strong>\n            </div>\n        `);
					jQuery("#atfp_strings_model .atfp_translate_progress").append(a)
				}
			})(e);
			const o = document.getElementById("atfp_strings_model"),
				s = o.querySelector(".atfp_string_container");
			s.scrollTop = 0;
			const i = s.scrollHeight;
			if (void 0 !== i && i > 100) {
				if (document.querySelector(".atfp_translate_progress").style.display = "block", setTimeout((() => {
						const t = 2e3 * Math.ceil(i / s?.offsetHeight);
						(t => {
							const {
								element: e,
								scrollSpeed: a,
								provider: n
							} = t;
							if (e.scrollHeight - e.offsetHeight <= 0) return;
							const r = jQuery(`.${n}-translator_progress_bar`);
							let o = null,
								s = e.scrollTop;
							const l = () => {
								const t = e.scrollHeight - e.offsetHeight + 100,
									i = performance.now();
								o || (o = i);
								const c = s + (i - o) / a * (t + 2e3 - s);
								var d = e.scrollTop / (e.scrollHeight - e.clientHeight) * 100;
								r.find(`.${n}-translator_progress`).css("width", d + "%");
								let p = (Math.round(10 * d) / 10).toFixed(1);
								p = Math.min(p, 100).toString(), r.find(`.${n}-translator_progress`).text(p + "%"), c > t ? jQuery(`.${n}-translator-strings-count`).show() : (e.scrollTop = c, c < t && setTimeout(l, 16))
							};
							l()
						})({
							element: s,
							scrollSpeed: t,
							provider: e
						})
					}), 2e3), s.addEventListener("scroll", (() => {
						if (s.scrollTop + s.clientHeight + 50 >= s.scrollHeight && !r) {
							const s = (new Date).getTime();
							setTimeout((() => {
								h({
									container: o,
									provider: e,
									startTime: n,
									endTime: s,
									translateStatus: t,
									modalRenderId: a
								})
							}), 4e3), r = !0
						}
					})), s.clientHeight + 10 >= i) {
					jQuery(`.${e}-translator_progress`).css("width", "100%"), jQuery(`.${e}-translator_progress`).text("100%"), jQuery(`.${e}-translator-strings-count`).show();
					const r = (new Date).getTime();
					setTimeout((() => {
						h({
							container: o,
							provider: e,
							startTime: n,
							endTime: r,
							translateStatus: t,
							modalRenderId: a
						})
					}), 4e3)
				}
			} else {
				jQuery(`.${e}-translator_progress`).css("width", "100%"), jQuery(`.${e}-translator_progress`).text("100%"), jQuery(`.${e}-translator-strings-count`).show();
				const r = (new Date).getTime();
				setTimeout((() => {
					h({
						container: o,
						provider: e,
						startTime: n,
						endTime: r,
						translateStatus: t,
						modalRenderId: a
					})
				}), 4e3)
			}
		},
		_ = (t, e, a, n, r, o, s, l) => {
			var i = {
					keycode: {
						ESCAPE: 27
					},
					getRequest: function() {
						return t.XDomainRequest ? new t.XDomainRequest : t.XMLHttpRequest ? new t.XMLHttpRequest : null
					},
					loadScript: function(t, a, n) {
						var r = e.createElement("script");
						r.src = t, r.addEventListener("load", (function t() {
							this.removeEventListener("load", t, !1), n()
						}), !1), a.appendChild(r)
					},
					loadResource: function(e, a) {
						var n = this.getRequest();
						return n ? (n.onload = function() {
							a(this.responseText)
						}, n.open("GET", e, !0), t.setTimeout((function() {
							n.send()
						}), 0), n) : null
					},
					getStyleList: function(t) {
						var e = t.getAttribute("class");
						return e ? e.replace(/\s+/g, " ").trim().split(" ") : []
					},
					hasStyleName: function(t, e) {
						var a = this.getStyleList(t);
						return !!a.length && a.indexOf(e) >= 0
					},
					addStyleName: function(t, e) {
						var a = this.getStyleList(t);
						a.push(e), t.setAttribute("class", a.join(" "))
					},
					removeStyleName: function(t, e) {
						var a = this.getStyleList(t),
							n = a.indexOf(e);
						n >= 0 && (a.splice(n, 1), t.setAttribute("class", a.join(" ")))
					},
					isSupportedBrowser: function() {
						return "localStorage" in t && "querySelector" in e && "addEventListener" in t && "getComputedStyle" in t && "CSS1Compat" === e.compatMode
					}
				},
				c = function(t, e) {
					var a = this;
					t.addEventListener("click", (function(t) {
						a.onClick(t)
					}), !1), this._element = t, this._contentElement = e || this._element
				};
			c.prototype.onClick = function() {}, c.prototype.setText = function(t) {
				return this._contentElement.textContent = t, this
			};
			var d = function(t, e) {
				var a = this;
				t.reset(), t.addEventListener("click", (function(t) {
					var e = t.target;
					"value" in e && a.onSelect(e.value)
				}), !1), t.addEventListener("change", (function(t) {
					alert("form change state");
					var e = t.target;
					e.checked && a.onChange(e.value)
				}), !1), this._form = t, this._itemName = e
			};
			d.prototype.onSelect = function() {}, d.prototype.onChange = function() {}, d.prototype.isHidden = function() {
				return this._form.hasAttribute("hidden")
			}, d.prototype.getItems = function() {
				return this._form[this._itemName] || []
			}, d.prototype.getValue = function() {
				var t, e, a = this.getItems();
				for (t = 0, e = a.length; t < e; t++)
					if (a[t].checked) return a[t].value;
				return ""
			}, d.prototype.setValue = function(t) {
				var e, a, n = this.getItems();
				if (t === this.getValue()) return this;
				for (e = 0, a = n.length; e < a; e++)
					if (n[e].value === t) {
						n[e].checked = !0, this.onChange(t);
						break
					} return this
			}, d.prototype.setHidden = function(t) {
				return (t = !!t) !== this.isHidden() && (this._form[(t ? "set" : "remove") + "Attribute"]("hidden", ""), this.onHiddenChange(t)), this
			}, d.prototype.onHiddenChange = function() {};
			var p = function(a) {
				var n, r = this,
					c = a.select,
					d = a.element,
					p = a.storage,
					u = (a.autoMode, a.pageLang),
					g = (a.userLang, a.translator),
					m = a.leftButton,
					h = a.rightButton,
					_ = a.closeButton;
				if (this._element = d, this._pageLang = u, this._translator = g, this.onStateChange = function(t, e) {
						"active" === t && p.setValue("active", e)
					}, c.onSelect = function(t) {
						this.setHidden(!0), r.translate(t), f(s, "yandex", l)
					}, c.onChange = function(t) {
						p.setValue("lang", t), h.setText(t), r.setState("invalid", t === u)
					}, c.onHiddenChange = function(a) {
						var n, o = e.documentElement;
						r.setState("expanded", !a), a || (r.setState("right", !1).setState("bottom", !1), d.focus(), (n = this._form.getBoundingClientRect()).right + (t.pageXOffset || o.scrollLeft) + 1 >= Math.max(o.clientWidth, o.scrollWidth) && r.setState("right", !0), n.bottom + (t.pageYOffset || o.scrollTop) + 1 >= Math.max(o.clientHeight, o.scrollHeight) && r.setState("bottom", !0))
					}, d.addEventListener("blur", (function() {
						c.setHidden(!0)
					}), !1), d.addEventListener("keydown", (function(t) {
						t.keyCode === i.keycode.ESCAPE && c.setHidden(!0)
					}), !1), g.on("error", (function() {
						this.abort(), r.setState("busy", !1).setState("error", !0)
					})), g.on("progress", (function(t) {
						switch (t) {
							case 0:
								r.setState("busy", !0).setState("active", !0);
								break;
							case 100:
								r.setState("done", !0).setState("busy", !1)
						}
					})), m.onClick = function() {
						c.setHidden(!0), r.translate(c.getValue()), f(s, "yandex", l)
					}, h.onClick = function() {
						r.hasState("active") ? (g.undo(), r.setState("busy", !1).setState("done", !1).setState("error", !1).setState("active", !1)) : c.setHidden(!c.isHidden())
					}, _.onClick = function() {
						c.setHidden(!0)
					}, null != o) var y = o;
				switch (y) {
					case "nb":
					case "nn":
						n = "no";
						break;
					default:
						n = y
				}
				n && (c.setValue(n), p.getValue("active"))
			};
			p.prototype.hasState = function(t) {
				return i.hasStyleName(this._element, "yt-state_" + t)
			}, p.prototype.setState = function(t, e) {
				return (e = !!e) === this.hasState(t) || (i[(e ? "add" : "remove") + "StyleName"](this._element, "yt-state_" + t), this.onStateChange(t, e)), this
			}, p.prototype.translate = function(t) {
				return t && !this.hasState("active") && this._translator.translate(this._pageLang, t), this
			}, p.prototype.onStateChange = function() {};
			var u = function(e) {
				this._name = e;
				try {
					this._data = t.JSON.parse(t.localStorage[e])
				} catch (t) {
					this._data = {}
				}
			};
			u.prototype.getValue = function(t) {
				return this._data[t]
			}, u.prototype.setValue = function(e, a) {
				this._data[e] = a;
				try {
					t.localStorage[this._name] = t.JSON.stringify(this._data)
				} catch (t) {}
			};
			var g = e.getElementById(n.widgetId);
			if (g)
			{console.log({
				localStorage: "localStorage" in window,
				querySelector: "querySelector" in document,
				addEventListener: "addEventListener" in window,
				getComputedStyle: "getComputedStyle" in window,
				compatMode: document.compatMode === "CSS1Compat"
			});
				if(i.isSupportedBrowser()) {
					var m = function () {
						i.loadScript("https://yastatic.net/s3/translate/v21.4.7/js/tr_page.js", g, (function () {
							i.loadResource("https://translate.yandex.net/website-widget/v1/widget.html", (function (t) {
								var e;
								t && (g.innerHTML = t, e = g.querySelector(".yt-widget"), n.widgetTheme && e.setAttribute("data-theme", n.widgetTheme), new p({
									select: new d(e.querySelector(".yt-listbox"), "yt-lang"),
									element: e,
									storage: new u("yt-widget"),
									autoMode: "true" === n.autoMode,
									pageLang: n.pageLang,
									userLang: (a.language || a.userLanguage || "").split("-")[0],
									translator: new r.PageTranslator({
										srv: "tr-url-widget",
										url: "https://translate.yandex.net/api/v1/tr.json/translate",
										autoSync: !0,
										maxPortionLength: 600
									}),
									leftButton: new c(e.querySelector(".yt-button_type_left")),
									rightButton: new c(e.querySelector(".yt-button_type_right"), e.querySelector(".yt-button_type_right > .yt-button__text")),
									closeButton: new c(e.querySelector(".yt-button_type_close"))
								}))
							}))
						}))
					};
					"complete" === e.readyState || "interactive" === e.readyState ? m() : e.addEventListener("DOMContentLoaded", m, !1)
				}
			}
		};
	class y {
		static Object = t => new this(t).extraData();
		constructor(t) {
			this.btnSelector = t.btnSelector || !1, this.btnClass = t.btnClass || !1, this.btnText = t.btnText || `Translate To ${t.targetLanguageLabel} (Beta)`, this.stringSelector = t.stringSelector || !1, this.progressBarSelector = t.progressBarSelector || !1, this.onStartTranslationProcess = t.onStartTranslationProcess || (() => {}), this.onComplete = t.onComplete || (() => {}), this.onLanguageError = t.onLanguageError || (() => {}), this.onBeforeTranslate = t.onBeforeTranslate || (() => {}), this.onAfterTranslate = t.onAfterTranslate || (() => {}), this.sourceLanguage = t.sourceLanguage || "en", this.targetLanguage = t.targetLanguage || "hi", this.targetLanguageLabel = t.targetLanguageLabel || "Hindi", this.sourceLanguageLabel = t.sourceLanguageLabel || "English"
		}
		extraData = async () => {
			const t = await y.languageSupportedStatus(this.sourceLanguage, this.targetLanguage, this.targetLanguageLabel, this.sourceLanguageLabel);
			return !0 !== t ? (this.onLanguageError(t), {}) : (this.defaultLang = this.targetLanguage, {
				continueTranslation: this.continueTranslation,
				stopTranslation: this.stopTranslation,
				startTranslation: this.startTranslation,
				reInit: this.reInit,
				init: this.init
			})
		};
		static languageSupportedStatus = async (t, e, a, n) => {
			const r = ["en", "es", "ja", "ar", "de", "bn", "fr", "hi", "it", "ko", "nl", "pl", "pt", "ru", "th", "tr", "vi", "zh", "zh-hant", "bg", "cs", "da", "el", "fi", "hr", "hu", "id", "iw", "lt", "no", "ro", "sk", "sl", "sv", "uk", "en-zh"].map((t => t.toLowerCase()));
			if (!window.hasOwnProperty("chrome") || !navigator.userAgent.includes("Chrome") || navigator.userAgent.includes("Edg")) return jQuery('<span style="color: #ff4646; margin-top: .5rem; display: inline-block;">\n                <strong>Important Notice:</strong>\n                <ol>\n                    <li>The Translator API, which leverages local AI models, is designed specifically for use with the Chrome browser.</li>\n                    <li>For comprehensive information about the Translator API, <a href="https://developer.chrome.com/docs/ai/translator-api" target="_blank">click here</a>.</li>\n                </ol>\n                <p>Please ensure you are using the Chrome browser for optimal performance and compatibility.</p>\n            </span>');
			if (!("translation" in self && "createTranslator" in self.translation || "ai" in self && "translator" in self.ai)) return jQuery(`<span style="color: #ff4646; margin-top: .5rem; display: inline-block;">\n                <h4>Steps to Enable the Translator AI Modal:</h4>\n                <ol>\n                    <li>Open this URL in a new Chrome tab: <strong><span data-clipboard-text="chrome://flags/#translation-api" target="_blank" class="chrome-ai-translator-flags">chrome://flags/#translation-api ${y.svgIcons("copy")}</span></strong>. Click on the URL to copy it, then open a new window and paste this URL to access the settings.</li>\n                    <li>Ensure that the <strong>Experimental translation API</strong> option is set to <strong>Enabled</strong>.</li>\n                    <li>Click on the <strong>Save</strong> button to apply the changes.</li>\n                    <li>The Translator AI modal should now be enabled and ready for use.</li>\n                </ol>\n                <p>For more information, please refer to the <a href="https://developer.chrome.com/docs/ai/translator-api" target="_blank">documentation</a>.</p>   \n                <p>If the issue persists, please ensure that your browser is up to date and restart your browser.</p>\n                <p>If the problem continues, please contact the support team for further assistance.</p>\n            </span>`);
			if (!r.includes(e.toLowerCase())) return jQuery(`<span style="color: #ff4646; margin-top: .5rem; display: inline-block;">\n                <strong>Language Support Information:</strong>\n                <ol>\n                    <li>The current version of Chrome AI Translator does not support the <strong>${a} (${e})</strong> language.</li>\n                    <li>To view the list of supported languages, please <span data-clipboard-text="chrome://on-device-translation-internals" target="_blank" class="chrome-ai-translator-flags">chrome://on-device-translation-internals ${y.svgIcons("copy")}</span>. Click on the URL to copy it, then open a new window and paste this URL to access the settings.</li>\n                    <li>Ensure your Chrome browser is updated to the latest version for optimal performance.</li>\n                </ol>\n            </span>`);
			if (!r.includes(t.toLowerCase())) return jQuery(`<span style="color: #ff4646; margin-top: .5rem; display: inline-block;">\n                <strong>Language Support Information:</strong>\n                <ol>\n                    <li>The current version of Chrome AI Translator does not support the <strong>${n} (${t})</strong> language.</li>\n                    <li>To view the list of supported languages, please <span data-clipboard-text="chrome://on-device-translation-internals" target="_blank" class="chrome-ai-translator-flags">chrome://on-device-translation-internals ${y.svgIcons("copy")}</span>. Click on the URL to copy it, then open a new window and paste this URL to access the settings.</li>\n                    <li>Ensure your Chrome browser is updated to the latest version for optimal performance.</li>\n                </ol>\n            </span>`);
			const o = await y.languagePairAvality(t, e);
			return "after-download" === o ? jQuery(`<span style="color: #ff4646; margin-top: .5rem; display: inline-block;">\n                <h4>Installation Instructions for Language Packs:</h4>\n                <ol>\n                    <li>To proceed, please install the language pack for <strong>${a} (${e})</strong> or <strong>${n} (${t})</strong>.</li>\n                    <li>You can install it by visiting the following link: \n                        <strong>\n                            <span data-clipboard-text="chrome://on-device-translation-internals" target="_blank" class="chrome-ai-translator-flags">\n                                chrome://on-device-translation-internals ${y.svgIcons("copy")}\n                            </span>\n                        </strong>. Click on the URL to copy it, then open a new window and paste this URL to access the settings.\n                    </li>\n                    <li>For more help, refer to the <a href="https://developer.chrome.com/docs/ai/translator-api#supported-languages" target="_blank">documentation to check supported languages</a>.</li>\n                </ol>\n            </span>`) : "readily" === o || jQuery(`<span style="color: #ff4646; margin-top: .5rem; display: inline-block;">\n                <h4>Language Pack Installation Required</h4>\n                <ol>\n                    <li>Please ensure that the language pack for <strong>${a} (${e})</strong> or <strong>${n} (${t})</strong> is installed and set as a preferred language in your browser.</li>\n                    <li>To install the language pack, visit <strong><span data-clipboard-text="chrome://on-device-translation-internals" target="_blank" class="chrome-ai-translator-flags">chrome://on-device-translation-internals ${y.svgIcons("copy")}</span></strong>. Click on the URL to copy it, then open a new window and paste this URL to access the settings.</li>\n                    <li>If you encounter any issues, please refer to the <a href="https://developer.chrome.com/docs/ai/translator-api#supported-languages" target="_blank">documentation to check supported languages</a> for further assistance.</li>\n                </ol>\n            </span>`)
		};
		static languagePairAvality = async (t, e) => {
			if ("translation" in self && "createTranslator" in self.translation) return await self.translation.canTranslate({
				sourceLanguage: t,
				targetLanguage: e
			});
			if ("ai" in self && "translator" in self.ai) {
				const a = await self.ai.translator.capabilities();
				return await a.languagePairAvailable(t, e)
			}
			return !1
		};
		AITranslator = async t => "translation" in self && "createTranslator" in self.translation ? await self.translation.createTranslator({
			sourceLanguage: this.sourceLanguage,
			targetLanguage: t
		}) : "ai" in self && "translator" in self.ai && await self.ai.translator.create({
			sourceLanguage: this.sourceLanguage,
			targetLanguage: t
		});
		init = async () => {
			this.appendBtn(), this.translationStart = !1, this.completedTranslateIndex = 0, this.completedCharacterCount = 0, this.translateBtnEvents(), this.progressBarSelector && this.addProgressBar()
		};
		appendBtn = () => {
			this.translateBtn = jQuery(`<button class="button button-primary${this.btnClass?" "+this.btnClass:""}">${this.btnText}</button>`), jQuery(this.btnSelector).append(this.translateBtn)
		};
		formatCharacterCount = t => t >= 1e6 ? (t / 1e6).toFixed(1) + "M" : t >= 1e3 ? (t / 1e3).toFixed(1) + "K" : t;
		translateBtnEvents = t => this.btnSelector && 0 !== jQuery(this.btnSelector).length ? this.stringSelector && 0 !== jQuery(this.stringSelector).length ? (this.translateStatus = !0, this.translateBtn.off("click"), this.translateBtn.prop("disabled", !1), void(this.translationStart ? this.translateStringEle.length > this.completedTranslateIndex + 1 ? this.translateBtn.on("click", (() => {
			this.onStartTranslationProcess(), this.stringTranslation(this.completedTranslateIndex + 1)
		})) : (this.onComplete({
			translatedStringsCount: this.completedCharacterCount
		}), this.translateBtn.prop("disabled", !0)) : this.translateBtn.on("click", this.startTranslationProcess))) : this.onLanguageError("The string selector is missing. Please provide a valid selector for the strings to be translated.") : this.onLanguageError("The button selector is missing. Please provide a valid selector for the button.");
		startTranslationProcess = async () => {
			this.onStartTranslationProcess();
			const t = this.defaultLang;
			this.translationStart = !0, this.translateStringEle = jQuery(this.stringSelector), this.totalStringCount = Array.from(this.translateStringEle).map((t => t.innerText.length)).reduce(((t, e) => t + e), 0), this.translator = await this.AITranslator(t), this.translateStringEle.length > 0 && await this.stringTranslation(this.completedTranslateIndex)
		};
		stringTranslation = async t => {
			if (!this.translateStatus) return;
			const e = this.translateStringEle[t];
			this.onBeforeTranslate(e);
			const a = e.innerText;
			let n = [];
			(e.childNodes.length > 0 && !e.querySelector(".notranslate") || e.querySelector(".notranslate")) && e.childNodes.forEach((t => {
				3 === t.nodeType && "" !== t.nodeValue.trim() && n.push(t)
			})), n.length > 0 && await this.stringTranslationBatch(n, 0), this.completedCharacterCount += a.length, this.completedTranslateIndex = t, this.progressBarSelector && this.updateProgressBar(), this.onAfterTranslate(e), this.translateStringEle.length > t + 1 && await this.stringTranslation(this.completedTranslateIndex + 1), t === this.translateStringEle.length - 1 && (this.translateBtn.prop("disabled", !0), this.onComplete({
				characterCount: this.completedCharacterCount
			}), jQuery(this.progressBarSelector).find(".chrome-ai-translator-strings-count").show().find(".totalChars").text(this.formatCharacterCount(this.completedCharacterCount)))
		};
		stringTranslationBatch = async (t, e) => {
			const a = await this.translator.translate(t[e].nodeValue);
			return a && "" !== a && (t[e].nodeValue = a), e < t.length - 1 && await this.stringTranslationBatch(t, e + 1), !0
		};
		addProgressBar = () => {
			if (!document.querySelector("#chrome-ai-translator-modal .chrome-ai-translator_progress_bar")) {
				const t = jQuery('\n                <div class="chrome-ai-translator_progress_bar" style="background-color: #f3f3f3;border-radius: 10px;overflow: hidden;margin: 1.5rem auto; width: 50%;">\n                <div class="chrome-ai-translator_progress" style="overflow: hidden;transition: width .5s ease-in-out; border-radius: 10px;text-align: center;width: 0%;height: 20px;box-sizing: border-box;background-color: #4caf50; color: #fff; font-weight: 600;"></div>\n                </div>\n                <div style="display:none; color: white;" class="chrome-ai-translator-strings-count hidden">\n                    Wahooo! You have saved your valuable time via auto translating \n                    <strong class="totalChars">0</strong> characters using \n                    <strong>\n                        Chrome AI Translator\n                    </strong>\n                </div>\n            ');
				jQuery(this.progressBarSelector).append(t)
			}
		};
		updateProgressBar = () => {
			const t = this.completedCharacterCount / this.totalStringCount * 1e3 / 10;
			let e = t.toString().split(".")[1] || "";
			e = e.length > 0 && "0" !== e[0] ? e[0] : "";
			const a = parseInt(t) + "" + ("" !== e ? "." + e : "");
			jQuery(".chrome-ai-translator_progress").css({
				width: `${a}%`
			}).text(`${a}%`)
		};
		stopTranslation = () => {
			this.translateStatus = !1
		};
		reInit = () => {
			this.translateBtnEvents()
		};
		startTranslation = () => {
			this.translateStatus = !0, this.startTranslationProcess(this.completedTranslateIndex + 1)
		};
		static svgIcons = t => ({
			copy: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="16px" width="16px" xmlns="http://www.w3.org/2000/svg" fill="#2271b1"><path d="M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6 6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z"></path></svg>'
		} [t] || "")
	}
	const b = y,
		v = {
			yandex: t => {
				const e = window;
				_(e, e.document, e.navigator, {
					pageLang: t.sourceLang,
					autoMode: "false",
					widgetId: "atfp_yandex_translate_element",
					widgetTheme: "light"
				}, e.yt = e.yt || {}, t.targetLang, t.translateStatusHandler, t.modalRenderId)
			},
			localAiTranslator: async t => {
				const e = atfp_global_object.languageObject[t.targetLang],
					a = atfp_global_object.languageObject[t.sourceLang],
					n = (0, l.select)("block-atfp/translate").getAllowedMetaFields(),
					{
						translateStatusHandler: r,
						translateStatus: o
					} = t;
				let s = 0;
				const c = await b.Object({
					mainWrapperSelector: "#atfp_strings_model",
					btnSelector: `#${t.ID}`,
					btnClass: "local_ai_translator_btn",
					btnText: (0, i.__)("Translate To", "automatic-translations-for-polylang") + " " + e + " (Beta)",
					stringSelector: ".atfp_string_container tbody tr td.translate:not([data-translate-status='translated'])",
					progressBarSelector: "#atfp_strings_model .atfp_translate_progress",
					sourceLanguage: t.sourceLang,
					targetLanguage: t.targetLang,
					targetLanguageLabel: e,
					sourceLanguageLabel: a,
					onStartTranslationProcess: () => {
						s = (new Date).getTime(), jQuery("#atfp_strings_model .modal-content .atfp_string_container")[0].scrollHeight > 100 && jQuery("#atfp_strings_model .atfp_translate_progress").fadeIn("slow")
					},
					onComplete: () => {
						g({
							prefix: "localAiTranslator",
							start: s,
							end: (new Date).getTime(),
							translateStatus: !0
						}), setTimeout((() => {
							r(), jQuery("#atfp_strings_model .atfp_translate_progress").fadeOut("slow")
						}), 4e3)
					},
					onBeforeTranslate: t => {
						const e = jQuery("#atfp_strings_model .modal-content .atfp_string_container");
						if (e.length < 1) return c.stopTranslation(), g({
							prefix: "localAiTranslator",
							start: s,
							end: (new Date).getTime()
						}), void(s = 0);
						const a = e[0].getBoundingClientRect(),
							n = t.closest("tr").offsetTop,
							r = e.height();
						var o;
						n > r + a.y && (o = n - r + t.offsetHeight, e.scrollTop(o))
					},
					onAfterTranslate: t => {
						const e = t.innerText,
							a = t.dataset.stringType,
							r = t.dataset.key,
							o = t.closest("tr").querySelector('td[data-source="source_text"]').innerText;
						u({
							type: a,
							key: r,
							translateContent: e,
							source: o,
							provider: "localAiTranslator",
							AllowedMetaFields: n
						});
						const s = (0, l.select)("block-atfp/translate").getTranslationInfo().translateData?.localAiTranslator,
							i = s && s.targetWordCount ? s.targetWordCount : 0,
							c = s && s.targetCharacterCount ? s.targetCharacterCount : 0;
						"" !== e.trim() && e.trim().length > 0 && (0, l.dispatch)("block-atfp/translate").translationInfo({
							targetWordCount: i + o.trim().split(/\s+/).filter((t => /[^\p{L}\p{N}]/.test(t))).length,
							targetCharacterCount: c + o.trim().length,
							provider: "localAiTranslator"
						})
					}
				});
				if (c.hasOwnProperty("init")) {
					c.init();
					const t = document.querySelector("#atfp_localAiTranslator_translate_element .local_ai_translator_btn");
					t && o && (t.disabled = o)
				}
			}
		},
		w = d.createContext({});

	function T({
		baseColor: t,
		highlightColor: e,
		width: a,
		height: n,
		borderRadius: r,
		circle: o,
		direction: s,
		duration: l,
		enableAnimation: i = !0,
		customHighlightBackground: c
	}) {
		const d = {};
		return "rtl" === s && (d["--animation-direction"] = "reverse"), "number" == typeof l && (d["--animation-duration"] = `${l}s`), i || (d["--pseudo-element-display"] = "none"), "string" != typeof a && "number" != typeof a || (d.width = a), "string" != typeof n && "number" != typeof n || (d.height = n), "string" != typeof r && "number" != typeof r || (d.borderRadius = r), o && (d.borderRadius = "50%"), void 0 !== t && (d["--base-color"] = t), void 0 !== e && (d["--highlight-color"] = e), "string" == typeof c && (d["--custom-highlight-background"] = c), d
	}

	function S({
		count: t = 1,
		wrapper: e,
		className: a,
		containerClassName: n,
		containerTestId: r,
		circle: o = !1,
		style: s,
		...l
	}) {
		var i, c, p;
		const u = d.useContext(w),
			g = {
				...l
			};
		for (const [t, e] of Object.entries(l)) void 0 === e && delete g[t];
		const m = {
				...u,
				...g,
				circle: o
			},
			h = {
				...s,
				...T(m)
			};
		let f = "react-loading-skeleton";
		a && (f += ` ${a}`);
		const _ = null !== (i = m.inline) && void 0 !== i && i,
			y = [],
			b = Math.ceil(t);
		for (let e = 0; e < b; e++) {
			let a = h;
			if (b > t && e === b - 1) {
				const e = null !== (c = a.width) && void 0 !== c ? c : "100%",
					n = t % 1,
					r = "number" == typeof e ? e * n : `calc(${e} * ${n})`;
				a = {
					...a,
					width: r
				}
			}
			const n = d.createElement("span", {
				className: f,
				style: a,
				key: e
			}, "‌");
			_ ? y.push(n) : y.push(d.createElement(d.Fragment, {
				key: e
			}, n, d.createElement("br", null)))
		}
		return d.createElement("span", {
			className: n,
			"data-testid": r,
			"aria-live": "polite",
			"aria-busy": null === (p = m.enableAnimation) || void 0 === p || p
		}, e ? y.map(((t, a) => d.createElement(e, {
			key: a
		}, t))) : y)
	}
	const k = t => {
			const {
				service: e
			} = t, a = (0, l.select)("block-atfp/translate").getTranslationEntry(), n = t.stringModalBodyNotice;
			return (0, d.useEffect)((() => {
				"yandex" === t.service && (document.documentElement.setAttribute("translate", "no"), document.body.classList.add("notranslate"));
				const e = t.service,
					a = `atfp_${e}_translate_element`;
				wp.data.select("block-atfp/translate").getTranslationEntry().length > 0 && t.postDataFetchStatus && v[e]({
					sourceLang: t.sourceLang,
					targetLang: t.targetLang,
					translateStatusHandler: t.translateStatusHandler,
					ID: a,
					translateStatus: t.translateStatus,
					modalRenderId: t.modalRender
				})
			}), [t.modalRender, t.postDataFetchStatus]), React.createElement("div", {
				className: "modal-body"
			}, a.length > 0 && t.postDataFetchStatus ? React.createElement(React.Fragment, null, n && React.createElement("div", {
				className: "atfp-body-notice-wrapper"
			}, React.createElement(n, null)), React.createElement("div", {
				className: "atfp_translate_progress",
				key: t.modalRender
			}, (0, i.__)("Automatic translation is in progress....", "automatic-translations-for-polylang"), React.createElement("br", null), (0, i.__)("It will take few minutes, enjoy ☕ coffee in this time!", "automatic-translations-for-polylang"), React.createElement("br", null), React.createElement("br", null), (0, i.__)("Please do not leave this window or browser tab while translation is in progress...", "automatic-translations-for-polylang")), React.createElement("div", {
				className: `translator-widget ${e}`,
				style: {
					display: "localAiTranslator" === t.service ? "flex" : "block"
				}
			}, "localAiTranslator" === t.service ? React.createElement("h3", {
				className: "choose-lang"
			}, (0, i.__)("Translate Using Chrome built-in API", "automatic-translations-for-polylang"), " ", React.createElement("span", {
				className: "dashicons-before dashicons-translation"
			})) : React.createElement("h3", {
				className: "choose-lang"
			}, (0, i.__)("Choos11e language", "automatic-translations-for-polylang"), " ", React.createElement("span", {
				className: "dashicons-before dashicons-translation"
			})), React.createElement("div", {
				className: "atfp_translate_element_wrapper " + (t.translateStatus ? "translate-completed" : "")
			}, "localAiTranslator" === e ? React.createElement("div", {
				id: "atfp_localAiTranslator_translate_element"
			}) : React.createElement("div", {
				id: "atfp_yandex_translate_element"
			}))), React.createElement("div", {
				className: "atfp_string_container"
			}, React.createElement("table", {
				className: "scrolldown",
				id: "stringTemplate"
			}, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", {
				className: "notranslate"
			}, (0, i.__)("S.No", "automatic-translations-for-polylang")), React.createElement("th", {
				className: "notranslate"
			}, (0, i.__)("Source Text", "automatic-translations-for-polylang")), React.createElement("th", {
				className: "notranslate"
			}, (0, i.__)("Translation", "automatic-translations-for-polylang")))), React.createElement("tbody", null, t.postDataFetchStatus && React.createElement(React.Fragment, null, a.map(((e, a) => React.createElement(s.Fragment, {
				key: a + t.translatePendingStatus
			}, void 0 !== e.source && "" !== e.source.trim() && React.createElement(React.Fragment, null, React.createElement("tr", {
				key: a + "tr" + t.translatePendingStatus
			}, React.createElement("td", null, a + 1), React.createElement("td", {
				"data-source": "source_text"
			}, e.source), t.translatePendingStatus ? React.createElement("td", {
				className: "translate",
				translate: "yes",
				"data-key": e.id,
				"data-string-type": e.type
			}, React.createElement(p, {
				service: t.service,
				content: e.source,
				totalString: 350,
				currentIndex: a + 1,
				contentKey: e.id
			})) : React.createElement("td", {
				className: "translate",
				"data-translate-status": "translated",
				"data-key": e.id,
				"data-string-type": e.type
			}, e.translatedData[t.service]))))))))))) : t.postDataFetchStatus ? React.createElement("p", null, (0, i.__)("No strings are available for translation", "automatic-translations-for-polylang")) : React.createElement(S, {
				count: 1,
				height: "150px",
				width: "100%",
				className: "react-loading-skeleton-atfp"
			}))
		},
		E = t => React.createElement("div", {
			className: `notice inline notice-info is-dismissible ${t.className}`
		}, Array.isArray(t.children) ? t.children.join(" ") : t.children),
		C = t => React.createElement("div", {
			className: "modal-footer",
			key: t.modalRender
		}, !t.translatePendingStatus && React.createElement(E, {
			className: "atfp_string_count"
		}, React.createElement("p", null, "Wahooo! You have saved your valuable time via auto translating ", React.createElement("strong", null, React.createElement(m, {
			number: t.characterCount
		})), " characters using ", React.createElement("strong", null, t.serviceLabel), ".Please share your feedback — ", React.createElement("a", {
			href: "https://wordpress.org/support/plugin/automatic-translations-for-polylang/reviews/#new-post",
			target: "_blank",
			rel: "noopener",
			style: {
				color: "yellow"
			}
		}, "leave a quick review"), "!")), React.createElement("div", {
			className: "save_btn_cont"
		}, React.createElement("button", {
			className: "notranslate save_it button button-primary",
			disabled: t.translatePendingStatus,
			onClick: t.updatePostData
		}, (0, i.__)("Update Content", "automatic-translations-for-polylang"))));

	function R() {
		return R = Object.assign ? Object.assign.bind() : function(t) {
			for (var e = 1; e < arguments.length; e++) {
				var a = arguments[e];
				for (var n in a)({}).hasOwnProperty.call(a, n) && (t[n] = a[n])
			}
			return t
		}, R.apply(null, arguments)
	}
	const L = t => {
			const e = (0, l.select)("block-atfp/translate").getTranslationInfo().translateData[t.service] || !1,
				a = e?.translateStatus || !1,
				[n, r] = (0, s.useState)(!0),
				[o, i] = (0, s.useState)(""),
				[d, p] = (0, s.useState)(!0),
				[u, g] = (0, s.useState)(e?.targetCharacterCount || 0),
				m = () => {
					const e = t.service;
					return "yandex" === e ? "Yandex Translate" : "google" === e ? "Google Translate" : "localAiTranslator" === e ? "Chrome AI Translator" : e
				};
			(0, s.useEffect)((() => {
				t.postDataFetchStatus || t.fetchPostData({
					postId: t.postId,
					sourceLang: t.sourceLang,
					targetLang: t.targetLang,
					updatePostDataFetch: t.updatePostDataFetch,
					refPostData: t => i(t)
				})
			}), [t.postDataFetchStatus, t.modalRender]);
			const h = e => {
					"yandex" === t.service && document.querySelector("#atfp_yandex_translate_element #yt-widget .yt-button__icon.yt-button__icon_type_right")?.click(), p(!0), r(!1)
				},
				f = () => {
					const e = o;
					t.translatePost({
						postContent: e,
						modalClose: () => r(!1),
						service: t.service
					}), t.pageTranslate(!0), (({
						provider: t,
						sourceLang: e,
						targetLang: a,
						postId: n
					}) => {
						const r = (0, l.select)("block-atfp/translate").getTranslationInfo(),
							o = r.translateData?.[t]?.targetWordCount || 0,
							s = r.translateData?.[t]?.targetCharacterCount || 0,
							i = r.translateData?.[t]?.timeTaken || 0,
							c = r?.sourceWordCount || 0,
							d = r?.sourceCharacterCount || 0,
							p = {
								provider: t,
								totalWordCount: o,
								totalCharacterCount: s,
								editorType: atfp_global_object.editor_type,
								date: (new Date).toISOString(),
								sourceWordCount: c,
								sourceCharacterCount: d,
								sourceLang: e,
								targetLang: a,
								timeTaken: i,
								action: atfp_global_object.update_translate_data,
								atfp_nonce: atfp_global_object.ajax_nonce,
								post_id: n
							};
						fetch(atfp_global_object.ajax_url, {
							method: "POST",
							headers: {
								"content-type": "application/x-www-form-urlencoded; charset=UTF-8",
								Accept: "application/json"
							},
							body: new URLSearchParams(p)
						}).then((t => t.json())).then((t => {
							console.log(t.data.message)
						})).catch((t => {
							console.error(t)
						}))
					})({
						provider: t.service,
						sourceLang: t.sourceLang,
						targetLang: t.targetLang,
						postId: t.currentPostId
					})
				};
			return (0, s.useEffect)((() => {
				r(!0), a && (g(e?.targetCharacterCount || 0), p(!1)), setTimeout((() => {
					const t = document.querySelector(".atfp_string_container");
					t && (t.scrollTop = 0)
				}))
			}), [t.modalRender]), React.createElement(React.Fragment, null, " ", n && React.createElement("div", {
				id: `atfp-${t.service}-strings-modal`,
				className: "modal-container",
				style: {
					display: n ? "flex" : "none"
				},
				"data-render-id": t.modalRender
			}, React.createElement("div", {
				className: "modal-content"
			}, React.createElement(c, {
				modalRender: t.modalRender,
				setPopupVisibility: h,
				postContent: o,
				translatePendingStatus: d,
				pageTranslate: t.pageTranslate,
				service: t.service,
				serviceLabel: m(),
				updatePostData: f,
				characterCount: u
			}), React.createElement(k, R({}, t, {
				updatePostContent: t => {
					i(t)
				},
				contentLoading: t.contentLoading,
				postDataFetchStatus: t.postDataFetchStatus,
				translatePendingStatus: d,
				service: t.service,
				sourceLang: t.sourceLang,
				targetLang: t.targetLang,
				translateStatusHandler: () => {
					const e = (0, l.select)("block-atfp/translate").getTranslationInfo().translateData[t.service]?.targetCharacterCount || 0;
					g(e), p(!1)
				},
				modalRender: t.modalRender,
				translateStatus: a,
				stringModalBodyNotice: t.stringModalBodyNotice
			})), React.createElement(C, {
				modalRender: t.modalRender,
				setPopupVisibility: h,
				postContent: o,
				translatePendingStatus: d,
				pageTranslate: t.pageTranslate,
				service: t.service,
				serviceLabel: m(),
				updatePostData: f,
				characterCount: u
			}))))
		},
		x = ({
			setSettingVisibility: t
		}) => React.createElement("div", {
			className: "modal-header"
		}, React.createElement("h2", null, (0, i.__)("Step 1 - Select Translation Provider", "automatic-translations-for-polylang")), React.createElement("span", {
			className: "close",
			onClick: () => t(!1)
		}, "×")),
		j = ({
			Title: t,
			Logo: e,
			ButtonText: a,
			Service: n,
			ServiceLabel: r,
			ButtonAction: o,
			ButtonDisabled: s = !1,
			BetaEnabled: l = !1,
			Docs: i = !1,
			ProviderLink: c = !1,
			ErrorMessage: d = React.createElement(React.Fragment, null)
		}) => {
			const p = n.replace(/([A-Z])/g, "-$1").toLowerCase().replace(/[^a-z0-9-]/g, ""),
				u = `atfp-${p}-btn`;
			return React.createElement("div", {
				id: `atfp-${p}-column`,
				className: "atfp-translator-column"
			}, React.createElement("div", {
				className: "atfp-translator-header"
			}, i && React.createElement("a", {
				href: i,
				target: "_blank"
			}, React.createElement("svg", {
				width: "9",
				height: "12",
				viewBox: "0 0 9 12",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg"
			}, React.createElement("path", {
				d: "M2.17607 6.20533H6.82393V5.53867H2.17607V6.20533ZM2.17607 8.05133H6.82393V7.38467H2.17607V8.05133ZM2.17607 9.898H4.89536V9.23133H2.17607V9.898ZM1.03821 12C0.7425 12 0.495643 11.8973 0.297643 11.692C0.0996427 11.4867 0.000428571 11.2304 0 10.9233V1.07667C0 0.77 0.0992142 0.514 0.297643 0.308667C0.496071 0.103333 0.743143 0.000444444 1.03886 0H6.10714L9 3V10.9233C9 11.23 8.901 11.4862 8.703 11.692C8.505 11.8978 8.25771 12.0004 7.96114 12H1.03821ZM5.78571 3.33333V0.666667H1.03886C0.939857 0.666667 0.849 0.709333 0.766286 0.794666C0.683571 0.88 0.642429 0.974 0.642857 1.07667V10.9233C0.642857 11.0256 0.684 11.1196 0.766286 11.2053C0.848571 11.2911 0.939214 11.3338 1.03821 11.3333H7.96179C8.06036 11.3333 8.151 11.2907 8.23371 11.2053C8.31643 11.12 8.35757 11.0258 8.35714 10.9227V3.33333H5.78571Z",
				fill: "#6F6F6F"
			}))), c && React.createElement("a", {
				href: c,
				target: "_blank"
			}, React.createElement("svg", {
				width: "15",
				height: "15",
				viewBox: "0 0 15 15",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg"
			}, React.createElement("path", {
				d: "M5.32545 10.0687C5.12822 9.90719 5.10017 9.62531 5.2617 9.42808L10.4537 3.08853C10.6153 2.89129 10.8972 2.86324 11.0944 3.02477C11.2916 3.18631 11.3197 3.46819 11.1581 3.66542L5.96609 10.005C5.80456 10.2022 5.52268 10.2303 5.32545 10.0687Z",
				fill: "#6F6F6F"
			}), React.createElement("path", {
				d: "M11.5398 7.50929C11.4931 7.47202 11.4548 7.42541 11.4272 7.37243C11.3997 7.31946 11.3835 7.26131 11.3798 7.20172L10.9781 3.16566L6.94209 3.56729C6.68583 3.59279 6.46747 3.41395 6.44197 3.1577C6.41647 2.90144 6.5953 2.68308 6.85156 2.65758L11.3361 2.21132C11.5923 2.18582 11.8107 2.36466 11.8362 2.62091L12.2824 7.10542C12.3079 7.36168 12.1291 7.58004 11.8729 7.60554C11.7447 7.61829 11.6243 7.57852 11.5398 7.50929Z",
				fill: "#6F6F6F"
			}), React.createElement("path", {
				d: "M5.9026 4.89502H2.82096C1.81527 4.89502 1 5.71029 1 6.71598V12.1789C1 13.1846 1.81527 13.9998 2.82096 13.9998H8.28386C9.28955 13.9998 10.1048 13.1846 10.1048 12.1789V8.04669",
				stroke: "#6F6F6F",
				strokeWidth: "0.910482"
			})))), React.createElement("div", {
				className: "atfp-translator-body"
			}, React.createElement("strong", null, t), React.createElement("br", null), React.createElement("a", {
				href: c,
				target: "_blank"
			}, React.createElement("img", {
				src: e,
				alt: t
			})), React.createElement("div", {
				className: "atfp-translator-btn-wrapper"
			}, s ? React.createElement("button", {
				disabled: s,
				className: "atfp-translator-service-btn",
				id: u
			}, a) : React.createElement("button", {
				id: u,
				onClick: o,
				className: "atfp-service-btn",
				"data-service": n,
				"data-service-label": r
			}, a), l && React.createElement("span", {
				className: "atfp-translator-beta-btn"
			}, "Beta"))), React.createElement("div", {
				className: "atfp-translator-footer"
			}, d && d))
		};

	function A() {
		return A = Object.assign ? Object.assign.bind() : function(t) {
			for (var e = 1; e < arguments.length; e++) {
				var a = arguments[e];
				for (var n in a)({}).hasOwnProperty.call(a, n) && (t[n] = a[n])
			}
			return t
		}, A.apply(null, arguments)
	}
	const N = ({
			yandexSupport: t,
			imgFolder: e,
			targetLangName: a,
			postType: n,
			sourceLangName: r,
			fetchContent: o,
			chromeAiBtnDisabled: s,
			openErrorModalHandler: l
		}) => {
			const c = [{
				Service: "yandex",
				Title: (0, i.__)("Translate Using Yandex Page Translate Widget", "automatic-translations-for-polylang"),
				Logo: `${e}yandex-translate-logo.png`,
				ServiceLabel: "Yandex Translate",
				ButtonText: (0, i.__)("Yandex Translate", "automatic-translations-for-polylang"),
				ProviderLink: "https://translate.yandex.com/",
				ButtonDisabled: !t,
				ErrorMessage: t ? React.createElement(React.Fragment, null) : React.createElement("p", {
					className: "atfp-error-message"
				}, (0, i.__)("language is not supported by Yandex Translate", "automatic-translations-for-polylang")),
				ButtonAction: o
			}, {
				Service: "localAiTranslator",
				ServiceLabel: "Chrome Built-in API",
				Title: (0, i.__)("Translate Using Chrome Built-in API", "automatic-translations-for-polylang"),
				Logo: `${e}chrome-built-in-ai-logo.png`,
				ButtonText: (0, i.__)("Chrome AI Translator", "automatic-translations-for-polylang"),
				ProviderLink: "https://developer.chrome.com/docs/ai/translator-api",
				ButtonDisabled: s,
				ErrorMessage: s ? React.createElement("button", {
					className: "atfp-localai-disabled-message",
					onClick: () => l("localAiTranslator")
				}, (0, i.__)("Translator button is disabled. Click for details.", "automatic-translations-for-polylang")) : React.createElement(React.Fragment, null),
				BetaEnabled: !0,
				ButtonAction: o
			}];
			return React.createElement("div", {
				className: "atfp-setting-modal-body"
			}, React.createElement("div", {
				className: "atfp-setting-modal-notice-wrapper"
			}, React.createElement("h4", null, sprintf((0, i.__)("Translate page content from %(source)s to %(target)s", "automatic-translations-for-polylang"), {
				source: r,
				target: a
			})), React.createElement("p", {
				className: "atfp-error-message",
				style: {
					marginBottom: ".5rem"
				}
			}, sprintf((0, i.__)("The page content will be saved as a draft after translating it into %(target)s. You can publish it after reviewing the translation.", "automatic-translations-for-polylang"), {
				target: a
			}))), React.createElement("div", {
				className: "atfp-translator-row"
			}, c.map((t => React.createElement(j, A({
				key: t.Service
			}, t))))))
		},
		F = ({
			setSettingVisibility: t
		}) => React.createElement("div", {
			className: "modal-footer"
		}, React.createElement("button", {
			className: "atfp-setting-close",
			onClick: () => t(!1)
		}, (0, i.__)("Close", "automatic-translations-for-polylang"))),
		P = ({
			message: t,
			onClose: e,
			Title: a
		}) => {
			let n = jQuery("<div>").append(t);
			const r = n.html();
			return n.remove(), n = null, (0, s.useEffect)((() => {
				const t = document.querySelectorAll(".chrome-ai-translator-flags");
				if (t.length > 0) return t.forEach((t => {
					t.classList.add("atfp-tooltip-element"), t.addEventListener("click", (e => {
						if (e.preventDefault(), t.querySelector(".atfp-tooltip")) return;
						let a = document.createElement("span");
						a.textContent = "Text to be copied.", a.className = "atfp-tooltip", t.appendChild(a), (async ({
							text: t = !1,
							startCopyStatus: e = () => {},
							endCopyStatus: a = () => {}
						}) => {
							if (t && "" !== t) try {
								if (navigator?.clipboard?.writeText) await navigator.clipboard.writeText(t);
								else {
									const e = document.createElement("textarea");
									e.value = t, document.body.appendChild(e), e.select(), document.execCommand && document.execCommand("copy"), document.body.removeChild(e)
								}
								e(), setTimeout((() => a()), 800)
							} catch (t) {
								console.error("Error copying text to clipboard:", t)
							}
						})({
							text: t.getAttribute("data-clipboard-text"),
							startCopyStatus: () => {
								a.classList.add("atfp-tooltip-active")
							},
							endCopyStatus: () => {
								setTimeout((() => {
									a.remove()
								}), 800)
							}
						})
					}))
				})), () => {
					t.forEach((t => {
						t.removeEventListener("click", (() => {}))
					}))
				}
			}), []), React.createElement("div", {
				className: "atfp-error-modal-box-container"
			}, React.createElement("div", {
				className: "atfp-error-modal-box"
			}, React.createElement("div", {
				className: "atfp-error-modal-box-header"
			}, React.createElement("span", {
				className: "atfp-error-modal-box-close",
				onClick: e
			}, "×"), a && React.createElement("h3", null, a)), React.createElement("div", {
				className: "atfp-error-modal-box-body"
			}, React.createElement("p", {
				dangerouslySetInnerHTML: {
					__html: r
				}
			})), React.createElement("div", {
				className: "atfp-error-modal-box-footer"
			}, React.createElement("button", {
				className: "atfp-error-modal-box-close",
				onClick: e
			}, "Close"))))
		};

	function I() {
		return I = Object.assign ? Object.assign.bind() : function(t) {
			for (var e = 1; e < arguments.length; e++) {
				var a = arguments[e];
				for (var n in a)({}).hasOwnProperty.call(a, n) && (t[n] = a[n])
			}
			return t
		}, I.apply(null, arguments)
	}
	const D = t => {
			const [e, a] = (0, s.useState)({}), [n, r] = (0, s.useState)(0), [l, c] = (0, s.useState)(!1), d = atfp_global_object.source_lang, p = t.targetLang, u = atfp_global_object.languageObject[d], g = atfp_global_object.languageObject[p], m = atfp_global_object.atfp_url + "assets/images/", h = ["af", "am", "ar", "az", "ba", "be", "bg", "bn", "bs", "ca", "ceb", "cs", "cv", "cy", "da", "de", "el", "emj", "en", "eo", "es", "et", "eu", "fa", "fi", "fr", "ga", "gd", "gl", "gu", "he", "hi", "hr", "ht", "hu", "hy", "id", "is", "it", "ja", "jv", "ka", "kazlat", "kk", "km", "kn", "ko", "ky", "la", "lb", "lo", "lt", "lv", "mg", "mhr", "mi", "mk", "ml", "mn", "mr", "mrj", "ms", "mt", "my", "ne", "nl", "no", "pa", "pap", "pl", "pt", "pt-BR", "ro", "ru", "sah", "si", "sk", "sl", "sq", "sr", "sr-Latn", "su", "sv", "sw", "ta", "te", "tg", "th", "tl", "tr", "tt", "udm", "uk", "ur", "uz", "uzbcyr", "vi", "xh", "yi", "zh", "zu"].includes(p), [f, _] = (0, s.useState)({}), [y, v] = (0, s.useState)(!1), [w, T] = (0, s.useState)(!1), S = t => {
				t.preventDefault();
				const e = t.target;
				"yes" === e.dataset.value && c(!0), e.closest("#atfp-modal-open-warning-wrapper").remove()
			};
			(0, s.useEffect)((() => {
				const e = document.querySelectorAll("#atfp-modal-open-warning-wrapper .modal-content button"),
					a = document.querySelector(t.translateWrpSelector);
				a && a.addEventListener("click", (() => {
					c((t => !t))
				})), e.forEach((t => {
					t && t.addEventListener("click", S)
				}))
			}), []), (0, s.useEffect)((() => {
				(async () => {
					const t = await b.languageSupportedStatus(d, p, g, u),
						e = document.querySelector(".atfp-service-btn#atfp-local-ai-translator-btn");
					!0 !== t && "object" == typeof t && e && (T(!0), _((e => ({
						...e,
						localAiTranslator: {
							message: t,
							Title: (0, i.__)("Chrome AI Translator", "automatic-translations-for-polylang")
						}
					}))))
				})()
			}), [l]), (0, s.useEffect)((() => {
				const a = e,
					r = a.dataset && a.dataset.service,
					s = a.dataset && a.dataset.serviceLabel,
					l = t.postId,
					i = document.getElementById("atfp_strings_model");
				i && (i._reactRoot || (i._reactRoot = o.createRoot(i)), n && i._reactRoot.render(React.createElement(L, {
					currentPostId: t.currentPostId,
					postId: l,
					service: r,
					serviceLabel: s,
					sourceLang: d,
					targetLang: p,
					modalRender: n,
					pageTranslate: t.pageTranslate,
					postDataFetchStatus: t.postDataFetchStatus,
					fetchPostData: t.fetchPostData,
					translatePost: t.translatePost,
					contentLoading: t.contentLoading,
					updatePostDataFetch: t.updatePostDataFetch,
					stringModalBodyNotice: t.stringModalBodyNotice
				})))
			}), [t.postDataFetchStatus, n]);
			const k = t => {
				c(t)
			};
			return React.createElement(React.Fragment, null, y && f[y] && React.createElement(P, I({
				onClose: () => {
					v(!1)
				}
			}, f[y])), l && React.createElement("div", {
				className: "modal-container",
				style: {
					display: l ? "flex" : "none"
				}
			}, React.createElement("div", {
				className: "atfp-settings modal-content"
			}, React.createElement(x, {
				setSettingVisibility: k,
				postType: t.postType,
				sourceLangName: u,
				targetLangName: g
			}), React.createElement(N, {
				yandexSupport: h,
				fetchContent: async t => {
					let e = t.target.classList.contains("atfp-service-btn") ? t.target : t.target.closest(".atfp-service-btn");
					if (!e) return;
					const n = e.dataset && e.dataset.service;
					if (c(!1), "localAiTranslator" === n) {
						const t = await b.languageSupportedStatus(d, p, g);
						if (!0 !== t && "object" == typeof t) return
					}
					r((t => t + 1)), a(e)
				},
				imgFolder: m,
				targetLangName: g,
				postType: t.postType,
				sourceLangName: u,
				chromeAiBtnDisabled: w,
				openErrorModalHandler: t => {
					c(!1), v(t)
				}
			}), React.createElement(F, {
				setSettingVisibility: k
			}))))
		},
		B = "SAVE_SOURCE_TITLE",
		O = "SAVE_TRANSLATE_TITLE",
		$ = "SAVE_SOURCE_EXCERPT",
		M = "SAVE_TRANSLATE_EXCERPT",
		H = "SAVE_SOURCE_CONTENT",
		V = "SAVE_TRANSLATE_CONTENT",
		q = "SAVE_SOURCE_META_FIELDS",
		Q = "SAVE_TRANSLATE_META_FIELDS",
		W = "SET_BLOCK_RULES",
		U = "SAVE_TRANSLATE_INFO",
		z = "ALLOWED_META_FIELDS",
		Y = {
			title: {},
			excerpt: {},
			content: [],
			metaFields: {},
			allowedMetaFields: {}
		},
		Z = t => ({
			type: B,
			text: t
		}),
		J = (t, e) => ({
			type: O,
			text: t,
			provider: e
		}),
		K = t => ({
			type: $,
			text: t
		}),
		X = (t, e) => ({
			type: M,
			text: t,
			provider: e
		}),
		G = (t, e) => ({
			type: H,
			text: e,
			id: t
		}),
		tt = (t, e, a, n) => ({
			type: V,
			text: e,
			id: t,
			source: a,
			provider: n
		}),
		et = (t, e) => ({
			type: q,
			text: e,
			id: t
		}),
		at = (t, e, a, n) => ({
			type: Q,
			text: e,
			id: t,
			source: a,
			provider: n
		}),
		nt = t => ({
			type: W,
			data: t
		}),
		rt = ({
			sourceWordCount: t = null,
			sourceCharacterCount: e = null,
			timeTaken: a = null,
			provider: n = null,
			targetWordCount: r = null,
			targetCharacterCount: o = null,
			translateStatus: s = null
		}) => ({
			type: U,
			sourceWordCount: t,
			sourceCharacterCount: e,
			timeTaken: a,
			targetWordCount: r,
			targetCharacterCount: o,
			provider: n,
			translateStatus: s
		}),
		ot = ({
			id: t,
			type: e
		}) => ({
			type: z,
			id: t,
			inputType: e
		}),
		st = t => {
			const e = new Array;
			return t.title.source && e.push({
				id: "title",
				source: t.title.source,
				type: "title",
				translatedData: t.title.translatedData || {}
			}), t.excerpt.source && e.push({
				id: "excerpt",
				source: t.excerpt.source,
				type: "excerpt",
				translatedData: t.excerpt.translatedData || {}
			}), Object.keys(t.metaFields).map((a => {
				e.push({
					type: "metaFields",
					id: a,
					source: t.metaFields[a].source,
					translatedData: t.metaFields[a].translatedData || {}
				})
			})), Object.keys(t.content).map((a => {
				e.push({
					type: "content",
					id: a,
					source: t.content[a].source,
					translatedData: t.content[a].translatedData || {}
				})
			})), e
		},
		lt = t => t.blockRules,
		it = (t, e, a, n = null, r = null) => ["title", "excerpt"].includes(e) && t[e].source === a && t[e].translatedData && t[e].translatedData[r] ? t[e]?.translatedData[r] || t[e]?.source : "metaFields" === e && t.metaFields && t.metaFields[n] && t.metaFields[n].source === a && t.metaFields[n].translatedData && t.metaFields[n].translatedData[r] ? void 0 !== t.metaFields[n]?.translatedData[r] ? t.metaFields[n]?.translatedData[r] : t.metaFields[n]?.source : "content" === e && t.content && t.content[n] && t.content[n].source === a && t.content[n].translatedData && t.content[n].translatedData[r] ? void 0 !== t.content[n]?.translatedData[r] ? t.content[n]?.translatedData[r] : t.content[n]?.source : a,
		ct = t => ({
			sourceWordCount: t?.translationInfo?.sourceWordCount || 0,
			sourceCharacterCount: t?.translationInfo?.sourceCharacterCount || 0,
			translateData: t?.translationInfo?.translateData || {}
		}),
		dt = t => t.allowedMetaFields || {},
		{
			createReduxStore: pt,
			register: ut
		} = wp.data;
	ut(pt("block-atfp/translate", {
		reducer: (t = Y, e) => {
			switch (e.type) {
				case B:
					return /[\p{L}\p{N}]/gu.test(e.text) ? {
						...t,
						title: {
							...t.title,
							source: e.text
						}
					} : t;
				case O:
					return {
						...t, title: {
							...t.title,
							translatedData: {
								...t.title.translatedData || [],
								[e.provider]: e.text
							}
						}
					};
				case $:
					return /[\p{L}\p{N}]/gu.test(e.text) ? {
						...t,
						excerpt: {
							...t.excerpt,
							source: e.text
						}
					} : t;
				case M:
					return {
						...t, excerpt: {
							...t.excerpt,
							translatedData: {
								...t.excerpt.translatedData || [],
								[e.provider]: e.text
							}
						}
					};
				case H:
					return /[\p{L}\p{N}]/gu.test(e.text) ? {
						...t,
						content: {
							...t.content,
							[e.id]: {
								...t.content[e.id] || [],
								source: e.text
							}
						}
					} : t;
				case V:
					return t.content[e.id].source === e.source ? {
						...t,
						content: {
							...t.content,
							[e.id]: {
								...t.content[e.id] || [],
								translatedData: {
									...t.content[e.id].translatedData || [],
									[e.provider]: e.text
								}
							}
						}
					} : t;
				case q:
					return /[\p{L}\p{N}]/gu.test(e.text) ? {
						...t,
						metaFields: {
							...t.metaFields,
							[e.id]: {
								...t.metaFields[e.id] || [],
								source: e.text
							}
						}
					} : t;
				case Q:
					return {
						...t, metaFields: {
							...t.metaFields,
							[e.id]: {
								...t.metaFields[e.id] || [],
								translatedData: {
									...t.metaFields[e.id].translatedData || [],
									[e.provider]: e.text
								}
							}
						}
					};
				case W:
					return {
						...t, blockRules: e.data
					};
				case U:
					const a = {};
					return e.sourceWordCount && (a.sourceWordCount = e.sourceWordCount), e.sourceCharacterCount && (a.sourceCharacterCount = e.sourceCharacterCount), (e.targetWordCount || e.targetCharacterCount || e.translateStatus || e.timeTaken) && e.provider && (a.translateData = {
						...t.translationInfo?.translateData || {},
						[e.provider]: {
							...t.translationInfo?.translateData?.[e.provider] || {},
							...e.targetWordCount && {
								targetWordCount: e.targetWordCount
							},
							...e.targetCharacterCount && {
								targetCharacterCount: e.targetCharacterCount
							},
							...e.translateStatus && {
								translateStatus: e.translateStatus
							},
							...e.timeTaken && {
								timeTaken: e.timeTaken
							}
						}
					}), {
						...t,
						translationInfo: {
							...t.translationInfo,
							...a
						}
					};
				case z:
					return {
						...t, allowedMetaFields: {
							...t.allowedMetaFields,
							[e.id]: {
								...t.allowedMetaFields[e.id] || [],
								inputType: e.inputType
							}
						}
					};
				default:
					return t
			}
		},
		actions: n,
		selectors: r
	}));
	const gt = (t, e, a, n) => {
			const r = (t, e) => {
				Object.keys(e).map((a => {
					let r = e;
					r = r[a];
					const o = new Array(...t, a);
					n(o, r)
				}))
			};
			Object.getPrototypeOf(e) === Array.prototype ? ((t, e) => {
				const o = new Array(...t);
				let s = a;
				o.forEach((t => {
					s = s[t]
				})), [null, void 0].includes(s) || (Object.getPrototypeOf(s) !== Object.prototype ? (Object.getPrototypeOf(s) === Array.prototype && s.forEach(((t, a) => {
					const r = new Array;
					o.forEach((t => {
						r.push(t)
					})), r.push(a), n(r, e[0])
				})), "object" != typeof s || r(t, e[0])) : r(t, e[0]))
			})(t, e) : Object.getPrototypeOf(e) === Object.prototype && r(t, e)
		},
		mt = (t, e) => {
			Object.keys(e.AtfpBlockParseRules).includes(t.name) && ((t, e, a) => {
				const n = Object.values(a),
					r = (a, n) => {
						if (!0 !== n) gt(a, n, e, r);
						else {
							const n = new Array(...a),
								r = new Array;
							let o = e,
								s = t;
							n.forEach((t => {
								r.push(t), s += `atfp${t}`, o = o[t]
							}));
							let i = o;
							if (i instanceof wp.richText.RichTextData && (i = i.originalHTML), void 0 !== i && "" !== i.trim()) {
								let t = s.replace(/[^\p{L}\p{N}]/gu, "");
								if (!/[\p{L}\p{N}]/gu.test(i)) return !1;
								(0, l.dispatch)("block-atfp/translate").contentSaveSource(t, i)
							}
						}
					};
				n.forEach((t => {
					Object.keys(t).forEach((e => {
						const a = new Array(e);
						r(a, t[e])
					}))
				}))
			})(t.clientId, t.attributes, e.AtfpBlockParseRules[t.name])
		},
		ht = (t, e) => {
			t.forEach((t => {
				mt(t, e), t.innerBlocks && ht(t.innerBlocks, e)
			}))
		},
		ft = window.wp.blocks,
		_t = {
			_yoast_wpseo_title: {
				type: "string"
			},
			_yoast_wpseo_focuskw: {
				type: "string"
			},
			_yoast_wpseo_metadesc: {
				type: "string"
			},
			_yoast_wpseo_bctitle: {
				type: "string"
			},
			"_yoast_wpseo_opengraph-title": {
				type: "string"
			},
			"_yoast_wpseo_opengraph-description": {
				type: "string"
			},
			"_yoast_wpseo_twitter-title": {
				type: "string"
			},
			"_yoast_wpseo_twitter-description": {
				type: "string"
			},
			rank_math_title: {
				type: "string"
			},
			rank_math_description: {
				type: "string"
			},
			rank_math_focus_keyword: {
				type: "string"
			},
			rank_math_facebook_title: {
				type: "string"
			},
			rank_math_facebook_description: {
				type: "string"
			},
			rank_math_twitter_title: {
				type: "string"
			},
			rank_math_twitter_description: {
				type: "string"
			},
			rank_math_breadcrumb_title: {
				type: "string"
			},
			_seopress_titles_title: {
				type: "string"
			},
			_seopress_titles_desc: {
				type: "string"
			},
			_seopress_social_fb_title: {
				type: "string"
			},
			_seopress_social_fb_desc: {
				type: "string"
			},
			_seopress_social_twitter_title: {
				type: "string"
			},
			_seopress_social_twitter_desc: {
				type: "string"
			},
			_seopress_analysis_target_kw: {
				type: "string"
			}
		},
		yt = async t => {
			const e = atfp_global_object.ajax_url;
			let a = {};
			const n = t => {
				(0, l.dispatch)("block-atfp/translate").allowedMetaFields(t)
			};
			Object.keys(_t).forEach((t => {
				n({
					id: t,
					type: _t[t].type
				})
			})), (() => {
				const t = "true" === atfp_global_object.postMetaSync;
				if (window.acf && !t) {
					const t = ["text", "textarea", "wysiwyg"];
					acf.getFields().forEach((e => {
						e.data && t.includes(e.data.type) && n({
							id: e.data.key,
							type: e.data.type
						})
					}))
				}
			})();
			const r = {
				atfp_nonce: atfp_global_object.ajax_nonce,
				action: atfp_global_object.action_block_rules
			};
			await fetch(e, {
				method: "POST",
				headers: {
					"content-type": "application/x-www-form-urlencoded; charset=UTF-8",
					Accept: "application/json"
				},
				body: new URLSearchParams(r)
			}).then((t => t.json())).then((t => {
				a = JSON.parse(t.data.blockRules), (0, l.dispatch)("block-atfp/translate").setBlockRules(a)
			})).catch((t => {
				console.error("Error fetching post content:", t)
			}));
			const o = {
				postId: parseInt(t.postId),
				local: t.targetLang,
				current_local: t.sourceLang,
				atfp_nonce: atfp_global_object.ajax_nonce,
				action: atfp_global_object.action_fetch
			};
			await fetch(e, {
				method: "POST",
				headers: {
					"content-type": "application/x-www-form-urlencoded; charset=UTF-8",
					Accept: "application/json"
				},
				body: new URLSearchParams(o)
			}).then((t => t.json())).then((e => {
				const n = e.data;
				n.content && "" !== n.content.trim() && (n.content = (0, ft.parse)(n.content)), ((t, e) => {
					const a = (0, l.select)("block-atfp/translate").getAllowedMetaFields();
					Object.keys(t).forEach((n => {
						if ("content" === n)((t, e) => {
							Object.values(t).forEach((t => {
								mt(t, e), t.innerBlocks && ht(t.innerBlocks, e)
							}))
						})(t[n], e);
						else if ("metaFields" === n) Object.keys(t[n]).forEach((e => {
							Object.keys(a).includes(e) && "string" === a[e].inputType && "" !== t[n][e][0] && void 0 !== t[n][e][0] && (0, l.dispatch)("block-atfp/translate").metaFieldsSaveSource(e, t[n][e][0])
						})), window.acf && acf.getFields().forEach((e => {
							if (e.data && a[e.data.key]) {
								const a = e.data.name,
									r = acf.getField(e.data.key)?.val();
								t[n] && t[n][a] ? "" !== t[n][a] && void 0 !== t[n][a] && (0, l.dispatch)("block-atfp/translate").metaFieldsSaveSource(e.data.key, t[n][a][0]) : r && "" !== r && void 0 !== r && (0, l.dispatch)("block-atfp/translate").metaFieldsSaveSource(e.data.key, r)
							}
						}));
						else if (["title", "excerpt"].includes(n) && t[n] && "" !== t[n].trim()) {
							const e = `${n}SaveSource`;
							(0, l.dispatch)("block-atfp/translate")[e](t[n])
						}
					}))
				})(n, a), t.refPostData(n), t.updatePostDataFetch(!0)
			})).catch((t => {
				console.error("Error fetching post content:", t)
			}))
		}, bt = (t, e, a, n) => {
			const {
				createBlock: r
			} = wp.blocks, {
				name: o,
				attributes: s
			} = t;
			let l = {
					...s
				},
				i = t,
				c = "";
			return Object.keys(a.AtfpBlockParseRules).includes(t.name) && (i = ((t, e, a) => {
				const {
					select: n
				} = wp.data, r = Object.values(e), o = t.attributes, s = t.clientId, l = (e, r) => {
					if (!0 !== r) gt(e, r, o, l);
					else {
						const r = new Array(...e),
							l = new Array;
						let i = o,
							c = s;
						r.forEach((t => {
							l.push(t), c += `atfp${t}`, i = i[t]
						}));
						let d = i;
						if (d instanceof wp.richText.RichTextData && (d = d.originalHTML), void 0 !== d && "" !== d.trim()) {
							let e = c.replace(/[^\p{L}\p{N}]/gu, ""),
								o = "";
							o = /[\p{L}\p{N}]/gu.test(d) ? n("block-atfp/translate").getTranslatedString("content", d, e, a) : d, t.attributes = ((t, e, a) => {
								const n = {
									...t
								};
								let r = n;
								for (let t = 0; t < e.length - 1; t++) Object.getPrototypeOf(r[e[t]]) === Array.prototype ? r[e[t]] = [...r[e[t]]] : r[e[t]] = {
									...r[e[t]]
								}, r = r[e[t]];
								return r[e[e.length - 1]] instanceof wp.richText.RichTextData ? r[e[e.length - 1]] = a.replace(/(?<!\\)"|\\"/g, "'") : r[e[e.length - 1]] = a, n
							})(t.attributes, r, o)
						}
					}
				};
				return r.forEach((t => {
					Object.keys(t).forEach((e => {
						const a = new Array(e);
						l(a, t[e])
					}))
				})), t
			})(t, a.AtfpBlockParseRules[t.name], n), l = i.attributes), c = r(o, l, e), c
		}, vt = (t, e, a) => {
			let n = t.innerBlocks.map((t => {
				if (t.name) return vt(t, e, a)
			}));
			return bt(t, n, e, a)
		}, wt = t => {
			if (!(0, l.dispatch)("yoast-seo/editor")) return;
			const {
				updateData: e,
				setFocusKeyword: a,
				setBreadcrumbsTitle: n,
				setFacebookPreviewTitle: r,
				setFacebookPreviewDescription: o,
				setTwitterPreviewTitle: s,
				setTwitterPreviewDescription: i
			} = (0, l.dispatch)("yoast-seo/editor"), {
				key: c,
				value: d
			} = t;
			switch (c) {
				case "_yoast_wpseo_focuskw":
					a && a(d);
					break;
				case "_yoast_wpseo_title":
					e && e({
						title: d
					});
					break;
				case "_yoast_wpseo_metadesc":
					e && e({
						description: d
					});
					break;
				case "_yoast_wpseo_bctitle":
					n && n(d);
					break;
				case "_yoast_wpseo_opengraph-title":
					r && r(d);
					break;
				case "_yoast_wpseo_opengraph-description":
					o && o(d);
					break;
				case "_yoast_wpseo_twitter-title":
					s && s(d);
					break;
				case "_yoast_wpseo_twitter-description":
					i && i(d)
			}
		}, Tt = t => {
			if (!(0, l.dispatch)("rank-math")) return;
			const {
				updateKeywords: e,
				updateTitle: a,
				updateDescription: n,
				updateBreadcrumbTitle: r,
				updateFacebookTitle: o,
				updateFacebookDescription: s,
				updateTwitterTitle: i,
				updateTwitterDescription: c
			} = (0, l.dispatch)("rank-math"), {
				key: d,
				value: p
			} = t;
			switch (d) {
				case "rank_math_focus_keyword":
					e && e(p);
					break;
				case "rank_math_title":
					a && a(p);
					break;
				case "rank_math_description":
					n && n(p);
					break;
				case "rank_math_breadcrumb_title":
					r && r(p);
					break;
				case "rank_math_facebook_title":
					o && o(p);
					break;
				case "rank_math_facebook_description":
					s && s(p);
					break;
				case "rank_math_twitter_title":
					i && i(p);
					break;
				case "rank_math_twitter_description":
					c && c(p)
			}
		}, St = t => {
			const {
				editPost: e
			} = (0, l.dispatch)("core/editor"), {
				modalClose: a,
				postContent: n,
				service: r
			} = t;
			(() => {
				const t = {};
				Object.keys(n).filter((t => ["title", "excerpt"].includes(t))).forEach((e => {
					const a = n[e];
					if ("" !== a.trim()) {
						const n = (0, l.select)("block-atfp/translate").getTranslatedString(e, a, null, r);
						t[e] = n
					}
				})), e(t)
			})(), (() => {
				const t = n.metaFields,
					a = (0, l.select)("block-atfp/translate").getAllowedMetaFields();
				Object.keys(t).forEach((n => {
					if (Object.keys(a).includes(n)) {
						const o = (0, l.select)("block-atfp/translate").getTranslatedString("metaFields", t[n][0], n, r);
						n.startsWith("_yoast_wpseo_") && "string" === a[n].inputType ? wt({
							key: n,
							value: o
						}) : n.startsWith("rank_math_") && "string" === a[n].inputType ? Tt({
							key: n,
							value: o
						}) : n.startsWith("_seopress_") && "string" === a[n].inputType ? (async t => {
							const {
								key: e,
								value: a
							} = t, n = e.replace(/^_/, "") + "_meta";
							if (document.querySelector("#" + n)) switch (e) {
								case "_seopress_titles_title":
								case "_seopress_titles_desc":
								case "_seopress_social_fb_title":
								case "_seopress_social_fb_desc":
								case "_seopress_social_twitter_title":
								case "_seopress_social_twitter_desc":
									jQuery(`#${n}`).val(a), jQuery(`#${n}`).trigger("change");
									break;
								case "_seopress_analysis_target_kw":
									window.target_kw && window.target_kw instanceof window.Tagify && window.target_kw.DOM.originalInput.id === n ? window.target_kw.addTags(a) : (jQuery("#" + n).val(a), jQuery("#" + n).trigger("change"))
							}
						})({
							key: n,
							value: o
						}) : e({
							meta: {
								[n]: o
							}
						})
					}
				}))
			})(), (() => {
				const t = (0, l.select)("block-atfp/translate").getAllowedMetaFields(),
					e = n.metaFields;
				window.acf && acf.getFields().forEach((a => {
					if (a.data && a.data.key && Object.keys(t).includes(a.data.key)) {
						const t = acf.getField(a.data.key),
							n = a.data.key,
							o = a.data.name,
							s = t.data.type,
							i = e[o] ? e[o][0] : acf.getField(n)?.val(),
							c = (0, l.select)("block-atfp/translate").getTranslatedString("metaFields", i, n, r);
						if ("wysiwyg" === s && tinymce) {
							const e = t.data.id;
							tinymce.get(e)?.setContent(c)
						} else acf.getField(n)?.val(c)
					}
				}))
			})(), (() => {
				const t = n.content;
				t.length <= 0 || Object.values(t).forEach((t => {
					((t, e) => {
						const {
							select: a
						} = wp.data, n = a("block-atfp/translate").getBlockRules(), {
							dispatch: r
						} = wp.data, {
							name: o
						} = t;
						if (o) {
							let a = t.innerBlocks.map((t => {
								if (t.name) return vt(t, n, e)
							}));
							const o = bt(t, a, n, e);
							r("core/block-editor").insertBlock(o)
						}
					})(t, r)
				}))
			})(), a()
		}, kt = ({
			characterCount: t = 0,
			url: e = ""
		}) => {
			const [a, n] = (0, d.useState)(!1), [r, o] = (0, d.useState)(!1);
			return (0, d.useEffect)((() => {
				const t = document.querySelector('button.atfp-translate-button[name="atfp_meta_box_translate"],input#atfp-translate-button[name="atfp_meta_box_translate"]');
				if (t) return t.addEventListener("click", (() => {
					n(!0), o(!0)
				})), () => {
					t.removeEventListener("click", (() => {}))
				}
			}), []), a ? React.createElement("div", {
				id: "atfp-pro-notice-wrapper",
				className: r ? "atfp-active" : ""
			}, React.createElement("div", {
				className: "atfp-pro-notice"
			}, React.createElement("div", {
				className: "atfp-notice-header"
			}, React.createElement("h2", null, "AI Translation for Polylang Pro Notice"), React.createElement("button", {
				className: "atfp-close-button",
				onClick: () => n(!1),
				"aria-label": "Close Notice"
			}, "✖")), React.createElement("div", {
				className: "atfp-notice-content"
			}, React.createElement("p", null, "You have reached the character limit of ", React.createElement("strong", null, React.createElement(m, {
				number: t
			})), " for your translations. To continue translating beyond this limit, please consider upgrading to AI Translation for Polylang Pro.")), React.createElement("div", {
				className: "atfp-notice-footer"
			}, React.createElement("a", {
				href: e,
				target: "_blank",
				rel: "noopener noreferrer",
				className: "atfp-upgrade-button"
			}, "Upgrade to Pro")))) : null
		}, Et = t => {
			const e = () => {
				const t = document.querySelector(".atfp-body-notice-wrapper");
				if (t) {
					const e = t.offsetHeight + t.offsetTop;
					t.closest(".modal-body").style.setProperty("--atfp-notice-wrapper-height", `${e}px`)
				}
			};
			return (0, d.useEffect)((() => (t.lastNotice && (e(), window.addEventListener("resize", e)), () => {
				window.removeEventListener("resize", e)
			})), [t.lastNotice]), React.createElement("div", {
				className: t.className
			}, t.children)
		}, Ct = async t => {
			const e = atfp_global_object.elementorData && "string" == typeof atfp_global_object.elementorData ? JSON.parse(atfp_global_object.elementorData) : atfp_global_object.elementorData,
				a = atfp_global_object?.metaFields,
				n = {
					widgetsContent: e,
					metaFields: a
				};
			Object.keys(_t).forEach((t => {
				var e;
				e = {
					id: t,
					type: _t[t].type
				}, (0, l.dispatch)("block-atfp/translate").allowedMetaFields(e)
			})), (t => {
				const e = (0, l.select)("block-atfp/translate").getAllowedMetaFields(),
					a = ["content_width", "title_size", "font_size", "margin", "padding", "background", "border", "color", "text_align", "font_weight", "font_family", "line_height", "letter_spacing", "text_transform", "border_radius", "box_shadow", "opacity", "width", "height", "display", "position", "z_index", "visibility", "align", "max_width", "content_typography_typography", "flex_justify_content", "title_color", "description_color", "email_content"],
					n = t => {
						const e = t.id,
							r = t.settings;
						if ("object" == typeof r && null !== r) {
							const t = ["title", "description", "editor", "text", "content", "label"];
							Object.keys(r).forEach((n => {
								if (!a.some((t => n.toLowerCase().includes(t)))) {
									if (t.some((t => n.toLowerCase().includes(t))) && "string" == typeof r[n] && "" !== r[n].trim()) {
										const t = n + "_atfp_" + e;
										(0, l.dispatch)("block-atfp/translate").contentSaveSource(t, r[n])
									}
									Array.isArray(r[n]) && r[n].forEach(((r, o) => {
										"object" == typeof r && null !== r && Object.keys(r).forEach((s => {
											if (!a.includes(s.toLowerCase()) && t.some((t => s.toLowerCase().includes(t))) && "string" == typeof r[s] && "" !== r[s].trim()) {
												const t = `${n}[${o}].${s}_atfp_` + e;
												(0, l.dispatch)("block-atfp/translate").contentSaveSource(t, r[s])
											}
										}))
									}))
								}
							}))
						}
						t.elements && Array.isArray(t.elements) && t.elements.forEach((t => {
							n(t)
						}))
					};
				var r;
				t.widgetsContent.forEach(n), r = t.metaFields, Object.keys(r).forEach((t => {
					Object.keys(e).includes(t) && "string" === e[t].inputType && "" !== r[t][0] && void 0 !== r[t][0] && (0, l.dispatch)("block-atfp/translate").metaFieldsSaveSource(t, r[t][0])
				}))
			})(n), t.refPostData(n), t.updatePostDataFetch(!0)
		}, Rt = (t, e) => {
			for (const a of t) {
				if (a.get("id") === e) return a;
				const t = a.get("elements").models,
					n = Rt(t, e);
				if (n) return n
			}
			return null
		}, Lt = ({
			postContent: t,
			modalClose: e,
			service: a
		}) => {
			const n = elementor.config.document.id,
				r = [],
				o = ["content_width", "title_size", "font_size", "margin", "padding", "background", "border", "color", "text_align", "font_weight", "font_family", "line_height", "letter_spacing", "text_transform", "border_radius", "box_shadow", "opacity", "width", "height", "display", "position", "z_index", "visibility", "align", "max_width", "content_typography_typography", "flex_justify_content", "title_color", "description_color", "email_content"],
				s = t => {
					const e = t.id,
						n = t.settings;
					if ("object" == typeof n && null !== n) {
						const t = ["title", "description", "editor", "text", "content", "label"];
						Object.keys(n).forEach((s => {
							if (!o.some((t => s.toLowerCase().includes(t)))) {
								if (t.some((t => s.toLowerCase().includes(t))) && "string" == typeof n[s] && "" !== n[s].trim()) {
									const t = s + "_atfp_" + e,
										o = (0, l.select)("block-atfp/translate").getTranslatedString("content", n[s], t, a);
									r.push({
										ID: e,
										key: s,
										translatedContent: o
									})
								}
								Array.isArray(n[s]) && n[s].forEach(((n, i) => {
									"object" == typeof n && null !== n && Object.keys(n).forEach((c => {
										if (!o.includes(c.toLowerCase()) && t.some((t => c.toLowerCase().includes(t))) && "string" == typeof n[c] && "" !== n[c].trim()) {
											const t = `${s}[${i}].${c}`,
												o = t + "_atfp_" + e,
												d = (0, l.select)("block-atfp/translate").getTranslatedString("content", n[c], o, a);
											r.push({
												ID: e,
												key: t,
												translatedContent: d
											})
										}
									}))
								}))
							}
						}))
					}
					t.elements && Array.isArray(t.elements) && t.elements.forEach((t => {
						s(t)
					}))
				};
			t.widgetsContent.map((t => s(t))), (t => {
				t.forEach((t => {
					const e = Rt(elementor.elements.models, t.ID);
					if (e) {
						const a = e.get("settings");
						a.get(t.key) && a.set(t.key, t.translatedContent);
						const n = t.key.match(/(.+)\[(\d+)\]\.(.+)/);
						if (n) {
							const [e, r, o, s] = n, l = a.get(r);
							Array.isArray(l.models) && l.models[o] && (l.models[o].attributes[s] = t.translatedContent, a.set(r, l))
						}
					}
				})), $e.internal("document/save/set-is-modified", {
					status: !0
				})
			})(r), ((t, e) => {
				const a = (0, l.select)("block-atfp/translate").getAllowedMetaFields();
				Object.keys(t).forEach((n => {
					if (Object.keys(a).includes(n)) {
						const r = (0, l.select)("block-atfp/translate").getTranslatedString("metaFields", t[n][0], n, e);
						n.startsWith("_yoast_wpseo_") && "string" === a[n].inputType ? wt({
							key: n,
							value: r
						}) : n.startsWith("rank_math_") && "string" === a[n].inputType ? Tt({
							key: n,
							value: r
						}) : n.startsWith("_seopress_") && "string" === a[n].inputType && elementor?.settings?.page?.model?.setExternalChange(n, r)
					}
				}))
			})(t.metaFields, a);
			const i = JSON.stringify(elementor.elements.toJSON());
			e(), fetch(atfp_global_object.ajax_url, {
				method: "POST",
				headers: {
					"content-type": "application/x-www-form-urlencoded; charset=UTF-8",
					Accept: "application/json"
				},
				body: new URLSearchParams({
					action: atfp_global_object.update_elementor_data,
					post_id: n,
					elementor_data: i,
					atfp_nonce: atfp_global_object.ajax_nonce
				})
			}).then((t => t.json())).then((t => {
				if (t.success) {
					const t = document.querySelector('.atfp-translate-button[name="atfp_meta_box_translate"]');
					t && t.setAttribute("title", "Translation process completed successfully."), elementor.reloadPreview()
				} else console.error("Failed to update Elementor data:", t.data)
			})).catch((t => {
				console.error("Error updating Elementor data:", t)
			}))
		}, xt = window.atfp_global_object.editor_type, jt = () => {
			let t = new Array;
			t.push('\x3c!-- The Modal --\x3e<div id="atfp-setting-modal"></div>', '<div id="atfp_strings_model" class="atfp_custom_model"></div>'), t.forEach((t => {
				document.body.insertAdjacentHTML("beforeend", t)
			}))
		}, At = () => {
			const t = [];
			if ("gutenberg" === xt) {
				"true" === atfp_global_object.postMetaSync && t.push({
					className: "atfp-notice atfp-notice-warning",
					message: React.createElement("p", null, "For accurate custom field translations, please disable the Custom Fields synchronization in ", React.createElement("a", {
						href: `${atfp_global_object.admin_url}admin.php?page=mlang_settings`,
						target: "_blank"
					}, "Polylang settings"), ". This may affect linked posts or pages.")
				});
				const e = (0, l.select)("block-atfp/translate").getBlockRules();
				e.AtfpBlockParseRules && 0 !== Object.keys(e.AtfpBlockParseRules).length || t.push({
					className: "atfp-notice atfp-notice-error",
					message: React.createElement("p", null, "No block rules were found. It appears that the block-rules.JSON file could not be fetched, possibly because it is blocked by your server settings. Please check your server configuration to resolve this issue.")
				})
			}
			const e = t.length;
			if (t.length > 0) return t.map(((t, a) => React.createElement(Et, {
				className: t.className,
				key: a,
				lastNotice: a === e - 1
			}, t.message)))
		}, Nt = () => {
			const [t, e] = (0, d.useState)(!1), a = window.atfp_global_object.target_lang, n = window.atfp_global_object.parent_post_id, r = window.atfp_global_object.current_post_id, o = window.atfp_global_object.post_type;
			let s, l, i;
			const c = window.atfp_global_object.source_lang;
			"elementor" === xt ? (i = 'button.atfp-translate-button[name="atfp_meta_box_translate"]', s = Lt, l = Ct) : "gutenberg" === xt && (i = 'input#atfp-translate-button[name="atfp_meta_box_translate"]', s = St, l = yt);
			const [p, u] = (0, d.useState)(!1), [g, m] = (0, d.useState)(!0);
			if ((0, d.useEffect)((() => {
					if (t) {
						const t = document.querySelector(i);
						t && (t.disabled = !0)
					}
				}), [t]), c && "" !== c) return React.createElement(React.Fragment, null, !t && c && "" !== c && React.createElement(D, {
				contentLoading: g,
				updatePostDataFetch: t => {
					u(t), m(!1)
				},
				postDataFetchStatus: p,
				pageTranslate: t => {
					e(t)
				},
				postId: n,
				currentPostId: r,
				targetLang: a,
				postType: o,
				fetchPostData: async t => {
					await l(t);
					const e = wp.data.select("block-atfp/translate").getTranslationEntry();
					let a = 0,
						n = 0;
					e.map((t => {
						const e = t.source ? t.source : "",
							r = e.trim().split(/\s+/).filter((t => /[^\p{L}\p{N}]/.test(t))).length,
							o = e.length;
						a += o, n += r
					})), wp.data.dispatch("block-atfp/translate").translationInfo({
						sourceWordCount: n,
						sourceCharacterCount: a
					})
				},
				translatePost: s,
				translateWrpSelector: i,
				stringModalBodyNotice: At
			}));
			{
				const t = document.querySelector(i);
				t && (t.title = `Parent ${window.atfp_global_object.post_type} may be deleted.`, t.disabled = !0)
			}
		}, Ft = () => {
			const t = jQuery(".MuiButtonGroup-root.MuiButtonGroup-contained").parent(),
				e = jQuery(t).find(".elementor-button.atfp-translate-button");
			if (t.length > 0 && 0 === e.length) {
				const e = jQuery('<button class="elementor-button atfp-translate-button" name="atfp_meta_box_translate">Translate</button>');
				if (t.prepend(e), $e.internal("document/save/set-is-modified", {
						status: !0
					}), !window.atfp_global_object.translation_data || !window.atfp_global_object.translation_data.total_string_count && 0 !== window.atfp_global_object.translation_data.total_string_count) return e.attr("disabled", "disabled"), void e.attr("title", "Translation data not found.");
				const a = parseInt(window.atfp_global_object.translation_data.total_character_count);
				if (a > 5e5) {
					const t = document.createElement("div");
					return t.id = "atfp-pro-notice", document.body.appendChild(t), void o.createRoot(document.getElementById("atfp-pro-notice")).render(React.createElement(kt, {
						characterCount: a,
						url: window.atfp_global_object.pro_version_url || ""
					}))
				}
				if ("" === window.atfp_global_object.elementorData || window.atfp_global_object.elementorData.length < 1 || elementor.elements.length < 1) return e.attr("disabled", "disabled"), void e.attr("title", "Translation is not available because there is no Elementor data.");
				jt(), o.createRoot(document.getElementById("atfp-setting-modal")).render(React.createElement(Nt, null))
			}
		};
	"gutenberg" === xt && window.addEventListener("load", (() => {
		jt();
		const t = jQuery('input#atfp-translate-button[name="atfp_meta_box_translate"]');
		if (!window.atfp_global_object.translation_data || !window.atfp_global_object.translation_data.total_string_count && 0 !== window.atfp_global_object.translation_data.total_string_count) return t.attr("disabled", "disabled"), void t.attr("title", "Translation data not found.");
		const e = parseInt(window.atfp_global_object.translation_data.total_character_count);
		if (e > 5e5) {
			const t = document.createElement("div");
			return t.id = "atfp-pro-notice", document.body.appendChild(t), void o.createRoot(document.getElementById("atfp-pro-notice")).render(React.createElement(kt, {
				characterCount: e,
				url: window.atfp_global_object.pro_version_url || ""
			}))
		}
		const a = window.atfp_global_object.source_lang;
		a && "" !== a && (() => {
			const t = document.getElementById("atfp-setting-modal"),
				e = (() => {
					const t = window.atfp_global_object.post_type,
						e = window.atfp_global_object.target_lang,
						a = atfp_global_object.languageObject[e],
						n = document.createElement("div");
					return n.id = "atfp-modal-open-warning-wrapper", n.innerHTML = `\n    <div class="modal-container" style="display: flex">\n      <div class="modal-content">\n        <p>Would you like to duplicate your original ${t} content and have it automatically translated into ${a}?</p>\n        <div>\n          <button data-value="yes">Yes</button>\n          <button data-value="no">No</button>\n        </div>\n      </div>\n    </div>`, n
				})();
			document.body.insertBefore(e, t)
		})(), o.createRoot(document.getElementById("atfp-setting-modal")).render(React.createElement(Nt, null))
	})), "elementor" === xt && jQuery(window).on("elementor:init", (function() {
		elementor.on("document:loaded", Ft)
	}))
})();
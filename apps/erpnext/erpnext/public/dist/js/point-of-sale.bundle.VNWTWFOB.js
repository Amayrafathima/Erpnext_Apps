(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
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
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // ../erpnext/node_modules/onscan.js/onscan.js
  var require_onscan = __commonJS({
    "../erpnext/node_modules/onscan.js/onscan.js"(exports, module) {
      (function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory()) : global.onScan = factory();
      })(exports, function() {
        var onScan2 = {
          attachTo: function(oDomElement, oOptions) {
            if (oDomElement.scannerDetectionData !== void 0) {
              throw new Error("onScan.js is already initialized for DOM element " + oDomElement);
            }
            var oDefaults = {
              onScan: function(sScanned, iQty) {
              },
              onScanError: function(oDebug) {
              },
              onKeyProcess: function(sChar, oEvent) {
              },
              onKeyDetect: function(iKeyCode, oEvent) {
              },
              onPaste: function(sPasted, oEvent) {
              },
              keyCodeMapper: function(oEvent) {
                return onScan2.decodeKeyEvent(oEvent);
              },
              onScanButtonLongPress: function() {
              },
              scanButtonKeyCode: false,
              scanButtonLongPressTime: 500,
              timeBeforeScanTest: 100,
              avgTimeByChar: 30,
              minLength: 6,
              suffixKeyCodes: [9, 13],
              prefixKeyCodes: [],
              ignoreIfFocusOn: false,
              stopPropagation: false,
              preventDefault: false,
              captureEvents: false,
              reactToKeydown: true,
              reactToPaste: false,
              singleScanQty: 1
            };
            oOptions = this._mergeOptions(oDefaults, oOptions);
            oDomElement.scannerDetectionData = {
              options: oOptions,
              vars: {
                firstCharTime: 0,
                lastCharTime: 0,
                accumulatedString: "",
                testTimer: false,
                longPressTimeStart: 0,
                longPressed: false
              }
            };
            if (oOptions.reactToPaste === true) {
              oDomElement.addEventListener("paste", this._handlePaste, oOptions.captureEvents);
            }
            if (oOptions.scanButtonKeyCode !== false) {
              oDomElement.addEventListener("keyup", this._handleKeyUp, oOptions.captureEvents);
            }
            if (oOptions.reactToKeydown === true || oOptions.scanButtonKeyCode !== false) {
              oDomElement.addEventListener("keydown", this._handleKeyDown, oOptions.captureEvents);
            }
            return this;
          },
          detachFrom: function(oDomElement) {
            if (oDomElement.scannerDetectionData.options.reactToPaste) {
              oDomElement.removeEventListener("paste", this._handlePaste);
            }
            if (oDomElement.scannerDetectionData.options.scanButtonKeyCode !== false) {
              oDomElement.removeEventListener("keyup", this._handleKeyUp);
            }
            oDomElement.removeEventListener("keydown", this._handleKeyDown);
            oDomElement.scannerDetectionData = void 0;
            return;
          },
          getOptions: function(oDomElement) {
            return oDomElement.scannerDetectionData.options;
          },
          setOptions: function(oDomElement, oOptions) {
            switch (oDomElement.scannerDetectionData.options.reactToPaste) {
              case true:
                if (oOptions.reactToPaste === false) {
                  oDomElement.removeEventListener("paste", this._handlePaste);
                }
                break;
              case false:
                if (oOptions.reactToPaste === true) {
                  oDomElement.addEventListener("paste", this._handlePaste);
                }
                break;
            }
            switch (oDomElement.scannerDetectionData.options.scanButtonKeyCode) {
              case false:
                if (oOptions.scanButtonKeyCode !== false) {
                  oDomElement.addEventListener("keyup", this._handleKeyUp);
                }
                break;
              default:
                if (oOptions.scanButtonKeyCode === false) {
                  oDomElement.removeEventListener("keyup", this._handleKeyUp);
                }
                break;
            }
            oDomElement.scannerDetectionData.options = this._mergeOptions(oDomElement.scannerDetectionData.options, oOptions);
            this._reinitialize(oDomElement);
            return this;
          },
          decodeKeyEvent: function(oEvent) {
            var iCode = this._getNormalizedKeyNum(oEvent);
            switch (true) {
              case (iCode >= 48 && iCode <= 90):
              case (iCode >= 106 && iCode <= 111):
                if (oEvent.key !== void 0 && oEvent.key !== "") {
                  return oEvent.key;
                }
                var sDecoded = String.fromCharCode(iCode);
                switch (oEvent.shiftKey) {
                  case false:
                    sDecoded = sDecoded.toLowerCase();
                    break;
                  case true:
                    sDecoded = sDecoded.toUpperCase();
                    break;
                }
                return sDecoded;
              case (iCode >= 96 && iCode <= 105):
                return 0 + (iCode - 96);
            }
            return "";
          },
          simulate: function(oDomElement, mStringOrArray) {
            this._reinitialize(oDomElement);
            if (Array.isArray(mStringOrArray)) {
              mStringOrArray.forEach(function(mKey) {
                var oEventProps = {};
                if ((typeof mKey === "object" || typeof mKey === "function") && mKey !== null) {
                  oEventProps = mKey;
                } else {
                  oEventProps.keyCode = parseInt(mKey);
                }
                var oEvent = new KeyboardEvent("keydown", oEventProps);
                document.dispatchEvent(oEvent);
              });
            } else {
              this._validateScanCode(oDomElement, mStringOrArray);
            }
            return this;
          },
          _reinitialize: function(oDomElement) {
            var oVars = oDomElement.scannerDetectionData.vars;
            oVars.firstCharTime = 0;
            oVars.lastCharTime = 0;
            oVars.accumulatedString = "";
            return;
          },
          _isFocusOnIgnoredElement: function(oDomElement) {
            var ignoreSelectors = oDomElement.scannerDetectionData.options.ignoreIfFocusOn;
            if (!ignoreSelectors) {
              return false;
            }
            var oFocused = document.activeElement;
            if (Array.isArray(ignoreSelectors)) {
              for (var i = 0; i < ignoreSelectors.length; i++) {
                if (oFocused.matches(ignoreSelectors[i]) === true) {
                  return true;
                }
              }
            } else if (oFocused.matches(ignoreSelectors)) {
              return true;
            }
            return false;
          },
          _validateScanCode: function(oDomElement, sScanCode) {
            var oScannerData = oDomElement.scannerDetectionData;
            var oOptions = oScannerData.options;
            var iSingleScanQty = oScannerData.options.singleScanQty;
            var iFirstCharTime = oScannerData.vars.firstCharTime;
            var iLastCharTime = oScannerData.vars.lastCharTime;
            var oScanError = {};
            var oEvent;
            switch (true) {
              case sScanCode.length < oOptions.minLength:
                oScanError = {
                  message: "Receieved code is shorter then minimal length"
                };
                break;
              case iLastCharTime - iFirstCharTime > sScanCode.length * oOptions.avgTimeByChar:
                oScanError = {
                  message: "Receieved code was not entered in time"
                };
                break;
              default:
                oOptions.onScan.call(oDomElement, sScanCode, iSingleScanQty);
                oEvent = new CustomEvent(
                  "scan",
                  {
                    detail: {
                      scanCode: sScanCode,
                      qty: iSingleScanQty
                    }
                  }
                );
                oDomElement.dispatchEvent(oEvent);
                onScan2._reinitialize(oDomElement);
                return true;
            }
            oScanError.scanCode = sScanCode;
            oScanError.scanDuration = iLastCharTime - iFirstCharTime;
            oScanError.avgTimeByChar = oOptions.avgTimeByChar;
            oScanError.minLength = oOptions.minLength;
            oOptions.onScanError.call(oDomElement, oScanError);
            oEvent = new CustomEvent(
              "scanError",
              { detail: oScanError }
            );
            oDomElement.dispatchEvent(oEvent);
            onScan2._reinitialize(oDomElement);
            return false;
          },
          _mergeOptions: function(oDefaults, oOptions) {
            var oExtended = {};
            var prop;
            for (prop in oDefaults) {
              if (Object.prototype.hasOwnProperty.call(oDefaults, prop)) {
                oExtended[prop] = oDefaults[prop];
              }
            }
            for (prop in oOptions) {
              if (Object.prototype.hasOwnProperty.call(oOptions, prop)) {
                oExtended[prop] = oOptions[prop];
              }
            }
            return oExtended;
          },
          _getNormalizedKeyNum: function(e) {
            return e.which || e.keyCode;
          },
          _handleKeyDown: function(e) {
            var iKeyCode = onScan2._getNormalizedKeyNum(e);
            var oOptions = this.scannerDetectionData.options;
            var oVars = this.scannerDetectionData.vars;
            var bScanFinished = false;
            if (oOptions.onKeyDetect.call(this, iKeyCode, e) === false) {
              return;
            }
            if (onScan2._isFocusOnIgnoredElement(this)) {
              return;
            }
            if (oOptions.scanButtonKeyCode !== false && iKeyCode == oOptions.scanButtonKeyCode) {
              if (!oVars.longPressed) {
                oVars.longPressTimer = setTimeout(oOptions.onScanButtonLongPress, oOptions.scanButtonLongPressTime, this);
                oVars.longPressed = true;
              }
              return;
            }
            switch (true) {
              case (oVars.firstCharTime && oOptions.suffixKeyCodes.indexOf(iKeyCode) !== -1):
                e.preventDefault();
                e.stopImmediatePropagation();
                bScanFinished = true;
                break;
              case (!oVars.firstCharTime && oOptions.prefixKeyCodes.indexOf(iKeyCode) !== -1):
                e.preventDefault();
                e.stopImmediatePropagation();
                bScanFinished = false;
                break;
              default:
                var character = oOptions.keyCodeMapper.call(this, e);
                if (character === null) {
                  return;
                }
                oVars.accumulatedString += character;
                if (oOptions.preventDefault) {
                  e.preventDefault();
                }
                if (oOptions.stopPropagation) {
                  e.stopImmediatePropagation();
                }
                bScanFinished = false;
                break;
            }
            if (!oVars.firstCharTime) {
              oVars.firstCharTime = Date.now();
            }
            oVars.lastCharTime = Date.now();
            if (oVars.testTimer) {
              clearTimeout(oVars.testTimer);
            }
            if (bScanFinished) {
              onScan2._validateScanCode(this, oVars.accumulatedString);
              oVars.testTimer = false;
            } else {
              oVars.testTimer = setTimeout(onScan2._validateScanCode, oOptions.timeBeforeScanTest, this, oVars.accumulatedString);
            }
            oOptions.onKeyProcess.call(this, character, e);
            return;
          },
          _handlePaste: function(e) {
            var oOptions = this.scannerDetectionData.options;
            var oVars = this.scannerDetectionData.vars;
            var sPasteString = (event.clipboardData || window.clipboardData).getData("text");
            if (onScan2._isFocusOnIgnoredElement(this)) {
              return;
            }
            e.preventDefault();
            if (oOptions.stopPropagation) {
              e.stopImmediatePropagation();
            }
            oOptions.onPaste.call(this, sPasteString, event);
            oVars.firstCharTime = 0;
            oVars.lastCharTime = 0;
            onScan2._validateScanCode(this, sPasteString);
            return;
          },
          _handleKeyUp: function(e) {
            if (onScan2._isFocusOnIgnoredElement(this)) {
              return;
            }
            var iKeyCode = onScan2._getNormalizedKeyNum(e);
            if (iKeyCode == this.scannerDetectionData.options.scanButtonKeyCode) {
              clearTimeout(this.scannerDetectionData.vars.longPressTimer);
              this.scannerDetectionData.vars.longPressed = false;
            }
            return;
          },
          isScanInProgressFor: function(oDomElement) {
            return oDomElement.scannerDetectionData.vars.firstCharTime > 0;
          },
          isAttachedTo: function(oDomElement) {
            return oDomElement.scannerDetectionData !== void 0;
          }
        };
        return onScan2;
      });
    }
  });

  // ../erpnext/erpnext/selling/page/point_of_sale/pos_item_selector.js
  var import_onscan = __toESM(require_onscan());
  erpnext.PointOfSale.ItemSelector = class {
    constructor({ frm, wrapper, events, pos_profile, settings }) {
      this.wrapper = wrapper;
      this.events = events;
      this.pos_profile = pos_profile;
      this.hide_images = settings.hide_images;
      this.auto_add_item = settings.auto_add_item_to_cart;
      this.inti_component();
    }
    inti_component() {
      this.prepare_dom();
      this.make_search_bar();
      this.load_items_data();
      this.bind_events();
      this.attach_shortcuts();
    }
    prepare_dom() {
      this.wrapper.append(
        `<section class="items-selector">
				<div class="filter-section">
					<div class="label">${__("All Items")}</div>
					<div class="search-field"></div>
					<div class="item-group-field"></div>
				</div>
				<div class="items-container"></div>
			</section>`
      );
      this.$component = this.wrapper.find(".items-selector");
      this.$items_container = this.$component.find(".items-container");
    }
    async load_items_data() {
      if (!this.item_group) {
        const res = await frappe.db.get_value("Item Group", { lft: 1, is_group: 1 }, "name");
        this.parent_item_group = res.message.name;
      }
      if (!this.price_list) {
        const res = await frappe.db.get_value("POS Profile", this.pos_profile, "selling_price_list");
        this.price_list = res.message.selling_price_list;
      }
      this.get_items({}).then(({ message }) => {
        this.render_item_list(message.items);
      });
    }
    get_items({ start = 0, page_length = 40, search_term = "" }) {
      const doc = this.events.get_frm().doc;
      const price_list = doc && doc.selling_price_list || this.price_list;
      let { item_group, pos_profile } = this;
      !item_group && (item_group = this.parent_item_group);
      return frappe.call({
        method: "erpnext.selling.page.point_of_sale.point_of_sale.get_items",
        freeze: true,
        args: { start, page_length, price_list, item_group, search_term, pos_profile }
      });
    }
    render_item_list(items) {
      this.$items_container.html("");
      items.forEach((item) => {
        const item_html = this.get_item_html(item);
        this.$items_container.append(item_html);
      });
    }
    get_item_html(item) {
      const me = this;
      const { item_image, serial_no, batch_no, barcode, actual_qty, uom, price_list_rate } = item;
      const precision2 = flt(price_list_rate, 2) % 1 != 0 ? 2 : 0;
      let indicator_color;
      let qty_to_display = actual_qty;
      if (item.is_stock_item) {
        indicator_color = actual_qty > 10 ? "green" : actual_qty <= 0 ? "red" : "orange";
        if (Math.round(qty_to_display) > 999) {
          qty_to_display = Math.round(qty_to_display) / 1e3;
          qty_to_display = qty_to_display.toFixed(1) + "K";
        }
      } else {
        indicator_color = "";
        qty_to_display = "";
      }
      function get_item_image_html() {
        if (!me.hide_images && item_image) {
          return `<div class="item-qty-pill">
							<span class="indicator-pill whitespace-nowrap ${indicator_color}">${qty_to_display}</span>
						</div>
						<div class="flex items-center justify-center h-32 border-b-grey text-6xl text-grey-100">
							<img
								onerror="cur_pos.item_selector.handle_broken_image(this)"
								class="h-full item-img" src="${item_image}"
								alt="${frappe.get_abbr(item.item_name)}"
							>
						</div>`;
        } else {
          return `<div class="item-qty-pill">
							<span class="indicator-pill whitespace-nowrap ${indicator_color}">${qty_to_display}</span>
						</div>
						<div class="item-display abbr">${frappe.get_abbr(item.item_name)}</div>`;
        }
      }
      return `<div class="item-wrapper"
				data-item-code="${escape(item.item_code)}" data-serial-no="${escape(serial_no)}"
				data-batch-no="${escape(batch_no)}" data-uom="${escape(uom)}"
				data-rate="${escape(price_list_rate || 0)}"
				title="${item.item_name}">

				${get_item_image_html()}

				<div class="item-detail">
					<div class="item-name">
						${frappe.ellipsis(item.item_name, 18)}
					</div>
					<div class="item-rate">${format_currency(price_list_rate, item.currency, precision2) || 0} / ${uom}</div>
				</div>
			</div>`;
    }
    handle_broken_image($img) {
      const item_abbr = $($img).attr("alt");
      $($img).parent().replaceWith(`<div class="item-display abbr">${item_abbr}</div>`);
    }
    make_search_bar() {
      const me = this;
      const doc = me.events.get_frm().doc;
      this.$component.find(".search-field").html("");
      this.$component.find(".item-group-field").html("");
      this.search_field = frappe.ui.form.make_control({
        df: {
          label: __("Search"),
          fieldtype: "Data",
          placeholder: __("Search by item code, serial number or barcode")
        },
        parent: this.$component.find(".search-field"),
        render_input: true
      });
      this.item_group_field = frappe.ui.form.make_control({
        df: {
          label: __("Item Group"),
          fieldtype: "Link",
          options: "Item Group",
          placeholder: __("Select item group"),
          onchange: function() {
            me.item_group = this.value;
            !me.item_group && (me.item_group = me.parent_item_group);
            me.filter_items();
          },
          get_query: function() {
            return {
              query: "erpnext.selling.page.point_of_sale.point_of_sale.item_group_query",
              filters: {
                pos_profile: doc ? doc.pos_profile : ""
              }
            };
          }
        },
        parent: this.$component.find(".item-group-field"),
        render_input: true
      });
      this.search_field.toggle_label(false);
      this.item_group_field.toggle_label(false);
      this.attach_clear_btn();
    }
    attach_clear_btn() {
      this.search_field.$wrapper.find(".control-input").append(
        `<span class="link-btn" style="top: 2px;">
				<a class="btn-open no-decoration" title="${__("Clear")}">
					${frappe.utils.icon("close", "sm")}
				</a>
			</span>`
      );
      this.$clear_search_btn = this.search_field.$wrapper.find(".link-btn");
      this.$clear_search_btn.on("click", "a", () => {
        this.set_search_value("");
        this.search_field.set_focus();
      });
    }
    set_search_value(value) {
      $(this.search_field.$input[0]).val(value).trigger("input");
    }
    bind_events() {
      const me = this;
      window.onScan = import_onscan.default;
      import_onscan.default.decodeKeyEvent = function(oEvent) {
        var iCode = this._getNormalizedKeyNum(oEvent);
        switch (true) {
          case (iCode >= 48 && iCode <= 90):
          case (iCode >= 106 && iCode <= 111):
          case (iCode >= 160 && iCode <= 164 || iCode == 170):
          case (iCode >= 186 && iCode <= 194):
          case (iCode >= 219 && iCode <= 222):
          case iCode == 32:
            if (oEvent.key !== void 0 && oEvent.key !== "") {
              return oEvent.key;
            }
            var sDecoded = String.fromCharCode(iCode);
            switch (oEvent.shiftKey) {
              case false:
                sDecoded = sDecoded.toLowerCase();
                break;
              case true:
                sDecoded = sDecoded.toUpperCase();
                break;
            }
            return sDecoded;
          case (iCode >= 96 && iCode <= 105):
            return 0 + (iCode - 96);
        }
        return "";
      };
      import_onscan.default.attachTo(document, {
        onScan: (sScancode) => {
          if (this.search_field && this.$component.is(":visible")) {
            this.search_field.set_focus();
            this.set_search_value(sScancode);
            this.barcode_scanned = true;
          }
        }
      });
      this.$component.on("click", ".item-wrapper", function() {
        const $item = $(this);
        const item_code = unescape($item.attr("data-item-code"));
        let batch_no = unescape($item.attr("data-batch-no"));
        let serial_no = unescape($item.attr("data-serial-no"));
        let uom = unescape($item.attr("data-uom"));
        let rate = unescape($item.attr("data-rate"));
        batch_no = batch_no === "undefined" ? void 0 : batch_no;
        serial_no = serial_no === "undefined" ? void 0 : serial_no;
        uom = uom === "undefined" ? void 0 : uom;
        rate = rate === "undefined" ? void 0 : rate;
        me.events.item_selected({
          field: "qty",
          value: "+1",
          item: { item_code, batch_no, serial_no, uom, rate }
        });
        me.search_field.set_focus();
      });
      this.search_field.$input.on("input", (e) => {
        clearTimeout(this.last_search);
        this.last_search = setTimeout(() => {
          const search_term = e.target.value;
          this.filter_items({ search_term });
        }, 300);
        this.$clear_search_btn.toggle(
          Boolean(this.search_field.$input.val())
        );
      });
      this.search_field.$input.on("focus", () => {
        this.$clear_search_btn.toggle(
          Boolean(this.search_field.$input.val())
        );
      });
    }
    attach_shortcuts() {
      const ctrl_label = frappe.utils.is_mac() ? "\u2318" : "Ctrl";
      this.search_field.parent.attr("title", `${ctrl_label}+I`);
      frappe.ui.keys.add_shortcut({
        shortcut: "ctrl+i",
        action: () => this.search_field.set_focus(),
        condition: () => this.$component.is(":visible"),
        description: __("Focus on search input"),
        ignore_inputs: true,
        page: cur_page.page.page
      });
      this.item_group_field.parent.attr("title", `${ctrl_label}+G`);
      frappe.ui.keys.add_shortcut({
        shortcut: "ctrl+g",
        action: () => this.item_group_field.set_focus(),
        condition: () => this.$component.is(":visible"),
        description: __("Focus on Item Group filter"),
        ignore_inputs: true,
        page: cur_page.page.page
      });
      frappe.ui.keys.on("enter", () => {
        const selector_is_visible = this.$component.is(":visible");
        if (!selector_is_visible || this.search_field.get_value() === "")
          return;
        if (this.items.length == 1) {
          this.$items_container.find(".item-wrapper").click();
          frappe.utils.play_sound("submit");
          this.set_search_value("");
        } else if (this.items.length == 0 && this.barcode_scanned) {
          frappe.show_alert({
            message: __("No items found. Scan barcode again."),
            indicator: "orange"
          });
          frappe.utils.play_sound("error");
          this.barcode_scanned = false;
          this.set_search_value("");
        }
      });
    }
    filter_items({ search_term = "" } = {}) {
      if (search_term) {
        search_term = search_term.toLowerCase();
        this.search_index = this.search_index || {};
        if (this.search_index[search_term]) {
          const items = this.search_index[search_term];
          this.items = items;
          this.render_item_list(items);
          this.auto_add_item && this.items.length == 1 && this.add_filtered_item_to_cart();
          return;
        }
      }
      this.get_items({ search_term }).then(({ message }) => {
        const { items, serial_no, batch_no, barcode } = message;
        if (search_term && !barcode) {
          this.search_index[search_term] = items;
        }
        this.items = items;
        this.render_item_list(items);
        this.auto_add_item && this.items.length == 1 && this.add_filtered_item_to_cart();
      });
    }
    add_filtered_item_to_cart() {
      this.$items_container.find(".item-wrapper").click();
      this.set_search_value("");
    }
    resize_selector(minimize) {
      minimize ? this.$component.find(".filter-section").css("grid-template-columns", "repeat(1, minmax(0, 1fr))") : this.$component.find(".filter-section").css("grid-template-columns", "repeat(12, minmax(0, 1fr))");
      minimize ? this.$component.find(".search-field").css("margin", "var(--margin-sm) 0px") : this.$component.find(".search-field").css("margin", "0px var(--margin-sm)");
      minimize ? this.$component.css("grid-column", "span 2 / span 2") : this.$component.css("grid-column", "span 6 / span 6");
      minimize ? this.$items_container.css("grid-template-columns", "repeat(1, minmax(0, 1fr))") : this.$items_container.css("grid-template-columns", "repeat(4, minmax(0, 1fr))");
    }
    toggle_component(show) {
      this.set_search_value("");
      this.$component.css("display", show ? "flex" : "none");
    }
  };

  // ../erpnext/erpnext/selling/page/point_of_sale/pos_item_cart.js
  erpnext.PointOfSale.ItemCart = class {
    constructor({ wrapper, events, settings }) {
      this.wrapper = wrapper;
      this.events = events;
      this.customer_info = void 0;
      this.hide_images = settings.hide_images;
      this.allowed_customer_groups = settings.customer_groups;
      this.allow_rate_change = settings.allow_rate_change;
      this.allow_discount_change = settings.allow_discount_change;
      this.init_component();
    }
    init_component() {
      this.prepare_dom();
      this.init_child_components();
      this.bind_events();
      this.attach_shortcuts();
    }
    prepare_dom() {
      this.wrapper.append(
        `<section class="customer-cart-container"></section>`
      );
      this.$component = this.wrapper.find(".customer-cart-container");
    }
    init_child_components() {
      this.init_customer_selector();
      this.init_cart_components();
    }
    init_customer_selector() {
      this.$component.append(
        `<div class="customer-section"></div>`
      );
      this.$customer_section = this.$component.find(".customer-section");
      this.make_customer_selector();
    }
    reset_customer_selector() {
      const frm = this.events.get_frm();
      frm.set_value("customer", "");
      this.make_customer_selector();
      this.customer_field.set_focus();
    }
    init_cart_components() {
      this.$component.append(
        `<div class="cart-container">
				<div class="abs-cart-container">
					<div class="cart-label">${__("Item Cart")}</div>
					<div class="cart-header">
						<div class="name-header">${__("Item")}</div>
						<div class="qty-header">${__("Quantity")}</div>
						<div class="rate-amount-header">${__("Amount")}</div>
					</div>
					<div class="cart-items-section"></div>
					<div class="cart-totals-section"></div>
					<div class="numpad-section"></div>
				</div>
			</div>`
      );
      this.$cart_container = this.$component.find(".cart-container");
      this.make_cart_totals_section();
      this.make_cart_items_section();
      this.make_cart_numpad();
    }
    make_cart_items_section() {
      this.$cart_header = this.$component.find(".cart-header");
      this.$cart_items_wrapper = this.$component.find(".cart-items-section");
      this.make_no_items_placeholder();
    }
    make_no_items_placeholder() {
      this.$cart_header.css("display", "none");
      this.$cart_items_wrapper.html(
        `<div class="no-item-wrapper">${__("No items in cart")}</div>`
      );
    }
    get_discount_icon() {
      return `<svg class="discount-icon" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M19 15.6213C19 15.2235 19.158 14.842 19.4393 14.5607L20.9393 13.0607C21.5251 12.4749 21.5251 11.5251 20.9393 10.9393L19.4393 9.43934C19.158 9.15804 19 8.7765 19 8.37868V6.5C19 5.67157 18.3284 5 17.5 5H15.6213C15.2235 5 14.842 4.84196 14.5607 4.56066L13.0607 3.06066C12.4749 2.47487 11.5251 2.47487 10.9393 3.06066L9.43934 4.56066C9.15804 4.84196 8.7765 5 8.37868 5H6.5C5.67157 5 5 5.67157 5 6.5V8.37868C5 8.7765 4.84196 9.15804 4.56066 9.43934L3.06066 10.9393C2.47487 11.5251 2.47487 12.4749 3.06066 13.0607L4.56066 14.5607C4.84196 14.842 5 15.2235 5 15.6213V17.5C5 18.3284 5.67157 19 6.5 19H8.37868C8.7765 19 9.15804 19.158 9.43934 19.4393L10.9393 20.9393C11.5251 21.5251 12.4749 21.5251 13.0607 20.9393L14.5607 19.4393C14.842 19.158 15.2235 19 15.6213 19H17.5C18.3284 19 19 18.3284 19 17.5V15.6213Z" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
				<path d="M15 9L9 15" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
				<path d="M10.5 9.5C10.5 10.0523 10.0523 10.5 9.5 10.5C8.94772 10.5 8.5 10.0523 8.5 9.5C8.5 8.94772 8.94772 8.5 9.5 8.5C10.0523 8.5 10.5 8.94772 10.5 9.5Z" fill="white" stroke-linecap="round" stroke-linejoin="round"/>
				<path d="M15.5 14.5C15.5 15.0523 15.0523 15.5 14.5 15.5C13.9477 15.5 13.5 15.0523 13.5 14.5C13.5 13.9477 13.9477 13.5 14.5 13.5C15.0523 13.5 15.5 13.9477 15.5 14.5Z" fill="white" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>`;
    }
    make_cart_totals_section() {
      this.$totals_section = this.$component.find(".cart-totals-section");
      this.$totals_section.append(
        `<div class="add-discount-wrapper">
				${this.get_discount_icon()} ${__("Add Discount")}
			</div>
			<div class="item-qty-total-container">
				<div class="item-qty-total-label">${__("Total Items")}</div>
				<div class="item-qty-total-value">0.00</div>
			</div>
			<div class="net-total-container">
				<div class="net-total-label">${__("Net Total")}</div>
				<div class="net-total-value">0.00</div>
			</div>
			<div class="taxes-container"></div>
			<div class="grand-total-container">
				<div>${__("Grand Total")}</div>
				<div>0.00</div>
			</div>
			<div class="checkout-btn">${__("Checkout")}</div>
			<div class="edit-cart-btn">${__("Edit Cart")}</div>`
      );
      this.$add_discount_elem = this.$component.find(".add-discount-wrapper");
    }
    make_cart_numpad() {
      this.$numpad_section = this.$component.find(".numpad-section");
      this.number_pad = new erpnext.PointOfSale.NumberPad({
        wrapper: this.$numpad_section,
        events: {
          numpad_event: this.on_numpad_event.bind(this)
        },
        cols: 5,
        keys: [
          [1, 2, 3, "Quantity"],
          [4, 5, 6, "Discount"],
          [7, 8, 9, "Rate"],
          [".", 0, "Delete", "Remove"]
        ],
        css_classes: [
          ["", "", "", "col-span-2"],
          ["", "", "", "col-span-2"],
          ["", "", "", "col-span-2"],
          ["", "", "", "col-span-2 remove-btn"]
        ],
        fieldnames_map: { "Quantity": "qty", "Discount": "discount_percentage" }
      });
      this.$numpad_section.prepend(
        `<div class="numpad-totals">
			<span class="numpad-item-qty-total"></span>
				<span class="numpad-net-total"></span>
				<span class="numpad-grand-total"></span>
			</div>`
      );
      this.$numpad_section.append(
        `<div class="numpad-btn checkout-btn" data-button-value="checkout">${__("Checkout")}</div>`
      );
    }
    bind_events() {
      const me = this;
      this.$customer_section.on("click", ".reset-customer-btn", function() {
        me.reset_customer_selector();
      });
      this.$customer_section.on("click", ".close-details-btn", function() {
        me.toggle_customer_info(false);
      });
      this.$customer_section.on("click", ".customer-display", function(e) {
        if ($(e.target).closest(".reset-customer-btn").length)
          return;
        const show = me.$cart_container.is(":visible");
        me.toggle_customer_info(show);
      });
      this.$cart_items_wrapper.on("click", ".cart-item-wrapper", function() {
        const $cart_item = $(this);
        me.toggle_item_highlight(this);
        const payment_section_hidden = !me.$totals_section.find(".edit-cart-btn").is(":visible");
        if (!payment_section_hidden) {
          me.$totals_section.find(".edit-cart-btn").click();
        }
        const item_row_name = unescape($cart_item.attr("data-row-name"));
        me.events.cart_item_clicked({ name: item_row_name });
        this.numpad_value = "";
      });
      this.$component.on("click", ".checkout-btn", async function() {
        if ($(this).attr("style").indexOf("--blue-500") == -1)
          return;
        await me.events.checkout();
        me.toggle_checkout_btn(false);
        me.allow_discount_change && me.$add_discount_elem.removeClass("d-none");
      });
      this.$totals_section.on("click", ".edit-cart-btn", () => {
        this.events.edit_cart();
        this.toggle_checkout_btn(true);
      });
      this.$component.on("click", ".add-discount-wrapper", () => {
        const can_edit_discount = this.$add_discount_elem.find(".edit-discount-btn").length;
        if (!this.discount_field || can_edit_discount)
          this.show_discount_control();
      });
      frappe.ui.form.on("POS Invoice", "paid_amount", (frm) => {
        this.update_totals_section(frm);
      });
    }
    attach_shortcuts() {
      for (let row of this.number_pad.keys) {
        for (let btn of row) {
          if (typeof btn !== "string")
            continue;
          let shortcut_key = `ctrl+${frappe.scrub(String(btn))[0]}`;
          if (btn === "Delete")
            shortcut_key = "ctrl+backspace";
          if (btn === "Remove")
            shortcut_key = "shift+ctrl+backspace";
          if (btn === ".")
            shortcut_key = "ctrl+>";
          const fieldname = this.number_pad.fieldnames[btn] ? this.number_pad.fieldnames[btn] : typeof btn === "string" ? frappe.scrub(btn) : btn;
          let shortcut_label = shortcut_key.split("+").map(frappe.utils.to_title_case).join("+");
          shortcut_label = frappe.utils.is_mac() ? shortcut_label.replace("Ctrl", "\u2318") : shortcut_label;
          this.$numpad_section.find(`.numpad-btn[data-button-value="${fieldname}"]`).attr("title", shortcut_label);
          frappe.ui.keys.on(`${shortcut_key}`, () => {
            const cart_is_visible = this.$component.is(":visible");
            if (cart_is_visible && this.item_is_selected && this.$numpad_section.is(":visible")) {
              this.$numpad_section.find(`.numpad-btn[data-button-value="${fieldname}"]`).click();
            }
          });
        }
      }
      const ctrl_label = frappe.utils.is_mac() ? "\u2318" : "Ctrl";
      this.$component.find(".checkout-btn").attr("title", `${ctrl_label}+Enter`);
      frappe.ui.keys.add_shortcut({
        shortcut: "ctrl+enter",
        action: () => this.$component.find(".checkout-btn").click(),
        condition: () => this.$component.is(":visible") && !this.$totals_section.find(".edit-cart-btn").is(":visible"),
        description: __("Checkout Order / Submit Order / New Order"),
        ignore_inputs: true,
        page: cur_page.page.page
      });
      this.$component.find(".edit-cart-btn").attr("title", `${ctrl_label}+E`);
      frappe.ui.keys.on("ctrl+e", () => {
        const item_cart_visible = this.$component.is(":visible");
        const checkout_btn_invisible = !this.$totals_section.find(".checkout-btn").is("visible");
        if (item_cart_visible && checkout_btn_invisible) {
          this.$component.find(".edit-cart-btn").click();
        }
      });
      this.$component.find(".add-discount-wrapper").attr("title", `${ctrl_label}+D`);
      frappe.ui.keys.add_shortcut({
        shortcut: "ctrl+d",
        action: () => this.$component.find(".add-discount-wrapper").click(),
        condition: () => this.$add_discount_elem.is(":visible"),
        description: __("Add Order Discount"),
        ignore_inputs: true,
        page: cur_page.page.page
      });
      frappe.ui.keys.on("escape", () => {
        const item_cart_visible = this.$component.is(":visible");
        if (item_cart_visible && this.discount_field && this.discount_field.parent.is(":visible")) {
          this.discount_field.set_value(0);
        }
      });
    }
    toggle_item_highlight(item) {
      const $cart_item = $(item);
      const item_is_highlighted = $cart_item.attr("style") == "background-color:var(--gray-50);";
      if (!item || item_is_highlighted) {
        this.item_is_selected = false;
        this.$cart_container.find(".cart-item-wrapper").css("background-color", "");
      } else {
        $cart_item.css("background-color", "var(--control-bg)");
        this.item_is_selected = true;
        this.$cart_container.find(".cart-item-wrapper").not(item).css("background-color", "");
      }
    }
    make_customer_selector() {
      this.$customer_section.html(`
			<div class="customer-field"></div>
		`);
      const me = this;
      const query = { query: "erpnext.controllers.queries.customer_query" };
      const allowed_customer_group = this.allowed_customer_groups || [];
      if (allowed_customer_group.length) {
        query.filters = {
          customer_group: ["in", allowed_customer_group]
        };
      }
      this.customer_field = frappe.ui.form.make_control({
        df: {
          label: __("Customer"),
          fieldtype: "Link",
          options: "Customer",
          placeholder: __("Search by customer name, phone, email."),
          get_query: () => query,
          onchange: function() {
            if (this.value) {
              const frm = me.events.get_frm();
              frappe.dom.freeze();
              frappe.model.set_value(frm.doc.doctype, frm.doc.name, "customer", this.value);
              frm.script_manager.trigger("customer", frm.doc.doctype, frm.doc.name).then(() => {
                frappe.run_serially([
                  () => me.fetch_customer_details(this.value),
                  () => me.events.customer_details_updated(me.customer_info),
                  () => me.update_customer_section(),
                  () => me.update_totals_section(),
                  () => frappe.dom.unfreeze()
                ]);
              });
            }
          }
        },
        parent: this.$customer_section.find(".customer-field"),
        render_input: true
      });
      this.customer_field.toggle_label(false);
    }
    fetch_customer_details(customer) {
      if (customer) {
        return new Promise((resolve) => {
          frappe.db.get_value("Customer", customer, ["email_id", "mobile_no", "image", "loyalty_program"]).then(({ message }) => {
            const { loyalty_program } = message;
            if (loyalty_program) {
              frappe.call({
                method: "erpnext.accounts.doctype.loyalty_program.loyalty_program.get_loyalty_program_details_with_points",
                args: { customer, loyalty_program, "silent": true },
                callback: (r) => {
                  const { loyalty_points, conversion_factor } = r.message;
                  if (!r.exc) {
                    this.customer_info = __spreadProps(__spreadValues({}, message), { customer, loyalty_points, conversion_factor });
                    resolve();
                  }
                }
              });
            } else {
              this.customer_info = __spreadProps(__spreadValues({}, message), { customer });
              resolve();
            }
          });
        });
      } else {
        return new Promise((resolve) => {
          this.customer_info = {};
          resolve();
        });
      }
    }
    show_discount_control() {
      this.$add_discount_elem.css({ "padding": "0px", "border": "none" });
      this.$add_discount_elem.html(
        `<div class="add-discount-field"></div>`
      );
      const me = this;
      const frm = me.events.get_frm();
      let discount = frm.doc.additional_discount_percentage;
      this.discount_field = frappe.ui.form.make_control({
        df: {
          label: __("Discount"),
          fieldtype: "Data",
          placeholder: discount ? discount + "%" : __("Enter discount percentage."),
          input_class: "input-xs",
          onchange: function() {
            if (flt(this.value) != 0) {
              frappe.model.set_value(frm.doc.doctype, frm.doc.name, "additional_discount_percentage", flt(this.value));
              me.hide_discount_control(this.value);
            } else {
              frappe.model.set_value(frm.doc.doctype, frm.doc.name, "additional_discount_percentage", 0);
              me.$add_discount_elem.css({
                "border": "1px dashed var(--gray-500)",
                "padding": "var(--padding-sm) var(--padding-md)"
              });
              me.$add_discount_elem.html(`${me.get_discount_icon()} ${__("Add Discount")}`);
              me.discount_field = void 0;
            }
          }
        },
        parent: this.$add_discount_elem.find(".add-discount-field"),
        render_input: true
      });
      this.discount_field.toggle_label(false);
      this.discount_field.set_focus();
    }
    hide_discount_control(discount) {
      if (!discount) {
        this.$add_discount_elem.css({ "padding": "0px", "border": "none" });
        this.$add_discount_elem.html(
          `<div class="add-discount-field"></div>`
        );
      } else {
        this.$add_discount_elem.css({
          "border": "1px dashed var(--dark-green-500)",
          "padding": "var(--padding-sm) var(--padding-md)"
        });
        this.$add_discount_elem.html(
          `<div class="edit-discount-btn">
					${this.get_discount_icon()} ${__("Additional")}&nbsp;${String(discount).bold()}% ${__("discount applied")}
				</div>`
        );
      }
    }
    update_customer_section() {
      const me = this;
      const { customer, email_id = "", mobile_no = "", image } = this.customer_info || {};
      if (customer) {
        this.$customer_section.html(
          `<div class="customer-details">
					<div class="customer-display">
						${this.get_customer_image()}
						<div class="customer-name-desc">
							<div class="customer-name">${customer}</div>
							${get_customer_description()}
						</div>
						<div class="reset-customer-btn" data-customer="${escape(customer)}">
							<svg width="32" height="32" viewBox="0 0 14 14" fill="none">
								<path d="M4.93764 4.93759L7.00003 6.99998M9.06243 9.06238L7.00003 6.99998M7.00003 6.99998L4.93764 9.06238L9.06243 4.93759" stroke="#8D99A6"/>
							</svg>
						</div>
					</div>
				</div>`
        );
      } else {
        this.reset_customer_selector();
      }
      function get_customer_description() {
        if (!email_id && !mobile_no) {
          return `<div class="customer-desc">${__("Click to add email / phone")}</div>`;
        } else if (email_id && !mobile_no) {
          return `<div class="customer-desc">${email_id}</div>`;
        } else if (mobile_no && !email_id) {
          return `<div class="customer-desc">${mobile_no}</div>`;
        } else {
          return `<div class="customer-desc">${email_id} - ${mobile_no}</div>`;
        }
      }
    }
    get_customer_image() {
      const { customer, image } = this.customer_info || {};
      if (image) {
        return `<div class="customer-image"><img src="${image}" alt="${image}""></div>`;
      } else {
        return `<div class="customer-image customer-abbr">${frappe.get_abbr(customer)}</div>`;
      }
    }
    update_totals_section(frm) {
      if (!frm)
        frm = this.events.get_frm();
      this.render_net_total(frm.doc.net_total);
      this.render_total_item_qty(frm.doc.items);
      const grand_total = cint(frappe.sys_defaults.disable_rounded_total) ? frm.doc.grand_total : frm.doc.rounded_total;
      this.render_grand_total(grand_total);
      this.render_taxes(frm.doc.taxes);
    }
    render_net_total(value) {
      const currency = this.events.get_frm().doc.currency;
      this.$totals_section.find(".net-total-container").html(
        `<div>${__("Net Total")}</div><div>${format_currency(value, currency)}</div>`
      );
      this.$numpad_section.find(".numpad-net-total").html(
        `<div>${__("Net Total")}: <span>${format_currency(value, currency)}</span></div>`
      );
    }
    render_total_item_qty(items) {
      var total_item_qty = 0;
      items.map((item) => {
        total_item_qty = total_item_qty + item.qty;
      });
      this.$totals_section.find(".item-qty-total-container").html(
        `<div>${__("Total Quantity")}</div><div>${total_item_qty}</div>`
      );
      this.$numpad_section.find(".numpad-item-qty-total").html(
        `<div>${__("Total Quantity")}: <span>${total_item_qty}</span></div>`
      );
    }
    render_grand_total(value) {
      const currency = this.events.get_frm().doc.currency;
      this.$totals_section.find(".grand-total-container").html(
        `<div>${__("Grand Total")}</div><div>${format_currency(value, currency)}</div>`
      );
      this.$numpad_section.find(".numpad-grand-total").html(
        `<div>${__("Grand Total")}: <span>${format_currency(value, currency)}</span></div>`
      );
    }
    render_taxes(taxes) {
      if (taxes && taxes.length) {
        const currency = this.events.get_frm().doc.currency;
        const taxes_html = taxes.map((t) => {
          if (t.tax_amount_after_discount_amount == 0)
            return;
          const description = /[0-9]+/.test(t.description) ? t.description : t.rate != 0 ? `${t.description} @ ${t.rate}%` : t.description;
          return `<div class="tax-row">
					<div class="tax-label">${description}</div>
					<div class="tax-value">${format_currency(t.tax_amount_after_discount_amount, currency)}</div>
				</div>`;
        }).join("");
        this.$totals_section.find(".taxes-container").css("display", "flex").html(taxes_html);
      } else {
        this.$totals_section.find(".taxes-container").css("display", "none").html("");
      }
    }
    get_cart_item({ name }) {
      const item_selector = `.cart-item-wrapper[data-row-name="${escape(name)}"]`;
      return this.$cart_items_wrapper.find(item_selector);
    }
    get_item_from_frm(item) {
      const doc = this.events.get_frm().doc;
      return doc.items.find((i) => i.name == item.name);
    }
    update_item_html(item, remove_item) {
      const $item = this.get_cart_item(item);
      if (remove_item) {
        $item && $item.next().remove() && $item.remove();
      } else {
        const item_row = this.get_item_from_frm(item);
        this.render_cart_item(item_row, $item);
      }
      const no_of_cart_items = this.$cart_items_wrapper.find(".cart-item-wrapper").length;
      this.highlight_checkout_btn(no_of_cart_items > 0);
      this.update_empty_cart_section(no_of_cart_items);
    }
    render_cart_item(item_data, $item_to_update) {
      const currency = this.events.get_frm().doc.currency;
      const me = this;
      if (!$item_to_update.length) {
        this.$cart_items_wrapper.append(
          `<div class="cart-item-wrapper" data-row-name="${escape(item_data.name)}"></div>
				<div class="seperator"></div>`
        );
        $item_to_update = this.get_cart_item(item_data);
      }
      $item_to_update.html(
        `${get_item_image_html()}
			<div class="item-name-desc">
				<div class="item-name">
					${item_data.item_name}
				</div>
				${get_description_html()}
			</div>
			${get_rate_discount_html()}`
      );
      set_dynamic_rate_header_width();
      function set_dynamic_rate_header_width() {
        const rate_cols = Array.from(me.$cart_items_wrapper.find(".item-rate-amount"));
        me.$cart_header.find(".rate-amount-header").css("width", "");
        me.$cart_items_wrapper.find(".item-rate-amount").css("width", "");
        let max_width = rate_cols.reduce((max_width2, elm) => {
          if ($(elm).width() > max_width2)
            max_width2 = $(elm).width();
          return max_width2;
        }, 0);
        max_width += 1;
        if (max_width == 1)
          max_width = "";
        me.$cart_header.find(".rate-amount-header").css("width", max_width);
        me.$cart_items_wrapper.find(".item-rate-amount").css("width", max_width);
      }
      function get_rate_discount_html() {
        if (item_data.rate && item_data.amount && item_data.rate !== item_data.amount) {
          return `
					<div class="item-qty-rate">
						<div class="item-qty"><span>${item_data.qty || 0} ${item_data.uom}</span></div>
						<div class="item-rate-amount">
							<div class="item-rate">${format_currency(item_data.amount, currency)}</div>
							<div class="item-amount">${format_currency(item_data.rate, currency)}</div>
						</div>
					</div>`;
        } else {
          return `
					<div class="item-qty-rate">
						<div class="item-qty"><span>${item_data.qty || 0} ${item_data.uom}</span></div>
						<div class="item-rate-amount">
							<div class="item-rate">${format_currency(item_data.rate, currency)}</div>
						</div>
					</div>`;
        }
      }
      function get_description_html() {
        if (item_data.description) {
          if (item_data.description.indexOf("<div>") != -1) {
            try {
              item_data.description = $(item_data.description).text();
            } catch (error) {
              item_data.description = item_data.description.replace(/<div>/g, " ").replace(/<\/div>/g, " ").replace(/ +/g, " ");
            }
          }
          item_data.description = frappe.ellipsis(item_data.description, 45);
          return `<div class="item-desc">${item_data.description}</div>`;
        }
        return ``;
      }
      function get_item_image_html() {
        const { image, item_name } = item_data;
        if (!me.hide_images && image) {
          return `
					<div class="item-image">
						<img
							onerror="cur_pos.cart.handle_broken_image(this)"
							src="${image}" alt="${frappe.get_abbr(item_name)}"">
					</div>`;
        } else {
          return `<div class="item-image item-abbr">${frappe.get_abbr(item_name)}</div>`;
        }
      }
    }
    handle_broken_image($img) {
      const item_abbr = $($img).attr("alt");
      $($img).parent().replaceWith(`<div class="item-image item-abbr">${item_abbr}</div>`);
    }
    update_selector_value_in_cart_item(selector, value, item) {
      const $item_to_update = this.get_cart_item(item);
      $item_to_update.attr(`data-${selector}`, escape(value));
    }
    toggle_checkout_btn(show_checkout) {
      if (show_checkout) {
        this.$totals_section.find(".checkout-btn").css("display", "flex");
        this.$totals_section.find(".edit-cart-btn").css("display", "none");
      } else {
        this.$totals_section.find(".checkout-btn").css("display", "none");
        this.$totals_section.find(".edit-cart-btn").css("display", "flex");
      }
    }
    highlight_checkout_btn(toggle) {
      if (toggle) {
        this.$add_discount_elem.css("display", "flex");
        this.$cart_container.find(".checkout-btn").css({
          "background-color": "var(--blue-500)"
        });
      } else {
        this.$add_discount_elem.css("display", "none");
        this.$cart_container.find(".checkout-btn").css({
          "background-color": "var(--blue-200)"
        });
      }
    }
    update_empty_cart_section(no_of_cart_items) {
      const $no_item_element = this.$cart_items_wrapper.find(".no-item-wrapper");
      no_of_cart_items > 0 && $no_item_element && $no_item_element.remove() && this.$cart_header.css("display", "flex");
      no_of_cart_items === 0 && !$no_item_element.length && this.make_no_items_placeholder();
    }
    on_numpad_event($btn) {
      const current_action = $btn.attr("data-button-value");
      const action_is_field_edit = ["qty", "discount_percentage", "rate"].includes(current_action);
      const action_is_allowed = action_is_field_edit ? current_action == "rate" && this.allow_rate_change || current_action == "discount_percentage" && this.allow_discount_change || current_action == "qty" : true;
      const action_is_pressed_twice = this.prev_action === current_action;
      const first_click_event = !this.prev_action;
      const field_to_edit_changed = this.prev_action && this.prev_action != current_action;
      if (action_is_field_edit) {
        if (!action_is_allowed) {
          const label = current_action == "rate" ? "Rate".bold() : "Discount".bold();
          const message = __("Editing {0} is not allowed as per POS Profile settings", [label]);
          frappe.show_alert({
            indicator: "red",
            message
          });
          frappe.utils.play_sound("error");
          return;
        }
        if (first_click_event || field_to_edit_changed) {
          this.prev_action = current_action;
        } else if (action_is_pressed_twice) {
          this.prev_action = void 0;
        }
        this.numpad_value = "";
      } else if (current_action === "checkout") {
        this.prev_action = void 0;
        this.toggle_item_highlight();
        this.events.numpad_event(void 0, current_action);
        return;
      } else if (current_action === "remove") {
        this.prev_action = void 0;
        this.toggle_item_highlight();
        this.events.numpad_event(void 0, current_action);
        return;
      } else {
        this.numpad_value = current_action === "delete" ? this.numpad_value.slice(0, -1) : this.numpad_value + current_action;
        this.numpad_value = this.numpad_value || 0;
      }
      const first_click_event_is_not_field_edit = !action_is_field_edit && first_click_event;
      if (first_click_event_is_not_field_edit) {
        frappe.show_alert({
          indicator: "red",
          message: __("Please select a field to edit from numpad")
        });
        frappe.utils.play_sound("error");
        return;
      }
      if (flt(this.numpad_value) > 100 && this.prev_action === "discount_percentage") {
        frappe.show_alert({
          message: __("Discount cannot be greater than 100%"),
          indicator: "orange"
        });
        frappe.utils.play_sound("error");
        this.numpad_value = current_action;
      }
      this.highlight_numpad_btn($btn, current_action);
      this.events.numpad_event(this.numpad_value, this.prev_action);
    }
    highlight_numpad_btn($btn, curr_action) {
      const curr_action_is_highlighted = $btn.hasClass("highlighted-numpad-btn");
      const curr_action_is_action = ["qty", "discount_percentage", "rate", "done"].includes(curr_action);
      if (!curr_action_is_highlighted) {
        $btn.addClass("highlighted-numpad-btn");
      }
      if (this.prev_action === curr_action && curr_action_is_highlighted) {
        $btn.removeClass("highlighted-numpad-btn");
      }
      if (this.prev_action && this.prev_action !== curr_action && curr_action_is_action) {
        const prev_btn = $(`[data-button-value='${this.prev_action}']`);
        prev_btn.removeClass("highlighted-numpad-btn");
      }
      if (!curr_action_is_action || curr_action === "done") {
        setTimeout(() => {
          $btn.removeClass("highlighted-numpad-btn");
        }, 200);
      }
    }
    toggle_numpad(show) {
      if (show) {
        this.$totals_section.css("display", "none");
        this.$numpad_section.css("display", "flex");
      } else {
        this.$totals_section.css("display", "flex");
        this.$numpad_section.css("display", "none");
      }
      this.reset_numpad();
    }
    reset_numpad() {
      this.numpad_value = "";
      this.prev_action = void 0;
      this.$numpad_section.find(".highlighted-numpad-btn").removeClass("highlighted-numpad-btn");
    }
    toggle_numpad_field_edit(fieldname) {
      if (["qty", "discount_percentage", "rate"].includes(fieldname)) {
        this.$numpad_section.find(`[data-button-value="${fieldname}"]`).click();
      }
    }
    toggle_customer_info(show) {
      if (show) {
        const { customer } = this.customer_info || {};
        this.$cart_container.css("display", "none");
        this.$customer_section.css({
          "height": "100%",
          "padding-top": "0px"
        });
        this.$customer_section.find(".customer-details").html(
          `<div class="header">
					<div class="label">Contact Details</div>
					<div class="close-details-btn">
						<svg width="32" height="32" viewBox="0 0 14 14" fill="none">
							<path d="M4.93764 4.93759L7.00003 6.99998M9.06243 9.06238L7.00003 6.99998M7.00003 6.99998L4.93764 9.06238L9.06243 4.93759" stroke="#8D99A6"/>
						</svg>
					</div>
				</div>
				<div class="customer-display">
					${this.get_customer_image()}
					<div class="customer-name-desc">
						<div class="customer-name">${customer}</div>
						<div class="customer-desc"></div>
					</div>
				</div>
				<div class="customer-fields-container">
					<div class="email_id-field"></div>
					<div class="mobile_no-field"></div>
					<div class="loyalty_program-field"></div>
					<div class="loyalty_points-field"></div>
				</div>
				<div class="transactions-label">Recent Transactions</div>`
        );
        this.$customer_section.append(`<div class="customer-transactions"></div>`);
        this.render_customer_fields();
        this.fetch_customer_transactions();
      } else {
        this.$cart_container.css("display", "flex");
        this.$customer_section.css({
          "height": "",
          "padding-top": ""
        });
        this.update_customer_section();
      }
    }
    render_customer_fields() {
      const $customer_form = this.$customer_section.find(".customer-fields-container");
      const dfs = [{
        fieldname: "email_id",
        label: __("Email"),
        fieldtype: "Data",
        options: "email",
        placeholder: __("Enter customer's email")
      }, {
        fieldname: "mobile_no",
        label: __("Phone Number"),
        fieldtype: "Data",
        placeholder: __("Enter customer's phone number")
      }, {
        fieldname: "loyalty_program",
        label: __("Loyalty Program"),
        fieldtype: "Link",
        options: "Loyalty Program",
        placeholder: __("Select Loyalty Program")
      }, {
        fieldname: "loyalty_points",
        label: __("Loyalty Points"),
        fieldtype: "Data",
        read_only: 1
      }];
      const me = this;
      dfs.forEach((df) => {
        this[`customer_${df.fieldname}_field`] = frappe.ui.form.make_control({
          df: __spreadProps(__spreadValues({}, df), {
            onchange: handle_customer_field_change
          }),
          parent: $customer_form.find(`.${df.fieldname}-field`),
          render_input: true
        });
        this[`customer_${df.fieldname}_field`].set_value(this.customer_info[df.fieldname]);
      });
      function handle_customer_field_change() {
        const current_value = me.customer_info[this.df.fieldname];
        const current_customer = me.customer_info.customer;
        if (this.value && current_value != this.value && this.df.fieldname != "loyalty_points") {
          frappe.call({
            method: "erpnext.selling.page.point_of_sale.point_of_sale.set_customer_info",
            args: {
              fieldname: this.df.fieldname,
              customer: current_customer,
              value: this.value
            },
            callback: (r) => {
              if (!r.exc) {
                me.customer_info[this.df.fieldname] = this.value;
                frappe.show_alert({
                  message: __("Customer contact updated successfully."),
                  indicator: "green"
                });
                frappe.utils.play_sound("submit");
              }
            }
          });
        }
      }
    }
    fetch_customer_transactions() {
      frappe.db.get_list("POS Invoice", {
        filters: { customer: this.customer_info.customer, docstatus: 1 },
        fields: ["name", "grand_total", "status", "posting_date", "posting_time", "currency"],
        limit: 20
      }).then((res) => {
        const transaction_container = this.$customer_section.find(".customer-transactions");
        if (!res.length) {
          transaction_container.html(
            `<div class="no-transactions-placeholder">No recent transactions found</div>`
          );
          return;
        }
        const elapsed_time = moment(res[0].posting_date + " " + res[0].posting_time).fromNow();
        this.$customer_section.find(".customer-desc").html(`Last transacted ${elapsed_time}`);
        res.forEach((invoice) => {
          const posting_datetime = moment(invoice.posting_date + " " + invoice.posting_time).format("Do MMMM, h:mma");
          let indicator_color = {
            "Paid": "green",
            "Draft": "red",
            "Return": "gray",
            "Consolidated": "blue"
          };
          transaction_container.append(
            `<div class="invoice-wrapper" data-invoice-name="${escape(invoice.name)}">
						<div class="invoice-name-date">
							<div class="invoice-name">${invoice.name}</div>
							<div class="invoice-date">${posting_datetime}</div>
						</div>
						<div class="invoice-total-status">
							<div class="invoice-total">
								${format_currency(invoice.grand_total, invoice.currency, 0) || 0}
							</div>
							<div class="invoice-status">
								<span class="indicator-pill whitespace-nowrap ${indicator_color[invoice.status]}">
									<span>${invoice.status}</span>
								</span>
							</div>
						</div>
					</div>
					<div class="seperator"></div>`
          );
        });
      });
    }
    attach_refresh_field_event(frm) {
      $(frm.wrapper).off("refresh-fields");
      $(frm.wrapper).on("refresh-fields", () => {
        if (frm.doc.items.length) {
          this.$cart_items_wrapper.html("");
          frm.doc.items.forEach((item) => {
            this.update_item_html(item);
          });
        }
        this.update_totals_section(frm);
      });
    }
    load_invoice() {
      const frm = this.events.get_frm();
      this.attach_refresh_field_event(frm);
      this.fetch_customer_details(frm.doc.customer).then(() => {
        this.events.customer_details_updated(this.customer_info);
        this.update_customer_section();
      });
      this.$cart_items_wrapper.html("");
      if (frm.doc.items.length) {
        frm.doc.items.forEach((item) => {
          this.update_item_html(item);
        });
      } else {
        this.make_no_items_placeholder();
        this.highlight_checkout_btn(false);
      }
      this.update_totals_section(frm);
      if (frm.doc.docstatus === 1) {
        this.$totals_section.find(".checkout-btn").css("display", "none");
        this.$totals_section.find(".edit-cart-btn").css("display", "none");
      } else {
        this.$totals_section.find(".checkout-btn").css("display", "flex");
        this.$totals_section.find(".edit-cart-btn").css("display", "none");
      }
      this.toggle_component(true);
    }
    toggle_component(show) {
      show ? this.$component.css("display", "flex") : this.$component.css("display", "none");
    }
  };

  // ../erpnext/erpnext/selling/page/point_of_sale/pos_item_details.js
  erpnext.PointOfSale.ItemDetails = class {
    constructor({ wrapper, events, settings }) {
      this.wrapper = wrapper;
      this.events = events;
      this.hide_images = settings.hide_images;
      this.allow_rate_change = settings.allow_rate_change;
      this.allow_discount_change = settings.allow_discount_change;
      this.current_item = {};
      this.init_component();
    }
    init_component() {
      this.prepare_dom();
      this.init_child_components();
      this.bind_events();
      this.attach_shortcuts();
    }
    prepare_dom() {
      this.wrapper.append(
        `<section class="item-details-container"></section>`
      );
      this.$component = this.wrapper.find(".item-details-container");
    }
    init_child_components() {
      this.$component.html(
        `<div class="item-details-header">
				<div class="label">${__("Item Details")}</div>
				<div class="close-btn">
					<svg width="32" height="32" viewBox="0 0 14 14" fill="none">
						<path d="M4.93764 4.93759L7.00003 6.99998M9.06243 9.06238L7.00003 6.99998M7.00003 6.99998L4.93764 9.06238L9.06243 4.93759" stroke="#8D99A6"/>
					</svg>
				</div>
			</div>
			<div class="item-display">
				<div class="item-name-desc-price">
					<div class="item-name"></div>
					<div class="item-desc"></div>
					<div class="item-price"></div>
				</div>
				<div class="item-image"></div>
			</div>
			<div class="discount-section"></div>
			<div class="form-container"></div>
			<div class="serial-batch-container"></div>`
      );
      this.$item_name = this.$component.find(".item-name");
      this.$item_description = this.$component.find(".item-desc");
      this.$item_price = this.$component.find(".item-price");
      this.$item_image = this.$component.find(".item-image");
      this.$form_container = this.$component.find(".form-container");
      this.$dicount_section = this.$component.find(".discount-section");
      this.$serial_batch_container = this.$component.find(".serial-batch-container");
    }
    compare_with_current_item(item) {
      return item && item.name == this.current_item.name;
    }
    async toggle_item_details_section(item) {
      const current_item_changed = !this.compare_with_current_item(item);
      const hide_item_details = !Boolean(item) || !current_item_changed;
      if (!hide_item_details && current_item_changed || hide_item_details) {
        await this.validate_serial_batch_item();
      }
      this.events.toggle_item_selector(!hide_item_details);
      this.toggle_component(!hide_item_details);
      if (item && current_item_changed) {
        this.doctype = item.doctype;
        this.item_meta = frappe.get_meta(this.doctype);
        this.name = item.name;
        this.item_row = item;
        this.currency = this.events.get_frm().doc.currency;
        this.current_item = item;
        this.render_dom(item);
        this.render_discount_dom(item);
        this.render_form(item);
        this.events.highlight_cart_item(item);
      } else {
        this.current_item = {};
      }
    }
    validate_serial_batch_item() {
      const doc = this.events.get_frm().doc;
      const item_row = doc.items.find((item) => item.name === this.name);
      if (!item_row)
        return;
      const serialized = item_row.has_serial_no;
      const batched = item_row.has_batch_no;
      const no_bundle_selected = !item_row.serial_and_batch_bundle;
      if (serialized && no_bundle_selected || batched && no_bundle_selected) {
        frappe.show_alert({
          message: __("Item is removed since no serial / batch no selected."),
          indicator: "orange"
        });
        frappe.utils.play_sound("cancel");
        return this.events.remove_item_from_cart();
      }
    }
    render_dom(item) {
      let { item_name, description, image, price_list_rate } = item;
      function get_description_html() {
        if (description) {
          description = description.indexOf("...") === -1 && description.length > 140 ? description.substr(0, 139) + "..." : description;
          return description;
        }
        return ``;
      }
      this.$item_name.html(item_name);
      this.$item_description.html(get_description_html());
      this.$item_price.html(format_currency(price_list_rate, this.currency));
      if (!this.hide_images && image) {
        this.$item_image.html(
          `<img
					onerror="cur_pos.item_details.handle_broken_image(this)"
					class="h-full" src="${image}"
					alt="${frappe.get_abbr(item_name)}"
					style="object-fit: cover;">`
        );
      } else {
        this.$item_image.html(`<div class="item-abbr">${frappe.get_abbr(item_name)}</div>`);
      }
    }
    handle_broken_image($img) {
      const item_abbr = $($img).attr("alt");
      $($img).replaceWith(`<div class="item-abbr">${item_abbr}</div>`);
    }
    render_discount_dom(item) {
      if (item.discount_percentage) {
        this.$dicount_section.html(
          `<div class="item-rate">${format_currency(item.price_list_rate, this.currency)}</div>
				<div class="item-discount">${item.discount_percentage}% off</div>`
        );
        this.$item_price.html(format_currency(item.rate, this.currency));
      } else {
        this.$dicount_section.html(``);
      }
    }
    render_form(item) {
      const fields_to_display = this.get_form_fields(item);
      this.$form_container.html("");
      fields_to_display.forEach((fieldname, idx) => {
        this.$form_container.append(
          `<div class="${fieldname}-control" data-fieldname="${fieldname}"></div>`
        );
        const field_meta = this.item_meta.fields.find((df) => df.fieldname === fieldname);
        fieldname === "discount_percentage" ? field_meta.label = __("Discount (%)") : "";
        const me = this;
        this[`${fieldname}_control`] = frappe.ui.form.make_control({
          df: __spreadProps(__spreadValues({}, field_meta), {
            onchange: function() {
              me.events.form_updated(me.current_item, fieldname, this.value);
            }
          }),
          parent: this.$form_container.find(`.${fieldname}-control`),
          render_input: true
        });
        this[`${fieldname}_control`].set_value(item[fieldname]);
      });
      this.make_auto_serial_selection_btn(item);
      this.bind_custom_control_change_event();
    }
    get_form_fields(item) {
      const fields = ["qty", "uom", "rate", "conversion_factor", "discount_percentage", "warehouse", "actual_qty", "price_list_rate"];
      if (item.has_serial_no)
        fields.push("serial_no");
      if (item.has_batch_no)
        fields.push("batch_no");
      return fields;
    }
    make_auto_serial_selection_btn(item) {
      if (item.has_serial_no || item.has_batch_no) {
        const label = item.has_serial_no ? __("Select Serial No") : __("Select Batch No");
        this.$form_container.append(
          `<div class="btn btn-sm btn-secondary auto-fetch-btn">${label}</div>`
        );
        this.$form_container.find(".serial_no-control").find("textarea").css("height", "6rem");
      }
    }
    bind_custom_control_change_event() {
      const me = this;
      if (this.rate_control) {
        this.rate_control.df.onchange = function() {
          if (this.value || flt(this.value) === 0) {
            me.events.form_updated(me.current_item, "rate", this.value).then(() => {
              const item_row = frappe.get_doc(me.doctype, me.name);
              const doc = me.events.get_frm().doc;
              me.$item_price.html(format_currency(item_row.rate, doc.currency));
              me.render_discount_dom(item_row);
            });
          }
        };
        this.rate_control.df.read_only = !this.allow_rate_change;
        this.rate_control.refresh();
      }
      if (this.discount_percentage_control && !this.allow_discount_change) {
        this.discount_percentage_control.df.read_only = 1;
        this.discount_percentage_control.refresh();
      }
      if (this.warehouse_control) {
        this.warehouse_control.df.reqd = 1;
        this.warehouse_control.df.onchange = function() {
          if (this.value) {
            me.events.form_updated(me.current_item, "warehouse", this.value).then(() => {
              me.item_stock_map = me.events.get_item_stock_map();
              const available_qty = me.item_stock_map[me.item_row.item_code][this.value][0];
              const is_stock_item = Boolean(me.item_stock_map[me.item_row.item_code][this.value][1]);
              if (available_qty === void 0) {
                me.events.get_available_stock(me.item_row.item_code, this.value).then(() => {
                  me.warehouse_control.set_value(this.value);
                });
              } else if (available_qty === 0 && is_stock_item) {
                me.warehouse_control.set_value("");
                const bold_item_code = me.item_row.item_code.bold();
                const bold_warehouse = this.value.bold();
                frappe.throw(
                  __("Item Code: {0} is not available under warehouse {1}.", [bold_item_code, bold_warehouse])
                );
              }
              me.actual_qty_control.set_value(available_qty);
            });
          }
        };
        this.warehouse_control.df.get_query = () => {
          return {
            filters: { company: this.events.get_frm().doc.company }
          };
        };
        this.warehouse_control.refresh();
      }
      if (this.serial_no_control) {
        this.serial_no_control.df.reqd = 1;
        this.serial_no_control.df.onchange = async function() {
          !me.current_item.batch_no && await me.auto_update_batch_no();
          me.events.form_updated(me.current_item, "serial_no", this.value);
        };
        this.serial_no_control.refresh();
      }
      if (this.batch_no_control) {
        this.batch_no_control.df.reqd = 1;
        this.batch_no_control.df.get_query = () => {
          return {
            query: "erpnext.controllers.queries.get_batch_no",
            filters: {
              item_code: me.item_row.item_code,
              warehouse: me.item_row.warehouse,
              posting_date: me.events.get_frm().doc.posting_date
            }
          };
        };
        this.batch_no_control.refresh();
      }
      if (this.uom_control) {
        this.uom_control.df.onchange = function() {
          me.events.form_updated(me.current_item, "uom", this.value);
          const item_row = frappe.get_doc(me.doctype, me.name);
          me.conversion_factor_control.df.read_only = item_row.stock_uom == this.value;
          me.conversion_factor_control.refresh();
        };
      }
      frappe.model.on("POS Invoice Item", "*", (fieldname, value, item_row) => {
        const field_control = this[`${fieldname}_control`];
        const item_row_is_being_edited = this.compare_with_current_item(item_row);
        if (item_row_is_being_edited && field_control && field_control.get_value() !== value) {
          field_control.set_value(value);
          cur_pos.update_cart_html(item_row);
        }
      });
    }
    async auto_update_batch_no() {
      if (this.serial_no_control && this.batch_no_control) {
        const selected_serial_nos = this.serial_no_control.get_value().split(`
`).filter((s) => s);
        if (!selected_serial_nos.length)
          return;
        const serials_with_batch_no = await frappe.db.get_list("Serial No", {
          filters: { "name": ["in", selected_serial_nos] },
          fields: ["batch_no", "name"]
        });
        const batch_serial_map = serials_with_batch_no.reduce((acc, r) => {
          if (!acc[r.batch_no]) {
            acc[r.batch_no] = [];
          }
          acc[r.batch_no] = [...acc[r.batch_no], r.name];
          return acc;
        }, {});
        const batch_no = Object.keys(batch_serial_map)[0];
        const batch_serial_nos = batch_serial_map[batch_no].join(`
`);
        const serial_nos_belongs_to_other_batch = selected_serial_nos.length !== batch_serial_map[batch_no].length;
        const current_batch_no = this.batch_no_control.get_value();
        current_batch_no != batch_no && await this.batch_no_control.set_value(batch_no);
        if (serial_nos_belongs_to_other_batch) {
          this.serial_no_control.set_value(batch_serial_nos);
          this.qty_control.set_value(batch_serial_map[batch_no].length);
          delete batch_serial_map[batch_no];
          this.events.clone_new_batch_item_in_frm(batch_serial_map, this.current_item);
        }
      }
    }
    bind_events() {
      this.bind_auto_serial_fetch_event();
      this.bind_fields_to_numpad_fields();
      this.$component.on("click", ".close-btn", () => {
        this.events.close_item_details();
      });
    }
    attach_shortcuts() {
      this.wrapper.find(".close-btn").attr("title", "Esc");
      frappe.ui.keys.on("escape", () => {
        const item_details_visible = this.$component.is(":visible");
        if (item_details_visible) {
          this.events.close_item_details();
        }
      });
    }
    bind_fields_to_numpad_fields() {
      const me = this;
      this.$form_container.on("click", ".input-with-feedback", function() {
        const fieldname = $(this).attr("data-fieldname");
        if (this.last_field_focused != fieldname) {
          me.events.item_field_focused(fieldname);
          this.last_field_focused = fieldname;
        }
      });
    }
    bind_auto_serial_fetch_event() {
      this.$form_container.on("click", ".auto-fetch-btn", () => {
        frappe.require("assets/erpnext/js/utils/serial_no_batch_selector.js", () => {
          let frm = this.events.get_frm();
          let item_row = this.item_row;
          item_row.type_of_transaction = "Outward";
          new erpnext.SerialBatchPackageSelector(frm, item_row, (r) => {
            if (r) {
              frappe.model.set_value(item_row.doctype, item_row.name, {
                "serial_and_batch_bundle": r.name,
                "qty": Math.abs(r.total_qty)
              });
            }
          });
        });
      });
    }
    toggle_component(show) {
      show ? this.$component.css("display", "flex") : this.$component.css("display", "none");
    }
  };

  // ../erpnext/erpnext/selling/page/point_of_sale/pos_number_pad.js
  erpnext.PointOfSale.NumberPad = class {
    constructor({ wrapper, events, cols, keys, css_classes, fieldnames_map }) {
      this.wrapper = wrapper;
      this.events = events;
      this.cols = cols;
      this.keys = keys;
      this.css_classes = css_classes || [];
      this.fieldnames = fieldnames_map || {};
      this.init_component();
    }
    init_component() {
      this.prepare_dom();
      this.bind_events();
    }
    prepare_dom() {
      const { cols, keys, css_classes, fieldnames } = this;
      function get_keys() {
        return keys.reduce((a, row, i) => {
          return a + row.reduce((a2, number, j) => {
            const class_to_append = css_classes && css_classes[i] ? css_classes[i][j] : "";
            const fieldname = fieldnames && fieldnames[number] ? fieldnames[number] : typeof number === "string" ? frappe.scrub(number) : number;
            return a2 + `<div class="numpad-btn ${class_to_append}" data-button-value="${fieldname}">${__(number)}</div>`;
          }, "");
        }, "");
      }
      this.wrapper.html(
        `<div class="numpad-container">
				${get_keys()}
			</div>`
      );
    }
    bind_events() {
      const me = this;
      this.wrapper.on("click", ".numpad-btn", function() {
        const $btn = $(this);
        me.events.numpad_event($btn);
      });
    }
  };

  // ../erpnext/erpnext/selling/page/point_of_sale/pos_payment.js
  erpnext.PointOfSale.Payment = class {
    constructor({ events, wrapper }) {
      this.wrapper = wrapper;
      this.events = events;
      this.init_component();
    }
    init_component() {
      this.prepare_dom();
      this.initialize_numpad();
      this.bind_events();
      this.attach_shortcuts();
    }
    prepare_dom() {
      this.wrapper.append(
        `<section class="payment-container">
				<div class="section-label payment-section">${__("Payment Method")}</div>
				<div class="payment-modes"></div>
				<div class="fields-numpad-container">
					<div class="fields-section">
						<div class="section-label">${__("Additional Information")}</div>
						<div class="invoice-fields"></div>
					</div>
					<div class="number-pad"></div>
				</div>
				<div class="totals-section">
					<div class="totals"></div>
				</div>
				<div class="submit-order-btn">${__("Complete Order")}</div>
			</section>`
      );
      this.$component = this.wrapper.find(".payment-container");
      this.$payment_modes = this.$component.find(".payment-modes");
      this.$totals_section = this.$component.find(".totals-section");
      this.$totals = this.$component.find(".totals");
      this.$numpad = this.$component.find(".number-pad");
      this.$invoice_fields_section = this.$component.find(".fields-section");
    }
    make_invoice_fields_control() {
      frappe.db.get_doc("POS Settings", void 0).then((doc) => {
        const fields = doc.invoice_fields;
        if (!fields.length)
          return;
        this.$invoice_fields = this.$invoice_fields_section.find(".invoice-fields");
        this.$invoice_fields.html("");
        const frm = this.events.get_frm();
        fields.forEach((df) => {
          this.$invoice_fields.append(
            `<div class="invoice_detail_field ${df.fieldname}-field" data-fieldname="${df.fieldname}"></div>`
          );
          let df_events = {
            onchange: function() {
              frm.set_value(this.df.fieldname, this.get_value());
            }
          };
          if (df.fieldtype == "Button") {
            df_events = {
              click: function() {
                if (frm.script_manager.has_handlers(df.fieldname, frm.doc.doctype)) {
                  frm.script_manager.trigger(df.fieldname, frm.doc.doctype, frm.doc.docname);
                }
              }
            };
          }
          this[`${df.fieldname}_field`] = frappe.ui.form.make_control({
            df: __spreadValues(__spreadValues({}, df), df_events),
            parent: this.$invoice_fields.find(`.${df.fieldname}-field`),
            render_input: true
          });
          this[`${df.fieldname}_field`].set_value(frm.doc[df.fieldname]);
        });
      });
    }
    initialize_numpad() {
      const me = this;
      this.number_pad = new erpnext.PointOfSale.NumberPad({
        wrapper: this.$numpad,
        events: {
          numpad_event: function($btn) {
            me.on_numpad_clicked($btn);
          }
        },
        cols: 3,
        keys: [
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9],
          [".", 0, "Delete"]
        ]
      });
      this.numpad_value = "";
    }
    on_numpad_clicked($btn) {
      const button_value = $btn.attr("data-button-value");
      highlight_numpad_btn($btn);
      this.numpad_value = button_value === "delete" ? this.numpad_value.slice(0, -1) : this.numpad_value + button_value;
      this.selected_mode.$input.get(0).focus();
      this.selected_mode.set_value(this.numpad_value);
      function highlight_numpad_btn($btn2) {
        $btn2.addClass("shadow-base-inner bg-selected");
        setTimeout(() => {
          $btn2.removeClass("shadow-base-inner bg-selected");
        }, 100);
      }
    }
    bind_events() {
      const me = this;
      this.$payment_modes.on("click", ".mode-of-payment", function(e) {
        const mode_clicked = $(this);
        if (!$(e.target).is(mode_clicked))
          return;
        const scrollLeft = mode_clicked.offset().left - me.$payment_modes.offset().left + me.$payment_modes.scrollLeft();
        me.$payment_modes.animate({ scrollLeft });
        const mode = mode_clicked.attr("data-mode");
        $(`.mode-of-payment-control`).css("display", "none");
        $(`.cash-shortcuts`).css("display", "none");
        me.$payment_modes.find(`.pay-amount`).css("display", "inline");
        me.$payment_modes.find(`.loyalty-amount-name`).css("display", "none");
        $(".mode-of-payment").removeClass("border-primary");
        if (mode_clicked.hasClass("border-primary")) {
          mode_clicked.removeClass("border-primary");
          me.selected_mode = "";
        } else {
          mode_clicked.addClass("border-primary");
          mode_clicked.find(".mode-of-payment-control").css("display", "flex");
          mode_clicked.find(".cash-shortcuts").css("display", "grid");
          me.$payment_modes.find(`.${mode}-amount`).css("display", "none");
          me.$payment_modes.find(`.${mode}-name`).css("display", "inline");
          me.selected_mode = me[`${mode}_control`];
          me.selected_mode && me.selected_mode.$input.get(0).focus();
          me.auto_set_remaining_amount();
        }
      });
      frappe.ui.form.on("POS Invoice", "contact_mobile", (frm) => {
        var _a;
        const contact = frm.doc.contact_mobile;
        const request_button = $((_a = this.request_for_payment_field) == null ? void 0 : _a.$input[0]);
        if (contact) {
          request_button.removeClass("btn-default").addClass("btn-primary");
        } else {
          request_button.removeClass("btn-primary").addClass("btn-default");
        }
      });
      frappe.ui.form.on("POS Invoice", "coupon_code", (frm) => {
        if (frm.doc.coupon_code && !frm.applying_pos_coupon_code) {
          if (!frm.doc.ignore_pricing_rule) {
            frm.applying_pos_coupon_code = true;
            frappe.run_serially([
              () => frm.doc.ignore_pricing_rule = 1,
              () => frm.trigger("ignore_pricing_rule"),
              () => frm.doc.ignore_pricing_rule = 0,
              () => frm.trigger("apply_pricing_rule"),
              () => frm.save(),
              () => this.update_totals_section(frm.doc),
              () => frm.applying_pos_coupon_code = false
            ]);
          } else if (frm.doc.ignore_pricing_rule) {
            frappe.show_alert({
              message: __("Ignore Pricing Rule is enabled. Cannot apply coupon code."),
              indicator: "orange"
            });
          }
        }
      });
      this.setup_listener_for_payments();
      this.$payment_modes.on("click", ".shortcut", function() {
        const value = $(this).attr("data-value");
        me.selected_mode.set_value(value);
      });
      this.$component.on("click", ".submit-order-btn", () => {
        const doc = this.events.get_frm().doc;
        const paid_amount = doc.paid_amount;
        const items = doc.items;
        if (paid_amount == 0 || !items.length) {
          const message = items.length ? __("You cannot submit the order without payment.") : __("You cannot submit empty order.");
          frappe.show_alert({ message, indicator: "orange" });
          frappe.utils.play_sound("error");
          return;
        }
        this.events.submit_invoice();
      });
      frappe.ui.form.on("POS Invoice", "paid_amount", (frm) => {
        this.update_totals_section(frm.doc);
        const is_cash_shortcuts_invisible = !this.$payment_modes.find(".cash-shortcuts").is(":visible");
        this.attach_cash_shortcuts(frm.doc);
        !is_cash_shortcuts_invisible && this.$payment_modes.find(".cash-shortcuts").css("display", "grid");
        this.render_payment_mode_dom();
      });
      frappe.ui.form.on("POS Invoice", "loyalty_amount", (frm) => {
        const formatted_currency = format_currency(frm.doc.loyalty_amount, frm.doc.currency);
        this.$payment_modes.find(`.loyalty-amount-amount`).html(formatted_currency);
      });
      frappe.ui.form.on("Sales Invoice Payment", "amount", (frm, cdt, cdn) => {
        const default_mop = locals[cdt][cdn];
        const mode = default_mop.mode_of_payment.replace(/ +/g, "_").toLowerCase();
        if (this[`${mode}_control`] && this[`${mode}_control`].get_value() != default_mop.amount) {
          this[`${mode}_control`].set_value(default_mop.amount);
        }
      });
    }
    setup_listener_for_payments() {
      frappe.realtime.on("process_phone_payment", (data) => {
        const doc = this.events.get_frm().doc;
        const { response, amount, success, failure_message } = data;
        let message, title;
        if (success) {
          title = __("Payment Received");
          const grand_total = cint(frappe.sys_defaults.disable_rounded_total) ? doc.grand_total : doc.rounded_total;
          if (amount >= grand_total) {
            frappe.dom.unfreeze();
            message = __("Payment of {0} received successfully.", [format_currency(amount, doc.currency, 0)]);
            this.events.submit_invoice();
            cur_frm.reload_doc();
          } else {
            message = __("Payment of {0} received successfully. Waiting for other requests to complete...", [format_currency(amount, doc.currency, 0)]);
          }
        } else if (failure_message) {
          message = failure_message;
          title = __("Payment Failed");
        }
        frappe.msgprint({ "message": message, "title": title });
      });
    }
    auto_set_remaining_amount() {
      const doc = this.events.get_frm().doc;
      const grand_total = cint(frappe.sys_defaults.disable_rounded_total) ? doc.grand_total : doc.rounded_total;
      const remaining_amount = grand_total - doc.paid_amount;
      const current_value = this.selected_mode ? this.selected_mode.get_value() : void 0;
      if (!current_value && remaining_amount > 0 && this.selected_mode) {
        this.selected_mode.set_value(remaining_amount);
      }
    }
    attach_shortcuts() {
      const ctrl_label = frappe.utils.is_mac() ? "\u2318" : "Ctrl";
      this.$component.find(".submit-order-btn").attr("title", `${ctrl_label}+Enter`);
      frappe.ui.keys.on("ctrl+enter", () => {
        const payment_is_visible = this.$component.is(":visible");
        const active_mode = this.$payment_modes.find(".border-primary");
        if (payment_is_visible && active_mode.length) {
          this.$component.find(".submit-order-btn").click();
        }
      });
      frappe.ui.keys.add_shortcut({
        shortcut: "tab",
        action: () => {
          const payment_is_visible = this.$component.is(":visible");
          let active_mode = this.$payment_modes.find(".border-primary");
          active_mode = active_mode.length ? active_mode.attr("data-mode") : void 0;
          if (!active_mode)
            return;
          const mode_of_payments = Array.from(this.$payment_modes.find(".mode-of-payment")).map((m) => $(m).attr("data-mode"));
          const mode_index = mode_of_payments.indexOf(active_mode);
          const next_mode_index = (mode_index + 1) % mode_of_payments.length;
          const next_mode_to_be_clicked = this.$payment_modes.find(`.mode-of-payment[data-mode="${mode_of_payments[next_mode_index]}"]`);
          if (payment_is_visible && mode_index != next_mode_index) {
            next_mode_to_be_clicked.click();
          }
        },
        condition: () => this.$component.is(":visible") && this.$payment_modes.find(".border-primary").length,
        description: __("Switch Between Payment Modes"),
        ignore_inputs: true,
        page: cur_page.page.page
      });
    }
    toggle_numpad() {
    }
    render_payment_section() {
      this.render_payment_mode_dom();
      this.make_invoice_fields_control();
      this.update_totals_section();
      this.focus_on_default_mop();
    }
    after_render() {
      const frm = this.events.get_frm();
      frm.script_manager.trigger("after_payment_render", frm.doc.doctype, frm.doc.docname);
    }
    edit_cart() {
      this.events.toggle_other_sections(false);
      this.toggle_component(false);
    }
    checkout() {
      this.events.toggle_other_sections(true);
      this.toggle_component(true);
      this.render_payment_section();
      this.after_render();
    }
    toggle_remarks_control() {
      if (this.$remarks.find(".frappe-control").length) {
        this.$remarks.html("+ Add Remark");
      } else {
        this.$remarks.html("");
        this[`remark_control`] = frappe.ui.form.make_control({
          df: {
            label: __("Remark"),
            fieldtype: "Data",
            onchange: function() {
            }
          },
          parent: this.$totals_section.find(`.remarks`),
          render_input: true
        });
        this[`remark_control`].set_value("");
      }
    }
    render_payment_mode_dom() {
      const doc = this.events.get_frm().doc;
      const payments = doc.payments;
      const currency = doc.currency;
      this.$payment_modes.html(`${payments.map((p, i) => {
        const mode = p.mode_of_payment.replace(/ +/g, "_").toLowerCase();
        const payment_type = p.type;
        const margin = i % 2 === 0 ? "pr-2" : "pl-2";
        const amount = p.amount > 0 ? format_currency(p.amount, currency) : "";
        return `
					<div class="payment-mode-wrapper">
						<div class="mode-of-payment" data-mode="${mode}" data-payment-type="${payment_type}">
							${p.mode_of_payment}
							<div class="${mode}-amount pay-amount">${amount}</div>
							<div class="${mode} mode-of-payment-control"></div>
						</div>
					</div>
				`;
      }).join("")}`);
      payments.forEach((p) => {
        const mode = p.mode_of_payment.replace(/ +/g, "_").toLowerCase();
        const me = this;
        this[`${mode}_control`] = frappe.ui.form.make_control({
          df: {
            label: p.mode_of_payment,
            fieldtype: "Currency",
            placeholder: __("Enter {0} amount.", [p.mode_of_payment]),
            onchange: function() {
              const current_value = frappe.model.get_value(p.doctype, p.name, "amount");
              if (current_value != this.value) {
                frappe.model.set_value(p.doctype, p.name, "amount", flt(this.value)).then(() => me.update_totals_section());
                const formatted_currency = format_currency(this.value, currency);
                me.$payment_modes.find(`.${mode}-amount`).html(formatted_currency);
              }
            }
          },
          parent: this.$payment_modes.find(`.${mode}.mode-of-payment-control`),
          render_input: true
        });
        this[`${mode}_control`].toggle_label(false);
        this[`${mode}_control`].set_value(p.amount);
      });
      this.render_loyalty_points_payment_mode();
      this.attach_cash_shortcuts(doc);
    }
    focus_on_default_mop() {
      const doc = this.events.get_frm().doc;
      const payments = doc.payments;
      payments.forEach((p) => {
        const mode = p.mode_of_payment.replace(/ +/g, "_").toLowerCase();
        if (p.default) {
          setTimeout(() => {
            this.$payment_modes.find(`.${mode}.mode-of-payment-control`).parent().click();
          }, 500);
        }
      });
    }
    attach_cash_shortcuts(doc) {
      const grand_total = cint(frappe.sys_defaults.disable_rounded_total) ? doc.grand_total : doc.rounded_total;
      const currency = doc.currency;
      const shortcuts = this.get_cash_shortcuts(flt(grand_total));
      this.$payment_modes.find(".cash-shortcuts").remove();
      let shortcuts_html = shortcuts.map((s) => {
        return `<div class="shortcut" data-value="${s}">${format_currency(s, currency, 0)}</div>`;
      }).join("");
      this.$payment_modes.find('[data-payment-type="Cash"]').find(".mode-of-payment-control").after(`<div class="cash-shortcuts">${shortcuts_html}</div>`);
    }
    get_cash_shortcuts(grand_total) {
      let steps = [1, 5, 10];
      const digits = String(Math.round(grand_total)).length;
      steps = steps.map((x) => x * 10 ** (digits - 2));
      const get_nearest = (amount, x) => {
        let nearest_x = Math.ceil(amount / x) * x;
        return nearest_x === amount ? nearest_x + x : nearest_x;
      };
      return steps.reduce((finalArr, x) => {
        let nearest_x = get_nearest(grand_total, x);
        nearest_x = finalArr.indexOf(nearest_x) != -1 ? nearest_x + x : nearest_x;
        return [...finalArr, nearest_x];
      }, []);
    }
    render_loyalty_points_payment_mode() {
      const me = this;
      const doc = this.events.get_frm().doc;
      const { loyalty_program, loyalty_points, conversion_factor } = this.events.get_customer_details();
      this.$payment_modes.find(`.mode-of-payment[data-mode="loyalty-amount"]`).parent().remove();
      if (!loyalty_program)
        return;
      let description, read_only, max_redeemable_amount;
      if (!loyalty_points) {
        description = __("You don't have enough points to redeem.");
        read_only = true;
      } else {
        max_redeemable_amount = flt(flt(loyalty_points) * flt(conversion_factor), precision("loyalty_amount", doc));
        description = __("You can redeem upto {0}.", [format_currency(max_redeemable_amount)]);
        read_only = false;
      }
      const margin = this.$payment_modes.children().length % 2 === 0 ? "pr-2" : "pl-2";
      const amount = doc.loyalty_amount > 0 ? format_currency(doc.loyalty_amount, doc.currency) : "";
      this.$payment_modes.append(
        `<div class="payment-mode-wrapper">
				<div class="mode-of-payment loyalty-card" data-mode="loyalty-amount" data-payment-type="loyalty-amount">
					Redeem Loyalty Points
					<div class="loyalty-amount-amount pay-amount">${amount}</div>
					<div class="loyalty-amount-name">${loyalty_program}</div>
					<div class="loyalty-amount mode-of-payment-control"></div>
				</div>
			</div>`
      );
      this["loyalty-amount_control"] = frappe.ui.form.make_control({
        df: {
          label: __("Redeem Loyalty Points"),
          fieldtype: "Currency",
          placeholder: __("Enter amount to be redeemed."),
          options: "company:currency",
          read_only,
          onchange: async function() {
            if (!loyalty_points)
              return;
            if (this.value > max_redeemable_amount) {
              frappe.show_alert({
                message: __("You cannot redeem more than {0}.", [format_currency(max_redeemable_amount)]),
                indicator: "red"
              });
              frappe.utils.play_sound("submit");
              me["loyalty-amount_control"].set_value(0);
              return;
            }
            const redeem_loyalty_points = this.value > 0 ? 1 : 0;
            await frappe.model.set_value(doc.doctype, doc.name, "redeem_loyalty_points", redeem_loyalty_points);
            frappe.model.set_value(doc.doctype, doc.name, "loyalty_points", parseInt(this.value / conversion_factor));
          },
          description
        },
        parent: this.$payment_modes.find(`.loyalty-amount.mode-of-payment-control`),
        render_input: true
      });
      this["loyalty-amount_control"].toggle_label(false);
    }
    render_add_payment_method_dom() {
      const docstatus = this.events.get_frm().doc.docstatus;
      if (docstatus === 0)
        this.$payment_modes.append(
          `<div class="w-full pr-2">
					<div class="add-mode-of-payment w-half text-grey mb-4 no-select pointer">+ Add Payment Method</div>
				</div>`
        );
    }
    update_totals_section(doc) {
      if (!doc)
        doc = this.events.get_frm().doc;
      const paid_amount = doc.paid_amount;
      const grand_total = cint(frappe.sys_defaults.disable_rounded_total) ? doc.grand_total : doc.rounded_total;
      const remaining = grand_total - doc.paid_amount;
      const change = doc.change_amount || remaining <= 0 ? -1 * remaining : void 0;
      const currency = doc.currency;
      const label = change ? __("Change") : __("To Be Paid");
      this.$totals.html(
        `<div class="col">
				<div class="total-label">${__("Grand Total")}</div>
				<div class="value">${format_currency(grand_total, currency)}</div>
			</div>
			<div class="seperator-y"></div>
			<div class="col">
				<div class="total-label">${__("Paid Amount")}</div>
				<div class="value">${format_currency(paid_amount, currency)}</div>
			</div>
			<div class="seperator-y"></div>
			<div class="col">
				<div class="total-label">${label}</div>
				<div class="value">${format_currency(change || remaining, currency)}</div>
			</div>`
      );
    }
    toggle_component(show) {
      show ? this.$component.css("display", "flex") : this.$component.css("display", "none");
    }
  };

  // ../erpnext/erpnext/selling/page/point_of_sale/pos_past_order_list.js
  erpnext.PointOfSale.PastOrderList = class {
    constructor({ wrapper, events }) {
      this.wrapper = wrapper;
      this.events = events;
      this.init_component();
    }
    init_component() {
      this.prepare_dom();
      this.make_filter_section();
      this.bind_events();
    }
    prepare_dom() {
      this.wrapper.append(
        `<section class="past-order-list">
				<div class="filter-section">
					<div class="label">${__("Recent Orders")}</div>
					<div class="search-field"></div>
					<div class="status-field"></div>
				</div>
				<div class="invoices-container"></div>
			</section>`
      );
      this.$component = this.wrapper.find(".past-order-list");
      this.$invoices_container = this.$component.find(".invoices-container");
    }
    bind_events() {
      this.search_field.$input.on("input", (e) => {
        clearTimeout(this.last_search);
        this.last_search = setTimeout(() => {
          const search_term = e.target.value;
          this.refresh_list(search_term, this.status_field.get_value());
        }, 300);
      });
      const me = this;
      this.$invoices_container.on("click", ".invoice-wrapper", function() {
        const invoice_name = unescape($(this).attr("data-invoice-name"));
        me.events.open_invoice_data(invoice_name);
      });
    }
    make_filter_section() {
      const me = this;
      this.search_field = frappe.ui.form.make_control({
        df: {
          label: __("Search"),
          fieldtype: "Data",
          placeholder: __("Search by invoice id or customer name")
        },
        parent: this.$component.find(".search-field"),
        render_input: true
      });
      this.status_field = frappe.ui.form.make_control({
        df: {
          label: __("Invoice Status"),
          fieldtype: "Select",
          options: `Draft
Paid
Consolidated
Return`,
          placeholder: __("Filter by invoice status"),
          onchange: function() {
            if (me.$component.is(":visible"))
              me.refresh_list();
          }
        },
        parent: this.$component.find(".status-field"),
        render_input: true
      });
      this.search_field.toggle_label(false);
      this.status_field.toggle_label(false);
      this.status_field.set_value("Draft");
    }
    refresh_list() {
      frappe.dom.freeze();
      this.events.reset_summary();
      const search_term = this.search_field.get_value();
      const status = this.status_field.get_value();
      this.$invoices_container.html("");
      return frappe.call({
        method: "erpnext.selling.page.point_of_sale.point_of_sale.get_past_order_list",
        freeze: true,
        args: { search_term, status },
        callback: (response) => {
          frappe.dom.unfreeze();
          response.message.forEach((invoice) => {
            const invoice_html = this.get_invoice_html(invoice);
            this.$invoices_container.append(invoice_html);
          });
        }
      });
    }
    get_invoice_html(invoice) {
      const posting_datetime = moment(invoice.posting_date + " " + invoice.posting_time).format("Do MMMM, h:mma");
      return `<div class="invoice-wrapper" data-invoice-name="${escape(invoice.name)}">
				<div class="invoice-name-date">
					<div class="invoice-name">${invoice.name}</div>
					<div class="invoice-date">
						<svg class="mr-2" width="12" height="12" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
							<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
						</svg>
						${frappe.ellipsis(invoice.customer, 20)}
					</div>
				</div>
				<div class="invoice-total-status">
					<div class="invoice-total">${format_currency(invoice.grand_total, invoice.currency, 0) || 0}</div>
					<div class="invoice-date">${posting_datetime}</div>
				</div>
			</div>
			<div class="seperator"></div>`;
    }
    toggle_component(show) {
      show ? this.$component.css("display", "flex") && this.refresh_list() : this.$component.css("display", "none");
    }
  };

  // ../erpnext/erpnext/selling/page/point_of_sale/pos_past_order_summary.js
  erpnext.PointOfSale.PastOrderSummary = class {
    constructor({ wrapper, events }) {
      this.wrapper = wrapper;
      this.events = events;
      this.init_component();
    }
    init_component() {
      this.prepare_dom();
      this.init_email_print_dialog();
      this.bind_events();
      this.attach_shortcuts();
    }
    prepare_dom() {
      this.wrapper.append(
        `<section class="past-order-summary">
				<div class="no-summary-placeholder">
					${__("Select an invoice to load summary data")}
				</div>
				<div class="invoice-summary-wrapper">
					<div class="abs-container">
						<div class="upper-section"></div>
						<div class="label">${__("Items")}</div>
						<div class="items-container summary-container"></div>
						<div class="label">${__("Totals")}</div>
						<div class="totals-container summary-container"></div>
						<div class="label">${__("Payments")}</div>
						<div class="payments-container summary-container"></div>
						<div class="summary-btns"></div>
					</div>
				</div>
			</section>`
      );
      this.$component = this.wrapper.find(".past-order-summary");
      this.$summary_wrapper = this.$component.find(".invoice-summary-wrapper");
      this.$summary_container = this.$component.find(".abs-container");
      this.$upper_section = this.$summary_container.find(".upper-section");
      this.$items_container = this.$summary_container.find(".items-container");
      this.$totals_container = this.$summary_container.find(".totals-container");
      this.$payment_container = this.$summary_container.find(".payments-container");
      this.$summary_btns = this.$summary_container.find(".summary-btns");
    }
    init_email_print_dialog() {
      const email_dialog = new frappe.ui.Dialog({
        title: "Email Receipt",
        fields: [
          { fieldname: "email_id", fieldtype: "Data", options: "Email", label: "Email ID", reqd: 1 },
          { fieldname: "content", fieldtype: "Small Text", label: "Message (if any)" }
        ],
        primary_action: () => {
          this.send_email();
        },
        primary_action_label: __("Send")
      });
      this.email_dialog = email_dialog;
      const print_dialog = new frappe.ui.Dialog({
        title: "Print Receipt",
        fields: [
          { fieldname: "print", fieldtype: "Data", label: "Print Preview" }
        ],
        primary_action: () => {
          this.print_receipt();
        },
        primary_action_label: __("Print")
      });
      this.print_dialog = print_dialog;
    }
    get_upper_section_html(doc) {
      const { status } = doc;
      let indicator_color = "";
      in_list(["Paid", "Consolidated"], status) && (indicator_color = "green");
      status === "Draft" && (indicator_color = "red");
      status === "Return" && (indicator_color = "grey");
      return `<div class="left-section">
					<div class="customer-name">${doc.customer}</div>
					<div class="customer-email">${this.customer_email}</div>
					<div class="cashier">${__("Sold by")}: ${doc.owner}</div>
				</div>
				<div class="right-section">
					<div class="paid-amount">${format_currency(doc.paid_amount, doc.currency)}</div>
					<div class="invoice-name">${doc.name}</div>
					<span class="indicator-pill whitespace-nowrap ${indicator_color}"><span>${doc.status}</span></span>
				</div>`;
    }
    get_item_html(doc, item_data) {
      return `<div class="item-row-wrapper">
					<div class="item-name">${item_data.item_name}</div>
					<div class="item-qty">${item_data.qty || 0} ${item_data.uom}</div>
					<div class="item-rate-disc">${get_rate_discount_html()}</div>
				</div>`;
      function get_rate_discount_html() {
        if (item_data.rate && item_data.price_list_rate && item_data.rate !== item_data.price_list_rate) {
          return `<span class="item-disc">(${item_data.discount_percentage}% off)</span>
						<div class="item-rate">${format_currency(item_data.rate, doc.currency)}</div>`;
        } else {
          return `<div class="item-rate">${format_currency(item_data.price_list_rate || item_data.rate, doc.currency)}</div>`;
        }
      }
    }
    get_discount_html(doc) {
      if (doc.discount_amount) {
        return `<div class="summary-row-wrapper">
						<div>Discount (${doc.additional_discount_percentage} %)</div>
						<div>${format_currency(doc.discount_amount, doc.currency)}</div>
					</div>`;
      } else {
        return ``;
      }
    }
    get_net_total_html(doc) {
      return `<div class="summary-row-wrapper">
					<div>${__("Net Total")}</div>
					<div>${format_currency(doc.net_total, doc.currency)}</div>
				</div>`;
    }
    get_taxes_html(doc) {
      if (!doc.taxes.length)
        return "";
      let taxes_html = doc.taxes.map((t) => {
        const description = /[0-9]+/.test(t.description) ? t.description : t.rate != 0 ? `${t.description} @ ${t.rate}%` : t.description;
        return `
				<div class="tax-row">
					<div class="tax-label">${description}</div>
					<div class="tax-value">${format_currency(t.tax_amount_after_discount_amount, doc.currency)}</div>
				</div>
			`;
      }).join("");
      return `<div class="taxes-wrapper">${taxes_html}</div>`;
    }
    get_grand_total_html(doc) {
      return `<div class="summary-row-wrapper grand-total">
					<div>${__("Grand Total")}</div>
					<div>${format_currency(doc.grand_total, doc.currency)}</div>
				</div>`;
    }
    get_payment_html(doc, payment) {
      return `<div class="summary-row-wrapper payments">
					<div>${__(payment.mode_of_payment)}</div>
					<div>${format_currency(payment.amount, doc.currency)}</div>
				</div>`;
    }
    bind_events() {
      this.$summary_container.on("click", ".return-btn", () => {
        this.events.process_return(this.doc.name);
        this.toggle_component(false);
        this.$component.find(".no-summary-placeholder").css("display", "flex");
        this.$summary_wrapper.css("display", "none");
      });
      this.$summary_container.on("click", ".edit-btn", () => {
        this.events.edit_order(this.doc.name);
        this.toggle_component(false);
        this.$component.find(".no-summary-placeholder").css("display", "flex");
        this.$summary_wrapper.css("display", "none");
      });
      this.$summary_container.on("click", ".delete-btn", () => {
        this.events.delete_order(this.doc.name);
        this.show_summary_placeholder();
      });
      this.$summary_container.on("click", ".delete-btn", () => {
        this.events.delete_order(this.doc.name);
        this.show_summary_placeholder();
      });
      this.$summary_container.on("click", ".new-btn", () => {
        this.events.new_order();
        this.toggle_component(false);
        this.$component.find(".no-summary-placeholder").css("display", "flex");
        this.$summary_wrapper.css("display", "none");
      });
      this.$summary_container.on("click", ".email-btn", () => {
        this.email_dialog.fields_dict.email_id.set_value(this.customer_email);
        this.email_dialog.show();
      });
      this.$summary_container.on("click", ".print-btn", () => {
        this.print_receipt();
      });
    }
    print_receipt() {
      const frm = this.events.get_frm();
      frappe.utils.print(
        this.doc.doctype,
        this.doc.name,
        frm.pos_print_format,
        this.doc.letter_head,
        this.doc.language || frappe.boot.lang
      );
    }
    attach_shortcuts() {
      const ctrl_label = frappe.utils.is_mac() ? "\u2318" : "Ctrl";
      this.$summary_container.find(".print-btn").attr("title", `${ctrl_label}+P`);
      frappe.ui.keys.add_shortcut({
        shortcut: "ctrl+p",
        action: () => this.$summary_container.find(".print-btn").click(),
        condition: () => this.$component.is(":visible") && this.$summary_container.find(".print-btn").is(":visible"),
        description: __("Print Receipt"),
        page: cur_page.page.page
      });
      this.$summary_container.find(".new-btn").attr("title", `${ctrl_label}+Enter`);
      frappe.ui.keys.on("ctrl+enter", () => {
        const summary_is_visible = this.$component.is(":visible");
        if (summary_is_visible && this.$summary_container.find(".new-btn").is(":visible")) {
          this.$summary_container.find(".new-btn").click();
        }
      });
      this.$summary_container.find(".edit-btn").attr("title", `${ctrl_label}+E`);
      frappe.ui.keys.add_shortcut({
        shortcut: "ctrl+e",
        action: () => this.$summary_container.find(".edit-btn").click(),
        condition: () => this.$component.is(":visible") && this.$summary_container.find(".edit-btn").is(":visible"),
        description: __("Edit Receipt"),
        page: cur_page.page.page
      });
    }
    send_email() {
      const frm = this.events.get_frm();
      const recipients = this.email_dialog.get_values().email_id;
      const content = this.email_dialog.get_values().content;
      const doc = this.doc || frm.doc;
      const print_format = frm.pos_print_format;
      frappe.call({
        method: "frappe.core.doctype.communication.email.make",
        args: {
          recipients,
          subject: __(frm.meta.name) + ": " + doc.name,
          content: content ? content : __(frm.meta.name) + ": " + doc.name,
          doctype: doc.doctype,
          name: doc.name,
          send_email: 1,
          print_format,
          sender_full_name: frappe.user.full_name(),
          _lang: doc.language
        },
        callback: (r) => {
          if (!r.exc) {
            frappe.utils.play_sound("email");
            if (r.message["emails_not_sent_to"]) {
              frappe.msgprint(__(
                "Email not sent to {0} (unsubscribed / disabled)",
                [frappe.utils.escape_html(r.message["emails_not_sent_to"])]
              ));
            } else {
              frappe.show_alert({
                message: __("Email sent successfully."),
                indicator: "green"
              });
            }
            this.email_dialog.hide();
          } else {
            frappe.msgprint(__("There were errors while sending email. Please try again."));
          }
        }
      });
    }
    add_summary_btns(map) {
      this.$summary_btns.html("");
      map.forEach((m) => {
        if (m.condition) {
          m.visible_btns.forEach((b) => {
            const class_name = b.split(" ")[0].toLowerCase();
            const btn = __(b);
            this.$summary_btns.append(
              `<div class="summary-btn btn btn-default ${class_name}-btn">${btn}</div>`
            );
          });
        }
      });
      this.$summary_btns.children().last().removeClass("mr-4");
    }
    toggle_summary_placeholder(show) {
      if (show) {
        this.$summary_wrapper.css("display", "none");
        this.$component.find(".no-summary-placeholder").css("display", "flex");
      } else {
        this.$summary_wrapper.css("display", "flex");
        this.$component.find(".no-summary-placeholder").css("display", "none");
      }
    }
    get_condition_btn_map(after_submission) {
      if (after_submission)
        return [{ condition: true, visible_btns: ["Print Receipt", "Email Receipt", "New Order"] }];
      return [
        { condition: this.doc.docstatus === 0, visible_btns: ["Edit Order", "Delete Order"] },
        { condition: !this.doc.is_return && this.doc.docstatus === 1, visible_btns: ["Print Receipt", "Email Receipt", "Return"] },
        { condition: this.doc.is_return && this.doc.docstatus === 1, visible_btns: ["Print Receipt", "Email Receipt"] }
      ];
    }
    load_summary_of(doc, after_submission = false) {
      after_submission ? this.$component.css("grid-column", "span 10 / span 10") : this.$component.css("grid-column", "span 6 / span 6");
      this.toggle_summary_placeholder(false);
      this.doc = doc;
      this.attach_document_info(doc);
      this.attach_items_info(doc);
      this.attach_totals_info(doc);
      this.attach_payments_info(doc);
      const condition_btns_map = this.get_condition_btn_map(after_submission);
      this.add_summary_btns(condition_btns_map);
    }
    attach_document_info(doc) {
      frappe.db.get_value("Customer", this.doc.customer, "email_id").then(({ message }) => {
        this.customer_email = message.email_id || "";
        const upper_section_dom = this.get_upper_section_html(doc);
        this.$upper_section.html(upper_section_dom);
      });
    }
    attach_items_info(doc) {
      this.$items_container.html("");
      doc.items.forEach((item) => {
        const item_dom = this.get_item_html(doc, item);
        this.$items_container.append(item_dom);
        this.set_dynamic_rate_header_width();
      });
    }
    set_dynamic_rate_header_width() {
      const rate_cols = Array.from(this.$items_container.find(".item-rate-disc"));
      this.$items_container.find(".item-rate-disc").css("width", "");
      let max_width = rate_cols.reduce((max_width2, elm) => {
        if ($(elm).width() > max_width2)
          max_width2 = $(elm).width();
        return max_width2;
      }, 0);
      max_width += 1;
      if (max_width == 1)
        max_width = "";
      this.$items_container.find(".item-rate-disc").css("width", max_width);
    }
    attach_payments_info(doc) {
      this.$payment_container.html("");
      doc.payments.forEach((p) => {
        if (p.amount) {
          const payment_dom = this.get_payment_html(doc, p);
          this.$payment_container.append(payment_dom);
        }
      });
      if (doc.redeem_loyalty_points && doc.loyalty_amount) {
        const payment_dom = this.get_payment_html(doc, {
          mode_of_payment: "Loyalty Points",
          amount: doc.loyalty_amount
        });
        this.$payment_container.append(payment_dom);
      }
    }
    attach_totals_info(doc) {
      this.$totals_container.html("");
      const net_total_dom = this.get_net_total_html(doc);
      const taxes_dom = this.get_taxes_html(doc);
      const discount_dom = this.get_discount_html(doc);
      const grand_total_dom = this.get_grand_total_html(doc);
      this.$totals_container.append(net_total_dom);
      this.$totals_container.append(taxes_dom);
      this.$totals_container.append(discount_dom);
      this.$totals_container.append(grand_total_dom);
    }
    toggle_component(show) {
      show ? this.$component.css("display", "flex") : this.$component.css("display", "none");
    }
  };

  // ../erpnext/erpnext/selling/page/point_of_sale/pos_controller.js
  erpnext.PointOfSale.Controller = class {
    constructor(wrapper) {
      this.wrapper = $(wrapper).find(".layout-main-section");
      this.page = wrapper.page;
      this.check_opening_entry();
    }
    fetch_opening_entry() {
      return frappe.call("erpnext.selling.page.point_of_sale.point_of_sale.check_opening_entry", { "user": frappe.session.user });
    }
    check_opening_entry() {
      this.fetch_opening_entry().then((r) => {
        if (r.message.length) {
          this.prepare_app_defaults(r.message[0]);
        } else {
          this.create_opening_voucher();
        }
      });
    }
    create_opening_voucher() {
      const me = this;
      const table_fields = [
        {
          fieldname: "mode_of_payment",
          fieldtype: "Link",
          in_list_view: 1,
          label: "Mode of Payment",
          options: "Mode of Payment",
          reqd: 1
        },
        {
          fieldname: "opening_amount",
          fieldtype: "Currency",
          in_list_view: 1,
          label: "Opening Amount",
          options: "company:company_currency",
          change: function() {
            dialog.fields_dict.balance_details.df.data.some((d) => {
              if (d.idx == this.doc.idx) {
                d.opening_amount = this.value;
                dialog.fields_dict.balance_details.grid.refresh();
                return true;
              }
            });
          }
        }
      ];
      const fetch_pos_payment_methods = () => {
        const pos_profile = dialog.fields_dict.pos_profile.get_value();
        if (!pos_profile)
          return;
        frappe.db.get_doc("POS Profile", pos_profile).then(({ payments }) => {
          dialog.fields_dict.balance_details.df.data = [];
          payments.forEach((pay) => {
            const { mode_of_payment } = pay;
            dialog.fields_dict.balance_details.df.data.push({ mode_of_payment, opening_amount: "0" });
          });
          dialog.fields_dict.balance_details.grid.refresh();
        });
      };
      const dialog = new frappe.ui.Dialog({
        title: __("Create POS Opening Entry"),
        static: true,
        fields: [
          {
            fieldtype: "Link",
            label: __("Company"),
            default: frappe.defaults.get_default("company"),
            options: "Company",
            fieldname: "company",
            reqd: 1
          },
          {
            fieldtype: "Link",
            label: __("POS Profile"),
            options: "POS Profile",
            fieldname: "pos_profile",
            reqd: 1,
            get_query: () => pos_profile_query(),
            onchange: () => fetch_pos_payment_methods()
          },
          {
            fieldname: "balance_details",
            fieldtype: "Table",
            label: "Opening Balance Details",
            cannot_add_rows: false,
            in_place_edit: true,
            reqd: 1,
            data: [],
            fields: table_fields
          }
        ],
        primary_action: async function({ company, pos_profile, balance_details }) {
          if (!balance_details.length) {
            frappe.show_alert({
              message: __("Please add Mode of payments and opening balance details."),
              indicator: "red"
            });
            return frappe.utils.play_sound("error");
          }
          balance_details = balance_details.filter((d) => d.mode_of_payment);
          const method = "erpnext.selling.page.point_of_sale.point_of_sale.create_opening_voucher";
          const res = await frappe.call({ method, args: { pos_profile, company, balance_details }, freeze: true });
          !res.exc && me.prepare_app_defaults(res.message);
          dialog.hide();
        },
        primary_action_label: __("Submit")
      });
      dialog.show();
      const pos_profile_query = () => {
        return {
          query: "erpnext.accounts.doctype.pos_profile.pos_profile.pos_profile_query",
          filters: { company: dialog.fields_dict.company.get_value() }
        };
      };
    }
    async prepare_app_defaults(data) {
      this.pos_opening = data.name;
      this.company = data.company;
      this.pos_profile = data.pos_profile;
      this.pos_opening_time = data.period_start_date;
      this.item_stock_map = {};
      this.settings = {};
      frappe.db.get_value("Stock Settings", void 0, "allow_negative_stock").then(({ message }) => {
        this.allow_negative_stock = flt(message.allow_negative_stock) || false;
      });
      frappe.call({
        method: "erpnext.selling.page.point_of_sale.point_of_sale.get_pos_profile_data",
        args: { "pos_profile": this.pos_profile },
        callback: (res) => {
          const profile = res.message;
          Object.assign(this.settings, profile);
          this.settings.customer_groups = profile.customer_groups.map((group) => group.name);
          this.make_app();
        }
      });
    }
    set_opening_entry_status() {
      this.page.set_title_sub(
        `<span class="indicator orange">
				<a class="text-muted" href="#Form/POS%20Opening%20Entry/${this.pos_opening}">
					Opened at ${moment(this.pos_opening_time).format("Do MMMM, h:mma")}
				</a>
			</span>`
      );
    }
    make_app() {
      this.prepare_dom();
      this.prepare_components();
      this.prepare_menu();
      this.make_new_invoice();
    }
    prepare_dom() {
      this.wrapper.append(
        `<div class="point-of-sale-app"></div>`
      );
      this.$components_wrapper = this.wrapper.find(".point-of-sale-app");
    }
    prepare_components() {
      this.init_item_selector();
      this.init_item_details();
      this.init_item_cart();
      this.init_payments();
      this.init_recent_order_list();
      this.init_order_summary();
    }
    prepare_menu() {
      this.page.clear_menu();
      this.page.add_menu_item(__("Open Form View"), this.open_form_view.bind(this), false, "Ctrl+F");
      this.page.add_menu_item(__("Toggle Recent Orders"), this.toggle_recent_order.bind(this), false, "Ctrl+O");
      this.page.add_menu_item(__("Save as Draft"), this.save_draft_invoice.bind(this), false, "Ctrl+S");
      this.page.add_menu_item(__("Close the POS"), this.close_pos.bind(this), false, "Shift+Ctrl+C");
    }
    open_form_view() {
      frappe.model.sync(this.frm.doc);
      frappe.set_route("Form", this.frm.doc.doctype, this.frm.doc.name);
    }
    toggle_recent_order() {
      const show = this.recent_order_list.$component.is(":hidden");
      this.toggle_recent_order_list(show);
    }
    save_draft_invoice() {
      if (!this.$components_wrapper.is(":visible"))
        return;
      if (this.frm.doc.items.length == 0) {
        frappe.show_alert({
          message: __("You must add atleast one item to save it as draft."),
          indicator: "red"
        });
        frappe.utils.play_sound("error");
        return;
      }
      this.frm.save(void 0, void 0, void 0, () => {
        frappe.show_alert({
          message: __("There was an error saving the document."),
          indicator: "red"
        });
        frappe.utils.play_sound("error");
      }).then(() => {
        frappe.run_serially([
          () => frappe.dom.freeze(),
          () => this.make_new_invoice(),
          () => frappe.dom.unfreeze()
        ]);
      });
    }
    close_pos() {
      if (!this.$components_wrapper.is(":visible"))
        return;
      let voucher = frappe.model.get_new_doc("POS Closing Entry");
      voucher.pos_profile = this.frm.doc.pos_profile;
      voucher.user = frappe.session.user;
      voucher.company = this.frm.doc.company;
      voucher.pos_opening_entry = this.pos_opening;
      voucher.period_end_date = frappe.datetime.now_datetime();
      voucher.posting_date = frappe.datetime.now_date();
      voucher.posting_time = frappe.datetime.now_time();
      frappe.set_route("Form", "POS Closing Entry", voucher.name);
    }
    init_item_selector() {
      this.item_selector = new erpnext.PointOfSale.ItemSelector({
        wrapper: this.$components_wrapper,
        pos_profile: this.pos_profile,
        settings: this.settings,
        events: {
          item_selected: (args) => this.on_cart_update(args),
          get_frm: () => this.frm || {}
        }
      });
    }
    init_item_cart() {
      this.cart = new erpnext.PointOfSale.ItemCart({
        wrapper: this.$components_wrapper,
        settings: this.settings,
        events: {
          get_frm: () => this.frm,
          cart_item_clicked: (item) => {
            const item_row = this.get_item_from_frm(item);
            this.item_details.toggle_item_details_section(item_row);
          },
          numpad_event: (value, action) => this.update_item_field(value, action),
          checkout: () => this.save_and_checkout(),
          edit_cart: () => this.payment.edit_cart(),
          customer_details_updated: (details) => {
            this.customer_details = details;
            this.payment.render_loyalty_points_payment_mode();
          }
        }
      });
    }
    init_item_details() {
      this.item_details = new erpnext.PointOfSale.ItemDetails({
        wrapper: this.$components_wrapper,
        settings: this.settings,
        events: {
          get_frm: () => this.frm,
          toggle_item_selector: (minimize) => {
            this.item_selector.resize_selector(minimize);
            this.cart.toggle_numpad(minimize);
          },
          form_updated: (item, field, value) => {
            const item_row = frappe.model.get_doc(item.doctype, item.name);
            if (item_row && item_row[field] != value) {
              const args = {
                field,
                value,
                item: this.item_details.current_item
              };
              return this.on_cart_update(args);
            }
            return Promise.resolve();
          },
          highlight_cart_item: (item) => {
            const cart_item = this.cart.get_cart_item(item);
            this.cart.toggle_item_highlight(cart_item);
          },
          item_field_focused: (fieldname) => {
            this.cart.toggle_numpad_field_edit(fieldname);
          },
          set_value_in_current_cart_item: (selector, value) => {
            this.cart.update_selector_value_in_cart_item(selector, value, this.item_details.current_item);
          },
          clone_new_batch_item_in_frm: (batch_serial_map, item) => {
            Object.keys(batch_serial_map).forEach((batch) => {
              const item_to_clone = this.frm.doc.items.find((i) => i.name == item.name);
              const new_row = this.frm.add_child("items", __spreadValues({}, item_to_clone));
              new_row.batch_no = batch;
              new_row.serial_no = batch_serial_map[batch].join(`
`);
              new_row.qty = batch_serial_map[batch].length;
              this.frm.doc.items.forEach((row) => {
                if (item.item_code === row.item_code) {
                  this.update_cart_html(row);
                }
              });
            });
          },
          remove_item_from_cart: () => this.remove_item_from_cart(),
          get_item_stock_map: () => this.item_stock_map,
          close_item_details: () => {
            this.item_details.toggle_item_details_section(null);
            this.cart.prev_action = null;
            this.cart.toggle_item_highlight();
          },
          get_available_stock: (item_code, warehouse) => this.get_available_stock(item_code, warehouse)
        }
      });
    }
    init_payments() {
      this.payment = new erpnext.PointOfSale.Payment({
        wrapper: this.$components_wrapper,
        events: {
          get_frm: () => this.frm || {},
          get_customer_details: () => this.customer_details || {},
          toggle_other_sections: (show) => {
            if (show) {
              this.item_details.$component.is(":visible") ? this.item_details.$component.css("display", "none") : "";
              this.item_selector.toggle_component(false);
            } else {
              this.item_selector.toggle_component(true);
            }
          },
          submit_invoice: () => {
            this.frm.savesubmit().then((r) => {
              this.toggle_components(false);
              this.order_summary.toggle_component(true);
              this.order_summary.load_summary_of(this.frm.doc, true);
              frappe.show_alert({
                indicator: "green",
                message: __("POS invoice {0} created succesfully", [r.doc.name])
              });
            });
          }
        }
      });
    }
    init_recent_order_list() {
      this.recent_order_list = new erpnext.PointOfSale.PastOrderList({
        wrapper: this.$components_wrapper,
        events: {
          open_invoice_data: (name) => {
            frappe.db.get_doc("POS Invoice", name).then((doc) => {
              this.order_summary.load_summary_of(doc);
            });
          },
          reset_summary: () => this.order_summary.toggle_summary_placeholder(true)
        }
      });
    }
    init_order_summary() {
      this.order_summary = new erpnext.PointOfSale.PastOrderSummary({
        wrapper: this.$components_wrapper,
        events: {
          get_frm: () => this.frm,
          process_return: (name) => {
            this.recent_order_list.toggle_component(false);
            frappe.db.get_doc("POS Invoice", name).then((doc) => {
              frappe.run_serially([
                () => this.make_return_invoice(doc),
                () => this.cart.load_invoice(),
                () => this.item_selector.toggle_component(true)
              ]);
            });
          },
          edit_order: (name) => {
            this.recent_order_list.toggle_component(false);
            frappe.run_serially([
              () => this.frm.refresh(name),
              () => this.frm.call("reset_mode_of_payments"),
              () => this.cart.load_invoice(),
              () => this.item_selector.toggle_component(true)
            ]);
          },
          delete_order: (name) => {
            frappe.model.delete_doc(this.frm.doc.doctype, name, () => {
              this.recent_order_list.refresh_list();
            });
          },
          new_order: () => {
            frappe.run_serially([
              () => frappe.dom.freeze(),
              () => this.make_new_invoice(),
              () => this.item_selector.toggle_component(true),
              () => frappe.dom.unfreeze()
            ]);
          }
        }
      });
    }
    toggle_recent_order_list(show) {
      this.toggle_components(!show);
      this.recent_order_list.toggle_component(show);
      this.order_summary.toggle_component(show);
    }
    toggle_components(show) {
      this.cart.toggle_component(show);
      this.item_selector.toggle_component(show);
      !show ? this.item_details.toggle_component(false) || this.payment.toggle_component(false) : "";
    }
    make_new_invoice() {
      return frappe.run_serially([
        () => frappe.dom.freeze(),
        () => this.make_sales_invoice_frm(),
        () => this.set_pos_profile_data(),
        () => this.set_pos_profile_status(),
        () => this.cart.load_invoice(),
        () => frappe.dom.unfreeze()
      ]);
    }
    make_sales_invoice_frm() {
      const doctype = "POS Invoice";
      return new Promise((resolve) => {
        if (this.frm) {
          this.frm = this.get_new_frm(this.frm);
          this.frm.doc.items = [];
          this.frm.doc.is_pos = 1;
          resolve();
        } else {
          frappe.model.with_doctype(doctype, () => {
            this.frm = this.get_new_frm();
            this.frm.doc.items = [];
            this.frm.doc.is_pos = 1;
            resolve();
          });
        }
      });
    }
    get_new_frm(_frm) {
      const doctype = "POS Invoice";
      const page = $("<div>");
      const frm = _frm || new frappe.ui.form.Form(doctype, page, false);
      const name = frappe.model.make_new_doc_and_get_name(doctype, true);
      frm.refresh(name);
      return frm;
    }
    async make_return_invoice(doc) {
      frappe.dom.freeze();
      this.frm = this.get_new_frm(this.frm);
      this.frm.doc.items = [];
      return frappe.call({
        method: "erpnext.accounts.doctype.pos_invoice.pos_invoice.make_sales_return",
        args: {
          "source_name": doc.name,
          "target_doc": this.frm.doc
        },
        callback: (r) => {
          frappe.model.sync(r.message);
          frappe.get_doc(r.message.doctype, r.message.name).__run_link_triggers = false;
          this.set_pos_profile_data().then(() => {
            frappe.dom.unfreeze();
          });
        }
      });
    }
    set_pos_profile_data() {
      if (this.company && !this.frm.doc.company)
        this.frm.doc.company = this.company;
      if ((this.pos_profile && !this.frm.doc.pos_profile) | (this.frm.doc.is_return && this.pos_profile != this.frm.doc.pos_profile)) {
        this.frm.doc.pos_profile = this.pos_profile;
      }
      if (!this.frm.doc.company)
        return;
      return this.frm.trigger("set_pos_data");
    }
    set_pos_profile_status() {
      this.page.set_indicator(this.pos_profile, "blue");
    }
    async on_cart_update(args) {
      frappe.dom.freeze();
      let item_row = void 0;
      try {
        let { field, value, item } = args;
        item_row = this.get_item_from_frm(item);
        const item_row_exists = !$.isEmptyObject(item_row);
        const from_selector = field === "qty" && value === "+1";
        if (from_selector)
          value = flt(item_row.stock_qty) + flt(value);
        if (item_row_exists) {
          if (field === "qty")
            value = flt(value);
          if (["qty", "conversion_factor"].includes(field) && value > 0 && !this.allow_negative_stock) {
            const qty_needed = field === "qty" ? value * item_row.conversion_factor : item_row.qty * value;
            await this.check_stock_availability(item_row, qty_needed, this.frm.doc.set_warehouse);
          }
          if (this.is_current_item_being_edited(item_row) || from_selector) {
            await frappe.model.set_value(item_row.doctype, item_row.name, field, value);
            this.update_cart_html(item_row);
          }
        } else {
          if (!this.frm.doc.customer)
            return this.raise_customer_selection_alert();
          const { item_code, batch_no, serial_no, rate, uom } = item;
          if (!item_code)
            return;
          const new_item = { item_code, batch_no, rate, uom, [field]: value };
          if (serial_no) {
            await this.check_serial_no_availablilty(item_code, this.frm.doc.set_warehouse, serial_no);
            new_item["serial_no"] = serial_no;
          }
          if (field === "serial_no")
            new_item["qty"] = value.split(`
`).length || 0;
          item_row = this.frm.add_child("items", new_item);
          if (field === "qty" && value !== 0 && !this.allow_negative_stock) {
            const qty_needed = value * item_row.conversion_factor;
            await this.check_stock_availability(item_row, qty_needed, this.frm.doc.set_warehouse);
          }
          await this.trigger_new_item_events(item_row);
          this.update_cart_html(item_row);
          if (this.item_details.$component.is(":visible"))
            this.edit_item_details_of(item_row);
          if (this.check_serial_batch_selection_needed(item_row) && !this.item_details.$component.is(":visible"))
            this.edit_item_details_of(item_row);
        }
      } catch (error) {
        console.log(error);
      } finally {
        frappe.dom.unfreeze();
        return item_row;
      }
    }
    raise_customer_selection_alert() {
      frappe.dom.unfreeze();
      frappe.show_alert({
        message: __("You must select a customer before adding an item."),
        indicator: "orange"
      });
      frappe.utils.play_sound("error");
    }
    get_item_from_frm({ name, item_code, batch_no, uom, rate }) {
      let item_row = null;
      if (name) {
        item_row = this.frm.doc.items.find((i) => i.name == name);
      } else {
        const has_batch_no = batch_no !== "null" && batch_no !== null;
        item_row = this.frm.doc.items.find(
          (i) => i.item_code === item_code && (!has_batch_no || has_batch_no && i.batch_no === batch_no) && i.uom === uom && i.rate === flt(rate)
        );
      }
      return item_row || {};
    }
    edit_item_details_of(item_row) {
      this.item_details.toggle_item_details_section(item_row);
    }
    is_current_item_being_edited(item_row) {
      return item_row.name == this.item_details.current_item.name;
    }
    update_cart_html(item_row, remove_item) {
      this.cart.update_item_html(item_row, remove_item);
      this.cart.update_totals_section(this.frm);
    }
    check_serial_batch_selection_needed(item_row) {
      const serialized = item_row.has_serial_no;
      const batched = item_row.has_batch_no;
      const no_serial_selected = !item_row.serial_no;
      const no_batch_selected = !item_row.batch_no;
      if (serialized && no_serial_selected || batched && no_batch_selected || serialized && batched && (no_batch_selected || no_serial_selected)) {
        return true;
      }
      return false;
    }
    async trigger_new_item_events(item_row) {
      await this.frm.script_manager.trigger("item_code", item_row.doctype, item_row.name);
      await this.frm.script_manager.trigger("qty", item_row.doctype, item_row.name);
    }
    async check_stock_availability(item_row, qty_needed, warehouse) {
      const resp = (await this.get_available_stock(item_row.item_code, warehouse)).message;
      const available_qty = resp[0];
      const is_stock_item = resp[1];
      frappe.dom.unfreeze();
      const bold_uom = item_row.stock_uom.bold();
      const bold_item_code = item_row.item_code.bold();
      const bold_warehouse = warehouse.bold();
      const bold_available_qty = available_qty.toString().bold();
      if (!(available_qty > 0)) {
        if (is_stock_item) {
          frappe.model.clear_doc(item_row.doctype, item_row.name);
          frappe.throw({
            title: __("Not Available"),
            message: __("Item Code: {0} is not available under warehouse {1}.", [bold_item_code, bold_warehouse])
          });
        } else {
          return;
        }
      } else if (is_stock_item && available_qty < qty_needed) {
        frappe.throw({
          message: __("Stock quantity not enough for Item Code: {0} under warehouse {1}. Available quantity {2} {3}.", [bold_item_code, bold_warehouse, bold_available_qty, bold_uom]),
          indicator: "orange"
        });
        frappe.utils.play_sound("error");
      }
      frappe.dom.freeze();
    }
    async check_serial_no_availablilty(item_code, warehouse, serial_no) {
      const method = "erpnext.stock.doctype.serial_no.serial_no.get_pos_reserved_serial_nos";
      const args = { filters: { item_code, warehouse } };
      const res = await frappe.call({ method, args });
      if (res.message.includes(serial_no)) {
        frappe.throw({
          title: __("Not Available"),
          message: __("Serial No: {0} has already been transacted into another POS Invoice.", [serial_no.bold()])
        });
      }
    }
    get_available_stock(item_code, warehouse) {
      const me = this;
      return frappe.call({
        method: "erpnext.accounts.doctype.pos_invoice.pos_invoice.get_stock_availability",
        args: {
          "item_code": item_code,
          "warehouse": warehouse
        },
        callback(res) {
          if (!me.item_stock_map[item_code])
            me.item_stock_map[item_code] = {};
          me.item_stock_map[item_code][warehouse] = res.message;
        }
      });
    }
    update_item_field(value, field_or_action) {
      if (field_or_action === "checkout") {
        this.item_details.toggle_item_details_section(null);
      } else if (field_or_action === "remove") {
        this.remove_item_from_cart();
      } else {
        const field_control = this.item_details[`${field_or_action}_control`];
        if (!field_control)
          return;
        field_control.set_focus();
        value != "" && field_control.set_value(value);
      }
    }
    remove_item_from_cart() {
      frappe.dom.freeze();
      const { doctype, name, current_item } = this.item_details;
      return frappe.model.set_value(doctype, name, "qty", 0).then(() => {
        frappe.model.clear_doc(doctype, name);
        this.update_cart_html(current_item, true);
        this.item_details.toggle_item_details_section(null);
        frappe.dom.unfreeze();
      }).catch((e) => console.log(e));
    }
    async save_and_checkout() {
      if (this.frm.is_dirty()) {
        let save_error = false;
        await this.frm.save(null, null, null, () => save_error = true);
        !save_error && this.payment.checkout();
        save_error && setTimeout(() => {
          this.cart.toggle_checkout_btn(true);
        }, 300);
      } else {
        this.payment.checkout();
      }
    }
  };
})();
//# sourceMappingURL=point-of-sale.bundle.VNWTWFOB.js.map

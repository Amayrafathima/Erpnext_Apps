frappe.dom.set_style("/* sfc-style:/home/amreen/erp/frappe-bench/apps/frappe/frappe/public/js/workflow_builder/components/TransitionEdge.vue?type=style&index=0 */\n.access[data-v-0c1414ff] {\n  pointer-events: all;\n  cursor: pointer;\n  position: absolute;\n  font-size: var(--text-sm);\n  padding: 2px 6px;\n  border-radius: 16px;\n  background-color: var(--fg-color);\n  border: 1px solid var(--gray-600);\n  box-shadow: var(--shadow-base);\n}\n\n/* sfc-style:/home/amreen/erp/frappe-bench/apps/frappe/frappe/public/js/workflow_builder/components/StateNode.vue?type=style&index=0 */\n.node[data-v-a0c0593e] {\n  position: relative;\n  background-color: var(--fg-color);\n  font-weight: 500;\n  border-radius: var(--border-radius-full);\n  padding: 15px 25px;\n  color: var(--gray-600);\n  border: 1px solid var(--gray-600);\n  box-shadow: var(--shadow-base);\n}\n.node .node-label[data-v-a0c0593e] {\n  max-width: 110px;\n  text-align: center;\n}\n.vue-flow__node.selected .node[data-v-a0c0593e] {\n  outline: 1.5px solid var(--primary);\n  outline-offset: 2px;\n}\n.handle[data-v-a0c0593e] {\n  position: absolute;\n  width: 7px;\n  height: 7px;\n  background-color: var(--gray-600);\n  border-radius: 50%;\n  transition: all 0.2s ease-in-out;\n}\n\n/* sfc-style:/home/amreen/erp/frappe-bench/apps/frappe/frappe/public/js/workflow_builder/components/ActionNode.vue?type=style&index=0 */\n.node[data-v-2ee7d402] {\n  position: relative;\n  background-color: var(--gray-500);\n  font-weight: 500;\n  border-radius: 5px;\n  padding: 5px 10px;\n  color: var(--fg-color);\n  border: 1px solid var(--fg-color);\n  box-shadow: var(--shadow-base);\n}\n.vue-flow__node.selected .node[data-v-2ee7d402] {\n  outline: 1.5px solid var(--primary);\n  outline-offset: 2px;\n}\n\n/* sfc-style:/home/amreen/erp/frappe-bench/apps/frappe/frappe/public/js/workflow_builder/components/Properties.vue?type=style&index=0 */\n.title[data-v-fb74ba4f] {\n  font-size: var(--text-lg);\n  font-weight: 600;\n  padding: var(--padding-sm) var(--padding-md);\n  border-bottom: 1px solid var(--border-color);\n}\n.control-data[data-v-fb74ba4f] {\n  height: calc(100vh - 250px);\n  overflow-y: auto;\n  padding: 8px;\n}\n.control-data .field[data-v-fb74ba4f] {\n  margin: 5px;\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\n.control-data .field[data-v-fb74ba4f] .form-control:disabled {\n  color: var(--disabled-text-color);\n  background-color: var(--disabled-control-bg);\n  cursor: default;\n}\n.control-data .field[data-v-fb74ba4f] .description {\n  font-size: var(--text-sm);\n  color: var(--text-muted);\n}\n\n/* sfc-style:/home/amreen/erp/frappe-bench/apps/frappe/frappe/public/js/workflow_builder/components/Sidebar.vue?type=style&index=0 */\n.sidebar-resizer[data-v-e852f9f4] {\n  position: absolute;\n  top: 0;\n  right: -6px;\n  width: 5px;\n  height: 100%;\n  opacity: 0;\n  background-color: var(--bg-gray);\n  transition: opacity 0.2s ease;\n  z-index: 10;\n  cursor: col-resize;\n}\n.sidebar-resizer[data-v-e852f9f4]:hover,\n.sidebar-resizer.resizing[data-v-e852f9f4] {\n  opacity: 1;\n}\n\n/* node_modules/@vue-flow/core/dist/style.css */\n.vue-flow {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  z-index: 0;\n}\n.vue-flow__container {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  left: 0;\n  top: 0;\n}\n.vue-flow__pane {\n  z-index: 1;\n}\n.vue-flow__pane.draggable {\n  cursor: grab;\n}\n.vue-flow__pane.dragging {\n  cursor: grabbing;\n}\n.vue-flow__pane.selection {\n  cursor: pointer;\n}\n.vue-flow__transformationpane {\n  transform-origin: 0 0;\n  z-index: 2;\n  pointer-events: none;\n}\n.vue-flow__viewport {\n  z-index: 4;\n}\n.vue-flow__selection {\n  z-index: 6;\n}\n.vue-flow__edge-labels {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n}\n.vue-flow__nodesselection-rect:focus,\n.vue-flow__nodesselection-rect:focus-visible {\n  outline: none;\n}\n.vue-flow .vue-flow__edges {\n  pointer-events: none;\n  overflow: visible;\n}\n.vue-flow__edge-path,\n.vue-flow__connection-path {\n  stroke: #b1b1b7;\n  stroke-width: 1;\n  fill: none;\n}\n.vue-flow__edge {\n  pointer-events: visibleStroke;\n  cursor: pointer;\n}\n.vue-flow__edge.animated path {\n  stroke-dasharray: 5;\n  animation: dashdraw 0.5s linear infinite;\n}\n.vue-flow__edge.animated path.vue-flow__edge-interaction {\n  stroke-dasharray: none;\n  animation: none;\n}\n.vue-flow__edge.inactive {\n  pointer-events: none;\n}\n.vue-flow__edge.selected,\n.vue-flow__edge:focus,\n.vue-flow__edge:focus-visible {\n  outline: none;\n}\n.vue-flow__edge.selected .vue-flow__edge-path,\n.vue-flow__edge:focus .vue-flow__edge-path,\n.vue-flow__edge:focus-visible .vue-flow__edge-path {\n  stroke: #555;\n}\n.vue-flow__edge-textwrapper {\n  pointer-events: all;\n}\n.vue-flow__edge-textbg {\n  fill: white;\n}\n.vue-flow__edge-text {\n  pointer-events: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n}\n.vue-flow__connection {\n  pointer-events: none;\n}\n.vue-flow__connection .animated {\n  stroke-dasharray: 5;\n  animation: dashdraw 0.5s linear infinite;\n}\n.vue-flow__connectionline {\n  z-index: 1001;\n}\n.vue-flow__nodes {\n  pointer-events: none;\n  transform-origin: 0 0;\n}\n.vue-flow__node-default,\n.vue-flow__node-input,\n.vue-flow__node-output {\n  border-width: 1px;\n  border-style: solid;\n  border-color: #bbb;\n}\n.vue-flow__node-default.selected,\n.vue-flow__node-default:focus,\n.vue-flow__node-default:focus-visible,\n.vue-flow__node-input.selected,\n.vue-flow__node-input:focus,\n.vue-flow__node-input:focus-visible,\n.vue-flow__node-output.selected,\n.vue-flow__node-output:focus,\n.vue-flow__node-output:focus-visible {\n  outline: none;\n  border: 1px solid #555;\n}\n.vue-flow__node {\n  position: absolute;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n  pointer-events: all;\n  transform-origin: 0 0;\n  box-sizing: border-box;\n  cursor: grab;\n}\n.vue-flow__node.dragging {\n  cursor: grabbing;\n}\n.vue-flow__nodesselection {\n  z-index: 3;\n  transform-origin: left top;\n  pointer-events: none;\n}\n.vue-flow__nodesselection-rect {\n  position: absolute;\n  pointer-events: all;\n  cursor: grab;\n}\n.vue-flow__nodesselection-rect.dragging {\n  cursor: grabbing;\n}\n.vue-flow__handle {\n  position: absolute;\n  pointer-events: none;\n  min-width: 5px;\n  min-height: 5px;\n}\n.vue-flow__handle.connectable {\n  pointer-events: all;\n  cursor: crosshair;\n}\n.vue-flow__handle-bottom {\n  top: auto;\n  left: 50%;\n  bottom: -4px;\n  transform: translate(-50%, 0);\n}\n.vue-flow__handle-top {\n  left: 50%;\n  top: -4px;\n  transform: translate(-50%, 0);\n}\n.vue-flow__handle-left {\n  top: 50%;\n  left: -4px;\n  transform: translate(0, -50%);\n}\n.vue-flow__handle-right {\n  right: -4px;\n  top: 50%;\n  transform: translate(0, -50%);\n}\n.vue-flow__edgeupdater {\n  cursor: move;\n  pointer-events: all;\n}\n.vue-flow__panel {\n  position: absolute;\n  z-index: 5;\n  margin: 15px;\n}\n.vue-flow__panel.top {\n  top: 0;\n}\n.vue-flow__panel.bottom {\n  bottom: 0;\n}\n.vue-flow__panel.left {\n  left: 0;\n}\n.vue-flow__panel.right {\n  right: 0;\n}\n.vue-flow__panel.center {\n  left: 50%;\n  transform: translateX(-50%);\n}\n@keyframes dashdraw {\n  from {\n    stroke-dashoffset: 10;\n  }\n}\n\n/* node_modules/@vue-flow/core/dist/theme-default.css */\n:root {\n  --vf-node-bg: #fff;\n  --vf-node-text: #222;\n  --vf-connection-path: #b1b1b7;\n  --vf-handle: #555;\n}\n.vue-flow__edge.updating .vue-flow__edge-path {\n  stroke: #777;\n}\n.vue-flow__edge-text {\n  font-size: 10px;\n}\n.vue-flow__edge-textbg {\n  fill: #fff;\n}\n.vue-flow__connection-path {\n  stroke: var(--vf-connection-path);\n}\n.vue-flow__node {\n  cursor: grab;\n}\n.vue-flow__node.selectable:focus,\n.vue-flow__node.selectable:focus-visible {\n  outline: none;\n}\n.vue-flow__node-default,\n.vue-flow__node-input,\n.vue-flow__node-output {\n  padding: 10px;\n  border-radius: 3px;\n  width: 150px;\n  font-size: 12px;\n  text-align: center;\n  border-width: 1px;\n  border-style: solid;\n  color: var(--vf-node-text);\n  background-color: var(--vf-node-bg);\n  border-color: var(--vf-node-color);\n}\n.vue-flow__node-default.selected,\n.vue-flow__node-default.selected:hover,\n.vue-flow__node-input.selected,\n.vue-flow__node-input.selected:hover,\n.vue-flow__node-output.selected,\n.vue-flow__node-output.selected:hover {\n  box-shadow: 0 0 0 0.5px var(--vf-box-shadow);\n}\n.vue-flow__node-default .vue-flow__handle,\n.vue-flow__node-input .vue-flow__handle,\n.vue-flow__node-output .vue-flow__handle {\n  background: var(--vf-handle);\n}\n.vue-flow__node-default.selectable:hover,\n.vue-flow__node-input.selectable:hover,\n.vue-flow__node-output.selectable:hover {\n  box-shadow: 0 1px 4px 1px rgba(0, 0, 0, 0.08);\n}\n.vue-flow__node-input {\n  --vf-node-color: var(--vf-node-color, #0041d0);\n  --vf-handle: var(--vf-node-color, #0041d0);\n  --vf-box-shadow: var(--vf-node-color, #0041d0);\n  background: var(--vf-node-bg);\n  border-color: var(--vf-node-color, #0041d0);\n}\n.vue-flow__node-input.selected,\n.vue-flow__node-input:focus,\n.vue-flow__node-input:focus-visible {\n  outline: none;\n  border: 1px solid var(--vf-node-color, #0041d0);\n}\n.vue-flow__node-default {\n  --vf-handle: var(--vf-node-color, #1a192b);\n  --vf-box-shadow: var(--vf-node-color, #1a192b);\n  background: var(--vf-node-bg);\n  border-color: var(--vf-node-color, #1a192b);\n}\n.vue-flow__node-default.selected,\n.vue-flow__node-default:focus,\n.vue-flow__node-default:focus-visible {\n  outline: none;\n  border: 1px solid var(--vf-node-color, #1a192b);\n}\n.vue-flow__node-output {\n  --vf-handle: var(--vf-node-color, #ff0072);\n  --vf-box-shadow: var(--vf-node-color, #ff0072);\n  background: var(--vf-node-bg);\n  border-color: var(--vf-node-color, #ff0072);\n}\n.vue-flow__node-output.selected,\n.vue-flow__node-output:focus,\n.vue-flow__node-output:focus-visible {\n  outline: none;\n  border: 1px solid var(--vf-node-color, #ff0072);\n}\n.vue-flow__nodesselection-rect,\n.vue-flow__selection {\n  background: rgba(0, 89, 220, 0.08);\n  border: 1px dotted rgba(0, 89, 220, 0.8);\n}\n.vue-flow__nodesselection-rect:focus,\n.vue-flow__nodesselection-rect:focus-visible,\n.vue-flow__selection:focus,\n.vue-flow__selection:focus-visible {\n  outline: none;\n}\n.vue-flow__handle {\n  width: 6px;\n  height: 6px;\n  background: var(--vf-handle);\n  border: 1px solid #fff;\n  border-radius: 100%;\n}\n\n/* sfc-style:/home/amreen/erp/frappe-bench/apps/frappe/frappe/public/js/workflow_builder/WorkflowBuilder.vue?type=style&index=0 */\n.main[data-v-c4748aba] {\n  display: flex;\n  flex-direction: row;\n  height: calc(100vh - var(--navbar-height) - var(--page-head-height) - 65px);\n}\n.main.resizing[data-v-c4748aba] {\n  user-select: none;\n  cursor: col-resize;\n}\n.main .sidebar-container[data-v-c4748aba] {\n  position: relative;\n  height: 100%;\n  margin-right: 10px;\n  border-radius: var(--border-radius-lg);\n  border: 1px solid var(--border-color);\n  background-color: var(--fg-color);\n}\n.workflow-container[data-v-c4748aba] {\n  width: 100%;\n  height: calc(100vh - var(--navbar-height) - var(--page-head-height) - 65px);\n  border-radius: var(--border-radius-lg);\n  border: 1px solid var(--border-color);\n  background-color: var(--fg-color);\n}\n.drag-handle[data-v-c4748aba] {\n  background-color: var(--fg-color);\n  cursor: grab !important;\n}\n[data-v-c4748aba] .transition-edge {\n  stroke: var(--gray-600);\n  stroke-width: 1.5px;\n}\n[data-v-c4748aba] .selected .transition-edge {\n  stroke: var(--primary);\n  stroke-width: 2px;\n}\n\n/* sfc-style:/home/amreen/erp/frappe-bench/apps/frappe/frappe/public/js/form_builder/components/controls/ButtonControl.vue?type=style&index=0 */\nh4[data-v-ab7ce511] {\n  margin-bottom: 0px;\n}\n\n/* sfc-style:/home/amreen/erp/frappe-bench/apps/frappe/frappe/public/js/form_builder/components/controls/CheckControl.vue?type=style&index=0 */\nlabel[data-v-5fb03290],\ninput[data-v-5fb03290] {\n  margin-bottom: 0 !important;\n  cursor: pointer;\n}\nlabel .checkbox[data-v-5fb03290] {\n  display: flex;\n  align-items: center;\n}\nlabel .checkbox input[data-v-5fb03290] {\n  background-color: var(--fg-color);\n  box-shadow: none;\n  border: 1px solid var(--gray-400);\n  pointer-events: none;\n}\n\n/* sfc-style:/home/amreen/erp/frappe-bench/apps/frappe/frappe/public/js/form_builder/components/controls/DataControl.vue?type=style&index=0 */\n.selected-color[data-v-de81cdc3] {\n  background-color: transparent;\n  top: 30px !important;\n}\n.selected-phone[data-v-de81cdc3] {\n  top: 32px !important;\n}\n\n/* sfc-style:/home/amreen/erp/frappe-bench/apps/frappe/frappe/public/js/form_builder/components/controls/GeolocationControl.vue?type=style&index=0 */\n[data-v-6724c096] .clearfix {\n  display: none;\n}\n\n/* sfc-style:/home/amreen/erp/frappe-bench/apps/frappe/frappe/public/js/form_builder/components/controls/RatingControl.vue?type=style&index=0 */\n[data-v-3a354231] .rating {\n  --star-fill: var(--yellow-300) !important;\n}\n\n/* sfc-style:/home/amreen/erp/frappe-bench/apps/frappe/frappe/public/js/form_builder/components/controls/SelectControl.vue?type=style&index=0 */\n.editable .select-icon[data-v-0e9440b9] {\n  top: 3px !important;\n}\n.select-input[data-v-0e9440b9] {\n  position: relative;\n}\n.select-input .select-icon[data-v-0e9440b9] {\n  position: absolute;\n  pointer-events: none;\n  top: 5px;\n  right: 10px;\n}\n\n/* sfc-style:/home/amreen/erp/frappe-bench/apps/frappe/frappe/public/js/form_builder/components/controls/SignatureControl.vue?type=style&index=0 */\n.signature-field[data-v-c1582adf] {\n  border-radius: var(--border-radius);\n  height: 200px;\n  display: flex;\n  justify-content: center;\n}\n.signature-field[data-v-c1582adf]::before {\n  content: \"\";\n  background-color: var(--text-on-gray);\n  width: 70%;\n  height: 2px;\n  margin-top: 150px;\n}\n\n/* sfc-style:/home/amreen/erp/frappe-bench/apps/frappe/frappe/public/js/form_builder/components/controls/TableControl.vue?type=style&index=0 */\n.grid-empty[data-v-9fc5e930] {\n  background-color: var(--fg-color);\n  border-bottom-left-radius: var(--border-radius);\n  border-bottom-right-radius: var(--border-radius);\n  border: 1px solid var(--table-border-color);\n}\n.table-controls[data-v-9fc5e930] {\n  display: flex;\n}\n.table-controls .table-column[data-v-9fc5e930] {\n  position: relative;\n}\n.table-controls .table-column .table-field[data-v-9fc5e930] {\n  background-color: var(--fg-color);\n  border: 1px solid var(--table-border-color);\n  border-left: none;\n  padding: 8px 10px;\n  user-select: none;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.table-controls .table-column:first-child .table-field[data-v-9fc5e930] {\n  border-top-left-radius: var(--border-radius);\n  border-left: 1px solid var(--table-border-color);\n}\n.table-controls .table-column:last-child .table-field[data-v-9fc5e930] {\n  border-top-right-radius: var(--border-radius);\n}\n\n/* sfc-style:/home/amreen/erp/frappe-bench/apps/frappe/frappe/public/js/form_builder/components/controls/TextEditorControl.vue?type=style&index=0 */\n[data-v-59de220a] .quill .ql-toolbar {\n  pointer-events: none;\n}\n[data-v-59de220a] .quill .ql-toolbar .ql-formats {\n  margin-right: 12px;\n}\n[data-v-59de220a] .quill .ql-container p {\n  cursor: pointer;\n}\n/*# sourceMappingURL=workflow_builder.bundle.KJFJQ2ON.css.map */\n");
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
  var __spreadValues = (a2, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a2, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a2, prop, b[prop]);
      }
    return a2;
  };
  var __spreadProps = (a2, b) => __defProps(a2, __getOwnPropDescs(b));
  var __objRest = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/@vue/shared/dist/shared.cjs.js
  var require_shared_cjs = __commonJS({
    "node_modules/@vue/shared/dist/shared.cjs.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      function makeMap(str, expectsLowerCase) {
        const map = /* @__PURE__ */ Object.create(null);
        const list = str.split(",");
        for (let i = 0; i < list.length; i++) {
          map[list[i]] = true;
        }
        return expectsLowerCase ? (val) => !!map[val.toLowerCase()] : (val) => !!map[val];
      }
      var EMPTY_OBJ = Object.freeze({});
      var EMPTY_ARR = Object.freeze([]);
      var NOOP = () => {
      };
      var NO = () => false;
      var onRE = /^on[^a-z]/;
      var isOn = (key) => onRE.test(key);
      var isModelListener = (key) => key.startsWith("onUpdate:");
      var extend2 = Object.assign;
      var remove2 = (arr, el) => {
        const i = arr.indexOf(el);
        if (i > -1) {
          arr.splice(i, 1);
        }
      };
      var hasOwnProperty = Object.prototype.hasOwnProperty;
      var hasOwn2 = (val, key) => hasOwnProperty.call(val, key);
      var isArray = Array.isArray;
      var isMap = (val) => toTypeString(val) === "[object Map]";
      var isSet = (val) => toTypeString(val) === "[object Set]";
      var isDate = (val) => toTypeString(val) === "[object Date]";
      var isRegExp = (val) => toTypeString(val) === "[object RegExp]";
      var isFunction2 = (val) => typeof val === "function";
      var isString2 = (val) => typeof val === "string";
      var isSymbol = (val) => typeof val === "symbol";
      var isObject3 = (val) => val !== null && typeof val === "object";
      var isPromise = (val) => {
        return (isObject3(val) || isFunction2(val)) && isFunction2(val.then) && isFunction2(val.catch);
      };
      var objectToString = Object.prototype.toString;
      var toTypeString = (value) => objectToString.call(value);
      var toRawType = (value) => {
        return toTypeString(value).slice(8, -1);
      };
      var isPlainObject2 = (val) => toTypeString(val) === "[object Object]";
      var isIntegerKey = (key) => isString2(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
      var isReservedProp = /* @__PURE__ */ makeMap(
        ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
      );
      var isBuiltInDirective = /* @__PURE__ */ makeMap(
        "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
      );
      var cacheStringFunction = (fn) => {
        const cache = /* @__PURE__ */ Object.create(null);
        return (str) => {
          const hit = cache[str];
          return hit || (cache[str] = fn(str));
        };
      };
      var camelizeRE = /-(\w)/g;
      var camelize = cacheStringFunction((str) => {
        return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
      });
      var hyphenateRE = /\B([A-Z])/g;
      var hyphenate = cacheStringFunction(
        (str) => str.replace(hyphenateRE, "-$1").toLowerCase()
      );
      var capitalize = cacheStringFunction((str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
      });
      var toHandlerKey = cacheStringFunction((str) => {
        const s2 = str ? `on${capitalize(str)}` : ``;
        return s2;
      });
      var hasChanged = (value, oldValue) => !Object.is(value, oldValue);
      var invokeArrayFns = (fns, arg) => {
        for (let i = 0; i < fns.length; i++) {
          fns[i](arg);
        }
      };
      var def = (obj, key, value) => {
        Object.defineProperty(obj, key, {
          configurable: true,
          enumerable: false,
          value
        });
      };
      var looseToNumber = (val) => {
        const n = parseFloat(val);
        return isNaN(n) ? val : n;
      };
      var toNumber = (val) => {
        const n = isString2(val) ? Number(val) : NaN;
        return isNaN(n) ? val : n;
      };
      var _globalThis;
      var getGlobalThis = () => {
        return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
      };
      var identRE = /^[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*$/;
      function genPropsAccessExp(name) {
        return identRE.test(name) ? `__props.${name}` : `__props[${JSON.stringify(name)}]`;
      }
      var PatchFlagNames = {
        [1]: `TEXT`,
        [2]: `CLASS`,
        [4]: `STYLE`,
        [8]: `PROPS`,
        [16]: `FULL_PROPS`,
        [32]: `NEED_HYDRATION`,
        [64]: `STABLE_FRAGMENT`,
        [128]: `KEYED_FRAGMENT`,
        [256]: `UNKEYED_FRAGMENT`,
        [512]: `NEED_PATCH`,
        [1024]: `DYNAMIC_SLOTS`,
        [2048]: `DEV_ROOT_FRAGMENT`,
        [-1]: `HOISTED`,
        [-2]: `BAIL`
      };
      var slotFlagsText = {
        [1]: "STABLE",
        [2]: "DYNAMIC",
        [3]: "FORWARDED"
      };
      var GLOBALS_ALLOWED = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console";
      var isGloballyAllowed = /* @__PURE__ */ makeMap(GLOBALS_ALLOWED);
      var isGloballyWhitelisted = isGloballyAllowed;
      var range = 2;
      function generateCodeFrame(source, start2 = 0, end = source.length) {
        let lines = source.split(/(\r?\n)/);
        const newlineSequences = lines.filter((_, idx) => idx % 2 === 1);
        lines = lines.filter((_, idx) => idx % 2 === 0);
        let count = 0;
        const res = [];
        for (let i = 0; i < lines.length; i++) {
          count += lines[i].length + (newlineSequences[i] && newlineSequences[i].length || 0);
          if (count >= start2) {
            for (let j = i - range; j <= i + range || end > count; j++) {
              if (j < 0 || j >= lines.length)
                continue;
              const line = j + 1;
              res.push(
                `${line}${" ".repeat(Math.max(3 - String(line).length, 0))}|  ${lines[j]}`
              );
              const lineLength = lines[j].length;
              const newLineSeqLength = newlineSequences[j] && newlineSequences[j].length || 0;
              if (j === i) {
                const pad = start2 - (count - (lineLength + newLineSeqLength));
                const length = Math.max(
                  1,
                  end > count ? lineLength - pad : end - start2
                );
                res.push(`   |  ` + " ".repeat(pad) + "^".repeat(length));
              } else if (j > i) {
                if (end > count) {
                  const length = Math.max(Math.min(end - count, lineLength), 1);
                  res.push(`   |  ` + "^".repeat(length));
                }
                count += lineLength + newLineSeqLength;
              }
            }
            break;
          }
        }
        return res.join("\n");
      }
      function normalizeStyle2(value) {
        if (isArray(value)) {
          const res = {};
          for (let i = 0; i < value.length; i++) {
            const item = value[i];
            const normalized = isString2(item) ? parseStringStyle(item) : normalizeStyle2(item);
            if (normalized) {
              for (const key in normalized) {
                res[key] = normalized[key];
              }
            }
          }
          return res;
        } else if (isString2(value) || isObject3(value)) {
          return value;
        }
      }
      var listDelimiterRE = /;(?![^(]*\))/g;
      var propertyDelimiterRE = /:([^]+)/;
      var styleCommentRE = /\/\*[^]*?\*\//g;
      function parseStringStyle(cssText) {
        const ret = {};
        cssText.replace(styleCommentRE, "").split(listDelimiterRE).forEach((item) => {
          if (item) {
            const tmp = item.split(propertyDelimiterRE);
            tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
          }
        });
        return ret;
      }
      function stringifyStyle(styles) {
        let ret = "";
        if (!styles || isString2(styles)) {
          return ret;
        }
        for (const key in styles) {
          const value = styles[key];
          const normalizedKey = key.startsWith(`--`) ? key : hyphenate(key);
          if (isString2(value) || typeof value === "number") {
            ret += `${normalizedKey}:${value};`;
          }
        }
        return ret;
      }
      function normalizeClass2(value) {
        let res = "";
        if (isString2(value)) {
          res = value;
        } else if (isArray(value)) {
          for (let i = 0; i < value.length; i++) {
            const normalized = normalizeClass2(value[i]);
            if (normalized) {
              res += normalized + " ";
            }
          }
        } else if (isObject3(value)) {
          for (const name in value) {
            if (value[name]) {
              res += name + " ";
            }
          }
        }
        return res.trim();
      }
      function normalizeProps(props) {
        if (!props)
          return null;
        let { class: klass, style } = props;
        if (klass && !isString2(klass)) {
          props.class = normalizeClass2(klass);
        }
        if (style) {
          props.style = normalizeStyle2(style);
        }
        return props;
      }
      var HTML_TAGS = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot";
      var SVG_TAGS = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view";
      var VOID_TAGS = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr";
      var isHTMLTag = /* @__PURE__ */ makeMap(HTML_TAGS);
      var isSVGTag = /* @__PURE__ */ makeMap(SVG_TAGS);
      var isVoidTag = /* @__PURE__ */ makeMap(VOID_TAGS);
      var specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
      var isSpecialBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs);
      var isBooleanAttr = /* @__PURE__ */ makeMap(
        specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected`
      );
      function includeBooleanAttr(value) {
        return !!value || value === "";
      }
      var unsafeAttrCharRE = /[>/="'\u0009\u000a\u000c\u0020]/;
      var attrValidationCache = {};
      function isSSRSafeAttrName(name) {
        if (attrValidationCache.hasOwnProperty(name)) {
          return attrValidationCache[name];
        }
        const isUnsafe = unsafeAttrCharRE.test(name);
        if (isUnsafe) {
          console.error(`unsafe attribute name: ${name}`);
        }
        return attrValidationCache[name] = !isUnsafe;
      }
      var propsToAttrMap = {
        acceptCharset: "accept-charset",
        className: "class",
        htmlFor: "for",
        httpEquiv: "http-equiv"
      };
      var isKnownHtmlAttr = /* @__PURE__ */ makeMap(
        `accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,inert,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap`
      );
      var isKnownSvgAttr = /* @__PURE__ */ makeMap(
        `xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,color-interpolation-filters,color-profile,color-rendering,contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,font-family,font-size,font-size-adjust,font-stretch,font-style,font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,overflow,overline-position,overline-thickness,panose-1,paint-order,path,pathLength,patternContentUnits,patternTransform,patternUnits,ping,pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,specularConstant,specularExponent,speed,spreadMethod,startOffset,stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,string,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,text-decoration,text-rendering,textLength,to,transform,transform-origin,type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan`
      );
      var escapeRE = /["'&<>]/;
      function escapeHtml(string) {
        const str = "" + string;
        const match = escapeRE.exec(str);
        if (!match) {
          return str;
        }
        let html = "";
        let escaped;
        let index;
        let lastIndex = 0;
        for (index = match.index; index < str.length; index++) {
          switch (str.charCodeAt(index)) {
            case 34:
              escaped = "&quot;";
              break;
            case 38:
              escaped = "&amp;";
              break;
            case 39:
              escaped = "&#39;";
              break;
            case 60:
              escaped = "&lt;";
              break;
            case 62:
              escaped = "&gt;";
              break;
            default:
              continue;
          }
          if (lastIndex !== index) {
            html += str.slice(lastIndex, index);
          }
          lastIndex = index + 1;
          html += escaped;
        }
        return lastIndex !== index ? html + str.slice(lastIndex, index) : html;
      }
      var commentStripRE = /^-?>|<!--|-->|--!>|<!-$/g;
      function escapeHtmlComment(src) {
        return src.replace(commentStripRE, "");
      }
      function looseCompareArrays(a2, b) {
        if (a2.length !== b.length)
          return false;
        let equal = true;
        for (let i = 0; equal && i < a2.length; i++) {
          equal = looseEqual(a2[i], b[i]);
        }
        return equal;
      }
      function looseEqual(a2, b) {
        if (a2 === b)
          return true;
        let aValidType = isDate(a2);
        let bValidType = isDate(b);
        if (aValidType || bValidType) {
          return aValidType && bValidType ? a2.getTime() === b.getTime() : false;
        }
        aValidType = isSymbol(a2);
        bValidType = isSymbol(b);
        if (aValidType || bValidType) {
          return a2 === b;
        }
        aValidType = isArray(a2);
        bValidType = isArray(b);
        if (aValidType || bValidType) {
          return aValidType && bValidType ? looseCompareArrays(a2, b) : false;
        }
        aValidType = isObject3(a2);
        bValidType = isObject3(b);
        if (aValidType || bValidType) {
          if (!aValidType || !bValidType) {
            return false;
          }
          const aKeysCount = Object.keys(a2).length;
          const bKeysCount = Object.keys(b).length;
          if (aKeysCount !== bKeysCount) {
            return false;
          }
          for (const key in a2) {
            const aHasKey = a2.hasOwnProperty(key);
            const bHasKey = b.hasOwnProperty(key);
            if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a2[key], b[key])) {
              return false;
            }
          }
        }
        return String(a2) === String(b);
      }
      function looseIndexOf(arr, val) {
        return arr.findIndex((item) => looseEqual(item, val));
      }
      var toDisplayString2 = (val) => {
        return isString2(val) ? val : val == null ? "" : isArray(val) || isObject3(val) && (val.toString === objectToString || !isFunction2(val.toString)) ? JSON.stringify(val, replacer, 2) : String(val);
      };
      var replacer = (_key, val) => {
        if (val && val.__v_isRef) {
          return replacer(_key, val.value);
        } else if (isMap(val)) {
          return {
            [`Map(${val.size})`]: [...val.entries()].reduce((entries, [key, val2]) => {
              entries[`${key} =>`] = val2;
              return entries;
            }, {})
          };
        } else if (isSet(val)) {
          return {
            [`Set(${val.size})`]: [...val.values()]
          };
        } else if (isObject3(val) && !isArray(val) && !isPlainObject2(val)) {
          return String(val);
        }
        return val;
      };
      exports.EMPTY_ARR = EMPTY_ARR;
      exports.EMPTY_OBJ = EMPTY_OBJ;
      exports.NO = NO;
      exports.NOOP = NOOP;
      exports.PatchFlagNames = PatchFlagNames;
      exports.camelize = camelize;
      exports.capitalize = capitalize;
      exports.def = def;
      exports.escapeHtml = escapeHtml;
      exports.escapeHtmlComment = escapeHtmlComment;
      exports.extend = extend2;
      exports.genPropsAccessExp = genPropsAccessExp;
      exports.generateCodeFrame = generateCodeFrame;
      exports.getGlobalThis = getGlobalThis;
      exports.hasChanged = hasChanged;
      exports.hasOwn = hasOwn2;
      exports.hyphenate = hyphenate;
      exports.includeBooleanAttr = includeBooleanAttr;
      exports.invokeArrayFns = invokeArrayFns;
      exports.isArray = isArray;
      exports.isBooleanAttr = isBooleanAttr;
      exports.isBuiltInDirective = isBuiltInDirective;
      exports.isDate = isDate;
      exports.isFunction = isFunction2;
      exports.isGloballyAllowed = isGloballyAllowed;
      exports.isGloballyWhitelisted = isGloballyWhitelisted;
      exports.isHTMLTag = isHTMLTag;
      exports.isIntegerKey = isIntegerKey;
      exports.isKnownHtmlAttr = isKnownHtmlAttr;
      exports.isKnownSvgAttr = isKnownSvgAttr;
      exports.isMap = isMap;
      exports.isModelListener = isModelListener;
      exports.isObject = isObject3;
      exports.isOn = isOn;
      exports.isPlainObject = isPlainObject2;
      exports.isPromise = isPromise;
      exports.isRegExp = isRegExp;
      exports.isReservedProp = isReservedProp;
      exports.isSSRSafeAttrName = isSSRSafeAttrName;
      exports.isSVGTag = isSVGTag;
      exports.isSet = isSet;
      exports.isSpecialBooleanAttr = isSpecialBooleanAttr;
      exports.isString = isString2;
      exports.isSymbol = isSymbol;
      exports.isVoidTag = isVoidTag;
      exports.looseEqual = looseEqual;
      exports.looseIndexOf = looseIndexOf;
      exports.looseToNumber = looseToNumber;
      exports.makeMap = makeMap;
      exports.normalizeClass = normalizeClass2;
      exports.normalizeProps = normalizeProps;
      exports.normalizeStyle = normalizeStyle2;
      exports.objectToString = objectToString;
      exports.parseStringStyle = parseStringStyle;
      exports.propsToAttrMap = propsToAttrMap;
      exports.remove = remove2;
      exports.slotFlagsText = slotFlagsText;
      exports.stringifyStyle = stringifyStyle;
      exports.toDisplayString = toDisplayString2;
      exports.toHandlerKey = toHandlerKey;
      exports.toNumber = toNumber;
      exports.toRawType = toRawType;
      exports.toTypeString = toTypeString;
    }
  });

  // node_modules/@vue/shared/index.js
  var require_shared = __commonJS({
    "node_modules/@vue/shared/index.js"(exports, module) {
      "use strict";
      if (false) {
        module.exports = null;
      } else {
        module.exports = require_shared_cjs();
      }
    }
  });

  // node_modules/@vue/reactivity/dist/reactivity.cjs.js
  var require_reactivity_cjs = __commonJS({
    "node_modules/@vue/reactivity/dist/reactivity.cjs.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var shared = require_shared();
      function warn3(msg, ...args) {
        console.warn(`[Vue warn] ${msg}`, ...args);
      }
      var activeEffectScope;
      var EffectScope = class {
        constructor(detached = false) {
          this.detached = detached;
          this._active = true;
          this.effects = [];
          this.cleanups = [];
          this.parent = activeEffectScope;
          if (!detached && activeEffectScope) {
            this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(
              this
            ) - 1;
          }
        }
        get active() {
          return this._active;
        }
        run(fn) {
          if (this._active) {
            const currentEffectScope = activeEffectScope;
            try {
              activeEffectScope = this;
              return fn();
            } finally {
              activeEffectScope = currentEffectScope;
            }
          } else {
            warn3(`cannot run an inactive effect scope.`);
          }
        }
        on() {
          activeEffectScope = this;
        }
        off() {
          activeEffectScope = this.parent;
        }
        stop(fromParent) {
          if (this._active) {
            let i, l;
            for (i = 0, l = this.effects.length; i < l; i++) {
              this.effects[i].stop();
            }
            for (i = 0, l = this.cleanups.length; i < l; i++) {
              this.cleanups[i]();
            }
            if (this.scopes) {
              for (i = 0, l = this.scopes.length; i < l; i++) {
                this.scopes[i].stop(true);
              }
            }
            if (!this.detached && this.parent && !fromParent) {
              const last = this.parent.scopes.pop();
              if (last && last !== this) {
                this.parent.scopes[this.index] = last;
                last.index = this.index;
              }
            }
            this.parent = void 0;
            this._active = false;
          }
        }
      };
      function effectScope4(detached) {
        return new EffectScope(detached);
      }
      function recordEffectScope(effect2, scope = activeEffectScope) {
        if (scope && scope.active) {
          scope.effects.push(effect2);
        }
      }
      function getCurrentScope5() {
        return activeEffectScope;
      }
      function onScopeDispose4(fn) {
        if (activeEffectScope) {
          activeEffectScope.cleanups.push(fn);
        } else {
          warn3(
            `onScopeDispose() is called when there is no active effect scope to be associated with.`
          );
        }
      }
      var createDep = (effects) => {
        const dep = new Set(effects);
        dep.w = 0;
        dep.n = 0;
        return dep;
      };
      var wasTracked = (dep) => (dep.w & trackOpBit) > 0;
      var newTracked = (dep) => (dep.n & trackOpBit) > 0;
      var initDepMarkers = ({ deps }) => {
        if (deps.length) {
          for (let i = 0; i < deps.length; i++) {
            deps[i].w |= trackOpBit;
          }
        }
      };
      var finalizeDepMarkers = (effect2) => {
        const { deps } = effect2;
        if (deps.length) {
          let ptr = 0;
          for (let i = 0; i < deps.length; i++) {
            const dep = deps[i];
            if (wasTracked(dep) && !newTracked(dep)) {
              dep.delete(effect2);
            } else {
              deps[ptr++] = dep;
            }
            dep.w &= ~trackOpBit;
            dep.n &= ~trackOpBit;
          }
          deps.length = ptr;
        }
      };
      var targetMap = /* @__PURE__ */ new WeakMap();
      var effectTrackDepth = 0;
      var trackOpBit = 1;
      var maxMarkerBits = 30;
      var activeEffect;
      var ITERATE_KEY = Symbol("iterate");
      var MAP_KEY_ITERATE_KEY = Symbol("Map key iterate");
      var ReactiveEffect = class {
        constructor(fn, scheduler2 = null, scope) {
          this.fn = fn;
          this.scheduler = scheduler2;
          this.active = true;
          this.deps = [];
          this.parent = void 0;
          recordEffectScope(this, scope);
        }
        run() {
          if (!this.active) {
            return this.fn();
          }
          let parent = activeEffect;
          let lastShouldTrack = shouldTrack;
          while (parent) {
            if (parent === this) {
              return;
            }
            parent = parent.parent;
          }
          try {
            this.parent = activeEffect;
            activeEffect = this;
            shouldTrack = true;
            trackOpBit = 1 << ++effectTrackDepth;
            if (effectTrackDepth <= maxMarkerBits) {
              initDepMarkers(this);
            } else {
              cleanupEffect(this);
            }
            return this.fn();
          } finally {
            if (effectTrackDepth <= maxMarkerBits) {
              finalizeDepMarkers(this);
            }
            trackOpBit = 1 << --effectTrackDepth;
            activeEffect = this.parent;
            shouldTrack = lastShouldTrack;
            this.parent = void 0;
            if (this.deferStop) {
              this.stop();
            }
          }
        }
        stop() {
          if (activeEffect === this) {
            this.deferStop = true;
          } else if (this.active) {
            cleanupEffect(this);
            if (this.onStop) {
              this.onStop();
            }
            this.active = false;
          }
        }
      };
      function cleanupEffect(effect2) {
        const { deps } = effect2;
        if (deps.length) {
          for (let i = 0; i < deps.length; i++) {
            deps[i].delete(effect2);
          }
          deps.length = 0;
        }
      }
      function effect(fn, options) {
        if (fn.effect instanceof ReactiveEffect) {
          fn = fn.effect.fn;
        }
        const _effect = new ReactiveEffect(fn);
        if (options) {
          shared.extend(_effect, options);
          if (options.scope)
            recordEffectScope(_effect, options.scope);
        }
        if (!options || !options.lazy) {
          _effect.run();
        }
        const runner = _effect.run.bind(_effect);
        runner.effect = _effect;
        return runner;
      }
      function stop(runner) {
        runner.effect.stop();
      }
      var shouldTrack = true;
      var trackStack = [];
      function pauseTracking() {
        trackStack.push(shouldTrack);
        shouldTrack = false;
      }
      function enableTracking() {
        trackStack.push(shouldTrack);
        shouldTrack = true;
      }
      function resetTracking() {
        const last = trackStack.pop();
        shouldTrack = last === void 0 ? true : last;
      }
      function track(target, type, key) {
        if (shouldTrack && activeEffect) {
          let depsMap = targetMap.get(target);
          if (!depsMap) {
            targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
          }
          let dep = depsMap.get(key);
          if (!dep) {
            depsMap.set(key, dep = createDep());
          }
          const eventInfo = { effect: activeEffect, target, type, key };
          trackEffects(dep, eventInfo);
        }
      }
      function trackEffects(dep, debuggerEventExtraInfo) {
        let shouldTrack2 = false;
        if (effectTrackDepth <= maxMarkerBits) {
          if (!newTracked(dep)) {
            dep.n |= trackOpBit;
            shouldTrack2 = !wasTracked(dep);
          }
        } else {
          shouldTrack2 = !dep.has(activeEffect);
        }
        if (shouldTrack2) {
          dep.add(activeEffect);
          activeEffect.deps.push(dep);
          if (activeEffect.onTrack) {
            activeEffect.onTrack(
              shared.extend(
                {
                  effect: activeEffect
                },
                debuggerEventExtraInfo
              )
            );
          }
        }
      }
      function trigger(target, type, key, newValue, oldValue, oldTarget) {
        const depsMap = targetMap.get(target);
        if (!depsMap) {
          return;
        }
        let deps = [];
        if (type === "clear") {
          deps = [...depsMap.values()];
        } else if (key === "length" && shared.isArray(target)) {
          const newLength = Number(newValue);
          depsMap.forEach((dep, key2) => {
            if (key2 === "length" || !shared.isSymbol(key2) && key2 >= newLength) {
              deps.push(dep);
            }
          });
        } else {
          if (key !== void 0) {
            deps.push(depsMap.get(key));
          }
          switch (type) {
            case "add":
              if (!shared.isArray(target)) {
                deps.push(depsMap.get(ITERATE_KEY));
                if (shared.isMap(target)) {
                  deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
                }
              } else if (shared.isIntegerKey(key)) {
                deps.push(depsMap.get("length"));
              }
              break;
            case "delete":
              if (!shared.isArray(target)) {
                deps.push(depsMap.get(ITERATE_KEY));
                if (shared.isMap(target)) {
                  deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
                }
              }
              break;
            case "set":
              if (shared.isMap(target)) {
                deps.push(depsMap.get(ITERATE_KEY));
              }
              break;
          }
        }
        const eventInfo = { target, type, key, newValue, oldValue, oldTarget };
        if (deps.length === 1) {
          if (deps[0]) {
            {
              triggerEffects(deps[0], eventInfo);
            }
          }
        } else {
          const effects = [];
          for (const dep of deps) {
            if (dep) {
              effects.push(...dep);
            }
          }
          {
            triggerEffects(createDep(effects), eventInfo);
          }
        }
      }
      function triggerEffects(dep, debuggerEventExtraInfo) {
        const effects = shared.isArray(dep) ? dep : [...dep];
        for (const effect2 of effects) {
          if (effect2.computed) {
            triggerEffect(effect2, debuggerEventExtraInfo);
          }
        }
        for (const effect2 of effects) {
          if (!effect2.computed) {
            triggerEffect(effect2, debuggerEventExtraInfo);
          }
        }
      }
      function triggerEffect(effect2, debuggerEventExtraInfo) {
        if (effect2 !== activeEffect || effect2.allowRecurse) {
          if (effect2.onTrigger) {
            effect2.onTrigger(shared.extend({ effect: effect2 }, debuggerEventExtraInfo));
          }
          if (effect2.scheduler) {
            effect2.scheduler();
          } else {
            effect2.run();
          }
        }
      }
      function getDepFromReactive(object, key) {
        var _a2;
        return (_a2 = targetMap.get(object)) == null ? void 0 : _a2.get(key);
      }
      var isNonTrackableKeys = /* @__PURE__ */ shared.makeMap(`__proto__,__v_isRef,__isVue`);
      var builtInSymbols = new Set(
        /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((key) => key !== "arguments" && key !== "caller").map((key) => Symbol[key]).filter(shared.isSymbol)
      );
      var arrayInstrumentations = /* @__PURE__ */ createArrayInstrumentations();
      function createArrayInstrumentations() {
        const instrumentations = {};
        ["includes", "indexOf", "lastIndexOf"].forEach((key) => {
          instrumentations[key] = function(...args) {
            const arr = toRaw2(this);
            for (let i = 0, l = this.length; i < l; i++) {
              track(arr, "get", i + "");
            }
            const res = arr[key](...args);
            if (res === -1 || res === false) {
              return arr[key](...args.map(toRaw2));
            } else {
              return res;
            }
          };
        });
        ["push", "pop", "shift", "unshift", "splice"].forEach((key) => {
          instrumentations[key] = function(...args) {
            pauseTracking();
            const res = toRaw2(this)[key].apply(this, args);
            resetTracking();
            return res;
          };
        });
        return instrumentations;
      }
      function hasOwnProperty(key) {
        const obj = toRaw2(this);
        track(obj, "has", key);
        return obj.hasOwnProperty(key);
      }
      var BaseReactiveHandler = class {
        constructor(_isReadonly = false, _shallow = false) {
          this._isReadonly = _isReadonly;
          this._shallow = _shallow;
        }
        get(target, key, receiver) {
          const isReadonly22 = this._isReadonly, shallow = this._shallow;
          if (key === "__v_isReactive") {
            return !isReadonly22;
          } else if (key === "__v_isReadonly") {
            return isReadonly22;
          } else if (key === "__v_isShallow") {
            return shallow;
          } else if (key === "__v_raw" && receiver === (isReadonly22 ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target)) {
            return target;
          }
          const targetIsArray = shared.isArray(target);
          if (!isReadonly22) {
            if (targetIsArray && shared.hasOwn(arrayInstrumentations, key)) {
              return Reflect.get(arrayInstrumentations, key, receiver);
            }
            if (key === "hasOwnProperty") {
              return hasOwnProperty;
            }
          }
          const res = Reflect.get(target, key, receiver);
          if (shared.isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
            return res;
          }
          if (!isReadonly22) {
            track(target, "get", key);
          }
          if (shallow) {
            return res;
          }
          if (isRef5(res)) {
            return targetIsArray && shared.isIntegerKey(key) ? res : res.value;
          }
          if (shared.isObject(res)) {
            return isReadonly22 ? readonly4(res) : reactive5(res);
          }
          return res;
        }
      };
      var MutableReactiveHandler = class extends BaseReactiveHandler {
        constructor(shallow = false) {
          super(false, shallow);
        }
        set(target, key, value, receiver) {
          let oldValue = target[key];
          if (isReadonly2(oldValue) && isRef5(oldValue) && !isRef5(value)) {
            return false;
          }
          if (!this._shallow) {
            if (!isShallow(value) && !isReadonly2(value)) {
              oldValue = toRaw2(oldValue);
              value = toRaw2(value);
            }
            if (!shared.isArray(target) && isRef5(oldValue) && !isRef5(value)) {
              oldValue.value = value;
              return true;
            }
          }
          const hadKey = shared.isArray(target) && shared.isIntegerKey(key) ? Number(key) < target.length : shared.hasOwn(target, key);
          const result = Reflect.set(target, key, value, receiver);
          if (target === toRaw2(receiver)) {
            if (!hadKey) {
              trigger(target, "add", key, value);
            } else if (shared.hasChanged(value, oldValue)) {
              trigger(target, "set", key, value, oldValue);
            }
          }
          return result;
        }
        deleteProperty(target, key) {
          const hadKey = shared.hasOwn(target, key);
          const oldValue = target[key];
          const result = Reflect.deleteProperty(target, key);
          if (result && hadKey) {
            trigger(target, "delete", key, void 0, oldValue);
          }
          return result;
        }
        has(target, key) {
          const result = Reflect.has(target, key);
          if (!shared.isSymbol(key) || !builtInSymbols.has(key)) {
            track(target, "has", key);
          }
          return result;
        }
        ownKeys(target) {
          track(
            target,
            "iterate",
            shared.isArray(target) ? "length" : ITERATE_KEY
          );
          return Reflect.ownKeys(target);
        }
      };
      var ReadonlyReactiveHandler = class extends BaseReactiveHandler {
        constructor(shallow = false) {
          super(true, shallow);
        }
        set(target, key) {
          {
            warn3(
              `Set operation on key "${String(key)}" failed: target is readonly.`,
              target
            );
          }
          return true;
        }
        deleteProperty(target, key) {
          {
            warn3(
              `Delete operation on key "${String(key)}" failed: target is readonly.`,
              target
            );
          }
          return true;
        }
      };
      var mutableHandlers = /* @__PURE__ */ new MutableReactiveHandler();
      var readonlyHandlers = /* @__PURE__ */ new ReadonlyReactiveHandler();
      var shallowReactiveHandlers = /* @__PURE__ */ new MutableReactiveHandler(
        true
      );
      var shallowReadonlyHandlers = /* @__PURE__ */ new ReadonlyReactiveHandler(true);
      var toShallow = (value) => value;
      var getProto = (v) => Reflect.getPrototypeOf(v);
      function get2(target, key, isReadonly3 = false, isShallow2 = false) {
        target = target["__v_raw"];
        const rawTarget = toRaw2(target);
        const rawKey = toRaw2(key);
        if (!isReadonly3) {
          if (shared.hasChanged(key, rawKey)) {
            track(rawTarget, "get", key);
          }
          track(rawTarget, "get", rawKey);
        }
        const { has: has2 } = getProto(rawTarget);
        const wrap = isShallow2 ? toShallow : isReadonly3 ? toReadonly : toReactive;
        if (has2.call(rawTarget, key)) {
          return wrap(target.get(key));
        } else if (has2.call(rawTarget, rawKey)) {
          return wrap(target.get(rawKey));
        } else if (target !== rawTarget) {
          target.get(key);
        }
      }
      function has(key, isReadonly3 = false) {
        const target = this["__v_raw"];
        const rawTarget = toRaw2(target);
        const rawKey = toRaw2(key);
        if (!isReadonly3) {
          if (shared.hasChanged(key, rawKey)) {
            track(rawTarget, "has", key);
          }
          track(rawTarget, "has", rawKey);
        }
        return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
      }
      function size(target, isReadonly3 = false) {
        target = target["__v_raw"];
        !isReadonly3 && track(toRaw2(target), "iterate", ITERATE_KEY);
        return Reflect.get(target, "size", target);
      }
      function add(value) {
        value = toRaw2(value);
        const target = toRaw2(this);
        const proto = getProto(target);
        const hadKey = proto.has.call(target, value);
        if (!hadKey) {
          target.add(value);
          trigger(target, "add", value, value);
        }
        return this;
      }
      function set3(key, value) {
        value = toRaw2(value);
        const target = toRaw2(this);
        const { has: has2, get: get22 } = getProto(target);
        let hadKey = has2.call(target, key);
        if (!hadKey) {
          key = toRaw2(key);
          hadKey = has2.call(target, key);
        } else {
          checkIdentityKeys(target, has2, key);
        }
        const oldValue = get22.call(target, key);
        target.set(key, value);
        if (!hadKey) {
          trigger(target, "add", key, value);
        } else if (shared.hasChanged(value, oldValue)) {
          trigger(target, "set", key, value, oldValue);
        }
        return this;
      }
      function deleteEntry(key) {
        const target = toRaw2(this);
        const { has: has2, get: get22 } = getProto(target);
        let hadKey = has2.call(target, key);
        if (!hadKey) {
          key = toRaw2(key);
          hadKey = has2.call(target, key);
        } else {
          checkIdentityKeys(target, has2, key);
        }
        const oldValue = get22 ? get22.call(target, key) : void 0;
        const result = target.delete(key);
        if (hadKey) {
          trigger(target, "delete", key, void 0, oldValue);
        }
        return result;
      }
      function clear() {
        const target = toRaw2(this);
        const hadItems = target.size !== 0;
        const oldTarget = shared.isMap(target) ? new Map(target) : new Set(target);
        const result = target.clear();
        if (hadItems) {
          trigger(target, "clear", void 0, void 0, oldTarget);
        }
        return result;
      }
      function createForEach(isReadonly3, isShallow2) {
        return function forEach(callback, thisArg) {
          const observed = this;
          const target = observed["__v_raw"];
          const rawTarget = toRaw2(target);
          const wrap = isShallow2 ? toShallow : isReadonly3 ? toReadonly : toReactive;
          !isReadonly3 && track(rawTarget, "iterate", ITERATE_KEY);
          return target.forEach((value, key) => {
            return callback.call(thisArg, wrap(value), wrap(key), observed);
          });
        };
      }
      function createIterableMethod(method, isReadonly3, isShallow2) {
        return function(...args) {
          const target = this["__v_raw"];
          const rawTarget = toRaw2(target);
          const targetIsMap = shared.isMap(rawTarget);
          const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
          const isKeyOnly = method === "keys" && targetIsMap;
          const innerIterator = target[method](...args);
          const wrap = isShallow2 ? toShallow : isReadonly3 ? toReadonly : toReactive;
          !isReadonly3 && track(
            rawTarget,
            "iterate",
            isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY
          );
          return {
            next() {
              const { value, done } = innerIterator.next();
              return done ? { value, done } : {
                value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
                done
              };
            },
            [Symbol.iterator]() {
              return this;
            }
          };
        };
      }
      function createReadonlyMethod(type) {
        return function(...args) {
          {
            const key = args[0] ? `on key "${args[0]}" ` : ``;
            console.warn(
              `${shared.capitalize(type)} operation ${key}failed: target is readonly.`,
              toRaw2(this)
            );
          }
          return type === "delete" ? false : type === "clear" ? void 0 : this;
        };
      }
      function createInstrumentations() {
        const mutableInstrumentations2 = {
          get(key) {
            return get2(this, key);
          },
          get size() {
            return size(this);
          },
          has,
          add,
          set: set3,
          delete: deleteEntry,
          clear,
          forEach: createForEach(false, false)
        };
        const shallowInstrumentations2 = {
          get(key) {
            return get2(this, key, false, true);
          },
          get size() {
            return size(this);
          },
          has,
          add,
          set: set3,
          delete: deleteEntry,
          clear,
          forEach: createForEach(false, true)
        };
        const readonlyInstrumentations2 = {
          get(key) {
            return get2(this, key, true);
          },
          get size() {
            return size(this, true);
          },
          has(key) {
            return has.call(this, key, true);
          },
          add: createReadonlyMethod("add"),
          set: createReadonlyMethod("set"),
          delete: createReadonlyMethod("delete"),
          clear: createReadonlyMethod("clear"),
          forEach: createForEach(true, false)
        };
        const shallowReadonlyInstrumentations2 = {
          get(key) {
            return get2(this, key, true, true);
          },
          get size() {
            return size(this, true);
          },
          has(key) {
            return has.call(this, key, true);
          },
          add: createReadonlyMethod("add"),
          set: createReadonlyMethod("set"),
          delete: createReadonlyMethod("delete"),
          clear: createReadonlyMethod("clear"),
          forEach: createForEach(true, true)
        };
        const iteratorMethods = ["keys", "values", "entries", Symbol.iterator];
        iteratorMethods.forEach((method) => {
          mutableInstrumentations2[method] = createIterableMethod(
            method,
            false,
            false
          );
          readonlyInstrumentations2[method] = createIterableMethod(
            method,
            true,
            false
          );
          shallowInstrumentations2[method] = createIterableMethod(
            method,
            false,
            true
          );
          shallowReadonlyInstrumentations2[method] = createIterableMethod(
            method,
            true,
            true
          );
        });
        return [
          mutableInstrumentations2,
          readonlyInstrumentations2,
          shallowInstrumentations2,
          shallowReadonlyInstrumentations2
        ];
      }
      var [
        mutableInstrumentations,
        readonlyInstrumentations,
        shallowInstrumentations,
        shallowReadonlyInstrumentations
      ] = /* @__PURE__ */ createInstrumentations();
      function createInstrumentationGetter(isReadonly3, shallow) {
        const instrumentations = shallow ? isReadonly3 ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly3 ? readonlyInstrumentations : mutableInstrumentations;
        return (target, key, receiver) => {
          if (key === "__v_isReactive") {
            return !isReadonly3;
          } else if (key === "__v_isReadonly") {
            return isReadonly3;
          } else if (key === "__v_raw") {
            return target;
          }
          return Reflect.get(
            shared.hasOwn(instrumentations, key) && key in target ? instrumentations : target,
            key,
            receiver
          );
        };
      }
      var mutableCollectionHandlers = {
        get: /* @__PURE__ */ createInstrumentationGetter(false, false)
      };
      var shallowCollectionHandlers = {
        get: /* @__PURE__ */ createInstrumentationGetter(false, true)
      };
      var readonlyCollectionHandlers = {
        get: /* @__PURE__ */ createInstrumentationGetter(true, false)
      };
      var shallowReadonlyCollectionHandlers = {
        get: /* @__PURE__ */ createInstrumentationGetter(true, true)
      };
      function checkIdentityKeys(target, has2, key) {
        const rawKey = toRaw2(key);
        if (rawKey !== key && has2.call(target, rawKey)) {
          const type = shared.toRawType(target);
          console.warn(
            `Reactive ${type} contains both the raw and reactive versions of the same object${type === `Map` ? ` as keys` : ``}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
          );
        }
      }
      var reactiveMap = /* @__PURE__ */ new WeakMap();
      var shallowReactiveMap = /* @__PURE__ */ new WeakMap();
      var readonlyMap = /* @__PURE__ */ new WeakMap();
      var shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
      function targetTypeMap(rawType) {
        switch (rawType) {
          case "Object":
          case "Array":
            return 1;
          case "Map":
          case "Set":
          case "WeakMap":
          case "WeakSet":
            return 2;
          default:
            return 0;
        }
      }
      function getTargetType(value) {
        return value["__v_skip"] || !Object.isExtensible(value) ? 0 : targetTypeMap(shared.toRawType(value));
      }
      function reactive5(target) {
        if (isReadonly2(target)) {
          return target;
        }
        return createReactiveObject(
          target,
          false,
          mutableHandlers,
          mutableCollectionHandlers,
          reactiveMap
        );
      }
      function shallowReactive(target) {
        return createReactiveObject(
          target,
          false,
          shallowReactiveHandlers,
          shallowCollectionHandlers,
          shallowReactiveMap
        );
      }
      function readonly4(target) {
        return createReactiveObject(
          target,
          true,
          readonlyHandlers,
          readonlyCollectionHandlers,
          readonlyMap
        );
      }
      function shallowReadonly(target) {
        return createReactiveObject(
          target,
          true,
          shallowReadonlyHandlers,
          shallowReadonlyCollectionHandlers,
          shallowReadonlyMap
        );
      }
      function createReactiveObject(target, isReadonly22, baseHandlers, collectionHandlers, proxyMap) {
        if (!shared.isObject(target)) {
          {
            console.warn(`value cannot be made reactive: ${String(target)}`);
          }
          return target;
        }
        if (target["__v_raw"] && !(isReadonly22 && target["__v_isReactive"])) {
          return target;
        }
        const existingProxy = proxyMap.get(target);
        if (existingProxy) {
          return existingProxy;
        }
        const targetType = getTargetType(target);
        if (targetType === 0) {
          return target;
        }
        const proxy = new Proxy(
          target,
          targetType === 2 ? collectionHandlers : baseHandlers
        );
        proxyMap.set(target, proxy);
        return proxy;
      }
      function isReactive3(value) {
        if (isReadonly2(value)) {
          return isReactive3(value["__v_raw"]);
        }
        return !!(value && value["__v_isReactive"]);
      }
      function isReadonly2(value) {
        return !!(value && value["__v_isReadonly"]);
      }
      function isShallow(value) {
        return !!(value && value["__v_isShallow"]);
      }
      function isProxy(value) {
        return isReactive3(value) || isReadonly2(value);
      }
      function toRaw2(observed) {
        const raw = observed && observed["__v_raw"];
        return raw ? toRaw2(raw) : observed;
      }
      function markRaw4(value) {
        shared.def(value, "__v_skip", true);
        return value;
      }
      var toReactive = (value) => shared.isObject(value) ? reactive5(value) : value;
      var toReadonly = (value) => shared.isObject(value) ? readonly4(value) : value;
      function trackRefValue(ref22) {
        if (shouldTrack && activeEffect) {
          ref22 = toRaw2(ref22);
          {
            trackEffects(ref22.dep || (ref22.dep = createDep()), {
              target: ref22,
              type: "get",
              key: "value"
            });
          }
        }
      }
      function triggerRefValue(ref22, newVal) {
        ref22 = toRaw2(ref22);
        const dep = ref22.dep;
        if (dep) {
          {
            triggerEffects(dep, {
              target: ref22,
              type: "set",
              key: "value",
              newValue: newVal
            });
          }
        }
      }
      function isRef5(r) {
        return !!(r && r.__v_isRef === true);
      }
      function ref17(value) {
        return createRef(value, false);
      }
      function shallowRef3(value) {
        return createRef(value, true);
      }
      function createRef(rawValue, shallow) {
        if (isRef5(rawValue)) {
          return rawValue;
        }
        return new RefImpl(rawValue, shallow);
      }
      var RefImpl = class {
        constructor(value, __v_isShallow) {
          this.__v_isShallow = __v_isShallow;
          this.dep = void 0;
          this.__v_isRef = true;
          this._rawValue = __v_isShallow ? value : toRaw2(value);
          this._value = __v_isShallow ? value : toReactive(value);
        }
        get value() {
          trackRefValue(this);
          return this._value;
        }
        set value(newVal) {
          const useDirectValue = this.__v_isShallow || isShallow(newVal) || isReadonly2(newVal);
          newVal = useDirectValue ? newVal : toRaw2(newVal);
          if (shared.hasChanged(newVal, this._rawValue)) {
            this._rawValue = newVal;
            this._value = useDirectValue ? newVal : toReactive(newVal);
            triggerRefValue(this, newVal);
          }
        }
      };
      function triggerRef(ref22) {
        triggerRefValue(ref22, ref22.value);
      }
      function unref5(ref22) {
        return isRef5(ref22) ? ref22.value : ref22;
      }
      function toValue2(source) {
        return shared.isFunction(source) ? source() : unref5(source);
      }
      var shallowUnwrapHandlers = {
        get: (target, key, receiver) => unref5(Reflect.get(target, key, receiver)),
        set: (target, key, value, receiver) => {
          const oldValue = target[key];
          if (isRef5(oldValue) && !isRef5(value)) {
            oldValue.value = value;
            return true;
          } else {
            return Reflect.set(target, key, value, receiver);
          }
        }
      };
      function proxyRefs(objectWithRefs) {
        return isReactive3(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
      }
      var CustomRefImpl = class {
        constructor(factory) {
          this.dep = void 0;
          this.__v_isRef = true;
          const { get: get3, set: set4 } = factory(
            () => trackRefValue(this),
            () => triggerRefValue(this)
          );
          this._get = get3;
          this._set = set4;
        }
        get value() {
          return this._get();
        }
        set value(newVal) {
          this._set(newVal);
        }
      };
      function customRef4(factory) {
        return new CustomRefImpl(factory);
      }
      function toRefs4(object) {
        if (!isProxy(object)) {
          console.warn(`toRefs() expects a reactive object but received a plain one.`);
        }
        const ret = shared.isArray(object) ? new Array(object.length) : {};
        for (const key in object) {
          ret[key] = propertyToRef(object, key);
        }
        return ret;
      }
      var ObjectRefImpl = class {
        constructor(_object, _key, _defaultValue) {
          this._object = _object;
          this._key = _key;
          this._defaultValue = _defaultValue;
          this.__v_isRef = true;
        }
        get value() {
          const val = this._object[this._key];
          return val === void 0 ? this._defaultValue : val;
        }
        set value(newVal) {
          this._object[this._key] = newVal;
        }
        get dep() {
          return getDepFromReactive(toRaw2(this._object), this._key);
        }
      };
      var GetterRefImpl = class {
        constructor(_getter) {
          this._getter = _getter;
          this.__v_isRef = true;
          this.__v_isReadonly = true;
        }
        get value() {
          return this._getter();
        }
      };
      function toRef4(source, key, defaultValue) {
        if (isRef5(source)) {
          return source;
        } else if (shared.isFunction(source)) {
          return new GetterRefImpl(source);
        } else if (shared.isObject(source) && arguments.length > 1) {
          return propertyToRef(source, key, defaultValue);
        } else {
          return ref17(source);
        }
      }
      function propertyToRef(source, key, defaultValue) {
        const val = source[key];
        return isRef5(val) ? val : new ObjectRefImpl(source, key, defaultValue);
      }
      var ComputedRefImpl = class {
        constructor(getter, _setter, isReadonly3, isSSR) {
          this._setter = _setter;
          this.dep = void 0;
          this.__v_isRef = true;
          this["__v_isReadonly"] = false;
          this._dirty = true;
          this.effect = new ReactiveEffect(getter, () => {
            if (!this._dirty) {
              this._dirty = true;
              triggerRefValue(this);
            }
          });
          this.effect.computed = this;
          this.effect.active = this._cacheable = !isSSR;
          this["__v_isReadonly"] = isReadonly3;
        }
        get value() {
          const self2 = toRaw2(this);
          trackRefValue(self2);
          if (self2._dirty || !self2._cacheable) {
            self2._dirty = false;
            self2._value = self2.effect.run();
          }
          return self2._value;
        }
        set value(newValue) {
          this._setter(newValue);
        }
      };
      function computed19(getterOrOptions, debugOptions, isSSR = false) {
        let getter;
        let setter;
        const onlyGetter = shared.isFunction(getterOrOptions);
        if (onlyGetter) {
          getter = getterOrOptions;
          setter = () => {
            console.warn("Write operation failed: computed value is readonly");
          };
        } else {
          getter = getterOrOptions.get;
          setter = getterOrOptions.set;
        }
        const cRef = new ComputedRefImpl(getter, setter, onlyGetter || !setter, isSSR);
        if (debugOptions && !isSSR) {
          cRef.effect.onTrack = debugOptions.onTrack;
          cRef.effect.onTrigger = debugOptions.onTrigger;
        }
        return cRef;
      }
      var tick = /* @__PURE__ */ Promise.resolve();
      var queue = [];
      var queued = false;
      var scheduler = (fn) => {
        queue.push(fn);
        if (!queued) {
          queued = true;
          tick.then(flush);
        }
      };
      var flush = () => {
        for (let i = 0; i < queue.length; i++) {
          queue[i]();
        }
        queue.length = 0;
        queued = false;
      };
      var DeferredComputedRefImpl = class {
        constructor(getter) {
          this.dep = void 0;
          this._dirty = true;
          this.__v_isRef = true;
          this["__v_isReadonly"] = true;
          let compareTarget;
          let hasCompareTarget = false;
          let scheduled = false;
          this.effect = new ReactiveEffect(getter, (computedTrigger) => {
            if (this.dep) {
              if (computedTrigger) {
                compareTarget = this._value;
                hasCompareTarget = true;
              } else if (!scheduled) {
                const valueToCompare = hasCompareTarget ? compareTarget : this._value;
                scheduled = true;
                hasCompareTarget = false;
                scheduler(() => {
                  if (this.effect.active && this._get() !== valueToCompare) {
                    triggerRefValue(this);
                  }
                  scheduled = false;
                });
              }
              for (const e2 of this.dep) {
                if (e2.computed instanceof DeferredComputedRefImpl) {
                  e2.scheduler(
                    true
                  );
                }
              }
            }
            this._dirty = true;
          });
          this.effect.computed = this;
        }
        _get() {
          if (this._dirty) {
            this._dirty = false;
            return this._value = this.effect.run();
          }
          return this._value;
        }
        get value() {
          trackRefValue(this);
          return toRaw2(this)._get();
        }
      };
      function deferredComputed(getter) {
        return new DeferredComputedRefImpl(getter);
      }
      exports.EffectScope = EffectScope;
      exports.ITERATE_KEY = ITERATE_KEY;
      exports.ReactiveEffect = ReactiveEffect;
      exports.computed = computed19;
      exports.customRef = customRef4;
      exports.deferredComputed = deferredComputed;
      exports.effect = effect;
      exports.effectScope = effectScope4;
      exports.enableTracking = enableTracking;
      exports.getCurrentScope = getCurrentScope5;
      exports.isProxy = isProxy;
      exports.isReactive = isReactive3;
      exports.isReadonly = isReadonly2;
      exports.isRef = isRef5;
      exports.isShallow = isShallow;
      exports.markRaw = markRaw4;
      exports.onScopeDispose = onScopeDispose4;
      exports.pauseTracking = pauseTracking;
      exports.proxyRefs = proxyRefs;
      exports.reactive = reactive5;
      exports.readonly = readonly4;
      exports.ref = ref17;
      exports.resetTracking = resetTracking;
      exports.shallowReactive = shallowReactive;
      exports.shallowReadonly = shallowReadonly;
      exports.shallowRef = shallowRef3;
      exports.stop = stop;
      exports.toRaw = toRaw2;
      exports.toRef = toRef4;
      exports.toRefs = toRefs4;
      exports.toValue = toValue2;
      exports.track = track;
      exports.trigger = trigger;
      exports.triggerRef = triggerRef;
      exports.unref = unref5;
    }
  });

  // node_modules/@vue/reactivity/index.js
  var require_reactivity = __commonJS({
    "node_modules/@vue/reactivity/index.js"(exports, module) {
      "use strict";
      if (false) {
        module.exports = null;
      } else {
        module.exports = require_reactivity_cjs();
      }
    }
  });

  // node_modules/@vue/runtime-core/dist/runtime-core.cjs.js
  var require_runtime_core_cjs = __commonJS({
    "node_modules/@vue/runtime-core/dist/runtime-core.cjs.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var reactivity = require_reactivity();
      var shared = require_shared();
      var stack = [];
      function pushWarningContext(vnode) {
        stack.push(vnode);
      }
      function popWarningContext() {
        stack.pop();
      }
      function warn3(msg, ...args) {
        reactivity.pauseTracking();
        const instance = stack.length ? stack[stack.length - 1].component : null;
        const appWarnHandler = instance && instance.appContext.config.warnHandler;
        const trace = getComponentTrace();
        if (appWarnHandler) {
          callWithErrorHandling(
            appWarnHandler,
            instance,
            11,
            [
              msg + args.join(""),
              instance && instance.proxy,
              trace.map(
                ({ vnode }) => `at <${formatComponentName(instance, vnode.type)}>`
              ).join("\n"),
              trace
            ]
          );
        } else {
          const warnArgs = [`[Vue warn]: ${msg}`, ...args];
          if (trace.length && true) {
            warnArgs.push(`
`, ...formatTrace(trace));
          }
          console.warn(...warnArgs);
        }
        reactivity.resetTracking();
      }
      function getComponentTrace() {
        let currentVNode = stack[stack.length - 1];
        if (!currentVNode) {
          return [];
        }
        const normalizedStack = [];
        while (currentVNode) {
          const last = normalizedStack[0];
          if (last && last.vnode === currentVNode) {
            last.recurseCount++;
          } else {
            normalizedStack.push({
              vnode: currentVNode,
              recurseCount: 0
            });
          }
          const parentInstance = currentVNode.component && currentVNode.component.parent;
          currentVNode = parentInstance && parentInstance.vnode;
        }
        return normalizedStack;
      }
      function formatTrace(trace) {
        const logs = [];
        trace.forEach((entry, i) => {
          logs.push(...i === 0 ? [] : [`
`], ...formatTraceEntry(entry));
        });
        return logs;
      }
      function formatTraceEntry({ vnode, recurseCount }) {
        const postfix = recurseCount > 0 ? `... (${recurseCount} recursive calls)` : ``;
        const isRoot = vnode.component ? vnode.component.parent == null : false;
        const open2 = ` at <${formatComponentName(
          vnode.component,
          vnode.type,
          isRoot
        )}`;
        const close = `>` + postfix;
        return vnode.props ? [open2, ...formatProps(vnode.props), close] : [open2 + close];
      }
      function formatProps(props) {
        const res = [];
        const keys = Object.keys(props);
        keys.slice(0, 3).forEach((key) => {
          res.push(...formatProp(key, props[key]));
        });
        if (keys.length > 3) {
          res.push(` ...`);
        }
        return res;
      }
      function formatProp(key, value, raw) {
        if (shared.isString(value)) {
          value = JSON.stringify(value);
          return raw ? value : [`${key}=${value}`];
        } else if (typeof value === "number" || typeof value === "boolean" || value == null) {
          return raw ? value : [`${key}=${value}`];
        } else if (reactivity.isRef(value)) {
          value = formatProp(key, reactivity.toRaw(value.value), true);
          return raw ? value : [`${key}=Ref<`, value, `>`];
        } else if (shared.isFunction(value)) {
          return [`${key}=fn${value.name ? `<${value.name}>` : ``}`];
        } else {
          value = reactivity.toRaw(value);
          return raw ? value : [`${key}=`, value];
        }
      }
      function assertNumber(val, type) {
        if (val === void 0) {
          return;
        } else if (typeof val !== "number") {
          warn3(`${type} is not a valid number - got ${JSON.stringify(val)}.`);
        } else if (isNaN(val)) {
          warn3(`${type} is NaN - the duration expression might be incorrect.`);
        }
      }
      var ErrorTypeStrings = {
        ["sp"]: "serverPrefetch hook",
        ["bc"]: "beforeCreate hook",
        ["c"]: "created hook",
        ["bm"]: "beforeMount hook",
        ["m"]: "mounted hook",
        ["bu"]: "beforeUpdate hook",
        ["u"]: "updated",
        ["bum"]: "beforeUnmount hook",
        ["um"]: "unmounted hook",
        ["a"]: "activated hook",
        ["da"]: "deactivated hook",
        ["ec"]: "errorCaptured hook",
        ["rtc"]: "renderTracked hook",
        ["rtg"]: "renderTriggered hook",
        [0]: "setup function",
        [1]: "render function",
        [2]: "watcher getter",
        [3]: "watcher callback",
        [4]: "watcher cleanup function",
        [5]: "native event handler",
        [6]: "component event handler",
        [7]: "vnode hook",
        [8]: "directive hook",
        [9]: "transition hook",
        [10]: "app errorHandler",
        [11]: "app warnHandler",
        [12]: "ref function",
        [13]: "async component loader",
        [14]: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"
      };
      function callWithErrorHandling(fn, instance, type, args) {
        let res;
        try {
          res = args ? fn(...args) : fn();
        } catch (err) {
          handleError(err, instance, type);
        }
        return res;
      }
      function callWithAsyncErrorHandling(fn, instance, type, args) {
        if (shared.isFunction(fn)) {
          const res = callWithErrorHandling(fn, instance, type, args);
          if (res && shared.isPromise(res)) {
            res.catch((err) => {
              handleError(err, instance, type);
            });
          }
          return res;
        }
        const values = [];
        for (let i = 0; i < fn.length; i++) {
          values.push(callWithAsyncErrorHandling(fn[i], instance, type, args));
        }
        return values;
      }
      function handleError(err, instance, type, throwInDev = true) {
        const contextVNode = instance ? instance.vnode : null;
        if (instance) {
          let cur = instance.parent;
          const exposedInstance = instance.proxy;
          const errorInfo = ErrorTypeStrings[type];
          while (cur) {
            const errorCapturedHooks = cur.ec;
            if (errorCapturedHooks) {
              for (let i = 0; i < errorCapturedHooks.length; i++) {
                if (errorCapturedHooks[i](err, exposedInstance, errorInfo) === false) {
                  return;
                }
              }
            }
            cur = cur.parent;
          }
          const appErrorHandler = instance.appContext.config.errorHandler;
          if (appErrorHandler) {
            callWithErrorHandling(
              appErrorHandler,
              null,
              10,
              [err, exposedInstance, errorInfo]
            );
            return;
          }
        }
        logError(err, type, contextVNode, throwInDev);
      }
      function logError(err, type, contextVNode, throwInDev = true) {
        {
          const info = ErrorTypeStrings[type];
          if (contextVNode) {
            pushWarningContext(contextVNode);
          }
          warn3(`Unhandled error${info ? ` during execution of ${info}` : ``}`);
          if (contextVNode) {
            popWarningContext();
          }
          if (throwInDev) {
            throw err;
          } else {
            console.error(err);
          }
        }
      }
      var isFlushing = false;
      var isFlushPending = false;
      var queue = [];
      var flushIndex = 0;
      var pendingPostFlushCbs = [];
      var activePostFlushCbs = null;
      var postFlushIndex = 0;
      var resolvedPromise = /* @__PURE__ */ Promise.resolve();
      var currentFlushPromise = null;
      var RECURSION_LIMIT = 100;
      function nextTick9(fn) {
        const p = currentFlushPromise || resolvedPromise;
        return fn ? p.then(this ? fn.bind(this) : fn) : p;
      }
      function findInsertionIndex(id2) {
        let start2 = flushIndex + 1;
        let end = queue.length;
        while (start2 < end) {
          const middle = start2 + end >>> 1;
          const middleJob = queue[middle];
          const middleJobId = getId(middleJob);
          if (middleJobId < id2 || middleJobId === id2 && middleJob.pre) {
            start2 = middle + 1;
          } else {
            end = middle;
          }
        }
        return start2;
      }
      function queueJob(job) {
        if (!queue.length || !queue.includes(
          job,
          isFlushing && job.allowRecurse ? flushIndex + 1 : flushIndex
        )) {
          if (job.id == null) {
            queue.push(job);
          } else {
            queue.splice(findInsertionIndex(job.id), 0, job);
          }
          queueFlush();
        }
      }
      function queueFlush() {
        if (!isFlushing && !isFlushPending) {
          isFlushPending = true;
          currentFlushPromise = resolvedPromise.then(flushJobs);
        }
      }
      function invalidateJob(job) {
        const i = queue.indexOf(job);
        if (i > flushIndex) {
          queue.splice(i, 1);
        }
      }
      function queuePostFlushCb(cb) {
        if (!shared.isArray(cb)) {
          if (!activePostFlushCbs || !activePostFlushCbs.includes(
            cb,
            cb.allowRecurse ? postFlushIndex + 1 : postFlushIndex
          )) {
            pendingPostFlushCbs.push(cb);
          }
        } else {
          pendingPostFlushCbs.push(...cb);
        }
        queueFlush();
      }
      function flushPreFlushCbs(seen, i = isFlushing ? flushIndex + 1 : 0) {
        {
          seen = seen || /* @__PURE__ */ new Map();
        }
        for (; i < queue.length; i++) {
          const cb = queue[i];
          if (cb && cb.pre) {
            if (checkRecursiveUpdates(seen, cb)) {
              continue;
            }
            queue.splice(i, 1);
            i--;
            cb();
          }
        }
      }
      function flushPostFlushCbs(seen) {
        if (pendingPostFlushCbs.length) {
          const deduped = [...new Set(pendingPostFlushCbs)];
          pendingPostFlushCbs.length = 0;
          if (activePostFlushCbs) {
            activePostFlushCbs.push(...deduped);
            return;
          }
          activePostFlushCbs = deduped;
          {
            seen = seen || /* @__PURE__ */ new Map();
          }
          activePostFlushCbs.sort((a2, b) => getId(a2) - getId(b));
          for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
            if (checkRecursiveUpdates(seen, activePostFlushCbs[postFlushIndex])) {
              continue;
            }
            activePostFlushCbs[postFlushIndex]();
          }
          activePostFlushCbs = null;
          postFlushIndex = 0;
        }
      }
      var getId = (job) => job.id == null ? Infinity : job.id;
      var comparator = (a2, b) => {
        const diff = getId(a2) - getId(b);
        if (diff === 0) {
          if (a2.pre && !b.pre)
            return -1;
          if (b.pre && !a2.pre)
            return 1;
        }
        return diff;
      };
      function flushJobs(seen) {
        isFlushPending = false;
        isFlushing = true;
        {
          seen = seen || /* @__PURE__ */ new Map();
        }
        queue.sort(comparator);
        const check = (job) => checkRecursiveUpdates(seen, job);
        try {
          for (flushIndex = 0; flushIndex < queue.length; flushIndex++) {
            const job = queue[flushIndex];
            if (job && job.active !== false) {
              if (check(job)) {
                continue;
              }
              callWithErrorHandling(job, null, 14);
            }
          }
        } finally {
          flushIndex = 0;
          queue.length = 0;
          flushPostFlushCbs(seen);
          isFlushing = false;
          currentFlushPromise = null;
          if (queue.length || pendingPostFlushCbs.length) {
            flushJobs(seen);
          }
        }
      }
      function checkRecursiveUpdates(seen, fn) {
        if (!seen.has(fn)) {
          seen.set(fn, 1);
        } else {
          const count = seen.get(fn);
          if (count > RECURSION_LIMIT) {
            const instance = fn.ownerInstance;
            const componentName = instance && getComponentName(instance.type);
            warn3(
              `Maximum recursive updates exceeded${componentName ? ` in component <${componentName}>` : ``}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`
            );
            return true;
          } else {
            seen.set(fn, count + 1);
          }
        }
      }
      var isHmrUpdating = false;
      var hmrDirtyComponents = /* @__PURE__ */ new Set();
      {
        shared.getGlobalThis().__VUE_HMR_RUNTIME__ = {
          createRecord: tryWrap(createRecord),
          rerender: tryWrap(rerender),
          reload: tryWrap(reload)
        };
      }
      var map = /* @__PURE__ */ new Map();
      function registerHMR(instance) {
        const id2 = instance.type.__hmrId;
        let record = map.get(id2);
        if (!record) {
          createRecord(id2, instance.type);
          record = map.get(id2);
        }
        record.instances.add(instance);
      }
      function unregisterHMR(instance) {
        map.get(instance.type.__hmrId).instances.delete(instance);
      }
      function createRecord(id2, initialDef) {
        if (map.has(id2)) {
          return false;
        }
        map.set(id2, {
          initialDef: normalizeClassComponent(initialDef),
          instances: /* @__PURE__ */ new Set()
        });
        return true;
      }
      function normalizeClassComponent(component) {
        return isClassComponent(component) ? component.__vccOpts : component;
      }
      function rerender(id2, newRender) {
        const record = map.get(id2);
        if (!record) {
          return;
        }
        record.initialDef.render = newRender;
        [...record.instances].forEach((instance) => {
          if (newRender) {
            instance.render = newRender;
            normalizeClassComponent(instance.type).render = newRender;
          }
          instance.renderCache = [];
          isHmrUpdating = true;
          instance.update();
          isHmrUpdating = false;
        });
      }
      function reload(id2, newComp) {
        const record = map.get(id2);
        if (!record)
          return;
        newComp = normalizeClassComponent(newComp);
        updateComponentDef(record.initialDef, newComp);
        const instances = [...record.instances];
        for (const instance of instances) {
          const oldComp = normalizeClassComponent(instance.type);
          if (!hmrDirtyComponents.has(oldComp)) {
            if (oldComp !== record.initialDef) {
              updateComponentDef(oldComp, newComp);
            }
            hmrDirtyComponents.add(oldComp);
          }
          instance.appContext.propsCache.delete(instance.type);
          instance.appContext.emitsCache.delete(instance.type);
          instance.appContext.optionsCache.delete(instance.type);
          if (instance.ceReload) {
            hmrDirtyComponents.add(oldComp);
            instance.ceReload(newComp.styles);
            hmrDirtyComponents.delete(oldComp);
          } else if (instance.parent) {
            queueJob(instance.parent.update);
          } else if (instance.appContext.reload) {
            instance.appContext.reload();
          } else if (typeof window !== "undefined") {
            window.location.reload();
          } else {
            console.warn(
              "[HMR] Root or manually mounted instance modified. Full reload required."
            );
          }
        }
        queuePostFlushCb(() => {
          for (const instance of instances) {
            hmrDirtyComponents.delete(
              normalizeClassComponent(instance.type)
            );
          }
        });
      }
      function updateComponentDef(oldComp, newComp) {
        shared.extend(oldComp, newComp);
        for (const key in oldComp) {
          if (key !== "__file" && !(key in newComp)) {
            delete oldComp[key];
          }
        }
      }
      function tryWrap(fn) {
        return (id2, arg) => {
          try {
            return fn(id2, arg);
          } catch (e2) {
            console.error(e2);
            console.warn(
              `[HMR] Something went wrong during Vue component hot-reload. Full reload required.`
            );
          }
        };
      }
      exports.devtools = void 0;
      var buffer = [];
      var devtoolsNotInstalled = false;
      function emit$1(event, ...args) {
        if (exports.devtools) {
          exports.devtools.emit(event, ...args);
        } else if (!devtoolsNotInstalled) {
          buffer.push({ event, args });
        }
      }
      function setDevtoolsHook(hook, target) {
        var _a2, _b;
        exports.devtools = hook;
        if (exports.devtools) {
          exports.devtools.enabled = true;
          buffer.forEach(({ event, args }) => exports.devtools.emit(event, ...args));
          buffer = [];
        } else if (typeof window !== "undefined" && window.HTMLElement && !((_b = (_a2 = window.navigator) == null ? void 0 : _a2.userAgent) == null ? void 0 : _b.includes("jsdom"))) {
          const replay = target.__VUE_DEVTOOLS_HOOK_REPLAY__ = target.__VUE_DEVTOOLS_HOOK_REPLAY__ || [];
          replay.push((newHook) => {
            setDevtoolsHook(newHook, target);
          });
          setTimeout(() => {
            if (!exports.devtools) {
              target.__VUE_DEVTOOLS_HOOK_REPLAY__ = null;
              devtoolsNotInstalled = true;
              buffer = [];
            }
          }, 3e3);
        } else {
          devtoolsNotInstalled = true;
          buffer = [];
        }
      }
      function devtoolsInitApp(app, version3) {
        emit$1("app:init", app, version3, {
          Fragment: Fragment2,
          Text,
          Comment,
          Static
        });
      }
      function devtoolsUnmountApp(app) {
        emit$1("app:unmount", app);
      }
      var devtoolsComponentAdded = /* @__PURE__ */ createDevtoolsComponentHook(
        "component:added"
      );
      var devtoolsComponentUpdated = /* @__PURE__ */ createDevtoolsComponentHook("component:updated");
      var _devtoolsComponentRemoved = /* @__PURE__ */ createDevtoolsComponentHook(
        "component:removed"
      );
      var devtoolsComponentRemoved = (component) => {
        if (exports.devtools && typeof exports.devtools.cleanupBuffer === "function" && !exports.devtools.cleanupBuffer(component)) {
          _devtoolsComponentRemoved(component);
        }
      };
      function createDevtoolsComponentHook(hook) {
        return (component) => {
          emit$1(
            hook,
            component.appContext.app,
            component.uid,
            component.parent ? component.parent.uid : void 0,
            component
          );
        };
      }
      var devtoolsPerfStart = /* @__PURE__ */ createDevtoolsPerformanceHook(
        "perf:start"
      );
      var devtoolsPerfEnd = /* @__PURE__ */ createDevtoolsPerformanceHook(
        "perf:end"
      );
      function createDevtoolsPerformanceHook(hook) {
        return (component, type, time) => {
          emit$1(hook, component.appContext.app, component.uid, component, type, time);
        };
      }
      function devtoolsComponentEmit(component, event, params) {
        emit$1(
          "component:emit",
          component.appContext.app,
          component,
          event,
          params
        );
      }
      function emit(instance, event, ...rawArgs) {
        if (instance.isUnmounted)
          return;
        const props = instance.vnode.props || shared.EMPTY_OBJ;
        {
          const {
            emitsOptions,
            propsOptions: [propsOptions]
          } = instance;
          if (emitsOptions) {
            if (!(event in emitsOptions) && true) {
              if (!propsOptions || !(shared.toHandlerKey(event) in propsOptions)) {
                warn3(
                  `Component emitted event "${event}" but it is neither declared in the emits option nor as an "${shared.toHandlerKey(event)}" prop.`
                );
              }
            } else {
              const validator = emitsOptions[event];
              if (shared.isFunction(validator)) {
                const isValid = validator(...rawArgs);
                if (!isValid) {
                  warn3(
                    `Invalid event arguments: event validation failed for event "${event}".`
                  );
                }
              }
            }
          }
        }
        let args = rawArgs;
        const isModelListener = event.startsWith("update:");
        const modelArg = isModelListener && event.slice(7);
        if (modelArg && modelArg in props) {
          const modifiersKey = `${modelArg === "modelValue" ? "model" : modelArg}Modifiers`;
          const { number, trim } = props[modifiersKey] || shared.EMPTY_OBJ;
          if (trim) {
            args = rawArgs.map((a2) => shared.isString(a2) ? a2.trim() : a2);
          }
          if (number) {
            args = rawArgs.map(shared.looseToNumber);
          }
        }
        {
          devtoolsComponentEmit(instance, event, args);
        }
        {
          const lowerCaseEvent = event.toLowerCase();
          if (lowerCaseEvent !== event && props[shared.toHandlerKey(lowerCaseEvent)]) {
            warn3(
              `Event "${lowerCaseEvent}" is emitted in component ${formatComponentName(
                instance,
                instance.type
              )} but the handler is registered for "${event}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${shared.hyphenate(event)}" instead of "${event}".`
            );
          }
        }
        let handlerName;
        let handler = props[handlerName = shared.toHandlerKey(event)] || props[handlerName = shared.toHandlerKey(shared.camelize(event))];
        if (!handler && isModelListener) {
          handler = props[handlerName = shared.toHandlerKey(shared.hyphenate(event))];
        }
        if (handler) {
          callWithAsyncErrorHandling(
            handler,
            instance,
            6,
            args
          );
        }
        const onceHandler = props[handlerName + `Once`];
        if (onceHandler) {
          if (!instance.emitted) {
            instance.emitted = {};
          } else if (instance.emitted[handlerName]) {
            return;
          }
          instance.emitted[handlerName] = true;
          callWithAsyncErrorHandling(
            onceHandler,
            instance,
            6,
            args
          );
        }
      }
      function normalizeEmitsOptions(comp, appContext, asMixin = false) {
        const cache = appContext.emitsCache;
        const cached = cache.get(comp);
        if (cached !== void 0) {
          return cached;
        }
        const raw = comp.emits;
        let normalized = {};
        let hasExtends = false;
        if (!shared.isFunction(comp)) {
          const extendEmits = (raw2) => {
            const normalizedFromExtend = normalizeEmitsOptions(raw2, appContext, true);
            if (normalizedFromExtend) {
              hasExtends = true;
              shared.extend(normalized, normalizedFromExtend);
            }
          };
          if (!asMixin && appContext.mixins.length) {
            appContext.mixins.forEach(extendEmits);
          }
          if (comp.extends) {
            extendEmits(comp.extends);
          }
          if (comp.mixins) {
            comp.mixins.forEach(extendEmits);
          }
        }
        if (!raw && !hasExtends) {
          if (shared.isObject(comp)) {
            cache.set(comp, null);
          }
          return null;
        }
        if (shared.isArray(raw)) {
          raw.forEach((key) => normalized[key] = null);
        } else {
          shared.extend(normalized, raw);
        }
        if (shared.isObject(comp)) {
          cache.set(comp, normalized);
        }
        return normalized;
      }
      function isEmitListener(options, key) {
        if (!options || !shared.isOn(key)) {
          return false;
        }
        key = key.slice(2).replace(/Once$/, "");
        return shared.hasOwn(options, key[0].toLowerCase() + key.slice(1)) || shared.hasOwn(options, shared.hyphenate(key)) || shared.hasOwn(options, key);
      }
      var currentRenderingInstance = null;
      var currentScopeId = null;
      function setCurrentRenderingInstance(instance) {
        const prev = currentRenderingInstance;
        currentRenderingInstance = instance;
        currentScopeId = instance && instance.type.__scopeId || null;
        return prev;
      }
      function pushScopeId(id2) {
        currentScopeId = id2;
      }
      function popScopeId() {
        currentScopeId = null;
      }
      var withScopeId = (_id) => withCtx2;
      function withCtx2(fn, ctx = currentRenderingInstance, isNonScopedSlot) {
        if (!ctx)
          return fn;
        if (fn._n) {
          return fn;
        }
        const renderFnWithContext = (...args) => {
          if (renderFnWithContext._d) {
            setBlockTracking(-1);
          }
          const prevInstance = setCurrentRenderingInstance(ctx);
          let res;
          try {
            res = fn(...args);
          } finally {
            setCurrentRenderingInstance(prevInstance);
            if (renderFnWithContext._d) {
              setBlockTracking(1);
            }
          }
          {
            devtoolsComponentUpdated(ctx);
          }
          return res;
        };
        renderFnWithContext._n = true;
        renderFnWithContext._c = true;
        renderFnWithContext._d = true;
        return renderFnWithContext;
      }
      var accessedAttrs = false;
      function markAttrsAccessed() {
        accessedAttrs = true;
      }
      function renderComponentRoot(instance) {
        const {
          type: Component,
          vnode,
          proxy,
          withProxy,
          props,
          propsOptions: [propsOptions],
          slots,
          attrs,
          emit: emit2,
          render: render22,
          renderCache,
          data,
          setupState,
          ctx,
          inheritAttrs
        } = instance;
        let result;
        let fallthroughAttrs;
        const prev = setCurrentRenderingInstance(instance);
        {
          accessedAttrs = false;
        }
        try {
          if (vnode.shapeFlag & 4) {
            const proxyToUse = withProxy || proxy;
            const thisProxy = setupState.__isScriptSetup ? new Proxy(proxyToUse, {
              get(target, key, receiver) {
                warn3(
                  `Property '${String(
                    key
                  )}' was accessed via 'this'. Avoid using 'this' in templates.`
                );
                return Reflect.get(target, key, receiver);
              }
            }) : proxyToUse;
            result = normalizeVNode(
              render22.call(
                thisProxy,
                proxyToUse,
                renderCache,
                props,
                setupState,
                data,
                ctx
              )
            );
            fallthroughAttrs = attrs;
          } else {
            const render23 = Component;
            if (attrs === props) {
              markAttrsAccessed();
            }
            result = normalizeVNode(
              render23.length > 1 ? render23(
                props,
                true ? {
                  get attrs() {
                    markAttrsAccessed();
                    return attrs;
                  },
                  slots,
                  emit: emit2
                } : { attrs, slots, emit: emit2 }
              ) : render23(
                props,
                null
              )
            );
            fallthroughAttrs = Component.props ? attrs : getFunctionalFallthrough(attrs);
          }
        } catch (err) {
          blockStack.length = 0;
          handleError(err, instance, 1);
          result = createVNode2(Comment);
        }
        let root2 = result;
        let setRoot = void 0;
        if (result.patchFlag > 0 && result.patchFlag & 2048) {
          [root2, setRoot] = getChildRoot(result);
        }
        if (fallthroughAttrs && inheritAttrs !== false) {
          const keys = Object.keys(fallthroughAttrs);
          const { shapeFlag } = root2;
          if (keys.length) {
            if (shapeFlag & (1 | 6)) {
              if (propsOptions && keys.some(shared.isModelListener)) {
                fallthroughAttrs = filterModelListeners(
                  fallthroughAttrs,
                  propsOptions
                );
              }
              root2 = cloneVNode(root2, fallthroughAttrs);
            } else if (!accessedAttrs && root2.type !== Comment) {
              const allAttrs = Object.keys(attrs);
              const eventAttrs = [];
              const extraAttrs = [];
              for (let i = 0, l = allAttrs.length; i < l; i++) {
                const key = allAttrs[i];
                if (shared.isOn(key)) {
                  if (!shared.isModelListener(key)) {
                    eventAttrs.push(key[2].toLowerCase() + key.slice(3));
                  }
                } else {
                  extraAttrs.push(key);
                }
              }
              if (extraAttrs.length) {
                warn3(
                  `Extraneous non-props attributes (${extraAttrs.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`
                );
              }
              if (eventAttrs.length) {
                warn3(
                  `Extraneous non-emits event listeners (${eventAttrs.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
                );
              }
            }
          }
        }
        if (vnode.dirs) {
          if (!isElementRoot(root2)) {
            warn3(
              `Runtime directive used on component with non-element root node. The directives will not function as intended.`
            );
          }
          root2 = cloneVNode(root2);
          root2.dirs = root2.dirs ? root2.dirs.concat(vnode.dirs) : vnode.dirs;
        }
        if (vnode.transition) {
          if (!isElementRoot(root2)) {
            warn3(
              `Component inside <Transition> renders non-element root node that cannot be animated.`
            );
          }
          root2.transition = vnode.transition;
        }
        if (setRoot) {
          setRoot(root2);
        } else {
          result = root2;
        }
        setCurrentRenderingInstance(prev);
        return result;
      }
      var getChildRoot = (vnode) => {
        const rawChildren = vnode.children;
        const dynamicChildren = vnode.dynamicChildren;
        const childRoot = filterSingleRoot(rawChildren);
        if (!childRoot) {
          return [vnode, void 0];
        }
        const index = rawChildren.indexOf(childRoot);
        const dynamicIndex = dynamicChildren ? dynamicChildren.indexOf(childRoot) : -1;
        const setRoot = (updatedRoot) => {
          rawChildren[index] = updatedRoot;
          if (dynamicChildren) {
            if (dynamicIndex > -1) {
              dynamicChildren[dynamicIndex] = updatedRoot;
            } else if (updatedRoot.patchFlag > 0) {
              vnode.dynamicChildren = [...dynamicChildren, updatedRoot];
            }
          }
        };
        return [normalizeVNode(childRoot), setRoot];
      };
      function filterSingleRoot(children2) {
        let singleRoot;
        for (let i = 0; i < children2.length; i++) {
          const child = children2[i];
          if (isVNode(child)) {
            if (child.type !== Comment || child.children === "v-if") {
              if (singleRoot) {
                return;
              } else {
                singleRoot = child;
              }
            }
          } else {
            return;
          }
        }
        return singleRoot;
      }
      var getFunctionalFallthrough = (attrs) => {
        let res;
        for (const key in attrs) {
          if (key === "class" || key === "style" || shared.isOn(key)) {
            (res || (res = {}))[key] = attrs[key];
          }
        }
        return res;
      };
      var filterModelListeners = (attrs, props) => {
        const res = {};
        for (const key in attrs) {
          if (!shared.isModelListener(key) || !(key.slice(9) in props)) {
            res[key] = attrs[key];
          }
        }
        return res;
      };
      var isElementRoot = (vnode) => {
        return vnode.shapeFlag & (6 | 1) || vnode.type === Comment;
      };
      function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
        const { props: prevProps, children: prevChildren, component } = prevVNode;
        const { props: nextProps, children: nextChildren, patchFlag } = nextVNode;
        const emits = component.emitsOptions;
        if ((prevChildren || nextChildren) && isHmrUpdating) {
          return true;
        }
        if (nextVNode.dirs || nextVNode.transition) {
          return true;
        }
        if (optimized && patchFlag >= 0) {
          if (patchFlag & 1024) {
            return true;
          }
          if (patchFlag & 16) {
            if (!prevProps) {
              return !!nextProps;
            }
            return hasPropsChanged(prevProps, nextProps, emits);
          } else if (patchFlag & 8) {
            const dynamicProps = nextVNode.dynamicProps;
            for (let i = 0; i < dynamicProps.length; i++) {
              const key = dynamicProps[i];
              if (nextProps[key] !== prevProps[key] && !isEmitListener(emits, key)) {
                return true;
              }
            }
          }
        } else {
          if (prevChildren || nextChildren) {
            if (!nextChildren || !nextChildren.$stable) {
              return true;
            }
          }
          if (prevProps === nextProps) {
            return false;
          }
          if (!prevProps) {
            return !!nextProps;
          }
          if (!nextProps) {
            return true;
          }
          return hasPropsChanged(prevProps, nextProps, emits);
        }
        return false;
      }
      function hasPropsChanged(prevProps, nextProps, emitsOptions) {
        const nextKeys = Object.keys(nextProps);
        if (nextKeys.length !== Object.keys(prevProps).length) {
          return true;
        }
        for (let i = 0; i < nextKeys.length; i++) {
          const key = nextKeys[i];
          if (nextProps[key] !== prevProps[key] && !isEmitListener(emitsOptions, key)) {
            return true;
          }
        }
        return false;
      }
      function updateHOCHostEl({ vnode, parent }, el) {
        while (parent && parent.subTree === vnode) {
          (vnode = parent.vnode).el = el;
          parent = parent.parent;
        }
      }
      var COMPONENTS = "components";
      var DIRECTIVES = "directives";
      function resolveComponent2(name, maybeSelfReference) {
        return resolveAsset(COMPONENTS, name, true, maybeSelfReference) || name;
      }
      var NULL_DYNAMIC_COMPONENT = Symbol.for("v-ndc");
      function resolveDynamicComponent2(component) {
        if (shared.isString(component)) {
          return resolveAsset(COMPONENTS, component, false) || component;
        } else {
          return component || NULL_DYNAMIC_COMPONENT;
        }
      }
      function resolveDirective(name) {
        return resolveAsset(DIRECTIVES, name);
      }
      function resolveAsset(type, name, warnMissing = true, maybeSelfReference = false) {
        const instance = currentRenderingInstance || currentInstance;
        if (instance) {
          const Component = instance.type;
          if (type === COMPONENTS) {
            const selfName = getComponentName(
              Component,
              false
            );
            if (selfName && (selfName === name || selfName === shared.camelize(name) || selfName === shared.capitalize(shared.camelize(name)))) {
              return Component;
            }
          }
          const res = resolve(instance[type] || Component[type], name) || resolve(instance.appContext[type], name);
          if (!res && maybeSelfReference) {
            return Component;
          }
          if (warnMissing && !res) {
            const extra = type === COMPONENTS ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : ``;
            warn3(`Failed to resolve ${type.slice(0, -1)}: ${name}${extra}`);
          }
          return res;
        } else {
          warn3(
            `resolve${shared.capitalize(type.slice(0, -1))} can only be used in render() or setup().`
          );
        }
      }
      function resolve(registry, name) {
        return registry && (registry[name] || registry[shared.camelize(name)] || registry[shared.capitalize(shared.camelize(name))]);
      }
      var isSuspense = (type) => type.__isSuspense;
      var SuspenseImpl = {
        name: "Suspense",
        __isSuspense: true,
        process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, rendererInternals) {
          if (n1 == null) {
            mountSuspense(
              n2,
              container,
              anchor,
              parentComponent,
              parentSuspense,
              isSVG,
              slotScopeIds,
              optimized,
              rendererInternals
            );
          } else {
            patchSuspense(
              n1,
              n2,
              container,
              anchor,
              parentComponent,
              isSVG,
              slotScopeIds,
              optimized,
              rendererInternals
            );
          }
        },
        hydrate: hydrateSuspense,
        create: createSuspenseBoundary,
        normalize: normalizeSuspenseChildren
      };
      var Suspense = SuspenseImpl;
      function triggerEvent(vnode, name) {
        const eventListener = vnode.props && vnode.props[name];
        if (shared.isFunction(eventListener)) {
          eventListener();
        }
      }
      function mountSuspense(vnode, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, rendererInternals) {
        const {
          p: patch,
          o: { createElement }
        } = rendererInternals;
        const hiddenContainer = createElement("div");
        const suspense = vnode.suspense = createSuspenseBoundary(
          vnode,
          parentSuspense,
          parentComponent,
          container,
          hiddenContainer,
          anchor,
          isSVG,
          slotScopeIds,
          optimized,
          rendererInternals
        );
        patch(
          null,
          suspense.pendingBranch = vnode.ssContent,
          hiddenContainer,
          null,
          parentComponent,
          suspense,
          isSVG,
          slotScopeIds
        );
        if (suspense.deps > 0) {
          triggerEvent(vnode, "onPending");
          triggerEvent(vnode, "onFallback");
          patch(
            null,
            vnode.ssFallback,
            container,
            anchor,
            parentComponent,
            null,
            isSVG,
            slotScopeIds
          );
          setActiveBranch(suspense, vnode.ssFallback);
        } else {
          suspense.resolve(false, true);
        }
      }
      function patchSuspense(n1, n2, container, anchor, parentComponent, isSVG, slotScopeIds, optimized, { p: patch, um: unmount, o: { createElement } }) {
        const suspense = n2.suspense = n1.suspense;
        suspense.vnode = n2;
        n2.el = n1.el;
        const newBranch = n2.ssContent;
        const newFallback = n2.ssFallback;
        const { activeBranch, pendingBranch, isInFallback, isHydrating } = suspense;
        if (pendingBranch) {
          suspense.pendingBranch = newBranch;
          if (isSameVNodeType(newBranch, pendingBranch)) {
            patch(
              pendingBranch,
              newBranch,
              suspense.hiddenContainer,
              null,
              parentComponent,
              suspense,
              isSVG,
              slotScopeIds,
              optimized
            );
            if (suspense.deps <= 0) {
              suspense.resolve();
            } else if (isInFallback) {
              patch(
                activeBranch,
                newFallback,
                container,
                anchor,
                parentComponent,
                null,
                isSVG,
                slotScopeIds,
                optimized
              );
              setActiveBranch(suspense, newFallback);
            }
          } else {
            suspense.pendingId++;
            if (isHydrating) {
              suspense.isHydrating = false;
              suspense.activeBranch = pendingBranch;
            } else {
              unmount(pendingBranch, parentComponent, suspense);
            }
            suspense.deps = 0;
            suspense.effects.length = 0;
            suspense.hiddenContainer = createElement("div");
            if (isInFallback) {
              patch(
                null,
                newBranch,
                suspense.hiddenContainer,
                null,
                parentComponent,
                suspense,
                isSVG,
                slotScopeIds,
                optimized
              );
              if (suspense.deps <= 0) {
                suspense.resolve();
              } else {
                patch(
                  activeBranch,
                  newFallback,
                  container,
                  anchor,
                  parentComponent,
                  null,
                  isSVG,
                  slotScopeIds,
                  optimized
                );
                setActiveBranch(suspense, newFallback);
              }
            } else if (activeBranch && isSameVNodeType(newBranch, activeBranch)) {
              patch(
                activeBranch,
                newBranch,
                container,
                anchor,
                parentComponent,
                suspense,
                isSVG,
                slotScopeIds,
                optimized
              );
              suspense.resolve(true);
            } else {
              patch(
                null,
                newBranch,
                suspense.hiddenContainer,
                null,
                parentComponent,
                suspense,
                isSVG,
                slotScopeIds,
                optimized
              );
              if (suspense.deps <= 0) {
                suspense.resolve();
              }
            }
          }
        } else {
          if (activeBranch && isSameVNodeType(newBranch, activeBranch)) {
            patch(
              activeBranch,
              newBranch,
              container,
              anchor,
              parentComponent,
              suspense,
              isSVG,
              slotScopeIds,
              optimized
            );
            setActiveBranch(suspense, newBranch);
          } else {
            triggerEvent(n2, "onPending");
            suspense.pendingBranch = newBranch;
            suspense.pendingId++;
            patch(
              null,
              newBranch,
              suspense.hiddenContainer,
              null,
              parentComponent,
              suspense,
              isSVG,
              slotScopeIds,
              optimized
            );
            if (suspense.deps <= 0) {
              suspense.resolve();
            } else {
              const { timeout: timeout2, pendingId } = suspense;
              if (timeout2 > 0) {
                setTimeout(() => {
                  if (suspense.pendingId === pendingId) {
                    suspense.fallback(newFallback);
                  }
                }, timeout2);
              } else if (timeout2 === 0) {
                suspense.fallback(newFallback);
              }
            }
          }
        }
      }
      var hasWarned = false;
      function createSuspenseBoundary(vnode, parentSuspense, parentComponent, container, hiddenContainer, anchor, isSVG, slotScopeIds, optimized, rendererInternals, isHydrating = false) {
        if (!hasWarned) {
          hasWarned = true;
          console[console.info ? "info" : "log"](
            `<Suspense> is an experimental feature and its API will likely change.`
          );
        }
        const {
          p: patch,
          m: move,
          um: unmount,
          n: next,
          o: { parentNode, remove: remove2 }
        } = rendererInternals;
        let parentSuspenseId;
        const isSuspensible = isVNodeSuspensible(vnode);
        if (isSuspensible) {
          if (parentSuspense == null ? void 0 : parentSuspense.pendingBranch) {
            parentSuspenseId = parentSuspense.pendingId;
            parentSuspense.deps++;
          }
        }
        const timeout2 = vnode.props ? shared.toNumber(vnode.props.timeout) : void 0;
        {
          assertNumber(timeout2, `Suspense timeout`);
        }
        const suspense = {
          vnode,
          parent: parentSuspense,
          parentComponent,
          isSVG,
          container,
          hiddenContainer,
          anchor,
          deps: 0,
          pendingId: 0,
          timeout: typeof timeout2 === "number" ? timeout2 : -1,
          activeBranch: null,
          pendingBranch: null,
          isInFallback: true,
          isHydrating,
          isUnmounted: false,
          effects: [],
          resolve(resume = false, sync = false) {
            {
              if (!resume && !suspense.pendingBranch) {
                throw new Error(
                  `suspense.resolve() is called without a pending branch.`
                );
              }
              if (suspense.isUnmounted) {
                throw new Error(
                  `suspense.resolve() is called on an already unmounted suspense boundary.`
                );
              }
            }
            const {
              vnode: vnode2,
              activeBranch,
              pendingBranch,
              pendingId,
              effects,
              parentComponent: parentComponent2,
              container: container2
            } = suspense;
            let delayEnter = false;
            if (suspense.isHydrating) {
              suspense.isHydrating = false;
            } else if (!resume) {
              delayEnter = activeBranch && pendingBranch.transition && pendingBranch.transition.mode === "out-in";
              if (delayEnter) {
                activeBranch.transition.afterLeave = () => {
                  if (pendingId === suspense.pendingId) {
                    move(pendingBranch, container2, anchor2, 0);
                    queuePostFlushCb(effects);
                  }
                };
              }
              let { anchor: anchor2 } = suspense;
              if (activeBranch) {
                anchor2 = next(activeBranch);
                unmount(activeBranch, parentComponent2, suspense, true);
              }
              if (!delayEnter) {
                move(pendingBranch, container2, anchor2, 0);
              }
            }
            setActiveBranch(suspense, pendingBranch);
            suspense.pendingBranch = null;
            suspense.isInFallback = false;
            let parent = suspense.parent;
            let hasUnresolvedAncestor = false;
            while (parent) {
              if (parent.pendingBranch) {
                parent.effects.push(...effects);
                hasUnresolvedAncestor = true;
                break;
              }
              parent = parent.parent;
            }
            if (!hasUnresolvedAncestor && !delayEnter) {
              queuePostFlushCb(effects);
            }
            suspense.effects = [];
            if (isSuspensible) {
              if (parentSuspense && parentSuspense.pendingBranch && parentSuspenseId === parentSuspense.pendingId) {
                parentSuspense.deps--;
                if (parentSuspense.deps === 0 && !sync) {
                  parentSuspense.resolve();
                }
              }
            }
            triggerEvent(vnode2, "onResolve");
          },
          fallback(fallbackVNode) {
            if (!suspense.pendingBranch) {
              return;
            }
            const { vnode: vnode2, activeBranch, parentComponent: parentComponent2, container: container2, isSVG: isSVG2 } = suspense;
            triggerEvent(vnode2, "onFallback");
            const anchor2 = next(activeBranch);
            const mountFallback = () => {
              if (!suspense.isInFallback) {
                return;
              }
              patch(
                null,
                fallbackVNode,
                container2,
                anchor2,
                parentComponent2,
                null,
                isSVG2,
                slotScopeIds,
                optimized
              );
              setActiveBranch(suspense, fallbackVNode);
            };
            const delayEnter = fallbackVNode.transition && fallbackVNode.transition.mode === "out-in";
            if (delayEnter) {
              activeBranch.transition.afterLeave = mountFallback;
            }
            suspense.isInFallback = true;
            unmount(
              activeBranch,
              parentComponent2,
              null,
              true
            );
            if (!delayEnter) {
              mountFallback();
            }
          },
          move(container2, anchor2, type) {
            suspense.activeBranch && move(suspense.activeBranch, container2, anchor2, type);
            suspense.container = container2;
          },
          next() {
            return suspense.activeBranch && next(suspense.activeBranch);
          },
          registerDep(instance, setupRenderEffect) {
            const isInPendingSuspense = !!suspense.pendingBranch;
            if (isInPendingSuspense) {
              suspense.deps++;
            }
            const hydratedEl = instance.vnode.el;
            instance.asyncDep.catch((err) => {
              handleError(err, instance, 0);
            }).then((asyncSetupResult) => {
              if (instance.isUnmounted || suspense.isUnmounted || suspense.pendingId !== instance.suspenseId) {
                return;
              }
              instance.asyncResolved = true;
              const { vnode: vnode2 } = instance;
              {
                pushWarningContext(vnode2);
              }
              handleSetupResult(instance, asyncSetupResult, false);
              if (hydratedEl) {
                vnode2.el = hydratedEl;
              }
              const placeholder = !hydratedEl && instance.subTree.el;
              setupRenderEffect(
                instance,
                vnode2,
                parentNode(hydratedEl || instance.subTree.el),
                hydratedEl ? null : next(instance.subTree),
                suspense,
                isSVG,
                optimized
              );
              if (placeholder) {
                remove2(placeholder);
              }
              updateHOCHostEl(instance, vnode2.el);
              {
                popWarningContext();
              }
              if (isInPendingSuspense && --suspense.deps === 0) {
                suspense.resolve();
              }
            });
          },
          unmount(parentSuspense2, doRemove) {
            suspense.isUnmounted = true;
            if (suspense.activeBranch) {
              unmount(
                suspense.activeBranch,
                parentComponent,
                parentSuspense2,
                doRemove
              );
            }
            if (suspense.pendingBranch) {
              unmount(
                suspense.pendingBranch,
                parentComponent,
                parentSuspense2,
                doRemove
              );
            }
          }
        };
        return suspense;
      }
      function hydrateSuspense(node, vnode, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, rendererInternals, hydrateNode) {
        const suspense = vnode.suspense = createSuspenseBoundary(
          vnode,
          parentSuspense,
          parentComponent,
          node.parentNode,
          document.createElement("div"),
          null,
          isSVG,
          slotScopeIds,
          optimized,
          rendererInternals,
          true
        );
        const result = hydrateNode(
          node,
          suspense.pendingBranch = vnode.ssContent,
          parentComponent,
          suspense,
          slotScopeIds,
          optimized
        );
        if (suspense.deps === 0) {
          suspense.resolve(false, true);
        }
        return result;
      }
      function normalizeSuspenseChildren(vnode) {
        const { shapeFlag, children: children2 } = vnode;
        const isSlotChildren = shapeFlag & 32;
        vnode.ssContent = normalizeSuspenseSlot(
          isSlotChildren ? children2.default : children2
        );
        vnode.ssFallback = isSlotChildren ? normalizeSuspenseSlot(children2.fallback) : createVNode2(Comment);
      }
      function normalizeSuspenseSlot(s2) {
        let block;
        if (shared.isFunction(s2)) {
          const trackBlock = isBlockTreeEnabled && s2._c;
          if (trackBlock) {
            s2._d = false;
            openBlock2();
          }
          s2 = s2();
          if (trackBlock) {
            s2._d = true;
            block = currentBlock;
            closeBlock();
          }
        }
        if (shared.isArray(s2)) {
          const singleChild = filterSingleRoot(s2);
          if (!singleChild && s2.filter((child) => child !== NULL_DYNAMIC_COMPONENT).length > 0) {
            warn3(`<Suspense> slots expect a single root node.`);
          }
          s2 = singleChild;
        }
        s2 = normalizeVNode(s2);
        if (block && !s2.dynamicChildren) {
          s2.dynamicChildren = block.filter((c) => c !== s2);
        }
        return s2;
      }
      function queueEffectWithSuspense(fn, suspense) {
        if (suspense && suspense.pendingBranch) {
          if (shared.isArray(fn)) {
            suspense.effects.push(...fn);
          } else {
            suspense.effects.push(fn);
          }
        } else {
          queuePostFlushCb(fn);
        }
      }
      function setActiveBranch(suspense, branch) {
        suspense.activeBranch = branch;
        const { vnode, parentComponent } = suspense;
        const el = vnode.el = branch.el;
        if (parentComponent && parentComponent.subTree === vnode) {
          parentComponent.vnode.el = el;
          updateHOCHostEl(parentComponent, el);
        }
      }
      function isVNodeSuspensible(vnode) {
        var _a2;
        return ((_a2 = vnode.props) == null ? void 0 : _a2.suspensible) != null && vnode.props.suspensible !== false;
      }
      function watchEffect4(effect, options) {
        return doWatch(effect, null, options);
      }
      function watchPostEffect(effect, options) {
        return doWatch(
          effect,
          null,
          shared.extend({}, options, { flush: "post" })
        );
      }
      function watchSyncEffect(effect, options) {
        return doWatch(
          effect,
          null,
          shared.extend({}, options, { flush: "sync" })
        );
      }
      var INITIAL_WATCHER_VALUE = {};
      function watch13(source, cb, options) {
        if (!shared.isFunction(cb)) {
          warn3(
            `\`watch(fn, options?)\` signature has been moved to a separate API. Use \`watchEffect(fn, options?)\` instead. \`watch\` now only supports \`watch(source, cb, options?) signature.`
          );
        }
        return doWatch(source, cb, options);
      }
      function doWatch(source, cb, { immediate, deep, flush, onTrack, onTrigger } = shared.EMPTY_OBJ) {
        var _a2;
        if (!cb) {
          if (immediate !== void 0) {
            warn3(
              `watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.`
            );
          }
          if (deep !== void 0) {
            warn3(
              `watch() "deep" option is only respected when using the watch(source, callback, options?) signature.`
            );
          }
        }
        const warnInvalidSource = (s2) => {
          warn3(
            `Invalid watch source: `,
            s2,
            `A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.`
          );
        };
        const instance = reactivity.getCurrentScope() === ((_a2 = currentInstance) == null ? void 0 : _a2.scope) ? currentInstance : null;
        let getter;
        let forceTrigger = false;
        let isMultiSource = false;
        if (reactivity.isRef(source)) {
          getter = () => source.value;
          forceTrigger = reactivity.isShallow(source);
        } else if (reactivity.isReactive(source)) {
          getter = () => source;
          deep = true;
        } else if (shared.isArray(source)) {
          isMultiSource = true;
          forceTrigger = source.some((s2) => reactivity.isReactive(s2) || reactivity.isShallow(s2));
          getter = () => source.map((s2) => {
            if (reactivity.isRef(s2)) {
              return s2.value;
            } else if (reactivity.isReactive(s2)) {
              return traverse(s2);
            } else if (shared.isFunction(s2)) {
              return callWithErrorHandling(s2, instance, 2);
            } else {
              warnInvalidSource(s2);
            }
          });
        } else if (shared.isFunction(source)) {
          if (cb) {
            getter = () => callWithErrorHandling(source, instance, 2);
          } else {
            getter = () => {
              if (instance && instance.isUnmounted) {
                return;
              }
              if (cleanup) {
                cleanup();
              }
              return callWithAsyncErrorHandling(
                source,
                instance,
                3,
                [onCleanup]
              );
            };
          }
        } else {
          getter = shared.NOOP;
          warnInvalidSource(source);
        }
        if (cb && deep) {
          const baseGetter = getter;
          getter = () => traverse(baseGetter());
        }
        let cleanup;
        let onCleanup = (fn) => {
          cleanup = effect.onStop = () => {
            callWithErrorHandling(fn, instance, 4);
            cleanup = effect.onStop = void 0;
          };
        };
        let ssrCleanup;
        if (isInSSRComponentSetup) {
          onCleanup = shared.NOOP;
          if (!cb) {
            getter();
          } else if (immediate) {
            callWithAsyncErrorHandling(cb, instance, 3, [
              getter(),
              isMultiSource ? [] : void 0,
              onCleanup
            ]);
          }
          if (flush === "sync") {
            const ctx = useSSRContext();
            ssrCleanup = ctx.__watcherHandles || (ctx.__watcherHandles = []);
          } else {
            return shared.NOOP;
          }
        }
        let oldValue = isMultiSource ? new Array(source.length).fill(INITIAL_WATCHER_VALUE) : INITIAL_WATCHER_VALUE;
        const job = () => {
          if (!effect.active) {
            return;
          }
          if (cb) {
            const newValue = effect.run();
            if (deep || forceTrigger || (isMultiSource ? newValue.some((v, i) => shared.hasChanged(v, oldValue[i])) : shared.hasChanged(newValue, oldValue)) || false) {
              if (cleanup) {
                cleanup();
              }
              callWithAsyncErrorHandling(cb, instance, 3, [
                newValue,
                oldValue === INITIAL_WATCHER_VALUE ? void 0 : isMultiSource && oldValue[0] === INITIAL_WATCHER_VALUE ? [] : oldValue,
                onCleanup
              ]);
              oldValue = newValue;
            }
          } else {
            effect.run();
          }
        };
        job.allowRecurse = !!cb;
        let scheduler;
        if (flush === "sync") {
          scheduler = job;
        } else if (flush === "post") {
          scheduler = () => queuePostRenderEffect(job, instance && instance.suspense);
        } else {
          job.pre = true;
          if (instance)
            job.id = instance.uid;
          scheduler = () => queueJob(job);
        }
        const effect = new reactivity.ReactiveEffect(getter, scheduler);
        {
          effect.onTrack = onTrack;
          effect.onTrigger = onTrigger;
        }
        if (cb) {
          if (immediate) {
            job();
          } else {
            oldValue = effect.run();
          }
        } else if (flush === "post") {
          queuePostRenderEffect(
            effect.run.bind(effect),
            instance && instance.suspense
          );
        } else {
          effect.run();
        }
        const unwatch = () => {
          effect.stop();
          if (instance && instance.scope) {
            shared.remove(instance.scope.effects, effect);
          }
        };
        if (ssrCleanup)
          ssrCleanup.push(unwatch);
        return unwatch;
      }
      function instanceWatch(source, value, options) {
        const publicThis = this.proxy;
        const getter = shared.isString(source) ? source.includes(".") ? createPathGetter(publicThis, source) : () => publicThis[source] : source.bind(publicThis, publicThis);
        let cb;
        if (shared.isFunction(value)) {
          cb = value;
        } else {
          cb = value.handler;
          options = value;
        }
        const cur = currentInstance;
        setCurrentInstance(this);
        const res = doWatch(getter, cb.bind(publicThis), options);
        if (cur) {
          setCurrentInstance(cur);
        } else {
          unsetCurrentInstance();
        }
        return res;
      }
      function createPathGetter(ctx, path) {
        const segments = path.split(".");
        return () => {
          let cur = ctx;
          for (let i = 0; i < segments.length && cur; i++) {
            cur = cur[segments[i]];
          }
          return cur;
        };
      }
      function traverse(value, seen) {
        if (!shared.isObject(value) || value["__v_skip"]) {
          return value;
        }
        seen = seen || /* @__PURE__ */ new Set();
        if (seen.has(value)) {
          return value;
        }
        seen.add(value);
        if (reactivity.isRef(value)) {
          traverse(value.value, seen);
        } else if (shared.isArray(value)) {
          for (let i = 0; i < value.length; i++) {
            traverse(value[i], seen);
          }
        } else if (shared.isSet(value) || shared.isMap(value)) {
          value.forEach((v) => {
            traverse(v, seen);
          });
        } else if (shared.isPlainObject(value)) {
          for (const key in value) {
            traverse(value[key], seen);
          }
        }
        return value;
      }
      function validateDirectiveName(name) {
        if (shared.isBuiltInDirective(name)) {
          warn3("Do not use built-in directive ids as custom directive id: " + name);
        }
      }
      function withDirectives(vnode, directives) {
        const internalInstance = currentRenderingInstance;
        if (internalInstance === null) {
          warn3(`withDirectives can only be used inside render functions.`);
          return vnode;
        }
        const instance = getExposeProxy(internalInstance) || internalInstance.proxy;
        const bindings = vnode.dirs || (vnode.dirs = []);
        for (let i = 0; i < directives.length; i++) {
          let [dir, value, arg, modifiers = shared.EMPTY_OBJ] = directives[i];
          if (dir) {
            if (shared.isFunction(dir)) {
              dir = {
                mounted: dir,
                updated: dir
              };
            }
            if (dir.deep) {
              traverse(value);
            }
            bindings.push({
              dir,
              instance,
              value,
              oldValue: void 0,
              arg,
              modifiers
            });
          }
        }
        return vnode;
      }
      function invokeDirectiveHook(vnode, prevVNode, instance, name) {
        const bindings = vnode.dirs;
        const oldBindings = prevVNode && prevVNode.dirs;
        for (let i = 0; i < bindings.length; i++) {
          const binding = bindings[i];
          if (oldBindings) {
            binding.oldValue = oldBindings[i].value;
          }
          let hook = binding.dir[name];
          if (hook) {
            reactivity.pauseTracking();
            callWithAsyncErrorHandling(hook, instance, 8, [
              vnode.el,
              binding,
              vnode,
              prevVNode
            ]);
            reactivity.resetTracking();
          }
        }
      }
      var leaveCbKey = Symbol("_leaveCb");
      var enterCbKey = Symbol("_enterCb");
      function useTransitionState() {
        const state = {
          isMounted: false,
          isLeaving: false,
          isUnmounting: false,
          leavingVNodes: /* @__PURE__ */ new Map()
        };
        onMounted11(() => {
          state.isMounted = true;
        });
        onBeforeUnmount3(() => {
          state.isUnmounting = true;
        });
        return state;
      }
      var TransitionHookValidator = [Function, Array];
      var BaseTransitionPropsValidators = {
        mode: String,
        appear: Boolean,
        persisted: Boolean,
        onBeforeEnter: TransitionHookValidator,
        onEnter: TransitionHookValidator,
        onAfterEnter: TransitionHookValidator,
        onEnterCancelled: TransitionHookValidator,
        onBeforeLeave: TransitionHookValidator,
        onLeave: TransitionHookValidator,
        onAfterLeave: TransitionHookValidator,
        onLeaveCancelled: TransitionHookValidator,
        onBeforeAppear: TransitionHookValidator,
        onAppear: TransitionHookValidator,
        onAfterAppear: TransitionHookValidator,
        onAppearCancelled: TransitionHookValidator
      };
      var BaseTransitionImpl = {
        name: `BaseTransition`,
        props: BaseTransitionPropsValidators,
        setup(props, { slots }) {
          const instance = getCurrentInstance5();
          const state = useTransitionState();
          let prevTransitionKey;
          return () => {
            const children2 = slots.default && getTransitionRawChildren(slots.default(), true);
            if (!children2 || !children2.length) {
              return;
            }
            let child = children2[0];
            if (children2.length > 1) {
              let hasFound = false;
              for (const c of children2) {
                if (c.type !== Comment) {
                  if (hasFound) {
                    warn3(
                      "<transition> can only be used on a single element or component. Use <transition-group> for lists."
                    );
                    break;
                  }
                  child = c;
                  hasFound = true;
                }
              }
            }
            const rawProps = reactivity.toRaw(props);
            const { mode } = rawProps;
            if (mode && mode !== "in-out" && mode !== "out-in" && mode !== "default") {
              warn3(`invalid <transition> mode: ${mode}`);
            }
            if (state.isLeaving) {
              return emptyPlaceholder(child);
            }
            const innerChild = getKeepAliveChild(child);
            if (!innerChild) {
              return emptyPlaceholder(child);
            }
            const enterHooks = resolveTransitionHooks(
              innerChild,
              rawProps,
              state,
              instance
            );
            setTransitionHooks(innerChild, enterHooks);
            const oldChild = instance.subTree;
            const oldInnerChild = oldChild && getKeepAliveChild(oldChild);
            let transitionKeyChanged = false;
            const { getTransitionKey } = innerChild.type;
            if (getTransitionKey) {
              const key = getTransitionKey();
              if (prevTransitionKey === void 0) {
                prevTransitionKey = key;
              } else if (key !== prevTransitionKey) {
                prevTransitionKey = key;
                transitionKeyChanged = true;
              }
            }
            if (oldInnerChild && oldInnerChild.type !== Comment && (!isSameVNodeType(innerChild, oldInnerChild) || transitionKeyChanged)) {
              const leavingHooks = resolveTransitionHooks(
                oldInnerChild,
                rawProps,
                state,
                instance
              );
              setTransitionHooks(oldInnerChild, leavingHooks);
              if (mode === "out-in") {
                state.isLeaving = true;
                leavingHooks.afterLeave = () => {
                  state.isLeaving = false;
                  if (instance.update.active !== false) {
                    instance.update();
                  }
                };
                return emptyPlaceholder(child);
              } else if (mode === "in-out" && innerChild.type !== Comment) {
                leavingHooks.delayLeave = (el, earlyRemove, delayedLeave) => {
                  const leavingVNodesCache = getLeavingNodesForType(
                    state,
                    oldInnerChild
                  );
                  leavingVNodesCache[String(oldInnerChild.key)] = oldInnerChild;
                  el[leaveCbKey] = () => {
                    earlyRemove();
                    el[leaveCbKey] = void 0;
                    delete enterHooks.delayedLeave;
                  };
                  enterHooks.delayedLeave = delayedLeave;
                };
              }
            }
            return child;
          };
        }
      };
      var BaseTransition = BaseTransitionImpl;
      function getLeavingNodesForType(state, vnode) {
        const { leavingVNodes } = state;
        let leavingVNodesCache = leavingVNodes.get(vnode.type);
        if (!leavingVNodesCache) {
          leavingVNodesCache = /* @__PURE__ */ Object.create(null);
          leavingVNodes.set(vnode.type, leavingVNodesCache);
        }
        return leavingVNodesCache;
      }
      function resolveTransitionHooks(vnode, props, state, instance) {
        const {
          appear,
          mode,
          persisted = false,
          onBeforeEnter,
          onEnter,
          onAfterEnter,
          onEnterCancelled,
          onBeforeLeave,
          onLeave,
          onAfterLeave,
          onLeaveCancelled,
          onBeforeAppear,
          onAppear,
          onAfterAppear,
          onAppearCancelled
        } = props;
        const key = String(vnode.key);
        const leavingVNodesCache = getLeavingNodesForType(state, vnode);
        const callHook2 = (hook, args) => {
          hook && callWithAsyncErrorHandling(
            hook,
            instance,
            9,
            args
          );
        };
        const callAsyncHook = (hook, args) => {
          const done = args[1];
          callHook2(hook, args);
          if (shared.isArray(hook)) {
            if (hook.every((hook2) => hook2.length <= 1))
              done();
          } else if (hook.length <= 1) {
            done();
          }
        };
        const hooks = {
          mode,
          persisted,
          beforeEnter(el) {
            let hook = onBeforeEnter;
            if (!state.isMounted) {
              if (appear) {
                hook = onBeforeAppear || onBeforeEnter;
              } else {
                return;
              }
            }
            if (el[leaveCbKey]) {
              el[leaveCbKey](
                true
              );
            }
            const leavingVNode = leavingVNodesCache[key];
            if (leavingVNode && isSameVNodeType(vnode, leavingVNode) && leavingVNode.el[leaveCbKey]) {
              leavingVNode.el[leaveCbKey]();
            }
            callHook2(hook, [el]);
          },
          enter(el) {
            let hook = onEnter;
            let afterHook = onAfterEnter;
            let cancelHook = onEnterCancelled;
            if (!state.isMounted) {
              if (appear) {
                hook = onAppear || onEnter;
                afterHook = onAfterAppear || onAfterEnter;
                cancelHook = onAppearCancelled || onEnterCancelled;
              } else {
                return;
              }
            }
            let called = false;
            const done = el[enterCbKey] = (cancelled) => {
              if (called)
                return;
              called = true;
              if (cancelled) {
                callHook2(cancelHook, [el]);
              } else {
                callHook2(afterHook, [el]);
              }
              if (hooks.delayedLeave) {
                hooks.delayedLeave();
              }
              el[enterCbKey] = void 0;
            };
            if (hook) {
              callAsyncHook(hook, [el, done]);
            } else {
              done();
            }
          },
          leave(el, remove2) {
            const key2 = String(vnode.key);
            if (el[enterCbKey]) {
              el[enterCbKey](
                true
              );
            }
            if (state.isUnmounting) {
              return remove2();
            }
            callHook2(onBeforeLeave, [el]);
            let called = false;
            const done = el[leaveCbKey] = (cancelled) => {
              if (called)
                return;
              called = true;
              remove2();
              if (cancelled) {
                callHook2(onLeaveCancelled, [el]);
              } else {
                callHook2(onAfterLeave, [el]);
              }
              el[leaveCbKey] = void 0;
              if (leavingVNodesCache[key2] === vnode) {
                delete leavingVNodesCache[key2];
              }
            };
            leavingVNodesCache[key2] = vnode;
            if (onLeave) {
              callAsyncHook(onLeave, [el, done]);
            } else {
              done();
            }
          },
          clone(vnode2) {
            return resolveTransitionHooks(vnode2, props, state, instance);
          }
        };
        return hooks;
      }
      function emptyPlaceholder(vnode) {
        if (isKeepAlive(vnode)) {
          vnode = cloneVNode(vnode);
          vnode.children = null;
          return vnode;
        }
      }
      function getKeepAliveChild(vnode) {
        return isKeepAlive(vnode) ? vnode.component ? vnode.component.subTree : vnode.children ? vnode.children[0] : void 0 : vnode;
      }
      function setTransitionHooks(vnode, hooks) {
        if (vnode.shapeFlag & 6 && vnode.component) {
          setTransitionHooks(vnode.component.subTree, hooks);
        } else if (vnode.shapeFlag & 128) {
          vnode.ssContent.transition = hooks.clone(vnode.ssContent);
          vnode.ssFallback.transition = hooks.clone(vnode.ssFallback);
        } else {
          vnode.transition = hooks;
        }
      }
      function getTransitionRawChildren(children2, keepComment = false, parentKey) {
        let ret = [];
        let keyedFragmentCount = 0;
        for (let i = 0; i < children2.length; i++) {
          let child = children2[i];
          const key = parentKey == null ? child.key : String(parentKey) + String(child.key != null ? child.key : i);
          if (child.type === Fragment2) {
            if (child.patchFlag & 128)
              keyedFragmentCount++;
            ret = ret.concat(
              getTransitionRawChildren(child.children, keepComment, key)
            );
          } else if (keepComment || child.type !== Comment) {
            ret.push(key != null ? cloneVNode(child, { key }) : child);
          }
        }
        if (keyedFragmentCount > 1) {
          for (let i = 0; i < ret.length; i++) {
            ret[i].patchFlag = -2;
          }
        }
        return ret;
      }
      function defineComponent2(options, extraOptions) {
        return shared.isFunction(options) ? /* @__PURE__ */ (() => shared.extend({ name: options.name }, extraOptions, { setup: options }))() : options;
      }
      var isAsyncWrapper = (i) => !!i.type.__asyncLoader;
      function defineAsyncComponent(source) {
        if (shared.isFunction(source)) {
          source = { loader: source };
        }
        const {
          loader,
          loadingComponent,
          errorComponent,
          delay = 200,
          timeout: timeout2,
          suspensible = true,
          onError: userOnError
        } = source;
        let pendingRequest = null;
        let resolvedComp;
        let retries = 0;
        const retry = () => {
          retries++;
          pendingRequest = null;
          return load();
        };
        const load = () => {
          let thisRequest;
          return pendingRequest || (thisRequest = pendingRequest = loader().catch((err) => {
            err = err instanceof Error ? err : new Error(String(err));
            if (userOnError) {
              return new Promise((resolve2, reject) => {
                const userRetry = () => resolve2(retry());
                const userFail = () => reject(err);
                userOnError(err, userRetry, userFail, retries + 1);
              });
            } else {
              throw err;
            }
          }).then((comp) => {
            if (thisRequest !== pendingRequest && pendingRequest) {
              return pendingRequest;
            }
            if (!comp) {
              warn3(
                `Async component loader resolved to undefined. If you are using retry(), make sure to return its return value.`
              );
            }
            if (comp && (comp.__esModule || comp[Symbol.toStringTag] === "Module")) {
              comp = comp.default;
            }
            if (comp && !shared.isObject(comp) && !shared.isFunction(comp)) {
              throw new Error(`Invalid async component load result: ${comp}`);
            }
            resolvedComp = comp;
            return comp;
          }));
        };
        return defineComponent2({
          name: "AsyncComponentWrapper",
          __asyncLoader: load,
          get __asyncResolved() {
            return resolvedComp;
          },
          setup() {
            const instance = currentInstance;
            if (resolvedComp) {
              return () => createInnerComp(resolvedComp, instance);
            }
            const onError = (err) => {
              pendingRequest = null;
              handleError(
                err,
                instance,
                13,
                !errorComponent
              );
            };
            if (suspensible && instance.suspense || isInSSRComponentSetup) {
              return load().then((comp) => {
                return () => createInnerComp(comp, instance);
              }).catch((err) => {
                onError(err);
                return () => errorComponent ? createVNode2(errorComponent, {
                  error: err
                }) : null;
              });
            }
            const loaded = reactivity.ref(false);
            const error = reactivity.ref();
            const delayed = reactivity.ref(!!delay);
            if (delay) {
              setTimeout(() => {
                delayed.value = false;
              }, delay);
            }
            if (timeout2 != null) {
              setTimeout(() => {
                if (!loaded.value && !error.value) {
                  const err = new Error(
                    `Async component timed out after ${timeout2}ms.`
                  );
                  onError(err);
                  error.value = err;
                }
              }, timeout2);
            }
            load().then(() => {
              loaded.value = true;
              if (instance.parent && isKeepAlive(instance.parent.vnode)) {
                queueJob(instance.parent.update);
              }
            }).catch((err) => {
              onError(err);
              error.value = err;
            });
            return () => {
              if (loaded.value && resolvedComp) {
                return createInnerComp(resolvedComp, instance);
              } else if (error.value && errorComponent) {
                return createVNode2(errorComponent, {
                  error: error.value
                });
              } else if (loadingComponent && !delayed.value) {
                return createVNode2(loadingComponent);
              }
            };
          }
        });
      }
      function createInnerComp(comp, parent) {
        const { ref: ref22, props, children: children2, ce } = parent.vnode;
        const vnode = createVNode2(comp, props, children2);
        vnode.ref = ref22;
        vnode.ce = ce;
        delete parent.vnode.ce;
        return vnode;
      }
      var isKeepAlive = (vnode) => vnode.type.__isKeepAlive;
      var KeepAliveImpl = {
        name: `KeepAlive`,
        __isKeepAlive: true,
        props: {
          include: [String, RegExp, Array],
          exclude: [String, RegExp, Array],
          max: [String, Number]
        },
        setup(props, { slots }) {
          const instance = getCurrentInstance5();
          const sharedContext = instance.ctx;
          if (!sharedContext.renderer) {
            return () => {
              const children2 = slots.default && slots.default();
              return children2 && children2.length === 1 ? children2[0] : children2;
            };
          }
          const cache = /* @__PURE__ */ new Map();
          const keys = /* @__PURE__ */ new Set();
          let current = null;
          {
            instance.__v_cache = cache;
          }
          const parentSuspense = instance.suspense;
          const {
            renderer: {
              p: patch,
              m: move,
              um: _unmount,
              o: { createElement }
            }
          } = sharedContext;
          const storageContainer = createElement("div");
          sharedContext.activate = (vnode, container, anchor, isSVG, optimized) => {
            const instance2 = vnode.component;
            move(vnode, container, anchor, 0, parentSuspense);
            patch(
              instance2.vnode,
              vnode,
              container,
              anchor,
              instance2,
              parentSuspense,
              isSVG,
              vnode.slotScopeIds,
              optimized
            );
            queuePostRenderEffect(() => {
              instance2.isDeactivated = false;
              if (instance2.a) {
                shared.invokeArrayFns(instance2.a);
              }
              const vnodeHook = vnode.props && vnode.props.onVnodeMounted;
              if (vnodeHook) {
                invokeVNodeHook(vnodeHook, instance2.parent, vnode);
              }
            }, parentSuspense);
            {
              devtoolsComponentAdded(instance2);
            }
          };
          sharedContext.deactivate = (vnode) => {
            const instance2 = vnode.component;
            move(vnode, storageContainer, null, 1, parentSuspense);
            queuePostRenderEffect(() => {
              if (instance2.da) {
                shared.invokeArrayFns(instance2.da);
              }
              const vnodeHook = vnode.props && vnode.props.onVnodeUnmounted;
              if (vnodeHook) {
                invokeVNodeHook(vnodeHook, instance2.parent, vnode);
              }
              instance2.isDeactivated = true;
            }, parentSuspense);
            {
              devtoolsComponentAdded(instance2);
            }
          };
          function unmount(vnode) {
            resetShapeFlag(vnode);
            _unmount(vnode, instance, parentSuspense, true);
          }
          function pruneCache(filter2) {
            cache.forEach((vnode, key) => {
              const name = getComponentName(vnode.type);
              if (name && (!filter2 || !filter2(name))) {
                pruneCacheEntry(key);
              }
            });
          }
          function pruneCacheEntry(key) {
            const cached = cache.get(key);
            if (!current || !isSameVNodeType(cached, current)) {
              unmount(cached);
            } else if (current) {
              resetShapeFlag(current);
            }
            cache.delete(key);
            keys.delete(key);
          }
          watch13(
            () => [props.include, props.exclude],
            ([include, exclude]) => {
              include && pruneCache((name) => matches(include, name));
              exclude && pruneCache((name) => !matches(exclude, name));
            },
            { flush: "post", deep: true }
          );
          let pendingCacheKey = null;
          const cacheSubtree = () => {
            if (pendingCacheKey != null) {
              cache.set(pendingCacheKey, getInnerChild(instance.subTree));
            }
          };
          onMounted11(cacheSubtree);
          onUpdated2(cacheSubtree);
          onBeforeUnmount3(() => {
            cache.forEach((cached) => {
              const { subTree, suspense } = instance;
              const vnode = getInnerChild(subTree);
              if (cached.type === vnode.type && cached.key === vnode.key) {
                resetShapeFlag(vnode);
                const da = vnode.component.da;
                da && queuePostRenderEffect(da, suspense);
                return;
              }
              unmount(cached);
            });
          });
          return () => {
            pendingCacheKey = null;
            if (!slots.default) {
              return null;
            }
            const children2 = slots.default();
            const rawVNode = children2[0];
            if (children2.length > 1) {
              {
                warn3(`KeepAlive should contain exactly one component child.`);
              }
              current = null;
              return children2;
            } else if (!isVNode(rawVNode) || !(rawVNode.shapeFlag & 4) && !(rawVNode.shapeFlag & 128)) {
              current = null;
              return rawVNode;
            }
            let vnode = getInnerChild(rawVNode);
            const comp = vnode.type;
            const name = getComponentName(
              isAsyncWrapper(vnode) ? vnode.type.__asyncResolved || {} : comp
            );
            const { include, exclude, max } = props;
            if (include && (!name || !matches(include, name)) || exclude && name && matches(exclude, name)) {
              current = vnode;
              return rawVNode;
            }
            const key = vnode.key == null ? comp : vnode.key;
            const cachedVNode = cache.get(key);
            if (vnode.el) {
              vnode = cloneVNode(vnode);
              if (rawVNode.shapeFlag & 128) {
                rawVNode.ssContent = vnode;
              }
            }
            pendingCacheKey = key;
            if (cachedVNode) {
              vnode.el = cachedVNode.el;
              vnode.component = cachedVNode.component;
              if (vnode.transition) {
                setTransitionHooks(vnode, vnode.transition);
              }
              vnode.shapeFlag |= 512;
              keys.delete(key);
              keys.add(key);
            } else {
              keys.add(key);
              if (max && keys.size > parseInt(max, 10)) {
                pruneCacheEntry(keys.values().next().value);
              }
            }
            vnode.shapeFlag |= 256;
            current = vnode;
            return isSuspense(rawVNode.type) ? rawVNode : vnode;
          };
        }
      };
      var KeepAlive = KeepAliveImpl;
      function matches(pattern, name) {
        if (shared.isArray(pattern)) {
          return pattern.some((p) => matches(p, name));
        } else if (shared.isString(pattern)) {
          return pattern.split(",").includes(name);
        } else if (shared.isRegExp(pattern)) {
          return pattern.test(name);
        }
        return false;
      }
      function onActivated(hook, target) {
        registerKeepAliveHook(hook, "a", target);
      }
      function onDeactivated(hook, target) {
        registerKeepAliveHook(hook, "da", target);
      }
      function registerKeepAliveHook(hook, type, target = currentInstance) {
        const wrappedHook = hook.__wdc || (hook.__wdc = () => {
          let current = target;
          while (current) {
            if (current.isDeactivated) {
              return;
            }
            current = current.parent;
          }
          return hook();
        });
        injectHook(type, wrappedHook, target);
        if (target) {
          let current = target.parent;
          while (current && current.parent) {
            if (isKeepAlive(current.parent.vnode)) {
              injectToKeepAliveRoot(wrappedHook, type, target, current);
            }
            current = current.parent;
          }
        }
      }
      function injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
        const injected = injectHook(
          type,
          hook,
          keepAliveRoot,
          true
        );
        onUnmounted3(() => {
          shared.remove(keepAliveRoot[type], injected);
        }, target);
      }
      function resetShapeFlag(vnode) {
        vnode.shapeFlag &= ~256;
        vnode.shapeFlag &= ~512;
      }
      function getInnerChild(vnode) {
        return vnode.shapeFlag & 128 ? vnode.ssContent : vnode;
      }
      function injectHook(type, hook, target = currentInstance, prepend = false) {
        if (target) {
          const hooks = target[type] || (target[type] = []);
          const wrappedHook = hook.__weh || (hook.__weh = (...args) => {
            if (target.isUnmounted) {
              return;
            }
            reactivity.pauseTracking();
            setCurrentInstance(target);
            const res = callWithAsyncErrorHandling(hook, target, type, args);
            unsetCurrentInstance();
            reactivity.resetTracking();
            return res;
          });
          if (prepend) {
            hooks.unshift(wrappedHook);
          } else {
            hooks.push(wrappedHook);
          }
          return wrappedHook;
        } else {
          const apiName = shared.toHandlerKey(ErrorTypeStrings[type].replace(/ hook$/, ""));
          warn3(
            `${apiName} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
          );
        }
      }
      var createHook = (lifecycle) => (hook, target = currentInstance) => (!isInSSRComponentSetup || lifecycle === "sp") && injectHook(lifecycle, (...args) => hook(...args), target);
      var onBeforeMount3 = createHook("bm");
      var onMounted11 = createHook("m");
      var onBeforeUpdate2 = createHook("bu");
      var onUpdated2 = createHook("u");
      var onBeforeUnmount3 = createHook("bum");
      var onUnmounted3 = createHook("um");
      var onServerPrefetch = createHook("sp");
      var onRenderTriggered = createHook(
        "rtg"
      );
      var onRenderTracked = createHook(
        "rtc"
      );
      function onErrorCaptured(hook, target = currentInstance) {
        injectHook("ec", hook, target);
      }
      function renderList2(source, renderItem, cache, index) {
        let ret;
        const cached = cache && cache[index];
        if (shared.isArray(source) || shared.isString(source)) {
          ret = new Array(source.length);
          for (let i = 0, l = source.length; i < l; i++) {
            ret[i] = renderItem(source[i], i, void 0, cached && cached[i]);
          }
        } else if (typeof source === "number") {
          if (!Number.isInteger(source)) {
            warn3(`The v-for range expect an integer value but got ${source}.`);
          }
          ret = new Array(source);
          for (let i = 0; i < source; i++) {
            ret[i] = renderItem(i + 1, i, void 0, cached && cached[i]);
          }
        } else if (shared.isObject(source)) {
          if (source[Symbol.iterator]) {
            ret = Array.from(
              source,
              (item, i) => renderItem(item, i, void 0, cached && cached[i])
            );
          } else {
            const keys = Object.keys(source);
            ret = new Array(keys.length);
            for (let i = 0, l = keys.length; i < l; i++) {
              const key = keys[i];
              ret[i] = renderItem(source[key], key, i, cached && cached[i]);
            }
          }
        } else {
          ret = [];
        }
        if (cache) {
          cache[index] = ret;
        }
        return ret;
      }
      function createSlots(slots, dynamicSlots) {
        for (let i = 0; i < dynamicSlots.length; i++) {
          const slot = dynamicSlots[i];
          if (shared.isArray(slot)) {
            for (let j = 0; j < slot.length; j++) {
              slots[slot[j].name] = slot[j].fn;
            }
          } else if (slot) {
            slots[slot.name] = slot.key ? (...args) => {
              const res = slot.fn(...args);
              if (res)
                res.key = slot.key;
              return res;
            } : slot.fn;
          }
        }
        return slots;
      }
      function renderSlot2(slots, name, props = {}, fallback, noSlotted) {
        if (currentRenderingInstance.isCE || currentRenderingInstance.parent && isAsyncWrapper(currentRenderingInstance.parent) && currentRenderingInstance.parent.isCE) {
          if (name !== "default")
            props.name = name;
          return createVNode2("slot", props, fallback && fallback());
        }
        let slot = slots[name];
        if (slot && slot.length > 1) {
          warn3(
            `SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template.`
          );
          slot = () => [];
        }
        if (slot && slot._c) {
          slot._d = false;
        }
        openBlock2();
        const validSlotContent = slot && ensureValidVNode(slot(props));
        const rendered = createBlock2(
          Fragment2,
          {
            key: props.key || validSlotContent && validSlotContent.key || `_${name}`
          },
          validSlotContent || (fallback ? fallback() : []),
          validSlotContent && slots._ === 1 ? 64 : -2
        );
        if (!noSlotted && rendered.scopeId) {
          rendered.slotScopeIds = [rendered.scopeId + "-s"];
        }
        if (slot && slot._c) {
          slot._d = true;
        }
        return rendered;
      }
      function ensureValidVNode(vnodes) {
        return vnodes.some((child) => {
          if (!isVNode(child))
            return true;
          if (child.type === Comment)
            return false;
          if (child.type === Fragment2 && !ensureValidVNode(child.children))
            return false;
          return true;
        }) ? vnodes : null;
      }
      function toHandlers(obj, preserveCaseIfNecessary) {
        const ret = {};
        if (!shared.isObject(obj)) {
          warn3(`v-on with no argument expects an object value.`);
          return ret;
        }
        for (const key in obj) {
          ret[preserveCaseIfNecessary && /[A-Z]/.test(key) ? `on:${key}` : shared.toHandlerKey(key)] = obj[key];
        }
        return ret;
      }
      var getPublicInstance = (i) => {
        if (!i)
          return null;
        if (isStatefulComponent(i))
          return getExposeProxy(i) || i.proxy;
        return getPublicInstance(i.parent);
      };
      var publicPropertiesMap = /* @__PURE__ */ shared.extend(/* @__PURE__ */ Object.create(null), {
        $: (i) => i,
        $el: (i) => i.vnode.el,
        $data: (i) => i.data,
        $props: (i) => reactivity.shallowReadonly(i.props),
        $attrs: (i) => reactivity.shallowReadonly(i.attrs),
        $slots: (i) => reactivity.shallowReadonly(i.slots),
        $refs: (i) => reactivity.shallowReadonly(i.refs),
        $parent: (i) => getPublicInstance(i.parent),
        $root: (i) => getPublicInstance(i.root),
        $emit: (i) => i.emit,
        $options: (i) => resolveMergedOptions(i),
        $forceUpdate: (i) => i.f || (i.f = () => queueJob(i.update)),
        $nextTick: (i) => i.n || (i.n = nextTick9.bind(i.proxy)),
        $watch: (i) => instanceWatch.bind(i)
      });
      var isReservedPrefix = (key) => key === "_" || key === "$";
      var hasSetupBinding = (state, key) => state !== shared.EMPTY_OBJ && !state.__isScriptSetup && shared.hasOwn(state, key);
      var PublicInstanceProxyHandlers = {
        get({ _: instance }, key) {
          const { ctx, setupState, data, props, accessCache, type, appContext } = instance;
          if (key === "__isVue") {
            return true;
          }
          let normalizedProps;
          if (key[0] !== "$") {
            const n = accessCache[key];
            if (n !== void 0) {
              switch (n) {
                case 1:
                  return setupState[key];
                case 2:
                  return data[key];
                case 4:
                  return ctx[key];
                case 3:
                  return props[key];
              }
            } else if (hasSetupBinding(setupState, key)) {
              accessCache[key] = 1;
              return setupState[key];
            } else if (data !== shared.EMPTY_OBJ && shared.hasOwn(data, key)) {
              accessCache[key] = 2;
              return data[key];
            } else if ((normalizedProps = instance.propsOptions[0]) && shared.hasOwn(normalizedProps, key)) {
              accessCache[key] = 3;
              return props[key];
            } else if (ctx !== shared.EMPTY_OBJ && shared.hasOwn(ctx, key)) {
              accessCache[key] = 4;
              return ctx[key];
            } else if (shouldCacheAccess) {
              accessCache[key] = 0;
            }
          }
          const publicGetter = publicPropertiesMap[key];
          let cssModule, globalProperties;
          if (publicGetter) {
            if (key === "$attrs") {
              reactivity.track(instance, "get", key);
              markAttrsAccessed();
            } else if (key === "$slots") {
              reactivity.track(instance, "get", key);
            }
            return publicGetter(instance);
          } else if ((cssModule = type.__cssModules) && (cssModule = cssModule[key])) {
            return cssModule;
          } else if (ctx !== shared.EMPTY_OBJ && shared.hasOwn(ctx, key)) {
            accessCache[key] = 4;
            return ctx[key];
          } else if (globalProperties = appContext.config.globalProperties, shared.hasOwn(globalProperties, key)) {
            {
              return globalProperties[key];
            }
          } else if (currentRenderingInstance && (!shared.isString(key) || key.indexOf("__v") !== 0)) {
            if (data !== shared.EMPTY_OBJ && isReservedPrefix(key[0]) && shared.hasOwn(data, key)) {
              warn3(
                `Property ${JSON.stringify(
                  key
                )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
              );
            } else if (instance === currentRenderingInstance) {
              warn3(
                `Property ${JSON.stringify(key)} was accessed during render but is not defined on instance.`
              );
            }
          }
        },
        set({ _: instance }, key, value) {
          const { data, setupState, ctx } = instance;
          if (hasSetupBinding(setupState, key)) {
            setupState[key] = value;
            return true;
          } else if (setupState.__isScriptSetup && shared.hasOwn(setupState, key)) {
            warn3(`Cannot mutate <script setup> binding "${key}" from Options API.`);
            return false;
          } else if (data !== shared.EMPTY_OBJ && shared.hasOwn(data, key)) {
            data[key] = value;
            return true;
          } else if (shared.hasOwn(instance.props, key)) {
            warn3(`Attempting to mutate prop "${key}". Props are readonly.`);
            return false;
          }
          if (key[0] === "$" && key.slice(1) in instance) {
            warn3(
              `Attempting to mutate public property "${key}". Properties starting with $ are reserved and readonly.`
            );
            return false;
          } else {
            if (key in instance.appContext.config.globalProperties) {
              Object.defineProperty(ctx, key, {
                enumerable: true,
                configurable: true,
                value
              });
            } else {
              ctx[key] = value;
            }
          }
          return true;
        },
        has({
          _: { data, setupState, accessCache, ctx, appContext, propsOptions }
        }, key) {
          let normalizedProps;
          return !!accessCache[key] || data !== shared.EMPTY_OBJ && shared.hasOwn(data, key) || hasSetupBinding(setupState, key) || (normalizedProps = propsOptions[0]) && shared.hasOwn(normalizedProps, key) || shared.hasOwn(ctx, key) || shared.hasOwn(publicPropertiesMap, key) || shared.hasOwn(appContext.config.globalProperties, key);
        },
        defineProperty(target, key, descriptor) {
          if (descriptor.get != null) {
            target._.accessCache[key] = 0;
          } else if (shared.hasOwn(descriptor, "value")) {
            this.set(target, key, descriptor.value, null);
          }
          return Reflect.defineProperty(target, key, descriptor);
        }
      };
      {
        PublicInstanceProxyHandlers.ownKeys = (target) => {
          warn3(
            `Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead.`
          );
          return Reflect.ownKeys(target);
        };
      }
      var RuntimeCompiledPublicInstanceProxyHandlers = /* @__PURE__ */ shared.extend(
        {},
        PublicInstanceProxyHandlers,
        {
          get(target, key) {
            if (key === Symbol.unscopables) {
              return;
            }
            return PublicInstanceProxyHandlers.get(target, key, target);
          },
          has(_, key) {
            const has = key[0] !== "_" && !shared.isGloballyAllowed(key);
            if (!has && PublicInstanceProxyHandlers.has(_, key)) {
              warn3(
                `Property ${JSON.stringify(
                  key
                )} should not start with _ which is a reserved prefix for Vue internals.`
              );
            }
            return has;
          }
        }
      );
      function createDevRenderContext(instance) {
        const target = {};
        Object.defineProperty(target, `_`, {
          configurable: true,
          enumerable: false,
          get: () => instance
        });
        Object.keys(publicPropertiesMap).forEach((key) => {
          Object.defineProperty(target, key, {
            configurable: true,
            enumerable: false,
            get: () => publicPropertiesMap[key](instance),
            set: shared.NOOP
          });
        });
        return target;
      }
      function exposePropsOnRenderContext(instance) {
        const {
          ctx,
          propsOptions: [propsOptions]
        } = instance;
        if (propsOptions) {
          Object.keys(propsOptions).forEach((key) => {
            Object.defineProperty(ctx, key, {
              enumerable: true,
              configurable: true,
              get: () => instance.props[key],
              set: shared.NOOP
            });
          });
        }
      }
      function exposeSetupStateOnRenderContext(instance) {
        const { ctx, setupState } = instance;
        Object.keys(reactivity.toRaw(setupState)).forEach((key) => {
          if (!setupState.__isScriptSetup) {
            if (isReservedPrefix(key[0])) {
              warn3(
                `setup() return property ${JSON.stringify(
                  key
                )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
              );
              return;
            }
            Object.defineProperty(ctx, key, {
              enumerable: true,
              configurable: true,
              get: () => setupState[key],
              set: shared.NOOP
            });
          }
        });
      }
      var warnRuntimeUsage = (method) => warn3(
        `${method}() is a compiler-hint helper that is only usable inside <script setup> of a single file component. Its arguments should be compiled away and passing it at runtime has no effect.`
      );
      function defineProps() {
        {
          warnRuntimeUsage(`defineProps`);
        }
        return null;
      }
      function defineEmits() {
        {
          warnRuntimeUsage(`defineEmits`);
        }
        return null;
      }
      function defineExpose(exposed) {
        {
          warnRuntimeUsage(`defineExpose`);
        }
      }
      function defineOptions(options) {
        {
          warnRuntimeUsage(`defineOptions`);
        }
      }
      function defineSlots() {
        {
          warnRuntimeUsage(`defineSlots`);
        }
        return null;
      }
      function defineModel() {
        {
          warnRuntimeUsage("defineModel");
        }
      }
      function withDefaults(props, defaults) {
        {
          warnRuntimeUsage(`withDefaults`);
        }
        return null;
      }
      function useSlots8() {
        return getContext().slots;
      }
      function useAttrs2() {
        return getContext().attrs;
      }
      function useModel(props, name, options) {
        const i = getCurrentInstance5();
        if (!i) {
          warn3(`useModel() called without active instance.`);
          return reactivity.ref();
        }
        if (!i.propsOptions[0][name]) {
          warn3(`useModel() called with prop "${name}" which is not declared.`);
          return reactivity.ref();
        }
        if (options && options.local) {
          const proxy = reactivity.ref(props[name]);
          watch13(
            () => props[name],
            (v) => proxy.value = v
          );
          watch13(proxy, (value) => {
            if (value !== props[name]) {
              i.emit(`update:${name}`, value);
            }
          });
          return proxy;
        } else {
          return {
            __v_isRef: true,
            get value() {
              return props[name];
            },
            set value(value) {
              i.emit(`update:${name}`, value);
            }
          };
        }
      }
      function getContext() {
        const i = getCurrentInstance5();
        if (!i) {
          warn3(`useContext() called without active instance.`);
        }
        return i.setupContext || (i.setupContext = createSetupContext(i));
      }
      function normalizePropsOrEmits(props) {
        return shared.isArray(props) ? props.reduce(
          (normalized, p) => (normalized[p] = null, normalized),
          {}
        ) : props;
      }
      function mergeDefaults(raw, defaults) {
        const props = normalizePropsOrEmits(raw);
        for (const key in defaults) {
          if (key.startsWith("__skip"))
            continue;
          let opt = props[key];
          if (opt) {
            if (shared.isArray(opt) || shared.isFunction(opt)) {
              opt = props[key] = { type: opt, default: defaults[key] };
            } else {
              opt.default = defaults[key];
            }
          } else if (opt === null) {
            opt = props[key] = { default: defaults[key] };
          } else {
            warn3(`props default key "${key}" has no corresponding declaration.`);
          }
          if (opt && defaults[`__skip_${key}`]) {
            opt.skipFactory = true;
          }
        }
        return props;
      }
      function mergeModels(a2, b) {
        if (!a2 || !b)
          return a2 || b;
        if (shared.isArray(a2) && shared.isArray(b))
          return a2.concat(b);
        return shared.extend({}, normalizePropsOrEmits(a2), normalizePropsOrEmits(b));
      }
      function createPropsRestProxy2(props, excludedKeys) {
        const ret = {};
        for (const key in props) {
          if (!excludedKeys.includes(key)) {
            Object.defineProperty(ret, key, {
              enumerable: true,
              get: () => props[key]
            });
          }
        }
        return ret;
      }
      function withAsyncContext(getAwaitable) {
        const ctx = getCurrentInstance5();
        if (!ctx) {
          warn3(
            `withAsyncContext called without active current instance. This is likely a bug.`
          );
        }
        let awaitable = getAwaitable();
        unsetCurrentInstance();
        if (shared.isPromise(awaitable)) {
          awaitable = awaitable.catch((e2) => {
            setCurrentInstance(ctx);
            throw e2;
          });
        }
        return [awaitable, () => setCurrentInstance(ctx)];
      }
      function createDuplicateChecker() {
        const cache = /* @__PURE__ */ Object.create(null);
        return (type, key) => {
          if (cache[key]) {
            warn3(`${type} property "${key}" is already defined in ${cache[key]}.`);
          } else {
            cache[key] = type;
          }
        };
      }
      var shouldCacheAccess = true;
      function applyOptions(instance) {
        const options = resolveMergedOptions(instance);
        const publicThis = instance.proxy;
        const ctx = instance.ctx;
        shouldCacheAccess = false;
        if (options.beforeCreate) {
          callHook(options.beforeCreate, instance, "bc");
        }
        const {
          data: dataOptions,
          computed: computedOptions,
          methods,
          watch: watchOptions,
          provide: provideOptions,
          inject: injectOptions,
          created,
          beforeMount,
          mounted,
          beforeUpdate,
          updated,
          activated,
          deactivated,
          beforeDestroy,
          beforeUnmount,
          destroyed,
          unmounted,
          render: render22,
          renderTracked,
          renderTriggered,
          errorCaptured,
          serverPrefetch,
          expose,
          inheritAttrs,
          components,
          directives,
          filters
        } = options;
        const checkDuplicateProperties = createDuplicateChecker();
        {
          const [propsOptions] = instance.propsOptions;
          if (propsOptions) {
            for (const key in propsOptions) {
              checkDuplicateProperties("Props", key);
            }
          }
        }
        if (injectOptions) {
          resolveInjections(injectOptions, ctx, checkDuplicateProperties);
        }
        if (methods) {
          for (const key in methods) {
            const methodHandler = methods[key];
            if (shared.isFunction(methodHandler)) {
              {
                Object.defineProperty(ctx, key, {
                  value: methodHandler.bind(publicThis),
                  configurable: true,
                  enumerable: true,
                  writable: true
                });
              }
              {
                checkDuplicateProperties("Methods", key);
              }
            } else {
              warn3(
                `Method "${key}" has type "${typeof methodHandler}" in the component definition. Did you reference the function correctly?`
              );
            }
          }
        }
        if (dataOptions) {
          if (!shared.isFunction(dataOptions)) {
            warn3(
              `The data option must be a function. Plain object usage is no longer supported.`
            );
          }
          const data = dataOptions.call(publicThis, publicThis);
          if (shared.isPromise(data)) {
            warn3(
              `data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>.`
            );
          }
          if (!shared.isObject(data)) {
            warn3(`data() should return an object.`);
          } else {
            instance.data = reactivity.reactive(data);
            {
              for (const key in data) {
                checkDuplicateProperties("Data", key);
                if (!isReservedPrefix(key[0])) {
                  Object.defineProperty(ctx, key, {
                    configurable: true,
                    enumerable: true,
                    get: () => data[key],
                    set: shared.NOOP
                  });
                }
              }
            }
          }
        }
        shouldCacheAccess = true;
        if (computedOptions) {
          for (const key in computedOptions) {
            const opt = computedOptions[key];
            const get2 = shared.isFunction(opt) ? opt.bind(publicThis, publicThis) : shared.isFunction(opt.get) ? opt.get.bind(publicThis, publicThis) : shared.NOOP;
            if (get2 === shared.NOOP) {
              warn3(`Computed property "${key}" has no getter.`);
            }
            const set3 = !shared.isFunction(opt) && shared.isFunction(opt.set) ? opt.set.bind(publicThis) : () => {
              warn3(
                `Write operation failed: computed property "${key}" is readonly.`
              );
            };
            const c = computed19({
              get: get2,
              set: set3
            });
            Object.defineProperty(ctx, key, {
              enumerable: true,
              configurable: true,
              get: () => c.value,
              set: (v) => c.value = v
            });
            {
              checkDuplicateProperties("Computed", key);
            }
          }
        }
        if (watchOptions) {
          for (const key in watchOptions) {
            createWatcher(watchOptions[key], ctx, publicThis, key);
          }
        }
        if (provideOptions) {
          const provides = shared.isFunction(provideOptions) ? provideOptions.call(publicThis) : provideOptions;
          Reflect.ownKeys(provides).forEach((key) => {
            provide3(key, provides[key]);
          });
        }
        if (created) {
          callHook(created, instance, "c");
        }
        function registerLifecycleHook(register, hook) {
          if (shared.isArray(hook)) {
            hook.forEach((_hook) => register(_hook.bind(publicThis)));
          } else if (hook) {
            register(hook.bind(publicThis));
          }
        }
        registerLifecycleHook(onBeforeMount3, beforeMount);
        registerLifecycleHook(onMounted11, mounted);
        registerLifecycleHook(onBeforeUpdate2, beforeUpdate);
        registerLifecycleHook(onUpdated2, updated);
        registerLifecycleHook(onActivated, activated);
        registerLifecycleHook(onDeactivated, deactivated);
        registerLifecycleHook(onErrorCaptured, errorCaptured);
        registerLifecycleHook(onRenderTracked, renderTracked);
        registerLifecycleHook(onRenderTriggered, renderTriggered);
        registerLifecycleHook(onBeforeUnmount3, beforeUnmount);
        registerLifecycleHook(onUnmounted3, unmounted);
        registerLifecycleHook(onServerPrefetch, serverPrefetch);
        if (shared.isArray(expose)) {
          if (expose.length) {
            const exposed = instance.exposed || (instance.exposed = {});
            expose.forEach((key) => {
              Object.defineProperty(exposed, key, {
                get: () => publicThis[key],
                set: (val) => publicThis[key] = val
              });
            });
          } else if (!instance.exposed) {
            instance.exposed = {};
          }
        }
        if (render22 && instance.render === shared.NOOP) {
          instance.render = render22;
        }
        if (inheritAttrs != null) {
          instance.inheritAttrs = inheritAttrs;
        }
        if (components)
          instance.components = components;
        if (directives)
          instance.directives = directives;
      }
      function resolveInjections(injectOptions, ctx, checkDuplicateProperties = shared.NOOP) {
        if (shared.isArray(injectOptions)) {
          injectOptions = normalizeInject(injectOptions);
        }
        for (const key in injectOptions) {
          const opt = injectOptions[key];
          let injected;
          if (shared.isObject(opt)) {
            if ("default" in opt) {
              injected = inject5(
                opt.from || key,
                opt.default,
                true
              );
            } else {
              injected = inject5(opt.from || key);
            }
          } else {
            injected = inject5(opt);
          }
          if (reactivity.isRef(injected)) {
            Object.defineProperty(ctx, key, {
              enumerable: true,
              configurable: true,
              get: () => injected.value,
              set: (v) => injected.value = v
            });
          } else {
            ctx[key] = injected;
          }
          {
            checkDuplicateProperties("Inject", key);
          }
        }
      }
      function callHook(hook, instance, type) {
        callWithAsyncErrorHandling(
          shared.isArray(hook) ? hook.map((h4) => h4.bind(instance.proxy)) : hook.bind(instance.proxy),
          instance,
          type
        );
      }
      function createWatcher(raw, ctx, publicThis, key) {
        const getter = key.includes(".") ? createPathGetter(publicThis, key) : () => publicThis[key];
        if (shared.isString(raw)) {
          const handler = ctx[raw];
          if (shared.isFunction(handler)) {
            watch13(getter, handler);
          } else {
            warn3(`Invalid watch handler specified by key "${raw}"`, handler);
          }
        } else if (shared.isFunction(raw)) {
          watch13(getter, raw.bind(publicThis));
        } else if (shared.isObject(raw)) {
          if (shared.isArray(raw)) {
            raw.forEach((r) => createWatcher(r, ctx, publicThis, key));
          } else {
            const handler = shared.isFunction(raw.handler) ? raw.handler.bind(publicThis) : ctx[raw.handler];
            if (shared.isFunction(handler)) {
              watch13(getter, handler, raw);
            } else {
              warn3(`Invalid watch handler specified by key "${raw.handler}"`, handler);
            }
          }
        } else {
          warn3(`Invalid watch option: "${key}"`, raw);
        }
      }
      function resolveMergedOptions(instance) {
        const base = instance.type;
        const { mixins, extends: extendsOptions } = base;
        const {
          mixins: globalMixins,
          optionsCache: cache,
          config: { optionMergeStrategies }
        } = instance.appContext;
        const cached = cache.get(base);
        let resolved;
        if (cached) {
          resolved = cached;
        } else if (!globalMixins.length && !mixins && !extendsOptions) {
          {
            resolved = base;
          }
        } else {
          resolved = {};
          if (globalMixins.length) {
            globalMixins.forEach(
              (m) => mergeOptions(resolved, m, optionMergeStrategies, true)
            );
          }
          mergeOptions(resolved, base, optionMergeStrategies);
        }
        if (shared.isObject(base)) {
          cache.set(base, resolved);
        }
        return resolved;
      }
      function mergeOptions(to, from, strats, asMixin = false) {
        const { mixins, extends: extendsOptions } = from;
        if (extendsOptions) {
          mergeOptions(to, extendsOptions, strats, true);
        }
        if (mixins) {
          mixins.forEach(
            (m) => mergeOptions(to, m, strats, true)
          );
        }
        for (const key in from) {
          if (asMixin && key === "expose") {
            warn3(
              `"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.`
            );
          } else {
            const strat = internalOptionMergeStrats[key] || strats && strats[key];
            to[key] = strat ? strat(to[key], from[key]) : from[key];
          }
        }
        return to;
      }
      var internalOptionMergeStrats = {
        data: mergeDataFn,
        props: mergeEmitsOrPropsOptions,
        emits: mergeEmitsOrPropsOptions,
        methods: mergeObjectOptions,
        computed: mergeObjectOptions,
        beforeCreate: mergeAsArray,
        created: mergeAsArray,
        beforeMount: mergeAsArray,
        mounted: mergeAsArray,
        beforeUpdate: mergeAsArray,
        updated: mergeAsArray,
        beforeDestroy: mergeAsArray,
        beforeUnmount: mergeAsArray,
        destroyed: mergeAsArray,
        unmounted: mergeAsArray,
        activated: mergeAsArray,
        deactivated: mergeAsArray,
        errorCaptured: mergeAsArray,
        serverPrefetch: mergeAsArray,
        components: mergeObjectOptions,
        directives: mergeObjectOptions,
        watch: mergeWatchOptions,
        provide: mergeDataFn,
        inject: mergeInject
      };
      function mergeDataFn(to, from) {
        if (!from) {
          return to;
        }
        if (!to) {
          return from;
        }
        return function mergedDataFn() {
          return shared.extend(
            shared.isFunction(to) ? to.call(this, this) : to,
            shared.isFunction(from) ? from.call(this, this) : from
          );
        };
      }
      function mergeInject(to, from) {
        return mergeObjectOptions(normalizeInject(to), normalizeInject(from));
      }
      function normalizeInject(raw) {
        if (shared.isArray(raw)) {
          const res = {};
          for (let i = 0; i < raw.length; i++) {
            res[raw[i]] = raw[i];
          }
          return res;
        }
        return raw;
      }
      function mergeAsArray(to, from) {
        return to ? [...new Set([].concat(to, from))] : from;
      }
      function mergeObjectOptions(to, from) {
        return to ? shared.extend(/* @__PURE__ */ Object.create(null), to, from) : from;
      }
      function mergeEmitsOrPropsOptions(to, from) {
        if (to) {
          if (shared.isArray(to) && shared.isArray(from)) {
            return [.../* @__PURE__ */ new Set([...to, ...from])];
          }
          return shared.extend(
            /* @__PURE__ */ Object.create(null),
            normalizePropsOrEmits(to),
            normalizePropsOrEmits(from != null ? from : {})
          );
        } else {
          return from;
        }
      }
      function mergeWatchOptions(to, from) {
        if (!to)
          return from;
        if (!from)
          return to;
        const merged = shared.extend(/* @__PURE__ */ Object.create(null), to);
        for (const key in from) {
          merged[key] = mergeAsArray(to[key], from[key]);
        }
        return merged;
      }
      function createAppContext() {
        return {
          app: null,
          config: {
            isNativeTag: shared.NO,
            performance: false,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {}
          },
          mixins: [],
          components: {},
          directives: {},
          provides: /* @__PURE__ */ Object.create(null),
          optionsCache: /* @__PURE__ */ new WeakMap(),
          propsCache: /* @__PURE__ */ new WeakMap(),
          emitsCache: /* @__PURE__ */ new WeakMap()
        };
      }
      var uid$1 = 0;
      function createAppAPI(render22, hydrate) {
        return function createApp2(rootComponent, rootProps = null) {
          if (!shared.isFunction(rootComponent)) {
            rootComponent = shared.extend({}, rootComponent);
          }
          if (rootProps != null && !shared.isObject(rootProps)) {
            warn3(`root props passed to app.mount() must be an object.`);
            rootProps = null;
          }
          const context = createAppContext();
          {
            Object.defineProperty(context.config, "unwrapInjectedRef", {
              get() {
                return true;
              },
              set() {
                warn3(
                  `app.config.unwrapInjectedRef has been deprecated. 3.3 now always unwraps injected refs in Options API.`
                );
              }
            });
          }
          const installedPlugins = /* @__PURE__ */ new WeakSet();
          let isMounted = false;
          const app = context.app = {
            _uid: uid$1++,
            _component: rootComponent,
            _props: rootProps,
            _container: null,
            _context: context,
            _instance: null,
            version: version2,
            get config() {
              return context.config;
            },
            set config(v) {
              {
                warn3(
                  `app.config cannot be replaced. Modify individual options instead.`
                );
              }
            },
            use(plugin, ...options) {
              if (installedPlugins.has(plugin)) {
                warn3(`Plugin has already been applied to target app.`);
              } else if (plugin && shared.isFunction(plugin.install)) {
                installedPlugins.add(plugin);
                plugin.install(app, ...options);
              } else if (shared.isFunction(plugin)) {
                installedPlugins.add(plugin);
                plugin(app, ...options);
              } else {
                warn3(
                  `A plugin must either be a function or an object with an "install" function.`
                );
              }
              return app;
            },
            mixin(mixin) {
              {
                if (!context.mixins.includes(mixin)) {
                  context.mixins.push(mixin);
                } else {
                  warn3(
                    "Mixin has already been applied to target app" + (mixin.name ? `: ${mixin.name}` : "")
                  );
                }
              }
              return app;
            },
            component(name, component) {
              {
                validateComponentName(name, context.config);
              }
              if (!component) {
                return context.components[name];
              }
              if (context.components[name]) {
                warn3(`Component "${name}" has already been registered in target app.`);
              }
              context.components[name] = component;
              return app;
            },
            directive(name, directive) {
              {
                validateDirectiveName(name);
              }
              if (!directive) {
                return context.directives[name];
              }
              if (context.directives[name]) {
                warn3(`Directive "${name}" has already been registered in target app.`);
              }
              context.directives[name] = directive;
              return app;
            },
            mount(rootContainer, isHydrate, isSVG) {
              if (!isMounted) {
                if (rootContainer.__vue_app__) {
                  warn3(
                    `There is already an app instance mounted on the host container.
 If you want to mount another app on the same host container, you need to unmount the previous app by calling \`app.unmount()\` first.`
                  );
                }
                const vnode = createVNode2(rootComponent, rootProps);
                vnode.appContext = context;
                {
                  context.reload = () => {
                    render22(cloneVNode(vnode), rootContainer, isSVG);
                  };
                }
                if (isHydrate && hydrate) {
                  hydrate(vnode, rootContainer);
                } else {
                  render22(vnode, rootContainer, isSVG);
                }
                isMounted = true;
                app._container = rootContainer;
                rootContainer.__vue_app__ = app;
                {
                  app._instance = vnode.component;
                  devtoolsInitApp(app, version2);
                }
                return getExposeProxy(vnode.component) || vnode.component.proxy;
              } else {
                warn3(
                  `App has already been mounted.
If you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. \`const createMyApp = () => createApp(App)\``
                );
              }
            },
            unmount() {
              if (isMounted) {
                render22(null, app._container);
                {
                  app._instance = null;
                  devtoolsUnmountApp(app);
                }
                delete app._container.__vue_app__;
              } else {
                warn3(`Cannot unmount an app that is not mounted.`);
              }
            },
            provide(key, value) {
              if (key in context.provides) {
                warn3(
                  `App already provides property with key "${String(key)}". It will be overwritten with the new value.`
                );
              }
              context.provides[key] = value;
              return app;
            },
            runWithContext(fn) {
              currentApp = app;
              try {
                return fn();
              } finally {
                currentApp = null;
              }
            }
          };
          return app;
        };
      }
      var currentApp = null;
      function provide3(key, value) {
        if (!currentInstance) {
          {
            warn3(`provide() can only be used inside setup().`);
          }
        } else {
          let provides = currentInstance.provides;
          const parentProvides = currentInstance.parent && currentInstance.parent.provides;
          if (parentProvides === provides) {
            provides = currentInstance.provides = Object.create(parentProvides);
          }
          provides[key] = value;
        }
      }
      function inject5(key, defaultValue, treatDefaultAsFactory = false) {
        const instance = currentInstance || currentRenderingInstance;
        if (instance || currentApp) {
          const provides = instance ? instance.parent == null ? instance.vnode.appContext && instance.vnode.appContext.provides : instance.parent.provides : currentApp._context.provides;
          if (provides && key in provides) {
            return provides[key];
          } else if (arguments.length > 1) {
            return treatDefaultAsFactory && shared.isFunction(defaultValue) ? defaultValue.call(instance && instance.proxy) : defaultValue;
          } else {
            warn3(`injection "${String(key)}" not found.`);
          }
        } else {
          warn3(`inject() can only be used inside setup() or functional components.`);
        }
      }
      function hasInjectionContext2() {
        return !!(currentInstance || currentRenderingInstance || currentApp);
      }
      function initProps(instance, rawProps, isStateful, isSSR = false) {
        const props = {};
        const attrs = {};
        shared.def(attrs, InternalObjectKey, 1);
        instance.propsDefaults = /* @__PURE__ */ Object.create(null);
        setFullProps(instance, rawProps, props, attrs);
        for (const key in instance.propsOptions[0]) {
          if (!(key in props)) {
            props[key] = void 0;
          }
        }
        {
          validateProps(rawProps || {}, props, instance);
        }
        if (isStateful) {
          instance.props = isSSR ? props : reactivity.shallowReactive(props);
        } else {
          if (!instance.type.props) {
            instance.props = attrs;
          } else {
            instance.props = props;
          }
        }
        instance.attrs = attrs;
      }
      function isInHmrContext(instance) {
        while (instance) {
          if (instance.type.__hmrId)
            return true;
          instance = instance.parent;
        }
      }
      function updateProps(instance, rawProps, rawPrevProps, optimized) {
        const {
          props,
          attrs,
          vnode: { patchFlag }
        } = instance;
        const rawCurrentProps = reactivity.toRaw(props);
        const [options] = instance.propsOptions;
        let hasAttrsChanged = false;
        if (!isInHmrContext(instance) && (optimized || patchFlag > 0) && !(patchFlag & 16)) {
          if (patchFlag & 8) {
            const propsToUpdate = instance.vnode.dynamicProps;
            for (let i = 0; i < propsToUpdate.length; i++) {
              let key = propsToUpdate[i];
              if (isEmitListener(instance.emitsOptions, key)) {
                continue;
              }
              const value = rawProps[key];
              if (options) {
                if (shared.hasOwn(attrs, key)) {
                  if (value !== attrs[key]) {
                    attrs[key] = value;
                    hasAttrsChanged = true;
                  }
                } else {
                  const camelizedKey = shared.camelize(key);
                  props[camelizedKey] = resolvePropValue(
                    options,
                    rawCurrentProps,
                    camelizedKey,
                    value,
                    instance,
                    false
                  );
                }
              } else {
                if (value !== attrs[key]) {
                  attrs[key] = value;
                  hasAttrsChanged = true;
                }
              }
            }
          }
        } else {
          if (setFullProps(instance, rawProps, props, attrs)) {
            hasAttrsChanged = true;
          }
          let kebabKey;
          for (const key in rawCurrentProps) {
            if (!rawProps || !shared.hasOwn(rawProps, key) && ((kebabKey = shared.hyphenate(key)) === key || !shared.hasOwn(rawProps, kebabKey))) {
              if (options) {
                if (rawPrevProps && (rawPrevProps[key] !== void 0 || rawPrevProps[kebabKey] !== void 0)) {
                  props[key] = resolvePropValue(
                    options,
                    rawCurrentProps,
                    key,
                    void 0,
                    instance,
                    true
                  );
                }
              } else {
                delete props[key];
              }
            }
          }
          if (attrs !== rawCurrentProps) {
            for (const key in attrs) {
              if (!rawProps || !shared.hasOwn(rawProps, key) && true) {
                delete attrs[key];
                hasAttrsChanged = true;
              }
            }
          }
        }
        if (hasAttrsChanged) {
          reactivity.trigger(instance, "set", "$attrs");
        }
        {
          validateProps(rawProps || {}, props, instance);
        }
      }
      function setFullProps(instance, rawProps, props, attrs) {
        const [options, needCastKeys] = instance.propsOptions;
        let hasAttrsChanged = false;
        let rawCastValues;
        if (rawProps) {
          for (let key in rawProps) {
            if (shared.isReservedProp(key)) {
              continue;
            }
            const value = rawProps[key];
            let camelKey;
            if (options && shared.hasOwn(options, camelKey = shared.camelize(key))) {
              if (!needCastKeys || !needCastKeys.includes(camelKey)) {
                props[camelKey] = value;
              } else {
                (rawCastValues || (rawCastValues = {}))[camelKey] = value;
              }
            } else if (!isEmitListener(instance.emitsOptions, key)) {
              if (!(key in attrs) || value !== attrs[key]) {
                attrs[key] = value;
                hasAttrsChanged = true;
              }
            }
          }
        }
        if (needCastKeys) {
          const rawCurrentProps = reactivity.toRaw(props);
          const castValues = rawCastValues || shared.EMPTY_OBJ;
          for (let i = 0; i < needCastKeys.length; i++) {
            const key = needCastKeys[i];
            props[key] = resolvePropValue(
              options,
              rawCurrentProps,
              key,
              castValues[key],
              instance,
              !shared.hasOwn(castValues, key)
            );
          }
        }
        return hasAttrsChanged;
      }
      function resolvePropValue(options, props, key, value, instance, isAbsent) {
        const opt = options[key];
        if (opt != null) {
          const hasDefault = shared.hasOwn(opt, "default");
          if (hasDefault && value === void 0) {
            const defaultValue = opt.default;
            if (opt.type !== Function && !opt.skipFactory && shared.isFunction(defaultValue)) {
              const { propsDefaults } = instance;
              if (key in propsDefaults) {
                value = propsDefaults[key];
              } else {
                setCurrentInstance(instance);
                value = propsDefaults[key] = defaultValue.call(
                  null,
                  props
                );
                unsetCurrentInstance();
              }
            } else {
              value = defaultValue;
            }
          }
          if (opt[0]) {
            if (isAbsent && !hasDefault) {
              value = false;
            } else if (opt[1] && (value === "" || value === shared.hyphenate(key))) {
              value = true;
            }
          }
        }
        return value;
      }
      function normalizePropsOptions(comp, appContext, asMixin = false) {
        const cache = appContext.propsCache;
        const cached = cache.get(comp);
        if (cached) {
          return cached;
        }
        const raw = comp.props;
        const normalized = {};
        const needCastKeys = [];
        let hasExtends = false;
        if (!shared.isFunction(comp)) {
          const extendProps = (raw2) => {
            hasExtends = true;
            const [props, keys] = normalizePropsOptions(raw2, appContext, true);
            shared.extend(normalized, props);
            if (keys)
              needCastKeys.push(...keys);
          };
          if (!asMixin && appContext.mixins.length) {
            appContext.mixins.forEach(extendProps);
          }
          if (comp.extends) {
            extendProps(comp.extends);
          }
          if (comp.mixins) {
            comp.mixins.forEach(extendProps);
          }
        }
        if (!raw && !hasExtends) {
          if (shared.isObject(comp)) {
            cache.set(comp, shared.EMPTY_ARR);
          }
          return shared.EMPTY_ARR;
        }
        if (shared.isArray(raw)) {
          for (let i = 0; i < raw.length; i++) {
            if (!shared.isString(raw[i])) {
              warn3(`props must be strings when using array syntax.`, raw[i]);
            }
            const normalizedKey = shared.camelize(raw[i]);
            if (validatePropName(normalizedKey)) {
              normalized[normalizedKey] = shared.EMPTY_OBJ;
            }
          }
        } else if (raw) {
          if (!shared.isObject(raw)) {
            warn3(`invalid props options`, raw);
          }
          for (const key in raw) {
            const normalizedKey = shared.camelize(key);
            if (validatePropName(normalizedKey)) {
              const opt = raw[key];
              const prop = normalized[normalizedKey] = shared.isArray(opt) || shared.isFunction(opt) ? { type: opt } : shared.extend({}, opt);
              if (prop) {
                const booleanIndex = getTypeIndex(Boolean, prop.type);
                const stringIndex = getTypeIndex(String, prop.type);
                prop[0] = booleanIndex > -1;
                prop[1] = stringIndex < 0 || booleanIndex < stringIndex;
                if (booleanIndex > -1 || shared.hasOwn(prop, "default")) {
                  needCastKeys.push(normalizedKey);
                }
              }
            }
          }
        }
        const res = [normalized, needCastKeys];
        if (shared.isObject(comp)) {
          cache.set(comp, res);
        }
        return res;
      }
      function validatePropName(key) {
        if (key[0] !== "$") {
          return true;
        } else {
          warn3(`Invalid prop name: "${key}" is a reserved property.`);
        }
        return false;
      }
      function getType(ctor) {
        const match = ctor && ctor.toString().match(/^\s*(function|class) (\w+)/);
        return match ? match[2] : ctor === null ? "null" : "";
      }
      function isSameType(a2, b) {
        return getType(a2) === getType(b);
      }
      function getTypeIndex(type, expectedTypes) {
        if (shared.isArray(expectedTypes)) {
          return expectedTypes.findIndex((t) => isSameType(t, type));
        } else if (shared.isFunction(expectedTypes)) {
          return isSameType(expectedTypes, type) ? 0 : -1;
        }
        return -1;
      }
      function validateProps(rawProps, props, instance) {
        const resolvedValues = reactivity.toRaw(props);
        const options = instance.propsOptions[0];
        for (const key in options) {
          let opt = options[key];
          if (opt == null)
            continue;
          validateProp(
            key,
            resolvedValues[key],
            opt,
            !shared.hasOwn(rawProps, key) && !shared.hasOwn(rawProps, shared.hyphenate(key))
          );
        }
      }
      function validateProp(name, value, prop, isAbsent) {
        const { type, required, validator, skipCheck } = prop;
        if (required && isAbsent) {
          warn3('Missing required prop: "' + name + '"');
          return;
        }
        if (value == null && !required) {
          return;
        }
        if (type != null && type !== true && !skipCheck) {
          let isValid = false;
          const types = shared.isArray(type) ? type : [type];
          const expectedTypes = [];
          for (let i = 0; i < types.length && !isValid; i++) {
            const { valid, expectedType } = assertType(value, types[i]);
            expectedTypes.push(expectedType || "");
            isValid = valid;
          }
          if (!isValid) {
            warn3(getInvalidTypeMessage(name, value, expectedTypes));
            return;
          }
        }
        if (validator && !validator(value)) {
          warn3('Invalid prop: custom validator check failed for prop "' + name + '".');
        }
      }
      var isSimpleType = /* @__PURE__ */ shared.makeMap(
        "String,Number,Boolean,Function,Symbol,BigInt"
      );
      function assertType(value, type) {
        let valid;
        const expectedType = getType(type);
        if (isSimpleType(expectedType)) {
          const t = typeof value;
          valid = t === expectedType.toLowerCase();
          if (!valid && t === "object") {
            valid = value instanceof type;
          }
        } else if (expectedType === "Object") {
          valid = shared.isObject(value);
        } else if (expectedType === "Array") {
          valid = shared.isArray(value);
        } else if (expectedType === "null") {
          valid = value === null;
        } else {
          valid = value instanceof type;
        }
        return {
          valid,
          expectedType
        };
      }
      function getInvalidTypeMessage(name, value, expectedTypes) {
        if (expectedTypes.length === 0) {
          return `Prop type [] for prop "${name}" won't match anything. Did you mean to use type Array instead?`;
        }
        let message = `Invalid prop: type check failed for prop "${name}". Expected ${expectedTypes.map(shared.capitalize).join(" | ")}`;
        const expectedType = expectedTypes[0];
        const receivedType = shared.toRawType(value);
        const expectedValue = styleValue2(value, expectedType);
        const receivedValue = styleValue2(value, receivedType);
        if (expectedTypes.length === 1 && isExplicable(expectedType) && !isBoolean(expectedType, receivedType)) {
          message += ` with value ${expectedValue}`;
        }
        message += `, got ${receivedType} `;
        if (isExplicable(receivedType)) {
          message += `with value ${receivedValue}.`;
        }
        return message;
      }
      function styleValue2(value, type) {
        if (type === "String") {
          return `"${value}"`;
        } else if (type === "Number") {
          return `${Number(value)}`;
        } else {
          return `${value}`;
        }
      }
      function isExplicable(type) {
        const explicitTypes = ["string", "number", "boolean"];
        return explicitTypes.some((elem) => type.toLowerCase() === elem);
      }
      function isBoolean(...args) {
        return args.some((elem) => elem.toLowerCase() === "boolean");
      }
      var isInternalKey = (key) => key[0] === "_" || key === "$stable";
      var normalizeSlotValue = (value) => shared.isArray(value) ? value.map(normalizeVNode) : [normalizeVNode(value)];
      var normalizeSlot = (key, rawSlot, ctx) => {
        if (rawSlot._n) {
          return rawSlot;
        }
        const normalized = withCtx2((...args) => {
          if (currentInstance) {
            warn3(
              `Slot "${key}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
            );
          }
          return normalizeSlotValue(rawSlot(...args));
        }, ctx);
        normalized._c = false;
        return normalized;
      };
      var normalizeObjectSlots = (rawSlots, slots, instance) => {
        const ctx = rawSlots._ctx;
        for (const key in rawSlots) {
          if (isInternalKey(key))
            continue;
          const value = rawSlots[key];
          if (shared.isFunction(value)) {
            slots[key] = normalizeSlot(key, value, ctx);
          } else if (value != null) {
            {
              warn3(
                `Non-function value encountered for slot "${key}". Prefer function slots for better performance.`
              );
            }
            const normalized = normalizeSlotValue(value);
            slots[key] = () => normalized;
          }
        }
      };
      var normalizeVNodeSlots = (instance, children2) => {
        if (!isKeepAlive(instance.vnode) && true) {
          warn3(
            `Non-function value encountered for default slot. Prefer function slots for better performance.`
          );
        }
        const normalized = normalizeSlotValue(children2);
        instance.slots.default = () => normalized;
      };
      var initSlots = (instance, children2) => {
        if (instance.vnode.shapeFlag & 32) {
          const type = children2._;
          if (type) {
            instance.slots = reactivity.toRaw(children2);
            shared.def(children2, "_", type);
          } else {
            normalizeObjectSlots(
              children2,
              instance.slots = {}
            );
          }
        } else {
          instance.slots = {};
          if (children2) {
            normalizeVNodeSlots(instance, children2);
          }
        }
        shared.def(instance.slots, InternalObjectKey, 1);
      };
      var updateSlots = (instance, children2, optimized) => {
        const { vnode, slots } = instance;
        let needDeletionCheck = true;
        let deletionComparisonTarget = shared.EMPTY_OBJ;
        if (vnode.shapeFlag & 32) {
          const type = children2._;
          if (type) {
            if (isHmrUpdating) {
              shared.extend(slots, children2);
              reactivity.trigger(instance, "set", "$slots");
            } else if (optimized && type === 1) {
              needDeletionCheck = false;
            } else {
              shared.extend(slots, children2);
              if (!optimized && type === 1) {
                delete slots._;
              }
            }
          } else {
            needDeletionCheck = !children2.$stable;
            normalizeObjectSlots(children2, slots);
          }
          deletionComparisonTarget = children2;
        } else if (children2) {
          normalizeVNodeSlots(instance, children2);
          deletionComparisonTarget = { default: 1 };
        }
        if (needDeletionCheck) {
          for (const key in slots) {
            if (!isInternalKey(key) && deletionComparisonTarget[key] == null) {
              delete slots[key];
            }
          }
        }
      };
      function setRef(rawRef, oldRawRef, parentSuspense, vnode, isUnmount = false) {
        if (shared.isArray(rawRef)) {
          rawRef.forEach(
            (r, i) => setRef(
              r,
              oldRawRef && (shared.isArray(oldRawRef) ? oldRawRef[i] : oldRawRef),
              parentSuspense,
              vnode,
              isUnmount
            )
          );
          return;
        }
        if (isAsyncWrapper(vnode) && !isUnmount) {
          return;
        }
        const refValue = vnode.shapeFlag & 4 ? getExposeProxy(vnode.component) || vnode.component.proxy : vnode.el;
        const value = isUnmount ? null : refValue;
        const { i: owner, r: ref17 } = rawRef;
        if (!owner) {
          warn3(
            `Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.`
          );
          return;
        }
        const oldRef = oldRawRef && oldRawRef.r;
        const refs = owner.refs === shared.EMPTY_OBJ ? owner.refs = {} : owner.refs;
        const setupState = owner.setupState;
        if (oldRef != null && oldRef !== ref17) {
          if (shared.isString(oldRef)) {
            refs[oldRef] = null;
            if (shared.hasOwn(setupState, oldRef)) {
              setupState[oldRef] = null;
            }
          } else if (reactivity.isRef(oldRef)) {
            oldRef.value = null;
          }
        }
        if (shared.isFunction(ref17)) {
          callWithErrorHandling(ref17, owner, 12, [value, refs]);
        } else {
          const _isString = shared.isString(ref17);
          const _isRef = reactivity.isRef(ref17);
          if (_isString || _isRef) {
            const doSet = () => {
              if (rawRef.f) {
                const existing = _isString ? shared.hasOwn(setupState, ref17) ? setupState[ref17] : refs[ref17] : ref17.value;
                if (isUnmount) {
                  shared.isArray(existing) && shared.remove(existing, refValue);
                } else {
                  if (!shared.isArray(existing)) {
                    if (_isString) {
                      refs[ref17] = [refValue];
                      if (shared.hasOwn(setupState, ref17)) {
                        setupState[ref17] = refs[ref17];
                      }
                    } else {
                      ref17.value = [refValue];
                      if (rawRef.k)
                        refs[rawRef.k] = ref17.value;
                    }
                  } else if (!existing.includes(refValue)) {
                    existing.push(refValue);
                  }
                }
              } else if (_isString) {
                refs[ref17] = value;
                if (shared.hasOwn(setupState, ref17)) {
                  setupState[ref17] = value;
                }
              } else if (_isRef) {
                ref17.value = value;
                if (rawRef.k)
                  refs[rawRef.k] = value;
              } else {
                warn3("Invalid template ref type:", ref17, `(${typeof ref17})`);
              }
            };
            if (value) {
              doSet.id = -1;
              queuePostRenderEffect(doSet, parentSuspense);
            } else {
              doSet();
            }
          } else {
            warn3("Invalid template ref type:", ref17, `(${typeof ref17})`);
          }
        }
      }
      var hasMismatch = false;
      var isSVGContainer = (container) => /svg/.test(container.namespaceURI) && container.tagName !== "foreignObject";
      var isComment = (node) => node.nodeType === 8;
      function createHydrationFunctions(rendererInternals) {
        const {
          mt: mountComponent,
          p: patch,
          o: {
            patchProp,
            createText,
            nextSibling,
            parentNode,
            remove: remove2,
            insert,
            createComment
          }
        } = rendererInternals;
        const hydrate = (vnode, container) => {
          if (!container.hasChildNodes()) {
            warn3(
              `Attempting to hydrate existing markup but container is empty. Performing full mount instead.`
            );
            patch(null, vnode, container);
            flushPostFlushCbs();
            container._vnode = vnode;
            return;
          }
          hasMismatch = false;
          hydrateNode(container.firstChild, vnode, null, null, null);
          flushPostFlushCbs();
          container._vnode = vnode;
          if (hasMismatch && true) {
            console.error(`Hydration completed but contains mismatches.`);
          }
        };
        const hydrateNode = (node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized = false) => {
          const isFragmentStart = isComment(node) && node.data === "[";
          const onMismatch = () => handleMismatch(
            node,
            vnode,
            parentComponent,
            parentSuspense,
            slotScopeIds,
            isFragmentStart
          );
          const { type, ref: ref17, shapeFlag, patchFlag } = vnode;
          let domType = node.nodeType;
          vnode.el = node;
          {
            if (!("__vnode" in node)) {
              Object.defineProperty(node, "__vnode", {
                value: vnode,
                enumerable: false
              });
            }
            if (!("__vueParentComponent" in node)) {
              Object.defineProperty(node, "__vueParentComponent", {
                value: parentComponent,
                enumerable: false
              });
            }
          }
          if (patchFlag === -2) {
            optimized = false;
            vnode.dynamicChildren = null;
          }
          let nextNode = null;
          switch (type) {
            case Text:
              if (domType !== 3) {
                if (vnode.children === "") {
                  insert(vnode.el = createText(""), parentNode(node), node);
                  nextNode = node;
                } else {
                  nextNode = onMismatch();
                }
              } else {
                if (node.data !== vnode.children) {
                  hasMismatch = true;
                  warn3(
                    `Hydration text mismatch:
- Server rendered: ${JSON.stringify(
                      node.data
                    )}
- Client rendered: ${JSON.stringify(vnode.children)}`
                  );
                  node.data = vnode.children;
                }
                nextNode = nextSibling(node);
              }
              break;
            case Comment:
              if (isTemplateNode(node)) {
                nextNode = nextSibling(node);
                replaceNode(
                  vnode.el = node.content.firstChild,
                  node,
                  parentComponent
                );
              } else if (domType !== 8 || isFragmentStart) {
                nextNode = onMismatch();
              } else {
                nextNode = nextSibling(node);
              }
              break;
            case Static:
              if (isFragmentStart) {
                node = nextSibling(node);
                domType = node.nodeType;
              }
              if (domType === 1 || domType === 3) {
                nextNode = node;
                const needToAdoptContent = !vnode.children.length;
                for (let i = 0; i < vnode.staticCount; i++) {
                  if (needToAdoptContent)
                    vnode.children += nextNode.nodeType === 1 ? nextNode.outerHTML : nextNode.data;
                  if (i === vnode.staticCount - 1) {
                    vnode.anchor = nextNode;
                  }
                  nextNode = nextSibling(nextNode);
                }
                return isFragmentStart ? nextSibling(nextNode) : nextNode;
              } else {
                onMismatch();
              }
              break;
            case Fragment2:
              if (!isFragmentStart) {
                nextNode = onMismatch();
              } else {
                nextNode = hydrateFragment(
                  node,
                  vnode,
                  parentComponent,
                  parentSuspense,
                  slotScopeIds,
                  optimized
                );
              }
              break;
            default:
              if (shapeFlag & 1) {
                if ((domType !== 1 || vnode.type.toLowerCase() !== node.tagName.toLowerCase()) && !isTemplateNode(node)) {
                  nextNode = onMismatch();
                } else {
                  nextNode = hydrateElement(
                    node,
                    vnode,
                    parentComponent,
                    parentSuspense,
                    slotScopeIds,
                    optimized
                  );
                }
              } else if (shapeFlag & 6) {
                vnode.slotScopeIds = slotScopeIds;
                const container = parentNode(node);
                if (isFragmentStart) {
                  nextNode = locateClosingAnchor(node);
                } else if (isComment(node) && node.data === "teleport start") {
                  nextNode = locateClosingAnchor(node, node.data, "teleport end");
                } else {
                  nextNode = nextSibling(node);
                }
                mountComponent(
                  vnode,
                  container,
                  null,
                  parentComponent,
                  parentSuspense,
                  isSVGContainer(container),
                  optimized
                );
                if (isAsyncWrapper(vnode)) {
                  let subTree;
                  if (isFragmentStart) {
                    subTree = createVNode2(Fragment2);
                    subTree.anchor = nextNode ? nextNode.previousSibling : container.lastChild;
                  } else {
                    subTree = node.nodeType === 3 ? createTextVNode2("") : createVNode2("div");
                  }
                  subTree.el = node;
                  vnode.component.subTree = subTree;
                }
              } else if (shapeFlag & 64) {
                if (domType !== 8) {
                  nextNode = onMismatch();
                } else {
                  nextNode = vnode.type.hydrate(
                    node,
                    vnode,
                    parentComponent,
                    parentSuspense,
                    slotScopeIds,
                    optimized,
                    rendererInternals,
                    hydrateChildren
                  );
                }
              } else if (shapeFlag & 128) {
                nextNode = vnode.type.hydrate(
                  node,
                  vnode,
                  parentComponent,
                  parentSuspense,
                  isSVGContainer(parentNode(node)),
                  slotScopeIds,
                  optimized,
                  rendererInternals,
                  hydrateNode
                );
              } else {
                warn3("Invalid HostVNode type:", type, `(${typeof type})`);
              }
          }
          if (ref17 != null) {
            setRef(ref17, null, parentSuspense, vnode);
          }
          return nextNode;
        };
        const hydrateElement = (el, vnode, parentComponent, parentSuspense, slotScopeIds, optimized) => {
          optimized = optimized || !!vnode.dynamicChildren;
          const { type, props, patchFlag, shapeFlag, dirs, transition: transition2 } = vnode;
          const forcePatch = type === "input" || type === "option";
          {
            if (dirs) {
              invokeDirectiveHook(vnode, null, parentComponent, "created");
            }
            if (props) {
              if (forcePatch || !optimized || patchFlag & (16 | 32)) {
                for (const key in props) {
                  if (forcePatch && (key.endsWith("value") || key === "indeterminate") || shared.isOn(key) && !shared.isReservedProp(key) || key[0] === ".") {
                    patchProp(
                      el,
                      key,
                      null,
                      props[key],
                      false,
                      void 0,
                      parentComponent
                    );
                  }
                }
              } else if (props.onClick) {
                patchProp(
                  el,
                  "onClick",
                  null,
                  props.onClick,
                  false,
                  void 0,
                  parentComponent
                );
              }
            }
            let vnodeHooks;
            if (vnodeHooks = props && props.onVnodeBeforeMount) {
              invokeVNodeHook(vnodeHooks, parentComponent, vnode);
            }
            let needCallTransitionHooks = false;
            if (isTemplateNode(el)) {
              needCallTransitionHooks = needTransition(parentSuspense, transition2) && parentComponent && parentComponent.vnode.props && parentComponent.vnode.props.appear;
              const content = el.content.firstChild;
              if (needCallTransitionHooks) {
                transition2.beforeEnter(content);
              }
              replaceNode(content, el, parentComponent);
              vnode.el = el = content;
            }
            if (dirs) {
              invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
            }
            if ((vnodeHooks = props && props.onVnodeMounted) || dirs || needCallTransitionHooks) {
              queueEffectWithSuspense(() => {
                vnodeHooks && invokeVNodeHook(vnodeHooks, parentComponent, vnode);
                needCallTransitionHooks && transition2.enter(el);
                dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
              }, parentSuspense);
            }
            if (shapeFlag & 16 && !(props && (props.innerHTML || props.textContent))) {
              let next = hydrateChildren(
                el.firstChild,
                vnode,
                el,
                parentComponent,
                parentSuspense,
                slotScopeIds,
                optimized
              );
              let hasWarned2 = false;
              while (next) {
                hasMismatch = true;
                if (!hasWarned2) {
                  warn3(
                    `Hydration children mismatch in <${vnode.type}>: server rendered element contains more child nodes than client vdom.`
                  );
                  hasWarned2 = true;
                }
                const cur = next;
                next = next.nextSibling;
                remove2(cur);
              }
            } else if (shapeFlag & 8) {
              if (el.textContent !== vnode.children) {
                hasMismatch = true;
                warn3(
                  `Hydration text content mismatch in <${vnode.type}>:
- Server rendered: ${el.textContent}
- Client rendered: ${vnode.children}`
                );
                el.textContent = vnode.children;
              }
            }
          }
          return el.nextSibling;
        };
        const hydrateChildren = (node, parentVNode, container, parentComponent, parentSuspense, slotScopeIds, optimized) => {
          optimized = optimized || !!parentVNode.dynamicChildren;
          const children2 = parentVNode.children;
          const l = children2.length;
          let hasWarned2 = false;
          for (let i = 0; i < l; i++) {
            const vnode = optimized ? children2[i] : children2[i] = normalizeVNode(children2[i]);
            if (node) {
              node = hydrateNode(
                node,
                vnode,
                parentComponent,
                parentSuspense,
                slotScopeIds,
                optimized
              );
            } else if (vnode.type === Text && !vnode.children) {
              continue;
            } else {
              hasMismatch = true;
              if (!hasWarned2) {
                warn3(
                  `Hydration children mismatch in <${container.tagName.toLowerCase()}>: server rendered element contains fewer child nodes than client vdom.`
                );
                hasWarned2 = true;
              }
              patch(
                null,
                vnode,
                container,
                null,
                parentComponent,
                parentSuspense,
                isSVGContainer(container),
                slotScopeIds
              );
            }
          }
          return node;
        };
        const hydrateFragment = (node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized) => {
          const { slotScopeIds: fragmentSlotScopeIds } = vnode;
          if (fragmentSlotScopeIds) {
            slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
          }
          const container = parentNode(node);
          const next = hydrateChildren(
            nextSibling(node),
            vnode,
            container,
            parentComponent,
            parentSuspense,
            slotScopeIds,
            optimized
          );
          if (next && isComment(next) && next.data === "]") {
            return nextSibling(vnode.anchor = next);
          } else {
            hasMismatch = true;
            insert(vnode.anchor = createComment(`]`), container, next);
            return next;
          }
        };
        const handleMismatch = (node, vnode, parentComponent, parentSuspense, slotScopeIds, isFragment) => {
          hasMismatch = true;
          warn3(
            `Hydration node mismatch:
- Client vnode:`,
            vnode.type,
            `
- Server rendered DOM:`,
            node,
            node.nodeType === 3 ? `(text)` : isComment(node) && node.data === "[" ? `(start of fragment)` : ``
          );
          vnode.el = null;
          if (isFragment) {
            const end = locateClosingAnchor(node);
            while (true) {
              const next2 = nextSibling(node);
              if (next2 && next2 !== end) {
                remove2(next2);
              } else {
                break;
              }
            }
          }
          const next = nextSibling(node);
          const container = parentNode(node);
          remove2(node);
          patch(
            null,
            vnode,
            container,
            next,
            parentComponent,
            parentSuspense,
            isSVGContainer(container),
            slotScopeIds
          );
          return next;
        };
        const locateClosingAnchor = (node, open2 = "[", close = "]") => {
          let match = 0;
          while (node) {
            node = nextSibling(node);
            if (node && isComment(node)) {
              if (node.data === open2)
                match++;
              if (node.data === close) {
                if (match === 0) {
                  return nextSibling(node);
                } else {
                  match--;
                }
              }
            }
          }
          return node;
        };
        const replaceNode = (newNode, oldNode, parentComponent) => {
          const parentNode2 = oldNode.parentNode;
          if (parentNode2) {
            parentNode2.replaceChild(newNode, oldNode);
          }
          let parent = parentComponent;
          while (parent) {
            if (parent.vnode.el === oldNode) {
              parent.vnode.el = parent.subTree.el = newNode;
            }
            parent = parent.parent;
          }
        };
        const isTemplateNode = (node) => {
          return node.nodeType === 1 && node.tagName.toLowerCase() === "template";
        };
        return [hydrate, hydrateNode];
      }
      var supported2;
      var perf2;
      function startMeasure(instance, type) {
        if (instance.appContext.config.performance && isSupported()) {
          perf2.mark(`vue-${type}-${instance.uid}`);
        }
        {
          devtoolsPerfStart(instance, type, isSupported() ? perf2.now() : Date.now());
        }
      }
      function endMeasure(instance, type) {
        if (instance.appContext.config.performance && isSupported()) {
          const startTag = `vue-${type}-${instance.uid}`;
          const endTag = startTag + `:end`;
          perf2.mark(endTag);
          perf2.measure(
            `<${formatComponentName(instance, instance.type)}> ${type}`,
            startTag,
            endTag
          );
          perf2.clearMarks(startTag);
          perf2.clearMarks(endTag);
        }
        {
          devtoolsPerfEnd(instance, type, isSupported() ? perf2.now() : Date.now());
        }
      }
      function isSupported() {
        if (supported2 !== void 0) {
          return supported2;
        }
        if (typeof window !== "undefined" && window.performance) {
          supported2 = true;
          perf2 = window.performance;
        } else {
          supported2 = false;
        }
        return supported2;
      }
      var queuePostRenderEffect = queueEffectWithSuspense;
      function createRenderer(options) {
        return baseCreateRenderer(options);
      }
      function createHydrationRenderer(options) {
        return baseCreateRenderer(options, createHydrationFunctions);
      }
      function baseCreateRenderer(options, createHydrationFns) {
        const target = shared.getGlobalThis();
        target.__VUE__ = true;
        {
          setDevtoolsHook(target.__VUE_DEVTOOLS_GLOBAL_HOOK__, target);
        }
        const {
          insert: hostInsert,
          remove: hostRemove,
          patchProp: hostPatchProp,
          createElement: hostCreateElement,
          createText: hostCreateText,
          createComment: hostCreateComment,
          setText: hostSetText,
          setElementText: hostSetElementText,
          parentNode: hostParentNode,
          nextSibling: hostNextSibling,
          setScopeId: hostSetScopeId = shared.NOOP,
          insertStaticContent: hostInsertStaticContent
        } = options;
        const patch = (n1, n2, container, anchor = null, parentComponent = null, parentSuspense = null, isSVG = false, slotScopeIds = null, optimized = isHmrUpdating ? false : !!n2.dynamicChildren) => {
          if (n1 === n2) {
            return;
          }
          if (n1 && !isSameVNodeType(n1, n2)) {
            anchor = getNextHostNode(n1);
            unmount(n1, parentComponent, parentSuspense, true);
            n1 = null;
          }
          if (n2.patchFlag === -2) {
            optimized = false;
            n2.dynamicChildren = null;
          }
          const { type, ref: ref17, shapeFlag } = n2;
          switch (type) {
            case Text:
              processText(n1, n2, container, anchor);
              break;
            case Comment:
              processCommentNode(n1, n2, container, anchor);
              break;
            case Static:
              if (n1 == null) {
                mountStaticNode(n2, container, anchor, isSVG);
              } else {
                patchStaticNode(n1, n2, container, isSVG);
              }
              break;
            case Fragment2:
              processFragment(
                n1,
                n2,
                container,
                anchor,
                parentComponent,
                parentSuspense,
                isSVG,
                slotScopeIds,
                optimized
              );
              break;
            default:
              if (shapeFlag & 1) {
                processElement(
                  n1,
                  n2,
                  container,
                  anchor,
                  parentComponent,
                  parentSuspense,
                  isSVG,
                  slotScopeIds,
                  optimized
                );
              } else if (shapeFlag & 6) {
                processComponent(
                  n1,
                  n2,
                  container,
                  anchor,
                  parentComponent,
                  parentSuspense,
                  isSVG,
                  slotScopeIds,
                  optimized
                );
              } else if (shapeFlag & 64) {
                type.process(
                  n1,
                  n2,
                  container,
                  anchor,
                  parentComponent,
                  parentSuspense,
                  isSVG,
                  slotScopeIds,
                  optimized,
                  internals
                );
              } else if (shapeFlag & 128) {
                type.process(
                  n1,
                  n2,
                  container,
                  anchor,
                  parentComponent,
                  parentSuspense,
                  isSVG,
                  slotScopeIds,
                  optimized,
                  internals
                );
              } else {
                warn3("Invalid VNode type:", type, `(${typeof type})`);
              }
          }
          if (ref17 != null && parentComponent) {
            setRef(ref17, n1 && n1.ref, parentSuspense, n2 || n1, !n2);
          }
        };
        const processText = (n1, n2, container, anchor) => {
          if (n1 == null) {
            hostInsert(
              n2.el = hostCreateText(n2.children),
              container,
              anchor
            );
          } else {
            const el = n2.el = n1.el;
            if (n2.children !== n1.children) {
              hostSetText(el, n2.children);
            }
          }
        };
        const processCommentNode = (n1, n2, container, anchor) => {
          if (n1 == null) {
            hostInsert(
              n2.el = hostCreateComment(n2.children || ""),
              container,
              anchor
            );
          } else {
            n2.el = n1.el;
          }
        };
        const mountStaticNode = (n2, container, anchor, isSVG) => {
          [n2.el, n2.anchor] = hostInsertStaticContent(
            n2.children,
            container,
            anchor,
            isSVG,
            n2.el,
            n2.anchor
          );
        };
        const patchStaticNode = (n1, n2, container, isSVG) => {
          if (n2.children !== n1.children) {
            const anchor = hostNextSibling(n1.anchor);
            removeStaticNode(n1);
            [n2.el, n2.anchor] = hostInsertStaticContent(
              n2.children,
              container,
              anchor,
              isSVG
            );
          } else {
            n2.el = n1.el;
            n2.anchor = n1.anchor;
          }
        };
        const moveStaticNode = ({ el, anchor }, container, nextSibling) => {
          let next;
          while (el && el !== anchor) {
            next = hostNextSibling(el);
            hostInsert(el, container, nextSibling);
            el = next;
          }
          hostInsert(anchor, container, nextSibling);
        };
        const removeStaticNode = ({ el, anchor }) => {
          let next;
          while (el && el !== anchor) {
            next = hostNextSibling(el);
            hostRemove(el);
            el = next;
          }
          hostRemove(anchor);
        };
        const processElement = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
          isSVG = isSVG || n2.type === "svg";
          if (n1 == null) {
            mountElement(
              n2,
              container,
              anchor,
              parentComponent,
              parentSuspense,
              isSVG,
              slotScopeIds,
              optimized
            );
          } else {
            patchElement(
              n1,
              n2,
              parentComponent,
              parentSuspense,
              isSVG,
              slotScopeIds,
              optimized
            );
          }
        };
        const mountElement = (vnode, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
          let el;
          let vnodeHook;
          const { type, props, shapeFlag, transition: transition2, dirs } = vnode;
          el = vnode.el = hostCreateElement(
            vnode.type,
            isSVG,
            props && props.is,
            props
          );
          if (shapeFlag & 8) {
            hostSetElementText(el, vnode.children);
          } else if (shapeFlag & 16) {
            mountChildren(
              vnode.children,
              el,
              null,
              parentComponent,
              parentSuspense,
              isSVG && type !== "foreignObject",
              slotScopeIds,
              optimized
            );
          }
          if (dirs) {
            invokeDirectiveHook(vnode, null, parentComponent, "created");
          }
          setScopeId(el, vnode, vnode.scopeId, slotScopeIds, parentComponent);
          if (props) {
            for (const key in props) {
              if (key !== "value" && !shared.isReservedProp(key)) {
                hostPatchProp(
                  el,
                  key,
                  null,
                  props[key],
                  isSVG,
                  vnode.children,
                  parentComponent,
                  parentSuspense,
                  unmountChildren
                );
              }
            }
            if ("value" in props) {
              hostPatchProp(el, "value", null, props.value);
            }
            if (vnodeHook = props.onVnodeBeforeMount) {
              invokeVNodeHook(vnodeHook, parentComponent, vnode);
            }
          }
          {
            Object.defineProperty(el, "__vnode", {
              value: vnode,
              enumerable: false
            });
            Object.defineProperty(el, "__vueParentComponent", {
              value: parentComponent,
              enumerable: false
            });
          }
          if (dirs) {
            invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
          }
          const needCallTransitionHooks = needTransition(parentSuspense, transition2);
          if (needCallTransitionHooks) {
            transition2.beforeEnter(el);
          }
          hostInsert(el, container, anchor);
          if ((vnodeHook = props && props.onVnodeMounted) || needCallTransitionHooks || dirs) {
            queuePostRenderEffect(() => {
              vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
              needCallTransitionHooks && transition2.enter(el);
              dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
            }, parentSuspense);
          }
        };
        const setScopeId = (el, vnode, scopeId, slotScopeIds, parentComponent) => {
          if (scopeId) {
            hostSetScopeId(el, scopeId);
          }
          if (slotScopeIds) {
            for (let i = 0; i < slotScopeIds.length; i++) {
              hostSetScopeId(el, slotScopeIds[i]);
            }
          }
          if (parentComponent) {
            let subTree = parentComponent.subTree;
            if (subTree.patchFlag > 0 && subTree.patchFlag & 2048) {
              subTree = filterSingleRoot(subTree.children) || subTree;
            }
            if (vnode === subTree) {
              const parentVNode = parentComponent.vnode;
              setScopeId(
                el,
                parentVNode,
                parentVNode.scopeId,
                parentVNode.slotScopeIds,
                parentComponent.parent
              );
            }
          }
        };
        const mountChildren = (children2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, start2 = 0) => {
          for (let i = start2; i < children2.length; i++) {
            const child = children2[i] = optimized ? cloneIfMounted(children2[i]) : normalizeVNode(children2[i]);
            patch(
              null,
              child,
              container,
              anchor,
              parentComponent,
              parentSuspense,
              isSVG,
              slotScopeIds,
              optimized
            );
          }
        };
        const patchElement = (n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
          const el = n2.el = n1.el;
          let { patchFlag, dynamicChildren, dirs } = n2;
          patchFlag |= n1.patchFlag & 16;
          const oldProps = n1.props || shared.EMPTY_OBJ;
          const newProps = n2.props || shared.EMPTY_OBJ;
          let vnodeHook;
          parentComponent && toggleRecurse(parentComponent, false);
          if (vnodeHook = newProps.onVnodeBeforeUpdate) {
            invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
          }
          if (dirs) {
            invokeDirectiveHook(n2, n1, parentComponent, "beforeUpdate");
          }
          parentComponent && toggleRecurse(parentComponent, true);
          if (isHmrUpdating) {
            patchFlag = 0;
            optimized = false;
            dynamicChildren = null;
          }
          const areChildrenSVG = isSVG && n2.type !== "foreignObject";
          if (dynamicChildren) {
            patchBlockChildren(
              n1.dynamicChildren,
              dynamicChildren,
              el,
              parentComponent,
              parentSuspense,
              areChildrenSVG,
              slotScopeIds
            );
            {
              traverseStaticChildren(n1, n2);
            }
          } else if (!optimized) {
            patchChildren(
              n1,
              n2,
              el,
              null,
              parentComponent,
              parentSuspense,
              areChildrenSVG,
              slotScopeIds,
              false
            );
          }
          if (patchFlag > 0) {
            if (patchFlag & 16) {
              patchProps(
                el,
                n2,
                oldProps,
                newProps,
                parentComponent,
                parentSuspense,
                isSVG
              );
            } else {
              if (patchFlag & 2) {
                if (oldProps.class !== newProps.class) {
                  hostPatchProp(el, "class", null, newProps.class, isSVG);
                }
              }
              if (patchFlag & 4) {
                hostPatchProp(el, "style", oldProps.style, newProps.style, isSVG);
              }
              if (patchFlag & 8) {
                const propsToUpdate = n2.dynamicProps;
                for (let i = 0; i < propsToUpdate.length; i++) {
                  const key = propsToUpdate[i];
                  const prev = oldProps[key];
                  const next = newProps[key];
                  if (next !== prev || key === "value") {
                    hostPatchProp(
                      el,
                      key,
                      prev,
                      next,
                      isSVG,
                      n1.children,
                      parentComponent,
                      parentSuspense,
                      unmountChildren
                    );
                  }
                }
              }
            }
            if (patchFlag & 1) {
              if (n1.children !== n2.children) {
                hostSetElementText(el, n2.children);
              }
            }
          } else if (!optimized && dynamicChildren == null) {
            patchProps(
              el,
              n2,
              oldProps,
              newProps,
              parentComponent,
              parentSuspense,
              isSVG
            );
          }
          if ((vnodeHook = newProps.onVnodeUpdated) || dirs) {
            queuePostRenderEffect(() => {
              vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
              dirs && invokeDirectiveHook(n2, n1, parentComponent, "updated");
            }, parentSuspense);
          }
        };
        const patchBlockChildren = (oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, isSVG, slotScopeIds) => {
          for (let i = 0; i < newChildren.length; i++) {
            const oldVNode = oldChildren[i];
            const newVNode = newChildren[i];
            const container = oldVNode.el && (oldVNode.type === Fragment2 || !isSameVNodeType(oldVNode, newVNode) || oldVNode.shapeFlag & (6 | 64)) ? hostParentNode(oldVNode.el) : fallbackContainer;
            patch(
              oldVNode,
              newVNode,
              container,
              null,
              parentComponent,
              parentSuspense,
              isSVG,
              slotScopeIds,
              true
            );
          }
        };
        const patchProps = (el, vnode, oldProps, newProps, parentComponent, parentSuspense, isSVG) => {
          if (oldProps !== newProps) {
            if (oldProps !== shared.EMPTY_OBJ) {
              for (const key in oldProps) {
                if (!shared.isReservedProp(key) && !(key in newProps)) {
                  hostPatchProp(
                    el,
                    key,
                    oldProps[key],
                    null,
                    isSVG,
                    vnode.children,
                    parentComponent,
                    parentSuspense,
                    unmountChildren
                  );
                }
              }
            }
            for (const key in newProps) {
              if (shared.isReservedProp(key))
                continue;
              const next = newProps[key];
              const prev = oldProps[key];
              if (next !== prev && key !== "value") {
                hostPatchProp(
                  el,
                  key,
                  prev,
                  next,
                  isSVG,
                  vnode.children,
                  parentComponent,
                  parentSuspense,
                  unmountChildren
                );
              }
            }
            if ("value" in newProps) {
              hostPatchProp(el, "value", oldProps.value, newProps.value);
            }
          }
        };
        const processFragment = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
          const fragmentStartAnchor = n2.el = n1 ? n1.el : hostCreateText("");
          const fragmentEndAnchor = n2.anchor = n1 ? n1.anchor : hostCreateText("");
          let { patchFlag, dynamicChildren, slotScopeIds: fragmentSlotScopeIds } = n2;
          if (isHmrUpdating || patchFlag & 2048) {
            patchFlag = 0;
            optimized = false;
            dynamicChildren = null;
          }
          if (fragmentSlotScopeIds) {
            slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
          }
          if (n1 == null) {
            hostInsert(fragmentStartAnchor, container, anchor);
            hostInsert(fragmentEndAnchor, container, anchor);
            mountChildren(
              n2.children,
              container,
              fragmentEndAnchor,
              parentComponent,
              parentSuspense,
              isSVG,
              slotScopeIds,
              optimized
            );
          } else {
            if (patchFlag > 0 && patchFlag & 64 && dynamicChildren && n1.dynamicChildren) {
              patchBlockChildren(
                n1.dynamicChildren,
                dynamicChildren,
                container,
                parentComponent,
                parentSuspense,
                isSVG,
                slotScopeIds
              );
              {
                traverseStaticChildren(n1, n2);
              }
            } else {
              patchChildren(
                n1,
                n2,
                container,
                fragmentEndAnchor,
                parentComponent,
                parentSuspense,
                isSVG,
                slotScopeIds,
                optimized
              );
            }
          }
        };
        const processComponent = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
          n2.slotScopeIds = slotScopeIds;
          if (n1 == null) {
            if (n2.shapeFlag & 512) {
              parentComponent.ctx.activate(
                n2,
                container,
                anchor,
                isSVG,
                optimized
              );
            } else {
              mountComponent(
                n2,
                container,
                anchor,
                parentComponent,
                parentSuspense,
                isSVG,
                optimized
              );
            }
          } else {
            updateComponent(n1, n2, optimized);
          }
        };
        const mountComponent = (initialVNode, container, anchor, parentComponent, parentSuspense, isSVG, optimized) => {
          const instance = initialVNode.component = createComponentInstance(
            initialVNode,
            parentComponent,
            parentSuspense
          );
          if (instance.type.__hmrId) {
            registerHMR(instance);
          }
          {
            pushWarningContext(initialVNode);
            startMeasure(instance, `mount`);
          }
          if (isKeepAlive(initialVNode)) {
            instance.ctx.renderer = internals;
          }
          {
            {
              startMeasure(instance, `init`);
            }
            setupComponent(instance);
            {
              endMeasure(instance, `init`);
            }
          }
          if (instance.asyncDep) {
            parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect);
            if (!initialVNode.el) {
              const placeholder = instance.subTree = createVNode2(Comment);
              processCommentNode(null, placeholder, container, anchor);
            }
            return;
          }
          setupRenderEffect(
            instance,
            initialVNode,
            container,
            anchor,
            parentSuspense,
            isSVG,
            optimized
          );
          {
            popWarningContext();
            endMeasure(instance, `mount`);
          }
        };
        const updateComponent = (n1, n2, optimized) => {
          const instance = n2.component = n1.component;
          if (shouldUpdateComponent(n1, n2, optimized)) {
            if (instance.asyncDep && !instance.asyncResolved) {
              {
                pushWarningContext(n2);
              }
              updateComponentPreRender(instance, n2, optimized);
              {
                popWarningContext();
              }
              return;
            } else {
              instance.next = n2;
              invalidateJob(instance.update);
              instance.update();
            }
          } else {
            n2.el = n1.el;
            instance.vnode = n2;
          }
        };
        const setupRenderEffect = (instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized) => {
          const componentUpdateFn = () => {
            if (!instance.isMounted) {
              let vnodeHook;
              const { el, props } = initialVNode;
              const { bm, m, parent } = instance;
              const isAsyncWrapperVNode = isAsyncWrapper(initialVNode);
              toggleRecurse(instance, false);
              if (bm) {
                shared.invokeArrayFns(bm);
              }
              if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeBeforeMount)) {
                invokeVNodeHook(vnodeHook, parent, initialVNode);
              }
              toggleRecurse(instance, true);
              if (el && hydrateNode) {
                const hydrateSubTree = () => {
                  {
                    startMeasure(instance, `render`);
                  }
                  instance.subTree = renderComponentRoot(instance);
                  {
                    endMeasure(instance, `render`);
                  }
                  {
                    startMeasure(instance, `hydrate`);
                  }
                  hydrateNode(
                    el,
                    instance.subTree,
                    instance,
                    parentSuspense,
                    null
                  );
                  {
                    endMeasure(instance, `hydrate`);
                  }
                };
                if (isAsyncWrapperVNode) {
                  initialVNode.type.__asyncLoader().then(
                    () => !instance.isUnmounted && hydrateSubTree()
                  );
                } else {
                  hydrateSubTree();
                }
              } else {
                {
                  startMeasure(instance, `render`);
                }
                const subTree = instance.subTree = renderComponentRoot(instance);
                {
                  endMeasure(instance, `render`);
                }
                {
                  startMeasure(instance, `patch`);
                }
                patch(
                  null,
                  subTree,
                  container,
                  anchor,
                  instance,
                  parentSuspense,
                  isSVG
                );
                {
                  endMeasure(instance, `patch`);
                }
                initialVNode.el = subTree.el;
              }
              if (m) {
                queuePostRenderEffect(m, parentSuspense);
              }
              if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeMounted)) {
                const scopedInitialVNode = initialVNode;
                queuePostRenderEffect(
                  () => invokeVNodeHook(vnodeHook, parent, scopedInitialVNode),
                  parentSuspense
                );
              }
              if (initialVNode.shapeFlag & 256 || parent && isAsyncWrapper(parent.vnode) && parent.vnode.shapeFlag & 256) {
                instance.a && queuePostRenderEffect(instance.a, parentSuspense);
              }
              instance.isMounted = true;
              {
                devtoolsComponentAdded(instance);
              }
              initialVNode = container = anchor = null;
            } else {
              let { next, bu, u: u2, parent, vnode } = instance;
              let originNext = next;
              let vnodeHook;
              {
                pushWarningContext(next || instance.vnode);
              }
              toggleRecurse(instance, false);
              if (next) {
                next.el = vnode.el;
                updateComponentPreRender(instance, next, optimized);
              } else {
                next = vnode;
              }
              if (bu) {
                shared.invokeArrayFns(bu);
              }
              if (vnodeHook = next.props && next.props.onVnodeBeforeUpdate) {
                invokeVNodeHook(vnodeHook, parent, next, vnode);
              }
              toggleRecurse(instance, true);
              {
                startMeasure(instance, `render`);
              }
              const nextTree = renderComponentRoot(instance);
              {
                endMeasure(instance, `render`);
              }
              const prevTree = instance.subTree;
              instance.subTree = nextTree;
              {
                startMeasure(instance, `patch`);
              }
              patch(
                prevTree,
                nextTree,
                hostParentNode(prevTree.el),
                getNextHostNode(prevTree),
                instance,
                parentSuspense,
                isSVG
              );
              {
                endMeasure(instance, `patch`);
              }
              next.el = nextTree.el;
              if (originNext === null) {
                updateHOCHostEl(instance, nextTree.el);
              }
              if (u2) {
                queuePostRenderEffect(u2, parentSuspense);
              }
              if (vnodeHook = next.props && next.props.onVnodeUpdated) {
                queuePostRenderEffect(
                  () => invokeVNodeHook(vnodeHook, parent, next, vnode),
                  parentSuspense
                );
              }
              {
                devtoolsComponentUpdated(instance);
              }
              {
                popWarningContext();
              }
            }
          };
          const effect = instance.effect = new reactivity.ReactiveEffect(
            componentUpdateFn,
            () => queueJob(update),
            instance.scope
          );
          const update = instance.update = () => effect.run();
          update.id = instance.uid;
          toggleRecurse(instance, true);
          {
            effect.onTrack = instance.rtc ? (e2) => shared.invokeArrayFns(instance.rtc, e2) : void 0;
            effect.onTrigger = instance.rtg ? (e2) => shared.invokeArrayFns(instance.rtg, e2) : void 0;
            update.ownerInstance = instance;
          }
          update();
        };
        const updateComponentPreRender = (instance, nextVNode, optimized) => {
          nextVNode.component = instance;
          const prevProps = instance.vnode.props;
          instance.vnode = nextVNode;
          instance.next = null;
          updateProps(instance, nextVNode.props, prevProps, optimized);
          updateSlots(instance, nextVNode.children, optimized);
          reactivity.pauseTracking();
          flushPreFlushCbs();
          reactivity.resetTracking();
        };
        const patchChildren = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized = false) => {
          const c1 = n1 && n1.children;
          const prevShapeFlag = n1 ? n1.shapeFlag : 0;
          const c2 = n2.children;
          const { patchFlag, shapeFlag } = n2;
          if (patchFlag > 0) {
            if (patchFlag & 128) {
              patchKeyedChildren(
                c1,
                c2,
                container,
                anchor,
                parentComponent,
                parentSuspense,
                isSVG,
                slotScopeIds,
                optimized
              );
              return;
            } else if (patchFlag & 256) {
              patchUnkeyedChildren(
                c1,
                c2,
                container,
                anchor,
                parentComponent,
                parentSuspense,
                isSVG,
                slotScopeIds,
                optimized
              );
              return;
            }
          }
          if (shapeFlag & 8) {
            if (prevShapeFlag & 16) {
              unmountChildren(c1, parentComponent, parentSuspense);
            }
            if (c2 !== c1) {
              hostSetElementText(container, c2);
            }
          } else {
            if (prevShapeFlag & 16) {
              if (shapeFlag & 16) {
                patchKeyedChildren(
                  c1,
                  c2,
                  container,
                  anchor,
                  parentComponent,
                  parentSuspense,
                  isSVG,
                  slotScopeIds,
                  optimized
                );
              } else {
                unmountChildren(c1, parentComponent, parentSuspense, true);
              }
            } else {
              if (prevShapeFlag & 8) {
                hostSetElementText(container, "");
              }
              if (shapeFlag & 16) {
                mountChildren(
                  c2,
                  container,
                  anchor,
                  parentComponent,
                  parentSuspense,
                  isSVG,
                  slotScopeIds,
                  optimized
                );
              }
            }
          }
        };
        const patchUnkeyedChildren = (c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
          c1 = c1 || shared.EMPTY_ARR;
          c2 = c2 || shared.EMPTY_ARR;
          const oldLength = c1.length;
          const newLength = c2.length;
          const commonLength = Math.min(oldLength, newLength);
          let i;
          for (i = 0; i < commonLength; i++) {
            const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
            patch(
              c1[i],
              nextChild,
              container,
              null,
              parentComponent,
              parentSuspense,
              isSVG,
              slotScopeIds,
              optimized
            );
          }
          if (oldLength > newLength) {
            unmountChildren(
              c1,
              parentComponent,
              parentSuspense,
              true,
              false,
              commonLength
            );
          } else {
            mountChildren(
              c2,
              container,
              anchor,
              parentComponent,
              parentSuspense,
              isSVG,
              slotScopeIds,
              optimized,
              commonLength
            );
          }
        };
        const patchKeyedChildren = (c1, c2, container, parentAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
          let i = 0;
          const l2 = c2.length;
          let e1 = c1.length - 1;
          let e2 = l2 - 1;
          while (i <= e1 && i <= e2) {
            const n1 = c1[i];
            const n2 = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
            if (isSameVNodeType(n1, n2)) {
              patch(
                n1,
                n2,
                container,
                null,
                parentComponent,
                parentSuspense,
                isSVG,
                slotScopeIds,
                optimized
              );
            } else {
              break;
            }
            i++;
          }
          while (i <= e1 && i <= e2) {
            const n1 = c1[e1];
            const n2 = c2[e2] = optimized ? cloneIfMounted(c2[e2]) : normalizeVNode(c2[e2]);
            if (isSameVNodeType(n1, n2)) {
              patch(
                n1,
                n2,
                container,
                null,
                parentComponent,
                parentSuspense,
                isSVG,
                slotScopeIds,
                optimized
              );
            } else {
              break;
            }
            e1--;
            e2--;
          }
          if (i > e1) {
            if (i <= e2) {
              const nextPos = e2 + 1;
              const anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;
              while (i <= e2) {
                patch(
                  null,
                  c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]),
                  container,
                  anchor,
                  parentComponent,
                  parentSuspense,
                  isSVG,
                  slotScopeIds,
                  optimized
                );
                i++;
              }
            }
          } else if (i > e2) {
            while (i <= e1) {
              unmount(c1[i], parentComponent, parentSuspense, true);
              i++;
            }
          } else {
            const s1 = i;
            const s2 = i;
            const keyToNewIndexMap = /* @__PURE__ */ new Map();
            for (i = s2; i <= e2; i++) {
              const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
              if (nextChild.key != null) {
                if (keyToNewIndexMap.has(nextChild.key)) {
                  warn3(
                    `Duplicate keys found during update:`,
                    JSON.stringify(nextChild.key),
                    `Make sure keys are unique.`
                  );
                }
                keyToNewIndexMap.set(nextChild.key, i);
              }
            }
            let j;
            let patched = 0;
            const toBePatched = e2 - s2 + 1;
            let moved = false;
            let maxNewIndexSoFar = 0;
            const newIndexToOldIndexMap = new Array(toBePatched);
            for (i = 0; i < toBePatched; i++)
              newIndexToOldIndexMap[i] = 0;
            for (i = s1; i <= e1; i++) {
              const prevChild = c1[i];
              if (patched >= toBePatched) {
                unmount(prevChild, parentComponent, parentSuspense, true);
                continue;
              }
              let newIndex;
              if (prevChild.key != null) {
                newIndex = keyToNewIndexMap.get(prevChild.key);
              } else {
                for (j = s2; j <= e2; j++) {
                  if (newIndexToOldIndexMap[j - s2] === 0 && isSameVNodeType(prevChild, c2[j])) {
                    newIndex = j;
                    break;
                  }
                }
              }
              if (newIndex === void 0) {
                unmount(prevChild, parentComponent, parentSuspense, true);
              } else {
                newIndexToOldIndexMap[newIndex - s2] = i + 1;
                if (newIndex >= maxNewIndexSoFar) {
                  maxNewIndexSoFar = newIndex;
                } else {
                  moved = true;
                }
                patch(
                  prevChild,
                  c2[newIndex],
                  container,
                  null,
                  parentComponent,
                  parentSuspense,
                  isSVG,
                  slotScopeIds,
                  optimized
                );
                patched++;
              }
            }
            const increasingNewIndexSequence = moved ? getSequence(newIndexToOldIndexMap) : shared.EMPTY_ARR;
            j = increasingNewIndexSequence.length - 1;
            for (i = toBePatched - 1; i >= 0; i--) {
              const nextIndex = s2 + i;
              const nextChild = c2[nextIndex];
              const anchor = nextIndex + 1 < l2 ? c2[nextIndex + 1].el : parentAnchor;
              if (newIndexToOldIndexMap[i] === 0) {
                patch(
                  null,
                  nextChild,
                  container,
                  anchor,
                  parentComponent,
                  parentSuspense,
                  isSVG,
                  slotScopeIds,
                  optimized
                );
              } else if (moved) {
                if (j < 0 || i !== increasingNewIndexSequence[j]) {
                  move(nextChild, container, anchor, 2);
                } else {
                  j--;
                }
              }
            }
          }
        };
        const move = (vnode, container, anchor, moveType, parentSuspense = null) => {
          const { el, type, transition: transition2, children: children2, shapeFlag } = vnode;
          if (shapeFlag & 6) {
            move(vnode.component.subTree, container, anchor, moveType);
            return;
          }
          if (shapeFlag & 128) {
            vnode.suspense.move(container, anchor, moveType);
            return;
          }
          if (shapeFlag & 64) {
            type.move(vnode, container, anchor, internals);
            return;
          }
          if (type === Fragment2) {
            hostInsert(el, container, anchor);
            for (let i = 0; i < children2.length; i++) {
              move(children2[i], container, anchor, moveType);
            }
            hostInsert(vnode.anchor, container, anchor);
            return;
          }
          if (type === Static) {
            moveStaticNode(vnode, container, anchor);
            return;
          }
          const needTransition2 = moveType !== 2 && shapeFlag & 1 && transition2;
          if (needTransition2) {
            if (moveType === 0) {
              transition2.beforeEnter(el);
              hostInsert(el, container, anchor);
              queuePostRenderEffect(() => transition2.enter(el), parentSuspense);
            } else {
              const { leave, delayLeave, afterLeave } = transition2;
              const remove22 = () => hostInsert(el, container, anchor);
              const performLeave = () => {
                leave(el, () => {
                  remove22();
                  afterLeave && afterLeave();
                });
              };
              if (delayLeave) {
                delayLeave(el, remove22, performLeave);
              } else {
                performLeave();
              }
            }
          } else {
            hostInsert(el, container, anchor);
          }
        };
        const unmount = (vnode, parentComponent, parentSuspense, doRemove = false, optimized = false) => {
          const {
            type,
            props,
            ref: ref17,
            children: children2,
            dynamicChildren,
            shapeFlag,
            patchFlag,
            dirs
          } = vnode;
          if (ref17 != null) {
            setRef(ref17, null, parentSuspense, vnode, true);
          }
          if (shapeFlag & 256) {
            parentComponent.ctx.deactivate(vnode);
            return;
          }
          const shouldInvokeDirs = shapeFlag & 1 && dirs;
          const shouldInvokeVnodeHook = !isAsyncWrapper(vnode);
          let vnodeHook;
          if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeBeforeUnmount)) {
            invokeVNodeHook(vnodeHook, parentComponent, vnode);
          }
          if (shapeFlag & 6) {
            unmountComponent(vnode.component, parentSuspense, doRemove);
          } else {
            if (shapeFlag & 128) {
              vnode.suspense.unmount(parentSuspense, doRemove);
              return;
            }
            if (shouldInvokeDirs) {
              invokeDirectiveHook(vnode, null, parentComponent, "beforeUnmount");
            }
            if (shapeFlag & 64) {
              vnode.type.remove(
                vnode,
                parentComponent,
                parentSuspense,
                optimized,
                internals,
                doRemove
              );
            } else if (dynamicChildren && (type !== Fragment2 || patchFlag > 0 && patchFlag & 64)) {
              unmountChildren(
                dynamicChildren,
                parentComponent,
                parentSuspense,
                false,
                true
              );
            } else if (type === Fragment2 && patchFlag & (128 | 256) || !optimized && shapeFlag & 16) {
              unmountChildren(children2, parentComponent, parentSuspense);
            }
            if (doRemove) {
              remove2(vnode);
            }
          }
          if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeUnmounted) || shouldInvokeDirs) {
            queuePostRenderEffect(() => {
              vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
              shouldInvokeDirs && invokeDirectiveHook(vnode, null, parentComponent, "unmounted");
            }, parentSuspense);
          }
        };
        const remove2 = (vnode) => {
          const { type, el, anchor, transition: transition2 } = vnode;
          if (type === Fragment2) {
            if (vnode.patchFlag > 0 && vnode.patchFlag & 2048 && transition2 && !transition2.persisted) {
              vnode.children.forEach((child) => {
                if (child.type === Comment) {
                  hostRemove(child.el);
                } else {
                  remove2(child);
                }
              });
            } else {
              removeFragment(el, anchor);
            }
            return;
          }
          if (type === Static) {
            removeStaticNode(vnode);
            return;
          }
          const performRemove = () => {
            hostRemove(el);
            if (transition2 && !transition2.persisted && transition2.afterLeave) {
              transition2.afterLeave();
            }
          };
          if (vnode.shapeFlag & 1 && transition2 && !transition2.persisted) {
            const { leave, delayLeave } = transition2;
            const performLeave = () => leave(el, performRemove);
            if (delayLeave) {
              delayLeave(vnode.el, performRemove, performLeave);
            } else {
              performLeave();
            }
          } else {
            performRemove();
          }
        };
        const removeFragment = (cur, end) => {
          let next;
          while (cur !== end) {
            next = hostNextSibling(cur);
            hostRemove(cur);
            cur = next;
          }
          hostRemove(end);
        };
        const unmountComponent = (instance, parentSuspense, doRemove) => {
          if (instance.type.__hmrId) {
            unregisterHMR(instance);
          }
          const { bum, scope, update, subTree, um } = instance;
          if (bum) {
            shared.invokeArrayFns(bum);
          }
          scope.stop();
          if (update) {
            update.active = false;
            unmount(subTree, instance, parentSuspense, doRemove);
          }
          if (um) {
            queuePostRenderEffect(um, parentSuspense);
          }
          queuePostRenderEffect(() => {
            instance.isUnmounted = true;
          }, parentSuspense);
          if (parentSuspense && parentSuspense.pendingBranch && !parentSuspense.isUnmounted && instance.asyncDep && !instance.asyncResolved && instance.suspenseId === parentSuspense.pendingId) {
            parentSuspense.deps--;
            if (parentSuspense.deps === 0) {
              parentSuspense.resolve();
            }
          }
          {
            devtoolsComponentRemoved(instance);
          }
        };
        const unmountChildren = (children2, parentComponent, parentSuspense, doRemove = false, optimized = false, start2 = 0) => {
          for (let i = start2; i < children2.length; i++) {
            unmount(children2[i], parentComponent, parentSuspense, doRemove, optimized);
          }
        };
        const getNextHostNode = (vnode) => {
          if (vnode.shapeFlag & 6) {
            return getNextHostNode(vnode.component.subTree);
          }
          if (vnode.shapeFlag & 128) {
            return vnode.suspense.next();
          }
          return hostNextSibling(vnode.anchor || vnode.el);
        };
        const render22 = (vnode, container, isSVG) => {
          if (vnode == null) {
            if (container._vnode) {
              unmount(container._vnode, null, null, true);
            }
          } else {
            patch(container._vnode || null, vnode, container, null, null, null, isSVG);
          }
          flushPreFlushCbs();
          flushPostFlushCbs();
          container._vnode = vnode;
        };
        const internals = {
          p: patch,
          um: unmount,
          m: move,
          r: remove2,
          mt: mountComponent,
          mc: mountChildren,
          pc: patchChildren,
          pbc: patchBlockChildren,
          n: getNextHostNode,
          o: options
        };
        let hydrate;
        let hydrateNode;
        if (createHydrationFns) {
          [hydrate, hydrateNode] = createHydrationFns(
            internals
          );
        }
        return {
          render: render22,
          hydrate,
          createApp: createAppAPI(render22, hydrate)
        };
      }
      function toggleRecurse({ effect, update }, allowed) {
        effect.allowRecurse = update.allowRecurse = allowed;
      }
      function needTransition(parentSuspense, transition2) {
        return (!parentSuspense || parentSuspense && !parentSuspense.pendingBranch) && transition2 && !transition2.persisted;
      }
      function traverseStaticChildren(n1, n2, shallow = false) {
        const ch1 = n1.children;
        const ch2 = n2.children;
        if (shared.isArray(ch1) && shared.isArray(ch2)) {
          for (let i = 0; i < ch1.length; i++) {
            const c1 = ch1[i];
            let c2 = ch2[i];
            if (c2.shapeFlag & 1 && !c2.dynamicChildren) {
              if (c2.patchFlag <= 0 || c2.patchFlag === 32) {
                c2 = ch2[i] = cloneIfMounted(ch2[i]);
                c2.el = c1.el;
              }
              if (!shallow)
                traverseStaticChildren(c1, c2);
            }
            if (c2.type === Text) {
              c2.el = c1.el;
            }
            if (c2.type === Comment && !c2.el) {
              c2.el = c1.el;
            }
          }
        }
      }
      function getSequence(arr) {
        const p = arr.slice();
        const result = [0];
        let i, j, u2, v, c;
        const len = arr.length;
        for (i = 0; i < len; i++) {
          const arrI = arr[i];
          if (arrI !== 0) {
            j = result[result.length - 1];
            if (arr[j] < arrI) {
              p[i] = j;
              result.push(i);
              continue;
            }
            u2 = 0;
            v = result.length - 1;
            while (u2 < v) {
              c = u2 + v >> 1;
              if (arr[result[c]] < arrI) {
                u2 = c + 1;
              } else {
                v = c;
              }
            }
            if (arrI < arr[result[u2]]) {
              if (u2 > 0) {
                p[i] = result[u2 - 1];
              }
              result[u2] = i;
            }
          }
        }
        u2 = result.length;
        v = result[u2 - 1];
        while (u2-- > 0) {
          result[u2] = v;
          v = p[v];
        }
        return result;
      }
      var isTeleport = (type) => type.__isTeleport;
      var isTeleportDisabled = (props) => props && (props.disabled || props.disabled === "");
      var isTargetSVG = (target) => typeof SVGElement !== "undefined" && target instanceof SVGElement;
      var resolveTarget = (props, select2) => {
        const targetSelector = props && props.to;
        if (shared.isString(targetSelector)) {
          if (!select2) {
            warn3(
              `Current renderer does not support string target for Teleports. (missing querySelector renderer option)`
            );
            return null;
          } else {
            const target = select2(targetSelector);
            if (!target) {
              warn3(
                `Failed to locate Teleport target with selector "${targetSelector}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`
              );
            }
            return target;
          }
        } else {
          if (!targetSelector && !isTeleportDisabled(props)) {
            warn3(`Invalid Teleport target: ${targetSelector}`);
          }
          return targetSelector;
        }
      };
      var TeleportImpl = {
        name: "Teleport",
        __isTeleport: true,
        process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals) {
          const {
            mc: mountChildren,
            pc: patchChildren,
            pbc: patchBlockChildren,
            o: { insert, querySelector, createText, createComment }
          } = internals;
          const disabled = isTeleportDisabled(n2.props);
          let { shapeFlag, children: children2, dynamicChildren } = n2;
          if (isHmrUpdating) {
            optimized = false;
            dynamicChildren = null;
          }
          if (n1 == null) {
            const placeholder = n2.el = createComment("teleport start");
            const mainAnchor = n2.anchor = createComment("teleport end");
            insert(placeholder, container, anchor);
            insert(mainAnchor, container, anchor);
            const target = n2.target = resolveTarget(n2.props, querySelector);
            const targetAnchor = n2.targetAnchor = createText("");
            if (target) {
              insert(targetAnchor, target);
              isSVG = isSVG || isTargetSVG(target);
            } else if (!disabled) {
              warn3("Invalid Teleport target on mount:", target, `(${typeof target})`);
            }
            const mount = (container2, anchor2) => {
              if (shapeFlag & 16) {
                mountChildren(
                  children2,
                  container2,
                  anchor2,
                  parentComponent,
                  parentSuspense,
                  isSVG,
                  slotScopeIds,
                  optimized
                );
              }
            };
            if (disabled) {
              mount(container, mainAnchor);
            } else if (target) {
              mount(target, targetAnchor);
            }
          } else {
            n2.el = n1.el;
            const mainAnchor = n2.anchor = n1.anchor;
            const target = n2.target = n1.target;
            const targetAnchor = n2.targetAnchor = n1.targetAnchor;
            const wasDisabled = isTeleportDisabled(n1.props);
            const currentContainer = wasDisabled ? container : target;
            const currentAnchor = wasDisabled ? mainAnchor : targetAnchor;
            isSVG = isSVG || isTargetSVG(target);
            if (dynamicChildren) {
              patchBlockChildren(
                n1.dynamicChildren,
                dynamicChildren,
                currentContainer,
                parentComponent,
                parentSuspense,
                isSVG,
                slotScopeIds
              );
              traverseStaticChildren(n1, n2, true);
            } else if (!optimized) {
              patchChildren(
                n1,
                n2,
                currentContainer,
                currentAnchor,
                parentComponent,
                parentSuspense,
                isSVG,
                slotScopeIds,
                false
              );
            }
            if (disabled) {
              if (!wasDisabled) {
                moveTeleport(
                  n2,
                  container,
                  mainAnchor,
                  internals,
                  1
                );
              } else {
                if (n2.props && n1.props && n2.props.to !== n1.props.to) {
                  n2.props.to = n1.props.to;
                }
              }
            } else {
              if ((n2.props && n2.props.to) !== (n1.props && n1.props.to)) {
                const nextTarget = n2.target = resolveTarget(
                  n2.props,
                  querySelector
                );
                if (nextTarget) {
                  moveTeleport(
                    n2,
                    nextTarget,
                    null,
                    internals,
                    0
                  );
                } else {
                  warn3(
                    "Invalid Teleport target on update:",
                    target,
                    `(${typeof target})`
                  );
                }
              } else if (wasDisabled) {
                moveTeleport(
                  n2,
                  target,
                  targetAnchor,
                  internals,
                  1
                );
              }
            }
          }
          updateCssVars(n2);
        },
        remove(vnode, parentComponent, parentSuspense, optimized, { um: unmount, o: { remove: hostRemove } }, doRemove) {
          const { shapeFlag, children: children2, anchor, targetAnchor, target, props } = vnode;
          if (target) {
            hostRemove(targetAnchor);
          }
          doRemove && hostRemove(anchor);
          if (shapeFlag & 16) {
            const shouldRemove = doRemove || !isTeleportDisabled(props);
            for (let i = 0; i < children2.length; i++) {
              const child = children2[i];
              unmount(
                child,
                parentComponent,
                parentSuspense,
                shouldRemove,
                !!child.dynamicChildren
              );
            }
          }
        },
        move: moveTeleport,
        hydrate: hydrateTeleport
      };
      function moveTeleport(vnode, container, parentAnchor, { o: { insert }, m: move }, moveType = 2) {
        if (moveType === 0) {
          insert(vnode.targetAnchor, container, parentAnchor);
        }
        const { el, anchor, shapeFlag, children: children2, props } = vnode;
        const isReorder = moveType === 2;
        if (isReorder) {
          insert(el, container, parentAnchor);
        }
        if (!isReorder || isTeleportDisabled(props)) {
          if (shapeFlag & 16) {
            for (let i = 0; i < children2.length; i++) {
              move(
                children2[i],
                container,
                parentAnchor,
                2
              );
            }
          }
        }
        if (isReorder) {
          insert(anchor, container, parentAnchor);
        }
      }
      function hydrateTeleport(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized, {
        o: { nextSibling, parentNode, querySelector }
      }, hydrateChildren) {
        const target = vnode.target = resolveTarget(
          vnode.props,
          querySelector
        );
        if (target) {
          const targetNode = target._lpa || target.firstChild;
          if (vnode.shapeFlag & 16) {
            if (isTeleportDisabled(vnode.props)) {
              vnode.anchor = hydrateChildren(
                nextSibling(node),
                vnode,
                parentNode(node),
                parentComponent,
                parentSuspense,
                slotScopeIds,
                optimized
              );
              vnode.targetAnchor = targetNode;
            } else {
              vnode.anchor = nextSibling(node);
              let targetAnchor = targetNode;
              while (targetAnchor) {
                targetAnchor = nextSibling(targetAnchor);
                if (targetAnchor && targetAnchor.nodeType === 8 && targetAnchor.data === "teleport anchor") {
                  vnode.targetAnchor = targetAnchor;
                  target._lpa = vnode.targetAnchor && nextSibling(vnode.targetAnchor);
                  break;
                }
              }
              hydrateChildren(
                targetNode,
                vnode,
                target,
                parentComponent,
                parentSuspense,
                slotScopeIds,
                optimized
              );
            }
          }
          updateCssVars(vnode);
        }
        return vnode.anchor && nextSibling(vnode.anchor);
      }
      var Teleport2 = TeleportImpl;
      function updateCssVars(vnode) {
        const ctx = vnode.ctx;
        if (ctx && ctx.ut) {
          let node = vnode.children[0].el;
          while (node && node !== vnode.targetAnchor) {
            if (node.nodeType === 1)
              node.setAttribute("data-v-owner", ctx.uid);
            node = node.nextSibling;
          }
          ctx.ut();
        }
      }
      var Fragment2 = Symbol.for("v-fgt");
      var Text = Symbol.for("v-txt");
      var Comment = Symbol.for("v-cmt");
      var Static = Symbol.for("v-stc");
      var blockStack = [];
      var currentBlock = null;
      function openBlock2(disableTracking = false) {
        blockStack.push(currentBlock = disableTracking ? null : []);
      }
      function closeBlock() {
        blockStack.pop();
        currentBlock = blockStack[blockStack.length - 1] || null;
      }
      var isBlockTreeEnabled = 1;
      function setBlockTracking(value) {
        isBlockTreeEnabled += value;
      }
      function setupBlock(vnode) {
        vnode.dynamicChildren = isBlockTreeEnabled > 0 ? currentBlock || shared.EMPTY_ARR : null;
        closeBlock();
        if (isBlockTreeEnabled > 0 && currentBlock) {
          currentBlock.push(vnode);
        }
        return vnode;
      }
      function createElementBlock2(type, props, children2, patchFlag, dynamicProps, shapeFlag) {
        return setupBlock(
          createBaseVNode(
            type,
            props,
            children2,
            patchFlag,
            dynamicProps,
            shapeFlag,
            true
          )
        );
      }
      function createBlock2(type, props, children2, patchFlag, dynamicProps) {
        return setupBlock(
          createVNode2(
            type,
            props,
            children2,
            patchFlag,
            dynamicProps,
            true
          )
        );
      }
      function isVNode(value) {
        return value ? value.__v_isVNode === true : false;
      }
      function isSameVNodeType(n1, n2) {
        if (n2.shapeFlag & 6 && hmrDirtyComponents.has(n2.type)) {
          n1.shapeFlag &= ~256;
          n2.shapeFlag &= ~512;
          return false;
        }
        return n1.type === n2.type && n1.key === n2.key;
      }
      var vnodeArgsTransformer;
      function transformVNodeArgs(transformer) {
        vnodeArgsTransformer = transformer;
      }
      var createVNodeWithArgsTransform = (...args) => {
        return _createVNode6(
          ...vnodeArgsTransformer ? vnodeArgsTransformer(args, currentRenderingInstance) : args
        );
      };
      var InternalObjectKey = `__vInternal`;
      var normalizeKey = ({ key }) => key != null ? key : null;
      var normalizeRef = ({
        ref: ref17,
        ref_key,
        ref_for
      }) => {
        if (typeof ref17 === "number") {
          ref17 = "" + ref17;
        }
        return ref17 != null ? shared.isString(ref17) || reactivity.isRef(ref17) || shared.isFunction(ref17) ? { i: currentRenderingInstance, r: ref17, k: ref_key, f: !!ref_for } : ref17 : null;
      };
      function createBaseVNode(type, props = null, children2 = null, patchFlag = 0, dynamicProps = null, shapeFlag = type === Fragment2 ? 0 : 1, isBlockNode = false, needFullChildrenNormalization = false) {
        const vnode = {
          __v_isVNode: true,
          __v_skip: true,
          type,
          props,
          key: props && normalizeKey(props),
          ref: props && normalizeRef(props),
          scopeId: currentScopeId,
          slotScopeIds: null,
          children: children2,
          component: null,
          suspense: null,
          ssContent: null,
          ssFallback: null,
          dirs: null,
          transition: null,
          el: null,
          anchor: null,
          target: null,
          targetAnchor: null,
          staticCount: 0,
          shapeFlag,
          patchFlag,
          dynamicProps,
          dynamicChildren: null,
          appContext: null,
          ctx: currentRenderingInstance
        };
        if (needFullChildrenNormalization) {
          normalizeChildren(vnode, children2);
          if (shapeFlag & 128) {
            type.normalize(vnode);
          }
        } else if (children2) {
          vnode.shapeFlag |= shared.isString(children2) ? 8 : 16;
        }
        if (vnode.key !== vnode.key) {
          warn3(`VNode created with invalid key (NaN). VNode type:`, vnode.type);
        }
        if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock && (vnode.patchFlag > 0 || shapeFlag & 6) && vnode.patchFlag !== 32) {
          currentBlock.push(vnode);
        }
        return vnode;
      }
      var createVNode2 = createVNodeWithArgsTransform;
      function _createVNode6(type, props = null, children2 = null, patchFlag = 0, dynamicProps = null, isBlockNode = false) {
        if (!type || type === NULL_DYNAMIC_COMPONENT) {
          if (!type) {
            warn3(`Invalid vnode type when creating vnode: ${type}.`);
          }
          type = Comment;
        }
        if (isVNode(type)) {
          const cloned = cloneVNode(
            type,
            props,
            true
          );
          if (children2) {
            normalizeChildren(cloned, children2);
          }
          if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock) {
            if (cloned.shapeFlag & 6) {
              currentBlock[currentBlock.indexOf(type)] = cloned;
            } else {
              currentBlock.push(cloned);
            }
          }
          cloned.patchFlag |= -2;
          return cloned;
        }
        if (isClassComponent(type)) {
          type = type.__vccOpts;
        }
        if (props) {
          props = guardReactiveProps(props);
          let { class: klass, style } = props;
          if (klass && !shared.isString(klass)) {
            props.class = shared.normalizeClass(klass);
          }
          if (shared.isObject(style)) {
            if (reactivity.isProxy(style) && !shared.isArray(style)) {
              style = shared.extend({}, style);
            }
            props.style = shared.normalizeStyle(style);
          }
        }
        const shapeFlag = shared.isString(type) ? 1 : isSuspense(type) ? 128 : isTeleport(type) ? 64 : shared.isObject(type) ? 4 : shared.isFunction(type) ? 2 : 0;
        if (shapeFlag & 4 && reactivity.isProxy(type)) {
          type = reactivity.toRaw(type);
          warn3(
            `Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with \`markRaw\` or using \`shallowRef\` instead of \`ref\`.`,
            `
Component that was made reactive: `,
            type
          );
        }
        return createBaseVNode(
          type,
          props,
          children2,
          patchFlag,
          dynamicProps,
          shapeFlag,
          isBlockNode,
          true
        );
      }
      function guardReactiveProps(props) {
        if (!props)
          return null;
        return reactivity.isProxy(props) || InternalObjectKey in props ? shared.extend({}, props) : props;
      }
      function cloneVNode(vnode, extraProps, mergeRef = false) {
        const { props, ref: ref17, patchFlag, children: children2 } = vnode;
        const mergedProps = extraProps ? mergeProps2(props || {}, extraProps) : props;
        const cloned = {
          __v_isVNode: true,
          __v_skip: true,
          type: vnode.type,
          props: mergedProps,
          key: mergedProps && normalizeKey(mergedProps),
          ref: extraProps && extraProps.ref ? mergeRef && ref17 ? shared.isArray(ref17) ? ref17.concat(normalizeRef(extraProps)) : [ref17, normalizeRef(extraProps)] : normalizeRef(extraProps) : ref17,
          scopeId: vnode.scopeId,
          slotScopeIds: vnode.slotScopeIds,
          children: patchFlag === -1 && shared.isArray(children2) ? children2.map(deepCloneVNode) : children2,
          target: vnode.target,
          targetAnchor: vnode.targetAnchor,
          staticCount: vnode.staticCount,
          shapeFlag: vnode.shapeFlag,
          patchFlag: extraProps && vnode.type !== Fragment2 ? patchFlag === -1 ? 16 : patchFlag | 16 : patchFlag,
          dynamicProps: vnode.dynamicProps,
          dynamicChildren: vnode.dynamicChildren,
          appContext: vnode.appContext,
          dirs: vnode.dirs,
          transition: vnode.transition,
          component: vnode.component,
          suspense: vnode.suspense,
          ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
          ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
          el: vnode.el,
          anchor: vnode.anchor,
          ctx: vnode.ctx,
          ce: vnode.ce
        };
        return cloned;
      }
      function deepCloneVNode(vnode) {
        const cloned = cloneVNode(vnode);
        if (shared.isArray(vnode.children)) {
          cloned.children = vnode.children.map(deepCloneVNode);
        }
        return cloned;
      }
      function createTextVNode2(text = " ", flag = 0) {
        return createVNode2(Text, null, text, flag);
      }
      function createStaticVNode(content, numberOfNodes) {
        const vnode = createVNode2(Static, null, content);
        vnode.staticCount = numberOfNodes;
        return vnode;
      }
      function createCommentVNode2(text = "", asBlock = false) {
        return asBlock ? (openBlock2(), createBlock2(Comment, null, text)) : createVNode2(Comment, null, text);
      }
      function normalizeVNode(child) {
        if (child == null || typeof child === "boolean") {
          return createVNode2(Comment);
        } else if (shared.isArray(child)) {
          return createVNode2(
            Fragment2,
            null,
            child.slice()
          );
        } else if (typeof child === "object") {
          return cloneIfMounted(child);
        } else {
          return createVNode2(Text, null, String(child));
        }
      }
      function cloneIfMounted(child) {
        return child.el === null && child.patchFlag !== -1 || child.memo ? child : cloneVNode(child);
      }
      function normalizeChildren(vnode, children2) {
        let type = 0;
        const { shapeFlag } = vnode;
        if (children2 == null) {
          children2 = null;
        } else if (shared.isArray(children2)) {
          type = 16;
        } else if (typeof children2 === "object") {
          if (shapeFlag & (1 | 64)) {
            const slot = children2.default;
            if (slot) {
              slot._c && (slot._d = false);
              normalizeChildren(vnode, slot());
              slot._c && (slot._d = true);
            }
            return;
          } else {
            type = 32;
            const slotFlag = children2._;
            if (!slotFlag && !(InternalObjectKey in children2)) {
              children2._ctx = currentRenderingInstance;
            } else if (slotFlag === 3 && currentRenderingInstance) {
              if (currentRenderingInstance.slots._ === 1) {
                children2._ = 1;
              } else {
                children2._ = 2;
                vnode.patchFlag |= 1024;
              }
            }
          }
        } else if (shared.isFunction(children2)) {
          children2 = { default: children2, _ctx: currentRenderingInstance };
          type = 32;
        } else {
          children2 = String(children2);
          if (shapeFlag & 64) {
            type = 16;
            children2 = [createTextVNode2(children2)];
          } else {
            type = 8;
          }
        }
        vnode.children = children2;
        vnode.shapeFlag |= type;
      }
      function mergeProps2(...args) {
        const ret = {};
        for (let i = 0; i < args.length; i++) {
          const toMerge = args[i];
          for (const key in toMerge) {
            if (key === "class") {
              if (ret.class !== toMerge.class) {
                ret.class = shared.normalizeClass([ret.class, toMerge.class]);
              }
            } else if (key === "style") {
              ret.style = shared.normalizeStyle([ret.style, toMerge.style]);
            } else if (shared.isOn(key)) {
              const existing = ret[key];
              const incoming = toMerge[key];
              if (incoming && existing !== incoming && !(shared.isArray(existing) && existing.includes(incoming))) {
                ret[key] = existing ? [].concat(existing, incoming) : incoming;
              }
            } else if (key !== "") {
              ret[key] = toMerge[key];
            }
          }
        }
        return ret;
      }
      function invokeVNodeHook(hook, instance, vnode, prevVNode = null) {
        callWithAsyncErrorHandling(hook, instance, 7, [
          vnode,
          prevVNode
        ]);
      }
      var emptyAppContext = createAppContext();
      var uid = 0;
      function createComponentInstance(vnode, parent, suspense) {
        const type = vnode.type;
        const appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
        const instance = {
          uid: uid++,
          vnode,
          type,
          parent,
          appContext,
          root: null,
          next: null,
          subTree: null,
          effect: null,
          update: null,
          scope: new reactivity.EffectScope(
            true
          ),
          render: null,
          proxy: null,
          exposed: null,
          exposeProxy: null,
          withProxy: null,
          provides: parent ? parent.provides : Object.create(appContext.provides),
          accessCache: null,
          renderCache: [],
          components: null,
          directives: null,
          propsOptions: normalizePropsOptions(type, appContext),
          emitsOptions: normalizeEmitsOptions(type, appContext),
          emit: null,
          emitted: null,
          propsDefaults: shared.EMPTY_OBJ,
          inheritAttrs: type.inheritAttrs,
          ctx: shared.EMPTY_OBJ,
          data: shared.EMPTY_OBJ,
          props: shared.EMPTY_OBJ,
          attrs: shared.EMPTY_OBJ,
          slots: shared.EMPTY_OBJ,
          refs: shared.EMPTY_OBJ,
          setupState: shared.EMPTY_OBJ,
          setupContext: null,
          attrsProxy: null,
          slotsProxy: null,
          suspense,
          suspenseId: suspense ? suspense.pendingId : 0,
          asyncDep: null,
          asyncResolved: false,
          isMounted: false,
          isUnmounted: false,
          isDeactivated: false,
          bc: null,
          c: null,
          bm: null,
          m: null,
          bu: null,
          u: null,
          um: null,
          bum: null,
          da: null,
          a: null,
          rtg: null,
          rtc: null,
          ec: null,
          sp: null
        };
        {
          instance.ctx = createDevRenderContext(instance);
        }
        instance.root = parent ? parent.root : instance;
        instance.emit = emit.bind(null, instance);
        if (vnode.ce) {
          vnode.ce(instance);
        }
        return instance;
      }
      var currentInstance = null;
      var getCurrentInstance5 = () => currentInstance || currentRenderingInstance;
      var internalSetCurrentInstance;
      var globalCurrentInstanceSetters;
      var settersKey = "__VUE_INSTANCE_SETTERS__";
      {
        if (!(globalCurrentInstanceSetters = shared.getGlobalThis()[settersKey])) {
          globalCurrentInstanceSetters = shared.getGlobalThis()[settersKey] = [];
        }
        globalCurrentInstanceSetters.push((i) => currentInstance = i);
        internalSetCurrentInstance = (instance) => {
          if (globalCurrentInstanceSetters.length > 1) {
            globalCurrentInstanceSetters.forEach((s2) => s2(instance));
          } else {
            globalCurrentInstanceSetters[0](instance);
          }
        };
      }
      var setCurrentInstance = (instance) => {
        internalSetCurrentInstance(instance);
        instance.scope.on();
      };
      var unsetCurrentInstance = () => {
        currentInstance && currentInstance.scope.off();
        internalSetCurrentInstance(null);
      };
      var isBuiltInTag = /* @__PURE__ */ shared.makeMap("slot,component");
      function validateComponentName(name, config) {
        const appIsNativeTag = config.isNativeTag || shared.NO;
        if (isBuiltInTag(name) || appIsNativeTag(name)) {
          warn3(
            "Do not use built-in or reserved HTML elements as component id: " + name
          );
        }
      }
      function isStatefulComponent(instance) {
        return instance.vnode.shapeFlag & 4;
      }
      var isInSSRComponentSetup = false;
      function setupComponent(instance, isSSR = false) {
        isInSSRComponentSetup = isSSR;
        const { props, children: children2 } = instance.vnode;
        const isStateful = isStatefulComponent(instance);
        initProps(instance, props, isStateful, isSSR);
        initSlots(instance, children2);
        const setupResult = isStateful ? setupStatefulComponent(instance, isSSR) : void 0;
        isInSSRComponentSetup = false;
        return setupResult;
      }
      function setupStatefulComponent(instance, isSSR) {
        var _a2;
        const Component = instance.type;
        {
          if (Component.name) {
            validateComponentName(Component.name, instance.appContext.config);
          }
          if (Component.components) {
            const names = Object.keys(Component.components);
            for (let i = 0; i < names.length; i++) {
              validateComponentName(names[i], instance.appContext.config);
            }
          }
          if (Component.directives) {
            const names = Object.keys(Component.directives);
            for (let i = 0; i < names.length; i++) {
              validateDirectiveName(names[i]);
            }
          }
          if (Component.compilerOptions && isRuntimeOnly()) {
            warn3(
              `"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.`
            );
          }
        }
        instance.accessCache = /* @__PURE__ */ Object.create(null);
        instance.proxy = reactivity.markRaw(new Proxy(instance.ctx, PublicInstanceProxyHandlers));
        {
          exposePropsOnRenderContext(instance);
        }
        const { setup } = Component;
        if (setup) {
          const setupContext = instance.setupContext = setup.length > 1 ? createSetupContext(instance) : null;
          setCurrentInstance(instance);
          reactivity.pauseTracking();
          const setupResult = callWithErrorHandling(
            setup,
            instance,
            0,
            [reactivity.shallowReadonly(instance.props), setupContext]
          );
          reactivity.resetTracking();
          unsetCurrentInstance();
          if (shared.isPromise(setupResult)) {
            setupResult.then(unsetCurrentInstance, unsetCurrentInstance);
            if (isSSR) {
              return setupResult.then((resolvedResult) => {
                handleSetupResult(instance, resolvedResult, isSSR);
              }).catch((e2) => {
                handleError(e2, instance, 0);
              });
            } else {
              instance.asyncDep = setupResult;
              if (!instance.suspense) {
                const name = (_a2 = Component.name) != null ? _a2 : "Anonymous";
                warn3(
                  `Component <${name}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
                );
              }
            }
          } else {
            handleSetupResult(instance, setupResult, isSSR);
          }
        } else {
          finishComponentSetup(instance, isSSR);
        }
      }
      function handleSetupResult(instance, setupResult, isSSR) {
        if (shared.isFunction(setupResult)) {
          if (instance.type.__ssrInlineRender) {
            instance.ssrRender = setupResult;
          } else {
            instance.render = setupResult;
          }
        } else if (shared.isObject(setupResult)) {
          if (isVNode(setupResult)) {
            warn3(
              `setup() should not return VNodes directly - return a render function instead.`
            );
          }
          {
            instance.devtoolsRawSetupState = setupResult;
          }
          instance.setupState = reactivity.proxyRefs(setupResult);
          {
            exposeSetupStateOnRenderContext(instance);
          }
        } else if (setupResult !== void 0) {
          warn3(
            `setup() should return an object. Received: ${setupResult === null ? "null" : typeof setupResult}`
          );
        }
        finishComponentSetup(instance, isSSR);
      }
      var compile2;
      var installWithProxy;
      function registerRuntimeCompiler(_compile) {
        compile2 = _compile;
        installWithProxy = (i) => {
          if (i.render._rc) {
            i.withProxy = new Proxy(i.ctx, RuntimeCompiledPublicInstanceProxyHandlers);
          }
        };
      }
      var isRuntimeOnly = () => !compile2;
      function finishComponentSetup(instance, isSSR, skipOptions) {
        const Component = instance.type;
        if (!instance.render) {
          if (!isSSR && compile2 && !Component.render) {
            const template = Component.template || resolveMergedOptions(instance).template;
            if (template) {
              {
                startMeasure(instance, `compile`);
              }
              const { isCustomElement, compilerOptions } = instance.appContext.config;
              const { delimiters, compilerOptions: componentCompilerOptions } = Component;
              const finalCompilerOptions = shared.extend(
                shared.extend(
                  {
                    isCustomElement,
                    delimiters
                  },
                  compilerOptions
                ),
                componentCompilerOptions
              );
              Component.render = compile2(template, finalCompilerOptions);
              {
                endMeasure(instance, `compile`);
              }
            }
          }
          instance.render = Component.render || shared.NOOP;
          if (installWithProxy) {
            installWithProxy(instance);
          }
        }
        {
          setCurrentInstance(instance);
          reactivity.pauseTracking();
          try {
            applyOptions(instance);
          } finally {
            reactivity.resetTracking();
            unsetCurrentInstance();
          }
        }
        if (!Component.render && instance.render === shared.NOOP && !isSSR) {
          if (!compile2 && Component.template) {
            warn3(
              `Component provided template option but runtime compilation is not supported in this build of Vue.`
            );
          } else {
            warn3(`Component is missing template or render function.`);
          }
        }
      }
      function getAttrsProxy(instance) {
        return instance.attrsProxy || (instance.attrsProxy = new Proxy(
          instance.attrs,
          {
            get(target, key) {
              markAttrsAccessed();
              reactivity.track(instance, "get", "$attrs");
              return target[key];
            },
            set() {
              warn3(`setupContext.attrs is readonly.`);
              return false;
            },
            deleteProperty() {
              warn3(`setupContext.attrs is readonly.`);
              return false;
            }
          }
        ));
      }
      function getSlotsProxy(instance) {
        return instance.slotsProxy || (instance.slotsProxy = new Proxy(instance.slots, {
          get(target, key) {
            reactivity.track(instance, "get", "$slots");
            return target[key];
          }
        }));
      }
      function createSetupContext(instance) {
        const expose = (exposed) => {
          {
            if (instance.exposed) {
              warn3(`expose() should be called only once per setup().`);
            }
            if (exposed != null) {
              let exposedType = typeof exposed;
              if (exposedType === "object") {
                if (shared.isArray(exposed)) {
                  exposedType = "array";
                } else if (reactivity.isRef(exposed)) {
                  exposedType = "ref";
                }
              }
              if (exposedType !== "object") {
                warn3(
                  `expose() should be passed a plain object, received ${exposedType}.`
                );
              }
            }
          }
          instance.exposed = exposed || {};
        };
        {
          return Object.freeze({
            get attrs() {
              return getAttrsProxy(instance);
            },
            get slots() {
              return getSlotsProxy(instance);
            },
            get emit() {
              return (event, ...args) => instance.emit(event, ...args);
            },
            expose
          });
        }
      }
      function getExposeProxy(instance) {
        if (instance.exposed) {
          return instance.exposeProxy || (instance.exposeProxy = new Proxy(reactivity.proxyRefs(reactivity.markRaw(instance.exposed)), {
            get(target, key) {
              if (key in target) {
                return target[key];
              } else if (key in publicPropertiesMap) {
                return publicPropertiesMap[key](instance);
              }
            },
            has(target, key) {
              return key in target || key in publicPropertiesMap;
            }
          }));
        }
      }
      var classifyRE = /(?:^|[-_])(\w)/g;
      var classify = (str) => str.replace(classifyRE, (c) => c.toUpperCase()).replace(/[-_]/g, "");
      function getComponentName(Component, includeInferred = true) {
        return shared.isFunction(Component) ? Component.displayName || Component.name : Component.name || includeInferred && Component.__name;
      }
      function formatComponentName(instance, Component, isRoot = false) {
        let name = getComponentName(Component);
        if (!name && Component.__file) {
          const match = Component.__file.match(/([^/\\]+)\.\w+$/);
          if (match) {
            name = match[1];
          }
        }
        if (!name && instance && instance.parent) {
          const inferFromRegistry = (registry) => {
            for (const key in registry) {
              if (registry[key] === Component) {
                return key;
              }
            }
          };
          name = inferFromRegistry(
            instance.components || instance.parent.type.components
          ) || inferFromRegistry(instance.appContext.components);
        }
        return name ? classify(name) : isRoot ? `App` : `Anonymous`;
      }
      function isClassComponent(value) {
        return shared.isFunction(value) && "__vccOpts" in value;
      }
      var computed19 = (getterOrOptions, debugOptions) => {
        return reactivity.computed(getterOrOptions, debugOptions, isInSSRComponentSetup);
      };
      function h3(type, propsOrChildren, children2) {
        const l = arguments.length;
        if (l === 2) {
          if (shared.isObject(propsOrChildren) && !shared.isArray(propsOrChildren)) {
            if (isVNode(propsOrChildren)) {
              return createVNode2(type, null, [propsOrChildren]);
            }
            return createVNode2(type, propsOrChildren);
          } else {
            return createVNode2(type, null, propsOrChildren);
          }
        } else {
          if (l > 3) {
            children2 = Array.prototype.slice.call(arguments, 2);
          } else if (l === 3 && isVNode(children2)) {
            children2 = [children2];
          }
          return createVNode2(type, propsOrChildren, children2);
        }
      }
      var ssrContextKey = Symbol.for("v-scx");
      var useSSRContext = () => {
        {
          const ctx = inject5(ssrContextKey);
          if (!ctx) {
            warn3(
              `Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build.`
            );
          }
          return ctx;
        }
      };
      function isShallow(value) {
        return !!(value && value["__v_isShallow"]);
      }
      function initCustomFormatter2() {
        if (typeof window === "undefined") {
          return;
        }
        const vueStyle = { style: "color:#3ba776" };
        const numberStyle = { style: "color:#0b1bc9" };
        const stringStyle = { style: "color:#b62e24" };
        const keywordStyle = { style: "color:#9d288c" };
        const formatter = {
          header(obj) {
            if (!shared.isObject(obj)) {
              return null;
            }
            if (obj.__isVue) {
              return ["div", vueStyle, `VueInstance`];
            } else if (reactivity.isRef(obj)) {
              return [
                "div",
                {},
                ["span", vueStyle, genRefFlag(obj)],
                "<",
                formatValue(obj.value),
                `>`
              ];
            } else if (reactivity.isReactive(obj)) {
              return [
                "div",
                {},
                ["span", vueStyle, isShallow(obj) ? "ShallowReactive" : "Reactive"],
                "<",
                formatValue(obj),
                `>${reactivity.isReadonly(obj) ? ` (readonly)` : ``}`
              ];
            } else if (reactivity.isReadonly(obj)) {
              return [
                "div",
                {},
                ["span", vueStyle, isShallow(obj) ? "ShallowReadonly" : "Readonly"],
                "<",
                formatValue(obj),
                ">"
              ];
            }
            return null;
          },
          hasBody(obj) {
            return obj && obj.__isVue;
          },
          body(obj) {
            if (obj && obj.__isVue) {
              return [
                "div",
                {},
                ...formatInstance(obj.$)
              ];
            }
          }
        };
        function formatInstance(instance) {
          const blocks = [];
          if (instance.type.props && instance.props) {
            blocks.push(createInstanceBlock("props", reactivity.toRaw(instance.props)));
          }
          if (instance.setupState !== shared.EMPTY_OBJ) {
            blocks.push(createInstanceBlock("setup", instance.setupState));
          }
          if (instance.data !== shared.EMPTY_OBJ) {
            blocks.push(createInstanceBlock("data", reactivity.toRaw(instance.data)));
          }
          const computed20 = extractKeys(instance, "computed");
          if (computed20) {
            blocks.push(createInstanceBlock("computed", computed20));
          }
          const injected = extractKeys(instance, "inject");
          if (injected) {
            blocks.push(createInstanceBlock("injected", injected));
          }
          blocks.push([
            "div",
            {},
            [
              "span",
              {
                style: keywordStyle.style + ";opacity:0.66"
              },
              "$ (internal): "
            ],
            ["object", { object: instance }]
          ]);
          return blocks;
        }
        function createInstanceBlock(type, target) {
          target = shared.extend({}, target);
          if (!Object.keys(target).length) {
            return ["span", {}];
          }
          return [
            "div",
            { style: "line-height:1.25em;margin-bottom:0.6em" },
            [
              "div",
              {
                style: "color:#476582"
              },
              type
            ],
            [
              "div",
              {
                style: "padding-left:1.25em"
              },
              ...Object.keys(target).map((key) => {
                return [
                  "div",
                  {},
                  ["span", keywordStyle, key + ": "],
                  formatValue(target[key], false)
                ];
              })
            ]
          ];
        }
        function formatValue(v, asRaw = true) {
          if (typeof v === "number") {
            return ["span", numberStyle, v];
          } else if (typeof v === "string") {
            return ["span", stringStyle, JSON.stringify(v)];
          } else if (typeof v === "boolean") {
            return ["span", keywordStyle, v];
          } else if (shared.isObject(v)) {
            return ["object", { object: asRaw ? reactivity.toRaw(v) : v }];
          } else {
            return ["span", stringStyle, String(v)];
          }
        }
        function extractKeys(instance, type) {
          const Comp = instance.type;
          if (shared.isFunction(Comp)) {
            return;
          }
          const extracted = {};
          for (const key in instance.ctx) {
            if (isKeyOfType(Comp, key, type)) {
              extracted[key] = instance.ctx[key];
            }
          }
          return extracted;
        }
        function isKeyOfType(Comp, key, type) {
          const opts = Comp[type];
          if (shared.isArray(opts) && opts.includes(key) || shared.isObject(opts) && key in opts) {
            return true;
          }
          if (Comp.extends && isKeyOfType(Comp.extends, key, type)) {
            return true;
          }
          if (Comp.mixins && Comp.mixins.some((m) => isKeyOfType(m, key, type))) {
            return true;
          }
        }
        function genRefFlag(v) {
          if (isShallow(v)) {
            return `ShallowRef`;
          }
          if (v.effect) {
            return `ComputedRef`;
          }
          return `Ref`;
        }
        if (window.devtoolsFormatters) {
          window.devtoolsFormatters.push(formatter);
        } else {
          window.devtoolsFormatters = [formatter];
        }
      }
      function withMemo(memo, render22, cache, index) {
        const cached = cache[index];
        if (cached && isMemoSame(cached, memo)) {
          return cached;
        }
        const ret = render22();
        ret.memo = memo.slice();
        return cache[index] = ret;
      }
      function isMemoSame(cached, memo) {
        const prev = cached.memo;
        if (prev.length != memo.length) {
          return false;
        }
        for (let i = 0; i < prev.length; i++) {
          if (shared.hasChanged(prev[i], memo[i])) {
            return false;
          }
        }
        if (isBlockTreeEnabled > 0 && currentBlock) {
          currentBlock.push(cached);
        }
        return true;
      }
      var version2 = "3.3.9";
      var _ssrUtils = {
        createComponentInstance,
        setupComponent,
        renderComponentRoot,
        setCurrentRenderingInstance,
        isVNode,
        normalizeVNode
      };
      var ssrUtils = _ssrUtils;
      var resolveFilter = null;
      var compatUtils = null;
      exports.EffectScope = reactivity.EffectScope;
      exports.ReactiveEffect = reactivity.ReactiveEffect;
      exports.customRef = reactivity.customRef;
      exports.effect = reactivity.effect;
      exports.effectScope = reactivity.effectScope;
      exports.getCurrentScope = reactivity.getCurrentScope;
      exports.isProxy = reactivity.isProxy;
      exports.isReactive = reactivity.isReactive;
      exports.isReadonly = reactivity.isReadonly;
      exports.isRef = reactivity.isRef;
      exports.isShallow = reactivity.isShallow;
      exports.markRaw = reactivity.markRaw;
      exports.onScopeDispose = reactivity.onScopeDispose;
      exports.proxyRefs = reactivity.proxyRefs;
      exports.reactive = reactivity.reactive;
      exports.readonly = reactivity.readonly;
      exports.ref = reactivity.ref;
      exports.shallowReactive = reactivity.shallowReactive;
      exports.shallowReadonly = reactivity.shallowReadonly;
      exports.shallowRef = reactivity.shallowRef;
      exports.stop = reactivity.stop;
      exports.toRaw = reactivity.toRaw;
      exports.toRef = reactivity.toRef;
      exports.toRefs = reactivity.toRefs;
      exports.toValue = reactivity.toValue;
      exports.triggerRef = reactivity.triggerRef;
      exports.unref = reactivity.unref;
      exports.camelize = shared.camelize;
      exports.capitalize = shared.capitalize;
      exports.normalizeClass = shared.normalizeClass;
      exports.normalizeProps = shared.normalizeProps;
      exports.normalizeStyle = shared.normalizeStyle;
      exports.toDisplayString = shared.toDisplayString;
      exports.toHandlerKey = shared.toHandlerKey;
      exports.BaseTransition = BaseTransition;
      exports.BaseTransitionPropsValidators = BaseTransitionPropsValidators;
      exports.Comment = Comment;
      exports.Fragment = Fragment2;
      exports.KeepAlive = KeepAlive;
      exports.Static = Static;
      exports.Suspense = Suspense;
      exports.Teleport = Teleport2;
      exports.Text = Text;
      exports.assertNumber = assertNumber;
      exports.callWithAsyncErrorHandling = callWithAsyncErrorHandling;
      exports.callWithErrorHandling = callWithErrorHandling;
      exports.cloneVNode = cloneVNode;
      exports.compatUtils = compatUtils;
      exports.computed = computed19;
      exports.createBlock = createBlock2;
      exports.createCommentVNode = createCommentVNode2;
      exports.createElementBlock = createElementBlock2;
      exports.createElementVNode = createBaseVNode;
      exports.createHydrationRenderer = createHydrationRenderer;
      exports.createPropsRestProxy = createPropsRestProxy2;
      exports.createRenderer = createRenderer;
      exports.createSlots = createSlots;
      exports.createStaticVNode = createStaticVNode;
      exports.createTextVNode = createTextVNode2;
      exports.createVNode = createVNode2;
      exports.defineAsyncComponent = defineAsyncComponent;
      exports.defineComponent = defineComponent2;
      exports.defineEmits = defineEmits;
      exports.defineExpose = defineExpose;
      exports.defineModel = defineModel;
      exports.defineOptions = defineOptions;
      exports.defineProps = defineProps;
      exports.defineSlots = defineSlots;
      exports.getCurrentInstance = getCurrentInstance5;
      exports.getTransitionRawChildren = getTransitionRawChildren;
      exports.guardReactiveProps = guardReactiveProps;
      exports.h = h3;
      exports.handleError = handleError;
      exports.hasInjectionContext = hasInjectionContext2;
      exports.initCustomFormatter = initCustomFormatter2;
      exports.inject = inject5;
      exports.isMemoSame = isMemoSame;
      exports.isRuntimeOnly = isRuntimeOnly;
      exports.isVNode = isVNode;
      exports.mergeDefaults = mergeDefaults;
      exports.mergeModels = mergeModels;
      exports.mergeProps = mergeProps2;
      exports.nextTick = nextTick9;
      exports.onActivated = onActivated;
      exports.onBeforeMount = onBeforeMount3;
      exports.onBeforeUnmount = onBeforeUnmount3;
      exports.onBeforeUpdate = onBeforeUpdate2;
      exports.onDeactivated = onDeactivated;
      exports.onErrorCaptured = onErrorCaptured;
      exports.onMounted = onMounted11;
      exports.onRenderTracked = onRenderTracked;
      exports.onRenderTriggered = onRenderTriggered;
      exports.onServerPrefetch = onServerPrefetch;
      exports.onUnmounted = onUnmounted3;
      exports.onUpdated = onUpdated2;
      exports.openBlock = openBlock2;
      exports.popScopeId = popScopeId;
      exports.provide = provide3;
      exports.pushScopeId = pushScopeId;
      exports.queuePostFlushCb = queuePostFlushCb;
      exports.registerRuntimeCompiler = registerRuntimeCompiler;
      exports.renderList = renderList2;
      exports.renderSlot = renderSlot2;
      exports.resolveComponent = resolveComponent2;
      exports.resolveDirective = resolveDirective;
      exports.resolveDynamicComponent = resolveDynamicComponent2;
      exports.resolveFilter = resolveFilter;
      exports.resolveTransitionHooks = resolveTransitionHooks;
      exports.setBlockTracking = setBlockTracking;
      exports.setDevtoolsHook = setDevtoolsHook;
      exports.setTransitionHooks = setTransitionHooks;
      exports.ssrContextKey = ssrContextKey;
      exports.ssrUtils = ssrUtils;
      exports.toHandlers = toHandlers;
      exports.transformVNodeArgs = transformVNodeArgs;
      exports.useAttrs = useAttrs2;
      exports.useModel = useModel;
      exports.useSSRContext = useSSRContext;
      exports.useSlots = useSlots8;
      exports.useTransitionState = useTransitionState;
      exports.version = version2;
      exports.warn = warn3;
      exports.watch = watch13;
      exports.watchEffect = watchEffect4;
      exports.watchPostEffect = watchPostEffect;
      exports.watchSyncEffect = watchSyncEffect;
      exports.withAsyncContext = withAsyncContext;
      exports.withCtx = withCtx2;
      exports.withDefaults = withDefaults;
      exports.withDirectives = withDirectives;
      exports.withMemo = withMemo;
      exports.withScopeId = withScopeId;
    }
  });

  // node_modules/@vue/runtime-core/index.js
  var require_runtime_core = __commonJS({
    "node_modules/@vue/runtime-core/index.js"(exports, module) {
      "use strict";
      if (false) {
        module.exports = null;
      } else {
        module.exports = require_runtime_core_cjs();
      }
    }
  });

  // node_modules/@vue/runtime-dom/dist/runtime-dom.cjs.js
  var require_runtime_dom_cjs = __commonJS({
    "node_modules/@vue/runtime-dom/dist/runtime-dom.cjs.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var runtimeCore = require_runtime_core();
      var shared = require_shared();
      var svgNS = "http://www.w3.org/2000/svg";
      var doc = typeof document !== "undefined" ? document : null;
      var templateContainer = doc && /* @__PURE__ */ doc.createElement("template");
      var nodeOps = {
        insert: (child, parent, anchor) => {
          parent.insertBefore(child, anchor || null);
        },
        remove: (child) => {
          const parent = child.parentNode;
          if (parent) {
            parent.removeChild(child);
          }
        },
        createElement: (tag, isSVG, is, props) => {
          const el = isSVG ? doc.createElementNS(svgNS, tag) : doc.createElement(tag, is ? { is } : void 0);
          if (tag === "select" && props && props.multiple != null) {
            el.setAttribute("multiple", props.multiple);
          }
          return el;
        },
        createText: (text) => doc.createTextNode(text),
        createComment: (text) => doc.createComment(text),
        setText: (node, text) => {
          node.nodeValue = text;
        },
        setElementText: (el, text) => {
          el.textContent = text;
        },
        parentNode: (node) => node.parentNode,
        nextSibling: (node) => node.nextSibling,
        querySelector: (selector2) => doc.querySelector(selector2),
        setScopeId(el, id2) {
          el.setAttribute(id2, "");
        },
        insertStaticContent(content, parent, anchor, isSVG, start2, end) {
          const before = anchor ? anchor.previousSibling : parent.lastChild;
          if (start2 && (start2 === end || start2.nextSibling)) {
            while (true) {
              parent.insertBefore(start2.cloneNode(true), anchor);
              if (start2 === end || !(start2 = start2.nextSibling))
                break;
            }
          } else {
            templateContainer.innerHTML = isSVG ? `<svg>${content}</svg>` : content;
            const template = templateContainer.content;
            if (isSVG) {
              const wrapper = template.firstChild;
              while (wrapper.firstChild) {
                template.appendChild(wrapper.firstChild);
              }
              template.removeChild(wrapper);
            }
            parent.insertBefore(template, anchor);
          }
          return [
            before ? before.nextSibling : parent.firstChild,
            anchor ? anchor.previousSibling : parent.lastChild
          ];
        }
      };
      var TRANSITION = "transition";
      var ANIMATION = "animation";
      var vtcKey = Symbol("_vtc");
      var Transition2 = (props, { slots }) => runtimeCore.h(runtimeCore.BaseTransition, resolveTransitionProps(props), slots);
      Transition2.displayName = "Transition";
      var DOMTransitionPropsValidators = {
        name: String,
        type: String,
        css: {
          type: Boolean,
          default: true
        },
        duration: [String, Number, Object],
        enterFromClass: String,
        enterActiveClass: String,
        enterToClass: String,
        appearFromClass: String,
        appearActiveClass: String,
        appearToClass: String,
        leaveFromClass: String,
        leaveActiveClass: String,
        leaveToClass: String
      };
      var TransitionPropsValidators = Transition2.props = /* @__PURE__ */ shared.extend(
        {},
        runtimeCore.BaseTransitionPropsValidators,
        DOMTransitionPropsValidators
      );
      var callHook = (hook, args = []) => {
        if (shared.isArray(hook)) {
          hook.forEach((h22) => h22(...args));
        } else if (hook) {
          hook(...args);
        }
      };
      var hasExplicitCallback = (hook) => {
        return hook ? shared.isArray(hook) ? hook.some((h22) => h22.length > 1) : hook.length > 1 : false;
      };
      function resolveTransitionProps(rawProps) {
        const baseProps = {};
        for (const key in rawProps) {
          if (!(key in DOMTransitionPropsValidators)) {
            baseProps[key] = rawProps[key];
          }
        }
        if (rawProps.css === false) {
          return baseProps;
        }
        const {
          name = "v",
          type,
          duration,
          enterFromClass = `${name}-enter-from`,
          enterActiveClass = `${name}-enter-active`,
          enterToClass = `${name}-enter-to`,
          appearFromClass = enterFromClass,
          appearActiveClass = enterActiveClass,
          appearToClass = enterToClass,
          leaveFromClass = `${name}-leave-from`,
          leaveActiveClass = `${name}-leave-active`,
          leaveToClass = `${name}-leave-to`
        } = rawProps;
        const durations = normalizeDuration(duration);
        const enterDuration = durations && durations[0];
        const leaveDuration = durations && durations[1];
        const {
          onBeforeEnter,
          onEnter,
          onEnterCancelled,
          onLeave,
          onLeaveCancelled,
          onBeforeAppear = onBeforeEnter,
          onAppear = onEnter,
          onAppearCancelled = onEnterCancelled
        } = baseProps;
        const finishEnter = (el, isAppear, done) => {
          removeTransitionClass(el, isAppear ? appearToClass : enterToClass);
          removeTransitionClass(el, isAppear ? appearActiveClass : enterActiveClass);
          done && done();
        };
        const finishLeave = (el, done) => {
          el._isLeaving = false;
          removeTransitionClass(el, leaveFromClass);
          removeTransitionClass(el, leaveToClass);
          removeTransitionClass(el, leaveActiveClass);
          done && done();
        };
        const makeEnterHook = (isAppear) => {
          return (el, done) => {
            const hook = isAppear ? onAppear : onEnter;
            const resolve = () => finishEnter(el, isAppear, done);
            callHook(hook, [el, resolve]);
            nextFrame(() => {
              removeTransitionClass(el, isAppear ? appearFromClass : enterFromClass);
              addTransitionClass(el, isAppear ? appearToClass : enterToClass);
              if (!hasExplicitCallback(hook)) {
                whenTransitionEnds(el, type, enterDuration, resolve);
              }
            });
          };
        };
        return shared.extend(baseProps, {
          onBeforeEnter(el) {
            callHook(onBeforeEnter, [el]);
            addTransitionClass(el, enterFromClass);
            addTransitionClass(el, enterActiveClass);
          },
          onBeforeAppear(el) {
            callHook(onBeforeAppear, [el]);
            addTransitionClass(el, appearFromClass);
            addTransitionClass(el, appearActiveClass);
          },
          onEnter: makeEnterHook(false),
          onAppear: makeEnterHook(true),
          onLeave(el, done) {
            el._isLeaving = true;
            const resolve = () => finishLeave(el, done);
            addTransitionClass(el, leaveFromClass);
            forceReflow();
            addTransitionClass(el, leaveActiveClass);
            nextFrame(() => {
              if (!el._isLeaving) {
                return;
              }
              removeTransitionClass(el, leaveFromClass);
              addTransitionClass(el, leaveToClass);
              if (!hasExplicitCallback(onLeave)) {
                whenTransitionEnds(el, type, leaveDuration, resolve);
              }
            });
            callHook(onLeave, [el, resolve]);
          },
          onEnterCancelled(el) {
            finishEnter(el, false);
            callHook(onEnterCancelled, [el]);
          },
          onAppearCancelled(el) {
            finishEnter(el, true);
            callHook(onAppearCancelled, [el]);
          },
          onLeaveCancelled(el) {
            finishLeave(el);
            callHook(onLeaveCancelled, [el]);
          }
        });
      }
      function normalizeDuration(duration) {
        if (duration == null) {
          return null;
        } else if (shared.isObject(duration)) {
          return [NumberOf(duration.enter), NumberOf(duration.leave)];
        } else {
          const n = NumberOf(duration);
          return [n, n];
        }
      }
      function NumberOf(val) {
        const res = shared.toNumber(val);
        {
          runtimeCore.assertNumber(res, "<transition> explicit duration");
        }
        return res;
      }
      function addTransitionClass(el, cls) {
        cls.split(/\s+/).forEach((c) => c && el.classList.add(c));
        (el[vtcKey] || (el[vtcKey] = /* @__PURE__ */ new Set())).add(cls);
      }
      function removeTransitionClass(el, cls) {
        cls.split(/\s+/).forEach((c) => c && el.classList.remove(c));
        const _vtc = el[vtcKey];
        if (_vtc) {
          _vtc.delete(cls);
          if (!_vtc.size) {
            el[vtcKey] = void 0;
          }
        }
      }
      function nextFrame(cb) {
        requestAnimationFrame(() => {
          requestAnimationFrame(cb);
        });
      }
      var endId = 0;
      function whenTransitionEnds(el, expectedType, explicitTimeout, resolve) {
        const id2 = el._endId = ++endId;
        const resolveIfNotStale = () => {
          if (id2 === el._endId) {
            resolve();
          }
        };
        if (explicitTimeout) {
          return setTimeout(resolveIfNotStale, explicitTimeout);
        }
        const { type, timeout: timeout2, propCount } = getTransitionInfo(el, expectedType);
        if (!type) {
          return resolve();
        }
        const endEvent = type + "end";
        let ended = 0;
        const end = () => {
          el.removeEventListener(endEvent, onEnd);
          resolveIfNotStale();
        };
        const onEnd = (e2) => {
          if (e2.target === el && ++ended >= propCount) {
            end();
          }
        };
        setTimeout(() => {
          if (ended < propCount) {
            end();
          }
        }, timeout2 + 1);
        el.addEventListener(endEvent, onEnd);
      }
      function getTransitionInfo(el, expectedType) {
        const styles = window.getComputedStyle(el);
        const getStyleProperties = (key) => (styles[key] || "").split(", ");
        const transitionDelays = getStyleProperties(`${TRANSITION}Delay`);
        const transitionDurations = getStyleProperties(`${TRANSITION}Duration`);
        const transitionTimeout = getTimeout(transitionDelays, transitionDurations);
        const animationDelays = getStyleProperties(`${ANIMATION}Delay`);
        const animationDurations = getStyleProperties(`${ANIMATION}Duration`);
        const animationTimeout = getTimeout(animationDelays, animationDurations);
        let type = null;
        let timeout2 = 0;
        let propCount = 0;
        if (expectedType === TRANSITION) {
          if (transitionTimeout > 0) {
            type = TRANSITION;
            timeout2 = transitionTimeout;
            propCount = transitionDurations.length;
          }
        } else if (expectedType === ANIMATION) {
          if (animationTimeout > 0) {
            type = ANIMATION;
            timeout2 = animationTimeout;
            propCount = animationDurations.length;
          }
        } else {
          timeout2 = Math.max(transitionTimeout, animationTimeout);
          type = timeout2 > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
          propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
        }
        const hasTransform = type === TRANSITION && /\b(transform|all)(,|$)/.test(
          getStyleProperties(`${TRANSITION}Property`).toString()
        );
        return {
          type,
          timeout: timeout2,
          propCount,
          hasTransform
        };
      }
      function getTimeout(delays, durations) {
        while (delays.length < durations.length) {
          delays = delays.concat(delays);
        }
        return Math.max(...durations.map((d, i) => toMs(d) + toMs(delays[i])));
      }
      function toMs(s2) {
        if (s2 === "auto")
          return 0;
        return Number(s2.slice(0, -1).replace(",", ".")) * 1e3;
      }
      function forceReflow() {
        return document.body.offsetHeight;
      }
      function patchClass(el, value, isSVG) {
        const transitionClasses = el[vtcKey];
        if (transitionClasses) {
          value = (value ? [value, ...transitionClasses] : [...transitionClasses]).join(" ");
        }
        if (value == null) {
          el.removeAttribute("class");
        } else if (isSVG) {
          el.setAttribute("class", value);
        } else {
          el.className = value;
        }
      }
      var vShowOldKey = Symbol("_vod");
      var vShow = {
        beforeMount(el, { value }, { transition: transition2 }) {
          el[vShowOldKey] = el.style.display === "none" ? "" : el.style.display;
          if (transition2 && value) {
            transition2.beforeEnter(el);
          } else {
            setDisplay(el, value);
          }
        },
        mounted(el, { value }, { transition: transition2 }) {
          if (transition2 && value) {
            transition2.enter(el);
          }
        },
        updated(el, { value, oldValue }, { transition: transition2 }) {
          if (!value === !oldValue)
            return;
          if (transition2) {
            if (value) {
              transition2.beforeEnter(el);
              setDisplay(el, true);
              transition2.enter(el);
            } else {
              transition2.leave(el, () => {
                setDisplay(el, false);
              });
            }
          } else {
            setDisplay(el, value);
          }
        },
        beforeUnmount(el, { value }) {
          setDisplay(el, value);
        }
      };
      function setDisplay(el, value) {
        el.style.display = value ? el[vShowOldKey] : "none";
      }
      function initVShowForSSR() {
        vShow.getSSRProps = ({ value }) => {
          if (!value) {
            return { style: { display: "none" } };
          }
        };
      }
      function patchStyle(el, prev, next) {
        const style = el.style;
        const isCssString = shared.isString(next);
        if (next && !isCssString) {
          if (prev && !shared.isString(prev)) {
            for (const key in prev) {
              if (next[key] == null) {
                setStyle(style, key, "");
              }
            }
          }
          for (const key in next) {
            setStyle(style, key, next[key]);
          }
        } else {
          const currentDisplay = style.display;
          if (isCssString) {
            if (prev !== next) {
              style.cssText = next;
            }
          } else if (prev) {
            el.removeAttribute("style");
          }
          if (vShowOldKey in el) {
            style.display = currentDisplay;
          }
        }
      }
      var semicolonRE = /[^\\];\s*$/;
      var importantRE = /\s*!important$/;
      function setStyle(style, name, val) {
        if (shared.isArray(val)) {
          val.forEach((v) => setStyle(style, name, v));
        } else {
          if (val == null)
            val = "";
          {
            if (semicolonRE.test(val)) {
              runtimeCore.warn(
                `Unexpected semicolon at the end of '${name}' style value: '${val}'`
              );
            }
          }
          if (name.startsWith("--")) {
            style.setProperty(name, val);
          } else {
            const prefixed = autoPrefix(style, name);
            if (importantRE.test(val)) {
              style.setProperty(
                shared.hyphenate(prefixed),
                val.replace(importantRE, ""),
                "important"
              );
            } else {
              style[prefixed] = val;
            }
          }
        }
      }
      var prefixes = ["Webkit", "Moz", "ms"];
      var prefixCache = {};
      function autoPrefix(style, rawName) {
        const cached = prefixCache[rawName];
        if (cached) {
          return cached;
        }
        let name = runtimeCore.camelize(rawName);
        if (name !== "filter" && name in style) {
          return prefixCache[rawName] = name;
        }
        name = shared.capitalize(name);
        for (let i = 0; i < prefixes.length; i++) {
          const prefixed = prefixes[i] + name;
          if (prefixed in style) {
            return prefixCache[rawName] = prefixed;
          }
        }
        return rawName;
      }
      var xlinkNS = "http://www.w3.org/1999/xlink";
      function patchAttr(el, key, value, isSVG, instance) {
        if (isSVG && key.startsWith("xlink:")) {
          if (value == null) {
            el.removeAttributeNS(xlinkNS, key.slice(6, key.length));
          } else {
            el.setAttributeNS(xlinkNS, key, value);
          }
        } else {
          const isBoolean = shared.isSpecialBooleanAttr(key);
          if (value == null || isBoolean && !shared.includeBooleanAttr(value)) {
            el.removeAttribute(key);
          } else {
            el.setAttribute(key, isBoolean ? "" : value);
          }
        }
      }
      function patchDOMProp(el, key, value, prevChildren, parentComponent, parentSuspense, unmountChildren) {
        if (key === "innerHTML" || key === "textContent") {
          if (prevChildren) {
            unmountChildren(prevChildren, parentComponent, parentSuspense);
          }
          el[key] = value == null ? "" : value;
          return;
        }
        const tag = el.tagName;
        if (key === "value" && tag !== "PROGRESS" && !tag.includes("-")) {
          el._value = value;
          const oldValue = tag === "OPTION" ? el.getAttribute("value") : el.value;
          const newValue = value == null ? "" : value;
          if (oldValue !== newValue) {
            el.value = newValue;
          }
          if (value == null) {
            el.removeAttribute(key);
          }
          return;
        }
        let needRemove = false;
        if (value === "" || value == null) {
          const type = typeof el[key];
          if (type === "boolean") {
            value = shared.includeBooleanAttr(value);
          } else if (value == null && type === "string") {
            value = "";
            needRemove = true;
          } else if (type === "number") {
            value = 0;
            needRemove = true;
          }
        }
        try {
          el[key] = value;
        } catch (e2) {
          if (!needRemove) {
            runtimeCore.warn(
              `Failed setting prop "${key}" on <${tag.toLowerCase()}>: value ${value} is invalid.`,
              e2
            );
          }
        }
        needRemove && el.removeAttribute(key);
      }
      function addEventListener(el, event, handler, options) {
        el.addEventListener(event, handler, options);
      }
      function removeEventListener(el, event, handler, options) {
        el.removeEventListener(event, handler, options);
      }
      var veiKey = Symbol("_vei");
      function patchEvent(el, rawName, prevValue, nextValue, instance = null) {
        const invokers = el[veiKey] || (el[veiKey] = {});
        const existingInvoker = invokers[rawName];
        if (nextValue && existingInvoker) {
          existingInvoker.value = nextValue;
        } else {
          const [name, options] = parseName(rawName);
          if (nextValue) {
            const invoker = invokers[rawName] = createInvoker(nextValue, instance);
            addEventListener(el, name, invoker, options);
          } else if (existingInvoker) {
            removeEventListener(el, name, existingInvoker, options);
            invokers[rawName] = void 0;
          }
        }
      }
      var optionsModifierRE = /(?:Once|Passive|Capture)$/;
      function parseName(name) {
        let options;
        if (optionsModifierRE.test(name)) {
          options = {};
          let m;
          while (m = name.match(optionsModifierRE)) {
            name = name.slice(0, name.length - m[0].length);
            options[m[0].toLowerCase()] = true;
          }
        }
        const event = name[2] === ":" ? name.slice(3) : shared.hyphenate(name.slice(2));
        return [event, options];
      }
      var cachedNow = 0;
      var p = /* @__PURE__ */ Promise.resolve();
      var getNow = () => cachedNow || (p.then(() => cachedNow = 0), cachedNow = Date.now());
      function createInvoker(initialValue, instance) {
        const invoker = (e2) => {
          if (!e2._vts) {
            e2._vts = Date.now();
          } else if (e2._vts <= invoker.attached) {
            return;
          }
          runtimeCore.callWithAsyncErrorHandling(
            patchStopImmediatePropagation(e2, invoker.value),
            instance,
            5,
            [e2]
          );
        };
        invoker.value = initialValue;
        invoker.attached = getNow();
        return invoker;
      }
      function patchStopImmediatePropagation(e2, value) {
        if (shared.isArray(value)) {
          const originalStop = e2.stopImmediatePropagation;
          e2.stopImmediatePropagation = () => {
            originalStop.call(e2);
            e2._stopped = true;
          };
          return value.map((fn) => (e22) => !e22._stopped && fn && fn(e22));
        } else {
          return value;
        }
      }
      var nativeOnRE = /^on[a-z]/;
      var patchProp = (el, key, prevValue, nextValue, isSVG = false, prevChildren, parentComponent, parentSuspense, unmountChildren) => {
        if (key === "class") {
          patchClass(el, nextValue, isSVG);
        } else if (key === "style") {
          patchStyle(el, prevValue, nextValue);
        } else if (shared.isOn(key)) {
          if (!shared.isModelListener(key)) {
            patchEvent(el, key, prevValue, nextValue, parentComponent);
          }
        } else if (key[0] === "." ? (key = key.slice(1), true) : key[0] === "^" ? (key = key.slice(1), false) : shouldSetAsProp(el, key, nextValue, isSVG)) {
          patchDOMProp(
            el,
            key,
            nextValue,
            prevChildren,
            parentComponent,
            parentSuspense,
            unmountChildren
          );
        } else {
          if (key === "true-value") {
            el._trueValue = nextValue;
          } else if (key === "false-value") {
            el._falseValue = nextValue;
          }
          patchAttr(el, key, nextValue, isSVG);
        }
      };
      function shouldSetAsProp(el, key, value, isSVG) {
        if (isSVG) {
          if (key === "innerHTML" || key === "textContent") {
            return true;
          }
          if (key in el && nativeOnRE.test(key) && shared.isFunction(value)) {
            return true;
          }
          return false;
        }
        if (key === "spellcheck" || key === "draggable" || key === "translate") {
          return false;
        }
        if (key === "form") {
          return false;
        }
        if (key === "list" && el.tagName === "INPUT") {
          return false;
        }
        if (key === "type" && el.tagName === "TEXTAREA") {
          return false;
        }
        if (nativeOnRE.test(key) && shared.isString(value)) {
          return false;
        }
        return key in el;
      }
      function defineCustomElement(options, hydrate2) {
        const Comp = runtimeCore.defineComponent(options);
        class VueCustomElement extends VueElement {
          constructor(initialProps) {
            super(Comp, initialProps, hydrate2);
          }
        }
        VueCustomElement.def = Comp;
        return VueCustomElement;
      }
      var defineSSRCustomElement = (options) => {
        return /* @__PURE__ */ defineCustomElement(options, hydrate);
      };
      var BaseClass = typeof HTMLElement !== "undefined" ? HTMLElement : class {
      };
      var VueElement = class extends BaseClass {
        constructor(_def, _props = {}, hydrate2) {
          super();
          this._def = _def;
          this._props = _props;
          this._instance = null;
          this._connected = false;
          this._resolved = false;
          this._numberProps = null;
          this._ob = null;
          if (this.shadowRoot && hydrate2) {
            hydrate2(this._createVNode(), this.shadowRoot);
          } else {
            if (this.shadowRoot) {
              runtimeCore.warn(
                `Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use \`defineSSRCustomElement\`.`
              );
            }
            this.attachShadow({ mode: "open" });
            if (!this._def.__asyncLoader) {
              this._resolveProps(this._def);
            }
          }
        }
        connectedCallback() {
          this._connected = true;
          if (!this._instance) {
            if (this._resolved) {
              this._update();
            } else {
              this._resolveDef();
            }
          }
        }
        disconnectedCallback() {
          this._connected = false;
          if (this._ob) {
            this._ob.disconnect();
            this._ob = null;
          }
          runtimeCore.nextTick(() => {
            if (!this._connected) {
              render22(null, this.shadowRoot);
              this._instance = null;
            }
          });
        }
        _resolveDef() {
          this._resolved = true;
          for (let i = 0; i < this.attributes.length; i++) {
            this._setAttr(this.attributes[i].name);
          }
          this._ob = new MutationObserver((mutations) => {
            for (const m of mutations) {
              this._setAttr(m.attributeName);
            }
          });
          this._ob.observe(this, { attributes: true });
          const resolve = (def, isAsync = false) => {
            const { props, styles } = def;
            let numberProps;
            if (props && !shared.isArray(props)) {
              for (const key in props) {
                const opt = props[key];
                if (opt === Number || opt && opt.type === Number) {
                  if (key in this._props) {
                    this._props[key] = shared.toNumber(this._props[key]);
                  }
                  (numberProps || (numberProps = /* @__PURE__ */ Object.create(null)))[shared.camelize(key)] = true;
                }
              }
            }
            this._numberProps = numberProps;
            if (isAsync) {
              this._resolveProps(def);
            }
            this._applyStyles(styles);
            this._update();
          };
          const asyncDef = this._def.__asyncLoader;
          if (asyncDef) {
            asyncDef().then((def) => resolve(def, true));
          } else {
            resolve(this._def);
          }
        }
        _resolveProps(def) {
          const { props } = def;
          const declaredPropKeys = shared.isArray(props) ? props : Object.keys(props || {});
          for (const key of Object.keys(this)) {
            if (key[0] !== "_" && declaredPropKeys.includes(key)) {
              this._setProp(key, this[key], true, false);
            }
          }
          for (const key of declaredPropKeys.map(shared.camelize)) {
            Object.defineProperty(this, key, {
              get() {
                return this._getProp(key);
              },
              set(val) {
                this._setProp(key, val);
              }
            });
          }
        }
        _setAttr(key) {
          let value = this.getAttribute(key);
          const camelKey = shared.camelize(key);
          if (this._numberProps && this._numberProps[camelKey]) {
            value = shared.toNumber(value);
          }
          this._setProp(camelKey, value, false);
        }
        _getProp(key) {
          return this._props[key];
        }
        _setProp(key, val, shouldReflect = true, shouldUpdate = true) {
          if (val !== this._props[key]) {
            this._props[key] = val;
            if (shouldUpdate && this._instance) {
              this._update();
            }
            if (shouldReflect) {
              if (val === true) {
                this.setAttribute(shared.hyphenate(key), "");
              } else if (typeof val === "string" || typeof val === "number") {
                this.setAttribute(shared.hyphenate(key), val + "");
              } else if (!val) {
                this.removeAttribute(shared.hyphenate(key));
              }
            }
          }
        }
        _update() {
          render22(this._createVNode(), this.shadowRoot);
        }
        _createVNode() {
          const vnode = runtimeCore.createVNode(this._def, shared.extend({}, this._props));
          if (!this._instance) {
            vnode.ce = (instance) => {
              this._instance = instance;
              instance.isCE = true;
              {
                instance.ceReload = (newStyles) => {
                  if (this._styles) {
                    this._styles.forEach((s2) => this.shadowRoot.removeChild(s2));
                    this._styles.length = 0;
                  }
                  this._applyStyles(newStyles);
                  this._instance = null;
                  this._update();
                };
              }
              const dispatch2 = (event, args) => {
                this.dispatchEvent(
                  new CustomEvent(event, {
                    detail: args
                  })
                );
              };
              instance.emit = (event, ...args) => {
                dispatch2(event, args);
                if (shared.hyphenate(event) !== event) {
                  dispatch2(shared.hyphenate(event), args);
                }
              };
              let parent = this;
              while (parent = parent && (parent.parentNode || parent.host)) {
                if (parent instanceof VueElement) {
                  instance.parent = parent._instance;
                  instance.provides = parent._instance.provides;
                  break;
                }
              }
            };
          }
          return vnode;
        }
        _applyStyles(styles) {
          if (styles) {
            styles.forEach((css) => {
              const s2 = document.createElement("style");
              s2.textContent = css;
              this.shadowRoot.appendChild(s2);
              {
                (this._styles || (this._styles = [])).push(s2);
              }
            });
          }
        }
      };
      function useCssModule(name = "$style") {
        {
          const instance = runtimeCore.getCurrentInstance();
          if (!instance) {
            runtimeCore.warn(`useCssModule must be called inside setup()`);
            return shared.EMPTY_OBJ;
          }
          const modules = instance.type.__cssModules;
          if (!modules) {
            runtimeCore.warn(`Current instance does not have CSS modules injected.`);
            return shared.EMPTY_OBJ;
          }
          const mod = modules[name];
          if (!mod) {
            runtimeCore.warn(`Current instance does not have CSS module named "${name}".`);
            return shared.EMPTY_OBJ;
          }
          return mod;
        }
      }
      function useCssVars(getter) {
        return;
      }
      var positionMap = /* @__PURE__ */ new WeakMap();
      var newPositionMap = /* @__PURE__ */ new WeakMap();
      var moveCbKey = Symbol("_moveCb");
      var enterCbKey = Symbol("_enterCb");
      var TransitionGroupImpl = {
        name: "TransitionGroup",
        props: /* @__PURE__ */ shared.extend({}, TransitionPropsValidators, {
          tag: String,
          moveClass: String
        }),
        setup(props, { slots }) {
          const instance = runtimeCore.getCurrentInstance();
          const state = runtimeCore.useTransitionState();
          let prevChildren;
          let children2;
          runtimeCore.onUpdated(() => {
            if (!prevChildren.length) {
              return;
            }
            const moveClass = props.moveClass || `${props.name || "v"}-move`;
            if (!hasCSSTransform(
              prevChildren[0].el,
              instance.vnode.el,
              moveClass
            )) {
              return;
            }
            prevChildren.forEach(callPendingCbs);
            prevChildren.forEach(recordPosition);
            const movedChildren = prevChildren.filter(applyTranslation);
            forceReflow();
            movedChildren.forEach((c) => {
              const el = c.el;
              const style = el.style;
              addTransitionClass(el, moveClass);
              style.transform = style.webkitTransform = style.transitionDuration = "";
              const cb = el[moveCbKey] = (e2) => {
                if (e2 && e2.target !== el) {
                  return;
                }
                if (!e2 || /transform$/.test(e2.propertyName)) {
                  el.removeEventListener("transitionend", cb);
                  el[moveCbKey] = null;
                  removeTransitionClass(el, moveClass);
                }
              };
              el.addEventListener("transitionend", cb);
            });
          });
          return () => {
            const rawProps = runtimeCore.toRaw(props);
            const cssTransitionProps = resolveTransitionProps(rawProps);
            let tag = rawProps.tag || runtimeCore.Fragment;
            prevChildren = children2;
            children2 = slots.default ? runtimeCore.getTransitionRawChildren(slots.default()) : [];
            for (let i = 0; i < children2.length; i++) {
              const child = children2[i];
              if (child.key != null) {
                runtimeCore.setTransitionHooks(
                  child,
                  runtimeCore.resolveTransitionHooks(child, cssTransitionProps, state, instance)
                );
              } else {
                runtimeCore.warn(`<TransitionGroup> children must be keyed.`);
              }
            }
            if (prevChildren) {
              for (let i = 0; i < prevChildren.length; i++) {
                const child = prevChildren[i];
                runtimeCore.setTransitionHooks(
                  child,
                  runtimeCore.resolveTransitionHooks(child, cssTransitionProps, state, instance)
                );
                positionMap.set(child, child.el.getBoundingClientRect());
              }
            }
            return runtimeCore.createVNode(tag, null, children2);
          };
        }
      };
      var removeMode = (props) => delete props.mode;
      /* @__PURE__ */ removeMode(TransitionGroupImpl.props);
      var TransitionGroup = TransitionGroupImpl;
      function callPendingCbs(c) {
        const el = c.el;
        if (el[moveCbKey]) {
          el[moveCbKey]();
        }
        if (el[enterCbKey]) {
          el[enterCbKey]();
        }
      }
      function recordPosition(c) {
        newPositionMap.set(c, c.el.getBoundingClientRect());
      }
      function applyTranslation(c) {
        const oldPos = positionMap.get(c);
        const newPos = newPositionMap.get(c);
        const dx = oldPos.left - newPos.left;
        const dy = oldPos.top - newPos.top;
        if (dx || dy) {
          const s2 = c.el.style;
          s2.transform = s2.webkitTransform = `translate(${dx}px,${dy}px)`;
          s2.transitionDuration = "0s";
          return c;
        }
      }
      function hasCSSTransform(el, root2, moveClass) {
        const clone = el.cloneNode();
        const _vtc = el[vtcKey];
        if (_vtc) {
          _vtc.forEach((cls) => {
            cls.split(/\s+/).forEach((c) => c && clone.classList.remove(c));
          });
        }
        moveClass.split(/\s+/).forEach((c) => c && clone.classList.add(c));
        clone.style.display = "none";
        const container = root2.nodeType === 1 ? root2 : root2.parentNode;
        container.appendChild(clone);
        const { hasTransform } = getTransitionInfo(clone);
        container.removeChild(clone);
        return hasTransform;
      }
      var getModelAssigner = (vnode) => {
        const fn = vnode.props["onUpdate:modelValue"] || false;
        return shared.isArray(fn) ? (value) => shared.invokeArrayFns(fn, value) : fn;
      };
      function onCompositionStart(e2) {
        e2.target.composing = true;
      }
      function onCompositionEnd(e2) {
        const target = e2.target;
        if (target.composing) {
          target.composing = false;
          target.dispatchEvent(new Event("input"));
        }
      }
      var assignKey = Symbol("_assign");
      var vModelText = {
        created(el, { modifiers: { lazy, trim, number } }, vnode) {
          el[assignKey] = getModelAssigner(vnode);
          const castToNumber = number || vnode.props && vnode.props.type === "number";
          addEventListener(el, lazy ? "change" : "input", (e2) => {
            if (e2.target.composing)
              return;
            let domValue = el.value;
            if (trim) {
              domValue = domValue.trim();
            }
            if (castToNumber) {
              domValue = shared.looseToNumber(domValue);
            }
            el[assignKey](domValue);
          });
          if (trim) {
            addEventListener(el, "change", () => {
              el.value = el.value.trim();
            });
          }
          if (!lazy) {
            addEventListener(el, "compositionstart", onCompositionStart);
            addEventListener(el, "compositionend", onCompositionEnd);
            addEventListener(el, "change", onCompositionEnd);
          }
        },
        mounted(el, { value }) {
          el.value = value == null ? "" : value;
        },
        beforeUpdate(el, { value, modifiers: { lazy, trim, number } }, vnode) {
          el[assignKey] = getModelAssigner(vnode);
          if (el.composing)
            return;
          const elValue = number || el.type === "number" ? shared.looseToNumber(el.value) : el.value;
          const newValue = value == null ? "" : value;
          if (elValue === newValue) {
            return;
          }
          if (document.activeElement === el && el.type !== "range") {
            if (lazy) {
              return;
            }
            if (trim && el.value.trim() === newValue) {
              return;
            }
          }
          el.value = newValue;
        }
      };
      var vModelCheckbox = {
        deep: true,
        created(el, _, vnode) {
          el[assignKey] = getModelAssigner(vnode);
          addEventListener(el, "change", () => {
            const modelValue = el._modelValue;
            const elementValue = getValue(el);
            const checked = el.checked;
            const assign2 = el[assignKey];
            if (shared.isArray(modelValue)) {
              const index = shared.looseIndexOf(modelValue, elementValue);
              const found = index !== -1;
              if (checked && !found) {
                assign2(modelValue.concat(elementValue));
              } else if (!checked && found) {
                const filtered = [...modelValue];
                filtered.splice(index, 1);
                assign2(filtered);
              }
            } else if (shared.isSet(modelValue)) {
              const cloned = new Set(modelValue);
              if (checked) {
                cloned.add(elementValue);
              } else {
                cloned.delete(elementValue);
              }
              assign2(cloned);
            } else {
              assign2(getCheckboxValue(el, checked));
            }
          });
        },
        mounted: setChecked,
        beforeUpdate(el, binding, vnode) {
          el[assignKey] = getModelAssigner(vnode);
          setChecked(el, binding, vnode);
        }
      };
      function setChecked(el, { value, oldValue }, vnode) {
        el._modelValue = value;
        if (shared.isArray(value)) {
          el.checked = shared.looseIndexOf(value, vnode.props.value) > -1;
        } else if (shared.isSet(value)) {
          el.checked = value.has(vnode.props.value);
        } else if (value !== oldValue) {
          el.checked = shared.looseEqual(value, getCheckboxValue(el, true));
        }
      }
      var vModelRadio = {
        created(el, { value }, vnode) {
          el.checked = shared.looseEqual(value, vnode.props.value);
          el[assignKey] = getModelAssigner(vnode);
          addEventListener(el, "change", () => {
            el[assignKey](getValue(el));
          });
        },
        beforeUpdate(el, { value, oldValue }, vnode) {
          el[assignKey] = getModelAssigner(vnode);
          if (value !== oldValue) {
            el.checked = shared.looseEqual(value, vnode.props.value);
          }
        }
      };
      var vModelSelect = {
        deep: true,
        created(el, { value, modifiers: { number } }, vnode) {
          const isSetModel = shared.isSet(value);
          addEventListener(el, "change", () => {
            const selectedVal = Array.prototype.filter.call(el.options, (o) => o.selected).map(
              (o) => number ? shared.looseToNumber(getValue(o)) : getValue(o)
            );
            el[assignKey](
              el.multiple ? isSetModel ? new Set(selectedVal) : selectedVal : selectedVal[0]
            );
          });
          el[assignKey] = getModelAssigner(vnode);
        },
        mounted(el, { value }) {
          setSelected(el, value);
        },
        beforeUpdate(el, _binding, vnode) {
          el[assignKey] = getModelAssigner(vnode);
        },
        updated(el, { value }) {
          setSelected(el, value);
        }
      };
      function setSelected(el, value) {
        const isMultiple = el.multiple;
        if (isMultiple && !shared.isArray(value) && !shared.isSet(value)) {
          runtimeCore.warn(
            `<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(value).slice(8, -1)}.`
          );
          return;
        }
        for (let i = 0, l = el.options.length; i < l; i++) {
          const option = el.options[i];
          const optionValue = getValue(option);
          if (isMultiple) {
            if (shared.isArray(value)) {
              option.selected = shared.looseIndexOf(value, optionValue) > -1;
            } else {
              option.selected = value.has(optionValue);
            }
          } else {
            if (shared.looseEqual(getValue(option), value)) {
              if (el.selectedIndex !== i)
                el.selectedIndex = i;
              return;
            }
          }
        }
        if (!isMultiple && el.selectedIndex !== -1) {
          el.selectedIndex = -1;
        }
      }
      function getValue(el) {
        return "_value" in el ? el._value : el.value;
      }
      function getCheckboxValue(el, checked) {
        const key = checked ? "_trueValue" : "_falseValue";
        return key in el ? el[key] : checked;
      }
      var vModelDynamic = {
        created(el, binding, vnode) {
          callModelHook(el, binding, vnode, null, "created");
        },
        mounted(el, binding, vnode) {
          callModelHook(el, binding, vnode, null, "mounted");
        },
        beforeUpdate(el, binding, vnode, prevVNode) {
          callModelHook(el, binding, vnode, prevVNode, "beforeUpdate");
        },
        updated(el, binding, vnode, prevVNode) {
          callModelHook(el, binding, vnode, prevVNode, "updated");
        }
      };
      function resolveDynamicModel(tagName, type) {
        switch (tagName) {
          case "SELECT":
            return vModelSelect;
          case "TEXTAREA":
            return vModelText;
          default:
            switch (type) {
              case "checkbox":
                return vModelCheckbox;
              case "radio":
                return vModelRadio;
              default:
                return vModelText;
            }
        }
      }
      function callModelHook(el, binding, vnode, prevVNode, hook) {
        const modelToUse = resolveDynamicModel(
          el.tagName,
          vnode.props && vnode.props.type
        );
        const fn = modelToUse[hook];
        fn && fn(el, binding, vnode, prevVNode);
      }
      function initVModelForSSR() {
        vModelText.getSSRProps = ({ value }) => ({ value });
        vModelRadio.getSSRProps = ({ value }, vnode) => {
          if (vnode.props && shared.looseEqual(vnode.props.value, value)) {
            return { checked: true };
          }
        };
        vModelCheckbox.getSSRProps = ({ value }, vnode) => {
          if (shared.isArray(value)) {
            if (vnode.props && shared.looseIndexOf(value, vnode.props.value) > -1) {
              return { checked: true };
            }
          } else if (shared.isSet(value)) {
            if (vnode.props && value.has(vnode.props.value)) {
              return { checked: true };
            }
          } else if (value) {
            return { checked: true };
          }
        };
        vModelDynamic.getSSRProps = (binding, vnode) => {
          if (typeof vnode.type !== "string") {
            return;
          }
          const modelToUse = resolveDynamicModel(
            vnode.type.toUpperCase(),
            vnode.props && vnode.props.type
          );
          if (modelToUse.getSSRProps) {
            return modelToUse.getSSRProps(binding, vnode);
          }
        };
      }
      var systemModifiers = ["ctrl", "shift", "alt", "meta"];
      var modifierGuards = {
        stop: (e2) => e2.stopPropagation(),
        prevent: (e2) => e2.preventDefault(),
        self: (e2) => e2.target !== e2.currentTarget,
        ctrl: (e2) => !e2.ctrlKey,
        shift: (e2) => !e2.shiftKey,
        alt: (e2) => !e2.altKey,
        meta: (e2) => !e2.metaKey,
        left: (e2) => "button" in e2 && e2.button !== 0,
        middle: (e2) => "button" in e2 && e2.button !== 1,
        right: (e2) => "button" in e2 && e2.button !== 2,
        exact: (e2, modifiers) => systemModifiers.some((m) => e2[`${m}Key`] && !modifiers.includes(m))
      };
      var withModifiers = (fn, modifiers) => {
        return (event, ...args) => {
          for (let i = 0; i < modifiers.length; i++) {
            const guard = modifierGuards[modifiers[i]];
            if (guard && guard(event, modifiers))
              return;
          }
          return fn(event, ...args);
        };
      };
      var keyNames = {
        esc: "escape",
        space: " ",
        up: "arrow-up",
        left: "arrow-left",
        right: "arrow-right",
        down: "arrow-down",
        delete: "backspace"
      };
      var withKeys = (fn, modifiers) => {
        return (event) => {
          if (!("key" in event)) {
            return;
          }
          const eventKey = shared.hyphenate(event.key);
          if (modifiers.some((k2) => k2 === eventKey || keyNames[k2] === eventKey)) {
            return fn(event);
          }
        };
      };
      var rendererOptions = /* @__PURE__ */ shared.extend({ patchProp }, nodeOps);
      var renderer;
      var enabledHydration = false;
      function ensureRenderer() {
        return renderer || (renderer = runtimeCore.createRenderer(rendererOptions));
      }
      function ensureHydrationRenderer() {
        renderer = enabledHydration ? renderer : runtimeCore.createHydrationRenderer(rendererOptions);
        enabledHydration = true;
        return renderer;
      }
      var render22 = (...args) => {
        ensureRenderer().render(...args);
      };
      var hydrate = (...args) => {
        ensureHydrationRenderer().hydrate(...args);
      };
      var createApp2 = (...args) => {
        const app = ensureRenderer().createApp(...args);
        {
          injectNativeTagCheck(app);
          injectCompilerOptionsCheck(app);
        }
        const { mount } = app;
        app.mount = (containerOrSelector) => {
          const container = normalizeContainer(containerOrSelector);
          if (!container)
            return;
          const component = app._component;
          if (!shared.isFunction(component) && !component.render && !component.template) {
            component.template = container.innerHTML;
          }
          container.innerHTML = "";
          const proxy = mount(container, false, container instanceof SVGElement);
          if (container instanceof Element) {
            container.removeAttribute("v-cloak");
            container.setAttribute("data-v-app", "");
          }
          return proxy;
        };
        return app;
      };
      var createSSRApp = (...args) => {
        const app = ensureHydrationRenderer().createApp(...args);
        {
          injectNativeTagCheck(app);
          injectCompilerOptionsCheck(app);
        }
        const { mount } = app;
        app.mount = (containerOrSelector) => {
          const container = normalizeContainer(containerOrSelector);
          if (container) {
            return mount(container, true, container instanceof SVGElement);
          }
        };
        return app;
      };
      function injectNativeTagCheck(app) {
        Object.defineProperty(app.config, "isNativeTag", {
          value: (tag) => shared.isHTMLTag(tag) || shared.isSVGTag(tag),
          writable: false
        });
      }
      function injectCompilerOptionsCheck(app) {
        if (runtimeCore.isRuntimeOnly()) {
          const isCustomElement = app.config.isCustomElement;
          Object.defineProperty(app.config, "isCustomElement", {
            get() {
              return isCustomElement;
            },
            set() {
              runtimeCore.warn(
                `The \`isCustomElement\` config option is deprecated. Use \`compilerOptions.isCustomElement\` instead.`
              );
            }
          });
          const compilerOptions = app.config.compilerOptions;
          const msg = `The \`compilerOptions\` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, \`compilerOptions\` must be passed to \`@vue/compiler-dom\` in the build setup instead.
- For vue-loader: pass it via vue-loader's \`compilerOptions\` loader option.
- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader
- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc`;
          Object.defineProperty(app.config, "compilerOptions", {
            get() {
              runtimeCore.warn(msg);
              return compilerOptions;
            },
            set() {
              runtimeCore.warn(msg);
            }
          });
        }
      }
      function normalizeContainer(container) {
        if (shared.isString(container)) {
          const res = document.querySelector(container);
          if (!res) {
            runtimeCore.warn(
              `Failed to mount app: mount target selector "${container}" returned null.`
            );
          }
          return res;
        }
        if (window.ShadowRoot && container instanceof window.ShadowRoot && container.mode === "closed") {
          runtimeCore.warn(
            `mounting on a ShadowRoot with \`{mode: "closed"}\` may lead to unpredictable bugs`
          );
        }
        return container;
      }
      var ssrDirectiveInitialized = false;
      var initDirectivesForSSR = () => {
        if (!ssrDirectiveInitialized) {
          ssrDirectiveInitialized = true;
          initVModelForSSR();
          initVShowForSSR();
        }
      };
      exports.Transition = Transition2;
      exports.TransitionGroup = TransitionGroup;
      exports.VueElement = VueElement;
      exports.createApp = createApp2;
      exports.createSSRApp = createSSRApp;
      exports.defineCustomElement = defineCustomElement;
      exports.defineSSRCustomElement = defineSSRCustomElement;
      exports.hydrate = hydrate;
      exports.initDirectivesForSSR = initDirectivesForSSR;
      exports.render = render22;
      exports.useCssModule = useCssModule;
      exports.useCssVars = useCssVars;
      exports.vModelCheckbox = vModelCheckbox;
      exports.vModelDynamic = vModelDynamic;
      exports.vModelRadio = vModelRadio;
      exports.vModelSelect = vModelSelect;
      exports.vModelText = vModelText;
      exports.vShow = vShow;
      exports.withKeys = withKeys;
      exports.withModifiers = withModifiers;
      Object.keys(runtimeCore).forEach(function(k2) {
        if (k2 !== "default" && !Object.prototype.hasOwnProperty.call(exports, k2))
          exports[k2] = runtimeCore[k2];
      });
    }
  });

  // node_modules/@vue/runtime-dom/index.js
  var require_runtime_dom = __commonJS({
    "node_modules/@vue/runtime-dom/index.js"(exports, module) {
      "use strict";
      if (false) {
        module.exports = null;
      } else {
        module.exports = require_runtime_dom_cjs();
      }
    }
  });

  // node_modules/vue/dist/vue.runtime.esm-bundler.js
  var vue_runtime_esm_bundler_exports = {};
  __export(vue_runtime_esm_bundler_exports, {
    compile: () => compile
  });
  var import_runtime_dom = __toESM(require_runtime_dom());
  __reExport(vue_runtime_esm_bundler_exports, __toESM(require_runtime_dom()));
  function initDev() {
    {
      (0, import_runtime_dom.initCustomFormatter)();
    }
  }
  if (true) {
    initDev();
  }
  var compile = () => {
    if (true) {
      (0, import_runtime_dom.warn)(
        `Runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".`
      );
    }
  };

  // node_modules/vue-demi/lib/index.mjs
  var lib_exports = {};
  __export(lib_exports, {
    Vue: () => vue_runtime_esm_bundler_exports,
    Vue2: () => Vue2,
    compile: () => compile,
    del: () => del,
    install: () => install,
    isVue2: () => isVue2,
    isVue3: () => isVue3,
    set: () => set
  });
  __reExport(lib_exports, vue_runtime_esm_bundler_exports);
  var isVue2 = false;
  var isVue3 = true;
  var Vue2 = void 0;
  function install() {
  }
  function set(target, key, val) {
    if (Array.isArray(target)) {
      target.length = Math.max(target.length, key);
      target.splice(key, 1, val);
      return val;
    }
    target[key] = val;
    return val;
  }
  function del(target, key) {
    if (Array.isArray(target)) {
      target.splice(key, 1);
      return;
    }
    delete target[key];
  }

  // node_modules/@vue/devtools-api/lib/esm/env.js
  function getDevtoolsGlobalHook() {
    return getTarget().__VUE_DEVTOOLS_GLOBAL_HOOK__;
  }
  function getTarget() {
    return typeof navigator !== "undefined" && typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {};
  }
  var isProxyAvailable = typeof Proxy === "function";

  // node_modules/@vue/devtools-api/lib/esm/const.js
  var HOOK_SETUP = "devtools-plugin:setup";
  var HOOK_PLUGIN_SETTINGS_SET = "plugin:settings:set";

  // node_modules/@vue/devtools-api/lib/esm/time.js
  var supported;
  var perf;
  function isPerformanceSupported() {
    var _a2;
    if (supported !== void 0) {
      return supported;
    }
    if (typeof window !== "undefined" && window.performance) {
      supported = true;
      perf = window.performance;
    } else if (typeof global !== "undefined" && ((_a2 = global.perf_hooks) === null || _a2 === void 0 ? void 0 : _a2.performance)) {
      supported = true;
      perf = global.perf_hooks.performance;
    } else {
      supported = false;
    }
    return supported;
  }
  function now() {
    return isPerformanceSupported() ? perf.now() : Date.now();
  }

  // node_modules/@vue/devtools-api/lib/esm/proxy.js
  var ApiProxy = class {
    constructor(plugin, hook) {
      this.target = null;
      this.targetQueue = [];
      this.onQueue = [];
      this.plugin = plugin;
      this.hook = hook;
      const defaultSettings = {};
      if (plugin.settings) {
        for (const id2 in plugin.settings) {
          const item = plugin.settings[id2];
          defaultSettings[id2] = item.defaultValue;
        }
      }
      const localSettingsSaveId = `__vue-devtools-plugin-settings__${plugin.id}`;
      let currentSettings = Object.assign({}, defaultSettings);
      try {
        const raw = localStorage.getItem(localSettingsSaveId);
        const data = JSON.parse(raw);
        Object.assign(currentSettings, data);
      } catch (e2) {
      }
      this.fallbacks = {
        getSettings() {
          return currentSettings;
        },
        setSettings(value) {
          try {
            localStorage.setItem(localSettingsSaveId, JSON.stringify(value));
          } catch (e2) {
          }
          currentSettings = value;
        },
        now() {
          return now();
        }
      };
      if (hook) {
        hook.on(HOOK_PLUGIN_SETTINGS_SET, (pluginId, value) => {
          if (pluginId === this.plugin.id) {
            this.fallbacks.setSettings(value);
          }
        });
      }
      this.proxiedOn = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target.on[prop];
          } else {
            return (...args) => {
              this.onQueue.push({
                method: prop,
                args
              });
            };
          }
        }
      });
      this.proxiedTarget = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target[prop];
          } else if (prop === "on") {
            return this.proxiedOn;
          } else if (Object.keys(this.fallbacks).includes(prop)) {
            return (...args) => {
              this.targetQueue.push({
                method: prop,
                args,
                resolve: () => {
                }
              });
              return this.fallbacks[prop](...args);
            };
          } else {
            return (...args) => {
              return new Promise((resolve) => {
                this.targetQueue.push({
                  method: prop,
                  args,
                  resolve
                });
              });
            };
          }
        }
      });
    }
    async setRealTarget(target) {
      this.target = target;
      for (const item of this.onQueue) {
        this.target.on[item.method](...item.args);
      }
      for (const item of this.targetQueue) {
        item.resolve(await this.target[item.method](...item.args));
      }
    }
  };

  // node_modules/@vue/devtools-api/lib/esm/index.js
  function setupDevtoolsPlugin(pluginDescriptor, setupFn) {
    const descriptor = pluginDescriptor;
    const target = getTarget();
    const hook = getDevtoolsGlobalHook();
    const enableProxy = isProxyAvailable && descriptor.enableEarlyProxy;
    if (hook && (target.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !enableProxy)) {
      hook.emit(HOOK_SETUP, pluginDescriptor, setupFn);
    } else {
      const proxy = enableProxy ? new ApiProxy(descriptor, hook) : null;
      const list = target.__VUE_DEVTOOLS_PLUGINS__ = target.__VUE_DEVTOOLS_PLUGINS__ || [];
      list.push({
        pluginDescriptor: descriptor,
        setupFn,
        proxy
      });
      if (proxy)
        setupFn(proxy.proxiedTarget);
    }
  }

  // node_modules/pinia/dist/pinia.mjs
  var activePinia;
  var setActivePinia = (pinia) => activePinia = pinia;
  var piniaSymbol = true ? Symbol("pinia") : Symbol();
  function isPlainObject(o) {
    return o && typeof o === "object" && Object.prototype.toString.call(o) === "[object Object]" && typeof o.toJSON !== "function";
  }
  var MutationType;
  (function(MutationType2) {
    MutationType2["direct"] = "direct";
    MutationType2["patchObject"] = "patch object";
    MutationType2["patchFunction"] = "patch function";
  })(MutationType || (MutationType = {}));
  var IS_CLIENT = typeof window !== "undefined";
  var USE_DEVTOOLS = IS_CLIENT;
  var _global = /* @__PURE__ */ (() => typeof window === "object" && window.window === window ? window : typeof self === "object" && self.self === self ? self : typeof global === "object" && global.global === global ? global : typeof globalThis === "object" ? globalThis : { HTMLElement: null })();
  function bom(blob, { autoBom = false } = {}) {
    if (autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(blob.type)) {
      return new Blob([String.fromCharCode(65279), blob], { type: blob.type });
    }
    return blob;
  }
  function download(url, name, opts) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.responseType = "blob";
    xhr.onload = function() {
      saveAs(xhr.response, name, opts);
    };
    xhr.onerror = function() {
      console.error("could not download file");
    };
    xhr.send();
  }
  function corsEnabled(url) {
    const xhr = new XMLHttpRequest();
    xhr.open("HEAD", url, false);
    try {
      xhr.send();
    } catch (e2) {
    }
    return xhr.status >= 200 && xhr.status <= 299;
  }
  function click(node) {
    try {
      node.dispatchEvent(new MouseEvent("click"));
    } catch (e2) {
      const evt = document.createEvent("MouseEvents");
      evt.initMouseEvent("click", true, true, window, 0, 0, 0, 80, 20, false, false, false, false, 0, null);
      node.dispatchEvent(evt);
    }
  }
  var _navigator = typeof navigator === "object" ? navigator : { userAgent: "" };
  var isMacOSWebView = /* @__PURE__ */ (() => /Macintosh/.test(_navigator.userAgent) && /AppleWebKit/.test(_navigator.userAgent) && !/Safari/.test(_navigator.userAgent))();
  var saveAs = !IS_CLIENT ? () => {
  } : typeof HTMLAnchorElement !== "undefined" && "download" in HTMLAnchorElement.prototype && !isMacOSWebView ? downloadSaveAs : "msSaveOrOpenBlob" in _navigator ? msSaveAs : fileSaverSaveAs;
  function downloadSaveAs(blob, name = "download", opts) {
    const a2 = document.createElement("a");
    a2.download = name;
    a2.rel = "noopener";
    if (typeof blob === "string") {
      a2.href = blob;
      if (a2.origin !== location.origin) {
        if (corsEnabled(a2.href)) {
          download(blob, name, opts);
        } else {
          a2.target = "_blank";
          click(a2);
        }
      } else {
        click(a2);
      }
    } else {
      a2.href = URL.createObjectURL(blob);
      setTimeout(function() {
        URL.revokeObjectURL(a2.href);
      }, 4e4);
      setTimeout(function() {
        click(a2);
      }, 0);
    }
  }
  function msSaveAs(blob, name = "download", opts) {
    if (typeof blob === "string") {
      if (corsEnabled(blob)) {
        download(blob, name, opts);
      } else {
        const a2 = document.createElement("a");
        a2.href = blob;
        a2.target = "_blank";
        setTimeout(function() {
          click(a2);
        });
      }
    } else {
      navigator.msSaveOrOpenBlob(bom(blob, opts), name);
    }
  }
  function fileSaverSaveAs(blob, name, opts, popup) {
    popup = popup || open("", "_blank");
    if (popup) {
      popup.document.title = popup.document.body.innerText = "downloading...";
    }
    if (typeof blob === "string")
      return download(blob, name, opts);
    const force = blob.type === "application/octet-stream";
    const isSafari = /constructor/i.test(String(_global.HTMLElement)) || "safari" in _global;
    const isChromeIOS = /CriOS\/[\d]+/.test(navigator.userAgent);
    if ((isChromeIOS || force && isSafari || isMacOSWebView) && typeof FileReader !== "undefined") {
      const reader = new FileReader();
      reader.onloadend = function() {
        let url = reader.result;
        if (typeof url !== "string") {
          popup = null;
          throw new Error("Wrong reader.result type");
        }
        url = isChromeIOS ? url : url.replace(/^data:[^;]*;/, "data:attachment/file;");
        if (popup) {
          popup.location.href = url;
        } else {
          location.assign(url);
        }
        popup = null;
      };
      reader.readAsDataURL(blob);
    } else {
      const url = URL.createObjectURL(blob);
      if (popup)
        popup.location.assign(url);
      else
        location.href = url;
      popup = null;
      setTimeout(function() {
        URL.revokeObjectURL(url);
      }, 4e4);
    }
  }
  function toastMessage(message, type) {
    const piniaMessage = "\u{1F34D} " + message;
    if (typeof __VUE_DEVTOOLS_TOAST__ === "function") {
      __VUE_DEVTOOLS_TOAST__(piniaMessage, type);
    } else if (type === "error") {
      console.error(piniaMessage);
    } else if (type === "warn") {
      console.warn(piniaMessage);
    } else {
      console.log(piniaMessage);
    }
  }
  function isPinia(o) {
    return "_a" in o && "install" in o;
  }
  function checkClipboardAccess() {
    if (!("clipboard" in navigator)) {
      toastMessage(`Your browser doesn't support the Clipboard API`, "error");
      return true;
    }
  }
  function checkNotFocusedError(error) {
    if (error instanceof Error && error.message.toLowerCase().includes("document is not focused")) {
      toastMessage('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.', "warn");
      return true;
    }
    return false;
  }
  async function actionGlobalCopyState(pinia) {
    if (checkClipboardAccess())
      return;
    try {
      await navigator.clipboard.writeText(JSON.stringify(pinia.state.value));
      toastMessage("Global state copied to clipboard.");
    } catch (error) {
      if (checkNotFocusedError(error))
        return;
      toastMessage(`Failed to serialize the state. Check the console for more details.`, "error");
      console.error(error);
    }
  }
  async function actionGlobalPasteState(pinia) {
    if (checkClipboardAccess())
      return;
    try {
      loadStoresState(pinia, JSON.parse(await navigator.clipboard.readText()));
      toastMessage("Global state pasted from clipboard.");
    } catch (error) {
      if (checkNotFocusedError(error))
        return;
      toastMessage(`Failed to deserialize the state from clipboard. Check the console for more details.`, "error");
      console.error(error);
    }
  }
  async function actionGlobalSaveState(pinia) {
    try {
      saveAs(new Blob([JSON.stringify(pinia.state.value)], {
        type: "text/plain;charset=utf-8"
      }), "pinia-state.json");
    } catch (error) {
      toastMessage(`Failed to export the state as JSON. Check the console for more details.`, "error");
      console.error(error);
    }
  }
  var fileInput;
  function getFileOpener() {
    if (!fileInput) {
      fileInput = document.createElement("input");
      fileInput.type = "file";
      fileInput.accept = ".json";
    }
    function openFile() {
      return new Promise((resolve, reject) => {
        fileInput.onchange = async () => {
          const files = fileInput.files;
          if (!files)
            return resolve(null);
          const file = files.item(0);
          if (!file)
            return resolve(null);
          return resolve({ text: await file.text(), file });
        };
        fileInput.oncancel = () => resolve(null);
        fileInput.onerror = reject;
        fileInput.click();
      });
    }
    return openFile;
  }
  async function actionGlobalOpenStateFile(pinia) {
    try {
      const open2 = getFileOpener();
      const result = await open2();
      if (!result)
        return;
      const { text, file } = result;
      loadStoresState(pinia, JSON.parse(text));
      toastMessage(`Global state imported from "${file.name}".`);
    } catch (error) {
      toastMessage(`Failed to import the state from JSON. Check the console for more details.`, "error");
      console.error(error);
    }
  }
  function loadStoresState(pinia, state) {
    for (const key in state) {
      const storeState = pinia.state.value[key];
      if (storeState) {
        Object.assign(storeState, state[key]);
      } else {
        pinia.state.value[key] = state[key];
      }
    }
  }
  function formatDisplay(display) {
    return {
      _custom: {
        display
      }
    };
  }
  var PINIA_ROOT_LABEL = "\u{1F34D} Pinia (root)";
  var PINIA_ROOT_ID = "_root";
  function formatStoreForInspectorTree(store) {
    return isPinia(store) ? {
      id: PINIA_ROOT_ID,
      label: PINIA_ROOT_LABEL
    } : {
      id: store.$id,
      label: store.$id
    };
  }
  function formatStoreForInspectorState(store) {
    if (isPinia(store)) {
      const storeNames = Array.from(store._s.keys());
      const storeMap = store._s;
      const state2 = {
        state: storeNames.map((storeId) => ({
          editable: true,
          key: storeId,
          value: store.state.value[storeId]
        })),
        getters: storeNames.filter((id2) => storeMap.get(id2)._getters).map((id2) => {
          const store2 = storeMap.get(id2);
          return {
            editable: false,
            key: id2,
            value: store2._getters.reduce((getters, key) => {
              getters[key] = store2[key];
              return getters;
            }, {})
          };
        })
      };
      return state2;
    }
    const state = {
      state: Object.keys(store.$state).map((key) => ({
        editable: true,
        key,
        value: store.$state[key]
      }))
    };
    if (store._getters && store._getters.length) {
      state.getters = store._getters.map((getterName) => ({
        editable: false,
        key: getterName,
        value: store[getterName]
      }));
    }
    if (store._customProperties.size) {
      state.customProperties = Array.from(store._customProperties).map((key) => ({
        editable: true,
        key,
        value: store[key]
      }));
    }
    return state;
  }
  function formatEventData(events) {
    if (!events)
      return {};
    if (Array.isArray(events)) {
      return events.reduce((data, event) => {
        data.keys.push(event.key);
        data.operations.push(event.type);
        data.oldValue[event.key] = event.oldValue;
        data.newValue[event.key] = event.newValue;
        return data;
      }, {
        oldValue: {},
        keys: [],
        operations: [],
        newValue: {}
      });
    } else {
      return {
        operation: formatDisplay(events.type),
        key: formatDisplay(events.key),
        oldValue: events.oldValue,
        newValue: events.newValue
      };
    }
  }
  function formatMutationType(type) {
    switch (type) {
      case MutationType.direct:
        return "mutation";
      case MutationType.patchFunction:
        return "$patch";
      case MutationType.patchObject:
        return "$patch";
      default:
        return "unknown";
    }
  }
  var isTimelineActive = true;
  var componentStateTypes = [];
  var MUTATIONS_LAYER_ID = "pinia:mutations";
  var INSPECTOR_ID = "pinia";
  var { assign: assign$1 } = Object;
  var getStoreType = (id2) => "\u{1F34D} " + id2;
  function registerPiniaDevtools(app, pinia) {
    setupDevtoolsPlugin({
      id: "dev.esm.pinia",
      label: "Pinia \u{1F34D}",
      logo: "https://pinia.vuejs.org/logo.svg",
      packageName: "pinia",
      homepage: "https://pinia.vuejs.org",
      componentStateTypes,
      app
    }, (api) => {
      if (typeof api.now !== "function") {
        toastMessage("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html.");
      }
      api.addTimelineLayer({
        id: MUTATIONS_LAYER_ID,
        label: `Pinia \u{1F34D}`,
        color: 15064968
      });
      api.addInspector({
        id: INSPECTOR_ID,
        label: "Pinia \u{1F34D}",
        icon: "storage",
        treeFilterPlaceholder: "Search stores",
        actions: [
          {
            icon: "content_copy",
            action: () => {
              actionGlobalCopyState(pinia);
            },
            tooltip: "Serialize and copy the state"
          },
          {
            icon: "content_paste",
            action: async () => {
              await actionGlobalPasteState(pinia);
              api.sendInspectorTree(INSPECTOR_ID);
              api.sendInspectorState(INSPECTOR_ID);
            },
            tooltip: "Replace the state with the content of your clipboard"
          },
          {
            icon: "save",
            action: () => {
              actionGlobalSaveState(pinia);
            },
            tooltip: "Save the state as a JSON file"
          },
          {
            icon: "folder_open",
            action: async () => {
              await actionGlobalOpenStateFile(pinia);
              api.sendInspectorTree(INSPECTOR_ID);
              api.sendInspectorState(INSPECTOR_ID);
            },
            tooltip: "Import the state from a JSON file"
          }
        ],
        nodeActions: [
          {
            icon: "restore",
            tooltip: 'Reset the state (with "$reset")',
            action: (nodeId) => {
              const store = pinia._s.get(nodeId);
              if (!store) {
                toastMessage(`Cannot reset "${nodeId}" store because it wasn't found.`, "warn");
              } else if (typeof store.$reset !== "function") {
                toastMessage(`Cannot reset "${nodeId}" store because it doesn't have a "$reset" method implemented.`, "warn");
              } else {
                store.$reset();
                toastMessage(`Store "${nodeId}" reset.`);
              }
            }
          }
        ]
      });
      api.on.inspectComponent((payload, ctx) => {
        const proxy = payload.componentInstance && payload.componentInstance.proxy;
        if (proxy && proxy._pStores) {
          const piniaStores = payload.componentInstance.proxy._pStores;
          Object.values(piniaStores).forEach((store) => {
            payload.instanceData.state.push({
              type: getStoreType(store.$id),
              key: "state",
              editable: true,
              value: store._isOptionsAPI ? {
                _custom: {
                  value: (0, lib_exports.toRaw)(store.$state),
                  actions: [
                    {
                      icon: "restore",
                      tooltip: "Reset the state of this store",
                      action: () => store.$reset()
                    }
                  ]
                }
              } : Object.keys(store.$state).reduce((state, key) => {
                state[key] = store.$state[key];
                return state;
              }, {})
            });
            if (store._getters && store._getters.length) {
              payload.instanceData.state.push({
                type: getStoreType(store.$id),
                key: "getters",
                editable: false,
                value: store._getters.reduce((getters, key) => {
                  try {
                    getters[key] = store[key];
                  } catch (error) {
                    getters[key] = error;
                  }
                  return getters;
                }, {})
              });
            }
          });
        }
      });
      api.on.getInspectorTree((payload) => {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          let stores = [pinia];
          stores = stores.concat(Array.from(pinia._s.values()));
          payload.rootNodes = (payload.filter ? stores.filter((store) => "$id" in store ? store.$id.toLowerCase().includes(payload.filter.toLowerCase()) : PINIA_ROOT_LABEL.toLowerCase().includes(payload.filter.toLowerCase())) : stores).map(formatStoreForInspectorTree);
        }
      });
      api.on.getInspectorState((payload) => {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          const inspectedStore = payload.nodeId === PINIA_ROOT_ID ? pinia : pinia._s.get(payload.nodeId);
          if (!inspectedStore) {
            return;
          }
          if (inspectedStore) {
            payload.state = formatStoreForInspectorState(inspectedStore);
          }
        }
      });
      api.on.editInspectorState((payload, ctx) => {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          const inspectedStore = payload.nodeId === PINIA_ROOT_ID ? pinia : pinia._s.get(payload.nodeId);
          if (!inspectedStore) {
            return toastMessage(`store "${payload.nodeId}" not found`, "error");
          }
          const { path } = payload;
          if (!isPinia(inspectedStore)) {
            if (path.length !== 1 || !inspectedStore._customProperties.has(path[0]) || path[0] in inspectedStore.$state) {
              path.unshift("$state");
            }
          } else {
            path.unshift("state");
          }
          isTimelineActive = false;
          payload.set(inspectedStore, path, payload.state.value);
          isTimelineActive = true;
        }
      });
      api.on.editComponentState((payload) => {
        if (payload.type.startsWith("\u{1F34D}")) {
          const storeId = payload.type.replace(/^🍍\s*/, "");
          const store = pinia._s.get(storeId);
          if (!store) {
            return toastMessage(`store "${storeId}" not found`, "error");
          }
          const { path } = payload;
          if (path[0] !== "state") {
            return toastMessage(`Invalid path for store "${storeId}":
${path}
Only state can be modified.`);
          }
          path[0] = "$state";
          isTimelineActive = false;
          payload.set(store, path, payload.state.value);
          isTimelineActive = true;
        }
      });
    });
  }
  function addStoreToDevtools(app, store) {
    if (!componentStateTypes.includes(getStoreType(store.$id))) {
      componentStateTypes.push(getStoreType(store.$id));
    }
    setupDevtoolsPlugin({
      id: "dev.esm.pinia",
      label: "Pinia \u{1F34D}",
      logo: "https://pinia.vuejs.org/logo.svg",
      packageName: "pinia",
      homepage: "https://pinia.vuejs.org",
      componentStateTypes,
      app,
      settings: {
        logStoreChanges: {
          label: "Notify about new/deleted stores",
          type: "boolean",
          defaultValue: true
        }
      }
    }, (api) => {
      const now3 = typeof api.now === "function" ? api.now.bind(api) : Date.now;
      store.$onAction(({ after, onError, name, args }) => {
        const groupId = runningActionId++;
        api.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID,
          event: {
            time: now3(),
            title: "\u{1F6EB} " + name,
            subtitle: "start",
            data: {
              store: formatDisplay(store.$id),
              action: formatDisplay(name),
              args
            },
            groupId
          }
        });
        after((result) => {
          activeAction = void 0;
          api.addTimelineEvent({
            layerId: MUTATIONS_LAYER_ID,
            event: {
              time: now3(),
              title: "\u{1F6EC} " + name,
              subtitle: "end",
              data: {
                store: formatDisplay(store.$id),
                action: formatDisplay(name),
                args,
                result
              },
              groupId
            }
          });
        });
        onError((error) => {
          activeAction = void 0;
          api.addTimelineEvent({
            layerId: MUTATIONS_LAYER_ID,
            event: {
              time: now3(),
              logType: "error",
              title: "\u{1F4A5} " + name,
              subtitle: "end",
              data: {
                store: formatDisplay(store.$id),
                action: formatDisplay(name),
                args,
                error
              },
              groupId
            }
          });
        });
      }, true);
      store._customProperties.forEach((name) => {
        (0, lib_exports.watch)(() => (0, lib_exports.unref)(store[name]), (newValue, oldValue) => {
          api.notifyComponentUpdate();
          api.sendInspectorState(INSPECTOR_ID);
          if (isTimelineActive) {
            api.addTimelineEvent({
              layerId: MUTATIONS_LAYER_ID,
              event: {
                time: now3(),
                title: "Change",
                subtitle: name,
                data: {
                  newValue,
                  oldValue
                },
                groupId: activeAction
              }
            });
          }
        }, { deep: true });
      });
      store.$subscribe(({ events, type }, state) => {
        api.notifyComponentUpdate();
        api.sendInspectorState(INSPECTOR_ID);
        if (!isTimelineActive)
          return;
        const eventData = {
          time: now3(),
          title: formatMutationType(type),
          data: assign$1({ store: formatDisplay(store.$id) }, formatEventData(events)),
          groupId: activeAction
        };
        if (type === MutationType.patchFunction) {
          eventData.subtitle = "\u2935\uFE0F";
        } else if (type === MutationType.patchObject) {
          eventData.subtitle = "\u{1F9E9}";
        } else if (events && !Array.isArray(events)) {
          eventData.subtitle = events.type;
        }
        if (events) {
          eventData.data["rawEvent(s)"] = {
            _custom: {
              display: "DebuggerEvent",
              type: "object",
              tooltip: "raw DebuggerEvent[]",
              value: events
            }
          };
        }
        api.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID,
          event: eventData
        });
      }, { detached: true, flush: "sync" });
      const hotUpdate = store._hotUpdate;
      store._hotUpdate = (0, lib_exports.markRaw)((newStore) => {
        hotUpdate(newStore);
        api.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID,
          event: {
            time: now3(),
            title: "\u{1F525} " + store.$id,
            subtitle: "HMR update",
            data: {
              store: formatDisplay(store.$id),
              info: formatDisplay(`HMR update`)
            }
          }
        });
        api.notifyComponentUpdate();
        api.sendInspectorTree(INSPECTOR_ID);
        api.sendInspectorState(INSPECTOR_ID);
      });
      const { $dispose } = store;
      store.$dispose = () => {
        $dispose();
        api.notifyComponentUpdate();
        api.sendInspectorTree(INSPECTOR_ID);
        api.sendInspectorState(INSPECTOR_ID);
        api.getSettings().logStoreChanges && toastMessage(`Disposed "${store.$id}" store \u{1F5D1}`);
      };
      api.notifyComponentUpdate();
      api.sendInspectorTree(INSPECTOR_ID);
      api.sendInspectorState(INSPECTOR_ID);
      api.getSettings().logStoreChanges && toastMessage(`"${store.$id}" store installed \u{1F195}`);
    });
  }
  var runningActionId = 0;
  var activeAction;
  function patchActionForGrouping(store, actionNames, wrapWithProxy) {
    const actions = actionNames.reduce((storeActions, actionName) => {
      storeActions[actionName] = (0, lib_exports.toRaw)(store)[actionName];
      return storeActions;
    }, {});
    for (const actionName in actions) {
      store[actionName] = function() {
        const _actionId = runningActionId;
        const trackedStore = wrapWithProxy ? new Proxy(store, {
          get(...args) {
            activeAction = _actionId;
            return Reflect.get(...args);
          },
          set(...args) {
            activeAction = _actionId;
            return Reflect.set(...args);
          }
        }) : store;
        activeAction = _actionId;
        const retValue = actions[actionName].apply(trackedStore, arguments);
        activeAction = void 0;
        return retValue;
      };
    }
  }
  function devtoolsPlugin({ app, store, options }) {
    if (store.$id.startsWith("__hot:")) {
      return;
    }
    store._isOptionsAPI = !!options.state;
    patchActionForGrouping(store, Object.keys(options.actions), store._isOptionsAPI);
    const originalHotUpdate = store._hotUpdate;
    (0, lib_exports.toRaw)(store)._hotUpdate = function(newStore) {
      originalHotUpdate.apply(this, arguments);
      patchActionForGrouping(store, Object.keys(newStore._hmrPayload.actions), !!store._isOptionsAPI);
    };
    addStoreToDevtools(
      app,
      store
    );
  }
  function createPinia() {
    const scope = (0, lib_exports.effectScope)(true);
    const state = scope.run(() => (0, lib_exports.ref)({}));
    let _p = [];
    let toBeInstalled = [];
    const pinia = (0, lib_exports.markRaw)({
      install(app) {
        setActivePinia(pinia);
        if (!isVue2) {
          pinia._a = app;
          app.provide(piniaSymbol, pinia);
          app.config.globalProperties.$pinia = pinia;
          if (USE_DEVTOOLS) {
            registerPiniaDevtools(app, pinia);
          }
          toBeInstalled.forEach((plugin) => _p.push(plugin));
          toBeInstalled = [];
        }
      },
      use(plugin) {
        if (!this._a && !isVue2) {
          toBeInstalled.push(plugin);
        } else {
          _p.push(plugin);
        }
        return this;
      },
      _p,
      _a: null,
      _e: scope,
      _s: /* @__PURE__ */ new Map(),
      state
    });
    if (USE_DEVTOOLS && typeof Proxy !== "undefined") {
      pinia.use(devtoolsPlugin);
    }
    return pinia;
  }
  function patchObject(newState, oldState) {
    for (const key in oldState) {
      const subPatch = oldState[key];
      if (!(key in newState)) {
        continue;
      }
      const targetValue = newState[key];
      if (isPlainObject(targetValue) && isPlainObject(subPatch) && !(0, lib_exports.isRef)(subPatch) && !(0, lib_exports.isReactive)(subPatch)) {
        newState[key] = patchObject(targetValue, subPatch);
      } else {
        if (isVue2) {
          set(newState, key, subPatch);
        } else {
          newState[key] = subPatch;
        }
      }
    }
    return newState;
  }
  var noop = () => {
  };
  function addSubscription(subscriptions, callback, detached, onCleanup = noop) {
    subscriptions.push(callback);
    const removeSubscription = () => {
      const idx = subscriptions.indexOf(callback);
      if (idx > -1) {
        subscriptions.splice(idx, 1);
        onCleanup();
      }
    };
    if (!detached && (0, lib_exports.getCurrentScope)()) {
      (0, lib_exports.onScopeDispose)(removeSubscription);
    }
    return removeSubscription;
  }
  function triggerSubscriptions(subscriptions, ...args) {
    subscriptions.slice().forEach((callback) => {
      callback(...args);
    });
  }
  var fallbackRunWithContext = (fn) => fn();
  function mergeReactiveObjects(target, patchToApply) {
    if (target instanceof Map && patchToApply instanceof Map) {
      patchToApply.forEach((value, key) => target.set(key, value));
    }
    if (target instanceof Set && patchToApply instanceof Set) {
      patchToApply.forEach(target.add, target);
    }
    for (const key in patchToApply) {
      if (!patchToApply.hasOwnProperty(key))
        continue;
      const subPatch = patchToApply[key];
      const targetValue = target[key];
      if (isPlainObject(targetValue) && isPlainObject(subPatch) && target.hasOwnProperty(key) && !(0, lib_exports.isRef)(subPatch) && !(0, lib_exports.isReactive)(subPatch)) {
        target[key] = mergeReactiveObjects(targetValue, subPatch);
      } else {
        target[key] = subPatch;
      }
    }
    return target;
  }
  var skipHydrateSymbol = true ? Symbol("pinia:skipHydration") : Symbol();
  var skipHydrateMap = /* @__PURE__ */ new WeakMap();
  function shouldHydrate(obj) {
    return isVue2 ? !skipHydrateMap.has(obj) : !isPlainObject(obj) || !obj.hasOwnProperty(skipHydrateSymbol);
  }
  var { assign } = Object;
  function isComputed(o) {
    return !!((0, lib_exports.isRef)(o) && o.effect);
  }
  function createOptionsStore(id2, options, pinia, hot) {
    const { state, actions, getters } = options;
    const initialState = pinia.state.value[id2];
    let store;
    function setup() {
      if (!initialState && !hot) {
        if (isVue2) {
          set(pinia.state.value, id2, state ? state() : {});
        } else {
          pinia.state.value[id2] = state ? state() : {};
        }
      }
      const localState = hot ? (0, lib_exports.toRefs)((0, lib_exports.ref)(state ? state() : {}).value) : (0, lib_exports.toRefs)(pinia.state.value[id2]);
      return assign(localState, actions, Object.keys(getters || {}).reduce((computedGetters, name) => {
        if (name in localState) {
          console.warn(`[\u{1F34D}]: A getter cannot have the same name as another state property. Rename one of them. Found with "${name}" in store "${id2}".`);
        }
        computedGetters[name] = (0, lib_exports.markRaw)((0, lib_exports.computed)(() => {
          setActivePinia(pinia);
          const store2 = pinia._s.get(id2);
          if (isVue2 && !store2._r)
            return;
          return getters[name].call(store2, store2);
        }));
        return computedGetters;
      }, {}));
    }
    store = createSetupStore(id2, setup, options, pinia, hot, true);
    return store;
  }
  function createSetupStore($id, setup, options = {}, pinia, hot, isOptionsStore) {
    let scope;
    const optionsForPlugin = assign({ actions: {} }, options);
    if (!pinia._e.active) {
      throw new Error("Pinia destroyed");
    }
    const $subscribeOptions = {
      deep: true
    };
    if (!isVue2) {
      $subscribeOptions.onTrigger = (event) => {
        if (isListening) {
          debuggerEvents = event;
        } else if (isListening == false && !store._hotUpdating) {
          if (Array.isArray(debuggerEvents)) {
            debuggerEvents.push(event);
          } else {
            console.error("\u{1F34D} debuggerEvents should be an array. This is most likely an internal Pinia bug.");
          }
        }
      };
    }
    let isListening;
    let isSyncListening;
    let subscriptions = [];
    let actionSubscriptions = [];
    let debuggerEvents;
    const initialState = pinia.state.value[$id];
    if (!isOptionsStore && !initialState && !hot) {
      if (isVue2) {
        set(pinia.state.value, $id, {});
      } else {
        pinia.state.value[$id] = {};
      }
    }
    const hotState = (0, lib_exports.ref)({});
    let activeListener;
    function $patch(partialStateOrMutator) {
      let subscriptionMutation;
      isListening = isSyncListening = false;
      if (true) {
        debuggerEvents = [];
      }
      if (typeof partialStateOrMutator === "function") {
        partialStateOrMutator(pinia.state.value[$id]);
        subscriptionMutation = {
          type: MutationType.patchFunction,
          storeId: $id,
          events: debuggerEvents
        };
      } else {
        mergeReactiveObjects(pinia.state.value[$id], partialStateOrMutator);
        subscriptionMutation = {
          type: MutationType.patchObject,
          payload: partialStateOrMutator,
          storeId: $id,
          events: debuggerEvents
        };
      }
      const myListenerId = activeListener = Symbol();
      (0, lib_exports.nextTick)().then(() => {
        if (activeListener === myListenerId) {
          isListening = true;
        }
      });
      isSyncListening = true;
      triggerSubscriptions(subscriptions, subscriptionMutation, pinia.state.value[$id]);
    }
    const $reset = isOptionsStore ? function $reset2() {
      const { state } = options;
      const newState = state ? state() : {};
      this.$patch(($state) => {
        assign($state, newState);
      });
    } : true ? () => {
      throw new Error(`\u{1F34D}: Store "${$id}" is built using the setup syntax and does not implement $reset().`);
    } : noop;
    function $dispose() {
      scope.stop();
      subscriptions = [];
      actionSubscriptions = [];
      pinia._s.delete($id);
    }
    function wrapAction(name, action) {
      return function() {
        setActivePinia(pinia);
        const args = Array.from(arguments);
        const afterCallbackList = [];
        const onErrorCallbackList = [];
        function after(callback) {
          afterCallbackList.push(callback);
        }
        function onError(callback) {
          onErrorCallbackList.push(callback);
        }
        triggerSubscriptions(actionSubscriptions, {
          args,
          name,
          store,
          after,
          onError
        });
        let ret;
        try {
          ret = action.apply(this && this.$id === $id ? this : store, args);
        } catch (error) {
          triggerSubscriptions(onErrorCallbackList, error);
          throw error;
        }
        if (ret instanceof Promise) {
          return ret.then((value) => {
            triggerSubscriptions(afterCallbackList, value);
            return value;
          }).catch((error) => {
            triggerSubscriptions(onErrorCallbackList, error);
            return Promise.reject(error);
          });
        }
        triggerSubscriptions(afterCallbackList, ret);
        return ret;
      };
    }
    const _hmrPayload = /* @__PURE__ */ (0, lib_exports.markRaw)({
      actions: {},
      getters: {},
      state: [],
      hotState
    });
    const partialStore = {
      _p: pinia,
      $id,
      $onAction: addSubscription.bind(null, actionSubscriptions),
      $patch,
      $reset,
      $subscribe(callback, options2 = {}) {
        const removeSubscription = addSubscription(subscriptions, callback, options2.detached, () => stopWatcher());
        const stopWatcher = scope.run(() => (0, lib_exports.watch)(() => pinia.state.value[$id], (state) => {
          if (options2.flush === "sync" ? isSyncListening : isListening) {
            callback({
              storeId: $id,
              type: MutationType.direct,
              events: debuggerEvents
            }, state);
          }
        }, assign({}, $subscribeOptions, options2)));
        return removeSubscription;
      },
      $dispose
    };
    if (isVue2) {
      partialStore._r = false;
    }
    const store = (0, lib_exports.reactive)(true ? assign(
      {
        _hmrPayload,
        _customProperties: (0, lib_exports.markRaw)(/* @__PURE__ */ new Set())
      },
      partialStore
    ) : partialStore);
    pinia._s.set($id, store);
    const runWithContext = pinia._a && pinia._a.runWithContext || fallbackRunWithContext;
    const setupStore = runWithContext(() => pinia._e.run(() => (scope = (0, lib_exports.effectScope)()).run(setup)));
    for (const key in setupStore) {
      const prop = setupStore[key];
      if ((0, lib_exports.isRef)(prop) && !isComputed(prop) || (0, lib_exports.isReactive)(prop)) {
        if (hot) {
          set(hotState.value, key, (0, lib_exports.toRef)(setupStore, key));
        } else if (!isOptionsStore) {
          if (initialState && shouldHydrate(prop)) {
            if ((0, lib_exports.isRef)(prop)) {
              prop.value = initialState[key];
            } else {
              mergeReactiveObjects(prop, initialState[key]);
            }
          }
          if (isVue2) {
            set(pinia.state.value[$id], key, prop);
          } else {
            pinia.state.value[$id][key] = prop;
          }
        }
        if (true) {
          _hmrPayload.state.push(key);
        }
      } else if (typeof prop === "function") {
        const actionValue = hot ? prop : wrapAction(key, prop);
        if (isVue2) {
          set(setupStore, key, actionValue);
        } else {
          setupStore[key] = actionValue;
        }
        if (true) {
          _hmrPayload.actions[key] = prop;
        }
        optionsForPlugin.actions[key] = prop;
      } else if (true) {
        if (isComputed(prop)) {
          _hmrPayload.getters[key] = isOptionsStore ? options.getters[key] : prop;
          if (IS_CLIENT) {
            const getters = setupStore._getters || (setupStore._getters = (0, lib_exports.markRaw)([]));
            getters.push(key);
          }
        }
      }
    }
    if (isVue2) {
      Object.keys(setupStore).forEach((key) => {
        set(store, key, setupStore[key]);
      });
    } else {
      assign(store, setupStore);
      assign((0, lib_exports.toRaw)(store), setupStore);
    }
    Object.defineProperty(store, "$state", {
      get: () => hot ? hotState.value : pinia.state.value[$id],
      set: (state) => {
        if (hot) {
          throw new Error("cannot set hotState");
        }
        $patch(($state) => {
          assign($state, state);
        });
      }
    });
    if (true) {
      store._hotUpdate = (0, lib_exports.markRaw)((newStore) => {
        store._hotUpdating = true;
        newStore._hmrPayload.state.forEach((stateKey) => {
          if (stateKey in store.$state) {
            const newStateTarget = newStore.$state[stateKey];
            const oldStateSource = store.$state[stateKey];
            if (typeof newStateTarget === "object" && isPlainObject(newStateTarget) && isPlainObject(oldStateSource)) {
              patchObject(newStateTarget, oldStateSource);
            } else {
              newStore.$state[stateKey] = oldStateSource;
            }
          }
          set(store, stateKey, (0, lib_exports.toRef)(newStore.$state, stateKey));
        });
        Object.keys(store.$state).forEach((stateKey) => {
          if (!(stateKey in newStore.$state)) {
            del(store, stateKey);
          }
        });
        isListening = false;
        isSyncListening = false;
        pinia.state.value[$id] = (0, lib_exports.toRef)(newStore._hmrPayload, "hotState");
        isSyncListening = true;
        (0, lib_exports.nextTick)().then(() => {
          isListening = true;
        });
        for (const actionName in newStore._hmrPayload.actions) {
          const action = newStore[actionName];
          set(store, actionName, wrapAction(actionName, action));
        }
        for (const getterName in newStore._hmrPayload.getters) {
          const getter = newStore._hmrPayload.getters[getterName];
          const getterValue = isOptionsStore ? (0, lib_exports.computed)(() => {
            setActivePinia(pinia);
            return getter.call(store, store);
          }) : getter;
          set(store, getterName, getterValue);
        }
        Object.keys(store._hmrPayload.getters).forEach((key) => {
          if (!(key in newStore._hmrPayload.getters)) {
            del(store, key);
          }
        });
        Object.keys(store._hmrPayload.actions).forEach((key) => {
          if (!(key in newStore._hmrPayload.actions)) {
            del(store, key);
          }
        });
        store._hmrPayload = newStore._hmrPayload;
        store._getters = newStore._getters;
        store._hotUpdating = false;
      });
    }
    if (USE_DEVTOOLS) {
      const nonEnumerable = {
        writable: true,
        configurable: true,
        enumerable: false
      };
      ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((p) => {
        Object.defineProperty(store, p, assign({ value: store[p] }, nonEnumerable));
      });
    }
    if (isVue2) {
      store._r = true;
    }
    pinia._p.forEach((extender) => {
      if (USE_DEVTOOLS) {
        const extensions = scope.run(() => extender({
          store,
          app: pinia._a,
          pinia,
          options: optionsForPlugin
        }));
        Object.keys(extensions || {}).forEach((key) => store._customProperties.add(key));
        assign(store, extensions);
      } else {
        assign(store, scope.run(() => extender({
          store,
          app: pinia._a,
          pinia,
          options: optionsForPlugin
        })));
      }
    });
    if (store.$state && typeof store.$state === "object" && typeof store.$state.constructor === "function" && !store.$state.constructor.toString().includes("[native code]")) {
      console.warn(`[\u{1F34D}]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${store.$id}".`);
    }
    if (initialState && isOptionsStore && options.hydrate) {
      options.hydrate(store.$state, initialState);
    }
    isListening = true;
    isSyncListening = true;
    return store;
  }
  function defineStore(idOrOptions, setup, setupOptions) {
    let id2;
    let options;
    const isSetupStore = typeof setup === "function";
    if (typeof idOrOptions === "string") {
      id2 = idOrOptions;
      options = isSetupStore ? setupOptions : setup;
    } else {
      options = idOrOptions;
      id2 = idOrOptions.id;
      if (typeof id2 !== "string") {
        throw new Error(`[\u{1F34D}]: "defineStore()" must be passed a store id as its first argument.`);
      }
    }
    function useStore3(pinia, hot) {
      const hasContext = (0, lib_exports.hasInjectionContext)();
      pinia = (false ? null : pinia) || (hasContext ? (0, lib_exports.inject)(piniaSymbol, null) : null);
      if (pinia)
        setActivePinia(pinia);
      if (!activePinia) {
        throw new Error(`[\u{1F34D}]: "getActivePinia()" was called but there was no active Pinia. Are you trying to use a store before calling "app.use(pinia)"?
See https://pinia.vuejs.org/core-concepts/outside-component-usage.html for help.
This will fail in production.`);
      }
      pinia = activePinia;
      if (!pinia._s.has(id2)) {
        if (isSetupStore) {
          createSetupStore(id2, setup, options, pinia);
        } else {
          createOptionsStore(id2, options, pinia);
        }
        if (true) {
          useStore3._pinia = pinia;
        }
      }
      const store = pinia._s.get(id2);
      if (hot) {
        const hotId = "__hot:" + id2;
        const newStore = isSetupStore ? createSetupStore(hotId, setup, options, pinia, true) : createOptionsStore(hotId, assign({}, options), pinia, true);
        hot._hotUpdate(newStore);
        delete pinia.state.value[hotId];
        pinia._s.delete(hotId);
      }
      if (IS_CLIENT) {
        const currentInstance = (0, lib_exports.getCurrentInstance)();
        if (currentInstance && currentInstance.proxy && !hot) {
          const vm = currentInstance.proxy;
          const cache = "_pStores" in vm ? vm._pStores : vm._pStores = {};
          cache[id2] = store;
        }
      }
      return store;
    }
    useStore3.$id = id2;
    return useStore3;
  }

  // frappe/public/js/workflow_builder/utils.js
  function get_workflow_elements(workflow, workflow_data) {
    let elements = [];
    let states = {};
    let actions = {};
    let transitions = {};
    let x2 = 150;
    let y2 = 100;
    workflow_data.forEach((node) => {
      if (node.type == "state") {
        states[node.id] = node;
      } else if (node.type == "action") {
        actions[node.id] = node;
      } else if (node.type == "transition") {
        transitions[`edge-${node.source}-${node.target}`] = node;
        if (node.source.startsWith("action-")) {
          const action = actions[node.source];
          if (!action.data.to_id) {
            action.data.to_id = node.target;
          }
          node.sourceNode = action;
          node.targetNode = states[node.target];
        } else {
          const action = actions[node.target];
          if (!action.data.from_id) {
            action.data.from_id = node.source;
          }
          node.targetNode = action;
          node.sourceNode = states[node.source];
        }
      }
    });
    function state_obj(id2, data) {
      let state = states[id2];
      if (state) {
        state.data = data;
      } else {
        state = {
          id: id2.toString(),
          type: "state",
          position: { x: x2, y: y2 },
          data
        };
      }
      Object.assign(state, {
        initialized: true,
        selected: false,
        dragging: false,
        resizing: false
      });
      return states[id2] = state;
    }
    function action_obj(id2, data, position) {
      let action = actions[id2];
      if (action) {
        data.from_id = action.data.from_id;
        data.to_id = action.data.to_id, action.data = data;
      } else {
        action = {
          id: id2,
          type: "action",
          position,
          data
        };
      }
      Object.assign(action, {
        initialized: true,
        selected: false,
        dragging: false,
        resizing: false
      });
      return actions[id2] = action;
    }
    function transition_obj(id2, source, target) {
      let transition2 = transitions[id2];
      if (!transition2) {
        transition2 = {
          id: id2,
          type: "transition",
          source: source.toString(),
          target: target.toString(),
          sourceHandle: "right",
          targetHandle: "left",
          updatable: true,
          animated: true
        };
      }
      Object.assign(transition2, {
        initialized: true,
        selected: false,
        dragging: false,
        resizing: false
      });
      return transitions[id2] = transition2;
    }
    let state_id = Math.max(...workflow.states.map((state) => state.workflow_builder_id || 0));
    workflow.states.forEach((state, i) => {
      x2 += 400;
      let doc_status_map = {
        0: "Draft",
        1: "Submitted",
        2: "Cancelled"
      };
      const id2 = state.workflow_builder_id || ++state_id;
      elements.push(
        state_obj(id2, __spreadProps(__spreadValues({}, state), {
          doc_status: doc_status_map[state.doc_status]
        }))
      );
    });
    let action_id = Math.max(
      ...workflow.transitions.map(
        (transition2) => {
          var _a2;
          return ((_a2 = transition2.workflow_builder_id) == null ? void 0 : _a2.replace("action-", "")) || 0;
        }
      )
    );
    workflow.transitions.forEach((transition2, i) => {
      const id2 = transition2.workflow_builder_id || "action-" + ++action_id;
      let action = actions[id2];
      let source, target;
      if (action && action.data.from_id && action.data.to_id) {
        source = states[action.data.from_id];
        target = states[action.data.to_id];
      } else {
        source = Object.values(states).filter(
          (state) => {
            var _a2;
            return ((_a2 = state.data) == null ? void 0 : _a2.state) == transition2.state;
          }
        )[0];
        target = Object.values(states).filter(
          (state) => {
            var _a2;
            return ((_a2 = state.data) == null ? void 0 : _a2.state) == transition2.next_state;
          }
        )[0];
      }
      let position = { x: source.position.x + 250, y: y2 + 20 };
      let data = __spreadProps(__spreadValues({}, transition2), {
        from_id: source.id,
        to_id: target.id,
        from: transition2.state,
        to: transition2.next_state
      });
      elements.push(action_obj(id2, data, position));
      elements.push(transition_obj("edge-" + source.id + "-" + id2, source.id, id2));
      elements.push(transition_obj("edge-" + id2 + "-" + target.id, id2, target.id));
    });
    return elements;
  }
  function validate_transitions(state, next_state) {
    let message;
    if (state.doc_status == "Cancelled") {
      message = __("Cannot change state of Cancelled Document <b>({0} State)</b>", [
        state.state
      ]);
    }
    if (state.doc_status == "Submitted" && next_state.doc_status == "Draft") {
      message = __(
        "Submitted document cannot be converted back to draft while transitioning from <b>{0} State</b> to <b>{1} State</b>",
        [state.state, next_state.state]
      );
    }
    if (state.doc_status == "Draft" && next_state.doc_status == "Cancelled") {
      message = __(
        "Cannot cancel before submitting while transitioning from <b>{0} State</b> to <b>{1} State</b>",
        [state.state, next_state.state]
      );
    }
    return message;
  }

  // node_modules/@vueuse/shared/index.mjs
  var _a;
  var isClient = typeof window !== "undefined";
  var isFunction = (val) => typeof val === "function";
  var isString = (val) => typeof val === "string";
  var timestamp = () => +Date.now();
  var noop2 = () => {
  };
  var isIOS = isClient && ((_a = window == null ? void 0 : window.navigator) == null ? void 0 : _a.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
  function resolveUnref(r) {
    return typeof r === "function" ? r() : (0, lib_exports.unref)(r);
  }
  function createFilterWrapper(filter2, fn) {
    function wrapper(...args) {
      return new Promise((resolve, reject) => {
        Promise.resolve(filter2(() => fn.apply(this, args), { fn, thisArg: this, args })).then(resolve).catch(reject);
      });
    }
    return wrapper;
  }
  var bypassFilter = (invoke) => {
    return invoke();
  };
  function debounceFilter(ms, options = {}) {
    let timer2;
    let maxTimer;
    let lastRejector = noop2;
    const _clearTimeout = (timer22) => {
      clearTimeout(timer22);
      lastRejector();
      lastRejector = noop2;
    };
    const filter2 = (invoke) => {
      const duration = resolveUnref(ms);
      const maxDuration = resolveUnref(options.maxWait);
      if (timer2)
        _clearTimeout(timer2);
      if (duration <= 0 || maxDuration !== void 0 && maxDuration <= 0) {
        if (maxTimer) {
          _clearTimeout(maxTimer);
          maxTimer = null;
        }
        return Promise.resolve(invoke());
      }
      return new Promise((resolve, reject) => {
        lastRejector = options.rejectOnCancel ? reject : resolve;
        if (maxDuration && !maxTimer) {
          maxTimer = setTimeout(() => {
            if (timer2)
              _clearTimeout(timer2);
            maxTimer = null;
            resolve(invoke());
          }, maxDuration);
        }
        timer2 = setTimeout(() => {
          if (maxTimer)
            _clearTimeout(maxTimer);
          maxTimer = null;
          resolve(invoke());
        }, duration);
      });
    };
    return filter2;
  }
  function pausableFilter(extendFilter = bypassFilter) {
    const isActive = (0, lib_exports.ref)(true);
    function pause() {
      isActive.value = false;
    }
    function resume() {
      isActive.value = true;
    }
    const eventFilter = (...args) => {
      if (isActive.value)
        extendFilter(...args);
    };
    return { isActive: (0, lib_exports.readonly)(isActive), pause, resume, eventFilter };
  }
  function identity(arg) {
    return arg;
  }
  function computedWithControl(source, fn) {
    let v = void 0;
    let track;
    let trigger;
    const dirty = (0, lib_exports.ref)(true);
    const update = () => {
      dirty.value = true;
      trigger();
    };
    (0, lib_exports.watch)(source, update, { flush: "sync" });
    const get2 = isFunction(fn) ? fn : fn.get;
    const set3 = isFunction(fn) ? void 0 : fn.set;
    const result = (0, lib_exports.customRef)((_track, _trigger) => {
      track = _track;
      trigger = _trigger;
      return {
        get() {
          if (dirty.value) {
            v = get2();
            dirty.value = false;
          }
          track();
          return v;
        },
        set(v2) {
          set3 == null ? void 0 : set3(v2);
        }
      };
    });
    if (Object.isExtensible(result))
      result.trigger = update;
    return result;
  }
  function tryOnScopeDispose(fn) {
    if ((0, lib_exports.getCurrentScope)()) {
      (0, lib_exports.onScopeDispose)(fn);
      return true;
    }
    return false;
  }
  var __defProp$3 = Object.defineProperty;
  var __defProps$3 = Object.defineProperties;
  var __getOwnPropDescs$3 = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols$3 = Object.getOwnPropertySymbols;
  var __hasOwnProp$3 = Object.prototype.hasOwnProperty;
  var __propIsEnum$3 = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$3 = (obj, key, value) => key in obj ? __defProp$3(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues$3 = (a2, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$3.call(b, prop))
        __defNormalProp$3(a2, prop, b[prop]);
    if (__getOwnPropSymbols$3)
      for (var prop of __getOwnPropSymbols$3(b)) {
        if (__propIsEnum$3.call(b, prop))
          __defNormalProp$3(a2, prop, b[prop]);
      }
    return a2;
  };
  var __spreadProps$3 = (a2, b) => __defProps$3(a2, __getOwnPropDescs$3(b));
  var __objRest$2 = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp$3.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols$3)
      for (var prop of __getOwnPropSymbols$3(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum$3.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  function watchIgnorable(source, cb, options = {}) {
    const _a2 = options, {
      eventFilter = bypassFilter
    } = _a2, watchOptions = __objRest$2(_a2, [
      "eventFilter"
    ]);
    const filteredCb = createFilterWrapper(eventFilter, cb);
    let ignoreUpdates;
    let ignorePrevAsyncUpdates;
    let stop;
    if (watchOptions.flush === "sync") {
      const ignore = (0, lib_exports.ref)(false);
      ignorePrevAsyncUpdates = () => {
      };
      ignoreUpdates = (updater) => {
        ignore.value = true;
        updater();
        ignore.value = false;
      };
      stop = (0, lib_exports.watch)(source, (...args) => {
        if (!ignore.value)
          filteredCb(...args);
      }, watchOptions);
    } else {
      const disposables = [];
      const ignoreCounter = (0, lib_exports.ref)(0);
      const syncCounter = (0, lib_exports.ref)(0);
      ignorePrevAsyncUpdates = () => {
        ignoreCounter.value = syncCounter.value;
      };
      disposables.push((0, lib_exports.watch)(source, () => {
        syncCounter.value++;
      }, __spreadProps$3(__spreadValues$3({}, watchOptions), { flush: "sync" })));
      ignoreUpdates = (updater) => {
        const syncCounterPrev = syncCounter.value;
        updater();
        ignoreCounter.value += syncCounter.value - syncCounterPrev;
      };
      disposables.push((0, lib_exports.watch)(source, (...args) => {
        const ignore = ignoreCounter.value > 0 && ignoreCounter.value === syncCounter.value;
        ignoreCounter.value = 0;
        syncCounter.value = 0;
        if (ignore)
          return;
        filteredCb(...args);
      }, watchOptions));
      stop = () => {
        disposables.forEach((fn) => fn());
      };
    }
    return { stop, ignoreUpdates, ignorePrevAsyncUpdates };
  }
  function whenever(source, cb, options) {
    return (0, lib_exports.watch)(source, (v, ov, onInvalidate) => {
      if (v)
        cb(v, ov, onInvalidate);
    }, options);
  }

  // node_modules/@vueuse/core/index.mjs
  function computedAsync(evaluationCallback, initialState, optionsOrRef) {
    let options;
    if ((0, lib_exports.isRef)(optionsOrRef)) {
      options = {
        evaluating: optionsOrRef
      };
    } else {
      options = optionsOrRef || {};
    }
    const {
      lazy = false,
      evaluating = void 0,
      shallow = false,
      onError = noop2
    } = options;
    const started = (0, lib_exports.ref)(!lazy);
    const current = shallow ? (0, lib_exports.shallowRef)(initialState) : (0, lib_exports.ref)(initialState);
    let counter = 0;
    (0, lib_exports.watchEffect)(async (onInvalidate) => {
      if (!started.value)
        return;
      counter++;
      const counterAtBeginning = counter;
      let hasFinished = false;
      if (evaluating) {
        Promise.resolve().then(() => {
          evaluating.value = true;
        });
      }
      try {
        const result = await evaluationCallback((cancelCallback) => {
          onInvalidate(() => {
            if (evaluating)
              evaluating.value = false;
            if (!hasFinished)
              cancelCallback();
          });
        });
        if (counterAtBeginning === counter)
          current.value = result;
      } catch (e2) {
        onError(e2);
      } finally {
        if (evaluating && counterAtBeginning === counter)
          evaluating.value = false;
        hasFinished = true;
      }
    });
    if (lazy) {
      return (0, lib_exports.computed)(() => {
        started.value = true;
        return current.value;
      });
    } else {
      return current;
    }
  }
  function unrefElement(elRef) {
    var _a2;
    const plain = resolveUnref(elRef);
    return (_a2 = plain == null ? void 0 : plain.$el) != null ? _a2 : plain;
  }
  var defaultWindow = isClient ? window : void 0;
  var defaultDocument = isClient ? window.document : void 0;
  var defaultNavigator = isClient ? window.navigator : void 0;
  var defaultLocation = isClient ? window.location : void 0;
  function useEventListener(...args) {
    let target;
    let events;
    let listeners;
    let options;
    if (isString(args[0]) || Array.isArray(args[0])) {
      [events, listeners, options] = args;
      target = defaultWindow;
    } else {
      [target, events, listeners, options] = args;
    }
    if (!target)
      return noop2;
    if (!Array.isArray(events))
      events = [events];
    if (!Array.isArray(listeners))
      listeners = [listeners];
    const cleanups = [];
    const cleanup = () => {
      cleanups.forEach((fn) => fn());
      cleanups.length = 0;
    };
    const register = (el, event, listener, options2) => {
      el.addEventListener(event, listener, options2);
      return () => el.removeEventListener(event, listener, options2);
    };
    const stopWatch = (0, lib_exports.watch)(() => [unrefElement(target), resolveUnref(options)], ([el, options2]) => {
      cleanup();
      if (!el)
        return;
      cleanups.push(...events.flatMap((event) => {
        return listeners.map((listener) => register(el, event, listener, options2));
      }));
    }, { immediate: true, flush: "post" });
    const stop = () => {
      stopWatch();
      cleanup();
    };
    tryOnScopeDispose(stop);
    return stop;
  }
  var _iOSWorkaround = false;
  function onClickOutside(target, handler, options = {}) {
    const { window: window2 = defaultWindow, ignore = [], capture = true, detectIframe = false } = options;
    if (!window2)
      return;
    if (isIOS && !_iOSWorkaround) {
      _iOSWorkaround = true;
      Array.from(window2.document.body.children).forEach((el) => el.addEventListener("click", noop2));
    }
    let shouldListen = true;
    const shouldIgnore = (event) => {
      return ignore.some((target2) => {
        if (typeof target2 === "string") {
          return Array.from(window2.document.querySelectorAll(target2)).some((el) => el === event.target || event.composedPath().includes(el));
        } else {
          const el = unrefElement(target2);
          return el && (event.target === el || event.composedPath().includes(el));
        }
      });
    };
    const listener = (event) => {
      const el = unrefElement(target);
      if (!el || el === event.target || event.composedPath().includes(el))
        return;
      if (event.detail === 0)
        shouldListen = !shouldIgnore(event);
      if (!shouldListen) {
        shouldListen = true;
        return;
      }
      handler(event);
    };
    const cleanup = [
      useEventListener(window2, "click", listener, { passive: true, capture }),
      useEventListener(window2, "pointerdown", (e2) => {
        const el = unrefElement(target);
        if (el)
          shouldListen = !e2.composedPath().includes(el) && !shouldIgnore(e2);
      }, { passive: true }),
      detectIframe && useEventListener(window2, "blur", (event) => {
        var _a2;
        const el = unrefElement(target);
        if (((_a2 = window2.document.activeElement) == null ? void 0 : _a2.tagName) === "IFRAME" && !(el == null ? void 0 : el.contains(window2.document.activeElement)))
          handler(event);
      })
    ].filter(Boolean);
    const stop = () => cleanup.forEach((fn) => fn());
    return stop;
  }
  var __defProp$n = Object.defineProperty;
  var __defProps$9 = Object.defineProperties;
  var __getOwnPropDescs$9 = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols$p = Object.getOwnPropertySymbols;
  var __hasOwnProp$p = Object.prototype.hasOwnProperty;
  var __propIsEnum$p = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$n = (obj, key, value) => key in obj ? __defProp$n(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues$n = (a2, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$p.call(b, prop))
        __defNormalProp$n(a2, prop, b[prop]);
    if (__getOwnPropSymbols$p)
      for (var prop of __getOwnPropSymbols$p(b)) {
        if (__propIsEnum$p.call(b, prop))
          __defNormalProp$n(a2, prop, b[prop]);
      }
    return a2;
  };
  var __spreadProps$9 = (a2, b) => __defProps$9(a2, __getOwnPropDescs$9(b));
  var createKeyPredicate = (keyFilter) => {
    if (typeof keyFilter === "function")
      return keyFilter;
    else if (typeof keyFilter === "string")
      return (event) => event.key === keyFilter;
    else if (Array.isArray(keyFilter))
      return (event) => keyFilter.includes(event.key);
    return () => true;
  };
  function onKeyStroke(...args) {
    let key;
    let handler;
    let options = {};
    if (args.length === 3) {
      key = args[0];
      handler = args[1];
      options = args[2];
    } else if (args.length === 2) {
      if (typeof args[1] === "object") {
        key = true;
        handler = args[0];
        options = args[1];
      } else {
        key = args[0];
        handler = args[1];
      }
    } else {
      key = true;
      handler = args[0];
    }
    const { target = defaultWindow, eventName = "keydown", passive = false } = options;
    const predicate = createKeyPredicate(key);
    const listener = (e2) => {
      if (predicate(e2))
        handler(e2);
    };
    return useEventListener(target, eventName, listener, passive);
  }
  function onKeyDown(key, handler, options = {}) {
    return onKeyStroke(key, handler, __spreadProps$9(__spreadValues$n({}, options), { eventName: "keydown" }));
  }
  function useActiveElement(options = {}) {
    var _a2;
    const { window: window2 = defaultWindow } = options;
    const document2 = (_a2 = options.document) != null ? _a2 : window2 == null ? void 0 : window2.document;
    const activeElement = computedWithControl(() => null, () => document2 == null ? void 0 : document2.activeElement);
    if (window2) {
      useEventListener(window2, "blur", (event) => {
        if (event.relatedTarget !== null)
          return;
        activeElement.trigger();
      }, true);
      useEventListener(window2, "focus", activeElement.trigger, true);
    }
    return activeElement;
  }
  function cloneFnJSON(source) {
    return JSON.parse(JSON.stringify(source));
  }
  var _global2 = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
  var globalKey = "__vueuse_ssr_handlers__";
  _global2[globalKey] = _global2[globalKey] || {};
  var handlers = _global2[globalKey];
  var fnBypass = (v) => v;
  var fnSetSource = (source, value) => source.value = value;
  function defaultDump(clone) {
    return clone ? isFunction(clone) ? clone : cloneFnJSON : fnBypass;
  }
  function defaultParse(clone) {
    return clone ? isFunction(clone) ? clone : cloneFnJSON : fnBypass;
  }
  function useManualRefHistory(source, options = {}) {
    const {
      clone = false,
      dump = defaultDump(clone),
      parse = defaultParse(clone),
      setSource = fnSetSource
    } = options;
    function _createHistoryRecord() {
      return (0, lib_exports.markRaw)({
        snapshot: dump(source.value),
        timestamp: timestamp()
      });
    }
    const last = (0, lib_exports.ref)(_createHistoryRecord());
    const undoStack = (0, lib_exports.ref)([]);
    const redoStack = (0, lib_exports.ref)([]);
    const _setSource = (record) => {
      setSource(source, parse(record.snapshot));
      last.value = record;
    };
    const commit = () => {
      undoStack.value.unshift(last.value);
      last.value = _createHistoryRecord();
      if (options.capacity && undoStack.value.length > options.capacity)
        undoStack.value.splice(options.capacity, Infinity);
      if (redoStack.value.length)
        redoStack.value.splice(0, redoStack.value.length);
    };
    const clear = () => {
      undoStack.value.splice(0, undoStack.value.length);
      redoStack.value.splice(0, redoStack.value.length);
    };
    const undo = () => {
      const state = undoStack.value.shift();
      if (state) {
        redoStack.value.unshift(last.value);
        _setSource(state);
      }
    };
    const redo = () => {
      const state = redoStack.value.shift();
      if (state) {
        undoStack.value.unshift(last.value);
        _setSource(state);
      }
    };
    const reset = () => {
      _setSource(last.value);
    };
    const history = (0, lib_exports.computed)(() => [last.value, ...undoStack.value]);
    const canUndo = (0, lib_exports.computed)(() => undoStack.value.length > 0);
    const canRedo = (0, lib_exports.computed)(() => redoStack.value.length > 0);
    return {
      source,
      undoStack,
      redoStack,
      last,
      history,
      canUndo,
      canRedo,
      clear,
      commit,
      reset,
      undo,
      redo
    };
  }
  var __defProp$h = Object.defineProperty;
  var __defProps$6 = Object.defineProperties;
  var __getOwnPropDescs$6 = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols$j = Object.getOwnPropertySymbols;
  var __hasOwnProp$j = Object.prototype.hasOwnProperty;
  var __propIsEnum$j = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$h = (obj, key, value) => key in obj ? __defProp$h(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues$h = (a2, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$j.call(b, prop))
        __defNormalProp$h(a2, prop, b[prop]);
    if (__getOwnPropSymbols$j)
      for (var prop of __getOwnPropSymbols$j(b)) {
        if (__propIsEnum$j.call(b, prop))
          __defNormalProp$h(a2, prop, b[prop]);
      }
    return a2;
  };
  var __spreadProps$6 = (a2, b) => __defProps$6(a2, __getOwnPropDescs$6(b));
  function useRefHistory(source, options = {}) {
    const {
      deep = false,
      flush = "pre",
      eventFilter
    } = options;
    const {
      eventFilter: composedFilter,
      pause,
      resume: resumeTracking,
      isActive: isTracking
    } = pausableFilter(eventFilter);
    const {
      ignoreUpdates,
      ignorePrevAsyncUpdates,
      stop
    } = watchIgnorable(source, commit, { deep, flush, eventFilter: composedFilter });
    function setSource(source2, value) {
      ignorePrevAsyncUpdates();
      ignoreUpdates(() => {
        source2.value = value;
      });
    }
    const manualHistory = useManualRefHistory(source, __spreadProps$6(__spreadValues$h({}, options), { clone: options.clone || deep, setSource }));
    const { clear, commit: manualCommit } = manualHistory;
    function commit() {
      ignorePrevAsyncUpdates();
      manualCommit();
    }
    function resume(commitNow) {
      resumeTracking();
      if (commitNow)
        commit();
    }
    function batch(fn) {
      let canceled = false;
      const cancel = () => canceled = true;
      ignoreUpdates(() => {
        fn(cancel);
      });
      if (!canceled)
        commit();
    }
    function dispose() {
      stop();
      clear();
    }
    return __spreadProps$6(__spreadValues$h({}, manualHistory), {
      isTracking,
      pause,
      resume,
      commit,
      batch,
      dispose
    });
  }
  var __defProp$g = Object.defineProperty;
  var __defProps$5 = Object.defineProperties;
  var __getOwnPropDescs$5 = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols$i = Object.getOwnPropertySymbols;
  var __hasOwnProp$i = Object.prototype.hasOwnProperty;
  var __propIsEnum$i = Object.prototype.propertyIsEnumerable;
  var __defNormalProp$g = (obj, key, value) => key in obj ? __defProp$g(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues$g = (a2, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp$i.call(b, prop))
        __defNormalProp$g(a2, prop, b[prop]);
    if (__getOwnPropSymbols$i)
      for (var prop of __getOwnPropSymbols$i(b)) {
        if (__propIsEnum$i.call(b, prop))
          __defNormalProp$g(a2, prop, b[prop]);
      }
    return a2;
  };
  var __spreadProps$5 = (a2, b) => __defProps$5(a2, __getOwnPropDescs$5(b));
  function useDebouncedRefHistory(source, options = {}) {
    const filter2 = options.debounce ? debounceFilter(options.debounce) : void 0;
    const history = useRefHistory(source, __spreadProps$5(__spreadValues$g({}, options), { eventFilter: filter2 }));
    return __spreadValues$g({}, history);
  }
  var DefaultMagicKeysAliasMap = {
    ctrl: "control",
    command: "meta",
    cmd: "meta",
    option: "alt",
    up: "arrowup",
    down: "arrowdown",
    left: "arrowleft",
    right: "arrowright"
  };
  function useMagicKeys(options = {}) {
    const {
      reactive: useReactive = false,
      target = defaultWindow,
      aliasMap = DefaultMagicKeysAliasMap,
      passive = true,
      onEventFired = noop2
    } = options;
    const current = (0, lib_exports.reactive)(/* @__PURE__ */ new Set());
    const obj = {
      toJSON() {
        return {};
      },
      current
    };
    const refs = useReactive ? (0, lib_exports.reactive)(obj) : obj;
    const metaDeps = /* @__PURE__ */ new Set();
    const usedKeys = /* @__PURE__ */ new Set();
    function setRefs(key, value) {
      if (key in refs) {
        if (useReactive)
          refs[key] = value;
        else
          refs[key].value = value;
      }
    }
    function reset() {
      current.clear();
      for (const key of usedKeys)
        setRefs(key, false);
    }
    function updateRefs(e2, value) {
      var _a2, _b;
      const key = (_a2 = e2.key) == null ? void 0 : _a2.toLowerCase();
      const code = (_b = e2.code) == null ? void 0 : _b.toLowerCase();
      const values = [code, key].filter(Boolean);
      if (key) {
        if (value)
          current.add(key);
        else
          current.delete(key);
      }
      for (const key2 of values) {
        usedKeys.add(key2);
        setRefs(key2, value);
      }
      if (key === "meta" && !value) {
        metaDeps.forEach((key2) => {
          current.delete(key2);
          setRefs(key2, false);
        });
        metaDeps.clear();
      } else if (typeof e2.getModifierState === "function" && e2.getModifierState("Meta") && value) {
        [...current, ...values].forEach((key2) => metaDeps.add(key2));
      }
    }
    useEventListener(target, "keydown", (e2) => {
      updateRefs(e2, true);
      return onEventFired(e2);
    }, { passive });
    useEventListener(target, "keyup", (e2) => {
      updateRefs(e2, false);
      return onEventFired(e2);
    }, { passive });
    useEventListener("blur", reset, { passive: true });
    useEventListener("focus", reset, { passive: true });
    const proxy = new Proxy(refs, {
      get(target2, prop, rec) {
        if (typeof prop !== "string")
          return Reflect.get(target2, prop, rec);
        prop = prop.toLowerCase();
        if (prop in aliasMap)
          prop = aliasMap[prop];
        if (!(prop in refs)) {
          if (/[+_-]/.test(prop)) {
            const keys = prop.split(/[+_-]/g).map((i) => i.trim());
            refs[prop] = (0, lib_exports.computed)(() => keys.every((key) => (0, lib_exports.unref)(proxy[key])));
          } else {
            refs[prop] = (0, lib_exports.ref)(false);
          }
        }
        const r = Reflect.get(target2, prop, rec);
        return useReactive ? (0, lib_exports.unref)(r) : r;
      }
    });
    return proxy;
  }
  var SwipeDirection;
  (function(SwipeDirection2) {
    SwipeDirection2["UP"] = "UP";
    SwipeDirection2["RIGHT"] = "RIGHT";
    SwipeDirection2["DOWN"] = "DOWN";
    SwipeDirection2["LEFT"] = "LEFT";
    SwipeDirection2["NONE"] = "NONE";
  })(SwipeDirection || (SwipeDirection = {}));
  var __defProp2 = Object.defineProperty;
  var __getOwnPropSymbols2 = Object.getOwnPropertySymbols;
  var __hasOwnProp2 = Object.prototype.hasOwnProperty;
  var __propIsEnum2 = Object.prototype.propertyIsEnumerable;
  var __defNormalProp2 = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues2 = (a2, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp2.call(b, prop))
        __defNormalProp2(a2, prop, b[prop]);
    if (__getOwnPropSymbols2)
      for (var prop of __getOwnPropSymbols2(b)) {
        if (__propIsEnum2.call(b, prop))
          __defNormalProp2(a2, prop, b[prop]);
      }
    return a2;
  };
  var _TransitionPresets = {
    easeInSine: [0.12, 0, 0.39, 0],
    easeOutSine: [0.61, 1, 0.88, 1],
    easeInOutSine: [0.37, 0, 0.63, 1],
    easeInQuad: [0.11, 0, 0.5, 0],
    easeOutQuad: [0.5, 1, 0.89, 1],
    easeInOutQuad: [0.45, 0, 0.55, 1],
    easeInCubic: [0.32, 0, 0.67, 0],
    easeOutCubic: [0.33, 1, 0.68, 1],
    easeInOutCubic: [0.65, 0, 0.35, 1],
    easeInQuart: [0.5, 0, 0.75, 0],
    easeOutQuart: [0.25, 1, 0.5, 1],
    easeInOutQuart: [0.76, 0, 0.24, 1],
    easeInQuint: [0.64, 0, 0.78, 0],
    easeOutQuint: [0.22, 1, 0.36, 1],
    easeInOutQuint: [0.83, 0, 0.17, 1],
    easeInExpo: [0.7, 0, 0.84, 0],
    easeOutExpo: [0.16, 1, 0.3, 1],
    easeInOutExpo: [0.87, 0, 0.13, 1],
    easeInCirc: [0.55, 0, 1, 0.45],
    easeOutCirc: [0, 0.55, 0.45, 1],
    easeInOutCirc: [0.85, 0, 0.15, 1],
    easeInBack: [0.36, 0, 0.66, -0.56],
    easeOutBack: [0.34, 1.56, 0.64, 1],
    easeInOutBack: [0.68, -0.6, 0.32, 1.6]
  };
  var TransitionPresets = __spreadValues2({
    linear: identity
  }, _TransitionPresets);

  // frappe/public/js/workflow_builder/store.js
  var useStore = defineStore("workflow-builder-store", () => {
    let workflow_name = (0, vue_runtime_esm_bundler_exports.ref)(null);
    let workflow_doc = (0, vue_runtime_esm_bundler_exports.ref)(null);
    let workflow_doc_fields = (0, vue_runtime_esm_bundler_exports.ref)([]);
    let workflow = (0, vue_runtime_esm_bundler_exports.ref)({ elements: [], selected: null });
    let workflowfields = (0, vue_runtime_esm_bundler_exports.ref)([]);
    let statefields = (0, vue_runtime_esm_bundler_exports.ref)([]);
    let transitionfields = (0, vue_runtime_esm_bundler_exports.ref)([]);
    let ref_history = (0, vue_runtime_esm_bundler_exports.ref)(null);
    async function fetch() {
      await frappe.model.clear_doc("Workflow", workflow_name.value);
      await frappe.model.with_doc("Workflow", workflow_name.value);
      workflow_doc.value = frappe.get_doc("Workflow", workflow_name.value);
      await frappe.model.with_doctype(workflow_doc.value.document_type);
      if (!workflowfields.value.length) {
        await frappe.model.with_doctype("Workflow");
        workflowfields.value = frappe.get_meta("Workflow").fields;
      }
      if (!statefields.value.length) {
        await frappe.model.with_doctype("Workflow Document State");
        statefields.value = frappe.get_meta("Workflow Document State").fields;
      }
      if (!transitionfields.value.length) {
        await frappe.model.with_doctype("Workflow Transition");
        transitionfields.value = frappe.get_meta("Workflow Transition").fields;
      }
      if (!workflow_doc_fields.value.length) {
        let doc_type = workflow_doc.value.document_type;
        await frappe.model.with_doctype(doc_type);
        workflow_doc_fields.value = frappe.meta.get_docfields(doc_type, null, {
          fieldtype: ["not in", frappe.model.no_value_type]
        }).sort((a2, b) => {
          if (a2.label && b.label) {
            return a2.label.localeCompare(b.label);
          }
        }).map((df) => ({
          label: `${df.label || __("No Label")} (${df.fieldtype})`,
          value: df.fieldname
        }));
      }
      const workflow_data = workflow_doc.value.workflow_data && typeof workflow_doc.value.workflow_data == "string" && JSON.parse(workflow_doc.value.workflow_data) || [];
      workflow.value.elements = get_workflow_elements(workflow_doc.value, workflow_data);
      setup_undo_redo();
      setup_breadcrumbs();
    }
    function reset_changes() {
      fetch();
    }
    async function save_changes() {
      frappe.dom.freeze(__("Saving..."));
      try {
        let doc = workflow_doc.value;
        doc.states = get_updated_states();
        doc.transitions = get_updated_transitions();
        validate_workflow(doc);
        const workflow_data = clean_workflow_data();
        doc.workflow_data = JSON.stringify(workflow_data);
        await frappe.call("frappe.client.save", { doc });
        frappe.toast("Workflow updated successfully");
        fetch();
      } catch (e2) {
        console.error(e2);
      } finally {
        frappe.dom.unfreeze();
      }
    }
    function validate_workflow(doc) {
      if (doc.is_active && (!doc.states.length || !doc.transitions.length)) {
        let message = "Workflow must have atleast one state and transition";
        frappe.throw({
          message: __(message),
          title: __("Missing Values Required"),
          indicator: "orange"
        });
      }
    }
    function clean_workflow_data() {
      return workflow.value.elements.map((el) => {
        const _a2 = el, {
          selected,
          dragging,
          resizing,
          data,
          events,
          initialized,
          sourceNode,
          targetNode
        } = _a2, obj = __objRest(_a2, [
          "selected",
          "dragging",
          "resizing",
          "data",
          "events",
          "initialized",
          "sourceNode",
          "targetNode"
        ]);
        if (el.type == "action") {
          obj.data = {
            from_id: data.from_id,
            to_id: data.to_id
          };
        }
        return obj;
      });
    }
    function setup_breadcrumbs() {
      let breadcrumbs = `
			<li><a href="/app/workflow">${__("Workflow")}</a></li>
			<li><a href="/app/workflow/${workflow_name.value}">${__(workflow_name.value)}</a></li>
			<li class="disabled"><a href="#">${__("Workflow Builder")}</a></li>
		`;
      frappe.breadcrumbs.clear();
      frappe.breadcrumbs.$breadcrumbs.append(breadcrumbs);
    }
    function get_state_df(data) {
      let doc_status_map = {
        Draft: 0,
        Submitted: 1,
        Cancelled: 2
      };
      data.doc_status = doc_status_map[data.doc_status];
      return data;
    }
    function get_updated_states() {
      let states = [];
      workflow.value.elements.forEach((element) => {
        if (element.type == "state") {
          element.data.workflow_builder_id = element.id;
          states.push(get_state_df(element.data));
        }
      });
      return states;
    }
    function get_transition_df(data) {
      return data;
    }
    function get_updated_transitions() {
      let transitions = [];
      let actions = [];
      workflow.value.elements.forEach((element) => {
        if (element.type == "action") {
          element.data.workflow_builder_id = element.id;
          actions.push(element);
        }
      });
      actions.forEach((action) => {
        let states = workflow.value.elements.filter((e2) => e2.type == "state");
        let state = states.find((state2) => state2.data.state == action.data.from);
        let next_state = states.find((state2) => state2.data.state == action.data.to);
        let error = validate_transitions(state.data, next_state.data);
        if (error) {
          frappe.throw({
            message: error,
            title: __("Invalid Transition")
          });
        }
        transitions.push(
          get_transition_df(__spreadProps(__spreadValues({}, action.data), {
            state: action.data.from,
            next_state: action.data.to
          }))
        );
      });
      return transitions;
    }
    let undo_redo_keyboard_event = () => onKeyDown(true, (e2) => {
      if (!ref_history.value)
        return;
      if (e2.ctrlKey || e2.metaKey) {
        if (e2.key === "z" && !e2.shiftKey && ref_history.value.canUndo) {
          ref_history.value.undo();
        } else if (e2.key === "z" && e2.shiftKey && ref_history.value.canRedo) {
          ref_history.value.redo();
        }
      }
    });
    function setup_undo_redo() {
      ref_history.value = useManualRefHistory(workflow, { clone: true });
      undo_redo_keyboard_event();
    }
    return {
      workflow_name,
      workflow_doc,
      workflow_doc_fields,
      workflow,
      workflowfields,
      statefields,
      transitionfields,
      ref_history,
      fetch,
      reset_changes,
      save_changes,
      setup_undo_redo
    };
  });

  // node_modules/@vue-flow/core/dist/vue-flow-core.mjs
  function tryOnScopeDispose2(fn) {
    if ((0, vue_runtime_esm_bundler_exports.getCurrentScope)()) {
      (0, vue_runtime_esm_bundler_exports.onScopeDispose)(fn);
      return true;
    }
    return false;
  }
  function toValue(r) {
    return typeof r === "function" ? r() : (0, vue_runtime_esm_bundler_exports.unref)(r);
  }
  var isClient2 = typeof window !== "undefined" && typeof document !== "undefined";
  var isDef$1 = (val) => typeof val !== "undefined";
  var toString = Object.prototype.toString;
  var isObject2 = (val) => toString.call(val) === "[object Object]";
  var noop$2 = () => {
  };
  function createFilterWrapper2(filter2, fn) {
    function wrapper(...args) {
      return new Promise((resolve, reject) => {
        Promise.resolve(filter2(() => fn.apply(this, args), { fn, thisArg: this, args })).then(resolve).catch(reject);
      });
    }
    return wrapper;
  }
  var bypassFilter2 = (invoke) => {
    return invoke();
  };
  function pausableFilter2(extendFilter = bypassFilter2) {
    const isActive = (0, vue_runtime_esm_bundler_exports.ref)(true);
    function pause() {
      isActive.value = false;
    }
    function resume() {
      isActive.value = true;
    }
    const eventFilter = (...args) => {
      if (isActive.value)
        extendFilter(...args);
    };
    return { isActive: (0, vue_runtime_esm_bundler_exports.readonly)(isActive), pause, resume, eventFilter };
  }
  function promiseTimeout2(ms, throwOnTimeout = false, reason = "Timeout") {
    return new Promise((resolve, reject) => {
      if (throwOnTimeout)
        setTimeout(() => reject(reason), ms);
      else
        setTimeout(resolve, ms);
    });
  }
  function toRef3(...args) {
    if (args.length !== 1)
      return (0, vue_runtime_esm_bundler_exports.toRef)(...args);
    const r = args[0];
    return typeof r === "function" ? (0, vue_runtime_esm_bundler_exports.readonly)((0, vue_runtime_esm_bundler_exports.customRef)(() => ({ get: r, set: noop$2 }))) : (0, vue_runtime_esm_bundler_exports.ref)(r);
  }
  function watchWithFilter2(source, cb, options = {}) {
    const _a2 = options, {
      eventFilter = bypassFilter2
    } = _a2, watchOptions = __objRest(_a2, [
      "eventFilter"
    ]);
    return (0, vue_runtime_esm_bundler_exports.watch)(
      source,
      createFilterWrapper2(
        eventFilter,
        cb
      ),
      watchOptions
    );
  }
  function watchPausable2(source, cb, options = {}) {
    const _a2 = options, {
      eventFilter: filter2
    } = _a2, watchOptions = __objRest(_a2, [
      "eventFilter"
    ]);
    const { eventFilter, pause, resume, isActive } = pausableFilter2(filter2);
    const stop = watchWithFilter2(
      source,
      cb,
      __spreadProps(__spreadValues({}, watchOptions), {
        eventFilter
      })
    );
    return { stop, pause, resume, isActive };
  }
  function toRefs3(objectRef, options = {}) {
    if (!(0, vue_runtime_esm_bundler_exports.isRef)(objectRef))
      return (0, vue_runtime_esm_bundler_exports.toRefs)(objectRef);
    const result = Array.isArray(objectRef.value) ? Array.from({ length: objectRef.value.length }) : {};
    for (const key in objectRef.value) {
      result[key] = (0, vue_runtime_esm_bundler_exports.customRef)(() => ({
        get() {
          return objectRef.value[key];
        },
        set(v) {
          var _a2;
          const replaceRef = (_a2 = toValue(options.replaceRef)) != null ? _a2 : true;
          if (replaceRef) {
            if (Array.isArray(objectRef.value)) {
              const copy = [...objectRef.value];
              copy[key] = v;
              objectRef.value = copy;
            } else {
              const newObject = __spreadProps(__spreadValues({}, objectRef.value), { [key]: v });
              Object.setPrototypeOf(newObject, Object.getPrototypeOf(objectRef.value));
              objectRef.value = newObject;
            }
          } else {
            objectRef.value[key] = v;
          }
        }
      }));
    }
    return result;
  }
  function createUntil(r, isNot = false) {
    function toMatch(condition, { flush = "sync", deep = false, timeout: timeout2, throwOnTimeout } = {}) {
      let stop = null;
      const watcher = new Promise((resolve) => {
        stop = (0, vue_runtime_esm_bundler_exports.watch)(
          r,
          (v) => {
            if (condition(v) !== isNot) {
              stop == null ? void 0 : stop();
              resolve(v);
            }
          },
          {
            flush,
            deep,
            immediate: true
          }
        );
      });
      const promises = [watcher];
      if (timeout2 != null) {
        promises.push(
          promiseTimeout2(timeout2, throwOnTimeout).then(() => toValue(r)).finally(() => stop == null ? void 0 : stop())
        );
      }
      return Promise.race(promises);
    }
    function toBe(value, options) {
      if (!(0, vue_runtime_esm_bundler_exports.isRef)(value))
        return toMatch((v) => v === value, options);
      const { flush = "sync", deep = false, timeout: timeout2, throwOnTimeout } = options != null ? options : {};
      let stop = null;
      const watcher = new Promise((resolve) => {
        stop = (0, vue_runtime_esm_bundler_exports.watch)(
          [r, value],
          ([v1, v2]) => {
            if (isNot !== (v1 === v2)) {
              stop == null ? void 0 : stop();
              resolve(v1);
            }
          },
          {
            flush,
            deep,
            immediate: true
          }
        );
      });
      const promises = [watcher];
      if (timeout2 != null) {
        promises.push(
          promiseTimeout2(timeout2, throwOnTimeout).then(() => toValue(r)).finally(() => {
            stop == null ? void 0 : stop();
            return toValue(r);
          })
        );
      }
      return Promise.race(promises);
    }
    function toBeTruthy(options) {
      return toMatch((v) => Boolean(v), options);
    }
    function toBeNull(options) {
      return toBe(null, options);
    }
    function toBeUndefined(options) {
      return toBe(void 0, options);
    }
    function toBeNaN(options) {
      return toMatch(Number.isNaN, options);
    }
    function toContains(value, options) {
      return toMatch((v) => {
        const array2 = Array.from(v);
        return array2.includes(value) || array2.includes(toValue(value));
      }, options);
    }
    function changed(options) {
      return changedTimes(1, options);
    }
    function changedTimes(n = 1, options) {
      let count = -1;
      return toMatch(() => {
        count += 1;
        return count >= n;
      }, options);
    }
    if (Array.isArray(toValue(r))) {
      const instance = {
        toMatch,
        toContains,
        changed,
        changedTimes,
        get not() {
          return createUntil(r, !isNot);
        }
      };
      return instance;
    } else {
      const instance = {
        toMatch,
        toBe,
        toBeTruthy,
        toBeNull,
        toBeNaN,
        toBeUndefined,
        changed,
        changedTimes,
        get not() {
          return createUntil(r, !isNot);
        }
      };
      return instance;
    }
  }
  function until2(r) {
    return createUntil(r);
  }
  function unrefElement2(elRef) {
    var _a2;
    const plain = toValue(elRef);
    return (_a2 = plain == null ? void 0 : plain.$el) != null ? _a2 : plain;
  }
  var defaultWindow2 = isClient2 ? window : void 0;
  function useEventListener2(...args) {
    let target;
    let events;
    let listeners;
    let options;
    if (typeof args[0] === "string" || Array.isArray(args[0])) {
      [events, listeners, options] = args;
      target = defaultWindow2;
    } else {
      [target, events, listeners, options] = args;
    }
    if (!target)
      return noop$2;
    if (!Array.isArray(events))
      events = [events];
    if (!Array.isArray(listeners))
      listeners = [listeners];
    const cleanups = [];
    const cleanup = () => {
      cleanups.forEach((fn) => fn());
      cleanups.length = 0;
    };
    const register = (el, event, listener, options2) => {
      el.addEventListener(event, listener, options2);
      return () => el.removeEventListener(event, listener, options2);
    };
    const stopWatch = (0, vue_runtime_esm_bundler_exports.watch)(
      () => [unrefElement2(target), toValue(options)],
      ([el, options2]) => {
        cleanup();
        if (!el)
          return;
        const optionsClone = isObject2(options2) ? __spreadValues({}, options2) : options2;
        cleanups.push(
          ...events.flatMap((event) => {
            return listeners.map((listener) => register(el, event, listener, optionsClone));
          })
        );
      },
      { immediate: true, flush: "post" }
    );
    const stop = () => {
      stopWatch();
      cleanup();
    };
    tryOnScopeDispose2(stop);
    return stop;
  }
  function createKeyPredicate$1(keyFilter) {
    if (typeof keyFilter === "function")
      return keyFilter;
    else if (typeof keyFilter === "string")
      return (event) => event.key === keyFilter;
    else if (Array.isArray(keyFilter))
      return (event) => keyFilter.includes(event.key);
    return () => true;
  }
  function onKeyStroke2(...args) {
    let key;
    let handler;
    let options = {};
    if (args.length === 3) {
      key = args[0];
      handler = args[1];
      options = args[2];
    } else if (args.length === 2) {
      if (typeof args[1] === "object") {
        key = true;
        handler = args[0];
        options = args[1];
      } else {
        key = args[0];
        handler = args[1];
      }
    } else {
      key = true;
      handler = args[0];
    }
    const {
      target = defaultWindow2,
      eventName = "keydown",
      passive = false,
      dedupe = false
    } = options;
    const predicate = createKeyPredicate$1(key);
    const listener = (e2) => {
      if (e2.repeat && toValue(dedupe))
        return;
      if (predicate(e2))
        handler(e2);
    };
    return useEventListener2(target, eventName, listener, passive);
  }
  function useMounted() {
    const isMounted = (0, vue_runtime_esm_bundler_exports.ref)(false);
    if ((0, vue_runtime_esm_bundler_exports.getCurrentInstance)()) {
      (0, vue_runtime_esm_bundler_exports.onMounted)(() => {
        isMounted.value = true;
      });
    }
    return isMounted;
  }
  function useSupported(callback) {
    const isMounted = useMounted();
    return (0, vue_runtime_esm_bundler_exports.computed)(() => {
      isMounted.value;
      return Boolean(callback());
    });
  }
  function cloneFnJSON2(source) {
    return JSON.parse(JSON.stringify(source));
  }
  function useResizeObserver(target, callback, options = {}) {
    const _a2 = options, { window: window2 = defaultWindow2 } = _a2, observerOptions = __objRest(_a2, ["window"]);
    let observer;
    const isSupported = useSupported(() => window2 && "ResizeObserver" in window2);
    const cleanup = () => {
      if (observer) {
        observer.disconnect();
        observer = void 0;
      }
    };
    const targets = (0, vue_runtime_esm_bundler_exports.computed)(() => Array.isArray(target) ? target.map((el) => unrefElement2(el)) : [unrefElement2(target)]);
    const stopWatch = (0, vue_runtime_esm_bundler_exports.watch)(
      targets,
      (els) => {
        cleanup();
        if (isSupported.value && window2) {
          observer = new ResizeObserver(callback);
          for (const _el of els)
            _el && observer.observe(_el, observerOptions);
        }
      },
      { immediate: true, flush: "post", deep: true }
    );
    const stop = () => {
      cleanup();
      stopWatch();
    };
    tryOnScopeDispose2(stop);
    return {
      isSupported,
      stop
    };
  }
  function useVModel(props, key, emit, options = {}) {
    var _a2, _b, _c;
    const {
      clone = false,
      passive = false,
      eventName,
      deep = false,
      defaultValue,
      shouldEmit
    } = options;
    const vm = (0, vue_runtime_esm_bundler_exports.getCurrentInstance)();
    const _emit = emit || (vm == null ? void 0 : vm.emit) || ((_a2 = vm == null ? void 0 : vm.$emit) == null ? void 0 : _a2.bind(vm)) || ((_c = (_b = vm == null ? void 0 : vm.proxy) == null ? void 0 : _b.$emit) == null ? void 0 : _c.bind(vm == null ? void 0 : vm.proxy));
    let event = eventName;
    if (!key) {
      {
        key = "modelValue";
      }
    }
    event = event || `update:${key.toString()}`;
    const cloneFn = (val) => !clone ? val : typeof clone === "function" ? clone(val) : cloneFnJSON2(val);
    const getValue = () => isDef$1(props[key]) ? cloneFn(props[key]) : defaultValue;
    const triggerEmit = (value) => {
      if (shouldEmit) {
        if (shouldEmit(value))
          _emit(event, value);
      } else {
        _emit(event, value);
      }
    };
    if (passive) {
      const initialValue = getValue();
      const proxy = (0, vue_runtime_esm_bundler_exports.ref)(initialValue);
      let isUpdating = false;
      (0, vue_runtime_esm_bundler_exports.watch)(
        () => props[key],
        (v) => {
          if (!isUpdating) {
            isUpdating = true;
            proxy.value = cloneFn(v);
            (0, vue_runtime_esm_bundler_exports.nextTick)(() => isUpdating = false);
          }
        }
      );
      (0, vue_runtime_esm_bundler_exports.watch)(
        proxy,
        (v) => {
          if (!isUpdating && (v !== props[key] || deep))
            triggerEmit(v);
        },
        { deep }
      );
      return proxy;
    } else {
      return (0, vue_runtime_esm_bundler_exports.computed)({
        get() {
          return getValue();
        },
        set(value) {
          triggerEmit(value);
        }
      });
    }
  }
  var noop$1 = { value: () => {
  } };
  function dispatch() {
    for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
      if (!(t = arguments[i] + "") || t in _ || /[\s.]/.test(t))
        throw new Error("illegal type: " + t);
      _[t] = [];
    }
    return new Dispatch(_);
  }
  function Dispatch(_) {
    this._ = _;
  }
  function parseTypenames$1(typenames, types) {
    return typenames.trim().split(/^|\s+/).map(function(t) {
      var name = "", i = t.indexOf(".");
      if (i >= 0)
        name = t.slice(i + 1), t = t.slice(0, i);
      if (t && !types.hasOwnProperty(t))
        throw new Error("unknown type: " + t);
      return { type: t, name };
    });
  }
  Dispatch.prototype = dispatch.prototype = {
    constructor: Dispatch,
    on: function(typename, callback) {
      var _ = this._, T = parseTypenames$1(typename + "", _), t, i = -1, n = T.length;
      if (arguments.length < 2) {
        while (++i < n)
          if ((t = (typename = T[i]).type) && (t = get$1(_[t], typename.name)))
            return t;
        return;
      }
      if (callback != null && typeof callback !== "function")
        throw new Error("invalid callback: " + callback);
      while (++i < n) {
        if (t = (typename = T[i]).type)
          _[t] = set$1(_[t], typename.name, callback);
        else if (callback == null)
          for (t in _)
            _[t] = set$1(_[t], typename.name, null);
      }
      return this;
    },
    copy: function() {
      var copy = {}, _ = this._;
      for (var t in _)
        copy[t] = _[t].slice();
      return new Dispatch(copy);
    },
    call: function(type, that) {
      if ((n = arguments.length - 2) > 0)
        for (var args = new Array(n), i = 0, n, t; i < n; ++i)
          args[i] = arguments[i + 2];
      if (!this._.hasOwnProperty(type))
        throw new Error("unknown type: " + type);
      for (t = this._[type], i = 0, n = t.length; i < n; ++i)
        t[i].value.apply(that, args);
    },
    apply: function(type, that, args) {
      if (!this._.hasOwnProperty(type))
        throw new Error("unknown type: " + type);
      for (var t = this._[type], i = 0, n = t.length; i < n; ++i)
        t[i].value.apply(that, args);
    }
  };
  function get$1(type, name) {
    for (var i = 0, n = type.length, c; i < n; ++i) {
      if ((c = type[i]).name === name) {
        return c.value;
      }
    }
  }
  function set$1(type, name, callback) {
    for (var i = 0, n = type.length; i < n; ++i) {
      if (type[i].name === name) {
        type[i] = noop$1, type = type.slice(0, i).concat(type.slice(i + 1));
        break;
      }
    }
    if (callback != null)
      type.push({ name, value: callback });
    return type;
  }
  var xhtml = "http://www.w3.org/1999/xhtml";
  var namespaces = {
    svg: "http://www.w3.org/2000/svg",
    xhtml,
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
  };
  function namespace(name) {
    var prefix = name += "", i = prefix.indexOf(":");
    if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns")
      name = name.slice(i + 1);
    return namespaces.hasOwnProperty(prefix) ? { space: namespaces[prefix], local: name } : name;
  }
  function creatorInherit(name) {
    return function() {
      var document2 = this.ownerDocument, uri = this.namespaceURI;
      return uri === xhtml && document2.documentElement.namespaceURI === xhtml ? document2.createElement(name) : document2.createElementNS(uri, name);
    };
  }
  function creatorFixed(fullname) {
    return function() {
      return this.ownerDocument.createElementNS(fullname.space, fullname.local);
    };
  }
  function creator(name) {
    var fullname = namespace(name);
    return (fullname.local ? creatorFixed : creatorInherit)(fullname);
  }
  function none() {
  }
  function selector(selector2) {
    return selector2 == null ? none : function() {
      return this.querySelector(selector2);
    };
  }
  function selection_select(select2) {
    if (typeof select2 !== "function")
      select2 = selector(select2);
    for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
        if ((node = group[i]) && (subnode = select2.call(node, node.__data__, i, group))) {
          if ("__data__" in node)
            subnode.__data__ = node.__data__;
          subgroup[i] = subnode;
        }
      }
    }
    return new Selection$1(subgroups, this._parents);
  }
  function array(x2) {
    return x2 == null ? [] : Array.isArray(x2) ? x2 : Array.from(x2);
  }
  function empty() {
    return [];
  }
  function selectorAll(selector2) {
    return selector2 == null ? empty : function() {
      return this.querySelectorAll(selector2);
    };
  }
  function arrayAll(select2) {
    return function() {
      return array(select2.apply(this, arguments));
    };
  }
  function selection_selectAll(select2) {
    if (typeof select2 === "function")
      select2 = arrayAll(select2);
    else
      select2 = selectorAll(select2);
    for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
        if (node = group[i]) {
          subgroups.push(select2.call(node, node.__data__, i, group));
          parents.push(node);
        }
      }
    }
    return new Selection$1(subgroups, parents);
  }
  function matcher(selector2) {
    return function() {
      return this.matches(selector2);
    };
  }
  function childMatcher(selector2) {
    return function(node) {
      return node.matches(selector2);
    };
  }
  var find = Array.prototype.find;
  function childFind(match) {
    return function() {
      return find.call(this.children, match);
    };
  }
  function childFirst() {
    return this.firstElementChild;
  }
  function selection_selectChild(match) {
    return this.select(match == null ? childFirst : childFind(typeof match === "function" ? match : childMatcher(match)));
  }
  var filter = Array.prototype.filter;
  function children() {
    return Array.from(this.children);
  }
  function childrenFilter(match) {
    return function() {
      return filter.call(this.children, match);
    };
  }
  function selection_selectChildren(match) {
    return this.selectAll(match == null ? children : childrenFilter(typeof match === "function" ? match : childMatcher(match)));
  }
  function selection_filter(match) {
    if (typeof match !== "function")
      match = matcher(match);
    for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
        if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
          subgroup.push(node);
        }
      }
    }
    return new Selection$1(subgroups, this._parents);
  }
  function sparse(update) {
    return new Array(update.length);
  }
  function selection_enter() {
    return new Selection$1(this._enter || this._groups.map(sparse), this._parents);
  }
  function EnterNode(parent, datum2) {
    this.ownerDocument = parent.ownerDocument;
    this.namespaceURI = parent.namespaceURI;
    this._next = null;
    this._parent = parent;
    this.__data__ = datum2;
  }
  EnterNode.prototype = {
    constructor: EnterNode,
    appendChild: function(child) {
      return this._parent.insertBefore(child, this._next);
    },
    insertBefore: function(child, next) {
      return this._parent.insertBefore(child, next);
    },
    querySelector: function(selector2) {
      return this._parent.querySelector(selector2);
    },
    querySelectorAll: function(selector2) {
      return this._parent.querySelectorAll(selector2);
    }
  };
  function constant$3(x2) {
    return function() {
      return x2;
    };
  }
  function bindIndex(parent, group, enter, update, exit, data) {
    var i = 0, node, groupLength = group.length, dataLength = data.length;
    for (; i < dataLength; ++i) {
      if (node = group[i]) {
        node.__data__ = data[i];
        update[i] = node;
      } else {
        enter[i] = new EnterNode(parent, data[i]);
      }
    }
    for (; i < groupLength; ++i) {
      if (node = group[i]) {
        exit[i] = node;
      }
    }
  }
  function bindKey(parent, group, enter, update, exit, data, key) {
    var i, node, nodeByKeyValue = /* @__PURE__ */ new Map(), groupLength = group.length, dataLength = data.length, keyValues = new Array(groupLength), keyValue;
    for (i = 0; i < groupLength; ++i) {
      if (node = group[i]) {
        keyValues[i] = keyValue = key.call(node, node.__data__, i, group) + "";
        if (nodeByKeyValue.has(keyValue)) {
          exit[i] = node;
        } else {
          nodeByKeyValue.set(keyValue, node);
        }
      }
    }
    for (i = 0; i < dataLength; ++i) {
      keyValue = key.call(parent, data[i], i, data) + "";
      if (node = nodeByKeyValue.get(keyValue)) {
        update[i] = node;
        node.__data__ = data[i];
        nodeByKeyValue.delete(keyValue);
      } else {
        enter[i] = new EnterNode(parent, data[i]);
      }
    }
    for (i = 0; i < groupLength; ++i) {
      if ((node = group[i]) && nodeByKeyValue.get(keyValues[i]) === node) {
        exit[i] = node;
      }
    }
  }
  function datum(node) {
    return node.__data__;
  }
  function selection_data(value, key) {
    if (!arguments.length)
      return Array.from(this, datum);
    var bind = key ? bindKey : bindIndex, parents = this._parents, groups = this._groups;
    if (typeof value !== "function")
      value = constant$3(value);
    for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
      var parent = parents[j], group = groups[j], groupLength = group.length, data = arraylike(value.call(parent, parent && parent.__data__, j, parents)), dataLength = data.length, enterGroup = enter[j] = new Array(dataLength), updateGroup = update[j] = new Array(dataLength), exitGroup = exit[j] = new Array(groupLength);
      bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);
      for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
        if (previous = enterGroup[i0]) {
          if (i0 >= i1)
            i1 = i0 + 1;
          while (!(next = updateGroup[i1]) && ++i1 < dataLength)
            ;
          previous._next = next || null;
        }
      }
    }
    update = new Selection$1(update, parents);
    update._enter = enter;
    update._exit = exit;
    return update;
  }
  function arraylike(data) {
    return typeof data === "object" && "length" in data ? data : Array.from(data);
  }
  function selection_exit() {
    return new Selection$1(this._exit || this._groups.map(sparse), this._parents);
  }
  function selection_join(onenter, onupdate, onexit) {
    var enter = this.enter(), update = this, exit = this.exit();
    if (typeof onenter === "function") {
      enter = onenter(enter);
      if (enter)
        enter = enter.selection();
    } else {
      enter = enter.append(onenter + "");
    }
    if (onupdate != null) {
      update = onupdate(update);
      if (update)
        update = update.selection();
    }
    if (onexit == null)
      exit.remove();
    else
      onexit(exit);
    return enter && update ? enter.merge(update).order() : update;
  }
  function selection_merge(context) {
    var selection2 = context.selection ? context.selection() : context;
    for (var groups0 = this._groups, groups1 = selection2._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
      for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
        if (node = group0[i] || group1[i]) {
          merge[i] = node;
        }
      }
    }
    for (; j < m0; ++j) {
      merges[j] = groups0[j];
    }
    return new Selection$1(merges, this._parents);
  }
  function selection_order() {
    for (var groups = this._groups, j = -1, m = groups.length; ++j < m; ) {
      for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0; ) {
        if (node = group[i]) {
          if (next && node.compareDocumentPosition(next) ^ 4)
            next.parentNode.insertBefore(node, next);
          next = node;
        }
      }
    }
    return this;
  }
  function selection_sort(compare) {
    if (!compare)
      compare = ascending;
    function compareNode(a2, b) {
      return a2 && b ? compare(a2.__data__, b.__data__) : !a2 - !b;
    }
    for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
        if (node = group[i]) {
          sortgroup[i] = node;
        }
      }
      sortgroup.sort(compareNode);
    }
    return new Selection$1(sortgroups, this._parents).order();
  }
  function ascending(a2, b) {
    return a2 < b ? -1 : a2 > b ? 1 : a2 >= b ? 0 : NaN;
  }
  function selection_call() {
    var callback = arguments[0];
    arguments[0] = this;
    callback.apply(null, arguments);
    return this;
  }
  function selection_nodes() {
    return Array.from(this);
  }
  function selection_node() {
    for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
      for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
        var node = group[i];
        if (node)
          return node;
      }
    }
    return null;
  }
  function selection_size() {
    let size = 0;
    for (const node of this)
      ++size;
    return size;
  }
  function selection_empty() {
    return !this.node();
  }
  function selection_each(callback) {
    for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
      for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
        if (node = group[i])
          callback.call(node, node.__data__, i, group);
      }
    }
    return this;
  }
  function attrRemove$1(name) {
    return function() {
      this.removeAttribute(name);
    };
  }
  function attrRemoveNS$1(fullname) {
    return function() {
      this.removeAttributeNS(fullname.space, fullname.local);
    };
  }
  function attrConstant$1(name, value) {
    return function() {
      this.setAttribute(name, value);
    };
  }
  function attrConstantNS$1(fullname, value) {
    return function() {
      this.setAttributeNS(fullname.space, fullname.local, value);
    };
  }
  function attrFunction$1(name, value) {
    return function() {
      var v = value.apply(this, arguments);
      if (v == null)
        this.removeAttribute(name);
      else
        this.setAttribute(name, v);
    };
  }
  function attrFunctionNS$1(fullname, value) {
    return function() {
      var v = value.apply(this, arguments);
      if (v == null)
        this.removeAttributeNS(fullname.space, fullname.local);
      else
        this.setAttributeNS(fullname.space, fullname.local, v);
    };
  }
  function selection_attr(name, value) {
    var fullname = namespace(name);
    if (arguments.length < 2) {
      var node = this.node();
      return fullname.local ? node.getAttributeNS(fullname.space, fullname.local) : node.getAttribute(fullname);
    }
    return this.each((value == null ? fullname.local ? attrRemoveNS$1 : attrRemove$1 : typeof value === "function" ? fullname.local ? attrFunctionNS$1 : attrFunction$1 : fullname.local ? attrConstantNS$1 : attrConstant$1)(fullname, value));
  }
  function defaultView(node) {
    return node.ownerDocument && node.ownerDocument.defaultView || node.document && node || node.defaultView;
  }
  function styleRemove$1(name) {
    return function() {
      this.style.removeProperty(name);
    };
  }
  function styleConstant$1(name, value, priority) {
    return function() {
      this.style.setProperty(name, value, priority);
    };
  }
  function styleFunction$1(name, value, priority) {
    return function() {
      var v = value.apply(this, arguments);
      if (v == null)
        this.style.removeProperty(name);
      else
        this.style.setProperty(name, v, priority);
    };
  }
  function selection_style(name, value, priority) {
    return arguments.length > 1 ? this.each((value == null ? styleRemove$1 : typeof value === "function" ? styleFunction$1 : styleConstant$1)(name, value, priority == null ? "" : priority)) : styleValue(this.node(), name);
  }
  function styleValue(node, name) {
    return node.style.getPropertyValue(name) || defaultView(node).getComputedStyle(node, null).getPropertyValue(name);
  }
  function propertyRemove(name) {
    return function() {
      delete this[name];
    };
  }
  function propertyConstant(name, value) {
    return function() {
      this[name] = value;
    };
  }
  function propertyFunction(name, value) {
    return function() {
      var v = value.apply(this, arguments);
      if (v == null)
        delete this[name];
      else
        this[name] = v;
    };
  }
  function selection_property(name, value) {
    return arguments.length > 1 ? this.each((value == null ? propertyRemove : typeof value === "function" ? propertyFunction : propertyConstant)(name, value)) : this.node()[name];
  }
  function classArray(string) {
    return string.trim().split(/^|\s+/);
  }
  function classList(node) {
    return node.classList || new ClassList(node);
  }
  function ClassList(node) {
    this._node = node;
    this._names = classArray(node.getAttribute("class") || "");
  }
  ClassList.prototype = {
    add: function(name) {
      var i = this._names.indexOf(name);
      if (i < 0) {
        this._names.push(name);
        this._node.setAttribute("class", this._names.join(" "));
      }
    },
    remove: function(name) {
      var i = this._names.indexOf(name);
      if (i >= 0) {
        this._names.splice(i, 1);
        this._node.setAttribute("class", this._names.join(" "));
      }
    },
    contains: function(name) {
      return this._names.indexOf(name) >= 0;
    }
  };
  function classedAdd(node, names) {
    var list = classList(node), i = -1, n = names.length;
    while (++i < n)
      list.add(names[i]);
  }
  function classedRemove(node, names) {
    var list = classList(node), i = -1, n = names.length;
    while (++i < n)
      list.remove(names[i]);
  }
  function classedTrue(names) {
    return function() {
      classedAdd(this, names);
    };
  }
  function classedFalse(names) {
    return function() {
      classedRemove(this, names);
    };
  }
  function classedFunction(names, value) {
    return function() {
      (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
    };
  }
  function selection_classed(name, value) {
    var names = classArray(name + "");
    if (arguments.length < 2) {
      var list = classList(this.node()), i = -1, n = names.length;
      while (++i < n)
        if (!list.contains(names[i]))
          return false;
      return true;
    }
    return this.each((typeof value === "function" ? classedFunction : value ? classedTrue : classedFalse)(names, value));
  }
  function textRemove() {
    this.textContent = "";
  }
  function textConstant$1(value) {
    return function() {
      this.textContent = value;
    };
  }
  function textFunction$1(value) {
    return function() {
      var v = value.apply(this, arguments);
      this.textContent = v == null ? "" : v;
    };
  }
  function selection_text(value) {
    return arguments.length ? this.each(value == null ? textRemove : (typeof value === "function" ? textFunction$1 : textConstant$1)(value)) : this.node().textContent;
  }
  function htmlRemove() {
    this.innerHTML = "";
  }
  function htmlConstant(value) {
    return function() {
      this.innerHTML = value;
    };
  }
  function htmlFunction(value) {
    return function() {
      var v = value.apply(this, arguments);
      this.innerHTML = v == null ? "" : v;
    };
  }
  function selection_html(value) {
    return arguments.length ? this.each(value == null ? htmlRemove : (typeof value === "function" ? htmlFunction : htmlConstant)(value)) : this.node().innerHTML;
  }
  function raise() {
    if (this.nextSibling)
      this.parentNode.appendChild(this);
  }
  function selection_raise() {
    return this.each(raise);
  }
  function lower() {
    if (this.previousSibling)
      this.parentNode.insertBefore(this, this.parentNode.firstChild);
  }
  function selection_lower() {
    return this.each(lower);
  }
  function selection_append(name) {
    var create2 = typeof name === "function" ? name : creator(name);
    return this.select(function() {
      return this.appendChild(create2.apply(this, arguments));
    });
  }
  function constantNull() {
    return null;
  }
  function selection_insert(name, before) {
    var create2 = typeof name === "function" ? name : creator(name), select2 = before == null ? constantNull : typeof before === "function" ? before : selector(before);
    return this.select(function() {
      return this.insertBefore(create2.apply(this, arguments), select2.apply(this, arguments) || null);
    });
  }
  function remove() {
    var parent = this.parentNode;
    if (parent)
      parent.removeChild(this);
  }
  function selection_remove() {
    return this.each(remove);
  }
  function selection_cloneShallow() {
    var clone = this.cloneNode(false), parent = this.parentNode;
    return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
  }
  function selection_cloneDeep() {
    var clone = this.cloneNode(true), parent = this.parentNode;
    return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
  }
  function selection_clone(deep) {
    return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
  }
  function selection_datum(value) {
    return arguments.length ? this.property("__data__", value) : this.node().__data__;
  }
  function contextListener(listener) {
    return function(event) {
      listener.call(this, event, this.__data__);
    };
  }
  function parseTypenames(typenames) {
    return typenames.trim().split(/^|\s+/).map(function(t) {
      var name = "", i = t.indexOf(".");
      if (i >= 0)
        name = t.slice(i + 1), t = t.slice(0, i);
      return { type: t, name };
    });
  }
  function onRemove(typename) {
    return function() {
      var on = this.__on;
      if (!on)
        return;
      for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
        if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
          this.removeEventListener(o.type, o.listener, o.options);
        } else {
          on[++i] = o;
        }
      }
      if (++i)
        on.length = i;
      else
        delete this.__on;
    };
  }
  function onAdd(typename, value, options) {
    return function() {
      var on = this.__on, o, listener = contextListener(value);
      if (on)
        for (var j = 0, m = on.length; j < m; ++j) {
          if ((o = on[j]).type === typename.type && o.name === typename.name) {
            this.removeEventListener(o.type, o.listener, o.options);
            this.addEventListener(o.type, o.listener = listener, o.options = options);
            o.value = value;
            return;
          }
        }
      this.addEventListener(typename.type, listener, options);
      o = { type: typename.type, name: typename.name, value, listener, options };
      if (!on)
        this.__on = [o];
      else
        on.push(o);
    };
  }
  function selection_on(typename, value, options) {
    var typenames = parseTypenames(typename + ""), i, n = typenames.length, t;
    if (arguments.length < 2) {
      var on = this.node().__on;
      if (on)
        for (var j = 0, m = on.length, o; j < m; ++j) {
          for (i = 0, o = on[j]; i < n; ++i) {
            if ((t = typenames[i]).type === o.type && t.name === o.name) {
              return o.value;
            }
          }
        }
      return;
    }
    on = value ? onAdd : onRemove;
    for (i = 0; i < n; ++i)
      this.each(on(typenames[i], value, options));
    return this;
  }
  function dispatchEvent(node, type, params) {
    var window2 = defaultView(node), event = window2.CustomEvent;
    if (typeof event === "function") {
      event = new event(type, params);
    } else {
      event = window2.document.createEvent("Event");
      if (params)
        event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
      else
        event.initEvent(type, false, false);
    }
    node.dispatchEvent(event);
  }
  function dispatchConstant(type, params) {
    return function() {
      return dispatchEvent(this, type, params);
    };
  }
  function dispatchFunction(type, params) {
    return function() {
      return dispatchEvent(this, type, params.apply(this, arguments));
    };
  }
  function selection_dispatch(type, params) {
    return this.each((typeof params === "function" ? dispatchFunction : dispatchConstant)(type, params));
  }
  function* selection_iterator() {
    for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
      for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
        if (node = group[i])
          yield node;
      }
    }
  }
  var root = [null];
  function Selection$1(groups, parents) {
    this._groups = groups;
    this._parents = parents;
  }
  function selection() {
    return new Selection$1([[document.documentElement]], root);
  }
  function selection_selection() {
    return this;
  }
  Selection$1.prototype = selection.prototype = {
    constructor: Selection$1,
    select: selection_select,
    selectAll: selection_selectAll,
    selectChild: selection_selectChild,
    selectChildren: selection_selectChildren,
    filter: selection_filter,
    data: selection_data,
    enter: selection_enter,
    exit: selection_exit,
    join: selection_join,
    merge: selection_merge,
    selection: selection_selection,
    order: selection_order,
    sort: selection_sort,
    call: selection_call,
    nodes: selection_nodes,
    node: selection_node,
    size: selection_size,
    empty: selection_empty,
    each: selection_each,
    attr: selection_attr,
    style: selection_style,
    property: selection_property,
    classed: selection_classed,
    text: selection_text,
    html: selection_html,
    raise: selection_raise,
    lower: selection_lower,
    append: selection_append,
    insert: selection_insert,
    remove: selection_remove,
    clone: selection_clone,
    datum: selection_datum,
    on: selection_on,
    dispatch: selection_dispatch,
    [Symbol.iterator]: selection_iterator
  };
  function select(selector2) {
    return typeof selector2 === "string" ? new Selection$1([[document.querySelector(selector2)]], [document.documentElement]) : new Selection$1([[selector2]], root);
  }
  function sourceEvent(event) {
    let sourceEvent2;
    while (sourceEvent2 = event.sourceEvent)
      event = sourceEvent2;
    return event;
  }
  function pointer(event, node) {
    event = sourceEvent(event);
    if (node === void 0)
      node = event.currentTarget;
    if (node) {
      var svg = node.ownerSVGElement || node;
      if (svg.createSVGPoint) {
        var point = svg.createSVGPoint();
        point.x = event.clientX, point.y = event.clientY;
        point = point.matrixTransform(node.getScreenCTM().inverse());
        return [point.x, point.y];
      }
      if (node.getBoundingClientRect) {
        var rect = node.getBoundingClientRect();
        return [event.clientX - rect.left - node.clientLeft, event.clientY - rect.top - node.clientTop];
      }
    }
    return [event.pageX, event.pageY];
  }
  var nonpassive = { passive: false };
  var nonpassivecapture = { capture: true, passive: false };
  function nopropagation$1(event) {
    event.stopImmediatePropagation();
  }
  function noevent$1(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
  }
  function dragDisable(view) {
    var root2 = view.document.documentElement, selection2 = select(view).on("dragstart.drag", noevent$1, nonpassivecapture);
    if ("onselectstart" in root2) {
      selection2.on("selectstart.drag", noevent$1, nonpassivecapture);
    } else {
      root2.__noselect = root2.style.MozUserSelect;
      root2.style.MozUserSelect = "none";
    }
  }
  function yesdrag(view, noclick) {
    var root2 = view.document.documentElement, selection2 = select(view).on("dragstart.drag", null);
    if (noclick) {
      selection2.on("click.drag", noevent$1, nonpassivecapture);
      setTimeout(function() {
        selection2.on("click.drag", null);
      }, 0);
    }
    if ("onselectstart" in root2) {
      selection2.on("selectstart.drag", null);
    } else {
      root2.style.MozUserSelect = root2.__noselect;
      delete root2.__noselect;
    }
  }
  var constant$2 = (x2) => () => x2;
  function DragEvent(type, {
    sourceEvent: sourceEvent2,
    subject,
    target,
    identifier,
    active,
    x: x2,
    y: y2,
    dx,
    dy,
    dispatch: dispatch2
  }) {
    Object.defineProperties(this, {
      type: { value: type, enumerable: true, configurable: true },
      sourceEvent: { value: sourceEvent2, enumerable: true, configurable: true },
      subject: { value: subject, enumerable: true, configurable: true },
      target: { value: target, enumerable: true, configurable: true },
      identifier: { value: identifier, enumerable: true, configurable: true },
      active: { value: active, enumerable: true, configurable: true },
      x: { value: x2, enumerable: true, configurable: true },
      y: { value: y2, enumerable: true, configurable: true },
      dx: { value: dx, enumerable: true, configurable: true },
      dy: { value: dy, enumerable: true, configurable: true },
      _: { value: dispatch2 }
    });
  }
  DragEvent.prototype.on = function() {
    var value = this._.on.apply(this._, arguments);
    return value === this._ ? this : value;
  };
  function defaultFilter$1(event) {
    return !event.ctrlKey && !event.button;
  }
  function defaultContainer() {
    return this.parentNode;
  }
  function defaultSubject(event, d) {
    return d == null ? { x: event.x, y: event.y } : d;
  }
  function defaultTouchable$1() {
    return navigator.maxTouchPoints || "ontouchstart" in this;
  }
  function drag() {
    var filter2 = defaultFilter$1, container = defaultContainer, subject = defaultSubject, touchable = defaultTouchable$1, gestures = {}, listeners = dispatch("start", "drag", "end"), active = 0, mousedownx, mousedowny, mousemoving, touchending, clickDistance2 = 0;
    function drag2(selection2) {
      selection2.on("mousedown.drag", mousedowned).filter(touchable).on("touchstart.drag", touchstarted).on("touchmove.drag", touchmoved, nonpassive).on("touchend.drag touchcancel.drag", touchended).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
    }
    function mousedowned(event, d) {
      if (touchending || !filter2.call(this, event, d))
        return;
      var gesture = beforestart(this, container.call(this, event, d), event, d, "mouse");
      if (!gesture)
        return;
      select(event.view).on("mousemove.drag", mousemoved, nonpassivecapture).on("mouseup.drag", mouseupped, nonpassivecapture);
      dragDisable(event.view);
      nopropagation$1(event);
      mousemoving = false;
      mousedownx = event.clientX;
      mousedowny = event.clientY;
      gesture("start", event);
    }
    function mousemoved(event) {
      noevent$1(event);
      if (!mousemoving) {
        var dx = event.clientX - mousedownx, dy = event.clientY - mousedowny;
        mousemoving = dx * dx + dy * dy > clickDistance2;
      }
      gestures.mouse("drag", event);
    }
    function mouseupped(event) {
      select(event.view).on("mousemove.drag mouseup.drag", null);
      yesdrag(event.view, mousemoving);
      noevent$1(event);
      gestures.mouse("end", event);
    }
    function touchstarted(event, d) {
      if (!filter2.call(this, event, d))
        return;
      var touches = event.changedTouches, c = container.call(this, event, d), n = touches.length, i, gesture;
      for (i = 0; i < n; ++i) {
        if (gesture = beforestart(this, c, event, d, touches[i].identifier, touches[i])) {
          nopropagation$1(event);
          gesture("start", event, touches[i]);
        }
      }
    }
    function touchmoved(event) {
      var touches = event.changedTouches, n = touches.length, i, gesture;
      for (i = 0; i < n; ++i) {
        if (gesture = gestures[touches[i].identifier]) {
          noevent$1(event);
          gesture("drag", event, touches[i]);
        }
      }
    }
    function touchended(event) {
      var touches = event.changedTouches, n = touches.length, i, gesture;
      if (touchending)
        clearTimeout(touchending);
      touchending = setTimeout(function() {
        touchending = null;
      }, 500);
      for (i = 0; i < n; ++i) {
        if (gesture = gestures[touches[i].identifier]) {
          nopropagation$1(event);
          gesture("end", event, touches[i]);
        }
      }
    }
    function beforestart(that, container2, event, d, identifier, touch) {
      var dispatch2 = listeners.copy(), p = pointer(touch || event, container2), dx, dy, s2;
      if ((s2 = subject.call(that, new DragEvent("beforestart", {
        sourceEvent: event,
        target: drag2,
        identifier,
        active,
        x: p[0],
        y: p[1],
        dx: 0,
        dy: 0,
        dispatch: dispatch2
      }), d)) == null)
        return;
      dx = s2.x - p[0] || 0;
      dy = s2.y - p[1] || 0;
      return function gesture(type, event2, touch2) {
        var p0 = p, n;
        switch (type) {
          case "start":
            gestures[identifier] = gesture, n = active++;
            break;
          case "end":
            delete gestures[identifier], --active;
          case "drag":
            p = pointer(touch2 || event2, container2), n = active;
            break;
        }
        dispatch2.call(
          type,
          that,
          new DragEvent(type, {
            sourceEvent: event2,
            subject: s2,
            target: drag2,
            identifier,
            active: n,
            x: p[0] + dx,
            y: p[1] + dy,
            dx: p[0] - p0[0],
            dy: p[1] - p0[1],
            dispatch: dispatch2
          }),
          d
        );
      };
    }
    drag2.filter = function(_) {
      return arguments.length ? (filter2 = typeof _ === "function" ? _ : constant$2(!!_), drag2) : filter2;
    };
    drag2.container = function(_) {
      return arguments.length ? (container = typeof _ === "function" ? _ : constant$2(_), drag2) : container;
    };
    drag2.subject = function(_) {
      return arguments.length ? (subject = typeof _ === "function" ? _ : constant$2(_), drag2) : subject;
    };
    drag2.touchable = function(_) {
      return arguments.length ? (touchable = typeof _ === "function" ? _ : constant$2(!!_), drag2) : touchable;
    };
    drag2.on = function() {
      var value = listeners.on.apply(listeners, arguments);
      return value === listeners ? drag2 : value;
    };
    drag2.clickDistance = function(_) {
      return arguments.length ? (clickDistance2 = (_ = +_) * _, drag2) : Math.sqrt(clickDistance2);
    };
    return drag2;
  }
  function define(constructor, factory, prototype) {
    constructor.prototype = factory.prototype = prototype;
    prototype.constructor = constructor;
  }
  function extend(parent, definition) {
    var prototype = Object.create(parent.prototype);
    for (var key in definition)
      prototype[key] = definition[key];
    return prototype;
  }
  function Color() {
  }
  var darker = 0.7;
  var brighter = 1 / darker;
  var reI = "\\s*([+-]?\\d+)\\s*";
  var reN = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*";
  var reP = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*";
  var reHex = /^#([0-9a-f]{3,8})$/;
  var reRgbInteger = new RegExp(`^rgb\\(${reI},${reI},${reI}\\)$`);
  var reRgbPercent = new RegExp(`^rgb\\(${reP},${reP},${reP}\\)$`);
  var reRgbaInteger = new RegExp(`^rgba\\(${reI},${reI},${reI},${reN}\\)$`);
  var reRgbaPercent = new RegExp(`^rgba\\(${reP},${reP},${reP},${reN}\\)$`);
  var reHslPercent = new RegExp(`^hsl\\(${reN},${reP},${reP}\\)$`);
  var reHslaPercent = new RegExp(`^hsla\\(${reN},${reP},${reP},${reN}\\)$`);
  var named = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074
  };
  define(Color, color, {
    copy(channels) {
      return Object.assign(new this.constructor(), this, channels);
    },
    displayable() {
      return this.rgb().displayable();
    },
    hex: color_formatHex,
    formatHex: color_formatHex,
    formatHex8: color_formatHex8,
    formatHsl: color_formatHsl,
    formatRgb: color_formatRgb,
    toString: color_formatRgb
  });
  function color_formatHex() {
    return this.rgb().formatHex();
  }
  function color_formatHex8() {
    return this.rgb().formatHex8();
  }
  function color_formatHsl() {
    return hslConvert(this).formatHsl();
  }
  function color_formatRgb() {
    return this.rgb().formatRgb();
  }
  function color(format) {
    var m, l;
    format = (format + "").trim().toLowerCase();
    return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) : l === 3 ? new Rgb(m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | m & 240, (m & 15) << 4 | m & 15, 1) : l === 8 ? rgba(m >> 24 & 255, m >> 16 & 255, m >> 8 & 255, (m & 255) / 255) : l === 4 ? rgba(m >> 12 & 15 | m >> 8 & 240, m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | m & 240, ((m & 15) << 4 | m & 15) / 255) : null) : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) : named.hasOwnProperty(format) ? rgbn(named[format]) : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
  }
  function rgbn(n) {
    return new Rgb(n >> 16 & 255, n >> 8 & 255, n & 255, 1);
  }
  function rgba(r, g2, b, a2) {
    if (a2 <= 0)
      r = g2 = b = NaN;
    return new Rgb(r, g2, b, a2);
  }
  function rgbConvert(o) {
    if (!(o instanceof Color))
      o = color(o);
    if (!o)
      return new Rgb();
    o = o.rgb();
    return new Rgb(o.r, o.g, o.b, o.opacity);
  }
  function rgb(r, g2, b, opacity) {
    return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g2, b, opacity == null ? 1 : opacity);
  }
  function Rgb(r, g2, b, opacity) {
    this.r = +r;
    this.g = +g2;
    this.b = +b;
    this.opacity = +opacity;
  }
  define(Rgb, rgb, extend(Color, {
    brighter(k2) {
      k2 = k2 == null ? brighter : Math.pow(brighter, k2);
      return new Rgb(this.r * k2, this.g * k2, this.b * k2, this.opacity);
    },
    darker(k2) {
      k2 = k2 == null ? darker : Math.pow(darker, k2);
      return new Rgb(this.r * k2, this.g * k2, this.b * k2, this.opacity);
    },
    rgb() {
      return this;
    },
    clamp() {
      return new Rgb(clampi(this.r), clampi(this.g), clampi(this.b), clampa(this.opacity));
    },
    displayable() {
      return -0.5 <= this.r && this.r < 255.5 && (-0.5 <= this.g && this.g < 255.5) && (-0.5 <= this.b && this.b < 255.5) && (0 <= this.opacity && this.opacity <= 1);
    },
    hex: rgb_formatHex,
    formatHex: rgb_formatHex,
    formatHex8: rgb_formatHex8,
    formatRgb: rgb_formatRgb,
    toString: rgb_formatRgb
  }));
  function rgb_formatHex() {
    return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}`;
  }
  function rgb_formatHex8() {
    return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}${hex((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
  }
  function rgb_formatRgb() {
    const a2 = clampa(this.opacity);
    return `${a2 === 1 ? "rgb(" : "rgba("}${clampi(this.r)}, ${clampi(this.g)}, ${clampi(this.b)}${a2 === 1 ? ")" : `, ${a2})`}`;
  }
  function clampa(opacity) {
    return isNaN(opacity) ? 1 : Math.max(0, Math.min(1, opacity));
  }
  function clampi(value) {
    return Math.max(0, Math.min(255, Math.round(value) || 0));
  }
  function hex(value) {
    value = clampi(value);
    return (value < 16 ? "0" : "") + value.toString(16);
  }
  function hsla(h22, s2, l, a2) {
    if (a2 <= 0)
      h22 = s2 = l = NaN;
    else if (l <= 0 || l >= 1)
      h22 = s2 = NaN;
    else if (s2 <= 0)
      h22 = NaN;
    return new Hsl(h22, s2, l, a2);
  }
  function hslConvert(o) {
    if (o instanceof Hsl)
      return new Hsl(o.h, o.s, o.l, o.opacity);
    if (!(o instanceof Color))
      o = color(o);
    if (!o)
      return new Hsl();
    if (o instanceof Hsl)
      return o;
    o = o.rgb();
    var r = o.r / 255, g2 = o.g / 255, b = o.b / 255, min = Math.min(r, g2, b), max = Math.max(r, g2, b), h22 = NaN, s2 = max - min, l = (max + min) / 2;
    if (s2) {
      if (r === max)
        h22 = (g2 - b) / s2 + (g2 < b) * 6;
      else if (g2 === max)
        h22 = (b - r) / s2 + 2;
      else
        h22 = (r - g2) / s2 + 4;
      s2 /= l < 0.5 ? max + min : 2 - max - min;
      h22 *= 60;
    } else {
      s2 = l > 0 && l < 1 ? 0 : h22;
    }
    return new Hsl(h22, s2, l, o.opacity);
  }
  function hsl(h22, s2, l, opacity) {
    return arguments.length === 1 ? hslConvert(h22) : new Hsl(h22, s2, l, opacity == null ? 1 : opacity);
  }
  function Hsl(h22, s2, l, opacity) {
    this.h = +h22;
    this.s = +s2;
    this.l = +l;
    this.opacity = +opacity;
  }
  define(Hsl, hsl, extend(Color, {
    brighter(k2) {
      k2 = k2 == null ? brighter : Math.pow(brighter, k2);
      return new Hsl(this.h, this.s, this.l * k2, this.opacity);
    },
    darker(k2) {
      k2 = k2 == null ? darker : Math.pow(darker, k2);
      return new Hsl(this.h, this.s, this.l * k2, this.opacity);
    },
    rgb() {
      var h22 = this.h % 360 + (this.h < 0) * 360, s2 = isNaN(h22) || isNaN(this.s) ? 0 : this.s, l = this.l, m2 = l + (l < 0.5 ? l : 1 - l) * s2, m1 = 2 * l - m2;
      return new Rgb(
        hsl2rgb(h22 >= 240 ? h22 - 240 : h22 + 120, m1, m2),
        hsl2rgb(h22, m1, m2),
        hsl2rgb(h22 < 120 ? h22 + 240 : h22 - 120, m1, m2),
        this.opacity
      );
    },
    clamp() {
      return new Hsl(clamph(this.h), clampt(this.s), clampt(this.l), clampa(this.opacity));
    },
    displayable() {
      return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && (0 <= this.l && this.l <= 1) && (0 <= this.opacity && this.opacity <= 1);
    },
    formatHsl() {
      const a2 = clampa(this.opacity);
      return `${a2 === 1 ? "hsl(" : "hsla("}${clamph(this.h)}, ${clampt(this.s) * 100}%, ${clampt(this.l) * 100}%${a2 === 1 ? ")" : `, ${a2})`}`;
    }
  }));
  function clamph(value) {
    value = (value || 0) % 360;
    return value < 0 ? value + 360 : value;
  }
  function clampt(value) {
    return Math.max(0, Math.min(1, value || 0));
  }
  function hsl2rgb(h22, m1, m2) {
    return (h22 < 60 ? m1 + (m2 - m1) * h22 / 60 : h22 < 180 ? m2 : h22 < 240 ? m1 + (m2 - m1) * (240 - h22) / 60 : m1) * 255;
  }
  var constant$1 = (x2) => () => x2;
  function linear(a2, d) {
    return function(t) {
      return a2 + t * d;
    };
  }
  function exponential(a2, b, y2) {
    return a2 = Math.pow(a2, y2), b = Math.pow(b, y2) - a2, y2 = 1 / y2, function(t) {
      return Math.pow(a2 + t * b, y2);
    };
  }
  function gamma(y2) {
    return (y2 = +y2) === 1 ? nogamma : function(a2, b) {
      return b - a2 ? exponential(a2, b, y2) : constant$1(isNaN(a2) ? b : a2);
    };
  }
  function nogamma(a2, b) {
    var d = b - a2;
    return d ? linear(a2, d) : constant$1(isNaN(a2) ? b : a2);
  }
  var interpolateRgb = function rgbGamma(y2) {
    var color2 = gamma(y2);
    function rgb$1(start2, end) {
      var r = color2((start2 = rgb(start2)).r, (end = rgb(end)).r), g2 = color2(start2.g, end.g), b = color2(start2.b, end.b), opacity = nogamma(start2.opacity, end.opacity);
      return function(t) {
        start2.r = r(t);
        start2.g = g2(t);
        start2.b = b(t);
        start2.opacity = opacity(t);
        return start2 + "";
      };
    }
    rgb$1.gamma = rgbGamma;
    return rgb$1;
  }(1);
  function interpolateNumber(a2, b) {
    return a2 = +a2, b = +b, function(t) {
      return a2 * (1 - t) + b * t;
    };
  }
  var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
  var reB = new RegExp(reA.source, "g");
  function zero(b) {
    return function() {
      return b;
    };
  }
  function one(b) {
    return function(t) {
      return b(t) + "";
    };
  }
  function interpolateString(a2, b) {
    var bi = reA.lastIndex = reB.lastIndex = 0, am, bm, bs, i = -1, s2 = [], q = [];
    a2 = a2 + "", b = b + "";
    while ((am = reA.exec(a2)) && (bm = reB.exec(b))) {
      if ((bs = bm.index) > bi) {
        bs = b.slice(bi, bs);
        if (s2[i])
          s2[i] += bs;
        else
          s2[++i] = bs;
      }
      if ((am = am[0]) === (bm = bm[0])) {
        if (s2[i])
          s2[i] += bm;
        else
          s2[++i] = bm;
      } else {
        s2[++i] = null;
        q.push({ i, x: interpolateNumber(am, bm) });
      }
      bi = reB.lastIndex;
    }
    if (bi < b.length) {
      bs = b.slice(bi);
      if (s2[i])
        s2[i] += bs;
      else
        s2[++i] = bs;
    }
    return s2.length < 2 ? q[0] ? one(q[0].x) : zero(b) : (b = q.length, function(t) {
      for (var i2 = 0, o; i2 < b; ++i2)
        s2[(o = q[i2]).i] = o.x(t);
      return s2.join("");
    });
  }
  var degrees = 180 / Math.PI;
  var identity$1 = {
    translateX: 0,
    translateY: 0,
    rotate: 0,
    skewX: 0,
    scaleX: 1,
    scaleY: 1
  };
  function decompose(a2, b, c, d, e2, f) {
    var scaleX, scaleY, skewX;
    if (scaleX = Math.sqrt(a2 * a2 + b * b))
      a2 /= scaleX, b /= scaleX;
    if (skewX = a2 * c + b * d)
      c -= a2 * skewX, d -= b * skewX;
    if (scaleY = Math.sqrt(c * c + d * d))
      c /= scaleY, d /= scaleY, skewX /= scaleY;
    if (a2 * d < b * c)
      a2 = -a2, b = -b, skewX = -skewX, scaleX = -scaleX;
    return {
      translateX: e2,
      translateY: f,
      rotate: Math.atan2(b, a2) * degrees,
      skewX: Math.atan(skewX) * degrees,
      scaleX,
      scaleY
    };
  }
  var svgNode;
  function parseCss(value) {
    const m = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
    return m.isIdentity ? identity$1 : decompose(m.a, m.b, m.c, m.d, m.e, m.f);
  }
  function parseSvg(value) {
    if (value == null)
      return identity$1;
    if (!svgNode)
      svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
    svgNode.setAttribute("transform", value);
    if (!(value = svgNode.transform.baseVal.consolidate()))
      return identity$1;
    value = value.matrix;
    return decompose(value.a, value.b, value.c, value.d, value.e, value.f);
  }
  function interpolateTransform(parse, pxComma, pxParen, degParen) {
    function pop(s2) {
      return s2.length ? s2.pop() + " " : "";
    }
    function translate(xa, ya, xb, yb, s2, q) {
      if (xa !== xb || ya !== yb) {
        var i = s2.push("translate(", null, pxComma, null, pxParen);
        q.push({ i: i - 4, x: interpolateNumber(xa, xb) }, { i: i - 2, x: interpolateNumber(ya, yb) });
      } else if (xb || yb) {
        s2.push("translate(" + xb + pxComma + yb + pxParen);
      }
    }
    function rotate(a2, b, s2, q) {
      if (a2 !== b) {
        if (a2 - b > 180)
          b += 360;
        else if (b - a2 > 180)
          a2 += 360;
        q.push({ i: s2.push(pop(s2) + "rotate(", null, degParen) - 2, x: interpolateNumber(a2, b) });
      } else if (b) {
        s2.push(pop(s2) + "rotate(" + b + degParen);
      }
    }
    function skewX(a2, b, s2, q) {
      if (a2 !== b) {
        q.push({ i: s2.push(pop(s2) + "skewX(", null, degParen) - 2, x: interpolateNumber(a2, b) });
      } else if (b) {
        s2.push(pop(s2) + "skewX(" + b + degParen);
      }
    }
    function scale(xa, ya, xb, yb, s2, q) {
      if (xa !== xb || ya !== yb) {
        var i = s2.push(pop(s2) + "scale(", null, ",", null, ")");
        q.push({ i: i - 4, x: interpolateNumber(xa, xb) }, { i: i - 2, x: interpolateNumber(ya, yb) });
      } else if (xb !== 1 || yb !== 1) {
        s2.push(pop(s2) + "scale(" + xb + "," + yb + ")");
      }
    }
    return function(a2, b) {
      var s2 = [], q = [];
      a2 = parse(a2), b = parse(b);
      translate(a2.translateX, a2.translateY, b.translateX, b.translateY, s2, q);
      rotate(a2.rotate, b.rotate, s2, q);
      skewX(a2.skewX, b.skewX, s2, q);
      scale(a2.scaleX, a2.scaleY, b.scaleX, b.scaleY, s2, q);
      a2 = b = null;
      return function(t) {
        var i = -1, n = q.length, o;
        while (++i < n)
          s2[(o = q[i]).i] = o.x(t);
        return s2.join("");
      };
    };
  }
  var interpolateTransformCss = interpolateTransform(parseCss, "px, ", "px)", "deg)");
  var interpolateTransformSvg = interpolateTransform(parseSvg, ", ", ")", ")");
  var epsilon2 = 1e-12;
  function cosh(x2) {
    return ((x2 = Math.exp(x2)) + 1 / x2) / 2;
  }
  function sinh(x2) {
    return ((x2 = Math.exp(x2)) - 1 / x2) / 2;
  }
  function tanh(x2) {
    return ((x2 = Math.exp(2 * x2)) - 1) / (x2 + 1);
  }
  var interpolateZoom = function zoomRho(rho, rho2, rho4) {
    function zoom2(p0, p1) {
      var ux0 = p0[0], uy0 = p0[1], w0 = p0[2], ux1 = p1[0], uy1 = p1[1], w1 = p1[2], dx = ux1 - ux0, dy = uy1 - uy0, d2 = dx * dx + dy * dy, i, S2;
      if (d2 < epsilon2) {
        S2 = Math.log(w1 / w0) / rho;
        i = function(t) {
          return [
            ux0 + t * dx,
            uy0 + t * dy,
            w0 * Math.exp(rho * t * S2)
          ];
        };
      } else {
        var d1 = Math.sqrt(d2), b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1), b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1), r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0), r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
        S2 = (r1 - r0) / rho;
        i = function(t) {
          var s2 = t * S2, coshr0 = cosh(r0), u2 = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s2 + r0) - sinh(r0));
          return [
            ux0 + u2 * dx,
            uy0 + u2 * dy,
            w0 * coshr0 / cosh(rho * s2 + r0)
          ];
        };
      }
      i.duration = S2 * 1e3 * rho / Math.SQRT2;
      return i;
    }
    zoom2.rho = function(_) {
      var _1 = Math.max(1e-3, +_), _2 = _1 * _1, _4 = _2 * _2;
      return zoomRho(_1, _2, _4);
    };
    return zoom2;
  }(Math.SQRT2, 2, 4);
  var frame = 0;
  var timeout$1 = 0;
  var interval = 0;
  var pokeDelay = 1e3;
  var taskHead;
  var taskTail;
  var clockLast = 0;
  var clockNow = 0;
  var clockSkew = 0;
  var clock = typeof performance === "object" && performance.now ? performance : Date;
  var setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) {
    setTimeout(f, 17);
  };
  function now2() {
    return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
  }
  function clearNow() {
    clockNow = 0;
  }
  function Timer() {
    this._call = this._time = this._next = null;
  }
  Timer.prototype = timer.prototype = {
    constructor: Timer,
    restart: function(callback, delay, time) {
      if (typeof callback !== "function")
        throw new TypeError("callback is not a function");
      time = (time == null ? now2() : +time) + (delay == null ? 0 : +delay);
      if (!this._next && taskTail !== this) {
        if (taskTail)
          taskTail._next = this;
        else
          taskHead = this;
        taskTail = this;
      }
      this._call = callback;
      this._time = time;
      sleep();
    },
    stop: function() {
      if (this._call) {
        this._call = null;
        this._time = Infinity;
        sleep();
      }
    }
  };
  function timer(callback, delay, time) {
    var t = new Timer();
    t.restart(callback, delay, time);
    return t;
  }
  function timerFlush() {
    now2();
    ++frame;
    var t = taskHead, e2;
    while (t) {
      if ((e2 = clockNow - t._time) >= 0)
        t._call.call(void 0, e2);
      t = t._next;
    }
    --frame;
  }
  function wake() {
    clockNow = (clockLast = clock.now()) + clockSkew;
    frame = timeout$1 = 0;
    try {
      timerFlush();
    } finally {
      frame = 0;
      nap();
      clockNow = 0;
    }
  }
  function poke() {
    var now22 = clock.now(), delay = now22 - clockLast;
    if (delay > pokeDelay)
      clockSkew -= delay, clockLast = now22;
  }
  function nap() {
    var t0, t1 = taskHead, t2, time = Infinity;
    while (t1) {
      if (t1._call) {
        if (time > t1._time)
          time = t1._time;
        t0 = t1, t1 = t1._next;
      } else {
        t2 = t1._next, t1._next = null;
        t1 = t0 ? t0._next = t2 : taskHead = t2;
      }
    }
    taskTail = t0;
    sleep(time);
  }
  function sleep(time) {
    if (frame)
      return;
    if (timeout$1)
      timeout$1 = clearTimeout(timeout$1);
    var delay = time - clockNow;
    if (delay > 24) {
      if (time < Infinity)
        timeout$1 = setTimeout(wake, time - clock.now() - clockSkew);
      if (interval)
        interval = clearInterval(interval);
    } else {
      if (!interval)
        clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
      frame = 1, setFrame(wake);
    }
  }
  function timeout(callback, delay, time) {
    var t = new Timer();
    delay = delay == null ? 0 : +delay;
    t.restart((elapsed) => {
      t.stop();
      callback(elapsed + delay);
    }, delay, time);
    return t;
  }
  var emptyOn = dispatch("start", "end", "cancel", "interrupt");
  var emptyTween = [];
  var CREATED = 0;
  var SCHEDULED = 1;
  var STARTING = 2;
  var STARTED = 3;
  var RUNNING = 4;
  var ENDING = 5;
  var ENDED = 6;
  function schedule(node, name, id2, index, group, timing) {
    var schedules = node.__transition;
    if (!schedules)
      node.__transition = {};
    else if (id2 in schedules)
      return;
    create(node, id2, {
      name,
      index,
      group,
      on: emptyOn,
      tween: emptyTween,
      time: timing.time,
      delay: timing.delay,
      duration: timing.duration,
      ease: timing.ease,
      timer: null,
      state: CREATED
    });
  }
  function init(node, id2) {
    var schedule2 = get(node, id2);
    if (schedule2.state > CREATED)
      throw new Error("too late; already scheduled");
    return schedule2;
  }
  function set2(node, id2) {
    var schedule2 = get(node, id2);
    if (schedule2.state > STARTED)
      throw new Error("too late; already running");
    return schedule2;
  }
  function get(node, id2) {
    var schedule2 = node.__transition;
    if (!schedule2 || !(schedule2 = schedule2[id2]))
      throw new Error("transition not found");
    return schedule2;
  }
  function create(node, id2, self2) {
    var schedules = node.__transition, tween;
    schedules[id2] = self2;
    self2.timer = timer(schedule2, 0, self2.time);
    function schedule2(elapsed) {
      self2.state = SCHEDULED;
      self2.timer.restart(start2, self2.delay, self2.time);
      if (self2.delay <= elapsed)
        start2(elapsed - self2.delay);
    }
    function start2(elapsed) {
      var i, j, n, o;
      if (self2.state !== SCHEDULED)
        return stop();
      for (i in schedules) {
        o = schedules[i];
        if (o.name !== self2.name)
          continue;
        if (o.state === STARTED)
          return timeout(start2);
        if (o.state === RUNNING) {
          o.state = ENDED;
          o.timer.stop();
          o.on.call("interrupt", node, node.__data__, o.index, o.group);
          delete schedules[i];
        } else if (+i < id2) {
          o.state = ENDED;
          o.timer.stop();
          o.on.call("cancel", node, node.__data__, o.index, o.group);
          delete schedules[i];
        }
      }
      timeout(function() {
        if (self2.state === STARTED) {
          self2.state = RUNNING;
          self2.timer.restart(tick, self2.delay, self2.time);
          tick(elapsed);
        }
      });
      self2.state = STARTING;
      self2.on.call("start", node, node.__data__, self2.index, self2.group);
      if (self2.state !== STARTING)
        return;
      self2.state = STARTED;
      tween = new Array(n = self2.tween.length);
      for (i = 0, j = -1; i < n; ++i) {
        if (o = self2.tween[i].value.call(node, node.__data__, self2.index, self2.group)) {
          tween[++j] = o;
        }
      }
      tween.length = j + 1;
    }
    function tick(elapsed) {
      var t = elapsed < self2.duration ? self2.ease.call(null, elapsed / self2.duration) : (self2.timer.restart(stop), self2.state = ENDING, 1), i = -1, n = tween.length;
      while (++i < n) {
        tween[i].call(node, t);
      }
      if (self2.state === ENDING) {
        self2.on.call("end", node, node.__data__, self2.index, self2.group);
        stop();
      }
    }
    function stop() {
      self2.state = ENDED;
      self2.timer.stop();
      delete schedules[id2];
      for (var i in schedules)
        return;
      delete node.__transition;
    }
  }
  function interrupt(node, name) {
    var schedules = node.__transition, schedule2, active, empty2 = true, i;
    if (!schedules)
      return;
    name = name == null ? null : name + "";
    for (i in schedules) {
      if ((schedule2 = schedules[i]).name !== name) {
        empty2 = false;
        continue;
      }
      active = schedule2.state > STARTING && schedule2.state < ENDING;
      schedule2.state = ENDED;
      schedule2.timer.stop();
      schedule2.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule2.index, schedule2.group);
      delete schedules[i];
    }
    if (empty2)
      delete node.__transition;
  }
  function selection_interrupt(name) {
    return this.each(function() {
      interrupt(this, name);
    });
  }
  function tweenRemove(id2, name) {
    var tween0, tween1;
    return function() {
      var schedule2 = set2(this, id2), tween = schedule2.tween;
      if (tween !== tween0) {
        tween1 = tween0 = tween;
        for (var i = 0, n = tween1.length; i < n; ++i) {
          if (tween1[i].name === name) {
            tween1 = tween1.slice();
            tween1.splice(i, 1);
            break;
          }
        }
      }
      schedule2.tween = tween1;
    };
  }
  function tweenFunction(id2, name, value) {
    var tween0, tween1;
    if (typeof value !== "function")
      throw new Error();
    return function() {
      var schedule2 = set2(this, id2), tween = schedule2.tween;
      if (tween !== tween0) {
        tween1 = (tween0 = tween).slice();
        for (var t = { name, value }, i = 0, n = tween1.length; i < n; ++i) {
          if (tween1[i].name === name) {
            tween1[i] = t;
            break;
          }
        }
        if (i === n)
          tween1.push(t);
      }
      schedule2.tween = tween1;
    };
  }
  function transition_tween(name, value) {
    var id2 = this._id;
    name += "";
    if (arguments.length < 2) {
      var tween = get(this.node(), id2).tween;
      for (var i = 0, n = tween.length, t; i < n; ++i) {
        if ((t = tween[i]).name === name) {
          return t.value;
        }
      }
      return null;
    }
    return this.each((value == null ? tweenRemove : tweenFunction)(id2, name, value));
  }
  function tweenValue(transition2, name, value) {
    var id2 = transition2._id;
    transition2.each(function() {
      var schedule2 = set2(this, id2);
      (schedule2.value || (schedule2.value = {}))[name] = value.apply(this, arguments);
    });
    return function(node) {
      return get(node, id2).value[name];
    };
  }
  function interpolate(a2, b) {
    var c;
    return (typeof b === "number" ? interpolateNumber : b instanceof color ? interpolateRgb : (c = color(b)) ? (b = c, interpolateRgb) : interpolateString)(a2, b);
  }
  function attrRemove(name) {
    return function() {
      this.removeAttribute(name);
    };
  }
  function attrRemoveNS(fullname) {
    return function() {
      this.removeAttributeNS(fullname.space, fullname.local);
    };
  }
  function attrConstant(name, interpolate2, value1) {
    var string00, string1 = value1 + "", interpolate0;
    return function() {
      var string0 = this.getAttribute(name);
      return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate2(string00 = string0, value1);
    };
  }
  function attrConstantNS(fullname, interpolate2, value1) {
    var string00, string1 = value1 + "", interpolate0;
    return function() {
      var string0 = this.getAttributeNS(fullname.space, fullname.local);
      return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate2(string00 = string0, value1);
    };
  }
  function attrFunction(name, interpolate2, value) {
    var string00, string10, interpolate0;
    return function() {
      var string0, value1 = value(this), string1;
      if (value1 == null)
        return void this.removeAttribute(name);
      string0 = this.getAttribute(name);
      string1 = value1 + "";
      return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate2(string00 = string0, value1));
    };
  }
  function attrFunctionNS(fullname, interpolate2, value) {
    var string00, string10, interpolate0;
    return function() {
      var string0, value1 = value(this), string1;
      if (value1 == null)
        return void this.removeAttributeNS(fullname.space, fullname.local);
      string0 = this.getAttributeNS(fullname.space, fullname.local);
      string1 = value1 + "";
      return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate2(string00 = string0, value1));
    };
  }
  function transition_attr(name, value) {
    var fullname = namespace(name), i = fullname === "transform" ? interpolateTransformSvg : interpolate;
    return this.attrTween(name, typeof value === "function" ? (fullname.local ? attrFunctionNS : attrFunction)(fullname, i, tweenValue(this, "attr." + name, value)) : value == null ? (fullname.local ? attrRemoveNS : attrRemove)(fullname) : (fullname.local ? attrConstantNS : attrConstant)(fullname, i, value));
  }
  function attrInterpolate(name, i) {
    return function(t) {
      this.setAttribute(name, i.call(this, t));
    };
  }
  function attrInterpolateNS(fullname, i) {
    return function(t) {
      this.setAttributeNS(fullname.space, fullname.local, i.call(this, t));
    };
  }
  function attrTweenNS(fullname, value) {
    var t0, i0;
    function tween() {
      var i = value.apply(this, arguments);
      if (i !== i0)
        t0 = (i0 = i) && attrInterpolateNS(fullname, i);
      return t0;
    }
    tween._value = value;
    return tween;
  }
  function attrTween(name, value) {
    var t0, i0;
    function tween() {
      var i = value.apply(this, arguments);
      if (i !== i0)
        t0 = (i0 = i) && attrInterpolate(name, i);
      return t0;
    }
    tween._value = value;
    return tween;
  }
  function transition_attrTween(name, value) {
    var key = "attr." + name;
    if (arguments.length < 2)
      return (key = this.tween(key)) && key._value;
    if (value == null)
      return this.tween(key, null);
    if (typeof value !== "function")
      throw new Error();
    var fullname = namespace(name);
    return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
  }
  function delayFunction(id2, value) {
    return function() {
      init(this, id2).delay = +value.apply(this, arguments);
    };
  }
  function delayConstant(id2, value) {
    return value = +value, function() {
      init(this, id2).delay = value;
    };
  }
  function transition_delay(value) {
    var id2 = this._id;
    return arguments.length ? this.each((typeof value === "function" ? delayFunction : delayConstant)(id2, value)) : get(this.node(), id2).delay;
  }
  function durationFunction(id2, value) {
    return function() {
      set2(this, id2).duration = +value.apply(this, arguments);
    };
  }
  function durationConstant(id2, value) {
    return value = +value, function() {
      set2(this, id2).duration = value;
    };
  }
  function transition_duration(value) {
    var id2 = this._id;
    return arguments.length ? this.each((typeof value === "function" ? durationFunction : durationConstant)(id2, value)) : get(this.node(), id2).duration;
  }
  function easeConstant(id2, value) {
    if (typeof value !== "function")
      throw new Error();
    return function() {
      set2(this, id2).ease = value;
    };
  }
  function transition_ease(value) {
    var id2 = this._id;
    return arguments.length ? this.each(easeConstant(id2, value)) : get(this.node(), id2).ease;
  }
  function easeVarying(id2, value) {
    return function() {
      var v = value.apply(this, arguments);
      if (typeof v !== "function")
        throw new Error();
      set2(this, id2).ease = v;
    };
  }
  function transition_easeVarying(value) {
    if (typeof value !== "function")
      throw new Error();
    return this.each(easeVarying(this._id, value));
  }
  function transition_filter(match) {
    if (typeof match !== "function")
      match = matcher(match);
    for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
        if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
          subgroup.push(node);
        }
      }
    }
    return new Transition(subgroups, this._parents, this._name, this._id);
  }
  function transition_merge(transition2) {
    if (transition2._id !== this._id)
      throw new Error();
    for (var groups0 = this._groups, groups1 = transition2._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
      for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
        if (node = group0[i] || group1[i]) {
          merge[i] = node;
        }
      }
    }
    for (; j < m0; ++j) {
      merges[j] = groups0[j];
    }
    return new Transition(merges, this._parents, this._name, this._id);
  }
  function start(name) {
    return (name + "").trim().split(/^|\s+/).every(function(t) {
      var i = t.indexOf(".");
      if (i >= 0)
        t = t.slice(0, i);
      return !t || t === "start";
    });
  }
  function onFunction(id2, name, listener) {
    var on0, on1, sit = start(name) ? init : set2;
    return function() {
      var schedule2 = sit(this, id2), on = schedule2.on;
      if (on !== on0)
        (on1 = (on0 = on).copy()).on(name, listener);
      schedule2.on = on1;
    };
  }
  function transition_on(name, listener) {
    var id2 = this._id;
    return arguments.length < 2 ? get(this.node(), id2).on.on(name) : this.each(onFunction(id2, name, listener));
  }
  function removeFunction(id2) {
    return function() {
      var parent = this.parentNode;
      for (var i in this.__transition)
        if (+i !== id2)
          return;
      if (parent)
        parent.removeChild(this);
    };
  }
  function transition_remove() {
    return this.on("end.remove", removeFunction(this._id));
  }
  function transition_select(select2) {
    var name = this._name, id2 = this._id;
    if (typeof select2 !== "function")
      select2 = selector(select2);
    for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
        if ((node = group[i]) && (subnode = select2.call(node, node.__data__, i, group))) {
          if ("__data__" in node)
            subnode.__data__ = node.__data__;
          subgroup[i] = subnode;
          schedule(subgroup[i], name, id2, i, subgroup, get(node, id2));
        }
      }
    }
    return new Transition(subgroups, this._parents, name, id2);
  }
  function transition_selectAll(select2) {
    var name = this._name, id2 = this._id;
    if (typeof select2 !== "function")
      select2 = selectorAll(select2);
    for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
        if (node = group[i]) {
          for (var children2 = select2.call(node, node.__data__, i, group), child, inherit2 = get(node, id2), k2 = 0, l = children2.length; k2 < l; ++k2) {
            if (child = children2[k2]) {
              schedule(child, name, id2, k2, children2, inherit2);
            }
          }
          subgroups.push(children2);
          parents.push(node);
        }
      }
    }
    return new Transition(subgroups, parents, name, id2);
  }
  var Selection = selection.prototype.constructor;
  function transition_selection() {
    return new Selection(this._groups, this._parents);
  }
  function styleNull(name, interpolate2) {
    var string00, string10, interpolate0;
    return function() {
      var string0 = styleValue(this, name), string1 = (this.style.removeProperty(name), styleValue(this, name));
      return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : interpolate0 = interpolate2(string00 = string0, string10 = string1);
    };
  }
  function styleRemove(name) {
    return function() {
      this.style.removeProperty(name);
    };
  }
  function styleConstant(name, interpolate2, value1) {
    var string00, string1 = value1 + "", interpolate0;
    return function() {
      var string0 = styleValue(this, name);
      return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate2(string00 = string0, value1);
    };
  }
  function styleFunction(name, interpolate2, value) {
    var string00, string10, interpolate0;
    return function() {
      var string0 = styleValue(this, name), value1 = value(this), string1 = value1 + "";
      if (value1 == null)
        string1 = value1 = (this.style.removeProperty(name), styleValue(this, name));
      return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate2(string00 = string0, value1));
    };
  }
  function styleMaybeRemove(id2, name) {
    var on0, on1, listener0, key = "style." + name, event = "end." + key, remove2;
    return function() {
      var schedule2 = set2(this, id2), on = schedule2.on, listener = schedule2.value[key] == null ? remove2 || (remove2 = styleRemove(name)) : void 0;
      if (on !== on0 || listener0 !== listener)
        (on1 = (on0 = on).copy()).on(event, listener0 = listener);
      schedule2.on = on1;
    };
  }
  function transition_style(name, value, priority) {
    var i = (name += "") === "transform" ? interpolateTransformCss : interpolate;
    return value == null ? this.styleTween(name, styleNull(name, i)).on("end.style." + name, styleRemove(name)) : typeof value === "function" ? this.styleTween(name, styleFunction(name, i, tweenValue(this, "style." + name, value))).each(styleMaybeRemove(this._id, name)) : this.styleTween(name, styleConstant(name, i, value), priority).on("end.style." + name, null);
  }
  function styleInterpolate(name, i, priority) {
    return function(t) {
      this.style.setProperty(name, i.call(this, t), priority);
    };
  }
  function styleTween(name, value, priority) {
    var t, i0;
    function tween() {
      var i = value.apply(this, arguments);
      if (i !== i0)
        t = (i0 = i) && styleInterpolate(name, i, priority);
      return t;
    }
    tween._value = value;
    return tween;
  }
  function transition_styleTween(name, value, priority) {
    var key = "style." + (name += "");
    if (arguments.length < 2)
      return (key = this.tween(key)) && key._value;
    if (value == null)
      return this.tween(key, null);
    if (typeof value !== "function")
      throw new Error();
    return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
  }
  function textConstant(value) {
    return function() {
      this.textContent = value;
    };
  }
  function textFunction(value) {
    return function() {
      var value1 = value(this);
      this.textContent = value1 == null ? "" : value1;
    };
  }
  function transition_text(value) {
    return this.tween("text", typeof value === "function" ? textFunction(tweenValue(this, "text", value)) : textConstant(value == null ? "" : value + ""));
  }
  function textInterpolate(i) {
    return function(t) {
      this.textContent = i.call(this, t);
    };
  }
  function textTween(value) {
    var t0, i0;
    function tween() {
      var i = value.apply(this, arguments);
      if (i !== i0)
        t0 = (i0 = i) && textInterpolate(i);
      return t0;
    }
    tween._value = value;
    return tween;
  }
  function transition_textTween(value) {
    var key = "text";
    if (arguments.length < 1)
      return (key = this.tween(key)) && key._value;
    if (value == null)
      return this.tween(key, null);
    if (typeof value !== "function")
      throw new Error();
    return this.tween(key, textTween(value));
  }
  function transition_transition() {
    var name = this._name, id0 = this._id, id1 = newId();
    for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
        if (node = group[i]) {
          var inherit2 = get(node, id0);
          schedule(node, name, id1, i, group, {
            time: inherit2.time + inherit2.delay + inherit2.duration,
            delay: 0,
            duration: inherit2.duration,
            ease: inherit2.ease
          });
        }
      }
    }
    return new Transition(groups, this._parents, name, id1);
  }
  function transition_end() {
    var on0, on1, that = this, id2 = that._id, size = that.size();
    return new Promise(function(resolve, reject) {
      var cancel = { value: reject }, end = { value: function() {
        if (--size === 0)
          resolve();
      } };
      that.each(function() {
        var schedule2 = set2(this, id2), on = schedule2.on;
        if (on !== on0) {
          on1 = (on0 = on).copy();
          on1._.cancel.push(cancel);
          on1._.interrupt.push(cancel);
          on1._.end.push(end);
        }
        schedule2.on = on1;
      });
      if (size === 0)
        resolve();
    });
  }
  var id = 0;
  function Transition(groups, parents, name, id2) {
    this._groups = groups;
    this._parents = parents;
    this._name = name;
    this._id = id2;
  }
  function newId() {
    return ++id;
  }
  var selection_prototype = selection.prototype;
  Transition.prototype = {
    constructor: Transition,
    select: transition_select,
    selectAll: transition_selectAll,
    selectChild: selection_prototype.selectChild,
    selectChildren: selection_prototype.selectChildren,
    filter: transition_filter,
    merge: transition_merge,
    selection: transition_selection,
    transition: transition_transition,
    call: selection_prototype.call,
    nodes: selection_prototype.nodes,
    node: selection_prototype.node,
    size: selection_prototype.size,
    empty: selection_prototype.empty,
    each: selection_prototype.each,
    on: transition_on,
    attr: transition_attr,
    attrTween: transition_attrTween,
    style: transition_style,
    styleTween: transition_styleTween,
    text: transition_text,
    textTween: transition_textTween,
    remove: transition_remove,
    tween: transition_tween,
    delay: transition_delay,
    duration: transition_duration,
    ease: transition_ease,
    easeVarying: transition_easeVarying,
    end: transition_end,
    [Symbol.iterator]: selection_prototype[Symbol.iterator]
  };
  function cubicInOut(t) {
    return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
  }
  var defaultTiming = {
    time: null,
    delay: 0,
    duration: 250,
    ease: cubicInOut
  };
  function inherit(node, id2) {
    var timing;
    while (!(timing = node.__transition) || !(timing = timing[id2])) {
      if (!(node = node.parentNode)) {
        throw new Error(`transition ${id2} not found`);
      }
    }
    return timing;
  }
  function selection_transition(name) {
    var id2, timing;
    if (name instanceof Transition) {
      id2 = name._id, name = name._name;
    } else {
      id2 = newId(), (timing = defaultTiming).time = now2(), name = name == null ? null : name + "";
    }
    for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
        if (node = group[i]) {
          schedule(node, name, id2, i, group, timing || inherit(node, id2));
        }
      }
    }
    return new Transition(groups, this._parents, name, id2);
  }
  selection.prototype.interrupt = selection_interrupt;
  selection.prototype.transition = selection_transition;
  var constant = (x2) => () => x2;
  function ZoomEvent(type, {
    sourceEvent: sourceEvent2,
    target,
    transform,
    dispatch: dispatch2
  }) {
    Object.defineProperties(this, {
      type: { value: type, enumerable: true, configurable: true },
      sourceEvent: { value: sourceEvent2, enumerable: true, configurable: true },
      target: { value: target, enumerable: true, configurable: true },
      transform: { value: transform, enumerable: true, configurable: true },
      _: { value: dispatch2 }
    });
  }
  function Transform(k2, x2, y2) {
    this.k = k2;
    this.x = x2;
    this.y = y2;
  }
  Transform.prototype = {
    constructor: Transform,
    scale: function(k2) {
      return k2 === 1 ? this : new Transform(this.k * k2, this.x, this.y);
    },
    translate: function(x2, y2) {
      return x2 === 0 & y2 === 0 ? this : new Transform(this.k, this.x + this.k * x2, this.y + this.k * y2);
    },
    apply: function(point) {
      return [point[0] * this.k + this.x, point[1] * this.k + this.y];
    },
    applyX: function(x2) {
      return x2 * this.k + this.x;
    },
    applyY: function(y2) {
      return y2 * this.k + this.y;
    },
    invert: function(location2) {
      return [(location2[0] - this.x) / this.k, (location2[1] - this.y) / this.k];
    },
    invertX: function(x2) {
      return (x2 - this.x) / this.k;
    },
    invertY: function(y2) {
      return (y2 - this.y) / this.k;
    },
    rescaleX: function(x2) {
      return x2.copy().domain(x2.range().map(this.invertX, this).map(x2.invert, x2));
    },
    rescaleY: function(y2) {
      return y2.copy().domain(y2.range().map(this.invertY, this).map(y2.invert, y2));
    },
    toString: function() {
      return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
    }
  };
  var identity2 = new Transform(1, 0, 0);
  Transform.prototype;
  function nopropagation(event) {
    event.stopImmediatePropagation();
  }
  function noevent(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
  }
  function defaultFilter(event) {
    return (!event.ctrlKey || event.type === "wheel") && !event.button;
  }
  function defaultExtent() {
    var e2 = this;
    if (e2 instanceof SVGElement) {
      e2 = e2.ownerSVGElement || e2;
      if (e2.hasAttribute("viewBox")) {
        e2 = e2.viewBox.baseVal;
        return [[e2.x, e2.y], [e2.x + e2.width, e2.y + e2.height]];
      }
      return [[0, 0], [e2.width.baseVal.value, e2.height.baseVal.value]];
    }
    return [[0, 0], [e2.clientWidth, e2.clientHeight]];
  }
  function defaultTransform() {
    return this.__zoom || identity2;
  }
  function defaultWheelDelta(event) {
    return -event.deltaY * (event.deltaMode === 1 ? 0.05 : event.deltaMode ? 1 : 2e-3) * (event.ctrlKey ? 10 : 1);
  }
  function defaultTouchable() {
    return navigator.maxTouchPoints || "ontouchstart" in this;
  }
  function defaultConstrain(transform, extent, translateExtent) {
    var dx0 = transform.invertX(extent[0][0]) - translateExtent[0][0], dx1 = transform.invertX(extent[1][0]) - translateExtent[1][0], dy0 = transform.invertY(extent[0][1]) - translateExtent[0][1], dy1 = transform.invertY(extent[1][1]) - translateExtent[1][1];
    return transform.translate(
      dx1 > dx0 ? (dx0 + dx1) / 2 : Math.min(0, dx0) || Math.max(0, dx1),
      dy1 > dy0 ? (dy0 + dy1) / 2 : Math.min(0, dy0) || Math.max(0, dy1)
    );
  }
  function zoom() {
    var filter2 = defaultFilter, extent = defaultExtent, constrain = defaultConstrain, wheelDelta = defaultWheelDelta, touchable = defaultTouchable, scaleExtent = [0, Infinity], translateExtent = [[-Infinity, -Infinity], [Infinity, Infinity]], duration = 250, interpolate2 = interpolateZoom, listeners = dispatch("start", "zoom", "end"), touchstarting, touchfirst, touchending, touchDelay = 500, wheelDelay = 150, clickDistance2 = 0, tapDistance = 10;
    function zoom2(selection2) {
      selection2.property("__zoom", defaultTransform).on("wheel.zoom", wheeled, { passive: false }).on("mousedown.zoom", mousedowned).on("dblclick.zoom", dblclicked).filter(touchable).on("touchstart.zoom", touchstarted).on("touchmove.zoom", touchmoved).on("touchend.zoom touchcancel.zoom", touchended).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
    }
    zoom2.transform = function(collection, transform, point, event) {
      var selection2 = collection.selection ? collection.selection() : collection;
      selection2.property("__zoom", defaultTransform);
      if (collection !== selection2) {
        schedule2(collection, transform, point, event);
      } else {
        selection2.interrupt().each(function() {
          gesture(this, arguments).event(event).start().zoom(null, typeof transform === "function" ? transform.apply(this, arguments) : transform).end();
        });
      }
    };
    zoom2.scaleBy = function(selection2, k2, p, event) {
      zoom2.scaleTo(selection2, function() {
        var k0 = this.__zoom.k, k1 = typeof k2 === "function" ? k2.apply(this, arguments) : k2;
        return k0 * k1;
      }, p, event);
    };
    zoom2.scaleTo = function(selection2, k2, p, event) {
      zoom2.transform(selection2, function() {
        var e2 = extent.apply(this, arguments), t0 = this.__zoom, p0 = p == null ? centroid(e2) : typeof p === "function" ? p.apply(this, arguments) : p, p1 = t0.invert(p0), k1 = typeof k2 === "function" ? k2.apply(this, arguments) : k2;
        return constrain(translate(scale(t0, k1), p0, p1), e2, translateExtent);
      }, p, event);
    };
    zoom2.translateBy = function(selection2, x2, y2, event) {
      zoom2.transform(selection2, function() {
        return constrain(this.__zoom.translate(
          typeof x2 === "function" ? x2.apply(this, arguments) : x2,
          typeof y2 === "function" ? y2.apply(this, arguments) : y2
        ), extent.apply(this, arguments), translateExtent);
      }, null, event);
    };
    zoom2.translateTo = function(selection2, x2, y2, p, event) {
      zoom2.transform(selection2, function() {
        var e2 = extent.apply(this, arguments), t = this.__zoom, p0 = p == null ? centroid(e2) : typeof p === "function" ? p.apply(this, arguments) : p;
        return constrain(identity2.translate(p0[0], p0[1]).scale(t.k).translate(
          typeof x2 === "function" ? -x2.apply(this, arguments) : -x2,
          typeof y2 === "function" ? -y2.apply(this, arguments) : -y2
        ), e2, translateExtent);
      }, p, event);
    };
    function scale(transform, k2) {
      k2 = Math.max(scaleExtent[0], Math.min(scaleExtent[1], k2));
      return k2 === transform.k ? transform : new Transform(k2, transform.x, transform.y);
    }
    function translate(transform, p0, p1) {
      var x2 = p0[0] - p1[0] * transform.k, y2 = p0[1] - p1[1] * transform.k;
      return x2 === transform.x && y2 === transform.y ? transform : new Transform(transform.k, x2, y2);
    }
    function centroid(extent2) {
      return [(+extent2[0][0] + +extent2[1][0]) / 2, (+extent2[0][1] + +extent2[1][1]) / 2];
    }
    function schedule2(transition2, transform, point, event) {
      transition2.on("start.zoom", function() {
        gesture(this, arguments).event(event).start();
      }).on("interrupt.zoom end.zoom", function() {
        gesture(this, arguments).event(event).end();
      }).tween("zoom", function() {
        var that = this, args = arguments, g2 = gesture(that, args).event(event), e2 = extent.apply(that, args), p = point == null ? centroid(e2) : typeof point === "function" ? point.apply(that, args) : point, w2 = Math.max(e2[1][0] - e2[0][0], e2[1][1] - e2[0][1]), a2 = that.__zoom, b = typeof transform === "function" ? transform.apply(that, args) : transform, i = interpolate2(a2.invert(p).concat(w2 / a2.k), b.invert(p).concat(w2 / b.k));
        return function(t) {
          if (t === 1)
            t = b;
          else {
            var l = i(t), k2 = w2 / l[2];
            t = new Transform(k2, p[0] - l[0] * k2, p[1] - l[1] * k2);
          }
          g2.zoom(null, t);
        };
      });
    }
    function gesture(that, args, clean) {
      return !clean && that.__zooming || new Gesture(that, args);
    }
    function Gesture(that, args) {
      this.that = that;
      this.args = args;
      this.active = 0;
      this.sourceEvent = null;
      this.extent = extent.apply(that, args);
      this.taps = 0;
    }
    Gesture.prototype = {
      event: function(event) {
        if (event)
          this.sourceEvent = event;
        return this;
      },
      start: function() {
        if (++this.active === 1) {
          this.that.__zooming = this;
          this.emit("start");
        }
        return this;
      },
      zoom: function(key, transform) {
        if (this.mouse && key !== "mouse")
          this.mouse[1] = transform.invert(this.mouse[0]);
        if (this.touch0 && key !== "touch")
          this.touch0[1] = transform.invert(this.touch0[0]);
        if (this.touch1 && key !== "touch")
          this.touch1[1] = transform.invert(this.touch1[0]);
        this.that.__zoom = transform;
        this.emit("zoom");
        return this;
      },
      end: function() {
        if (--this.active === 0) {
          delete this.that.__zooming;
          this.emit("end");
        }
        return this;
      },
      emit: function(type) {
        var d = select(this.that).datum();
        listeners.call(
          type,
          this.that,
          new ZoomEvent(type, {
            sourceEvent: this.sourceEvent,
            target: zoom2,
            type,
            transform: this.that.__zoom,
            dispatch: listeners
          }),
          d
        );
      }
    };
    function wheeled(event, ...args) {
      if (!filter2.apply(this, arguments))
        return;
      var g2 = gesture(this, args).event(event), t = this.__zoom, k2 = Math.max(scaleExtent[0], Math.min(scaleExtent[1], t.k * Math.pow(2, wheelDelta.apply(this, arguments)))), p = pointer(event);
      if (g2.wheel) {
        if (g2.mouse[0][0] !== p[0] || g2.mouse[0][1] !== p[1]) {
          g2.mouse[1] = t.invert(g2.mouse[0] = p);
        }
        clearTimeout(g2.wheel);
      } else if (t.k === k2)
        return;
      else {
        g2.mouse = [p, t.invert(p)];
        interrupt(this);
        g2.start();
      }
      noevent(event);
      g2.wheel = setTimeout(wheelidled, wheelDelay);
      g2.zoom("mouse", constrain(translate(scale(t, k2), g2.mouse[0], g2.mouse[1]), g2.extent, translateExtent));
      function wheelidled() {
        g2.wheel = null;
        g2.end();
      }
    }
    function mousedowned(event, ...args) {
      if (touchending || !filter2.apply(this, arguments))
        return;
      var currentTarget = event.currentTarget, g2 = gesture(this, args, true).event(event), v = select(event.view).on("mousemove.zoom", mousemoved, true).on("mouseup.zoom", mouseupped, true), p = pointer(event, currentTarget), x0 = event.clientX, y0 = event.clientY;
      dragDisable(event.view);
      nopropagation(event);
      g2.mouse = [p, this.__zoom.invert(p)];
      interrupt(this);
      g2.start();
      function mousemoved(event2) {
        noevent(event2);
        if (!g2.moved) {
          var dx = event2.clientX - x0, dy = event2.clientY - y0;
          g2.moved = dx * dx + dy * dy > clickDistance2;
        }
        g2.event(event2).zoom("mouse", constrain(translate(g2.that.__zoom, g2.mouse[0] = pointer(event2, currentTarget), g2.mouse[1]), g2.extent, translateExtent));
      }
      function mouseupped(event2) {
        v.on("mousemove.zoom mouseup.zoom", null);
        yesdrag(event2.view, g2.moved);
        noevent(event2);
        g2.event(event2).end();
      }
    }
    function dblclicked(event, ...args) {
      if (!filter2.apply(this, arguments))
        return;
      var t0 = this.__zoom, p0 = pointer(event.changedTouches ? event.changedTouches[0] : event, this), p1 = t0.invert(p0), k1 = t0.k * (event.shiftKey ? 0.5 : 2), t1 = constrain(translate(scale(t0, k1), p0, p1), extent.apply(this, args), translateExtent);
      noevent(event);
      if (duration > 0)
        select(this).transition().duration(duration).call(schedule2, t1, p0, event);
      else
        select(this).call(zoom2.transform, t1, p0, event);
    }
    function touchstarted(event, ...args) {
      if (!filter2.apply(this, arguments))
        return;
      var touches = event.touches, n = touches.length, g2 = gesture(this, args, event.changedTouches.length === n).event(event), started, i, t, p;
      nopropagation(event);
      for (i = 0; i < n; ++i) {
        t = touches[i], p = pointer(t, this);
        p = [p, this.__zoom.invert(p), t.identifier];
        if (!g2.touch0)
          g2.touch0 = p, started = true, g2.taps = 1 + !!touchstarting;
        else if (!g2.touch1 && g2.touch0[2] !== p[2])
          g2.touch1 = p, g2.taps = 0;
      }
      if (touchstarting)
        touchstarting = clearTimeout(touchstarting);
      if (started) {
        if (g2.taps < 2)
          touchfirst = p[0], touchstarting = setTimeout(function() {
            touchstarting = null;
          }, touchDelay);
        interrupt(this);
        g2.start();
      }
    }
    function touchmoved(event, ...args) {
      if (!this.__zooming)
        return;
      var g2 = gesture(this, args).event(event), touches = event.changedTouches, n = touches.length, i, t, p, l;
      noevent(event);
      for (i = 0; i < n; ++i) {
        t = touches[i], p = pointer(t, this);
        if (g2.touch0 && g2.touch0[2] === t.identifier)
          g2.touch0[0] = p;
        else if (g2.touch1 && g2.touch1[2] === t.identifier)
          g2.touch1[0] = p;
      }
      t = g2.that.__zoom;
      if (g2.touch1) {
        var p0 = g2.touch0[0], l0 = g2.touch0[1], p1 = g2.touch1[0], l1 = g2.touch1[1], dp = (dp = p1[0] - p0[0]) * dp + (dp = p1[1] - p0[1]) * dp, dl = (dl = l1[0] - l0[0]) * dl + (dl = l1[1] - l0[1]) * dl;
        t = scale(t, Math.sqrt(dp / dl));
        p = [(p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2];
        l = [(l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2];
      } else if (g2.touch0)
        p = g2.touch0[0], l = g2.touch0[1];
      else
        return;
      g2.zoom("touch", constrain(translate(t, p, l), g2.extent, translateExtent));
    }
    function touchended(event, ...args) {
      if (!this.__zooming)
        return;
      var g2 = gesture(this, args).event(event), touches = event.changedTouches, n = touches.length, i, t;
      nopropagation(event);
      if (touchending)
        clearTimeout(touchending);
      touchending = setTimeout(function() {
        touchending = null;
      }, touchDelay);
      for (i = 0; i < n; ++i) {
        t = touches[i];
        if (g2.touch0 && g2.touch0[2] === t.identifier)
          delete g2.touch0;
        else if (g2.touch1 && g2.touch1[2] === t.identifier)
          delete g2.touch1;
      }
      if (g2.touch1 && !g2.touch0)
        g2.touch0 = g2.touch1, delete g2.touch1;
      if (g2.touch0)
        g2.touch0[1] = this.__zoom.invert(g2.touch0[0]);
      else {
        g2.end();
        if (g2.taps === 2) {
          t = pointer(t, this);
          if (Math.hypot(touchfirst[0] - t[0], touchfirst[1] - t[1]) < tapDistance) {
            var p = select(this).on("dblclick.zoom");
            if (p)
              p.apply(this, arguments);
          }
        }
      }
    }
    zoom2.wheelDelta = function(_) {
      return arguments.length ? (wheelDelta = typeof _ === "function" ? _ : constant(+_), zoom2) : wheelDelta;
    };
    zoom2.filter = function(_) {
      return arguments.length ? (filter2 = typeof _ === "function" ? _ : constant(!!_), zoom2) : filter2;
    };
    zoom2.touchable = function(_) {
      return arguments.length ? (touchable = typeof _ === "function" ? _ : constant(!!_), zoom2) : touchable;
    };
    zoom2.extent = function(_) {
      return arguments.length ? (extent = typeof _ === "function" ? _ : constant([[+_[0][0], +_[0][1]], [+_[1][0], +_[1][1]]]), zoom2) : extent;
    };
    zoom2.scaleExtent = function(_) {
      return arguments.length ? (scaleExtent[0] = +_[0], scaleExtent[1] = +_[1], zoom2) : [scaleExtent[0], scaleExtent[1]];
    };
    zoom2.translateExtent = function(_) {
      return arguments.length ? (translateExtent[0][0] = +_[0][0], translateExtent[1][0] = +_[1][0], translateExtent[0][1] = +_[0][1], translateExtent[1][1] = +_[1][1], zoom2) : [[translateExtent[0][0], translateExtent[0][1]], [translateExtent[1][0], translateExtent[1][1]]];
    };
    zoom2.constrain = function(_) {
      return arguments.length ? (constrain = _, zoom2) : constrain;
    };
    zoom2.duration = function(_) {
      return arguments.length ? (duration = +_, zoom2) : duration;
    };
    zoom2.interpolate = function(_) {
      return arguments.length ? (interpolate2 = _, zoom2) : interpolate2;
    };
    zoom2.on = function() {
      var value = listeners.on.apply(listeners, arguments);
      return value === listeners ? zoom2 : value;
    };
    zoom2.clickDistance = function(_) {
      return arguments.length ? (clickDistance2 = (_ = +_) * _, zoom2) : Math.sqrt(clickDistance2);
    };
    zoom2.tapDistance = function(_) {
      return arguments.length ? (tapDistance = +_, zoom2) : tapDistance;
    };
    return zoom2;
  }
  var Position = /* @__PURE__ */ ((Position2) => {
    Position2["Left"] = "left";
    Position2["Top"] = "top";
    Position2["Right"] = "right";
    Position2["Bottom"] = "bottom";
    return Position2;
  })(Position || {});
  var SelectionMode = /* @__PURE__ */ ((SelectionMode2) => {
    SelectionMode2["Partial"] = "partial";
    SelectionMode2["Full"] = "full";
    return SelectionMode2;
  })(SelectionMode || {});
  var ConnectionLineType = /* @__PURE__ */ ((ConnectionLineType2) => {
    ConnectionLineType2["Bezier"] = "default";
    ConnectionLineType2["SimpleBezier"] = "simple-bezier";
    ConnectionLineType2["Straight"] = "straight";
    ConnectionLineType2["Step"] = "step";
    ConnectionLineType2["SmoothStep"] = "smoothstep";
    return ConnectionLineType2;
  })(ConnectionLineType || {});
  var ConnectionMode = /* @__PURE__ */ ((ConnectionMode2) => {
    ConnectionMode2["Strict"] = "strict";
    ConnectionMode2["Loose"] = "loose";
    return ConnectionMode2;
  })(ConnectionMode || {});
  var MarkerType = /* @__PURE__ */ ((MarkerType2) => {
    MarkerType2["Arrow"] = "arrow";
    MarkerType2["ArrowClosed"] = "arrowclosed";
    return MarkerType2;
  })(MarkerType || {});
  var PanOnScrollMode = /* @__PURE__ */ ((PanOnScrollMode2) => {
    PanOnScrollMode2["Free"] = "free";
    PanOnScrollMode2["Vertical"] = "vertical";
    PanOnScrollMode2["Horizontal"] = "horizontal";
    return PanOnScrollMode2;
  })(PanOnScrollMode || {});
  var PanelPosition = /* @__PURE__ */ ((PanelPosition2) => {
    PanelPosition2["TopLeft"] = "top-left";
    PanelPosition2["TopCenter"] = "top-center";
    PanelPosition2["TopRight"] = "top-right";
    PanelPosition2["BottomLeft"] = "bottom-left";
    PanelPosition2["BottomCenter"] = "bottom-center";
    PanelPosition2["BottomRight"] = "bottom-right";
    return PanelPosition2;
  })(PanelPosition || {});
  var ARIA_NODE_DESC_KEY = "vue-flow__node-desc";
  var ARIA_EDGE_DESC_KEY = "vue-flow__edge-desc";
  var ARIA_LIVE_MESSAGE = "vue-flow__aria-live";
  var elementSelectionKeys = ["Enter", " ", "Escape"];
  var arrowKeyDiffs = {
    ArrowUp: { x: 0, y: -1 },
    ArrowDown: { x: 0, y: 1 },
    ArrowLeft: { x: -1, y: 0 },
    ArrowRight: { x: 1, y: 0 }
  };
  function nodeToRect(node) {
    return __spreadProps(__spreadValues({}, node.computedPosition || { x: 0, y: 0 }), {
      width: node.dimensions.width || 0,
      height: node.dimensions.height || 0
    });
  }
  function getOverlappingArea(rectA, rectB) {
    const xOverlap = Math.max(0, Math.min(rectA.x + rectA.width, rectB.x + rectB.width) - Math.max(rectA.x, rectB.x));
    const yOverlap = Math.max(0, Math.min(rectA.y + rectA.height, rectB.y + rectB.height) - Math.max(rectA.y, rectB.y));
    return Math.ceil(xOverlap * yOverlap);
  }
  function getDimensions(node) {
    return {
      width: node.offsetWidth,
      height: node.offsetHeight
    };
  }
  function clamp2(val, min = 0, max = 1) {
    return Math.min(Math.max(val, min), max);
  }
  function clampPosition(position, extent) {
    return {
      x: clamp2(position.x, extent[0][0], extent[1][0]),
      y: clamp2(position.y, extent[0][1], extent[1][1])
    };
  }
  function getHostForElement(element) {
    const doc = element.getRootNode();
    if ("elementFromPoint" in doc) {
      return doc;
    }
    const window2 = useWindow();
    return window2.document;
  }
  function isEdge(element) {
    return element && typeof element === "object" && "id" in element && "source" in element && "target" in element;
  }
  function isGraphEdge(element) {
    return isEdge(element) && "sourceNode" in element && "targetNode" in element;
  }
  function isNode(element) {
    return element && typeof element === "object" && "id" in element && "position" in element && !isEdge(element);
  }
  function isGraphNode(element) {
    return isNode(element) && "computedPosition" in element;
  }
  function isRect(obj) {
    return !!obj.width && !!obj.height && !!obj.x && !!obj.y;
  }
  function parseNode(node, defaults = {}) {
    var _a2, _b;
    let initialState = defaults;
    if (!isGraphNode(node)) {
      initialState = __spreadProps(__spreadValues({
        type: (_b = (_a2 = node.type) != null ? _a2 : defaults.type) != null ? _b : "default",
        dimensions: (0, vue_runtime_esm_bundler_exports.markRaw)({
          width: 0,
          height: 0
        }),
        handleBounds: {
          source: [],
          target: []
        },
        computedPosition: (0, vue_runtime_esm_bundler_exports.markRaw)(__spreadValues({
          z: 0
        }, node.position)),
        draggable: void 0,
        selectable: void 0,
        connectable: void 0,
        focusable: void 0,
        selected: false,
        dragging: false,
        resizing: false,
        initialized: false
      }, defaults), {
        data: isDef2(node.data) ? node.data : {},
        events: (0, vue_runtime_esm_bundler_exports.markRaw)(isDef2(node.events) ? node.events : {})
      });
    }
    return Object.assign({}, initialState, node, { id: node.id.toString() });
  }
  function parseEdge(edge, defaults = {}) {
    var _a2, _b, _c, _d, _e;
    const events = isDef2(edge.events) ? edge.events : defaults.events && isDef2(defaults.events) ? defaults.events : {};
    const data = isDef2(edge.data) ? edge.data : defaults.data && isDef2(defaults.data) ? defaults.data : {};
    defaults = !isGraphEdge(edge) ? __spreadProps(__spreadValues({}, defaults), {
      sourceHandle: (edge.sourceHandle ? edge.sourceHandle.toString() : void 0) || defaults.sourceHandle,
      targetHandle: (edge.targetHandle ? edge.targetHandle.toString() : void 0) || defaults.targetHandle,
      type: (_b = (_a2 = edge.type) != null ? _a2 : defaults.type) != null ? _b : "default",
      source: edge.source.toString() || defaults.source,
      target: edge.target.toString() || defaults.target,
      updatable: (_c = edge.updatable) != null ? _c : defaults.updatable,
      selectable: (_d = edge.selectable) != null ? _d : defaults.selectable,
      focusable: (_e = edge.focusable) != null ? _e : defaults.focusable,
      data,
      events: (0, vue_runtime_esm_bundler_exports.markRaw)(events),
      label: (edge.label && typeof edge.label !== "string" ? (0, vue_runtime_esm_bundler_exports.markRaw)(edge.label) : edge.label) || defaults.label,
      interactionWidth: edge.interactionWidth || defaults.interactionWidth
    }) : defaults;
    return Object.assign({}, defaults, edge, { id: edge.id.toString() });
  }
  function getConnectedElements(nodeOrId, nodes, edges, dir) {
    const id2 = typeof nodeOrId === "string" ? nodeOrId : nodeOrId.id;
    const connectedIds = /* @__PURE__ */ new Set();
    const origin = dir === "source" ? "target" : "source";
    edges.forEach((edge) => {
      if (edge[origin] === id2) {
        connectedIds.add(edge[dir]);
      }
    });
    return nodes.filter((n) => connectedIds.has(n.id));
  }
  function getOutgoers(...args) {
    if (args.length === 3) {
      const [nodeOrId2, nodes, edges] = args;
      return getConnectedElements(nodeOrId2, nodes, edges, "target");
    }
    const [nodeOrId, elements] = args;
    const nodeId = typeof nodeOrId === "string" ? nodeOrId : nodeOrId.id;
    const outgoers = elements.filter((el) => isEdge(el) && el.source === nodeId);
    return outgoers.map((edge) => elements.find((el) => isNode(el) && el.id === edge.target));
  }
  function getIncomers(...args) {
    if (args.length === 3) {
      const [nodeOrId2, nodes, edges] = args;
      return getConnectedElements(nodeOrId2, nodes, edges, "source");
    }
    const [nodeOrId, elements] = args;
    const nodeId = typeof nodeOrId === "string" ? nodeOrId : nodeOrId.id;
    const incomers = elements.filter((el) => isEdge(el) && el.target === nodeId);
    return incomers.map((edge) => elements.find((el) => isNode(el) && el.id === edge.source));
  }
  function getEdgeId({ source, sourceHandle, target, targetHandle }) {
    return `vueflow__edge-${source}${sourceHandle != null ? sourceHandle : ""}-${target}${targetHandle != null ? targetHandle : ""}`;
  }
  function connectionExists(edge, elements) {
    return elements.some(
      (el) => isEdge(el) && el.source === edge.source && el.target === edge.target && (el.sourceHandle === edge.sourceHandle || !el.sourceHandle && !edge.sourceHandle) && (el.targetHandle === edge.targetHandle || !el.targetHandle && !edge.targetHandle)
    );
  }
  function rendererPointToPoint({ x: x2, y: y2 }, { x: tx, y: ty, zoom: tScale }) {
    return {
      x: x2 * tScale + tx,
      y: y2 * tScale + ty
    };
  }
  function pointToRendererPoint({ x: x2, y: y2 }, { x: tx, y: ty, zoom: tScale }, snapToGrid, [snapX, snapY]) {
    const position = {
      x: (x2 - tx) / tScale,
      y: (y2 - ty) / tScale
    };
    if (snapToGrid) {
      return {
        x: snapX * Math.round(position.x / snapX),
        y: snapY * Math.round(position.y / snapY)
      };
    }
    return position;
  }
  function getBoundsOfBoxes(box1, box2) {
    return {
      x: Math.min(box1.x, box2.x),
      y: Math.min(box1.y, box2.y),
      x2: Math.max(box1.x2, box2.x2),
      y2: Math.max(box1.y2, box2.y2)
    };
  }
  function rectToBox({ x: x2, y: y2, width, height }) {
    return {
      x: x2,
      y: y2,
      x2: x2 + width,
      y2: y2 + height
    };
  }
  function boxToRect({ x: x2, y: y2, x2: x22, y2: y22 }) {
    return {
      x: x2,
      y: y2,
      width: x22 - x2,
      height: y22 - y2
    };
  }
  function getRectOfNodes(nodes) {
    const box = nodes.reduce(
      (currBox, { computedPosition = { x: 0, y: 0 }, dimensions = { width: 0, height: 0 } } = {}) => getBoundsOfBoxes(
        currBox,
        rectToBox(__spreadValues(__spreadValues({}, computedPosition), dimensions))
      ),
      { x: Infinity, y: Infinity, x2: -Infinity, y2: -Infinity }
    );
    return boxToRect(box);
  }
  function getNodesInside(nodes, rect, { x: tx, y: ty, zoom: tScale } = { x: 0, y: 0, zoom: 1 }, partially = false, excludeNonSelectableNodes = false) {
    const paneRect = {
      x: (rect.x - tx) / tScale,
      y: (rect.y - ty) / tScale,
      width: rect.width / tScale,
      height: rect.height / tScale
    };
    return nodes.filter((node) => {
      const { computedPosition = { x: 0, y: 0 }, dimensions = { width: 0, height: 0 }, selectable } = node;
      if (excludeNonSelectableNodes && !selectable) {
        return false;
      }
      const nodeRect = __spreadProps(__spreadValues({}, computedPosition), { width: dimensions.width || 0, height: dimensions.height || 0 });
      const overlappingArea = getOverlappingArea(paneRect, nodeRect);
      const notInitialized = typeof dimensions.width === "undefined" || typeof dimensions.height === "undefined" || dimensions.width === 0 || dimensions.height === 0;
      const partiallyVisible = partially && overlappingArea > 0;
      const area = dimensions.width * dimensions.height;
      return notInitialized || partiallyVisible || overlappingArea >= area;
    });
  }
  function getConnectedEdges(nodesOrId, edges) {
    const nodeIds = /* @__PURE__ */ new Set();
    if (typeof nodesOrId === "string") {
      nodeIds.add(nodesOrId);
    } else if (nodesOrId.length >= 1) {
      nodesOrId.forEach((n) => nodeIds.add(n.id));
    }
    return edges.filter((edge) => nodeIds.has(edge.source) || nodeIds.has(edge.target));
  }
  function getTransformForBounds(bounds, width, height, minZoom, maxZoom, padding = 0.1, offset = { x: 0, y: 0 }) {
    var _a2, _b;
    const xZoom = width / (bounds.width * (1 + padding));
    const yZoom = height / (bounds.height * (1 + padding));
    const zoom2 = Math.min(xZoom, yZoom);
    const clampedZoom = clamp2(zoom2, minZoom, maxZoom);
    const boundsCenterX = bounds.x + bounds.width / 2;
    const boundsCenterY = bounds.y + bounds.height / 2;
    const x2 = width / 2 - boundsCenterX * clampedZoom + ((_a2 = offset.x) != null ? _a2 : 0);
    const y2 = height / 2 - boundsCenterY * clampedZoom + ((_b = offset.y) != null ? _b : 0);
    return { x: x2, y: y2, zoom: clampedZoom };
  }
  function getXYZPos(parentPos, computedPosition) {
    return {
      x: computedPosition.x + parentPos.x,
      y: computedPosition.y + parentPos.y,
      z: (parentPos.z > computedPosition.z ? parentPos.z : computedPosition.z) + 1
    };
  }
  function isParentSelected(node, findNode) {
    if (!node.parentNode) {
      return false;
    }
    const parent = findNode(node.parentNode);
    if (!parent) {
      return false;
    }
    if (parent.selected) {
      return true;
    }
    return isParentSelected(parent, findNode);
  }
  function getMarkerId(marker, vueFlowId) {
    if (typeof marker === "undefined") {
      return "";
    }
    if (typeof marker === "string") {
      return marker;
    }
    const idPrefix = vueFlowId ? `${vueFlowId}__` : "";
    return `${idPrefix}${Object.keys(marker).sort().map((key) => `${key}=${marker[key]}`).join("&")}`;
  }
  function calcAutoPanVelocity(value, min, max) {
    if (value < min) {
      return clamp2(Math.abs(value - min), 1, 50) / 50;
    } else if (value > max) {
      return -clamp2(Math.abs(value - max), 1, 50) / 50;
    }
    return 0;
  }
  function calcAutoPan(pos, bounds) {
    const xMovement = calcAutoPanVelocity(pos.x, 35, bounds.width - 35) * 20;
    const yMovement = calcAutoPanVelocity(pos.y, 35, bounds.height - 35) * 20;
    return [xMovement, yMovement];
  }
  function handleParentExpand(updateItem, parent) {
    var _a2, _b;
    if (parent) {
      const extendWidth = updateItem.position.x + updateItem.dimensions.width - parent.dimensions.width;
      const extendHeight = updateItem.position.y + updateItem.dimensions.height - parent.dimensions.height;
      if (extendWidth > 0 || extendHeight > 0 || updateItem.position.x < 0 || updateItem.position.y < 0) {
        let parentStyles = {};
        if (typeof parent.style === "function") {
          parentStyles = __spreadValues({}, parent.style(parent));
        } else if (parent.style) {
          parentStyles = __spreadValues({}, parent.style);
        }
        parentStyles.width = (_a2 = parentStyles.width) != null ? _a2 : `${parent.dimensions.width}px`;
        parentStyles.height = (_b = parentStyles.height) != null ? _b : `${parent.dimensions.height}px`;
        if (extendWidth > 0) {
          if (typeof parentStyles.width === "string") {
            const currWidth = Number(parentStyles.width.replace("px", ""));
            parentStyles.width = `${currWidth + extendWidth}px`;
          } else {
            parentStyles.width += extendWidth;
          }
        }
        if (extendHeight > 0) {
          if (typeof parentStyles.height === "string") {
            const currWidth = Number(parentStyles.height.replace("px", ""));
            parentStyles.height = `${currWidth + extendHeight}px`;
          } else {
            parentStyles.height += extendHeight;
          }
        }
        if (updateItem.position.x < 0) {
          const xDiff = Math.abs(updateItem.position.x);
          parent.position.x = parent.position.x - xDiff;
          if (typeof parentStyles.width === "string") {
            const currWidth = Number(parentStyles.width.replace("px", ""));
            parentStyles.width = `${currWidth + xDiff}px`;
          } else {
            parentStyles.width += xDiff;
          }
          updateItem.position.x = 0;
        }
        if (updateItem.position.y < 0) {
          const yDiff = Math.abs(updateItem.position.y);
          parent.position.y = parent.position.y - yDiff;
          if (typeof parentStyles.height === "string") {
            const currWidth = Number(parentStyles.height.replace("px", ""));
            parentStyles.height = `${currWidth + yDiff}px`;
          } else {
            parentStyles.height += yDiff;
          }
          updateItem.position.y = 0;
        }
        parent.dimensions.width = Number(parentStyles.width.toString().replace("px", ""));
        parent.dimensions.height = Number(parentStyles.height.toString().replace("px", ""));
        if (typeof parent.style === "function") {
          parent.style = (p) => {
            const styleFunc = parent.style;
            return __spreadValues(__spreadValues({}, styleFunc(p)), parentStyles);
          };
        } else {
          parent.style = __spreadValues(__spreadValues({}, parent.style), parentStyles);
        }
      }
    }
  }
  function applyChanges(changes, elements) {
    const addRemoveChanges = changes.filter((c) => c.type === "add" || c.type === "remove");
    addRemoveChanges.forEach((change) => {
      if (change.type === "add") {
        const index = elements.findIndex((el) => el.id === change.item.id);
        if (index === -1) {
          elements.push(change.item);
        }
      } else if (change.type === "remove") {
        const index = elements.findIndex((el) => el.id === change.id);
        if (index !== -1) {
          elements.splice(index, 1);
        }
      }
    });
    const elementIds = elements.map((el) => el.id);
    elements.forEach((element) => {
      var _a2, _b;
      const currentChanges = changes.filter((c) => c.id === element.id);
      for (const currentChange of currentChanges) {
        switch (currentChange.type) {
          case "select":
            element.selected = currentChange.selected;
            break;
          case "position":
            if (isGraphNode(element)) {
              if (typeof currentChange.position !== "undefined") {
                element.position = currentChange.position;
              }
              if (typeof currentChange.dragging !== "undefined") {
                element.dragging = currentChange.dragging;
              }
              if (element.expandParent && element.parentNode) {
                const parent = elements[elementIds.indexOf(element.parentNode)];
                if (parent && isGraphNode(parent)) {
                  handleParentExpand(element, parent);
                }
              }
            }
            break;
          case "dimensions":
            if (isGraphNode(element)) {
              if (typeof currentChange.dimensions !== "undefined") {
                element.dimensions = currentChange.dimensions;
              }
              if (typeof currentChange.updateStyle !== "undefined") {
                element.style = __spreadProps(__spreadValues({}, element.style || {}), {
                  width: `${(_a2 = currentChange.dimensions) == null ? void 0 : _a2.width}px`,
                  height: `${(_b = currentChange.dimensions) == null ? void 0 : _b.height}px`
                });
              }
              if (typeof currentChange.resizing !== "undefined") {
                element.resizing = currentChange.resizing;
              }
              if (element.expandParent && element.parentNode) {
                const parent = elements[elementIds.indexOf(element.parentNode)];
                if (parent && isGraphNode(parent)) {
                  if (!parent.initialized) {
                    (0, vue_runtime_esm_bundler_exports.nextTick)(() => {
                      handleParentExpand(element, parent);
                    });
                  } else {
                    handleParentExpand(element, parent);
                  }
                }
              }
              if (!element.initialized) {
                element.initialized = true;
              }
            }
            break;
        }
      }
    });
    return elements;
  }
  function createSelectionChange(id2, selected) {
    return {
      id: id2,
      type: "select",
      selected
    };
  }
  function createAdditionChange(item) {
    return {
      item,
      type: "add"
    };
  }
  function createNodeRemoveChange(id2) {
    return {
      id: id2,
      type: "remove"
    };
  }
  function createEdgeRemoveChange(id2, source, target) {
    return {
      id: id2,
      source,
      target,
      type: "remove"
    };
  }
  function getSelectionChanges(elements, selectedIds) {
    return elements.reduce(
      (res, item) => {
        let willBeSelected = selectedIds.includes(item.id);
        if (isDef2(item.selectable) && !item.selectable) {
          willBeSelected = false;
        }
        const key = isGraphNode(item) ? "changedNodes" : "changedEdges";
        if (!item.selected && willBeSelected) {
          res[key].push(createSelectionChange(item.id, true));
        } else if (item.selected && !willBeSelected) {
          res[key].push(createSelectionChange(item.id, false));
        }
        return res;
      },
      { changedNodes: [], changedEdges: [] }
    );
  }
  function createExtendedEventHook(defaultHandler) {
    const fns = /* @__PURE__ */ new Set();
    let hasDefaultHandler = false;
    const hasListeners = () => fns.size > 0;
    if (defaultHandler) {
      hasDefaultHandler = true;
      fns.add(defaultHandler);
    }
    const off = (fn) => {
      fns.delete(fn);
    };
    const on = (fn) => {
      if (defaultHandler && hasDefaultHandler) {
        fns.delete(defaultHandler);
      }
      fns.add(fn);
      const offFn = () => off(fn);
      tryOnScopeDispose2(offFn);
      return {
        off: offFn
      };
    };
    const trigger = (param) => {
      return Promise.all(Array.from(fns).map((fn) => fn(param)));
    };
    return {
      on,
      off,
      trigger,
      hasListeners,
      fns
    };
  }
  function hasSelector(target, selector2, node) {
    let current = target;
    do {
      if (current && current.matches(selector2)) {
        return true;
      } else if (current === node) {
        return false;
      }
      current = current.parentElement;
    } while (current);
    return false;
  }
  function getDragItems(nodes, nodesDraggable, mousePos, findNode, nodeId) {
    return nodes.filter(
      (n) => (n.selected || n.id === nodeId) && (!n.parentNode || !isParentSelected(n, findNode)) && (n.draggable || nodesDraggable && typeof n.draggable === "undefined")
    ).map(
      (n) => {
        var _a2, _b;
        return (0, vue_runtime_esm_bundler_exports.markRaw)({
          id: n.id,
          position: n.position || { x: 0, y: 0 },
          distance: {
            x: mousePos.x - ((_a2 = n.computedPosition) == null ? void 0 : _a2.x) || 0,
            y: mousePos.y - ((_b = n.computedPosition) == null ? void 0 : _b.y) || 0
          },
          from: n.computedPosition,
          extent: n.extent,
          parentNode: n.parentNode,
          dimensions: n.dimensions,
          expandParent: n.expandParent
        });
      }
    );
  }
  function getEventHandlerParams({
    id: id2,
    dragItems,
    findNode
  }) {
    const extendedDragItems = dragItems.reduce((acc, dragItem) => {
      const node = findNode(dragItem.id);
      if (node) {
        acc.push(node);
      }
      return acc;
    }, []);
    return [id2 ? extendedDragItems.find((n) => n.id === id2) : extendedDragItems[0], extendedDragItems];
  }
  function getExtentPadding(padding) {
    if (Array.isArray(padding)) {
      switch (padding.length) {
        case 1:
          return [padding[0], padding[0], padding[0], padding[0]];
        case 2:
          return [padding[0], padding[1], padding[0], padding[1]];
        case 3:
          return [padding[0], padding[1], padding[2], padding[1]];
        case 4:
          return padding;
        default:
          return [0, 0, 0, 0];
      }
    }
    return [padding, padding, padding, padding];
  }
  function getParentExtent(currentExtent, node, parent) {
    const [top, right, bottom, left] = typeof currentExtent !== "string" ? getExtentPadding(currentExtent.padding) : [0, 0, 0, 0];
    if (parent && typeof parent.computedPosition.x !== "undefined" && typeof parent.computedPosition.y !== "undefined" && typeof parent.dimensions.width !== "undefined" && typeof parent.dimensions.height !== "undefined") {
      return [
        [parent.computedPosition.x + left, parent.computedPosition.y + top],
        [
          parent.computedPosition.x + parent.dimensions.width - right,
          parent.computedPosition.y + parent.dimensions.height - bottom
        ]
      ];
    }
    return false;
  }
  function getExtent(item, triggerError, extent, parent) {
    let currentExtent = item.extent || extent;
    if ((currentExtent === "parent" || !Array.isArray(currentExtent) && (currentExtent == null ? void 0 : currentExtent.range) === "parent") && !item.expandParent) {
      if (item.parentNode && parent && item.dimensions.width && item.dimensions.height) {
        const parentExtent = getParentExtent(currentExtent, item, parent);
        if (parentExtent) {
          currentExtent = parentExtent;
        }
      } else {
        triggerError(new VueFlowError(ErrorCode.NODE_EXTENT_INVALID, item.id));
        currentExtent = extent;
      }
    } else if (Array.isArray(currentExtent)) {
      const parentX = (parent == null ? void 0 : parent.computedPosition.x) || 0;
      const parentY = (parent == null ? void 0 : parent.computedPosition.y) || 0;
      currentExtent = [
        [currentExtent[0][0] + parentX, currentExtent[0][1] + parentY],
        [currentExtent[1][0] + parentX, currentExtent[1][1] + parentY]
      ];
    } else if (currentExtent !== "parent" && (currentExtent == null ? void 0 : currentExtent.range) && Array.isArray(currentExtent.range)) {
      const [top, right, bottom, left] = getExtentPadding(currentExtent.padding);
      const parentX = (parent == null ? void 0 : parent.computedPosition.x) || 0;
      const parentY = (parent == null ? void 0 : parent.computedPosition.y) || 0;
      currentExtent = [
        [currentExtent.range[0][0] + parentX + left, currentExtent.range[0][1] + parentY + top],
        [currentExtent.range[1][0] + parentX - right, currentExtent.range[1][1] + parentY - bottom]
      ];
    }
    return currentExtent === "parent" ? [
      [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
      [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
    ] : currentExtent;
  }
  function clampNodeExtent({ width, height }, extent) {
    return [extent[0], [extent[1][0] - (width || 0), extent[1][1] - (height || 0)]];
  }
  function calcNextPosition(node, nextPosition, triggerError, nodeExtent, parentNode) {
    const extent = clampNodeExtent(node.dimensions, getExtent(node, triggerError, nodeExtent, parentNode));
    const clampedPos = clampPosition(nextPosition, extent);
    return {
      position: {
        x: clampedPos.x - ((parentNode == null ? void 0 : parentNode.computedPosition.x) || 0),
        y: clampedPos.y - ((parentNode == null ? void 0 : parentNode.computedPosition.y) || 0)
      },
      computedPosition: clampedPos
    };
  }
  function getHandlePosition(position, rect, handle) {
    var _a2, _b, _c, _d;
    const x2 = ((_a2 = handle == null ? void 0 : handle.x) != null ? _a2 : 0) + rect.x;
    const y2 = ((_b = handle == null ? void 0 : handle.y) != null ? _b : 0) + rect.y;
    const width = (_c = handle == null ? void 0 : handle.width) != null ? _c : rect.width;
    const height = (_d = handle == null ? void 0 : handle.height) != null ? _d : rect.height;
    switch (position) {
      case Position.Top:
        return {
          x: x2 + width / 2,
          y: y2
        };
      case Position.Right:
        return {
          x: x2 + width,
          y: y2 + height / 2
        };
      case Position.Bottom:
        return {
          x: x2 + width / 2,
          y: y2 + height
        };
      case Position.Left:
        return {
          x: x2,
          y: y2 + height / 2
        };
    }
  }
  function getHandle(bounds = [], handleId) {
    if (!bounds.length) {
      return null;
    }
    if (!handleId || bounds.length === 1) {
      return bounds[0];
    } else if (handleId) {
      return bounds.find((d) => d.id === handleId) || null;
    }
    return null;
  }
  function getEdgePositions(sourceNode, sourceHandle, sourcePosition, targetNode, targetHandle, targetPosition) {
    const sourceHandlePos = getHandlePosition(
      sourcePosition,
      __spreadValues(__spreadValues({}, sourceNode.dimensions), sourceNode.computedPosition),
      sourceHandle
    );
    const targetHandlePos = getHandlePosition(
      targetPosition,
      __spreadValues(__spreadValues({}, targetNode.dimensions), targetNode.computedPosition),
      targetHandle
    );
    return {
      sourceX: sourceHandlePos.x,
      sourceY: sourceHandlePos.y,
      targetX: targetHandlePos.x,
      targetY: targetHandlePos.y
    };
  }
  function isEdgeVisible({
    sourcePos,
    targetPos,
    sourceWidth,
    sourceHeight,
    targetWidth,
    targetHeight,
    width,
    height,
    viewport
  }) {
    const edgeBox = {
      x: Math.min(sourcePos.x, targetPos.x),
      y: Math.min(sourcePos.y, targetPos.y),
      x2: Math.max(sourcePos.x + sourceWidth, targetPos.x + targetWidth),
      y2: Math.max(sourcePos.y + sourceHeight, targetPos.y + targetHeight)
    };
    if (edgeBox.x === edgeBox.x2) {
      edgeBox.x2 += 1;
    }
    if (edgeBox.y === edgeBox.y2) {
      edgeBox.y2 += 1;
    }
    const viewBox = rectToBox({
      x: (0 - viewport.x) / viewport.zoom,
      y: (0 - viewport.y) / viewport.zoom,
      width: width / viewport.zoom,
      height: height / viewport.zoom
    });
    const xOverlap = Math.max(0, Math.min(viewBox.x2, edgeBox.x2) - Math.max(viewBox.x, edgeBox.x));
    const yOverlap = Math.max(0, Math.min(viewBox.y2, edgeBox.y2) - Math.max(viewBox.y, edgeBox.y));
    const overlappingArea = Math.ceil(xOverlap * yOverlap);
    return overlappingArea > 0;
  }
  function getEdgeZIndex(edge, findNode, elevateEdgesOnSelect = false) {
    const hasZIndex = typeof edge.zIndex === "number";
    let z2 = hasZIndex ? edge.zIndex : 0;
    const source = findNode(edge.source);
    const target = findNode(edge.target);
    if (!source || !target) {
      return 0;
    }
    if (elevateEdgesOnSelect) {
      z2 = hasZIndex ? edge.zIndex : Math.max(source.computedPosition.z || 0, target.computedPosition.z || 0);
    }
    return z2;
  }
  var ErrorCode = /* @__PURE__ */ ((ErrorCode2) => {
    ErrorCode2["MISSING_VIEWPORT_DIMENSIONS"] = "MISSING_VIEWPORT_DIMENSIONS";
    ErrorCode2["NODE_INVALID"] = "NODE_INVALID";
    ErrorCode2["NODE_NOT_FOUND"] = "NODE_NOT_FOUND";
    ErrorCode2["NODE_MISSING_PARENT"] = "NODE_MISSING_PARENT";
    ErrorCode2["NODE_TYPE_MISSING"] = "NODE_TYPE_MISSING";
    ErrorCode2["NODE_EXTENT_INVALID"] = "NODE_EXTENT_INVALID";
    ErrorCode2["EDGE_INVALID"] = "EDGE_INVALID";
    ErrorCode2["EDGE_NOT_FOUND"] = "EDGE_NOT_FOUND";
    ErrorCode2["EDGE_SOURCE_MISSING"] = "EDGE_SOURCE_MISSING";
    ErrorCode2["EDGE_TARGET_MISSING"] = "EDGE_TARGET_MISSING";
    ErrorCode2["EDGE_TYPE_MISSING"] = "EDGE_TYPE_MISSING";
    ErrorCode2["EDGE_SOURCE_TARGET_SAME"] = "EDGE_SOURCE_TARGET_SAME";
    ErrorCode2["EDGE_SOURCE_TARGET_MISSING"] = "EDGE_SOURCE_TARGET_MISSING";
    ErrorCode2["EDGE_ORPHANED"] = "EDGE_ORPHANED";
    return ErrorCode2;
  })(ErrorCode || {});
  var messages = {
    ["MISSING_VIEWPORT_DIMENSIONS"]: () => "The Vue Flow parent container needs a width and a height to render the graph",
    ["NODE_INVALID"]: (id2) => `Node is invalid
Node: ${id2}`,
    ["NODE_NOT_FOUND"]: (id2) => `Node not found
Node: ${id2}`,
    ["NODE_MISSING_PARENT"]: (id2, parentId) => `Node is missing a parent
Node: ${id2}
Parent: ${parentId}`,
    ["NODE_TYPE_MISSING"]: (type) => `Node type is missing
Type: ${type}`,
    ["NODE_EXTENT_INVALID"]: (id2) => `Only child nodes can use a parent extent
Node: ${id2}`,
    ["EDGE_INVALID"]: (id2) => `An edge needs a source and a target
Edge: ${id2}`,
    ["EDGE_SOURCE_MISSING"]: (id2, source) => `Edge source is missing
Edge: ${id2} 
Source: ${source}`,
    ["EDGE_TARGET_MISSING"]: (id2, target) => `Edge target is missing
Edge: ${id2} 
Target: ${target}`,
    ["EDGE_TYPE_MISSING"]: (type) => `Edge type is missing
Type: ${type}`,
    ["EDGE_SOURCE_TARGET_SAME"]: (id2, source, target) => `Edge source and target are the same
Edge: ${id2} 
Source: ${source} 
Target: ${target}`,
    ["EDGE_SOURCE_TARGET_MISSING"]: (id2, source, target) => `Edge source or target is missing
Edge: ${id2} 
Source: ${source} 
Target: ${target}`,
    ["EDGE_ORPHANED"]: (id2) => `Edge was orphaned (suddenly missing source or target) and has been removed
Edge: ${id2}`,
    ["EDGE_NOT_FOUND"]: (id2) => `Edge not found
Edge: ${id2}`
  };
  var VueFlowError = class extends Error {
    constructor(code, ...args) {
      var _a2;
      super((_a2 = messages[code]) == null ? void 0 : _a2.call(messages, ...args));
      this.code = code;
    }
  };
  function isMouseEvent(event) {
    return "clientX" in event;
  }
  function getEventPosition(event, bounds) {
    var _a3, _b2;
    var _a2, _b;
    const isMouseTriggered = isMouseEvent(event);
    const evtX = isMouseTriggered ? event.clientX : (_a2 = event.touches) == null ? void 0 : _a2[0].clientX;
    const evtY = isMouseTriggered ? event.clientY : (_b = event.touches) == null ? void 0 : _b[0].clientY;
    return {
      x: evtX - ((_a3 = bounds == null ? void 0 : bounds.left) != null ? _a3 : 0),
      y: evtY - ((_b2 = bounds == null ? void 0 : bounds.top) != null ? _b2 : 0)
    };
  }
  var isMacOs = () => {
    var _a2;
    return typeof navigator !== "undefined" && ((_a2 = navigator == null ? void 0 : navigator.userAgent) == null ? void 0 : _a2.indexOf("Mac")) >= 0;
  };
  function defaultValidHandleResult() {
    return {
      handleDomNode: null,
      isValid: false,
      connection: { source: "", target: "", sourceHandle: null, targetHandle: null },
      endHandle: null
    };
  }
  function resetRecentHandle(handleDomNode) {
    handleDomNode == null ? void 0 : handleDomNode.classList.remove("valid", "connecting", "vue-flow__handle-valid", "vue-flow__handle-connecting");
  }
  function getHandles(node, handleBounds, type, currentHandle) {
    return (handleBounds[type] || []).reduce((res, h22) => {
      var _a3, _b2;
      var _a2, _b;
      if (`${node.id}-${h22.id}-${type}` !== currentHandle) {
        res.push({
          id: h22.id || null,
          type,
          nodeId: node.id,
          x: ((_a3 = (_a2 = node.computedPosition) == null ? void 0 : _a2.x) != null ? _a3 : 0) + h22.x + h22.width / 2,
          y: ((_b2 = (_b = node.computedPosition) == null ? void 0 : _b.y) != null ? _b2 : 0) + h22.y + h22.height / 2,
          width: h22.width,
          height: h22.height
        });
      }
      return res;
    }, []);
  }
  function getClosestHandle(event, doc, pos, connectionRadius, handles, validator) {
    const { x: x2, y: y2 } = getEventPosition(event);
    const domNodes = doc.elementsFromPoint(x2, y2);
    const handleBelow = domNodes.find((el) => el.classList.contains("vue-flow__handle"));
    if (handleBelow) {
      const handleNodeId = handleBelow.getAttribute("data-nodeid");
      if (handleNodeId) {
        const handleType = getHandleType(void 0, handleBelow);
        const handleId = handleBelow.getAttribute("data-handleid");
        const validHandleResult = validator({ nodeId: handleNodeId, id: handleId, type: handleType });
        if (validHandleResult) {
          const handle = handles.find((h22) => h22.nodeId === handleNodeId && h22.type === handleType && h22.id === handleId);
          return {
            handle: {
              id: handleId,
              type: handleType,
              nodeId: handleNodeId,
              x: (handle == null ? void 0 : handle.x) || pos.x,
              y: (handle == null ? void 0 : handle.y) || pos.y
            },
            validHandleResult
          };
        }
      }
    }
    let closestHandles = [];
    let minDistance = Infinity;
    handles.forEach((handle) => {
      const distance2 = Math.sqrt((handle.x - pos.x) ** 2 + (handle.y - pos.y) ** 2);
      if (distance2 <= connectionRadius) {
        const validHandleResult = validator(handle);
        if (distance2 <= minDistance) {
          if (distance2 < minDistance) {
            closestHandles = [{ handle, validHandleResult }];
          } else if (distance2 === minDistance) {
            closestHandles.push({
              handle,
              validHandleResult
            });
          }
          minDistance = distance2;
        }
      }
    });
    if (!closestHandles.length) {
      return { handle: null, validHandleResult: defaultValidHandleResult() };
    }
    if (closestHandles.length === 1) {
      return closestHandles[0];
    }
    const hasValidHandle = closestHandles.some(({ validHandleResult }) => validHandleResult.isValid);
    const hasTargetHandle = closestHandles.some(({ handle }) => handle.type === "target");
    return closestHandles.find(
      ({ handle, validHandleResult }) => hasTargetHandle ? handle.type === "target" : hasValidHandle ? validHandleResult.isValid : true
    ) || closestHandles[0];
  }
  function isValidHandle(event, handle, connectionMode, fromNodeId, fromHandleId, fromType, isValidConnection, doc, edges, nodes, findNode) {
    const isTarget = fromType === "target";
    const handleDomNode = doc.querySelector(`.vue-flow__handle[data-id="${handle == null ? void 0 : handle.nodeId}-${handle == null ? void 0 : handle.id}-${handle == null ? void 0 : handle.type}"]`);
    const { x: x2, y: y2 } = getEventPosition(event);
    const elementBelow = doc.elementFromPoint(x2, y2);
    const handleToCheck = (elementBelow == null ? void 0 : elementBelow.classList.contains("vue-flow__handle")) ? elementBelow : handleDomNode;
    const result = defaultValidHandleResult();
    if (handleToCheck) {
      result.handleDomNode = handleToCheck;
      const handleType = getHandleType(void 0, handleToCheck);
      const handleNodeId = handleToCheck.getAttribute("data-nodeid");
      const handleId = handleToCheck.getAttribute("data-handleid");
      const connectable = handleToCheck.classList.contains("connectable");
      const connectableEnd = handleToCheck.classList.contains("connectableend");
      const connection = {
        source: isTarget ? handleNodeId : fromNodeId,
        sourceHandle: isTarget ? handleId : fromHandleId,
        target: isTarget ? fromNodeId : handleNodeId,
        targetHandle: isTarget ? fromHandleId : handleId
      };
      result.connection = connection;
      const isConnectable = connectable && connectableEnd;
      const isValid = isConnectable && (connectionMode === ConnectionMode.Strict ? isTarget && handleType === "source" || !isTarget && handleType === "target" : handleNodeId !== fromNodeId || handleId !== fromHandleId);
      result.endHandle = {
        nodeId: handleNodeId,
        handleId,
        type: handleType
      };
      if (isValid) {
        result.isValid = isValidConnection(connection, {
          edges,
          nodes,
          sourceNode: findNode(connection.source),
          targetNode: findNode(connection.target)
        });
      }
    }
    return result;
  }
  function getHandleLookup({ nodes, nodeId, handleId, handleType }) {
    return nodes.reduce((res, node) => {
      const { handleBounds } = node;
      let sourceHandles = [];
      let targetHandles = [];
      if (handleBounds) {
        sourceHandles = getHandles(node, handleBounds, "source", `${nodeId}-${handleId}-${handleType}`);
        targetHandles = getHandles(node, handleBounds, "target", `${nodeId}-${handleId}-${handleType}`);
      }
      res.push(...sourceHandles, ...targetHandles);
      return res;
    }, []);
  }
  function getHandleType(edgeUpdaterType, handleDomNode) {
    if (edgeUpdaterType) {
      return edgeUpdaterType;
    } else if (handleDomNode == null ? void 0 : handleDomNode.classList.contains("target")) {
      return "target";
    } else if (handleDomNode == null ? void 0 : handleDomNode.classList.contains("source")) {
      return "source";
    }
    return null;
  }
  function getConnectionStatus(isInsideConnectionRadius, isHandleValid) {
    let connectionStatus = null;
    if (isHandleValid) {
      connectionStatus = "valid";
    } else if (isInsideConnectionRadius && !isHandleValid) {
      connectionStatus = "invalid";
    }
    return connectionStatus;
  }
  var productionEnvs = ["production", "prod"];
  function warn2(message, ...args) {
    if (!productionEnvs.includes("development")) {
      console.warn(`[Vue Flow]: ${message}`, ...args);
    }
  }
  function getHandleBounds(selector2, nodeElement, zoom2) {
    const handles = nodeElement.querySelectorAll(`.vue-flow__handle${selector2}`);
    if (!handles || !handles.length) {
      return void 0;
    }
    const handlesArray = Array.from(handles);
    const nodeBounds = nodeElement.getBoundingClientRect();
    return handlesArray.map((handle) => {
      const handleBounds = handle.getBoundingClientRect();
      return __spreadValues({
        id: handle.getAttribute("data-handleid"),
        position: handle.getAttribute("data-handlepos"),
        x: (handleBounds.left - nodeBounds.left) / zoom2,
        y: (handleBounds.top - nodeBounds.top) / zoom2
      }, getDimensions(handle));
    });
  }
  function handleNodeClick(node, multiSelectionActive, addSelectedNodes, removeSelectedNodes, nodesSelectionActive, unselect = false, nodeEl) {
    nodesSelectionActive.value = false;
    if (!node.selected) {
      addSelectedNodes([node]);
    } else if (unselect || node.selected && multiSelectionActive) {
      removeSelectedNodes([node]);
      (0, vue_runtime_esm_bundler_exports.nextTick)(() => {
        nodeEl.blur();
      });
    }
  }
  function isDef2(val) {
    const unrefVal = (0, vue_runtime_esm_bundler_exports.unref)(val);
    return typeof unrefVal !== "undefined";
  }
  function addEdgeToStore(edgeParams, edges, triggerError) {
    if (!edgeParams.source || !edgeParams.target) {
      triggerError(new VueFlowError(ErrorCode.EDGE_INVALID, edgeParams.id));
      return false;
    }
    let edge;
    if (isEdge(edgeParams)) {
      edge = edgeParams;
    } else {
      edge = __spreadProps(__spreadValues({}, edgeParams), {
        id: getEdgeId(edgeParams)
      });
    }
    edge = parseEdge(edge);
    if (connectionExists(edge, edges)) {
      return false;
    }
    return edge;
  }
  function updateEdgeAction(edge, newConnection, edges, findEdge, shouldReplaceId, triggerError) {
    if (!newConnection.source || !newConnection.target) {
      triggerError(new VueFlowError(ErrorCode.EDGE_INVALID, edge.id));
      return false;
    }
    const foundEdge = findEdge(edge.id);
    if (!foundEdge) {
      triggerError(new VueFlowError(ErrorCode.EDGE_NOT_FOUND, edge.id));
      return false;
    }
    const _a2 = edge, { id: id2 } = _a2, rest = __objRest(_a2, ["id"]);
    const newEdge = __spreadProps(__spreadValues({}, rest), {
      id: shouldReplaceId ? getEdgeId(newConnection) : id2,
      source: newConnection.source,
      target: newConnection.target,
      sourceHandle: newConnection.sourceHandle,
      targetHandle: newConnection.targetHandle
    });
    edges.splice(edges.indexOf(foundEdge), 1, newEdge);
    return newEdge;
  }
  function createGraphNodes(nodes, currGraphNodes, findNode, triggerError) {
    const parentNodes = {};
    const graphNodes = nodes.reduce((nextNodes2, node) => {
      if (!isNode(node)) {
        triggerError(new VueFlowError(ErrorCode.NODE_INVALID));
        return nextNodes2;
      }
      const parsed = parseNode(node, __spreadProps(__spreadValues({}, findNode(node.id)), {
        parentNode: node.parentNode
      }));
      if (node.parentNode) {
        parentNodes[node.parentNode] = true;
      }
      return nextNodes2.concat(parsed);
    }, []);
    const nextNodes = [...graphNodes, ...currGraphNodes];
    for (const node of graphNodes) {
      const parentNode = nextNodes.find((n) => n.id === node.parentNode);
      if (node.parentNode && !parentNode) {
        triggerError(new VueFlowError(ErrorCode.NODE_MISSING_PARENT, node.id, node.parentNode));
      }
      if (node.parentNode || parentNodes[node.id]) {
        if (parentNodes[node.id]) {
          node.isParent = true;
        }
        if (parentNode) {
          parentNode.isParent = true;
        }
      }
    }
    return graphNodes;
  }
  function useDrag(params) {
    const {
      vueFlowRef,
      snapToGrid,
      snapGrid,
      noDragClassName,
      nodes,
      nodeExtent,
      nodeDragThreshold,
      viewport,
      autoPanOnNodeDrag,
      nodesDraggable,
      panBy,
      findNode,
      multiSelectionActive,
      nodesSelectionActive,
      selectNodesOnDrag,
      removeSelectedElements,
      addSelectedNodes,
      updateNodePositions,
      emits
    } = useVueFlow();
    const { onStart, onDrag, onStop, el, disabled, id: id2, selectable, dragHandle } = params;
    const dragging = (0, vue_runtime_esm_bundler_exports.ref)(false);
    let dragItems = [];
    let dragHandler;
    let containerBounds = null;
    let lastPos = { x: void 0, y: void 0 };
    let mousePosition = { x: 0, y: 0 };
    let dragEvent = null;
    let dragStarted = false;
    let autoPanId = 0;
    let autoPanStarted = false;
    const getPointerPosition = useGetPointerPosition();
    const updateNodes = ({ x: x2, y: y2 }) => {
      lastPos = { x: x2, y: y2 };
      let hasChange = false;
      dragItems = dragItems.map((n) => {
        const nextPosition = { x: x2 - n.distance.x, y: y2 - n.distance.y };
        if (snapToGrid.value) {
          nextPosition.x = snapGrid.value[0] * Math.round(nextPosition.x / snapGrid.value[0]);
          nextPosition.y = snapGrid.value[1] * Math.round(nextPosition.y / snapGrid.value[1]);
        }
        const { computedPosition } = calcNextPosition(
          n,
          nextPosition,
          emits.error,
          nodeExtent.value,
          n.parentNode ? findNode(n.parentNode) : void 0
        );
        hasChange = hasChange || n.position.x !== computedPosition.x || n.position.y !== computedPosition.y;
        n.position = computedPosition;
        return n;
      });
      if (!hasChange) {
        return;
      }
      updateNodePositions(dragItems, true, true);
      dragging.value = true;
      if (dragEvent) {
        const [currentNode, nodes2] = getEventHandlerParams({
          id: id2,
          dragItems,
          findNode
        });
        onDrag({ event: dragEvent, node: currentNode, nodes: nodes2 });
      }
    };
    const autoPan = () => {
      var _a2, _b;
      if (!containerBounds) {
        return;
      }
      const [xMovement, yMovement] = calcAutoPan(mousePosition, containerBounds);
      if (xMovement !== 0 || yMovement !== 0) {
        const nextPos = {
          x: ((_a2 = lastPos.x) != null ? _a2 : 0) - xMovement / viewport.value.zoom,
          y: ((_b = lastPos.y) != null ? _b : 0) - yMovement / viewport.value.zoom
        };
        if (panBy({ x: xMovement, y: yMovement })) {
          updateNodes(nextPos);
        }
      }
      autoPanId = requestAnimationFrame(autoPan);
    };
    const startDrag = (event, nodeEl) => {
      dragStarted = true;
      const node = findNode(id2);
      if (!selectNodesOnDrag.value && !multiSelectionActive.value && node) {
        if (!node.selected) {
          removeSelectedElements();
        }
      }
      if (node && toValue(selectable) && selectNodesOnDrag.value) {
        handleNodeClick(
          node,
          multiSelectionActive.value,
          addSelectedNodes,
          removeSelectedElements,
          nodesSelectionActive,
          false,
          nodeEl
        );
      }
      const pointerPos = getPointerPosition(event);
      lastPos = pointerPos;
      dragItems = getDragItems(nodes.value, nodesDraggable.value, pointerPos, findNode, id2);
      if (dragItems.length) {
        const [currentNode, nodes2] = getEventHandlerParams({
          id: id2,
          dragItems,
          findNode
        });
        onStart({ event: event.sourceEvent, node: currentNode, nodes: nodes2 });
      }
    };
    const eventStart = (event, nodeEl) => {
      var _a2;
      if (nodeDragThreshold.value === 0) {
        startDrag(event, nodeEl);
      }
      lastPos = getPointerPosition(event);
      containerBounds = ((_a2 = vueFlowRef.value) == null ? void 0 : _a2.getBoundingClientRect()) || null;
      mousePosition = getEventPosition(event.sourceEvent, containerBounds);
    };
    const eventDrag = (event, nodeEl) => {
      var _a2, _b;
      const pointerPos = getPointerPosition(event);
      if (!autoPanStarted && dragStarted && autoPanOnNodeDrag.value) {
        autoPanStarted = true;
        autoPan();
      }
      if (!dragStarted) {
        const x2 = pointerPos.xSnapped - ((_a2 = lastPos.x) != null ? _a2 : 0);
        const y2 = pointerPos.ySnapped - ((_b = lastPos.y) != null ? _b : 0);
        const distance2 = Math.sqrt(x2 * x2 + y2 * y2);
        if (distance2 > nodeDragThreshold.value) {
          startDrag(event, nodeEl);
        }
      }
      if ((lastPos.x !== pointerPos.xSnapped || lastPos.y !== pointerPos.ySnapped) && dragItems.length && dragStarted) {
        dragEvent = event.sourceEvent;
        mousePosition = getEventPosition(event.sourceEvent, containerBounds);
        updateNodes(pointerPos);
      }
    };
    const eventEnd = (event) => {
      if (!dragStarted) {
        return;
      }
      dragging.value = false;
      autoPanStarted = false;
      dragStarted = false;
      cancelAnimationFrame(autoPanId);
      if (dragItems.length) {
        updateNodePositions(dragItems, false, false);
        const [currentNode, nodes2] = getEventHandlerParams({
          id: id2,
          dragItems,
          findNode
        });
        onStop({ event: event.sourceEvent, node: currentNode, nodes: nodes2 });
      }
    };
    (0, vue_runtime_esm_bundler_exports.watch)([() => toValue(disabled), el], ([isDisabled, nodeEl], _, onCleanup) => {
      if (nodeEl) {
        const selection2 = select(nodeEl);
        if (!isDisabled) {
          dragHandler = drag().on("start", (event) => eventStart(event, nodeEl)).on("drag", (event) => eventDrag(event, nodeEl)).on("end", (event) => eventEnd(event)).filter((event) => {
            const target = event.target;
            const unrefDragHandle = toValue(dragHandle);
            return !event.button && (!noDragClassName.value || !hasSelector(target, `.${noDragClassName.value}`, nodeEl) && (!unrefDragHandle || hasSelector(target, unrefDragHandle, nodeEl)));
          });
          selection2.call(dragHandler);
        }
        onCleanup(() => {
          selection2.on(".drag", null);
          if (dragHandler) {
            dragHandler.on("start", null);
            dragHandler.on("drag", null);
            dragHandler.on("end", null);
          }
        });
      }
    });
    return dragging;
  }
  function createHooks() {
    return {
      edgesChange: createExtendedEventHook(),
      nodesChange: createExtendedEventHook(),
      nodeDoubleClick: createExtendedEventHook(),
      nodeClick: createExtendedEventHook(),
      nodeMouseEnter: createExtendedEventHook(),
      nodeMouseMove: createExtendedEventHook(),
      nodeMouseLeave: createExtendedEventHook(),
      nodeContextMenu: createExtendedEventHook(),
      nodeDragStart: createExtendedEventHook(),
      nodeDrag: createExtendedEventHook(),
      nodeDragStop: createExtendedEventHook(),
      nodesInitialized: createExtendedEventHook(),
      miniMapNodeClick: createExtendedEventHook(),
      miniMapNodeDoubleClick: createExtendedEventHook(),
      miniMapNodeMouseEnter: createExtendedEventHook(),
      miniMapNodeMouseMove: createExtendedEventHook(),
      miniMapNodeMouseLeave: createExtendedEventHook(),
      connect: createExtendedEventHook(),
      connectStart: createExtendedEventHook(),
      connectEnd: createExtendedEventHook(),
      clickConnectStart: createExtendedEventHook(),
      clickConnectEnd: createExtendedEventHook(),
      paneReady: createExtendedEventHook(),
      move: createExtendedEventHook(),
      moveStart: createExtendedEventHook(),
      moveEnd: createExtendedEventHook(),
      selectionDragStart: createExtendedEventHook(),
      selectionDrag: createExtendedEventHook(),
      selectionDragStop: createExtendedEventHook(),
      selectionContextMenu: createExtendedEventHook(),
      selectionStart: createExtendedEventHook(),
      selectionEnd: createExtendedEventHook(),
      viewportChangeStart: createExtendedEventHook(),
      viewportChange: createExtendedEventHook(),
      viewportChangeEnd: createExtendedEventHook(),
      paneScroll: createExtendedEventHook(),
      paneClick: createExtendedEventHook(),
      paneContextMenu: createExtendedEventHook(),
      paneMouseEnter: createExtendedEventHook(),
      paneMouseMove: createExtendedEventHook(),
      paneMouseLeave: createExtendedEventHook(),
      edgeContextMenu: createExtendedEventHook(),
      edgeMouseEnter: createExtendedEventHook(),
      edgeMouseMove: createExtendedEventHook(),
      edgeMouseLeave: createExtendedEventHook(),
      edgeDoubleClick: createExtendedEventHook(),
      edgeClick: createExtendedEventHook(),
      edgeUpdateStart: createExtendedEventHook(),
      edgeUpdate: createExtendedEventHook(),
      edgeUpdateEnd: createExtendedEventHook(),
      updateNodeInternals: createExtendedEventHook(),
      error: createExtendedEventHook((err) => warn2(err.message))
    };
  }
  function useHooks(emit, hooks) {
    (0, vue_runtime_esm_bundler_exports.onBeforeMount)(() => {
      for (const [key, value] of Object.entries(hooks.value)) {
        const listener = (data) => {
          emit(key, data);
        };
        value.fns.add(listener);
        tryOnScopeDispose2(() => {
          value.off(listener);
        });
      }
    });
  }
  var _hoisted_1$9 = ["data-id", "data-handleid", "data-nodeid", "data-handlepos"];
  var __default__$f = {
    name: "Handle",
    compatConfig: { MODE: 3 }
  };
  var _sfc_main$f = /* @__PURE__ */ (0, vue_runtime_esm_bundler_exports.defineComponent)(__spreadProps(__spreadValues({}, __default__$f), {
    props: {
      id: {},
      type: {},
      position: { default: () => Position.Top },
      isValidConnection: { type: Function },
      connectable: { type: [Boolean, Number, String, Function], default: void 0 },
      connectableStart: { type: Boolean, default: true },
      connectableEnd: { type: Boolean, default: true }
    },
    setup(__props) {
      const props = (0, vue_runtime_esm_bundler_exports.createPropsRestProxy)(__props, ["position", "connectable", "connectableStart", "connectableEnd", "id"]);
      const type = toRef3(() => {
        var _a2;
        return (_a2 = props.type) != null ? _a2 : "source";
      });
      const isValidConnection = toRef3(() => {
        var _a2;
        return (_a2 = props.isValidConnection) != null ? _a2 : null;
      });
      const {
        connectionStartHandle,
        connectionClickStartHandle,
        connectionEndHandle,
        vueFlowRef,
        nodesConnectable,
        noDragClassName,
        noPanClassName
      } = useVueFlow();
      const { id: nodeId, node, nodeEl, connectedEdges } = useNode();
      const handle = (0, vue_runtime_esm_bundler_exports.ref)();
      const handleId = toRef3(() => {
        var _a2;
        return (_a2 = __props.id) != null ? _a2 : `${nodeId}__handle-${__props.position}`;
      });
      const isConnectableStart = toRef3(() => typeof __props.connectableStart !== "undefined" ? __props.connectableStart : true);
      const isConnectableEnd = toRef3(() => typeof __props.connectableEnd !== "undefined" ? __props.connectableEnd : true);
      const isConnecting = toRef3(
        () => {
          var _a2, _b, _c, _d, _e, _f;
          return ((_a2 = connectionStartHandle.value) == null ? void 0 : _a2.nodeId) === nodeId && ((_b = connectionStartHandle.value) == null ? void 0 : _b.handleId) === handleId.value && ((_c = connectionStartHandle.value) == null ? void 0 : _c.type) === type.value || ((_d = connectionEndHandle.value) == null ? void 0 : _d.nodeId) === nodeId && ((_e = connectionEndHandle.value) == null ? void 0 : _e.handleId) === handleId.value && ((_f = connectionEndHandle.value) == null ? void 0 : _f.type) === type.value;
        }
      );
      const isClickConnecting = toRef3(
        () => {
          var _a2, _b, _c;
          return ((_a2 = connectionClickStartHandle.value) == null ? void 0 : _a2.nodeId) === nodeId && ((_b = connectionClickStartHandle.value) == null ? void 0 : _b.handleId) === handleId.value && ((_c = connectionClickStartHandle.value) == null ? void 0 : _c.type) === type.value;
        }
      );
      const { handlePointerDown, handleClick } = useHandle({
        nodeId,
        handleId,
        isValidConnection,
        type
      });
      const isConnectable = (0, vue_runtime_esm_bundler_exports.computed)(() => {
        if (typeof __props.connectable === "string" && __props.connectable === "single") {
          return !connectedEdges.value.some((edge) => {
            const id2 = edge[`${type.value}Handle`];
            if (edge[type.value] !== nodeId) {
              return false;
            }
            return id2 ? id2 === handleId.value : true;
          });
        }
        if (typeof __props.connectable === "number") {
          return connectedEdges.value.filter((edge) => {
            const id2 = edge[`${type.value}Handle`];
            if (edge[type.value] !== nodeId) {
              return false;
            }
            return id2 ? id2 === handleId.value : true;
          }).length < __props.connectable;
        }
        if (typeof __props.connectable === "function") {
          return __props.connectable(node, connectedEdges.value);
        }
        return isDef2(__props.connectable) ? __props.connectable : nodesConnectable.value;
      });
      until2(() => node.initialized).toBe(true, { flush: "post" }).then(() => {
        var _a3;
        var _a2;
        const existingBounds = (_a2 = node.handleBounds[type.value]) == null ? void 0 : _a2.find((b) => b.id === handleId.value);
        if (!vueFlowRef.value || existingBounds) {
          return;
        }
        const viewportNode = vueFlowRef.value.querySelector(".vue-flow__transformationpane");
        if (!nodeEl.value || !handle.value || !viewportNode || !handleId.value) {
          return;
        }
        const nodeBounds = nodeEl.value.getBoundingClientRect();
        const handleBounds = handle.value.getBoundingClientRect();
        const style = window.getComputedStyle(viewportNode);
        const { m22: zoom2 } = new window.DOMMatrixReadOnly(style.transform);
        const nextBounds = __spreadValues({
          id: handleId.value,
          position: __props.position,
          x: (handleBounds.left - nodeBounds.left) / zoom2,
          y: (handleBounds.top - nodeBounds.top) / zoom2
        }, getDimensions(handle.value));
        node.handleBounds[type.value] = [...(_a3 = node.handleBounds[type.value]) != null ? _a3 : [], nextBounds];
      });
      (0, vue_runtime_esm_bundler_exports.onUnmounted)(() => {
        const handleBounds = node.handleBounds[type.value];
        if (handleBounds) {
          node.handleBounds[type.value] = handleBounds.filter((b) => b.id !== handleId.value);
        }
      });
      function onPointerDown(event) {
        const isMouseTriggered = isMouseEvent(event);
        if (isConnectable.value && isConnectableStart.value && (isMouseTriggered && event.button === 0 || !isMouseTriggered)) {
          handlePointerDown(event);
        }
      }
      function onClick(event) {
        if (!nodeId || !connectionClickStartHandle.value && !isConnectableStart.value) {
          return;
        }
        if (isConnectable.value) {
          handleClick(event);
        }
      }
      return (_ctx, _cache) => {
        return (0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", {
          ref_key: "handle",
          ref: handle,
          "data-id": `${(0, vue_runtime_esm_bundler_exports.unref)(nodeId)}-${(0, vue_runtime_esm_bundler_exports.unref)(handleId)}-${(0, vue_runtime_esm_bundler_exports.unref)(type)}`,
          "data-handleid": (0, vue_runtime_esm_bundler_exports.unref)(handleId),
          "data-nodeid": (0, vue_runtime_esm_bundler_exports.unref)(nodeId),
          "data-handlepos": _ctx.position,
          class: (0, vue_runtime_esm_bundler_exports.normalizeClass)(["vue-flow__handle", [
            `vue-flow__handle-${_ctx.position}`,
            `vue-flow__handle-${(0, vue_runtime_esm_bundler_exports.unref)(handleId)}`,
            (0, vue_runtime_esm_bundler_exports.unref)(noDragClassName),
            (0, vue_runtime_esm_bundler_exports.unref)(noPanClassName),
            (0, vue_runtime_esm_bundler_exports.unref)(type),
            {
              connectable: isConnectable.value,
              connecting: (0, vue_runtime_esm_bundler_exports.unref)(isClickConnecting),
              connectablestart: (0, vue_runtime_esm_bundler_exports.unref)(isConnectableStart),
              connectableend: (0, vue_runtime_esm_bundler_exports.unref)(isConnectableEnd),
              connectionindicator: isConnectable.value && ((0, vue_runtime_esm_bundler_exports.unref)(isConnectableStart) && !(0, vue_runtime_esm_bundler_exports.unref)(isConnecting) || (0, vue_runtime_esm_bundler_exports.unref)(isConnectableEnd) && (0, vue_runtime_esm_bundler_exports.unref)(isConnecting))
            }
          ]]),
          onMousedown: onPointerDown,
          onTouchstartPassive: onPointerDown,
          onClick
        }, [
          (0, vue_runtime_esm_bundler_exports.renderSlot)(_ctx.$slots, "default", { id: _ctx.id })
        ], 42, _hoisted_1$9);
      };
    }
  }));
  var DefaultNode = function({
    sourcePosition = Position.Bottom,
    targetPosition = Position.Top,
    label,
    connectable = true,
    isValidTargetPos,
    isValidSourcePos
  }) {
    return [
      (0, vue_runtime_esm_bundler_exports.h)(_sfc_main$f, { type: "target", position: targetPosition, connectable, isValidConnection: isValidTargetPos }),
      typeof label !== "string" && label ? (0, vue_runtime_esm_bundler_exports.h)(label) : (0, vue_runtime_esm_bundler_exports.h)("div", { innerHTML: label }),
      (0, vue_runtime_esm_bundler_exports.h)(_sfc_main$f, { type: "source", position: sourcePosition, connectable, isValidConnection: isValidSourcePos })
    ];
  };
  DefaultNode.props = ["sourcePosition", "targetPosition", "label", "isValidTargetPos", "isValidSourcePos", "connectable"];
  DefaultNode.inheritAttrs = false;
  DefaultNode.compatConfig = { MODE: 3 };
  var DefaultNode$1 = DefaultNode;
  var InputNode = function({
    sourcePosition = Position.Bottom,
    label,
    connectable = true,
    isValidSourcePos
  }) {
    return [
      typeof label !== "string" && label ? (0, vue_runtime_esm_bundler_exports.h)(label) : (0, vue_runtime_esm_bundler_exports.h)("div", { innerHTML: label }),
      (0, vue_runtime_esm_bundler_exports.h)(_sfc_main$f, { type: "source", position: sourcePosition, connectable, isValidConnection: isValidSourcePos })
    ];
  };
  InputNode.props = ["sourcePosition", "label", "isValidSourcePos", "connectable"];
  InputNode.inheritAttrs = false;
  InputNode.compatConfig = { MODE: 3 };
  var InputNode$1 = InputNode;
  var OutputNode = function({
    targetPosition = Position.Top,
    label,
    connectable = true,
    isValidTargetPos
  }) {
    return [
      (0, vue_runtime_esm_bundler_exports.h)(_sfc_main$f, { type: "target", position: targetPosition, connectable, isValidConnection: isValidTargetPos }),
      typeof label !== "string" && label ? (0, vue_runtime_esm_bundler_exports.h)(label) : (0, vue_runtime_esm_bundler_exports.h)("div", { innerHTML: label })
    ];
  };
  OutputNode.props = ["targetPosition", "label", "isValidTargetPos", "connectable"];
  OutputNode.inheritAttrs = false;
  OutputNode.compatConfig = { MODE: 3 };
  var OutputNode$1 = OutputNode;
  var VueFlow = Symbol("vueFlow");
  var NodeId = Symbol("nodeId");
  var NodeRef = Symbol("nodeRef");
  var EdgeId = Symbol("edgeId");
  var EdgeRef = Symbol("edgeRef");
  var Slots = Symbol("slots");
  var NodeWrapper = (0, vue_runtime_esm_bundler_exports.defineComponent)({
    name: "Node",
    compatConfig: { MODE: 3 },
    props: ["name", "type", "id", "draggable", "selectable", "focusable", "connectable", "node", "resizeObserver"],
    setup(props) {
      (0, vue_runtime_esm_bundler_exports.provide)(NodeId, props.id);
      const {
        id: vueFlowId,
        edges,
        noPanClassName,
        selectNodesOnDrag,
        nodesSelectionActive,
        multiSelectionActive,
        emits,
        findNode,
        removeSelectedNodes,
        addSelectedNodes,
        updateNodeDimensions,
        onUpdateNodeInternals,
        getIntersectingNodes,
        getNodeTypes,
        nodeExtent,
        elevateNodesOnSelect,
        disableKeyboardA11y,
        ariaLiveMessage,
        snapToGrid,
        snapGrid,
        nodeDragThreshold
      } = useVueFlow();
      const updateNodePositions = useUpdateNodePositions();
      const node = useVModel(props, "node");
      const parentNode = (0, vue_runtime_esm_bundler_exports.computed)(() => findNode(node.value.parentNode));
      const connectedEdges = (0, vue_runtime_esm_bundler_exports.computed)(() => getConnectedEdges([node.value], edges.value));
      const nodeElement = (0, vue_runtime_esm_bundler_exports.ref)(null);
      (0, vue_runtime_esm_bundler_exports.provide)(NodeRef, nodeElement);
      const { emit, on } = useNodeHooks(node.value, emits);
      const dragging = useDrag({
        id: props.id,
        el: nodeElement,
        disabled: () => !props.draggable,
        selectable: () => props.selectable,
        dragHandle: () => node.value.dragHandle,
        onStart(args) {
          emit.dragStart(__spreadProps(__spreadValues({}, args), { intersections: getIntersectingNodes(node.value) }));
        },
        onDrag(args) {
          emit.drag(__spreadProps(__spreadValues({}, args), { intersections: getIntersectingNodes(node.value) }));
        },
        onStop(args) {
          emit.dragStop(__spreadProps(__spreadValues({}, args), { intersections: getIntersectingNodes(node.value) }));
        }
      });
      const getClass = (0, vue_runtime_esm_bundler_exports.computed)(() => node.value.class instanceof Function ? node.value.class(node.value) : node.value.class);
      const getStyle = (0, vue_runtime_esm_bundler_exports.computed)(() => {
        const styles = (node.value.style instanceof Function ? node.value.style(node.value) : node.value.style) || {};
        const width = node.value.width instanceof Function ? node.value.width(node.value) : node.value.width;
        const height = node.value.height instanceof Function ? node.value.height(node.value) : node.value.height;
        if (width) {
          styles.width = typeof width === "string" ? width : `${width}px`;
        }
        if (height) {
          styles.height = typeof height === "string" ? height : `${height}px`;
        }
        return styles;
      });
      const zIndex = () => {
        var _a2, _b;
        return Number((_b = (_a2 = node.value.zIndex) != null ? _a2 : getStyle.value.zIndex) != null ? _b : 0);
      };
      onUpdateNodeInternals((updateIds) => {
        if (updateIds.includes(props.id)) {
          updateInternals();
        }
      });
      (0, vue_runtime_esm_bundler_exports.onMounted)(() => {
        props.resizeObserver.observe(nodeElement.value);
      });
      (0, vue_runtime_esm_bundler_exports.onBeforeUnmount)(() => {
        props.resizeObserver.unobserve(nodeElement.value);
      });
      (0, vue_runtime_esm_bundler_exports.watch)(
        [() => node.value.type, () => node.value.sourcePosition, () => node.value.targetPosition],
        () => {
          updateNodeDimensions([{ id: props.id, nodeElement: nodeElement.value, forceUpdate: true }]);
        },
        { flush: "pre" }
      );
      (0, vue_runtime_esm_bundler_exports.watch)(
        [
          () => node.value.position.x,
          () => node.value.position.y,
          () => {
            var _a2;
            return (_a2 = parentNode.value) == null ? void 0 : _a2.computedPosition.x;
          },
          () => {
            var _a2;
            return (_a2 = parentNode.value) == null ? void 0 : _a2.computedPosition.y;
          },
          () => {
            var _a2;
            return (_a2 = parentNode.value) == null ? void 0 : _a2.computedPosition.z;
          },
          () => zIndex(),
          () => node.value.selected,
          () => node.value.dimensions.height,
          () => node.value.dimensions.width,
          () => {
            var _a2;
            return (_a2 = parentNode.value) == null ? void 0 : _a2.dimensions.height;
          },
          () => {
            var _a2;
            return (_a2 = parentNode.value) == null ? void 0 : _a2.dimensions.width;
          }
        ],
        ([newX, newY, parentX, parentY, parentZ, nodeZIndex]) => {
          const xyzPos = {
            x: newX,
            y: newY,
            z: nodeZIndex + (elevateNodesOnSelect.value ? node.value.selected ? 1e3 : 0 : 0)
          };
          if (typeof parentX !== "undefined" && typeof parentY !== "undefined") {
            node.value.computedPosition = getXYZPos({ x: parentX, y: parentY, z: parentZ }, xyzPos);
          } else {
            node.value.computedPosition = xyzPos;
          }
        },
        { flush: "post", immediate: true }
      );
      (0, vue_runtime_esm_bundler_exports.watch)([() => node.value.extent, nodeExtent], ([nodeExtent2, globalExtent], [oldNodeExtent, oldGlobalExtent]) => {
        if (nodeExtent2 !== oldNodeExtent || globalExtent !== oldGlobalExtent) {
          clampPosition2();
        }
      });
      if (node.value.extent === "parent" || typeof node.value.extent === "object" && "range" in node.value.extent && node.value.extent.range === "parent") {
        until2(() => node.value.initialized).toBe(true).then(clampPosition2);
      } else {
        clampPosition2();
      }
      return () => {
        var _a2;
        return (0, vue_runtime_esm_bundler_exports.h)(
          "div",
          {
            "ref": nodeElement,
            "data-id": node.value.id,
            "class": [
              "vue-flow__node",
              `vue-flow__node-${props.type === false ? "default" : props.name}`,
              {
                [noPanClassName.value]: props.draggable,
                dragging: dragging == null ? void 0 : dragging.value,
                selected: node.value.selected,
                selectable: props.selectable,
                parent: node.value.isParent
              },
              getClass.value
            ],
            "style": __spreadValues({
              zIndex: (_a2 = node.value.computedPosition.z) != null ? _a2 : zIndex(),
              transform: `translate(${node.value.computedPosition.x}px,${node.value.computedPosition.y}px)`,
              pointerEvents: props.selectable || props.draggable ? "all" : "none",
              visibility: node.value.initialized ? "visible" : "hidden"
            }, getStyle.value),
            "tabIndex": props.focusable ? 0 : void 0,
            "role": props.focusable ? "button" : void 0,
            "aria-describedby": disableKeyboardA11y.value ? void 0 : `${ARIA_NODE_DESC_KEY}-${vueFlowId}`,
            "aria-label": node.value.ariaLabel,
            "onMouseenter": onMouseEnter,
            "onMousemove": onMouseMove,
            "onMouseleave": onMouseLeave,
            "onContextmenu": onContextMenu,
            "onClick": onSelectNode,
            "onDblclick": onDoubleClick,
            "onKeydown": onKeyDown2
          },
          [
            (0, vue_runtime_esm_bundler_exports.h)(props.type === false ? getNodeTypes.value.default : props.type, {
              id: node.value.id,
              type: node.value.type,
              data: node.value.data,
              events: __spreadValues(__spreadValues({}, node.value.events), on),
              selected: !!node.value.selected,
              resizing: !!node.value.resizing,
              dragging: dragging.value,
              connectable: props.connectable,
              position: node.value.position,
              dimensions: node.value.dimensions,
              isValidTargetPos: node.value.isValidTargetPos,
              isValidSourcePos: node.value.isValidSourcePos,
              parent: node.value.parentNode,
              zIndex: node.value.computedPosition.z,
              targetPosition: node.value.targetPosition,
              sourcePosition: node.value.sourcePosition,
              label: node.value.label,
              dragHandle: node.value.dragHandle,
              onUpdateNodeInternals: updateInternals
            })
          ]
        );
      };
      function clampPosition2() {
        const nextPos = node.value.computedPosition;
        if (snapToGrid.value) {
          nextPos.x = snapGrid.value[0] * Math.round(nextPos.x / snapGrid.value[0]);
          nextPos.y = snapGrid.value[1] * Math.round(nextPos.y / snapGrid.value[1]);
        }
        const { computedPosition, position } = calcNextPosition(
          node.value,
          nextPos,
          emits.error,
          nodeExtent.value,
          parentNode.value
        );
        if (node.value.computedPosition.x !== computedPosition.x || node.value.computedPosition.y !== computedPosition.y) {
          node.value.computedPosition = __spreadValues(__spreadValues({}, node.value.computedPosition), computedPosition);
        }
        if (node.value.position.x !== position.x || node.value.position.y !== position.y) {
          node.value.position = position;
        }
      }
      function updateInternals() {
        if (nodeElement.value) {
          updateNodeDimensions([{ id: props.id, nodeElement: nodeElement.value, forceUpdate: true }]);
        }
      }
      function onMouseEnter(event) {
        if (!(dragging == null ? void 0 : dragging.value)) {
          emit.mouseEnter({ event, node: node.value, connectedEdges: connectedEdges.value });
        }
      }
      function onMouseMove(event) {
        if (!(dragging == null ? void 0 : dragging.value)) {
          emit.mouseMove({ event, node: node.value, connectedEdges: connectedEdges.value });
        }
      }
      function onMouseLeave(event) {
        if (!(dragging == null ? void 0 : dragging.value)) {
          emit.mouseLeave({ event, node: node.value, connectedEdges: connectedEdges.value });
        }
      }
      function onContextMenu(event) {
        return emit.contextMenu({ event, node: node.value, connectedEdges: connectedEdges.value });
      }
      function onDoubleClick(event) {
        return emit.doubleClick({ event, node: node.value, connectedEdges: connectedEdges.value });
      }
      function onSelectNode(event) {
        if (props.selectable && (!selectNodesOnDrag.value || !props.draggable || nodeDragThreshold.value > 0)) {
          handleNodeClick(
            node.value,
            multiSelectionActive.value,
            addSelectedNodes,
            removeSelectedNodes,
            nodesSelectionActive,
            false,
            nodeElement.value
          );
        }
        emit.click({ event, node: node.value, connectedEdges: connectedEdges.value });
      }
      function onKeyDown2(event) {
        if (isInputDOMNode(event)) {
          return;
        }
        if (elementSelectionKeys.includes(event.key) && props.selectable) {
          const unselect = event.key === "Escape";
          handleNodeClick(
            node.value,
            multiSelectionActive.value,
            addSelectedNodes,
            removeSelectedNodes,
            nodesSelectionActive,
            unselect,
            nodeElement.value
          );
        } else if (!disableKeyboardA11y.value && props.draggable && node.value.selected && arrowKeyDiffs[event.key]) {
          ariaLiveMessage.value = `Moved selected node ${event.key.replace("Arrow", "").toLowerCase()}. New position, x: ${~~node.value.position.x}, y: ${~~node.value.position.y}`;
          updateNodePositions(
            {
              x: arrowKeyDiffs[event.key].x,
              y: arrowKeyDiffs[event.key].y
            },
            event.shiftKey
          );
        }
      }
    }
  });
  var NodeWrapper$1 = NodeWrapper;
  var _hoisted_1$8 = ["transform"];
  var _hoisted_2$2 = ["width", "height", "x", "y", "rx", "ry"];
  var _hoisted_3$1 = ["y"];
  var __default__$e = {
    name: "EdgeText",
    compatConfig: { MODE: 3 }
  };
  var _sfc_main$e = /* @__PURE__ */ (0, vue_runtime_esm_bundler_exports.defineComponent)(__spreadProps(__spreadValues({}, __default__$e), {
    props: {
      x: {},
      y: {},
      label: {},
      labelStyle: { default: () => ({}) },
      labelShowBg: { type: Boolean, default: true },
      labelBgStyle: { default: () => ({}) },
      labelBgPadding: { default: () => [2, 4] },
      labelBgBorderRadius: { default: 2 }
    },
    setup(__props) {
      const box = (0, vue_runtime_esm_bundler_exports.ref)({ x: 0, y: 0, width: 0, height: 0 });
      const el = (0, vue_runtime_esm_bundler_exports.ref)(null);
      const transform = (0, vue_runtime_esm_bundler_exports.computed)(() => `translate(${__props.x - box.value.width / 2} ${__props.y - box.value.height / 2})`);
      (0, vue_runtime_esm_bundler_exports.onMounted)(getBox);
      (0, vue_runtime_esm_bundler_exports.watch)([() => __props.x, () => __props.y, el, () => __props.label], getBox);
      function getBox() {
        if (!el.value) {
          return;
        }
        const nextBox = el.value.getBBox();
        if (nextBox.width !== box.value.width || nextBox.height !== box.value.height) {
          box.value = nextBox;
        }
      }
      return (_ctx, _cache) => {
        return (0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("g", {
          transform: transform.value,
          class: "vue-flow__edge-textwrapper"
        }, [
          _ctx.labelShowBg ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("rect", {
            key: 0,
            class: "vue-flow__edge-textbg",
            width: `${box.value.width + 2 * _ctx.labelBgPadding[0]}px`,
            height: `${box.value.height + 2 * _ctx.labelBgPadding[1]}px`,
            x: -_ctx.labelBgPadding[0],
            y: -_ctx.labelBgPadding[1],
            style: (0, vue_runtime_esm_bundler_exports.normalizeStyle)(_ctx.labelBgStyle),
            rx: _ctx.labelBgBorderRadius,
            ry: _ctx.labelBgBorderRadius
          }, null, 12, _hoisted_2$2)) : (0, vue_runtime_esm_bundler_exports.createCommentVNode)("", true),
          (0, vue_runtime_esm_bundler_exports.createElementVNode)("text", (0, vue_runtime_esm_bundler_exports.mergeProps)(_ctx.$attrs, {
            ref_key: "el",
            ref: el,
            class: "vue-flow__edge-text",
            y: box.value.height / 2,
            dy: "0.3em",
            style: _ctx.labelStyle
          }), [
            (0, vue_runtime_esm_bundler_exports.renderSlot)(_ctx.$slots, "default", {}, () => [
              typeof _ctx.label !== "string" ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createBlock)((0, vue_runtime_esm_bundler_exports.resolveDynamicComponent)(_ctx.label), { key: 0 })) : ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)(vue_runtime_esm_bundler_exports.Fragment, { key: 1 }, [
                (0, vue_runtime_esm_bundler_exports.createTextVNode)((0, vue_runtime_esm_bundler_exports.toDisplayString)(_ctx.label), 1)
              ], 64))
            ])
          ], 16, _hoisted_3$1)
        ], 8, _hoisted_1$8);
      };
    }
  }));
  var _hoisted_1$7 = ["id", "d", "marker-end", "marker-start"];
  var _hoisted_2$1 = ["d", "stroke-width"];
  var __default__$d = {
    name: "BaseEdge",
    inheritAttrs: false,
    compatConfig: { MODE: 3 }
  };
  var _sfc_main$d = /* @__PURE__ */ (0, vue_runtime_esm_bundler_exports.defineComponent)(__spreadProps(__spreadValues({}, __default__$d), {
    props: {
      id: {},
      labelX: {},
      labelY: {},
      path: {},
      label: {},
      markerStart: {},
      markerEnd: {},
      interactionWidth: { default: 20 },
      style: {},
      ref: { type: [String, Object, Function] },
      labelStyle: {},
      labelShowBg: { type: Boolean, default: true },
      labelBgStyle: {},
      labelBgPadding: {},
      labelBgBorderRadius: {}
    },
    setup(__props, { expose: __expose }) {
      const props = (0, vue_runtime_esm_bundler_exports.createPropsRestProxy)(__props, ["interactionWidth", "labelShowBg"]);
      const pathEl = (0, vue_runtime_esm_bundler_exports.ref)(null);
      const interactionEl = (0, vue_runtime_esm_bundler_exports.ref)(null);
      const labelEl = (0, vue_runtime_esm_bundler_exports.ref)(null);
      const attrs = (0, vue_runtime_esm_bundler_exports.useAttrs)();
      __expose({
        pathEl,
        interactionEl,
        labelEl
      });
      return (_ctx, _cache) => {
        return (0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)(vue_runtime_esm_bundler_exports.Fragment, null, [
          (0, vue_runtime_esm_bundler_exports.createElementVNode)("path", {
            id: _ctx.id,
            ref_key: "pathEl",
            ref: pathEl,
            d: _ctx.path,
            style: (0, vue_runtime_esm_bundler_exports.normalizeStyle)(props.style),
            class: (0, vue_runtime_esm_bundler_exports.normalizeClass)(["vue-flow__edge-path", (0, vue_runtime_esm_bundler_exports.unref)(attrs).class]),
            "marker-end": _ctx.markerEnd,
            "marker-start": _ctx.markerStart
          }, null, 14, _hoisted_1$7),
          _ctx.interactionWidth ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("path", {
            key: 0,
            ref_key: "interactionEl",
            ref: interactionEl,
            fill: "none",
            d: _ctx.path,
            "stroke-width": _ctx.interactionWidth,
            "stroke-opacity": 0,
            class: "vue-flow__edge-interaction"
          }, null, 8, _hoisted_2$1)) : (0, vue_runtime_esm_bundler_exports.createCommentVNode)("", true),
          _ctx.label && _ctx.labelX && _ctx.labelY ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createBlock)(_sfc_main$e, {
            key: 1,
            ref_key: "labelEl",
            ref: labelEl,
            x: _ctx.labelX,
            y: _ctx.labelY,
            label: _ctx.label,
            "label-show-bg": _ctx.labelShowBg,
            "label-bg-style": _ctx.labelBgStyle,
            "label-bg-padding": _ctx.labelBgPadding,
            "label-bg-border-radius": _ctx.labelBgBorderRadius,
            "label-style": _ctx.labelStyle
          }, null, 8, ["x", "y", "label", "label-show-bg", "label-bg-style", "label-bg-padding", "label-bg-border-radius", "label-style"])) : (0, vue_runtime_esm_bundler_exports.createCommentVNode)("", true)
        ], 64);
      };
    }
  }));
  function getSimpleEdgeCenter({
    sourceX,
    sourceY,
    targetX,
    targetY
  }) {
    const xOffset = Math.abs(targetX - sourceX) / 2;
    const centerX = targetX < sourceX ? targetX + xOffset : targetX - xOffset;
    const yOffset = Math.abs(targetY - sourceY) / 2;
    const centerY = targetY < sourceY ? targetY + yOffset : targetY - yOffset;
    return [centerX, centerY, xOffset, yOffset];
  }
  function getBezierEdgeCenter({
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourceControlX,
    sourceControlY,
    targetControlX,
    targetControlY
  }) {
    const centerX = sourceX * 0.125 + sourceControlX * 0.375 + targetControlX * 0.375 + targetX * 0.125;
    const centerY = sourceY * 0.125 + sourceControlY * 0.375 + targetControlY * 0.375 + targetY * 0.125;
    const offsetX = Math.abs(centerX - sourceX);
    const offsetY = Math.abs(centerY - sourceY);
    return [centerX, centerY, offsetX, offsetY];
  }
  function calculateControlOffset(distance2, curvature) {
    if (distance2 >= 0) {
      return 0.5 * distance2;
    } else {
      return curvature * 25 * Math.sqrt(-distance2);
    }
  }
  function getControlWithCurvature({ pos, x1, y1, x2, y2, c }) {
    let ctX, ctY;
    switch (pos) {
      case Position.Left:
        ctX = x1 - calculateControlOffset(x1 - x2, c);
        ctY = y1;
        break;
      case Position.Right:
        ctX = x1 + calculateControlOffset(x2 - x1, c);
        ctY = y1;
        break;
      case Position.Top:
        ctX = x1;
        ctY = y1 - calculateControlOffset(y1 - y2, c);
        break;
      case Position.Bottom:
        ctX = x1;
        ctY = y1 + calculateControlOffset(y2 - y1, c);
        break;
    }
    return [ctX, ctY];
  }
  function getBezierPath({
    sourceX,
    sourceY,
    sourcePosition = Position.Bottom,
    targetX,
    targetY,
    targetPosition = Position.Top,
    curvature = 0.25
  }) {
    const [sourceControlX, sourceControlY] = getControlWithCurvature({
      pos: sourcePosition,
      x1: sourceX,
      y1: sourceY,
      x2: targetX,
      y2: targetY,
      c: curvature
    });
    const [targetControlX, targetControlY] = getControlWithCurvature({
      pos: targetPosition,
      x1: targetX,
      y1: targetY,
      x2: sourceX,
      y2: sourceY,
      c: curvature
    });
    const [centerX, centerY, offsetX, offsetY] = getBezierEdgeCenter({
      sourceX,
      sourceY,
      targetX,
      targetY,
      sourceControlX,
      sourceControlY,
      targetControlX,
      targetControlY
    });
    return [
      `M${sourceX},${sourceY} C${sourceControlX},${sourceControlY} ${targetControlX},${targetControlY} ${targetX},${targetY}`,
      centerX,
      centerY,
      offsetX,
      offsetY
    ];
  }
  function getControl({ pos, x1, y1, x2, y2 }) {
    let ctX, ctY;
    switch (pos) {
      case Position.Left:
      case Position.Right:
        ctX = 0.5 * (x1 + x2);
        ctY = y1;
        break;
      case Position.Top:
      case Position.Bottom:
        ctX = x1;
        ctY = 0.5 * (y1 + y2);
        break;
    }
    return [ctX, ctY];
  }
  function getSimpleBezierPath({
    sourceX,
    sourceY,
    sourcePosition = Position.Bottom,
    targetX,
    targetY,
    targetPosition = Position.Top
  }) {
    const [sourceControlX, sourceControlY] = getControl({
      pos: sourcePosition,
      x1: sourceX,
      y1: sourceY,
      x2: targetX,
      y2: targetY
    });
    const [targetControlX, targetControlY] = getControl({
      pos: targetPosition,
      x1: targetX,
      y1: targetY,
      x2: sourceX,
      y2: sourceY
    });
    const [centerX, centerY, offsetX, offsetY] = getBezierEdgeCenter({
      sourceX,
      sourceY,
      targetX,
      targetY,
      sourceControlX,
      sourceControlY,
      targetControlX,
      targetControlY
    });
    return [
      `M${sourceX},${sourceY} C${sourceControlX},${sourceControlY} ${targetControlX},${targetControlY} ${targetX},${targetY}`,
      centerX,
      centerY,
      offsetX,
      offsetY
    ];
  }
  var handleDirections = {
    [Position.Left]: { x: -1, y: 0 },
    [Position.Right]: { x: 1, y: 0 },
    [Position.Top]: { x: 0, y: -1 },
    [Position.Bottom]: { x: 0, y: 1 }
  };
  function getDirection({
    source,
    sourcePosition = Position.Bottom,
    target
  }) {
    if (sourcePosition === Position.Left || sourcePosition === Position.Right) {
      return source.x < target.x ? { x: 1, y: 0 } : { x: -1, y: 0 };
    }
    return source.y < target.y ? { x: 0, y: 1 } : { x: 0, y: -1 };
  }
  function distance(a2, b) {
    return Math.sqrt((b.x - a2.x) ** 2 + (b.y - a2.y) ** 2);
  }
  function getPoints({
    source,
    sourcePosition = Position.Bottom,
    target,
    targetPosition = Position.Top,
    center,
    offset
  }) {
    const sourceDir = handleDirections[sourcePosition];
    const targetDir = handleDirections[targetPosition];
    const sourceGapped = { x: source.x + sourceDir.x * offset, y: source.y + sourceDir.y * offset };
    const targetGapped = { x: target.x + targetDir.x * offset, y: target.y + targetDir.y * offset };
    const dir = getDirection({
      source: sourceGapped,
      sourcePosition,
      target: targetGapped
    });
    const dirAccessor = dir.x !== 0 ? "x" : "y";
    const currDir = dir[dirAccessor];
    let points;
    let centerX, centerY;
    const sourceGapOffset = { x: 0, y: 0 };
    const targetGapOffset = { x: 0, y: 0 };
    const [defaultCenterX, defaultCenterY, defaultOffsetX, defaultOffsetY] = getSimpleEdgeCenter({
      sourceX: source.x,
      sourceY: source.y,
      targetX: target.x,
      targetY: target.y
    });
    if (sourceDir[dirAccessor] * targetDir[dirAccessor] === -1) {
      centerX = center.x || defaultCenterX;
      centerY = center.y || defaultCenterY;
      const verticalSplit = [
        { x: centerX, y: sourceGapped.y },
        { x: centerX, y: targetGapped.y }
      ];
      const horizontalSplit = [
        { x: sourceGapped.x, y: centerY },
        { x: targetGapped.x, y: centerY }
      ];
      if (sourceDir[dirAccessor] === currDir) {
        points = dirAccessor === "x" ? verticalSplit : horizontalSplit;
      } else {
        points = dirAccessor === "x" ? horizontalSplit : verticalSplit;
      }
    } else {
      const sourceTarget = [{ x: sourceGapped.x, y: targetGapped.y }];
      const targetSource = [{ x: targetGapped.x, y: sourceGapped.y }];
      if (dirAccessor === "x") {
        points = sourceDir.x === currDir ? targetSource : sourceTarget;
      } else {
        points = sourceDir.y === currDir ? sourceTarget : targetSource;
      }
      if (sourcePosition === targetPosition) {
        const diff = Math.abs(source[dirAccessor] - target[dirAccessor]);
        if (diff <= offset) {
          const gapOffset = Math.min(offset - 1, offset - diff);
          if (sourceDir[dirAccessor] === currDir) {
            sourceGapOffset[dirAccessor] = gapOffset;
          } else {
            targetGapOffset[dirAccessor] = gapOffset;
          }
        }
      }
      if (sourcePosition !== targetPosition) {
        const dirAccessorOpposite = dirAccessor === "x" ? "y" : "x";
        const isSameDir = sourceDir[dirAccessor] === targetDir[dirAccessorOpposite];
        const sourceGtTargetOppo = sourceGapped[dirAccessorOpposite] > targetGapped[dirAccessorOpposite];
        const sourceLtTargetOppo = sourceGapped[dirAccessorOpposite] < targetGapped[dirAccessorOpposite];
        const flipSourceTarget = sourceDir[dirAccessor] === 1 && (!isSameDir && sourceGtTargetOppo || isSameDir && sourceLtTargetOppo) || sourceDir[dirAccessor] !== 1 && (!isSameDir && sourceLtTargetOppo || isSameDir && sourceGtTargetOppo);
        if (flipSourceTarget) {
          points = dirAccessor === "x" ? sourceTarget : targetSource;
        }
      }
      const sourceGapPoint = { x: sourceGapped.x - sourceGapOffset.x, y: sourceGapped.y - sourceGapOffset.y };
      const targetGapPoint = { x: targetGapped.x - targetGapOffset.x, y: targetGapped.y - targetGapOffset.y };
      const maxXDistance = Math.max(Math.abs(sourceGapPoint.x - points[0].x), Math.abs(targetGapPoint.x - points[0].x));
      const maxYDistance = Math.max(Math.abs(sourceGapPoint.y - points[0].y), Math.abs(targetGapPoint.y - points[0].y));
      if (maxXDistance >= maxYDistance) {
        centerX = (sourceGapPoint.x + targetGapPoint.x) / 2;
        centerY = points[0].y;
      } else {
        centerX = points[0].x;
        centerY = (sourceGapPoint.y + targetGapPoint.y) / 2;
      }
    }
    const pathPoints = [
      source,
      { x: sourceGapped.x - sourceGapOffset.x, y: sourceGapped.y - sourceGapOffset.y },
      ...points,
      { x: targetGapped.x - targetGapOffset.x, y: targetGapped.y - targetGapOffset.y },
      target
    ];
    return [pathPoints, centerX, centerY, defaultOffsetX, defaultOffsetY];
  }
  function getBend(a2, b, c, size) {
    const bendSize = Math.min(distance(a2, b) / 2, distance(b, c) / 2, size);
    const { x: x2, y: y2 } = b;
    if (a2.x === x2 && x2 === c.x || a2.y === y2 && y2 === c.y) {
      return `L${x2} ${y2}`;
    }
    if (a2.y === y2) {
      const xDir2 = a2.x < c.x ? -1 : 1;
      const yDir2 = a2.y < c.y ? 1 : -1;
      return `L ${x2 + bendSize * xDir2},${y2}Q ${x2},${y2} ${x2},${y2 + bendSize * yDir2}`;
    }
    const xDir = a2.x < c.x ? 1 : -1;
    const yDir = a2.y < c.y ? -1 : 1;
    return `L ${x2},${y2 + bendSize * yDir}Q ${x2},${y2} ${x2 + bendSize * xDir},${y2}`;
  }
  function getSmoothStepPath({
    sourceX,
    sourceY,
    sourcePosition = Position.Bottom,
    targetX,
    targetY,
    targetPosition = Position.Top,
    borderRadius = 5,
    centerX,
    centerY,
    offset = 20
  }) {
    const [points, labelX, labelY, offsetX, offsetY] = getPoints({
      source: { x: sourceX, y: sourceY },
      sourcePosition,
      target: { x: targetX, y: targetY },
      targetPosition,
      center: { x: centerX, y: centerY },
      offset
    });
    const path = points.reduce((res, p, i) => {
      let segment;
      if (i > 0 && i < points.length - 1) {
        segment = getBend(points[i - 1], p, points[i + 1], borderRadius);
      } else {
        segment = `${i === 0 ? "M" : "L"}${p.x} ${p.y}`;
      }
      res += segment;
      return res;
    }, "");
    return [path, labelX, labelY, offsetX, offsetY];
  }
  function getStraightPath({
    sourceX,
    sourceY,
    targetX,
    targetY
  }) {
    const [centerX, centerY, offsetX, offsetY] = getSimpleEdgeCenter({
      sourceX,
      sourceY,
      targetX,
      targetY
    });
    return [`M ${sourceX},${sourceY}L ${targetX},${targetY}`, centerX, centerY, offsetX, offsetY];
  }
  var BezierEdge = (0, vue_runtime_esm_bundler_exports.defineComponent)({
    name: "BezierEdge",
    props: [
      "sourcePosition",
      "targetPosition",
      "label",
      "labelStyle",
      "labelShowBg",
      "labelBgStyle",
      "labelBgPadding",
      "labelBgBorderRadius",
      "sourceY",
      "sourceX",
      "targetX",
      "targetY",
      "curvature",
      "markerEnd",
      "markerStart",
      "interactionWidth"
    ],
    compatConfig: { MODE: 3 },
    setup(props, { attrs }) {
      return () => {
        var _a2, _b;
        const [path, labelX, labelY] = getBezierPath(__spreadProps(__spreadValues({}, props), {
          sourcePosition: (_a2 = props.sourcePosition) != null ? _a2 : Position.Bottom,
          targetPosition: (_b = props.targetPosition) != null ? _b : Position.Top
        }));
        return (0, vue_runtime_esm_bundler_exports.h)(_sfc_main$d, __spreadValues(__spreadValues({
          path,
          labelX,
          labelY
        }, attrs), props));
      };
    }
  });
  var BezierEdge$1 = BezierEdge;
  var SimpleBezierEdge = (0, vue_runtime_esm_bundler_exports.defineComponent)({
    name: "SimpleBezierEdge",
    props: [
      "sourcePosition",
      "targetPosition",
      "label",
      "labelStyle",
      "labelShowBg",
      "labelBgStyle",
      "labelBgPadding",
      "labelBgBorderRadius",
      "sourceY",
      "sourceX",
      "targetX",
      "targetY",
      "markerEnd",
      "markerStart",
      "interactionWidth"
    ],
    compatConfig: { MODE: 3 },
    setup(props, { attrs }) {
      return () => {
        var _a2, _b;
        const [path, labelX, labelY] = getSimpleBezierPath(__spreadProps(__spreadValues({}, props), {
          sourcePosition: (_a2 = props.sourcePosition) != null ? _a2 : Position.Bottom,
          targetPosition: (_b = props.targetPosition) != null ? _b : Position.Top
        }));
        return (0, vue_runtime_esm_bundler_exports.h)(_sfc_main$d, __spreadValues(__spreadValues({
          path,
          labelX,
          labelY
        }, attrs), props));
      };
    }
  });
  var SimpleBezierEdge$1 = SimpleBezierEdge;
  var SmoothStepEdge = (0, vue_runtime_esm_bundler_exports.defineComponent)({
    name: "SmoothStepEdge",
    props: [
      "sourcePosition",
      "targetPosition",
      "label",
      "labelStyle",
      "labelShowBg",
      "labelBgStyle",
      "labelBgPadding",
      "labelBgBorderRadius",
      "sourceY",
      "sourceX",
      "targetX",
      "targetY",
      "borderRadius",
      "markerEnd",
      "markerStart",
      "interactionWidth",
      "offset"
    ],
    compatConfig: { MODE: 3 },
    setup(props, { attrs }) {
      return () => {
        var _a2, _b;
        const [path, labelX, labelY] = getSmoothStepPath(__spreadProps(__spreadValues({}, props), {
          sourcePosition: (_a2 = props.sourcePosition) != null ? _a2 : Position.Bottom,
          targetPosition: (_b = props.targetPosition) != null ? _b : Position.Top
        }));
        return (0, vue_runtime_esm_bundler_exports.h)(_sfc_main$d, __spreadValues(__spreadValues({
          path,
          labelX,
          labelY
        }, attrs), props));
      };
    }
  });
  var SmoothStepEdge$1 = SmoothStepEdge;
  var StepEdge = (0, vue_runtime_esm_bundler_exports.defineComponent)({
    name: "StepEdge",
    props: [
      "sourcePosition",
      "targetPosition",
      "label",
      "labelStyle",
      "labelShowBg",
      "labelBgStyle",
      "labelBgPadding",
      "labelBgBorderRadius",
      "sourceY",
      "sourceX",
      "targetX",
      "targetY",
      "markerEnd",
      "markerStart",
      "interactionWidth"
    ],
    setup(props, { attrs }) {
      return () => (0, vue_runtime_esm_bundler_exports.h)(SmoothStepEdge$1, __spreadProps(__spreadValues(__spreadValues({}, props), attrs), { borderRadius: 0 }));
    }
  });
  var StepEdge$1 = StepEdge;
  var StraightEdge = (0, vue_runtime_esm_bundler_exports.defineComponent)({
    name: "StraightEdge",
    props: [
      "label",
      "labelStyle",
      "labelShowBg",
      "labelBgStyle",
      "labelBgPadding",
      "labelBgBorderRadius",
      "sourceY",
      "sourceX",
      "targetX",
      "targetY",
      "markerEnd",
      "markerStart",
      "interactionWidth"
    ],
    compatConfig: { MODE: 3 },
    setup(props, { attrs }) {
      return () => {
        const [path, labelX, labelY] = getStraightPath(props);
        return (0, vue_runtime_esm_bundler_exports.h)(_sfc_main$d, __spreadValues(__spreadValues({
          path,
          labelX,
          labelY
        }, attrs), props));
      };
    }
  });
  var StraightEdge$1 = StraightEdge;
  function shiftX(x2, shift, position) {
    if (position === Position.Left) {
      return x2 - shift;
    }
    if (position === Position.Right) {
      return x2 + shift;
    }
    return x2;
  }
  function shiftY(y2, shift, position) {
    if (position === Position.Top) {
      return y2 - shift;
    }
    if (position === Position.Bottom) {
      return y2 + shift;
    }
    return y2;
  }
  var EdgeAnchor = function({
    radius = 10,
    centerX = 0,
    centerY = 0,
    position = Position.Top,
    type
  }) {
    return (0, vue_runtime_esm_bundler_exports.h)("circle", {
      class: `vue-flow__edgeupdater vue-flow__edgeupdater-${type}`,
      cx: shiftX(centerX, radius, position),
      cy: shiftY(centerY, radius, position),
      r: radius,
      stroke: "transparent",
      fill: "transparent"
    });
  };
  EdgeAnchor.props = ["radius", "centerX", "centerY", "position", "type"];
  EdgeAnchor.compatConfig = { MODE: 3 };
  var EdgeAnchor$1 = EdgeAnchor;
  var EdgeWrapper = (0, vue_runtime_esm_bundler_exports.defineComponent)({
    name: "Edge",
    compatConfig: { MODE: 3 },
    props: ["name", "type", "id", "updatable", "selectable", "focusable", "edge"],
    setup(props) {
      const {
        id: vueFlowId,
        addSelectedEdges,
        connectionMode,
        edgeUpdaterRadius,
        emits,
        nodesSelectionActive,
        noPanClassName,
        getEdgeTypes,
        removeSelectedEdges,
        findEdge,
        findNode,
        isValidConnection,
        multiSelectionActive,
        hooks: flowHooks
      } = useVueFlow();
      const hooks = useEdgeHooks(props.edge, emits);
      const edge = useVModel(props, "edge");
      const mouseOver = (0, vue_runtime_esm_bundler_exports.ref)(false);
      const updating = (0, vue_runtime_esm_bundler_exports.ref)(false);
      const nodeId = (0, vue_runtime_esm_bundler_exports.ref)("");
      const handleId = (0, vue_runtime_esm_bundler_exports.ref)(null);
      const edgeUpdaterType = (0, vue_runtime_esm_bundler_exports.ref)("source");
      const edgeEl = (0, vue_runtime_esm_bundler_exports.ref)(null);
      (0, vue_runtime_esm_bundler_exports.provide)(EdgeId, props.id);
      (0, vue_runtime_esm_bundler_exports.provide)(EdgeRef, edgeEl);
      const edgeClass = (0, vue_runtime_esm_bundler_exports.computed)(() => edge.value.class instanceof Function ? edge.value.class(edge.value) : edge.value.class);
      const edgeStyle = (0, vue_runtime_esm_bundler_exports.computed)(() => edge.value.style instanceof Function ? edge.value.style(edge.value) : edge.value.style);
      const { handlePointerDown } = useHandle({
        nodeId,
        handleId,
        type: edgeUpdaterType,
        isValidConnection,
        edgeUpdaterType,
        onEdgeUpdate,
        onEdgeUpdateEnd
      });
      return () => {
        const sourceNode = findNode(edge.value.source);
        const targetNode = findNode(edge.value.target);
        if (!sourceNode && !targetNode) {
          flowHooks.value.error.trigger(new VueFlowError(ErrorCode.EDGE_SOURCE_TARGET_MISSING, edge.value.id, edge.value.source, edge.value.target));
          return null;
        }
        if (!sourceNode) {
          flowHooks.value.error.trigger(new VueFlowError(ErrorCode.EDGE_SOURCE_MISSING, edge.value.id, edge.value.source));
          return null;
        }
        if (!targetNode) {
          flowHooks.value.error.trigger(new VueFlowError(ErrorCode.EDGE_TARGET_MISSING, edge.value.id, edge.value.target));
          return null;
        }
        if (!edge.value || sourceNode.hidden || targetNode.hidden) {
          return null;
        }
        let sourceNodeHandles;
        if (connectionMode.value === ConnectionMode.Strict) {
          sourceNodeHandles = sourceNode.handleBounds.source;
        } else {
          sourceNodeHandles = [...sourceNode.handleBounds.source || [], ...sourceNode.handleBounds.target || []];
        }
        const sourceHandle = getHandle(sourceNodeHandles, edge.value.sourceHandle);
        let targetNodeHandles;
        if (connectionMode.value === ConnectionMode.Strict) {
          targetNodeHandles = targetNode.handleBounds.target;
        } else {
          targetNodeHandles = [...targetNode.handleBounds.target || [], ...targetNode.handleBounds.source || []];
        }
        const targetHandle = getHandle(targetNodeHandles, edge.value.targetHandle);
        const sourcePosition = sourceHandle ? sourceHandle.position : Position.Bottom;
        const targetPosition = targetHandle ? targetHandle.position : Position.Top;
        const { sourceX, sourceY, targetY, targetX } = getEdgePositions(
          sourceNode,
          sourceHandle,
          sourcePosition,
          targetNode,
          targetHandle,
          targetPosition
        );
        edge.value.sourceX = sourceX;
        edge.value.sourceY = sourceY;
        edge.value.targetX = targetX;
        edge.value.targetY = targetY;
        return (0, vue_runtime_esm_bundler_exports.h)(
          "g",
          {
            "ref": edgeEl,
            "key": props.id,
            "data-id": props.id,
            "class": [
              "vue-flow__edge",
              `vue-flow__edge-${props.type === false ? "default" : props.name}`,
              noPanClassName.value,
              edgeClass.value,
              {
                updating: mouseOver.value,
                selected: edge.value.selected,
                animated: edge.value.animated,
                inactive: !props.selectable
              }
            ],
            "onClick": onEdgeClick,
            "onContextmenu": onEdgeContextMenu,
            "onDblclick": onDoubleClick,
            "onMouseenter": onEdgeMouseEnter,
            "onMousemove": onEdgeMouseMove,
            "onMouseleave": onEdgeMouseLeave,
            "onKeyDown": props.focusable ? onKeyDown2 : void 0,
            "tabIndex": props.focusable ? 0 : void 0,
            "aria-label": edge.value.ariaLabel === null ? void 0 : edge.value.ariaLabel || `Edge from ${edge.value.source} to ${edge.value.target}`,
            "aria-describedby": props.focusable ? `${ARIA_EDGE_DESC_KEY}-${vueFlowId}` : void 0,
            "role": props.focusable ? "button" : "img"
          },
          [
            updating.value ? null : (0, vue_runtime_esm_bundler_exports.h)(props.type === false ? getEdgeTypes.value.default : props.type, {
              id: props.id,
              sourceNode,
              targetNode,
              source: edge.value.source,
              target: edge.value.target,
              type: edge.value.type,
              updatable: props.updatable,
              selected: edge.value.selected,
              animated: edge.value.animated,
              label: edge.value.label,
              labelStyle: edge.value.labelStyle,
              labelShowBg: edge.value.labelShowBg,
              labelBgStyle: edge.value.labelBgStyle,
              labelBgPadding: edge.value.labelBgPadding,
              labelBgBorderRadius: edge.value.labelBgBorderRadius,
              data: edge.value.data,
              events: __spreadValues(__spreadValues({}, edge.value.events), hooks.on),
              style: edgeStyle.value,
              markerStart: `url(#${getMarkerId(edge.value.markerStart, vueFlowId)})`,
              markerEnd: `url(#${getMarkerId(edge.value.markerEnd, vueFlowId)})`,
              sourcePosition,
              targetPosition,
              sourceX,
              sourceY,
              targetX,
              targetY,
              sourceHandleId: edge.value.sourceHandle,
              targetHandleId: edge.value.targetHandle,
              interactionWidth: edge.value.interactionWidth
            }),
            [
              props.updatable === "source" || props.updatable === true ? [
                (0, vue_runtime_esm_bundler_exports.h)(
                  "g",
                  {
                    onMousedown: onEdgeUpdaterSourceMouseDown,
                    onMouseenter: onEdgeUpdaterMouseEnter,
                    onMouseout: onEdgeUpdaterMouseOut
                  },
                  (0, vue_runtime_esm_bundler_exports.h)(EdgeAnchor$1, {
                    "position": sourcePosition,
                    "centerX": sourceX,
                    "centerY": sourceY,
                    "radius": edgeUpdaterRadius.value,
                    "type": "source",
                    "data-type": "source"
                  })
                )
              ] : null,
              props.updatable === "target" || props.updatable === true ? [
                (0, vue_runtime_esm_bundler_exports.h)(
                  "g",
                  {
                    onMousedown: onEdgeUpdaterTargetMouseDown,
                    onMouseenter: onEdgeUpdaterMouseEnter,
                    onMouseout: onEdgeUpdaterMouseOut
                  },
                  (0, vue_runtime_esm_bundler_exports.h)(EdgeAnchor$1, {
                    "position": targetPosition,
                    "centerX": targetX,
                    "centerY": targetY,
                    "radius": edgeUpdaterRadius.value,
                    "type": "target",
                    "data-type": "target"
                  })
                )
              ] : null
            ]
          ]
        );
      };
      function onEdgeUpdaterMouseEnter() {
        mouseOver.value = true;
      }
      function onEdgeUpdaterMouseOut() {
        mouseOver.value = false;
      }
      function onEdgeUpdate(event, connection) {
        hooks.emit.update({ event, edge: edge.value, connection });
      }
      function onEdgeUpdateEnd(event) {
        hooks.emit.updateEnd({ event, edge: edge.value });
        updating.value = false;
      }
      function handleEdgeUpdater(event, isSourceHandle) {
        var _a2;
        if (event.button !== 0) {
          return;
        }
        updating.value = true;
        nodeId.value = isSourceHandle ? edge.value.target : edge.value.source;
        handleId.value = (_a2 = isSourceHandle ? edge.value.targetHandle : edge.value.sourceHandle) != null ? _a2 : "";
        edgeUpdaterType.value = isSourceHandle ? "target" : "source";
        hooks.emit.updateStart({ event, edge: edge.value });
        handlePointerDown(event);
      }
      function onEdgeClick(event) {
        var _a2;
        const data = { event, edge: edge.value };
        if (props.selectable) {
          nodesSelectionActive.value = false;
          if (edge.value.selected && multiSelectionActive.value) {
            removeSelectedEdges([edge.value]);
            (_a2 = edgeEl.value) == null ? void 0 : _a2.blur();
          } else {
            addSelectedEdges([edge.value]);
          }
        }
        hooks.emit.click(data);
      }
      function onEdgeContextMenu(event) {
        hooks.emit.contextMenu({ event, edge: edge.value });
      }
      function onDoubleClick(event) {
        hooks.emit.doubleClick({ event, edge: edge.value });
      }
      function onEdgeMouseEnter(event) {
        hooks.emit.mouseEnter({ event, edge: edge.value });
      }
      function onEdgeMouseMove(event) {
        hooks.emit.mouseMove({ event, edge: edge.value });
      }
      function onEdgeMouseLeave(event) {
        hooks.emit.mouseLeave({ event, edge: edge.value });
      }
      function onEdgeUpdaterSourceMouseDown(event) {
        handleEdgeUpdater(event, true);
      }
      function onEdgeUpdaterTargetMouseDown(event) {
        handleEdgeUpdater(event, false);
      }
      function onKeyDown2(event) {
        var _a2;
        if (elementSelectionKeys.includes(event.key) && props.selectable) {
          const unselect = event.key === "Escape";
          if (unselect) {
            (_a2 = edgeEl.value) == null ? void 0 : _a2.blur();
            removeSelectedEdges([findEdge(props.id)]);
          } else {
            addSelectedEdges([findEdge(props.id)]);
          }
        }
      }
    }
  });
  var EdgeWrapper$1 = EdgeWrapper;
  var _hoisted_1$6 = {
    height: "0",
    width: "0"
  };
  var __default__$c = {
    name: "EdgeLabelRenderer",
    compatConfig: { MODE: 3 }
  };
  var _sfc_main$c = /* @__PURE__ */ (0, vue_runtime_esm_bundler_exports.defineComponent)(__spreadProps(__spreadValues({}, __default__$c), {
    setup(__props) {
      const { viewportRef } = useVueFlow();
      const teleportTarget = toRef3(() => viewportRef.value.getElementsByClassName("vue-flow__edge-labels")[0]);
      return (_ctx, _cache) => {
        return (0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("svg", null, [
          ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("foreignObject", _hoisted_1$6, [
            ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createBlock)(vue_runtime_esm_bundler_exports.Teleport, {
              to: (0, vue_runtime_esm_bundler_exports.unref)(teleportTarget),
              disabled: !(0, vue_runtime_esm_bundler_exports.unref)(teleportTarget)
            }, [
              (0, vue_runtime_esm_bundler_exports.renderSlot)(_ctx.$slots, "default")
            ], 8, ["to", "disabled"]))
          ]))
        ]);
      };
    }
  }));
  var oppositePosition = {
    [Position.Left]: Position.Right,
    [Position.Right]: Position.Left,
    [Position.Top]: Position.Bottom,
    [Position.Bottom]: Position.Top
  };
  var ConnectionLine = (0, vue_runtime_esm_bundler_exports.defineComponent)({
    name: "ConnectionLine",
    compatConfig: { MODE: 3 },
    setup() {
      var _a2;
      const {
        connectionMode,
        connectionStartHandle,
        connectionEndHandle,
        connectionPosition,
        connectionLineType,
        connectionLineStyle,
        connectionLineOptions,
        connectionStatus,
        viewport,
        findNode
      } = useVueFlow();
      const connectionLineComponent = (_a2 = (0, vue_runtime_esm_bundler_exports.inject)(Slots)) == null ? void 0 : _a2["connection-line"];
      return () => {
        var _a3, _b2;
        var _a22, _b, _c, _d, _e;
        if (!connectionStartHandle.value) {
          return null;
        }
        const fromNode = findNode(connectionStartHandle.value.nodeId);
        if (!fromNode) {
          return null;
        }
        const handleId = connectionStartHandle.value.handleId;
        const handleType = connectionStartHandle.value.type;
        const targetNode = ((_a22 = connectionEndHandle.value) == null ? void 0 : _a22.handleId) && findNode(connectionEndHandle.value.nodeId) || null;
        const toX = (connectionPosition.value.x - viewport.value.x) / viewport.value.zoom;
        const toY = (connectionPosition.value.y - viewport.value.y) / viewport.value.zoom;
        const fromHandleBounds = fromNode.handleBounds;
        let handleBounds = fromHandleBounds == null ? void 0 : fromHandleBounds[handleType];
        if (connectionMode.value === ConnectionMode.Loose) {
          handleBounds = handleBounds || (fromHandleBounds == null ? void 0 : fromHandleBounds[handleType === "source" ? "target" : "source"]);
        }
        if (!handleBounds) {
          return null;
        }
        const fromHandle = (_a3 = handleId ? handleBounds.find((d) => d.id === handleId) : handleBounds[0]) != null ? _a3 : null;
        const fromPosition = (fromHandle == null ? void 0 : fromHandle.position) || Position.Top;
        const { x: fromX, y: fromY } = getHandlePosition(
          fromPosition,
          __spreadValues(__spreadValues({}, fromNode.dimensions), fromNode.computedPosition),
          fromHandle
        );
        const toHandle = targetNode && ((_b = connectionEndHandle.value) == null ? void 0 : _b.handleId) && ((connectionMode.value === ConnectionMode.Strict ? (_c = targetNode.handleBounds[handleType === "source" ? "target" : "source"]) == null ? void 0 : _c.find(
          (d) => {
            var _a32;
            return d.id === ((_a32 = connectionEndHandle.value) == null ? void 0 : _a32.handleId);
          }
        ) : (_d = [...targetNode.handleBounds.source || [], ...targetNode.handleBounds.target || []]) == null ? void 0 : _d.find(
          (d) => {
            var _a32;
            return d.id === ((_a32 = connectionEndHandle.value) == null ? void 0 : _a32.handleId);
          }
        )) || ((_e = targetNode.handleBounds[handleType != null ? handleType : "target"]) == null ? void 0 : _e[0])) || null;
        const toPosition = fromPosition ? oppositePosition[fromPosition] : null;
        if (!fromPosition || !toPosition) {
          return null;
        }
        const type = (_b2 = connectionLineType.value) != null ? _b2 : connectionLineOptions.value.type;
        let dAttr = "";
        const pathParams = {
          sourceX: fromX,
          sourceY: fromY,
          sourcePosition: fromPosition,
          targetX: toX,
          targetY: toY,
          targetPosition: toPosition
        };
        if (type === ConnectionLineType.Bezier) {
          [dAttr] = getBezierPath(pathParams);
        } else if (type === ConnectionLineType.Step) {
          [dAttr] = getSmoothStepPath(__spreadProps(__spreadValues({}, pathParams), {
            borderRadius: 0
          }));
        } else if (type === ConnectionLineType.SmoothStep) {
          [dAttr] = getSmoothStepPath(pathParams);
        } else if (type === ConnectionLineType.SimpleBezier) {
          [dAttr] = getSimpleBezierPath(pathParams);
        } else {
          dAttr = `M${fromX},${fromY} ${toX},${toY}`;
        }
        return (0, vue_runtime_esm_bundler_exports.h)(
          "svg",
          { class: "vue-flow__edges vue-flow__connectionline vue-flow__container" },
          (0, vue_runtime_esm_bundler_exports.h)(
            "g",
            { class: "vue-flow__connection" },
            connectionLineComponent ? (0, vue_runtime_esm_bundler_exports.h)(connectionLineComponent, {
              sourceX: fromX,
              sourceY: fromY,
              sourcePosition: fromPosition,
              targetX: toX,
              targetY: toY,
              targetPosition: toPosition,
              sourceNode: fromNode,
              sourceHandle: fromHandle,
              targetNode,
              targetHandle: toHandle,
              markerEnd: `url(#${getMarkerId(connectionLineOptions.value.markerEnd)})`,
              markerStart: `url(#${getMarkerId(connectionLineOptions.value.markerStart)})`,
              connectionStatus: connectionStatus.value
            }) : (0, vue_runtime_esm_bundler_exports.h)("path", {
              "d": dAttr,
              "class": [connectionLineOptions.value.class, connectionStatus, "vue-flow__connection-path"],
              "style": connectionLineStyle.value || connectionLineOptions.value.style,
              "marker-end": `url(#${getMarkerId(connectionLineOptions.value.markerEnd)})`,
              "marker-start": `url(#${getMarkerId(connectionLineOptions.value.markerStart)})`
            })
          )
        );
      };
    }
  });
  var ConnectionLine$1 = ConnectionLine;
  var _hoisted_1$5 = ["tabIndex"];
  var __default__$b = {
    name: "NodesSelection",
    compatConfig: { MODE: 3 }
  };
  var _sfc_main$b = /* @__PURE__ */ (0, vue_runtime_esm_bundler_exports.defineComponent)(__spreadProps(__spreadValues({}, __default__$b), {
    setup(__props) {
      const __$temp_1 = useVueFlow(), emits = (0, vue_runtime_esm_bundler_exports.toRef)(__$temp_1, "emits"), viewport = (0, vue_runtime_esm_bundler_exports.toRef)(__$temp_1, "viewport"), getSelectedNodes = (0, vue_runtime_esm_bundler_exports.toRef)(__$temp_1, "getSelectedNodes"), noPanClassName = (0, vue_runtime_esm_bundler_exports.toRef)(__$temp_1, "noPanClassName"), disableKeyboardA11y = (0, vue_runtime_esm_bundler_exports.toRef)(__$temp_1, "disableKeyboardA11y"), userSelectionActive = (0, vue_runtime_esm_bundler_exports.toRef)(__$temp_1, "userSelectionActive");
      const updatePositions = useUpdateNodePositions();
      const el = (0, vue_runtime_esm_bundler_exports.ref)(null);
      const dragging = useDrag({
        el,
        onStart(args) {
          emits.value.selectionDragStart(args);
        },
        onDrag(args) {
          emits.value.selectionDrag(args);
        },
        onStop(args) {
          emits.value.selectionDragStop(args);
        }
      });
      (0, vue_runtime_esm_bundler_exports.onMounted)(() => {
        var _a2;
        if (!disableKeyboardA11y.value) {
          (_a2 = el.value) == null ? void 0 : _a2.focus({ preventScroll: true });
        }
      });
      const selectedNodesBBox = (0, vue_runtime_esm_bundler_exports.computed)(() => getRectOfNodes(getSelectedNodes.value));
      const innerStyle = (0, vue_runtime_esm_bundler_exports.computed)(() => ({
        width: `${selectedNodesBBox.value.width}px`,
        height: `${selectedNodesBBox.value.height}px`,
        top: `${selectedNodesBBox.value.y}px`,
        left: `${selectedNodesBBox.value.x}px`
      }));
      function onContextMenu(event) {
        emits.value.selectionContextMenu({ event, nodes: getSelectedNodes.value });
      }
      function onKeyDown2(event) {
        if (disableKeyboardA11y.value) {
          return;
        }
        if (arrowKeyDiffs[event.key]) {
          updatePositions(
            {
              x: arrowKeyDiffs[event.key].x,
              y: arrowKeyDiffs[event.key].y
            },
            event.shiftKey
          );
        }
      }
      return (_ctx, _cache) => {
        return !userSelectionActive.value && selectedNodesBBox.value.width && selectedNodesBBox.value.height ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", {
          key: 0,
          class: (0, vue_runtime_esm_bundler_exports.normalizeClass)(["vue-flow__nodesselection vue-flow__container", noPanClassName.value]),
          style: (0, vue_runtime_esm_bundler_exports.normalizeStyle)({ transform: `translate(${viewport.value.x}px,${viewport.value.y}px) scale(${viewport.value.zoom})` })
        }, [
          (0, vue_runtime_esm_bundler_exports.createElementVNode)("div", {
            ref_key: "el",
            ref: el,
            class: (0, vue_runtime_esm_bundler_exports.normalizeClass)([{ dragging: (0, vue_runtime_esm_bundler_exports.unref)(dragging) }, "vue-flow__nodesselection-rect"]),
            style: (0, vue_runtime_esm_bundler_exports.normalizeStyle)(innerStyle.value),
            tabIndex: disableKeyboardA11y.value ? void 0 : -1,
            onContextmenu: onContextMenu,
            onKeydown: onKeyDown2
          }, null, 46, _hoisted_1$5)
        ], 6)) : (0, vue_runtime_esm_bundler_exports.createCommentVNode)("", true);
      };
    }
  }));
  var __default__$a = {
    name: "UserSelection",
    compatConfig: { MODE: 3 }
  };
  var _sfc_main$a = /* @__PURE__ */ (0, vue_runtime_esm_bundler_exports.defineComponent)(__spreadProps(__spreadValues({}, __default__$a), {
    props: {
      userSelectionRect: {}
    },
    setup(__props) {
      return (_ctx, _cache) => {
        return (0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", {
          class: "vue-flow__selection vue-flow__container",
          style: (0, vue_runtime_esm_bundler_exports.normalizeStyle)({
            width: `${_ctx.userSelectionRect.width}px`,
            height: `${_ctx.userSelectionRect.height}px`,
            transform: `translate(${_ctx.userSelectionRect.x}px, ${_ctx.userSelectionRect.y}px)`
          })
        }, null, 4);
      };
    }
  }));
  var defaultNodeTypes = {
    input: InputNode$1,
    default: DefaultNode$1,
    output: OutputNode$1
  };
  var defaultEdgeTypes = {
    default: BezierEdge$1,
    straight: StraightEdge$1,
    step: StepEdge$1,
    smoothstep: SmoothStepEdge$1,
    simplebezier: SimpleBezierEdge$1
  };
  function defaultState() {
    return {
      vueFlowRef: null,
      viewportRef: null,
      nodes: [],
      edges: [],
      nodeTypes: {},
      edgeTypes: {},
      initialized: false,
      dimensions: {
        width: 0,
        height: 0
      },
      viewport: { x: 0, y: 0, zoom: 1 },
      d3Zoom: null,
      d3Selection: null,
      d3ZoomHandler: null,
      minZoom: 0.5,
      maxZoom: 2,
      translateExtent: [
        [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
        [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
      ],
      nodeExtent: [
        [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
        [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
      ],
      selectionMode: SelectionMode.Full,
      paneDragging: false,
      preventScrolling: true,
      zoomOnScroll: true,
      zoomOnPinch: true,
      zoomOnDoubleClick: true,
      panOnScroll: false,
      panOnScrollSpeed: 0.5,
      panOnScrollMode: PanOnScrollMode.Free,
      panOnDrag: true,
      edgeUpdaterRadius: 10,
      onlyRenderVisibleElements: false,
      defaultViewport: { x: 0, y: 0, zoom: 1 },
      nodesSelectionActive: false,
      userSelectionActive: false,
      userSelectionRect: null,
      defaultMarkerColor: "#b1b1b7",
      connectionLineStyle: {},
      connectionLineType: null,
      connectionLineOptions: {
        type: ConnectionLineType.Bezier,
        style: {}
      },
      connectionMode: ConnectionMode.Loose,
      connectionStartHandle: null,
      connectionEndHandle: null,
      connectionClickStartHandle: null,
      connectionPosition: { x: NaN, y: NaN },
      connectionRadius: 20,
      connectOnClick: true,
      connectionStatus: null,
      isValidConnection: null,
      snapGrid: [15, 15],
      snapToGrid: false,
      edgesUpdatable: false,
      edgesFocusable: true,
      nodesFocusable: true,
      nodesConnectable: true,
      nodesDraggable: true,
      nodeDragThreshold: 0,
      elementsSelectable: true,
      selectNodesOnDrag: true,
      multiSelectionActive: false,
      selectionKeyCode: "Shift",
      multiSelectionKeyCode: isMacOs() ? "Meta" : "Control",
      zoomActivationKeyCode: isMacOs() ? "Meta" : "Control",
      deleteKeyCode: "Backspace",
      panActivationKeyCode: "Space",
      hooks: createHooks(),
      applyDefault: true,
      autoConnect: false,
      fitViewOnInit: false,
      noDragClassName: "nodrag",
      noWheelClassName: "nowheel",
      noPanClassName: "nopan",
      defaultEdgeOptions: void 0,
      elevateEdgesOnSelect: false,
      elevateNodesOnSelect: true,
      autoPanOnNodeDrag: true,
      autoPanOnConnect: true,
      disableKeyboardA11y: false,
      ariaLiveMessage: "",
      __experimentalFeatures: {
        nestedFlow: false
      }
    };
  }
  function useState(opts) {
    const state = defaultState();
    if (opts) {
      Object.keys(opts).forEach((o) => {
        const option = opts[o];
        if (isDef2(option)) {
          state[o] = option;
        }
      });
    }
    return state;
  }
  function useActions(id2, emits, hooksOn, state, getters, nodeIds, edgeIds) {
    const viewportHelper = useViewport(state, getters);
    const updateNodeInternals = (ids) => {
      var _a2;
      const updateIds = (_a2 = ids != null ? ids : nodeIds.value) != null ? _a2 : [];
      state.hooks.updateNodeInternals.trigger(updateIds);
    };
    const getIncomers$1 = (nodeOrId) => {
      return getIncomers(nodeOrId, state.nodes, state.edges);
    };
    const getOutgoers$1 = (nodeOrId) => {
      return getOutgoers(nodeOrId, state.nodes, state.edges);
    };
    const getConnectedEdges$1 = (nodesOrId) => {
      return getConnectedEdges(nodesOrId, state.edges);
    };
    const findNode = (id22) => {
      if (!id22) {
        return;
      }
      if (state.nodes && !nodeIds.value.length) {
        return state.nodes.find((node) => node.id === id22);
      }
      return state.nodes[nodeIds.value.indexOf(id22)];
    };
    const findEdge = (id22) => {
      if (!id22) {
        return;
      }
      if (state.edges && !edgeIds.value.length) {
        return state.edges.find((edge) => edge.id === id22);
      }
      return state.edges[edgeIds.value.indexOf(id22)];
    };
    const updateNodePositions = (dragItems, changed, dragging) => {
      const changes = [];
      dragItems.forEach((node) => {
        var _a3, _b2;
        var _a2, _b;
        const change = {
          id: node.id,
          type: "position",
          dragging,
          from: node.from
        };
        if (changed) {
          change.position = node.position;
          if (node.parentNode) {
            const parentNode = findNode(node.parentNode);
            change.position = {
              x: change.position.x - ((_a3 = (_a2 = parentNode == null ? void 0 : parentNode.computedPosition) == null ? void 0 : _a2.x) != null ? _a3 : 0),
              y: change.position.y - ((_b2 = (_b = parentNode == null ? void 0 : parentNode.computedPosition) == null ? void 0 : _b.y) != null ? _b2 : 0)
            };
          }
        }
        changes.push(change);
      });
      if (changes == null ? void 0 : changes.length) {
        state.hooks.nodesChange.trigger(changes);
      }
    };
    const updateNodeDimensions = (updates) => {
      var _a2;
      if (!state.vueFlowRef) {
        return;
      }
      const viewportNode = state.vueFlowRef.querySelector(".vue-flow__transformationpane");
      if (!viewportNode) {
        return;
      }
      let zoom2;
      if ((_a2 = state.__experimentalFeatures) == null ? void 0 : _a2.nestedFlow) {
        let viewportNodes = [viewportNode];
        let parentNode = viewportNode;
        let isNested;
        while (!isNested && parentNode) {
          parentNode = parentNode.parentElement;
          isNested = parentNode == null ? void 0 : parentNode.classList.contains("vue-flow__transformationpane");
          if (isNested) {
            viewportNodes = [parentNode, ...viewportNodes];
          }
        }
        viewportNodes.forEach((vp) => {
          const style = window.getComputedStyle(vp);
          const { m22 } = new window.DOMMatrixReadOnly(style.transform);
          if (!zoom2) {
            zoom2 = m22;
          } else {
            zoom2 *= m22;
          }
        });
      } else {
        const style = window.getComputedStyle(viewportNode);
        const { m22 } = new window.DOMMatrixReadOnly(style.transform);
        zoom2 = m22;
      }
      const changes = updates.reduce((res, update) => {
        const node = findNode(update.id);
        if (node) {
          const dimensions = getDimensions(update.nodeElement);
          const doUpdate = !!(dimensions.width && dimensions.height && (node.dimensions.width !== dimensions.width || node.dimensions.height !== dimensions.height || update.forceUpdate));
          if (doUpdate) {
            node.handleBounds.source = getHandleBounds(".source", update.nodeElement, zoom2);
            node.handleBounds.target = getHandleBounds(".target", update.nodeElement, zoom2);
            node.dimensions = dimensions;
            node.initialized = true;
            res.push({
              id: node.id,
              type: "dimensions",
              dimensions
            });
          }
        }
        return res;
      }, []);
      if (changes.length) {
        state.hooks.nodesChange.trigger(changes);
      }
    };
    const nodeSelectionHandler = (nodes, selected) => {
      const nodeIds2 = nodes.map((n) => n.id);
      let changedNodes;
      let changedEdges = [];
      if (state.multiSelectionActive) {
        changedNodes = nodeIds2.map((nodeId) => createSelectionChange(nodeId, selected));
      } else {
        const selectionChanges = getSelectionChanges([...state.nodes, ...state.edges], nodeIds2);
        changedNodes = selectionChanges.changedNodes;
        changedEdges = selectionChanges.changedEdges;
      }
      if (changedNodes.length) {
        state.hooks.nodesChange.trigger(changedNodes);
      }
      if (changedEdges.length) {
        state.hooks.edgesChange.trigger(changedEdges);
      }
    };
    const edgeSelectionHandler = (edges, selected) => {
      const edgeIds2 = edges.map((e2) => e2.id);
      let changedNodes = [];
      let changedEdges;
      if (state.multiSelectionActive) {
        changedEdges = edgeIds2.map((edgeId) => createSelectionChange(edgeId, selected));
      } else {
        const selectionChanges = getSelectionChanges([...state.nodes, ...state.edges], edgeIds2);
        changedNodes = selectionChanges.changedNodes;
        changedEdges = selectionChanges.changedEdges;
      }
      if (changedNodes.length) {
        state.hooks.nodesChange.trigger(changedNodes);
      }
      if (changedEdges.length) {
        state.hooks.edgesChange.trigger(changedEdges);
      }
    };
    const elementSelectionHandler = (elements, selected) => {
      const nodeIds2 = elements.filter(isNode).map((n) => n.id);
      const edgeIds2 = elements.filter(isEdge).map((e2) => e2.id);
      let { changedNodes, changedEdges } = getSelectionChanges([...state.nodes, ...state.edges], [...nodeIds2, ...edgeIds2]);
      if (state.multiSelectionActive) {
        changedNodes = nodeIds2.map((nodeId) => createSelectionChange(nodeId, selected));
        changedEdges = edgeIds2.map((edgeId) => createSelectionChange(edgeId, selected));
      }
      if (changedNodes.length) {
        state.hooks.nodesChange.trigger(changedNodes);
      }
      if (changedEdges.length) {
        state.hooks.edgesChange.trigger(changedEdges);
      }
    };
    const addSelectedNodes = (nodes) => {
      nodeSelectionHandler(nodes, true);
    };
    const addSelectedEdges = (edges) => {
      edgeSelectionHandler(edges, true);
    };
    const addSelectedElements = (elements) => {
      elementSelectionHandler(elements, true);
    };
    const removeSelectedNodes = (nodes) => {
      if (!nodes.length) {
        return nodeSelectionHandler(nodes, false);
      }
      const nodeIds2 = nodes.map((n) => n.id);
      const changedNodes = nodeIds2.map((nodeId) => createSelectionChange(nodeId, false));
      if (changedNodes.length) {
        state.hooks.nodesChange.trigger(changedNodes);
      }
    };
    const removeSelectedEdges = (edges) => {
      if (!edges.length) {
        return edgeSelectionHandler(edges, false);
      }
      const edgeIds2 = edges.map((e2) => e2.id);
      const changedEdges = edgeIds2.map((edgeId) => createSelectionChange(edgeId, false));
      if (changedEdges.length) {
        state.hooks.edgesChange.trigger(changedEdges);
      }
    };
    const removeSelectedElements = (elements) => {
      if (!elements || !elements.length) {
        return elementSelectionHandler([], false);
      }
      const changes = elements.reduce(
        (changes2, curr) => {
          const selectionChange = createSelectionChange(curr.id, false);
          if (isNode(curr)) {
            changes2.nodes.push(selectionChange);
          } else {
            changes2.edges.push(selectionChange);
          }
          return changes2;
        },
        { nodes: [], edges: [] }
      );
      if (changes.nodes.length) {
        state.hooks.nodesChange.trigger(changes.nodes);
      }
      if (changes.edges.length) {
        state.hooks.edgesChange.trigger(changes.edges);
      }
    };
    const setMinZoom = (minZoom) => {
      var _a2;
      (_a2 = state.d3Zoom) == null ? void 0 : _a2.scaleExtent([minZoom, state.maxZoom]);
      state.minZoom = minZoom;
    };
    const setMaxZoom = (maxZoom) => {
      var _a2;
      (_a2 = state.d3Zoom) == null ? void 0 : _a2.scaleExtent([state.minZoom, maxZoom]);
      state.maxZoom = maxZoom;
    };
    const setTranslateExtent = (translateExtent) => {
      var _a2;
      (_a2 = state.d3Zoom) == null ? void 0 : _a2.translateExtent(translateExtent);
      state.translateExtent = translateExtent;
    };
    const setNodeExtent = (nodeExtent) => {
      state.nodeExtent = nodeExtent;
      updateNodeInternals(nodeIds.value);
    };
    const setInteractive = (isInteractive) => {
      state.nodesDraggable = isInteractive;
      state.nodesConnectable = isInteractive;
      state.elementsSelectable = isInteractive;
    };
    const setNodes = (nodes) => {
      const nextNodes = nodes instanceof Function ? nodes(state.nodes) : nodes;
      if (!state.initialized && !nextNodes.length) {
        return;
      }
      state.nodes = createGraphNodes(nextNodes, state.nodes, findNode, state.hooks.error.trigger);
    };
    const setEdges = (edges) => {
      const nextEdges = edges instanceof Function ? edges(state.edges) : edges;
      if (!state.initialized && !nextEdges.length) {
        return;
      }
      const validEdges = state.isValidConnection ? nextEdges.filter(
        (edge) => state.isValidConnection(edge, {
          edges: state.edges,
          nodes: state.nodes,
          sourceNode: findNode(edge.source),
          targetNode: findNode(edge.target)
        })
      ) : nextEdges;
      state.edges = validEdges.reduce((res, edge) => {
        const sourceNode = findNode(edge.source);
        const targetNode = findNode(edge.target);
        const missingSource = !sourceNode || typeof sourceNode === "undefined";
        const missingTarget = !targetNode || typeof targetNode === "undefined";
        if (missingSource && missingTarget) {
          state.hooks.error.trigger(new VueFlowError(ErrorCode.EDGE_SOURCE_TARGET_MISSING, edge.id, edge.source, edge.target));
        } else {
          if (missingSource) {
            state.hooks.error.trigger(new VueFlowError(ErrorCode.EDGE_SOURCE_MISSING, edge.id, edge.source));
          }
          if (missingTarget) {
            state.hooks.error.trigger(new VueFlowError(ErrorCode.EDGE_TARGET_MISSING, edge.id, edge.target));
          }
        }
        if (missingSource || missingTarget) {
          return res;
        }
        const storedEdge = findEdge(edge.id);
        res.push(__spreadProps(__spreadValues({}, parseEdge(edge, Object.assign({}, storedEdge, state.defaultEdgeOptions))), {
          sourceNode,
          targetNode
        }));
        return res;
      }, []);
    };
    const setElements = (elements) => {
      const nextElements = elements instanceof Function ? elements([...state.nodes, ...state.edges]) : elements;
      if (!state.initialized && !nextElements.length) {
        return;
      }
      setNodes(nextElements.filter(isNode));
      setEdges(nextElements.filter(isEdge));
    };
    const addNodes = (nodes) => {
      let nextNodes = nodes instanceof Function ? nodes(state.nodes) : nodes;
      nextNodes = Array.isArray(nextNodes) ? nextNodes : [nextNodes];
      const graphNodes = createGraphNodes(nextNodes, state.nodes, findNode, state.hooks.error.trigger);
      const changes = graphNodes.map(createAdditionChange);
      if (changes.length) {
        state.hooks.nodesChange.trigger(changes);
      }
    };
    const addEdges = (params) => {
      let nextEdges = params instanceof Function ? params(state.edges) : params;
      nextEdges = Array.isArray(nextEdges) ? nextEdges : [nextEdges];
      const validEdges = state.isValidConnection ? nextEdges.filter(
        (edge) => state.isValidConnection(edge, {
          edges: state.edges,
          nodes: state.nodes,
          sourceNode: findNode(edge.source),
          targetNode: findNode(edge.target)
        })
      ) : nextEdges;
      const changes = validEdges.reduce((edgeChanges, param) => {
        const edge = addEdgeToStore(
          __spreadValues(__spreadValues({}, param), state.defaultEdgeOptions),
          state.edges,
          state.hooks.error.trigger
        );
        if (edge) {
          const sourceNode = findNode(edge.source);
          const targetNode = findNode(edge.target);
          edgeChanges.push(
            createAdditionChange(__spreadProps(__spreadValues({}, edge), {
              sourceNode,
              targetNode
            }))
          );
        }
        return edgeChanges;
      }, []);
      if (changes.length) {
        state.hooks.edgesChange.trigger(changes);
      }
    };
    const removeNodes = (nodes, removeConnectedEdges = true, removeChildren = false) => {
      let nodesToRemove = nodes instanceof Function ? nodes(state.nodes) : nodes;
      nodesToRemove = Array.isArray(nodesToRemove) ? nodesToRemove : [nodesToRemove];
      const nodeChanges = [];
      const edgeChanges = [];
      function createEdgeRemovalChanges(nodes2) {
        const connections = getConnectedEdges$1(nodes2).filter((edge) => isDef2(edge.deletable) ? edge.deletable : true);
        edgeChanges.push(
          ...connections.map((connection) => createEdgeRemoveChange(connection.id, connection.source, connection.target))
        );
      }
      function createChildrenRemovalChanges(id22) {
        const children2 = state.nodes.filter((n) => n.parentNode === id22);
        if (children2.length) {
          const childIds = children2.map((n) => n.id);
          nodeChanges.push(...childIds.map((id3) => createNodeRemoveChange(id3)));
          if (removeConnectedEdges) {
            createEdgeRemovalChanges(children2);
          }
          children2.forEach((child) => {
            createChildrenRemovalChanges(child.id);
          });
        }
      }
      nodesToRemove.forEach((item) => {
        const currNode = typeof item === "string" ? findNode(item) : item;
        if (!currNode) {
          return;
        }
        if (isDef2(currNode.deletable) && !currNode.deletable) {
          return;
        }
        nodeChanges.push(createNodeRemoveChange(currNode.id));
        if (removeConnectedEdges) {
          createEdgeRemovalChanges([currNode]);
        }
        if (removeChildren) {
          createChildrenRemovalChanges(currNode.id);
        }
      });
      if (edgeChanges.length) {
        state.hooks.edgesChange.trigger(edgeChanges);
      }
      if (nodeChanges.length) {
        state.hooks.nodesChange.trigger(nodeChanges);
      }
    };
    const removeEdges = (edges) => {
      let edgesToRemove = edges instanceof Function ? edges(state.edges) : edges;
      edgesToRemove = Array.isArray(edgesToRemove) ? edgesToRemove : [edgesToRemove];
      const changes = [];
      edgesToRemove.forEach((item) => {
        const currEdge = typeof item === "string" ? findEdge(item) : item;
        if (!currEdge) {
          return;
        }
        if (isDef2(currEdge.deletable) && !currEdge.deletable) {
          return;
        }
        changes.push(createEdgeRemoveChange(typeof item === "string" ? item : item.id, currEdge.source, currEdge.target));
      });
      state.hooks.edgesChange.trigger(changes);
    };
    const updateEdge2 = (oldEdge, newConnection, shouldReplaceId = true) => updateEdgeAction(oldEdge, newConnection, state.edges, findEdge, shouldReplaceId, state.hooks.error.trigger);
    const applyNodeChanges2 = (changes) => applyChanges(changes, state.nodes);
    const applyEdgeChanges2 = (changes) => applyChanges(changes, state.edges);
    const startConnection = (startHandle, position, event, isClick = false) => {
      if (isClick) {
        state.connectionClickStartHandle = startHandle;
      } else {
        state.connectionStartHandle = startHandle;
      }
      state.connectionEndHandle = null;
      state.connectionStatus = null;
      if (position) {
        state.connectionPosition = position;
      }
    };
    const updateConnection = (position, result = null, status = null) => {
      if (state.connectionStartHandle) {
        state.connectionPosition = position;
        state.connectionEndHandle = result;
        state.connectionStatus = status;
      }
    };
    const endConnection = (event, isClick) => {
      state.connectionPosition = { x: NaN, y: NaN };
      state.connectionEndHandle = null;
      state.connectionStatus = null;
      if (isClick) {
        state.connectionClickStartHandle = null;
      } else {
        state.connectionStartHandle = null;
      }
    };
    const getNodeRect = (nodeOrRect) => {
      const isRectObj = isRect(nodeOrRect);
      const node = isRectObj ? null : isGraphNode(nodeOrRect) ? nodeOrRect : findNode(nodeOrRect.id);
      if (!isRectObj && !node) {
        return [null, null, isRectObj];
      }
      const nodeRect = isRectObj ? nodeOrRect : nodeToRect(node);
      return [nodeRect, node, isRectObj];
    };
    const getIntersectingNodes = (nodeOrRect, partially = true, nodes = state.nodes) => {
      const [nodeRect, node, isRect2] = getNodeRect(nodeOrRect);
      if (!nodeRect) {
        return [];
      }
      return (nodes || state.nodes).filter((n) => {
        if (!isRect2 && (n.id === node.id || !n.computedPosition)) {
          return false;
        }
        const currNodeRect = nodeToRect(n);
        const overlappingArea = getOverlappingArea(currNodeRect, nodeRect);
        const partiallyVisible = partially && overlappingArea > 0;
        return partiallyVisible || overlappingArea >= Number(nodeRect.width) * Number(nodeRect.height);
      });
    };
    const isNodeIntersecting = (nodeOrRect, area, partially = true) => {
      const [nodeRect] = getNodeRect(nodeOrRect);
      if (!nodeRect) {
        return false;
      }
      const overlappingArea = getOverlappingArea(nodeRect, area);
      const partiallyVisible = partially && overlappingArea > 0;
      return partiallyVisible || overlappingArea >= Number(nodeRect.width) * Number(nodeRect.height);
    };
    const panBy = (delta) => {
      const { viewport, dimensions, d3Zoom, d3Selection, translateExtent } = state;
      if (!d3Zoom || !d3Selection || !delta.x && !delta.y) {
        return false;
      }
      const nextTransform = identity2.translate(viewport.x + delta.x, viewport.y + delta.y).scale(viewport.zoom);
      const extent = [
        [0, 0],
        [dimensions.width, dimensions.height]
      ];
      const constrainedTransform = d3Zoom.constrain()(nextTransform, extent, translateExtent);
      const transformChanged = state.viewport.x !== constrainedTransform.x || state.viewport.y !== constrainedTransform.y || state.viewport.zoom !== constrainedTransform.k;
      d3Zoom.transform(d3Selection, constrainedTransform);
      return transformChanged;
    };
    const setState = (options) => {
      const opts = options instanceof Function ? options(state) : options;
      const skip = [
        "modelValue",
        "nodes",
        "edges",
        "maxZoom",
        "minZoom",
        "translateExtent",
        "nodeExtent",
        "hooks",
        "defaultEdgeOptions"
      ];
      const exclude = [
        "d3Zoom",
        "d3Selection",
        "d3ZoomHandler",
        "viewportRef",
        "vueFlowRef",
        "dimensions",
        "hooks"
      ];
      if (isDef2(opts.defaultEdgeOptions)) {
        state.defaultEdgeOptions = opts.defaultEdgeOptions;
      }
      const elements = opts.modelValue || opts.nodes || opts.edges ? [] : void 0;
      if (elements) {
        if (opts.modelValue) {
          elements.push(...opts.modelValue);
        }
        if (opts.nodes) {
          elements.push(...opts.nodes);
        }
        if (opts.edges) {
          elements.push(...opts.edges);
        }
        setElements(elements);
      }
      const setSkippedOptions = () => {
        if (isDef2(opts.maxZoom)) {
          setMaxZoom(opts.maxZoom);
        }
        if (isDef2(opts.minZoom)) {
          setMinZoom(opts.minZoom);
        }
        if (isDef2(opts.translateExtent)) {
          setTranslateExtent(opts.translateExtent);
        }
        if (isDef2(opts.nodeExtent)) {
          setNodeExtent(opts.nodeExtent);
        }
      };
      Object.keys(opts).forEach((o) => {
        const key = o;
        const option = opts[key];
        if (![...skip, ...exclude].includes(key) && isDef2(option)) {
          state[key] = option;
        }
      });
      until2(() => state.d3Zoom).not.toBeNull().then(setSkippedOptions);
      if (!state.initialized) {
        state.initialized = true;
      }
    };
    const toObject = () => {
      return JSON.parse(
        JSON.stringify({
          nodes: state.nodes.map((n) => {
            const _a2 = n, {
              computedPosition: _,
              handleBounds: __2,
              selected: ___,
              dimensions: ____,
              isParent: _____,
              resizing: ______,
              dragging: _______,
              initialized: ________
            } = _a2, rest = __objRest(_a2, [
              "computedPosition",
              "handleBounds",
              "selected",
              "dimensions",
              "isParent",
              "resizing",
              "dragging",
              "initialized"
            ]);
            return rest;
          }),
          edges: state.edges.map((e2) => {
            const _a2 = e2, { selected: _, sourceNode: __2, targetNode: ___ } = _a2, rest = __objRest(_a2, ["selected", "sourceNode", "targetNode"]);
            return rest;
          }),
          position: [state.viewport.x, state.viewport.y],
          zoom: state.viewport.zoom,
          viewport: state.viewport
        })
      );
    };
    const fromObject = (obj) => {
      const { nodes, edges, position, zoom: zoom2, viewport } = obj;
      if (nodes) {
        setNodes(nodes);
      }
      if (edges) {
        setEdges(edges);
      }
      if ((viewport == null ? void 0 : viewport.x) && (viewport == null ? void 0 : viewport.y) || position) {
        const x2 = (viewport == null ? void 0 : viewport.x) || position[0];
        const y2 = (viewport == null ? void 0 : viewport.y) || position[1];
        const nextZoom = (viewport == null ? void 0 : viewport.zoom) || zoom2 || state.viewport.zoom;
        until2(() => viewportHelper.value.initialized).toBe(true).then(() => {
          viewportHelper.value.setViewport({
            x: x2,
            y: y2,
            zoom: nextZoom
          });
        });
      }
    };
    const $reset = () => {
      var _a2, _b, _c;
      const resetState = useState();
      state.edges = [];
      state.nodes = [];
      if (state.d3Zoom && state.d3Selection) {
        const updatedTransform = identity2.translate((_a2 = resetState.defaultViewport.x) != null ? _a2 : 0, (_b = resetState.defaultViewport.y) != null ? _b : 0).scale(clamp2((_c = resetState.defaultViewport.zoom) != null ? _c : 1, resetState.minZoom, resetState.maxZoom));
        const bbox = state.viewportRef.getBoundingClientRect();
        const extent = [
          [0, 0],
          [bbox.width, bbox.height]
        ];
        const constrainedTransform = state.d3Zoom.constrain()(updatedTransform, extent, resetState.translateExtent);
        state.d3Zoom.transform(state.d3Selection, constrainedTransform);
      }
      setState(resetState);
    };
    const actions = {
      updateNodePositions,
      updateNodeDimensions,
      setElements,
      setNodes,
      setEdges,
      addNodes,
      addEdges,
      removeNodes,
      removeEdges,
      findNode,
      findEdge,
      updateEdge: updateEdge2,
      applyEdgeChanges: applyEdgeChanges2,
      applyNodeChanges: applyNodeChanges2,
      addSelectedElements,
      addSelectedNodes,
      addSelectedEdges,
      setMinZoom,
      setMaxZoom,
      setTranslateExtent,
      setNodeExtent,
      removeSelectedElements,
      removeSelectedNodes,
      removeSelectedEdges,
      startConnection,
      updateConnection,
      endConnection,
      setInteractive,
      setState,
      getIntersectingNodes,
      getIncomers: getIncomers$1,
      getOutgoers: getOutgoers$1,
      getConnectedEdges: getConnectedEdges$1,
      isNodeIntersecting,
      panBy,
      fitView: (params) => viewportHelper.value.fitView(params),
      zoomIn: (transitionOpts) => viewportHelper.value.zoomIn(transitionOpts),
      zoomOut: (transitionOpts) => viewportHelper.value.zoomOut(transitionOpts),
      zoomTo: (zoomLevel, transitionOpts) => viewportHelper.value.zoomTo(zoomLevel, transitionOpts),
      setViewport: (params, transitionOpts) => viewportHelper.value.setViewport(params, transitionOpts),
      setTransform: (params, transitionOpts) => viewportHelper.value.setTransform(params, transitionOpts),
      getViewport: () => viewportHelper.value.getViewport(),
      getTransform: () => viewportHelper.value.getTransform(),
      setCenter: (x2, y2, opts) => viewportHelper.value.setCenter(x2, y2, opts),
      fitBounds: (params, opts) => viewportHelper.value.fitBounds(params, opts),
      project: (params) => viewportHelper.value.project(params),
      toObject,
      fromObject,
      updateNodeInternals,
      $reset,
      $destroy: () => {
      }
    };
    until2(() => viewportHelper.value.initialized).toBe(true, { flush: "pre" }).then(() => {
      if (state.fitViewOnInit) {
        viewportHelper.value.fitView();
      }
      state.hooks.paneReady.trigger(__spreadValues(__spreadValues(__spreadValues(__spreadValues({
        id: id2,
        emits,
        vueFlowVersion: "1.26.0"
      }, hooksOn), state), getters), actions));
    });
    return actions;
  }
  function useGetters(state, nodeIds, edgeIds) {
    const getNode = (0, vue_runtime_esm_bundler_exports.computed)(() => (id2) => {
      if (state.nodes && !nodeIds.value.length) {
        return state.nodes.find((node) => node.id === id2);
      }
      return state.nodes[nodeIds.value.indexOf(id2)];
    });
    const getEdge = (0, vue_runtime_esm_bundler_exports.computed)(() => (id2) => {
      if (state.edges && !edgeIds.value.length) {
        return state.edges.find((edge) => edge.id === id2);
      }
      return state.edges[edgeIds.value.indexOf(id2)];
    });
    const getEdgeTypes = (0, vue_runtime_esm_bundler_exports.computed)(() => {
      var _a2;
      const edgeTypes = __spreadValues(__spreadValues({}, defaultEdgeTypes), state.edgeTypes);
      const keys = Object.keys(edgeTypes);
      (_a2 = state.edges) == null ? void 0 : _a2.forEach((e2) => e2.type && !keys.includes(e2.type) && (edgeTypes[e2.type] = e2.type));
      return edgeTypes;
    });
    const getNodeTypes = (0, vue_runtime_esm_bundler_exports.computed)(() => {
      var _a2;
      const nodeTypes = __spreadValues(__spreadValues({}, defaultNodeTypes), state.nodeTypes);
      const keys = Object.keys(nodeTypes);
      (_a2 = state.nodes) == null ? void 0 : _a2.forEach((n) => n.type && !keys.includes(n.type) && (nodeTypes[n.type] = n.type));
      return nodeTypes;
    });
    const getNodes = (0, vue_runtime_esm_bundler_exports.computed)(() => {
      const nodes = state.nodes.filter((n) => !n.hidden);
      return state.onlyRenderVisibleElements ? nodes && getNodesInside(
        nodes,
        {
          x: 0,
          y: 0,
          width: state.dimensions.width,
          height: state.dimensions.height
        },
        state.viewport,
        true
      ) : nodes != null ? nodes : [];
    });
    const edgeHidden = (e2, source, target) => {
      source = source != null ? source : getNode.value(e2.source);
      target = target != null ? target : getNode.value(e2.target);
      if (!source || !target) {
        state.hooks.error.trigger(new VueFlowError(ErrorCode.EDGE_ORPHANED, e2.id));
        return;
      }
      return !e2.hidden && !target.hidden && !source.hidden;
    };
    const getEdges = (0, vue_runtime_esm_bundler_exports.computed)(() => {
      if (!state.onlyRenderVisibleElements) {
        return state.edges.filter((edge) => edgeHidden(edge));
      }
      return state.edges.filter((e2) => {
        const source = getNode.value(e2.source);
        const target = getNode.value(e2.target);
        return edgeHidden(e2, source, target) && isEdgeVisible({
          sourcePos: source.computedPosition || { x: 0, y: 0 },
          targetPos: target.computedPosition || { x: 0, y: 0 },
          sourceWidth: source.dimensions.width,
          sourceHeight: source.dimensions.height,
          targetWidth: target.dimensions.width,
          targetHeight: target.dimensions.height,
          width: state.dimensions.width,
          height: state.dimensions.height,
          viewport: state.viewport
        });
      });
    });
    const getElements = (0, vue_runtime_esm_bundler_exports.computed)(() => [...getNodes.value, ...getEdges.value]);
    const getSelectedNodes = (0, vue_runtime_esm_bundler_exports.computed)(() => state.nodes.filter((n) => n.selected));
    const getSelectedEdges = (0, vue_runtime_esm_bundler_exports.computed)(() => state.edges.filter((e2) => e2.selected));
    const getSelectedElements = (0, vue_runtime_esm_bundler_exports.computed)(() => {
      var _a2, _b;
      return [
        ...(_a2 = getSelectedNodes.value) != null ? _a2 : [],
        ...(_b = getSelectedEdges.value) != null ? _b : []
      ];
    });
    const getNodesInitialized = (0, vue_runtime_esm_bundler_exports.computed)(
      () => getNodes.value.filter((n) => n.initialized && n.handleBounds !== void 0)
    );
    const areNodesInitialized = (0, vue_runtime_esm_bundler_exports.computed)(
      () => getNodes.value.length > 0 && getNodesInitialized.value.length === getNodes.value.length
    );
    return {
      getNode,
      getEdge,
      getElements,
      getEdgeTypes,
      getNodeTypes,
      getEdges,
      getNodes,
      getSelectedElements,
      getSelectedNodes,
      getSelectedEdges,
      getNodesInitialized,
      areNodesInitialized
    };
  }
  var Storage = class {
    constructor() {
      this.currentId = 0;
      this.flows = /* @__PURE__ */ new Map();
    }
    static getInstance() {
      if (!Storage.instance) {
        Storage.instance = new Storage();
      }
      return Storage.instance;
    }
    set(id2, flow) {
      return this.flows.set(id2, flow);
    }
    get(id2) {
      return this.flows.get(id2);
    }
    remove(id2) {
      return this.flows.delete(id2);
    }
    create(id2, preloadedState) {
      const state = useState(preloadedState);
      const reactiveState = (0, vue_runtime_esm_bundler_exports.reactive)(state);
      const hooksOn = {};
      Object.entries(reactiveState.hooks).forEach(([n, h22]) => {
        const name = `on${n.charAt(0).toUpperCase() + n.slice(1)}`;
        hooksOn[name] = h22.on;
      });
      const emits = {};
      Object.entries(reactiveState.hooks).forEach(([n, h22]) => {
        emits[n] = h22.trigger;
      });
      const nodeIds = (0, vue_runtime_esm_bundler_exports.computed)(() => reactiveState.nodes.map((n) => n.id));
      const edgeIds = (0, vue_runtime_esm_bundler_exports.computed)(() => reactiveState.edges.map((e2) => e2.id));
      const getters = useGetters(reactiveState, nodeIds, edgeIds);
      const actions = useActions(id2, emits, hooksOn, reactiveState, getters, nodeIds, edgeIds);
      actions.setState(reactiveState);
      const flow = __spreadProps(__spreadValues(__spreadValues(__spreadValues(__spreadValues({}, hooksOn), getters), actions), toRefs3(reactiveState)), {
        emits,
        id: id2,
        vueFlowVersion: "1.26.0",
        $destroy: () => {
          this.remove(id2);
        }
      });
      this.set(id2, flow);
      return flow;
    }
    getId() {
      return `vue-flow-${this.currentId++}`;
    }
  };
  function useVueFlow(options) {
    const storage = Storage.getInstance();
    const scope = (0, vue_runtime_esm_bundler_exports.getCurrentScope)();
    const id2 = options == null ? void 0 : options.id;
    const vueFlowId = (scope == null ? void 0 : scope.vueFlowId) || id2;
    let vueFlow;
    if (scope) {
      const injection = (0, vue_runtime_esm_bundler_exports.inject)(VueFlow, null);
      if (typeof injection !== "undefined" && injection !== null) {
        vueFlow = injection;
      }
    }
    if (!vueFlow) {
      if (vueFlowId) {
        vueFlow = storage.get(vueFlowId);
      }
    }
    if (!vueFlow || vueFlow && id2 && id2 !== vueFlow.id) {
      const name = id2 != null ? id2 : storage.getId();
      const state = storage.create(name, options);
      vueFlow = state;
      (0, vue_runtime_esm_bundler_exports.effectScope)().run(() => {
        (0, vue_runtime_esm_bundler_exports.watch)(
          state.applyDefault,
          (shouldApplyDefault, __2, onCleanup) => {
            const nodesChangeHandler = (changes) => {
              state.applyNodeChanges(changes);
            };
            const edgesChangeHandler = (changes) => {
              state.applyEdgeChanges(changes);
            };
            if (shouldApplyDefault) {
              state.onNodesChange(nodesChangeHandler);
              state.onEdgesChange(edgesChangeHandler);
            } else {
              state.hooks.value.nodesChange.off(nodesChangeHandler);
              state.hooks.value.edgesChange.off(edgesChangeHandler);
            }
            onCleanup(() => {
              state.hooks.value.nodesChange.off(nodesChangeHandler);
              state.hooks.value.edgesChange.off(edgesChangeHandler);
            });
          },
          { immediate: true }
        );
        tryOnScopeDispose2(() => {
          if (vueFlow) {
            const storedInstance = storage.get(vueFlow.id);
            if (storedInstance) {
              storedInstance.$destroy();
            } else {
              warn2(`No store instance found for id ${vueFlow.id} in storage.`);
            }
          }
        });
      });
    } else {
      if (options) {
        vueFlow.setState(options);
      }
    }
    if (scope) {
      (0, vue_runtime_esm_bundler_exports.provide)(VueFlow, vueFlow);
      scope.vueFlowId = vueFlow.id;
    }
    return vueFlow;
  }
  function createEdgeHooks() {
    return {
      doubleClick: createExtendedEventHook(),
      click: createExtendedEventHook(),
      mouseEnter: createExtendedEventHook(),
      mouseMove: createExtendedEventHook(),
      mouseLeave: createExtendedEventHook(),
      contextMenu: createExtendedEventHook(),
      updateStart: createExtendedEventHook(),
      update: createExtendedEventHook(),
      updateEnd: createExtendedEventHook()
    };
  }
  function useEdgeHooks(edge, emits) {
    const edgeHooks = createEdgeHooks();
    edgeHooks.doubleClick.on((event) => {
      var _a2, _b;
      emits.edgeDoubleClick(event);
      (_b = (_a2 = edge.events) == null ? void 0 : _a2.doubleClick) == null ? void 0 : _b.call(_a2, event);
    });
    edgeHooks.click.on((event) => {
      var _a2, _b;
      emits.edgeClick(event);
      (_b = (_a2 = edge.events) == null ? void 0 : _a2.click) == null ? void 0 : _b.call(_a2, event);
    });
    edgeHooks.mouseEnter.on((event) => {
      var _a2, _b;
      emits.edgeMouseEnter(event);
      (_b = (_a2 = edge.events) == null ? void 0 : _a2.mouseEnter) == null ? void 0 : _b.call(_a2, event);
    });
    edgeHooks.mouseMove.on((event) => {
      var _a2, _b;
      emits.edgeMouseMove(event);
      (_b = (_a2 = edge.events) == null ? void 0 : _a2.mouseMove) == null ? void 0 : _b.call(_a2, event);
    });
    edgeHooks.mouseLeave.on((event) => {
      var _a2, _b;
      emits.edgeMouseLeave(event);
      (_b = (_a2 = edge.events) == null ? void 0 : _a2.mouseLeave) == null ? void 0 : _b.call(_a2, event);
    });
    edgeHooks.contextMenu.on((event) => {
      var _a2, _b;
      emits.edgeContextMenu(event);
      (_b = (_a2 = edge.events) == null ? void 0 : _a2.contextMenu) == null ? void 0 : _b.call(_a2, event);
    });
    edgeHooks.updateStart.on((event) => {
      var _a2, _b;
      emits.edgeUpdateStart(event);
      (_b = (_a2 = edge.events) == null ? void 0 : _a2.updateStart) == null ? void 0 : _b.call(_a2, event);
    });
    edgeHooks.update.on((event) => {
      var _a2, _b;
      emits.edgeUpdate(event);
      (_b = (_a2 = edge.events) == null ? void 0 : _a2.update) == null ? void 0 : _b.call(_a2, event);
    });
    edgeHooks.updateEnd.on((event) => {
      var _a2, _b;
      emits.edgeUpdateEnd(event);
      (_b = (_a2 = edge.events) == null ? void 0 : _a2.updateEnd) == null ? void 0 : _b.call(_a2, event);
    });
    return Object.entries(edgeHooks).reduce(
      (hooks, [key, value]) => {
        hooks.emit[key] = value.trigger;
        hooks.on[key] = value.on;
        return hooks;
      },
      { emit: {}, on: {} }
    );
  }
  function useGetPointerPosition() {
    const { viewport, snapGrid, snapToGrid } = useVueFlow();
    return ({ sourceEvent: sourceEvent2 }) => {
      const x2 = sourceEvent2.touches ? sourceEvent2.touches[0].clientX : sourceEvent2.clientX;
      const y2 = sourceEvent2.touches ? sourceEvent2.touches[0].clientY : sourceEvent2.clientY;
      const pointerPos = {
        x: (x2 - viewport.value.x) / viewport.value.zoom,
        y: (y2 - viewport.value.y) / viewport.value.zoom
      };
      return __spreadValues({
        xSnapped: snapToGrid.value ? snapGrid.value[0] * Math.round(pointerPos.x / snapGrid.value[0]) : pointerPos.x,
        ySnapped: snapToGrid.value ? snapGrid.value[1] * Math.round(pointerPos.y / snapGrid.value[1]) : pointerPos.y
      }, pointerPos);
    };
  }
  function alwaysValid() {
    return true;
  }
  function useHandle({
    handleId,
    nodeId,
    type,
    isValidConnection,
    edgeUpdaterType,
    onEdgeUpdate,
    onEdgeUpdateEnd
  }) {
    const {
      vueFlowRef,
      connectionMode,
      connectionRadius,
      connectOnClick,
      connectionClickStartHandle,
      nodesConnectable,
      autoPanOnConnect,
      findNode,
      panBy,
      getNodes,
      startConnection,
      updateConnection,
      endConnection,
      emits,
      viewport,
      edges,
      nodes,
      isValidConnection: isValidConnectionProp
    } = useVueFlow();
    let connection = null;
    let isValid = false;
    let handleDomNode = null;
    function handlePointerDown(event) {
      var _a2;
      const isTarget = toValue(type) === "target";
      const isMouseTriggered = isMouseEvent(event);
      const doc = getHostForElement(event.target);
      if (isMouseTriggered && event.button === 0 || !isMouseTriggered) {
        let onPointerMove = function(event2) {
          connectionPosition = getEventPosition(event2, containerBounds);
          const { handle, validHandleResult } = getClosestHandle(
            event2,
            doc,
            pointToRendererPoint(connectionPosition, viewport.value, false, [1, 1]),
            connectionRadius.value,
            handleLookup,
            (handle2) => isValidHandle(
              event2,
              handle2,
              connectionMode.value,
              toValue(nodeId),
              toValue(handleId),
              isTarget ? "target" : "source",
              isValidConnectionHandler,
              doc,
              edges.value,
              nodes.value,
              findNode
            )
          );
          closestHandle = handle;
          if (!autoPanStarted) {
            autoPan();
            autoPanStarted = true;
          }
          connection = validHandleResult.connection;
          isValid = validHandleResult.isValid;
          handleDomNode = validHandleResult.handleDomNode;
          updateConnection(
            closestHandle && isValid ? rendererPointToPoint(
              {
                x: closestHandle.x,
                y: closestHandle.y
              },
              viewport.value
            ) : connectionPosition,
            validHandleResult.endHandle,
            getConnectionStatus(!!closestHandle, isValid)
          );
          if (!closestHandle && !isValid && !handleDomNode) {
            return resetRecentHandle(prevActiveHandle);
          }
          if (connection && connection.source !== connection.target && handleDomNode) {
            resetRecentHandle(prevActiveHandle);
            prevActiveHandle = handleDomNode;
            handleDomNode.classList.add("connecting", "vue-flow__handle-connecting");
            handleDomNode.classList.toggle("valid", isValid);
            handleDomNode.classList.toggle("vue-flow__handle-valid", isValid);
          }
        }, onPointerUp = function(event2) {
          if ((closestHandle || handleDomNode) && connection && isValid) {
            if (!onEdgeUpdate) {
              emits.connect(connection);
            } else {
              onEdgeUpdate(event2, connection);
            }
          }
          emits.connectEnd(event2);
          if (edgeUpdaterType) {
            onEdgeUpdateEnd == null ? void 0 : onEdgeUpdateEnd(event2);
          }
          resetRecentHandle(prevActiveHandle);
          cancelAnimationFrame(autoPanId);
          endConnection(event2);
          autoPanStarted = false;
          isValid = false;
          connection = null;
          handleDomNode = null;
          doc.removeEventListener("mousemove", onPointerMove);
          doc.removeEventListener("mouseup", onPointerUp);
          doc.removeEventListener("touchmove", onPointerMove);
          doc.removeEventListener("touchend", onPointerUp);
        };
        const node = findNode(toValue(nodeId));
        let isValidConnectionHandler = toValue(isValidConnection) || isValidConnectionProp.value || alwaysValid;
        if (!isValidConnectionHandler && node) {
          isValidConnectionHandler = (!isTarget ? node.isValidTargetPos : node.isValidSourcePos) || alwaysValid;
        }
        let closestHandle;
        let autoPanId = 0;
        const { x: x2, y: y2 } = getEventPosition(event);
        const clickedHandle = doc == null ? void 0 : doc.elementFromPoint(x2, y2);
        const handleType = getHandleType(toValue(edgeUpdaterType), clickedHandle);
        const containerBounds = (_a2 = vueFlowRef.value) == null ? void 0 : _a2.getBoundingClientRect();
        if (!containerBounds || !handleType) {
          return;
        }
        let prevActiveHandle;
        let connectionPosition = getEventPosition(event, containerBounds);
        let autoPanStarted = false;
        const handleLookup = getHandleLookup({
          nodes: getNodes.value,
          nodeId: toValue(nodeId),
          handleId: toValue(handleId),
          handleType
        });
        const autoPan = () => {
          if (!autoPanOnConnect) {
            return;
          }
          const [xMovement, yMovement] = calcAutoPan(connectionPosition, containerBounds);
          panBy({ x: xMovement, y: yMovement });
          autoPanId = requestAnimationFrame(autoPan);
        };
        startConnection(
          {
            nodeId: toValue(nodeId),
            handleId: toValue(handleId),
            type: handleType
          },
          {
            x: x2 - containerBounds.left,
            y: y2 - containerBounds.top
          },
          event
        );
        emits.connectStart({ event, nodeId: toValue(nodeId), handleId: toValue(handleId), handleType });
        doc.addEventListener("mousemove", onPointerMove);
        doc.addEventListener("mouseup", onPointerUp);
        doc.addEventListener("touchmove", onPointerMove);
        doc.addEventListener("touchend", onPointerUp);
      }
    }
    function handleClick(event) {
      if (!connectOnClick.value) {
        return;
      }
      const isTarget = toValue(type) === "target";
      if (!connectionClickStartHandle.value) {
        emits.clickConnectStart({ event, nodeId: toValue(nodeId), handleId: toValue(handleId) });
        startConnection({ nodeId: toValue(nodeId), type: toValue(type), handleId: toValue(handleId) }, void 0, event, true);
      } else {
        let isValidConnectionHandler = toValue(isValidConnection) || isValidConnectionProp.value || alwaysValid;
        const node = findNode(toValue(nodeId));
        if (!isValidConnectionHandler && node) {
          isValidConnectionHandler = (!isTarget ? node.isValidTargetPos : node.isValidSourcePos) || alwaysValid;
        }
        if (node && (typeof node.connectable === "undefined" ? nodesConnectable.value : node.connectable) === false) {
          return;
        }
        const doc = getHostForElement(event.target);
        const { connection: connection2, isValid: isValid2 } = isValidHandle(
          event,
          {
            nodeId: toValue(nodeId),
            id: toValue(handleId),
            type: toValue(type)
          },
          connectionMode.value,
          connectionClickStartHandle.value.nodeId,
          connectionClickStartHandle.value.handleId || null,
          connectionClickStartHandle.value.type,
          isValidConnectionHandler,
          doc,
          edges.value,
          nodes.value,
          findNode
        );
        const isOwnHandle = connection2.source === connection2.target;
        if (isValid2 && !isOwnHandle) {
          emits.connect(connection2);
        }
        emits.clickConnectEnd(event);
        endConnection(event, true);
      }
    }
    return {
      handlePointerDown,
      handleClick
    };
  }
  function useWindow() {
    if (typeof window !== "undefined") {
      return window;
    } else {
      return {
        chrome: false,
        addEventListener(..._) {
        }
      };
    }
  }
  function isInputDOMNode(event) {
    var _a2, _b;
    const target = ((_b = (_a2 = event.composedPath) == null ? void 0 : _a2.call(event)) == null ? void 0 : _b[0]) || event.target;
    const hasAttribute = typeof target.hasAttribute === "function" ? target.hasAttribute("contenteditable") : false;
    const closest = typeof target.closest === "function" ? target.closest(".nokey") : null;
    return target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement || target instanceof HTMLSelectElement || hasAttribute || !!closest;
  }
  function wasModifierPressed(event) {
    return event.ctrlKey || event.metaKey || event.shiftKey;
  }
  function isKeyMatch(pressedKey, keyToMatch, pressedKeys, isKeyUp) {
    const keyCombination = keyToMatch.split("+").map((k2) => k2.trim().toLowerCase());
    if (keyCombination.length === 1) {
      return pressedKey.toLowerCase() === keyToMatch.toLowerCase();
    }
    if (isKeyUp) {
      pressedKeys.delete(pressedKey.toLowerCase());
    } else {
      pressedKeys.add(pressedKey.toLowerCase());
    }
    return keyCombination.every(
      (key, index) => pressedKeys.has(key) && Array.from(pressedKeys.values())[index] === keyCombination[index]
    );
  }
  function createKeyPredicate2(keyFilter, pressedKeys) {
    return (event) => {
      const keyOrCode = useKeyOrCode(event.code, keyFilter);
      if (Array.isArray(keyFilter)) {
        return keyFilter.some((key) => isKeyMatch(event[keyOrCode], key, pressedKeys, event.type === "keyup"));
      }
      return isKeyMatch(event[keyOrCode], keyFilter, pressedKeys, event.type === "keyup");
    };
  }
  function useKeyOrCode(code, keysToWatch) {
    if (typeof keysToWatch === "string") {
      return code === keysToWatch ? "code" : "key";
    }
    return keysToWatch.includes(code) ? "code" : "key";
  }
  function useKeyPress(keyFilter, onChange) {
    const window2 = useWindow();
    const isPressed = (0, vue_runtime_esm_bundler_exports.ref)(toValue(keyFilter) === true);
    let modifierPressed = false;
    const pressedKeys = /* @__PURE__ */ new Set();
    let currentFilter = createKeyFilterFn(toValue(keyFilter));
    (0, vue_runtime_esm_bundler_exports.watch)(isPressed, (isKeyPressed, wasPressed) => {
      if (isKeyPressed !== wasPressed) {
        onChange == null ? void 0 : onChange(isKeyPressed);
      }
    });
    (0, vue_runtime_esm_bundler_exports.watch)(
      () => toValue(keyFilter),
      (nextKeyFilter, previousKeyFilter) => {
        if (typeof previousKeyFilter === "boolean" && typeof nextKeyFilter !== "boolean") {
          reset();
        }
        currentFilter = createKeyFilterFn(nextKeyFilter);
      },
      {
        immediate: true
      }
    );
    useEventListener2(window2, "blur", () => {
      if (toValue(keyFilter) !== true) {
        isPressed.value = false;
      }
    });
    onKeyStroke2(
      (...args) => currentFilter(...args),
      (e2) => {
        modifierPressed = wasModifierPressed(e2);
        if (!modifierPressed && isInputDOMNode(e2)) {
          return;
        }
        e2.preventDefault();
        isPressed.value = true;
      },
      { eventName: "keydown" }
    );
    onKeyStroke2(
      (...args) => currentFilter(...args),
      (e2) => {
        if (isPressed.value) {
          if (!modifierPressed && isInputDOMNode(e2)) {
            return;
          }
          reset();
        }
      },
      { eventName: "keyup" }
    );
    return isPressed;
    function reset() {
      modifierPressed = false;
      pressedKeys.clear();
      isPressed.value = false;
    }
    function createKeyFilterFn(keyFilter2) {
      if (keyFilter2 === null) {
        reset();
        return () => false;
      }
      if (typeof keyFilter2 === "boolean") {
        if (keyFilter2) {
          isPressed.value = keyFilter2;
          return () => true;
        } else {
          reset();
          return () => false;
        }
      }
      if (Array.isArray(keyFilter2) || typeof keyFilter2 === "string") {
        return createKeyPredicate2(keyFilter2, pressedKeys);
      }
      return keyFilter2;
    }
  }
  function useNode(id2) {
    const nodeId = id2 != null ? id2 : (0, vue_runtime_esm_bundler_exports.inject)(NodeId, "");
    const nodeEl = (0, vue_runtime_esm_bundler_exports.inject)(NodeRef, (0, vue_runtime_esm_bundler_exports.ref)(null));
    const { findNode, edges, emits } = useVueFlow();
    const node = findNode(nodeId);
    if (!node) {
      emits.error(new VueFlowError(ErrorCode.NODE_NOT_FOUND, nodeId));
    }
    return {
      id: nodeId,
      nodeEl,
      node,
      parentNode: (0, vue_runtime_esm_bundler_exports.computed)(() => findNode(node.parentNode)),
      connectedEdges: (0, vue_runtime_esm_bundler_exports.computed)(() => getConnectedEdges([node], edges.value))
    };
  }
  function createNodeHooks() {
    return {
      doubleClick: createExtendedEventHook(),
      click: createExtendedEventHook(),
      mouseEnter: createExtendedEventHook(),
      mouseMove: createExtendedEventHook(),
      mouseLeave: createExtendedEventHook(),
      contextMenu: createExtendedEventHook(),
      dragStart: createExtendedEventHook(),
      drag: createExtendedEventHook(),
      dragStop: createExtendedEventHook()
    };
  }
  function useNodeHooks(node, emits) {
    const nodeHooks = createNodeHooks();
    nodeHooks.doubleClick.on((event) => {
      var _a2, _b;
      emits.nodeDoubleClick(event);
      (_b = (_a2 = node.events) == null ? void 0 : _a2.doubleClick) == null ? void 0 : _b.call(_a2, event);
    });
    nodeHooks.click.on((event) => {
      var _a2, _b;
      emits.nodeClick(event);
      (_b = (_a2 = node.events) == null ? void 0 : _a2.click) == null ? void 0 : _b.call(_a2, event);
    });
    nodeHooks.mouseEnter.on((event) => {
      var _a2, _b;
      emits.nodeMouseEnter(event);
      (_b = (_a2 = node.events) == null ? void 0 : _a2.mouseEnter) == null ? void 0 : _b.call(_a2, event);
    });
    nodeHooks.mouseMove.on((event) => {
      var _a2, _b;
      emits.nodeMouseMove(event);
      (_b = (_a2 = node.events) == null ? void 0 : _a2.mouseMove) == null ? void 0 : _b.call(_a2, event);
    });
    nodeHooks.mouseLeave.on((event) => {
      var _a2, _b;
      emits.nodeMouseLeave(event);
      (_b = (_a2 = node.events) == null ? void 0 : _a2.mouseLeave) == null ? void 0 : _b.call(_a2, event);
    });
    nodeHooks.contextMenu.on((event) => {
      var _a2, _b;
      emits.nodeContextMenu(event);
      (_b = (_a2 = node.events) == null ? void 0 : _a2.contextMenu) == null ? void 0 : _b.call(_a2, event);
    });
    nodeHooks.dragStart.on((event) => {
      var _a2, _b;
      emits.nodeDragStart(event);
      (_b = (_a2 = node.events) == null ? void 0 : _a2.dragStart) == null ? void 0 : _b.call(_a2, event);
    });
    nodeHooks.drag.on((event) => {
      var _a2, _b;
      emits.nodeDrag(event);
      (_b = (_a2 = node.events) == null ? void 0 : _a2.drag) == null ? void 0 : _b.call(_a2, event);
    });
    nodeHooks.dragStop.on((event) => {
      var _a2, _b;
      emits.nodeDragStop(event);
      (_b = (_a2 = node.events) == null ? void 0 : _a2.dragStop) == null ? void 0 : _b.call(_a2, event);
    });
    return Object.entries(nodeHooks).reduce(
      (hooks, [key, value]) => {
        hooks.emit[key] = value.trigger;
        hooks.on[key] = value.on;
        return hooks;
      },
      { emit: {}, on: {} }
    );
  }
  function useUpdateNodePositions() {
    const { getSelectedNodes, nodeExtent, updateNodePositions, findNode, snapGrid, snapToGrid, nodesDraggable, emits } = useVueFlow();
    return (positionDiff, isShiftPressed = false) => {
      const xVelo = snapToGrid.value ? snapGrid.value[0] : 5;
      const yVelo = snapToGrid.value ? snapGrid.value[1] : 5;
      const factor = isShiftPressed ? 4 : 1;
      const positionDiffX = positionDiff.x * xVelo * factor;
      const positionDiffY = positionDiff.y * yVelo * factor;
      const nodeUpdates = getSelectedNodes.value.filter((n) => n.draggable || nodesDraggable && typeof n.draggable === "undefined").map((n) => {
        const nextPosition = { x: n.computedPosition.x + positionDiffX, y: n.computedPosition.y + positionDiffY };
        const { computedPosition } = calcNextPosition(
          n,
          nextPosition,
          emits.error,
          nodeExtent.value,
          n.parentNode ? findNode(n.parentNode) : void 0
        );
        return {
          id: n.id,
          position: computedPosition,
          from: n.position,
          distance: { x: positionDiff.x, y: positionDiff.y },
          dimensions: n.dimensions
        };
      });
      updateNodePositions(nodeUpdates, true, false);
    };
  }
  var DEFAULT_PADDING = 0.1;
  function noop3() {
    warn2("Viewport not initialized yet.");
    return Promise.resolve(false);
  }
  var initialViewportHelper = {
    zoomIn: noop3,
    zoomOut: noop3,
    zoomTo: noop3,
    fitView: noop3,
    setCenter: noop3,
    fitBounds: noop3,
    project: (position) => position,
    screenToFlowCoordinate: (position) => position,
    flowToScreenCoordinate: (position) => position,
    setViewport: noop3,
    setTransform: noop3,
    getViewport: () => ({ x: 0, y: 0, zoom: 1 }),
    getTransform: () => ({ x: 0, y: 0, zoom: 1 }),
    initialized: false
  };
  function useViewport(state, getters) {
    const __$temp_1 = state, domNode = (0, vue_runtime_esm_bundler_exports.toRef)(__$temp_1, "vueFlowRef"), nodes = (0, vue_runtime_esm_bundler_exports.toRef)(__$temp_1, "nodes"), d3Zoom = (0, vue_runtime_esm_bundler_exports.toRef)(__$temp_1, "d3Zoom"), d3Selection = (0, vue_runtime_esm_bundler_exports.toRef)(__$temp_1, "d3Selection"), dimensions = (0, vue_runtime_esm_bundler_exports.toRef)(__$temp_1, "dimensions"), translateExtent = (0, vue_runtime_esm_bundler_exports.toRef)(__$temp_1, "translateExtent"), minZoom = (0, vue_runtime_esm_bundler_exports.toRef)(__$temp_1, "minZoom"), maxZoom = (0, vue_runtime_esm_bundler_exports.toRef)(__$temp_1, "maxZoom"), viewport = (0, vue_runtime_esm_bundler_exports.toRef)(__$temp_1, "viewport"), snapToGrid = (0, vue_runtime_esm_bundler_exports.toRef)(__$temp_1, "snapToGrid"), snapGrid = (0, vue_runtime_esm_bundler_exports.toRef)(__$temp_1, "snapGrid");
    const { getNodes } = getters;
    const isReady = (0, vue_runtime_esm_bundler_exports.ref)(false);
    until2(() => !!d3Zoom.value && !!d3Selection.value && !!dimensions.value.width && !!dimensions.value.height).toBe(true).then(() => {
      isReady.value = true;
    });
    function zoom2(scale, duration) {
      return new Promise((resolve) => {
        if (d3Selection.value && d3Zoom.value) {
          d3Zoom.value.scaleBy(
            transition(d3Selection.value, duration, () => {
              resolve(true);
            }),
            scale
          );
        } else {
          resolve(false);
        }
      });
    }
    function transformViewport(x2, y2, zoom22, duration) {
      return new Promise((resolve) => {
        const { x: clampedX, y: clampedY } = clampPosition({ x: -x2, y: -y2 }, translateExtent.value);
        const nextTransform = identity2.translate(-clampedX, -clampedY).scale(zoom22);
        if (d3Selection.value && d3Zoom.value) {
          d3Zoom.value.transform(
            transition(d3Selection.value, duration, () => {
              resolve(true);
            }),
            nextTransform
          );
        } else {
          resolve(false);
        }
      });
    }
    return (0, vue_runtime_esm_bundler_exports.computed)(() => {
      if (isReady.value) {
        return {
          initialized: true,
          zoomIn: (options) => {
            return zoom2(1.2, options == null ? void 0 : options.duration);
          },
          zoomOut: (options) => {
            return zoom2(1 / 1.2, options == null ? void 0 : options.duration);
          },
          zoomTo: (zoomLevel, options) => {
            return new Promise((resolve) => {
              if (d3Selection.value && d3Zoom.value) {
                d3Zoom.value.scaleTo(
                  transition(d3Selection.value, options == null ? void 0 : options.duration, () => {
                    resolve(true);
                  }),
                  zoomLevel
                );
              } else {
                resolve(false);
              }
            });
          },
          setViewport: (transform, options) => {
            return transformViewport(transform.x, transform.y, transform.zoom, options == null ? void 0 : options.duration);
          },
          setTransform: (transform, options) => {
            return transformViewport(transform.x, transform.y, transform.zoom, options == null ? void 0 : options.duration);
          },
          getViewport: () => ({
            x: viewport.value.x,
            y: viewport.value.y,
            zoom: viewport.value.zoom
          }),
          getTransform: () => {
            return {
              x: viewport.value.x,
              y: viewport.value.y,
              zoom: viewport.value.zoom
            };
          },
          fitView: (options = {
            padding: DEFAULT_PADDING,
            includeHiddenNodes: false,
            duration: 0
          }) => {
            var _a2, _b, _c;
            const nodesToFit = (options.includeHiddenNodes ? nodes.value : getNodes.value).filter((node) => {
              var _a3;
              const initialized = node.initialized && node.dimensions.width && node.dimensions.height;
              let shouldInclude = true;
              if ((_a3 = options.nodes) == null ? void 0 : _a3.length) {
                shouldInclude = options.nodes.includes(node.id);
              }
              return initialized && shouldInclude;
            });
            if (!nodesToFit.length) {
              return Promise.resolve(false);
            }
            const bounds = getRectOfNodes(nodesToFit);
            const { x: x2, y: y2, zoom: zoom22 } = getTransformForBounds(
              bounds,
              dimensions.value.width,
              dimensions.value.height,
              (_a2 = options.minZoom) != null ? _a2 : minZoom.value,
              (_b = options.maxZoom) != null ? _b : maxZoom.value,
              (_c = options.padding) != null ? _c : DEFAULT_PADDING,
              options.offset
            );
            return transformViewport(x2, y2, zoom22, options == null ? void 0 : options.duration);
          },
          setCenter: (x2, y2, options) => {
            const nextZoom = typeof (options == null ? void 0 : options.zoom) !== "undefined" ? options.zoom : maxZoom.value;
            const centerX = dimensions.value.width / 2 - x2 * nextZoom;
            const centerY = dimensions.value.height / 2 - y2 * nextZoom;
            return transformViewport(centerX, centerY, nextZoom, options == null ? void 0 : options.duration);
          },
          fitBounds: (bounds, options = { padding: DEFAULT_PADDING }) => {
            const { x: x2, y: y2, zoom: zoom22 } = getTransformForBounds(
              bounds,
              dimensions.value.width,
              dimensions.value.height,
              minZoom.value,
              maxZoom.value,
              options.padding
            );
            return transformViewport(x2, y2, zoom22, options == null ? void 0 : options.duration);
          },
          project: (position) => pointToRendererPoint(position, viewport.value, snapToGrid.value, snapGrid.value),
          screenToFlowCoordinate: (position) => {
            if (domNode.value) {
              const { x: domX, y: domY } = domNode.value.getBoundingClientRect();
              const correctedPosition = {
                x: position.x - domX,
                y: position.y - domY
              };
              return pointToRendererPoint(correctedPosition, viewport.value, snapToGrid.value, snapGrid.value);
            }
            return { x: 0, y: 0 };
          },
          flowToScreenCoordinate: (position) => {
            if (domNode.value) {
              const { x: domX, y: domY } = domNode.value.getBoundingClientRect();
              const correctedPosition = {
                x: position.x + domX,
                y: position.y + domY
              };
              return rendererPointToPoint(correctedPosition, viewport.value);
            }
            return { x: 0, y: 0 };
          }
        };
      }
      return initialViewportHelper;
    });
  }
  function transition(selection2, ms = 0, onEnd) {
    return selection2.transition().duration(ms).on("end", onEnd);
  }
  function useWatchProps(models, props, store) {
    const scope = (0, vue_runtime_esm_bundler_exports.effectScope)(true);
    scope.run(() => {
      const watchModelValue = () => {
        scope.run(() => {
          let pauseModel;
          let pauseStore;
          let immediateStore = !!(store.nodes.value.length || store.edges.value.length);
          pauseModel = watchPausable2([models.modelValue, () => {
            var _a2, _b;
            return (_b = (_a2 = models.modelValue) == null ? void 0 : _a2.value) == null ? void 0 : _b.length;
          }], ([elements]) => {
            if (elements && Array.isArray(elements)) {
              pauseStore == null ? void 0 : pauseStore.pause();
              store.setElements(elements);
              if (!pauseStore && !immediateStore && elements.length) {
                immediateStore = true;
              } else {
                pauseStore == null ? void 0 : pauseStore.resume();
              }
            }
          });
          pauseStore = watchPausable2(
            [store.nodes, store.edges, () => store.edges.value.length, () => store.nodes.value.length],
            ([nodes, edges]) => {
              var _a2;
              if (((_a2 = models.modelValue) == null ? void 0 : _a2.value) && Array.isArray(models.modelValue.value)) {
                pauseModel == null ? void 0 : pauseModel.pause();
                models.modelValue.value = [...nodes, ...edges];
                (0, vue_runtime_esm_bundler_exports.nextTick)(() => {
                  pauseModel == null ? void 0 : pauseModel.resume();
                });
              }
            },
            { immediate: immediateStore }
          );
          (0, vue_runtime_esm_bundler_exports.onScopeDispose)(() => {
            pauseModel == null ? void 0 : pauseModel.stop();
            pauseStore == null ? void 0 : pauseStore.stop();
          });
        });
      };
      const watchNodesValue = () => {
        scope.run(() => {
          let pauseModel;
          let pauseStore;
          let immediateStore = !!store.nodes.value.length;
          pauseModel = watchPausable2([models.nodes, () => {
            var _a2, _b;
            return (_b = (_a2 = models.nodes) == null ? void 0 : _a2.value) == null ? void 0 : _b.length;
          }], ([nodes]) => {
            if (nodes && Array.isArray(nodes)) {
              pauseStore == null ? void 0 : pauseStore.pause();
              store.setNodes(nodes);
              if (!pauseStore && !immediateStore && nodes.length) {
                immediateStore = true;
              } else {
                pauseStore == null ? void 0 : pauseStore.resume();
              }
            }
          });
          pauseStore = watchPausable2(
            [store.nodes, () => store.nodes.value.length],
            ([nodes]) => {
              var _a2;
              if (((_a2 = models.nodes) == null ? void 0 : _a2.value) && Array.isArray(models.nodes.value)) {
                pauseModel == null ? void 0 : pauseModel.pause();
                models.nodes.value = [...nodes];
                (0, vue_runtime_esm_bundler_exports.nextTick)(() => {
                  pauseModel == null ? void 0 : pauseModel.resume();
                });
              }
            },
            { immediate: immediateStore }
          );
          (0, vue_runtime_esm_bundler_exports.onScopeDispose)(() => {
            pauseModel == null ? void 0 : pauseModel.stop();
            pauseStore == null ? void 0 : pauseStore.stop();
          });
        });
      };
      const watchEdgesValue = () => {
        scope.run(() => {
          let pauseModel;
          let pauseStore;
          let immediateStore = !!store.edges.value.length;
          pauseModel = watchPausable2([models.edges, () => {
            var _a2, _b;
            return (_b = (_a2 = models.edges) == null ? void 0 : _a2.value) == null ? void 0 : _b.length;
          }], ([edges]) => {
            if (edges && Array.isArray(edges)) {
              pauseStore == null ? void 0 : pauseStore.pause();
              store.setEdges(edges);
              if (!pauseStore && !immediateStore && edges.length) {
                immediateStore = true;
              } else {
                pauseStore == null ? void 0 : pauseStore.resume();
              }
            }
          });
          pauseStore = watchPausable2(
            [store.edges, () => store.edges.value.length],
            ([edges]) => {
              var _a2;
              if (((_a2 = models.edges) == null ? void 0 : _a2.value) && Array.isArray(models.edges.value)) {
                pauseModel == null ? void 0 : pauseModel.pause();
                models.edges.value = [...edges];
                (0, vue_runtime_esm_bundler_exports.nextTick)(() => {
                  pauseModel == null ? void 0 : pauseModel.resume();
                });
              }
            },
            { immediate: immediateStore }
          );
          (0, vue_runtime_esm_bundler_exports.onScopeDispose)(() => {
            pauseModel == null ? void 0 : pauseModel.stop();
            pauseStore == null ? void 0 : pauseStore.stop();
          });
        });
      };
      const watchMaxZoom = () => {
        scope.run(() => {
          (0, vue_runtime_esm_bundler_exports.watch)(
            () => props.maxZoom,
            () => {
              if (props.maxZoom && isDef2(props.maxZoom)) {
                store.setMaxZoom(props.maxZoom);
              }
            },
            {
              immediate: true
            }
          );
        });
      };
      const watchMinZoom = () => {
        scope.run(() => {
          (0, vue_runtime_esm_bundler_exports.watch)(
            () => props.minZoom,
            () => {
              if (props.minZoom && isDef2(props.minZoom)) {
                store.setMinZoom(props.minZoom);
              }
            },
            { immediate: true }
          );
        });
      };
      const watchTranslateExtent = () => {
        scope.run(() => {
          (0, vue_runtime_esm_bundler_exports.watch)(
            () => props.translateExtent,
            () => {
              if (props.translateExtent && isDef2(props.translateExtent)) {
                store.setTranslateExtent(props.translateExtent);
              }
            },
            {
              immediate: true
            }
          );
        });
      };
      const watchNodeExtent = () => {
        scope.run(() => {
          (0, vue_runtime_esm_bundler_exports.watch)(
            () => props.nodeExtent,
            () => {
              if (props.nodeExtent && isDef2(props.nodeExtent)) {
                store.setNodeExtent(props.nodeExtent);
              }
            },
            {
              immediate: true
            }
          );
        });
      };
      const watchApplyDefault = () => {
        scope.run(() => {
          (0, vue_runtime_esm_bundler_exports.watch)(
            () => props.applyDefault,
            () => {
              if (isDef2(props.applyDefault)) {
                store.applyDefault.value = props.applyDefault;
              }
            },
            {
              immediate: true
            }
          );
        });
      };
      const watchAutoConnect = () => {
        scope.run(() => {
          const autoConnector = async (params) => {
            let connection = params;
            if (typeof props.autoConnect === "function") {
              connection = await props.autoConnect(params);
            }
            if (connection !== false) {
              store.addEdges([connection]);
            }
          };
          (0, vue_runtime_esm_bundler_exports.watch)(
            () => props.autoConnect,
            () => {
              if (isDef2(props.autoConnect)) {
                store.autoConnect.value = props.autoConnect;
              }
            },
            { immediate: true }
          );
          (0, vue_runtime_esm_bundler_exports.watch)(
            store.autoConnect,
            (autoConnectEnabled, _, onCleanup) => {
              if (autoConnectEnabled) {
                store.onConnect(autoConnector);
              } else {
                store.hooks.value.connect.off(autoConnector);
              }
              onCleanup(() => {
                store.hooks.value.connect.off(autoConnector);
              });
            },
            { immediate: true }
          );
        });
      };
      const watchRest = () => {
        const skip = [
          "id",
          "modelValue",
          "translateExtent",
          "nodeExtent",
          "edges",
          "nodes",
          "maxZoom",
          "minZoom",
          "applyDefault",
          "autoConnect"
        ];
        Object.keys(props).forEach((key) => {
          const propKey = key;
          if (!skip.includes(propKey)) {
            const propValue = toRef3(() => props[propKey]);
            const storeRef = store[propKey];
            if ((0, vue_runtime_esm_bundler_exports.isRef)(storeRef)) {
              scope.run(() => {
                (0, vue_runtime_esm_bundler_exports.watch)(
                  propValue,
                  (nextValue) => {
                    if (isDef2(nextValue)) {
                      storeRef.value = nextValue;
                    }
                  },
                  { immediate: true, flush: "pre" }
                );
              });
            }
          }
        });
      };
      const runAll = () => {
        watchModelValue();
        watchNodesValue();
        watchEdgesValue();
        watchMinZoom();
        watchMaxZoom();
        watchTranslateExtent();
        watchNodeExtent();
        watchApplyDefault();
        watchAutoConnect();
        watchRest();
      };
      runAll();
    });
    return () => scope.stop();
  }
  function getMousePosition(event, containerBounds) {
    return {
      x: event.clientX - containerBounds.left,
      y: event.clientY - containerBounds.top
    };
  }
  var __default__$9 = {
    name: "Pane",
    compatConfig: { MODE: 3 }
  };
  var _sfc_main$9 = /* @__PURE__ */ (0, vue_runtime_esm_bundler_exports.defineComponent)(__spreadProps(__spreadValues({}, __default__$9), {
    props: {
      isSelecting: { type: Boolean }
    },
    setup(__props) {
      const {
        id: id2,
        vueFlowRef,
        getNodes,
        getEdges,
        viewport,
        emits,
        userSelectionActive,
        removeSelectedElements,
        panOnDrag,
        userSelectionRect,
        elementsSelectable,
        nodesSelectionActive,
        addSelectedElements,
        getSelectedEdges,
        getSelectedNodes,
        removeNodes,
        removeEdges,
        selectionMode,
        deleteKeyCode,
        multiSelectionKeyCode,
        multiSelectionActive
      } = useVueFlow();
      const container = (0, vue_runtime_esm_bundler_exports.ref)(null);
      const prevSelectedNodesCount = (0, vue_runtime_esm_bundler_exports.ref)(0);
      const prevSelectedEdgesCount = (0, vue_runtime_esm_bundler_exports.ref)(0);
      const containerBounds = (0, vue_runtime_esm_bundler_exports.ref)();
      const hasActiveSelection = toRef3(() => elementsSelectable.value && (__props.isSelecting || userSelectionActive.value));
      useKeyPress(deleteKeyCode, (keyPressed) => {
        if (!keyPressed) {
          return;
        }
        const nodesToRemove = getNodes.value.reduce((res, node) => {
          if (!node.selected && node.parentNode && res.find((n) => n.id === node.parentNode)) {
            res.push(node);
          } else if (node.selected) {
            res.push(node);
          }
          return res;
        }, []);
        if (nodesToRemove || getSelectedEdges.value) {
          if (getSelectedEdges.value.length > 0) {
            removeEdges(getSelectedEdges.value);
          }
          if (nodesToRemove.length > 0) {
            removeNodes(nodesToRemove);
          }
          nodesSelectionActive.value = false;
          removeSelectedElements();
        }
      });
      useKeyPress(multiSelectionKeyCode, (keyPressed) => {
        multiSelectionActive.value = keyPressed;
      });
      function resetUserSelection() {
        userSelectionActive.value = false;
        userSelectionRect.value = null;
        prevSelectedNodesCount.value = 0;
        prevSelectedEdgesCount.value = 0;
      }
      function onClick(event) {
        if (event.target !== container.value || hasActiveSelection.value) {
          return;
        }
        emits.paneClick(event);
        removeSelectedElements();
        nodesSelectionActive.value = false;
      }
      function onContextMenu(event) {
        var _a2;
        if (event.target !== container.value) {
          return;
        }
        if (Array.isArray(panOnDrag.value) && ((_a2 = panOnDrag.value) == null ? void 0 : _a2.includes(2))) {
          event.preventDefault();
          return;
        }
        emits.paneContextMenu(event);
      }
      function onWheel(event) {
        if (event.target !== container.value) {
          return;
        }
        emits.paneScroll(event);
      }
      function onMouseDown(event) {
        containerBounds.value = vueFlowRef.value.getBoundingClientRect();
        if (!hasActiveSelection.value || !elementsSelectable || !__props.isSelecting || event.button !== 0 || event.target !== container.value || !containerBounds.value) {
          return;
        }
        const { x: x2, y: y2 } = getMousePosition(event, containerBounds.value);
        removeSelectedElements();
        userSelectionRect.value = {
          width: 0,
          height: 0,
          startX: x2,
          startY: y2,
          x: x2,
          y: y2
        };
        userSelectionActive.value = true;
        emits.selectionStart(event);
      }
      function onMouseMove(event) {
        var _a2, _b;
        if (!hasActiveSelection.value) {
          return emits.paneMouseMove(event);
        }
        if (!__props.isSelecting || !containerBounds.value || !userSelectionRect.value) {
          return;
        }
        if (!userSelectionActive.value) {
          userSelectionActive.value = true;
        }
        if (nodesSelectionActive.value) {
          nodesSelectionActive.value = false;
        }
        const mousePos = getMousePosition(event, containerBounds.value);
        const startX = (_a2 = userSelectionRect.value.startX) != null ? _a2 : 0;
        const startY = (_b = userSelectionRect.value.startY) != null ? _b : 0;
        const nextUserSelectRect = __spreadProps(__spreadValues({}, userSelectionRect.value), {
          x: mousePos.x < startX ? mousePos.x : startX,
          y: mousePos.y < startY ? mousePos.y : startY,
          width: Math.abs(mousePos.x - startX),
          height: Math.abs(mousePos.y - startY)
        });
        const selectedNodes = getNodesInside(
          getNodes.value,
          userSelectionRect.value,
          viewport.value,
          selectionMode.value === SelectionMode.Partial
        );
        const selectedEdges = getConnectedEdges(selectedNodes, getEdges.value);
        prevSelectedNodesCount.value = selectedNodes.length;
        prevSelectedEdgesCount.value = selectedEdges.length;
        userSelectionRect.value = nextUserSelectRect;
        addSelectedElements([...selectedNodes, ...selectedEdges]);
      }
      function onMouseUp(event) {
        if (!hasActiveSelection.value) {
          return;
        }
        if (event.button !== 0) {
          return;
        }
        if (!userSelectionActive.value && userSelectionRect.value && event.target === container.value) {
          onClick(event);
        }
        nodesSelectionActive.value = prevSelectedNodesCount.value > 0;
        resetUserSelection();
        emits.selectionEnd(event);
      }
      function onMouseLeave(event) {
        var _a2;
        if (!hasActiveSelection.value) {
          return emits.paneMouseLeave(event);
        }
        if (userSelectionActive.value) {
          nodesSelectionActive.value = prevSelectedNodesCount.value > 0;
          (_a2 = emits.selectionEnd) == null ? void 0 : _a2.call(emits, event);
        }
        resetUserSelection();
      }
      function onMouseEnter(event) {
        if (hasActiveSelection.value) {
          return;
        }
        emits.paneMouseEnter(event);
      }
      return (_ctx, _cache) => {
        return (0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", {
          ref_key: "container",
          ref: container,
          key: `pane-${(0, vue_runtime_esm_bundler_exports.unref)(id2)}`,
          class: (0, vue_runtime_esm_bundler_exports.normalizeClass)(["vue-flow__pane vue-flow__container", { selection: _ctx.isSelecting }]),
          onClick,
          onContextmenu: onContextMenu,
          onWheelPassive: onWheel,
          onMouseenter: onMouseEnter,
          onMousedown: onMouseDown,
          onMousemove: onMouseMove,
          onMouseup: onMouseUp,
          onMouseleave: onMouseLeave
        }, [
          (0, vue_runtime_esm_bundler_exports.renderSlot)(_ctx.$slots, "default"),
          (0, vue_runtime_esm_bundler_exports.unref)(userSelectionActive) && (0, vue_runtime_esm_bundler_exports.unref)(userSelectionRect) ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createBlock)(_sfc_main$a, {
            key: 0,
            "user-selection-rect": (0, vue_runtime_esm_bundler_exports.unref)(userSelectionRect)
          }, null, 8, ["user-selection-rect"])) : (0, vue_runtime_esm_bundler_exports.createCommentVNode)("", true),
          (0, vue_runtime_esm_bundler_exports.unref)(nodesSelectionActive) && (0, vue_runtime_esm_bundler_exports.unref)(getSelectedNodes).length ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createBlock)(_sfc_main$b, { key: 1 })) : (0, vue_runtime_esm_bundler_exports.createCommentVNode)("", true)
        ], 34);
      };
    }
  }));
  var _hoisted_1$4 = { class: "vue-flow__nodes vue-flow__container" };
  var __default__$8 = {
    name: "Nodes",
    compatConfig: { MODE: 3 }
  };
  var _sfc_main$8 = /* @__PURE__ */ (0, vue_runtime_esm_bundler_exports.defineComponent)(__spreadProps(__spreadValues({}, __default__$8), {
    setup(__props) {
      const slots = (0, vue_runtime_esm_bundler_exports.inject)(Slots);
      const {
        nodesDraggable,
        nodesFocusable,
        elementsSelectable,
        nodesConnectable,
        getNodes,
        getNodesInitialized,
        areNodesInitialized,
        getNodeTypes,
        updateNodeDimensions,
        emits
      } = useVueFlow();
      const resizeObserver = (0, vue_runtime_esm_bundler_exports.ref)();
      const instance = (0, vue_runtime_esm_bundler_exports.getCurrentInstance)();
      until2(() => areNodesInitialized.value).toBe(true).then(() => {
        (0, vue_runtime_esm_bundler_exports.nextTick)(() => {
          emits.nodesInitialized(getNodesInitialized.value);
        });
      });
      (0, vue_runtime_esm_bundler_exports.onMounted)(() => {
        resizeObserver.value = new ResizeObserver((entries) => {
          const updates = entries.map((entry) => {
            const id2 = entry.target.getAttribute("data-id");
            return {
              id: id2,
              nodeElement: entry.target,
              forceUpdate: true
            };
          });
          (0, vue_runtime_esm_bundler_exports.nextTick)(() => updateNodeDimensions(updates));
        });
      });
      (0, vue_runtime_esm_bundler_exports.onBeforeUnmount)(() => {
        var _a2;
        return (_a2 = resizeObserver.value) == null ? void 0 : _a2.disconnect();
      });
      function draggable(nodeDraggable) {
        return typeof nodeDraggable === "undefined" ? nodesDraggable.value : nodeDraggable;
      }
      function selectable(nodeSelectable) {
        return typeof nodeSelectable === "undefined" ? elementsSelectable.value : nodeSelectable;
      }
      function connectable(nodeConnectable) {
        return typeof nodeConnectable === "undefined" ? nodesConnectable.value : nodeConnectable;
      }
      function focusable(nodeFocusable) {
        return typeof nodeFocusable === "undefined" ? nodesFocusable.value : nodeFocusable;
      }
      function getType(type, template) {
        const name = type || "default";
        const slot = slots == null ? void 0 : slots[`node-${name}`];
        if (slot) {
          return slot;
        }
        let nodeType = template != null ? template : getNodeTypes.value[name];
        if (typeof nodeType === "string") {
          if (instance) {
            const components = Object.keys(instance.appContext.components);
            if (components && components.includes(name)) {
              nodeType = (0, vue_runtime_esm_bundler_exports.resolveComponent)(name, false);
            }
          }
        }
        if (nodeType && typeof nodeType !== "string") {
          return nodeType;
        }
        emits.error(new VueFlowError(ErrorCode.NODE_TYPE_MISSING, nodeType));
        return false;
      }
      return (_ctx, _cache) => {
        return (0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", _hoisted_1$4, [
          resizeObserver.value ? ((0, vue_runtime_esm_bundler_exports.openBlock)(true), (0, vue_runtime_esm_bundler_exports.createElementBlock)(vue_runtime_esm_bundler_exports.Fragment, { key: 0 }, (0, vue_runtime_esm_bundler_exports.renderList)((0, vue_runtime_esm_bundler_exports.unref)(getNodes), (node) => {
            return (0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createBlock)((0, vue_runtime_esm_bundler_exports.unref)(NodeWrapper$1), {
              id: node.id,
              key: node.id,
              "resize-observer": resizeObserver.value,
              type: getType(node.type, node.template),
              name: node.type || "default",
              draggable: draggable(node.draggable),
              selectable: selectable(node.selectable),
              connectable: connectable(node.connectable),
              focusable: focusable(node.focusable),
              node
            }, null, 8, ["id", "resize-observer", "type", "name", "draggable", "selectable", "connectable", "focusable", "node"]);
          }), 128)) : (0, vue_runtime_esm_bundler_exports.createCommentVNode)("", true)
        ]);
      };
    }
  }));
  var _hoisted_1$3 = ["id", "markerWidth", "markerHeight", "markerUnits", "orient"];
  var __default__$7 = {
    name: "MarkerType",
    compatConfig: { MODE: 3 }
  };
  var _sfc_main$7 = /* @__PURE__ */ (0, vue_runtime_esm_bundler_exports.defineComponent)(__spreadProps(__spreadValues({}, __default__$7), {
    props: {
      id: {},
      type: {},
      color: { default: "none" },
      width: { default: 12.5 },
      height: { default: 12.5 },
      markerUnits: { default: "strokeWidth" },
      orient: { default: "auto-start-reverse" },
      strokeWidth: { default: 1 }
    },
    setup(__props) {
      return (_ctx, _cache) => {
        return (0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("marker", {
          id: _ctx.id,
          class: "vue-flow__arrowhead",
          viewBox: "-10 -10 20 20",
          refX: "0",
          refY: "0",
          markerWidth: `${_ctx.width}`,
          markerHeight: `${_ctx.height}`,
          markerUnits: _ctx.markerUnits,
          orient: _ctx.orient
        }, [
          _ctx.type === (0, vue_runtime_esm_bundler_exports.unref)(MarkerType).ArrowClosed ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("polyline", {
            key: 0,
            style: (0, vue_runtime_esm_bundler_exports.normalizeStyle)({
              stroke: _ctx.color,
              fill: _ctx.color,
              strokeWidth: _ctx.strokeWidth
            }),
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            points: "-5,-4 0,0 -5,4 -5,-4"
          }, null, 4)) : (0, vue_runtime_esm_bundler_exports.createCommentVNode)("", true),
          _ctx.type === (0, vue_runtime_esm_bundler_exports.unref)(MarkerType).Arrow ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("polyline", {
            key: 1,
            style: (0, vue_runtime_esm_bundler_exports.normalizeStyle)({
              stroke: _ctx.color,
              strokeWidth: _ctx.strokeWidth
            }),
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            fill: "none",
            points: "-5,-4 0,0 -5,4"
          }, null, 4)) : (0, vue_runtime_esm_bundler_exports.createCommentVNode)("", true)
        ], 8, _hoisted_1$3);
      };
    }
  }));
  var __default__$6 = {
    name: "MarkerDefinitions",
    compatConfig: { MODE: 3 }
  };
  var _sfc_main$6 = /* @__PURE__ */ (0, vue_runtime_esm_bundler_exports.defineComponent)(__spreadProps(__spreadValues({}, __default__$6), {
    setup(__props) {
      const __$temp_1 = useVueFlow(), vueFlowId = (0, vue_runtime_esm_bundler_exports.toRef)(__$temp_1, "id"), edges = (0, vue_runtime_esm_bundler_exports.toRef)(__$temp_1, "edges"), connectionLineOptions = (0, vue_runtime_esm_bundler_exports.toRef)(__$temp_1, "connectionLineOptions"), defaultColor = (0, vue_runtime_esm_bundler_exports.toRef)(__$temp_1, "defaultMarkerColor");
      const markers = (0, vue_runtime_esm_bundler_exports.computed)(() => {
        const ids = [];
        const markers2 = [];
        const createMarkers = (marker) => {
          if (marker) {
            const markerId = getMarkerId(marker, vueFlowId.value);
            if (!ids.includes(markerId)) {
              if (typeof marker === "object") {
                markers2.push(__spreadProps(__spreadValues({}, marker), { id: markerId, color: marker.color || defaultColor.value }));
              } else {
                markers2.push({ id: markerId, color: defaultColor.value, type: marker });
              }
              ids.push(markerId);
            }
          }
        };
        [connectionLineOptions.value.markerEnd, connectionLineOptions.value.markerStart].forEach(createMarkers);
        edges.value.reduce((markers3, edge) => {
          [edge.markerStart, edge.markerEnd].forEach(createMarkers);
          return markers3.sort((a2, b) => a2.id.localeCompare(b.id));
        }, markers2);
        return markers2;
      });
      return (_ctx, _cache) => {
        return (0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("defs", null, [
          ((0, vue_runtime_esm_bundler_exports.openBlock)(true), (0, vue_runtime_esm_bundler_exports.createElementBlock)(vue_runtime_esm_bundler_exports.Fragment, null, (0, vue_runtime_esm_bundler_exports.renderList)(markers.value, (marker) => {
            return (0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createBlock)(_sfc_main$7, {
              id: marker.id,
              key: marker.id,
              type: marker.type,
              color: marker.color,
              width: marker.width,
              height: marker.height,
              markerUnits: marker.markerUnits,
              "stroke-width": marker.strokeWidth,
              orient: marker.orient
            }, null, 8, ["id", "type", "color", "width", "height", "markerUnits", "stroke-width", "orient"]);
          }), 128))
        ]);
      };
    }
  }));
  var _hoisted_1$2 = { class: "vue-flow__edges vue-flow__container" };
  var __default__$5 = {
    name: "Edges",
    compatConfig: { MODE: 3 }
  };
  var _sfc_main$5 = /* @__PURE__ */ (0, vue_runtime_esm_bundler_exports.defineComponent)(__spreadProps(__spreadValues({}, __default__$5), {
    setup(__props) {
      const slots = (0, vue_runtime_esm_bundler_exports.inject)(Slots);
      const {
        edgesUpdatable,
        edgesFocusable,
        elementsSelectable,
        findNode,
        getEdges,
        getEdgeTypes,
        elevateEdgesOnSelect,
        dimensions,
        emits
      } = useVueFlow();
      const instance = (0, vue_runtime_esm_bundler_exports.getCurrentInstance)();
      function selectable(edgeSelectable) {
        return typeof edgeSelectable === "undefined" ? elementsSelectable.value : edgeSelectable;
      }
      function updatable(edgeUpdatable) {
        return typeof edgeUpdatable === "undefined" ? edgesUpdatable.value : edgeUpdatable;
      }
      function focusable(edgeFocusable) {
        return typeof edgeFocusable === "undefined" ? edgesFocusable.value : edgeFocusable;
      }
      function getType(type, template) {
        const name = type || "default";
        const slot = slots == null ? void 0 : slots[`edge-${name}`];
        if (slot) {
          return slot;
        }
        let edgeType = template != null ? template : getEdgeTypes.value[name];
        if (typeof edgeType === "string") {
          if (instance) {
            const components = Object.keys(instance.appContext.components);
            if (components && components.includes(name)) {
              edgeType = (0, vue_runtime_esm_bundler_exports.resolveComponent)(name, false);
            }
          }
        }
        if (edgeType && typeof edgeType !== "string") {
          return edgeType;
        }
        emits.error(new VueFlowError(ErrorCode.EDGE_TYPE_MISSING, edgeType));
        return false;
      }
      return (_ctx, _cache) => {
        return (0, vue_runtime_esm_bundler_exports.unref)(dimensions).width && (0, vue_runtime_esm_bundler_exports.unref)(dimensions).height ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)(vue_runtime_esm_bundler_exports.Fragment, { key: 0 }, [
          ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("svg", _hoisted_1$2, [
            (0, vue_runtime_esm_bundler_exports.createVNode)(_sfc_main$6)
          ])),
          ((0, vue_runtime_esm_bundler_exports.openBlock)(true), (0, vue_runtime_esm_bundler_exports.createElementBlock)(vue_runtime_esm_bundler_exports.Fragment, null, (0, vue_runtime_esm_bundler_exports.renderList)((0, vue_runtime_esm_bundler_exports.unref)(getEdges), (edge) => {
            return (0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("svg", {
              key: edge.id,
              class: "vue-flow__edges vue-flow__container",
              style: (0, vue_runtime_esm_bundler_exports.normalizeStyle)({ zIndex: (0, vue_runtime_esm_bundler_exports.unref)(getEdgeZIndex)(edge, (0, vue_runtime_esm_bundler_exports.unref)(findNode), (0, vue_runtime_esm_bundler_exports.unref)(elevateEdgesOnSelect)) })
            }, [
              (0, vue_runtime_esm_bundler_exports.createVNode)((0, vue_runtime_esm_bundler_exports.unref)(EdgeWrapper$1), {
                id: edge.id,
                edge,
                type: getType(edge.type, edge.template),
                name: edge.type || "default",
                selectable: selectable(edge.selectable),
                updatable: updatable(edge.updatable),
                focusable: focusable(edge.focusable)
              }, null, 8, ["id", "edge", "type", "name", "selectable", "updatable", "focusable"])
            ], 4);
          }), 128)),
          (0, vue_runtime_esm_bundler_exports.createVNode)((0, vue_runtime_esm_bundler_exports.unref)(ConnectionLine$1))
        ], 64)) : (0, vue_runtime_esm_bundler_exports.createCommentVNode)("", true);
      };
    }
  }));
  var _hoisted_1$1 = /* @__PURE__ */ (0, vue_runtime_esm_bundler_exports.createElementVNode)("div", { class: "vue-flow__edge-labels" }, null, -1);
  var __default__$4 = {
    name: "Transform",
    compatConfig: { MODE: 3 }
  };
  var _sfc_main$4 = /* @__PURE__ */ (0, vue_runtime_esm_bundler_exports.defineComponent)(__spreadProps(__spreadValues({}, __default__$4), {
    setup(__props) {
      const { id: id2, viewport, d3Zoom, d3Selection, dimensions } = useVueFlow();
      const viewportReady = (0, vue_runtime_esm_bundler_exports.ref)(!isClient2);
      until2(() => !!(d3Zoom.value && d3Selection.value && dimensions.value.width > 0 && dimensions.value.height > 0)).toBe(true).then(() => {
        setTimeout(() => {
          viewportReady.value = true;
        }, 1);
      });
      return (_ctx, _cache) => {
        return (0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", {
          key: `transform-${(0, vue_runtime_esm_bundler_exports.unref)(id2)}`,
          class: "vue-flow__transformationpane vue-flow__container",
          style: (0, vue_runtime_esm_bundler_exports.normalizeStyle)({
            transform: `translate(${(0, vue_runtime_esm_bundler_exports.unref)(viewport).x}px,${(0, vue_runtime_esm_bundler_exports.unref)(viewport).y}px) scale(${(0, vue_runtime_esm_bundler_exports.unref)(viewport).zoom})`,
            opacity: viewportReady.value ? void 0 : 0
          })
        }, [
          (0, vue_runtime_esm_bundler_exports.createVNode)(_sfc_main$5),
          _hoisted_1$1,
          (0, vue_runtime_esm_bundler_exports.createVNode)(_sfc_main$8),
          (0, vue_runtime_esm_bundler_exports.renderSlot)(_ctx.$slots, "default")
        ], 4);
      };
    }
  }));
  var __default__$3 = {
    name: "Viewport",
    compatConfig: { MODE: 3 }
  };
  var _sfc_main$3 = /* @__PURE__ */ (0, vue_runtime_esm_bundler_exports.defineComponent)(__spreadProps(__spreadValues({}, __default__$3), {
    setup(__props) {
      const window2 = useWindow();
      const {
        id: id2,
        minZoom,
        maxZoom,
        defaultViewport,
        translateExtent,
        dimensions,
        zoomActivationKeyCode,
        selectionKeyCode,
        panActivationKeyCode,
        panOnScroll,
        panOnScrollMode,
        panOnScrollSpeed,
        panOnDrag,
        zoomOnDoubleClick,
        zoomOnPinch,
        zoomOnScroll,
        preventScrolling,
        noWheelClassName,
        noPanClassName,
        emits,
        connectionStartHandle,
        userSelectionActive,
        paneDragging,
        d3Zoom: storeD3Zoom,
        d3Selection: storeD3Selection,
        d3ZoomHandler: storeD3ZoomHandler,
        viewport,
        viewportRef
      } = useVueFlow();
      const isZoomingOrPanning = (0, vue_runtime_esm_bundler_exports.ref)(false);
      const isPanScrolling = (0, vue_runtime_esm_bundler_exports.ref)(false);
      let panScrollTimeout = null;
      let zoomedWithRightMouseButton = false;
      let mouseButton = 0;
      let prevTransform = {
        x: 0,
        y: 0,
        zoom: 0
      };
      const panKeyPressed = useKeyPress(panActivationKeyCode);
      const selectionKeyPressed = useKeyPress(selectionKeyCode);
      const zoomKeyPressed = useKeyPress(zoomActivationKeyCode);
      const shouldPanOnDrag = toRef3(() => !selectionKeyPressed.value && (panKeyPressed.value || panOnDrag.value));
      const isSelecting = toRef3(() => selectionKeyPressed.value || selectionKeyCode.value === true && shouldPanOnDrag.value !== true);
      useResizeObserver(viewportRef, setDimensions);
      useEventListener2(window2, "resize", setDimensions);
      (0, vue_runtime_esm_bundler_exports.onMounted)(() => {
        var _a2, _b, _c;
        if (!viewportRef.value) {
          warn2("Viewport element is missing");
          return;
        }
        const viewportElement = viewportRef.value;
        const bbox = viewportElement.getBoundingClientRect();
        const d3Zoom = zoom().scaleExtent([minZoom.value, maxZoom.value]).translateExtent(translateExtent.value);
        const d3Selection = select(viewportElement).call(d3Zoom);
        const d3ZoomHandler = d3Selection.on("wheel.zoom");
        const updatedTransform = identity2.translate((_a2 = defaultViewport.value.x) != null ? _a2 : 0, (_b = defaultViewport.value.y) != null ? _b : 0).scale(clamp2((_c = defaultViewport.value.zoom) != null ? _c : 1, minZoom.value, maxZoom.value));
        const extent = [
          [0, 0],
          [bbox.width, bbox.height]
        ];
        const constrainedTransform = d3Zoom.constrain()(updatedTransform, extent, translateExtent.value);
        d3Zoom.transform(d3Selection, constrainedTransform);
        d3Zoom.wheelDelta(wheelDelta);
        storeD3Zoom.value = d3Zoom;
        storeD3Selection.value = d3Selection;
        storeD3ZoomHandler.value = d3ZoomHandler;
        viewport.value = { x: constrainedTransform.x, y: constrainedTransform.y, zoom: constrainedTransform.k };
        d3Zoom.on("start", (event) => {
          var _a3;
          if (!event.sourceEvent) {
            return null;
          }
          mouseButton = event.sourceEvent.button;
          isZoomingOrPanning.value = true;
          const flowTransform = eventToFlowTransform(event.transform);
          if (((_a3 = event.sourceEvent) == null ? void 0 : _a3.type) === "mousedown") {
            paneDragging.value = true;
          }
          prevTransform = flowTransform;
          emits.viewportChangeStart(flowTransform);
          emits.moveStart({ event, flowTransform });
        });
        d3Zoom.on("end", (event) => {
          if (!event.sourceEvent) {
            return null;
          }
          isZoomingOrPanning.value = false;
          paneDragging.value = false;
          if (isRightClickPan(shouldPanOnDrag.value, mouseButton != null ? mouseButton : 0) && !zoomedWithRightMouseButton) {
            emits.paneContextMenu(event.sourceEvent);
          }
          zoomedWithRightMouseButton = false;
          if (viewChanged(prevTransform, event.transform)) {
            const flowTransform = eventToFlowTransform(event.transform);
            prevTransform = flowTransform;
            emits.viewportChangeEnd(flowTransform);
            emits.moveEnd({ event, flowTransform });
          }
        });
        d3Zoom.filter((event) => {
          var _a3, _b2;
          const zoomScroll = zoomKeyPressed.value || zoomOnScroll.value;
          const pinchZoom = zoomOnPinch.value && event.ctrlKey;
          if ((shouldPanOnDrag.value === true || Array.isArray(shouldPanOnDrag.value) && shouldPanOnDrag.value.includes(1)) && event.button === 1 && event.type === "mousedown" && (((_a3 = event.target) == null ? void 0 : _a3.closest(".vue-flow__node")) || ((_b2 = event.target) == null ? void 0 : _b2.closest(".vue-flow__edge")))) {
            return true;
          }
          if (!shouldPanOnDrag.value && !zoomScroll && !panOnScroll.value && !zoomOnDoubleClick.value && !zoomOnPinch.value) {
            return false;
          }
          if (userSelectionActive.value) {
            return false;
          }
          if (!zoomOnDoubleClick.value && event.type === "dblclick") {
            return false;
          }
          if (isWrappedWithClass(event, noWheelClassName.value) && event.type === "wheel") {
            return false;
          }
          if (isWrappedWithClass(event, noPanClassName.value) && (event.type !== "wheel" || panOnScroll.value && event.type === "wheel" && !zoomKeyPressed.value)) {
            return false;
          }
          if (!zoomOnPinch.value && event.ctrlKey && event.type === "wheel") {
            return false;
          }
          if (!zoomScroll && !panOnScroll.value && !pinchZoom && event.type === "wheel") {
            return false;
          }
          if (!shouldPanOnDrag.value && (event.type === "mousedown" || event.type === "touchstart")) {
            return false;
          }
          if (Array.isArray(shouldPanOnDrag.value) && !shouldPanOnDrag.value.includes(event.button) && (event.type === "mousedown" || event.type === "touchstart")) {
            return false;
          }
          const buttonAllowed = Array.isArray(shouldPanOnDrag.value) && shouldPanOnDrag.value.includes(event.button) || !event.button || event.button <= 1;
          return (!event.ctrlKey || event.type === "wheel") && buttonAllowed;
        });
        (0, vue_runtime_esm_bundler_exports.watchEffect)(() => {
          if (selectionKeyPressed.value && userSelectionActive.value && !isZoomingOrPanning.value) {
            d3Zoom.on("zoom", null);
          } else if (!selectionKeyPressed.value && !userSelectionActive.value) {
            d3Zoom.on("zoom", (event) => {
              viewport.value = { x: event.transform.x, y: event.transform.y, zoom: event.transform.k };
              const flowTransform = eventToFlowTransform(event.transform);
              zoomedWithRightMouseButton = isRightClickPan(shouldPanOnDrag.value, mouseButton != null ? mouseButton : 0);
              emits.viewportChange(flowTransform);
              emits.move({ event, flowTransform });
            });
          }
        });
        (0, vue_runtime_esm_bundler_exports.watchEffect)(() => {
          if (panKeyPressed.value || panOnScroll.value && !zoomKeyPressed.value && !userSelectionActive.value) {
            d3Selection.on(
              "wheel.zoom",
              (event) => {
                if (isWrappedWithClass(event, noWheelClassName.value)) {
                  return false;
                }
                event.preventDefault();
                event.stopImmediatePropagation();
                const currentZoom = d3Selection.property("__zoom").k || 1;
                const _isMacOs = isMacOs();
                if (event.ctrlKey && zoomOnPinch && _isMacOs) {
                  const point = pointer(event);
                  const pinchDelta = wheelDelta(event);
                  const zoom2 = currentZoom * 2 ** pinchDelta;
                  d3Zoom.scaleTo(d3Selection, zoom2, point, event);
                  return;
                }
                const deltaNormalize = event.deltaMode === 1 ? 20 : 1;
                let deltaX = panOnScrollMode.value === PanOnScrollMode.Vertical ? 0 : event.deltaX * deltaNormalize;
                let deltaY = panOnScrollMode.value === PanOnScrollMode.Horizontal ? 0 : event.deltaY * deltaNormalize;
                if (!_isMacOs && event.shiftKey && panOnScrollMode.value !== PanOnScrollMode.Vertical && !deltaX && deltaY) {
                  deltaX = deltaY;
                  deltaY = 0;
                }
                d3Zoom.translateBy(
                  d3Selection,
                  -(deltaX / currentZoom) * panOnScrollSpeed.value,
                  -(deltaY / currentZoom) * panOnScrollSpeed.value
                );
                const nextViewport = eventToFlowTransform(d3Selection.property("__zoom"));
                if (panScrollTimeout) {
                  clearTimeout(panScrollTimeout);
                }
                if (!isPanScrolling.value) {
                  isPanScrolling.value = true;
                  emits.moveStart({ event, flowTransform: nextViewport });
                  emits.viewportChangeStart(nextViewport);
                } else {
                  emits.move({ event, flowTransform: nextViewport });
                  emits.viewportChange(nextViewport);
                  panScrollTimeout = setTimeout(() => {
                    emits.moveEnd({ event, flowTransform: nextViewport });
                    emits.viewportChangeEnd(nextViewport);
                    isPanScrolling.value = false;
                  }, 150);
                }
              },
              { passive: false }
            );
          } else if (typeof d3ZoomHandler !== "undefined") {
            d3Selection.on(
              "wheel.zoom",
              function(event, d) {
                if (!preventScrolling.value || isWrappedWithClass(event, noWheelClassName.value)) {
                  return null;
                }
                event.preventDefault();
                d3ZoomHandler.call(this, event, d);
              },
              { passive: false }
            );
          }
        });
      });
      function isRightClickPan(pan, usedButton) {
        return usedButton === 2 && Array.isArray(pan) && pan.includes(2);
      }
      function wheelDelta(event) {
        const factor = event.ctrlKey && isMacOs() ? 10 : 1;
        return -event.deltaY * (event.deltaMode === 1 ? 0.05 : event.deltaMode ? 1 : 2e-3) * factor;
      }
      function viewChanged(prevViewport, eventTransform) {
        return prevViewport.x !== eventTransform.x && !isNaN(eventTransform.x) || prevViewport.y !== eventTransform.y && !isNaN(eventTransform.y) || prevViewport.zoom !== eventTransform.k && !isNaN(eventTransform.k);
      }
      function eventToFlowTransform(eventTransform) {
        return {
          x: eventTransform.x,
          y: eventTransform.y,
          zoom: eventTransform.k
        };
      }
      function setDimensions() {
        if (!viewportRef.value) {
          return;
        }
        const { width, height } = getDimensions(viewportRef.value);
        if (width === 0 || height === 0) {
          emits.error(new VueFlowError(ErrorCode.MISSING_VIEWPORT_DIMENSIONS));
        }
        dimensions.value.width = width || 500;
        dimensions.value.height = height || 500;
      }
      function isWrappedWithClass(event, className) {
        return event.target.closest(`.${className}`);
      }
      return (_ctx, _cache) => {
        return (0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", {
          ref_key: "viewportRef",
          ref: viewportRef,
          key: `viewport-${(0, vue_runtime_esm_bundler_exports.unref)(id2)}`,
          class: "vue-flow__viewport vue-flow__container"
        }, [
          (0, vue_runtime_esm_bundler_exports.createVNode)(_sfc_main$9, {
            "is-selecting": (0, vue_runtime_esm_bundler_exports.unref)(isSelecting),
            class: (0, vue_runtime_esm_bundler_exports.normalizeClass)({ connecting: !!(0, vue_runtime_esm_bundler_exports.unref)(connectionStartHandle), dragging: (0, vue_runtime_esm_bundler_exports.unref)(paneDragging), draggable: (0, vue_runtime_esm_bundler_exports.unref)(shouldPanOnDrag) })
          }, {
            default: (0, vue_runtime_esm_bundler_exports.withCtx)(() => [
              (0, vue_runtime_esm_bundler_exports.createVNode)(_sfc_main$4, null, {
                default: (0, vue_runtime_esm_bundler_exports.withCtx)(() => [
                  (0, vue_runtime_esm_bundler_exports.renderSlot)(_ctx.$slots, "default")
                ]),
                _: 3
              })
            ]),
            _: 3
          }, 8, ["is-selecting", "class"])
        ]);
      };
    }
  }));
  var _hoisted_1 = ["id"];
  var _hoisted_2 = ["id"];
  var _hoisted_3 = ["id"];
  var __default__$2 = {
    name: "A11yDescriptions",
    compatConfig: { MODE: 3 }
  };
  var _sfc_main$2 = /* @__PURE__ */ (0, vue_runtime_esm_bundler_exports.defineComponent)(__spreadProps(__spreadValues({}, __default__$2), {
    setup(__props) {
      const { id: id2, disableKeyboardA11y, ariaLiveMessage } = useVueFlow();
      return (_ctx, _cache) => {
        return (0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)(vue_runtime_esm_bundler_exports.Fragment, null, [
          (0, vue_runtime_esm_bundler_exports.createElementVNode)("div", {
            id: `${(0, vue_runtime_esm_bundler_exports.unref)(ARIA_NODE_DESC_KEY)}-${(0, vue_runtime_esm_bundler_exports.unref)(id2)}`,
            style: { "display": "none" }
          }, " Press enter or space to select a node. " + (0, vue_runtime_esm_bundler_exports.toDisplayString)(!(0, vue_runtime_esm_bundler_exports.unref)(disableKeyboardA11y) ? "You can then use the arrow keys to move the node around." : "") + " You can then use the arrow keys to move the node around, press delete to remove it and press escape to cancel. ", 9, _hoisted_1),
          (0, vue_runtime_esm_bundler_exports.createElementVNode)("div", {
            id: `${(0, vue_runtime_esm_bundler_exports.unref)(ARIA_EDGE_DESC_KEY)}-${(0, vue_runtime_esm_bundler_exports.unref)(id2)}`,
            style: { "display": "none" }
          }, " Press enter or space to select an edge. You can then press delete to remove it or press escape to cancel. ", 8, _hoisted_2),
          !(0, vue_runtime_esm_bundler_exports.unref)(disableKeyboardA11y) ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", {
            key: 0,
            id: `${(0, vue_runtime_esm_bundler_exports.unref)(ARIA_LIVE_MESSAGE)}-${(0, vue_runtime_esm_bundler_exports.unref)(id2)}`,
            "aria-live": "assertive",
            "aria-atomic": "true",
            style: { "position": "absolute", "width": "1px", "height": "1px", "margin": "-1px", "border": "0", "padding": "0", "overflow": "hidden", "clip": "rect(0px, 0px, 0px, 0px)", "clip-path": "inset(100%)" }
          }, (0, vue_runtime_esm_bundler_exports.toDisplayString)((0, vue_runtime_esm_bundler_exports.unref)(ariaLiveMessage)), 9, _hoisted_3)) : (0, vue_runtime_esm_bundler_exports.createCommentVNode)("", true)
        ], 64);
      };
    }
  }));
  var __default__$1 = {
    name: "VueFlow",
    compatConfig: { MODE: 3 }
  };
  var _sfc_main$1 = /* @__PURE__ */ (0, vue_runtime_esm_bundler_exports.defineComponent)(__spreadProps(__spreadValues({}, __default__$1), {
    props: {
      id: {},
      modelValue: {},
      nodes: {},
      edges: {},
      edgeTypes: {},
      nodeTypes: {},
      connectionMode: {},
      connectionLineType: {},
      connectionLineStyle: { default: void 0 },
      connectionLineOptions: { default: void 0 },
      connectionRadius: {},
      isValidConnection: { type: [Function, null], default: void 0 },
      deleteKeyCode: { default: void 0 },
      selectionKeyCode: { default: void 0 },
      multiSelectionKeyCode: { default: void 0 },
      zoomActivationKeyCode: { default: void 0 },
      panActivationKeyCode: { default: void 0 },
      snapToGrid: { type: Boolean, default: void 0 },
      snapGrid: {},
      onlyRenderVisibleElements: { type: Boolean, default: void 0 },
      edgesUpdatable: { type: [Boolean, String], default: void 0 },
      nodesDraggable: { type: Boolean, default: void 0 },
      nodesConnectable: { type: Boolean, default: void 0 },
      nodeDragThreshold: {},
      elementsSelectable: { type: Boolean, default: void 0 },
      selectNodesOnDrag: { type: Boolean, default: void 0 },
      panOnDrag: { type: [Boolean, Array], default: void 0 },
      minZoom: {},
      maxZoom: {},
      defaultViewport: {},
      translateExtent: {},
      nodeExtent: {},
      defaultMarkerColor: {},
      zoomOnScroll: { type: Boolean, default: void 0 },
      zoomOnPinch: { type: Boolean, default: void 0 },
      panOnScroll: { type: Boolean, default: void 0 },
      panOnScrollSpeed: {},
      panOnScrollMode: {},
      zoomOnDoubleClick: { type: Boolean, default: void 0 },
      preventScrolling: { type: Boolean, default: void 0 },
      selectionMode: {},
      edgeUpdaterRadius: {},
      fitViewOnInit: { type: Boolean, default: void 0 },
      connectOnClick: { type: Boolean, default: void 0 },
      applyDefault: { type: Boolean, default: void 0 },
      autoConnect: { type: [Boolean, Function], default: void 0 },
      noDragClassName: {},
      noWheelClassName: {},
      noPanClassName: {},
      defaultEdgeOptions: {},
      elevateEdgesOnSelect: { type: Boolean, default: void 0 },
      elevateNodesOnSelect: { type: Boolean, default: void 0 },
      disableKeyboardA11y: { type: Boolean, default: void 0 },
      edgesFocusable: { type: Boolean, default: void 0 },
      nodesFocusable: { type: Boolean, default: void 0 },
      autoPanOnConnect: { type: Boolean, default: void 0 },
      autoPanOnNodeDrag: { type: Boolean, default: void 0 },
      __experimentalFeatures: {}
    },
    emits: ["nodesChange", "edgesChange", "nodeDoubleClick", "nodeClick", "nodeMouseEnter", "nodeMouseMove", "nodeMouseLeave", "nodeContextMenu", "nodeDragStart", "nodeDrag", "nodeDragStop", "nodesInitialized", "miniMapNodeClick", "miniMapNodeDoubleClick", "miniMapNodeMouseEnter", "miniMapNodeMouseMove", "miniMapNodeMouseLeave", "connect", "connectStart", "connectEnd", "clickConnectStart", "clickConnectEnd", "moveStart", "move", "moveEnd", "selectionDragStart", "selectionDrag", "selectionDragStop", "selectionContextMenu", "selectionStart", "selectionEnd", "viewportChangeStart", "viewportChange", "viewportChangeEnd", "paneReady", "paneScroll", "paneClick", "paneContextMenu", "paneMouseEnter", "paneMouseMove", "paneMouseLeave", "edgeContextMenu", "edgeMouseEnter", "edgeMouseMove", "edgeMouseLeave", "edgeDoubleClick", "edgeClick", "edgeUpdateStart", "edgeUpdate", "edgeUpdateEnd", "updateNodeInternals", "error", "update:modelValue", "update:nodes", "update:edges"],
    setup(__props, { expose: __expose, emit }) {
      const props = __props;
      const slots = (0, vue_runtime_esm_bundler_exports.useSlots)();
      const modelValue = useVModel(props, "modelValue", emit);
      const modelNodes = useVModel(props, "nodes", emit);
      const modelEdges = useVModel(props, "edges", emit);
      const _a2 = useVueFlow(props), { vueFlowRef, hooks, getNodeTypes, getEdgeTypes } = _a2, rest = __objRest(_a2, ["vueFlowRef", "hooks", "getNodeTypes", "getEdgeTypes"]);
      const dispose = useWatchProps({ modelValue, nodes: modelNodes, edges: modelEdges }, props, __spreadValues({
        vueFlowRef,
        hooks,
        getNodeTypes,
        getEdgeTypes
      }, rest));
      useHooks(emit, hooks);
      (0, vue_runtime_esm_bundler_exports.provide)(Slots, slots);
      (0, vue_runtime_esm_bundler_exports.onUnmounted)(() => {
        dispose();
      });
      __expose(__spreadValues({
        vueFlowRef,
        hooks,
        getNodeTypes,
        getEdgeTypes
      }, rest));
      return (_ctx, _cache) => {
        return (0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", {
          ref_key: "vueFlowRef",
          ref: vueFlowRef,
          class: "vue-flow"
        }, [
          (0, vue_runtime_esm_bundler_exports.createVNode)(_sfc_main$3, null, {
            default: (0, vue_runtime_esm_bundler_exports.withCtx)(() => [
              (0, vue_runtime_esm_bundler_exports.renderSlot)(_ctx.$slots, "zoom-pane")
            ]),
            _: 3
          }),
          (0, vue_runtime_esm_bundler_exports.renderSlot)(_ctx.$slots, "default"),
          (0, vue_runtime_esm_bundler_exports.createVNode)(_sfc_main$2)
        ], 512);
      };
    }
  }));
  var __default__ = {
    name: "Panel",
    compatConfig: { MODE: 3 }
  };
  var _sfc_main = /* @__PURE__ */ (0, vue_runtime_esm_bundler_exports.defineComponent)(__spreadProps(__spreadValues({}, __default__), {
    props: {
      position: {}
    },
    setup(__props) {
      const props = __props;
      const { userSelectionActive } = useVueFlow();
      const positionClasses = (0, vue_runtime_esm_bundler_exports.computed)(() => `${props.position}`.split("-"));
      return (_ctx, _cache) => {
        return (0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", {
          class: (0, vue_runtime_esm_bundler_exports.normalizeClass)(["vue-flow__panel", positionClasses.value]),
          style: (0, vue_runtime_esm_bundler_exports.normalizeStyle)({ pointerEvents: (0, vue_runtime_esm_bundler_exports.unref)(userSelectionActive) ? "none" : "all" })
        }, [
          (0, vue_runtime_esm_bundler_exports.renderSlot)(_ctx.$slots, "default")
        ], 6);
      };
    }
  }));

  // node_modules/@vue-flow/background/dist/vue-flow-background.mjs
  var a = /* @__PURE__ */ ((t) => (t.Lines = "lines", t.Dots = "dots", t))(a || {});
  var z = function({ dimensions: t, size: l, color: d }) {
    return (0, vue_runtime_esm_bundler_exports.h)("path", {
      stroke: d,
      "stroke-width": l,
      d: `M${t[0] / 2} 0 V${t[1]} M0 ${t[1] / 2} H${t[0]}`
    });
  };
  var C = function({ radius: t, color: l }) {
    return (0, vue_runtime_esm_bundler_exports.h)("circle", { cx: t, cy: t, r: t, fill: l });
  };
  a.Lines + "", a.Dots + "";
  var L = ["id", "x", "y", "width", "height", "patternTransform"];
  var B = {
    key: 2,
    height: "100",
    width: "100"
  };
  var S = ["fill"];
  var E = ["x", "y", "fill"];
  var M = {
    name: "Background",
    compatConfig: { MODE: 3 }
  };
  var A = /* @__PURE__ */ (0, vue_runtime_esm_bundler_exports.defineComponent)(__spreadProps(__spreadValues({}, M), {
    props: {
      id: null,
      variant: { default: a.Dots },
      gap: { default: 20 },
      size: { default: 1 },
      lineWidth: { default: 1 },
      patternColor: null,
      bgColor: null,
      height: { default: 100 },
      width: { default: 100 },
      x: { default: 0 },
      y: { default: 0 },
      offset: { default: 2 }
    },
    setup(t) {
      const l = {
        [a.Dots]: "#81818a",
        [a.Lines]: "#eee"
      }, { id: d, viewport: o } = useVueFlow(), n = (0, vue_runtime_esm_bundler_exports.computed)(() => {
        const [i, v] = Array.isArray(t.gap) ? t.gap : [t.gap, t.gap], c = [i * o.value.zoom || 1, v * o.value.zoom || 1], f = t.size * o.value.zoom, D = t.variant === a.Dots ? [f / t.offset, f / t.offset] : [c[0] / t.offset, c[1] / t.offset];
        return {
          scaledGap: c,
          offset: D,
          size: f
        };
      }), r = (0, vue_runtime_esm_bundler_exports.computed)(() => `pattern-${d}${t.id ? `-${t.id}` : ""}`), m = (0, vue_runtime_esm_bundler_exports.computed)(() => t.patternColor || l[t.variant || a.Dots]);
      return (i, v) => ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("svg", {
        class: "vue-flow__background vue-flow__container",
        style: (0, vue_runtime_esm_bundler_exports.normalizeStyle)({
          height: `${t.height > 100 ? 100 : t.height}%`,
          width: `${t.width > 100 ? 100 : t.width}%`
        })
      }, [
        (0, vue_runtime_esm_bundler_exports.renderSlot)(i.$slots, "pattern-container", { id: (0, vue_runtime_esm_bundler_exports.unref)(r) }, () => [
          (0, vue_runtime_esm_bundler_exports.createElementVNode)("pattern", {
            id: (0, vue_runtime_esm_bundler_exports.unref)(r),
            x: (0, vue_runtime_esm_bundler_exports.unref)(o).x % (0, vue_runtime_esm_bundler_exports.unref)(n).scaledGap[0],
            y: (0, vue_runtime_esm_bundler_exports.unref)(o).y % (0, vue_runtime_esm_bundler_exports.unref)(n).scaledGap[1],
            width: (0, vue_runtime_esm_bundler_exports.unref)(n).scaledGap[0],
            height: (0, vue_runtime_esm_bundler_exports.unref)(n).scaledGap[1],
            patternTransform: `translate(-${(0, vue_runtime_esm_bundler_exports.unref)(n).offset[0]},-${(0, vue_runtime_esm_bundler_exports.unref)(n).offset[1]})`,
            patternUnits: "userSpaceOnUse"
          }, [
            (0, vue_runtime_esm_bundler_exports.renderSlot)(i.$slots, "pattern", {}, () => [
              t.variant === (0, vue_runtime_esm_bundler_exports.unref)(a).Lines ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createBlock)((0, vue_runtime_esm_bundler_exports.unref)(z), {
                key: 0,
                size: t.lineWidth,
                color: (0, vue_runtime_esm_bundler_exports.unref)(m),
                dimensions: (0, vue_runtime_esm_bundler_exports.unref)(n).scaledGap
              }, null, 8, ["size", "color", "dimensions"])) : t.variant === (0, vue_runtime_esm_bundler_exports.unref)(a).Dots ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createBlock)((0, vue_runtime_esm_bundler_exports.unref)(C), {
                key: 1,
                color: (0, vue_runtime_esm_bundler_exports.unref)(m),
                radius: (0, vue_runtime_esm_bundler_exports.unref)(n).size / t.offset
              }, null, 8, ["color", "radius"])) : (0, vue_runtime_esm_bundler_exports.createCommentVNode)("", true),
              t.bgColor ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("svg", B, [
                (0, vue_runtime_esm_bundler_exports.createElementVNode)("rect", {
                  width: "100%",
                  height: "100%",
                  fill: t.bgColor
                }, null, 8, S)
              ])) : (0, vue_runtime_esm_bundler_exports.createCommentVNode)("", true)
            ])
          ], 8, L)
        ]),
        (0, vue_runtime_esm_bundler_exports.createElementVNode)("rect", {
          x: t.x,
          y: t.y,
          width: "100%",
          height: "100%",
          fill: `url(#${(0, vue_runtime_esm_bundler_exports.unref)(r)})`
        }, null, 8, E),
        (0, vue_runtime_esm_bundler_exports.renderSlot)(i.$slots, "default", { id: (0, vue_runtime_esm_bundler_exports.unref)(r) })
      ], 4));
    }
  }));

  // sfc-script:/home/amreen/erp/frappe-bench/apps/frappe/frappe/public/js/workflow_builder/components/TransitionEdge.vue?type=script
  var __default__2 = {
    inheritAttrs: false
  };
  var TransitionEdge_default = /* @__PURE__ */ Object.assign(__default__2, {
    __name: "TransitionEdge",
    props: {
      id: { type: String, required: true },
      sourceX: { type: Number, required: true },
      sourceY: { type: Number, required: true },
      targetX: { type: Number, required: true },
      targetY: { type: Number, required: true },
      sourcePosition: { type: String, required: false },
      targetPosition: { type: String, required: false },
      sourceHandle: { type: String, required: false },
      targetHandle: { type: String, required: false },
      source: { type: String, required: false },
      target: { type: String, required: false },
      sourceNode: { type: Object, required: true },
      targetNode: { type: Object, required: true },
      markerEnd: { type: String, required: false },
      selected: { type: Boolean, required: false },
      data: { type: Object, required: false }
    },
    setup(__props, { expose: __expose }) {
      __expose();
      let { findEdge, getSelectedNodes } = useVueFlow();
      const props = __props;
      let marker_end = {
        type: "arrow",
        width: 15,
        height: 15,
        strokeWidth: 1.5,
        color: "#687178"
      };
      let marker_end_primary = {
        type: "arrow",
        width: 11,
        height: 11,
        strokeWidth: 1.7,
        color: "#171717"
      };
      (0, vue_runtime_esm_bundler_exports.watch)(
        () => props.selected,
        (val) => {
          var _a2;
          let target_is_action = (_a2 = props.target) == null ? void 0 : _a2.startsWith("action-");
          val && selectAction(target_is_action);
          if (target_is_action)
            return;
          findEdge(props.id).markerEnd = val ? marker_end_primary : marker_end;
        },
        { immediate: true }
      );
      function selectAction(target_is_action) {
        var _a2;
        let action = target_is_action ? props.targetNode : props.sourceNode;
        if (action.selected)
          return;
        (_a2 = getSelectedNodes.value) == null ? void 0 : _a2.forEach((node) => node.selected = false);
        (0, vue_runtime_esm_bundler_exports.nextTick)(() => action.selected = true);
      }
      const d = (0, vue_runtime_esm_bundler_exports.computed)(() => {
        return getSmoothStepPath({
          sourceX: props.sourceX,
          sourceY: props.sourceY,
          targetX: props.targetX,
          targetY: props.targetY,
          sourceHandle: props.sourceHandle,
          targetHandle: props.targetHandle,
          sourcePosition: props.sourcePosition,
          targetPosition: props.targetPosition,
          targetNode: props.targetNode,
          borderRadius: 30
        });
      });
      const __returned__ = { get findEdge() {
        return findEdge;
      }, set findEdge(v) {
        findEdge = v;
      }, get getSelectedNodes() {
        return getSelectedNodes;
      }, set getSelectedNodes(v) {
        getSelectedNodes = v;
      }, props, get marker_end() {
        return marker_end;
      }, set marker_end(v) {
        marker_end = v;
      }, get marker_end_primary() {
        return marker_end_primary;
      }, set marker_end_primary(v) {
        marker_end_primary = v;
      }, selectAction, d, computed: vue_runtime_esm_bundler_exports.computed, nextTick: vue_runtime_esm_bundler_exports.nextTick, watch: vue_runtime_esm_bundler_exports.watch, get getSmoothStepPath() {
        return getSmoothStepPath;
      }, get SmoothStepEdge() {
        return SmoothStepEdge$1;
      }, get useVueFlow() {
        return useVueFlow;
      }, get EdgeLabelRenderer() {
        return _sfc_main$c;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  });

  // sfc-template:/home/amreen/erp/frappe-bench/apps/frappe/frappe/public/js/workflow_builder/components/TransitionEdge.vue?type=template
  var _hoisted_12 = ["innerHTML"];
  function render(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)(vue_runtime_esm_bundler_exports.Fragment, null, [
      (0, vue_runtime_esm_bundler_exports.createVNode)($setup["SmoothStepEdge"], {
        class: "transition-edge",
        id: $props.id,
        path: $setup.d[0],
        markerEnd: $props.markerEnd
      }, null, 8, ["id", "path", "markerEnd"]),
      $props.markerEnd == "url(#)" ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createBlock)($setup["EdgeLabelRenderer"], { key: 0 }, {
        default: (0, vue_runtime_esm_bundler_exports.withCtx)(() => [
          (0, vue_runtime_esm_bundler_exports.createElementVNode)("div", {
            onClick: _cache[0] || (_cache[0] = (0, vue_runtime_esm_bundler_exports.withModifiers)(($event) => $setup.selectAction(true), ["stop"])),
            style: (0, vue_runtime_esm_bundler_exports.normalizeStyle)({
              transform: `translate(-50%, -50%) translate(${$setup.d[1]}px, ${$setup.d[2]}px)`,
              borderColor: $props.selected ? "var(--primary)" : "var(--gray-600)",
              borderWidth: $props.selected ? "1.5px" : "1px"
            }),
            class: "access nodrag nopan"
          }, [
            (0, vue_runtime_esm_bundler_exports.createElementVNode)("span", {
              class: "mr-1",
              innerHTML: _ctx.frappe.utils.icon("users", "sm")
            }, null, 8, _hoisted_12),
            (0, vue_runtime_esm_bundler_exports.createElementVNode)("span", null, (0, vue_runtime_esm_bundler_exports.toDisplayString)($props.targetNode.data.allowed), 1)
          ], 4)
        ]),
        _: 1
      })) : (0, vue_runtime_esm_bundler_exports.createCommentVNode)("v-if", true)
    ], 64);
  }

  // frappe/public/js/workflow_builder/components/TransitionEdge.vue
  TransitionEdge_default.render = render;
  TransitionEdge_default.__file = "frappe/public/js/workflow_builder/components/TransitionEdge.vue";
  TransitionEdge_default.__scopeId = "data-v-0c1414ff";
  var TransitionEdge_default2 = TransitionEdge_default;

  // sfc-script:/home/amreen/erp/frappe-bench/apps/frappe/frappe/public/js/workflow_builder/components/StateNode.vue?type=script
  var StateNode_default = {
    __name: "StateNode",
    props: {
      node: {
        type: Object,
        required: true
      }
    },
    setup(__props, { expose: __expose }) {
      __expose();
      const props = __props;
      const isValidConnection = ({ source, target }) => {
        if (source.startsWith("action-") && !target.startsWith("action-") || !source.startsWith("action-") && target.startsWith("action-")) {
          return false;
        }
        return source !== target;
      };
      let store = useStore();
      const { findNode } = useVueFlow();
      (0, vue_runtime_esm_bundler_exports.watch)(
        () => {
          var _a2;
          return (_a2 = findNode(props.node.id)) == null ? void 0 : _a2.selected;
        },
        (val) => {
          if (val)
            store.workflow.selected = props.node;
        }
      );
      let label = (0, vue_runtime_esm_bundler_exports.computed)(() => {
        var _a2, _b;
        return (_b = (_a2 = findNode(props.node.id)) == null ? void 0 : _a2.data) == null ? void 0 : _b.state;
      });
      (0, vue_runtime_esm_bundler_exports.watch)(
        () => props.node.data,
        () => {
          store.ref_history.commit();
        },
        { deep: true }
      );
      const __returned__ = { props, isValidConnection, get store() {
        return store;
      }, set store(v) {
        store = v;
      }, findNode, get label() {
        return label;
      }, set label(v) {
        label = v;
      }, get Handle() {
        return _sfc_main$f;
      }, get useVueFlow() {
        return useVueFlow;
      }, watch: vue_runtime_esm_bundler_exports.watch, computed: vue_runtime_esm_bundler_exports.computed, get useStore() {
        return useStore;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };

  // sfc-template:/home/amreen/erp/frappe-bench/apps/frappe/frappe/public/js/workflow_builder/components/StateNode.vue?type=template
  var _hoisted_13 = {
    key: 0,
    class: "node-label"
  };
  var _hoisted_22 = {
    key: 1,
    class: "node-placeholder text-muted"
  };
  function render2(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", {
      class: "node",
      tabindex: "0",
      onClick: _cache[0] || (_cache[0] = (0, vue_runtime_esm_bundler_exports.withModifiers)(() => {
      }, ["stop"]))
    }, [
      $setup.label ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", _hoisted_13, (0, vue_runtime_esm_bundler_exports.toDisplayString)($setup.label), 1)) : ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", _hoisted_22, (0, vue_runtime_esm_bundler_exports.toDisplayString)(_ctx.__("No Label")), 1)),
      ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)(vue_runtime_esm_bundler_exports.Fragment, null, (0, vue_runtime_esm_bundler_exports.renderList)(["top", "right", "bottom", "left"], (handle) => {
        return (0, vue_runtime_esm_bundler_exports.createVNode)($setup["Handle"], {
          class: "handle",
          style: (0, vue_runtime_esm_bundler_exports.normalizeStyle)({ [handle]: "-12px" }),
          type: "source",
          position: handle,
          id: handle,
          isValidConnection: $setup.isValidConnection
        }, null, 8, ["style", "position", "id"]);
      }), 64))
    ]);
  }

  // frappe/public/js/workflow_builder/components/StateNode.vue
  StateNode_default.render = render2;
  StateNode_default.__file = "frappe/public/js/workflow_builder/components/StateNode.vue";
  StateNode_default.__scopeId = "data-v-a0c0593e";
  var StateNode_default2 = StateNode_default;

  // sfc-script:/home/amreen/erp/frappe-bench/apps/frappe/frappe/public/js/workflow_builder/components/ActionNode.vue?type=script
  var ActionNode_default = {
    __name: "ActionNode",
    props: {
      node: {
        type: Object,
        required: true
      }
    },
    setup(__props, { expose: __expose }) {
      __expose();
      const props = __props;
      const isValidConnection = ({ source, target }) => {
        if (source.startsWith("action-") && !target.startsWith("action-") || !source.startsWith("action-") && target.startsWith("action-") || source.startsWith("action-") && target.startsWith("action-")) {
          return false;
        }
        return source !== target;
      };
      let store = useStore();
      const { edges, findNode } = useVueFlow();
      (0, vue_runtime_esm_bundler_exports.watch)(
        () => {
          var _a2;
          return (_a2 = findNode(props.node.id)) == null ? void 0 : _a2.selected;
        },
        (val) => {
          if (val)
            store.workflow.selected = props.node;
          let connected_edges = edges.value.filter(
            (edge) => edge.source === props.node.id || edge.target === props.node.id
          );
          connected_edges.forEach((edge) => edge.selected = val);
        }
      );
      let label = (0, vue_runtime_esm_bundler_exports.computed)(() => {
        var _a2, _b;
        return (_b = (_a2 = findNode(props.node.id)) == null ? void 0 : _a2.data) == null ? void 0 : _b.action;
      });
      (0, vue_runtime_esm_bundler_exports.watch)(
        () => props.node.data,
        () => {
          store.ref_history.commit();
        },
        { deep: true }
      );
      const __returned__ = { props, isValidConnection, get store() {
        return store;
      }, set store(v) {
        store = v;
      }, edges, findNode, get label() {
        return label;
      }, set label(v) {
        label = v;
      }, get Handle() {
        return _sfc_main$f;
      }, get useVueFlow() {
        return useVueFlow;
      }, watch: vue_runtime_esm_bundler_exports.watch, computed: vue_runtime_esm_bundler_exports.computed, get useStore() {
        return useStore;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };

  // sfc-template:/home/amreen/erp/frappe-bench/apps/frappe/frappe/public/js/workflow_builder/components/ActionNode.vue?type=template
  var _hoisted_14 = {
    key: 0,
    class: "node-label"
  };
  var _hoisted_23 = {
    key: 1,
    class: "node-placeholder text-muted"
  };
  function render3(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", {
      class: "node",
      tabindex: "0",
      onClick: _cache[1] || (_cache[1] = (0, vue_runtime_esm_bundler_exports.withModifiers)(($event) => $setup.store.workflow.selected = $props.node, ["stop"]))
    }, [
      $setup.label ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", _hoisted_14, (0, vue_runtime_esm_bundler_exports.toDisplayString)($setup.label), 1)) : ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", _hoisted_23, (0, vue_runtime_esm_bundler_exports.toDisplayString)(_ctx.__("No Label")), 1)),
      ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)(vue_runtime_esm_bundler_exports.Fragment, null, (0, vue_runtime_esm_bundler_exports.renderList)(["top", "right", "bottom", "left"], (handle) => {
        return (0, vue_runtime_esm_bundler_exports.createVNode)($setup["Handle"], {
          class: "handle",
          style: (0, vue_runtime_esm_bundler_exports.normalizeStyle)({ [handle]: "-3px", opacity: 0 }),
          type: "source",
          position: handle,
          id: handle,
          isValidConnection: $setup.isValidConnection,
          onClick: _cache[0] || (_cache[0] = (0, vue_runtime_esm_bundler_exports.withModifiers)(() => {
          }, ["stop"]))
        }, null, 8, ["style", "position", "id"]);
      }), 64))
    ]);
  }

  // frappe/public/js/workflow_builder/components/ActionNode.vue
  ActionNode_default.render = render3;
  ActionNode_default.__file = "frappe/public/js/workflow_builder/components/ActionNode.vue";
  ActionNode_default.__scopeId = "data-v-2ee7d402";
  var ActionNode_default2 = ActionNode_default;

  // sfc-script:/home/amreen/erp/frappe-bench/apps/frappe/frappe/public/js/workflow_builder/components/ConnectionLine.vue?type=script
  var ConnectionLine_default = {
    __name: "ConnectionLine",
    props: {
      sourceX: { type: Number, required: true },
      sourceY: { type: Number, required: true },
      targetX: { type: Number, required: true },
      targetY: { type: Number, required: true },
      sourcePosition: { type: String, required: false },
      targetPosition: { type: String, required: false },
      sourceHandle: { type: Object, required: false },
      targetHandle: { type: Object, required: false },
      markerEnd: { type: String, required: false }
    },
    setup(__props, { expose: __expose }) {
      __expose();
      const props = __props;
      let opposite = {
        left: "left",
        right: "right",
        top: "bottom",
        bottom: "top"
      };
      const d = (0, vue_runtime_esm_bundler_exports.computed)(
        () => getSmoothStepPath(__spreadProps(__spreadValues({}, props), {
          borderRadius: 30,
          targetPosition: opposite[props.targetPosition]
        }))
      );
      const __returned__ = { props, get opposite() {
        return opposite;
      }, set opposite(v) {
        opposite = v;
      }, d, get getSmoothStepPath() {
        return getSmoothStepPath;
      }, get SmoothStepEdge() {
        return SmoothStepEdge$1;
      }, computed: vue_runtime_esm_bundler_exports.computed };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };

  // sfc-template:/home/amreen/erp/frappe-bench/apps/frappe/frappe/public/js/workflow_builder/components/ConnectionLine.vue?type=template
  function render4(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createBlock)($setup["SmoothStepEdge"], {
      class: "animated",
      path: $setup.d[0]
    }, null, 8, ["path"]);
  }

  // frappe/public/js/workflow_builder/components/ConnectionLine.vue
  ConnectionLine_default.render = render4;
  ConnectionLine_default.__file = "frappe/public/js/workflow_builder/components/ConnectionLine.vue";
  var ConnectionLine_default2 = ConnectionLine_default;

  // sfc-script:/home/amreen/erp/frappe-bench/apps/frappe/frappe/public/js/workflow_builder/components/Properties.vue?type=script
  var Properties_default = {
    __name: "Properties",
    setup(__props, { expose: __expose }) {
      __expose();
      let store = useStore();
      let title = (0, vue_runtime_esm_bundler_exports.ref)("Workflow Details");
      let doc = (0, vue_runtime_esm_bundler_exports.computed)(() => {
        return store.workflow.selected ? store.workflow.selected.data : store.workflow_doc;
      });
      let properties = (0, vue_runtime_esm_bundler_exports.computed)(() => {
        (0, vue_runtime_esm_bundler_exports.nextTick)(() => {
          let field = $(".field input[data-fieldname!='document_type']").first();
          if (field.val() === "")
            field.focus();
        });
        if (store.workflow.selected && "action" in store.workflow.selected.data) {
          title.value = "Transition Properties";
          return store.transitionfields.filter(
            (df) => in_list(["action", "allowed", "allow_self_approval", "condition"], df.fieldname)
          );
        } else if (store.workflow.selected && "state" in store.workflow.selected.data) {
          title.value = "State Properties";
          let allow_edit = store.statefields.find((df) => df.fieldname == "allow_edit");
          store.statefields = store.statefields.filter(
            (df) => !in_list(["allow_edit", "workflow_builder_id"], df.fieldname)
          );
          store.statefields.splice(2, 0, allow_edit);
          return store.statefields.filter((df) => {
            if (df.fieldname == "doc_status") {
              df.options = ["Draft", "Submitted", "Cancelled"];
              df.description = "";
            }
            if (df.fieldname == "update_field") {
              df.options = store.workflow_doc_fields;
            }
            return true;
          });
        }
        title.value = "Workflow Details";
        return store.workflowfields.filter(
          (df) => !in_list(["states", "transitions", "workflow_data", "workflow_name"], df.fieldname)
        );
      });
      const __returned__ = { get store() {
        return store;
      }, set store(v) {
        store = v;
      }, get title() {
        return title;
      }, set title(v) {
        title = v;
      }, get doc() {
        return doc;
      }, set doc(v) {
        doc = v;
      }, get properties() {
        return properties;
      }, set properties(v) {
        properties = v;
      }, ref: vue_runtime_esm_bundler_exports.ref, computed: vue_runtime_esm_bundler_exports.computed, nextTick: vue_runtime_esm_bundler_exports.nextTick, get useStore() {
        return useStore;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };

  // sfc-template:/home/amreen/erp/frappe-bench/apps/frappe/frappe/public/js/workflow_builder/components/Properties.vue?type=template
  var _hoisted_15 = { class: "title" };
  var _hoisted_24 = { class: "properties" };
  var _hoisted_32 = { class: "control-data" };
  var _hoisted_4 = { key: 0 };
  function render5(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)(vue_runtime_esm_bundler_exports.Fragment, null, [
      (0, vue_runtime_esm_bundler_exports.createElementVNode)("div", _hoisted_15, (0, vue_runtime_esm_bundler_exports.toDisplayString)(_ctx.__($setup.title)), 1),
      (0, vue_runtime_esm_bundler_exports.createElementVNode)("div", _hoisted_24, [
        (0, vue_runtime_esm_bundler_exports.createElementVNode)("div", _hoisted_32, [
          $setup.doc ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", _hoisted_4, [
            ((0, vue_runtime_esm_bundler_exports.openBlock)(true), (0, vue_runtime_esm_bundler_exports.createElementBlock)(vue_runtime_esm_bundler_exports.Fragment, null, (0, vue_runtime_esm_bundler_exports.renderList)($setup.properties, (df) => {
              return (0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", {
                class: "field",
                key: df.name
              }, [
                ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createBlock)((0, vue_runtime_esm_bundler_exports.resolveDynamicComponent)(df.fieldtype.replaceAll(" ", "") + "Control"), {
                  df,
                  value: $setup.doc[df.fieldname],
                  modelValue: $setup.doc[df.fieldname],
                  "onUpdate:modelValue": ($event) => $setup.doc[df.fieldname] = $event,
                  "data-fieldname": df.fieldname,
                  "data-fieldtype": df.fieldtype
                }, null, 8, ["df", "value", "modelValue", "onUpdate:modelValue", "data-fieldname", "data-fieldtype"]))
              ]);
            }), 128))
          ])) : (0, vue_runtime_esm_bundler_exports.createCommentVNode)("v-if", true)
        ])
      ])
    ], 64);
  }

  // frappe/public/js/workflow_builder/components/Properties.vue
  Properties_default.render = render5;
  Properties_default.__file = "frappe/public/js/workflow_builder/components/Properties.vue";
  Properties_default.__scopeId = "data-v-fb74ba4f";
  var Properties_default2 = Properties_default;

  // sfc-script:/home/amreen/erp/frappe-bench/apps/frappe/frappe/public/js/workflow_builder/components/Sidebar.vue?type=script
  var Sidebar_default = {
    __name: "Sidebar",
    setup(__props, { expose: __expose }) {
      __expose();
      let sidebar_width = (0, vue_runtime_esm_bundler_exports.ref)(272);
      let sidebar_resizing = (0, vue_runtime_esm_bundler_exports.ref)(false);
      function start_resize() {
        $(document).on("mousemove", resize);
        $(document).on("mouseup", () => {
          $(".main").removeClass("resizing");
          sidebar_resizing.value = false;
          $(document).off("mousemove", resize);
        });
      }
      function resize(e2) {
        sidebar_resizing.value = true;
        $(".main").addClass("resizing");
        sidebar_width.value = e2.clientX - 90;
        if (sidebar_width.value < 16 * 16) {
          sidebar_width.value = 16 * 16;
        }
        if (sidebar_width.value > 24 * 16) {
          sidebar_width.value = 24 * 16;
        }
      }
      const __returned__ = { get sidebar_width() {
        return sidebar_width;
      }, set sidebar_width(v) {
        sidebar_width = v;
      }, get sidebar_resizing() {
        return sidebar_resizing;
      }, set sidebar_resizing(v) {
        sidebar_resizing = v;
      }, start_resize, resize, Properties: Properties_default2, ref: vue_runtime_esm_bundler_exports.ref };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };

  // sfc-template:/home/amreen/erp/frappe-bench/apps/frappe/frappe/public/js/workflow_builder/components/Sidebar.vue?type=template
  function render6(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)(vue_runtime_esm_bundler_exports.Fragment, null, [
      (0, vue_runtime_esm_bundler_exports.createElementVNode)("div", {
        class: (0, vue_runtime_esm_bundler_exports.normalizeClass)(["sidebar-resizer", $setup.sidebar_resizing ? "resizing" : ""]),
        onMousedown: $setup.start_resize
      }, null, 34),
      (0, vue_runtime_esm_bundler_exports.createElementVNode)("div", {
        style: (0, vue_runtime_esm_bundler_exports.normalizeStyle)({ width: `${$setup.sidebar_width}px` })
      }, [
        (0, vue_runtime_esm_bundler_exports.createVNode)($setup["Properties"])
      ], 4)
    ], 64);
  }

  // frappe/public/js/workflow_builder/components/Sidebar.vue
  Sidebar_default.render = render6;
  Sidebar_default.__file = "frappe/public/js/workflow_builder/components/Sidebar.vue";
  Sidebar_default.__scopeId = "data-v-e852f9f4";
  var Sidebar_default2 = Sidebar_default;

  // sfc-script:/home/amreen/erp/frappe-bench/apps/frappe/frappe/public/js/workflow_builder/WorkflowBuilder.vue?type=script
  var WorkflowBuilder_default = {
    __name: "WorkflowBuilder",
    setup(__props, { expose: __expose }) {
      __expose();
      let store = useStore();
      const {
        nodes,
        getEdges,
        getSelectedNodes,
        findNode,
        onNodeDragStop,
        onConnect,
        onEdgeUpdate,
        onEdgeUpdateEnd,
        addNodes,
        addEdges,
        setEdges,
        updateEdge,
        removeNodes,
        endConnection,
        onPaneReady,
        fitView,
        zoomIn,
        zoomOut,
        project,
        vueFlowRef
      } = useVueFlow();
      let main = (0, vue_runtime_esm_bundler_exports.ref)(null);
      onClickOutside(main, loose_focus);
      const { meta_s, ctrl_s, Backspace, meta_backspace, ctrl_backspace } = useMagicKeys();
      whenever(
        () => meta_s.value || ctrl_s.value,
        () => {
          store.save_changes();
        }
      );
      const activeElement = useActiveElement();
      const notUsingInput = (0, vue_runtime_esm_bundler_exports.computed)(
        () => {
          var _a2, _b;
          return ((_a2 = activeElement.value) == null ? void 0 : _a2.tagName) !== "INPUT" && ((_b = activeElement.value) == null ? void 0 : _b.tagName) !== "TEXTAREA";
        }
      );
      whenever(
        () => Backspace.value || meta_backspace.value || ctrl_backspace.value,
        () => {
          var _a2;
          if (meta_backspace.value || ctrl_backspace.value)
            return;
          if (store.workflow.selected) {
            if (notUsingInput.value && (store.workflow.selected.type === "state" || store.workflow.selected.type === "action")) {
              removeNodes([store.workflow.selected.id]);
              if ((_a2 = store.workflow.selected.data) == null ? void 0 : _a2.state) {
                let connected_nodes = [];
                connected_nodes = nodes.value.filter(
                  (node) => node.data.from_id == store.workflow.selected.id || node.data.to_id == store.workflow.selected.id
                ).map((node) => node.id);
                removeNodes(connected_nodes);
              }
              store.workflow.selected = null;
              (0, vue_runtime_esm_bundler_exports.nextTick)(() => store.ref_history.commit());
            }
          }
        }
      );
      onNodeDragStop(() => {
        (0, vue_runtime_esm_bundler_exports.nextTick)(() => store.ref_history.commit());
      });
      onConnect((edge) => {
        let source_node = findNode(edge.source);
        let target_node = findNode(edge.target);
        let error = validate_transitions(source_node.data, target_node.data);
        if (error) {
          endConnection();
          (0, vue_runtime_esm_bundler_exports.nextTick)(
            () => frappe.throw({
              title: "Invalid Transition",
              message: error
            })
          );
          return;
        }
        let source_center = {
          x: source_node.position.x + source_node.dimensions.width / 2,
          y: source_node.position.y + source_node.dimensions.height / 2
        };
        let target_center = {
          x: target_node.position.x + target_node.dimensions.width / 2,
          y: target_node.position.y + target_node.dimensions.height / 2
        };
        let center_x = (source_center.x + target_center.x) / 2;
        let center_y = source_center.y;
        let action_ids = nodes.value.filter((node) => node.type == "action").map((node) => parseInt(node.id.replace("action-", "")));
        let action_id = action_ids.length ? (Math.max(...action_ids) + 1).toString() : "1";
        const action_node = {
          id: "action-" + action_id,
          type: "action",
          position: { x: center_x, y: center_y },
          selected: true,
          data: {
            action: "",
            allowed: "All",
            allow_self_approval: 1,
            from: source_node.data.state,
            to: target_node.data.state,
            from_id: source_node.id,
            to_id: target_node.id
          }
        };
        addNodes([action_node]);
        let action_edge = {
          source: edge.source,
          sourceHandle: edge.sourceHandle,
          target: action_node.id,
          targetHandle: "left",
          type: "transition",
          updatable: true,
          animated: true
        };
        let state_edge = {
          source: action_node.id,
          sourceHandle: "right",
          target: edge.target,
          targetHandle: edge.targetHandle,
          type: "transition",
          updatable: true,
          animated: true
        };
        addEdges([action_edge, state_edge]);
        (0, vue_runtime_esm_bundler_exports.nextTick)(() => {
          const node = findNode(action_node.id);
          const stop = (0, vue_runtime_esm_bundler_exports.watch)(
            () => node.dimensions,
            (dimensions) => {
              if (dimensions.width > 0 && dimensions.height > 0) {
                node.position = {
                  x: node.position.x - node.dimensions.width / 2,
                  y: node.position.y - node.dimensions.height / 2
                };
                stop();
                node.selected = true;
                store.workflow.selected = node;
                store.ref_history.commit();
              }
            },
            { deep: true, flush: "post" }
          );
        });
      });
      onEdgeUpdateEnd(({ edge }) => {
        var _a2;
        (_a2 = getSelectedNodes.value) == null ? void 0 : _a2.forEach((node) => node.selected = false);
        if (edge.source.startsWith("action-")) {
          setTimeout(() => findNode(edge.source).selected = true);
        } else if (edge.target.startsWith("action-")) {
          setTimeout(() => findNode(edge.target).selected = true);
        }
      });
      onEdgeUpdate(({ edge, connection }) => {
        if (connection.source == edge.source && connection.target != edge.target || connection.source != edge.source && connection.target == edge.target || connection.source === connection.target)
          return;
        updateEdge(edge, connection);
        setEdges(getEdges.value);
        (0, vue_runtime_esm_bundler_exports.nextTick)(() => store.ref_history.commit());
      });
      function onDragOver(event) {
        event.preventDefault();
        if (event.dataTransfer) {
          event.dataTransfer.dropEffect = "move";
        }
      }
      function onDrop(event) {
        var _a2;
        const { left, top } = vueFlowRef.value.getBoundingClientRect();
        (_a2 = getSelectedNodes.value) == null ? void 0 : _a2.forEach((node) => node.selected = false);
        const position = project({
          x: event.clientX - left,
          y: event.clientY - top
        });
        let state_ids = nodes.value.filter((node) => node.type == "state").map((node) => node.id);
        let state_id = state_ids.length ? (Math.max(...state_ids) + 1).toString() : "1";
        const new_state = {
          id: state_id,
          type: "state",
          position,
          selected: true,
          data: {
            state: "",
            doc_status: "Draft",
            allow_edit: "All"
          }
        };
        addNodes([new_state]);
        (0, vue_runtime_esm_bundler_exports.nextTick)(() => {
          const node = findNode(new_state.id);
          const stop = (0, vue_runtime_esm_bundler_exports.watch)(
            () => node.dimensions,
            (dimensions) => {
              if (dimensions.width > 0 && dimensions.height > 0) {
                node.position = {
                  x: node.position.x - node.dimensions.width / 2,
                  y: node.position.y - node.dimensions.height / 2
                };
                stop();
                store.workflow.selected = node;
                store.ref_history.commit();
              }
            },
            { deep: true, flush: "post" }
          );
        });
      }
      function onDragStart(event) {
        if (event.dataTransfer) {
          event.dataTransfer.effectAllowed = "move";
        }
        loose_focus();
      }
      function loose_focus() {
        var _a2;
        if (store.workflow.selected) {
          (_a2 = getSelectedNodes.value) == null ? void 0 : _a2.forEach((node) => node.selected = false);
          store.workflow.selected = null;
          store.ref_history.commit();
        }
      }
      onPaneReady(() => fitView());
      (0, vue_runtime_esm_bundler_exports.onMounted)(() => store.fetch());
      const __returned__ = { get store() {
        return store;
      }, set store(v) {
        store = v;
      }, nodes, getEdges, getSelectedNodes, findNode, onNodeDragStop, onConnect, onEdgeUpdate, onEdgeUpdateEnd, addNodes, addEdges, setEdges, updateEdge, removeNodes, endConnection, onPaneReady, fitView, zoomIn, zoomOut, project, vueFlowRef, get main() {
        return main;
      }, set main(v) {
        main = v;
      }, meta_s, ctrl_s, Backspace, meta_backspace, ctrl_backspace, activeElement, notUsingInput, onDragOver, onDrop, onDragStart, loose_focus, get VueFlow() {
        return _sfc_main$1;
      }, get useVueFlow() {
        return useVueFlow;
      }, get Panel() {
        return _sfc_main;
      }, get PanelPosition() {
        return PanelPosition;
      }, get Background() {
        return A;
      }, TransitionEdge: TransitionEdge_default2, StateNode: StateNode_default2, ActionNode: ActionNode_default2, ConnectionLine: ConnectionLine_default2, Sidebar: Sidebar_default2, get useStore() {
        return useStore;
      }, get validate_transitions() {
        return validate_transitions;
      }, ref: vue_runtime_esm_bundler_exports.ref, computed: vue_runtime_esm_bundler_exports.computed, nextTick: vue_runtime_esm_bundler_exports.nextTick, onMounted: vue_runtime_esm_bundler_exports.onMounted, watch: vue_runtime_esm_bundler_exports.watch, get onClickOutside() {
        return onClickOutside;
      }, get useMagicKeys() {
        return useMagicKeys;
      }, get whenever() {
        return whenever;
      }, get useActiveElement() {
        return useActiveElement;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };

  // sfc-template:/home/amreen/erp/frappe-bench/apps/frappe/frappe/public/js/workflow_builder/WorkflowBuilder.vue?type=template
  var _hoisted_16 = {
    class: "main",
    ref: "main"
  };
  var _hoisted_25 = ["onClick"];
  var _hoisted_33 = { class: "empty-state" };
  function render7(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", _hoisted_16, [
      (0, vue_runtime_esm_bundler_exports.createElementVNode)("div", {
        class: "sidebar-container",
        onClick: _cache[0] || (_cache[0] = (0, vue_runtime_esm_bundler_exports.withModifiers)(() => {
        }, ["stop"]))
      }, [
        (0, vue_runtime_esm_bundler_exports.createVNode)($setup["Sidebar"])
      ]),
      (0, vue_runtime_esm_bundler_exports.createElementVNode)("div", {
        class: "workflow-container",
        onDrop: $setup.onDrop,
        onClick: (0, vue_runtime_esm_bundler_exports.withModifiers)($setup.loose_focus, ["stop"])
      }, [
        (0, vue_runtime_esm_bundler_exports.createVNode)($setup["VueFlow"], {
          modelValue: $setup.store.workflow.elements,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.store.workflow.elements = $event),
          "connection-mode": "loose",
          onDragover: $setup.onDragOver,
          "delete-key-code": null
        }, {
          "node-state": (0, vue_runtime_esm_bundler_exports.withCtx)((node) => [
            (0, vue_runtime_esm_bundler_exports.createVNode)($setup["StateNode"], { node }, null, 8, ["node"])
          ]),
          "node-action": (0, vue_runtime_esm_bundler_exports.withCtx)((node) => [
            (0, vue_runtime_esm_bundler_exports.createVNode)($setup["ActionNode"], { node }, null, 8, ["node"])
          ]),
          "edge-transition": (0, vue_runtime_esm_bundler_exports.withCtx)((props) => [
            (0, vue_runtime_esm_bundler_exports.createVNode)($setup["TransitionEdge"], (0, vue_runtime_esm_bundler_exports.normalizeProps)((0, vue_runtime_esm_bundler_exports.guardReactiveProps)(props)), null, 16)
          ]),
          "connection-line": (0, vue_runtime_esm_bundler_exports.withCtx)((props) => [
            (0, vue_runtime_esm_bundler_exports.createVNode)($setup["ConnectionLine"], (0, vue_runtime_esm_bundler_exports.normalizeProps)((0, vue_runtime_esm_bundler_exports.guardReactiveProps)(props)), null, 16)
          ]),
          default: (0, vue_runtime_esm_bundler_exports.withCtx)(() => [
            (0, vue_runtime_esm_bundler_exports.createVNode)($setup["Background"], {
              "pattern-color": "#aaa",
              gap: "10"
            }),
            (0, vue_runtime_esm_bundler_exports.createVNode)($setup["Panel"], {
              position: $setup.PanelPosition.TopRight
            }, {
              default: (0, vue_runtime_esm_bundler_exports.withCtx)(() => [
                (0, vue_runtime_esm_bundler_exports.createElementVNode)("div", _hoisted_33, [
                  (0, vue_runtime_esm_bundler_exports.createElementVNode)("div", {
                    class: "btn btn-md drag-handle",
                    draggable: true,
                    onDragstart: $setup.onDragStart
                  }, " Drag to add state ", 32)
                ])
              ]),
              _: 1
            }, 8, ["position"]),
            (0, vue_runtime_esm_bundler_exports.createVNode)($setup["Panel"], {
              position: $setup.PanelPosition.BottomLeft
            }, {
              default: (0, vue_runtime_esm_bundler_exports.withCtx)(() => [
                (0, vue_runtime_esm_bundler_exports.createElementVNode)("button", {
                  class: "btn btn-sm btn-default mr-2",
                  onClick: _cache[1] || (_cache[1] = (...args) => $setup.zoomIn && $setup.zoomIn(...args))
                }, "+"),
                (0, vue_runtime_esm_bundler_exports.createElementVNode)("button", {
                  class: "btn btn-sm btn-default mr-2",
                  onClick: _cache[2] || (_cache[2] = (...args) => $setup.zoomOut && $setup.zoomOut(...args))
                }, "-"),
                (0, vue_runtime_esm_bundler_exports.createElementVNode)("button", {
                  class: "btn btn-sm btn-default",
                  onClick: _cache[3] || (_cache[3] = ($event) => $setup.fitView())
                }, "Fit")
              ]),
              _: 1
            }, 8, ["position"])
          ]),
          _: 1
        }, 8, ["modelValue"])
      ], 40, _hoisted_25)
    ], 512);
  }

  // frappe/public/js/workflow_builder/WorkflowBuilder.vue
  WorkflowBuilder_default.render = render7;
  WorkflowBuilder_default.__file = "frappe/public/js/workflow_builder/WorkflowBuilder.vue";
  WorkflowBuilder_default.__scopeId = "data-v-c4748aba";
  var WorkflowBuilder_default2 = WorkflowBuilder_default;

  // sfc-script:/home/amreen/erp/frappe-bench/apps/frappe/frappe/public/js/form_builder/components/controls/AttachControl.vue?type=script
  var AttachControl_default = {
    __name: "AttachControl",
    props: ["df"],
    setup(__props, { expose: __expose }) {
      __expose();
      const props = __props;
      const __returned__ = { props };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };

  // sfc-template:/home/amreen/erp/frappe-bench/apps/frappe/frappe/public/js/form_builder/components/controls/AttachControl.vue?type=template
  var _hoisted_17 = { class: "control editable" };
  var _hoisted_26 = { class: "field-controls" };
  var _hoisted_34 = { class: "btn btn-sm btn-default" };
  var _hoisted_42 = ["innerHTML"];
  function render8(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", _hoisted_17, [
      (0, vue_runtime_esm_bundler_exports.createCommentVNode)(" label "),
      (0, vue_runtime_esm_bundler_exports.createElementVNode)("div", _hoisted_26, [
        (0, vue_runtime_esm_bundler_exports.renderSlot)(_ctx.$slots, "label"),
        (0, vue_runtime_esm_bundler_exports.renderSlot)(_ctx.$slots, "actions")
      ]),
      (0, vue_runtime_esm_bundler_exports.createCommentVNode)(" attach button "),
      (0, vue_runtime_esm_bundler_exports.createElementVNode)("button", _hoisted_34, (0, vue_runtime_esm_bundler_exports.toDisplayString)(_ctx.__("Attach")), 1),
      (0, vue_runtime_esm_bundler_exports.createCommentVNode)(" description "),
      $props.df.description ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", {
        key: 0,
        class: "mt-2 description",
        innerHTML: $props.df.description
      }, null, 8, _hoisted_42)) : (0, vue_runtime_esm_bundler_exports.createCommentVNode)("v-if", true)
    ]);
  }

  // frappe/public/js/form_builder/components/controls/AttachControl.vue
  AttachControl_default.render = render8;
  AttachControl_default.__file = "frappe/public/js/form_builder/components/controls/AttachControl.vue";
  var AttachControl_default2 = AttachControl_default;

  // sfc-script:/home/amreen/erp/frappe-bench/apps/frappe/frappe/public/js/form_builder/components/controls/ButtonControl.vue?type=script
  var ButtonControl_default = {
    __name: "ButtonControl",
    props: ["df", "value"],
    setup(__props, { expose: __expose }) {
      __expose();
      const props = __props;
      const __returned__ = { props };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };

  // sfc-template:/home/amreen/erp/frappe-bench/apps/frappe/frappe/public/js/form_builder/components/controls/ButtonControl.vue?type=template
  var _hoisted_18 = ["data-fieldtype"];
  var _hoisted_27 = { class: "field-controls" };
  var _hoisted_35 = { key: 0 };
  var _hoisted_43 = {
    key: 1,
    class: "btn btn-xs btn-default"
  };
  var _hoisted_5 = ["innerHTML"];
  function render9(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", {
      class: "control frappe-control editable",
      "data-fieldtype": $props.df.fieldtype
    }, [
      (0, vue_runtime_esm_bundler_exports.createCommentVNode)(" label "),
      (0, vue_runtime_esm_bundler_exports.createElementVNode)("div", _hoisted_27, [
        $props.df.fieldtype == "Heading" ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("h4", _hoisted_35, [
          (0, vue_runtime_esm_bundler_exports.renderSlot)(_ctx.$slots, "label", {}, void 0, true)
        ])) : ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("button", _hoisted_43, [
          (0, vue_runtime_esm_bundler_exports.renderSlot)(_ctx.$slots, "label", {}, void 0, true)
        ])),
        (0, vue_runtime_esm_bundler_exports.renderSlot)(_ctx.$slots, "actions", {}, void 0, true)
      ]),
      (0, vue_runtime_esm_bundler_exports.createCommentVNode)(" description "),
      $props.df.description ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", {
        key: 0,
        class: "mt-2 description",
        innerHTML: $props.df.description
      }, null, 8, _hoisted_5)) : (0, vue_runtime_esm_bundler_exports.createCommentVNode)("v-if", true)
    ], 8, _hoisted_18);
  }

  // frappe/public/js/form_builder/components/controls/ButtonControl.vue
  ButtonControl_default.render = render9;
  ButtonControl_default.__file = "frappe/public/js/form_builder/components/controls/ButtonControl.vue";
  ButtonControl_default.__scopeId = "data-v-ab7ce511";
  var ButtonControl_default2 = ButtonControl_default;

  // sfc-script:/home/amreen/erp/frappe-bench/apps/frappe/frappe/public/js/form_builder/components/controls/CheckControl.vue?type=script
  var CheckControl_default = {
    __name: "CheckControl",
    props: ["df", "value", "read_only"],
    setup(__props, { expose: __expose }) {
      __expose();
      const props = __props;
      let slots = (0, vue_runtime_esm_bundler_exports.useSlots)();
      const __returned__ = { props, get slots() {
        return slots;
      }, set slots(v) {
        slots = v;
      }, useSlots: vue_runtime_esm_bundler_exports.useSlots };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };

  // sfc-template:/home/amreen/erp/frappe-bench/apps/frappe/frappe/public/js/form_builder/components/controls/CheckControl.vue?type=template
  var _withScopeId = (n) => ((0, vue_runtime_esm_bundler_exports.pushScopeId)("data-v-5fb03290"), n = n(), (0, vue_runtime_esm_bundler_exports.popScopeId)(), n);
  var _hoisted_19 = {
    key: 0,
    class: "field-controls"
  };
  var _hoisted_28 = { class: "checkbox" };
  var _hoisted_36 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ (0, vue_runtime_esm_bundler_exports.createElementVNode)("input", {
    type: "checkbox",
    disabled: ""
  }, null, -1));
  var _hoisted_44 = { key: 1 };
  var _hoisted_52 = ["checked", "disabled"];
  var _hoisted_6 = ["innerHTML"];
  function render10(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", {
      class: (0, vue_runtime_esm_bundler_exports.normalizeClass)(["control frappe-control checkbox", { editable: $setup.slots.label }])
    }, [
      (0, vue_runtime_esm_bundler_exports.createCommentVNode)(" checkbox "),
      $setup.slots.label ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("label", _hoisted_19, [
        (0, vue_runtime_esm_bundler_exports.createElementVNode)("div", _hoisted_28, [
          _hoisted_36,
          (0, vue_runtime_esm_bundler_exports.renderSlot)(_ctx.$slots, "label", {}, void 0, true)
        ]),
        (0, vue_runtime_esm_bundler_exports.renderSlot)(_ctx.$slots, "actions", {}, void 0, true)
      ])) : ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("label", _hoisted_44, [
        (0, vue_runtime_esm_bundler_exports.createElementVNode)("input", {
          type: "checkbox",
          checked: $props.value,
          disabled: $props.read_only,
          onChange: _cache[0] || (_cache[0] = (event) => _ctx.$emit("update:modelValue", event.target.checked))
        }, null, 40, _hoisted_52),
        (0, vue_runtime_esm_bundler_exports.createElementVNode)("span", {
          class: (0, vue_runtime_esm_bundler_exports.normalizeClass)(["label-area", { reqd: $props.df.reqd }])
        }, (0, vue_runtime_esm_bundler_exports.toDisplayString)($props.df.label), 3)
      ])),
      (0, vue_runtime_esm_bundler_exports.createCommentVNode)(" description "),
      $props.df.description ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", {
        key: 2,
        class: "mt-2 description",
        innerHTML: $props.df.description
      }, null, 8, _hoisted_6)) : (0, vue_runtime_esm_bundler_exports.createCommentVNode)("v-if", true)
    ], 2);
  }

  // frappe/public/js/form_builder/components/controls/CheckControl.vue
  CheckControl_default.render = render10;
  CheckControl_default.__file = "frappe/public/js/form_builder/components/controls/CheckControl.vue";
  CheckControl_default.__scopeId = "data-v-5fb03290";
  var CheckControl_default2 = CheckControl_default;

  // sfc-script:/home/amreen/erp/frappe-bench/apps/frappe/frappe/public/js/form_builder/components/controls/CodeControl.vue?type=script
  var CodeControl_default = {
    __name: "CodeControl",
    props: ["df", "read_only", "modelValue"],
    emits: ["update:modelValue"],
    setup(__props, { expose: __expose, emit: __emit }) {
      __expose();
      const props = __props;
      let emit = __emit;
      let slots = (0, vue_runtime_esm_bundler_exports.useSlots)();
      let code = (0, vue_runtime_esm_bundler_exports.ref)(null);
      let code_control = (0, vue_runtime_esm_bundler_exports.ref)(null);
      let update_control = (0, vue_runtime_esm_bundler_exports.ref)(true);
      let content = (0, vue_runtime_esm_bundler_exports.computed)({
        get: () => props.modelValue,
        set: (value) => emit("update:modelValue", value)
      });
      (0, vue_runtime_esm_bundler_exports.onMounted)(() => {
        if (code.value) {
          code_control.value = frappe.ui.form.make_control({
            parent: code.value,
            df: __spreadProps(__spreadValues({}, props.df), {
              fieldtype: "Code",
              hidden: 0,
              read_only: props.read_only,
              change: () => {
                if (update_control.value) {
                  content.value = code_control.value.get_value();
                }
                update_control.value = true;
              }
            }),
            value: content.value,
            disabled: Boolean(slots.label) || props.read_only,
            render_input: true,
            only_input: Boolean(slots.label)
          });
        }
      });
      (0, vue_runtime_esm_bundler_exports.watch)(
        () => content.value,
        (value) => {
          var _a2;
          update_control.value = false;
          (_a2 = code_control.value) == null ? void 0 : _a2.set_value(value);
        }
      );
      (0, vue_runtime_esm_bundler_exports.watch)(
        () => props.df.max_height,
        (value) => {
          if (code_control.value) {
            code_control.value.ace_editor_target.css("max-height", value);
          }
        }
      );
      const __returned__ = { props, get emit() {
        return emit;
      }, set emit(v) {
        emit = v;
      }, get slots() {
        return slots;
      }, set slots(v) {
        slots = v;
      }, get code() {
        return code;
      }, set code(v) {
        code = v;
      }, get code_control() {
        return code_control;
      }, set code_control(v) {
        code_control = v;
      }, get update_control() {
        return update_control;
      }, set update_control(v) {
        update_control = v;
      }, get content() {
        return content;
      }, set content(v) {
        content = v;
      }, computed: vue_runtime_esm_bundler_exports.computed, onMounted: vue_runtime_esm_bundler_exports.onMounted, ref: vue_runtime_esm_bundler_exports.ref, useSlots: vue_runtime_esm_bundler_exports.useSlots, watch: vue_runtime_esm_bundler_exports.watch };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };

  // sfc-template:/home/amreen/erp/frappe-bench/apps/frappe/frappe/public/js/form_builder/components/controls/CodeControl.vue?type=template
  var _hoisted_110 = { class: "field-controls" };
  var _hoisted_29 = { ref: "code" };
  var _hoisted_37 = ["innerHTML"];
  var _hoisted_45 = {
    key: 1,
    class: "control",
    ref: "code"
  };
  function render11(_ctx, _cache, $props, $setup, $data, $options) {
    return $setup.slots.label ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", {
      key: 0,
      class: (0, vue_runtime_esm_bundler_exports.normalizeClass)(["control", { editable: $setup.slots.label }])
    }, [
      (0, vue_runtime_esm_bundler_exports.createElementVNode)("div", _hoisted_110, [
        (0, vue_runtime_esm_bundler_exports.renderSlot)(_ctx.$slots, "label"),
        (0, vue_runtime_esm_bundler_exports.renderSlot)(_ctx.$slots, "actions")
      ]),
      (0, vue_runtime_esm_bundler_exports.createElementVNode)("div", _hoisted_29, null, 512),
      $props.df.description ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", {
        key: 0,
        class: "mt-2 description",
        innerHTML: $props.df.description
      }, null, 8, _hoisted_37)) : (0, vue_runtime_esm_bundler_exports.createCommentVNode)("v-if", true)
    ], 2)) : ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", _hoisted_45, null, 512));
  }

  // frappe/public/js/form_builder/components/controls/CodeControl.vue
  CodeControl_default.render = render11;
  CodeControl_default.__file = "frappe/public/js/form_builder/components/controls/CodeControl.vue";
  var CodeControl_default2 = CodeControl_default;

  // sfc-script:/home/amreen/erp/frappe-bench/apps/frappe/frappe/public/js/form_builder/components/controls/DataControl.vue?type=script
  var DataControl_default = {
    __name: "DataControl",
    props: ["df", "value", "read_only"],
    setup(__props, { expose: __expose }) {
      __expose();
      const props = __props;
      let slots = (0, vue_runtime_esm_bundler_exports.useSlots)();
      let time_zone = (0, vue_runtime_esm_bundler_exports.ref)("");
      let placeholder = (0, vue_runtime_esm_bundler_exports.ref)("");
      if (props.df.fieldtype === "Datetime") {
        let time_zone_text = frappe.boot.time_zone ? frappe.boot.time_zone.user : frappe.sys_defaults.time_zone;
        time_zone.value = time_zone_text;
      }
      if (props.df.fieldtype === "Color") {
        placeholder.value = __("Choose a color");
      }
      if (props.df.fieldtype === "Icon") {
        placeholder.value = __("Choose an icon");
      }
      const __returned__ = { props, get slots() {
        return slots;
      }, set slots(v) {
        slots = v;
      }, get time_zone() {
        return time_zone;
      }, set time_zone(v) {
        time_zone = v;
      }, get placeholder() {
        return placeholder;
      }, set placeholder(v) {
        placeholder = v;
      }, ref: vue_runtime_esm_bundler_exports.ref, useSlots: vue_runtime_esm_bundler_exports.useSlots };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };

  // sfc-template:/home/amreen/erp/frappe-bench/apps/frappe/frappe/public/js/form_builder/components/controls/DataControl.vue?type=template
  var _withScopeId2 = (n) => ((0, vue_runtime_esm_bundler_exports.pushScopeId)("data-v-de81cdc3"), n = n(), (0, vue_runtime_esm_bundler_exports.popScopeId)(), n);
  var _hoisted_111 = {
    key: 0,
    class: "field-controls"
  };
  var _hoisted_210 = ["placeholder"];
  var _hoisted_38 = ["value", "disabled"];
  var _hoisted_46 = {
    key: 4,
    class: "mt-2 form-control",
    type: "text",
    style: { height: "110px" },
    readonly: ""
  };
  var _hoisted_53 = ["innerHTML"];
  var _hoisted_62 = ["innerHTML"];
  var _hoisted_7 = /* @__PURE__ */ _withScopeId2(() => /* @__PURE__ */ (0, vue_runtime_esm_bundler_exports.createElementVNode)("div", { class: "selected-color no-value" }, null, -1));
  var _hoisted_8 = ["innerHTML"];
  var _hoisted_9 = ["innerHTML"];
  function render12(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", {
      class: (0, vue_runtime_esm_bundler_exports.normalizeClass)(["control frappe-control", { editable: $setup.slots.label }])
    }, [
      (0, vue_runtime_esm_bundler_exports.createCommentVNode)(" label "),
      $setup.slots.label ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", _hoisted_111, [
        (0, vue_runtime_esm_bundler_exports.renderSlot)(_ctx.$slots, "label", {}, void 0, true),
        (0, vue_runtime_esm_bundler_exports.renderSlot)(_ctx.$slots, "actions", {}, void 0, true)
      ])) : ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", {
        key: 1,
        class: (0, vue_runtime_esm_bundler_exports.normalizeClass)(["control-label label", { reqd: $props.df.reqd }])
      }, (0, vue_runtime_esm_bundler_exports.toDisplayString)($props.df.label), 3)),
      (0, vue_runtime_esm_bundler_exports.createCommentVNode)(" data input "),
      $setup.slots.label ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("input", {
        key: 2,
        class: "form-control",
        type: "text",
        style: (0, vue_runtime_esm_bundler_exports.normalizeStyle)({ height: $props.df.fieldtype == "Table MultiSelect" ? "42px" : "" }),
        placeholder: $setup.placeholder,
        readonly: ""
      }, null, 12, _hoisted_210)) : ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("input", {
        key: 3,
        class: "form-control",
        type: "text",
        value: $props.value,
        disabled: $props.read_only || $props.df.read_only,
        onInput: _cache[0] || (_cache[0] = (event) => _ctx.$emit("update:modelValue", event.target.value))
      }, null, 40, _hoisted_38)),
      $setup.slots.label && $props.df.fieldtype === "Barcode" ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("input", _hoisted_46)) : (0, vue_runtime_esm_bundler_exports.createCommentVNode)("v-if", true),
      (0, vue_runtime_esm_bundler_exports.createCommentVNode)(" description "),
      $props.df.description ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", {
        key: 5,
        class: "mt-2 description",
        innerHTML: $props.df.description
      }, null, 8, _hoisted_53)) : (0, vue_runtime_esm_bundler_exports.createCommentVNode)("v-if", true),
      (0, vue_runtime_esm_bundler_exports.createCommentVNode)(" timezone for datetime field "),
      $setup.time_zone ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", {
        key: 6,
        class: (0, vue_runtime_esm_bundler_exports.normalizeClass)(["time-zone", !$props.df.description ? "mt-2" : ""]),
        innerHTML: $setup.time_zone
      }, null, 10, _hoisted_62)) : (0, vue_runtime_esm_bundler_exports.createCommentVNode)("v-if", true),
      (0, vue_runtime_esm_bundler_exports.createCommentVNode)(" color selector icon "),
      _hoisted_7,
      (0, vue_runtime_esm_bundler_exports.createCommentVNode)(" icon selector icon "),
      $props.df.fieldtype == "Icon" ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", {
        key: 7,
        class: "selected-icon no-value",
        innerHTML: _ctx.frappe.utils.icon("folder-normal", "md")
      }, null, 8, _hoisted_8)) : (0, vue_runtime_esm_bundler_exports.createCommentVNode)("v-if", true),
      (0, vue_runtime_esm_bundler_exports.createCommentVNode)(" phone selector icon "),
      $props.df.fieldtype == "Phone" ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", {
        key: 8,
        class: "selected-phone no-value",
        innerHTML: _ctx.frappe.utils.icon("down", "sm")
      }, null, 8, _hoisted_9)) : (0, vue_runtime_esm_bundler_exports.createCommentVNode)("v-if", true)
    ], 2);
  }

  // frappe/public/js/form_builder/components/controls/DataControl.vue
  DataControl_default.render = render12;
  DataControl_default.__file = "frappe/public/js/form_builder/components/controls/DataControl.vue";
  DataControl_default.__scopeId = "data-v-de81cdc3";
  var DataControl_default2 = DataControl_default;

  // sfc-script:/home/amreen/erp/frappe-bench/apps/frappe/frappe/public/js/form_builder/components/controls/GeolocationControl.vue?type=script
  var GeolocationControl_default = {
    __name: "GeolocationControl",
    props: ["df"],
    setup(__props, { expose: __expose }) {
      __expose();
      const props = __props;
      let map = (0, vue_runtime_esm_bundler_exports.ref)(null);
      let map_control = (0, vue_runtime_esm_bundler_exports.computed)(() => {
        if (!map.value)
          return;
        map.value.innerHTML = "";
        return frappe.ui.form.make_control({
          parent: map.value,
          df: __spreadProps(__spreadValues({}, props.df), { hidden: 0 }),
          frm: true,
          disabled: true,
          render_input: true
        });
      });
      (0, vue_runtime_esm_bundler_exports.onMounted)(() => {
        if (map.value)
          map_control.value;
      });
      const __returned__ = { props, get map() {
        return map;
      }, set map(v) {
        map = v;
      }, get map_control() {
        return map_control;
      }, set map_control(v) {
        map_control = v;
      }, computed: vue_runtime_esm_bundler_exports.computed, onMounted: vue_runtime_esm_bundler_exports.onMounted, ref: vue_runtime_esm_bundler_exports.ref };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };

  // sfc-template:/home/amreen/erp/frappe-bench/apps/frappe/frappe/public/js/form_builder/components/controls/GeolocationControl.vue?type=template
  var _hoisted_112 = { class: "control editable" };
  var _hoisted_211 = { class: "field-controls" };
  var _hoisted_39 = { ref: "map" };
  var _hoisted_47 = ["innerHTML"];
  function render13(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", _hoisted_112, [
      (0, vue_runtime_esm_bundler_exports.createElementVNode)("div", _hoisted_211, [
        (0, vue_runtime_esm_bundler_exports.renderSlot)(_ctx.$slots, "label", {}, void 0, true),
        (0, vue_runtime_esm_bundler_exports.renderSlot)(_ctx.$slots, "actions", {}, void 0, true)
      ]),
      (0, vue_runtime_esm_bundler_exports.createElementVNode)("div", _hoisted_39, null, 512),
      $props.df.description ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", {
        key: 0,
        class: "mt-2 description",
        innerHTML: $props.df.description
      }, null, 8, _hoisted_47)) : (0, vue_runtime_esm_bundler_exports.createCommentVNode)("v-if", true)
    ]);
  }

  // frappe/public/js/form_builder/components/controls/GeolocationControl.vue
  GeolocationControl_default.render = render13;
  GeolocationControl_default.__file = "frappe/public/js/form_builder/components/controls/GeolocationControl.vue";
  GeolocationControl_default.__scopeId = "data-v-6724c096";
  var GeolocationControl_default2 = GeolocationControl_default;

  // sfc-script:/home/amreen/erp/frappe-bench/apps/frappe/frappe/public/js/form_builder/components/controls/ImageControl.vue?type=script
  var ImageControl_default = {
    __name: "ImageControl",
    props: ["df"],
    setup(__props, { expose: __expose }) {
      __expose();
      const props = __props;
      const __returned__ = { props };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };

  // sfc-template:/home/amreen/erp/frappe-bench/apps/frappe/frappe/public/js/form_builder/components/controls/ImageControl.vue?type=template
  var _hoisted_113 = { class: "control editable" };
  var _hoisted_212 = { class: "field-controls" };
  var _hoisted_310 = ["innerHTML"];
  var _hoisted_48 = ["innerHTML"];
  function render14(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", _hoisted_113, [
      (0, vue_runtime_esm_bundler_exports.createElementVNode)("div", _hoisted_212, [
        (0, vue_runtime_esm_bundler_exports.renderSlot)(_ctx.$slots, "label"),
        (0, vue_runtime_esm_bundler_exports.renderSlot)(_ctx.$slots, "actions")
      ]),
      (0, vue_runtime_esm_bundler_exports.createElementVNode)("div", {
        class: "missing-image",
        innerHTML: _ctx.frappe.utils.icon("restriction", "md")
      }, null, 8, _hoisted_310),
      $props.df.description ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", {
        key: 0,
        class: "mt-2 description",
        innerHTML: $props.df.description
      }, null, 8, _hoisted_48)) : (0, vue_runtime_esm_bundler_exports.createCommentVNode)("v-if", true)
    ]);
  }

  // frappe/public/js/form_builder/components/controls/ImageControl.vue
  ImageControl_default.render = render14;
  ImageControl_default.__file = "frappe/public/js/form_builder/components/controls/ImageControl.vue";
  var ImageControl_default2 = ImageControl_default;

  // sfc-script:/home/amreen/erp/frappe-bench/apps/frappe/frappe/public/js/form_builder/components/controls/LinkControl.vue?type=script
  var LinkControl_default = {
    __name: "LinkControl",
    props: ["args", "df", "read_only", "modelValue"],
    emits: ["update:modelValue"],
    setup(__props, { expose: __expose, emit: __emit }) {
      __expose();
      const props = __props;
      let emit = __emit;
      let slots = (0, vue_runtime_esm_bundler_exports.useSlots)();
      let link = (0, vue_runtime_esm_bundler_exports.ref)(null);
      let update_control = (0, vue_runtime_esm_bundler_exports.ref)(true);
      let link_control = (0, vue_runtime_esm_bundler_exports.computed)(() => {
        if (!link.value)
          return;
        link.value.innerHTML = "";
        return frappe.ui.form.make_control({
          parent: link.value,
          df: __spreadProps(__spreadValues({}, props.df), {
            hidden: 0,
            read_only: Boolean(slots.label) || props.read_only,
            change: () => {
              if (update_control.value) {
                content.value = link_control.value.get_value();
              }
              update_control.value = true;
            }
          }),
          value: content.value,
          render_input: true,
          only_input: Boolean(slots.label)
        });
      });
      let content = (0, vue_runtime_esm_bundler_exports.computed)({
        get: () => props.modelValue,
        set: (value) => emit("update:modelValue", value)
      });
      (0, vue_runtime_esm_bundler_exports.onMounted)(() => {
        var _a2;
        if (link.value) {
          if ((_a2 = props.args) == null ? void 0 : _a2.is_table_field) {
            if (props.df.filters) {
              props.df.filters.istable = 1;
            } else {
              props.df.filters = { istable: 1 };
            }
          } else {
            if (props.df.filters && "istable" in props.df.filters) {
              delete props.df.filters.istable;
            }
          }
          link_control.value;
        }
      });
      (0, vue_runtime_esm_bundler_exports.watch)(
        () => content.value,
        (value) => {
          var _a2;
          update_control.value = false;
          (_a2 = link_control.value) == null ? void 0 : _a2.set_value(value);
        }
      );
      const __returned__ = { props, get emit() {
        return emit;
      }, set emit(v) {
        emit = v;
      }, get slots() {
        return slots;
      }, set slots(v) {
        slots = v;
      }, get link() {
        return link;
      }, set link(v) {
        link = v;
      }, get update_control() {
        return update_control;
      }, set update_control(v) {
        update_control = v;
      }, get link_control() {
        return link_control;
      }, set link_control(v) {
        link_control = v;
      }, get content() {
        return content;
      }, set content(v) {
        content = v;
      }, onMounted: vue_runtime_esm_bundler_exports.onMounted, ref: vue_runtime_esm_bundler_exports.ref, useSlots: vue_runtime_esm_bundler_exports.useSlots, computed: vue_runtime_esm_bundler_exports.computed, watch: vue_runtime_esm_bundler_exports.watch };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };

  // sfc-template:/home/amreen/erp/frappe-bench/apps/frappe/frappe/public/js/form_builder/components/controls/LinkControl.vue?type=template
  var _hoisted_114 = ["data-fieldtype"];
  var _hoisted_213 = { class: "field-controls" };
  var _hoisted_311 = /* @__PURE__ */ (0, vue_runtime_esm_bundler_exports.createElementVNode)("input", {
    class: "form-control",
    type: "text",
    readonly: ""
  }, null, -1);
  var _hoisted_49 = ["innerHTML"];
  var _hoisted_54 = {
    key: 1,
    ref: "link"
  };
  function render15(_ctx, _cache, $props, $setup, $data, $options) {
    return $setup.slots.label ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", {
      key: 0,
      class: (0, vue_runtime_esm_bundler_exports.normalizeClass)(["control frappe-control", { editable: $setup.slots.label }]),
      "data-fieldtype": $props.df.fieldtype
    }, [
      (0, vue_runtime_esm_bundler_exports.createCommentVNode)(" label "),
      (0, vue_runtime_esm_bundler_exports.createElementVNode)("div", _hoisted_213, [
        (0, vue_runtime_esm_bundler_exports.renderSlot)(_ctx.$slots, "label"),
        (0, vue_runtime_esm_bundler_exports.renderSlot)(_ctx.$slots, "actions")
      ]),
      (0, vue_runtime_esm_bundler_exports.createCommentVNode)(" link input "),
      _hoisted_311,
      (0, vue_runtime_esm_bundler_exports.createCommentVNode)(" description "),
      $props.df.description ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", {
        key: 0,
        class: "mt-2 description",
        innerHTML: $props.df.description
      }, null, 8, _hoisted_49)) : (0, vue_runtime_esm_bundler_exports.createCommentVNode)("v-if", true)
    ], 10, _hoisted_114)) : ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", _hoisted_54, null, 512));
  }

  // frappe/public/js/form_builder/components/controls/LinkControl.vue
  LinkControl_default.render = render15;
  LinkControl_default.__file = "frappe/public/js/form_builder/components/controls/LinkControl.vue";
  var LinkControl_default2 = LinkControl_default;

  // sfc-script:/home/amreen/erp/frappe-bench/apps/frappe/frappe/public/js/form_builder/components/controls/RatingControl.vue?type=script
  var RatingControl_default = {
    __name: "RatingControl",
    props: ["df"],
    setup(__props, { expose: __expose }) {
      __expose();
      const props = __props;
      let rating = (0, vue_runtime_esm_bundler_exports.ref)(null);
      let rating_control = (0, vue_runtime_esm_bundler_exports.computed)(() => {
        if (!rating.value)
          return;
        rating.value.innerHTML = "";
        return frappe.ui.form.make_control({
          parent: rating.value,
          df: __spreadProps(__spreadValues({}, props.df), { hidden: 0 }),
          disabled: true,
          render_input: true,
          only_input: true
        });
      });
      (0, vue_runtime_esm_bundler_exports.onMounted)(() => {
        if (rating.value)
          rating_control.value;
      });
      (0, vue_runtime_esm_bundler_exports.watch)(
        () => props.df.options,
        (value) => {
          var _a2;
          if (rating_control.value) {
            rating_control.value.df.options = value;
            (_a2 = rating_control.value) == null ? void 0 : _a2.make_input();
          }
        }
      );
      const __returned__ = { props, get rating() {
        return rating;
      }, set rating(v) {
        rating = v;
      }, get rating_control() {
        return rating_control;
      }, set rating_control(v) {
        rating_control = v;
      }, computed: vue_runtime_esm_bundler_exports.computed, onMounted: vue_runtime_esm_bundler_exports.onMounted, ref: vue_runtime_esm_bundler_exports.ref, watch: vue_runtime_esm_bundler_exports.watch };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };

  // sfc-template:/home/amreen/erp/frappe-bench/apps/frappe/frappe/public/js/form_builder/components/controls/RatingControl.vue?type=template
  var _hoisted_115 = { class: "control editable" };
  var _hoisted_214 = { class: "field-controls" };
  var _hoisted_312 = { ref: "rating" };
  var _hoisted_410 = ["innerHTML"];
  function render16(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", _hoisted_115, [
      (0, vue_runtime_esm_bundler_exports.createElementVNode)("div", _hoisted_214, [
        (0, vue_runtime_esm_bundler_exports.renderSlot)(_ctx.$slots, "label", {}, void 0, true),
        (0, vue_runtime_esm_bundler_exports.renderSlot)(_ctx.$slots, "actions", {}, void 0, true)
      ]),
      (0, vue_runtime_esm_bundler_exports.createElementVNode)("div", _hoisted_312, null, 512),
      $props.df.description ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", {
        key: 0,
        class: "mt-2 description",
        innerHTML: $props.df.description
      }, null, 8, _hoisted_410)) : (0, vue_runtime_esm_bundler_exports.createCommentVNode)("v-if", true)
    ]);
  }

  // frappe/public/js/form_builder/components/controls/RatingControl.vue
  RatingControl_default.render = render16;
  RatingControl_default.__file = "frappe/public/js/form_builder/components/controls/RatingControl.vue";
  RatingControl_default.__scopeId = "data-v-3a354231";
  var RatingControl_default2 = RatingControl_default;

  // sfc-script:/home/amreen/erp/frappe-bench/apps/frappe/frappe/public/js/form_builder/components/controls/SelectControl.vue?type=script
  var SelectControl_default = {
    __name: "SelectControl",
    props: ["df", "read_only", "modelValue", "no_label"],
    emits: ["update:modelValue"],
    setup(__props, { expose: __expose, emit: __emit }) {
      __expose();
      const props = __props;
      let emit = __emit;
      let slots = (0, vue_runtime_esm_bundler_exports.useSlots)();
      let select2 = (0, vue_runtime_esm_bundler_exports.ref)(null);
      let update_control = (0, vue_runtime_esm_bundler_exports.ref)(true);
      function get_options() {
        let options = props.df.options;
        if (typeof options == "string") {
          options = options.split("\n") || "";
          options = options.map((opt) => {
            return { label: __(opt), value: opt };
          });
        }
        if ((options == null ? void 0 : options.length) && typeof options[0] == "string") {
          options = options.map((opt) => {
            return { label: __(opt), value: opt };
          });
        }
        if (props.df.fieldname == "fieldtype") {
          if (!in_list(frappe.model.layout_fields, props.modelValue)) {
            options = options && options.filter((opt) => !in_list(frappe.model.layout_fields, opt.value));
          } else {
            options = [{ label: __(props.modelValue), value: props.modelValue }];
          }
        }
        if (props.df.sort_options) {
          options.sort((a2, b) => a2.label.localeCompare(b.label));
        }
        return options;
      }
      let select_control = (0, vue_runtime_esm_bundler_exports.computed)(() => {
        if (!select2.value)
          return;
        select2.value.innerHTML = "";
        return frappe.ui.form.make_control({
          parent: select2.value,
          df: __spreadProps(__spreadValues({}, props.df), {
            fieldtype: "Select",
            hidden: 0,
            options: get_options(),
            read_only: Boolean(slots.label) || props.read_only,
            change: () => {
              if (update_control.value) {
                content.value = select_control.value.get_value();
              }
              update_control.value = true;
            }
          }),
          value: content.value,
          render_input: true,
          only_input: Boolean(slots.label) || props.no_label
        });
      });
      let content = (0, vue_runtime_esm_bundler_exports.computed)({
        get: () => props.modelValue,
        set: (value) => emit("update:modelValue", value)
      });
      (0, vue_runtime_esm_bundler_exports.onMounted)(() => {
        if (select2.value)
          select_control.value;
      });
      (0, vue_runtime_esm_bundler_exports.watch)(
        () => content.value,
        (value) => {
          var _a2;
          update_control.value = false;
          (_a2 = select_control.value) == null ? void 0 : _a2.set_value(value);
        }
      );
      (0, vue_runtime_esm_bundler_exports.watch)(
        () => props.df.options,
        () => {
          select_control.value;
        }
      );
      const __returned__ = { props, get emit() {
        return emit;
      }, set emit(v) {
        emit = v;
      }, get slots() {
        return slots;
      }, set slots(v) {
        slots = v;
      }, get select() {
        return select2;
      }, set select(v) {
        select2 = v;
      }, get update_control() {
        return update_control;
      }, set update_control(v) {
        update_control = v;
      }, get_options, get select_control() {
        return select_control;
      }, set select_control(v) {
        select_control = v;
      }, get content() {
        return content;
      }, set content(v) {
        content = v;
      }, useSlots: vue_runtime_esm_bundler_exports.useSlots, onMounted: vue_runtime_esm_bundler_exports.onMounted, ref: vue_runtime_esm_bundler_exports.ref, computed: vue_runtime_esm_bundler_exports.computed, watch: vue_runtime_esm_bundler_exports.watch };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };

  // sfc-template:/home/amreen/erp/frappe-bench/apps/frappe/frappe/public/js/form_builder/components/controls/SelectControl.vue?type=template
  var _withScopeId3 = (n) => ((0, vue_runtime_esm_bundler_exports.pushScopeId)("data-v-0e9440b9"), n = n(), (0, vue_runtime_esm_bundler_exports.popScopeId)(), n);
  var _hoisted_116 = { class: "field-controls" };
  var _hoisted_215 = { class: "select-input" };
  var _hoisted_313 = /* @__PURE__ */ _withScopeId3(() => /* @__PURE__ */ (0, vue_runtime_esm_bundler_exports.createElementVNode)("input", {
    class: "form-control",
    readonly: ""
  }, null, -1));
  var _hoisted_411 = ["innerHTML"];
  var _hoisted_55 = ["innerHTML"];
  var _hoisted_63 = {
    key: 1,
    class: "control",
    ref: "select"
  };
  function render17(_ctx, _cache, $props, $setup, $data, $options) {
    return $setup.slots.label ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", {
      key: 0,
      class: (0, vue_runtime_esm_bundler_exports.normalizeClass)(["control frappe-control", { editable: $setup.slots.label }])
    }, [
      (0, vue_runtime_esm_bundler_exports.createCommentVNode)(" label "),
      (0, vue_runtime_esm_bundler_exports.createElementVNode)("div", _hoisted_116, [
        (0, vue_runtime_esm_bundler_exports.renderSlot)(_ctx.$slots, "label", {}, void 0, true),
        (0, vue_runtime_esm_bundler_exports.renderSlot)(_ctx.$slots, "actions", {}, void 0, true)
      ]),
      (0, vue_runtime_esm_bundler_exports.createCommentVNode)(" select input "),
      (0, vue_runtime_esm_bundler_exports.createElementVNode)("div", _hoisted_215, [
        _hoisted_313,
        (0, vue_runtime_esm_bundler_exports.createElementVNode)("div", {
          class: "select-icon",
          innerHTML: _ctx.frappe.utils.icon("select", "sm")
        }, null, 8, _hoisted_411)
      ]),
      (0, vue_runtime_esm_bundler_exports.createCommentVNode)(" description "),
      $props.df.description ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", {
        key: 0,
        class: "mt-2 description",
        innerHTML: $props.df.description
      }, null, 8, _hoisted_55)) : (0, vue_runtime_esm_bundler_exports.createCommentVNode)("v-if", true)
    ], 2)) : ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", _hoisted_63, null, 512));
  }

  // frappe/public/js/form_builder/components/controls/SelectControl.vue
  SelectControl_default.render = render17;
  SelectControl_default.__file = "frappe/public/js/form_builder/components/controls/SelectControl.vue";
  SelectControl_default.__scopeId = "data-v-0e9440b9";
  var SelectControl_default2 = SelectControl_default;

  // sfc-script:/home/amreen/erp/frappe-bench/apps/frappe/frappe/public/js/form_builder/components/controls/SignatureControl.vue?type=script
  var SignatureControl_default = {
    __name: "SignatureControl",
    props: ["df"],
    setup(__props, { expose: __expose }) {
      __expose();
      const props = __props;
      const __returned__ = { props };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };

  // sfc-template:/home/amreen/erp/frappe-bench/apps/frappe/frappe/public/js/form_builder/components/controls/SignatureControl.vue?type=template
  var _withScopeId4 = (n) => ((0, vue_runtime_esm_bundler_exports.pushScopeId)("data-v-c1582adf"), n = n(), (0, vue_runtime_esm_bundler_exports.popScopeId)(), n);
  var _hoisted_117 = { class: "control editable" };
  var _hoisted_216 = { class: "field-controls" };
  var _hoisted_314 = /* @__PURE__ */ _withScopeId4(() => /* @__PURE__ */ (0, vue_runtime_esm_bundler_exports.createElementVNode)("div", { class: "signature-field" }, null, -1));
  var _hoisted_412 = ["innerHTML"];
  function render18(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", _hoisted_117, [
      (0, vue_runtime_esm_bundler_exports.createElementVNode)("div", _hoisted_216, [
        (0, vue_runtime_esm_bundler_exports.renderSlot)(_ctx.$slots, "label", {}, void 0, true),
        (0, vue_runtime_esm_bundler_exports.renderSlot)(_ctx.$slots, "actions", {}, void 0, true)
      ]),
      _hoisted_314,
      $props.df.description ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", {
        key: 0,
        class: "mt-2 description",
        innerHTML: $props.df.description
      }, null, 8, _hoisted_412)) : (0, vue_runtime_esm_bundler_exports.createCommentVNode)("v-if", true)
    ]);
  }

  // frappe/public/js/form_builder/components/controls/SignatureControl.vue
  SignatureControl_default.render = render18;
  SignatureControl_default.__file = "frappe/public/js/form_builder/components/controls/SignatureControl.vue";
  SignatureControl_default.__scopeId = "data-v-c1582adf";
  var SignatureControl_default2 = SignatureControl_default;

  // frappe/public/js/form_builder/store.js
  var useStore2 = defineStore("form-builder-store", () => {
    let doctype = (0, vue_runtime_esm_bundler_exports.ref)("");
    let frm = (0, vue_runtime_esm_bundler_exports.ref)(null);
    let doc = (0, vue_runtime_esm_bundler_exports.ref)(null);
    let docfields = (0, vue_runtime_esm_bundler_exports.ref)([]);
    let custom_docfields = (0, vue_runtime_esm_bundler_exports.ref)([]);
    let form = (0, vue_runtime_esm_bundler_exports.ref)({
      layout: {},
      active_tab: null,
      selected_field: null
    });
    let dirty = (0, vue_runtime_esm_bundler_exports.ref)(false);
    let read_only = (0, vue_runtime_esm_bundler_exports.ref)(false);
    let is_customize_form = (0, vue_runtime_esm_bundler_exports.ref)(false);
    let preview = (0, vue_runtime_esm_bundler_exports.ref)(false);
    let drag2 = (0, vue_runtime_esm_bundler_exports.ref)(false);
    let get_animation = "cubic-bezier(0.34, 1.56, 0.64, 1)";
    let ref_history = (0, vue_runtime_esm_bundler_exports.ref)(null);
    let get_docfields = (0, vue_runtime_esm_bundler_exports.computed)(() => {
      return is_customize_form.value ? custom_docfields.value : docfields.value;
    });
    let current_tab = (0, vue_runtime_esm_bundler_exports.computed)(() => {
      return form.value.layout.tabs.find((tab) => tab.df.name == form.value.active_tab);
    });
    const active_element = useActiveElement();
    const not_using_input = (0, vue_runtime_esm_bundler_exports.computed)(
      () => {
        var _a2, _b, _c, _d;
        return ((_a2 = active_element.value) == null ? void 0 : _a2.readOnly) || ((_b = active_element.value) == null ? void 0 : _b.disabled) || ((_c = active_element.value) == null ? void 0 : _c.tagName) !== "INPUT" && ((_d = active_element.value) == null ? void 0 : _d.tagName) !== "TEXTAREA";
      }
    );
    function selected(name) {
      var _a2;
      return ((_a2 = form.value.selected_field) == null ? void 0 : _a2.name) == name;
    }
    function get_df(fieldtype, fieldname = "", label = "") {
      let docfield = is_customize_form.value ? "Customize Form Field" : "DocField";
      let df = frappe.model.get_new_doc(docfield);
      df.name = frappe.utils.get_random(8);
      df.fieldtype = fieldtype;
      df.fieldname = fieldname;
      df.label = label;
      is_customize_form.value && (df.is_custom_field = 1);
      return df;
    }
    function has_standard_field(field) {
      if (!is_customize_form.value)
        return;
      if (!field.df.is_custom_field)
        return true;
      let children2 = {
        "Tab Break": "sections",
        "Section Break": "columns",
        "Column Break": "fields"
      }[field.df.fieldtype];
      if (!children2)
        return false;
      return field[children2].some((child) => {
        if (!child.df.is_custom_field)
          return true;
        return has_standard_field(child);
      });
    }
    function is_user_generated_field(field) {
      return cint(field.df.is_custom_field && !field.df.is_system_generated);
    }
    async function fetch() {
      doc.value = frm.value.doc;
      if (doctype.value.startsWith("new-doctype-") && !doc.value.fields) {
        doc.value.fields = [get_df("Data", "", __("Title"))];
      }
      if (!get_docfields.value.length) {
        let docfield = is_customize_form.value ? "Customize Form Field" : "DocField";
        if (!frappe.get_meta(docfield)) {
          await load_doctype_model(docfield);
        }
        let df = frappe.get_meta(docfield).fields;
        if (is_customize_form.value) {
          custom_docfields.value = df;
        } else {
          docfields.value = df;
        }
      }
      form.value.layout = get_layout();
      form.value.active_tab = form.value.layout.tabs[0].df.name;
      form.value.selected_field = null;
      (0, vue_runtime_esm_bundler_exports.nextTick)(() => {
        if (!doctype.value.startsWith("new-doctype-")) {
          dirty.value = false;
          frm.value.doc.__unsaved = 0;
          frm.value.page.clear_indicator();
        }
        read_only.value = !is_customize_form.value && !frappe.boot.developer_mode && !doc.value.custom;
        preview.value = false;
      });
      setup_undo_redo();
    }
    let undo_redo_keyboard_event = onKeyDown(true, (e2) => {
      if (!ref_history.value)
        return;
      if (frm.value.get_active_tab().label == "Form" && (e2.ctrlKey || e2.metaKey)) {
        if (e2.key === "z" && !e2.shiftKey && ref_history.value.canUndo) {
          ref_history.value.undo();
        } else if (e2.key === "z" && e2.shiftKey && ref_history.value.canRedo) {
          ref_history.value.redo();
        }
      }
    });
    function setup_undo_redo() {
      ref_history.value = useDebouncedRefHistory(form, { deep: true, debounce: 100 });
      undo_redo_keyboard_event;
    }
    function validate_fields(fields, is_table) {
      fields = scrub_field_names(fields);
      let error_message = "";
      let has_fields = fields.some((df) => {
        return !["Section Break", "Tab Break", "Column Break"].includes(df.fieldtype);
      });
      if (!has_fields) {
        error_message = __("DocType must have atleast one field");
      }
      let not_allowed_in_list_view = ["Attach Image", ...frappe.model.no_value_type];
      if (is_table) {
        not_allowed_in_list_view = not_allowed_in_list_view.filter((f) => f != "Button");
      }
      function get_field_data(df) {
        let fieldname = `<b>${df.label} (${df.fieldname})</b>`;
        if (!df.label) {
          fieldname = `<b>${df.fieldname}</b>`;
        }
        let fieldtype = `<b>${df.fieldtype}</b>`;
        return [fieldname, fieldtype];
      }
      fields.forEach((df) => {
        let duplicate = fields.filter((f) => f.fieldname == df.fieldname);
        if (duplicate.length > 1) {
          error_message = __("Fieldname {0} appears multiple times", get_field_data(df));
        }
        if (["Link", ...frappe.model.table_fields].includes(df.fieldtype) && !df.options) {
          error_message = __(
            "Options is required for field {0} of type {1}",
            get_field_data(df)
          );
        }
        if (df.hidden && df.reqd && !df.default) {
          error_message = __(
            "{0} cannot be hidden and mandatory without any default value",
            get_field_data(df)
          );
        }
        if (df.in_list_view && not_allowed_in_list_view.includes(df.fieldtype)) {
          error_message = __(
            "'In List View' is not allowed for field {0} of type {1}",
            get_field_data(df)
          );
        }
        if (df.in_global_search && frappe.model.no_value_type.includes(df.fieldtype)) {
          error_message = __(
            "'In Global Search' is not allowed for field {0} of type {1}",
            get_field_data(df)
          );
        }
      });
      return error_message;
    }
    function update_fields() {
      if (!dirty.value && !frm.value.is_new())
        return;
      frappe.dom.freeze(__("Saving..."));
      try {
        let fields = get_updated_fields();
        let has_error = validate_fields(fields, doc.value.istable);
        if (has_error)
          return has_error;
        frm.value.set_value("fields", fields);
        return fields;
      } catch (e2) {
        console.error(e2);
      } finally {
        frappe.dom.unfreeze();
      }
    }
    function get_updated_fields() {
      let fields = [];
      let idx = 0;
      let new_field_name = is_customize_form.value ? "new-customize-form-field-" : "new-docfield-";
      let layout_fields = JSON.parse(JSON.stringify(form.value.layout.tabs));
      layout_fields.forEach((tab, i) => {
        if (i == 0 && is_df_updated(tab.df, get_df("Tab Break", "", __("Details"))) || i > 0) {
          idx++;
          tab.df.idx = idx;
          if (tab.df.__unsaved && tab.df.__islocal) {
            tab.df.name = new_field_name + idx;
          }
          fields.push(tab.df);
        }
        tab.sections.forEach((section, j) => {
          let fields_copy = JSON.parse(JSON.stringify(fields));
          let old_idx = idx;
          section.has_fields = false;
          if (j == 0 && is_df_updated(section.df, get_df("Section Break")) || j > 0) {
            idx++;
            section.df.idx = idx;
            if (section.df.__unsaved && section.df.__islocal) {
              section.df.name = new_field_name + idx;
            }
            fields.push(section.df);
          }
          section.columns.forEach((column, k2) => {
            if (k2 == 0 && is_df_updated(column.df, get_df("Column Break")) || k2 > 0 || column.fields.length == 0) {
              idx++;
              column.df.idx = idx;
              if (column.df.__unsaved && column.df.__islocal) {
                column.df.name = new_field_name + idx;
              }
              fields.push(column.df);
            }
            column.fields.forEach((field) => {
              idx++;
              field.df.idx = idx;
              if (field.df.__unsaved && field.df.__islocal) {
                field.df.name = new_field_name + idx;
              }
              fields.push(field.df);
              section.has_fields = true;
            });
          });
          if (!section.has_fields) {
            fields = fields_copy || [];
            idx = old_idx;
          }
        });
      });
      return fields;
    }
    function is_df_updated(df, new_df) {
      let df_copy = JSON.parse(JSON.stringify(df));
      let new_df_copy = JSON.parse(JSON.stringify(new_df));
      delete df_copy.name;
      delete new_df_copy.name;
      return JSON.stringify(df_copy) != JSON.stringify(new_df_copy);
    }
    function get_layout() {
      return create_layout(doc.value.fields);
    }
    function add_new_tab() {
      let tab = {
        df: get_df("Tab Break", "", "Tab " + (form.value.layout.tabs.length + 1)),
        sections: [section_boilerplate()]
      };
      form.value.layout.tabs.push(tab);
      activate_tab(tab);
    }
    function activate_tab(tab) {
      form.value.active_tab = tab.df.name;
      form.value.selected_field = tab.df;
      (0, vue_runtime_esm_bundler_exports.nextTick)(() => {
        var _a2;
        (_a2 = $(".tabs .tab.active")[0]) == null ? void 0 : _a2.scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "nearest"
        });
      });
    }
    return {
      doctype,
      frm,
      doc,
      form,
      dirty,
      read_only,
      is_customize_form,
      preview,
      drag: drag2,
      get_animation,
      get_docfields,
      current_tab,
      not_using_input,
      selected,
      get_df,
      has_standard_field,
      is_user_generated_field,
      fetch,
      validate_fields,
      update_fields,
      get_updated_fields,
      is_df_updated,
      get_layout,
      add_new_tab,
      activate_tab
    };
  });

  // frappe/public/js/form_builder/utils.js
  function create_layout(fields) {
    let store = useStore2();
    let layout = {
      tabs: []
    };
    let tab = null, section = null, column = null;
    function set_tab(df) {
      tab = get_new_tab(df);
      column = null;
      section = null;
      layout.tabs.push(tab);
    }
    function set_section(df) {
      if (!tab)
        set_tab();
      section = get_new_section(df, tab);
      column = null;
      tab.sections.push(section);
    }
    function set_column(df) {
      if (!section)
        set_section();
      column = get_new_column(df);
      section.columns.push(column);
    }
    function get_new_tab(df) {
      let _tab = {};
      _tab.df = df || store.get_df("Tab Break", "", __("Details"));
      _tab.sections = [];
      _tab.is_first = !df;
      return _tab;
    }
    function get_new_section(df) {
      let _section = {};
      _section.df = df || store.get_df("Section Break");
      _section.columns = [];
      _section.is_first = !df;
      return _section;
    }
    function get_new_column(df) {
      let _column = {};
      _column.df = df || store.get_df("Column Break");
      _column.fields = [];
      _column.is_first = !df;
      return _column;
    }
    for (let df of fields) {
      if (df.fieldname) {
        df = JSON.parse(JSON.stringify(df));
      }
      if (df.fieldtype === "Tab Break") {
        set_tab(df);
      } else if (df.fieldtype === "Section Break") {
        set_section(df);
      } else if (df.fieldtype === "Column Break") {
        set_column(df);
      } else {
        if (!column)
          set_column();
        let field = { df };
        if (df.fieldtype === "Table") {
          field.table_columns = get_table_columns(df);
        }
        column.fields.push(field);
        section.has_fields = true;
      }
    }
    for (let tab2 of layout.tabs) {
      for (let i = tab2.sections.length - 1; i >= 0; --i) {
        let section2 = tab2.sections[i];
        if (!section2.has_fields) {
          tab2.sections.splice(tab2.sections.indexOf(section2), 1);
        }
      }
    }
    return layout;
  }
  async function load_doctype_model(doctype) {
    await frappe.call("frappe.desk.form.load.getdoctype", { doctype });
  }
  async function get_table_columns(df, child_doctype) {
    let table_columns = [];
    if (!frappe.get_meta(df.options)) {
      await load_doctype_model(df.options);
    }
    if (!child_doctype) {
      child_doctype = frappe.get_meta(df.options);
    }
    let table_fields = child_doctype.fields;
    let total_colsize = 1;
    table_columns.push([
      {
        label: __("No.")
      },
      1
    ]);
    for (let tf of table_fields) {
      if (!frappe.model.layout_fields.includes(tf.fieldtype) && tf.in_list_view && tf.label) {
        let colsize;
        if (tf.columns) {
          colsize = tf.columns;
        } else {
          colsize = update_default_colsize(tf);
        }
        if (total_colsize > 11 + colsize) {
          continue;
        } else {
          total_colsize += colsize;
          table_columns.push([
            {
              label: tf.label,
              fieldname: tf.fieldname,
              fieldtype: tf.fieldtype
            },
            colsize
          ]);
        }
      }
    }
    adjust_column_size(total_colsize, true);
    adjust_column_size(total_colsize);
    function adjust_column_size(total_colsize2, increase) {
      let passes = 0;
      let start_condition = increase ? total_colsize2 < 11 : total_colsize2 >= 11;
      while (start_condition && passes < 11) {
        for (var i in table_columns) {
          var _df = table_columns[i][0];
          var colsize = table_columns[i][1];
          if (colsize > 1 && colsize < 11 && frappe.model.is_non_std_field(_df.fieldname)) {
            if (passes < 3 && ["Int", "Currency", "Float", "Check", "Percent"].indexOf(_df.fieldtype) !== -1) {
              continue;
            }
            if (increase) {
              table_columns[i][1] += 1;
              total_colsize2++;
            } else {
              table_columns[i][1] -= 1;
              total_colsize2--;
            }
          }
          if (increase && total_colsize2 > 9)
            break;
          if (!increase && total_colsize2 < 11)
            break;
        }
        passes++;
      }
    }
    function update_default_colsize(_df) {
      let colsize = 2;
      switch (_df.fieldtype) {
        case "Text":
          break;
        case "Small Text":
          colsize = 3;
          break;
        case "Check":
          colsize = 1;
      }
      return colsize;
    }
    return table_columns;
  }
  function section_boilerplate() {
    let store = useStore2();
    return {
      df: store.get_df("Section Break"),
      columns: [
        {
          df: store.get_df("Column Break"),
          fields: []
        }
      ]
    };
  }
  function scrub_field_names(fields) {
    fields.forEach((d) => {
      if (d.fieldtype) {
        if (!d.fieldname) {
          if (d.label) {
            d.fieldname = d.label.trim().toLowerCase().replaceAll(" ", "_");
            if (d.fieldname.endsWith("?")) {
              d.fieldname = d.fieldname.slice(0, -1);
            }
            if (frappe.model.restricted_fields.includes(d.fieldname)) {
              d.fieldname = d.fieldname + "1";
            }
            if (d.fieldtype == "Section Break") {
              d.fieldname = d.fieldname + "_section";
            } else if (d.fieldtype == "Column Break") {
              d.fieldname = d.fieldname + "_column";
            } else if (d.fieldtype == "Tab Break") {
              d.fieldname = d.fieldname + "_tab";
            }
          } else {
            d.fieldname = d.fieldtype.toLowerCase().replaceAll(" ", "_") + "_" + frappe.utils.get_random(4);
          }
        } else {
          if (frappe.model.restricted_fields.includes(d.fieldname)) {
            frappe.throw(__("Fieldname {0} is restricted", [d.fieldname]));
          }
        }
        let regex = new RegExp(/['",./%@()<>{}]/g);
        d.fieldname = d.fieldname.replace(regex, "");
        d.fieldname = d.fieldname.toLowerCase();
      }
      if (d.unique) {
        d.search_index = 0;
      }
    });
    return fields;
  }

  // sfc-script:/home/amreen/erp/frappe-bench/apps/frappe/frappe/public/js/form_builder/components/controls/TableControl.vue?type=script
  var TableControl_default = {
    __name: "TableControl",
    props: ["df"],
    setup(__props, { expose: __expose }) {
      __expose();
      const props = __props;
      let table_columns = computedAsync(async () => {
        let doctype = props.df.options;
        if (!doctype)
          return [];
        if (!frappe.get_meta(doctype)) {
          await load_doctype_model(doctype);
        }
        let child_doctype = frappe.get_meta(doctype);
        return get_table_columns(props.df, child_doctype);
      }, []);
      const __returned__ = { props, get table_columns() {
        return table_columns;
      }, set table_columns(v) {
        table_columns = v;
      }, get get_table_columns() {
        return get_table_columns;
      }, get load_doctype_model() {
        return load_doctype_model;
      }, get computedAsync() {
        return computedAsync;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };

  // sfc-template:/home/amreen/erp/frappe-bench/apps/frappe/frappe/public/js/form_builder/components/controls/TableControl.vue?type=template
  var _hoisted_118 = { class: "control editable" };
  var _hoisted_217 = { class: "field-controls" };
  var _hoisted_315 = {
    key: 0,
    class: "table-controls row no-gutters",
    style: { opacity: 1 }
  };
  var _hoisted_413 = { class: "table-field ellipsis" };
  var _hoisted_56 = { class: "grid-empty text-center" };
  var _hoisted_64 = ["alt"];
  var _hoisted_72 = ["innerHTML"];
  function render19(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", _hoisted_118, [
      (0, vue_runtime_esm_bundler_exports.createCommentVNode)(" label "),
      (0, vue_runtime_esm_bundler_exports.createElementVNode)("div", _hoisted_217, [
        (0, vue_runtime_esm_bundler_exports.renderSlot)(_ctx.$slots, "label", {}, void 0, true),
        (0, vue_runtime_esm_bundler_exports.renderSlot)(_ctx.$slots, "actions", {}, void 0, true)
      ]),
      (0, vue_runtime_esm_bundler_exports.createCommentVNode)(" table grid "),
      $props.df.fieldtype == "Table" ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", _hoisted_315, [
        ((0, vue_runtime_esm_bundler_exports.openBlock)(true), (0, vue_runtime_esm_bundler_exports.createElementBlock)(vue_runtime_esm_bundler_exports.Fragment, null, (0, vue_runtime_esm_bundler_exports.renderList)($setup.table_columns, ([tf, size], i) => {
          return (0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", {
            class: "table-column",
            style: (0, vue_runtime_esm_bundler_exports.normalizeStyle)({ width: size * 10 + "%" }),
            key: i
          }, [
            (0, vue_runtime_esm_bundler_exports.createElementVNode)("div", _hoisted_413, (0, vue_runtime_esm_bundler_exports.toDisplayString)(tf.label), 1)
          ], 4);
        }), 128))
      ])) : (0, vue_runtime_esm_bundler_exports.createCommentVNode)("v-if", true),
      (0, vue_runtime_esm_bundler_exports.createElementVNode)("div", _hoisted_56, [
        (0, vue_runtime_esm_bundler_exports.createElementVNode)("img", {
          src: "/assets/frappe/images/ui-states/grid-empty-state.svg",
          alt: _ctx.__("Grid Empty State"),
          class: "grid-empty-illustration"
        }, null, 8, _hoisted_64),
        (0, vue_runtime_esm_bundler_exports.createTextVNode)(" " + (0, vue_runtime_esm_bundler_exports.toDisplayString)(_ctx.__("No Data")), 1)
      ]),
      (0, vue_runtime_esm_bundler_exports.createCommentVNode)(" description "),
      $props.df.description ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", {
        key: 1,
        class: "mt-2 description",
        innerHTML: $props.df.description
      }, null, 8, _hoisted_72)) : (0, vue_runtime_esm_bundler_exports.createCommentVNode)("v-if", true)
    ]);
  }

  // frappe/public/js/form_builder/components/controls/TableControl.vue
  TableControl_default.render = render19;
  TableControl_default.__file = "frappe/public/js/form_builder/components/controls/TableControl.vue";
  TableControl_default.__scopeId = "data-v-9fc5e930";
  var TableControl_default2 = TableControl_default;

  // sfc-script:/home/amreen/erp/frappe-bench/apps/frappe/frappe/public/js/form_builder/components/controls/TextControl.vue?type=script
  var TextControl_default = {
    __name: "TextControl",
    props: ["df", "value", "read_only", "modelValue"],
    emits: ["update:modelValue"],
    setup(__props, { expose: __expose, emit: __emit }) {
      __expose();
      const props = __props;
      let emit = __emit;
      let slots = (0, vue_runtime_esm_bundler_exports.useSlots)();
      let height = (0, vue_runtime_esm_bundler_exports.computed)(() => {
        if (props.df.fieldtype == "Small Text") {
          return "150px";
        }
        return "300px";
      });
      const __returned__ = { props, get emit() {
        return emit;
      }, set emit(v) {
        emit = v;
      }, get slots() {
        return slots;
      }, set slots(v) {
        slots = v;
      }, get height() {
        return height;
      }, set height(v) {
        height = v;
      }, useSlots: vue_runtime_esm_bundler_exports.useSlots, computed: vue_runtime_esm_bundler_exports.computed };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };

  // sfc-template:/home/amreen/erp/frappe-bench/apps/frappe/frappe/public/js/form_builder/components/controls/TextControl.vue?type=template
  var _hoisted_119 = {
    key: 0,
    class: "field-controls"
  };
  var _hoisted_218 = {
    key: 1,
    class: "control-label label"
  };
  var _hoisted_316 = ["value", "disabled"];
  var _hoisted_414 = ["innerHTML"];
  function render20(_ctx, _cache, $props, $setup, $data, $options) {
    var _a2, _b;
    return (0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", {
      class: (0, vue_runtime_esm_bundler_exports.normalizeClass)(["control", { editable: $setup.slots.label }])
    }, [
      (0, vue_runtime_esm_bundler_exports.createCommentVNode)(" label "),
      $setup.slots.label ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", _hoisted_119, [
        (0, vue_runtime_esm_bundler_exports.renderSlot)(_ctx.$slots, "label"),
        (0, vue_runtime_esm_bundler_exports.renderSlot)(_ctx.$slots, "actions")
      ])) : ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", _hoisted_218, (0, vue_runtime_esm_bundler_exports.toDisplayString)($props.df.label), 1)),
      (0, vue_runtime_esm_bundler_exports.createCommentVNode)(" textarea input "),
      $setup.slots.label ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("textarea", {
        key: 2,
        style: (0, vue_runtime_esm_bundler_exports.normalizeStyle)({ height: $setup.height, maxHeight: (_a2 = $props.df.max_height) != null ? _a2 : "" }),
        class: "form-control",
        type: "text",
        readonly: ""
      }, null, 4)) : ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("textarea", {
        key: 3,
        style: (0, vue_runtime_esm_bundler_exports.normalizeStyle)({ height: $setup.height, maxHeight: (_b = $props.df.max_height) != null ? _b : "" }),
        class: "form-control",
        type: "text",
        value: $props.value,
        disabled: $props.read_only || $props.df.read_only,
        onInput: _cache[0] || (_cache[0] = (event) => _ctx.$emit("update:modelValue", event.target.value))
      }, null, 44, _hoisted_316)),
      (0, vue_runtime_esm_bundler_exports.createCommentVNode)(" description "),
      $props.df.description ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", {
        key: 4,
        class: "mt-2 description",
        innerHTML: $props.df.description
      }, null, 8, _hoisted_414)) : (0, vue_runtime_esm_bundler_exports.createCommentVNode)("v-if", true)
    ], 2);
  }

  // frappe/public/js/form_builder/components/controls/TextControl.vue
  TextControl_default.render = render20;
  TextControl_default.__file = "frappe/public/js/form_builder/components/controls/TextControl.vue";
  var TextControl_default2 = TextControl_default;

  // sfc-script:/home/amreen/erp/frappe-bench/apps/frappe/frappe/public/js/form_builder/components/controls/TextEditorControl.vue?type=script
  var TextEditorControl_default = {
    __name: "TextEditorControl",
    props: ["df"],
    setup(__props, { expose: __expose }) {
      __expose();
      const props = __props;
      let quill = (0, vue_runtime_esm_bundler_exports.ref)(null);
      let quill_control = (0, vue_runtime_esm_bundler_exports.computed)(() => {
        if (!quill.value)
          return;
        quill.value.innerHTML = "";
        return frappe.ui.form.make_control({
          parent: quill.value,
          df: __spreadProps(__spreadValues({}, props.df), { hidden: 0 }),
          disabled: true,
          render_input: true,
          only_input: true
        });
      });
      (0, vue_runtime_esm_bundler_exports.onMounted)(() => {
        if (quill.value)
          quill_control.value;
      });
      const __returned__ = { props, get quill() {
        return quill;
      }, set quill(v) {
        quill = v;
      }, get quill_control() {
        return quill_control;
      }, set quill_control(v) {
        quill_control = v;
      }, computed: vue_runtime_esm_bundler_exports.computed, onMounted: vue_runtime_esm_bundler_exports.onMounted, ref: vue_runtime_esm_bundler_exports.ref };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };

  // sfc-template:/home/amreen/erp/frappe-bench/apps/frappe/frappe/public/js/form_builder/components/controls/TextEditorControl.vue?type=template
  var _hoisted_120 = { class: "control editable" };
  var _hoisted_219 = { class: "field-controls" };
  var _hoisted_317 = {
    class: "quill",
    ref: "quill"
  };
  var _hoisted_415 = ["innerHTML"];
  function render21(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", _hoisted_120, [
      (0, vue_runtime_esm_bundler_exports.createElementVNode)("div", _hoisted_219, [
        (0, vue_runtime_esm_bundler_exports.renderSlot)(_ctx.$slots, "label", {}, void 0, true),
        (0, vue_runtime_esm_bundler_exports.renderSlot)(_ctx.$slots, "actions", {}, void 0, true)
      ]),
      (0, vue_runtime_esm_bundler_exports.createElementVNode)("div", _hoisted_317, null, 512),
      $props.df.description ? ((0, vue_runtime_esm_bundler_exports.openBlock)(), (0, vue_runtime_esm_bundler_exports.createElementBlock)("div", {
        key: 0,
        class: "mt-2 description",
        innerHTML: $props.df.description
      }, null, 8, _hoisted_415)) : (0, vue_runtime_esm_bundler_exports.createCommentVNode)("v-if", true)
    ]);
  }

  // frappe/public/js/form_builder/components/controls/TextEditorControl.vue
  TextEditorControl_default.render = render21;
  TextEditorControl_default.__file = "frappe/public/js/form_builder/components/controls/TextEditorControl.vue";
  TextEditorControl_default.__scopeId = "data-v-59de220a";
  var TextEditorControl_default2 = TextEditorControl_default;

  // frappe/public/js/workflow_builder/globals.js
  function registerGlobalComponents(app) {
    app.component("AttachControl", AttachControl_default2).component("AttachImageControl", AttachControl_default2).component("AutocompleteControl", DataControl_default2).component("BarcodeControl", DataControl_default2).component("ButtonControl", ButtonControl_default2).component("CheckControl", CheckControl_default2).component("CodeControl", CodeControl_default2).component("ColorControl", DataControl_default2).component("CurrencyControl", DataControl_default2).component("DataControl", DataControl_default2).component("DateControl", DataControl_default2).component("DatetimeControl", DataControl_default2).component("DurationControl", DataControl_default2).component("DynamicLinkControl", DataControl_default2).component("FloatControl", DataControl_default2).component("GeolocationControl", GeolocationControl_default2).component("HeadingControl", ButtonControl_default2).component("HTMLControl", DataControl_default2).component("HTMLEditorControl", CodeControl_default2).component("IconControl", DataControl_default2).component("ImageControl", ImageControl_default2).component("IntControl", DataControl_default2).component("JSONControl", CodeControl_default2).component("LinkControl", LinkControl_default2).component("LongTextControl", TextControl_default2).component("MarkdownEditorControl", CodeControl_default2).component("PasswordControl", DataControl_default2).component("PercentControl", DataControl_default2).component("PhoneControl", DataControl_default2).component("ReadOnlyControl", DataControl_default2).component("RatingControl", RatingControl_default2).component("SelectControl", SelectControl_default2).component("SignatureControl", SignatureControl_default2).component("SmallTextControl", TextControl_default2).component("TableControl", TableControl_default2).component("TableMultiSelectControl", DataControl_default2).component("TextControl", TextControl_default2).component("TextEditorControl", TextEditorControl_default2).component("TimeControl", DataControl_default2);
  }

  // frappe/public/js/workflow_builder/workflow_builder.bundle.js
  var WorkflowBuilder = class {
    constructor({ wrapper, page, workflow }) {
      this.$wrapper = $(wrapper);
      this.page = page;
      this.workflow = workflow;
      this.page.set_indicator("Beta", "orange");
      this.init();
    }
    init() {
      this.page.set_title(__("Editing {0}", [this.workflow]));
      this.setup_page_actions();
      this.setup_app();
    }
    setup_page_actions() {
      this.page.clear_actions();
      this.page.clear_menu();
      this.page.clear_custom_actions();
      this.primary_btn = this.page.set_primary_action(
        __("Save"),
        () => this.store.save_changes()
      );
      this.reset_changes_btn = this.page.add_button(__("Reset Changes"), () => {
        this.store.reset_changes();
      });
      this.go_to_doctype_btn = this.page.add_menu_item(
        __("Go to Workflow"),
        () => frappe.set_route("Form", "Workflow", this.workflow)
      );
    }
    setup_app() {
      let pinia = createPinia();
      let app = (0, vue_runtime_esm_bundler_exports.createApp)(WorkflowBuilder_default2, { workflow: this.workflow });
      SetVueGlobals(app);
      app.use(pinia);
      this.store = useStore();
      this.store.workflow_name = this.workflow;
      registerGlobalComponents(app);
      this.$workflow_builder = app.mount(this.$wrapper.get(0));
    }
  };
  frappe.provide("frappe.ui");
  frappe.ui.WorkflowBuilder = WorkflowBuilder;
  var workflow_builder_bundle_default = WorkflowBuilder;
})();
/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */
/*! #__NO_SIDE_EFFECTS__ */
//# sourceMappingURL=workflow_builder.bundle.6ILYD3ZA.js.map

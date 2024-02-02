(() => {
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
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
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };

  // node_modules/@sentry/utils/esm/is.js
  var objectToString = Object.prototype.toString;
  function isError(wat) {
    switch (objectToString.call(wat)) {
      case "[object Error]":
      case "[object Exception]":
      case "[object DOMException]":
        return true;
      default:
        return isInstanceOf(wat, Error);
    }
  }
  function isBuiltin(wat, className) {
    return objectToString.call(wat) === `[object ${className}]`;
  }
  function isErrorEvent(wat) {
    return isBuiltin(wat, "ErrorEvent");
  }
  function isDOMError(wat) {
    return isBuiltin(wat, "DOMError");
  }
  function isDOMException(wat) {
    return isBuiltin(wat, "DOMException");
  }
  function isString(wat) {
    return isBuiltin(wat, "String");
  }
  function isPrimitive(wat) {
    return wat === null || typeof wat !== "object" && typeof wat !== "function";
  }
  function isPlainObject(wat) {
    return isBuiltin(wat, "Object");
  }
  function isEvent(wat) {
    return typeof Event !== "undefined" && isInstanceOf(wat, Event);
  }
  function isElement(wat) {
    return typeof Element !== "undefined" && isInstanceOf(wat, Element);
  }
  function isRegExp(wat) {
    return isBuiltin(wat, "RegExp");
  }
  function isThenable(wat) {
    return Boolean(wat && wat.then && typeof wat.then === "function");
  }
  function isSyntheticEvent(wat) {
    return isPlainObject(wat) && "nativeEvent" in wat && "preventDefault" in wat && "stopPropagation" in wat;
  }
  function isNaN2(wat) {
    return typeof wat === "number" && wat !== wat;
  }
  function isInstanceOf(wat, base) {
    try {
      return wat instanceof base;
    } catch (_e) {
      return false;
    }
  }
  function isVueViewModel(wat) {
    return !!(typeof wat === "object" && wat !== null && (wat.__isVue || wat._isVue));
  }

  // node_modules/@sentry/utils/esm/string.js
  function truncate(str, max = 0) {
    if (typeof str !== "string" || max === 0) {
      return str;
    }
    return str.length <= max ? str : `${str.slice(0, max)}...`;
  }
  function safeJoin(input, delimiter) {
    if (!Array.isArray(input)) {
      return "";
    }
    const output = [];
    for (let i = 0; i < input.length; i++) {
      const value = input[i];
      try {
        if (isVueViewModel(value)) {
          output.push("[VueViewModel]");
        } else {
          output.push(String(value));
        }
      } catch (e) {
        output.push("[value cannot be serialized]");
      }
    }
    return output.join(delimiter);
  }
  function isMatchingPattern(value, pattern, requireExactStringMatch = false) {
    if (!isString(value)) {
      return false;
    }
    if (isRegExp(pattern)) {
      return pattern.test(value);
    }
    if (isString(pattern)) {
      return requireExactStringMatch ? value === pattern : value.includes(pattern);
    }
    return false;
  }
  function stringMatchesSomePattern(testString, patterns = [], requireExactStringMatch = false) {
    return patterns.some((pattern) => isMatchingPattern(testString, pattern, requireExactStringMatch));
  }

  // node_modules/@sentry/utils/esm/aggregate-errors.js
  function applyAggregateErrorsToEvent(exceptionFromErrorImplementation, parser, maxValueLimit = 250, key, limit, event, hint) {
    if (!event.exception || !event.exception.values || !hint || !isInstanceOf(hint.originalException, Error)) {
      return;
    }
    const originalException = event.exception.values.length > 0 ? event.exception.values[event.exception.values.length - 1] : void 0;
    if (originalException) {
      event.exception.values = truncateAggregateExceptions(
        aggregateExceptionsFromError(
          exceptionFromErrorImplementation,
          parser,
          limit,
          hint.originalException,
          key,
          event.exception.values,
          originalException,
          0
        ),
        maxValueLimit
      );
    }
  }
  function aggregateExceptionsFromError(exceptionFromErrorImplementation, parser, limit, error, key, prevExceptions, exception, exceptionId) {
    if (prevExceptions.length >= limit + 1) {
      return prevExceptions;
    }
    let newExceptions = [...prevExceptions];
    if (isInstanceOf(error[key], Error)) {
      applyExceptionGroupFieldsForParentException(exception, exceptionId);
      const newException = exceptionFromErrorImplementation(parser, error[key]);
      const newExceptionId = newExceptions.length;
      applyExceptionGroupFieldsForChildException(newException, key, newExceptionId, exceptionId);
      newExceptions = aggregateExceptionsFromError(
        exceptionFromErrorImplementation,
        parser,
        limit,
        error[key],
        key,
        [newException, ...newExceptions],
        newException,
        newExceptionId
      );
    }
    if (Array.isArray(error.errors)) {
      error.errors.forEach((childError, i) => {
        if (isInstanceOf(childError, Error)) {
          applyExceptionGroupFieldsForParentException(exception, exceptionId);
          const newException = exceptionFromErrorImplementation(parser, childError);
          const newExceptionId = newExceptions.length;
          applyExceptionGroupFieldsForChildException(newException, `errors[${i}]`, newExceptionId, exceptionId);
          newExceptions = aggregateExceptionsFromError(
            exceptionFromErrorImplementation,
            parser,
            limit,
            childError,
            key,
            [newException, ...newExceptions],
            newException,
            newExceptionId
          );
        }
      });
    }
    return newExceptions;
  }
  function applyExceptionGroupFieldsForParentException(exception, exceptionId) {
    exception.mechanism = exception.mechanism || { type: "generic", handled: true };
    exception.mechanism = __spreadProps(__spreadValues({}, exception.mechanism), {
      is_exception_group: true,
      exception_id: exceptionId
    });
  }
  function applyExceptionGroupFieldsForChildException(exception, source, exceptionId, parentId) {
    exception.mechanism = exception.mechanism || { type: "generic", handled: true };
    exception.mechanism = __spreadProps(__spreadValues({}, exception.mechanism), {
      type: "chained",
      source,
      exception_id: exceptionId,
      parent_id: parentId
    });
  }
  function truncateAggregateExceptions(exceptions, maxValueLength) {
    return exceptions.map((exception) => {
      if (exception.value) {
        exception.value = truncate(exception.value, maxValueLength);
      }
      return exception;
    });
  }

  // node_modules/@sentry/utils/esm/worldwide.js
  function isGlobalObj(obj) {
    return obj && obj.Math == Math ? obj : void 0;
  }
  var GLOBAL_OBJ = typeof globalThis == "object" && isGlobalObj(globalThis) || typeof window == "object" && isGlobalObj(window) || typeof self == "object" && isGlobalObj(self) || typeof global == "object" && isGlobalObj(global) || function() {
    return this;
  }() || {};
  function getGlobalObject() {
    return GLOBAL_OBJ;
  }
  function getGlobalSingleton(name, creator, obj) {
    const gbl = obj || GLOBAL_OBJ;
    const __SENTRY__ = gbl.__SENTRY__ = gbl.__SENTRY__ || {};
    const singleton = __SENTRY__[name] || (__SENTRY__[name] = creator());
    return singleton;
  }

  // node_modules/@sentry/utils/esm/browser.js
  var WINDOW = getGlobalObject();
  var DEFAULT_MAX_STRING_LENGTH = 80;
  function htmlTreeAsString(elem, options = {}) {
    if (!elem) {
      return "<unknown>";
    }
    try {
      let currentElem = elem;
      const MAX_TRAVERSE_HEIGHT = 5;
      const out = [];
      let height = 0;
      let len = 0;
      const separator = " > ";
      const sepLength = separator.length;
      let nextStr;
      const keyAttrs = Array.isArray(options) ? options : options.keyAttrs;
      const maxStringLength = !Array.isArray(options) && options.maxStringLength || DEFAULT_MAX_STRING_LENGTH;
      while (currentElem && height++ < MAX_TRAVERSE_HEIGHT) {
        nextStr = _htmlElementAsString(currentElem, keyAttrs);
        if (nextStr === "html" || height > 1 && len + out.length * sepLength + nextStr.length >= maxStringLength) {
          break;
        }
        out.push(nextStr);
        len += nextStr.length;
        currentElem = currentElem.parentNode;
      }
      return out.reverse().join(separator);
    } catch (_oO) {
      return "<unknown>";
    }
  }
  function _htmlElementAsString(el, keyAttrs) {
    const elem = el;
    const out = [];
    let className;
    let classes;
    let key;
    let attr;
    let i;
    if (!elem || !elem.tagName) {
      return "";
    }
    out.push(elem.tagName.toLowerCase());
    const keyAttrPairs = keyAttrs && keyAttrs.length ? keyAttrs.filter((keyAttr) => elem.getAttribute(keyAttr)).map((keyAttr) => [keyAttr, elem.getAttribute(keyAttr)]) : null;
    if (keyAttrPairs && keyAttrPairs.length) {
      keyAttrPairs.forEach((keyAttrPair) => {
        out.push(`[${keyAttrPair[0]}="${keyAttrPair[1]}"]`);
      });
    } else {
      if (elem.id) {
        out.push(`#${elem.id}`);
      }
      className = elem.className;
      if (className && isString(className)) {
        classes = className.split(/\s+/);
        for (i = 0; i < classes.length; i++) {
          out.push(`.${classes[i]}`);
        }
      }
    }
    const allowedAttrs = ["aria-label", "type", "name", "title", "alt"];
    for (i = 0; i < allowedAttrs.length; i++) {
      key = allowedAttrs[i];
      attr = elem.getAttribute(key);
      if (attr) {
        out.push(`[${key}="${attr}"]`);
      }
    }
    return out.join("");
  }
  function getLocationHref() {
    try {
      return WINDOW.document.location.href;
    } catch (oO) {
      return "";
    }
  }

  // node_modules/@sentry/utils/esm/logger.js
  var PREFIX = "Sentry Logger ";
  var CONSOLE_LEVELS = ["debug", "info", "warn", "error", "log", "assert", "trace"];
  var originalConsoleMethods = {};
  function consoleSandbox(callback) {
    if (!("console" in GLOBAL_OBJ)) {
      return callback();
    }
    const console2 = GLOBAL_OBJ.console;
    const wrappedFuncs = {};
    const wrappedLevels = Object.keys(originalConsoleMethods);
    wrappedLevels.forEach((level) => {
      const originalConsoleMethod = originalConsoleMethods[level];
      wrappedFuncs[level] = console2[level];
      console2[level] = originalConsoleMethod;
    });
    try {
      return callback();
    } finally {
      wrappedLevels.forEach((level) => {
        console2[level] = wrappedFuncs[level];
      });
    }
  }
  function makeLogger() {
    let enabled = false;
    const logger2 = {
      enable: () => {
        enabled = true;
      },
      disable: () => {
        enabled = false;
      },
      isEnabled: () => enabled
    };
    if (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) {
      CONSOLE_LEVELS.forEach((name) => {
        logger2[name] = (...args) => {
          if (enabled) {
            consoleSandbox(() => {
              GLOBAL_OBJ.console[name](`${PREFIX}[${name}]:`, ...args);
            });
          }
        };
      });
    } else {
      CONSOLE_LEVELS.forEach((name) => {
        logger2[name] = () => void 0;
      });
    }
    return logger2;
  }
  var logger = makeLogger();

  // node_modules/@sentry/utils/esm/dsn.js
  var DSN_REGEX = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
  function isValidProtocol(protocol) {
    return protocol === "http" || protocol === "https";
  }
  function dsnToString(dsn, withPassword = false) {
    const { host, path, pass, port, projectId, protocol, publicKey } = dsn;
    return `${protocol}://${publicKey}${withPassword && pass ? `:${pass}` : ""}@${host}${port ? `:${port}` : ""}/${path ? `${path}/` : path}${projectId}`;
  }
  function dsnFromString(str) {
    const match = DSN_REGEX.exec(str);
    if (!match) {
      console.error(`Invalid Sentry Dsn: ${str}`);
      return void 0;
    }
    const [protocol, publicKey, pass = "", host, port = "", lastPath] = match.slice(1);
    let path = "";
    let projectId = lastPath;
    const split = projectId.split("/");
    if (split.length > 1) {
      path = split.slice(0, -1).join("/");
      projectId = split.pop();
    }
    if (projectId) {
      const projectMatch = projectId.match(/^\d+/);
      if (projectMatch) {
        projectId = projectMatch[0];
      }
    }
    return dsnFromComponents({ host, pass, path, projectId, port, protocol, publicKey });
  }
  function dsnFromComponents(components) {
    return {
      protocol: components.protocol,
      publicKey: components.publicKey || "",
      pass: components.pass || "",
      host: components.host,
      port: components.port || "",
      path: components.path || "",
      projectId: components.projectId
    };
  }
  function validateDsn(dsn) {
    if (!(typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__)) {
      return true;
    }
    const { port, projectId, protocol } = dsn;
    const requiredComponents = ["protocol", "publicKey", "host", "projectId"];
    const hasMissingRequiredComponent = requiredComponents.find((component) => {
      if (!dsn[component]) {
        logger.error(`Invalid Sentry Dsn: ${component} missing`);
        return true;
      }
      return false;
    });
    if (hasMissingRequiredComponent) {
      return false;
    }
    if (!projectId.match(/^\d+$/)) {
      logger.error(`Invalid Sentry Dsn: Invalid projectId ${projectId}`);
      return false;
    }
    if (!isValidProtocol(protocol)) {
      logger.error(`Invalid Sentry Dsn: Invalid protocol ${protocol}`);
      return false;
    }
    if (port && isNaN(parseInt(port, 10))) {
      logger.error(`Invalid Sentry Dsn: Invalid port ${port}`);
      return false;
    }
    return true;
  }
  function makeDsn(from) {
    const components = typeof from === "string" ? dsnFromString(from) : dsnFromComponents(from);
    if (!components || !validateDsn(components)) {
      return void 0;
    }
    return components;
  }

  // node_modules/@sentry/utils/esm/error.js
  var SentryError = class extends Error {
    constructor(message, logLevel = "warn") {
      super(message);
      this.message = message;
      this.name = new.target.prototype.constructor.name;
      Object.setPrototypeOf(this, new.target.prototype);
      this.logLevel = logLevel;
    }
  };

  // node_modules/@sentry/utils/esm/object.js
  function fill(source, name, replacementFactory) {
    if (!(name in source)) {
      return;
    }
    const original = source[name];
    const wrapped = replacementFactory(original);
    if (typeof wrapped === "function") {
      markFunctionWrapped(wrapped, original);
    }
    source[name] = wrapped;
  }
  function addNonEnumerableProperty(obj, name, value) {
    try {
      Object.defineProperty(obj, name, {
        value,
        writable: true,
        configurable: true
      });
    } catch (o_O) {
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log(`Failed to add non-enumerable property "${name}" to object`, obj);
    }
  }
  function markFunctionWrapped(wrapped, original) {
    try {
      const proto = original.prototype || {};
      wrapped.prototype = original.prototype = proto;
      addNonEnumerableProperty(wrapped, "__sentry_original__", original);
    } catch (o_O) {
    }
  }
  function getOriginalFunction(func) {
    return func.__sentry_original__;
  }
  function urlEncode(object) {
    return Object.keys(object).map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(object[key])}`).join("&");
  }
  function convertToPlainObject(value) {
    if (isError(value)) {
      return __spreadValues({
        message: value.message,
        name: value.name,
        stack: value.stack
      }, getOwnProperties(value));
    } else if (isEvent(value)) {
      const newObj = __spreadValues({
        type: value.type,
        target: serializeEventTarget(value.target),
        currentTarget: serializeEventTarget(value.currentTarget)
      }, getOwnProperties(value));
      if (typeof CustomEvent !== "undefined" && isInstanceOf(value, CustomEvent)) {
        newObj.detail = value.detail;
      }
      return newObj;
    } else {
      return value;
    }
  }
  function serializeEventTarget(target) {
    try {
      return isElement(target) ? htmlTreeAsString(target) : Object.prototype.toString.call(target);
    } catch (_oO) {
      return "<unknown>";
    }
  }
  function getOwnProperties(obj) {
    if (typeof obj === "object" && obj !== null) {
      const extractedProps = {};
      for (const property in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, property)) {
          extractedProps[property] = obj[property];
        }
      }
      return extractedProps;
    } else {
      return {};
    }
  }
  function extractExceptionKeysForMessage(exception, maxLength = 40) {
    const keys = Object.keys(convertToPlainObject(exception));
    keys.sort();
    if (!keys.length) {
      return "[object has no keys]";
    }
    if (keys[0].length >= maxLength) {
      return truncate(keys[0], maxLength);
    }
    for (let includedKeys = keys.length; includedKeys > 0; includedKeys--) {
      const serialized = keys.slice(0, includedKeys).join(", ");
      if (serialized.length > maxLength) {
        continue;
      }
      if (includedKeys === keys.length) {
        return serialized;
      }
      return truncate(serialized, maxLength);
    }
    return "";
  }
  function dropUndefinedKeys(inputValue) {
    const memoizationMap = /* @__PURE__ */ new Map();
    return _dropUndefinedKeys(inputValue, memoizationMap);
  }
  function _dropUndefinedKeys(inputValue, memoizationMap) {
    if (isPlainObject(inputValue)) {
      const memoVal = memoizationMap.get(inputValue);
      if (memoVal !== void 0) {
        return memoVal;
      }
      const returnValue = {};
      memoizationMap.set(inputValue, returnValue);
      for (const key of Object.keys(inputValue)) {
        if (typeof inputValue[key] !== "undefined") {
          returnValue[key] = _dropUndefinedKeys(inputValue[key], memoizationMap);
        }
      }
      return returnValue;
    }
    if (Array.isArray(inputValue)) {
      const memoVal = memoizationMap.get(inputValue);
      if (memoVal !== void 0) {
        return memoVal;
      }
      const returnValue = [];
      memoizationMap.set(inputValue, returnValue);
      inputValue.forEach((item) => {
        returnValue.push(_dropUndefinedKeys(item, memoizationMap));
      });
      return returnValue;
    }
    return inputValue;
  }

  // node_modules/@sentry/utils/esm/misc.js
  function uuid4() {
    const gbl = GLOBAL_OBJ;
    const crypto = gbl.crypto || gbl.msCrypto;
    let getRandomByte = () => Math.random() * 16;
    try {
      if (crypto && crypto.randomUUID) {
        return crypto.randomUUID().replace(/-/g, "");
      }
      if (crypto && crypto.getRandomValues) {
        getRandomByte = () => crypto.getRandomValues(new Uint8Array(1))[0];
      }
    } catch (_) {
    }
    return ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(
      /[018]/g,
      (c) => (c ^ (getRandomByte() & 15) >> c / 4).toString(16)
    );
  }
  function getFirstException(event) {
    return event.exception && event.exception.values ? event.exception.values[0] : void 0;
  }
  function getEventDescription(event) {
    const { message, event_id: eventId } = event;
    if (message) {
      return message;
    }
    const firstException = getFirstException(event);
    if (firstException) {
      if (firstException.type && firstException.value) {
        return `${firstException.type}: ${firstException.value}`;
      }
      return firstException.type || firstException.value || eventId || "<unknown>";
    }
    return eventId || "<unknown>";
  }
  function addExceptionTypeValue(event, value, type) {
    const exception = event.exception = event.exception || {};
    const values = exception.values = exception.values || [];
    const firstException = values[0] = values[0] || {};
    if (!firstException.value) {
      firstException.value = value || "";
    }
    if (!firstException.type) {
      firstException.type = type || "Error";
    }
  }
  function addExceptionMechanism(event, newMechanism) {
    const firstException = getFirstException(event);
    if (!firstException) {
      return;
    }
    const defaultMechanism = { type: "generic", handled: true };
    const currentMechanism = firstException.mechanism;
    firstException.mechanism = __spreadValues(__spreadValues(__spreadValues({}, defaultMechanism), currentMechanism), newMechanism);
    if (newMechanism && "data" in newMechanism) {
      const mergedData = __spreadValues(__spreadValues({}, currentMechanism && currentMechanism.data), newMechanism.data);
      firstException.mechanism.data = mergedData;
    }
  }
  function checkOrSetAlreadyCaught(exception) {
    if (exception && exception.__sentry_captured__) {
      return true;
    }
    try {
      addNonEnumerableProperty(exception, "__sentry_captured__", true);
    } catch (err) {
    }
    return false;
  }
  function arrayify(maybeArray) {
    return Array.isArray(maybeArray) ? maybeArray : [maybeArray];
  }

  // node_modules/@sentry/utils/esm/stacktrace.js
  var STACKTRACE_FRAME_LIMIT = 50;
  var WEBPACK_ERROR_REGEXP = /\(error: (.*)\)/;
  var STRIP_FRAME_REGEXP = /captureMessage|captureException/;
  function createStackParser(...parsers) {
    const sortedParsers = parsers.sort((a, b) => a[0] - b[0]).map((p) => p[1]);
    return (stack, skipFirst = 0) => {
      const frames = [];
      const lines = stack.split("\n");
      for (let i = skipFirst; i < lines.length; i++) {
        const line = lines[i];
        if (line.length > 1024) {
          continue;
        }
        const cleanedLine = WEBPACK_ERROR_REGEXP.test(line) ? line.replace(WEBPACK_ERROR_REGEXP, "$1") : line;
        if (cleanedLine.match(/\S*Error: /)) {
          continue;
        }
        for (const parser of sortedParsers) {
          const frame = parser(cleanedLine);
          if (frame) {
            frames.push(frame);
            break;
          }
        }
        if (frames.length >= STACKTRACE_FRAME_LIMIT) {
          break;
        }
      }
      return stripSentryFramesAndReverse(frames);
    };
  }
  function stackParserFromStackParserOptions(stackParser) {
    if (Array.isArray(stackParser)) {
      return createStackParser(...stackParser);
    }
    return stackParser;
  }
  function stripSentryFramesAndReverse(stack) {
    if (!stack.length) {
      return [];
    }
    const localStack = Array.from(stack);
    if (/sentryWrapped/.test(localStack[localStack.length - 1].function || "")) {
      localStack.pop();
    }
    localStack.reverse();
    if (STRIP_FRAME_REGEXP.test(localStack[localStack.length - 1].function || "")) {
      localStack.pop();
      if (STRIP_FRAME_REGEXP.test(localStack[localStack.length - 1].function || "")) {
        localStack.pop();
      }
    }
    return localStack.slice(0, STACKTRACE_FRAME_LIMIT).map((frame) => __spreadProps(__spreadValues({}, frame), {
      filename: frame.filename || localStack[localStack.length - 1].filename,
      function: frame.function || "?"
    }));
  }
  var defaultFunctionName = "<anonymous>";
  function getFunctionName(fn) {
    try {
      if (!fn || typeof fn !== "function") {
        return defaultFunctionName;
      }
      return fn.name || defaultFunctionName;
    } catch (e) {
      return defaultFunctionName;
    }
  }

  // node_modules/@sentry/utils/esm/supports.js
  var WINDOW2 = getGlobalObject();
  function supportsFetch() {
    if (!("fetch" in WINDOW2)) {
      return false;
    }
    try {
      new Headers();
      new Request("http://www.example.com");
      new Response();
      return true;
    } catch (e) {
      return false;
    }
  }
  function isNativeFetch(func) {
    return func && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(func.toString());
  }
  function supportsNativeFetch() {
    if (typeof EdgeRuntime === "string") {
      return true;
    }
    if (!supportsFetch()) {
      return false;
    }
    if (isNativeFetch(WINDOW2.fetch)) {
      return true;
    }
    let result = false;
    const doc = WINDOW2.document;
    if (doc && typeof doc.createElement === "function") {
      try {
        const sandbox = doc.createElement("iframe");
        sandbox.hidden = true;
        doc.head.appendChild(sandbox);
        if (sandbox.contentWindow && sandbox.contentWindow.fetch) {
          result = isNativeFetch(sandbox.contentWindow.fetch);
        }
        doc.head.removeChild(sandbox);
      } catch (err) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", err);
      }
    }
    return result;
  }

  // node_modules/@sentry/utils/esm/vendor/supportsHistory.js
  var WINDOW3 = getGlobalObject();
  function supportsHistory() {
    const chrome2 = WINDOW3.chrome;
    const isChromePackagedApp = chrome2 && chrome2.app && chrome2.app.runtime;
    const hasHistoryApi = "history" in WINDOW3 && !!WINDOW3.history.pushState && !!WINDOW3.history.replaceState;
    return !isChromePackagedApp && hasHistoryApi;
  }

  // node_modules/@sentry/utils/esm/instrument.js
  var WINDOW4 = getGlobalObject();
  var SENTRY_XHR_DATA_KEY = "__sentry_xhr_v2__";
  var handlers = {};
  var instrumented = {};
  function instrument(type) {
    if (instrumented[type]) {
      return;
    }
    instrumented[type] = true;
    switch (type) {
      case "console":
        instrumentConsole();
        break;
      case "dom":
        instrumentDOM();
        break;
      case "xhr":
        instrumentXHR();
        break;
      case "fetch":
        instrumentFetch();
        break;
      case "history":
        instrumentHistory();
        break;
      case "error":
        instrumentError();
        break;
      case "unhandledrejection":
        instrumentUnhandledRejection();
        break;
      default:
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn("unknown instrumentation type:", type);
        return;
    }
  }
  function addInstrumentationHandler(type, callback) {
    handlers[type] = handlers[type] || [];
    handlers[type].push(callback);
    instrument(type);
  }
  function triggerHandlers(type, data) {
    if (!type || !handlers[type]) {
      return;
    }
    for (const handler of handlers[type] || []) {
      try {
        handler(data);
      } catch (e) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.error(
          `Error while triggering instrumentation handler.
Type: ${type}
Name: ${getFunctionName(handler)}
Error:`,
          e
        );
      }
    }
  }
  function instrumentConsole() {
    if (!("console" in GLOBAL_OBJ)) {
      return;
    }
    CONSOLE_LEVELS.forEach(function(level) {
      if (!(level in GLOBAL_OBJ.console)) {
        return;
      }
      fill(GLOBAL_OBJ.console, level, function(originalConsoleMethod) {
        originalConsoleMethods[level] = originalConsoleMethod;
        return function(...args) {
          triggerHandlers("console", { args, level });
          const log = originalConsoleMethods[level];
          log && log.apply(GLOBAL_OBJ.console, args);
        };
      });
    });
  }
  function instrumentFetch() {
    if (!supportsNativeFetch()) {
      return;
    }
    fill(GLOBAL_OBJ, "fetch", function(originalFetch) {
      return function(...args) {
        const { method, url } = parseFetchArgs(args);
        const handlerData = {
          args,
          fetchData: {
            method,
            url
          },
          startTimestamp: Date.now()
        };
        triggerHandlers("fetch", __spreadValues({}, handlerData));
        return originalFetch.apply(GLOBAL_OBJ, args).then(
          (response) => {
            triggerHandlers("fetch", __spreadProps(__spreadValues({}, handlerData), {
              endTimestamp: Date.now(),
              response
            }));
            return response;
          },
          (error) => {
            triggerHandlers("fetch", __spreadProps(__spreadValues({}, handlerData), {
              endTimestamp: Date.now(),
              error
            }));
            throw error;
          }
        );
      };
    });
  }
  function hasProp(obj, prop) {
    return !!obj && typeof obj === "object" && !!obj[prop];
  }
  function getUrlFromResource(resource) {
    if (typeof resource === "string") {
      return resource;
    }
    if (!resource) {
      return "";
    }
    if (hasProp(resource, "url")) {
      return resource.url;
    }
    if (resource.toString) {
      return resource.toString();
    }
    return "";
  }
  function parseFetchArgs(fetchArgs) {
    if (fetchArgs.length === 0) {
      return { method: "GET", url: "" };
    }
    if (fetchArgs.length === 2) {
      const [url, options] = fetchArgs;
      return {
        url: getUrlFromResource(url),
        method: hasProp(options, "method") ? String(options.method).toUpperCase() : "GET"
      };
    }
    const arg = fetchArgs[0];
    return {
      url: getUrlFromResource(arg),
      method: hasProp(arg, "method") ? String(arg.method).toUpperCase() : "GET"
    };
  }
  function instrumentXHR() {
    if (!WINDOW4.XMLHttpRequest) {
      return;
    }
    const xhrproto = XMLHttpRequest.prototype;
    fill(xhrproto, "open", function(originalOpen) {
      return function(...args) {
        const startTimestamp = Date.now();
        const url = args[1];
        const xhrInfo = this[SENTRY_XHR_DATA_KEY] = {
          method: isString(args[0]) ? args[0].toUpperCase() : args[0],
          url: args[1],
          request_headers: {}
        };
        if (isString(url) && xhrInfo.method === "POST" && url.match(/sentry_key/)) {
          this.__sentry_own_request__ = true;
        }
        const onreadystatechangeHandler = () => {
          const xhrInfo2 = this[SENTRY_XHR_DATA_KEY];
          if (!xhrInfo2) {
            return;
          }
          if (this.readyState === 4) {
            try {
              xhrInfo2.status_code = this.status;
            } catch (e) {
            }
            triggerHandlers("xhr", {
              args,
              endTimestamp: Date.now(),
              startTimestamp,
              xhr: this
            });
          }
        };
        if ("onreadystatechange" in this && typeof this.onreadystatechange === "function") {
          fill(this, "onreadystatechange", function(original) {
            return function(...readyStateArgs) {
              onreadystatechangeHandler();
              return original.apply(this, readyStateArgs);
            };
          });
        } else {
          this.addEventListener("readystatechange", onreadystatechangeHandler);
        }
        fill(this, "setRequestHeader", function(original) {
          return function(...setRequestHeaderArgs) {
            const [header, value] = setRequestHeaderArgs;
            const xhrInfo2 = this[SENTRY_XHR_DATA_KEY];
            if (xhrInfo2) {
              xhrInfo2.request_headers[header.toLowerCase()] = value;
            }
            return original.apply(this, setRequestHeaderArgs);
          };
        });
        return originalOpen.apply(this, args);
      };
    });
    fill(xhrproto, "send", function(originalSend) {
      return function(...args) {
        const sentryXhrData = this[SENTRY_XHR_DATA_KEY];
        if (sentryXhrData && args[0] !== void 0) {
          sentryXhrData.body = args[0];
        }
        triggerHandlers("xhr", {
          args,
          startTimestamp: Date.now(),
          xhr: this
        });
        return originalSend.apply(this, args);
      };
    });
  }
  var lastHref;
  function instrumentHistory() {
    if (!supportsHistory()) {
      return;
    }
    const oldOnPopState = WINDOW4.onpopstate;
    WINDOW4.onpopstate = function(...args) {
      const to = WINDOW4.location.href;
      const from = lastHref;
      lastHref = to;
      triggerHandlers("history", {
        from,
        to
      });
      if (oldOnPopState) {
        try {
          return oldOnPopState.apply(this, args);
        } catch (_oO) {
        }
      }
    };
    function historyReplacementFunction(originalHistoryFunction) {
      return function(...args) {
        const url = args.length > 2 ? args[2] : void 0;
        if (url) {
          const from = lastHref;
          const to = String(url);
          lastHref = to;
          triggerHandlers("history", {
            from,
            to
          });
        }
        return originalHistoryFunction.apply(this, args);
      };
    }
    fill(WINDOW4.history, "pushState", historyReplacementFunction);
    fill(WINDOW4.history, "replaceState", historyReplacementFunction);
  }
  var DEBOUNCE_DURATION = 1e3;
  var debounceTimerID;
  var lastCapturedEventType;
  var lastCapturedEventTargetId;
  function isSimilarToLastCapturedEvent(event) {
    if (event.type !== lastCapturedEventType) {
      return false;
    }
    try {
      if (!event.target || event.target._sentryId !== lastCapturedEventTargetId) {
        return false;
      }
    } catch (e) {
    }
    return true;
  }
  function shouldSkipDOMEvent(eventType, target) {
    if (eventType !== "keypress") {
      return false;
    }
    if (!target || !target.tagName) {
      return true;
    }
    if (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable) {
      return false;
    }
    return true;
  }
  function getEventTarget(event) {
    try {
      return event.target;
    } catch (e) {
      return null;
    }
  }
  function makeDOMEventHandler(handler, globalListener = false) {
    return (event) => {
      if (!event || event["_sentryCaptured"]) {
        return;
      }
      const target = getEventTarget(event);
      if (shouldSkipDOMEvent(event.type, target)) {
        return;
      }
      addNonEnumerableProperty(event, "_sentryCaptured", true);
      if (target && !target._sentryId) {
        addNonEnumerableProperty(target, "_sentryId", uuid4());
      }
      const name = event.type === "keypress" ? "input" : event.type;
      if (!isSimilarToLastCapturedEvent(event)) {
        handler({
          event,
          name,
          global: globalListener
        });
        lastCapturedEventType = event.type;
        lastCapturedEventTargetId = target ? target._sentryId : void 0;
      }
      clearTimeout(debounceTimerID);
      debounceTimerID = WINDOW4.setTimeout(() => {
        lastCapturedEventTargetId = void 0;
        lastCapturedEventType = void 0;
      }, DEBOUNCE_DURATION);
    };
  }
  function instrumentDOM() {
    if (!WINDOW4.document) {
      return;
    }
    const triggerDOMHandler = triggerHandlers.bind(null, "dom");
    const globalDOMEventHandler = makeDOMEventHandler(triggerDOMHandler, true);
    WINDOW4.document.addEventListener("click", globalDOMEventHandler, false);
    WINDOW4.document.addEventListener("keypress", globalDOMEventHandler, false);
    ["EventTarget", "Node"].forEach((target) => {
      const proto = WINDOW4[target] && WINDOW4[target].prototype;
      if (!proto || !proto.hasOwnProperty || !proto.hasOwnProperty("addEventListener")) {
        return;
      }
      fill(proto, "addEventListener", function(originalAddEventListener) {
        return function(type, listener, options) {
          if (type === "click" || type == "keypress") {
            try {
              const el = this;
              const handlers2 = el.__sentry_instrumentation_handlers__ = el.__sentry_instrumentation_handlers__ || {};
              const handlerForType = handlers2[type] = handlers2[type] || { refCount: 0 };
              if (!handlerForType.handler) {
                const handler = makeDOMEventHandler(triggerDOMHandler);
                handlerForType.handler = handler;
                originalAddEventListener.call(this, type, handler, options);
              }
              handlerForType.refCount++;
            } catch (e) {
            }
          }
          return originalAddEventListener.call(this, type, listener, options);
        };
      });
      fill(
        proto,
        "removeEventListener",
        function(originalRemoveEventListener) {
          return function(type, listener, options) {
            if (type === "click" || type == "keypress") {
              try {
                const el = this;
                const handlers2 = el.__sentry_instrumentation_handlers__ || {};
                const handlerForType = handlers2[type];
                if (handlerForType) {
                  handlerForType.refCount--;
                  if (handlerForType.refCount <= 0) {
                    originalRemoveEventListener.call(this, type, handlerForType.handler, options);
                    handlerForType.handler = void 0;
                    delete handlers2[type];
                  }
                  if (Object.keys(handlers2).length === 0) {
                    delete el.__sentry_instrumentation_handlers__;
                  }
                }
              } catch (e) {
              }
            }
            return originalRemoveEventListener.call(this, type, listener, options);
          };
        }
      );
    });
  }
  var _oldOnErrorHandler = null;
  function instrumentError() {
    _oldOnErrorHandler = WINDOW4.onerror;
    WINDOW4.onerror = function(msg, url, line, column, error) {
      triggerHandlers("error", {
        column,
        error,
        line,
        msg,
        url
      });
      if (_oldOnErrorHandler && !_oldOnErrorHandler.__SENTRY_LOADER__) {
        return _oldOnErrorHandler.apply(this, arguments);
      }
      return false;
    };
    WINDOW4.onerror.__SENTRY_INSTRUMENTED__ = true;
  }
  var _oldOnUnhandledRejectionHandler = null;
  function instrumentUnhandledRejection() {
    _oldOnUnhandledRejectionHandler = WINDOW4.onunhandledrejection;
    WINDOW4.onunhandledrejection = function(e) {
      triggerHandlers("unhandledrejection", e);
      if (_oldOnUnhandledRejectionHandler && !_oldOnUnhandledRejectionHandler.__SENTRY_LOADER__) {
        return _oldOnUnhandledRejectionHandler.apply(this, arguments);
      }
      return true;
    };
    WINDOW4.onunhandledrejection.__SENTRY_INSTRUMENTED__ = true;
  }

  // node_modules/@sentry/utils/esm/env.js
  function isBrowserBundle() {
    return typeof __SENTRY_BROWSER_BUNDLE__ !== "undefined" && !!__SENTRY_BROWSER_BUNDLE__;
  }
  function getSDKSource() {
    return "npm";
  }

  // node_modules/@sentry/utils/esm/node.js
  function isNodeEnv() {
    return !isBrowserBundle() && Object.prototype.toString.call(typeof process !== "undefined" ? process : 0) === "[object process]";
  }
  function dynamicRequire(mod, request) {
    return mod.require(request);
  }

  // node_modules/@sentry/utils/esm/memo.js
  function memoBuilder() {
    const hasWeakSet = typeof WeakSet === "function";
    const inner = hasWeakSet ? /* @__PURE__ */ new WeakSet() : [];
    function memoize(obj) {
      if (hasWeakSet) {
        if (inner.has(obj)) {
          return true;
        }
        inner.add(obj);
        return false;
      }
      for (let i = 0; i < inner.length; i++) {
        const value = inner[i];
        if (value === obj) {
          return true;
        }
      }
      inner.push(obj);
      return false;
    }
    function unmemoize(obj) {
      if (hasWeakSet) {
        inner.delete(obj);
      } else {
        for (let i = 0; i < inner.length; i++) {
          if (inner[i] === obj) {
            inner.splice(i, 1);
            break;
          }
        }
      }
    }
    return [memoize, unmemoize];
  }

  // node_modules/@sentry/utils/esm/normalize.js
  function normalize(input, depth = 100, maxProperties = Infinity) {
    try {
      return visit("", input, depth, maxProperties);
    } catch (err) {
      return { ERROR: `**non-serializable** (${err})` };
    }
  }
  function normalizeToSize(object, depth = 3, maxSize = 100 * 1024) {
    const normalized = normalize(object, depth);
    if (jsonSize(normalized) > maxSize) {
      return normalizeToSize(object, depth - 1, maxSize);
    }
    return normalized;
  }
  function visit(key, value, depth = Infinity, maxProperties = Infinity, memo = memoBuilder()) {
    const [memoize, unmemoize] = memo;
    if (value == null || ["number", "boolean", "string"].includes(typeof value) && !isNaN2(value)) {
      return value;
    }
    const stringified = stringifyValue(key, value);
    if (!stringified.startsWith("[object ")) {
      return stringified;
    }
    if (value["__sentry_skip_normalization__"]) {
      return value;
    }
    const remainingDepth = typeof value["__sentry_override_normalization_depth__"] === "number" ? value["__sentry_override_normalization_depth__"] : depth;
    if (remainingDepth === 0) {
      return stringified.replace("object ", "");
    }
    if (memoize(value)) {
      return "[Circular ~]";
    }
    const valueWithToJSON = value;
    if (valueWithToJSON && typeof valueWithToJSON.toJSON === "function") {
      try {
        const jsonValue = valueWithToJSON.toJSON();
        return visit("", jsonValue, remainingDepth - 1, maxProperties, memo);
      } catch (err) {
      }
    }
    const normalized = Array.isArray(value) ? [] : {};
    let numAdded = 0;
    const visitable = convertToPlainObject(value);
    for (const visitKey in visitable) {
      if (!Object.prototype.hasOwnProperty.call(visitable, visitKey)) {
        continue;
      }
      if (numAdded >= maxProperties) {
        normalized[visitKey] = "[MaxProperties ~]";
        break;
      }
      const visitValue = visitable[visitKey];
      normalized[visitKey] = visit(visitKey, visitValue, remainingDepth - 1, maxProperties, memo);
      numAdded++;
    }
    unmemoize(value);
    return normalized;
  }
  function stringifyValue(key, value) {
    try {
      if (key === "domain" && value && typeof value === "object" && value._events) {
        return "[Domain]";
      }
      if (key === "domainEmitter") {
        return "[DomainEmitter]";
      }
      if (typeof global !== "undefined" && value === global) {
        return "[Global]";
      }
      if (typeof window !== "undefined" && value === window) {
        return "[Window]";
      }
      if (typeof document !== "undefined" && value === document) {
        return "[Document]";
      }
      if (isVueViewModel(value)) {
        return "[VueViewModel]";
      }
      if (isSyntheticEvent(value)) {
        return "[SyntheticEvent]";
      }
      if (typeof value === "number" && value !== value) {
        return "[NaN]";
      }
      if (typeof value === "function") {
        return `[Function: ${getFunctionName(value)}]`;
      }
      if (typeof value === "symbol") {
        return `[${String(value)}]`;
      }
      if (typeof value === "bigint") {
        return `[BigInt: ${String(value)}]`;
      }
      const objName = getConstructorName(value);
      if (/^HTML(\w*)Element$/.test(objName)) {
        return `[HTMLElement: ${objName}]`;
      }
      return `[object ${objName}]`;
    } catch (err) {
      return `**non-serializable** (${err})`;
    }
  }
  function getConstructorName(value) {
    const prototype = Object.getPrototypeOf(value);
    return prototype ? prototype.constructor.name : "null prototype";
  }
  function utf8Length(value) {
    return ~-encodeURI(value).split(/%..|./).length;
  }
  function jsonSize(value) {
    return utf8Length(JSON.stringify(value));
  }

  // node_modules/@sentry/utils/esm/syncpromise.js
  var States;
  (function(States2) {
    const PENDING = 0;
    States2[States2["PENDING"] = PENDING] = "PENDING";
    const RESOLVED = 1;
    States2[States2["RESOLVED"] = RESOLVED] = "RESOLVED";
    const REJECTED = 2;
    States2[States2["REJECTED"] = REJECTED] = "REJECTED";
  })(States || (States = {}));
  function resolvedSyncPromise(value) {
    return new SyncPromise((resolve) => {
      resolve(value);
    });
  }
  function rejectedSyncPromise(reason) {
    return new SyncPromise((_, reject) => {
      reject(reason);
    });
  }
  var SyncPromise = class {
    constructor(executor) {
      SyncPromise.prototype.__init.call(this);
      SyncPromise.prototype.__init2.call(this);
      SyncPromise.prototype.__init3.call(this);
      SyncPromise.prototype.__init4.call(this);
      this._state = States.PENDING;
      this._handlers = [];
      try {
        executor(this._resolve, this._reject);
      } catch (e) {
        this._reject(e);
      }
    }
    then(onfulfilled, onrejected) {
      return new SyncPromise((resolve, reject) => {
        this._handlers.push([
          false,
          (result) => {
            if (!onfulfilled) {
              resolve(result);
            } else {
              try {
                resolve(onfulfilled(result));
              } catch (e) {
                reject(e);
              }
            }
          },
          (reason) => {
            if (!onrejected) {
              reject(reason);
            } else {
              try {
                resolve(onrejected(reason));
              } catch (e) {
                reject(e);
              }
            }
          }
        ]);
        this._executeHandlers();
      });
    }
    catch(onrejected) {
      return this.then((val) => val, onrejected);
    }
    finally(onfinally) {
      return new SyncPromise((resolve, reject) => {
        let val;
        let isRejected;
        return this.then(
          (value) => {
            isRejected = false;
            val = value;
            if (onfinally) {
              onfinally();
            }
          },
          (reason) => {
            isRejected = true;
            val = reason;
            if (onfinally) {
              onfinally();
            }
          }
        ).then(() => {
          if (isRejected) {
            reject(val);
            return;
          }
          resolve(val);
        });
      });
    }
    __init() {
      this._resolve = (value) => {
        this._setResult(States.RESOLVED, value);
      };
    }
    __init2() {
      this._reject = (reason) => {
        this._setResult(States.REJECTED, reason);
      };
    }
    __init3() {
      this._setResult = (state, value) => {
        if (this._state !== States.PENDING) {
          return;
        }
        if (isThenable(value)) {
          void value.then(this._resolve, this._reject);
          return;
        }
        this._state = state;
        this._value = value;
        this._executeHandlers();
      };
    }
    __init4() {
      this._executeHandlers = () => {
        if (this._state === States.PENDING) {
          return;
        }
        const cachedHandlers = this._handlers.slice();
        this._handlers = [];
        cachedHandlers.forEach((handler) => {
          if (handler[0]) {
            return;
          }
          if (this._state === States.RESOLVED) {
            handler[1](this._value);
          }
          if (this._state === States.REJECTED) {
            handler[2](this._value);
          }
          handler[0] = true;
        });
      };
    }
  };

  // node_modules/@sentry/utils/esm/promisebuffer.js
  function makePromiseBuffer(limit) {
    const buffer = [];
    function isReady() {
      return limit === void 0 || buffer.length < limit;
    }
    function remove(task) {
      return buffer.splice(buffer.indexOf(task), 1)[0];
    }
    function add(taskProducer) {
      if (!isReady()) {
        return rejectedSyncPromise(new SentryError("Not adding Promise because buffer limit was reached."));
      }
      const task = taskProducer();
      if (buffer.indexOf(task) === -1) {
        buffer.push(task);
      }
      void task.then(() => remove(task)).then(
        null,
        () => remove(task).then(null, () => {
        })
      );
      return task;
    }
    function drain(timeout) {
      return new SyncPromise((resolve, reject) => {
        let counter = buffer.length;
        if (!counter) {
          return resolve(true);
        }
        const capturedSetTimeout = setTimeout(() => {
          if (timeout && timeout > 0) {
            resolve(false);
          }
        }, timeout);
        buffer.forEach((item) => {
          void resolvedSyncPromise(item).then(() => {
            if (!--counter) {
              clearTimeout(capturedSetTimeout);
              resolve(true);
            }
          }, reject);
        });
      });
    }
    return {
      $: buffer,
      add,
      drain
    };
  }

  // node_modules/@sentry/utils/esm/url.js
  function parseUrl(url) {
    if (!url) {
      return {};
    }
    const match = url.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
    if (!match) {
      return {};
    }
    const query = match[6] || "";
    const fragment = match[8] || "";
    return {
      host: match[4],
      path: match[5],
      protocol: match[2],
      search: query,
      hash: fragment,
      relative: match[5] + query + fragment
    };
  }

  // node_modules/@sentry/utils/esm/severity.js
  var validSeverityLevels = ["fatal", "error", "warning", "log", "info", "debug"];
  function severityLevelFromString(level) {
    return level === "warn" ? "warning" : validSeverityLevels.includes(level) ? level : "log";
  }

  // node_modules/@sentry/utils/esm/time.js
  var WINDOW5 = getGlobalObject();
  var dateTimestampSource = {
    nowSeconds: () => Date.now() / 1e3
  };
  function getBrowserPerformance() {
    const { performance } = WINDOW5;
    if (!performance || !performance.now) {
      return void 0;
    }
    const timeOrigin = Date.now() - performance.now();
    return {
      now: () => performance.now(),
      timeOrigin
    };
  }
  function getNodePerformance() {
    try {
      const perfHooks = dynamicRequire(module, "perf_hooks");
      return perfHooks.performance;
    } catch (_) {
      return void 0;
    }
  }
  var platformPerformance = isNodeEnv() ? getNodePerformance() : getBrowserPerformance();
  var timestampSource = platformPerformance === void 0 ? dateTimestampSource : {
    nowSeconds: () => (platformPerformance.timeOrigin + platformPerformance.now()) / 1e3
  };
  var dateTimestampInSeconds = dateTimestampSource.nowSeconds.bind(dateTimestampSource);
  var timestampInSeconds = timestampSource.nowSeconds.bind(timestampSource);
  var _browserPerformanceTimeOriginMode;
  var browserPerformanceTimeOrigin = (() => {
    const { performance } = WINDOW5;
    if (!performance || !performance.now) {
      _browserPerformanceTimeOriginMode = "none";
      return void 0;
    }
    const threshold = 3600 * 1e3;
    const performanceNow = performance.now();
    const dateNow = Date.now();
    const timeOriginDelta = performance.timeOrigin ? Math.abs(performance.timeOrigin + performanceNow - dateNow) : threshold;
    const timeOriginIsReliable = timeOriginDelta < threshold;
    const navigationStart = performance.timing && performance.timing.navigationStart;
    const hasNavigationStart = typeof navigationStart === "number";
    const navigationStartDelta = hasNavigationStart ? Math.abs(navigationStart + performanceNow - dateNow) : threshold;
    const navigationStartIsReliable = navigationStartDelta < threshold;
    if (timeOriginIsReliable || navigationStartIsReliable) {
      if (timeOriginDelta <= navigationStartDelta) {
        _browserPerformanceTimeOriginMode = "timeOrigin";
        return performance.timeOrigin;
      } else {
        _browserPerformanceTimeOriginMode = "navigationStart";
        return navigationStart;
      }
    }
    _browserPerformanceTimeOriginMode = "dateNow";
    return dateNow;
  })();

  // node_modules/@sentry/utils/esm/envelope.js
  function createEnvelope(headers, items = []) {
    return [headers, items];
  }
  function addItemToEnvelope(envelope, newItem) {
    const [headers, items] = envelope;
    return [headers, [...items, newItem]];
  }
  function forEachEnvelopeItem(envelope, callback) {
    const envelopeItems = envelope[1];
    for (const envelopeItem of envelopeItems) {
      const envelopeItemType = envelopeItem[0].type;
      const result = callback(envelopeItem, envelopeItemType);
      if (result) {
        return true;
      }
    }
    return false;
  }
  function encodeUTF8(input, textEncoder) {
    const utf8 = textEncoder || new TextEncoder();
    return utf8.encode(input);
  }
  function serializeEnvelope(envelope, textEncoder) {
    const [envHeaders, items] = envelope;
    let parts = JSON.stringify(envHeaders);
    function append(next) {
      if (typeof parts === "string") {
        parts = typeof next === "string" ? parts + next : [encodeUTF8(parts, textEncoder), next];
      } else {
        parts.push(typeof next === "string" ? encodeUTF8(next, textEncoder) : next);
      }
    }
    for (const item of items) {
      const [itemHeaders, payload] = item;
      append(`
${JSON.stringify(itemHeaders)}
`);
      if (typeof payload === "string" || payload instanceof Uint8Array) {
        append(payload);
      } else {
        let stringifiedPayload;
        try {
          stringifiedPayload = JSON.stringify(payload);
        } catch (e) {
          stringifiedPayload = JSON.stringify(normalize(payload));
        }
        append(stringifiedPayload);
      }
    }
    return typeof parts === "string" ? parts : concatBuffers(parts);
  }
  function concatBuffers(buffers) {
    const totalLength = buffers.reduce((acc, buf) => acc + buf.length, 0);
    const merged = new Uint8Array(totalLength);
    let offset = 0;
    for (const buffer of buffers) {
      merged.set(buffer, offset);
      offset += buffer.length;
    }
    return merged;
  }
  function createAttachmentEnvelopeItem(attachment, textEncoder) {
    const buffer = typeof attachment.data === "string" ? encodeUTF8(attachment.data, textEncoder) : attachment.data;
    return [
      dropUndefinedKeys({
        type: "attachment",
        length: buffer.length,
        filename: attachment.filename,
        content_type: attachment.contentType,
        attachment_type: attachment.attachmentType
      }),
      buffer
    ];
  }
  var ITEM_TYPE_TO_DATA_CATEGORY_MAP = {
    session: "session",
    sessions: "session",
    attachment: "attachment",
    transaction: "transaction",
    event: "error",
    client_report: "internal",
    user_report: "default",
    profile: "profile",
    replay_event: "replay",
    replay_recording: "replay",
    check_in: "monitor",
    feedback: "feedback",
    statsd: "unknown"
  };
  function envelopeItemTypeToDataCategory(type) {
    return ITEM_TYPE_TO_DATA_CATEGORY_MAP[type];
  }
  function getSdkMetadataForEnvelopeHeader(metadataOrEvent) {
    if (!metadataOrEvent || !metadataOrEvent.sdk) {
      return;
    }
    const { name, version } = metadataOrEvent.sdk;
    return { name, version };
  }
  function createEventEnvelopeHeaders(event, sdkInfo, tunnel, dsn) {
    const dynamicSamplingContext = event.sdkProcessingMetadata && event.sdkProcessingMetadata.dynamicSamplingContext;
    return __spreadValues(__spreadValues(__spreadValues({
      event_id: event.event_id,
      sent_at: new Date().toISOString()
    }, sdkInfo && { sdk: sdkInfo }), !!tunnel && dsn && { dsn: dsnToString(dsn) }), dynamicSamplingContext && {
      trace: dropUndefinedKeys(__spreadValues({}, dynamicSamplingContext))
    });
  }

  // node_modules/@sentry/utils/esm/clientreport.js
  function createClientReportEnvelope(discarded_events, dsn, timestamp) {
    const clientReportItem = [
      { type: "client_report" },
      {
        timestamp: timestamp || dateTimestampInSeconds(),
        discarded_events
      }
    ];
    return createEnvelope(dsn ? { dsn } : {}, [clientReportItem]);
  }

  // node_modules/@sentry/utils/esm/ratelimit.js
  var DEFAULT_RETRY_AFTER = 60 * 1e3;
  function parseRetryAfterHeader(header, now = Date.now()) {
    const headerDelay = parseInt(`${header}`, 10);
    if (!isNaN(headerDelay)) {
      return headerDelay * 1e3;
    }
    const headerDate = Date.parse(`${header}`);
    if (!isNaN(headerDate)) {
      return headerDate - now;
    }
    return DEFAULT_RETRY_AFTER;
  }
  function disabledUntil(limits, category) {
    return limits[category] || limits.all || 0;
  }
  function isRateLimited(limits, category, now = Date.now()) {
    return disabledUntil(limits, category) > now;
  }
  function updateRateLimits(limits, { statusCode, headers }, now = Date.now()) {
    const updatedRateLimits = __spreadValues({}, limits);
    const rateLimitHeader = headers && headers["x-sentry-rate-limits"];
    const retryAfterHeader = headers && headers["retry-after"];
    if (rateLimitHeader) {
      for (const limit of rateLimitHeader.trim().split(",")) {
        const [retryAfter, categories] = limit.split(":", 2);
        const headerDelay = parseInt(retryAfter, 10);
        const delay = (!isNaN(headerDelay) ? headerDelay : 60) * 1e3;
        if (!categories) {
          updatedRateLimits.all = now + delay;
        } else {
          for (const category of categories.split(";")) {
            updatedRateLimits[category] = now + delay;
          }
        }
      }
    } else if (retryAfterHeader) {
      updatedRateLimits.all = now + parseRetryAfterHeader(retryAfterHeader, now);
    } else if (statusCode === 429) {
      updatedRateLimits.all = now + 60 * 1e3;
    }
    return updatedRateLimits;
  }

  // node_modules/@sentry/utils/esm/eventbuilder.js
  function parseStackFrames(stackParser, error) {
    return stackParser(error.stack || "", 1);
  }
  function exceptionFromError(stackParser, error) {
    const exception = {
      type: error.name || error.constructor.name,
      value: error.message
    };
    const frames = parseStackFrames(stackParser, error);
    if (frames.length) {
      exception.stacktrace = { frames };
    }
    return exception;
  }

  // node_modules/@sentry/core/esm/constants.js
  var DEFAULT_ENVIRONMENT = "production";

  // node_modules/@sentry/core/esm/eventProcessors.js
  function getGlobalEventProcessors() {
    return getGlobalSingleton("globalEventProcessors", () => []);
  }
  function addGlobalEventProcessor(callback) {
    getGlobalEventProcessors().push(callback);
  }
  function notifyEventProcessors(processors, event, hint, index = 0) {
    return new SyncPromise((resolve, reject) => {
      const processor = processors[index];
      if (event === null || typeof processor !== "function") {
        resolve(event);
      } else {
        const result = processor(__spreadValues({}, event), hint);
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && processor.id && result === null && logger.log(`Event processor "${processor.id}" dropped event`);
        if (isThenable(result)) {
          void result.then((final) => notifyEventProcessors(processors, final, hint, index + 1).then(resolve)).then(null, reject);
        } else {
          void notifyEventProcessors(processors, result, hint, index + 1).then(resolve).then(null, reject);
        }
      }
    });
  }

  // node_modules/@sentry/core/esm/session.js
  function makeSession(context) {
    const startingTime = timestampInSeconds();
    const session = {
      sid: uuid4(),
      init: true,
      timestamp: startingTime,
      started: startingTime,
      duration: 0,
      status: "ok",
      errors: 0,
      ignoreDuration: false,
      toJSON: () => sessionToJSON(session)
    };
    if (context) {
      updateSession(session, context);
    }
    return session;
  }
  function updateSession(session, context = {}) {
    if (context.user) {
      if (!session.ipAddress && context.user.ip_address) {
        session.ipAddress = context.user.ip_address;
      }
      if (!session.did && !context.did) {
        session.did = context.user.id || context.user.email || context.user.username;
      }
    }
    session.timestamp = context.timestamp || timestampInSeconds();
    if (context.abnormal_mechanism) {
      session.abnormal_mechanism = context.abnormal_mechanism;
    }
    if (context.ignoreDuration) {
      session.ignoreDuration = context.ignoreDuration;
    }
    if (context.sid) {
      session.sid = context.sid.length === 32 ? context.sid : uuid4();
    }
    if (context.init !== void 0) {
      session.init = context.init;
    }
    if (!session.did && context.did) {
      session.did = `${context.did}`;
    }
    if (typeof context.started === "number") {
      session.started = context.started;
    }
    if (session.ignoreDuration) {
      session.duration = void 0;
    } else if (typeof context.duration === "number") {
      session.duration = context.duration;
    } else {
      const duration = session.timestamp - session.started;
      session.duration = duration >= 0 ? duration : 0;
    }
    if (context.release) {
      session.release = context.release;
    }
    if (context.environment) {
      session.environment = context.environment;
    }
    if (!session.ipAddress && context.ipAddress) {
      session.ipAddress = context.ipAddress;
    }
    if (!session.userAgent && context.userAgent) {
      session.userAgent = context.userAgent;
    }
    if (typeof context.errors === "number") {
      session.errors = context.errors;
    }
    if (context.status) {
      session.status = context.status;
    }
  }
  function closeSession(session, status) {
    let context = {};
    if (status) {
      context = { status };
    } else if (session.status === "ok") {
      context = { status: "exited" };
    }
    updateSession(session, context);
  }
  function sessionToJSON(session) {
    return dropUndefinedKeys({
      sid: `${session.sid}`,
      init: session.init,
      started: new Date(session.started * 1e3).toISOString(),
      timestamp: new Date(session.timestamp * 1e3).toISOString(),
      status: session.status,
      errors: session.errors,
      did: typeof session.did === "number" || typeof session.did === "string" ? `${session.did}` : void 0,
      duration: session.duration,
      abnormal_mechanism: session.abnormal_mechanism,
      attrs: {
        release: session.release,
        environment: session.environment,
        ip_address: session.ipAddress,
        user_agent: session.userAgent
      }
    });
  }

  // node_modules/@sentry/core/esm/scope.js
  var DEFAULT_MAX_BREADCRUMBS = 100;
  var Scope = class {
    constructor() {
      this._notifyingListeners = false;
      this._scopeListeners = [];
      this._eventProcessors = [];
      this._breadcrumbs = [];
      this._attachments = [];
      this._user = {};
      this._tags = {};
      this._extra = {};
      this._contexts = {};
      this._sdkProcessingMetadata = {};
      this._propagationContext = generatePropagationContext();
    }
    static clone(scope) {
      const newScope = new Scope();
      if (scope) {
        newScope._breadcrumbs = [...scope._breadcrumbs];
        newScope._tags = __spreadValues({}, scope._tags);
        newScope._extra = __spreadValues({}, scope._extra);
        newScope._contexts = __spreadValues({}, scope._contexts);
        newScope._user = scope._user;
        newScope._level = scope._level;
        newScope._span = scope._span;
        newScope._session = scope._session;
        newScope._transactionName = scope._transactionName;
        newScope._fingerprint = scope._fingerprint;
        newScope._eventProcessors = [...scope._eventProcessors];
        newScope._requestSession = scope._requestSession;
        newScope._attachments = [...scope._attachments];
        newScope._sdkProcessingMetadata = __spreadValues({}, scope._sdkProcessingMetadata);
        newScope._propagationContext = __spreadValues({}, scope._propagationContext);
      }
      return newScope;
    }
    addScopeListener(callback) {
      this._scopeListeners.push(callback);
    }
    addEventProcessor(callback) {
      this._eventProcessors.push(callback);
      return this;
    }
    setUser(user) {
      this._user = user || {};
      if (this._session) {
        updateSession(this._session, { user });
      }
      this._notifyScopeListeners();
      return this;
    }
    getUser() {
      return this._user;
    }
    getRequestSession() {
      return this._requestSession;
    }
    setRequestSession(requestSession) {
      this._requestSession = requestSession;
      return this;
    }
    setTags(tags) {
      this._tags = __spreadValues(__spreadValues({}, this._tags), tags);
      this._notifyScopeListeners();
      return this;
    }
    setTag(key, value) {
      this._tags = __spreadProps(__spreadValues({}, this._tags), { [key]: value });
      this._notifyScopeListeners();
      return this;
    }
    setExtras(extras) {
      this._extra = __spreadValues(__spreadValues({}, this._extra), extras);
      this._notifyScopeListeners();
      return this;
    }
    setExtra(key, extra) {
      this._extra = __spreadProps(__spreadValues({}, this._extra), { [key]: extra });
      this._notifyScopeListeners();
      return this;
    }
    setFingerprint(fingerprint) {
      this._fingerprint = fingerprint;
      this._notifyScopeListeners();
      return this;
    }
    setLevel(level) {
      this._level = level;
      this._notifyScopeListeners();
      return this;
    }
    setTransactionName(name) {
      this._transactionName = name;
      this._notifyScopeListeners();
      return this;
    }
    setContext(key, context) {
      if (context === null) {
        delete this._contexts[key];
      } else {
        this._contexts[key] = context;
      }
      this._notifyScopeListeners();
      return this;
    }
    setSpan(span) {
      this._span = span;
      this._notifyScopeListeners();
      return this;
    }
    getSpan() {
      return this._span;
    }
    getTransaction() {
      const span = this.getSpan();
      return span && span.transaction;
    }
    setSession(session) {
      if (!session) {
        delete this._session;
      } else {
        this._session = session;
      }
      this._notifyScopeListeners();
      return this;
    }
    getSession() {
      return this._session;
    }
    update(captureContext) {
      if (!captureContext) {
        return this;
      }
      if (typeof captureContext === "function") {
        const updatedScope = captureContext(this);
        return updatedScope instanceof Scope ? updatedScope : this;
      }
      if (captureContext instanceof Scope) {
        this._tags = __spreadValues(__spreadValues({}, this._tags), captureContext._tags);
        this._extra = __spreadValues(__spreadValues({}, this._extra), captureContext._extra);
        this._contexts = __spreadValues(__spreadValues({}, this._contexts), captureContext._contexts);
        if (captureContext._user && Object.keys(captureContext._user).length) {
          this._user = captureContext._user;
        }
        if (captureContext._level) {
          this._level = captureContext._level;
        }
        if (captureContext._fingerprint) {
          this._fingerprint = captureContext._fingerprint;
        }
        if (captureContext._requestSession) {
          this._requestSession = captureContext._requestSession;
        }
        if (captureContext._propagationContext) {
          this._propagationContext = captureContext._propagationContext;
        }
      } else if (isPlainObject(captureContext)) {
        captureContext = captureContext;
        this._tags = __spreadValues(__spreadValues({}, this._tags), captureContext.tags);
        this._extra = __spreadValues(__spreadValues({}, this._extra), captureContext.extra);
        this._contexts = __spreadValues(__spreadValues({}, this._contexts), captureContext.contexts);
        if (captureContext.user) {
          this._user = captureContext.user;
        }
        if (captureContext.level) {
          this._level = captureContext.level;
        }
        if (captureContext.fingerprint) {
          this._fingerprint = captureContext.fingerprint;
        }
        if (captureContext.requestSession) {
          this._requestSession = captureContext.requestSession;
        }
        if (captureContext.propagationContext) {
          this._propagationContext = captureContext.propagationContext;
        }
      }
      return this;
    }
    clear() {
      this._breadcrumbs = [];
      this._tags = {};
      this._extra = {};
      this._user = {};
      this._contexts = {};
      this._level = void 0;
      this._transactionName = void 0;
      this._fingerprint = void 0;
      this._requestSession = void 0;
      this._span = void 0;
      this._session = void 0;
      this._notifyScopeListeners();
      this._attachments = [];
      this._propagationContext = generatePropagationContext();
      return this;
    }
    addBreadcrumb(breadcrumb, maxBreadcrumbs) {
      const maxCrumbs = typeof maxBreadcrumbs === "number" ? maxBreadcrumbs : DEFAULT_MAX_BREADCRUMBS;
      if (maxCrumbs <= 0) {
        return this;
      }
      const mergedBreadcrumb = __spreadValues({
        timestamp: dateTimestampInSeconds()
      }, breadcrumb);
      const breadcrumbs = this._breadcrumbs;
      breadcrumbs.push(mergedBreadcrumb);
      this._breadcrumbs = breadcrumbs.length > maxCrumbs ? breadcrumbs.slice(-maxCrumbs) : breadcrumbs;
      this._notifyScopeListeners();
      return this;
    }
    getLastBreadcrumb() {
      return this._breadcrumbs[this._breadcrumbs.length - 1];
    }
    clearBreadcrumbs() {
      this._breadcrumbs = [];
      this._notifyScopeListeners();
      return this;
    }
    addAttachment(attachment) {
      this._attachments.push(attachment);
      return this;
    }
    getAttachments() {
      return this._attachments;
    }
    clearAttachments() {
      this._attachments = [];
      return this;
    }
    applyToEvent(event, hint = {}, additionalEventProcessors) {
      if (this._extra && Object.keys(this._extra).length) {
        event.extra = __spreadValues(__spreadValues({}, this._extra), event.extra);
      }
      if (this._tags && Object.keys(this._tags).length) {
        event.tags = __spreadValues(__spreadValues({}, this._tags), event.tags);
      }
      if (this._user && Object.keys(this._user).length) {
        event.user = __spreadValues(__spreadValues({}, this._user), event.user);
      }
      if (this._contexts && Object.keys(this._contexts).length) {
        event.contexts = __spreadValues(__spreadValues({}, this._contexts), event.contexts);
      }
      if (this._level) {
        event.level = this._level;
      }
      if (this._transactionName) {
        event.transaction = this._transactionName;
      }
      if (this._span) {
        event.contexts = __spreadValues({ trace: this._span.getTraceContext() }, event.contexts);
        const transaction = this._span.transaction;
        if (transaction) {
          event.sdkProcessingMetadata = __spreadValues({
            dynamicSamplingContext: transaction.getDynamicSamplingContext()
          }, event.sdkProcessingMetadata);
          const transactionName = transaction.name;
          if (transactionName) {
            event.tags = __spreadValues({ transaction: transactionName }, event.tags);
          }
        }
      }
      this._applyFingerprint(event);
      const scopeBreadcrumbs = this._getBreadcrumbs();
      const breadcrumbs = [...event.breadcrumbs || [], ...scopeBreadcrumbs];
      event.breadcrumbs = breadcrumbs.length > 0 ? breadcrumbs : void 0;
      event.sdkProcessingMetadata = __spreadProps(__spreadValues(__spreadValues({}, event.sdkProcessingMetadata), this._sdkProcessingMetadata), {
        propagationContext: this._propagationContext
      });
      return notifyEventProcessors(
        [...additionalEventProcessors || [], ...getGlobalEventProcessors(), ...this._eventProcessors],
        event,
        hint
      );
    }
    setSDKProcessingMetadata(newData) {
      this._sdkProcessingMetadata = __spreadValues(__spreadValues({}, this._sdkProcessingMetadata), newData);
      return this;
    }
    setPropagationContext(context) {
      this._propagationContext = context;
      return this;
    }
    getPropagationContext() {
      return this._propagationContext;
    }
    _getBreadcrumbs() {
      return this._breadcrumbs;
    }
    _notifyScopeListeners() {
      if (!this._notifyingListeners) {
        this._notifyingListeners = true;
        this._scopeListeners.forEach((callback) => {
          callback(this);
        });
        this._notifyingListeners = false;
      }
    }
    _applyFingerprint(event) {
      event.fingerprint = event.fingerprint ? arrayify(event.fingerprint) : [];
      if (this._fingerprint) {
        event.fingerprint = event.fingerprint.concat(this._fingerprint);
      }
      if (event.fingerprint && !event.fingerprint.length) {
        delete event.fingerprint;
      }
    }
  };
  function generatePropagationContext() {
    return {
      traceId: uuid4(),
      spanId: uuid4().substring(16)
    };
  }

  // node_modules/@sentry/core/esm/hub.js
  var API_VERSION = 4;
  var DEFAULT_BREADCRUMBS = 100;
  var Hub = class {
    constructor(client, scope = new Scope(), _version = API_VERSION) {
      this._version = _version;
      this._stack = [{ scope }];
      if (client) {
        this.bindClient(client);
      }
    }
    isOlderThan(version) {
      return this._version < version;
    }
    bindClient(client) {
      const top = this.getStackTop();
      top.client = client;
      if (client && client.setupIntegrations) {
        client.setupIntegrations();
      }
    }
    pushScope() {
      const scope = Scope.clone(this.getScope());
      this.getStack().push({
        client: this.getClient(),
        scope
      });
      return scope;
    }
    popScope() {
      if (this.getStack().length <= 1)
        return false;
      return !!this.getStack().pop();
    }
    withScope(callback) {
      const scope = this.pushScope();
      try {
        callback(scope);
      } finally {
        this.popScope();
      }
    }
    getClient() {
      return this.getStackTop().client;
    }
    getScope() {
      return this.getStackTop().scope;
    }
    getStack() {
      return this._stack;
    }
    getStackTop() {
      return this._stack[this._stack.length - 1];
    }
    captureException(exception, hint) {
      const eventId = this._lastEventId = hint && hint.event_id ? hint.event_id : uuid4();
      const syntheticException = new Error("Sentry syntheticException");
      this._withClient((client, scope) => {
        client.captureException(
          exception,
          __spreadProps(__spreadValues({
            originalException: exception,
            syntheticException
          }, hint), {
            event_id: eventId
          }),
          scope
        );
      });
      return eventId;
    }
    captureMessage(message, level, hint) {
      const eventId = this._lastEventId = hint && hint.event_id ? hint.event_id : uuid4();
      const syntheticException = new Error(message);
      this._withClient((client, scope) => {
        client.captureMessage(
          message,
          level,
          __spreadProps(__spreadValues({
            originalException: message,
            syntheticException
          }, hint), {
            event_id: eventId
          }),
          scope
        );
      });
      return eventId;
    }
    captureEvent(event, hint) {
      const eventId = hint && hint.event_id ? hint.event_id : uuid4();
      if (!event.type) {
        this._lastEventId = eventId;
      }
      this._withClient((client, scope) => {
        client.captureEvent(event, __spreadProps(__spreadValues({}, hint), { event_id: eventId }), scope);
      });
      return eventId;
    }
    lastEventId() {
      return this._lastEventId;
    }
    addBreadcrumb(breadcrumb, hint) {
      const { scope, client } = this.getStackTop();
      if (!client)
        return;
      const { beforeBreadcrumb = null, maxBreadcrumbs = DEFAULT_BREADCRUMBS } = client.getOptions && client.getOptions() || {};
      if (maxBreadcrumbs <= 0)
        return;
      const timestamp = dateTimestampInSeconds();
      const mergedBreadcrumb = __spreadValues({ timestamp }, breadcrumb);
      const finalBreadcrumb = beforeBreadcrumb ? consoleSandbox(() => beforeBreadcrumb(mergedBreadcrumb, hint)) : mergedBreadcrumb;
      if (finalBreadcrumb === null)
        return;
      if (client.emit) {
        client.emit("beforeAddBreadcrumb", finalBreadcrumb, hint);
      }
      scope.addBreadcrumb(finalBreadcrumb, maxBreadcrumbs);
    }
    setUser(user) {
      this.getScope().setUser(user);
    }
    setTags(tags) {
      this.getScope().setTags(tags);
    }
    setExtras(extras) {
      this.getScope().setExtras(extras);
    }
    setTag(key, value) {
      this.getScope().setTag(key, value);
    }
    setExtra(key, extra) {
      this.getScope().setExtra(key, extra);
    }
    setContext(name, context) {
      this.getScope().setContext(name, context);
    }
    configureScope(callback) {
      const { scope, client } = this.getStackTop();
      if (client) {
        callback(scope);
      }
    }
    run(callback) {
      const oldHub = makeMain(this);
      try {
        callback(this);
      } finally {
        makeMain(oldHub);
      }
    }
    getIntegration(integration) {
      const client = this.getClient();
      if (!client)
        return null;
      try {
        return client.getIntegration(integration);
      } catch (_oO) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn(`Cannot retrieve integration ${integration.id} from the current Hub`);
        return null;
      }
    }
    startTransaction(context, customSamplingContext) {
      const result = this._callExtensionMethod("startTransaction", context, customSamplingContext);
      if ((typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && !result) {
        const client = this.getClient();
        if (!client) {
          console.warn(
            "Tracing extension 'startTransaction' is missing. You should 'init' the SDK before calling 'startTransaction'"
          );
        } else {
          console.warn(`Tracing extension 'startTransaction' has not been added. Call 'addTracingExtensions' before calling 'init':
Sentry.addTracingExtensions();
Sentry.init({...});
`);
        }
      }
      return result;
    }
    traceHeaders() {
      return this._callExtensionMethod("traceHeaders");
    }
    captureSession(endSession = false) {
      if (endSession) {
        return this.endSession();
      }
      this._sendSessionUpdate();
    }
    endSession() {
      const layer = this.getStackTop();
      const scope = layer.scope;
      const session = scope.getSession();
      if (session) {
        closeSession(session);
      }
      this._sendSessionUpdate();
      scope.setSession();
    }
    startSession(context) {
      const { scope, client } = this.getStackTop();
      const { release, environment = DEFAULT_ENVIRONMENT } = client && client.getOptions() || {};
      const { userAgent } = GLOBAL_OBJ.navigator || {};
      const session = makeSession(__spreadValues(__spreadValues({
        release,
        environment,
        user: scope.getUser()
      }, userAgent && { userAgent }), context));
      const currentSession = scope.getSession && scope.getSession();
      if (currentSession && currentSession.status === "ok") {
        updateSession(currentSession, { status: "exited" });
      }
      this.endSession();
      scope.setSession(session);
      return session;
    }
    shouldSendDefaultPii() {
      const client = this.getClient();
      const options = client && client.getOptions();
      return Boolean(options && options.sendDefaultPii);
    }
    _sendSessionUpdate() {
      const { scope, client } = this.getStackTop();
      const session = scope.getSession();
      if (session && client && client.captureSession) {
        client.captureSession(session);
      }
    }
    _withClient(callback) {
      const { scope, client } = this.getStackTop();
      if (client) {
        callback(client, scope);
      }
    }
    _callExtensionMethod(method, ...args) {
      const carrier = getMainCarrier();
      const sentry = carrier.__SENTRY__;
      if (sentry && sentry.extensions && typeof sentry.extensions[method] === "function") {
        return sentry.extensions[method].apply(this, args);
      }
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn(`Extension method ${method} couldn't be found, doing nothing.`);
    }
  };
  function getMainCarrier() {
    GLOBAL_OBJ.__SENTRY__ = GLOBAL_OBJ.__SENTRY__ || {
      extensions: {},
      hub: void 0
    };
    return GLOBAL_OBJ;
  }
  function makeMain(hub) {
    const registry = getMainCarrier();
    const oldHub = getHubFromCarrier(registry);
    setHubOnCarrier(registry, hub);
    return oldHub;
  }
  function getCurrentHub() {
    const registry = getMainCarrier();
    if (registry.__SENTRY__ && registry.__SENTRY__.acs) {
      const hub = registry.__SENTRY__.acs.getCurrentHub();
      if (hub) {
        return hub;
      }
    }
    return getGlobalHub(registry);
  }
  function getGlobalHub(registry = getMainCarrier()) {
    if (!hasHubOnCarrier(registry) || getHubFromCarrier(registry).isOlderThan(API_VERSION)) {
      setHubOnCarrier(registry, new Hub());
    }
    return getHubFromCarrier(registry);
  }
  function hasHubOnCarrier(carrier) {
    return !!(carrier && carrier.__SENTRY__ && carrier.__SENTRY__.hub);
  }
  function getHubFromCarrier(carrier) {
    return getGlobalSingleton("hub", () => new Hub(), carrier);
  }
  function setHubOnCarrier(carrier, hub) {
    if (!carrier)
      return false;
    const __SENTRY__ = carrier.__SENTRY__ = carrier.__SENTRY__ || {};
    __SENTRY__.hub = hub;
    return true;
  }

  // node_modules/@sentry/core/esm/tracing/dynamicSamplingContext.js
  function getDynamicSamplingContextFromClient(trace_id, client, scope) {
    const options = client.getOptions();
    const { publicKey: public_key } = client.getDsn() || {};
    const { segment: user_segment } = scope && scope.getUser() || {};
    const dsc = dropUndefinedKeys({
      environment: options.environment || DEFAULT_ENVIRONMENT,
      release: options.release,
      user_segment,
      public_key,
      trace_id
    });
    client.emit && client.emit("createDsc", dsc);
    return dsc;
  }

  // node_modules/@sentry/core/esm/envelope.js
  function enhanceEventWithSdkInfo(event, sdkInfo) {
    if (!sdkInfo) {
      return event;
    }
    event.sdk = event.sdk || {};
    event.sdk.name = event.sdk.name || sdkInfo.name;
    event.sdk.version = event.sdk.version || sdkInfo.version;
    event.sdk.integrations = [...event.sdk.integrations || [], ...sdkInfo.integrations || []];
    event.sdk.packages = [...event.sdk.packages || [], ...sdkInfo.packages || []];
    return event;
  }
  function createSessionEnvelope(session, dsn, metadata, tunnel) {
    const sdkInfo = getSdkMetadataForEnvelopeHeader(metadata);
    const envelopeHeaders = __spreadValues(__spreadValues({
      sent_at: new Date().toISOString()
    }, sdkInfo && { sdk: sdkInfo }), !!tunnel && dsn && { dsn: dsnToString(dsn) });
    const envelopeItem = "aggregates" in session ? [{ type: "sessions" }, session] : [{ type: "session" }, session.toJSON()];
    return createEnvelope(envelopeHeaders, [envelopeItem]);
  }
  function createEventEnvelope(event, dsn, metadata, tunnel) {
    const sdkInfo = getSdkMetadataForEnvelopeHeader(metadata);
    const eventType = event.type && event.type !== "replay_event" ? event.type : "event";
    enhanceEventWithSdkInfo(event, metadata && metadata.sdk);
    const envelopeHeaders = createEventEnvelopeHeaders(event, sdkInfo, tunnel, dsn);
    delete event.sdkProcessingMetadata;
    const eventItem = [{ type: eventType }, event];
    return createEnvelope(envelopeHeaders, [eventItem]);
  }

  // node_modules/@sentry/core/esm/exports.js
  function captureException(exception, captureContext) {
    return getCurrentHub().captureException(exception, { captureContext });
  }
  function withScope(callback) {
    getCurrentHub().withScope(callback);
  }

  // node_modules/@sentry/core/esm/api.js
  var SENTRY_API_VERSION = "7";
  function getBaseApiEndpoint(dsn) {
    const protocol = dsn.protocol ? `${dsn.protocol}:` : "";
    const port = dsn.port ? `:${dsn.port}` : "";
    return `${protocol}//${dsn.host}${port}${dsn.path ? `/${dsn.path}` : ""}/api/`;
  }
  function _getIngestEndpoint(dsn) {
    return `${getBaseApiEndpoint(dsn)}${dsn.projectId}/envelope/`;
  }
  function _encodedAuth(dsn, sdkInfo) {
    return urlEncode(__spreadValues({
      sentry_key: dsn.publicKey,
      sentry_version: SENTRY_API_VERSION
    }, sdkInfo && { sentry_client: `${sdkInfo.name}/${sdkInfo.version}` }));
  }
  function getEnvelopeEndpointWithUrlEncodedAuth(dsn, tunnelOrOptions = {}) {
    const tunnel = typeof tunnelOrOptions === "string" ? tunnelOrOptions : tunnelOrOptions.tunnel;
    const sdkInfo = typeof tunnelOrOptions === "string" || !tunnelOrOptions._metadata ? void 0 : tunnelOrOptions._metadata.sdk;
    return tunnel ? tunnel : `${_getIngestEndpoint(dsn)}?${_encodedAuth(dsn, sdkInfo)}`;
  }

  // node_modules/@sentry/core/esm/integration.js
  var installedIntegrations = [];
  function filterDuplicates(integrations) {
    const integrationsByName = {};
    integrations.forEach((currentInstance) => {
      const { name } = currentInstance;
      const existingInstance = integrationsByName[name];
      if (existingInstance && !existingInstance.isDefaultInstance && currentInstance.isDefaultInstance) {
        return;
      }
      integrationsByName[name] = currentInstance;
    });
    return Object.keys(integrationsByName).map((k) => integrationsByName[k]);
  }
  function getIntegrationsToSetup(options) {
    const defaultIntegrations2 = options.defaultIntegrations || [];
    const userIntegrations = options.integrations;
    defaultIntegrations2.forEach((integration) => {
      integration.isDefaultInstance = true;
    });
    let integrations;
    if (Array.isArray(userIntegrations)) {
      integrations = [...defaultIntegrations2, ...userIntegrations];
    } else if (typeof userIntegrations === "function") {
      integrations = arrayify(userIntegrations(defaultIntegrations2));
    } else {
      integrations = defaultIntegrations2;
    }
    const finalIntegrations = filterDuplicates(integrations);
    const debugIndex = findIndex(finalIntegrations, (integration) => integration.name === "Debug");
    if (debugIndex !== -1) {
      const [debugInstance] = finalIntegrations.splice(debugIndex, 1);
      finalIntegrations.push(debugInstance);
    }
    return finalIntegrations;
  }
  function setupIntegrations(client, integrations) {
    const integrationIndex = {};
    integrations.forEach((integration) => {
      if (integration) {
        setupIntegration(client, integration, integrationIndex);
      }
    });
    return integrationIndex;
  }
  function setupIntegration(client, integration, integrationIndex) {
    integrationIndex[integration.name] = integration;
    if (installedIntegrations.indexOf(integration.name) === -1) {
      integration.setupOnce(addGlobalEventProcessor, getCurrentHub);
      installedIntegrations.push(integration.name);
    }
    if (client.on && typeof integration.preprocessEvent === "function") {
      const callback = integration.preprocessEvent.bind(integration);
      client.on("preprocessEvent", (event, hint) => callback(event, hint, client));
    }
    if (client.addEventProcessor && typeof integration.processEvent === "function") {
      const callback = integration.processEvent.bind(integration);
      const processor = Object.assign((event, hint) => callback(event, hint, client), {
        id: integration.name
      });
      client.addEventProcessor(processor);
    }
    (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log(`Integration installed: ${integration.name}`);
  }
  function findIndex(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i]) === true) {
        return i;
      }
    }
    return -1;
  }

  // node_modules/@sentry/core/esm/utils/prepareEvent.js
  function prepareEvent(options, event, hint, scope, client) {
    const { normalizeDepth = 3, normalizeMaxBreadth = 1e3 } = options;
    const prepared = __spreadProps(__spreadValues({}, event), {
      event_id: event.event_id || hint.event_id || uuid4(),
      timestamp: event.timestamp || dateTimestampInSeconds()
    });
    const integrations = hint.integrations || options.integrations.map((i) => i.name);
    applyClientOptions(prepared, options);
    applyIntegrationsMetadata(prepared, integrations);
    if (event.type === void 0) {
      applyDebugIds(prepared, options.stackParser);
    }
    let finalScope = scope;
    if (hint.captureContext) {
      finalScope = Scope.clone(finalScope).update(hint.captureContext);
    }
    let result = resolvedSyncPromise(prepared);
    const clientEventProcessors = client && client.getEventProcessors ? client.getEventProcessors() : [];
    if (finalScope) {
      if (finalScope.getAttachments) {
        const attachments = [...hint.attachments || [], ...finalScope.getAttachments()];
        if (attachments.length) {
          hint.attachments = attachments;
        }
      }
      result = finalScope.applyToEvent(prepared, hint, clientEventProcessors);
    } else {
      result = notifyEventProcessors([...clientEventProcessors, ...getGlobalEventProcessors()], prepared, hint);
    }
    return result.then((evt) => {
      if (evt) {
        applyDebugMeta(evt);
      }
      if (typeof normalizeDepth === "number" && normalizeDepth > 0) {
        return normalizeEvent(evt, normalizeDepth, normalizeMaxBreadth);
      }
      return evt;
    });
  }
  function applyClientOptions(event, options) {
    const { environment, release, dist, maxValueLength = 250 } = options;
    if (!("environment" in event)) {
      event.environment = "environment" in options ? environment : DEFAULT_ENVIRONMENT;
    }
    if (event.release === void 0 && release !== void 0) {
      event.release = release;
    }
    if (event.dist === void 0 && dist !== void 0) {
      event.dist = dist;
    }
    if (event.message) {
      event.message = truncate(event.message, maxValueLength);
    }
    const exception = event.exception && event.exception.values && event.exception.values[0];
    if (exception && exception.value) {
      exception.value = truncate(exception.value, maxValueLength);
    }
    const request = event.request;
    if (request && request.url) {
      request.url = truncate(request.url, maxValueLength);
    }
  }
  var debugIdStackParserCache = /* @__PURE__ */ new WeakMap();
  function applyDebugIds(event, stackParser) {
    const debugIdMap = GLOBAL_OBJ._sentryDebugIds;
    if (!debugIdMap) {
      return;
    }
    let debugIdStackFramesCache;
    const cachedDebugIdStackFrameCache = debugIdStackParserCache.get(stackParser);
    if (cachedDebugIdStackFrameCache) {
      debugIdStackFramesCache = cachedDebugIdStackFrameCache;
    } else {
      debugIdStackFramesCache = /* @__PURE__ */ new Map();
      debugIdStackParserCache.set(stackParser, debugIdStackFramesCache);
    }
    const filenameDebugIdMap = Object.keys(debugIdMap).reduce((acc, debugIdStackTrace) => {
      let parsedStack;
      const cachedParsedStack = debugIdStackFramesCache.get(debugIdStackTrace);
      if (cachedParsedStack) {
        parsedStack = cachedParsedStack;
      } else {
        parsedStack = stackParser(debugIdStackTrace);
        debugIdStackFramesCache.set(debugIdStackTrace, parsedStack);
      }
      for (let i = parsedStack.length - 1; i >= 0; i--) {
        const stackFrame = parsedStack[i];
        if (stackFrame.filename) {
          acc[stackFrame.filename] = debugIdMap[debugIdStackTrace];
          break;
        }
      }
      return acc;
    }, {});
    try {
      event.exception.values.forEach((exception) => {
        exception.stacktrace.frames.forEach((frame) => {
          if (frame.filename) {
            frame.debug_id = filenameDebugIdMap[frame.filename];
          }
        });
      });
    } catch (e) {
    }
  }
  function applyDebugMeta(event) {
    const filenameDebugIdMap = {};
    try {
      event.exception.values.forEach((exception) => {
        exception.stacktrace.frames.forEach((frame) => {
          if (frame.debug_id) {
            if (frame.abs_path) {
              filenameDebugIdMap[frame.abs_path] = frame.debug_id;
            } else if (frame.filename) {
              filenameDebugIdMap[frame.filename] = frame.debug_id;
            }
            delete frame.debug_id;
          }
        });
      });
    } catch (e) {
    }
    if (Object.keys(filenameDebugIdMap).length === 0) {
      return;
    }
    event.debug_meta = event.debug_meta || {};
    event.debug_meta.images = event.debug_meta.images || [];
    const images = event.debug_meta.images;
    Object.keys(filenameDebugIdMap).forEach((filename) => {
      images.push({
        type: "sourcemap",
        code_file: filename,
        debug_id: filenameDebugIdMap[filename]
      });
    });
  }
  function applyIntegrationsMetadata(event, integrationNames) {
    if (integrationNames.length > 0) {
      event.sdk = event.sdk || {};
      event.sdk.integrations = [...event.sdk.integrations || [], ...integrationNames];
    }
  }
  function normalizeEvent(event, depth, maxBreadth) {
    if (!event) {
      return null;
    }
    const normalized = __spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues({}, event), event.breadcrumbs && {
      breadcrumbs: event.breadcrumbs.map((b) => __spreadValues(__spreadValues({}, b), b.data && {
        data: normalize(b.data, depth, maxBreadth)
      }))
    }), event.user && {
      user: normalize(event.user, depth, maxBreadth)
    }), event.contexts && {
      contexts: normalize(event.contexts, depth, maxBreadth)
    }), event.extra && {
      extra: normalize(event.extra, depth, maxBreadth)
    });
    if (event.contexts && event.contexts.trace && normalized.contexts) {
      normalized.contexts.trace = event.contexts.trace;
      if (event.contexts.trace.data) {
        normalized.contexts.trace.data = normalize(event.contexts.trace.data, depth, maxBreadth);
      }
    }
    if (event.spans) {
      normalized.spans = event.spans.map((span) => {
        if (span.data) {
          span.data = normalize(span.data, depth, maxBreadth);
        }
        return span;
      });
    }
    return normalized;
  }

  // node_modules/@sentry/core/esm/baseclient.js
  var ALREADY_SEEN_ERROR = "Not capturing exception because it's already been captured.";
  var BaseClient = class {
    constructor(options) {
      this._options = options;
      this._integrations = {};
      this._integrationsInitialized = false;
      this._numProcessing = 0;
      this._outcomes = {};
      this._hooks = {};
      this._eventProcessors = [];
      if (options.dsn) {
        this._dsn = makeDsn(options.dsn);
      } else {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn("No DSN provided, client will not send events.");
      }
      if (this._dsn) {
        const url = getEnvelopeEndpointWithUrlEncodedAuth(this._dsn, options);
        this._transport = options.transport(__spreadProps(__spreadValues({
          recordDroppedEvent: this.recordDroppedEvent.bind(this)
        }, options.transportOptions), {
          url
        }));
      }
    }
    captureException(exception, hint, scope) {
      if (checkOrSetAlreadyCaught(exception)) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log(ALREADY_SEEN_ERROR);
        return;
      }
      let eventId = hint && hint.event_id;
      this._process(
        this.eventFromException(exception, hint).then((event) => this._captureEvent(event, hint, scope)).then((result) => {
          eventId = result;
        })
      );
      return eventId;
    }
    captureMessage(message, level, hint, scope) {
      let eventId = hint && hint.event_id;
      const promisedEvent = isPrimitive(message) ? this.eventFromMessage(String(message), level, hint) : this.eventFromException(message, hint);
      this._process(
        promisedEvent.then((event) => this._captureEvent(event, hint, scope)).then((result) => {
          eventId = result;
        })
      );
      return eventId;
    }
    captureEvent(event, hint, scope) {
      if (hint && hint.originalException && checkOrSetAlreadyCaught(hint.originalException)) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log(ALREADY_SEEN_ERROR);
        return;
      }
      let eventId = hint && hint.event_id;
      this._process(
        this._captureEvent(event, hint, scope).then((result) => {
          eventId = result;
        })
      );
      return eventId;
    }
    captureSession(session) {
      if (!(typeof session.release === "string")) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn("Discarded session because of missing or non-string release");
      } else {
        this.sendSession(session);
        updateSession(session, { init: false });
      }
    }
    getDsn() {
      return this._dsn;
    }
    getOptions() {
      return this._options;
    }
    getSdkMetadata() {
      return this._options._metadata;
    }
    getTransport() {
      return this._transport;
    }
    flush(timeout) {
      const transport = this._transport;
      if (transport) {
        return this._isClientDoneProcessing(timeout).then((clientFinished) => {
          return transport.flush(timeout).then((transportFlushed) => clientFinished && transportFlushed);
        });
      } else {
        return resolvedSyncPromise(true);
      }
    }
    close(timeout) {
      return this.flush(timeout).then((result) => {
        this.getOptions().enabled = false;
        return result;
      });
    }
    getEventProcessors() {
      return this._eventProcessors;
    }
    addEventProcessor(eventProcessor) {
      this._eventProcessors.push(eventProcessor);
    }
    setupIntegrations(forceInitialize) {
      if (forceInitialize && !this._integrationsInitialized || this._isEnabled() && !this._integrationsInitialized) {
        this._integrations = setupIntegrations(this, this._options.integrations);
        this._integrationsInitialized = true;
      }
    }
    getIntegrationById(integrationId) {
      return this._integrations[integrationId];
    }
    getIntegration(integration) {
      try {
        return this._integrations[integration.id] || null;
      } catch (_oO) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn(`Cannot retrieve integration ${integration.id} from the current Client`);
        return null;
      }
    }
    addIntegration(integration) {
      setupIntegration(this, integration, this._integrations);
    }
    sendEvent(event, hint = {}) {
      this.emit("beforeSendEvent", event, hint);
      let env = createEventEnvelope(event, this._dsn, this._options._metadata, this._options.tunnel);
      for (const attachment of hint.attachments || []) {
        env = addItemToEnvelope(
          env,
          createAttachmentEnvelopeItem(
            attachment,
            this._options.transportOptions && this._options.transportOptions.textEncoder
          )
        );
      }
      const promise = this._sendEnvelope(env);
      if (promise) {
        promise.then((sendResponse) => this.emit("afterSendEvent", event, sendResponse), null);
      }
    }
    sendSession(session) {
      const env = createSessionEnvelope(session, this._dsn, this._options._metadata, this._options.tunnel);
      void this._sendEnvelope(env);
    }
    recordDroppedEvent(reason, category, _event) {
      if (this._options.sendClientReports) {
        const key = `${reason}:${category}`;
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log(`Adding outcome: "${key}"`);
        this._outcomes[key] = this._outcomes[key] + 1 || 1;
      }
    }
    on(hook, callback) {
      if (!this._hooks[hook]) {
        this._hooks[hook] = [];
      }
      this._hooks[hook].push(callback);
    }
    emit(hook, ...rest) {
      if (this._hooks[hook]) {
        this._hooks[hook].forEach((callback) => callback(...rest));
      }
    }
    _updateSessionFromEvent(session, event) {
      let crashed = false;
      let errored = false;
      const exceptions = event.exception && event.exception.values;
      if (exceptions) {
        errored = true;
        for (const ex of exceptions) {
          const mechanism = ex.mechanism;
          if (mechanism && mechanism.handled === false) {
            crashed = true;
            break;
          }
        }
      }
      const sessionNonTerminal = session.status === "ok";
      const shouldUpdateAndSend = sessionNonTerminal && session.errors === 0 || sessionNonTerminal && crashed;
      if (shouldUpdateAndSend) {
        updateSession(session, __spreadProps(__spreadValues({}, crashed && { status: "crashed" }), {
          errors: session.errors || Number(errored || crashed)
        }));
        this.captureSession(session);
      }
    }
    _isClientDoneProcessing(timeout) {
      return new SyncPromise((resolve) => {
        let ticked = 0;
        const tick = 1;
        const interval = setInterval(() => {
          if (this._numProcessing == 0) {
            clearInterval(interval);
            resolve(true);
          } else {
            ticked += tick;
            if (timeout && ticked >= timeout) {
              clearInterval(interval);
              resolve(false);
            }
          }
        }, tick);
      });
    }
    _isEnabled() {
      return this.getOptions().enabled !== false && this._transport !== void 0;
    }
    _prepareEvent(event, hint, scope) {
      const options = this.getOptions();
      const integrations = Object.keys(this._integrations);
      if (!hint.integrations && integrations.length > 0) {
        hint.integrations = integrations;
      }
      this.emit("preprocessEvent", event, hint);
      return prepareEvent(options, event, hint, scope, this).then((evt) => {
        if (evt === null) {
          return evt;
        }
        const { propagationContext } = evt.sdkProcessingMetadata || {};
        const trace = evt.contexts && evt.contexts.trace;
        if (!trace && propagationContext) {
          const { traceId: trace_id, spanId, parentSpanId, dsc } = propagationContext;
          evt.contexts = __spreadValues({
            trace: {
              trace_id,
              span_id: spanId,
              parent_span_id: parentSpanId
            }
          }, evt.contexts);
          const dynamicSamplingContext = dsc ? dsc : getDynamicSamplingContextFromClient(trace_id, this, scope);
          evt.sdkProcessingMetadata = __spreadValues({
            dynamicSamplingContext
          }, evt.sdkProcessingMetadata);
        }
        return evt;
      });
    }
    _captureEvent(event, hint = {}, scope) {
      return this._processEvent(event, hint, scope).then(
        (finalEvent) => {
          return finalEvent.event_id;
        },
        (reason) => {
          if (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) {
            const sentryError = reason;
            if (sentryError.logLevel === "log") {
              logger.log(sentryError.message);
            } else {
              logger.warn(sentryError);
            }
          }
          return void 0;
        }
      );
    }
    _processEvent(event, hint, scope) {
      const options = this.getOptions();
      const { sampleRate } = options;
      const isTransaction = isTransactionEvent(event);
      const isError2 = isErrorEvent2(event);
      const eventType = event.type || "error";
      const beforeSendLabel = `before send for type \`${eventType}\``;
      if (isError2 && typeof sampleRate === "number" && Math.random() > sampleRate) {
        this.recordDroppedEvent("sample_rate", "error", event);
        return rejectedSyncPromise(
          new SentryError(
            `Discarding event because it's not included in the random sample (sampling rate = ${sampleRate})`,
            "log"
          )
        );
      }
      const dataCategory = eventType === "replay_event" ? "replay" : eventType;
      return this._prepareEvent(event, hint, scope).then((prepared) => {
        if (prepared === null) {
          this.recordDroppedEvent("event_processor", dataCategory, event);
          throw new SentryError("An event processor returned `null`, will not send event.", "log");
        }
        const isInternalException = hint.data && hint.data.__sentry__ === true;
        if (isInternalException) {
          return prepared;
        }
        const result = processBeforeSend(options, prepared, hint);
        return _validateBeforeSendResult(result, beforeSendLabel);
      }).then((processedEvent) => {
        if (processedEvent === null) {
          this.recordDroppedEvent("before_send", dataCategory, event);
          throw new SentryError(`${beforeSendLabel} returned \`null\`, will not send event.`, "log");
        }
        const session = scope && scope.getSession();
        if (!isTransaction && session) {
          this._updateSessionFromEvent(session, processedEvent);
        }
        const transactionInfo = processedEvent.transaction_info;
        if (isTransaction && transactionInfo && processedEvent.transaction !== event.transaction) {
          const source = "custom";
          processedEvent.transaction_info = __spreadProps(__spreadValues({}, transactionInfo), {
            source
          });
        }
        this.sendEvent(processedEvent, hint);
        return processedEvent;
      }).then(null, (reason) => {
        if (reason instanceof SentryError) {
          throw reason;
        }
        this.captureException(reason, {
          data: {
            __sentry__: true
          },
          originalException: reason
        });
        throw new SentryError(
          `Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${reason}`
        );
      });
    }
    _process(promise) {
      this._numProcessing++;
      void promise.then(
        (value) => {
          this._numProcessing--;
          return value;
        },
        (reason) => {
          this._numProcessing--;
          return reason;
        }
      );
    }
    _sendEnvelope(envelope) {
      this.emit("beforeEnvelope", envelope);
      if (this._isEnabled() && this._transport) {
        return this._transport.send(envelope).then(null, (reason) => {
          (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.error("Error while sending event:", reason);
        });
      } else {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.error("Transport disabled");
      }
    }
    _clearOutcomes() {
      const outcomes = this._outcomes;
      this._outcomes = {};
      return Object.keys(outcomes).map((key) => {
        const [reason, category] = key.split(":");
        return {
          reason,
          category,
          quantity: outcomes[key]
        };
      });
    }
  };
  function _validateBeforeSendResult(beforeSendResult, beforeSendLabel) {
    const invalidValueError = `${beforeSendLabel} must return \`null\` or a valid event.`;
    if (isThenable(beforeSendResult)) {
      return beforeSendResult.then(
        (event) => {
          if (!isPlainObject(event) && event !== null) {
            throw new SentryError(invalidValueError);
          }
          return event;
        },
        (e) => {
          throw new SentryError(`${beforeSendLabel} rejected with ${e}`);
        }
      );
    } else if (!isPlainObject(beforeSendResult) && beforeSendResult !== null) {
      throw new SentryError(invalidValueError);
    }
    return beforeSendResult;
  }
  function processBeforeSend(options, event, hint) {
    const { beforeSend, beforeSendTransaction } = options;
    if (isErrorEvent2(event) && beforeSend) {
      return beforeSend(event, hint);
    }
    if (isTransactionEvent(event) && beforeSendTransaction) {
      return beforeSendTransaction(event, hint);
    }
    return event;
  }
  function isErrorEvent2(event) {
    return event.type === void 0;
  }
  function isTransactionEvent(event) {
    return event.type === "transaction";
  }

  // node_modules/@sentry/core/esm/sdk.js
  function initAndBind(clientClass, options) {
    if (options.debug === true) {
      if (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) {
        logger.enable();
      } else {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
      }
    }
    const hub = getCurrentHub();
    const scope = hub.getScope();
    scope.update(options.initialScope);
    const client = new clientClass(options);
    hub.bindClient(client);
  }

  // node_modules/@sentry/core/esm/transports/base.js
  var DEFAULT_TRANSPORT_BUFFER_SIZE = 30;
  function createTransport(options, makeRequest, buffer = makePromiseBuffer(
    options.bufferSize || DEFAULT_TRANSPORT_BUFFER_SIZE
  )) {
    let rateLimits = {};
    const flush2 = (timeout) => buffer.drain(timeout);
    function send(envelope) {
      const filteredEnvelopeItems = [];
      forEachEnvelopeItem(envelope, (item, type) => {
        const envelopeItemDataCategory = envelopeItemTypeToDataCategory(type);
        if (isRateLimited(rateLimits, envelopeItemDataCategory)) {
          const event = getEventForEnvelopeItem(item, type);
          options.recordDroppedEvent("ratelimit_backoff", envelopeItemDataCategory, event);
        } else {
          filteredEnvelopeItems.push(item);
        }
      });
      if (filteredEnvelopeItems.length === 0) {
        return resolvedSyncPromise();
      }
      const filteredEnvelope = createEnvelope(envelope[0], filteredEnvelopeItems);
      const recordEnvelopeLoss = (reason) => {
        forEachEnvelopeItem(filteredEnvelope, (item, type) => {
          const event = getEventForEnvelopeItem(item, type);
          options.recordDroppedEvent(reason, envelopeItemTypeToDataCategory(type), event);
        });
      };
      const requestTask = () => makeRequest({ body: serializeEnvelope(filteredEnvelope, options.textEncoder) }).then(
        (response) => {
          if (response.statusCode !== void 0 && (response.statusCode < 200 || response.statusCode >= 300)) {
            (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn(`Sentry responded with status code ${response.statusCode} to sent event.`);
          }
          rateLimits = updateRateLimits(rateLimits, response);
          return response;
        },
        (error) => {
          recordEnvelopeLoss("network_error");
          throw error;
        }
      );
      return buffer.add(requestTask).then(
        (result) => result,
        (error) => {
          if (error instanceof SentryError) {
            (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.error("Skipped sending event because buffer is full.");
            recordEnvelopeLoss("queue_overflow");
            return resolvedSyncPromise();
          } else {
            throw error;
          }
        }
      );
    }
    send.__sentry__baseTransport__ = true;
    return {
      send,
      flush: flush2
    };
  }
  function getEventForEnvelopeItem(item, type) {
    if (type !== "event" && type !== "transaction") {
      return void 0;
    }
    return Array.isArray(item) ? item[1] : void 0;
  }

  // node_modules/@sentry/core/esm/version.js
  var SDK_VERSION = "7.81.1";

  // node_modules/@sentry/core/esm/integrations/index.js
  var integrations_exports = {};
  __export(integrations_exports, {
    FunctionToString: () => FunctionToString,
    InboundFilters: () => InboundFilters,
    LinkedErrors: () => LinkedErrors
  });

  // node_modules/@sentry/core/esm/integrations/functiontostring.js
  var originalFunctionToString;
  var FunctionToString = class {
    static __initStatic() {
      this.id = "FunctionToString";
    }
    constructor() {
      this.name = FunctionToString.id;
    }
    setupOnce() {
      originalFunctionToString = Function.prototype.toString;
      try {
        Function.prototype.toString = function(...args) {
          const context = getOriginalFunction(this) || this;
          return originalFunctionToString.apply(context, args);
        };
      } catch (e) {
      }
    }
  };
  FunctionToString.__initStatic();

  // node_modules/@sentry/core/esm/integrations/inboundfilters.js
  var DEFAULT_IGNORE_ERRORS = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/];
  var DEFAULT_IGNORE_TRANSACTIONS = [
    /^.*\/healthcheck$/,
    /^.*\/healthy$/,
    /^.*\/live$/,
    /^.*\/ready$/,
    /^.*\/heartbeat$/,
    /^.*\/health$/,
    /^.*\/healthz$/
  ];
  var InboundFilters = class {
    static __initStatic() {
      this.id = "InboundFilters";
    }
    constructor(options = {}) {
      this.name = InboundFilters.id;
      this._options = options;
    }
    setupOnce(_addGlobaleventProcessor, _getCurrentHub) {
    }
    processEvent(event, _eventHint, client) {
      const clientOptions = client.getOptions();
      const options = _mergeOptions(this._options, clientOptions);
      return _shouldDropEvent(event, options) ? null : event;
    }
  };
  InboundFilters.__initStatic();
  function _mergeOptions(internalOptions = {}, clientOptions = {}) {
    return {
      allowUrls: [...internalOptions.allowUrls || [], ...clientOptions.allowUrls || []],
      denyUrls: [...internalOptions.denyUrls || [], ...clientOptions.denyUrls || []],
      ignoreErrors: [
        ...internalOptions.ignoreErrors || [],
        ...clientOptions.ignoreErrors || [],
        ...internalOptions.disableErrorDefaults ? [] : DEFAULT_IGNORE_ERRORS
      ],
      ignoreTransactions: [
        ...internalOptions.ignoreTransactions || [],
        ...clientOptions.ignoreTransactions || [],
        ...internalOptions.disableTransactionDefaults ? [] : DEFAULT_IGNORE_TRANSACTIONS
      ],
      ignoreInternal: internalOptions.ignoreInternal !== void 0 ? internalOptions.ignoreInternal : true
    };
  }
  function _shouldDropEvent(event, options) {
    if (options.ignoreInternal && _isSentryError(event)) {
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn(`Event dropped due to being internal Sentry Error.
Event: ${getEventDescription(event)}`);
      return true;
    }
    if (_isIgnoredError(event, options.ignoreErrors)) {
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn(
        `Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${getEventDescription(event)}`
      );
      return true;
    }
    if (_isIgnoredTransaction(event, options.ignoreTransactions)) {
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn(
        `Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${getEventDescription(event)}`
      );
      return true;
    }
    if (_isDeniedUrl(event, options.denyUrls)) {
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn(
        `Event dropped due to being matched by \`denyUrls\` option.
Event: ${getEventDescription(
          event
        )}.
Url: ${_getEventFilterUrl(event)}`
      );
      return true;
    }
    if (!_isAllowedUrl(event, options.allowUrls)) {
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn(
        `Event dropped due to not being matched by \`allowUrls\` option.
Event: ${getEventDescription(
          event
        )}.
Url: ${_getEventFilterUrl(event)}`
      );
      return true;
    }
    return false;
  }
  function _isIgnoredError(event, ignoreErrors) {
    if (event.type || !ignoreErrors || !ignoreErrors.length) {
      return false;
    }
    return _getPossibleEventMessages(event).some((message) => stringMatchesSomePattern(message, ignoreErrors));
  }
  function _isIgnoredTransaction(event, ignoreTransactions) {
    if (event.type !== "transaction" || !ignoreTransactions || !ignoreTransactions.length) {
      return false;
    }
    const name = event.transaction;
    return name ? stringMatchesSomePattern(name, ignoreTransactions) : false;
  }
  function _isDeniedUrl(event, denyUrls) {
    if (!denyUrls || !denyUrls.length) {
      return false;
    }
    const url = _getEventFilterUrl(event);
    return !url ? false : stringMatchesSomePattern(url, denyUrls);
  }
  function _isAllowedUrl(event, allowUrls) {
    if (!allowUrls || !allowUrls.length) {
      return true;
    }
    const url = _getEventFilterUrl(event);
    return !url ? true : stringMatchesSomePattern(url, allowUrls);
  }
  function _getPossibleEventMessages(event) {
    const possibleMessages = [];
    if (event.message) {
      possibleMessages.push(event.message);
    }
    let lastException;
    try {
      lastException = event.exception.values[event.exception.values.length - 1];
    } catch (e) {
    }
    if (lastException) {
      if (lastException.value) {
        possibleMessages.push(lastException.value);
        if (lastException.type) {
          possibleMessages.push(`${lastException.type}: ${lastException.value}`);
        }
      }
    }
    if ((typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && possibleMessages.length === 0) {
      logger.error(`Could not extract message for event ${getEventDescription(event)}`);
    }
    return possibleMessages;
  }
  function _isSentryError(event) {
    try {
      return event.exception.values[0].type === "SentryError";
    } catch (e) {
    }
    return false;
  }
  function _getLastValidUrl(frames = []) {
    for (let i = frames.length - 1; i >= 0; i--) {
      const frame = frames[i];
      if (frame && frame.filename !== "<anonymous>" && frame.filename !== "[native code]") {
        return frame.filename || null;
      }
    }
    return null;
  }
  function _getEventFilterUrl(event) {
    try {
      let frames;
      try {
        frames = event.exception.values[0].stacktrace.frames;
      } catch (e) {
      }
      return frames ? _getLastValidUrl(frames) : null;
    } catch (oO) {
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.error(`Cannot extract url for event ${getEventDescription(event)}`);
      return null;
    }
  }

  // node_modules/@sentry/core/esm/integrations/linkederrors.js
  var DEFAULT_KEY = "cause";
  var DEFAULT_LIMIT = 5;
  var LinkedErrors = class {
    static __initStatic() {
      this.id = "LinkedErrors";
    }
    constructor(options = {}) {
      this._key = options.key || DEFAULT_KEY;
      this._limit = options.limit || DEFAULT_LIMIT;
      this.name = LinkedErrors.id;
    }
    setupOnce() {
    }
    preprocessEvent(event, hint, client) {
      const options = client.getOptions();
      applyAggregateErrorsToEvent(
        exceptionFromError,
        options.stackParser,
        options.maxValueLength,
        this._key,
        this._limit,
        event,
        hint
      );
    }
  };
  LinkedErrors.__initStatic();

  // node_modules/@sentry/browser/esm/helpers.js
  var WINDOW6 = GLOBAL_OBJ;
  var ignoreOnError = 0;
  function shouldIgnoreOnError() {
    return ignoreOnError > 0;
  }
  function ignoreNextOnError() {
    ignoreOnError++;
    setTimeout(() => {
      ignoreOnError--;
    });
  }
  function wrap(fn, options = {}, before) {
    if (typeof fn !== "function") {
      return fn;
    }
    try {
      const wrapper = fn.__sentry_wrapped__;
      if (wrapper) {
        return wrapper;
      }
      if (getOriginalFunction(fn)) {
        return fn;
      }
    } catch (e) {
      return fn;
    }
    const sentryWrapped = function() {
      const args = Array.prototype.slice.call(arguments);
      try {
        if (before && typeof before === "function") {
          before.apply(this, arguments);
        }
        const wrappedArguments = args.map((arg) => wrap(arg, options));
        return fn.apply(this, wrappedArguments);
      } catch (ex) {
        ignoreNextOnError();
        withScope((scope) => {
          scope.addEventProcessor((event) => {
            if (options.mechanism) {
              addExceptionTypeValue(event, void 0, void 0);
              addExceptionMechanism(event, options.mechanism);
            }
            event.extra = __spreadProps(__spreadValues({}, event.extra), {
              arguments: args
            });
            return event;
          });
          captureException(ex);
        });
        throw ex;
      }
    };
    try {
      for (const property in fn) {
        if (Object.prototype.hasOwnProperty.call(fn, property)) {
          sentryWrapped[property] = fn[property];
        }
      }
    } catch (_oO) {
    }
    markFunctionWrapped(sentryWrapped, fn);
    addNonEnumerableProperty(fn, "__sentry_wrapped__", sentryWrapped);
    try {
      const descriptor = Object.getOwnPropertyDescriptor(sentryWrapped, "name");
      if (descriptor.configurable) {
        Object.defineProperty(sentryWrapped, "name", {
          get() {
            return fn.name;
          }
        });
      }
    } catch (_oO) {
    }
    return sentryWrapped;
  }

  // node_modules/@sentry/browser/esm/eventbuilder.js
  function exceptionFromError2(stackParser, ex) {
    const frames = parseStackFrames2(stackParser, ex);
    const exception = {
      type: ex && ex.name,
      value: extractMessage(ex)
    };
    if (frames.length) {
      exception.stacktrace = { frames };
    }
    if (exception.type === void 0 && exception.value === "") {
      exception.value = "Unrecoverable error caught";
    }
    return exception;
  }
  function eventFromPlainObject(stackParser, exception, syntheticException, isUnhandledRejection) {
    const hub = getCurrentHub();
    const client = hub.getClient();
    const normalizeDepth = client && client.getOptions().normalizeDepth;
    const event = {
      exception: {
        values: [
          {
            type: isEvent(exception) ? exception.constructor.name : isUnhandledRejection ? "UnhandledRejection" : "Error",
            value: getNonErrorObjectExceptionValue(exception, { isUnhandledRejection })
          }
        ]
      },
      extra: {
        __serialized__: normalizeToSize(exception, normalizeDepth)
      }
    };
    if (syntheticException) {
      const frames = parseStackFrames2(stackParser, syntheticException);
      if (frames.length) {
        event.exception.values[0].stacktrace = { frames };
      }
    }
    return event;
  }
  function eventFromError(stackParser, ex) {
    return {
      exception: {
        values: [exceptionFromError2(stackParser, ex)]
      }
    };
  }
  function parseStackFrames2(stackParser, ex) {
    const stacktrace = ex.stacktrace || ex.stack || "";
    const popSize = getPopSize(ex);
    try {
      return stackParser(stacktrace, popSize);
    } catch (e) {
    }
    return [];
  }
  var reactMinifiedRegexp = /Minified React error #\d+;/i;
  function getPopSize(ex) {
    if (ex) {
      if (typeof ex.framesToPop === "number") {
        return ex.framesToPop;
      }
      if (reactMinifiedRegexp.test(ex.message)) {
        return 1;
      }
    }
    return 0;
  }
  function extractMessage(ex) {
    const message = ex && ex.message;
    if (!message) {
      return "No error message";
    }
    if (message.error && typeof message.error.message === "string") {
      return message.error.message;
    }
    return message;
  }
  function eventFromException(stackParser, exception, hint, attachStacktrace) {
    const syntheticException = hint && hint.syntheticException || void 0;
    const event = eventFromUnknownInput2(stackParser, exception, syntheticException, attachStacktrace);
    addExceptionMechanism(event);
    event.level = "error";
    if (hint && hint.event_id) {
      event.event_id = hint.event_id;
    }
    return resolvedSyncPromise(event);
  }
  function eventFromMessage2(stackParser, message, level = "info", hint, attachStacktrace) {
    const syntheticException = hint && hint.syntheticException || void 0;
    const event = eventFromString(stackParser, message, syntheticException, attachStacktrace);
    event.level = level;
    if (hint && hint.event_id) {
      event.event_id = hint.event_id;
    }
    return resolvedSyncPromise(event);
  }
  function eventFromUnknownInput2(stackParser, exception, syntheticException, attachStacktrace, isUnhandledRejection) {
    let event;
    if (isErrorEvent(exception) && exception.error) {
      const errorEvent = exception;
      return eventFromError(stackParser, errorEvent.error);
    }
    if (isDOMError(exception) || isDOMException(exception)) {
      const domException = exception;
      if ("stack" in exception) {
        event = eventFromError(stackParser, exception);
      } else {
        const name = domException.name || (isDOMError(domException) ? "DOMError" : "DOMException");
        const message = domException.message ? `${name}: ${domException.message}` : name;
        event = eventFromString(stackParser, message, syntheticException, attachStacktrace);
        addExceptionTypeValue(event, message);
      }
      if ("code" in domException) {
        event.tags = __spreadProps(__spreadValues({}, event.tags), { "DOMException.code": `${domException.code}` });
      }
      return event;
    }
    if (isError(exception)) {
      return eventFromError(stackParser, exception);
    }
    if (isPlainObject(exception) || isEvent(exception)) {
      const objectException = exception;
      event = eventFromPlainObject(stackParser, objectException, syntheticException, isUnhandledRejection);
      addExceptionMechanism(event, {
        synthetic: true
      });
      return event;
    }
    event = eventFromString(stackParser, exception, syntheticException, attachStacktrace);
    addExceptionTypeValue(event, `${exception}`, void 0);
    addExceptionMechanism(event, {
      synthetic: true
    });
    return event;
  }
  function eventFromString(stackParser, input, syntheticException, attachStacktrace) {
    const event = {
      message: input
    };
    if (attachStacktrace && syntheticException) {
      const frames = parseStackFrames2(stackParser, syntheticException);
      if (frames.length) {
        event.exception = {
          values: [{ value: input, stacktrace: { frames } }]
        };
      }
    }
    return event;
  }
  function getNonErrorObjectExceptionValue(exception, { isUnhandledRejection }) {
    const keys = extractExceptionKeysForMessage(exception);
    const captureType = isUnhandledRejection ? "promise rejection" : "exception";
    if (isErrorEvent(exception)) {
      return `Event \`ErrorEvent\` captured as ${captureType} with message \`${exception.message}\``;
    }
    if (isEvent(exception)) {
      const className = getObjectClassName(exception);
      return `Event \`${className}\` (type=${exception.type}) captured as ${captureType}`;
    }
    return `Object captured as ${captureType} with keys: ${keys}`;
  }
  function getObjectClassName(obj) {
    try {
      const prototype = Object.getPrototypeOf(obj);
      return prototype ? prototype.constructor.name : void 0;
    } catch (e) {
    }
  }

  // node_modules/@sentry/browser/esm/userfeedback.js
  function createUserFeedbackEnvelope(feedback, {
    metadata,
    tunnel,
    dsn
  }) {
    const headers = __spreadValues(__spreadValues({
      event_id: feedback.event_id,
      sent_at: new Date().toISOString()
    }, metadata && metadata.sdk && {
      sdk: {
        name: metadata.sdk.name,
        version: metadata.sdk.version
      }
    }), !!tunnel && !!dsn && { dsn: dsnToString(dsn) });
    const item = createUserFeedbackEnvelopeItem(feedback);
    return createEnvelope(headers, [item]);
  }
  function createUserFeedbackEnvelopeItem(feedback) {
    const feedbackHeaders = {
      type: "user_report"
    };
    return [feedbackHeaders, feedback];
  }

  // node_modules/@sentry/browser/esm/client.js
  var BrowserClient = class extends BaseClient {
    constructor(options) {
      const sdkSource = WINDOW6.SENTRY_SDK_SOURCE || getSDKSource();
      options._metadata = options._metadata || {};
      options._metadata.sdk = options._metadata.sdk || {
        name: "sentry.javascript.browser",
        packages: [
          {
            name: `${sdkSource}:@sentry/browser`,
            version: SDK_VERSION
          }
        ],
        version: SDK_VERSION
      };
      super(options);
      if (options.sendClientReports && WINDOW6.document) {
        WINDOW6.document.addEventListener("visibilitychange", () => {
          if (WINDOW6.document.visibilityState === "hidden") {
            this._flushOutcomes();
          }
        });
      }
    }
    eventFromException(exception, hint) {
      return eventFromException(this._options.stackParser, exception, hint, this._options.attachStacktrace);
    }
    eventFromMessage(message, level = "info", hint) {
      return eventFromMessage2(this._options.stackParser, message, level, hint, this._options.attachStacktrace);
    }
    captureUserFeedback(feedback) {
      if (!this._isEnabled()) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn("SDK not enabled, will not capture user feedback.");
        return;
      }
      const envelope = createUserFeedbackEnvelope(feedback, {
        metadata: this.getSdkMetadata(),
        dsn: this.getDsn(),
        tunnel: this.getOptions().tunnel
      });
      void this._sendEnvelope(envelope);
    }
    _prepareEvent(event, hint, scope) {
      event.platform = event.platform || "javascript";
      return super._prepareEvent(event, hint, scope);
    }
    _flushOutcomes() {
      const outcomes = this._clearOutcomes();
      if (outcomes.length === 0) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log("No outcomes to send");
        return;
      }
      if (!this._dsn) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log("No dsn provided, will not send outcomes");
        return;
      }
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log("Sending outcomes:", outcomes);
      const envelope = createClientReportEnvelope(outcomes, this._options.tunnel && dsnToString(this._dsn));
      void this._sendEnvelope(envelope);
    }
  };

  // node_modules/@sentry/browser/esm/transports/utils.js
  var cachedFetchImpl = void 0;
  function getNativeFetchImplementation() {
    if (cachedFetchImpl) {
      return cachedFetchImpl;
    }
    if (isNativeFetch(WINDOW6.fetch)) {
      return cachedFetchImpl = WINDOW6.fetch.bind(WINDOW6);
    }
    const document2 = WINDOW6.document;
    let fetchImpl = WINDOW6.fetch;
    if (document2 && typeof document2.createElement === "function") {
      try {
        const sandbox = document2.createElement("iframe");
        sandbox.hidden = true;
        document2.head.appendChild(sandbox);
        const contentWindow = sandbox.contentWindow;
        if (contentWindow && contentWindow.fetch) {
          fetchImpl = contentWindow.fetch;
        }
        document2.head.removeChild(sandbox);
      } catch (e) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", e);
      }
    }
    return cachedFetchImpl = fetchImpl.bind(WINDOW6);
  }
  function clearCachedFetchImplementation() {
    cachedFetchImpl = void 0;
  }

  // node_modules/@sentry/browser/esm/transports/fetch.js
  function makeFetchTransport(options, nativeFetch = getNativeFetchImplementation()) {
    let pendingBodySize = 0;
    let pendingCount = 0;
    function makeRequest(request) {
      const requestSize = request.body.length;
      pendingBodySize += requestSize;
      pendingCount++;
      const requestOptions = __spreadValues({
        body: request.body,
        method: "POST",
        referrerPolicy: "origin",
        headers: options.headers,
        keepalive: pendingBodySize <= 6e4 && pendingCount < 15
      }, options.fetchOptions);
      try {
        return nativeFetch(options.url, requestOptions).then((response) => {
          pendingBodySize -= requestSize;
          pendingCount--;
          return {
            statusCode: response.status,
            headers: {
              "x-sentry-rate-limits": response.headers.get("X-Sentry-Rate-Limits"),
              "retry-after": response.headers.get("Retry-After")
            }
          };
        });
      } catch (e) {
        clearCachedFetchImplementation();
        pendingBodySize -= requestSize;
        pendingCount--;
        return rejectedSyncPromise(e);
      }
    }
    return createTransport(options, makeRequest);
  }

  // node_modules/@sentry/browser/esm/transports/xhr.js
  var XHR_READYSTATE_DONE = 4;
  function makeXHRTransport(options) {
    function makeRequest(request) {
      return new SyncPromise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onerror = reject;
        xhr.onreadystatechange = () => {
          if (xhr.readyState === XHR_READYSTATE_DONE) {
            resolve({
              statusCode: xhr.status,
              headers: {
                "x-sentry-rate-limits": xhr.getResponseHeader("X-Sentry-Rate-Limits"),
                "retry-after": xhr.getResponseHeader("Retry-After")
              }
            });
          }
        };
        xhr.open("POST", options.url);
        for (const header in options.headers) {
          if (Object.prototype.hasOwnProperty.call(options.headers, header)) {
            xhr.setRequestHeader(header, options.headers[header]);
          }
        }
        xhr.send(request.body);
      });
    }
    return createTransport(options, makeRequest);
  }

  // node_modules/@sentry/browser/esm/stack-parsers.js
  var UNKNOWN_FUNCTION = "?";
  var CHROME_PRIORITY = 30;
  var WINJS_PRIORITY = 40;
  var GECKO_PRIORITY = 50;
  function createFrame(filename, func, lineno, colno) {
    const frame = {
      filename,
      function: func,
      in_app: true
    };
    if (lineno !== void 0) {
      frame.lineno = lineno;
    }
    if (colno !== void 0) {
      frame.colno = colno;
    }
    return frame;
  }
  var chromeRegex = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
  var chromeEvalRegex = /\((\S*)(?::(\d+))(?::(\d+))\)/;
  var chrome = (line) => {
    const parts = chromeRegex.exec(line);
    if (parts) {
      const isEval = parts[2] && parts[2].indexOf("eval") === 0;
      if (isEval) {
        const subMatch = chromeEvalRegex.exec(parts[2]);
        if (subMatch) {
          parts[2] = subMatch[1];
          parts[3] = subMatch[2];
          parts[4] = subMatch[3];
        }
      }
      const [func, filename] = extractSafariExtensionDetails(parts[1] || UNKNOWN_FUNCTION, parts[2]);
      return createFrame(filename, func, parts[3] ? +parts[3] : void 0, parts[4] ? +parts[4] : void 0);
    }
    return;
  };
  var chromeStackLineParser = [CHROME_PRIORITY, chrome];
  var geckoREgex = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i;
  var geckoEvalRegex = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
  var gecko = (line) => {
    const parts = geckoREgex.exec(line);
    if (parts) {
      const isEval = parts[3] && parts[3].indexOf(" > eval") > -1;
      if (isEval) {
        const subMatch = geckoEvalRegex.exec(parts[3]);
        if (subMatch) {
          parts[1] = parts[1] || "eval";
          parts[3] = subMatch[1];
          parts[4] = subMatch[2];
          parts[5] = "";
        }
      }
      let filename = parts[3];
      let func = parts[1] || UNKNOWN_FUNCTION;
      [func, filename] = extractSafariExtensionDetails(func, filename);
      return createFrame(filename, func, parts[4] ? +parts[4] : void 0, parts[5] ? +parts[5] : void 0);
    }
    return;
  };
  var geckoStackLineParser = [GECKO_PRIORITY, gecko];
  var winjsRegex = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:[-a-z]+):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
  var winjs = (line) => {
    const parts = winjsRegex.exec(line);
    return parts ? createFrame(parts[2], parts[1] || UNKNOWN_FUNCTION, +parts[3], parts[4] ? +parts[4] : void 0) : void 0;
  };
  var winjsStackLineParser = [WINJS_PRIORITY, winjs];
  var defaultStackLineParsers = [chromeStackLineParser, geckoStackLineParser, winjsStackLineParser];
  var defaultStackParser = createStackParser(...defaultStackLineParsers);
  var extractSafariExtensionDetails = (func, filename) => {
    const isSafariExtension = func.indexOf("safari-extension") !== -1;
    const isSafariWebExtension = func.indexOf("safari-web-extension") !== -1;
    return isSafariExtension || isSafariWebExtension ? [
      func.indexOf("@") !== -1 ? func.split("@")[0] : UNKNOWN_FUNCTION,
      isSafariExtension ? `safari-extension:${filename}` : `safari-web-extension:${filename}`
    ] : [func, filename];
  };

  // node_modules/@sentry/browser/esm/integrations/globalhandlers.js
  var GlobalHandlers = class {
    static __initStatic() {
      this.id = "GlobalHandlers";
    }
    constructor(options) {
      this.name = GlobalHandlers.id;
      this._options = __spreadValues({
        onerror: true,
        onunhandledrejection: true
      }, options);
      this._installFunc = {
        onerror: _installGlobalOnErrorHandler,
        onunhandledrejection: _installGlobalOnUnhandledRejectionHandler
      };
    }
    setupOnce() {
      Error.stackTraceLimit = 50;
      const options = this._options;
      for (const key in options) {
        const installFunc = this._installFunc[key];
        if (installFunc && options[key]) {
          globalHandlerLog(key);
          installFunc();
          this._installFunc[key] = void 0;
        }
      }
    }
  };
  GlobalHandlers.__initStatic();
  function _installGlobalOnErrorHandler() {
    addInstrumentationHandler(
      "error",
      (data) => {
        const [hub, stackParser, attachStacktrace] = getHubAndOptions();
        if (!hub.getIntegration(GlobalHandlers)) {
          return;
        }
        const { msg, url, line, column, error } = data;
        if (shouldIgnoreOnError() || error && error.__sentry_own_request__) {
          return;
        }
        const event = error === void 0 && isString(msg) ? _eventFromIncompleteOnError(msg, url, line, column) : _enhanceEventWithInitialFrame(
          eventFromUnknownInput2(stackParser, error || msg, void 0, attachStacktrace, false),
          url,
          line,
          column
        );
        event.level = "error";
        addMechanismAndCapture(hub, error, event, "onerror");
      }
    );
  }
  function _installGlobalOnUnhandledRejectionHandler() {
    addInstrumentationHandler(
      "unhandledrejection",
      (e) => {
        const [hub, stackParser, attachStacktrace] = getHubAndOptions();
        if (!hub.getIntegration(GlobalHandlers)) {
          return;
        }
        let error = e;
        try {
          if ("reason" in e) {
            error = e.reason;
          } else if ("detail" in e && "reason" in e.detail) {
            error = e.detail.reason;
          }
        } catch (_oO) {
        }
        if (shouldIgnoreOnError() || error && error.__sentry_own_request__) {
          return true;
        }
        const event = isPrimitive(error) ? _eventFromRejectionWithPrimitive(error) : eventFromUnknownInput2(stackParser, error, void 0, attachStacktrace, true);
        event.level = "error";
        addMechanismAndCapture(hub, error, event, "onunhandledrejection");
        return;
      }
    );
  }
  function _eventFromRejectionWithPrimitive(reason) {
    return {
      exception: {
        values: [
          {
            type: "UnhandledRejection",
            value: `Non-Error promise rejection captured with value: ${String(reason)}`
          }
        ]
      }
    };
  }
  function _eventFromIncompleteOnError(msg, url, line, column) {
    const ERROR_TYPES_RE = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
    let message = isErrorEvent(msg) ? msg.message : msg;
    let name = "Error";
    const groups = message.match(ERROR_TYPES_RE);
    if (groups) {
      name = groups[1];
      message = groups[2];
    }
    const event = {
      exception: {
        values: [
          {
            type: name,
            value: message
          }
        ]
      }
    };
    return _enhanceEventWithInitialFrame(event, url, line, column);
  }
  function _enhanceEventWithInitialFrame(event, url, line, column) {
    const e = event.exception = event.exception || {};
    const ev = e.values = e.values || [];
    const ev0 = ev[0] = ev[0] || {};
    const ev0s = ev0.stacktrace = ev0.stacktrace || {};
    const ev0sf = ev0s.frames = ev0s.frames || [];
    const colno = isNaN(parseInt(column, 10)) ? void 0 : column;
    const lineno = isNaN(parseInt(line, 10)) ? void 0 : line;
    const filename = isString(url) && url.length > 0 ? url : getLocationHref();
    if (ev0sf.length === 0) {
      ev0sf.push({
        colno,
        filename,
        function: "?",
        in_app: true,
        lineno
      });
    }
    return event;
  }
  function globalHandlerLog(type) {
    (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.log(`Global Handler attached: ${type}`);
  }
  function addMechanismAndCapture(hub, error, event, type) {
    addExceptionMechanism(event, {
      handled: false,
      type
    });
    hub.captureEvent(event, {
      originalException: error
    });
  }
  function getHubAndOptions() {
    const hub = getCurrentHub();
    const client = hub.getClient();
    const options = client && client.getOptions() || {
      stackParser: () => [],
      attachStacktrace: false
    };
    return [hub, options.stackParser, options.attachStacktrace];
  }

  // node_modules/@sentry/browser/esm/integrations/trycatch.js
  var DEFAULT_EVENT_TARGET = [
    "EventTarget",
    "Window",
    "Node",
    "ApplicationCache",
    "AudioTrackList",
    "BroadcastChannel",
    "ChannelMergerNode",
    "CryptoOperation",
    "EventSource",
    "FileReader",
    "HTMLUnknownElement",
    "IDBDatabase",
    "IDBRequest",
    "IDBTransaction",
    "KeyOperation",
    "MediaController",
    "MessagePort",
    "ModalWindow",
    "Notification",
    "SVGElementInstance",
    "Screen",
    "SharedWorker",
    "TextTrack",
    "TextTrackCue",
    "TextTrackList",
    "WebSocket",
    "WebSocketWorker",
    "Worker",
    "XMLHttpRequest",
    "XMLHttpRequestEventTarget",
    "XMLHttpRequestUpload"
  ];
  var TryCatch = class {
    static __initStatic() {
      this.id = "TryCatch";
    }
    constructor(options) {
      this.name = TryCatch.id;
      this._options = __spreadValues({
        XMLHttpRequest: true,
        eventTarget: true,
        requestAnimationFrame: true,
        setInterval: true,
        setTimeout: true
      }, options);
    }
    setupOnce() {
      if (this._options.setTimeout) {
        fill(WINDOW6, "setTimeout", _wrapTimeFunction);
      }
      if (this._options.setInterval) {
        fill(WINDOW6, "setInterval", _wrapTimeFunction);
      }
      if (this._options.requestAnimationFrame) {
        fill(WINDOW6, "requestAnimationFrame", _wrapRAF);
      }
      if (this._options.XMLHttpRequest && "XMLHttpRequest" in WINDOW6) {
        fill(XMLHttpRequest.prototype, "send", _wrapXHR);
      }
      const eventTargetOption = this._options.eventTarget;
      if (eventTargetOption) {
        const eventTarget = Array.isArray(eventTargetOption) ? eventTargetOption : DEFAULT_EVENT_TARGET;
        eventTarget.forEach(_wrapEventTarget);
      }
    }
  };
  TryCatch.__initStatic();
  function _wrapTimeFunction(original) {
    return function(...args) {
      const originalCallback = args[0];
      args[0] = wrap(originalCallback, {
        mechanism: {
          data: { function: getFunctionName(original) },
          handled: false,
          type: "instrument"
        }
      });
      return original.apply(this, args);
    };
  }
  function _wrapRAF(original) {
    return function(callback) {
      return original.apply(this, [
        wrap(callback, {
          mechanism: {
            data: {
              function: "requestAnimationFrame",
              handler: getFunctionName(original)
            },
            handled: false,
            type: "instrument"
          }
        })
      ]);
    };
  }
  function _wrapXHR(originalSend) {
    return function(...args) {
      const xhr = this;
      const xmlHttpRequestProps = ["onload", "onerror", "onprogress", "onreadystatechange"];
      xmlHttpRequestProps.forEach((prop) => {
        if (prop in xhr && typeof xhr[prop] === "function") {
          fill(xhr, prop, function(original) {
            const wrapOptions = {
              mechanism: {
                data: {
                  function: prop,
                  handler: getFunctionName(original)
                },
                handled: false,
                type: "instrument"
              }
            };
            const originalFunction = getOriginalFunction(original);
            if (originalFunction) {
              wrapOptions.mechanism.data.handler = getFunctionName(originalFunction);
            }
            return wrap(original, wrapOptions);
          });
        }
      });
      return originalSend.apply(this, args);
    };
  }
  function _wrapEventTarget(target) {
    const globalObject = WINDOW6;
    const proto = globalObject[target] && globalObject[target].prototype;
    if (!proto || !proto.hasOwnProperty || !proto.hasOwnProperty("addEventListener")) {
      return;
    }
    fill(proto, "addEventListener", function(original) {
      return function(eventName, fn, options) {
        try {
          if (typeof fn.handleEvent === "function") {
            fn.handleEvent = wrap(fn.handleEvent, {
              mechanism: {
                data: {
                  function: "handleEvent",
                  handler: getFunctionName(fn),
                  target
                },
                handled: false,
                type: "instrument"
              }
            });
          }
        } catch (err) {
        }
        return original.apply(this, [
          eventName,
          wrap(fn, {
            mechanism: {
              data: {
                function: "addEventListener",
                handler: getFunctionName(fn),
                target
              },
              handled: false,
              type: "instrument"
            }
          }),
          options
        ]);
      };
    });
    fill(
      proto,
      "removeEventListener",
      function(originalRemoveEventListener) {
        return function(eventName, fn, options) {
          const wrappedEventHandler = fn;
          try {
            const originalEventHandler = wrappedEventHandler && wrappedEventHandler.__sentry_wrapped__;
            if (originalEventHandler) {
              originalRemoveEventListener.call(this, eventName, originalEventHandler, options);
            }
          } catch (e) {
          }
          return originalRemoveEventListener.call(this, eventName, wrappedEventHandler, options);
        };
      }
    );
  }

  // node_modules/@sentry/browser/esm/integrations/breadcrumbs.js
  var MAX_ALLOWED_STRING_LENGTH = 1024;
  var Breadcrumbs = class {
    static __initStatic() {
      this.id = "Breadcrumbs";
    }
    constructor(options) {
      this.name = Breadcrumbs.id;
      this.options = __spreadValues({
        console: true,
        dom: true,
        fetch: true,
        history: true,
        sentry: true,
        xhr: true
      }, options);
    }
    setupOnce() {
      if (this.options.console) {
        addInstrumentationHandler("console", _consoleBreadcrumb);
      }
      if (this.options.dom) {
        addInstrumentationHandler("dom", _domBreadcrumb(this.options.dom));
      }
      if (this.options.xhr) {
        addInstrumentationHandler("xhr", _xhrBreadcrumb);
      }
      if (this.options.fetch) {
        addInstrumentationHandler("fetch", _fetchBreadcrumb);
      }
      if (this.options.history) {
        addInstrumentationHandler("history", _historyBreadcrumb);
      }
      if (this.options.sentry) {
        const client = getCurrentHub().getClient();
        client && client.on && client.on("beforeSendEvent", addSentryBreadcrumb);
      }
    }
  };
  Breadcrumbs.__initStatic();
  function addSentryBreadcrumb(event) {
    getCurrentHub().addBreadcrumb(
      {
        category: `sentry.${event.type === "transaction" ? "transaction" : "event"}`,
        event_id: event.event_id,
        level: event.level,
        message: getEventDescription(event)
      },
      {
        event
      }
    );
  }
  function _domBreadcrumb(dom) {
    function _innerDomBreadcrumb(handlerData) {
      let target;
      let keyAttrs = typeof dom === "object" ? dom.serializeAttribute : void 0;
      let maxStringLength = typeof dom === "object" && typeof dom.maxStringLength === "number" ? dom.maxStringLength : void 0;
      if (maxStringLength && maxStringLength > MAX_ALLOWED_STRING_LENGTH) {
        (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn(
          `\`dom.maxStringLength\` cannot exceed ${MAX_ALLOWED_STRING_LENGTH}, but a value of ${maxStringLength} was configured. Sentry will use ${MAX_ALLOWED_STRING_LENGTH} instead.`
        );
        maxStringLength = MAX_ALLOWED_STRING_LENGTH;
      }
      if (typeof keyAttrs === "string") {
        keyAttrs = [keyAttrs];
      }
      try {
        const event = handlerData.event;
        target = _isEvent(event) ? htmlTreeAsString(event.target, { keyAttrs, maxStringLength }) : htmlTreeAsString(event, { keyAttrs, maxStringLength });
      } catch (e) {
        target = "<unknown>";
      }
      if (target.length === 0) {
        return;
      }
      getCurrentHub().addBreadcrumb(
        {
          category: `ui.${handlerData.name}`,
          message: target
        },
        {
          event: handlerData.event,
          name: handlerData.name,
          global: handlerData.global
        }
      );
    }
    return _innerDomBreadcrumb;
  }
  function _consoleBreadcrumb(handlerData) {
    const breadcrumb = {
      category: "console",
      data: {
        arguments: handlerData.args,
        logger: "console"
      },
      level: severityLevelFromString(handlerData.level),
      message: safeJoin(handlerData.args, " ")
    };
    if (handlerData.level === "assert") {
      if (handlerData.args[0] === false) {
        breadcrumb.message = `Assertion failed: ${safeJoin(handlerData.args.slice(1), " ") || "console.assert"}`;
        breadcrumb.data.arguments = handlerData.args.slice(1);
      } else {
        return;
      }
    }
    getCurrentHub().addBreadcrumb(breadcrumb, {
      input: handlerData.args,
      level: handlerData.level
    });
  }
  function _xhrBreadcrumb(handlerData) {
    const { startTimestamp, endTimestamp } = handlerData;
    const sentryXhrData = handlerData.xhr[SENTRY_XHR_DATA_KEY];
    if (!startTimestamp || !endTimestamp || !sentryXhrData) {
      return;
    }
    const { method, url, status_code, body } = sentryXhrData;
    const data = {
      method,
      url,
      status_code
    };
    const hint = {
      xhr: handlerData.xhr,
      input: body,
      startTimestamp,
      endTimestamp
    };
    getCurrentHub().addBreadcrumb(
      {
        category: "xhr",
        data,
        type: "http"
      },
      hint
    );
  }
  function _fetchBreadcrumb(handlerData) {
    const { startTimestamp, endTimestamp } = handlerData;
    if (!endTimestamp) {
      return;
    }
    if (handlerData.fetchData.url.match(/sentry_key/) && handlerData.fetchData.method === "POST") {
      return;
    }
    if (handlerData.error) {
      const data = handlerData.fetchData;
      const hint = {
        data: handlerData.error,
        input: handlerData.args,
        startTimestamp,
        endTimestamp
      };
      getCurrentHub().addBreadcrumb(
        {
          category: "fetch",
          data,
          level: "error",
          type: "http"
        },
        hint
      );
    } else {
      const data = __spreadProps(__spreadValues({}, handlerData.fetchData), {
        status_code: handlerData.response && handlerData.response.status
      });
      const hint = {
        input: handlerData.args,
        response: handlerData.response,
        startTimestamp,
        endTimestamp
      };
      getCurrentHub().addBreadcrumb(
        {
          category: "fetch",
          data,
          type: "http"
        },
        hint
      );
    }
  }
  function _historyBreadcrumb(handlerData) {
    let from = handlerData.from;
    let to = handlerData.to;
    const parsedLoc = parseUrl(WINDOW6.location.href);
    let parsedFrom = parseUrl(from);
    const parsedTo = parseUrl(to);
    if (!parsedFrom.path) {
      parsedFrom = parsedLoc;
    }
    if (parsedLoc.protocol === parsedTo.protocol && parsedLoc.host === parsedTo.host) {
      to = parsedTo.relative;
    }
    if (parsedLoc.protocol === parsedFrom.protocol && parsedLoc.host === parsedFrom.host) {
      from = parsedFrom.relative;
    }
    getCurrentHub().addBreadcrumb({
      category: "navigation",
      data: {
        from,
        to
      }
    });
  }
  function _isEvent(event) {
    return !!event && !!event.target;
  }

  // node_modules/@sentry/browser/esm/integrations/linkederrors.js
  var DEFAULT_KEY2 = "cause";
  var DEFAULT_LIMIT2 = 5;
  var LinkedErrors2 = class {
    static __initStatic() {
      this.id = "LinkedErrors";
    }
    constructor(options = {}) {
      this.name = LinkedErrors2.id;
      this._key = options.key || DEFAULT_KEY2;
      this._limit = options.limit || DEFAULT_LIMIT2;
    }
    setupOnce() {
    }
    preprocessEvent(event, hint, client) {
      const options = client.getOptions();
      applyAggregateErrorsToEvent(
        exceptionFromError2,
        options.stackParser,
        options.maxValueLength,
        this._key,
        this._limit,
        event,
        hint
      );
    }
  };
  LinkedErrors2.__initStatic();

  // node_modules/@sentry/browser/esm/integrations/httpcontext.js
  var HttpContext = class {
    static __initStatic() {
      this.id = "HttpContext";
    }
    constructor() {
      this.name = HttpContext.id;
    }
    setupOnce() {
    }
    preprocessEvent(event) {
      if (!WINDOW6.navigator && !WINDOW6.location && !WINDOW6.document) {
        return;
      }
      const url = event.request && event.request.url || WINDOW6.location && WINDOW6.location.href;
      const { referrer } = WINDOW6.document || {};
      const { userAgent } = WINDOW6.navigator || {};
      const headers = __spreadValues(__spreadValues(__spreadValues({}, event.request && event.request.headers), referrer && { Referer: referrer }), userAgent && { "User-Agent": userAgent });
      const request = __spreadProps(__spreadValues(__spreadValues({}, event.request), url && { url }), { headers });
      event.request = request;
    }
  };
  HttpContext.__initStatic();

  // node_modules/@sentry/browser/esm/integrations/dedupe.js
  var Dedupe = class {
    static __initStatic() {
      this.id = "Dedupe";
    }
    constructor() {
      this.name = Dedupe.id;
    }
    setupOnce(_addGlobaleventProcessor, _getCurrentHub) {
    }
    processEvent(currentEvent) {
      if (currentEvent.type) {
        return currentEvent;
      }
      try {
        if (_shouldDropEvent2(currentEvent, this._previousEvent)) {
          (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn("Event dropped due to being a duplicate of previously captured event.");
          return null;
        }
      } catch (_oO) {
      }
      return this._previousEvent = currentEvent;
    }
  };
  Dedupe.__initStatic();
  function _shouldDropEvent2(currentEvent, previousEvent) {
    if (!previousEvent) {
      return false;
    }
    if (_isSameMessageEvent(currentEvent, previousEvent)) {
      return true;
    }
    if (_isSameExceptionEvent(currentEvent, previousEvent)) {
      return true;
    }
    return false;
  }
  function _isSameMessageEvent(currentEvent, previousEvent) {
    const currentMessage = currentEvent.message;
    const previousMessage = previousEvent.message;
    if (!currentMessage && !previousMessage) {
      return false;
    }
    if (currentMessage && !previousMessage || !currentMessage && previousMessage) {
      return false;
    }
    if (currentMessage !== previousMessage) {
      return false;
    }
    if (!_isSameFingerprint(currentEvent, previousEvent)) {
      return false;
    }
    if (!_isSameStacktrace(currentEvent, previousEvent)) {
      return false;
    }
    return true;
  }
  function _isSameExceptionEvent(currentEvent, previousEvent) {
    const previousException = _getExceptionFromEvent(previousEvent);
    const currentException = _getExceptionFromEvent(currentEvent);
    if (!previousException || !currentException) {
      return false;
    }
    if (previousException.type !== currentException.type || previousException.value !== currentException.value) {
      return false;
    }
    if (!_isSameFingerprint(currentEvent, previousEvent)) {
      return false;
    }
    if (!_isSameStacktrace(currentEvent, previousEvent)) {
      return false;
    }
    return true;
  }
  function _isSameStacktrace(currentEvent, previousEvent) {
    let currentFrames = _getFramesFromEvent(currentEvent);
    let previousFrames = _getFramesFromEvent(previousEvent);
    if (!currentFrames && !previousFrames) {
      return true;
    }
    if (currentFrames && !previousFrames || !currentFrames && previousFrames) {
      return false;
    }
    currentFrames = currentFrames;
    previousFrames = previousFrames;
    if (previousFrames.length !== currentFrames.length) {
      return false;
    }
    for (let i = 0; i < previousFrames.length; i++) {
      const frameA = previousFrames[i];
      const frameB = currentFrames[i];
      if (frameA.filename !== frameB.filename || frameA.lineno !== frameB.lineno || frameA.colno !== frameB.colno || frameA.function !== frameB.function) {
        return false;
      }
    }
    return true;
  }
  function _isSameFingerprint(currentEvent, previousEvent) {
    let currentFingerprint = currentEvent.fingerprint;
    let previousFingerprint = previousEvent.fingerprint;
    if (!currentFingerprint && !previousFingerprint) {
      return true;
    }
    if (currentFingerprint && !previousFingerprint || !currentFingerprint && previousFingerprint) {
      return false;
    }
    currentFingerprint = currentFingerprint;
    previousFingerprint = previousFingerprint;
    try {
      return !!(currentFingerprint.join("") === previousFingerprint.join(""));
    } catch (_oO) {
      return false;
    }
  }
  function _getExceptionFromEvent(event) {
    return event.exception && event.exception.values && event.exception.values[0];
  }
  function _getFramesFromEvent(event) {
    const exception = event.exception;
    if (exception) {
      try {
        return exception.values[0].stacktrace.frames;
      } catch (_oO) {
        return void 0;
      }
    }
    return void 0;
  }

  // node_modules/@sentry/browser/esm/sdk.js
  var defaultIntegrations = [
    new integrations_exports.InboundFilters(),
    new integrations_exports.FunctionToString(),
    new TryCatch(),
    new Breadcrumbs(),
    new GlobalHandlers(),
    new LinkedErrors2(),
    new Dedupe(),
    new HttpContext()
  ];
  function init(options = {}) {
    if (options.defaultIntegrations === void 0) {
      options.defaultIntegrations = defaultIntegrations;
    }
    if (options.release === void 0) {
      if (typeof __SENTRY_RELEASE__ === "string") {
        options.release = __SENTRY_RELEASE__;
      }
      if (WINDOW6.SENTRY_RELEASE && WINDOW6.SENTRY_RELEASE.id) {
        options.release = WINDOW6.SENTRY_RELEASE.id;
      }
    }
    if (options.autoSessionTracking === void 0) {
      options.autoSessionTracking = true;
    }
    if (options.sendClientReports === void 0) {
      options.sendClientReports = true;
    }
    const clientOptions = __spreadProps(__spreadValues({}, options), {
      stackParser: stackParserFromStackParserOptions(options.stackParser || defaultStackParser),
      integrations: getIntegrationsToSetup(options),
      transport: options.transport || (supportsFetch() ? makeFetchTransport : makeXHRTransport)
    });
    initAndBind(BrowserClient, clientOptions);
    if (options.autoSessionTracking) {
      startSessionTracking();
    }
  }
  function startSessionOnHub(hub) {
    hub.startSession({ ignoreDuration: true });
    hub.captureSession();
  }
  function startSessionTracking() {
    if (typeof WINDOW6.document === "undefined") {
      (typeof __SENTRY_DEBUG__ === "undefined" || __SENTRY_DEBUG__) && logger.warn("Session tracking in non-browser environment with @sentry/browser is not supported.");
      return;
    }
    const hub = getCurrentHub();
    if (!hub.captureSession) {
      return;
    }
    startSessionOnHub(hub);
    addInstrumentationHandler("history", ({ from, to }) => {
      if (!(from === void 0 || from === to)) {
        startSessionOnHub(getCurrentHub());
      }
    });
  }

  // node_modules/@sentry/browser/esm/integrations/index.js
  var integrations_exports2 = {};
  __export(integrations_exports2, {
    Breadcrumbs: () => Breadcrumbs,
    Dedupe: () => Dedupe,
    GlobalHandlers: () => GlobalHandlers,
    HttpContext: () => HttpContext,
    LinkedErrors: () => LinkedErrors2,
    TryCatch: () => TryCatch
  });

  // node_modules/@sentry/browser/esm/index.js
  var windowIntegrations = {};
  if (WINDOW6.Sentry && WINDOW6.Sentry.Integrations) {
    windowIntegrations = WINDOW6.Sentry.Integrations;
  }
  var INTEGRATIONS = __spreadValues(__spreadValues(__spreadValues({}, windowIntegrations), integrations_exports), integrations_exports2);

  // frappe/public/js/sentry.bundle.js
  var _a, _b, _c;
  init({
    dsn: frappe.boot.sentry_dsn,
    release: (_b = (_a = frappe == null ? void 0 : frappe.boot) == null ? void 0 : _a.versions) == null ? void 0 : _b.frappe,
    autoSessionTracking: false,
    initialScope: {
      user: { id: frappe.boot.sitename },
      tags: { frappe_user: (_c = frappe.boot.user.name) != null ? _c : "Unidentified" }
    },
    beforeSend(event, hint) {
      if (hint.originalException instanceof Error && hint.originalException.stack && hint.originalException.stack.includes("frappe.throw")) {
        return null;
      }
      return event;
    }
  });
})();
//# sourceMappingURL=sentry.bundle.UAN6PRDO.js.map

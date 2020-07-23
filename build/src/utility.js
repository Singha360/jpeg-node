"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidFilename = exports.isValidChar = void 0;
function isprint(char) {
    return !/[\x00-\x08\x0E-\x1F\x80-\xFF]/.test(char);
}
function isValidChar(char) {
    return isprint(char);
}
exports.isValidChar = isValidChar;
function isValidFilename(filename) {
    var e_1, _a;
    var stringArray = __spread(filename);
    var ext = /\.(jpe?g)$/;
    try {
        for (var stringArray_1 = __values(stringArray), stringArray_1_1 = stringArray_1.next(); !stringArray_1_1.done; stringArray_1_1 = stringArray_1.next()) {
            var char = stringArray_1_1.value;
            if (!isValidChar(char)) {
                return false;
            }
            else if (!ext.test(filename)) {
                return false;
            }
            else {
                return true;
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (stringArray_1_1 && !stringArray_1_1.done && (_a = stringArray_1.return)) _a.call(stringArray_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return false;
}
exports.isValidFilename = isValidFilename;
//# sourceMappingURL=utility.js.map
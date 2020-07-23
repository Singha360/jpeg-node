"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Decoder = exports.ResultCode = void 0;
var ResultCode;
(function (ResultCode) {
    ResultCode[ResultCode["SUCCESS"] = 0] = "SUCCESS";
    ResultCode[ResultCode["TERMINATE"] = 1] = "TERMINATE";
    ResultCode[ResultCode["ERROR"] = 2] = "ERROR";
    ResultCode[ResultCode["DECODE_INCOMPLETE"] = 3] = "DECODE_INCOMPLETE";
    ResultCode[ResultCode["DECODE_DONE"] = 4] = "DECODE_DONE";
})(ResultCode = exports.ResultCode || (exports.ResultCode = {}));
var Decoder = (function () {
    function Decoder(filename) {
    }
    Decoder.prototype.open = function (x) {
        return x;
    };
    Decoder.prototype.decodeImageFile = function () {
        return 1;
    };
    Decoder.prototype.dumpRawData = function () {
        return true;
    };
    Decoder.prototype.close = function () { };
    Decoder.prototype.parseSegementInfo = function (byte) {
        return 1;
    };
    Decoder.prototype.parseAPP0Segment = function () { };
    Decoder.prototype.parseCOMSegement = function () { };
    Decoder.prototype.parseDQTSegment = function () { };
    Decoder.prototype.parseSOF0Segment = function () {
        return 1;
    };
    Decoder.prototype.parseDHTSegment = function () { };
    Decoder.prototype.parseSOSSegment = function () { };
    Decoder.prototype.scanImageData = function () { };
    Decoder.prototype.byteStuffScanData = function () { };
    Decoder.prototype.decodeScanData = function () { };
    Decoder.ResultCode = ResultCode;
    return Decoder;
}());
exports.Decoder = Decoder;
//# sourceMappingURL=decoder.js.map
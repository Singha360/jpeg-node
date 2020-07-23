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
Object.defineProperty(exports, "__esModule", { value: true });
var decoder_1 = require("./src/decoder");
var utility_1 = require("./src/utility");
var _a = __read(process.argv.slice(2), 1), arg = _a[0];
function printHelp() {
    console.log("=============================================\n");
    console.log("      NodeJPEG - Simple JPEG Decoder      \n");
    console.log("=============================================\n");
    console.log("Help\n\n");
    console.log("<filename.jpg>                  : Decompress a JPEG image to a PPM image\n");
    console.log("-h                              : Print this help message and exit\n");
}
function decodeJPEG(filename) {
    if (!utility_1.isValidFilename(filename)) {
        throw "Invalid input file name passed.\n";
        return;
    }
    console.log("Decoding...\n");
    var decoder = new decoder_1.Decoder();
    decoder.open(filename);
    if (decoder.decodeImageFile() == decoder_1.Decoder.ResultCode.DECODE_DONE) {
        decoder.dumpRawData();
    }
    decoder.close();
    console.log("Generated file: " + filename.split(".").slice(0, -1).join(".") + ".ppm\n");
    console.log('Complete! Check log file "jpeg.log" for details.\n');
}
function handleInput() {
    if (!arg) {
        throw "No arguments provided.\n";
    }
    if (arg === "-h") {
        printHelp();
    }
    else if (arg) {
        decodeJPEG(arg);
    }
}
(function main() {
    try {
        console.log("NodeJPEG - A simple JPEG library\n");
        handleInput();
    }
    catch (error) {
        console.error("Error - " + error);
    }
})();
//# sourceMappingURL=index.js.map
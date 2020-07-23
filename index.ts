import { Decoder } from "./src/decoder"; // This can be wrriten as so: const {Decoder} = require("./src/decoder")
import { isValidFilename(filename) } from "./src/utility";

const [arg] = process.argv.slice(2);

function printHelp() {
	console.log("=============================================\n");
	console.log("      NodeJPEG - Simple JPEG Decoder      \n");
	console.log("=============================================\n");
	console.log("Help\n\n");
	console.log(
		"<filename.jpg>                  : Decompress a JPEG image to a PPM image\n"
	);
	console.log(
		"-h                              : Print this help message and exit\n"
	);
}

function decodeJPEG(filename: string) {
	if (!isValidFilename(filename)) {
		throw "Invalid input file name passed.\n";
	}

	console.log("Decoding...\n");

	const decoder = new Decoder();

	decoder.open(filename);
	if (decoder.decodeImageFile() == Decoder.ResultCode.DECODE_DONE) {
		decoder.dumpRawData();
	}

	decoder.close();

	console.log(
		`Generated file: ${filename.split(".").slice(0, -1).join(".")}.ppm\n`
	);
	console.log('Complete! Check log file "jpeg.log" for details.\n');
}

function handleInput() {
	if (!arg) {
		throw "No arguments provided.\n";
	}
	if (arg === "-h") {
		printHelp();
	} else if (arg) {
		decodeJPEG(arg);
	}
}

(function main() {
	try {
		console.log("NodeJPEG - A simple JPEG library\n");
		handleInput();
	} catch (error) {
		console.error(`Error - ${error}`);
	}
})();

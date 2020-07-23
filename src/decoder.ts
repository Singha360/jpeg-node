import fs from "fs";

export enum ResultCode {
	SUCCESS,
	TERMINATE,
	ERROR,
	DECODE_INCOMPLETE,
	DECODE_DONE
}

export class Decoder {
	public static ResultCode = ResultCode;
	private m_imageFile!: ArrayBuffer;

	/**
	 * Initialize decoder with info about image file
	 * @param filename The name of the file
	 */
	public constructor(filename?: string) {
		console.log('Created "Decoder object".\n');
	}

	/**
	 * Open a JFIF image file for decoding
	 * @param x JFIF File
	 */
	public open(filename: string): boolean {
		try {
			this.m_imageFile = fs.readFileSync(filename);
			return true;
		} catch (error) {
			console.error(error);
			return false;
		}
	}

	/**
	 * Decode the image in the JFIF file
	 */
	public decodeImageFile(): ResultCode {
		return 1;
	}

	/**
	 * Write raw, uncompressed image data to disk in PPM format
	 */
	public dumpRawData(): boolean {
		return true;
	}

	/**
	 * Close the JFIF file
	 */
	public close() {}

	/**
	 * Parse the info of the specified segment in the JFIF file
	 * @param byte
	 */
	private parseSegementInfo(byte: number): ResultCode {
		return 1;
	}

	/**
	 * Parse the JFIF segment at the very beginning of the JFIF file
	 */
	private parseAPP0Segment(): void {}

	/**
	 * Parse the comment in the JFIF file
	 */
	private parseCOMSegement(): void {}

	/**
	 * Parse the quantization tables specified in the JFIF file
	 */
	private parseDQTSegment(): void {}

	/**
	 * Parse the Start of File segment
	 */
	private parseSOF0Segment(): ResultCode {
		return 1;
	}

	/**
	 * Parse the Huffman tables specified in the JFIF file
	 */
	private parseDHTSegment(): void {}

	/**
	 * Parse the start of scan segment in the JFIF file
	 */
	private parseSOSSegment(): void {}

	/**
	 * Parse the actual compressed image data stored in the JFIF file
	 */
	private scanImageData(): void {}

	/**
	 * Convert bytes of the form XXFF00YY to just XXFFYY
	 */
	private byteStuffScanData(): void {}

	/**
	 **Decode the RLE-Huffman encoded image pixel data
	 *
	 *This function goes bit by bit over the image scan data
	 *and decodes it using the provided DC and AC Huffman tables
	 *for luminance (Y) and chrominance (Cb & Cr)
	 */
	private decodeScanData(): void {}

	// private displayHuffmanCodes(){}
}

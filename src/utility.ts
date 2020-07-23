function isprint(char: string) {
	return !/[\x00-\x08\x0E-\x1F\x80-\xFF]/.test(char);
}

/**
 *
 * @param char character whose validity to test
 * @returns true if character is valid, else false
 */
export function isValidChar(char: string) {
	return isprint(char);
}

/**
 *
 * @param filename the file name whose validity to check
 * @returns true if the file name is valid, else false
 */
export function isValidFilename(filename: string) {
	const stringArray = [...filename];

	const ext = /\.(jpe?g)$/;

	// First make sure the filename contains only valid characters
	for (let char of stringArray) {
		if (!isValidChar(char)) {
			return false;
		} // Check if the correct extension is present in the file name
		else if (!ext.test(filename)) {
			return false;
		} else {
			return true;
		}
	}

	return false;
}

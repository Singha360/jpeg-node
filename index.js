const fs = require("fs");

const arg = process.argv[2];

const file = fs.readFileSync(arg);

for (let x of file) {
	console.log(x.toString(16));
}

// Correct as of: 09/09/2021

const fsPromises = require('fs').promises
fromCharCode = String.fromCharCode;
const newline = "\r\n"

function b64(str) {
	var b64 = "QvRM8KNG4PC2VZUu7eIwdBorhit6gaAbYym5lEc0jDSWnXT13JqsFxpHOfkzL9+/=";
	var b, result = "",
		r1, r2, i = 0;
	do {
		b = b64.indexOf(str.charAt(i++)) << 18 |
			b64.indexOf(str.charAt(i++)) << 12 |
			(r1 = b64.indexOf(str.charAt(i++))) << 6 |
			(r2 = b64.indexOf(str.charAt(i++)));

		result += r1 === 64 ?
			fromCharCode(b >> 16 & 255) :
			r2 === 64 ?
				fromCharCode(b >> 16 & 255, b >> 8 & 255) :
				fromCharCode(b >> 16 & 255, b >> 8 & 255, b & 255);
	} while (i < str.length);
	return result;
};

function xor_1(key, bytes) {
	var res = [];

	for (var i = 0; i < bytes.length;) {
		for (var j = 0; j < key.length; j++) {
			res.push(fromCharCode((bytes.charCodeAt(i)) ^ key.charCodeAt(j) ^ i % 3));
			i++;
			if (i >= bytes.length) {
				j = key.length;
			}
		}
	}

	for (var k = 0; k < res.length / 2; k++) {
		var j = res.length - k - 1;
		var temp = res[k];
		res[k] = res[j];
		res[j] = temp;
	}

	return res.join("")

}

// Didn't modify the name of the function; this needs modification on the next run!
function JXNHptZI(bsix) {
	return UnicodeToAscii(xor_1(key, b64(bsix)));
}

function UnicodeToAscii(result) {
	for (var i = 0; i < result.length; ++i) {
		result[i] = fromCharCode(result.charCodeAt(i) - (i % 3));
	}
	return result;
}

async function readFile() {
	try {

		await fsPromises.open('DeobfuscatedCalls.txt', 'w');
		let data = await fsPromises.readFile('ObfuscatedCalls.txt', 'utf8');
		data = data.split('\n');

		for (let i = 0; i < data.length; i++) {
			await fsPromises.appendFile("DeobfuscatedCalls.txt", '"' + String(eval(data[i])) + '"');
			await fsPromises.appendFile("DeobfuscatedCalls.txt", newline);
		}

	} catch (err) {
		console.error(err)
	}
}

key = UnicodeToAscii(xor_1("QToD", b64("hpQ2achsRH8=")))
console.log("Here's your main decryptor key:", key)

readFile()
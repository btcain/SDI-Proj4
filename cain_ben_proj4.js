// Ben Cain
// SDI 1301
// Project 4

// String
var StringLibrary = function () {
	//Does a string follow a 123-456-7890 pattern like a phone number?
	//True or False
	var isPhoneNumUS = function (str) {
		var re = /\d{3}-\d{3}-\d{4}/;
		return re.test(str);
	};
	//Does a string follow an aaa@bbb.ccc pattern like an email address?
	//True or False
	var isEmailAddr = function (str) {
		var re = /^\w+@[\w.\-]+\.[A-Za-z]{2,3}$/;
		return re.test(str);
	};
	// Is the string a URL? (Does it start with http: or https:?)
	//True or False
	var isUrl = function (str) {
		var re = /^(?:http|https):/;
		return re.test(str);
	};
	// Title-case a string (split into words, then uppercase the first letter of each word)
	var splitStrUpper = function (str) {
		var split = str.split(" ");
		var result = "";
		for (var i = 0, j = split.length; i < j; i++) {
			var spNew = split[i].replace(split[i].charAt(0),(split[i].charAt(0)).toUpperCase());
			result = result.concat(spNew + " ");
		};
		return result;
	};
	// Given a string that is a list of things separated by a given string, as well as another string separator, return a string with the first separator changed to the second: "a,b,c" + "," + "/" = "a/b/c".
	var swapSeparator = function (str,newSep) {
		var re = /\W/g;
		return str.replace(re,newSep);
	};

//returns the string functions
	return {
		"isPhoneNumUS" : isPhoneNumUS,
		"isEmailAddr" : isEmailAddr,
		"isUrl" : isUrl,
		"splitStrUpper" : splitStrUpper,
		"swapSeparator" : swapSeparator

	};
};


// String Console
console.log("String Tests");
var StringLibrary = StringLibrary();
console.log("Is 482-423-1352 a phone number?")
console.log(StringLibrary.isPhoneNumUS("482-423-1352"));
console.log("Is derpin@mailinator.com a valid email?")
console.log(StringLibrary.isEmailAddr("derpin@mailinator.com"));
console.log("Is https://www.google.com a valid link?")
console.log(StringLibrary.isUrl("https://www.google.com"));
console.log("Modifying string 'this is a tastey burger'")
console.log(StringLibrary.splitStrUpper("this is a tastey burger"));
console.log("Swapping seperator for 'a,b,c,' with /")
console.log(StringLibrary.swapSeparator("a,b,c","/"));
console.log(" ");

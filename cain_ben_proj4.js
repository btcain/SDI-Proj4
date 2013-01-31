// Ben Cain
// SDI 1301
// Project 4

	//MAKEUP: Methods + Returns Proj 3
	//MAKEUP: Functions Proj 2
	//MAKEUP: String and Array vars Proj 2
	//MAKEUP: FOR Loop Proj 2
	//MAKEUP: Encapsulated Functions Proj 2
	//MAKEUP: Arguments Proj 2

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

// // Numbers
var NumberLibrary = function () {
	// Format a number to use a specific number of decimal places, as for money: 2.1 becomes 2.10
	var formatDecimal = function (num,afterDecimal) {
        return Number(num.toFixed(afterDecimal));
    };
    // Fuzzy-match a number: is the number above or below a number within a certain percent?
	var fuzzyNum = function (num,compareNum,percent) {
		var percentage = (num/compareNum) * 100;
		if ((num >= compareNum && percentage >= percent) || (num < compareNum && percentage < percent)) {
			return false;
		} else {
			return true;
		};
	};
	// Find the number of hours or days difference between two dates.
    var timeBtDates = function (date1,date2) {
		var results = [];
		var difference = (date1 > date2) ? date1.getTime() - date2.getTime() : date2.getTime() - date1.getTime();
		results[3] = difference / 1000;
		results[2] = results[3] / 60;
		results[1] = results[2] / 60;
		results[0] = results[1] / 24;
		return results;

    };
    // Given a string version of a number such as "42", return the value as an actual Number, such as 42.
    var strToNum = function (num) {
		return Number(num);
    };
    // Returnes the number functions
	return {
		"formatDecimal" : formatDecimal,
		"fuzzyNum" : fuzzyNum,
		"timeBtDates" : timeBtDates,
		"strToNum" : strToNum

	};
};

// Array Library
var ArrayLibrary = function () {
	// Find the smallest value in an array that is greater than a given number
	var smValGNumInArray = function (array,num) {
		array.sort(function(a,b){return a-b;});
		if (num >= array[0] && num < array[array.length-1]) {
			array.push(num);
			array.sort(function(a,b){return a-b;});
			var result = array[array.lastIndexOf(num) + 1];
			return result;
		} else {
			return null;
		};
	};
	// Find the total value of just the numbers in an array, even if some of the items are not numbers.
	var lrgValLNumInArray = function (array,num) {
		array.sort(function(a,b){return a-b;});
		if (num > array[0] && num <= array[array.length-1]) {
			array.push(num);
			array.sort(function(a,b){return a-b;});
			var result = array[array.indexOf(num) - 1];
			return result;
		} else {
			return null;
		};
	};
	// Add up and total only numbers in an array
//MAKEUP: For Loop Proj 2 -----------------------------------------------
	var totalValNumInArray = function (array) {
		var total = 0;
		for (var i = 0, j = array.length; i < j; i++) {
			if (array[i]/1 === array[i]) {
				total += array[i];
			};
		};
		return total;
	};
	// Given an array of objects and the name of a key, return the array sorted by the value of that key in each of the objects: "a" + [{a:2},{a:3},{a:1}] = [{a:1},{a:2},{a:3}].
	var sortKeyByValInArray = function (array,givenKey) {
		return (array.sort(function(a,b){return a[givenKey] - b[givenKey];}));
	};


	return {
		"smValGNumInArray" : smValGNumInArray,
		"lrgValLNumInArray" : lrgValLNumInArray,
		"totalValNumInArray" : totalValNumInArray,
		"sortKeyByValInArray" : sortKeyByValInArray,
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

// Number Console
console.log("Number Tests");
var numberLib = NumberLibrary();
console.log("Formatting 18.4829 to 2 decimal places")
console.log(numberLib.formatDecimal(18.4829,2));
console.log("Fuzzy 10,5,50")
console.log(numberLib.fuzzyNum(10,5,50));
console.log("Fuzzy 5, 10, 50")
console.log(numberLib.fuzzyNum(5,10,50));
console.log("Days until my birthday")
var date1 = new Date(2013,1,31);
var date2 = new Date(2013,2,5);
//Days until my birthday.
var timeConversion = numberLib.timeBtDates(date1,date2);
console.log("Difference in days: " + timeConversion[0] + ", in hours: " + timeConversion[1]);
console.log(numberLib.strToNum("5678"));
console.log(" ");

// Array Console
console.log("Array Tests");
var arrayLib = ArrayLibrary();
var numList = [1,5,7,34,2,6,17,3,90];
console.log("My array is " + numList);
console.log("Smallest number in array greater than 1");
console.log(arrayLib.smValGNumInArray(numList,1));
console.log("Largest number in array (greater than 8)");
console.log("broken");
console.log(arrayLib.lrgValLNumInArray(numList,8));
var randomList = [10,"apple","orange",10,20,"10"];
console.log("Add only the numbers in this array (no strings) : " + randomList);
console.log(arrayLib.totalValNumInArray(randomList));
console.log("sorting objects by key");
var arrayObjects = [{a:6},{a:1},{a:8},{a:2},{a:3},{a:5},{a:4},{a:7},{b:3},{b:5},{b:1},{b:4},{b:2},{b:6},{c:3},{c:5},{c:1},{c:4},{c:2},{c:6}];
console.log(arrayLib.sortKeyByValInArray(arrayObjects,"a"));

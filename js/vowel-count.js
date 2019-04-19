// Return the number (count) of vowels in the given string.
//
//     We will consider a, e, i, o, and u as vowels for this Kata.
//
//     The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    var vowelCount = 0;
    var string = str;

    for (var i = 1; i <= string.length -1; i++) {

        if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u") {
            vowelCount += 1;
        }
    }
    return vowelCount;
}

console.log("moo");

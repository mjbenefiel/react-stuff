// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

//  RegEx to remove spaces and caps -- const word = "HI THERE!" word.replace(/[^w]/g, "").toLowerCase();

function anagrams(stringA, stringB) {
  if (cleanString(stringA) === cleanString(stringB)) {
    console.log("anagram");
  } else {
    console.log("no anagram");
  }
}

anagrams("Hello there!", "There. Hello!");

// helper function to clean up strings

function cleanString(str) {
  return str
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");
}

module.exports = anagrams;

/*function anagrams(stringA, stringB) {
    const aCharMap = buildCharMap(stringA);
    const bCharMap = buildCharMap(stringB);

    if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
        return false;
    }

    for (var i = 0; i < aCharMap.length; i++) {
        let char = aCharMap[i]
        if (aCharMap[char] !== bCharMap[char]) {
            return false
        }
    }

    return true;
}

function buildCharMap(str){
    const charMap = {};

    for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
        charMap[char] = charMap[char] + 1 || 1;
    }

    return charMap;
}

/*function buildCharMap(str) {
    const charMap = {};
    let char = str[i];

    for (var i = 0; i <= str.replace(/[^\w]/g, '').toLowerCase()) {
        let char = str[i];
        charMap[char] = charMap[char] + 1 || 1;

    }

    return charMap;
} */

/*function buildCharMap(str){
    const charMap = {};

    for (let char of str.replace([^\w]/g, '').toLowerCase()) {
        charMap[char] = charMap[char] + 1 || 1;
    }

    return charMap;
}*/

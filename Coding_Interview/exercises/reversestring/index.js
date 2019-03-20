// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//Solution #1
/*function reverse(str) {
    return str.split("").reverse().join("")
} */

/*function reverse(str) {
    let reversed = '';

    for (var i = 0; i < str.length; i++) {
        reversed = str[i] + reversed;
    }

    return reversed;
}

console.log(reverse("hello")) */

const reverse = (str) => {
    debugger;
return str.split('').reduce((reversed, character) => {
    return character + reversed
}, '');

}

reverse("racecar")

module.exports = reverse;

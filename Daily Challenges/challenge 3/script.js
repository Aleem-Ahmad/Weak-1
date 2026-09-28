// Check if a string is a palindrome, without reverse()

function reverseString(str) {
    let reverseStr = ""
    for (i = str.length - 1; i >= 0; i--) {
        reverseStr += str[i];
    }
    return reverseStr;
}


function isPalindrone(str) {
    let ogStr = str;
    let revStr = reverseString(str);
    if (revStr == ogStr) {
        console.log("Yes Its Palindrone !")
    } else {
        console.log("No Its Not a Palindrone !")
    }
}

isPalindrone("bob");
isPalindrone("boss");


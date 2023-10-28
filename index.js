function checkPalindrome() {

    const inputText1 = document.getElementById('inputText').value.trim();
    if (inputText1 === "") {
        alert("Please enter a word or phrase before checking.");
        return;
    }
    const inputText = document.getElementById('inputText').value;
    const isPalindrome = isPalindromeCheck(inputText);
    const resultElement = document.getElementById('result');
    const resultSvg = document.getElementById('resultSvg');

    if (isPalindrome) {
        resultElement.innerHTML = "Hurrah ! It's a palindrome!";
        // resultSvg.element = 
    } else {
        resultElement.innerHTML = " Oops ! It's not a palindrome";

    }

    document.getElementById('modal').classList.add('show');
}
function closeModal() {
    document.getElementById('modal').classList.remove('show');
    document.getElementById('inputText').value = '';
}

function isPalindromeCheck(str) {
    str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    const reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
}

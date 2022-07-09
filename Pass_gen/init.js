const lowerCase_el = document.getElementById("lowerCase");
const upperCase_el = document.getElementById("upperCase");
const nums_el = document.getElementById("nums");
const special_symbols_el = document.getElementById("special_symbols");

const pass = document.getElementById("pass");
const copy = document.getElementById("copy");
const length = document.getElementById("length");

const generatePass_el = document.getElementById("generatePass");

const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const nums = "0123456789";
const special_symbols = "!@#$%^&*()_+=";

function getLowercase() {
    return lowerCase[Math.floor(Math.random() * lowerCase.length)];

}

function getUppercase() {
    return upperCase[Math.floor(Math.random() * upperCase.length)];

}

function getNumber() {
    return nums[Math.floor(Math.random() * nums.length)];

}

function getSymbol() {
    return special_symbols[Math.floor(Math.random() * special_symbols.length)];

}

function generatePassword() {
    let password = "";
    const len = length.value;

    if (upperCase_el.checked) password += getUppercase();
    if (lowerCase_el.checked) password += getLowercase();
    if (nums_el.checked) password += getNumber();
    if (special_symbols_el.checked) password += getSymbol();

    for (let i = password.length; i < len; i++) {
        const x = generateX();
        password += x;

    }

    pass.innerText = password;

}

function generateX() {
    const xs = [];
    if (upperCase_el.checked) xs.push(getUppercase());
    if (lowerCase_el.checked) xs.push(getLowercase());
    if (nums_el.checked) xs.push(getNumber());
    if (special_symbols_el.checked) xs.push(getSymbol());

    if (xs.length === 0) return "";
    return xs[Math.floor(Math.random() * xs.length)];

}

generatePass_el.addEventListener("click", generatePassword);
copy.addEventListener("click", () => {
    const textarea = document.createElement("textarea");
    const password = pass.innerText;

    if (!password) return;

    textarea.value = password;
    if (!navigator.clipboard){
        document.execCommand("copy");

    } else {
        navigator.clipboard.writeText(password).then(
            function() {
                alert("The password was copied to clipboard !");

            })
            .catch(
                function() {
                    alert("Try again");

                });

    }

});

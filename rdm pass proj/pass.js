function generatePass(length, includeNumbers, includesSymbols, includeUppercase, incudeLowercase) {
    const lowercaseChar = "abcdefghijklmnopqrstuvyxyz"
    const uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numberChars = "0123456789"
    const symbolChars = "!@#$%^&*+?"
    const resultP = document.getElementById("resultP")

    let allowedChars = "";
    let password = ""

    allowedChars += includeUppercase ? lowercaseChar : "";
    allowedChars += includeUppercase ? uppercaseChar : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includesSymbols ? symbolChars : "";

    //console.log(allowedChars);

    if(length <= 0){
        return `(password length must be atleast 1)`
    }
    if(allowedChars.length === 0)
        return `(at least one set of characters needs to be selected)`
    else if(allowedChars.length === "food"){
        return `this is food`
    }
    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length)
        password += allowedChars[randomIndex]
    }
    resultP.textContent = password;

    return password;


}
const includesSymbols = true
const includeUppercase = true
const incudeLowercase = true
const includeNumbers = true
const passLength = 20;


const password = generatePass(passLength, incudeLowercase, includeUppercase, includeNumbers, includesSymbols)


console.log(`Generated password: ${password}`);
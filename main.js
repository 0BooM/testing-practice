export function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function reverseString(string){
    return string.split("").reverse().join("");
}

export const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    divide: (a, b) => {
        if (b === 0) throw new Error("Cannot divide by zero!");
        return a / b;
    },
    multiply: (a, b) => a * b,
}

export function caesarCipher(string, shiftFactor){
    let result = "";
    for(let char of string){
        const isUpper = char === char.toUpperCase() && /[A-Z]/.test(char);
        const isLower = char === char.toLowerCase() && /[a-z]/.test(char);

        const charCode = char.charCodeAt(0);
        if(isUpper){
            const shiftedCode = ((charCode - 65 + shiftFactor) % 26 + 26) % 26 + 65;
            result += String.fromCharCode(shiftedCode);
        } else if(isLower){
            const shiftedCode = ((charCode - 97 + shiftFactor) % 26 + 26) % 26 + 97;
            result += String.fromCharCode(shiftedCode);
        } else{
            result += char;
        }
    }
    return result;
}
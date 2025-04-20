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
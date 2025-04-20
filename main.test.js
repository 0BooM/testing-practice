import {capitalize, reverseString, calculator, caesarCipher} from "./main";

test("Capitalize first character", () => {
  expect(capitalize("")).toBe("");
  expect(capitalize('hello')).toBe('Hello');
  expect(capitalize('simon')).toBe('Simon');
  expect(capitalize("123")).toBe("123");
});

test("Reverse a string", () => {
    expect(reverseString("hello")).toBe("olleh");expect(reverseString("simon")).toBe("nomis");
    expect(reverseString("123")).toBe("321");
    expect(reverseString("")).toBe("");
})

describe('Calculator', () => {
  test('add', () => {
    expect(calculator.add(1, 2)).toBe(3);
    expect(calculator.add(-1, 2)).toBe(1);
    expect(calculator.add(-2, -3)).toBe(-5);
  });

  test('subtract', () => {
    expect(calculator.subtract(1, 2)).toBe(-1);
    expect(calculator.subtract(-1, 2)).toBe(-3);
    expect(calculator.subtract(5, 2)).toBe(3);
  });

  test("divide", () => {
    expect(calculator.divide(1, 2)).toBeCloseTo(0.5);
    expect(calculator.divide(6, 3)).toBe(2);
    expect(() => calculator.divide(10, 0)).toThrow("Cannot divide by zero!");
  });

  test("multiply", () => {
    expect(calculator.multiply(3, 4)).toBe(12);
    expect(calculator.multiply(-2, 5)).toBe(-10);
    expect(calculator.multiply(0, 5)).toBe(0);
  });
});

test("Caesar Cipher", () =>{
  expect(caesarCipher('')).toBe('');
  expect(caesarCipher('abcd', 1)).toBe('bcde')
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  expect(caesarCipher("Hello, World!", 3)).toBe('Khoor, Zruog!');
})
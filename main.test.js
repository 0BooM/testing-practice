import {capitalize, reverseString} from "./main";

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
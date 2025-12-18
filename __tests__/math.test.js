import { divide } from "../math.js";

describe('', () => {
        test('test function correct behaviour', () => {
        expect(divide(6, 2)).toBe(3);
    })

    test('test function throws an error when secondNumber === 0', () => {
        expect(() => divide(2, 0)).toThrow('Division by zero');
    })

    test('test function works with negative numbers', () => {
        expect(divide(-6, 2)).toBe(-3);
    })
})

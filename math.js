export function divide(firstNumber, secondNumber) {
    if (secondNumber === 0) throw new Error('Division by zero');
    return firstNumber / secondNumber;
}

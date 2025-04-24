// operators... nb: one = is used for assignment, two == is used for equality check, three === is used for strict equality check
// arithmetic operators...
// subtraction -, addition +, multiplication *, division /, modulo % (used to find remainder after division, to determine odd and even numbers)

// comparison operators...
// greater than >, less than <, gtearter than or equal to >=, less than or equal to <=, equal to ==, not equal to !=, strict equal ===, strict not equal !==

// let num1 = 30
// let num2 = 24

// const isNum1GreaterOrEqualTo = num1 >= num2

// console.log(isNum1GreaterOrEqualTo)

// let num1 = 30
// let num2 = 24

// const isNum1LesserOrEqualTo = num1 <= num2

// console.log(isNum1LesserOrEqualTo)

// equality operators...
// let a = 2
// let b = '2'

// console.log(a == b)
// this evaluates to what is known as truthy because it only checks value, not type

// when using strict equality ===, it checks both value and type
// console.log(a === b)
// this evaluates to false because the type is different, even though the value is the same

// ternary operator... the ternary operator '?', is used to evaluate a condition and return one of two values based on the result of the evaluation
// let firstPersonAge = 14 
// const cantDrive = firstPersonAge >= 16 ? true : false
// console.log(cantDrive)

// let secondPersonAge = 16 
// const canDrive = secondPersonAge >= 16 ? true : false
// console.log(canDrive)

// let points = 120
// const customerType = points > 100 ? 'Gold' : 'Silver'
// console.log(customerType)

// logical operators... 
// '||' or, '&&' and, '!' not, '??' null coalescing nb: values that are >= 1 are considered truthy, values that are < 1 are considered falsy
// ||, nb: there are four possible combinations with two operands (boolean values)
// console.log(true || true) // true
// console.log(true || false) // true
// console.log(false || true) // true
// console.log(false || false) // false

// // &&, nb: '||' and '&&' perform short circuit evaluations; where the evaluation of the second operand is skipped if the outcome can be determined by evaluating the first operand alone.
// console.log(true && true) // true
// console.log(true && false) // false
// console.log(false && true) // false
// console.log(false && false) // false

// // !, negates the value of the operand
// console.log(!true) // false
// console.log(!false) // true

// ??,
// let a = null
// const result = a ?? false
// console.log(result) // false

// operator precedence...
// javascript evaluates expressions based on operator precedence, which determines the order in which operators are applied in an expression.
// the order of precedence is as follows:
// 1. parentheses
// 2. exponentiation
// 3. multiplication, division, modulo
// 4. addition, subtraction; nb: pemdas basically


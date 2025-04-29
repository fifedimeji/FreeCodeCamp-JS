// if-else statements...
// let priceOfBook = 15000
// let ownedCash = 35000

// const canBuyBook = ownedCash >= priceOfBook

// if (canBuyBook) {
//     console.log('Enjoy your book!')
// } else {
//     console.log("Sorry, you can't buy this book.")
// }

// let hour = 10
// if (hour >= 6 && hour <= 12) 
//     console.log("Serving breakfast.")    
// else if (hour > 12 && hour <= 14)
//     console.log("Serving lunch.")
// else console.log("Serving dinner.")

// let job = 'software developer'

// if (job === 'software developer') {
//     console.log("Welcome, move to the 4th floor")
// } else if (job === 'product designer') {
//     console.log("Welcome, mmove to the 3rd floor")
// } else if (job === 'cloud engineer') {
//     console.log("Welcome, move to the 2nd floor")
// } else {
//     "Welcome, move to the 1st floor"
// }

// switch-case statements... in situations where you have multiple conditions to check, switch statements can be more readable than if-else statements
// switch (job) {
//     case 'software developer':
//         console.log("Welcome, move to the 4th floor")
//         break
//     case 'product designer':
//         console.log("Welcome, move to the 3rd floor")
//         break
//     case 'cloud engineer':
//         console.log("Welcome, move to the 2nd floor")
//         break
//     default:
//         console.log("Welcome, move to the 1st floor")
// }
// switch-case statements only apply when doing equality checks

// for loops...
// let numbers = [1, 2, 3, 4, 5, 6, 7]

// let idx = 0
// let lengthOfArray = numbers.length

// console.log(numbers[idx++])
// console.log(numbers[idx++])
// console.log(numbers[idx++])
// console.log(numbers[idx++])
// console.log(numbers[idx++])
// console.log(numbers[idx++])
// console.log(numbers[idx])
// this is clunky code

// for (let idx = 0; idx < numbers.length; idx++) {
//     console.log(numbers[idx])
// }

// for (let num = 0; num < 10; num++) {
//     console.log(num)
// }

// while loops...
// let numbers = [1, 2, 3, 4, 5, 6, 7]
// let idx = 0
// while (idx < numbers.length) {
//     console.log(numbers[idx])

//     idx++
// }

// let sum = 0
// while (true) {
//     console.log('while loop')
//     sum++

//     if (sum === 10)
//         break
// }

// do-while loops...
// let i = 0

// do {
//     console.log('do-while loop')
//     i++
// } while (i <= 10)

// infinite loops... ensure to specify a condition that will eventually evaluate to false, or use a break
// let count = 0;
/* this is an infinite loop */
// while (true) {
//   console.log("Loop iteration:", count)
//   count++
    
// if (count > 1000) break} /* termination condition: uncomment to avoid crash */


// for-in loops...
// const course = {
//     name: "JavaScript for Beginners",
//     duration: 3,
//     sections: 7
// }

// console.log(course.name)
// console.log(course['duration'])
// console.log(course.sections)

// for (const key in course) {
//     console.log
// }

// for-of loops...
// let numbers = [1, 2, 3, 4, 5]
// for (let idx = 0; idx < numbers.length; idx++) {
//     console.log(numbers[idx])
// }

// for (let element of numbers) {
//     console.log(element)
// }

// break and continue statements...
// break: ends the loops execution
// for (let i = 0; i < 10; i++) {
//     if (i === 5) {
//         break 
//     } // exits the loop when i is  strictly equal to 5

//     console.log(i)
// }

// let i = 0
// while (i < 10) {
//     if (i === 5) {
//         break
//     }
//     console.log(i)
//     i++
// }
    
// let i = 0
// do {
//     if (i === 5) {
//         break
//     }
//     console.log(i)
//     i++
// } while (i < 10)

// const obj = {a: 1, b: 2, c: 3}
// for (let key in obj) {
//     if (key === 'c') {
//         break
//     }
//     console.log(obj[key])
// }

// const arr = [1, 2, 3, 4, 5]
// for(let element of arr) {
//     if(element === 3) {
//         break
//     }
//     console.log(element)
// }


// continue: skips iterations that satisfy the set condition
// for (let i = 0; i < 10; i++) {
//     if(i % 2 === 0) {
//         continue
//     }
//     console.log(i)
// }

// let i = 0
// while(i < 10) {
//     i++
//     if(i % 2 === 0) {
//         continue
//     }
//     console.log(i)
// }

// let i = 0
// do {
//     i++
//     if (i % 2 === 0) {
//         continue
//     }
//     console.log(i)
// } while (i < 10)

// const obj = {a: 1, b: 2, c: 3, d: 4}
// for (let key in obj) {
//     if (obj[key] % 2 === 0) {
//         continue 
//     }
//     console.log(obj[key])
// }

// const arr = [1, 2, 3, 4, 5]
// for (let element of arr) {
//     if (element % 2 === 0) {
//         continue
//     }
//     console.log(element)
// }

// exercise
// function maxNum(num1, num2) {
//     return num1 >= num2 ? num1 : num2
// }

// console.log(maxNum(2, 5))

// exrercise2: fizzBuzz
// function fizzBuzz(num) {
//     if (num % 3 === 0 && num % 5 === 0) {
//         return "FizzBuzz"
//     } else if (num % 3 === 0) {
//         return "Fizz"
//     } else if (num % 5 === 0) {
//         return "Buzz"
//     } else {
//         return num
//     }
// }

// console.log(fizzBuzz(15))
// console.log(fizzBuzz(9))
// console.log(fizzBuzz(10))
// console.log(fizzBuzz(7))

// exercise3 even/odd numbers
// function evenNum(arr) {
//     for (const number of arr) {
//         if (number % 2 === 0)
//             console.log(number + " is even")
//     }    
// }
// evenNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

// function oddNum(array) {
//     for (const number of array) {
//         if (number % 2 !== 0)
//             console.log(number + " is odd")
//     }
// }
// oddNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
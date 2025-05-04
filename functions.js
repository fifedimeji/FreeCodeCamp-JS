// function sayHi() {
//     console.log('Hi')
// }

// sayHi() //function declaration syntax

// let sayHi = function() {
//     console.log('Hi')
// }  

// sayHi() //function expression syntax

// hoisting...
// add(2, 2)

// function add(num1, num2) {
//     console.log(num1 + num2)
// }  //with function declaration JS runs a function whether it is called before or after its execution

// let add = function(num1, num2) {
//     console.log(num1 + num2)
// }

// function arguments...
// function multiply(num1, num2) {
//     let product = 1
//     for (const num of arguments)
//         product *= num

//     return product
// }

// console.log(multiply(3, 98)) 
// console.log(multiply(2)) //if only one argument is passed in JS will log NaN(not a number) in the terminal
// console.log(multiply(3, 5, 57))

// the rest operator... allows us to gather a varying number of arguments into a single array parameter
// function multiply(...args) {
//     return args.reduce((accumulator, currentValue) => accumulator * currentValue)
// }

// console.log(multiply(2, 4, 5, 3, 6))

// function multiply(multiplier, ...numbers) {
//     return numbers.map(number => number * multiplier)
// }

// console.log(multiply(2, 1, 2, 3, 4))

// default parameters...
// function writeCode(language = 'Javascript') {
//     console.log(`Write code in: ${language}`)
// }

// writeCode()
// writeCode('C#')

// function codeDetails(language = 'Javascript', tool = 'VS Code') {
//     console.log(`Writes code in: ${language}, using: ${tool}`)
// }

// codeDetails()
// codeDetails('C#', 'Atom')
// codeDetails('Python', 'PyCharm')
// codeDetails('Java')

// function createUser(name, role = 'Guest', status = 'Active') {
//     console.log(`User: ${name}, Role: ${role}, Status: ${status}`)
// }

// createUser('Fife')
// createUser('Fej', 'Admin', 'Superactive')

// get and set...
// const course = {
//     name: 'Javascript for Beginners',
//     duration: '3 Hours',
//     get details() {
//         return `${this.name} is ${this.duration}`
//     },
//     set details(value) {
//         let parts = value.split(' is ')
//         this.name = parts[0]
//         this.duration = parts[1]
//     }
// }

// // console.log(course.details)

// course.details = 'Javascript Pro is 10 Hours'

// console.log(course.details)

// try-catch blocks...
// const course = {
//     name: 'Javascript for Beginners',
//     duration: '3 Hours',
//     get details() {
//         return `${this.name} is ${this.duration}`
//     },
//     set details(value) {
//         if(typeof value !== 'string') {
//             throw new Error(`Value , ${value} is not a string`)
//         }
//         let parts = value.split(' is ')
//         this.name = parts[0]
//         this.duration = parts[1]
//     }
// }

// try {
//     course.details = 42
// } catch(e) {
//     console.log(`Caught an error: ${e.message}`)
// }



// adding elemnts...
// const numbers = [5, 4, 3, 2, 1]

// numbers.push(7, 8, 9)
// console.log(numbers)

// numbers.unshift(25)
// console.log(numbers)

// numbers.splice(1, 0, 25, 24)
// console.log(numbers)

// finding elemants... 
// primitive values... | .indexOf, .lastIndexOf, .includes
// const numbers = [5, 4, 3, 2, 1, 3]
// const indexOfThree = numbers.indexOf(3)
// console.log(indexOfThree)

// const lastIndexOfThree = numbers.lastIndexOf(3)
// console.log(lastIndexOfThree)

// const indexOfTen = numbers.indexOf(10)
// console.log(indexOfTen)
// console.log(numbers[indexOfTen])

// if (indexOfTen === -1)
//     console.log('10 is not found in the array')

// if (!numbers.includes(10)) {
//     console.log('10 is not found in the array')
// }

// reference values... 
// const employees = [
//     {
//         id: 1,
//         name: 'Jim'
//     },
//     {
//         id: 2,
//         name: 'Dwight'
//     },
//     {
//         id: 3,
//         name: 'Pam'
//     }
// ]

// const employee = employees.find(function(e) {
//     return e.name === 'Jim'
// })
// console.log(employee)

// const employee2 = employees.find((e) => e.name === 'Pam') //arrow function
// console.log(employee2)

// const employeeIndex = employees.findIndex(function(e) {
//     return e.name === 'Dwight'
// })
// console.log(employeeIndex)

// arrow function...
// function add(num1, num2) { //regular function declaration
//     return num1 + num2
// }

// const add = (num1, num2) => num1 + num2 //arrow function

// removing elements...
// const numbers = [1, 2, 3, 4, 5]

// const lastElement = numbers.pop()
// console.log(`lastElement: ${lastElement}\n`)

// const firstElement = numbers.shift()
// console.log(`firstElement: ${firstElement}\n`)

// const middleElement = numbers.splice(1, 1)
// console.log(`middleElement: ${middleElement}`)

// emptying an array...
// let numbers = [1, 2, 3, 4, 5]
// let anotherArray = numbers //stops garbage collection for this array from option 4

// while (numbers.length > 0) //not efficient
//     numbers.pop()

// numbers.length = 0 //assign the length of the array to 0
// console.log(numbers)

// const deletedNumbers = numbers.splice(0, numbers.length) 
// console.log(`deletedNumbers: ${deletedNumbers}`)

// numbers = [] //reassign variable to a new empty array, previous array will be garbage collected

// combining and slicing arrays...
// const numbers1 = [1, 2, 3]
// const numbers2 = [4, 5, 6]

// const combinedNumbers = numbers1.concat(numbers2)
// console.log(combinedNumbers)

// const firstSlice = combinedNumbers.slice(0, 4)
// console.log(firstSlice)

// the spread operator...
// const numbersA = [1, 2, 3]
// const numbersB = [4, 5, 6]

// let combined = [...numbersA, ...numbersB] //provides more flexibility than the concat method
// console.log(combined)

// let a = [1, 2]
// let b = a //this allocates b to the same array as a i.e, both a and b refer to the same array in memory

// let c = [3, 4]
// let d = [...c] //this creates a copy of c and assigns it to d

// iterating over an array...
// const numbers = [1, 2, 3, 4, 5] 

// for (let number of numbers)
//     console.log(number)

// numbers.forEach((number, index) => console.log(`At Index, ${index}: ${number}`))

// joining arrays...
// const numbers = [1, 2, 3, 4, 5]
// const joinedNumbers = numbers.join(',')
// console.log(joinedNumbers)

// const courseName = 'Javascript for Beginners'

// const lowerCaseName = courseName.toLowerCase()
// const parts = lowerCaseName.split(' ')

// const parts = courseName
//     .toLowerCase()
//     .split(' ')

// const urlSlug = parts.join('-')
// console.log(urlSlug)

// sorting arrays...
// let arr = [5, 3, 7, 2, 6]
// arr.sort()
// console.log(arr)

// let emp = [
//     {id: 1, name: 'Kevin'},
//     {id: 2, name:'Phyllis'},
//     {id: 3, name: 'Stanley'},
//     {id: 4, name: 'Angela'}
// ]
// emp.sort((a, b) => {
//     const lowerCaseA = a.name.toLowerCase()
//     const lowerCaseB = b.name.toLowerCase()

//     if (lowerCaseA < lowerCaseB) return -1
//     if (lowerCaseA > lowerCaseB) return 1
//     return 0
// })

// console.log(emp)

// testing elements in arrays... | .every(), .some()
// const num = [2, 4, 6, 8, 10] //.every()

// const allEven = num.every(number => number % 2 === 0)
// console.log(`allEven: ${allEven}`)

// const numbers = [1, 3, 5, 7, 8, 9]

// const anyEvenNumber = numbers.some(number => number % 2 === 0)
// console.log(`anyEvenNumber: ${anyEvenNumber}`)

// filtering arrays...
// const numbers = [1, 2, 3, 4, 5, 6]

// const evenNumbers = numbers.filter(number => number % 2 === 0)
// console.log(evenNumbers)

// const staff = [
//     {id: 1, name: 'Jim', role: 'Sales'},
//     {id: 2, name: 'Angela', role: 'Accounts'},
//     {id: 3, name: 'Todd', role: 'HR'},
//     {id: 4, name: 'Michael', role: 'Management'},
//     {id: 5, name: 'Dwight', role: 'Sales'}
// ]

// const sales = staff.filter(staff => staff.role === 'Sales')
// console.log(sales)

// mapping an array... .map()
// const numbers = [2, 4, 6, 8, 10]
// const exponents = numbers.map(number => number * number)
// console.log(exponents)

// const characters = ['a', 'b', 'c', 'd']
// const upperCase = characters.map(char => char.toUpperCase())
// console.log(upperCase)

// const employees = [
//     {id:1, name: 'Halpert', email: 'jIMhAlpeRt@gmail.com'},
//     {id:1, name: 'Schrutte', email: 'dwiGHtScruTTe@gmail.com'},
//     {id:1, name: 'Scott', email: 'MichealSCOTT@gmail.com'}
// ]

// const lowerCaseEmail = employees.map(employee => ({
//     ...employee,
//     email: employee.email.toLowerCase()
// }))
// console.log(lowerCaseEmail)

// reducing an array... 
// const numbers = [3, 15, 865, 5678, 29, 76]
// let sum = 0

// for (const num of numbers)
//     sum += num
// console.log(`Total sum: ${sum}`)

// const sum = numbers.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue
// }, 0)

// const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue)

// console.log(`Total sum: ${sum}`)
// object literals...
// const dog = {
//     name: 'Max',
//     breed: 'Dachshund',
//     age: 5,
//     weightInPounds: 12,
//     eat: function() {
//         console.log('Chomp!')
//     },
//     bark() {
//         console.log('Woof!')
//     }
// }

// factory functions... used to avoid repetitive creation of objects
// const anotherDog = {
//     name: 'Marley',
//     breed: 'Labrador',
//     age: 7,
//     weightInPounds: 60,
//     eat: function() {
//         console.log('Chomp!')
//     },
//     bark() {
//         console.log('Woof!')
//     }
// }

// function getDog(name, breed, age, weightInPounds) {
//     return {
//         name,
//         breed,
//         age,
//         weightInPounds,
//         eat() {
//             console.log('Chomp!')
//         },
//         bark() {
//             console.log('Woof!')
//         }
//     }
// }

// const anotherDog = getDog('Marley', 'Labrador', 7, 60)
// console.log(anotherDog)

// constructor functions... used to instantiate objects
// function Dog(name, breed, age, weightInPounds) {
//     this.name = name
//     this.breed = breed
//     this.age = age
//     this.weightInPounds = weightInPounds

//     this.eat = function() {
//            console.log(this.name + ': Chomp!')
//     }

//     this.bark = function() {
//         console.log(this.name + ': Woof!')
//     }
// }

// const anotherDog = new Dog('Marley', 'Labrador', 7, 60)
// console.log(anotherDog)

// objects are mutable
// const person = {
//     name: 'Fife'
// }
// console.log(person)

// person.favouriteFood = 'jollof rice'
// console.log(person)

// person.favouriteSport = 'basketball'
// console.log(person)

// person.favouriteColour = 'Orange'
// console.log(person)

// delete person.favouriteColour
// console.log(person)

// person.eat = function() {
//     console.log('start eating')
// }

// person.eat()

// constructor properties...
// const person = {
//     name: 'Fife'
// }

// console.log(person.constructor) // returns the constructor function of the object

// let newObj = {}
// let newObj = new Object() 

// new String() 
// new Boolean()
// new Number()

// functions are objects...
// function add(num1, num2) {
    // return num1 + num2
// }

// const n = add
// console.log(n(5, 7))

// console.log(add.length)

// function Programmer(name) {
//     this.name = name
//     this.writeCode = function () {
//         console.log("code with javascripit")
//     }
// }

// console.log(Programmer.length)
// console.log(Programmer.constructor)

// const Programmer = new Function('name',`
//     this.name = name
//     this.writeCode = function (){
//         console.log("code with javascript")
//     }`
// )

// const newProgrammer = new Programmer('Fife')
// newProgrammer.writeCode()

// enumerating properties of an object...
// let num = [1, 2, 3, 4, 5]
// for (const elements of num) {
//     console.log(elements)
// }

// const dog = {
//     name: 'max',
//     age: 5,
//     eyeColour: 'blue'
// }
// for (const key in dog) {
//     console.log(dog[key])
// }

// const keys = Object.keys(dog)
// console.log(keys)

// const values = Object.values(dog)
// console.log(values)

// const entries = Object.entries(dog)
// console.log(entries)

// for (const key of Object.keys(dog)) {
//     console.log(key)
// }

// for (const value of Object.values(dog)) {
//     console.log(value)
// }

// for (const entry of Object.entries(dog)) {
//     console.log(entry)
// }

// cloning an object...
// let a = {value: 10}
// let b = a

// b.value = 20

// console.log(a)
// console.log(b)

// let a = {value: 10}
// let b = {...a}

// Object.assign(b, a)

// b.value = 20

// console.log(a)
// console.log(b)

// built-in math functions...
// Math.floor()
// Math.round()
// Math.ceil()
// Math.max()
// Math.min()
// Math.sqrt()
// Math.pow()
// Math.random()

// const randomNum = Math.round(Math.random() * (100 - 1) + 1) //generates a random whole number between 1 and 100
// console.log(randomNum) 

// string methods...
// string literal... done with double quotes"" and single quotes''
// const name = 'Fife'
// console.log(typeof name)

// string objects...
// const anotherName = new String('Joe')
// console.log(typeof anotherName)

// let sentence = " A new sentence. "

// const doesIncludeNew = sentence.includes('new')
// console.log(doesIncludeNew)

// console.log(sentence[3])

// const startsWithA = sentence.startsWith('A')
// console.log(startsWithA)

// const endsWithA = sentence.endsWith('A')
// console.log(endsWithA)

// let updatedSentence = sentence.replace('new', 'short')
// console.log(updatedSentence)

// trimmedSentence = sentence.trim()
// console.log(trimmedSentence)

// const wordsInSentence = sentence.split(' ')
// console.log(wordsInSentence)

// let email = 'TesTEmail@gmail.com'

// let lowerCaseEmail = email.toLowerCase()
// console.log(lowerCaseEmail)

// let upperCaseEmail = email.toUpperCase()
// console.log(upperCaseEmail)

// let firstName = 'Fife'
// let lastName = 'Oladimeji'

// let fullName = `${firstName} ${lastName}`
// console.log(fullName)


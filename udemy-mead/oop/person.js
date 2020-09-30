class Person  {
    constructor(firstName, lastName, age, likes) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }
    getBio() {
        let bio = `${this.firstName} is ${this.age} years old. His likes are`

        this.likes.forEach((like) => {
            bio += ` ${like}, `
        })
        return bio
    }

    set fullName(fullName) {
        const fullNameArr = fullName.split(' ')
        console.log(fullNameArr)
        this.firstName = fullNameArr[0]
        this.lastName = fullNameArr[1]
    }
}

class Employee extends Person {
    constructor(firstName, lastName, age, position, likes) {
        super(firstName, lastName, age, likes)
        this.position = position
    }

    getBio() {
        let bio = `${this.firstName} is ${this.age}. They are employed as a ${this.position}`
        return bio
    }

    getYearsLeft() {
        return 65 - this.age
    }
}

class Student extends Person {
    constructor(firstName, lastName, age, grade, likes) {
        super(firstName, lastName, age, likes)
        this.grade = grade
    }

    getBio() {
        return `${this.firstName} is ${this.age}. Their grade is ${this.grade}`
    }

    updateGrade(change) {
        this.grade += change
    }
}

const tim = new Person('Tinny', 'Tim', 8, ['video games', 'candy'])
tim.fullName = 'Timothy WIddlesworth'
console.log(tim.getBio())




// console.log(person1.getBio())
// person1.setName('Reginald Picklebottom')
// console.log(person1.getBio())




// const Person = function (firstName, lastName, age, likes) {
//     this.firstName = firstName
//     this.lastName = lastName
//     this.age = age
//     this.likes = likes
// }

// const person1 =  new Person('Tommy', 'Texter', 15, ['reading', 'playing chess'])

// Person.prototype.getBio = function () {
//     let bio = `${person1.firstName} is ${person1.age} years old. His likes are`

//     this.likes.forEach((like) => {
//         bio += ` ${like}, `
//     })
//     return bio
// }

// Person.prototype.setName = function (fullName) {
//     const fullNameArr = fullName.split(' ')
//     console.log(fullNameArr)
//     this.firstName = fullNameArr[0]
//     this.lastName = fullNameArr[1]
// }

// person1.getBio = function () {
//     console.log('updated bio ...')
// }

// const person2 = new Person('Sally', 'Seatkicker', 20, ['hunting', 'watching tv'])

// person1.getBio()
// console.log(person2.getBio())
// //Print updated bio..
// // Print Tomy is 15 years olds. likes etc...
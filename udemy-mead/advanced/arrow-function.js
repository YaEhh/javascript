const square = (num) => num * num

const squareLong = (num) => {
    return num * num
}

const people = [{
    'name': 'reginald',
    'age': 31
}, {
    'name': 'lord',
    'age': 22
}]

const under30 = people.filter((person) => person.age < 30 )
const person22 = people.find((person) => person.age === 22)
console.log(person22.name)


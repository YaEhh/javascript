// const myFunc = () => {
//     const message = 'My Message'
//     const printMessage = () => {
//         console.log(message)
//     }
//     return printMessage
// }

// const myPrintMessage = myFunc()
// myPrintMessage()    

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const createCounter = () => {
//     let count = 0

//     return {
//         increment() {
//             count++
//         },
//         decrement() {
//             count--
//         },
//         get() {
//             return count
//         }
//     }
// }

// const counter = createCounter()
// counter.increment()
// counter.increment()
// counter.increment()
// counter.decrement()
// console.log(counter.get())


//////////////////////////////////////////////////////////////////////////////////////

const createAdder = (a) => {
    return (b) => {
        return a + b
    }
}

const add10 = createAdder(10)
console.log(add10(-2))
console.log(add10(20))


const createTipper = (tipPerc) => {
    return (totalAmount) => {
        return totalAmount * tipPerc
    }
}

const tip15 = createTipper(0.15)
console.log(tip15(100))



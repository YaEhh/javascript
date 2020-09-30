
// const getDataCallback = (num, callback) => {
//     setTimeout(() => {
//        if (typeof num === 'number') {
//            callback(undefined, num * 2)
//        } else {
//            callback('error', undefined)
//        }
//     }, 2000);
// }

// getDataCallback(2,(error, data) => {
//     if (error) {
//         console.log(error)
//     } else {
//         getDataCallback(2, (error, data) => {
//             if (error) {
//                 console.log(error)
//             } else {
//                 console.log(data)
//             }
//         })
//     }
// })

// Promise

// const createPromise = (num) => new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (typeof num === 'number') {
//             resolve(num * 2)
//         } else {
//             reject('erroooor')
//         }
//     }, 2000);
// })
    
// const myPromise = createPromise(3)
// myPromise.then((data) => {
//     createPromise(data).then((data) => {
//         console.log(data)
//     }, (err) => {
//         console.log(error)
//     })
// }, (err) => {
//     console.log(err)
// })

const createPromise = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
        if (typeof num === 'number') {
            resolve(num * 2)
        } else {
            reject('erroooor')
        }
    }, 2000);
})

const myPromise = createPromise(3)
myPromise.then((data) => {
    return createPromise(data)
}).then((data) => {
    console.log(data)
}).catch((err) => {
    'Erroooor'
})
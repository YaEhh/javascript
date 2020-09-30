const products = [{name: 'cecil'}]
const product = products[0]

//Truthy - Value that resolve to true in a boolean context
//Falsy - Values that resolve to false in the boolean context
    // falsy values - false, 0, empty string, null, undefined, NaN
if (product) {
    console.log('Product Found')
} else {
    console.log('Product not found')
}

//
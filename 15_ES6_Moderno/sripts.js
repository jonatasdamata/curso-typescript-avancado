// 1 - var, let e const
var x = 10
var y = 15

if (y >10) {
    var x = 5
    console.log(x)
}

console.log(x)

let a = 10
let b = 15

if(b > 10){
    let a = 5
    console.log(a)
}

console.log(a)

let i = 100

for (let i = 0; i < 5; i++) {
    console.log(i)
}

console.log(i)

function logName(){
    const name = "Jhon"
    console.log(name)
}

const name = "Jonatas"

logName()
console.log(name)

// 2 - arrow function 

const arrownSum = (a, b) => {
    return a + b
}

console.log(sum(5,5))


//3 - filter
const arr = [ 1, 2, 3 , 4, 5 ]

const highNumers = arr.filter((n) => {
    if(n >= 3) {
        return n
    }
})

console.log(highNumers)


//4 - map
const products = [
    { name: 'Camisa', price: 10.99, category: 'Roupas' },
    { name: 'Chaleira Elétrica', price: 89.99, ctaegory: 'Eletro' },
    { name: 'Fogão', price: 399.99, category: 'Eletro' },
    { name: 'Calça Jenas', price: 110.99, category: 'Roupas' },
]

products.map((products) => {
    if (products.category === 'Roupas') {
        products.onSale = true
    }
})

console.log(products)


//5 - template literals
const userName = "Jonatas"
const age = 26

console.log(`O nome do usuário é: ${userName}, e a sua idade é: ${age}`)

// 6 - destructing 

// 7 - spread operator


// 8 - classes
class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }

productEithDescount(discount) {
    return this.price * ((100 - discount) / 100)
}
}

const shirt = new Product('Camisa gola V', 20)

console.log(shirt.name)
console.log(shirt.productEithDescount(10))

// 9 - herança

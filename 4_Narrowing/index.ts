
// Typeof type guard

function sum(a: number | string, b: number | string ) {
    if(typeof a === "string" && typeof b === "string") {
        console.log(parseFloat(a) + parseFloat(b))
    } else if(typeof a == "number" && typeof b === "number") {
        console.log(a + b)
    } else {
        console.log("Impossível realizar a soma!")
    }
}

sum("4","8")
sum(4, 2)
sum("6", 8) 


// Instance of
class User {
    name

    constructor(name: string) {
        this.name = name
    }
}

class SuperUser extends User {
    constructor(name: string) {
        super(name)
    }
}

const jhon = new User("Jhon")
const paul = new SuperUser("Paul")

console.log(jhon)
console.log(paul)

function UserGreeting(user: object) {
    if(user instanceof SuperUser) {
        console.log(`Olá, ${user.name}! Deseja ver os dados do sistema?`)
    } else if(user instanceof User) {
        console.log(`Olá, ${user.name}!`)
    }
}

UserGreeting(jhon)
UserGreeting(paul)


// operador in 

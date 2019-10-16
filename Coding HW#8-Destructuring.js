const alphabet = ['A', 'B', 'C','D','E','F']
const numbers = ['1', '2', '3','4','5','6']

const a = alphabet [0]

console.log(a) //logs A 

const [a,b] = alphabet //grabs the first two elements
const [a,, c, ...rest] = alphabet //grabs a, skips b, grabs c and the rest of the element 
const newArray = [...alphabet, ...numbers] //combines the arrays 
//or
const newArray = alphabet.concat(numbers)

function sumAndMultiply(a,b) {
    return [a+b, a*b, a/b]
}

const [sum, multiple, division = 'No division'] = sumAndMultiply(2,3)
console.log(array)
console.log(multiply)
console.log(division) //logs division if that value is returned

//Object Destructuring
const personOne = {
    name:'Kyle',
    age: 24,
    address: {
        city: 'Somewhere',
        state: 'one of them'
    }
}

const personTwo = {
    name:'Sally',
    age: 32,
    favoriteFood: 'Watermelon',
    address: {
        city: 'Somewhere else',
        state: 'Another one of them'
    }
}

const {name: firstName = 'john', age, favoriteFood = 'Rice'} = personTwo //also works with ...rest and nests which destructures street and state
console.log(firstName)
console.log(age)

//we can also use destructuring to combine objects

const personThree = {...personOne, ...personTwo}

console.log(personThree)

function printUser({ name, age, favoriteFood = 'Watermelon'}) {
    console.log(`Name is: ${.name}. Age is  ${age}. Food is ${favoriteFood}`)
}
printUser(personOne)
const students = [
    {
        name: "Alex",
        age: 23,
        friends: ["Bob", "Ilona"],
        scores: 89
    },
    {
        name: "Ilona",
        age: 35,
        friends: ["Bob", "Nik"],
        scores: 20
    },
    {
        name: "Bob",
        age: 34,
        friends: ["Ilona", "Nik"],
        scores: 200
    },
    {
        name: "Nik",
        age: 18,
        friends: ["Bob", "Ilona"],
        scores: 45
    }
]

console.log(students.map(st => ({...st, age: st.age + 1})))

function map(array, func) {
    const newArr = []
    for (let i = 0; i < array.length; i++) {
        newArr[i] = func(array[i])
    }
    return newArr
}

// function nullFn(st) {
//     st.age = null
//     return st
// }
// console.log("2", map(students, nullFn))
console.log("initial", students)
console.log("map", map(students,st => ({...st, age: st.age + 1})))

function filterElemens(array, func) {
    const newArr = []
    for (let i = 0; i < array.length; i++) {
        if(func(array[i]) === true) {
            newArr.push(array[i])
        }
    }
    return newArr
}
console.log("filterElemens", filterElemens(students, el => el.age > 25))

// console.log(students.filter(el => el.age > 25))

function find(array, func) {            // возвращает первый элемент на котором функция вернула тру
    for (let i = 0; i < array.length; i++) {
        if(func(array[i]) === true) {
            return array[i]
        }
    }
}

console.log("find",find( students, (st => st.age === 18)))
console.log(students.find(st => st.age === 34))
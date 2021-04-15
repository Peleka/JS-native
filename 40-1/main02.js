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
        age: 34,
        friends: ["Bob", "Ilona"],
        scores: 45
    }
]

const result1 = students.map(s => {
    return {
        ...students, scores: s.scores + 10
    }
})
console.log("map:", result1)

const result2 = students.filter(s => s.age === 34)

console.log("filter", result2)

const result3 = students.find(s => s.name === "Nik")
console.log("find", result3)
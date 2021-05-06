let students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    },
    {
        name: "Roy",
        age: 33,
        isMarried: false,
        scores: 160
    },
    {
        name: "Yan",
        age: 47,
        isMarried: false,
        scores: 15
    }
];

//поверхностная копия
const copyStudents = [...students]
console.log("copyStudents", copyStudents === students) //false
console.log("copyStudents name", copyStudents[0] === students[0]) //true

//deepCopy полная копия
const deepCopyStudents = students.map(s => ({...s})) //map
console.log("deepCopy", deepCopyStudents === students) //false
console.log("deepCopy[0]", deepCopyStudents[0] === students[0]) //false
console.log("deepCopyStudents", deepCopyStudents)

//sort
// console.log("sort name",deepCopyStudents.sort((a,b) => a.name > b.name ? 1 : -1))
console.log("sort score", deepCopyStudents.sort((a, b) => b.scores - a.scores))

//filter (score >= 100)
console.log("filter", students.filter(s => s.scores >= 100))

// //find (score < 88)
// console.log("find", students.find(s => s.scores < 88))

//splice(pos, deleteCount, ...items) – начиная с индекса pos, удаляет
//deleteCount - кол-во эл-ов
let removeStudents = deepCopyStudents.splice(0, 3)
console.log("removeStudents", removeStudents)
//
// //скдеевание массивов
const arrays = [...deepCopyStudents, ...removeStudents]
console.log("arrays", arrays)

//isMarried = false
const isMarriedFalse = arrays.filter(st => !st.isMarried)
console.log("isMarriedFalse", isMarriedFalse)

//Сформируйте массив имен студентов
const newArrayStudents = students.map(s => ({...s}))
console.log('newArrayStudents', newArrayStudents)
const arrayNamesStud = newArrayStudents.map(s => s.name)
console.log("name", arrayNamesStud)
//Сформируйте массив имен студентов разделенных запятой  и разделенных пробелом
console.log(arrayNamesStud.join(' '))
console.log(arrayNamesStud.join(','))
//добавьте всем студентам сво-во isStudent  сщ значением true
let trueStudents = newArrayStudents.map((st) => ({...st, isStudent: true}))
console.log("trueStudents", trueStudents)
//Nik женился. Выполните соответсвующее преобразование массива
let nikIsMarried = newArrayStudents.map(st => {
    if (st.name === "Nick") {
        return {...st, isMarried: true}
    } else {
        return st
    }
})
console.log(nikIsMarried)
//Найдите студента по имени Ник
console.log("Nick", newArrayStudents.find(st => st.name === "Nick"))
//найдите студента с самым высоким баллом(reduce)
const bestStudent = newArrayStudents.reduce((acc, el) => {
        return acc.scores > el.scores ? acc : el
    }
)
console.log("bestStudent", bestStudent)

//Найдите сумму баллов всех студентов
const sumScore = newArrayStudents.reduce((acc, el) => acc + el.scores, 0)
console.log("sumScore", sumScore)
//14. Напишите функцию addFriends которая принимает параметром массив students
//и добавляет в каждому студенту свойство friends,
//значение которого является массив имен всех остальных студентов из массива,
//за исключением собственного имени студента

function addFriends(array) {
    const friendsName = array.map(fr => fr.name)
    return array.map(st => ({...st, friends: friendsName.filter(name => st.name !== name)}))
}

console.log("addFriends", addFriends(newArrayStudents))
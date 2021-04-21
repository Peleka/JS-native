const todolistID_1 = "233-gf" //v1()
const todolistID_2 =  "233-kl"

const todolist = [
    {
        id: todolistID_1,
        title: 'Wish list1',
        filter: 'all'
    },
    {
        id: todolistID_2,
        title: 'Wish list2',
        filter: 'all'
    }
]

const tasks = {
    [todolistID_1]: [                  //[] чтобы сказать что это имя переменной в которой сидит строка(вычисляемое свойство объекта)
        {id: 11, title: "Beer", isDone: true},
        {id: 12, title: "Beer", isDone: true},
        {id: 13, title: "Beer", isDone: true},
        {id: 14, title: "Beer", isDone: true},
    ],
    [todolistID_2]:
        [
            {id: 15, title: "Beer", isDone: true},
            {id: 16, title: "Beer", isDone: true},
            {id: 17, title: "Beer", isDone: true},
            {id: 18, title: "Beer", isDone: true},
        ]
}

// console.log(tasks[todolistID_1])
console.log(todolist[0]["title"]) // тоже самое что todolist[0].title
console.log(tasks[todolist[0].id][0])

//reducer

const numbers = [23, 45, 35, 78, 56, 98]
const sum = numbers.reduce((acc, el) => acc + el, 0)

console.log(sum)
const sum2 = myReducer(numbers, (acc, el) => acc + el, 0)
function myReducer(arr, fn, startValue) {
    let acc = startValue
    for(let i = 0; i < arr.length; i++) {
        acc = fn(acc, arr[i])
    }
    return acc
}

console.log('sum2', sum2)

const max = numbers.reduce((acc, el) => acc > el ? acc : el)

// работа с объектами
let students = [
    {
        name: "Bob",
        age: 32,
        isMarried: true,
        scores: 85
    },
    {
        name: "Ann",
        age: 22,
        isMarried: true,
        scores: 78
    },
    {
        name: "Ric",
        age: 43,
        isMarried: false,
        scores: 32
    },
    {
        name: "Son",
        age: 12,
        isMarried: true,
        scores: 100
    }
]

console.log(students.reduce((acc,el ) => acc + el.scores, 0 ))
console.log(students.reduce((acc, el) => {
    acc.push({...el, scores: el.scores + 100})
    return acc
} ,[]))
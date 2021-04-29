const tlID_1 = "34jf-76kg"  //v1()
const tlID_2 = "53pd_75kg"

const todolists = [
    {
        id: tlID_1,
        title: "What to learn",
        filter: "all",
        tasks: [
            {},
            {}
        ]
    },
    {
        id: tlID_2,
        title: "What to buy",
        filter: "all",
        tasks: [
            {},
            {}
        ]
    }
]

//когда в массиве объекты в которых есть еще массив объектов:
//чем более сложнее вложенность тем сложнее копирование.
// принцип иммутабельности
// усложняется сам процесс копирования

//=====================
//будем таски хранить отдельно
const tasks = {
    [tlID_1] : [
        {name: "HTML", isDone: true},
        {name: "Redux", isDone: true},
    ],
    [tlID_2] : [
        {name: "Beer", isDone: true},
        {name: "Book", isDone: true},
    ]
}
console.log(tasks[todolists[0].id][1].name)
console.log("1", tasks[tlID_1][1]["name"])
console.log("2", tasks[tlID_1][1].name)

///=====================
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
    },{
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];
//
// let nums = [1, 5, 6 , 8 ]
//
// console.log(nums.reduce((acc, el) => acc + el, 0))

// function addScore(acc, el) {
//     acc.push({...el, scores: el.scores + 10})
//     return acc
// }
//
// console.log(students.reduce(addScore, []))

let wot = students.reduce((acc, el) => {
    acc.push({...el, scores: el.scores + 10})
    return acc
}, [])
console.log("wot", wot)
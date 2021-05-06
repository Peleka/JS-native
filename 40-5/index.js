const array = [777, 23, 12, 43, 32, 65, 82, 21, 0, 99]

//bubble sort сoртировка пузырьком
for (let j = 0; j < array.length - 1; j++) {
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            //деструктуризация массивов:
            [array[i], array[i + 1]] = [array[i + 1], array[i]]
            //меняем переменную местами
            // let temp = array[i + 1]//промежуточная переменная
            // array[i + 1] = array[i]
            // array[i] = temp
        }
    }
}
console.log(array)

//sort  (reverse() - сорттирует в обратном порядке)

const names = ["Nik", "Bob", "Alex", "Dima"]
names.sort()
console.log(names)

const nums = [333, 25,11111,78]
nums.sort()
console.log(nums) // 11111, 25, 333, 78

//числа сортирует по юникоду. не по значению

// sort -> compereFunction

function comp(a, b) {
    if(a <= b) {
        return -1 //обстрактное отрицательное число
    } else {
        return 2  //обстрактное отрицательное число
    }
}
console.log(nums.sort(comp))

//shortComp
const shortComp = (a,b) => a - b

console.log(nums.sort(shortComp))

console.log(nums.sort((a,b) => a - b))
console.log(nums.sort((a,b) => b - a))


///

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
//по алфавиту имена
console.log(students.sort((a,b) => a.name < b.name ? -1 : 1))


///про this
let user = {
    name: 'Alex',
    age: 25,
    sayHallo() {
       return (this.name+ ' ' + 'Hello')
    }
}
console.log("User1", user.sayHallo())
user2 = {
    name: "Mary",
    age: 19
}
user2.sayHallo = user.sayHallo
console.log("User2", user2.sayHallo())
let user3 = {
    firstName: "Илья",
    sayHi() {
        let arrow = () => alert(this.firstName);
        arrow();
    }
};
user3.sayHi()
////////////


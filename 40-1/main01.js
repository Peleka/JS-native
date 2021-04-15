//Copy obj & arrays

const student = {
    name: "Alex",
    age: 23,
    friends: ["Bob", "Nik"]
}


student.age = 24


const student2 = student
student2.age = 35
console.log(student)

const copyStudent = {...student, friends: [...student.friends]}
student.friends.push(`Ann`)
console.log("copyStudent", copyStudent)
copyStudent.age = 45
console.log("copyStudent after 45", copyStudent)
console.log('student', student)

function fn(num) {
    const pow = Math.pow(num, 2)
    const sqrt = () => console.log(pow)
    return [pow, sqrt]
}

console.log(fn(10))
const [numPow, logNumPow] = fn(10)
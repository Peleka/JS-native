//accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
function accum(s) {
    return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}
console.log(accum("abcd"))


// filter_list([1,2,'a','b']) == [1,2]

function filter_list(array) {
    return array.filter(el => typeof (el) == typeof (0))
}

console.log(filter_list([1,2,'aasf','1','123',123]))

//@ts-ignore
function descendingOrder(n){
    let str = String(n)
    return  +str.split('').sort((a,b) => a - b).reverse().join('')
}

console.log(descendingOrder(1564))
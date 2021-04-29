function getCount(str) {
    let vowelsCount = 0;

    let count = str
        .split('')
        .filter(  a => {
            return (
                a === 'a' || a === 'e' || a === "i" || a === "o" || a === "u"
            )
        }
    )
    vowelsCount = count.length
    // return vowelsCount;

    // let newStr = str.split('')
    // console.log(newStr)
    //
    // let filterStr = newStr.filter(a => {
    //         return (
    //             a === 'a' || a === 'e' || a === "i" || a === "o" || a === "u"
    //         )
    //     }
    // )
    // console.log(filterStr)


    console.log(vowelsCount)

}

getCount("blakemurozi")
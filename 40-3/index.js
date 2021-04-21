//event
//handler/listener/subscriber

const sm = document.getElementById("small")
const md = document.getElementById("medium")
const bg = document.getElementById("big")

// sm.onclick = () => alert('yo')

// console.dir(sm)

function onClickHandler(e) {
    // e.stopPropagation()
    console.log(e.target.name)
    // console.log("target",e.target)
}

// sm.onclick = onClickHandler
md.onclick = onClickHandler
bg.onclick =() => alert('hey')


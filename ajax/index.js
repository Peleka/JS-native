let a = 5

$.ajax('https://jsonplaceholder.typicode.com/photos', {
    success: function (data) {
        data.forEach((el) => {
          const img =  document.createElement('img')
            img.src = el.thumbnailUrl
            document.querySelector('body').appendChild(img)
        })

    }
})
a = 8
console.log(a)

setTimeout(function (){}, 1000)
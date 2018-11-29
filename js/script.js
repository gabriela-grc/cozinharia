(function () {

    var main = document.getElementById('main')
    var image = document.getElementById('image')
    var close = document.getElementById('close')
    var newImage = document.createElement("img")

    document.getElementById('gallery').addEventListener('click', function (e) {
        main.classList.toggle('open', true)
        newImage.src = e.target.src
        image.append(newImage)
    })

    close.addEventListener('click', function () {
        image.removeChild(image.childNodes[0])
        main.classList.toggle('hidden', true)
        main.classList.toggle('open', false)
    })
})();
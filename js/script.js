(function () {

    var main = document.getElementById('main');
    var image = document.getElementById('image')
    

    document.getElementById('gallery').addEventListener('click', function (e) {
        main.classList.toggle('open', true)
        document.getElementById('image').appendChild(e.target)
    })

    document.getElementById('close').addEventListener('click', function (e) {
        main.classList.toggle('hidden', true)
        main.classList.toggle('open', false)
        image.removeChild(image.childNodes[0])
    })
})();
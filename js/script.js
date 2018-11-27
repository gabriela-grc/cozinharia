(function () {
    var items = document.getElementById('items').classList

    function showItems() {
        items.toggle('hidden', false)
        items.toggle('visible', true)
    }

    function hiddenItems() {
        items.toggle('hidden', true)
        items.toggle('visible', false)
    }

    var action = document.getElementById('menu-items')
    action.addEventListener('mouseover', showItems)
    action.addEventListener('mouseout', hiddenItems)
})();
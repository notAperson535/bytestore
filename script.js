let bottomBar = document.querySelector("#bottomBar")
bottomBar.isOpen = false

bottomBar.addEventListener('touchend', function () {
    // bottomBar.addEventListener('click', function () {
    // if (!bottomBar.isOpen) {
    //     bottomBar.style.height = "500px"
    //     bottomBar.isOpen = true
    // } else {
    //     bottomBar.style.height = "150px"
    //     bottomBar.isOpen = false
    // }
    if (bottomBar.style.height > "250px") {
        bottomBar.style.height = "500px"
        bottomBar.isOpen = true
    } else {
        bottomBar.style.height = "150px"
        bottomBar.isOpen = false
    }
});

bottomBar.addEventListener('touchmove', function (event) {
    // e.preventDefault();
    // alert(document.body.scrollHeight - event.touches[0].clientY)
    bottomBar.style.height = document.body.scrollHeight - event.touches[0].clientY + "px"

})
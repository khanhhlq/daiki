let widget = document.getElementById("widget")
let btn7 = document.getElementById("btn-7")
let btn8 = document.getElementById("btn-8")

btn7.addEventListener("click", () => {
    widget.classList.remove("displayNone")
    btn7.classList.add("displayNone")
    btn8.classList.remove("displayNone")
})

btn8.addEventListener("click", () => {
    widget.classList.add("displayNone")
    btn7.classList.remove("displayNone")
    btn8.classList.add("displayNone")
})
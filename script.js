let button = document.querySelector("#button");

button.addEventListener("mouseover", () => {
    let top = Math.floor(Math.random() * -100 + 1)
    let left = Math.floor(Math.random() * 500 + 1)
    button.style.top = `${top}px`
    button.style.left = `${left}px`
})


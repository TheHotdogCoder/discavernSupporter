function changeFeat(dir) {
    // dir = 1 (left), dir = 2 (right)
    const allFeat = document.querySelectorAll(".featbox")

    allFeat.forEach((i) => {
        if (i.classList.item(2) != "notActive") {
            current = i.classList.item(1).charAt(4)
        }
    })
    if (dir == 1) {
        if (current != '1') {
            next = Number(current) - 1
        } else {
            next = 6
        }
    } else {
        if (current != '6') {
            next = Number(current) + 1
        } else {
            next = 1
        }
    }
    document.querySelector('.feat' + current).classList.add("notActive")
    document.querySelector('.feat' + next).classList.remove("notActive")
}
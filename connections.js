let selected = new Set();

function toggle(btn) {
    const word = btn.textContent;
    if (selected.has(word)) {
        selected.delete(word);
        btn.classList.remove("selected");
    } else if (selected.size < 4) {
        selected.add(word);
        btn.classList.add("selected");
    }
}

function checkConnection() {
    const correct = ["ROSE", "HEART", "CARD", "CHOCOLATE"];
    const match = correct.every(w => selected.has(w)) && selected.size === 4;

    const cat = document.getElementById("category");
    if (match) {
        cat.textContent = "(C)ategory: Valentinul";
        cat.classList.remove("hidden");
    } else {
        alert("Not correct. Try again!");
    }
}

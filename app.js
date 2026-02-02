// PAGE NAVIGATION
function go(pageId) {
    // Hide all except hub
    document.querySelectorAll('section, .game-container').forEach(p => p.style.display = 'none');
    if (pageId === 'hub') document.getElementById('hub').style.display = 'block';
    if (pageId === 'crossword') document.querySelector('.game-container').style.display = 'flex';
    if (pageId === 'numbers') document.getElementById('numbers').style.display = 'block';
    if (pageId === 'connections') document.getElementById('connections').style.display = 'block';
}

// NUMBER PUZZLE
function revealNumbers() {
    document.getElementById('numberResult').classList.remove('hidden');
}

// CONNECTIONS GAME
let selected = new Set();

function toggle(btn) {
    const word = btn.textContent;
    if (selected.has(word)) {
        selected.delete(word);
        btn.classList.remove('selected');
    } else if (selected.size < 4) {
        selected.add(word);
        btn.classList.add('selected');
    }
}

function checkConnection() {
    const correct = ["ROSE", "HEART", "CARD", "CHOCOLATE"];
    const match = correct.every(w => selected.has(w)) && selected.size === 4;

    const cat = document.getElementById("category");
    if (match) {
        cat.textContent = "Category: Valentine";
        cat.classList.remove("hidden");
    } else {
        alert("Not correct. Try again!");
    }
}

// CROSSWORD SHOW ANSWERS BUTTONS
document.querySelectorAll('.show-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const target = btn.dataset.target;
        document.querySelector('.' + target).style.visibility = 'visible';
    });
});

const selectDrink = document.getElementById('selectDrink');
const btn = document.getElementById('btn');
let answer = document.getElementById('answer');

function checkDrink(){
    answer.textContent = selectDrink.value;
}

btn.addEventListener('click', checkDrink);
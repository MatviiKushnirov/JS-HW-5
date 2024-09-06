const inputFirst = document.getElementById('inputFirst');
const inputSecond = document.getElementById('inputSecond');
const btn = document.getElementById('btn');
const selectOperation = document.getElementById('selectOperation');

function simpleCalculator(){
    let result;
    const num1 = Number(inputFirst.value);
    const num2 = Number(inputSecond.value);

    switch(selectOperation.value){
        case '+':
            result = num1 + num2;
            alert(`${num1} + ${num2} = ${result}`);
            break;
        case '-':
            result = num1 - num2;
            alert(`${num1} - ${num2} = ${result}`);
            break;
        case '*':
            result = num1 * num2;
            alert(`${num1} * ${num2} = ${result}`);
            break;
        case '/':
            result = num1 / num2;
            num2 !== 0 ? alert(`${num1} / ${num2} = ${result}`) : alert("Не можна ділити на нуль!");
            break;
    }
}

btn.addEventListener('click',simpleCalculator);
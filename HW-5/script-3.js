// Task 3
/*Створити розмітку з полем введення, що приймає номер місяця та кнопкою.
При натисканні на кнопку виводити повідомлення про пору року, до якої належить цей місяць.*/

const inputMonths = document.getElementById("inputMonths");
const btn = document.getElementById("btn");

function checkMonths(){
    const numOfMonths = Number(inputMonths.value);
    switch(true){
        case numOfMonths === 12 || numOfMonths === 1 || numOfMonths === 2:
            alert("Брррр, вже зима!");
            break;
        case numOfMonths === 3 || numOfMonths === 4 || numOfMonths === 5:
            alert("Вже теплішає - настала весна!");
            break;
        case numOfMonths === 6 || numOfMonths === 7 || numOfMonths === 8:
            alert("Я думаю, що зараз можу згоріти - літо:(!");
            break;
        case numOfMonths === 9 || numOfMonths === 10 || numOfMonths === 11:
            alert("В мене упродовж цієї пори року буде ДР - осніь!");
            break;
        default:
            alert("Немає такого місяця, не хитруй!");
            break;
    }
}

btn.addEventListener("click",checkMonths);
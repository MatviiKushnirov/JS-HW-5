// Task 4
/*Створити розмітку з полем введення, що приймає номер місяця та кнопкою.
При натисканні на кнопку виводити кількість днів у цьому місяці.*/

const inputMonths = document.getElementById("inputMonths");
const btn = document.getElementById("btn");

function outputDays(){
    const daysInMonths = Number(inputMonths.value);

    switch(daysInMonths){
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            alert("У цьому місяці 31 день");
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            alert("У цьому місяці 30 днів");
            break;
        case 2:
            alert("У цьому місяці 28 днів або 29 під час високосного року");
            break;
        default:
            alert("Немає такого місяця");
            break;
    }
}

btn.addEventListener("click", outputDays);
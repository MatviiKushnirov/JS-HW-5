// Task 2
/*Створити розмітку з полем введення, що приймає рядок та кнопкою. При натисканні на кнопку перевіряти,
чи введений рядок є днем тижня (наприклад: "понеділок", "вівторок" і т.д.), 
виводити відповідне повідомлення про робочий день або вихідний.*/

const inputDays = document.getElementById("inputDays");
const btn = document.getElementById("btn");

function checkDays(){
    switch(inputDays.value.toLowerCase()){
        case "понеділок":
            alert("Робочий день");
            break;
        case "вівторок":
            alert("Робочий день");
            break;
        case "середа":
            alert("Робочий день");
            break;
        case "четвер":
            alert("Робочий день");
            break;
        case "п'ятниця":
            alert("Робочий день");
            break;
        case "субота":
            alert("Вихідний день");
            break;
        case "неділя":
            alert("Вихідний день");
            break;
        default:
            alert("Не день тижня");
            break;
    }
}

btn.addEventListener("click",checkDays);
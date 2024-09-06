// Task 5
/*Створити розмітку з полем введення, що приймає назву кольору (наприклад, "червоний", "синій" і т.д.)
та кнопкою. При натисканні на кнопку виводити відповідне повідомлення про дію: якщо це "червоний" — "стоп",
якщо "зелений" — "йти", якщо "жовтий" — "чекати".*/

const inputColor = document.getElementById("inputColor");
const btn = document.getElementById("btn");

function checkColor(){
    switch(inputColor.value.toLowerCase()){
        case "червоний":
            alert("Стоп!");
            break;
        case "жовтий":
            alert("Чекайте!");
            break;
        case "зелений":
            alert("Йдіть!");
            break;
        default:
            alert("У світлофорі немає такого кольору!")
            break;
    }
}

btn.addEventListener("click", checkColor);
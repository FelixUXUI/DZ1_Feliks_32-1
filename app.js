// ФИ
var firstName = prompt("Введите ваше имя:");
var lastName = prompt("Введите вашу фамилию:");

if (firstName && lastName) {
    var greeting = "Привет, " + firstName + " " + lastName + "!";
    alert(greeting);
} else {
    alert("Пожалуйста, введите и имя, и фамилию.");
}

// Светофор
const color = prompt("Введите цвет светофора (красный, желтый или зеленый):");
const lowerCaseColor = color.toLowerCase();
switch (lowerCaseColor) {
  case "красный":
    alert("Светофор горит красным. Действие: Стой!");
    break;
  case "желтый":
    alert("Светофор горит желтым. Действие: Жди!");
    break;
  case "зеленый":
    alert("Светофор горит зеленым. Действие: Иди!");
    break;
  default:
    alert("Неизвестный цвет светофора. Пожалуйста, введите красный, желтый или зеленый.");
}


// Конвертер чисел
const number = parseInt(prompt("Введите число от 1 до 9:"));

// function convertToRoman(num) {
//   const romanNumerals = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
//   if (num >= 1 && num <= 9) {
//     return romanNumerals[num  - 1];
//   } else {
//     return "Некорректное число";
//   }
// }

// const romanNumber = convertToRoman(number);


// alert(`Римское представление числа ${number} - ${romanNumber}`);

switch (number) {
  case 1:
    alert("I");
    break;
  case 2:
    alert("II");
    break;
  case 3:
    alert("III");
    break;
  case 4:
    alert("IV");
    break;
  case 5:
    alert("V");
    break;
  case 6:
    alert("VI");
    break;
  case 7:
    alert("VII");
    break;
  case 8:
    alert("VIII");
    break;
  case 9:
    alert("IX");
    break;
  default:
    alert("Некорректное число");

}
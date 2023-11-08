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

function convertToRoman(num) {
  const romanNumerals = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
  if (num >= 1 && num <= 9) {
    return romanNumerals[num - 1];
  } else {
    return "Некорректное число";
  }
}

const romanNumber = convertToRoman(number);

alert(`Римское представление числа ${number} - ${romanNumber}`);

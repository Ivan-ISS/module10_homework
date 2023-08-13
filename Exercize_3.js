// Задание 3: Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".


let str = "hello";

strArr = str.split(""); // разбиваем строку на элементы (сепаратор равен пустой строке) и кладем в массив 
//console.log(strArr);

reverse = strArr.reverse(); // представляем элементы массива в обратном порядке
//console.log(reverse);

result = reverse.join(""); // объединяем элементы массива в строку
console.log(result);
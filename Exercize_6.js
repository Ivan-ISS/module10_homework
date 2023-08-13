// Задание 6: Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль. 
// Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые.


let arr = ["1", "1", "5", "1", "1"];
let x;

for (i = 0; i < arr.length; i = i + 1) {
  
  x = arr[i]
  
  for (j = 0; j < arr.length; j = j + 1) {
    
    if (arr[j] != arr[i]) {
      
      j = arr.length
      i = arr.length
      console.log("false")
      
    } else if (i === arr.length - 1 && j === arr.length - 1) {
      console.log("true")
      
    }
    
  }
  
}
// Задание 7: Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. 
// Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
// При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.


let arr = [1, 2, 4, '5', 0];
let x;
let sumEven = 0;
let sumOdd = 0;
let sumNotNum = 0;

for (i = 0; i < arr.length; i = i + 1) {
  
  x = arr[i]
  
  if (typeof(x) !== 'number') {
    sumNotNum = sumNotNum + 1
  }
  
  if (typeof(x) == 'number' && x === 0) {
    console.log(`Нулевой элемент: ${x}, его номер в массиве: ${i}`)
  } else if (typeof(x) == 'number' && x % 2 === 0) {
    sumEven = sumEven + 1
  } else if (typeof(x) == 'number' && x % 2 !== 0) {
    sumOdd = sumOdd + 1
  }
  
}

console.log(`Кол-во четных элементов: ${sumEven}, Кол-во нечетных элементов: ${sumOdd}`);
console.log(`Кол-во не числовых значений: ${sumNotNum}`);
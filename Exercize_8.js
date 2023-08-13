// Задание 8: Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».
// Используйте шаблонные строки.


let map = new Map ([

    ["color", "black"],
  
    ["form", "circle"],
  
    ["quantity", 15]
  
  ]);
  
  
  for (let elem of map.keys()) {
  
     console.log(`Ключ - ${elem}, Значение - ${map.get(elem)}`);
  
  }
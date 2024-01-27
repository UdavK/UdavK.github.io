
alert(`Создать массив 3 разными способами
let array1 = [1, 2, 3,7,12];
let array2 = Array.of(4, 5, 6);
let array3 = new Array(7, 8, 9);`);

let array1 = [1, 2, 3,7,12];
let array2 = Array.of(4, 5, 6);
let array3 = new Array(7, 8, 9);

alert(`Вывести на экран 5-й элемент массива и изменить его значение
        alert(array1[4]);
        array1[4] = 1415461341;
`);

alert(array1[4]);
array1[4] = 1415461341;

alert(`Узнать длину массива и вывести ее значение при наведении на любой элемент
        let arrLength = array1.length;`);
let arrLength = array1.length;
alert(arrLength);

alert(`Вывести все элементы массива, используя цикл for
        for (let i = 0; i < array1.length; i++) {
        alert(array1[i]);
        }`)
        for (let i = 0; i < array1.length; i++) {
            alert(array1[i]);
          }

alert(`Создать 2 массива, объединить их в один и вывести на экран получившийся массив
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let mergArray = arr1.concat(arr2);`);
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let mergArray = arr1.concat(arr2);
alert(mergArray);

alert(`Удалить последний член получившегося массива и вывести это значение на экран
let last = mergArray.pop();`);
let last = mergArray.pop();
alert(last);

alert(`Удалить последний член получившегося массива и вывести это значение на экран
let last2 = mergArray.pop();`);
let last2 = mergArray.pop();
alert(last2);


alert(`Добавить новый элемент в начало вашего объединенного массива
mergArray.unshift(0);`);
mergArray.unshift(0);

alert(`Получить сегодняшнюю дату и вывести ее на экран
let currentDate = new Date();`);
let currentDate = new Date();
alert(currentDate);

alert(`Вывести сегодняшнюю дату в формате 11 ноября 2020 года
let options = { year: 'numeric', month: 'long', day: 'numeric' };
let formatDate = currentDate.toLocaleDateString('ru-RU', options);`);
let options = { year: 'numeric', month: 'long', day: 'numeric' };
let formatDate = currentDate.toLocaleDateString('ru-RU', options);
alert(formatDate);

alert(`Написать функцию, подсчитывающую произведение двух случайных чисел в промежутке от нуля до 50
function multRanNum() {
  let num1 = Math.floor(Math.random() * 51);
  let num2 = Math.floor(Math.random() * 51);
  return num1 * num2;
}`);
function multRanNum() {
    let num1 = Math.floor(Math.random() * 51);
    let num2 = Math.floor(Math.random() * 51);
    return num1 * num2;
  }
alert(multRanNum());

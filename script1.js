alert(`Создать переменную, узнать ее тип, добавить вывод на экран текста, в зависимости от значения (if else)

let variable = 5
alert(typeof variable);

if (typeof variable === 'number') {
  alert('Переменная является числом');
} else {
  alert('Переменная не является числом');
}
`);
let variable = 5
alert(typeof variable);

if (typeof variable === 'number') {
  alert('Переменная является числом');
} else {
  alert('Переменная не является числом');
}

alert(`Запросить у пользователя знак зодиака, и в зависимости от ответа выдать всплывающее окно приветствия (вместо знака зодиака, можно запросить другие данные, предполагающие несколько вариантов ответа) (switch)

let zodiac;

zodiac = prompt('Введите ваш знак зодиака:').toLowerCase(); 
let newZodiac = zodiac[0].toUpperCase() + zodiac.slice(1);
switch (zodiac) {
  case 'овен':
    alert('Привет, ${newZodiac}');
    break;
  case 'телец':
    alert('Привет, ${newZodiac}');
    break;`);
  /*case 'близнецы':
    alert('Привет, ${newZodiac}');
    break;
  case 'рак':
    alert('Привет, ${newZodiac}');
    break;
  case 'лев':
    alert('Привет, ${newZodiac}');
    break;
  case 'дева':
    alert('Привет, ${newZodiac}');
    break;
  case 'весы':
    alert('Привет, ${newZodiac}');
    break;
  case 'скорпион':
    alert('Привет, ${newZodiac}');
    break;
  case 'стрелец':
    alert('Привет, ${newZodiac}');
    break;
  case 'козерог':
    alert('Привет, ${newZodiac}');
    break;
  case 'водолей':
    alert('Привет, ${newZodiac}');
    break;
  case 'рыбы':
    alert('Привет, ${newZodiac}');
    break;
  default:
    alert('Привет, незнакомец!');
    break;
}`);*/
let zodiac;

zodiac = prompt('Введите ваш знак зодиака:').toLowerCase(); 
let newZodiac = zodiac[0].toUpperCase() + zodiac.slice(1);
switch (zodiac) {
  case 'овен':
    alert(`Привет, ${newZodiac}`);
    break;
  case 'телец':
    alert(`Привет, ${newZodiac}`);
    break;
  case 'близнецы':
    alert(`Привет, ${newZodiac}`);
    break;
  case 'рак':
    alert(`Привет, ${newZodiac}`);
    break;
  case 'лев':
    alert(`Привет, ${newZodiac}`);
    break;
  case 'дева':
    alert(`Привет, ${newZodiac}`);
    break;
  case 'весы':
    alert(`Привет, ${newZodiac}`);
    break;
  case 'скорпион':
    alert(`Привет, ${newZodiac}`);
    break;
  case 'стрелец':
    alert(`Привет, ${newZodiac}`);
    break;
  case 'козерог':
    alert(`Привет, ${newZodiac}`);
    break;
  case 'водолей':
    alert(`Привет, ${newZodiac}`);
    break;
  case 'рыбы':
    alert(`Привет, ${newZodiac}`);
    break;
  default:
    alert('Привет, незнакомец!');
    break;
}
alert(`Вывести все числа от 1 до 40, с использованием 3-х разных циклов
for (let i = 1; i <= 40; i++) {
    alert(i);
  }
  let a = 1;
  while (a <= 40) {
    alert(a);
    a++;
  }
  
  let b = 1;
  do {
    alert(b);
    b++;
  } while (b <= 40);
`);
/*for (let i = 1; i <= 40; i++) {
    alert(i);
  }
  let a = 1;
  while (a <= 40) {
    alert(a);
    a++;
  }
  
  let b = 1;
  do {
    alert(b);
    b++;
  } while (b <= 40);*/

 alert(`Создайте вирусную страницу с постоянно повторяющемся сообщением
    while(true){
    alert("Взлом per rectum")`);

/*  while(true){
    alert("Взлом per rectum")
}*/

alert(`Запросить у пользователя любое число больше 5, в случае правильного ответа выдать окно с поздравлением, в случае неправильного ответа вывести повторное окно с вопросом
quest();
function quest(res = prompt("Введите число больше 5")){
    if(+res>5){
        alert("Угадал!!");
    }
    else{
        alert("Ну не то!!!");
        quest();
    }
}`);

quest();
function quest(res = prompt("Введите число больше 5")){
    if(+res>5){
        alert("Угадал!!");
    }
    else{
        alert("Ну не то!!!");
        quest();
    }
}

alert(`Выведите четные числа от 8 до 20

for (let num = 8; num <= 20; num+=2) {
  
    alert(num);
  
}`);
for (let num = 8; num <= 20; num+=2) {
  
    alert(num);
  
}

alert(`Выведите нечетные числа от 1 до 7, пропустив 5

for (let num = 1; num <= 7; num+=2) {
  if (num !== 5) {
    alert(num);
  }
}`);
for (let num = 1; num <= 7; num+=2) {
    if (num !== 5) {
      alert(num);
    }
  }




  
  

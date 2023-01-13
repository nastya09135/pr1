'use strict';
//Домашнее задание

// Переменные:years, guests, myDog, cups, tea, dogname, age, year
// Функции:dogYears, makeTea, secret
// Встроенные функции: log
// Аргументы:dogname, age, cups, tea
// Параметры:myDog, 4, guests, 'Earl Grey'
 


// Дана строка 'JS'. Сделайте из нее строку 'js'.
let txt2 = 'JS';
console.log(txt2.toLowerCase());


// Дана строка 'я люблю JS!'. Вырежите из нее слово 
// 'люблю' и слово 'javascript' тремя разными способами 
// (через substr, substring, slice).
let txt3 = 'я люблю javascript!';
console.log(txt3.substr(2,6));
console.log(txt3.substring(2,7));
console.log(txt3.slice(2, 8));
console.log(txt3.substr(8,10));
console.log(txt3.substring(8,18));
console.log(txt3.slice(8, 18));

// Дана строка 'я люблю JS!'. Найдите позицию 
// подстроки 'люблю'.
let str4 = 'я люблю JS!';
console.log(str4.indexOf('люблю'));


// Дана переменная txt, в которой хранится какой-либо текст. 
// Реализуйте обрезание длинного текста по следующему 
// принципу: если количество символов этого текста больше 
// заданного в переменной n, то в переменную result запишем 
// первые n символов строки txt и добавим в конец 
// троеточие '...'. В противном случае в переменную 
// result запишем содержимое переменной txt.
let txt5 ='я люблю JS!';
let n=6;
let result ="";
if (n<txt5.length){
    result=txt5.substr(0, n)+ "...";
}else {
    result=txt5;
}
console.log(result);


// Для решения задач данного блока вам понадобятся следующие 
// методы: replace.
// Дана строка 'Я-люблю-JS!'. 
// Замените все  '-' на '!' с помощью глобального 
// поиска и замены.
let txt6 = 'Я-люблю-JS!';
console.log(txt6.replace(/-/g, "!"));


// Дана строка 'я люблю JS'. С помощью метода split 
// запишите каждое слово этой строки в отдельный элемент 
// массива.
let txt7 = 'я люблю JS';
let arr = txt7.split(' ');
console.log(arr);


// Дана строка 'привет мир'. С помощью метода split 
// запишите каждый символ этой строки в отдельный элемент 
// массива.
let txt8 = 'привет мир';
console.log(txt8.split(""));













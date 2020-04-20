
'use strict';
const date = new Date(),
hour = date.getHours();

let TimesОfDay;
if(hour >= 5 && hour < 12)TimesОfDay = 'Доброе утро';
else if(hour >= 12 && hour < 18) TimesОfDay = 'Добрый день';
else if(hour >= 18 && hour <24) TimesОfDay = 'Добрый вечер';
else if(hour >= 0 && hour < 5) TimesОfDay = 'Доброй ночи';

console.log(TimesОfDay);
function getWeeksDay(date){
    date = new Date();
    let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
    return days[date.getDay()];
}

const newYear = new Date ('December 31 2020');
let realDate = new Date();
let reamaining = newYear - realDate;


console.log('Сегодня: ' + getWeeksDay());
console.log('Текущее время: ' + date.toLocaleTimeString('en'));
// const newYear = new Date ('December 31 2020');
console.log ('До нового года осталось ' + Math.floor(reamaining / 1000 / 60 / 60 / 24 ) + ' ' + 'дней');

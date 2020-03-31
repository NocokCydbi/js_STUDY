'use strict';
// var money = 350000;
// var income = 100000;
// var addExpenses = 50000;
// var deposit = 100000;
// var mission = 'Get 1 million';
// var period = '3 years';
// alert('Click to continue.');
// console.log('Some text');





let money = 100000;
let income = 10000;
let addExpenses = 'Internet, Taxi';
let deposit = false;
let mission = 1000000;
let period = 9;
console.log(addExpenses.split(', '));




money = prompt ('Ваш месячный доход?', 50000);
money = +money;
addExpenses = prompt ('Перечислите возможные расходы за рассчитываемый период через запятую', 'Интернет, комуналка, бензин');
let addExpenses2 = +addExpenses;
deposit = confirm('Есть ли у вас депозит в банке?');
mission = 100000;
let perion = 3;
let showTypeOf = function(data){
    console.log(data, typeof(data));
};
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

let expenses1 = prompt('Введите обязательную статью расходов?');
let expenses2 = prompt('Введите обязательную статью расходов?');
let amount1 = prompt('Во сколько это обойдется?', 5000);
let amount2 = prompt('Во сколько это обойдется?',1000);
amount1 = +amount1;
amount2 = +amount2;
addExpenses2 = addExpenses.split(',');
let budgetMonth = money - (amount1 + amount2);
period = Math.ceil(mission / budgetMonth);
let budgetDay = Math.floor(budgetMonth / 30);

let getStatusIncome = function(){
    if (budgetDay >= 1200){
    console.log('У вас высокий уровень дохода');
}else if (600 < budgetDay && budgetDay < 1200){
    console.log('У вас средний уровень дохода');
}else if(budgetDay <= 600){
    console.log ('К сожалению у вас уровень дохода ниже среднего.');
}else{
    console.log ('Что-то пошло не так');
}
};
getStatusIncome();




let getExpensesMonth = function(a = amount1, b = amount2){
    return a + b;
};
getExpensesMonth();
console.log(getExpensesMonth());


function getAccumulatedMonth (a = money, b = (amount1 + amount2)){
    return a - b;
}
getAccumulatedMonth();
console.log(getAccumulatedMonth());


let accumulatedMonth = getAccumulatedMonth();
function getTargetMonth(a = mission, b = accumulatedMonth){

let sum = a / b;
return Math.round(sum);
}

budgetDay = Math.round(accumulatedMonth / 30);
console.log(budgetDay);

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




let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

addExpenses = prompt ('Перечислите возможные расходы за рассчитываемый период через запятую', 'Интернет, бензин');
deposit = confirm('Есть ли у вас депозит в банке?');
mission = 100000;
period = 3;

let start = function(){
    money = prompt('Ваш месячный доход?');

    while(!isNumber(money)) {
        money = prompt('Ваш месячный дохрод?');
    }
};
start();
money = +money;
let showTypeOf = function(data){
    console.log(data, typeof(data));
};
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

// let expenses1 = prompt('Введите обязательную статью расходов?');
// let expenses2 = prompt('Введите обязательную статью расходов?');
// let amount1 = prompt('Во сколько это обойдется?', 5000);
// let amount2 = prompt('Во сколько это обойдется?',1000);

console.log(addExpenses.toLowerCase().split(','));
let expenses = [];
let sum;

let getExpensesMonth = function(){
    let sum;
    for (let i = 0; i < 2; i++){
    
        expenses[i] = prompt ('Введите обязательную статью расходов?', 'Садик');
        
       
        let start = function(){
            sum = prompt('Во сколько это обойдется?');
        
            while(!isNumber(sum)) {
                sum += prompt('Во сколько это обойдется?');
            }
            sum = +sum;
            sum += sum;
            
        };
        start();
    }

    console.log(expenses);
    return sum;


    
};

let expensesAmount = getExpensesMonth();


console.log('Расходы за месяц: ' + expensesAmount);







function getAccumulatedMonth (){
    return money - expensesAmount;
}
getAccumulatedMonth()

let accumulatedMonth = getAccumulatedMonth();
function getTargetMonth(){

let sum = mission / accumulatedMonth;
return Math.round(sum);
}
getTargetMonth();
period = Math.ceil(mission / accumulatedMonth);
if (period > 0){
    console.log('Цель будет достигнута за ' + period  + 'месяца');
}
else if(period < 0){
    console.log('Цель не будет достигнута.');
}
let budgetDay = Math.floor(accumulatedMonth / 30);


budgetDay = Math.round(accumulatedMonth / 30);

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
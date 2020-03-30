'use script';
let money = prompt ('Ваш месячный доход?');
money = +money;
let addExpenses = prompt ('Перечислите возможные расходы за рассчитываемый период через запятую');
let addExpenses2 = +addExpenses;
let deposit = confirm('Есть ли у вас депозит в банке?');
let mission = prompt('Какой суммы хотите достичь?');
mission = +mission;
let expenses1 = prompt('Введите обязательную статью расходов?');
let expenses2 = prompt('Введите обязательную статью расходов?');
let amount1 = prompt('Во сколько это обойдется?');
let amount2 = prompt('Во сколько это обойдется?');
addExpenses2 = addExpenses.split(',');
let budgetMonth = money - (amount1 + amount2);
console.log(budgetMonth);
mission = Math.ceil(mission / budgetMonth);
console.log(mission);
let budgetDay = Math.floor(budgetMonth / 30);
console.log(budgetDay);
if (budgetDay >= 1200){
    console.log('У вас высокий уровень дохода');
}else if (600 < budgetDay && budgetDay < 1200){
    console.log('У вас средний уровень дохода');
}else if(budgetDay <= 600){
    console.log('К сожалению у вас уровень дохода ниже среднего.');
}else{
    console.log('Что-то пошло не так');
}


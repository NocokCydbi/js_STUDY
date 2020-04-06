'use strict';



let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};





let money,
    start = function(){
    money = prompt('Ваш месячный доход?');

    while(!isNumber(money)) {
        money = prompt('Ваш месячный доход?');
    }
};

start();

let appData = {
    income: {},
    addIncome: {},
    expenses: [],
    
    addExpenses: {},
    deposit: false,
    mission: 50000,
    period: 3,
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    





    asking: function(){
    let addExpenses = prompt('Перечислите возможные расходы через запятую?');
    this.addExpenses = addExpenses.toLowerCase().split(',');
    this.deposit = confirm('Есть ли у вас депозит в банке?');
    for (let i = 0; i < 2; i++){
        let itemExpenses = prompt('Введите обязательную статью расходов?', 'Садик государственный');
    let cashExpenses;
    do {
        cashExpenses = prompt('Во сколько это обойдется?', 5000);
    }
    while(isNaN(cashExpenses) || cashExpenses === '' || cashExpenses === null);
    appData.expenses[itemExpenses] = cashExpenses;
    }
    },
    getExpensesMonth: function(){
        for (let key in appData.expenses){
            this.expensesMonth += +this.expenses[key];

        }
    
    },
    getBudget: function(){
        this.budgetMonth = this.budget - this.expensesMonth;
        this.budgetDay = Math.floor(this.budgetMonth / 30);
    },
        
    
    getTargetMonth: function(){

        let sum = appData.mission / appData.budgetMonth;
        return Math.round(sum);
        },
        getStatusIncome: function(){
            if (appData.budgetDay >= 1200){
            console.log('У вас высокий уровень дохода');
        }else if (600 < appData.budgetDay && appData.budgetDay < 1200){
            console.log('У вас средний уровень дохода');
        }else if(appData.budgetDay <= 600){
            console.log ('К сожалению у вас уровень дохода ниже среднего.');
        }else{
            console.log ('Что-то пошло не так');
        }
        },

        
    
};



appData.asking();
appData.getExpensesMonth();
appData.getBudget();



console.log('Расходы за месяц: ' + appData.expensesMonth);





appData.getTargetMonth();

if (appData.period > 0){
    console.log('Цель будет достигнута за ' + Math.ceil(appData.getTargetMonth())  + ' ' +  'месяца');
}
else if(appData.period < 0){
    console.log('Цель не будет достигнута.');
}



console.log (appData.getStatusIncome());
for (let key in appData){
    console.log('Наша программа включает в себя данные: ' + key + ' - ' + appData[key]);
}

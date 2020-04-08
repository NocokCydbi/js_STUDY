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
    precentDeposit: 0,
    moneyDeposit: 0,
    mission: 50000,
    period: 3,
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    





    asking: function(){
        if(confirm('Есть ли у вас дополнительный источник заработка?')){
            let itemIncome = prompt('Какой у вас есть допольнительный заработок?', 'Таксую');
            while(!isNaN(itemIncome) || itemIncome === '' || itemIncome === null){
            itemIncome = prompt('Какой у вас есть допольнительный заработок?', 'Таксую')
        }
            let cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?', 10000);
            while(isNaN(cashIncome)|| cashIncome === '' || cashIncome === null){
                cashIncome = prompt('Сколько в месяц вы на этом зарабатываете? ', 10000)
            }

            
            this.income[itemIncome] = cashIncome;

            
        }


    let addExpenses = prompt('Перечислите возможные расходы через запятую?');
    this.addExpenses = addExpenses.toLowerCase().split(',');
    this.deposit = confirm('Есть ли у вас депозит в банке?');
    for (let i = 0; i < 2; i++){
        let itemExpenses = prompt('Введите обязательную статью расходов?', 'Садик государственный');
        while(!isNaN(itemExpenses) || itemExpenses === '' || itemExpenses === null){
            itemExpenses = prompt('Введите обязательную статью расходов?', 'Садик государственный');
        }
    let cashExpenses;
    do {
        cashExpenses = prompt('Во сколько это обойдется?', 5000);
    }
    while(isNaN(cashExpenses) || cashExpenses === '' || cashExpenses === null);
    this.expenses[itemExpenses] = cashExpenses;
    }
    },
    getExpensesMonth: function(){
        for (let key in this.expenses){
            this.expensesMonth += +this.expenses[key];

        }
    
    },
    getBudget: function(){
        this.budgetMonth = this.budget - this.expensesMonth;
        this.budgetDay = Math.floor(this.budgetMonth / 30);
    },
        
    
    getTargetMonth: function(){

        let sum = this.mission / this.budgetMonth;
        return Math.round(sum);
        },
        getStatusIncome: function(){
            if (this.budgetDay >= 1200){
            console.log('У вас высокий уровень дохода');
        }else if (600 < this.budgetDay && this.budgetDay < 1200){
            console.log('У вас средний уровень дохода');
        }else if(this.budgetDay <= 600){
            console.log ('К сожалению у вас уровень дохода ниже среднего.');
        }else{
            console.log ('Что-то пошло не так');
        }
        },

        
    getInfoDeposit: function(){
        if(this.deposit){
            this.precentDeposit = prompt('Какой годовой процент?', 10);
            while(isNaN(this.precentDeposit || this.precentDeposit === '' || this.precentDeposit === null)){
                this.precentDeposit = prompt('Какой годовой процент?', 10);
            }
            
            this.moneyDeposit = prompt('Какая сумма заложена?', 10000);
            while(isNaN(this.moneyDeposit) || this.precentDeposit === '' || this.precentDeposit === null){
                this.moneyDeposit = prompt('Какая сумма заложена?', 10000);
            }
        }
        
    },
    calcSavedMoney: function(){
        return this.budgetMonth * this.period;
    }
};



appData.asking();
appData.getExpensesMonth();
appData.getBudget();



console.log('Расходы за месяц: ' + appData.expensesMonth);





appData.getTargetMonth();

if (appData.period > 0){
    console.log('Цель будет достигнута за ' + Math.ceil(appData.getTargetMonth())  + '' +  'месяца');
}
else if(appData.period < 0){
    console.log('Цель не будет достигнута.');
}

appData.getInfoDeposit();  

console.log (appData.getStatusIncome());
for (let key in appData){
    console.log('Наша программа включает в себя данные: ' + key + ' - ' + appData[key]);
}
appData.addExpenses = appData.addExpenses.join(',' + ' ');
console.log(appData.addExpenses);
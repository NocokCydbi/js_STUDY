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
            itemIncome = prompt('Какой у вас есть допольнительный заработок?', 'Таксую');
        }
            let cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?', 10000);
            while(isNaN(cashIncome)|| cashIncome === '' || cashIncome === null){
                cashIncome = prompt('Сколько в месяц вы на этом зарабатываете? ', 10000);
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


const button = document.getElementById('start');
const buttonPlus = document.getElementsByTagName('button')[0];
const buttonPlus1 = document.getElementsByTagName('button')[1];
const checkbox = document.querySelector('#deposit-check');
const additionalIncome = document.querySelectorAll('additional_income-item');
const InformationTableBudgetDay = document.getElementsByClassName('result-total budget_day-value');
const InformationTableExpensesMonth = document.getElementsByClassName('result-total expenses_month-value');
const InformationTableAdditionalIncome = document.getElementsByClassName('result-total additional_income-value');
const InformationTableAdditionalExpenses = document.getElementsByClassName('result-total additional_expenses-value');
const InformationTableIncomePeriod = document.getElementsByClassName('result-total income_period-value');
const InformationTableTargetMonth = document.getElementsByClassName('result-total target_month-value');
const InputSalaryAmount = document.querySelector('.salary-amount');
const InputIncomeTitle = document.querySelector('.income-items .income-title');
const InputIncomeAmount = document.querySelector('.income .income-amount');
const InputIncomeExpensesTitle = document.querySelector('.expenses .expenses-items .expenses-title');
const InputIncomeExpensesAmount = document.querySelector('.expenses .expenses-items .expenses-amount');
const InputIncomeAdditionalExpenses = document.querySelector('.additional_expenses-item');
const InputDepositTarget = document.querySelector('.target-amount');
const PeriodSelect = document.querySelector('.period-select');
const BudgetMonth = document.querySelector('.budget_month-value');
// console.log(button);
// console.log(buttonPlus);
// console.log(buttonPlus1);
// console.log(checkbox);
// console.log(BudgetMonth);
// console.log(InformationTableBudgetDay);
// console.log(InformationTableExpensesMonth);
// console.log(InformationTableAdditionalIncome);
// console.log(InformationTableAdditionalExpenses);
// console.log(InformationTableIncomePeriod);
// console.log(InformationTableTargetMonth);
// console.log(InputSalaryAmount);
// console.log(InputIncomeTitle);
// console.log(InputIncomeAmount);
// console.log(InputIncomeExpensesTitle);
// console.log(InputIncomeExpensesAmount);
// console.log(InputIncomeAdditionalExpenses);
// console.log(InputDepositTarget);
// console.log(PeriodSelect);
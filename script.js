'use strict';
let InputSalaryAmount = document.querySelector('.salary-amount');

let button = document.getElementById('start');
let buttonPlus = document.getElementsByTagName('button')[0];
let buttonPlus1 = document.getElementsByTagName('button')[1];
let checkbox = document.querySelector('#deposit-check');
let additionalIncome = document.querySelectorAll('.additional_income-item');
let InformationTableBudgetDay = document.querySelector('.budget_day-value');
let InformationTableExpensesMonth = document.querySelector('.expenses_month-value');
let InformationTableAdditionalIncome = document.querySelector('.additional_income-value');
let InformationTableAdditionalExpenses = document.querySelector('.additional_expenses-value');
let InformationTableIncomePeriod = document.querySelector('.income_period-value');
let InformationTableTargetMonth = document.querySelector('.target_month-value');
let InputIncomeTitle = document.querySelectorAll('.income-items');
let InputIncomeExpensesTitle = document.querySelector('.expenses .expenses-items .expenses-title');
let expensesItems = document.querySelectorAll('.expenses-items');
let InputIncomeAdditionalExpenses = document.querySelector('.additional_expenses-item');
let InputDepositTarget = document.querySelector('.target-amount');
let PeriodSelect1 = document.querySelector('.period-amount');
let BudgetMonth = document.querySelector('.budget_month-value');
let IncomeItem = document.querySelectorAll('.income-items');
let PeriodSelectValue = document.querySelector('period-select');
let PeriodSelect = document.querySelector('.period-select').addEventListener('input', eventFunc);




let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

    

let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    precentDeposit: 0,
    moneyDeposit: 0,
    IncomeMonth: 0,
    period: 3,
    budget: 0,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    

    start: function(){
     
        appData.budget = +InputSalaryAmount.value;
        appData.getExpenses();
        appData.getIncome();
        appData.getExpensesMonth();
        appData.getIncomeMonth();
        appData.getAddExpenses();
        appData.getAddIncome();
        appData.getBudget();

        appData.showResult();
    },

    showResult: function(){
        BudgetMonth.value = appData.budgetMonth;
        InformationTableBudgetDay.value = appData.budgetDay;
        InformationTableExpensesMonth.value = appData.expensesMonth;
        InformationTableAdditionalIncome.value = appData.IncomeMonth;
        InformationTableAdditionalExpenses.value = appData.addExpenses.join(', ');
        additionalIncome.value = appData.addIncome.join(', ');
        InformationTableTargetMonth.value =  Math.ceil(appData.getTargetMonth());
        InformationTableIncomePeriod.value = appData.calcSavedMoney();
        PeriodSelect = document.querySelector('.period-select').addEventListener('input', appData.FastEdit);
    },

    FastEdit: function(){
      InformationTableIncomePeriod.value = appData.calcSavedMoney();
    },

    addIncomeBlock: function(){
        let cloneInputIncomeTitle = InputIncomeTitle[0].cloneNode(true);
        InputIncomeTitle[0].parentNode.insertBefore(cloneInputIncomeTitle, buttonPlus);
        InputIncomeTitle = document.querySelectorAll('.income-items');

        if(InputIncomeTitle.length === 3){
            buttonPlus.style.display = 'none';
        }
    },

    addExpensesBlock: function(){
        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, buttonPlus1);
        expensesItems = document.querySelectorAll('.expenses-items');

        if(expensesItems.length === 3){
            buttonPlus1.style.display = 'none';
        }
    },

    getExpenses: function (){
        expensesItems.forEach(function(item){
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;
            if(itemExpenses !== '' && cashExpenses !== ''){
                appData.expenses[itemExpenses] = cashExpenses;
            }
        });
            },

    getIncome: function(){
        InputIncomeTitle.forEach(function(item){
            let incomeItems = item.querySelector('.income-title').value;
            let casheIncome = item.querySelector('.income-amount').value;
            if(incomeItems !== '' && casheIncome !== ''){
                appData.income[incomeItems] = casheIncome;
            }          
        });
    },
           
    getAddExpenses: function(){
        let addExpenses = InputIncomeAdditionalExpenses.value.split(',');
        addExpenses.forEach(function(item){
            item = item.trim();
            if(item !== ''){
            appData.addExpenses.push(item);
            }
        });
        
    },

    getAddIncome: function(){
        additionalIncome.forEach(function(item){
            let itemValue = item.value.trim();
            if(itemValue !== ''){
            appData.addIncome.push(itemValue);
            }
        });
    },

    getExpensesMonth: function(){
        for (let key in appData.expenses){
            appData.expensesMonth += +appData.expenses[key];
        }
    },

    getIncomeMonth: function(){
        for (let key in appData.income){
            appData.IncomeMonth += +appData.income[key];
        }
    },

    getBudget: function(){
        appData.budgetMonth = appData.budget + appData.IncomeMonth - appData.expensesMonth;
        appData.budgetDay = Math.floor(appData.budgetMonth / 30);
    },
        
    
    getTargetMonth: function(){
        let sum = InputDepositTarget.value / appData.budgetMonth;
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
        if(appData.deposit){
            appData.precentDeposit = prompt('Какой годовой процент?', 10);
            while(isNaN(appData.precentDeposit || this.precentDeposit === '' || appData.precentDeposit === null)){
                appData.precentDeposit = prompt('Какой годовой процент?', 10);
            }
            
            appData.moneyDeposit = prompt('Какая сумма заложена?', 10000);
            while(isNaN(appData.moneyDeposit) || this.precentDeposit === '' || appData.precentDeposit === null){
                appData.moneyDeposit = prompt('Какая сумма заложена?', 10000);
            }
        }
        
    },
    calcSavedMoney: function(){
        let PeriodMoney = document.querySelector('.period-select').value;
        return appData.budgetMonth * PeriodMoney;
    }
};

button.addEventListener('click', function(event){
    if(InputSalaryAmount.value === ''){
        event.preventDefault();
    }
    else{
        appData.start();
    }
});

buttonPlus1.addEventListener('click', appData.addExpensesBlock);
buttonPlus.addEventListener('click', appData.addIncomeBlock );

appData.getTargetMonth();
function eventFunc(){
        PeriodSelect1.textContent = document.querySelector('.period-select').value;
}
appData.getInfoDeposit();  
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
additionalIncome.value = "";
let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};
const AppData = function(){
    this.income = {};
    this.addIncome = [];
    this.expenses = {};
    this.addExpenses = [];
    this.deposit = false;
    this.precentDeposit = 0;
    this.moneyDeposit = 0;
    this.IncomeMonth = 0;
    this.period = 0;
    this.budget = 0;
    this.budgetDay = 0;
    this.budgetMonth = 0;
    this.expensesMonth = 0;
};

AppData.prototype.reset = function(){
    for (let i = 0; i < 12; i++){
        document.getElementsByTagName('input')[i].removeAttribute('disabled');
         document.getElementsByTagName('input')[i].value = null;

    }

    for(let i = 13; i < 20; i++){
        document.getElementsByTagName('input')[i].value = null;

    }
    for (let i = 0; i < 12; i++){
        // document.getElementsByTagName('input')[i].removeAttribute('disabled');
         document.getElementsByTagName('input')[i].input = null;

    }

    for(let i = 13; i < 20; i++){
        document.getElementsByTagName('input')[i].input = null;

    }
    
};
AppData.prototype.objAppData = function(){
        this.income = {};
        this.addIncome = [];
        this.expenses = {};
        this.addExpenses = [];
        this.deposit = false;
        this.precentDeposit = 0;
        this.moneyDeposit = 0;
        this.IncomeMonth = 0;
        this.period = 0;
        this.budget = 0;
        this.budgetDay = 0;
        this.budgetMonth = 0;
        this.expensesMonth = 0;
        
};
AppData.prototype.start = function(){
    this.budget = +InputSalaryAmount.value;
    this.getExpenses();
    this.getIncome();
    this.getExpensesMonth();
    this.getIncomeMonth();
    this.getAddExpenses();
    this.getBudget();
    this.getAddIncome();
    this.showResult();

};
AppData.prototype.showResult = function(){
    const _this = this;
    BudgetMonth.value = this.budgetMonth;
    InformationTableBudgetDay.value = this.budgetDay;
    InformationTableExpensesMonth.value = this.expensesMonth;
    InformationTableAdditionalExpenses.value = this.addExpenses.join(', ');
    InformationTableAdditionalIncome.value = this.addIncome.join(', ');
    additionalIncome.value = this.addIncome.value;
    InformationTableTargetMonth.value =  this.getTargetMonth();
    InformationTableIncomePeriod.value = this.calcSavedMoney();
    appData.PeriodSelect = document.querySelector('.period-select').addEventListener('input', this.FastEdit);
    AppData.prototype.FastEdit = function(){
        InformationTableIncomePeriod.value = _this.calcSavedMoney();
};

};

AppData.prototype.addIncomeBlock = function(){
    let cloneInputIncomeTitle = InputIncomeTitle[0].cloneNode(true);
    InputIncomeTitle[0].parentNode.insertBefore(cloneInputIncomeTitle, buttonPlus);
    InputIncomeTitle = document.querySelectorAll('.income-items');

    if(InputIncomeTitle.length === 3){
        buttonPlus.style.display = 'none';
    }
};

AppData.prototype.addExpensesBlock = function(){
    let cloneExpensesItem = expensesItems[0].cloneNode(true);
    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, buttonPlus1);
    expensesItems = document.querySelectorAll('.expenses-items');

    if(expensesItems.length === 3){
        buttonPlus1.style.display = 'none';
    }
};

AppData.prototype.getExpenses = function (){
    const _this = this;
    expensesItems.forEach(function(item){
        let itemExpenses = document.getElementsByTagName('input')[5].value;
        let cashExpenses = document.getElementsByTagName('input')[6].value;
        if(itemExpenses !== '' && cashExpenses !== ''){
            _this.expenses[itemExpenses] = cashExpenses;
        }
    });
        };

AppData.prototype.getIncome = function(){
    const _this = this;
    InputIncomeTitle.forEach(function(item){
        let incomeItems = item.querySelector('.income-title').value;
        let casheIncome = item.querySelector('.income-amount').value;
        if(incomeItems !== '' && casheIncome !== ''){
            _this.income[incomeItems] = casheIncome;
        }          
    });
};
       
AppData.prototype.getAddExpenses = function(){
    const _this = this;
    let addExpenses = InputIncomeAdditionalExpenses.value.split(',');
    addExpenses.forEach(function(item){
        item = item.trim();
        if(item !== ''){
        _this.addExpenses.push(item);
        }
    });
    
};
AppData.prototype.getAddIncome = function() {
    additionalIncome.forEach(function(item){
        let itemValue = item.value.trim();
        if(itemValue !== ''){
            appData.addIncome.push(itemValue);
        }
    });
};


AppData.prototype.getExpensesMonth = function(){
    const _this = this;
    for (let key in this.expenses){
        _this.expensesMonth += +_this.expenses[key];
    }
};

AppData.prototype.getIncomeMonth = function(){
    const _this = this;
    for (let key in this.income){
        _this.IncomeMonth += +_this.income[key];
    }
};

AppData.prototype.getBudget = function(){
    this.budgetMonth = this.budget + this.IncomeMonth - this.expensesMonth;
    this.budgetDay = Math.floor(this.budgetMonth / 30);
};
    
AppData.prototype.getTargetMonth = function(){
    return InputDepositTarget.value / appData.budgetMonth; 
    

    
};

AppData.prototype.getStatusIncome = function(){
    if (this.budgetDay >= 1200){
        console.log('У вас высокий уровень дохода');
    }else if (600 < this.budgetDay && this.budgetDay < 1200){
        console.log('У вас средний уровень дохода');
    }else if(this.budgetDay <= 600){
        console.log ('К сожалению у вас уровень дохода ниже среднего.');
    }else{
        console.log ('Что-то пошло не так');
    }
};

    
AppData.prototype.getInfoDeposit = function(){
    const _this = this;
    if(this.deposit){
        _this.precentDeposit = prompt('Какой годовой процент?', 10);
        while(isNaN(_this.precentDeposit || this.precentDeposit === '' || _this.precentDeposit === null)){
            _this.precentDeposit = prompt('Какой годовой процент?', 10);
        }
        
        _this.moneyDeposit = prompt('Какая сумма заложена?', 10000);
        while(isNaN(_this.moneyDeposit) || this.precentDeposit === '' || _this.precentDeposit === null){
            _this.moneyDeposit = prompt('Какая сумма заложена?', 10000);
        }
    }
    
};
AppData.prototype.calcSavedMoney = function(){
    let PeriodMoney = document.querySelector('.period-select').value;
    return this.budgetMonth * PeriodMoney;
};
AppData.prototype.eventFunc = function(){

        PeriodSelect1.textContent = document.querySelector('.period-select').value;


};


    
AppData.prototype.eventListener = function(){
    appData.start.apply(appData);
function buttonFunc(){
    button.textContent = 'Рассчитать';
    button.onclick = function(){
        if(InputSalaryAmount === ''){
            event.preventDefault();
        }
        else{
            appData.start();
            for (let i = 0; i < 12; i++){
            document.getElementsByTagName('input')[i].setAttribute('disabled', 'true');
            }
        }
        buttonFunc2();
    };
}
buttonFunc();
function buttonFunc2(){
    buttonFunc();
    let button1 = button;
    button1.textContent = ('Сбросить');
    button1.onclick = function(){
    appData.reset();
    appData.objAppData();
    buttonFunc();
    
};
}



buttonPlus1.addEventListener('click', appData.addExpensesBlock);
buttonPlus.addEventListener('click', appData.addIncomeBlock );
};
const appData = new AppData();
let PeriodSelect = document.querySelector('.period-select').addEventListener('input', appData.eventFunc);
appData.eventListener();
InformationTableTargetMonth.value = null;






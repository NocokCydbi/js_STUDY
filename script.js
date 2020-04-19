'use strict';
const InputSalaryAmount = document.querySelector('.salary-amount'),
button = document.getElementById('start'),
buttonPlus = document.getElementsByTagName('button')[0],
buttonPlus1 = document.getElementsByTagName('button')[1],
checkbox = document.querySelector('#deposit-check'),
additionalIncome = document.querySelectorAll('.additional_income-item'),
InformationTableBudgetDay = document.querySelector('.budget_day-value'),
InformationTableExpensesMonth = document.querySelector('.expenses_month-value'),
InformationTableAdditionalIncome = document.querySelector('.additional_income-value'),
InformationTableAdditionalExpenses = document.querySelector('.additional_expenses-value'),
InformationTableIncomePeriod = document.querySelector('.income_period-value'),
InformationTableTargetMonth = document.querySelector('.target_month-value'),
InputIncomeExpensesTitle = document.querySelector('.expenses .expenses-items .expenses-title'),
InputIncomeAdditionalExpenses = document.querySelector('.additional_expenses-item'),
InputDepositTarget = document.querySelector('.target-amount'),
PeriodSelect1 = document.querySelector('.period-amount'),
BudgetMonth = document.querySelector('.budget_month-value'),
PeriodSelectValue = document.querySelector('period-select');
let expensesItems = document.querySelectorAll('.expenses-items');
let InputIncomeTitle = document.querySelectorAll('.income-items');


const PeriodSelect = document.querySelector('.period-select');

additionalIncome.value = "";
const isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};
class AppData{
    constructor(){
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
    }


reset(){
    let a = document.querySelectorAll('input');
    a.forEach(item => {item.removeAttribute('disabled');
        item.value = null;
        PeriodSelect.value = 1;
        PeriodSelect1.textContent = 1;
    });

}

objAppData(){
        this.income = {};
        this.addIncome = [];
        this.expenses = {};
        this.addExpenses = [];
        this.deposit = false;
        this.precentDeposit = null;
        this.moneyDeposit = null;
        this.IncomeMonth = null;
        this.period = null;
        this.budget = null;
        this.budgetDay = null;
        this.budgetMonth = null;
        this.expensesMonth = null;
        
}

start(){
    this.budget = +InputSalaryAmount.value;
    this.getExpenses();
    this.getIncome();
    this.getExpensesMonth();
    this.getIncomeMonth();
    this.getAddExpenses();
    this.getBudget();
    this.getAddIncome();
    this.showResult();

}

showResult(){
    const _this = this;
    BudgetMonth.value = this.budgetMonth;
    InformationTableBudgetDay.value = this.budgetDay;
    InformationTableExpensesMonth.value = this.expensesMonth;
    InformationTableAdditionalExpenses.value = this.addExpenses.join(', ');
    InformationTableAdditionalIncome.value = this.addIncome.join(', ');
    additionalIncome.value = this.addIncome.value;
    InformationTableTargetMonth.value =  this.getTargetMonth();
    appData.PeriodSelect = document.querySelector('.period-select').addEventListener('input', this.FastEdit);
    AppData.prototype.FastEdit = function(){
        PeriodSelect1.textContent = PeriodSelect.value;
        InformationTableIncomePeriod.value = _this.calcSavedMoney();
};

}


addIncomeBlock(){
    const cloneInputIncomeTitle = InputIncomeTitle[0].cloneNode(true);
    InputIncomeTitle[0].parentNode.insertBefore(cloneInputIncomeTitle, buttonPlus);
    InputIncomeTitle = document.querySelectorAll('.income-items');
    if(InputIncomeTitle.length === 3){
        buttonPlus.style.display = 'none';
    }
}


addExpensesBlock(){
    const cloneExpensesItem = expensesItems[0].cloneNode(true);
    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, buttonPlus1);
    expensesItems = document.querySelectorAll('.expenses-items');
    if(expensesItems.length === 3){
        buttonPlus1.style.display = 'none';
    }
}


getExpenses(){
    const _this = this;
    expensesItems.forEach (item => {
        const itemExpenses = item.querySelector('.expenses-title').value;
        const cashExpenses = item.querySelector('.expenses-amount').value;
        if(itemExpenses !== '' && cashExpenses !== ''){
            _this.expenses[itemExpenses] = cashExpenses;
        }
    });
        }
    

getIncome(){
    InputIncomeTitle.forEach(item => {
        const incomeItems = item.querySelector('.income-title').value;
        const casheIncome = item.querySelector('.income-amount').value;
        if(incomeItems !== '' && casheIncome !== ''){
            appData.income[incomeItems] = casheIncome;
        }          
    });
}

       
getAddExpenses(){
    const _this = this;
    const addExpenses = InputIncomeAdditionalExpenses.value.split(',');
    addExpenses.forEach(item => { 
        item = item.trim();
        if(item !== ''){
        _this.addExpenses.push(item);
        }
    });
    
}

getAddIncome() {
    additionalIncome.forEach(item => {
        let itemValue = item.value.trim();
        if(itemValue !== ''){
            appData.addIncome.push(itemValue);
        }
    });
}


getExpensesMonth(){
    for (let key in this.expenses){
        appData.expensesMonth += +appData.expenses[key];
    }
}

getIncomeMonth(){
    for (let key in appData.income){
        console.log(appData.IncomeMonth += +appData.income[key]);
    }
}

getBudget(){
    this.budgetMonth = this.budget + this.IncomeMonth - this.expensesMonth;
    this.budgetDay = Math.floor(this.budgetMonth / 30);
}
    
getTargetMonth(){
    
    let sum = (InputDepositTarget.value / appData.budgetMonth); 
    if(sum < 0){
        console.log(sum);
        return 'Цель не будет достигнута.';
        
    }
    else{
        return Math.round(sum);
    }
    
    
}

getStatusIncome(){
    if (this.budgetDay >= 1200){
        console.log('У вас высокий уровень дохода');
    }else if (600 < this.budgetDay && this.budgetDay < 1200){
        console.log('У вас средний уровень дохода');
    }else if(this.budgetDay <= 600){
        console.log ('К сожалению у вас уровень дохода ниже среднего.');
    }else{
        console.log ('Что-то пошло не так');
    }
}


    
getInfoDeposit(){
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
    
}

calcSavedMoney(){
    const PeriodMoney = document.querySelector('.period-select').value;
    return this.budgetMonth * PeriodMoney;
}





    
eventListener(){
    appData.start.apply(appData);
    function buttonFunc(){
    button.textContent = 'Рассчитать';
    button.onclick = function(){
        if(InputSalaryAmount.value === ''){
            event.preventDefault();

        }
        else{
            appData.start();
        let a = document.querySelectorAll('input');
        InformationTableIncomePeriod.value = PeriodSelect.value * appData.budgetMonth;
        a.forEach(item =>{
            document.querySelector('.period-select').removeAttribute('disabled');
            item.setAttribute('disabled', true);

        });
        buttonFunc2();

        }
    };
}
buttonFunc();
    function buttonFunc2(){
        
         button.textContent = ('Сбросить');
         button.onclick = function(){
         appData.objAppData();
         buttonFunc();
         PeriodSelect.value = 1;

         appData.reset();

};
}

buttonPlus1.addEventListener('click', appData.addExpensesBlock);
buttonPlus.addEventListener('click', appData.addIncomeBlock );
}
}
const appData = new AppData();
appData.eventListener();
InformationTableTargetMonth.value = null;






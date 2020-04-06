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
    
    addEexpenses: {},
    deposit: false,
    mission: 50000,
    period: 3,
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    





    asking: function(){
        let addExpenses = prompt ('Перечислите возможные расходы за рассчитываемый период через запятую', 'Интернет, бензин');
        
        this.deposit = confirm('Есть ли у вас депозит в банке?');
            let b;
            for (let i = 0; i < 2; i++){
            
                this.expenses[i] = prompt ('Введите обязательную статью расходов?', 'Садик') + ':' + ' ';    
                
                function sum(){
                   let a  = prompt('Во сколько это обойдется?');
                    return a;
                }
                
                b = sum();

                while(!isNumber(b)){
                b =prompt('Во сколько это обойдется?');
                }
                        

                this.expenses[i] += b;

            }
     
            
            b = +b;
            b += b;
           
        
            
        
        return b;
            
    },

    
        
    getAccumulatedMonth: function (){
        return money - expensesAmount;
    },
    getTargetMonth: function(){

        let sum = appData.mission / accumulatedMonth;
        return Math.round(sum);
        },
        getStatusIncome: function(){
            if (budgetDay >= 1200){
            console.log('У вас высокий уровень дохода');
        }else if (600 < budgetDay && budgetDay < 1200){
            console.log('У вас средний уровень дохода');
        }else if(budgetDay <= 600){
            console.log ('К сожалению у вас уровень дохода ниже среднего.');
        }else{
            console.log ('Что-то пошло не так');
        }
        },

        
    
};



let expensesAmount = appData.asking();
money = +money;



// let expenses1 = prompt('Введите обязательную статью расходов?');
// let expenses2 = prompt('Введите обязательную статью расходов?');
// let amount1 = prompt('Во сколько это обойдется?', 5000);
// let amount2 = prompt('Во сколько это обойдется?',1000);

let sum;




console.log('Расходы за месяц: ' + expensesAmount);








appData.getAccumulatedMonth();

let accumulatedMonth = appData.getAccumulatedMonth();

appData.getTargetMonth();
appData.period = Math.ceil(appData.mission / accumulatedMonth);
if (appData.period > 0){
    console.log('Цель будет достигнута за ' + appData.period  + ' ' +  'месяца');
}
else if(appData.period < 0){
    console.log('Цель не будет достигнута.');
}
let budgetDay = Math.floor(accumulatedMonth / 30);


budgetDay = Math.round(accumulatedMonth / 30);


appData.getStatusIncome();
function show(){
    let b;
for (let key in appData){
    b = console.log(key  +  appData[key]);
    
}
return b;
}
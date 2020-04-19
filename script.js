class First{
    hello(){
        console.log('Привет я метод родителя!');
    }
}
let first = new First();
class Second extends First{
    hello(){
        first.hello();
        console.log('А я наследуемый метод!');
    }
}
let second = new Second();
second.hello();

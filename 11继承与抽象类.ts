class Person{
    name:string = '';
    constructor(name:string){
        this.name = name;
    }
    say(){
        console.log(`我是人类，叫做${this.name}`);
    }
}
class Student extends Person{
    num:number = 0;
    score:number = 0;
    // constructor(){
    //     super
    // }
    say(){
        super.say()
        console.log(`我是学生${this.name},分数${this.score}`);
    }
}

let student = new Student('shi')
student.say()




abstract class Car{
    engine:string = '';
    name:string ='';
    abstract run():void;
}
class Byd extends Car{
    color:string = 'red';
    run(){
        console.log(`car can runing ${this.color}`);
    }
}

let byd = new Byd();
byd.run() 

let oldCar:Car = new Byd();
oldCar.run();
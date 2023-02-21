//接口
interface ICalc{
    calc(num1:number,num2:number):number;
}
//类继承接口  两个
class Npc1 implements ICalc{
    calc(num1:number,num2:number) {
        return num1 + num2;
    }
}
class Npc2 implements ICalc{
    calc(num1:number,num2:number){
        return num1 - num2;
    }
}
// 不对，还有一个类 Person
class Person{
    delegate:ICalc;
    GetNum(num1:number,num2:number){
        let num = this.delegate.calc(num1,num2)
        console.log(`${num}`);
    }
}
//创建实例
let person = new Person();
person.delegate = new Npc1();
person.GetNum(2,4);


//结论：无法通过ts编译。
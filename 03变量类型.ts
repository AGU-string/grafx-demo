let a:number[] = [1,2,3,4,5];
let s:string[] = ['sting','satrt','love','tagert'];

//联合类型

let h:number|string = 1;
//04 枚举
enum Color{
    red,
    blue,
    green
}
enum State{
    idle,
    run,
    death,
    attack
}

let color:Color = Color.red;
let state:State = State.idle;
//类型验证
let x  = 10;
console.log(typeof color)
console.log(color)

type NewNumber = number;
let num:NewNumber = 2;


// 05运算符
let num01:number = 10;
num01++;
let res:boolean = 5<3;

// if(1 == 2){

// }

//逻辑运算符  &&  ||  !  逻辑于  逻辑或  逻辑非
res = num > 2 && num <10;
res = num <4 || num >10;
res = !false;
//赋值运算符 =   += -= ...


//06 条件运算符
let age =1;
if (age >18){
    console.log("audlt");
}else{
    console.log("child");
}
let score = 80;
if (score >=0 && score<=59){
    console.log("bujige");
}

//三目运算符
num  = num >100 ? 100 : num;

// switch (state){
//     case State.idle:
//         console.log("站立");
//         break;
//     case State.death:
//         console.log("death");

// }
// 07 循环控制语句
let i:number =0;
let num02:number =0;
while(i<5){
    console.log("I Love ");
    i++;
}
while(i<=100){
    if(i % 2 == 0){
        num02+=i;
    }
    i++;
}
console.log(num02)


// for (in of )


//函数
let arr:string[] = ['a','b','c','d','e'];
function func(char:string){
    for(let i=0;i<5;i++){
        if(char==arr[i]){
            console.log(`字符${i}`)
        }
        
    }
}
func('a');
func('b');

function add(num001:number,num002:number):number{
    let tmp:number = 1;
    return tmp;
}
//return 只会执行一次。

// let add3 = (num1,num2):void=>{
//     return;
// }

//09面向对象  10 构造与静态
// function say(name:string,age:number){
//     console.log(`大家好我叫${name}，${age}`)
// }
// say('shixiao',24);

// 类
// 类 ：人  对象：石晓辉。
// 静态方法/属性：属于类 而不属于对象
class Person1{
    name:string = '';
    age:number =0;

    //构造方法
    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }
    say(){
        console.log(this.name);
    }
    run(){
        console.log(this.age)
    }
}
let aa = new Person1('shi',25);
aa.say();
let b = new Person1('ss',24);
//b.name = 'ss';
b.say()
b.run()

//11 继承与抽象
 



 
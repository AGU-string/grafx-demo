//接口 多继承
// class Person{
//     name:string;
// }
// interface IWolf{
//     attack();
// }
// // class Wolf{

// // }
// class WolfMan extends Person implements IWolf{
//     attack() {
//         console.log('Yes')
//     }
// }
// class WolfMan:Person,Wolf{

// }

//属性寄存器 set get 方法：


// 13 命名空间  

// namespace aa {
//     export class Person{
//         name:string;
//     }
// }
// namespace bb {
//     class Person{
//         age:number;
//     }
// }
// let Dior = new aa.Person();



//14泛型  传递变量无论什么都行

// function add(num:any):any{
//     if(typeof num == 'number'){
//         num++;
//         return num;
//     }
//     return num;
// }
// console.log(add("3"));

function add<T>(num:T):T{
    if(typeof num == 'number'){
                num++;
                return num;
            }
            return num;
}
// console.log(add<number>("3"));
console.log(add<number>(3));

 
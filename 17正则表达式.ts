//元字符   
let reg = /\d{4}-\d{7}/g;
let str = "0123-1234466";
let res = reg.exec(str);
console.log(res.length);


//18访问修饰符  public  protected  private 涉及属性可访问度。


//单例模式
// class SoundManager{
//     Instance = new SoundManager;
//     private constructor(){

//     }
// }
// let soundManager;




//元组
let hero:[string,number]=['chaoren',100];
hero[0]='bianfuxia';

let arry1:number[] =[2,3,4];
// let arry2:Array
//数组


//字典
 let dic:{[key:string]:string} = {
    'name':'xiaohu',
    'name2':'liyao'
 }

 //回调
 function test(){
   console.log('test')
 }
 function func(value:Function){
   value();
 }
 func(test)
 //我写的：
//  function test(){
//    console.log('test')
//  }
//  function func(value()){ //这里没有指定：Function类型。
//    value();
//  }
//  func(test())  //这里多了个()，暂时不知道是啥

  
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
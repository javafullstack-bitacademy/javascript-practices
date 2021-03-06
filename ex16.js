// function 객체를 생성하는 방법1
function f1(a, b){
    return a + b;
}
console.log(typeof(f1), f1(10, 20));

// function 객체를 생성하는 방법2: 리터럴
let f2 = function(a, b) {
    return a + b;
}
console.log(typeof(f2), f2(10, 20));


// function 객체를 생성하는 방법3: Function 생성자 함수를 사용하는 방법
let f3 = new Function('a', 'b', 'return a + b;');
console.log(typeof(f3), f3(10, 20));


// function 객체를 생성하는 방법4: Anonymous(익명) 함수
setTimeout(function(){
    console.log('time out!');
},1000);


// 즉시 실행 함수
// 어떤 처리를 위해서 많은 변수들이 사용될 경우 전역에
// 두지 않고 블록에 두어 사용하고 즉시 버릴 때 -> 메모리를 효율적으로 사용할 수 있고 변수 관리가 용이
let s = (function(a, b){
    return a + b;
})(10, 20);
console.log(s);

// 가변 변수
var sum = function(){
    let sum = 0;
    // for(let i = 0; i < c.length; i++){
    //     sum += arguments[i];
    // }
    Array.prototype.forEach.call(arguments, function(v){
        sum += v;
    })    
    return sum;
}


console.log(sum(1));
console.log(sum(1, 2));
console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4));
console.log(sum(1, 2, 3, 4, 5));



console.log('ends.....')











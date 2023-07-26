// 케이스 1: 선언하지 않은 변수를 참조할 때
// 변수에 값을 할당하지 않았으므로 기본값으로 undefined가 할당됩니다
let a;
console.log(a);


// 케이스 2: 객체의 존재하지 않는 프로퍼티를 참조할 때
// 객체에 존재하지 않는 프로퍼티를 참조할 때 JavaScript는 undefined 값을 반환합니다.
let obj = {};
console.log(obj.noProperty);

// 케이스 3: 함수의 매개변수가 전달되지 않았을 때
// 함수의 매개변수가 전달되지 않았을 때 해당 매변수에는 undefined 값이 할당됩니다.
function doSomething(arg) {
    console.log(arg);
  }

doSomething();
// 케이스 1: 명시적으로 null 값을 할당
// 명시적으로 null 값을 할당하여 null 값이 되었습니다.
let a = null;
console.log(a);


// 케이스 2: 함수가 아무 것도 반환하지 않을 때
// 함수가 아무 것도 반환하지 않을 때, 반환값은 undefined이나, 이 케이스에서는 명시적으로 null 값을 반환하기로 하여 null이 할당됩니다.
function doNothing() {}
let b = doNothing();
console.log(b)
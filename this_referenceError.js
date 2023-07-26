// var person = {
//     name: "홍길동",      // 이름 프로퍼티를 정의함.
//     birthday: "030219",  // 생년월일 프로퍼티를 정의함.
//     age: 30,
//     pId: "1234567",      // 개인 id 프로퍼티를 정의함.
//     fullId: function() { // 생년월일과 개인 id를 합쳐서 주민등록번호를 반환함.
//         return birthday + pId;
//     },
// };
// console.log(person.fullId());

var person = {
    name: "홍길동",
    birthday: "030219",
    age: 30,
    pId: "1234567",
    fullId: function() {
        // 'this' 키워드를 사용하여 person 객체의 프로퍼티에 접근
        return this.birthday + this.pId;
    },
};

console.log(person.fullId()); // 이제 정상적으로 "0302191234567"을 출력합니다.
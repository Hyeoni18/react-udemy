// 배열 디스트럭처링
// 기존 방식
const array = [1, 2, 3];
const a = array[0];
const b = array[1];
const c = array[2];

// 디스트럭처링 방식
const [a, b, c] = [1, 2, 3];
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3

// 일부 값만 가져오기
const [a, , c] = [1, 2, 3]; // b 위치 건너뛰기
console.log(a, c); // 1, 3

// 나머지 연산자 사용
const [first, ...rest] = [1, 2, 3, 4];
console.log(first); // 1
console.log(rest); // [2, 3, 4]

// 객체 디스트럭처링
// 기존 방식
const person = { name: '홍길동', age: 30 };
const name = person.name;
const age = person.age;

// 디스트럭처링 방식
const { name, age } = { name: '홍길동', age: 30 };
console.log(name); // '홍길동'
console.log(age); // 30

// 변수명 변경하기
const { name: userName, age: userAge } = { name: '홍길동', age: 30 };
console.log(userName); // '홍길동'
console.log(userAge); // 30

// 기본값 설정
const { name, age, job = '개발자' } = { name: '홍길동', age: 30 };
console.log(job); // '개발자'

// 함수
// 객체 매개변수 디스트럭처링
function printPerson({ name, age }) {
    console.log(`이름: ${name}, 나이: ${age}`);
}
printPerson({ name: '홍길동', age: 30 }); // 이름: 홍길동, 나이: 30

// 배열 매개변수 디스트럭처링
function printCoordinates([x, y]) {
    console.log(`X: ${x}, Y: ${y}`);
}
printCoordinates([10, 20]); // X: 10, Y: 20
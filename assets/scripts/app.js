// 스프레드 연산자
// const hobbies = ["Sports", "Cooking"];
// const user = {
//   name: "Max",
//   age: 34
// };
//
// const newHobbies = ["Reading"];
//
// const mergedHobbies = [...hobbies, ...newHobbies];
// console.log(mergedHobbies);
//
// const extendedUser = {
//   isAdmin: true,
//   ...user
// };
// console.log(extendedUser);

// 컨트롤 구조 (if, for...in, for...of)
const password = prompt("Your password");

if (password === "Hello") {
  console.log("Hello works");
} else if (password === "hello") {
  console.log("hello works");
} else {
  console.log("Access not granted.");
}

const hobbies = ["Sports", "Cooking"];

for (const hobby of hobbies) {
  console.log(hobby);
}

function handleTimeout() {
  console.log("Timed out!");
}

const handleTimeout2 = () => {
  console.log("Timed out ... again!");
};

// setTimeout 정의 함수 사용
// handleTimeout() 작성하면 함수가 바로 실행되어 반환 값을 실행하게 됨
// 함수를 직접 실행할 수 있도록 괄호를 빼고 작성
setTimeout(handleTimeout, 2000);
setTimeout(handleTimeout2, 3000);
setTimeout(() => {
  console.log("More timing out...");
}, 4000);

// 함수 안에 다른 함수 정의 (바닐라 JS 에선 부적합 할지라도 리액트에선 적합)
function init() {
  function greet() {
    console.log('Hi!');
  }

  greet();
}

init();
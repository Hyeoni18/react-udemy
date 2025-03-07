// 이전에 배운 객체는 키-값 쌍인 값을 그룹으로 묶는 거
// 배열은 목록을 생성하는 것
const hobbies = ["Sports", "Cooking", "Reading"];
console.log(hobbies[0]);

hobbies.push("Working");
console.log(hobbies);

// 배열이 제공하는 findIndex 함수는 모든 원소를 돌려 내부에서 정의한 내용에 따라 값을 return 한다. 해당 값을 가진 index 존재 -> index 반환, 아니면 false
const index = hobbies.findIndex((item) => item === "Sports");
console.log(index);

// 배열이 제공하는 map 함수는 새로운 값을 생성하여 반환한다.
const editedHobbies = hobbies.map((item) => ({ text: item }));
console.log(editedHobbies);
// 객체 생성
const user = {
    name: 'Max',
    age: 20,
    greet() {
        console.log('Hi');
        // 객체 내부 프로퍼티 접근 가능
        console.log(this.age);
    }
}

console.log(user.name); // Max
user.greet(); // Hi

// 블루 프린트
class User {
    // 생성자를 통해 블루프린트 내 객체 값을 생성할 수 있음
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(' Hello-!');
    }
}

// 위에서 생성한 User 블루프린트를 인스턴스화
const user1 = new User('Manuel', 22);
console.log(user1);
user1.greet();

// 강의에서 class 키워드를 자주 사용하진 않을거지만 알아둬야 함
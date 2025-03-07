let userMessage = 'Hello world';

console.log(userMessage);

// message 는 default 값으로 greeting1 처럼 매개변수 전달하지 않을 경우 표출되는 값이다.
function createGreeting(userName, message = "Hello!") {
    console.log(userName);
    console.log(message);
  return "Hi, I am " + userName + ". " + message;
}

const greeting1 = createGreeting("Max");
console.log(greeting1);

const greeting2 = createGreeting("Manuel", "Hello, what's up?");
console.log(greeting2);
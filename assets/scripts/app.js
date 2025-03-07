// 익명 함수 export
// export default function() {
//     console.log('Hello');
// }

// function 을 쓰는 방법도 있지만 화살표 함수를 쓰는 게 더 좋다.
export default (userName, message) => {
    console.log('Hello');
    return userName + ", " + message;
}
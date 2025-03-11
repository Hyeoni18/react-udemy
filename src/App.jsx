import reactImg from './assets/react-core-concepts.png';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomIt(max) {
    return Math.floor(Math.random() * (max + 1));
}

function Header() {
    const description =  reactDescriptions[genRandomIt(2)];
    return (
        <header>
            {/* Type {} is not assignable to type string | undefined,
            TypeScript 사용하는 React 프로젝트에서 발생하는 타입 에러.
            오류 메세지는 img 태그의 src 속성이 문자열이나 undefined 타입만
            받을 수 있는데, 객체 타입을 할당하려고 시도하고 있다는 의미.
            => 이미지 경로 변환을 위한 타입 선언 필요.
            (만약 TypeScript가 이미지 import 를 처리하지 못한다면,
            이미지에 대한 타입 선언이 필요할 수 있음.)
            // 프로젝트 내 .d.ts 파일에 추가
            declare module '*.png' {
              const value: string;
              export default value;
            }
            이 오류는 주로 ts와 이미지 로더 설정의 불일치로 인해 발생.
            */}
            <img src={reactImg} alt="Stylized atom"/>
            <h1>React Essentials</h1>
            <p>
                { description } React concepts you will need for almost any app you are
                going to build!
            </p>
        </header>
    );
}

function App() {
    return (
        <div>
            <Header />
            <main>
                <h2>Time to get started!</h2>
            </main>
        </div>
    );
}

export default App;

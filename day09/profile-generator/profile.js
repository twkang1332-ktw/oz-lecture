// 변수 선언
var num= 1;
console.log(num);
var num = 2;
console.log(num);
num = 3;
console.log(num);

let string = "안녕하세요";
console.log(string);
// let string = "28"       // 변수 재선언 불가
string = "반갑습니다";      // 재할당 가능
console.log(string);

const boolean = true;
console.log(boolean);
// const boolean = "math"     // 재할당 불가

// 문자열 처리
let string1 = "이스케이프 \n문자(줄바꿈)";
console.log(string1);
let string2 = "이스케이프 \t문자(tab)";
console.log(string2);
let string3 = "문자열" + " 연결";
console.log(string3);

// 배열 리터럴
let hobbies = ["reading", "gaming", "coding",];
console.log("My hobbies: " + hobbies);
console.log(hobbies[0]);     // reading
console.log(hobbies[1]);     // gaming
console.log(hobbies[2]);     // coding

// 객체 리터럴
let personalInformation = {
    name: "John",
    age: 20,
    isStudent: true
};
console.log(personalInformation. name);
console.log(personalInformation. age);
console.log(personalInformation. isStudent);

// typeof
console.log(typeof num);
console.log(typeof string);
console.log(typeof boolean)

console.log(typeof hobbies);
console.log(typeof personalInformation);        // object

console.log(typeof hobbies[0]);
console.log(typeof hobbies[1]);
console.log(typeof hobbies[2]);     // string x 3

console.log(typeof personalInformation. name);
console.log(typeof personalInformation. age);
console.log(typeof personalInformation. isStudent);     // string, number, boolean

// 도전과제
// null과 undefined 구분
let empty1 = null;
let empty2;
console.log(typeof empty1);     // object(?)
console.log(typeof empty2);     // undefined
console.log(null === undefined);        // false

// 템플릿 문자열
let myAge = 27;
let es6String = `저는 ${myAge}살 입니다.`
console.log(es6String);

//추가 데이터 처리
let data = ["string", 27, true, null, undefined];
console.log(typeof data[0]);        // string
console.log(typeof data[1]);        // number
console.log(typeof data[2]);        // boolean
console.log(typeof data[3]);        // object(?)
console.log(typeof data[4]);        // undefined

data.email = null;   // 객체에 속성 추가
console.log(data.email === null);        //true
console.log(data.email);        //null

// null은 typeof로 확인하면 object가 나오지만, 값을 출력하면 null이 나온다.


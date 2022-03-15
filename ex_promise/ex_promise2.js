// 연습문제 2번
// 1초후에 실행되는 promise를 then을 실행해
// 출력 시 "안녕하세요 하보석 님" 1초후에 나오게 제작

// 함수표현식으로 Promise 정의
let promise = new Promise((resolve, recjet) => {
    setTimeout(() => {
        let name = prompt("이름을 입력하세요");
        resolve(name);
    }, 1000)
});

// Promise 함수를 실행하여 출력해보기 
// 내 풀이
promise.then(function() {
    console.log("안녕하세요 " + name + "님");
});

// 해설
promise.then(function(name) {
    console.log("안녕하세요 " + name + "님");
});
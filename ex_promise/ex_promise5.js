// 연습문제 5번
// 한 문자를 입력받아 1초 후에 출력하는 비동기 프로그램을 작성하세요
// 입력 a 출력 a

// 내 풀이
let promise = new Promise((resolve, reject) => {
    let num = String(prompt("문자를 입력하세요"));
    setTimeout(() => {
        resolve(num);
    }, 2000)
})

promise.then((num) => {
    console.log(num);
})

// [해설]
let wait2 = inputStr => {
    return new Promise((resolve, reject) => {
        let char1 = prompt("한 문자를 입력하세요");
        setTimeout(function() {
            resolve(char1);
        }, 2000);
    });
};

wait2().then((char1) => {
    console.log(char1)
})
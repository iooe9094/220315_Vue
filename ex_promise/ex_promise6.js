// 연습문제 6번
// 두 문자를 공백을 띄워 입력받아 1초후에 출력하는 거꾸로인 비동기 프로그램 작성
// 입력 a b 출력 b <br> a

// 내 풀이
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let num = prompt("문자를 입력하세요").split("");
        let reverse = num.reverse();
        resolve(reverse);
    }, 1000)
})

promise.then((reverse) => {
    console.log(reverse[0]);
    console.log(reverse[1]);
})

// 해설
let wait2 = inputStr => {
    return new Promise((resolve, reject) => {
        let arr = prompt("문자 입력하세요").split("");
        setTimeout(function() {
            resolve(arr);
        },2000)
    })
}

wait2().then(function(arr) {
    console.log(arr[1]);
    console.log(arr[2]);
});
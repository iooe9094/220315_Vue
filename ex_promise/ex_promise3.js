// 연습문제 3번
// 아래 Promise 함수를 호출하여 출력하세요

let promise = new Promise((resolve, reject) => {
    let n = Number(prompt("10 미만의 숫자를 입력하세요"));
    // 1초 후에 실행되도록
    setTimeout(() => {
        if (n<=10) {
            // 성공
            resolve(`성공: ${n}은 10미만 숫자입니다`);
        }
        else {
            // 실패
            reject(`오류: ${n}는 10이상 숫자입니다.`);
        }
    }, 1000)
})

promise
    .then((n) => {
        console.log(n);
    })
    .catch((n) => {
        console.log(n);
    });
// 아래 코드를 깔끔하게 보이게 하는 방법 [ catch (reject사용 시) 사용]

promise
    .then(function(n) {console.log(n);}
         ,function(n) {console.log(n);})






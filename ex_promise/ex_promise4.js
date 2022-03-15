// 연습문제 4번. 비동기로 동작하는 function 정의

function buyAsync(mymoney) {
    return new Promise(function(resolve, reject) {
        let payment = Number(prompt("지불하고자 하는 금액을 입력하세요"));
        // 비동기로 동작하는 함수 정의
        // 1초 후에 실행함
        setTimeout(function() {
            let balance = mymoney - payment;
            if(balance > 0) {
                // 성공
                console.log(`${payment}원을 지불하였습니다`);
                resolve(balance);
            }
            else {
                // 실패
                reject(`잔액은 ${mymoney}원 입니다. 구매불가`);
            }
        }, 2000);
    });
}

// 함수 호출부
buyAsync(500)
    .then(function(balance) {
        console.log(`잔액은 ${balance}원 남았습니다.`);
    })
    .catch(function(err) {
        console.log(err);
    });
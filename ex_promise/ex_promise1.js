// 연습문제 1번
// 콜백함수를 promise로 바꾸세요

// const wait = (inputStr, callback) => {
//     setTimeout(() => {
//         console.log(inputStr);
//         callback();
//     }, 1000)
// }

// wait("B", () => {
//     wait("C", () => {
            // return;
// });
// });

// 내가 한 풀이
// const wait2 = inputStr => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(inputStr);
//             resolve();
//         }, 1000)
//     });
// };

// wait2("B")
//     .then(() => wait("C"))
//     .then(() => wait("D"));

// 해설
let promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("B")
        resolve();
    }, 1000);
});

// promise.then(function() {
//     console.log("C")
// })
promise
    .then(() => console.log("C"))

    
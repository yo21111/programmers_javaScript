// 프로그래머스 3진법 뒤집기
// 다른사람의 풀이 : parseInt([...n.toString(3)].reverse().join(""), 3); .. 공부..

function solution(n) {
    const arr = [];
    while(n > 0) {
        arr.push(Math.floor(n % 3));
        n = Math.floor(n /= 3);
    }
    
    let pow = 0;
    let sum = 0;
    for(let i = arr.length - 1; i >= 0; i--) {
        sum += Math.pow(3, pow) * arr[i];
        pow++;
    }

    return sum;
}
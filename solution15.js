//프로그래머스, 약수의 합

function solution(n) {
    const yak = [];
    for(let i = 1; i <= n; i++) {
        if(n%i === 0) {
            yak.push(i);
        }
    }
    return yak.reduce((a,b) => (a+b,0));
}
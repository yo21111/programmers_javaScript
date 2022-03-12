// 프로그래머스, 부족한 금액 계산
/*
    사용 횟수마다 횟수배만큼 증가되는 사용료를 내야한다면
    마지막 가진 돈보다 금액이 크다면 차액을 적다면 0을 반환하는 문제
    가우스 공식을 사용하는 경우가 있었음
    (1 ~ x까지의 합 n * (n + 1) / 2인데 여기에 price배 만큼 곱해주는 거니까 (앞의 식) * price)
    -> 어차피 각(1,2,3,4,...)에 모두 price를 곱해야하므로 (1,2,3,4,...)의 합에 price를 곱해도 같은 결과가 도출됨
*/

function solution(price, money, count) {
    var answer = 0;
    for(let i = 1; i <= count; i++) {
        answer += i*price;
    }
    return answer - money >= 0 ? answer - money : 0;
}
// 프로그래머스, 예산
/*
각 부서에서 희망하는 금액이 예산을 초과하지 않는 범위에서
몇개의 부서가 지원 가능한지 확인하는 문제
break의 위치만 주의하면 쉽게 풀 수 있음
*/

function solution(d, budget) {
    var answer = 0;
    d.sort((a, b) => a-b);

    let sum = 0;
    for(let i = 0; i < d.length; i++) {
        sum += d[i];
        if(sum > budget) {
            break;
        }
        answer += 1;
    }

    return answer;
}
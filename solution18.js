//프로그래머스, 정수 제곱근 판별
/*
n이 어떠한 양수의 제곱근일 경우 n의 제곱근+1을 제곱하여 반환하고
아닐 경우 -1을 반환하는 문제

자바스크립트의 경우 let변수를 나누거나 제곱근을 구하는 경우
소수점이 없어지지 않고 double의 형태로 나타나는 것을 활용하여
해당 숫자를 내림했을 때 동일한지 확인하여 풀었음
*/
function solution(n) {
    let sqrt = Math.sqrt(n);
    let answer = Math.pow(sqrt+1, 2);
    if(Math.floor(sqrt) !== sqrt){
        answer = -1;
    }
    return answer;
}
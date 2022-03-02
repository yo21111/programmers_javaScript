// 프로그래머스, 나머지가 1이되는 수 찾기

function solution(n) {
    var answer = 2;
    while(!(n%answer == 1)) {
        answer++;
    }
    return answer;
}
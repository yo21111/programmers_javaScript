// 프로그래머스, 로또의 최고 순위와 최저 순위
/*
알아볼 수 없는 숫자가 가장 많이 맞을 때의 순위와 가장 적게 맞을 때의 순위 구하기
filter를 사용하면 조금 더 쉽게 구할 수 있을 듯 함
*/
function solution(lottos, win_nums) {
    const tmp = [];
    let count = 0;
    for(let i = 0; i < lottos.length; i++) {
        if(win_nums.indexOf(lottos[i]) != -1) {
            tmp.push(lottos[i]);
        } else if (lottos[i] == 0) {
            count++;
        }
    }
    let min = tmp.length;
    let max =  tmp.length + count;
    let answer = [7-max == 7 ? 6 : 7 - max, 7-min == 7 ? 6 : 7 - min];
    return answer;
}
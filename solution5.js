// 프로그래머스 문자열 내림차순 정렬하기
/*
split(구분자) : 구분자를 기준으로 문자열을 배열로 만든다
sort() : 배열을 오름차순 정렬한다
reverse() : 배열을 뒤집는다
join(구분자) : 구분자를 기준으로 배열을 문자열로 만든다
*/
function solution(s) {
    let arr = s.split("").sort().reverse().join("");
    return arr;
}
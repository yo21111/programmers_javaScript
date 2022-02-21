// 프로그래머스, 문자열 다루기 기본
/*
문자열 길이가 4 또는 6이고 숫자로만 이루어졌을 때 true를 반환하는 문제
정규식과 replace( )를 사용하여  숫자만으로 이루어져있는지 확인하였고
삼항연산자를 활용하여 길이까지 한번에 확인하였음
 */
function solution(s) {
    var answer = s.replace(/[0-9]/g,"").length == 0  && (s.length == 4 || s.length == 6)? true : false;
    return answer;
}
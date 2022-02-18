// 프로그래머스 문자열 내 p와 y의 개수
/*
    p와 y의 갯수가 같으면 true를 반환하는 문제
    split 자체를 p와 y로 각각 한다음 길이가 같으면 true가 되었으면
    더 깔끔하게 풀 수있었을 듯
    filter 함수에 대해 공부할 수 있었음
*/
function solution(s){
    const arr = s.toLowerCase().split('').filter(item => item=='p' || item=='y');
    const pArr = arr.filter(item => item == 'p');
    var answer = arr.length - pArr.length*2 == 0 ? true : false;
    return answer;
}
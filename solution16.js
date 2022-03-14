//프로그래머스, 이상한 문자 만들기

/*
    홀수번째는 대문자 짝수번째는 소문자로 변환하기(각 단어별 인덱스)
    다른 사람 문제 풀이
    s.toUpperCase().replace(/(\w)(\w)/g, function(a){return a[0].toUpperCase()+a[1].toLowerCase();})
    정규식을 사용하면 쉬운 문제들이 많음
*/

function solution(s) {
    var answer = '';
    const arr = s.toUpperCase().split(" ");
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++) {
            if(j%2 === 1) {
                answer += arr[i].charAt(j).toLowerCase();
            } else {
                answer += arr[i].charAt(j);
            }
        }
        if(i != arr.length-1) {
            answer += " ";
        }
    }
    return answer;
}
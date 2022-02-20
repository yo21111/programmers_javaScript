// 프로그래머스, 시저 암호
/*
s의 단어를 n만큼 뒤로 밀어 새로운 단어를 만드는 문제
javascript에서는 아스키 코드 넘버를 사용해본적 없기에
const abc를 선언 및 초기화하여서 사전처럼 사용하였음
*/

const abc = ['a', 'b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
function solution(s, n) {
    var answer = '';
    for(let i = 0; i < s.length; i++) {
        let target = s.charAt(i);
        if (target == " ") {
            answer += " ";
            continue;
        } else if(abc.indexOf(target) == -1) {
            target = target.toLowerCase();
            target = check(target, n);
            target = target.toUpperCase();
        } else {
            target = check(target, n);
        }
        answer += target;
    }
    return answer;
}

function check(word, n) {
    let idx = (abc.indexOf(word) + n) % 26;
    return abc[idx];
}
// 프로그래머스 [1차] 다트게임
/*
다트를 세번 던졌을 때 최종 점수를 구하는 문제
정규식을 써보려 했지만 한계에 부딪혀 각 상황에 따른
코드륵 작성하여서 푼 문제
정규식을 알고 있으면 조금 더 풀 수 있는 문제가 많아짐을
한번 더 느끼게 되었음
*/

function solution(dartResult) {
    const dartArr = [];
    let tmp = "";

    for(let i = 0; i < dartResult.length; i++) {
        if(0 <= dartResult.charAt(i) && dartResult.charAt(i) <= 9) {
            if(tmp != "" && !(0 <= tmp && tmp <= 9)) {
                dartArr.push(tmp);
                tmp = "";
            }
            tmp += dartResult.charAt(i);
        } else {
            dartArr.push(tmp);
            tmp = dartResult.charAt(i);
        }
    }
    if(tmp != "") {
        dartArr.push(tmp);
    }

    const sum = dartProc(dartArr);
    var answer = sum.reduce((a, b) => a + b, 0);
    return answer;
}

function dartProc(dartArr) {
    const sum = [];
    let target = 0;
    let idx = 0;

    for(let i = 0; i < dartArr.length; i++) {
        if(idx == 0) {
            target = dartArr[i];
            idx++;
        } else if(idx == 1) {
            if(dartArr[i] == "S") {
                target = Math.pow(target, 1);
            } else if(dartArr[i] == "D") {
                target = Math.pow(target, 2);
            } else if(dartArr[i] == "T") {
                target = Math.pow(target, 3);
            }
            idx++;
        } else {
            if(dartArr[i] == "*" || dartArr[i] == "#") {
                if(dartArr[i] == "*") {
                    target *= 2;
                    if (sum.length != 0) {
                        sum[sum.length-1] *= 2;
                    }
                }else {
                    target *= -1;
                }
                sum.push(target);
            } else {
                sum.push(target);
                i--;
            }
            idx = 0;
        }
    }
    if(sum.length != 3 && target != 0) {
        sum.push(target);
    }
    return sum;
}
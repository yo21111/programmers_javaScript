//프로그래머스, 두개 뽑아서 더하기
/*
배열의 각각 다른 값들을 뽑아서 더한 후 오름차순으로 정렬하는 것
중복되는 숫자들은 제거해야하기 때문에 set에 넣어서 중복을 제거함
*/
function solution(numbers) {
    var answer = [];

    for(let i = 0; i < numbers.length; i++) {
        for(let j = 0; j < numbers.length; j++) {
            if(j !== i) {
                answer.push(Number(numbers[i] + numbers[j]));
            }
        }
    }

    const unique = [...new Set(answer)];

    return unique.sort((a, b) => a - b);
}
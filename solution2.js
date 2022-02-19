// 프로그래머스, 폰켓몬
/*
    nums.length의 절반만큼 다른 종류의 숫자를 몇개 가져갈 수 있는지 확인하는 문제
    배열에서 중복을 제거하는 것이 키포인트
*/
function solution(nums) {
    const set = new Set(nums);
    const res = [...set];
    var answer = Math.floor(nums.length/2) < res.length ? Math.floor(nums.length/2) : res.length;
    return answer;
}
//프로그래머스, 2016년
/*
월과 일로 주어지는 a,b를 보고 2016년의 해당 날짜의 요일 구하는 문제
*/
function solution(a, b) {
    let cal = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let day = ["THU","FRI","SAT","SUN","MON","TUE","WED"];
    
    let sum = 0;
    
    for(let i = 0; i < a-1; i++) {
        sum += cal[i]%7;
    }
    
    sum = (sum+b)%7;
    
    return day[sum];
}
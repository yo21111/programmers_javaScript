//프로그래머스, 탐욕법, 체육복

function solution(n, lost, reserve) {
    const stds = Array(n).fill(1);
    for(let i = 0; i < lost.length; i++) {
        stds[lost[i]-1]--;
    }
    
    
    for(let k = 0; k < reserve.length; k++) {
        stds[reserve[k]-1]++;
    }
    
    
    for(let j = 0; j < stds.length; j++) {
      if(stds[j] > 1) {
          if(j - 1 >= 0 && stds[j-1] === 0) {
              stds[j-1]++;
              stds[j]--;
          } else if(j+1 < n && stds[j+1] === 0) {
              stds[j+1]++;
              stds[j]--;
          }
      }
    }

    const answer = stds.filter(i => i >= 1);
    return answer.length;
}
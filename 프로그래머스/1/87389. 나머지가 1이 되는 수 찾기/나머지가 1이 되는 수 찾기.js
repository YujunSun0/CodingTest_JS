function solution(n) {
    for(let x = 2; x < n; x++){
        if(n % x === 1){
            return x
        } 
      } 
    }
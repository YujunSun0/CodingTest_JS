function solution(A,B){
    const length = A.length;
    let sum = 0;
   // A는 오름차순, B는 내림차순
    A.sort((a,b) => a-b);
    B.sort((a,b) => b-a);
    
    for(let i=0; i<length; i++) {
        sum += A[i] * B[i];
    }
    
    return sum;
}
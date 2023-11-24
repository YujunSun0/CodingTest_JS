function solution(queue1, queue2) {
    const TOTAL_ARRAY = [...queue1, ...queue2];
    const MAXCOUNT = 2*TOTAL_ARRAY.length;
    const sum = (arr)=>arr.reduce((a,b)=>a+b);
    const TARGET = sum(TOTAL_ARRAY)/2;
    let count = 0;
    let start = 0;
    let end = queue1.length;
    let totalSum = sum(TOTAL_ARRAY.slice(start, end));
    while(count<=MAXCOUNT || end < TOTAL_ARRAY.length){
        if(TARGET > totalSum){
            totalSum += TOTAL_ARRAY[end];
            end++;
        }else if(TARGET < totalSum){
            totalSum -= TOTAL_ARRAY[start];
            start++;      
        }else if(TARGET === totalSum){
            return count;
        }
        count++;
    }
    return -1;
}
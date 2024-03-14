function solution(x, y, n) {
    let dpArr = new Array(y+1).fill(-1);
    dpArr[x] = 0;

    for(let i = x;i<=y;i++){

        if(dpArr[i]===-1){
            continue;
        }

        if(i+n<=y){
            if(dpArr[i+n]===-1){
                dpArr[i+n] = dpArr[i]+1;
            }
            else{
                dpArr[i+n] = dpArr[i+n]>dpArr[i]+1?dpArr[i]+1:dpArr[i+n];
            }
        }
        if(i*2<=y){
            if(dpArr[i*2]===-1){
                dpArr[i*2] = dpArr[i]+1;
            }
            else{
                dpArr[i*2] = dpArr[i*2]>dpArr[i]+1?dpArr[i]+1:dpArr[i*2];
            }
        }
        if(i*3<=y){
            if(dpArr[i*3]===-1){
                dpArr[i*3] = dpArr[i]+1;
            }
            else{
                dpArr[i*3] = dpArr[i*3]>dpArr[i]+1?dpArr[i]+1:dpArr[i*3];
            }
        }
    }
    return dpArr[y];
}


// DFS를 사용하면 시간복잡도가 O(3^d)이여서 깊이가 깊을수록 기하급수적으로 늘어남 
// <- d는 깊이(depth) 

// function solution(x, y, n) {
//     var answer = -1;
//     var count = 0;
//     function dfs(x,count){
//         if(x===y){
//             //초기값 잡기
//             if(answer===-1){
//                 answer = count;
//             }
//             else{
//                 if(answer>count) answer = count;
//             }
//             return;
//         }
//         else if(x>y) return;
//         else{
//             dfs(x*2,count+1)
//             dfs(x*3,count+1)
//             dfs(x+n,count+1)
//         }
//     }
    
//     dfs(x,count);    
//     return answer;
// }

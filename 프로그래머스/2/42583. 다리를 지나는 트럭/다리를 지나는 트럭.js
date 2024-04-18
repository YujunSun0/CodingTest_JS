function solution(bridge_length, weight, truck_weights) {
    let bridge = new Array(bridge_length).fill(0);
    let time = 0;
    
    // 0이 될 때 까지
    while(bridge.length) {
        bridge.shift();
        if(truck_weights.length){
            const sumBridge = bridge.reduce((a,b) => a + b, 0)
        if(sumBridge + truck_weights[0] <= weight){
            bridge.push(truck_weights.shift())
        } else {
            // 0을 넣지 않으면 while문이 종료됨
            bridge.push(0)
        }    
      } 
    
    time++
 }
    return time
}
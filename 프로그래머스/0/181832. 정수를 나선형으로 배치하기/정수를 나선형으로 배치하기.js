function solution(n) {
    const answer = Array.from({length:n}, () => []);
    let [x,y,i] = [0,0,1];
    let [low_left, low_right] = [0, n-1];
    let [column_top, column_bottom] = [0, n-1];
    let direction = "right";
    while(i <= n**2) {
        answer[y][x] = i;
        switch(direction) {
            case "left":
                x--;
                if(low_left === x){
                  direction = "top";
                  column_bottom--;
                } 
                break;
            case "right":
                x++;
                if(low_right === x){
                  direction = "bottom";
                  column_top++;
                } 
                break;
            case "top":
                y--;
                if(column_top === y){
                  direction = "right";
                  low_left++;
                } 
                break;
            case "bottom":
                y++;
                if(column_bottom === y){
                  direction = "left";
                  low_right--;
                } 
                break;
        }
        i++;
    }
    return answer;
}
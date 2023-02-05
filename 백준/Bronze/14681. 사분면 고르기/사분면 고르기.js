const [x, y] = require("fs").readFileSync(0).toString().trim().split('\n').map(Number);

if(x >0 && y > 0){
    console.log(1)
} else if(x < 0 && y > 0) {
    console.log(2)
} else if(x > 0 && y < 0){
    console.log(4)
}  else{
    console.log(3)
}
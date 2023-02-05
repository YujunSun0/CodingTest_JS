const input = parseInt(require("fs").readFileSync("/dev/stdin")+"");


if(input > 89){
    console.log("A")
} else if(input > 79){
    console.log("B")
}  else if(input > 69){
    console.log("C")
} else if(input > 59) {
    console.log("D")
} else{
    console.log("F")
} 
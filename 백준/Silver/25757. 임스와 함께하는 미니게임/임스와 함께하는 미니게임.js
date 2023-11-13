const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, game] = input.shift().split(" ");

switch(game)
{
    case "Y":
        console.log(new Set(input).size);
        break;
    case "F":
        console.log(parseInt(new Set(input).size / 2));
        break;
    case "O":
        console.log(parseInt(new Set(input).size / 3));
        break;
}
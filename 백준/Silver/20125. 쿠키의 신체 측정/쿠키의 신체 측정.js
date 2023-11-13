const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const N = input.shift();

let result = "";
// 머리부터 심장까지
let headRowIdx = input.findIndex(el => el.includes("*"));
result += `${headRowIdx + 2} `;
input.splice(0,headRowIdx); // 머리가 있는 행부터 시작하기위해 제거
let headIdx = input[0].indexOf("*"); // 행에서 머리의 위치 -> idx + 1
result += `${headIdx + 1}\n` // 심장의 위치
// 팔의 길이
let leftArm = input[1].slice(0,headIdx).split("").filter(el => el === "*").length;
let rightArm = input[1].slice(headIdx+1).split("").filter(el => el === "*").length;
result += `${leftArm} ${rightArm} `;
// 허리의 길이
let waist = 0;
let idx = 2;
while(input[idx].split("").filter(el => el === "*").length === 1){
    waist++;
    idx++;
}
result += `${waist} `
// 다리의 길이
let leftLegIdx = headIdx - 1;
let rightLegIdx = headIdx + 1;
let [leftLeg, rightLeg] = [0,0];
for(let i=idx; i<input.length; i++){
 if(input[i][leftLegIdx] === "*") leftLeg++;
 if(input[i][rightLegIdx] === "*") rightLeg++;
}
result += `${leftLeg} ${rightLeg}`

console.log(result);
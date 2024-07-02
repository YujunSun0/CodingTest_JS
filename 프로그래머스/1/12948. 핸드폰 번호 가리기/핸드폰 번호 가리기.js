function solution(phone_number) {
    let num = phone_number;
    const numLength = phone_number.length;
    
    for(let i=0; i<numLength; i++) {
        if(i < numLength - 4) {
            const stringArr = num.split("");
            stringArr[i] = "*"
            num = stringArr.join("");
        }
    }
    
    return num;
}
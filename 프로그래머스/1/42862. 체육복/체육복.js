function solution(n, lost, reserve) {
    // 체육복을 도난당했지만 여벌 체육복이 있는 학생 처리
    let realLost = lost.filter(l => !reserve.includes(l));
    let realReserve = reserve.filter(r => !lost.includes(r));
    
    // 실제로 체육복이 필요한 학생과 여벌 체육복이 있는 학생 정렬
    realLost.sort((a, b) => a - b);
    realReserve.sort((a, b) => a - b);

    // 여벌 체육복이 있는 학생으로부터 체육복을 빌릴 수 있는 학생 처리
    for(let i = 0; i < realReserve.length; i++) {
        let reserveIndex = realLost.indexOf(realReserve[i] - 1);
        if(reserveIndex !== -1) {
            realLost.splice(reserveIndex, 1);
            continue;
        }
        reserveIndex = realLost.indexOf(realReserve[i] + 1);
        if(reserveIndex !== -1) {
            realLost.splice(reserveIndex, 1);
        }
    }

    // 전체 학생 수에서 실제로 체육복이 필요한 학생 수를 빼서 체육수업을 들을 수 있는 학생 수 계산
    return n - realLost.length;
}

function solution(name) {
    // 위/아래, 왼쪽/오른쪽 이동의 동작을 분리해서 코드를 작성함
    // 왼쪽/오른쪽 이동은 3가지 경우의 수 중 최솟값으로 하면 됨
    let cnt = 0;
    let move = name.length - 1;

    for (let i = 0; i < name.length; i++) {
        let charCode = name.charCodeAt(i) - 65;
        cnt += Math.min(charCode, 26 - charCode);

        let nextIdx = i + 1;
        while (nextIdx < name.length && name[nextIdx] === 'A') {
            nextIdx++;
        }

        move = Math.min(move, i + name.length - nextIdx + Math.min(i, name.length - nextIdx));
    }

    return cnt + move;
}

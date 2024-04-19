function solution(people, limit) {
    let cnt = 0;
    people.sort((a, b) => a - b);
    // 투 포인터
    let left = 0, right = people.length - 1;
    while (left <= right) {
        if (people[left] + people[right] <= limit) {
            left++;
        }
        right--;
        cnt++;
    }
    return cnt;
}
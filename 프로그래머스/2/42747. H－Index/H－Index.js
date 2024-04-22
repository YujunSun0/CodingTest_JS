function solution(citations) {
  citations.sort((a, b) => b - a);
  
  for (let i = 0; i < citations.length; i++) {
      console.log(citations[i], i + 1);
    if (citations[i] === i + 1) {
      return i + 1;
    } else if (citations[i] < i + 1) {
      return i;
    }
  }
  return citations.length;
}
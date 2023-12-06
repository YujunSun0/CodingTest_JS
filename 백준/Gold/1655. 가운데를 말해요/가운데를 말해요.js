let fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const N = input[0];
input = input.slice(1);

class MinBinaryHeap {
  constructor() {
    this.values = [];
  }

  size() {
    return this.values.length;
  }

  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];

      if (element >= parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  getMin() {
    return this.values[0];
  }

  extractMin() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }

    return min;
  }

  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[idx];

    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild < element) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild < element) ||
          (swap !== null && rightChild < leftChild)
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  size() {
    return this.values.length;
  }

  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];

      if (element <= parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  getMax() {
    return this.values[0];
  }

  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }

    return max;
  }

  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[idx];

    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

const minHeap = new MinBinaryHeap();
const maxHeap = new MaxBinaryHeap();
const answer = [];
let mid = Number.MIN_SAFE_INTEGER;

for (let num of input) {
  if (num > mid) {
    minHeap.insert(num);
  } else {
    maxHeap.insert(num);
  }

  if (minHeap.size() > maxHeap.size()) {
    maxHeap.insert(minHeap.extractMin());
  } else if (maxHeap.size() > minHeap.size()) {
    minHeap.insert(maxHeap.extractMax());
  }

  if (minHeap.size() === maxHeap.size()) {
    mid = Math.min(minHeap.getMin(), maxHeap.getMax());
  } else if (minHeap.size() > maxHeap.size()) {
    mid = minHeap.getMin();
  } else {
    mid = maxHeap.getMax();
  }

  answer.push(mid);
}
console.log(answer.join("\n"));

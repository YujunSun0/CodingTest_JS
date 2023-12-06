const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

function swap(q, i, j) {
  const temp = q[i];
  q[i] = q[j];
  q[j] = temp;
}

function minHeapPush(q, node) {
  q.push(node);
  let index = q.length - 1;
  let parentIndex = Math.floor((index - 1) / 2);

  while (index > 0 && q[index] < q[parentIndex]) {
    swap(q, index, parentIndex);
    index = parentIndex;
    parentIndex = Math.floor((index - 1) / 2);
  }
}

function maxHeapPush(q, node) {
  q.push(node);
  let index = q.length - 1;
  let parentIndex = Math.floor((index - 1) / 2);

  while (index > 0 && q[index] > q[parentIndex]) {
    swap(q, index, parentIndex);
    index = parentIndex;
    parentIndex = Math.floor((index - 1) / 2);
  }
}

function minHeapPop(q) {
  const ret = q[0];

  let index = 0;
  let child;

  q[0] = q[q.length - 1];
  q.pop();

  if (q.length === 0) {
    return ret;
  }

  while (q.length > 1) {
    child = index * 2 + 1;
    if (child >= q.length) {
      break;
    }

    if (child < q.length - 1 && q[child] > q[child + 1]) {
      child = child + 1;
    }
    if (child === index) {
      break;
    }
    if (q[child] > q[index]) {
      break;
    }
    swap(q, index, child);
    index = child;
  }

  return ret;
}

function maxHeapPop(q) {
  const ret = q[0];

  let index = 0;
  let child;

  q[0] = q[q.length - 1];
  q.pop();

  if (q.length === 0) {
    return ret;
  }

  while (q.length > 1) {
    child = index * 2 + 1;
    if (child >= q.length) {
      break;
    }

    if (child < q.length - 1 && q[child] < q[child + 1]) {
      child = child + 1;
    }
    if (child === index) {
      break;
    }
    if (q[child] < q[index]) {
      break;
    }
    swap(q, index, child);
    index = child;
  }

  return ret;
}

const minHeap = [];
const maxHeap = [];
let res = '';
let temp;

for (let i = 1; i <= +input[0]; i++) {
  const num = +input[i];

  if (maxHeap.length === 0) {
    maxHeap.push(num);
  } else if (minHeap.length === 0) {
    if (maxHeap[0] < num) {
      minHeap.push(num)
    } else {
      temp = maxHeap.pop();
      maxHeap.push(num);
      minHeap.push(temp);
    }
  } else if (maxHeap.length === minHeap.length) {
      if (minHeap[0] > num) {
        maxHeapPush(maxHeap, num);
      } else {
        temp = minHeapPop(minHeap);
        minHeapPush(minHeap, num);
        maxHeapPush(maxHeap, temp);
      }
  } else if (maxHeap.length > minHeap.length) {
      if (maxHeap[0] < num) {
        minHeapPush(minHeap, num);
      } else {
        temp = maxHeapPop(maxHeap);
        maxHeapPush(maxHeap, num);
        minHeapPush(minHeap, temp);
      }
  } else if (maxHeap.length < minHeap.length) {
      if (minheap[0] > num) {
        maxHeapPush(maxHeap, num);
      } else {
        temp = minHeapPop(minHeap);
        minHeapPush(minHeap, num);
        maxHeapPush(maxHeap, temp);
      }
  }
  res += (maxHeap[0] + '\n');
}

console.log(res)
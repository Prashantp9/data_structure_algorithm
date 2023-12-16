// array sorting -------brute force ---------
const arr = [10, 3, 4, 5, 6, 6, 74, 34];
// let n = arr.length - 1;
// let i = 0;
// let j = n;
// const copy = [];
// while (j >= i) {
//   let high = arr.length - 1;
//   for (const i in arr) {
//     if (arr[i] >= arr[high]) {
//       high = i;
//     }
//   }
//   console.log("arr high", arr[high]);
//   // copy.push(arr[high]);
//   copy[n - j] = arr[high];
//   arr[high] = 0;
//   console.log(copy);
//   j--;
// }

// -----------Quick Sort Algorithm ------------//
function swap(arr, a, b) {
  const temp = arr[b];
  arr[b] = arr[a];
  arr[a] = temp;
}
function partition(arr, low, high) {
  let pivot = arr[low];
  let i = low;
  let j = high;
  while (i < j) {
    while (arr[i] <= pivot && i <= high - 1) {
      i++;
    }
    while (arr[j] > pivot && j >= low + 1) {
      j--;
    }
  }
  swap(arr, low, j);
  return j;
}
function qs(arr, low, high) {
  if (low < high) {
    const partitionInd = partition(arr, low, high);
    qs(arr, low, partitionInd - 1);
    qs(arr, partitionInd + 1, high);
  }
}
function QuickSort(Array) {
  qs(arr, 0, Array.length - 1);
  return Array;
}

// bubble sort algorithm=================================
const arrb = [4, 5, 6, 7, 7, 1, 9];

function swap(a, b) {
  let temp = arrb[b];
  arrb[b] = arrb[a];
  arrb[a] = temp;
}

function bubbleSort(arr, n) {
  for (let i = n - 1; i >= 0; i--) {
    for (let j = 0; j <= i - 1; j++) {
      console.log(i);
      if (arr[j] > arr[j + 1]) {
        swap(j + 1, j);
      }
    }
  }
  console.log(arrb);
}

bubbleSort(arrb, arrb.length);

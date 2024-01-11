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
function quicksorttt(arr) {
  function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  function getPartitionIdx(arr, low, high) {
    const pivot = arr[low];
    let i = low;
    let j = high;

    while (i < j) {
      while (arr[i] <= pivot && i <= high) {
        console.log(arr[i]);
        i++;
      }
      while (arr[j] > pivot && j > low) {
        // console.log(arr[j]);
        j--;
      }
      if (i < j) {
        swap(arr, i, j);
      }
    }
    swap(arr, low, j);
    return j;
  }

  function qs(arr, low, high) {
    if (low < high) {
      const partitionIdx = getPartitionIdx(arr, low, high);
      qs(arr, partitionIdx + 1, high);
      qs(arr, low, partitionIdx - 1);
    }
    return arr;
  }

  const n = arr.length;
  // Clone the array to avoid modifying the original array
  const sortedArray = qs(arr, 0, n - 1);
  return sortedArray;
}

console.log("result ===============", quicksorttt([1, 2, 3, 4, 5, 6, 7]));
console.log("result ===============", quicksorttt([7, 6, 5, 4, 3, 2, 1]));
console.log("result ===============", quicksorttt([7, -6, 5, -4, 3, 2, -1]));

// // bubble sort algorithm=================================
// const arrb = [4, 5, 6, 7, 7, 1, 9];

// function swap(a, b) {
//   let temp = arrb[b];
//   arrb[b] = arrb[a];
//   arrb[a] = temp;
// }

// function bubbleSort(arr, n) {
//   for (let i = n - 1; i >= 0; i--) {
//     for (let j = 0; j <= i - 1; j++) {
//       console.log(i);
//       if (arr[j] > arr[j + 1]) {
//         swap(j + 1, j);
//       }
//     }
//   }
//   console.log(arrb);
// }

// bubbleSort(arrb, arrb.length);

// 1 array hashing
// 2 prefix array / postfix array
// 3 next greater element

// advance data structure
// linked list
// binary tree  --- striver /take u forward
// graph  --- striver / take u forward
// hash map --- love bubber
// trie

// inputArray.sort((a, b) => a - b);
// return inputArray[k - 1];

function partition(arr, low, high) {
    let pivot = arr[low];
    let i = low;
  
    for (let j = low + 1; j <= high; j++) {
      if(arr[j] <= pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  
    [arr[i], arr[low]] = [arr[low], arr[i]];
    return i;
  }

  function findKthSmallest(numbers, k) {
    if (!numbers || numbers.length < k) return Number.MIN_SAFE_INTEGER;
    return kthSmallest(numbers, 0, numbers.length - 1, k);
  }
  
  function kthSmallest(arr, start, end, k) {
    if (k > 0 && k <= end - start + 1) {
      let pos = partition(arr, start, end);
      if (pos - start === k - 1) {
        return arr[pos];
      }
      if (pos - start > k - 1) {
        return kthSmallest(arr, start, pos - 1, k);
      }
      return kthSmallest(arr, pos + 1, end, k - pos + start - 1);
    }
    return Number.MAX_SAFE_INTEGER;
  }
  
  console.log(findKthSmallest([1, 7, 2, 4, 2, 1, 6], 5));  // Prints 4


  function mergeAndCount(arr1, arr2) {
    let i = 0;
    let j = 0;
    let merged = [];
    let inversions = 0;
  
    while (i < arr1.length || j < arr2.length) {
      if (i === arr1.length) {
        merged.push(arr2[j]);
        j++;
      } else if (j === arr2.length) {
        merged.push(arr1[i]);
        i++;
      } else if (arr1[i] <= arr2[j]) {
        merged.push(arr1[i]);
        i++;
      } else {
        merged.push(arr2[j]);
        j++;
        inversions += (arr1.length - i);
      }
    }
    return [merged, inversions];
  }

  function countInversions(arr) {
    if (arr.length === 1) return [arr, 0];
  
    const middle = Math.floor(arr.length / 2);
    const [left, leftInversions] = countInversions(arr.slice(0, middle));
    const [right, rightInversions] = countInversions(arr.slice(middle));
    const [merged, mergeInversions] = mergeAndCount(left, right);
  
    return [merged, leftInversions + rightInversions + mergeInversions];
  }
  
  console.log(countInversions([4, 2, 1, 3])); // Prints [ [ 1, 2, 3, 4 ], 4 ]
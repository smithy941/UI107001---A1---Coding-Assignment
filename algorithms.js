/* MERGE SORT ALGORITHM */

function mergeSort(arr)
{
    // BASE CASE: When the array has 0 or 1 items, return, stop recursion
    if (arr.length <= 1)
    {
        return arr;
    }

    // Finds the middle of array. Math.floor rounds down 
    const mid = Math.floor(arr.length / 2);

    // Slice copies part of array. Left = index 0 up to mid (doesnt include mid)
    const left = arr.slice(0, mid);

    // Right = mid to end of array
    const right = arr.slice(mid);

    // Call mergeSort again, keeps splitting left and right until they are split into single integers.
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);

    // Combine into sorted array
    const result = merge(sortedLeft, sortedRight);

    // Returns the sorted result
    return result;
}


function merge(left, right)
{
    // Stores final sorted values
    let result = [];

    // leftIndex tracks position in left array. rightIndex tracks position in right array
    let leftIndex = 0;
    let rightIndex = 0;

    // Keep looping while both arrays have values left
    while (leftIndex < left.length && rightIndex < right.length)
    {
        // Compare current values from each array. left[leftIndex] is current value in left. right[rightIndex] is current value in right. Smaller value gets pushed to result
        if (left[leftIndex] < right[rightIndex])
        {
            // push() adds value to end of result array
            result.push(left[leftIndex]);

            // Move to next item in left array
            leftIndex++;
        }
        else
        {
            result.push(right[rightIndex]);

            // Move to next item in right array
            rightIndex++;
        }
    }

    // If left array still has items left add them to result
    while (leftIndex < left.length)
    {
        result.push(left[leftIndex]);
        leftIndex++;
    }

    // If right array still has items left add them to result
    while (rightIndex < right.length)
    {
        result.push(right[rightIndex]);
        rightIndex++;
    }

    // Return the final merged sorted array
    return result;
}

/* BINARY SEARCH ALGORITHM */


//arr = array to be searched, target = value to find
function binarySearch(arr, target)
{
    // First position in array
    let left = 0;

    // Last position in array (as index sarts at 0)
    let right = arr.length - 1;

    // Keep searching while left <= right
    while (left <= right)
    {
        // Find middle index
        const mid = Math.floor((left + right) / 2);

        // If middle is target return index
        if (arr[mid] === target)
        {
            return mid;
        }

        // If target is smaller search left 
        else if (arr[mid] > target)
        {
            right = mid - 1;
        }

        // If target is bigger search right 
        else
        {
            left = mid + 1;
        }
    }

    // If not found -1 is invalid index 
    return -1;
}

// Export to use in other files
module.exports = { mergeSort, binarySearch };
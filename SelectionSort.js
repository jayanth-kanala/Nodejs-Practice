a = [5, 4, 3, 2, 1]
selectionSort(a)
function selectionSort(arr) {
    for (i = 0; i < arr.length - 1; i++) {
        // Find the minimum element in unsorted array
        min_idx = i;
        for (j = i + 1; j < arr.length; j++)
            if (arr[j] < arr[min_idx])
                min_idx = j;
        // Swap the found minimum element with the first
        // element
        temp = arr[min_idx];
        arr[min_idx] = arr[i];
        arr[i] = temp;
    }
    console.log(arr)
}
// clrs 2.1-1
var numbers = [31, 41, 59, 26, 41, 58]
InsertionSort(numbers)
function InsertionSort(numbers) {
    for (i = 1; i < numbers.length; i++) {
        key = numbers[i]
        j = i
        // numbers[j-1] > key sorts in ascending
        // numbers[j-1] < key sorts in descending
        while (numbers[j - 1] > key && j > 0) {
            numbers[j] = numbers[j - 1]
            j--
        }
        numbers[j] = key
    }
    console.log(numbers)
}
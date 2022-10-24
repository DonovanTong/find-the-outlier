let array = [12,4,5,6,80,24]



function findOutlier(arr) {
    let odds = []
    let evens = []
    for (let i = 0; i<arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evens.push(arr[i])
        } else if (arr[i] % 2 !== 0) {
            odds.push(arr[i])
        }
    }

    if (odds.length > evens.length) {
            return evens
        } else if (evens.length > odds.length) {
            return odds
        } else {
            return "Error. Make sure your array is formatted correctly."
        }
}

console.log(findOutlier(array))
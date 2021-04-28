/*Compression
Write a function that takes a string as an argument and generates an array that sums all the repeating characters.

Test Cases
compress('') // []
compress('abcd') // [[1, 'a'], [1, 'b'], [1, 'c'], [1, 'd']]
compress('aaaaaaaabaaaa') // [[8,'a'], [1,'b'], [4,'a']]
*/

const generateArray = (str) => {
    let strArr = str.split("")
    let response = []

    if (str === "") {
        return []
    }

    strArr.forEach((element, index) => {
        let prev = strArr[index - 1]

        if (index == 0) {
            response.push([1, element])
        } else if (element !== prev) {
            response.push([1, element])
        } else {
            response[response.length - 1][0] += 1
        }
    })

    return response
}

module.exports = generateArray
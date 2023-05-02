// // Write your code below this line
function decodeString(string) {
    let decoder = Number(string[0])
    console.log(decoder)
    let answer = ''
    let cipher = 'abcdefghijklmnopqrstuvwxyz'
    for (let i = 1; i < string.length; i++) {
        let letter = string[i]
        let shift = cipher.search(letter)
        let shifted = decoder + shift
        answer += cipher[shifted]
        console.log(answer)
        if (letter = cipher.length - 1) {
        continue
        }
    }
    return answer
}
decodeString("2fcjjm")


// const letters = 'abcdefghijklmnopqrstuvwxyz'.split('')
// const decodeCypher = (encoded) => {
//     let decoded = ''
//     let encodeArray = encoded.split('')
//     const shifter = +encodeArray.shift()
//     encodeArray.forEach(letter => {
//         let indexShift = letter.findIndex(ele => ele === letter) + shifter
//         if(indexShift > 25){
//             indexShift -= 26
//         }
//         decoded += letters[indexShift]
//     })
//     return decoded
// }
// console.log(decodeCypher(("2fcjjm")))
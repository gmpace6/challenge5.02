// Write your code below this line
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
    }
    return answer
}
decodeString("1asdf")
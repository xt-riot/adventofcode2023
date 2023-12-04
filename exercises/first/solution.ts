import { readFileSync } from 'fs'

const input = readFileSync(`${__dirname}/input.txt`, 'utf8')

const lines = input.split('\n')

const finalSum = lines.reduce((sum, line) => {
    const strOfNumbers = line.split('').filter(letter => {
        const parsed = parseInt(letter, 10)
        return !Number.isNaN(parsed)
    })
    const twoLetterNumber = [strOfNumbers[0], strOfNumbers[strOfNumbers.length -1 ]].join('')
    const number = parseInt(twoLetterNumber, 10)
    return sum + number
}, 0)

console.log('final sum is ', finalSum)
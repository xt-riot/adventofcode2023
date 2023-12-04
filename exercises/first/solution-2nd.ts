import { readFileSync } from 'fs'

const input = readFileSync(`${__dirname}/input.txt`, 'utf8')

const lines = input.split('\n')

const numbersAsLetters = {
    'zero': '0',
    'one': '1',
    'two': '2',
    'three': '3',
    'four': '4',
    'five': '5',
    'six': '6',
    'seven': '7',
    'eight': '8',
    'nine': '9',
    '0': '0',
    '1': '1',
    '2': '2',
    '3': '3',
    '4': '4',
    '5': '5',
    '6': '6',
    '7': '7',
    '8': '8',
    '9': '9'
}

const finalSum = lines.reduce((sum, line) => {
    const firstNumbers: { number: string, pos: number }[] = []
    const lastNumbers: { number: string, pos: number }[] = []
    Object.keys(numbersAsLetters).forEach(number => {
        const firstIndex = line.indexOf(number)
        const lastIndex = line.lastIndexOf(number)
        if (firstIndex !== -1) firstNumbers.push({ number, pos: firstIndex })
        if (lastIndex !== -1) lastNumbers.push({ number, pos: lastIndex })
    })

    firstNumbers.sort((a, b) => {
        if (a!.pos > b!.pos) return 1
        else if (a!.pos < b!.pos) return -1
        return 0
    })

    lastNumbers.sort((a, b) => {
        if (a!.pos < b!.pos) return 1
        else if (a!.pos > b!.pos) return -1
        return 0
    })

    const firstNumber = numbersAsLetters[firstNumbers[0].number as keyof typeof numbersAsLetters]
    const lastNumber = numbersAsLetters[lastNumbers[0].number as keyof typeof numbersAsLetters]
    const number = parseInt(`${firstNumber}${lastNumber}`, 10)
    return sum + number
}, 0)

console.log('final sum is ', finalSum)
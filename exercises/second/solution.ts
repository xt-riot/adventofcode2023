import { readFileSync } from 'fs'

const input = readFileSync(`${__dirname}/input.txt`, 'utf8')

const games = input.split('\n')

const totalCubes = [{
    cubes: 12,
    color: 'red'
}, {
    cubes: 13,
    color: 'green'
}, {
    cubes: 14,
    color: 'blue'
}]

const deconstructedGames = games.map((game, index) => {
    const records = game.split(':')[1].split(';')
    const RGB = records.map(record => {
        return record.split(',').map(colors => {
            const cubesAndColors = colors.split(' ')
            const color = cubesAndColors[2] as 'red' | 'green' | 'blue'
            const parsedCubes = parseInt(cubesAndColors[1], 10)
            const gameCube = totalCubes.find(cube => cube.color === color)
            console.log(color, parsedCubes)
            if (gameCube && parsedCubes > gameCube.cubes) return false
            return true
        })
    }).flat()
    if (RGB.includes(false)) return 0
    return index + 1
}).reduce((sum, currIndex) => sum + currIndex, 0)

console.log('final result is', deconstructedGames)
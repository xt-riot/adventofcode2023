import { readFileSync } from 'fs'

const input = readFileSync(`${__dirname}/input.txt`, 'utf8')

const games = input.split('\n')


const deconstructedGames = games.map((game, index) => {
    const totalCubes = [{
        cubes: 0,
        color: 'red'
    }, {
        cubes: 0,
        color: 'green'
    }, {
        cubes: 0,
        color: 'blue'
    }]
    const records = game.split(':')[1].split(';')
    records.forEach(record => {
        return record.split(',').forEach(colors => {
            const cubesAndColors = colors.split(' ')
            const color = cubesAndColors[2] as 'red' | 'green' | 'blue'
            const parsedCubes = parseInt(cubesAndColors[1], 10)
            const gameCube = totalCubes.find(cube => cube.color === color)
            if (gameCube && parsedCubes > gameCube.cubes) return gameCube.cubes = parsedCubes
            return
        })
    })
    return totalCubes.reduce((sum, cubes) => sum * cubes.cubes, 1)
}).reduce((sum, currIndex) => sum + currIndex, 0)

console.log('final result is', deconstructedGames)
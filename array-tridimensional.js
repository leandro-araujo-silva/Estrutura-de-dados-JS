let month = []

let firstweeks = []
let lastweeks = []

let avgTempWeek1 = [35, 6, 9, 64, 78, 36]
let avgTempWeek2 = [41, 22, 13, 28, 10, 11]

let avgTempWeek3 = [65, 74, 12, 33, 60, 5]
let avgTempWeek4 = [8, 9, 13, 46, 26, 98]

firstweeks = [avgTempWeek1, avgTempWeek2]
lastweeks = [avgTempWeek3, avgTempWeek4]

month = [firstweeks, lastweeks]

// console.log(month[1][1][2])

for(let x = 0; x < month.length; x++) {
  for(let y = 0; y < month[x].length; y++) {
    for(let z = 0; z < month[x][y].length; z++) {
      console.log(month[x][y][z])
    }
  }
}


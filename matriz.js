let avgTempWeek = []

let avgTempWeek1 = [33, 25.2, 19, 17, 23.4, 41, 25]
let avgTempWeek2 = [42, 29, 33, 21.2, 19.5, 17, 38]

avgTempWeek[0] = avgTempWeek1
avgTempWeek[1] = avgTempWeek2

console.log(avgTempWeek[0][4])

for(let i = 0; i < avgTempWeek.length; i++) {
  for(let j = 0; j < avgTempWeek[i].length; j++) {
    console.log(avgTempWeek[i][j])
  }
}
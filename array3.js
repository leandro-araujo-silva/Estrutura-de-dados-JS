var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

numbers[numbers.length] = 10
numbers[numbers.length] = 11

numbers.push(15)
numbers.push(12)

numbers.unshift(-1)

// Retira o último elemento
numbers.pop()

// Retira o primeiro elemento
numbers.shift()

console.log(numbers)
console.log(`Quantidade de elementos do array: ${numbers.length}`)
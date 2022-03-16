/* Características 

* Acesso pelo index
* Respeita a ordem de inserção
* Aceita valores duplicados
* Dependendo do tamanho do Array, para encontrar e/ou deletar um elemento, será necessário um uso maior de perfomance.

* Arrays no JavaScript

* São dinâmicos
* Você poderá ter dados de diferentes tipos misturados dentro de um Array. Strings, numbers, booleans, objetos, funções e até outros arrays.
* Existem muitos métodos já implementados:
* push(), pop(), find(), filter() entre outros

*/

const pilotos = ['Senna', 'Prost', 'Massa', 'Hamilton']

// A indexação (index) começa pelo número 0
console.log(pilotos[0])
console.log(pilotos[3])

// Acessar o tamanho do array
console.log(pilotos.length)

// Iterável
for(let piloto of pilotos) {
  console.log(piloto)
}

// Adicionar elemento
pilotos.push('Alonso')
console.log(pilotos)

// Encontrar um elemento
const senna = pilotos.find(piloto => piloto === 'Senna')
console.log(senna)

// Deletar um elemento
pilotos.splice(1, 1)

console.log(pilotos)
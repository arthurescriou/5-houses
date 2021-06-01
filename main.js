const color = ['vert', 'rouge', 'blanc', 'bleu', 'jaune']
const drink = ['thé', 'eau', 'biere', 'café', 'lait']
const nation = ['suede', 'norvège', 'anglais', 'allemand', 'danois']
const pet = ['chien', 'chat', 'cheval', 'poisson', 'oiseau']
const smoke = ['dunhill', 'rothmans', 'malbo', 'pall', 'winfield']
const pos = [1, 2, 3, 4, 5]

// const pos = color => drink => nation => pet => smoke => color.map

let arr = []

color.forEach((c, i) => {
  drink.forEach((d, i) => {
    nation.forEach((n, i) => {
      pet.forEach((p, i) => {
        smoke.forEach((s, i) => {
          pos.forEach((po, i) => {
            arr.push({ c, d, n, p, s, po })
          })
        })
      })
    })
  })
})

arr = arr
  .filter(
    ({ n, c }) =>
      (c == 'rouge' && n == 'anglais') || (c != 'rouge' && n != 'anglais')
  )
  .filter(
    ({ n, p }) =>
      (p == 'chien' && n == 'suede') || (p != 'chien' && n != 'suede')
  )
  .filter(
    ({ n, d }) => (d == 'thé' && n == 'danois') || (d != 'thé' && n != 'danois')
  )
  .filter(
    ({ po, c }) =>
      (!(c == 'vert' && po == 5) && !(c == 'blanche' && po == 1)) ||
      c == 'rouge' ||
      c == 'bleu' ||
      c == 'jaune'
  )
  .filter(
    ({ d, c }) => (c == 'vert' && d == 'café') || (c != 'vert' && d != 'café')
  )
  .filter(
    ({ s, p }) => (s == 'pal' && p == 'oiseau') || (s != 'pal' && p != 'oiseau')
  )
  .filter(({ d, po }) => (d == 'lait' && po == 3) || (d != 'lait' && po != 3))
  .filter(
    ({ c, s }) =>
      (c == 'lait' && s == 'dunhill') || (c != 'lait' && s != 'dunhill')
  )
  .filter(
    ({ n, po }) => (n == 'norvège' && po == 1) || (n != 'norvège' && po != 1)
  )
  .filter(
    ({ s, d }) =>
      (s == 'winfield' && d == 'biere') || (s != 'winfield' && d != 'biere')
  )
  .filter(({ c, po }) => (c == 'bleu' && po == 2) || (c != 'bleu' && po != 2))
  .filter(
    ({ n, s }) =>
      (n == 'allemand' && s == 'rothmans') ||
      (n != 'allemand' && s != 'rothmans')
  )
  .filter(
    ({ c, po }) =>
      (c == 'jaune' && po == 1) ||
      (c == 'bleu' && po == 2) ||
      (c == 'rouge' && po == 3) ||
      (c == 'vert' && po == 4) ||
      (c == 'blanc' && po == 5)
  )
  .filter(
    ({ s, n }) =>
      (n == 'norvège' && s == 'dunhill') || (n != 'norvège' && s != 'dunhill')
  )
  .filter(
    ({ po, p }) => (p == 'cheval' && po == 2) || (p != 'cheval' && po != 2)
  )
  .filter(
    ({ s, p }) =>
      (s == 'malbo' && p != 'chat') ||
      (s != 'malbo' && p == 'chat') ||
      (s != 'malbo' && p != 'chat')
  )

const un = arr.filter(({ po }) => po === 1)
const deux = arr.filter(({ po }) => po === 2)
const trois = arr.filter(({ po }) => po === 3)
const quatre = arr.filter(({ po }) => po === 4)
const cinq = arr.filter(({ po }) => po === 5)

let guess = []
deux.forEach((d, i) => {
  trois.forEach((t, i) => {
    quatre.forEach((q, i) => {
      cinq.forEach((c, i) => {
        guess.push([d, t, q, c])
      })
    })
  })
})

const isValid = arr =>
  [...new Set(arr.map(({ c }) => c))].length === 4 &&
  [...new Set(arr.map(({ d }) => d))].length === 4 &&
  [...new Set(arr.map(({ p }) => p))].length === 4 &&
  [...new Set(arr.map(({ s }) => s))].length === 4 &&
  [...new Set(arr.map(({ po }) => po))].length === 4 &&
  [...new Set(arr.map(({ n }) => n))].length === 4

guess = guess.filter(isValid)

console.log(guess)
console.log(guess.length)

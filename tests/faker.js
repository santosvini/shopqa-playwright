const { fakerPT_BR } = require('@faker-js/faker')

const fullName = fakerPT_BR.helpers.fake('{{person.firstName}}' + ' {{person.lastName}}')
const email = fakerPT_BR.helpers.fake(`${fullName}@test.com`).replace(/\s+/g, '').toLowerCase()

export const register = {
  username: fullName,
  email: email,
  pass: fakerPT_BR.internet.password({ length: 8 })
}
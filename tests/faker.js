const { fakerPT_BR } = require('@faker-js/faker')

const fullName = fakerPT_BR.helpers.fake('{{person.firstName}}' + ' {{person.lastName}}')
const email = fakerPT_BR.helpers.fake(`${fullName}@test.com`).normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '').toLowerCase()

export const register = {
  username: fullName,
  email: email,
  pass: fakerPT_BR.internet.password({ length: 8 }),
  errorpass: fakerPT_BR.internet.password({ length: 4 })
}
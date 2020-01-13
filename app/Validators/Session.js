'use strict'
const Antl = use('Antl')

class Session {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      cpf: 'required|max:11|min:11',
      password: 'required'
    }
  }

  get messages () {
    return Antl.list('validation')
  }
}

module.exports = Session

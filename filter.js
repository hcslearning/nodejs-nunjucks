function moneda(monto) {
    const numeral = require('numeral')
    const formato = '$0,0.00'
    return numeral( monto ).format( formato )
}

module.exports = moneda

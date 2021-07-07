function cuentaBancaria() {
  return {
    estado: ['Activa'],
    color: '#008f39'
  }
}

function cliente() {
  return {
    estado: 1,
    color: "green"
  }
}

module.exports = {
  cuentaBancaria,
  cliente
}
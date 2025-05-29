const isFieldEmpty = (v) => !!v || 'Campo requerido.'

const esNumerico = (valor) => /^[-+]?\d+(\.\d+)?$/.test(valor)

export { isFieldEmpty, esNumerico }

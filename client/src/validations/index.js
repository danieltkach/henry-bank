
export const validations = {
  email: (dataForm, label) => {
    if (!dataForm.trim()) {
      return `${label} requerido.`
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(dataForm.trim())) {
      return `${label} invalido.`
    } else {
      return '';
    }
  },
  password: (dataForm, label) => {
    if (!dataForm.trim()) {
      return `${label} requerida.`
    } else if (dataForm.length < 8) {
      return `${label} demasiado corta.`
    } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g.test(dataForm.trim())) {
      return `${label} invalida (al menos una letra y número).`
    } else {
      return '';
    }
  }
}

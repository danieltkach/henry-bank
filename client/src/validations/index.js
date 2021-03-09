
export const REGEX = {
  USERNAME: /^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/,
  EMAIL: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  PASSWORD: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
  ZIPCODE: /^([0-9]{4})/,
  DOCUMENT: /^([0-9])*$/,
  NAME: /^([A-Za-z])*$/,
  LASTNAME: /^([A-Za-z])*$/,
  PHONE: /^([0-9])*$/,
  DNI: /^(\d{2}\d{3}\d{3})|(\d{2}\s{1}\d{3}\s\d{3})$/,
  PAS: /^[A-Z0-9<]{9}[0-9]{1}[A-Z]{3}[0-9]{7}[A-Z]{1}[0-9]{7}[A-Z0-9<]{14}[0-9]{2}$/,
  DATE: /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/
}

export const validations = {
  username: (dataForm, label) => {
    if (!dataForm.trim()) {
      return
    } else if (REGEX.USERNAME.test(dataForm.trim())) {

    }
  },
  email: (dataForm, label) => {
    if (!dataForm.trim()) {
      return `${label} requerido.`
    } else if (REGEX.EMAIL.test(dataForm.trim())) {
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
    } else if (PASSWORD.test(dataForm.trim())) {
      return `${label} invalida (al menos una letra y número).`
    } else {
      return '';
    }
  },
  zipCode: (dataForm, label) => {
    if (!dataForm.trim()) {
      return `${label} requerido.`
    } else if (REGEX.ZIPCODE.test(dataForm.trim())) {
      return `${label} invalido.`
    } else {
      return '';
    }
  },
  document: (dataForm, label) => {
    if (!dataForm.trim()) {
      return `${label} requerido.`
    } else if (REGEX.DOCUMENT.test(dataForm.trim())) {
      return `${label} invalido.`
    } else {
      return '';
    }
  },
  name: (dataForm, label) => {
    if (!dataForm.trim()) {
      return `${label} requerido.`
    } else if (REGEX.NAME.test(dataForm.trim())) {
      return `${label} invalido.`
    } else {
      return '';
    }
  },
  lastName: (dataForm, label) => {
    if (!dataForm.trim()) {
      return `${label} requerido.`
    } else if (REGEX.LASTNAME.test(dataForm.trim())) {
      return `${label} invalido.`
    } else {
      return '';
    }
  },
  typeDocument: (dataForm, label) => {
    if (!dataForm.trim()) {
      return `${label} requerido.`
    } else if (REGEX.TYPEDOCUMENT.test(dataForm.trim())) {
      return `${label} invalido.`
    } else {
      return '';
    }
  },
  phone: (dataForm, label) => {
    if (!dataForm.trim()) {
      return `${label} requerido.`
    } else if (REGEX.PHONE.test(dataForm.trim())) {
      return `${label} invalido.`
    } else {
      return '';
    }
  },
}

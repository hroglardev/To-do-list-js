export class Validator {
  static validateTextInputs(inputs) {
    console.log('Estas tipeando')
    if (Array.isArray(inputs)) {
      return inputs.every((input) => input.trim().length > 0)
    } else {
      return inputs.trim().length > 0
    }
  }

  static validateSelectAndDate(formField) {
    console.log('Se valido un select')
    return formField !== ''
  }
}

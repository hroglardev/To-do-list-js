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

  static activateTodoButton(inputs, prioritySelect, projectSelect, datepicker) {
    const submitButton = document.querySelector('.create-todo')
    const isTextValid = Validator.validateTextInputs(inputs)
    const isPriorityValid = Validator.validateSelectAndDate(prioritySelect)
    const isProjectValid = Validator.validateSelectAndDate(projectSelect)
    const isDateValid = Validator.validateSelectAndDate(datepicker)
    if (isTextValid && isPriorityValid && isProjectValid && isDateValid) {
      console.log('entre al if')
      submitButton.removeAttribute('disabled')
    } else {
      console.log('entre al else')
      submitButton.setAttribute('disabled', true)
    }
  }

  static activateProjectButton(input) {
    const submitButton = document.querySelector('.create-project')
    const isValid = Validator.validateTextInputs(input)
    if (isValid) {
      submitButton.removeAttribute('disabled')
    } else {
      submitButton.setAttribute('disabled', true)
    }
  }
}

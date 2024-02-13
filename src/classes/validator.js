export class Validator {
  static validateInputs(inputs) {
    return inputs.every((input) => input.trim().length > 0)
  }
}

export class MyValidator extends Validator {
  static validateMyInput(input, inputs) {
    // logic to validate the input apart from length
  }
}

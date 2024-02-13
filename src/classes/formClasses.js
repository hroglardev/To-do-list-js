import { DomElement, InputElement, LabelElement, TextElement } from './DomElements'
import { Validator } from './validator'

class FormElement extends DomElement {
  constructor(tag, className, id, ...inputs) {
    super(tag, className, id)
    this.element.setAttribute('novalidate', true)
    this.element.addEventListener('input', () => Validator.validateInputs(inputs))
    this.element.addEventListener('submit', (event) => this.submitForm(event))
  }

  submitForm(event) {
    event.preventDefault()
  }
}

export class TodoForm extends FormElement {
  constructor(tag, className, id, inputs) {
    super(tag, className, id, inputs)
  }

  submitForm(event) {
    super.submitForm(event)
  }
}

export class FormSection {
  constructor(text) {
    this.input = new InputElement('input', 'input', '')
    this.label = new LabelElement('label', 'label', '', text)
    this.error = new TextElement('p', 'error-paragraph', '', '')
  }
}

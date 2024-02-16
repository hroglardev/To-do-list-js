import { DomElement, InputElement, LabelElement, TextElement, FormElement, DateInputElement } from './domBasicElements'
import { AppManager } from '../services/appManager'
import { Validator } from '../services/validator'

export class TodoForm extends FormElement {
  constructor(tag, className, id) {
    super(tag, className, id)
  }

  submitForm(event, todoTitle, todoDescription, toDoPriority, todoProjectName, todoDueDate) {
    event.preventDefault()
    this.element.reset()
    const toDo = AppManager.addTodoAndUpdateList(todoTitle, todoDescription, toDoPriority, todoProjectName, todoDueDate)
    return toDo
  }
}

export class ProjectForm extends FormElement {
  constructor(tag, className, id, ...inputs) {
    super(tag, className, id, ...inputs)
  }
  submitForm(event, projectTitle) {
    event.preventDefault()
    this.element.reset()
    const project = AppManager.addProjectAndUpdateList(projectTitle)

    return project
  }
}

export class FormSection {
  constructor(text, type, className) {
    this.container = new DomElement('div', 'form-section', '')
    this.input = new InputElement('input', className, '', type)
    this.label = new LabelElement('label', '', text)
    this.error = new TextElement('p', 'error-paragraph', '', '')

    this.appendSelf()
  }

  appendSelf() {
    this.container.appendChildren(this.label.element, this.input.element, this.error.element)
  }
}

export class TextFormSection extends FormSection {
  constructor(text, className) {
    super(text, 'text', className)
    if (className !== 'edit-todo') {
      this.validateInput = this.validateInput.bind(this)
      console.log(className, 'ACAAA')
      this.input.element.addEventListener('input', this.validateInput)
    }
  }

  validateInput() {
    const isValid = Validator.validateTextInputs(this.input.element.value)

    if (!isValid) {
      this.input.addClass('is-invalid')
      this.error.addClass('has-error')
      this.error.element.innerText = 'Must complete the field'
    } else {
      this.input.removeClass('is-invalid')
      this.error.removeClass('has-error')
      this.error.element.innerText = ''
    }
  }
}

export class SelectFormSection {
  constructor(text) {
    this.container = new DomElement('div', 'form-section', '')
    this.select = new DomElement('select', 'select', '')
    this.label = new LabelElement('label', '', text)
    this.error = new TextElement('p', 'error-paragraph', '', '')

    this.validateSelect = this.validateSelect.bind(this)
    this.select.element.addEventListener('change', this.validateSelect)
    this.appendSelf()
  }

  appendSelf() {
    this.container.appendChildren(this.label.element, this.select.element, this.error.element)
  }

  setOptions(options) {
    this.options = options
    this.updateOptions()
  }

  updateOptions() {
    this.select.element.innerHTML = ''

    this.options.forEach((option) => {
      const optionElement = document.createElement('option')
      optionElement.value = option
      optionElement.innerText = option
      this.select.appendChildren(optionElement)
    })
  }
  validateSelect() {
    const isValid = Validator.validateSelectAndDate(this.select.element.value)
    if (!isValid) {
      this.select.addClass('is-invalid')
      this.error.element.innerText = 'Must complete the field'
      this.error.addClass('has-error')
    } else {
      this.select.removeClass('is-invalid')
      this.error.element.innerText = ''
      this.error.removeClass('has-error')
    }
  }
}

export class DateFormSection {
  constructor(text) {
    this.container = new DomElement('div', 'form-section', '')
    this.date = new DateInputElement('datepicker', '')
    this.label = new LabelElement('label', '', text)
    this.error = new TextElement('p', 'error-paragraph', '', '')
    this.validateDate = this.validateDate.bind(this)
    this.date.element.addEventListener('change', this.validateDate)
    this.appendSelf()
  }

  appendSelf() {
    this.container.appendChildren(this.label.element, this.date.element)
  }

  validateDate() {
    const isValid = Validator.validateSelectAndDate(this.date.element.value)
    if (!isValid) {
      this.date.addClass('is-invalid')
      this.error.element.innerText = 'Must complete the field'
      this.error.addClass('has-error')
    } else {
      this.date.removeClass('is-invalid')
      this.date.element.innerText = ''
      this.error.removeClass('has-error')
    }
  }
}

import { DomElement, InputElement, LabelElement, TextElement, FormElement, DateInputElement } from './domBasicElements'
import { DataManager } from './appClasses'

export class TodoForm extends FormElement {
  constructor(tag, className, id, ...inputs) {
    super(tag, className, id, ...inputs)
  }

  submitForm(event, todoTitle, todoDescription, toDoPriority, todoProjectName, todoDueDate) {
    event.preventDefault()
    console.log(DataManager.appList.getList())
    this.element.reset()
    const toDo = DataManager.addTodoAndUpdateList(todoTitle, todoDescription, toDoPriority, todoProjectName, todoDueDate)
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
    const project = DataManager.addProjectAndUpdateList(projectTitle)

    return project
  }
}

export class FormSection {
  constructor(text, type) {
    this.container = new DomElement('div', 'form-section', '')
    this.input = new InputElement('input', 'input', '', type)
    this.label = new LabelElement('label', '', text)
    this.error = new TextElement('p', 'error-paragraph', '', '')
    this.appendSelf()
  }

  appendSelf() {
    this.container.appendChildren(this.label.element, this.input.element, this.error.element)
  }
}

export class TextFormSection extends FormSection {
  constructor(text) {
    super(text, 'text')
  }
}

export class SelectFormSection {
  constructor(text) {
    this.container = new DomElement('div', 'form-section', '')
    this.select = new DomElement('select', 'select', '')
    this.label = new LabelElement('label', '', text)
    this.appendSelf()
  }

  appendSelf() {
    this.container.appendChildren(this.label.element, this.select.element)
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
}

export class DateFormSection {
  constructor(text) {
    this.container = new DomElement('div', 'form-section', '')
    this.date = new DateInputElement('datepicker', '')
    this.label = new LabelElement('label', '', text)
    this.appendSelf()
  }

  appendSelf() {
    this.container.appendChildren(this.label.element, this.date.element)
  }
}

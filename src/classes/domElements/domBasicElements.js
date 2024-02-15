export class DomElement {
  constructor(tag, className, id) {
    this.element = document.createElement(tag)
    this.element.classList.add(className)
    this.element.id = id
  }

  appendChildren(...children) {
    children.forEach((child) => this.element.appendChild(child))
  }

  addClass(newClass) {
    this.element.classList.add(newClass)
  }

  removeClass(oldClass) {
    this.element.classList.remove(oldClass)
  }
}

export class ImageElement extends DomElement {
  constructor(tag, className, id, src, alt) {
    super(tag, className, id)
    this.element.src = src
    this.element.alt = alt
  }
}

export class TextElement extends DomElement {
  constructor(tag, className, id, text) {
    super(tag, className, id)
    this.element.innerText = text
  }

  setText(newText) {
    this.element.innerText = newText
  }
}

export class LabelElement extends TextElement {
  constructor(className, id, text, forAttribute) {
    super('label', className, id, text)
    this.element.setAttribute('for', forAttribute)
  }
}

export class ButtonElement extends DomElement {
  constructor(tag, className, id, text) {
    super(tag, className, id)
    this.element.innerText = text
  }
}

export class InputElement extends DomElement {
  constructor(tag, className, id, type) {
    super(tag, className, id)
    this.element.type = type
  }
}

export class TextInputElement extends InputElement {
  constructor(className, id) {
    super('input', className, id, 'text')
  }
}

export class DateInputElement extends InputElement {
  constructor(className, id) {
    super('input', className, id, 'date')
  }
}

export class FormElement extends DomElement {
  constructor(tag, className, id) {
    super(tag, className, id)
    this.element.setAttribute('novalidate', true)
  }

  submitForm(event) {
    event.preventDefault()
  }
}

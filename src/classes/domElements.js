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

export class RadioInputElement extends InputElement {
  constructor(className, id) {
    super('input', className, id, 'radio')
  }
}

export class LabelElement extends TextElement {
  constructor(tag, className, id, text, forAttribute) {
    super(tag, className, id, text)
    this.element.setAttribute('for', forAttribute)
  }
}

export class ToDoDomElement {
  constructor(project, title, description, priority, index, todo) {
    this.title = new TextElement('h2', 'card-title', '', title)
    this.description = new TextElement('p', 'card-desc', '', description)
    this.priority = priority
    this.index = index
    this.removeButton = new ButtonElement('button', 'delete-todo', '', 'Remove')
    this.checkButton = new ButtonElement('button', 'complete-todo', '', 'Set-complete')
  }
}

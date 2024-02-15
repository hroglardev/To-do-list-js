import { DomElement, TextElement, ButtonElement } from './domBasicElements'
import { AppManager } from './appManager'
import { TextFormSection, SelectFormSection, TodoForm, DateFormSection } from './formElements'
import { priorityOptions } from './constants'
import { StorageManager } from './storageManager'
import { ToDoFormRenderer } from './renderer'

export class ToDoDomElement {
  constructor(title, description, priority) {
    this.card = new DomElement('article', `card`, '')
    this.title = new TextElement('h3', 'card-title', '', title)
    this.description = new TextElement('p', 'card-desc', '', description)
    this.removeButton = new ButtonElement('button', 'delete-todo', '', 'Remove')
    this.checkButton = new ButtonElement('button', 'complete-todo', '', 'Complete Task')
    this.card.addClass(`priority-${priority}`)
    this.appendSelf()
  }

  appendSelf() {
    this.card.appendChildren(this.title.element, this.description.element, this.removeButton.element, this.checkButton.element)
  }

  addRemoveListener(projectIndex, todoNode) {
    this.removeButton.element.addEventListener('click', () => {
      AppManager.removeTodoAndUpdateList(projectIndex, todoNode)
      this.card.element.remove()
    })
  }

  addToggleListener(todoNode) {
    this.checkButton.element.addEventListener('click', () => {
      const isComplete = todoNode.toggleIsComplete()

      if (!isComplete) {
        console.log('entre al if')
        this.card.element.classList.add('not-complete')
        this.card.element.classList.remove('complete')
        this.checkButton.element.innerText = 'Complete task'
      } else {
        console.log('entre al else')
        this.card.element.classList.add('complete')
        this.card.element.classList.remove('not-complete')
        this.checkButton.element.innerText = 'Incomplete task'
      }
    })
  }
}

export class ProjectDomElement {
  constructor(title, projectIndex) {
    this.container = new DomElement('div', 'project-container', `project-${projectIndex}`)
    this.title = new TextElement('h2', 'project-title', '', title)
    this.removeButton = new ButtonElement('button', 'remove-project', '', 'Delete Project')
    this.titleContainer = new DomElement('div', 'project-title-container', '')
    this.projectBox = new DomElement('div', 'project-body', `project-body-${projectIndex}`)

    this.appendSelf()
  }

  addRemoveListener() {
    this.removeButton.element.addEventListener('click', () => {
      const listNode = AppManager.appList
      const list = listNode.getList()
      const projectNode = listNode.getNodeByName(this.title.element.textContent)
      const projectIndex = listNode.getNodeIndex(projectNode)

      this.container.element.remove()
      AppManager.removeProjectAndUpdateList(projectNode)
      if (projectIndex === 0 && list.length === 0) {
        StorageManager.clearStorage()
      }
      ToDoFormRenderer.render()
    })
  }

  appendSelf() {
    const mainContent = document.querySelector('#content')
    mainContent.appendChild(this.container.element)
    this.container.appendChildren(this.titleContainer.element, this.projectBox.element)
    this.titleContainer.appendChildren(this.title.element, this.removeButton.element)
  }
}

export class TodoFormDomElement {
  constructor(projects) {
    this.container = new DomElement('div', 'section-container', '')
    this.titleSection = new TextFormSection('Name your task:')
    this.descriptionSection = new TextFormSection('Describe the task:')
    this.prioritySection = new SelectFormSection("What's the priority")
    this.projectSection = new SelectFormSection('Select project to add to-do')
    this.dateSection = new DateFormSection('Pick a due date:')
    this.submitButton = new ButtonElement('button', 'create-todo', '', 'Create')
    this.form = new TodoForm('form', 'todo-form', '')

    this.form.element.addEventListener('input', () => {
      this.form.activateButton(
        [this.titleSection.input.element.value, this.descriptionSection.input.element.value],
        this.prioritySection.select.element.value,
        this.projectSection.select.element.value,
        this.dateSection.date.element.value
      )
    })
    this.submitButton.element.setAttribute('disabled', true)
    this.prioritySection.setOptions(priorityOptions)
    this.projectSection.setOptions(projects)
    this.appendSelf()
  }

  appendSelf() {
    const aside = document.querySelector('#aside')
    this.form.appendChildren(this.container.element, this.submitButton.element)
    this.container.appendChildren(
      this.titleSection.container.element,
      this.descriptionSection.container.element,
      this.prioritySection.container.element,
      this.projectSection.container.element,
      this.dateSection.container.element
    )
    aside.appendChild(this.form.element)
  }

  addSubmitListener() {
    this.form.element.addEventListener('submit', (event) => {
      this.submitButton.element.setAttribute('disabled', true)
      const listNode = AppManager.appList
      const projectNode = listNode.getNodeByName(this.projectSection.select.element.value)
      const projectIndex = listNode.getNodeIndex(projectNode)
      const projectContainer = document.querySelector(`#project-body-${projectIndex}`)
      const newTodo = new ToDoDomElement(this.titleSection.input.element.value, this.descriptionSection.input.element.value)
      const todoNode = this.form.submitForm(
        event,
        this.titleSection.input.element.value,
        this.descriptionSection.input.element.value,
        this.prioritySection.select.element.value,
        this.projectSection.select.element.value,
        this.dateSection.date.element.value
      )
      projectContainer.appendChild(newTodo.card.element)
      newTodo.addRemoveListener(projectIndex, todoNode)
      newTodo.addToggleListener(todoNode)
    })
  }
}

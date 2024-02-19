import { DomElement, TextElement, ButtonElement, FormElement } from './domBasicElements'
import { AppManager } from '../services/appManager'
import { TextFormSection, SelectFormSection, TodoForm, DateFormSection } from './formElements'
import { priorityOptions, crossIcon, checkIcon } from '../constants'
import { StorageManager } from '../services/storageManager'
import { ToDoFormRenderer, ListRenderer } from '../services/renderer'
import { Validator } from '../services/validator'
import '../styles/editTodo.css'

export class ToDoDomElement {
  constructor(title, description, priority, dueDate, projectIndex, isComplete = false, todoNode) {
    this.card = new DomElement('article', `card`, `todo-${projectIndex}-${title.replace(/\s/g, '-')}`)
    this.removeButton = new ButtonElement('button', 'delete-todo', '', 'X')
    this.title = new TextElement('h3', 'card-title', '', title)
    this.dueDate = new TextElement('p', 'due-date', '', dueDate)
    this.description = new TextElement('p', 'card-desc', '', description)

    this.buttonContainer = new DomElement('div', 'button-container', '')
    this.checkButton = new ButtonElement('button', 'complete-todo', '', '')
    this.editButton = new ButtonElement('button', 'edit', '', 'Edit')
    this.isComplete = isComplete
    this.projectIndex = projectIndex
    this.todoNode = todoNode
    this.titleContainer = new DomElement('div', 'todo-title-container', '')
    this.card.addClass(`priority-${priority}`)
    this.removeButton.addClass(`priority-${priority}`)

    this.triggerEdit = this.triggerEdit.bind(this)
    this.editButton.element.addEventListener('click', this.triggerEdit)
    this.setHover()
    this.setInitialIcon()
    this.appendSelf()
  }

  appendSelf() {
    this.card.appendChildren(this.titleContainer.element, this.dueDate.element, this.description.element, this.buttonContainer.element)
    this.titleContainer.appendChildren(this.title.element, this.removeButton.element)
    this.buttonContainer.appendChildren(this.checkButton.element, this.editButton.element)
  }

  setInitialIcon() {
    if (!this.isComplete) {
      this.checkButton.element.innerHTML = crossIcon
    } else {
      this.checkButton.element.innerHTML = checkIcon
    }
  }

  triggerEdit() {
    const editForm = new EditTodoForm(this.todoNode, this.projectIndex)
    editForm.prioritySection.setOptions(priorityOptions)
  }

  setHover() {
    this.card.element.addEventListener('mouseover', () => {
      this.description.addClass('show')
    })
    this.card.element.addEventListener('mouseout', () => {
      this.description.removeClass('show')
    })
  }

  addRemoveListener(projectIndex, todoNode) {
    this.removeButton.element.addEventListener('click', () => {
      AppManager.removeTodoAndUpdateList(projectIndex, todoNode)
      this.card.element.remove()
    })
  }

  addToggleListener(todoNode, projectIndex) {
    this.checkButton.element.addEventListener('click', () => {
      const isComplete = todoNode.toggleIsComplete(projectIndex)

      if (!isComplete) {
        this.card.element.classList.add('not-complete')
        this.card.element.classList.remove('complete')
        this.checkButton.element.innerHTML = crossIcon
      } else {
        this.card.element.classList.add('complete')
        this.card.element.classList.remove('not-complete')
        this.checkButton.element.innerHTML = checkIcon
      }
    })
  }
}

export class ProjectDomElement {
  constructor(title, projectIndex) {
    this.container = new DomElement('div', 'project-container', `project-${projectIndex}`)
    this.title = new TextElement('h2', 'project-title', '', title)
    this.removeButton = new ButtonElement('button', 'remove-project', '', 'X')
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
    this.titleSection = new TextFormSection('Name your task:', 'todo-input')
    this.descriptionSection = new TextFormSection('Describe the task:', 'todo-input')
    this.prioritySection = new SelectFormSection("What's the priority:")
    this.projectSection = new SelectFormSection('Select project:')
    this.dateSection = new DateFormSection('Pick a due date:')
    this.submitButton = new ButtonElement('button', 'create-todo', '', 'Create')
    this.form = new TodoForm('form', 'todo-form', '')

    this.form.element.addEventListener('input', () => {
      Validator.activateTodoButton(
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

      const todoNode = this.form.submitForm(
        event,
        this.titleSection.input.element.value,
        this.descriptionSection.input.element.value,
        this.prioritySection.select.element.value,
        this.projectSection.select.element.value,
        this.dateSection.date.element.value
      )
      const newTodo = new ToDoDomElement(
        this.titleSection.input.element.value,
        this.descriptionSection.input.element.value,
        this.prioritySection.select.element.value,
        this.dateSection.date.element.value,
        projectIndex,
        false,
        todoNode
      )
      projectContainer.appendChild(newTodo.card.element)
      newTodo.addRemoveListener(projectIndex, todoNode)
      newTodo.addToggleListener(todoNode, projectIndex)
      ListRenderer.render()
    })
  }
}

class EditTodoForm {
  constructor(todoNode, projectIndex) {
    this.form = new FormElement('form', 'edit-form', '')
    this.closeButton = new ButtonElement('button', 'close-edit', '', 'X')
    this.titleSection = new TextFormSection('New title:', 'edit-todo')
    this.descriptionSection = new TextFormSection('New description:', 'edit-todo')
    this.prioritySection = new SelectFormSection('New priority:')
    this.dueDateSection = new DateFormSection('New date:')
    this.submitButton = new ButtonElement('button', 'edit-todo-button', '', 'Submit')
    this.todoNode = todoNode
    this.projectIndex = projectIndex

    this.submitForm = this.submitForm.bind(this)

    this.form.element.addEventListener('submit', (event) => this.submitForm(event))
    this.appendSelf()
  }

  closeForm() {
    const container = document.querySelector('.container')
    this.form.element.remove()
    container.classList.remove('blur')
  }

  submitForm(event) {
    event.preventDefault()
    const editForm = this.form.element
    const container = document.querySelector('.container')
    AppManager.updateTodoAndUpdateList(
      this.projectIndex,
      this.todoNode,
      this.titleSection.input.element.value,
      this.descriptionSection.input.element.value,
      this.prioritySection.select.element.value,
      this.dueDateSection.date.element.value
    )
    container.classList.remove('blur')
    editForm.remove()
    ListRenderer.render()
  }

  appendSelf() {
    const body = document.querySelector('body')
    const container = document.querySelector('.container')
    body.appendChild(this.form.element)
    container.classList.add('blur')
    this.form.appendChildren(
      this.closeButton.element,
      this.titleSection.container.element,
      this.descriptionSection.container.element,
      this.prioritySection.container.element,
      this.dueDateSection.container.element,
      this.submitButton.element
    )
  }
}

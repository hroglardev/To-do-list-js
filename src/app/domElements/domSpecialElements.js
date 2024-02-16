import { DomElement, TextElement, ButtonElement, FormElement } from './domBasicElements'
import { AppManager } from '../services/appManager'
import { TextFormSection, SelectFormSection, TodoForm, DateFormSection } from './formElements'
import { priorityOptions } from '../constants'
import { StorageManager } from '../services/storageManager'
import { ToDoFormRenderer, TodoRenderer, ProjectRenderer, ListRenderer } from '../services/renderer'
import { Validator } from '../services/validator'

import '../styles/editTodo.css'
//EDITAR BOTON DE EDIT, agregar sorters
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
      this.checkButton.element.innerHTML = `<svg class="check-icon cross" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="25px" height="25px" viewBox="0 0 122.879 122.879" enable-background="new 0 0 122.879 122.879" xml:space="preserve"><g><path fill-rule="evenodd" clip-rule="evenodd" fill="#FF4141" d="M61.44,0c33.933,0,61.439,27.507,61.439,61.439 s-27.506,61.439-61.439,61.439C27.507,122.879,0,95.372,0,61.439S27.507,0,61.44,0L61.44,0z M73.451,39.151 c2.75-2.793,7.221-2.805,9.986-0.027c2.764,2.776,2.775,7.292,0.027,10.083L71.4,61.445l12.076,12.249 c2.729,2.77,2.689,7.257-0.08,10.022c-2.773,2.765-7.23,2.758-9.955-0.013L61.446,71.54L49.428,83.728 c-2.75,2.793-7.22,2.805-9.986,0.027c-2.763-2.776-2.776-7.293-0.027-10.084L51.48,61.434L39.403,49.185 c-2.728-2.769-2.689-7.256,0.082-10.022c2.772-2.765,7.229-2.758,9.953,0.013l11.997,12.165L73.451,39.151L73.451,39.151z"/></g></svg>`
    } else {
      this.checkButton.element.innerHTML = `<svg class="check-icon check" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="25px" height="25px" viewBox="0 0 122.881 122.88" enable-background="new 0 0 122.881 122.88" xml:space="preserve"><g><path fill-rule="evenodd" clip-rule="evenodd" d="M61.44,0c33.933,0,61.441,27.507,61.441,61.439 c0,33.933-27.508,61.44-61.441,61.44C27.508,122.88,0,95.372,0,61.439C0,27.507,27.508,0,61.44,0L61.44,0z M34.106,67.678 l-0.015-0.014c-0.785-0.718-1.207-1.685-1.256-2.669c-0.049-0.982,0.275-1.985,0.984-2.777c0.01-0.011,0.019-0.021,0.029-0.031 c0.717-0.784,1.684-1.207,2.668-1.256c0.989-0.049,1.998,0.28,2.792,0.998l12.956,11.748l31.089-32.559v0 c0.74-0.776,1.723-1.18,2.719-1.204c0.992-0.025,1.994,0.329,2.771,1.067v0.001c0.777,0.739,1.18,1.724,1.205,2.718 c0.025,0.993-0.33,1.997-1.068,2.773L55.279,81.769c-0.023,0.024-0.048,0.047-0.073,0.067c-0.715,0.715-1.649,1.095-2.598,1.13 c-0.974,0.037-1.963-0.293-2.744-1L34.118,67.688L34.106,67.678L34.106,67.678L34.106,67.678z"/></g></svg>`
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
        this.checkButton.element.innerHTML = `<svg class="check-icon cross" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="25px" height="25px" viewBox="0 0 122.879 122.879" enable-background="new 0 0 122.879 122.879" xml:space="preserve"><g><path fill-rule="evenodd" clip-rule="evenodd" fill="#FF4141" d="M61.44,0c33.933,0,61.439,27.507,61.439,61.439 s-27.506,61.439-61.439,61.439C27.507,122.879,0,95.372,0,61.439S27.507,0,61.44,0L61.44,0z M73.451,39.151 c2.75-2.793,7.221-2.805,9.986-0.027c2.764,2.776,2.775,7.292,0.027,10.083L71.4,61.445l12.076,12.249 c2.729,2.77,2.689,7.257-0.08,10.022c-2.773,2.765-7.23,2.758-9.955-0.013L61.446,71.54L49.428,83.728 c-2.75,2.793-7.22,2.805-9.986,0.027c-2.763-2.776-2.776-7.293-0.027-10.084L51.48,61.434L39.403,49.185 c-2.728-2.769-2.689-7.256,0.082-10.022c2.772-2.765,7.229-2.758,9.953,0.013l11.997,12.165L73.451,39.151L73.451,39.151z"/></g></svg>`
      } else {
        this.card.element.classList.add('complete')
        this.card.element.classList.remove('not-complete')
        this.checkButton.element.innerHTML = `<svg class="check-icon check" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="25px" height="25px" viewBox="0 0 122.881 122.88" enable-background="new 0 0 122.881 122.88" xml:space="preserve"><g><path fill-rule="evenodd" clip-rule="evenodd" d="M61.44,0c33.933,0,61.441,27.507,61.441,61.439 c0,33.933-27.508,61.44-61.441,61.44C27.508,122.88,0,95.372,0,61.439C0,27.507,27.508,0,61.44,0L61.44,0z M34.106,67.678 l-0.015-0.014c-0.785-0.718-1.207-1.685-1.256-2.669c-0.049-0.982,0.275-1.985,0.984-2.777c0.01-0.011,0.019-0.021,0.029-0.031 c0.717-0.784,1.684-1.207,2.668-1.256c0.989-0.049,1.998,0.28,2.792,0.998l12.956,11.748l31.089-32.559v0 c0.74-0.776,1.723-1.18,2.719-1.204c0.992-0.025,1.994,0.329,2.771,1.067v0.001c0.777,0.739,1.18,1.724,1.205,2.718 c0.025,0.993-0.33,1.997-1.068,2.773L55.279,81.769c-0.023,0.024-0.048,0.047-0.073,0.067c-0.715,0.715-1.649,1.095-2.598,1.13 c-0.974,0.037-1.963-0.293-2.744-1L34.118,67.688L34.106,67.678L34.106,67.678L34.106,67.678z"/></g></svg>`
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

/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/styles/aside.css":
/*!**********************************!*\
  !*** ./src/app/styles/aside.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/app/styles/editTodo.css":
/*!*************************************!*\
  !*** ./src/app/styles/editTodo.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/app/styles/header.css":
/*!***********************************!*\
  !*** ./src/app/styles/header.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/app/styles/main.css":
/*!*********************************!*\
  !*** ./src/app/styles/main.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/app/appLogic/appClasses.js":
/*!****************************************!*\
  !*** ./src/app/appLogic/appClasses.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   List: () => (/* binding */ List),
/* harmony export */   Project: () => (/* binding */ Project),
/* harmony export */   ToDo: () => (/* binding */ ToDo)
/* harmony export */ });
/* harmony import */ var _services_appManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/appManager */ "./src/app/services/appManager.js");
/* harmony import */ var _services_storageManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/storageManager */ "./src/app/services/storageManager.js");



class List {
  #list
  constructor() {
    this.#list = []
  }

  getList() {
    return this.#list
  }

  addItem(item) {
    this.#list.push(item)
  }

  getItem(index) {
    return this.#list[index]
  }

  removeItem(index) {
    this.#list.splice(index, 1)
  }

  getNodeIndex(node) {
    return this.#list.indexOf(node)
  }

  getNodeByName(name) {
    return this.#list.find((node) => node.title === name)
  }
}

class Project extends List {
  #projects
  constructor(title) {
    super()
    this.title = title
    this.#projects = []
  }

  getList() {
    return this.#projects
  }

  addItem(toDo) {
    this.#projects.push(toDo)
  }

  removeItem(index) {
    this.#projects.splice(index, 1)
  }

  getTitle() {
    return this.title
  }

  getItem(index) {
    return this.#projects[index]
  }

  getNodeIndex(node) {
    return this.#projects.indexOf(node)
  }

  sortListHightoLow() {
    this.#projects.sort((a, b) => b.priority - a.priority)
  }

  sortListLowtoHigh() {
    this.#projects.sort((a, b) => a.priority - b.priority)
  }

  sortByDueDate() {
    this.#projects.sort((a, b) => a.dueDate - b.dueDate)
  }
}

class ToDo {
  constructor(title, description, priority, isComplete = false, dueDate) {
    this.title = title
    this.description = description
    this.priority = priority
    this.isComplete = isComplete
    this.dueDate = dueDate
  }

  setDueDate(date) {
    if (date) {
      const currentDate = new Date(date).toISOString().slice(0, 10)
      this.dueDate = currentDate
    } else {
      this.dueDate = null
    }
  }

  updateToDo(newTitle, newDescription, newPriority, newDueDate) {
    if (newTitle !== '') {
      this.title = newTitle
    }

    if (newDescription !== '') {
      this.description = newDescription
    }

    if (newPriority !== '') {
      this.priority = newPriority
    }

    if (newDueDate !== '') {
      this.setDueDate(newDueDate)
    }
  }

  toggleIsComplete(projectIndex) {
    this.isComplete = !this.isComplete
    const listNode = _services_appManager__WEBPACK_IMPORTED_MODULE_0__.AppManager.appList
    const list = listNode.getList()
    _services_storageManager__WEBPACK_IMPORTED_MODULE_1__.StorageManager.saveItem('list', list)
    const project = listNode.getItem(projectIndex)
    _services_storageManager__WEBPACK_IMPORTED_MODULE_1__.StorageManager.saveItem(project.title, project.getList())
    return this.isComplete
  }
}


/***/ }),

/***/ "./src/app/constants.js":
/*!******************************!*\
  !*** ./src/app/constants.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   priorityOptions: () => (/* binding */ priorityOptions)
/* harmony export */ });
const priorityOptions = [1, 2, 3, 4, 5]


/***/ }),

/***/ "./src/app/domElements/domBasicElements.js":
/*!*************************************************!*\
  !*** ./src/app/domElements/domBasicElements.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ButtonElement: () => (/* binding */ ButtonElement),
/* harmony export */   DateInputElement: () => (/* binding */ DateInputElement),
/* harmony export */   DomElement: () => (/* binding */ DomElement),
/* harmony export */   FormElement: () => (/* binding */ FormElement),
/* harmony export */   ImageElement: () => (/* binding */ ImageElement),
/* harmony export */   InputElement: () => (/* binding */ InputElement),
/* harmony export */   LabelElement: () => (/* binding */ LabelElement),
/* harmony export */   TextElement: () => (/* binding */ TextElement),
/* harmony export */   TextInputElement: () => (/* binding */ TextInputElement)
/* harmony export */ });
class DomElement {
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

class ImageElement extends DomElement {
  constructor(tag, className, id, src, alt) {
    super(tag, className, id)
    this.element.src = src
    this.element.alt = alt
  }
}

class TextElement extends DomElement {
  constructor(tag, className, id, text) {
    super(tag, className, id)
    this.element.innerText = text
  }

  setText(newText) {
    this.element.innerText = newText
  }
}

class LabelElement extends TextElement {
  constructor(className, id, text, forAttribute) {
    super('label', className, id, text)
    this.element.setAttribute('for', forAttribute)
  }
}

class ButtonElement extends DomElement {
  constructor(tag, className, id, text) {
    super(tag, className, id)
    this.element.innerText = text
  }
}

class InputElement extends DomElement {
  constructor(tag, className, id, type) {
    super(tag, className, id)
    this.element.type = type
  }
}

class TextInputElement extends InputElement {
  constructor(className, id) {
    super('input', className, id, 'text')
  }
}

class DateInputElement extends InputElement {
  constructor(className, id) {
    super('input', className, id, 'date')
    this.element.min = new Date().toISOString().split('T')[0]
  }
}

class FormElement extends DomElement {
  constructor(tag, className, id) {
    super(tag, className, id)
    this.element.setAttribute('novalidate', true)
  }

  submitForm(event) {
    event.preventDefault()
  }
}


/***/ }),

/***/ "./src/app/domElements/domSpecialElements.js":
/*!***************************************************!*\
  !*** ./src/app/domElements/domSpecialElements.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectDomElement: () => (/* binding */ ProjectDomElement),
/* harmony export */   ToDoDomElement: () => (/* binding */ ToDoDomElement),
/* harmony export */   TodoFormDomElement: () => (/* binding */ TodoFormDomElement)
/* harmony export */ });
/* harmony import */ var _domBasicElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domBasicElements */ "./src/app/domElements/domBasicElements.js");
/* harmony import */ var _services_appManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/appManager */ "./src/app/services/appManager.js");
/* harmony import */ var _formElements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formElements */ "./src/app/domElements/formElements.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ "./src/app/constants.js");
/* harmony import */ var _services_storageManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/storageManager */ "./src/app/services/storageManager.js");
/* harmony import */ var _services_renderer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/renderer */ "./src/app/services/renderer.js");
/* harmony import */ var _services_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/validator */ "./src/app/services/validator.js");
/* harmony import */ var _styles_editTodo_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/editTodo.css */ "./src/app/styles/editTodo.css");









//EDITAR BOTON DE EDIT, agregar sorters
class ToDoDomElement {
  constructor(title, description, priority, dueDate, projectIndex, isComplete = false, todoNode) {
    this.card = new _domBasicElements__WEBPACK_IMPORTED_MODULE_0__.DomElement('article', `card`, `todo-${projectIndex}-${title.replace(/\s/g, '-')}`)
    this.removeButton = new _domBasicElements__WEBPACK_IMPORTED_MODULE_0__.ButtonElement('button', 'delete-todo', '', 'X')
    this.title = new _domBasicElements__WEBPACK_IMPORTED_MODULE_0__.TextElement('h3', 'card-title', '', title)
    this.dueDate = new _domBasicElements__WEBPACK_IMPORTED_MODULE_0__.TextElement('p', 'due-date', '', dueDate)
    this.description = new _domBasicElements__WEBPACK_IMPORTED_MODULE_0__.TextElement('p', 'card-desc', '', description)

    this.buttonContainer = new _domBasicElements__WEBPACK_IMPORTED_MODULE_0__.DomElement('div', 'button-container', '')
    this.checkButton = new _domBasicElements__WEBPACK_IMPORTED_MODULE_0__.ButtonElement('button', 'complete-todo', '', '')
    this.editButton = new _domBasicElements__WEBPACK_IMPORTED_MODULE_0__.ButtonElement('button', 'edit', '', 'Edit')
    this.isComplete = isComplete
    this.projectIndex = projectIndex
    this.todoNode = todoNode
    this.titleContainer = new _domBasicElements__WEBPACK_IMPORTED_MODULE_0__.DomElement('div', 'todo-title-container', '')
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
    editForm.prioritySection.setOptions(_constants__WEBPACK_IMPORTED_MODULE_3__.priorityOptions)
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
      _services_appManager__WEBPACK_IMPORTED_MODULE_1__.AppManager.removeTodoAndUpdateList(projectIndex, todoNode)
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

class ProjectDomElement {
  constructor(title, projectIndex) {
    this.container = new _domBasicElements__WEBPACK_IMPORTED_MODULE_0__.DomElement('div', 'project-container', `project-${projectIndex}`)
    this.title = new _domBasicElements__WEBPACK_IMPORTED_MODULE_0__.TextElement('h2', 'project-title', '', title)
    this.removeButton = new _domBasicElements__WEBPACK_IMPORTED_MODULE_0__.ButtonElement('button', 'remove-project', '', 'X')
    this.titleContainer = new _domBasicElements__WEBPACK_IMPORTED_MODULE_0__.DomElement('div', 'project-title-container', '')
    this.projectBox = new _domBasicElements__WEBPACK_IMPORTED_MODULE_0__.DomElement('div', 'project-body', `project-body-${projectIndex}`)

    this.appendSelf()
  }

  addRemoveListener() {
    this.removeButton.element.addEventListener('click', () => {
      const listNode = _services_appManager__WEBPACK_IMPORTED_MODULE_1__.AppManager.appList
      const list = listNode.getList()
      const projectNode = listNode.getNodeByName(this.title.element.textContent)
      const projectIndex = listNode.getNodeIndex(projectNode)

      this.container.element.remove()
      _services_appManager__WEBPACK_IMPORTED_MODULE_1__.AppManager.removeProjectAndUpdateList(projectNode)
      if (projectIndex === 0 && list.length === 0) {
        _services_storageManager__WEBPACK_IMPORTED_MODULE_4__.StorageManager.clearStorage()
      }
      _services_renderer__WEBPACK_IMPORTED_MODULE_5__.ToDoFormRenderer.render()
    })
  }

  appendSelf() {
    const mainContent = document.querySelector('#content')
    mainContent.appendChild(this.container.element)
    this.container.appendChildren(this.titleContainer.element, this.projectBox.element)
    this.titleContainer.appendChildren(this.title.element, this.removeButton.element)
  }
}

class TodoFormDomElement {
  constructor(projects) {
    this.container = new _domBasicElements__WEBPACK_IMPORTED_MODULE_0__.DomElement('div', 'section-container', '')
    this.titleSection = new _formElements__WEBPACK_IMPORTED_MODULE_2__.TextFormSection('Name your task:', 'todo-input')
    this.descriptionSection = new _formElements__WEBPACK_IMPORTED_MODULE_2__.TextFormSection('Describe the task:', 'todo-input')
    this.prioritySection = new _formElements__WEBPACK_IMPORTED_MODULE_2__.SelectFormSection("What's the priority:")
    this.projectSection = new _formElements__WEBPACK_IMPORTED_MODULE_2__.SelectFormSection('Select project:')
    this.dateSection = new _formElements__WEBPACK_IMPORTED_MODULE_2__.DateFormSection('Pick a due date:')
    this.submitButton = new _domBasicElements__WEBPACK_IMPORTED_MODULE_0__.ButtonElement('button', 'create-todo', '', 'Create')
    this.form = new _formElements__WEBPACK_IMPORTED_MODULE_2__.TodoForm('form', 'todo-form', '')

    this.form.element.addEventListener('input', () => {
      _services_validator__WEBPACK_IMPORTED_MODULE_6__.Validator.activateTodoButton(
        [this.titleSection.input.element.value, this.descriptionSection.input.element.value],
        this.prioritySection.select.element.value,
        this.projectSection.select.element.value,
        this.dateSection.date.element.value
      )
    })
    this.submitButton.element.setAttribute('disabled', true)
    this.prioritySection.setOptions(_constants__WEBPACK_IMPORTED_MODULE_3__.priorityOptions)
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
      const listNode = _services_appManager__WEBPACK_IMPORTED_MODULE_1__.AppManager.appList
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
      _services_renderer__WEBPACK_IMPORTED_MODULE_5__.ListRenderer.render()
    })
  }
}

class EditTodoForm {
  constructor(todoNode, projectIndex) {
    this.form = new _domBasicElements__WEBPACK_IMPORTED_MODULE_0__.FormElement('form', 'edit-form', '')
    this.closeButton = new _domBasicElements__WEBPACK_IMPORTED_MODULE_0__.ButtonElement('button', 'close-edit', '', 'X')
    this.titleSection = new _formElements__WEBPACK_IMPORTED_MODULE_2__.TextFormSection('New title:', 'edit-todo')
    this.descriptionSection = new _formElements__WEBPACK_IMPORTED_MODULE_2__.TextFormSection('New description:', 'edit-todo')
    this.prioritySection = new _formElements__WEBPACK_IMPORTED_MODULE_2__.SelectFormSection('New priority:')
    this.dueDateSection = new _formElements__WEBPACK_IMPORTED_MODULE_2__.DateFormSection('New date:')
    this.submitButton = new _domBasicElements__WEBPACK_IMPORTED_MODULE_0__.ButtonElement('button', 'edit-todo-button', '', 'Submit')
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
    _services_appManager__WEBPACK_IMPORTED_MODULE_1__.AppManager.updateTodoAndUpdateList(
      this.projectIndex,
      this.todoNode,
      this.titleSection.input.element.value,
      this.descriptionSection.input.element.value,
      this.prioritySection.select.element.value,
      this.dueDateSection.date.element.value
    )
    container.classList.remove('blur')
    editForm.remove()
    _services_renderer__WEBPACK_IMPORTED_MODULE_5__.ListRenderer.render()
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


/***/ }),

/***/ "./src/app/domElements/formElements.js":
/*!*********************************************!*\
  !*** ./src/app/domElements/formElements.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DateFormSection: () => (/* binding */ DateFormSection),
/* harmony export */   FormSection: () => (/* binding */ FormSection),
/* harmony export */   ProjectForm: () => (/* binding */ ProjectForm),
/* harmony export */   SelectFormSection: () => (/* binding */ SelectFormSection),
/* harmony export */   TextFormSection: () => (/* binding */ TextFormSection),
/* harmony export */   TodoForm: () => (/* binding */ TodoForm)
/* harmony export */ });
/* harmony import */ var _domBasicElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domBasicElements */ "./src/app/domElements/domBasicElements.js");
/* harmony import */ var _services_appManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/appManager */ "./src/app/services/appManager.js");
/* harmony import */ var _services_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/validator */ "./src/app/services/validator.js");




class TodoForm extends _domBasicElements__WEBPACK_IMPORTED_MODULE_0__.FormElement {
  constructor(tag, className, id) {
    super(tag, className, id)
  }

  submitForm(event, todoTitle, todoDescription, toDoPriority, todoProjectName, todoDueDate) {
    event.preventDefault()
    this.element.reset()
    const toDo = _services_appManager__WEBPACK_IMPORTED_MODULE_1__.AppManager.addTodoAndUpdateList(todoTitle, todoDescription, toDoPriority, todoProjectName, todoDueDate)
    return toDo
  }
}

class ProjectForm extends _domBasicElements__WEBPACK_IMPORTED_MODULE_0__.FormElement {
  constructor(tag, className, id, ...inputs) {
    super(tag, className, id, ...inputs)
  }
  submitForm(event, projectTitle) {
    event.preventDefault()
    this.element.reset()
    const project = _services_appManager__WEBPACK_IMPORTED_MODULE_1__.AppManager.addProjectAndUpdateList(projectTitle)

    return project
  }
}

class FormSection {
  constructor(text, type, className) {
    this.container = new _domBasicElements__WEBPACK_IMPORTED_MODULE_0__.DomElement('div', 'form-section', '')
    this.input = new _domBasicElements__WEBPACK_IMPORTED_MODULE_0__.InputElement('input', className, '', type)
    this.label = new _domBasicElements__WEBPACK_IMPORTED_MODULE_0__.LabelElement('label', '', text)
    this.error = new _domBasicElements__WEBPACK_IMPORTED_MODULE_0__.TextElement('p', 'error-paragraph', '', '')

    this.appendSelf()
  }

  appendSelf() {
    this.container.appendChildren(this.label.element, this.input.element, this.error.element)
  }
}

class TextFormSection extends FormSection {
  constructor(text, className) {
    super(text, 'text', className)
    if (className !== 'edit-todo') {
      this.validateInput = this.validateInput.bind(this)
      this.input.element.addEventListener('input', this.validateInput)
    }
  }

  validateInput() {
    const isValid = _services_validator__WEBPACK_IMPORTED_MODULE_2__.Validator.validateTextInputs(this.input.element.value)

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

class SelectFormSection {
  constructor(text) {
    this.container = new _domBasicElements__WEBPACK_IMPORTED_MODULE_0__.DomElement('div', 'form-section', '')
    this.select = new _domBasicElements__WEBPACK_IMPORTED_MODULE_0__.DomElement('select', 'select', '')
    this.label = new _domBasicElements__WEBPACK_IMPORTED_MODULE_0__.LabelElement('label', '', text)
    this.error = new _domBasicElements__WEBPACK_IMPORTED_MODULE_0__.TextElement('p', 'error-paragraph', '', '')

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
    const isValid = _services_validator__WEBPACK_IMPORTED_MODULE_2__.Validator.validateSelectAndDate(this.select.element.value)
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

class DateFormSection {
  constructor(text) {
    this.container = new _domBasicElements__WEBPACK_IMPORTED_MODULE_0__.DomElement('div', 'form-section', '')
    this.date = new _domBasicElements__WEBPACK_IMPORTED_MODULE_0__.DateInputElement('datepicker', '')
    this.label = new _domBasicElements__WEBPACK_IMPORTED_MODULE_0__.LabelElement('label', '', text)
    this.error = new _domBasicElements__WEBPACK_IMPORTED_MODULE_0__.TextElement('p', 'error-paragraph', '', '')
    this.validateDate = this.validateDate.bind(this)
    this.date.element.addEventListener('change', this.validateDate)
    this.appendSelf()
  }

  appendSelf() {
    this.container.appendChildren(this.label.element, this.date.element)
  }

  validateDate() {
    const isValid = _services_validator__WEBPACK_IMPORTED_MODULE_2__.Validator.validateSelectAndDate(this.date.element.value)
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


/***/ }),

/***/ "./src/app/services/appManager.js":
/*!****************************************!*\
  !*** ./src/app/services/appManager.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppManager: () => (/* binding */ AppManager)
/* harmony export */ });
/* harmony import */ var _appLogic_appClasses__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../appLogic/appClasses */ "./src/app/appLogic/appClasses.js");
/* harmony import */ var _storageManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storageManager */ "./src/app/services/storageManager.js");



class AppManager {
  static appList = AppManager.initilizeAppList()

  static initilizeAppList() {
    const list = _storageManager__WEBPACK_IMPORTED_MODULE_1__.StorageManager.loadItem('list')
    const appList = new _appLogic_appClasses__WEBPACK_IMPORTED_MODULE_0__.List()

    if (list !== null && list.length > 0) {
      list.forEach((project) => {
        const projectItem = new _appLogic_appClasses__WEBPACK_IMPORTED_MODULE_0__.Project(project.title)
        appList.addItem(projectItem)
        const toDos = _storageManager__WEBPACK_IMPORTED_MODULE_1__.StorageManager.loadItem(project.title)
        if (toDos !== null && toDos.length > 0) {
          toDos.forEach((todo) => {
            const toDoItem = new _appLogic_appClasses__WEBPACK_IMPORTED_MODULE_0__.ToDo(todo.title, todo.description, todo.priority, todo.isComplete, todo.dueDate)
            projectItem.addItem(toDoItem)
          })
        }
      })
    } else {
      const baseProject = new _appLogic_appClasses__WEBPACK_IMPORTED_MODULE_0__.Project('Project')

      appList.addItem(baseProject)

      _storageManager__WEBPACK_IMPORTED_MODULE_1__.StorageManager.saveItem('list', appList.getList())
      _storageManager__WEBPACK_IMPORTED_MODULE_1__.StorageManager.saveItem(baseProject.getTitle(), baseProject.getList())
    }

    return appList
  }

  static addProjectAndUpdateList(projectTitle) {
    const newProject = new _appLogic_appClasses__WEBPACK_IMPORTED_MODULE_0__.Project(projectTitle)
    const listNode = AppManager.appList
    listNode.addItem(newProject)
    _storageManager__WEBPACK_IMPORTED_MODULE_1__.StorageManager.saveItem('list', listNode.getList())
    _storageManager__WEBPACK_IMPORTED_MODULE_1__.StorageManager.saveItem(projectTitle, newProject.getList())
    return newProject
  }

  static removeProjectAndUpdateList(projectNode) {
    const listNode = AppManager.appList
    const index = listNode.getNodeIndex(projectNode)
    if (index !== -1) {
      listNode.removeItem(index)
      _storageManager__WEBPACK_IMPORTED_MODULE_1__.StorageManager.saveItem('list', listNode.getList())
      _storageManager__WEBPACK_IMPORTED_MODULE_1__.StorageManager.removeItem(projectNode.getTitle(), projectNode.getList())
    }
  }

  static addTodoAndUpdateList(todoTitle, todoDescription, todoPriority, todoProjectName, todoDueDate) {
    const newTodo = new _appLogic_appClasses__WEBPACK_IMPORTED_MODULE_0__.ToDo(todoTitle, todoDescription, todoPriority, false, todoDueDate)
    const list = AppManager.appList.getList()
    const project = list.find((project) => project.title === todoProjectName)
    project.addItem(newTodo)
    _storageManager__WEBPACK_IMPORTED_MODULE_1__.StorageManager.saveItem(todoProjectName, project.getList())
    return newTodo
  }

  static removeTodoAndUpdateList(projectIndex, todoNode) {
    const appList = AppManager.appList
    const projectNode = appList.getItem(projectIndex)
    const todoIndex = projectNode.getNodeIndex(todoNode)

    projectNode.removeItem(todoIndex)
    _storageManager__WEBPACK_IMPORTED_MODULE_1__.StorageManager.saveItem(projectNode.getTitle(), projectNode.getList())
  }

  static updateTodoAndUpdateList(projectIndex, todoNode, newTitle, newDescription, newPriority, newDueDate) {
    const appList = AppManager.appList

    const projectNode = appList.getItem(projectIndex)
    todoNode.updateToDo(newTitle, newDescription, newPriority, newDueDate)

    _storageManager__WEBPACK_IMPORTED_MODULE_1__.StorageManager.saveItem(projectNode.getTitle(), projectNode.getList())
  }
}


/***/ }),

/***/ "./src/app/services/renderer.js":
/*!**************************************!*\
  !*** ./src/app/services/renderer.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ListRenderer: () => (/* binding */ ListRenderer),
/* harmony export */   ProjectFormRenderer: () => (/* binding */ ProjectFormRenderer),
/* harmony export */   ProjectRenderer: () => (/* binding */ ProjectRenderer),
/* harmony export */   Renderer: () => (/* binding */ Renderer),
/* harmony export */   ToDoFormRenderer: () => (/* binding */ ToDoFormRenderer),
/* harmony export */   TodoRenderer: () => (/* binding */ TodoRenderer)
/* harmony export */ });
/* harmony import */ var _appManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appManager */ "./src/app/services/appManager.js");
/* harmony import */ var _domElements_domSpecialElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../domElements/domSpecialElements */ "./src/app/domElements/domSpecialElements.js");
/* harmony import */ var _domElements_formElements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../domElements/formElements */ "./src/app/domElements/formElements.js");
/* harmony import */ var _domElements_domBasicElements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../domElements/domBasicElements */ "./src/app/domElements/domBasicElements.js");
/* harmony import */ var _validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./validator */ "./src/app/services/validator.js");
/* harmony import */ var _styles_header_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/header.css */ "./src/app/styles/header.css");
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/main.css */ "./src/app/styles/main.css");
/* harmony import */ var _styles_aside_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/aside.css */ "./src/app/styles/aside.css");









class Renderer {
  static render() {
    throw Error('The Parent class cannot use this method')
  }
}

class ToDoFormRenderer extends Renderer {
  static render() {
    const listNode = _appManager__WEBPACK_IMPORTED_MODULE_0__.AppManager.appList
    const projectNames = listNode.getList().map((project) => project.title)
    const domForm = document.querySelector('.todo-form')
    if (domForm !== null) {
      domForm.remove()
    }
    const form = new _domElements_domSpecialElements__WEBPACK_IMPORTED_MODULE_1__.TodoFormDomElement(projectNames)
    form.addSubmitListener()
  }
}

class ProjectFormRenderer extends Renderer {
  static render() {
    const header = document.querySelector('#header')

    const projectTitle = new _domElements_formElements__WEBPACK_IMPORTED_MODULE_2__.TextFormSection("Input your project's name:", 'todo-input')
    const submitButton = new _domElements_domBasicElements__WEBPACK_IMPORTED_MODULE_3__.ButtonElement('button', 'create-project', '', 'Create')
    submitButton.element.setAttribute('disabled', true)
    const form = new _domElements_formElements__WEBPACK_IMPORTED_MODULE_2__.ProjectForm('form', 'project-form', '', projectTitle.input.element.value)
    form.element.addEventListener('input', () => _validator__WEBPACK_IMPORTED_MODULE_4__.Validator.activateProjectButton(projectTitle.input.element.value))
    form.appendChildren(projectTitle.container.element, submitButton.element)

    form.element.addEventListener('submit', (event) => {
      submitButton.element.setAttribute('disabled', true)
      const mainContent = document.querySelector('#content')
      const listNode = _appManager__WEBPACK_IMPORTED_MODULE_0__.AppManager.appList
      const projectNode = form.submitForm(event, projectTitle.input.element.value)
      const projectIndex = listNode.getNodeIndex(projectNode)
      const newProject = new _domElements_domSpecialElements__WEBPACK_IMPORTED_MODULE_1__.ProjectDomElement(projectNode.getTitle(), projectIndex)
      newProject.addRemoveListener()
      mainContent.appendChild(newProject.container.element)
      ToDoFormRenderer.render()
      const createProjectForm = document.querySelector('.project-form')
      if (createProjectForm !== null) {
        createProjectForm.remove()
        ProjectFormRenderer.render()
      }
    })
    header.appendChild(form.element)
  }
}

class ProjectRenderer extends Renderer {
  static render(projectNode) {
    const listNode = _appManager__WEBPACK_IMPORTED_MODULE_0__.AppManager.appList
    const list = listNode.getList()

    if (list.length > 0) {
      const projectIndex = listNode.getNodeIndex(projectNode)
      const containerExists = document.querySelector(`#project-${projectIndex}`)
      if (containerExists !== null) {
        containerExists.remove()
      }

      const newProject = new _domElements_domSpecialElements__WEBPACK_IMPORTED_MODULE_1__.ProjectDomElement(projectNode.title, projectIndex)
      newProject.addRemoveListener()
    }
  }
}

class TodoRenderer extends Renderer {
  static render(projectNode, todoNode) {
    const listNode = _appManager__WEBPACK_IMPORTED_MODULE_0__.AppManager.appList
    const list = projectNode.getList()
    if (list.length > 0) {
      const projectIndex = listNode.getNodeIndex(projectNode)
      const projectContainer = document.getElementById(`project-body-${projectIndex}`)

      const containerExists = document.getElementById(`todo-${projectIndex}-${todoNode.title.replace(/\s/g, '-')}`)

      if (containerExists !== null) {
        containerExists.remove()
      }

      const toDoElementDom = new _domElements_domSpecialElements__WEBPACK_IMPORTED_MODULE_1__.ToDoDomElement(todoNode.title, todoNode.description, todoNode.priority, todoNode.dueDate, projectIndex, todoNode.isComplete, todoNode)

      projectContainer.appendChild(toDoElementDom.card.element)

      toDoElementDom.addToggleListener(todoNode, projectIndex)
      toDoElementDom.addRemoveListener(projectIndex, todoNode)
    }
  }
}

class ListRenderer extends Renderer {
  static render() {
    const listNode = _appManager__WEBPACK_IMPORTED_MODULE_0__.AppManager.appList
    const list = listNode.getList()

    list.forEach((project) => {
      const projectList = project.getList()
      ProjectRenderer.render(project)
      projectList.forEach((todo) => {
        TodoRenderer.render(project, todo)
      })
    })
  }
}


/***/ }),

/***/ "./src/app/services/storageManager.js":
/*!********************************************!*\
  !*** ./src/app/services/storageManager.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StorageManager: () => (/* binding */ StorageManager)
/* harmony export */ });
class StorageManager {
  static saveItem(key, data) {
    localStorage.setItem(key, JSON.stringify(data))
  }

  static loadItem(key) {
    const item = localStorage.getItem(key)
    return item ? JSON.parse(item) : null
  }

  static removeItem(key) {
    localStorage.removeItem(key)
  }

  static clearStorage() {
    localStorage.clear()
  }
}


/***/ }),

/***/ "./src/app/services/validator.js":
/*!***************************************!*\
  !*** ./src/app/services/validator.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Validator: () => (/* binding */ Validator)
/* harmony export */ });
class Validator {
  static validateTextInputs(inputs) {
    if (Array.isArray(inputs)) {
      return inputs.every((input) => input.trim().length > 0)
    } else {
      return inputs.trim().length > 0
    }
  }

  static validateSelectAndDate(formField) {
    return formField !== ''
  }

  static activateTodoButton(inputs, prioritySelect, projectSelect, datepicker) {
    const submitButton = document.querySelector('.create-todo')
    const isTextValid = Validator.validateTextInputs(inputs)
    const isPriorityValid = Validator.validateSelectAndDate(prioritySelect)
    const isProjectValid = Validator.validateSelectAndDate(projectSelect)
    const isDateValid = Validator.validateSelectAndDate(datepicker)
    if (isTextValid && isPriorityValid && isProjectValid && isDateValid) {
      submitButton.removeAttribute('disabled')
    } else {
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


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _app_services_renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/services/renderer */ "./src/app/services/renderer.js");
/* harmony import */ var _app_services_appManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/services/appManager */ "./src/app/services/appManager.js");


;



_app_services_appManager__WEBPACK_IMPORTED_MODULE_2__.AppManager.initilizeAppList()
_app_services_renderer__WEBPACK_IMPORTED_MODULE_1__.ToDoFormRenderer.render()
_app_services_renderer__WEBPACK_IMPORTED_MODULE_1__.ProjectFormRenderer.render()
_app_services_renderer__WEBPACK_IMPORTED_MODULE_1__.ListRenderer.render()

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTlk7QUFDWjtBQUNBLENBQXFCO0FBQ3dFO0FBQ3ZDO0FBQ3REO0FBQ0EsZ0VBQVU7QUFDVixvRUFBZ0I7QUFDaEIsdUVBQW1CO0FBQ25CLGdFQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9hcHAvc3R5bGVzL2FzaWRlLmNzcz84YjNiIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvYXBwL3N0eWxlcy9lZGl0VG9kby5jc3M/NWEyYyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2FwcC9zdHlsZXMvaGVhZGVyLmNzcz9lYzljIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvYXBwL3N0eWxlcy9tYWluLmNzcz8yNWZjIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcz9kZDBkIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvYXBwL2FwcExvZ2ljL2FwcENsYXNzZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9hcHAvY29uc3RhbnRzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvYXBwL2RvbUVsZW1lbnRzL2RvbUJhc2ljRWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9hcHAvZG9tRWxlbWVudHMvZG9tU3BlY2lhbEVsZW1lbnRzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvYXBwL2RvbUVsZW1lbnRzL2Zvcm1FbGVtZW50cy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2FwcC9zZXJ2aWNlcy9hcHBNYW5hZ2VyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvYXBwL3NlcnZpY2VzL3JlbmRlcmVyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvYXBwL3NlcnZpY2VzL3N0b3JhZ2VNYW5hZ2VyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvYXBwL3NlcnZpY2VzL3ZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgeyBBcHBNYW5hZ2VyIH0gZnJvbSAnLi4vc2VydmljZXMvYXBwTWFuYWdlcidcclxuaW1wb3J0IHsgU3RvcmFnZU1hbmFnZXIgfSBmcm9tICcuLi9zZXJ2aWNlcy9zdG9yYWdlTWFuYWdlcidcclxuXHJcbmV4cG9ydCBjbGFzcyBMaXN0IHtcclxuICAjbGlzdFxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy4jbGlzdCA9IFtdXHJcbiAgfVxyXG5cclxuICBnZXRMaXN0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuI2xpc3RcclxuICB9XHJcblxyXG4gIGFkZEl0ZW0oaXRlbSkge1xyXG4gICAgdGhpcy4jbGlzdC5wdXNoKGl0ZW0pXHJcbiAgfVxyXG5cclxuICBnZXRJdGVtKGluZGV4KSB7XHJcbiAgICByZXR1cm4gdGhpcy4jbGlzdFtpbmRleF1cclxuICB9XHJcblxyXG4gIHJlbW92ZUl0ZW0oaW5kZXgpIHtcclxuICAgIHRoaXMuI2xpc3Quc3BsaWNlKGluZGV4LCAxKVxyXG4gIH1cclxuXHJcbiAgZ2V0Tm9kZUluZGV4KG5vZGUpIHtcclxuICAgIHJldHVybiB0aGlzLiNsaXN0LmluZGV4T2Yobm9kZSlcclxuICB9XHJcblxyXG4gIGdldE5vZGVCeU5hbWUobmFtZSkge1xyXG4gICAgcmV0dXJuIHRoaXMuI2xpc3QuZmluZCgobm9kZSkgPT4gbm9kZS50aXRsZSA9PT0gbmFtZSlcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9qZWN0IGV4dGVuZHMgTGlzdCB7XHJcbiAgI3Byb2plY3RzXHJcbiAgY29uc3RydWN0b3IodGl0bGUpIHtcclxuICAgIHN1cGVyKClcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZVxyXG4gICAgdGhpcy4jcHJvamVjdHMgPSBbXVxyXG4gIH1cclxuXHJcbiAgZ2V0TGlzdCgpIHtcclxuICAgIHJldHVybiB0aGlzLiNwcm9qZWN0c1xyXG4gIH1cclxuXHJcbiAgYWRkSXRlbSh0b0RvKSB7XHJcbiAgICB0aGlzLiNwcm9qZWN0cy5wdXNoKHRvRG8pXHJcbiAgfVxyXG5cclxuICByZW1vdmVJdGVtKGluZGV4KSB7XHJcbiAgICB0aGlzLiNwcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpXHJcbiAgfVxyXG5cclxuICBnZXRUaXRsZSgpIHtcclxuICAgIHJldHVybiB0aGlzLnRpdGxlXHJcbiAgfVxyXG5cclxuICBnZXRJdGVtKGluZGV4KSB7XHJcbiAgICByZXR1cm4gdGhpcy4jcHJvamVjdHNbaW5kZXhdXHJcbiAgfVxyXG5cclxuICBnZXROb2RlSW5kZXgobm9kZSkge1xyXG4gICAgcmV0dXJuIHRoaXMuI3Byb2plY3RzLmluZGV4T2Yobm9kZSlcclxuICB9XHJcblxyXG4gIHNvcnRMaXN0SGlnaHRvTG93KCkge1xyXG4gICAgdGhpcy4jcHJvamVjdHMuc29ydCgoYSwgYikgPT4gYi5wcmlvcml0eSAtIGEucHJpb3JpdHkpXHJcbiAgfVxyXG5cclxuICBzb3J0TGlzdExvd3RvSGlnaCgpIHtcclxuICAgIHRoaXMuI3Byb2plY3RzLnNvcnQoKGEsIGIpID0+IGEucHJpb3JpdHkgLSBiLnByaW9yaXR5KVxyXG4gIH1cclxuXHJcbiAgc29ydEJ5RHVlRGF0ZSgpIHtcclxuICAgIHRoaXMuI3Byb2plY3RzLnNvcnQoKGEsIGIpID0+IGEuZHVlRGF0ZSAtIGIuZHVlRGF0ZSlcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUb0RvIHtcclxuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBpc0NvbXBsZXRlID0gZmFsc2UsIGR1ZURhdGUpIHtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZVxyXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uXHJcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHlcclxuICAgIHRoaXMuaXNDb21wbGV0ZSA9IGlzQ29tcGxldGVcclxuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGVcclxuICB9XHJcblxyXG4gIHNldER1ZURhdGUoZGF0ZSkge1xyXG4gICAgaWYgKGRhdGUpIHtcclxuICAgICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZShkYXRlKS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKVxyXG4gICAgICB0aGlzLmR1ZURhdGUgPSBjdXJyZW50RGF0ZVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5kdWVEYXRlID0gbnVsbFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlVG9EbyhuZXdUaXRsZSwgbmV3RGVzY3JpcHRpb24sIG5ld1ByaW9yaXR5LCBuZXdEdWVEYXRlKSB7XHJcbiAgICBpZiAobmV3VGl0bGUgIT09ICcnKSB7XHJcbiAgICAgIHRoaXMudGl0bGUgPSBuZXdUaXRsZVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChuZXdEZXNjcmlwdGlvbiAhPT0gJycpIHtcclxuICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG5ld1ByaW9yaXR5ICE9PSAnJykge1xyXG4gICAgICB0aGlzLnByaW9yaXR5ID0gbmV3UHJpb3JpdHlcclxuICAgIH1cclxuXHJcbiAgICBpZiAobmV3RHVlRGF0ZSAhPT0gJycpIHtcclxuICAgICAgdGhpcy5zZXREdWVEYXRlKG5ld0R1ZURhdGUpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0b2dnbGVJc0NvbXBsZXRlKHByb2plY3RJbmRleCkge1xyXG4gICAgdGhpcy5pc0NvbXBsZXRlID0gIXRoaXMuaXNDb21wbGV0ZVxyXG4gICAgY29uc3QgbGlzdE5vZGUgPSBBcHBNYW5hZ2VyLmFwcExpc3RcclxuICAgIGNvbnN0IGxpc3QgPSBsaXN0Tm9kZS5nZXRMaXN0KClcclxuICAgIFN0b3JhZ2VNYW5hZ2VyLnNhdmVJdGVtKCdsaXN0JywgbGlzdClcclxuICAgIGNvbnN0IHByb2plY3QgPSBsaXN0Tm9kZS5nZXRJdGVtKHByb2plY3RJbmRleClcclxuICAgIFN0b3JhZ2VNYW5hZ2VyLnNhdmVJdGVtKHByb2plY3QudGl0bGUsIHByb2plY3QuZ2V0TGlzdCgpKVxyXG4gICAgcmV0dXJuIHRoaXMuaXNDb21wbGV0ZVxyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgY29uc3QgcHJpb3JpdHlPcHRpb25zID0gWzEsIDIsIDMsIDQsIDVdXHJcbiIsImV4cG9ydCBjbGFzcyBEb21FbGVtZW50IHtcclxuICBjb25zdHJ1Y3Rvcih0YWcsIGNsYXNzTmFtZSwgaWQpIHtcclxuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKVxyXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKVxyXG4gICAgdGhpcy5lbGVtZW50LmlkID0gaWRcclxuICB9XHJcblxyXG4gIGFwcGVuZENoaWxkcmVuKC4uLmNoaWxkcmVuKSB7XHJcbiAgICBjaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4gdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGNoaWxkKSlcclxuICB9XHJcblxyXG4gIGFkZENsYXNzKG5ld0NsYXNzKSB7XHJcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChuZXdDbGFzcylcclxuICB9XHJcblxyXG4gIHJlbW92ZUNsYXNzKG9sZENsYXNzKSB7XHJcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShvbGRDbGFzcylcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBJbWFnZUVsZW1lbnQgZXh0ZW5kcyBEb21FbGVtZW50IHtcclxuICBjb25zdHJ1Y3Rvcih0YWcsIGNsYXNzTmFtZSwgaWQsIHNyYywgYWx0KSB7XHJcbiAgICBzdXBlcih0YWcsIGNsYXNzTmFtZSwgaWQpXHJcbiAgICB0aGlzLmVsZW1lbnQuc3JjID0gc3JjXHJcbiAgICB0aGlzLmVsZW1lbnQuYWx0ID0gYWx0XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGV4dEVsZW1lbnQgZXh0ZW5kcyBEb21FbGVtZW50IHtcclxuICBjb25zdHJ1Y3Rvcih0YWcsIGNsYXNzTmFtZSwgaWQsIHRleHQpIHtcclxuICAgIHN1cGVyKHRhZywgY2xhc3NOYW1lLCBpZClcclxuICAgIHRoaXMuZWxlbWVudC5pbm5lclRleHQgPSB0ZXh0XHJcbiAgfVxyXG5cclxuICBzZXRUZXh0KG5ld1RleHQpIHtcclxuICAgIHRoaXMuZWxlbWVudC5pbm5lclRleHQgPSBuZXdUZXh0XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTGFiZWxFbGVtZW50IGV4dGVuZHMgVGV4dEVsZW1lbnQge1xyXG4gIGNvbnN0cnVjdG9yKGNsYXNzTmFtZSwgaWQsIHRleHQsIGZvckF0dHJpYnV0ZSkge1xyXG4gICAgc3VwZXIoJ2xhYmVsJywgY2xhc3NOYW1lLCBpZCwgdGV4dClcclxuICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGZvckF0dHJpYnV0ZSlcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBCdXR0b25FbGVtZW50IGV4dGVuZHMgRG9tRWxlbWVudCB7XHJcbiAgY29uc3RydWN0b3IodGFnLCBjbGFzc05hbWUsIGlkLCB0ZXh0KSB7XHJcbiAgICBzdXBlcih0YWcsIGNsYXNzTmFtZSwgaWQpXHJcbiAgICB0aGlzLmVsZW1lbnQuaW5uZXJUZXh0ID0gdGV4dFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIElucHV0RWxlbWVudCBleHRlbmRzIERvbUVsZW1lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHRhZywgY2xhc3NOYW1lLCBpZCwgdHlwZSkge1xyXG4gICAgc3VwZXIodGFnLCBjbGFzc05hbWUsIGlkKVxyXG4gICAgdGhpcy5lbGVtZW50LnR5cGUgPSB0eXBlXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGV4dElucHV0RWxlbWVudCBleHRlbmRzIElucHV0RWxlbWVudCB7XHJcbiAgY29uc3RydWN0b3IoY2xhc3NOYW1lLCBpZCkge1xyXG4gICAgc3VwZXIoJ2lucHV0JywgY2xhc3NOYW1lLCBpZCwgJ3RleHQnKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIERhdGVJbnB1dEVsZW1lbnQgZXh0ZW5kcyBJbnB1dEVsZW1lbnQge1xyXG4gIGNvbnN0cnVjdG9yKGNsYXNzTmFtZSwgaWQpIHtcclxuICAgIHN1cGVyKCdpbnB1dCcsIGNsYXNzTmFtZSwgaWQsICdkYXRlJylcclxuICAgIHRoaXMuZWxlbWVudC5taW4gPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEZvcm1FbGVtZW50IGV4dGVuZHMgRG9tRWxlbWVudCB7XHJcbiAgY29uc3RydWN0b3IodGFnLCBjbGFzc05hbWUsIGlkKSB7XHJcbiAgICBzdXBlcih0YWcsIGNsYXNzTmFtZSwgaWQpXHJcbiAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdub3ZhbGlkYXRlJywgdHJ1ZSlcclxuICB9XHJcblxyXG4gIHN1Ym1pdEZvcm0oZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgRG9tRWxlbWVudCwgVGV4dEVsZW1lbnQsIEJ1dHRvbkVsZW1lbnQsIEZvcm1FbGVtZW50IH0gZnJvbSAnLi9kb21CYXNpY0VsZW1lbnRzJ1xyXG5pbXBvcnQgeyBBcHBNYW5hZ2VyIH0gZnJvbSAnLi4vc2VydmljZXMvYXBwTWFuYWdlcidcclxuaW1wb3J0IHsgVGV4dEZvcm1TZWN0aW9uLCBTZWxlY3RGb3JtU2VjdGlvbiwgVG9kb0Zvcm0sIERhdGVGb3JtU2VjdGlvbiB9IGZyb20gJy4vZm9ybUVsZW1lbnRzJ1xyXG5pbXBvcnQgeyBwcmlvcml0eU9wdGlvbnMgfSBmcm9tICcuLi9jb25zdGFudHMnXHJcbmltcG9ydCB7IFN0b3JhZ2VNYW5hZ2VyIH0gZnJvbSAnLi4vc2VydmljZXMvc3RvcmFnZU1hbmFnZXInXHJcbmltcG9ydCB7IFRvRG9Gb3JtUmVuZGVyZXIsIFRvZG9SZW5kZXJlciwgUHJvamVjdFJlbmRlcmVyLCBMaXN0UmVuZGVyZXIgfSBmcm9tICcuLi9zZXJ2aWNlcy9yZW5kZXJlcidcclxuaW1wb3J0IHsgVmFsaWRhdG9yIH0gZnJvbSAnLi4vc2VydmljZXMvdmFsaWRhdG9yJ1xyXG5cclxuaW1wb3J0ICcuLi9zdHlsZXMvZWRpdFRvZG8uY3NzJ1xyXG4vL0VESVRBUiBCT1RPTiBERSBFRElULCBhZ3JlZ2FyIHNvcnRlcnNcclxuZXhwb3J0IGNsYXNzIFRvRG9Eb21FbGVtZW50IHtcclxuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkdWVEYXRlLCBwcm9qZWN0SW5kZXgsIGlzQ29tcGxldGUgPSBmYWxzZSwgdG9kb05vZGUpIHtcclxuICAgIHRoaXMuY2FyZCA9IG5ldyBEb21FbGVtZW50KCdhcnRpY2xlJywgYGNhcmRgLCBgdG9kby0ke3Byb2plY3RJbmRleH0tJHt0aXRsZS5yZXBsYWNlKC9cXHMvZywgJy0nKX1gKVxyXG4gICAgdGhpcy5yZW1vdmVCdXR0b24gPSBuZXcgQnV0dG9uRWxlbWVudCgnYnV0dG9uJywgJ2RlbGV0ZS10b2RvJywgJycsICdYJylcclxuICAgIHRoaXMudGl0bGUgPSBuZXcgVGV4dEVsZW1lbnQoJ2gzJywgJ2NhcmQtdGl0bGUnLCAnJywgdGl0bGUpXHJcbiAgICB0aGlzLmR1ZURhdGUgPSBuZXcgVGV4dEVsZW1lbnQoJ3AnLCAnZHVlLWRhdGUnLCAnJywgZHVlRGF0ZSlcclxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBuZXcgVGV4dEVsZW1lbnQoJ3AnLCAnY2FyZC1kZXNjJywgJycsIGRlc2NyaXB0aW9uKVxyXG5cclxuICAgIHRoaXMuYnV0dG9uQ29udGFpbmVyID0gbmV3IERvbUVsZW1lbnQoJ2RpdicsICdidXR0b24tY29udGFpbmVyJywgJycpXHJcbiAgICB0aGlzLmNoZWNrQnV0dG9uID0gbmV3IEJ1dHRvbkVsZW1lbnQoJ2J1dHRvbicsICdjb21wbGV0ZS10b2RvJywgJycsICcnKVxyXG4gICAgdGhpcy5lZGl0QnV0dG9uID0gbmV3IEJ1dHRvbkVsZW1lbnQoJ2J1dHRvbicsICdlZGl0JywgJycsICdFZGl0JylcclxuICAgIHRoaXMuaXNDb21wbGV0ZSA9IGlzQ29tcGxldGVcclxuICAgIHRoaXMucHJvamVjdEluZGV4ID0gcHJvamVjdEluZGV4XHJcbiAgICB0aGlzLnRvZG9Ob2RlID0gdG9kb05vZGVcclxuICAgIHRoaXMudGl0bGVDb250YWluZXIgPSBuZXcgRG9tRWxlbWVudCgnZGl2JywgJ3RvZG8tdGl0bGUtY29udGFpbmVyJywgJycpXHJcbiAgICB0aGlzLmNhcmQuYWRkQ2xhc3MoYHByaW9yaXR5LSR7cHJpb3JpdHl9YClcclxuICAgIHRoaXMucmVtb3ZlQnV0dG9uLmFkZENsYXNzKGBwcmlvcml0eS0ke3ByaW9yaXR5fWApXHJcblxyXG4gICAgdGhpcy50cmlnZ2VyRWRpdCA9IHRoaXMudHJpZ2dlckVkaXQuYmluZCh0aGlzKVxyXG4gICAgdGhpcy5lZGl0QnV0dG9uLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnRyaWdnZXJFZGl0KVxyXG4gICAgdGhpcy5zZXRIb3ZlcigpXHJcbiAgICB0aGlzLnNldEluaXRpYWxJY29uKClcclxuICAgIHRoaXMuYXBwZW5kU2VsZigpXHJcbiAgfVxyXG5cclxuICBhcHBlbmRTZWxmKCkge1xyXG4gICAgdGhpcy5jYXJkLmFwcGVuZENoaWxkcmVuKHRoaXMudGl0bGVDb250YWluZXIuZWxlbWVudCwgdGhpcy5kdWVEYXRlLmVsZW1lbnQsIHRoaXMuZGVzY3JpcHRpb24uZWxlbWVudCwgdGhpcy5idXR0b25Db250YWluZXIuZWxlbWVudClcclxuICAgIHRoaXMudGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGRyZW4odGhpcy50aXRsZS5lbGVtZW50LCB0aGlzLnJlbW92ZUJ1dHRvbi5lbGVtZW50KVxyXG4gICAgdGhpcy5idXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGRyZW4odGhpcy5jaGVja0J1dHRvbi5lbGVtZW50LCB0aGlzLmVkaXRCdXR0b24uZWxlbWVudClcclxuICB9XHJcblxyXG4gIHNldEluaXRpYWxJY29uKCkge1xyXG4gICAgaWYgKCF0aGlzLmlzQ29tcGxldGUpIHtcclxuICAgICAgdGhpcy5jaGVja0J1dHRvbi5lbGVtZW50LmlubmVySFRNTCA9IGA8c3ZnIGNsYXNzPVwiY2hlY2staWNvbiBjcm9zc1wiIHZlcnNpb249XCIxLjFcIiBpZD1cIkxheWVyXzFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgeD1cIjBweFwiIHk9XCIwcHhcIiB3aWR0aD1cIjI1cHhcIiBoZWlnaHQ9XCIyNXB4XCIgdmlld0JveD1cIjAgMCAxMjIuODc5IDEyMi44NzlcIiBlbmFibGUtYmFja2dyb3VuZD1cIm5ldyAwIDAgMTIyLjg3OSAxMjIuODc5XCIgeG1sOnNwYWNlPVwicHJlc2VydmVcIj48Zz48cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiIGZpbGw9XCIjRkY0MTQxXCIgZD1cIk02MS40NCwwYzMzLjkzMywwLDYxLjQzOSwyNy41MDcsNjEuNDM5LDYxLjQzOSBzLTI3LjUwNiw2MS40MzktNjEuNDM5LDYxLjQzOUMyNy41MDcsMTIyLjg3OSwwLDk1LjM3MiwwLDYxLjQzOVMyNy41MDcsMCw2MS40NCwwTDYxLjQ0LDB6IE03My40NTEsMzkuMTUxIGMyLjc1LTIuNzkzLDcuMjIxLTIuODA1LDkuOTg2LTAuMDI3YzIuNzY0LDIuNzc2LDIuNzc1LDcuMjkyLDAuMDI3LDEwLjA4M0w3MS40LDYxLjQ0NWwxMi4wNzYsMTIuMjQ5IGMyLjcyOSwyLjc3LDIuNjg5LDcuMjU3LTAuMDgsMTAuMDIyYy0yLjc3MywyLjc2NS03LjIzLDIuNzU4LTkuOTU1LTAuMDEzTDYxLjQ0Niw3MS41NEw0OS40MjgsODMuNzI4IGMtMi43NSwyLjc5My03LjIyLDIuODA1LTkuOTg2LDAuMDI3Yy0yLjc2My0yLjc3Ni0yLjc3Ni03LjI5My0wLjAyNy0xMC4wODRMNTEuNDgsNjEuNDM0TDM5LjQwMyw0OS4xODUgYy0yLjcyOC0yLjc2OS0yLjY4OS03LjI1NiwwLjA4Mi0xMC4wMjJjMi43NzItMi43NjUsNy4yMjktMi43NTgsOS45NTMsMC4wMTNsMTEuOTk3LDEyLjE2NUw3My40NTEsMzkuMTUxTDczLjQ1MSwzOS4xNTF6XCIvPjwvZz48L3N2Zz5gXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmNoZWNrQnV0dG9uLmVsZW1lbnQuaW5uZXJIVE1MID0gYDxzdmcgY2xhc3M9XCJjaGVjay1pY29uIGNoZWNrXCIgdmVyc2lvbj1cIjEuMVwiIGlkPVwiTGF5ZXJfMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB4PVwiMHB4XCIgeT1cIjBweFwiIHdpZHRoPVwiMjVweFwiIGhlaWdodD1cIjI1cHhcIiB2aWV3Qm94PVwiMCAwIDEyMi44ODEgMTIyLjg4XCIgZW5hYmxlLWJhY2tncm91bmQ9XCJuZXcgMCAwIDEyMi44ODEgMTIyLjg4XCIgeG1sOnNwYWNlPVwicHJlc2VydmVcIj48Zz48cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNNjEuNDQsMGMzMy45MzMsMCw2MS40NDEsMjcuNTA3LDYxLjQ0MSw2MS40MzkgYzAsMzMuOTMzLTI3LjUwOCw2MS40NC02MS40NDEsNjEuNDRDMjcuNTA4LDEyMi44OCwwLDk1LjM3MiwwLDYxLjQzOUMwLDI3LjUwNywyNy41MDgsMCw2MS40NCwwTDYxLjQ0LDB6IE0zNC4xMDYsNjcuNjc4IGwtMC4wMTUtMC4wMTRjLTAuNzg1LTAuNzE4LTEuMjA3LTEuNjg1LTEuMjU2LTIuNjY5Yy0wLjA0OS0wLjk4MiwwLjI3NS0xLjk4NSwwLjk4NC0yLjc3N2MwLjAxLTAuMDExLDAuMDE5LTAuMDIxLDAuMDI5LTAuMDMxIGMwLjcxNy0wLjc4NCwxLjY4NC0xLjIwNywyLjY2OC0xLjI1NmMwLjk4OS0wLjA0OSwxLjk5OCwwLjI4LDIuNzkyLDAuOTk4bDEyLjk1NiwxMS43NDhsMzEuMDg5LTMyLjU1OXYwIGMwLjc0LTAuNzc2LDEuNzIzLTEuMTgsMi43MTktMS4yMDRjMC45OTItMC4wMjUsMS45OTQsMC4zMjksMi43NzEsMS4wNjd2MC4wMDFjMC43NzcsMC43MzksMS4xOCwxLjcyNCwxLjIwNSwyLjcxOCBjMC4wMjUsMC45OTMtMC4zMywxLjk5Ny0xLjA2OCwyLjc3M0w1NS4yNzksODEuNzY5Yy0wLjAyMywwLjAyNC0wLjA0OCwwLjA0Ny0wLjA3MywwLjA2N2MtMC43MTUsMC43MTUtMS42NDksMS4wOTUtMi41OTgsMS4xMyBjLTAuOTc0LDAuMDM3LTEuOTYzLTAuMjkzLTIuNzQ0LTFMMzQuMTE4LDY3LjY4OEwzNC4xMDYsNjcuNjc4TDM0LjEwNiw2Ny42NzhMMzQuMTA2LDY3LjY3OHpcIi8+PC9nPjwvc3ZnPmBcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRyaWdnZXJFZGl0KCkge1xyXG4gICAgY29uc3QgZWRpdEZvcm0gPSBuZXcgRWRpdFRvZG9Gb3JtKHRoaXMudG9kb05vZGUsIHRoaXMucHJvamVjdEluZGV4KVxyXG4gICAgZWRpdEZvcm0ucHJpb3JpdHlTZWN0aW9uLnNldE9wdGlvbnMocHJpb3JpdHlPcHRpb25zKVxyXG4gIH1cclxuXHJcbiAgc2V0SG92ZXIoKSB7XHJcbiAgICB0aGlzLmNhcmQuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuZGVzY3JpcHRpb24uYWRkQ2xhc3MoJ3Nob3cnKVxyXG4gICAgfSlcclxuICAgIHRoaXMuY2FyZC5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKCkgPT4ge1xyXG4gICAgICB0aGlzLmRlc2NyaXB0aW9uLnJlbW92ZUNsYXNzKCdzaG93JylcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBhZGRSZW1vdmVMaXN0ZW5lcihwcm9qZWN0SW5kZXgsIHRvZG9Ob2RlKSB7XHJcbiAgICB0aGlzLnJlbW92ZUJ1dHRvbi5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBBcHBNYW5hZ2VyLnJlbW92ZVRvZG9BbmRVcGRhdGVMaXN0KHByb2plY3RJbmRleCwgdG9kb05vZGUpXHJcbiAgICAgIHRoaXMuY2FyZC5lbGVtZW50LnJlbW92ZSgpXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgYWRkVG9nZ2xlTGlzdGVuZXIodG9kb05vZGUsIHByb2plY3RJbmRleCkge1xyXG4gICAgdGhpcy5jaGVja0J1dHRvbi5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBjb25zdCBpc0NvbXBsZXRlID0gdG9kb05vZGUudG9nZ2xlSXNDb21wbGV0ZShwcm9qZWN0SW5kZXgpXHJcblxyXG4gICAgICBpZiAoIWlzQ29tcGxldGUpIHtcclxuICAgICAgICB0aGlzLmNhcmQuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdub3QtY29tcGxldGUnKVxyXG4gICAgICAgIHRoaXMuY2FyZC5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2NvbXBsZXRlJylcclxuICAgICAgICB0aGlzLmNoZWNrQnV0dG9uLmVsZW1lbnQuaW5uZXJIVE1MID0gYDxzdmcgY2xhc3M9XCJjaGVjay1pY29uIGNyb3NzXCIgdmVyc2lvbj1cIjEuMVwiIGlkPVwiTGF5ZXJfMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB4PVwiMHB4XCIgeT1cIjBweFwiIHdpZHRoPVwiMjVweFwiIGhlaWdodD1cIjI1cHhcIiB2aWV3Qm94PVwiMCAwIDEyMi44NzkgMTIyLjg3OVwiIGVuYWJsZS1iYWNrZ3JvdW5kPVwibmV3IDAgMCAxMjIuODc5IDEyMi44NzlcIiB4bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiPjxnPjxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIgZmlsbD1cIiNGRjQxNDFcIiBkPVwiTTYxLjQ0LDBjMzMuOTMzLDAsNjEuNDM5LDI3LjUwNyw2MS40MzksNjEuNDM5IHMtMjcuNTA2LDYxLjQzOS02MS40MzksNjEuNDM5QzI3LjUwNywxMjIuODc5LDAsOTUuMzcyLDAsNjEuNDM5UzI3LjUwNywwLDYxLjQ0LDBMNjEuNDQsMHogTTczLjQ1MSwzOS4xNTEgYzIuNzUtMi43OTMsNy4yMjEtMi44MDUsOS45ODYtMC4wMjdjMi43NjQsMi43NzYsMi43NzUsNy4yOTIsMC4wMjcsMTAuMDgzTDcxLjQsNjEuNDQ1bDEyLjA3NiwxMi4yNDkgYzIuNzI5LDIuNzcsMi42ODksNy4yNTctMC4wOCwxMC4wMjJjLTIuNzczLDIuNzY1LTcuMjMsMi43NTgtOS45NTUtMC4wMTNMNjEuNDQ2LDcxLjU0TDQ5LjQyOCw4My43MjggYy0yLjc1LDIuNzkzLTcuMjIsMi44MDUtOS45ODYsMC4wMjdjLTIuNzYzLTIuNzc2LTIuNzc2LTcuMjkzLTAuMDI3LTEwLjA4NEw1MS40OCw2MS40MzRMMzkuNDAzLDQ5LjE4NSBjLTIuNzI4LTIuNzY5LTIuNjg5LTcuMjU2LDAuMDgyLTEwLjAyMmMyLjc3Mi0yLjc2NSw3LjIyOS0yLjc1OCw5Ljk1MywwLjAxM2wxMS45OTcsMTIuMTY1TDczLjQ1MSwzOS4xNTFMNzMuNDUxLDM5LjE1MXpcIi8+PC9nPjwvc3ZnPmBcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmNhcmQuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZScpXHJcbiAgICAgICAgdGhpcy5jYXJkLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnbm90LWNvbXBsZXRlJylcclxuICAgICAgICB0aGlzLmNoZWNrQnV0dG9uLmVsZW1lbnQuaW5uZXJIVE1MID0gYDxzdmcgY2xhc3M9XCJjaGVjay1pY29uIGNoZWNrXCIgdmVyc2lvbj1cIjEuMVwiIGlkPVwiTGF5ZXJfMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB4PVwiMHB4XCIgeT1cIjBweFwiIHdpZHRoPVwiMjVweFwiIGhlaWdodD1cIjI1cHhcIiB2aWV3Qm94PVwiMCAwIDEyMi44ODEgMTIyLjg4XCIgZW5hYmxlLWJhY2tncm91bmQ9XCJuZXcgMCAwIDEyMi44ODEgMTIyLjg4XCIgeG1sOnNwYWNlPVwicHJlc2VydmVcIj48Zz48cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNNjEuNDQsMGMzMy45MzMsMCw2MS40NDEsMjcuNTA3LDYxLjQ0MSw2MS40MzkgYzAsMzMuOTMzLTI3LjUwOCw2MS40NC02MS40NDEsNjEuNDRDMjcuNTA4LDEyMi44OCwwLDk1LjM3MiwwLDYxLjQzOUMwLDI3LjUwNywyNy41MDgsMCw2MS40NCwwTDYxLjQ0LDB6IE0zNC4xMDYsNjcuNjc4IGwtMC4wMTUtMC4wMTRjLTAuNzg1LTAuNzE4LTEuMjA3LTEuNjg1LTEuMjU2LTIuNjY5Yy0wLjA0OS0wLjk4MiwwLjI3NS0xLjk4NSwwLjk4NC0yLjc3N2MwLjAxLTAuMDExLDAuMDE5LTAuMDIxLDAuMDI5LTAuMDMxIGMwLjcxNy0wLjc4NCwxLjY4NC0xLjIwNywyLjY2OC0xLjI1NmMwLjk4OS0wLjA0OSwxLjk5OCwwLjI4LDIuNzkyLDAuOTk4bDEyLjk1NiwxMS43NDhsMzEuMDg5LTMyLjU1OXYwIGMwLjc0LTAuNzc2LDEuNzIzLTEuMTgsMi43MTktMS4yMDRjMC45OTItMC4wMjUsMS45OTQsMC4zMjksMi43NzEsMS4wNjd2MC4wMDFjMC43NzcsMC43MzksMS4xOCwxLjcyNCwxLjIwNSwyLjcxOCBjMC4wMjUsMC45OTMtMC4zMywxLjk5Ny0xLjA2OCwyLjc3M0w1NS4yNzksODEuNzY5Yy0wLjAyMywwLjAyNC0wLjA0OCwwLjA0Ny0wLjA3MywwLjA2N2MtMC43MTUsMC43MTUtMS42NDksMS4wOTUtMi41OTgsMS4xMyBjLTAuOTc0LDAuMDM3LTEuOTYzLTAuMjkzLTIuNzQ0LTFMMzQuMTE4LDY3LjY4OEwzNC4xMDYsNjcuNjc4TDM0LjEwNiw2Ny42NzhMMzQuMTA2LDY3LjY3OHpcIi8+PC9nPjwvc3ZnPmBcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9qZWN0RG9tRWxlbWVudCB7XHJcbiAgY29uc3RydWN0b3IodGl0bGUsIHByb2plY3RJbmRleCkge1xyXG4gICAgdGhpcy5jb250YWluZXIgPSBuZXcgRG9tRWxlbWVudCgnZGl2JywgJ3Byb2plY3QtY29udGFpbmVyJywgYHByb2plY3QtJHtwcm9qZWN0SW5kZXh9YClcclxuICAgIHRoaXMudGl0bGUgPSBuZXcgVGV4dEVsZW1lbnQoJ2gyJywgJ3Byb2plY3QtdGl0bGUnLCAnJywgdGl0bGUpXHJcbiAgICB0aGlzLnJlbW92ZUJ1dHRvbiA9IG5ldyBCdXR0b25FbGVtZW50KCdidXR0b24nLCAncmVtb3ZlLXByb2plY3QnLCAnJywgJ1gnKVxyXG4gICAgdGhpcy50aXRsZUNvbnRhaW5lciA9IG5ldyBEb21FbGVtZW50KCdkaXYnLCAncHJvamVjdC10aXRsZS1jb250YWluZXInLCAnJylcclxuICAgIHRoaXMucHJvamVjdEJveCA9IG5ldyBEb21FbGVtZW50KCdkaXYnLCAncHJvamVjdC1ib2R5JywgYHByb2plY3QtYm9keS0ke3Byb2plY3RJbmRleH1gKVxyXG5cclxuICAgIHRoaXMuYXBwZW5kU2VsZigpXHJcbiAgfVxyXG5cclxuICBhZGRSZW1vdmVMaXN0ZW5lcigpIHtcclxuICAgIHRoaXMucmVtb3ZlQnV0dG9uLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGxpc3ROb2RlID0gQXBwTWFuYWdlci5hcHBMaXN0XHJcbiAgICAgIGNvbnN0IGxpc3QgPSBsaXN0Tm9kZS5nZXRMaXN0KClcclxuICAgICAgY29uc3QgcHJvamVjdE5vZGUgPSBsaXN0Tm9kZS5nZXROb2RlQnlOYW1lKHRoaXMudGl0bGUuZWxlbWVudC50ZXh0Q29udGVudClcclxuICAgICAgY29uc3QgcHJvamVjdEluZGV4ID0gbGlzdE5vZGUuZ2V0Tm9kZUluZGV4KHByb2plY3ROb2RlKVxyXG5cclxuICAgICAgdGhpcy5jb250YWluZXIuZWxlbWVudC5yZW1vdmUoKVxyXG4gICAgICBBcHBNYW5hZ2VyLnJlbW92ZVByb2plY3RBbmRVcGRhdGVMaXN0KHByb2plY3ROb2RlKVxyXG4gICAgICBpZiAocHJvamVjdEluZGV4ID09PSAwICYmIGxpc3QubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgU3RvcmFnZU1hbmFnZXIuY2xlYXJTdG9yYWdlKClcclxuICAgICAgfVxyXG4gICAgICBUb0RvRm9ybVJlbmRlcmVyLnJlbmRlcigpXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgYXBwZW5kU2VsZigpIHtcclxuICAgIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKVxyXG4gICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQodGhpcy5jb250YWluZXIuZWxlbWVudClcclxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkcmVuKHRoaXMudGl0bGVDb250YWluZXIuZWxlbWVudCwgdGhpcy5wcm9qZWN0Qm94LmVsZW1lbnQpXHJcbiAgICB0aGlzLnRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkcmVuKHRoaXMudGl0bGUuZWxlbWVudCwgdGhpcy5yZW1vdmVCdXR0b24uZWxlbWVudClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUb2RvRm9ybURvbUVsZW1lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb2plY3RzKSB7XHJcbiAgICB0aGlzLmNvbnRhaW5lciA9IG5ldyBEb21FbGVtZW50KCdkaXYnLCAnc2VjdGlvbi1jb250YWluZXInLCAnJylcclxuICAgIHRoaXMudGl0bGVTZWN0aW9uID0gbmV3IFRleHRGb3JtU2VjdGlvbignTmFtZSB5b3VyIHRhc2s6JywgJ3RvZG8taW5wdXQnKVxyXG4gICAgdGhpcy5kZXNjcmlwdGlvblNlY3Rpb24gPSBuZXcgVGV4dEZvcm1TZWN0aW9uKCdEZXNjcmliZSB0aGUgdGFzazonLCAndG9kby1pbnB1dCcpXHJcbiAgICB0aGlzLnByaW9yaXR5U2VjdGlvbiA9IG5ldyBTZWxlY3RGb3JtU2VjdGlvbihcIldoYXQncyB0aGUgcHJpb3JpdHk6XCIpXHJcbiAgICB0aGlzLnByb2plY3RTZWN0aW9uID0gbmV3IFNlbGVjdEZvcm1TZWN0aW9uKCdTZWxlY3QgcHJvamVjdDonKVxyXG4gICAgdGhpcy5kYXRlU2VjdGlvbiA9IG5ldyBEYXRlRm9ybVNlY3Rpb24oJ1BpY2sgYSBkdWUgZGF0ZTonKVxyXG4gICAgdGhpcy5zdWJtaXRCdXR0b24gPSBuZXcgQnV0dG9uRWxlbWVudCgnYnV0dG9uJywgJ2NyZWF0ZS10b2RvJywgJycsICdDcmVhdGUnKVxyXG4gICAgdGhpcy5mb3JtID0gbmV3IFRvZG9Gb3JtKCdmb3JtJywgJ3RvZG8tZm9ybScsICcnKVxyXG5cclxuICAgIHRoaXMuZm9ybS5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xyXG4gICAgICBWYWxpZGF0b3IuYWN0aXZhdGVUb2RvQnV0dG9uKFxyXG4gICAgICAgIFt0aGlzLnRpdGxlU2VjdGlvbi5pbnB1dC5lbGVtZW50LnZhbHVlLCB0aGlzLmRlc2NyaXB0aW9uU2VjdGlvbi5pbnB1dC5lbGVtZW50LnZhbHVlXSxcclxuICAgICAgICB0aGlzLnByaW9yaXR5U2VjdGlvbi5zZWxlY3QuZWxlbWVudC52YWx1ZSxcclxuICAgICAgICB0aGlzLnByb2plY3RTZWN0aW9uLnNlbGVjdC5lbGVtZW50LnZhbHVlLFxyXG4gICAgICAgIHRoaXMuZGF0ZVNlY3Rpb24uZGF0ZS5lbGVtZW50LnZhbHVlXHJcbiAgICAgIClcclxuICAgIH0pXHJcbiAgICB0aGlzLnN1Ym1pdEJ1dHRvbi5lbGVtZW50LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCB0cnVlKVxyXG4gICAgdGhpcy5wcmlvcml0eVNlY3Rpb24uc2V0T3B0aW9ucyhwcmlvcml0eU9wdGlvbnMpXHJcbiAgICB0aGlzLnByb2plY3RTZWN0aW9uLnNldE9wdGlvbnMocHJvamVjdHMpXHJcbiAgICB0aGlzLmFwcGVuZFNlbGYoKVxyXG4gIH1cclxuXHJcbiAgYXBwZW5kU2VsZigpIHtcclxuICAgIGNvbnN0IGFzaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FzaWRlJylcclxuICAgIHRoaXMuZm9ybS5hcHBlbmRDaGlsZHJlbih0aGlzLmNvbnRhaW5lci5lbGVtZW50LCB0aGlzLnN1Ym1pdEJ1dHRvbi5lbGVtZW50KVxyXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGRyZW4oXHJcbiAgICAgIHRoaXMudGl0bGVTZWN0aW9uLmNvbnRhaW5lci5lbGVtZW50LFxyXG4gICAgICB0aGlzLmRlc2NyaXB0aW9uU2VjdGlvbi5jb250YWluZXIuZWxlbWVudCxcclxuICAgICAgdGhpcy5wcmlvcml0eVNlY3Rpb24uY29udGFpbmVyLmVsZW1lbnQsXHJcbiAgICAgIHRoaXMucHJvamVjdFNlY3Rpb24uY29udGFpbmVyLmVsZW1lbnQsXHJcbiAgICAgIHRoaXMuZGF0ZVNlY3Rpb24uY29udGFpbmVyLmVsZW1lbnRcclxuICAgIClcclxuICAgIGFzaWRlLmFwcGVuZENoaWxkKHRoaXMuZm9ybS5lbGVtZW50KVxyXG4gIH1cclxuXHJcbiAgYWRkU3VibWl0TGlzdGVuZXIoKSB7XHJcbiAgICB0aGlzLmZvcm0uZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcclxuICAgICAgdGhpcy5zdWJtaXRCdXR0b24uZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSlcclxuICAgICAgY29uc3QgbGlzdE5vZGUgPSBBcHBNYW5hZ2VyLmFwcExpc3RcclxuICAgICAgY29uc3QgcHJvamVjdE5vZGUgPSBsaXN0Tm9kZS5nZXROb2RlQnlOYW1lKHRoaXMucHJvamVjdFNlY3Rpb24uc2VsZWN0LmVsZW1lbnQudmFsdWUpXHJcbiAgICAgIGNvbnN0IHByb2plY3RJbmRleCA9IGxpc3ROb2RlLmdldE5vZGVJbmRleChwcm9qZWN0Tm9kZSlcclxuICAgICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNwcm9qZWN0LWJvZHktJHtwcm9qZWN0SW5kZXh9YClcclxuXHJcbiAgICAgIGNvbnN0IHRvZG9Ob2RlID0gdGhpcy5mb3JtLnN1Ym1pdEZvcm0oXHJcbiAgICAgICAgZXZlbnQsXHJcbiAgICAgICAgdGhpcy50aXRsZVNlY3Rpb24uaW5wdXQuZWxlbWVudC52YWx1ZSxcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uU2VjdGlvbi5pbnB1dC5lbGVtZW50LnZhbHVlLFxyXG4gICAgICAgIHRoaXMucHJpb3JpdHlTZWN0aW9uLnNlbGVjdC5lbGVtZW50LnZhbHVlLFxyXG4gICAgICAgIHRoaXMucHJvamVjdFNlY3Rpb24uc2VsZWN0LmVsZW1lbnQudmFsdWUsXHJcbiAgICAgICAgdGhpcy5kYXRlU2VjdGlvbi5kYXRlLmVsZW1lbnQudmFsdWVcclxuICAgICAgKVxyXG4gICAgICBjb25zdCBuZXdUb2RvID0gbmV3IFRvRG9Eb21FbGVtZW50KFxyXG4gICAgICAgIHRoaXMudGl0bGVTZWN0aW9uLmlucHV0LmVsZW1lbnQudmFsdWUsXHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvblNlY3Rpb24uaW5wdXQuZWxlbWVudC52YWx1ZSxcclxuICAgICAgICB0aGlzLnByaW9yaXR5U2VjdGlvbi5zZWxlY3QuZWxlbWVudC52YWx1ZSxcclxuICAgICAgICB0aGlzLmRhdGVTZWN0aW9uLmRhdGUuZWxlbWVudC52YWx1ZSxcclxuICAgICAgICBwcm9qZWN0SW5kZXgsXHJcbiAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgdG9kb05vZGVcclxuICAgICAgKVxyXG4gICAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1RvZG8uY2FyZC5lbGVtZW50KVxyXG4gICAgICBuZXdUb2RvLmFkZFJlbW92ZUxpc3RlbmVyKHByb2plY3RJbmRleCwgdG9kb05vZGUpXHJcbiAgICAgIG5ld1RvZG8uYWRkVG9nZ2xlTGlzdGVuZXIodG9kb05vZGUsIHByb2plY3RJbmRleClcclxuICAgICAgTGlzdFJlbmRlcmVyLnJlbmRlcigpXHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgRWRpdFRvZG9Gb3JtIHtcclxuICBjb25zdHJ1Y3Rvcih0b2RvTm9kZSwgcHJvamVjdEluZGV4KSB7XHJcbiAgICB0aGlzLmZvcm0gPSBuZXcgRm9ybUVsZW1lbnQoJ2Zvcm0nLCAnZWRpdC1mb3JtJywgJycpXHJcbiAgICB0aGlzLmNsb3NlQnV0dG9uID0gbmV3IEJ1dHRvbkVsZW1lbnQoJ2J1dHRvbicsICdjbG9zZS1lZGl0JywgJycsICdYJylcclxuICAgIHRoaXMudGl0bGVTZWN0aW9uID0gbmV3IFRleHRGb3JtU2VjdGlvbignTmV3IHRpdGxlOicsICdlZGl0LXRvZG8nKVxyXG4gICAgdGhpcy5kZXNjcmlwdGlvblNlY3Rpb24gPSBuZXcgVGV4dEZvcm1TZWN0aW9uKCdOZXcgZGVzY3JpcHRpb246JywgJ2VkaXQtdG9kbycpXHJcbiAgICB0aGlzLnByaW9yaXR5U2VjdGlvbiA9IG5ldyBTZWxlY3RGb3JtU2VjdGlvbignTmV3IHByaW9yaXR5OicpXHJcbiAgICB0aGlzLmR1ZURhdGVTZWN0aW9uID0gbmV3IERhdGVGb3JtU2VjdGlvbignTmV3IGRhdGU6JylcclxuICAgIHRoaXMuc3VibWl0QnV0dG9uID0gbmV3IEJ1dHRvbkVsZW1lbnQoJ2J1dHRvbicsICdlZGl0LXRvZG8tYnV0dG9uJywgJycsICdTdWJtaXQnKVxyXG4gICAgdGhpcy50b2RvTm9kZSA9IHRvZG9Ob2RlXHJcbiAgICB0aGlzLnByb2plY3RJbmRleCA9IHByb2plY3RJbmRleFxyXG5cclxuICAgIHRoaXMuc3VibWl0Rm9ybSA9IHRoaXMuc3VibWl0Rm9ybS5iaW5kKHRoaXMpXHJcblxyXG4gICAgdGhpcy5mb3JtLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB0aGlzLnN1Ym1pdEZvcm0oZXZlbnQpKVxyXG4gICAgdGhpcy5hcHBlbmRTZWxmKClcclxuICB9XHJcblxyXG4gIGNsb3NlRm9ybSgpIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKVxyXG4gICAgdGhpcy5mb3JtLmVsZW1lbnQucmVtb3ZlKClcclxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdibHVyJylcclxuICB9XHJcblxyXG4gIHN1Ym1pdEZvcm0oZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgIGNvbnN0IGVkaXRGb3JtID0gdGhpcy5mb3JtLmVsZW1lbnRcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKVxyXG4gICAgQXBwTWFuYWdlci51cGRhdGVUb2RvQW5kVXBkYXRlTGlzdChcclxuICAgICAgdGhpcy5wcm9qZWN0SW5kZXgsXHJcbiAgICAgIHRoaXMudG9kb05vZGUsXHJcbiAgICAgIHRoaXMudGl0bGVTZWN0aW9uLmlucHV0LmVsZW1lbnQudmFsdWUsXHJcbiAgICAgIHRoaXMuZGVzY3JpcHRpb25TZWN0aW9uLmlucHV0LmVsZW1lbnQudmFsdWUsXHJcbiAgICAgIHRoaXMucHJpb3JpdHlTZWN0aW9uLnNlbGVjdC5lbGVtZW50LnZhbHVlLFxyXG4gICAgICB0aGlzLmR1ZURhdGVTZWN0aW9uLmRhdGUuZWxlbWVudC52YWx1ZVxyXG4gICAgKVxyXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2JsdXInKVxyXG4gICAgZWRpdEZvcm0ucmVtb3ZlKClcclxuICAgIExpc3RSZW5kZXJlci5yZW5kZXIoKVxyXG4gIH1cclxuXHJcbiAgYXBwZW5kU2VsZigpIHtcclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JylcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKVxyXG4gICAgYm9keS5hcHBlbmRDaGlsZCh0aGlzLmZvcm0uZWxlbWVudClcclxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdibHVyJylcclxuICAgIHRoaXMuZm9ybS5hcHBlbmRDaGlsZHJlbihcclxuICAgICAgdGhpcy5jbG9zZUJ1dHRvbi5lbGVtZW50LFxyXG4gICAgICB0aGlzLnRpdGxlU2VjdGlvbi5jb250YWluZXIuZWxlbWVudCxcclxuICAgICAgdGhpcy5kZXNjcmlwdGlvblNlY3Rpb24uY29udGFpbmVyLmVsZW1lbnQsXHJcbiAgICAgIHRoaXMucHJpb3JpdHlTZWN0aW9uLmNvbnRhaW5lci5lbGVtZW50LFxyXG4gICAgICB0aGlzLmR1ZURhdGVTZWN0aW9uLmNvbnRhaW5lci5lbGVtZW50LFxyXG4gICAgICB0aGlzLnN1Ym1pdEJ1dHRvbi5lbGVtZW50XHJcbiAgICApXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IERvbUVsZW1lbnQsIElucHV0RWxlbWVudCwgTGFiZWxFbGVtZW50LCBUZXh0RWxlbWVudCwgRm9ybUVsZW1lbnQsIERhdGVJbnB1dEVsZW1lbnQgfSBmcm9tICcuL2RvbUJhc2ljRWxlbWVudHMnXHJcbmltcG9ydCB7IEFwcE1hbmFnZXIgfSBmcm9tICcuLi9zZXJ2aWNlcy9hcHBNYW5hZ2VyJ1xyXG5pbXBvcnQgeyBWYWxpZGF0b3IgfSBmcm9tICcuLi9zZXJ2aWNlcy92YWxpZGF0b3InXHJcblxyXG5leHBvcnQgY2xhc3MgVG9kb0Zvcm0gZXh0ZW5kcyBGb3JtRWxlbWVudCB7XHJcbiAgY29uc3RydWN0b3IodGFnLCBjbGFzc05hbWUsIGlkKSB7XHJcbiAgICBzdXBlcih0YWcsIGNsYXNzTmFtZSwgaWQpXHJcbiAgfVxyXG5cclxuICBzdWJtaXRGb3JtKGV2ZW50LCB0b2RvVGl0bGUsIHRvZG9EZXNjcmlwdGlvbiwgdG9Eb1ByaW9yaXR5LCB0b2RvUHJvamVjdE5hbWUsIHRvZG9EdWVEYXRlKSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICB0aGlzLmVsZW1lbnQucmVzZXQoKVxyXG4gICAgY29uc3QgdG9EbyA9IEFwcE1hbmFnZXIuYWRkVG9kb0FuZFVwZGF0ZUxpc3QodG9kb1RpdGxlLCB0b2RvRGVzY3JpcHRpb24sIHRvRG9Qcmlvcml0eSwgdG9kb1Byb2plY3ROYW1lLCB0b2RvRHVlRGF0ZSlcclxuICAgIHJldHVybiB0b0RvXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUHJvamVjdEZvcm0gZXh0ZW5kcyBGb3JtRWxlbWVudCB7XHJcbiAgY29uc3RydWN0b3IodGFnLCBjbGFzc05hbWUsIGlkLCAuLi5pbnB1dHMpIHtcclxuICAgIHN1cGVyKHRhZywgY2xhc3NOYW1lLCBpZCwgLi4uaW5wdXRzKVxyXG4gIH1cclxuICBzdWJtaXRGb3JtKGV2ZW50LCBwcm9qZWN0VGl0bGUpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgIHRoaXMuZWxlbWVudC5yZXNldCgpXHJcbiAgICBjb25zdCBwcm9qZWN0ID0gQXBwTWFuYWdlci5hZGRQcm9qZWN0QW5kVXBkYXRlTGlzdChwcm9qZWN0VGl0bGUpXHJcblxyXG4gICAgcmV0dXJuIHByb2plY3RcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBGb3JtU2VjdGlvbiB7XHJcbiAgY29uc3RydWN0b3IodGV4dCwgdHlwZSwgY2xhc3NOYW1lKSB7XHJcbiAgICB0aGlzLmNvbnRhaW5lciA9IG5ldyBEb21FbGVtZW50KCdkaXYnLCAnZm9ybS1zZWN0aW9uJywgJycpXHJcbiAgICB0aGlzLmlucHV0ID0gbmV3IElucHV0RWxlbWVudCgnaW5wdXQnLCBjbGFzc05hbWUsICcnLCB0eXBlKVxyXG4gICAgdGhpcy5sYWJlbCA9IG5ldyBMYWJlbEVsZW1lbnQoJ2xhYmVsJywgJycsIHRleHQpXHJcbiAgICB0aGlzLmVycm9yID0gbmV3IFRleHRFbGVtZW50KCdwJywgJ2Vycm9yLXBhcmFncmFwaCcsICcnLCAnJylcclxuXHJcbiAgICB0aGlzLmFwcGVuZFNlbGYoKVxyXG4gIH1cclxuXHJcbiAgYXBwZW5kU2VsZigpIHtcclxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkcmVuKHRoaXMubGFiZWwuZWxlbWVudCwgdGhpcy5pbnB1dC5lbGVtZW50LCB0aGlzLmVycm9yLmVsZW1lbnQpXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGV4dEZvcm1TZWN0aW9uIGV4dGVuZHMgRm9ybVNlY3Rpb24ge1xyXG4gIGNvbnN0cnVjdG9yKHRleHQsIGNsYXNzTmFtZSkge1xyXG4gICAgc3VwZXIodGV4dCwgJ3RleHQnLCBjbGFzc05hbWUpXHJcbiAgICBpZiAoY2xhc3NOYW1lICE9PSAnZWRpdC10b2RvJykge1xyXG4gICAgICB0aGlzLnZhbGlkYXRlSW5wdXQgPSB0aGlzLnZhbGlkYXRlSW5wdXQuYmluZCh0aGlzKVxyXG4gICAgICB0aGlzLmlucHV0LmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLnZhbGlkYXRlSW5wdXQpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB2YWxpZGF0ZUlucHV0KCkge1xyXG4gICAgY29uc3QgaXNWYWxpZCA9IFZhbGlkYXRvci52YWxpZGF0ZVRleHRJbnB1dHModGhpcy5pbnB1dC5lbGVtZW50LnZhbHVlKVxyXG5cclxuICAgIGlmICghaXNWYWxpZCkge1xyXG4gICAgICB0aGlzLmlucHV0LmFkZENsYXNzKCdpcy1pbnZhbGlkJylcclxuICAgICAgdGhpcy5lcnJvci5hZGRDbGFzcygnaGFzLWVycm9yJylcclxuICAgICAgdGhpcy5lcnJvci5lbGVtZW50LmlubmVyVGV4dCA9ICdNdXN0IGNvbXBsZXRlIHRoZSBmaWVsZCdcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaW5wdXQucmVtb3ZlQ2xhc3MoJ2lzLWludmFsaWQnKVxyXG4gICAgICB0aGlzLmVycm9yLnJlbW92ZUNsYXNzKCdoYXMtZXJyb3InKVxyXG4gICAgICB0aGlzLmVycm9yLmVsZW1lbnQuaW5uZXJUZXh0ID0gJydcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTZWxlY3RGb3JtU2VjdGlvbiB7XHJcbiAgY29uc3RydWN0b3IodGV4dCkge1xyXG4gICAgdGhpcy5jb250YWluZXIgPSBuZXcgRG9tRWxlbWVudCgnZGl2JywgJ2Zvcm0tc2VjdGlvbicsICcnKVxyXG4gICAgdGhpcy5zZWxlY3QgPSBuZXcgRG9tRWxlbWVudCgnc2VsZWN0JywgJ3NlbGVjdCcsICcnKVxyXG4gICAgdGhpcy5sYWJlbCA9IG5ldyBMYWJlbEVsZW1lbnQoJ2xhYmVsJywgJycsIHRleHQpXHJcbiAgICB0aGlzLmVycm9yID0gbmV3IFRleHRFbGVtZW50KCdwJywgJ2Vycm9yLXBhcmFncmFwaCcsICcnLCAnJylcclxuXHJcbiAgICB0aGlzLnZhbGlkYXRlU2VsZWN0ID0gdGhpcy52YWxpZGF0ZVNlbGVjdC5iaW5kKHRoaXMpXHJcbiAgICB0aGlzLnNlbGVjdC5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMudmFsaWRhdGVTZWxlY3QpXHJcbiAgICB0aGlzLmFwcGVuZFNlbGYoKVxyXG4gIH1cclxuXHJcbiAgYXBwZW5kU2VsZigpIHtcclxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkcmVuKHRoaXMubGFiZWwuZWxlbWVudCwgdGhpcy5zZWxlY3QuZWxlbWVudCwgdGhpcy5lcnJvci5lbGVtZW50KVxyXG4gIH1cclxuXHJcbiAgc2V0T3B0aW9ucyhvcHRpb25zKSB7XHJcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zXHJcbiAgICB0aGlzLnVwZGF0ZU9wdGlvbnMoKVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlT3B0aW9ucygpIHtcclxuICAgIHRoaXMuc2VsZWN0LmVsZW1lbnQuaW5uZXJIVE1MID0gJydcclxuXHJcbiAgICB0aGlzLm9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XHJcbiAgICAgIGNvbnN0IG9wdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxyXG4gICAgICBvcHRpb25FbGVtZW50LnZhbHVlID0gb3B0aW9uXHJcbiAgICAgIG9wdGlvbkVsZW1lbnQuaW5uZXJUZXh0ID0gb3B0aW9uXHJcbiAgICAgIHRoaXMuc2VsZWN0LmFwcGVuZENoaWxkcmVuKG9wdGlvbkVsZW1lbnQpXHJcbiAgICB9KVxyXG4gIH1cclxuICB2YWxpZGF0ZVNlbGVjdCgpIHtcclxuICAgIGNvbnN0IGlzVmFsaWQgPSBWYWxpZGF0b3IudmFsaWRhdGVTZWxlY3RBbmREYXRlKHRoaXMuc2VsZWN0LmVsZW1lbnQudmFsdWUpXHJcbiAgICBpZiAoIWlzVmFsaWQpIHtcclxuICAgICAgdGhpcy5zZWxlY3QuYWRkQ2xhc3MoJ2lzLWludmFsaWQnKVxyXG4gICAgICB0aGlzLmVycm9yLmVsZW1lbnQuaW5uZXJUZXh0ID0gJ011c3QgY29tcGxldGUgdGhlIGZpZWxkJ1xyXG4gICAgICB0aGlzLmVycm9yLmFkZENsYXNzKCdoYXMtZXJyb3InKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZWxlY3QucmVtb3ZlQ2xhc3MoJ2lzLWludmFsaWQnKVxyXG4gICAgICB0aGlzLmVycm9yLmVsZW1lbnQuaW5uZXJUZXh0ID0gJydcclxuICAgICAgdGhpcy5lcnJvci5yZW1vdmVDbGFzcygnaGFzLWVycm9yJylcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBEYXRlRm9ybVNlY3Rpb24ge1xyXG4gIGNvbnN0cnVjdG9yKHRleHQpIHtcclxuICAgIHRoaXMuY29udGFpbmVyID0gbmV3IERvbUVsZW1lbnQoJ2RpdicsICdmb3JtLXNlY3Rpb24nLCAnJylcclxuICAgIHRoaXMuZGF0ZSA9IG5ldyBEYXRlSW5wdXRFbGVtZW50KCdkYXRlcGlja2VyJywgJycpXHJcbiAgICB0aGlzLmxhYmVsID0gbmV3IExhYmVsRWxlbWVudCgnbGFiZWwnLCAnJywgdGV4dClcclxuICAgIHRoaXMuZXJyb3IgPSBuZXcgVGV4dEVsZW1lbnQoJ3AnLCAnZXJyb3ItcGFyYWdyYXBoJywgJycsICcnKVxyXG4gICAgdGhpcy52YWxpZGF0ZURhdGUgPSB0aGlzLnZhbGlkYXRlRGF0ZS5iaW5kKHRoaXMpXHJcbiAgICB0aGlzLmRhdGUuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLnZhbGlkYXRlRGF0ZSlcclxuICAgIHRoaXMuYXBwZW5kU2VsZigpXHJcbiAgfVxyXG5cclxuICBhcHBlbmRTZWxmKCkge1xyXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGRyZW4odGhpcy5sYWJlbC5lbGVtZW50LCB0aGlzLmRhdGUuZWxlbWVudClcclxuICB9XHJcblxyXG4gIHZhbGlkYXRlRGF0ZSgpIHtcclxuICAgIGNvbnN0IGlzVmFsaWQgPSBWYWxpZGF0b3IudmFsaWRhdGVTZWxlY3RBbmREYXRlKHRoaXMuZGF0ZS5lbGVtZW50LnZhbHVlKVxyXG4gICAgaWYgKCFpc1ZhbGlkKSB7XHJcbiAgICAgIHRoaXMuZGF0ZS5hZGRDbGFzcygnaXMtaW52YWxpZCcpXHJcbiAgICAgIHRoaXMuZXJyb3IuZWxlbWVudC5pbm5lclRleHQgPSAnTXVzdCBjb21wbGV0ZSB0aGUgZmllbGQnXHJcbiAgICAgIHRoaXMuZXJyb3IuYWRkQ2xhc3MoJ2hhcy1lcnJvcicpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmRhdGUucmVtb3ZlQ2xhc3MoJ2lzLWludmFsaWQnKVxyXG4gICAgICB0aGlzLmRhdGUuZWxlbWVudC5pbm5lclRleHQgPSAnJ1xyXG4gICAgICB0aGlzLmVycm9yLnJlbW92ZUNsYXNzKCdoYXMtZXJyb3InKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBMaXN0LCBUb0RvLCBQcm9qZWN0IH0gZnJvbSAnLi4vYXBwTG9naWMvYXBwQ2xhc3NlcydcclxuaW1wb3J0IHsgU3RvcmFnZU1hbmFnZXIgfSBmcm9tICcuL3N0b3JhZ2VNYW5hZ2VyJ1xyXG5cclxuZXhwb3J0IGNsYXNzIEFwcE1hbmFnZXIge1xyXG4gIHN0YXRpYyBhcHBMaXN0ID0gQXBwTWFuYWdlci5pbml0aWxpemVBcHBMaXN0KClcclxuXHJcbiAgc3RhdGljIGluaXRpbGl6ZUFwcExpc3QoKSB7XHJcbiAgICBjb25zdCBsaXN0ID0gU3RvcmFnZU1hbmFnZXIubG9hZEl0ZW0oJ2xpc3QnKVxyXG4gICAgY29uc3QgYXBwTGlzdCA9IG5ldyBMaXN0KClcclxuXHJcbiAgICBpZiAobGlzdCAhPT0gbnVsbCAmJiBsaXN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgbGlzdC5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdEl0ZW0gPSBuZXcgUHJvamVjdChwcm9qZWN0LnRpdGxlKVxyXG4gICAgICAgIGFwcExpc3QuYWRkSXRlbShwcm9qZWN0SXRlbSlcclxuICAgICAgICBjb25zdCB0b0RvcyA9IFN0b3JhZ2VNYW5hZ2VyLmxvYWRJdGVtKHByb2plY3QudGl0bGUpXHJcbiAgICAgICAgaWYgKHRvRG9zICE9PSBudWxsICYmIHRvRG9zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIHRvRG9zLmZvckVhY2goKHRvZG8pID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdG9Eb0l0ZW0gPSBuZXcgVG9Ebyh0b2RvLnRpdGxlLCB0b2RvLmRlc2NyaXB0aW9uLCB0b2RvLnByaW9yaXR5LCB0b2RvLmlzQ29tcGxldGUsIHRvZG8uZHVlRGF0ZSlcclxuICAgICAgICAgICAgcHJvamVjdEl0ZW0uYWRkSXRlbSh0b0RvSXRlbSlcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgYmFzZVByb2plY3QgPSBuZXcgUHJvamVjdCgnUHJvamVjdCcpXHJcblxyXG4gICAgICBhcHBMaXN0LmFkZEl0ZW0oYmFzZVByb2plY3QpXHJcblxyXG4gICAgICBTdG9yYWdlTWFuYWdlci5zYXZlSXRlbSgnbGlzdCcsIGFwcExpc3QuZ2V0TGlzdCgpKVxyXG4gICAgICBTdG9yYWdlTWFuYWdlci5zYXZlSXRlbShiYXNlUHJvamVjdC5nZXRUaXRsZSgpLCBiYXNlUHJvamVjdC5nZXRMaXN0KCkpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGFwcExpc3RcclxuICB9XHJcblxyXG4gIHN0YXRpYyBhZGRQcm9qZWN0QW5kVXBkYXRlTGlzdChwcm9qZWN0VGl0bGUpIHtcclxuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChwcm9qZWN0VGl0bGUpXHJcbiAgICBjb25zdCBsaXN0Tm9kZSA9IEFwcE1hbmFnZXIuYXBwTGlzdFxyXG4gICAgbGlzdE5vZGUuYWRkSXRlbShuZXdQcm9qZWN0KVxyXG4gICAgU3RvcmFnZU1hbmFnZXIuc2F2ZUl0ZW0oJ2xpc3QnLCBsaXN0Tm9kZS5nZXRMaXN0KCkpXHJcbiAgICBTdG9yYWdlTWFuYWdlci5zYXZlSXRlbShwcm9qZWN0VGl0bGUsIG5ld1Byb2plY3QuZ2V0TGlzdCgpKVxyXG4gICAgcmV0dXJuIG5ld1Byb2plY3RcclxuICB9XHJcblxyXG4gIHN0YXRpYyByZW1vdmVQcm9qZWN0QW5kVXBkYXRlTGlzdChwcm9qZWN0Tm9kZSkge1xyXG4gICAgY29uc3QgbGlzdE5vZGUgPSBBcHBNYW5hZ2VyLmFwcExpc3RcclxuICAgIGNvbnN0IGluZGV4ID0gbGlzdE5vZGUuZ2V0Tm9kZUluZGV4KHByb2plY3ROb2RlKVxyXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xyXG4gICAgICBsaXN0Tm9kZS5yZW1vdmVJdGVtKGluZGV4KVxyXG4gICAgICBTdG9yYWdlTWFuYWdlci5zYXZlSXRlbSgnbGlzdCcsIGxpc3ROb2RlLmdldExpc3QoKSlcclxuICAgICAgU3RvcmFnZU1hbmFnZXIucmVtb3ZlSXRlbShwcm9qZWN0Tm9kZS5nZXRUaXRsZSgpLCBwcm9qZWN0Tm9kZS5nZXRMaXN0KCkpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYWRkVG9kb0FuZFVwZGF0ZUxpc3QodG9kb1RpdGxlLCB0b2RvRGVzY3JpcHRpb24sIHRvZG9Qcmlvcml0eSwgdG9kb1Byb2plY3ROYW1lLCB0b2RvRHVlRGF0ZSkge1xyXG4gICAgY29uc3QgbmV3VG9kbyA9IG5ldyBUb0RvKHRvZG9UaXRsZSwgdG9kb0Rlc2NyaXB0aW9uLCB0b2RvUHJpb3JpdHksIGZhbHNlLCB0b2RvRHVlRGF0ZSlcclxuICAgIGNvbnN0IGxpc3QgPSBBcHBNYW5hZ2VyLmFwcExpc3QuZ2V0TGlzdCgpXHJcbiAgICBjb25zdCBwcm9qZWN0ID0gbGlzdC5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LnRpdGxlID09PSB0b2RvUHJvamVjdE5hbWUpXHJcbiAgICBwcm9qZWN0LmFkZEl0ZW0obmV3VG9kbylcclxuICAgIFN0b3JhZ2VNYW5hZ2VyLnNhdmVJdGVtKHRvZG9Qcm9qZWN0TmFtZSwgcHJvamVjdC5nZXRMaXN0KCkpXHJcbiAgICByZXR1cm4gbmV3VG9kb1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHJlbW92ZVRvZG9BbmRVcGRhdGVMaXN0KHByb2plY3RJbmRleCwgdG9kb05vZGUpIHtcclxuICAgIGNvbnN0IGFwcExpc3QgPSBBcHBNYW5hZ2VyLmFwcExpc3RcclxuICAgIGNvbnN0IHByb2plY3ROb2RlID0gYXBwTGlzdC5nZXRJdGVtKHByb2plY3RJbmRleClcclxuICAgIGNvbnN0IHRvZG9JbmRleCA9IHByb2plY3ROb2RlLmdldE5vZGVJbmRleCh0b2RvTm9kZSlcclxuXHJcbiAgICBwcm9qZWN0Tm9kZS5yZW1vdmVJdGVtKHRvZG9JbmRleClcclxuICAgIFN0b3JhZ2VNYW5hZ2VyLnNhdmVJdGVtKHByb2plY3ROb2RlLmdldFRpdGxlKCksIHByb2plY3ROb2RlLmdldExpc3QoKSlcclxuICB9XHJcblxyXG4gIHN0YXRpYyB1cGRhdGVUb2RvQW5kVXBkYXRlTGlzdChwcm9qZWN0SW5kZXgsIHRvZG9Ob2RlLCBuZXdUaXRsZSwgbmV3RGVzY3JpcHRpb24sIG5ld1ByaW9yaXR5LCBuZXdEdWVEYXRlKSB7XHJcbiAgICBjb25zdCBhcHBMaXN0ID0gQXBwTWFuYWdlci5hcHBMaXN0XHJcblxyXG4gICAgY29uc3QgcHJvamVjdE5vZGUgPSBhcHBMaXN0LmdldEl0ZW0ocHJvamVjdEluZGV4KVxyXG4gICAgdG9kb05vZGUudXBkYXRlVG9EbyhuZXdUaXRsZSwgbmV3RGVzY3JpcHRpb24sIG5ld1ByaW9yaXR5LCBuZXdEdWVEYXRlKVxyXG5cclxuICAgIFN0b3JhZ2VNYW5hZ2VyLnNhdmVJdGVtKHByb2plY3ROb2RlLmdldFRpdGxlKCksIHByb2plY3ROb2RlLmdldExpc3QoKSlcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQXBwTWFuYWdlciB9IGZyb20gJy4vYXBwTWFuYWdlcidcclxuaW1wb3J0IHsgVG9kb0Zvcm1Eb21FbGVtZW50LCBQcm9qZWN0RG9tRWxlbWVudCwgVG9Eb0RvbUVsZW1lbnQgfSBmcm9tICcuLi9kb21FbGVtZW50cy9kb21TcGVjaWFsRWxlbWVudHMnXHJcbmltcG9ydCB7IFByb2plY3RGb3JtLCBUZXh0Rm9ybVNlY3Rpb24gfSBmcm9tICcuLi9kb21FbGVtZW50cy9mb3JtRWxlbWVudHMnXHJcbmltcG9ydCB7IEJ1dHRvbkVsZW1lbnQgfSBmcm9tICcuLi9kb21FbGVtZW50cy9kb21CYXNpY0VsZW1lbnRzJ1xyXG5pbXBvcnQgeyBWYWxpZGF0b3IgfSBmcm9tICcuL3ZhbGlkYXRvcidcclxuaW1wb3J0ICcuLi9zdHlsZXMvaGVhZGVyLmNzcydcclxuaW1wb3J0ICcuLi9zdHlsZXMvbWFpbi5jc3MnXHJcbmltcG9ydCAnLi4vc3R5bGVzL2FzaWRlLmNzcydcclxuXHJcbmV4cG9ydCBjbGFzcyBSZW5kZXJlciB7XHJcbiAgc3RhdGljIHJlbmRlcigpIHtcclxuICAgIHRocm93IEVycm9yKCdUaGUgUGFyZW50IGNsYXNzIGNhbm5vdCB1c2UgdGhpcyBtZXRob2QnKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRvRG9Gb3JtUmVuZGVyZXIgZXh0ZW5kcyBSZW5kZXJlciB7XHJcbiAgc3RhdGljIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IGxpc3ROb2RlID0gQXBwTWFuYWdlci5hcHBMaXN0XHJcbiAgICBjb25zdCBwcm9qZWN0TmFtZXMgPSBsaXN0Tm9kZS5nZXRMaXN0KCkubWFwKChwcm9qZWN0KSA9PiBwcm9qZWN0LnRpdGxlKVxyXG4gICAgY29uc3QgZG9tRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWZvcm0nKVxyXG4gICAgaWYgKGRvbUZvcm0gIT09IG51bGwpIHtcclxuICAgICAgZG9tRm9ybS5yZW1vdmUoKVxyXG4gICAgfVxyXG4gICAgY29uc3QgZm9ybSA9IG5ldyBUb2RvRm9ybURvbUVsZW1lbnQocHJvamVjdE5hbWVzKVxyXG4gICAgZm9ybS5hZGRTdWJtaXRMaXN0ZW5lcigpXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUHJvamVjdEZvcm1SZW5kZXJlciBleHRlbmRzIFJlbmRlcmVyIHtcclxuICBzdGF0aWMgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hlYWRlcicpXHJcblxyXG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gbmV3IFRleHRGb3JtU2VjdGlvbihcIklucHV0IHlvdXIgcHJvamVjdCdzIG5hbWU6XCIsICd0b2RvLWlucHV0JylcclxuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IG5ldyBCdXR0b25FbGVtZW50KCdidXR0b24nLCAnY3JlYXRlLXByb2plY3QnLCAnJywgJ0NyZWF0ZScpXHJcbiAgICBzdWJtaXRCdXR0b24uZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSlcclxuICAgIGNvbnN0IGZvcm0gPSBuZXcgUHJvamVjdEZvcm0oJ2Zvcm0nLCAncHJvamVjdC1mb3JtJywgJycsIHByb2plY3RUaXRsZS5pbnB1dC5lbGVtZW50LnZhbHVlKVxyXG4gICAgZm9ybS5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4gVmFsaWRhdG9yLmFjdGl2YXRlUHJvamVjdEJ1dHRvbihwcm9qZWN0VGl0bGUuaW5wdXQuZWxlbWVudC52YWx1ZSkpXHJcbiAgICBmb3JtLmFwcGVuZENoaWxkcmVuKHByb2plY3RUaXRsZS5jb250YWluZXIuZWxlbWVudCwgc3VibWl0QnV0dG9uLmVsZW1lbnQpXHJcblxyXG4gICAgZm9ybS5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xyXG4gICAgICBzdWJtaXRCdXR0b24uZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSlcclxuICAgICAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpXHJcbiAgICAgIGNvbnN0IGxpc3ROb2RlID0gQXBwTWFuYWdlci5hcHBMaXN0XHJcbiAgICAgIGNvbnN0IHByb2plY3ROb2RlID0gZm9ybS5zdWJtaXRGb3JtKGV2ZW50LCBwcm9qZWN0VGl0bGUuaW5wdXQuZWxlbWVudC52YWx1ZSlcclxuICAgICAgY29uc3QgcHJvamVjdEluZGV4ID0gbGlzdE5vZGUuZ2V0Tm9kZUluZGV4KHByb2plY3ROb2RlKVxyXG4gICAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3REb21FbGVtZW50KHByb2plY3ROb2RlLmdldFRpdGxlKCksIHByb2plY3RJbmRleClcclxuICAgICAgbmV3UHJvamVjdC5hZGRSZW1vdmVMaXN0ZW5lcigpXHJcbiAgICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKG5ld1Byb2plY3QuY29udGFpbmVyLmVsZW1lbnQpXHJcbiAgICAgIFRvRG9Gb3JtUmVuZGVyZXIucmVuZGVyKClcclxuICAgICAgY29uc3QgY3JlYXRlUHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1mb3JtJylcclxuICAgICAgaWYgKGNyZWF0ZVByb2plY3RGb3JtICE9PSBudWxsKSB7XHJcbiAgICAgICAgY3JlYXRlUHJvamVjdEZvcm0ucmVtb3ZlKClcclxuICAgICAgICBQcm9qZWN0Rm9ybVJlbmRlcmVyLnJlbmRlcigpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoZm9ybS5lbGVtZW50KVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFByb2plY3RSZW5kZXJlciBleHRlbmRzIFJlbmRlcmVyIHtcclxuICBzdGF0aWMgcmVuZGVyKHByb2plY3ROb2RlKSB7XHJcbiAgICBjb25zdCBsaXN0Tm9kZSA9IEFwcE1hbmFnZXIuYXBwTGlzdFxyXG4gICAgY29uc3QgbGlzdCA9IGxpc3ROb2RlLmdldExpc3QoKVxyXG5cclxuICAgIGlmIChsaXN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgY29uc3QgcHJvamVjdEluZGV4ID0gbGlzdE5vZGUuZ2V0Tm9kZUluZGV4KHByb2plY3ROb2RlKVxyXG4gICAgICBjb25zdCBjb250YWluZXJFeGlzdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjcHJvamVjdC0ke3Byb2plY3RJbmRleH1gKVxyXG4gICAgICBpZiAoY29udGFpbmVyRXhpc3RzICE9PSBudWxsKSB7XHJcbiAgICAgICAgY29udGFpbmVyRXhpc3RzLnJlbW92ZSgpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdERvbUVsZW1lbnQocHJvamVjdE5vZGUudGl0bGUsIHByb2plY3RJbmRleClcclxuICAgICAgbmV3UHJvamVjdC5hZGRSZW1vdmVMaXN0ZW5lcigpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVG9kb1JlbmRlcmVyIGV4dGVuZHMgUmVuZGVyZXIge1xyXG4gIHN0YXRpYyByZW5kZXIocHJvamVjdE5vZGUsIHRvZG9Ob2RlKSB7XHJcbiAgICBjb25zdCBsaXN0Tm9kZSA9IEFwcE1hbmFnZXIuYXBwTGlzdFxyXG4gICAgY29uc3QgbGlzdCA9IHByb2plY3ROb2RlLmdldExpc3QoKVxyXG4gICAgaWYgKGxpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICBjb25zdCBwcm9qZWN0SW5kZXggPSBsaXN0Tm9kZS5nZXROb2RlSW5kZXgocHJvamVjdE5vZGUpXHJcbiAgICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcHJvamVjdC1ib2R5LSR7cHJvamVjdEluZGV4fWApXHJcblxyXG4gICAgICBjb25zdCBjb250YWluZXJFeGlzdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgdG9kby0ke3Byb2plY3RJbmRleH0tJHt0b2RvTm9kZS50aXRsZS5yZXBsYWNlKC9cXHMvZywgJy0nKX1gKVxyXG5cclxuICAgICAgaWYgKGNvbnRhaW5lckV4aXN0cyAhPT0gbnVsbCkge1xyXG4gICAgICAgIGNvbnRhaW5lckV4aXN0cy5yZW1vdmUoKVxyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCB0b0RvRWxlbWVudERvbSA9IG5ldyBUb0RvRG9tRWxlbWVudCh0b2RvTm9kZS50aXRsZSwgdG9kb05vZGUuZGVzY3JpcHRpb24sIHRvZG9Ob2RlLnByaW9yaXR5LCB0b2RvTm9kZS5kdWVEYXRlLCBwcm9qZWN0SW5kZXgsIHRvZG9Ob2RlLmlzQ29tcGxldGUsIHRvZG9Ob2RlKVxyXG5cclxuICAgICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZCh0b0RvRWxlbWVudERvbS5jYXJkLmVsZW1lbnQpXHJcblxyXG4gICAgICB0b0RvRWxlbWVudERvbS5hZGRUb2dnbGVMaXN0ZW5lcih0b2RvTm9kZSwgcHJvamVjdEluZGV4KVxyXG4gICAgICB0b0RvRWxlbWVudERvbS5hZGRSZW1vdmVMaXN0ZW5lcihwcm9qZWN0SW5kZXgsIHRvZG9Ob2RlKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIExpc3RSZW5kZXJlciBleHRlbmRzIFJlbmRlcmVyIHtcclxuICBzdGF0aWMgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgbGlzdE5vZGUgPSBBcHBNYW5hZ2VyLmFwcExpc3RcclxuICAgIGNvbnN0IGxpc3QgPSBsaXN0Tm9kZS5nZXRMaXN0KClcclxuXHJcbiAgICBsaXN0LmZvckVhY2goKHByb2plY3QpID0+IHtcclxuICAgICAgY29uc3QgcHJvamVjdExpc3QgPSBwcm9qZWN0LmdldExpc3QoKVxyXG4gICAgICBQcm9qZWN0UmVuZGVyZXIucmVuZGVyKHByb2plY3QpXHJcbiAgICAgIHByb2plY3RMaXN0LmZvckVhY2goKHRvZG8pID0+IHtcclxuICAgICAgICBUb2RvUmVuZGVyZXIucmVuZGVyKHByb2plY3QsIHRvZG8pXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgU3RvcmFnZU1hbmFnZXIge1xyXG4gIHN0YXRpYyBzYXZlSXRlbShrZXksIGRhdGEpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpXHJcbiAgfVxyXG5cclxuICBzdGF0aWMgbG9hZEl0ZW0oa2V5KSB7XHJcbiAgICBjb25zdCBpdGVtID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KVxyXG4gICAgcmV0dXJuIGl0ZW0gPyBKU09OLnBhcnNlKGl0ZW0pIDogbnVsbFxyXG4gIH1cclxuXHJcbiAgc3RhdGljIHJlbW92ZUl0ZW0oa2V5KSB7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpXHJcbiAgfVxyXG5cclxuICBzdGF0aWMgY2xlYXJTdG9yYWdlKCkge1xyXG4gICAgbG9jYWxTdG9yYWdlLmNsZWFyKClcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIFZhbGlkYXRvciB7XHJcbiAgc3RhdGljIHZhbGlkYXRlVGV4dElucHV0cyhpbnB1dHMpIHtcclxuICAgIGlmIChBcnJheS5pc0FycmF5KGlucHV0cykpIHtcclxuICAgICAgcmV0dXJuIGlucHV0cy5ldmVyeSgoaW5wdXQpID0+IGlucHV0LnRyaW0oKS5sZW5ndGggPiAwKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGlucHV0cy50cmltKCkubGVuZ3RoID4gMFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIHZhbGlkYXRlU2VsZWN0QW5kRGF0ZShmb3JtRmllbGQpIHtcclxuICAgIHJldHVybiBmb3JtRmllbGQgIT09ICcnXHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYWN0aXZhdGVUb2RvQnV0dG9uKGlucHV0cywgcHJpb3JpdHlTZWxlY3QsIHByb2plY3RTZWxlY3QsIGRhdGVwaWNrZXIpIHtcclxuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGUtdG9kbycpXHJcbiAgICBjb25zdCBpc1RleHRWYWxpZCA9IFZhbGlkYXRvci52YWxpZGF0ZVRleHRJbnB1dHMoaW5wdXRzKVxyXG4gICAgY29uc3QgaXNQcmlvcml0eVZhbGlkID0gVmFsaWRhdG9yLnZhbGlkYXRlU2VsZWN0QW5kRGF0ZShwcmlvcml0eVNlbGVjdClcclxuICAgIGNvbnN0IGlzUHJvamVjdFZhbGlkID0gVmFsaWRhdG9yLnZhbGlkYXRlU2VsZWN0QW5kRGF0ZShwcm9qZWN0U2VsZWN0KVxyXG4gICAgY29uc3QgaXNEYXRlVmFsaWQgPSBWYWxpZGF0b3IudmFsaWRhdGVTZWxlY3RBbmREYXRlKGRhdGVwaWNrZXIpXHJcbiAgICBpZiAoaXNUZXh0VmFsaWQgJiYgaXNQcmlvcml0eVZhbGlkICYmIGlzUHJvamVjdFZhbGlkICYmIGlzRGF0ZVZhbGlkKSB7XHJcbiAgICAgIHN1Ym1pdEJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBhY3RpdmF0ZVByb2plY3RCdXR0b24oaW5wdXQpIHtcclxuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGUtcHJvamVjdCcpXHJcbiAgICBjb25zdCBpc1ZhbGlkID0gVmFsaWRhdG9yLnZhbGlkYXRlVGV4dElucHV0cyhpbnB1dClcclxuICAgIGlmIChpc1ZhbGlkKSB7XHJcbiAgICAgIHN1Ym1pdEJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJylcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSlcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIndXNlIHN0cmljdCdcclxuXHJcbmltcG9ydCAnLi9zdHlsZXMuY3NzJ1xyXG5pbXBvcnQgeyBUb0RvRm9ybVJlbmRlcmVyLCBMaXN0UmVuZGVyZXIsIFByb2plY3RGb3JtUmVuZGVyZXIgfSBmcm9tICcuL2FwcC9zZXJ2aWNlcy9yZW5kZXJlcidcclxuaW1wb3J0IHsgQXBwTWFuYWdlciB9IGZyb20gJy4vYXBwL3NlcnZpY2VzL2FwcE1hbmFnZXInXHJcblxyXG5BcHBNYW5hZ2VyLmluaXRpbGl6ZUFwcExpc3QoKVxyXG5Ub0RvRm9ybVJlbmRlcmVyLnJlbmRlcigpXHJcblByb2plY3RGb3JtUmVuZGVyZXIucmVuZGVyKClcclxuTGlzdFJlbmRlcmVyLnJlbmRlcigpXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
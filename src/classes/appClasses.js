import { StorageManager } from './storageManager'
export class List {
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
    console.log('borre un proyecto', this.#list)
  }

  getNodeIndex(node) {
    return this.#list.indexOf(node)
  }

  getNodeByName(name) {
    return this.#list.find((node) => node.title === name)
  }
}

export class Project extends List {
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
    console.log('Se borro un todo', this.#projects)
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

export class ToDo {
  constructor(title, description, priority, isComplete = false, dueDate) {
    this.title = title
    this.description = description
    this.priority = priority
    this.isComplete = isComplete
    this.dueDate = dueDate
  }

  setDueDate(date) {
    if (date) {
      const currentDate = new Date(date)
      this.dueDate = currentDate
    } else {
      this.dueDate = null
    }
  }

  setPriority(newPriority) {
    this.priority = newPriority
  }

  toggleIsComplete() {
    this.isComplete = !this.isComplete
    return this.isComplete
  }
}

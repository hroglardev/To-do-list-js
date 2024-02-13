export class StorageManager {
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
}

export class DataManager {
  static initilizeAppList() {
    const list = StorageManager.loadItem('list')
    const appList = new List()
    if (list !== null && list.length > 0) {
      list.forEach((project) => {
        const projectItem = new Project(project.title)
        appList.addItem(projectItem)
      })
    } else {
      const dummyProject = new Project('HOLA PROJECTO 1')
      const dummyProject2 = new Project('HOLA PROJECTO 2')
      const dummyProject3 = new Project('HOLA PROJECTO 3')
      const dummyToDo1 = new ToDo('Wash clothes', 'Wash clothes', 2)
      const dummyToDo2 = new ToDo('Wash clothes', 'Wash clothes', 2)
      const dummyToDo3 = new ToDo('Wash clothes', 'Wash clothes', 2)

      appList.addItem(dummyProject)
      appList.addItem(dummyProject2)
      appList.addItem(dummyProject3)
      dummyProject.addItem(dummyToDo1)
      dummyProject.addItem(dummyToDo2)
      dummyProject3.addItem(dummyToDo3)
      StorageManager.saveItem('list', appList.getList())
    }
    return appList
  }

  static removeProjectAndUpdateList(index) {
    const appList = this.initilizeAppList()
    appList.removeItem(index)
    StorageManager.saveItem('list', appList.getList())
    return appList.getList()
  }

  static removeTodoAndUpdateList(projectIndex, todoIndex) {
    const appList = this.initilizeAppList()
    const projectNode = appList.getItem(projectIndex)
    projectNode.removeItem(todoIndex)
    return appList.getList()
  }
}

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
    console.log('Agregue algo', this.#list)
  }

  getItem(index) {
    return this.#list[index]
  }

  removeItem(index) {
    this.#list.splice(index, 1)
    console.log('borre un proyecto', this.#list)
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
}

export class ToDo {
  constructor(title, description, priority, isComplete = false) {
    this.title = title
    this.description = description
    this.priority = priority
    this.isComplete = isComplete
    this.setDueDate()
  }

  setDueDate(daysToAdd = 0) {
    const currentDate = new Date()
    currentDate.setDate(currentDate.getDate() + daysToAdd)
    this.dueDate = currentDate
  }

  setPriority(newPriority) {
    this.priority = newPriority
  }

  toggleIsComplete() {
    this.isComplete = !this.isComplete
    console.log('se ejecuto el toggle')
  }
}

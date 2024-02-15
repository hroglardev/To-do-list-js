import { List, ToDo, Project } from '../appLogic/appClasses'
import { StorageManager } from './storageManager'

export class AppManager {
  static appList = AppManager.initilizeAppList()

  static initilizeAppList() {
    const list = StorageManager.loadItem('list')
    const appList = new List()

    if (list !== null && list.length > 0) {
      list.forEach((project) => {
        const projectItem = new Project(project.title)
        appList.addItem(projectItem)
        const toDos = StorageManager.loadItem(project.title)
        if (toDos !== null && toDos.length > 0) {
          toDos.forEach((todo) => {
            const toDoItem = new ToDo(todo.title, todo.description, todo.priority, todo.isComplete, todo.dueDate)
            projectItem.addItem(toDoItem)
          })
        }
      })
    } else {
      const baseProject = new Project('Base project')
      const baseProject2 = new Project('Base project2')
      const baseProject3 = new Project('Base project3')
      const baseProject4 = new Project('Base project4')
      const baseProject5 = new Project('Base project5')
      const baseProject6 = new Project('Base project6')

      const baseTodo = new ToDo('Do the dishes', 'Mom expects me to do the dishes today', 1)
      const baseTodo2 = new ToDo('Do laundry', 'Mom expects me to do the laundry today', 1)
      const baseTodo3 = new ToDo('Mow lawn', 'Mom expects me to mow the lawn today', 1)
      const baseTodo4 = new ToDo('Make bed', 'Mom expects me to make my today', 1)
      const baseTodo5 = new ToDo('Walk dog', 'Mom expects me to walk the dog today', 1)
      const baseTodo6 = new ToDo('Cook dinner', 'Mom expects me to cook dinner today', 1)

      appList.addItem(baseProject)
      appList.addItem(baseProject2)
      appList.addItem(baseProject3)
      appList.addItem(baseProject4)
      appList.addItem(baseProject5)
      appList.addItem(baseProject6)
      baseProject.addItem(baseTodo)
      baseProject.addItem(baseTodo2)
      baseProject.addItem(baseTodo3)
      baseProject3.addItem(baseTodo4)
      baseProject3.addItem(baseTodo5)
      baseProject3.addItem(baseTodo6)

      StorageManager.saveItem('list', appList.getList())
      StorageManager.saveItem(baseProject.getTitle(), baseProject.getList())
      StorageManager.saveItem(baseProject2.getTitle(), baseProject2.getList())
      StorageManager.saveItem(baseProject3.getTitle(), baseProject3.getList())
      StorageManager.saveItem(baseProject4.getTitle(), baseProject4.getList())
      StorageManager.saveItem(baseProject5.getTitle(), baseProject5.getList())
      StorageManager.saveItem(baseProject6.getTitle(), baseProject6.getList())
    }

    return appList
  }

  static addProjectAndUpdateList(projectTitle) {
    const newProject = new Project(projectTitle)
    const listNode = AppManager.appList
    listNode.addItem(newProject)
    StorageManager.saveItem('list', listNode.getList())
    StorageManager.saveItem(projectTitle, newProject.getList())
    return newProject
  }

  static removeProjectAndUpdateList(projectNode) {
    const listNode = AppManager.appList
    const index = listNode.getNodeIndex(projectNode)
    if (index !== -1) {
      listNode.removeItem(index)
      StorageManager.saveItem('list', listNode.getList())
      StorageManager.removeItem(projectNode.getTitle(), projectNode.getList())
    }
  }

  static addTodoAndUpdateList(todoTitle, todoDescription, todoPriority, todoProjectName, todoDueDate) {
    const newTodo = new ToDo(todoTitle, todoDescription, todoPriority, false, todoDueDate)
    const list = AppManager.appList.getList()
    const project = list.find((project) => project.title === todoProjectName)
    project.addItem(newTodo)
    StorageManager.saveItem(todoProjectName, project.getList())
    return newTodo
  }

  static removeTodoAndUpdateList(projectIndex, todoNode) {
    const appList = AppManager.appList
    const projectNode = appList.getItem(projectIndex)
    const todoIndex = projectNode.getNodeIndex(todoNode)
    projectNode.removeItem(todoIndex)
    StorageManager.saveItem(projectNode.getTitle(), projectNode.getList())
  }
}

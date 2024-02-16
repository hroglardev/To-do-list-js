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
      const baseProject = new Project('Project')

      appList.addItem(baseProject)

      StorageManager.saveItem('list', appList.getList())
      StorageManager.saveItem(baseProject.getTitle(), baseProject.getList())
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

  static updateTodoAndUpdateList(projectIndex, todoNode, newTitle, newDescription, newPriority, newDueDate) {
    const appList = AppManager.appList

    const projectNode = appList.getItem(projectIndex)
    todoNode.updateToDo(newTitle, newDescription, newPriority, newDueDate)

    StorageManager.saveItem(projectNode.getTitle(), projectNode.getList())
  }
}

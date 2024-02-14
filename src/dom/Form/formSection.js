import { DomElement, ToDoDomElement, TextElement, ButtonElement } from '../../classes/DomElements'
import { DataManager, StorageManager } from '../../classes/appClasses'

class TodoRenderer extends Renderer {
  static render(projectNode, projectIndex) {
    const list = projectNode.getList()
    const todoIndex = list.length - 1
    const todoNode = projectNode.getItem(todoIndex)
    const projectContainer = document.getElementById(`project-body-${projectIndex}`)
    const card = new DomElement(('article', 'card', `todo-${projectIndex}-${todoIndex}`))
    const toDoElementDom = new ToDoDomElement(projectNode, todoNode.title, todoNode.description, todoNode.priority, todoIndex, todoNode)
    projectContainer.appendChild(card.element)
    card.appendChildren(toDoElementDom.title.element, toDoElementDom.description.element, toDoElementDom.description.element, toDoElementDom.removeButton.element, toDoElementDom.checkButton.element)
    toDoElementDom.checkButton.element.addEventListener('click', () => {
      todoNode.toggleIsComplete()
      this.render(projectNode, projectIndex, todoIndex)
    })
    toDoElementDom.removeButton.element.addEventListener('click', () => {
      DataManager.removeTodoAndUpdateList(projectIndex, todoIndex)
      this.render(projectNode, projectIndex)
    })
  }
}

class ProjectRenderer extends Renderer {
  static render() {
    const listNode = DataManager.appList
    const list = listNode.getList()
    const mainContent = document.querySelector('#content')
    const projectIndex = list.length - 1
    mainContent.innerHTML = ''

    const container = new DomElement('div', 'project-container', `project-${projectIndex}`)
    mainContent.appendChild(container.element)

    const title = new TextElement('h2', 'project-title', '', projectElement.title)
    const removeButton = new ButtonElement('button', 'remove-project', '', 'Delete project')
    removeButton.element.addEventListener('click', () => {
      DataManager.removeProjectAndUpdateList(projectIndex, listNode)
      this.render(listNode)
      if (projectIndex === 0) {
        StorageManager.clearStorage()
      }
    })

    const projectBox = new DomElement('div', 'project-body', `project-body-${projectIndex}`)
    container.appendChildren(title.element, removeButton.element, projectBox.element)
  }
}

class ListRenderer extends Renderer {
  static render() {
    const listNode = DataManager.appList
    const list = listNode.getList()
    if (list.length > 0) {
      list.forEach((project, index) => {
        const projectList = project.getList()
        ProjectRenderer.render()
        projectList.forEach((_todo) => {
          TodoRenderer.render(project, index)
        })
      })
    }
  }
}

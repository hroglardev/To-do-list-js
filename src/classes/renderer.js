import { ButtonElement, DomElement, TextElement, ToDoDomElement } from './DomElements'
import { DataManager, StorageManager } from './appClasses'
import { FormSection, TodoForm } from './formClasses'

export class Renderer {
  static render() {
    throw Error('Hola')
  }
}

export class FormRenderer extends Renderer {
  static render() {
    const header = document.querySelector('#header')

    const projectTitle = new FormSection('Insert the name of your project')
    const toDoTitle = new FormSection('Input your task')
    const toDoDescription = new FormSection('Describe the task')
    const toDoPriority = new FormSection('Whats the priority?')

    const form = new TodoForm('form', 'todo-form', '', projectTitle.input.element, toDoTitle.input.element, toDoDescription.input.element, toDoPriority.input.element)

    form.appendChildren(
      projectTitle.label.element,
      projectTitle.input.element,
      projectTitle.error.element,
      toDoTitle.label.element,
      toDoTitle.input.element,
      toDoTitle.error.element,
      toDoDescription.label.element,
      toDoDescription.input.element,
      toDoDescription.error.element,
      toDoPriority.label.element,
      toDoPriority.input.element,
      toDoPriority.error.element
    )
    header.appendChild(form.element)
  }
}

class ProjectRenderer extends Renderer {
  render(projectNode) {
    const listNode = DataManager.appList
    const list = listNode.getList()

    if (list.length > 0) {
      const mainContent = document.querySelector('#content')
      const projectIndex = listNode.getNodeIndex(projectNode)
      const containerExists = document.querySelector(`#project-${projectIndex}`)
      if (containerExists !== null) {
        containerExists.remove()
      }

      const container = new DomElement('div', 'project-container', `project-${projectIndex}`)
      mainContent.appendChild(container.element)

      const title = new TextElement('h2', 'project-title', '', projectNode.title)
      const removeButton = new ButtonElement('button', 'remove-project', '', 'Delete project')
      removeButton.element.addEventListener('click', () => {
        DataManager.removeProjectAndUpdateList(projectNode)
        container.element.remove()
        if (projectIndex === 0 && list.length === 1) {
          StorageManager.clearStorage()
        }
      })

      const projectBox = new DomElement('div', 'project-body', `project-body-${projectIndex}`)
      container.appendChildren(title.element, removeButton.element, projectBox.element)
    }
  }
}

class TodoRenderer extends Renderer {
  render(projectNode, todoNode) {
    const listNode = DataManager.appList
    const list = projectNode.getList()
    if (list.length > 0) {
      const projectIndex = listNode.getNodeIndex(projectNode)
      const todoIndex = projectNode.getNodeIndex(todoNode)

      const projectContainer = document.getElementById(`project-body-${projectIndex}`)

      const card = new DomElement('article', 'card', `todo-${projectIndex}-${todoIndex}`)
      const toDoElementDom = new ToDoDomElement(projectNode, todoNode.title, todoNode.description, todoNode.priority, todoIndex, todoNode)

      projectContainer.appendChild(card.element)
      card.appendChildren(toDoElementDom.title.element, toDoElementDom.description.element, toDoElementDom.description.element, toDoElementDom.removeButton.element, toDoElementDom.checkButton.element)
      toDoElementDom.checkButton.element.addEventListener('click', () => {
        todoNode.toggleIsComplete()
        ListRenderer.render()
      })
      toDoElementDom.removeButton.element.addEventListener('click', () => {
        DataManager.removeTodoAndUpdateList(projectIndex, todoNode)
        card.element.remove()
      })
    }
  }
}

export class ListRenderer extends Renderer {
  static render() {
    const listNode = DataManager.appList
    const projectRenderer = new ProjectRenderer()
    const todoRenderer = new TodoRenderer()
    const list = listNode.getList()

    list.forEach((project) => {
      const projectList = project.getList()
      projectRenderer.render(project)
      projectList.forEach((todo) => {
        todoRenderer.render(project, todo)
      })
    })
  }
}

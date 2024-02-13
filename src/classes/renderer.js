import { ButtonElement, DomElement, TextElement, ToDoDomElement } from './DomElements'
import { DataManager } from './appClasses'
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

export class ProjectRenderer extends Renderer {
  static render() {
    const listNode = DataManager.initilizeAppList()
    const list = listNode.getList()
    const mainContent = document.querySelector('#content')

    list.forEach((projectElement, index) => {
      const container = new DomElement('div', 'project-container', `project-${index}`)
      mainContent.appendChild(container.element)
      console.log('proyecto', projectElement)
      const title = new TextElement('h2', 'project-title', '', projectElement.title)
      const removeButton = new ButtonElement('button', 'remove-project', '', 'Delete project')
      removeButton.element.addEventListener('click', () => listNode.removeItem(index))
      const projectBox = new DomElement('div', 'project-body', `project-body-${index}`)
      container.appendChildren(title.element, removeButton.element, projectBox.element)
      TodoRenderer.render(projectElement, index)
    })
  }
}

export class TodoRenderer extends Renderer {
  static render(projectNode, projectIndex) {
    const list = projectNode.getList()

    const projectContainer = document.getElementById(`project-body-${projectIndex}`)
    if (list.length !== 0) {
      list.forEach((todoElement, index) => {
        const card = new DomElement('article', 'card', `todo-${projectIndex}-${index}`)
        const toDoElementDom = new ToDoDomElement(projectNode, todoElement.title, todoElement.desciption, todoElement.priority, index, todoElement)
        projectContainer.appendChild(card.element)
        card.appendChildren(
          toDoElementDom.title.element,
          toDoElementDom.description.element,
          toDoElementDom.description.element,
          toDoElementDom.removeButton.element,
          toDoElementDom.checkButton.element
        )
        toDoElementDom.checkButton.element.addEventListener('click', () => {
          todoElement.toggleIsComplete()
          this.render(projectNode, projectIndex)
        })

        toDoElementDom.removeButton.element.addEventListener('click', () => {
          DataManager.removeTodoAndUpdateList(projectIndex, index)
          this.render(projectNode, projectIndex)
        })
      })
    }
  }
}

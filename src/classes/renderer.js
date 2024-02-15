import { DataManager } from './appClasses'
import { TodoFormDomElement, ProjectDomElement, ToDoDomElement } from './domSpecialElements'
import { FormSection, ProjectForm } from './formElements'
import { ButtonElement } from './domBasicElements'

export class Renderer {
  static render() {
    throw Error('Hola')
  }
}

export class ToDoFormRenderer extends Renderer {
  static render() {
    const listNode = DataManager.appList
    const projectNames = listNode.getList().map((project) => project.title)
    const domForm = document.querySelector('.todo-form')
    if (domForm !== null) {
      domForm.remove()
    }
    const form = new TodoFormDomElement(projectNames)
    form.addSubmitListener()
  }
}

export class ProjectFormRenderer extends Renderer {
  static render() {
    const header = document.querySelector('#header')

    const projectTitle = new FormSection("Input your project's name:")
    const submitButton = new ButtonElement('button', 'create-project', '', 'Create')
    const form = new ProjectForm('form', 'project-form', '', projectTitle.input.element.value)

    form.appendChildren(projectTitle.container.element, submitButton.element)
    form.element.addEventListener('submit', (event) => {
      const mainContent = document.querySelector('#content')
      const listNode = DataManager.appList
      const projectNode = form.submitForm(event, projectTitle.input.element.value)
      const projectIndex = listNode.getNodeIndex(projectNode)
      const newProject = new ProjectDomElement(projectNode.getTitle(), projectIndex)
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
  render(projectNode) {
    const listNode = DataManager.appList
    const list = listNode.getList()

    if (list.length > 0) {
      const projectIndex = listNode.getNodeIndex(projectNode)
      const containerExists = document.querySelector(`#project-${projectIndex}`)
      if (containerExists !== null) {
        containerExists.remove()
      }

      const newProject = new ProjectDomElement(projectNode.title, projectIndex)
      newProject.addRemoveListener()
    }
  }
}

class TodoRenderer extends Renderer {
  render(projectNode, todoNode) {
    const listNode = DataManager.appList
    const list = projectNode.getList()
    if (list.length > 0) {
      const projectIndex = listNode.getNodeIndex(projectNode)

      const projectContainer = document.getElementById(`project-body-${projectIndex}`)

      const toDoElementDom = new ToDoDomElement(todoNode.title, todoNode.description, todoNode.priority)

      projectContainer.appendChild(toDoElementDom.card.element)

      toDoElementDom.addToggleListener(todoNode)
      toDoElementDom.addRemoveListener(projectIndex, todoNode)
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

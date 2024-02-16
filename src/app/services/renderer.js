import { AppManager } from './appManager'
import { TodoFormDomElement, ProjectDomElement, ToDoDomElement } from '../domElements/domSpecialElements'
import { ProjectForm, TextFormSection } from '../domElements/formElements'
import { ButtonElement } from '../domElements/domBasicElements'
import { Validator } from './validator'
import '../styles/header.css'
import '../styles/main.css'
import '../styles/aside.css'

export class Renderer {
  static render() {
    throw Error('The Parent class cannot use this method')
  }
}

export class ToDoFormRenderer extends Renderer {
  static render() {
    const listNode = AppManager.appList
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

    const projectTitle = new TextFormSection("Input your project's name:", 'todo-input')
    const submitButton = new ButtonElement('button', 'create-project', '', 'Create')
    submitButton.element.setAttribute('disabled', true)
    const form = new ProjectForm('form', 'project-form', '', projectTitle.input.element.value)
    form.element.addEventListener('input', () => Validator.activateProjectButton(projectTitle.input.element.value))
    form.appendChildren(projectTitle.container.element, submitButton.element)

    form.element.addEventListener('submit', (event) => {
      submitButton.element.setAttribute('disabled', true)
      const mainContent = document.querySelector('#content')
      const listNode = AppManager.appList
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

export class ProjectRenderer extends Renderer {
  static render(projectNode) {
    const listNode = AppManager.appList
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

export class TodoRenderer extends Renderer {
  static render(projectNode, todoNode) {
    const listNode = AppManager.appList
    const list = projectNode.getList()
    if (list.length > 0) {
      const projectIndex = listNode.getNodeIndex(projectNode)
      const projectContainer = document.getElementById(`project-body-${projectIndex}`)

      const containerExists = document.getElementById(`todo-${projectIndex}-${todoNode.title.replace(/\s/g, '-')}`)

      if (containerExists !== null) {
        containerExists.remove()
      }

      const toDoElementDom = new ToDoDomElement(todoNode.title, todoNode.description, todoNode.priority, todoNode.dueDate, projectIndex, todoNode.isComplete, todoNode)

      projectContainer.appendChild(toDoElementDom.card.element)

      toDoElementDom.addToggleListener(todoNode, projectIndex)
      toDoElementDom.addRemoveListener(projectIndex, todoNode)
    }
  }
}

export class ListRenderer extends Renderer {
  static render() {
    const listNode = AppManager.appList
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

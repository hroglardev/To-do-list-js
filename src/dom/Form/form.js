import { DataManager } from '../../classes/appClasses'

import { ButtonElement, DomElement, TextElement, ToDoDomElement } from '../../classes/DomElements'

// export const displayContent = () => {
//   const listNode = DataManager.initilizeAppList()
//   const list = listNode.getList()
//   const mainContent = document.querySelector('#content')
//   if (list) {
//     list.forEach((projectElement, index) => {
//       const projectNode = list.getItem(index)
//       const container = new DomElement('div', 'project-container', `project-${index}`)
//       mainContent.appendChild(container.element)

//       const title = new TextElement('h2', 'project-title', '', projectElement.title)
//       const removeButton = new ButtonElement('button', 'remove-project', '', listNode.removeItem(index))
//       const project = new DomElement('div', 'project-body', '')
//       container.appendChildren(title.element, removeButton.element, project.element)

//       const toDolist = projectElement.getList()

//       toDolist.forEach((todo, index) => {
//         const card = new DomElement('article', 'card', `todo-${container.element.id}-${index}`)
//         const toDoElement = new ToDoDomElement(projectNode, todo.title, todo.description, todo.priority, index, todo)
//         project.appendChildren(card.element)
//         card.appendChildren(toDoElement.title.element, toDoElement.description.element, toDoElement.description.element, toDoElement.removeButton.element, toDoElement.checkButton.element)
//       })
//     })
//   }
// }

export const displayContent = () => {
  const mainContent = document.querySelector('#content')
  const listNode = DataManager.initilizeAppList()
  const list = listNode.getList()

  if (list.length > 0) {
    list.forEach((projectElement, index) => {
      const projectNode = listNode.getItem(index)
      const container = new DomElement('div', 'project-container', `project-${index}`)
      mainContent.appendChild(container.element)

      const title = new TextElement('h2', 'project-title', '', projectElement.title)
      const removeButton = new ButtonElement('button', 'remove-project', '', () => {
        const updatedList = DataManager.removeItemAndUpdateList(index)

        renderContent(updatedList)
      })

      const project = new DomElement('div', 'project-body', '')
      container.appendChildren(title.element, removeButton.element, project.element)

      const toDolist = projectElement.getList()

      if (toDolist.length > 0) {
        toDolist.forEach((todo, todoIndex) => {
          const card = new DomElement('article', 'card', `todo-${container.element.id}-${todoIndex}`)
          const toDoElement = new ToDoDomElement(projectNode, todo.title, todo.description, todo.priority, todoIndex, todo)
          container.appendChildren(card.element)
          card.appendChildren(toDoElement.title.element, toDoElement.description.element, toDoElement.description.element, toDoElement.removeButton.element, toDoElement.checkButton.element)
        })
      }
    })
  }
}

// Add this function to render the content based on the updated list
const renderContent = (list) => {
  const mainContent = document.querySelector('#content')
  mainContent.innerHTML = ''
  // Render content based on the updated list
  list.forEach((projectElement, index) => {
    const container = new DomElement('div', 'project-container', `project-${index}`)
    mainContent.appendChild(container.element)
  })
}

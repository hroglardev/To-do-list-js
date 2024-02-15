'use strict'

import './styles.css'
import { ToDoFormRenderer, ListRenderer, ProjectFormRenderer } from './classes/services/renderer'
import { AppManager } from './classes/services/appManager'

AppManager.initilizeAppList()
ToDoFormRenderer.render()
ProjectFormRenderer.render()
ListRenderer.render()

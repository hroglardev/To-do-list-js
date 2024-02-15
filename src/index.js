'use strict'

import './styles.css'
import { ToDoFormRenderer, ListRenderer, ProjectFormRenderer } from './classes/renderer'
import { AppManager } from './classes/appManager'

AppManager.initilizeAppList()
ToDoFormRenderer.render()
ProjectFormRenderer.render()
ListRenderer.render()

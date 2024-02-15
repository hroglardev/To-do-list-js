'use strict'

import './styles.css'
import { ToDoFormRenderer, ListRenderer, ProjectFormRenderer } from './app/services/renderer'
import { AppManager } from './app/services/appManager'

AppManager.initilizeAppList()
ToDoFormRenderer.render()
ProjectFormRenderer.render()
ListRenderer.render()

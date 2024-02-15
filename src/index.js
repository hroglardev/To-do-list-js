'use strict'

import './styles.css'
import { ToDoFormRenderer, ListRenderer, ProjectFormRenderer } from './classes/renderer'
import { DataManager } from './classes/appClasses'

DataManager.initilizeAppList()
ToDoFormRenderer.render()
ProjectFormRenderer.render()
ListRenderer.render()

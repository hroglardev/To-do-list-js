'use strict'

import './styles.css'
import { FormRenderer, ListRenderer, ProjectRenderer, TodoRenderer } from './classes/renderer'
import { DataManager } from './classes/appClasses'
import { displayContent } from './dom/Form/form'

DataManager.initilizeAppList()
FormRenderer.render()
ListRenderer.render()

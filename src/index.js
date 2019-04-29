// la libreria React es opcional si la quieres usar o no 
// la carpeta *app* esta la estructura de carpetas a mi gusto, las puedes cambiar
// puedes eliminar la carpeta *app*  y usar puro JS, esta es la carpeta raiz q lee Webpack

import React from 'react'
import { render } from 'react-dom'
import App from './app/App'


render(<App/>, document.getElementById('root'))


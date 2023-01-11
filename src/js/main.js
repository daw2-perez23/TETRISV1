// Import our custom CSS

import '../scss/styles.scss'

// Import only the Bootstrap components we need
import { Dropdown, Offcanvas, Popover } from 'bootstrap';
import { panel } from './panel.js';

// Create an example popover
document.querySelectorAll('[data-bs-toggle="popover"]')
  .forEach(popover => {
    new Popover(popover)
  })

//Llamamos a todas las funciones

panel.crearNuevaPieza()

panel.insertarPieza()

panel.pintaPanel()

panel.controlTeclas()

document.querySelector("#jugar").addEventListener("click", panel.iniciarMovimiento)
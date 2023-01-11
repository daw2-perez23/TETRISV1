import { models } from './models.js';
import { panel } from './panel.js'

export class ModeloPieza{

    constructor(modelo){
        this.modelo = modelo
        this.angulo = 0
        this.matriz = models[modelo].matriz[this.angulo]
        this.x = 0
        this.y = 0
        this.longitud = this.matriz[0].length
        this.altura =  this.matriz.length
        
    }
    
    girar = () => {
        if(this.angulo<=3){

            this.angulo = this.angulo +1

        }
        
        if(this.angulo>3){

            this.angulo = 0

        }

        this.matriz = models[this.modelo].matriz[this.angulo]
        this.longitud = this.matriz[0].length
        this.altura = this.matriz.length

    }

}


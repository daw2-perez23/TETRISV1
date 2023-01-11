
import { ModeloPieza } from "./modeloPieza"


//Panel Js
export const panel = {
    matriz:
    [
         [1,0,0,0,0,0,0,0,0,0,0,1],
         [1,0,0,0,0,0,0,0,0,0,0,1],
         [1,0,0,0,0,0,0,0,0,0,0,1],
         [1,0,0,0,0,0,0,0,0,0,0,1],
         [1,0,0,0,0,0,0,0,0,0,0,1],
         [1,0,0,0,0,0,0,0,0,0,0,1],
         [1,0,0,0,0,0,0,0,0,0,0,1],
         [1,0,0,0,0,0,0,0,0,0,0,1],
         [1,0,0,0,0,0,0,0,0,0,0,1],
         [1,0,0,0,0,0,0,0,0,0,0,1],
         [1,0,0,0,0,0,0,0,0,0,0,1],
         [1,0,0,0,0,0,0,0,0,0,0,1],
         [1,0,0,0,0,0,0,0,0,0,0,1],
         [1,0,0,0,0,0,0,0,0,0,0,1],
         [1,0,0,0,0,0,0,0,0,0,0,1],
         [1,0,0,0,0,0,0,0,0,0,0,1],
         [1,0,0,0,0,0,0,0,0,0,0,1],
         [1,0,0,0,0,0,0,0,0,0,0,1],
         [1,0,0,0,0,0,0,0,0,0,0,1],
         [1,0,0,0,0,0,0,0,0,0,0,1],
         [1,0,0,0,0,0,0,0,0,0,0,1],
         [1,1,1,1,1,1,1,1,1,1,1,1],
    ],

    pintaPanel: () => {
        var tablaHTML = ` `
        var  color = ' '

        for(let index=0;index<panel.matriz.length-1;index++){

            tablaHTML += `<div class="piezaFila"> `

            for(let index1=2;index1<panel.matriz[index1].length;index1++){

                if(panel.matriz[index][index1-1]==2){
                    var color = 'primary'
                }else if(panel.matriz[index][index1-1]==3){
                    var color = 'success'
                }else if(panel.matriz[index][index1-1]==4){
                    var color = 'warning'
                }else{
                    color = " "
                }

                tablaHTML += `<div class="celda bg-${color}"></div>`
            }

            tablaHTML += `</div>`
        }

       document.querySelector("#panel").innerHTML = tablaHTML

    },
        
    crearNuevaPieza: ()=>{
        let pieza = (Math.random() * 2)
        let piezaFinal = Math.round(pieza)

        panel.nuevaPieza = new ModeloPieza(piezaFinal, 0)

        let x = Math.ceil(Math.random()*(10-panel.nuevaPieza.longitud))

        panel.nuevaPieza.x = x
        
    },

    insertarPieza: () =>{
        var x = panel.nuevaPieza.x
        var y = panel.nuevaPieza.y

        for(let altX = 0; altX<panel.nuevaPieza.altura; altX++, y++){

            for(let longY=0;longY<panel.nuevaPieza.longitud; longY++, x++){

                panel.matriz[y][x]=3
                
            }

            x = panel.nuevaPieza.x

        }

    },

    controlTeclas: () =>{
        //Detectamos las teclas del teclado con un event listerner
        document.addEventListener("keydown", teclas);

        function teclas(){

            switch (event.key){
                case "ArrowDown":
                    panel.bajar()

                    break;
                case "ArrowUp":
                    panel.rotar();
                    panel.nuevaPieza.girar()
                    panel.insertarPieza()
                    panel.pintaPanel()

                    break;
                case "ArrowLeft":
                    panel.moverIzq()

                    break;
                case "ArrowRight":
                    panel.moverDra()

                    break;
                default:

                return; 
            }

        }

    },
    
    moverDra: () => {
        
        panel.borrarPieza()

            if(panel.nuevaPieza.x+panel.nuevaPieza.longitud <=10){

                panel.nuevaPieza.x++

            }

        panel.insertarPieza()
        panel.pintaPanel()
        panel.iniciarMovimiento()

    },

    moverIzq: () => {
        panel.borrarPieza()

            if(panel.nuevaPieza.x+panel.nuevaPieza.longitud>panel.nuevaPieza.longitud+1){

                panel.nuevaPieza.x--

            }

        panel.insertarPieza()
        panel.pintaPanel()
        panel.iniciarMovimiento()

    },

    bajar: () => {
        
        panel.borrarPieza()

            if(panel.nuevaPieza.y+panel.nuevaPieza.altura <21){

                panel.nuevaPieza.y++

            }

        panel.insertarPieza()
        panel.pintaPanel()
        panel.iniciarMovimiento()

    },

    rotar: () => {

        panel.borrarPieza()
        panel.nuevaPieza.girar()
        panel.nuevaPieza.girar()
        panel.nuevaPieza.girar()
        panel.nuevaPieza.girar()
        
    },

    borrarPieza: () =>{
        var x = panel.nuevaPieza.x
        var y = panel.nuevaPieza.y

        for(let altX=0; altX<panel.nuevaPieza.altura; altX++, y++){

            for(let longY=0;longY<panel.nuevaPieza.longitud; longY++, x++){

                panel.matriz[y][x]=0

            }

            x=panel.nuevaPieza.x

        }

    },

    iniciarMovimiento: () =>{
        
        let tiempo = setTimeout(panel.bajar, 500)
        
    }

}

addEventListener("DOMContentLoaded", ()=>{
    
   // 10. Escribir un algoritmo que permita obtener las raíces reales de la ecuación de segundo grado: A * x2 +
    // b * x + c, siendo X un valor constante.

    let a = Number(prompt(`Ingrese el valor de a`))
    let b = Number(prompt(`Ingrese el valor de b`))
    let c = Number(prompt(`Ingrese el valor de c`))


    let raiz1 = ((-b + Math.sqrt(b**2 - 4 * a * c)) / (2 * a))
    
    let raiz2 = ((-b - Math.sqrt(b**2 - 4 * a * c)) / (2 * a))

    console.log(`%cLa raiz 1 es:  ${raiz1}`, `background-color: #2aca88; border-radius: 2px; border: 4px groove greenyellow;`)

    console.log(`%cLa raiz 2 es: ${raiz2}`, `background-color: #f49efc; border-radius: 2px; border: 4px dotted rgb(106, 106, 255);color: black;`)
})
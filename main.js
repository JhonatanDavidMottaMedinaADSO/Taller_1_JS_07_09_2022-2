addEventListener("DOMContentLoaded", ()=>{
    
    // 13. Realice un algoritmo que a partir de proporcionarle la velocidad de un automóvil expresada en
    // kilómetros por hora, proporcione la velocidad en metros por segundos.
    
    

    let kmH = Number(prompt(`¿Velocidad del vehiculo en kilometros por hora?`))

    let metSeg = ( kmH * 1000 * (1/3600) )
    
    console.log(`%cLa velocidad en metros por segundos es ${metSeg}`, `background-color: #2aca88; border-radius: 2px; border: 4px groove greenyellow;`)

    
})
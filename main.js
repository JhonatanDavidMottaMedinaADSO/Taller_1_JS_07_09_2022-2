addEventListener("DOMContentLoaded", ()=>{
    
    // 15. Hacer un diagrama para convertir de grados centígrados a grados Fahrenheit
    
    let cen = Number(prompt(`Grados centigrados:`))

    let fah = (cen * 9/5) + 32 

    console.log(`%c ${cen}°Celsius son ${fah}°Fahrenheit`, `background-color: #2aca88; border-radius: 2px; border: 4px groove greenyellow;`)
})
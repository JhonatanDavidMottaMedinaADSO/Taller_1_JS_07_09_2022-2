addEventListener("DOMContentLoaded", ()=>{
    
    // 19. Un estudiante realiza cuatro exámenes. Realizar el pseudocódigo que representen el algoritmo
    // correspondiente para obtener el promedio de las calificaciones obtenidas. las calificaciones van 1 a 5 puntos.             
    
    let cali1 =  Number(prompt(`Ingrese la calificación del examen 1:`))
    let cali2 =  Number(prompt(`Ingrese la calificación del examen 2:`))
    let cali3 =  Number(prompt(`Ingrese la calificación del examen 3:`))
    let cali4 =  Number(prompt(`Ingrese la calificación del examen 4:`))

    let promCali = (cali1 + cali2 + cali3 + cali4) / 4


    console.log(`%cEl promedio de las cuatro calificaciones es ${promCali}`, `background-color: yellow; border-radius: 2px; border: 4px groove orange; color: black;`)
})
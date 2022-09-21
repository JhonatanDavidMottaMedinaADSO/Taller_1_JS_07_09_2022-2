addEventListener("DOMContentLoaded", ()=>{
    
    // 18. Calcular el sueldo de un empleado dados como datos de entrada: el nombre, hrs. De trabajo y el pago
    // en hora. Pagohora=15300
                        
    
    let nom = prompt(`ingrese su nombre`)
    let horaT = Number(prompt(`Horas trabajadas`))

    let pagoxHoras = horaT * 15300


    console.log(`%c${nom} su pago es ${pagoxHoras}`, `background-color: yellow; border-radius: 2px; border: 4px groove orange; color: black;`)
})
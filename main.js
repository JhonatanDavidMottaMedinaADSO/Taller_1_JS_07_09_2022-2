addEventListener("DOMContentLoaded", ()=>{
    
    // 20. Un vendedor recibe un sueldo base más el 10% de comisión sobre sus ventas. Si en un mes
    // cualquiera hace tres ventas por valores: v1, v2 y v3, ¿cuánto recibirá por comisión? y ¿cuánto en total sueldo del vendedor?  
    
    let sueldo = Number(prompt(`Ingrese su sueldo`))
    let v1 =  Number(prompt(`Ingrese el valor de la venta 1:`))
    let v2 =  Number(prompt(`Ingrese el valor de la venta 2::`))
    let v3 =  Number(prompt(`Ingrese el valor de la venta 3::`))
   
    let comiVentas = (v1 + v2 +v3) * 0.1
    let sueldoTotal = (comiVentas + sueldo)



    console.log(`%cUsted recibirá por comisiones ${comiVentas} y el total de su sueldo mas comisiones es ${sueldoTotal}`, `background-color: yellow; border-radius: 2px; border: 4px groove orange; color: black;`)
})
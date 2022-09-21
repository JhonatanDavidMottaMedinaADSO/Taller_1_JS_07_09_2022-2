addEventListener("DOMContentLoaded", ()=>{
    
    // 14. Una farmacia aplica al precio de los remedios el 10% de descuento, hacer un programa que
    // ingresando el costo de los medicamentos calcules el descuento y el precio final.
    
    let med = Number(prompt(`¿Cuál es el precio del medicamento?`))

    let des = med * 0.1
    let precioF = med - des
    console.log(`Su descuento es de ${des}`)
    console.log(`%cEl precio final aplicando el descuento es: ${precioF}`, `background-color: #2aca88; border-radius: 2px; border: 4px groove greenyellow;`)

    
})
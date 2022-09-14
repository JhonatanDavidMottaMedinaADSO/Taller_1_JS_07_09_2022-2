addEventListener("DOMContentLoaded", ()=>{
    
    // 12. Programa que muestre el pago de una llamada telefónica sabiendo que cada minuto cuesta $355
    // pesos y un IVA de 20%.
    

    let min = Number(prompt(`¿Cúantos minutos estuvo en llamada?`))

    let pago = ( min * 355 )

    let iva = ( pago * 0.2 )

    let pagoIva = ( pago + iva )

    console.log(`%cSu pago por la llamada telefonica sin el iva es: ${pago}`, `background-color: #2aca88; border-radius: 2px; border: 4px groove greenyellow;`)
    console.log(`%cSu pago por la llamada telefonica es:  ${pagoIva}`, `background-color: #2aca88; border-radius: 2px; border: 4px groove greenyellow;`)

})
addEventListener("DOMContentLoaded", ()=>{
    
    // 17. Dado el valor que un cliente paga por un producto, calcular qué valor corresponde al costo total del
    // producto y cuánto es el valor del IVA. Considerando que el porcentaje del IVA puede variar en el
    // tiempo y de un producto a otro, este dato se lee por teclado.
    
    
    let precioP = Number(prompt(`Precio del producto`))
    let ivaP = Number(prompt(`Porcentaje del iva actual`))
    let IVA = precioP * (ivaP/100)
    let totalPago = precioP + IVA

    console.log(`%cEl total a pagar es: ${totalPago}`, `background-color: yellow; border-radius: 2px; border: 4px groove orange; color: black;`)
})
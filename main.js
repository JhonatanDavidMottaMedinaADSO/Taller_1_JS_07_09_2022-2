addEventListener("DOMContentLoaded", ()=>{
    
    // 11. Escribir un programa que calcule el volumen de un elipsoide
    // V = (4/3) * PI * a * b *c
    

    let a = Number(prompt(`Ingrese el valor de a`))
    let b = Number(prompt(`Ingrese el valor de b`))
    let c = Number(prompt(`Ingrese el valor de c`))


    let elip = ((4/3) * Math.PI * a * b * c)

    console.log(`%cEl volumen del elipsoide es:  ${elip}`, `background-color: #2aca88; border-radius: 2px; border: 4px groove greenyellow;`)
    
})
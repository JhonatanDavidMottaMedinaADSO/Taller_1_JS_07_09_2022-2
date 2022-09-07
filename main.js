addEventListener("DOMContentLoaded", ()=>{
    
    // 9. Escribir un programa que calcule el área y el volumen de un cilindro:
    // A = (2 * (PI * r˄2)) + ((2 * PI * r) * h)
    // V = (PI * r2) * h


    let r = Number(prompt(`Ingrese el valor del radio del cilindro`))
    let h = Number(prompt(`Ingrese la altura del cilindro`))


    let area = (2 * (Math.PI * Math.pow(r,2) ))

    let vol = (Math.PI * Math.pow(r,2) * h)

    console.log(`%cEl area del cilindro es ${area}`, `background-color: #2aca88; border-radius: 2px; border: 4px groove greenyellow;`)

    console.log(`%cEl volumen del cilindro es ${vol}`, `background-color: #f49efc; border-radius: 2px; border: 4px dotted rgb(106, 106, 255);color: black;`)
})
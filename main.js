addEventListener("DOMContentLoaded", ()=>{
    // 6. Escribir un programa que calcule la velocidad de un proyectil que recorre 2 Km en 5 minutos. Expresar
    // el resultado en metros/segundo. Velocidad = espacio/tiempo.

    let Kilometro = Number(prompt(`Ingrese una distancia en Km`))

    let Minutos = Number(prompt(`Ìngrse el tiempo en min`))

    let conversionKmMt = Kilometro * 1000

    let conversionMinSeg = Minutos * 60

    let velocidad = conversionKmMt / conversionMinSeg

    console.log(`La velocidad que recorre el proyectil es ${velocidad} mt/seg`); 
 
})
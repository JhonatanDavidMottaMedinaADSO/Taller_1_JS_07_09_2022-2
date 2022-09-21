addEventListener("DOMContentLoaded", ()=>{
    
    // 16. Elaborar un algoritmo para calcular el promedio final de la materia de algoritmos. Dicha calificación se
    // compone de los siguientes porcentajes:
    // • 55% del promedio final de sus calificaciones de los tres(3) parciales.
    // • 30% de la calificación examen final y
    // • 15% de la calificación trabajo final.
    
    let p1 = Number(prompt(`Calificación parcial 1`))
    let p2 = Number(prompt(`Calificación parcial 2`))
    let p3 = Number(prompt(`Calificación parcial 3`))
    let exam = Number(prompt(`Calificación examen final`))
    let traF = Number(prompt(`Calificación trabajo fianl`))

    let promP = (p1 + p2 + p3) / 3
    let prom1 = promP * 0.55
    let prom2 = exam * 0.3
    let prom3 = traF * 0.15
    let sumP = (prom1 + prom2 + prom3)
    
    console.log(`%cSu promedio final es de ${sumP}`, `background-color: #2aca88; border-radius: 2px; border: 4px groove greenyellow;`)
})
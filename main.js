addEventListener("DOMContentLoaded", ()=>{
    // 8. Escribir un programa que evalúe la siguiente expresión:
    // (a+7*c)/(b+2-a)+2*b 

    let a = Number(prompt(`Ingrese el valor de a`))
    let b = Number(prompt(`Ingrese el valor de b`))
    let c = Number(prompt(`Ingrese el valor de c`))

    let rta = (a+7*c)/(b+2-a)+2*b 

    console.log(`%cLa respuesta es ${rta}`, `background-color: #2aca88; border-radius: 2px; border: 4px groove greenyellow;`)

})
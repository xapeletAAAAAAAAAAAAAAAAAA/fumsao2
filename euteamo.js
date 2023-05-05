// function somarnumero(nm1,nm2){
//      const pirocatorio = nm1 >= nm2
//      return pirocatorio
//      }
//      console.log(somarnumero())


// const nm1 = Number(prompt("digite um numero!"))
// const nm2 = Number(prompt("digite outro numero!"))
// function chupar(nm1,nm2){
//    const picatorio = nm1 + nm2
//    return picatorio
// }

// console.log(chupar("a soma dos dois numeros é :",nm1 + nm2))
// console.log(`o primeiro numero ${nm1} é maior que ${nm2}?`, nm1 >= nm2)


// const numpar = Number(prompt("digite um numero par!"))
// function parnm(techereca){
//  const techereca = 0
// }
// console.log(techereca(nm1 % nm2 === 0))


const nm1 = Number(prompt("digite um numero!"))
const nm2 = Number(prompt("digite outro numero!"))

function operasao(nm1,nm2){
    let somaa = nm1 + nm2 
    let menos = nm1 - nm2
    let mutiplica = nm1 * nm2
    let divid = nm1 / 2
    return [somaa,menos,mutiplica,divid]
}
console.log(operasao(nm1,nm2));

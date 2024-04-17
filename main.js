const tariffa = (0.21)

let UserAge = prompt ("inserisci la tua età")

let UserKm = prompt ("Inserisci km")

let Prezzo = ( UserKm * tariffa)

const ScontoJunior = (Prezzo * 20 / 100)

const ScontoSenior = (Prezzo * 40 / 100)

if (UserAge < 18) {
    console.log(Prezzo - ScontoJunior)
    document.getElementById("Stampa").innerHTML= Prezzo.toFixed(1) - ScontoJunior.toFixed(1)
} else if (UserAge > 65) {
    console.log(Prezzo - ScontoSenior)
    document.getElementById("Stampa").innerHTML= Prezzo.toFixed(1) - ScontoSenior.toFixed(1)
} else if (UserAge >= 18 && UserAge < 65) {
    console.log (Prezzo)
    document.getElementById("Stampa").innerHTML= Prezzo.toFixed(1)
}
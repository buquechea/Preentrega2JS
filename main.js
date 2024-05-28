let compra = prompt("Ingresa un album de Pink Floyd que desees comprar.");
const albumes = [{ title: "The Piper at the Gates of Dawn", price: 8000 },{ title: "A Momentary Lapse of Reason", price: 8500 }, { title: "A Saucerful of Secrets", price: 9000 },{title: "More", price: 7500 }, { title: "Ummagumma", price: 9500 }, { title: "Atom Heart Mother", price: 9500 }, { title: "Meddle", price: 9500 }, { title: "Obscured by Clouds", price: 9500 }, { title: "The Dark Side of the Moon", price: 9500 }, { title: "Wish You Were Here", price: 9500 }, { title: "Animals", price: 9500 }, { title: "The Wall", price: 9500 }, { title: "The Final Cut", price: 9500 }, { title: "A Momentary Lapse of Reason", price: 9500 }, { title: "The Division Bell", price: 9500 }, { title: "The Endless River", price: 9500 }]

function comprarAlbum (album){
    let albumSeleccionado = prompt("Usted desea comprar " + album.title  + "?" + " Su valor sera de " + album.price + " pesos argentinos.");
    if (albumSeleccionado.toLowerCase().trim() == "no" || !albumSeleccionado.trim()){
        const confirmacionCompra1 = "Su compra fue rechazada."
        alert(confirmacionCompra1)
    }
    if (albumSeleccionado.toLowerCase().trim() == "si"){
        const confirmacionCompra = "¡Su compra fue un exito!";
        alert(confirmacionCompra);
    }
}

let encontrado = false;
for (let i = 0; i < albumes.length; i++) {
    if (albumes[i].title.toLowerCase() === compra.toLowerCase().trim()) {
        console.log("Album " + albumes[i].title + " encontrado")
        encontrado = true;
        comprarAlbum(albumes[i]);
        break;
    }
}
if (!encontrado) {
    alert(`El disco ${compra} no existe`);
}
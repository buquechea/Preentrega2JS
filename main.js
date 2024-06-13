
const albumesPF = [{ title: "The Piper at the Gates of Dawn", price: 8000 }, { title: "A Momentary Lapse of Reason", price: 8500 }, { title: "A Saucerful of Secrets", price: 9000 }, { title: "More", price: 7500 }, { title: "Ummagumma", price: 9500 }, { title: "Atom Heart Mother", price: 9500 }, { title: "Meddle", price: 9500 }, { title: "Obscured by Clouds", price: 9500 }, { title: "The Dark Side of the Moon", price: 9500 }, { title: "Wish You Were Here", price: 9500 }, { title: "Animals", price: 9500 }, { title: "The Wall", price: 9500 }, { title: "The Final Cut", price: 9500 }, { title: "A Momentary Lapse of Reason", price: 9500 }, { title: "The Division Bell", price: 9500 }, { title: "The Endless River", price: 9500 }]

function comprarAlbum(album) {
    if (!album) {
        alert("Discos disponibles de Pink Floyd: 1. The Piper at the Gates of Dawn, 2. A Momentary Lapse of Reason, 3. A Saucerful of Secrets, 4. More, 5. Ummagumma, 6. Atom Heart Mother, 7. Meddle, 8. Obscured by Clouds, 9. The Dark Side of the Moon, 10. Wish You Were Here, 11. Animals, 12. The Wall, 13. The Final Cut, 14. A Momentary Lapse of Reason, 15. The Division Bell, 16. The Endless River.")
        let compra = prompt("Ingresa el nombre de un album de Pink Floyd que desees comprar.");
        encontrarAlbum(compra)
    }
    let albumSeleccionado = prompt("¿Usted desea comprar " + album.title + "?" + " Su valor sera de " + album.price + " pesos argentinos.");
    if (albumSeleccionado.toLowerCase().trim() === "no" || !albumSeleccionado.trim()) {
        const confirmacionCompra1 = "Su compra fue rechazada."
        alert(confirmacionCompra1)
    }
    if (albumSeleccionado.toLowerCase().trim() === "si") {
        const confirmacionCompra = "¡Su compra fue un exito!";
        alert(confirmacionCompra);
    }
}
comprarAlbum()

function encontrarAlbum(compra) {
    let encontrado = false;
    for (let i = 0; i < albumesPF.length; i++) {
        if (albumesPF[i].title.toLowerCase() === compra.toLowerCase().trim()) {
            console.log("Album " + albumesPF[i].title + " encontrado")
            encontrado = true;
            comprarAlbum(albumesPF[i]);
            break;
        }
    }
    if (!encontrado) {
        alert(`El disco ${compra} no existe`);
        comprarAlbum()
    }
}

function passwordJS() {
    var password = prompt("Unesite lozinku da biste preuzeli fajl:");
    if (password.toLowerCase() == "smartpredavac") {
        window.open("./JavaScript-resenje.zip");
    } else {
        alert("Lozinka nije ispravna! Pokušajte ponovo!");
    }
}

function passwordJQ() {
    var password = prompt("Unesite lozinku da biste preuzeli fajl:");
    if (password.toLowerCase() == "smartpredavac") {
        window.open("./jQuery-resenje.zip");
    } else {
        alert("Lozinka nije ispravna! Pokušajte ponovo!");
    }
}

function passwordCSS() {
    var password = prompt("Unesite lozinku da biste preuzeli fajl:");
    if (password.toLowerCase() == "smartpredavac") {
        window.open("./CSS-sajt-resenje.zip");
    } else {
        alert("Lozinka nije ispravna! Pokušajte ponovo!");
    }
}
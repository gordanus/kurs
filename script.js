function getPassCSS() {
    var modal = document.getElementById("modalBodyCSS");
    var input = document.getElementById("passwordCSS").value;
    var btn = document.getElementById("modalBtnCSS")
    var paragraph = document.createElement("p");
    paragraph.setAttribute("class", "warning");

    if (input === "") {
        paragraph.innerHTML = "Polje ne može ostati prazno!";
        modal.append(paragraph);
    } else if (input.toLowerCase().trim() === "cssrules") {
        btn.setAttribute("data-dismiss", "modal");
        window.open("./CSS-sajt-resenje.zip", "_self");
    } else {
        paragraph.innerHTML = "Lozinka nije ispravna! Pokušajte ponovo.";
        modal.append(paragraph);

    }
}

function getPassJS() {
    var modal = document.getElementById("modalBodyJS");
    var input = document.getElementById("passwordJS").value;
    var btn = document.getElementById("modalBtnJS")
    var paragraph = document.createElement("p");
    paragraph.setAttribute("class", "warning");

    if (input === "") {
        paragraph.innerHTML = "Polje ne može ostati prazno!";
        modal.append(paragraph);
    } else if (input.toLowerCase().trim() === "jsawesome") {
        btn.setAttribute("data-dismiss", "modal");
        window.open("./JavaScript-resenje.zip", "_self");
    } else {
        paragraph.innerHTML = "Lozinka nije ispravna! Pokušajte ponovo.";
        modal.append(paragraph);

    }
}

function getPassJQ() {
    var modal = document.getElementById("modalBodyJQ");
    var input = document.getElementById("passwordJQ").value;
    var btn = document.getElementById("modalBtnJQ")
    var paragraph = document.createElement("p");
    paragraph.setAttribute("class", "warning");

    if (input === "") {
        paragraph.innerHTML = "Polje ne može ostati prazno!";
        modal.append(paragraph);
    } else if (input.toLowerCase().trim() === "jqueryninja") {
        btn.setAttribute("data-dismiss", "modal");
        window.open("./jQuery-resenje.zip", "_self");
    } else {
        paragraph.innerHTML = "Lozinka nije ispravna! Pokušajte ponovo.";
        modal.append(paragraph);

    }
}
// navbar color toggle
$(window).on('load resize', function () {
    if ($(this).width() > 600) {
        $(document).scroll(function () {
            var top1 = $('#html-start').offset().top;
            var top2 = $('#css-start').offset().top - 60;
            var top3 = $('#js-start').offset().top - 60;
            var scrollPos = $(document).scrollTop();
            if (scrollPos >= top1 && scrollPos < top2) {
                $('#myNav').addClass("navbar-dark bg-dark").removeClass("navbar-light bg-light");
                $('#NavItemOne').addClass('active');
                $('#NavItemTwo, #NavItemThree').removeClass('active');
            } else if (scrollPos >= top2 && scrollPos < top3) {
                $('#myNav').addClass("navbar-light bg-light").removeClass("navbar-dark bg-dark");
                $('#NavItemTwo').addClass('active');
                $('#NavItemOne, #NavItemThree').removeClass('active');
            } else if (scrollPos >= top3) {
                $('#myNav').addClass("navbar-dark bg-dark").removeClass("navbar-light bg-light");
                $('#NavItemThree').addClass('active');
                $('#NavItemOne, #NavItemTwo').removeClass('active');

            } else {
                $('#NavItemOne, #NavItemTwo, #NavItemThree').removeClass('active');
            }
        });
    } else {
        $(document).scroll(function () {
            var top1 = $('#html-start').offset().top;
            var top2 = $('#css-start').offset().top - 60;
            var top3 = $('#js-start').offset().top - 60;
            var scrollPos = $(document).scrollTop();
            if (scrollPos >= top1 && scrollPos < top2) {
                $('#myNav').addClass("navbar-dark bg-dark").removeClass("navbar-light bg-light");
            } else if (scrollPos >= top2 && scrollPos < top3) {
                $('#myNav').addClass("navbar-light bg-light").removeClass("navbar-dark bg-dark");
            } else if (scrollPos >= top3) {
                $('#myNav').addClass("navbar-dark bg-dark").removeClass("navbar-light bg-light");
            }
        }); 
    }
});
// navbar color toggle end

// function passwordJS() {
//     var password = prompt("Unesite lozinku da biste preuzeli fajl:");
//     if (password.toLowerCase() == "smartpredavac") {
//         window.open("./JavaScript-resenje.zip");
//     } else {
//         alert("Lozinka nije ispravna! Pokušajte ponovo!");
//     }
// }

// function passwordJQ() {
//     var password = prompt("Unesite lozinku da biste preuzeli fajl:");
//     if (password.toLowerCase() == "smartpredavac") {
//         window.open("./jQuery-resenje.zip");
//     } else {
//         alert("Lozinka nije ispravna! Pokušajte ponovo!");
//     }
// }

// function passwordCSS() {
//     var password = prompt("Unesite lozinku da biste preuzeli fajl:");
//     if (password.toLowerCase() == "smartpredavac") {
//         window.open("./CSS-sajt-resenje.zip");
//     } else {
//         alert("Lozinka nije ispravna! Pokušajte ponovo!");
//     }
// }
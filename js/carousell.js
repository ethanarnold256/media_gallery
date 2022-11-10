class Image {
    constructor(image, name) {
        this.image = image;
        this.name = name;
    }
}

let cars = [new Image("img/brera.jpg", "Alfa Romeo Brera"), new Image("img/clio.jpg", "Renault Clio V6"), new Image("img/modena.jpg", "Ferrari 360 Modena")];

function selectImage(i) {
    console.log(i);
    let car = cars[i];
    for(j in carousellButtons1.children) { carousellButtons1.children[j].id = ""; }
    carousellButtons1.children[i].id = "current";
    carousellImage1.src = car.image;
    carousellImage1.alt = car.name;
}

carousell1 = document.getElementById("carousell1");
carousellImage1 = document.getElementById("carousellImage1");
carousellButtons1 = document.getElementById("carousellButtons1");

i = 0
for(let i in cars) {   

    // carousell buttons
    button = document.createElement("li");
    button.innerHTML = parseInt(i)+1;
    button.onclick = function(){selectImage(i);}
    carousellButtons1.append(button);
}

selectImage(0);
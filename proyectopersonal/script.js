let botonNo = document.getElementById('botonNo');
let botonSi = document.getElementById('botonSi');
let imagenInicial = document.getElementById('imagenInicial');
let cuerpo = document.getElementById('cuerpo');
let texto = document.getElementById('texto');
let div = document.getElementById('div');


var vertical=0, horizontal=0, posicion=0;




function movimiento(){
    horizontal = Math.round(Math.random() * (1 + screen.width - 100) + 100);
    vertical = Math.round(Math.random() * (1 + screen.height - 100) + 100);
    botonNo.style.left = (horizontal-100) + "px";
    botonNo.style.top = (vertical -100) + "px";
    
}

function aceptar(){
    botonNo.style.display = "none";
    botonSi.style.display = "none";
    imagenInicial.style.display = "none";
    cuerpo.style.backgroundColor = "pink";
    div.removeChild(texto);
    const img2 = document.createElement("img");
    img2.src = "./Img/STK-20231002-WA0050.jpg";
    img2.style.width = "150px"
    img2.style.marginRight = "50px"
    div.appendChild(img2);
    const img = document.createElement("img");
    img.src = "./Img/WhatsApp Image 2024-03-20 at 22.38.14.jpeg";
    img.style.width = "150px"
    div.appendChild(img);
    const img3 = document.createElement("img");
    img3.src = "./Img/STK-20230114-WA0098_1_.gif";
    img3.style.width = "150px"
    img3.style.marginLeft = "50px"
    div.appendChild(img3);
    const texto2 = document.createElement("h2");
    texto2.textContent = "Listo ya somos novios te amoo <3";
    div.appendChild(texto2);
    const img4 = document.createElement("img");
    img4.src = "./Img/STK-20231015-WA0006.gif";
    img4.style.width = "150px"
    img4.style.marginRight = "50px"
    div.appendChild(img4);
    const img5 = document.createElement("img");
    img5.src = "./Img/STK-20231027-WA0010.gif";
    img5.style.width = "150px"
    div.appendChild(img5);
    const img6 = document.createElement("img");
    img6.src = "./Img/STK-20240311-WA0039.gif";
    img6.style.width = "150px"
    img6.style.marginLeft = "50px"
    div.appendChild(img6);
}

botonNo.addEventListener('click',movimiento,true)
botonSi.addEventListener('click',aceptar,true)
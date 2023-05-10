const image = document.getElementById('img');
let counter = 0;
const botonUno = document.getElementById('botonUno')
const botonDos = document.getElementById('botonDos')


let imagenes = [
    '../assets/Camisetas/Ajax.jpg',
    '../assets/Camisetas/Argentina.jpg',
    '../assets/Camisetas/Bayern.jpg',
    '../assets/Camisetas/Boca.jpg',
    '../assets/Camisetas/Manchester.jpg',
    '../assets/Camisetas/River.jpg',
];

image.src = imagenes[counter];

botonUno.addEventListener('click', ()=>{
    counter--;
    if(counter < 0){
        counter = 5;
    }
    image.src = imagenes[counter]
});
botonDos.addEventListener('click', ()=>{
    counter++;
    if (counter > imagenes.length - 1){
        counter = 0;
    }
    image.src = imagenes[counter]
});


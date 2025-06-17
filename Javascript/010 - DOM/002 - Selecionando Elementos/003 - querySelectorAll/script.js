"use strict";

const qualquer = document.querySelectorAll("p");

qualquer.forEach( (elementos,index) => {
    if (index === 0) {
        elementos.style.background = "blue";
        elementos.style.padding = "20px";
    }
    if (index === 1){
        elementos.style.background = "red";
        elementos.style.padding = "20px";
    }
     console.log(index,elementos);
});


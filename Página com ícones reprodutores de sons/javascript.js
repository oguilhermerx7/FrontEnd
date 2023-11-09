function tocaSom(idElementoAudio){
    document.querySelector(idElementeAudio).play();
}

let lista = document.querySelectorAll(".tecla");
let contador=0;
while(contador< lista.length){
    const efeito = lista[contador].classList[1];
    const idAudio = "#som_"+efeito;
    lista[contador].onclick= function(){
        tocaSom(idAudio);
    } 
    contador++;
}
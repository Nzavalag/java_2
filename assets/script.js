const imgclick = document.querySelector("#img_border");

let muestraBorde = true;
imgclick.addEventListener("click", borde);

function borde(){
    if (muestraBorde===true){
        imgclick.style.border = "2px solid red";
        muestraBorde = false;
    }else{
        imgclick.style.border = "none";
        muestraBorde = true;
    }
    return 0;
}

function fnCantidadStickers(){
    let stickersId01=document.querySelector("#id01").value;
    let stickersId02=document.querySelector("#id02").value;
    let stickersId03=document.querySelector("#id03").value;
    let totalStickers = Number(stickersId01)+ Number(stickersId02)+Number(stickersId03);
    let mensaje="";
    let mensajeStickers = document.querySelector("#idMensaje");
    if (Number(stickersId01)<0 || isNaN(Number(stickersId01))){
        mensajeStickers.innerHTML = mensaje.concat("Error en cantidad total de Stickers: autobots");
        return;
    }
    if (Number(stickersId02)<0 || isNaN(Number(stickersId02))){
        mensajeStickers.innerHTML = mensaje.concat("Error en cantidad total de Stickers: decepticons");
        return;
    }
    if (Number(stickersId03)<0 || isNaN(Number(stickersId03))){
        mensajeStickers.innerHTML = mensaje.concat("Error en cantidad total de Stickers: Maximals");
        return;
    }
    if (totalStickers > 10)
        mensajeStickers.innerHTML = mensaje.concat("Llevas demasiados stickers");
    else
        mensajeStickers.innerHTML = mensaje.concat("Lleva ", totalStickers," Stickers");
    return 0;
}

let Pass="";
let Password="";
let mensajePassword = document.querySelector("#idMensajePassword");

function fnConstruyePassword(){
    let idSelector01 = document.querySelector("#select01");
    let valorSelector01 = idSelector01.options[idSelector01.selectedIndex].value;

    let idSelector02 = document.querySelector("#select02");
    let valorSelector02 = idSelector02.options[idSelector02.selectedIndex].value;

    let idSelector03 = document.querySelector("#select03");
    let valorSelector03 = idSelector03.options[idSelector03.selectedIndex].value;

    return Pass.concat(String(valorSelector01),String(valorSelector02),String(valorSelector03));
}

function fnValidaPassword(){
    Password = fnConstruyePassword();
    switch(Password) {
        case "060":
            {
                mensajePassword.innerHTML = "Password 1 Correcto"; 
                break;
            }
        case "606":
            {
                mensajePassword.innerHTML = "Password 2 Correcto";;
                break;
            }
        default:
                mensajePassword.innerHTML ="Password Incorrecto";
    }

    return 0;
}

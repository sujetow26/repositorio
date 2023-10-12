const encargar=document.getElementById("encargar2");
const cancela=document.getElementById("Cancelar2");
const estos=document.getElementById("esto");
const vamos=document.getElementById("accion");
const primos=document.getElementById("primos");
const botoncancelar=document.createElement("button");
botoncancelar.setAttribute("type","submit");
botoncancelar.textContent=("Cancelar");
botoncancelar.setAttribute("class","btn btn-danger");
imput=document.createElement("input");
imput.setAttribute("name","cancela");
imput.setAttribute("value","cancelo");
imput.setAttribute("class","esto");
H=0;
i=0;
encargar.addEventListener("click", d);
function d(){
    if(H==0){
    estos.classList.toggle("esto");
    estos.classList.toggle("banana");
    H++;
    }
    else if(H==1){
        estos.classList.toggle("banana");
        estos.classList.toggle("esto");
        botoncancelar.remove();
        imput.remove();
        primos.appendChild(vamos);
        H=0;
    }
    else{
        imput.remove();
        botoncancelar.remove();
        primos.appendChild(vamos);
    }
}
cancela.addEventListener("click", c);
function c(){
    vamos.remove();
    if(i==0){
    estos.classList.toggle("esto");
    estos.classList.toggle("banana");
    i++;
}
else if(i==1){
    estos.classList.toggle("banana");
    estos.classList.toggle("esto");
    vamos.remove();
    primos.appendChild(botoncancelar);
    i=0;
}
primos.appendChild(botoncancelar);
primos.appendChild(imput);
}


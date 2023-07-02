
function ativaLetra(eLemento){
    const arrTexto = elemento.innerHTML.split("");
    elemento.innerHTML = "";
    arrTexto.fortEach((letra, i)=>{
        setTimeout(()=>{
        elemento.innerHTML += letra;
    }, 75 * i);
  });
}

const titulo = document.querySelector(".digitando");
ativaLetra(titulo);
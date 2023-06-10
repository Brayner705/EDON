let seleccion = document.querySelectorAll("#verClase");

seleccion.forEach(function(div){
    div.addEventListener("click",
    function(){
       window.location.href = "aula.html"
    });
});

//File upload

const form = document.querySelector("form");
archivoInput = document.querySelector(".archivo");

form.addEventListener("click", ()=>{
    archivoInput.click();
});
archivoInput.onchange=({target}) =>{
    let archivo= target.file[0];
    if(archivo){
        let archivoNombre = archivo.name;
        if(archivoNombre.length >= 12){
            let splitNombre = archivoNombre.split(".");
            archivoNombre = splitNombre[0].substring(0,13) + "... ." + splitNombre[1];
        }
        archivoSubir(archivoNombre);
    }
}
function archivoSubir(nombre){
    let xhr = XMLHttpRequest();
    xhr.open("POST", "../php/upload.php");
    let datos = new FormData(form);
    xhr.send(datos);
    document.getElementById("area-progreso").style.display="block";
}
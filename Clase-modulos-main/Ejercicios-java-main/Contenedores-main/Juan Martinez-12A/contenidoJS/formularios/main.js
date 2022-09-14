const nombres = document.querySelector("#inputNames");
const edad = document.querySelector("#inputAge");
const correo = document.querySelector("#inputEmail");
const ciudad = document.querySelector("#inputCity");
const politicaData = document.querySelector("#checkPolitica");
const formulario = document.querySelector("#form");
//Validación dee Formulario

formulario.addEventListener("submit", (e)=> {
    e.preventDefault();
    if (validFieldsForm()=== -1){
        alert ("Enviando formulario");
    }else{
        alert ("Error en formulario");
    }
});

const validFieldsForm = () => {
    const values = Object.values(validFields);
    let response = values.findIndex(e => e === false);
    return response;
}
//Objeto de validación 

let validFields ={
    nom: false,
    edad: false,
    mail: false,
    ciud: false,
    politica: false
}

nombres.addEventListener("change", (event)=>{
    const inputNombres = event.target.value;
    const patronNombres = /^([a-zA-ZÀ-ÖØ-öø-ÿ]{3,25})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,25})$/g;
    //Ternario
    validFields.nom = inputNombres.match(patronNombres) ? true : false;
    console.log(Object.values(validFields));
});

edad.addEventListener("change", function(e) {
    const patronEdad = /(^[0-9]{1,2}$)/g;
    if (parseInt(edad.value) >= 18){
        if (edad.value.match(patronEdad)){
            validFields.edad = true;
        }else {
            alert("error en edad");
        }
    }else{
        alert("error en edad")
    }
    console.log(object.values(validFields));
});

politicaData.addEventListener("change", (e) => {
    validFields.politica =politicaData.checked === true ? true:false;
    console.log(Object.values(validFields));
});

correo.addEventListener("change", (e) => {
    const inputCorreo = e.target.value;
    const patronCorreo = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/img;
    validFields.mail = inputCorreo.match(patronCorreo) ? true : false ;
    console.log(Object.values(validFields));
});

ciudad.addEventListener("change", (e) => {
    
});

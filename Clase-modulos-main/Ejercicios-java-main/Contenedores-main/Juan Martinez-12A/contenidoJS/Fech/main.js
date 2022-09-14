fetch("https://jsonplaceholder.typicode.com/todos")
    .then(respuesta => respuesta.json())
    .then((response) => {
        console.log(response);
    })
    .catch((error)=>(console.error(error)))
    .finally(console.log("ha finalizado la petición"));
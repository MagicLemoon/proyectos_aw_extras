const encuesta = document.getElementById("encuesta");
encuesta.addEventListener("submit", function(event) {
  event.preventDefault();
  const respuesta1 = (document.querySelector('input[name="pregunta1"]:checked').value);
  const respuesta2 = (document.querySelector('input[name="pregunta2"]:checked').value);
  const respuesta3 = (document.querySelector('input[name="pregunta3"]:checked').value);


  let suma = parseInt(respuesta1) + parseInt(respuesta2) + parseInt(respuesta3);
  let promedio = suma / 3;

  let calificacion;
  if(promedio >= 4){
    calificacion = "Muy Satisfactorio";
    console.log("Muy Satisfactorio");
  } else if(promedio >= 3){
    calificacion = "Satisfactorio";
    console.log("Satisfactorio");
  } else if(promedio >= 2){
    calificacion = "Neutro";
    console.log("Neutro");
  } else {
    calificacion = "Insatisfecho";
    console.log("Insatisfecho");
  }
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `

    <p>Tu nivel de satisfaccion es ${calificacion}</p>
  `;


});

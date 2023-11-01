//Evitar recarga
document.getElementById("formulario").addEventListener("submit", (e) => {
  e.preventDefault();
});

//Inyectar las opciones desde Javascript
//Obtener el elemento selec a traves de su id

const select = document.getElementById("select-option");

// Escuchar cambios en el elemento select
select.addEventListener("change", mensaje);

function mensaje() {
  // Obtener el valor seleccionado
  const estadoSeleccionado = select.value;

const mensajeContenedor = document.createElement("span");
mensajeContenedor.textContent = "Opción seleccionada: " + estadoSeleccionado;

// Obtener el elemento <p>
const parrafoMensaje = document.getElementById("mensaje");
parrafoMensaje.innerHTML = "";
// Agregar el elemento <span> al elemento <p>.
parrafoMensaje.appendChild(mensajeContenedor);
}
//boton enviar

const botonSubmit = document.getElementById("submitBtn");
botonSubmit.addEventListener("click", () => {
  alert("la tarea ha sido enviada");
});

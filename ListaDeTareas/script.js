// contador tareas
const contadorTareas = document.querySelector(".contador span");

contadorTareas.innerText = document.querySelectorAll(".lista").length;

//cambiar tema
const iconoTema = document.querySelector(".tema");

iconoTema.addEventListener("click", () => {
  document.body.classList.toggle("light");
  if (document.body.classList.contains("light")) {
    iconoTema.src = "images/icon-moon.svg";
  } else {
    iconoTema.src = "images/icon-sun.svg";
  }
});

// añadir tareas
const addButton = document.querySelector(".tarea-input button");
const tareaInput = document.getElementById("tarea-input");
const tarea = document.querySelector(".tareas ul");
const tareaId = document.querySelector('.filtros input[type="radio"]:checked');

function agregarTarea(text) {
  const lista = document.createElement("li");
  lista.innerHTML = `
      <label class="lista">
      <input class="checkbox" type="checkbox">
      <span class="text" id="text">${text}</span>
      </label>
      <span class="borrar"></span>
  `;
  if (tareaId.id === "completa") {
    lista.classList.add("hidden");
  }
  tarea.append(lista);
  actualizadorTareas(1);
}

addButton.addEventListener("click", () => {
  if (tareaInput.value.length > 0) {
    agregarTarea(tareaInput.value);
    tareaInput.value = "";
  }
});

tareaInput.addEventListener("keypress", (event) => {
  if (event.charCode === 13 && tareaInput.value.length > 0) {
    agregarTarea(tareaInput.value);
    tareaInput.value = "";
  }
});

//actualizar tareas

function actualizadorTareas(num) {
  contadorTareas.innerText = +contadorTareas.innerHTML + num;
}

//editar tareas (en proceso)

// function editarSpan() {
//   const textoTarea = document.getElementById("text");

//   textoTarea.contentEditable = "true";
//   textoTarea.focus();
//   document.execCommand("selectAll", false, null);

//   textoTarea.addEventListener("blur", function () {
//     textoTarea.contentEditable = "false";
//   });
// }

//borrar tareas

function borrarTarea(tarea) {
  tarea.remove();
  actualizadorTareas(-1);
}

tarea.addEventListener("click", (event) => {
  if (event.target.classList.contains("borrar")) {
    borrarTarea(event.target.parentElement);
  }
});

//filtros

document.querySelectorAll(".filtros input").forEach((radio) => {
  radio.addEventListener("change", (event) => {
    filtrarTarea(event.target.id);
  });
});

function filtrarTarea(id) {
  const todasLasTareas = document.querySelectorAll("li");

  switch (id) {
    case "todas":
      todasLasTareas.forEach((item) => {
        item.classList.remove("hidden");
      });
      break;
    case "pendiente":
      todasLasTareas.forEach((item) => {
        if (item.querySelector("input").checked) {
          item.classList.add("hidden");
        } else {
          item.classList.remove("hidden");
        }
      });
      break;
    default:
      todasLasTareas.forEach((item) => {
        if (item.querySelector("input").checked) {
          item.classList.remove("hidden");
        } else {
          item.classList.add("hidden");
        }
      });
      break;
  }
}

//borrar todas las tareas

const tareasCompletas = document.querySelector(".borrar-completadas");

tareasCompletas.addEventListener("click", () => {
  const tareaChecked = document.querySelectorAll(
    '.lista input[type="checkbox"]:checked'
  );
  tareaChecked.forEach((item) => {
    borrarTarea(item.closest("li"));
  });
});

/*ordenar lista */
Sortable.create(listaSimple);

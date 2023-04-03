// contador tareas
const contadorTareas = document.querySelector(".contador span");

contadorTareas.innerText = document.querySelectorAll(".lista").length;

//cambiar tema

const addButton = document.querySelector(".tarea-input button");
const tareaInput = document.getElementById("tarea-input");
const tarea = document.querySelector(".tareas ul");
const tareaId = document.querySelector('.filtros input[type="radio"]:checked');

// añadir tareas

function agregarTarea(text) {
  const lista = document.createElement("li");
  lista.innerHTML = `
      <label class="lista">
      <input class="checkbox" type="checkbox">
      <span class="text">${text}</span>
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

//implementacion tareas

function actualizadorTareas(num) {
  contadorTareas.innerText = +contadorTareas.innerHTML + num;
}

//borrar tareas

function borrarTarea(tarea) {
  tarea.remove(tarea);
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

/*ordenar lista */
Sortable.create(listaSimple);

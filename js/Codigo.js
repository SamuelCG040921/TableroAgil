const tarea = {
    id: '',
    nombre: '',
}

let isEditando = false
let isValido = false


function crearTarea(event) {
    event.preventDefault()

    validarCampos(
        document.getElementById("tarea-nombre").value,
    )

    if(isValido) {
        if (isEditando) {
            const divTarea = document.getElementById(tarea.id)
            divTarea.childNodes[0].textContent = document.getElementById("tarea-nombre").value

            const btnEditar = document.getElementById("btn-crear-editar")
            btnEditar.value = "Crear Tarea"
            btnEditar.classList.remove('btn-editar')
            btnEditar.classList.add('btn-crear')
        } else {
            tarea.nombre = document.getElementById("tarea-nombre").value
        }
    }

    limpiarCampos()
    limpiarObj()
}

function limpiarCampos() {
    document.getElementById("tarea-nombre").value = ''
    
} 

function limpiarObj() {
    tarea.id = ''
    tarea.nombre = ''

    isValido = false
    isEditando = false
}

function validarCampos(nombre) {
    if (nombre === '') {
        alert('Debes asignar el nombre de la tarea')
        isValido = false
    } else {
        isValido = true
    }
}

function registrarTarea() {
    tarea.id = new Date().getTime()

    const pendientes = document.getElementById("pendientes")

    const divTarea = document.createElement('div')
    divTarea.classList.add('tarea')
    divTarea.setAttribute('id', tarea.id)
    divTarea.setAttribute('draggable', true)
    divTarea.setAttribute('ondragstart', 'drag(event)')

    const pNombre = document.createElement('p')
    pNombre.setAttribute('id', 'nombre')
    pNombre.textContent = tarea.nombre

    pendientes.appendChild(divTarea)
    divTarea.appendChild(pNombre)
}
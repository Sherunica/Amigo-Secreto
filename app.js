// Array para almacenar los nombres de los participantes
let participantes = [];

// Función para agregar un nombre a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo");  // Captura el valor del campo de entrada
    const nombre = input.value.trim();  // Obtiene el texto ingresado, eliminando los espacios innecesarios

    // Validar que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;  // Si está vacío, muestra el mensaje y sale de la función
    }

    // Validar si el nombre ya está en la lista de amigos
    if (participantes.includes(nombre)) {
        alert("Este nombre ya ha sido agregado.");
        return;  // Si el nombre ya está en la lista, muestra el mensaje y sale de la función
    }

    // Añadir el nombre al array de amigos
    participantes.push(nombre);

    // Actualizar la lista en pantalla
    actualizarLista();

    // Limpiar el campo de entrada
    input.value = "";  // Restablece el campo de texto a vacío
}

// Función para actualizar la lista de amigos en pantalla
function actualizarLista() {
    // Obtener el elemento de la lista donde se mostrarán los amigos
    const lista = document.getElementById("listaAmigos");

    // Limpiar la lista existente para evitar duplicados
    lista.innerHTML = "";

    // Iterar sobre el array de amigos (participantes) y crear un nuevo <li> para cada amigo
    for (let i = 0; i < participantes.length; i++) {
        // Crear un nuevo elemento de lista <li> para cada nombre
        const li = document.createElement("li");
        li.textContent = participantes[i];  // Establecer el nombre del amigo como texto del <li>

        // Agregar el <li> creado a la lista
        lista.appendChild(li);
    }
}

// Función para realizar el sorteo del Amigo Secreto
function sortearAmigo() {
    // Validar que haya al menos un amigo en la lista antes de sortear
    if (participantes.length < 1) {
        alert("Debe haber al menos un amigo para realizar el sorteo.");
        return;
    }

    // Generar un índice aleatorio entre 0 y el tamaño del arreglo
    const indiceAleatorio = Math.floor(Math.random() * participantes.length);

    // Obtener el nombre sorteado utilizando el índice aleatorio
    const amigoSorteado = participantes[indiceAleatorio];

    // Mostrar el resultado en el elemento de resultado
    mostrarResultado(amigoSorteado);
}

// Función para mostrar los resultados en pantalla
function mostrarResultado(amigoSorteado) {
    const resultadoElemento = document.getElementById("resultado");

    // Limpiar la lista de resultados antes de mostrar los nuevos
    resultadoElemento.innerHTML = "";

    // Mostrar el nombre del amigo sorteado
    resultadoElemento.innerHTML = `¡Tu amigo secreto es: <strong>${amigoSorteado}</strong>!`;
}

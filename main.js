let botonCompra = document.querySelectorAll(".botoncompra");
const cuerpo = document.getElementById("cuerpo");
let botonParrafo = document.getElementById("botonparrafo");

const getRandomId = () => {
    return Math.floor(Math.random() * Date.now()).toString(16);
};

const createTask = (taskId, taskNombre, taskEmail, taskTarjeta, taskDireccion) => {
    return {
        id: taskId,
        nombre: taskNombre,
        email: taskEmail,
        tarjeta: taskTarjeta,
        direccion: taskDireccion
    };
};

botonCompra.forEach(boton => {
    boton.addEventListener('click', (e) => {
        if (e.target.classList.contains("botoncompra")) {
            cuerpo.remove();

            let titulo = document.createElement("h1");
            titulo.innerHTML = "El disco seleccionado ha sido añadido a su carrito.";
            document.body.appendChild(titulo);

            const formulario = document.createElement('form');
            formulario.setAttribute('id', 'miFormulario');

            const inputTexto = document.createElement('input');
            inputTexto.setAttribute('type', 'text');
            inputTexto.setAttribute('id', 'nombre');
            inputTexto.setAttribute('name', 'nombre');
            inputTexto.setAttribute('placeholder', 'Nombre');
            formulario.appendChild(inputTexto);

            const inputEmail = document.createElement('input');
            inputEmail.setAttribute('type', 'email');
            inputEmail.setAttribute('id', 'email');
            inputEmail.setAttribute('name', 'email');
            inputEmail.setAttribute('placeholder', 'Correo Electrónico');
            formulario.appendChild(inputEmail);

            const inputTarjeta = document.createElement('input');
            inputTarjeta.setAttribute('type', 'text');
            inputTarjeta.setAttribute('id', 'tarjeta');
            inputTarjeta.setAttribute('name', 'tarjeta');
            inputTarjeta.setAttribute('placeholder', 'Número de Tarjeta de Crédito');
            formulario.appendChild(inputTarjeta);

            const inputDireccion = document.createElement('input');
            inputDireccion.setAttribute('type', 'text');
            inputDireccion.setAttribute('id', 'direccion');
            inputDireccion.setAttribute('name', 'direccion');
            inputDireccion.setAttribute('placeholder', 'Dirección');
            formulario.appendChild(inputDireccion);

            const botonEnviar = document.createElement('button');
            botonEnviar.setAttribute('type', 'submit');
            botonEnviar.textContent = 'Enviar';
            formulario.appendChild(botonEnviar);

            formulario.addEventListener('submit', (e) => {
                e.preventDefault();

                const id = getRandomId();
                const nombre = inputTexto.value;
                const email = inputEmail.value;
                const tarjeta = inputTarjeta.value;
                const direccion = inputDireccion.value;

                if (nombre === '' || email === '' || tarjeta === '' || direccion === '') {
                    Swal.fire({
                        title: 'Error en la compra',
                        text: 'Por favor, complete todos los campos.',
                        icon: 'error'
                    });
                } else {
                    const task = createTask(id, nombre, email, tarjeta, direccion);
                    console.log(task);

                    localStorage.setItem(id, JSON.stringify(task));

                    Swal.fire({
                        title: 'Compra realizada',
                        text: 'Si ya depositaste tus datos, la compra fue exitosa.',
                        icon: 'success'
                    });

                    formulario.reset();
                }
            });

            document.body.appendChild(formulario);

            const botonRegresar = document.createElement('button');
            botonRegresar.textContent = 'Regresar';
            botonRegresar.addEventListener('click', () => {
                location.reload();
            });
            document.body.appendChild(botonRegresar);
        }
    });
});

const getTasksFromLocalStorage = () => {
    let tasks = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const task = JSON.parse(localStorage.getItem(key));
        tasks.push(task);
    }
    return tasks;
};

botonParrafo.addEventListener('click', (e) => {
    if (e.target.id === "botonparrafo") {
        cuerpo.remove();

        let titulo = document.createElement("h1");
        titulo.innerHTML = "Próximos lanzamientos";
        document.body.appendChild(titulo);

        const tasks = getTasksFromLocalStorage();
        if (tasks.length > 0) {
            const ulTasks = document.createElement("ul");

            tasks.forEach((task) => {
                const liTask = document.createElement("li");
                liTask.innerHTML = `
                    <h3>Podras seguir comprando con los datos a continuacion:</h3>
                    <h4>${task.nombre}</h4>
                    <p>Email: ${task.email}</p>
                    <p>Tarjeta: ${task.tarjeta}</p>
                    <p>Dirección: ${task.direccion}
                    </p>
                `;
                ulTasks.appendChild(liTask);
            });

            document.body.appendChild(ulTasks);
        } else {
            const noTasksMessage = document.createElement("p");
            noTasksMessage.textContent = "No hay datos guardados.";
            document.body.appendChild(noTasksMessage);
        }

        fetch("/stock.json")
            .then((response) => response.json())
            .then((data) => {
                const ul = document.createElement("ul"); 

                data.forEach((post) => {
                    const li = document.createElement("li");
                    li.innerHTML = `
                    <h4>${post.NombreAlbum}, ${post.Artista}, ${post.AñoLanzamiento} </h4>
                    <p>${post.Precio}</p>
                    `;
                    ul.appendChild(li); 
                });

                document.body.appendChild(ul); 

                const botonRegresar = document.createElement('button');
                botonRegresar.textContent = 'Regresar';
                botonRegresar.addEventListener('click', () => {
                    location.reload();
                });
                document.body.appendChild(botonRegresar);
            });
    }
});

   
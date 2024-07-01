let botonCompra = document.querySelectorAll(".botoncompra");
const cuerpo = document.getElementById("cuerpo");

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

                const task = createTask(id, nombre, email, tarjeta, direccion);
                console.log(task);

                localStorage.setItem(id, JSON.stringify(task));

                alert("Si ya ingresaste tus datos, la compra fue un exito.");

                formulario.reset();
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

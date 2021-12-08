// Example starter JavaScript for disabling form submissions if there are invalid fields

(function() {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function(form) {
            form.addEventListener('submit', function(event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                } else {
                    RegistrarAsesor();
                    event.preventDefault()

                }

                form.classList.add('was-validated')
            }, false)
        })
})()


function RegistrarAsesor() {
    let identificacion = document.querySelector("#txtIdentificacion").value;
    let nombres = document.querySelector("#txtNombres").value;
    let apellidos = document.querySelector("#txtApellidos").value;
    let telefono = document.querySelector("#txtTelefono").value;
    let direccion = document.querySelector("#txtDireccion").value;
    let email = document.querySelector("#txtEmail").value;
    

    let url = `http://localhost:3000/asesors`;
    let datos = {
        identificacion: identificacion,
        nombre: nombres,
        apellido: apellidos,
        telefono: telefono,
        direccion: direccion,
        email: email
    };

    fetch(url, {
            method: 'POST',
            body: JSON.stringify(datos),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(mensaje => {
            console.log(mensaje)
        })
}
const firebaseConfig = {
    apiKey: "AIzaSyCgUEEuC_kBV0ROIdYAvjCt5TDdLyPUkHQ",
    authDomain: "datos-formulariosc.firebaseapp.com",
    projectId: "datos-formulariosc",
    storageBucket: "datos-formulariosc.firebasestorage.app",
    messagingSenderId: "840833448815",
    appId: "1:840833448815:web:bb67bc382ddd27626f069a",
    measurementId: "G-5FHQTTWE80"
}

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

// escuchamos un evento submit o enviar de un elemento formulario
document.getElementById('formulario').addEventListener('submit', (event) => {
    event.preventDefault()

    // validar campo del nombre 
    let entradaNombre = document.getElementById('name')
    let errorNombre = document.getElementById('nameError')
    if (entradaNombre.value.trim() === '') {
        errorNombre.textContent = 'Por favor, introduce tu nombre'
        errorNombre.classList.add('error-message')
    } else {
        errorNombre.textContent = ''
        errorNombre.classList.remove('error-message')
    }

    // validar correo electrónico
    let emailEntrada = document.getElementById('email')
    let emailError = document.getElementById('emailError')
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // expresión regular para validar el correo electrónico
    if (!emailPattern.test(emailEntrada.value)) {
        emailError.textContent = 'Por favor, introduce un correo electrónico válido'
        emailError.classList.add('error-message')
    } else {
        emailError.textContent = ''
        emailError.classList.remove('error-message')
    }

    // validar la contraseña
    let contrasenaEntrada = document.getElementById('password')
    let contrasenaError = document.getElementById('passwordError')
    let contrasenaPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{9,}$/; // expresión regular para validar la contraseña
    if (!contrasenaPattern.test(contrasenaEntrada.value)) {
        contrasenaError.textContent = 'La contraseña debe tener al menos 9 caracteres, una letra mayúscula, una letra minúscula, un número y un carácter especial'
        contrasenaError.classList.add('error-message')
    } else {
        contrasenaError.textContent = ''
        contrasenaError.classList.remove('error-message')
    }

    // validar si todos los campos son válidos para enviar el formulario
    if (!errorNombre.textContent && !emailError.textContent && !contrasenaError.textContent) {
        // BACKEND QUE RECIBA LOS DATOS DEL FORMULARIO
        db.collection('users').add({
            nombre: entradaNombre.value,
            email: emailEntrada.value,
            contrasena: contrasenaEntrada.value
        })
        .then((docRef) => {
            alert('¡ Formulario enviado con éxito !',docRef.id)
        })
        .catch((error) => {
            console.error('Error al añadir un documento: ', error)
        })

        document.getElementById('formulario').reset()
    }
})
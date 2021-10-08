const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	contraseña: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}

const campos = {
	usuario: false,
	correo: false,
	contraseña: false
}

const validarFormulario = (e) => {
	switch(e.target.name){
		case "usuario":
			validarCampo(expresiones.usuario, e.target, 'usuario');
			break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
		case "contraseña":
			validarCampo(expresiones.contraseña, e.target, 'contraseña');
			validarContraseña2();
		break;
		case "contraseña2":
			validarContraseña2();
		break;
	};
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	// input.addEventListener('blur', validarFormulario);
});

const validarCampo = (expresiones, input, campo) => {
	if(expresiones.test(input.value)){
		document.getElementById(`grupo_${campo}`).classList.add('formulario_grupo-correcto');
		document.getElementById(`grupo_${campo}`).classList.remove('formulario_grupo-incorrecto');
		document.querySelector(`#grupo_${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo_${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo_${campo} .input_error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
		document.getElementById('grupo_mensaje_error').classList.remove('formulario_mensaje-error-activo');
	} else {
		document.getElementById(`grupo_${campo}`).classList.add('formulario_grupo-incorrecto');
		document.getElementById(`grupo_${campo}`).classList.remove('formulario_grupo-correcto');
		document.querySelector(`#grupo_${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo_${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo_${campo} .input_error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}	
}

const validarContraseña2 = () => {
	const contraseña1 = document.getElementById('contraseña');
	const contraseña2 = document.getElementById('contraseña2');

	if(contraseña1.value !== contraseña2.value){
		document.getElementById(`grupo_contraseña2`).classList.add('formulario_grupo-incorrecto');
		document.getElementById(`grupo_contraseña2`).classList.remove('formulario_grupo-correcto');
		document.querySelector(`#grupo_contraseña2 i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo_contraseña2 i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo_contraseña2 .input_error`).classList.add('formulario__input-error-activo');
		campos['contraseña'] = false;
	}
	else{
		document.getElementById(`grupo_contraseña2`).classList.remove('formulario_grupo-incorrecto');
		document.getElementById(`grupo_contraseña2`).classList.add('formulario_grupo-correcto');
		document.querySelector(`#grupo_contraseña2 i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo_contraseña2 i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo_contraseña2 .input_error`).classList.remove('formulario__input-error-activo');
		campos['contraseña'] = true;
		document.getElementById('grupo_mensaje_error').classList.remove('formulario_mensaje-error-activo');
	}
}

formulario.addEventListener('submit', (e)=> {
 	e.preventDefault();

	const terminos = document.getElementById('terminos');

	if(campos.usuario && campos.correo && campos.contraseña && terminos.checked){
		formulario.reset();

		document.getElementById('formulario_mensaje_exito').classList.add('formulario_mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario_mensaje_exito').classList.remove('formulario_mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario_grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario_grupo-correcto');
		});

		document.getElementById('grupo_mensaje_error').classList.remove('formulario_mensaje-error-activo');
	}
	else{
		document.getElementById('grupo_mensaje_error').classList.add('formulario_mensaje-error-activo');
	}
});
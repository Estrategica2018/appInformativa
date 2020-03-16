$('.view').removeClass('active');
myApp.showTab('#view-5');
console.log(getCookie('id_usuario'),'alksdjasld');
/*
if (getCookie('id_usuario') !== '') {
	$.post('http://www.estrategicacomunicaciones.com/mobile/php/consult.user.php', {
		'id_usuario' : getCookie('id_usuario')
	}, function(response) {
		if (response.state == 'true') {

			setCookie('id_usuario', response.result[0].id_usuario);

		}
	}, 'json');
} else {
	$('.divLogin').show();
	$('.divRegister, #tb3').hide();
	$('#listTips').append('');
	$("#loginForm").attr("hidden",false);
	$('#contentForm').attr('hidden',true);
}*/

var swiper1 = new myApp.swiper('.swiper-1', {
	pagination:'.swiper-pagination-1',
	spaceBetween: 0,
	speed: 600
});

$('#tb4').on('click',function(){
	window.setTimeout (function() {
		swiper1.update();
	}, 0);
});

$('#btnIngresar').on('click', function () {
	if ($('#txtUsuario').val() != '' && $('#txtContrasena').val() != '') {

		if( $('#txtUsuario').val() === "diegodigital@gmail.com" && $('#txtContrasena').val() === "diegodigital"){
			$('#listTips').append(`<li class="card">
						<div class="card-header">Video Informativo</div>
						<div class="card-content">
						<div class="card-content-inner">
						<iframe width="auto" height="auto" src="video/CovidPiloto.mp4">
						</iframe>
						</div>
						</div>
						</li>`);
			$("#loginForm").attr("hidden",true);
			$('#contentForm').attr('hidden',false);
			setCookie('id_usuario', 1);
		}else{
			myApp.alert('Usuario y/o contraseña invalidos', 'Colsubsidio');
		}
		/*
		$.post('https://www.estrategicacomunicaciones.com/mobile/appInformativa/consultar.usuario.php', {
			'correo' : $('#txtUsuario').val(),
			'contrasena' : $('#txtContrasena').val(),
			'empresa': $('#company').val(),
		}, function(response) {
			if (response.state == 'true') {
				console.log(response);
				console.log(response.result);
				$content = "";
				myApp.alert('jkxncjkzxbc', 'Estrategica');
				response.contenidoVideo.forEach(function(element, i) {
					console.log('Element', i, 'is', element);
					$content = $content+`<li class="card">
								<div class="card-header">Card Header</div>
									<div class="card-content">
										<div class="card-content-inner">
											<iframe width="auto" height="auto" src="https://www.youtube.com/embed/tgbNymZ7vqY">
											</iframe>
										</div>
									</div>
							</li>`
				});
				myApp.alert('asndkjabsdjkab x222', 'Estrategica');
				$('#listTips').append($content);
				$("#loginForm").attr("hidden",true);
				$('#contentForm').attr('hidden',false);
				setCookie('id_usuario', response.result[0].id_usuario);
				console.log(getCookie('id_usuario'),'alksdjasld');
				//cargarProspectos(getCookie('id_usuario'));
			} else {
				//myApp.alert(response.message, 'Estrategica');
				myApp.alert(response.message, 'Estrategica');
			}
		}, 'json');
*/


	} else {
		myApp.alert('Ingrese su usuario y contraseña', 'Estrategica');
	}
});

$('#btnSalir').on('click', function () {
	deleteCookie('id_usuario');
	$('#txtUsuario, #txtContrasena').val('');
	$('.divLogin').show();
	$('.divRegister, #tb3').hide();
});


$('#btnRegistrar').on('click', function () {
	$('.divLogin').hide();
	$('.divRegister').show();
	$('#chkModificar').prop('checked', true);
	$('#btnSalir').html('Cancelar');
	$('#divGuardarUsuario').show();
	$('#txtNombre, #txtApellido, #txtIdentificacion, #txtEmail, #txtPassword, #txtPassword2, #txtTelefono').prop('disabled', false).val('');
	$('#cmbGenero').prop('disabled', false).val('M');
});

$('#lnkEnterate').on('click', function () {
	myApp.showTab('#view-5');
});

$('#lnkPortafolio').on('click', function () {
	myApp.showTab('#view-1');
});

$('#lnkProyectos').on('click', function () {
	myApp.showTab('#view-2');
});

$('#lnkTerCond').on('click', function () {
	myApp.showTab('#view-5');
});
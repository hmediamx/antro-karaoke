$(window).load(function() { // Inicia el script

	$('.regresar').hide();

	// ********************		Acciones de los enlaces		********************
	var visible = false;
	$('.activa_menu').click( function() { // ************* MOSTRAR MENU
		if( visible == true ) {
				$('.menu').css('z-index', '-1');
				$('.imagen_index').animate({ marginLeft: '0px' }, 1000);
				visible = false;
		}
		else {
			$('.imagen_index').animate({ marginLeft: '-300px' }, 1000, 
				function() { $('.menu').css('z-index', '10'); });
			visible = true;
		}
	});
	$(function() { // ************* MENU PoRINCIPoAL
		$('.menu ul li a').on('click', function(e) {
			e.preventDefault();
			var ancla = $(this).attr('href');
			$('body, html').stop(true, true).animate({
				scrollTop : $(ancla).offset().top
			}, 1000);
		});
	});	
	$(".menu_galerias a").click( function(e) { // ************* MENU GALERIAS
		e.preventDefault();
		$( ".galeria" ).hide();
		enlace = $(this).attr('href')
		$( ".galeria" ).load( enlace , function() {
			$( this ).fadeTo("slow", 1.0);	
		} );
	});
	$('.bar a').mouseover( function() {
		$(this).find('img').fadeTo('fast', 0.5);
	});
	$('.bar a').mouseleave( function() {
		$(this).find('img').fadeTo('fast', 1);
	});

	$('.scroll').on('click', function(e) {
			e.preventDefault();
			$('body, html').stop(true, true).animate({
				scrollTop : $("#bienvenidos").offset().top
			}, 1000);
	});

	$('.regresar').on('click', function(e) {
			e.preventDefault();
			$('body, html').stop(true, true).animate({
				scrollTop : $("#portada").offset().top
			}, 1000);
	});




	var medidas = function() {
		$('.bar').css('width', $('.imagen_index img').width() * 0.68);
		$('.bar').css('height', $('.imagen_index img').height() * 0.0398);
		$('.bar').css('margin-top', $('.imagen_index img').height() * 0.715);
		$('.bar img').css('height', $('.imagen_index img').height() * 0.0398);
		$('.scroll img').css('width', $('.imagen_index img').width() * 0.12);


		// ********************		Scroll		********************
		Al = $(window).height();
		An = $(window).width();
		AlImagenIndeximg =	 $('.imagen_index img').height();
		//Al_marcos = (AlImagenIndeximg/100) * 52;
		Al_marcos = An * 0.2;
		$('.imagen_ideologia, .imagen_diferencia, .imagen_servicios, .imagen_trabajo, .imagen_marcas, .imagen_bolsa, .imagen_contacto').css('height', Al_marcos+'px');

		// ------------ valores de las Als
		AlImagenIndex 			=	$('.imagen_index').height();
		AlContenidoIndex 		=	$('.contenido_index').height();
		AlImagenIdeologia 		=	$('.imagen_ideologia').height();
		AlContenidoIdeologia 	=	$('.contenido_ideologia').height();
		AlImagenDiferencia 		=	$('.imagen_diferencia').height();
		AlContenidoDiferencia 	=	$('.contenido_diferencia').height();
		AlImagenServicios 		=	$('.imagen_servicios').height();
		AlContenidoServicios 	=	$('.contenido_servicios').height();
		AlImagenTrabajo 		=	$('.imagen_trabajo').height();
		AlContenidoTrabajo 		=	$('.contenido_trabajo').height();
		AlImagenMarcas 			=	$('.imagen_marcas').height();
		AlContenidoMarcas 		=	$('.contenido_marcas').height();
		AlImagenBolsa 			=	$('.imagen_bolsa').height();
		AlContenidoBolsa 		=	$('.contenido_bolsa').height();
		AlImagenContacto 		=	$('.imagen_contacto').height();
		AlContenidoContacto 	=	$('.contenido_contacto').height();

		// ------------ valores de las posiciones
		Poimgindex 					=	$('.imagen_index').position();
		Pocontenidoindex				=	$('.contenido_index').position();
		Poimgideologia 				=	$('.imagen_ideologia').position();
		Pocontenidoideologia 		=	$('.contenido_ideologia').position();
		Poimgdiferencia 			=	$('.imagen_diferencia').position();
		Pocontenidodiferencia 		=	$('.contenido_diferencia').position();
		Poimgservicios  				=	$('.imagen_servicios').position();
		Pocontenidoservicios 		=	$('.contenido_servicios').position();
		Poimgtrabajo 				=	$('.imagen_trabajo').position();
		Pocontenidotrabajo 			=	$('.contenido_trabajo').position();
		Poimgmarcas 				=	$('.imagen_marcas').position();
		Pocontenidomarcas 			=	$('.contenido_marcas').position();
		Poimgbolsa 					=	$('.imagen_bolsa').position();
		Pocontenidobolsa 			=	$('.contenido_bolsa').position();
		Poimgcontacto 				=	$('.imagen_contacto').position();
		Pocontenidocontacto 			=	$('.contenido_contacto').position();

	}

	medidas();

	$( window ).resize(function() {
		medidas();
	});


	var posiciones = function() {
		console.log('ejecutando posiciones');

		if ( getScrollTop() > 0 ) {
			$('.scroll').fadeOut();
			$('.regresar').fadeIn();
		}

		if ( getScrollTop() <= 0 ) {
			$('.scroll').fadeIn();
			$('.regresar').fadeOut();
		}


		if (getScrollTop() <= Al && getScrollTop() >= 0) {
			a= getScrollTop()/1.2;
			$('.imagen_index img').css('margin-top', a+'px');

			$('.bar').css('margin-top', ($('.imagen_index img').height() * 0.715)+a+'px');
		}




		// ------------ valores IDEOLOGIA
		TopIdeologia = ($('.imagen_ideologia img').height())*.7;
		inIdeologia = AlContenidoIndex;
		outIdeologia = Pocontenidoideologia.top;

		if (getScrollTop() >= inIdeologia && getScrollTop() <= outIdeologia) {
			posParcialIdeologia = ((TopIdeologia)/100)*((getScrollTop()-inIdeologia)/((outIdeologia-inIdeologia)/100));//equivalencia entre %de avance y %de imagen
			$('.imagen_ideologia img').css('margin-top', -TopIdeologia+posParcialIdeologia+'px');
		}


		// ------------ valores DIFERENCIA
		TopDiferencia = ($('.imagen_diferencia img').height())*.7;
		inDiferencia = inIdeologia+AlImagenIdeologia+AlContenidoIdeologia;
		outDiferencia = Pocontenidodiferencia.top;

		if (getScrollTop() >= inDiferencia && getScrollTop() <= outDiferencia) {
			posParcialDiferencia = ((TopDiferencia)/100)*((getScrollTop()-inDiferencia)/((outDiferencia-inDiferencia)/100));//equivalencia entre %de avance y %de imagen
			$('.imagen_diferencia img').css('margin-top', -TopDiferencia+posParcialDiferencia+'px');
		}

		// ------------ valores SERVICIOS
		TopServicios = ($('.imagen_servicios img').height())*.7;
		inServicios = inDiferencia+AlImagenDiferencia+AlContenidoDiferencia;
		outServicios = Pocontenidoservicios.top;

		if (getScrollTop() >= inServicios && getScrollTop() <= outServicios) {
			posParcialServicios = ((TopServicios)/100)*((getScrollTop()-inServicios)/((outServicios-inServicios)/100));//equivalencia entre %de avance y %de imagen
			$('.imagen_servicios img').css('margin-top', -TopServicios+posParcialServicios+'px');
		}

		// ------------ valores TRABAJO
		TopTrabajo = ($('.imagen_trabajo img').height())*.7;
		inTrabajo = inServicios+AlImagenServicios+AlContenidoServicios;
		outTrabajo = Pocontenidotrabajo.top;

		if (getScrollTop() >= inTrabajo && getScrollTop() <= outTrabajo) {
			posParcialTrabajo = ((TopTrabajo)/100)*((getScrollTop()-inTrabajo)/((outTrabajo-inTrabajo)/100));//equivalencia entre %de avance y %de imagen
			$('.imagen_trabajo img').css('margin-top', -TopTrabajo+posParcialTrabajo+'px');
		}

		// ------------ valores MARCAS
		TopMarcas = ($('.imagen_marcas img').height())*.7;
		inMarcas = inTrabajo+AlImagenTrabajo+AlContenidoTrabajo;
		outMarcas = Pocontenidomarcas.top;

		if (getScrollTop() >= inMarcas && getScrollTop() <= outMarcas) {
			posParcialMarcas = ((TopMarcas)/100)*((getScrollTop()-inMarcas)/((outMarcas-inMarcas)/100));//equivalencia entre %de avance y %de imagen
			$('.imagen_marcas img').css('margin-top', -TopMarcas+posParcialMarcas+'px');
		}

		// ------------ valores BOLSA
		TopBolsa = ($('.imagen_bolsa img').height())*.7;
		inBolsa = inMarcas+AlImagenMarcas+AlContenidoMarcas;
		outBolsa = Pocontenidobolsa.top;

		if (getScrollTop() >= inBolsa && getScrollTop() <= outBolsa) {
			posParcialBolsa = ((TopBolsa)/100)*((getScrollTop()-inBolsa)/((outBolsa-inBolsa)/100));//equivalencia entre %de avance y %de imagen
			$('.imagen_bolsa img').css('margin-top', -TopBolsa+posParcialBolsa+'px');
		}

		// ------------ valores CONTACTO
		TopContacto = ($('.imagen_contacto img').height())*.7;
		inContacto = inBolsa+AlImagenBolsa+AlContenidoBolsa;
		outContacto = Pocontenidocontacto.top;

		if (getScrollTop() >= inContacto && getScrollTop() <= outContacto) {
			posParcialContacto = ((TopContacto)/100)*((getScrollTop()-inContacto)/((outContacto-inContacto)/100));//equivalencia entre %de avance y %de imagen
			$('.imagen_contacto img').css('margin-top', -TopContacto+posParcialContacto+'px');
		}



		
	}

	$(window).scroll( function() {
		if( visible == true ) {
				$('.menu').css('z-index', '-1');
				$('.imagen_index').animate({
					marginLeft: '0px'
				}, 1000);
				visible = false;
		}

		posiciones();
		
	});


	$(window).on('mousewheel', function(event) {
		posiciones();
	});






	function getScrollTop(){ ///  verifica el calculo total en pixeles de toda la pagina
    if(typeof pageYOffset!= 'undefined'){
        //most browsers
        return pageYOffset;
    }
    else{
        var B= document.body; //IE 'quirks'
        var D= document.documentElement; //IE with doctype
        D= (D.clientHeight)? D: B;
        return D.scrollTop;
    }
}

$(".cargando").fadeOut("slow"); 

});
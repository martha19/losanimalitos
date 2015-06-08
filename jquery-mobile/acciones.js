// JavaScript Document
$(document).ready(function(e) {
    $('#principal').height($('#page1').height()); //calcular el alto de la pantalla del dispositivo
	     document.addEventListener("deviceready",function(){
			 //precarga el sonido
			 audio=window.plugins.LowLatencyAudio;
			 audio.preloadFX('perro','audio/Perro.mp3',function(){},function(e){alert('Error '+e);});
			 audio.preloadFX('gato','audio/Gato.mp3',function(){},function(e){alert('Error '+e);});
			 audio.preloadFX('pato','audio/Pato.mp3',function(){},function(e){alert('Error '+e);});
			 audio.preloadFX('tortuga','audio/Tortuga.mp3',function(){},function(e){alert('Error '+e);});
			 audio.preloadFX('conejo','audio/Conejo.mp3',function(){},function(e){alert('Error '+e);});
			 audio.preloadFX('caballo','audio/Caballo.mp3',function(){},function(e){alert('Error '+e);});
			 audio.preloadFX('cebra','audio/Cebra.mp3',function(){},function(e){alert('Error '+e);});
			 audio.preloadFX('elefante','audio/Elefante.mp3',function(){},function(e){alert('Error '+e);});
			 audio.preloadFX('foca','audio/Foca.mp3',function(){},function(e){alert('Error '+e);});
			 audio.preloadFX('oso','audio/Oso.mp3',function(){},function(e){alert('Error '+e);});
			 audio.preloadFX('panda','audio/Panda.mp3',function(){},function(e){alert('Error '+e);});
			 audio.preloadFX('tigre','audio/Tigre.mp3',function(){},function(e){alert('Error '+e);});
			
			 //reproducir las notas
			 
			 $('.nota').bind('touchstart',function(){$(this).addClass('tocada');
			 audio.play ($(this).attr('id'));});
			 $('.nota').bind('touchend',function(){$(this).removeClass('tocada');});
		 },false); //deviceready
			 
}); //ready
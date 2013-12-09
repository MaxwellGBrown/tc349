/* -------------------------------
	Since Hover doesn't work on mobile devices, this JS can't be included
	------------------------------*/

var mq = window.matchMedia( "(min-width:480px)" );

if (mq.matches){
	
	$(document).ready(function(){
		
		
		
		/* ---------------------------
					TOPLEFT
		   ---------------------------*/
		
		$('#topleft').hover(
			//input 1 of hover -- on enter
			function() {
				$(this).children("div").fadeIn();
			}, 
			
			//2nd input of hover -- on exit
			function(){
				$(this).children("div").fadeOut();
			});
		
		
		
		
		
		/* ---------------------------
					TOPRIGHT
		   ---------------------------*/
		
		$('#topright').hover(
			//input 1 of hover -- on enter
			function() {
				$(this).children("div").fadeIn();
			}, 
			
			//2nd input of hover -- on exit
			function(){
				$(this).children("div").fadeOut();
			});
		
		
		
		
		/* ---------------------------
					BOTLEFT
		   ---------------------------*/
		
		$('#botleft').hover(
			//input 1 of hover -- on enter
			function() {
				$(this).children("div").fadeIn();
			}, 
			
			//2nd input of hover -- on exit
			function(){
				$(this).children("div").fadeOut();
			});
		
		
		
		
		
		/* ---------------------------
					BOTRIGHT
		   ---------------------------*/
		
		$('#botright').hover(
			//input 1 of hover -- on enter
			function() {
				$(this).children("div").fadeIn();
			}, 
			
			//2nd input of hover -- on exit
			function(){
				$(this).children("div").fadeOut();
			});
		
			
			
		
	//**************END LOAD DOCUMENT*******************
	});

}
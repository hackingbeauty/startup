(function(){

	if(!window.JS) {window.JS = {}}	//Create Namespace
	
	JS.Carousel = {
		this: JS.Carousel,
		viewport: 2,
		width:200,
		getSlots : function(){
			var carousel = document.getElementById("carousel");
			return carousel.getElementsByTagName("li").length;
		},
		setCarouselWidth : function(){
			var width = this.viewport * this.width;
			var carousel = document.getElementById("carousel");
			carousel.style.width = width + "px";
		},
		onLeftClick : function(){
			console.log("do left");
		},
		onRightClick : function(){
			console.log("do right");
		},
		animate : function(){
			var viewPort = this.viewport;
			var slots = this.getSlots();
			this.setCarouselWidth();
			this.onLeftClick();
			this.onRightClick();
		}
	}
	
})();
		
$(document).ready(function(){
	JS.Carousel.animate();
});

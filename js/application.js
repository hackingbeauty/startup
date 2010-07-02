(function(){

	if(!window.JS) {window.JS = {}}	//Create Namespace
	
	JS.Carousel = {
		
		this: JS.Carousel,
		viewport: 2,
		width :200,
		increment: 1,
		
		move : function(direction){
			var slots = document.getElementById("slots");
			this.increment += 50;
			if(!(this.increment > 200)){
				slots.style.left = this.increment + 50 + "px";
				setTimeout("JS.Carousel.move()",20)
				console.log(this.increment);
			} else {
				console.log("stopped");
			}
		},
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
			var lClick = document.getElementById("leftClick");
			lClick.onclick = function(){
				JS.Carousel.move("left");
			}
		},
		onRightClick : function(){
			var rClick = document.getElementById("rightClick");
			rClick.onclick = function(){
				JS.Carousel.move("right");
			}
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

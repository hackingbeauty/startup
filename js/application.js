(function(){

	if(!window.JS) {window.JS = {}}	//Create Namespace
	
	JS.printSetTimeout = function(){
	  for(var i = 0; i < 3; i++){
	    var interval = i;
	    console.log(interval);
	    setTimeout(function(interval){
	      alert(interval);
	    },1000)
	  }
	}
	
	JS.reverseList = function(list){
	  var iteration = Math.floor(list.length/2)
	  var count = 0;
	  for(var i = 0;i<=iteration;i++){
	    count++;
	    var firstElem = list[i];
	    var lastElem = list[list.length-count];
	    list[i] = lastElem;
	    list[list.length-count] = firstElem;
	  }
	  return list;
	}

	JS.recursivelyReverseList = function(list,start,end){
	  if (start > end) {
	    console.log(list);
      return list;
	  } else {  
      var firstElem = list[start];
      var lastElem = list[end];
      list[start] = lastElem;
      list[end] = firstElem;
	    JS.recursivelyReverseList(list,start+1,end-1); 
	  }
	}
	
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
	//JS.Carousel.animate();
  var arr = [1,2,3,4,5,6,7,8,9,10]
  // JS.reverseList(arr);
  //JS.printSetTimeout();
  // var newArr = JS.recursivelyReverseList(arr);
  console.log("the new arr is " + JS.recursivelyReverseList(arr,0,10));
});

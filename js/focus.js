// JavaScript Document

$(function(){
	function banner(){
		var index = 1;
		var len = $(".banner .list li").length;
		var time;
		
		for(i=1;i<=len;i++){
			var Obtn = $("<li>"+i+"</li>").appendTo($(".banner .btn"));
			}
		$(".banner .btn li").eq(0).addClass('hover');
		$(".banner .list li").eq(0).css("z-index","1");
		$(".banner .btn li").mouseover(function(){
				index = $(".banner .btn li").index(this);
				show(index);							
			})
		time = setInterval(function(){
				show(index);
				index++;
				if(index==len){index = 0}
			},5000);
		
		function show(index){
			$(".banner .list li p").removeClass('hover');
			$(".banner .list li").eq(index).find("p").addClass('hover');

			$(".banner .btn li").eq(index).addClass('hover').siblings("li").removeClass('hover');
			$(".banner .list li").eq(index).fadeIn(900).siblings("li").fadeOut(600);
		}
	}
	banner();
})


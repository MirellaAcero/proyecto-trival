$(function(){
	/* init */
	$('.cg-wrap').each(function(i,v){
		var curPer = $(this).find('.mask span').text();
		updatePrograss(this, curPer);
	});
	
	//hover
	var circleInterval = null;
	var targetNum = null;
	$('.cg-wrap').hover(function(e){
		var self = this;
		targetNum = $(this).find('.mask span').text();
		var curNum = 0;
		circleInterval = setInterval(function(){
			if(curNum <= targetNum){
				updatePrograss(self, curNum++);
			}else{
				clearInterval(circleInterval);
				circleInterval = null;
			}
		}, 30);
	}, function(e){
		if(circleInterval){
			//动画执行中
			updatePrograss(this, targetNum);
			clearInterval(circleInterval);
			circleInterval = null;
		}
	});
	
	function updatePrograss(el, persent){
		var persent = +persent;
		var deg = persent*360/100;
		if(deg>180){
			//左右半圆均需旋转
			$(el).find('.circle-left').css('transform', 'rotate('+(deg-180)+'deg)');
			$(el).find('.circle-right').css('transform', 'rotate(180deg)');
		}else{
			//右半圆旋转
			$(el).find('.circle-left').css('transform', 'rotate(0deg)');
			$(el).find('.circle-right').css('transform', 'rotate('+deg+'deg)');
		}
		//文本
		$(el).find('.mask span').text(persent);
	}
});




        
        
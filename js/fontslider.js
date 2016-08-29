// JavaScript Document
window.onload=function(){
function top_fun(){
		$(".top_con_right p.pinf").stop(true).animate({"top":"23px","opacity":"1"},1500,function(){
			$(".top_con_right p.jiaz").stop(true).animate({"right":"400px","opacity":"1"},1000,function(){
				$(".top_con_right p.bulang").stop(true).animate({opacity:"1"},300,function(){
					$(".top_con_right p.bulang").stop(true).animate({opacity:"0"},100,function(){
						$(".top_con_right p.bulang").stop(true).animate({opacity:"1"},300);
					});
				});
			});
		})
		
	}
	top_fun();
}

			window.onload=function(){
				var oTxt=document.getElementById('text1');
				var oBtn=document.getElementById('btn1');
				var oUl=document.getElementById('ul1');
				
				oBtn.onclick=function(){
					var oLi=document.createElement('li');//创建li 
					oLi.innerHTML=oTxt.value;//li里面的值就是文本框里面的值
					oTxt.value='';//文本框清空，方便下一次使用
					if(oUl.children. length>0){
						oUl.insertBefore(oLi,oUl.children[0]);//将li插到ul的第0个子节点前
					}
					else{
						oUl.appendChild(oLi);//将li扔到ul里面
					}
					//运动
					var iHeight=oLi.offsetHeight;//因为li的高度不确定，offsetHeight最大的好处就是自适应取出里面的东西，即高度完全是根据里面的内容有多高撑起来的
		
		           oLi.style.height='0';//取到高度之后将高度清零
		           //高度变高同时透明度变大
		           startMove(oLi, {height: iHeight}, function (){
			       startMove(oLi, {opacity: 100});
		          });

				
				}
		};
			
            
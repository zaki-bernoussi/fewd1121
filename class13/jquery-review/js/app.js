$('.box').click(function (){
  
	$(this).css({'background-color': 'red', 'height':'500px','color':'white'}).html("This is a box");

	$(this).hide();
});
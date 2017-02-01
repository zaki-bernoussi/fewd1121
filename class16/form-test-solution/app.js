$(document).ready(function () {
	var name;

	$('#submit').click(function(event){
		name = $('#name-input').val();
		$('#target').html(name);
		event.preventDefault();
	});
});
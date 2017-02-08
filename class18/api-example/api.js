var title;

$('#submit').click(function(e){
	title = $('#title').val();
	
	getMovie(title);
    e.preventDefault();
});

function getMovie(movieName)
{
    $.getJSON("http://www.omdbapi.com/?t=" + title + "&y=&plot=short&r=json", function(json) {
         console.log(json.Director);
         titleOutput.text(json.Title);
         poster.attr('src', json.Poster); 
    });
}




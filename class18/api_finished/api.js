var title;

$('#submit').click(function(e){
    title = $('#title').val();

    getMovie(title);
    console.log(title);
    e.preventDefault();
});

function getMovie(movieName)
{
    
    $.getJSON("http://www.omdbapi.com/?t=" + title + "&y=&plot=short&r=json", function(json) {
         console.log(json);

        $('#title_output').html(json.Title);
        $('#starring_output').text(json.Actors);
        $('#plot_output').text(json.Plot);
        $('img').attr('src', json.Poster);  
    });
}




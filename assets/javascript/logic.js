var gifs = ["Giants", "Warriors", "Labrador"];

function displayGifInfo () {

    var gif = $(this).attr("data-name");
    
    //var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=fJVy8ZZr3t7r8IWfXqWpNjs2Qqglyek1&tag=" + gif + '"';
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + gif + "&api_key=fJVy8ZZr3t7r8IWfXqWpNjs2Qqglyek1&limit=5";
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
console.log(response)
        var results = response.data;

        for (var i = 0; i < results.length; i++){
        var imageUrl = results[i].images.original_still.url;

        var gifImage = $("<img>")

        gifImage.attr("src", imageUrl);
    
        $("#gifs-view").prepend(gifImage);
        console.log(gifImage)
        }
      });
}

function renderButtons() {

    $("#buttons-view").empty();

    for (i = 0; i < gifs.length; i++) {
        var button = $("<button>");

        button.addClass("gif-btn");

        button.attr("data-name", gifs[i]);

        button.text(gifs[i]);

        $("#buttons-view").append(button);

    }
}

$("#add-gif").on("click", function(event) {
    event.preventDefault();

    var gif = $("#gif-input").val().trim();

    gifs.push(gif);
    console.log(gifs);

    renderButtons();
})

$(document).on("click", ".gif-btn", displayGifInfo);

renderButtons();
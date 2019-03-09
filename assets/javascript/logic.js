var gifs = ["SF Giants", "Golden State Warriors", "Black Labs"];

function displayGifInfo () {

    var gif = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=fJVy8ZZr3t7r8IWfXqWpNjs2Qqglyek1&tag=" + gif + '"';

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
console.log(response)


        var imageUrl = response.data.image_original_url;

        var gifImage = $("<img>")

        gifImage.attr("src", imageUrl);
    
        $("#gifs-view").prepend(gifImage);
        console.log(gifImage)
      });
}

function renderButtons() {

    $("#buttons").empty();

    for (i = 0; i < gifs.length; i++) {
        var button = $("<button>");

        button.addClass("gif");

        button.attr("data-name"), gifs[i];

        button.text(gifs[i]);

        $("#buttons").append(button);

    }
}

$("#addGif").on("click", function(event) {
    event.preventDefault();

    var gif = $("#gif-input").val().trim();

    gifs.push(gif);
    console.log(gifs);

    renderButtons();
})

$(document).on("click", ".gif", displayGifInfo);

renderButtons();
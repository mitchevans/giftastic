var gifs = [" SF Giants", "Warriors", "Black Lab"];

function displayGifInfo() {

    var gif = $(this).attr("data-name");

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gif + "&api_key=fJVy8ZZr3t7r8IWfXqWpNjs2Qqglyek1&limit=10";
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)

        var results = response.data;

        for (var i = 0; i < results.length; i++) {
            ;

            var gifImage = $("<img>")

            gifImage.addClass("gif");

            gifImage.attr("src", results[i].images.fixed_height_still.url);

            gifImage.attr("data-still", results[i].images.fixed_height_still.url)

            gifImage.attr("data-state", "still")

            gifImage.attr("data-animate", results[i].images.fixed_height.url);


            $("#gifs-view").prepend(gifImage);
            console.log(gifImage)
        }
    });
}

$(document).on('click', '.gif', function () {
    var state = $(this).attr('data-state');
    if (state == 'still') {
        $(this).attr('src', $(this).data('animate'));
        $(this).attr('data-state', 'animate');
    } else {
        $(this).attr('src', $(this).data('still'));
        $(this).attr('data-state', 'still');
    };
});

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

$("#add-gif").on("click", function (event) {
    event.preventDefault();

    var gif = $("#gif-input").val().trim();

    gifs.push(gif);
    console.log(gifs);

    renderButtons();
})

$(document).on("click", ".gif-btn", displayGifInfo);

renderButtons();
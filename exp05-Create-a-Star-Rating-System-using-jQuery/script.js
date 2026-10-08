$(document).ready(function() {

    let selectedRating = 0;

    // When mouse enters a star
    $("#stars span").mouseenter(function() {

        let rating = $(this).data("rating");

        $("#stars span").each(function() {

            if ($(this).data("rating") <= rating) {
                $(this).addClass("active");
            }
            else {
                $(this).removeClass("active");
            }

        });

    });


    // When mouse leaves the stars
    $("#stars").mouseleave(function() {

        $("#stars span").each(function() {

            if ($(this).data("rating") <= selectedRating) {
                $(this).addClass("active");
            }
            else {
                $(this).removeClass("active");
            }

        });

    });


    // When a star is clicked
    $("#stars span").click(function() {

        selectedRating = $(this).data("rating");

        $("#result").text("Rating: " + selectedRating);

        $("#stars span").each(function() {

            if ($(this).data("rating") <= selectedRating) {
                $(this).addClass("active");
            }
            else {
                $(this).removeClass("active");
            }

        });

    });

});
//to do
//adding an article to "saved"

$(document).on("click", ".saveBtn", function () {


    var Article = {
        title: $(this).parent().siblings("div").children("a.titleLink").text(),
        link: $(this).parent().siblings("div").children("a.titleLink").attr("href")
    };

    console.log(Article);

    $.ajax({
        method: "POST",
        data: Article,
        url: "/saved"
    }).done(function () {

        console.log("Article saved!");
        // location.reload();

    });
});



//event for adding comments to an article

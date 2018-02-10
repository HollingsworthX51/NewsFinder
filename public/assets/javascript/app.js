//to do
//adding an article to "saved"

$(document).on("click", ".saveBtn", function () {


    var savedArticle = {
        title: $(this).parent().siblings("div").children("a.titleLink").text(),
        link: $(this).parent().siblings("div").children("a.titleLink").attr("href")
    };

    console.log(savedArticle);

    $.ajax({
        method: "POST",
        data: savedArticle,
        url: "/saved"
    }).done(function () {

        console.log("Article saved!");
        // location.reload();

    });
});



//event for adding comments to an article

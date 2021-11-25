$(document).ready(function() {
    $(".revslider").each(function() {
        var slide_id = $(this).data("slide-id");
        var that = $(this);
        $.ajax({
            type: "GET",
            url: "https://revslider.fronle.com/slide.php?slideID=" + slide_id,
            dataType: "html",
            success: function(html) {
                that.html(html);
            }
         });
    });
});

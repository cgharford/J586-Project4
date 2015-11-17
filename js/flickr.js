(function($) {
    $(document).ready(function() {
        $.slidebars();
        getFlickrData("election2016");
    });
}) (jQuery);

$("#search").keyup(function(event) {
    if (event.which == 13) {
        var keyword = $("#search").val();
        getFlickrData(keyword);
     }
});

function getFlickrData(keyword) {
    var html = "";
    var apiurl = "https://api.flickr.com/services/feeds/photos_public.gne?tags=" + keyword + "&format=json&jsoncallback=?";
    $(document).ready(function(){
        $.getJSON(apiurl,function(json){

            html = '<div class="col-lg-12">';
            $.each(json.items, function(i, data){
                html += '<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12" style="text-align: center"><a href="' + data.link + '"><img class="flickr-photos" src=" ' + data.media.m + '"></a></div>';
            })
            html += '</div>';
            $("#results").text("");
            $("#results").append(html);
        });
    });
}

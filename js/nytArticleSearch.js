(function($) {
    $(document).ready(function() {
        getNewsData("election2016");
    });
}) (jQuery);

$("#search-news").keyup(function(event) {
    if (event.which == 13) {
        var keyword = $("#search-news").val();
        getNewsData(keyword);
     }
});

function getNewsData(keyword) {
	var apiurl = "http://api.nytimes.com/svc/search/v2/articlesearch.json?callback=svc_search_v2_articlesearch&q=" + keyword + "&begin_date=20120101&sort=newest&hl=true&api-key=9ed7ffe1f07567ee716a8827aaee57a5:8:73609312"
	var nyt = "";
    var nytFeed = "";
	var nytFeedMobile = "";

        $.ajax({
        	type: "GET",
        	dataType: "json",
        	cache: false,
        	url: apiurl,
        	success: parseData
        });

        function parseData(json){
            console.log(json);
            var i = 0;
            nytFeed = "";

            $.each(json.response.docs,function(i, theNode){
				var date = new Date(theNode.pub_date);
				var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
				var day = days[date.getDay()];
				var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
				var month = months[date.getMonth()];
				var dayOfMonth = date.getDate();
				var year = date.getFullYear();

				var multimediaArray = [];
				nodeMultimedia = theNode.multimedia;
				var imgURL = "http://www.nytimes.com/";
				var multimediaImg = nodeMultimedia[0];
				var multimediaURL;

				if (theNode.type_of_material != "Blog") {
                    nytFeed += '<div class="articleDiv">';
                    nytFeed += '<a href="' + theNode.web_url + '" target="_blank"> <div class="articleHeadline">' + theNode.headline.main + '</div></a>';
                    nytFeed += '<div class="articleByline">' + theNode.byline.original + '</div>';
                    nytFeed += '<div class="articleDate">' + month + ' ' + dayOfMonth + ', ' + year + '</div>';
                    if (theNode.lead_paragraph != null) {
                        nytFeed += '<div class="articleIntro">' + theNode.lead_paragraph + '</div>'
    				}
                    nytFeed += '</div>';
				}
            });
            $("#results").text("");
            $("#results").append(nytFeed);
            // $('#articleFeed').append(nytFeed);
			// $('#articleFeedMobile').append(nytFeedMobile);
	  }
};

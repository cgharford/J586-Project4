<html>
<head>
    <link rel="stylesheet" href="css/styles.css">
    <script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    <script src="js/tweetLinkIt.js"></script>
    <script>
        function pageComplete(){
            $('.tweet').tweetLinkify();
        }
    </script>
</head>
<body>
    <?php
    ini_set('display_errors', 1);
    require_once('TwitterAPIExchange.php');

    /** Set access tokens here - see: https://dev.twitter.com/apps/ **/
    $settings = array(
        'oauth_access_token' => "4158436696-IuFcxfjfegD8aqDrZ2UEyXjid6YaXUIqq9Zl3ao",
        'oauth_access_token_secret' => "crxHCLNWVCn0fcQhlaVAPsC2DhRrYyUS1vgJxqhKb9c7d",
        'consumer_key' => "YvdgRn42tZty9P20csxQNVDk9",
        'consumer_secret' => "kXibOHdLGWFpdOgN2eQzfEmzWublk1Rf9NoreEx4qUSap07CF0"
    );

    /** Perform a GET request and echo the response **/
    /** Note: Set the GET field BEFORE calling buildOauth(); **/
    $url = 'https://api.twitter.com/1.1/search/tweets.json';
    //$domDocumentObject->getElementById('search-twitter');
    $keyword = '#election2016';
    $getfield = '?q=' . $keyword;
    $requestMethod = 'GET';
    $twitter = new TwitterAPIExchange($settings);

    $tweetData = json_decode($twitter->setGetfield($getfield)
                ->buildOauth($url, $requestMethod)
                ->performRequest(),$assoc = TRUE);

    foreach($tweetData['statuses'] as $items){
        echo "<div class='tweet-container'>";
        echo "<img class='twitter-profile-picture' src='" . $items['user']['profile_image_url'] . "'>";
        echo "<div class='twitter-user'>";
        echo "<div class='twitter-username'>" . $items['user']['name'] . "<span class='twitter-screen-name'> @" . $items['user']['screen_name'] .  "</span></div>";
        echo "<div class='tweet-content tweet'>" . $items['text'] . "</div>";
        $tweetPhotoUrl = $items['entities']['media']['url'];
        echo $tweetPhotoUrl;
        echo "<img class='tweet-photo' src='" . $items['entities']['media']['url'] . "'>" . $items['entities']['media']['url'];
        echo "</div>";
        echo "</div>";
    }
    echo "<script>pageComplete();</script>";
    ?>
</body>
</html>

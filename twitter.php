<html>
<head>
    <link rel="stylesheet" href="css/styles.css">
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

    /** URL for REST request, see: https://dev.twitter.com/docs/api/1.1/ **/
    // $url = 'https://api.twitter.com/1.1/search/tweets.json';
    // $requestMethod = 'POST';
    //
    // /** POST fields required by the URL above. See relevant docs as above **/
    // $postfields = array(
    //     'screen_name' => 'usernameToBlock',
    //     'skip_status' => '1'
    // );
    //
    // /** Perform a POST request and echo the response **/
    // $twitter = new TwitterAPIExchange($settings);
    // echo $twitter->buildOauth($url, $requestMethod)
    //              ->setPostfields($postfields)
    //              ->performRequest();

    /** Perform a GET request and echo the response **/
    /** Note: Set the GET field BEFORE calling buildOauth(); **/
    $url = 'https://api.twitter.com/1.1/search/tweets.json';
    $getfield = '?q=unc';
    $requestMethod = 'GET';
    $twitter = new TwitterAPIExchange($settings);
    // echo $twitter->setGetfield($getfield)
    //              ->buildOauth($url, $requestMethod)
    //              ->performRequest();

    $tweetData = json_decode($twitter->setGetfield($getfield)
                ->buildOauth($url, $requestMethod)
                ->performRequest(),$assoc = TRUE);

    // echo $tweetData;

    foreach($tweetData['statuses'] as $items){
        echo "<div class='tweet-container'>";
        echo "<img class='twitter-profile-picture' src='" . $items['user']['profile_image_url'] . "'>";
        echo "<div class='twitter-user'>";
        echo "<div class='twitter-username'>" . $items['user']['name'] . "<span class='twitter-screen-name'> @" . $items['user']['screen_name'] .  "</span></div>";
        echo "<div class='tweet-content'>" . $items['text'] . "</div>";
        echo "</div>";
        echo "</div>";
    }
    ?>
</body>
</html>

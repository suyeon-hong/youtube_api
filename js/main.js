$.ajax({
    url: "https://www.googleapis.com/youtube/v3/playlistItems",
    dataType: "jsonp",
    data: {
        part: "snippet",
        key: "AIzaSyDLlgfKVBsGJubow2HpPxjC1LJgGRtpBHA",
        maxResults: 5,
        playlistId: "PLbO44G2j_RJzPLODoK6qiJwJ39JK4JyCY"
    }
}).success(function(data){
    let items = data.items;
    console.log(items);

    $(items).each(function(index, data){
        $("#vidGallery").append(
            $("<article>").append(
                $("<a>").attr({href: data.snippet.resourceId.videoId}).append(
                    $("<img>").attr({src: data.snippet.thumbnails.high.url})
                ),
                $("<div class='con'>").append(
                    $("<h2>").text(data.snippet.title),
                    $("<p>").text(data.snippet.description),
                    $("<span>").text(data.snippet.publishedAt)
                )
            )
        )
    });
}).error(function(err){
    console.error(err);
});

/*
$.ajax({
    url: "https://www.googleapis.com/youtube/v3/playlistItems",
    dataType: "jsonp",
    data: {
        part: "snippet",
        key: "AIzaSyDLlgfKVBsGJubow2HpPxjC1LJgGRtpBHA",
        maxResult: 3,
        playlistId: "PLbO44G2j_RJzPLODoK6qiJwJ39JK4JyCY"
    }
}).success(function(data){
    let items = data.items;
    console.log(items);

    $(items).each(function(index, data){
        $("#vidGallery").append(
            $("<article>").append(
                $("<a>").attr({href: data.snippet.resourceId.videoId}).append(
                    $("<img>").attr({src: data.snippet.thumbnails.high.url})
                ),
                $("<div class='con'>").append(
                    $("<h2>").text(data.snippet.title),
                    $("<p>").text(data.snippet.description),
                    $("<span>").text(data.snippet.publishedAt)
                )
            )
        )
    });
}).error(function(err){
    console.error(err);
});
*/
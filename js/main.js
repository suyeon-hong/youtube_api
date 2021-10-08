$.ajax({
    url: "https://www.googleapis.com/youtube/v3/playlistItems",
    dataType: "jsonp",
    data: {
        part: "snippet",
        key: "AIzaSyDLlgfKVBsGJubow2HpPxjC1LJgGRtpBHA",
        maxResults: 2,
        playlistId: "PLbO44G2j_RJzPLODoK6qiJwJ39JK4JyCY"
    }
}).success(function(data){
    let items = data.items;
    console.log(items);

    $(items).each(function(index, data){
        // 본문 텍스트 내용이 200글자를 넘어가면 말줄임표 붙이기
        let txt = data.snippet.description;
        let len = txt.length;

        if(len > 200){
            txt = txt.substr(0, 200) + "...";
        }

        // 날짜 텍스트 정리
        let date = data.snippet.publishedAt;
        date = date.split("T")[0];

        $("#vidGallery").append(
            $("<article>").append(
                $("<a>").attr({href: data.snippet.resourceId.videoId}).append(
                    $("<img>").attr({src: data.snippet.thumbnails.high.url})
                ),
                $("<div class='con'>").append(
                    $("<h2>").text(data.snippet.title),
                    $("<p>").text(txt),
                    $("<span>").text(date)
                )
            )
        )
    });
}).error(function(err){
    console.error(err);
});

// 썸네일 클릭시 레이어팝업으로 유튜브 영상 호출하기
$("body").on("click", "#vidGallery article a", function(e){
    e.preventDefault();

    let vidId = $(this).attr("href");

    $(".pop").remove();
    $("body").append(
        $("<div class='pop'>").append(
            $("<iframe>").attr({
                src: "https://www.youtube.com/embed/"+ vidId,
                frameborder: 0,
                width: "100%",
                height: 600
            }),
            $("<span>").text("CLOSE")
        )
    )
});
$("body").on("click", ".pop", function(){
    $(".pop").remove();
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
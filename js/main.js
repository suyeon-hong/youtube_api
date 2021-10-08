$.ajax({
    url: "https://www.googleapis.com/youtube/v3/playlistItems",
    datatype: "jsonp",
    data: {
        part: "snippet",
        key: "AIzaSyDLlgfKVBsGJubow2HpPxjC1LJgGRtpBHA",
        maxResults: 5,
        playlistId: "PLbO44G2j_RJzPLODoK6qiJwJ39JK4JyCY"
    }
}).success(function(data){
    console.log(data);
}).error(function(err){
    console.error(err);
});
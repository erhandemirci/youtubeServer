var pubSubHubbub = require("pubsubhubbub");


var options = {
  callback: "https://callbackerhan.herokuapp.com/youtube/callback",
  topic: "https://www.youtube.com/xml/feeds/videos.xml?channel_id=UC1zAttFQKikWoKH3Vb39ETA",
  mode: "subscribe",
  method: "POST",
  
};


var pubSubSubscriber = pubSubHubbub.createServer(options);

const PORT = process.env.PORT || '5000';
pubSubSubscriber.listen(PORT);
var topic = "https://www.youtube.com/xml/feeds/videos.xml?channel_id=UC1zAttFQKikWoKH3Vb39ETA";
var hub = "http://pubsubhubbub.appspot.com/subscribe";

pubSubSubscriber.on("subscribe", function(data){
    console.log(data.topic + " subscribed");
});



pubSubSubscriber.on("listen", function(){
    pubSubSubscriber.subscribe(topic, hub, function(err){
        if(err){
            console.log("Failed subscribing");
        }else{
console.log("subscribing is well");
}
    });
});   

pubSubSubscriber.on('feed', data => {
    console.log(data);
    console.log(data.feed.toString());

    pubsub.unsubscribe(topic, hub);
});

pubSubSubscriber.on('listen', () => {
    console.log('Server listening on port %s', pubsub.port);
    pubsub.subscribe(topic, hub);
});

  

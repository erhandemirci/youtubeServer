


const YouTubeNotifier = require('youtube-notification');
 
const notifier = new YouTubeNotifier({
  hubCallback: 'https://youtubecallbackplace.herokuapp.com/youtube/callback',
  port: 8080,
  path: '/youtube'
});
notifier.setup();
 
notifier.on('notified', data => {
  console.log('New Video');
  console.log(
    `${data.channel.name} just uploaded a new video titled: ${data.video.title}`
  );
});
 
notifier.subscribe('UC1zAttFQKikWoKH3Vb39ETA');


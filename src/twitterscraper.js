const Twitter = require('twitter');
const env = require('./env.json');

  let client = new Twitter(env);
function fetchTweets(callback, max_id){
  if(max_id === 0){
    client.get('statuses/user_timeline',{'screen_name':'realdonaldtrump', 'count': '200'}, function(error, tweets, response) {
      if (error) {
        console.log(error)
      }
      callback(tweets);
      console.log("Fetched " + tweets.length + "tweets.");  // The favorites. 
      //console.log(response);  // Raw response object. 
    });
  }
  else{
    client.get('statuses/user_timeline',{'screen_name':'realdonaldtrump', 'count': '200', 'max_id': max_id}, function(error, tweets, response) {
      if (error) {
        console.log(error)
      }
      callback(tweets);
      console.log("Fetched " + tweets.length + "tweets.");  // The favorites. 
      //console.log(response);  // Raw response object. 
    });
  }
}

let tweetData = [];
function processTweets(tweets){
  console.log(tweets.length)
  tweetData = tweetData.concat(tweets);
  console.log(tweetData.length)
  if(tweets.length===0 || tweetData.length < 1000){
    fetchTweets(processTweets, tweets[tweets.length - 1].id_str)
  }else{
    const fs = require('fs')
    fs.writeFile("../1000TrumpTweets.json", JSON.stringify(tweetData), 'utf8', function(err){
      return console.log(err)
    });
  }
}

fetchTweets(processTweets, 0);
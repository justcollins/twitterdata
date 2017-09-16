// <reference path="../node_modules/moment/moment.d.ts" />

import * as React from 'react';
import './App.css';
import './1000TrumpTweets.json';
import WordCount from './Wordcount';

const logo = require('./logo.svg');
const fs = require('fs');
//const dateFns = require('date-fns');

interface Tweet {
  id: Number;
  time: Date;
  username: String;
  text: String;

}
class App extends React.Component {
  componentDidMount() {
    console.log(fs);
    let twitterData: any = require('./1000TrumpTweets.json');
    let betterData: any = require('./output.json');
    console.log(betterData);
    let tweetObjects: Array<Tweet> = [];
    for (let i = 0; i < twitterData.length; i++) {
      let midTime = new Date(Date.parse(twitterData[i].created_at));
      midTime.setHours(midTime.getHours() - 7);
      let midTweet: Tweet = {
        id: twitterData[i].id,
        time: midTime,
        username: twitterData[i].user.name,
        text: twitterData[i].text
      };
      tweetObjects.push(midTweet);
    }
    let hourOfDay = {};
    let wordCount = {};
    for (let i = 0; i < tweetObjects.length; i++) {
      let hour = tweetObjects[i].time.getHours();
      let words = tweetObjects[i].text.split(' ').map(word => {
        return word.replace(/[^a-zA-z]/g, '').toLowerCase();
      });
      for (let word of words){
        if (wordCount[word] !== undefined){
          wordCount[word] = wordCount[word] + 1;
        }else {
          wordCount[word] = 1;
        }
      }
      if (hourOfDay[hour] !== undefined) {
        hourOfDay[hour] = hourOfDay[hour] + 1;
      }else {
        hourOfDay[hour] =  1;
      }
    }
    this.setState({
      hourOfDay: hourOfDay,
    });
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <WordCount wordList={WordCount}/>
      </div>
    );
  }
}

export default App;

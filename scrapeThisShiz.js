'use strict';

let stream = require( 'stream' );
let Scraper = require( 'twitter-scraper' ).Scraper;

let query = 'from:realdonaldtrump since:2017-09-01 until:2017-09-11';
let scraper = new Scraper( query );
let fs  = require('fs');
let wstream = fs.createWriteStream('output.json')
wstream.objectMode = true;
let objectContainer = [];
let objectConstructor = new stream.Writable( {
 objectMode: true,
 write: function( tweet, enc, cb ) {
    //wstream.write(tweet,enc);
    objectContainer.push(tweet);
    process.stdout.write("Downloading " + data.length + " bytes\r");

   return cb();
 }
})

//scraper.pipe( toConsole );
scraper.pipe(wstream);
wstream.on('close',()=>{
    console.log("All done mofs");
});

// Start the scraper 
scraper.start();
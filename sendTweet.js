let Twit = require('twit')
let config = require('./config')
let getLyrics = require('./lyrics')

var T = new Twit(config)

function read2 () {
    let lyrics = getLyrics().split('.')
    setInterval(tweetIt, 5000, lyrics)
}
read2()

function tweetIt(toSend) {
    let lyrics = getLyrics().split('.')
    let random = Math.floor(Math.random() * lyrics.length)
    let r = Math.floor(Math.random() * 100)
    let tweet = {
        status: `${r}: ${toSend[random]}`
    }

    T.post('statuses/update', tweet, tweeted)

    function tweeted(err, data, response) {
        if (err) {
            console.log('something went wrong..', err)
        } else {
            console.log('tweet sent!')
        }
    }
}


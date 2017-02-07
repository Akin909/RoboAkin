// Dependencies =======================================================
var twit = require('twit');
var config = require('./config');

var Twitter = new twit(config);
// Use Streams API for interacting with a USER
// Set up a user stream
var stream = Twitter.stream('user');

// FOLLOW-REPLY BOT =========================================================
// when someone follows
stream.on('follow',followed);
// Trigger the callback
function followed(event) {
	console.log('Follow Event is running');	
	// get user's twitter handler (screen name)
	var name = event.source.name,
		screenName = event.source.screen_name;
	// function that repies back to the user who followed
	tweetNow('@' + screenName + ' Thank you for the follow up.')
}

function tweetNow(tweetTxt) {
	var tweet = {
	status: tweetTxt	
	}	
	Twitter.post('statuses/update', tweet, function(err, data, response) {
		if (err) {
		console.log('Error in Replying');	
		} else {
		console.log('Gratitude shown successfully')	
		}	
	});
}

// RETWEET BOT =======================================================
// find latest tweet according the query 'q' in params
var retweet = function() {
	var params = {
			q: '#nodejs, #Nodejs', //REQUIRED
			result_type: 'recent',
			lang: 'en'
		}
		// for more parameters, see:
		// https://dev.twitter.com/rest/reference/get/search/tweets

	Twitter.get('search/tweets', params, function(err, data) {
		//if there are no errors
		if (!err) {
			// grab ID of tweet to retweet
			var retweetId = data.statuses[0].id_str;
			// Tell TWITTER to retweet
			Twitter.post('statuses/retweet/:id', {
				id: retweetId
			}, function(err, response) {
				if (response) {
					console.log('Retweeted');
				}
				if (err) {
					console.log('Something went wrong while RETWEETING... Duplication maybe');
				}
			});
		}
		// if unable to Search a tweet	
		else {
			console.log('Something went wrong while SEARCHING...');
		}
	});
}
// Grab & retweet as soon as program is running...
	retweet();
// Retweet every 50 minutes
setInterval(retweet, 5000000);

// FAVOURITE BOT ===================

// find a random tweet and 'favorite' it
function favoriteTweet() {
	var params = {
		q: '#nodejs,#Nodejs,#react,#javascript',
		result_type: 'recent',
		lang: 'en'
	}
	// for more parameters, see: https://dev.twitter.com/rest/reference

	// find the tweet

	Twitter.get('search/tweets',params, function(err,data) {
		// find tweets
		var tweet = data.statuses;
		var randomTweet = ranDom(tweet); // pick a random tweet

		// if random tweet exists
		if (typeof randomTweet !== undefined ) {
			// Tell TWITTER to 'favorite'
			Twitter.post('favorites/create',{id: randomTweet.id_str}, function(err,response) {
			if (err) {
				console.log('CANNOT BE FAVORITE..Error');
			} else {
			console.log('FAVORITED... Success!!!');	
			}
			});
		}
	});
}

// grab & 'favorite' a tweet as soon as program is running...
favoriteTweet();
//'favorite' a tweet every 60 minutes
setInterval(favoriteTweet,3600000);

//function to generate a random tweet

function ranDom(arr) {
	var index = Math.floor(Math.random() * arr.length);
	return arr[index]
}

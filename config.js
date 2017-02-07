//Config.js
/** TWITTER APP CONFIGURATION
	* consumer_key
FAbEy6vnDgYqAXL5wpmdR4M0c	
	* consumer_secret
    ZPeD9ht9OrXvgfYWoEcACUuMBCDZtBTrkfx760WTZgCogNT7UK	
	* access_token
	2397194284-A65roEolvDgELu7s8LgrlTLDJVz6a9mqcwTAxiR	
	* access_token_secret
dK4NwFsnAi9FApaBXK4hh47ICiKkmQtFJvCmOEMWwHJ07
	*/
// Including the keys as an or allows the bot to run locally
module.exports = {
	consumer_key: process.env.consumer_key || "FAbEy6vnDgYqAXL5wpmdR4M0c",
	consumer_secret: process.env.consumer_secret || 'ZPeD9ht9OrXvgfYWoEcACUuMBCDZtBTrkfx760WTZgCogNT7UK',
	access_token: process.env.access_token || '2397194284-A65roEolvDgELu7s8LgrlTLDJVz6a9mqcwTAxiR',
	access_token_secret: process.env.access_token_secret || 'dK4NwFsnAi9FApaBXK4hh47ICiKkmQtFJvCmOEMWwHJ07'

}

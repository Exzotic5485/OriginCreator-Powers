module.exports = {
	name: "Ignite On Hit",
	category: "Passive",
	description: "Will set on fire the entity you hit (Fire aspect)",
	options: [{
		title: "Duration",
		question: "The amount of seconds the entity should burn?",
		placeholder: "{duration}",
    example: "4"
	},
  {
		title: "Cooldown",
		question: "The cooldown between activating? (ticks)",
		placeholder: "{cooldown}",
    example: "20"
	}],
	json: `{
    "type": "origins:action_on_hit",
    "bientity_action": {
        "type": "origins:target_action",
        "action": {
            "type": "origins:set_on_fire",
            "duration": {duration}
        }
    },
    "cooldown": {cooldown},
    "hud_render": {
        "should_render": false
    }
}`
}

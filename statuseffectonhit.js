module.exports = {
	name: "Status Effect On Hit",
	category: "Combat",
	description: "Will give a potion effect to your target when you hit them.",
	options: [
    {
		title: "Status Effect On Hit",
		question: "How much Health do you want ?(0 is Normal)",
		placeholder: "{effect}"
	},
    {
		title: "Duration",
		question: "How many ticks do you want it to last?",
        example: "20",
		placeholder: "{duration}"
    },
    {
		title: "Cooldown",
		question: "Cooldown between when its activated",
        example: "20",
		placeholder: "{cooldown}"
    }
],
	json: `{
        "type": "origins:target_action_on_hit",
        "entity_action": {
            "type": "origins:apply_effect",
            "effect": {
                "effect": "{effect}",
                "duration": {duration},
                "amplifier": 0,
                "show_particles": true,
                "show_icon": true
            }
        },
        "cooldown": {cooldown}
    }`
}
module.exports = {
	name: "Fluid Walking",
	category: "Movement",
	description: "Allows you to walk on Fluids such as water/lava",
	options: [{
		title: "Fluid Type",
		question: "What Fluid type should be walkable?",
		placeholder: "{fluid}",
    example: "water , lava"
	}],
	json: `{
    "type": "origins:walk_on_fluid",
    "fluid": "minecraft:{fluid}",
    "condition": {
        "type": "origins:fluid_height",
        "fluid": "minecraft:{fluid}",
        "comparison": "<=",
        "compare_to": 0.4
    }
  }`
}

module.exports = {
    name: "Lava Swim",
    category: "Movement",
    description: "Allows the player to swim in lava! Use with **Fire Immunity** power.",
    options: [],
    json: `
    {
      "type": "origins:swimming",
      "condition": {
        "type": "origins:fluid_height",
        "fluid": "minecraft:lava",
        "comparison": ">",
        "compare_to": 0.0,
        "inverted": false
      }
    }`
}

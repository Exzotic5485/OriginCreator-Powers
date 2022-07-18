module.exports = {
    name: "Hydrophobia",
    category: "Passive",
    description: "Makes the player take damage while in water/rain",
    options: [
        {
           title: "Damage Amount",
           question: "The amount of damage taken? (2 = 1 heart)",
           placeholder: "{damage}",
           example: "2"
        }
    ],
    json: `
    {
        "type": "origins:damage_over_time",
        "interval": 20,
        "onset_delay": 1,
        "damage": {damage},
        "damage_easy": 1,
        "damage_source": {
          "name": "hurt_by_water",
          "unblockable": true,
          "bypasses_armor": true
        },
        "protection_enchantment": "origins:water_protection",
        "protection_effectiveness": 1.0,
        "condition": {
          "type": "origins:or",
          "conditions": [
            {
              "type": "origins:fluid_height",
              "fluid": "minecraft:water",
              "comparison": ">",
              "compare_to": 0.0
            },
            {
              "type": "origins:in_rain"
            }
          ]
        }
      }`
}

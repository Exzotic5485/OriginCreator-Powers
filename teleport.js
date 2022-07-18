module.exports = {
    name: "Teleport",
    category: "Movement",
    description: "Allows the player to teleport where they are looking",
    options: [
        {
           title: "Max Distance",
           question: "What is the max distance of blocks?",
           placeholder: "{max_distance}",
           example: "16"
        },
        {
            title: "Cooldown",
            question: "Cooldown in ticks?",
            placeholder: "{cooldown}",
            example: "200"
        },
        {
            title: "Key",
            question: "What key to use?",
            placeholder: "{key}",
            example: "primary | secondary"
        }
    ],
    json: `
    {
        "type": "apoli:active_self",
        "cooldown": {cooldown},
        "hud_render": {
          "should_render": false
        },
        "key": {
          "key": "key.origins.{key}_active",
          "continuous": false
        },
        "entity_action": {
          "type": "apoli:raycast",
          "distance": {max_distance},
          "command_at_hit": "tp @s ~ ~ ~",
          "before_action": {
            "type": "apoli:and",
            "actions": [
              {
                "type": "apoli:spawn_particles",
                "particle": {
                  "type": "minecraft:portal"
                },
                "count": 32,
                "offset_y": 0.25,
                "spread_y": 0.25,
                "spread_x": 0.65,
                "spread_z": 0.65
              },
              {
                "type": "apoli:play_sound",
                "sound": "minecraft:entity.enderman.teleport"
              }
            ]
          },
          "hit_action": {
            "type": "apoli:and",
            "actions": [
              {
                "type": "apoli:spawn_particles",
                "particle": {
                  "type": "minecraft:portal"
                },
                "count": 32,
                "offset_y": 0.25,
                "spread_y": 0.25,
                "spread_x": 0.65,
                "spread_z": 0.65
              },
              {
                "type": "apoli:play_sound",
                "sound": "minecraft:entity.enderman.teleport"
              }
            ]
          }
        },
        "condition": {
          "type": "apoli:raycast",
          "distance": {max_distance}
        }
      }`
}

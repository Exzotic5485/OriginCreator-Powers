module.exports = {
    name: "Eat Item",
    category: "Player",
    description: "Adds the ability to eat a specific item.",
    options: [
        {
            title: "Item",
            question: "What item do you want to be edible?",
            placeholder: "{item}",
            example: "minecraft:stick"
        },
        {
            title: "Food",
            question: "How much food should it give?",
            placeholder: "{food}",
            example: "2"
        },
        {
            title: "Saturation",
            question: "How much saturation should it give?",
            placeholder: "{saturation}",
            example: "0.7"
        }
    ],
    json: `{
        "type": "origins:active_self",
        "entity_action": {
            "type": "origins:and",
            "actions": [{
                    "type": "origins:equipped_item_action",
                    "equipment_slot": "mainhand",
                    "action": {
                        "type": "origins:consume",
                        "amount": 1
                    }
                },
                {
                    "type": "origins:feed",
                    "food": {food},
                    "saturation": {saturation}
                }
            ]
        },
        "condition": {
            "type": "origins:equipped_item",
            "equipment_slot": "mainhand",
            "item_condition": {
                "type": "origins:ingredient",
                "ingredient": {
                    "item": "{item}"
                }
            }
        },
        "cooldown": {cooldown},
        "hud_render": {
            "should_render": false
        },
        "key": {
            "key": "key.use"
        }
    }`
}

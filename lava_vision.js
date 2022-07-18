module.exports = {
    name: "Lava Vision",
    category: "Passive",
    description: "Makes the player able to see cleared under lava",
    options: [
        {
           title: "Near View",
           question: "Near view. Vanilla = 0.25 (Number)",
           placeholder: "{s}",
           example: "0.0"
        },
        {
            title: "Far View",
            question: "Far view. Vanilla = 0.25 (Number)",
            placeholder: "{v}",
            example: "0.0"
         }
    ],
    json: `
    {
        "type": "origins:lava_vision",
        "s": {s},
        "v": {v}
    }`
}

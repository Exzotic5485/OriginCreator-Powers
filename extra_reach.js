module.exports = {
    name: "Extra Reach",
    category: "Player",
    description: "Allows the player to reach further placing/attacking",
    options: [
        {
           title: "Value",
           question: "How many blocks further?",
           placeholder: "{value}",
           example: "1.5"
        }
    ],
    json: `
    {
        "type": "origins:attribute",
        "modifiers": [
          {
            "name": "Extra Reach block reach",
            "attribute": "reach-entity-attributes:reach",
            "value": {value},
            "operation": "addition"
          },
          {
            "name": "Extra Reach entity reach",
            "attribute": "reach-entity-attributes:attack_range",
            "value": {value},
            "operation": "addition"
          }
        ]
      }`
}

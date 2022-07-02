module.exports = {
    name: "Color",
    category: "Player",
    description: "Changes the Color of the Player",
    options: [{
        title: "Red Value",
        question: "What value should Red have?",
        placeholder: "{red}",
        example: "Range: 0.0-1.0"
    }, {
        title: "Green Value",
        question: "What value should Green have?",
        placeholder: "{green}",
        example: "Range: 0.0-1.0"
    }, {
        title: "Blue Value",
        question: "What value should Blue have?",
        placeholder: "{blue}",
        example: "Range: 0.0-1.0"
    }],
    json: `{
    "type": "origins:model_color",
    "red": {red},
    "green": {green},
    "blue": {blue},
    "alpha": {alpha}
    }`
}

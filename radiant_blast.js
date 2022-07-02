module.exports = {
    name: "Radiant Blast",
    category: "Combat",
    description: "You will summon matter from an unknown realm and when you hit it, it will be launched in the direction you hit it.",
    options: [
        {
            title: "Particle",
            question: "What particle should the trail be?",
            placeholder: "{particle}",
            example: "soul_fire_flame",
        },
        {
            title: "Key",
            question: "What Key should activate the power?",
            placeholder: "{key}",
            example: "primary , secondary",
        },
        {
            title: "Block",
            question: "What block would the power launch?",
            placeholder: "{block}",
            example: "sea_lantern",
        },
    ],
    json: `{
  "name":"{name}",
  "description":"{description}"
  "type":"origins:active_self",
  "entity_action":{
     "type":"origins:and",
     "actions":[
        {
           "type":"origins:execute_command",
           "command":"summon fireball ^ ^1 ^1 {NoGravity:0b,ExplosionPower:0b,life:60,Item:{id:\"minecraft:{block}\",Count:1b}}"
        },
        {
           "type":"origins:execute_command",
           "command":"particle {particle} ^ ^1 ^1 0.5 0.5 0.5 0.1 100 force"
        }
     ]
  },
  "cooldown":1200,
  "hud_render":{
    "should_render":true,
    "sprite_location":"origins:textures/gui/community/spiderkolo/resource_bar_02.png",
    "bar_index":23
  },
  "key":{
     "key":"key.origins.{key}_active"
  }
}`
}

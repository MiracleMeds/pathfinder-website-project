//In the effort to avoid overcomplicating things, I will use this
//js file to represent a database lol.

//In The Future:
//make a simplifier for the "traits" section so you only need to write "Manipulate, Earth,"
/*
LAYOUT TEMPLATE BELOW
for copy/paste

const [name] = {
    title: "",
    actionCost: "",
    trigger: "",
    requirements: "",
    traits: "",
    description: "",
    subtext: ""
}

don't forget to add the name of your const to the export list. 
and to import the const into actionAssembler.js (in the first line of code.)
and to put the const into the "actions" array. It's located on line 24 of actionAssembler.js. 
*/


const strike = {
    title: "Strike",
    actionCost: "1",
    trigger:"",
    requirements: "",
    traits: "<a href=\"glossary.html/#attack\" class=\"tag\">Attack</a>",
    description: "You attack with a weapon you're wielding or with an unarmed attack, targeting one creature within your reach (for a melee attack) or within range (for a ranged attack). Roll an attack roll using the attack modifier for the weapon or unarmed attack you're using, and compare the result to the target creature's AC to determine the effect.",
    subtext: "<b>Critical Success</b> You make a damage roll according to the weapon or unarmed attack and deal double damage. <b>Success</b> You make a damage roll according to the weapon or unarmed attack and deal damage."
    
}

const aid = {
    title: "Aid",
    actionCost: "4",
    trigger:"An ally is about to use an action that requires a skill check or attack roll.",
    requirements: "The ally is willing to accept your aid, and you have prepared to help (see below).",
    traits: "",
    description: "You try to help your ally with a task. To use this reaction, you must first prepare to help, usually by using an action during your turn. You must explain to the GM exactly how you're trying to help, and they determine whether you can Aid your ally.<br> When you use your Aid reaction, attempt a skill check or attack roll of a type decided by the GM. The typical DC is 15, but the GM might adjust this DC for particularly hard or easy tasks. The GM can add any relevant traits to your preparatory action or to your Aid reaction depending on the situation, or even allow you to Aid checks other than skill checks and attack rolls.",
    subtext:"<b>Critical Success</b> You grant your ally a +2 circumstance bonus to the triggering check. If you're a master with the check you attempted, the bonus is +3, and if you're legendary, it's +4. <br><b>Success</b> You grant your ally a +1 circumstance bonus to the triggering check. <br><b>Critical Failure</b> Your ally takes a –1 circumstance penalty to the triggering check."
}

const crawl = {
    title: "Crawl",
    actionCost: "1",
    trigger: " ",
    requirements: "You are prone and your speed is at least 10 feet.",
    traits: "<a href=\"glossary.html/#move\" class=\"tag\">Move</a>",
    description: "You move 5 feet by crawling and continue to stay prone.",
    subtext: ""
}

const delay = {
    title: "Delay",
    actionCost: "0",
    trigger: "Your turn begins.",
    requirements: "",
    traits: "",
    description: "You wait for the right moment to act. The rest of your turn doesn’t happen yet. Instead, you’re removed from the initiative order. You can return to the initiative order as a free action triggered by the end of any other creature’s turn. This permanently changes your initiative to the new position. You can’t use reactions until you return to the initiative order. If you Delay an entire round without returning to the initiative order, the actions from the Delayed turn are lost, your initiative doesn’t change, and your next turn occurs at your original position in the initiative order.",
    subtext: "When you Delay, any persistent damage or other negative effects that normally occur at the start or end of your turn occur immediately when you use the Delay action. Any beneficial effects that would end at any point during your turn also end. The GM might determine that other effects end when you Delay as well. Essentially, you can’t Delay to avoid negative consequences that would happen on your turn or to extend beneficial effects that would end on your turn."
}


export{strike, aid, crawl, delay};
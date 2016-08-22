//variables
var user = prompt("You are walking downtown minding your own business, when a masked mad man jumps out on you. What do you do? RUN, FIGHT or GIVE UP?").toLowerCase();

switch (user) {

    case 'run':
        var fast = prompt("Are you a fast runner? (Yes orNo)").toLowerCase();
        var legs = prompt("Have you got strong legs?").toLowerCase();

        if (fast === "yes" && legs === "yes") {
            console.log("You're fast, you got away");
        } else {
            console.log("You're dead");
        }
        break;

    case 'fight':
        var fight = prompt("Are you a fighter? Yes or No ?");
        var damage = prompt("You gonna do some damage? Yes or No?");

        if (fight === "yes" || damage === "yes") {
            console.log("Wow You did some serious damage, the masked man is dead.");
        } else {
            console.log("You got hammered, you're dead!");
        }
        break;

    case 'give up':
        var run = prompt("Do you want to run away? Yes or No? ");
        var giveUp = prompt("You gave up, are you sure? Yes or No?");

        if (run === "yes" && giveUp === "no") {
            console.log("You escaped, but barley wuss bag!")
        } else {
            console.log("You didn't run but you got that booty beat!!!")
        }
        break;
    default:
        console.log("You chose poorly, now you're dead.");
}

// variables

var slaying = true;
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random()*5 + 1);
var totalDamage = 0;

while(slaying) {
    if(youHit === 1) {
        console.log("Ahhhh you got me");
        totalDamage = totalDamage += damageThisRound;
        if(totalDamage >= 4) {
            console.log("You slew the dragon Hommie");
            slaying = false;
        } else if (totalDamage != 4 || totalDamage === 4) {
            youHit = Math.floor(Math.random() * 2);
        }
    } else {
        console.log("Missed me, now you got to kiss me");
    };
    slaying = false;
}

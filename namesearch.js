
//variables for search
var text = "I am Andrew, my name is Andrew, Andrew is my name, mun nimi on Andrew";

var myName = "Andrew";
var hits = [];

for(i = 0; i < text.length; i++) {
    if(text[i] === "A") {
        console.log("chicken")
        for(j = i; j < (myName.length + i); j++) {
            hits.push(text[j]);
        }
    };
};

if(hits.length === 0) {
    console.log("Your name wasn't found!");
} else {
    console.log(hits);
}

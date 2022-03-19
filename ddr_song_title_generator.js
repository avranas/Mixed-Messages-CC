//This program will randomly generate a fake DDR song title
//The message will have
//Prefix
//  Commonly used prefix like "MAX" or anything that would sound good at the beginning
//Main
//  Commonly used phrases in DDR songs or commonly used song like "PARANOIA"
//  or funny DDR song titles
//End
//  25% chance for an ending like a remix title or something that sounds good at the end
//  (List of DDR Remix titles here)
//Random Heart or Star in place of spaces


//returns random integer from 0 to max
function randInt(max){
    return Math.floor(Math.random() * max);
}

//Uses RNG to return true at a certain percentage rate (0 - 100)
function passOrFail(percentage){
    return Math.random() * 100 < percentage;
}

//10% chance of adding a heart or star, 90% of adding a blank space
function addRandHeartOrStar(string){
    if(passOrFail(10))
        if(passOrFail(50))
            string += '\u2606';
        else
            string += '\u2661';
    else
        string += ' ';            
    return string;
}

//Always use one of these
const prefixes = [
    'MAX', 'MAXX', 'New', 'Triple', 'LUV', 'LOVE', 'Digital', 'Fascination', 'Fly', 'HAPPY', 'In the', 'La', 'Sakura', 'Sparkle', 'Candy'
];

//Always use one of these
const mainTitles = [
    'AFRONOVA', 'AM-3P', 'B4U', 'BRILLIANT 2U', 'PARANOIA', 'Pluto', 'POSSESSION', 'Put Your Faith In Me', 'Saber Wing', 'TRIP MACHINE', 'Angel', '300', 'Mermaid Girl', 'Mirage', 'Reflection', 'storm', 'Sunrise', 'Moon', 'Seduction', 'shine', 'candy', 'dream', "Smilin'", 'Snowy Dance', 'Heart'
];


//25% chance of using a remix
const remixes = [
    'BOY ON BOY MIX', '(X-Special)', 'Terror-Tech Mix', '~Angelic Mix~', 'Jungle Mix', 'Endorphins Mix', '(MOMO MIX)', '(FROM NONSTOP MEGAMIX)', '(extreme version)', '(xac nanoglide mix)', '~luv mix~', 'MAX', 'SURVIVOR MAX'
];

const prefix = prefixes[randInt(prefixes.length)];
const mainTitle = mainTitles[randInt(mainTitles.length)];
const remix = remixes[randInt(remixes.length)];
let result = prefix;
result = addRandHeartOrStar(result);
result += mainTitle;
result = addRandHeartOrStar(result);
if(passOrFail(25)){
    result += remix;
    result = addRandHeartOrStar(result);
}


console.log(result);














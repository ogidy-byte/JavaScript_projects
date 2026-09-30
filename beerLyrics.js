// Lyrics of 99 bottles

var beerNo = 99;

function beerLyrics() {

while (beerNo <= 99 && beerNo >= 2) {
    console.log(beerNo + " bottles of beer on the wall, " + beerNo + " bottles of beer.\nTake one down and pass it around, " + (beerNo-1) + " bottles of beer on the wall.");

    beerNo--;
};

console.log("1 bottles of beer on the wall, 1 bottles of beer.\nTake one down and pass it around, no more bottles of beer on the wall.\nNo more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, no more bottles of beer on the wall.");

}

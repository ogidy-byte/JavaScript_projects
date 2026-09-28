// A bottle of milk is $1.50

function getMilk(money) {
    var bottlesToBuy = Math.floor(money / 1.5);
    console.log("I can buy " + bottlesToBuy + " bottles of milk");
}

getMilk(9);
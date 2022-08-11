const { boat } = require("./fishingBoat.js")

/*  fishmonger buys exactly 10 of EACH inexpensive fish; if less than 10, then no sale
        if fish.amount < 10, then set monger.amount to 0
    if fish more than $7.50, do not buy
        if fish.price > $7.50, set monger.amount to 0
    if fish is greater than chef's price, do not sell
        need parameter, priceChef; monger.price > priceChef, do not sell
    if fish.amount > 10, then each fish monger object quantity = 10  
        if fish.amount > 10 set monger.amount = 10
*/

const mongerFish = () => {
    let availableFish = [

    ]
     return availableFish
}
let availFish = mongerFish()

const mongerAmount = (mongerArray, priceInexp) => {
    for (let fish of boat) {
        if (fish.amount >= 10 && fish.price <=priceInexp) {
               fish.amount = 10
               availFish.push(fish)              
        }

     }    
    return availFish
}
 const Array = mongerAmount(boat, 7.50)



module.exports = {Array}
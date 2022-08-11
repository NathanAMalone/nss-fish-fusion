const {Array} = require("./fishMonger.js")


const restMenu = () => {
    let menu = [

    ]
    return menu
}
let menu = restMenu()
let htmlFishMenu = ""
const fishMenu = (mongerArray, priceChef) => {
    for (let fish of Array) {
        if (fish.price <= priceChef) {
            fish.amount = fish.amount * 0.5
            menu.push(fish)
} 
    }
    for (let item of menu) {
        htmlFishMenu += `<h1>Menu</h1>
                            <article class="menu">
                                <h2>${item.species}</h2>
                                <section class="menu__item">"${item.species} Soup"</section>
                                <section class="menu__item">"${item.species} Sandwich"</section>
                                <section class="menu__item">"Grilled ${item.species}"</section>
                            </article>`
    }
    return htmlFishMenu
}
let htmlMenu = fishMenu(Array, 4)
console.log(htmlMenu)
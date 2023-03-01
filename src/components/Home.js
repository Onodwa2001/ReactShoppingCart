import Navbar from './Nav';
import MarketItems from './MarketItems';
import { useState } from 'react';

function Home() {
    const items = [
        {name: "I'm awesome shirt", image: 'gorrilla.jpg', price: 230, available: true, key: 1},
        {name: "Adidas Watch", image: 'purefit.jpg', price: 310, available: false, key: 2},
        {name: "Guess Jeans", image: 'whey.jpg', price: 880, available: true, key: 3},
        {name: "G-Star Raw Jeans", image: 'homebg.jpeg', price: 1200, available: false, key: 4},
        {name: "Nike Sweatpants", image: 'nutritech-hulk-gainer-plus-free-nuke.jpg', price: 800, available: true, key: 5}
    ]

    return(
        <div className="Home">
            <Navbar />
            <MarketItems items={items} title={"Available Items"} />
        </div>
    )
}

export default Home
import Navbar from './Nav';
import MarketItems from './MarketItems';
import { useState } from 'react';

function Home() {
    const items = [
        {name: "I'm awesome shirt", img: 'gorilla.jpg', price: 230, available: true, key: 1},
        {name: "Adidas Watch", img: 'purefit.jpg', price: 310, available: false, key: 2},
        {name: "Guess Jeans", img: 'whey.jpg', price: 880, available: true, key: 3},
        {name: "G-Star Raw Jeans", img: 'homebg.jpeg', price: 1200, available: false, key: 4},
        {name: "Nike Sweatpants", img: 'nutritech-hulk-gainer-plus-free-nuke.jpg', price: 800, available: true, key: 5}
    ]

    return(
        <div className="Home">
            <Navbar />
            <MarketItems items={items} title={"Available Items"} />
        </div>
    )
}

export default Home
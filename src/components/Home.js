import Navbar from './Nav';
import MarketItems from './MarketItems';
import { useState } from 'react';

function Home() {
    const items = [
        {name: "Nutritech Vegan Gorrilla Trainer", image: 'gorrilla.jpg', price: 230.00, available: true, key: 1},
        {name: "Purefit USN Pro Enduro", image: 'purefit.jpg', price: 310.01, available: false, key: 2},
        {name: "Nutritech Premium Whey Protein", image: 'whey.jpg', price: 880.50, available: true, key: 3},
        {name: "G-Star Raw Jeans", image: 'homebg.jpeg', price: 1200.11, available: false, key: 4},
        {name: "Nurtitech Hulk Gainer plus free Nuke", image: 'nutritech-hulk-gainer-plus-free-nuke.jpg', price: 800.30, available: true, key: 5}
    ]

    return(
        <div className="Home">
            <Navbar />
            <MarketItems items={items} title={"Supplement store"} />
        </div>
    )
}

export default Home
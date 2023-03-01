import '../App.css'
import { useState } from "react"
import Details from "./Details"
import SearchBar from "./SearchBar"

function MarketItems({ items, title }) {

    let [key, setKey] = useState(0);
    let [name, setName] = useState("");
    let [image, setImage] = useState("");
    let [price, setPrice] = useState(0);

    const setItem = (key, name, image, price) => {
        setKey(key)
        setName(name)
        setImage(image)
        setPrice(price)
    }


    // Search Val Functionality
    let [myItems, setMyItems] = useState(items)
    let [searchValue, setSearchValue] = useState('');

    const getValue = (e) => {
        setSearchValue(e.target.value)
    }

    let notFound = <div>Item not found; please refresh page to search for other items</div>

    const search = (e) => {
        myItems = myItems.filter((item) => (
            item.name.includes(searchValue)
        ));

        if(searchValue !== '') {
            setMyItems(myItems)
        } else {
            setMyItems(items)
        }
    }

    return(
        <div className="market">
            <h1 className="title">{title}</h1>
            <SearchBar getValue={getValue} search={search} searchValue={searchValue}  />

            <div className="items-wrapper">
                <div className="items-available">
                    {myItems.length === 0 ? notFound : myItems.map((item) => (
                        <div className="item" key={item.key} onClick={() => {setItem(item.key, item.name, item.image, item.price)}}>
                            <div className="image" style={{
                                background: "url(/" + item.image + ")",
                                backgroundSize: "cover" 
                            }}>
                                
                            </div>
                            <h2>{item.name}</h2>
                            <p>Price: <b>R {item.price}</b></p>
                            <p>Available: {item.available ? 'Yes' : 'No'}</p>
                            {/* <button>Select Item</button> */}
                        </div>
                    ))}
                </div>
                <div className="details-wrap">
                    {key !== 0 ? <Details uniqueKey={key} name={name} image={image} price={price} /> : <div>Details will be displayed here</div>}
                </div>
            </div>
        
        </div>
    )
}

export default MarketItems

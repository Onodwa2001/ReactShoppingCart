import '../App.css'
import { useState } from 'react';

function Details({ uniqueKey, name, price }) {

    let [qty, setQty] = useState(1)

    const increment = () => {
        setQty(++qty)
    }

    const decrement = () => {
        if (qty > 1)
            setQty(--qty)
    }

    let items = []

    const checkDuplicate = () => {
        for (let i = 0; i < items.length; i++) {
            if (items[i].uniqueKey === uniqueKey) {
                return true
            }
        }
        return false
    }

    const addItem = () => {

        Object.entries(sessionStorage).forEach((element, index) => {
            items.push(JSON.parse(element[1]))
        });
        
        let item = JSON.stringify({uniqueKey, name, price, qty})
        let len = sessionStorage.length
        // let last = sessionStorage.key(len -1)

        if (checkDuplicate()) {
            alert('item already added')
        } else {
            // sessionStorage.setItem(len++, item)
            sessionStorage.setItem(uniqueKey, item)
            alert('Item successfully added to cart')
        }
        
    }

    return(
        <div className="details">
            <div className="image">
                
            </div>
            <div className="options">
                <h1>{ name }</h1>
                <p>Price: R { price }</p>
                <div className="increment">
                    <button className="minus" onClick={decrement}>-</button>
                    <div>{ qty }</div>
                    <button className="plus" onClick={increment}>+</button>
                </div>
                <button className="add" onClick={addItem}>Add to cart <span>+</span></button>
            </div>
        </div>
    )
}

export default Details
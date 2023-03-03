import { Link } from 'react-router-dom'

function CartItems({ totalItems }) {
    let sessionObjects = Object.entries(sessionStorage)
    let item = ''
    let arr = []

    sessionObjects.forEach((element, index, array) => {
        item = JSON.parse(element[1])
        arr.push(item)
    });


    const removeItem = (key) => {
        sessionStorage.removeItem(key)
        alert('Item removed successfully')
        window.location.reload(true)
    }

    const formatter = new Intl.NumberFormat('en-ZA', {
        style: 'currency',
        currency: 'ZAR',
    });

    // NB!!! DO NOT FORGET TO DELETE TEMP PROPERTY WHEN PLACING ORDER

    return(
        <div className="CartItems">
            <h1 className='cart-title'>{totalItems} items in cart</h1>
            {arr.map((el) => (
                <div className="cartItem" key={el.uniqueKey}>
                    <div className='cartImage' style={{
                        background: "url(" + el.image + ")",
                        backgroundSize: "cover"
                    }}></div>
                    <div className='cartItemDetails'>
                        <h1>{el.name}</h1>
                        <h2> { formatter.format(el.price) }</h2>
                    </div>
                    <div className='qty'>
                        <h3>Qty: {el.qty}</h3>
                        {/* 3916598.png */}
                        <img src='wishlist-1.png' width={25} className="wishlistIcon" /><br/>
                        <button onClick={() => removeItem(el.uniqueKey)}>X</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CartItems
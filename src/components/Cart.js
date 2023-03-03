import '../App.css'
import CartItems from './CartItems'
import Navbar from './Nav'
import OrderConfirmation from './OrderConfirmation'

function Cart() {

    let sessionObjects = Object.entries(sessionStorage);
    let totalNumberOfItems = 0;
    let grandTotalPrice = 0;

    sessionObjects.forEach((element, index, array) => {
        totalNumberOfItems += JSON.parse(element[1]).qty;
    });
    
    sessionObjects.forEach((element, index, array) => {
        let obj = JSON.parse(element[1])
        grandTotalPrice += obj.price * obj.qty;
    });

    const formatter = new Intl.NumberFormat('en-ZA', {
        style: 'currency',
        currency: 'ZAR',
    });
    
    return(
        <div className="cart">
            <Navbar />
            
            <div className='wrap-cart-body'>
                <div className='cartItems'>
                    <CartItems totalItems={ totalNumberOfItems } />
                </div>
                <div className='orderConfirmation'>
                    <OrderConfirmation total={ formatter.format(grandTotalPrice) } />
                </div>
            </div>
        </div>
    )
}

export default Cart
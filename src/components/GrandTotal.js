function GrandTotal(props) {
    let total = props.total;

    return(
        <div className="grandTotal">
            <h2>Grand Total <span style={{ color: "red" }}>R {total}</span></h2>
            <button>Checkout</button>
        </div>
    )
}

export default GrandTotal
import GrandTotal from "./GrandTotal"

function OrderConfirmation(props) {
    return(
        <div className="total">
            <GrandTotal total={props.total} />
        </div>
    )
}

export default OrderConfirmation

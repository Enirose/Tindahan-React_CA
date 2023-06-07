import { Link } from "react-router-dom"
import { CheckoutContainer, StyledCheckout } from "./Checkout.styled"


export default function Checkout () {
    return (
        <CheckoutContainer>
            <StyledCheckout>
                <div>
                    <h2>Thank you!</h2>
                    <h5>Your order number is:</h5>
                    <h3>55368</h3>
                    <Link to='/' ><button>Back to Home</button></Link>
                </div>
            </StyledCheckout>
        </CheckoutContainer>
    )
}
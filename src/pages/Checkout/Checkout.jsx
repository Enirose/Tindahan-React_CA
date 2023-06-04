import { Link } from "react-router-dom"
import { Container } from "../../components/Styled/Container.styled"

export default function Checkout () {
    return (
        <Container>
            <h2>Thank you!</h2>
            <h5>Your order number is : 55368</h5>
            <Link to='/' ><button>Go back to Home page</button></Link>
        </Container>
        
    )
}
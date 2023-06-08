import { ShoppingCartContext } from '../../Context/ShoppingCartContext';
import { useContext } from 'react';
import { Container } from '../../components/Styled/Container.styled';
import { Link } from 'react-router-dom';
import { CartContainer, CartStyledCard, CheckoutButton, ContainerStyled, QuantityButton, QuantityContainer, QuantityValue, TotalCheckoutContainer, TotalPrice } from './Cart.styled';

export default function Cart() {

  const { cart, increaseQuantity, decreaseQuantity, clear, totalPrice, discountedPrice} = useContext(ShoppingCartContext);

  console.log(cart);

  return (
    <ContainerStyled>
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <h2 className='cartEmpty'>Your cart is empty.</h2>
      ) : (
        <CartContainer>
          <div>
            {cart.map((item) => (
            <CartStyledCard key={item.id}>
              <div>
                <img src={item.imageUrl} alt={item.title} />
              </div>
              <h2>{item.title}</h2>
              <h4>Price: {item.price}</h4>
              {/* <h5 style={{  color: 'red', display: 'inline', textDecoration: item.price !== item.discountedPrice ? 'line-through' : 'none' }}>
                    {item.price !== item.discountedPrice ? `${item.price},-` : null}
              </h5> */}
              <QuantityContainer>
                <QuantityButton onClick={() => increaseQuantity(item.id)}> + </QuantityButton>
                <QuantityValue>{item.quantity}</QuantityValue>
                <QuantityButton onClick={() => decreaseQuantity(item.id)}> - </QuantityButton>
              </QuantityContainer>
              
            </CartStyledCard>
          ))}
          </div>
          <TotalCheckoutContainer>
          <TotalPrice>Total: {totalPrice}</TotalPrice>
          <Link to={'/checkout'}><CheckoutButton onClick={() => clear()}>Checkout</CheckoutButton></Link>
          <br />
          <div>
            <Link to={'/'}><CheckoutButton>Continue Shopping</CheckoutButton></Link>
          </div>
          
          </TotalCheckoutContainer>
        </CartContainer>
      )}
    </ContainerStyled>
  );
}


// ---------
// import React, { useState } from 'react';
// import { Container } from '../../components/Styled/Container.styled';
// import { StyledCard } from '../../components/Styled/Card.styled';


// export default function Cart() {
//   const [cartItems, setCartItems] = useState([]);

//   const handleRemoveFromCart = (id) => {
//     const updatedCartItems = cartItems.filter((item) => item.id !== id);
//     setCartItems(updatedCartItems);
//     addToCart(updatedCartItems); // Update the cart in App.js
//   };

//   const calculateTotal = () => {
//     let total = 0;
//     cartItems.forEach((item) => {
//       total += item.price * item.quantity;
//     });
//     return total;
//   };

//   return (
//     <Container>
//       <h1>Cart</h1>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <div>
//           {cartItems.map((item) => (
//             <StyledCard key={item.id}>
//               <div>
//                 <img src={item.imageUrl} alt={item.title} />
//               </div>
//               <h2>{item.title}</h2>
//               <h4>Price: {item.price}</h4>
//               <div>Quantity: 
//                 <input
//                   type="number"
//                   value={item.quantity}
//                   onChange={(e) =>
//                     handleQuantityChange(item.id, parseInt(e.target.value))
//                   }
//                 />
//               </div>
//               <button onClick={() => handleRemoveFromCart(item.id)}>
//                 Remove from cart
//               </button>
//             </StyledCard>
//           ))}
//           <h3>Total: {calculateTotal()}</h3>
//         </div>
//       )}
//     </Container>
//   );
// }

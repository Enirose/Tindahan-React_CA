import { ShoppingCartContext } from '../../Context/ShoppingCartContext';
import { useContext } from 'react';
import { Container } from '../../components/Styled/Container.styled';
import { StyledCard } from '../../components/Styled/Card.styled';


export default function Cart() {

  const { cart, increaseQuantity, decreaseQuantity} = useContext(ShoppingCartContext);

  console.log(cart);

  return (
    <Container>
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <StyledCard key={item.id}>
              <div>
                <img src={item.imageUrl} alt={item.title} />
              </div>
              <h2>{item.title}</h2>
              <h4>Price: {item.price}</h4>
              <div>Quantity: {item.quantity}</div>
              <button onClick={() => increaseQuantity(item.id)}> + </button>
              <button onClick={() => decreaseQuantity(item.id)}> - </button>
            </StyledCard>
          ))}
          {/* <h3>Total: {totalPrice(item.id)}</h3>
          <Link to={'/checkout'}><Button onClick={() => clear()}>Checkout</Button></Link> */}
        </div>
      )}
    </Container>
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

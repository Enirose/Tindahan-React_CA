
import React, { useState } from 'react';

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const handleQuantityChange = (productId, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <div>{item.title}</div>
              <div>
                Quantity:
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) =>
                    handleQuantityChange(item.id, parseInt(e.target.value))
                  }
                />
              </div>
              <button onClick={() => handleRemoveItem(item.id)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
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
//               <h4>Quantity: {item.quantity}</h4>
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

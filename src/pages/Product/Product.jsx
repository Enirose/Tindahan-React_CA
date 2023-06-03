import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container } from '../../components/Styled/Container.styled';
import { StyledCard } from '../../components/Styled/Card.styled';
import { UseShoppingCart } from '../Cart/ShoppingCartContext';

export default function Product({ }) {
  const { addProductAndQnty } = UseShoppingCart
  const [productList, setProductList] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    async function getProduct() {
      try {
        setIsLoading(true);
        setIsError(false);

        const response = await fetch(`https://api.noroff.dev/api/v1/online-shop/${id}`);
        const json = await response.json();

        setProductList(json);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getProduct();
  }, [id]);

  if (isLoading || !productList) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <Container>
      <StyledCard key={productList.id}>
        <div>
          <img src={productList.imageUrl} alt={productList.title} />
        </div>
        <h2>{productList.title}</h2>
        {productList.discountedPrice ? (
          <h4>
            <span>{productList.discountedPrice}</span> {productList.price}
          </h4>
        ) : (
          <h4>{productList.price}</h4>
        )}
        <h5>Description: {productList.description}</h5>
        <Link to="/cart">
          <button onClick={addProductAndQnty}>Add to cart</button>
        </Link>
      </StyledCard>
    </Container>
  );
}


  //   const { count, addOne, deductOne, clearCount, selectedItems } = useProductsStore(
  //   (state) => ({
  //     count: state.count,
  //     addOne: state.addOne,
  //     deductOne: state.deductOne,
  //     clearCount: state.clearCount,
  //     selectedItems: state.selectedItems,
  //   }),
  //   shallow,
  // );

  // return (
  //   <div>
  //     <h2>Cart</h2>
  //     <div>Count: {count}</div>
  //     <div>Selected Items:</div>
  //     <ul>
  //       {selectedItems.map((item) => (
  //         <li key={item.id}>
  //           {item.name} - Quantity: {item.quantity}
  //           <button onClick={() => addOne(item.id)}>+</button>
  //           <button onClick={() => deductOne(item.id)}>-</button>
  //           <button onClick={() => clearCount(item.id)}>Clear</button>
  //         </li>
  //       ))}
  //     </ul>
  //     <button onClick={clearCount}>Clear All</button>
  //   </div>
  // );



// import React, { useEffect, useState } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { Container } from '../../components/Styled/Container.styled';
// import { StyledCard } from '../../components/Styled/Card.styled';
// import Cart from '../Cart/Cart';

// export default function Product() {
//   const [productList, setProductList] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isError, setIsError] = useState(false);
//   const { id } = useParams();

//   useEffect(() => {
//     async function getProduct() {
//       try {
//         setIsLoading(true);
//         setIsError(false);

//         const response = await fetch(`https://api.noroff.dev/api/v1/online-shop/${id}`);
//         const json = await response.json();

//         setProductList(json);
//       } catch (error) {
//         console.log(error);
//         setIsError(true);
//       } finally {
//         setIsLoading(false);
//       }
//     }

//     getProduct();
//   }, [id]);

//   if (isLoading || !productList) {
//     return <div>Loading...</div>;
//   }

//   if (isError) {
//     return <div>Error</div>;
//   }

//   const handleAddToCart = () => {
//     const cartItem = { ...productList, quantity: 1 }; // Add quantity property to the product
//     Cart.addToCart(cartItem); // Call the addToCart function from the Cart component
//   };

//   return (
//     <Container>
//       <StyledCard key={productList.id}>
//         <div>
//           <img src={productList.imageUrl} alt={productList.title} />
//         </div>
//         <h2>{productList.title}</h2>
//         <h4>
//           {productList.price} {productList.discountedPrice}
//         </h4>
//         <h5>Description: {productList.description}</h5>
//         <Link to="/cart">
//           <button onClick={handleAddToCart}>Add to cart</button>
//         </Link>
//       </StyledCard>
//     </Container>
//   );
// }

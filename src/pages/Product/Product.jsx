import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '../../components/Styled/Container.styled';
import { StyledCard } from '../../components/Styled/Card.styled';
import { ShoppingCartContext } from '../../Context/ShoppingCartContext';
import { ProductContainer } from './Product.styled';
import ProductReview from '../../components/ProductReview/ProductReview';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { IoArrowBackCircle } from "react-icons/io5";

export default function Product({ }) {
  const { addToCart} = useContext(ShoppingCartContext);
  const [productList, setProductList] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { id: productId } = useParams();

  useEffect(() => {
    async function getProduct() {
      try {
        setIsLoading(true);
        setIsError(false);

        const response = await fetch(`https://api.noroff.dev/api/v1/online-shop/${productId}`);
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
  }, [productId]);

  if (isLoading || !productList) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  const { id, title, imageUrl, price, discountedPrice, description, rating, reviews} = productList;

  return (
    <ProductContainer>
      {/* <button className='Arrow' onClick={() => window.history.back()}>
       <IoArrowBackCircle size='30'/>
      </button> */}
          <StyledCard key={id}>
            <img src={imageUrl} alt={title} />
            <h2>{title}</h2>
            {/* Show the product price that has a discount but not yet deducted and have it underlined */}
            <h5 style={{  color: 'red', display: 'inline', textDecoration: price !== discountedPrice ? 'line-through' : 'none' }}>
              {price !== discountedPrice ? `${price},-` : null}
            </h5>

            {/* Show the original product price and if price with discount, hide */}
            <h5>{price === discountedPrice ? `${price},-` : null}</h5>   

            {/* Show the new price after the discount is deducted */} {/* Calculate the discount percentage */}
            <h5>{price !== discountedPrice ? `${discountedPrice}.-` : null} {price !== discountedPrice ? (
              <span style={{ color: "red" }}>
                {Math.round(((price - discountedPrice) / price) * 100)}%
              </span>
              ) : null}
            </h5>

            <p>{description}</p>
            <Link to="/cart">
              <button className='product-button' onClick={() => addToCart ({id, title, imageUrl, discountedPrice, price })}>Add to cart</button>
              {/* <button className='product-button' onClick={() => addToCart ({id, title, imageUrl, price: discountedPrice ?? price})}>Add to cart</button> */}
            </Link>
          </StyledCard>
          <Container>
              <ProductReview rating={rating} reviews={reviews}/>
          </Container>
    </ProductContainer>
  );
}

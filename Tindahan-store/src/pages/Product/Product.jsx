import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container } from '../../components/Styled/Container.styled';
import { StyledCard } from '../../components/Styled/Card.styled';
// import { IoStarSharp } from 'react-icons/Io';

export default function Product() {
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

  if (isLoading || !productList)  {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

//   if (!productList) {
//     return null; // Render nothing if productList is still null
//   }

//     const ratingStars = Array.from({ length: productList.rating }).map((_, index) => (
//     <RiStarSFill size='28' />
//   ));

  return (
    <Container>
      <StyledCard key={productList.id}>
        <div>
          <img src={productList.imageUrl} alt={productList.title} />
        </div>
        <h2>{productList.title}</h2>
        <h4>{productList.price} {productList.discountedPrice}</h4>
        <h5>Description: {productList.description}</h5>
        <Link to="/cart">
          <button>Add to cart</button>
        </Link>

        {/* <div>Ratings : { ratingStars }</div> */}
        {/* <div>Reviews : {productList.reviews}</div> */}
        {/* Render other product details as needed */}
      </StyledCard>
    </Container>
  );
}
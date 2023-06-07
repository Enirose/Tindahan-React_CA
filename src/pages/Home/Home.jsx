import React, { useState, useEffect} from 'react';
import { StyledCard } from '../../components/Styled/Card.styled';
import { Container } from '../../components/Styled/Container.styled';
import { Link } from 'react-router-dom';
import { SearchContainer, SearchInput } from './Home.styled';
import { ProductsContainer } from './Home.styled';
import Loader from '../../components/Loader/Loader';


/**
 * Our API hook
 */
function useApi(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        setIsError(false);
        const fetchedData = await fetch(url);
        const json = await fetchedData.json();
        setData(json);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, [url]);
  return { data, isLoading, isError };
}

export default function Home() {
  const { data, isLoading, isError } = useApi(
    'https://api.noroff.dev/api/v1/online-shop/',
  );
  const [search, setSearch] = useState('');

  if (isLoading) {
    return <Loader/>;
  }

  if (isError) {
    return <div>Error</div>;
  }

    return (
      <Container>
          <SearchContainer>
            <SearchInput placeholder='Search..' onChange={event => setSearch(event.target.value)}/>
          </SearchContainer>
          
          <ProductsContainer>  
            {data.filter(product => {
              if (search === ''){
                return product;
              } else if (product.title.toLowerCase().includes(search.toLowerCase())) {
                return product;
              }
            }).map((product) => (
              
                <StyledCard key={product.id}>
                  <img className='product-image' src={product.imageUrl} alt={product.title}/>
                  <h3 className='product-title'> {product.title}</h3>

                  {/* Show the product price that has a discount but not yet deducted */}
                  {/* <h5>{product.price !== product.discountedPrice ? `${product.price},-` : null} </h5> */}

                  {/* Show the product price that has a discount but not yet deducted and have it underlined */}
                  <h5 style={{  color: 'red', display: 'inline', textDecoration: product.price !== product.discountedPrice ? 'line-through' : 'none' }}>
                    {product.price !== product.discountedPrice ? `${product.price},-` : null}
                  </h5>

                  {/* Show the orig.price and/or new price after the discount is deducted for the sale product */} {/* Calculate the discount percentage */}
                 
                  <h5>{ product.price === product.discountedPrice ? `${product.price}, -` : `${product.discountedPrice},-`} {product.price !== product.discountedPrice ? (
                      <span style={{ color: "red" }}>
                        {Math.round(((product.price - product.discountedPrice) / product.price) * 100)}%
                      </span>
                    ) : null}
                  </h5>
                  

                  {/* Show the new price after the discount is deducted */} {/* Calculate the discount percentage */}
                  {/* <h5>{product.price !== product.discountedPrice ? `${product.discountedPrice}.-` : null} {product.price !== product.discountedPrice ? `${Math.round(((product.price - product.discountedPrice) / product.price) * 100) }% ` : null}</h5> */}

                  {/* Calculate the discount percentage */}
                  {/* <p>{product.price !== product.discountedPrice ? `${Math.round(((product.price - product.discountedPrice) / product.price) * 100) }% ` : null}</p> */}
                  <Link to={`/product/${product.id}`}><button className='product-button'>View Product</button></Link>
                </StyledCard>
              
            ))}
          </ProductsContainer>
      </Container>
      
  );
}
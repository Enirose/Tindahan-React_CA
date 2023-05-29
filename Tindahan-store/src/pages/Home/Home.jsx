import React, { useState, useEffect } from 'react';
import { StyledCard } from '../../components/Styled/Card.styled';
import { Container } from '../../components/Styled/Container.styled';
import { Link } from 'react-router-dom';


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
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

    return (
      <div>
        <div>
          <input placeholder='Search..' onChange={event => setSearch(event.target.value)}/>
        </div>
        <Container>
          
        {data.filter(product => {
          if (search === ''){
            return product;
          } else if (product.title.toLowerCase().includes(search.toLowerCase())) {
            return product;
          }
        }).map((product) => (
          <StyledCard key={product.id}>
            <div> <img src={product.imageUrl} alt={product.title}/></div>
            <h2> {product.title}</h2>
            <div> Description: {product.description}</div>
            <Link to={`/product/${product.id}`}><button>View Product</button></Link>


            {/* Render other product details as needed */}
          </StyledCard>
        ))}
      </Container>
      </div>
      
  );
}